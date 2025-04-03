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
    "3YQ5dnpcLDfMLVG2yGvVF2Hvbkb4EYfsU3JSq92h1cPN9Jykiof2fjSFLArLFehhr62yAzTvnh28NPB8Zt4tjnPD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YEhP6K6LThJwV4Ekn4gLWXMREFcFr5Sxwq8Rn5ieL3cdiJRMDkH2jZhQReY83LDfij1kEuJVpGihPWBD8CwJcfe",
  "key1": "4ggpKpDPMqzUcRyufWXK5vBKi9op9ApkcY7sxomVZkKmGFxgmdqWrUMiJf27iCJgcpnPzfLMQw4eCy2obZsYeMRP",
  "key2": "2sbTHd8ZpiU3D89FNuu5z1FZnhUAy8KeJmHoxEpSXqdJSWLsLcq1z5jAXxg4uxhzd9YL9fr7Lek1QCCvtvxhudkq",
  "key3": "2EaH1ZUzxBTihSLhuK3TupYUVzPe7kjEPKNT9PyhBetaC3x5gePbMnMDpfr4DNKTNJoi7xk3o3YYnwyND5q8TBHp",
  "key4": "CezHWWHPqgmwTeNQXvbEBYMjJg6aafPHm4PBLwhNwv9m6nYMmjxDP6nrpaxeozZsZ5wB2tUdyfY4hjmZnsy3dD1",
  "key5": "5RvjLAD4QGRGibUzV6bymD4osx7KyHyAa11mmgdGTD4S1dAmSxtvw1eQhVs8a26LLhHYMnqc3MymdxAAe3CxXocP",
  "key6": "TvCh5778YfHgE6KLs32jELLUfErwkk6W4vKazwHr7zKPrNY5ZEhXPcioWHxXoNGyCrAkSrgDsYdJaXteEYNsp7E",
  "key7": "bmqnsUeKtu4Goym9uf9Y3mhmQMBKyUGpZ8MwM1FhB8e9SZhqe6qJpAP6aW35U9f5D1ffwwmVdCW38HXw7PB9XEn",
  "key8": "2nCMVHa6f6iaYYtNK6qez3x4MNMphY9R59Ui7h9Z9sfuY3uuezmWqFaoTS7pRu95b7jNgYGoobA1xFAu1dDawqj1",
  "key9": "4Cvo2D7KdFmeEQt92ZrmqMSJ7JBcisLC6uTvTHoBUWUyqN3z9pX3TEZF5X6oUjk7mhrWjzKmZ4ND84rayZMQBx83",
  "key10": "4pmrC1d42jRdaT2MDBt3CrTh46WG8vbC8Ew3mfozDbGGEqxf6amkdCjg3W8BToV9JYh7EE3j1pCTc7ABUkMt2fMP",
  "key11": "5jLPzufWfiL9edW1PP8w2LdRJst23K2qWmp1h1a37urVrUN33kCFoNZcnGjwSzrXpPhsjNwVMvZH6dKxGHexAUJP",
  "key12": "28kvUv3j3YYGnL2mPvsVsMGSj2L2uvKPL97R8S2uShUT9b5J8nCnkRwHTvDiJFqszqjo8chV1C6G8Dx58GFjbhfj",
  "key13": "464TF598wGXg1ismNQmT82dTF8Pc7g64t6DP7C6vGVUf8oDEntwKV9RzTL7ULC6TxF1d8zxd9pZwYRfZdweZCkyH",
  "key14": "3RqJiDRZbVV8SDs3Wsh8kMkQgjMcq9zX3e8qPnJjgoSpfTskiqmHLmCQ34uT7MjfBbUbP2gGETSaMQPaiZTu42gD",
  "key15": "4yMZoSnifP7C73aDiM4gZYD6k6zXjuytLuLJPheo8ybRUChrCFda8hYjTGMLWPSrBfXVP7wFYudeLhtuxfaTts9r",
  "key16": "2m99iGAVDF8bjysoRJjoG6mWUMsUiQeBs4noAwLQUt9zCz2JRiF37WDRfBatBPMCke87RSvE2ZAUjdFB3yrQDcBP",
  "key17": "4Ro8oiRo192zoqpDhsDC3THq8W1MdRsGMZc1tnno1w8KoemrfGfR3JrACUTWJLhhxEvw7g6D4Aqg5h2oWYk5t34b",
  "key18": "4NJ71HUS4bebmioGyNsn6wffbBdhrMxfuTVzFcXcdemG4Fy8rpGPXf14keqiXsH8w5iLm5udDJaHeBqNfbVK2TB9",
  "key19": "5q4zg6TGf3k6AjsizRLGXZsCdPKNCqm7ALytQMVYwWHfgkXAuEPdfTQ4uybaMiLeutSjJZJve42UPSc6qnATBWGE",
  "key20": "5xBaxzhY4SjUAb8YfPCss3c3emyehYD7c5JuMFj6zFMgMfeFYY3AhSJ7F1nwq5dAfvLjitCDfZXyUbGRewHVwwNK",
  "key21": "3xMMDPBFrm7LCmVULKkTzmUibUxBVM7zTMcCQrKmcUm9A7XC5kXeMgv8uybenSisX6AbJnHyf3MZj4vAC4RQYVc2",
  "key22": "29T5Gm48gvBG6Q7Vsywc9wzEV6oBcYs3mQzDdJ1dKBkwP6ogKr55o7Ziigg4qDrs6tM994ArLRqktsDGnRJ4C3tP",
  "key23": "3FVYz74wnhK1djZJZHNcMFFknqWe8BAofzEG9KY8da7KxUWEwDLCLG3zFhTduSXe4r1TKSDZDHRvQZedrFgMr1TA",
  "key24": "Nw9oqJpWCYuD52M9fULyizHruELxE4TPerR2SHfnCh8hFUixx85YoPUiJnzH4x3Rvhdp1eQLWsfSu1LAWVXC5Rf",
  "key25": "hWmL8o1EdVQLSfAh7PpPeuSbzeGSRb1YCvtNTTJ8DX3CqGKethUJGic9Bk3QgBpfcHa5w7HgRzjpXWtBkupQbGZ",
  "key26": "2enCxkpNUSeWe3kBLaw6ZGwpfFXJNgR7ve5Qu8pFrkFVH7Vjg7yxbZRnGwvc9rE9Hdha3EYrezB1XgJpLsvCSyji",
  "key27": "oW6uHf2s8VfeEJtbURfmYya6YodRCEuD4uGRTYrSwVisWk44aPEThp4288MA3E1uRvL2wCJMJqmR6aAqR8T4onP",
  "key28": "45fnURNGJYg6PAsTHkx8NUiUsqM7L8vVeerpeHPxmgkaVfhxeEJt5xQM58zzH1aX78cRGbJ62K1LnYVLrTEoz4wb",
  "key29": "4FhSS7SLBaGafHn9AEGwD2r4p9oQyWp9pTCcwg7RianmNhccZMH45nZQWZEfSFyK8xtXxVf7Kh8t58ZauPbuxkwQ",
  "key30": "64Kjmu4MnKNBqBaynasSGbxXBLZnegU3s58AdAZ4CPw2bniYvJP7P28qoXxHPjHRPMNMo8MA4UYHQ2DKxVh8yLSr",
  "key31": "4MUHqbqnjqmBGP1Dn6YYDqEnzgFh78VTuFPau5NmouyU2nJqmxYq5GyZJPQpgygxLPheVegSxDfm3pJA6XiCrvMp",
  "key32": "2Q6G44syi5ubHpXqb685zXorPTcGTTuJhxVCo271d65sfuPVofQhxU9v6tpNJzZaVSZWahv6VWggfnAoPd1GzwVa",
  "key33": "2q59HR1ziwvLfwBA334GG7QMXv3iYWrksh6c7BUM6Re93s7VABqnn6wbUGkgkKQEqmVzMjZvZMioZxnpyqVKrymG",
  "key34": "5ydAPUnNoXQpQWzoCNG6QVwU2k62QG8GDRLXksANFT87HTC8hfGC24byXereDJtmAR8QSEqAdoP5iSCMS8FW2y39",
  "key35": "LymdvtJcNQigocTyBZW7EBELz6TrZZArh1XSwHFRKoct4FX3EnxchE9bK8oXrfs79PicCAt9QxboZSoU2jGZHJs",
  "key36": "4SmnxCxbWMgYuinMbiBtx6hqLa7mZenUQHB98KvyUiDMqBkjfRHg219E255QkikjzbduBTYpNToEwcPQuG5YdMd2",
  "key37": "9LGFAhDxCF1QTiUTJF2Mkg8z2nuF8dz5PiwSPEP2qYooBUNK82f9fmX4yNpN8Z8z6SnSMfeTbcQNzZuvWqWc5jx",
  "key38": "2urUK6eFJPnYpEornCD8hi4AVu4JMZzREFhJNpTbsvSV1Ai6qrmY9MNCsuuUyacZKnx5qMyHXwUvTwfsGzUspdHt",
  "key39": "5gcoVWkbtyVJ6LHpaCgkhvFSyKz6qcsPcAqMziqz4ygvjKFdCdKKV4QixopffA4EnvDHJW5hh8qgLvqWdX32Kiwx",
  "key40": "b3emDfM2xfQBTHhkkQn17JAtDi9UhfR636NPFSMdyQppGji7HC3BMvU9N8FmhKSmVzVndRNTXpNdZC63d35BtXg",
  "key41": "3mXEoVbPrNho91fZtcFQNfqG77HtRSoz1UVaGBPJMmpaWcH5mrB5PJPJP18vvHo2ayBFPynha5e4neJNm62c2Mbk",
  "key42": "5jhCk9ACJM93SwZ4ASrArnioUbXJM98Qt14ajeh4SJ9e4UHNoxWtpAk65cnMANjYRjvHuXWWGH9RfH1ZhjRiod2L",
  "key43": "rzaVoMpAfsFeUK8Vew3RMcPL6PkWNLyLwp1vHL37CjEhkch7wnA2r8grkPjYBTcti5ikgpqTDh5QNtsWsyZHjiT",
  "key44": "2a4nmwPLPdX2sZ2YWEkkrKtCDeKTDf4spbBQ427fFqLtRKhuaQ4E1gVtjRhKbBJzM7btnXegfSJctrbvRjkcy3yv"
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
