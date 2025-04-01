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
    "3GEZPuWRwbcAMx386fhnB6VPaVsfuEWjX8YHdN2wWzXLbcfGXpbr14u2aL5THRVdCK3xkdKXoGLeCBWyS6BrxKLC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TTxjAXNfY7vbFebuSztMhEWRetBhgo21P6dRMEdaWMd5qfVzayhn2LqYVtDeFPJzGP64amKnZDyXC5ok6vexoZ8",
  "key1": "5m3zMg3mHcuMGmmRG7qPD2AMACriktmVZ13gDjJoez9QidSUYYnY5V3s5atSiVjwDJZyLf9YxbSvFkVQniBuVzBu",
  "key2": "2pXj7ny3h75ZQTWGct9Mc8MWmfdUTwR9hGkiAW9FJCYNTH1SVL4LYqR8P33Y7WdFiZ4yVeJKLDJXaScAqnGQ7peY",
  "key3": "5tAdyq2svX3jBUYS2LPCcPkJn4s4sSUi5qXvtMv4piivdcmgHQobapmVmeR1KqeQYCg96SP3RMw5yWBQeD19Jjai",
  "key4": "ctxaN9kbwmu9HNghaQrM3EvF39T6kTHefachsJnFfpgergtuVaBpfUj4XTsvGjwkjUVRic7CTi2A2Z633hqBaw2",
  "key5": "4askoksMZTHmG8LTgNpMQx6B37edRdvo26sfHb8qXmJeokjSoV8RMVg8R6kqRXuUBgGgmqgi9b9HPykKtSRqTXau",
  "key6": "2Ub5XYJ3FFBspG1f1gxNV61keJF46SzCAYh8sFKtuoakmiCLJQe7G6QDcWFVFJUPU9FHsRt3u8Vtb4HMqQAJFXtR",
  "key7": "3XxZm2sdmBHAKKvcbihN6rEnq8wxRnCh2Uf9tn6ppa6gSmGeEqeWKJPswDMMWa8rWj1N4QqQXokZLqJScD7Tw5Jw",
  "key8": "4MxW6ms9KKbYqRoAKL4E6LsqnDX6w8aAQ2mSvQ9xTAse8tUtZrdU1uEruTm2soY5kiCSJFutCNwDvc7NQTromLbv",
  "key9": "3RHdavA8zQkFaX4q1hyhsQNEhLRR1kvPogFhM5oRSb5BdyLkaCGPcPoajP4yv3gdNoJFsFrXFfwgSbSY8ppqt4rv",
  "key10": "4Vmzj4R5SiPaRraMgEs6rvMkjLZvsmXDT2NzQ4a3XkzhvtciNnjFfCWA7b73vWYqRbhumdctXcU2xpBsbqb7VqQZ",
  "key11": "4Gj424AuWUz18rcqLbZGuAQWMgJkuVCjN5waTUL3XiuSYxf8W9ephvrVBJqAbd3oaeHYvHTorsQ8h91LaTLmswbS",
  "key12": "2c1YTGLAypghjmHwxLp1d8LFBtTNbSD8C7wGQNnZrXpdDq4ywsGaVrLwiL9FhDQygRvwHYsPhj9pfFEAmFSC5Sgf",
  "key13": "5khYZcp3p9TwFNiEx13hNNhEZgAs9gtTh8ZKmefUx1FYW8XhesJ2AFpFP19Z4eFMasgtqXDgiM9sUP39WGFCKShG",
  "key14": "GX47cBT5PvLLDZTQiu7r5N4y4QaEAkzAEQcBtrWSHTdCfKnPJAjnzGPZbZYm4sY3HLe9c9fYqSDRBUA4RZL4cuH",
  "key15": "62SVNwLHQrHoA7nY1PzyKYNN7HqxMVgtSufdMydVxhaPFNwyuofSBJ6u6GWH8BPfUgveLaRZ52proimKM59Zczmc",
  "key16": "25QGBzkoFdKSVjZ4QwAq4USNkgPTgVgQ8ZPjzH5rSanK815ZHnBHX4TZQwL88PMCB5yRk6FNRcaDWS8B7ahrarfS",
  "key17": "CatR7iKvcduRkDf8tKNXbkYPAM3MB3XhK2KAZyo5MMcWbG79NTYtGKpgxDLCe6h6kaUVzbFoMJiSrvAwsqoNByS",
  "key18": "3YFSPNpanVaervL4F2ARpySVvCZyFejoERuBhhTGD1ZaiKSKn8U2YVhQXtpot8GcHYSBiNPUbvNFybhcpZcSAsYs",
  "key19": "3ATfMySpSXLiyhgYv7ZWNwvJBhDqim2P18mDx5vehG1sAUVwZfUvWpYEp3YV2mZnewVdNsTwxaQM5nbCbHbH8ksh",
  "key20": "3FcxpoQwhDUfNw2AAvZKZjBQ1Hro2NuKr11bQvNb8vHtNdnyTsjEQUN7KudwGArmHvfCEVZrPqA4rBokYfAAsqAW",
  "key21": "23ierHzFiwJHr5T9u82YcYhzhTwLKiBdBPWNWpiucKJKQyNUbCf44To76dw9SnU49FmfKN4KqFUEejCyLbq4gJUA",
  "key22": "5kHegtE4ArxY87T1jyaBA8k5vYvHPwQprzFXmSje29oXdM88EGb14VuzSHhVYcHtoKbropvBXeWd1BBXKp7vK5ha",
  "key23": "2TF4AChieUi6zjoLr397n1DvHwJifU49Dnm9SA3F1aEkeK54ZVqxzHVb3P4PS3LAaeMvBhsbZWzpDS5Z8G1KuFyt",
  "key24": "qhs4xn2nymJD5EXSBMrZj6HfBczSeHstJCKF3QofSkj9jDhmgBP6RJuqRSM6DqvuBHivSkbksYWSUCj3CZvXQkG",
  "key25": "2Cc7Fha1ADWjrHp8dY46uKyBK889QPzDAieJT4vMJQK7D72ZDynRHeB67mNhxYS5wZFQJQaMZoK142FETRs9Z97x",
  "key26": "75VToSFbEnw4ZWjD7A25Ck2kEH5bpCCVUoMuZs9xXLwZTPL3wkvLF4DuEgUG6RY7PzT8jgAuhbCg2XNLyWY4UWn"
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
