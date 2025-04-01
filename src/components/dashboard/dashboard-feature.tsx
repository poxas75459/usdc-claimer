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
    "2e4pTqRCE6yuPXpmasuuE1hsLzi8M9hgfjD8nrCMc69wfNge76zmQUmkBK4v9qbKKWCwKDhnMjpPkcWD48xLcW2E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wmtVP5bDtT6wgUYwr696cGWQYuHCZFXkyhfJw8EjEizx3DYL9WgQx3LkzaNE1499ktk7ERBJtrqmhZQkyNsVuX5",
  "key1": "5VqZUePiJoRzStU56Yi4LkYZyTgzPYp2TNoHMFDH8kZqy8mtt1WZJLTeJ1HTtDY453d91xv9yA7orTvbeYhVR395",
  "key2": "5MjfQFHSsXpAjmJ1NXDo7JQ19UNxkgN3ST4a64RhgUSatoeMZ9azHz7VLx4FPeLCZ8WWvE1N5ZxZLNZMQgs3H4FJ",
  "key3": "4tAvUmZyCaThtseexDJwD7Fpea3SnZAtTLPgzC6zpidMyRC8eEJjMYMoiEBqQGY5UcLXdor14ZmGtSeewhFtdxdw",
  "key4": "ytJmbd9u3nd4stRfQc1eVjZjChiEzkYxuZCf3DeKr25aa7BrZpWJmtRGGn5WjQVk6o6S1Wx5diVjvZwMsgohtTm",
  "key5": "3AwgQ8q2gL7VbN3QZxxSjukNzqFG5DrQkn4SkouwDRLeWm497E7wxhB9hw8c4znXAs8tZEPxYcCjoDSeFjhHX5Ae",
  "key6": "4cyevuNNZGv4svwvMYHF5PKSfshumCHHF7rS4CQZ8YrZjuJTh7nMz3XeTNoB8jD4qARLxxUttUU9JbDNWHgxSnoU",
  "key7": "2736qp2tHh2dsfvKRmoysESbnQAVeVdRUefGaCPJcXHCePHM5U6WVcbnTB5ze86Z2ce8fCR11Jg4BaJYhq3bpMGx",
  "key8": "2uoKcg8DYY9ThJXQkYYQydbBbrEEWQePcTq6bYCBzHVGeF3aqPaW1b5xhwHNZbfjLdMZXeCBDLuyZCJMkyGep57a",
  "key9": "Y257br12gMiH2uWKMRPyYgvQei3A6Hm6ezQgbLiF457Ssd1UWkPBvGgZmuoWWP8JQHqZM81fDTwEvJ18mNcLVD9",
  "key10": "uQxC69o1qR8QPBBC1kzagw2eCTZFvZevKbfv9f5L7Ce3mDqtUNG9U9HGTwmUYHo4QbmDebJTnRZ34sqwE7RorRM",
  "key11": "2F4hnPEmHFVcnLMtgCkt9aUvCPWZc2QRByeYTp7D4Fh2Ug2agKgCEDs4MAwj77kze8NfdD8H4GYxhrXdQ1q4rUH9",
  "key12": "XXpWrv3o72sNUeAxVL3ZhSGEEtXgF5uvbYjx45WL585didjWdUYr8xWgkwTkbdKKQxhWns83QrUnVBi1hAXjEsv",
  "key13": "2Yomy1SJRrRXRdvWzHqPCvwqQPq1EZVEzvhPhUoZbRnaezf93y4zwRPxzHLHav8K5ZsQfWqJKLBygKdiAy3sjg52",
  "key14": "2ieHXratFkqwV4MVYQCJGXe1gCdWJf5hJqvUQRUymBPg7DQof6kB4gRSrdZXDuqb7JBQuspM6GiRon5iX2Q5Q6Ks",
  "key15": "4KmpzVZPVf3L9qvoZtfdzyvzT73Vzxsv1nmsZh2PiJEocpjS7jKFekCnsUfKgFzA4LTZptcTM7qpasFfMrAdsN4H",
  "key16": "tzpPMQ8FoTXDQNfdSxJ2TeoGd4zMW7XyP9w1waqxAv8MHJA8tae3pHjzV6XAsQqiUq1CggPwnj4cBNKnJaEHsec",
  "key17": "4gSHwXVWAxajxakPfiFfHmQ1g5SaEWtAveEdNpiBLbCjn5DtmgHLm9UHxeNimYhTVb5Q3qFrb9hE51zy6iCVDiLP",
  "key18": "3dVXgBzSuhevFTTy8GQrDhhKc5E7KahjMQ6Mbma3JYTrsXH9HMV7ZRX29TYqwfHMWhYTTsczeemoakqfSUER9QvH",
  "key19": "2mvRxq3zJZnTxXN4SUucJiNWzUcqY3pLLXsuHmEGsiwGx6TLugQ5hVjwibq5s5tQCcexHCPdBcSYqFeDKPxUGpuz",
  "key20": "3w1vk6gGHbefK3tS4mYEQbkF8FSSLLsa9gqcXRM8gvEJZS117kBVwyHMHdKGbEvMgZbg6bviAekePx8vWdB2VVcv",
  "key21": "25sWPbFLdsRqtAVvRdnniTbhwm71Ds7HEsQESv2vmbiEa7DKWZmjbN7dQKbWHHiA7BTpc7r6ExrJyRR2jCqtaBgj",
  "key22": "5mVsT9fRAj48H8r1Xsx1yHEUJqRzgUiufKUqCXhrRX2agUnt37eHWcPeEXodkzBVjK8a5hCrGSqzTg7xSevLZiSL",
  "key23": "4pGC3wxQTGSbK2BEUzqsJZcajktfGeBWpXBTENSVCaQkYKdi6Ym2UcrRV17JZ9Y3WKBD6BxqRAiktb8eWG5Sm3RV",
  "key24": "L7wbhdx7pv1iVMYYDwrvkQYk2EnX6qxko56qQVMMiss4xgZx8tGH4XnpevBksnvxss2vt67tVgd5rHXwMhSVGue",
  "key25": "5muJeobxwFRczYUZrbfaWv8b6vxaaV3S99ninb4RYdnHS11RHMjFqaFfnmF6HJhdhiSYYKPq5ZdbJyykku97LYWk",
  "key26": "aK4eyjKfjnpyP2zTfBBtH7wL8jvC7gcWR9NTnympze4eHeELxTEuiMCtmHfGMZ9iv2FV4SYDW7LjMBhqhk3bjAE",
  "key27": "5jbhbwu3b6m6hVqUQAM7fKguTw5q8uFTAuLoRfiPywCgJTEhuDq4xqiYPrsRLnLGALoDMUXLS6FcVuLqL4iStHkn",
  "key28": "56871Y3GdmBxhxPQKagXuKBvN4UX5MVL32QwaKptM8aW91vKNtCJmqkUFb7oSLGctboGkaLURLZGwSe1v9TvwU5A",
  "key29": "21t18WR6zwewhU4EMURFMno2VyoBvfucfU1WDTofb9fAMHynMVX5RhtC1U4pDU6W9j7g1fiLRvUN7p1NjpUJFC45",
  "key30": "vQB3u94K94nWW6HscPimQvZHNoXuktCj8rzBLXVeyUXvNXaWCeV8pYGvebQLN2cmrKb8NuQ178LC1HAaHsf4zBV"
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
