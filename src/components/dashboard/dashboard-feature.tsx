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
    "58vpQhYJY3pzSQc29LBdeMxbqV6Uuj99qEP2DbSRkykCucomXzSUWa1L6qjLKFDyntURmYsM2yipwjHRmNa4AAQu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y3sAqVZdGXqj6FvtT6tkMYZPESGg7EzXRwxvYv7GFDNrYCW5c3KdX8jybgfLHpZj6NracCPi6SvHPxTHkwXUcom",
  "key1": "5a12HjGTSaoZrcQ2gcddB78JuzEAR5FPURv6N1WLrnsLdHi2tbUbh6up3VZpjiDbPRQXqpFLpJnXWjoagKpKWdvU",
  "key2": "4dQ3UjqySFydV2oY7KfE52G4psE3h3ztsFwDLJgmiPp9Q5UMECM2CtVhGNe4G93XfYr43QB4dJcZ7tvtinfcG3f3",
  "key3": "AdvhQEquRnZNatQHRd7SEowX3g1EkKZoK3LF7JuEPqefiPqTtCcyvqFefchRGWkrhNsNQEi73ttEqVDtd8iQhEf",
  "key4": "46eCTiL3du8EGebgfUXj7sUy1x2GNfbvXaXDBddbrAahw3HV8UD8ybQ5VEbkEmbCDD26ogMyzrbA5hMwRKib6AQq",
  "key5": "2smViysTTsDaev1gJ6eUqhyYQJTwr63b8jf6UxaUVTCDk89MkrXCrVbm78FxaSGUnCHUJ9rNBeww7Zmdc3Btouzg",
  "key6": "TtBbQydWkMKjXLJKGUnPTMbGyyQexFF1kWgk1Lsn5qBAZnTyxbnW2ZugE65mRRQ8GeRfSZC4AGd55mLT8jKYKAE",
  "key7": "2KXUWSm7gC4bfwJ3cmFmFrY1Kp9Ey1zTUYqx9uLVd47hA7xC1jTrQ9j7MorwrPbGutQP7DYdSVYpvEhq6LtzeLjw",
  "key8": "L7ntJuoGrqQq5ZvzVzbEUCRXmhukRzafzYiXiet85FvCv2Bu5avmMjFH3wPRUpNweaBDpn5RXcAqs8K3Ff82CRE",
  "key9": "fZkzQWgEUHMYSyFMVDR2UtjjGri26cSyyWezfj9V7uuRY5smH5ptt6W6pBQTNRZLFTM7NDs9SaKJSUtZP2y4rE9",
  "key10": "2hqjdkypmiBaWHG2ubP43Bg8YS7s9aiiM48b987N4ZQAdiSHh54c2w5byA2oidqzDazCANGdyfY2kaX2EceKRayP",
  "key11": "5UE2NgaghAGCmnbGM5gFNYA5x6t68moPE3bjkzUMTJK6BoQKexeN27mh6oCcbZN5SW3Apx4rxJRTS3rsehmCghTk",
  "key12": "d9eVWXsLCTeSZ8svRhRgCyNcYJXu1gZcwwuo5rNYKRENWsqZFv1cRcJ1rcAXzYA7rNoQfx64uKkHXKMtnoZJYAD",
  "key13": "3J49FYh8ouSCSs3Gq7PLEjkhdCeJ4KUjjpPiJnfk1UmyVLL3BMCk2D7cjXhXVreEqc4nNcwrJhZdHQvvjUyTCDE7",
  "key14": "5pkb5bJC4mGsdJnkPREGMT1NvasDDjN5yJeNGnsGdcf1b25thdWKdgGPXFz9Ae7VAANGCFhFjTN4XyJH5s9u5QwW",
  "key15": "3DDDtjh4iZMSoDRzTqP5fN9VAkhLAbK54BsQVgdJk9a7Q8beAyL6xNjHbtrzHJRjRNrQF1uzhYPrQJF2uwzPxy4t",
  "key16": "2gH61T3yvLeaYKfvgMFu2g9yGUsfr28BYE3e524keAcnP5jDzyY8mK7uruiDY6w6xtjT1Cs1RRVR8uMAtybSN5Xw",
  "key17": "36YzQN8kpwo8cb9c1twSm6bxAqT8KM6afs97VmvEQJKnpxvR9QJtPoQiCGFb5jWhpWPvV5Zn4Bv44Z8uZ8iu6NMR",
  "key18": "4YcE4Zn7Y3PVVGrAx628iD93zHxJR6S5YMixhHPqCL8Moxbx2kMvDTSawJMEr6yw7SDVXP9rKZjLz2Wenw1i8jjA",
  "key19": "5x86xsM3syXGhuEU7VGRAHQaeqvrZ6Nk64ND6vzkjwGQUyTUfWJ7XSh7h6iLu4CmtDoEsAzQkyYoYzRGEobkqEXs",
  "key20": "4RwXDrp1xXVxo7fYeQXacSh6PYJXtYNdjgdtEdk7fnzts8NwFj9gcNBppDzZVdSEjyj5ddQM6GyYNLJvAj1u81ZG",
  "key21": "2kDT7pvLFUd9CJvCnDCiGUfERDcRzjrGVxnjSvaKRPa5QoaiTUqjMZF8r1SXWerosX8YpToU8ZS5j9Gk3cgqbJx8",
  "key22": "3M7Tp47AEEysoc7Zwh3aFKdJP9Q8BfQ1P4XxbrpyxCLTT74FAK8QHBRykQVyQP6zcHvqCAU3RDmvcNxBCvP3zKwM",
  "key23": "2qJ54r9vJw4zefScAvCzomus3AwNLeNQbLrQSngWLwwGxzKf57xGEQg9orQzEEkkTjEDjqTH5H3GsV6MLcNQC9Bp",
  "key24": "2V5GpjY5CrpiTVtiPPGY6NAdJNPwp1N6LEbrqUKNS3JF65BazbsD5dZ26jmcrGiWgG4jmGvCMQt7cnAgmwiew4rt",
  "key25": "2gmS46kirKYfX9DAtYvpuigFraqmyJxUe8tCAFdyvATdi2eL3DTg7xVAq6x8kSBxLEQhZKnb6c3WXDB1SF95swBt",
  "key26": "MvJgiFsB5ABfdVL3N4NTgJfueWtEoWtaSPPMoA43tQjeGi9pJx4j8ZK2phrAHAPnRAHjGo7yUA16JMndMNwSvvN",
  "key27": "4ZH9WMvWdAHWX8mwVvYMiPezqH9YhNeMGj563B8kEC3Z2XhUE7kb3Uv6VYjKSRRiY9FLMEhTPFG9bAhg1rJHLKuU",
  "key28": "4JcHdM2EhWPjpfBfpSLXx2xsfJH4jpshWAbfh3Er1vdbRNPaxK2KobGLigChYNESWLs9e4XbFRUgxFTwFm678oxv"
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
