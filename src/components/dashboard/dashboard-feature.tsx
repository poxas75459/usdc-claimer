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
    "4FoYap9cfmJYCmoUargE3LnWTcocJ8JMfurtVdqpoW382TyxpPGQsHEFXzSLtWSX6eePX9VkiT5qUY1Uo4GR7eq1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g22FxMcZHVFoSwXFvNwUPD8Sy4d78PmETL3pHurbAnkU4gkcdHwFZjBW37JfS7m7oZvCPuadjK4uXWe4dNoCmLS",
  "key1": "2BVMoeZ4GRFm8tcUwDkWc6J9mxMEiKPdoiXrhX6r54hdqB1Xyx3vMm5QqP6XuYfH27YGyRbraxkezBHmmT7tcxoe",
  "key2": "hc4ZhhbyEpKKmxaDvrNfxKo3LEDU7dT9ejiJmAhrkE4VzxZYuy2AGFakVjDT6H8qLunxeuT7hafL41NHVJiLGPW",
  "key3": "3mjyupJtKxyuwLfgnGjewcLrniZYLjJTumo4d7U63WUXqFHd59LTuBBSJNPha7Dgiwg53qBXJL3EGyNREFoTviJy",
  "key4": "3B7Af4KF7KhDsuTYWz6s3RYWWjjpsUCnaB5jDJhQZxW5YgeuQ72FUURFgmZJXuEm5jybbeYHh4tUW6JK4dRkNbwQ",
  "key5": "2HJdvD5AgLqh6nNbQrEGWmw1MUKtxtda6M1qBgWZPWWhCvGX4RURf7bJP1wAPv7Xk6TBuK5SAFuJfQv7mGJX717x",
  "key6": "25B5d5jpSMzeVtyRXfmUEcrDAUSfCEhttSXSNv2PHVAGg3KByoG5oEUwd3mZrsUhEhezw29XTtsMTmstUZB61678",
  "key7": "4Kjhep4aemDjBYpoASUfv6wE4WA4k3mSgQijAR7ejexuf4a3DghquQAtV5Q6NtPwWPbfyjRFKZtnabC8HVb4xpGR",
  "key8": "52N3wwFymsLdVZxFsLH7FpbPDHQ2Ck8KeK9YCSQQfgwqfyjmpwnQ9Yg15sLn3ZZ7419CG6q7apWdpFFrufvihkwE",
  "key9": "454oTVxfBQvnJt8ifrrWfAYX6iu6pV9dNmUkuCDCEsevDKLJhifj1ycgL3uRUcgBVLGzpdn8h3jLV4NKC6mdXSho",
  "key10": "3ckiL9stEuqekGbP5t7vYUu86GogygZieLkWNGw1ETq62eLpBJw7bpNJA6fyfXg1kxjzvBnUyGDriMMbTmhJ7wkh",
  "key11": "5o8PYVfERWwPoEd1F4YaxCSZE8bQK1eFz9RFxpJVGmJF5avME3GoERjV3zpsi9q3iBDvbtyyDsoob6Qa6mReEvyn",
  "key12": "2R9GjZ2ysHFyVhTs2haTfJmrwypU9zsBaN77DuEuvxS4PYw8etSx2dsYKoHtdfpP9mEezycq19HyCy3BVPCgy2kh",
  "key13": "3sG4StdwkzLphkSobL2a6x4ZHdJj8LyyrQRhH5P2fWFazzUK9Mgdf7CNySp14EJwzkkB37jLHZGyoTtZh8SYFNWb",
  "key14": "5h84rZPYzYo3SWAFkBa1zYNW2UARctDVshBwsU4TYoafXFbZEzM2KyRZ1z626VGWyYvo3ug98yAsiY67WSzAzrbx",
  "key15": "ePZe5e2SGSX5px6iFzCGeGkEAfvXYTuaNRRUFr4qMKPY6395BkoTffxA6eyV9xCxiFqURy7WHSuKTvrzL9Gvxf1",
  "key16": "3XYrcYujxxwNQEGVoQTtZafeuS9k8Muugt7KxFpvvXAqSQp8M2DsBBmAdKcC96kBatuin6fR9BzmaPMX3Gpb7NNt",
  "key17": "4ssgC6aGRS46i8vhjMvmh3sAFzWHaiuw4Ru3Uypcs1SeoYS1dbLkZBh5eC3p1vdb111J8abDSuvRfZ9DYMFFN5VX",
  "key18": "3QC3gptFFicKMBv2TduFzWAEaXSVRdFWcKBrChTDcn1AuMYtQbWt4VEDKNfrFxBK6AXRZxjMuc9GTP3zW9aKy5KJ",
  "key19": "4DeFRHT8TxKQe2VYVSP7qiEqbdthNvep2cfeTsanoZJBmVH3sgJ6gppALyQoT6d3XszZ5rRPFJZdkd3fs59tbb8C",
  "key20": "B7gAp8VESNcoUpdwEA8nQh5WTXn2REr9KbM3jwtC2jvqJY5vgjyUDAQradbcnGz3uDJBWA5peAMn81DZKaQUpSD",
  "key21": "5hZfNo4pQ5uXrmscxuWFnMjR1c477jqYehCQSAmYqD83dEDJH9xgwhCFRD4x5aXDAMZxeZ8QBYT35ncYsVT1sRsU",
  "key22": "4eNwN5JDGN2rJNrq7dQuyXHkd3JfnNzX6ENv3HTb2Qr8G5MY24jd7RdyvvMaPbwp2XYxtkvMYLDNa6KGFqHr9Bak",
  "key23": "63PXupeSkxNCYwnwiWS1VuwjKktdJ5AuRtZVz77WVCyZF4p4eGcGYbqoZsHuUo7uaS7nuKXgrUhaZUUCWHhxjKaB",
  "key24": "4WFWPBKVZnXX1Kkm5SggTziQShLwwBLRXgMQi52qY27BSeKSfKUbtXaVZpXLx1J3rb5Ng6byrrcfGGR6StCoMmCF",
  "key25": "5o752uV1QNYFwSUCNbvq2vo7KDpwLwewTVWzK4hd8Y2VzWPYQBPt86ZgfPNa7SdTaPAyrqZssTMv8kW5uDohD9qU",
  "key26": "dG4WVji9AvMw39dsLtaG3k4Fadrb6CxuJTNDVhemLUE89ukNcQfuPp4jfyN2vTj85xDMe4o6V5S1wj1UnRRbCVN",
  "key27": "4Bd7FejLo2EmG6CN5ZAMLDT6GyoFfDSUCpdhS5Bgo6LoTXL7S5g69tHHoiHLJBzyeopxgjC1RdtjgaD2XkjXcPYR",
  "key28": "4z378nLNoMx9hz5BfE6u6ei6yR1wkJBKq46NZ6cKJ2fMXzz42mgbBv8bvLiJbM4jsW9WwQuovPT6rWzv7N3sbKrk",
  "key29": "5EFo9K3CiuN9Lw8H8bwVahKQeK1oxjzfQYMYmoD7BR7SGAQuCc9dtJ2R4VukFcY8QrtxkkAz4Tr472PwaRikX1A8",
  "key30": "5hKEDeh9QuvAGcfF6Cc2gsDu3NUnXxuf8MeZxZyDVfQxWP5GV4eLcGeqm4tsGMHBCQj6RJ1Bce3BZgtYNseS7Tiq",
  "key31": "2k8PHUvxrkBVosS1QV2D2Zss47B73PWkue9rtsZ1r576WQgao1vMNZctRLsMDRkmTbQoTkkibRvF82S5D6popnpo",
  "key32": "5nTJrxH2UU37sBomhpffbJvkDUcax5qyUDeqrieuqV3NcPcq8wb5SrzNGfWPhfS5JiHKSHf7NZoX5iAAnv3S1HP8",
  "key33": "3QK4ZY8m3AiVjdtMeVWeuVgSDBT8UzYQo2mAoLyogpojtwwhRbxgkpAAzk2RFNhXRK7bH4he2AvT5ddn5jNL9RJD",
  "key34": "61ZaALGx9AgeVJJfV4zKx2U8fM9c73RMa9gW583eqQQAuogaqrKUUEtqYrvQQb4jMKKAAtmp2HHnsCRcJN8eXiGa",
  "key35": "61AX9E2mtsXDm3x9vHa9gcUc5FioP2hSEx5nPHJeAeNw5Va25dHvHwAYZxKAphXb8mFgWjZ7EKYgAN1TDXdEMS9g",
  "key36": "2zEJZDk9uMXQ8hex1rnAa4CYwyJLvoyneaMj1fzcYT14ju5tWVV8x4XsXdF4tUJ8ntdv4js1pNyYhbAhFUL3FRdE",
  "key37": "48GMeSy3zLBnR3Y3jjDf5dVm3gCj5oRYscx9Pxxtq8LWZHsRoBXYPPSgPdNwNLdK6GUT6b4wi4WHmTZWLkSPUNLz",
  "key38": "uhRKNmsUanRa1hc4QHWKHuVfohAaXakTk6jbkofoyiv5Ew2SApiJMDUJoAq6FVWgtauPaPW7kNJPKyDX3v6DEBF",
  "key39": "2thf3jsoL4jXUBNikmmGLfKDtCWANrDQy3Ry9na9U8rgsCGuuKRPzXcMbQJxPQnJV2wbqVbS6Lm8ZzLSLMtnAPAn",
  "key40": "2Azdmct2UtexwX26sG3QM1zNikkr3HcWkriJqgfUk6rNJeRa97DkVHFwWkjC4HntHTb36T52Yrwe2nMnb5S6hrDH",
  "key41": "3FdQaPJn2bPcnJps5GZMRxF3CNDjP3k5NfPRYWkT2DZ1ieDt9JcFCdcmmKPfNUHvhfu1i5KU1fRMgcpDoicMiRsG",
  "key42": "E6n9nsPypz7j5BWbS7p7AmHfhTcxj8kWuVdKaBRc1obLyNFXfKPBYhGvsB98seG7VhV1FCnna6kEBCENCHudhTY",
  "key43": "4AWpWZoifXromnX9q8QRgFcLJZa5ZZyg6whPbTvxjDFG6BSMujGmNKx6mreWd1CNkDHqpnb8DnQ9xCRgCgLRJ8t8",
  "key44": "5KmLygz6iKHUcFusEGitG46iUdD3XJb8KeoueCmcCNZFsnWgXqmYWg9Qzx8XbKGofCBRT1p1itd7Nv3nf79cmPYy"
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
