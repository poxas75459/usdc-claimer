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
    "46erRiKZFGBafe2AUXBvAhDybMUGBaELrqnhsricegtqeHSzHChFXbuuEeaPAprSo6cRpgsATm6wXM8LaQQjNEUa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aTX8ae7A95bELYitnhpUcyzhcSRLp2Y5SCHZEWB2voA2e1Lxk2Vn8Js2eS6aSdtX92WpnSs1zv2pPuvujuCFRLN",
  "key1": "496r2LYHry8gM6ebQ9bVoUzbUxYau6gggwSjckmRgBsPLk5fJ7Uri6CnVXEqGiDxRY7ftdoi9CinwLyXGaan7jFb",
  "key2": "wFjWt84oWnyEQzbVYa6FGCKi1bsupMoYHzpczajRbao5djBprhtMeQj7B5h56fnRmyKbMLWiSi97QohxkYtawX8",
  "key3": "2gLXxqBfPsFj1AMdsQVrXF4fL1sFobaXeq9KGyvrtbQAZRGKtmrxNNeVF1qAGPkLkxgkiG7QFtskKwVQqPgaVXb8",
  "key4": "2s9HCuv8pF8wAhxz22hQLZj5YmmepeJdXfY4T41aRDwxtgu4JpzpAwTRrnk2wUJqs8ERisnoMYWtQ31Dym6mgK1k",
  "key5": "mAv8RxmDMx2Z6TsZPAb1H78JZ6dBZSDoJBgpXv5hCjyuBp4acwZcoAb3mJzUdFkSEun7SuMB7VusxFpp7BqWfMB",
  "key6": "4yNTEPfhm4nMAuK4M3PWT2xJS3P2qidYFfaGdTuhci3JtmDoorDLDJTbjoaH6WG5pnxMqKskiE3SjirUiSsDFCu7",
  "key7": "JWKojujJWCY3U92nDQheBmWqwn4tEUjNGJ6u6YEtEUdHhtxT9AB5fK1vqpogLm8CLLBNSwFS1t1K1LPzzjQKZjk",
  "key8": "3JBhxiwLmPZSJeMSZHVt9LvEhqGNP8hZ9ASD2PBBRmJPBx6JonfcAooxiUjhKSozKRaqesWE4RB3kYzUvACrm7X4",
  "key9": "38kJhXWsE5f7xUtUUPpsnC7BSSapNjDskk84iU48oDMdjjeyaW1RwQBsZXUFDay9Fku5XK5MiNyueBmGwK59nsU",
  "key10": "28DJYbaTkmc5xPr3qSBeT6qt1qDwqV7qgo7WrQ3pwA8ApVJ7eBaajcmz8a4B5SEN3Ce44jjS7qep1ESHdHTVd4nj",
  "key11": "ShbnEPFcf5XXPzuq68ZepLSVRhHFzb88iwAYK7TjYcVyD6LD2vw8gTMy3TuXkaLSSpsBdYviXStebDVQdtTrM8i",
  "key12": "4JUfyw5EKcTufYg41719jzA2bdrDGPsZzSTT1WTtc181gjQbVtL5iUknzX9ML3PHgCgRz3uz8a2goUxWbwM7KBkn",
  "key13": "3SzdBCmdGmLWcV2q1XRTnRGgm1LvHZZnpnzKpAZb1yUxNZ95ahYBxV69DXZfcZeUBNmNv6E4bAHk4arXnYhVPdQD",
  "key14": "mAQx6bJfzEuvbwBDEU6FAx8DLWet4CzCtXpHLkfSkvX9sE5EY8wmin8exKQ6BXmcDBoHNZGkZrcFv91kUF2zLTS",
  "key15": "65W2PSzMbEXTKRRwtdoDQyBGMSaXY4TPpc3hWjy2e1n5biMwHd35imd7Rr4abr5wF71UmjXsy9cbZH7tTArauNS1",
  "key16": "2giyNbT5fJsZh74PPMrdxPrQutf65BL7TJyML8nkxFCY5Ef4FUD5y4BBrmEzXAmTeGDMbg1xkRUr17u7vhMW6r5f",
  "key17": "3QWqamQk66Vbwh7odDfzXZyAHr6msP4jNrpEYKUUh2aDoSm826CP2XhMW3ta9sRMhYLWe96TyQ3ziBR9Atj3FHP1",
  "key18": "2snud9qTk8ymfdNhsZEtHbyMF1GU9xS1RgjNJGPtJ9LeWNpeSCAUkxwW4mVF7cW2MxQjrRPBVXpdvyKKuAda51iJ",
  "key19": "61xtJ2r5mkPRshP7KkX3EwN86R3182c9kt4b4G6XveXfRkWo6NsBEsnVka7Gg8CmKJAKBBELYMvcJh2HhgSJ8m5Z",
  "key20": "43d2gK8efKD4wun5kxW5oHJvwsx3DgKshgdyFWEz9P1ASBTTbbAFVdrXCgms26w615VwqGq6Z93RdXdZEd1EkSut",
  "key21": "y3Q9S4HoRZE2Er8j9z2MZ3LFMJAfrNWruDgj9R6UhaG16bgopoJnbUTJ2ngEKFh7wVXn9PPa85kqeE1bG1cQfoZ",
  "key22": "39FipzSgXszfZFwfx46uk9aSKTe3rmxhxcTJpvLGnzDERu6SFkuY5nhA1ahy1dfxBBbVUVgVTNR5sLswjcfiNi93",
  "key23": "34BX5jnRNU26hcy36zkTRivZt2Tazv6h2AS9T4gi9HK2CdWZUjJPGXtK8zePfgEivUYV1oD5H8vUAiNKYWU3MfKa",
  "key24": "3ejwziryUYJ52t4UZZkmjtWdXNYzAs3FBN7tCawZkdUMAjdDHGHjwXkcJ71L1mqKoJBVyxaNcoLzLorQSGztzTUA",
  "key25": "33LPTXaxj8mhYh3Eeh4taSpEEaEeWMfXGFEyQTJ4YZoat2mam46K5Tp8vFa9tmWqd9f67mpvz224SbWn4TQTyfMu",
  "key26": "4kHyQbEFgYdcZjX12JKLumumWAjtCFuyKn7Rr8f2FxSJZvvw3RHe1YbtmkPoiYZgNK3XHKMxqtdr2DpHTfZZkANr",
  "key27": "2gZH94mVtjG5R1pzWuosfjUTzgiTjUBC8V9b9zQY7GX3i6H8kdwMN25Gf9G2uksea4wvHjji58t5tE5ZyHSHhh78",
  "key28": "Et7kkU4o8Frhj96eHxcWFgM6HVzxVek2VuXwSKm7XoksLdDURFHYvNkZnELgaSk6dXkuKTVK6mPRJuZzCsxbUZy",
  "key29": "3EqEHYqKBtRzBZTybNqbEX7RKTK6jo2Sg4s7nj5EgW7dzdQhF3tfnQaUASLfATu8Zd3Xo6aLgviYzLX7Pm76gZVr",
  "key30": "4zv28gZ8A3kEj5CmRbxyAsAYgS2ADhXJNY9x1Qf9gWpBnJJtNWRm8SDx8N1xw7vBe6g6mS97pLccTApDsFMxFuDs",
  "key31": "KnZJM4FVE9uMWjbD3EHgBZ8boKzwZTuAsoASFzUJPi8wiNLou5fuSbECeEAkdL2h4g4gVw9iiFbEq2XcaQjH37W",
  "key32": "2kbAcwDYHPD2m1kbTFmjyeF59GErTQqVe7eSbJxB3ZFgB6HWZo47gpQbVHdDT7mSPUyLmrDuYZmXp38M6s3JKNAE",
  "key33": "ytXBobSvk5bcp1VEYsh2tSistnEWC1AKfjebxnompRuDdaGdz9S1kzpLcYkvTCKpUDdbjZmWTaZFRbi8uHEvKNH",
  "key34": "5yGyCiUfVVNcnWgp47mmqcqVUM3LQCEGxZDknJctpD2zzj2v87n165xWGWU2Yt4zhxPziKrDHyxS7NyrsJkebsc8",
  "key35": "64S9bbwrj5a8DPnUY445wh3Nu99rsEzeomV2Z4DyejuC4jx9j5WMLR5NEurkx2HNYyYsLxKDc83sxELnC2mHMDXz",
  "key36": "4t3MQYr4zg1DS3QKBXALQDbeXxbLPTAgLoBTeqDck21SC9gTkEwKCRPcNKtZk4WArzyrzWydrRPQ94odrPkdBNWK",
  "key37": "3vrHRDkskh7tiSYTpp34CrLyNjBqEc4QnLy6WQidZd1SzKSMaRUYynoiMt2K9srRHPNbgvekK3Hh5PcFie5XDGLu",
  "key38": "V13AavHVTXJyHRUPJ2hXkmSEDini9WXruhyDUHiXpPsJKjbGThnhhEDTmkpvU9FR736GjSsKyxQcV67CecP1ufm",
  "key39": "2Vygpaq7oBDW9Ejzh9JWZ3zyiu4zYfxw6YWnCJqygc78XVoc5s2f2fVUmGZx2dfAEjj9jXsmMZ1aX4qctmFQqTft",
  "key40": "2KcW7GpxdzMuasoUXPPs8FmnMPPKHPdqUy11sJGMz39zHtYDsFHP54evaLcs6uAyPxV1fVB57f4KpxS4x5UfoXAe"
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
