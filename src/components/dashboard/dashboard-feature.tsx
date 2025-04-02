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
    "3GNWjeGaMLDyo1zYEH99DBigKH98AAUGr3eVPj1wxNRrN5a9riQpX6dUBUwmFAWVmsB8Gb5LrMitorH2Gj9v1dxB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oTgT9tXzbN54HqeSdJYUdFWvwypRHi3ejLLaPADPR11C9PADqTJRZpYUmRyw3V3YhgAwSX73uTSbydMD7aV4d9E",
  "key1": "2G8fXFuiHtkwVvmMapwiAZ2YiLadRHDvPpWW9Zxs58KEsjpkSs9U6ZnfU7XaL7L3kB7cu4AecYBMYzq2f1thBNgr",
  "key2": "5uYUxzc2HKUp31FHaUWjrYYE6toyV5ZmmyPkepuYn1gSSdAmc4y6M7BB2WW3h52kgxdP1AC8wktUmu5oMEqaQwhR",
  "key3": "4hQp6D96GPXTKDfizGHWYytkewGeFnLFKxQMZLWp9YUHYSj9Mex9aV7thpyaCGHBfF3HBeHpVTdFbJd6Xv5d3tZ5",
  "key4": "3TCM4LWzXz3id1Jqg39UW89a634CLPnNn5VLEXLX5PXkDmceTYPgVQ2B1R4sbzYrcvTZZ9HcBQPT7xWH1zCvqytD",
  "key5": "55mf1PuRJtAvL5KZXU2mVT7t6pzcrRQBetidg735uaEcEdwRR3wwB13DRz1JnmsizkmMbSmDK3tPWTJpMS6zeXQF",
  "key6": "5XKaYprCEpHyRUAv75Rwn7HU25AAfCTrDWTjV4nUBEc9wsa6nZ9FyDNYsGfzpMrXD6o6UH9ePbicFBR6E71DGGAy",
  "key7": "5Yikit9CfF9VWzuZHTgvGptKFJXCBbvVQRbbLLeBo8PMLPPzgU9usFTg9CZmJxqtcYp68E52Ki9oLqDUatWvyJnY",
  "key8": "5A1UzrSbwwEftaMshn4qwsP2VkfUTfi9xMpZULYVWyrPNSdgmKqx773p871yRoY83MMMBTkK2mdcWSHhfWEdJbjH",
  "key9": "4cC49RCTNnMcJ2iH23AQDcfRy4YwaaZmpt7cQBFVBEjJwdspYbQ4TMtRqUXSEZ1XWwW2n8VcTKu1Yb4bxNrjLBT9",
  "key10": "4iFLtVvfzwGrfKUKAXEZbu3dMafNjNjp5TrnKdziRH7KXyuADeB6VhWSR8o8ta7NkUAUC5ytLkD9n5gWGVcKUb2t",
  "key11": "4ddREQ1D5pimwQh2ZjjEEXvyS2FmX2WSJMtywmAXrDgE9GScAGjkthDd5mqLFUvr3gt7ubPwhjFNzfpax2AQZ1XT",
  "key12": "45EZMEHjdfwuS1KF1E9KgUjdvjHztT5yZuo3sxb126kigtwDgRGFEkM8ZwR97auqGrtZfiGjGehXRSi9tGuUubkY",
  "key13": "2zh3BL5pC3ZM4bXHekhPhWrbJNVf5WpBbNrXuz89xnYMvAx34Ztz2XE8DJnfDBDtV94rgjCh4i6P2UWZrcG4J4Bb",
  "key14": "5hupeJY1q4BGyXa1nGnB72tQpwMagJB4BJ91XDww8T7T2Y6KXh3h41HU7YMtsvxRAhTMxREkcid2qJDD7xD6D7Dt",
  "key15": "2PJ2TymjUfcU6jCEwfjbq6LkZigromTsuhP4BC5mv9jPMeBJq6NpKcwRouwgN1cbiccK6kY6ttqutCTVWnDadHKF",
  "key16": "5qGQwn9cgb6VpR4yEP3UHhGv6mJ5ZJZabooeBBgL4Z5yzeZ3F9ijQUfbCqptdH7LiXXCC4Z6aGLj7nAi3hpNw6cB",
  "key17": "4zkBAxYqSLgzpqw2sBWygoGuDRsYPcgY2oARKUsmbo6GR5auS8Szn4WCu3BSV4UrgBTPZW8C6sm9NZNmuf69TW5n",
  "key18": "Gp2np27hXRkz7wdVAqVxXAT2qXYaNNXYRx4miePiZuqpUZcRFTHVyYADRx7csKsGowbEYmiA7dKjPENX8JWf4Uu",
  "key19": "3cAY1e4ucf2LZRTNTMohPs3MNCi5n8bGLgooJDgznnAFLaFzpNRfSnFcteLdayzYFRGDQndGa3gF48aTh483VDVi",
  "key20": "4sfbBoJJdc2q5Fec5p2ZL4XP15PoPQH17NLwLvrZSBtUTQLnERakaPpr1scX6rrxacvt9AT8M71isi7fVu35pEkg",
  "key21": "4WutJWGftDaMP8natPqXocREa2CD9x64uNpsFtM6A7NYyXBayfLDsPoegjapJuiW7RncsXTLz5QKAb1D5jxrEMuE",
  "key22": "ukZxjXSLMyUq5UKEzFNU4iDNA22M1bz5fiDPnkqietPMAAjjipzLfhaDiSDUALD7vCmA7Zy12YJWRHEj3gK7wZp",
  "key23": "qPAmo7tVEczuj8SZfiQnib3dSiWmnYjoVLC7qGYA9C5iXWyZph5ufYYrV7EMHpfVKnQTqAp9hxLkWHFqpxCWvHe",
  "key24": "58ZfcAWtYqYoEsRhSsDr22KbXfUtHzE1vs4TD4iR5FSWArG8CrGLSz4f199P8b69a9jxxNDMnnGncNVsZA7j1L4P",
  "key25": "5WzhSf3rHaeLFKWje3dCyEGPikqoDLo5UxwQRtdYnDHMLHCNSE78Xb43dgVto2PPStGQ69eSUKP5AtcB82jAN1R7",
  "key26": "2Qn56Gr6RuiQrFMJN3Gk5HGTKJ8mPDtLH6BdwNEVkrA1QC6p3mJCpmpezzWjx2JkxTL2SX852SMAiFPWmqkxQVfA",
  "key27": "22VWcb3ZEA2snaPvJDtPN8vUWBAKSeUFC67SBMPqbBJUm3Cj48RBKzBBbVrk7isydm6BNoA3omSmyqxsQAmUvmQq"
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
