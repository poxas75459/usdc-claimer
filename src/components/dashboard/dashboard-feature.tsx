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
    "3hVNAN8uiHg8SRJpXcakpTWQveKgtNMoacZVYs6eDaa8GuvA4KiYh2BSMnq3KVdpjsbfpn72exXvTxv4p2jkLSe4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PWXGhNVNu9dWNCtedSHFzc89XfKXQ3r2Vb81t319dwKBoPV7ysf75sQfu1yGgH75FDdz5KUpYzPPyg1KuYReusX",
  "key1": "4kcWPkwZFFfqgMv6sKxx2GVq3u7s1zpYnVCQBtL7W8sYM11D3XguML9W3w3ShV4Y9XBzQxieQ9DrdBnWDtBhAakw",
  "key2": "xUW8c2BpJkHH2ZsNDBSgipTxPT89RcC2S1MRz79yew9rLtuq8fz4CBWGhHewVnZNdUpRgFt1LfexWA7EuMNruaB",
  "key3": "cWVLjFuc46q47JjdApzMWB6cbATfknDLjU5ZCDZxuADqPkyUth36KjzNo12gK44jQq64JjBmLQhqCnk8ethNdho",
  "key4": "4UaqQAwYdy3C9fjrd47kme9KQxraMjbU9FF1XZkQyUeoioXh2BQrFYagi7Jrpk7eZ8rN8qVtd38xY45hs7RxpS8v",
  "key5": "2tDNa2dmhDhY5V2t37qbwZjt7yyuYdPtGcneZpeNTxcAAjYuopXPeEVSYXmejXeZmAAaUhFfEPPJcake9hoFSx4Z",
  "key6": "g5eWpoR3PPstKPQKqXjbX7wFD13HdMqWBpfv2dsXRETcwTzscgrE7beWSDTdFsZsmwrbiRyXqt45aDWUvmbpaSN",
  "key7": "ZGffPwBX3sdKga6puxzD4ZwMf1ub3bXBkJrwCzG3PMFtsRSg4DFUB2nQFMPG8ub1k374eukgwotJpo5pD6jTgXb",
  "key8": "TnJiM8qooY74oRNpdc2VcuAV3maKXxQKFY9wRJvBATdgyHdvgLts8xxxLKnNC78LxGCL3rNH4ZkkdBi7yAXQBeS",
  "key9": "3ihCUceKn4AB4G7hyY8rbVAuMdApAwcehsRjDjcu9739KUDs1k9nTZtCJVioz5ouo7BrVbxjGvWJ2bHaovH1XB3",
  "key10": "7bLUx1ncPVQmwScx3wAjNWEjMzNMsxQaHFQDXFaCLn1C1XZ4ecajwm8nuc9E61oQU1y8PDBU7rXz9Mp82VMNfXa",
  "key11": "2ZWv1QgcE3KBB7BJzaS1J1JyDhHYS1RB4qRhNywWcTQfAbivzhw1nZvsmisNLcV4F7avZaKMyBXXQChjsKaVYRnV",
  "key12": "3Phjnse1KQnboqKERX74wLtFNvbvbjcQb5zpz1ve9NhQihjJEcimE6qDCZHCdoED4JwE3MfXQJ5gFRp6QeuNLu6X",
  "key13": "5fQmeduNHwLiAY88LFGvhpz1SgLBAfXqxbkExvjeVYpytUG2JDL8FHCTAtPM8ATwkTcwdtkEKAX5tAxnNXYSk8CB",
  "key14": "PnRERQCpGTwu4jwwZj7ftj47UeqHNu5A6byNYHFXng3uztHSQVBnW9va2GvDhbfCWcDoyquW2aa4Me5et61wEA2",
  "key15": "2ASLgir1cDTBJkaSChNgnMwT6Ds2q53jKYciRFcGHKZshx7ozAuEkWXEY5o8c6E4nXNWKA3syoKSeBzpZbRTLVCz",
  "key16": "3vqWdjBUCHjNwnXsZQAW1scSxhbgUPRaEC6PUmYNz5hLQA36aLj4JEPk6eR1vB9rTAGhM1Fw4JgRPmdCvTr9n6ij",
  "key17": "4c2kySiZcq1SpEkfNdU5nM57eAaGDdqV3LgWeFvjaj3RhBxL1fRemtHgHtGwCSqVQHPHGEZ5Rm4yWP1gZSCqLXnq",
  "key18": "2bLqstkS3JeXQAZbTRCav7bEvbWRS5f4DpjCe3TnQnD25CYTA7fYCzLQrevczE72aMEmH4qewgNLfm89Ru5AK7y9",
  "key19": "CGyxE6yTeHqpvSeULBVgqNZBKzrt9dugczwqYUhgEL5VT1hQv8xyrVDkNozgm86AsaqKeZhDFzarDDc4WoeYB5J",
  "key20": "55Vhyv7xuazeWEh68BYXF4uuGokrULBcjePSbcpyj51JfjoyT8iBjbtsSGUo42Zc4GjyMFuxSa73wT5zu75BAdJM",
  "key21": "QWw7zptfBxDDiCrizaPgur8ABKULDoUzrQgeuNiZf3GLkLisW6XHMDKb4xR1pz4c1kSVyuDzdjeNB7txtZV3VBh",
  "key22": "5obEWftFDMfFBwfneexRv3Nhwk53ADoDpcAp76B2mquzYfoAAwh165ps2VVq2XAB2d5yQsZb6GTPjz5wMYC7L65k",
  "key23": "3QSjassU8t1CU6588VWqrsSksN2oE8WATk77XrfXym8gtwW7WaQqpwUPEGco8ZYrzdLzD2ptWQR5xUXbSpi7a8vD",
  "key24": "2b8HnsRysnooFvYLx9R46aaTq4wbMjQr5i937vSEAAoiaqD5mbmgLV33WPEDeYjhvA8iNShhRJqnaBXgQJZQnMrJ",
  "key25": "5DVRJm4TAXfD6f67JxFyijkEksbZ43kEwGJZSyomjMfgz5TEEAwJ2SyACq47UBUi6Ys75seArE2bsDruEzYp5Xq8",
  "key26": "4iL2umaMULovtSY9VWvsbk2utPF2WDrVRwnKXk9tV5b1bHEMXS9FLuS32LYqGMGY7dTeEvMEE14sebwG1zr9XHGR",
  "key27": "4Qc3Vi2WjKGchqbKX4RMu7byfj2nKNhpv4amgWwabTR8jwGfpfe5GTQMfRv5aTYEATnv15rri6fiZDtbaaHqxEY5",
  "key28": "2DC3KxURpVb1ANT9Pb2aEgMRMALHgcEpwTbFPSSiocd2WnNGS6tLXQCoFJjrJuEscipHNWCKhXb9Uy9oKjtRxrmZ",
  "key29": "5W8xNTLz4HUc5NFZuo67WzZaVf6G9r5XwcPj2FHwtEaS3Fina4VYCTdvBEzpAe1R77eTDoefUYwgH35cgbvEja3d",
  "key30": "76BVNNq77KamQMNTM749QG2s18EnLzzod8aabcHM8DeMsybZ4XyskdrCeiPBbVQahUZmb17dKZsTthVRZciUUyC"
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
