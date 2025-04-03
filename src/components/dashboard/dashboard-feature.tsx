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
    "zWR1jpLGNz66n1bKb8UTZJ8mLtnbw21SGW34cfr2kr8SQrqGEEARA9YkjrCDCRjqsBGuBqi7LSjnnTDzmS3EX5H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y7gKVGZ9a4YEGyPeGqrUNV5NoesKtDMrK1s6J2q1pp5hy68u54safCCy47NmLFZri8bY4bfcx1f9m1tTNbp1B6z",
  "key1": "2sufpREGgCw1dz3HQAj7SmuNyre9Bw6YCumBHovtgaeMYBexRSUnuc5sUrQChFJ3KEe5NPovUoPXkaMxGK7jE2sn",
  "key2": "4vz8aZSqcti7gWALYJitbbX9tDsjXtGeYXnJZZGv8RKbFLabriH2LwirrBbNzu7qkptRpxVGduxDVznTVtEZvHRA",
  "key3": "4yVJxNRMAsHT7E2pxkHWciiBj8Y5R9QCYye8sJhLXvK1156haEhBTM8f994NCiMh1BFLnrPHT4ovGgzSKYqJh1Ur",
  "key4": "5AmzdMoKF9EggYS1QLjJ6xUQKrc8afQzE1YD4jv1QLbVzcFNeXC7a8ZeHLAvxqxVN4BE2eaKQjd3gv9HchGSsJBK",
  "key5": "42zQRp37WSDm2wr5y3jFmhS1rgBwxnqqe1Z4SqvLH8aqGKibfAFqeH8hAUd1ueUSqRiZUMwk9W2Y9jDXy942xrwN",
  "key6": "5t3hNEqRXBfQDsNftbPRF3GfBGomirGEhJuDxjjqZdhMYoxW6LdEBcfxtYGLWVtJGoB9EVC99LgYtscxbkBv6FS3",
  "key7": "eqHBHid8MyRCgzQY2ttoDgXU5S1yJTHnuXWwvqC3Zr4hrUiTX5ohUTxSCmH8ALp57TiRn7WSbt5LqeNkTe3B4pe",
  "key8": "2dAxCJxCiJogrqSbvau1dk6qeV6posoz2aGnZcyiVUk4VdtuaB4paNaLjeEKBv9FpMLnfJ5ivv3i59nxBByno4PH",
  "key9": "4G8EroeXYjwhoG6AHwGCXnCsvgx4xr2Nhibsq8tx2gSE5Y8VTCAPDWdrBUEF2QKG9z9yRZYri8bbwr6RXJpqTaDk",
  "key10": "2zHr9Xr1B1KBxx2U39b1wfXC4hP3KhqPm2ruSXbrcEqcfKzqoNxKkMbpmGAKrzSbrr6tR6nou3mbHez6yL1hcZok",
  "key11": "5ukMDonkjdZSEyphTTppNJ5cfNvoLGEoUiAmUDx84CZ4gA13EsGtMx5PCqejnXSjc2m5DjKjGYSxxKHby4YMAHoC",
  "key12": "2hGs5pvE3B6m4LK8VJ3dcPcz9E9erhg3DfKeCF3xXuM24b4zwGyoPELsaWMe5g3avcVsKK9wQxYuwyYHL4QirMrA",
  "key13": "3XbKpocwuBCzTPnLdGphB4VyijDwFX2pyyKGS2mZgkfPxX14SdWLHtki8zmwD1qphJuiYRXbbfwBnT9w8hZatH5r",
  "key14": "tgAqKA8EwBqdGzUS16jWfQTYXySzYs3QLhfGQHJMQFPq8TzG2Ss21PXGMrEnNmWFQootRNCq7KQL4kKKkPqhB9h",
  "key15": "pSnzouKb7wgriAYSaQd48LJuxV13w2pWeDEo1qx9k1sXEb2qRfP3LBNkdMKv276kbVp4BTc2EjSqfbJN9BdvdxS",
  "key16": "5kbiufNEZu3fHniPGT9jpYgHm7dYxFakwLFqDWVUHCVhn4XiBGBZ9TRin9YbyotuYjQaDR6Crkg5vLmEMpPgrYCc",
  "key17": "3oenb2uecLnHt8CGWfeaJjJGNKKtb1nekXi8WQzkvEeKVAaDk4E4Qx55FEpTddUmJKzka7WvfcyAxhfJwpLHXcXu",
  "key18": "2dnStEiBLAdDwN7fXtC3fgsUbgzBo38pBqcsm6UxbwRzU4DUBYxKH9a8uq7WR2ojevuERhRNqs93veCRTU8z9JBZ",
  "key19": "5cWBS4FKF18cv3VZQarU4WM2NwxH4ei6dSJQrku4XWTMjH6twBjzc1Yv72ahnLGEGjZGkyXZG2Srr83nR8xfWei3",
  "key20": "67UVqsDD553CBcnVMQPoP41dViuXgZJiNbezq1yGmrUvC7nqVxjGcWWHe5fmFyvkvANcAaRHrXYSATrB3kDjgYys",
  "key21": "uzGFj5DZhMSQQvGayWrytwFn3wJf7UphZDELkE6UNo6iwhZyvy5XKvozLhQyyEMQK9nWAJbUZCym8jkHBGirVVF",
  "key22": "3UoJxKhNUEsksmSomNMpUU1bXcRHm3SxGAi7uMAYGhG2Lx1MWbRvbs2V6U7hMTbY8ztJ2vFVHXfCaChcEHRJrZVi",
  "key23": "5fn26nTQVsgCN5VsNuwoz3uWaRYztokkX9NjRJBkESF4KAqcpWfmhV2Huo7a7gMNDVqWm3kY6F4Wc9QP5ZpHmr9G",
  "key24": "5xJ5S1UXshhPVx3X1ibvqKhgJA7ci9k5yrEqFxjvwwDX9B3n8nK8shJNoQyPWLEr4yv9ep4sCsd88wtrzBiprZ7r",
  "key25": "5oZZwEYyu5N71yZxNsaYrwJHSpb2gfcT2wSZ46ZpEVxgstMv2F1qgQkLJVymxmv53VkqvreoHqyQWb5RCVNSLTak",
  "key26": "ME3AWrKi8fQyHNcjFdKn55PJDCb42s9cYraMWdJD8euFRbKyTZPRRFPLuyU6hQJ2fb5PhCNkryMvwkyWw1bWWYc",
  "key27": "5qv173AHug47AHskF3ReLzc1Jw9LXgdudkyh1oAa1fPdHNvt2PUdp7aeUdXZnGiLucChwNAEQDyUuuDEcZg3k1UV",
  "key28": "54ssH24Z397t89SkVVFdpwPhvFGVkwgskw6uypjRnQAEgRMDnVX4P4ZEJcbQ4vqXj1bDBuXBkjJK1t38sY5uMVbx",
  "key29": "4NKwW6pQhnoRC8V21zNWbdw4cN8qM7m32vcX6a2D3BzWvWfVkRv6VMThxCX3yk7AzF4w8w33xf4CccsYsEqkc7Ld",
  "key30": "2y6S2F7Wci1ormvfaPUrvqJ4PXh9havNxSAhCqovKKC9MLNMA6q98YQ3rrn1sFhv26K6GXyEENP25VRckKENbjLm",
  "key31": "3kgQmKSqESNJPDBcsUwtQ5umDvzbvczhApBjLrYH1N6u1uH7FGMTTPpkQ3MmjtNNtkhmHAqPcqHNiNyTioUkgiy",
  "key32": "5DCzb1wqDQgnafSdTWZQL24X3Trm7rCrBLC1x6qA6H2dwSEzEK2pUzzZpdXQh48uBGhUXxrJMJDW5pJb2MSPa9PE",
  "key33": "2wUhJqYSxNKCXMpxzyXfNDmawSe27kmLAzM7yp91gQgyi2ZDQA7ohxwDWUQifK2Vf4qXUNP5PW7iNN7ppKn5B4d1",
  "key34": "567EC5UwDaVpoxU6opHSZd4uLGUjqqBXH2RFKj55bF9wGvVigKPZNgtcqQC56Xpir3ac5qau2NHASbDkN1ZHHin9",
  "key35": "4cM9BorgFcuqtVmWKUfwV92da5wPhq2stNayAxQe7Uho9adnNewG76RmPLrkJ1dthR5VnimoueWuiPKhfZ2jzybb",
  "key36": "BT4xVDYmNGM9JWFn1CbSQFrswrhjza7qcyYmN7nEv619mP941XKazFXQNNQA8hPVHutGaUvXAVDoyGY8Z9uLN1Q",
  "key37": "hyrmzx74MtnMu3QFmqtcY9ndXBbkUzjwEVhSRYKpWqY5R5YnJQxqQn9KL8GiTx18vyHvU43hPdNSwPJB5ShvVw4",
  "key38": "5BMnjfkk1wRHmfff6uTKmrgDJTRYo2Uwkq3fzeMHX39FPm48GqJCRx9Vyr6Hmdwp9H7KByQW91v2cgUq8CmD4eEU",
  "key39": "3ZvEhuWF46JXHYSUfUZM8z9CjMjGkkaYPDKPxfidafigeJ9aHCtERoT5WJSM9eY4wEfvWmPeERo52moRqkoRb2F8",
  "key40": "2Gm5gPJYBouE55ccgZuV6Qu3FPdVX2DgdjquVhrTgVydeCD3qL5PzRw9g6gwxg6Mq2CHHt1zXmc9TSxD8qB99X9e",
  "key41": "5VgXRi8C6wZN9SvoSASsU3NFQMYjVoeEutCFACZ9KJ7eEUdiVD78NHVZyZ9TGGbFeJtbVamd6vwDVcQuVKA7bmVp",
  "key42": "44RL56HfwaFX9XeXMadHz5TGURPDJZVSZziNitqFxQ4oLCYqLJSiFZquvdDbJK9gBhQt3zHzgmiYA68QLvAHfGsN",
  "key43": "2YzJdfj7UcmDmyGCBiSUPAjoHtexCtu8rh7htcRRMUCKt2Rdij1s8YyUVXbbnbjxVDPCox72HuCJUBVWbH158mm9",
  "key44": "4F2rqY9o7fBT3nxAcYCBFsvHBuVJ2T2A3SgkV98KEau6JPBuYcLsUqQyPjyh61AfsDq6vCi9p8eVCbpYWz2zFU91",
  "key45": "3zL2TVG6hwvsGFUrcJmpbuYmnvCGaxWLKXA4tJmTASGqqhtVpzYWAb75Tddt9hHRfwjHHw4hQe7yKp99SjedueY3",
  "key46": "4ae8R4fwJoGgdLibgVV3vgYsnjUYmcGVuTeir4LTcLDbgijr1CNjnXw2d2oAc7QeHsL8eQdYLWi65bj25ULSTiXM",
  "key47": "5jMx5ugHJpNoMfYPquh8cMiQqzphJxG6URwKC4h6bohMuhsui6wUFQFBJvA5jWJJdWcGr5UCxmVdKMk1vuXH8kzM",
  "key48": "TvdBCDYr2i9fXkyu2oFPEh61DrBAA7EZSaVaJEek4ShcNtCdpEmx6BsZtiKTcdRSyRoiR3xNVP5xrmhJRotsCbV",
  "key49": "4kJ6wZpCzxhH2F56yQNiTaDLCqvMsfcjdCD681pZ5Npg1Yt7tTTXJQXGXK6wvcgXxtUtTVswcJ7bxV35groCUYcL"
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
