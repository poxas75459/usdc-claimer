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
    "3NzxGY67j76U3vyzKnwuggMwZoL5sUqkbvbPxbjyH5pk2nTgUwaMi7bJ7xvE45o4HGYVsqEZUqY7FBiXDmYzJ6ot"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PRKYtWYQ5P4NvWja5qLZyvjtpVoDnGB1PEc7PBH61J1f8kmSoFK5vyk9fUvGY9VPkiTJjVxfBuMq73AfjoJ5Vnn",
  "key1": "3ftji7SgqK6YjuT3SsvaibmK8FowoRXFwQBcZzUqnCo7fPnseMeQ8nkX1a1w9kzJnKqidLyySRss1qpqgf1HkYyF",
  "key2": "57k7exx7EcxNoqixSjQLrdndGy2XNbxsVmCM4hHLdzAwUzDx5NeQipbqkgaG6wtRFeBHn2mBpyxPb687qi3HNPrv",
  "key3": "5kcuMmo3ZQaERfTQJzwqpcoxCaYg3yffuV1qeF1nXwwqknV21QNDYZawf5fn9ReEri8KpFkmmqxcon93oP58hC9B",
  "key4": "tkix1dnHpn6AG8aCVeWmhkaepeBbJ5q4dBFDcC7NsmfnsPwmaQpJWouY2jCw9GNiSDGM5oUMNMpwm6r6iWHFXcf",
  "key5": "4Xun5J8yh2GoMmjMAqgYotcRuyaSvkeHrsshsu4Kp3CDZD7GRKEBpZFu52Y7QpNCTotAdg42BAYM5b5wzVRufivs",
  "key6": "5mn92jsLBSMZetG6ZncZ2HdWXgYVE1XxotjsYVt4sFUried6kijw5XsH1Z3GW1SFdCi3DFysp6hp1JTSGphHfxRs",
  "key7": "5kSSRcw7P4C877mYytyG2sbGFxuUBww5EK87cvRzzMiSwoyupEJWRZ9NF7wVZyBxzvPkrfvd1fHtH6rpDgc1fZ4M",
  "key8": "6SqdNwwj3MsBK56BhLi2ut1SsPe1EDMWGnFf7DXjS4D9U9mLgteBf2oUvZjUneGqxwkLjoWEUtwbtGrBKySWGNn",
  "key9": "2jAtF1CsY6iQL9uNVQtSKjxfZ9zZXnffHdFhssNuueTrx7JcfMpZEuXwf5x38Vy9VLtfBYoHLgQrg7Cgp1UzNyB8",
  "key10": "3ZXqMmKuFK8Pd7xjTwucEnXM6ujgompKXPSpHzsWJTQf8bBve1Y2QUc3uJ6X1zNWTPccN7a63Xj9MayCFxZbypRa",
  "key11": "5dZzHNotHdxrPtcBi3qU4CZ8ZJFHT23cfXZ1fwqjsCHYhpEYND44RXqFsq1Wp6vefMuNZwXpQFRXgm22zFLRMQMK",
  "key12": "Du4uhjgntnGLq65enkhfZQo9JHBfiakPyzAAJLbq8U9ZBssidqEo9vwfV8BLZRqjPKDaj1KNqCjnTiuabVZ1JDP",
  "key13": "go2PFtEvqp9AZQrAkSypvjhxJS75UQpTZCffDNTyXnMQQArhG3v1aa7tzDSdgtmHkrh6WdSNF1WcuTPYb7znqBJ",
  "key14": "3fhBNRcba7HVcyp7v66dijHcza6i8EgbAE4bQWRr1erK1tSyZhdoQa6M8c25N1WaUzAheVMbhjSXWmQLx9RE9bpr",
  "key15": "49zyVsCTUrR28aDesgZws8Nsi2Xsm9rySr2SsynrwmhGbM16WgwT2uJmJYrBTbph1g8Y9WrLUj8kxAtcAdX8gRjU",
  "key16": "4kPbPKfh74tprP4k73f3VwPaXwEsEhcqio71Q9TVhL2brCkguRufjtFycvXMAD57YRh2nfjW6npYG3ast5SqdoYH",
  "key17": "BYBGb5oGXG7sYYb2xSMeAEo2usiPbMDXJBr8jGsNZ8Ew1aBq3hsYfpe2tcqDj512rRF61SrXTGT7amxVEvHCN9E",
  "key18": "3ogRee6ZHeAhPEGKu7uqtXuazE4YgWMNx2ZBVC94STG9Nzny7yq2QTZAQaBK7RC3rKJL6bHShoynV8vRLzjzdhSD",
  "key19": "2sdUQKuNB6WTrM2Ba577BzDGtLd7Hdr7297eB8xv8vJt3jcyDw3fiRRFfVvs3fsa5e4Fbf3Jf9LmV5yweAqXzeXQ",
  "key20": "4zRZAJLsUdeusRFmLGiyamaSyQdnJDASmVJbtG6A2HJbCULhw6DHg47PvzcbUihCMuXioWwdcnxat861TwjQ8Ffd",
  "key21": "29iX2Pwu3GAEZyjAF462gTEvQLPmopCyckpgFDEQNJqzfWhkoy2Cfpdwq4BSAonEAnp91huJDScKrzA3zXCtXv5q",
  "key22": "59wafP1oatZUUWXb4syUuk2DAneRBQ1aAbk9jALfjCYfLSdPQtKKRf27vWxqMNd29bAXLXEBcgsmPtp18ho3wot5",
  "key23": "3S2BJ9DTiuNrZwdsYhegGe7SrRva3zH6RFENjMkfbrmAQNRHjaAdje1MkYQtcjkPDgtFWi2VpnYjgCPuScHux37B",
  "key24": "DiFMt8G3gGhxwKgSaDKv3fhW9V5M5qVKz3k7dGhVfGZVEhBBffUVfdXvRY1sDnmgMQ1v5Zar5xx3rz1buYM8QdN",
  "key25": "3jdrixpX9Q4oYiBoqyiQ7icp7wNXJokD3vCJ3KaFy7CfGRgYgarLpcbYs13aPFqfhYTkCpMvKVcSfChSSrut5ibB",
  "key26": "3uiC6ZeAxve1fcunUsbtF2bjKrZ8yUnaC2eV8NpqWp19CPEUSAqqZetjpF4sbkxxDKn44QcVueP5vq2ZmEn99SBr",
  "key27": "bNRNGECfZt377aYwTZahDNUZiNbJpgpv4gPsXKzZqEgHPEA4QLfw5nD5c2UU1h6KREJjoJumnZfCPcnBaF1p4d2",
  "key28": "NKrnA5hh5Bkv75Ts4mNuitEsdhTSwFMzUw5mmZ3aCagf9BooTTRYRoRZy8mKB8veELeq3YFPihqrCUFx8Q1bNf4",
  "key29": "4EkjmZFKHMozWQtEtfcFTs9ipMRcuPKQMeArYcJWAEWFRtmrHwqMUDhcMRxUfEXseibLmqaNBo8QzfaTt379pCs7",
  "key30": "2qoLTp83WirVK6DqB3zNBCxtcTzpCXwfnqL9FmxgrYMe97RYFJocsEXgWD7ANXzSzKv5AmMc7Cc9LnQz1mpn9uXg",
  "key31": "2ggjmYFReESrJGb3X4sWMrKyHSRtCGiresphmWG2ssSyTq9bNVrr3XPZdURydDJCyCqrcgkRKWmKDgc36D2m1w53",
  "key32": "54rQMb5MLcpPRuUsaRK4HsBZRTVB1xQ1xHbm56Gew9V5MupxfXB7HNuJeK66wkFoPpBo3yRoz7DkkGxsYqZXhxKL",
  "key33": "3CMnTbM8MUyYJHbPnYqiUyj8WRjScrwQ9vuSc5sj86hZm6MQinnkbuEpBFMXSLhPvuTCaqZ1nKwEC3s8ijhkGNh3",
  "key34": "KBmixtXpnNnXM48WsCNAcWrxmihwdZDrr4Y7vvkroMoNGtg2ukrWruZFE8iWo9EoLj2mxaSJWXk5rpyPmjPCRHJ",
  "key35": "3N49R8efn8P5yzHv6hRECn72z5SUPPhpsmQ5GTUcJ4362rt7NtjBMy1TvbaGuTrEyPh5ZpEbApKwGhL3tgSbzs8z",
  "key36": "4UZWcarhCMopx15TrbsHVukShtEKJzPaQXzNEXj2Ff2BzAKMxV1QpCQPdE6nFGg7qhU8LCLUUNxJy9gA2Tonezyv",
  "key37": "5eedntuDs84nCraiLKuqaocRTWmuX1buuX1RkGXggGkpEFVqLVvnomedzcy7AXhiKQmbyeNn97fBzEx6n6RVm3q7",
  "key38": "4XdHNAmaYT51pLtGMWUevbqEZgf2yxUFUipx7SJ76MQTDXUXHvu5KmxrEfEzKSL1WZLNrpzouaRRUE64qJMP9AEp",
  "key39": "JHacw7iaVzxgujKeU5dNRofo5yFmBBMjVeyFLRTHs9KXJr5HtV68yXJgzXmgS4raCK2Kpvq4t3PKJaJ47nryRtQ",
  "key40": "3Ryb59WRLzJxpniPaoW2SBnci84CGUTRiF41fdZTEcSHp3txAGSWaTL3goCBCfWR8habQeh7CcvqHAPPEQ2gPCz",
  "key41": "2Git25UdJpYsKrp5W6PgoRQVw6i2gZmmwdfzYfZBMAJ6sP3mEc3Yy6KrDtAiyQMys6LzbyjbpK3wwBDWtwdb3J8L"
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
