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
    "taUz6eGZYT3R8wjLbD3U3wJDjgAfDtPC4WGmJBkUAEvpYehMJ8MmpKfAD744wP9gAvWu5GtxmPviodueifUPpqd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66vUim8VqBWXwdVJocR4WWTi6HQ4k49BMqAcXDV2F3h2v5FCg7kPQGhsdZTY3uUT9FoYiY9LAkWzdZ7D8QEHyfSh",
  "key1": "3jPw1tzNReYmZPYp8j5NXeEUxBuYa69N2KrKhWtNgDd4LZD7dTYaz4rpmvKQqM6ip3Pak1ancwevoAHN3TXdTuU2",
  "key2": "5PuCigonzQYnZK1RPcN5tAA6oJjQMtCDcEWMWPNjuMiynCom6hUBmkMLUmXXHcJBJt4fT9EA2xiGN3SQbomhekEA",
  "key3": "swprYGtrjCezesN5ai2TRqU8wQXWbgQXNDL7jd6PEZ2BnTF7hJnQ1KWVUhbwjpY5vsoB3WamofrZ1maBHSUhsfS",
  "key4": "3YURHWBcPr6Ba5oq6YaWXFujYxHH24A1NEuhQADUZfBHBzF9iG62P5SrQpgJmggCW8BfQ1Mk8XhmXK9Toy8hWUPW",
  "key5": "3AssaGFEPg5njagSzAKWr7ijg2dgk4JUdDxMjk8upgJUKV6m29J8jMK6aGZL8BYunRrRdfoprCDxHQokztqH1ndi",
  "key6": "4cBJdk3ZDvYPUtp1wtiosxsGxc88ZVUTqB2HJdxQ2mDUZhs1HKbCq3bRo5uV1nuBjWahQWdnLTcHkqXWq2pX5Ksv",
  "key7": "4pwRzyUB8szpiGNBTgHMdLRcMo2q7B7a1hM1Zqa7duh69vit8ubZmwYtzKzE9yGpMw7ezTJBv5cF2YMePbzNLpUU",
  "key8": "39Le74fXTfwk2tyUCLmB6Mq893jwK8NQZebvrBtv35FWHHBCzKqyJ3uZdLRTQhYjcsQZ5Y7TbaBAhZtpRcDbCk8o",
  "key9": "4J2KrhpNtsaPGCNCcjycEgaWHgSxCFgDfAgvCGhybim1CEcdHe15b87f148aGBu1ve3eZ6humrTpr6kJVWRzmZFX",
  "key10": "3m1BeTeaz5w82wYbTXrhSnVNyB5sXttQ3EfgDYmCKMiwWnHJqzSCnpNgNnpVKz5CDvgdqeujarrCQKsq2BjTYLY7",
  "key11": "RbHk8sk7tmQt4TSVXDiBjkgEeSuDQtd7XbmCQYGNqUi6VLqrXCyzjXtHPVBiRdUvdBVbmH31BP8rykhWZH3YB18",
  "key12": "DMMpjhvU4C6e95AaZ37F84bRPtLYnoP26584yydscj9N4gfyWfHRNYaFpBZskKS9V5hqm5ese9j8ttqULZF7ygk",
  "key13": "5mLMu1LKKFehtFjqiSCtiTNh9WNrrD1zhrE1zxAFFRGsCj74TPBLVbjd86qjGTg9fy9SvbJa76E9DJhoVvzQqtFW",
  "key14": "p6BPpsBn5MzhgSzUaRn7ouxRQDcRKzRivxXJ5xqeqh56ckaaMXL8sMKmmUieFi5VaeN5SvfAXesu3Jqu63kH1o6",
  "key15": "2VdUU4gq9kLzeJPvt4A5C8LTp8P8pYrEPrXFKiarqoZzq6x4JhL4ruEawxK9anjh5meWUVksDscnXdN8pQM9TQ2o",
  "key16": "36jQm9Nua5yun1qrjK4yBcSjUKX21ZDAYQDUMSWGc1MrEUK6ha2wpbLMwcQ6naJnrv5drSXftm8XLCE9hnme3MZd",
  "key17": "4TxmCKkY8CBstMPEetCM59DQGiFs8UyuUzooxU7X9Arp7yFTtRspmbwTUavnTxoCTDJcSQqdzdqudCYCaZ1AE97c",
  "key18": "zSeTXEF5h6kZ26d6DkF4QGo3jpavSPTZKDUgX3XYSzrf91FmCRjzwiJCLVRNdSxoX5QP8phYxRLvseazbg5K8yF",
  "key19": "3yxCnjaeskqH9wG2inNt3363Msq9t3QGeHHH6hwu3mGe8CqgEFepudXA8Z8WbZnm9EFKo325a4URQdDC42yoy2fg",
  "key20": "4xGEVskvtzzKnPgg16xTQP1YGKekZBxHySgkmquYmv4jynL4Jk4fqs6VvbYZRVMgxYkT7ynEHJua792hmaJrSkQv",
  "key21": "4fDhjqVw8JbcvBAW6MdvKjMnjm8GFoYae3X27yHMmhz1c3GbmHzMu8GDuM5aifhyXoGAWHBksE2ZnY3qFWqevEQG",
  "key22": "23VCL7ANz7Dq7Rh9gxboVUKtFAYEW4V2QszjHX5BXf2WQsfkUZhpVZY2HnC4Z9pQqKhQUR8NCyS46Bt8UW36e4qM",
  "key23": "3fCsRPidNpH1ea5FF7ooaU9jrdNogf2jScGTdLmHXU5i7gjuff7hQVBvdNRAJpfjyCXwXm5oWLynsUHH3MPrDtno",
  "key24": "4stf4PTNmucV2xbk2x9cBKF1W5ix5LziavLQFqdwP8Gp9F6s5EwYBAaAJci78fJvMu9pEUBYwfnSqDqLP9m3d4eV",
  "key25": "4AESbLU4zGa1VzeDRantSqaYfF7qxAMGbf8bjhZvsXHqbsExaDweZWYXAePiDDdrPTfzHTXyqLkJgruE7Rq5Ffh7",
  "key26": "JYfJxoQhBPFxwUxPKsbg7yFrR9QEGTXFTCwvqyTgtXLhtLcycgiFnJ5YJ7TWXPG2bdNhGDfKNdJMhPRwHDVwEQ4",
  "key27": "3RBHpdUDDSsCpzb8vw59ptPhJiU7bR41i6v9vaoUG4mmcuiNrpdnWDrvB7SU7yJymwUhF9evmBzXQ8F1ePt8MgHy",
  "key28": "Jotoi84r2kj1aEvqA1QEDQZ1Hrmdf8gdC6k6RBstoLZXitSHfHj3wYPbt2dqZTBaRcJdcpdqxfNgQBmhsqiWTZ8",
  "key29": "47DnPoNHFKQfgfBLDDx1UzAqYe171Tcua5STJaj6MtYa6zYWhxBA87f88Xr2mNjc2nbE9C3SMtjJfy4wQBTb2Z4G",
  "key30": "37Mdt6kBovp5gNc93MAFajHntFqaZXF4HfFawahtXJ2L5czzVok6995RfAGRiTYS87d2odhMkMi7EKcXjan7iZEm",
  "key31": "5UkFrcvfLjXh9LM7m23PwSbC6FW2qSUrwcKnjXjRyzwZ8vSXymALvjKxHKpwk9im1V2SYRGRpa4RQ8HogmVUAzgQ",
  "key32": "3UtqX6SytRRtJvfZmtHCQcHWKMy6oYfMi1DsY77QhWHYbhNM4eZs5Hxc3ZkpdaDcyED6qqbZuADydRBfjqbBAb8u",
  "key33": "2tTAPd856Xad8V2eKGzDWYmfbs3rTpfvUQ1DJ1w9mabpsKhCxoL9cpnkXVEhMDBtnaFpapGhAFGrw6dYUuYcHwUK",
  "key34": "2r5tTfbtxRJap93uEhRkK5hAV8j4vQLtuamL1NjrYSuRyfhms9nHLBGnBgyMEipLgwx8VCZ4coCRjBYSZjfApvLA",
  "key35": "34KvZwSNVR92F76LRzyp8um9wnWTEqucytweeyyjFgf94wJdQt83HWQyT8zck567K31fvyVRYNkEQzRiVYUbcHqq",
  "key36": "3317ooEbGGcpazRtxM9Q5MNXEbYWeUnmWjdneKQRfpax2gMoJUPLoaxM1YuD8q6DkauXZT475K4ZHUxfQDYqUYCy",
  "key37": "3fARS1noHnYsfqEEDmB35wDQ2XxQDmFBBbCij7Q4vvpNCheYf66poFSs1WzajTGcXqHUo5zUoecdcSouSuvtrgT"
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
