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
    "MZ4eChiDE1xaeryibtzLviuZx6w8BhgtddHnFd7Mp1EQRvsHfUksRZ22u4CgTkY2K9uZFXMAMJZMsFN6g1qt54C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24wofWcrWMgBsN39FVvtRN3Wk6vr2hbEL6L7bsQqhRqtgogNysgZmBywmNaguEGPSWagKwf93wY6MPumeEYGwgei",
  "key1": "5rrPTkbxjLhyAj8ak6Vt2v2hmRNVMjSJ1zEWrwiss6KHurhQByTDvCKf5XbeeyrX7nQvxvM9ApR614K2FnsDLWKk",
  "key2": "2BBvLxAu6h6Xm6LbDeAzd8uTSWJ82ZJQvZsa72mSDPcoEFD56uuLLJ2ydRNVVRxVN5KJRHVmH6t4iTHRwWqfVDft",
  "key3": "1ExbxokrwkcrJrRPAA2d6qiNqw8VZQJs9K3n65zV945JhT8UPmk6RJfWParf7UduKacimkk4LEFoWhK2TpFopXj",
  "key4": "8LCzqMsZe3hGg5ogFxveTT6LKqGbHcK4qtY1w1pj9WrLqit2ewmeE3PaNVgLzWhXSVpAFHpYQiVKg1zjzAU4Fd4",
  "key5": "2XCWDJYnVkJ8ugrZkKEDNZTQQgJTiS5NtyDBjryK8FyjUr3puSh3U6erxxU59zLhr7pVXWjnKMmvVuu9gT1kFjHx",
  "key6": "4P4nJVe5TrXPW89vMq875FZJdFBpimLqkGioyRcY62SNALGfky9y6e3Y8zvEaWJ5y5uULzbpEqvNBpJUa9XpSM3Y",
  "key7": "4cuwnwKTVRc65zBSRdffEe9g1AQ2cxXSkij6Ku69qs6BjayGNLFnmSSBFty2uU7rNsr8KWRXCz2NyjJhNzu9zRZk",
  "key8": "s38wVxqnqHbxzKzJjFeUnttevZKCTEdk5h7k4PCezQpYfJdPCv7VFbhu8LqRf7exP9ipqgFifLX5k55rEPhjMow",
  "key9": "3wWwMTG3LQCY2UXchgopnnHiXAj14mXbKF5EDSqemn9ViGNmqrtEbiKr7VvfwaURpygy8FUiibE83Q6cKZHRqHra",
  "key10": "5PC185dzcVD7ibb7aGEV8Az3WHEpsW4wHs5uE1LSZsPPwtWxkCq1kJXCNVtnejYsLwT74nPshxhUzhPwj2SQtW4x",
  "key11": "3GkBo9c71xGzUzYwapNAXUogoK9omZzQPBYWYWjtY2YxDMy1Ep73SnzLRhEaUk6deEKg2dESxuRsybkNjjJh59Uv",
  "key12": "2nYSK8VMXDdrtitSRJyn7vwcaTrs9kmvtF61JtwuNeMmEisfUAaSYg7vU1VqrL3eLPcb37vGdhfEofh4UyNqauq7",
  "key13": "458B8umHc9jiKU2beNJPiK99xzUMLPSgEHxpLqSKmqHMdC1aVRKh61Riw1FRByBVp6V7Qx6GTg5P5G7smeoxp47k",
  "key14": "4bHc8vpRnAbgLJrwqKSbaEnLAS6CDVTyqCF6iSwQVX5v2rQYXkofVvBFtfvBVMrGRmmRHdeS3j8hcqWyCZXMropg",
  "key15": "2M8EkgdTjRuyrSEZo5uddBSDE1qZsJ4B3p25fkzfqSjJwE5ZNd8B3ZSgugBiUSxhfteL2Aszq2uxWxAvQwsQQ5BM",
  "key16": "57sQiUGnJ9z2Vai4L1U4w5FFYo7PBEcJSLYkQniaeNCBSYigqXsTkAYt9sfabokMmcSWZN9keKhcKT4LdaW9FL1d",
  "key17": "2jzx3DBnZqRGxzQRsicoG2AL7JhnE3KZJfKmhrhVLkJtyi4czvToHPyGHkwunpKjVgfrnsQqP32vg9pdzFC6WcHj",
  "key18": "NEkHUhkA3iAP6a4SRCiTGUkiwUrpbstvjuQPv3pUKE4Gm72UKt6r41nqGr84qdyxBu9oCAyckL7vJYrL2BYGmQ4",
  "key19": "26L61nPCfUkA7ZvLPjpqcDasNry8axwnzARTiJQgsSby7xyhDBBxze42z89iByGLUzkjckVMhMPTUVWt85L9k2nZ",
  "key20": "4ZWSpN7w14MryMonrmbbfYiDnAhB92hPm2GR12fy4EzAFDW3nNqJoEgFWtgdxRjg4hyzQm8rERrHjeRd75JwzBdY",
  "key21": "5CK8B6FEPTg6tZEPSooREe8ZcqkA7UN5mP49GoYfgywjGUVnuiUKZ55oQmBU67bmCFh89wP18vRAHBzo3XvaATrr",
  "key22": "2LnR4faXkUqv7XMnEozSNgMBXEbKyoZb2wQdY54QcCe1PAPQi4Qta5uronnooixG27qYsQ4C1bpcRK88HZbF7qhF",
  "key23": "2X2ye43yurh5PPJ2xNDhJP9uupCFSaL5FAnBFVaXYCfYrnhyGtGUidXu7gFhDs8uatN925uvcpFCy71tNnoqxnDe",
  "key24": "4RGywQ8DqjH2dCmETssuPDf4BK7Vs3dtbcanqWYATnqqthCBeMPWtMHPW2YaJpe8tysoav11SUBsWdLbTcqEt3DC"
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
