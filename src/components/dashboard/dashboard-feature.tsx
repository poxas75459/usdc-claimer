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
    "4fjBjnB6JCRZjMLMbA1rHKsZjwZRcMir1DLpj2Xpjmwu5Xfq4f8hD7Aq3G34hZ7r3MNzoGTAAPnJRHBxqeNTMfvL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37fs2r1kGKyFjsXbJDtdS5AFSiLtN9Vj6Yhuj7R9KBTmDx48YZ1bkZshDa5hFx1vf9xpEgG3G8za1pKGZsVqZAAX",
  "key1": "3Xy6dphEJQjLyAEncJkit2BY8nmu9e2gED99bfovprerGZy8dWKTqJaVSmDjWPDCxtYKNg58M8XSpfDjwVycx3f3",
  "key2": "4TPtZUWRiD7BidZevmZM7MVYFsh2VaeDiKAazU4bXsuBoXQLQtE3Facfun99iqD5uHpnS8GsXrqFzEHuAdAcQcUX",
  "key3": "2WywZHYnSghVdzbgBn9FfWExS3k5nncMdSsPctXrp6VAqVTHQoDDWne1Y1xskN8DWeaFJSfLhkKBcosVfJtd7bJC",
  "key4": "39zerpSKhXnhV7ZwrjrRSuzvRRfGn1bgNKxzJGwKWgfKqho1e856F641igHuyPjj7EHzvgH8gR1Wgmfxtv7UyqKD",
  "key5": "4zSDAZcyh6fzMMWtkiFvZ2qAisj1tpDPddnGP6M2sdZs5ckq8JgZTiMk68EeUYeTGQhWRGZxkMSAbEm9KxpLBpEz",
  "key6": "5AT6a9beFc7pYRevzQEUY5zadL5eXjB1BmgeuuyEsrrYyU2551vyXHzoiYxuRCxmzKReUZ6GvaNhxwEDfWP49595",
  "key7": "3QswzodLbe3oXSdUYpwP4jogYyAh9AitY89KtWk49ywcZdxRhinYQkBozhHuCcSgUFsjHrW2o3gUeiJ3acF6PCkC",
  "key8": "624Sko2rYLovBBNAkYuCzYJSs24JLEJCYXFuWvY4yXuAEWgadS1M8HJJPP3uHtxiXmAg4MQo6WMdtYVSNbb646Sd",
  "key9": "2f7L6V1Gj3A8A5ENZspkJoYVcV92f3iFYMVhfXUcALD5pbpWuUu5qEhQX22biF32dF1mytj3NQ3oHxRYf2eCNnpi",
  "key10": "57v681eKRYbT8Lv1BfZVBCtGrktqZkSVwrYhxBvhS1sRka4QVkEknccux3cFbZaRPZ7VJbteFpsPMeHbpGvtQvPw",
  "key11": "gZyMc313upRYQokvPntW7paiqnyp6P91kv1zCVoHzoQRwsQyVvwaPX4AVB68y4tCCcXwb8kWMwCwKwbw3qwukAZ",
  "key12": "3PopUUs4wThUBWeftzxuL9JL8CjJz2PJJ1huqosQphYWgH2PckBpDuQUDyh116qPfLVUG3NNSpMudvyvm8Ss7c3P",
  "key13": "4tWzKvbsLyF768S6zZPifJSnbamJUNee3msL5vrtVsSPSJEmWhWZjVJ31j9JjvQ2y4hZQgHpUtDqNRNAZLrGpWz",
  "key14": "5367v8bETBLGpAmt1fjF165DusgFwL6mmgfGLxo9Ko7GZkuaiUXbHuT2Utj6Wp7fF58QVUJdEouwkvaZX6R2Zh3S",
  "key15": "4xm6Rm5CrYxCmi3gdeskL7ZRnehCpLGPEt3p9mnrduriyg9XdNPTjX4LaTxpxFtDverHVnpE1UNZuMPbkGv6PJkP",
  "key16": "5Vd6cB1GkL5PV9NLMzQCGpsfkJsk6iEJwfr1hneWCQJqj2PxiQ7pj1bQu7FMLtzNG5L9fFzd5zkhTki93rccxPsc",
  "key17": "4C733GgMKFTuJpPWYzj4nXRD4uohtvPpQ6cq5rXJb8Bhw14vMLb3148k8BcSDpmWqDJ6kztYVz9RP7eejF2ibSpK",
  "key18": "5wdSvuyviLR8Gh5aaSU1hbVjtbWnY9NvZqzkgGkqUR7DtHsLcMs2jxu56S4R4LcK9LcKmWvrNfqWKu1pNRZnkRaC",
  "key19": "5SRWjUPo2QcwUoyPTqfKH5jQZDLS45LoXSoZHJ9gSUDg4xNtpFjqaubQnu8MqqGfX4TycLSepz1KCjfk3FT2M3sD",
  "key20": "47jw5eY6XkzU3C1Ra4WLr3Uj6zAPCwB9Wa2mjVmrdn5Ly3kZoBVLKBLzrtk5sHogrzTUMXbP6KP3WpY2GUESwyrj",
  "key21": "5YZLuMdecurwcnoasFUYdFxefpJBq8CJhsb7rNQyv3StSRZmib8SnCFgFEdd8RbNxEyQ4p3PZwJWvvDjb5AtGRe7",
  "key22": "JjJxVaMYVHtAr7eyjoWH4sbedsj9NF8UyxnN3o9JiLvuqYXq9NCdEMHofhcocJwpp3PUzcRNFhL7q4PT21AEXv7",
  "key23": "5ZT8bXNE5zf4tTyYr5dDi4NNGuMbxthXRCoBdv4HtnHG7jpA6vC72j1SbvxW6pkQCSDeScnmdJDi6o1ze6rPdqd8",
  "key24": "2hqaVnuJyZcbN1ReZPPs9ucj1kounAZF7NN6e9RfYsEcWJovwEnVB9T6fVhEG9eK9TxFQMDLR6JQK6FDZGycMZVg",
  "key25": "2guGfRhrCymNBXzYfAkHzk6rBp3WEAmyUWN11rXMftRUxt1xSgNougD91LyqoFiRwKbDBGwtJbMnGW23S7UuTFPw",
  "key26": "YZ4VKSTuPezZNA9i46u1Fi3RdrhyQzUBFsz1JcnUaU4dBz6mZyTVoj2SQHFvR5Z6wh64nJsfKbWUUvWkTiGpuqX",
  "key27": "2sEnwGGZhQtB7RQ4KL4DoNQazQH99dVifPvnXBnmcWpCA7Z5Myq8gunvERgn94pAusYmWXcdj87MWhdm2ZW314Z4",
  "key28": "eZhq6vDmhTmM3e66HcGGWqfnTZHDWbqRDsFL8yw5mmVXuvjvuvX2N7PbrBDSQdUmKVkij9p2cwpK9oNDdJwCqUA",
  "key29": "4D2wEV5aPVUyy4JJVHMzYWU9kzszXhiFHhg2o9QQJnGx3dVr9ed1hSVaDvjenWiTCsq3KckfHQtq7wE3NhmFkZo3",
  "key30": "32XHNe5EAAEQNEWXtMEVyzQ5HCeQ7j3zmAemetYRmZWjPXxL6rQr18Ntvr63m93gMwhx1XhTRRRpfRz42tW93g6M",
  "key31": "5HaY6V8sVPzrUyXuZxbcTmzdgkcizAUcwfeYE8N2KXiCQLVqDGZhcF89oDs86y4rQEhZg9NH9AK8PQGsxKciAwif",
  "key32": "gsSAFudfabMuyanWZwCbiC59yiZ57eaTGAKHymsgAVSU3FrCz91MT7StYnHrz8jCXTSorDBL5c3n4CVKN8GyaKw",
  "key33": "5ah8YuQ2cafq8uD7BiycTVcDFnBWCtZ34zfB7C7NBgDMZfrVhr4JpT2EREaBT8tCab9Mv3n48a5ErnjdmDPtBWCR",
  "key34": "yg4WnTsFr9yK8o5oUQGkT6S6sLWthqUcUovZR2j6QgM1TTorh8jfnHPMaHF3dYVKwrEstirwogtT6v1W7XtD9mW",
  "key35": "8AmkQ5yK56wNQmg5X5DwYK1AsTqp7AY7kniQXUeafynR4qr7vBNrQ92aqX1gRjuKw9qhhhQ7XmEe7DKYWBVCCV4",
  "key36": "3SMDz8a2Qxs8uPbqn55yZtwqfDgu1h1nehcdhhMkWQgSqhPS8p67t1WGHj7FJ9DK3VAC1rVpEGmPed5xHwGrQH7r"
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
