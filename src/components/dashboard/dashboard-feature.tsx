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
    "44r6b4cVMZQhsXe4KT5gfZPtWGQqqquL5NrrMfMZA7RgF7uSNAPEnyyn5Z42TXChhgbmeeMy9SVFSCgtHcQeWf76"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XbENozCHKvx3tqLTkvpi8A9TAVDGKVTvFBLE34G4bBmaCAwAVz1wRkQ3gU6Zxug16mvnxv5AFoJYmjKNgHEYzh4",
  "key1": "5UDJsvDErnn3t33c5gmRvPZuonnrkEYDa8APnnuQLutJM9d6sjGzS4KsMd8EHBFCMyvXQ19Za7NSuribd7dSLKta",
  "key2": "2rorBRXhY1QH1iTdRKumTZSgPdopmwNADcmiNBfKGSKdq5r8BxBC8czV8vHdhj5c1XgG84RufdivGfBtCRdXNuUW",
  "key3": "4Jcw5M7pmri5ye9j4G25VPGEpVMfK8QbhesU3zyg1iHSeoGjULXrZUqrptPNVzHkEsi4Dynegn9JuVnxccYfQ1Q5",
  "key4": "3M92wN4Qr3JAmnJ2qAcdRdRFRuN8WERbXqZzK32HvdFfAiBrCPEi8mZNYSgbFQ7KyviR642QkrU6oDfVdzCavsGZ",
  "key5": "3W9gQaHaegTLTNscS9DG5od9Zr1xwZvJ6ndKW1gdMmB7JwocVvbGSPxoPHSEH3VS8wAVmjE8L2dvUUBYhK1D94xS",
  "key6": "2b9YCybZBN2cDuGeauaNFUGsBuV8GRPVp6yCvJsNydXtR6hdALPeS7KCDvTH9oKSkKgxj76r8CyLkSDaZqGQPkXJ",
  "key7": "2LwHDdnPr3dFjEfu6yCkc7RaoxRf9xFc5Q7yRmPoLfmJg3mALe9Y2cxqAZDJe5KTb72CU6B5y9L3HJu7j3uRebtt",
  "key8": "3bKsGWYrYGaZbk7cUKeUqK8AZuJfAoYpRssRNJD68UbdaRfRK5f7txhbTdNBfy73uPTKb84qAwg3tHJyaZTHnTwD",
  "key9": "4ifq2Ub9ychJDo7caKaNM5pgNYMWw8ib6PRmk7zSmgnzDY8QYRBoBEamsmhD23Ves8Xy6MxATgpJrvGZAuRpEK45",
  "key10": "NtbRaGLvFPnwKnVSwWEDDVdLPjuUA8XQZM3sozuoekYyoaNBC9XvfrEuQkSEsHhNc8Qhf4MttCgfRiEHaADUTix",
  "key11": "4nhsejS9wmZEr8Xz3krnEBdai6EEqoZLhgze1YD8W17MUnwFZmTm4xPqCaHJcaHG5zkjv3Q1FXwPATnqxu17GYC9",
  "key12": "2HJD4CRW5vkoAjdXUx5k1e3CpckyG4MFUSALDmjzZoq738vWQB3qsey7A9vU1xCFt183exxiyBQbUF5vxti9YV9M",
  "key13": "9G6nrDuy6aj7gR8wZqtC5uHVJ2kMH5jV7LnQSjvQBo7BoHx1prPUTypmZMuPZ5uvToJMDKbYRBHY6DgyjxZLH4y",
  "key14": "52rf3Es9PBintb5EGRn2hfPbjpp4TcBsScoeWyWH9jYooBmschTp5GpqV9Qwry4XLZuinZgRWixLbY7AZHDDETB4",
  "key15": "3bddTfF7SSvbF2ix8zQDwxPLw9FW5uVJFyQDTBSvg1xy1YQgnTvuwt8wsYVa9AGvLpCvKzwmR6RH9iVhtbS6wDci",
  "key16": "3fdxJxFVpQnHC9i94tgxXjV5RJ6RNE7jRvRs7BCBWgtqUG9awGydqeruU6AZhPNkozir5SwyzVGcM5xYSH8UhfZ2",
  "key17": "4xdkE1jLozeJjNkeNAy1mckjfLGdkuBfa7JLNQxiSrzf245egdNqahtCRmJLVPgFrY1AL9m9Sj73BioNCSxHCB2f",
  "key18": "3rqcKvkDm2BMD1XZpUmSRKi9npWBmZGLe4Ykffh6oP9et5yEVbzmvMagFeMfS6Ri3LYvtHcjcEVw8ATjGJqJicbN",
  "key19": "3DjV39Ku449hz9RGLQGvxQXk4FmZ5GMhJJuPfFVTtbt122mdfG9mfxU18Sqvo9KVwkyh3tivcYMSRR22Ee71dLLy",
  "key20": "3yhiXdmbeNWRzt7Gb5XaAXuPRsxzaquRcnrvY86WoBvfqSJpjMntzgS3WQmM63Pu7s2DYgMUzMxf5qbKin1kq8Rn",
  "key21": "5wA8SB5m6fWY8PCgezs2SAhgEB9qYsUhnXJ1RVqRiZh8YtJcUMmHjuZi4R2FyaYzsDv2soeGGRZjnbJoSV4gtLK",
  "key22": "5xUukciwwj3QyW86eJEq6rCiReqqnTCYN2jJKxxVUmoGcjFtgaUopiN7ygc8YuqWa4a4btsR6vXGDBZzU6n8FbeN",
  "key23": "nZAx4Y7z8G7gtLWZidnz7Makvk4Je9F4q2pWCejrTfzPuSsc23pr3ATpSHijLJAQZ82t9Gw4LMJYFJmewaQxaiD",
  "key24": "4UWgbGdtsDhQBhCBcqf5XxeGQniQfr43f9YdeyY53UpgbMmXRUmuGZTXrXLpoThPRixjCBQG6S4agrvXQkvGGysH",
  "key25": "3zbtHWNRDTDy2GPjXjYZBqonzn6y5h4oVpvuvKq4gTeob3W4YotHs4nheud9KgRDsd4XgpTu18yEiW6pha1UsLPn",
  "key26": "41cpWipWNDbFbi3vzvgfLTaYmTc3LNRjRnai6PxE98hEkjP35niVawBCR3i43EX11Wmo1MPNdFYgpigteHvbbZT4",
  "key27": "5cKgry4hCeP5DCbgShTVmGK2JaMtWrJSfTMY4rzzTEG3u4rv4SN7pwdaPu1P3DCKbQ7jA87A7Vj6yJWePpQtDXBT",
  "key28": "n7GJX77m8UpT33sskVMNFis9kGXZ5MXsQfW7Y8X339EPdwfJsX7dkhBQXvr2vT5JmyhznvrDjWPvmSsTEzniQxz",
  "key29": "42JbGDjuXt9YGwADdMj3M8TfKRbE2SkyQZ4fFcVBsyjFkqS6pkbihxiBkrg84DNVsEqooRJJ2okJgJt7S4dNC7wQ",
  "key30": "ty5ZPv5yMFLmUF46BRo2VCFVdrLNcqDjHTjkksz5rLev2gEqMmt8duH7hT97yueRJVbcWfg5CtKtsfYRNmR8yJC",
  "key31": "5fZYXWn9t7KNrHMZGi31Zc8kYbBabJKmZePMipMrT8EygYEbFqebwpLoNNoTYZHraEXc7enwkKZQfdueEDWqkei2",
  "key32": "4D1E9d4CzBpmqvp2wVJUD3WW7Aani3uL8FSRzT8wbLgWgewSk8d7Gy5bcbCQTCT2V7QuAEz5MgxYuqgkoMKCBQRZ",
  "key33": "4MYEfDKej17NSihAjTheRSR7Etg2Vxe3FpGPoFrhpEnaKRc2JbtVNfD1EBa2zNQ2jGo9YJ2mjuDfSF8mA846RAtn",
  "key34": "3XUmz8gxGrj4W2T4TkMDH41yvUEgB77tUda7MK8yYDRCseNnjLYvth7RfSPPUKaa8WTDczHt8xsGBnHhp13aKZbi",
  "key35": "5wqwdUDMTfqrjSv8qQZHFhgksFpPgoQNoDChpaeWat1H8q5KXVa19TyGDdvJDLXhXdApZZDUyqam6AaPCkpjqVRa",
  "key36": "a8Y7Gzdfx9qnMxeU8XbjG2M8BaDfExSX1wJZnxEs1FWRgewTtWZQZDBbHZ2nzWQx4opmCdVRP9veRuy3DqBLm4u",
  "key37": "58mKeoRPQ5rBhbmjURHvPuGfZVWFRr3pcWLbVtfo3gEkunPYRCHJLmbfQzrAFbwHimrYXY2PaUzGm3mpNxrfLzyL",
  "key38": "3SwJMUmPQWVTdRP5gSnzPoHnSDrptXWoisPw1QoMH6SBQ9k2e1e3o5ypSFWn6YusFStY7FxV4yymNZnwTGdSmTLA",
  "key39": "4YHFvzDrgk5L1DqbfJd5xE59fALqk6hfPRe8TfoJvQ8kdiMN7DoDmcKQbsVuFE8XAa7nuxV1cdi8KRMjHjt5zsQq",
  "key40": "3fXTXp3RZX2EnBvPYQxchMrwHi6Tr7C5zXTcYMJ8K9kBKP4C3rjsMR4H7UNwcmFzRMm7SnU6DkJCQ362F6XucTaK",
  "key41": "h6HvEkgk2yFHav6VeHcp7dUzhmS4hnWuS7UcV1VYpcXTsSA3rfUg82EcJL8EyaHM6ik13AD53emnzM7nQgufRyf",
  "key42": "4K58FkA3aV4uEVkkwnjxZrzy72oyVnQLTh6ch6B487uzeLHSURL8tUmEHxhJdNJfxmDd7biQDcMCVjMXUg8J69ao",
  "key43": "2EMjVEA8PSfYkjbdRHoD2AMQ5tH6xp7SmTujzX7CUsaLM5o4sWeiW1huRgpmNvHcYE463sYzF17Xo5aHZNF4vPDw",
  "key44": "2AEXkQXHNUywJea7TVwdRWYBqmyF8uDmXGhkSGR4zhhdvkG4LVskTzpYXBw4PNDhvorBS84QdAmRHbrvVuuG6mbh",
  "key45": "46cx51NYChHFjqrC38GjhxU9ERTBfLRix3E5mBTVBoDFAgSc4awWA33eCBcFa5bqr2VCG7b5HkysrS6u3NCD9TEk"
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
