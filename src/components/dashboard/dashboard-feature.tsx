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
    "3EWaweuXUGHL2oAeEwXidEwHrtQMbEdvs3DcFvWxmVmaW9hp5LGFp2bYqu395poTMYAymZAaVCgxCqJBnd4h3JmC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FMb27VUeYvjxMeDZn6j59x8oyUh6UrU1Y9uJezwmoaURaFYeB9JxCZ1WKcqsR78aJFB1PzxR9GRuKZkEKGgWhm6",
  "key1": "5xzgEh1evA3Ev4Ud5BJ1tUp2N9tMzTofPvQd1ezcTHtNDBrJKJpdwmNGhG4ia1DouMwREXgZjiWftcGuB71sfMMK",
  "key2": "4e9iHCZ1uPR9JzZ3JEyqs9VMs44VzBAzAYU5cQafzNdWSuC6EEVgo5iRjm5owGM7HZrHqdT6T8hz9r4LbZcoL6tm",
  "key3": "3nMYQKTNwdukJmh31nUu54cGuFcyrpPMojVum9pskquxR8MgRdp9tCbkoG8yFqKSkuQUA4NZiLHYV3WQGZCjVbiF",
  "key4": "5zpsDbtXjFQkcuB3WNJdU1xzjMqQAcDrykaR2B3ieGB4God6DxhWJhToE5viPa7sZvuqmTAMv67h1ykFULuMmR5T",
  "key5": "caX37NNyQTvK1rnpdHUjRTwZQ15N6o4YjxuR7d73GnTtxwZVbbt9LgxjWca3uJ5tX7bj4k912Rn2uzuoCFNACWC",
  "key6": "49sbg2PdQtx8pLoA7bzDCFuQQXm3rhLREPJFUki4CXfanfT443nQ24UsLW8mwCwdVXQgfVXHNvn4Wesk3jEX9S6i",
  "key7": "22eYkCHkmL18xjrUfRzBSDdUDkcmYSt1VFDyXU9U6c7Pua9XpFzQAsUnghk6ES7yS49xw6UXWBTdpY8b8Zuvhuu7",
  "key8": "2egjgBExa3owrs6WKpH5x3rw6qNTUsQw6oK1J99xtphS1i1SFAizvPz9M3nQwMM1B26Zk7iwPZVqbpgzJ3QeQFHF",
  "key9": "4XxeLSKGMGeeecyQLsyegoEbM1dFGoCvWgGo8pYJBYqBvV4Lnvg98YWnkCiDySCZ4BF5R8hrdCrSQwTTbi1txVCM",
  "key10": "5ci7mbuEX1amKwCjL6xUEQHExWAEVUAWyeyttTvUXuvK6DF7uqnmbuZgkvtbYkH25pgEyW2wdPsLPjHnEgnyS8Fg",
  "key11": "3J7sUSdduFDYMj5uGeeVrEZwSEXiGzByoVMv7Ysc4B4XkhkQCTbwEo68dtmQzdbFtsMzgdM6sarE96b5XQysMxKq",
  "key12": "3AHeNVEKmCvJ8ovWVEceoQ3Cbdz6ZJxuG1yjNir7VmystwnVwXYFBmwzKSq94UHFtbyTkopbsbc8wEPvhiYStrrd",
  "key13": "5FE6s7d41iWWyDNz9wv6MjfVk2qMANNFJLdzV6ifc9XrCCekAuVBdeij4QxaASqvbNCAvjSWNiGY921V7Rdr7EcC",
  "key14": "59sYN686pftk866MkxU5MqsTZEZaSokcsazCkBznxZJfTg4LxWmkeU8g2mdMiNMetaxPosetTcoHrnh8LMNJczJf",
  "key15": "4QaSmt3U6trCSZx6zTKFi5Q6cBgXjjGxNrwaEedAXh3irz3VCGsKTPcLiL8STUYhXxVFqR6HynFTavK3Sj1KFkns",
  "key16": "Xh67E1oQb3DPXe9P3f6NLDXxa3TAefTMHx2qie6oqZk71FNrHdsScsxbng15hJnFTU1AmMjeQztJuhbLwimybxQ",
  "key17": "33FnAGVswYGVPJgWNYkejj7dUzXxy8TWbRxUKKAKvv9PooYuyaKqN1mwSpF9CssNnj7S1TxDm4vCrnoHh6ZnYQZz",
  "key18": "2FHS9EkzLU4kfqw58Pbc3D5FUCkMdv6vDLs3mrJ9BQEt4r1joShiwznJwf3yMW5dZV2SG33u5Bq8TJuBZe5YfCSu",
  "key19": "3xCpJaP6aWgXvJw4e4i6FLgAKhvpbA4hWjgLfoMx8w8q4PA4B1ALhdFJzr7ChssVkcRbbVXREk1U27r1rRN5zcLx",
  "key20": "4YLQe6xPh8ztVFc58pR19EMM8XxbC8UYZvTXZ7rWNNDKGPquz6wJtNccaGP7AB1RtYzKtLVAg8vvk14kL1Jvz5UE",
  "key21": "ucPFVAFFhZPcCnuntvatd1tRVY6zY4cGYFLdDie62H4nJpj6tpNdjxti8MvR3anQPHSp8GTa1z6gCruTThNW9GA",
  "key22": "42qYjczCp9vkzy4xrKwBsiA2uTA4685P98h292sk5fmhAhZ185QHUFtV3xSkE41Ke8EYLzsh6Ru89ERH2RfFG1H8",
  "key23": "3AgqRbTy4Qa9rE2Uv4Ej4AztJTZnNRidmS3fmUEAdjh5LgzZumNvepN7qMgbsfozHvQSSDD37mKMKAdtoMuz7d8z",
  "key24": "R3SnMQKTz6Bu9hB76w2QwFcubCJmtQnjMVxnoeAcwox7aRbuPZfTWjD2AGKhhisrWLRBHyKUAYrxBKxMPHEKDZj",
  "key25": "2dcH1gAwU59Ko7JMbN5D9GENgV4wECqdBokPHmfWPsvybUK6fNZxZWCUXbQuyc9XCTeE7j1BBwQbpwzmVyE8hvUg",
  "key26": "8n1Nv9TExqq5keoiNp9uzoYffCc9zUsrezHmGeDGCwvYLUkDgK9NAL72WLASccnUBtVxyvkDPjgxByuwr196umG",
  "key27": "5bNVPGBiHFAFwFYHJfbjTF4LUTfraZBAJptXtwRc9RfXxyhSNgG7iAwU6bkujGoBfT1FMwbUSe3yVAADCbKWYuUm",
  "key28": "JvnaZDmiYzY82ko8HfYYfmxd2kM36AK6SmKURWJ854WFsASsT2zZbEUFDKZXgSCFrgx7YpGhpuPZkXVvfS8a5xX",
  "key29": "R2Miw9zwKLze1CQWtw3ZSM1e91wFLEVPt38DM6pui7kuuJkJRZvVVAVxZNb15ywNmWWTx9jBYXuZZkBPhdSh6Yp",
  "key30": "3NhBfftZvqg25V4J3uzgtWYWw6pQtKaSZtqsBz5eX3yYwFKTZiQMvky1szZMr7oijRpczh6yasZjRNh1GzNM6y9Z",
  "key31": "3RxquQNy8s7vCVcttNnk4q6VEhGSbgVmCnH6REevXsxxqBBqPHpVoJjdHJQrgvx7hjcy5r9DknqeS2EXkxEGcFrc",
  "key32": "2tUruSNcyLiJBbjchz5okSxtqrshFhpbkeLXgEiUVqPUZ4R8tyny1UoccGg8xjJdMrv6o7PUSXUjEgJcXWLWW91S",
  "key33": "3BaHiKTPDvCkLic6U7B2t9UEqn7mPPdNzKPyax6oeS3Fb6K49udR126a5rUenSnnPrNtCeSRShgA1sBM8rbT1eJy",
  "key34": "5WtnHpJHSHDhG852bBhbckNKYhcSJzPunBXdvatmAY4mAPVjxz1gmqQnpXXCLhfMARt3BnS8pu3t1xr79H4E2H9o",
  "key35": "5nLk1DFEg1QiMrQoD6vWuVvDkx4rsQFMuUWfYdsNMfi4KShdzdrxDWFqywJorZ9uU113eU4WikytNqisQmqib7hV",
  "key36": "tZNToamHr3oZ3xt6p2qoFYsizPVgxV4iFYExzYHpqig8AeAknoD8PogqNKLyyN7M3SjrEY8ewec4xfyMJ9phLn4",
  "key37": "46t4e4vW74oSLFSGd4ymFj9Nn629e1oztG7M9nQnpizL8Q1TqzvtJPm7ww7jL5dFMBEFcTfAvgZUTuYVtAt9ASGA",
  "key38": "396mZHnssWMfkpMCQEiKBeDGfZze1LuXwcNz41wBDPcGL7eUoVbM4fcskkHSedpmGyMH1YMMaTuZ4C3SjiL1d5S8",
  "key39": "42MwbiTHBdrwh5L8MGJ9WYcHGjA8D2uK9g7jvNrz799vQ4xFDRquJsgQdASAQdMJrSpY7bWK8qS5DABuidvHB9MS",
  "key40": "TrbXmenW52LQZASAjzn94N1gFxsyxqKGVGSe7QTQB9mp14sSosKu34ZCoHqMpbb3rHAwQeEKRNAroWhw9MdFPPF",
  "key41": "24DXpGnSRWReZfRyywskRfE4X4xS8miem27vtzVwyaLb4eYkCtZgDuNjsJN3BHCwbP4shPi1xiNStAHQJfofDzqu",
  "key42": "2pMniD2xXn8UnkbkyFmhKereCn34tJx8kRfLLZ6qDAbbctgzZyQa1pZSrmvYAMsybFm7vkXkc1JXpqBeq5bBPwBY",
  "key43": "4UZUCDbaZf2ivYgC3yfykGJW2D1CKdR4PxddnrCa1vbAEuwFs29nEmrtdazr3GR8NDGT6W1G8GwtPLSrLNfHaSZY",
  "key44": "52aN3TEsdumfp5TPrRdie7PAGw4PTdK2ohNEHzHvaXU7S4tDSFfwWKaYSyai2zVn8VnJVxFEE6JaBrGi1nGfFrTk",
  "key45": "5gTMC4m35i9naAGzGJ5KesHKwYu9cPUeKPo3SYkqGmBmiNuu5f6Rv2p3TYKaW9LLzhFArA9xrpntuiqNVXnDyuit",
  "key46": "3uDchSed49PDCYdwhTmNi1ZtVhMkBChbeygQpAExQk1RzCbqZPWTfmrkEUwqa2YZLKBaDA9V2FWjLojQNFPtmoqv"
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
