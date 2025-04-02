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
    "XH2FiHqRsmzxx4wzXeAxmXhdpzEZRB6e6gbZ5xsqR2dV6tqpU4RFnV42XPMp4536zbCb8ycuTGbpkdxEeyNPzX4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vVcvqzw7ZZJBwUFVvDwWo2BEG7i9knSGxD4ckzRMgX7mwmChmWYnd1dFrdvSuMFGtBmXUZVp2UnWopAuoHWsuQP",
  "key1": "5BEJeZUWdKPZRUjRfF3KcsNFG1SsbhhqYXvnhcA3dcgCVojrBJwy8ANehJrTvxX8L3omcxXVrLhu5tbiWNLtc2qJ",
  "key2": "5C4h4zsbpKp7v5abF1GxDZgTo4RQpbXS4b7pH8Ky7ntsRKJm86ZGybegY7BXPcJcGNSL4WwddjGwPTFD3zmXJLEM",
  "key3": "5rJtpLaiqU2CchnnXNYGhgB4gWS4hHzSFUr5bRMnfsGB4kqnW9wY8yQH2BU6p2XhFaJ7jcSXyxASpFuL3CJQtgvg",
  "key4": "3syzDEJorioL85e9CS7vgSFeukCNbvE52vkT9mMnyZJHdCc5peuJh8EPiBx4itNBzqktEVw6DCmnKtpuw1EEwWhk",
  "key5": "2R5RhfSpQZnAJbAToJxerdPR9iiMohMoeMwHWZcJQHHrrMmKYamtipULDWn8SwJanyhxooVow6Q56Kz4wVVUMcA5",
  "key6": "S8KosfsPi2FwgGVkGKYuK5KrbK1m3Lq8tTkSg2SfgsLfkfmZHBAZ7wQLjwBoG8kEaBEjjch5dzyorfmaMJaZNqZ",
  "key7": "SpcFsDCzi8NfhSYjNiH362zXNENL5HmtfTLFEoUNqRH5ocu4qQzWA1xHomy2WiceXGrNt2r6jBmYijMJazkDpFY",
  "key8": "PS69fTiq1wpavxhvouckUVZQFiNghgma9xNqKkquH2Zmmxi6EBijoSGFubZ6mbvKAP4Xu9Rn2XAfkSLyRHja6yW",
  "key9": "2XwZ3uvPcvTUXcs5UisaQ2WoUx2CHvgYc5bCLB88frn5VWc6HQDnSRPUMvkjH6r6MfJ311WLiPoRXVUjYTT12zMe",
  "key10": "53fLggrLCjdLdH2qjZXf7wJmZi9MGEuq7YuwPu6BWSiQ6VhB12okytU1X7bZJzMdfBoVT6JKrsF8xtMJqrhzm73m",
  "key11": "Caq1pZAHfSPWavHacN7KRKDPn9EjKUPCwat8D4W2X3cXWBRxqSffNr35JjJAAxnwXF8F6zTGuLM9x2ZrtG7NY8Z",
  "key12": "35YxsmzErpPoLtLA6W1rcDyaeJpMuV7TFY2kWqk5e4UesC5dgbumPS69Y3VSNSgrvHjZWVJJQA5Eg7jrYvgoXdjW",
  "key13": "2Lhdyrzi7nn4ceREa57fHuz75hsAk98HaqYgStdmxB5HqXRnCfQNAubhUGufj97JU17pA1jJJx9dJEUsyS1fTSxC",
  "key14": "2bwza7xwtEq8DiVWHRUZwbnfNAX8c9xYRDWmHf7nwpt5HiGDFrwArbYqgjRb57H11trAgMZSzGugBHqEQ7abh8vD",
  "key15": "5Cox4m7TzXm5GpFjU2e2wdQbMbjM8aYe8rWDCQHb5Xwe52KdmGRNn14agMijfxtdyxjxLuuxA3be419Ypj3RQm2K",
  "key16": "YTxA7pKpqjnYVaCtYwk8KPYeHdoLwWfcAFhgMbo1WHPFbfMUY4TWPeHCAhfYocyzgeLGvWBZjKZfjoc3i89iYGU",
  "key17": "3gaXM5SF8hnSQDwZRV29k1wbeuo4MVRs9F17f6vtY9ddPkjHwXEfpKYgXMK5PAGtxNtXZH5AxWHpeYSqgEN4KmyD",
  "key18": "57EzH5egaHaHdsACKTrDrWJ4itDK949BWFp5V9C4pdHc2tFJx25TLdZRva8i8xsWyJABDn8bcqpGxzXDEoD3kdL2",
  "key19": "CGcoahZvqCJLWAXQwDGm59yy4L1DbDZjwMiextEN2sEjvwMXkXK3m5REZ9DPRYYxMsg3rkC3CUr2nbXjwyW7YoU",
  "key20": "36G9hmGQQukYY8xNM26NwBGiWVYBcxZZM84ZsTuPqRAiX9XK671SGXVsDGAoixhu8ZMddkVM7YuDUWu8fzFp7M8z",
  "key21": "2ogHXd3uZhZ4uKhKRWRevmzCfC7J9yZBrm4gYwrmLen2pxHdbaUGQCMKWVM3SYRpDpwRevUNqBz2tBxna1FGUWnh",
  "key22": "26MEjExU9cLHxfeQongSqPhs9U2k5CqwP3LHxXpJx1Ea9gaVN8J3KhBpWR8Gfex3UzUgyVj41QiNrZD8E2D5m1pq",
  "key23": "rxrKX1bEGueEv2gBQtyvUG4bA3GeE7ZmGYWEwMPMiTtNF4LR2qh7srfaAW1GDng53y38MwAfNtoYrGV6zhPnUsV",
  "key24": "5f1oFyMmwQRAemUPohdwAufAiYDcXE8LjW721NDALCnjquhmrgLGCkAaZD6xsyd5rXfESEyobxnB6w7QANbu7hyb",
  "key25": "4A9qAcN9YTwF6eCzTB4LtqCE4JLzRh2PsfFp81DLMoSLPr7qaQZVYSXvKtiBXj8X4RP5X8XUw5cZxs2JgBa4BMdi",
  "key26": "21PpiX5fBZpqghboF1CnkS5Q8meQSijq2Kn4NgYSwFczvqg12efKZMw2FCnzAj2Sdm3W6CqT5ECj1Gx4axxJEsez",
  "key27": "FKCkLCpZXR6LyLRU4GCCvdmpxEwPueYeXckZiN83XijF1b6W1RwPjd9ALfH26rwfA5ZVaCVRhB2n5dMBmxiFohh",
  "key28": "29pz3RWEUoPqkbrSkgPZVsUFGTY9bLKiTr8726qEgQNM1Kqk8a87wfqXZmnLLD5SkqiAHwBHFBYKZwPh4wDKdPwK",
  "key29": "449jfd9CZeD2xUh4TMCao41ZQ97yqSAHToA1YKtJ3yKbw8t6NZo7K5hxKjgNRk81aarZUudcywidn944gcjMcNXd",
  "key30": "LiYDfJHCzNvCoETKh9q4LouVa6e3wUhjMYWv18JHCrEmVjDgEMfX7zNKtM6SLkHn372EBqXqcAQk3gZoJYMY3fr",
  "key31": "38rAJhD8t6nMrJdUL8UkTaLf22vJCSSL4vaRT5gMp8CMFcFtBepZq2PFk6Cx893bpeHPxmM1Zj53hEq2dUbdbVFa",
  "key32": "28fdmPQsQso7tS2V8MBHCSx8x6P1ZPiCXaMCwBQ84qrKpHyUWHpCZQ4EntfXidsSA3b1nvQQLrQsK4KUR2CEUng5",
  "key33": "3JDLgUVgFWVPKQTAwgCE95iRDfXtpdvd6omrsftdgnVQhAfpXBxgKJqkTLiZRMq7pDweUkSbGUCGWZNL1HfEDaz4",
  "key34": "3KbLyALnxxqWjJRfdvKcSKGbcXGmHBQMwgG5ws5uQwgujfxqVtG6u4MTyBsHSAAjoLz3dqqTpsdh9tPToNzqsKVB",
  "key35": "4mWta8wYQuh64wnU7bj1xuYcGSdgzXRr74GZayhvxvoyXUroyByjdQLS5u4HRdu9C6VdFA6ZsPCvZfmnvt4ztSQa",
  "key36": "5q2SYZzSyQqcRSktZLcWDPhNWMjN15S6KnKBeTmrqR2Qg5UNWMgKpVJYwjgDyPFenHdAU1YPBHocCjtNcS1jQ3Rn",
  "key37": "4pJQUkS16YZ7STaiH2AjkSsaEWBqaB4cASWo5bGbC2P1EoMMyucEEg25EUcBzpnccuvpUppSUmQeDFSGvm1zUQEv",
  "key38": "3VbwcwEvYxAzzRaHqAkWVq7dghdpNEb8kvxYYJZrwVPEgEY74nuTc2WL4J4vr6y3CZok7zBUAVtQAmpoqgd7Uj5a",
  "key39": "4o82JTSKdAcShPkMs18jxAEz24TWFjMTtqmj8agqEn7UPxVn6iVBKBLN8HHz6RZrpDvsiMziEt5QBYYFdmWp4SsB",
  "key40": "3mY5N7ixSyJjop4A96hCJ74ncjsCv45CBH9vFSGFk3ze55Xxz8nkwZNNMsst2puSXXQ3LvbYWwDqaDMVQatWyAbc"
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
