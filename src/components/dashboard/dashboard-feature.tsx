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
    "4oQPwbothzmcAGJtkNZh1NYhgREufQtQiwzQwhFk6KaUFqm6VwgSEu8ucGc8J3uqV1ugYrjA6X2nxf8wV7Jhxw71"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VnkWQRVkeuK3swytZE51ecwehxsieMDoSPFFXQgGbyN1KZTX5rwEfGXNB3dKTqg4vaSZFNYgBW29X9pKi55uEVp",
  "key1": "5qH6mCFty7uMCQEZfeM9pc3hCQQCz4XGMj3RYWpiD2jgDo7dxvsv1jots7vq1T7SEx7rQXsoKQxsZi6iuoYhocvS",
  "key2": "BghtQqWsHXD3kuG8H6uDboaZhaPBqCyqmCeVS8TwicPhSV9hPu28HT1oq6CtNg913PkVveAwqFzcgUg9QRJggDH",
  "key3": "3ch6uJ9B3LHNSUNoQqsMRPqyVQUC8TxxSBRNb4xbUPALa6JyV5Qp3YKTdvhrtmLwkwEbmaRAqaQAgSqk66CxUpqi",
  "key4": "2BvTPZdDKSiJZJvw6vc5tZ6bn5PLwidGHNi2weiVq4w2JeTXM3WWxc2fYKyqv5mWh6tm8dN5udhoShaLd1yLJU7R",
  "key5": "65hvbCiZARCuFZQr2WAysPVbCcxp3gTwM9TYmVkGYjaz1D5876wBzNkzuCt63bmj3qoRuBB1Gx66PaG8Vsd11rKM",
  "key6": "31kmBJTYtXzwbGeBxUfwTNYqnab5xLjvwqhs6a7vKMyNi7xek2fHbsr7XcpchPpqEj6UtN4QSnuyHofQdxpQzY75",
  "key7": "4BG7fMY1RZkrr8aZV3KcSzJsKpyUyqii2QGHo3kU5svrftAWihG1SAcKoaJHFgXdTkXiq1mjN6m79prCPfzs3875",
  "key8": "2xjeXqGtC6nRa4DKmDnyKLZeQrkGT5UKRr9yi9JsLYaRHe5gZnv9qjfyjSibUcHxSCmaZ8LxDxUiTtDXsvu7sUTi",
  "key9": "2VvjZLDz1GFSLBA2C5Tb7NirxJ81wuDeRyjxEVgFJqCXGhJJBUdLi5M2gGPgHcKkfxFYntp8MdjWf3TJKhreienw",
  "key10": "4gBaZSNkrmuoxC5E82EgmE8oGKcoYoVinSVgaSJYuZdaFzncde6XhPMBmmdiEom9YyAc1id1KVBg3wKbzkHAQ5tV",
  "key11": "5t19qwg2EECK7tRS63JFC2dE1RBNQW9oCVh22tXSbmNbhZf459FuMnTJEW9bU2MMn1oqjPUH9BRFYerPniCikcCK",
  "key12": "4Ka3eAAwY61jh4KKC6vLLUxMHjd6wFSQvifqC3FUHJkCVNbCUsszyccvDXkCZpbCzNscmLBzWomGc423nVLcWEeL",
  "key13": "j8QbAVJxsH2EwNGrWgZE8ZKZiLpJMjMECm66as9ak5uio5HF3ST4McJm9iXvgv4ZD6uXjT24opqsmE3uGpA3BzQ",
  "key14": "1KpEwJQk12vB1QaThLxupeLTJ3Xe3hx4TMTxhxCKHvTwWbw9HNDTAncYtc2XfxpTacHbQzdxFVF8crTyTZ5ZSnX",
  "key15": "ktPsiiHiffNvAfWeCZfMxG2orqz1MeAQckPD1QrS87QY5zg8A2ThJswB4PU1Vv5K5WPzvXQQCw1DjhyVun9LsUb",
  "key16": "65HZ1AwnCwsGkfqxVcvPps1xJGQXXrocgPJqLeCGxAzZN9V4XLymezx3Wx9FXQFc9d8n1j9P8uEHQt1K1o6JTeiZ",
  "key17": "3LNjHMDzfuJQmB2mqULTG2HKdqGAm2TYJJkE7aT2qMK7t62KpXJdssW5uy4GM1ZXGQEm9piAvzGeJBKBTJ3ayFoK",
  "key18": "4iU1atzh2S38PRWfSoiPgc3o6bLioFntz5BaWcdyDi8E1GHZFSBGW8osQZNkeMZvvntxbNNKZ4MgUnTgk7dCPYjg",
  "key19": "3FZRm4FUmycL6KkGV7AHRba7YUhHCmWUGq3B4ADuB9y5RtVg3fPonQc7GT4fkNjbQ5H5a51zj3C2QsRZLbkbP6YR",
  "key20": "5G5y9PJzoER1i5ZmJRGo9wkWVXbq3rhKL5SKvziyNkq161R65s8rYwHqqCDqKmom1nwepcqNS2iKg6tL7NtcuGMZ",
  "key21": "5byULz8Zds63oJ3wu1WhjTPtFa3TSZi8LUxz7iJCfpZb8vN6U3V2F7i21xPoj4syMXYDdZ1BJFggUqmfNHpmN2DL",
  "key22": "2QTsLKN9baprKPsQ3Rpey2cqWXoWjsQFgfoNEmuLuwMfUVyy82Ar3YGkdUce8sRCGbuA5NZp5Cn4jpKMWq7g59SS",
  "key23": "2LwZxV7MBkAtqpobDjjvg2K1SdzkfSpAerh4777tCos1Cd5nMZYdJPs7FsBk4iJU6RnkxZR2MqZyHXjqQrVoewHC",
  "key24": "HKV4zMCT7LBMx5D4HfUr2fEFSMRNKDQNGr9Mb7NqvfxTc4YyUupuEcaxS3kGFGvF8ZbxhyVwoWRLH5JpC4htpnp",
  "key25": "4t3tnHzCUsDtEvP3BmcRXuZkeHherZ5oqrT1o8X5BwhVLi55TAVYHMrmGGCEdxXYV6KmUGeWL4moefT3f6W6cCHj",
  "key26": "3ekC7YLfXf2GjZCfaTA1p9hf8KCAbXLWUnFVtmtAZzbamZW4wRfFMmouscRnXoyN6uAc5WCvRSyoN55w5joiB9iW",
  "key27": "3MXAx7USxexoc1yyNFbSVncB5cf6v7fwRdwfFXYpR2DVzSU9foqamC9kQD1dcUcUMiXKAPDA8jXVFodupxDrcD78",
  "key28": "4AB2g3FeFAL7q53WsAPwbsFcMESaV3ny2xVkrAxZrBCbZmNZsEsCHvLi9aTbuNHxdV8wLW9XXGGKqScaK3tyxQTS",
  "key29": "2UGSDWdSsAkzkNJ9K7XcR8aXC7aKjGiBdLujtWvN8RoYsW3JHdJbce8EQdv1V8ZqUVDF1wuT4P92mwa1XUUxAu8W",
  "key30": "2Cqivc5QhKWxQDRbEuKCajCCpM69avxead7KNLUwdQa165m12DrEiwvdVZAsysJghQjFFZHkj5FPDWZygujemGBp",
  "key31": "4Nab6Q4GALk3n8qhxHx5FrGZDN6J31g6FLxFD1E9wEYZHj9Xk7SA7NcWXgGy7oy5VqiQsQ9MQewfY8v8HeJW5RpY"
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
