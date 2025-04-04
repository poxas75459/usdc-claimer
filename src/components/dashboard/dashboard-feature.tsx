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
    "66xprUnRGZ35z3EBAhMJ5NThzWc1dnyA3gtv4rNatci6S2YnG2rY8maiCxnWA9hY8iR7prBpz4oMS4Vvhj7Ni2NH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LjfRkR683vFE6N2iqiPxWi2NMEhdbhTxhcmCRZf7YYnJKu97nmVQArvsUaqQQ2YyUm4quhFiELvNWhKHaKw3d1n",
  "key1": "5f9gcHRs7kTMtpyk6HAgrJkPQcd5FjuE3V3GpRrF8CZ81xbN2SVQAge1efzrL14LDLveJFFiqdVbrKLH1nc6yR9R",
  "key2": "2LCeHXET95M5sjR2BRitGHUBMYnjXXjPnmKHS94pB4NoEEzBw8E1pj11E7o4i7aMt7fkE3mQ6tqajrKXGumqknMt",
  "key3": "2iiWyb3UdAR9i2F74Uja6GXHpuMXqsJgot2U79a3RJJFDRTEypQ7yBc7qXBmTBbr8UCaiEuT52ym58i1axgQoPAT",
  "key4": "39xMGMgBjGQe7iJ5NiYLrxDD6SLYB19TAmXLT8cDHx6VfeLpAxcG3fqAYtYchnjwrvQ4pFLi5TyX9P2WonJkHtM1",
  "key5": "2ksnkE2QsYDJHTk97nEsbTD1Y5ArRra6kSQgTVLHuxL8U2QWhwaSiP2q7kEadCP3PVyYnyWUvrmMGJuhoMZsmFCo",
  "key6": "4mRAefKiyqhMMKbV3t6mAnJjxfE6SPZXUzxwPbkFvz13EvBw6E8iXRSZrGgENANdy9Zt7mZfzPfzvLwPJETxVwza",
  "key7": "4163vSSP5dDSDoawxtqm7jxVzptTTAvENyBTDqvaJTksiagkV3o3ADu3nN2JhAwYWG6TZGpeimmqMX6w9oJTsTHj",
  "key8": "4qMVNjcjJjmBfHxWNCYUpQfBYsVNz2fGSvfxyWDdJzsjR43aDAcXd3N2W5rpAHZLdShZuCmNiyYFFsvFGAq7zkea",
  "key9": "3ExGBBvFfsDMxFySzPcSbWMTBc5v44p3qMMeNsx3hGNbmVGR8XUEpT2mNf5B4nyh443hgq5viA5bYJUWDCRoohfc",
  "key10": "3cgme7L1NTsekWD5tFsWx7bZ2pSGChDMucYmj6Kb4vMF7jdWt1F1MUQA26E4F9er67XqphJEu5VCQgPs8nNg4kzp",
  "key11": "doCGRDsq2WGSWPg5pZyC7FAHdfpijAFVAS7u8aVcftZHjKuDDSnKEMkfcRRXWfrxcpb6kftfJDBtdkMVcutKawW",
  "key12": "5NJMqXMnaiUp9SWSFWvEKnpY6btxsP17XWPwgYuBcj8znF4jJ8NqhcAb4NnK7uvPrKe6sQBauUytiSkLsgUuqcLA",
  "key13": "2znAJ41anWkk9Pc9ZwK773bAWVd8aUXn6wBCf7NzvwWV2c1KH4NnGf7uJhBnejTBU3Z9bVeDf6YAkYCMqvKQ4e2i",
  "key14": "KWHtxcyDT8AeM1u5xuA2HnoWBxxWRiFLeBkc34aVokyqPLBFpa1EfvhVJkCzFTidcQdHEWUZiRbKGV2GJBZgoeg",
  "key15": "3D39FpCCzXMpYBjGJR6A2hSYspXv93i7BwdQHVh7QUudA2gMxBzHixv6DYrviNmrA5b3sJTPkKVenx5FJWgX8Akd",
  "key16": "2KLX6yntccE91E5549ydquaCTAJFiBMwHagnALWcN3iSHDNuT53aDu4Za6ufDaDyWNpvwpwn9YodKzqAZn7rqMeD",
  "key17": "29gryzdypNrFj3a5Eq4n7R6hQKnT1ozs4ayWYXehwtSngGiHF5BuafDSRvnjNdEXJoPzdmRU4AJzVcqRybvv1yWV",
  "key18": "3dDhKBnT7HEoZH7iYKJDp8zN8wW8FSrbYL3wqLN831KYnnMJMsycv9DxVvGySsDsR5zeyNdPUcyvNjQg6JDuur84",
  "key19": "3rkAEXSzVV42T6GYjKqp5GayJCJ6o31G9jxxiux9uERxkgn2FNykXZJKmubhrF2LYkD5N2DpiGA1y8kEDX4qwFnE",
  "key20": "61J58xDZ9rynMvhmAQGQU571Mm4g61U2xYo1NrShXwZdr7dBKP3q8t3kKrHZmzb84X725njHf7qUBZRLPxweXtpm",
  "key21": "jYSEvrirh6DvZ2yDryveDYVTg9g6CoLvNtRAgikfkpaaQ2Lq2BQFUm262CqUVaN1ELTJrZHWybx2WNQ7sHt6W8j",
  "key22": "2LsGWMZt3V9it3Js7xLd4U4oRusyVS1j8CWjcnwL9yHowEz63DoFhEKLVLMk7BCipkE13kwiJEqFLiuvTTs6nkwt",
  "key23": "6iveUGaxbYu1MuniZSJLr6K1q1iDwLENDSvPS8LvC6UyFMCirQ1S235N8NMe7aRLyciFuKfStU2wxB3szd9brFM",
  "key24": "3cdjiHGDtG3B1cNS3F6LoRN1VK4tkiY3iawHJRD7kadQ7A8iUqpgs2Y72RbqY73Ggbf9VkJuBoRNB7oyuCh3TEcE",
  "key25": "44u7qEWZMJqE2ZPvt3UkXXZn5jGmL86o9mFY4BGh14ybrv5qx6QvEECnkW1QHnv53fDbaCeyA3b2nxhsNM9pKyRB",
  "key26": "4UVq3yxwu5VxKHed2FvDuVxyzpucYgQuWxZDEki4Hy26RYSGLqfFrTgfvDdsQe5DQAbyTcXJywedUXcQARzGWvM2",
  "key27": "uXcAmVjhGmDp51dLzB57MxsifzG7dEWcPurqRsfANLBE3DDfVkYqu8Zmp2L3YHjmgmag6AkUpox8L2kVSRbp6XN"
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
