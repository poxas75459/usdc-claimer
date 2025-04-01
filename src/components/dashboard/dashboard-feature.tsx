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
    "2DELWprf5EjfZuxv5saRe7nGv9WGhqoMDMBNrvAnnR3o66ZAtsHqrtiDvu54GVeKVc7wq6iXKjMad4F5SNJHxXmC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jPEkk1zxGyuusneriwcyCUJ5rXwrnpWiQHsDzDZ7QVhVH79oKYN2x2MK1xsypwHW7TsM3ZXYk1fxs9fK5Etktz7",
  "key1": "4ZCBuAuc5m4qHfCfCULNoJSaKQPCiuvHwe4syL4orSjeA2eNyBhdbYJkhxRaQb5VYGuZQ6ZjJKHts915oyXTRaLy",
  "key2": "5UTZYUKx74FJ8ZDaTdtEbhJxbhXrwdz2WpBDu6eyeDQXjfS2UNz2tDHUvEKq22vXgCkNJGrXS9bjmNyS8YyEq61X",
  "key3": "5upHU8x6NvUmcaRv8jXPbNk64h2uW8GzHHQrxj4cVJKGAMbZYemQkX7in8BwsAUZmeUBoohcZFTPNbaW8UXRio4D",
  "key4": "4p1wbr9mei4McNgcUjEkZjfSkkTZDzoeoA38eaGrjSsDtwNRnM678s7kMfr4p8atnfnDhxat5sXUZFbcSugkyABA",
  "key5": "2xduokuUjS7pRWks9u5fSsm65x7TVqokrKsVcrjbsRdUM4qPPmgyUySCoXxxETvKMqNDPGpptiBMEsrRosLJKwtw",
  "key6": "5L198U5mNPYXR6MDfq1Yny3hxMg6PJT8p58JVeQKXLUqjgWCf4Vmi6jesAvzCAnmri3hMTkRi3o7JFLfWWfC3TKZ",
  "key7": "2Y5bB9kNTGcC64ZhuWa4pu7Xk6gQwDVCutC22E8eNTLvWHVuBEadevEn5Pyr37vnxYi6KLFBAtw3RmjMxjReCLXf",
  "key8": "558YXo4goaw4WvcxQjygCenLtYLK4PrMFsueaFuou2D3Jq4rCPKxahZyUq8EW9Pct73i89zDX12DwWWiebJsmWCQ",
  "key9": "2baL5FTTG2dQydC7GjRKPpSru5W74KdyKhY9Kkr7zR5Evh5aHTifkNpoHCRCiC1vN7Bg89CYYG18ptyFRr1FxBTa",
  "key10": "3b6S4Wzj3sGPuXzrSW5Byg6bSzjezNtTtyyXgwx6gendgWtkkjWeTf7UxWVF2UUuExazkskUaLShaioSiXfSzhQR",
  "key11": "27kZYYK6urR6r2pURTQzx8khbaW9KrZxLCSG1Uw3ZG7DNxjZ3D9cwFsbbSF4aGGYXx7PoABrmxVDL8HprrGX3XGJ",
  "key12": "JJMMJMPYRqbRNnVBhVrhUa1u67QjE1Fh4Kw5GCGEgJ2xvPBUaAZsyHLFbTBJr8cKP7KbZF4qZ5hCuaJYsfs6hew",
  "key13": "5ik1t7jvmSBcAd3bj6ELV1PhZrPW1Bjz4jPTXTA9yjt6eTCmsQM34oM8DYGwnj8HcrGkZuzEFnbY2sG3PtMhs4LJ",
  "key14": "2mLXyVZn8X8TTJQKFMWsKwpD2rjUegbzigTSET2vudF8np2eFuRvBeSq7NVzs1eoy9tqXHhMJFFzQzY6wayfAWR1",
  "key15": "5SkWS9vLBatDwkHxDX72gaDU4JLpdt24hGnK7QdzgZd2um5Q3mc4YrUGwDLSH3M8HghJqXa368szqGcX2QY3JegE",
  "key16": "3E7SpeQ7AaLZSKiwieyN6yVgJKsxjcofwtV5Zow3AwkcH7EpT2AnxhXNsXD8gCxJ2cBptovrjNTBAQUXdiiDSWVm",
  "key17": "4LUm2UTueZo3zxrorD3TUYtuC8DdQLQeiLXzHKafrbRzpSoE1ofFfT2hrm1z3WpeYXorFh8d74mMNBKXUtzf57KN",
  "key18": "51v23fMJau67hpsWHQWL3EiRXhZNW6NH46t4yqsukXmbVCBWcpY3oWWcJmGtZAKhL3KCL7gAgWXhmxiormB7CrmS",
  "key19": "2rqFh4zaq1BJ87gPCwbRDE9QMC42sgKQgk1pD5FuCDfdpcwwTiDgtHxxHqNF4bGW86WQU4SwF5fxjyvK7BVK72X3",
  "key20": "4qEeg7qUWf4vo4a3v8duttUHGMXo5YqyC83gsvwDECofiCGbbCWsjfrXJvcdLEQ8Mixfk2AwDmnqWwxW116ge9Tk",
  "key21": "2AswTVGUuTLyivoZqHsqWgT3eNPeRNQ5gC63mtHJsV8ocmZEyP1nAVUNqahXS96Fb2e6dA8Uv8TkjdiABY2SEL8t",
  "key22": "2G9V9GqpMZXByd9wBDTuRqhw5DzRW6z5y2VcuBaRH8F8Qb3hFRrLQmFJkMjYgvTDm5V3WDN7Skk9m5PRBYWtAtPo",
  "key23": "38oKqEbH5noxLg3274SiA6XQffB2ufc2jkv81m7Q3uCxpSNQrtjst9KckKUdcfzvDAZu11tE6F58hKEkzNEenkPK",
  "key24": "5HGg5wNN4vNuCgU5tD1MN7MLt7HJPw1bYkcJqhH6Qpy1KBqhNgBpFtKx4zALjcjFtfUnz7S1ZdFDMazQS6XuaunJ",
  "key25": "2ykz8bjL9hLJEswAowkZEyM6FQ9JeTyBvMdC9SZ6CNFGiZSaa43888D2rTfgJ92TfE6EcT58w63iovr8MeNSVD8f",
  "key26": "43FNqnNRUkwaJzGe7zEbAUUt5SHbanzeRg2Tq1GLHmUa7cy4B48L2hWiDvRrNT7XabUL1Km3VgVsENVSiy3zCVK2",
  "key27": "5vj2EVTKrdgzmpWBzMdMdrMuxYvKBnMuzv2i4SJe2XmQHyAWLbXHv42bBHYbMGeN778rxxxYomtAaSLkz3MZ8ioD",
  "key28": "VRoCDsAwrqafNMHPLXKcU242XZNgW7tRPZn4shBGuRHH4qkQmC2fs7ztXoYQvBLzrdfP8NMc6oHLxp5atYpG6Wm",
  "key29": "9xAyYmbLqSgcogvk4auuEWd5FXNTphNLpiV6QZeKKuatweoCzniaHrXMjEferQK65JWPWry7HRgPqBgMdJRjyj6",
  "key30": "4rwQRFNwEUxhzzzS6ZYSwDw1pgBP5PYAx3QpSWUufGgFW7rnTsbWh2J9Gz6J15aUpqDx53LBDrdD9D2wFeaFcPpo",
  "key31": "4r5yQVKq3tDithpbJS6TkCeP13kDRmy4VZerBFVikMKVQS95ykKZnw3vtfMTHuAuGx8aYVijvXQXtK2vXqSSjmfE",
  "key32": "eAE6AHfrow8mXoRBdkZzBqpm9hW5d2keo92q81DiTXDTi94hcjCPPLqNAD9n3jMdzHQJeouCFguvmoqnjcbAYGF",
  "key33": "4SCWw6HhW9173ACENVv34rxrJFHEqup5an7xZ7W6Gc1XPM9dFo4ZyQgNNPscL9Zvi7GGLiEtjzsidgAr6AKUeB8v",
  "key34": "4w1Q6grTwWqNSAZ7cdyrP9hFpULJmaMhvGLvHeBGEsEPyyWy5XqHyTajSobocUSqphuWaiVrcGuuppYMRkBNB9tC"
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
