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
    "2E6eC71qCo2uuRkNNnW36iQnARvCrbEADtBvKhaTELdhw1n9vmCB11wLFuDFCG8nuyNw1LMKwh2t88hzFagyKc5E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MvokL8QuLP93FQryrXhtcEQjTgyxaHyd8sHku7x6zr7rZaB1SA7GxFopu966uBMGBeQVTQRfffcqpYESQiYcqwK",
  "key1": "3Qe3k3bhiy5hcVAK2tccPw2Xray7Dd9gPEo1Go4vqgdPMkS5ZHq6wEH1sYF9Mo29gRcy4F5Cz91ocJ3eeHQcpBhR",
  "key2": "jCvtesbmaGPvJ9eSbBXXmay4dwd1oSdSSWBi9YtFupRnw8PhhEQFBUF7qFd6zbYoxz4tEmTLjbN9RrqBV8s7NNT",
  "key3": "62N5NVo3NvUw2mukGvLVTUfqeDNPnA5rpFXgFzvVue1z6hcZKZ19YLpmNijgXTJWkAvBZpLMMiKBPeAvF8BvGQBp",
  "key4": "4a11jvGQohicJDJEFuy8kg2i4R4ZTYaSpeWShECZTYNKLtB1RAe6qLjy3TDGbk9eXABLAcLP953acdzGKRWrzeaN",
  "key5": "3Had1RYSPWDccg3axNMz1Tk6aMiyJBVLPneTcaeZGUwA5rPrV2RkaLrZSLiyDSnDwXyBsTweC4L4mV95kXpPz16E",
  "key6": "4rWVsAsgrVYHxhqZtd6vmUbaZSjNsVUDtr1TqFFHVsFY5KytrY4HVGmS52p5SugfwzkR5oFXvjySaRRpQFReaVWw",
  "key7": "NW8MAEWJvZoZLBCQmUPctPqj5bG2RwTSymF2qE5GMFTbQpB1VZJAZ5DYkg1hH2kdiSbXpkSAC5yrrG6T97Pgoow",
  "key8": "3bUBTK6EhUv1KtjJrvySwMkUrbuTxEQhQtcYhxYH95LQ3CafDX9f6R3bWJTYdA8aWELek1tacX6fa6ABNaUY1oLo",
  "key9": "vawxb6pZT8fKMW5K65nJX2B3yFYjxWeqpuqB2AG41YANJrtCKzPfXSs7eTC5HMpjenAKsiXBEWtYxqk3KZ5uuZ8",
  "key10": "4B446TcePa3zfJKNDEq1kf59dsJp6hAhGMNtNn63Z7kP5j2q8xHP1wNxjdc2duU5k6ARhwxvgvELpfNqmq2aSFhZ",
  "key11": "UEq8HUeK4M38JBGPUW3bweii69bDwRPsvhbDqdnurrqr1VQi9RAccnywf6viaD7p4HZDSp1vghYddRvv3DXK2Qi",
  "key12": "3buJJupd2svC8YwHJL5AUPWV312mLUHzbqeu7WJYgZ6GduYJyV3nj5FxaeTgEnvQn5ZD8rpGQLUhv6b3y4jmi7tZ",
  "key13": "5Yda6aph5gXyeBDnsRxgF2KbyGLRu486LR1bgh8Zp23vQ2dTUBrqacFpw1V5pngk9U2hdyS1d6a1nhLD1176BudF",
  "key14": "413zh6kVg7gTySKSjrYrraNZPAEKJbpxbpQoKnCWkAafGHHcLN51NQss3dfGYRbcN2kMdEs5bDv9FVF7zymrA3tR",
  "key15": "NAf8LDifGJ61qs6Wk6y24SqMd7XuNKPUFBJakTJX3eL4T4Xno2MCPNuKQcy9QzuNwR8x61DczK52XNeiU8G4K5Y",
  "key16": "4tkYhio8QZzTr9BGVKB3ngrkqpZdC7csY7gDNiYbn9dsQ3466xRBaBNpTbztvTEMwL3NKksMhjfS5zgXpsH6XJKa",
  "key17": "2GbRDGz9CL6w1bFn1kfr39Jhany8LC6HU4bcj82Nba5iAW6PbPgHDyC3Qh9g2g2axc1VUDVwrgKFwexJqSQoWDf7",
  "key18": "PQiJpeHrXXsvh7i3scuvwY3j2YUocNEK5RC2zvVwLQgkH4kjsDS99CUjgnPfkdFdBLdzKPdEwW8pDRPFrL8dV97",
  "key19": "57VHAgT2B86cLsvDD3DhdhaBx2eXNmoXib4FUNv7nXMnqSrzDa1UEKhmuHmWXazsax2gMPzCm8Y1e7Dk1b62S2B5",
  "key20": "yMQKDX8R28ksQqPKLxNUV3QzbjevW6eckyQTan8eMiNLqACqpFUsag8GbYisPuQrXEXMa51B3KWsNEhxuPVVH7D",
  "key21": "25ZNerx215xaujA6YzEHTX3dgnxcG5Tg78GQjTVSCuBRKAubeLZfmpPbe9xBPJH9uQ36PEmyhmLYBtMGmBdKiSpT",
  "key22": "ysN9d2VykccSWbMdeuidTSoUADm2u2s8fdtHZJJvgwZXXeJ9maKmBfx5VcnpEXcYbQkLPbRqhRTaKtGDcfuBGco",
  "key23": "3cYBLQcjxJBsKfiAxrtn2NKof41zq2rKmqK8HbcA9ALV2VydvSXW4Cafzt48WDV3AN3pD695uyWQzdFe6RZExQte",
  "key24": "4NTQfZQgietpZPCBJUMndwMFFizm1ReihqDZkaCgQY1qLf2tiL5Vy9zWcZrFhKUhPivTF4vmioMsn1JJzuc1Gcro",
  "key25": "4UyDmjHwDzyigY53StfezNskCYrPMce4xKpiQXxcTEfct3SyMkZm3tLBq1ioMQSJiLB5CvBfepsj75ckezfV7FRj",
  "key26": "yHDkzMm8Edp1Lm15XUfUSun6fHMj5bBsBwnM1fjTn4rHC6diofoenAYicHX72GuKjR7a6ssGAMQArbpT6sj6nER",
  "key27": "5fJCFqEcxmmH8uynEr8fr9EsRTNfLTjn6w1LoUikKCFkjabQ6NqR5SH46mRYUfJJsMeRtztL7aTUEUTfjgbojjpx",
  "key28": "iMNj9ZJGK1YrAYsbDXMwXPEdEEVb45hfcqRdLCm1Drji7vkcmFbWCEFC968bZpQ25no4Y5zWA3yZCUDtgaH16as",
  "key29": "2MUUmFYqKftD7XCUnFiKgsYrvRW914Av2dvLdeNWbA1uEKerC5ukti66bFa8YahxheU4geUZz2HhdCLvTGmaPQwQ",
  "key30": "5JWDDN1W7CYGd6Whtx4GihVQUPDc3yhQMomfSQDF7jHigboeGW85ry6DzuCSdW4ExUcDssEMyvLSTRhUTLy6SDZ8",
  "key31": "5NqL7nBSmzfvMWH13x1CGCoLigbLW9GioVNnm64iJPVyWJ8n2G17nHjzENseqWqntwwUX5WXDhp6ikUFvfusRiiN",
  "key32": "2xy4PrgoirTAm321XKLd3QgR6LTJCqE7kQZTcdx4eHN5fVNZCiDFGA9UY3hiKJZSPWKHCv4ULDrF4fuftSeu46DX",
  "key33": "2PHL4vEwSaih6QSMYr5AwzBv1hKCeEJ8E2647QP5km2jnFZqcFLDxUBgpMRZpKz3673vwYfz8YVY5dc7E62d3bre",
  "key34": "3VZNtYgEm4BogqtboJWaotuYKdyxKzTEyfjrp689ULyBGBFKxC6Ybe111PbNPzDXHVa8ws9q3Kmi16VAP4JfWNcM",
  "key35": "2dA5gNWEgFtv5nVd8aTeLkyk5nEVYfGuTCQM1WZAmxqLPLKPAmZ7wsV94WG5A8y8fzBerw45Kqp2DJhG6R116hDN",
  "key36": "2P7FuHn5VvQEx5nsqff75HjamYJPxgW2VLYzaQipi4Y6iPYDtx9Xm7zmGzc9VkwPHSQHoWNyrmMT4Lfa2ACWjzsx",
  "key37": "67LkNf7j9xoeMFi3TiSXTDMmu5AqJM84eS3N83kRygvjeXR39T8fXznk3snknG7nRU7B7sLte1R495ntFq7ZX4dF",
  "key38": "5h3p1PKxpH8tbkB1Um9FdiBbrCzBoXSYkA13tdajmNfLvyitEazKdaKEw6BB15t8mwVa9yqvpBFJCbNt4xikVUn3",
  "key39": "2rDknFLpHwXw2Je4sqyXuxBVGJYQtCideRk4t2qhg3rrgsBN6ae2SGPDN5L8hNjBDDXq4FJUbSYWCiXxfDAGRHMX"
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
