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
    "4FpjK12f7TNm9QREjmPDVpJQtfHvi5oAY1sRLU78Fdbfcmrhtofyr7bFoRHbRJXaQFCFBMBUn2yhcJZS3SPvdQTg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ti7X5ARxSf7KZnKEKxfgKkHtQRqy6ECiGjpEkzctybidgW3jwBg7DDoq89uFZ9UNVGrioB65btJUn7CzQDibZaS",
  "key1": "4aXth9oFUrMNc4oumwgYTPfVWupM8bYJc9iviXHuksAAXKzFb8XEVzP9BsNU9aHGPdfByius8ePTXuRX5BX7y16f",
  "key2": "2KMg33aA7SGyj8R43dYgP5Hg4s7qz3yxN9bG6FrYRga5feKDinVA37QEhpF9BqmxWwSkgDaVxz9QTzw7u8o2MDqP",
  "key3": "4K5N7AhqMDzgQDM9NRHQCSUUE8vWJ7c38hPYYemzcPkGczRNxjhNdbU18Uh6xr1Bec6qxp99T2KHzf5qztNhwBxL",
  "key4": "W5JgnoFDkgRWKJdKb1QfHfobZ37PViwyicyMVA8Jfu9SsKMpTEuYPiJ1NTCXU4QUoq9S4QyGiQLeao5K2amhEqz",
  "key5": "3kCh1doSmoa5wjG8ZXd1YWYHwXwnrj4jnycJSZeW8XmVDJEi5bE5X67Qac32NYAnCYke2cRA6Rp8hBdPC6T9WYQT",
  "key6": "46TFwUkJsdowxcWneqnWj8e5r6BPgztk4RBAveqghQHaJ1cQAuVa48Gd7zTK2PtXf18SsD8uZNSiuFbfkGMsGoV3",
  "key7": "kVeRAkgY3nZVLoUxwykWPmvJwVzF1Hm2WhcBtiRZuWkF4y5d4wVoVaaNxSovDEpxuK3WmR2KxxjUhQHT7Akqdmq",
  "key8": "3Rt3G8SUTg28Wn4n6SQddojwyLFHvfDDukkg1exAzsbCViCBbk1gTSbTwqcz9mVAipsCSKSEbJnVfUjv2CD55iuS",
  "key9": "2jywvYD83MTmzt8pHfuYk8FbeQ6hzhpMcV9y32aDBsBRUvms4sd67GNMJBv6yjHaEETtzQ3EqcHLH2FjJmMihBVM",
  "key10": "53bUwhqZrfpmRuhTUhz1k7UP7e3eDjB2NdzRxp2itG97Mw6SweMFMJ751TE2NHYmx8DtB3FHtYdEoCRs1Q2YVfHv",
  "key11": "4QxhLUgZRVUDUt1DEq1FYTUf1UuaZsJ7nctToRPYq1zjFPyAAnFT7GiGS3iBxGSb4CBKBYa1VwJDX9YU8m3oLWcp",
  "key12": "2WRnQuRFBiGXbghB8WPY7zd1NjNaYk6G74bmZKWKv3dZq3RJhfvkBATXwqkXQjibazpetXFfH61QzVn4JTwzamB",
  "key13": "5BnMEWhar9DfZbzEPQsy2znSSt9irLzsHe1BP6tFpR3xcoiLw59EkEaLtoyupBYq19ga2U8chXjggZEvXqkrjAEE",
  "key14": "3AagZyd53ZSUToby7vZEsUuvBW9p2p4Lcf6KGZgZozwQTHmRdNd8e4qivp9nq7K4TVx23VLHyXMyq5Eh7ELiWDRS",
  "key15": "4T16d9qtfEVZjYzNney4cBMSiQhzW75ScqGL7PWmDPZBuZoyMAioDEMh959zypXUp9mWE59uEmb7CBf62XJTnKQj",
  "key16": "5fRwwb9uUNaGiwueyxVoXnqXXAwEwxBgranHXofCUPUEP4ZwQNXcGNZTBXA8n9SgkZkjszS38q2v4ZfJHUPfgpzL",
  "key17": "5eecEGS1okq73xcLjtzMtWYiiCujHidKA1NvH3XPhrdCbZxgd4z9K9PkY8jiWDpzHinJtQ3vqmPMFCjwoeGbhA1t",
  "key18": "4rkJyzhi2Vmfekjxy7z6GbYCFLpx9BHi7VYbaTmzZZR1NQb9jwLrdTy6rxFSrx7JB3kTM4myxQ6vmSBFDPnENLjR",
  "key19": "2RBEJ8Nz8vxhbfh8cTnYcYCyVooGzCxh9KvyowhDxs6pzpC6mUmZUPfd1ugevFGu8zJeiMyrp8VM3B2TMDd9z7jL",
  "key20": "5rGkGiSdPjKRA3jWd8KphZKotYGyMPLnDojxx7DdGT1pERmLajTxQ8ow7fwYYihrdQTszztmpTZ8QY5qikA7p3sF",
  "key21": "2XwmGtyWvv2FAE2VrLuniUtQyUtVVWQ2ik8mzHQSGrAMcwQtnJkHRWYLo8VDpiFjfiPBvaQ5MRwMiTSvGxnRiir5",
  "key22": "4iX4EijC5ghVLzqB9RJEaqepbbWRwRBa2eoAhMpTU8Ppi5EiTzUSyZKA8whKtZ7Dg7byk8Dw5g1QokGKyS8HLJ9F",
  "key23": "2e8rgfoodtCydYwrT3tGv4csGoZY6VJZ3HroCyJtpUHBTBqr8fuzQsrJ3F6zggaCfdCFnCDf81XUzMbjyMcAkDod",
  "key24": "icyctqYQioxHmcWLsRAQrWctHgCMDP5JLD4yjq7o9WrkHTcjd9YgUWJxw7Ke747wKNWPEGQEHAfBNTR4en981bM",
  "key25": "4Ren4QPggU8mW4eGi5Ftm1crVTb5RL3pumMfRqzT4oTzK2Rs8zdwV6w7FLcAe3cb1gKPVyWCZqSAqxJRX9xEeN3U",
  "key26": "49tUwFCHVeJ1Gyh96xKkiVwhYUKUCQhmKL5wnQSbyrA2cAeh4bi2XiBxZ4rkLVweZQB3x4mERfudMPQeZfyw2pFH",
  "key27": "2UzSqi4AbMjyq9R5kGkQBdy59LVTwzRmcR5E7zVUp8Z31cK4bNNjZ9z3T7mEmMqcZPD98CVvoktJR6sYKke6bryL",
  "key28": "4VKde1cxjZJyYp2oRj71JeykJNTbQFuFJuuMB7VmtoZy5GgChKQe3cQjMF4AhhSJW8MmznbkrVDJmB4PehctGc77",
  "key29": "2EiKxxsGDZ4mduN77uiuCr6fPzVCsdVHXmQRvU3V3GJokK4geQdFfKJXJ5p9KJLhwd8t117PTW9rkPqjPaaQVtP6",
  "key30": "55sPLNB3u4ApYeo2yDeLqWA2EykcrZLKrs6pcCbbymRmJwDFvWHLSaSnsrxyF6YYhS5GR16ZpvN66imA41DvfWXx",
  "key31": "ct1GFGptpCWBVQirtKUEgjcJpGGmVD1PP2UUiV7cBEdFDYwQqv1DLwYL5e6PbJEwkWj8QeQPxhbTCKm6hGsrURu",
  "key32": "3Spd6xcEqqtunb1bhpSXDqbZJTzDs8QMzRAKaHUGiBmxSo2Qe2dwpsP2mNyiZu2zt96Zawky79McWUERTKWiE2ZW",
  "key33": "1z83fX8QYRPHQnDV9mbe8BQfd3wtm9Xj3eDd7kuRPVAzMVgrS1yFeMnzXwpPTFxnB816fecRWar5Yh51SP9PJfN",
  "key34": "5Cm3zsHyqyuH5QTitCpsJA398NFAcmuTDiRGrTssSkCV9zGF7e8L9uesdHm9SH25N3QbiMXcqxFALS9GQEndrmYp",
  "key35": "5GRBztmGCVKX2p8HttHdd7yLubSzG6kP2XKyjGxT761QfqLfZLXJ7dwDo9eXT8WB982YrB6X49V4E1vRE1hPhwSj",
  "key36": "4ZYAZwpQEWPaRZBufYJb2gemXFvqKQbavVyxkNQeMo3Kb198Xg5AZnWt6zrzP32mb2JqcCcd1ksRvKMAxTUerpG6",
  "key37": "4mquNtgQTPatPf5h6B53xLtwe8MEoqAxyW4nvN3V5bmmDWCdMn8pZRY4BNQRXoPfnQ3hWF6iXgGtcbMpEwxVMaRp",
  "key38": "2cRMPhXmgmGFECE3vw2cwgf2QjxAjZ2NF2HkdKDT5wtf5Koj83kgtP9b1eLtEB48jEkN3EySRGGjDw1M2aYC26sE",
  "key39": "3LQekCWfFuHoMMiHYkBCBKAmKBw1upobaHKxxGrPmQBCAaqqrKB55LMt1DZnUhf57uPGTWQfuMHYToZhz6sBmAVN",
  "key40": "hSHa7LBPcucwnsGs5LS54fLHJEwUPHjgiUcfFyA9iiD2D8Pyc2QAemSmZrmWVqfaGMqYXgoqUG2QJbAYyAGJGK3",
  "key41": "UxsRVJMdcJ86vRTgxZDAkxbpGreVHq8Z9BG5dd3Kug8qT7s6yf9uUgum172FkeKMopDekpBQDp2MCjY9jA4HQHd",
  "key42": "5iBZfZKU31puHQvdzQv8viL3ig24rF93XWLUtAcwGR2CgFWGTuM3rgRDRTfVsb2mu2v3PYuTtx818thjRmLKrsTb",
  "key43": "4aeKm96ceekjwUmKH92vrLQwyUsRo1ryJKJ6RCKMfEr4Yr2ScuwvuNsivAgARWSNNVYg6qL6cq8LmJ2Hp22Dk6GF",
  "key44": "2rm2b5j8jQ1N8jAK3zKdBqXzZtEeBDMREbiw24BdfiHxWEnDLSnHj4XRAvcgF7C5EGLYjNWbddU73F9qbp2VQeVy",
  "key45": "32tkzsdb2Z8QYwRpGZyRnbkZCjGU59ADibBBPpqeQVuV1mYBSLxH8jAnx1mgsUDiwY7Rapj9PkVvBzz8M2CdoWMR",
  "key46": "6ccq32nvGjyqBdk3y6fKnuBvdiiXU6AVpnU4AvYvn735PS8Zq3eVhzMupgVs9tg91XQse3nSb2FfJneVQt1MFs5",
  "key47": "4J4CeE5UBncoodoWXbQ1ysuBvYujotJchWid5QpcfHKVn1vdeb5zr9UdyMVJtNEyHAZJrZPNWHALdDu8bq1aXk7f",
  "key48": "27TvXs62DiksTHfyheXxzXqYdkKsBTcmK6pdHbmXM4g2u3eRe8YFPrdcc1MBSqMwbh6HJE74TAfAjCmvp3yrwARW"
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
