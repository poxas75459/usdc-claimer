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
    "26QVCXqDW7qbqHVNeG769Hrzr1yKNG15bU8hZHQMneDudJRsMPMQm4FbHnZoVAj2gNiGEs1F7irSCU22haph3MpU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3furHmioUFAZxH8aCQLbqpeopMNpaXUxwyGN1QLiQBvqppURYeopjCP2xmLG498xj9WUzuecq8YsT7PKE6C9NoHL",
  "key1": "2hdWA9hYkDDUA9uYVcnTjpvBqzoDXvejghgBfJfXus2GGXhXbhWxUh7uoftmKzG8wNBcZnzHauU9CxFXGgGGxkmk",
  "key2": "2poPKbywFKAqZWT1Bj62BAxq4ttta83n9mohYN7xCq4vm1gV4V9C7EiLdDQ4ArDjpaCGLrZiJCBKYg3cVDoAdiKp",
  "key3": "65ttpMSL2Y9rBfyYKUYcexrTfNHTJaAomwm99AGaH5L6F4YmFnjePbJng86iLQYM4MmGY8s9is77cGRhV59w4fi7",
  "key4": "3KFbefWiuuSVGW5vnNA5UusLoyefoCVxby4ZRiG8gJpSyunAKFCWwqmkfma6sSSuFoedpDV8edEuMYRza2PtwfD6",
  "key5": "4qSkoCySfNQHoR9yKKP4iAZ5UFTdgJdv5XQ8Eim3A6YbTNYP5Ht5BgdJYjAgWPeaR1Zzd6P9cTQj7E6EfCtuAKft",
  "key6": "3JC56rj5A6yN1smW2ML2TvhNcJxo8PH5FGB7PRaK7hT26VaRAVW6CDdDTJcWNfTjoDCjsWV8c8qVBpBBDrNwUceF",
  "key7": "4ZsG7kj4t3bAF7mRq3PwCUk5sMntAJrwy6UXhehoL78Ksvxy3vGynZUpUjDE91sFRr6nDVfDyNumqXnmY2DkQbfH",
  "key8": "35UuQeUYkR9ZoZdNaVm9gs6N3omDrJ8gEzBBXJJKDfXGCaz5QngfrUNeCXUjproZdCTaEuowuk6qWTb1zPt1xXkn",
  "key9": "4Rd9ZRPcsr6q8ociBsoMUCQxK4iAwHTX6Rrs3CMeTfimbRtrMafcMHt2GV6XgyGgesrv4ff3hXzDfPDRG8UKuz7x",
  "key10": "4uhFJKtD1Ro5R1brnokhpfazDB1qrFCfQMR5FYcAHyUDr2pXKCbD4Syu61DphrKkmWWKCzZtKhmMJMZ3PgeB5nKC",
  "key11": "2uAdVYwumHVD1pFQZbzWUoG3KviPP3M8P7uWyGUaK2MeRoqm9BscDKYeznfoSWTpBSWZBLJmGGDaxMJBWVCdajhL",
  "key12": "5PdN8uQsPHfvSCuQSGincao4hxGXodNqkBdniFGMesvietdFn43zmwywbJdMmdMyk42pjKeTggsGAcAWbnLWgrPQ",
  "key13": "5gZ73ZkUpxNc5txyYEboZU1C7FePi3Pewb13MWkSkUA5Ykkj6AbH9b1sWKSB8oViNmUNzLTeauJx6R3VKTXaeot6",
  "key14": "436QXGGaU6tzJssJJfpaqGzMm7X11zH87qQjyKBgT8rZGvumybCXWm7W7xJXui3fJqU6Zf88vNvRxqfij9wj9AcG",
  "key15": "EH3SWjMznMcgcEsUKGgNcrUx5naTKm9YQMrGPgNiMkZWtgjaJY48aLss53Y5GADbTwrVQEfz8N4ySfT13FK9mEu",
  "key16": "HsvhW8KYauqdUiu7LsW4XR7616uTLaTAZdYgsN6TRRwz3fK74eNs3KUJTGuVutgt8bG4soSBBi1LbruaYmXWARk",
  "key17": "2nY28MC1ae6PMfi8GCdPyoHH9LdQ23vPh1pn7Zu6GDcEvr4d5ALBHDGmQAmERnKCDX4UDXL2kQAac28nBELb9rxv",
  "key18": "DLfdoMhYhYMH5havzjHYhD6VHWVJsUsusaPivhDE22ZCXaxrxGnK1k1tqnTWh9LwMeP9kFeZg3twZPmyNfNWcnT",
  "key19": "2ddS6HRkijxYgTQkyCANz4e6hAnzqzwifsJWZVP7YiWSXtMKyTScGD3GFSXN7HFijKAUmP2ikY2Nhj436c1tSz5g",
  "key20": "38q1jhodyQNookbXQxkCvcQPh4SdzHg2YJa1pn4NPCsxtj6wqbspTwKMkVZQVrP3ixM5pAWVKzkudshMK98JcMxj",
  "key21": "31i39HEFJ2K5DPFxrPTBFuYtDPQWKKVU8sS1C77G1nkv7fewE4Cz3acHYWgQwikQNXGsBVemjLAKJr48GjxoUH25",
  "key22": "3tyhwyo22y55Seba3UPeJdTyhUGw6pMpuJ36t6PJhoAMA1vJQykfESxJQD7E63mLMnFwgjqRem4tsyqEWiDBBzNb",
  "key23": "2deV5mpyzLm2o6TXzpgNWi1nsuWBP2xmp2jLXo2kB7Nm8Lag7tis8KzGKHLKdyTvqzRDjJbqZ14KcHkfjqhEbhSi",
  "key24": "2fvwZj2WJ7cRCvRQE1fA574NVjgFXQ228veBQZkNZ3AvLGN5BFGj8iGww2qM9cSj68ChTemBexJ5hQQVKW8Z1N8D",
  "key25": "5VavnjCJg1C2fReif4RPmu2Aer7YtYk3dtmAaMt6WumX1FbKrzeJuqjtd41tE4wHd7kRSbiUGp26FMEB6k8FQ1qk",
  "key26": "azsaNiWmCjqShzphULtVEVapfXXJp7MvJZj3rtGnTeoEGp8k3Q1CCdaPxUwcAdVAuRKn3yx4TfrSkmkjpCij9nd",
  "key27": "5GkPivMygfKuKtoR5MZTcxvBMh8CuGiZ4GBmz9TLxDvKoGGaepBpvBHeSy44Pz8VihcbhC6vTmMDdMLSUaHDFaca",
  "key28": "4MtRczJD5RR2FiRFRQGHDt2KkUGDf7GHXLuLXQrks4CvkpNMUTphQU7We66QNgnh4TCKNv6C5zzTSFuCh3zvTfWY",
  "key29": "4sHYxp9CF6bFNBQ3oM3Bno2KQJmMixVxjvx6ykP4LEoZzZK7xZ8XLXs2pFDN8ie9pwnfbtRLQzyLg3BbZZYTwh5C",
  "key30": "5zEAtCsX8eegBC9xAhmrLKqTy2FTTiypSr97BXbUpUjav3rFGE61SfQEssDpJ9ALv8gFrKXJ4Jg623pxfntF3w1V",
  "key31": "4ZPzu3Ns3SjNX48Vc3HW1QcG7v859Szv8FRh8VVAMv7N9939QgmRMDJLCWYpQ96x4z6N3UUjs8YkXwkKoGyYTXLc",
  "key32": "3MMJ6WijcQRUGbxkFHRgQEiStanCoRCiiHqincL3NPZwYdQ3s387kMsasrstkQF2LwVmJaTdRwXwnBhWK2L5r5rg",
  "key33": "2icWzDnPL2jEDC9ZmwHNED99Sjewrjb6XMF5pjsACcCwf7sXNFn6VPqkSYLhdVv1QZVVVBUC4rQeemkGon6Sdhep",
  "key34": "12KaHhBitand1eYgvpRMKtJkQtobjSXGQ8keVskH5woHQL77KeUzi8kBQ7JW5kdezpo44oXTAf8GZatCDfovLXS",
  "key35": "PnRXsL2C7JJwCJvD1U59jrfvFNcxCinjEHzB9S13gzF6w73DZfHkRfiCCNE54f63u1bQHmcXiLicT9Z6e9A5ZjL",
  "key36": "4xG27brb6nPf9rguh4LcKnCUMT5soi6pNAvzExBXZqfG4aKuQtowpm1Di7sKzBCTDQyB8wjwkHhU4XAGddL8BHfD",
  "key37": "2BdH8nvT2JhxMNchoC24vcMsvyBSJQr13jZnAWyQFg4LZ8CAbY9Agr974G9xWxM9RZtoYEdTzk6pWe6TpPquASwi",
  "key38": "2Fc36TEzD5dTBZ4K5kK9EHwYUBb9LKipkC2nZ7eokHFwGjeWUR4YEkbstfxJ4Fd1qpdrYmsBpYpqK6nCVj13hbyj",
  "key39": "iCYCf1usjPDj14bxaLjv8vfp5JpdMEEBvFBFALoujarTcKSubtxzxTxziYSBQsiJYoN6Sj4ePCkXTZTBK1WMNTL",
  "key40": "4rB2wTpuG41gx6WiF6MRczWFuQmaokYco2sohN4tKmnUXXmFtAo28u2MFimg4gTd9DZCUyk7JVqgiqXBxgFGRmtj",
  "key41": "2MGXXGL9pouSTPKLUxMeycWRuexomPaipfFsgqX3vyx7n4kC8rM3BE8sHMXbtpRNJjSCqEUQ4okLkCdaWkXBW6Yr",
  "key42": "2gxtZZMUGsEeUrvS8sUhyrk8LiXqRFFzTgiMQa3pZmr9dkZLUikTngvrpWgYGojp4CE3BBJiSz19nkD1qKJakDoD",
  "key43": "5FrDma7bPEUEdo5e3dhc9KnxwdMj7QmWPfrVjRQh6iDCDNhhtEZ2FGcSk2z2YqixEcMk75EZu2TScim9Ct1G3cb2",
  "key44": "2AzuMrzi7mGww5at2njNcmZHvA8pwvMHLGAFVCHyG2CQj96kbaLoXaj21qmxy2JZ93oG3TSN26b2ff7THxssmupP",
  "key45": "g9ccCy6bSaCeF2veoMcNXPpZj1dCYoWvnVjBvZ76Nw1zAR7BFK84XAq2McJq49ov7UJzMzwE8kD6oanBEbxGTSB",
  "key46": "5dpBuah7ViyToRM48wtQ6nNb7zbCJCVuErJ6RbRFtvpPBbearDjy8X4vEF5EmoaNvYxkouAL29DwTy37GXtBE9zw",
  "key47": "NJyH79yjauHKbK9NWMTVsfaFHHaRnMKYfY7eRUfRomdw6MuDvZG37qMGfWJA38LwmM6VEmuaLqrFouxkfhx4K14",
  "key48": "5iVBpnfqvvwwf2o2o47vhUSfoHrQg1uyrRNwU2sDuXmqbwKrCgN5JokNoxsoy2J4DDLDNWJnK8U53hV6Mpspp7qm",
  "key49": "3EV6GM7okUejZDdVDjhEpLBbA2a83faztrY5dWcEeATD11mXPcJbUQTBAFpHZKH5WxgoAJBUDprVvEZ5DzmJe6g4"
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
