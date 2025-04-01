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
    "3hN1E4mx4JGcfaWqAgPmXftU8aapqSKk6i18KAFYyLNT1ypW9UYov2tSLffUj3QXpbQ97KRoWC3N31zCVj256udK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9sfT2F7AXVoaqkvGTKr3AfArW48TtasqDjYaDVQZqfmwKjagPTXySv8tSqahsuFHt7LcMkdRWopMSESm9Qu1ESV",
  "key1": "48gQVYGF8TXntfGs9jkJXbLr4FfP7sTD2eaWYvHLaH4QXquVcFSxyk3rcmnEGSMWbEncqNEoibqorgirFTM495sv",
  "key2": "2TJbqyjWGwxNxqSRfFfQVLCcK5L66KHMBQhaAGD7WTUzEhe2aoFSqNRtjNtN7or5Z5DDz3qWi9CN9iaFFKRPPCox",
  "key3": "43XsQ81HtWGbmAbyJXavcPBpWpKdfefg6Kneb4c5jHatQbMWmFnZdNFSE298LEQaaYnE2CDa3wVzK73ubvTYQ4y1",
  "key4": "29zbiTX7Qy3hBC6ntZdzjzwkrgbsUZoiVVm2GitxpVXf8WbNZCi9WVAuiM3HjAKoRu7cETpm1UDkDZs8iyoRHqyC",
  "key5": "2yMhc5wzdMASCmnTHMSMDefbuYvzipD3LDiNsjvusj4dsFQE1NawGYav7uVtwAd4BDHpvuMsnEp22hq6XsJDfT7G",
  "key6": "3GSESnT2Mr3Yxe7sq5wgEpqmYUyaWvJm8ypgSEuULDSjbnQzBZmhgx3CyDVQQVMsEviLp96U2MMuCW5QySHrxD9q",
  "key7": "3WynqmoRjRvGSmwxKpsUFrAgmJniYb3EmvZS3bDBWArYZerC6q1fU3Z8ZUrTrgDDc2AkGFa8PPe5aktX3wWQG6MR",
  "key8": "2pn2BK294ZzrDwrYsDxk1Mh8HkufTTzXVAiAQ8Su4p26wEBgShdZBW44azXUBJwA9dQUwT6EWjV2UogbipUwHnfF",
  "key9": "2JY57fqYyJhQHZzRuvTfuNTKL2wnkj9QAzaQNb3wPVwtPfLqw69HvRfujreNFjfKhDekcRrzd9odLzRfojFmT7AV",
  "key10": "3U6ieS2aLwzTpMqBE9Z5y6A2HWv61UhBXBTQ8BBWxFG2EzdD9RhG6EFkncvyMJfmdpQ7vB7pM4urhV6Uq7UizGyf",
  "key11": "3tyFs5m86zG4BxEb9mQs16bDX3Asj3SKL7qFKeM1d88d9nc27RqchJmyN1SGffRooRfJhTraGVJ2GqNrPBN2Xm6D",
  "key12": "5jbogvdFL3PmhnQ3quZY9m9Gphtz2F3kickNn6NsDbg2YHq9cGy1wxsfxe6X3W4UFHoQikpNjvYK5xQKYxfD7j5z",
  "key13": "2QGsdnXZXLao73RLRjawhRBaUeA8B9Fj2turewjj35HcnRHSXdvsPtsAsUPLJKoBZNGmK67X2wep4R6XPBWdxC8n",
  "key14": "63utdbQ8ReZcrLqrT4kXVKyCSjSxmq9K8NgT7CQUnh2iiVKoCfVn8gnqqC8LepGy9JU9wvzuMsQKCw6uZyBUigcT",
  "key15": "2AatSsHgRus4AKX8wMfw4cGGdFwCkFf3zx3gvZLN2mXCqrdwiSecVJoZUnoCPEcqp6vueY4HSC4Ysz9EKT1cEfcs",
  "key16": "mZrFzD3uQKEZK6N9MrdUfg2JfmJzvVkRNZ5jvQFLtz76PYfgrppysVXZbeD2GxmFEzNfVfY2E5yRkfuhEQbrfzs",
  "key17": "3WLSJJXU5nuVAUWM3FsSWpQBU2zYzThBH7WkjZno79C7zGq2LJC9B4E4wukkGXAUVZZKcggKA31pKEGS8VF85tNZ",
  "key18": "2DfSKxLyrvUuSPY82T8ryM8t4eRtE6CQUqPZc7CQQaspCt5P8r93BGgD5VGS413CAThBTCkjAc35CLNeinbScWFH",
  "key19": "3tAc1NHcND497XWPHpg5CSMDBnJVfz6sfgzzxjPx6PwTaqTocoXTw5TwPqKoaXvoH55vWv2P9M7re88YnpzXg8vU",
  "key20": "1w1XUJxN3XJPWgG3zaSwXKJe3rqmyYHgHFjJhA7svdbNP7jqYJoVeBPSNTqJtGYDSVnyQg2w4iXmpn698JTaKpw",
  "key21": "3jiuZEk1tCY7kXDdusGuTxtmFJ3FQauTWHypZHhtM2ciZsSyf8ov84M1otEvYzbcxn3PwqmAv911ith44QHi4ZxE",
  "key22": "4xTYskTVVcHxPDpJGhSFgjhjCGW3LM2Q9ZiH8BzmTXHfvpNUaC411CaUSzxS2fMLc9a7yjFB4imXSV3bnzHoyXDD",
  "key23": "5hwVjckYZbyY1B4ewXTEFcmDSBe6Bf8yAeiLvCPqfcY1mMfcDwSgXFw6b3LUjkAaHxmPSQpUwtdoWcYTxUFTq761",
  "key24": "5yUAqZuW5YUJxuSzFx8BQTcHY5xWEpYbE3iRTe5ksSa3EgEVaGgXHZVW466meLRMyHyFkDnWXfrxtYSLmU6YS4G4",
  "key25": "wfvYGuFyBUnwPBA5ojSYeGKABcjmMZ87vJXgnADhQJbhru9VwusrD699jFtuXVeHgWYxrcsDwvZpQrDkTUvdJQA",
  "key26": "5tAaQv9hjdobYrpuz6xzp77Jx1AZfLCdEQmuaqCTrYXnW66ZuWZqNMRQrSK1UiaTRwNei29FYzWVifcHfshr2hX2",
  "key27": "47gGdePZY4qTY2RXng9NVdfLWG7DMsTmeAMdcY9uRzKN9UMRe4bnuGxfb58CEXVjqanV9cA2ZnMQ7wQt9gen23u",
  "key28": "5w7GqBuHNdL9vLAR8UsqawpLecRwFLrRgRusmJW1B5Tew3ykRDgerRTC45iWnDi3PyAoYC4kVGPR5qmrXkho1CDQ",
  "key29": "3RrwsRaRtTH1LYr7CsjywJ97HnYwsnnP5ttVBYfbMCAQsTdD5x6k8hEDGPorxzMW99brjfUn23ikHXtuPDdcczXU",
  "key30": "2N9LqaKhu4cdxmxpdNw9DXr4qU1MpfzHiqYPzxdwnYS2seqYsDXe3eZp5SZtYi3dJy3De48nfZVDfuTAJV2jm7yh",
  "key31": "5QSoHJmYmMfMfvL2QPAHyeSHTuDJ4Mmsx5HkxZaZGiK3CLUQVvXi6PCapggtkGn9qXx72sLNUxFLPtJsWMoLcioC",
  "key32": "5Ad8pcdhByAo5SjcE4H5rw7pXdkRWMzyVi2biUhjiDnLa1ThzcGw6ysScWCXFEvmU4azdo5S2RG8vBuLBZ9U9JLA",
  "key33": "3JiXHidJNXDVJz8ZvZc7JbappjxgZT2oyTsyL61Mm3ZzcnrF1L7faVNCbf377EPX4TzYAQDrCHmVEtyig7P1kTyW",
  "key34": "5QWnnDVp5TiJXgi3adyT8Yv7hAMAHCKFymUzB7Kgy6jkn4GBvD3Nh6pw17ChW7gzzM8zeXybpsYFKkWsJDnu3fLv",
  "key35": "4FfAVhAU4ErSQZX6oEWG2PxKiqP6nmjxcpv38jwNQqqfYubQCtQhoRPZWAHo5WBJPC7M34ds9fvTRwJgJsE2JQM",
  "key36": "2qdCgCUX5yLGjEwc3kKA3cnQTZq2bfVZobMspsGMa1PXBmPdfiYijwni4sNZ7Si7qA9FcvagaTXC792Yu6eJSqus",
  "key37": "2ut2Qso5iwHE2MjvUKD9oEMTXoif4s9RCcifeg1YqhD9XVAazY7y18vbkdbTiUZa5bER9goVFcK9MVpPuAXXfsqZ",
  "key38": "449nLrnQNwLM2boRy1HQbCPnhup8u1p1532FUwGEocfZZHTfGUYmw2dNnnxAmoNsgXQKgNcs5sgBj8PiDnduY84D",
  "key39": "Jivwt6qXxq51wxU3VfvpoDmjZxFsi1SsdG3tddCVPynNrCNeiZ4QkDFwKBWEXVeWxHbsg3MQn91wBZWLf2vYYoh",
  "key40": "m9CerozA7cDPr3W8Wr9E4Wn5N1zSorfMXBg661q5uqSdFZkTpmXiGe1jKxtzV8nUukYrUDvjRGG2qn2nm43Y42H",
  "key41": "5HvzDagNc2Rvw7mJ6cL69hGnVRESUgzArAWutHwLPWjQ2mVRgQjEvGjC8xhd88ZUavvYZgrwh2s2HcfzFxPtxmjc",
  "key42": "2pwhC4fivw5AEqxsNZD9qhTmAc2f4w5V21LGoT5v8jtq5K5g6L663va6KfFY3HhL7o9q9Quj3udv56qaMEwkmLms",
  "key43": "5mvbDoMXyBnujsTWdEBmPuBquTxrsvcmQH4HmNwspTdjnmJjG5aMdH1dxpiRf85JjNAJzKbxNcaXRfzLZDExeHiD",
  "key44": "2AqWLWvypPVzsT18i6NPMBd4DakrotfqH5r43Xb1L6uV8XqcDSSW9SLjviVtyNUTVMNkX4AEnKkrWztUscXFSaXp",
  "key45": "2U14RCT8heQRvED99PKVtegmmNu5qcU7CnqdXSztks6yxCdqUv1oom7cbZyVRwJbkbwKFjnBheKQ1soBSjdjSgbm"
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
