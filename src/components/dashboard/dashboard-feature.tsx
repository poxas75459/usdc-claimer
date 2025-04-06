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
    "3ATQU29xzMf9qm5h9EpayBFkEhH4WpPMeJy39XZU9rgbDLMW7x1fseoAb8LWcw87SCRqWyace2rmnHj1RF8jsSfy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31prGceFHKXGutzugcXggQXd4tpiU9k3XPrygDvqcZXAWmoSR8Xn8RFChpy8rFvM5fvTm9Ys8q4cedPLB7Avercm",
  "key1": "5UseBz8ZCu6SJDU42QL3xn9ivPaaQitJKMWoNEBLL6GbkzFUwQMQ5pnWE4DqU8LFgt54rJeSBhMfD6bmJdDNQKrg",
  "key2": "3xZtaQgNBNWmRk9dg6oETfbjHVhxunQgft5ZtykKUXt2TubVVpHQuuzYVeR2NdkaCnQ2r3zHHpX5kfgxMBtD5UTj",
  "key3": "49K39E68jicWdu1nbJshVSBiq6YRfi9nsf1xWxHdpc9WU316XfiH84nGYo1rgPWsRDAE3vXkoCKbeXx6tKdMVauU",
  "key4": "Vd7bTjjqtCLsEgagMi7df8NwfbycctSURCBpKgJAwqcv4L6octR6Lp3i467PTyqkgm7TEzAmc1rvXPShgQ2Uj4f",
  "key5": "2ojhZJhx5YeLfkEgZouCDJHAgasodq3ChT77jMAKTouLmH6zQsxzM2UMvWmxA1oaxMGzbnJcNBALC3gGesu25XbP",
  "key6": "aC7DQZsQK4jhbbhGhtWq4JEnPP9UnUN9Qsmwng11nbetk4xGjWNF4bUdywvZeRLB2FQEdr3VJChF5QcjeCJiWYU",
  "key7": "5pRpnXHi6zYe5y3mPPHwQedEGTwzHECbuzsQfMhdCrv8nJYBxH2FFGzArvxydiBZ136KATuWTu5fXtnoZCWP9MKJ",
  "key8": "3pADZ2bbz96qRVeWaeQpi3StQdvc9AptrNd2q7Q6LHiVrRmw6ickYXkake7rzDkCv1gaZvAMaMCsVyx2okdkxZGQ",
  "key9": "2ojdH7ccoPvu3Ehe1NzksQB2bx7CnV8erFJqyYS4pCgL9Ue65vj3j4jQSV7kbgebFeNQCfB2oKaaEQ7U3BBEtUiq",
  "key10": "4g8VDd5knaNq8xhhM3QgLWxpC1eiSoSYCsnjtziJ2FA5VBADtqnjac43jgU8PtJX326oyTPpeaWFhu47ofdj3jWZ",
  "key11": "3fKZejZrjqzk7ewNnN8DbEpwfc7FqY5LP7BEzPMu5btwdtv9oLgv4UnBXZUeWEDTL6WiizhLjXyunUR3Z9ZGGxoQ",
  "key12": "XgmeXS8KjLmXbwGXNg7WpvzKeGFN714XPnj7PqecpJcrWtDedQ9UzeXsH78FbqZu1QCqmBSFKtAuvLDBxw9BPU9",
  "key13": "ncPVTxCWKBCzhkPtzxyvoViHyBaCWEo7ACwaHDAecCG4ogkNart8M9HMuMmnhR1kGNRNw2Kwz84xcEbw6TsNwe2",
  "key14": "4GjLwgTNmSq6dYPp95cYYfPzSHfW4xkdmUcZZZRTuGSLi64ievrGybHCuJv9HqBWRQGqcu9vdSdXvtsP7hXpxQCP",
  "key15": "4AHN2j3n48Yd9bJ3RHoteBzUdtwTjGGvxxGWCDhK6uEAEHHrFekSHfqYhrbxPur12v6QdUYx1inLJDtF34NUsToZ",
  "key16": "2vQd6iq5P4LP8Kk1seHFYt3FssNgqM1kE2VjQVkNiH8YWXo4JcatNFoambf5JBbKKcH5484wSWYNNeTKRZGXyjdx",
  "key17": "56h8ToNn87t47QFCwagdw518Dem6AKRkvpCdYiHRazYwoyndkE8mYS39bTPeWyYmKzFcq6KXD7MnWT8t2Gmxddum",
  "key18": "4zC6beLtHAWDiYhv5KiLjjbwzmPqvUWCm9kkiFFWJ6WNYjbypmfF3tAq6etcmAy8LCRY7VDLLrg3TkPkv35UCeAV",
  "key19": "2wgjzqjbhqzvTpBtSe5kt76VfbZyEAZCbEMSitEo9dvfarxoLpyz7JkDUiuyuJd48CZ274oFjWNxcVwfwkC16dW",
  "key20": "3fSq2x9UEqwE7AVbug2ZSVP7doL4Lte3danLLgAFJcEiitmr6cxmctXFKCXcgNjmhKF9nweA6MwoZdvrU1mErdw9",
  "key21": "bL1LjnFUPSxJB7XKVYGTT6TzBhbxM5mxBmiUSxD8dxZqa34Exxm1w6kFtWT4ZA3WowDsDgxs3azLhCgS17TtRQq",
  "key22": "4p46mE8m2RhgX8QreBFoXnTSVKeT6JLpr3rxWv5kfMVnpf8gdJAdRdRB3L17Bn4anyLzeHJMZoNwKsFxrhbxpsEj",
  "key23": "36y1TB7FrVh3rGrwwAGUohDbpDq4q2acAfuaEQcuge1q2e1swnD4haduh25sDSYXAgvABMp3CxdEXRK34td8gUU6",
  "key24": "5bdfDc3djDeixcAxBBvph99HKbrGCxEcJgCzaWCXjwd4R3mHcLaPSdGQqQve39RcUHF3xMWxAmYJJWFZmooXib4Y",
  "key25": "wafos75pfg1SSQk3yJmcun6curZSYB1zHB1171Qm1D2EeoFFXXiLh7QKABrJ36u8uttiiprDUPJLmMfP6MeuJbu",
  "key26": "5kpbvYRwjoqrR4PcPDEPC5nx2j4xFWdYkUWs218E8LbuNJ4toGdwPpDgKxftj8sDyeuQ1h6Gqvj4Qf3gneFNKqeR",
  "key27": "5mWcYVCffnNhBcd5jsJTqTHSA4rgWNCXhYjepvbgsWSUFMUY9S4bKVBnta5ZUC7NMX6GPgrcGAuj2eWtrYNLyJCx",
  "key28": "5a3KC7YGdPGYCGZVusjumNaSxYBXQ6Gn3bP3AvzJpb3m7sTq2uVPmWUj9Y9Uk4zRUTPzGMj6Az2eUo376NHQ5X4R",
  "key29": "iNTAermhXfcfAyoXq9A3Uwurd9JQiYZcwp26UL9kwNp9unYLZB4r6et9xcBAyiW2vPKcBHbuSd6kukLRachyvpR",
  "key30": "3XKSLRXwZXNJFJTYs3WcL6Vw5uM3kzMYRYtPmnEc1s2gdr6rEEGC8sJJn3VhxAPt7VmkBezZF9N2kyHAVVWpD4q5",
  "key31": "3u6YyogHQfUhsJtLkdEtcc4M5SAGdJEHjXCCqoU48PeiiJY7h38vQGFrj27uxgJEn38Bsa2EUpdGcJmMssaYzw7o",
  "key32": "2dNhsH1RLtMb3MdBqKhzY1WaLQhJLQoPEJ3v3QAvmF4o9Co1VXV6y8AxN5krR3sBiRMyZ5mKtcTguEEVR3d4ipY7",
  "key33": "s5LwSJjhQ47xYXkFiarXRxfnwvXbD7hMgWvHaHipdey1n8XA3YJ3JDxhuRnfXx4EanEoRgrvdxZPg9tfhsGvD1o",
  "key34": "4N8enEa2q3VxGxaf8WudNRJGdJgM7xUDNoBchYG3iN785aNPtqh2rRogfNUYMwbdP55TvzCQY47F3ox1PR4PWhg6",
  "key35": "Fcyxaiir8jgTJBDgBTa78AkxtiSsQjiJzYbcMZJzYBCJEWQ3noY37r9K3p3sN6Krz8W2tQ38BTYr7Zzt7LQqHqr",
  "key36": "BhCywT2EHkwVHcwCLHtEHuwNyBZ9EgQwrUXrn35M89osT9jtYiwYmq7zBF5V69eD4vbEYEPXp25TaYRgbpno7ue",
  "key37": "uaL3hR36z8JoqQtC6foJDemzexnb9thMS1QukB7xaMjwdz8nbeho39gg5ZUo9M4TKfiHWX9P4HH3mC6oznKcakF",
  "key38": "3wRATXBYJAyLTWQPWaeBuyFmRUgA6CcU62o7nwRXkqagXtRLuoagPA12fKr78dHNzxT8PvHjfavpBGt4N6ucrVnA",
  "key39": "3v1WQW8oHLoYTKtN216xcQ4YRuWW8Hprr34ekcUingBpzc5NiDiRrLYxk2T9HB7ywAGjFAjdTNwQJEeUVg3dcPNc",
  "key40": "4iURzKSh3FfyKvpT7jd17fgmB4rLSZbfJLLiUZYVQ5RLLhnCLWLRgWCwmNtv2iZmcZVW2M3MW1Ww5c4FXym6ZHNu",
  "key41": "KmBXKvDwU2HMNp2qBbcwXZRnjdWAHbn34mCmgDMkUoE4cwYricoZA6ox955fTHBJWCtgvYXWvgEcU5uUeixjuhn",
  "key42": "55naTimaaF1WzxhPMHwKWk3Q26gBuR5aCFicDyVDMzwX8EjoKorkPntySCWdvWC3iUuYnSEmKfuV5tLCP3KR5TZ8",
  "key43": "3h24uujDf1wZofSbmA4PWp6ekWRhaZ2QEUfXSk8vvKoRY1xvhyeCX7x6aQaDsmUXzgM2BfrY4sjhujn6CKshFUUN",
  "key44": "3ePV8R52sWq8tniCFdwZ4nPZ1TnaxW7Bs6uHe7DJsHpeRJCKNuNJUV3PWEQ3PGCzqRwEpUbo4smBFvkKKBBaBc3r",
  "key45": "3ZoZQgWLP5J1xUpdAZkLvAArSJGnNKT54DAtYf4uguPKXo8L8x5MCtP8CaAzfYtt3L6tDi9t1QFBjswiiVcFdEhX",
  "key46": "4wYbv9gU4NhB7QpD5Tbv8jqr9aJafv3DiedtZEe1Gnyx817wNbg54MdMbXgby657HS7aCea74z12xjKYH6RX93XQ"
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
