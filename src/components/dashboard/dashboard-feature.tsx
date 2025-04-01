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
    "4d4Nd52jaRWT7rZSqqCKFk6E5gCXscF7M4LPcNB1u1e2aWYsNqhxzyMXwZsLRF74noFEzMNJtBeBzwep8k916Hp2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sikhymy7VyiDnAEnEuchkDNqe2UWPfnXRE9m1utymWHXwTgkhRskfNtZq1Guz1H3BBA8fdS9yTudsMn64TT8JeS",
  "key1": "5HoJJgXY8fAzafB7XabWtuaGntcnpJbHAQAo8gNPHyGLeTKLQyiPGSbCLy42nTDsGTLwyvrErf7SqvUxvTYENZ3x",
  "key2": "3rMpbjjDBhcEjNoqkJh2MTj54mRnXy78jojyE9FoA19od9UVtJGMcMoNAwviq2k8B8wofKa5L2zfPRY1jXodLFtS",
  "key3": "3EAZa1CHrrGhvE8broTc6ep5XUFvbK3ghAEMhJQUMwqREofnwpJjXjSBxMABsgQ1ausD7GGg3SC7Ux6AikLyHgyK",
  "key4": "4oqnZzWUyxNe9Epag5BBkEnuUmqq9hwxPM4QaYGKcc1f7fHvvAxU6AtZbmkG59T5V4vUvmJTPtw63kopsfGjuxpz",
  "key5": "kcQtftEhyyQSSx4TbZbAZC29qUHc4HUTSUCkyGVFrDTxZweqoMAjhxJVVn6yuvE6J8XAoXKrmGna1mzYq7eKcD5",
  "key6": "2QDZ5z7NFtrJ3SqULg9q2SPUredU51DADLwtdnUGL9qxVZgViT5BVZUznhuCh3ojuD9AXwa34rMkRwoWC9vVNaLL",
  "key7": "3gC8EcsxfeHiW58qJ9HZLdJk4fBYS463fozypp7GctZubouhoFibQhapWf1espkoavj1pr6vj5sD7F4oGy3s58Xe",
  "key8": "353D4DPQtV7NNX7z2hXAhwtMrkGqUYFqEVdLeP1E3tC2ydXyD7VzBh8Z4mpfq5UcrMcvejaBzGX8sMj8TDox5Jfa",
  "key9": "3AixUz6YzoegZzaPjUsd9Qsrm9XEihwLfMT5TRBpaPMZi7Az6nawmTyEfvR6J5KCa6zYExgqf2VvTUibNpUTR7vq",
  "key10": "4s3Fc9oh5MiWrnp7C58BcLKL8i4cm5LqR37HapRgw5iJ4zFKDCj8eZ4zb3DNWGGkgynLWDRY6gkXSDSh7gV4Jk4L",
  "key11": "5QD7Y6kmS42qnSKSeaMLGQJH5e2MQNNzK3r2HS9EJ119P19iNuTJFXEnp36NqvXsWATMuV5UtyXNBfXjS7zzbEYH",
  "key12": "3U1tJWSnFWEiMCb1LwnHSVKwSQpT5Lxy2YbQHBAxyG4PcNvYwPGUZPAZiVHEvjrveWFfepZYx3UG46nabZvKARpa",
  "key13": "39dyYwgK65LGU5uvrBwYu4Ktet7nNjFshTi75xHKX1yCTSvwKhed9ec9WGWSzCYSS68ckjHLGxkrKSmHvbB6TSMe",
  "key14": "yqfgi33WHDnC3DFsviSeZxYLc1s4a74YcmXfgKKRjoCXLLyduJsFrTjvbzc3CQvyQV3twx5A8QPQWYGY6bFm8de",
  "key15": "5adjveF6zP8CG1W1MWcWHeos7CeWXUc8z4cTfkeHdRr5JRF52Wbcg5FGHWqUKTK3R5JDYuACK8zqUrNJZrw4osFD",
  "key16": "5Y5v1WiFN4pcrJqeQhV4GLeCSaZ8eEXJRY34wUuTxDpfKNNw6kS188HpTm97pNuK2q7YvfZiLHToKL1tttvDenhz",
  "key17": "3TXepFR1zfe9ipTJyScMegQWX83Hw4Dkt9J2a8ovapuVHm7iBB3eJExzjbwsnb8dRVHPv7Qc2mzqC75Fzeoxh4Sx",
  "key18": "3H9E7te3a8SvKMZ4aNTEyAK5HQftf6yYAHT65jcFLdu87ec9hArZKh16d5f1mEJEXdYK9dZPD4ZSP4ybFACW2uXu",
  "key19": "2eTmVJ7ssJYRCYhhGuZr4XH2xJy54yN8zvJcCf5n7bu9b9VeJapxTdABg3PmusQQ368eV8d5AgrR4XRLReMjUbf3",
  "key20": "5kVsMZcDzVEvaG3Sacq9g9LnX9WmmwsF4bGbUCWQyN4EX1Cec5pYEREi9Ay2GDNMVyScybz5mAAP4cKG7HMNaqjR",
  "key21": "5SwqV8R11fUMY1PMM9JE7SwkVgvaxpy6z2T9oUjb4UL9qE6B6rnJ3DG4wZB6qNFzMwTNDdRD3732ruk6w3fZUEBt",
  "key22": "QWy7aTcCjjUQkNXQv29jSfstSsy3FbC9yhzqWnhYnvQuAAM8qDaLfXpSeuv9DPdKZDeQRdHTubYS1wRjED6ZXQj",
  "key23": "1LiMMM8wrokwpzFAVLm1GAgzJYc7AkVqMMVqitNjQGzyR6gj5S7PASaeYP5iJvtpCsA5kHov5XAWZjkQfD1cnek",
  "key24": "5KLDyACWd38hVTkQvpg6xVkwwBo6dnj36D5gkM7gz1JRjsRyZEfgreZQXqy55vTmnUhsdARFhxvKyVnpgJaPjw6x",
  "key25": "2zT4MuvFqFN3VkY8UxbXzjw4R1H9cJXADjFatJoWythXPmNCyTgUkbUi2iYfpfS8Ghog3ezQanDc2KA4QoJrHuHB",
  "key26": "2utDoFppoRUZiTNHqFnB48driJq1bqzkoRcu1a4u1JxFCZzCcNeAn18zvzSUi1QmMFDXDdR8L6iSj34epxHa1GDY",
  "key27": "56ef9Q1NNYbMmsHB6F9gvgs4jffxTxpLS15LsagzzmdmfGxucYnvxZohAtpZ3fMWRx2biES79BcemepuUgiuh5ok",
  "key28": "24cUGvuMcRT9B2nXoiNjHYv8dj1pzPZYeXxif9KAwTKntX5CMqJRQJ43ZeCX5t6Y2GRYNAbFspReCR3JMcDD7ou5",
  "key29": "2GF5njSgmyAANX3ND6hnRRDU9SxEFrP9uQoZLjAfSG6ZyfLpDG8vqGeYYymfKxVXoLDBqAiyD6x32NYMjr3G6D6y",
  "key30": "1ZN6ZWhRwxJHdMF4SnySNTfrFHg85YtNLjGeHNXjNGgu6fdCoRmZ4KE9KgMs2CZxncj3SUQBQLpXv5Ga3xhaGWo",
  "key31": "86aj8mnuvxERw17rHxV36cPjREDQR7rUZaJE1BWw1EanqR9yWDbZhNZBdD5CCPVL1oiNnFgGP23wSfsErhMT846",
  "key32": "46Hu5hZEyyRCZiXwFBvVJRcFgzkt8yshrQ3TWvxtssV8Bu8CMgCr1etKfWHxtAKPJLUuVk73Zz9YbDDJEC63NUDv",
  "key33": "582ZG6ekiJxMXPHQeBAbw8CM66PQTyKsRE8HBEuZc3G37RsCcQPFz6zYq9gdGjT8yEdU6oQvfTifP3G3LvsFqjeD",
  "key34": "2DaaThkBuk8M1qh3isuYWsbkqu7Gc9Dg8frQmLGad42PNr33EC9yMeeYmPYJhc9xF327rxcox8BAYZEzLqDgdQ6p",
  "key35": "4c8Wy6LPEbARj9RgSkiV2tav4UoRMwdyDgb4u4zxgS3xyfuJxyx7QQB8cK21saawWzCjWMmRpTo1o4i3Eo9joPn",
  "key36": "2bSK5Zn5z1rHWhUKCEEbfFCTWBFfZ8mfie5XtwRZFfP9o9ajsi9rYhN2jgaRdyMtwzVEP2DRxS4TW8GJPyc6Tot3",
  "key37": "5f5t74qg4AaAbwy7vfFhmugRhd7eU6t1AsWFqbSxBsNbYJ688pECKF3jQaxWfmT7G53SVAEy2s7UF4E7gLCCbBC",
  "key38": "oP67BqQsTgDmd5LhQ7d8xsYkLoSKYJhdQEDqidP9DM1k7RRgsTsCv1GeNkwHnmkP7y5fbsK5djP6oVdP9iQUoFH",
  "key39": "5if7B8wE9DYVTzACD3jU4L4JZVTXqpoAxRGn8GQSxMaRYS2TcP7uhkMjzkjXQPcnB8vZLNAJ7niL1rLVRaZwKePa",
  "key40": "4TA8HyVmBLzfRE7TjM8wjoNZQuyCmGex4uumBC68z6Y7cVLANyxtfn6qMgUC5gAxiRwiXMxXqR8oKs1c2TXWLpvP",
  "key41": "5iahCkcMxjqr7k8S5Xrthp9NdRioPC9AGWH7qr8oMvV7bYvaFjE3A4qMsr8Q1d7uqeNrd4mxAv7hgoia8SSypURV",
  "key42": "3HVTdQyKYUSiKbC43atkFRZirWpdxfBuNubE8N3xo9RtuAkqhnWW9FGJN78BTFYs777vCe5juczjkQ6ohLJCP7Pt",
  "key43": "MgPJ9aGbSNFmNN5F49gwpQoHm4nEvSXW1WxhYe4i9QZk1p9afhnn3ntUHoC3Ruf9kcHY9cS8Qh3QjCWm3tgHvAP",
  "key44": "zTZGGxBBEmRyTwiWVPpsUrVQwpJySfc5UrKdWxKaWYHut6cU8jAa6h1nacmGJW9yRTZmE2tuSLAgqQuYduscGGS",
  "key45": "YbrAeBm1L5zk7EGDa9U9Wa43KW8ubBBsCtZ165jgDuHZG2Co9fecjG1faJj6vQCPxJkTvqc75VthNPKBoYbnnFv",
  "key46": "MmEpKpZhnXdWnHJKApRVRbB2kP7FYf3SEWDDm54DW8wBJj8Kubn37AE9U53fPcuF4N9JweLhUAUPqg7PjYRAoiV",
  "key47": "5s2FvXB7NgueZTDioRLTv8NdNRZ44AQuJRDddvckQhgLFWWsbgYATcnEPpLmEJ4pHsc3gfiQPpcBHdXiPdzrESH6",
  "key48": "5fvoQWM9oGT8op3nKksXv9uoFFzsYjgENsLvK7zbe1n5zJwTBjcsfCN4rHTHJ5xGAuzZaG4asmPnMLASxpyA5zor"
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
