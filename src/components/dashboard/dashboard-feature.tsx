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
    "4oT6AqRtm41Rtbj3Geahn4KpZufDQprqEFvdFB9AXpY5TaQFq71EPH4BCa8tzPH1uPwky117uAcssxNZ6MQzoVgS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2esuYSNtccT8y9k9gVhomhsPFiRxASzymFXpDZqHqszQ7yD2caWV49iYKHC7J6McF47tGFRC3YaqjyCFw62xtX4v",
  "key1": "4Ji5L2RZHGssKF5NFSszqWQRAUtprynJTgVaFJH5yF56CiV15LpYh3VLhm7wL8orXQE6nPqFuh6zTksSGwSNzhPz",
  "key2": "5bPdrbU3SmbT4HWmmzH2uiU23QPFNHje9HJRLgeyHNDursPKXRo5qMvaRs5brXJiJ7L8Q3ERR69YaWMK8c1ZGkiL",
  "key3": "e969ttUSZTwUD4Hg1ZMx84T6gwjNX6tq9gNA4XvJDmru179SaCkm2onHNQ3NDfRs86ykNWnSDvyxTVLWB1fdzyw",
  "key4": "4aPcfHuBL4gFUfc2KZXaZBGeb9pEnu1xua7AZ9pSkhh64fW6n7xkfpH28byF4W6XwjSejQvFqZgafvRszpMfkLen",
  "key5": "4Y7N54ReD9PobCn9Dbuye38offVpsLgGyoXNLfWUHA1jzZGwGaGxHPgYjqa7R3LeFjXjDy4mS1YztBRXb7EfEBCa",
  "key6": "3NRu2G8ovN79q5TaRujmdSovyMywgdVTDXH84HLWCXBjhJj7vqVmWVK1ddXxyfamNgMGVnGaUWsSmH48FtnVa45U",
  "key7": "3g4Dgi2sfJLhg3d3xLkkHNyuZvRgbSutFd4sXunKTZkHWfGtwePMTicudw6YSBsmx1mrT5qBwPY7UZnPiEBXReSh",
  "key8": "4jAMtE5yjgjzf9iskf2jPXLtSCoevmsCCLjDGgBSfYPMP16aiwPf3ae1VUCLV5CiR8NdhBsjrFXRNZ32C8p1quK1",
  "key9": "5Js2a1wVfKnyhSKVSLLQE95xa1dADjM6uzMD4k52tTbv91jn7j5yc1WMf3X5ELCggpAybHYnUaLoPsTKH8aZ6ZLC",
  "key10": "44FPFgYPWYNTGXhGXPLysb1H2DZEVaG1ZHXT8qsqmNRgaRP1Y5tfGVpLaBNZMMsjTU5JX8J7aDngB8MzQdzhakEx",
  "key11": "3C8vaNZBUArfEGCidpdoLMyDbnP9N4uqQpiU67YRbeqdxwrHyiutrMEua62pfwQSpk7BBKX4Q54jLiMUFP4yWSmy",
  "key12": "3Gwmg2NxHq4yA8GVQcFA4Q7KhWNFKYLvMYv7ENrxczYpsk7uWZTUWQ46zwDuqEwb497uPKA5rcYacQz9qRYEhoqk",
  "key13": "4U8S23u37CE1k3EcHZUehe3Yxym88igvxmBbQYg5N1GY5dqMcWoWYZAU6L9wqeA4LjaoWjuBU83hyjPcFrjHonE9",
  "key14": "4v1zKrJ12Pn4uBUoedBMpD9CAr1pEvT5vx1YRe7B4PQrPCDoMNWhCdnjey4Jep4BzcVjypEX7q5BY2ujprccwvxg",
  "key15": "4wPiS6YQ8es89ypdPX6vcpGLSL5Co2zPrrmFcdBMdyWxY1N89HtcVz2VjKH2QWAjrxbPgLTvhkcpa24Pe9GDZR83",
  "key16": "2PYSNC22zXsa9zRSBhJoj8E8NBSnd7RmhivUyRmF8Up3q4Zk1AX8JDqyZBMJzhuSRDF8k752Ge4W8E8s4uEAdKbK",
  "key17": "2UTbZ75JQxc8YGpqAG162YcPQaRaKjoJcvmLmWcUsL7oYLUcHJhW4bpqityRwJJ2iTJmZksXQWRQAWPaBGmMW5Je",
  "key18": "3HgZrqXvkToNA3px8ZqLZuu6Vhxy44y3xfbtAjXLELEDhXgD9ahE58NewLtMrWA8BtvUcoXEp7DxG21uQX63iUr8",
  "key19": "3t7UTC8n6x89QMohvo94RbjbQffmNrcYozg9RcovXmYY23YpnMSioeriUKETNxLvEPeXf5bwzE8LoZxE4XtVcTft",
  "key20": "2ie7FbEY5Mt1vaSKkfQT1RrieNUFs8isSnPksLYxdDetoqUVyULmXnMmaKddNpuDkA5dncLzEQVaqgdWhuERqN3G",
  "key21": "4jqKL88fXt6SsvYbv8VjBWhkgDWZxBWSP7ZYCVGLs7vzf4Dk1UWMee6CF1kKC4Jw8kgDoiRrKQJj4iypNz6Q7MyU",
  "key22": "3gHGyXTcEximmPWBwrePMRftiV2AsN6UzyWd1FLkGf7BiRLyn7CKSiLfiBYdTwi8FPUWgjM8t4ieUkQDCMzDj1mC",
  "key23": "5sBzrG6sBTP9yfG9saQVpnDVHbK8D66gZRnLbPnT1eRhH3fs13Ay6iVKSBik4SWydCnSJg9F4Xqc3q34LQABwcYa",
  "key24": "4b8xhuojPtxSX6wY3nisBhJ2GDb5mLsgbM8EHaKmLKAnpzfxv9xcAdoMB8G1jHN1ykt2xTCTv5RATMN6LgD7VKjB",
  "key25": "KVXqPx34uLFnFxb2eTnbZYFg2jkngw68mA7m7MmRbCVtDzqpUd9Jdo4Dsm1pvAh7eEuiEozzVMDJMPiw3YS2S6F",
  "key26": "5XLcTbm5XAZnrBGwGyXyopeE9GVxbdvyvMr7eXxBGCzrrwd5Kb3PCoaLvrteS22r7ghSxacA7AsNKQQq4FJWHtUR",
  "key27": "2zLePoxYzX48xmd5kDBDebXLvUocuHgeo4H33W2kSCdEAULsi1UzvhwhsfmZdJRGFfPwBjM5ki6VLGMZziX6eTfi",
  "key28": "36Kd1LnUA2tzUyPd2K94ryd6Mybs49n76y9FHRpm3LUFmqpUzWS45fDAdnsLk7vGawgAz7tmQyjc8bi18sWKJXag",
  "key29": "4FMztvPbf5Fu9yHcSwbNPNq8YmoAS1Z1x7qWFNLCjnsJaczygqGBvxd7EYEJKDEgj23H8pEumgNgagyNKcpUK9Ds",
  "key30": "22JZUvUkr7HEUMYm8AYtgr91khPri5VMD1xAWffXTEAniErQ5VLiffbP95YpLj3Qhcrupgs8Yo2JPScbd2H7gYvt",
  "key31": "zZeNDWnVervqSciRjD67ohFPvcr9UF5ZpFoFkkXuxvMPoUzycCvpaW8DiL9q9Ezs6iP3iR1gxTRzeRDpTu5MWpX",
  "key32": "AGGZ26MRZRU2idDkW951AKpCRXywZckhWJBhVGxRKhRinG5zXtLnwhGEtXdtSVD4teq4a3Ke64JHNVFeYMok8rJ",
  "key33": "3J2SaQ2dpz8bfKqSHGnAVhPCa7ZyEb8RRWt1nCh4McE3Fkum2cMZrrt2CVhcWsvKwMNHBwgkC5vUDFqqeogzmoB3",
  "key34": "63sLidrhc2pjt812ysKhKY2RQFb6hdQf9eueMzfsaReSKZ7vPACBn9vymCQC7iUDU1Mh3Wh1gbspZpgjrBQmFkAq",
  "key35": "63EDetP8MXi4sQrJkou35jyts5NZTaLHt3mNnNUC6Tt3Pque4yuULRkt9RRpCd7mPJD8LF7oNm7YuU38WmGA4YG3",
  "key36": "gUJcBLHnDqHy6b16XKR56fedLWNJ2owef376gGDEVMfvjNR1i7qe7fyoJjtCzLe21WkVN6W5Rrwj8JP34c92TWP"
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
