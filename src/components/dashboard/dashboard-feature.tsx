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
    "2WaBrANLaTa8Z7h7DpzyJT85bHcxLw9KLrsm4wevGGzuneDe2dAGttBw1zWUvYBUHScQ6KwUFtKU6p44qt286TB1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31UvEBQaACNU788rUxr3QA7Rkt3X3TtQEVNxh3zfw9XZsbgCqMk5XCA5Jr2TKvVRycxcAdaZqfC5Pacm7cRvTcYP",
  "key1": "4AsPqi6Axbaij4KhfPV8B49aPJXyjzG7mSWazPHuDHYEx1FJcdedPR1XmJRbn6MvrKnLErMYbd5fXjN51y88eWE5",
  "key2": "5CeT8Bti1Goqah6my395K6ZLJxMdL5g6szgDvmkNr8W11ishHxdPTZ1Zb4ZGH2JDsAaG5EhfabTkuo9yHgkUPtnd",
  "key3": "5W4kFEsS1WVBfCwHjPd5FEPG5K2sPp3fGfMWCatj9zr2xvoPbVKGtzXECX4P5K6USBCJrj2HMegLY8fvvKK2FC8P",
  "key4": "56hYb9kuyK6SQre4BHjA4EFmrAz5ScmcvyqiYeB5EEhFPiewt6R4nDpCYwwwNPeEzFSYMz79jMm9SNrXmhiBSQTH",
  "key5": "2RsuCAhhe25KFFNaWZy43DFrAGc3qdH63zW38gj4987s5sNSbFqUE81mFm9rsrwkhC7bx5Sg7j4DCR53Pi6FmHeu",
  "key6": "5fHuPHrBNnTvvjLTMM96o3Pu3J7MtV4rrujB2nkPTGHkq98tgzKpTDiRe9MSrAuv6YBjfQ6wNzj4piydkJX24AWu",
  "key7": "MYs2GL4emE9vgVX6VdPAer34eBQE5yXbXfC2DJoVLQPAxW4hcATCSoSGambX6ZXG2pbkcpFSJeh4mqSL51mCh2R",
  "key8": "45tAT9Q37A4LZ4wbUtEdJQHzo8pm4RsqzyPckazocCuAZkTn6D6GuW3Xs1TAgf46LbUp46mtdvt2YZgw7KRdLx89",
  "key9": "35PR8FLfTTambKvZtoNuFgDrZRAEmMEX23c71cfs8448kvrsAzRN8jSrsPehMGZ1P88ycsEzamJeVAuFA7FZFWYQ",
  "key10": "5LvYxyw42X7QYGqtpfh6dw6TaKU61fhGg9SDNSHzcEwxoXJeErwRie1wpGCn4yNL83bSDFuSiFK6b526jD8FvZsu",
  "key11": "36szrvP5iVSmG3s6b5oeSca6rmR9p8kMrWoNxYwu7BKWGSKMU89r46fiQBU7qhdFCQtEoLw37Ac5tAvkn4H5YrDy",
  "key12": "3UPtUG95BqG3fP6qDmh54AujDWHrbG5Q9LCsr4w6v7gvFDAgpxUwDtPwzTQB8EwooXryj4red2AQqMugkJKj7MDq",
  "key13": "342VwCxKRGHBPEAv4Aj44WEjbXT7hnKk8kqPb32k7NQELnQhdjxg3aEtHeKXVTVBdbcLFLWMYduHiQr6m1zMSaAz",
  "key14": "3gbYx2xRhBD4EvkTfZUXVauQQEfqw31peBgS8AqsPK5Avtnp5RNmyHtW99eLXw2DQcRHQNjawSGz6YBBmKd3QsA8",
  "key15": "3nqGMnRNvNa5WzXSRRfy2C56Gd5dx5sh7RkQtLNgvwgeyqtMnQ8WYGJAPpbUT4NwLNmUMCAj4qxMEZH3Sbz3wTeK",
  "key16": "2Re8NBjWVz2rtkRhXkF1NfHJnkziM8q541938bAvQXfayxoW985o22c45zSPRfo1DHSkmmb7EHwj3QdYHJyd2TBW",
  "key17": "2WANC4EPWjrshZ2A3zLqzmokScTHFS7BfpRanMumsR7XzTcoovuxsuf5jNn1udP9RSCYcRPCGAbGQyKqUw1pi4oG",
  "key18": "271A79YDPm7q6n412HJPTXjhGt8RFzi8sX1LAL8xVbvyep2WsFrGr4i5r4SBejqeNLykZe3FxW3723mYVCAnTLFL",
  "key19": "4XN6uAhUu9DJPw7rPmzgDBj6jKRvhmtPwbfkKEkXuMLDmxWrQehcXCwJmFwRMZzoYbjCfMiy8mLRfy9T9Q5L19ej",
  "key20": "3jzTphkB1aNfPzrzznPvv7GDB6ZRv6Wj9xMqrz9Ty2jGpfUKvjnHE3cZZvAxJqA198haXha7TjkZWJ4A6YEmZMQc",
  "key21": "5zgLwnubRZ7cNWwYFVyvt28rF11mhqMg4qWpq6Dtn2vJF9mr3mYaBvHJU1ZU46JCw4NWYFBD812NBFXcvXeZtFo",
  "key22": "5WW9FyMP8hpzjMY4CCDXMt4n6rtpdeBocXMGgSELJ7bANRcYm3FyevNUBdoN5yvmarucjCf8sU8WZEPmJnGh2bx9",
  "key23": "3AqG2Wc2X5UTDgDbUNt3YL2p3sApnDyQVHPi3WXRQF36RLM6mCDpkYMpWGScHQ8K2oiyWJZqgRdFLJbGnmyeUffZ",
  "key24": "4mshiWyS6MRmgq8MYY2sNyxY72DdrDNbaW7fykqLcLbZXuQQY9fpCUrQVqEH4m91xZFwv3GoienDhvisWDq1bBgc",
  "key25": "23pny8FUGooBw9GPBBGRBBHNNyTPruX9HFRig99UnToPFH7aevMiC6VdHmhSobN1xhkKf9zV1sgAjJH4kUXEYs5n",
  "key26": "2iWjZdRLHpdjkyVV5zDuCpwCCJkZhBrvq1mxamDoqdv5q3VaNsyAHyHcfMB2HpsDkut3bBDk76q22QeJyufjgEBU",
  "key27": "3UKDqMkBnqzmyFrV15EvY25YEKxjEa1WJwnjRd8GzESVfXwoiyrjmzMndNX6tUapNspAHnLzG4TdEN4NgjScECrL",
  "key28": "2PmXBeQoCkPfcdQYBvNqjBaJC1AhDvNkY6uUax6a3s78ghnfPdqWorzoCxh1MPRX2fvYheqhMySZPKCFEbx2xuTB",
  "key29": "2wkK7rSpthxFGv2MRQw9Qwdpmv2cQ1YdsPqv1QoEJFRizTcTPA6C6i1nrnwXNnAgwUm499pk8XBPQxDAFxv7Qgj7",
  "key30": "5pCTfSKGxWmCVqd6BgUJWvLoUtzGKASm41cq85vqoMgtS3cWnwMUd4q7JHL7s7MzkB7dgoT3WPLBNgpc73aWCo9C",
  "key31": "2bNqLG5sSdLib6ATMksHm3RP2VbMWESZhusq6jyJWYLV2T64ycEiiihQuvgxsSsrGuT2piYUfVtUqq6iaaSueH12",
  "key32": "3T5HxUSmvPDCjEnScc8pSiRsVTjfMcJxrqA1u7DwoyHDTztXTr7jAjXjhVFbwrdVvBRfEC5Gan6wKi3qq3TxHABy",
  "key33": "4wziX7vkVECu92HJuJDgL4rZYjgT6WpNw8JFKu2uKk6BpVqSNyhqxUikEPG6nvJuVXZNGL97gihidHuFnZuGM4KS",
  "key34": "5CzLnmrhHLDW9E3XPVfs7sY4y6NPwuRUCerJCCjDFi6dNGmCywi4Fb22xxgRmasqKJqR879Vs4honGMcBVJuFjdo",
  "key35": "3gSawj2PufYKZsv53n3YdZBnDiwxQgoxdBcJ7g8KH55KkbBW7nVZnU1gZc97RDsdt82ivobmccT9GbmGPdpxeMYn",
  "key36": "3Y3gg5axf5SkF6jJNG6ecdxMeAdxiVivgNLfRGJN5YbdgJrdxVdhKeNUdB42N7zRQKGqNPVgbRn9LLibc6MWsWVq",
  "key37": "3KgkcKWYEiX3Zb6iAikzM9bobksdvoh7jsCHnV4XM4qrSWUcYYvvSYWqf1Cxa3Z5YphdF2ZfqqkEGmVXQJs3yCue",
  "key38": "2onZNrmumYtAjkr17pJfqRr5zNxKxTijpv7UFVhzFSa9hrEL8zdXmyM9Ct3yqSwRJaKz7gNyQ7rcfBFjns1tZDq3",
  "key39": "3ahQ4aGDta56soh1CeozD4veFpKbtc6eDfNgXKaAnF71bQNBHnmGSK6WAPKYiRgXW33nabmPgcNtpPt6YQFnJfXf",
  "key40": "4DjacCTnHykogWLP9vZ1MXCeeHJ2b49xLzwja1sSLXbAfh5WyoJFRLHDyeNF1gTNx2KdpFWC5Ayd8TENED3ZyMGp",
  "key41": "jCqBbV9fpNNRvgagKewLwnDcivtwspqqg5u1dAtGk296UkszY4xMgexZpB1qkcAxnLMLXRnw3Hc6sUGi7HE6q6T",
  "key42": "TS4VVZiUJpc2FxzJXFqC4SBJ4uSeg8Y6e6bTdyH5L8JvR4XFMS71ePbvZZ7qZfaNnsguZchqZ58nTrDSd3sBbsU",
  "key43": "5cB61RH7ie1YeywMXAUxNNNgHirVPq2iev8tacHbAckfe5hJA3ay9kWuaFMxm77LvodiwKcSuMF48VVWphFERPZ2",
  "key44": "51MnpbFF5LfHrsxxrdikC2sr6SntEBHdVBVKSpqD4P9f73S5gy7mt4iKEMFJsvK66aifUEJJTep3mKLQrFjjK2CR"
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
