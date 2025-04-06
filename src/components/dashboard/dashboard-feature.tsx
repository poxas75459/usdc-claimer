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
    "6689pepWbbFKhkXYrKQadrGY4Bot21pBJLcvMiR9LXNWDqS4CNAiBLyx5rZHgJWYNZ3wEAYAg2aGCmLUQL79mZcy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xoEktJW38KHS5KxExhuyrxsMsYm5ijNG91AhvTf4XZyC8igmmSsocyyYDwabwAKawizuAVPjjrQdZMZLQq18UQb",
  "key1": "4qCtdNQS9DJZ4dqsicf75aPycTHzbqsBm7yHaAP1CJWckYYkQxxm1s9FiZFyjruX4rS1sJMguErfiELeGGFuP923",
  "key2": "36UFQqcyvsUaPeGUMWBwUvUGDD4evCNz78yJQgzSjrzHNtCiD1xkWgqkPDLfd2sBfsViA7wvxbVtPNHbPzpzTgiA",
  "key3": "61aLUut4tAKuRQz2WFU4GdijebDRBD7ctxWpVLTPkL7v13f7Mg4oMuCJsejGqtntzVNW9FvrSPxTKdrMmvMLqM89",
  "key4": "9g6TKyupH2xmWxdc6eeUdejJhp3yf3Ug8NnZVvPR3FnjyHmfdhaRUci4ZKfvnFF2eR8X9NDe1YQ7xGth6GtJpNq",
  "key5": "3MT1g2qKXs7s8HcjJXjpc3jEF59bMBUS1uKXWoS2cBwyvCBzezR6C3nTRndNmkqFphmSMiBYLCKcCxKMyE1k8T2t",
  "key6": "4AvQ9vwb4Zk3bEH3qQNXGfnT5NVHD9DMhq3eXaSeGxVPwambBJo74s5LjK6Pa6kLr7fmeKE2yFLNhBPSUcZcwmZa",
  "key7": "28wt3rZVtcvYZCXr4fvnT8kjUH9ZFT2CJdU6W4xSeTC2sqUa7o5eAnRknwE59iAxZQJ4G9dF2fGExpAKgNcPw22c",
  "key8": "2RrGvWCzWaLpb3WBJ4e22TFZamMaQTbWXBSAcWfj1FWqK9qwogy7KdijK3S88Fae9BwjJdCMggQPtzJwntxHRi7p",
  "key9": "5zphiZhHRtuxZwHZjQUdPYbH1Tm8UM9iZnbNeoPVzZRAQDL7uhdgJqgRQ4vsMcoTpTEJzTu63Ls8LyDeBT7pVvL4",
  "key10": "hjnYQu2HhkUGCkgxPf92a2mVEAwCt7kWFi237AQxUaa8t9mgwBaAv5d85k43qKkkE8vW5rS8EG7GvrdLs7h2W8X",
  "key11": "2P8fUKusaysJ9xTzVZaGb3epPGKxRD8dVg97gLsAP6wEDLA1E4bPuCBFhtmxudncm3JodAhDTTPATbjzVBJLjdng",
  "key12": "4GV9R5td6DoaRWAV7jykN1U6ZVZU8T8dW5mr9ebYy9ukHxauR3iKcQFV2wHpYQPccDrx5ZjFfNZGRTrzsR8dndMs",
  "key13": "66ucoCfNtDFkRA9vJuRcNe6rUWU1atuJex8jTcHef4WUei6aJPJbyw5ejCgj5Ho3TjU1eNCxo6QjBY6Ut3CFNRwT",
  "key14": "2SyAvZmdxmeHzCtKUHscCaUZyMvtdbPYcrTW2SXSHLSgh135FmrccGJ3GdFpuDpQY7MeAXbwESSKhKYXUWF2fPnZ",
  "key15": "4QY6R68ZD2uJ1m4hVo1fr4hCcme2nzfHhf7MM6ZsEzb6BL19HcsNCRLhYcfdLA6vTfscXXRmcDuvSQ7gyeHk5DhQ",
  "key16": "224JZRuJmM3ofoRZMTg6NboiSbHCj3EtnFSUogMhi9rM9uMtMCnM4wfjCX6wjFnkCaNZtieKpXmfDhkSaYG8hjiG",
  "key17": "vK5BZrtuCgZeUgsEheB6aWNw11iqmhMs5PbCio97CDYsDkcyvTfdw1zH1YjNNQxRThLzQkSKHSAAJ8MSBcsREvc",
  "key18": "5rxr4cRCutvmx2RQ2wwcTeESwJcHFWup4CDwM7AGjQnUvGE4qxt2CZyypsJW7Rx8gZ9MKQMtcvR89V5UHiX1AzCY",
  "key19": "2MUHsi2g43EsU3LwYbKc6LstDqTtzUTPbwKLBk7GwSxt3GNUgx5DKwWC6n3rHnKM8gp2xHhNbfuuwxGkxoAbXew1",
  "key20": "5mTr2ccCsQMHhqtHFT3ouzrnYueK1yRYncqznsKjL5KwNxeVbwiTLMdbKXLq9yXy6cHH1aiXAqMQ9jevmYdWVEkU",
  "key21": "Xi3BtvnydZH6xK5mXoDYU8VrFe38qW44peUtTJc8uqyx9mXaowQxMtUFdiBaCNNra7umZqYC5HJtNeSRxjp8LSs",
  "key22": "4goP9sQc3JMrWApiv15goKA1vBFhWF4akXmPrvVMpHKV5MucvCk84WtW2GDWqhmkFqVPUY9z4XmRPxPsQrJYEu4d",
  "key23": "3UvbjaHmoT2CfLRmRgY7Jqpypim9qvgUxc1AvykurhQmSd7Gy4U3fdyqE59yMvPwMgdJjDBnks6wRM7QayEYnWpT",
  "key24": "46BL2Khieg6dgqG1hwUxJAQFv2qqvXAdvWY2L4JzdfCxxYjABHstRHjY4NhkZPfsZjgnHByoMqU4DacKraJEVHZ7",
  "key25": "4xw2iQKda1rMBEabFfBCfYLK2sMVxdL5Awou54MUiiezYj6g4fPsGzdhqXrxsV8Ghu2AFsoPaqHytRUBQfkJZzs1",
  "key26": "9NirKVUyyyQdTzzAb8QgEuXMEd5DPzXtcoxaALcxjTSdA17pTKpDWeXKs7E6x7SbBqTL8LV1Wpe7LhLa2bQDbWy",
  "key27": "26meHLFHVDCJC5wTuzZScMMeuZgx7eAWEeuZHESo8pDNUeukLQdrAzB4XgPhKF9YEoEG7JDapPGuWLbQeU93p6Nk",
  "key28": "ADagvKKWeARqGYqm9pBiawBT7YhrJQB8cFVdAwRJ2faccFz7tp6ppSaW5YSmubxv4BgX1BfE4tweNdxtxidZh8U",
  "key29": "xmzBR5Dvekw3RJvqxDgE6h299QApwckCqgoMGkQpZRzuRnRbRpQST91iMuLBMQFABP4gLhP4pXUMi2FWHqezNLJ",
  "key30": "5UgQgPZd1dAR3gen8pYgjEH4czwfCm7eWGbPTuvfpQpsmqcfhPBLR2SLC5cZ8B9L7hkYw1b8ULWUzKTg1Hb5qBYz",
  "key31": "2BQF13V19a6nFmHLKsmz4giq12yLxb8ud1fTptwAb1iFmyxQ1ThsTF9xHMfBUsjzybN8MykHMduwj4BeFH3N1Nyv",
  "key32": "5TZXxVDSkjkevnrMkjzqJ7YEr4WPTa8qocmm1dWmaYxSgE2dSaWvWAaMzFwnH5TyGnbcbwyvrsJVnauGKV9gZh7q",
  "key33": "21dudWVrUPBus1hcMSReVXExr1snckwRhKHRDupyfXddx7RHiQL62adskD98NL8BVDS8PD2QerrKgJGyFut6gY9i",
  "key34": "c5GpfUyJXprUAB7UG5upswd397tyuUMKeHTvJ3CheEx7dn3iNy7TT6Zd6QcfLtAqPtjjSDorqNTSGbuDUebDcmZ",
  "key35": "3Mk2LwiQbnEBZQ9Hxr9W3MjjMxJwBXGdJqWyXz9ksA9qcJ5VEBJJNcc6oBUg7PHFfn3kgiR9ZsMbFjCPTAeJmZ1a"
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
