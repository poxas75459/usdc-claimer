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
    "5TqN3HwMj8L8uCsrdEoFsCCxD58UVLpBLDZY4xgXmy4QffyYg1dagpjJ8PPx3xtshLLHotk2fujzpKqf4SJkVAbh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QJXghTKMUmQLG9Zukwcvnzxx6MTQ18m3VZUF8t2vJcZLJD3HkC92VaKbnKxKxUjQ361sZM6G1A1VQ9A4Qpvmuaq",
  "key1": "qFo5n4CD5qxefr2CMA1qgyrf8yty4WLxP5DiC6q71PsuZnKNb7tGtnW8oxd6YKZvoo4pncB1Xssrhedcn4y3Y1x",
  "key2": "CPVfcuHg4cNx8pHyc8zbjYc87fkZ71XE9mJ6HRwKxrD5ZQEMBrxQ4TUdjJGZ2FUE34DkuDVPvRLyvp1AiDJaf3U",
  "key3": "5CTy5Qs5KikiHVLMvrZNjKyCwa5vo982RXmN3tkDTsucS5sjq4KjG9VcLrRqsy7chjrZjCRhGmGUGE5et3EcqBsS",
  "key4": "4YAzC6Z4DYe8EKzrmBtqSdZDWn7HpgRCYry4jqDkxhhhN4WT1yyQ7cQ1z7598y26w73g4bfQ9YQGNbxaGsZLtgAH",
  "key5": "3N6kBZ4s72GHye9pSzxwSCn5DTdhwEex3HnuSHgwsAEwcA775RLXPQUME8Dwgo9LSRouCqhYXy6ZSys1axqvpgim",
  "key6": "4eLJdpUNWYQHEd3j7XDMugVsfRX7Vc14CBwqdBuRGgVHjZeVqp1Jzi4U9mYvUAwkPyE4P6cbQt6dujY6eN6dJSyD",
  "key7": "2iJ2Ju4Er7m2StiibvWkNKbdmvCAPqAkSzB9VExSaDLMcwkG9rKYgk7XYHyJTC3E3PrNjBEy4uBBwNZ85Tr4eNEn",
  "key8": "4ejhRtSFbSkyRVbBcRMNPKgeArmBj5omtkFwNbMKDozq86GijwMmci36cM5KLG6DZPVkqKaE8w1ctJuPUQvD8UBp",
  "key9": "3cgWKLiVsLTnphupYXnrhVSL8RaThqTFftcJSrkPSQy1v6qMpnBKYYhrkbyTWMDPpYYeworEGwcefXJPciqT7U5F",
  "key10": "3ESAcVTGaREeJu6R6kqgQRtWThuvwa6o67j5jrzvzvz5xAWRYKFysqfEJBodwN6VK2vTRAeXVHnHsMGW2jzVat8u",
  "key11": "43TqBt8uy1tN2cbDLGUaVu3duwLEutcCCB5qU1LHHBHyvTwyywbPjiwttooZZUhGPhKedb8ZV1wk8CUgU5Unyumv",
  "key12": "5ZjjBdN3mF41fx22VAn1z91giXCZCUSokzuEawMHSkbttTkJAvKfEBXAXkJhyDrovknQPhXf9Yusv4bvETpLMhKP",
  "key13": "5X9EmNao1TELoG22NtFoDUBQQWsEar2fe8EtkwX6cGwwAUsyUwPxU3jjiT4SUWdX44ak3c7fw5D5FK29VkoG5usQ",
  "key14": "2fb6qBrbis4oT1ysX6Kpasad1Rr8BEnRWaHaqn1LbHyp45SMjTQ52xTXaRodF1bU3FYVykEAtkMAHUg4sKMvgEhm",
  "key15": "2qKmLFjbEJRyXxUXhJFCQDGy7ypua1RCsV4XttPaN8JHwEA41pMBHLDz4pHdPuz1Ax9K4HdDuvyDYvN3KExRC1rQ",
  "key16": "3mawbnb9mLDekopUmR3pzJGfGibV1Lcuy4h7pJ6oQDRNWre7g4g4LBy1qq85dkSckKvhFRZLmCjK8qKdLXHaBCrj",
  "key17": "5LNuoLWLSpNfj1RrVQZjiZTtCpANtcU4fdCMbCnuR5HLDUTvm6aBRzUDnBvDSBFF2yaVuuZtEdqc9enRyVFv5NUi",
  "key18": "2h2kZb2LrCavN3kenYfMiwi5E1SyJVhXZFuyMNgngphpPmSrgFhTgLUQkeZaGBLcXQ3nHbjG1q8YcKKsTEx4WUtN",
  "key19": "2ZvU6JGP9TNhtZN5gAtqs5fz6mtvcrBQwJjycSZY2P5fC9CxRfkQuDe4v6AToWprqC37CARLFsULv2bJzPf7UF8x",
  "key20": "2M7915svywym6eeXxTQvnd8u5iNG4TEarDTCeTCaJnSGShNh6FCtQUQ2HAPJ6auTfqTuYhcTm7D77eXVQSVVCDhu",
  "key21": "4NLLTKbb3WA8AyG614heiPtPf83fg5qVNS93D4dntBBvLWh1uiBifhV4HVRtMGenjuPXengo22YS4NVXFsLi3MUz",
  "key22": "5ksfp9h7iA6YZjaYcrjBVge7TTfVCGSPHUwcydPWGfK5zJCDMdQhyP5CoHaeyojJ4Uiq9BtWTdF18ekb8xfQLTwf",
  "key23": "332XwV7CdxKM4sAqjj4qk6QeLYCrB1gR2ZHLfFYnG912qCFnA5YSU5nbKVsiRijpKrpC92HnTJUS1gjspPXmm55x",
  "key24": "4JEpj7mFvPQnhum9w2nw3ezfF4NbRBzkU9NZTuTE7oeASPnyLwGUgyqBcazmY4JQAScFAmzABJb7LtUZdob9iHga",
  "key25": "3cxvGHsGRnvYsPJokpd8NST3d9HZk8UJTPYH7BNDsP2eQ2LqP2i5V5dEW32VbsBzvcL3FYY58SCgqaWDdnyFG38V",
  "key26": "5vBsyd1GSnn2G3BbLEnWmWJ7x8xDrhKFNNHnrN9y5VzrhGZm8LLNFTe3pVfceRWxZCMw2JimrhdxTU5UpA9KZk1R",
  "key27": "HqoHfT44J54N1skKfijtENDgPnKotwE4dr9gT8KGaYEto2pnmsQHpM4JaezAPyLhhambZmfAYEGqJUzUG9ViRRB",
  "key28": "3vwreKJdzq4YYF1ZxEVddLSHsDRtZzxQCggBUXUAsTbUH7HLhEk45A3z9GvSq9EszmQzMpPeJCEz4GQEfSAvG346",
  "key29": "2YCQqb86ucvA2hz4bjHZUdKaVrQcBLk8zUP133vY4bvtsdYooxSQeQK4Rsi6CQWayXUjpduEzibXCjhqUwGCn8PT",
  "key30": "5Y75L9BJ5U9EvzFte4YYF86w4E7bvdoqeStgPzqnqtZZ1NbzYwbVmbaDhKyKJo9Fwva7cEwR3q9yKDTc27ShaBjS",
  "key31": "diTqLZ4RYj6wYQHNLTY5zAH5mfFXwS4yMX8NjuP31DFRGMzE4YwYSXRRHHYzC66CCepSJf6Wm7B7pBn7EQ6tLDC",
  "key32": "2evtipGdRnD16mb3czUKTybQnPVwzRGTnZWQmNdoYoc9QzGpM1JcBLftHDHvzkWQd7gUZ4mbTHYG2s1fMXhiyKhv",
  "key33": "4SGimwqvtY3aMSLHB382StgWR3SKucjLptp8bFYpmb4HVX1qkVoCUG9yb8KEmbxR34Fnaeu7rpCzuxRmbJAh98g1",
  "key34": "KNws7V9hNpAhJwS3WHhSCPvYcDJEhQmsy21MmPBpSRdQRPF8sDAVfzsLXxJq3J3ULaqBsVf9FMSfNTPtxnMfn7K",
  "key35": "oakQdxxgkmhztv7n4GXP3eqzVxDoTUMmGPEJS21wGa1HE7pg64SEFaCrTKz1VMnjjD7fFvzcq85HZpj6hLDPp5Y",
  "key36": "ZhKGdahs9XQBAgSUNyhZuUMvxQGtwhpu4R5kgFQpcVfCUsYJEDQtiYzY5LopEi5eVUGY6fGpbmGhPHSY4ebtq2J"
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
