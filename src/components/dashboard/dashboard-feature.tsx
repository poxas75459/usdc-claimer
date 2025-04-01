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
    "63zZfZgih7VN2jm43aknYtmjfxwvwfSfL987G659NjPR1B1VcSdt9sbf8N9K4zoEK28V8VEcwNtKWnytW74EFVLt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hvs3wAQwoRt3pAEEZ59KjXd31pCKk9JaVurumdC6Vs8WS4WKFjmaf6uv498i4bqixqFgVwqznDwzwkm8fK7QwSg",
  "key1": "3EhRaBsbT3HeKtCshifTASWdtLX4RU3xx9kQ8YBLddDTtwd8XuZYkhCSAopF5uvp3STpkRJnZr5QrzxJ6rmYudPp",
  "key2": "4Y6ELBk4BdtVrnXRLFzxxxUSrhKhAYa59njWfNSZozTb7vyPDSqnQFYnE8r1AXvnnQMaFQmcVD12WQRXRgUqMgub",
  "key3": "4itxK8n7rLYLzDeP2p1BjeErNabYpnwhzjJ5mNbZtAGCWjWrYifsmo76NFUP3B95TbApHd9jexJEAdpAgD9bB9kv",
  "key4": "Fd2MQvm8HZoAzhxzWJrEVJb1UGGZUygrnZ2NhMFbmcD3nczdm3U8WA2JApfMDcYBoFYictPnoG97wKaoC6CoxJP",
  "key5": "2qtkuTCRgx5vBneXdmQJoT9xLDnQ1tHmoRS5dVyi8JtgyPpzEkKVGcFse7Ydx9v3R8gwWcCUh6UspdL49TZztEuP",
  "key6": "25VQuapyhLYsLLjg8pEamjyMNKxnLVGPkg1BSs5b3PhBYiXbTBuESTdLYWJYyebz4hUrP9LpJyypq9QZBWb6i1iu",
  "key7": "5tsYGXyQUgGmj44tjPBE9SHzR5xwzkysPCmstgDe4TdLScCkHnUWsEygxT6JpwZQW2ButLvbeJr1bnr5geMyYBAV",
  "key8": "4EjhrDRhLxbCivKPQNfy296dFPbmnUJoAfFi8ZBRBtpHix1mWyVZ7FmEYi47DNFfyvc1YKeaY3wi8VHcSUb8GFya",
  "key9": "evxXXrgAmzosN7vamLzZzeKkyiJCKWHVfoUkCU3owKb3wL39r5rBCqpPDsx8JqWoHSiHWBoApB7c7DubQ414NUH",
  "key10": "3QV14N9pEzj2kxZ3bKeb4dqpXEKp95inuzY2YGYcBks2tnfYU5US8jBdnwffLPjMMysxFagBzykCx9rkSPzngknL",
  "key11": "2tJ9iFV9Cm6K5J3RAg8LkmGVgA6KgYBiXHy5NB2JdJpZziQ5dLRK1n12ECrz8cPHYESaKgnEhrXr8c2MNiD68YJK",
  "key12": "5wH4bJLZTNZfLmK1W2mWrnLzN1hp5qkcKtKdTzPYxbv1xZqp3MgF9DS5of8KehrXoTTx9hU3rMGj9ixcDN4LVCJv",
  "key13": "4BC8G5Tno1gY7qgGaxeVsXGdAPm3XoTPPdz5a6hym8QPLVsraYdSubHLj2rZxr6Lj9bLbVtiKjLsigCLFdKSeBzL",
  "key14": "5xF3r8KuJKyJ6P4idbLGSRKD115mjqNMwHRfZPeMCj56ew7TcJDfQn5Ewh9NDTbEdwM9JpQyRW3v9NjLFSjVWcGW",
  "key15": "anX8YeSuRC6AS7KcE1XJvP91owiujQbW5rhbtxschXzLPugurpJUzs1W3fg5aWGWvnDKNnw9f4woiJabCHheTDa",
  "key16": "3bLKk1sp5oetWPCkfcn6V9MUSTaDNzWws13tdQRdJ2uqQVNNYMxmMMnFfsQyfYh2J91khUNUsGvskGdtCseMxxUn",
  "key17": "3gRqnb8ZY5K8jd2TwCg9Pq4aJ2r6NLPNizMqvELDAxeGpoQnZjxvazomW18XAfgHSSg4FqiE7WmNSumn9S1YnfhH",
  "key18": "3tfHZjr77k3NWfxvCXcMGyhh59i7Xkf8ksA7hYknoXNWfetjZnTKm5LZRA4YUghjKmyu8vWumvauEsE9i9JeACAt",
  "key19": "FnEPxM2EgXyzxkKxt2PnEoXXyjQYTTVKhsxEkfgwpxiu4LoaZbmSJfhFFBLxVNQekVVVTdbFVEt4oAGUuKXrWbc",
  "key20": "33itZFpGzFPAcFxiV8f4fgTbAc9jd8V2N4RT8BcB17WYi8kka4Q46DHt5eLmGTAUtGAdueNG6nQYTnfWm2qMox26",
  "key21": "4JrGMwKKpE3hhqMAE2fc1dM9KfRddsV6FF3QRADN6eQKRvbAr3fYG9tvRtPuNtscADJU3qhbTuaoXneeuDb89fGt",
  "key22": "4nrzqtWfYtmXhsEAogNmXM6niJnJhRwrtwvsfj2Qx3yoDTbj51t2JHPzoea8eE4cLpVxbCvaNgbx5sRL7fZZHaPc",
  "key23": "5ADrfuGeUNGKQjWdDy4tBaztcGNXNiCyRRBWgXw51a57U8aVA3gWAfkJyjWFi42jycwKzUqEohUsBjRSThxYYpYX",
  "key24": "2693NAAvjC6dsPbQCY2dNgYiAVX8WrzZUFPnjjH7HEDBzjFJmjQz1PGa2mJLsP419DgT27eZCg7cimQwXhLmXwDX",
  "key25": "T6k7ogyH8mqEfafuUqAg7qsB6bMsZ4U2VnDoMiK7tpp2PgB6tj29ejm95eB1N4eKFPyjeopHvdzTiDq4pBTkfQS",
  "key26": "2tJE3HtgrRNXErWumhESbJVsz4LRa5V8ArXHoowauMJ7tJCphoS1dV5q4h3ntrmyo7GFBGg1bzyj7yVixrazSsib",
  "key27": "4PDiCo2nRnaDiKdWmKAdFqjenzNSPFoQo8gJAvdSzV1zyCqjznZsiD3dp4Ko6Pk9L4fGpMhuLrPvoHaxzxakH5or",
  "key28": "3GgPjdQ3YK9cY84CmVHSk9unhwRRQH1wf1uuY2LjZRdjHmmNMs1sUJRSgV954eqt48aV3Z9vausdMLGx6ZhD4v5c",
  "key29": "iiaUbx3Vt94zdoU4GvWjSBwFAmBx8LFpZDLgmo7gc5ZmGVJsiSHMMh3t4MxVVcd7vzXo6uHQazsSDh2DXUE3S71",
  "key30": "2EcwYzoBQ41yfLyoSmpG3s4CfvYSZGTRFB6Jg6uvBsw9rHmUbVsjemPnyd6jMoKNPQ4xgHjvCePE5CUojeDoWAfc",
  "key31": "5mzWnWcQqspsBFBai9B5MxX1MYqH7xvv79EsHBZE6DCwF1gR1X7ENSUPnKYC7zW6MDdVejaCmrf3wsdRuXUW8cAm",
  "key32": "vWV97qRRoHwqPkdxsqAvPkmHv8JjUp8mWydiWgS8nM9HBv6EvLvXDruksDnCkJd6BDAmhjS8GBz4nKt7JZPYmmo",
  "key33": "7D17pKoD3gNHKLXa7S1Acirf68ng8pY7Mp2iuQiA2CLKyCrUcyWtGWpzmW1vcT1VoLWDgrSb4ewxRAVWVfrVvMp",
  "key34": "6nzNPeHGyPvEvVSVZiaxa5b2mdX51Ddg4XRG43xTCdSXmYSGSrqaTLpV6obnQ1Vo66gBdngDaCR9zUPEusVh8WB",
  "key35": "5KTRSTSvx3BRxJM5RonXFZ8dN2Jt9gHTUgmEExoaEpXfpL1vc7K3EgdmPdnEeygprAnhRrtPLDbJPFshToaNk254",
  "key36": "64dNdkDK7x6gWfELVBJYVBU4V7KaHWs8jDcGx9oNsELC7KN1WK9KovpUcf3pvDe7gXqkhHfSyNHASFCRe8eoD3JL",
  "key37": "551SfeGTwQn1RCP9xp8eNKYLk2MGH4HXbrjJbcrEEa1ERbErB2danzgZt9QBFUnf1qPyeRRtDFTvWi9CiPb6XTMo",
  "key38": "4i1axbpJ87K4q1ob7QvzG5FuSJyJk1FGRrPSodG436FRBsg3HBHPG8dFWer1hSBWGYFEJsPR2nkYh2A6H356NVns",
  "key39": "53odPsiXg4MH8qkwSUH1ETcVTbxqPKX16seu7gX8qW2P5jmQJncqy51tyLaGybVnunCn23dwbJgQ6GSitCCVDYoA",
  "key40": "4qSgC6a1QGAsaPS5MRtZxdzGFHW9yVgYePMCo3gkUAFbZovG4tmx12KugCmruY6kXAqeH9gb11VKY5QeGsMW45Nc",
  "key41": "4VXrit898u8gSgVsQtYKQGdH9hEMh8HAVifwyVapGMyFag3T95RfAmu9H6tzZ3ZrvKH41oPxsK1YMorGHrsUDe6j",
  "key42": "5zxgKRAcofLSENQnJjMs2MuMu6PHLqAFvfHBok532XhRH7hGG3TojHk4QjPjRhbK8GSdNTymq3pWc3XSEnKd4SQZ",
  "key43": "4g9WeqQoLRPCSqxGh3nSwgSrDc1JvAyRU8dnE2sDuN18Y81eHookawmSmYcbuJrbAoftWYFw89r8L2F2QSHZhXV8",
  "key44": "o6jkaMe11jcjP1tRkzLn6ypyLtvHdtigjPCKnAMJhEWh4b42iPNpHWaU396ppzdAqjUtcCaLTGkPKGSdcDCBExr",
  "key45": "5xYfsmduHySHhuTKqgpKgvMUtTgFYvoBypW5C3P5Rib5rcTA6i6j49XBQ6ucMqXTEtMXSg7xFnjrfszwY18GctpT",
  "key46": "3PYeWfF35beURqVy8MAejaZzYXVEp5fEKCWN6GWPa3erwcNuzbf2XwGFGZtka7VD17N7EbN3KF9YFx4pC16hi7TQ",
  "key47": "2GQsW4pESKZJDdyra4iPHdYZYeQPFGAb87w4azfJ5bq9q8KxrteY874tKJARd7uediDJEwPVMZEV4bgeqXt4ojdT",
  "key48": "5nd1Mg3tZHRaiTVBEH3XwWPjLQtF9wrDyeuZhSoKh2uSjNQ4wbjALeZEaNSYTmiaCR44pb54BdkroHjnBULUWQtS",
  "key49": "Eq9fedvyq9wLBXt26ipG44qt9YB59bj2JRvAySoEigQHd1DujL7Q1WVMGy2opfQAgmqhqP4oryY32SMtyTQre8b"
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
