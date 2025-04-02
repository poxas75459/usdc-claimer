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
    "1vw9P1YYUjZbChwRxBAQB4udWScZcbPSRuRmnfnfDRiS6RBk1WTLQMk9xi1554paCfQAFAULbofCYGdiFb3y4yZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h2feRHGGBLVxPejq1DxXa4TuSchMaajxmc6AvfCtNEathu1j8xTfVaU1WMWbtmSRv9UXNL5iVof93jfUvPdmxbW",
  "key1": "2rgNRsXrSeNT2Utg8bW5j9AcMFkqwpqkKdEiiLPHNLrvKuKiZzvx7SmzS3zB9o58X7RhgqxtvpHgFc9UDhkhiAhj",
  "key2": "25YDgKGsge23iWz7YMBjU4fMzeRMnSMyCyrR6UFN3x1R91eJvfcove3DnQ332KxS1VtD6ZpuBpeUdHxq5GnYS5jK",
  "key3": "2PmNmMc1Yri2korF36kbnaJCdDFJKz3Dv4F5KVk8ixi4QRMrWkmgoQoCPbvSHFqpqHRVLhpBFbsLvuUxTTJRRjfD",
  "key4": "2jVYJL3pvArLma34T4jj9uG5btuZkdvkLu7uQeSjSnJgPfbEP1cWCiHBgce17cUYw4inLVgy1eeCZ3yHUtfWXdjc",
  "key5": "4WzceGXCGZjgQe8wq3zpBe8Ld2YvSM94gDA4bbFoLYU4deYd8ruTvYC3zwxmWoEjLGzz6CSwZu4qdqSGcpoCMWWh",
  "key6": "61AGykjtGoTUXxRi7qna5MTndM5ZYbQG6LtjiN52srEQm7jWzoP9dnY6nDUy5t9y8XwDDmqbpek8MsdArs3Fz7oy",
  "key7": "66QtsDj5XE9zZmYZgbijqUTa37joH9sozDtcZk5iFDfvx8nxjtiPrnf2FrmDrnFd7C3NbtPpzh1KQNXFGU9yRyCw",
  "key8": "T5dAp4CmeUcpYhcT9d7dUmfiBpKo8FKFgP2EExqVduW1sMRxiMnTQPcKhRAQ73WF4KkFUALgZk8tEw1RfLfMZ7h",
  "key9": "2mAgvpCDLHkcu2FLpZy5yF7HC5jbqS7tWBS5u7FYutKHckMVyeyNcn6b78mTtHXs42W9HXKiZPkL8aNzn7hTwr34",
  "key10": "4Q7hrQpemcQn91yX99MNZioB2jBaocDGebJoeT8XAzxTbXWj84zLsDVDCJL5Z4jZNGnZUX7mwuK4Y3UZnWatQNeq",
  "key11": "LfMbKBHKofwR5L1wL6FDMJnTzZY28gKxe87yhTZzHiFgjRmEhY2gHTjDDvSwiXh8mUiEZFKjWPp66DTNctkTq8U",
  "key12": "5bXbs16xnkD2dCvbgdE4mry9J7fhiz8ahsMGicNY7fwUC3dEDrc33SuGtJNVcqVhDJ5hsRvmL9ihkBBjCU2aEZXN",
  "key13": "4iLsL6EbzWhTg3MBY3w4AoGdsQe6SuuesNEVc68Q7WALtkj8omCZAyUibHNfxNhtdZcVztKtWCc43nqjLnEUnaT3",
  "key14": "PccQ4UKnwPeCcUSPNz3jR5SeZ4vCnNVyCeR7rp92eDZ5uF9idVywtNVJ2ag7w81ZrYbaUWf8aZ8nCoYVpaqEd18",
  "key15": "41xA6m2gdU3k83jGPxLjsJQn8F5q4pw11u8iqi6wmF7mX1mYTAJ5Ru7dQsL4Wf3yFAsBQBaZk9aUbb9gXdYNnuVF",
  "key16": "2wMYMskTbyaS3suusA8acsY7s9px5nxHm9cAotMx9wpByPUkb5gV6faT5hXB9zhM6pgKTrytBvfDUVagJyyNZtrX",
  "key17": "3bf9SkFoZSkxyBGkoybJw486C6P8kQLWR5kPfbKaRTXkq6WL5MVNnBBr6zVj7kLSsehUXvW6jC1Y16NyHadLKaRL",
  "key18": "4iwAMm5i3WCu9ukw9f7FMe8z7co4WSNy86LQHKgav9H31oY3B5TQwGp6uRjjb3ia1AkiNAvh2833S9yDDfvaAw7b",
  "key19": "2Zn1riY7ais7e1wFRKuWQufS1PHVywvNTsHbQWRUXdSEBJituBeWnHo5tFmeKJzMMAtHMYo8GSqcAhPA9puNtDhK",
  "key20": "4L4z9C9dggCo77aKp2EoskWSKiBQEiiPzoADobQyHEsYak4PzQtpQkDjbLv5FDR5xQe5z9dyGwPzW8jDyXCQeH8W",
  "key21": "3U8DGxLFJmjF221SxEUY9vpuHJd93sFHhV8sNerA6Y3xd4skPJQzrpET1kxz74VRTk2ngD9Pt3UEzDqPDEhQXZcb",
  "key22": "2ahLKJXfNkx8AMob8cFEWv6P5ybp5oqkmnzjTBMN1GWe8jvmL5Mt3DFnxQCDz2oBF8ucLjozhvNK4whTm35vFgqk",
  "key23": "3BkwyWKszcrEqANBmNRAXN7FXWuRK5KNasdD3YXo1jvmydoLDoUa2Cv1hZY7MY6Khw2BuGjnTd7o98sTWoa5fgaN",
  "key24": "4ppXJKke7mMwy7EiDSK8UTTossg3noikAERA9g5VuocFtcf1XRkvQDSme5bAPpWuQByiYr7MCXyBDTC193Tq6P1v",
  "key25": "3ZooCF62aRERveQoToCLk4SqXPGXDUjRVyJ7C2gCe3ApVjKJo88wN88qWyeq7ddEDRZVtg6YKGPkBi2Gcdz9q4Jo",
  "key26": "3FdjKXUJvMdZqsMJie4zWiwfhv7wLNGegL2u7wz1WQvNV4K4iABywmY2JMJQrmKyQVtwFDDz9CWQHt56r7SeSq3j",
  "key27": "5vMpveoVZT6u1NNqXgLycoDa5RbYTfV2rhj2snmGaNt1AXNVJb31bADLuXeynmp52pTzSHXFyuCHtM8gX8s13vVi",
  "key28": "2XiMWa1978zTCNmWtXt2YHZPpFNNiYx4MqLiHgmt2g4ccNQxjkaW58yLKmrhJMTxUWibFyfU3hP5BzVSVTJegzNX",
  "key29": "32JQnmzToN7pcP7e8i9QhwCEJAsX7Uu73moLVQo8nkUuNJrs6Pam3QiNYhTJjpQ33y8pwREE8MAG82C1A6zDGrFp",
  "key30": "2gQZprtgikuwRYvdh67Fv5W8jM4GcBnjpbyFbv1LMQ2bX94L1LuBJbGiN3EAF9qRDpuB33UrTEizV1xNg2KDEL91",
  "key31": "27MnUpvUjAH7vTagjhbVVdHo8LHtfSZXtpyGBx9WL1N61MxPEMKYD5Mwq8ugdTUh62rbLdK3FVE6x1f5V7UiU7RB",
  "key32": "4UTXLAHc6D1s7AZp4nTptgxWV5qvv2G8b4rftqkayyJ7vi9PcjKP5rW4mrU1nVKqgyvwFDt3hBZXKy5H9BTZxnRf",
  "key33": "34AhBzvyJXZBnjpRFbNqbg3qJTVqJMVUzynkBvLPCyqTC9wE9tueeEuY2DXBqxe89h7iD6Fs1CtuZyN9Akjy5LWG",
  "key34": "3N4CJqnAT56D4gCz6kNXbdwctc7Cbp2KAqZLkncyWpwFaAFwxgEoRJWAJXdLRCcjk2kfHRdC6YWNnqA1AyKWwon8",
  "key35": "5DooseRT6LqZ68VJd2Qajhr6i2mFTsci3qMLdnbnaG25SvpYM8iThoHuFYYCshNhEqhbzD3qsxMTexeTFz2j1YsW",
  "key36": "3zTvqernmm9u3JYiu3Ckb5EZmCr1M63AZt1A1bYVwGaut1Y3sxSRzCfZS1fFMdVK5mWBNqAWcCco8LQBPw2wzfdj",
  "key37": "4G5G8ETNUWTWaDXMDwVQ7wax5vftFCbP8LY3Y5tA5yZiKu8rrQitR3yYwxi51usPsrTkHBBowJGyVyTQ57UJ6diG",
  "key38": "2pb272Bm7GTnPWTzLoaTLi2ZiqgEtPt6siTvj1THrtzMoe4uMMWJmKVw2LewLYkY9bZofM3C7k9qLUjXosy9ACkd",
  "key39": "2NrQdMJ5RmtCY1T3TBeiWzi6gySCPzh2pTCcHpuYDAwpahsKUwxuh2Gm8Zp2RHRnnvWgj3ce34uHQsWmgKNE2P7S",
  "key40": "45f695mb3YuKDSaSfeyPgM2uXNeijeNYGM7djpamYeDTLuXzDFPpZzc8JEZrZ6fEDMibYYE3kg87asrLErt5SZxa",
  "key41": "4EfuUDCk7ZzNRDBuDgtEBU5iKcqH2zDMQXcXHsCzW5MHFaBLcXGUodEJ9TveXpuDYAMojUfU6bBxcvk5FYkBM3Ln"
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
