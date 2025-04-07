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
    "4eoJN9aBxsZ5T3JrMzA2BfAUysRphUf35kHPrFXvE8bdpm3iN3KFurUgWdF3x6aKbTzoj3XT1H6BT8LJFABqBH3i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x8T68shUM2t47pvtRH8cnehBFMFNjdJgELZoknyVCbi7ffSDv2tsMeWpjgojPCDBDwbnm8KMqx98nUjiRynrLET",
  "key1": "4snYvdWDtM2bnrtQBs7zi9NhSVGYAz1dPSoUTRmYWftaKu6RuLF9EbsHFVurtexEQ8Sh7LNU2Gx3DJKrST6exBYf",
  "key2": "2FmcpaxNvbkHL7mKhfQdXDUoqpPr8GWK2NmecCCF6HAKuRjkNyYBvvjzBLB11AxMVnrLVCJKFdthYXAU5RftDqT8",
  "key3": "2Rxa5kfFmn43qhopUZidvtP71vjkUSpNHvD4dFvv9BKajxhz9adu1Hpr3kgE1No5uk2idjomQ7M8qxxWcMbb1APC",
  "key4": "67hwDWdSPbjSPZk24MFpoVfkP79nb35D1En8k6HHpQBM9HoLjTS7XFaN8wQxytL16R4zTcnYguDFyzoiBSRqLMmj",
  "key5": "5sRRfYjvL493ub2cVPA8nh7uuqpBNgC1pZZGqAnkb55xL6ACBiA4We37hn7ta1CcgvCFNrH3rKTUrz8Ly2hisbPs",
  "key6": "66nGFUwSfbMjEcRVC9XxUe9TVbAkR4HsFvTUvLEeGqqkJWpfdeu5qbCAc6azgfAHeAw5VEAo7C5XtmLKnC9dqXpE",
  "key7": "5EMcKsRMQ9wuSoHE4hC1maUnwJzqw6Pc59PBiVYRJ36sn8H44dhed5aEW52cJd2BYAErE9pbatQFJeuaPMgG1w3f",
  "key8": "4X7vDkfyb287sTgXy4Ud5ohdnaW3uc4p6VZn2544WzBiBrTg6rCS834mzRaPBUqQohomR5xSnbUmVvFNTywrrpq4",
  "key9": "2cRqzG19MNkoXRoAP4vAPwRjwxbkGep7GCVYDB8w8JPPbXL9o69udTT45hCUFwHVeyBkSGcWkVtCqNzGa4QgQ3Y3",
  "key10": "3TNj69MxVcvQkMp9RRns2xmn4mYeQYmgxhhzx1RfiRt1kPWoR7DYbpiiXvHRdCRArFYAqkHS134XPpxZAHYvMxcs",
  "key11": "52pigEB9zRZNLJeiGTiXJBD52vFK4rttUgb8YCCTmeTfknvT72oAUAmKTyZxKxDLYKhAqhXwRXCnVAqmq2CGKPCP",
  "key12": "5FcLTAog9gmwR9grNa3eABgFMckLivfA4Eu5p4VX9a1qYyvhTRgGowq5a5ZkQQR3U12MGtrnTUXyLaKSw8jDi445",
  "key13": "o31YEYVTa1MEASu9rPJ7iW21s7sfHoFM9Dh3rvgTMWfGgkioH6BT77VNWSDUcLS8xbMMgWsBCsbiBHqwg9qxzMq",
  "key14": "3K9yBu9CMAyJM1Hp73VXaZoeT2S6zvzn1Gob8ZPBSzDf5sVsAnrJDhQ4LJa7BiwPmZA6a7kVm48U7rCtBGBKYS1",
  "key15": "5udMyttzVjne99gSw65rLP389ejSiKqddNL5puutkJ88uuS9S4H7cReo1YZ8XadbLoYtGMtK6PRgtjZhq9hBFTxu",
  "key16": "4WQqaU42KJfMCL6TqgvPdfHZkbtSgXYtE8K4kLM8namGqTwGFwSpaBzCcMSB1zqwjhG5fwbS9N82Ky4AQSzo51Ct",
  "key17": "2ZDwoRndVbBpDS94jBGyEV9HnhTpCUn4rByv4TYELwB47BhCrZCeRfnWkxwfBdTY8X5SZQwbYG1rTwAgf9mJ42Ak",
  "key18": "2UyFVgzzueWiHcQy6sToVnRv2823h86Rzughz6jVNmLzyU2vphnHeZjpG1ivX4V17T921akh6FgzLH8foLdcrwu9",
  "key19": "5MMLkKFJzR2hQrNTLYxZPwHf7ofaqDageQMV6R4sG4gcDf426nUJ65Nho84sgqkDEHWeBA9hEZUWmjJJPVvRLUCZ",
  "key20": "5QZ7nP7o2vc6vxFVw6BUwgSeQvBCgoSDyE4hh3f1MNfmSnd6YEADiiXAh5FJuwFqZ7ugJBzCiCUMFgaBbuidohFv",
  "key21": "27u4CusJU16AccvDkRgDNdZ7Uht8V1HKGmRyL9JqMhLCSBEdopXw58dsdPtAKgEVmZprovxavG3xP5dp2jpDav1G",
  "key22": "2AEGbDQXBhH7UqHM6zBMEpATFXRVkQCui1bN3erEwYtycWTCwQEYSNjaRC7EsF3smmjS7jZLZnWj2gfKvyUDJk6j",
  "key23": "2nWpS7ha5pCLGMLo5zYZmkv7zX4afbpaeHSU1TZ3NY1VZC7LfDH2DxQqmMGLf1k8HDSjc9xiTmAcWFRod6bydeBH",
  "key24": "4SzQfQnaLxf4gYWdyJ6CJDmt2Wpf2nAG2WeHWurke3FaGpVzRoRUPh3QJrTipcGLBfDPF8wp5ogTXJc4Dx5q94uc",
  "key25": "5c3Mi4D3jukoY6h71sqm51hD8pnGkUjpH9NMdodVc2nwoKotbyo4eCYa4CfMkZHZ36yCqPN3MEfLuaXCqXEFKSnP",
  "key26": "44kHiQAYFPZoKfV3qt42MiUNuid26y1y37Q9ScVy59RWxLm1hGgdHvxwLX8pzxoMe1eHg6jMmXQsrhkP54SELj1A",
  "key27": "3FPmwWnZ6vCSBs5yquj3g65TTUEMujQyQ6gok4AeohGqR6qzULuS7RtMBbFfiAHdZ3PTwL8Dsa6XkQjysmeWo7Eb",
  "key28": "5QJWRYqzFkK6C97mha86McTNfqyhaGdJCzSDm9nX2iSfGFe2Zhqigrc6MQ4u9yxYWkmoEiihw8jGjauLskKSGWmB",
  "key29": "YdHcTpq17hpKfp2smWM454PLddutd3M4irsgSd59UNmgtD2zPqyPzFhMMvNvU2u8xzJPZXRfQPYCS2cungLMgZD"
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
