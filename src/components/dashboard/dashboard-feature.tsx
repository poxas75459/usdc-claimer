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
    "5z68Z7CMxb5HsbeNRzJPUm3QNDMFvjtdjxqaJQnootJ35WeQyvdkzTsvFytMQgogysSBvpzPuYsByJi1kuPXZzLD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62X1BHyG23Dorkx3hfUM2mpcvXs6ussG9KSEzm13hiTMqbCJtR4mqp6Ke9Do4z8DWouzsM6zz1muT5htDw4VBBWh",
  "key1": "3VBSq8rCysmFeyWEDGNvdMuM845Hqc5u5E1MaH3dKXFGBVYS8Y3dbtyGr7xvtT84krtSmYDhZVxS75dYgByr8Eap",
  "key2": "4eLW4BSw9FBVvmEbQrvReCtoFDUCcd9BUyFSGzfb5K4M3XxoED9wPPrHqEXwmuvtqBP32ncmg9bvsBbVc8eeVzw9",
  "key3": "2ji941hRoH5AoX5TXrQ3tUmab1bgkLg27BPwf2m6WQTEZpDhgxUyikfdvNFqYqQRNWKUx4DeMtC9bRHz415SUVAU",
  "key4": "2ubvUva6eEbCZARqofS6v8KnHuMuRuTWUnmp24yJpodHXDT9YvCpvCpK2fnxrabHqs78UAVqdt7VMvFK4RVifWsm",
  "key5": "VU2FnNkxS25sieC4vwRSGGbyhyS6rLsBfUFvjaNxaaCqfMXvRDDcFspFmawnBJK2gFipnUap2dMG8bYZTVqceqk",
  "key6": "2w3acJtfjiTvWSXan8hV34pe2tv19XkjMAVLzYgM7Ezs7jr8QK3CqXchpduqReCasMvm2fpagxZx9GBu2tSQqVZ8",
  "key7": "455sqPFC9FSdG8W9HDcvAP1LgsAhn1KMydHkguq99xGKZ6XZX1ap1duKAkTfqWGBdpWopbGwj5dVmeZqhySiJma",
  "key8": "5QXCXjX5K6j9aZAsWwYM7eKfCqFEZuZXnQCzw9P1z5181w3WtvyhKCXBonYDTbAQq2ZANtznhh2u9KZHqpJaA593",
  "key9": "4Zr7x8G3DsQDHYrjFjQHR4j596FQDRoMJQhtfRcd3PwfPLQ78LB4Zh6jgDRg2XRyzDJufN6fPvWJ5XQyro9mb2GH",
  "key10": "4UucSCar6S9iG8cGkCM796qNM4JYTbbsDiNteVfEUUbVQNsYR9tEtP4Xw8G4tiLBFYaBdcHF3mkVCKRnL9eBcH1b",
  "key11": "XnE7uYY3NTrUg48LSjWCib82fEFmNXQc9x4ApVrrSQjKQqUwWKphRWfRtdeNwmAwxJxov2FxFUPyhyQLAWAWwiM",
  "key12": "53YRo4nVS7bBfbfw61w8tRrZwHnJfXBuV9otdzB813b3a2m3ULKGe3HYfaUJptXbntkYGuZ2Aw52GaZ2MomcUNAx",
  "key13": "3CvdWHDENY95TSqNozfSEVLezAnjiktxtFQDWaKS5PS7HQUEEs18eCwuG6iLBtCz1gvfd6MveLGzcWqerMcbxwrC",
  "key14": "59drgxbXqZ8UTxoDhTZ2BLxqZs1a3zpqt6H4YEPTswU7oNTs3cbi9TrHzVpEcQTtVpwHJ9rRti7ozqWqFPeEted5",
  "key15": "2UN4X9LgSApmzkapvW9r2CcXupGAqo8RQtd1QRDdP5AX3hGKVKgWn4fqNe47PWDag9sR8YDxqR2xYniQvyFSNerc",
  "key16": "53snHkfPvSZ6r1HGhYvhbBawMoM88R2bWrk7P9ZRvXe79fDY8ZqykpaZ2zNbAKR5bQdYDzUGgqYTvTTTM84sudXu",
  "key17": "4b7vhatXDUKuxJtnkuFMoLQAahutpkRq2DaLXFsiWR7aoc4FXhcit3Njyc1SrxmGgRjisie9AKm1fN7dyDp1PZ1p",
  "key18": "3zNTh41xiRzAtWUYRVD9Hi5PZEvxhB4JuwoejU2XzHjsGp43vQNcy6WcayHrWQTdFpq51Vbbm2k5mP49ka2SVbE7",
  "key19": "2qBK8mtvcfVzvXUDtASHeLnh18i1w99wEMMn64MahmRidW5Ccm6XpVVN8REMQUGVAyHLxsrDzVeCCpF7CfgreQ2r",
  "key20": "55emP41oSNnZY5zJ7781GT1Px6fJuwTHUWJxgFuM7oAAwKxuhrrcawSChwrttYraRRwe6CqFT77WeVtwSKEAMPn6",
  "key21": "4SBzo4TUQfmFqbpmkjrZduVj9Me67yCuCVCBqEnxr6gJJcVyDCrPFVpu9VScWWQawwsyVU4EFFpgUQd59F8mKFFJ",
  "key22": "5niR58DdnsTYtkeDNYmYkwCZnF1Vk1uCGT38N84Uh5sKXurfht6uQnMVy2tSfRnr4kJ388HbkUh2ugnH5q2xtZ1z",
  "key23": "5GKKz2XcRMnxXndrW8yopaCx7Bm15hmMC7YwG2vzWHThehPa7F3qnynTHeDVEqXAcHnqLUJRJqD5z2sKSaoDorai",
  "key24": "5wfCKmimL3rQtQ7HYarzgAR7Egw5kXhEiaHAQe6K4iQRCdT6Uze9orUZQF9w9CG5XnS1qbmWAV8LC9LB52pJKhtb",
  "key25": "2ZNd6JVF4BBEJHwz6sGm7KXhJU24cT8PBJLc2kjrLdXSixn8n711tfXfV5SJxTPf1sHUbkM8jVpB8Z1JheHzvwWi",
  "key26": "2bYJiwXpUXPHDCYEHS48QN25p6pVYdu3nY1ATxUtsQqBb4c6svyak1ZQLzFfz7psXeT1fqDTg4GU62zPkajEt17b",
  "key27": "KjA1cpSU6R196tZtuVTJ76LARHBH9Suf1jwQ1rrt1HJP4W1ujZapCWq1vmvSTKsE2K7Z8fVhUbjzZ8aDZ6H8S7L",
  "key28": "59AiEkqqexHjRCBehkwq12ctLfAL6yYg4JN3usQxgVP67S38jcvQAdwaMmwHMruWBPPPhXh2QdZLmA8X2f5HV1AJ",
  "key29": "7X6LuykHQRt5dQ8w7YqXoFX41DNGnecXFk4W8Vyo7PbJent2jgLRvoCaMZjWDccbFXLUd8Wrd91RPQy3A6dDYYx",
  "key30": "2k3rLPGM6QthiN4XdSb9s3N7aiDBaRr8B1Bt6rEQVZ9BaUYPZNsMECsnyhZH7Nqc2krkyGqj5T8VzXsc2eyHfrSe",
  "key31": "4X5r5hRonJYLVoiVwii1D5gBCJL3pFu1n488vYV7DH51xu2Dig4RqoJ9W7xPQNgGstJ9LYj2DekXyEZqLzakRZoa",
  "key32": "2uqF9zeeQdUieHBxb2ih8S1tzkLt4289DYWtghgVXbmcxPqJB6XecACXSa57uCB54brYwXQ5TM7vt8xasdU7Yrvx",
  "key33": "42bxRrjvAWeGc2oP27iu9BXLpMFqKpsoXonGJr1951j3TsCrAwWg8Q8GBBqsr3e62GdThEjbfdUCMwPFW7WHuWbc",
  "key34": "2ToSwoQ7NXTzSfSua3aK1Z2hNjT8yT6QJtgPNSkz2YHjNSGyX1nNCRTpAtfkLyZ8SDdivYLbsCBVNcYqHGNkr2Tz",
  "key35": "5S2XgAA14pEiWDcgByZA637ULYGC7jhYESzZfYFwJTn22dH6idGN9wt4HQS1vRWSL5A1KVeeyVoZkwacN8UtNR7H",
  "key36": "27bpf818LqUMcHnj5eLZwFpJ9WnnAT9w4cfDwPNbaFGfGNH4N1k6t7rrp9wv7nQ7ScNBqowNesFehAwwGxRGKNvG",
  "key37": "4P3RU4yGh1qi59658EJJ3FMeXuGjYrafnjfJTXB7p1UC7NF6vmpVTYTMgtYFDfWRQNtEZ4cC77z6Z4wEzMFcMwmJ",
  "key38": "33jyhpsSd6gE9QXTAQHjTw85perH7jfF5uwjX6uiN5QXNEHezgUao2Gitf6HRZRotPXyV422NgezZVVYsvxrjosn",
  "key39": "GNPNfqLPwQ5UjhApYskibSqvHic6QJnDU5KUsxnHMdhnohNXiDoWuoLn4uepa1zqw1DMurTWSjx7MxcueeUbv13",
  "key40": "3he5rakzN7EoVqxYZdWWQtcG3hdYFKGsL1gBr1vtvHGAiLtSYG1hrUbGsnADGpJW3ee7Sqj4FcsURj73P2bCXAM",
  "key41": "5kEHUqLVoNN1Spd3HaRwLYeTVJbkPCU51myU4TBcVWuCnGt24TXcGZuVhYTRUuxkheMGcByRUkwmH6Y2qbngEMkx",
  "key42": "S6nLLf4MNQjVstHg5Q9sMuCAnfPHRSoPQueAPahzHA6GBKUa1hEj2yV5CTQzHDbs3VKvzrpHCkkTjvyCVzdc7sF",
  "key43": "28gEC8LAozvUe5fUEj7fcqBDtTCQXfGVPUh34CGGQQQqfedMy1abV5pYzKyp1LKV9xRVj83ekTWHiRDkkZGobGzx",
  "key44": "wtgukHJKFSfYyRgNLLh73tVRfVp94R78zRcWsTjKMg1ddfAW9S2q43jFCenNmapwiRhHKGuSw5VwM6BYAVoKm6r",
  "key45": "T9Zfnm7GcxWVJMAjUHfrdqdojAuKuYoxZ2keSyWcLwoep2JDr4sdz6v9ukUpb1KugCYY4SyCwaQM1uVbzUGaLfZ",
  "key46": "29AcS2sE16uZrznACf2bmNgf88pYxSvh1rfbSg46rp7YRvQX7C7Z5heg1fQcTqmXWcHULAJ8josaZCnD42YoXqGw",
  "key47": "4t9XHfNdoEcC2rstXxjTbBtQSoYEief4Jxx12VftyQH1hVQpPp3vmGEGdZC27QEWSoRGvK6hiBVKf9tbewFgQ3f6",
  "key48": "5L4GqZL9zjPpuvJknwvcTC7Bz89rPDNQLA4Mj9UAQ9f9yFBn7PbMBsPQ13dq55qmwvV2TEGsitaY5BPamG1c3grb"
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
