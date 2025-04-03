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
    "5aFyg3kp1N6pDUPkiEE7rGjUQoGiJ7qEdQ8xj45kBN2yXoHqrLdWyaAq7JDoHNKZD33NbrM5mhojohq2RQrYmqVd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XohvxjS4m9nmd1TUt7c1o3Tac69DMfRVsXj8vVz4QKgLE5MogSMEAM6RF9k2KCRk2M1aZRi26zNYeHWMF6b8mBu",
  "key1": "34mT93UiXv2tNr71cXR686teu24cuDovRKpDV8Ei8wX9Y4wTV1tmgRqiS48BfQgY1y5JGHsfqRgDmSpNaVcM63g1",
  "key2": "MqdENjRz7t5btUZWjMruTPXg2RWc9e3SnZvzR7753veHMdymvgUcTWsgw1Es2URUBye6hh5UuhczCZSM2ayYvWz",
  "key3": "2EjKGLyKgTu1Y7HBezue9sRBF3tTnrB7gFJoEsDt86VRfDvfKwjV3Ak5d7RswcPzoEh6vzMWirz4S8YQNr8jixwj",
  "key4": "35NAtJyjaCML2WdNGckGzx3sqptiyNPqC2urwqJzAGiEapfXxSTBnCzTr3bHLhSLv5QUR9A7JbLGT8m7PTFdWXhx",
  "key5": "2t3vaMU2RGRbqLqphC1GabVecmT6gQL4abvB5fwaNJmo76wpacSZmbzFD4XzU3DAocczq6vojqXKR4G8HdKSw1Hx",
  "key6": "2J4tQEptG8hhs3gq1b7zvCk2z5XEhKd5q5fUhMfyG8rz6Ud7P9ygTaKe4bXMauLFSnW7z5QyjYdH3aXudYVZaqQi",
  "key7": "4wrFzMcqTZwnYMPGezNvPUFt3jp7CMDP4JQWTCTYzhKvt2mMj1J7kggsv81r9GfmNrJPG2nTyTb3h9hdxkhGmq2V",
  "key8": "NVc7hUwgNXFqTVhJ2QAE25gc4PjeFYttqraBNw5fsTHxYesuUwM5HA16PZkKdoVJXgpPmpnfJ753nfjfwoPiYrN",
  "key9": "3BSWK4Xc1aQKx1vr4doRUn25iSZCrnAPp2k9YeqDogDGYB4jXSozTwj86c6iu4Q4HCbk4sdf4JDuf1bfkuzLfrX2",
  "key10": "5mescB8N9Tcy9fyPynjCC54zk5cKWCiGFo1EjcFYyoZiw2WJBzUMw6D533feN3PsEMcuV94CX6SPstGMo78VVSBz",
  "key11": "5q3aKiK5b4iWGu3nQq8ei76SHaEMQWk87ibwUf5Q3HBCPcUrBqFZTN9KMEWNwsJEQ7erx6ZXFY132zBWPFamGZ8U",
  "key12": "pqS6kf9jdCn8oZqpc41Eh58rS9hCkw4xUHLgsVuotLV95dLbeLfHci7BKausPh5CnHKHjQaEbotEKh2Xd5RKMJx",
  "key13": "66NB1DTu5DUpMwSeuxagJ89khypYvRXEeRdaDiYFC65KTBL6RJfvW2hFz1HWetRY56yFLgk9mYwCP2K25GE5yGmw",
  "key14": "3yhDhwLrKMTRjMyo5xyvi4MxXkt3wBLb7hoUtBk4dh5tdPKHCi8mvfCVxbWLSgwh6uyuZwcP1jm2SvavmiMvZuCa",
  "key15": "2zG9P2aYdpqxQ1AarhmZGN3LYLvKCVr94LaTNWzmsYz7vGRAAsB1qeTZvjcWEj2hLSTHRFcSoLFWNoiu4oogMrVK",
  "key16": "2Fcx6msuJBapuA6mfLvJaKK2Zyw6HdPopVADcnR99eieZutiC1KqpsY177ngjB8jTxzSrJtRsD3KHRoqrAhsRrC5",
  "key17": "2t51ffnpRxFoH9bDahQfod2YnSf7vxpF1SRhCwsExSbBnDR7GtQELHuakMCGFPkr3DWsVHmgh6yFNp2Tn6h7BAHN",
  "key18": "XedW2FhAfwCB9KEEitox1Ji9ZdUPENNpRb6WQPCYeaZcaSZQhb9NZJsXMnJGUWS2kryNsVST4EjApVdii8Z9A7L",
  "key19": "3KagEy6Q8bGRxEvy3engFAytxGLcCrcnnrKQ8uB3gv7dero7uUCb8Vdz8PGVwAEEmJpSebgL4zQdAyYRu9fa8iKR",
  "key20": "2UTfLehnX6bqCrtw4BHdnEje43rSsvCQe1cVy3LuztKGGbgx7Ta8MCXVL6N6ZHBiDdg1HHLo6DFmJENEuNhRpPJM",
  "key21": "56eFPA7TNAqUnEyKuDU525E1EY4tfDVvpTeiAmEJbq1de3YJh4r2hN3cYQbneJ1jWmw6YceM9H1vSQ6TYin9fxBr",
  "key22": "2o1Y1CNMcFnRAyyjU2LRkLrLKTtue4XSeivHAd52YYGBc68WUdVSi2tnfZUv2nx33TBj2zCMCLrBKNeeWTVTLXJ6",
  "key23": "4xygiR9Es7ZaWSYcngXqGpfmpNfgomKoyqk2Fr5SK88w7Gy3YUUmfusxWwgXRdbrjMxVcy1hZNKk1f4S1iMe7qm9",
  "key24": "5vvXygT5S7kSdcsJNUQbyLJffenztkBz1rhACZDAf6FaBmwWeiVJM4eKKRPcDcRUkJsvBGnAYiiqmkKTWFrCXcHw",
  "key25": "TgqpVsUbU5Zn24FPDf3AmKS3vuCSe5ZzvfgjU2Axk1TuUYDJatT9JpvG3RQqbYXas7MVGsNT6P5RL95gjdiGJpV",
  "key26": "4Q1A7he6mGbdnzLmkLmvzJy4co7df9KV5YAph7fGKbW8Q6gpGNy8WWZ7LgwVVk2vZoLxRfNLedEbqfQ95WVn4pBo",
  "key27": "2sdrpqhnHKLPrsUjKLehUSRASypkvKvm6GE5G8v8jfU2cNHkEYM29zKMFYLPz21sQwQiPiE31zDWGnDd7Tm9wyNn",
  "key28": "3N4dyVoDZMbCqX79XzyPEw74WstJRaEXz8FjssBKjPxhZLX8DHmYoQgVAcrCndH8Ja3X18BQbHR3YAotMtDKK4Ao",
  "key29": "4dTyihdjSxp24bS36SsTtLCPGY7Ui2CK9PrpkQ2ShtyGmNi6kAyHameUGHGewsbyXGbg8Y6C3GGgJF3UsU1qNu45"
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
