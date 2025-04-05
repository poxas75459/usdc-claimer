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
    "58C7uut5Ewiz2JSPUEfWZeuNok4YVBTokAKRye6f4FacQDhRXTGfbpiKpaepQDyW3LTMMymi8xthDkE7389unqTa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66yVRALQ3HiaDbdv6VqAUmqGkVqbxQNourzRJk49HprJ4C5H7y1gADvFDi1GrVrbYPMJzR6AN86ZAGEEXJLBi1t5",
  "key1": "H5zQWdDazFX5qLK2BaDVE9b7ig7djj3end9QgDaqMvXk1CduAqyUZEcNaavjD9PibcRvWab7BU4HBK52BMy4JRm",
  "key2": "43e8rkawopNDv4xiN3gQKimuxXpPGE7knvLTqr2ZBJYryF4ra7UuS6waFReGr2PL8ToBLtT5j6pFHZvRZDog5d7M",
  "key3": "3ZQYfSkq1kkxkLiEtkyGbHdwUtcdG3c3WS9gnGZrkMAhEw48vYh2cVnquqwHMmVqJBfzcmBCBGWWisyEALtbKgc9",
  "key4": "3fTED3p4Lgq4rxBWM4fbuC9ujVnoghrX267LXUcXejsxLNZTmb5Z6uESSmwzGYbe98DBEZyKFm7MtEN4CL68KVmY",
  "key5": "5J2YgHFNaEJJQYjdXokLswnkBgZPPKTJyygdi6T4G7tBtzWqwFYtHuEHuCdzxtb1vZd13u5vx3MDXDQ3xNpvGw9Y",
  "key6": "ZsqhnsWHojetwizsGW7gSdrBKKu5anvgeBqoUEE9PLiWfDL2whb1gkL1siLouKtVvxe6KUBD7hkKenxVXGqhqbB",
  "key7": "Ur4DZ4HZJuQYkUcmxFbF1TZxG5APXiscm51aB5TrSdLLQ8cHMAaFS9wJ1awv1t439iyGDNRbguzhfWQN8XqZoG3",
  "key8": "4jcbcGMfe6Z3AWReDGppx1ARC4etn1AStfbvxobKPit4PK3HSshj2SDA4BwcyKqii9HLib674M1LuXNzY4BmRxBY",
  "key9": "3x4o5BfpxJv96hXCQ5izC2iAsraMtphafR7Afi5VyfptRSNu2vFQi7XMhYw4g2b3CMybsazjenG1LgeJhXLNniSg",
  "key10": "TRtKD85pfrbphAJHydR6Kh9mo1C7p2UvyYjLpnzxujE1VqdWD3bLNx6rkqVjS75eJHKy7pMQXoUtgu3yTxpU97j",
  "key11": "3fXgLTTadBDmw6TbY4ftABC2T5ouBLTFFfnbkve1X4MNvHgB7ucZefqbNRATS4YRKMujtznGfwv5R1Lp5HF8f9PV",
  "key12": "x5HcFQkNc935zezjqScHYoo96uwWAXLCiKSwjmT2MJYwwVz8niQBnMdfg8Txwq67qXEfkiH5vmgmRE6663LoNnr",
  "key13": "4Q4DStmquFCXD8fwLGGNDE89x2NJz8NmZ7g5LAW9ZVA9HyYfpN6kcDjSBgGVyBnLqB34dAZvTxPiSWNqFgjG1kQW",
  "key14": "XGM3qcCtsQoSiZDBG9SZqxVcB53WkY37dXrnXU1W9b4XLBSeVJg86bUHRfrzGG4xEQNKvsSiP5dvwcLuopdSZGn",
  "key15": "2CwcK7FUoyyNBoW9o7QYktnWiVF3XV4tkqkNMdu6BpCAWQyvKoDDUXuqRgYUZAMMPBDGgREsPwe37F7dye6vi66Q",
  "key16": "3PrcHLrXsm1nGggFiWoEKJjyAtSp9TnSCTTQrwshFNaYTf3URcsRyqAxi5XGtx7VqDKLkdgPQkXM3LiCYPkoPcvW",
  "key17": "63EWWhqAgxc8nDz4tLJrD6WBBmLaK3bNtA8KNWEJ4XL1eJ6YHFKTuG3kPJ45jsyGGTYw8DaFVW6ty5FL7PPXCcha",
  "key18": "4nypL9QX3neW7SYrRvZQbG95BpPhk7cnAiytQLFSZxRFXo1X3eGdm1n89rjb3iixQRxK7WTvseqQPPk9VN7xFcK7",
  "key19": "124pTpRXNBfSUYLjzpC2L2iT74QUWSMz9HJA2iuZ7wyrtWWFhkcHwYiwJbEXSop4H5Jy5o83mrhp8DqXVZEtuHBz",
  "key20": "5AEfSnUE6NciDK7mePxnd67tGyCiVCeBWZacWBCS7PhMT6b5Qxyh43qy7uXjAfs4Vx6GizWEy2Jv3aW3YpPcnNHe",
  "key21": "5Fv5duJLhXrLA8QVpyVUP9uyX3Rybb6bssPET45TpVXcqBvsw3xKJwHBNK3dfYTv3L9FcKp59iinQzckmvctSAmz",
  "key22": "c4PNYYx3MmmzkWzhVsfLdW7EiMFFDend3N7FcqUcqMhjPV9TBijpEc7y4jTMTKzsHSMkmA4T5xzrpMzmc25H7Pn",
  "key23": "57jpTeqZB9LTy8MNhchq8jHoGiT4HDicRQDv3HkUq8HvAFLfyvFmZVWZeo4B5bGN3zvPRhvhiTf31Tcjs2bPuzQs",
  "key24": "5d6aVjVpKMaDmovMD9LDystdDkPDtWtLHUwKYz49kLf2r6gAdBpPgfEFR8KRMatHwrLnBuHfR96DstJEztdqfuXc",
  "key25": "4Q2PTCan7ku6n1TkYNeJtuDjviD8ZbumWzPcTHfb5ErSoedUDMAb5Fy9PkJg42RCMY4hmabfE9HWbZpMz5afHvDy",
  "key26": "eYXTYe5rjLnGMDzyTiU6nQkJ5W9qfj93fnV4YDumEp272fNS2iRgLEV6GjDPVHfLtYAZxJoS345yFgDdzKQfDGo",
  "key27": "2MmqR6de94sgDCB63SYnJkPogCy6Jg2Um2K83Eps3xCtWR5cre8NbfokFWQmKFSVxh1zswQqmQVxJrJDV8upzGKu",
  "key28": "5eHi9fGdUbt4Fy4abm2k7Df8Pfq73vMfSMmMfwn98ACa5hEkwKhABDocD6KR1EC9RNJ6F3nx9QgvhtLFGEFbyUKj",
  "key29": "cRnNFS6Yq3vzcb237GCwV3Xg9uQBQkPLZJrkrfboHcNp898YrMELwuCiskU6M1yBE9Jt3i3xyXWEy6A62A3SS5n",
  "key30": "4urGeRxig6NQrsst6kBRszYZshayimY4qd2X9DTNLEeSW1KNfbDTT4yCSb2P59YToh6Cb88gRLeaFZc58HQN4czK",
  "key31": "5vLwEUsqEvYQ8GQ1kjxYP6oDxHMVpw7tD81aMyCymzBGzWzm1BXofj7xTueh1tDeTXZyt95k6xqSZjzdC6tMdHwF",
  "key32": "3GdJcVMESgiYZsnZEVgmMFDWsabTfZHhNBAX5nraNW1y3JJf4Narp3xsdYaULTa3KLxBJK1gr8XzKjPjp9w5ACYB",
  "key33": "3tCdHDhp31QPre7xHRKPHDu3G2WJPM7Bkxtqy2DKrWp3wPoNwSvsdume4CEJHRkC3XaLHaoEM6Cw4dn7FkBio6rh",
  "key34": "38jeHnLwLGJyDWqTkpYLUJCpyM9wWHrXX5Gx8VX4bWXcLTFAkh6ZJnDaEvRj9ubSWBiQp5eoeP9tfJ1sb7QEtu6P",
  "key35": "49ch6EtVZ542jw3UyqgD9Xo7VVDW1eWmB1bA1TVnSTKZ4vg8m47VWUPKST5MpqbQzS1eC2PRofQBRgGF35cKiD3g",
  "key36": "5i7UJmrSvTYJbQX1ztJKGxBuvteADKjgXz5aMvL82hwUan3mvKrRFdTNvsZWExqw8ndcKMofW45UjiXxJuXrGCKw",
  "key37": "WyWZdBayKeqWxMYppNeh467wEiL7YxXbpaVhcwHwjUisGtNDojmwNUaciaH28CxQP4KhokjYsHZwJX1dkczdKC5",
  "key38": "5iJeX3HAwo8Y827zFSE2tfgUWyagqvPjo3cVKHCBVrexewEFMeC7LKxXuVFjis3XhuvvPVSjjyNYhuCso9WdJnRT",
  "key39": "611ENPAJagzTL6WhycrpaZ9uZpTcFoKu3fGJmrhHnpwFGFqSYM6zHLWcpQJaSZxVazzMavx6EgGCBPUN4MRw12xQ",
  "key40": "3R7uEgcszstPXkpsawU2tsKrBjTC39prL5GXFvyamWVrV6qw2dSi5p53SzbknZe1HsHNNbG6zahQ1fxyuxu28nkG",
  "key41": "3WBM4EKcDmCag1BfjQVXeqaNzNmgNf69pv42ycgV8G7RFRvPRyxE8uUB8r1QbUchfXuHWTfc5DVMp4ADmfeEGbzL",
  "key42": "3zru9L6u28ns4dhcnFXTJqBX6ubjt8MPDLjyN9GMmxNdpSDka3RiAkE2vqS436L1DKK8oUYyNxh8zPi5sT2Sabtt"
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
