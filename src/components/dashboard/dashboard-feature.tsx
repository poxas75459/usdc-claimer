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
    "52mRddL2aDpqeLE8AmwCM6qBEHFTV53pQyXjTtwcjYx9LTu3RRrxSjJpnioRTu1SW6EGBygVBxT9cN4f6q3CQhXq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VDta9pS1LeKVeDRfi1JvYppZQqonKpq1sSnesyUG5EWwFBcEUMitQ8oynsNRxqDcTs8ZW8TJYkFjUEg2ZD8j96U",
  "key1": "4xymWGKgvBLPQUiCxRoC1o4xVFVXzUPJvmihMFNcfjs9HUY2UDux1gStdZ9bP6n6FpiR2KScs6e4BvwAx8k9sCE8",
  "key2": "2YMTSBoAssPSPpLzt1Nbgyqjs4VNtWYYVLDnHNPJTc94KTdc6bajV742gaTiKKXj2oovQzS3uNBdw5Z7zgvPUyrd",
  "key3": "41UXpK2dpawNqiiHwkDkXUtU4tBaFsTe4JyvK52iCHJpWtFZedjH2tV86cMWG8HWTyZuRDmh8Vn8hxqTAagErAjQ",
  "key4": "2SuCyFas2rkFSF4chxBmPqrdSJoVqMMF8agdifbWdd3ZVKNLoLcshRDN2MQfxaUpwdYNYuGzAJhb5rFxat3avgEB",
  "key5": "4LR3gqSqbi3KQFLLNfAyvt5tWkgEGR4sByYm12MB2vLRP3HCcKWEN4TLj2NRAVYFWfKfVzwaH81geybqNc9d34zJ",
  "key6": "4hzbG6y5kQs4tSgZpwUFZzb8jByy3gqC37Xss8M3RzHzv1uVUKnttozaFHBUpA4sJgXSDEg2WTzWkTX4uESaXyzk",
  "key7": "5No7UGienpUeBy3vKhRsBJK7v7934qfKVLyLSL9VupUPdagqQCyVuUP42NaZ31BHSErau8MjQYo4VmTM1Zh6TY4U",
  "key8": "4hgUyo4696RGnQPfzA8Wr3NCxQC65NNP3jvKxXipXkYMgLEvoJ75iWfQRsg3AXvupsbE6GkstVvy6h2DGYscLzLr",
  "key9": "5zk6uJNfA3LeQEZbAesGaXLvsKY68BpTtTCp46eT14mrMRWgaTtXCbxzwWGK8U7cjZgNCztFRX95hWB8Qx74XiGt",
  "key10": "DRAaH67BwTaKNHDuxBqKnMZeTH9LiZxWtUT7tRUp4bohHbrgCMPnYxDExS1didFYRByHSkxZ1ZaBmN5KRB5PoX5",
  "key11": "5RHi5F6fs2BPmMYGHFVRhzucW7GaPZW4ZkjNd62fNR4R64qH69vvVZcWF4Cnyq7rvbTnBHv8vySpY9yKkBanSXF1",
  "key12": "3nx5FjCSUZQxA3TvjUwty3o1hJeZ9z18xhH698Z4KFUS6tdgaiDxbMbbxoq1uyT7tob8QbFqgdWRDkBTqDtnS7Sp",
  "key13": "1hLVugz3s8SfBVGo7rG7GXgVdu7aDmkZfv3eAF8HhG3KHR5cUzNCquZiAitpMMdcfHdjDRGmnHioa82esBXugPj",
  "key14": "55NKmgBt96z6DMRap7NxS6FuEZfTkTVUp7pGytSxybk1sNTf1Hao8rsDob6aNmzENXgoqCvrbZpZ92ziGWqqb8ou",
  "key15": "39GeBPUXhpgx447d4T556T9gsTKS7stGJR2yQij2PjEDQ2UM4PbMjWtGctdTUQLjxiVYEFmUpJLhJgyUffpQWued",
  "key16": "4oBfnZjSuW16diBXaQp3Sj4AMtkY7EAaqmR9qvzd6rNx38qG2U387vXVaJLQCVzsmm81JRSJFuaW9J5ccA16koA4",
  "key17": "4HPjQFRfQW2ARBS7kWgumn389uAg9qhRfpa7sdjyiK6v8sawtvx6SQ8LAZNYDxWbpRsCZWkWwpXW7vjCZXp116FD",
  "key18": "56uprQGoiD6V83cdTLARCC9PYyvpVzLGnjDyy5ENFWdoY6BWj1b2f19cPb19nq1PiV2Dx4CDy739YAYA1NQ62xnw",
  "key19": "tcXbwZufTZbZh959a5N84J47zXnaDPGzNZ4XvB4gjcKzm1hJwHgV4EwqU2weASq3TWEjacQLhpmkUABtwTVJZAv",
  "key20": "5w8KbniqCWv2UGiCovFWVHEeyH7HabxWGzf9XRXVmNMGWwXPH29wtyF1M31K78UqFZv37sV3thoUPCccKGcw5goQ",
  "key21": "2mpvvBkCfRTTYKEL6iA3oPEwTr6Lkny6iQB2zVgSzGt1a12HqCAB4d1KRcoEo7B8sGEWiYhuYWmq1Xh2ce91cN2q",
  "key22": "2dq8f12b3tSttUHocVmyxKP4ogiJDH2m8RX5SZ6qYabTs2BRAmBTj7XsS6WGhrxZXx1H8mWCPMrMD8FUjqAey5Md",
  "key23": "SREjYDgwd3shpw8Vt7VSrp8tsapgxhaZTvfnKN7tQSArAcyZVHdtYJ7Dwk8okXQEcdN4Att1M7TxpEWz7WjwtPL",
  "key24": "4JszwQnuxaedE6EqS4kJ13GcNLrbi3XiPgHt2f27BnEv3ARsyEhcehuUVsUfVMcHEBa9XBCetaGs9KgwGDP4Qg6m",
  "key25": "5eWV1w4dXHxf4Fbb5v4u4U2VKkzT4vnEgFYH2UUxefMBujfBBVjvg6q1xEZYCVpa6YXBEX6PtcS3a9F5YQv5VQH5",
  "key26": "3rbS6NpEAsDn3oYEMcoSNnG9qJkPvrF92hbBUEzvpUwBTHxC6bXiCNDqYtwGfxBevNLopRNMtm7tYwnzu1rwJ9e1",
  "key27": "5Xw39hjae6iuiUkPXAD1CUPuX2sA6mMwgvP5AzpQqYUB75cEc6nuZfNpVsmTdMcQRVDz6Ap9DFZsZK6inhCUhnoX",
  "key28": "4BtzQtn1YkqkZWNDgK9hchEUzie1TdJ2tm1bt9mXLNxjV16GDK59EwAke9LoMnU2z45HaggDjDvmUwnH9Ao8nxb6",
  "key29": "2Ey44gzku6e44gN6RUbGYbRNYrUoUrAdw65dWMmVM3rGvyrFiR5ksAKNcUkNDuyAuNMfLLtqLwnQG2LPbmErzGWG",
  "key30": "2Up4WsTupc4zeYr26ViLFX7b7yb52HVXD187rtiwd3dkiahyYp6qtuGCDcSGmTE8XazKD6nw1Sd7u6N3Kbpo31PY",
  "key31": "5cX6vZM5L1UNLyEHTbgmqbjknxe18MCMWQYf69G74VrShRS9KW5o2TPmLrL6NmSNaTEtU2PF9jQo8CrAqwFVikLr",
  "key32": "2348KZaihLabEMYpUPqZx2vir5pE3ChjBwqritZW1RNsMKnrWwHXkG1Bhjs2dEteHJ2wuVnZPdbkF5gWJqaGTrSB",
  "key33": "44teTPEMJn5YZsbZxCjgVS9Dpy7R9Fz2YKfscW2CW1QEgj9SJG653bWTgceGRNsm4YnzR7spY3nvtoQoYXDLZT4z",
  "key34": "518XgkahuPyGdhgm5hVaw3bsUTY428oroPHgnZN3QemwBSBpdwBQCTAX39FMvNGZKqvVP3yjrWJb3o6j2TSUjRhu",
  "key35": "3ShfcQp6TUZtYD93KmVNam5apoXAkTP9SYb1wNggomWCjP18Y4y7FMhh1GhjPJFt5Ayvp6e2dwRLPYuWQbJca1bz",
  "key36": "arzGbzW2rhxNbNdoUt13KcspQyECinHLBiAuXNGdP8sx7t1Dpeye3nnCEvkSK3XLV84wP9hLg12BjEdsdvUTmMa",
  "key37": "2X2gTnwXrrusvYUtJuPhGLUisXWHdCojewJVdx5rGbehWqgxXpGbLDx6grJFb27q9bDxqCu2KBfsi5gs8APmogTS",
  "key38": "biArYYYZx67ZS42wi5rKTiauhEy4hdmx5Wjuuk8SQz6S721tvDEHwKWXALUqwt3g2dyuqnETiMxYEN1XHMxdmrG",
  "key39": "4yok9pfErkfjCsGnhQYCtezT4dVMCenPGUvNvzt9iVqytdLh6xVRPwGa3GLMQ4RF2rcFkFPNz3ErssH6PCGet6JP",
  "key40": "4mPtmJVqG3dASoadxUGtZGHqbU7iADHWf2fBVhTcXFZUo75Zh35JSYuq1spbB9HMeUi26Xh29U9QZJuvhAkJ4j9v"
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
