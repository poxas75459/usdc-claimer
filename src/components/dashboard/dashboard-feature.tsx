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
    "4ScexeLxHxbnSrgg5aW5eTgMJbPbEER7dR9yGVTvYc7Ux6hZXibmN5j9cqxBYcqbUmuHvkKLgZGYxYddDS8kSxgj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mCiNPNWeV9sReVCML2cAQWBcP6D8YXscQPDmf2K29P6vfPVdWnbJKDLsdtKoWwFR5UEHEwHGa161daio61oiaE9",
  "key1": "3rcxE4sdN3f5mnCyJZFkXTYGV5KqrNvCcbboXEnAxxeGaAyS3qqAHYpitzscy4zAePCFW7QQKZTdHouPBfruB2im",
  "key2": "A1BSRXkGnjX22op1PiCjrGzrNEHu56t9bb5t5rferkN1C9utyvY4FHUxZ5w9MdjvSYCYCZpKBSrxASfpFQ83wMX",
  "key3": "2kZP5G1UT16vWyZ6VnWyXKjtMhFCXKkhn3qhwMdVFw9TEwX83AvCDUQQHMUi4uNtpHn3ctvqjEBBzRHw8UhmUtMB",
  "key4": "4ZcFRek77oSbGxxWmxUaqUdcBHw2mUG3KoR9Lgn1EABMKLJKE7ife1b7tQVfPukrjbt8drW3tLxExZE7apUJw7s9",
  "key5": "2k8hjQuVhwkdjxoyqH7NoigfyYGqr6srPFDJK9m3T3DHK6y5BTFjc5qmVML895oQqdYGpKwfvWmcVE17V2JpagLq",
  "key6": "59F6Lr8DFbGidwLZBkPv1Xt6pBbNJy9QCsPnBNKCe6yTsZeRGTXHYA6dWN2VgwZukqUTb2c2RTKrY6jL9uWLuQdP",
  "key7": "58Js2bmm9SrJyPxwzojxkFjFHctRQuL3MdqsvDznn82rZDNHKYNixGRBLikt74KM1Rad33Kg7FkPttdiBS9eT8ci",
  "key8": "QJdKQHmRao12rP1j981cYHnyHbNQzkGtRW3QR689oZhoNj46r31BBATjAnowawDQ8YhA4uVKEXck5Shj3uE1nVv",
  "key9": "raFTmrra6oXjUCUjSEz5jVchXjTp37KMfNN2ebJozDhQrWKmLKuqqHTg8uoghUe2eK9r2asi3GZaE55j6n9PH3Z",
  "key10": "2XGPoKK1Df6aFhs3RrPo8YeT1Rfy9kee99G2TUzvdkC3NSktZX6ENM9qn1Usu9MCEFJHEPKJqfJ1sGRG6KezSZ4P",
  "key11": "5W4jDLbDvJdCVmDAtFxAEDcdhA4vPJKKcrTuqZUu2267HaL5isSNGbFptFqeGCsB57izSRSqKPL3fgDmvYGkwAn2",
  "key12": "tUZU9v4PDzMCRDGkzCnER7rLqsYihHH1yoEuxiHiLEhP4aUB9PB7k58Q3rFPHkKQFN1ZP71dc2bzQBhMJMbeHuX",
  "key13": "3RHYk5h59Dkdh3EdGi2PqaHu1urpJqUgsBTxr6RM4ZxMbFZc1f2AiBwx7sdTKvPZfBLqLpvNBp1UjS8Y6wNGaJRG",
  "key14": "6gh9UTi3EHM1RusTDCnDAgFGAuH6MAu8ARZmNQeZb9SW5w7EzXsQUu17VZYp7pJTMbQS3JpY7G6Z2BfyFZF4ZKQ",
  "key15": "EkXvRA9u6FgYdjipTp6XaKXHbfBRwcfFKFg1BzZxC6Fh9aeFH8TAwiNANZobBhnogSxKLU7yHnJv6S6BvknNrC2",
  "key16": "3hUhvpqkvgonbTdKr8HnRmKc5qc6Le82RmhbmnEZbYVP6Dfa9rGvNtXuAqQsYXYvAk6N7E3ErJLi8LWaADhkmeuH",
  "key17": "3cu8AKppg9fCivGXHe18z5uLtCVjwC7iTswM53qhLgiwhK1NACxfq1rLeS2twUiep2LuJJ55ZsJopv68DU2y731K",
  "key18": "3uNJg9enxTrrE4tnm492XiPwUNZkzvFfiNbdHM8ADacKiQLN4hdWarkKVUvDKwHccwZScwRvWXGZJKEdyrZvEs8j",
  "key19": "5znU55647wnQTaZEXkpqGLaZmeMMPUJ7iYupWeKgSyT123TuVcyu9ktpAi6BjoN8vApxUENa8QBqsr58BLwr31y9",
  "key20": "3dSWS2ywKipZ3nb81CJuJk8qcndK5A9HVZP4voZiSWgq2VUXDnuopZVYtoHYaCTRwnymcjfHKG2JFaWUnQJdcAwt",
  "key21": "28qeT7mjqAPZ43D8xb8rQwUHzERQkTsTicCjZ41mLW2Uqp1uanX3APGD9Dzgur8Ks6u4JPdMMoTkJ81LqV6xni9r",
  "key22": "3XvaSt3wraNYiMzxZMCJrvZmPfGuxHtYWApZA5EHRATuuNYY5RdadVJWhK8PLHhZvyVw4tMBwyAmUjsii5yYnsA1",
  "key23": "4GdjMVy3wkMcv8NJaQyvvok2JBWSKRnY5wS5jwfGjPMAgerT1xnLSe34Hi3uLsLoQjHG8mkK6rsGWjpGUw1dPbwC",
  "key24": "2U7ZX3AvsWGoKqkWYyGyn37hJNRhiBuVuhodu7wMEat22prmFT5cbkNKpJpK95oJnHH7DEWygQGqrHywKghMuV7q",
  "key25": "3RxKTZm7Zhco3wBQErRe3j25sRnbhTLBjukmQT2mBGP9jFVAZKqiHDZFiESeoDk92vR1sEZGtmGz6oee913dAPRv",
  "key26": "5gUkH641o26fUGefrSTNHb4BNLfL3aW35n95VkYuxkbcUdEeFbnMeBDaz3oadA5BHuycbBQmYptC3Xc4Qx6z7Ycx",
  "key27": "uZ5YR7GpWMBurMeJBpSfMHYVUgbenon2Zswtp3NYA27zWzSeG1D2GTVXUK6VHkfhS4cRVerDvickxdxK6xaEC3y",
  "key28": "3U9Er32NCr4KZCAQ6kWYzDHHio7ocvXKQnpuB7YqyMh1zQHQ4pCtcapcYyvaNaJbi86ZwYvJMsLoexGJ2KySvwL4",
  "key29": "5bHiPQfn58ph9dXc5aHDk1kMQTZ1biF8S7FDJuZXcMo9yiYfnYc8qsBurStUJ7yciyvDTtaGvXpVxjekV7yE16U1",
  "key30": "6SRY2vFPrF4sdiNMTjoduzazzFUfkeVyaei3Q2w9g2osCRoALnwvs3MSEb1z2pvPrenFFhaDnwfpt3DouJL242x",
  "key31": "4FHH4UikS48bJC36U4B9MiAbX2HedQeeZZqmXPxkrutFgXYQUxeaxdeb1Hm9jhymDMoPLi99RKctex3F3k4CkjE1",
  "key32": "1twvbXX6E8HRTZs4XHDYcSAvUbWPxhnDYUFhVecavTekLZRS9PrzYeS3k5AsvS3XKsC47kWPqjmuN3wdA1esMpJ",
  "key33": "3twWFE8yxtm4dadekePq7Zh6Jas8aMdrWAQGKyH5672ZsYDV6UUrcqBKqbrSyGZMKkHttXPoWoQ6USJLL627gZXT",
  "key34": "4aSLuofAZHNUb4LLqXMgBbFqEfi97zccxFWKTaBdWsJyqV7kLbTuc1Bppdk61Ecv2KUfLi5Q1gTbqRFcEz55Hrt7",
  "key35": "nT5nfcpMmY4rZKFEznNxDuB1B4hJ1uQRuMTe3bngALy8iiYw5BhC9bmyzEkVi3ok4EBWcYjNyfw7qX1puPHL1jW",
  "key36": "2Kep4VpuMore1ZegdQyAQvQaYYWUoLFj4wz7kocMVeU8MkYBWQ3P6Rr1hu2tvbhdwVwseEojYaAwucdmsKpg3kNR",
  "key37": "5LhNAxfFL3SN3hq5c5RF8dETB3sZqDxYFbPLr23GYQewuwDr3MXjTW9Wj7cfXK9sm85B35SNpm978A5iCF9Q9VCB",
  "key38": "4nWRq5N7D9u3kLTaXErGjLNA5gwFmYCoAN2FHNNaQhQBrAtFE4UWb66D6TsagAW1rdE7qhQGU2Z5UxAbkVw5AGoq"
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
