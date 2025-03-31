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
    "5EPP8C8w6oXvzMZ6zZHxKot3MDhiamGE9ucpo6NMKJnjUJAY44PSmi6ZEYCfd4oFz6PiaeaSSFqjjDEj3FBSkEks"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3k4hwsFuKK2AbFb4PdZDd5F4uUhp6toaSrNsryWv53iqAebY2ESUc5BtgRovNT4aXEWYsGHGoQapxn6W8sG82pVp",
  "key1": "5S7gDNXV1yjSHoFh91QD9nbJNsNAD31NwqjsvwkBzpU98PebU9ZTvSEoFDJXAxVU77RQ4nbteqhKvFfzt2YUB4QL",
  "key2": "23CcQcPEN4j2nKHKBpsHKowszpqT74tAsaxSY6Sqc3862GoZYiD4vxEMnqbmLJbBqefn9XvtgWS424zNskd76bfk",
  "key3": "5XWoAZyfSEdX5cW22q2gzu3FDBe69rMKxh1rkuKHScGHyg94TCryqcW6VwmrzoYXCfDGqKRUw1pHJt8dtjApN6Sv",
  "key4": "3YMyT16UfweJkiGh6tp7qu7wRBahHDWnDubNoqtfHR3YncWU9n3mkaTjCdoRM2viggMKRF2mmMVoFnQpxG7V534i",
  "key5": "5i1amAJbVotWoqB8rzuRPWatRqHwMpp5iaZn4WxsYXUYLE3zq1jsBqRFiM4WFZcPJLvcj4yULMkx7ZmM2ZbcThf2",
  "key6": "22WEiNvrCxWbaXpGxCi6jT17AcTSuRb9C8LJzong1NoPJckZLMcyPE22DKCJUaEKrENXgWq9fjgWss4E7ydH3hXj",
  "key7": "4W38CsQStHtdDnN6wCjSaU1Gstyaf72iAVRzhjKFUh2uWDoWGYPu941XVE8ET8xiqAsfd58N98hLqfM586RPTh8j",
  "key8": "45cAfNP9Qj3JXvKR4HYvfmv1QzjrWyVffBt4RVVkTDbM9v1puhU7bQns66PQJCorTyr6Bkg4xjbTFABGpJYytHaP",
  "key9": "2kHUKDCur7nyBC1PvmiSGw2v4Dwtyr8zsRkUPux8wPRevg575ZSNWAt1ZBzerxHBvZVQ2SDtjZ6dT4ZeqZosZcNy",
  "key10": "24w5qaDu66wYNNJiCVEc6uuey16iv4fmADUDCG8XhveWfuPrdCEGGJj93MwfEQ4Y745B9g5juAiUjsx1pKgMkBSb",
  "key11": "2JgEBf5bf5UrL8QVRABC8mLHQJquBDpCLWeD2Eis6G1GBX78DBEALMQ5hitk9ca6aGLa3fR6u3XmmJMLRtHqCme9",
  "key12": "4xYt3BGfoTWTTraiCcSqvJVpF7XrGHnVvpNBRiEw96gw3tvmbonHanNrLrxD1yUn257ibqspK6mQXoFKFT5DouQk",
  "key13": "dtBmff8FTdebar1sLh2CwdroizcCLCfUcH2McwL8fqByTiKMB3mZXQ2amMzfRoZhNSo2ndvkzZAu5gkm6XaGHiN",
  "key14": "58ADZyy5qBxAxkgoubbAVRNBFHAvxoSbFHvennWhv3TsPGfNabmr17gPXPMwFjiVMMp9xgXQ54hT1xxj5cLphYD",
  "key15": "447ukFuTnRpU7D6xERDBhRaLzqXPDyzWN67tT2EzoYHr6JXTCbUjHCaCEk1SyTrweGqFt2Sv6k1NL4NkWrh5zLJz",
  "key16": "3iXuTFhMXb3Z8jRLE9Bh34iBuiVZKsk9FUycWrkq9EXjvgbzTXMiyiZmwi8wDbpCoKtDQV2Cux5vnAgA64VtyRnr",
  "key17": "mKTpnQizaUhTVZ1yNFXU3R3ocVfEaj2toLLcsp6VZivxSQ7tiqEa6yCPNXeUgQNe4GhgEoREeGvEucZXpsXyq1S",
  "key18": "4Khr31armqeLyWxE5wjtwqLAFS9mwDsQv8HyiDty57U9yAe7hiz2xGi24dyPqCLkePg1W1yRgYVqeWtsDMcqH5Pw",
  "key19": "4zUrjb7i6tKSHGwDgdYerwDApFSKAMVcWscsPX3UnDrVRNQnuyVUv17CpjLbYTTtRhSemZBVweF3iBRw5rgMsGwd",
  "key20": "35wYJJGHurcqyk4TYXqKooTZTtNR5opkmPSgpRPt6NiobU8u8mb2gcoDruZkNoc6QwBiUaBL2Fg4YmCfuZKSAHUF",
  "key21": "4YMQCZp6LYHVtniURm88xGJZ1ZspbgXALihscNcNmwM2tp6a9zqbH215EiBLZdpZjgZ7h2NnaoeiAfiHqnvwhhu9",
  "key22": "PtLiJfjEaQZCYnbuvUVsaDk4qyz9PSj6gzNW4aN7u3gQuzzK7nVrwR2ovnuupb1dC5mWtjRKpTnVNKVgHDtSrJE",
  "key23": "4cBvkVMgcTKKV39RNF7tmdQQ7efYWnuwy81k1R5MTcETqM8MfZd1BvGXfKqdBXrmkFUrxEakYmn3L2bTWiWFc8Xb",
  "key24": "3p3ohmxi2AwhDvevJZY4xJFkwqp585SBFR5ibxCVkUhzrBaSi94jAeHmTq6rztWiscvLKLX9xxCQDCJPD5wR2Qks",
  "key25": "5g87ufhhHPm6cSJasVQPWWkrg3mBaKvARhpE19XqZoYygfokHcN2JRwUL98SdEBHL72Qfc1gifD6FhB5xubWYCkK",
  "key26": "4yMSfEGDjw9Fvqoz6AgktWmtJ3LcFP8b6zwacT2z7EtdhcXtTXck4886W4syUPQZ7NKpguwm1xa9ooaabZev7gne",
  "key27": "kLmDtYntgoZdtA5gCYTTZGPAa2wiFsTvZKhGUpCkfnbqJxG6dVFBNaypM25ixkhCqM8H3f8S2y8P9j381nL38Fq",
  "key28": "332uN8wF5vBucL7UvkiuaerG51pFw53TPQg949AESiASyWKzpPAukgk3HobUrAKgaaeKviy5xkaU5dXu2qbn8AEV",
  "key29": "R6BaNEADqqxQBZvE4PUfKxcZyB4d45TZwTaqdFaUrDTMMyKAd3XaDYY2Fo6n6xj2ivqL5aauHzVRGiGDjo5hDcJ",
  "key30": "5e22e4HSfrFVbYFmRubBVtTsHAjZj2RuEYWhoRKcKTuaxyBZ7SWa9ArLAseL5ztdiCCmw6GjZ7GS1wVcvpiw1hWs",
  "key31": "3sYv4mgZ1Vv6VRngWG12nQHActJ4X1XnMAPhd6NRLoGS5UXKL661UACeV2exk7UMwtGBEwMDiMUNaYoLZXpEWCE1",
  "key32": "31AShp4MLXuWd7dLpmV5pac1EBx49zbRQwJpH6GoXvY487DGS5yGw7v3cDeqEYtp3Ar4nHsrrSHgD5uQKTVMJeSk",
  "key33": "4er8Zyq7eLtvtrRiMC8PFEWnjDBDsQv8mQoQACX1pHWewjtKaND4k38uUD3omzjH5F2NKCxq4TAAAa83WxK9ceeL",
  "key34": "2cxdPkvVHXBVauP46AxhxUu83u53w2uViy6YAx87bgnRQMwNuyfnCvxr533wXNudhcseGAajE5CE7xFQETeGb2kB",
  "key35": "5bWxnC2CN3YTKCuPBzXrp8PNciqU711uYJ5sJKGq1ZNnmaEenTdL2cgr5aXcgcm8jFoDh9RQPoxfirDBPfqsJfNy",
  "key36": "36CKhDa6StbeCKTAtpiiRfUHgnPT8qGRNjXiPmNCcPQ6nQNotCVwqChwNseJ1XUA3iHiUBvdFtjGp3uKoiRDsV5L"
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
