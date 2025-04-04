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
    "2FyzowKTzoDAkw5nUudWMM4QMFroe8ch9gq9sqJP9dE4jEq7LCosSoEX3h4VYNGkzf1A1kCau8ep297of7bhVjPq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h4U9uSLgPoQ6v5hjaEcmXn8sWE4qwK2mkrj3EtwSSdtzDNhydvFsg2UrqhNcaU1HksPTk5oRenx2youXiCWqZLY",
  "key1": "QtubyJ4SVCDo5hvpPrdZ26yAeeuhKF8eACxUCG43tLyeqPQZXBUJxyNhZE3BpfPt6U5cijxnA4LRgSMHRprAJFp",
  "key2": "kYEFnhuphdjPd66ex5RA4KyqdNN1d2poQWfJNx4xLT8eNmZk6mdvMCyed111UoiEi8thrNyx6mBbeUksGdQanFW",
  "key3": "3y4em9eDvkDHru3WGwxV84KLgxEbQd7UwfzdWzTWN2iRGPPKhQAeXQs6wKatDtXe8JUdgQkPwYSWwLp5kHUi2TD8",
  "key4": "2X6Fzs1vjWK2DNV94BpYSHsGabRdY2BiR5w4EU23xy5nE7eLUM1LTMMdjWwBoXsLqkXMhKGFADpKByQiwmeWegew",
  "key5": "49YwJc7sEFyGQazpmibjJWGHL6uJq7ssCQyLDFy2GgcgZAf2iqLCgaVAVUjtvx1Zie7Jhbh2AxGGeoi5nizy9wkz",
  "key6": "4Cb9aKZ9Ktk7BzUMSd2Xy9ZpbbqPcYHQpCPnvqqy5hwtxixZ5ty6t1fDUWMa8WWsoQVRcf1BXoQMPG5skgowrDF9",
  "key7": "4TcjrEMzsUoXEsE6rtMPDRHLbGNHvoZv1jSmqx8mCtYur8GtXaJhp7XGhF1R12rDk3wk2GeDWFsQNqxSGiP8Kc55",
  "key8": "2VWQRw5MtYiToCASKdGYUKFX5U48P1npTxKqBn7dHoc2kgMFMz8FWynmJ1ajUarhDaPDH6n55hPwwfXufmVnhRkL",
  "key9": "4T3grypBp2AEfGDeuPVAGHuL1BqRmcxrHxLcRuWKmMP5caojks1pKA8QxaWkqXuNnwYX4RL8oNFo3VK7tCAXc1Xo",
  "key10": "3Pik57q4iqsuq4sxyxhD1SVtwFAEXnJKRMmGxarmZjjcNyZfxqrtb7c3tVJpceSvsSibJzYnnFWiAQbnNqLcBy1t",
  "key11": "4UYc5cdFhQporoXRX6mZAiARzumJiPb6sFTpyFNY5f7THRH9t5NrhU4N1qrH9DXew6KS6ZNWGiNsvUTDqBCoXzqk",
  "key12": "22gHpbQnA9WWfidLtPP9yV47qFjJ1mkbF2LLp84R19b2Gr4Hx2EJWh8tE8PTRz6iZnC8xKmRoKBAnVFnpdK6XBht",
  "key13": "2HM7oSTCkxGjnjG5DrBUpKswUNretYxF8aMTCUPq6QPBd1Mo2ABcoTPWQ4zLW8ksZwawok9y3aA4Ny7eGFaeyyF7",
  "key14": "K1PEX81pRpgpDGgTJWy6MatphX3D3rRafTx4bwpNNt8cq4Xjo3b3X4eubR2rffUf1ukfjQGzZjrG1gJwpuguPKM",
  "key15": "2fZLdaFKzrJ5zxGvYuzNm2wtJ513n3wE4cWpwBvfwARsnv9fgBafgjCCJqq6Z3diMURg85HfHpKrYwtjvXBBxjie",
  "key16": "33eBx5qWBCQEreyRSJtPtRbVn84ymeNcm7rqBpWFekES5XVJVScPQRu2sbftaFkF5wG46qqYJKPus3jKnkG72tM7",
  "key17": "5KWvPPVF7HLDRPosrA3RwhcARg287W4ww6h3YgqhdkHSXPKV14HuC6KYLVftpKxph7A1FwTSsZPRc4oCARWSZMnn",
  "key18": "2bGNcA2G3bPFtdDsdySfPT1ciTEJxfnVvtKaKnqJwrPU9cLfhtdrCqWxnxmhFKDyjoXquM5FznHNSv1Pk98Ms3e7",
  "key19": "2vCJbNjFbufhtLp7dS6bMT6qhCzPHDxwQPDYW2yMdbfSpW4jGbgjAo9qd18dAKV2FGg3gccWV6eqsssApDYN7fCw",
  "key20": "qcgRw4wdjJbFM1vpZQFgtTHfHUC6LeVv4WXY4LfMPeFPWLZckoGFcFJFh4Bqqj4daQb5YDHBNnoQFeAmU5R32A5",
  "key21": "3irAG2e5DZj4N8bNP11puDrdU5Vz4gASPCykgeZzAK42CrrpLMjvAEF5Z6vVMoPQwpwWVgajdRbyjhnMJ8v5gSJ2",
  "key22": "2vNLSTGDLZsLkFcDddpzNrwq1awENGXojUZNGLc5LpZAUGPz2qLZJXAjAcXFgb83rHLsxKhyM8NTdGT5MnP5QWat",
  "key23": "57PB5iMQzhwh5n59aRUmv3Gz3WEr5ZzgawfeufV5tCQgCf4qAhuHufH8Keaa1WYm3SvSzKmhjUbwnEeHHWd43CZb",
  "key24": "5rEVka9n24V8VUyUi5uvwBWmSsHNHpAjihKzFYyFBue9AyoLC9Pyw9E3PTBpK3Rk54bWvmPQWekYwdsEJsWX3Vy2",
  "key25": "M851f2URPzjVVDhbPAmD5Bd3cnaHmsGchHFDuZhEBPdHBy71Nata6UogiL4u9WkcLoNNddxZSoyPGoNLTyLsGCZ",
  "key26": "vDb61qgVvsvvGFvfW11H3rpP7GjCqUauMZ7jqfoKyCRFQzYv6b4jbWgoj34aipKoV7vLQFXW2PvuKDdmrZ4k3Pe",
  "key27": "5i27QETPHV5WdNLj9k4TmserkwcztKPucR9WuohPz6259ZSuzeyz5CmdZroiNseYo1Ep4YfEUY1Z2wxad73GFCMb",
  "key28": "4MH2DZM6tggjwgtye5oBaxRHCVFyUsFcTXKUBUELJj8KoHFkGT1XvbXLCAV2nLsyjk3wQ3Kz8HYtbGiYcASrExcD",
  "key29": "41fHFMxY86bbJea3cWaqtm398infH4cfNeqQFKoQ2pJwboBDbtLuJPikzLrwDSJ5XLsb6aj2xXUCgryqT9pbNGoh",
  "key30": "5SfV2RrLCFBLgVLRfrVt5j6thnY8kYcZi99gXMzLLRLaFCSX8sq2NSfM7MpkYGJeExDyFJpCX3sVfeNk8YwoHqMB",
  "key31": "2GdkzBxZNH2qehAAPRTXMEZKdaeXzv25fJb3fKUz5CjBw9a5k8Ri36ZQYg8XduRiWLDPCEkYUWtq3duPMHM3CDE4",
  "key32": "673CAVzetBkDWkfPSLkhabMfjUtwD8DQKjDWJZz8TEpg4AemAKeF6DnvSDVM4tjVGdyymaCWSLPnzPfWcUJjikmQ",
  "key33": "uYaYgixSipr6dq1pGcuy1FYuWXEScGWDqkC447svLYRCcN7EDuCpwNNMP9A5UsWAPygJp47JtrMxga8PUYML1DY",
  "key34": "Ne79Nm3xm3coB1pFFmmpVfgU4eNwQuba87UegVVeAafd4xKPRW6qfDf9uNt34uYUq2kB38PFjmJDBHbszMjLEfn",
  "key35": "27LZmiZgrTXYh9Jk1bg4ZQSTtQWXNrcX7x1Tst66puChsCZ31RWeVji76AdqvJfUVw2ZEjXhu3HUBSkNqLdo4CjA",
  "key36": "2bzs9Vjy1xrudrKqBbt3DrZW7fWLYais3RBDzvYUCmUcJzi5DEgJsiJQaVc6ZnNHAU4ToGFa39m5fPGTzP2n38hY",
  "key37": "4WK4M6e1v8wgTXcwmhDcPzu4JrnfjkEf2BWnFCgkHkcwPPfkansy175ZVdQXiBu135q3mKpVHVH6aLaWXq2AZD1t",
  "key38": "5acjceMEohQyJuocwuq5YAr9Ad49DPiVU6CLbQ5BzkXdvx1aX5XR2JCuVDQBTMYiHmHoFp1w8Svh9rD97kwrPaC8",
  "key39": "YY8fWuYVwBTFoDvErv5SMB9pyseJb7QkPCtE5dYFzD2zJZ5nJ6ZsGKGdXUqzQSTe4TXpQgwfp1RtF86TZXfa6ca",
  "key40": "3vgjKDhUUhSxSArWy8UMrs3Fh4BNq4Zubf8zEgHUr2M2qiLuzQLKyDy8j6rCNHVZA4pieS7QfSiqgz9PeZ6NsDRj",
  "key41": "5Zq19BKFUXYN2Y3K4ie1jFNRGQWBxbHSHn7VeZSoNa96KUFgajmdir5RcqR6DYx6kHWswqf6arEreVH8BsvXtwaw",
  "key42": "36X2fikVYz9a2EKkzvChrk1yXCMX9ZNs7PZddnzMwJRr5BTXJFWQBiAmfbJT9XgME8AuYavhxQD5EQpuFySUo7kS",
  "key43": "3FFhufxCPEVwt7p6Wb9N1DrPAZcN1E41kUPfupyj3zzujp9dfi94VBS2N5V9HRn8VXvVTSC7zu37kksS3ACCmUEw",
  "key44": "2dz7tSSBMhmnJmc58gSp81yXc4YyJCMADDThps7F3s82YzXQdyyN95n2fzRRFWWasg4jr7Uw5ufUQUfeFuTAmTrV",
  "key45": "3QMvL9tF8CZBNchhtXDhdo2fX8RFbK2zcUWWv7x2yigtd1RztmbAKkHo7XUf3cwKDv6dyufccuTJ3HpywK73npv4",
  "key46": "5eRMsYr4YsYhLWJBfocR52zUidvAdA4r1iNMhKhUHdZN32yUpUxsEz9n7Noq3SWJzBKiWp5ccN1uSaBvtSzxGRVs",
  "key47": "56s5mwGmg2Eyj7DoEFaSQJG7pkPJETRY64DrMnYmoCSg7qGehe7LMevaQAqnySqZXMJLuhautVKL7DaSEaZCPyUM"
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
