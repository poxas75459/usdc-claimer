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
    "34op5kghgXu323rsuPo63QVNvyJVFKo8fmM9cGWYXRf5qupivafJU2RkdsmA3MYz8yEPz9YZ8JtpUuo7DSDSYLSk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TPE7uFH3HWo9d8n2xWMzmDqVUShSWQWsxbwaBPy6fYAqAB6wPzfmBsFYKuMG8E6vXinsBt2zL2GcFaFBduAsdZE",
  "key1": "23FKBApajmqUwHTpvRMhinowrFNohrLjP8cpkHEXmfLLuWggcgGyoJM2TJ8K2PpfxjvjAt3dsnpn13domYXbnmsu",
  "key2": "2zHYvkdC8yyS9ZQh3ZRAfYoCnPzRia2s8tYYkoZZ9iZc49h3tq4UiTzmSGyBfPyjt3mHrqKKTPUDc6kTaASiYHaD",
  "key3": "5t4rdUskzRB5ffygz7XhHfph6qvRj1grGNM6QHuafXahRmjM8SpFQujxZ6fW54Hdh9bEzSrPdufDtPNUC9kL4SQ",
  "key4": "442yBEs19vjewWr2qt3LtWYYnXQjcqnhxmFZwHpbZszFLwmKLnVvt1dTdUzH3XEumJfXaCHtR25aiZitt7RETqyH",
  "key5": "4fTr5fFQqpP5tXcCaMtACtJHqjSx8GkYFJ6jjR1Ep27sxLhFJ628y78MH1tpN6yGVFJgyWTFKGmEyMKW91qCd836",
  "key6": "qAAc5f52aDgt67hF4yZVbKXefhgJoScGrWCucmniaVmCe2P8SzLVfwEt22EvfKVevd8wCYEbGwS71Mgzv95wWHv",
  "key7": "5BgsBekq6cVBkbf3zWPtj6LSePibXBFxqBjhVJCHgTdjQDJNrLMDW9WvwnDkRbZJ4KjCcZvYmudZvj3t94SLwqnG",
  "key8": "2aPHTZAzBvVBsn2QfAndrJDAFk4tNCedVG5BnanSpeAyyCBqFRcddCDa7VP4kGRbt5HYUEpLMdA7181W9xWjsVum",
  "key9": "4wcHD6vSLSj2smJ9gr4xSvHq8HScxYCPkmcrTEHkt9s9tzsfYGPFknZgouFP4NUm2NAiAW46o8xmdR8xaBjYgjDX",
  "key10": "47pJYJv4JU8hpQYMLJhkmDijZ8vRgsNiCmuGCwYHKxBeGX8EhTzhCxapSpVCEndrDTe7J9Mg6nkDwvgYPvuSU5dc",
  "key11": "5qm7TertqWYQubXRRA4XUPg3tmGZ1bJergwzpgmxxecabnhQGmfFnPndAQLhNac3bifegLpj8vS8JikzktEftpjJ",
  "key12": "MeMqaBmBGANAjFXDc5J7WrXg6N6sYWJG3rvs7nLDWe4m5Z8Js6MziNgtahC64YZP5oRB2ify8fHuykWP9q6RH21",
  "key13": "5FG7TqGvZ7rs6oYcDQs4aC3wJwkcYhVJxutEqdLH3bh3334QsbmCPHgJtL9K6T3GMaJHc9KJ2R6JRTStK6y1rH6J",
  "key14": "QMVytrcWAxVM9nM8WvmapWq1NEBsQidxW68ZrRSJaDhEvt7PqjBFpWFyDgf2TjD8HEXE3weMn3qiirYPMd1oCdE",
  "key15": "2ymwBSknDQCMAsu2baiuey4owDQC5Kru9ue6yZfCSy9JhC7AcUU8Xvmjk23sS96gxaoAeSjpCyRPzFtVaJxeneGz",
  "key16": "2GL6xFq6WeEmDC6LYBcYH6TZzA7domgxmWTnZMBvcQuxVk78zkmH2K8QfqLsjDLdrdagw2qUV2MyQvZcxFPbtoUQ",
  "key17": "3dkLg4cnzqyJwZMkJ7fdCP1qoXzp6bzPu7Cqon1MJWLT7uywm6s8VFTTmKD2xeweYr6EYmeSc8Xjhh5aX4Y3Besk",
  "key18": "MEWw11kRGxCKYrLcSCj2qw7SqNiiwCsGsfV8vYqRR2eARkDuMgFvwMsWjdYa9wQwrYtJG8cMU1BCeRT5DrDBjkB",
  "key19": "5atYQG5w3L8CioQ8GyxrCNu5JswZZ51woGTi6ofnnSvgkGVyj3KidjK3TchXKsjjwF4976h8LqXMaNUAMBosBpkn",
  "key20": "d2ibo1f4hESWLeG7HJRTeM6LFMXXUmap2yo3KWnsN7eweqYD5YCcJsXkYBVJ93uYaSVWmCDLdASoFKD8oWD4FZL",
  "key21": "3bsSVNoUaUiKCP68HWmqz9oL6pEW8FbYbjGqtNVGdg84PhT5YN77ngCP4f1eGe8W5YMtqwamQmtJbvHQuYfW4JKT",
  "key22": "ZfDNgVLjupDc5B3GXMJaJ1KxXXAr7rn3omvUHUKhTBrjMzB4BAiWEkTAG8Uxuew2Se63z245FzyRRLniy8ZgrK4",
  "key23": "dhGcHvp5N5iyQW2LATfC1YL2Dv2radTi4Y9MKh9vUAoezjx4DFktoDyFTfZkvVGoJ3nRoDrzn4nSyJCPXnV73y6",
  "key24": "kgFpPEUZQyJmkg5ptnLrE7HSRv3vvRyHz1G23ZGoa8Bf7GfuabqzYCHx5Z8q5vpa16XMoRVDss6YEhrw8G3X8vY",
  "key25": "4C7SHjh99FjWEATr9UezV4yg75nt9Wu4tVxEMw8yjuoauCyCkdmVu6J7ab3gj8ABPddHuyg3X6VjbZUZFxnzNuPN",
  "key26": "3asd8Vcd9pqZbBqjsPqh7QeyiN39R3s2YainhpyN9kajaF4JFfP5AEd41wrR12bzs5rnYwdzddTw7KaP1PVGdm71",
  "key27": "4hjQk4r6Fmzw8ueqqW2yfoeZCJE5UPDJogeBHQS2iiLMf8ZjvbezR4SVnBSg2pztvnxVkAe8YrAxJkQdSYcVq4s2",
  "key28": "5sZBGBXHQjudMuBfPKm58SP6XHMDbbv16zKQn6uu4CzeEfYjLHZKxigHsPbkgaANnbq18ioPPdtcCx86XZmPTcKV",
  "key29": "2R3HSMM1dgRLA1UJzTQ37wWe7Bt7xswFuWn9Vm4BZ2aGCsQgY8RYJyHhhnRHgoBGmnq2HigZoVTjpVp9dPcMdSD",
  "key30": "4k6A6u1z8uXqQUpxCjugz2vZTZRKdrAkrRRiPcMvy32M5fHfYD7noeu9VdtFY88TAdzT4LrYHZTpjn5UT3av4KLP",
  "key31": "q4yAXNhLt4eoCDWbwGnHtjBqiSPhqQHAiBW4jGNWNmRLp7ifi495hkk4GJZTpDN47JFZFzBupwN1zsmjKMWK13G",
  "key32": "5bvYZPJQaH58G8ux2xcf5Ua6V4DNZxBXDCRWBCjQfoYzpWQcphinZH9SHoWei93ExSqbjQ3vxGPYLAZs65QpJU1S",
  "key33": "5KCP8KAFiPNc7RfZGDtB3FUH1buHcitjcAL4un8wv3hg6yQvZsgjUf5QNAA4tKe9kbuLASnsqJgcnwumjANKqMMj",
  "key34": "2K3QE4uXdfJpTsn1qb44YQrXtq6TnUvSwVFrxTAbGP6uUbWJLf7GviFMHXDLFCcjae4vuiHwAJ1PNs9wftKdAFND",
  "key35": "2EBfEKXYmXZQt9dW915ZyVidEzP3a6fZM5R39mMqmecs2rPzbQdDqtAVnJC6291xuMq33UbEtYjHKjbPxx5nj5pw",
  "key36": "5BjNNsbZhNmQtBDwpqnZ2mFwuqeMBuYqJCznJnhPTpJmGutf8iDJjVZiunsoPmT8UfMvKoUHmKfyroHgJ5WnJf94",
  "key37": "4uVR4P3Y8wHgyCzqaUDmnbnbysBXxcc9oBdcrL22XKoXT9Vitesif1a4kxPFDcjTBcdDvzRAxuNh5bHrmYP8zkpW",
  "key38": "3SR2op6dRjTqXjMxWinHPL1NsXvffhm7bxWuX3TGTiTGJoZTA6zKwN2861vZbhvwWeJXjX46r5ijU6U32HyKxeFn",
  "key39": "4F1Q2joK6fXYdcG7aNEcy2Qe1GShQSMtZEtBR47K9kBHKqpYda5FLQDULeERwqny8ebWSPezdwjw3gEKADyv8iP",
  "key40": "dxkMhDeFToHo1o3iRRgB4JQpBNpa11usj8uxprrQMGYP3KTb7KHugyS4MzpJLjTUWSKySQmLqaxWRxia4ssXqbr",
  "key41": "35syGxSD5JfdLgViXyUn6Qr6YkKj7J8Kb5yFxUzcavRvuWngBYdTUFxvKuSUUfDecfxhzQRnnrCYd8ogKQfw7KaP",
  "key42": "3Z8RyWswn2uXAb6VRAZTAT7pz8TCXbV6V29yiBofG3Bt4MsvHXDHc7A3UW7xtS2wMgQRgrLeFP2DGZ1xe2TgCK3C"
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
