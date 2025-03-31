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
    "EjLkUk26Q27aPpTotYcSB9dpnfJYh9bErHKdaiRhY5irMgi4KCT775MTazZRtAg2rXxFt7bTNQHyuyGSsusmU4C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v1ekLQtNHGZrW2nJjJQgtUZW4zX88mcr989bfdHBZgT58fZehusLcyr4HEYsQarWMttb1pphYfkKGUpqW8er2Nk",
  "key1": "Tc93EW8VXZNFiw7UMTDtxZwYdZC4GPzR37o4eMCU3ozxhpUkcB9MQyDpq9p2sAsHQVm9iCYY1MzMyHRh5UtexvF",
  "key2": "2qWgEtD94QPqoGHzYGehUuh515Kv4wtvR6Txy3b7HGtcM4iBdJpXDimkwaN6fZ46WZN8BjjsRnuNKzfjR7LdTjc3",
  "key3": "sJW9CeqN2DYzevWExD3iPLqBaNUNW7zhXFQXgtV6jLH1eY7AieYhj6HNFExR5iUFjo4VCKLoRZHjLcJCcf3NxB9",
  "key4": "3TKhixQ7pBFSD3Q28R9TYcVxY7WtbWFSsFkeiUhi4hSjWereHMhkbM5M2HvF4JVdT7be66LeA1HFvTL6WiTzEJta",
  "key5": "McwELnrPyKuUwoVBUSHvK8G1W2DEvgT7EsV8mZQtCDbepeTzYZbqQtm2TcRTTNZbaeQueXyuBRtdNueg19XQirF",
  "key6": "5CGynSfFUPSdMnPj32F9HySgLpAXkAAxqidcozVc84gVT6rev5aSFdTPhjRqdJtyZnBdHhQTzSV2QXY2WwH4M8w1",
  "key7": "13jPsCLw8KWPqYmc63chGrKi7uji1YyQfZ3BT2en5UCSLtctQr3rSHmWGUtj7rqmTNive7cSXpAmE2vwq8u3BCh",
  "key8": "66a7MERwDXvnu9gBxLUrADUqfZ6USeqgSawkrFNvakMiWUN3J38tv5tNypDtY3e2ocpiFfYriCZH5oSry5pBBvWA",
  "key9": "uVWs32MmjZ2ozwFUAnHtemwWb1HESXNQJbWJK7Ybsvj73R3W166LhnKUEQKwoN6pW1b4UBA8TXE3YW1gTUawwaq",
  "key10": "3uTUgPL41WjfZXh13isT5sUL1SWEH1MRd5hLoJ3Jr9mwjazeTvqcjLTGXkmVYMzbHvzQXzEY8waqwXAsLTJyjWnx",
  "key11": "WuXgt4Xz5wVWiRpREqvee3pC5VgpL6Tk6B4hiJJhnhnjj44nLJ1HFWZcBz4mWNmsWYrZKXoM2HbpcFMXf6QLQRX",
  "key12": "3NmqtuYYR2asNiCh5PC19av6jUCxKMNePi3QWJK6deuKcLKmBqdusVwThL7SmvUsaqxkooQPTmt7Lh4vGGtPCrRt",
  "key13": "WBXLwMJHjPgwddta8abhhdWe99H2gSEKKc3Jbqpv4wEEmmtBPRNugg6QPEMw7kfCdLiNS4mJVdReWGDNU4HUYVa",
  "key14": "3qpSyN8ehUw2UoXUnP7KfCwifNhizHtCvsdnZYnSf7UZiJrauJA15NBpM73uEzFvXLzmQ4nZY8ePxtYQtybW7kqQ",
  "key15": "3THLpYV53ejuBKsiByyyMGFpbP1V6kU922zkUDYEzbUaWW1tyg3af4EwQCEn9U2ZdWDuh1c3LYBjGoMhs62MTNdH",
  "key16": "67BZmQVKEViCaSbzV9FDzNwNm8iqDcMJKrsWmJ8XUZqeH2oejUC322zjSnwTqwyGCxpduc43KiMQXPDFmbDZwZNA",
  "key17": "2kHcJ6d4TWZAUHutUFtcsqkCdht6ng6AwD4P4RtKXcQZYNamSi72XWukjdqmyXXU1gu1aJAQ8KCmvN9fybD5M8UG",
  "key18": "235aofJdsABU7zVMYCDmz85mSoJbsMgUmkRjX2tndEmD6eirtUffLUZQTKcmYVmdTfZSzXzTv46oSboPjmBZqvjF",
  "key19": "4cMVMHZmaFGK8DrdFD6fdmvp9vCUw3jNoVdjvjSinZdya36gGC1V6Mxjehc5mqMfAhE6zcD6q3K21xoZuorgNduZ",
  "key20": "2U84FVxqmPSGVMn5CKFQGUv7pXdZuCzMTQJFvDLj9mXs7vtE3XGxin9DPNUURcosqnPbXFzUQD1v4BvaPwxE52it",
  "key21": "28aswVfMJ8sVqE75f6Q8PRHanUfQRsZKJcPCAjB3vnkmuhSArCwpxYzDzaJ2mgDosgSmKke3iXg1hZZL7HJuUyv1",
  "key22": "2SyArgXaLYcwfv1BcvhqRZNGERYTx4DZBxWk5ManUySWaH7ykc3yi1MxYUQCQXjaQTdukD6uCZGhiDuD2HKWs9u4",
  "key23": "4Dfzq6yLtvQn3tZXVWJGyEbTMLYMLZHiQHbDK624tjRpBaRWcmMUUS92yRpkP1pkgUJTzojZs2YphdywHzEb33Ca",
  "key24": "2EaG6meNMNGtxBzmiTPwQNRYCJPB6efs8J41EhBgZRKrssyPNjz6QbtE9mk1Wf5egTuMCzTpQkDNvAk5rC5Y7ZyP",
  "key25": "364wvVJgNT9VeNNZd7f2VAvfdMamRZHbv9gALu7phUGwV1cMb3nn3PvZ8ey9bajeV2FAnBTqhzPjsRM4cn2HbTx5",
  "key26": "5mAB3NH6uYPEwDYjLARVTq5ZjQbeoXx2D6ZhB7NDS7NT5g5LmivGbcQ54M97e1JPxeNHcYpxdFhRhRjQiXixaT9h",
  "key27": "44AxUYhTHuA8KeUx2LfhprRQzK8LsGmrsmCX9fUwe9qAqV7qmgJ8PeHNLd3Krxs6QzH1VBT3N47B369JvCGLJmv8"
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
