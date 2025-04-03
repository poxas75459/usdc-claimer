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
    "5NSoZUMeBQjktUEdhebY3ggvygaStRzWzKPxGrV4n1iaFGTfaX3E2af5PxeT75ybidWD8iMGrX1QHeQCBbfVziXY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xeZFAJi9uySH7swWXGK6WwxdRFnHZ7qE6cJnYWtpWFzABXtxrQBmiXd2iQK3YMTXN9FbHzqy9yFAkcQeCHwphsu",
  "key1": "5cFYCfRPY4ZMC5iT6gqzLMC96P3LcmfRQUthD6ZQReJmUc7fECDQUeVtxEj3g9LGr2u6xCAmb3sUiApz3KNmx4ub",
  "key2": "4csFVmb1q3T2V2STSNoKeLienLNqLsqTLwwnWKEZLD4M4EjW8AtasjoAccRsL79fVHcAJ3omrBN9PDVV7CEoxRCv",
  "key3": "3Fj7rbXQ2reEu5nfvmaRCWgeZmRpb2MH55Y55JoMdRqSk3m6GCPMHZGth2xjRb2AKAoQjVCdDCrL76cd6LkEv19J",
  "key4": "2AXsYr1PHtsnGiquUX96TTt6nQeXjwFCkztGZmbdvzLEtnZUypE99wodcWEpaR3xaMHL5ELp5zBy95ZWZ7Zxej9T",
  "key5": "2ViG5Qntgq5qZ7KTpLceZKpdMWDDcTMYioASdLvuP8H2np1dN5De2tu7dy7FvGZybJYykQTU1RjgEmLbCeQkdfcX",
  "key6": "21ZVTHNBSv67JKSx4JchiSwBDvt5kcFw3SiRZFTuGC3LmskJEZY1vEcovJeckPmhxUUBa7xGyWM1vcHEKQW4o5Zc",
  "key7": "WqdiLCHdAAnJBuwWQnvDCtU4RA8ysGkY2RvvoxTpuABF2Bq1g3DBdN7yeEaw3e7REWSNpq11S635RTowbTnHywh",
  "key8": "yzYECMgritFFb4jc1yDzoxQ5Y77NWHgwaXTveiL8W1JLdCESziA3JRh2VkdVMkmRTLLKb2QoRYdLCWH11SZgUKQ",
  "key9": "YZfy1dH1MqYsEeRr3TKsh1LbntrF5ioJYhjfKVS58SgeeGrcw2TfRUAyeZFmoXU1Djo3FPd4xe16j16ZHQJidTS",
  "key10": "yLGqf2xtwpFgCPQ8BiNuz47xHJTxk2rfC6WNExHTcqUVepuDR1wMmrcbFRosJVADGZR5QQmM59fXZEbn9paEQkf",
  "key11": "4suqB2XY9UbTZy5F5bhS9316h4ca3pZWLDUs4xkseWGBdoTG7uTPtHgU4PynL3YZcYPbY2CPRfCDFL8M3kT2LhYQ",
  "key12": "4LCyTSYzvomEiMK1jXagD8pqHZDEogCT6jRUGmUNYatVnX33bnHbCdCeH4bJtfJPAkpXgy1fzYbdH3CZtg4kyVB3",
  "key13": "5X5K7QZsJLg4Zy8a4KQxd4jLrKDzJ1AndnGjAvrT6CUKKycRmFkmYRhkfjbFHBez3Kh6LMmvqSkqjJyTccXD5GoS",
  "key14": "2hEtvZ56H8RhvQXHc7nZKVEj2wAmYfXNSu1NtBeKGSkJ6kLZywEdAPecugALdGP72B6J4a6VSyK8DkkBjaHNHume",
  "key15": "2JBjZ3BJoyGzYGGUWs5QrUbgRzXf7RUHTgBaoaDqFjjij4bUB33yhDLvxpXH54ge7xitFnzX9i13LuwMpH3Y7hD",
  "key16": "2JjNSu4kCgLXArpVuvSuKmTCH6rAYWssxGsUpRmuMAqnBeLdHK27pSCRE5wPbKjmg6fS6MpFjHFKCbMrMWn7mQgE",
  "key17": "4HtBomgXVxFWtgtsWyHqEFH7MSeR1CohGNnQJHb4Twwo6jMcpiAxo8dRpWhahV7oAPn1poMDD5pezHsS5666Bmff",
  "key18": "5MnpgLigHw4Q3mFhMgJpu6s8rTU3Xp8T7ZsfHCHQ23JhChUVWRCpfKRMjQhgkrwguFnyNXBAEiWXvZBeYLNR8nUE",
  "key19": "21D2n6vBh7iyccnwQHLcYv3Jdx7znyxmDUbdVJ9JK7Qm1eZz3j5gvZBrY29pfjSzBDEXL6CttWmpDs33HnAavzTS",
  "key20": "5v3jY4uZ6hesCkDP3PCHyGDDJZ7SgkN3YELa2TPLR9LXPnko9vEcMqVS1mE74bwz6QNzki37kRHEKjJv3DKhFXFo",
  "key21": "ppHg4GbXDEdLr2Qha1jkQ5yrUdkbbRBP7H21aPRqiUMkTRCQtFE7TK2XaZo7ajUJtZST58pH7EQ4V5rnWTWuFuW",
  "key22": "2pM3qa4Nm77D5VYj3vu1sc9drowTPnMj5h6z5vTjL3TvMK9UkeMxt6Aa61pwsEb1wKbdc5HCicZLEKNTWrgaQ8MX",
  "key23": "W3GdnjqSbEojUfj1NZAKKCV3zyYcsQuaKGhXdmBzkHa2WArGn7RaXyH8ZcsTG4h4DQ68J6Jjm1axpSSJG7LdLm1",
  "key24": "3nAJpcWadGL2JtLzv1NnkuVVXVcJfw35T9NEPLg2YhpGzxx3uogwbco6LjvbA3Bjo62VLwCiSGWWNKhpr2WeViVB",
  "key25": "jSciH83zxAy9oJGVKLKK63XhTk2eiaK26vDKMMMbymMCipsoznbQVxRqJjYrowVC9CogWNWURvat2N5oP5sFpqb",
  "key26": "3Zjo59GWAoRanZSQhJWJ1n9yi5fKWEav4MqXswv9erkBuGfyd541V253QaSUrUG5phFkK1u1f92MMgzJhQJFCd4f",
  "key27": "3rVWSpnzojLdQgbNeahmwHfzKpuJMk1ikcCoeGcb1YSxZoj8bVyjwuY3QB1cdvKNEySH4YCzxSJ12SKLfPjj5XTK",
  "key28": "4SaUpvgJBvL7g1Z3tK5hbFjbSJNb4cEcgS3syxeWSEoQyuC6Uxv2HU4CHDmGZ9KbevA3FP1tsyQhVR48HTmndswg",
  "key29": "59C6DuRo2HPcsrtFAgjSa2itx8wdXP7ubi8Boo9XKQSjn5nA1tBCEaa65QTm5YpmrNoRRiQNTsB55Hiikk469t8y",
  "key30": "3quGPqbRE3eW9fwrpmXn7MKSPbKPiSWqouc8NYo6627Xoc9r1nGL4NG3dfn41Bm3dusfuY6cYPRXHCAjxSwGamJx",
  "key31": "3qkhfdZLgkZMHJ2Vwmjf2RErdQVCXQcHoApT1f7e6yfdf3EGQa4qDWFvC5Cno7DqZ3BLLBYkt6ejmyhFSL7zuEfU",
  "key32": "nAZzNM8S9Ftz2Ks87EudHBwMcdk4AHMta68gQpCvAd9N9aJ2iPeUKnHFoLK7cmWdgCA7EiwwYQ991USX52jzLsw",
  "key33": "3Q2NEWPivrRkmREZ9ajR49HTajkW7fYNr6Sok19o3X8JciUjgTKjmBYQoSzgCH6yfc97rBycVxYrZ9AagiLz7xKb",
  "key34": "27DFny9GAiR3XYEpHgmtybEH5zgyYdtQ4BLbD3H5SJjYx9irfoFTrWWWaQBZwYrZapqpfa8KAqfAkHZ6BSU1FNN2",
  "key35": "5VtsKZDUrA1gjHjEWpr4tnv9NkQYUvBffzXdXpdG43gm7zjbz4TSPk3AWnmcFeptM1gHMrZcBi5vBGRqTBjCYfJr",
  "key36": "33tjp7CiXcnsbR4DcKpinz3xUaP83UtzNdRiJZzerrjfgFpv1gSE5PvjFghra4LydafU8cPAUyx8Yka8X6EytaVA",
  "key37": "DwwubFAA2PfW9t7hs1Nj5YjvwpGEVaaTTGTbj2n7LABzrXfApWEypkDxu8VwRmNdgEmobAHCVgdQrnmgfZvTFqR",
  "key38": "56Tkc1it8s4fhwwm7Vs4Z8xvRDaxCiVKJo4yg3Tjp3nqt7eq8yfZJ9KKgzpPe7apwMKJKU1ZLgfhzeggDpUM5LUA",
  "key39": "43wBMycxtQVKRs9qefJp8VQVGgsRqSrWpCFaY5ZQEVRyrLo9bPhwL5HbVgQaqZQYHGc2JXb1EJNTJD8HTwfSrD9M",
  "key40": "5YkxUVKcpxd9TGQqVEM6iMkLV25MqnahwQGsLAqX6WYfXGJd1cdTzctpf4ApUD5JgL9VUGnCCFMgFMNkn3qY7Ljx",
  "key41": "3YukrgrmjTLiQNqK3CdhGDDwuXW9MSGLGtnci3jmj8CoVFutXj7ZMFuyFkJBE5ygsDj4km4R9uzGhammMAWgV8y4",
  "key42": "34acBWkm1Q5F8yrQmwr5SZN6mULQcwKmZhnJxHMBHSDSxjbDfLRi7KmmYg3EL36ffQGaZRgwzwMpdP8AdZiiEMtR",
  "key43": "2xKK2LbCegcLZZVnDpuL83B6Mbzu58At7hS6NLjjFEmtB43J8Yi9NsJDJmrCUkCiZrSA8ojrSLARNNkGe8uYkR1a",
  "key44": "3pvu1iw3E7jsZhhMvJyZ9uTQdyMTUtsp6PxH6kLfU1JPWsUnzbVbCYs2T9CEjRkhUSxNGYXkdwMK7LBMHmnoQNuB"
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
