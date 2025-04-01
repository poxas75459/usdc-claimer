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
    "5LSa5AXtYcjsUbDs7RKTwCvpD8BXWcdfk6GWwFRB4WCv4ft6R327pHJQUkKm3rdJR4fAMJ9g46tzeSGJcYsy2hm4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TZQHwffSD8DHqgEPuSpNJ4T52ueJR5FYPAucnZe3obbEXhCsuWjR8QTTafSiGE73AoaCE81BqdctJxsm9anKL6p",
  "key1": "22PckyavTQirBwBpPhTWzXJyau1RdJeV1JXdyUw7qdsvow8hooYeg9D5tCFBrndTbEc5CnFynnCdK24KH7puqH2M",
  "key2": "4ySbAP7MjUvVy2XxmspWcAuMvvD1d66TYwoUJA2MbriS7aCzeWgUVcP5QDx7kBUCkkMiYARxCz5ePp7FuqarFZYX",
  "key3": "2SNJExzpmkTKGugrj17foVgYnqYWXaeosozq421AscWZZte12uBaoLGHTvhfmKzJ7RVqDjjcM9gD9a1tNkNBn867",
  "key4": "2s1KiBMC4yKfHgrYNFKbSffWW2HWskQuMqEHGCEH9tWqY3eiUQmuCpoW9L3T48FP78GSh7tADMxCc6YV59gHqCuD",
  "key5": "2QbEjb3UUkhkshVZ4CWRYJ5iCGJn2SuyCc4rRWQfzyf4hhBG2qFmgMoPx167gVKFTU2kWB56pJRw9qGwWFPs1mYJ",
  "key6": "3bU8Zjrp737CH3DBWmFVtCyvzEs8ggmgJ3m7sSciiKdVUnTDGn8sF5ZFkaemrS3rLCMwutRrHGr1oQ959ecExSmK",
  "key7": "5jgTAP4MR6L23JAC7BXMMJsumxC6j8f1brtUrLgA28YtLwX8xpiZhkuykuA3WGSgV4C1KzZeGaHqMb9fbDuBQ1EE",
  "key8": "21BxWNHTEp1AtYU3YHqYF9f7Jr1U5z9qyoByGZvM6zy9ftXmoitV1PbPWvGpz18jgVbgaAoEvvP89nzyMAsfSiiP",
  "key9": "2WfnkF1wGcCtnw9kDuMCcRDLxYJh15wheAMZ5kMNxKdgmnXh8uo6mJPJZPAnypjzjkk1puAkHv2g9DoiDKQzNfG1",
  "key10": "32JoaRMovm6iNdQftzyiTx7RY4igF116xo6Td5tUeBt7J2suMBvxnn9s7ZdK5AKkNSQ4x3i5EMS27WkLpnmiLq49",
  "key11": "4q5bLNhto6gUT92ovmM37s2WeutuLnnYdNLm3jbRqTceYzZNt7BoVLtjAEAfZ48VULGCLkCigSgvvGzXDNzPjrX4",
  "key12": "AH2bxMVRFUJuMtL4y19uPePgcQGdb2B6D8UD5fJVDPKY8brSVXP2UtEohuRaiaY4MSsAZHBZRmb1DPzEZmSZgSE",
  "key13": "35VySYZwG1XusF1eviXi5tzpkL74VvvfBWB69Qmt4754HUkCpSGrPZriCcnYGoMEx3s3gJ5bLdjPW3PYqzG7sdoW",
  "key14": "3wgzh5wCb6cdvKq716voyShnf7cGM6gRqzpKYwjteJJinzSVctrbS3GQ5nHqzcED5h7DK1d1PtsthmEpKFeLQgRd",
  "key15": "ZVPgabeKWuW46uGTHkGnsFfdREvWoeSpoeRM22yJX9xTkwVbexYvSVMi25djhkgLgzTfZfyPcJoZHP9CVwi98Jp",
  "key16": "od5eojCLcJzsUwQ5ZTMrtvZDAJeM35w5jX7KyYpmvG6L4wupvxHp9Y4V1BsePdfyTqQo7yn9Mj6KXEvLao1kDCo",
  "key17": "mzp2nXwoByem8zCQ3WYBu7CQjMKYpxQpukM8LqdwCtPCr3c9gGEGgf4VkU72YA2WnyjGYCWh3oWjBP99mdEdqkn",
  "key18": "3yui1EWjsUbAm3whNf6RTfF5ZGsdVyFp8bgbGaRPQi7rcVo3CGqTLHvpwNSpBBvNHHYenzoc1FsuFMCgxMmiTMPn",
  "key19": "uSZ5HdPnsLinp2Q8QxmHfazhaZF3CHab77KJdTCfhetVqUpZn5DtfMjrDavX9cdN8AosUeQQ5izjz2pxZUMmutK",
  "key20": "A13trNTUgnpSTyobsxNjArvKQPMujvyrfAFXFKQnGZz9qVSaasjMCFn1fCxUSxFTXAd4GStS2JbrVfVRXQv49De",
  "key21": "gaWLhyJ71ZG5rHjWpdBMfx7uKmGNG17Qh3CEnFnJsNvpXYMajVuqCHRbS1N8Ak9qUf6oywCH3MppW3WbgArzN5k",
  "key22": "5gVE1CG2Z9p2zQjoo78ze91bZiYxUtEdNRFm46LFZW7NufszhSZfBTDpz9Q5KzZbekda7KTjn5y3ChiCANQZXnxb",
  "key23": "5MQ1WZtLL4eCxrxAVy9nunH56NAei6tf7QUimtLvpwSuC6zCmHWsEsPogCXfyk445uXp19TQMLxFFhZ27WUmZ6zM",
  "key24": "4oVnV3xfBeBYFMhaLLGTY1oJRXTTMc8L9dQoTEocZZ4FshjUZNpH4M9ZT75gT8feBXwRW9DqB9UEXb3ib7St62vQ",
  "key25": "uVzRWdWNJYXnBymmpggLAoqtQMhGqhk9HKphs6AbjsYagZ29E3LBxM1PspTcfgcc1UPWkGfoCFdhwBY6RBB9Lu7",
  "key26": "5PYjkvkbvB48S3ospqSiVgsZd9WkBGAFG4NTuVUG4kZboZQ8SKcwJebeBFeFK4hjSgboaU1RG2zvPTY8ZqgS8amV",
  "key27": "35gyCodUndWPC5kNnM9T9heDshBPN9urf1t4De3tze2uUZJZZfZkhFxkJbDcsmgFoTkU4SrcZDLQHrVd22o5K5Mt",
  "key28": "45ETSNeyhnaSEkUeoSkMuMz58x2cjsa4oEQ2nTnMLbZBp2e9Mh9Rit3hdpn7gERRvZGWiUnY5q292JMSSbxAG4C6",
  "key29": "2CdffpSDJZemd1DC2qCnGJ7CYWrt36D1z6gJXTcwUCPgLmyUhqWnYA6YXgxnHjgxoyKHW6EW6UCpmd2wY92XNfGv",
  "key30": "xjiBfPW4BBDXx24tbJwamxhhCzkjFQFBTsbxCk4rt7wZe74Un1f6cw8EzABppbwsGGKAX12sGHfZyKPyePyd9Kt",
  "key31": "2SznPG2QraCRfpN4AqALH9utfLr43bUFZDYwDtLpviQBgZxpBGzaDK2CCLmPkspzKxWRaB1yF9yGtbBUBwrdCJYh",
  "key32": "AtWZWQKQtRBEki7c8E4VT1TGwaEgGRTReshgb4CpcvgrxMTzy8rzKHeBo2hYSZX3gqnoUHDkiBpHZV9tpNP2Dsq",
  "key33": "2ovsQAixrakfTsd2ABuDUDheMVmiiFpVqFNPbm5gsCb1y1x8vhhAwqmpDfba7sqyxtgU555smmHmp1iuW9kHV71i",
  "key34": "3Uev9q5daWn91oBXQohuZpZn75WwVCkHGwgJedAaZqoRyYC5ZZtp1RxX8hLo9s7dX7pBMNSAJEVAEizfhxdZD9uJ",
  "key35": "PWzjoqrPt8GhYVyKn5ofC9wN2NvwixGpohxBkaHnHpMFZkUTJFTw8eiNJ7wBYmgfHJw4PJiM992EsMVyG9v4BtE",
  "key36": "3iNrcz12c4ZzP8JtbALFVsRUB87i8nMcnRjoRf2C5KvRLob1KQqeXb9FNFDsMuPqSXVSvb7fYRybH1XzZGuyLddX",
  "key37": "27fNjtafZvxntaA3T6VuXG4od22WrUyaGjzfChiKzufr6AgP68abuzSWvorXxqR7BgHuMdKeAa1majLSGwPZAQTu",
  "key38": "4JAjwLkYNayEA6DjUkaPTsQP3DKrq3hhvwMsJgXNgkEgq7BALxWHxR3xZXUT21Zsdyxi7kGaiUS6BntwtMTGXPLT",
  "key39": "4ukjN5GmpzHU3uQVEyJQ9Sy6nEBeyn68hsL3tdUavy3jJnoqaHSr2XeG2mbMHNH55SfeRatAHinzbRKkPedaPW9h",
  "key40": "2sGfaHaXeZum9LTZZQ4oJDdusVwtb54PVCjsqu9aTf3ELs8neoxVjVzk2GhWSFdRkuD1RQnVRbdkDikqHaQkAsej",
  "key41": "datmjQHGM5FnsAq94Uc49JAnmkAFSTDHqJhrhZ43AnVy3eoYRrsZN6fbmXFxfUauhJJUFQVnkRAfv2vPjRMDJuK"
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
