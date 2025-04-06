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
    "5KtJ6KoAbnNvbZFXJ1nXKXXgGY8WtMvkbyUYs6cTMTDf8y5nSJJpRyLTxtVHpvvxVst2QZ6qZ1bt5tHioDpUn8zd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36DVyDaMmTieisZFetwxX9aPWKn7u2sgafHczu2uQcdQGteD15sxJxybB9ntJTFUbnSDmAUgCabf2zdQri3UaN7h",
  "key1": "2fCGXsxMWMk9jm2nCzLy4DrNn9dAi1yhQb3DHn1BdJYcJbaAWrCm3DMLomR8gigXvW3GNdub6j3ZNrAKw7KK3Gpo",
  "key2": "5xn7AmsV5o2c6mX4HjMjSEax8yYmRd7H63KuNtBTw7eemV6k5BtogeZ6CEyuG66CF9ztHDSGSdUjnHvjjkLHgtim",
  "key3": "4rZ39hyrobgfSbLGxnEnnvpCmxDZq5wEYT95FtPwC4mD6tT5H3yEi8txos7rn9A22LL84EK5uenKiHUUZGohn44G",
  "key4": "2uaUgwTbGumGxLHorsDJAGTY9GqMTkXuwtMS48Wy4TRQt3YhXH8xxwVbnQ3wJUMjzm1USLisbed2T4pEnAhQfZ1o",
  "key5": "41jvLjZnG9QVSmT5KHuyVVhdRjdt5sm4zZ2GUY5Ws2b1DwGCGFxKpaetZK5nvoWTG6MBhoGBjEEzqFkspVhGESpo",
  "key6": "bnZn72QC8W4wxJuaHePJV8peXt864r3D6cYVFgiaNVjNL5o95urKxgAcZJPh6D2D4bZNerqsgm5ZhXeKH1fTqSr",
  "key7": "LpcxSKGDEE91c37cvzedkQ1PvrqfF4FacwGPZ3JmmHYa6gKdUMd5eLiQ2Vt4m7SDEQAJ3MBwsza5EJNmgtLtC5C",
  "key8": "43gTWrb34jyZeKfYR61ZKjAA9TW5koZMXgWUoySs3JfUy5twCXtWMkHpkUcjkXnH5QmsbZzPZs8hdWdPVpew6FM8",
  "key9": "3mX6A8UTMUraRCmiBhiDcYiED6jvKGEDdTPZ6ZAN5k94xpMcmEyyyuyhkhQhggu5bWSB2quLJNKBCjRgw6btXDD5",
  "key10": "4dLmdsEFtDwVyCVNvTuW6Cs7AqvTxgXekC4SishtXA8tB3cLuZjnuNvD4rpxNJXXQ7F6p8cExpenbw1ei2LWP3vB",
  "key11": "4WZpygjp1trfL6ygPEsCn658Y6LGyrAmCNh1T84CFH5h2ETyVLhoKH8rN41xLSMKNyvk2GTybBJAoWWjj1YrqSdP",
  "key12": "KSpGsTJgwdybHXBXf5w8UyoeedwGyEMo2wfV1spUNCjhxdXhrXj1SbFP2RQpp8Q1LaLN4R2wNhUTqBYN7YndkzA",
  "key13": "vHpayvT4ZddAi7P5w2Rmhh9AymrK6AFG6gL8g3F7pWEVstbS31BwMzyzU3QX5715JTPbK8UXZGeTk7TZJQeSM1G",
  "key14": "2qfaSWqQgKLhb7MLvJtbUdpaEqpnnqr9MJWwRrwjosGmKUQvmr8Sn3npkzbxQV9TsxarvaypSMpgLz7htTH3112d",
  "key15": "3VaKXnuRSFmVASEsf84hLsqhrj3abos6xVtn5da96EPzws3J6a77d46EgDKgxCp5ZYSWMr55sZyGhELga7biQajP",
  "key16": "2pB18YFoMaW2TtNwJpAErZW1HDVEXAyZBxpzrwUgDddaJ8oAwRPYztGc67GxYdq4NSb5vogZqA7vR3Ezm5NkADce",
  "key17": "2W5kTaHhv7w6ZAPsiSw7Wg63v6MP5ibzyuRzFB1sF6GcqVR3yKfptoZUEjdyva4tACiX7Y9PxX27vumhNBcLonPN",
  "key18": "ZgjjPG9mB8TRniBbk14MkYUGB5aM5nmWyXrJqhAUAdcStiUoj5tXnqbX2mPmMtoZmaTGs7Sq1zuWnw3izhGPzwc",
  "key19": "5DiRczNLAJ6HF9pF2G6xBZYDoT3QVLb8baCpaLRCUV2bZw9ugWZZbSmx2nR71FYncEmY4LuRXxoUubqph9P28Ze9",
  "key20": "gTnRkfm8CBC9pu6EiG79GNmYq1PqPYowi9Zu1YmtKXyWpfkUQyeLaG9XuQ65c7tdLVqhqRoKpfJL1GeQVmgWgEc",
  "key21": "2bFBS5XvLghwKUsfzGZXWubARjx3ma6xZC9Tdegx6HjR64rb5zCsHDdCzBJkhfTgLhGU2UQQhgpQa8yyN9SPPPDx",
  "key22": "4XgUg9nKeJwAp6KrrYE8skBiNyTvae4Syeb7GroWbCvgsrKbFkebhMzG8XM4wnqh6tMtQRtAA35diosToxpyeEZS",
  "key23": "27a1UwU1f93kwyjPbMEhs2qLMmYiQ9TTCNnbhx8nWPD9e4FK7m4R3tA9MUtjixzS2VBNg6BAPBYdh5TChLwZPXBz",
  "key24": "4by7JERq9PxLUtbJjjMwTpHLFUD4SGdfFnUxXNHpUxkAnB98nvSuK18XjN4pMxBac8Mv5afepUmdXZzoJbKfFdUb",
  "key25": "3izw2ic6iEFaARdEpS4X1Y7C1UnV3N1hiDakMChTi3qBd3DZijF57QCqZv2WrXKSn5Z37tEbBCfq5dpfmNg27nXV",
  "key26": "4mzw3X9WyfebhvnDgzwLGqbQkXKEDEKQHoNR8FmFehUCRQpTkSAcztWYMcxbdu2cHszJFE6WBUMDUtW3Z12e9fPo",
  "key27": "4nNp1aJkBGKUqei6WsvtL86ij31YjV2SRVNXhSQcyKXA7jgteizyaVSMYeBejo7y1p3tZLSE2Z65E8vwRmewYqeu",
  "key28": "2DbAmJ4JKDLa5CwryU9YGGTz95KQnag5zyYefpTtVUWcKCQbi1VsoELkJ3qpotP2ezGMbfP4Xpf39H4aMyxhzQ1W",
  "key29": "2XKv9mXSq97nrTHu6BdMFX2t5XvWRYrLfRZE64zcJ1gQJjFyxgDh3zoZGqbeRP3xa2672dyXCWy8uFWKXBFJaNZK",
  "key30": "3q1YYiXrK4krH9mmTbAsoQojqVhSLyptWt7BS7SrGofovdg2Z8nsexkgak8VKHohKXexXEZ2NjuKVJfzMYnAnqXd",
  "key31": "4jNGzMduLW8MdPYqW8i7XgfpoaDPAbEwc9yCNDAkan9hBNuMEnf7cA8P6NZDnT4WFh3DSEbmqDqWYGEgLev4y3SD",
  "key32": "2XTJFYmf9saYuaq468A7V6jgYguxhQcND6gnDkujTKgvHRDgqEhgAX6AepTC2UN7gb9jXMQSgCDvv4q1hYmoXFD8",
  "key33": "3JQeFBiqapGQ3JeoDcN85ktb9kjjVf8pugyoUD5fDtYzr8DxbyWSxpHBSHohXNUH2WAn6uVGaSdQHhbuhEDa8S8P",
  "key34": "4zpfGrBZJG3HpZq7dYKEuUQtbkkNU6GvCWbfwQcyFP45n8GGWYtusgFMLFjubMMMMEccTzU59Gg232f8nCZQg7Sz",
  "key35": "nqVnRv6dMGAXnMC4KBifATygU7EirCjhcTADbc9D7U2k4QZhdHDYTJZLu3qKzy7iWCP9KxuGCfwbn3nXmMMsGuL",
  "key36": "3WqPBoepb1vZ5oHsFeFvqRqwfKRVww624tfVNbuhA4KMPofbTvDNXPFxhtpp1CFd7DppcsTmNp9NLBCMiATBg8ZM",
  "key37": "2Xt5KcSUoDeHz1hJGWFCH62vV2Qn86mvNhuHBCKtqpx66FtudMSqKQr6vpSjaKQpb6edpdTipV9kFVFL2cBXAGjT",
  "key38": "Tfic4V7a1mFY1ymj1awzNMpRTgFy6JrM4CZ1JXXw99cPoFzLN8hfyDZsSokZGcxVpzVCXbmUk5qCeKvAZ7sZCKd",
  "key39": "2MR6vBixzTgk7mEexaAFMjEskVjKi4DoC97WdVpJY8kK1Qa9MkXu3pNPT8v6md17LEA9MopPwJHUCVYmYz81JcXY",
  "key40": "5Ggai5Wc4mBrYPnn8DobTzdc3Ayp2kNkNGD3TsET84bwjyV8HcqYdjaVD48NBAEhNtoQk8kkDH6172nwdMkhLos6",
  "key41": "3BjB2vmHm7YCrojv94mF7XWa8RT4hPN48ofQPGfRQytd6UYP8CCzVPVt2VysUUgd37yo8rrmFPoFGvwfejhdXXQJ",
  "key42": "2ncQZ7q5yrLZBngCV2uJE7vGgEX9s2hitvEE2CVh4zYpuR2xyijyEXdZjpgxXP7Uf5ZcypRFHDJtxK5nzKbLsrjp"
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
