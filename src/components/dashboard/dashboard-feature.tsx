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
    "CVtXRMezxD4EVHpp771BvodNJWLgRLQ4YMLxcZhcLXZyJMRjQkMDHHzE3ZMLs4ZYvHCPpa1wr82j4yc8SGacr5Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PjnNPL2i9HQdDnLiWXeKdhk61GtfWyVfzsBmsUWHG6URmqk6q6xo7y4eQqScJns7nQgiqxxMxmmgWHQNcHFYxVj",
  "key1": "5yv4on7dxUqBTT4LBfg9bXz17iiG3R4ZyM46GJ2W6npWkoyPxMULD9iNtTpKWqW4jpyUx6cqtV38UC1aJa8riAfG",
  "key2": "46Qj4Gmy46obeQzwVypwWTGqA6BWkxJKZPXhV46ZYwYXDfj8z8q6rwiAhmeMymxDLJfSJdJhVc8pw5yMEQmSctLT",
  "key3": "tDkpC9MB5FUBPYjjeHY3gcAKzj6mcE5NVF5QmJ9KXGLak8XwNJaz3UAJX7JZCiW9NEjbPdSthRdYqoCSqreQbUd",
  "key4": "5tD5TrFsRSLnitpznvB2vYoDDAoZxT8oxHB9eT3W9Snf46eLS41Pgep9CrwK55eezf3DMpqLjQPodJLh12fuLYWe",
  "key5": "9j8T3UazevmzffkThj62XH4FCLoM5fHERJGa64yBnGMR4oRHCrPBFubngKESCMsMhfZSTW8NVrpCgKrpHTZ8BS4",
  "key6": "2ghvSr4UEx77gd71tPCALzxpK8xrp7nkcJ5n9y9DcpZ3HTiUg2QMq28fP7fPMUTWDFn3S2bpo24VEzR96NXHe6X",
  "key7": "2KXNgNVV9cMP8CBCWY89VEcFZdA9MYtMbKGYLhY4nBFjsfV5WEqR8RmA72xQxuUvJVwbUmuGLzi2HYa6UD1kAyPH",
  "key8": "5CG3jeFd6M1QEzLkAsWkdUSR4cK6UmnffC9rqznmz7RDpveccYdDDUrkNsKcdz6fYWXHBNhPh8Zj8WcAK8C4kixj",
  "key9": "3j6YySYyuMAXChjmdbbpxot9LMFXmBLMdDbTNXGxeZhFKcS6AbHEKU2V1hhh48RuqXzEbcc3siDN5vWABVheueA1",
  "key10": "5gaDGWCb4q7NEA93dNcXtu3SQgfCQQkrEzcJEvHbfT8uM8Pqr5TRKg5xQ1z5wUr3xb67pUsnpNwwbDbwfzBV6PSc",
  "key11": "4RDfPCfmncFRwGGjAXzTLcoeb69SEnoCKrbnnzo6GDq9onr2asAX3CpxT7fyQPh9as6EzKANu1q3C7sZfDi7Z3cy",
  "key12": "VYx6K2HbKXZeScPH3shHPoWuuj71biPWSJqortdqwXcuHEz2N392PatL5UKSgKmy9TciDd1CN7KzVfH7RPnPXXD",
  "key13": "5s2x5nmT8QwHxHF8cjqzonW9mXHBtJgd89oFKVJ7wf59C9UdentnYBMQwte9FtGhLXMSQSa89Kr4icMsmyW2QM6r",
  "key14": "5pi1WyAJyTD7BXtDCnBEubo1rJ7yrh6psuLnii4pNydjGMRD6U56acN4o3FMXEqdeJgdU1n5fhVVAcf6pwtpv3Ti",
  "key15": "3Hg69yUvYYjMBXApdqSuDtQTdxi5NQLXT8BD577mvzhM9k24Mm4p9RLhZCoEVoGZ7w3X6Npm3YQVu5vsueHDny7E",
  "key16": "3WgcNYnvutdMRHVXU1yWqNaWeCFGurQnBbELMCPL3PbpSaL5hM6X4Ryx7xC8XVLv8wowoaYAaDwbFGae1QkjmidK",
  "key17": "4opR1AGqyMVfGsvWWutaRQFpZqMN7He7BNecq878S3aAbyJRnuKXqDaFrJqRrynBFeWJPvRBUeHaJ5Wx6YwwpPLG",
  "key18": "4RbbCpwkJtZPAgPwqyjCra9tZmqfJwhs5PaWj7n33Rtm2rXZ5c3fWjWtWDhspRxdHZWB2dRxuEG4seDyMRYEMCba",
  "key19": "3hyq2Zgpoeb7JEQ5a8UtYYL1T3SnGnwGJgGvys57a7G3AcwGi9FGMN4YHx4ZMLf3nN7VSdTGs16jK5sE5DQqWoBe",
  "key20": "2b5MCiWq9QFBGQB8Gde9w6LZhp8wibVF7aYzJbWTTGMqhvw2eoZ5Ncrn61sZwQRtpiaHBFgdC6C2xskAFwBs8JeR",
  "key21": "554mtdvTka2qdQ3P9nzfvV8WhnKHcZPaWX2phai27UnTTHhXYDx1sFaPZYp1STzS5VEQjE8CdWmnZyERqrQrwuF1",
  "key22": "36jgy6NXqpVPVXuE9H3FSTzDYeT2e3gbmcpEcv4TboYhBbT3XV3rLKddYy866j8fP4G2faimL86FtdMsqtE7h47j",
  "key23": "5XVacH8SX8iYAK3xLvZdUHuG2mRRC9hHzJ2exGvxmEjDnAgbcNyF3juTVHYDGeDsZSZykd3uWp1KrM9nVEv9ZQa9",
  "key24": "57RJQjNpWde2nH9KLMNoXBYXdtvqB9hh2hUqn1j8wvgbPqumVjoLZ3eXGwGeUAHXbPbcdyiUAPjcbPDhaFS6cyuh",
  "key25": "3RP14seNMVJjjwGtD3NYExhRSd4sBLRaHLWFcwHBjdxjRCB1Q9tCSmWw3bXJjDQCeApdmGPm1yZHR8zy9Lrpy2Zm",
  "key26": "4wuJ3BEpYUGLbFQqW2ka7YJyYFiWkwZubhTch35x7jpnYPapBg4t9VV5MgX9q7V7vE5hEtRFBS8Z6MAUMikRYLx2",
  "key27": "4dypP3DVEdkEjgmPxHvCj4o6M6HCmERoRaytq9Y8rURJRcvjp6c5xoysALktvYETYrwEYY4fEKYntBveDP7xWbx3",
  "key28": "3MzhrrUwZbmZtpQgRA9SNxVEcj3RmofowEh2K14Tk7sp2Z4zBRZUiRA6T3D4UaY9TK7fkYPfg8sixXpw8ZRGLuem",
  "key29": "2pWYFi8pC5CJGQsXo2mdk4BnMj65XYYtjpJ23yMkui9Sf4wFAoxQ8ijkxX9QCNC25LpeUhivYpeaz9HoVV6onZPS",
  "key30": "1DEnEfqGAtEdff7THkGL3sytxvkVuEvJwnRHXArTC56BsCd9Vit2wzyqY5cAhm6NCJA3e13pkyDHdRV5dosEnQs",
  "key31": "5eG82waitSw1stK8VuxhHWP7Wts8PJ8TQj5hM2qPx7FatYgYEmGedaTrWcVhbW44mJ6nSxca9U2S3hYFtdR46A1M",
  "key32": "4sEZVBAdTJoS9k955LuscFg4kZN8eBYNBRAYdYN4fSbE733LjYB3HpGNGE489WEU6EvFWxSZqiNKpWdyHLXTNu55",
  "key33": "2jQJvJVAS3CBqDdJDM2wyHBZN7BH6yy56gBBrhzhscXzHFSMdTgHEa4AAx3prp7eAguaVH3L2FtDMDJkyWbPyZxP",
  "key34": "4Jtw8AtWhPNkeyyQma8qMeVaUEvsV9gCKF83QZhKZbgvX8CX7cvYp8vw2JBuFJj3TAd9KPr6VZS8k8oRkmNh1uW8",
  "key35": "4mWtpK21vpxkQhb81tDKWHPbJFhFBJQ3F96ndsvdFmJUjn3yHugGu5RkaG68MyMtjuGoXWNPbcv8uH51AWn7KUWK"
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
