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
    "5yZQEQSLUgEjzwHDLDAK9EHEcYSFNr6Z2FHdMsnSrdGFhMEmVdVfdU8Xxp8qbXpggtRG6Wqoi7SrxJ4DgoYUJgFT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4woVP5phdX698G83yEuNYjbYWiRdxP2pwz43pxXW9p9pGVnUrAV1uo61HWcMmdcHtgHoLd2a67R2yvFzZbmpKWvL",
  "key1": "5PNfcxWfo9j9s1vQ66iV9oMwf5AgeheLV4qw11WVwL26pcvEcRRSmZLiZLdrYZyhvzkB2JRrwYtZDy3veyvKRaNG",
  "key2": "3Ji5zADLrknAQZ4adCYE49FRSPGv7SSXXYUtc5bRPvM2K82BSMw6t4iFY7XZ7bRK3q7iT8d8yP2hqUNTGkn3EL5H",
  "key3": "5ddkXL8LT9htZGd73e734fKRQWX67kDEbJouNJAkNKMuTw6bmkctbJu6wztgxrQqdbqazFKPMWu7cgiuEJoreSWu",
  "key4": "5s2SruKkKXfneLBbuAfQdbDD5Vrdx5REjeosj3pAve9P7CHtqpnbxGNB6YcHNwFbyYa3zfDRxHir2WjrKurBK9hB",
  "key5": "3fTFMAqZzzRrMWFBLNsBQkBFs4NEqg4z86756JYaCFuHamsWAqs3St47uCjinrGXGYJMt2DSfRGy9Qw1HsmsDWCD",
  "key6": "ix5ZvFy5WkNzkBXq8k1tWn6839ZEHNARcFYfoW6AvFDYcASZdhRxYf5ATmzxVvBrr5RPq9bBUk3NAAjhJJ4q9vu",
  "key7": "3SM27LEcpkFvNjPhi54zfcJFwSvWaC74ZAHqVA9Qv6CJUo4EoJyQyKr9jvuNAgh5s1onGXFpUzX1bCoBgDFvwjSg",
  "key8": "64BzJsevWijCA6gXrPU6BQjMy34WpxeA6LcwXNBpXktvwaXZ4eBKfmULPw63asfnCThcUh2PEv52U7xuahBRek3y",
  "key9": "2ZgcJAVqudLa64pwNmH61iFQe74xC97qEbXM8CivQnR8aZ9sRnYc9D819oLWg4nuiBRY7EqPgdzH71BV4fudwkz7",
  "key10": "2h8o7BmGURdjeaMhzNGF1ran83Yj749WoVA3Wb86igHtWyKS8eA6Bh9nJD36a8yVgBCUaH89J6CmyEZfEfLv4wH5",
  "key11": "CZtxDbM1Sk2MkP8gLVixXBS44Pea3J92Mq7cDmYRaLebxqbN6VKnLo7SfLs1bc8BPvPHJ6YQV7xwcDvHUF5RtuM",
  "key12": "u44NQGmK3PED4rhWYM6Fj2R6AG7wbtGwYaq3r5gqbVjQSE54fgQA5cuARtF41p3eAnsac2MJYQjaNJ4CA9vkX4w",
  "key13": "24AjiGp7PSbee7RLwG4MtGa5WkiXCE9TTZ3k3ASFQQpT9i4wvDW3BFSu2vATTk72wvqJPjbt6jmshVgBakeY5pdV",
  "key14": "4J7h3PA64yY9ar44SNzkc7c7EQYRntfmcjgF4qEjTTkXoLyaQ7pe2VSf66rdLCEHUKuanMrvdLqvnzmqehuG3GEH",
  "key15": "5iDD6J2oZqp5uNKwXNtpyyx496AfUpRyCqYnUNfHuxCxvLvCszBSnS6UryBiDskrn8N1GK85S3iub94wWhzupaNB",
  "key16": "7BNzLKfXvvjrQjxTg6TF397vkhp3NqHN8qDNAJCn9AL2cjLySd65cadbtHoz55Tjw2psJwMS5mnZPMEArdjX6Yz",
  "key17": "4ixuLGw3FtXir1FQhYK5wroK9URSAkcZSP12y82Fmsd9onpqNU1mYA2mDUsVV8hyJFkdziJLpvzSpjF7X6aycC4",
  "key18": "5uvvdHkM6dqnbtsw7vH86UNHiB4iTKWX5BUUecW41usSaUgbHdCuig3QEMeJ5eW1N4vnp8crZ8BHabypQti8pn3C",
  "key19": "uGL3pftvEEsTfUwSQ2g28y3VFAHtHqTKGWtFaWjcFtFzHq92DDUeTpqATCJ1orVNH25hGUqVEQxgr4XVAo88TUN",
  "key20": "5rpjBdgbkbTPRrRsiWrj8tz6QP7bCDRqJt8rWAbpYdHnJzi6c72f1DupVmGakUVA4upef11EL2vA22KVuZtyd1jZ",
  "key21": "38vKW2g8AWX6HUMhHMUnbMqGCuHuK6St74ofwiREJuc63jcgFfZdi9SUPtSy4LrMmvn87WdYmeZU77V1Bq1xkNSf",
  "key22": "sSBjzqzkrjk7ywyttQyyKj5ZwSLHbsydiCauN9FnLAE8Dm4Dfro9KfZDoQHNaTbu222NQUBZtJYtsAYrSjwFZ5f",
  "key23": "4Adoq8roVLhP3WvB6JaBdSVjBpTFdvt6t2Luu5nye4EtwpYBCQvh2njrKKebSeJQ6HbMM63fLZkwXyFveNMHx1Le",
  "key24": "4nukrTytoF8uakgKZMNcWs1sxFzDWc2iCByRGrDFvPQg6tSFGpiN5HLDPrAqXSjLooTjHsCnMdk4q67ydTdTn23V",
  "key25": "4Lz2M8coqyAzeVWZUVw3AhFEQA8VkX9r2BrPUftMqmWF1EvNrE8qKEgjnLxgqYk71PCzhLdU75jK44VzvC3xiWt",
  "key26": "47Zm1nuc47f1MFAZHzLZZjx3ZJNE1L3RaFiVXMqYsvXkAaBPjY2L5CYUQnva3gERTU2tMbfKkTc8BMfNtrSJ8Ykp",
  "key27": "24ohA1SYS3GK42kn1N7rt3TKpjfTufmiH72UhWvbLx4k6Sm4LcQVv39YCuznk9vKY36QLkrD6bJmcmMf5Zc2gqzL",
  "key28": "5EjRFu5FgypJh3CMa4eKyzyz761aigAegDRT9SYU1YsJRW63fGfSw3VgTuPfT88BYADxbQa19FxtkZDTbepSnTSx",
  "key29": "33PD3woWmSp21kFqM1ZGhbfmB58GzV4KXGFiwHpiFZ11m5YboB8cVC2svLNkBfr2WE6S1pAQq4mv8xpjEyh7X9GY",
  "key30": "24iQb3fSmTZtgg6bPZfnwziKFPXvxcryvrMSZH5GarzfmFd1WP5f98fS1QFgpGmGKaa5ojbiR1iqENrZQG5tXqGP",
  "key31": "4WT67DKW9MGvGWBq9VVZhVyi5Bdi2msvrcmz4YDykBe7bLwukKrsnLsjnAcvzM6BivkN68sUiwjWoixq21bLskxg",
  "key32": "2dGGCHojQbXD1C44JTTRAXXqkiRpfMWqBu4z427Mivm4s9ZUx6juKgW9ZjbrkU3rRb4GVpQu8cnJkHRbGCyppdZU",
  "key33": "3gUJEBDT9jap6TamUdQPfEX6JYjTP2YTFDR542xEzdRd88vzPiMHkKcqBgavghpiaw4FQmsBfffqX4ko2M6B6TTV",
  "key34": "4cHioQWUjCQxs9RrbPzJBUEDuwfbNGTxBydDtPB6k21xftviRu6hTufLJSqNVis289r8yFkvgQ2G8p1a6SxJpnHh",
  "key35": "4U46AJuLzKxYXFQtV5gyRKUcJPgs3iGUfG44wLCPeUNTcsUqC7LgkbjnXypJVRgNkbaH7tzznwHtrLhmBgXCEQNG",
  "key36": "3eYY5Mzan2urt67q8eYdLukpyV5bQeHgYUSa9YtLKHJxLqkiypRyK3JTzSN7DFnmJio2x3aBDNoPigkERXGjHpze",
  "key37": "2f3vodotzX3QJwNRhMkNETx9dcCYNCQ6UyBDH8AVGL9gaVPR4RTRdgNFRjZ9WABD47LXXboc6DzrqYSMrtZ8vbER",
  "key38": "3KHbhuvSFHaRwEyDJhoxk3PtuBZJAZY4MzahfqzsyriUQhLKxrUhhPMc94FxR8GXWRJgFa38eso2jkU3ncjqifEC",
  "key39": "2Cm4fssHD5Hq5RViTE6wAjDLz7Q31Sgc3QZDncqo3DEDBrK44naPac7jokBdUQkzk1j4rkWxufUdH5M9BVEiArFe",
  "key40": "2so2yZJahaWGRxmxSZVF3yqcLTm34jqRZxWBSQGk3FB1rNL4wQ89Kf7zDtoX9vbd3K4hiCCFqvwaU9vU8ytUGmtK",
  "key41": "5dy4iMKsQ8721x7Bz3czxMm2iX4RopXSgFF5PM3RedJcxtPBYc5jdq9rrpY3FmYgY569fhFcRTmSDGNaxr7TMbdf",
  "key42": "5f4ErEYmgNHLeqhUSMBfdEJS13aNjmv2e4vBpDZuWC6de5UmYgt1gisGSfT3dE92hq3bfkP9MAHEqaVfm285BwWr",
  "key43": "gdxQpickukQDBmABnh8K2yPJxEzJ7A5S8h5w5HCS93d28ScFAPPbDGDYXv4rhUhCPMD5AxjfpKxXxNjXCwFAtz9",
  "key44": "2HYWAYHLpdRmRq3218SjxdjbvZa6Tghwm8ZJfDviRgGpHc8fq1sBXM7YHAF87cv2Pw28JPiEWD4QEir7Qem8wdk6",
  "key45": "63BLNA1uGMzY8y4EZX9hmEiRwWqAxRSNmWaWrbccMo4HawZjPYgBmNczTb8G7diS8SV6p1wfVHGbApYY3vraeucb",
  "key46": "3zEEL1kFRaLyqmbpnHuih2mvMx6A3V82mnW6SYDs5sdjyDNWpdFWmGi2n8fwSBZ8SSeVcXRJKU39hwLFuitcQhFz",
  "key47": "5hBtzs55AVz5LJJbgAJCGdaU3eU3BJA4qTVXdDSvvD92WDd7AyvrpzZ7tqcqrZPGpDLnSedYuicnMhPYcAkwCGKN"
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
