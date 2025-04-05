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
    "FfxAwHYHg82fRxr1D9Lrf6fccugCGKmUBw8BVuVBAWYgCRzeuuoXhYYhW3UeEDumPpuM4YrjHVmBj2dFqrK98P6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZjJxNp5fawxV9eayPmCQripDAJ7UusF99vcuXk82T4GhBtgg27Mir2PnR3avyDw2svyfGh7emagdC82fhV8qfwD",
  "key1": "K8iDmg49XLDfmMPUzVRZBY6oaBEMZKUF9G5eGEQ4NhwBaACnVBYEUj6ddj1uVwkmbVm9e2nTLZWE6Jq3cAr9fus",
  "key2": "CfptUPjEA1F8Sf1xxAWLQQKkwud8ejWD5shHQzroncfUQhQSJrmGJRcVoZLgPSSgnEjGgpQ9NAMzF5rKjbfyHsJ",
  "key3": "jZQQ7VTSHNtjBLVe8Rf6mpB19K5AjCY5brtcn4zXW8yfbMp7ET6gAjb1ywhDcC4ypQAtaZixAmohAky5owpAWcM",
  "key4": "4jsoSHkL8T2WgizSeqasEtgy7Jgn71ZWN9kJu2ZibCGaypNLXkBPv9vtEJUAZpuTromgBipGC6usj5oK79WdfwMs",
  "key5": "3HnxeSSw9H1UBiPr7VXjY6nxCCfXQhV1P7YqASmypRau9XN4LCfkCHVMNZeeoQPrVH2Vw1fsBAAeYP8GQARY1NPM",
  "key6": "FRMgXQmtgsyhXeKCS9z7M9kxaJ5pvTKCGcQKNWEbDkATZz6WM4gjijp1WP2Gug3DMdrQvuhBXq3h7cq1RFYYi24",
  "key7": "3euDNbR1134xeQi8fuK2vjB8D7GvCAqkQrgJftfuWQq7xYokFcfE8uefq8FH2J2QerpHYujFvFgdtvJSjNu8iYNU",
  "key8": "38dbx3Z5ud4VG9ZQrSDuHNtS5eoFAcWWoKGiusmrGHSzv7v5h2hV8RB8xX2pKZTtUNFrZ97naT4fba7cCVEKfkDP",
  "key9": "AfE9f3yF2DjuKS2Af7XXUZfMaDSim72HzkUwXs8pcUe6Ss4oAxtBKR95jp7kBKSw48hV1WHVNeJTtJzjufhVg5k",
  "key10": "65eAk2XGxQeTVo3uqrHeCbScY958Cn6ZxD1YEBK7Kg3jyK9zCETeqGSMe5HwHhYVtkzh9LQ2xoKARCwjEMhp4wpT",
  "key11": "3zArUx9jLpQunjYCfTmnU6dW3XyDoFnzPfBXnx6DrpoJqd3gDjPQewRrrFESGZ8gHadpefKEvHjKmt27qCAqbKg2",
  "key12": "4rkaXnS91hxieH9XWtEYSHZCVM3Qd8Loe3zHVrYL4YBXf5ZRpS28mRnh3jBhQogoNSgvokcASXsbyjZEYU8XSWhD",
  "key13": "2u9BbGQZwAphbRp9QTSK4n9myckade8tWKDhceAac2jdmqpiaSA1Cr7T7GfEa9MBaPH3jd9a9UwoLxrv4viYMPon",
  "key14": "3TUKzQ3DebYiEQK9hRMgvf1AxDoc9o34bvF4ohE5A1U4coawnsYAHqarAmWfudbfhYJ91C8KNsF5cnWmWffjUAHm",
  "key15": "2UvjJNTFp8k1ZapBtvMcAd5KZN6CREDX7QQUCUF442rmt9ux5aJ1N7w1SpYbGih4BQFaRqDkXMbkK9FuUCYEMisJ",
  "key16": "2kbeGToZ8Gqq2uNCNkttfyJDjLYmz8e1yZfwCdGY8AJAd6Ao19PMRVqjNEiYhsRDvP7TXx1ELLnb9ZZFQ2B7QqzF",
  "key17": "3fgazCqXwNQYosnXTsYNjr5yLSND11NXT1GVzwNP7M8Fc29ChE2kV8ubyzC6vrxRLPtFrU45TovLxbjBCKPfTug8",
  "key18": "2dKyXJGKFEaNJ95EwHi7tToScQdyntL8CRRjfFyvqnXYdoREf5WZ2Gm2X7yGw3mcjQ3pTqTid2N3S49n7DE5Xf1y",
  "key19": "2VdMtgVhXCtLESp4Lspr1WF8YtF4iGmGWR4zPxk9jH5P7HnKTKfCbCfRrTjZwJ1FRC6rmHnbZBoZJJVbwJEyUo71",
  "key20": "4y4nEgNXQwUiQ5MVbLnhN95r8371VcLER8NWXihH3WNXGfpf6A9WYYcYajkdFmYutMzDu45Vn2Uj1DE7nW5Gffgs",
  "key21": "5a7AF42cDhVEtuAbtwSkn8dxGWM5MdYqUcfLSXr2xRBRmzAi6aBEHmgKBBZgx93BUuaQHALMpA8w2b3rLb7HdRJ9",
  "key22": "4zHPEtVuvqftfTJcdHs9xYArTxK6XyYmqtRcCzd9DG7xuhJfsiX27W1ZpKxXHHqpzk5eeCLwBnnbD2kVihSBcp3i",
  "key23": "4wzdCdukvtLXrX3uysr5Cy5wsRGce8TVBbDzA3oSFXwb9gagfX41DjNvg6ir1TGNoRjnNvc7WEWSNJYDFNVvxM5f",
  "key24": "RyzmnkLdspLxWjzrYJwAf1MyPUL3jAnemSe2Fnh4DT4q4gvNomYXHL51fx75K4ter2nasAtWroMAoXbpQ2MfrHw",
  "key25": "XJyd21oXeJNn6z5g7W12fm6imcLX9UG7WnMoWA12aEJiUsJFqnfFcYsxymGEzVSK9SG7DFGyBGWmv1WyJVsvHiB",
  "key26": "3fvQn35YeeANAX53r5Rm9goqMod4Na3et1ZuKouVS5sVwH2McsuQuYhBS29ommoMw1z6pfFSztvrXULvNJPZ8ZkQ",
  "key27": "4eTBmhxdRZv77BfNNQ8xuQNZKeEURZ6wWSSgCtTx1fbtFXksCGPMkUD9cm31LrNtTHpVyz9Bozs8VVwuZGhmkUAW",
  "key28": "21JYBdj75t5cpV16ukJQRDzuVKvmjn2QViXjTWMdWE26SEJpiTCA6G64YefnQzeCiDyfU3bWqHG6rPJq61kgdNnf",
  "key29": "3CHBYBofDaQHReA92ccPbhUQ3o9UNbcm9cXqUUDsskV3xjsBZzpMw6iSiYbN9H7EQjbnVMYNB1Lx2Xnviv6ZdAgV",
  "key30": "5DXYBCQGo7Y3GmyYStyVE1tgpegLmNzVUvSGq6M5uLMV3zc1ASFFt6PUZ4zJGETJ8KWxtnAQDZ1W662oQHY7i9AG",
  "key31": "2SGMVvh3S6C2bqsWZgrPA5HbirkBfA6avCoCBetLWjYF7SawS9YVdEWFq7i9FEFSgEbYV5Znn8sTGPo4pooF2JZs",
  "key32": "5ETQJFZmQEVdJRkHWLKQLnjYkVtt5mwyzmaKQdCjqGFgw923sPfAn5ikYmGNemyjdRyzpNcwJgTDQKXT4QDASouG",
  "key33": "3aWqFMfGkURZNy3L32DTsw5QaoDFTKqVYkbVkoDvHkpZgP8dqfY63AAwC73K31fZ21txC3gDBF2eTyT1wqwxEPB2",
  "key34": "4RknRbuL9uBmPa8acwsfZWRSnBnoHdnE7Fg6YMbMc4i1rAdsR4v1oNwhLBtrNMgjjR45JdeyVhYLxVhjz3ZNjzoZ"
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
