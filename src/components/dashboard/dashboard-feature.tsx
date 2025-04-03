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
    "23C8Ktpa1zYagcsijSkFATsEXRnneLGhXsWbdodZpj7B8yCiJ1pccXLNmhDc4bYotyBYQeEsS7CHA8GMQfmKVxBV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32JfbsfTSEXLr6cJFZcBW9XALRh3ip3TnQo71eAQ412ByEbWdQYyDCqZeMKzmoejUuHCxbNpjWUrchyvinyJdPdT",
  "key1": "3zTNBfqhbAvbadceomwtZPPoUWiRr16VkPfR6A2kELMjMFyDkgDQTivY2U4zFCPzKEmYT1yQwt6K9F15BhNwQGmW",
  "key2": "3hnPg4VsvW3z5cWjD7TAs8hMi3iKFp5YqatvyWHnpaV68PV6nvovRecSqwuUEusEdXruvXotgAqzhigXnSdBXy1D",
  "key3": "47cqxiruqZ9KtwBYJHHFm3F6LdQnnmdrwbzC5167aY2kcVQtB1yLWuNWNmMLFZczwdhWVuezNjRy7AFQstTztHUC",
  "key4": "5ApiXNvPeJWUVsPwFexNSYbrefBXRYT24aiVK7eYcMSFe3ReKTKZe5bdnu8Jtoed5U6NDamefdDAxrMXDSieWPtC",
  "key5": "4KL2VboKpdPERp5o2UsnG8Dz7Vye5CxwVJFoSyhTuVPvHbEnBfTNesmHBTU5N4hqeDgscWdjAzw5uymBe2pACGSw",
  "key6": "45YbevDZDpJr3wEesoLvrSXv7DhmDYCNw93wYuBvB4yVbvEEFtERDwZofJm1nsSupZTQvnPbxtowZysdwpFhGkpa",
  "key7": "VsducCw48kRrCBsX5KmmnRdEDNcvRdTd4FqcxQmNcko7KLyDgqNbp5gUmYFoVfJxVnjjEPKvhgZBN9HhFYxXGQW",
  "key8": "4AJSG7duxNkEBd4UFJjs4agHBQ13j15ChhQtuTU8EXTg9Pwv4ZbEeksvnwBoofqEhXs4z7nv4jNQbb9jzNQmYfSq",
  "key9": "3iJuTA62QX9GdoS7XsFrAQrt9EEpGKbSzXx65M8o7LytSBoNGiojPfKE8sFZEiS6nSB9GKvsHTb7S3xgTMNMwU4u",
  "key10": "LNqhbda4bu6JBbmNALjZLhkUo3p4CigHDfW4EaXbpNdWwGTcaDaBLaoJMt4rACVhZ5Bjke5bZnwq9ct4kDEWfPJ",
  "key11": "5tLc1mwFbNYYoWiiddmEPkcxsaM7V2zDPZbAhT9MA2A4nPsJuRdJEjqb46LekweUdzgfAsN76DGoERz5VVjk75Lf",
  "key12": "4tbPwUmnMdGrizyQSR97CxwcaFML75ebcq7XhCLX7veL5YF68N9Ya1NGEd179STTN6DCwWVkMHC8m7uTvgfgCPNS",
  "key13": "j9Q9n1aE13ujMknFCHU6GF83bvA1oDpP1ec4QvcwTFQ1dyh3gDnYA7KZ75iLhFofJbS9dSQUr7pzrhSqHboTd55",
  "key14": "2XfcEDivjKYiDYhNxf8Lx26AFsnUHGSwC2Ru9SDHpgvprp5ZLoAtXE5uNfaTicEMzEUz76GV6bqjaz4DN1YMW4SR",
  "key15": "2veXNirfobCScrTYx7pJg1b2tV5UjEkLy8uQpQbThSKfX2CVd1BTe3GJtxEcpJGmUNcJeAiBXf9HCd9wnUc4umKf",
  "key16": "4Ka95AEUf7bTW2uZLkNBi2hLGJmnj7AW3ibYiNdDCeV4wWfFRovjJWYokvd2CrcWxQ8pAySbmnckYgeGaTGGNMsw",
  "key17": "CsY36opGQYoR9GbrZyFCiqrh317tZJ6Jy1jkUhU1xWNYsKvLtpkvXDvyavLB7WjqxJ2vYZDksLykxUXErXgZYYF",
  "key18": "tp4RKMtKZVYAvi4AmhLqyewt5Arxt36RMehgGYhnxk8kGVoKgJ4iZUun72iYz8carEakSAvd43QSnKXjiHDDCHZ",
  "key19": "2mdgTELZrLoxeMENnfs9mhC8RrVF7oJaqPh25E68NMhLjJu4EYjE7VxnXkR9ciTNNGeiNDaEc3DJKvAe9zk8Z8A3",
  "key20": "CTUD4XjvfUv6Qr9NiV61JjcCgKUXAWgNEBzqCE6HPKBgHYEZzt7J8jprJCejedArd6WRL84BiFP2zc1uAb1vGvW",
  "key21": "4oUBSFp2CACSCZQMFjPeEpcNPfXdPRhaRatrhh76GTuuVeSpkShLt3fRUMg8RDVmSPq2oQLg23e8G1aEfhDekLyQ",
  "key22": "5Pu14xXmdDagVnHyEjhddkWEVhC8tfAuzKh3LMUX7e7AaMbAa2R8UFzpsUyHJtE2E9hGQ1wcKUyr1Nc7r2HtiPRA",
  "key23": "4LX8mytEJ2LEsHrAZBHrvquRFopw3Y1zT4hc63LxFKeF4s4RTGTDgyTJf6DEqsQQPf49NoL6SuM8Sa23by3LfhAX",
  "key24": "4YxtyuQufnstn8ftbVSAD4it6VJy4f2LAMXRrQpbdVXbqyDsNbEnXB8RnSdzF3E2aRAd1h6wCH82vzFxHEXNbJ9N"
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
