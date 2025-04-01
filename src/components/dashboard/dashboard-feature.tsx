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
    "3AnXz2xrkH4FcZfXK1ptUPwAKgXiNX5Jw6pTYgTQMNkxygGADuQhyvfo7UR3j3bZhRUDpmirWzRsrMCNfCkEFx3B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vhTqMNix3BRoBWW3ycALpn1yHZe1UtAtsPHFzaFgKQwmrMR6ccC2DP1XGmsewdfPvoHe7TFX6Ye6Tt1ofBjUZQe",
  "key1": "rBE6MW965dKaqyeczcRQUJRgb2yEtVzYoeKoxqvrS4WSKBhCfoJVe3Esx8h2n7Fraq2FQpyT7wNuspaJnRCsJAs",
  "key2": "5pXiYdi6V24ePnrT6je4x5iuLVqqtAf3sGXwDCmNjgr8H8p1mGXwSRd6yUWxGh3v6Kuk7SxGJcCmTxghaTijXbCN",
  "key3": "5cQ36DxCXacvGwgLQ1cG3Y7nmR1dPswaA3G9XQVkmM3F3THF7yCtkDfektkxmWogKqsocy2YuHwvge2KrPGrcarH",
  "key4": "WEA7czHbsjFxvUYKRSBvhVNuUz7GNu1Wq215B3vbr3LHsgd7pyB57YvJ4ZJpNYYzaVGPcGaXcJyVmNuGWHow9Ys",
  "key5": "18g6DGXYXJbQzEdnW394g6AhYBANudzuUHTHCSXR6vKGuePvnt6E2o7Jsz6UfS6CjjLmfYXJ2vy9MFDbvdHfpbE",
  "key6": "2d3t6jwCXGL8pQzqCQ2UM8zerkUd4sxoaSn1eHaNn3NYUVnyWZMiUqYAViZ3kdCEJjDDWYUm8p4gdfbmWqaYs43U",
  "key7": "23fVNTy7EgdBWoKsq7bbFgJ3A29jzYtDXryAnmufL7pJSaZWmyX1z1TPjUAFTd3CjmqVBEZXn7J8SuPy4NKSNBAh",
  "key8": "5AtJpojKt2WrNDNN7G11ACdwhxxVZhNUmrWjR4aBS1HUduqvi78AD1k76qDFyDuW4JokSQXzPPULvuiyUNhiPXhG",
  "key9": "5ru8aNAm72NgA7uwBpgL4QxcMvV9kroJU1kXRmtp1fjYHbQhR3nzj6AsyFbcaCCUZnvDVj2HePWnQqstqjyABqMG",
  "key10": "5Yyj74ZWqDWn7NQA7Kyf5Kn3tnzkbCr4rnvwVxvStFDDPZ6bGgtm3Q9msLrY15DhaqLrTajKCdvox2gSJKCg4Lfn",
  "key11": "3Poo1ZdNvyXDgQJsvi1EjD8kchUyNnyXWbGtvCtfE4giaBWktUKZzJNukyBTthvbTvSxGgLKqszQapLSxS6Rimkf",
  "key12": "WJuhngKS4EarfEsq4LNX5XdeHHDd3F35FoPHxV3ixagHyCiGC87wWxzUtd76Jxot2cCQvZtvzR8wzYA9Avob7jW",
  "key13": "32ujq4F54WaNSNF6i77kgY3CxTrX1QdTSYZ7mi934mzaYEsUZTUZJxQXKc5UFp96ajw4WA5iq8ukFzRw2oeUMza5",
  "key14": "2T1gibYEw4kXocVTnPU1uk28NymYKLBAN4H6auaLs6eQkHCfJynUiMhUVT7P37CPsTtDTTUEjewvLP4KTnyD3ABU",
  "key15": "56cL3nneGBzxRfGMzy3Gou9qnp27547hoUNoxF7TNQtFYwdiXpteL6FoQN8xHTbfVzAK3xJYrHE74egozYgFRXdV",
  "key16": "38F61AbRBazfzanZ6khBXP5PYpLAixdk7PJnR2VyVuePK6aV6LNM8r3P2WScxXsnyWEfat6N2LfHuRSdRR5KB35R",
  "key17": "4jQZ4QwUaZQugknGBWf7ibEFFDNfMrJ1a8SFbDMnjpgygwLHcD6jRqXdfi1UquAybuuRDrvZQxLqMyfM6yJGbH8v",
  "key18": "29H1eVedmmB29BCNXVnsqxupx8tQBPzQFurhZAHFYv1ER5TNJVxZxd1KRHa4bKihzEYMYxZzVsNQJzVEy88b3uRA",
  "key19": "2s4W8UyHLTaEGLjaW88Hj1FiF7K7RwDPhRKST5DBjUsUTpuuFgBsZXNZH2cSPMnLTt6L459q5GXmwc3P25MoBBYF",
  "key20": "2eWDfVL9RjtycQYypEzpunbEBHfyYENN32PuVivhc4XmjokFA5dMhEhBwT7tQKB3mJvhJ834Tw6qfNvMdNLeaxzS",
  "key21": "33BDivkFpnVEzgMUqxQq514psqm1BeoWh4HB4mMHcB7YX3W1TSj9fpZzMnX7eBqdBJBnf693H4KLaqgLUfmth8Gb",
  "key22": "51wmDn1JMGKcqxNxfBKjFXwhruhQpSnWaMBTurTg4KMmxbyrzNPJz4DcAU4TAGvEnaSDVW3NaEnNZpwrq9y3pQN",
  "key23": "31TypjhKHWopDqbHs2hQK6xQo6F2xVX2HM1XbPKbutXBk2T8L17Zi2M81rvrtKwm8zoY9vzQGkGyNnHJ9kjWxUoq",
  "key24": "PFokmapp9RULLuwpdnv6Pz3dzt1epbEqBXf4GN2bvLTQdkpcuwa7Hx1Z48VvVPC2RQDSvyZD9AzF2wB8DWVEcNh",
  "key25": "4ydWY8Zm2TJHUCFrpAk1FjUZok5hAQgkHQKHXGzSHxAroqe236TK6uMx8fMTrHnMir3t9MCTLnxfb5LUxbowcvvg",
  "key26": "3oyVbM5mAeVQwqqxedQ3Z7noAepYA8sbojftnfoDpfhcQ4LVd91ibHPvnYj4ts8yCYNFv63jBnPCmiGkUj31R1N6",
  "key27": "29Se59WbRzUzR45YmkeKxphiwuYixovvVV1DNVwg72TSn4wVtkrHYB4xqR1AVtP44F6xyfvodAM7yE4SBETx1wft",
  "key28": "M3EKKdPjM35rnRPVbtrELbun2sEABuCTJxBKoT4zqW7RYrzv4aK8NXaCKKosLGu2qKokmXBQXDK3eAEVDVrtLF9",
  "key29": "2QmFH8umdQ7RQf1QHV7SVnFDq52agfzQn8LBj3YXYMv6uH8hyVhKErAUWpksj914r3SRgSWZqhujCm7xH4FaJBpF",
  "key30": "2BT7hu6AdmFpZwA5pTbKhaD7wZ3yRgvzHDWB9ntvk83tFzUc2vGcTDSunC5Qi6LYoJxBGCaTcxdfLqQgKuqMDipc",
  "key31": "3ugCbjPJrtjyiUVbwUBGLWW1RCckx13DV2uBtmVMkookR5LoLQDxuUoe6xURmkBKRjktjurYf9FwnWX647B7xNWs",
  "key32": "4GkQpzw9YGThpz8gVqgSGTSm8z4mog7G4cHT1TfobW4ZNGQ3an7N7dzKkvfiB64cVT1Dn3Lwq2hhqYpemv9PEwKM",
  "key33": "KXEkKKs32hQfq6yWTAyyq26NxABd9UKo54cjfbBGZx47pngBsG44vEvg4ToMd4xboswmUBUvBpPchBpaNtEbBKd",
  "key34": "2vCmBpDTY4ctLafNrH4427ykkHuwNT8tnMnsfxVsj695xp9VkzwCJ9UNjbQ8HhLbiMkieBfPynoM8yURbN6DAANq",
  "key35": "2k8pSwTXkKMpem7qLCvAiQmT6QBbtQ8YBLjR7BzsbRrYXULjHqgNw9AX5nggLJWRb3HBdMhuB4uyKGrp3bZP6zyu"
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
