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
    "2m7EqpGt9GACjXmm2fbDDcxUD2MDqVddpEHfutUdviS7VFaDj1LMsSHuSqjBLQkbi2DJxZKougQZ58rd1aW2dokF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yFTyyAR2XttXg5syXfinMRbQV9tZ5bC8ViiGpMPa1vbH9bmjtJKhdQKVTKk6TzgWaqY24BzYap1RZpWEmC4qzG6",
  "key1": "3PZdzMtfjKuXAXb2UNWjAJNYG4Bzv2u3H49HNSTw5DdUrAeeFpa1eBHrxBjG9t1GJQVQzJetkzjfJjY6WTnuvKYD",
  "key2": "5gswyVhWM2qjeMUcMV1b6BdnJXCjJziUyAPUp6n5nAXxz7gbtLwURTUHQ8j2n3ufqgN4DkfGjBgN2MUwPpWnPdoC",
  "key3": "2Wnoasqez7unGJP9ADxGQztTqkEnuSDnWYA9qZip3pr7tdBTGbWRKBKSFdTJXSSgmmsAcqGthZzCTNJ8Uv5rAXET",
  "key4": "5Erb4cwnSCJQYTdEv3ae3pw14FUfAjH7M7Q4ujAAYgpRTSHZYp7jbhvBmQ1C3qxWzQdAZEF5s2wWYEdJkjTFHaHy",
  "key5": "2LpNkrbe8q92hoka13Dkh5Yq7ytjr3Z7DTtT9yD5UcunVK2w5rLqvyFN6KyMo3sHJFBJhzZcH5M9g1kxqDbkSvnG",
  "key6": "4sYdWEMZUzMY3pyaTK7K7UcXo1v872ohGSfoL46a7XSgAWCiw2Z7Va49k6sdq1cnqBpWAZooG1eQ5CqZRniU59dZ",
  "key7": "4jqPtmF6SFKoLyhFkfxyUrUg9KVvTHnxzZDdTNWSAHbimKGs1vRhuBGGBao6FpePhr6itTzn9rWoY8tzJdDLTjZr",
  "key8": "5vhkkrUHsdo4y8ARd42qUWH3hYKXYJADp73ymXP4RuxuwDDUR12TMPYjGpZZdg2SccBu6QHdbu95mBdYmjM76RUH",
  "key9": "22GgW3rGY5EXpYCbuWxyXaqJgHryGQGNTURkeB8JGiRPRioYEeDdydgLpwuyVKfvpQhPQXpKh7Yigip34UcPeuVR",
  "key10": "54MyXyJ7xsmRC5sXL5bz4PdgWx1J4qV1yqg7a3ut5YWagTaRzVCBXjGgJruWiEPx6nQNpZfKWyy7AVBZ2Nzy4HAi",
  "key11": "4XmSEFq65ZMbfsDgMWjgWtrAwL6jf8BNDRSUtgp8rZNswRaJAJc9vChhYvH5N2T7bJJii7PMZcLqgD3uj3sG6qpY",
  "key12": "4HXzdHYimPoPN3ojuH8VNrswN9PLUrHMdTfKeAAB5tASxE7ncAe4ih8CcRKsUZyX5gtaRGzDrBsf5nKWhtm3WAXw",
  "key13": "3fULZ8FJ7kMhE9jkyxLj1LFxbtDkH69jBvha2pUwGRnpPeYfqzFCDeWMRCSMUUWUvAyTT2GU1PbfamKBTdw3D9tZ",
  "key14": "4cRHRW1jMmSvM6AKypNTK4gcAEbLw2pLXYu9kmUfikbLE4iLw2simhHBAueSetSMzB7Si5VVgk9nCV6Cj13cPK97",
  "key15": "a4JKWqqaVmBcriXZrCmKMeo4xm7R5zPMV1wxPaW1cqYaKffLro3gYyhTUarUEvk6AbUfnqC44TFEiMFSgLRqnWS",
  "key16": "2zXmz6ki9kVdKP3Hz6ZJJomRbBL4AZmfKdWTZczBQwVG49XSZHmuNyCWRzDrjyA8Y8nmrY2oFpuYsXAaurE9rpvZ",
  "key17": "3wdTX1FPRGoPzrwsgvapja28VTk3geffmUU4YbuvNcrHd1sDhycowXX3HmAwYJAyuPFTb6HKNSkM5FgNNeTDZGgq",
  "key18": "5JBvTdyjt5n3qamBrHpz7CoscYtyt4zc3r86CMD2uWLXvH47R6tJzoZWR5XCy6Y2XkLyHdvd8dTsKuvtXDpXKtt7",
  "key19": "3HSzusYe9m9zeFocnqBDzX7JN3nydjU9JHzFB6H2UkMxs9G8KEQWUgzQRCiEh9PPA6frHh8UmrXAutVUsaLTSD1S",
  "key20": "4bBysNZyFf868RejkAD9wXmK6R8bxbHddFdpTSTB5tnAVUNryLhXyapeXqdpnipEq63nLaTqUMTk2LjEzhN9PxDR",
  "key21": "2VfBzQupDWbPjgMotdXJSfGE4eu9RP2GEspPgQJpNirczXpyqLrW4HLb1qv5zbBL7KEbJNBk5MLL6jCDCJiqns6C",
  "key22": "4JqW7Yg5UUTgYZW8NEaockm2fN6gWD5zXLgZPWgSPTGCcnXhD6YVtQ8JpxZaHqQ7stSgVQXQMiXDnRvveaWN3CsC",
  "key23": "642hVH17ZEShLRsaLusKhgkYzbnnyDWjVBY7ptyKpaeXxphcqS2CRedK3hnn9DtADFsB2JofuQKFrXQJSfNek25d",
  "key24": "YhrjjRvss2XY5QLRh4H9tuK3QJBRUhkSA2VThvQ5axPUgCLkoavYUNKgBBo6D4gDzg33WGhnwSQ1eXz3UpA5MMR",
  "key25": "DJL8jzjkTZdNjoKk4b24qf627Qkfe78YZLLFdhr9YbWGkPTZYjiE7qsfEVbagCvD2ZRv3JDbMo2qwnzGiba86mA",
  "key26": "cPu3Pg2iJMkjJMv33BmotjJmrXTKbp3NAUzRCwWiyQkQwMpJZo7LFwTiJCcx1szeZBDLaERM6mBcb6d5EzMjJU4",
  "key27": "3rwXw4Fr8eBSGvRheB2RKrYoyWgzBj4rRnmjLJWW79TboT7cfcxzhn65UKnkTRNwjmivwfD4Wd8VwfXy7QjDwACb",
  "key28": "bbN5AxpPEyN4rcatiq43DuYsc6uLjvTGYCyzcV57ppXn6NdCyNhCGMqg67mvhgxQW6i3hkFVFWzfCvEC6bThXgW",
  "key29": "4sf7EQZCGyTwxWnULgapc5joHwJaScNUfPGyZDyP7UFAEyi47kJSBoTUaWRzy1VLhRnAdKWkCk6Mi96hcY8jSKb5",
  "key30": "4mGrqfW6xhGAW9Wu16dZhkncAhe3QA1Nd2BLFTEddPdNLd4Y5TPCsekc7fbjPe7qTBJUpeSz1wMdwmenbLfor5RN",
  "key31": "5d284ptCBQGbNwmfpze1ypbe6SLsCkmVPeveA9TEmf8tLV1g7F54L68A71PMxuLfdGhPBLdDHJ869q1di2Mrtp9w",
  "key32": "39Xn6w1cdd6k5stgCyWpSwNpqS5hQHnSnzEfqyoWF2JDrhMP1RLoFB24f2LcZitWKJRErvqbdC6AoYzPSfEkt2Xb",
  "key33": "4aA9ufiV32bWLjytJaYxp9UeiXz1VFaq84RaMZAmhejcGTFB9kifQv5Zb4ga5dxqjKNH5fa6FS1Cx6BSHA2uSxvq",
  "key34": "4SC5t6SY3X7Zc41S1fhvfPh8ZiCVfajfx5NhA8GbcAJXQfg55QzVUeMEPDFvTuzBuu39j8ufpjgjukQY73obfsPA",
  "key35": "5SLpZXauaiw2eKzRJPPC4VcpLLLogbdYVyT5w44dU3kbCMw2GnA4iraHwD5dKAd1bXWz4S4xjFEGXwb7KnUUN52e",
  "key36": "3FkRexws3Lk63X23mZHYj5PjBvUpBW5KVG8y2E3eb8UnSjkvxfa3UjjhvDRGV16f7QvxYpevyeHJw8Q6a73RZMmn",
  "key37": "2gRoX67mxRBP59NeSgaXoEj8tRJ4fvHXpzBowQ9C2jjfHWd1gqxsEtbjWRwXW6dtGPQaY9jJN6TobRi8UfwDqe9L",
  "key38": "2DqBnhqTKZyM1wHrJxxo6iuvu3pJhVfpSCsxqbYXbtt3x2a78C7SFJLMUNT9cy9HTGrRcodHGPxZFBeY3K1c5kfN",
  "key39": "5Kq2Hyj9wG5aTugtaPTH8uUCFhKBFUZAP4JyyyZaRefRMqFotnGALjA2r8y1uk2g4RoSc7iHghUUpYDTKanR3Hov",
  "key40": "w7MZcF8tAnEJppdnN7qsYNb63eXxThTTDSK5mPBak1UWTxEC6Z37JfY1zQjcdqLjshGx3yC8Vi1vhYEQqJKBt5v",
  "key41": "4WovwRFCRRK8kajvzGSZ7QDCxq4BV1uBn8SvdMQxD1CLnfSgVpJ8P3ZpxUu9VyekVCZLbkeRBEN9to4y5guaKPZn"
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
