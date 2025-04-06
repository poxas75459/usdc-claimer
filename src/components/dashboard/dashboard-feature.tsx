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
    "3PCBdFfuC528FhfWga1eBDrXxbq8erKFjC4mMrizwFASWYR4eT1WmC1HD4UqZs8nsApKYZZwCtwxq4Sg5szbKES5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rDR3CZdRyit5AS2KVJeSzcTf6oMrsdAkwbEiSAaASKGFukyh8cGjCqWZNDsHDViCbKPyJD1NNdYQuoppwbDHd4H",
  "key1": "5cJ5JKPdgANwWhYEPnmoJeGoZunwimZLyDQnbXg3wcA9Tmy7vZtoy6pPQtpDKGYDKK9SFhwhYU29oCK6nYedLv4t",
  "key2": "4dMsaVQPAejfBT26R6QCnE3JaQahQ2HreRn1SuRBK8caE128WuPwgo7n31sW3Qk8YkmmHFK1do5qTuuZ7RHwmUuZ",
  "key3": "3LbQMAZhuiBPAVBSZi6zXCNrFanxTGsjXPmnznfimYMW2fMc5Da53Z11Eub93vuBkM7yFodWuBmJdo5Hb3Snzudg",
  "key4": "DtgYQ35S45umMhH3d9rF6vArGaN4iTU5LFemREskdPnY5iTbCpBX8uY8WmuNJ9zCcTTba62sGpnQKgyZtyeVBB7",
  "key5": "5whKBSPTryWfrwWCrFG4Q161UdbWSQpug6L7cDCeX2oKTh5bBN7vK4aarvU2YCDqEaKEN1Y1kpMU4Ex8kdVpCXRA",
  "key6": "5J29wdFZGBwUHQatzbzi2VGtGguUKXzf4NiMuwrXrUQS7nrW2y55PxpvNoAa6mfGQXnaKjG71x8G5zi5hB2FSVxy",
  "key7": "222S7LUdtRetpvi9rKgA55L7Hboa7xsoBgb3z1FvC2nrwKz1oMSzsNRq8kBmkxq1EjTxkPQQKyy7bqEeyKXY1C5k",
  "key8": "5P26PmHraYrjSViPb7qqjyVJo41dFvtQBGFijrVq8SEtvk9EuXdqNcrfyPCAsBBD5P9okUf71E5uPVCiu6pPMQC",
  "key9": "5GCStwcSR5urpxgoyo7weVSb3geBfpC9F18C5VYdqwwzNtdMYpuBvxraZaUP3PQuM42jRyzQxsBMmwh68ih3XVuN",
  "key10": "3hks8LTNXxAGSmHk3RpvkvAcRE9VJhPyaRCg68ZB753x9TVLmspQWUXmn8TBct5JM9zm9czTeQK1sG6hKN9q7D5t",
  "key11": "5pYCaDVMch6HsiN7RcmgjkAjLKyWeQ5AyfEnqRkY9TweEEyxdgfabSfEzNYpGmMaq8toTqUWEaSLhNDi8EUudWn4",
  "key12": "B3PVvCU7oKuSSsBX6K7vB2UWAisPPaEGbZoCUPmHNwAPbk6momdnVWwCEiMACcaANL6BEk1oGZrgWSNrQYQhSw7",
  "key13": "62K45ws7cTvQ63RF15XodyjPdR9H34oqiUCoV4NwExPwLPfdts7zvKeLYfuJ3QqRtw75juFsC5mHtSBRbWVrJtqZ",
  "key14": "2YSCmidHEDieshbg3s8wV25tDSmMxzmWiazJNEdfCsLpdYZ48sbX7sV91UNWjE1yZSwRD35m3sa51quNjNqjpqvX",
  "key15": "2G4yoQrQCCQU139Ws5SrQgU6PNF2DXHAsEpC1CiShHijqWC9fvbAdLbVH36aM2eXXGTun8etSpcU4v1dbejoX3Sc",
  "key16": "4zkPMEyZTqKuqMYYuzprRL53rLaPHtMqHcaNvv9wd9E8P5Pci8J8wzyQ6kuE5pdCqt2CdjCXpkPE6N5SdXXR98KB",
  "key17": "398o3aaS6adhU2SQZXySmy8VuduRK3Kn3ErLiGtuXxPZnyFTBs6KVUeqeeqHfVsmcskMjk8JLuWBT7Q3Me62Y1mH",
  "key18": "61K2vWT111axCXorJeWEbku8nFkrnR6X3ouv1TdFtnBgtG7vWDSHs78aznjLjZ2wbL7VJQfmM38y3NvxBP68vJgF",
  "key19": "58FjFNzc1CLJy5vnEEjZVLvMTTkquFQNKD52uDD6zY8rnkKCyag4Gzywzav2oZViWjGBrW7Hv6UXp1Ajdgi36ZcQ",
  "key20": "4H7bJju7yDeFjLxRbfjxrfjoYRY9hpSnJa26ojdD5mNxgNM5nWDAdtRMnYSYY91f1nQXnatRU94qchjkCaiHTWC4",
  "key21": "4tFWdQxtMmtLJet1jEeshrastnV94irLM575bHTHPjyrQE7Wan77Eg57vnQW9WRzy5rUeTSek3w7WQXkvaDNz4WQ",
  "key22": "2yHNAvwXgsavc3hkh5SCoyvb4nwa2ykCkR9SpKJ7RBgEwBSm8AfEkhWNPAoiHr6ZqZaAUHHahLTtWVE1pjskyXYt",
  "key23": "3eegR2Hr9N4BvsQwhMPdujpHAA7PUYBtSyEKCh4gzSRkTA9gD4XFeTpRmo7Es5twmB1hfKCZDEU1sfKFzFDEHvnm",
  "key24": "5aepZUcycpt14STmcPW6gftR9kXMdQYszVSADr4CLLAtGu6qPPNwfJwvu6ghayrwZSC3L3dYWnZ4pmSfqjfbpbty",
  "key25": "44qtJfpu4vBKzRUA2ErCCoGuPx9yMsnuMrGn8ZsqxBTAR94ijNzfidcyfPSeh82piXTVxvcE9rKmxyd51qHUxuQc",
  "key26": "M4yc1RRCuK3xb85Tg1NENSCHSvvXDfUzceDicfowQRDxDfKvLsZ9isDACEEtzhTqeNxca9XsWLkVPnrKc7d1M1k",
  "key27": "3eAGWnJmy2ajQcTS1vJpLwwEREU2FGWZqHr85r1xxQazjvVDXhccrhrz28z4iXqHRDfucKobKmsBowS5s6ME5HES",
  "key28": "TRBLEHQAMjhSntnhXFU32VZ6eLMfPeNjMpNAo9q8LXotE8eyoCPo1zE3qwgSVursKxfgYp4VAh47HqSKitjGz9o"
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
