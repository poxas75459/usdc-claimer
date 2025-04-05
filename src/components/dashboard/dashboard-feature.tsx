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
    "39dDifbFUfAp7EoJRuCVJ4ZGZpK16HW5b7mkMHBb2fEhXKmN7S6fgFE652FoCVGBEWRyFXrmBZd4CAoYYGQub3t8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XbgfwMLbqAnD2hwfp6KFL61RGknAkYvhF5aHpJS77XjpHyD1j9sQVyvu9PFzWmmQfJKDZqVV49JLDuy4GV1dEn1",
  "key1": "4YuBqiD6sxKYQipC7pn8EJVCbnD5d5hr8jiYRNiYNCjDGferEsyVLhHDSkQTtkdfxpT6dZpRz3YLtHaUnd4ipyc6",
  "key2": "aPjc6FeVeGjdD33rvb7icKQf5SBbsvZkG5XHJQSNso6mSHBS9P69iHARhBofR8J8dNjdzq7njnwTdgn5ognRZ4g",
  "key3": "5JrbmD8SfQ5NnNAGAGBtguHqxXcCGksCgvEHE4BQ7efnK7TaBX5gsTjWKjsXMeNcnNXG9ZLox3wUQ5gbxaTSM5Kn",
  "key4": "4JcWgpunXMZ8czVkWaFmypzoPPu9UU2GyRxo427J3EQDzTrsRwnnDVAPrFZVhxmyPX4btVBgUxEQ7QFfUxAsKwDm",
  "key5": "vADa18jEKBNAK4RdaZ1MmbVzfjm8TuCBWC6Bhv5GfppQ7PVGLQh3AqSz6B7TE3xKRka4DYVrLYkKE3fR9titBk7",
  "key6": "4CaEz4LV6cKaGagvDd2XRGKZ5jpS3BFsMbr9YzkNabZ37MuZRRaDu6wuW7h7J5FNo3JESmRwoRHzXZuEz8iqqbU9",
  "key7": "52KkpKswFtpD4gBczemokN3DpwjdZQVDZ6WZR7RzwwV2sLHe4YSkD7HQGz6df5YTbefYa5nXGDsYP8DA8yfuTjSU",
  "key8": "2HS9coTjPAVfWktajaL36XPpzT4MK5XaobDt1zi57nWuMJyCsCiYP7su55TT8c4Wfw4RszZFwiVqxiatr9MdszVm",
  "key9": "4hdBu3KJ1PLVtKFq2jna7oAKEjdmEWnyePE7mD1DGxRekPLQnmxn8YzZiRa3VAGPdrc4TseiBQLABEzL7jA9VY7z",
  "key10": "4q8ndnX7emWi2JUAhMe5WCi5CfKxhdyRnsy2wZ4P71VN72woJoCLdsQYyaTeAm2js6pjWi1E7mhY773shN9353Tf",
  "key11": "2ks9M1Jx61hAMFWiDMYBv3e59euu829kg47uu92YAYokb91bKgr6MKFAPzFRDpGmWHRkXX8UpmuSxgg5Y6hBL2Zr",
  "key12": "5v4yNnFGitWKgfVrEaVtKgAr2Ujheq5rLWgJGUSEVWHz5TCQ4E1Ej9ecHSWNhihQqTySpcpYTy9fUVpUyZSpNYfR",
  "key13": "5LNKP4snbgrmcUK49tYw6qmBFkwvjw3QCRZxDaN9ZJMB6dK1KBD6fBngMXfEK8njivoy8HaGPRWbjWr5KZqoCm62",
  "key14": "3Zq71CFZpFmqVVP24md3F72jsRPvwXmsXaPu2Um7ZCE4Ttw7pY3asNpe7Y3kBJzw2yYRc7BgdVj3yF4HcAHKFrjB",
  "key15": "dk3vQp6CAgj9oMmD5aYz99yUzEkpV2xii1YKWK94BDhVc131EG6yY1qPTqrmst7kR7Qo3ovDdVbmbDQRoqkgZ4z",
  "key16": "5UbaQcSc9frLhQieMBpq8o9VUgqhgwS9uad4vZ5sd2APUhhLVhiKF2fNULGnWtjDvA5ZLg5ao1b97ouuXzFjXBLQ",
  "key17": "5xfyjFCbzjL5Rb4jAn3fVUxn7Fftwsn76NhuGPQ3ehX6xehaqoAxnvJ1wPDbExMzTr14PoDr1hTzjVteGFnMeeEF",
  "key18": "3Sb2MBdg3C9xSZL4LnofB6DfSh2nQqRYKdSoLTwCs9Q7rFKyGn9F7PFYWCd2NqWcrpjygmknJBN55mVsW4orBWEF",
  "key19": "38wLJtaEduuyrGdSvVvYZm5H7uaMQkL89jsb92Pf1id4n4rseEU1moYdf47tfSLV8zDwprW3PeYJ79j9VzaobeGR",
  "key20": "2WtoNPPrqstN7VSBbRqFAiK1CzNMRFe3TEkyRiyM47cyCNFHKve8Wz6BsTuMNfYkNfvDFs9fRgAWdHsPj3R7nMmc",
  "key21": "23ULSaBatgu7a3jhhCgBccfae2ysb3m8s8B6JpdTeKApgqHsGes4tbY33GDRV57mtwDJQMPJrT3WaYveLxjYzETX",
  "key22": "5H2nNuppDTVM2F6y6XFAR2T9idLcWSVud5qfjCU4ckhKBioeghK7edeEkfNS7cVciSabj2bQj9B1Na2tmGFsbZno",
  "key23": "4TZ7fSGhzjGmEA6kS1Bo5TuCwudE5sawNbZXcUFx8XvwFm355N4k9b3x3K75ZTAkSo1jRzvZgZoGMM2jDkjUJ1QG",
  "key24": "5K4dxwvHuWLs5vJteRF9GHKBQbbcUqLk2wjrzR8QHLGWduHv8d4jPZ7xjZE3iAU59S3zhNfMxSDcmTiNkpy59AeE",
  "key25": "5GxzfhDesgczZHp7J6AuC9pcCtsRCrAsGTheWFtDkuWuzFCHrUQmiyABYQdZaXLY1sF8A6QBMPKVr1Mnva3ebKZ2",
  "key26": "2yGCg4U7qivjngXsVTrrQRtZfSScyjut8RvQkfPb9nvrFhsnFyYfM6VK1yzpvpaGC2XmFpdM9ceP5aZ7Rbrti5YY",
  "key27": "2YySyEy9grDeGx4DnFMqbUrG3zkcJVZLuqrXrcSsEGry9U2jGdtvK9k4bhVHzquzXYbfjcdKz8M13fRachVj3Q1v",
  "key28": "59Ub83gkJu77XwjbY9xLDzbLqbCUCaYpyJ8tzgi9nAadc1iuvrsbco9zQme5NprU6JoX6uDNyW9biXV8NFc5Kn98",
  "key29": "5iErDmYugAfVRznMWBBkqxjQQSDjrfaWAUkGTVkoXeZLXU4e6smAEZiD7T7c2pTdVE2RXVHeiHca3WMXRApVyRaV"
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
