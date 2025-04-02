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
    "2EuNxpfVe8HyC5VeDpKqodUxNefz87wkmRDg8GDdJp3Tqc5MWVEiswruwxoAJcUgoCTgX7aNCAeHMiMJ3NGXkA8h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kKPiMDA8vzVLKauGdioAMRXu7Yd8A5ioRUvE9y1so6P2jG2TRoLa4fG6u9QfRraqKvT9hnJEWAB43nW4PGxLLCp",
  "key1": "52XHMpseT9nATmuy75nanWJsMwqDzAmTxvpscrULfj4F8qhNshhg1wCmC8wGLM8DTAkA9dkCeTqdEre18AbPyD9n",
  "key2": "5tVR45G2TLYxh1CSr8rV8FeikpUtWGHrMK7Y7ZMKCPpjg7VpVe6mKuFL4ipsMgU2H43jyb1Ktgj5Q4zDmyR361cQ",
  "key3": "4cGW3n7rQGVF8ff1A4448i92sUjK8gH51j4J2DjQ3VvtQn4cHguPEn7zCYhWSEZouZRkSqf52aNGT48ZJhMp5HWk",
  "key4": "34PKeK3qUZxBhwVdj5Xc4xNH9rs2uhLvRhfMxdFMo68T8rxwR63vVXL4vfMfthLCmK67uH19fWgr25UtLsYARon3",
  "key5": "3reo4H3tWet7V9H9pWQumPButSxFC69jV1xV2sxKkBuTcEdpXt4iNRpXdNz6ZXn4W2yniAWAe2fJuKJmLzpV73z",
  "key6": "UpMPwkmA8Raf1TpBpd9puFraCfxDE9W59K3UkvUa6soHHTeP1c7ceKK8jh66r644u1LsCHTF1TXyHUxrHENWNsY",
  "key7": "3v364HbtPte6Weba8bEqXTbU53XJQ6wEoTo5Hu4hNaHtwsFQYbXqth4kpeTm6kRfNjSuRx21Hyu34uUfhj78QrWX",
  "key8": "3UjjUaSsjQmBhe22uqbDmL4bRCwdCuWgmWDb3faH1nSTwN3Jy4ZM1PqTULaTbeWWxYTJ14VeGDipnmiC4VAw9cH1",
  "key9": "2R2GmXo1BGuW82vktAGtLhwUqumSzZoKTRANCjC9G7QvAB9aKbxEKmmZkLxseE2SmU23TiaSL6yPErNhVV7zcmNc",
  "key10": "4nBabK8NBtQRToJFdCNAjAPeCc1tkfDtBtxKbsALGGAWtXgbKenuDiuT6ZCKvTPFC9VwFkgJ3By351Y3oaxjhE79",
  "key11": "5VciTtARpj9SeCYtUpUphkG8dmBzERN6UwVzyzNnQRozkSS95yZzrBJMguFm7tDCTqM1XbiCQ1JH7azoztqkAm55",
  "key12": "3c3t7cotTfL5MTZMupXLdyHzHV3BrBfz3Y4PF68eX9PsdXnt2nCP3PBW34rpJ5wYrteupdAtuNkReRw66jKFqWgv",
  "key13": "5jPdYdwknmSVcYrVUUwprDpMj7tZD6xmB9w7DH2zYkSsgfXsfxBd9LfqegmG7M9NToMAwKQxurMXowS8sUYWqVX7",
  "key14": "51MjTUrhYZomXeiWUWwcvP4WwwyoGy5GsFmHLTMrqfoFZxcAmCdHijG3Vo6YDXV5osv5ZkjojkTx8jJSNeU2RY4d",
  "key15": "41oajhSjgZQCBAP9jLaBiGJ1aKq1d13e9snwso7jv9PYY53AfLRrMAyufG1DZ53M8VZvZD3URakxjmRLYcVZFHsz",
  "key16": "2qWB2AXCFn7p7zwNeh5HC9JXkndbWEE6TYcqc2FVZugTcoDpbVTy6hcKVGaWLVUyEJV78A34Jf6Ni2MLbYGMThQL",
  "key17": "2aodBFaoMsYWTdj9MxjCnJwbA3KqyzkVYa5MqpHAeFxpNJYqFrQv7CCKZLbZijK7pGaZDbcp8n9AqtVGSFEN9iwj",
  "key18": "5as2KJyb4PZKmvtMiE8YMUsJ3dE3ZmhpjsWavageLWEi9Sw9CDu43hL7GuVJ3RakedPWtRpDfusFdq2XjwqUHX2Z",
  "key19": "2Fov1WKY4YTs8TJ7XiNXGikXV8KfMpj29zBgHJUFk9Xg3rkXds7YroUWr5e8B3dQwMF9JiKhJcukDt35EdFYpeC",
  "key20": "62kiaCPEHqHnKizWFXbgMNwScYAPhvH5ojVvjcCSjhVirpcyVo7Rzqbe16hXxNc6BdPJBgHJPxqEDfyFSpjGYg9s",
  "key21": "64tSZ8LghShB3hVgAkBXTELPGfoLQHnCJU6Pup5CZsS5Hzc6r87MSB2GbkgC8GouuGx5YWeY5mSARC8oRfebGtLA",
  "key22": "3xeWvtudiag1cdypyzdtUg2rwBp7RYucrXMciTqmnHz55FzcRLNdGHh8D7uW3gCFagRcDKR8KMbUMM4KTj3zGzFH",
  "key23": "3ayaPkiKCE9Rt1iwkBR6sYsJyFaMY2b5VkSjLDfzxQwbu3hkb7XMzn7L3neBvb7KdWMCCyUSUh8omuW9Z4b92KS9",
  "key24": "3FjFiPYbh1esxZ76EmEdQjV281J22mckckgiaKzZvGjWP9oaNPzud98oNPTAhEEKo9YgwNvBUrpHwVyMN1qGszfV",
  "key25": "2hXvjTsW6MamhnuCkyig9QKLuWEvfSDHdf2wCL6fNnxWPs49qQP7FR68PWiMibmRUF5BxCyaRWA94UKxb9Xo9jXN"
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
