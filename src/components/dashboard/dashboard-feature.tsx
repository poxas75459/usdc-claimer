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
    "2BUSTh7nbXeNYhuLRjFFWTMR8LB9grZrQBwPn2EwYVQ5m3V8ormEoZMaMcQzVuTLmdhZwfRdbMhNsTnZ7h62HYKx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tmT1RyjPBkwD6iSxLWWCw3rHmFzRfTNXwdZfoG9Y35ddQBg5oeymBXiguT4zGmf46PxVRhmaxpDQrymmFTf88XY",
  "key1": "2qFSo29Jk9QX949h6NvXFSvHxS5W2HPLD25if6D1PHbpws7v9vsjXuQN3CPY8EfViyNacJynYremfrwhVaCVgBy2",
  "key2": "sc1eTz77CchsM3NVL3nVGKfRtjAgYtFiipDa5CayWLrUFgVFz1d6CGr5ZV1CrBe48NjeBTnRhpLUVr84RXRBvhL",
  "key3": "4KraQYSkoinQHY4gGCYnarAAhLPWbF8zTZnGCqgWXASZPcNSvfFUbYAup8sLJY8EjM1QQeNbV8cZKESUQq1pHcsH",
  "key4": "3GMpjBj7di2Np2kqLUSXQUFzwGL44PQTqrug4PRrTMagKVg66rjApkP5J3aSeRoHfq2kJFF3gxMPxz1eDKaVudCi",
  "key5": "4XqbjKttqY4SazZSvR48ejTrp6dQeXtiaRz7AYyd3nqxppye57g11x7HBR43VxDK7BJaTcmRGQLNrtQVZpXqn3HS",
  "key6": "5axZAKPg1QFnR4iVEspNRvHEq2fe59wHbAEvdqndAyrrjN6jC6eoqQfUgFstRbva3jB4GbKTkqRcuk2QG4uXwwAY",
  "key7": "Rqs6T8o7d8PE2m7xqdCS624G8bBMQjrLWgWEsRm49Yv9W6okKhHDH1NGMjSySB9R6H8YYLd63GC2Cn2F4uwHgWK",
  "key8": "4HzpXx7oJ2HrQEFjkLvaDdU2LF1xyLQwziSEFimU6vkLQVysEzyTa1N127Pm4T8R33N6BQURLui8vnjEeJ9GfW2m",
  "key9": "2bowGMqB5teYY7dvzqAnkqjMFBcheVLKQdqDSKDZWcCMugdSx76rmuqrjZ693Mpp5dHZpon8dc8raRg2tTmxEuhP",
  "key10": "5hmB7fhDtTGVaLvZA6MYEJW8sCUhEWbSb1VjLgfnoXGSNA8nXQ6vJX1deGGs46KfLFQGFrGgp2SH9UsPAzxo9rnq",
  "key11": "31Tu3zFfDVZEPsGnUhrsau5wE6DLCwX32WJ4qnJPJtCfGibYWHy7r51WFMpMXkyiKNEFpg7eRSeMGBs5HjwssWkd",
  "key12": "2tZwFdukvTXkMuSjAwii8jjKu4Fi9jSHreKYKvL9GHHPRJSoTTULSeGNMbxqjn6sH1Da9LdNLJNn7pR2wsEfEG5z",
  "key13": "widEkush9Ng58pkCKecxFDyDzKrDnDzveN2RSYAvsGx9HpLdsSJAdkpG2MJkHAqasnFYZetxcXg8GU8P3reuuf4",
  "key14": "4QeEhBsEnGZ7eArFW5NcZ4uibJ6F6ungmK62aiU2FSnbxDRbuHFZJ56WYCQNSi5HQ6BrThhZ2igJ582Kd6Abfo4i",
  "key15": "5HEWHRoLpKUVE1oSpAiwJeg1Wb1S4dobfcBnWvGJwjxQ8c2NZjHZs4dicUmC7PjwCBdmWkVNWPtXi98k2sdWs3aE",
  "key16": "4THZQAixGXzWjMuhnaPw9dvxEwzVpXsHyKuB1TpcqWpRuDz34bMZqvBxT8CWykm2iar9im2G1BScTTL1a9nsmvUD",
  "key17": "3csSaMUDCUna8K29oszrdWF4aeNygDMEPD26sszE73fpCPisXGEyXMF2HRteAmwhaMYGfmm6f3hDnG7UDKP4rwiS",
  "key18": "2HeRGGqbbuJaFZsHgLsWUW5izqZA3qegnV8ZB9p8AXZtgk7St71d7x9UdBoCCUfq2A5MLt74XnwKHoWBVT4DLM44",
  "key19": "5VTvC1mHe8P2sqGq8PYh46G78cGRcwrK4tstAotXRS3XDq2ajyYjvonurBeNSjRbTRK9Ufti4PLmdECY3KwjewhQ",
  "key20": "3RZSwWKoK3NxZGTgpHgNdnY3Sj4LQRngLWfTu6Sp1pioaE5umqoYaPH1TNKpMqhAMgH7vfkS2aGWcSSuSCd6y3Ln",
  "key21": "2aPVB34XfTw6WA9BukDvyFMzXDDzxr36McbXKRrV1LpZj9nLiCrmAY3ZkWuckMiUmxfh9uAkUmQ71C68u7aWW3e4",
  "key22": "fNgHBwRNwwEAJ3mARmsbf3RySvwffraMQw7dFuTi71Msgce95yasf4jssg2aA2Ze7dHzJGHNwdm6gWvFwHyrQAF",
  "key23": "4yW4Wv3hSV5V3W737rm2UXb2USREU1Xx6GPeVWDcciePvouD1kY6G6Q4TKaTgTHbGK9zjbtTPPfBJmeJEfD9s2pZ",
  "key24": "5pgWB85ARauEzbK6oQYa9pzW569r6fxq938U3tjNS45E4Ck9CdZJpU1gJmDaE1HGZknGA3bfV8xYLM4UrSVDUwGw",
  "key25": "52HRj9ZFfUjsgwEJ6hKEg9fUUdrazASKNzGcxhC8CpAdBCb64pnc7hxg5MMn6PJq9ye5XeBjmh6azBxmURY12vy5",
  "key26": "2DbLwohEuTgZ55WCm6Zv5KdJ2CJitjM3YW3Rynu66PUuFvswECM2PxWSo9NCpAmu8axc42D9CoHARqgHHq5BgzEZ",
  "key27": "2YoutKu2N5avy3YsPfprMBCC1HEnWT6U9Xow9NdcgrPbKRnXae2Y1Md6SJvTopiea2EMraafCeLnxfv4vQMohpsD",
  "key28": "3GWtuJkwkFKekXvtHjX9R5eQHjQh7XdbHTxBwszgC7ey1212nMSVL5rzTzwsMfQ6W9tKUbSC2s7Fgsxb59tkW1o2",
  "key29": "4AQduEGct4T96JszCb51JY4h9hrE2V41d3CFq8xUeKAdxcpqwQA739Hg289kK1WvN3bkr3v61Wy4dPthNZ4fmjh9",
  "key30": "65AEq5xjzoioaG83iRs3qsXyQEkb4G6uBxWqSmWkgVFGZgcaiDFegkBAeusX6Q99hPnhrLZFeLp8G5aTn3Creeca",
  "key31": "45h4WRhFWETfQWH57TUW3Kq1Tr7teiZP8HeQQQeHyBwX5PBm3FKtoT3Wyvt1Yi8sjmc3JQmWJzyqdByW6aa2E5wG",
  "key32": "2FLKMRk4Bc5xT7VqxUADgUgeuFq1KYnPjdNxXzCQUzWV782AnBa9d1mM7NaKucUZon34pZ7j8mrQbcWFrMmEoUzc",
  "key33": "47N7z1G2u33Ny5ePS7SsxeeYfoX8Wbt3fqvfcLwZJheeByJ8RK2ZoCwcVnGdTHDZBk5ADoVaLWiG95NnMHX8iQNs",
  "key34": "uobpBHZ9cZZiTNJjjijkEsgdhCq8DFM1FzXf3TTnZerdUrpwKEs2fMFmhKP84S7pQ2gZrnhGbqLxjmxsaQx2zei",
  "key35": "4P1ep5yCneRVgwBDaDUfksCLcky2unuj5ehrYgmTZit3yhzn8qiEHrYsUsmV41u5qTp8F3RyLM8jyX17s83VAR14",
  "key36": "SDU8Um3QX7ij8YXVXP8ZSsiNtH5a36PffRcYwiHZNEdyvqTe8R1DYb7EzofZErhyugk6agv62cjAYRR6GoBbxTA",
  "key37": "5jbJtKdecMZT4o4PwgL6fLzPggeWgoiNHEtSBGaUkW44SnC43o8xL2qHFVLcEaKYnX7nY14jHyef1BmChMcGXVqw",
  "key38": "365hZ4rtcAQo5NTuWsNwT4wiPpqmiC8zFZfJhCNBFjT3wY4fgaK2EzAGorH3sWL8Q9Kne14UzrixewQqeVvrCC4L",
  "key39": "53JxjsCoRiDWCXfbZZdCAKWou746qEFzpJtB7QoGWaVAni2KgQ2quYWKgShDKiHf6vt6tgQeeXhRM3LEfpKNqV17",
  "key40": "66Y7mqAMmgGRQdpZcqTuTL1wtLRf8FUKtB1mdmdafyHfudXvDpgRdQquGNGxwVP6crXxdcQdZZGAEZZBLnKBH5vQ",
  "key41": "DKHj2Dv2YXaMmpeJ69VDyoJ5VEq8GRKcL2CRHbF6yVTANFpMnEU4p2fewfC7kRWMquopCkjaBjDgygJzRNdysMY",
  "key42": "2H3QHRNYaxckCzpKNUTF9vXZFVVZq96CnAWoWGW2eah2gT8TVMa4MzhH1Q4gMkJYS5aahKjWFTZpvwmRttPYKWnM",
  "key43": "icGss5ywCJmK41ozNPdJyH49nmHeyqPoVmnjBh7y5zGheo4mJY8mes9GFjhBP8G2u38hSkHuhQ83Sh4HS1XT1Rh",
  "key44": "4xa9n3ZGjr1L2nyg9qp3dFbFrPXNjZd8q7Gf21T2rX697g8LYrPWC2ecp5NaUMUR5TXUZKXidtRxFGWSjUeBqXZa"
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
