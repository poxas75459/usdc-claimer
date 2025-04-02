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
    "5dQTuJ7ZVLxy4rukgECntrf18BEzXk814s6wpZYEN578ahXt412eFQFx5xgj36BovP7sJqKg4XJDp9VKM8xUAKwD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63W9pPMkMrUAmoL7ZPTZahrdrRdNpDwAqdAocqnQhKSNFB5vzuoxKMMvcN2S5icmQAE4pRUNLzdnkyvorGEvt2n9",
  "key1": "3YfrrfQuYx8qc1YfEtk8eHHzFtdk32KceqiZVQ6rfoS8TDeMxDjYyhkbKC9iE7GToYhPXTtzc9TP3GdWdgwqADYT",
  "key2": "5sm6xT3GyxxxdkfCkio932cqBsvHdCsFqxFzzgsNUVmp9Ado7HYWjLdTDUDw43UutTYUrqVZeauRYYzmzL5fG4y8",
  "key3": "nNMJtT5GvP2frUd3uA4sE9R2TzPXN7HerXUrXRTcNy8nxVeT8dx6VxptqYEsXyhRdWjsbckwQzoMjnYuNuXdyzV",
  "key4": "4cyEgx1eUZ7JMfnvGi2gd9RTvbtbXupEN9c31JMDP9zyBuqXTcyzfryzXuM3NenzDgzyc4PyXZ1kCqkmLJn7pwC6",
  "key5": "5pGPaXcgyXHqwfk4o1qTVeobyYc13Ba97raAZuQZMcubNgMjjsauNYH5LcAEb2bUmLqGKtF2Jn2YPs3et42htphG",
  "key6": "2yir54fbkPAecE8bwRzrDKyXrjw3LwbU8vd5SuaV1G9Abj14PpsJV8stLQLBrETB3HyfvDc8wCbG9HBGJNKqrNAe",
  "key7": "2R96wpoeNPN4HoFXNoiWU1rdQ5nXf8Rb3kdBuoH9MLPdGkCWeGB44sPsp98w2e9cz2qtRvjYX5hH5RdXdp87Ba4D",
  "key8": "3XVkhsAisvn6aZwPRVa5miR9JmEhGTTRxdzYZxNfzhQADwKmFYGwuWk58ah97cAT51gT5rUuzv1SgqFecxAQrLg",
  "key9": "2Mfc3Deb5HuRXXdAWPNqHaVncKDGzhBsN3pZH4zTQHdbvK3F8nL9Cvn4RDLZQFKXJQG6A7onHXuyy41pAaQyoSHL",
  "key10": "2FcTNUWs7ExfRDcHKsBkj4grQndquvdoBsGeR5p7bosZ8YpCyvV2WGx9GFy23Mteku13ro5ZRcPqzhhhMHQA6BEY",
  "key11": "41xv3ETs2x5DL6QBjH4MtDT6WVq8argyfayS6guqbpGETJbspGNhXBGovoiHRXjU7aSqySJ1WznnX2TuohUFX7Sr",
  "key12": "3cJkuryic1dZ9bP97Br2rjfgx7oE46QZ6KEM6YhHb3PjSgjfsfj8ar9Y3Sg3gbFd2onCESdZ55pr22tBJUYeQyJo",
  "key13": "Ya25wa1Wb6wrrau3rreosHkEw2fwSsyehTQ1ZnbWzBUDXyfKdGVNeQ1MmVNTFvTK1cqepv9RrALizDf79ZajwHw",
  "key14": "2bz9W4zxG2gcDmru28kGQ1Rgkw9KUJFd4HDzMgGCVneFx1Mtf3xsZ9sV1LazvwrCXw81ShMxeeYu1hsuv5TrxN4F",
  "key15": "2XL43a354bdaTwzQYeYW2JSVXQz7aXkgQqisM6aMGm5wTUEoNC8wc8XRFY413AR3hhpHMF3k9GzogJRHQcAoSCZc",
  "key16": "4eiKvMJd9yQY4pzTYckzQze6auBQMytwFSFhDyQpuCfQFN7h6ktAC7VyKbLpG1hdRZ11UuxdWyqSZELzYWNJrRwB",
  "key17": "2b5c4tKY9YqSCExsmnbXhSrUkuvPo38G9pXgHQhfrTaCgFmGrwPeuxHfGrAWGrnpDmCxo3ouYg5hNn27WB1Ne33f",
  "key18": "3KTyTX9BmD7kzeuTzFsD9XxZPf3tocQiN5dncgifruGm7NanLakfBQz8pnX6hrcZsRQq2tZLGBJqTwXHuyUJDu2V",
  "key19": "ntzwzfdZf3pBbmcfo2tvXPfDBXi6wFaWVb9nnKsY7RkuwPzcrgqyo7qcTxLZLdz54nV6d2fGUyfNB45siHLiZzH",
  "key20": "3fH2ENdV4BUjCp3VnPyzcLX6KZRCn4Ej7GZ1H7UX4Ag69nff3BCqt3YtEQjRdG48M2sMDU3KR8n4LFNttYJugym4",
  "key21": "4d64G8rjMg2yxjBucM4n5fPYC6YKVakDW31nGaBeX6xWtuhz6T7MddnDS5oi2A449JRjGwi76jbEskYDHQeKmnBf",
  "key22": "521111gJs1YnmAhFA2bSZENkDW3wDy7myNRPp5udbKJ726vHMPAYnYiWdPu8KCuzUr3cfNqa6f13tgkuRntour4v",
  "key23": "5T7jukmVhuiBrwnGUKwhs8YvkLCp6iRDcBvB6um5rpEycvFdTC4KuhE5MDCTG1AS3Y8mnB2unWTYcXPnHmfWZjdS",
  "key24": "5sVqxQt6pomZSZz7C8oVadPPqYd2pD9Tuu6ive6tsphMnhLVQdP6YTxiXqYopyfrZg54mE9pjuEtgv1ftVBGXL7D",
  "key25": "4w3BQz1geYRcdCCQmd3uaQkDLxo6hmkbxBhH2WXJaHLmWfqFnCybpw1yasMzMrPeoxiKCd7XxbtuoJvn9q78XPv6",
  "key26": "5ba2cJYwF6QLZdisVVLevcpnCimNxhY5YDBWmUs9hLWCfKvUvWmTK5w9C2z6tWt4QwrKKP4uLHodPpZFGb74jDw9",
  "key27": "DjUZ8yYWu2tWEmnJbCDkrYXc28rqBC4ih2RExyt95me5cxq2K77MXNWf7vH8r7TDWvuV7fvsvPTR17QBBiKaTJ1",
  "key28": "3tNw1TYW83p8W9EC8vfCur9kGWGyjFtbJg9btKhUEXb3BwKB6v1aBMXsYZ9YGCkZdNzuETi2Lm2ivZytQZ7wSMiE",
  "key29": "35S5ovS5tB5ba3Qxfqn5EQy8HRgPoWbmGaY4WN36cyS8NL6vSxBuBPvQ5R6n9WVHoB2wMKCVrZXXmjzzB5n8JFoC",
  "key30": "3GzNmwfGUAsCVfajScL71tEryPQ7cxDaX2R3pYszp2s9SV89wBZ7sKt3qvzYL1yopWtQUPKq7faWfXa2nBdo2WTt",
  "key31": "KX2EbGAPjSKM7N3ZYsaG1Un4csf9Vji7nJmjmXieYJyFqwHvgUCSYDnUSX174BSfjAPxoX7zibpYnYdtsp1FUHn",
  "key32": "67hXopBTNrdMcpSRccrwTCsFMDVsH7GAZFa6D7awJE4GB4WRQRbXEt6u2xkfZpasKwHDNV7oU4x9a7WP18q5n4HE",
  "key33": "3hNhdr2bu6yuJ1MQrdNvn5dsxfwoJUjjJ3qkWAdgsE8m4dHgnyhATLfZgKD56wxoYaAz5Jb9J8CMQjB2u74g9tdX",
  "key34": "2kCBEgaNp7AALsKswwTVzEvrXqQHxTHnFfZTdf9MmUhbYbZSFDHmU7nYeDi8L37KNAeZidnjdH6g4ZcQtt5HhoJj",
  "key35": "9svMFina43fAbxPCKXKuzdL4EeKKdwNmJkuQMHzcX1rkvttMuMJkJk7yJEcfTYWR7PEjz2XY4DVkSBHDZT5Qvnb",
  "key36": "5Pksy7Zhmf9yGX6isFLwibSzBAYaAiaQGVGMmj9SYaSFJiWMpfcwkTE38fa25FMcH5GQqP1wvd7xYuR3RmWQQ445",
  "key37": "3k5M7epvyqK6YefQ5B43P7nkwsGmsjiGnKc4At9puvnisPV5pyTkxFjR3rt78TfvyrDk4q7J8pHbFeCEoWBXhcJS",
  "key38": "txPPghPn7tScDgTbAJSRcpiS3GAquy6QgQkLbo2Ug17ZqGap5hKCFXLajUPDaijvmqqFTZz6bLAJ3DrwbeNck9s",
  "key39": "5KALMHn3zFuQHXLFeeUPS2nwHJUUwvrpCi78yKj9uXixEUaG29WWX4a39Ynf8suCM7phSwzs5yATtCyAMtDaJ5EP",
  "key40": "4Xjf1xzX8rDPZmEDFKdZccRptQnzZy9UrJCVZTNZ9TvSRndg1AXDbnZYpEWgpSLSqmqNJiLiqggwVL2RunE8A1UN",
  "key41": "3zWCcGqU1o6Afqm9FP9e3AhLqZUjJDSVr2ZK5TJb6rvLc8EVEYaFkaqHZoQYhMtH5LFq4oGXv5eGJTNqPo1YW6Eb",
  "key42": "4NPMpN9CQWqxK63FT2WCFKUFecp9zQC1YWcDmWb32N2DJcf7qxdhA3ZSVKrmFG4KPEgYmTy5DMMFRaKj8z7bGkZ6",
  "key43": "3Q5t4331kiFgQFRrE985D8h5mAqsB7tnLvtQ3cmf3yrx59Zg389UnJN2WddiLVGXpsLMKPGsZFnucjGLgdi3Akrp",
  "key44": "4F2MaDDwempESEph85phoQGNWEL2Pv14zWbVwdQzYXxHL8m7Pfdp1mdaQsnztPomsF4TbV23TEAAs9XCyTGhoQsN",
  "key45": "2iTsEvZh9W7F7GeekAok3mrgrDteGFYfxmruh1bt3jCZsfyBL2Jq5aRuYenTp4jZvvKYRDaLoqZ4MgPndCmR2z33",
  "key46": "4fRC5578v7BigB6VQKDFVteqRcsUYycR7x2TQ5kJuS5jmXGny2WzhF1SJpaSrqdRNiobz4sMhaX7wosBtxjiJQLN",
  "key47": "2zLu21Hu2K57jtCtaQkE4PHnynNmTyEeHgikeihXZ2yBw3jVxWCoCDPH3ukGHanRAifj5LeiiJS6ZTtmujHagSM6"
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
