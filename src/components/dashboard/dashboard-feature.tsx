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
    "4mSNVfSUSdA2hfRCAojdWhxeN6NzEeEFnWXBNypXipYLxmUBodGT9QTDtQYSV8thKQyzfuGxxM4nvSxn3reM8NNQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F33SX1CUcwyYD689eTiV7FA9D9KaHt2C1GsvokPRbdPiBG6c5x2QHBptkcvCqCsMgGRdfmqNSyCmdvSGoLKQrvR",
  "key1": "5V15JW9hcv23csz5vxVi57v86pYZjRKbHez5vwpCC6k89MXMpfexXXgf7LimJ4WkEkxw5rcKL9neP7uZ1RdBaHZw",
  "key2": "tfwE34yUxe5CsbuJN7CgvSpqruyxijrrJy3gEjNKyHLj15RkdHwsBuW4zCkFRd9WcMSm6tc4GAK9dV6EpcV3XYz",
  "key3": "5uu4z8uN29xjKJULouiRSuBw3NP3aaJPVqxJ29nm5AttDSYdQntowyW3bB1JiWspPpmkSprVJy5YsUcKPDPigCLT",
  "key4": "akCHFDZM4goNXf6ZHF1F4qc6vuFcFoD4HEg44ifpaQPvWSw7gTkQiQcMcmdpXsyExPnahvu7RCsfFsskLshaKe9",
  "key5": "2THyaqhMwJ7yrc5ytDaHtZH5uv2EGzw9W7LgxzKB9XsPXq7kCsxQTZLio1FjmNzFXS3JyMu8y9jjvHXSVhX6T5xA",
  "key6": "hVxu8boDt2cNBa3X1ZBfBGoSziqRg3vUmzcXzKVWffN4H5w8XUUWZu59oKXRHYfFsNXQNs95UjfxfaiaMqpEAPN",
  "key7": "4MiJzaNVhK12iYo3WpciNeqeYd7VtVWpfmPzPFHNCKnejjU7aVy8znyXCRZ2JvsBi8E8Qabx6L8SesGadBQSt3Ek",
  "key8": "5ZwJimYqp6j7TKNyhgf2gZSzLCCfiPRx543FptRw2Gs5H2yuukysb7ZY2tDzvdyR6APrCNcvqPnQxEyBRL3EsTSv",
  "key9": "2c5p9VK31JwfegkbN6B2rmLZpJUaK577au9qLqBo3envbtcYaWkC2ZAdP22PewtwGRXf8ZXGqcitUXg4wSDxtCdC",
  "key10": "4Br7Wa1GH4YPiSPFbBqp5gjzRDxcTevRPprNLXBSxH3ZUhH9VvuhyybZrRUFdm9xEkeKhF5uY4VMvPxqGJtBrEFf",
  "key11": "U5jaBHjyrYjGsUPhbWUaXgPfcextWTofmNYfRAFPrRScxdkmRKivmTRyovmN6e5kuWDDMiwrPTUXPyhkBRRaMmF",
  "key12": "4DNMmN358zuf1sTHFbYcx5FWE969gPhev2J59g5MW6JHY1ehF3AtUKRrTgios3m2UpGSACzHm6J7DfXcEuTiWYFs",
  "key13": "E4rphb6UTkQ1oo4aCdzF5rQn2ek8yvA9mZJwukCR7UeDTPVoDQQ8Vq34FySrGn5tEwi4jAWNyb381e94KQR5mMu",
  "key14": "52CNDgeAwZStAycES6jR2q8U11KmDnDPy88BGSaemMmauGBaQTtbb8eTGHPrnvYMmydiBLt6G6Sz8wgRf86dTWKa",
  "key15": "5SD1Dxz4hDSvkQbTvc3pQaC5NGG9YoQrE1KXtYJ8CLjJDWXhV1bUkdNnFeQwKthYUEeduCdunGWSVNct8NUqjJd6",
  "key16": "4qFMdJs3su5hjhyf25mYL7XgTbZZFyHJ4qrMTNPrwvPsaQXUTyaXdR8hssMLUgYjMgaGrN3BDDyEeVmM8r2jGRDV",
  "key17": "5jdthmfb768kNCf9TidZjkn9B5YPhTVs3Wt8mUSG1scz7ciwL9U1EqWaXLyYmZcdzL1R5DthVvSQy4rJtDYFuz8s",
  "key18": "4TFsXYGuL6C9hAGvkpRrCnrD7pSRtpi3DdCCjMc37s6TiEGc9pmryXzhm8re16p3oegp3yyzRSRQQfoLLzBdBYxV",
  "key19": "8E4vhG5TJrkTfSpHstodQKQfLbyF8swgdcgJCRBrEDod9wPoSkuXNzt4V5rFmfmEdXRmCLs9pZeT7jvK22r3Z9z",
  "key20": "5nvF9nwPNvETG4koWqshvj1B9KUTdUhoYm6MhDRA6KN9ZahZJb7ZqVz8CQ5XdZCRL37U3xE6QyP1b7bQUe3Gd5f3",
  "key21": "5ogR1xLPBdiZHVuHNXmtz1SsT2FkYE6WuzpLGPJusZgPD6Fa3dLd76NMdJQPbi2U7QidhvgCGxDFKuMcJvabS1Bp",
  "key22": "4ytjXR3TTjKWUUnHiC9Vs8G6psy3cZuAP93fMxjFrcMHh8D14uNC2Je2C9exrPP4rEsTGt8PwBt1GAzt98B3MBjP",
  "key23": "MfSXEqKNkEgfenxVAFecUsGkiz2HTuaLNGggAD5yAU81WcSfh4nKbH7wfCkK5BBzhPUUYAcNrDZ56KdhdUPCCsH",
  "key24": "5md2yZ8gVkvi4U8AoRMs93NoEWzN2GnTkGpQuqKdpUv96GYTa9ABhWAVMtqPR8p38XBLnLVCabKisHE3cYDhwfzh",
  "key25": "38yhYuAJE1U3H9gru2Fdzr3QWhtjVskTT2TZC9Zog6qcE9bfEyytgCgjiFdPswEWzTw3ccLBPShowVTYjSfhQWA2",
  "key26": "FvcHfAvdYvU3nKye7RuWNC9MJ7dpoqsm5DXLsQJv1npu5Me24vNZNuH8WwzXZUKXudwPRNRQfHrxrMKYUUXcZoV",
  "key27": "f5W3ifzrikVteQq7MXCb91hZkaJ1P4RzoWCvnMswgKy86xXZ4bL1M2B1gBjA1RvrLNVygszYNyvjm2wRU29niLQ",
  "key28": "4sotVCEk9ssUCbaKAj4QqNBbHLkeQthS1E4H2RgigzMN7jW1q8ymemLCs8gekXiXZA9FBkpRytkfXbLuWB8GMbzJ",
  "key29": "4iHFaaSKxxuVxg88iriNPxwUpafKRJA9Vdi85GCFGM7fgmdaahQxbLGkUmPQgjAEiPfhvqUBdy5tee5P1ATnyiva",
  "key30": "41meHGVNyrCZyS5f8DHsU5CkYPgxoMgNTyC4d8wxxFJAkkUua2THMZbFDRgonAcdkFY8LNcoqC8TGo71d8QRd7VC",
  "key31": "21saqcMYqSw38Gf4PGHY3sY5FaZQVFZsR5Aj2SMmD89vGrDcSzJzB3rFCJ4AURf52oeDCUKwZCd13TPqzESzTCWF",
  "key32": "2z3hGvRdMoLKGk2BVZNd4UgbgifHfPoPXtFUrZTdVerK469wtCSWC1iPiS1oRMkqMhyykvqyVr9mW1zoxvypEA9U",
  "key33": "4wKVGzQ94TQoEAJS8h3orB3G3kMStkBHc2RupQ1UFeE6FBG8X8DBRBuAKnv4PpYYrJzDqCmPPxNnT7jgxr3ucy9u",
  "key34": "nYLssT62R3biu2dYg336sQHADgSBSrkVYGTW6PyQzAz6BE4RdD8BXCqUHLW6d9acN6kdopdtuveJEstyRaerzmr",
  "key35": "2K82QUFiPREiiJ2HTYzLSk5hBurbE8rZT66G1qWZp42DonsJn4ibpA1ZQ2u7mMkFDFEKwQhgqd1Jjmg7wLotrMk6",
  "key36": "4VkmBjYSPw5Tc2UzcdnHh4Kk35Yt1UHMHtZ62rDhR1nYrPoLucvRsBZHDiWVebpLTc9pNK3PrNhBhdsGgFQYvfxB",
  "key37": "5R7CDDdm9v6a5BzgZqiWpY5G5owC4BvKxNykvpNVAVr21wDLkBouZxpXLk9c8fd5HQHFp1aiVZm1BhS3tgUvhWic",
  "key38": "2LLXWFspK6wE8nAvpWSBtCnus9ToWkWHykuCUvMJFrb6FRPZmWYp3CVrSwRTgYMoi8JKq7aJHSkbHrUY3rPXPyj6",
  "key39": "5tyhLwJzFRp3MXWFzL9UBn1dSuuZLTS8gZTzcgN7S3mewYHhTGU1p22dUCk4maeDDfR51iSLXQdEW72LP3bquNsh",
  "key40": "5X56XxDoTLwpV9tT7CfB5LjM2YhsJzJvbWBb58nsZDxvkAFddaKCHBPh39j8wefpWm3Tzuf1U2uM3VHiKbPGpfUn",
  "key41": "3YcNvS2dxJ5FY9Bc49getQjfKNodankk7LMnWA9kig2pNiprWywZNx4VbTAjTcjTwr91KwYUdAr8sQXNCSuZBdd6",
  "key42": "3TvzvZXs1qL1YcGRBEqkaffsVSnrnuDuiPCGhogcMe5Wfa8S2sCejW5WMpRb2AH3AwH7s6EZd5uJgtjT1V9kR3dw",
  "key43": "zYbprfG73zqjjryKQbWqbxv4pT6aCRaR8eB12gXpnPuCqy8rTts8m6aLgEfVpfNeYW9KfwYdeRUB4E87pfwnweo",
  "key44": "21Z4xnucCdaF8F8MbDUxmcyKX1vdLN55pDKDBsxhxtFzCXCxkNGWJer2y8R2ZVE1iJp64XaEfAxEPGtUdu9QmKwe",
  "key45": "2uUEijP9ubnZSvTkxkePwL3SkGjgciFNhT2484Hxk9XC1DZVncwci64FwyWUXdDyskacRCvoaJhQh6VgvDQK8xKD",
  "key46": "QWFV9uBEs5RQzVdBrit23SSbzmVk3CSWXkQC9tBuAkPZiZ6c6Jz28T1CT4Ef4zDA4Y2DNBPF1JhCRhWoQAjwuSc",
  "key47": "65U8u5HP38XyvztbG6BM2C5BRZ6fqwYYYsTatbsF2uVQPXJmUgVVtpvzAQWRTxG4E2Zhz9yGcqJBkJ4P2LqgBApi"
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
