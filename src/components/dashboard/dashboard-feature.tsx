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
    "5ZNjugvvfK67NfHDtKBXZXy8sicw4wunyGgfGBCeVhaqe2xDunjkFYHv1BqE6E4s56EVdFipeBqsK1fC36EfcnoB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P1XX43yottGyTrfgUufPCS9EG7hyQcMh1t3ps91oPEgJFBk22G34HwyyAhj41BD6Jfv2nrqhUbk3NCaDfscuTTE",
  "key1": "c2ZkFvtgrSUHBoAwJh8Si6bh2xxajZ49ifQ17SG62AtNwyhnbJA7ugZGsP92B5AYPWpi9bXcrMLKU8N16TcHeyA",
  "key2": "4nW4FeYFFXxVW42mfxHuHb6vtUtFBLKFhDcCwiyh9NgRUs86riqTvYz5gSwhf7fZVc3yGD4HZeRDcLgvv5hDxcaN",
  "key3": "PoW98cL6GBHCtUQXjnhtdu7UipGkqmWNPX9oYCMp6mjvMd5adWAqkQj9pZQCDWes5TdpEGGbTsHuNWbuTPiPfk6",
  "key4": "3DjNDEEqsccyF8EkXjaG91RvWdaGdXbT6cHNnQCKvcpFBBMLUNn7hZR6rF36TaVvhxsrnuQ7886axnoBdQThVkP1",
  "key5": "4eq8mQQWRMGvx9b7QXrAvXdse7rE5QAwTrie9jJWSLWgXrKfXvU9i6Vc4P67r1SuPvGKMnMcgdbG1DduxuRfeL5o",
  "key6": "2tiGriF8xMAiJy6MtHnqiN86ZEt5K9wfmqfkDMSVr7cowXEErZKgLJfm7hN1B5Uu4qy6KQTMsXH8n9Wa8QVawraZ",
  "key7": "4kfbDZiMZJBZWF7NHzTaEHv36zdQ254iihr8WPbghejpXf9o3F8uda7Dp6LxBDCxAdSA2aFkRfd3dNBzxW9xj52P",
  "key8": "tMJoHD5qboDNVDebEK4ktsXNWezCtTjxNoUkRyEASGAwS9hn4TcJXGUDUo1cWzgsEC1RwcbKqQHto3qSwZQNc9i",
  "key9": "F3mjWAQ3uX9q9j4vgDxgBQ4rQHjaHFT3e6cTvmD8Pxi6ccRkNSyg4NMoaT7X1E3qg3g2V4SSSyGbSoY3FySbd5a",
  "key10": "4RbJetYumjuUb6gUoqx3579wZuEdvg8sfj8o4ZxoMJxvypAciSVvCfyGBBJ5x428VLgT56SR1mRrcHhAeDqyybgF",
  "key11": "3vNjpmW4dNyY27VVZy1Q45YvYRBDHQKepTpke1qQj9nMpEzy28n6dMfc7gsSocKXnJiTViKP37MFGAiA7KJ69Ycc",
  "key12": "sMkBkuQ2YV6xJvquFgxQ8F79rXQGyMSJnDujb8XVfDneY6NQwP89Am1UswD8bxgfKPXMbXPdLS1142zbRv6bA7E",
  "key13": "3ChEn5jX73dzSQ2rj4EmsL86pKfiaRKV6fmXGiQuMSPNPGWdGsmC77Ru37wjfHUFRMsHGJNuMJY9beCf8YrfBb56",
  "key14": "5NeuQVbeqock8L5xXZmggeUX1yQk7s1kZL6JgWY6kbntB4CisBJRT5XrVszmnPMAHkJ1hQXKeqrfasZrSrwVEgxY",
  "key15": "5NSSQNgqhuFJNpMMkmpJHDne2gKLngA7zC9wahb6NeEb8BRfV8fuLhGYewZNcmg5juMwnrLGtZLmK2WXNR1kLovc",
  "key16": "5AAGT9PjPy1GU5kuLHAk4CvnMsPLkXeExUvYhhs5GQBFUCP96jwL81vY3EWRzpPj2S8RsBZxcFjRqEu7fRjDzWvK",
  "key17": "2xEXSTBpUeDJydrfYTVVpacA7EgZ24mUEyQtfF5jJxTiuPnBrRwsvb4EnYVwXiRDGsGD1vnokp9hF448SPGiRSCF",
  "key18": "2A7Q9H6EvCstQGKTG1An1LiNbdbUbKs4v3xJbHYuAXS1SvDSnVM6rMhqTRgb7xqbKmiNG3B1NaiJaTXrtct6dfyG",
  "key19": "5BfCNnxzVCG6y3rHijinv5P8C2e6qAmod8NNbeCRx5rqVqozSTsehuwzDptShihMn6QQGgX6kXJ2MFgGBFBk5nQi",
  "key20": "3h7Wodjf2Fsw4GbBgTm9AzJyVmd7PeUanN7imwaAA52zY44CzjrYLPukHwZnNGZ6xxjkbN7LRjxyK9sqfq6yRMaz",
  "key21": "59y9eFtc4QTaKHBDPSsBT2G4TDAzJYym3GJB1iDYAYjrU87WyEzt4uerL4GHVhGtZ6dqYWWQHbqKvUHqHDGqh1Ug",
  "key22": "43qaod9fLWPJykY21ScnuePyuwFB4igfC42MnPH4CsULqxdTLHmCvSq93chivs6sLZ8vC1Pe9bRU8ar6aAJ7N24g",
  "key23": "64seSk2FoRp25PK1yv3ge5ovNzgn6yVacVF5ay9micunV8YDGvUnXWEd9MDvfqxKUjn8LGxAzc9uJ266f8JumGtA",
  "key24": "4C4FxEBGKkr4jrSGmtMYPKzqPiQDLmtgJCpVcpZ5jGc5No9B6mYB6fPgiaTZkyThoWn9mo6LE6npWwxxyx4axuop",
  "key25": "4tqZWnX4DAnKHXcisq8KcuNeaBADVq3Sn8XSBQpSZoGsSMDsFQYjV7Fpzj1gR8bXNruxVjk2QWTMdcK2Utvzx9Nh",
  "key26": "5KLyzhUQVSfbhnDLJTpsqosqrxVJVj4oKwLusywwsKeUUqDRcnaw3J5F8P1rVwxRwUtwSt17fXLdV7Z6cAngKR7C",
  "key27": "3UpDnHHwdgiK7RzCbYy574XCKEiunVS5FefX2utiZco5AXLWmzH49ZEe9JosqjgrxB4SJoHS4XbxHrEA5sBFMEzn",
  "key28": "5WaVpzUFDRGCpro2BnL8Dr6rKpnKhMKKQeWBDmkELGxpnwSt3oACqNZyTbM7jZuEoDayyoBxjo8tZVRjvdoEKRf7",
  "key29": "57HFNAkj4fUbzKta4ALgvoPgSw2n3UZbJUciWfwDa1yeTTBSrVqxC8fmw2EgrmT4ACitUqBCEumQu7gBeibeZk4T",
  "key30": "5DJVNQUPEhVTVqANpFWUhMAYojAV5RrqXmPywQDYSwjHpdaJmzyCUpCah5x5J82RS78GrC6Biqd2qpbwRowssYMy",
  "key31": "n5o7d6DTFUXbxtC1Kit8xVGqzm1X7CcnwptHeV2VhUQEbFPyQRSkakPyREa7Noz9b6JUkcKajvcrNBScRqp2yxy",
  "key32": "2TDV6bTQGcjYAT6cBGU6NAVUY9aZY7PzvTjRpD2aGvMnjGakjc7ZgB6XiWx84S8jbQ8W37rVwWDhL1M5eJTXknTG",
  "key33": "3rJxCDMsNr5jBNJAidD4J862ypKMgZB48BGzzF2Dyj2CwrFPMYetTf5tYCWDcwbcvpmacEjsaZ13PPF6pTh9PYsv",
  "key34": "4AwVGmWdXMFgcYHvWFLNAqENaaEY2Lup8vssr7Dswjups1rahqNLwNH87cJcF5Fs4HhuWY3KnrkeNNiYGSNrWdPF",
  "key35": "5fR8QmE2KiFhDzYaUWa9PGjCj7vR96tJMAkBzWFV675E2Bn9TY47rZJuWkpYLJVmBFYmLmA5rXyHSVoZnzznk76w",
  "key36": "3GHEbTypXohWxnyUfgqzyR75S3te87pkeLnrnczEdzFi5HVH2GefgFvkii6gbKtLHdqSFCynmxNs44dUPNE4gw9Y",
  "key37": "3DCW7Mw9RvAT1k1prfW9tK6ohhbaK4WZG9xsahMF7YXbE7BXKXjaB7KHW5SNb1b69PXSR7iSWAixUWaYPWtWfb4u",
  "key38": "4y54w72s5hyzPcNHQNAzqinpHSuYjt91UXAy57D7CdiVNpmp8X1HNbJ7PjgeBqJmTBBvZRkrgF2Ci6SFoyZ7MajA",
  "key39": "4azP2pUYxLsiNWK6yYVcPUqhiZXFdoadpS4GDpKwkbu2voY5quiBZgQfHytx4RhghQbPcLrSuCf6FAnAsbDJgd9E",
  "key40": "31J6J7tdpv541wXYKBkxDfHgeMxtrxdxs9GgT48d2w1K63RyMBJWxPCjtYE3QGFDvpEM3a81hpJmuoHCiqcaFsWs",
  "key41": "2xNeiWurJV7qxRBDBp55zGPZFsWwqDEfgaDNVmbTvBGPhc9xzYJFwihjgG8pehX8wp9Ai2xHftmCX8FxaDWFwhrQ",
  "key42": "44qW4aNMXSwLH36PRrBd1gp1QbGWNoyNtYXaWEG5gu9XEx2D1fPrNt9s5faGcFHdAxUL8r1tZ1dRxYQPePifGBq7",
  "key43": "2nn6qSgbNA4xGpygbMGwoNAG1FoTbaVfrjcQ46vSAvmQkitFFRinmKTticjBZrCoKiyYx1EBKGvriHGs65StsDMc",
  "key44": "3H4qVVuiVyBkFko59CuwzzBNseigg3WJUXgLKzaRPuyrk7N296NZZvdPKdUb1EqSYWcWr72Ugw5inxChqnvhn26i",
  "key45": "3hzctbP7CbEJX6ByWfXBecv6U14o7EjzdHqWaQrpyQcN1P4VXktY4G7EGasrR59WbgyGjprFAJPmiW487DbxcvNp",
  "key46": "28KAdY1zkxyiifJidDH6n4b7YuP5NiQ8ihEYcc9LojDmUtPm5tDBcieYzx9QBYcrPWJjvV7b6F78rjTSZoANMSf7",
  "key47": "4YXm5u91DjTXrhJaWcaZ6Rax58QXVZFC4cNzJ5cLpjVhs9B3zuz9DFTaLhfkcRnPZBa2MRKrQLTmUAFPbeC9LFGx",
  "key48": "3ZEHqioFPi5JpExxsdGwLDLi9mN9jB4m6gfufQTtESu9FUpXT7nscs5TxzFXkuu4okH92cvWhyTF27f5cEKRezHJ"
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
