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
    "2biqFsRgttTxksbAcrybbadujeXeA2EtFQusB4N3LY8Km9uXxpPdniT3o8FpF182hSqRCZPr5ABqVzzrCA9tKkrE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ieVQaZsTgRQFMuuszou5bxkGo6qjThfpvcEeQLjBGskt9VXP8ocAYNJ2SJAmA9Tz8UR4Cj89gyb9Qip171PF1LQ",
  "key1": "45L6tcibEpGp7ReMMvvxss4M9qjEiJsWogHuBYZJnU2cwv2ec4tJfXP9qhnebbjRM4ZXEFjY7BTxZwHSDgQ17C7c",
  "key2": "2w9LTNhpSRZJcdWSKq8DAsigQyY5RJwjidqyA2LmsZJQGjC353q7Cwvc2UhB3mCbfVDZDXsp9fpjrTvLa7jUQryj",
  "key3": "5iu3Fp7jFLkXxzNSdyohWbmitNsu4rKdh8LQqvFDn7gDSmS25KobaW6rDygMLR9Wia3WpAFmk7QTWEQ5A7AsfWU1",
  "key4": "5qo6ZTAbnaCv5gS1s5Yvzq2mt1nqoJDfdS58HHQ4UBkRArLALnjwEkPffQ9zPxGaB6krUk6yE2gFZKKHKGPFt8Rg",
  "key5": "5MXThRRRZx9tYpEjtNGabWgJZSQgipFXTR5KdVqLk323MnWaxPgi5TcRbbc8YgXz62VZYwUM72VEJthCJhZ8M37y",
  "key6": "Eh1mmHLBcrFMLttECkLAUWdY9PHwqqAMpK3MmJLGm1PWvoke8Bzxa9DghNtZ6EvXomFscZqgsCyAeZW87JrYf7K",
  "key7": "3te5Z7DRDiQ7JSMBpXAFe5R1RrYrAxbBkyXUbMEmT2YAygwvMnmLKh6eC9mHuZ6WQBc9PcFFyL1H3sUpNFdonJwG",
  "key8": "4gqqdZ6ytuD9XjoKcqFJX3yZ28sWHMoAgJ2VXCGbFjiJVYWw6retsJviivKVF9bbdArW1sGHb3iHBzsNxF8mCaNY",
  "key9": "4qXqwzw6Xig6cYiJXJFu6qtpkqdCcYaLo2SXZt3uaZ3u4x6PMH1rdiq5hLCrRwN4DhL71NzqTvMJZ7hHBT3ygr7X",
  "key10": "uKREhHgcyj2kcg35zmRCCcXuNQR2fu98UtXuNK74ckaRsdWYHwJrPrwBjrQkmamSyZKiQfxsYPCzF1R86zQaAEY",
  "key11": "4jgRayV2GzNoJ14qkJv47AK3Xxq2TbT6KCWVZZNFkNfKizZqnWNR7bKsqTKTEf4bFa8GgqKqzskKw78j88SMNjXs",
  "key12": "4x6w2Fk6tQRH1UUmdeJJADAK9YBNPTrpnqPFefpsVcr9onsvUjPBBG9ZrWG88ZdWogn5Q4krau5yXRoqTKWfWSVj",
  "key13": "49svZWzLYK6EkQpwTpmBo9A61G6CNM8WYcd9tCJLXRYBR253WvLY2CLSBcMSm5azKS1d3uGcrHyBwdAgaXAX3ScJ",
  "key14": "Y26iqHR67iRgYTVqrMagbbNyHgMkhy8esvx9Hwwqv7w3XSA8DJ1gxTwxbPP14VqSzqRYUAVidnbZCyQZ8CgbRWH",
  "key15": "qKDaMGSgrCfzoMa4jePZCwtwZXNkfpfa6dj75dnWvhVQA8gvd9Ty5onGsjh87wQtTh4FMTX6Zamsa6PGsoF9spT",
  "key16": "EBto9givxqW6D7WRm1WT4yyAZZa6QABoVQJmxEYogoHu3cALjKTukpEX4HhRckJ5bMWbHRmf7QQenQAfvFdEoBr",
  "key17": "6eveYfytQkn2BDjGwcznAXH1c5nKFK1yUG66E52pNarPCgsxoqnBHon6m4RGGv7GWaNauRd4AESPM9XR316XzQB",
  "key18": "55Q3HhBuBjKo37eYqKfrFcf2q1etoMKtRAKCZRXWy6wcy8EYgnnMMa5drGGzQu4hucUmwR5z8A6hhyPF7EVfG6xH",
  "key19": "2VuUe31b9B6HmyYDJp2VDaB46vMHqiVmJ9VKEZDggp9yinHXvfS5d9hWULM2dXHHBdjEBNLcqS9oVq4HJe3Fk6RS",
  "key20": "2ih54GJq2ooi5z2KDFYfqCWGo21T7bL9xdZwQrrvG7BtxGfeZZJZkFr1t5fTnQcVcff9g4TNv7gK5MXhtrxTChjs",
  "key21": "4ZgYvb6m9w7TSMvpKt9vuwZPrkQoZZW5c9ZUUaCQS3ykcFUS1eA7Pmg59redogzY4pCZAZBxPsfjeJzrPuVfLp5B",
  "key22": "27cQKbYFMB9nP7fqYCFoEria4ZFFTfdWL8J5gNkXkoDNhwWmMzstN9jMzwwYV9adQ2BDagzSFfq2663qiStz3VXk",
  "key23": "4DJCkXMxAr2nmvEUkxFu3mi5Vxz52ddSQcvxZEopUQGbwnHR4KDDMM3UvAL2xYBJhSxXUWUEQJYDY52MxCq9Wp1f",
  "key24": "2zus2BiH9FcfhD7ECUEEVzKk5ymfFjuAiMZjKPfjT5Nj7fQ3ycpTFfWMwC5PrAGqEyACFLDymhsmVZnkNZwHtiuh",
  "key25": "3ujdv9YGcG7JaDxiDsbFpEtQVMuHjchZ4xwQzwLHgh2VRJ3da1zF6kJiLcYSp2aZpRpH95ZHjm3t6JhxnD6yV2t9",
  "key26": "3SNV7R6VBGsmtjyH3WcpB8qDgrA5E7FjVnWqgzGmuxyERtmmUYEkGKrc3hU25wAbi3DgxwoPVKJfxJMYCVUUC5Rp",
  "key27": "5KLLuWt9HHKVEGGJxjGauvkSQGTRQSYmK2jjKh7u3vc9s64efrRzRMwPr55cWFtA8XKfu9NYatnF2TsFM7twakon",
  "key28": "3grqiHmzyzkzxs9kATrsY1NSssSQHR7K3EWL8c8MU7t5j7BwKtozkAxB8nw3uyEyzkQVcuYJdX6rqFsaWL6Y5Nw5",
  "key29": "2PFmgnP9DLBRR8AcQYe58W2pM7tWawD4BuGa9PAahbdFMjtQC9FpvevW3S29dywQ7zZ7Rkm5eYsbeB7TTvZdKeo6",
  "key30": "5L8xp3vQFedWYyFyVMioyFMBwCina9xUqeccYsUgKPjesY2igu1mx3wm9AR1j7sNScYA59uUbneEaUxveR9E6EqJ",
  "key31": "a5N5pyZUQ3yGnfTjZDexnm68r76VwvLnt6TqBYeUQoqUHaZVjpFpmPFdkormgpf8bxMVBUTtGkSxbZHWpiCHRKu",
  "key32": "63fqwwhQDPtkRyDwQfcb6u26s4j25KEi7YVVjq1M8FJGY9iBRrm7ptcMQYHBJBrY8uEMu391td3nZnFCoV6gF2XF",
  "key33": "4fQWd3eLAaZumBykib3MxN1figQvAD7ckr6e9CeBmQRqoiuWrMwg9R6MvXu7EZUHChpjjh7AxNeuLpn1j24T2raB",
  "key34": "szif3Y111b4rhSeTU81QGdeMdRTqY18AJdH1rRa3zSwX3SZ3SVU3qApPJ9PfzwmXBAdDATQSk3SebYUcrZ9af3c",
  "key35": "49X8VJEwFtRuhvJguAXgjQRXkDr7DPyfrA73fhXBVmrHTbdqSEFFTBg1NVLADiLMiQuaC92MsqUwQtUDbRgw2Fp5",
  "key36": "3AVWSF7x73f1PFa1xhbLptchzkZ7vRWRmuLDY2eVF8x5e8aUNKWwT5rXCfDdfHbxpzcmgyPQE96sjExfqMsExUGn",
  "key37": "3Ycx7K3UyuQc3mrEE8wdHziu4osBpygmQxTg6ZmN6W4eLVdXfqRv3DnhfyoVG1bD3t6hYheQKyoBwczVzLBeR7Kx",
  "key38": "4Gx3bSMBuUoqFWPMwrm43Lurzw2xfEaBZqALbnumWSQy7LCogEai9zJHyfBmm6qq8WSNuqqRKFDsYn3XwQimeLYv",
  "key39": "3Asf7h3qcEEB1jz2J6m25tKnkJTRuvytaHpX44nokhBZkVU8kPT8Pxroj8TodqAeiwn9eKuZqWJaYJPr53QMma7q",
  "key40": "5Hj67nqixTYS5yaSwg8LkFc3JhDdQDTTgmdxgShbXzwKZszT7NZGkNY2FQBMm6DQjcAGLe2JWdy2fnwVrFhNZASN",
  "key41": "3shvpFpSnDZVqbFdKxCppAfhbfNbFKFTBbMHMMXGxRWM4dgVJM94USUgXJ5QxM5wZxMqUHFvEHpgrCGE3hhsZz7C",
  "key42": "zEhMHxhrRLdZmjtSnoAcqFkMgXHhUhorFeWV6gNZYMb16htAYgeyp74dR5qWFvjwQQmdQ64JDLN41AoAig2imdh"
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
