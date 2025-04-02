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
    "4KXJt61HqCRHQd5Yrkxza9p8WPmtfDqUoKFAWgRmZPqBU1pRgG51bVhBtCaHCB1bdLQdtKe8DMSDuqzaT3s4yCxV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EndVLtkdA13AEjiiaz1uXCBJWVxU7vVdMft9MzxEEfKCixMxbhWeofXzPA9T9yMUrxQnTNbbokL81Eks7w1xnmv",
  "key1": "55kyT6HjPBdiUfa1xre2e8ZvdshEiHdoMi1qJJGk4efTJUzbdwrLVHjKQZ7My9U1iGHRAxWE8NPMwS9Dd4mmMeTS",
  "key2": "ZamyQV13BvVcyju55BBbwSoBDnZ9ViivnuVtS1TysBG3zt6oXVaxAJarAmcD8kjFogv71aWCdcaTUHwcDWgHv3P",
  "key3": "3usqMsA3D4AnC8afTuRD7WBfS9CqQtPse3N8wjK14C8LmxsdLDLRyw2hzy72H6gTfDa8mnQd1pfpumAL7ZaDtzC8",
  "key4": "2doWuwMa9GpZRNYUMFtL39N62pYE15FvEk6urfYEr9qFStZYg6qzUYhkghqWZJRGfdhimCf7UZPhNdaLDdTomojv",
  "key5": "5FhLhDvQC3WeEj4DjLwxeDoW2x6v1k45CJgaMFU6VyMzQqsSgF8zwNdxnhwDFshcX6A71SnVr3RmtBDaYXku7Yry",
  "key6": "Kcx46YLWZydpVnGoYcmvK6MovpK468KkMn4NDzEaP69ioGhQXrytucfeLXpZ8Wy9cRyEXm9H19hM9eyT87yC1ZA",
  "key7": "3f4iueMCKdZ8xUsqL38B8HC1pLvJZEUG7XfPCJKHFqphbTnwQnvhG4nNHK2azQ2ALKcL3ByQMB1aNrKqTow7JQLT",
  "key8": "2McMHeabwmsFtrEB4PfmsVVojtmHHF6ZWVdKPe7igVopQ9rotT8Pk2s17V5B1A89karPPRSgEa5rKJFMWSryauxx",
  "key9": "46aPUQBZVta3adWZvH3Ra7MU9jkYPKRf2kzxEcfW6oZv4gocRtot27u2oGKtgujg1Q4C5mWgKFW9pB3BbXnhXPGe",
  "key10": "4s591i9ZoE65y4WwTSmMRKc6KY13yL3VMUAviXH1ezbeZB7JTjhgho5cnifd5fdwK7nYKCPm1vyFxF1RpxAH1bpL",
  "key11": "2ewii1u8S8KLU9D5CULncvTDLwMxmigXcAaUzAzNQFPo978rNUZAwiAufAWDneYLxNCHvyghWEtjYpmHGPrgAkjq",
  "key12": "2ojci1eJWG13nUS5KXEmwwryixxBeRjPHpmaZzeKKLyLQrEQE13x5xmWsjq5uEiCizSbpCpqVQTNJZgqFky6f5cG",
  "key13": "4d9zCtTxFHqjroykfLWfWRpS3vADkw8hdiVZ33NJPsSBXEhiZ847AF15VuUVw1EDxKoQHFrKS8fTZmmcgPyvKk7J",
  "key14": "CZxdbcyoAGV6M2gwQp77RJt7vQ2fUrazj5GiioAJcJZrEn7ZoEnPXBk7azhuAj8rZtbArVpzQVEA2QEfqFHiAtk",
  "key15": "54woqvv9Wt8U9BpVu23BD9x1kUobqApkbtcXnd3brYCGBAY9Csgy3xBiyNXAZWuT8ic6WLd6BDAmsXZ6oFB5fWo1",
  "key16": "3agn6Cb5qoAarDWTXXmp1Q7x8goMjtcFWJpxPEb1oT6o2jyEdYvGHtYr2fHA4SrkRo4oPVJuxYuQ9beXUF8BkdJp",
  "key17": "3hn2qbr3vc9No5eRhkS1BKwprX8iPiKDdYMU9BMJYbCMZMuySEVtamC6kM73iNhqbxjNuDybF9C5nm83aZtfrrFn",
  "key18": "LDDoLBNkwpuJx8UWvDKM3BeYLKV47S6yzH5MECtEHtUFAc556h5NcEBVx3tYKK1oboa5o5tC1ZRqgShrJPWJTUX",
  "key19": "3FfbbfVJZ4KVB1ynUfseLxVVCjUvZk58BTyroNLSDf3xnAFVDV2T5k7K919PxoGYr4RbUKjQ1rHaUojVijunwvfS",
  "key20": "4raHc4qrFjub7nCNqWfd5Fwx62KR7B8YJALiThKTjpgCpqJoqi7mjFTFfQKAPrNsmJ4XPXjZRBDzcyRTUFVrLEud",
  "key21": "3Uqat3RWqVJqTy5xarzQE5FmUdJ4Ftm9s5NtZCCQdT5Wxh3SeJTtgEa7oQfbJVL2EtorFBwR228wqhBqpUbvV5fr",
  "key22": "zjWHKz3zD4cmNxR3GbJJrscxdkq9g9ZY1DxtTHtsWevRZDAYJ5zM14YUP4GxaWyVWMXY9oCbH9TPNQKFfGsQvHz",
  "key23": "4iVyPRcpMuXprQwheAvGTrHf9bBHBk26UJBMmH34crWJ7ZdN8ojwRnwDJrzD8u8fwovuBLCE46ykhb1RDa9SXbrP",
  "key24": "CabynA74UhLQ21R9rkt243a3uBxy3k2nr3rynYkQB5nFQxTz2KE2SWGeoxSeB61Sq8hXfXFRAxJaEebtsas591X",
  "key25": "4HGKHoA5fLZdx9CysCiTF2C1iQ4WV8WADqo5bmCdkfcSBU4X1ZMmx1eRndw4Zt1kEmQrVtu38R2q2jTX9hWEfegh",
  "key26": "3xrcpWmEhs5L8jJB6sbn1Y6e8GKUUum6d5yRY1kLb9oZTU8rKYo9FL1qi5yEj6QFo27QgiuCAN1DUp63wPvEfuHH",
  "key27": "34RovNvJFjDmzThpzerM7nXUF6p9hpV38ET7uH81Dbjovwo3d9o2nwKJR7GRXXqykNMfmVNHnTXUSiCpBiYFoeRP",
  "key28": "U52z9fKz3ju8pUB58FRF5Z3ccd6FHGs2Cc9iqaTbNQpVoCy8Zs1HNEGLzQRcoTboWac89cxqCVW8nPoy5mHiH9W",
  "key29": "3mZuNJNJcHZsnEsU35iVTqy5vuiz3L1Pr79xbBmqqmnWuoMP8yF5CyvdPRL7X9Gg8hpUvzHzWkYiKf9aUsQePFuJ",
  "key30": "5hgaWxgLs1Ne9qkzwULSTLpn3HW8Ya13RKXmkqxMnq7i5T2GkXFsRSBg7Z5621zCpCu34v7nr1v4fvsmfCvm9Z7E",
  "key31": "BHuacTWaqcH1AsFTPfwjasmA76rZozK6Rbac24Dk3ocMZU3zCSyQzvjmbtSZsnB2Nq2jYUWbRrD2GYHgGj9jWhJ",
  "key32": "3gouSBVhtXtSh6FsoZ4AYnX3DxX4q8ZKNWaD6aDKbbasRzJVRW8GvhXTca7awDUEGhKabGEi8q2UPRoPys3SbabE",
  "key33": "2E97XwDyvnPB6teuHzhk1H1P6jQiYpSp2UQT9UZgaaSi652TFGhNn8PYNcNrHtRcdkGWEA7eAHNQnPzPoBVpLiJo",
  "key34": "559okEdBwDHqvoAb5H6GyPo5VYJzSWB7e3dnVzECavwLfbdZtQG2ABJkfopUTvXbUbmMBgGMMYGDm5Pf3QUMa1Nw",
  "key35": "5mozhEonUrv4YisZbshdE3vNUJubUATNdAM2bmqDpCfDrdU7XkqB7ZKkWkpcstoQrsNEZ6YyvWgRqRufrynsyH6E",
  "key36": "2g9wc4J6zo1y7YotaV4YR9CjysyZhxoXbWDP57wpLb52YKQyCDn4QcvBzibEnLJAciRsNFkFmNqozJTkp6V4rwmn",
  "key37": "ir6z3NeCfrr2QMix1ts52xxTzYwUjrR6SfNqNE25nEwntPv1AqrppVUydC1opW93iiCfiyG2y8hhEGyDZu4md8Z",
  "key38": "5n8gZuQCDHA6bMdMCBm89J96H189ySFAoTobWanTEuAvu8vCBtYLGN8K7iXC1x86PTPRK2txpcLtvXvjzJYaNopZ",
  "key39": "Hdda7mVD6wBJ1vboekM92KyE4Cuv2evjuSbm4z3Ctpz4cTTbHytJJa79thnFUJitRvwSfYvLQsfsiV9zSx7WZhL",
  "key40": "4BSzBjADSNKJeW98BNkZTFwNxvwAYSstdgg32ogLk5qjKGRByiKPNoja1FjQ9xyijioA6G74GWsGS2ogxKDfLVum",
  "key41": "5tpxNQafiLTdD34qcSxSt9pdCxD9eZYK9io2nZbd7EHaQsbGrcK6BiuWv29SNNFS5RXn7ebJ6VXzV2JnTm8yU55S",
  "key42": "5ogJyovaF4KadcLwKpn1q7P2oDTWhTF1vQiuhW8gBxg6LkZ3i4C1DMX3zSmmxGc7SsqdTRnLMBFNRhtJQLAqokz4",
  "key43": "2UDDhJG1DKndxHDcLxPHXMRJ59bTHKPWKJwCgaKD4n454ERvPNhvYK9CWmz3u7b3hozEXpHN33zW1kyUfMwmXJJE",
  "key44": "5FeR5dkQvHhMW2u4Hfr96wuvptP5Lv2nFyRxzE73qnnTee8xiQE1G293Z1qvcLQobpCH8moFJcQ77AzEkf8DrQyZ",
  "key45": "3GpdXtDQQZ4nE3E55wN3pzvP2GqYsRgP3rXeJq2kUk9EubvJDax5JeKKTiatnbvNHr6FeEYDSNvj2ZKFiP1QUFio",
  "key46": "36248SU57NsqU6kr6zkcKzCjKcNGA98Kww7vQHKZYvCKDKUjAtDKe9D7A7cBZszU3dskDxdmrSSneJFA7MV2c2vX",
  "key47": "5jHiyrLCtDwrSTzvi4SnqtoGkG7ZckxfynVhoWiQApdDNjaGRJqBcdHwDS8Lvaguv9DusXvqZhmRa61BrPM8rTpa"
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
