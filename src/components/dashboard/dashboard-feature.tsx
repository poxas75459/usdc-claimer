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
    "46ZDw55Np3Kqd2mubiQDfckvEDBGsDPeukWkE8KK7S6JE5nPypf1ecYWdAD1v6QG1Cr4waFAVQZWB2FLVcuVN14r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TR7hPFQS9kPRu7mug48XpxXuhtHnngv5baTi4bR6QspK4GGDGnXBTnMGYrKNchLedS3F75CjKLxsDCSD1NBBZVu",
  "key1": "2nxgvoDueJMAQrY36KvMMrBy2cD27q8sTrFG4JaBggi8BdCWi3tKAxtFoLu5kJEZ9XCJahfBt87RdbjxjatndmTZ",
  "key2": "35WfXZK33WTZyZD7FrYaymvXXsCZ4MawwSo9SexTCAudo91pzjjMs8HcQsXQgjJJZ9G4sWTbmqs2qFv1PxqWAhDM",
  "key3": "5H1EuZjeJi1nJvfcM1TfBj3VRWEJV8X6XB2xf3BFN2ZQDcBApPHguThL3jVUUxqzrKRkLb9G6hcYo7wiT5C1rLP3",
  "key4": "3ihQs7zKeK4t2Q9ey9PMxwW9G8THaHHbpzuEhroFiPZFUe15nf6P72VasBo9C4v2LnGtcPgC8T6ZDDh1qHuywx9G",
  "key5": "4NyvFjDByywM49wjGXM9DbyWdnk3QSdz9g3V2Mzy4i437kmmg9jqFcZrLUodjrfkPyyz8LWrbB6fkjbzCtRjvLLJ",
  "key6": "4BKxqseJbNm1J6czZdCir1X6xzmjtJbgZTSKsMDukdSys6daABdm4Sj5FcfViURwVfJgGn9Xur4tkcytib9SXuzr",
  "key7": "3R9Yni8eHx31q6nZZFinKbjpRNCbkoX7N4Sy3K9oJbWgemrZ3CS51kMwxy3GsLWDD6czbsWp1BEmG9vf82RDRLbp",
  "key8": "4RnYbc2civ9jdhynYEKkXxeE4EJTTGSVs6vwbnybiaVhvpdjkDdg58afGsZqKRVHmuWwpfr8DkAuUfgVhQfNqxQn",
  "key9": "4qrmczSd6sWTzQ4mZ8UibvCrayVYmXXe3bWfcbBYuWSxRYdhux78hjxc4fsBGrcJg9ZriNdtpmZBQd4F5MVCHPUd",
  "key10": "3G9VxEjjabH3Gk9wsBHWPzw9eHbPsXDLTz5CjxxS5Bhizu2ZreXreukMx1jbLTp8qfxToHWbYjsgJTwLHwBuJtQT",
  "key11": "dgorbjM1evhL1k2tHRm598S5Dz5mnuKW5EbjtVaSTPQYeSWTi2QC6e3j6h2H7xEhr772RMFNfhokftBKY8Nuk86",
  "key12": "3aSWZehxSmHfLnka7pvD8JZ7RFWrs3Vkm3cuyRaMdPBdjukiDiZz9Qp9NeGMKE6Vbztg9zTqj3kZEAJvFgWaBECF",
  "key13": "5dGqQCmq4LextMvZj2mciFuBQQztC9bZPpLwh9Rbge5r7rzgbJeTeFWswHzBp59dssR3gxg9kYbo9tG7EMq9WKak",
  "key14": "3odDEjV4hCHQidkXDi873TsNU6cq6YqGoi1W8oWMf6gGi35dcPY17ptZBSVoJsaGEQb2uaDW8F9SXcvWdVyi2MnC",
  "key15": "4BYwYkoZVTAmd8Zif3NYS9656b3MxPwe2oBmw9k2N6xSP1Rccr5WoiJLbfYhh1nui2jHmmv7fdhVT2eGJG842eiM",
  "key16": "47xSgHLyfwvevJjxB8irQxLkRYtvDKbCCdvQTZHyzqRRdoaqY37MSjDjZkvamthc8gVF1u9mFcsZaWpYUpBvADjK",
  "key17": "57ThEMcEJtNGoUmrJs9Vnaz3Y5YPVmG9ArS7PVFM488Xmk8Bh2uPnFnLSWwRpoGnu4pGD97sm1b88uFpC8jVfoiQ",
  "key18": "2wtPQFfkoxu4qU7tTqvEQo2UMTdXoiFidsfNHmN2cxbzLm6966tWXUHkmTKmv23AJZKPEYtipg3y8aokT4bbqg4H",
  "key19": "5F3LahF12bmok9Z7cfuiJDqwxPZQ7u98arbxAYnd8UNnThQdYw5Pzg7hYqj42UqNF9EvQKDFiap5fTSuswwxMpfQ",
  "key20": "FU8iGFtfHQAyDnezLsNHe6FvfYPMZdQk1g1WHH5aWc6wrmjL4VqoAD69dVQS6kp6m4X69pFFgcJvZk5kRoAv92G",
  "key21": "5JTk3xqEbCRX7JwQGU7Jyjzu18miJArNFrqoDHHpkzwBq55ok7XmNtRfhdZsXLHA7GVAfdeQ4QJzLuq71Anamxf6",
  "key22": "3YNPcDj87nmaYVAMESrKKBkd1FpRUXXWufoM4bTKqTheAeJDYoed9dwRRCR8cgryobwQV16e3ztxNNJRgby9SEHn",
  "key23": "4hr2m1JFqEGANsbsKWFpn8Pa86wNAkDfZZgUbuijUBGTModHa6McbvL6aRtN5uTvDuuzRe8GJcQBUX7wZPTZwUam",
  "key24": "3U7aLukGjFpwFUeU1PXJxMRLFCzMzETVzDghmuXQ6UZHnTN8Kgq7dWPaRYm2kQ2uj9x9RcgAregAshcgj857jeEe",
  "key25": "Dsw9LwkJXAdgaU4S1Pq6WZZTYW34Ch1TbPTJBzgiayQ7u4rboUrgEyH9rEUduYHKW2HWKZRn2DdHncMaxFqHY82",
  "key26": "2xEY4ftUzBi8Wp3sjM8b1Fb9jk7wNGb19aiPygA2cfqe6boo8D7GF1GTXpqDo1A79Pt4Tfg3PWHKaiFSNKqhRoUd",
  "key27": "4YScmxm1gYAsjujxDT8Mv7PDDTBVzN4RCJWe1DXNKCvEgd8aJB6KT3XZXnsmYv7pEPjjYZSpVW9KX5mVgPusgbTv",
  "key28": "xawD76oGzDN6LuiFDegprSPgaaHSPQKr6fSUMPgeTw1Mc6YEFGHdAm4wc6qiqqTocBJvFcbgr2x5nLmn3uFqi6F"
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
