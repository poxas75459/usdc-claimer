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
    "3HDj334ZjcW5uhseKkr8bU2oSjRPB6qC3kWxtDRPd11pfPtQx9eSKs9JG1JzFqwPr33Qfaep3HeZP2qxxCruq3ib"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28ofmdFMVHJcL6EYcNXuvwxJnqEjsLM2pMekF8uEdXtwXdU7ji39MeckoJfcfeMbtss1tKZm8ddcUwbnWNGS4xXi",
  "key1": "2v2N6hoxkFXa2n2FmcYCasSygRzrW7e1tyx6RXbytyPmyMPfyB9R1Zfm15YQumBuXd4nzTP9y1g4MrWbfDNHmd7h",
  "key2": "YHxCjqGGqhF8BMXAAqZujhGTgXVacVeQJsszSYk9U4GuhS6zoEon7CHcDU3CyfmywuFJFNZMWtuUDG1vts6Xd7V",
  "key3": "gVmFwNqn3WhYxdyX1GhsMHKzcwfQM4xcHTCuvAdShcQXAR8pY7dqeSWPEXyiAMGE2tjGtPeDXLfYt4Thd7ZY9Q2",
  "key4": "4VjaudcLAHCXnwyCiDW6C1GYrVc3QNa4QwyysBDSnUnjWQp5Zm9PnhL9EqaeyNzPGXHKXnScBD7T3QDSLm6ZGnt9",
  "key5": "QbxxbGsuGTdV2Xo5iQs3cZqqoxNo81hFA4xUTKccVBxP1yLim8rUoX8LUsDt4p9ga6ozieB14gV8vRf3zYZT2Ee",
  "key6": "2Ktto35vpQ85dAmrWPjBB5QumqJBvR5d6odmDuujAuQqeJY5vRAGdRHs78mC4YASpPHaZoKeJDdudmGomu3dPaBh",
  "key7": "2G9ppph5ry2ZB5P4TooQAg4vRNUN1CpuJF8n3nL8WXw9ujHq1rywfK3mAsuEjS799DwSfBcupTTykXu8977xiH4M",
  "key8": "EiBRojroEwNnyZratdWVtYL9gAhLjdU6JFz2An49AxdrxSeWKdFfRk9636wM4TYtBP3FFeDGKaGSvP5y53oUPWR",
  "key9": "uAgAxuqYaL5jQ81kvmbQDfoFMLhA8f2SNnhTqo7hNFkFgXhuKB3BdXMJchJWcbF73vMfVx1L3QyPGr3mNp4ALrk",
  "key10": "4Wx7Tscx67LAtvtbfpBpSmpLbxwXHTy8F63MNrt9LqhSQcRRvzvYiypSJD7jqKaEiTdFwaan5mYpyNVt1bmHNGko",
  "key11": "61SdZinZwbFhJ47FFZ2Ccm9EDunN3SUgXL62ANA9pGw5TGnye5bDbQo46PKXG3v4pBWzjzCnE6DMKbYyfLdLd5ac",
  "key12": "nYswx94hNoTt4tiMh4HXHgPux5ULmnm55kLpzF3B6KLf15ZJ9xE58n3LQeU4udADQg4GUchZvzk2ofMsySqcaUi",
  "key13": "3tv8Hvdy4jSPFvAGE2opnQqdCr1kioZJPwVS7wctUpomegfvVuRqJjdvBDg5SJ2HjgTmFRHxapozxvXHYhZX2UCj",
  "key14": "2aJvNPGEqBHhG2faixeQLmEnwKmh2Fq34KZjrCPVpdc9kMR2seGev7bXK8u9gziZ9LxC5ExzXyqpNgbJmuQC3ufu",
  "key15": "7a8L8MU3yZ6JmAVrUwzrwqYnwpVESkCyvTXsQZ77wRUawoRPuMYgHcEtmw35UQ1kfnuY9Upx87WGnZHf2UbMD8F",
  "key16": "29Vk7xiktiP8ZYQnSnsCtZkJieXnMVE4EcSwQt4JZRT9S6GkmebMAJZ6i6ehr7CDt13KUyiMXXRTFw19rXsBhmsH",
  "key17": "3QLjU7Z8eyQGquySNRhQkaoKRLK3wRpeNDezouZqaQsqPRpq6WJXwX6x4HC5nx3s9Lebejw6D8eGKQMRZ3FKkq3M",
  "key18": "5szwALRSahLTjnMrt38cepJiAjLdLjmxUKaMki9gvsKTscmvMUpzcrgFopDbkRZ1DBcS62p8uYo6sz1N4ZbevouH",
  "key19": "5BKqaNUdNxvLZqrfuoVMxReewEfdaCBeYV9hbFMcE5UGTYNK5LF2gYjApTUYaP34WZFAGtdsuk9rs1ZCFPrLsJx1",
  "key20": "4B3ZX9MUZWAir4G5pRxCvYa7hYt8v5EvA3G38ksnFrYEtnyQjcTJbkEJSTttMyzyCi331tTKLBSqDgXURA5QNmSH",
  "key21": "2XhSwkexY3Jn3rPg2aVkZ91UNqacsT1oPfXWFYjPETUcReGvnLSMoztDZc2SgoJR2G6mhhRreEa2bPvwqrnWD5BL",
  "key22": "2UU2HbEWJEVAbc2T3Voadk6V69hvtA5M4W2MKHLWWFZmxKtthRYRy45yinXWvFVJwhCGrGwHvNRZtv3t4iXqDTEs",
  "key23": "4fXNwWPoKbArCRciP7Tyd2Z2UfWq3xZjcdowXNe9wC1VJTmobLX9n5VS7jktn7VzvNpLB8nMuaGZ98QdymPdsbYT",
  "key24": "3hU7o49B7tWR7G6C7D2E2qMEhAnR8XfGD6UzQvPkbCU9gRywpBgD712iK74XC6jpBSeyWwR63jyUTBmv83DeKpKv",
  "key25": "6LgBSamPdajM6auXjok82SHTgTwvCYFPF2e2RLfK864zdR9vpoXseroXirdVtWYkiB51SsPZTfSh6xMStGGsqdJ",
  "key26": "3uVVBjBqr3s4yAELyq2iZTTga3q9eNDSGoZPg24V2MjRc6JHH1CAJJpwvJ5YUZjfWm1i9yjgUqy8qFZNsaDdxyMQ",
  "key27": "2SxQe5brBW4Wpn6fwefYijK3tN7UZyskB8RDpyX4ftzpeHoYNbn1j3i3ajcSd7cmXzH8ECe85HThxie7tRrE61ss",
  "key28": "3PAgoL1wqicYH1yUNChv9G8RkVvUygvRLE9mCvoGksqD489s7ikgxwScj1dBHrkDe68VrdRsUJzmFy5ZFZ1JR5JL",
  "key29": "4MVF3dWhKx72DpKqSFmHEHyV8tf3Cabxm9b9fr2s9Z4Q76jusYELc7HdBfW2HiyqEatcK67iGQVW3Cm1Sc7BeTSS",
  "key30": "55FhHS7dhSc3UTPyyotUscjq9tiQonBMmZSHbKG5KKHAY7ZuQkY5MxQZzN3M5kw17yYShvdf4JRi6JgP3H7pWo9",
  "key31": "426YdYgXeZQpEcyZB6x8X345QBxkg9VRoXQ56PRgb7Yzxn2X2eCmE6hcTCXqRQr43TtCcn4qQRMXi42F7JDck89L",
  "key32": "3DaKGjmv6MR7Vf3eNB8w6W3Go3NzP3VZiMkqMeyTRToCKspzZ2nBjUa4FzqriKjoGdd1QQMRpAGcy4fcFBNTUpg5",
  "key33": "27Mf9Y3m9Vkog8Mqgbw7f9k67pFt3CgPLvNFSgQsZ6HJynBeRYu28TF5B3PXB1C9nYCEgtpzYYuMgVWRDuPzSkRq",
  "key34": "3kb8omWAVHJL8z685oeHvebb3emb2c9nDEQeGbnKVCaKmduZbZexpZ6ZqSuzGf9eBafqiBhrPd3t36LzdZpJHKie",
  "key35": "cdo7NiotTezYzUVXoepJfhuaigH8mJnYrzTxxv31RwYa53zL79LvQxoDFQuaMzzjxKaTBt4yMLUQMvBX1mvXW79",
  "key36": "8L8dVhT2yBaFydUm9EhQLjkXhxkgVzgXrSZfyNsAPAcK4Ls59w3o28d2YbXVTj2nf1Fy9G1F6PExtN42uavK5Sp",
  "key37": "3FUaWTWxHBx6PUUPoRjqouK6M6B4wiMUPdPG3GvQJMrg7HadcApgPyEYpgV8cR7Lkde5YCveyrxsf6UUfUwGcrox",
  "key38": "48wyaD9uwfbUstxbA8qBhABan5yvocW3wXUHzVvysAXgbFobYA9Xt8jSJdspcDpRx8RXqQEudK8XvPSfLhhmiZ3c",
  "key39": "2Qz9ubbnaoRwcwntoUM77yoQYMRUShn9mfUauZptQVojMzyNK4T2KLsQcBkS4Lp567xJNe7LPgCat49dGnAqgJs1",
  "key40": "2QGeYAqdVoJPRyiFJX7KyvKeeDJ1hEeazvHaYwt1nkzEoJiG21d6u7acy24X7eekwYVmbsifE8oCwMhGEeotJNYR",
  "key41": "3xkQ1p8DzAJrhKpu875fN55VVurhpWWVB2KURWU7RMPfCLsb6ahFYyX2vS5ybH7Er2KaAjiH33wMpuUebRKVD1BN",
  "key42": "4FaQoaUpZqJDQV8vbFYwsWsXykfpA6ndgu1GWe15oeAMD7grwGoLDrVBAM8iNujM2zGBe22c6bdSKjUYDpUgrxvn",
  "key43": "2gsCNBu5ZwXqPPwyiQbSejwz4GcR2x63THW5v4XvdcRmoC19eKmTFE8oQ6cWDkaKAWv7KH6zcGMTvjsmjs4jDcwy",
  "key44": "wfvN6rASezX8CGWzixi86JxhvonK68aF8RMAZ3NBAv1NPWhWNBoXKQ5kNfePJ5bhTQH29XmPojLV8WCWZpAFUqj",
  "key45": "2MkmrQF7kzhv8jxzQAXrjPkT47ukku9CBBGVksncZ2DRiCb8jn3AYvbWaUbtecmzRUp6zAJQTzB6sgvhWndBDajz",
  "key46": "3MwQpdA2azN97HFGQRhi1828hWDs2JAgFwXDhTKWCrRPTK2eHyaKfLW9mhT3V17UTbxCh4vc5LX8uYKhnycAQG28",
  "key47": "qwmvfpohE9fyvKmWXc4EbRbBLomSgaz3jmAW4yGGkzy6G7enLsR9JDdDK1hg8RiBTfzjSFtqkZcUcWyHYB3ZB2o",
  "key48": "5Ta1mBjSYiDcf9t8FTzzTvY9PnDwax5in3tLfe7QW9NmN87XFaPogPDN7SMG5sYkgfjUMu6xM15Vb8dKPxgPY5ZP"
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
