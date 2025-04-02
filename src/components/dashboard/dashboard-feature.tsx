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
    "qkAv49tssPPe4oow6hoeTQC7zaaSK9YVJzkTx5UcBjb4P2gz2FkanLFPrTd7LwvohMTGC1PLJcBtUFQadbRi18X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nKfYioZ9M3dH49LnVq3J56XDCFRHrLr5HoCief6ZhK5XXb6HkrVo7nx7moq3mvkGNgkG3j6in5KC7bBpBo7vThQ",
  "key1": "3Yj2enjHTNn1wMuxsB5LR2EPtgxtR1u9JEhGzp4obMpoim1evryentUiG95WELZC8zbqvkrqtuwZNJXqRi2dfHqe",
  "key2": "4RDB5VbqXi5dVD3EBHhPgVjjECqFrLYt8tGeteg97F8HvzuXMrf8x6PLG5rUGnPydn8jN6ozAwjkS6GqAD96jvU4",
  "key3": "2Avvw8E8gWD2Rq5VkgqKhTmgsVn3oqTzjuLUNH9rsggNySnHgqgqQKnchsUh7Lg1b7ZYMFp3kFGMevUfZyK5b7uW",
  "key4": "3KShTRLKiNoyS86ZYQeT2sK3qwuRgb2L8yGhRktUkBMjKQmD7WqR9fAZA6VSLMaoqhZtH6prie7YPSdkYaDrspX2",
  "key5": "59WyrBwsc1ZRbKwcRNoHUEYqbgBQ8aTfvKr4QSaizfqLMQzhF2G1HVKLRNuXNosT3qaJR18zyoGinYBBbG6tHQwm",
  "key6": "74GGTMTkdgDbVScW28yDr62NsDN12Q8gXAKep9xGWCSgP1E3x2sSEMczTs9EcCNUSZ4Nf2bFZsRqcMuprNauPwJ",
  "key7": "5Gn2T3YGS1jcErbPTCiJKzJcBSxwg1uFQkg9Bb8EwZkHnvD4P8F31kvwBY9corkFixTAiNiBpZMkn5arGgYd8r2j",
  "key8": "DX6xNCgaLLMyrJjTybFaioXYfBGA8iZGNVwaFDNrDjxjh8aABJh8VrgTTpKQs2auFZ8NXWz7aBJeyTeNs5pzVZW",
  "key9": "23KCst3RZw5vDvyCo3fwpj8Nb6XdMcpiCmjVqcTMcLMqMudbspSULUtufBF5Q5kHn5t7X7ZGkJPGKqafGhFtVSbS",
  "key10": "5DxzinrXw3EgfyvbVgHw7AojNYqqQoquW64d9oobhbASA3n3jR7SC7nRxJSRa5RUPtQn8rWqJyYd2ouJgPAqqf4P",
  "key11": "56Je3hEXNFoco9GCGqdv4RcgabdxjgUjGtdcLpK4RpEeW6gk49W2S7VPRgBcNmM2hKkXSP6qiphSE7RLHXjBW8rv",
  "key12": "61MezBTQZ11NhiH4gLyL2z2LM3YwSmPtE1JUpdCG3f5kKvSvnGWbzmHBwkv7pD9DHiHA17KhTiFgNwpgHJymp6D9",
  "key13": "gbPf4XqDozYg6zAJqQ7aYgEMoPXEaAdWkNGZfMsSF5FC4M8xYN2TL6Edmkvegzzjgt5mQhzZeLhviidP5JJXiku",
  "key14": "nU6VfgeDAtoocCtD6TWEAmbtwtjVq6nV4fmLYDWW5CteVN7vRqPKPJzE7TzDNpGRinHg9Q5ysyhDkj5n6CKqGMo",
  "key15": "5iFE442cvrsqZjo18zSLtdQCHA76i5JsGsovoxkLmKrLQa4CsNfLP55RNr5LYkHoDRcM9jVaXHXNgT6tDzYDq9gx",
  "key16": "3xz6dZZ8iZrdta8Eo6ZGZbyM41Jh18hsCQuPhFYNb2yLJfrXibRpgF2XB7XT6Cqnxd36Bpk8JVoGHkvccABsveXP",
  "key17": "5Bj1wJAzQJqFQFP789qWx6yJQ9ou3d28Z9cDe8T8VGRexD4dPSmf5oqypaRnTfjGQXFDvGR9AyJahqReZdyWS7MU",
  "key18": "SMvojV9oYJBtCh2SzxVXAgfDx81mHEmjpAM2pv3h8Zkb4ncZLkvWjrVLyR15Umyhu5jZbuYrRN9Micbk4bEJwBZ",
  "key19": "4U3RhEp5VoXMTx4KsxbFycR984ciPGc5TANvUYFYX929e6P2AJDkGcL6D9hWkhWfBLc4apym7rZxdnmnagqatR52",
  "key20": "48hYL7RhRWqpNQEbKk4sAgcVt2sEAKZ6ek4nuFXEoD1PSsVAb2GvLwqr61GcZqogh6s8CFwTdcxKvWmKBVK5tv4d",
  "key21": "3hmxS6gi5p32k8JRzwtYmVYwLRgBw9WrAvJXknKwjwcZYWV2XJeWGvdGV4kCYAazKHFgzCstU6wvC7urgp32A4AL",
  "key22": "5UhFZJpAtUFiM2kR9v3KhMrjGaj1ry35XH8YY7TfQaULUcfkT8kC4R35kLNG8U9XDVnhhM5V5PT9vD7u4jJzLQrX",
  "key23": "5qsj5JVzLQNtW83joL4w6jh3xVim2o5Kcwo8FkqyDtCCnXVzXQzKxGeh1qmhf8358Dwm7keWxTEshZ2dUfWa8GKM",
  "key24": "62yxFmGHFerjjx7R2dS4hsfbi4poxtJrYEzhcxpJJR8zc7yekZ53B9dQV5jiYsnBwoWxQmHefrqbPBnQ2BenQXdJ",
  "key25": "4wC161upVgkFAz7t487deyap2eQQBNunT9m1TntWBE9uXbQRqBi4x3MAs4bzyvLNMP3amTzjxmqgH71aJWYxBf7J",
  "key26": "4tQd8iekVCP2qK9fd4mYUSDYZiD8VTyvKJGZWzpN2nQp3g6HojSEyKyTvAjLh4QaoCnAP4u5SK6RiNgjBySNtmPR",
  "key27": "54njpYegD1Q9FTKxGUMuHGDEN4iUh26B3d1LZtj5K9UhJX3skLbXCxmXG2WRYRhPoP1j4H1AxR7hdUjpm3QDu7B8",
  "key28": "3t4gc1KoNx8Md2GKxc8vhnskuZ3EH293cESdyVgb6AHeRaTSxzD3N7Uygg3CZAhfsawRmAWbThfx344gJAUtaoNv",
  "key29": "5aMZjGZ1FS7s2mVdd9PGMpg7ZVDXFDzttCphiuFgJP6vozmbfkXfTUA3H6f5SajTnFBA7TwbGVjYrMbjUzT9ndKG",
  "key30": "5j1UoATrFavBx6mqK6YyuGMFZbhZMx9ty1E8smQ1gaHWEoLs58PEq5NwTxzKSJ1dCS1yLPw2mApVWrwYaFcC8nbC",
  "key31": "573Gu2euTp6fhbY1Bw3xpB9jPwYGyHMfQPpvX7tt1yaZBxpkT9Tt9eR8DUiBoaEWx7teAdgUr2FEGVr1YC1CXaXx",
  "key32": "3KVvjNBVa53bWTQHx3SdiTcrhqKiX8ei4py375WtgaW4MvH5ffU63uY7JDB8yxZBhcJdYgm13gsVidAZx83Zer84",
  "key33": "4JLE4G2UdsZSDzH9aShThZnRkAYeJxhUcvBWPisgsqjJj1zAomoi3ghuRP9WpQSFF564TDRZR7uUnrTj6mUkX2nF",
  "key34": "4AmviWqSZRQMNt78WJWRmGpZammdBPe49ZS5cTZ59JiWHmxRMy4CDM8ZHv324pM4FuFuSBt1idi5c3hsKsSCczdJ",
  "key35": "4HPyxCKF3SVFrGMUmUxnmGz9gCAPcFQoiZmTWFbSV8SkvjHHZ9thm7JciQjSPyTDNw2PkwT5PXhyd1mhKWvazsGH",
  "key36": "UcYQrsF2kBxo6Fbfj7DGD5FyokREHanQBJA4ruHm7iGgYpSrcSueqgLa4DWMnCpY1PitW37HS1gRVL8wmiRbsRQ",
  "key37": "31EEoh284PN7iiEYVkG2R3sZyeeVzCHGxznPtSmo6WschhSpiWkZxNzE1gbBAXrBTVZN2fawotzVR8cR9q7ms9EM",
  "key38": "5Kjz7A6qxjgit7WZPFBJ5nfa2wexdcFTiptpU9gaqGQD3EhYdZtsAFvihqRtsHkx7DkzcQZT8jbEKP99ntKBL4YX",
  "key39": "4jNJvf8mZnqRGTPZ4UjJz8KPj9guxFpptsYXq2tdEP7ABQpKgE5ZVYKxHsgeM1D2BH4U7HcBBp5kL9HD6pH5BzHE",
  "key40": "3oN2VMn4VUCNafYowegBsR4aKx3xJYW7XBrdhorz1edFhwMF1rYrpMtt9n7nccJn3i5bdw8VmTw19bJyCKdMtpVY",
  "key41": "2vcmF5N5qwJKcEhcWwwyM7goFE4N9F3vrWZe3kaVwqhirqTGzzvsAnKYHbs7mKaTrSYyoDkqZ9titUBfMoQL66m",
  "key42": "3WWqmJCcKSipcQDYFXwgPsYL7wnqYxiJJGwcR2JtpK4uKcngp5rVC7K4yTeNL2yCmGYv3KQT2uANei7uB2fTTGCb",
  "key43": "5qFXPh64PEQ6tNYCbveTTa75nfbh1hViq4ogASxjRsRYsQRTMBFgVVySkaEPUftnE7cvnEU5Q5r9GgB52aSSkVF5",
  "key44": "4E1QEWjs8AgVMH6FJMo83cJpWthr4Sbx9L8vnpSQpCtyrYMuQihmZ8VjbAchiQfmW7sN3TV4Hepbao7tySCpKreL",
  "key45": "3xYvqMCDeM5EzJsY3Jmxjw2C3HBkJ6iy12HeP5MVLswBuw2uFNEoeLj47aiSqPrNX8Kr1Yri7rjC9FekQEF1hhn9",
  "key46": "5sS5vs2XgPdqjd6FnXcCHSF33y3omkStoS8Ztt8dxvfF2sc1PYJuYGzaZsgwHrmgQ2pmyeeNzuvgxdtb6F6JbBzN",
  "key47": "2CnSawWGHy7rz7REiEzZ3eFk3kMuMKEJn6QsKVcBJ6gBgevUAawuLzbDG8dbohkDRy1hUnGsGTifJ6B1udFDMum2",
  "key48": "3FS7wnq8kfkiN7pLMojWHCr7jWYAmzqods1ZLyq4a3TQ5ZXPZ9FtoxfrrRjYmiTDCVtRDyR8fFkL4rfTVQ8pDVNu"
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
