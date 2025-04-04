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
    "4B6AHdRd1mc8GdLcz6nH3dbWAaoVSj63GHdvvgMq131MkTbuBm9NU66ykCRb2tpaLsUbY3PDH1rptP8D7nTgRB59"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CYoXQ9CdjnhcQpJVKsLEsyvMYSahwPYWSDEZGrvsTQkBqdY24t2bRcnEAJhK8b5hJ36zqQu46N28hPHLS1Qcq23",
  "key1": "33q95sf33JxoQJ4wqG2gGtQVwy2UHD6i215qUKEZSguNsdcKYxs67KJbEh3ZhJwst4tKGDCzuWwAgo1pBrvtqAKN",
  "key2": "3pjwd9zuz1xfs3jVMspho5qymVtDXJCrvcwee6BkCFE3WHYvhoEcVcGeK5dU1x8TeuZthqnKyCH6nY97yjcsRfss",
  "key3": "21MmhM41PmZ9bJXsWV4BVYaYwudrGMq8VY3k54Q4VQFbop4yYDaYLm6QS8bt3H8oyrCk3PyRxPNqfN84ksS1KBCi",
  "key4": "2RUXnRqTkJvmS8FFgYd9WZkw2iiz7xpDthFdGxPcjEutrum1ZZ4FmK9TQGCTgXJ6EwhgCLkJxa1XG5rseiSfruHs",
  "key5": "3b6wfp51S4eagbXgGW8Ec35ij9xVrRUs4yLxwvTJns4HjYcZKZJkRZAKU45j3RJbF3jxwHXPcnR3kxKDdcdqXENC",
  "key6": "T9spWvmWs3qbeZi4mrPZXxSKa2XfZzZrVSJFpYSaf2pwbESUU5MK6x2Qv629erp68r9AdB9fafuvKGiosySrHxw",
  "key7": "2sUWNRU9q1Etfx2dUqrz6oNEk9uBPoyiPLSgTxucjEsqDSqCKeTLvHZbtz3c9rjkJ1HrYFztUZ34uipohvpqYtYs",
  "key8": "PmxHz9esAkkxZoftxGhowHHEdNQ276LvubqzkdN5UYb9Z9KBjik3UgSoCBMQTMoDonG3xr6iKvDkMaxjRSr6NJe",
  "key9": "5Y5djPWeBEcAzNqSrdCkTGZHJmB3P9ehJYWaSavSdCpR3xvzuaTAo1C4fVTbBJG6ckvAmVRvSP2GjMb8vfHkYAfR",
  "key10": "4Qm2GDZjGDRbfgQKJzvAKMBAv7xPfn5UZ26JkK5xvu2AKQdoPnE8D5PaLbXZC9bRXkDZN8QsoU6wWJURgHX4e2P6",
  "key11": "4rQX6nmWKfETCSgNrr42Vu37rEDqDDNG5xGTy9dydJVHaHD61PhiMg1rtP88C55pSbr2vEZSedTBKuL2asMLnrPS",
  "key12": "2KnAkd2n5tRGUcq3YiWcrfY7YyEDgZkJuMf8VuFV2PEjqJHgVYJ8MwtY9ncAviae1FrgAY6YT55FeRSY15q9ANjb",
  "key13": "4vE7afUsFEhatHmEgAKUU4s41LAd1BMWnjw8XfX7BH3WFgCj4A9LjQACLeG6waw4s3kcKuvCJmeQknWczERu2E5J",
  "key14": "45EkkHqWqvMkPM8s5yZxBte5RyTzphwg3mCrGbpXHfW3sfxLGa7S3rqsmJifNihCgnwUUpBTR8xy2oJaTuypcNtA",
  "key15": "5ACaWWwWNPJNV8YJeBqRacfBd4XauA4RS23KEtd29PptMb7ztYTcmPE2adq8k5nbqUt7xEk6gTsD2891nkcPr7Kk",
  "key16": "4MragAufMScZ9hudvkSmmD1Pw8joAMDnnHpfX9U56SEXmAoFrV1yJyUYYmKRs6HxMKoKS3ix7fgU3XtT1R7ZHm21",
  "key17": "3AZhFmpkjQYApkr7ZYGfyUPYa4nCZiGdQSt4ojTDjejDYJFKquY6zQ2jreQiSs4rMN7L7b4kHvfe21ecdcD8kmGk",
  "key18": "3CoZFiKRFPiUFjT8bfD1h48kSQMrQHuLUm15u5A6ywoMAfug5iTy6EfmSb285FPZdx1SpMF69PFxnPwTysyotyo7",
  "key19": "4PLYAxmXPwWHcfCaX3PZuUu3LXvyijQXjsS72aazi9QP6uTWrbpfe9PCHcpyLfHUChbUL29Wx2jo54mfJKKV5gVo",
  "key20": "3AYtdNuDewitZWrQsvyfi7uFXko84uaHDDURx5FQGLbxVQpipqptjUqf9VgrK4tG5C8TezaS9p4qj6omz7Hy36wG",
  "key21": "5ArT9nftsguH7osUTmZp77K5GmXSX8paVLiY9SXPvabyF1tuJd26mR6uUx3QRf1T6516M3FqSs3YNjVNUzkv65ij",
  "key22": "3rpcMwnzy7ZGAA3vWejJytnoX2TRqvWRVcACkB3845eBD76QMnCDjjWkKuLpuTQY5bwB3GAtaqTUeACqVBKxnPnm",
  "key23": "4b9vm2DaEeiKpYxx2KbqQsu1ZN1hTL7qjkZqN62DkmHzcjffUUgM6DdZXwj1XEdvpF6nCnh7X9u9m6BzfTjbhoyr",
  "key24": "5LVirmQbQ6jr6KBMdZJAQAR7Q5LzqkMfi1sqBNRGQDQxporHgKJB5VX7QpYdpX45RkQkWTnHSoWKrm97b9xXVsP5"
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
