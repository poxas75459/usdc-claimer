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
    "cVWH49k5LcL6MJJE6cZFpvygimziNm4FUCqCa1yLm2YJ79BddCvRWP343nk2VTWNsxWMa43MqiQq6b1AQUtEB8G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dz9DRWGzr6MXXZuY5XWr73ypoHipXNEwtbMwvyRkgrD6fNqgzyKjMzsHm4z88bZrMXcgrveZaWDQzXfEXSeD114",
  "key1": "3kjs5tzg1PxAjPqasEHJGZABPtdxFqsAiqKv6z3DGJhUNsiyrsJmFhg84MNQojX6KAuEXPuBQfjyp4NhUyNJwY8d",
  "key2": "CpsgNrHisw9raLcisjofJ2sdhD9pQ2a1s8JjzgiK9dGUNuEJRQf4zfViSyHZ3WoYfC2m4jnfhAM9vMQ582C12Yx",
  "key3": "39PSJotWM5ryRheYy4a4YFJhiZpRAJMiEzgUrtMLZmCrKxL5n8Go95EAG6ATY1jUVRUGNQgnDGWHSDEtJcB7mZAJ",
  "key4": "6ZAAdX8gCmrUpw6BJ5s8KahvpgqBuC6uh4mzFWuRECkYoafCCCAq9T8PkAErSWWatNhf7UbTuraWbdouvGV4F6C",
  "key5": "48wzrjN3NPN1a1qezgaAQDDiLk3cML8pe6R1LhyBe64dhu5RVc5XrPMRnT6bdXb4MmzqcxuuHAzJPGSX1WnonFFD",
  "key6": "3gbEP7jgQEb2bwUBN2dh4vShZW8oxU87Z9LhGuYLCTEyKiwphLaAdRvSRSykgiih5oMPKXRJ5oUQsuWpC5TP8WUB",
  "key7": "4CR4fJtjmX9Ho4gVpsZZAfHaZDuiVzWMh6vaE5dgygBL9FTagEh2nUyGFXvL1jMXJAc56tjoNt83H8cka7crP8eQ",
  "key8": "2wC4B2gM2TdH1dGNMQk9RsG2G9xKovniD4DZmr97ud9oiY6e1C4bp8fkCp6tGKKTC6t4VKuuY1XdGFRJ8FY1p7jm",
  "key9": "3wQkyg7CyVXd3zTX3ta88HtnvQW6Xw9DqM6PYQRxgeda6V6zuz2nyi3oxLfWHzcU9rFmMGwWNRRfth3DfkJ2D2Ys",
  "key10": "2yfPGxtpDwmMypT8BvRCrd6pMDBYoQQdosSzLYEH558LKRwVdW3SD7CZufAvpstRGan2sxJBsk3cETm3SWADax9n",
  "key11": "5faUuutv1uX4oMFPiRX1S4yNJz53udgopMY3kBojLdWmJSmnhX8KKm1SWPcBdrSURsZVRTxNGBawTYvEiJSHhHX9",
  "key12": "4jNEe252aRaaEbf8n5Z15WA1vfF3NzWmtoNhHKoqeqmsFbAg15DxQY9bgS15bcQRRSHK7o1jp84QzSGtLy7FB5ZR",
  "key13": "5ENBKrGHgMM8xXWETFwQBRqFpxdp2EqEzAuoqXGGBfEVaSuTfvvYWu5Q9dngXvjq3YWdxjENSyBoVcofUrKzpCMZ",
  "key14": "4yEhyrepy9yxYGvyVQDpP4CsenscqzcxotNawDtF7YaPCvqpHw7xxeej7G3hMxVQwqHD4LdwgQT56MSeMFiEVwEh",
  "key15": "5TnzftQPnbpba6dcUxvqRjcsPZM3bEQp4JK9Y1He6632feTvxQjLm8TvGJ4cXmkEaUDpQJcX82djR6EZExC2Wzjx",
  "key16": "CD4ofFr3k43MttYaDmNsuL6zQYWyRofTkqEjq1eCqSioT2BNK7frFJ13RSRPAd5RNSGgPswAQzVRGQjKneQrrHF",
  "key17": "fkgdYbMnSUTWbbrZZsZEjxTDje7qSesjoCVCPXuzLSpp1Nx9mz972xcZuEsqRbzRQgPpU4ar2B7YdsJUNUEdWCh",
  "key18": "3rv5HuaD7dwCWFouZdFq1apYVULPiUuDSsg4g9UqzL5a7X97rRyNzA2hhgenMwKJLFs8vELozDmcNHPnFqJ3fF2q",
  "key19": "sPnfjNs2bf4Kc1co1UUBFiRsHUntWcMT7sz7CiB53Tnb2gWBTsDFyFDi2Z2s5i5DEWAN2aPACHQPpufTEj879kB",
  "key20": "5MuU9e9JRDQG3t3XCvicpE8FZ5J5xi67rzX3EHQUM5UtryqATi42Dnm8KATkfUW5N7q2uDwS3DoiLEUasShdezGu",
  "key21": "gJB13ZuELtKp4RnSe42kunHH3pzgeCy8refzfEB7XiqLX7dYSXHVd2bnReYmtMfrFJucFqjqQXsamQFoqmW1mQE",
  "key22": "3Ni4usLgP6ZC5DyMUgo2oL9KEiWHzmc7kr7Zzmz65YRsypt1sbSLHVKJ4s4PKHSMft9SAp2N5tEZPkaY2UKCr7jo",
  "key23": "mLg1LZWAC7A1nmHUBSdmvJFBKGiGQ18LgJXRsR3MUgDcyCDWeb15dVEUWuTiNWXTuDNJE6vDNBZgnuJTj63vQG9",
  "key24": "4vQMB4EHDu1BaMxeUHZKcSaBENPtwr8TVCJ89Fy35aSCAB9oLSKhsEHZjyExyKLq7uU7LRp6NNXNFtv1mptECC4g",
  "key25": "3kerWUW7G2ydfRcxSzeVoZszrtFZhLUiHw22RZ1uqkUdtEvbuHQUGCTsNwpdX6x1wKBNn8vkMnecgcAETKp7vZrB",
  "key26": "ZiMt7KWm1w9NZuTm6SsuSUrGdtpFnJtGk6YoNMFJXLAFjrzV9ZtuzEQKg56186EBtGE7GxWDHEGWw5kPNozpaG7",
  "key27": "2gcPzS7hTNDkqBSoVG7mDgnU5NK41m2WuzNPpDQ862jzwYN96rYVUwtE6ogsXucZjKYKg6vFL4QhKpQHJg6FE1L7",
  "key28": "QPs43cNrWhivMbnwuAhGpW5nc9cQNaHyrkPdCtX4Dd7HkSPBb98dRBtE2bRPXzc2bnMWvWtbhgY4ikfec6BphQp",
  "key29": "2cKh1XBSZPTBENUCZygj2ZkpmWeXX2MB3nbskEKtAfNHd4gKHkssXMDfDWK6Q9o9zX5n52JEXpAthdomk53c2Upn",
  "key30": "3V5kPrcUoK3o8PkcRdpsEZnnqC3Z1pXMJ85kuV3jUoHkNtAZQpurvrQa8M8FEywdULEnYpMcc5mFXJfCjygA4LvE",
  "key31": "2QM3VPMKTy958d9owh8pTMkEGanY5T8Z98CeuZjmpLWzLhhrGAFBkwBjYdxsoYCiExaGScQbv19pJy8qdn6xEJeE",
  "key32": "zkZYuVDMoDCvP86e9MC6tZ45ZLMppy1Kue9ZDZZpZH5yr8Lg2j3fhH1Q4Nx2jcoT3WJFHkwRhf1kKzVLEWmpaDV",
  "key33": "3J1q4YtAPi3rz2tR9ZreBHBAvqbU1YGjq973MmTbRz5UvNxjpZ9dc1JKC1emCcgG6U8bkArBDLXzhBYJ5F1vWTM",
  "key34": "245B5rSWss6WhrJr9wTJtJbuyNxgxKgwYPjj5YD7xFURct8UfxmQjz1DhLGqGkoxjMxcRg2fugHsvb1ZSoKiAfej",
  "key35": "mZSc3rKWpcbuFD9FFkVLnjw6uxnQKT2ovjZe6Q5JqrQi4pvdgaKxjF5y9RPhuRUXaDvEsiMuGzEjBo4Zpvo7YDe",
  "key36": "3jB9KNt3HdkQkHhW3g8eaRcBCYurmvP7EvDLqg8JVELYPsq3ojUcaThbgnHKoaLntGdRdBSxtVTkZGgztqJqDYCD",
  "key37": "kMda3W1eXrQUSap5fxg46wqHYcgUgUTU9WRUZSic2n5ytjsqbpkFjhDPBexaUjKYPufHccXnkVBooUTi6S4zuUA",
  "key38": "3Y1PnRgXD8GK6pPgSivNkJmz8rHV22A2XpPKhm7Bf84Gz5Pyzhvz4KfNp5gjmLah8MoDRGq83ghmUDzZcQ2KxdFa",
  "key39": "Mvym3MyMYLXD1FCwU4G6KGUsVuhwTvDss7aSvjp2zMF28Ynhmb9ErNKUf1UtUSAes2UUVAPajkFY2BqDz6rTpTS",
  "key40": "3hL8BM1F6wnvfmY9oQsuQgHDrbwoNeydEqtQzenpysANANj4FPEKf1DvXZd788qjqFJrKjEwd1wJntf8uHAWPpTW",
  "key41": "3inHRDr6cqSao6FgA1kv2aR2PYJEpGPjUnHk6Whan9upLQYCQwC2YZSNkchTBNSD8JBAP29PdfL2vKdURQG39YyT",
  "key42": "3fZoBA58DDvVu8tR53aTQ5di6q13ThtSsH73YqpyKBvauNjHrNBy46cmKPFAG6g4rpEReRdhBz3rdSnDLsh4ibCm"
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
