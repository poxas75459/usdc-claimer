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
    "336gpZmqF8BQPFMkitWf1rt7RAWDDLpVKLn7Wp2fTAHPWECdqUgTwVVQdztQ2mVMiDsGMh8dPjU9phJhc7wYrBLq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qoQV8yRz1cXByqZbvp7M8TdPYdPFtgtmysTZgTbsTpME6P5mq93fMhT5d52sqPSJsEptewTLvKNuxhyQMfUVvuX",
  "key1": "2FYMyHULGAH3PTncnGMsmSBaUPmvYJbucLSvspSHBdRgja7f6u4hW22e1Aee3wGvGHG83KVW2Yeotmc2jpvQ9vQ9",
  "key2": "2CwjQoUi63vRtN93iPkSwAQrVrsrSdb54Lbn5ZsF4yaVrnGqdVNWUGaQyfETT49wbW6HpVvCswMVdEV6JXLBG9GA",
  "key3": "4LpXSwGK7nr96VVtUxod1mDE64E1kztigrTw25JNkvncR5s8vjhMFz6udKC536RrDcFdNmCWAaA2z1a9Py4HrEmP",
  "key4": "4DygLZYHw77q1DAPTM9wrtqpb8kGoekiYg9yMaNHjEHY5vrxwKgDndj9BracCu4FxX7ozWp86HqcnsnWuy7UcuBg",
  "key5": "645KqBDX7e8neTX7xhttZnMLoXQa69JsZnEeiacTRC22FKuuWLxpumPDtoT75WvgFhN9y58LDUS8myt5JBcLmFr7",
  "key6": "kNTE4eurpRitEJXrLxoDxn1QETFnSYAyaxGSCeL71NFEGW85LfTQmgRXLcQX8p1zKPTe7FiXdfZnTL8vEDjBbyc",
  "key7": "bDAZD3pWsUHR5swQhCbgk8gRzLubRDMgCk8odnuNyCUoHQejHmttnN4MSKA8Xq6nGS3VYCuvzgP7tdaCPHrb59q",
  "key8": "GvQieDtAfPAgbQCTe4S72mym4FSdd34zo6VaMzASbR9Tx5LjZsijKVC8fyVPuFsMVJTbACKZ248FjWAQwst8Rj5",
  "key9": "3FchnD6jAxuXHbp1gmQZdwSidjphTdpdVVuWSeFaGtPBfk3XkC9iGF1xHVCq1d1pEEuysGAiFUg3KtuiTRPKkPqe",
  "key10": "49P2e6GNbxUy4NFv47rAavgaTp8eBPND7z1Cg9cDTz5uAtjkNBKRNkmwzGfMnwRZeUxGttbMoiYLrTe4tuLEJFSw",
  "key11": "3xRgk3cFiCXxyBhAf4sqi6uydGCf2xu6BAQ7ajt2YBF2wQAATFMC4fW8nsGQbQ7QBPLQ7adm3ut8pvZhXaZ9VVpL",
  "key12": "36W1iv5kA5wnmSnkhHHeQ3bXUDyS4QWMLuHmzjV2eYcmknRFdk9Goe6cH7DJ9kB6W3C13fj4pugrPjnb5us6YSNo",
  "key13": "2FJR4dq73JUyLiTjXiSNKR5XHFC3G8yj3VsWm6iWv6QRedmUMePc8duyMS5KNk15vk8XuFk2NERx6nwzkPkkWmJZ",
  "key14": "5spyi8wTAjayvzvS4NZkass7ij2AwRJonnN3rbXPpBhMac1tKP1kuuU9ddp1ePS47RZZJF45DJnoBWbzhn2JX7F4",
  "key15": "5S6VDFypXCr8uUVYHa8DVWKsZQTrwur9MxazoJDfWq5itkXBW3LoGEAQnaKuRw2vBchx3EV2wuyyguJrJfiGDvCZ",
  "key16": "JvBi4kNJMGFrAf4oPBwK2irfYLsooaRxKmBosN4nbkDzt68YTC2QWNpw8VpZrroi62TiLnr3Nz87Yk53HZs1ooV",
  "key17": "3qZJqTzRrEJm1Q6pXBLdYkdHzPncgw8i5MqAEh5QN5uA1rfuKz4HdDNKGZ6vEzwYcYu9AS5D4WZpkxU6doRzv8YW",
  "key18": "4azvW2XWwtD96awoBFgbyNEvsgmu9bbyQVUwpzzgK4X7Ai4oGpeGjaV291w2K5EJ1JFXNMVvGkjF2i45CHkfn8yn",
  "key19": "SAzNSYNPNHB3wJmSHsUrUDaiXFC87W42GQmWc9L9pAnBrddQJc5SGLPzs1e4RNpCVKvmptso1qpskqkGPWZKCV2",
  "key20": "5izn59fw31CFdJu7rgkLEaxvipNj4NGFxoU3q8w5uxmmfsW92HMs6o3eb4QPC8G48kNeoDJ3NjmHU3LDZJbECUAe",
  "key21": "3p2bveSB4mBhD5j1SBMxnwiyAoyMYa9TAEqxsagB4EScz7FPcvHvXHWqi2mjGgCwkoE18CtEEozU48QV2gyntPF7",
  "key22": "2dVV2tMu8Gvrj72Ed6WkJKqHP7mrPFiJLTDADqUzDjQ4J8cAiiWkqZrSqimhzMQ2jcWntcWp2CJ3KayrS1MJcDqc",
  "key23": "49ZC569KxjtqURCSu45UYtNR6tBt3pnv3ptyf579Q6xEtxZr8JT3ZCmA4JNzsd9F9WnMyoiUrNk1ag4vd8QLQ1K",
  "key24": "p4edUMQbp4Hrt523cRwxDzHYEDW5axxGABTXsyBNeEi5sDiPwwoKcQfVuQr1HXXRkQjH795jSuSziDXoQc65J4J",
  "key25": "2X9nCNNsfEmy8ns3DpGPqcfpNjBsJeX4eYzYegoNxxJXN467DBUC1sbYdURd4fwJUbjadkbc42J8SZsMiBSdTKFm",
  "key26": "J1Xmg5ugcVid5hEfCjnTz2fbQvVu7ibs9qKLBPpZ7tu6L5rNE2RNqoSeqnXrtQNPhVScJKHjhN9fKtFQYFm7iM5",
  "key27": "5KuY6ZMWTtAnHwV8JCVaGtSaP1bmg1NP5TFCRHd6CqkEc7hiNeFNgZgeAznYhp2sqpVb2wirGfCsyu4YQsx72oyU",
  "key28": "kkTyXuiqBnbPWRRGxVZ2aSRzxsffR9WAfKLHcoQSizr5WoKGmDk5CiJyu8Dv99gDthWVRoNiQonEwTMBZLBc9XE",
  "key29": "3jqV4yyYgUXiiEWqFYSGB86BDUNPAorVnCWpgPaUUeopw2mfs8oKJ7Q8QAAdJ4xwYpXji4hzkDqgHYxNpbrHuytN",
  "key30": "41FZWaKEpE5dQwje2rDvVerNFihRUTh4ic1K1U4CCECg2wRdGCHiMqstikHs2dA9pzuNVQWNHFTxPSg4zc4VKJnd",
  "key31": "56RKxmr4ggA2veuFu3YRLScBC8gkbMUYNQ3hZ2pJhQJJBVSKa3kSPnYLXJrh5jN7L3muphH4CzteoNeGYpQSL4uh",
  "key32": "4kDs7zNj1xCyjosQL1faMd7UtMxrfMPo6HYBcDScQtFzuzFvxPLWupF3rHocqKyatDkQnG7hTpjwHSL5qAaBZToi",
  "key33": "2nwNtqX1WtGRHvSaa6ZTN2ENKKyZZGY4kXoFrjD5Sj2SpXFpCxnhwr84rKPwZh9G5WMpMJZsXJfydJjuB3V1Zetf",
  "key34": "5gQcwhbEvU9ogcN9SZbz33jxmK1TY773Pv2Szo8abdpVXrga1XkbHDSuhN6MLvU4HdPNvtsuq9fjExMX6WfB93N4"
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
