/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "5LwyLpDhNeQfN6We5U64qr4APCpk79T9fYtMbMMQXSwCJLHXev83iPwNYUpSqhaGkiNfCRihAzmqHFdRtveXDGH3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9BXi1eg34yHxV7Zy2yqgALNyn4y26x12uDY3pa89bpKrDVmm2vw91ewnTgoFW8Yi22ThmDjZBwTSmtjFJKDyreo",
  "key1": "2dX7tPdb58LMKcAqjCS2zAhmLb6ZMjGeZfviwYjGajyoMCLjYtiG5KdLV2Nj5YCfy3XpgCR5TFXxvqbQAp5vzn7B",
  "key2": "4MkbNY2wnzBKCdWsg3PAQz5AXRk5VAHzFCuKYD78JkHBpzkYzCX71xxQRdCrgvVsrrGLie9NS1F329t5X2NDe6Jk",
  "key3": "4omL5m3g5q16pvEkuP1V1j6UvrQijP7CvAcVjRDeiuCm8C2LVw5QDfQSzBu2n51UMGKUHzmWnHNVbNVbrxaL9LPm",
  "key4": "455G2C7Zrs6kGTqUwEfneh3EsDa2DLciC68Sx2Bm6F5qXvX3kNU8ffprrnxjv7HkhWPrMDSorUqJocsjWAA7Cy11",
  "key5": "5i51mSg6Rx6bp7uboZzbeoTD7YZTSgW9kc6gMK2gfV2NfK63ph1ycRMyQ9Rkks8U2CXEPo92psT6rVReVLqkj2cB",
  "key6": "2cqivKVKw5ZNHraWAHErVxpsaHNWe6RLUbsmum5FxuY547M7bjtx7mkj6PfZkNgENPSXm2K5VcM68zf2JDV6ZN3V",
  "key7": "417P7d3Bz8bxL7LJoEGtffQ3XZsfvBXxeyJiRKLp8s9DPDjrQbLVi3oDimMaHPEMocs7vbFdXw8DwUZpJM1d4avP",
  "key8": "5KHmV4nsVFMYw5AFLNzKyC6pHa7Sf35YnC8KyzKRmVyuW6QVgdSPEcxfrBKYV2bik9NzB8E6Z4SRDJorYGDoK5JU",
  "key9": "5Pmn3UkCcpEQHnMVGB4VS7T1e5PNWpfstL28rqmzGe6wfEFeeERhjznpwTrQw9x6HU18T8HWbPpkZq5cmwivLMKh",
  "key10": "35CaBtDKSirFHuF5a7LYqQjauyssV8qwwukZicbEBuiNVQ394aCN4eeQsMYfPbKc3SxDXohL6YWyTVgdJSm6ir3N",
  "key11": "25nEG4fYWKjgP814563StVccYy3JFYmXjcSPzeMFTR3exmf1mBCDu62wis5EBobnnRVKHA1ByDp6QSAeJ7Y43boD",
  "key12": "iURjWesK5F9Y63x5f5cCG1nUz27rNgxdcJoin7JVukwd24jkDCUJbAWPEcYo2SBCpX8ikDrFsbJsdXNBM8YfD2L",
  "key13": "eoU7gMNECGUa5Y3g7gEKeD63DUJ53e1bh5UnLGno2rNzoK9pT92k4YnBzTXnjKUatXUZnyVCa4tz8AUCg1DzBd3",
  "key14": "4yb4ucoYsCQxZVtq4qoRcwBMdRSTYwmZr34zmmZA9wPLx1RpBxCnxvwfWuAwhnZNAmCtTrMo63BfUyhnT1b6n8oS",
  "key15": "7LpfCN4UKCn3fnEmXCFSzafWtApw77FqJB6udLKd1h5JfbkQpu9hgjqwxZ9fTHJywCvjZjxpD97L9Q1nK86g3bR",
  "key16": "3d71dhqK8JH7yAHCYRQx36pyBYMeKMN2tNkK2MtujWfN4jNUtA79otgFEiAXaf5BVGyPLEYgK3U7UHPYmfPvjR3h",
  "key17": "iHhKKEVJng7cAovqvPLb1DqNLVQ6sKxT9Xfbv4V2zFiCUMwqqT9pzEvgir4VDa6WMz6ZhJMPFnfnBLq7cgXMBiP",
  "key18": "52Mn4f5boxoVybB4g4qrP6Ezi3XxZ5mJohC47L1py7Ehbrzv9XbkYrdxYZdaX2ucGM9Cy669N8cHHnpz4wPgiRYN",
  "key19": "5JrNdTeS5GioBP3A1MfsVgAWAvj85pjVPDh27WFNA26aZjabHKh9ag9xVNPehW11HokUhmaLSWfJszfmNnbaT3bd",
  "key20": "3cCLsfonTc7BNesC4dShpiBhzArz2sRCH7oSsW7AQBUpu1QbJ3EdPYoyeAvxiBEcrvFHvfS2ZZh8TVRNJM8cpyPA",
  "key21": "4V5198myeZKiCvq9hDd6vAcYMPK6uxGDYcj5JyfCgECi5oQ1mpiDVHnVub7KdCUh7ghtRXrn43T7rjNqxRge3EM9",
  "key22": "3BWakHY53cefaXywY8f2wvcjpPMtwphbQkPx7zXHJsRVVd3QQuv6tA7kLEQSmHdBvh9LbJn3wP29ZM4aoBvM8BbR",
  "key23": "3tH5wqM8rLVjCEXqfSUPvf9fUYogPKmFyKBbHZN74TzMzGttTUYBuTohW58wG3diCSTiRRsU65MazfqGX6EexSNL",
  "key24": "62wc6qWf6vHbBoyyn5mroyFwNqh1kT38zeHGRHaKfESsNYoD1PbPLRSeLHW7j2hkyRRkYeGRokGYu3opXLEaFGs9",
  "key25": "4dH6jeWokfKd6S3ahPSNyWT3C4sifqq4Pm1iRQiu7zwzBZi6AYVXGDiJ3tLYQeuBXeYDVeSh2r2VWRavbTWdKHsm",
  "key26": "QmrcnU7P3xyPrjytyWsXebsurg18jMjMszASsXPhRNBVUCjp3BPWrVYTaiVYpVRaUdsxJj6tUVLtbkwwKxecKyC"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
