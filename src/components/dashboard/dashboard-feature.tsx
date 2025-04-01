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
    "447zF42F15ga1u9MvLVVYnhEKWJtDeLEPyfAopSCp4aQP8eAwHBch7Tw7J5sdHjJZaJqB4iBXAUgHgZdc8R3znrq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SoB18y6iQ8fgpweJuiS8H6pzpkZmiRSS33PBwwA3JaPQi6sWLFdZgE4mLPN8AWmSVCV2BnxSaHe3kpFEBQw7oz1",
  "key1": "5J737UhpEZDpfKmZhEAwY7ANr5NAJivq34yHyEs9nFAWBUyrsYv9ApXJAuaDC8C2tQN7sRZ59LnbQJdbiQp1aGov",
  "key2": "U6SNiy2bgbTo9qf6HTqxRii6qN7cxXcDU3bUPL6rrHeofrzWfBXvkoRZUdEBTdwHTkynSYkaGpjzdc5hc3SK3Di",
  "key3": "2jiv6BFTh9VjW4grz67pLx8xEEU6hVV36T5dmk4pikQC3B3RKpppUmuJf3nhYCSfXzUtHyWyrJ5SaH9TcMBtam9a",
  "key4": "ZdRAvNbHpEDqfBrpG63xYsLAyrD3pssawuPQimdCfT86RfG5eixET8PETsGAi8U2Zac2gMwrt4xhZDB5Nn2eWoQ",
  "key5": "5vNy6cyvkoruXYT8pxEBuffJMfXrYaYqZHcXevLdwZzGKGanGCTDRjGZctCrWaaPcXsnSfFtn1KDQqFhDb8YR5Wq",
  "key6": "21wUjz3Xy2fA5LzXJY5WTDZdzapgmAzMhA7feuYRa14vCQhEJjEoDwcjiGUCYbW83nmTTLPsBoMDKQ53mJRshZkx",
  "key7": "4jhdtxQsZBUa4RNMED5wZ37KHyqHUd1cNBbvTqsgNqzhThxA5o7pShZkJJj7iJK9myYEqu1QjxdjbW1Bx9BpxPCT",
  "key8": "5TMSUMdQeLgFbf7R17UjcVpMyp5ZF3RC58NHaL7wtRVcsvpLHhJJtijL9gs7zwt8uqn6a6LSMu5UKtKe3VeKm319",
  "key9": "31Pr3u9weKSUuxAD27Usw9FtndJ3wVq16U8SgqJh4fwjhzbyGCKeunQebf62oF6m7M1scuKY62Y6NowCjDyNTiZq",
  "key10": "2Hre14oMui67urgMHHzw4eSSJBGeuKRrkrk94TC8QTJjBP1tvaKyYdfzJq33QN9ZZ6pBkp3mS7FE2qxJzbuirNKR",
  "key11": "2dKsiAgZCN9dXKkv4Tz8Lnbo2xPa9NAVucvaSMwZDD1hX9ZdHegcL8dK8PswTqX1hWsi1rvCwft45A9huMWcTXES",
  "key12": "5kLZiByqH8KqJT6gf2PX3MQyjmn4YvhVaaASBNKnypyBfaVzrHJ7EMu5KvFwUHjMHg6s9orjbHuMgvvLsyf9sqYj",
  "key13": "2KWacRhSBZ73VqTQGX3ZwztJPJGmp1H9aWeD4YTL5kyAgQsG59iuVYKQyZsrBJWX9ZamhVjr7QrQVW6U6qqAQZzC",
  "key14": "3ds5TCUkoFrL33UCZfCHngFwTLB9ZeCiM5AtWmxYq3gNHXVTGd9ihQXrmwu2U6GXLqj4LbW5YnPJPGgoKgoh3wSj",
  "key15": "4J3sQVuRhNdZqoXLVn8r1UvcFHLU9MkEe5JEvAk1bQPEVMSTC33CBNcqUDnv6t2n34unTo2CN18yoc1J4cpeEyyx",
  "key16": "2iwgBXp4X2sqXtSEz1jjmu9GXZ25ShwNguMQ2eLpWgsGd2zfxxdDz8xq1YqqJMJAJXi6jaaP2exiaeRdSFTzkLoG",
  "key17": "2B7PVYdJPH6bmcuL1bp2ptpyxViZdxbhZGuZF5WyJnPUATDcEuhGdXzE1XMdgWzavZ4GDPxFetLXRVNwrs77ZhVc",
  "key18": "4Lks3tgfA93ypcxA5Xn8bFtVpsBK2uNifNAvpTKPr4G9776XvxWGqKbk6GpipnoZWagEti9VZZ3aYvVe18BsyD5o",
  "key19": "32eN5EspqCUnyLptxP6g1LtH948Vm41Yi5y8nvmNFF7MiHho1WZyEQkxoVXYRsxyQAXLXCoQianZi4qfP8dnb6Pp",
  "key20": "4dKx16jSmaeUeqGHxDBA485QUB3iQyqfawSW2Ev1ZHkTUrNcRtWCvPaMa8F2mzPwitFtoc49hNZ7G6bThDSGq5aq",
  "key21": "2V8YMJos13DFD5s2fm7kbaBSGoNHke1MrjD1GZoFtLdLWjwxGLvaEa77BxW64RpFZzf317fQDq52HhVq2JLx97Xd",
  "key22": "4FyrHrZVp5TAJgEUSAzhMDedPHwiQFcavFEGh8WKxCk3nGpMpSxAH9rz7DVrXVTySD51KaJY4mcZrQpVwkXpAhoG",
  "key23": "2z58fW1LfDJLR97VHekAokKD31rGq4RPuA5GeR3fi6rkKJrh2HQKWpJngMP2YQo2BRD7ki4scYwrYhw9rqWmWxRR",
  "key24": "k9jujqKuqB8f7ABLP7d77mrRrYPzyQUAUz7ZNLLE1Uqxr7BuMbC1FiKswcQxKSeBGDTZjbpwR6AWcVTbj2yRrSC",
  "key25": "44GcbdEM4eE6TvEbzPDaZpMk9TXXcUXcdxo5iLi1A5qgx9oYhxBeyEgEKwPpp6myrFzsCWirmGYUu6ZpGSwW7j1Y",
  "key26": "4UQqUSpLUKjuHcZ6w8baVgKL66G7FWN9TvmHF86wGGsi7pKBgB1Sz7vBgfdDYeMV6iWcyzYB3cdoZLNEKuNrCVL2",
  "key27": "4rQ1AVpzDp6przc9vKNZnSNN995xG3kebiSQcYUWd2yqRQzsTnD6MUnJcA3DeWBAWkWPneUo3ijH9cgHkrhsQbc7",
  "key28": "t5DRoamqn87UJRRoYS7fW22xZGkcv8VJ6NvVfRudekVuSoBciE2fgaUzD4a7h3t6M2pUMmniwQkB34puuT7Kqmr",
  "key29": "2hLbwoCQsh2Lb1LSjtVqdVF7LztbyX6CNqWFSdp6w1fKP1XHEWXhnAT9Hu32Fy5yJmC8QzgT7QETXBq7uvMVMX8R",
  "key30": "2v1NBuDLeCcUyoMbbkmHQKJTupgsw2ioF2vfYFiTHcXd4JhBR8rhPqBdAddr7YQoNXNV95tdATDwptnJuRrfQ2WV",
  "key31": "3HVj6CqdTQYA1ZUPji8sKP5ZAquAwRaopUKgU86ZU7JTSYFjEfL7nPdPnPhHPtnsMWqYxtCDvfyBQ8d9bJtL69VL",
  "key32": "5Xez2axB8jaULi62qMNqTFv4s6RS96fQbGMd8iuLha8mxceXfoBrUHBwTj6kHenPMyUsT64KZvK9NyCLmRcpzJco",
  "key33": "gTQjZwm8GayndCtWThQvSE1HjDXHFJi8E1EzQ3jhFguEcXFZnbzJPM1fFSHPviia7SEptTNY2GNRxBTkNnbDUHh",
  "key34": "5dCtsZwg9bzNgbrLhXUBa5ojfwP3WoRxG7xttA6Re7eQ3cVS4WybY3NAQP6yhLTEnSVQVuu9NKMGLnATcjbMtx2c",
  "key35": "535WRz5Cxrak3EYhJxkp2MSugHXudtwSrdvD377uVRLFhgZ3EfGYQsFgpFKpGjLRDn9d3wQP6Dwh1a3hR6JjfUfW",
  "key36": "GD9xSfACafZseU1XGPo41LcWXJC5dwnNBbaZJzEzX4xB8ZNNiqX82QLuVkYMeHRiGNozvLqQhfWfqaU5LYWJbHi",
  "key37": "2MJwG7vrJGXf1ADbKp6QeV1ssoinAKGLSH9woeVv2vU51qUVGdFPT3QnKs1uR4QQbe5774JLrcinTEM6yNrVGFae",
  "key38": "4ktEbXT2XyuMi5XssdkNJFSVwpKfwdUrJ1u89StawxxxEj8o8VaBMgRwtquE5o1VBYJ2RLQgK2kb41HSALDCP9yZ",
  "key39": "4RW3SMrtHeGWiujMW9UiB8hVKynWZunYQ4MkkY3Aeh4RW5mSxaTmow7BvRh2sRmdVYYeeXxMqiZkbi573yK5kuVG",
  "key40": "5DDqP6WZmyhkqWrtKZ2VEFaCaGnHNbYTyDEGLVP6rTWTero45yTsY9McfWd6yt5osiRSuCSPa1aeh4wm9HeGkNcz",
  "key41": "4AZd4vEwuUqBMx7fgdX3Yydj6vDFuixjJAjtR39zBtui6ma67esB6ABrFHjCnWYiJ2AB1p69qAb81z3q3dt5eTS",
  "key42": "5744T6LDvk9eGokJKEhwLkbv41os4EPopR43JC4BWectGG7hJhCnzWR7VCdh94kckayQpcXvj1iQA3fuAQmuSYpe",
  "key43": "2SzVqsoSMxS7c2g7iccBzyEXmCK556V8BepQcNySLBQdtQJ2qHygEbw3GrD4BUbnA6X1rsW7dWbZipxpKErDqYgp",
  "key44": "3ygbZFKeb2HoesMhNQcaKnsUC4Rg3T6m9M6vfhVguW2EWQTTLbFfztDKhw9JwEzDkaCViMWGcic6aDih2Wfshf7b",
  "key45": "wVkknX2Nh5fYSsY2SSmT2Jz6HqEudZjiV8HwPA2GpGKjPKBZNFW7wuYTauzccMmvDBdzZt7E3omvik7raQ9p39T",
  "key46": "5rgDYJw1NFLYzXmWNyMsnLVwZRWAt9FY522BxxPu2frymsUdeX3pnQi5Y4Z6bLnGahqoKVZPqSNbfYejihg2PKyw",
  "key47": "51rMDRCunzfjsxmEVMf54qKK9At9J5knVR9R1rLc9Y7EjxYPEKaLX7zczjheS1PyT8B1GKgyfmrbpTPJzezM8LW7"
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
