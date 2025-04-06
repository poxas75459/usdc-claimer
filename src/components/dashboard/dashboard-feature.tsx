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
    "2wM75VXeto4vUsfcfukr7Di3bGn36iqzNVVErWSDQgEdZdrezDDmpSCfne3mkWhQY6wrpPe7QX4PHRRSkhiq3tc6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TAgJPA2wE3T6xLXsutevhHvRHS71RconpuUg5sLK33gPnyCZgWy1k6C7x6ANYSSwru3ray6Zj95R48UcKH9sLai",
  "key1": "4R6yLBYkknZP8ceh3y66qxTcjAxdBeReLwnoR3JPmcjw51zCToatWEaKqcZ3TJ8yfVFomySkByM7P4xHv3BSSoC",
  "key2": "3E6sv2JM7corK3a8tkYxhaHyWUYvtsswu8ZKH1fN3iNdcSbBteBGazXjLQ48i3ybTpncSuLUFNRqUQYNmL23Z2Tq",
  "key3": "5fTV44uCivhSjXX84g7nh7cFnkjskpKZMSgJ7fjEbCSMda8ZKPvUHJRUZCepwBgyRuMeGZUEYjecgPDCKYT1LEJb",
  "key4": "4huACyXSZoSNLjvzREfLdwLqVs4i11UdVLP6wiXDdCJhxFdqP8XiDJgtiwi4cSTYeZpSu5fySYvhZ1XfMWV3G5BL",
  "key5": "4NmnC6LK8xkBdyKvSQ44MYEXA1WbqaXyxzFx2rkbfFfiDKouahoxey9essjVN9MoaXRNyn58cCuKFERtxzhkaYCM",
  "key6": "3JKkpFMHfANjGnoDk6Y5JznN9t8zhtH51TNR179rBfKH9Ye3QqhQWHkfx5dwfopARiCNor1mFzKfE4AvpfS2LdhK",
  "key7": "34SyJQJ5BX7FHWELtLUtb8fuwWztVw3csEgeBrAGCtdrdWPNBWLtuJzCVsktK1wmsjQwycdpSAbAXZpYAgF55X7M",
  "key8": "jsmoSZVUk8YrSEDBgRUfQt4tWjX7BDCSGJqdGXRhRQiG89Ado2dYsFjJaPJSUb8bxVYuBkziXFh7hYYWBqVnL9k",
  "key9": "5NZTNgzsWLUNDsfoFfypGjzWrSqdAwCHfxYhRxBGyzyxAcgpb9nJ4qco2XeqGseFbEEkUHQsrgWwpRhUe3XyQ3A1",
  "key10": "3HrWer32yYQ8xg9EPuAhHzNjvGS4j1TwMSa5zKYnhAjaLUxEVbSN7ezt3jMokHSNLhL73qbERz5wUyF6Kk4Li1Su",
  "key11": "63qrsuF4LpiheQgJKXY3kWfeJS7hjJQ4RAUuCKuLSTeVsNhPgba6cPHPcG235DreW9yZYYX8zX5cqCg6vJKPaJw",
  "key12": "5YQP4TyimLpJxgEXxSu43Bkm5rr6VCWBLNPs53ELvVDpMNbt9YySjeqnBCzhWRbxrTHDmkJmLSaenCDnk8bYSAMw",
  "key13": "2uyyZu8bSwLU8SQfDBXfeK2YPro7LoU2fsVjGoojy6RFZy7HnAh3ti6roganhVpuiWruwHQTC3jPXcyfni4uxYix",
  "key14": "2xSXh36a2dNQEFzP1KMeH4GvDeAoro1pWB5s8S2JstwCB4wxVzyBhGp8rfgMbM5arggaHj7xQZS7cbWxKsYq4Dro",
  "key15": "5Mrp6NDTnz5RN9eGkiGCWdH8cXdmjegSHTy4ac3u77Qcg8mTu9wn6TFdEE2tqruzmoj95Gy23Huvmz7jD63E4HC4",
  "key16": "3SiPcX2uqntcPuqMcDnPTNCAipptXpGAQ1BEm8DC8WexTY9yMrqjD5PJ7kdchD3hkkmxno5hoaJ8gSpmiBwxc4EZ",
  "key17": "ry9ze8m54wLsj1czZi3M8NR5NkwUueFuEQTPY7NonWHHGfLbv1J8kpvBCbdtR6Mvpxg8p1Mg1pbLCyFEaJTzg9E",
  "key18": "2ZdLf5KJL1fbdmzT2uXM3z7wfZ2QiPhMSPWNa1T1FV71VBFWEtuUQtmDDNUsyYn8gNTLqCVR39XFkrfmRAT8BSt3",
  "key19": "4s1a9FuFw7tEroCDy2qsDtukqNcny65MLTQESnWZg7GjU2M19rYX8CeVH23EaTzTqMdqEC3C3wCxFMQac1JizuEi",
  "key20": "2TtgBtvJnqL36ZBp3fRevj3yGZ4bxBNnxEF3gXdS8EVW8TL8WaRMzW7Fzdhu7BWApup6APmZ8VDq3VQSSZeFxSkV",
  "key21": "3eHmPEJKDxN4mRKyixfWuZAJ9ntz9SeBynqqzh14CL186s5L6bqHFGWADYH2wkvfb1g3cb8FTaDs5T9jSecyNBgn",
  "key22": "2ZmQWNd5mZgLunF76AA6oFrD7o3sAR91MHCWqdzKT6B7pBqvkCG4uJLu6AnNa9rWcoAxo3nbojbz2qCCwFJvyaj8",
  "key23": "2B5nB4sSK3iWxjP4QiTECBk55fGSMWMnxn78xiTx9RoR3JJgp27esGwWusu2ifrKq9mQeFiqimS4ajcud33raiQ2",
  "key24": "3jDAjgtx7CA3ExJgt4R2Mh2EXQ3Bx5beJ2irWmz7hKPQU2YREqaVV95LjDA3d8ku3hptCbfsPzZUyubVKvtMmZPm",
  "key25": "34K1BAm27WnyDhgct5SDUFSdH41SLmxo8nqFWhkn47SQfNQxjUTejqKWz3wbip9oTHAgFa8chfQyLC6xEEh9LmzN",
  "key26": "22rVouNPD5WytqjEhCi1PTaA7EbQQYb6wtpGbuH7i2MjforrEx578NFiDP913htMccXCRzfg1A5ig4zzUgfBr6Ro",
  "key27": "4GoLAjM5w6cMGikMugoYmYHFBXshss3NRmq1WP5apoGdkWtDnv9DUtEpThUid2VwMacv165GHmZ8szTtyugfQYPY",
  "key28": "4Aj4mteEjkaS2v38ZtQTT7qA1yjKBgRUhVYhq4EA3qjV27mNTTvnoKHGQKqfnFtQ8Vhc1sxSJMXVoQQcGVjm4BU1",
  "key29": "3HpTwNDkipXJhmyZtWC87osib8LkpaMZKy39YDndrRxudoMN4JsqBxXgsGez4ihJdkQiHnv9Dk86bJseYu65xjb6",
  "key30": "2ieZPFKAzAgSyHuqVL8Rtj3fp9Y1Lz4EJLtQcbC1M7E7mNbJJLekAComUDGPgfQUvojWM7v4TZfi1zwhFfHNUq68",
  "key31": "4xPYVYdZQ41vij42W7Dezt1VwNQbdEd7aX8sAUwdQeVttkviMSgq6E1vT1g9uHrtBJ19hMADRbnga2qbCWxDf3SW",
  "key32": "4grzsZPg2MUA5iPSUNKGi8r33FVLL3u2dnsAxwHLkwe8NsE8xE2EA8Dqwf8WbYbiKPLMNbe5sgfZaEskxxrcjGwe",
  "key33": "3VMcyNDo8bxh4pJuWVYYFkfEPuKE89oNHk46G88tgews7vwYuQ8zGmuxuG8gDofuid7kZocJ5QYGim2Gq44TT4X5",
  "key34": "4FDgaR3mqkrabhiYxTjAgsB319hTJdgbpkuW9p8fDTG7xs1n8Pjznhin1T1CBJsrAEtNVEh7JaJmed9khf1BATBg",
  "key35": "bRe4Zj3h32JLi5Q8nrmCqjvPEPShrENkEznjYP2AM4k2qh5GCSk3aUtp6bhdqMdGDMPoho8T37CLTQK6Q3D8Nj2"
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
