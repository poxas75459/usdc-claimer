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
    "3BKsX64x6fgyFKDJdY4nNKw4nhSVHphhLgEcQcv2Q7qypoJXuZP2NeqUg7XghKUecFKiNSRbwEcSirbdMsGAQwZG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w6kZTxUakA1bDBKEHUVRhxt8jBHXYKyASSoQ97nz1L49hU7DLP5Kb6YN8NSQPnEouujfVamWNR6UPy69GowLmdm",
  "key1": "3w3HTZS1AkVAzBRKsjnGz9Nyr8qXyRZWDUS87ZZhQz5aaQ428VsiabWjp74ewJvd2usConPrwPfRB1sKRFoVp3N8",
  "key2": "mKVUygHmMxXCn94fKQyU3kcZLuqmsQe7bDvxTRxs55iPfcjDsDCFtiBw7Z5QuXK1P8an2bw9SkZzgJEn7wc1yAr",
  "key3": "4xgmHxbZB4cWFsV7Sj2r8LCPrMvukW2dSaSKsHMKUgXrutMUqaKSPn92LpVdoMi19quhghkGxNTU1ZFUmtAMpQGf",
  "key4": "28KkhvuwTGZdA38dqDRF7s2RvWyqAt9Z2Pqtom6tK28QHJL73MyoQgCAo639kfogs7ikfmvqp64UoC1WLAdnsJLX",
  "key5": "2YyidaktydacD3oPLF7przU5ocSN2nHHDtD1aMNSiAtfBRQ9VoYve2U1zGRmmd1aDwVkCTBGN3qHTe4yztDdou53",
  "key6": "4yFNw9QXtR3EzwinDjwDn9S5Z7zBwKJBFVR9rmfKuwJX6KFVYT3jkC7GQuHmDsDwW2J33ARJvpip9Ra2BgyEQ3vA",
  "key7": "kFdGzRHmucvNZBcpdSUjxCyoc9wKqbBKq77Sm9CQpJVXcv6Bgmvfd2r6huw3zdWrBdK4vgWAxGeoBFPtu65SgTu",
  "key8": "5arcTu5gHd66xSTN5gpzrtxoZiCzjPypLai1eFfxACWsNN57YfEvQeWA9dw8FrZkGDLsHeVe8CwdwVEENRjNR7Ad",
  "key9": "2AcFjcQYdHthP7v4RZdRrAnt7FZhHgbuTSrekMYAFCCxVPk46xHUqarKDH93vgcio6Y2ymsRiPf4jfSSFbqqmxFt",
  "key10": "5dErDJZzXYLYfiSikwiAuLUTkumwzoFKBu8aSdcVLV7tweRLTGh4dUTZQ9z24MfE5vMaNMaG5w75QH7vz6gYvN8y",
  "key11": "32Hfb6iw7XsJpvnB61zTyiHfdnAzWdjNCGGCkusyBRyLhLCnmsJD7GXoBM1nWcQxFcHcTUqAeKN2Br8nP7xwk2zU",
  "key12": "b3DpSQCgiPxuXSGpi38RzoPQmqXqKD2LsJ3NphpbJABbk6o6mb7gHuuwFBa54iBxqF2n6VaUr6GmMsfHwZasxvu",
  "key13": "4EsF85YwR69RphqnzP8Ns8sqB4MYzpgExoteLBo4cJhWAok6gLfKthGmmPMmGxcoKdksUsi1Z3gMuNj3qCTQkmFv",
  "key14": "5sS1NfSCqTMuQBcbr6awLdBcxYZ7So2nRTvKuLH4a9fwfQmmTKydZB1d1F4xFSca5evAo7SMZBaDh6PGkyBMF5mq",
  "key15": "2XNHgLsorC7QZExnG7LZoiKVUoGQL1baAGT7ZVfh8qYmvrLSu6Xm633U4LdcWJ2tJ1uodqDswujFL8H51cVR36kn",
  "key16": "54UuodZtSV7d2bxvnVsPF1aZTtfrZynKYxsWESKWrQDzH9tJFSi2w1wHdWtVyJrAzf9yJJsj4FkL9whKytrcrHZ7",
  "key17": "wtySxigNdYsYBWGJsaQm7HhuQKkFMmc7ywBxVvreQgDvDbNDCayvXWcZPbQmgbuwdGgrVWUt9muvkRLEh6GwRqm",
  "key18": "qmAhnuPNSt8aWtocPmqmmZ1j5vff3y4BoKcLLiCRntpZrwtiZGXQ25zAZqejMVdpytU9Zv4e6umU7gvssNw1HMU",
  "key19": "5rfWw55cjY17Dqcq217n6U7C7JsWgwckFMKL6pheTWknkktxYRbf11vCJmXjpG7ws1i64V5uuHRHwiAaX6vKCvjP",
  "key20": "2CSpVrGSa1JCwp3VtLfJz6Z9mcpNY59zwvEs4ezNVo1ViXqTy5sjdnfFGWgGWiKQtSr3QUcw3JogC3CT1Np6qMaU",
  "key21": "2nXD9g7B1z1cT7WP1DSfFWj5eSUQ4SfgAZtNxDnC5RY66v6egtUXceNdayAGPkUn8RuGUMsiy4BsTCTXd1SvmyNf",
  "key22": "39u2KMxrBtLA9KrfTGjwvQV4VadGEHKTGWqfTqbwtRGqBt4tTA1ve16UZLPx35tiKK22pDaJpgVgPMJrBRe7r9Ps",
  "key23": "4XQ3uFReiKvRxxGNRZ8hGXHqww3PS9LFmHzVCpCZA4gt159jSJBeVLd1RJSf7rYTgg5a3R1xUd1KJXW9tFmGQy46",
  "key24": "3yfZhkbfAqqGqXDdir7CBxBk3hMa6TctscppanLSToDFMWn2kRuqjD6e6w2sGeCDiubpSxEE4H3bB6hhwxfyTKet",
  "key25": "5RrzTKHqUFvJVqzUYHjmXNycPnd4jXMnFcD6TxJKeDchGBKSqcnoFm2jWMemRmbkkTYBK4ok8EBS9nbDSQpsz8Gk",
  "key26": "2aYQx2FTMrgr3z9t4wYqhbj2ekXKBV14pte4GENAXC9FhVzf3aBPvFc1hWASwAqTd7ZowRjUL7Z2hFs5gaotZPAw",
  "key27": "5fzhHwVTUAEZc5kaT7ZCmmobsfEJFB4zJXpzYcvuaSKmGqwibT17BdJoj4eMLcZeEVX8XFSiKFJbhx8fKKT6qqj8",
  "key28": "3gpU5yFMQpe4yxmW6cdoKw2ajBtXNmLm2cXu1UCfsaznTJmBrtNwMvvmnL8c6KkUK7Xj9q2i7LP6fMAzMdf5khvX",
  "key29": "NBrYt8ah7YCG1M3T8rWndkDoJ6HZngeM2gmBT5MXAFzLdvyaFospCtcioVhGMDEYGpNJkFNGeQNWdDkMwvNttse"
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
