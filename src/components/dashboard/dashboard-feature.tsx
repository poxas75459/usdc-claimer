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
    "3FsbEmqQZ7X4549738kzny6CF5Z8SZv3Xha4MNTdhFERf6cdJK2PmtojMkADFgpMk1fywcdnpDPa5P4q3qozcZBL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WeAB846A4HJm2cXAnMBqhfm8v8oSWEhpwwUKcy7UBdkuWHoYRop9QoAmbfSmsdKLJD5WdrQ1beQAQ3FjRnDWnNC",
  "key1": "gU5N6SBySp7q2N58Jw4aKdwhuT3WTUbP3JkZyEMk3W6NciMJ8gbyhAvLr2VkJ3srYCe7zUKDX4MYsd5ufmktp8d",
  "key2": "3LBNKF6CZZECeUvDFi81iV1yMYFXes1RgwCEM7CJ1Wm8BRe4fEQ2DnaLbapcuCtEzpKpH7CbrVK7Q7Wq989Cd83J",
  "key3": "GqVFqxHbh7CT26BFM9FFjMd4KeCWvi85oEQyTUdAR1gA4P6W9kQt4jPooeuw6hd1R73vHMc4CVA25myae1B6yWM",
  "key4": "5jkr2TAbyrDoGq3y4eyyDWnSxnCg6Xi1cnbJM4dftycFxYcZnw4Zw5AJPF3sYZ2HQbq16y9v61fRHSUmRgtzB5Ya",
  "key5": "25jQgULDKcneXu71cmTUi1ekFeCseXykNjnYKHzbrPVLJvVGoojLjZGCRHk9w4Dggt7tZ9wiQvPqGuwQ8cuaP8ym",
  "key6": "3hzeWcPm2odn4vrXQVYTBXKAMD6z4ZummrdxdWVr9qmPN4rj2SzBBvViZcSpybovDy5ZcAzLn63PTaKMChTyGdMc",
  "key7": "2PcZcvbBV1DnhzuwWL2XhBThQvu4x3rTX5s2CZ5wfZ97gbNALw5q7Msj4d8aQH4cmfgs9V5MM36ZTMx77gGtBXgf",
  "key8": "5um5LQSP25J2WoGHoyDJvufPbpgCARgprEW8479n3kE1WNjvCchUsdkGrWSDCFMvrnczRGCddFEycNDk3BDHP6Mf",
  "key9": "5suemzsxAUhe4Fp9HN9eeSbzv5zo1WStsDqgUpMZJ2UHQJPumN9nUC8hPoUFyYvQosixbhwnhZKwpdvpsC9RKfRF",
  "key10": "3yVh6HrcsSbbxmAYbDBAzVYAU4rbC7sTsUUmfh45xKFP6nPeAuyX2Vp7Y8AngZFMaR8SeAkMpodeXYuQWixp7Jqh",
  "key11": "2zGTGVhqSPwBFdXfXc9GkRQb6T5VBPqQAzi1W4G2p5J1hCWQZpHMxtS4fCjD4tceGS7zKZMuXamSH86ho4DDBBEe",
  "key12": "4CPxksfVFtiQYYKL7b8Rg4eCKNcMgHcEJktgE8e1tMMVyYv7ov4p7BLXA5iUP3QSkXLykuPKqXjdKLoRVqDnyib9",
  "key13": "2A2kKAiwwFi8YdbrU7gLw7bwjoiyBgmDa4jtQWbg9W4hoTwhojGta9hxYp4v4ZAQQMMi9z7gbKsYKc8TYwe8USgL",
  "key14": "3i3mFJ61FqG17z835hbP4enHypkXbYRdkfKKVoEQKhaLvfgYwJzhXvdwFEaJ2kjLauwBosuqUxoEEn3aJD64SNk8",
  "key15": "5HjT9zCqcZH9u1YWeBRQ8oAhK4pvGeDh1yzD2Y1W57Py3posm4sCvhgD9eiWMSmaNCp1Vkw8c8r1S6aJXmxLb9VY",
  "key16": "4YBu72H3H83aYKD835QAYimVrPeF3Q9Ma4WJ7E23rswQiPA31JtCaFV1BcggcC2DwU36Wc8JvSJTpyLY4BKfAjqE",
  "key17": "3u4P4V5kB7z8DLWMx5X9ShgczZ98iEP6hvQSvZYHNGwNLt1gdeQboYyR3gEDtXNTS2hhqHrBNgbVNA5FZPper4Dr",
  "key18": "51jESiKWo4MPWzxXCd6Shi7Pre3eZBQEBJQPLWUZ55zuQxp6WB7sCM53THm449NftigQxrXWikjBxTUN4DjbwcuT",
  "key19": "4FYF94pVtmqbvjpjMYNP4fqVNEdpSXj9ASghd85paZPpYaLExyWjpXufqb4ErE5WAcGviS8aMarmzmWdgAGFutKK",
  "key20": "4YZXtGJCZ7cuWvA9tJareerwX4qmBytoXLN7wptQ6kbpekRftZybeiw7CL82TWqH5TEYXfvGYUEzLysH1nHNKCpq",
  "key21": "2FYBRojU8ADvFVKBkpTT9T4zmWxDbbXcoRqJGSrco9voqDaDfAp2pA5y6opsWCabMoF2RNZzTHLWexFRu5MoFCUA",
  "key22": "8DMqZ7UqjaV3imLUrA7K86yuuARNpT71BNvxpyAcijiwM7gn4LaZRa5RVvDtrnhcfJFTdj2xqACB5u4XBAbu8Mo",
  "key23": "65JLvQLLikomRffnUcgNXzdbfwg5GKWZYhRJT1oYqvCweBg33hoBA5J76cGofwHk7gtSF3FsJfDeS5eJvvvppMuG",
  "key24": "4WPRsRspGgeRKGaRvQbgnY19NxAhcQKMPpZpt4u1KSDSnLhtoSjfwzwuP9zNfZ89rc87DmuzpHDkL7qAj6Zron6a",
  "key25": "3yFsHCxZczFtGPScNqhKFiE32oiuuXrwrZ5EP8LKybeYaGZfNdf9vU5aHktrMWUvwnuXhkfGxNtCZcnx2MRybLFA",
  "key26": "3jxefuYgxyLML5EGFNgPvesaNMvmXreB7fcYyFe1spuSfhpnTfQXoPE6uFzJjRufnWnYrzxyRKCMh4pLvStmMBzr",
  "key27": "34oaZbgfgLtbtTKiHQCHdoPJohdG5a9t9SEpdFPVtoiZMKLPJJ1zHWLunNeqCSB8Bp5DLdqF7zw6vhY4hJUUdNR8",
  "key28": "4eW5rSAMuK3aNvJypt36EKZbfCcd6ep9RJivGwBVBtzY5LZxxjU9G87WjxafPk44nQAzmrRtLucgVXYW16apTLm2",
  "key29": "57DBBJWsQFemwarYvf265Awyr15Gxgcb3wKeHmzKRhHT8Aqjx25Xit4RmLcsmuSXkAFbw6VEXtdGW7hffkaqMvXs",
  "key30": "4XNKJPFcZy9cmUKruSoTgC1b5bipvbfgFeEU3z29XeQXzV6eP4zkqTx29x2jJEHUd2ow63Lr3Wa2zM6LwimgKHa8",
  "key31": "nPDKMSbTJbSz5VTpFHoH7pzxRkJY3RSxTWtji4hYBVuisLJPKYEeikvBY5JDisc78jc6U4sY6FcHEDZgCBdhuXG",
  "key32": "5CZnr34nNg53Yt3uSTFdTDaX7TGuxHWk2jTS9hjeXiSBDtvkx33d8cBfU5k8UmUUPiANPsuPdBv5jmLCxxtfTTPB",
  "key33": "2pR3BaqnjqJZrVTSJ65e3MDRMXdk4EQpWdCo1CUqwdgS9STQpa6LtrAtGM7mwGkY1PxR4NconEgXQwrH93UCXyRQ",
  "key34": "5UuxxF7KY1vSF856QxuFTsdvMQLy5KrqSMW2jLS1t5k8xabPoF6ZeEA6iJzGjjWpoDa1DCpWQtHZhYGwxjhzktA4"
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
