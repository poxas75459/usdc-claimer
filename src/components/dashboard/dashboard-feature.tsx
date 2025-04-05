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
    "55mkNhCbDyhxnib7LgXzPEd6m9kEkSPG7jLGt6eT9LmrEahHBhT7R47WKDnBLbfxNnzRfFHea1NhsEd8Y3ATQqFu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ewnPo2Lr2fAhtrfKQngh2PgscizWAp43u31Lx8oNddRw7Q14mQtCb42PjBmcVUaeLn8UvsLpng6KX5PnMMr284T",
  "key1": "2wCPFD3ExmbYx91keyVPY6SuRLeeQQq4de9qUVQvrugNwMiqaR37PsPDfHCNuzSmxFtpqxazDF84TJaaRuVhdaq9",
  "key2": "4LetjcxJ5p4uSJBtHjVqEnaTeXmXst8bhR2cU78j1hrPbEN2enktPKBVNygAnWAf86bSZimn1hpELXFJP4cGRwYv",
  "key3": "2n9VE56Cb6ZmjkwiFutD8G624qyquxjvREi1iDXdaPKS14pXRzoLHPFNWhWjSnfo7ZWpY2WZVzksyJs8KdkScdXN",
  "key4": "4Qr2Ny9fW1d3AnTffuWnbeLVhAnfgDnrMxPA4zvFkJeR6eNBbzU6kuTgiuUAbzoca3whNvQnSmaCpMewwCCfgkUN",
  "key5": "5YfJpHfJWs7fgzJZdjrDzK5gx9qeJLXfoMnBWngs6FQyUHH1fgxZLbh9dwDyFj8kuwX3Bme4cdrFxEfAbCD2Kfcw",
  "key6": "5BQR1VAgqXDvtLfhMXYNKrH5aWyyamJ2Z8u8XBvjqg7ryQHK6EdTzYim82oXsUYtB5HXW9it4BmhXnfUKLLC717C",
  "key7": "5fXiAZn9cQvdohgwKH5CogitEiFmEvFyQTTj1bWMDwwFwposGtKtAYbCWvb1hXqgZ7HpG4HtsFB6ih6AHozUsS71",
  "key8": "56d2A43yC4YqzqobrSfZW8gp3LukEfW1zBevSTDyrMzphsJ6PKhhfVhamLs2ThBzng1dkbe99bXYpwNGurpTaGqj",
  "key9": "5wZ3EuPQD1g2VxahdZAnXUqKZ1neeA1XrbXX3MYodX5KmRxec6rD33gsCTGAi4HGehA3f7JHfsTggF1dR2akVPB5",
  "key10": "5727R5SwGVpMchz8fPoLQbL1XbJKEyC2cv8NvqYnLYz6Z8t87uCFG9obf7NfVHaywDmgBGa4CqmP2cAbu4wE3cn3",
  "key11": "66NsXWJ4as8QQKxAcZC71iRj39dta2E957Szpn9pY6yXa39armBttrDD7RQupoBtk6xLeBixYCynx1h5dMYYtj5g",
  "key12": "4qJN4UEwPCJgEyDShpEFEme3RaMsUmRhfy5kH1NVGh57ZWD2D81rXurgYEjyjCk8dfHK4bMoHknH3h41NQ2o8DHM",
  "key13": "5P8KEFeGX2KZueeVJDLcmZQkCJBwvSchD4vzuMT9q4Yztw8fzh2PrZ4NjbG6WoSM1wMzcT8m1Qy86XMyZ3GQyG5m",
  "key14": "344CErKkUaRhmjKGmZWErbTvH1AvBBdikF1r7K2TcmTccf79f7AqdHqJjvzKkmozods6HauSpQ5KYwqBeJ45kb35",
  "key15": "5M4RhgjY7dW5PCgzgoZGeJ3pq4YkxVNggi42EBsi18bHQqCQ1MEXrbSEzjCwVSo96Xvpd6JKFcNRmknHwqTKX5bn",
  "key16": "596adj86jmiUKftGuHhyQd2GYX6cM16pNmJ1oNSWmT7qMKqNW9if5EEYiQ4tJaJafbsMxPovHfM6KddgrzfPcT8",
  "key17": "4ijHpKfbPJc5WdpV1tX2E4N7E7stxZjSxcESmLWsWM2j5S9vD2ZuUARGGdj1aUt15k8w4NP6AvK4WrqUQGcaedD7",
  "key18": "3sefo1mUEL5R1wNN93XgxDsEsSjfsugR9RGBNjVYnBtUsxoAqyvUURRpje4sEroX1JHdA2Q1gtnBdsRqo4q1KP2y",
  "key19": "5HLYtGtuXWB1SsbNYRWEtuioZPErs8fuXBELJwQKgZSjhMyUPoRCq8GHoriJnQjR6VhJ4cdgbkbsV9gz584kFDG1",
  "key20": "4p4ZWAfKrAGxxrcVTBBsntSQCZYsa6CaNP38o1h3ZAJoZDZXYqXdWQrPLgWVh6hvNRCPPttdPPYJNbUe86fSJwxb",
  "key21": "PwoYcvhBEnJTpWJyy7s4MYvBbvyGUqEXQYcjFfw5xBsN4Q2aWc1yYqwEdyzuQMbLAP61UkAvNhwWqR69oq9bLw2",
  "key22": "51McBEbb8BoYZAJcJkJ4PBEvsPiJGo5ixfNTSqKKnMKEfEZuNCXGQMqNtBvaL8hM5bHvBRR1A6NPUC28KtcWrGVX",
  "key23": "4oud6sY7iQzxX2D6QEx2maN1WuDqmdAqT6owYeVT3nFkoikRgpq3YrLCy2SQqR6PW4shLE68Yiqw1em5xsAp62Yf",
  "key24": "dkPWK3iV7y5a11ZaK8bQLsYaAjw67ygD1XBMM97xwPvF5FD3jt9YKbXL6gjGunx5LakMBjCHWbbNdrExqUgQHz3",
  "key25": "2uJeFmATdBPFxrKqQ7nCw51U9mLRLTsgxTeMCZtYowuWmEfTFuWuusDSUGFMnbm8wDab7jBmfwMQEbh5ZdebMCG3",
  "key26": "hGfch8ANgARqAPsPgmwPbYu2hz1gh7F3aUuLK1z9fiavTpQneTGew8MJYMzKgbb6Rbo51KaJQqutEDsZb3sLPQM",
  "key27": "3JyhTdqscLfuUsyZ7E7rv38tdL6E4EVo2BFsSNu4omUuXqVgDgcAjdXdhHoiK9DUdhTeqs277EgBi3H6wAf172Cw",
  "key28": "46vG1hMiBarJzGbPcqSHMSixg87FbCsUgv5xhjUNHxeAfKXw4qjibnq1urooXmm3PRvd9wGNB914VdvxFRUpSQ97",
  "key29": "3pWSfzR8CLR5YFP9TLYWzSHKYqGHM8t6345zMo7WHyszwZe82q4v7vV7mfEjxhQAgGinYDQjfvyHgqPvc6GiDw7X",
  "key30": "DKqLXEDoUBiqf9jKMUz1b2zVuKSnxfvibUz9JD3zEeQYFd7yAH7pcb7mkqc9kmeAqFEbyM4K267YhFkSzWXqjBX",
  "key31": "5beDqJiVtPApUDyVCDkmDtyYWMoDYoi1HMYZxCHNXkjpW8MqRSuDa84zUw4qU7UweiUuWTwmKWC2es8aQY1dfXdX",
  "key32": "2HNy3F3QikjZpJJvyNCHRSmLzzfMTxDwsEChLkoU8aCAajCH93heh5wH6E7b8mn1GBJBbT1ia5awv3AhKajuiMNR",
  "key33": "4JsH28o1sCZEnQ3pXdjS6ZgZvNEXKNzXp9t1ocrL3wi62WfGDUb16Q8yGpTYcgUgFFbWyppCbFMn29DKPQy1xdv3",
  "key34": "myJRWaMC1KA7787qtmNzmA9V2JZsX3Ye7Jz1xi3Cc814UDLBDSPTR3svAkfhCnMKCuZ1QuTTExF4whC4NykZHJ6",
  "key35": "7AHjHkW9wN7oXNzbj9zLjyFdbthjszzRMdpDUVxrGa7XEsQteeaNEora6PCQdYLZVKqQJbwXuT3x8Ae7W1tf6vm",
  "key36": "3b9HHgctHuFMs1BVAYiD5RavuJZFWi9QdndR5YzBW1zHRag8xUknAhSV7AZZ4i4gxCwgqrV8epoiuzzJqXLk5s7r",
  "key37": "4fTWhLjJY6zu8LaBQrM7deK2wibV4G6xYxPTPKnW9yNF4F5paVyQxb1zhHkjvQ4aaC7oazWJ6qmZYARgByAuWnFd",
  "key38": "3X78NSoVQtx4RTEhVBm9M64ftZYUMC5JQMtPQ6NYgsfSNPLGeu8wLMVC2HS6Z3ppbomuduNQw3KVB1foBFUahvSR",
  "key39": "3guWtaGprcDpHM4oacbyXXXYagKucHY5WmW8sc6h626ygs9hp6WurdebQX6GpEGabC4gByocwe4McSBBQUDkXpe6",
  "key40": "2Xkan1uRQ76TLSNeKLi2ygUiExKUBocUTHdxPykcs64p4juwoT1hYrzs7PyPG49DvJxV1dXH3JS7Q8cnWrJpdUm8",
  "key41": "35aqapmsyT4dG4GAxx7XPbXD4xKhvgN1aWtmv7VhNKVxg51f9fFJuDXgkXYn6fEzJ9AkUkLuK6gcK3y2x3U5ucVe",
  "key42": "39iSDtqwRy2abGyWQzzTCEkzfdrULjBimSBGrFvRYiFQALtb56d8W5HPPtjEWbGoB6Agy5zFUqZ3wzSk2m8dL5Fx",
  "key43": "5eFKQU2CqEQhcGqpkSYyNHDep8vBSzZqfLgVH3JsKA4rxgD6Qwic5b3SqeWEeeJ8KJy2hiH3UfERDnUZaaygwLG"
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
