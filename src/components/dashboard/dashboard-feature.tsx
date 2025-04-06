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
    "869LA5WUxsVhmMZcpRmpS7xtodtvmZDx7RVMpdYuCXtcAfTQefssvh1n8Pa1kBPvQp33ZaJaAQbM1jLLRq8PFV9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53u5xmZi674n62erLUUDR3QjzzFaFDioNSjKUPRY55SQC2B3FYdwmWEaAYg6yAJiznoAdFeTGoHAxrFxucfAmAuJ",
  "key1": "2smpYaM3CStEZvvBFWZudN5WvGFRbdrFjtXBGpZmB9hgZ1KjYnJPs3EcNoJiaidFTm46TwokjAnQJtB118en4jup",
  "key2": "5qiaCYGQdVjxdpFVQbibXuRVtQHuL1XHUw1PiUrfide5tdZhfoUUGmxjVhUv2a7JvexjumA69Z2pvYAaMaRDnZY9",
  "key3": "49KxPufD1d521Nv1i93VUpFyHPgGdbY1Cw7WCdB4WsgB9XxDFBCAK92Zi7GZtVCuEBJ8AjMofXsSRL52oKh5e1oW",
  "key4": "62Efd6mQx311bWWMUCASH6K8zE5ZJA45cvLhFWRSH5HAxoKJuLHxh9QkXFHAY3opHaiZUj8apCNuwaidS4jCHmF6",
  "key5": "aQDnY9WVXScuCF5tdpHHTUkxt4BoNmq2U1hgwAAN1zJnW2NheV1Ni7ELkG75Kt21VX5mTYfyBYAsDbzpCc4H7YW",
  "key6": "32wBDgsf7MWbr9iZyxA96eYafvULUaKY8WJf1zjEtSZLokj8E1JWHXGysMmAZPgj3veSFwcfFGdnmoix8x1RMs4d",
  "key7": "5xGWmfCaHxcfTWinwwwR7nXNSjrEeaPirDnRSf3cqy9ZwX5wEhgXVPP3Jv7f4GzPUB9x8T2jBLQc4DDXm7Qj5wSW",
  "key8": "4BeS5yLujH2C6nZ3PeicFmXKAGrJSMfQLrpGseRNQxrRET551RGpTRkf5TNv9iKDvmDEnYJw7Sk3i7hkLnEe5q7s",
  "key9": "28Wmham8hfQAiYkRN77YkjbpWHhuBUNUcqsBauJNd8HR2jqugCogQequQiHBKJd8R5cnJEEX4vorNxU237GC5sKs",
  "key10": "54Vv8HB9gL3DiQnwgbAkSuTiB1U8RX2pRAAYt45KL3vAuSWWYK29vYk2xZLFqwGYPj832ZfcveTY4o72HS52trHJ",
  "key11": "5KkJFY76toxV5baCkSFReWxkETfmQusEXn2HCN8SR34DLjPfszr2SBXA63xfYwz6ropU1EJD4oRjsvFkNH5kpKjv",
  "key12": "4xQ9gx7bwPE1PTc6wuvxNP2zQNcyZAQfwUrAfNNquzEDZ4K4r68Ap8RrvFYeCCXegUK52kmiiCqJnqZRnFqj4DXq",
  "key13": "5cXw6bZj3acVmcGpWcLZhYanocaTRCp4YU5uC9W5fS22zyY7zy2KKpt6LEceeDR9cPQvipcs4FbZwR4dQ3msJNHk",
  "key14": "37KF8YV71NAUcXNnrs1G3Cf8xxpXsjBj57UmaitKKgmMGXUpZX93yuo9XWiVo67ENTvSMg3UqvtYKoj7nA3BgDJq",
  "key15": "64kDAhVms5nL4jjt7kgNCk1dTNg1SJviZziKPrw2bfuqYaCkodpTReY9JBHk8pAGuxkd1ZGJ63ZQ98WtHrsiYFKY",
  "key16": "3QBJEvDo24mLNMe3iFTiNHH7CLo5xzFE2cQugjrxS72gNEJ9PHbXz2vjYWQ7zTxhaJheouwVYsSt8AxZEGd32ZbG",
  "key17": "5GqGyjM4qsCpe1puFsniK4H8sKsLgNyTM1FcBu573HhNZwwg5ewziR6j1Y91ofPG7wF61YaCx78YRdr32d4aFNrk",
  "key18": "xAfT1Pi9weQJ9e6vf1LqJdJgpNM7hvK14P6e8HHcfaGviH8weVtmqdQwUP2FfkmuUXmq8dHizWKMf73kuk1evai",
  "key19": "6GKojeeFKwr6fwYyYmZi2wXwkpbRspMxM3gqrSDj9afnxi8DAAjcmtzaxd5rjGMGxzdCk2Zd3KziaLLQkgwNyKC",
  "key20": "54qcG7fGip2cGgkLuGfLWxJnn5b1155NcSa4YjAZZxGEv1AbUweK2i9RmRPnKbUtjPsrwPTem4GspHHpqDxyYZdC",
  "key21": "5pmsgWsYuMhTcSxgMVrhiXmqknkQEbGe6JXJE2WBskAbDa2kfntZyHRNiYQQCivTkxbNzo5KJLxf79tRgQTbPAcM",
  "key22": "PHsd8VMEHL27sz2XdZ1wxWAKnN9upyBVSbwbZd8iZff7vGZ1drfKj5ag8CgBtaQyKE6zUwvnB6fjKE432XFDGYQ",
  "key23": "21RajVib9VbngFBd5eeaLqNsgG72iatMTbdRfjS8iguzHZ1Asfb68fB4hBtJAVrJdR9oZVXeQSSi7JAdxfqrEk4n",
  "key24": "2oRVdYZLPYDT2UN2ut78NH2iduZ9jStDEQdNo3G2JZ5PSftBpFLspTHu3SPKrEdQsyJ1Tm3zSe6XxPiusisxfTeW",
  "key25": "4kQTit5H9k4DGzFP7rLYB96z8RnjzBqUpVAw9cen3qp3zfactv8TbWGaTri7w6vZF2gLZUmxP3UMsr9AvLNCE15Z",
  "key26": "3AUzY7JbCJ5KQQaHzMLGVTHkA3FASYd1v4mUV17vCUiGqtV3Z8Jr5JngGYFr8xqp4R9EGKjxuxrR3iKYtj4u8khL",
  "key27": "53KEvvBHaMyLFcxU1KPLbNbtpv3HZjyoNiD2LznqyMZ5emKCeudQ51XeZoYUZW7ePKJVX6xS8A7fdnkjFqW4EZ86",
  "key28": "2vGNenEhtDeWJMkWNQvPggM3CZPYz3RDgV4dF7JuhDTPC7LKHxj4M9GdLLxTFcbd7mwxBJoug7UPkMcyPWkco8Lx",
  "key29": "3QXvgznKX8NqzwebXEAauhsEgmjuQWmKE7nFaLJRBjER8ukGjZHwQfs4r3S26BCjjinPNCp7JyDic6nyZxr5R1km",
  "key30": "59DuUmkosUL7pcsmjdKuAvAq6RimmmL8Ar1btCkvKrEg6jhdLBNruneGhFoqDbfD3t5ksUr9PQoPAFjkvEmwhdq2",
  "key31": "Vcd1z6nVH1Hi8Yb4CuQxRTZcnRj5DVfbQMjzwGBs8FFhZ2pdkzMbmRy6DTyCRJ1b4EUXs4x6uYg5TPopcByN5YC",
  "key32": "63EwfCL9MYZTPZUHFeLRvd7U713rsdjJUFhuGgkep36ASsdQPbVuQus25Xwxq6jCcKGV1xhXk1eQb8F2c9gUdHck",
  "key33": "22oyyUsNJ8Gmym72sjzZQz4UCvB2fwYWGwaCVpo79iBB5daHbPB6PcEu1cfrSv1vNQANGP4GLz7yUN9UpiuBDQYw",
  "key34": "2d46gu4n6HLcLhniWaBz1y5fNsEJSbXyM2CdfRfhXL3d456eBqhUTiXFrcDBduanHYsfYTG34NRVSazn6kjjLfmQ",
  "key35": "2o4y5YUp3KGeeSGHYiThkgwqKy8ExjJXwB3XcaUXQPGXLALkW8z2bYiwchmRrKptxb71AzRmSGwUXTXjw7W2nK3J",
  "key36": "5MRJzNbm8isAB4UArdwAtZEjuWDmzt7B1GZNhHF2VH5ZmudronFbFW4Es3LnW3emP6E5AvC4xdG5go56b43gCiG"
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
