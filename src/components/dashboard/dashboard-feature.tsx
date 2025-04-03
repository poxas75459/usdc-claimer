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
    "3FGPN4UZotcHYYtdNDU3hSe1d84uLwubh6PEmQQgivRBjWRYgMZDpynskLQWnBedQTsjhqAyKksFE3HdAjb1bnnM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q29ehnUqZmV1QJUPk8vnySjF2WLmgmpvEEwRM9imuS7Xm4BKqKVx2zgjmLuHVSsvtcb55SAxJtcSE15jq7aorXR",
  "key1": "funRjDCXJqjJiUGQAEWcBMoc5TTEXQyw88Hn6B1dgTto5WnLbq6Vmvceq7rp9iswi1iSxGTAfiVk1axqLweztC9",
  "key2": "52pomgpxUVBYtoiUU7gFMYoV7AzCKcyf9J917543x7HZuieczymAdnEDzdDTK2RvxPAxLaNNj2ZvZqDCfvJt6rtQ",
  "key3": "4f2bggCdFwVmv6jbmz521M6EMJQGq9fvxZ26ckjz2NUGogzTcqqqP5whPvKEuyaSymoZPkxP8ehuQFmHQvW9Rv4t",
  "key4": "pX223AXAEh9eDK4t9iq9zcBr4ejph74zDhycgpqeeiLKEJfE2Tzx4LChqzkqW8SVYXdEy1v1x6RvihQjrRWmQMn",
  "key5": "2h4Eawwua5R2ZeRkNecsbsAoc9yvL7f1dVpJ479HsrpCQN76cWa8P1meHZvZGex4Q65Lhi9SBwEBqyvkf9VWW86L",
  "key6": "3HYM3mgzM28QzMtGqXx5soQRXu9tHHxYwpKMBubtnZPbBgb3BsviB16XWkZdy459x7ZWVYEnauhgoKdXhzsdPYDa",
  "key7": "kFhtDB8mvMUK267kMH9fKXamrFP2Pir4FCsemCF8ZhT7wnYKG427zDxkzYDibd3XWtpTFXKzfZyA9jzdsR9inNa",
  "key8": "ZgCDu2TjkuSmjpmXfBzNyVK7cheAL867WxMndA8xhrBo6hSKENXeSBVG8aKWjMSBBo4fenZfmpzY8oW7a526bev",
  "key9": "4QzWKLuUza2QhfdK25oshwD4JkMNVwMLr6jca4aCPyay1dcHaFcnyctXWa1fDB326SGgZXJByr77B2k1RTkbNKCC",
  "key10": "r5pCr91vgDFwryauLMf46yyAaR7jN7GdQmfSWsdzAJZs9AFdQqNDJPUWazYwgYorGiQjUug6gTxVXxXg2Q6tu2r",
  "key11": "5wHkKLmeiEd6DuvjU2KLFWYKJcmVrtVaCtX1iNwFFYL8Gp1AycTjKm3yr5dMT2Ce3ruAJyds2UQh6DmgDPnj4UdZ",
  "key12": "4vLggzapM2cyrWVjDBvBaSRgsu55nKQ3nfXeaGbh9bgjXEyqqzquxHswV1S9611vg8rpsb8i6VKj4izDaJjLw1bZ",
  "key13": "MwYtQzjLb4gqCV6MPpB2TUwDARXcJEzzps6i9FG8Vf7LEU1XPDt4Y2BLC4CHvL9zZPPj98VshhxWLZTCERjD3o9",
  "key14": "2Pt7VXd2TpVUyLtLzJohVDt2uNtQn3gVTcT2m8pMYFwRdYEtsHvbaJNB4fUKHhWyBcxLuAfFKZEqvonesExEGBmz",
  "key15": "5bCBsYcGT3fSwnJTNiVqpMZb24CYA2BAKyzs6TCF1bwYRYPAdTFgJQwmC1CefYas4t8ArY5dBccGRsRMbsUZjKFr",
  "key16": "38ohKwGXaiLFGD9L4Qj2c9Z5DgUtf9j32w3FiCyuTGDiC8iG6WJRGdAUo556kj7reSkdnW1Wm3i5Qkzb5c6g164v",
  "key17": "2qHxDcRjW359ek1QwUBxkJ1LkZZLbMDevBtMHEvPxZ97dDRwWvjxFqiMV4wEvQhYrZNxt8KW63EQMtWTBdxfAae5",
  "key18": "a4jyPxeWPTVgLS6X3SD9KdZa9R7ZMQF5Cz7EXsRzGiunbU8uvisfd4LCaNGt7rxNmrxuhaXtLTo7XJzQm96oize",
  "key19": "5bxCFq5hArRYozY4mXuxCkimSVnGkk4Xfyitw1f4seJBmky8r4itShdJEkAqTyLmWa4cZMYC5EJvv9BpNpDsUHDy",
  "key20": "4kfsst9ZY23DkjtVWSwozZY2c1H4v1daEYfEHNnNNZLt7DWZdLNQEk14TZX7jTZUW9rjD8pE2y4icyX8ELbpDDp7",
  "key21": "3UTqRBjYiXaG7N7zFHPxgicfQDXjCFRaqyYCZo1xS9H2HhB2fpLxJWmmn4qZQbf6RrDHVH4HinDfz7mXUHTrt6Ew",
  "key22": "UbaN8Ajym4u7DsmwzzHXKwSsFMx3U5WWfAxMNAc9ZtwWtLTZYjkUREszU3AoDvr814NVY1GgURvUVY8ZKDMRsXd",
  "key23": "2Ec28CgnRAWjXpBS24iXc8JLThFR75LAoaynrNsLLmLqunabWUP3n3dm1H9XGXYLmUXgURks9Myqj8nceHvp9yUr",
  "key24": "3RGQNoN2N5mi3BPXacmAibfEmkHDxYJrSnSvfEU7ddnP7fT3Z21eZfb4aoHUr9bFb1MXRUK9ZxV3C8s1qMztF51D",
  "key25": "263GdDhkRBKYgW9e2m8uJ2fDU2Ak6GuxcdMzpCchMqb8Ry7j4Fw5StXPxfjCVYrKHsVQLehCr4dDUEca6NnX1jgU",
  "key26": "42vWV3fYq5REGZkrC1fnktetrzyeXtiHv7RC3vaJbkZnGYppCagQsCYrUE32wSruJyJHmq5tbXc4oS58JJSr5zjc",
  "key27": "3hLraYSzQR6gtaymzEAeoy41cPk6n3ADL9ZyiigTSdN4eiUPA88FDv4KBRRoqgSRPcoxNnQmje22K7QPGgiNMp69",
  "key28": "5kQniVvEMH2c5XuCinKLhGHuBBPzR8RQDMY57TxaMP78G3rRo8wmDE36uLbnuvbgXm9mBxTjAkeL8RAF2wkEs24u",
  "key29": "3Ps74x53XygTwSE9UZ7Znyqu67mwoeECuaNUPoLM5uRzX8s8EfuJeMq6Uxp4Q9bxuk3atYRpp4Xh4qQQu3ZdG5ub"
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
