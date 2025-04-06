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
    "55Gckp79LvsyAz3bMnkjVyJp9ob6pF195BeNuRMyHpj6eEskjKEWNSLdyv4hTGLM3HSVagFsSfPYRuuJkf26ti5b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9ZJta4viTXRxUL2EFw1HpTyH3J9kfLpz7fdZHzJ6hbNAKfCX9VPhwnZEGDhFTpv7ydXmQFFpozTmsxaJAfsxJYG",
  "key1": "2CAc4PDN2zg1ixzhwAAjfnAv4tXsr9MNn2ymQjfyutJN82LXhWBJKQSNsbB834N4jzkQRsFCsSEKFwTxrsT3Foy1",
  "key2": "2wyvVEYx1vqNDAqD5E3KNDFvtU3ZqdGyfhFbDYkD5de513MK3RcjGzZMjqxNYqmJuee3h84XxXsNzmXMsbJjpCbh",
  "key3": "5Cdkk3ACzQ3i42N3tAjnJXCTzwEqXT6a98DmozQ6t3nxsyE4mgv35S6mCupa4J8pBWsKkEaviKXcqHJKgRVZPunS",
  "key4": "4MwGPCqNYz2xaCVsGTVV3VPkdUjh5Ts8CkeV5TWr4ZNgamvqv5nqq3JRefTPUUbgaScJkzWBSxcQB9HQGXjWa7GG",
  "key5": "D5hiVniaZSJnitJiHpiBuFH89iVMQuAja8cAVhZbFBufEP3hQkWiUzBwADeiw5MEuSU8iXddubx6T6HHEjV5SrK",
  "key6": "3X6u27LniKCPvcg9FhgzGQAC92Vjmf3FiKDNjbz92NfQXcJ5Tnxnu2Mt3cbszeMuK8YoRBHK46ohUw1ByhsrWpwW",
  "key7": "2Vs6eDiZsBP3pf9p1DErpVzp91iX8TPNdoCxeFQqzrSK2mhmiH5ojqzTHoHL7AH388kT65h3ATwejBb7NisAQD98",
  "key8": "4ewQ92XJGQgnH7qpSB9HDagxdZwyMXC7MZ1jDkVZfFsCtyRGeX1t2CTsh1i2mECLtLJWnKxet2mXYiEEAvA7P6Lp",
  "key9": "4HfsnBysrFHPr2KKPpKAG4GiYUGfYQ6UgwA8EzzKUreRMBaYPTvwWeQd9LfjM274sYo589f5SGdTf61zAWVWLfzU",
  "key10": "5L47FFh4qUBUKjN7fZMPXjT4iPxJNtF1EFGC1ShW57PiqmYa4QXpTZLaSEJvypcmQYJTSrjAjNsiscU1znX6QdRx",
  "key11": "2TtiVfzr8UXzDauyQo55GdzJLAdFZpQKGHXtYe94rQaLmGprWYQPCQ8TaAjyEikhX2QUBXxhEvnDr13dApMjKZeP",
  "key12": "4qPRU4hgfm9nnH1NVHhFY6hMhG3vSBLEqZc7Y92WSS62oe5YKd2BNx4xatFSmzxtBzw8gefPNxuh8p2bM4kDpzmx",
  "key13": "3PGH6tSMo23oD7q1CZbHMTNvj9Q3odTriFxCkT9DrMQ3yLdkmZg9mGmMBxGpzvFtEitdUGGagWS5HJre2RUtvEWP",
  "key14": "5qveBNFsQ4LnCkmKBd3DjXkwE7xJAqQrPJ3pgYRMnPTuB2hbSZmSSZBH91fnasPRn78wNg6MbtDdnySQcKsfdfG3",
  "key15": "K3tQqdzNyLs9avaiwo3mUAydUqGfepWzuxpGn9tBw4AnB1mDCbbokkgmNP2E2dbM66f7umZvSY8VJsLUw4nMjkk",
  "key16": "4vz4nktYyLVvL9kKv8AmkhyksgzAVxSxPhGy6CxHd1f2rpQAnYv1LgmxWRudnidgJT9LizyUGZCwgirhhPz7kXgu",
  "key17": "5bv63jtn2EPNUnpeR3jE6Xu8LY6cimijS6Xnzc2Z6VSkqfbihEvFwtt5Zd34CyxfPtpzUNbSwFmECr1QNYXszM8B",
  "key18": "hP2DTfdondoZVfj3s95vK5JWgerAWpsMCXz7UqFfG5zKYB7tN4hoNrLgbKQNnvXDqEVQUY1NpC6KMFfiu86DbFQ",
  "key19": "2Ng2hcZb921PVGuSYKcN1RuZawyZxZNBHAG3Hf8SRTiU6yrN4ULeg7axQpE3LMtWpQF5cmrFeNXk48Q1y1nBjpiu",
  "key20": "2YwxJhQ8Ff4TkAfGrGtQYqPdxxNLSzYEy6BcRU4L73ipeQYrxN1sNGit3W3tCS7cLzLpCKnksebT5uS9zVYFKM36",
  "key21": "3sFV1hMtNKTqVULMBJTGLQ9YLEnaMeUJcPMQtJ83FgDwaWiBLFEs6EoQrpTk8TUhrEsuck6QmUfXx3KaSykRX6Ze",
  "key22": "43aQD3Jf9nwzCbfMCCNF9yBsBujcBj84gBUAtVBQnUk7L5Gi2ThSx9RjgPdC2CMSYYCw5M1LUPHJBLnyER7EbgCQ",
  "key23": "38FssfjULTNERzUPTMzp63E2ddNRHnCBbMAtvPQe5hemxvRy3q4ESEYmhFgtg6RSschichCZE8a7xv3t9P7JNqix",
  "key24": "5RZiVfTCWsbhq8sJmeGhFGHxc4g9YAYysE2S6P79TowfUgdt9eus8CcPUqxXH2wk3ALkhYhARb9w8utwNJ17ntGk",
  "key25": "2LnNVH4TJEDqpYQLJhWMEgz5e6pV8oEyR7hvkob3y8KdKGq2SnuMndHQJw7hTXmAXDCBxdbY3HgbCVAgznJocsqG",
  "key26": "3yFfCS4J7TtJ4snJPjpHh7buqdf65QQRLvABX29pV9jgAczD8dH7jAirjgGtoqMXvVxiToYtFX2SvnQKLn1C8yT9",
  "key27": "5oqHJtFUEa3Pn8fzz94eHpyxY2UiZxBvW9PWX7U2AyAo7cfmvp6EeezThCoCwGn9AsfeBWACdii1waQ2oX8NSMQJ",
  "key28": "2ikxj3QQBwK4zVz1i2GHHk1vpUv83FxMPmZDFY4Ucwg4TcMUDLPo7xADEU2Qn6WX5DigxNL3wN81y6kaniqA2ye",
  "key29": "5Hk1ecpSxGdq45Yirn1mYDNYq1n9n1tqWG7156MDMYBadPHexzoUd3dseu3p5QNVZCoEKTqLgXXwuEmpgd4n552D",
  "key30": "5FFV3tiHxedoGX5WokZ9EiunN5wUnSyRF2zTcEErWWUkcLrLHAuB5Prm4facSx3xoLtm2Kde7kcFSvDr2LR56Udn",
  "key31": "3rw5CNBcMht2SxDUvKSn2Fu1tpS3VMv6bZ5QGqhzjoKXZm78Be3Coq16r16EPZ49G5EfefHWXP65f8s5YPTyHyXV",
  "key32": "3zsFwNRTPRDVEs5DRoXCveQbA9FynbFPCBLoxi28CHHNQZqwNutfdzM2TNXFADTct1Z3VUZdpa4xFBrcJ9mcUudz",
  "key33": "tbgwvknNHNCzL8UGwj78PxLodWYYJ4D1izc2crsYgbdMfwRF8C8eCKdwLzs2VP2YYJfnqvLj5XHLBbCuji3NLwm"
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
