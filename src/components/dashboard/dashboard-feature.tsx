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
    "44bPEzub4nVL249xQWUHN9pDSiSu7vUzsso35crMZK8hD3Mx7h3e8tsZ17sJPFxijNvv97HaGWVohA7qiRDzmKTh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kktcR4GpqqGPdVjBFcPAP6ML5GpfnXCuY8B9iwZ1AfE5e5UKqacdXwh6HkvRj8hSdLrm78Q5qR9LRBKXmpoMQzS",
  "key1": "217hTCDW3EKCPQRkdgjLWRdB7drAxvjjumWUUU44guqRAC865P65nZrqFs7hcHCuXgV4ht2TVsJ2AbSshk6V4PEj",
  "key2": "3DhJXAm1GAjGMRAdugmgYCHnVSK9rE1MXu8aD81FwFpQLjDD13CLTD9Csr2NmbxWsyohYxL8tgPTcNpH9ZjPRd7T",
  "key3": "KuJaVZt2G275f6cPBj4gHyKGc5Z2YeyMnWwMmzXiZWBFSSPiS83CoyeBW92S5LQ4cpAQJEZWZK96nD3pGVsvc5h",
  "key4": "2D45WLKsBYiovFjvgSEZ3v27pT4Ld3HdHFUUq4kC6XSunCYfDygbJTRc9W3uajvFmhTcxEcbeDgGcxVf7xKbAGtg",
  "key5": "4veY6D2KvzHRK98zC4rcpRBUGn14HKm2F92squXifMWnSDzVrEhbaPuuPPFhpFjhHDVVM3WQTdcNijhqhXWaVABV",
  "key6": "5TbzzJZbFTnJGPfsHj8zV4bhJN92mJ2rv6vqRBWV1KaURC34GZ8AJM3GsgeETyUy322nMALiUKXAE3oZwZVMAaeb",
  "key7": "2EL34jtsPvTjgGvRV2WeG2TkL4qJBZCWWvN6xbj35cm1b14iB6ybAFrLc5z6Lb2oiMKWYthXmJ9TrHcmdmzXYVt7",
  "key8": "2YDowFKismVov3JoCWrh3xTAURY9QrcrXQNR8g2z1Dm4fujFiMRhpwEUVtAALfdU2nHYGnajpYV2KQHUNfdRBaoR",
  "key9": "4h242PAp6LoGqPt63YRjEVkGeozQw9HNQFV8zXAxoY4L5144DaQ72MmTGxBLb4w98hi9fof8N5kACxT9LwrfdsiK",
  "key10": "gJvXBcgWWXSbocVAEACB7kuKKiU2EyFLNQ8d7KisDXBwjkbtZxHhAGkmkvwpC1ozLUb6jXr5gFcR9nYafEPBAgS",
  "key11": "2YSnLtorwzHUgJ4nKTkPrnLQyBKJLdYeUyzm8nLi6dkxPGNuFK7pdDkfQWyveH191iPdtUuDMY2hh4JfLqwr8RPj",
  "key12": "47QSfar5PyaPVdXrMvMDKr3vpo28uVDZyNMReNsdBKB8Uvxk4M7RMwSAtpC9qENpiFJm3kG9UukF8kU1fJFeRRA",
  "key13": "3uByWf1X6ULUTMGGghLjzFyr9CbatzEsakzrt9rLmWMWJ1QRkt9k9ZpjZNAGxKXsSEn8PGok6yAuUQPwFNxuf2qy",
  "key14": "5HBpbu9vmP99mExpvAHEFxFcnaN8rZbZqGdLDYpTYoGDaoMh85Z7a8hh8Aanmy9pr2KmfLcDaVYDuqtFAZYfugf1",
  "key15": "4DHYLpQZWk9LVEnGNt6GSiJdZnJCvrTaairPvNKXogS6LPsbtpsupiezbBoYt9QtNDBWCUYQDU59YDJkjVyf6x1K",
  "key16": "3osULjbMT5fAmU7p6L9ywmjzWG8UppeguVDm6WsAi257n9HDP9xcwPGDyjXxXT2ACfSXpMRPptnpyP7qxqhmBYBL",
  "key17": "8TcihdoCM7JxH6cxWLp9gR7n7DbTUokjpGoAETEsPpeG7ALYVQAsy5yiqAXYJuXno4aagC6RDFDKKctfFs7zPmc",
  "key18": "2nwRFjqLAyQEHSbEnh7gS9yVZD8TqBRkmmuUu5CnLTg7a75KM8WQHV9EHh6N4Su497fqTcM4yWLXvLr9CHhBiUkP",
  "key19": "25Eag5FioTnV1hiQ7FvmE2ypGdPVWTi8YcALRtyj1HzpWw4yGADVyAPrvNGhNUJYy6RHh4CoS2MkTPfkvacHTjYR",
  "key20": "4xsSXFyuQbcAqQ6oxeLGUbWdfNyVQUHFDLXv95Cydq52bniCL2iHKiGvjzUr46jk7LZQo4EgBsqPPMJgkiBef4Lp",
  "key21": "5Yrun67esgwDe8BwbVXXQsCfdupkzwvvAKi5oFfpUzKqgnYKfe4n8d81pzQ7LkLN9VHF18LuDGnn3pZJWLiXFoW4",
  "key22": "2jM3edjHpEXn9hxpskdjf4cLeWBfUgGuWUEoyFgx9eVaGu2zgXJwZhHDYLYwxdCSM3qGKM3AwP2M9TgkoLKpjxYu",
  "key23": "5tiF6eWcGc6n2tBwy4xg4nxMLubi7o9HS5nVh6LbBpVi7GwV2TbyP8ipNvjVyDcxggWT71reGPFqpNSBVGK6JKAV",
  "key24": "3DHQA3oEQpf2Xd9pF9osfALHC4YXsaYDsW3E3DwoPGKDdMYfpm1DpmK7iGmGo5YejUKPx1Yi3X8pwQDgg6h9aDbB",
  "key25": "3nvzxSoLwBwYucheKiG8qxMb2ghVkpTX9GaU7QfzdcYDdDp5oC1a32KcNq2qb8VEtvNM7r6AVm8ZRh2GqfBLSnQR",
  "key26": "A5frXmYFEsDAdBEMJ18xZbN4ttJfLAgiCThjm4SRB7GCsekucEUSjBeMr98hAKiBkDuuYBtEiKNe9ub8TvDDaYW",
  "key27": "rN5xhDgppvFecRG24vRsZuG1zVjPmm1F8BANSHQ8JcfEFTC3eMNnG4ZMT4jUx14yaaNuuCmYQbN4HmFENZFmV22",
  "key28": "5k1GLJAYk16sxyZF1kCtoqjuxf8fRDoTH3BNAdiJEq9wBkQdSDTZTkJPCFYxeLACJjGJav9GfQazfiqkpPgVP8Mr",
  "key29": "5taJtWKehHHx7zYY8mk3XWFCb67ePPPorVbYMSor6sLpdrgXRMuhnCEyZKkkosYWNk4V1XBfocqLxVvjmEVWN58X",
  "key30": "4UQrnVVFMyDUDakYcTVZbNyXiQLLfu2cXkG9EZanB6ZLQKhqHSquP9buXAWUacdjNLcWWrGuJnvSnJBdnDnwHuWp",
  "key31": "4K8uxP7kSFkfwEdUsc9gpXUPxNLXFeK1Q8yLjfmUyi5KX9B2cf2quLkrH4dXjisdYZgo7Dhf85pSp3wB5mHAUC6a",
  "key32": "iP1qWkejpyGpBjPDVQnJ3QF9YTkWFyBRGvwn4ZMM7fqFQK9MGiiXZQChnpw1zDmExktnCndKBwuHx7YiXXBcwPV",
  "key33": "3vCrx4BMPnqhThMasntJVxHYBg53MMjTFUqdSu7aQGvUT9MDeHBRQmvfvzw7VNACNmc89jafuFgwfGRPusseLboE",
  "key34": "2RDrLe7QcuT8hYQh7vu9hmKABgtTz3y7iYK1kVUw6XfMLxe8Fy5vJgQFu1tbCKh9Ka9qYMMaDsLZcHqqh7y7qFcG",
  "key35": "2NdbD1zFVqHYo8NLD4U3tQPc855uD5UAU8gR6XMjmMiF5fKc8AZ7kkNcoswACJ3SnwsebeZFeyrQuJ332WxrunkM",
  "key36": "QPko5qPDgENMGa4dWAmVFmcy6axtrmkbs5DsdaEXg3CX1dJBEvoNzF6ZHThij3Pjd9iP88EvEhBXvLACAso3YuM",
  "key37": "5G2NjvhDhaH3DF7G7dStC5LJ6M1skoeZ1ndL5GUnftVLVe7L5wHw3AqqMmoGDAwCbM3YFUwKpoNZK8XoerZpgA5u",
  "key38": "rf1eauPFYKGGM7mTJkZVdw8c95AwFbbEQwmXhRiMjyeGccLidaZq5xS2uGshF8osvy3KpVQCZU69bjomEd1nETr",
  "key39": "hEY7xz6FH1Ao5mXaHaUvRjzMJw7xX4CExRrmdTFqBEm2cowKtkLDzLP9EHR2c4JZjMBSwRNKzFD8d7uj2fUMphA",
  "key40": "5bKNubvH2XAANkCFAYPa2UiabiWvrh898kNr9BmwJ6GpP23Cc4YoctcmbsGjq4DqKpgmckxJGGgsso1UBJzkbYr3",
  "key41": "5GMBuBfPwgWbFV49wFMBHMPYcYyuPQ9UoWUrwkphRWmEbY2ZC1xB4QWqfNeXTKWLroBYrdAkeiFhE3xAd5kiWvBi",
  "key42": "3h3VHJyM1ypuhYLJshr4vkhxa1FDkrCKGJ8aNBa7DnyjeSeTBTFFwRu8xoL8PyqDgziaPMajwjEhraiUEFYfPYYr",
  "key43": "4DyMajV7frXvNi4ooBvGyYeuEa7jeWzintCAnqfVKSPJqcGtuiHiy61DHz1p1RH9tEnUtcqgeBsBgDDKdydQGLXd",
  "key44": "umMxiAC5vxtcrQ6i1EveQf6bSgA1gbXLmzhzsN8SEieSSjZnNMB61im3ShasXw6SdZEjBRTDLLuDohxSydhZhBL",
  "key45": "2rdiruUA64f51FLtBXSBiPw2Diia5aXPrLh5huReb8NvScvUAmSxJ6TqeuRDK2R2yFWX1XsbR98LuQe9RBMmvKzk",
  "key46": "4Kcp1LHd5GeHLLAQtPemRQxE7wReacQsR9tUTq5CuQ1rP2M2xchYHzxRxwrPMoWkmK1VAoubBnBmFupFtocsXQuw",
  "key47": "5KkxC82D6hjaAdMPhhVX9R2CJTQYqAHWrEC1xb9PpVnhQEre3Ve9ckmqXay7bkBd5CanL7agJPu5oj8z2vKyGtfe",
  "key48": "3ggQMFjBpo3HXSFqNzgaM3raPxYM79hRDWAGS93LsUrvQyLk3zGTC1eUCY6qktRaqoKGoVDWAFmWx89N2Ry2yCDp"
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
