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
    "4bJZ742eXwbg6GJqhGsgp55hCT4sG3odB3ViHKtomY6kUPhptqqtf7NTieHW8z4gSFR7YQHTC26MTzueAiZWEp63"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vTHz2uaySXzq8EgwwUaPZTEzBkCnuBi9ZUTY7nZmKrFszpXcPMdjD9NQQCLCDQ1cdTr9yKeCh2C8CJbzH293knm",
  "key1": "4nBwfaHz7eqVs3XrqoMD85zUbEDtM31s66zBGup6BCLYoDecn8P4j1bPTjBPL3rJRiyxgL2Ca9u1QQk1kYfnAcmY",
  "key2": "3aaqCsALV6TTQ75g6vrakTkxJp6ABDCDjJhnXzC7Nm2Jv7PVECMAea5DsGfz3aQ3NRPveWFt3HfpDz3WJW6afHXT",
  "key3": "2TXJSJsWWvkx1ArU59LxcyEjGpbkyhY6RfAGNwTeAf6DzVmm4usvjRsiaTSo5yuHHjuCtxABa6b2SWgGF5db448z",
  "key4": "5c4CXbEEwWDkgqwACkPH1gsAbxE8XzdyosT49zTEfXV5HLwyQxjbEsa1ggNBvVuP778R3z4iCzvRqcQvnn5wxVxk",
  "key5": "3bjKzeLShPUjKN9YS9HzeYX4G9f42JxNo5AEgJ6WU49xZcs1S2kBjf3sH3G5YDZM7UU1uAxCvs986FEDQUk6ehgq",
  "key6": "44dftN3vDH4PJuc5Cjhx9QmgkpWvjwXKRuzbBq9Bg9wuxvexsvFM3hq6HhyRYkFL1NXNeRMR4W4T5ivoxaEQxPqt",
  "key7": "2K8AfpXGGZgpRB8TFnEnqqzskmmMLNn7FZW4varEKZR6Npn4Jie6uv7Tbu5YZrcCtREKzfbZVW1qfv1mBbG5Ahrk",
  "key8": "2KkZKM99cqPXoFEQMDuaEhunTb7j9zYcCXVduy7LQ4EeNBfDoJQfvdXTyThvCfAzYrtLy7UXqi3zqGCpCkiaJejF",
  "key9": "49GW8Zm9h9yUdEXXmDnkogDwLJ9TL31b1NZkk9bKaEgoRL5i7P4nvXRYQfDpvjFrPTvqAgemxUxxkTyPeQNPT1vQ",
  "key10": "dB56JTRiyUfcNb8Fi6eqB3PyW4Q23hgtVHar3hE51TG3tsYgcYqUfW4avL3rvHk2fEynDw2sAD6VSkqDf9f8JPD",
  "key11": "3bsUVjWZCFucFGAT9ne3WJeuMM6LhbXrg77v2Aik31fRkZxhmF7XuNkrYkEUHLnU1y5imS6LUG85Gb4nAtNBK63i",
  "key12": "2KTr6ErbmXZnVNWakS9sWm8aj6waJtsPWga3i1j1v1yRxqvcVKkHF7zym6gLjatQzLS81PPY9RLzRw9R6C48u2VH",
  "key13": "5S3UZewLiL5gWhVnGLioEu77PynCqj1WSCibdbruWdvwySN6cDkx6zq9mmfAhnTNQHBXdojcYwcBNsF8j33dAxUe",
  "key14": "2bgNcES52hibZXpFobG2N4ohJwfD3rsfFNd7Z5ThSTc2bcHvxHBx4ej8Nt6yxRuWamaVGso3NcHcrBj6qqArp1qS",
  "key15": "59f8Bec4HzZdLvaJLDF7bHEKNqnFPyiykrbmea9yAUw4P6hPm8mZ1N8JCHWE8srKNViXWXN4WzYFki6sMoToPjzr",
  "key16": "5jemXBdte12AgYze38K4i9QBZsNFhgeMCDF7X98MpjXzhmQnbt2CCzWQG4Q1tqcRyeYZG26HaDhXznVaCchwc2qM",
  "key17": "2YywevvbPMnxr6XP9KcY7YKF3TzYA473Ur1qfgN6FCVk4gH78JuwDbWVZ3mPiiVHaSP1ZTUq6V8BoZVgqYkh9cRd",
  "key18": "kKSuRPChhyNpVCjQssVy1DKyV3kHPH6s8XcHp86GUZinH5uBnVr6kvoqbeJQfXmeho4YcG9uo9vDNpR6H6v89FC",
  "key19": "4jJH4TMyuqwBSJg24tiyJhFsbvgaUQdgH2VT5ghHuDTTqUQmSFaiSHq9YEYrFoAUEttWzc49PLQrcHvJ6wCu2MPX",
  "key20": "5foN3tszr3aAcqbCoEvnkSenjb1GoU6H6ms5f1uxC1o5xrta3kwXF5uWL9UUMGqofsoyRdEtN9BfY4naUcg2jFF4",
  "key21": "2qCnkm8GZYuy2BX39p4Kz6dCWGLiz2wpNsRoMUeWZUtCGau57j7NcVa712rR29Qi6RmM13k3N5tjbFuiQKZQKAKf",
  "key22": "5gmWmt8UZWDXbAHBSXUSaBnhGVVudn9m5cLctz3MjeUMw4QcJ4nJRXAnUPJbx3hRwwVyZgdizErw6v5otTUEXL6v",
  "key23": "2GghM7wBSGKdvQsGrh61gQp8DByeqh4J7Vw88U4QTuCrRXP4s2nUxYMwJ1Li11bH9idh45hU5xCScKgBgtJBncVA",
  "key24": "5uiS4d4RCKrXgjbaSQTWWTPGBh9CGpXeUkkMtArMeMn1ovXFLLtjhnzoyUzuNUgSnKLJiJwTBS8ehLMuMWBoKSuG",
  "key25": "2cTkh5ofXx8rCX1BuX2Kat8j7BaBDVmWika8k6Kvxca8UQG9zNdFETCgkg4z7tLPDjEPCktbEvDVHLEQLbSsytTp",
  "key26": "44TD5V5as2dkpM1NXPZJXKquv8XgqB5AuMr53fkVSSY93UHR9j7J85pU2mRoP8UvR6EjVhQJoiaZ82ndchLvQF1n",
  "key27": "5rCAjUH4xRy1oMd8c24MTK2swJ3Dx597yfLENqFiD7tw5GcguNDoQW8wJ4z6fLfDTSZY7qtzRfagcuscPn61DCtb",
  "key28": "2KNiNzZoomhYucxbXLA3Nqbz8A2quF3VjLFVwYnMCorUU8b3mvpbZwAF2AKuUiu1FqEjmYPCpcZjgggtJXfqf1mN",
  "key29": "4tuVcMsJ2ZDGtZgzZsLyNbxHn9FFTcnK2rqqJnLACuHB1MMAVVzu15w39f45L7nHYmhVQDs5obyo8pVFA9712qej",
  "key30": "4Y1SwRU29LV6WyVZfnzjbof7sT7CGNH32mZLK8QRVVyeTwnaZNCSRb554UzEtvSAQPrSxdzundRvKdtgeuymC6GN",
  "key31": "4uFeM6eTAVWiV8hjoWmUKNSK1EBhx8d66sxjt24VacPHbmwrwynvPkaV99yrmqyznLyAEk6PF4ze5A6q8Xf3gLRu",
  "key32": "4KPg2V2mk85y8KUTx7pqfzobPTorazrowxupL3dB1MML8MrM5Ltgba9oPXb8c9K3FAPohCbAGfQkQCd7hzRhkRb1",
  "key33": "wifQPgwfuR8RJCZvAT96VDszsSuXadQVK8aX7P6SxdDe3nx5uwt6tFHBMrtsZx9wCTQmiGXxzNFrtZjxXyNMshL",
  "key34": "yuN8vParYp5UTCGqKYQKPCjaKGK9WhKgnjKgBtFuEwTRUGAjtuumxYxshEmNjs9zAFf3BkE1xZShw8J367rjefL"
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
