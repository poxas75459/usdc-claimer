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
    "5XvbZBRnjC7RphWCatCjg2CCDamMp9KX3WkUonF8Xf736gXSjoR9n4NFuNyWEaC6em9M8oLrzYVKQxap64fCcJVQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LiS1doHFgybdr7pZ7tqtAxEB57wDTVVZVkU3oaDkaQ1AKF8i2N5QTgGxNDLHfsKM52L4xitEY8fDLaDbuvneZEh",
  "key1": "3iAnwN7c1QEF7M3fuvKDSdc9pjusH8xbu85kBB8rCxGdXQU6nUw1DBJZqtEYDVC1SXHb5BvapUgzfPKxXxTsVyzL",
  "key2": "2S3tYqYGKS776xtg9yNpWMKxMQQGmwGsTA68v4eHKubFbcoCxUSMcW9zx1ye6A8VKk9WhPd5mWGdns7NqAUNCgkh",
  "key3": "5eHYGfmP1Ky9JndGwnJSUkGYuPo23k6Fpkr2gorv3M18DHHAqmcYmPF1UsFjmnM1YZbAemmXYs5i3TEWraN7EoTN",
  "key4": "34bZVx35Wu3BBptKu9CpZ4V3914CFqTHDGiZM6uR4bnLgPDuTQEpZU5b9PawmeyknhivTZ3mXRPJJcmv4crwSzik",
  "key5": "5jQ7vReqNhH5eL9RMbxdzs7XGEagF6sKYkNzaYazvhwyTjmUU7KfvWL6dq4oKV7XLqCezuKq1aGWA5EuxwvUwxG1",
  "key6": "3xTQWQBPjkb4ugFHMYLiNMVRhjymZhLwgVPcxDT3jn2WpBTsSCJ7qEZn5M5BUygB8YXSVh6XFQWtQqgpAxjvMdsV",
  "key7": "5tYSEhqBWz6JUooZ4gshDTg19S9LAvE8BTmJQNDftALzW6ggH4tuhaQr1eYi6KZQ4HZ2zf7n3Rg3gipMuJ1NR7VF",
  "key8": "4rs51doF8nXi6gSnfHdNLKXSbCtckdKs3Wf6CFTe7UK2ZALoxidRq7yyzyGjzGYK2oGc5g4Ygo3CuD6eJGNHUb7Z",
  "key9": "weYdcBMQuoUrauTiv9894tZfAHJtaB3K35K1jGbBnuThMKANd2t84dALdmK8SJE7zL87TCmzAsFhNdg8MfoNV4P",
  "key10": "627uwnuW3zikVPfJAHABFSEAMAVFEtbka16exc3nKN5R3Bp2Hdqk3QCEDePLjQbwFmAA17QUPfPAko5GqQ75YPbu",
  "key11": "m4PzvWrMM2i6xF2R2j1PddS836sbRunACqRQwmvqd47X5Gh4HDjhX3YQrLHMSMerZXLLBmpfcUATd2MxrGh9wHu",
  "key12": "59n9YaAbSJBiSSoWw9q48kExy3diWE2ZtkVomhgu3L2D7JTYvx1s7GR6vKk3veigSnZQqS9Mz1EV75am6YHHHPRQ",
  "key13": "2DSQK8vMHBERPCUTbTftRdsjgiC8poEsBRMzHjFMbGcxmVd8dLisbgeJ5ecdNxehnaT61zVzVUjKrPcN4EaYjAof",
  "key14": "2vcAFaziSReUEnPHKQNNepkvP5NPRiqrMB8zdMKMRDqdRMhisZDCAegz9aoJKCXRrEYEPB3wWmW3FE6Vv3m9gJ5y",
  "key15": "2CarSFq9fuHsASsAhUex2YGuCFhFxG3YECBSf4vQ3qzcji1QBovQrfR4ouu74zWHPyuZwjHAH9B3s9uDFkZDYsac",
  "key16": "5Pw3B9Xa1H9cwGNrypFAnH7tFvP9rU4WPPTyndyrNKNFQpgYqoB59NcQGWCFXsKnNevevnWEjvQp1a6kWVWvW4kg",
  "key17": "TQA9St9X8P6DGRAD4md81gZ9AauuceheHzM5K5C3nJWkrdmqra2XZpiz1L8oFfFLT4C2uEQRUa6ZjiSWjrtqF4x",
  "key18": "38gKYaEQxyntBKSgbYy8XkaJjnvEukWGcw4LcGicBLMo9zWDTsuN4SUowcXQtf984VRrivtFX3bvdgBPEw9Q3ePz",
  "key19": "2TPcZzr1ajXcQ8bbjSf9vd4FzJeASvBYvZZYSU9WtJRDv93rNx3j2mbVp1ji1wsapySiyBEMW3bWPuvm3sKLRGAv",
  "key20": "CsfDYKLdcRk9pD968TtMBc5pyUZvhgUAaMFUeb1FW7Reju9vpmqiDzrLgTHfBHfrELZ2KLAfpyvqZZrq5URNwmr",
  "key21": "23J36hW1iU9zDrUAThZHHpoLM4PotB3inmZdAb3drJGe7V36gnmq5yxCNxs1HASpd33u8NL9cHh5d5UMEJUWFu3r",
  "key22": "4Uo4c8jtHc6gbexFi9x1pEtRVudhRcHo2twbxUNmgSBN25o5WkavZFjk6sudsS19GVfMrpX9atpuAHisYkiCseBS",
  "key23": "2Skckdc23xVsZdWD2qFWhwwteJNRwTDEVXEXRSLCfqGWwGbL2bstZHRXP6CJZsedWbSEC7Fn2Grc2i7vLtWQ9n9t",
  "key24": "5nF8tuixhXMCrNHKKYrYPjzgK1ZpaKFRZyETPTjqAuVqtXxc7AJndLguAegZbpUYN1FDV27NLK3QoosNwSxryX3h",
  "key25": "36dJrNUr1EBUY8DxkRqoPet1eHx9XgybCKJ8VDbmWeMo8a7nZHEVPEui9eeeM3dBwssJv62Q1JRXWhXDHvZcZLST",
  "key26": "2akcfktzTPj8acg2KbSCCw71Eqkbbgd4KNcRTsAG3Nigk4MjgyJeRMdZQukmRDQC4zTkNDPtVjQ5zb4PmR76Cukq",
  "key27": "3NecpmLGSdrvmMeksBNTJDg6qitAfVbrue3K7U5DPbDj32DkaDzfeHn26uns9wV9EMuvK74VEt2epQHSEjazHAYU",
  "key28": "5RYT7ockbKef2DGZ6Fx858eRtLPeapedPYJY5eJaJWYv6boR6V99ET8JV2DpK1BrMTezvWwU4bgf2Eqi77SzKtFe",
  "key29": "vDG4ny4eQ1YkjJbbrwE9TqAvK7oscXRw3oz6fq5ribZQgyRU7qf5LvvDeP1StvnyU6kriDd7L1amW1cicgHMxmP",
  "key30": "29YVDYywQ6eeTvwGqEzXwUrwFfjosinZDDDR5UR1x9veQGTqZ11W8GQZdXRDW2GEfUcnYuN5MWfE7q5vTGzYgjnK",
  "key31": "3E4Q5rb1kYPb1CVRcMEJ9AfEwd3vZGnVHZ1cuELdyFXvM4wtSgzP2yKUti7MnuUE43FdP16yePsf8GqVHCFF1tyh",
  "key32": "2BDPM9LpzrTJBnEZYXcMpi5hvhuKMMYDhTur2EtVZmTAUWKfotX3YexFskh2hV9DXr8Bh5UoxDaUhbycS2vXtUjH",
  "key33": "4xLFaHuhs2iLU9jRAxHCtpkSDJrZw4T4p4Ah3drrvWAoUyq7VGhgVGv5ygbz7prD9sXmedfqUb6Zx6K7mjNcSq4U",
  "key34": "HuGqRu8JXWzenv9AVtTwjzB1iajh7KxFoxKtTm22Y48UUZnMwTrvjRhmtKFYS9ETXoFq4jC2R4YGiJW2ZxnLSVq",
  "key35": "3pNH9hwRQHN2t9ssS6FQZaChs9FwViKG2xrbreoCPmwEJGiRSYzKMChrNRAfnweZTdSwmaA8GotMminbYF7YxwkE",
  "key36": "2Z8yjCXdbYzVAVsjYYmsR66wZuRwvFJYQHaiQxB5cnbcjFoZjuvS8pkHW7sMs9EWZM3S26pGTmTExKh7aUTQUHVk",
  "key37": "2RAnHsnWqfuZ3RAtZbrz8S5NpWnfs4XVgZ9szL6Kmcp4ZxZUzULMatWJdB2MUr9tkXKX8c4L3z3hUMV5826uWKAK",
  "key38": "4xv5kGH8FUxCuCznZQaaGhFCFPRHnSBVzQYK515Qhipi4W1TLqvkEhX56kq3EjPGyALzv3Yb7p4S3T5w6TunWV2T",
  "key39": "2UoULA5GAXGNq51d4LdyvREzoPLxaqzUhrjRpiZsB9Zb8PAPP6M4FEz4ZV1jcBgjBamCnpzP68Q2rSysRrVTUtvN",
  "key40": "5RxdTGSeiKkcpPEwZ74CaV4CfrvkFRPcaZX21RMBMesuK9yUvA3CEXhvdEc1wLN4qD74kAKnG4djj6PBRRgcEcBU",
  "key41": "2BpWTZnrgg9WzcGy6kChrv7u7EWBHNXrp4BQHNufgHtgn1AtWpRm6y5PStVWSMzKsZGiUsUvtt1Y5TFzvMXqLxkE",
  "key42": "3tgUREo1ui9HTWXrpvVpU4Wq2SHM1SZk9W1qSvL8UNrvT7BnGBvrxTVBYzJNEFWVCFL1tkbWUxyjmiLn5iL7Lm8Q",
  "key43": "5NqCXwNQbPdWYoDH92f5rddpccWUiv4ocKT6HAjbcoFPGqVHbGCjnMGc2fZX59RCd8earRRN2H3QUSBbeWUxz5pg"
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
