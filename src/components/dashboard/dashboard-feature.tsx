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
    "2N6hgKLVxpqXDAwB1PnGUmw5FyF4EUfqoZ9dhRrRSbgBsVQhA5L6o1F72WBiK3EaLgb64yYukC2bzyKBXihHGY33"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wvDPq8y7tssJkk5xjCDWkPooQTLSQmVC8zYxDiAytHmoQ2JxaQxMHcJpDTRb3wrA1CUXakoh3hceghH7kBZo4Mj",
  "key1": "S6xgaZJbTKZYunuy3feBxTTnTC7oCaWh3QhaiBPC83eJVChvfz9b6wNCXtXs5H2gCU17gqfjhsxrjv5mFWainUg",
  "key2": "2vwGHSN9iMGiTBnzXG2LoSExUKnCVLwfAv97UEJ8jxkA8LUzc8Aq5x1NqfJp1t691Uwkj4vUo9z2HNRYhbNAj2zv",
  "key3": "5cSXA1cEPGKdcM1P2nwEmVqsQRpBvXqanBrZUS1eB9AbqHPbSnc52EUo7uZHzCQxPXf1FPPGDQnRRaPmrBjgFkRT",
  "key4": "PNXXYgCehkXFsgZDJatoZvLrSw7GhCSRBpXpWHXT9apRREHMSSEtUmSvdhBqpwf2GeERFr5fyiWR2G5czJsgVzy",
  "key5": "5U1mYsPEs1ia8k15QaLKdgqoxqSPn6QAkSutUvbHpBsmXYAq9ekchEqA4ZH7GRErsnp4RBrVfaR5fSNANuzbDmAo",
  "key6": "5betG98DXMxsTUnCfDXw2jvQBGEAFUVYWHezrwQRv1s5rQcxLHaW5zgmoz2367UnphN7KDiKb5zxhEU5uceK1i9g",
  "key7": "5dzQq5goyonHKriXn8vZyxomN6GHR329sa7Ab9uVoVoSEcCAruTkGaByMtPtpPMaR6ZtajJ94gKxKMkhVGf9886U",
  "key8": "5MnXN9vdtUbVNKey1L49SFEXCAGPNkAd3iZbr6VCfRGq9UGqHjSfMwaT5hWTTQWn5jykHpGv9v3YxYYV36u7j8XC",
  "key9": "t9X5KNSfpsHdVLy65GeVouVmAhQ5WS3fgN9d6gjzUh9BvHEjtYfHyxGHRiiV964KYZLT1FLBWCPPsdCpEgDz3dM",
  "key10": "5bj1CFMXvSL12ru2nGDoYrSGeytNXnWtoM27nkALRtKSE9BGhHvLMu7huGDPsUKpjrJq6bC3Lbi8jKBeK9NPZX9D",
  "key11": "5U84RzN7E8MwxnYtzzinYt9AsJvhbtJto3L7WjZgPGaBZ2aWsGL84JGWeCcHi1gQDP1bWffKVie6Wss9ftpkgTkH",
  "key12": "jG6sgpE4vibj8JfL5dU5iBD9A8YyqqBGSpXno5fcgLjpn2WgEWwFNX1ZqGQKE7ikYZ27NuKntK12WCxu3TNWT8b",
  "key13": "XTgoEFqAi5WJASxjNdKQw5x5xUsX5z1KawRzVhcS7S1nzjXfsjyiGAbsdu1QAJtYqib39A1KYWMeNGwNkwhkJeJ",
  "key14": "5wY3V9J43fM47Mq1gWKaaTGZks6ApoaWeSQzNpfbHUmXrGAhZbDwWMRPTJRXNC2C2yfo1e1KFHs3XhmWh4Ub53ae",
  "key15": "5VgwxmYub6bqWeF3iT77bhMs9C7DnmKDJ72uz3pod5xuohvYkNHWt4VDr21QRhHDepzXuN8BaYy4TeEALfgdeCJ8",
  "key16": "5wW8QCvx9cfxo86Y4xDT5AqJethQEYWwxY3JKdRY6wopvaDt6fejY2FFaaLyn4R4nEuKn9z4h4Kr5cbLogkGVSiL",
  "key17": "r3VBhQCr57sd2ZCtQnC8Pvi5G1feex2rhsmUyEkRTsR84V66UF4kruShhi4Xo1fLjN1xXJfbwjzU1PW4HAnVYhN",
  "key18": "4gELYwoWENr2q9hybv3Tiwc1yYv7TGr8M78QYgZJZUo8BidsSd6myS3DPC7aydGS8wrgXcaAJcbJNrpF1F8mk7MA",
  "key19": "6VKU1xB3KWQUUsczg4AD2zrsn7FnsvdNzQE62RdW6higC3efKP5pF34J3N8md2o56k26UjFVQHBD96oj27hPFUX",
  "key20": "513BQtscY2ZLhYVcckEPpxtPdiszNshiqY2d31gRKnUAquBDjpBJygpUg2WPUNHyUb7DbHZma23Y5cYx1HcQp6ux",
  "key21": "2DP4JreA5UasQXkcRDtq6TjvYv4UbMgd531AbfYP6fWfZqL5m9DWZFUZ1tpnq8Ha9wLiSgERZTWPVjDmdnNrWSJH",
  "key22": "4xmWuE3Xi446RkHgG6JdaTuSuAhvhPLZRp3KZK1T7XhyLUu97S41S7wRnpDzxyaTnYhdntBpfozDZouRKi2sUxGL",
  "key23": "3oXGb3npsfw4yWMb9YTeitQ2pUKyQ96augNBgQfocE7PCk4mtYZE7eEmE5kWzj4bySybqvTphRLGBi12wjiBveK5",
  "key24": "3dzQkNac8ZjJraeSGf3MTj75p9tcpjm9XwJaBXZDaHQU2H9mRQF5q8LWcJG7Qwu7nvomLp9Goykr3RjGzD9sStAD",
  "key25": "5egk6Mz7C6PnZP6zvfRkVqiK99XJ9ZrUvSLbJi4yA1PYMnpudUzkj4NPKVjSK1YaZCVwAtJVqdvS5Vauek6nGngx",
  "key26": "5y1w2StGfuHS3PZsmC9L7opwyvH38tY6m7w3t7agHaDRK5hbxKLMXRgetizEnq25JBoUxqz6i1PBk1LHGfanpStk",
  "key27": "4BySy61Q7ZkprTwb3JPVBREjs9PKeTtsewmg1bTzxjM8AtXb6DhciQGfxo9cZeHxXuRUbwaqVZzQNWRikZJsG717",
  "key28": "2CMe18aKXHfNuJsWDB5a81NMLSLNAdp2g1wCvbWGvY6yuEtMJvV16fJZ7ZQy486X8WTzTeGfjQa1JMkWi9STynQa",
  "key29": "4Rrgucv6r2LPZLvPdHNCEPnQenV28heva9V5Br6xeKxwEkx68dzc4P6eBkatNcVRR6R6aknyo3QwyhqFT9wjiCgS",
  "key30": "4onfpQuqhodtjGcyeXHan5vAg8yhaZFZ94sXr5Vv8mstzKPQMLMzq9QzvbopiEVFgeLWCQWwB2BZAvSZLQWBBXbf",
  "key31": "1idpMRFzeduyjspKoTAjLKCZJeB7CbgNwgJYWxsNAMPxutwLcDoErCePCqNkrt8238PxYCQGqG49mVPZbRW7z4A",
  "key32": "4SVgwvti6RoS7Ub1n6Qrrsfq3jubQeC5kpDBhFdjDNNDtXdEgviju9iwantbqjKYVSmjPaaTfbHvTCzTxiyS2MgQ",
  "key33": "3hwhfzEc7zMhKVdja7Wcyc7xkBoMLjwTmGffNyWwn2w4ryLPD7jMA2aADp53qbNqPkvx6QxzwrixWGQugcfTZKg9",
  "key34": "2RGWpS3HqiUd1MB7uDPoC1NAbBxT1TtEwbBDdZsPr16HAASJS42EKnug5qwQpgMW7PgMWBx1r6uJJJJ2ZQMqe1rs",
  "key35": "25pSAgtF2WmPzvT1KEMPWoBFVd6qhuF1CJHTRv3B1sbnuSmUtLhHw5xkVLVQPxuWswcuay4zuZ1T5exUehGSdHEP",
  "key36": "5tbsYJYSsX4mn4uLPbEkV1wKH8LW8dQTnc32LS5AHFaGojeDhtbSo4x4wfLidda42jrR5XLHWwQQAMVfpH2juaW",
  "key37": "3efsqTpZiNx7JUqe8Q658mDR2vpLMMmkQzqdJb8ZJd3rV5k6Sx8k9ot2Gv4uMWvjZFzG3fnfT5bWEEwZsNKF13BY"
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
