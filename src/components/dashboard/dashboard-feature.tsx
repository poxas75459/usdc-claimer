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
    "4STVDm11EkzDCFT5APREdZJk9LHfBWPifN2ejYPdGRJheE8bNDiG6HdPsEg6MBuxWpNcVvJ3Asq2DL6BRVCN91N1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4agB3JvqzHa9XzUfcD55zr4MfnBE6gvmP6SDZje3wKRNZXbtLXL289oitgRU5FBHfdUQaDLABm2yqPa45ZjvV887",
  "key1": "4YRePEbUu48MWeHiR61uVmbpmoNNFUfTZckT2FPRwPgcefGJr9SapsKi1KNr2a7yCUWKa2LbLXhZhWgr94CtNk7x",
  "key2": "4xa2UWjdZqnozFmjQJfRXtLxjdQaZZVHTFhyuoJTMF2ZZyLc7AUEecMvgK2RRP14pkrvhz3WaPWyeFoegt3F6LPW",
  "key3": "RSpzFevMh8i1BPTexCCbHM4bVunk9RXkuojgqoSD6FAWNU7zsBMnKtDUBcHYhyJrboTPykdfBTR1hxmBTuNZpn6",
  "key4": "4aZf2KkfqY4AWATvnemshnwdETyRdZai1frHuWCf3GmQEkPmUbGJYchb3bpyrSREhop4gM2znLoLTFNBGzMyV8PX",
  "key5": "4mdxwsq7gnwRLqb7zdoA7wQXJ13u66AnVxuVdFW9jqY1ywbKvQio6bYQLc4uZ8ssfhc6VYCTLu8gEpePXRf7CJYP",
  "key6": "2zwK4gqXFgVAbNE7Hq4DYaYARhR5JJ98VraPcRNYgY9goHgd8ygzapvEr54CYLhCakT6eN5HHV5HSY5Yva9bV26z",
  "key7": "3b6BttV3EQZHrUHohWMgJthcDKy4Ahs1hLyKa2gekssea7CGwEDbQTuiGEjwHWd18RqSXh2s5jB5wTQS6SEY5ScH",
  "key8": "3BzBdVXAmaDXuVYDLKnV1NiZgXgw9NyCB6z8d1VC2ygXvzWurTPbUfBa2XA7fc1gd47oy44RtMHrfvDTjKrBXdHv",
  "key9": "3RCySX6GK1hHnntZEj4ZLvYMesEtiZ5k9CTiqp75aMBzmdLVQF6c9AsfVvXjK9tgPgsq43wNyP1ETrcKien9H7gm",
  "key10": "2cN5QA5UhYUQvDwN2WSMDuDYRu4ifAA1Ur9NmWK6aBHssEN9YTzGiqrgEDczsNoKR7t4KCuesrBr8DtM5gBo4ikS",
  "key11": "vAvhWYY5r8aCm1f3hZF88e15UZ67bgx4RZUHpkJEyJaaWHS2M6QPoiTNUqvNYNbKUKvDeEfmaPBjj8hYWXBmApp",
  "key12": "2vpASVmUjhg1o27q6k3VLV1yZgdeUY41kihxFqsddikg2mdc7zprErtdhwor7vgGDZhsBwjrFJdnm3uUtGVrVcpj",
  "key13": "4uwPid7cgmAyZMANDLnt6LQb2vkUEFsWmoPhKF2wwTNrgXuwx5dYY7574QjAUvx91tjoQSnf3Evc7nixZbu7n577",
  "key14": "2FVa5vPSbX8p1jzFZH2jNnasRj6cPCJnWJw9eRvVkAWQM79oQFTkkvrFZ94cGQ4Uh2qkP5dnRZAV47MCXgcGKpR4",
  "key15": "4CDC8SCNbHPkB6tAZWj2mLp47ycmodfhZubBXYaFVzz48hGYCotJnCkPwWp8tvnUo6rZ4jcsGrCXknp84Pex4d5D",
  "key16": "2FGDVF8sk64duCEKpxDkfWwqQivsRN9vXYGSiq6yUUCeDBN5hM6Frni9TtUUXoyMHWb1UoFaDCJkCYVbqJ8RVNio",
  "key17": "2yWQbR1CigNLmc8zjepjiTBd6WDG7QnKyWBT1nZH9BMMBKz5NYxdzQE1awm9pE8iTFppXKhhwEVmA3kCVeTf2AFZ",
  "key18": "6588s7NxeRmkgcDt4VYzHrsbVnrLiRvbHkY62iBreEyrsfwTZoY6o5M4xLyTnzmfGRcehxm5fhguEyLcV7jEZPeo",
  "key19": "34fDs82aQaiLNKGiZk25jWCuZH8f9Yj6VpjN3DtvtSXTysMp8vKZteSUxTfQvMGPL2j4d2LdZZZqeYMoXnZ1FL3t",
  "key20": "5jzW84NjSWy7Euox8HJJYmesot3dFK9bVZJG5LyUSvzT3FozS66if6Scth8QzkH5eSNCGoAZssa8kUmwkhHCGicn",
  "key21": "3J3A1QE3Urej6j1b4dUUviynEqz3VnZnsnd93vEuAEadtebXQK92xq8FwgvxA4EEAPLqU8qAsc36EudFTqupnHQe",
  "key22": "4UHaoomNwCkpPvnihSxVeKUUPXTZvqSPJReU3eP5rmdzCBnJomP2T8NhRkvmvT13UQgaC2oaoqm9MiisPEyuJU6s",
  "key23": "TF5GnjYMA5YzZcsexGJnULwLytqg57JoXK3hSrHAJ1vyd7TyeDzutjyKpZCg39dzNtSTG7BETtf9KpsHwrhedKX",
  "key24": "QP1up6RAKkWq8CYJ9CtaHCG9NL73yhyNY2aVb6DuBSx9PnbSiLDaoCByjYSZfjUpnr1rktXKmQauDihMQ2g2ReB",
  "key25": "26sk6T1xMqtLEVzsKPKDQ5aso4aGADCLWCvF1ujrG1WWtmMWdcQPugYtGFx8cZV9sj5CFzsTewd7598gzKpy1U18",
  "key26": "oLAtHdpCkKBCffcbtCGwgss1stWnn2g4hvZaP4vfDURwbsi1rPhfF3yqiik2oYAxyj77ouRyHXXPB47F6scxxT4",
  "key27": "9f9459zYHaQMa5B65st4Np22yCgirq8vr8MrUFUT2YxueyzkEQphun7vHQzMqgwtAxtajx859ahZdZWRFWkYH84",
  "key28": "4razM5a5sjgvNnhhvfLkkddEFUXnDJuKb97GETsL4UNPhhsN8op7KegLBUmCgatUn38VUAnW934mn9Ar5E9RJ7Tw"
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
