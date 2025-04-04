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
    "hhmBFGWtSGnBeFABWPxPgvHambUaiZyvef8yN5kNSURy2AdfSRMBExGt58V9BxsaLpxYsGycZHksCWeXPA4DT4D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fNnyWoGYFbDDCv6oSHDihmJ86r4j24BR3hXAWWZUWG9WCH7fpK2G5CwLgfHmkekmmgfq8T4kEzjAN51ZnYqtRgs",
  "key1": "2K1HCaYbBso29bjuydqDBFqV87NjWnM3wZMAVD9DD81NzDmUskw5jqCQ79Wwj47wxRpzKtZpFQCoYXQLPQq2gdTr",
  "key2": "34M8MXigYrH7Xf6M4kRr2fFugNRkewrNDTGAMGv8QQhEzitmtPAc1cecZo7GATpSNVpqwfdrcEcZgoqxwmbsCzYC",
  "key3": "2cuqvKzF6ifc8vdrMVLhjjqKBj5LVc9mrGSq7UxfqTJFB3tMyesJwDaqVyhH9sKES6ogqx21FWxAqQRhr28F1qQu",
  "key4": "5QAVAVwNoSejzu42HFPznKV5CFiLUe3o5cpqM3b26ErmB1aZhdMX6c4Go2SZuifyGogasP7k69BesXfzW5G7igJF",
  "key5": "33oW1SCDTMQwETndWRa9WDZaCCyUHcCgL8CoyrRZF8BKdNhRKVDyp4A9yrWUJx6PLz8ZhmMrNfY5REMssBD3sMv1",
  "key6": "4vK9b5CvC1VQZm6X79vvVL1TWHoGDyakjG5mDPdxt1vXyss6y8eaDXMQK5ucASQq2H25w86r6JC5xU1nRcD58t1c",
  "key7": "4LyUZ69BCG79Y5KHAZmfzxmExnifauk4tF8URrsWTxyxw9kcR4zKxDzzkpHe7UHXQ1u4WMPMWWn7sJ9UMY5duHvo",
  "key8": "5TY15JZcRakLvUqduHMxRNEBZ6SFaPX6sxNYBpwr9cn7wKDyCHd1BxsQk1srYYLPffXLznTv8bHzzQHKwxiPXKtK",
  "key9": "2SAjqUZeDzChhdFGZ3zXhcB5gnZTN3UU4HdBVEuPTwV8NjCaACnw4MEozGxj3MtDkFJSzD2Zm9kWWmxMEghAuiRh",
  "key10": "3aoi7JJajyPZcMTmyngGUPujiJu6SjjtvJDtS2fYRjQneDL7wZd1GNKkqjndKpTAF7HJWkJaEAFu4dELgNcBGYGP",
  "key11": "3u7q1CwbyBZUVUn3GrAGd9mnH2aHhGmJ8SPH6G2fSV8dpa9TeYKZ1YNboUyFM166ZJDUZ9rrzFLsaTSCjD7e4u41",
  "key12": "3daywyBfmD2yT7ETxzhrWxvtfHRBnrw8CZvki55PoB4Q577tAEkbMZsM6ct4Gbu5q4ZPUPvZG7kQAUd9okUU5or2",
  "key13": "2mkzn6Z89BTG63aMzKGTBTHPsvDXy87bCcnf5W6hCCod3at88AouED7ngDWPdsrJxSYjksPqdtq44Jsmbrm1Vop6",
  "key14": "3JqTEoWrR3zyQtJF4xH31qtW75Naj87YDHBY7dKT97y8hJ2HndUQx8Nit35s8RVtG6X7BqG3KEBCup13nBVe8Zyf",
  "key15": "3oWSFWnbx5KKjSHKDkqvzWxsKKEMvwMJEAAtFjxpjPXJ8tgM15ecqS3MP48ZEfewEPqWZeZhmdA8AQHvUEEPaqut",
  "key16": "32ifNRrGHDmTQna7TQ6nRXe3MyKneGfqRU3cPjaXKyRQEFPaLEnBiRrpVbQ6iTVNgsK8aYtiMeK6g8fKucZTSfbF",
  "key17": "xKrKTDF1MWmi6FFiD7cZiyQZNA1PBC8muKY6wsPpJLv3C5zyDkyQmtmH1hHsu5TonE4DtTZ7XMZ8cL7F45oF4UZ",
  "key18": "3FkdeFB6GfiacX2fdYeKbWd4TQkEidSw6HzfGZvANExHXBBySH6cuBcCnKQUfUPFyGz38XmMeEzoZsYm5x9bThNc",
  "key19": "2cJDRvA8qe3aM23tveiW7BRG1zdJZ9AULBQLxUAqFo6qzPnq6AvAVeZSn3mH1PA2c2f8UkqjTFAt59tdcsgGjm21",
  "key20": "5K9X2us8fyycCKd8ULjHvtHc1eMJEWdqtyR8awrziArT4NnVtYUFt5pCDttj7BiY74dUU1PA2je64Cxefh7yfq84",
  "key21": "5gt7jFXrn5KEQD5RXMAHChoEUWXDfUcnyukER3kTK6oMa9jextFWnmMo5pfnbNVg3SHiXA44dkomnvhF4gmafNTn",
  "key22": "4uMMsUsXv2diQ1DbWdecbe8H2Nf54VXXxrioZZbZhYq9MQqYyq9pbyXEwPeu2TFh5zaEa8joudnQPnQPifCDCm6Q",
  "key23": "3W3YeNwJEb6pBHxdrdUpTXKx7kCtLsXeBChxy8JfwPJoNsLCmXxiB3kCaerAeWhGwJ9ZFvqD4HDAaeVu1qU1A3Jc",
  "key24": "3zr6ZtYzNJw9yJk7bD7DGu2jL4YQAtmBeuCdrhfp991Zkc97V725Jtv3uEDEGeWU3gSmnhGNCki5hj7jztsZ9ahu",
  "key25": "3B9Hwkoz83WYHB4zh2X4JdQ2Juj4g9jLUfPHqLXj6Cp9KDkrVabhpJwbFufcntXuzE5ZgEUx73edVLdmuFhUeVFx",
  "key26": "478VDxwPqtPFPn4hiaCvYzL3pNof54GFFM9DFBidCwMY5WuVivtNEnjJD4iYLxSkrhSvRrnEZDDgY59Lz5Ei1VYn",
  "key27": "HhSVazE7CjJWbmmMJmnZ1fAU7gumaQ8uznN6j1igudRQnnpgA3BN7aJ2fxyEFzExDNbiGumHnReGZnjPsTYUq99",
  "key28": "4fP4iZ34RWKQY5nvZ4QemEB96i91NXhbL5jGjEFGSHo5GD146coKs936RiqZwLDuTqV2Nv4hV16CZNMdwRZx3Nkj",
  "key29": "4ew9aXgGd8tgF9WtQ6LjJjjg9HLBtmnV9ks8J4z8z8iPYzewykTi1wiJJykw1duf87vqw1Jd3qHtBKfLvXmsPcfy",
  "key30": "31zvHAjStDv4Mv9TKC4pFGvA4tg4canma3WzZPY23aBSQJCjXhuKjxyhkjbgDfCZtTwpBiqWzDKAwN42rFTobHuM",
  "key31": "21qhkDGAqSwdG5eRUJWKucmtDA9QSiYh3HbiKQrELfmVytcWcAsCuokptMrC9td6d7M84LsBK2xpz17k6VYMCNYn",
  "key32": "3SsmLjvvF66t4hGkLDkHED9xyUBmQzUouXcuRykMGB2Ywy8ZaSGnbRyeF4RYzJhgxKG7Y9fQ5PXpojUEYPQoat8V",
  "key33": "4SKTetoJBvgDu5SJ6csEt8i8X23vesJqDKPx1wyXbc5W6N4vRjQJV1aQu2QAaCiXSvHd97vufoeo3a8ZU9MruSFF",
  "key34": "25mM6uVzxHy1Bhtdaxi7VMtDKApdAFem5LYSpCJyBF2Dg1DmdHkUMEsrsNSMTMqBCStvpbka8wfSqTKmD3YeXbPZ",
  "key35": "2wqmhyypBoVLWEWp99WimRKsgLgodQfcaZZKZb6x8QAyFtWBsu1q1qPqUxNVjMX2A3wfJNxEuNhqD2RX71zhfpbq",
  "key36": "UA8okgVcCK5ktH7Ky8aDWzAunWbxLvg2eTGvknM7oQq9pDpDDFxfRQgJVHy6BnsSCgHVtRLnZQ4ev2AQZ9a7Eit",
  "key37": "2rGPtyGsX2mQt2VF56DB6g4d9GVjRBNKED33GwJmYXaKCjtu4w5hcozv4AiE9r8rxt3vQMJg9kqcXGxmho6br2d8",
  "key38": "53QUCJqqGUT4M77FeH3cMFQDSTyuMrgijXn6KhdHMoPeNzmY1jJcB72vsWcftSrJDtkFDmwDZ2gXC9qbvZthXFxz",
  "key39": "EeY26HUpCbGeYpwvSUSmNJK4ARJV9ebHy1nW5e52gwi4ErX4JjePvEJqn8CvTWCVfHUhkZHsguZvJzAC8sfNuAX",
  "key40": "5vqsh89LFZL6vNsmdMFpX7z7ThimD11SnaM19KvxqZyCtrazmdgH52xaskYvkkZ3njMaCeuh1zuMDbcdWzKt5PpB",
  "key41": "5EzZRhd5SFFgcptPo3MM8jxBBTcrDpmDssQWxG4NKqRBQeLsZGjfczkNpFdbt234ww9JM6BxEXDV1SuWjZcTmR2F",
  "key42": "5oJtJUq6KJp2wHVSjkTs7eBE8D8N5bRRXKrFrfmperxd6Rag9JQHuUdKrbRQGZpZEdVVtJ4t4CsTHs15bjha45WW",
  "key43": "38r9jxcNWgaRtRU8aSGh1H47AH17YGgW8Ds846cxnUAEEaBnSxwtNrGhrrvGpabcvaaHtj6Peoex5R8FvYWSzoKa",
  "key44": "3NABeRc2z8bgotEkZseypZju6M7i1Eerw64Vf9xL8veYHFWaJzmQF5dednv7eTU9APBg2WVXgLjpJCQVYY2zKrzm",
  "key45": "sgB3gwejskYEJ4cuDVub15PdjdF5hfgL4cWy8WzLZrWDhsNdW4S7jqvhdQ2coCjMstuFqTXQK3Q63F5Zfiqo5oi",
  "key46": "Na7azWCzZYtWSb3cYNbHC3LZ494sTTHpiop5vKERACGtsT9dFVsPJkr4ayxLedLNx7PBsduqyacZiFbfJsJSrbi",
  "key47": "2Ts6UjpQd6w2atnhKiZ24yhKf9CHiu6UfYfeR2NdBtJ59Eibq7RPGeESbyUYoU3BxVE8ghLYh1hkXoAT4LZS2Xsp",
  "key48": "5cPBLmvVbUNn8E3n6QcrFHdq6uGnfNUn2wXxqjZLtRbYDa9MJtWz9XkfuDsUDUVXCqKTPBnJHptGryz4nmJFpcF3"
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
