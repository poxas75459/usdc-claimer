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
    "5mB7n5yqjpD39nA7zRbTphKPLTESiJ4WuHGTK33nbeKirzVGzKFt5JdoWcmcE3vyxbv2nPQTrTPQg7GuG5YiK9Tf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Nb4venrvmy6jNf6h5JW2P9PhUAuvTkDB456iLzRJtNoSG85awVdAUV3Azy7kkyUVftv1ndu3hXqk8WzDbjvJMfF",
  "key1": "4ovhhhHV2y2yoa3yymb8QJk3WyACuB23iKdWrG7cgq12upcNXKYx5zkGATNEtmNg7ajmThEsHX53z4PHih6TZDR1",
  "key2": "5rE46WXKxM9fgc5vwP3Vo7Fqydu5UNbohsntCRpRLqMDoJXURwg2WhqDSoAtBUkQYSBzvTs7X5VNgcwPDeV6DvGs",
  "key3": "5gWw2hBcT5a5Zsw1bZcM1MhMh5AURd1c9aBGVfYjuQ5gwF4H26jqSDtdoCPyDzjnykoA7xQHcRyUfzRZb5gs8ekt",
  "key4": "9938M3gFrbsEo18163dkY5ax5qQNEqAhohSoFMC1fZw8NMoaU4gXtAtRLApMdc4ofC5MPrqbWYwM5s7dGTAXAZf",
  "key5": "4SAWPS1qyHnXSb2FWNbWsn85JQdTpRUJb7CVqnyKDU7hFJGUzPCDqybCm3qZvYnA65escSXL9r2hfwGmhVykGGkE",
  "key6": "2sof7QsNgZQ21HEiV7c3o8HcUYncjtkykvysnnvpB6zNJj2asMrF5iAs4dTvsZUCEk5GRkLK33onLsQJBGEgXraD",
  "key7": "2zzf46sojPdZyycmaQZDkEZZSrF4D8znaLXbyP3qpafVeGrY8tJEprvvCgem6xnNCjFQzSA6qRPdnnBHbYqM8cqE",
  "key8": "5gZqZzBEeAzrZrkG6a1AUA9pNfGKicPohr51ZppfBrQwdpzc9Nd2sg7PjQRfZB631jf3KBkjsDuUdr5t7jDnAsTj",
  "key9": "1r7m1vrLjDMoyb1VBS1fkV3Z9p9zmCMGqAhwXdAhxFsD8gHAhSw5Wd6eQJ1VvRRx6aRToBzYWUH9TALQVvrtTXk",
  "key10": "32ixMMJXnbtGRAPDbqGiFJh62jzvo4TLKTevuNqYQUjTKAuLn9G52AoSL6DN2z99fa78WDmnmqpVsQWzvgHvahSJ",
  "key11": "2p6GMLZxfkdVLRx1P6gzJFgPEveuYph8729Rs7PRZt7HSFW5mZvdvLHngWzVsb8Qoe9hhaHd8AW8m42t1QU1PNLH",
  "key12": "JZYptt3DyVohLyjtnv8SKCZsYZ7atqZSCp6gScBd3H9zNA7EtC6k7n2sKaj68ffguZi2fywbE6YRfECAEUTCFD2",
  "key13": "4ccRgqSX2ZQr5WsWEZrwsahV8Tog3unJ3cf9h6NBFyRzTjSwRgVft6dkxVpDpQHeTHYT4BquFZ6uRtK3Abe54KmM",
  "key14": "216aV3y55QUBqPnSDWsDxpMpQcbbGwhgPQPKWyTV518MafCobcwz7Lv2tqKKZUNZNnLiN2eUESiAV3kBCeSKceoj",
  "key15": "5W1x92DfNUvZj5A5zeqyFj2nEDQsjXLhJHrANpnGifD2EAeDP6KVAwfwXLxGr5XQStf9j5YTfZHAn8w263it5kNc",
  "key16": "w86iuRvoibc1yZZVALXS7VVbvhdb8r862cdjMiCBx6zSRFWfakEo6xxR9SMzy8fZp5udzeEatqVqadTvnFYDE7t",
  "key17": "3Q5PJdcbF7sWPRxJ1rWTw5wBKVjQgZ3ZdHXdhdMUiSWs7QWTzGGpnGWiM6aZfJCmhTMHLEjAjos7c34xqf6VKWYa",
  "key18": "24FVr1AGsHkgRcoUqLbeVWzKDDwGRpgr2pyAWBKXDp7MpuBoyU6toYdnMWJRdmSiUdmZ2CFK76GxVwfS8bGJZC7i",
  "key19": "TitbmMVGzTEHhEjijgeheH4pj6hXr4ojow78CgzXamU6zbfqqnncnJMLe6NbmJVMjHLmm39aJ6bVEfFsLCfTjpt",
  "key20": "4x3xj1FHhQB4QApGKR3Ey24wUrxnk6JysXAJuAT2BoJEVXSdhLqUw1xvjBQ85HxB5VYLFafd2PFGQMLYrPmbz6YH",
  "key21": "2zKVhLhHEtXcY1SrVWvprfkPXSPE8NdRGwqb9tUirFSFAxnho2Y5V29LV2eniT47Grchpv5LAQMDK3rxiBJRNr61",
  "key22": "4HjovGqMMKUQKFHq2b8Twqy93M3wAfMW7R6PUprZYHbf9n9Rw5iGHwGhm6FwD5XK4CASNxe3rRNrx62YEQKGmXcw",
  "key23": "4XoN8ddtMfb7ccuDiX4s7eR9s1foTcSBkgPHhizo1Q6mJZaBjbKqpqYFJgjWiszCSZmJsAJXz8SQeMzebJmYXGQs",
  "key24": "371Fz1jEHQtx39Xd7fYqMGd11JqhASAewvR2aVvK3fq4PRxHdgScNSTvAs5fvh4z59TLaR2jfNiyfv9ajC4PXfvD",
  "key25": "3C9vov86fxaFcHEKSy5MDcTnWiWTBbzLLF1FivVds8MU8iSBuW7fbJwqrzS5Aa8gyrhnwLHiAXhuvkTfocokZdnr",
  "key26": "2W5KnymkSRkj5zpynbCszNtLHNy21oSgEuVd4LFFP5KAS5fTCzo3DaMMM8y2cdpZDPC6dSY2uR2kGcqHZk2e1n9t",
  "key27": "3evrTQmRH2SCbnEi9j7xtuhdLx46xifxqdn7pYLJApLeojXAoQwEqYX9cGQRPCgzYLjcAuameCDWngN5P3SrzPrb",
  "key28": "LKqBPPr7YLpvTq6QBM5X5wapgHPJwyo5K1DrvgLpe5xnufwMWG487Ztm62Bs5JqwstYii2DBJPesNeycYjnhvfW",
  "key29": "4bAvbFeMhxFv4D9fELiYaz6QMJr8qi3r4b8vxrhJxSteKyq9UxSQ94FKzjy6AJDjRGbzst26kcB8eu9zG5tmhPS",
  "key30": "26DAMRhuHDq5UxPGa1cwtY6xhNupyEUxdEtLdQVdZtuLpubWWDdAG1m2AjsnSdufEsdbJCyLcebAzBjcV5dXxxHS",
  "key31": "26AJnNituWhSZVR9GDVW9NPvpiB3yDRmoZ2yUqubGZzR8PPJAbftQ48pQjhfELDojSAhc4BCELMheJAcZNAjcMig",
  "key32": "75axJ1uUe7oVnT53LqQ19Dosw8PLQ6BNtnUdjbbV9JgfZ2zDgqFgs5JmBeLCCZWtXobjcDiJfbdkVhFYcxxZ7DX",
  "key33": "3Xbaby6K2R2iMQPq4xGjcBct5sqnR6Dv1yLnWDy98KLGpR3f9QP4L8LXtLC8ZNDbgWQdRNJk1HKsuECTDLhRQSS7",
  "key34": "3RMkPnZJHkaiVtYKsrr3vUBaAZtfJES1xbKMwTEtbrqUTqRsLR4hZNh69EDqKnbneHu2KUnTEPLrVwa2xVrnQ2zw",
  "key35": "3dZuJ62nGTmox8EBV6csN19iAt7eStRyoxv5d635vR8vdTU9kmKZ7S4xBJ1HTNKrAFRM8wdCuBt8XU7UA6iUnE3p"
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
