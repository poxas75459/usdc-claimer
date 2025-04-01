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
    "5DtGYhFa3z5JBDKip15EWS95Kh23AuxFPtJ5YL4F7687cHi1iFLbQe9PGKLxx8pePqRh1zLz2dmsp4PFt7NRaqH3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Faeqzuij3iwMkHTZASUWY3vrEErThfmXcLBJgnHt7Bj17aY8fnAYwM7GT5QoanFrTzY5hc2x9r4eVMuS3MfiznJ",
  "key1": "3KvBY8YjNgvx7XHGBheG2kLR9RqK2fDzQA3akxDMpjEEs3U3NxSfuJj9DiQNQVmzqVJMK3hAYu6AwSVPs2Uv4CFL",
  "key2": "3UNa5jqUsLsQgm6kHQmzUutaZshZjwF3ar1qR6cd9ftsizaAj17bcR1TKYwUGdvwV3b361z6zatPWcEisyaTG1fS",
  "key3": "5dNggqzispBq6ZgRpjx8v1nKaKdBxefDaQEUy5sAxnxni1KiNKh3BQSK4xDVqD67CRoUgLa34GanzTmarcsa4vE1",
  "key4": "28W5FVnRfBE7Q9JbRyy6s7BJMxz9WfpxRnDMDTzajPgPJHASts7w4UzSXtEXnN3taBTgyeLKXW4zzqYy7zRFZipA",
  "key5": "5DJuuG71fAM6Avs3qAyuPk66CiyVwj9nRTcUaPmo3fxGhv69qsCvcmMPTbfAV7hR9PAvTvSqgvC42EkzBDv2ErQd",
  "key6": "3kyJfieJSB9L8apXMmBS4aTAoxRhYWCf7KVtxpNBQs5KVd9PLoisMWwESEm9hgbvjzRvj9w72P159aNJgSJU6PZn",
  "key7": "2T2DPWcCX3gYQq1bAJuGQMxsmYY61ne2nNkzyx9sTRWpmYc1bd3Sg6KfxE8qjHMAkQcFYS1srxFBX1RRqWoZVb59",
  "key8": "3J1BXi2vhEP4PwpgnbiYcddWSRaEHtm74egMaYeUq85Cqgi2gZYDjLJBzyo7pQRwQ6WeiGS2cHSc3T8rKUM4ScTx",
  "key9": "24QUjhTtRYz3LQCyj1jcp5DvFdi46eH54icvT9VrLwsRpCeX1WAQrDrPCFpL5TJpgMsdRCpvS5B7xN4jHNMMVoVm",
  "key10": "3EnWWNiD1JtPwXfGni9kBAeDoR7VL6LcuJK85WSRRemrSarbYXARroqRv7u4n1q1aFpyxNrMgB7sNLmnne7LQw7m",
  "key11": "5to9aiw6JnMhjndGziV4ydb8dK56tfwLHCFA1aUHR1xk7vXaH6CKyL7wkHXPhEZeoEaQe7cjuQL59ufbQA82TF6H",
  "key12": "yN2xVV3vS3R1LkzNku8cMWXEaBTdQ8T2R4GPiTSkoM484aPnBc13uXzqQjvDwU6APQTCjJwgw6BRMSNoYmF9ao2",
  "key13": "DxWTrfK9KpxmtKVkaRPfMuubwsysvRN9FjStrj33VEnqhBYB9Yt2Yv1TXcewCAzCWcSFKtgA99qsnBtSWVLyCtU",
  "key14": "5W7U5f9D5XFAnKyMBHTWQ1Nu2Qhm62mBa8PLNDHxjtBuLxbGPYHB4up3FY7HRh2eaH27ofETBuKnfEuitBbAjXpL",
  "key15": "4Tj8tPnu8qYvGFjxpMnJPgupuoGiJVHbmDA96jZCSCgF3t7GnKQDkBbmhbUpPAREYktkSX6xGd1MSsCVYShXZ1kC",
  "key16": "3tAF5KgCERQgvNHTUzUWKx6VoqhuKp6ebaJVcQcv22rBXVo4J257W5hwb9zMqfAU9Z2VW6sxearjvcLXsbHEPQ7G",
  "key17": "48P795My7uvTB8WFtCngkW51jsLcpjW5cRuWaCfQhoWVP6xPNfwj661FCwgz631eTk7jF1smQYSsMd96CKh3WbRC",
  "key18": "2ZhYUBVBHdT996wnM6SYihvPwprao8mNgmzs5c86ewZiZGbfxXb1UMcnrqGZj1Fg91MxQQnv7NuctThqDS5Ptewt",
  "key19": "3EgQZmzWYHwZdchTYRD5Q72GnFtUSTUYx7yUrH231XCRP8MBfywSuegL3q4vfPyYuLenYDgLG8sMitnhPxMfQqsq",
  "key20": "5WXVsPeQx8CkvVYuv3ii9cuPTtj5fjEHETcQ7Ysu1mgzREoC9rJnoGCQqpX7MW9rZL26mQwDFZbWgG1vrfWQrnPY",
  "key21": "3R8u15j7Yi9WB9erWBmgb8tZutoKXWCmkdZXygoZkESdxgoQFS83mjDwH7crWhKTH5jMHUoBvTLMVgi8wRJXfy1c",
  "key22": "3MVT5syXb27TjcezwGQDZTaesMUTFHwNFaHfbJiaU8ZNJHighdoe1KbdJ2GWhcgDvzKX1csD6XxjbnzcJG1w66CM",
  "key23": "5TUEViKkuyrQeEGJZC6n9be1NmF8iPx8rczV5bmK1GeFZV8YfsfUvabf9LEBMuB7FMCUWp4rnvKM2cRRVne7TkS",
  "key24": "4ST1d1SxCuNMysBRwKw18KJzD4Y7C9ZuGdUtZ4Gox235LH1U9pe8VNq4XeUi29wAQuBGD1eJoUVy4x2pMppfh7C8",
  "key25": "4kmU4cDqaX3AEbMvH93ugn5gowxmT4DWm2DSxnixWjHMxJEXaZTJSRRDQyp7fLnGBrnw9WUNqEk8eTRJEDDKm4Hy",
  "key26": "3sFTKcLuR7LKBr8kxwvoM35Z3tEVY9s6dVYzxkkLyogMvMEd3DHs7vJTDTMbKXYEZqwybRX3qCosPoXutSDE2Sxh"
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
