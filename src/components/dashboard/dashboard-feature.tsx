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
    "22u7eU11Zpt241GmvyQxUkE8etGBsp6eZWtVZ9a8TAWxUf7DKZwSMzYkMgUznUQyMAZjaz7SKf24kj1oSaKDpYit"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Bvn35J1UKM1tKpq74jSCXuYwR1q7imUVmbzhNHXTvQSgBGbTXXtNcE91sDUeZ1k56NJDP97xNSDq6ZtwAvtS57C",
  "key1": "32RiVyAg4V2dMRcUTDnKH3wVPD38dwCT9257iU4Kw7wbmzmcQJDpNfQhr2mrL5VY2VVxSqZpbBEEckSssMnUNZoc",
  "key2": "ytRTuNt6jqcxg7KYpBrPdsr7K6unY5A4bPjzc7iQq7dqmkX7wuaNp1XNV8BJyVqp4knyeSqfieGMy2iusCVZuHS",
  "key3": "4D6jo4CkBxGhf8kkedfp3agJHSDeBwaS4G91QQB8ya2Ai4KAHyVQwSKU8EtkTkNJCo8QzTwk76JMvFfxSfGJM3PC",
  "key4": "dvpP2udg4y7JDhJxT3muYZsJzqsyxtbjmTJAUAv6QgWokgfWsQkjz5oKec6pRiTaftxCHF2WZePSZsPJ5y5rgGw",
  "key5": "3HZf8Bavw5bWA18vkfvpcPxveNZpg7MhkSYD9fPz7BqtShPJVH1bcLcfmEMtHUNxdQs8eTfhw1pbUqd9Eyn4C4Gk",
  "key6": "xRPsAPg68V1qrYEQkXgx81gpZ8YLuv3wm4nzMBSaJUb5Bj6YxLmysHrZ9Mj3psRW8JSvKMNnz8KRzBqCHhLL5Lc",
  "key7": "5Cq4Fatu9Bbjo7z7uF7PaUad3oH5nXYDkg3ERyjy1YR9YxupUYYTweYn3ESxah5BbthDUrVZj9kMYozeWw3DcoE5",
  "key8": "z3VQcdS6ML8aZeWf7LXdcETzwVZDoACmfnLM2ZCcUWZZ3JdktXWTgQcaCkf8QgBWiFhFMTak7NUMYCBs37kq5Ly",
  "key9": "3LNUu47J8SypGYDV5EAikBQixY7FwDkggfdFezoPzVAnjaudkd3EsERxq65onVRRapz9vTGrT8haFj6AoAwmbPq5",
  "key10": "5vCMtigk4Tiewr6cWT2uuBSfa1NF7rp4Q8TXcnchkEcsNuz1ygQowRvLnCW8RC1KLXDwLQKbw16GarnPsx7QzbHL",
  "key11": "37zwCcUNHdFUuYmUjWmfTrqdvYuxYHYsiFUsoHSGGfsmW5gKpXBxLv7A6Lu1a3znDX3LcmFeie2P6Ai7SwN6z4ui",
  "key12": "3cs8DWRonyQarrUrgv7Vn84reLNDF5PHBmKBYTNKnatMA4EfcKtkRyAbR5ApJZPJbAF3T1z53DHHCDqYfELjsQxa",
  "key13": "5m562s3zwf6qoNX9wj4NFtBESeVDQF7QXUSQv5RWxAHUFzrSabBTCQVqeoV5579MZuK6A9MmjJgrJs6pty7BcQ22",
  "key14": "5H7CkEacRYgVaXDfQBc6zVk3PBhkXwV1foDreEMZMk2tVsWKRhvbYtReJAXzP47BMswbonUTL7Jhe57sRR63BpaN",
  "key15": "4PzU8m4T8CyitwaG2GsrDcUAkrWeXFkiP7q2hfArjMnCxa6EfEm2KxbkjryM8VZXdqjCF6q8XA9MBWmpdziKpeC2",
  "key16": "diRykwxneGY9G9xsFPAEwwSZrKqoBJ4qWZUQnFEbdMQW138eNpn3m7VM9oKqJRUKdiVeKwZ1tp6GgncQgy2cnTY",
  "key17": "2vBFnthxTeKGU6FCBZ1LKCAXsuwfPnRzYE2wy1zLe7pp17avkwtv2ZR1B5V4rznR5uf6h2Vi4vb7KTVQ7SAQEiCc",
  "key18": "4QAo49C2LVDN97BA25tYr4KGhdgSj1Gv4iR9MEggpRpSyZv2Nw6Fvf2bW3n6nUuGMKHEJgymJnMMQ9Y7jKZX1d46",
  "key19": "2X25Uz3coymB4wP2yrTA79dh46wDB9h34nyyFoECX4G7a9pPhjJd48tLpA6ymzuiC4j4aMReZ4znwtb2ihPsZaQR",
  "key20": "3FL65yYc1qzGh2veB2LnBYqe6DCwPcmKb8DdZaS1uaxF4VrP2aHpC5w2RXZE1xruHAXwATKWaoPVRZAbhj8pW28d",
  "key21": "qbvDh1s2Cvrah3RWcFXC4LfPotWp4kDnV3vmkRk3Eaza5Lx3QvBTgzB5efT86MBCvG65RnKyBdUPtcpnEtzNXvM",
  "key22": "61h53o7UGccnpnByhQvfdMSQ4nYHdZEYoF56UbE7ahMNxxKVM7REgLoBAo18iteW3JCu1iBt5K1M6spGLqLjLcQu",
  "key23": "u4CWcUD47g8FDwJosjRio8QMeEZrB27MHKgFXbe47JqcKmAB5C4CsCrci4DVqu8aPErNMQeFfENa4HEb2nw1jV5",
  "key24": "3mT9QiSe3hwQcD4wj18mzVujfbd8PUvDgJiKGGovbN24JcFVwt4X236m51GnKwoC2pCjhP2nQZ5mtoZyfvagoFzS",
  "key25": "4GHCrZ5rHc6Z8o1Y2NziWLHC2L9YVjrb4vgpX9d7YSBd5XVgDi9D7nVdkv2xqpKdAthA57TiNVTdJwWrvWAkVc8b",
  "key26": "54wGkRivy1msxQzsBnBNwc15tQd4otuCXE27Cw9KMcN74FBZvKJvTVJxCjAsRD9Yw1gW5HfxNPwERM45YghB8hKh",
  "key27": "5ZY4arhnakNrkMP8MoRnz4fqN6XvxLxxydghFkika493T51HP8up3Wh1LX7Be85q3CvAeFzbxpNiWGKo5ai9cQ8m",
  "key28": "3rWthAN5zCXeuHgWbJHcT7qxiYLvABfW8BvLA9iC8CmSXfjX5Pvt6dC5xzBAGnH1Pefj8cSPvfW6LfVSEKEXBG5e",
  "key29": "3DNZcmZCBATg7qDqnVWKZ6UtSvseVCfBmyAkvwczZitWkPE26hxuUnG8K57n1YX824aWsK2SsvXVwhxwEFKiYayV",
  "key30": "2QiMaGDuRo7rBfyQDophiacVSzeQaCnHq6Yr5xf2568YnczHT7ifLAXBMuKDLxE2AkgQXASGhHPc5q1DbAkHANGC",
  "key31": "DEoVu2JnC4rr2vnUtKwERg1pGaipqpVgnkFmp3nuD1UKEfv4XzwanqvfovmWnRa5cEDc4fCpytQeqFRncuyRe87",
  "key32": "5FfWbz9V2UYYtwjbeXo9QRExzSLWhjRcBESUjSRkWykkRm4FXAFNxwMGi9nxrQaiG5LD5tngJq3iUZRwN4Ut3xNW",
  "key33": "21QTuw6HnT4WNcw2huwQmsqomf5k9uMcnEskQVdZShFn7JEVCPveBWswNJ3n72nBaPAb6rWb4RpAK2kJSBx837Wz",
  "key34": "5ytq37c3zFhSYkJYechpFETb6ef5aGoCnhoPVpZjWmLoHTsf7np8n8H7e9EVnztKDAKDZGsoYgCXLmJyL6cpWYYx",
  "key35": "3TmNFWhDZUEXLkuMJrd35afVV8cGR28H67QNHwNrTQXpfk4TQG2Auqqe7uZSDs7z1MdzbJVzeHU8CQy3iZRfL911",
  "key36": "3VxMfqCFWAjRP3GePhgF8qxaPXtD4fUS1rLwDj6Bno1t2yHbdKGNVJH8KLbQZU3mdkDxGuw5GwUL48bjEQ4Zy9Kh",
  "key37": "5xDPYaAzjiF1hFDNMp1bFm3ejv9j1fpkDgHUUCZ4fuB96vS62Q6PzQ7f2G53VicRMrppZKPMBC2Vcz12aYqKz7yE",
  "key38": "4nBtofUSGdWKDQCrMuawns8JQKRJbc31WRuZ9R5YwiDzvpXZzKaNNAo9zAxZDKeCx374nmAuSmeEF4Wu3nqpHe78",
  "key39": "3aY73a62vpzPoSrmSdmZpA9dNBRz9JhxjzhhDXEYLMjnRbm7WtMuhFyxJb8snJu8Jc9cABPwfXzt5cR68knv6CLo",
  "key40": "3ShoRxe9dYtEzo4yrbryhVdaU8XQZ1HgtNEjZsmDDrUTKrAN4rMqwBd2MKdAT7WiYq19kEC7Q8YBmLgjxbG8TcR2",
  "key41": "3UEPbp7w9TcPAeMqjPpSKc5z5FhKWFxX2FHWrz1P8LbYcMGTGRqafZD4TrWjfr8BvQWs2ZE3ny8UMq2Dkk9ZHyBK",
  "key42": "4Qjs4YFEED77sktj41qCAzcTk8Myw4Gno8W3QHADETWS2wpResjfVr3ZPtXyaf1XhFzsmqc6aHNbmN3BP61wD8Aj",
  "key43": "247UawmCHkPmATvMhhVhxTt4LAiJTB3dyjutD9Tg6A1piWx45DVGgDxQWs3gjdaYhewAnEKugqsBzyGzXyvD6jW8"
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
