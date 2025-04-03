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
    "3czB44pvjckmqDG51295qEXJ5URiW9gkK4E3EQBViSkWZi1AckYhCf69FK7KG429GTC3L4zCb2bpp5o1jQ1gyK2d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GSfQdVmbqca6DTudnLqTycNtt956qfLWh3E6PyFnteFyUd2KgceYvRpcKUqXF164sfngG6mxiFS4Wb5KJfkNFCL",
  "key1": "5qS3jNGQ81Ah4un2CpHr6qGWMem1UZRedknjd9EmfqhzfDQQXNpegxpLsVydZKSsAFnrXST8QoQqEDVM1N68sNrV",
  "key2": "3B6QRwbrS5ynvbDp1L3qVte4s6HVHUPEFfV3Gp7R3fT3tHof7HXZqaeLHhLCArYi5srJ3fEAXxsfxZxYVHpqYGYU",
  "key3": "4Fr3JxEkj5XgVpVh8E8SSuVrJHAQXL8WoWJHbP1eGEz4otczYu8MyvQXekCAyhJ8fVgWFYpnMPjLyMzaHekuA7Ua",
  "key4": "2CmFGkEuPXf7Rw6SkhHn8wckZvmtUwhh1D36KhDKHs3yaCH4Yzw4LFtriU4bTiYZ8dp4uBwCMXxYuJmx3RznKJCF",
  "key5": "MZd4KvKou4njH1NZ7BdVDxM8ioLr5h73tu7EZSAXHT6EpvNC7D2MYivxFJrhST2jhr4WU35gq4UR8LCM2pCudZ6",
  "key6": "NUyGhygxTShSNVEXMJwPm56R2sPFauc5hBsKKghpVi1kxbYWNn8RdzHgMuCQaeRsgGrbQAnUjL4yCkx7Czampzz",
  "key7": "4WxhHLumpkbySvTdHuZbcSG16iu1YiFMeZCyBHiEdW9mBVd3apKLwQdHQHfbLpY8H3yM6UQmqx2Q1SCp9DatYfFc",
  "key8": "4X9X9UHLYyXvaUZ6L4g7wtGevNkHkrk6iNM6sb23eS5EZqKqjkt71LXcxnnqaS9Q8dFQTApJ8t7VVXGNWtP4tDat",
  "key9": "5D5BcU5ctxbRXvoKTtrSML7k1MdqqR1PiPnCCwP4XZLBp2LQxazPkWhA2sHVNWwpsgGQmUztz5FTxrKQAzYjpqLE",
  "key10": "4MPxn5AQxZfbgFwctiK72ymjS5sJzTWUPtRuJ27qYgiu7kAxfvehhU9qTP2A4UoBwHzPMmah1zrRSYJJVugMKBmH",
  "key11": "QqbmPBQScKv21sYmTdxb1aWAfo8nZDTsdjgrP1JcrX7jNRP5vsv6ZVsC56dZNqw1uoiYpwZcE8hLzSiNYiF788L",
  "key12": "41jimyrBrTcKmYqAahAweqGtRC4cPakvMhuv49xdL6UtkxFJx58y3QBhX8HT9K6pgNB89zNteCX7CHBguoHCViyF",
  "key13": "5AyH8VKhJ3RzT5xbqce86sjJCdMinhWt3F5nPC6MVNVj8omThYRnsM9RreyTNENmApqyent4zaJ3bP8atZav7PgM",
  "key14": "5mtKAhy5RpjdBT5kgM4GmKuSofLeKBHcA8MGCqevjSCNmjVwjGowsttqC5ByLQVRbDAZiY65wGpBGizs3ggTuHGS",
  "key15": "bk1c1PZ2psijPnXWFK1DtXYbbWEswVfqRggV6mJ5mNksgoEGTKPXbRoECmRzgeqVmZCjm9yj1QVCkdwc625KcDV",
  "key16": "67GUnFWDxyKAiZvCiXqkXN9Zc2zQBFraCJQvJ13E7KG35giYeCC53r2GH7TExt38qYzJsdfxgdvNLhWMuaykRq1f",
  "key17": "4FK4PJ3m7ZsCqR5VYeeP27WgCaau8Z5sLqaA5thZnNAcx1LJ4ZMyWiuz9RkmjTNbFEiy1bbwcs9Q77ACdSmnXhYS",
  "key18": "5bZNvjre8gQcLVfV9wQSAieSMKpaxN8nT4nwCJckGiqv2wSXu21hCTQd67P2exqMmm7MNBuwDfWw79WHaLHMmdja",
  "key19": "4otaE88nxyRuupdY4xwu6vDitXAcmjs83rUkdZRQrcFquuU72gB7fqp7LvPf3ndt9saB83g4TyqwBv7AsSfEFEpz",
  "key20": "414igCNiFATXbmGxKX9E2pktX6sfsduvwNvDBQZsQbUFScAeufBkukC8dqVRgD95q8iUTvZ65wP6hnwztwrM1ibc",
  "key21": "2hPd5bT5tLg7bjWWe5v336HyDdrHnDM5TX2THH2CkdXpmGoWhUjremirjU1m51HnR914xrEuWDREDoTN9mpdr3iR",
  "key22": "3P65Fdsfk4AfPF1Xu7v8qGUoSwENiB91BBJdEKryxSR1hbEKazY6JuKBZCPuMCVTszPDdvPe2SKKkDPGWhc423KJ",
  "key23": "4K5jWd9gwSoPEAe6wMsMqvsnrk9JvjrC2ZbFcaQTpSZLvpG6Y3uWMYkcaCmJ9frNy78S1kGhnb6pZGiDTRQUNTrz",
  "key24": "3WaRp2y2Kb3qijdLNkeuqbq9Zij93xNjRhX93nYRZQF4Kuw9RLaJkuszT6fDcn3RpAjx893D3A5zF6dpfx8N6rjB",
  "key25": "2CA6D7oprUY81rK3xuQ117h1pqtyjgf8z6YrhWKZyrPZ8n2cZT3oNnqmcFmxbAFs3e7VY2FTaTKqGbZQDSawABgQ",
  "key26": "2q4BooRoh2ZSzCfz2CDU8aDTfzu3wCnceRtTMSbR93APaVMunXSeEYfCf5DnhSjHoXugPHcWPX1uz6uDuqvhENAy",
  "key27": "4uxFe58whu86EiKDKdBPZj8cQVY4yZJavWhRrZtcX9vAhbivwLMZisvkJVMioYzD68YfqzagsLa6Bk98bFEnzrnG",
  "key28": "5ESZ6YFDUFupLNnrC4pX2Eyf2b77NpAUxMHuMRM8U8GyMobD3uhQsWki9LSVmgwqxZbpzhc2Wy5xReasYJUVogkV",
  "key29": "23PhMq7SWQ7cWW33qzEW8ziYYRDyLdGzt7QWkTE67FJQ8VLFsZCmKQiNajwV9XeFzKEn3HPoFwWszD5nUMhXDdiH",
  "key30": "5jsbhktTL6yTv6E8BarKNoPUMGhoHR4uY19Wd48HAax6L6XHx9aGm7Xg1RWiVzEDDnuc48ViSgpQMwZezxB1hNFS",
  "key31": "GB3kPwTbGiMW4hfid4u3pWx6dzejcKpQNkzs1KJ6qpFSCdWVT7zFWp1esj8QVLk67qR6S64CPtgsAMWJaJFdqoK",
  "key32": "9Bncq1USH8nZwzgyMzJRjARhZHFU6vg1MVQCTk44MqcJvZ5ntmoPvmFJQqas2TggyvzGKitnpQcSevRP3AjnwtS",
  "key33": "2MR9a7ME2z5ybGCXsRqJxVx189zi3dLT9ghSzWRAeNCDWhz6xu8kpR9dchuZ5Jn3xZCHy9aAdzXmUwexTzzuYcV6",
  "key34": "5KpuqdPDkU7mrrmUqSreQ9ffc39wGyeFxkmf7HbPpRixQQadrCXBzepqhvbPoHCBPrqLjebEE4DGojYkYuw4oYoy",
  "key35": "3aEPDAgfX5Djqocna6LwjJDG9pfKdbDtrTnutu6j5XtruzueZmAM3wXABjeDeH6zWPiFqeQY8XKNScNqWSygm3MR",
  "key36": "3ZLe3bX5AZenDpgD2GfYi6nRxW8nMibGGKmt9WFZE1MCLmKdNM4GBFEWpe7MCD9Yn7PxbtdxcEyVxNrjXgt36Ntu",
  "key37": "4eEbmg93U8VmnDpor2e9CHBRHt5BL5SNTRBkJEWBSUu6Bpfui3rE2rbf5mZ1wTg5qKNWsDnrRQwVSfYEiyNi3WAm",
  "key38": "3PG7y9x6KXTANG5F2djW1LtcNxzS5diCaf1SUyB49ZEiuWb2SmqqqpVwBG5Sy9Gg9bztiiKRg1DZQb4ELPRrdQUa"
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
