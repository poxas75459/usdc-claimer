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
    "4Z3o1ApLES83W3cKjF35scE9uL8PGQnrY4G911Eqw8GevpRJXBBH9cNah6jfZHLFHUur7HHREhPXWXAEPp4Ybt6Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mYsfQp5xf3J4PXc5Kzvy4M7Bvd2iWBfaedv4fHJPWvGBmuTjknJjGBXMxmPLxKMHDKHWbuZBLjJNLG6oLjbmDUV",
  "key1": "4ex2uuLSCTt9Mae8HEmRXzQpegHckHyFd2cUuXPd7pHCmA5CyBiBkTYiVx9jPw9MotEk3wHDQrhzpZTxd9cjPp69",
  "key2": "2aeJRjfszq73Tch7sG3czLiF6dEtCkJCFEphCR92MFzG4ENYJ8jjyvm5b3E54eEkr4XirjG5fNcLsabVhm8yP9E4",
  "key3": "6kmR1GRpAkd2aJycEBVhhd4nsyHHhStn1xYCvZ6bQaiSpatHJWpCWrWCvjDV3gAjktKG2WpkvNJ78d4sdNbUPHW",
  "key4": "4aT7AZrNpF8vgqvE4EbLcmu83wxHRLjgFj6GRCF4mjkpBaEzLDeQwsmTQQAw6XQz9qYy7EsXoFpGdDXN5eusQbkK",
  "key5": "sfdfkvbhpBr1KePjaP9tn9Fqcfi19pqrZQxXyHLmPBdwwb6HDTuoKYaJWdvYcdPZHJVjBUMaA3AYhApAZHSbYaE",
  "key6": "2uMa8M8PhJPc7jetsAktdjLToxVdmCh4BXmre8CATpG422TrkgiNGAkAWHe9f6XzsggtY5vt6N3kWfou8iAzN2Gq",
  "key7": "599vMsK2R9d9KaxDpHvkipADNGA9kJcDBM8As2CPxYVga6uaFubfXZuhHYkASuVg89mUnZjAz3X2S8xY1F6xXfwK",
  "key8": "2p7n1fWUcwZvavQfdHESuniN7corihvLW1Z8mFojs6xjZ6pCbR3Uk5s1BoK8jYJjdVLv1MoRKjACSXuodPrH8uJ6",
  "key9": "59JLNGPHvJk72EsT6dbNEHc2nGzxivwuzDCWfvpDdWKGBPGdYUALFSUeGZPMs9weUQQZm257gJsUkaxDVHku3G95",
  "key10": "3rnNL7n64g4bLhV9TaLAKeKUNHnDMKqxCJxyZPm9bMUuZ1nmmQq2sPrpdheAgmdXwNYCJcrjFrJmT289LSKSE22M",
  "key11": "4R3dTji7wHAyUf1ZX3NGs6G9v72BUKsDWVna3XZgPhtPy2UoVvbnFpY9vmr7M4fugQT4AqifDrTXSfTd3mrJUwEN",
  "key12": "2ozxn9pi8QFPFtEaMB2rsAX76RaLxfqrnNsvBcARmxBrc4MXrW8LTKYZuNAfm3A72rrBYSeY37JN4dy2LqBEZZM9",
  "key13": "4eP1pej3s75YKTGqCsQrgD5Ytxp16xkbdM4Hs6kriGQMbs4HfFY9ZD5gbdjBRybhuEEAMYf8vrWwBH2MYRuY3cZJ",
  "key14": "2JobWtPt4E9gPJViEJkNMM58A5NfdwodMdXkufYVhLYLa4husWWq8mR9MWTfDf8GM3V9X5resCSDWfYJAJD912DM",
  "key15": "aXWhegiMLcA7nUoKzMQRXzGXrDD7fKLuwcAmDm3g8SNmovxKp6zBMnsRwBrkbuEpStQspf9v4UUCjHDnvJmyAEg",
  "key16": "44CGaaLred7ySxJ1uTSijMWtD6ocp1iCiTdmVmYacZLWFbGG6s8bpo3yf7hq5b3KJvVkADHTusUg62AUkK816rvM",
  "key17": "4JsVAz3sV57XafWi9Bu7YQKojxXuztZn8LQXnUFPnQTgRJiWvnp6A7aw5MmnToZ9cj4x8E93mpvWejMEC4RMvwyp",
  "key18": "3Nn6jYLBixCNq6YvqWdkWwgVq2DFdgZiiU6fkNGvFxJ9rP287DX3AgxVUTjw1u65RkNR9vGsQTdT525EAazL6SBC",
  "key19": "2Ye3AsgLDih12MJjFaZWesRCCgWDy4YZ5MYWTFHs9ZezpmFruF1Ub8cLymWrqKQb77TGDhG3ameZfjcsQZo3LPSn",
  "key20": "3qPPHaj28QfKK4aVSMFcWQTDdHj7kB7ATHa8L3CWqrvK4nofpX1AL5DcK66Tug3nEHPkWPgKfumz5c6kcZvJeZoU",
  "key21": "4jpRmsGnUbUtgYDN9My4nGDdJqs6URsQN12s8TGUJxMAwkKSSnQCdJbr99BXSyHAaKLqnaSDQAbc1wHdv3TQNrMm",
  "key22": "4bvzEL5ZPQ5vWN3Z1w3ojSHNFicspebHJKbRdyrV1nHe27zZJogbPACQKGeKruEwV8wpCdrz26pC3MS9dJhMygee",
  "key23": "4XXfE1d61LcddBq3vpQLBfJKVew9ArGxdKhwnJTe7d8kEUWf8BVimJ7iJEEE1YFnwuDjqowExViZDjb9jJDFg57p",
  "key24": "op7ydiAVA2kUEaZZSs9wkqctHzTch3VaA4SxEXVgwKSqK5EHwkLsN9SB54zk66UGf4GkZGxNPZAj5a2fqCT93a8"
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
