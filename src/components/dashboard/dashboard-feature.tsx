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
    "5L1zQWmwJxfKT3ETgMkmf3MMBxNcttsJnCSjD7wEFekc1K42C9gngi5Y2hFQqyxLtbbLKf5RJ6FATrjeP5juqBZU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9harS94vyQyJB9TyhXV613jHF6QHMckZYqUCbqXK82SMBAfDsscKMuHpd769KefMrotix4dA8dtoYZrgVsQhKPP",
  "key1": "2HhunZNhakhP9byA3VL8emXXvaw7P3RErgXaw3PZj1sB7T43b9QnxUMzsKPtzse79eXDWysH87aDeY6G9LtRWui6",
  "key2": "3LPT1sXxJ4Un1AP7pDqccNBp5VELPjufoGD6HoKL7o9fpbr1qdAoeWSAg2KiGGWz1TmAKvqHcMwoyaJymgo7zF6k",
  "key3": "5CfQsfhomDPPLujfHnkr6wo2vgf7g53fEsYQP7jZDwP7Hth4FQRpR1m6sRqikAQ5PNdGMzfXF7DNEq4TzpYL2AQJ",
  "key4": "M1pz2Qx317nk4M7xBi9EQN9Mdog7gYRt4tRLu5Z7AdsmNj2YKiR339pYR4wNZXP11RxQYrQ1YsKRfNu15kZSckj",
  "key5": "3qJ9NYbP7WY3svCFh4EJxsqAioWzaj4j3KXzrZoskuUnevbymcumCPa4v1tH9mMZPfU7Scsrg6JpnBoCbhr4wreZ",
  "key6": "5A6jssAy7cZdH9ggcRDr3ErZYyffCRdAPheTbzUvSJWYd66f6wovs9UzL9eFut8WRfmShCdvMP1s4vJn4tQVkcDH",
  "key7": "5J8a1s4d994pcUbVVWqpLncSUVk8JmerueutVFehjAWTc7ujLhBno1mrogSvAtYM5eVvZUBTDANMknSA6q6hRH57",
  "key8": "WpJGzbYB3kQCFYXXeJCd8zNi3jqRBg8T8BfNva4fz5PsxUDPpEZ8RcBKdFTRmZwLjNjKEB8XwjuooNChNyA53rf",
  "key9": "5PwjxHFYfNTgqB8NwQEbebeVQFaDU1Awt3pexiFwrzPUejDT9QxjPk2gkswfi9qZJCnswSdYLERUQ7fRKNjV7BJN",
  "key10": "5sUZQMwhY7SPHPMXErMpaiZTQ85AWGXpR4TXwUQjGGq84S9oeNnJU7VGbX8xHyDVchy2zykuZun4mUdFXgBeFrww",
  "key11": "4QdxHegkPrqdwgqpo7ecL9QryqafN1wVfb7PJdiLPZvatsR6D5wC1Hiej1zLobHSPfpQZ6VPo9kWPzdnEdvBdQyz",
  "key12": "3M4QzrqFifywLGcrxEiyeir3jhkTvWG6QJ4kvJfMnVyUrJPAcDceHWEv1Ghznz3MVsAtuyEnBdFLcrCgwBRXRXyT",
  "key13": "49C4ZbWBDhQcU1ihHGiZMwiQQwPKKgRMXNYSVVMrnhVmn9SbG8SqBwCby9at1DpnSqR9Dy7J9ojTP73kTU9Jsy14",
  "key14": "4EVJfkVyjB24Uo6frAWqwhnmFNL8jwF7D2QFkYciMTHgRhJYpJvzycTWwc9eXGnLZTNBQAYVQcF2h2Mdq1acDPXx",
  "key15": "5esEXnQgsR5Fz3CTtx3XWRSNWKGPb1ECpigqqRxT3ihjL821e7DHsY95Bcwxtb9XCawcwXiibvfRQhXNx2XX9i37",
  "key16": "59V5FTRndj9GvMynF6LNoqdrh88CmsB5xcUSxcakDu5PqzTmgW79vC4QJ9he4vKXvYhrgV5Cz1kJV9y5D7uC8Tqh",
  "key17": "3daWwALxoEMsqxLVj8hGneuegvR8KQoRQNgKbnPuNhxj769QjEX1gsdBn3RGPZCh3gzr34FbyCmw9hdF55zJPUta",
  "key18": "5ZWjL49qb2gjP3iDKa8LPvnpSMRG4wDJBLTNvgWJPvCNWaKvK6rdUJkPapc8BCGCpycgjNjWqEMeFkbvisWTwRhE",
  "key19": "qwTyz29byLwdCqYKaLx1yENMbYg6HKKJDx4PLqzsbmYWpRYvRABY4uuLWBjWQu3Q6aMmkNPP72VL9jKP47DrAZB",
  "key20": "3pXKVkYUuw4DVepGMHkRi1tRpiHnJFdHeZhySfZTavrFyCd39UwZppBYzbAjzHQFwz9nVXgwiYE4grXN9yduBWwr",
  "key21": "3pDxfFDX9PfK5mPgbQNUSQ9ETXV29sz6Yd5v5e3isN6LR2kS7tkEHqPh4Uhz8adDqPzCNFXCe8za6m957Vxqwm7",
  "key22": "22Bx5qpUGZmgNF5Dsh5GqDPsxshGDKpufxzHfpPWi9aX6r63DFnhx8MWhPau4Ke399CfcYvZ2Vuj32FRzphFGUNJ",
  "key23": "CzKwiwvoQS9gFdvS3tDcJu73Zan6aKsFfnQ4qyy2rKX8KWKpFfXB3vcm8x8r9oqLtRjqh3oCzxjm7qdKmYTSaC6",
  "key24": "4Q9u8b53Bk5dLWUoiWMb7MH3AfpJQmUjZQrwB8kAZ9HTab6TyNrbrAU6dpVB4d7YnGPoCPA48ntsV9P8qzkfUKN7",
  "key25": "3PB2iJu9UCDtro9o1nWWPWQiaRa3tUWHprwze3Jzj3ztuC775ZvQoC6p8n7tFiWNCyHZF63oiBB7X3LH7GVA9C9L",
  "key26": "4oo8FJeizr9CxpUmrmGGH4Ys9Jg29yJcJAjAB9kP6Tr3ud9z7M5C9Pa9rvs25ZdUXDRo1qyYuNYHtAa4SDTByVVB",
  "key27": "31BdTWbVpfBM8BHFHHegoumadVHF2s5q48DaNi6U8BVdPkMqpELTFhd967SpPdR6QWGMiWqedHsqvbbFJ7BMc8aj",
  "key28": "63EzyWeTTSqR7K2dNuP62Hifax3zTEB3tKvChz7ufYo6XjTpzu958iYcXdxWnzYWrvEZD8dSG5mEU6nWbR9k4VUq",
  "key29": "3sqgmwQWCWETWAVctbqwrC97bY32p7uSsef7GGEtX2rVjHJbj2eoZRpwpagJnY5fTR96iDTjzxC8HZ1Atf1uyBcE",
  "key30": "3XjFUUg4oc32WoEWUCCZoL2x2iTqfMAP3z9PSoS2m4pH5sRXFpDU63uNX43J7fnyLAodJJXVX3fUv8k65z4wCRKd",
  "key31": "3TJXwwpNF8QStpsC9RKF6d4unrQVbPo4GowsoyQWEDoiUuLvzvLdW5eMYmpBGP4aFHsLjtRPV3B2ZR8z7T5z8yaS",
  "key32": "4hBn233jxPUkez4pqR95gyDue7YsjyrKUmkgPukwUuQRNkMw5sghYME2zeHz217cUE7ug1hT3kAdFj6detF3XKuo",
  "key33": "23pLYnimxgm732chMKmkEvSNUKna5wPb3cdCAaDj99jUy9qVt5QyawecDKkSP98TKWwxge13ze8UHajouhkwhyuL",
  "key34": "2dZXJno1EPxmUbTbQdpeJY2U3kPohSZMcX7rZNPUJE1xfCvyAeDPU9kisadfFAyaMeNEP2gYB4Cy3ZGh2Fj68A3F",
  "key35": "643NUmKhPVVSFN8ngZTQdaq1i7AWFA2kyN7un5TSiWTVgDpRf7Bkrbz9gRj99HKKHRT3TkBEnrGNoJrqMsVTwPNb",
  "key36": "5LoEbxq1kLTmLpZrpbrpUamU3HDKXwHEZJQF1PPHmsHiGfrdFw7YCt37SDc1Uoz5Ygjd4QAYLDc5ADrs2BXNt1JL",
  "key37": "5MYrqtmo2jL8VkVwgg2RYuAiJsLfQsy7vZCFPivYZYdvapJzCGsEtJtR2ixZEJdAajZgTrGw8SaVZCiGAgy2fQWG",
  "key38": "4YMRYykwcgFec9JyjK74oF4L5o1xn8wexpbMNDrRRz9oLmDJzaR5u11tKyFwp1w7NgkmbG9ApLETftzTb28eiFnZ",
  "key39": "5AwAGA4Fizv9F3Gir3Uuf25qrb6G85a2E8Diy1gpZu7A4xVYtQ7qHvMSeMek7ubVVaktLmw2knidMhs8Vv5jLz2Q",
  "key40": "5oqqkabLZZRgLsy8aWgiV3wrdKxC6BpAQRdqbwYV3HPEe9FD6kHDg7MZp7HB4WN9ZqTN6vtvjWHrmSPJ2eLgJBpm",
  "key41": "3DkHeJhPUJBdP3WwpAjfQ3ZnkFPzevCRH6sfniecd91c9dEP9sNMGMDRTrYehShPLbtRdVRcYWz68Y92qnvoS1Dt",
  "key42": "5AQtQpbhdhMjL6QDF2pLiMQWALbqLVHC1sqa25xyKQA9JLym9PMzSzDbYbXAbm7VH14TaJxdugG1xc4GmzLnxaWo",
  "key43": "5xV4KtWR9zk8vricnwxewbednVAEsYvwyXPas1BEyvBmkpjcDirJ9AimfP9X2f2GfKLNRLPUfzz4gH7GKsrG76Ly",
  "key44": "3KhD9TpPbi2Ee9KmZ8XP6EiUrPDgeVTw9KwMtqCR8e93a6BS9zetJFhtDTh8xpHStD18L97M63hiUSv3xMUt8aVf"
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
