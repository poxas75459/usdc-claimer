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
    "5NSHLW7JWuSPpFoZ6nMFGDyxusDsQ1jDB5URtd9tFwajqfVfRiZ4WP8YKk45KxBhFJd8t7n5QTWKxJSGZ8HHujKi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rWSkcV3Ft71RSU19qPFWeWy1vPTBgmoG3yS9fbeQ6gE4hgjLnjktaY3Hk3CswmHWw6pV3cBHpKS78ZgVSP5pQ6T",
  "key1": "575DuR8QeMZVfzPrqQoU5h8hwdxtsyDH3HGwo4c1HLjUunaedfZzH3Tukh6UCsr1TP6W5c7w5ytZW62END9u9M7F",
  "key2": "129SQGgjTUs2vnuijmSitZUy7EhpGZjtcBD9e8pXAgugGVZHVQ3EjquX52juJjaq8j7WxXSxaxbxQXUKqm9TBPPQ",
  "key3": "4ubLTiN4GzWuj8y92nushLPsJ5RXZJiXhM6qLbv1Bc4Jb4WrqCGScXD9WyUNG7kabR89Fu9z794AaB9SRYVsz3pL",
  "key4": "45SvYrqjZV2MmUK5CgazsjVNvGFf4h62n9f7t5A8nBDwM28wCxsas8krVuzqR9B5bM8fRFvzs1Dvkdv18oxsvyV",
  "key5": "pzs9uN9vPsqsJDRu7LUhE3qKGeAUm6ozuRuxRnaMu2GnA6kBe3PDcpp6HxBJ8zqoY7J2QzAEDY4NX6X6YzoA3Pa",
  "key6": "MyiHdKwE5hakcxDsifuaKxiBsHQ9jLDFDkN9hhJf3LBL1CNDUSaw7XT2UbefkELAgsB7GE13J1PK3ydzv1GrqqB",
  "key7": "GSzYu6sFPmbAKsJfUH8FQ8sRGpj3Cuoa7nJ8LKR6xg1e1EcnbQkenmTXXycpmskMxKjF1RH69zAFY8qNPct7i6A",
  "key8": "2QpCBSttwiybQr7AoyyX3juXhEk4ABBQSNuXxA23EauKHPCtXKDa8SGbpkHTBMNnHiMK8n1GUiboVAiwJ3XiRNiJ",
  "key9": "2LyzkrD5ntuyfNRwuk5C8eAc8mrCVV9xPhKuGMff9NeaLBHTqFATb8LyHky6XUzbz7JBsCMXcMokzo1pxBbEsHoe",
  "key10": "2GTvUKSRdJtKHQj7GZynkCUNMszDrtZdt47g6PDc6aa1S2smPcCVR4F6JmUxmeLXMcY98UYXbMrCZ3LxvtrWcmUw",
  "key11": "4aCEAgkt2Vsmob5mRFfcyjJj1RZk8KRCczUoMj8aQ6KEoLKdTq61EkViut6KP2A2s8SNVZGNkrjXRSUVHVv6QxiK",
  "key12": "5Xe4WP1LPk8HhnVjrsvfJXEPMd35mNmf8dE3jVucHky4yFPDoQdKJugcRXTBvgmRdKkh2Z3m2XZxpQb9b2WGTT1X",
  "key13": "4E5xPPBTGfqKRDba3xLJmmmM7StpVTD9n9uZoVM3yCsTKKmjoTtY2zsK29Nz6xXK6pp31KwL6f8ihKmwXemEpyGJ",
  "key14": "zsDc74pRxnsyNDMQxi2MijYQYeXhMKpRghWYDzCpWS84qgJXgG61v2VegjJWVeCG5J14NaE5qMzWT7t2JrPCpkh",
  "key15": "2qaSEe6iiydmEUGwSVouiyfuTPix4ppahqqfLbnQjYVpBsfUNFr8hoo1HLmmU6E1De7oi4Xfgf2Q8STEivf4pWik",
  "key16": "5uVDGYBUf2w2biDLrLy8ybvvtVfPdX1S7B2mkAzZShADDnMZaDkWffLTpp4hBAWoiAUnxajDNxBX8uwt6f9BbWcs",
  "key17": "5oQzVG5cHhJxaVrCYDeKm5CDcf57trtdMmv2oSFH3vYfzBLGyLKR91SgM1zwYAdgfFszXPjxADQxw8YUw8zd8QCK",
  "key18": "5yZyerRM4qNj5cjzqC2ojzsdYfUVg7psmywkrjCYsHfXHifP9ci67yAthDvZUx4V2fbXag31JzXduy6ZsNgPTbo6",
  "key19": "3peoJCbyMdnWcfybP5XGoy11vdeQASSv68E2SvpkJiCDwNpsrDrDPhUE7KcL8u6A97m5PBHRza4dkVY6Cm5Ejr1Y",
  "key20": "4SKZyq6WPBPbaPRpCX1C4CjBP7ffjdhVk5FFGNmBpcv5moegcU6FwgCDW5BxsHDFnEqBSPUgisdpiKojjxGqtrx5",
  "key21": "2ijrxRBqPcCMK3TJUiHvX5JUZA7mekCb8pFisuEKD2AkB5LbZwPSBTj6GTy5zFxgXeVfSG7uD6JCdpJ3VzVByhk4",
  "key22": "3LAjwP3poc82riRAbRAG3edhBskuq2mz48Das2cRKvJ6uopxLgQRaohmgGY155Do1PKKSYipRzV4hYTe8PwnqrNM",
  "key23": "5ngsSyYNRbV4rjYPtXzxepDM1gpg4qMis2QNFenSfJBgCfEQqwu82RMc4g4bVV2Nwb8ZWiwmwSXKCdryU5SS1c5z",
  "key24": "3hV5UvZBvRT9KwL2kZbU3HMsWgtfurWn3d52rNEXxCCeEYyjRE6pX6963kj8bJxcN7YDg4ayUVzJuL4qVrDxJ4PK",
  "key25": "3n92dUQCnrejdRpYtYaK2yCeVznXd3mSZzAKsFJ6XnC54zGogiNUy7uyqUxRuQfYnJ5KP3A8Hx7bA6xkyA3Cdy13",
  "key26": "2ztcDHsjYcf2f3DJaNkxaHktknEPBd8zoDd27VfarG7FUh1JW1AWE3YEjJ854zYiG4smyfMCG9KPH4Vf6jpwpx7L",
  "key27": "5MC2s3wTa7mVgzcq3LemmAHwC5vwDPPEhMZLUUMrB3kWMk6E6uBApvAFn16EESBx1mbdzDFZ3akr1n8QXdQmmQmz",
  "key28": "52V8b7ByZobAfWxNPmazrwjfQjFX23gAaLGMTznuUENGrWPX4reVoeRdWtqs3LH4wRKxqpBkBVG8AdUjxt4cGjVB",
  "key29": "3xhg1D3xqrpVr5wqR9v2qCeN1Gt4jQ6ncgB1mEAr4h7kzTfjHSZgxUcQgHNddgViXMAQaSobwGrxDYSZY5LCnJNr",
  "key30": "5VJe7DewDHXRPcPFazYAAWMjAZEt4qakBdfCPjPyWuPy4MJCJL4XdQzKZ4LnhE1AbAS1QKnxhXAw1gZC3BnpGrc1",
  "key31": "21e8yZpUq3ijbY96mPWpc891bu1LJ3mxicpH29BbCC8bGV5mYhpuMo5mo1bjmE9ZE45FwV7EQiuhVNfV5wQoPECN",
  "key32": "63ZvF9hLshRALt1FWz25aJh2HDuWss57pfmLaaq5Av2GoLx2DD4mQFdyuBEDUon23FAm9rnH6DyzTWonxse1UZ1P",
  "key33": "47Raerb7TShRCoh1iPwEEY1Y3BUukqTJmJErHwjEmwL1prFSLTvSWYaFiA3jrgjpAFUgz8xRznFuJYa1FNaEL2iU",
  "key34": "3To9WLB8c7F2TzUSsD8yTdT9YP3hVSS1yZZnTznUErkzJMbAQT8XipSaaQP3msMwyzMqQndyf5NekFoon8pdt29Z",
  "key35": "3YwWeynWJfWkEfKCSutJzttCAzLsgDg4gEJ5EEqLZ7PcN7GNbr1z3Xbto7dFPFiRQAEw5ZaeRzj1WgJVoXLb2nH",
  "key36": "H3Y5EGEs2e4jXcLqMoqMhEyQxFvjBcEg2XWVjmoRFpLSH1u8utokcqQ59e6AJXFPsAbH2kQyabrNyqMrKezWwWC",
  "key37": "4pgi4YqZPeYPJoCrrA1pZxpQQ8svtfzsHTmbHY7x7zxznAAimG7D2ABShu9tA9uve5dwFa44P5UMZgbuq6AhAF6c",
  "key38": "4Nd4nhZfyBeVidBPqdcWudd6RHM5YLvFvs8DL8L818PvvYQC4wRLjedHoyHiuNk81s1t3oNsCxu4kAUumBZQYcNs",
  "key39": "31Mhxp8JHApAwB7QCxivp1pvQhtxfdCsgynj2audoJDXS7fGyHhSzRMDe8w8c59kEy2ZpDw9vMGNsUFCtu2JkuB7",
  "key40": "L6WzmgkzraHpLy3fDNSByYBeAZCYD3jgruU1WZQbLDvwyB3CDBVTjsDRVkG7cxkV6991SvDdQocxdguaQ7196mg",
  "key41": "22YMP8aGfzbj6w5VXif28DHjixYdTmQCN9T7YPePkg2CdNVfsaLnvVNAMBmA1uVYwhxLNTg915DnZ49NhaTK2ah2",
  "key42": "3mbfXz77rRpjpfMnizmWRG5rkf4ecyUozmDYHaeb3qS2PC8MeEsgeqsFowkUh8oo5vwBtc8xCDmZrvFkFZuM8hkj",
  "key43": "dWHQsyP3rmWTJ8i7L8NtyXaPGygNCGKQnwCcgMCgmvq545QmzMwAXWxzZrkAKA5e173h5Yp1DpB9qrWYJnbApPv"
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
