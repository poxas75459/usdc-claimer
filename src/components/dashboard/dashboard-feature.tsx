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
    "gULsMBJEb5ytAbKHjznoLJx9TNKp2bQS7fWmn4KmzUn6cij7K7G1xPRc5cFELF4YYhsVdkXutQJ6AhubXzPjduG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pmqQrxrX6kTsoAcqbzx6guzk4HydXC7zxodCMg939HE22jKwifRmhRVx5nQ9ntdmY1jXFHdo3ugAhsvVC76CwmB",
  "key1": "4c96UU1dtxdab62cMh1KT3DHLACoq9fwPhdam9NFsuKuq2XtTmv2KdrA8gVFViz1x2EcPnnuv7Xt8Z3ZYopGJ243",
  "key2": "5zF43eUGDzZTPVbo44uZwUQ2gAeUMviwKdCbu5WKFmi3exthkRC4qmKfsZFyPpAUvMFEhpCTzRya8Z8r4VPXQBFX",
  "key3": "59EUjrbQC3XbBf8SBeFdj68fjK3gTsdwVHNYWBW4SKyZsGgfFNpzJ36FiKJNgRTFuqQrWfVpPheNgydjDdHqBrDy",
  "key4": "4QpN9ooXPTXzb7LaSnsj8VoFSTtno5Ryv6oHn15okf4TANCcS2o8zgsQ7wy9ZddLNQTqHtSQA8kZ8CcjpGBsuNFN",
  "key5": "3qqMSfJAoVM4dMP6xE1EM82o9LL6L11vyDETXeTTwkqLkLGLnZhV3XtnxdGuoL9uZ8wUZKR9KJrSa9HCc8Ai5x3F",
  "key6": "2bW5SM6dx5zuNxj96By4jVaZg93HFm4dfHd6eeQnSsLBq8r57x199e9AEVwUB5kEMsZ6VBPTMnmNb2yYHCtLF75i",
  "key7": "2hvaUqhFH5sR8Uj31LQLBivhzDy2Zr8ZCpsHBffERZZsU7VGCUsY3oRzJeMgrJHNNwW6eZBS3XG4uQPa5RqkdUWN",
  "key8": "4rw6g1nsHcgDx33HmUav96NHQg7jbkt9n2i6CsWALseYRB4X8hWDUzesmC519WppWjWe62FGdRjP3NXDZ933iPtc",
  "key9": "4tJChuooGuh5aVbXAsY8bNYH3NwSdxmsgziS7iiWzjLubFjiAXMUc9et1HgPuDHMsdqvBsNVBymbQeHLGQSd4x99",
  "key10": "2j2Qk7ySdNzfGwisPwoh1Nmqbc9KyEbLgffGKi3xqZGYY88FtfFx677xCTeDHc41Wv5aTMEbtgjjYugowTsWmbxu",
  "key11": "56KGzJiszMzZBWsEFND3CgF6wFJXjGdhqzakopgSNncTH2sXJR8Lwg2yjnEfnVM2S7T2io3Cprwpfh4oEHrrNaYJ",
  "key12": "25jW6p2iMvYsVUfFYnksNzTrVdTcKbkQEydF8VBpmBa5JxK3K4rNAQ3r1u125btSbhCQmuBWsYfdq55friwgf1Ey",
  "key13": "5hzGBcuWCp9RQDk1x9QWLVriZLRXQwwxfj3dUPmTg9CW2KcNz8KFEyVE76z3pruMWjcyGxKjLETfrCzf7hX3MjkG",
  "key14": "hsJe2hokMm7Rx7FNANJYPW2AyX8minaPBD3Khr4usqCJE9M7dLStZgT8j3Gnh84Kcb1Lx83SouPU4rwKRVErhLT",
  "key15": "5R2uoPs2bMjBQ53rVvcy5FtjEryw8LTaBGLMVK9f6enC5Ru8J9ScohNP3HbRSQYqHUeNBnSfWDG41vUuzuRiTF2d",
  "key16": "2o9GExrz5pDyFeBxHCrgjsNHCURdxd9WWnbBNVezjhxRyJ7Dj6QGNc9NGaZrqZqVXruiWxTyrvdNkbmJR2bbbd88",
  "key17": "2HLKq7XbmgtJBCTwjsLkEKpCRxewqHvw3Jvfv3dHu4rXyYQguBsagNA71jueQVFqPmKJPxJxLX2EBqg5BTL5oHKv",
  "key18": "4SjZzmtFWgx5Za3ppSV6ASXCtZgQ9aytp3QL4RFVPwEvmvMPa5L9i7zxcsgHP34qNfLEdfg56cLdeXqSmVzscyWL",
  "key19": "5bjnzdLzbAYDd459HLAT9xyspWkVvVvC6hnuMJn6puVU2ZZQp7DnnKiRpgrFmrc2CKTKvuwbE5w3HW1iux4WNMBZ",
  "key20": "2LsN5dMYVnjCirk7RrpUV7YgMQ8vecieVqDuKkd1BrrzM3wUoFPBwptXRzYqH4d1kDqrcVTNyBLa5kSHQqdENv9f",
  "key21": "4Yfvu9MyvX48qkE8Vuajt5zemju3QQxT5dFDi9JfQNQvHcoi4xXXsXja65jvWHgjaCi8erKFCsYLKkH1AWSLcJji",
  "key22": "55Ndo4tXkBz36ew3pUyXg43d6t8KoJKMvYRAh3YvMiWRe4boXhgBeQcfDxPHvvrDzGHuaXJk3vR1uJpPvpPnMxdP",
  "key23": "5mJ8d2gukX6hDbwqHDzf2wygYGTf7sVrWKmcTkdHGaDQ76DR72i9EUeTnVp4sLdnMU53aRBCb1aYcup3vRyZ3hQL",
  "key24": "462z5SLFMW7Q4eeRhqdoaWMjsrGAKp5b2mz329C6GT4CJp4iGsoVkVa5Ezc92G7dhFpMscsBLo2BzV4trSi6dZzE",
  "key25": "3EbsY1EBZRcXBYhxErNXBtMLQTKdk6Rtc4RR2RAuTtY31Mg38L4r1zkeLVFiVv5ESBCZBPGLHmh99iHWLW8BzZsk",
  "key26": "xQLDfTgAgYVQbML11H1uMc13ZQh9orKWjTwHw6M6xQXeu71RUgSDp2MwrgAG6t6xEg4EKToM6xZcw8mLLnedtCr",
  "key27": "4A2qr1oGhHHvF3czMcQirtXF4J6RvGSQaCqyUT2S2toKXj5coJqVuUTmW1aNJFFGLyFVzGpVwxEAuWWZTrXAJ6xW",
  "key28": "5Xkxh1uBM5tuDKKWdFcKnTMBfgjFsCqHPJvDGdQNEyXCnTtmenrFm1Kje7DKBbLoXEyBuoHSSSSwk9jpcBgpj1BS",
  "key29": "5j7oExbBH5KS1MtjLfWVwcWzxM4myCW4qS5bjsPfm7xnAwfuqiBu59Vp8qdGYP1T57yDYGUFHfJjS4wuWMwfkHHN",
  "key30": "3WGrU5Cpyp4d8qKp8Ya5NMd8PTL8ZarDY2pjKKeU9DUn7ipBvNMgJomoMJ2MTmGayLYAGYAea7tuTFVyQmz7dtjW",
  "key31": "4FtivrCVAzEyf5G69R6nNGsfRYavj839xdzGsf5QqXsDxTLYjxdkXE2NuQ7iVYrMKhdyx33qBJRFkoJBkHZrhnyX",
  "key32": "3ZtdUYrYNwWNt63oq7n5hM9rZzt1vyEBPxuE34Zr7vLZiFh2e317rLU5mfNjtxrqChjZyi9ZWn4ZSVCi9FnevXn2",
  "key33": "38NFN7CgfPvufhT3DDZy8nFoatQkPYtsVgrP1AV8WRA2yGPSh1NsTM3ncyYgE9To8WLpdwf9wLW8ttS5eEtNY1UE",
  "key34": "42JE5nqECGp4oxENUWASjaE8FQY3jw25Nihmh47Duq3QniNzbw3fzGBhMHv4B7AdbEDcKxErEEzUMK7toHtjorzo",
  "key35": "65T5c5PEHuxrV5D1X8DPXPyWJZcdkNUcN1ZgZd5zSh1poi3G3bdA89UYoCwDdVjnqg9zmi4yz8jBr5UDMQrY3VBK"
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
