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
    "2nZaZPibErjvNDKQW7kEuMLzn8tcZVT4HtBdFHP9b3u2MzZNM5mwSrMhsoxkCHYq1JaeU8vgoGkYkdJu5ct56kSV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47rU957KGZSGSgqYj3ns4a87Dnm21Z3sKbE2G4QZjieceXTwXNWdurFsR6LZzyp8cQPEutkwVwUdyChdZam1QngQ",
  "key1": "5EVbTmPJQWy9mh9eQtfMN7dtPi8hLJuLV1iv41ZvPdA4wE6M1WSdi9eNLWyMeVZyXkKRBcnHfgGr1ZkxuHchXspy",
  "key2": "2vYrJ8ahmg2vkEAHBzxWGEenzae3GiEYAYGC7GBhvK1hbG5dsdCziVQ6F66HrqNtZuLWs4MWM37yEfNnLTTBMTfW",
  "key3": "3TLbiXN4DW4CWRWo83Y3NHPqbXpQTqDEzBigTb5SjeYcsaW2UMJTH96Lfp15Pja3G2Z4MFb2bN72BDpeMjKwPNKZ",
  "key4": "RcSMDrMnDE4cFzLRxKENhzGZvVgA9q4hFFS5jtLNaHYYAoJ1Tz18QoTmNe5hu4bs4fVrcBHhqfr3sX9BNVzSTzg",
  "key5": "4J5FZrkCAQkarMLTw1ZAK5RBBxo9ixRuTbYVEoP7SCBLTg71Q35FUV8LQvacXhno6KcL9XcUDrBY3mEdydtCLZaa",
  "key6": "2La9t9MALJsrs1FAaZgJaXQe7UmywTgznioBz96xp2CwFHDRhfsKLsmCVnXA5huCCd4wuKy1odPG7xYdg5QL1EBR",
  "key7": "4fmCNYgFcw6kp8peWyt4LVvi1GoeunqPAFansPzhGXEF8Z78A45J6Shtth45FeY6VEvoUnAkaCiQHciZcVdkoZj3",
  "key8": "3uwK9gyVfAYTJ5UMFoivj2S5GvvoW6hYyTPLGKReiwojVq9VffApexzoy8VsQLFKo6eyUoUk396WpUeU6Dy27Bbk",
  "key9": "3bKV5JfLBKGpMstabL1d9j828USwp2zva29HmQfrr1MRTDptoYuJe6xUSkZP3QqScGQLrepfae1ZUKRN9pjDd7Qi",
  "key10": "xJsU2C8m4nJxXmJUmkHDaVbHyqiQ6wM2EYXLCnT7VvgCSAAkc2QSjf33yQXqwK9GWq1YGpmj6DBY2X6mC2DUq3n",
  "key11": "2ZzWVaWQJjkQ4bUq3UcdAC6Y4cRpjhtJPiFo5dY8TvUjtmufSFm2884jJaCr3T6xyqg9CGqemoQf5o9NWECeWv3U",
  "key12": "3XQJWstsojr7AUKMUSYcE4c4SubFhpHPGJE2pqYRDPD5dVdGuK6dhegVUuXtwtVsRHGvH1KN1d4EagT8XQ9v2okv",
  "key13": "3SiZYMYjTAwzhn2TeuQVBc6idT17HJCjSGaj7Nx5khR1sBi98eGXk2c4G1ZHKW2A3NVUs1VaKnD3BE73H9bDLqUw",
  "key14": "S9uEJPAGgyqTZ6pDyt9EKMDeSVGxNy2XdB3b5ohA3p1R15ZoC8a2ijq5eqUF16NXhPuYhd1pfW3vy6gaHR713EY",
  "key15": "5YfbEkSNLbebgAQUddMy57iM1FoAF622RZC6rVkx3AHb8HQYSukhexpHCPDNnTGpRMsqVchANxt7vWmMgcNiEHpY",
  "key16": "5FZ1S2TsFGWyDn1EpzZ9TRcbBE4Y7z5BzFEcoAcPrhHYGiCgwunrqYxNNvKGpMQd1nar7zKWqyLy98JLn8ue8334",
  "key17": "wYnCmY5xYtsgwL9QJtA1euWHEsRB5B4q76zPgVLAVmw6DuMxzqmSeD3MQszY8C4AQeKDJSv7VMNzLucF7NPT4bW",
  "key18": "419kFhaz5mD5U8oEBVn1PaFqshfDDiD2v9iWqMDpK9GqMjkjqb4oHbdazSyHYTepWCNZZkgoQgsmJ5HoMcLhgtLU",
  "key19": "5axPJuV2pA2aen11t9ZtmpSG835tkSg5Cact1XiCSxqmcpuDx6z1Pq7bt8eDwfMEy2Tm6eAXXL8dUtKo4ZBDfpts",
  "key20": "2rGAtHuKgRmqXXN84UvatiBPRsMAP3M6PUccovCsHetpq5g7pJhR1k9wJN9JhTaAGezMiETjGV7q4FbRp7fSJwDD",
  "key21": "4mgQwTguqeCPV2vjiTVWkSA8A7UeNzzNCNgA3KJj19ucghzDBNCwAzfXUjBitU6CZ6hBYBZpxyyFrfifn6uJrrwv",
  "key22": "5xbEZ3htsu7aXQv8nwokRo4yv9btJ2Ab9J6vMauiiWMk84R4e3b4zNwqqEdcjHaNHzHC5vVYF5ToM7kPoByX6wJq",
  "key23": "5GhzRQSxBaLHoybFJ9dJzcjCVDsVEjHJXP8xBhs1owp7hiFAtiZZspxzBDLA8zrY4B3Cgiv6kWuHxKrFs64nQTZn",
  "key24": "u5d5jFhihUonXKf1EymxbCRuhY2Nq8y8VnzaJ7r5XW8moy3RsMjv7kCugUxZTZu8C4WVgLYV8mJC2aJ2Momi72m",
  "key25": "3PHD9gYuHNGGCeyYm6vAxdL7wcJyVdJzECdAHQApsor8HFpGeA1wP1TqUaqiwK8Y74CK4oqQPCv6yN3Ac2DyNLbG",
  "key26": "42eyT9RckDTb621X3ZXCovPjTQF7npYsNxwwgXbRQsSLMUcPYQJarUNeJFL3Mw6Vd6nkrFPssDSPmvtMGThrfpZc",
  "key27": "2ipXBXD2fqeNQ47jjWH7GhcZxi5SGxRjF2afsBMg3KPRDJa81AqQ8gRZT5jpCtg2JkV9vQYqcE7iTiAtf77BUdoX",
  "key28": "BMpJQqHL5viJQ5XhYyN23cecKM5aaEnGj7wAtiXKcNKD2Ma3PfbtqREExDRrT48pfwZ9uA3zwCJc29o82gnXZa1",
  "key29": "4XZxiffiThFGsevRxUxdbRhhaSRzvBqVfAAnVhzDyz248gzdU1mBkNv2Tsi8rynRS2w2ZYh4jNRyfeGMbrUthV4c",
  "key30": "5n5Vh8mHfCdQAfgLg74CBuYfeSZBJZ79mZzSzLvazeYVFoEySpmS3vQnLnHhTj5LR7AHmbbpQU5Bs2apamr7GVjM",
  "key31": "21kmKo49S7EH3aEm9rWUswihh1eeLpyi8scLhNQh6FxMewX5XQivRkSa67e4MXj5tTUuEAN3ruexnCcMM2jVD6oB",
  "key32": "AbQh9rqXPPB4ADsbjWr65tQe3ZUEwiZuYVHca1LD8U64XHBXLtoitW6rFaNdb75ePAv6Qr1an6hbCUFw3uo2LUK",
  "key33": "3vrvs58RWVS8ju2hjnEd2nJ6rLZVmnCLq1dJUW2DWJfqizS4K4bS7z8ZbbtHuYgJrYVC9gRFoJJw2cCMFVrVS5CR",
  "key34": "4yyUZ3EpQWwMwPRycqrxxtXt9sjoT2GHQH5VhtZ86YsAJoxyp7TvXgqkX25ajyVRw7LYp9vJoDW177M95pqifR5Y",
  "key35": "4Z4bQD8EqKMEdwtbckXGAyihYU2G3dNKfx3gwvi9aMLHqkVKmk4RmkCUyx7zZSAcTLfnbFig5efKxQ3aCC79LeoD",
  "key36": "64xzqZZJHF7Y8HVJiXnSZjrpRdhM22XYzTL2UmfFDdFjWrEL9z6U1XQA75zw8YHia7mWh75JFW8M2jcTmTJRTHL5",
  "key37": "TRWm3bABikJpEwRMMaTsFjN2YTNcTmrGmGpmr124h21n1jtnNgbFwPk4VFK6F5pDuLFu2ZggqEHKKHGnfZx3aSu",
  "key38": "5N5n6oS6CQzyMYKu87xMq98nJD89u2EKZSVvFaxKZvmHi1cnPTvrVPqfy8DX3hvm7LekMGyqXVCsbt3BgDVoZjCS",
  "key39": "4YEdngfMd7e3mLLSozJaq8Zijz3q827yvQR57aMzj4bQJmJ4m3AALpqeLFjDzVa4ZnkcEppStsrKJn5wZEfTsXbk",
  "key40": "3SXd7fusqk2336T4eKDJBFRCmrpnJMHHbJa1mxkBm2Bawtn1YMg6izMBLNtE2s9DbmwpYKuyP7ifoRt3QuSppWpg",
  "key41": "SzfzydipD8wCYfFKuFSPMhExGHxJE6xxavXq1AMN6C2jBqsvTNEbAaqL6hrdnJ8qtZihhBB56kJBpyH1KU1oU16",
  "key42": "CWZWAA3N4A1EeufUsqLSzNyu7jWBzWvx6sY5XKcBvPVoELDQHcx4jDbY3frvqaNP2SsUMwThmh6W7jbFprzfqrY"
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
