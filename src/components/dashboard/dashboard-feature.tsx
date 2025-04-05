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
    "3HZhYzxMS26T5KVLmBbLjbEEe9VYodytoxGNZhNyhcMFuiAnm3T9cDScNBiVfduvXj7rg2yGfPUsnhDg19AozxHJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44VHextCEmDDnEt7CR8Kv4ku1AuYGHk5S7Pbfq4wm5C538gfStpT2TQTWjzCSQqqufMjikL8nGFjSUDVHs8aYnWT",
  "key1": "W5d5of3coxwj7XaB3A1JSu4tocHzQ8j1mn64jZHdY4xiy2cDDLrZwaG6e23zfbPF6Q3ZsFusEU75Tep5GRPD7Au",
  "key2": "61hYdT2aLLpQkcFmygtx3Ekonb2XgzbaCdFbPizB3gADGoPaooUu1yk1vHUBubhLEgAgVvjmL8iLPgKg4tZq8NXU",
  "key3": "2YPSiaW3wZsNLcJFttvhCMEpirHsLR6EiFUP8qpAqrkEtjoZKP2QK8nu7fHe1FnMhhtXtEMM9v3rq5zjzAXmTSgu",
  "key4": "Hu5ieAYgvGpnHDtnPJFWxkYhGF5H75NKsnHL5WY8Er5s9SwZLvmcndSzpe9iwLm2fKHJ8GqGtt5R4VCQ7Y1YvN1",
  "key5": "5woUrqS1dBYr5MELWRWznag5AkzjKgmjpuV4bgFYqo3PruVr93qpRAow7nsrtzGJdrQbvPEChwrngcRVwKnYvycd",
  "key6": "33dA2GHozYVpXEqsZUCRuGtmuyAtwuL39aEbCCzHqwXXpjAQguNqP9UdSRFKJNVYNjsyfTuBxnQDvNBkG8WzLFEh",
  "key7": "63ToJMTuhMuV8sPxFznWUqzxeHNQEMsKeQ2GJv25GYfBJNymfQFVWXCG8Y8WX2jo3sy6bHdzEECzL3gy9yVP3ydZ",
  "key8": "X7bhVbGYTe9T1WRgJ5LB14muqXyt3mSREQfC6b3fEB7zqwysTJEwGpQqirB6DGcwLrrC5sLsqd4JjYrGVYHiJN8",
  "key9": "gFRjLK5UB828H6dPW8UoJSemZWuBbFcgexe3Hw8eUocY3URoQq4sV6bSYgzPdWx4eVKMLiidLrwhhtSMjQ9KmAX",
  "key10": "4kSKxYNDjc9DVvvXhvijn4E1UhQdsroWDhWDW6ZqwdJCNgwRbczBpy7Aa3cnmdGvnT8SfSrWFH2yntJNUqzuLB9D",
  "key11": "631AjW5Cewvv6HnkAUjD4UcDLhVfjNnhU2kSC1mpNKzopkG3qchb1qM5DQWv3BUXqC8HmSbr8YTEyE3Y8WiaZmqZ",
  "key12": "5FnZRtDfh3e8tX5QqAvbniUU1PyFPcWT4YpeNZ89XorezPH2TtfTcx6QYeP8iAGAKJfs6gMuAqe8NCbZdgR86f6R",
  "key13": "5WRhgNS772C9WP6dESGsJ6PLQb3K9npnnptvoNkJTZfRtPJeU1wFtPJon57gEobNyVsSnY1sn8pq4j3NJgvBvdFD",
  "key14": "59yNUqehnUQxHxYtrSU9kbtNJGmQExnVQ4sz6QSR7NrvVb81EqaZ7NS7A2rNQT6fn1Y8dfDy5ogWJE1JKmgVokvJ",
  "key15": "3BMPsK4L2KsgS9g64WYbXreJS5JLdux4XWCt5P4g5yeegxg3oubF1UxhAnscF7qduh9aiTjj6z3bEHwxBru6ezeJ",
  "key16": "3nA68GFfkpFKpvKnwwreKrj4ymVcF6isa9HeYnVxt44AaX8emSepTdRbE2wxDv516s5Xcf6PKqk8SJChPMBA9pRH",
  "key17": "unGXpR489qrjbLctTBohBWtcVj5mUbuZUfD1bUST6Yd4cZdrJev5oiVtkxz547RJSMeKTczLSZcY7SMbHGhH1Hn",
  "key18": "9FqMyNftR4MiQQBtkSq5ToAiACgRwFQAMrD6GwLwqvzqR7UJ6ZwRxU8uK1Kh1WXZzVAV9tLuoC7z13Ak3Mhp5HK",
  "key19": "1d6xC4KgpCD7okzuK9FGap9iZ8HmtzMwzCocMSKpyaAc3xA5dSiY92xBDEGXikWcBoG9WehTjSf6kvdccpkAjWz",
  "key20": "31NecMy4w644vWCkq5YanzMkQ1wRBoS6zauV1k5kqz9ZxMpuiMcQDFoLq4KGxLawscKcKvXzxG7EndeSs65WjxJh",
  "key21": "3qtZ9G6oR2FAXNnyeEQmak6DVE8qGJ1iE3VvHYXXnmwieWrjVWcxJhgYXfZHLk1TKC51k8gaJ9qGsBhKHG9thXqj",
  "key22": "3M4ZkvYwMGKj9j4CRtYJ2s4u4g6QEE6ciY1dJPePiHBsdRxPCRsfLJNKHwcunx2i3UrtHUTgNNTGv6fMtntHMtix",
  "key23": "vA1p5aorTkMkNvQY9933mdMZpjX5uXoyvD8XFXx19EG3aLmjs7CpdiEwo73Pg8S8jjryGaQwWAvqqcMsgT9bVdE",
  "key24": "2qQrZq8NWDpf7MwGSnD2zgM5B44cXQRkx2n3zFsa6VjR3peA7hzh1UX4HKChmRmYneEC1CShQZQuWzWPsBBt9kyx",
  "key25": "j4tob94g8yQaAd58SfV56iEDVY9DDZB7ok5cKdw6kyioiXAVk3zgs4XHRu1WAgydFSr6GGukF4dL1eTVvJ6mdXX",
  "key26": "4eLau3NhE81Ps7cXyQTa615mZq4opxt3GnJLFztEhqE22PtvQXtXSofYZ6NzD9qsB7aW3nWc5zyFbGdeoqbhTLTf",
  "key27": "63o5oyUJaGGsjtUZAFVMYSqDcxsbPRfMgRHiVQVkjbJre58qazFJCE5KQMu1bPFRL1J6RQjRduUHjnShz1e1kJCo",
  "key28": "2WpBicDUGmpSK64YpFpuzWk6JQdL4pRSuBZGFKdEC4Unv2pTyLpzU22dBY7EC8zLAfeZBehmFEPssJeXCa1vfjFY",
  "key29": "iF73o1UDdr1ztpapABeA2HswncFXQkphsCgwAUQsbVGMNZBia5pAYojTs5kQdVx9dNMLhbeifjGcZY2tjs6GAxN",
  "key30": "cjfufqwQCAQPTXkLPs4epr4tcYuyxQy7jC91DCcWddj2Ky1J6osYkica1AEkc4pMYUDih9oPvBDfGrxcad6mM2J",
  "key31": "3UHewyAGqfY6VqMUPNzw6xf48Mfa6yMAaTKUod2uYvKzrrWGXX7N62vVui6xJWmq69wDHTFukcEUVMN76yJxzBgu",
  "key32": "3RYxsxVuiHjpPag4111kAH5VjF1BEsDiJrb4UcQE2wrJGXDu2RSKRf9sYCtSNETws1rG6vLnsK4ZuvvZU6r1uD8c",
  "key33": "3zL1mqqZA3VgAi31H29UZn5wStyijjbpuDjggBxwUwPzYULLzkSXDFRqxjZVRu4cHwQBiaNJfHEeRQFQ8sLhVjQj",
  "key34": "49BLfJqcZnds6s5MtqfXA5PPCNuh1GBPA6i2fW33iooUunXXsFjtfGD3wU8XHWYnRbE2dn45h4z6v2fQP8tCo9aj",
  "key35": "2E7PjPxZhvkvHAC7L5NNTKPNrWQRz3akjhhu8THDrftorRA44Q2ZCctbdsBvjVhSsaNyHNbCqDkX4s2XBVC4D3WZ"
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
