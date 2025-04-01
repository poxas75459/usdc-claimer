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
    "3tAPVqCrMvkDcRMWRjx29ryEpcyLHqrwgD4koWbCYdVvk1rcRfuNT8KNcqvxZbZB8LUAPg7KqMkV9vM6HinMVb2p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y6RyxSqimX6T3Pome4RmP4QVZ5SAGd3GbeWncDB47N7Z1Txdjuz9JRRtTVnsrzBwjyhJPsAxXcwosC9NNJeeZrK",
  "key1": "3xC4k8qiRiZ7vwbog1iJZoJCPn2d9VkJgYSxiaMry1vXeQCPwFoRS4GNk7E1kgbJt1idaiWpkdBTCXwBbxUEXxF3",
  "key2": "4kggESrRPediB5j9XepPJMjwkHptHCFpQQTYL4WSchUKqVtNAzpRWJfSScQYCuTb2xKuCAFosP2iTSL9QxgCNjm3",
  "key3": "2xqiXU2Lq4qvRRjAaW3zuHQ9G1D4aFhH9M2tuN5GU593n5rDwkKEZvRb56L1N63CgKjmxfMzCxBFJS5mYFB6WHvT",
  "key4": "2uLEZkqbktdwdTCqg4euHPh5WqJyeRXwfiAkzod85cHCyxCHEqFD42vp2ddiQyVisiDgd8Yp7XyVgtyFBkjdBbVB",
  "key5": "4UQdYK6f61uDT4TAx4XMtVjfcvzYep9gudy5ksLkbNYeSCMZqymrJJBitQ7Bo7cqAE6gy1bMKEhv81VWbV1FmC2H",
  "key6": "4SZj6wkquXF5yym33X1oTY1p8m8CJe4nPVjfTVoah8xEHQSWhrS93KFsWbudDWYV7bRp6eVWQhafQXHBUnTWHVu8",
  "key7": "3KBo1xG53Qzt4GwDZRGjW8pKqwLxkRjk4Mvbd7YswtdEytu4cRHAb6VSPUFLzey3c2NH5weu6dx7Jz1uAHypj2k7",
  "key8": "2VyrB43pDyMr8ShHdHV9T8URbAyRzNBetUxxHtPpRCumg7hKS39ZQgNBybofPUC4wD9nhTvVahv5DwCegBemvAZf",
  "key9": "5LqxfKWRjnG8RSGL7R7RCQSS6ktNvGEjapSjDHs24X8PKrq6TPbEMg42kpHMjkvDdUtTHV2bm8jdCUrKswQZNf9C",
  "key10": "3tMLu4qny7ep8WMkNEEq2SVsndZe1LsGs3DsanVzJam2Aw3aTmaRy4dDHYNhrR1GMwbijen9Lq1oLmhQRSjW7Hem",
  "key11": "YXTgeWHd7akqMWx3rfJAMxyiEHpkjnJA9YDLi1KYTyN5UWw6ZRktaQ1bF5uE4CHV31ayBLG42YpdbmPyTgbGHUt",
  "key12": "5cPGqBPZ3CrJdPWaKKHsu8vrZdU6f7CXHp2fCxWSDeHjrkMw3fZVDxNhKwg9tG8ae2DUCaVtXQBcJKKJdMM8J547",
  "key13": "2KBrrgpmVEuonR9xYAThtoNGHjAEzvBThkcote5WZ6YUSPMjUUKZMVWEyJGeqojzhQ1Lv13vJkZ5PLpgbrRJBRD6",
  "key14": "4B3dbNrD7bwNKnrFBLmxYd3MJiyN2vQCRqbtj4Ww4NRYqhHnMDe18VVTqEyf2oKF3LSGBD5c1qpDouype7tGuyTE",
  "key15": "4Baq1B4m8y5SZ77cisfiaV2dwQXPukt4boh7pdAtZf2nBRTrX2uAH6L9ku2YabeXnVgEAJq3BZV1KS4Z3Ke7wBz4",
  "key16": "35pzVoejiAWsbqg5ASRYyqWXsTTiqC2nyg4Bm9gUs7FHCcQKX4RBGPybqcAYDWKMT5ceQLJW8m9zFnsEACfSWE1P",
  "key17": "33qHWtqV4HYyNU442okqNsk9riXRMJAQ8v9bDzX4tusSu2jxjBKitUm65EJ1QvkgpRWzFLAoZ6anaavfuNcFkEL8",
  "key18": "cmgZgvp4oZtQQ2sydo4US3BQRdjBZHwekgYGTJwbnk8Gb2L3XvDWv8AN8UwKkCx9NeWwGegPaGBdtDJ1M1qVAgL",
  "key19": "2xQtqvdJHHVY4Wb8Nv4ZjeRqMf2FNm6eATH4xdojjogMvLPM5f4TRHZH29r2DT8Qp84FDptxmF9CNxyPY3G9dyM8",
  "key20": "2uuZEfdWwT3yc9PeWL1LFVm62jsyqwVgRjLJrbjbQZzfXo1q1GKD8td4ZXr88mzHiR7iHebjSUxBxxAuMtLcd9hb",
  "key21": "6PrDDGJWNN9sGnnBEFSBMnPchpXjPeTE1qLgLGCLRhq9Euunh1d2CykWo9HamumWGRXUTTD6vzZeYvyAD5kTCoQ",
  "key22": "2A9odX1Tr525Cs6zsRswd1iduc5eZm5UGKkyg9obXk619QKXwZH5nQ2ibER2vUgRBG5gCxTGeMDK1tjecCQ4ipmS",
  "key23": "32QrVFdg3cGs6uJ7mMZjtW91WZnWtgfp1QXqFqJxmjcrpGkaqiHVdLPJ6Ea12Zz1TJc757EmKXLJc3nHAukFX5FD",
  "key24": "2LPiktapyad2y8CDPFDN8ad6QRg6f3F3ZYqhg6nCrSwusPQu1KuHBXrztwkegNaWmeWhocGVJTkCCoa6WCoWo3Hj",
  "key25": "4YBqjZYDJmaE5uezFCvF1obnurpuuCwkdHbu7DQCMD7V4YUrwbXxnEZxim9YUe6iPtA62WDohbaFBwKe83mCb4Lh",
  "key26": "42JERpq2NgXomfjhxYnayxV6aXiLvuEgtNdHfJqUxqBE9Fx5Xu3PfnGNBkCPwRSnBi5PgTgbs6S1pGCXDcktnYE1",
  "key27": "qBQEv7K7aHJhJ5PAJPco7BFKU2gEx72MrhgrL9XWqPe7jVcu3YH58ihjWNXJw4nMCGnX9iBSvbKUunMwUKhQNjc",
  "key28": "4gQHYYwAHQugAg4oBfUii6wZeoWQ96Wc1dTg2CR6MaJjPVyRHq4XPoXK234KPaZYnooa7pDPMqbjhtzH2SmYTSro",
  "key29": "34ju3W6MZEg97K7DPdMKuT7QX6CbUh77LpD4TL8QegoYUH7XwmmDoQypiskdebfS95HkwBDCEJ61EsFrHQJFiyVg",
  "key30": "3zCqt5ZCuDUMco7ABoYU6i5SKz3qFCAUhWeFRCoAaauinRETV8HYumihtbMhteRJsv7LAu7J3Q3y1QaYMQsp5t2B",
  "key31": "3tgj4UcsCMnsSjJJwq4ivtwRPXmdTsLNZV8HNTiZSw3gkaT86pC6qVdWFiBds4kb1V9osp8d1BkjmxMAEnksnVqp",
  "key32": "4ML93aqasrmrC26Wu5vxCdbBb9TP4M8ncEiN8cSGF57pnEBHf5b3VDeyU6ZeCNwioDG2uSimFxKV7iSEv7bbCmb4",
  "key33": "5pVTE5BLnAGfouUNSSQySxTmJQVA2eFsnJwE8ztQbZZGro2GmZtwqLgKDiNqjyxtyqhx9hxGzx9NQT8Pcu1VcMPL"
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
