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
    "5BULP84bJMAeQ1XePctCgyH55CxTFZeMaDSeLfnRQJfiTuKDv9Csda4rq5J7zEYHwickxTakLrYituumru51HN2f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VeNykAgkaPrfYTp5NPNn3FpqTYLL36CLsvskEjpvqSCuRu2qB7orCvNnp5GXx7nrRAiGLRirCPJmNU8ogH3odeG",
  "key1": "3XS7hA9x8KwVXW51jpAqbwMYaQwtdvLw5RT57EZYXbKgV13SRFmthzMKuHsAGLGgEZnJvDE7hTzqKcT8XJqELkMm",
  "key2": "FhC8nvhJieJvKPYzC41suzK4NwZ5UxjWD77SxCVZzeDcMQMY47UVFDi9ZFwBgnjXJ8TF6cisWLqxksgoUnNa6tT",
  "key3": "5TSdxhWznSzSbpGdCJEHnz7hGW1JbTFwZpyJ4U2eQBasuCMYC7qVxGV3GE4ec3WcUNr1qHXJ8G7v2K5pi6wpdEK2",
  "key4": "4ZX89kVvcK9naEawx5Ke42cp6mdvYpZPC4iScMhvEz6cXgpEf8gsSummvnwmcyM8uSpv6W31cceSCn79vXdYKUfQ",
  "key5": "51r7HWaadvuCTL2NEc1K75j9aSKCoVxQtDQh6bVacZuzpVyRBUX4DV6zgnBh26JmUFRQngwbddjT4nxpLJ7iUJm5",
  "key6": "4FuN92Ka3xFK5gfjTsrVyhNTTBJp2SykS7omaWsu17hu7zMmQs9pmFqAJopNnCLZgZCTQ8yo5JDMXSPZyG37RrGs",
  "key7": "512q6aMuLd53pfKEtMMCQAfLotbeAWDbiD2E5y2qBytEJw5hrYG4MELAMYC71teC3zAFBXZiWM1aS5Hprz8t2PBA",
  "key8": "3DiE9N3FiVgvrTrEYEQAQgzd9HjGXV6qrWqFH9ZNYQHsWUaQKEKzTArv1sKkFZKSDAgvJ421d8bJAXN3UKU6zbMx",
  "key9": "26YWHjDzRUFrvAmjFu6H1qQzBF1a2U4X2BGuQ1g7oPW8iy25t8Rw1oi3eAcTAX29FqvY8h86pafimojxNcjkr97d",
  "key10": "t4xmBbSriYdVDWR4F2CVNbVxKJawY6DePz9t7arYCTYE2PKomtbsE6TniNRkpL4fNGY68edSh4ZPqowrN69AxvR",
  "key11": "bYYXggTAM8RLiQ5iTz4MT3uKnYUo6kWoZup4RwqL2pz9AiAcqgJQ8BGxefC6N9kE7oWt52isdMXJWj8jpQbd599",
  "key12": "4iJPVeowEG7GeQBi8D6EoBER9ydc4W1u9gHwVfsLFzNRX79Y6eMmdCfvMRWruDqWQNPpKKFoxJAyTxX9PVugiCeo",
  "key13": "5MkxDpdtw8JSacAxbUSHatLiZEbfzURSxr6D6DLC96Sx8qEZL5MCc7pV9f2FVMXx6JhsdZgKUUUALq7PVSMgbv8J",
  "key14": "5DiTYuv8oifiNdAnMZ1zVqPdu3NMiWYmff3ytnVhVws9m44poysKG3hrZyj1CRwjx4uoqgEge3F1WzFnTFTWtQt9",
  "key15": "2LZaYiaJettTju3BFK6C5xivpQTCBCuv77v4hc1mzuXPAwFQUU3DPRvtnKpHHLw3DETaenDSy7PD72mKAHJCLcwc",
  "key16": "2g2XR3RPGR3vTUqCMfmE4NMhGvtEXLBSbD4qk47Toq6LrVBhqenzThTs6wsTvyi18MQsSmVi1UQHz76rhyxay5aH",
  "key17": "2ipBibpRv8M86q8YTf8nymP4Zhn8THEpCGDxFsedmcsJBdw6ki5hrp9cXCX8Jp7ov6sB5Nu4TrBdhGkT595qM3Hh",
  "key18": "2CgZDgXwd8v93E8zmBbZc13Ap6HivZYDY2CxFWmwkN6QtzcpN8h5hEfrmac6ytsYkC4LWAHHfFoq3MbS6jtuQAV6",
  "key19": "dW1HFYniUSojniKxGmtjJsMW4o4zUED6T7gGRThzmPREEzcLyRN8ZfnSksoenydE83HXmVYgD6tfqpTZtsqcdFS",
  "key20": "3XgT2VB4pyK8giM7afftkRR2BsZJeHFurgjXMxUszeTc2QdtupqXdSLiQEGzg641hxjVjoZ56X76Xq7CBp7Fg2zU",
  "key21": "2XFNUsn1wroAreAXBVCAcFujRjh7778TZxRUKct6nmHKetHMQmFBMRLVRu7JPG67s4ieBEdGEXved418UXkWjSEG",
  "key22": "HF34fA8EEdQmxKd7y6aocw6rD6vuASWiQ7zjvjx95oUFrxiNhxPy8vdEfTaSZzcoFZBNmsH4MHy5VQQnPN4fe8t",
  "key23": "2tDBmppJXx3YgvsFtZnLE6RvcY8TvPtyjAWP3GzhWpQji5mLSwEDnAyhmwtaveJy6TjB8D3RK1sYuZYEqx2zpmGC",
  "key24": "2fKjV95DV8MR8tczadLQm3DoN5jwco8FYnum2x38ZrcWxPZGSHUqRnkxBPgeT6ygyqSQeyBt4sSyFnZExo1cAHSS",
  "key25": "2otNcR2AvTeezsUbgikboNo2XRW4MbZ4RQyzTzUpKgybJp3xYJiLa1z6v2Hj7v5ZRKBcgcfgbMzrT5KyEZRvYteX",
  "key26": "5zmr4iU56nWn7BUPepbhEy7135xFN2QUQ1U4gp6eWqkGEJAV8sG4WUNRJ3up6nxCTKKseG2Rw5tebmnXtjkNJb6t",
  "key27": "2DvqripmRVnE4Q5v46onTKQ9m4AL72LPy6jWNaRtitaWfj7byqz3TMLsb3JcJsE7NiCync58JbancE47F2e49FRz",
  "key28": "4q4hvCVvcW9BRgnWkHoprSGwGyFAFWJpvPbbxsY4vYAXwVkNnWbY7wge3ov9mAY7F2w8ZrrFEEyZp9ZJLKTZibwM",
  "key29": "xpiptiuHFJ347ug7rCekYnaEzqfow2W7YyHGNNtEzMg7GjoNiMQoryu4X3AcgHsT9kzAGDxruXTqcAdkbeeZViF",
  "key30": "4Q5SrJa4LKWmMPtH1ZtcBirLDYoLKXCfL9jgru8gDjX2X52P47AAE98o2pEiGUt5q8edQkdKrMMMdSp8Eg5TyqJg",
  "key31": "2CzTaWKZmR8P47CjuzrhiZpXDCQqYeW3j6VucjyDVnYSjAD8vRYLSWPQo2wYEmecZpy4QJGkBN1ev1Wosjkz9T8p",
  "key32": "3R2jcB1owRmjFsJLcmr6cKXSCPPRvUBUyqj5hC5eBv85Ab9cfen8waq4uX8dkRRorojEuFGoDQNhcKzqbtfZ7wCz",
  "key33": "6rm9GZquxdPgDhdXqckUZCuELyKZhnYooTpqeGkvZbhWxqc6ZCXAhSGNxLkqDQgG6oUZzPyzYDKmJxqgCvGZd2V",
  "key34": "3UHfAwZHmscD6VhmzgkcrQcY6qgY3Vo23y6voeFJBdMALeSUSX8aFirosbKvAu52wetjEWxXNPzunaJiWafUFPMz",
  "key35": "28R9V2U52seKuJNGoHysy944QeqyuahG84ZRDeDcRMkjEkn2K2bKt2y4wzyEeTqBgoBfdPXmhdTutG3pu6XBWvN2",
  "key36": "35y8GZWJvtuQzVyv7vHrCdCT722WUXaAFTubQMBxgjhmXfAtAs1wwbFfugzX5d3XNfuegpfNiUsGYRPxWfAYoPdJ",
  "key37": "44ApSSkkbptburHcSmKZuJPG9XbtFDvFTgqFevcjxUWkf1XApBZSSz9SynEmC4GctSbqwEMKKBfTrjJb3UZqNXib",
  "key38": "Xw8qKEY28v1Z9zqwcE9RnJM2ajEygnp69rf3zR8ohkTCu3PfLzjbnaT7EE7MENLRa3oBTK2mp2qgBCHLfCVd1bG",
  "key39": "2fNU5aBCRdMRWEMpgeGRWLVhL4T2cBZ8tuUyrZHbQV91wWuzdeS3EBkaZuuHqi6tRLffPcHs9p5Hs9HqCQtWjSqV",
  "key40": "2G26h9qkPuthEjmVVDZ2NGunPjTxx28fVZaE7jhu9BwUUStWPvG12V34Y3YMHoTnK5o3HQyQQ3ke9pGb8pi7FioM",
  "key41": "31pYaYp65yz9V1phStrF966ftqLKTGPYLwLovknZpJxMdG3rUxhQFFJ14Mdur2WEnqAwX5wgCecVV6DsVvkeFGco",
  "key42": "ySCbVpSap3aCFUn2uXrQCzU7nTc3mFVMAy1h5SXQHKEHBFU3RziijmaeMgwCinKx3VnpGhRbTWfPwhPG61dHhKF",
  "key43": "3Azjv69534zgj8gXCTesL3Kjc1JY59Y3ca2HvMdwkcdeYZkwZyvQyMPdhZCEUqMK7LzZHx1byqGRjZs1oi4LpaYm",
  "key44": "4mA2MxcufvyWPoHBnLKXAB761SeBwuupwxitswbCXGwnM6K4HcGd8cRbZ1dhYd1nVgUCoEoBGqVo9h4RF74pVC6n",
  "key45": "LGvHy9NY7oQ8jd4UiyKXkkiSFBUShrBvsF2DUqka6WgFpiGy3bpSVLu2Gn2yhu4EQ9GEQFZvNxN1FcKRbT4dcbo",
  "key46": "wGGSRviPUYFMLYZHB1LMiGV87NaEyF1DM35npoxcLKoFCzYcFQpGpYLoLmz69g4m36FHUg8bmankQ6fyUEhcYBx"
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
