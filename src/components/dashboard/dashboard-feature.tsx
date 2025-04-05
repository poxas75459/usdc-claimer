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
    "S6he8Ad7jzhfVUQZ9unqhR1VtJtyrY5VszEsQtn9VeTximG693SKpJtQQzDtF6N6UKw2KHzwokrBSUgpgQiV2eG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tNTyy7KfWdt5UnGXP5TLXTJ7jNCLr4HpzvKxRWQdjJZ4qLfZibed13tL5TwyobkL21M9fWPsPPF79W25ZaDAeK7",
  "key1": "5dVRfFZdvWGovHgb1d9KxujhDP5QvBjgkq6pdPjEEM1JDoQbqoYUxxbM5brVKQ3gDfGpUiAJBYcytgYUpwS6xLti",
  "key2": "5c4pg4Qt6FumdPYFTk3b6bxHWFaG7QQQ647sjjRN7WQsaDZYmQ7nBuotWHoG4PNGkZPzrUGY6WikF5yhLiYj6tKb",
  "key3": "2NNCKqpukWNDvNKWWcyJRGEa84WsNrML2sXdBR3azUxSoY6CxZGjPSfemGY72AcVu6ixm6X16JnCaUNSgnAY3SyC",
  "key4": "5s4yYS2zK9dZcUPJzPFD4S3odoPK9FhmzHDGDfUaysuJJQ7QEdTxfvHBtSEcSWVEr4jQYg2ZdwbUzVki2FCrSF2N",
  "key5": "cbuXsAsKRymqZQe8bS7cZhpndbsZJEQLsezamTrNLMRo5j1pfkb4TwPA3dgi2SxBudwYwSCnw1FMYBXrRjKyjT8",
  "key6": "3uP5UsfUa9TP2ZfkRWMH7XUgfwYZCCSVQxzNmhCLdeNAAWhHwHWN56S1q2uF26SaDbJFhEky8HcngcLzsAYqRCwP",
  "key7": "3EixmZtiTFcba266D2fYk16GuXzjvTBBnfoKJMZ7LLqMN9e3XwdLrePVQc1qkqHKhpzQk9CuwAmSnyGhNaH8jgNd",
  "key8": "kkHfiCHeLSdqRMo1PZceU7cU4rq91keerNsveKmg4xLXHy5EWmCr7DV9BWW4TLu16EB98vDdERWUzqyDBdAc2ND",
  "key9": "BU3eg9nXog2QpVLcyUrsQNS7VgiXM7vtDUFRZrzFvNgB5dr21YbJZoK5dUSB9WM6Qh5oGs3bmPGYp448EHnNAdf",
  "key10": "2KtK2T3YpSBV7yEYxLbHEuAmdVtRCVMaHz1ZSZ2CnvEQuS7pWHkFCnkgFpE6PGWvaUXwFLvzhCcoU11FpxUA8dPR",
  "key11": "Rce3YrAnDUiz3fWRSe9hGEz6iQYUj3K55Pw8fsYH6AMzrPuqDup2haMCW3DuW39bJ4yELhE1z4izKDz3QEkBFz9",
  "key12": "4p75SvycPjxWeMbFi5ir3ty1jRQYPMKkRZJ27HSKQmwGQxXnvwKzdEsUyx63Fu8Rf4WMxdigw7W9ESyPvnSrLyTE",
  "key13": "5WpcNZVTx6ozn9rsrjtyMA8vVLniv1yfbNNduact4sTHtLce179nLjqXwHn1j7MocsbbJGVBEJ5pHWLS38RFCL39",
  "key14": "4UmFTgmYaMqYFsCcGE27rSNNZLs4afiF1nB5gELo2tZXVM5ne2rPy94kVipGV1wddagfi888nevvJEZtB6iVVHqW",
  "key15": "2tzZiget8HACHYi13RuGpEaxGX9bDfamoTon97ahhYZXyoDTFWJfmpk8XGhNZmVdqPR6s3G3tW2PW8XBM5AHkvS1",
  "key16": "3FzXBy877Lu4NeeB5CdeajYBmAy687g7KgLires5ET19K2XmAekvwyNFtNUL5WHJUjesQ2KMdMYhcyV5mkhAxpim",
  "key17": "41wB2bcBhh3sXMrmt3Xqik3Yo69HiozUJbwn2KJrWRv3stgysxihrB6qhXz5NEu8Z7pQgFUkJ4QaxvxtzNnQ2KTc",
  "key18": "32LeYGQaDass21ZWuYy2ADRZM87HFQZf6RuGSrFUwxQuaGbPDJrdhddepz8J7y5XXia8R63cwMTawJufUaz3iXiF",
  "key19": "5HuweECoZmYFbmrZbAjXgrasJitBxqmFityuET4ToXwwoc4KZ9UmGwNEpzWZz8tBG4gmiCDLv1mgBJNRyUZapvUp",
  "key20": "5aGJ1ezrinc1mVa9Rmru2Fcoqb4YPQY8eCZVFHxbDmPjKBKm1SWLUVLeXFdwLhijrVBTEDER9zLtXqbghYQp4UiM",
  "key21": "3yVc3WBWCKfpP7nWwVCby3WVbMNZ97KrB7hgpKTDYFRmWckiosQmgpNKmGFaCtXtWFUyArqeMnQdbdhKrHaLbb2m",
  "key22": "5fiMukLwp7hyCYjvgZiFS2nmc8CpLNoqaJVWh7P3Qm2j9ZoXdfak7McsXRkFVoDpkg1wGQtyysFduKji7wvjDdbe",
  "key23": "2seb5zGKUpxs5iBSkwMNSbB8J2FwqGaRbvfwyEFLMenmXs29o2QJ5yALv235VYXtN3AK69mHNMyD4VSkbhZcXwxy",
  "key24": "3gSE8xk9BNpT81mPR8YHUJ9AfNRnM7jjJZzH7Dz1iTEQd5Aqc2hEZDhQwXsWti3e96pEo6qCazgXzguotjW2L98s",
  "key25": "2bwAb8pSjQrtdz8sDEHPYrTNpesYkBzTZvVUYHqTGkjJgGCSvxsCAvyytsmtPj2EnsWfcoWVmxvfjBGCFiiD6Ww1",
  "key26": "4H4RwKmZFHUTWTDvVHNY4SeidmnfyjiNxf1M3eLU9VT6f8poN1xiYuzY7G1HU71a5iyzyQU78ARn56F1tP9haRqz",
  "key27": "eN5jiMfh5MJBdRNrmofh25RFGps5aGWyaTtxn3yt1Ds4teVdHnfT3mgzYddiiP2q2LYHbPB6YVT23pB5U5ZgCST",
  "key28": "3tfXrD1x2JjjAHrLC3ZbG9dBxoFtpfudQ5qcCLTXwLiJCYWWSdJUWkbJaBf3Rj76sKGEzpMYjBvpUvafjCBUN36o",
  "key29": "5gc9fCzReapJgwDW6wg1YZqcKDvjpueXL3UwX3Hc4bhVQmodgt5qVKwn7sGqfoCSihXejFLPYsaEDA4EBTNhSfo7",
  "key30": "33he5XBzHRYMBcgUGoov7bmwhxoMr5MnYPDrtjp12cF4HaDoYVJDw5fW3Sbv6GGZs9ESSpV83eMdcgsQaMWmNboQ",
  "key31": "65rNcWHC8iDmenzUxYv8JucXYeSvD16tQh9Qyeodpqbck9wCHgPeYNzQJDzYfzhuYKpdbyStRWTUeLywZCvu1YTA",
  "key32": "25R818ERtkVFKLzXVyuGsiuTabyK76tnCupJi1LydPu4hxhxYwoFL8LbikCXg9kg7uo8AYQ6pvaT8uCCsSUqEyN5",
  "key33": "3zfn9UjDh8dBAKc1zSeCNa7aTWmULbkFyX3mYPM6dKk4vK7VhPEd9BdVsq12mM9C5hLu7FE85CbXy3weSTWAxQ1o",
  "key34": "1qvt1w8hFmF1MxszaGKBPf6mF1ansSAHEEuzP1zfyqBPri4BLkbfY1BwYKPMQzawNwsiambEV3uKNhwvKpMBMbp",
  "key35": "3c4YR1aMa2Ca5igYW1rukWnAhpc8pFREXKs58ULPmxcDYU6tauXezU5n14tLDCykjoN1N6YZVvGJ81qnFzEL2mia",
  "key36": "5M9AFeLLsFhoXCXqq1a9WtTU8kaiLGFc8rk1JDoH95LzxK3rcThsENqyaoNK2qqoHtUL2wiaoRzxWYH64Wt43QgC",
  "key37": "4aKBNcQ2wjNXhWwhS2L6HVUEc5VS1AUF8ubPFqvPqTVGi29fmiYs5a6bigVCrTyx1BE2J2xPGgjPkaAzN66u6v61",
  "key38": "2DW4oyMUdYcWJcbJ8gE3kT4ncoR4h9qgSRRnqF6de2tUASX4ayDCjfpcksGWZCbt8FNgcpWw1q2HRTxA9PqSvcBu",
  "key39": "5adnh4uMtoiQ6VBkN5LNv6kLpJPYaV7UWiS93zP4GmFuHRx773Jf8pe4DkAjAgTSiKKejawM3BAAtYnwKUG3Bd5P"
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
