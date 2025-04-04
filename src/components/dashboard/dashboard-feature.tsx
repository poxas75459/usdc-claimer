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
    "3VPjAQs4tkyoMPMhXyskiArCSPn656UEEgh9CyTQ3JKwPzJs5NH8wpVGiUo7KMXJPGp7FdAKjtPJtkje8TfzEEYU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q3c6s92V9uVWjszEYiiMyFcaLo1Csu5T1NCyKz2KTQk4cAeZTvEwtNQXwGz1wfSqw8qj6yDizYZxJY4wQ97JMDV",
  "key1": "59eWC5FXxy9Cec6rF8L5oRTCoWq1WXBmuM1cWm6kAnzqnyBGHWanLBcj5bTMeqqo5JbtEPJ2oFdEwKypBKQKZuqZ",
  "key2": "ZjLwhuzFSd7DCkstbGmJ9U1p782qXQCZg8p8rcdiojVqeVft87SmrQ5h6yPLecNyTFeg9z4mS8XzaJMMHb9A8y3",
  "key3": "2XKmbtgRs9JpvdoV28h3yu5WkY3TkDjXNms6yA93gM8yzkFWdf6fiTqzF5ei2gGfTq5kLe2UiDESQWdwNd67kp19",
  "key4": "274jWFm8wme1bteJp2Ry142prXfgo6a4wZ68DCGpj7aprkAmGyvAbrgSyXNuStbFFginv18UUmJJHgJM5kV48LYK",
  "key5": "4L9GteRz6fyBhwkuFrHJQ18VnG73ZNcaa2zp9BHBJR9T9g4Djkf7ERzQuNn5n45vEy1o6SahJh7xk77367FSnPco",
  "key6": "2LADUHs1a1inYZHP68FGpAg9xGKzeGrkG3AfaSu3JKX6yzMQGrh2vdXDrHZaWmdg57ZXuppQPpU8AL5ynHjmCXvx",
  "key7": "U1pzy6qCYkbSNYYMFsy4HmoNiX2wKjcumXCrrbeXNTpMQcBUeu9NPSyv3gbNQ5WLV6coYS7V6yWjtukimMit62p",
  "key8": "5ANNzcXyKhxVurWvUa7MacCnQtduEKxyZ9J7jTRwBWhty9RDT312DQoPEkT9FFBpRsmoqk1pAkLebDr2DdMA7DRa",
  "key9": "3P2RtauzennYBbUB7yUBtmTce3E3jRaPGvySFb5PNEnU9BjJE9krrrfw53RzwHxJ7FYTCQekSxten7t91X8DQosC",
  "key10": "3God6Qc5FME5YtXknvzdG1rYusJuPQxXCqHi23yKzQkn7BnGgzx2wjre4w9i5dPXgo6oVUySPSzkRMm4oDrGA421",
  "key11": "3pMUK3BtPZUP5Pnh8KZBgmUEBfuWzwVMhZRLbvQsPbkgzVJfN3TNctHAtxN6xzCqXcAHGPWSuuB7CtGBd3doR2Bs",
  "key12": "4vem19j8yDvsSgF9ymRqgCrTMgmxakg8Pjfh3gfDJJcUcBbPemzK5DfQ6y4dVEDGFa2hPx32g8ZY9oZmUYSKY1HB",
  "key13": "4ffZSzrG3iaYhKf6HSWXfRgknGXu6M5fQSPLdP7Qz9uUtgGa74AjzQZAv5aWYydBca9g4Sh6auzUncSZoys6haU5",
  "key14": "2ZbKK6m9WJRe4nKzocfkvnQU7UFbhDagyxjmBnc3sKx8p5XFd9GxfeQsL83xTmLnCYW9xoj2uTzG7C1XArcvKYFc",
  "key15": "5PutPhQcaricnuscd2SJhuw1fUPMEMqzgYx9XtAPrauiBzCfvKKgr6EgZpLGL8mdD4m9VoKYKphQXq5zsWiT4pX1",
  "key16": "3xAsUJXnoNQ63aByCE9kMAkCAbBmjA6TUEmXf8zCTgzcwGg2CTpPpizyNJ6JEwdKMA79ZNMkiPaTjrRfdStkKvc2",
  "key17": "4FFXja72CrReMwhnJDjgBKb3hQ1j9XTco2fMo7rqyyxJcDB8MsH7JFqZ4kGM97HxS1BqJwgYhQZ184Lo3tgW8ZZd",
  "key18": "3DhJKaCKVWNnr9ncgG6MrToQtKi7eiNWjg6Yuv55jjGWEQz7poTpd1kjhZZW4hVdkqSUrykhMCcgsuB3efqafx1z",
  "key19": "5RpxFjLPsbnXtzScRgDMrVwFTUEaekksbNbsqE3Vx5roZhjzAj2izQJ9eQ62HZe7qwFez7io8HeLKYJj81GuXcyQ",
  "key20": "5v8cHZe5nwENUgMGTm5XEvfecpjrn1JVdeBimnGdMAcSyHNR668aGnCGkCrJ32SuVqZWbBwzj2SsJ1D41YKoDtmk",
  "key21": "4Z6epWKtbTuSeCJCwjVzLc4MvYJFV94Y79xP3qh1zf2AbJAQGD7Am4FxiWiCFFDHBvWcREzqRdGyefzfpUnsDdfq",
  "key22": "3cciJC3kmjUs3b9dRzaPNAGY9u9pHDko4y7CRVpSKgrxBQ1Ar3S4rmgA3t95ecYSMuR4U2JtT6TKgqUwDSdvoM6P",
  "key23": "3oFfCqMgkEwKqyLehbrcqiSPa1dqpSLzbkiea3qGxn6U8YqfnJnNEv143Y1aQAebN1tiDM4To3wArzCFsZwdzctS",
  "key24": "9wzuPMxfWQJTySS6nqAJj2mUW1kkd94F4zR2CU8Qdc8Y9sg6tVmjBkfuGqvyg8uaYaFUr1cPAFRcx7JtYi5r2qn",
  "key25": "48gfvXyzhkC4TpuXfmGB8sdgGEYxU75DhzJWpdnjtQyaz2LEB3mH7w3aDh5pFvZGjoYDdECfVcYm1oSMaZVS8wgC",
  "key26": "4kFL2PGiFWCpyWfC27XWRw3JoFCwzUPqAHjAgEmfU9ZjaD2vN7NTWrKrP6tbdq7pEKJHCkaekZHSBCcLUhoxXv16",
  "key27": "5krKwiCFz25si3MY9hQJcMpavTUMHwHhNT2p5noc343C1WAUTz1gnwQTCjV7bT72uzDsK9hXghUjh2ijaBNrM1p2",
  "key28": "3sVFhKNfhXmVVo2dmGWGeX4K9DJFM6qrYRZst5v6QGpfNcKYdKaKHnu9TzjDj64mooetGznVZ5gccjfSHfSJNLhx",
  "key29": "3nQ6ZcaN71PqfeNgaDWMqPKwj8emfoyvAXX8C5RZtq6qrGuzEngPavPJBrxHX7gbAN2SB32eqbFxRHL4yY2rfZCA",
  "key30": "3d5kvVZR8MVK2NFtRxSUB42G2XDKMa1URqtMFnb8Sg8mHxmHeAhzqBJQBBNdaAmTeNuJagV9fhQMGzohZMZ7otMK",
  "key31": "2LygPYgyewWMGMfSGZz97xaAarPFCgiPum4oywZtSgjj1RDBKM5KJ5AAbhh9bKFfNwMGCSVJ8h8G6wsZMrDZMrFW",
  "key32": "4jbNK8g3tSbspTs8ZMBAinXkcLpr2dtMhoSKQ6kd44XTAyKRPfhPP7sEH8SJWWoaPsrxNzoyfHg2Wb7Girj5rE8V",
  "key33": "5EdPzU3SdXKBonRgdEskdbAe79GuDFViLd3XRujkUpppWi2YYhYJfrdcL8hZxXTkgzLHc6YsbrDur6VXT1MUYxTn",
  "key34": "44v6KJFFzFTpzc3pHuP2c9L4n8QLPhYhghWBC98SdJn91zN9Q2ifcDvLNMiSXPyg5bj2RyxEPJMpH4CWQSJzAsgY",
  "key35": "mhQK7iDLmzURCrRMdnt4ee9ygPHFed9zNVhWRJTiqGiifSMUCdtQMyZgPBrDe6UmsGQEpq8GpBrvjWpaLa2i5bB",
  "key36": "2nDDDHmVwv1FJorZqDLSySsGsCbTRy1iUbRdGPipX4Abx168DjJuU4666kkL247vdA1xpjVzo6vvxXa2ZTpj7NKy",
  "key37": "4ZBX8P67Gd1jxNAbQHYGrbQF54UtkpM83kgc55JRqLkGuyd8VJw6mBwsukutFVrMT3EFA9hYG2B8R64Y83Uhwdei",
  "key38": "57ds8QbYhm3jsci9c8SN4Qm4iRiqtdByvqSXpYabJnjAfcrtat5aWD8sTubA48a9m88AZhcrSPdKpjdga29Vuah7",
  "key39": "3LmaJJGPn8ce9JstX2JMPeq5KcKRzW4fjjiTxPF9bVxoLCNkTLqujbG7ctSFZVtJaU9oBCeaox2whydmEngEVwEu",
  "key40": "XrgrrVUc5w7KzYPENacdt5M5oZKvdvzoShw6EEAWQ9VBzytvZxNKk2Xcq9KYb11Y6WZ3GxPNHFnNQhMb7E3ZA4V",
  "key41": "2ZAvyBZG3kixydw6DowwcbEHC7fbxPLisPCBFosfuv8XwRnWPiPvLSJw6hMBwo8w9ZNUBR94u4fu41E71XcmjPeA",
  "key42": "5VXAnPTBRUSdhewzkFuGtqaTxZ2mBeVF6mTP2yswDH3xYzMC3XYqvJD1CakMkpNv31WgPmwm8pcETSxAL12yb4EA",
  "key43": "5QpJQk8DwYdkEp7iR1UFRAKhP8KpaVQ1nkPPnRvAwscchbvu8XJ8qnZ2kaey9mQuxupGcugou2rDAEWefVNQvZB3"
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
