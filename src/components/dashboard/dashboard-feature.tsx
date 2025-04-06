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
    "4ZDxXWH46sctBegGe8dbQdFz2NFfBB6NUQbss72dHYxqo4zEDRvvoGU64oWzLmKrki1WVpnj2nZ6AE51cm9Z5Ehi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kxmu6dJrnTwYEFaKeNMS1154LhqBQ5Ep16yV9iYHuv7zEXgLh5NDCgNgkajm6RWithwTsSerqimF523kLQ5YX98",
  "key1": "ThrBmpJNqbKf5Jm9134hBSj9PYUdX7xgY2V84ZaiHsXRGwS1H1aWPC5yJQjwAtVqc5XJEYFJD4N3pmAXspgfmCH",
  "key2": "3VEEQHQxuJGoNBGHexiH8vF9RA6ZVNA55cAfXHFk8fYW4R9J924g1KFGNwhjdGdT3nDbXzVgzY3bX8fXLnPv4hKN",
  "key3": "5iaDkVUJRNvM5t76ViWYw1XrXLcmhj3EZPvTaLdwqYUEUExawJ3VbgaoBqbRcXJaRh7E24V1CdK8dwmU2uCWxRuQ",
  "key4": "5YWSPeC1b15FF24MuWq59oRkYxwhW32gxELgG7i3Dt9SNWyyEYn2cLF5Ko7XigNbuUVfAiAvtimvS917rLs6UVDm",
  "key5": "4wpmBWnZmDUELPBT7w2nRv44x8K9iz6jU13NB4Z7i5qbHPFYeb6HyMDz9ELo8qNrUdwJRid3UjMUnUevygvAeLAb",
  "key6": "2BUK3Y3dTWLUzDSeLYm87jt5WCGAcbc9q8ok6QR7AHRHa8bmSAb8fDq7qpsmEssNR8PAxZFRnEsiTayiVnm69Yrc",
  "key7": "3zemaYjJNu9zSnE5wSLfEndXU8DjVWfvTkySUsTCGbFZCxtXVKDD7bKhMxqbMokM4GcxWFRgpU8NUv1iFf7NY3Uz",
  "key8": "yv6qwfzJfpMHVeo3vYFhNiKWrNEUELMQXTbXE58gVvv26MS8qQjD2XmC9icuchnNPvYcuRL9ge4cp5QoAEhfby9",
  "key9": "5Tz1x41hvuWV2X8GUmk1gPT2yyVcTvCruHfx7FLef9CKJziq1QvaFEAT9yaCmxBctLWjbrTqeAMoBtJt6zJa5SYK",
  "key10": "5v5Bm9bEGVqrLeUXLbiGwMjGqLJMufWD3ViL7G8C7ccxaQr2e1jddN6UEbdV7aNcSpKqEUAYL7JvXPpTo9arFsfG",
  "key11": "4fTXQvyLc5wDkELknmahaLXyPJVoLXL347gDtSdGj1K4UnuXz3TxbdQqakuFzMo1Lu9NqjbHbKus47DvL8cZhG1i",
  "key12": "fM1C2KSfj8kgGCNLdrpvMJXhReUuZc9aEHMKzRWSizKE69mgeKghYYrdncBfXWL7xePjusK3ANwN2twVtF8uYnh",
  "key13": "5BkqHoAwdxWJUXvuSKhDyidxCvYczCAUFv8CzXmcm5ghy7VVN6w6GQ8qZQZP4hpB2BM2aAor6Nmvj9TRX46tmdDZ",
  "key14": "3qq7RbFJVtzQ1K8jhPruFYcwwB4UA4UTUA4jSkBSqxRXEQ2FNPXt9vPUmYXTqVkyDTSvxtGskSUFADKWXtbUfQet",
  "key15": "2whv21CfFeuwfrn8zoJsciLYEEVrfdpiEAqP8i5LXBKbwnbaYQwW82LipdN2rZzLcSaMBahiENQbJJHKci19jBgW",
  "key16": "3N5CWRaUqHH2BS8Y7JX9HrfSq8ZMaBXU9jJWPF23A6Fi4sfaRkgxnikLvW98XgRKgoY7EeCn1rEPrqJgPQfxqgpU",
  "key17": "2JQYf9fgeRHoPGKaUz7ANsM4BSzNqfrmA6fAkW86XAbF2VKZV5MeV81CnbXVh5SdGCiChFf7F8hbeFGvWYYjSa6b",
  "key18": "DQpam2Kv4AMvRcY5R1qtFU1Y6cGTHB3zfusqf2uBV4RSttmcMX8psWK7XK1zWSkE4uPJ9trzJuf7RJAznVYDPQK",
  "key19": "41ooFBTFbpQH4Q3HYEqYhkBWiMJwxP6eJj3qcS5e3jHmtAcrSsU5zdo3fBYX4Hbe9qsxsFYSWde3P8U8wyJo6Vnr",
  "key20": "45Lt8fALXopn3CdYzKb6m1KqtP9NnBWzCHUezKz1yzuMBzB4cuXtm8bT8i1SZRtML8fPZHcX2EsH7UXX93b8c6sy",
  "key21": "3duv3mGSaCBZ69qEqoXhqokpnQ8LWDGPe2G3vBX5NorNKCfFgX3NsAQZEXURrroRyqirjY5aZ8FBN5mNcnudy3q7",
  "key22": "3oc3Qjj1r9B6H1SJGahirRzXtxMtnisUDZcYF4aoDmnajNN6h7M6N4kwhJzDcXXoxcRBuDihZgfP3xwaWcz89tSd",
  "key23": "4z64VJsv1grjGkJb5prw2FytR4b6VYnmP6hJYHUFzsn2kgEAicuqp4R53TY5S59BgZD3C9ZzbyDtLddhq95p9MN3",
  "key24": "5hLtkkQtHgw3r47hNrF9q4Tnbw6Ce8mugmD7NYE7vyeMjTgx71uhVhJV2KojAEc7idyVDkN3ppSuWECJVPwajsfc",
  "key25": "1nZh5rdxyRP1NsRHsCbBjiBzQ36CkmmZEEFKFUjKWRYamXVkipSwZZnXS6VUbdSbzJAhLfiUTkxhPDhZMCefYZt",
  "key26": "5nnNU6bsmQhEvnbPzWStoYsiT4eTHKWbb4J7SU22KunRvRkCiUqLvEQMMsUZYb8zSXDx1d2JLY5BBGGqPx6urkhg",
  "key27": "3dcPkfeARDYR2GWMaMaZV96wq88CQBtadW4Cue7wNJo4JjrDDp3mWzBxM6QJ8wV5D2a9sbsX9Z4wgZiMD5KcJe9U",
  "key28": "3xJAT1G5USuJ3M9wpCNPFTT5mnD5mLF2V8zhZ1E9daPN3DPmxNQU2M9nWu117YvyjyYXG4ERpBDgc9emoMponGDc",
  "key29": "Wek2YfQgEY3Ck6XieM4yjSc8U9RsEG7srudFeVwP5UkySM8EFLRw5Rxm8S9cfNgbsQazMPo57zmbcJvStFhoh42",
  "key30": "3hD36dbiixzMBAgJhaBHQpgFdpnYW3GNwEFhT5qSM2WaiHd7Cvvr9E7uNV8tuwYxtRgLLn2pRYBekAK6EgGkESKQ",
  "key31": "idzPbiq7CueH3cCsa36dHz1UHdY8jaZPZXhXQvpxoBrG9KXxEU7hEXk1BqqeLU1CD37qB7yThnve9hEvSZMWNNH"
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
