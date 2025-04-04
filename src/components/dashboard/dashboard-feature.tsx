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
    "4cfQvZA95XhVTQrnoABp3NYVPRkNZPb3SwmeiWbw6Q2nMv9sxwynk7hemjDEyG7dRRphzC4j59XMsxwqwzro4BEu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ctk7LY9jDxoYYyF9NYEAxw1eWagC7YypK9wA8ag94eBKiPj6BRzU7ZD3DQYiRLWqYUyjxbbxg3YxY9c6ceTnkP1",
  "key1": "a75bAkRcdansxcr9ufTmi3UYAGLCLGNEkTTFQjheoo7rwvrric3ZrWoxYFMGUGbzMB8BpjZVFFWLtQD69QRHW8A",
  "key2": "5rfRShhQi826weRkY1nVEixMgFA3kpcraj9NC3oqeJrCfC1rcWhYzrri6zD8cnC4kULMaPFaqPZF6Rhx4A6WdLfn",
  "key3": "4V6xcDi4y7cUYcyo5P7XsfbBFVeYEnzmZE7Rk2M5QmsXqn8BnaqGTFMz96Px83nYnvnVDBaKBHrJAnJjx9KG6VCy",
  "key4": "3F33cqJMP5UyTowu8RezAzbcTRcCjx9dzoq6udHm1g69GTRmy7dZBoj2VxiCazm4GumEA4XmeokRLhAHS9PcWa4S",
  "key5": "3WYo4AndchmjhfcuBAn13bHo1acbgSFoVdhUvMXPwJBD6qnfwEn6HwYxi9E1TsjKbb5M8eNyrK2w18EBEJkwA8i",
  "key6": "4yXNvqmBHMyWpXq7LUKQWX32FCUfp6VqCHtNnY1qNVEahBWWNdWFg64ZCUtiaY2fMEC9zWm87E1qPVLkFSrpUNaS",
  "key7": "2o4in8PH9BAVeEtpypDCAtTzSZCXbkf9dBhL5q9v8b73PMkQdGxf7WPSFWjZ8jDS7rVyvo5ti2EUzQ8UowBuUGR8",
  "key8": "vHmNMyhA1STRqevhVbKJPxvWwdPkkxCdyy8iwG8W2UHuiwECbnpU2QyG5sEABuNdv3ogENgUUAceuPDbGrNfuUM",
  "key9": "M7tL2wXHHSbmVMXYft6iQi582n1YrFGugcSY8wrn6zwGEMe2EaeRB4vBFnLefrJN7UeegAzDfCrPcMu7Cc19w1K",
  "key10": "reAYLCcZaUTVwVPLWRFRPPaGvfuETtEc2Dt6pVmyvWsqewA8Wjd89CkZLrt3jpJKZeU5khAPPS1ec5AW7kzrPoi",
  "key11": "4iC4bZwhnkTyhBJsJ2M4sLjf7x6tHDY7Rfw5254bcaw8MakL5PyRkzuHM6Y9eCvi51nbddvND3c4reNe2LVPXnn8",
  "key12": "5vVWt53kEVYKGZiCDuetGpXP8McrearNBBAx5FtPDTWX5wvECHjCnpQA1TyEFGvUsWUsvY9XzvErDmGQ5NRRDe8U",
  "key13": "3rAHUSRvxiwY9FtsEYA1qbQf5SGAf1BxrW489KNXmHdPfHWSKXDfwdHP1TxjeXfL7BQTEMCBTCgdxMJUHiZNJXeJ",
  "key14": "34uxqQNtGsSt1KxcaTeRoGQEDGxnFDYrcvkXdj5wFc8tLFVP7NDcJ6Mq5zgsodPRNAAgx1RfmeCWxXozimEkH27u",
  "key15": "2CjnSg69fv3WpGgneTdrjLJv9DhApYCEeRZWV2oUyuxpbKuAqnkb99wo9SRajY5wddmVFWeRUNXo1vqu5gtETTi3",
  "key16": "35JZWHMLDm7PmrwxPNoaa9Yh7P8A4cGfmkAhPWEJX7Epo1a4JH4RotbVYVdnsiJEU8sStThteTwB4xabuqLP5yV6",
  "key17": "3TrFad7Faqtx9HT9bjbjnxuuuTrppRiJ8Vv71ZUPj8Cs9G5cH4FPV97fBScZoCYFZtMXmJgknaJgHYYPmiHodKYx",
  "key18": "3GUXwYmeeVLQZcjSSATvBLiFFrBe9Rh457fo5WtJGEsyzTBUDu3eTjfUeqzmPJbtwKdGombFvf5acypmwDXnYJ1J",
  "key19": "2irxqK3BmDx1GNwJevKHiK21QejC9f6xTaGXXNSn1ytKiUgVaWiratXCKHC1ymbp7fLcKG1i8WCa3rUGruZ67nEm",
  "key20": "5teMAXrR9DHYxzpNhUJ8PtmeDUoMNa4VRdfBtogaEoa5XDtTt2A1fQsiW2ENnMxuWLp3c83ebHrMAv2zygQfnkTB",
  "key21": "1WxFXWEn4rPZtKEi5ZGuYVx4Y1vhuwLqk4gSSij1yxpfYuxQmYb3PiZCXAgJTrf3oTjA1Yzj5EPBPfFANQ4JSiw",
  "key22": "4pNrbvn51iiqitRD5JBDv4cujVjUhs9pEDXAeBpo7anJPivgcmBaPfFaC2Atxz5PBgUGgHNZ1UKgRrkVwtp8wwQm",
  "key23": "5T1xUmWWxi2ifXpZrGcgSdsgr8quTWgGAThptnr9XH9P48fpQrgcfPVCLRb7YYM8Ju2aEevBo8pEFeHLt7DT9EpQ",
  "key24": "2KfUdTNjMRJanRPeu2wkKh1uKvDpcihbZT21HYii9qcoFgosX88mNNnLZLUjnEgzp9jwYSTzAvQhStdK88wKW2Sd",
  "key25": "2AJw6fanxzpsxnogGo7B5cvN8iKedXj7vCeb59Z5ydJRp1vUaSFzYieHoEUYNreqVhZeJEPTjRdUqG57SU7fuHTn",
  "key26": "45AJEapMCDZpHG1tmuzsJLk9VpZGG4pmoaUnxDpMKnnuDhWwFMvUxuqwK5A8FDCKHMvM7eVXStB9PjkpzP7p1PxZ",
  "key27": "GxdRh9QL4GE5FwXoq1JNCDtHjhkWztLKRxqSCtKvC77JAQMkLqB49pzxiTBzRaN7yUZyCuAByQFWKQ6LUpSguXe",
  "key28": "8EA1S9sVauJ53yo75EoukzXu4Y5JzuBxTxnvazSyUDhexghxDvc6zW8RLfo6ER6kBXVtZT6EyvsS3SVL3Hk9tNX",
  "key29": "38BbJ83GNuDhwnYxWcVyB1aH8FM7jAiawso6szPfAT6h5Zb1CdFQBBDrLGRPGPU4zzH87ojcbbt1FhWuYh4H2EQx",
  "key30": "3u5F3RqZqwqRwLu8YdwZ3quF6izVwhhziNgjG23ifxYTsjUPdPXxR6f56zeR4UE7nNhpQxutYVzMUJViWvE3194m",
  "key31": "5QBXjG2Hr9Vq8wcR45NsPd4v2VLgRQ9DGkYbRgx67Z24dTgp2BQummtHkam6oEWdcz9hDpykt9YHxgRGdzHJDGTK",
  "key32": "59U3izFz5VHch4W9WSemdTRbkyKQYd3ScrbBfXSVunJJBSvJG6y7uM5bhqCW1K998bGme99fpVJxxRaV7Q5H2aNC",
  "key33": "2ozt8FCGKRWGcjATRrpmAgvnuVVpoxJZhPvhp6gajC55CCTQABgLP3xGnRubzPG4SU5kdGnSAy5rJJPuN7rBKwGc",
  "key34": "e3tA3XDiQdziU8Y3kZbVGyse68nPG6SrZt71BbhEgTJ6McmyaV4hANhrbRKufF6t438ZmGSWvw6jBTiQrTSLoSc",
  "key35": "35acfkNrRLZdpdPiiejnFH8z4UVwJGfCSps91xX8v4BWAt41FShQdkn3eCB1yjbRuJ4ZQbnDZJiFVT1ZDgK3XzvS",
  "key36": "GU7ab7BUcvTjG515Vbk2Z8NcZ6sFJWcY2ZDazjbSUUCQMoQLvQ9QZHxSn5JYF22Y1gFnxmn2mB6AscYnUt7r2jf",
  "key37": "4hvCL1EPa8yV3UUSrka6BqhZ8E71M4GeiMfHhU2i821Bf8oNCpn9ZFfiL4sveu5EXQzDeYYoXdmrqAgSP9c3hvRC"
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
