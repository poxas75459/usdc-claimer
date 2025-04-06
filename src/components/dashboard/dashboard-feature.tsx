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
    "5bNDyD5KvC9EjK3c38xKxMqKFP8J4Fx89Zytwbt7ACULatkmwUeKLrNVNYPwbVU8jUycLnDdA4mp5bM5QysjGEpB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39ehnaeA3hmaHsUgMr9podrpWk9Gk3KMj46txH5YTMYA8iTBrrUSk7PgeYVSqYgUKzdWKWTJ6feXVYzD92sbyTTt",
  "key1": "2WARmMF6sW2VvPvKHb6TeyVQc2PNvBxLcXY53myqqJykK6NXXU6pvRLUBPW9Dse7QzxGsV3MR1pmMF2jRpHEC3f1",
  "key2": "EmTn5sNQCkFtUbbuZJx6afu3fSNwsbRweS3iEK9dTotaTsW8toqJaBjPZxDMSjCUFiXb1JooEGpLapU1r4dvPe9",
  "key3": "3vDuGKBoZ8yPU58nt6jvmSHGB5a8yKKAT6fbJBe2ZvYMeBC2WS1iKJamE99J9TtnrASYb66i4PT7WzQXykSHurbb",
  "key4": "5jj58CLQ5Rekf4qhtqUtrFTPNApSvM4Tx3ZsAE1U48eyuboe2SeAxxpeX2PFPHHjLjKCa3TGqms5sE2VzHXWSJZ4",
  "key5": "c7S916SU7ifkkj9fHaseNT4P47WpHYkd8kpskdwPAUtofhufb9EqzKMz1zRft1c7vshrHXpmKF3m4z7sPmrB894",
  "key6": "5JQkj7joy2U2XchyDv6uNKYZfHZbsTgHiVWa5LcAWZoftU2zjdRkuPQXLFxZVkLkJdEYKRvUYUuYY3DmBKBRGifz",
  "key7": "3dg6msXftHGEsJdsjcHaNdNstB1x7MepTuMuVqdj6nPdKiooGj4VB2RLeWr7KWG7CiJLahDJ9DBVQnXS5WYqYmDj",
  "key8": "3bRcoZrfxthiyv9DGVqP8yvjX4bgw1PRgDisP7mbDdeuhLm7UVheGJzPxwnXXkTmaBRoadL6pyEM8nhXJAhJVtsY",
  "key9": "53YM6FJWB6wgdrCqKTJ39iTSebe9Df52w1gXxQwwAaPpAjyWnkZfere4KLx6JKhq5uuZaqzMoDDHkNS37Xeg6suz",
  "key10": "4viw92ZqFweC6wKuXVJ4vxWHKQA291Njoj7nSyVoJ17Kz1Vtp3zKtLzgQvMPPEf7SawVSQBgdAitBPcRd6AVhCZq",
  "key11": "ZM7PAdvhNeQToNhytW9rSkwCWdhnsp7kDnwP8Sq1oyygKxL7cY87B3PBWtkgJywXupvXqJqj96qBRNreKWMe2xc",
  "key12": "38BkW767rkcvvUhDEhe4KZow1X559ffHBPKgXG5ZipQJFCbkL5vioBFddqVcaovTavvhbYJiVX33r77cu829DFzQ",
  "key13": "Y3ytGzXiFS7ZZWSm9iTCd5i2QrnFfEWNBBKoMngh5dKTfeLu8yVstsuXu2jgYiiNRJcsnzABPydav5NeoRPAzfD",
  "key14": "3JTFDLG1QhKRfMLMh8994bheRkE1irUDXajdpTV1MFsigfQKZb435Rf98NXoEucsBXBgZoLtu2ypiydXVkdgq5H6",
  "key15": "28TEnYnaJBv7WHR47qPFMXsZj4qUf3GvS11CsCPUQhqrDQ1jP8ZVqA7tpQiyMkmfZJBx6gwJhupYUHczN1NNduL9",
  "key16": "2skjPnMDoF52kpfcksbZLDpADHRMzamWuahkrJ8urx6tQnuvkEcg1tJsbUnv2USi7Mvwn3DCxCkymapGUCKXWfGv",
  "key17": "5Xma5k4FLGzDYVS8UH8JMwiEskRsKRqcM1rSmee4k8MmpLp13JvxbrvJWHckpmHsUGEYBuQk4Q5rejyPbBYkavvH",
  "key18": "5AaJQnXSykxxYyhUo7zQ87hT7pf8s3uNGU8SjwxqWwtt2dyT9nGzjWbyb5tnQYoW6CQmop5yQrbgEPZE7CYuqfTj",
  "key19": "4Q7PS1KzbwDbkoAJg3tXkYVTbm1e3E496xgYC5qpj5R6WdeyxuDeG4xwBBvQ2AWVoE87KuVtqVXrKneJReb1rXMy",
  "key20": "xTZNcKKkiHtMDGnAqUdJwqkzPE5xUzVXC8qvXTDe7hmCX6BE51qn1dxQVRExoweioXoE4PEnBuuJ4PiAz1J7Pvj",
  "key21": "2DTaoD7k4ie1NNpPjhzwUcekZcs7f4WcrgFimjkrh4CDp3uAbUxfvwyHLjjgY953959Y5L9HmYBYBChgUDFfAPwz",
  "key22": "2KD5QXi3rxV6GR6P9Sir6yCHfNC1gB8m2Ku2vgBPfqZkKVwTUEfP9ENQsiP9xAN7iz3qgo7ieUWq7dtRsniL8asP",
  "key23": "Wf8NSDcQUhyhQ1fV24DzdKWUqBzejssbfMecqTYtZvCgUmHr3PhhtD5VfSpYu4cPXWSLca7gigb98M24eJ3QjwQ",
  "key24": "26F4eAy7MS5j2xiweiYPk597cupCMBTo6xJvfGnSs5KhUVBWntekP4jngq21uf4XsvrXA4h4kKDeFid95YPfJ6m1",
  "key25": "3xG33opwqEV58GUkSr1deTM1RYTR8vcbrkfhQTfPuXVsXvDD349YqzHtNQ8SdRoTH3Xkxbkpg4XjqJoCQ648ZQ1h",
  "key26": "4T2iCwH3xxDxTmtPnp3ZRaoy4mspD2xjysCurTqJqXvhrc8zLvYwaTDUXSmHgYbxxERCMoq5FRvtqATZvjeNrHvo",
  "key27": "5Wheia4FJgtxUsqEENu4LmgmzKRxqZPcP3AFMHGAT7vY8AF1m6mgoYPvZhVc2ciXzsYjj1pBk5925sPJ8REMjkfy",
  "key28": "5e6GVmtLm7pTG9caNywUa6K1eRYK2Y5HXQjYzgH5FyJtDSdCVsDgz9H95skbwmFjBvJyhBMuQoVDzqiWLdP4chdE",
  "key29": "3cBgWpzxqWMViUqEecL6roogVfVyYmQyGEaST5vFrQhNLRVTTRTYCQjT94xyZC8uMo1iQyBMDHy7jtUzVsPRbXoX",
  "key30": "9z6YihDugsofDP1UuVPqVbuPjyoPopsSkDuZjWgmEZFKsLVrFJyTrhAVDe77Wsmi915jaB4uGE6Ghy1v9t7sgjN",
  "key31": "4Ni1JYWS4YAyuU1R1zRZ4x3faUqBVcrEBFKzZvP6GmqiyK3JS5y7hTGmRDg6ou4f6JxTcnKiptXC1Y2wcUuS5LiA",
  "key32": "WgBUqBpYj767kA1gu1tXwB2cLWnmbvnixePLBvAYFSxhdbLVbGEUGFUagzVWfuR215TFkYBXgs695uouw3LSHVH",
  "key33": "64wCXwLXRtRjQV4cwGtH62fVYhckHqhZBh6q5fHB3MoXLYeAAMzzfjBBUCNaXmqyPvqQ7evXsgUj9cXkvTw46rR2",
  "key34": "5Npq1ZAkbLHFe1FJWHzSnCBwi4EQF2UcY2Q6yHZd5Z3rUhPB1LstKf3oybjarvjS67KJwVGB4jwHL1VMsda233Q2",
  "key35": "5ATQrWUGMvFiy9fPD7t2VKaGmAhLe1pem3NzpUKdpoQJJY9rspe9nGiGciswvJPUWMhR2eJXW6jK756dH2L4RPbN",
  "key36": "4WUKoLicMV2jNVmeUsE3TBUUgqrSqzGxgxtYD9Vo35p3PUpo5i9vjb3ztLdypLEgj5aKK69qEDjKDvSNfSCStikp",
  "key37": "3rq7CFTWHaC5MKhVcAPMtTTakMdZF9KxiJ9xWnWRUn5i5NWvukA5J1GdG1vo6zhgomXdDjofN24rHWbPUURhiNvi",
  "key38": "rmTiG5twRkx5eqJU5S9V2Zgr52bNp5zbLm4BDVWN1wEm9vUgWUKijAXf9zxbeDya88jUVF8vy4PBmYeBYPVsrq1",
  "key39": "5r1uHQPhN86WYX8C8qQsKkqtY1ubZ3xwbh6vtvmrvowRHT5ooKaJ3vNFFMuq1Ts986GH5EQgPxwGgTHF9suysS58",
  "key40": "62Tm1BePVuAp4QxjcP9kqPFpJU2BgnR9TNyt4U7toysty3d9vbGD4gMTPQ9Ssbu97pzU77VqTybwb45xAgJtykC7",
  "key41": "iQoctZeBw3W6sTmG7uPZHcoSYVSvsLpcEX269j8mWGgMzN3V8dbQqj2sJH15yeUKzQahaN4UAhZ7ZuiRTGaK8uh",
  "key42": "54D1Tt3wyk5w7TwAySgZSxzkJsy7BsjcapuaBfmhXcoQcSZbT5fNTQ8Kw1rn5Gs2iuezSTiEKU7nVvSuNGC5w7Wz",
  "key43": "5VZJ3ueJuJAraBR3eVgb23DK2rNypyZ3HK2wNK85cBzGpLySPkKhjbffnFyYsBsQmhcwVsC6uAAAbvJUv4KnxtpT"
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
