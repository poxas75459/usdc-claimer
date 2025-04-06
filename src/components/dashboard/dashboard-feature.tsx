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
    "47i6jff7tHSKXLTK8EEoScZtFmCdatyM7e13AQdBS6n8xU7A9CC9q1ybwXk5grvjcLrAFDkDpDnyA8jhrgkestr3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B5erpm6ssiQqXe7rD8U1HrbChtd2YQBrQ1M6Gtt2psAtTxydK2sEp15ugW84xMFSCBSBF375sax59E1jHZjKURU",
  "key1": "2AGKLFFkhqtn12eDWpduWW8SDDYYrtBJihfwYBCaUjMuR3ZXmuYYPdZvLU1VUozX7j4eR7WnNo8QBMHgkzuzjCFS",
  "key2": "iGbtasfuZnkrcvzmFu4riAiCoVjUzrFbykQxT7nXeEKDYaztY5R1HoQgEYMhMt3V1K1swTF9UMXU2pQZGarHnD1",
  "key3": "5zXk96D7RPAHjZUSts4TqaCsM44mwXyfw767FMvQM1dFTa23RapZwg2QHWxeFnu7k7fustFKN1WvuQ55FJQxju1g",
  "key4": "4vzwWh2hJUDtnjcCCDzYDDAZwtQ6VKSwmEoVcjZN3FpGXbPnX4ynLmKKPS5gjRiy6DCxXE9DoL75n4adnAEUNtzG",
  "key5": "28wZHQfxtzXneaBpiGupJteMKfkztKwWADcFNRUjPWcYA5j4BQ4fAtd43VCe9jZYf7UJVtKnrCsW7hsQSApdG7cV",
  "key6": "2ekknGV4fCS3QtPbcdNE2mx1HHXtdgvmPSGePbYs6riiGLxArGvMpZLncTfa32wZ8cJbuW9EDujM4R6ZHiVuwuQm",
  "key7": "982Y4reU6hAnBXjyeS8Ae2cq1V6Qm7sxbUfmgd9NxBkSYUUSEFEq6MNhCreaSgWuLCGyjXjrCibYcq4kkHF6UTv",
  "key8": "4fGuzKFBTtV1ukcShSruy4Qm8jzBCZqX6tezm4oPQ3WZZgYXdKjEb2khLqcSbGfAoQELpr1spwAgtaBxpTqoUHt8",
  "key9": "2tEP5qVegBB5vSyDHhcWibb1qWv4gNT1gyfcMxUWPvmiTqskjc3GntmnoZZjoiHu5Z7Fpw4ur1WjKU36TViggGb8",
  "key10": "2rzGUSN4tkYJ9ComxbaV4yh7vAemDgfLEt6p8LsfGDeXGXdRyPCMaTmkKku2AVRCs9RXxTMvxretA8jdh4QwZpHV",
  "key11": "Ub6qQiPWsfQQegS3UvfPG4MbnVy9evGEY561cZVt4EZS7PDDGFx1mjJGAiWBPmchZo4aUpcHVnSzr3granCLj7M",
  "key12": "4rNywwhyEVSD3rtfP9ptrJ314kKdCVUYRU3tXz1Ew5pR7k9EgryP1HSnbEd8PPBNjkLmj5tFJCP2wMFUK6Tb5fef",
  "key13": "SPDPtLaFjX1pg9qtkLFUetFSEBaeWPdEomXt971dBm4EV7Jb3V4WHCMzHe36w4KyKkwVB4WghPKL83rMzxABHw4",
  "key14": "BEgEmNedntPxjomWhxRtWEiw23Gm2cV3VShdp2mQd4sq1vQpmepEzuR1nH15zxMtnDhaEDi7nga4x7jbPvGFMMF",
  "key15": "3syLbA3ADXTQ8GKzV951LnT91mVJNi1wAb1kaTPMmvugmfvUsqndVALL3VMS6NBuet5hUeSy8bctS7YEJqr6RYxQ",
  "key16": "2yMm1d2wvNKegCFkDhJtWCTcYNe6kBQ4rzMpDjNAkuV6LePgvrwntGUZ47LrxrNfm7Sqr8Syf7QoyxRzB3rinzEU",
  "key17": "4e3SLiQAAectwrC43nStHbLbn95VZvdamYEMkeAjJK6iMRC3PqPCAFpnXCZKi1YVxmtqyLRwJKCpUoEifxTGKbXk",
  "key18": "4rEzDjYH9overULQo9k9dhobGfQCJB2eAyJz5fnPnrXLqku28bsFF5cmcVKm4hf3MDLUefn7RzmQU5capRkte5jH",
  "key19": "2RoS82apmFCpJjxtrNekS1XUDWzyfeChcwD7E8h9mf3YrnSMcpnETjAmgJ1oiFgU6w7USGnonyELcZwfp6Et7gM8",
  "key20": "2FM3HBXx6itc19DevNQAhS6Zt8zPHAbtPUJGHpBnk52kqbcWyfHezEAZiA2X5bxRcUQv5EUxMdv4NZkcccLAmtP7",
  "key21": "5FwJ9eTGn4Sk8jyFkcE8m6zZq7nUH5ZyuuaJjt1YY9uVVK5nECsC9cF3ovjZ3p6pQ6DuhipqNnTsoLi3FH7xUFUL",
  "key22": "3XpQABvhGqCVsBqfcenc6CZE3yykc6KNRzKrjQ7nA5xnfmP2SpmEdNupDnzPSumVzG76ynWSMLdNhNUdSRiCDNZf",
  "key23": "3VJU457BWHvf8Xxd1D5q7Wsv7VxJ3ZjW8kW5iUs2b7uTQqYbhEGMM38BUvRA2AgmAHcNU52KD3MvqMfGd4bYtLQ1",
  "key24": "YVvZxDSmxELE6KGyJV1yGvQ4JscPXD6m6vvtbftAKsaBbokecqS4NkiT8ZjJRTYxd8b4D87pV2TceuDWM2Dw8ZM",
  "key25": "2u818iCSd8rBWZ2qDEeDsZyuyLL7SGeGnjkZMaGFxtMFBUFymR8R2vEyz1ccjGyUmGtbC349iPqt9HwQUotvA5f7",
  "key26": "2TZk7GNqftzf7kZc745AgmKJTdG2sDvGXuNQ71DyqtEsaPEqYHdvGr4hUC2Uhn8sBwm8Hw44WgrDNrrevp8djwWm",
  "key27": "5y711Poeetpxyb9yL3RDxLckUK9nYkXqAg94u1vrHKve4GVCwc27jua4nmJmBWX8JYgJ2p9hjJGMdmwU7keP5SJ5",
  "key28": "5WFViutskB6UWoSjA4kAB7UjMz7AxdUb1ew6WnXTZrmA77QD2HZkSkWQ25xPzPPGcQgjkEupKkLqbuA9fEEt36bN",
  "key29": "2Dv6TKDLpSd1Lyz3QLeoLvdXF8RQNDAkcGRqcYtwstCgPSmtac1sr1Zy8Eu3DixdSzntSucQq5bPeuRTBZr6FnzD",
  "key30": "3DKLX83X8Nd5vn8Hno1AtaH5pxHQw1or3kYm1U7AhzQUBTSPYMhLfcxpPPLs7RyjCiqTec9GzxE1rNTFARPo1Dm6",
  "key31": "B2CvfysEZGsmahtBJ4wH6ajegAoMLVCg7YMDJzTBqGPPsrhYkycq7d3ZoAG9ryPsd7LoEcSEVSvSUatStBz16mM",
  "key32": "3vDgMuamTBzU7QiUbKFzgPv28mgwtHzqzXNhuK1JVwmGwEd6BcWAqCcKDshRaAkGCZqvtgAUZFi6a1iCX5eY6AK2",
  "key33": "4Tt7Kou4h9ZNNpXXrJ3CY5WNSE6kX85pTCi4ocovS52xa2fYGA3j8UmUEJjvNCN8X7AZ3uPo7sYEkLkNJH16CdAs",
  "key34": "3Htndo69AxxiDkpoecZU9hfmDpgvWKxUM9D22Hs5sgx1WXcGcwWahmNMcA7SvxfY1DrJivAWi2ouiPmrp3KvTS1J",
  "key35": "3VDLShqzykHPPsWvS4urD8jxpiWwBcaD4TAJPmmGHB6PF2rysYLpWjGUmN5jTVgDMxhqxJJhhEW7fJRgp1Yhx6BG",
  "key36": "23Pd5numEQP7KeSNXc2ejNxpvjLBkog1heLzbcGpdndNWCGPEKvaSRNVDF8KnLWXT9t8JrKuAyqGPvJg3awybujS",
  "key37": "5898LEiAwP6UvQTkPE4nmE8C5ESMopEw8Jciv2wEd27WsptPpK4RFGZWY2ERCkPRq7ogJY4EFe2ECVXsJCnwDcSN",
  "key38": "4NazWhkkKjJYMBz5aRPrFGgHNy5BnTY2HAXWLLiUFRLAgmA4utudGQL8JK8tD6d8qB5niNjVMzZUVyP16kmiJy5Y",
  "key39": "5bNN1BYRYdDsCrKzttYLzCN5fifCgD6ipW1iL7jLUC9Wcc54SLwUmNZMCYtLBCq3vUrBDvF5izwFGVzXJxKdXExf",
  "key40": "4TnKJwQp8UE86bcyTYDBsgyubvW7kdk6GkAz56ZdxQcwTmYv4YGYc51n9qBzRNtCkW86wbpxCMHvMtPFWJimU36S",
  "key41": "571aiWnKZKuti4M2hcG6N2mwwogopJTZAHm8x6gCR2XYsY9Fehwmz8vgrvBS6xhHCzLq5HEdaumBRCRvsfhagJ9i",
  "key42": "3p5ame1S44xfzMUzhfiyCsp8rGN5CWcj17HGVsZuCASDMS9CKCwD2R96EKJ9tWCQxFpRnGwFggZZv2SUPxNASWbc",
  "key43": "5p6d3u9fWR4kVCzpecUXiLQMwCaVbTak2XA445SgyAANc1dhwtmR3f2J63Mfjn4DrCr5GbTj7GFN9pz5z46i8ZfK",
  "key44": "abTxQytanqBa7STywZrVWShGZJzCvqfYEb5XJspVGyjmYqNtQNn4ENYFu5wLrX6gdjSLxCziVAxdzraJyMoourZ",
  "key45": "7LoDTwheLJESMYbmbZP1WuHWdMQybB4VGm5j6V2mCPS7CSFZ6FETWTbf7SHWw3Dcy3TNWAUGzQbG9tWjCW4pDQc",
  "key46": "5ac5PcvTS9JkQ6qdc51HPAgJfEHLbasn3h1GS7FdC7UAjszodUwfhtdtvAb7TW7PdUoVxy7WnJYPZfXT7TJo16Tu",
  "key47": "PyopNM73Xs4FspcsQWsdaBFxm11TNVNDwUngmNQcM59sgjubmpupBb4Q4mwnKKFhiieAfvUD1rhcxp3U82ep2xN",
  "key48": "2FWKEHkPYjzFNpmUfdsBGvz8siGkcFfDTbgxox2uDDXayQXexeVRbt8jsWsRfSgHm76D4JUj4WpVZeoYuSzSfL1E",
  "key49": "B2J5D47hNMhcA1Zns6LxL4Wjups15P74tTw8hEW3tRjR1wkXXnfYpttepiwK3wozhpTxcb8x14WvbbZip3MWyZs"
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
