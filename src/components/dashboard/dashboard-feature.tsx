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
    "5qzbDBjdZHDLRzXj3zh3mEGazjt8nKWE8fddwffDqhW8J5yzL97cP4awL5678ikgYPABrmZm22ACywnGTW3oZ7pM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pRY1WpkUbNEEX3ZfgbemVXLyG4WMpT7RCM4AD3GExaD1mVaMxrrT9dc2qPxfeBLN5oKNLHt4qeFL41Z164XKtau",
  "key1": "59ee9AQVAU4iWXogBDkP64qAqcPofiL6TdKozRCEALhuR92hzMZukfSheoZ26o4My9NjQhckHzAUrMmETdhxuUJ4",
  "key2": "bxMRQ89omCLQ67HKugD1c9UZV8XPvC6b3LkuMM4r5auNDQ3QyPUGjwMFxmmK4R23i2Mn5fHxCwapE5ohra7agmb",
  "key3": "r46zsgjcrox3w7KQw4W9jUva39PiRVyaeakVebCzjqgrpjcL1X2L1GxZYmDAAZnV95xd1nMRR1LwMB9MjbdP1eE",
  "key4": "54yXbr6K3zi564dDj9tvG3gGnVUkAqH5obeyHx2YsDhZnw6meftAL12rrvH6uzgTzfd1jpSyXPKYb3WEmAHGxz6P",
  "key5": "2hpTVavWyRcBbZJUYACchzbY1ynhb4msRewrG7gabeogbiMkTVqaWvCgZDXd59tgWrinQUb5iGkFLVWN8pNmgTpn",
  "key6": "2MzUiV9eGp2RET4Xznw3FZm2zF4GW4rqDH9as47jW9gyqMKsri9p3Xjj23Qy2krN6bkN7jHQkpzzE5iQawiGB8F1",
  "key7": "3QKQH6qy96RFUvimZoATEatnjPsVDXqPh8kaiSycf7DRUZ3zUd5fLP5L1chD9d99ToHoonKjqJ3TPUCZm44mAGgy",
  "key8": "2MJcfwtEAXgGd5imYrRkpySrQPz8vPSsBx7GkNqq1JgHGhLTPSAq7eeVypRXUFW1yURATzkKZuHywhRVj88e5qDf",
  "key9": "3VvTthG3VcmMksWb7EN3fiyhD8C8AW544U3VGtb6TcAg7HmscRcKmuWBR9f5rDKi931z7DByQVYF5hDFosn6KxSL",
  "key10": "4wQfM5E9rDnfB2dKNiT8rgkz8LsoMqjR6TYR7LA8wkyGyuwg3DCJkWHUXFp3Rje6YEroxwvqaSBbZHfYbrMsso5H",
  "key11": "5cFKMuR882q13ZsvpdF2g9DU2ZeMPLaFSixMDbwdiAUf3YpJEY9pD3G5YrcZixWS4saXu6K8kxshxofNdmgdFFiL",
  "key12": "2bzpJvQNLHsuQan8kSo1nLtkGjt2uNpUPMPUnk563o6sLm24aT7N6ckBUh7gzB5m32AuVvnCnhr1Ju2aUVte5xC5",
  "key13": "hjmSxV9EMJjBqR7166SA16zFdUf7FpeYX3RrCG31mbNuXFNZfBq9AFyCuFBsMFDDMjmZzWtmMESGwQJ752BdnNu",
  "key14": "5otYZzdeKkyWF2gTTqBLrgdqQtkHgbg9A541se5kYAuH8RRcn85YgK6wbbxrKJFJUfaP5WmqyZptypwKq5KLFiYT",
  "key15": "2KVCMuLAxGYbMQ8Z2AfC6ew3KwFVYM3utqQEHU9o3Ur35SAgaJnRTgqfhZxeXwzevafZ1tMYSTbRnJcBof4Pxrpd",
  "key16": "43NgjhdcgdijkywhZfw8ay2zvnPmwtGtn2mdHZPJSWAWVF3MmpugwooxyD2k9x8GTh8fhEC6f9xf35qWtaCJ6wEi",
  "key17": "384NNayBbn7983x7ZQAtEzos79xJTX75m9oA7rAsvoJwRo2LpmHewHK1ciTv8355oCdynZ93hoQhZMoXcCGf9bKd",
  "key18": "CB6azisnAZjwmogEkTJhuXensum1UynYYtWfbz6Psqw1vax4WFFCgj6XaGBbxe9wobitFeSsafZhDGyAMeAeLjH",
  "key19": "2pBsuR2vuFS5whMjhsnyVnhGSeMxpXCPm2dWSh7ivRD5Whp7W8J1EmHoQiEvXXD2xex3hzDyH8ZqTsnMqekWXLzh",
  "key20": "4s8SfNuLLgBSurhuxL85ogZvWvo6bx4U7gkrcJ8PJLbATaDKXZAJmGUKrUaaQVRcNRc34RR251Ly4z38aY5Y2eU",
  "key21": "5YmZLzCRfXRjrcQzZiBqZ7S8LbpufjVCFPMu3HBY9azVPqM4KJRx53ZbZE673zebbK5nGRXtAEgYHfZAREuZoHCB",
  "key22": "62zhSsytZDckJgbVgXeFsR5H1bUgB9ja3H9LpUTCQw7bETubVtfVUxmTKDvP9HNLx7r9gz28s6TFRNp816ffP82E",
  "key23": "5GJLAEXhFyPypfTcgsicmrbYkkAbkT2oBnRSe78vVH8ybFkt8yvvHb9omSDa5fptgYBAg27cSsKGkkSRD157TMNF",
  "key24": "ADCANKMXiqqqrRs7m6dKaNBPV1WYEGdipdzZzVHnT5yAVn8BXSyVaGiJJjDGAsXxVRzLm6iCUXrdMVkeu9dZCzQ",
  "key25": "4tHtW1PqcFSNBeenL5yu2MfU3F3FA1M2dxCnTWqnAZs2YLoDw5hwDzEKMQUWg4yDvbxzr7PipKoAbbV4Dpw533QN",
  "key26": "3wfmGch9fQg1d8V9gC6i62qe2SeEkYSS7ifYHNUhznT67vEoWwWNbijJ7ddw2P6HeRcGoFz88ff4gJjoq5hxB1Vj",
  "key27": "GWQCQP3367aFBv1qEhmQ9w34ZMZCBEbkxhZnsx9WJYsCyWhgGhMQ9a25TAVLna7wdos1kHKjVf9Hm4FXXux3xz4",
  "key28": "2ohqScxnCdxegPGxQns7atcr5LNQXCUmPw1gP8xW5kw6u5wwj7ng9ZyZ6c79JMxPPMaT2FE1hRnKro8nDLrmcwmn",
  "key29": "PzPQ14zW2uNqvBb62adBjpsrTgNvYADh5BBMRSDyNW5HRPqNNMTf5XCMqd2HyaXBJ9LenxnkXtyCg2Yk3QDRMrB",
  "key30": "5Q4CDLFoaogQJ3qkqZVLzwhD4CqFRSmuWSMhRTbXvFL9Rq6C3BFxskUv3oJB3SmWqBpNRWiQEMNjaNg19xLf7YV4",
  "key31": "2zomazrPsCUTbX82T8o6tpsTJtbv9tZknKiNWNdYf3myHvwvNEbGfzkRsf685kTFm1exs3QWMPboAG4PPhu357Qw",
  "key32": "4UqFz4ApTtAov836LGDCWSFB3S7oSEuBeYFsacAb2tALRn1516Y3AQfr1BDa9gzERfSJZrNPHsW5fP9fkwJY6gLV"
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
