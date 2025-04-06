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
    "3vfC1SgnqB8dN6NTg2S9vHPNZtAW5FYEX4wTusSxedXBat8zUsqcUPEx7ux8a6d8v8rBCDHNWH31c3YKawBYmB4j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K39KH2HSf6SmqcNuzpdVMGbsmsTZjNvPU8QtkRqDh4Vf6KzJtsEKLtGD9jaxezp5EMnyhBnXnNhJZ7QDDPcevze",
  "key1": "qW52X2NPmsUMRvKb2FmiqYrGSsKTtckaJuAEQwrgfWn42is3sQLuGmYno7Vt8fbjgbbUGTVPyFhnv83k8jQerHB",
  "key2": "x6bFi4GXJyw7oCerJxWmuhEVHna2FmREieY1DU7QA3RxbkbBbaqgsLnehmgf4aNyeN1gBHykPHqwiqRjqDGoPhq",
  "key3": "NshZ916trA5wHUm2HBk1zuezJUeg3anFLW8KYMsAxky1TMiQSrh6Af7dHdMxtH4prXkPYMt9f4GgBDkRVua62jQ",
  "key4": "3e1LDQVf6WoRLoHJAQyq8uSpnixU5M5qRA5PfFsyfNLUhaDSgGZVLMuoxw71TCPs4k2ViLRxFqQrBQ3nCCHsF86o",
  "key5": "4yjnYDAxVBkniQoxWQpS4ypf98acq4o8QF3fqcKwEhHkSL8Z1sfa39MRfEXzD85wcVSQEzpJqHHWnYPDdD7r2BvL",
  "key6": "58CgAe9Kn6Qb7ujgSffhYK42uVrHC5EA7NXDBgpGYf1nyvCFzkVNxP8pmsb2Xm13KWjH127a2CTxccuL82iut9We",
  "key7": "2dH81FQGTUWHAZuwnsbABH8hiH6baVEK6BufhoLs1f2gZd78Ui1969nBkUTiLxAmjULBoSgVmP5G39SUbRHfhWxL",
  "key8": "nCW2FLhPHDv6k9ZKzH7UJEWEkBhdEYqkgKRFJVjqoFr5o61siDPE1hsSCjeUQRftmJgPWW8SzR9esbUHuTskQ9T",
  "key9": "3qKemwbKLyDr5Ud978WZ97G8ss8HhWD8Dv3UwGHUp3praEXziLUqhvKuHAqCig8GiWa1oRQtUyBtDhAZScGcrzxr",
  "key10": "4N24AEigRmFCeXfGQnQo1W6Fg9WjZAkybutMkt726K8X5RRDyDPE8A3uoFmKsjtch7Hp8FUpJewcGQbAaRdeBBSQ",
  "key11": "2PxnDNmQ58Bnd8VkxADhZRQMQ6Gx9JQcnFsJCqhdSCDZ3jytdKLq8atwLepgPcuVyXSvDbjyamseT7QJ1rkeySeR",
  "key12": "54U3JQjBB4xiSCcW1Mytqmq4GynCuu9bfwcMizyjcnLdt2AJBURhQYqw1rFW2VR6TUd9P5QA1FN4g8hnUmBbtjWJ",
  "key13": "BidhtdiX2xEnfC6f8GZVoipbDX34XYssrw2jpo2FfYEnZ5MrRyAWgF1p88R8etzCQHikRS8hhGxm2TBHyheDDVp",
  "key14": "3JcfWNTuwFiQULSur58FoLawS5dRfnEHxBYBovA93wZesKzU8ZfbyBoiTsLY4gHfB3fmb7LyzJm1ox4cwBCXnJwN",
  "key15": "5rM8kfidBqikwQ4TwnVYdVpupCqr2uXXJ5t8ntdpQxjdB4AE9kZMS96CvtMKuJ3Zu8Tdh4tHkGqNtZjsUUVUpU7m",
  "key16": "T5AStGy6fySonHdPdexASQ8nVWZzwFpmfehC7SrHsfkC4o9a3GTU456Y5vjttjcncqYwmDTLJ51U5Cp4W1oDVeD",
  "key17": "3wUy113EvTZDtXspyUZJvXVoVxViwySbRfu9F8ADYyPdFvMdBQmiLjVBj4uzgodYV3iX5ATiGHRwDjEX5hZMoZeg",
  "key18": "21bABL8yg134ZBcNSdjA76qKUcNhUsAhKyCicBp7yrD77S17iwmLeAm4pCmzcJrHpGjkpLdDZXLfgdd988RkHXWX",
  "key19": "53XrVstNZzE6HGrvXRgXevbazPWFuwqW8Vtzz84NLrSAV9FAujjBKgbeFeFQ2aqK9ba6ohGXTytK1wyVvVFewv8P",
  "key20": "4wmRgf7G479p8HrYKn6fhYFSvT6aDKmXZAV5kWdCUAtd3H66riTv57NMMxYZRtqYcVSSmUuztNYJjg5ummGmhRw1",
  "key21": "yNYzDecrKkikkcQGhMKg9srHEAbh9K5kGqS9rtCNB9et3V62d7h6V2CFMz1HgZATgShVh143m6rEKfKR9tivQJq",
  "key22": "3Gj2cPToP636QxJC1SL3yMKKxXTSTPzt6joJUDKaUvxj7kpiufHGBTp7spBwcJ84LVPKub2MqFqR3x2Kyj99PjMw",
  "key23": "2Tc3UtysziFkPmCKUVyRqGvinE7hY9PRFBkHyEZ2rmS359GECJ7ZwknUm1C8mdWiae2Lp3ve4Fn22tajK75qRFMc",
  "key24": "5ekA21Aeefp7V2jV7WbZkMYXg6GBK3EjJ1qWZ2HFssBGtbAcozhPxPsiTLiEZGEwGheDKgex565gVzZR2FFciVEn",
  "key25": "4dKgtjLddr4ZuRM2ctfw2C773pRbe8iTxkTqGESBZY9gZboGMCNVqi8iAFav2tCYS6JGib2nN2w3weRqKrVoWsAV",
  "key26": "2TzVwwCKxhD3ewXYhcEmZTXDiJuuU8ntGciCUSaYKUGQRcSaM2421za5w8vUFT9iQMJAs3gKNfARePkKwQ9b8hxa",
  "key27": "221XeVZs8ViG4AG2NMQ52gwN7HwPec194hxtmgFVNHuPVq5rMVLtB4vhPvMFU18PkEHX3Eg2KicEjqb7crFDbHRT",
  "key28": "4E9bzDk91rq4GUk9cMbEGPrxoGs3yjHatQV9KwQmWn5iLqxie5U2VkJMG9RqQqmHotd1dfPCHttUApGLCpDc9dhw",
  "key29": "3n3yKqhkVb98ex15XzRtJ3PZEVayyNdvvsh1YejBUjXuRgLkD3xXV5uLvbGYgxzYnTPNqZAaGXBhHu2xq5aYADzr",
  "key30": "2A1NntRSE4cb6BY17izjNpyew1NVrEqhUBpAN27PMRub6qGypchhJ4EXMy9r73svSLLU73D86rm424MezLdfWMCR",
  "key31": "4bUpmKyqu1U5Dy8b7zoNiCS6LF2Acy2fSt3QYPMDnjkCztVYFDFeJ8NL8o1YjB5Hb5M3YUfxpX3rb5UTpryEAV7d",
  "key32": "9rdB8EinSs49YJNxn7fYXN7t7wmFWrzw5PVXx4dmvGbyYjw3adK3NYtMaPoZFeDvPF5AG3onDvQiqePmxhEEVwP",
  "key33": "4HBvfdUnLbKJJHmYQpK6HSXpJKmKB51cXiwL2uefnuuZuFCNXXSnbcUZHNmHHmR3285kWURyG3qCN561Ko3xQ8hK",
  "key34": "4bC3edLNFsanuEbVjTwyQ1qJcq6PXs8azsBNVETJfRuNpNrT3BrxzAVsgbF2SNXi2guxf5N9ehKvgXUFs2v9FqyA",
  "key35": "3iXnq4mPzW1662A332B6kc5SnjkTYppQfDUXykzCiLLPdqhiRmePS82orrwonxbM4xVo6fn716iym79yA2dBGtPY",
  "key36": "3vN82NPzFzBCznF9nYS6t5qwqYF4agSV2rNK4MVp2bqxYtswcFKQoZAqBsEszru4bZrF3CzTBznLrs1VhPB4am9z",
  "key37": "5XHJuoE7n4X9z7TzXoh9fufizPGxo4AqKrC2KJsHXgBUYq85hjLz9qXrUrT1m9NPv5zTmLzt9sVz9oe3xujgnXPP",
  "key38": "43MENkM6KfsrLHebe19K1gzCXKztGmQkYJgieqxhTr6zaVEopn66oE3KwXSHqjfP7CkvAV2wXnPBdGecjjPNJMTv",
  "key39": "2EHsNcodMLWAm4oTBtMaQqf5UYTkT7HmpjFrJLcCZ9fJmaS7TExDHHaDwjXU6Xh4U8dWt6Wmcy8xij1dszsW2ER6",
  "key40": "5fB1m7Q8jQBjCLhen1c3xAFbLgEg4g7RSvnUGeTSTJr4a24V5F6xzqsc9a5oKye313Ki1ygqaocc4DU1BCK8ZhYk",
  "key41": "3Gq8QXVHKobiXT3tTtLhbAwkF5QGq2DhiBmtv93bju8U6kuRMKDKJ36Vh7AbddDFmBvfeXwQwZSqgtfqFiXsVhUN"
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
