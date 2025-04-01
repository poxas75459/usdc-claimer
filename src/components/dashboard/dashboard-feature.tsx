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
    "4MDnVYJBAiJZQNzkGQd7xiSYXJ6b9zJ33yNo4hSwf7m3h5MGUzkcSytTr68RE7HfYutuuRFpkQCckGEC9fj57a1d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4feWTUq88de3QtQ3MxSQ3BxLMYA6v8ijD6wX92EBdXD3KuuyY6hbcG4yr9jeXA6HFjYH3CPGNKbdq4GVjwwdhdfQ",
  "key1": "3ZXL3DFUFTRRBuMZdwSye5GrnzxhLaWuL1tPo5R8A7opWf6Gm9Tkyi5Xz5Kmr1ji4xsjJHjnSXMrsgTHN8Rs9Grm",
  "key2": "59ikCQYm4fnWX9J1JvnhqsqjyHKVBqgz6HwzNy7YGtVwfcoM46iTE8jSMYFMquEWnkjeNwWkwqbjoFJFgikDMiwy",
  "key3": "STEoDB3g3xVhAQbH7gbN8SibKGdvoxWaS9P9kZ7kcAz1ijP9V62mzru5nY2f1MPyVvV99rUMwnsU9kxvwXTSCnq",
  "key4": "4czbFHq27eusmkK97fGEUy5wcKz7CeBPRWCuP58DQmF6YYDZybBWjq1epYyHkx44mJB6sWLFcZpjpeQkrt287YrZ",
  "key5": "xXvTNUhminwkNnXJZySn7Kcy6PPdj2ZT5MGFh5dWgni3XNznZmSrBCvR9AvGUmmv8nqaufZmD9Zjh311vT4LDib",
  "key6": "3eMYznooG858CgK9tXZsUbVgKCnWWxpCHzJAP4NEmxnXouEKSPRt3udJg769WiigyAmLfnmDKwZwwXe3MgeJNewK",
  "key7": "67NMNrgCnP2Hi3Tu9oZs2PpGrtMWsPKE5miJy8qXQYwsj823ckX7ZVLaDSJbTy6JAB5RKnzufzsu3tXWySPxVp6G",
  "key8": "67e7pqgjMA9fnFWSuEbP6GE7kHNu2PbsmAggazhAfUudmn4M2L3nJQRUwxNsDQruAEeBWa5XNUU4FMkVVMb2XbB6",
  "key9": "5sGsSfrHgcaPnKzf1C6SKaut5QuucuPgUfhpTomemiGC8rJw4tVwgnrfovhP4rJEHDmi2wJehsVr5KqvMVbLLj8X",
  "key10": "5cpBEo5pqhTwT5ap1bcJxPomeH6oufqd7GkmUzh8ZZyJu1LZV3T9NRV4mqw5W1RYSDWjvUp3i5Rpm2QKBLRxwnbU",
  "key11": "3LPsf7SScYyk1z4koeQyC9mzEKWJfdVGAkVixdttUiqxpkCthhYB6FmFEDi3eDavmNCqp8nV6trnUXNE8eGpr9jB",
  "key12": "5YX6DGyvbvZbBeNG8HX2J4FsnFQ6kdCeiYkkPYpKo9WrXCJGhTYipWxW2z4WDMFAweCmrnHFfscV7DQU5uK9qrQx",
  "key13": "5zbVNM5qjxksbER74NPUbgfwkyxoPDuQg2qY6jXVJiCknatwsL25aMrAnYBH7xxYngqdmtcESrbyLu1PwAxDPj55",
  "key14": "5asSF3HZxYHooSNQscR6vsmYpQakRGAwQtNZJ5KnNP7KUSukKTVoPU8QnMjvUc78YGuzotK4bSCGAHkkKXFFNX3a",
  "key15": "srvQmhh88RQYKaVG9gddt1Aa5kYyzAKKq4E1guBh69HvqXS57fBGWoyVEJQWGvGmHv73B1CRzs59bmtaJnGbLDS",
  "key16": "5LUEru5gGm3JSdVSbdgXsxJ8XsvntTRekPiW1DcEsKTwvNZ2SaiMstqU5GDBcnVaCsXPHrwr3tVu5fPFvGqwGTJc",
  "key17": "3gdaicmfQ7KHCvrEsRjbAbGoLnhAGLowPAHLNZg63dZxjpGQtT87uhQNptShddPpP5C2ndLGBvCDnSWoQb3PmPyA",
  "key18": "3uwvdgEsY4LQ8xK7berArZqBLsJVCNGTucLqe8xckxV3BM3yAKiByw8mA7QmgDEsmL5N2hMB3GbSr4XLa6eZLtkK",
  "key19": "4iXVWnvu8DuKpCH4Tgzp5Np1FyoptK7u5qfusKHYYK3jjyUzQB1gAwh4UE7oMNgwkCfLq2jyrWFWQjzukwz6XLYn",
  "key20": "4Rym7xdeJxbNKpKGDHKUZrV4cD4sdXHNWkSN58b3crjkbedhJH7u8MyGpTjfmyUfJGco4VJ63UqP7YE1r2ehQHAi",
  "key21": "4Whr2LdH83fN4ZZdP6MN33BmKA3VtwE6dpJJZYJEkXK6EXtQJxVcNLo6U3mUrDoMQ5A8YLdkb7hE9uSEENu4zsnV",
  "key22": "2F6Nh2j6bbadPHi2BtQzgTgTTPLqsbbi7YBAo2sEP69kYr57BuVbmigSahYWvsaE8Z7eHRbxEQfa4xrrxafNXrnq",
  "key23": "4vuXFLCYKyzFdyy1uzKbLSXkHmStu5dGYBcMvvgieeSB2UfYTpDTd8jci4dR7JTYAJi6o2pkxTAJC9URDX7ebTij",
  "key24": "5o9WYH42sLUy3ZYcjuixvLQ6Wq5x2Xh1F1zjx3vjVTBfgqwEgryBfyi49uTtEgCyMnbDSshb3gxDgE6u1idsKBv",
  "key25": "2W1uVB8tTkCvHwFBCcfYmvry63q42DqgsXNBLUXHuFdzpBaAWHnMLadfP78UiNzDbW6BHf9c5A5W3gaMvtYdSAwM",
  "key26": "4xWsVCM42DAEnyZchrdLbDwLRxxm3DJonM6Ftq6eC5VcXW5Nq7gPDBX8ipU4qHX1fTEWj8haNSgz248mwTwsuZ33",
  "key27": "5XqBUJM7EnexYoF6gP8gvkpY8QFrKNymtN6bQNQRkf5EtprndjvxzX5oe4gNz2ebGsbYJQQw8XLBa7DDBQWNxCR1",
  "key28": "26PgxMAn8S8aKjYRmXnsZf5i37wMZP7hkbuipj7bkDKUCyLo1NkW3vZdLDPZUqrTimLyP18H7ZrzxhBM8KesEYGH",
  "key29": "39q3ke55QbSFQLAqH8C91tY5KrHNt533cz6bCyKMULXBL7SpFYP9VYm7oh4WgoY1u9ciwLYbR9iNnJUvcnAfEbpE",
  "key30": "629g8pZ84WoGZwpg9y1ChQP3SwMx1B47CV13CGykw7JRPuJkXKJnjy1Lk21rB49DnRivSLyaeKnahazEmwbrzzEa",
  "key31": "25GVF9MSSziwWAf18Dcv4FmRqMXDLiNQk6rjm1xBEhKAUVJ5vt6hzXH7844DkEqDczQEBowNEMcerUBpWKFxmo6n",
  "key32": "5J5XgMXPRLCMvgYikzFguBzTiuYAMYKqhTP58a8XefNv6zjoeBrBUBnhhXpnWiD5RCUmhFvoSvzqmm6ryBW2H8fH",
  "key33": "2zWGC7ESCJNQ5jRD1gc4DP54xzV2rTQ4PyCSWg7Ug3MggCH9X5VsaoxYRWmEcQdDDGn6GGDWyB4h7CCehtgugMRU",
  "key34": "vptGs94UqDgeZfpeXjpWCuEiXh4TepTgG1rqcymJSpF7prKKFmySf3xuuSD5dHYrVbuvjyVyBjr5HGNB6zV4Chw",
  "key35": "5vU4f7ofnKvqBmsmo8f8ZF22FrfK1sgsYiGcwNMEGKHHZHo5AsVS8hu297ge5oWqEVkt4ymFgt4iXSmUHkLV8vVF",
  "key36": "4G1PDFSc6cvTkGJtgy3tKdPaFNYtmAfYTLCLSdEcXcoygbW2NAH74t2Vrw7jumFegkZJwAxa36Uiz2XNSwWD9Lz7",
  "key37": "226DVR4sMRLLckpjLgbrLSLQYu34vEYfUAmCv5A7LrNCP4JWK4CDksz4jdHBnuKoruakMcEHZKQnJx2FXpe4KCka",
  "key38": "4gRUA5jAz8hhF9mhkHcvozEQ1wrST7eQ7c8rLbwxgNMP6mmXN6N18kXifm6ph2p95T8R8zSDEBLQuFDaohaXx1qN",
  "key39": "yd1Sz398AVSHVY7k5s1nhpiQ3qpLpz3q3njMuYEpqR9ZRwDagZ1AVSiXEPRxgEW42mg5fDX6eUo9wHY2viiX86V",
  "key40": "3rPirwrxnWZtr3qJ7HJno7bXXi4cLpgc8UEYRYSj4LsC9YnjjhVGhqNAwdYkvGT5jgXMdLbstL1K1iR4RHhSjC9r"
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
