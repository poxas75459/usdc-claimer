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
    "AiPDvBzVmP2ubiMV8BGKe3hyiwicacN9krEufff8Wshfwh5QXcT82UiQbH9Szuo5NUpoEtXnaXYjn9jTSAg2Qt7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28m7FWxCT3kUf7qNGCxmF4hyV99KVAFHyP7uR9arEuh5YD13mqBhL79KXdpRXSMEvuoSGmA34nSvt3bTjrACswjn",
  "key1": "33BVkqNyTbKXPkXYXyXQcqW65ucQovH8NzXeYCkWmkhq2VdM1isfh6kJ2sDyDtNvia6n1cHMaJn6Hzah4RicQSoJ",
  "key2": "3uMZ8Q9LSRHkVEbZHj9t2qYaf87Kd8r2miSHzzw8LAwzkpsWWgDvVDZGqFJppBqmi3fWeCUb3ZTqA69ko3Jyq4GC",
  "key3": "5JD7dp6cJynBjLoeyjYD3aY9B3GSXGUAKZ4hgLmz2bfreaMHwVeC7j1reR5jNU5XeYERTgtxwhUNFmq67cnXNFWw",
  "key4": "42UjcefJ5AwYXcgCk8BybcifFtBCovT5i5fr1hsgdYK46tjhGSW4goCuo1uqLo5TeTcSdkNePSuyPjwaqUxUjWcu",
  "key5": "23gjUfeCmNewosUm4krjyJBMoWLVxxQ3AaWuJDFjKdBEAsHqLu1KjjnqSNgppunyMNGScNp1Q4reShp4KcnrtSG5",
  "key6": "2HhsMLwASMYuW5VBtnherhUXsX69VqW8UP8JVqX2KvvXm5rCGcTk8QBppnwS3SKFNWsSYME69JBWBgEUpuqqTKRs",
  "key7": "4TCfWyYX5by9tQBaVgtPUTyV2k1ZRVJAjZYKJnsNH7hkL3mEGjKhoTp3PLHPQi3QhzTdbb9FBfgYnZjEKtPZ6NKJ",
  "key8": "5twJLF1sSMSCSZWKdEFysp2ckLV3Q4MhbWfZbQG2Dx4ELtzk7Uek9EmdobhEU51qWrVwPCCtvqSrpu1JF4vGUoWh",
  "key9": "3FzMtGFmuYFQZRUz6nneGsZt5wwsnB8BPT68kTUshz1hiXXGKpUGsYNKLySwknXuL12prEZyzFnXD573DC4YXstn",
  "key10": "5GT7FczrbPNVS3hLPPhf9w32hzqQbEpnGyuVC8BTxBQF1dmgxK8mgkd64w8i23MNvAMu1AYbdq9JWuBF7GaEeYmV",
  "key11": "3qfHDHmzqzutBhzVpvJsh4r47JwPqYJ3mdtziuNCpdcAQAJ7x1aCYFj4A52dCtrS1bY1oCnRzagnQFptErcEoWPi",
  "key12": "32xayFvvPeMQZQz3EVQ8EJvuYYc2DcRWqETtZXwtLM3BkqMzT3Qev6RHMTArxw2WUXMKJduqyaCW6cC792d6FvuC",
  "key13": "67VYVQi8A1hQrnGFcjLJzCKgPgCthnKbWZe8LC3fReQFM3RCy2UZZpLyKhs6vzfbVSyBQx9VYy5WZCVCzfPcHZQD",
  "key14": "9BjJkXBH3vGg1Gx4rLVE8aC7fJsgAufHXk2ZvSuN2hcpLsioKYLwxc6AJJdDLRZxPmtABUAuETcEXEtK1SpXMCg",
  "key15": "YFRZbonSPnZd4ihuRq36mAqad8f5ipBVx3CD7P9VC8JF2sdULE3YsP7McULZTVoDtaWGxz9QkHaZQhMA7gwJM4B",
  "key16": "42mEsFDeDkCsY4cDsKjr85Bz9cZEZtL64W4dyseJcWU3HjTtovrWBEnchsXXirSgg4pGTzMpD52qepfUkK918EEX",
  "key17": "4YEr6Nf9ttVPUEtpJxXNFKb7x2KkiQeB9NKjdR9GBstuSDezHUdX54kXHH8AjoYhX2dGGyAtCgJPUDbYPip1LWjH",
  "key18": "3mh9iXC6nSBhVZsTJjMgSJwZRWUQdxy8P32SiYipBG2PBN8nRBFWxSEnAAGw2LqkZB3KtcLnhErBW8VTM7pjj9xD",
  "key19": "pdW38c3xyB64CAB7EPNP7i8v3ZLnZtBnXrfBGYsvEnAyNrHA1VaYFT3Jzbk3mYjqQFFr7wLLAxjvMm7frdTaXic",
  "key20": "2aebtrb7tR6f7A1S8GzZojX6a8ah6v1koQjN5zPbQoq4GcwzmYCoTJ4w1r78GqdoRS8aGUxiKf3acZxF7xrWFet8",
  "key21": "41rXxWmfBt59bJb3bjAMPpBut9JFCXVbNLSnrEeK4hfNXhC1vFC6z3GtNPdGap4e7RBwk6Vwa8CozcGCExTWrxpz",
  "key22": "2fBGFHQcC1VZnU5C8Egwp86KUv5YnHUcQNd7H7y6XQhZo8jxfjmwjR8TcFvHSin2WThErcgSwas52saUNJgAgXyD",
  "key23": "4X1vi8EwUMPXAFA1asXaeQHqQBoWduQEzAJHjG5jTjffyPQTMVS1pd8cqjgD4QAhdbPoTsGEFqqm1neGUvrWk9mB",
  "key24": "3fkxF8GJG8nu9kdmUimRxT3d6BeMKRDUi6A93o54RfT5BkEjMYC5ZLj6pa7EDLzdt2ho2yfuV81r9FHnkvUyBBXE",
  "key25": "2dwbCFPBgqd5rV2Bt2XK1yM8jDQQTYop85b4QCgitf61gg66q8wwgwTx71Hje9onTZNK5Yb9vKDeoCQGkPZ3HQUQ"
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
