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
    "5CrwH6E7BajsmvzLBJRmfUM2j7Vzrfr7GXwPMbm3JpuFHhGpKeDFsGQ8cKaeXAhNbi1pK3bgq94SwBUCBX1EPgVH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6z7C9SWNwLpKTsaMMKKktqgsuT9gPUYtvBAszdR2118uf96PBST9rsifo83ZAaixoqCgdw5yLiV1cuaCGwWX7dc",
  "key1": "42MtGn5H4fjxABNrzjufKBnVvUNmTmCrx45zxXTLecTjucGR1NC15UL6X88BGinir5zbC2DigmjqJUnck1DU7Ajc",
  "key2": "2Gb2u275wpxTug7b8t4RbT3H5RqGB593i5AXxgFNP9ckX5FFSfABtbU6VSxkVsg7pUFe3oojVJA6HNf4TsZTx6T5",
  "key3": "qgJApHD1gRMKg3Yea3XDHZftjHCwbRu8Jscie7JnTVCDCYNhwkfDNnE4gkkfRN74p9tK9RGcGektEsgJr4bxQC4",
  "key4": "r8evXqYJ1ywza1JRWnZ3grhSciJvfRZquqxSPsBVypog7eVUeirMJUPig299Yeq94RSRPpDrLbzspXaPYsEtQSL",
  "key5": "5f2pfS4oor6ZsdEBBf6f1fC33mDPgGFSN427RKJbY8xJ5n9Wr5wBTKPqerW1tv7VgmLXaaSMXk3gBgocfFb2T1uQ",
  "key6": "3TRsjzrrnrQ663K1b3kuNHmwgAYQoQJxY2NE7p3AGaKMx4oNHB9wUK13yuGMkbhZy4ok1Y7tQm8VN9YzxSexbbtA",
  "key7": "3RTdNaQZeTGt2E7nu64MD5LWYS5CAigiZjE5hHYMsbEd8uyw43HeHBMj3KPh7eu9cKTsaS1owVRcp6J1DcZY9mPV",
  "key8": "3BYm1jSBS8p1cPk8Hki173Gax8iah6bn4FUhiGsmJP9SxG9yUSFs8vDJGDiM3vs7Mt4L6yZ68dqWtqJteCS3oarN",
  "key9": "YCudurh7ZYvp2hUaiG5Uy1VNw7rcPZqN2UX8rN3KXMmhjnE8bN4qrjo8nHAVdubPWmn45u3dkv3ER1dic1fnzTa",
  "key10": "4Sk7M4eGZezWGgo1vLX5v9bPPsSrjXn24FVbgq7DmfRhPHC2VWgbo39juV5xnqRdUXo3G6mS35Ymm6Hi7EaaAbfX",
  "key11": "24eT3WjuKvKa1K6MGPRUC2imCuPMo9sgKeua2HCoK1QB2QpbkKQar3qa3Wde4JWnQpuNoVeqCch9syyDeyTQpGMM",
  "key12": "2UoA4EBpPjK9SkPkjEDqur2W5yyKWSZnAfuXkuNkWwwJjRXs9qGDN6n1mm65okRBFerUmqcv5SJZ9fE6bFXdzjFM",
  "key13": "LMiKeS6LhumDEn1iHfCQk3FF9CC2Nj864jif5WkyrR5zCgoJ4HkRaLwC6GBxqetLbVGc9oVopbk6f5o1PHP4sp4",
  "key14": "2W9GJL985UimdW47NKRphi3jUkr8M5BXChXYUN6k1fPTUR8k11hcb1woggdemB1FfS3Tqx3KoQ7TBRGQsHrLp7Bb",
  "key15": "3XiC7TLNDeSuQmrCRcwtnCxMYStgavGrKNCKt8L2WEdc6GP3kBJDgZVmqFhYgcrwyUqShpuSyXMEJamo17SbLoe4",
  "key16": "2NsK2gNRuK1K4TQeyJpjARP9LF7AN7zry2DMdaSeWXZSXqLw8LuKB6gQ8VqAgnhMKKHry8ca6qp3neF2LXa91RzG",
  "key17": "4zzYjkjuY4yLRZMALwuqUoTcTwXF2rNsy6bk7vY69cUYLvNxuMLh9NBggx1ki2XEte7vYzuy5vJ4VKdXRk8YVmXi",
  "key18": "3NEDff6nTBEVbuzrzLHaXGCHrN6AEa4NYeYfkzmnbuKDRhKjRBoUsS2S71MFxXiL4Kw5kicajnWWce5c5xSmCoNx",
  "key19": "3AwTn7M6CiXwsWjNgt5gJ5G3hqi5JJfGXDANPMEW79mj79F7o33mieZ4DjgHZWqbbojy8MpDryBC8NUpbx4Us73V",
  "key20": "5mof1jYjDpPpgCn4jVVvHVxz56Ad9b3ZHfy7QTp2KBBazFrUJWuFxGsj1tmtN7y6jEpKtTbsCHBKewahVzDAqMWf",
  "key21": "6d51H5M1rCQBds8kJRs8bCf4uB8Yxb5q6H98rbQHZYkGeTkLcoGhmmkWMEWEuF2LryArMeA8aE5Z1s7HGKwEnma",
  "key22": "4RZEgATtjqefxiA51hPeUPHfeB8G7KXgF4uBxjLBdRXz8rnJ3oCFgUGBoaNUJ2NPcWnov8e8eMztor91t9c5tVgv",
  "key23": "2YzE4e1EbtEReqLre4rsozo6bGsM7zFDdYpmiYkVTQ1keAzLzeciSHZzmkd9JP167dWsNjakbrwnJWuvsTF1tcro",
  "key24": "CKAziYYbNHhjSE8ghaWyLXKAsBXbGKiFiTp6W7beED3W29fVSYPhoKQ9vPWG1dhgmyayqXuCg3AE9YtP7fqUqci",
  "key25": "58griGTKiXTDp7QvDx6Db53WkFbddQozfsfonH5Tz8gmY3fCzrJvLcB8auq5ETtYcZkdG1sb3tmt1hzvML518i6w",
  "key26": "396f8oiLMqTp7ME93pvi6s9TTo4Do8tvSXYvhJr9gARwKdwQ1W2KgiGoBHb1JGVyC8FSQDTmbWh9QVkE1zXeypZJ",
  "key27": "3ycG1AkLonqq4ti1ju9JbAxVeWHtYpskwzNepR6mz8bffvWaQirG4Rk5JjLTMNZQhUKbVkc9rqZoBsKUKqaGzHdZ",
  "key28": "RnM1CwgDyP3mPyL1jFzy6Sq62MCyxbSGf3S4mmT6do2C4MsMcE1FVeQHtbkXmRrdSeDaYPbny7ixKDQsjmBCwhS",
  "key29": "LZrgPHbBKvW3gWBQrVf1mfcRMDXyTQ4LU1rmqS82NtnF5Z1Pp6K3rALCvE5bPWDMdp4FkAEug8Z967BTnYBR6K7"
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
