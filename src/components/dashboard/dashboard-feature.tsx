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
    "2Thu1rLxtXaGHr99YZhqcA4AnmkqaMMuu1rVqSzt7oE2eFTqtvk8Lg1XsLrv8P54cdZqFrEz7w9kwaVh6xepMKjE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TwReYnk6T4mb6ZTCejXug1wEF6q6j6gy7xwavKuMMd59USH4Npu7CvW8eXqA8H63AiPt3NrKge8EnGrijTBHWCx",
  "key1": "jn1GzJpZRi3nP1myV3QZhcGBWtkrJqpsA8o1EenGgKTZKeer26cdkZ5cBLysaeHY6aCeDfw7mFf7Yy6G4ihcQue",
  "key2": "2B1Se1sWXY6H6tacaj7uTH8qe2Uush7PZQKHsjg7AvJDKWTgoMsRUjLnDoWy2i4pKq1PcuoSomJMGjHfgQuPTq5b",
  "key3": "WyazCQz8mEqtcCd81gYjRVKv8rYXpT8Zw7Qna6XFU9AzpujuCprjwbgwqdCL98AxbLowRofHBg5pWhwWWVFsatt",
  "key4": "uxYX73vQr5KMK9jiXVhhA8XgsCVHMxj3SPXkvtMGzir2SHwnGQq4Yg8NXeBznrzTnT5YFhGiaAWX4WJdM9ughyH",
  "key5": "2bndf2DHmygW9t7JRV1B5pdZskmVYNE2zE3md5fUU4ANeWicgZcGk2hBuMVsf8D1zcgfa8EcHXsw7EA2JwuJzJow",
  "key6": "4B1nQrocwT1LEregbnxoS3Urrg86R9y5CnGGj9AArVVfSfDRzzuTT83TTFQBhV427258M3K5ETVtd8rjjULzyWHc",
  "key7": "oS4r67UgW9YzbhZJxNs9eXDNnkpQsDwYoDSx4YcxrCPUve8L67Brf6jq6cBZoAnoNxzR1JzcSPgQdan8q4SSKJo",
  "key8": "2WxUoSzP5cVXQFc9xJ2K4oW4vWGSNqoDG6ByzXSygtveJxvjZgY4fzvvvvShaKX7wRh8GzN7bSo4r3fur4HrnufJ",
  "key9": "3X8Ro1wuiacTk2rHUK3Dof4r58v4X3hhdRNtY38j8W1DCgaiwZAnoBuCeBSZaSvUEXB5SWsJJ4QS9syzWU2XiD1r",
  "key10": "2EPUWcJZz3qdgrYkvtMSvWPb9DpjMkvrSnVie8xPti88VK1q2xoESVFKUWKhgt3jwm7fEQhmZX6sEWUME3gSuhyi",
  "key11": "2c649YpxFzDcTPNygzVdxP9ELRRp2dXMcVvtQ8twDVtvPB3LQbjxvLLAJZtaYHjiwotHJR3NbuLqMwjgiE2greMu",
  "key12": "52L1D5CNLrstU9a4e39hpPyHDZiSGiC6bm6KuHNQha9G7DJN98y56Rvan6gvmq4uTE562sZgdgDqPF9LLCLgRAAf",
  "key13": "3vcfa9iuoHNvxxFUYKEkBpRAY4QmoY37qcMH1F7KFG9eLDqStTQ1DWJpdojkXkMPNi4TbycHMSj1Qv3biCnkzfei",
  "key14": "4S9E5qKyNLw8ByQr5VW3Be7aUnZ67YcsRTXxSDnUa3s8fDmZQ4vpCKmHQKcj5nygQ1MpYdwmkytmq3Svp8L9by5j",
  "key15": "FUnBMt6TtuYs73wrr9Nh9Y6zTFL9YK5vivhv3WzUWQFNyF8dVLwDMhew4DssGUmRAytUfm9Ccr4YoEsoCH6uahq",
  "key16": "5yrqwUmbB3BGXpuSYmB8bQhVCwkZSoHDd92R5tLuqLyjVpNY5rZbhMpt2Dfb4dTS8i37GBUqKBKRi147kACMM9X9",
  "key17": "5bXz5HDrhroPjikKWVwLSXrACZmgqxKY8KABNaUqYHZ4vnU8Gg9rUNUsCtm9j2TXfAw3g4KFHxiUv6qWgTWz2ffM",
  "key18": "5i7adqsk2RpDUbAxymDwHPYNHPrDtWEk6N1sJXMKfBoxR4scZmrh6xUR7zeD62gzguQQCUqvdvzcRA8BZqLT4L4h",
  "key19": "2zsAsBwceZVcc441vdQEssFDeqQ6Zdednz7ES5C6MGU3X6TLUQPif2iqnJkV663Y6b1zsnPj8Qz2QaRoXB3h6zfX",
  "key20": "3n2kXdAE7D9pnHJggxzDKXa7Qnr1RT5c3ZAhR5tnqaAdEEpp6RHD8H75TeSk46QX3M2JGjTBppgCU2Y8z4m5VGMo",
  "key21": "3u2RPZpGZY5JTjwiQZateqoGrkhKfK6WDHZCXvrLfPgHyr7ye8tspseGVdY3KJugamycthigajs8vDDPUfjdUJpP",
  "key22": "4xwwEJ5wCmEmkKo3dMUQjXHZ8fCVcKBduvo81xts6CWxFvx3ULdr27HTVr3ParU15F6Grf5EQ7hvuBR54mp89kkE",
  "key23": "2veHjaywvweqLViyYRMPvT93KvjaMbSqpigaf7Y44RnHD6ATivWoCJQDP97XLKTsqkxpRpfw3wF3u71ixTr7x9qp",
  "key24": "2Ft9nt79rg94uTnJtSF1YxxpKJYYTXZh2o2yCwaFjVWuLzQqVPQHiT8ZiP32DSfQsSLPXG69BD2g5McdwcZWyZxY",
  "key25": "iCqEGM5rwRNzECK4ARbB6xvTZ961ZafeJC7Ejxg9g4kCUdwVNEiHmGq4urDvWmqydzXeviskJTbYtadfY9htSde",
  "key26": "3wDcyLfACp1vrJEjWrBmKhuHDpyk7ncqcVbrWrcMkkpm4iyEEKxvsNswHUtpHXduSAhMTTUohY9kGMGqh8KqgWB9",
  "key27": "66JnRETJwXjGkmic4S9axrLUceEq2o3mNnj14afLMFyaRMcviPdegWULJGcWWCbmcqgevujUDkeBnsk4FDdUcSdB",
  "key28": "3xfMoRnfvywbNuRMTa7Uut7qgWRbtp2bKEVdvEMEgUGCHmWmToQJDixHo3MT3eD5td5cuPy1aFNYfxpUVgRe5tJy",
  "key29": "5Qj4RHet16pjFaxXL1H3UD5GugMJdrjcYZXrD2pX5nGz6dGUuUFHZkSV8c86TyASEEiMLUzvvNVzQnN1yHjrRPk9",
  "key30": "3AWTprKPeXHQGa9ENuxU2z2cGRcAN9dvgiJCCYrAxfDLAvfE8xuV96STtJwK5oNyJrVFW1h2uiH1x8Qq2FQbpQ6V",
  "key31": "3GVYnsUkgrJxQAJQwnyDZH6QJQiLp4rTuRsjGgdJrBwbgKGQAsRE1NLbrntwr5wp2AzhPGfSRxwiPmR6GTPon9ab",
  "key32": "5JZTvQHebRa7oE512kQiNRb95n7UeTqHAZ2Hvou2NQQynufR3yrXJRyX1UJZwgAJ2csDz3hgQVYbTSxje4R89m5f",
  "key33": "4fW1Gr1tCP7i5HkKCw4y1mv9vHAtNujXQFKgDFXeBPs4PKzhSyQs1sdui4Mjycoup2DUfZyDX72Mj8UcL6Jyp6vj",
  "key34": "282g2pw9dJCXD34HEDGyA6NDNpAZbJt3D4Db8zPvWZtsowukcbDpnXpczHx9GwcCsAK48vQjXPz5QF5o8ZDw3TqK",
  "key35": "5eQw6eMohDYrQbJCFCZHdYWpt1MomPb2xSBgF5fCSo5JDkneY1rKifdJaYrT4kBnKzZYeqDrUyJ37B8pADnsBQvm",
  "key36": "5RnzsFwJUP3ZxQHAzZGTkJ2w2gianRE1CTJvjnfv7TQiHjJkZyLiy9EkKqxWJr93KxKj77Tm2Z36tFe4aXKc51oT",
  "key37": "2CJYMsdMZVQG6g6kK2h3jh1SLXYBSUerQ5crDk1Sh7Xu3Keph2HmvUJTLuv2RdhuQMW5qXn57zhoMP8Nr3UFk4HD",
  "key38": "yWUbHxPaWbFXTsTh5xGappqEnxyNpMQYhnLWME8Jxj3Dfh7rBpAdhm1bavtSiExR4uxuLqSCdXE7KdqXfHQjDx4",
  "key39": "i4nVtv2EsBN4ofCTNKDHwVXqAgpHMXhrdZAg3sxhGxruR57St4TQczsUYzNkeG9dTXtKx9i1F6qtkRu3VrtRCrw"
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
