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
    "45LinoqkUEppso1bJgg6QonNmcuFbC38mgbG3p9wfapFoSV5iMtdkyhAreGpESWrbjAazStKELFzH5FRwYDVZZLS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KSYqcuxDnX1dxY2bdAVsYKv8bCWRu9Cs4BScM1vePdTtAKFfAUDsz4uBeTuM5HAMmobbP8HnwBwJ6w4sLi3E2oR",
  "key1": "25KWjvKSdvWB6zAhCibfdxGqa5dUqcruvL8mkvrdErshFjp7XLA9dN7uXhNdJAFoiC4Ryb9PdMwDDYj1kRdh7FB7",
  "key2": "nZvuZZU5wa7YmmSg314SFGVKJJkDZJFTbjsmsBpqXmtwe9HcWfpc2FKti7EjaCQZGsfAEXZYuH4a2mkqcFQ9mLj",
  "key3": "2ZDbt8eNrauuQ5cnf1LbRp4oszmnCAzV9bgcCdbrVpxJXztR8y7wFyxHCq7u2wBo1GM2NcQxE7UD6LAMLLE9ec9p",
  "key4": "4wLp1PJVwpJogMKzKq2KcF5FxAeHmtncjqUbJvzJgAmwa6UKcYAsLirwRtmZ1tKVzEftqJtusCAnmWK7v5mzBK3B",
  "key5": "2mDx5qQC9722iHaTx6G9me1cJNFYHSRueJwfvDwiEtbTYB6fRcq6nm87NJaQywVbJjcFr81tHh3t1ZztmJxKevFs",
  "key6": "5piRLdifYr1bsbP7eqRnf4CLYF8N19T83fRu7RM3Bj5Z3juD55in2HHcrY2A1ipbEyLA8zrHzbmTi2uEBF7b7pCi",
  "key7": "23UDL1W3tS99Xyst8MgqqeWaHCt2SdT6cJxqapwT5bDMpEz4xFdssRQB5i4bgLiK9ScTe26mwnfGt5B4Cimxgxgn",
  "key8": "4w2PovGwjoQ6DYcYGfKTRpEzvHF9kLZwYbedrMugs1HSzW2sbfQcddNxUJkw4pR648D63ux5CWHgatWmbRZHaa8y",
  "key9": "3AdWj5kXK8CNo1vU23nKKC6dNUDHChGWLiMmdXjpJf2tyySTbGv7tzLcGnC7cvqBhiXfcfZuqLMDZrDxvDoFnDzT",
  "key10": "42y7HJyrYQd3o9SUu9X8fBDsF24KM1mbck1mjSwqxHPeFMRk18oYmh8HKrxeoD66aru1453QMuHiQaSFGqq41Fhk",
  "key11": "4dBZNmifHt8DVRCdfxh1RCv4YX8QaUzpKYc4BR4RRVZdEewPD7EkwWNS8poGYVrLy6b84ma4JvWmKChY5vieU2x",
  "key12": "49njftnr6CU1LEjCVpoJCropvFgUkGRqRX2ecVx1Ew2Qx6pZ3qs4yEufYGfFyhw2jG9ypjbYy2WCRBcJ7FAhuUqa",
  "key13": "5Ct7vZKjj7uxwMefNQWNdH2ovE2psipwGeUNc3uzsdeBddcJM7nKpoGB1y3LzCTxmyZQrzboyuNXxiZn9T9qUn2d",
  "key14": "3dH48uFDXNSB4ZsCexbDTzp4txhyraaEoAtHzunRstAPeicttvtJFPJKWuKTRzNMf2iihU4QHPUMiPTv8JAYrsCA",
  "key15": "3Cy2T5X6YZggKZkHHvUafdVNq6XiA6kEMKEiP2uvYpc68pSXtFUe5gCMjMFkw5SfPVw4wBgnAEqZ2UMMhgCpPB4W",
  "key16": "4iuqpFixJPzaPKJk5yHmW4BH9N4YmhbG5WYhjVsXJzj1ziMoQugxhffEh1jvCKgkxxjgBkmMR7ytfYcG2b4D8CbE",
  "key17": "35JvYoN7b7CfZXkWKiErotE4gWFEqRSqnRB7jDEmP8whZFrv5dBFtPUzhsRHZZMfDMWJ8AB6vGjvw3ESBcD6EEXb",
  "key18": "eKEYKULBDbgeg83sSardNVZpE68PCDssjLLyWuhVF4s1q4haUi729SXvbp83ESNiTuCa9LREiiz4reCdgvsL9EE",
  "key19": "3HmXYze1WjAevLQa5FXXYf5udpoDGxYJBBdYEMnnSfbrAeFZBPeev4ZeUGKjuvVxgGHvMoTuC6tcBPZj3aRPQ777",
  "key20": "2gVLodh2mi8qsUSfcT1kmvNti55uFg8oBn8aBjTrSo8eWpbepWsiUnZG2Pi6KKbFEuPLRgF3GaUUPNvv9oc5QxQa",
  "key21": "3s1ZTrbj6HJqkRqXExQGLVvjuvmasgnXmdizdkwQPmoLSPRa2gRViu123LcmFaTANGs5o9ZFRse8UWjQRmGB58uF",
  "key22": "4Uy2hGi2vXsceyTo4KQxZyZLDZXJs98sQ6U6ipikmnVsxy8WWv2MpFEHS2PpyJ6gwjWBiER5JrTXr2y6LUwbvLaw",
  "key23": "4DGqtuPYLijTbU6oBeJmz4PyC7Gk7wLvG59HxUYCPv8LbCHxeX3LLtRsuf3dFaE3ADcpEqF2BhiJQTjaVijhr9b5",
  "key24": "36rf6fV9YRHepEtF2KtERZhL74fCFSJy7rRHE8D6AUevPk7gDMT8bGoYDhBaAZ3ppmeHgNhtk1utxvSNK5bVAzZK",
  "key25": "61cdz8XAY1iasgL4MVKyfhMSmvRVMvAJfFSem6TW9nVv32owUSek6EakTGqKXYpQdqiEbWv3fwC14rR7RpqwtmTZ",
  "key26": "2Ypn76U1EkKUUsdko3ot4iy7T87Zm3c2gwvCXvRtwY3ZJttxcQ6tdLD3qPzGJ3dZKe2WdjGLYTmGfqQUJ7bZeYLJ",
  "key27": "3T4Ja2piZCZUabVUtMUekJVnLusz5kxZth1fwJSx5UBVHnUjx85JZi3VF8ruAjC9zcr5vCT5NNF4TsiCLaEXSnqc",
  "key28": "49yZFBL9J6Qz4hYTfCiMy1vKwnrsPqnLmTrqAqYvSYieS4A1Ey7Gv7fJtWmmHSyw47AnrWZrZ2RdL5gKNsNGueks",
  "key29": "5SstbF3oWGTpSHrHWNr6S5GR78kVqLtENcC4qs9DPWDuK13in2xgYtTfZuFgvNyhfkFJe5pvbjVcWmDeoLWb9std",
  "key30": "3wgdwbmu6LC8AYUDABmTfZPQJNgD2bSESQBgGsv6XZ1FbovTauXbioxqcuVVLaZANSD2oarL46CJVSrMhJAVqUT5",
  "key31": "47C1Mky2U35zSezEZCrBZ4KXddMMR88ATi4NcDjZQBWkvoZudfnP6CU8FvCK22tGaM11HTAnEk7QMTJ5EkjguUuq",
  "key32": "T5jJDjM4PzNbZsXBWcbXNDDdqN4BwLfYDouZt9X7thrAGKfGtGhGiQi8YkWDex5r95nab8UTKY8sgEfajmPw81n",
  "key33": "2JmUo34AxuN4yPTTCxMQcUXA9AgC1LcCH84fBVf8FmzZ287ZNtyF3AukfNaUDB4XSasQWiN45vTXiavGz1QjGTFc",
  "key34": "4a5VYDRbPfFdNMB9ifZYTGpC83s18Weun1jVUJZziA2aLfyZdLBnxUDTj1rfTpJh12nY6Dkr4w77ZMV5YX6fLz9V",
  "key35": "4svYP8zJ87kpHRNvV9uP5FSZtYKrB7U4vS1y3nQ5X1sSyR25Tbc1qDAm3RnWvg1sbkxnsjLvLEhxD8zSQbbB72dP",
  "key36": "72DKgh91ogYAEX92ZucxYHRbWGKdUqZwkDb2p8NpDG8jQdVwmv5Mf5bVXinUAsW4LEbCs9qc9fjHbW9bpanBtQE"
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
