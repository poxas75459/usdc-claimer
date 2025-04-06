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
    "2tJ2d8d9cDHDPycs9yS41RuxL3XwQsnPh4WDi7NV5j19zQNdnhYtoWnqVEuvchwngThW17mvz3rWFfPYcgqorM2X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23F2nLPaxLVZprXzmLGHPPncR4D8LKUT9c7563Woi3mAtegTEwNychZBpnbyFvyk8uyuLCVE9mxWyvwt7upp1aH7",
  "key1": "aMQ7tHfFfNoT2HQYxBR8HS3Rf6FuxXH25HbG1cXPqb5AQpZhbvgbUJ9t44PjYAA6bFfZzTLrbMkLiZnXQ5o7Wi4",
  "key2": "555BxmF4wQMweNetvmMEti33X5ENMUtCew3U36U79z9SM3FTU3bpUxty5forZkwDfNzUqwKer45BhvGytwRLAmSy",
  "key3": "kYH9PRq9FvtsgCPwmJP4uhx21BUBbiUYdybpNPqsg8oDvBY1MoYRvrqAPxT5arRFBWvC7uFiUqvqvzNahVjSXCW",
  "key4": "2KJsnqcJmHfQsbx5Y5Z6KchhkEwWD5e7R3HbHGQw69PJmjm6zc5AUL92m3BcUdLjk6s6Dm11W4y7ZN6QBPXGBbEA",
  "key5": "3hTkkSPsngMnKd7HDjzsYHbrG9mETJ7tNT2qXvu7UxeL39h59xcZW23rp2NQg3eMDzeCTdrciMD3uts6ENV9Axrp",
  "key6": "5DUScpzirev2miz9TizfKBXXoioLTNTuEMu77iyztyoAUU1L1uTjt8yEdecFoZBf5eKUt41V8ub6Q4HQFT7JfNgZ",
  "key7": "2htf1JTeBzgYkGiUFetjUJzuwJsvM7amnydwTEssLp7XH8DAYt7y67P8zGwkBAiH4Y1gSCgGjxu1n3j8Nq2WnU1X",
  "key8": "3ScActBfgrNNA1qdKjdvNF5CKrtz2LVhW6JQcPyEr2gQEGGfoEqkFCcKPXvuMoMn85j3ciyepR3k1y9EPkT5p23i",
  "key9": "4iwvPAjRS5iVhxfwaJxNdFGH6Hs7zsZPRjvs82LSHhdp1qqK3x2nST1teF5n9FcvoRmnCVkmCRJmrqk1ktTPmUJx",
  "key10": "3mfPrFT4XZcUxiywTkuobPLgt7jtNof1v2bSLi1oiseyP2jb49UbadGbPLsAP7nFo9CQnu7HVTxoXvdzuZJ8oAp",
  "key11": "utsPPcBePpAkAoD1SS4fgViwvLnMLnR79dVS5UrK7y2pE3NPGsTSWD3r81g4TzcqDV2etEmvJgv88Hzaav132jJ",
  "key12": "5mYU7eCVzUPhM4EzbUut3Psf5NqMkMMdFXLNGYUgFGYYHnwaxaqd3ppZAf123CF3TmyWPCLhhswPzvyYTbE86NgT",
  "key13": "4uqKXZDVFEEcJZwajpbN6P5w3wiNjuwZvaDLyfJDtNnRg2YFgbs69hW9zFP1eZhCoxWDNnhzZ6banEUwQyZBZ7DA",
  "key14": "pPdoUG8nZhhjpQDrUyNC27Y5PfpbbvnUsjSfVbHi6jbi4MYiy8EdDcVyc9kWJAHTzzuxcH83jLyMftjhZuJdNko",
  "key15": "5DvgTmA6ewvWNhdf2hGZxbGxfmCQCqgjUka9mTyCtZJw49tvsC6vJ976nh6xmAbJUDkwrceczcJbUagqtafEZtor",
  "key16": "3RpkvUS9CQZYrWUe8DhGwsxBbSvc59Q3e6SsNbS1WYA7YM7YVSvn7a5zXUpQkzrNp22e4PiWuLZdxL7REGxB6onD",
  "key17": "2HqKMTWf2tK6Kpb8R32jHFW4udT4kEqr3Ug6Ycjprpwf6v8W61iV73gft8yPKZ1LtzWtFWYy2ysnKHuQe3zt4NpM",
  "key18": "3AcjaS1iPugQQX4YZJtA157BvMMxYJMCdDCT95DqFrEXdsEa6wSnZVa3NoWhHhNMDsKirnDMSdVTdGqhHYdUvzKm",
  "key19": "5mPPxZRRqZb4viiLztSBoMQ3nNbiSdpUniBJmn5Q3BPTrc7YtgRgtc2FaNXxSJyUmhnGeg7hsCMRDYEYASbxubSt",
  "key20": "5Fo36sWGEpGfReVrudGekuc2gQPZot3zrPNM5rAkGUr8uXpZ4QJcrBaFnvdUYmRVyzGfciWqrnmbgrfJsUmKu6vU",
  "key21": "3D8rZmpuPVTcCiK5xg77eBy9643z3HUeUAN9k6bZdPBW23v3kBdjV9FRpwYAw6KSQoYHBmToDYxEAsaXvtdoX2P9",
  "key22": "219xHdvxqWwpQUKjLNbwgJKfnQXZWykQS1igRf5bXkaipLxFDY2RqUaqogM7bamHPxeEq8bgdtMgt8vCyvAjLPsC",
  "key23": "kTUDx7GweQyKnDYds4nN6jMxeUty8SFqEhunS5L1UjMpuV8WULxHWzL3qJsDN32zRCyf3hpNucLKgMuVM6gxs6w",
  "key24": "2GhjbPg24jMpfYprd9dmUmvKbxJ5gKgTcRdgc9AXApqAgb4N6Do4KqtmzaUKrSPZ3hWgq2h6NZT6et5jttYwjehv",
  "key25": "4pB6d6Euyxe3bPad3z65RmxeNaBGcMRVUKhTap6WCouupYpfPSYjfRJ42LK4MR6UfbJWCkbYc7YkhGais5j7Y2XZ",
  "key26": "42UL8omifznaFTqiAwJtMJCjeYYjvBGGRRM7bf5rix7JyPTqEj3J3yfk9CyZPcA9ZUKf3MqLPXwTSHSpDvT7hwPN",
  "key27": "3ro6ittFcrVVcdAM15e5jk5rcTSVnT1s2QvHuxN2V4gzyn9V7z8LdYhHK1BNNno3uDEWkgtzPYbEg6XtxyqC5u41",
  "key28": "2zP9WoVMCud4Fu3htdpaUg3HXmuJ7hMHoBeBZgWJvQCYNZnMW425mVxxaMdPhz5BotRReifrTyV3mY592ZjgzSa3",
  "key29": "2th1eiP9ABtoN9gzT8R7B1VW7Lh2idzNNTadPWXpFAfV3NsNttFD3CrP6GfBh8yFHPYRN4xy4TDeSyw8dwC3i2ja",
  "key30": "32E7AonPgbW11nPzVZxdzKibUWV1LqzYQ1kUAm5RQCFoJNcSJ2KbTesycsty6WG1BHbFgHGpzDzCfGHdDed4ZKxQ",
  "key31": "3RpyfNqEzSREGPTTATcGCoqsxzoDcERcMpc3zzjX7JT7mqezkFBxZxV2sdAVGLD3Y6J3TjmR8X6kLbwouqZJGm65",
  "key32": "36wiiXK9TeZQT67Cy4BsX1jCahCHdPY8dcYfbxjCFctNvnFy4wZzRc2wZpjnmaoMU1FRUtxMnm1FzygAxEtGg49h",
  "key33": "2uJEh3DVu57pWcadeSuec6QAZevNh3fHnY1ab9etMwQPu9tGBFHMKVuyjzXZiPEoke4kenzuNVFEeL2nBNEYJvJV",
  "key34": "2ivLpSygtveiUb4SqAxnX2QPxfyVB6RkYPcWBZ739sCYvySshyZckz3NutsNif5r1e14MHdT5MWxW16VZGWZ85t6",
  "key35": "5VqiHpEoZRPxm2XM8kn8dtdvcBiQqVxD4yjfeFmm9twrMxxc9hUMUBRHXoHMwjTADT9H5BVKojtomE4MHTUxNrow",
  "key36": "JjnEwEqySe4VHXtuVRP29ThaWbknqTrDPEZb1oNaetxQGiqL3p7fQZN6AnNX217qu1x3x6N1fU2dEsxhfx238mG",
  "key37": "2uhf5BX8t82X5g5TdxEf7qew6i8zWPaiJQyPYFMMMuMt2wUdA9rwMDw5gmTHrtck9JT1pm7q185eC6ECt6RfxSFa",
  "key38": "fs22ZRhKK7hEbCYKVS49N8xyyvNg3L4LQAuMhGSQPKvrtHnavrKTypdi9TU9i3hGmVLitWjLdPmrSUeDzGpFpAJ",
  "key39": "2jrh1w2RJfmsV9bn83qgaM3ZveDubUCiiTy2UF7jHy5oYjL8j4B7TzU3YZFshDPfiDqBJQhEnWm7M6EFysMCEb4U",
  "key40": "5tiuMpA28JDRJZoh1cyqaqPy6BA1dHiTZWaxznTi4vWPVV3yXCRdy1nezrXpofQgZ3eUmKLDfjvkyPSS7Veuc1HL",
  "key41": "66Y18kA141R17WeXGjxzcg2je3kyPufnmt1miPcXiDSVWS7s1BsjrZjr6MqEijcJqjX6Axc2LrUHUQQ4k84tD8Ed",
  "key42": "3LT3XQLu5EApVocP5qYbZFHHU4y6Sy7N411rtgwq8KMCHi83qu7Rw62Juvo4eqxXXyhJ78rNuQyCMGjFUPBkvbaU"
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
