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
    "3SCRH89i34hNc9Z5RyXzGkGFcnsAXQu6fyB6wSeToqnhbbuuRnLYfYnFXk5jwWmeH1aA29FB3zbxhLPKP984V1GU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q9iA1BbUukuFiW631fWN9QdQJDcCaxSqoKQBgbrB1aeMeisPLBjU9o9KBWyjNFxj37e17vZvVzxxbbRZfh7sGnT",
  "key1": "61kZkJqRz4JcCuWKYXewxi2V7AtHejwC27kVe8qFbuVFXBTtEDXRd6Kgv4xdinMXuK4xRJwRYBK4EuqFkmLEXzkk",
  "key2": "2LJFxvKD9bNkpGtdQa9bW71BzGJYPf9J7GzHNcEiEmx7CR3VoNezEAtVxGfrxUseaJFki3fyMDS9fBRcUBYwjjXU",
  "key3": "5FpvcAyZp9zUf9dtYBKk2nv9s8ZVcnbUt4uFZ97c89UKmdQ6rk3TJkrnc2tYryvvQ9hZn17afRsSYeHq1CifczkP",
  "key4": "3zJB8JtLt7mdRyemyUhL2ofzixWCghxinhL37xkfX1RHn8LUpqEtpd8wTg6m3UbELADYzqxbgu7wCx71fcaRDF6q",
  "key5": "5mfnsxyWmaugTpjrFRMn6GhNbV68xpQbeCstpKPmYCsDRtiBtWk55jPjt4ZgX598SBTeNNZ9jfBdo9p4Y1hFbv9r",
  "key6": "g7Qq6itYRgUiF5hhHCGnusn4rj5D4PFaftkfRhpjGVR9dG1qDMvnM13JafHiFKB9c6wac6yDeNyzM5vwbx6g4Ts",
  "key7": "5EdRHznXLGFeYpe42mAWzH4Aza3GKb9Lv3VMaEdc45y2KTyruB3PVn98Q6h6Uk89Cb1eBScRkjpCoVQAZLNMCAzG",
  "key8": "25ozCFArLBE65yeXhfATAEmDhTy5YpkUnShiHVS1zTHdndpmj9WqeQxBr3U9pNipu39SFDkkeZxA95RovVRkSCQe",
  "key9": "4YRYR4b5wDvTt2zvJiEwbZLLAT4VHruFNkP5LQa2UamWKGErZ4Zf497ERhDLwVxX9YGDvw1bAQdFRAsz8888x94g",
  "key10": "3PSBHT5v3o2owYvwddN7Qv2BNm13rLmboininXsLNeVgwi1b12Euc6fawnNwiRV7Tpd6vS1VzJ9YquGjrVzoRAzv",
  "key11": "32QDBBSLXtfm84v8tFDCi9BJrZq22qn3Lf6AgBS5bNydaX8u366vUNEDJFHBZd6TYX1ZUx6TzPTCcyau3aruXF95",
  "key12": "Af2c5Nwo5su47fgUiAQsehJQriZpTRqzgxTB67BrwcRSd8fK7NSMbNYksFEYg4tLruotGd7jF11nykNhtydB8vB",
  "key13": "2d2zqve7QW9JzckSbxPkExzrTBr9XjgTAuZKc7TuyRmYZVQo6GLwkMDfQ7yZ7TLtNaFsvtQQ8AVoV9XNDdJSGoqK",
  "key14": "uL7oQUkAaZmBeT4v6xaskYKcz2gfe4kHHUTVUWeWLdGiwMYSde6v4nSMNefj4pdVs2y7LQePV5ir1mJRRifQ86S",
  "key15": "62mhzw9Sist58nVnV8uSNp1n17xYPqcUdGQULPm5iTbk5C2ccnXZGBeZAm175QF9qT92QRRgXeXMrpM4oGutzAKG",
  "key16": "2XjtYGZxgnY4dn1cFg4sWtsrfy62RK6W6sB8x533yXHdbufVeYnajvqkKi46Qd7G9dRSUcb1b8VGcEtvgkabzbCK",
  "key17": "3gqE6GqudQKBJX4uwWRdKoNfjeTpxP9TEnaMkfsvrLEYexc6cipAxPTWpxkv6SPnRE9naF5RJD7oSWb1U31MHc78",
  "key18": "SaJUS7iqNxkvUMBt1fcefUvLt1RRaGeNoypTPtcQ8yJMJSpqFwKLLjvUCAYPbLHewG5qD5jqkvfAm6fJN9duz93",
  "key19": "nVEeSEs34GA2JgpVZWKT97xCUMdY29r9GHVaqxsGt6e879HMvSxHLBBTv9N7mNCCu4xo1gZdL95qcYR5uh9gd4n",
  "key20": "4wKtYBL2Lq7nesDaC4WArKEJ79kexpkWASUy9hAHWgDjDNhhrKvdUojEKE9ATxjetcB6HmKJ3BZ6KWPWnTxyfk8q",
  "key21": "HHtLN7xiT7Y6EB3tQevsJTYx3NKAcig1dpEgL3Jjt8dAk2XE73i5pyiw6m1ThBVRL158eDhRKFCT49H8AkAsKtS",
  "key22": "eEi3txE7B9HbdVSRyoaC1b94Gn2LA8CvyAfcnF3bUv5RoPBocj9uP8wkY7zhApQBkyDu8BR6qpCG3BszY2Gsr1C",
  "key23": "8rNCKKVvvWBKNHoooMHGCHgnJsTr9WwX2tyoyijkgrZh6MSkf1ER256FDccNyNCgJGsgah2cLBMegqet7PctUNE",
  "key24": "Nj5VEapWfSFF6qVKvbSnc8eiNVxBtAdgSAu52eotriBSinQSGxYDmwZm52Hfk8LKxECT5yt4MeoDpPTcsJK3cEs",
  "key25": "5ke6vrWCuGv5H3t8wB73gYNaitRLYoSp9jjTNVqeLDoaeZJSq9wFvXjeMgdJdN2BipTbeRSMRRCA4yuRbNeGj8Lx",
  "key26": "5oro2oTrkkhbsAYUSrDLT7mjuUX2sN8Y8HmJEpRcKMourqbWZ5L4qtUmA4bvQN643ssGpqxP64ukQAMZsm2Ag2X",
  "key27": "2MzkkKTfBY7UteiuewSEsCgXbbJBjct56A7C8puh3NwS7iuiB9kkdcqBAfMt6AojMn9r6cQFU6LyfZJbN3E64tkc",
  "key28": "4LWsooAGLPPkNkna6WMLYYLUW8PHhYEJgB5AnoJ6TvJ5A3HDYeuthRgLDfzM73N4yWEDyM7A7Hxh5SaYgBvBvfuL",
  "key29": "Sksk9msa4mgvPxGtrapVscZMMjD9UCBAzkC7A3PaUzqpaiopGyRrao851P8uCk4szRM3DeytSoscTcVeUnGoase",
  "key30": "5wHpqxZ91EJMrJMFUAwRVVZVSAsVv9j9zc7fPdtZUh1NPBickJHUxCyUtia6LVQK7D6d8n9aLmAxcCifopyrQELT",
  "key31": "4p23pUcXwtB1BWDgwDt1TYFvbHZ2zgE4FyeCnSVKFtU1MCSH5wrysQ8CaUbxxk5KzQPupGeErJXqEQurrbysEfwZ",
  "key32": "4SmMHVdtJ7u2jkMXjS2Mjtwq94uhnQNFim2EKpBy7jGTQZpSEmZfdoFvK9DAMVPCGwKmwqUcYR25FUCrJp98z19f",
  "key33": "2GukwxPcUhwuhKeNWM19ZcbhRA2iDxLRK3WYexyA4T7HHcYAkw89Z3j5HuYmt1py8DpVG1hXzks3ZSB4XPDwh5T8",
  "key34": "28eiJ1dcddzofqftNBX4iBNEohanB1BL3UsbFz76XrP4KEHRsJTYMQfJfcZ4dqbPfHrRKnM9CmR1qKW4yzwPhiZV",
  "key35": "3V3s8GqkkLBNAwFDGxrLQxxiWMvhcvYtnke8NQwmpUDbSHoeV83whJb93tzb3RB7P6gmLTm9rSfYsy9AMEf8VbNL",
  "key36": "5JULup14TbiFGetahjQ1tQXaDeJpWPtA7EZNrJTLk1tLskYJ5wvvkHWbCYyRwfBiScBsavYE29uYwHEVcKDcPLHY",
  "key37": "2Qx53XUU5M64s9SEsbVqYUvjF6WnxzwkKoF7aNxgHZKLNGc3ZdDDgSYKvH6vz756EvkttpQpLGikbULu1huZAcQn",
  "key38": "4VgxRvBPvqxGrYx54SjGksuAhYwixtiBtkqYeRExLQoaDMxG5Te9hzqmpFGvqcSagvwtTQPY6hfZuTP9xgBAqG4V",
  "key39": "5qFXLvtKUbbSbdmSG6w41JvvKECwVUicxxpHoJF8K6s9MpYGa5GRGAL6c6vnMgRRKs7dqHe3Gs4Lou4BcseSPnS",
  "key40": "4NA6ys6CWGW7184D9268Vz8j4oJi2p8iys2DJNg1eVrNyg3roPnrrDerj6g9nTg4aQ25eKeu5WLKdRRURpHpJdrN",
  "key41": "KLXE2DRMVZUY9RS9VduGmepTHFRsHjKQfsGhKRbgJMzWCPcgV2HB4cZS7DfRD9fcmkypHHVVP9dHaeGuXhDu3YG",
  "key42": "3NUca5Q9fzg24FcWmBRrE1tmWngWCXEdz7x75tjThXthJG38s2sjE134FrPpa3Zz2VgwJkAbXxmDfWoSzN66iaYT",
  "key43": "5ENcCXRQNStUcdf1JejC4WJVz3aGYEc8nAUzxrThX7WF23w6nm4WoGtAX6F1WZ64DGFh653U8BWyL9rWmkzDKwYU"
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
