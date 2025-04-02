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
    "5tK2RCVwiaMoKZTKpwMsiLchz6A4Bp8qain3yKQhCTtaVPF3hsPW7JrpGGH8hrniDsMRn8F375uGVaztQhW3E12m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AWHdnjqZn5VovyEFRQ89jDRGxBJryWvxrA7RQRT7G9LHKhNJZEdhYr7Fuz9vyTxE3adwRAmVfkHfRRa9ctwyYwK",
  "key1": "XwqLo5UvVkb2hRp5pSVPA32Y8kFT9CesnHi8E34T6FWVYP3ybCQpmigkhQJYYx7FecMf52nxc84PdgCRhSXRsrT",
  "key2": "2V7oPA2Z8PHtqzB7LPUnExo4VKj5JheynkqLdxMJLLxwF72EoJZNTsnarVanVuaorHmon2k1QZPxc9PqSxBouB49",
  "key3": "3443LfDcmEYXortPbnFiZrqpYT6WtkLVH8htAr4MpSt5mXV4gvv57DAF9TpPiuba8mTVBCN48gu7Euk8TiEUGU4U",
  "key4": "5eXNk5GkwcQ6zj5tVyLymjK33v5GRkhf3N8CdytRHvuYXuEoqmFX44dEbWzu3W3ud6ghvodfycgGAfXyv1Fcahxh",
  "key5": "62DR7GMZwCsbE1nzBb9zDnEPAmZgjdq4ACGsKSkN9SwUjRwdDtEWZ4ce9orX9AsMP3gq49uTrpvRn22ciqAVvFxZ",
  "key6": "4E428JndTp4RY7iVR3wq5FvWxH57nntkGyJns984vfxFkmzDuPq8wmtZThV8ApceXyKTEbuupJfGbLVBaURVuFmX",
  "key7": "2rqCq7DtCTXrDxUSFhNxRY5zhJzWitNzSe9eYzLY1EHLuBZsNCfcZQTytQ25YCoaNe7duhdWg3iSYk6jihQoQz7N",
  "key8": "4b77nhTwRgkk2TKpuEDFbyssiWGkVUvCueAbyKRwXNXLHke8268pGezCMYKxbXybR7GCnLN8ekgRmz7kbgwp2A31",
  "key9": "4j1uVXmRLZe9JMZxXjAUupjskPR6qCxKyvwgTFfThWaHuEakJyx7hubr1n6fsr1QFk73qmGWyJZZpfngiw3kRwPS",
  "key10": "bfTUCdjhkmj4vyQdMionh9gbmLQpQnbxCN5kQsQo7grxGTsBofS25pXzavPDp52ttU6BFDhVXDtSwg8RGQh91V3",
  "key11": "41ULs95U94LBA96RCtrawmcW6v9YNQCeroVTQQEa3aUNzU2oWnvtMqJubZyCPUWoLFB5HuHVnRAnVDijntNQnnRk",
  "key12": "5Do2cBEE8cdzXXAbixv1KXEAWqGnREivmdoQPFKpMPvmqjjDhJ9GKbhNzHrjh1dXnKqBMzXmWwNJ55Xq4iUACkiK",
  "key13": "3JiXA6EP4atPgRNy9fYL4iWedD7a87BSVBpUprrCDiRozfVCJP4kgUm7SeABjzCuwF2376GorCc5ABgH4kuJ3xq6",
  "key14": "5pneZsLa3pXrGW7SBGFZUHkkp61p4zGxRLzHW3KiSmGRjmhfs8ishGb77qWvnEtUYm1tKHZiHpkh3dkkZ74ooU3y",
  "key15": "pBX52aEVefaPaBmd75LUovzktfqTwdshoLhTToqGrWMtG2KQKwK59HTLaCF9GdmxFKvtEHMhrzxiPf5oEHLouab",
  "key16": "2U2zSCLPT7JV8vPe4PqACiAQwY6xo7yyS2GGXY2z5qMdZgYcasf4HiwdRHZQHjRfPdiYUkqNMinmAmiDEN21ri7F",
  "key17": "3arUXcekqb1WThBqYx6mmDwUyJx9zh6AfP9zyuHf4CY9FDiJJjK4D5XxvWzgFsgEUK9KUMYpxtCkWwfumzPj2u56",
  "key18": "5W5ngTq34MqG6hxZBGzzWR5aj3LG57AivBK8UnKb9k31L75wUeUd64L9YXL1NAvq4u7GmQzi6XQN8srAv8C2Y6JW",
  "key19": "5yUPCbC1pj9jK2M8rNPZshgawRsBJthaQbeQDss3RPNz4o4YWFqDid7BAkTq1BRyYpqa1hMu63ja4zh4JD3dfhMo",
  "key20": "2RSSA7ZugJ1K1rVHVt11Y2Mqw7Pr7C3cdhidm59Y3T1aTF58ULsSHD8ENXYFJY8MUQityxXpxqTCPbPEHWDEHJkw",
  "key21": "5KbW68xHS6GH66bQBK5VRvetkoqJM9RyPPeajTJ2xTmG2Kgn9vsu1Rcd9E1vnRUWBYdwLtzgoDzUkQtiLn9nh1k",
  "key22": "2vqKMrTnXkYmMYReAqQa5CQ4g6qZ7cCoFhBEAJW41fQqb8nUoPNjf2hRAtdAcnA9QhEWnFemaL8jNR8XWXYzmBeU",
  "key23": "pDddStUhxvn8jxVBdYFm9zobFAzaDbS49haJi7VyoUk5gTogkFuAdcScibUHQC2xz4mcH1sw6nWcUi1pCReWRAh",
  "key24": "3MFuYJ426TgeUYESnJCLhWLf6Dk9LUXMGNC3naLNCDEZNcfV2rzRS3nHkXMmmWRXP3SP7mLm1qsweZmps87i852e",
  "key25": "5CkdejAn2qrhMP4KJU2SzN6L1YEC2fLu5cL1BRcKEe3kscBp7qvrNTzwksoi6XBTMzE4J6rb5hES9uHZfZv9s8Dg",
  "key26": "2RAc1g5Kwu62n2gaTAtPbUgYs571SouEwFcdSsR4wydhcuM7DPzdVwJyVzFWczTPHL2coDq5unDG9oVBzykaANUG",
  "key27": "5snrgVhPZ4WzmKCDsYnThi7Ww3Q6xbs4jG71F7wQq97AnNuqJELHdFtVezKg51a34GdKcbMQWoZuciSx4LT6SEnh",
  "key28": "258WFSJ1amzFAQSw8k1LZpDaveWGyYKwjDzdaenp4KDS8hXyKq2B3MKoe1DYkLyZ7yFvxYMx8AKxrS7nac2nyiqS",
  "key29": "5JMVqvUhiCnPVrE7qMCgGZPVN8UvtspCuowM6E5Xhtus66S1gYesMYdGMBR3dP7tfAXnZtYr24wv9XH4yhj8seuC"
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
