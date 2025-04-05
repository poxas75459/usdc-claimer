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
    "QyE19ZA9vUF5BvNooCz4dsirsMQDCXeiAhHzWDHPA6KFiEs9aTv2eJ8LveEAUHTgAyu9vqBRxSBjdsCxBfk38hX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NF4xJdyR4Y2rLwTTiDpsof8pWBWTvc1TnkRnz8wPjDoYEF4rbAm5zAXkSAPdscK2gFjDNbPEMrnZXMjr2HzN3TL",
  "key1": "2URTmr2nzYpxmLNA7ZksKq6A7YgTzjHwZQyK7PKb4faZe4ZPBLk4sAeYBx5EJEna9TxkBwZweyVe9xZ1QVvMRGjg",
  "key2": "3DgQ8dPnYQBqQi2kJFvCWvDQdN2CsuXddiMHws1Husn4jaBNybaWDnoigpoXznpKvMVuLj1tGQSr2SToP9Pdii3R",
  "key3": "2HxvCvBrENrs29VFzUeAPiyou91RtwynHCFB7oXvBCtLJhkMyk1uvw8v1neyVK1BQGTj6jLBjiqMarak28P3Fida",
  "key4": "mocaNxdHQEKeF5UPT2LsrpRnW1x2cGqaiCcspAgvP3MNq1mStF7HfXNsmx8Jn8ZKGF9ZT6SF7GVkVzSCWieS6Fi",
  "key5": "53BWwP33h1Trd965rKC5gNk4tuZfPkYMrTbqGER6xjJQcZ3cdXWUDMQrGkEzXikVf894BrNG1qTDgyu5m2TSZQrp",
  "key6": "4ehPDz43YJMk7A3STBADcyVQSn8hUKoLxE86hNrHftXQ8ojstDcPME6Dic9KyAkKQEBH4wHC32QzJdz18qZN5ror",
  "key7": "3NsuueEUFNtMi4AJruxEqateKHv8GfueK3XigDVD6NoSKB3KxrVibSKjH8rBwhjRgvG1zoWPx3NytFoPvWBjiY3H",
  "key8": "6jGhNnAqPEuuN28t3oAVMivHSmwXMEmQ8xHG44PwLf7Q3nyuGf7agDvAgHM3Ar8uVPns4QU24HhPQJdJWBnvwMx",
  "key9": "46oJwhcyBQ8jBG74MYzVFZ2rQqVn6GC8oidkp7SFDz2Vc1zbQtjxjXk4QUS4E3DyEto9bwyigqFAXuqPaTpi7QvD",
  "key10": "46AAxBwsnSJuz39Q4gEgoCyY4vDTE2JJxuPsugQJFQLadqtBmGUam3ynbbTxct4EJU3w544yNV63iHFNBc9MwR91",
  "key11": "4xA82hPwqhPVFjZuowFZfCbPgFhidrLZ4RjqCKCpujEyWb9eQ4Z7tXh3Ao7gu1m9KWjmteQeEZCGNq6XL8FQNyFk",
  "key12": "2wLU1MiYb6V3HYdScAacypjPqDQGheAR9GoozVu3sQwYxgYTzqrxKmqv2DSNM8iSQYbVzBcJRsX2M7WCC79Yieuf",
  "key13": "4F88Q4jcgRqVoPesRvY4McgSF4s1oDnue88uUfs5ZeyQ8Reo8DLYA2vbddg8Yo5WqmVdXHRkCNwBPviYyhEGAiA3",
  "key14": "w9nvWMDdLMh4DZDXkS5QvEkVbRgsZPzF4U7kecehRwyuvytbhbD9Hj35UsXR6fShLJmQ1qbqWeVWL7gtyaUbkkN",
  "key15": "TBtgna8H3ewpKLTBA48B7YRBSbyuQg9uaRfFixCrDxRTBRFziwfakWEaoij1EJ4YYFsCmwDUPsEDyYEyLxtkq9h",
  "key16": "3BE2EKfmDGvM6DBXeUAtV5RzUueqtZQ7kPPLceAiSW8NeB1Ur6eHcP1Xm5eC6bNbgtQdJLhd2GrJ7Gppyp3snrN3",
  "key17": "4pMj8VLab3ivpdz1FwXNUk7hGFR3nk4MDSGBmYRH2AVVojsFPieeyt3Ee8pfLr3PmGtHa6tDqeApWdzww3gk62kD",
  "key18": "3e1mSr1PPBsobaF6NW96T1QkjgqRMCXmvpCLKbUQuqeLnVUPcTrbibBSwHMumhaQmcxE3mieeeFgGrowqsKBxqEH",
  "key19": "3uMLxAsSA7vSUgNdqfzbgqEtCoSKFD4Cp8gbAPrtZ63dszJiF62cTdSccan7AP3BEyFgJgF3wcpA7fZEPuoLz2PT",
  "key20": "3gbJhb4uMJd28tGsz4mWz4tpCAJ82LnuuzgoaXfF2sXugRvj8LdbGqCLpXjZufLW9hc9MWtUDZkxpgBW2n58PbpP",
  "key21": "3WwiC8VrVEzHsTmE8pX7THWDvBoiTxX9gcLBsuCuJWqadieGHCa5KNm4aAYxFZe4fPgSVkQ2sJNaNgfPBbLEp4kP",
  "key22": "uMCmCbGrjeCG49cWquAtUa36PcQhrJiBX1tATGaxoFrdBH48RpEgZEgmTZ2gZ1n6ntKGgnbLhwc2tctuE6dvHgg",
  "key23": "eSsMkcraELdF8gvgqwNT7xe6FVGSghPcUetCNe9yBWH2yJNz7ngxpEkTMzxPaFTmmphwkvhCepiR97z86RmRiSH",
  "key24": "2ZbFQ5mAPxhVdsmTPWq4ombds91YpyBAhD3D3k8AHJovoxACZpQ4wAnpewYwtvs7YhaxCMH1rdWNrNrDPtT1Vajd",
  "key25": "4u4ix4JTcm6m8HYsDaQrSiXtRQGa9dKtxhePX73parVR2Xd4uAEvGDGKXqKiXLSbGWY5xuM1xAgGhSARUsLB54Wb",
  "key26": "MwLhXUzwvqdka1ZtBAAg8E8RAFsGw4s8qoRVkLESXQosMJuxJHroYUdyWSd4sHtqhmQi3gfrsqZjwKje6hZrTVJ",
  "key27": "5vNMGo74k82B9pMizEqQKLTuWR5vZUoPfFbme5TxyYKabKdESCBVs2uMLLh2jk9SSSK7143Ld34kDa9BwJq6Jj8z",
  "key28": "TncA9gYfUiaW9qjnAhJ13h2z3N7Pfcd2XKeLj4izewtP5DVcsaFbiGetVANnpQeGsVE4n9E2hmLjMEJX9DRjNht",
  "key29": "5KKk5u5Fs7Va2nZo2hcA9LbrcmDGkVZAmcduX8hnimHRAqLvJnpZ89yah3hTXoasNfUqPKZLS7irtnVU9YuvHPMY",
  "key30": "41N5cE23LuRzygV3M5HqHK7j6FxehSuq3qmrqPqhcMHM1aVvmsLRKomCqBzPVoZuArBtg84GxgFsMeGkV6DK7XZ3",
  "key31": "3LVca16mhpjhBf6S99FmxPZEoztLvEWNsVYn75iq2U8HNEKNJu5pAEWNHThxJTRLPcqhkeG81dutFHZhAVdptDSj"
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
