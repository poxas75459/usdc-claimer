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
    "xUVffciF5kw5uo6cwwW4Ti6JRigf3sfpkwNRWY4aWhzyrraGTio5ZYKDaPLGqpMcg8DVWQj4JARjGmrKdkRfLNE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CX7d6G1KnHgZFcxUhpMSMK3B4zX2tHb8rUoAnFk4aubdSBwJJe5DQ6Tc5jtMbAe54hQNLsewDr9VGJk4KwjraMb",
  "key1": "ZDgqaYYYMx4X6GXqEDLZaVMzswsK2JCfe7QeDp4X1k4NBQxZvoWFwNKEjooe68p92NKhzPindVk7nD2vYqsQv9m",
  "key2": "2Hc8ptc5Hthqofdh7aw9b6XcLjqi5p4UuXAfAnP16Da6Ko2dRMGSaxnCDtCi1CRy8LP4GX4aeAwLASRhvraY58YV",
  "key3": "5ZzDNwq4cPapkTvte88qAtdZC1daSumEZ2jV2xMJzdUWZcLiKXXPEj4dEGT5uTxxBYR6xs4FNqbpsfV6VSmWxcyS",
  "key4": "UiqrodbWu4WpfDcxFmnCGUhKrdNj2cPGAR5aGcBvRFxHxVBEwwpE1pZkx2KN1HRPwm677cP2CPYGaPagtBpA9Li",
  "key5": "4MmJgroPjd4qDy4i1uL5L2D1XdoF9tp55VXAapyU1pmejMZtcAWfwEZqKafdzYAZz2tcKdKeduFnta63RBuSBciG",
  "key6": "3wxJtcL6TnU5tK1JqtC7jfw7Z72tBNSvxEPpst2i2jFN99pp5JUEzgjqdKAZuV77LXaMVeMo6hZnrWxKys4kHysL",
  "key7": "2RAr1jRmmDXaYNg9iP1rguwzqu478wSEQJeAWpAXTZDqUaNQDLpcJEGKP7jppXD2w6geBQKYW89j6EPywnGPjwgA",
  "key8": "2EpaKCLrepWFj7uWq66UBJH2PzpxZ25Kqwwgp6rbGAZ7eijfnVDx1omtsXGbuA9v2y413F3Cevdx61mYkup9rH5z",
  "key9": "4xp8qtQbZyqK3cbFyceU48SbBdxUNXjSdGc7Wkfj3Cx3Gt1sbLx29AbUp5T6AQBB7CSB2EwiRyqgtS6N726pBa6P",
  "key10": "3nyVMDuqJt4TT8QFZLiAZc4aSvCG4u2hWWvGJq2tnufc61ygWoWmrPYTPA5Ns2THyuaTFr3MHtBARYhV9vZbpEXJ",
  "key11": "66YCresbA5Y56RzhUxdpey3ds2ym9eKkhNuBCZdQUNQZdXGtZvhaFnS5GnBhvhHvEm6Dt9sVcndsSw9qCAAgZo9r",
  "key12": "53556eocprxQqNx6hHiCtz8G1rc9GiTEMDggCknd9riGdQaY852ivoiGFfwioh3vnY68T31ijLPZQD1D4hhf7xmu",
  "key13": "5pCKQmpvb8unHRmF6AS7fWexaD4sAioACnjoLqdbbhoF2YQzMSMANKbg168Qq4U5G43VmAL5KrtJ6fMG1aq6hHC4",
  "key14": "5FDuCSpMBbREBxF2jeDC3wh7od4qzLUzYduLYkgHGs8jpiKMx89ZBbXaZw8m9XdU8sVGmmmYzreW3HCLjAXjZE1L",
  "key15": "oGNp8obJ6HBkzCKBpahmsTrJ6KWuVPULRf1ye5rmBP3uYbvpdKFHn7zHM8VD7kTNZ5NxmzdVkzwWaTf2UqZptTU",
  "key16": "4wCz13V49Uh3C3ZHuPiXiF6hPsStCUS6AAjLaMumLsvkF4x4FdXh8YSETDH7iAQcBw3uFNXghWFm2W1Can1ULmfx",
  "key17": "5FKqRVjfhQGA3kKxr7KAts1HrKjxRFSH7nyC837wDKSvuDSJG43UCSByS1FoaAy791NgAuwatRhEkjarqpwPAXXv",
  "key18": "2yy1jopP9hjRcQxgoaGKBAKRBCTtTgRqWWtmANF9zKy3FTpgfV6CkeJS1Q2xno7ambbxLH1nBiVNY7zJJedEbFaH",
  "key19": "71J5sNLMNaNHhH26hjbnjusx5Cjza2x8nDkef5v8pG39tdf5hkmmE8aGR7a7MHE1u46KQcx8ZbJDYCqS3AUbbZF",
  "key20": "539zb9vS4rj7viCwhWWFecHxthr4WS9YsFGMRHi7j6HvckmR8fU6e53m8F1N2wXxFoXE75YvxLGE5HjQbtHuyFMC",
  "key21": "5kyJrFmjRggWgxawhAJy9dEcD9HwTQTbgQgKT2DDXbuypTDSFhSSE58U3VXg5cEaG381xPxKjrhcggmjHmhDU4o9",
  "key22": "4jALUQ3TFXG1h3k28fJwB8UyjraWBA9BFAquPUSGmMhqmMYx8ixC1JUaXBADtiXy2RkzNAVgN9hEaYXT7uF7Yvye",
  "key23": "5K7ojNfANpuQa45VotdhD1wfDH1MP46zH68z76WZf5XDP1cEU8XGg23kAj5XwE57tvRm4hsxiB7dBaHuSgVdzzwx",
  "key24": "4LDQBYt7pVrpHkj1ZTNorSEMr51JimfaZ6bvjXiw65hS674yFicah2a67SnehKcEVt71W2cYrYwejFdnbmiK1NSV",
  "key25": "5Hnm2AndYCtFgdewPPKsLJypdku7G3ct9HDLeMyPm36zYLZ715YGDHLXhvY3sG124evx5rpWVfWWYAtDybbyNvzC",
  "key26": "2a6N4RyNiDR6byUYBFpDxMraBNcjQx3us4aXzTwX8KXpG4FLUC7Z5uJMkmzGwyieAQtXfVDrQqiJN9rFZ7Bv2EmR",
  "key27": "ku4TTdEVzZkhvj6Dzx1mdyYmC8QyAwH7EfQsrWi6FySHEW4uTETsSmXi578dBv2r9YyvRd5NxeHcgsYVCqyHRjC",
  "key28": "3o7HoGqbCpgRLdqdSryexABKoMYD7XbcdDcA2ythGVwHd63BBKtQPgcQJaU1sVfjgNkoDCyzRTzihew2Wwascjzj",
  "key29": "3wWUPLqQxj2eTAiDk2VxbzFKwZB3nh5VYKfU99mrESQqzGrA8vNdHkMd5UvniFrLjjqU6X6tmphfmWtPTq34f7fE",
  "key30": "56fxfE5fLLQWXZiFPsLAwcChbF87HEDgA6NF6uE5P6XhyegRmdiXrctUj57vEJrLMMxNJtNH5V4n2w3PJ8hNYyKK",
  "key31": "3qEKMWMuTb2BfNuf7gWjcTRPdKVGyves8pk3i5NYKjLp48EZ1jCqSWvYDHQ28V3h7aGntkF9PFHtzRjxBL28TNog",
  "key32": "22qwWUTGis2Fi4KDgpGWjcvdFyhghDDHfDtm16xmrqsJaqZ5HsA1DSEC9zRuvzY8DcP383ds6Cg9oJsGZgNA6GKe",
  "key33": "5TVfSeyPdTqfrZYBq72hRxcDrusNVpYsKw2RxQPuCNvbAPcdhZHB2GGzfHKuHymsAg4E26m6HGiFT6dBT8EEJAKC",
  "key34": "4Xe8LnKzyPxjuABY6MTm25SBJfmFmYyb73KWVT8KDieZUZqBQ7QUarckUApkzLdvDWi5bQVPDLCqwYkDpacWrjab",
  "key35": "HD4LUj6rMA3csVXySbTZYpDdBDK5Jw17ENBQqJHqSSQHGzi51BKiToTYy6Vu8FtRLR6BavVX6XQybWhCcP8mhja",
  "key36": "kgN7FFaoV8ytXm3aAjS9Bv2czf2QEFMniL7N9mikLBVJvkEUFG1zYXJxfVpfM4jnxPnPZCtzKYp5JSZTPhmxTDy",
  "key37": "31j1sgcE6hRaWkpHtFvQzwngnusbKz4wNi2LfqPWixH5ruwdfJMjKnBRt8MaBoqsweoeYacHFqUGzeRuTSEYHeqC",
  "key38": "2XMfsUpwyGwbemjC1bKs54DFqTuHKUi8X2JtePPiQXwVMy8uaCtmgLVG5dfbfVHApE4T65QWKHMY4RDHvzFxRw9m",
  "key39": "BbGCWHxVXV3jKC4GHmdKyyEJjSzMStWn2tbFa22HQGRwbva55VCh4dceXsswHeqJkDBFes2WCbirXwUxNaRDznQ",
  "key40": "2Ugn5F1nyFnEyyDyt5dRKkxdZyLUVREYRAek2yfyvqhwhRp9FfAUKexvLwMbuz8QVafbehpdJvyD2pgb9rsSUup5",
  "key41": "4PdnqauK3495n5aPqy1ckRBLUM2b5WQ8sU7bFYrNzPvBfykFH4i3G1pkhdT2pxSmpvseGGTJH5yToGojwh1w1nh4",
  "key42": "4dVgUemAC3Cyvikz9bdV1GkydwJbQeTovfb83zRJjU2XHG5ZgrVLcvtv6LpW8mgDja9Jnp6VQ14awV3nGPynbcyb",
  "key43": "5A7k2tp3YJBdFViounFssFSUmki5yvVDnUnJs4ErWhYLx7rnqqTRZAbAMXoPTPrHXWZC5f5GazBQsasCa578cSE6"
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
