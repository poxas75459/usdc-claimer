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
    "y2kYnNGR62n9i6RMWqfDFGhbBtmawxuQC3qCUQpXfmuJfYS7pE3T9n9oMnM4c4EMoyHSmtW29xousWZe5jdxCfB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CUdCWYdek3enQhcyfqjh7GnCaFLNCzfeEzwQ36T7LLUYCdNKyKYeJjqTAPGX8Z8yGLhYwoqSiXbmoSanTLpNEri",
  "key1": "457K4ZW9oa5hp5mjFGh2bBFwZ7Y9aLeJckJHitLyKc4zpoM9qaa9VsX8pDA7PSzxseL6sJejH9rSXcSPqQoRjyPn",
  "key2": "2a6CAxVNhdhqyJ5WCwU4wD3qSzbBdRyyUh5igwZLsKWEsZNjkQC3abpPTjtPhSFwPXKvwPFZbk2jdBazT6VxGoq1",
  "key3": "HZjVshLVCrRXPpAfYsnvhNJq4nBjEvaU3TXALntKNiXSxSYSaTXXwde94vxNh7ULk75C3i5RDLEEkWb2ftQ37Zo",
  "key4": "371WKeuyUTPW1q8zwm5d6CpmQ6BZ8Ta1GJ8cokE3sZdZ7pbg8KFtHkTfvaVgm5tg7q5eaHL1f7q9iywkSVDY6YSh",
  "key5": "4z5HrY3xydjWpmQmAGv8CepbLPCecPp3868HWVgdg6Z815nPAc6xzTN8ho7jgph9v843uUNUqMGJJoxE2VV3Vp3d",
  "key6": "41ssE7vx5PZZ7fwX4h7EizBf4FbFceFRMDDBgVATWawpVZGA45jgaPFcWL71gHepqRZvLCLedVqEHFzQQXWjXTpE",
  "key7": "59Za4bY9KLMhgTaHHsaDwLnepVWzjwpfNptvTa2GzJnvaDMsUZ62DAVswwfBgdvzgZ61qe7zu9G77SPQqDgp3FS8",
  "key8": "5CvBi3JRkWRHZ79N4k4m9rq4uG3reMKJGTqsPhcUJEYNHrs4uf8SBRDecsrps3puaJKxDsRi7GhXUroZuLC1R9pi",
  "key9": "3FoQoX5TpV3TkuUZbCiA1C5PBGndGZu6HHk5nBXa2ZkZN72JrcKdEdmkBy4qmLFeHSvEYT4QMrvq8sL6SEA5s7PF",
  "key10": "4cCusWTn9iyjcarH9eGQp1tKdHaMVvqu2V99PvsBaZ2QwLWLzyPUmwRjtL5Z1ECU3VivQgX8LTfZ6X5EEcYHmdM6",
  "key11": "4ei3BfYWvBpRxDhxAc45ZhkdnJBVsvfniFVZy1DsiradMqcUQVjFStyicNSW4BXcGH4pg21gy3nQrU8jcq6V3pk4",
  "key12": "3vKgQv1ApVQRQ6bbCaYKBbm8Fjb58ZGMwkyVWJhAZSfec8yn5UqVphmzfwNyaaAQq33qDZ4sM9rP6CHk29Xkw4cp",
  "key13": "cPTTbHujPqkt3YGY4xhFdoXjd9eHnNoJa3nyeKVugkU6TfPpG2bRS4DCLVpWKdiUCBYfuGZUCiubK1K1U4RRU7B",
  "key14": "4zrCKgwb4r78gFfuwkkpcQDceLQqNYT151xcNi5DmnVCPnWSvA15p37fwyKTZswJi1tm1z7ubQQDBieXsi5FckBU",
  "key15": "nogaxmTaeRTFYJG3ZAUMgy3FiSYNHVzX6N2bC4P1WpSaDcgWtyK2rVtVW22BGwcMJVa4VhPiVRPF47MYKqzw49A",
  "key16": "3NodhAPySP2LunyTov8MpBFyxpmC88VJL6c6TYkMiSGLkimN9dxyXa2BcoHczDkgtXsbHxkrGXBNcjZ1vQ3hmV7U",
  "key17": "2xeFiqZmbew76ifhbJJfJmAKrKW9McKkaKoGqfHtjQ4fUdAp5QgSzAX9MgKEz55sRdTGir4iHELyNpsgK5k2aKZb",
  "key18": "2kHqQ3YjtfYARhh1H1e34xy9MT1RHwVNc9HHqzYpY2WDQM8mhwGzqiUopaokAGduwDtpAbkHDMm9kpbhCJ9gcAVp",
  "key19": "76vKeM5iSzG7Mv1rWdhX7nCDxUC1dJYCxfYX3NjNYWoZu1eJcS4xppfK8ubsVZe7QUsJgfrcgWfKecK6ZooRWHD",
  "key20": "H9JFw7Jx5N4E6BPBsUbwhTvUkN6hVNMsA4s2HTu2rW1ZqKEXfcyzp7oQWP1gxt4bNyRAvXqzhe1rq3ZmxQ5Nj26",
  "key21": "329iCrRAQaKtjFLHvvS1YLKHQMuhpWr5DMqrLMn6mHvkvXifatziFUPU5eqX54XTmmyWpzA764vmBziVcqpuXRDq",
  "key22": "Hoje9yjBnxnHFyu93cn5Cq2T1JDBB5exX4TKHkrw4Bk1ZK63EHRayx5SA1WdLcLqizkMvTZ9XfbkST77YzUhdZw",
  "key23": "4u95TgsdqJ1NqH37cARyzMFGquVui6QFuemUfiMLsC3cxhYdDmLJYpWnpsWq14AAadbJk4PURAqVu6X75e5X6LHS",
  "key24": "5wHoHu2QEF6zTAc16qG33njWCsukLMCS5We6wGastKE7i7roWQdZyUPJT4mq3e8jdzgTNRw3XT83aXGny3dVs4q3",
  "key25": "55GwbGKncu5CDbczbsKqMMiJc1ZZFHkiRhSBAJwBfMN2B2AZiAYVwNYLHEGhuFtkZ1bP28artbGkCyDgEU8yfLSB",
  "key26": "2W8sTisjzBmanKUXFSb4tHx5yDKvJAPDrq7Lz5Pryj31x2sTzdT9pwedbKJKfP6aLjWt13Ym6jduMo2sGEdtRgVc",
  "key27": "T2EuuzWUG2U8a1Bb8TKQWRpjoAXpLBQy23FEBWDcGWNJMZJEdgRozLBHo4vZyEJ28M3pxXYxPsF5xrjjrvBkNQX",
  "key28": "nWSPizvBkZNMFEVDwPnVNbxjRT3pDiJGYSKcty9pSEZYgRuQGWeR5Z3s5GbXVNEQqAD9HZQJ7CmPsbdzHHfyZz4",
  "key29": "33jMz39iVWVFur9v9akWmh2aufJWNjk4CALjUTnXSkMyuvcywfDvKfAFx18aXLpS7wsqebDeLtg3rLym6Cfsj3Xi",
  "key30": "21wer41VJM6MCT1keiwQVBNoqccTGpuHNgV5ekuePqmUsPDLwH3utz2HP422bTUqQzjkSiM9MtGHk2AKxzw4jYz4",
  "key31": "DF8SGgntDxX7LUE5ifUQGJRyyjDHKGVo5SGpDW3DsF7oxd7SsYfcM3ApE81fgLYaFzbhSoEHfMiBtudaeQ6NyBv",
  "key32": "5CeU9ew2g2TCVLqCDRye5cpAJ5TUTtr3HPaVdCFvDEyDNypGV7rdeHTvA9vSiiexTxnLttkeTf9dPxq3ni6Le6Ab"
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
