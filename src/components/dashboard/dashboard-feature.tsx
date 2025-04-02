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
    "3LzPr13mJQAxvt9CKksxNW76QoGHyYFBKw37ShZfhAdbi2UK2kuEfCF6ZqKVgxbYKiqBbNniBMqzeg7tQG9z9MDW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P85mbZxPjGK3tpCTwGPBJo1A6N31PXjRdMECPUCvuD23Tmy1jZFwzdPbMvaw2DL9HmkgknBfEiYKkrisS94Z8NU",
  "key1": "2PPLipFQAoGXQ5WmP9YC1p5ZRv1sPwzu1TK1LA9R18HYkUTTz7qWMEQ2A2YzM4YoxEaZBZGzZ2DFQ7rChcmD7LPm",
  "key2": "3XFHR69TGeYydANkzgFnUv7BTKSyTRigQWkq6yEq3bU6y34ZUrttiaehPcRN82TYdKPGtXk2kpUW7FBoBGcTTCNj",
  "key3": "RvsG54gQMov9v9DDYbpuUka8jxGbg4XUAFqX9JcG11fKZEqKwCXvGfC86W2eyxZMezrxc9uRkxyf7w2KZfFyWNt",
  "key4": "QkuUY5bUgi1Hity4d8ToT9raiZXYvtpB9RQ68YdL2jiZ6FiaUi1hZgx441fpqU837FXE6n39HEX38nsgrCRuP2L",
  "key5": "2tKnwLwafvLTGVtNXbvK5kgyhMg2izxMqWxqKeCkpBgX6GyHfW1HyiCvZvnoiyxVSJLkHz44fpAcLV9MVadk18m2",
  "key6": "3SguJLNzqoq8KZCDkK4MfDaY525SGv9VCD3CafRYVTC5xbPKETSqpLYRreNXTczMmjtvVZvK4MU983rCn7e13Zms",
  "key7": "kgMwbBUkigNebojSeAoK89oTbeDnGkiJ3adtLcWWqu2CjZrFo3Sq6EwFJaA9uVMi7NTLw56EAJKYFpD8wi1jzPS",
  "key8": "3hwvGZFtytDHGePzQCxRf7wpxJopUx4QBRjrYekzRj86vjUCWDUtyv74uGQqEcvzMcxHptHsX1sYLgCoYBjWUTNZ",
  "key9": "3E9xE7FsprAuDSFCZE4FXoVWArVn5d2G5KycxTxNmdAguwBSj1KNW1VrYsxWotHjCmvHZe2Ny4n1xbsbfPhrfEDA",
  "key10": "5bY3QwPiw3soaTQumEi29WJ9tpALREDeaRMVvnx32cw2rN9BoCaQ865sLn8vi6vqkvGx7FFGSWK1oUGB9kH6dahc",
  "key11": "JXGLzsR5fghF2Xiub2SdouSA18Tb8c7JrqfAzkyQ1aAffjxTY8nfYViWy2B6VtmiKaWUuyXaEyec1A1PuTAofBg",
  "key12": "4tpQ9sHTBjeLmSV2KEvJPS6d2PzYdYRJSPoczhPfTLZ4XkyBPDR1EYuzaABWquqguixBzuuGgbYQCqVKE1tgFobX",
  "key13": "5RsuGKoN6nAMqYPNZU3U6aWPiJKpf7sMLw28ZxvwhLUZ9ZrnDrJ7bKhZ91hTEEB3CznDYbrFWwWQ1rhHDGX9JoKY",
  "key14": "3mx2jeKD73ZnBcocYbkKRLUWd2sc7zfR5DZpy6Lt5fh25K8k81pr86Lc23CTqwfDttkoCnLk8hgmJRsArNzSmUYF",
  "key15": "33RSnkQKZukWv8ygWf8DaqAo7HhrBjRCXzhi6vVFwPcHLqffksVq8rgMT2e3jVcCTZvigxguLT572YzhUXu5txsj",
  "key16": "4s9Rhr57yxnpGumHGuYRGZEkSTDU9Q7ddHkRN5arGcfUi4hCT3SCpPFx4qrYStwtUg4CSav13yFqtHL6MqiN3yay",
  "key17": "2nuw6MYt94yMMsxSSvUZUcF4RpUbDtFoF4TodD1zrkp6DRt3NpLrP5zfnEJr5m72uZMbHZaMcH5nCEkLdjxVVYvC",
  "key18": "5NwoWtK9GpfE88fnL64SJRyRQtUC4AVHwUXLiMXcxRgM6F4kDmFZEU7EFmwNYznhPn6Wqn9xfkTYGRzvu1QDPJjT",
  "key19": "5hYgM5DZD7ELUnQ5rdFf6HfRRF1fEbcwgYx6DYMSiyLPqY24fa4cTSmpN1ngrtQez7ChdYXW9rJABw8ZFB7G7QVg",
  "key20": "3Ez7cjCVzzx8eSoBiDugwshrwwgHxR8o94YVuR1xPY5UtG5BBpajwJo4zqew8xDgdMtSvdM4QodCz7MPtcqfVTsD",
  "key21": "2bZqpNqmAGmFiPfKh6pQb7GFbePjh1oBGvLUuCtMtuEMUiSQfZiXQ3AkNEAmwi8J12EeRmp2voVr5QvG7b6pN1D5",
  "key22": "3gDp9xHGSZYjZAp7AiZyFkHTznaeLFfyafWZTadGwwzJi4NSS5KwT1FqXENza8GvfQ6HfQwosVWRJuRQv8utWQnr",
  "key23": "4Ph6fdbT17xeEQ5fVuziFEaUNSZvwxHYkzzRSuXZosmFfyjgPFYeHMvRe1rmice7QYA7egooC9arn72HV2NvdkpQ",
  "key24": "oaa4EmiBAnq13nz6yuNJQZVkEMXZ1ZMeUJZL2LUuUjjxoHcwH9k5gEx89Z5wirsAgRnNQZrKaW6e4mCZ7rBJkVS",
  "key25": "5XBDxVDQrhBdcMoPqDWgtmFYBmzxXVD2NtVCK58oAYQvJx8GzjPCtJZKBkXTSf4WN2BrB7KA9iWjhLDozzPBZamD"
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
