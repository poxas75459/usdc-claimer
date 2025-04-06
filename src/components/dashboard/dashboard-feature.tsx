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
    "2SS4S7GZy3b637KJYpxoEZgV6BnM3R8AEkCjYbuFbC2ZWF6ZaNHXmdjtf37uwp8sRoYeUZswuQGiwtXMWidfGQB4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wCDwGkjPgwdL3L86Y5E3ndcQY2W5paWM85mi8pEtC2qPj6Mnd8PojV8rC7L4K6Td3bMKUyVwcdeHnbyBqRVgNvx",
  "key1": "3Sb1KwP3Komsh5D5zXNBYKtiSXd3qoJ513mnmki7TmUyCp8AyGzC5vT8mLhNGkccgaCr55TQZkJFW3CDfbs9r8bm",
  "key2": "4W4PRzqBGv6nDvULUpEXv1MjKw3D7vkCNDgtABjfBGM9qsDYcCK45bH41QWQPmVhpzpUSPhiWSqMZgKceRxSijKP",
  "key3": "XeLJQNvahQDoRezpRbZaC9qGou3PhVP1vzXSfpZn3rPw9RgqH7ubVm6ef22X5BnecGw6U28GmkfCH2mNzCggrU4",
  "key4": "3hcUCeD6s6j5knvVB8nELqLrTfKn4evH9nzL6k3p4cPXMxJvWfCrJ2aqVCHHr6Y9KscDt97hdtGNUkxALfezrrwv",
  "key5": "2BHNGbeiZCiik7QfvBGQSX3AxD6DqCLUVRhDLvApA1dpuKxJjgZFAwFfSHX3EeTsuXoyKpJBBCQMzrGwShHUMYDb",
  "key6": "4mBqWytPuA5jvT39MJGNQKR4GoL5jmn3PK5oP8yaPp1qEw7cDyJwZ7Tjc1VGkqAbqAbCbqSoduktL7TozFQ2HXJC",
  "key7": "2M7qQTsNsP5xmYD2YsKhG3SDbYVxE8QGAcYLz4B9Dag8E6Fq7V7BjKxhBtuPLMvzUtufD1mKdE9KbpBfXFA1CckY",
  "key8": "NoxEYp3zDcPew9em4FqANthhZ2ibUFZiL5aF6Bcvu9gQ78b4FwVznvD5drCXvTyiFwTJKET4eacSVicznkjNisf",
  "key9": "3FkFUV9boqHfEpW3XRTei11a1yeyKZQZdni2uV9fd72rBX7gfysfrHZ51q6wJGGd5rruKt9Jbp7Lwu9xxyGRkAmR",
  "key10": "3qth5AP8CBiqNqewEPu1F4wBvX3xBiQxvYbgwUmjGrHWhDaT5sLyaZibrpXNv4X4LY9Ek7K4c5Fz5rx8sWmxTLWM",
  "key11": "3Zc568PLzYTg7fWFK5viMf1fEhCWKndr3pita4qCy6iWd1kKFBZHK3vYhkfwj3XisYGWVm5Ps5i5FAC8mnuNZTXB",
  "key12": "F1Rmbh7QXfRBBxCJW6rrtfwzQBFB73dVvA5cSfSBEe184Mmrkb8Qo4Gc2rvr8z7aFhdcE5PVnLxmJZRxMM4U5pS",
  "key13": "58H7mYGGLQbojRz4bzH3RMgdCvugSbdeFWZG1UTs7UxKrTxmENZamTm3YyEg8RoYzB65bEQy4su35p2c3GfMj1m1",
  "key14": "4PhYRF4WydFs9ro7ZS2b3ar1PEKhidNbNTCXBAReWLVEacjpfv3EfLBbGYHKnuLyBrxCbCTiM8dfrrjPqdx9CnE7",
  "key15": "WmZAyWy1TLRX8ibdRTjSmB8Zbh5EWPpvzB6ZhMCLLMJ8QZ8suxqirGCz8DtWWDowUKHE8KKLTmgDdnvRXupP2Kg",
  "key16": "2zKYqb4qNwtGjg4BKbSi7GT2j52CKHBGK4NgEDEYiVJXmWDiftCB1znAfpVsPpzCPK47hCyHTQA3H6j7r2hyxDHM",
  "key17": "5HULhKQ4AKVSrENwyTQ2LcakshqDn175f2gQf1qvDZPF6t8Hf9yfeQ4kXwv2yRYS1m7YwBvQ9WXeGauvgpFaj16T",
  "key18": "3NuHg44a2jdi1NsSPAQwaCF5aVvi1NmAFukhB2myptdgf9aUprXV4Auh9TPad6r4iguokhAgDTYCxaYrZH7ad2Pc",
  "key19": "2fFKRAWXoYq5mjC4biJnd7D2M1SLjjwWj7MPsNk8GC9svEUMxNcgniBeMMewaxPZ3EvaBwrwcQ9s5BzPGhBB444B",
  "key20": "62XiDbyPTvKjxwXQtkLZPGMHx9c6EywFNTs5tepHyoZx8qLL7wv3c91MNkbyHsjA5RrCuqdMvVJ6BnWyA1SRUTcu",
  "key21": "3BjbDpCsRVoCp9arq1ttoQAKU7sa1VQNb6xuJwXwemqrgFiVGthxPhVnKbsTNwTTcnTWsH4kyyL6TafstUqxtF9D",
  "key22": "2TC3ugGVuhBxAE8m8JCSRrrY867UU7KaNvdSCU4ESrRHKVs52NEfPSxeWWVGZ6cM7WEXFmPquhLjkTSTxmcLPLyJ",
  "key23": "4FJPidN7N59asrhyutGya2b4RKtvwJ2YhUeyXh3iUZAcKyZUu2s4chnhDCEN4hjDuJAvujJriVCGoZeD3AmF9mQP",
  "key24": "ppNqyvuGWgZCSnKVsLcPYYseTHms8zoGtcRKXJSburv36dxz5j57vntJ38tZRaJKk4SU21ndVmtExYMiwVDLkcj",
  "key25": "5wqLouabGwvyMj5Xg1or8G54ZPuuAkft4QM4uvS7TriDJPJsEER2qJPNZeu2JNvYnmZF7Ufadu9BmoTkEYycf2jx",
  "key26": "22VRfUyNAXieFJsdczSQSkPYYYZAoL3kVukWZufQioErNfia1ZYytxk9SJZqHp98jbDeMkm6swV3HJDq3WebRboU",
  "key27": "4wnXyK2kUEwMp9hveMJhdaAHwXAsXNX6m2BfAhnfws1NYR8gyRPfWNbxvPr1qnCPaHy5PVc3x3KNGvQDJh72YBwb",
  "key28": "2gTBmj7X6zdwbHGoRQdyowQjJnWANQMUv3cboexxkVH2VVT3f25TrbNiCEFKSwo4TodPKj1yhGnUPzZwH5GzUYQe",
  "key29": "29425fhzmw6HZfGwULoGBq1CBbX22y18xJMB4oGvyxxeDTxxsbMK2Qm7rnBDANE98Y1GBwZmKXhDyaDTYLTeX7rc",
  "key30": "57TbVu6jzW9bmMcg26jiGGNPHmyVftSuv8utshu5iTzhcKz4oCuA8zDo9kgMgbbK2v9XC6h3UqMUj477u1JjN9hc",
  "key31": "4Zt6Ao2NAuRUgwtC3PV1wpUMv4F4kHHTRgGXE5JhHHC9M5rBYQMFbNLtGCKQm23RH8swKaGsLxecZJcL21k7eHw3",
  "key32": "37RVDb5mvineDjJ4Gd8cB5hYKrRjsUwqMYyae3LfmfPgpm5qugYLJpd6iGCYF5BsYdLUrrZ92kS2uQ2X1JCukZ2D",
  "key33": "4WN7XdfH3YbPTwWMUwcgzwtLQub48qjtKAVQ2HognVr6aKvnN9MznLTgsKXiX9J9WumV2rknBaSKYUuzwjjsqJn2",
  "key34": "djvSDXQXBoSEB4KxiUoQH7i5G6vNTh7tJnJq2xCn9Cg8gQAScGEZiAHUNfMoUH9PDZ3q9mem6UA8EaFiMcMazdB",
  "key35": "2dxwEtwDaTDeGbLrDQUo3xKfMKExnZcSCDpwBhLWCN1hXDovhnrTTjeXFcVC88D6Ka5L3s69t7R2t6MYvnjZz11c",
  "key36": "4Hk59QdFSBx7L4HYHKHKP1HEWTts9szNfEjibfb63eKxV1qcyrrALSapnNdHVKKxSyimsbiL3DBzbr5b93ZqFnai",
  "key37": "5fdmR9jQJ8uboud6wDoGjxuGW7NxaRzuybF36ongC8QEKaApoD31vZqfVkNswVi9iQQHm4ssDEcwEUFse9kMQacd",
  "key38": "5CpHpW6oCeif1kcMgJZiXbvLX7yzet9wRWQAhdHADTj4buVQZMKcJNwZEr6gRDkbu2rSkdQb73r73FxHTd7JcKeA",
  "key39": "4jcwRSqXHwKYmDQupUeyL9RyXUMUT9ZuRRPsgL8hkcepxgFA7M8MwMRmtwLGYcv7Dfswq9HFxWBqx4QzyKLnVmGZ",
  "key40": "5BDL54XsXJMKnzm6THh9cSiJoXfSRq36WDZ2K9VgVR5r3JJxEjsYBzMnpzqcSuF7AoiqLHcVHCNdQ1hzDLL6N2ZL",
  "key41": "2TBBkV2Rj2cgGKCLvxgkBLN6gUANyyxrL5hYhMt5TzvE91JM5EcFposmBrabE5KH9ALFjfgpYJ62NWoqr9zNUTqb",
  "key42": "4wZyHsY1V8UF8HYPYXCaohkauGeTDazX1TMt5FXBT1cebzYVbxgLf57K5Bcj6NVJwybk5SoJiApfE6B3NavFufwR",
  "key43": "413eCcC2vXrHfFmiPJNGaStS1rBngU9PrdJReCNgZyH8tjZaMjd9q1AZzA4yFLQaqHXHhwqFZ1vSX5nqg36PA1bJ",
  "key44": "3hkgsz46abARB932PSeP3XKivN5kujBHtqMAe5ys7q76KWiYL8XBPVHhQ2BYroferz4ruSqoDdGkRi5fayxKS3gn",
  "key45": "4SRNN9j5G96YSHXr49TmxdsAyg6Ff5n4YdqEzDuYsuV7azQ3DbTjRq21CiWP9wMKZqA8THrh85joXvangVkYo2jx",
  "key46": "2xs73ioh2AJy79sjrybrqi4GzCW46e1BH97Y4LDDD1RRgVTcCE2kTdyBEFyBMGDNqvMEdjLnB3szvsPnxfC5iJXX"
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
