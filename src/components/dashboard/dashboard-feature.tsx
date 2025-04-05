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
    "UwouWWwvAG4A3zK1MapHpZVs61DL5529pHsYpHJ9oJRedKtbPeGiMxSeUmYGzfcyjNMCBSTi73Q7HM73fVgMspv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "321AtEmFd2q36f22hF6X6euk67FFMuri639hJ7TU7RhcVJcrjdy64HsVwNuYK8bowUBG8WpVRe7sJYuYw5QQdko1",
  "key1": "3SitkFJHnk5t5PEkruMGaFsAiEBkXkpqTYtrmkhJo8L6GoTuY6oeSAq2eyrY8dPurmk2PUJ3vmkonChjAZvuUwqA",
  "key2": "5mr7Q5Wxoq59qiFTUhGHcNx23PZgUTB5iPbHe4W5n2Rj7x2C84dRaynh92y7rqSpygyhUmamJPEcZD7xyB9DbaVu",
  "key3": "Z7BHPLSwxHJkRe8pQWxgkv6Sc9SbPmJ3yxxnQSjTmAQRcUyxagF3iPqjg4HmwmfFfMFamyDnYTRjSbKqBBYcD95",
  "key4": "2k8kQQL1iNEGkY5cVToeZM5PGFDEKTm4WoBM3eBS3Qh5eruk3V6k7H6tuKALQixcTfWjVrcNDNPP2rwtYrKbgaxZ",
  "key5": "2voY1waEQ47DR7nQHRQEJpg4vyVwDtcnVRjt9kgYXsXmupb6LzYTy8F4dpPT3viChvoJMSCivu4p8CLmTWHkcMsq",
  "key6": "4Bd2XdwnkCrTqBYWWETnMKd7jKYR6j5FiNU6PftX8ivzpwmAr76G7JaCC9RX9pmqg9j3pczHPAA23TMWQLqPRBUv",
  "key7": "iVJaLEdzR82sRvqrUb5SpwRC1wCZK1i6jDvBVdfYRqiR43NmBZrKziJL5rGfK73VJGPtawbp3jebGAdoz2HxL5g",
  "key8": "4najwv5A8Q3wPq1gwhxKndXspjUmwcSMuvKmkSR42nCj3q1kPBB54hjx7ZuhpgV88cTaEvUVKcAn1uQFKwdk4oFh",
  "key9": "5tWwaaUKsYn6uqV1hUeGDGnG4wb9uZHYXW2fqDGodnQRqA3znGto44RqGKFd3LWg3XWaqyJpHkzvx7V2QDqUVzvb",
  "key10": "3vAccAdNHvjF73dWAngXSqkyZbusn76FTHFYgSzM39DyUKnrRXf6JiKX5kjteZfKrLcic4ohGpdr6CLcHebcpcFh",
  "key11": "25JuwHdMdZ9MV3azExf8jHZtBQmEfUaR8nAu5Z8wan8v5htVTe5QtKnceT95Jey8KsQuczti5TceQ6uFLk2635u2",
  "key12": "4paqd3cTYRwAUs2uDTmokTYETXaJWmMDfczY6KoQwTJFnS1UWfM9wkH6zzwKxXjvoHR1sBr2gKqiYzfw2gMpGcss",
  "key13": "2KMdDuoaYRh2tjmshSsgUrEayZjQ4v6cfggoVpKWmLucLWVy7pdB7iJ89iBw89f9tBtMf2gco9kFJJRL2mfBDLse",
  "key14": "23V6Sy1hPmvpsgnKdHFRv9P8sC66o273rhSHjcQk34YiSVyqMty85BrM4qYihdqNz4fTfkmwPPafyv6AS8muWsGv",
  "key15": "4y73rg984taN2xAYC9FdVU6M8rLTtFu8Ufe4152wJXyxZaPZpZzGinRUPyoQhNQNtMRu8owyJuMRArEYBCX1mde4",
  "key16": "56rmons1kongpGsQ2Xk5Rg9afEAetXNyGZSF8MeRFXND4YrvbjQCEkab9SnL1GXFix1s1x2TyA6scqFeEqMtSkNn",
  "key17": "4jrL3V9CekiWpH4HnkoaNj16b3JaUfQFZcwmsWY3JxAQXQQXhpeEWgWG14A1Utd8KF98aatFVECcCDD2nCmG7qqt",
  "key18": "5XsAhBK6vVy7aPgg5NRWvspjWSUsBNdGajcciqPhtUjoEc9Wb9RVrbBb3nnrNW1KQUnnTmvap8H3KMJTKpfuphF",
  "key19": "5Mu9GhhUHsr2nkebuVafaZF3LXegDchz9s9B2CN1HDZnrtjVwZK8UQSaxfBWkBhQMb4UAzhY3cB9C9SoCfhX9etd",
  "key20": "3U5MosSMVEZb73tSghFtwoe5FzNM2SVjiqXM8MMUuee7P8wmBbsgSGFnesdV2FCey1XTowvnYDdDWEZwuzwcVfcE",
  "key21": "3o8Hq9cRPCHL8bA7yMf656g6KA5TH734NoeAdk9KQL6AAQXzDmA2ZgRcscV6bLrSjsvBsVWN3q5oG2XibaFT3Lat",
  "key22": "2ckuw7wGNW3hoByLx6nT1spy46PHEN1RtERyzzgaFDHjdKEWnnBqfS1qSjv5FGZsQjzttark7rAGQ3LYKQDSmCkP",
  "key23": "3Yrba4SF9AmkZfhX9mEKxtQDgb9deXkyornXSQaAPu5GubdxEGNgVzQfRWSHiautoqGG11YsJgEfLUPMPXmKPWCM",
  "key24": "3QqkeeUVe4QWq2wbpFdpeEts2rpnHVwMscWuHesuFX7imHZN8DXbyby5uf7JQVnUxQFQzXegzP37vWXkSfSdEjab",
  "key25": "4aAjj4PBXqDA2PkbYzUFu7AAzFQTu23h92qxWVT2JAES9r27hT39BoNQv8RueLsMjL6T3XkdfgCNMWFXW1nopmRP",
  "key26": "5RyeCadrLRhh2UDvc1aS8iKadpAH6F9mVh52bPmWjYuEv8kPXhQoAQ3QW6c3Bcde2KVhKzY9oCToYK8TFKhSwzmC",
  "key27": "26teC2B2phgMiMTrLuXaxvNwPeXt9Ge9WNV6md9QJDo3hie4rEf6xPMQCDbNKkEn4hGTeXBRRyMpMpYeFxBZHb87",
  "key28": "RpPw1KQM5zvPtZqa5RGFLES6nwe6WPRT1fQQ2oQsNWTXQ4nyzrz6YrhoqZyQKSkUJQZPCGC3JWTGngpJdmHbEND",
  "key29": "4em9vej6nqGjwa54JvgvoGy8d1HXyqqvZ8K9xZ8QvavEXjExZxCUEkyvifcjiSRE27N9XuCsjfrzMz7VBq84JVgL",
  "key30": "4N5v2Jn3AYrrDESJ7RK5RVjmaW4DeMeDDq9XrxZ8BPcjjDXgCd41UN9XVkKfpLCoHZjQv4bbTyEFNZQmxzCtrNA",
  "key31": "3zF7Mxug24RbbSHio7X8czM8FgiLdmnW5kn7M1yCapaLTerQoa7oMHo5KrM6Fr9u7XuAzmp9gCWhmg8b2Dubp3Gq",
  "key32": "4TxYLZaGjDRuEKg3GYrfQGS5UF3zKk7k4WcifkZ1nqG1Xebtvi3EVsSaagHMyNK29oiXt8a6WrRYjeaMWpMRt7Nk",
  "key33": "EouymG91QTC3rFxp4bB1zSnD84tbJfGZNnbWgi4C34BYqbf8TwJR8qq5YbRRRDXnj36wZ5LcLvSEmYWEckzfqvg",
  "key34": "3fk6qeduvwEwUnnH3Gp6HWFtbJ8JeEhCWtQn2FCpMQhtbAihJfyjCKqcojNTkKqNMWNrinjdDpDxmfmkvmVAmoQG",
  "key35": "2qwUwu61wznfeG7Wxf2EuDsFK4j9qrRmQ6RYS5DXrLcJb2DprU9EbXzkYHaMwbcn9s4p993fjA3uLz783YrYbPmS",
  "key36": "3uMfwfmdQe2eUD3t7UsrcWZxJJQwPr6TKtmZr9qgXKT8z2bGz1vVdhUgTaFbfqUGsYLHD6ZwGCx14oEQE8VqrXf5",
  "key37": "38W9REmbzNenR1BDHFSNEcGD2ycJZvGZifj2z4PRoZM8hbawubRG9rdUcJCYUy2Fk79mHdWoRaEQdN3dSpVUi6Wh",
  "key38": "5tC2ae6mCz5oYinLvE6bJ9UKk6knbEQXspB4Zbrmy93LghN6ihXkEDV1cXp62rTkQmXCyFwuheW1uYEEpqPURGst",
  "key39": "onqUbDp7rsQZXMMwuvD4UprDsihRNmB74vEFR2hgbDkudxKSPd7KN4ZP4YgJBbDHxz7gHsh5zWZx4x6oNE9Aw3H",
  "key40": "5vnQGcda9fbcpDAE3AKuGRi3G1oUVEgjL7M5s47keMF5x7RNsocb7UfbWehPm9rY4sR7mVGj2gSZFzSEZyWVjwAD",
  "key41": "66VwU1yP3wAiydXWoKgUZyHc54e6jmaFEyyp2ts6FxFi4tYMBnRQkJ84uYRrDfJMDRLMRagrWzNnQNk668VTCM3p",
  "key42": "2mzsAR8sviU4BFooUVNZpof9xggHVXHucQLPHhcoBx3mzqACPge3f21Ahf4vBR8SAJzQhaCVHkgYj9Sbhd9Jt36V"
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
