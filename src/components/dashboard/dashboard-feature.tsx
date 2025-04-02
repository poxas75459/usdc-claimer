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
    "2CAWRiMAgabV8cEk45Bxn8opgB5fpeFG6HUf6JH4SuvqM39mFyD98EodV1NUKPJJaSC82r1XCFNzr7M9giQAifTW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GwjEHdvBH822pJRQkcaR4BhtdsCmjCo8B5gGYopdM4grD6RodKYUb1meWQwyxD3gFo7VgyjYtJXfJUT8hCFUwPV",
  "key1": "351DnkG8F3wJ6FsYcc1zcYFD2xf5itowsT8ZbSLdNqvfr1P3jsa65HBovbNoUKZ1ZatKKfAYfmZz8pQzFMrXHMxC",
  "key2": "zv2BwxE8KrzKoL1MbUehfnZD5fQDAdsjMntJMxprecrN5AEh2yKr6Hm69h5uozwJh32esbgZUYEFFGzDXKSsGpR",
  "key3": "4gsibpM7fC4rLJeQWReut6EaMs2wXmMGGsjTBAX8EfzH7AyevmhDDQttViao5N2xyP9M25wPs46pgxzXfCR11fsX",
  "key4": "3X9vAaSdHDgb42MRBFHY4b8ubN4mNUEfzZqSuNh5bDZsdSCep71cgycZ2rFeg8qJfbohCnkWsB7miyS1johLmxWM",
  "key5": "T2FXuG4zgbXRoaoD5hbBKQbS1yTj9Cg7GnNyozivJhBDxyhqXJGgGTyG38jNhYeU8Dn3M8qWuqJqkzJEsQxQzmi",
  "key6": "5zSN9ZExHL3QZtBWuGA8ZPfT4HeCmjuv6LDmuJieLBbSKKMSVfimvqW5SJ2EE6jjddz8qFcyK5ZxVkckX4zUhmLJ",
  "key7": "4qJpa3vms1siD4kG8TosFhhFS7qi6q2bvHHvmP5gMFNkpnC9Z3M6aNMjfJeHftWYhpLTkcnTTmEE4QPQVKtCv9op",
  "key8": "27xfQL3Nx7erZe2ymiab8taeURsiyzGty5oeddEMjQJqEZwKX8vS8C71fHvAePM2GshMRAjVtPfWn6Bj19Rdo5B6",
  "key9": "1mndMCSYuTo8bCmeEQ3Aqobao18s5wtpe8LXp4pxFag8ygmFbpedhJ16m7RzBKsUc1qsMKy6ad5uGvWddVdZiv5",
  "key10": "2yN2CXFoMeT1CrtcX1JaFmsBVXvP8LVNoKsP44JuudQoa2ZTth1jEsBPnfdyroaQJQZ3tiJt5fLHPwgbAr1e1dGG",
  "key11": "3HvKrWJZHo5EyAXRXh7ViQTc9nzS7QVJ32GPY4tcqUX5AVQWHyBxgUS1jW1etfw53XxCSakj5onyvUfy6XGURXGS",
  "key12": "2pCCsqosKRT6CV6PuMXeSEcF1nPwwfXTnxfy16fzTwVM7jbSZ6cahY4wjNMVwCFwPQQwk62sH1UxtXYCGbwTwEK8",
  "key13": "5aKDHBd63dgRSm1kpwc8H46gW5hP58aRsxJQwfRXyKXX33QD8FZJpfsXigUteZEau9GBkb1Mg9DRSVxxySWit3KJ",
  "key14": "5oXuPTkxUW1ZnPFsgXU1h1osypH1nxqhkzJLLYw4v4WubbkmSAsC3TioE3CDwaJLwVjyS8AtncWZwgFWzFg7XncN",
  "key15": "5Bb7cjCnFS4Zx78SsSYEKEZQAG8nZS7DaHrKMxGxqaR3gJbRHhAKsCeeNgtCTv3tmqbt3Qvs7tUKUrRLWm7JHMpV",
  "key16": "UpFFrhXAb6BcPnmSB2gkhcxKJVdnDahbUQZD9PCXkXe6uJqGYvafHpgUBLCft4jvv8f1i5NEQWj5opsjTkiEzbm",
  "key17": "4eLQrgzMy2A8PPa78C6QrJKhqrLyZTYJBnMVQbY1Akg11TVPeU6TN64km3QyCvMbTjDYKhfaNmKywAcRmEEZpTY3",
  "key18": "4wrPJ6DQKRyr2VdyVaqTYWhPuccM7bCbXEJWa6ipoFsWzQXnKMzvx8wqbKs1rE7Mbb5rSEAwunEpxUKSYSdi4spq",
  "key19": "2fQfjriVrAEn385DeggDK2nXWuAow12aPoKmbEQFbi47TyyXXMnfXkv7x3MkWzof4rt5ZJpBmLmBxPFmMtoaKjra",
  "key20": "4GvjCZxBgQUTeSGR8MWVSXrTweMuaWxdqbohNyBvXctJePwjjGfTPKaRecURiF3X32tz6vXZPSbnQUZc25GsYg2T",
  "key21": "2hnS3AncWgXyp5saLe7azgSpfrzhAkxpUZDxFX7ya5rbQgKHh2cpBzxpkoVhRATqZDDk7ysAvH6Dab74jD1fuvN1",
  "key22": "2raSxxjNjkUmpYSaHYuCZtrfPsHYvj8J9jqMDtCnDg28696VLbG4JyrGYM3NbUFSXcRB1zsFDiHje59xJmfyrdnu",
  "key23": "3LitDX1jAKWfigir2wqDRSgZFLgdviYCc751zsyJ5BG9BVnguNKACd9zcRTk5ihQ7sbPw7UjHjdBSs5nFxQ67C1M",
  "key24": "52jkFqvpQbyGc3aX7vBaATD1ructRhV5oft2DhQdaU5u2aqBfwaLs4hKNGYvL9miybwwGmccrNysscy13nenJKb6",
  "key25": "Z1HeyegMsHigaCu6AENkqtBm4MtHjR9KaMjs1NEUSAiBYRKKShSTvBpGYdg6w3STA7zzaLM2MVk3DUMsAacVP8s",
  "key26": "4g8fbhQdh4U9jKDPgry3LRZ6b3hgHTfn2oYZfgRD3jyqwfgxtHAo5bePq9AbLdGdFmMyXvhLS1pnxT4WGRKcco6W",
  "key27": "5dEn4kqfJe4wYsQFUcmqqx8rgF5EcrMcBBUX7qUzQmYeSkJxHThBiLWnNx9TPgchvP8AwWUDCjvmyPjrtyWyazRq",
  "key28": "GAmoKVUtA9G9ZEkUbH1Dh8WXmsWWbV3Cjsb6uHeMorLSBBo44fmtGn95PamFRghfDV5KaUxKtYFfwkSekZHjAZR",
  "key29": "3CQ41ramG1LnERLsTRTgqD47e184Km6fU9bsWSB76xa9sxqAiBZATGm8JNnnc4e21951vzUZ1Q9bKJgjTqhBMrfC",
  "key30": "4dqKbkRoSyTdWafhabGwLa2aVTkyMwc8KWkXS7EBfxmGU6N2WhXHko2PnKrz9b1MbYmqdUGJkemdyemjViujL72W",
  "key31": "4K5VenZsNJyZnfXTVB2K67K36dvxkMoGu7cro3fka8thcEEQQuSNez9oYhLh9RLUwN3853omTz84ESWM6dx2TgrC",
  "key32": "NH9CTxtRhyWHPRY2Jq5915joHDRkFDWHdxjtJN337xVZrkmgPDNVwkHZ8QzRQdPvGhw2Wco3fh1XdhF3Dghhoiu",
  "key33": "2MAo7s22hjKSHGUD3tPq6ju7qBePryzRtTXkfJ1dSrt2HTvh3wqLPgggCZ2FcnLUxVxAUeTBnsNTDTCeWHSP7tgo",
  "key34": "5kEGgBfkAT2pEaX5XijzTKioZbgiX4ge3tc7EaG6oP2cbccwHP1C8mPLdF27q5bLqySwesXrGozNukx32Wnt1e39",
  "key35": "5NcQpYUzbSez6nauJrMgb5NkW8FurTtCvc37de7Dsrfzb9hncGWdMZJ7CwPxCDYty73sQSgoLtrs3LbRofv7kmx9",
  "key36": "3NBm9Qj2LvB6WbMRebwHbNL6XgQ1dswq2pf8bWsUij2HcHvQQHqi5ivVqrWBAk7wHJQ7rMHdmPVDxrQjPHRmiVUS"
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
