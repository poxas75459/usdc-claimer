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
    "u7WK2SHWfAYSKKUefhPc6WWmHFTZQKw1YMGfpiRas4ajaj4ZpCP7BARh6tfx29iriRwvYyjXM7gfhELAfjaTARk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aSVS1sftF3RoPXmifGtq4XLg65mXx55jrWPztyDNxvMcTbQf3x8nEMoWywdXeNjc2QxaZjtUawue5ktbhHjaZVJ",
  "key1": "2NZ8ukehMWeDvqJPVPZErSoALoXRUvi1dVGTHE7WqoY4vSshiiERdDyb3ERfZg5bSNiWhTDsqwBdoHNYVkM6dmKt",
  "key2": "KWyU2jCuhTa5MjT3SjqzKZsxc4X3EfrcUgYEtpyUJGXJgZbTgMQ14UPXf7KGwcppFdxdDwfgb7iYjS594M3CuzN",
  "key3": "4knnYxnxoh28cTUS7tWRX9aNE4m3T8GN8YBFeYPa9FgRuj6RZ95Km6o173yGnUHLfwjzjxaasWzae2XaMQkXekue",
  "key4": "2UnmDiViFzRPnewmDPqarG2j2GA1C9TK7XcevSnu2hs5Mq7c3RCcdfydArN7VtRwZnEqwFn2dyWzEyxRuJYvtAvN",
  "key5": "5XTpWFXj1qWXSkeNvuj31TorZZR8WNjJwa4KEzTw3aDSyS42774nseZLSDjJNEAcZUmCYkm8xUvvSGapRkJNQdh2",
  "key6": "ZpAfpQom7qxesP3Z81xeuSe9stpgRESB9i3VeEzDnPrweXx3L6bcPR8U8DQRL6jGTHMUNBJp6FgHbjdGnb4Y1DM",
  "key7": "3HBwkqZqE7hNcJLRed6nWGpxdmepGMLwtKJVyihRKCti1Vk8Y6KfHhayUWZ8Uz8NVErwbgsUrdSygS4SWZdEUoBE",
  "key8": "3N542UMZtmGuwKxupQdcru7c6NgWkX1RUR5haV4zTqBJwVdFcWS1wNQyfsejesQqUwxPUq1jrPneojmTojiv5izv",
  "key9": "33ETTRDQGd1Vxi8rZD9Nm36RgC69jRrYFzQi3MLH2DMDh2eigMGtC4QvL9tq9tSWGosmshqsTynP3DvttEBZehWW",
  "key10": "ckSetwNV2HmcBDxit6c2Xv4PCq8xJt6KdR1X8ttuhkuFPvpqKqCDrT43LasVWz24Mnwk148XbDQrQ3sBaZ9t937",
  "key11": "32V8BKQGLGnsVwkEEfxuKqsT4wosJTfjcmXAXtcmmiMNm1p8TMB95HXCCtUj8LHANaFFSKxgD7wS1EfCEACHoB8o",
  "key12": "59C3s81XDimVF9j2bWezn2MNBHKjtjL5FbocjoTg9oP6aM5BJ4PZx7Xw3A6yAGrjAMvdvfhnXChfRYWCJ5eXDcEL",
  "key13": "wYFxKCAgySvDxfrHoAKaB535eH5DcEcoqnxYqXMFLBT5QSeLb5Rn9FAzZPrVUCMbcZiGbLFw7ra1usX3L4NDC9x",
  "key14": "3FFy5VwDFEBbxudUAGueV8yaCGYupMyzv3HFAmpctRpWc9ozs2SvvTupzBZAchDENVnodLPG1Zz5ktDFs57DanDm",
  "key15": "4gnzEf9qcqgayBs3tn61KrmTebSMrS5WUyxrPjk1XWpJzcSAaAiTKTCefcnmP4kM9wtq6s1BPbbPLVGEgoi8pVza",
  "key16": "5VYTso1BwuBwq51XoAcJaS8QjmkLtaZznX7VT8LbR8KQ5wPrHAQq5Tz1VqZ5xjuRDyTVB3BYToNP4qjYidfB9zr2",
  "key17": "4i2dUk3ozQTAr9EmK1yw4hXDuC6mrT6Lcjnf9Qb8xy9dPAUmdaF6e5miY2fGWhYXf1pkovhGBoSVh6f1XeV6kdCw",
  "key18": "2CnsQEf7EV4P7fjVJvnQQ4YXyVGS5dsDRCo2BJWypsk3SPQY9ZWCa3TmXWHB78P7izxvSbi14doVJG1p3PAdJnnL",
  "key19": "36VfCTwuT8c26pb12hRRYg6Cx3xL8wtJa4RzupkJbDjANucepaWnDbmziuSp3AU8hvwVsACby1pnMBY6Qh8NcAKv",
  "key20": "3p9aFgMHxnBNzr1XUfWiHhswj78g1jvK8BT2KDx3Fo5Tqhh3QALZB6yQPowgshmQgbNs3YK9vFGK5mPXNEJMZmtH",
  "key21": "3rEit39ByTeeh499Zv1L8iUVztx3h5dyh9oHcGXx93yGbJxxeKjGAxT6ZbRaDj84Q8UwCYvUyYKtdSuH4eKhf6HJ",
  "key22": "4cuqXkXFyoVmarFLLdiGG5vngNLfHCvjzKQdJd48Tmb8hPs41LpqtWKwGvExjXfDyaDZ1pF7gcs3TysMEnP8pxgy",
  "key23": "5TmR6FUFskndRr4mNBf415v8U8PvwLKneQtaAB1Mb73YYDZxuZAxJhdYY9j8t7LQKjhX59Qfee3aVi6m7BRTvNW8",
  "key24": "4RJzwPxWdL7pPqQRoDq7ExuveGtoFue6guD8GEWP8LDsUfstn1crL49mG4zYSvNbgLAVp3gNeTxw9vEtLn3XwNqK",
  "key25": "5ToPxyDApdeWCTRRob9bQDhmRALYHfU19q7KdSRZsS4e71RgK796aPxFxdZ14wxcd2wPswXMmucb9CprvwRA4bLS",
  "key26": "5g52bEuWLjTcarZSWwcGfbSCQ3QzaJDa5gCED8QhjT2C9GxWcSnP9vL9cXtdAhiPEBCgPLf3Eosb7tJHQ7ztU5yN",
  "key27": "3BmNUB2RyACW6fKrsF6McXYsiVChm7nBCMkt1VwwvwFj5vFNhJCnaXFyzAhioWHLf88pkPwgGSGJbGpKAx42NoLJ",
  "key28": "4ZDg2ir8akakSNjQm26qzhTomC4VtP8cap7nXgbd6SubkPifXiMo7QKLpimJmEWVpA8QEVWNXzUpoSsDpRgXgDht",
  "key29": "4JSUuQHvhC7KMCW3PRH5u2FntjfXgh6CKeUXdWecVE476Q7E2VDqk95SdjFGJkRY1WUhqTbMDW6WBrAtuHszqbDV",
  "key30": "3oJkwmkxaBAx4j6fpMSiWv9o2aNLoy5m9hxkjcwaoCwN6KtNhKG8i16md9t4EGWzscaJMTvPaXvYQdGzgpsbRTeB",
  "key31": "4rqVMbgVAubiRAjQoTCMNomHk7g7SrHxKzRLECED8ueZppnhwDnjCHGo4cqCtCdPkfJTTxPYHz9SesakjRRbbysA",
  "key32": "4SEsnoRa7CThWdUrQrwiXRRy8rDRrmkogtXEBNspAU4B26oAfpf1RNQquo8m4mx6cAiC1tBteWRUZGJuWAhLjuWo",
  "key33": "5tsDXhnxzVMyr2vaFQe46UWeM1zVC3nnFPvGbzVa6ii9WnobubEgyUgfxC8MmCLxEmSXAtzvbsLJY5JtWdaLQ5aF",
  "key34": "8gBxGCsAbusQaNCDSHSUxFiyyF7rdBTFXeA8z5y9catCaytoTKULhwJs4UWNiubE8DAj6CzzEfVGmbwhdm6h75P",
  "key35": "2tXkaVzxNEiYyAFyz16WomoMjsUZCJQgYJe6YKEJBs2Fk7G6wu9yjDCEBvob57Lb7yGsuKUBp4BngBYNvX7ZtyeG",
  "key36": "2uzphCCvk79UcRDN7icAZasNvghAb7Q92m18CALwCnfLgoFn9P6TvEv4SR8gDVfSjbA7HVy2Sr6AEezGq8MtnsYm",
  "key37": "3JcJ5fpVeTiYKbCKY55tdPUYhkWihWoSuP4g6TFt2CRBsmfuULxbxj1QwUgNcHrgkUdmqFUAeavCXXjTfMqEas8b",
  "key38": "4CRUx5U58EXXYMABgRrgfF5hcbXv8XuLWwBrVHLem8cuJhkALap4q339GomY7vff2GcyySK1Ar1DnpwnrxRpCh1t",
  "key39": "3izBXjKULQXeotFPtKiD5HYGgNNRkVtBuEfch44ciEvh63BdGEW6BfjvCnf5yEKsHzjHURBgaScHtygdat5gRHiY",
  "key40": "39qPK58Z39nXH2iBJxsHGMoxocGVsFyE86zT4WbC5m5NJY2MbJpLZV4Y8MUHs7Fzf7ruVTfHMoWuwE3SzXrb6Hh4",
  "key41": "UrihUp9cTpo94Sa64NYuCGYzPtSmYdnKdnAcRus3zZmqGH12G9wd5Tgpp2CNZiZZSDo4cQGSWBNs11EEQA39Dmo",
  "key42": "nNYvHnqFcDyoL3ybP7anymkaodKgkHvqLED3wJSWNeSBLHk4uL4K1Pp7MW3B5LTEq5T8EKB2CpYYPn6MPWRDQSs",
  "key43": "5QpJKcvJFnqHMLGLKH6tr18pcLwiNMwu3Fx7GNa4JYPnMhjpHDiqWgosGvr9iKwY1HTZyHmTYm56pi7ZuQY7RUow",
  "key44": "5XJHic4Ni4NynBbfVGtCaWAMiziBGR35Z63GTSphBng2SvoG5fNBoDHMASVjqqTjqBzhhiSSq23hhLz5MqZboqUf",
  "key45": "eJhp9Ur5SoWG7YUC6WmgffTJJxtj1JeBTaDwac3Yn3acddPBW6WpJ9GJYZR6XYjnaJfkVxm93K247pX3CgisHeE",
  "key46": "5Ki2Kv3LXDLfvx3ywBRTNCWR1h9zrEquHhGAuZoKC7kB95yesqZxvKpqaVMr5sjrZHxwaeeci83yctbe2nTWybxA",
  "key47": "3bxNKZCUkXGgXhZox2LC4FEBxY5yLSxQxmJiTnsDXL8iiHfNxeTwTMpn5Y5AHBNDN6tUYMBb7Sgkh5mtDRB3qQES",
  "key48": "4bwR3CcNofJWxmroY5GwHkQCCYvX2ofEgfMPX9bTyHqaJXJMAbun6SAb25M7fxoJj6wLZ8mhvaUUNvQrZF7SW9qh",
  "key49": "jq5Woj848Tuo7octDgb46ANN8YkqyXwMjvCTu8kvmMWUC68Hpt2znEp6hYUNQeCVYyJ5U2c5wQqEXNNFZMVkQqz"
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
