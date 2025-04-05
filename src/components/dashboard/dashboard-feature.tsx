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
    "eBTMvTNtztw71KpH66BKm6CL88Bonk72Jd7hNYkxx52ZrWhQsWjsi26L2VdS39LLS8P7g8QFJDkkHgb1C5B7qKK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GvGBgf4Kopdy1b2MYK3pnHxCgFR3624DDwzf5NMKoD3g3uahCTkd6saaTU7wNULPovxsauYaGhzwxAuxX7wF4iD",
  "key1": "5M7tT78AmBsPx8Lb9zWk8Uyr4w3kUXUcqYXzB5GrVJhxgCdjWUBqognDzuJNGMRujdwZZeHXni6wuegfNJQbTaN6",
  "key2": "2bJLYNqY2fP6UD2iAmYqzZ1fWa8KVKh25aUaPdBdf2MaHGH19LDFjNCWRnpxygWLp9bY7EYfUpC6fE8WqaCgdETx",
  "key3": "2S56vvYkBp2ZetGXPwfd7WLebX7fiApnr132eL6zwcM9WJ6JUyA1XVjZKK6m5S3hmcS1RGt1gKfZtLECYycDk8nv",
  "key4": "5huMAZU2hrwNiHkVei8ea89xDBP8zc83W73rspSqSTWEy1ux2cLqmJxWhpeWoawgGYxvM2UySHahCRop2FpsWNuT",
  "key5": "4cB8LbPs7StBVBVvsADHqnASwmenK3KdXHBEiJ8uKYVw71DZcqSWtqrikaUKUQc42pWBdUqjJ3xYjrZdpjEQYTdN",
  "key6": "4uP3SRxCV5wX3TgDeMnWry4V6eQnoYkWta69TtQPrPxBvVrUjyLE5j2GPsDt5y1PRzXm5cNgof8TdiWm2977aST",
  "key7": "2QYcJgDVsYhfcHwxLD8hkEi2fRGTRXUHoPcVyDVbdrattpBM4K37mzxtbFWyKXEimdAsaEBHBZhAhKmwVhmUfuB3",
  "key8": "2AUr8svW2tRcy5QtHZxhnbPEUWh5qBR7ETtmS7VFactwko99uZj63ngSGW4PUVqLQffYJaTPqY4ewWYHTC78AygL",
  "key9": "5c42Es13QaBQRdeLQDtb37ALyGvGGR3Jj9Cbva1GFHEW7b9vGqw6tvrrDHi8NErUKWmS4p5AD9u18YABGFvR7Fp8",
  "key10": "3veYeBEXZXEGJoYDFxeMKYKd6qNiaJK2qC31Fyn9XK2NeDNSSi4NTLtMr9JgSZ4oEUam9PnC9KxWcWtZ3Cud1LVU",
  "key11": "52CaP7JsyxKMD4ium4kVLvC5uQ4GZKJNrZrtMeUjKVSKLjJ4U5gLWabmggcs4Lr8V8uMvbHPNWeucBdgseLEZELN",
  "key12": "5PBtVpwsbUHxUDFzinia3QNPb49gkUqmXjad5pYyCKCtZy1mBYHRrHk33pJeu7qD9z9UGVZoVQn3nqXHm9ro5ZUM",
  "key13": "5DLubioM1HWyDdtobec7MR6rXZXdA2EYgry3QtzfFko7DrFRyJkE5NTHRRiBPB2F8m7jodYVsg3R48cTwNQTbddf",
  "key14": "5gwbW71Ae9iU2kQLksMw9Qxvj4Nk3TGM8iYhzDkqCDJSLeD98pGpr5famzxr73qq3YeknxSBCoeevwwo69gssSgC",
  "key15": "5YMiyMabubaAcxNu6FNAjSucUXJKHCuTScyegur8Uxs8Cy6P5qnT4fyewCnMCnA1E8zX5MX38aPM5cVnUWMvtAVd",
  "key16": "5qBR11XcBQ2oXh6JdLscUuwKW2JbggBj8pHauwm3UbfV4uWhT2eD4Bvb2cef21tspvNYgU3crmbcxG5XDWTtGgu6",
  "key17": "5ufveeaGmsCbt5CCoEroXS666RsH2dz3YJyewBcK5fKPrYxGue1dH73Am253eKaq7LUbaKp2RASiypRCvECdQPn7",
  "key18": "4Pt7P8Qrn3qC1FB2MtiThzSTrXYj5FYY17XV2GQdgcs1AtS3P54T1jJcrjm4caCDwtRUdXujk9zMnDWpvzTezxvh",
  "key19": "3nfXjJJEgToNwydtoEZx1pTeZtHomqvhzAqsyWYH9zT5QfKjkjXcfpLzDFpJV4WDVCPFZyeMZ41sDY4uD4NjdCKk",
  "key20": "4qYBPQvnXeQs6VHiqm6HprM8PFechBX9SPGzka97bVYZ1juE6bfUbLH4eKVbnxkuWcAcaH5WLvAaxMqnkvtk449Z",
  "key21": "3avXLrSXLckC2kSdRUZsYrLtA1L7Qm3qQkqGDwKJxmkfhvLS8Po543YqEszs1Q5DUa2dPHeMTLNVs8e9oDLQY2eK",
  "key22": "2BsPCMAcVYakytKzoxa5BEJgRVnYdei9NSrYfXKYEdcUFz6XhoZHPFybtGVYNS5kipgf8Wr2hDofCPUxeA2nEA4n",
  "key23": "WUQCwM7gQNsMeKDdJJtWq1Xv3eoVRT2XSss3kLjBGgr9pi6A3NMBjLv2gUj9kL3fkfrVy3Ujk6uKJRdrJrGee6Q",
  "key24": "3ajKgvW6PrRvT6ZvH5syomSXYLDZ43uGv777Dh62EHYaaQ3viSAiR6nhbLCTWVWFbi481DxKNTMv2daAsPJg3M76",
  "key25": "2NyHpcatrvJWv6GMzzgsviCAETwBPxcX2E24TQBvHM7R7xwishiQEJnQN9xWUaASxpa3RA7c4NbK95K4xCmrDBXw",
  "key26": "4LvwH4tdni1d9FzBj2oEGeF8LqhLXnrjRo2Te8grobF6fxfmS2dwDnifDU5SfA4B5dqyrAGFYSxFnMvz9ZW3wvxH",
  "key27": "5fkUNCe29ntBemkAKGAUZX2pR6Gebdzq5AME8x8LmAbWU3UJHvv1X92MzEwxfeJ39yPUtPKh16YmT6ixhzpMuu9r",
  "key28": "AHFCmCBaTb3U2GvGZUCfHYBeit3UwCYyodzTK4xiMVMxtnMpJLQusJk5Rfek2qzx5obX89m6ibKSWhTQBkLtVRT",
  "key29": "4qUAmrd7kMKvcGDVtipCjNiT6CALbLxMz2wJbXw3dK7TL2oBdScGoYWyvj74Uia3vqAQJtX4JU5x59dJCVzJ7v3Q",
  "key30": "67ERACpaF4JHzJDXTes4S1CXY4imUKH4UAsrQZZh1QyaEc4WfgNfaJYVZ29V2eD5vCn9uMP5xJq9QSyBsXe234MF",
  "key31": "4fmfdWoXfj6NA8xLrBEbZjGkYGdd9teQYXuJRzkaoZWtEzGX9NZRpfxzCa7hM7T5r8UuzCGnhFFGukZ3EgjWWixc",
  "key32": "2Mu7ycp1dFozxaxUdm5Kyvk5uVuuJ5fVYuBGeifbiEyhimoYWL6h1WmxQNHrKnzVJ8qHyAaRMemAdy2sf7p9uir",
  "key33": "3iLKQkY4fiMaF9xheMYExsyKpTef5psUjZ6qT2rHWpRREg2pC6yNwxqfcidpiyhwWyEQSnYG9GHQyE6x9nbtLpAu",
  "key34": "3x27ZRKiSMWcQCw4S7t5kn2MbFo5y3EskAmK9SzjfyRb3PzrBLchRMUTTojmReB7GDeKu7QXcsibwQxdAGj2n8Dj",
  "key35": "67UZn2HaGSQyews1Q5zfSV8JJXfrv8DbLQgBcGHPy8HenX6JRdsvFF3teV3tgDpzchHb5LHYoFoAMf3q3m8LMKsa",
  "key36": "2yATg59QEdp7JwJR5VwugGc14ipC5Jie5i7kWzBkoZ53PtFkdJnjHTG2NJ3niUupKjtq8iE4LpnWKrAh9YuFgeF7",
  "key37": "5vLCdudCxD7vygvtpMYzWvSm9D8AZP1X3mdt2GqfE6Egr8HDJntV33GFRad6EbQ6ahC8CEVfPxz669pCWPMfCQmg",
  "key38": "2i3KtMHDFzqV1DyMqoxNioisgYjmysyeAHjGS2KqRTk1XX6xnDpmhD155BPQM79oaVyvNwvaUopWpbwvayXKvZpF",
  "key39": "2GhfQUp8cXJZtNtiw2ukEpy1aodaYgWsFYsY57XK8fMcn6smasvWjbuWZMC68FHkQPxxtF5fEMRQ36LxrkS8ygLZ",
  "key40": "4k9b9pekbUbELZdeU6fFxhWLmbezX3cmKVNpLMTev2abdtYDdKuQf7aBZSZwwsBkwFadaDEcurHu6SiYUq3tbGHB"
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
