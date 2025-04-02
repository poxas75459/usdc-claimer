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
    "4PojMLhHwG3nk71QuSaswfa1Q9bp7AY3mAW6SMMmEUqZTPPntWw2nJLgAmzDUtLmF2JnGw73mNmRaPALdFuHgj4e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GzPCuYxvPA9gY1HqK7ErxQfMnPVbHDwYuQuKK49MBsWDT4mpVdxuUnhJeDPaP1hh79rne5mAW9ZLg4f7ty4x4Cv",
  "key1": "T4qJZPwjuvhuQCZm2w94ffBYzmGBcFZ1H7o2F1C1NyxEfECsecWKgPhdwfwU837L4JyC72zR8MkMEQCvzks8s3G",
  "key2": "33RGBniceBihZnA9k4pi7F61voVvagJPcAcgAAg4umRKSe4vqxmr5xAK1K654ouw7BYsWpzWtgRpLDDmZryqdYDG",
  "key3": "5AxSpibT8h4aezQ7B4KidMxQZtovoRQo9if2VnjAnjHfYACzKEyfauatag2Yu6sf7XCx99hQJEJ8ZMjtST8TakWa",
  "key4": "5rJk3NUtftCLWeVfiz9BZsZpuYxxHu2R9c6D8ywo5PoHhDRip9fKb2vUsH6wauamnKYrciEFoZtKhSZqWoS31zji",
  "key5": "25drzQwd8W26sxRqeb3VEn9RTxPM2cAacB2okumyiCuuDsQM3RcgFGPfbk8qcZwdvJGVzXqnzHV6SPvzKoBByYaS",
  "key6": "3csw36buw9sdsqiDhvoQ95chQuV9bYN1yHFmQeW1n3gU2HC1wSrH9gPJS3Bw8dGPiovQSHW1kwQfzaR8VRx3vrC6",
  "key7": "64jYXmQdRbvbiYvyxy4cKJW88aJCCKq5iE7yv2cnrNkbbJzQAVTFxCwG1dcj4qxm5ERiCvZbo8u6PA72J43NdAvJ",
  "key8": "Z7QphexyovrUMaG3t8BYokKeBxUBjUhsvpKCriZmy43Vh8ypVDw9fd7t5DMrjQ1dNKouQ1XjjxHveRwSQpR1tD7",
  "key9": "5h8kwCYHCfzPjK3c1KwggVM6osNE4FiBNtzuJSTuCLnmhoqUQtS5kCboaXSCeRkk8iPsbvHXk7V6TpnVxnNssuzK",
  "key10": "4ZTHm9etUUouSBsayiNtgeRaAwXyNYFkeGznA8Ansq6QrU1NEc7VTaKFSmUkHw6mE9WfCwvVW7B1MgQ1V5gQF9AG",
  "key11": "5yhXVtAsz3UVxwsBiLvyYfi8dt9iHiPvH8KKiEw5QXb9xe67Ss2GqyU2MkWbHNxBti8AbBeCzzt1fiRDkiKJWpwx",
  "key12": "5m5qDCHsuZ3S2fGV9v3HNrTYvpTv9GLbsNqLMLD7AqstwfkZTTFXcNVLfNkahz6kqZ6epRa7ef7fvd99fjXF8gM9",
  "key13": "3NAkp3vfLoSso55hfHiAQXR6GCVAsKrdBBW8cxhyXi4fiP4xkZ6AbJwhhUPynLezPdUFFKtvz73RxAEyG5Kjk5b6",
  "key14": "64hp1zysN8mmecLTVX38k4BGUnxqwuL118bthKGyokRdCxAqnDiaEXrRfGmm344iufpY3xZeeyCRQhdDYYC5uCYF",
  "key15": "BKGLuaEHep3bWTqiDmEu9qKXf4BRMk6BA8mAJ1eaSutF5b21PZ5RAkMk8htW6ZVrgzffyVvdfr8k3VxZrubaJjx",
  "key16": "2P5ThH8TqV4KwQrUpRSm6GTHVHPy9NNpHffZCFusFc5Gd8UyY7J7PwcBPJ7qL5FP4cymcSnqKiKe9ZJ2DLSpMM6E",
  "key17": "SZ2uer9w6eSJQUhvmT73soMEqFxuJmT5wueukoR8rm3ZtvNRNVqimGUK9XoxEYXBjLheNiKBCfFSTF8jN7zRxq1",
  "key18": "4HJaBCuNU9KS47EXMVnvT1qXomdH7HY37cpAdyzwDcYEHocNeFs9k6nymL1hisCQgV4LeXLMvhnLGxCAZ3mj7BER",
  "key19": "3smNe93ZZfHHQEBEDSUFmfFBpaymhyf7NzXokkymfzRgrWjvB3zxQsaDoZdqUNEEh6K9t2ewazNuYXVnvYpTaTdm",
  "key20": "2DYeqFPB96e2zt3HZ3CXhNJvPhYRFM4gTeJush6LLB8dZ7NLebAQJXoWLLkYJsVb8kgpV2xiMKhZtf2C3NjsKtRr",
  "key21": "2FdVEk2HT33HtQKcTDGCsWvduYpGNYp6z7TSNgB6gk1YAJEnxba6puRR6dKaAsuiwAAAmKnZHXh4uXMHTWHLNGga",
  "key22": "SXAwnTWRxFg57rgkuV2NggP7KcTxHBnUw1MHmmt4n2ZfMx5qLyTkG83ArHJkQbQYfzK74kutqweetKBphAyx113",
  "key23": "DMgZfirJZdjeypKMkfFcXQBRJ8DUz3JgaJJ1CeAtzN8t9Y7M53nW4A7gQ6X3NG8yS8Y7CBdw8eNRvCpGpemEqxn",
  "key24": "4EoSyp83yHiWEmMRz6i8PddjyzLctHsL5QMi9JWGCLDCnbXYZFvNvZNUSffySwMQkp6fqPHkDiKKfCAqSkwxukPU",
  "key25": "3PvqXrL8WvXRchgDqrFa2DHdPFLfsuXaLLqDaDwyLt1Ez8GYEcYRoXDXhVJFQVtCCPetsnk511V378hkcnqH1gST",
  "key26": "2g6MSBVWGwEhxaZspdhSPPSmy7vuTdaoJa6jyCkjzNKmR5Fw8YUDFNoz8WEBnLcb2Jzf7QBMcoACWdGoE2gQWmjb",
  "key27": "2PDGD3dtbUUdnAX15ZgBMXXrKtBNZWjSeBYNCnd9wTHfvD1J4TiVCy9WvHxdgtrWrySJ2ood1MCGhGEK5Yv6FQF8",
  "key28": "5cQH29YmveZo9v4v8NZhn3jd9esTnTt5c9mXQ25E34PEYoJvk2M3CcbLXNWHNM6fvNYHjFhksqrjsmi6DD5PLYuv",
  "key29": "gn3dffP9pSHaNoowHx5oq9cWi1pZKDt4JVQHVEvX4LCWFfFmco3VBxGb57qXD6XDzNSasd8v7CPKw3SmYcsh5WD",
  "key30": "5ZTXoKdy1cAco7sGhCdmoHeqynqmCVZsXFFuCfNmYMUwvkVhdRFQ9MS6AjerFarsQ9AJVCZb76EkH3LBm6sZ3bNZ",
  "key31": "4u8FapRa9wJBQ4hc6fjv7SBTLUJAC4a3FEWVbZNGHqni3yEVyxziiXXsnwcuzfHboWnkf8MaBTSHdQdAPZqwdwAK",
  "key32": "4RMZGDPZbQDr2MqQZeU2UPX1nTGByBu2fFoVmfLhoeSwoKD9onjiizywTSNLyEQVkAVAcrGGAxk9KQefoG8tv93m",
  "key33": "3dzPXvfq2LXA3vp5zLimqTYFGzKS5nbcTvsouLHuTD83b232DzrAqNify3H5Hqe3Ebmkz1coFZdantZske6sdtJq",
  "key34": "Q9Z5KKT9B25VHQTsxTEumy5GeAoBZ6eVBwRBM9yVzVZYGhKtTKZseTSUBb3jbPk9RRw3RQ8gvgiH4QYmNeio3pz",
  "key35": "4n1BMkcyX1UnaiEwerqayjTQCt9vBfQgZzD9d1cXn5E68Sj39SKrVus5nFSeuD4hs39V1A3Q5XYNeNyHX1fQMHQ4",
  "key36": "244bQsayPZ6WXE9dsA2CXJLbASCa6NxNc6w4C8V9zMbM1jX8MzBsijGC2Wcf1BBZBGSbRJ2T1E7CfNgKP9jGHMa4",
  "key37": "3tkt9PeMoxhdoLmLzbMzcEemS3xGh2yABEyh3Se6jkXZzeFY2c9Ddxxx8CvTYXg1wPKMV9wHEYB2i5xZboq7wMXL",
  "key38": "3UnD7GNDFvMXa5zVWQ8tXG11PRfKGv538Q9xME2rjcRR4kzbxGtyFj3J8ntanPsYXHDMCSEH8QdV3iinKubGeWFj",
  "key39": "aVS7WNjAVWnqVepGs94QCsariziV4Kwkpt1vS4AUdm3QdoqvuSvYnX4vSDWCES1FpY8Rj5Jj8juWMsuVkkRBGXG",
  "key40": "aGjPx1Xczr9b1ka7VGUWfjpNNhYRgfm2dhvNskaKPgSczqeebSNBGkj1dFrtqvpLrJzVN44ssLQnBv1crRDV7Fy",
  "key41": "2kGp8JP956YuoWCyTgPCe7k22qLdiYossgs42U9M9GxsLRXamY7QpVuui1kK46FcSNidxWSBh4wRtL7ndxriUB97",
  "key42": "4ibaAUzEwa9so7r6HBoJ3H3Mgk9xKr2EvKAbcfNYV2DqXBTJ5PqX51hoKJxZfSXsBLtQ37L1VXxDyeR5fXALfEcr"
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
