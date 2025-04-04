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
    "2sZbCijA4vuGyCHQgEMJyk8tGDcoRtKyLbEDwyLeiEs53kEP4hoB4Z9geNNfJLSpfAmCn6ykJqt9CEre6tidhDKJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4byKvoNWd23SFR1pptLvMRgnFBAWJzsEXmQqTSjJHjv1KAsWGF2eS9BMjFcm5vzDWmtYnb35t7zKMsRvuEb3WkXJ",
  "key1": "2ip91WhBDyR5CjhtGrJhre2Wt4D7A8JvwAYzN5ADK8pzaR2Ywur2qJw8swtPCfTDiELbvy8Lp2j8UYVvqAFjvVwG",
  "key2": "iz3dzUSJZzx83iBxKcrmPdnUjVV3eqFVYk8HsQXNmiti3qa1nwmpKFfZbyDFTD9Lkx4ytv84Uh39g35ZzJ9RATD",
  "key3": "aBsBysSwy5RtFDfg24c4WNNaspyG4MoU7f7CBfEu6e7EZPKvfWcJqyYAGkvrAX9zCSyQwk48mr6GqsYrvVFtKUm",
  "key4": "ZVTi9SaGNMa4agsoqYX6hcQzW4ZCv6Ry81URovbzWXAVdJPyx6CAFJHP4JQUjCb44m2DZYK5xw2B9pHdYbvhue7",
  "key5": "dGtuWJtj4W4MCirmHogCCE8WpUcM8xm4RAGBh9Eg7esG9nq8BQmRzb5o4QoDTzkxzTMbuiFTAE86m89RroLApCD",
  "key6": "2Td18UcfxEASoHbEuoYmeoDW2HuP31Q3phbY7TsZvHXZou5eqyrLYSHXziiiCtKwgH1QbMJxeACjjj2weyELBUMV",
  "key7": "3gcTuQkWL7dLp4pTaueozqgfA4DFZiHWY29x1pDNDQJr7WAVXzpCXVTHKHWcwTV5hM2fsZosKUv9mFk9hcR9zk6v",
  "key8": "TDicD5nckP57fpAKxEDGXvWxB2CNYgUPVw9VZuk9x8s9PESbJMMeZN7w7fDWC2UxMuj18PHCWFPKQxwQz82dK8e",
  "key9": "4hE8nQ5KT7mJMrejvLw2V5e9Z7eTdJCyz9GGYZnpbM25NVGzkirYGobFtcWm12BTfCVRBL7nQAw6tR45wt5NEgG1",
  "key10": "5fYDBEs1WuqibAMEbsLPskznxHduTHfGcL4MPoezdVNpwyV2ZY1NHGuBpDQkAQbbbWtj4S96SJtrwHPPe9tT1Fox",
  "key11": "2VLwZXLuXuF9D7enCKM1Mmy8FDz1iGwXa9qfpB4nopvpUVLU7Gk3rA42wBYUYiGgXLr4tywDnqgFtfaLkouPzYUH",
  "key12": "2mK8SeNPN7shYfEAHJokKFkZyzf5XwNkb9r68wZ4mqwTsxikBHM8BNRjk1uFrVJQ1A7Ge5geTT4apFV1WN8Hqv8h",
  "key13": "2dN7wiHpCemxS1xhPf7xh9ivmRSZjPT3j6vAvLT6PWrp9EBKHpEMqJRqPvmqssiWDvEFVSfNd8siDHTQsTdUWsxf",
  "key14": "3vyF18S2x6U3RLy4EKDt7i7CS5QyKdtQvZAvfbhVfmPPqFo4n1obbUUREMYg1EvU6eVcUavfk34hAnKRMZUaWVMt",
  "key15": "5ACpaTxKH9Z8WR4jymssNK1FbzytKrLLT84EtAr8y3KHAYnPe9SM32jP9sHP6erLsJvbWNVHURWDKFvU1QpTgBJC",
  "key16": "5DwJKgVLQarWNgVj3ukdS9tqiS2ou5dCHYpKnszvhs4QwDxAD1xkfAhd5SUfF7GYY5e2nc3DFEutyPjA9N2hdYSY",
  "key17": "3tCGaLQu1qtrHQkx4ZQSbpZJgLXrAVpDsRJV4TttYkcvmXHvGSGRRTyjJK3spN7tqn1AJqcvvrJsCKE23gcFYAZc",
  "key18": "2E3YFhFgs8DgYVStSH9apYau2NeUHwwGyycfRUXwFymmtx8r5wqyivpmTT6qfMRF7Qh6rofTG9a56VXboxVqjZtg",
  "key19": "VYTJbCtvFLbdRCJyfVh1t3AWNgVYnwPGJiEsbSb3UpT4dPvn6kWnp6M5gK52nyaZ6vki98MURSyzapkk3KKPr8n",
  "key20": "3KdnYPsRAGatX2Cq2hL7H5HD6X5ZTj3RGzdUrdpoTMPvd6MwXxUXEgeZctR5f6sh7vLfr4brQ9dWgmnJQVmieDrG",
  "key21": "zA3JUYqyRjP2j4XmMFRKpa3GTMzD5ziKrVmtmBvdmB2UXWbACcWniqpobyeHtudHUx1BSMFKhzTEt9D2hpZfb5A",
  "key22": "5xLBP5cdtwXLXiJ6aqAZBbzT1L3r7mgKkvC3FDCihNDb4TTkTSKTxY8N1z9ETmGFS7c4nq2MUkicH3DTZJsJcmAj",
  "key23": "3ZTjP9rY31SQyH8AqzVXjZFewNdG32yt9Ev1ySTvuZju6ZDbvpPqg48mf4CtvmbAHh6cHTFifn61xSd9zY68osSx",
  "key24": "BZSWtCasTn31PV3DCuccZKRcLDVFHtBPNhVNZDkYZxRU7B5PqtNcsZQwKE94QuyUgSrpmgQyn8WdLeFhxJR27n2",
  "key25": "5BvF2CUryLxiASnR7syf7Dhy8qdDiJsUdxSJE9ZkHcad6eSZcKUBChpo8BBSNYPn2doCQNSgM1zo5kdCSPNSyd93",
  "key26": "5tFY7AADcEyxDtwL8t6xDV7tiV1MMMbBv4dvQ7MRczkPeX42ExQWAcDDG7JDimmnS3WhdSdedtwFuTB6s6us1Nps",
  "key27": "65RPQRwYHju5un2Vz8pPr5z9UNUJBHQUVebfzbpfUXwGJpyhmpARVz3L9MzRxefo7NYHg57f3W66ZFrL18yAUVvB",
  "key28": "3ZLNvF4htcshymxo8h3MVCDyBdAq7a5wKNi2Pss7VJR6qCuw47q2ANWpBwPSZcBkaqMVftNFkTV8Mz9Xzfgw2xed",
  "key29": "3yFnxg5dHfs1JASRHa6d68ps7hLa4HpML15SixoKNJyU9yzQ2qnst1VbjQS7LUzSzhq23k63TLeFaLotPRT9h4M6",
  "key30": "617X24Vd1jjzTRB11SEY1V31av7VQnnHGwTEB9RZNDJwn8X6c5fckBpDAB87qVuLGdHonVARJk2Ct6QpLmWnzwRN",
  "key31": "2gB1myZDuogRhdMppnkCbyX7SXBF74ubzULZuZqwEskTHSmEiWZwuNbsndmyyfsq3TZ8JiYYF4W9v6hMuBK3ANEa",
  "key32": "UBroV2FKaXL8F4ndbn56r8j9zewewftEV8Ux4deqTuRHqYzgBYQDQyDAoESSi71VFcD3FWYqutcpkStYR32HM96",
  "key33": "29ddys6M8Ya8oufaEi51d7oQQTPyTyBkqDMJwMNUpQsZqgkacarsC49k9sQqs4zHwxrEZ6WmUtwQ1F56GXtgJbRY"
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
