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
    "5Cn7un24XB7T8q5oK8KZ9e9ynKcmZEvLXc6NEwtU46jc162DSgMDYQDhkJvVfMEU1t4FFbguAQK876kRUPtwg8zB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HxZZa3W4p8p3r5dQed14YxVG7hGqKEyNBYhSjx4uTKNu3HHoPTv2EnyVrZuZsYZguQRmrTfDtTawBsRyrFE5wB9",
  "key1": "5ZKtRini5sRAdcYWCVdWPdoLAwScANXQpB6KGoxfvMagURoaX9nSm1w6JFTEikwnzq4VQ3auK8Z7UxTJ8YvF9PYT",
  "key2": "49sT8GoyP2yoPooVhDyvYdkskAc6awWvuAgYKr5Vfy7WFBdAeTLCL17z1VonzdhKJWGwKWapNLoayjjJPUV8p5DC",
  "key3": "jG4U8wRpbNqnKXx6JbBnxQPPcoM6cvCoQNS74GpB7w6cgZHK6jobg12gikfQ85aUEqxqCivs2qp2BpAPwdTG3q7",
  "key4": "4ZEVyxpEhLrBxBqR5fFPUA6WTB3v1kBzUNmmedXfvyLkJ6Y4EZHZ5r6QLPaVquktMBNvPZYVWDAuU8Vu9UWohE99",
  "key5": "5iZUACK3Uv5hp7AABKpFpEAGUad1TDrtXBoct3vxYroKZFqvm1yaTimDNnQbot17jZPDSMKHPwJjkDeHEACpRKs",
  "key6": "649w2ovwwuGQC6KpDWqHncMYXUBXrGjfdQJ1mX8eVEjNEpGfJF7txTrtQGU5zWhJCPyQnJWoDCGWzj7Kxj5pZWpC",
  "key7": "4vRV48Suht9huwCDvNeNxYs2Q6hBpqB3qWD2zfeQnpKTfj3pJTByYLm8Ne5oHdbVmdBpxzvnpN9YKhVvNTc4XUtt",
  "key8": "qKEYj4KAQsa8nFnL1huPnSH3QorJWNcXChVGmksUJDqA6L8vZcMFR422DuoerjKRQHGZaSGQ21ai7NMQTANCygj",
  "key9": "2XLVyqSrdFcHcWe3XLpVVnjdR2DYxFF1P3zG8n9v9sb8W6nc6AeBhCmByyiSgAoTzfvtmwCZAyfDmRd3n4p3bo8w",
  "key10": "5stg9TetdDfC1QYdgc5pbZekerbJFQHUkS8mkAe16ispMLXFZy33YCdYxdn8xxQp1GaDLSfaFKxiy74D3KCWzaAm",
  "key11": "5V7Ug9g1ND1WT8W8tmiNaczfJEHyKLw6ffYXtATaYzf7BtzUVtACkFcv3UVwTjvRp8gHwW1TfqU1pDKaejA8tXci",
  "key12": "hNwvZg8V3xVHS8q2KmYYFEm6cLL2m2K6GXEjbNQ3CNAuKt64mZGLP9hTyXBC6kLSqBec8akoPgxgHmSnmPuMSeG",
  "key13": "4srb6fFUSXGnYwk6hVizZqGDxSD9sYSZs4SNnF1ZdxwbHi5dA3R6oZS9uGrMubBruT74HULJy33gMys51DSBFW3d",
  "key14": "2BAZiQ8aqCSHCeHDsVbEpHyNBVvEr2dhSbzZ22H71VK9FzZeo6ixCm6m8g2x5aZNu8Ux8eMEeDrH5KNscMbsCMyn",
  "key15": "4sq1qBUurdfJ8RqEtedBxDBPr62PWTrt5ZUJ8mpSY1gW1nyqKzXZaKuHg6PeASeaj6eQj7WM92kEszh1ocqWHqcZ",
  "key16": "3q6QF9kqAsCUFXB2qKhp4Ug5W9nbDSmRw2d9bWe2dREwXabyGPAujpbpwQozd3i3M15wAsftZQ5vtEmPz3bou8c",
  "key17": "4YAmpPN4hiQ9kQ1JSUt1xiThZQjzwwMjY8fQVFMmon3hucUrPDCn67ahFEH4gBUoqYjDjTQX8jB17Yn1uTViDvaK",
  "key18": "3S6NpDXSWFxsp414k38PbVGnwB28aaFvvUkdtYBQXctw9PwfTjNGgjbnpzYmzYhpRjEHvMskRw7RFfH8rtyZys9Y",
  "key19": "3U1asbFnAUsXUSMcT8yESsQdWVmKy1GsfuwnVeiAdHQ4fHbyoHhgqqruLxEnRaeFYyNjhkTqJ1c4Cf6uw62Fiwqd",
  "key20": "5cmGmetisFCs22CWpk383CPxuTwYEZ7Qjej5hGqiSEMahxKk6Uap4TqUdRUGUApUvEaP4LZmJQkcqwG5WY7CFQhL",
  "key21": "5riBjJwxLg9ePvcEsV6Hhwpk3b5mDx4zqJLGKDGhoLqQg8nVZ5MvZYZZSR75xZYxRFhHpFHE1EarJ3EJWXeYaABQ",
  "key22": "5c5AxpreP8MJfndhXdQ6ZBZbVtVW3ah8GEp2pMKCGXzycoDU2NxS2cZrbrfTkBxcNDDaJicaEoVsG2HQN7bGbDeU",
  "key23": "2a4nvHCLRNgePFSaEoAqUnixL64AWa1SNNxWJdSRkcVerEUWgNtwKJDG2HJkiwXy5FQu1PTLubZYcQyFmdKqQ6Sp",
  "key24": "2w6sGBRmWTgzDB1beAoF6W1Z7oHzy5T6cfEBX2MVaLnDD3db1fpKCB5wveCSv3UcJds5Z7g2LRXtGF5NnbWEUGsZ",
  "key25": "2GVAN3xwW1V8nqmqUXh4fKgdGUHaZVWh7h5ZeCz6TFXrUhs3UCv8rQk1u92vWpPemPTBnvSpSPpasriyUeW841cc",
  "key26": "8by2EEeevjUGLXVGE4RfvxbA7ZwKHZJs1RVrtLXMZSFo4C82rT4TrCyBzqErRaiZS6sXTmPNgx5zxaaU6kEA3V7",
  "key27": "3dZ7eTS8ptcpXJ86itXTXh6bZdtxd6XkSyqVGhnsKkbxSXmoUJZjiLVQX1L9inB1cREmMkmc5eXubWyyrTaNsozM",
  "key28": "5LfrTpELVNjM1vXmf4envwM5mAGznSdS1mhGFq9C9qrUsNYAwYTuD5PHpNU6NWmGoyg4bUWzeXnTjDCrddvcaNu8",
  "key29": "5Suar5yDECkrMQoooT8N13fCXRj6hMxeWQjxxzH3jbjHNr8cHAuhYNVXYnnxuNYbyjYX4YLNhjt5xSXvCeVEnMH2",
  "key30": "3kFdQAZy1YYc2y7xXLTeTJrhQtUhKQktJpGYejwzMWKHmtyXQ75Uj9h5bLr7QrpnRk7f2p4BjTZgGZZkAPLN7NiD",
  "key31": "mHZ1LkUURMhJ79SLLme6TdesVUNT3PJJBcb2SYCRyu993Zp6Mb3AjVbWCZhyfa1xGqoUuz6P4MxuksB9ebePX6W",
  "key32": "4WZ1UpQrvNtZac5nHnBxpYub3hksV2kSZ8SgRriYG1onbkLWZeo2XXFZTXnULiL4WYRqFtae6UaXzEsdCYwtbPyg",
  "key33": "4rCCk6pjiAMrcB5qzuyPG6WdKBTU4MWZaCjuWoU9RqdvchUoquwgVn3i8h1wFXM17coeyt7QiMSqYPdfPud9Y9DB",
  "key34": "ui3h4jq2FiYHSYqrBwjWoC1xFssmJ3yTsWwKmay6Cj7M3m53yNHxCqpzyXfkL1Qf9RKRiyNupABtnxVoJCXunMD",
  "key35": "4MhPE6T5tXvWmQU4pRAeDXeakWa3kvaANig7FoRmcTRFSTdaUcRkfiN3tPdEX68JUhtMJ8avfWbk2A3Esqusgvhv",
  "key36": "5gCSqczdjkRv9iPrxZJVmxjSUt1HwDXMguayHvmYsne1ZuRvn9qpCzgNCm2BkyGy6mRDmBuqCJRQgR8bmmtiwczr",
  "key37": "5iv4gnfJZLN5uqMxo9AASjKJquDnpRP4A7SrW3F4APBRKEEvrXAXE1iMpi37kSJE4mwMELaEyUdufbKvF9ABVRc7",
  "key38": "5dBPKGa6VuRLhSD8GJBR1YARuEU5Mv1LT3RPwcKDfYamm9xz6oRMsgMGzeCeuq2TokxUs8fitLNq98KALoMB2Fag",
  "key39": "3cEnEhssD7Ymg3975F9r55issABT5GJZLuaTdAQwXvU8uY8hENApnx5jkJX7P748qvfXRqpN6FkwdFFCeoW2W5dm",
  "key40": "623cJDzvNooe1iizVTJshJFiSTtfbiWNw4FjHLrk9hCBdkjLrXJkDQD6Lpvr1jS5CiWynNYVWE4RdUasjFGZ8KnU",
  "key41": "3q16MuUDXz2STxYoErmndQ1QW2AEgActe7sBB1jTYxnHFi55FnX7vBreuHgj51iohHRmdEiRUXMCUi2hjkDskBXq",
  "key42": "3pjSHD8q7A5fZXvCtnGa8AZxTWepZE48QMRgjia5RjKPxXrz22Au6t7MszJbmnQYCDJgvur43mu4gnzaU6SE4egQ",
  "key43": "2G55v1kGUXn1peH6mbNNQFu7oD4vxt8aLjQktSLpX6BH3a69nsib36CaJJboi3XCkuq7KfCiEUNCMkRx5FfRJ2kv",
  "key44": "2oUjNCQRPtirVviMs7MyLezKWSLVuSJrxrH5EgbMm1JqKAEfYi7iY8PbbktajpXoiHYjWduNJRNWkX8N2Fz97z2v",
  "key45": "4AspSkQVJfxNdFza2Z1BkDWYCNx59UUZiLpjBbepVC1o2oV2tf7PQyZYbufYSRNtkR69a1CsUV3DJ7CAR5Wf4pFA",
  "key46": "4EgDABSdhQXMVx3u4cyGvkRq256o3vDroJPTMPT9zbXMvceC2XTD78GzcGofNEgUksYzyNsMA2iHhNyaJ1RbmQYQ",
  "key47": "DsanQ9JYqoVqf6uJ4izr1TTYBhrz8u3p2stsmdjxLgTrc6355PG2cVvTMERMLzdDVqeJ9Nh6sAbpMN2UTQ63qAj",
  "key48": "5fPeUgm8odcDCxva8fzFfAJFaG7wMeaksDP5HYXMyXtRus8GTnNRt9EX1tzxPiPoxwc98eVQEDEWeqsLgCSvTkSb",
  "key49": "21CwUb8BqEZcHkixmoTG9qtjVikFi1jg48FADJAhntnGbTu7jEBwZDKf99ktVxMM6APP9SmUzYYNKeiNKt2nFQ9D"
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
