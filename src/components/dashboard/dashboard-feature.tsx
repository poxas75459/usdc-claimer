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
    "4eYXHg26dgGKEE1py935MPxMR9dFuZ4vxFNtvdsZ7JBQ8DGamUscB3HEyAoLrBvHpbLJvDzr9zwbTibszPSusuiG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63rR7sGPuyEaXN8mjJp2QjrFLJUgyKEqCHTjZrJDGxHYdkTq6TsosucMdfEARb1ZnTpUHAM2EmPmnc72MLkMZS7G",
  "key1": "5JADnvSyv7T6mhTQNznve5TcDUuJPrzmDHB9Un17c91tG26WGReTuXMW6hJPoP8CSKzSSxjdJMdZ4kf9cMHGrnL3",
  "key2": "4TYjKsn8oKRepcwzSuJJruZgNgVHKP6ot3C8ECszCy29iaZVhhjZkGtXP8u9ZDS2M8xPhGU3dbPEzGQ27JMZGGgX",
  "key3": "2SvBfuMF6ttYhYNrgDwKJTVxZAGLkmwdJmbnYSMTjfjTcXF7hjbUf9TGVFkqAW3zQg9MNVfkhJ5tthT8qEgp3jyn",
  "key4": "3udZ3G4QbsF8VZbpf8tZkKv6bwpe3fxQFbdt2rQk6Ck8BMLDYnS4n8HrEwRMk18wCTGtAMzc3QLqnLVz7sa8D9wu",
  "key5": "2jbqmWdnHkS3dHFcvpyrCKZbDFwNth4y2yuRQY79JoJdpKD62PMJkTSNgdE62ph3TXZB4WYk55dPX3et3oTQegQ5",
  "key6": "bNLwAQ3ay64ZQ16zgxDatKvsg2trintyC6Kyz5yXueEqTbY4J881oieNfuRa6PpEDiZGRx4GTLsbCFNK8eg5z83",
  "key7": "4BZsC2T1ypgAQ51EWpX2Xy1kGJfN73YCvban29TqUHGgF6BUZ4KdSNuvHTPfUrcb8fzKkDv7nERNbBYZjXnStCdZ",
  "key8": "3cdYffzZG84bbv7vgxrgiBcXSx1MoU1nNkbPEPhQ9TMwcRBBHgP9tFZrCkFwR3DTaSvKAVMSyiDgGBhSWvzut2Jv",
  "key9": "4Zw55YzWd2LmS1LeWNQzUVSsoU6Fjt8fsZoZy4jUwgWVK1LxCg86MXeCLCP65F2QWRGiG36EwrAVFTwjJLN7sHeK",
  "key10": "3wbPmYYPU85e6m1QijF6nasR3BeYEZQ1P68C2Q9y7BQT5iYDqh5QejGbDMcnwZWFzJfs6vLekkXm4aPpT8MNuvwS",
  "key11": "3sRK2F5isC4SbCTmWa1HdjarGuGiUaiJ1US26RnkZcxC73TBse5Smutt498hgDWc8HHfZ495kGeQixCTGEZB5veQ",
  "key12": "cX1vLqGZjWFz2fRZ1Y7Rbg1SQZFZwY4WdMiicCwCvfwfryS1NMxjK58jGmH3n7NzXk2K329QPkySDbDZ5iT5pUk",
  "key13": "mhfTN69LTGZvNPqQ943AWdKFjjfVygBe6AuLUfsAoLpZymrDEq5JBqQu3eAjQj9nq3eES7Xg4suGg2NTGTQjo9W",
  "key14": "56Hb4csCr4R5Kdve6Es9w6w3CVYCAuXEVL4P7Z8c4oX2YYwDvbh3PiZBdUebjk1o2jdjHvupwZwSTqFGG9WTQQwa",
  "key15": "3RiQC53u3rP2VThEPNmqtUiQtELfybKg21nk4DqdHWJmtaAAvRt3Sya8ko69LkySeNrtLKxFpH1wzogUTfTbsV1o",
  "key16": "3XFxGKNsqzBqpcNMTxFwxEkvA6NmCF5NMaMUywP1TieuxdEYzrmEh4AtJH6pQzQ6zPnTZ42mTccy1E8GcwNyGGdz",
  "key17": "2BQ9ZCCPqbj8kknqWfdCf4XNcsPhPYGNjgPMxNRYRBDtug9tuVNnSTz9oMoBhEC8Q8aGAdAqJjDwEG4quBduqPdN",
  "key18": "tX9hPUVUehfXei7mbgCQgf9ia2aQdr3SKVpgS7Ubs9y6NhhZwZc99EVqKGAdgXmhoNyam1p1FVfd1z8icnSf8R5",
  "key19": "4GeUSXVfvbH7aHMqFMWs5QqT6m7pLb6gJ2cpzrYtoeSN3TwhuocKaWL1HsCCoLGxhbiS8KtTn2Y7VGi6B5yGwj4A",
  "key20": "3PjdM9seX2Lr5msWGTSMTVorc7tYEsxWXiXmEt29MAE5ZhZTdRqCquEpoLCqggvKbv9qW5APPGkMmjYKC2yZWZhe",
  "key21": "EJJ1a8Zf9tQ5oDHcGQjMGJbao2HauL7Lm4q286xoTBrH2Ad3ga4QCyvCoqAZQ86QDWHodbV8Y7kqLS3jmbsLdrG",
  "key22": "2bc9AWkj67CzLbAMNxdQct13zjGKiakiPVw6aNXFDz9qs3hEvNGTD3xFBEmjVfA195E64b3xEvdvF1Zh2DNuhToW",
  "key23": "2kGtf8bJCPWnFgG9qTCqKZBta8YvDCHdxEiuwQ9SSQNqwDkJxQjmQ3pinkNCdGyAaoqwxfjcLdZxv2qeiL6MyWDo",
  "key24": "3KcMmn6ywmnyPsdshSrvs4g9QZNSzoHAfQjbyA7SUr86Ws8zAfirtDzPgdj8nf32Ss3aw6Mo9kZjg1Tg38fRRDbY",
  "key25": "5qm6XXz2NLB7QK3BkP3FxFdtwpPydAJQB1guiVBnQ65inZQssrjcq4mWt4QPseqQ2Xvjo5WsNRKocEdLKcSNJAGi",
  "key26": "5msw8Zp8F3dCzRgpLTkfzwLZprMy2cqpDM2majG88LwppeyTFgPRPxe7vP36TjZRBkjZZG3oyQzK9NxH8nANGj1H",
  "key27": "2VuRMi1pVd3hHmmiitmerwgwwQXuipMJzSMm4z9RcNz5FRVNTeaNKJYSZMvzKc2ZCMuCZsfgf8zLBVKqB7dfot4m"
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
