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
    "2Uo9yt7ckC5Wr2iYM4cazUZiuTekxMbDSjjS1wy7i5Gm1Z1gXhKBrWD5e9bKkgx9rvkPCPQSM6aSSxbSgdJ8nopb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ck1Fw6c3sxjcc7LMX415Mm7UNy64TaEtygXxqc8k5rmjnFtLJhLiBtCx4KdFhK1eph3mQwTc6SGvtcfgQX2tBFe",
  "key1": "ZSWprhsvQPSaFGoxY6rT3tva8Ea21RcG7Rk1niccMoQ4cTnf1MYnduqgCJNh1W9emS5qcvkHarDwt7ZKjQx2R6t",
  "key2": "5T2HMaKv6CTNgeGAzpWey3o9dygpp1xcpG4HMVLVpEktzAxebkFxYH7WHosPJXSKmYuEbsnSknr3WxVTVToDnfgC",
  "key3": "2gyD5JQYF8FZHhrDf1Ly9pqt1MYAuv2dmoEJXTbi8QCAXh4muvwKvj72HL71UPQJC2nVRjdZo7TAVV25juy99ZQa",
  "key4": "2y5EQ3jJMrCpqzyvzqvjctsBtrupHDDwqedrqLfPs6sNJdpjo6RjJT8ugY2yyYQU1EMKWKNwMyodVXvm7UsXeeD4",
  "key5": "2LtyH5dXdG5eUpT5hX6Cj2puaL8veFcqnt3wLFm3fru494Txu2i1uQAPS7q72XFRE5WjuwHHfmssaLR6rhLaAmZc",
  "key6": "5zrvTqorzDy9Wg728YDa6SSNsKzbu3nxDd1Mqir2QzXYYsYMntcGJQZnaaqafSB4Rebj5PLrRkrzjMu11HcScFT",
  "key7": "zv1bsvrZJbojbXDy3KzunuDoLmrSQPVLLnEXjirNLD9f6TP9BKYwRRNQQ6TbMkd2i9qwU8UgsBzExa2ExYaNadh",
  "key8": "23V2NezRhMLzQry8rQqFqgw2RpUdx5Pwdc378PKZrdXtazwpLvNyDoJ8gsJh5ffmB1FwPQpFT3u1TMhP6oJxs2D8",
  "key9": "UhicYhEBTQ4Ys4qL9ihjU5EzH65t5GBovabujsqdAUWhyeodisoqPxfvvehfNZd9KveRsksGe8WeBceKNK9PJKy",
  "key10": "49Nb6qsJt4JhUJiZSNxvvPZ2KFW3wTsnZEi16iBKe8NuSTtGcsY3emxP1T3PMQPph6k4fZHsHECm2zFyqzZLUvp7",
  "key11": "3aToBk6m2oB5TagaijpYTVr4w9gxgwrhE9uZ1hZ2innUYjwUpMU1xXSGC6gauATPB8dqUQxM5Kpqu2sm1rrCVikZ",
  "key12": "58rPuEfXaVd6PsDVsyqAVToKjjaAy58S9Z3S7cN3r5Dk3MPGfHCy74BKGnS7tKy9kj213T5XADaMQxMrjLpRJVEs",
  "key13": "5c6CbWhd6CgAQg7w96qJLrnrkmRQQqJyxVEqEy8dVT1uKPAphXyTkNghP169Dvr8HqC1fWVUfstQ1JHowqPEkPed",
  "key14": "3xupvRVZKQSiKbd2MtN9npS5VrL3KeM1tjy1KvRTMja1MH4HnQ6dE7dCLnvGeGVShbA2oTpXWBjNKt9HHoHZF51S",
  "key15": "42P2vN5qU3jA57Gc4b26NaYdKMZ6mrbBKpML3Ju4ahARNtxJAEjWx7USthtMMyux7SzhDHhaccZYp16D4fedH5fQ",
  "key16": "3Y9LTT9HTRbvBjcbH2omDAWT9rBZqGcJ1BasrK8oSvMtzYap8k1eQJxEi11gDjitNohtRKL1h9bCQ3r1HpjXUaKz",
  "key17": "56nJvznAbp5zXF8KN3W2No6nRoKJupw7q1tCZk5Pd3e6m6vPwvxp3w8caiuWrq1R5KWwAzLgoCZbctKvLbhSBJ3z",
  "key18": "4GHaqiLgo2HzfXNqvxZa66MZV1qEKrJbNk94JtLXzMBJ6D3yZ8xC1ZNrWc72JY1wbFsoYoqGPdfoYMsvPVkbb5uX",
  "key19": "49o9w2fpdMYXhmrabYsV8XXvNPDdD7x5GrZ94bFPY5gbbhdNpEMag4BEmmvxwAF7XAZwD7UAzfLfadvDMwLcNAnE",
  "key20": "5Aq8T7R1scA1RU3xfGgyZAm3ZaTuvXDPmG6oLjUHFwNqWLcHVf2UAXQKJSmHc21VxCSTfgMvni1D6o59arGP9pyU",
  "key21": "486aS1591uj2AzzkFKoRe8vBRf8y7G3MQivszich44pmKUVofWvyKVu4y6T78mwvsDU9jbrxeX8sMd5fEMdBUCqR",
  "key22": "45HLEHThMXhME9XcC87anevycThwveMWmSE9iqJF6t19v6phPeT2fRyXHUkS7iYBySpYPXbKhQZEhm6Amyd3Unby",
  "key23": "4jUbk61kNoYUDeo2nFHSMCY5XM9Yy84QFrCnRD1TLjDW5uNc6QP5cu9GPgWGSxZEgx5dKiDHM3HaGaG8WeJz3CgZ",
  "key24": "4tJaDim8UWvDkREVTCmmDMnqthBPgeCEMxdEqCivYpvUuFC65n3JgGu9vWcr7TCL3Y9gWwj48ypWhPBjcdUB6zXE",
  "key25": "21Pyo5e9gXuX2NVrerLsLCSJ2wgWsKTxvw7ocqG6gv5TWKV3N6CnzomnZggsoMLUSsAtLZqE8E3hkWk944RDqcbs",
  "key26": "4v3am3ESbWeQDutcB2LwMgFNiuSqFGXhzaz6pgUtQKxK1QUbCVwBxhtjUXp7fAR2Gdqf9dTGuvF3MMv52kdMVm76",
  "key27": "3DcxSpSx1MWkMfkMHYFNewbFdDK7icYX3cTpxEHko6AxqK7sDMSreDMovVY6PTDUoWkvv9P9QPsupHaPbsbCqquR",
  "key28": "4iafhffNU8h8iTDpobBV2n5LNRKYsk91n6SbxtKmQUbkKwrU6gWDjxHYqdSZKHfymgsfiJb6Ri6ZBiCx6KqqrVpV",
  "key29": "trpnnLiuvAyGvHs6ubAtJV3pUUMKsZstesP7cft6eQCtDc1ecVzobR7WFzZRAAxZEPWcBviLne924cgtG6k9jcX",
  "key30": "476PpzZAM2GEbC97rvCixVbc9GCW1tb4vEktBmCjL9stNtTDTHuZi4RBxsfQ8XkB655wcqeg721wsMoviMysmV6w",
  "key31": "2tJS118dq8d66CCCx3wQVU4LrZoCAfFuaqCCQmEdkNjW21Dz6CJKgGp8xgQv7A4iCUMcfRrdrwsCjHriAEEMPop",
  "key32": "4NNvP7PettdYZt3nH2x76Ff6Yp6ja5ApR7C4WqzkcczDtXJ2yAx4me5267DHkVj6BkRd8DKUAgyE1hCQ6S4PwEib",
  "key33": "xnXDS1bCaWH3uMGrPCuNPYgvSwYPkHnS3WECSCYH7jNfjb2D9FBvNNFgPMmtGTd6zLzuXHF7SMpAuwjQnCnE2hA",
  "key34": "QiEWfiGoHCW5T4s95SsDZS8zdSDvBqQn9e635BbtqhKsZmpiEbdHQshpMrDou5Ma7MQW3a4Nnz2xzuuAxVwZtxH",
  "key35": "5xQDArtd51Y5MtdrPUW9QcQrKuk9oUTfPpYueAzHX7qWefC2xwG5DhUnYiQbSEqavZiZy7t8gf7PY8edUETefWw7",
  "key36": "32sUXtvxvveWem2szJfYGVL7Ld1ebwqzBStcQJLz9SAsfyUj5tNMJkp1Wo4gu24xas73a3SxTuNaX27NfsjqY8ju",
  "key37": "2RUX99wyr9nJbXfzqGRSnLAeXSNrWGgdVuhqxEroxaDFwUAtfZmZZb9jjCAmo5DzHUkX9M8YubyfVsTxQg4jzrZK",
  "key38": "4KWX9X8bNu6XMb3ujpLy9BKmpA1JbJKW1CH174dz63XydtQHxokeDKJ5iDyoF7iBvjeuq8Ybdsa3Nc8XgUWZvVfX",
  "key39": "SMYDGYttvwZQtu3Lnhj6HWg5NuAXt7sTNeJjATn7XrrvnkP8BGgBfZZNmSUUAHC9XFmZduye59yekcmsHD93xzv"
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
