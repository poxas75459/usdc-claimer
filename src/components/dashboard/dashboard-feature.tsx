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
    "49aKhcoUbfes6y8EU2S3ZtPXQxSuvXkm2d5P5LY37HLoE87z3isTX6Q7GwMRX945NzimKRLoVQPAdfNn4nGvcdLC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k8XW9WpSuFH2pfB34raezUwoBL9faGR3QHyXKGPvCXNXqNTJ6aD1e2t2rXW6jnp4JnfLhVuExXX826CuZV9oQ9x",
  "key1": "3zp69WtKWPYm1RxRMFQt3Vqr4LQaehVhdfXVcvjVU3ZSaBjTDXdYtaUHGctv9vRJTHAcvct59y5wAdQqec7pTAUq",
  "key2": "2Y337roHfuP7do6FQNRGj3n56YQB5cGfHmeGdrnPgSUXBHe9RQ9o1vMaDqvDsE3dcqjYUcLTqfj9vbcdFLJETSKD",
  "key3": "3CwgmRikD3Ugi81ZXsepcg1UKbA1RJpTHYTu2kU8yDEQhg5deQi8Rtyg8iMy5LKRitizfdoTBgckBQxX9no936i4",
  "key4": "jjqtFTBR6D6QrMvpDcbUymmALqYZaTDLbqfFTUit6ibJ6THb5exVsdmnUtGJ3yaxCPhkaZXgMz3V7genfqWznbf",
  "key5": "mGj7ne1uNbfnvn4WteriMy9GcVaw9mbVuuc3oTCKakuygDsL7FzA8G5HsTmqLcDeFnbuiHWTfjn6jiSVkMd1hU8",
  "key6": "5MsWrNoyWHCGEiTLGNTtpEZEYGYGuBrh8Yrd7zK6ozt8q3dZBtwczX38M7mzTDRcvsYpV2JKyUxBF3bNaQnASyC5",
  "key7": "3aWF1wtrG9u2sjenUzvTA9zkTJWWJfLmK2thHghhBVZjPKvW7tu88epM5kcp8aKSRhETQfBz5XKhut1tWFc3qojo",
  "key8": "2sLadJ9ajLkTr2bzm6B5DnbkKpxW7CxdZ9o2yHNgsKre6m9eyLWfccZUsekH4c1ixxW6e1Q58bTNeaFMCHocHt4F",
  "key9": "4twToEpTbiPR2FyWj3FmRLA1CGNKagsLG2QHKBLdxAr8Uz48yfN77yzW5mnSnqX7XST2hpRjBUrJ7VYHE2CRqJmQ",
  "key10": "323kUHqcVm4FcP9a8QCNKHSooPbQf69HkzNXTBAhwsXvDGZtyMhwpL2J8xNwLvtS3fKsTjbpjuJKAAkPqtrmJ8FD",
  "key11": "3fuGMYEWDibJD6fbkWRFgApB2Dj4H993wftg72psJ7xuEGq5Ng7oYee9oqPxdK6cJi7zX228BoouL2j4eeU7fsG6",
  "key12": "4AGJmksmU9yGSzPKy12Npdx8t2KYxKsWmVvbuyDYoNyBsUBRJMR1g4xZ3ecfSScJipXxtzaK7TNyz7nzioumRq21",
  "key13": "botGMDUSWEKBkJ4eAZiHpsn6JkuVDAEvmMyJMNVWSGqFwVnM8SmYV8BnF9AptzQj7TYffnEmJBmC5CZcmK3FkEt",
  "key14": "5z5M1nt715TFcYKqmqTPY9Ry4dbwD1iW12LVxouxtSku9CxtqW8EpwQBx18ShP68BuWcm6WZP9VxZVejLNifcSzq",
  "key15": "2Wuh8eYGfqhfron5xHx59ZeS9UF4xDiDULFBkzYPN31MSiQiKNnrdo2GM7fBGZDvb82MdtyyhkTfNqmtifPwGet4",
  "key16": "5jkYSWybC6C56vy14MuGHLjSAEeDxcGTTxfCy8Xd8wYe6kZkjCdkkhXRLJ6ZTS6YyxJ5vhHgzMsQL4xx4vQz34gD",
  "key17": "66fYJrDVXHS9FUWgxQXnLfaeZuQw3ZyAeHnEqf8n7rxzNFegCaMtK6WEom55D22KfbZQeFfJSVfyLDnzgap2jw6i",
  "key18": "2pW4Lam746tZ6y5MVa29LdAqUCp7a2kLfTCHPTcqRyP16bZT3gTn84thCdkXsj6nf1J6nJgX36N7Jpb8Z5yBM44T",
  "key19": "5N66rMvF3WLCfxCWHBw7zvwXYLEP3w2g6xB6FvuAd34EX2K2LBQCiaMsYwRdjfCWPxH1bwFWhUpMoLjzc2kPk7ts",
  "key20": "4kuNAUXqGmguBADx7G5f8Cev8QSfWdbPeuXJGMr6LhigjVMC1QTXXmVpSWvsEfucHrzFizj5RwsfWdWASWVWnwcs",
  "key21": "5sCwSsKNZpMTvrqZFWAT1mGG7Vc93kDVVadGxkJyXnugbteQtPpDc8ZPxkdAcAFMGTdS55jzUnWy5paMCHYJde3B",
  "key22": "3qF8ctmkj7AEstSuZvUtxVFetNzcncQGLC7BiVgyerAdr7DMs27Led8NZ6XendsijtUs2Jq4iCG2sRLHgFBNebss",
  "key23": "3QjGtb7cpoHq5qomaknvfSRepbCoiULnvg8k238SEvMuewpuuKcDNfNQBvw1igBNPjnFNFzDtR1vGrgW3Axg2Xqv",
  "key24": "5Cgddp8b1m5SwRGa7tkmr9pFed2h4dDZ6wmWzXeXB4GMnjnraSCEs4nCo2HXjLJPsMkm67kxnUsVbtbFMY49svg",
  "key25": "Y2ERy41MQ68sKuW2e4RohYtRTmt9euZusuqyPcoF7i68UhEhvKaNgeF8YhPD8KZg1VHVGDAFtPpTddkUcHejh9u",
  "key26": "5b7vNrZY8P57aXCjK58eNdvVw2TiCAzxnX1RGsNrePzEmyZabvSJAttTrvUX4BGpR3k6tYYp1RwJW3C68xWrVLbx",
  "key27": "4WZifTe6ZYoyvwU6Whrmnp5QK8b9K3nLXc5GL9yKGeLmLcJu7LjgJCdKzDAq2ueLRypDx8n2d29dRKkvqqBANsQJ",
  "key28": "5QGkZ1DuZht8q7RzW7ZDyaGDwsB8xdBbzahaNqpWCuEyiSTqkKb1n5zbvthHdKCTaCrZUEwzFBn7me9aACus4xgy",
  "key29": "4Uvy8Ss2XMk63cBC9avBoZEFfEw5cz5B3Sy7mthNPUBAFzuMnu8TV5M7uJ5ExvCELNg5zxZdscdesEXuht6SqP2",
  "key30": "eM3BZtwu1BWN7PXTurajGhKCUKyvst7uxeNtX7n1pbNjoixmAJJN7H7TksWqLqdpaocFWntCdGgWSTX2xqTEMRY",
  "key31": "5KiEGAf1og7UauLgZZ6zGBP4kYT6QPz1PiKEfVMtGf1sXSkmhGn8NktgPHC5gT54qq44f6tKsMyUAQK8DLPbtF8A",
  "key32": "MxzVCMtkPFg9gAhPM1tT3HvZXVFFqtzCZ6cAoagGRrYvzYRTtd98qT1u5v9enVFWo5c3EBvcKXQnERa2YVb6y8p",
  "key33": "3fe5EHWwPyDBTHjYJiDPJieXuWLTVQrDdZePGWYZwCHVz6ixiSnxuLvMq8gZNDbuXbJQ37uH2oNssK2uvzTe5HiN",
  "key34": "3kSAK5ZxvRo7eTo3nXKW1Qsfy1oWVDTPHHijkAWnZEqoz7K8LNLDDdK3hSnxvGwygcauqVMBpWwxcBaqgEsuytT8",
  "key35": "5F1hgjMkuLLZuk8q1vo6GMoAuPHh4dxdnhEob89jdPqT2vAZD8nYZMjBAW2t6wi1f9Zz7R6MZqZHe6VHvAjNJrVt",
  "key36": "4hagcKztRXfA4ZM6irt2mooUU5WPEX89kWZoQq2ULU7m6W1DCb8ETx6cqHLo5t4Nc9rBg8XWB53Wp6sZJtqwawvn",
  "key37": "2RUB3b1JTK9eWwAqBf8NrF9PgncazH8zVxXf4fJkKML6F6P3JzcqABBoFm5eqvXSm57JQ2MtUJt2tpZo96Na5K45",
  "key38": "3MbpT3hGszJmYAx7RbKHP2UirYWJiAWTgESYz5LJpkCod5SKfmtZLtTqgJjFSVefzaur2ULfsRgsEbQKdETCSNoN",
  "key39": "2aeDbuDrMeTirX9WQ5H4vQKnF1AZyj6DBC3RnoPN8yZuhY1V8PTVGngcJgw4Rie8xBrtMcvhTprjmdZUbZNUPs5o",
  "key40": "56m8mKH4K7nNCgt2Q6CRSFrV2hNWMbSwN5yy8XyHrGLwhXnSoq5qjdprE7HZTkhyn6GuVqXiuo5GR5gi3qNx4U4",
  "key41": "34cXSDBrRV2zRLSTiHJ3yDbQwkZFm2DVnTYU8gzP5q9AvyosnYz3yUgif4tZZr5hZjtPikKYLkWv39iXLi8ykxNB",
  "key42": "5vJV5QS756kaxHu9xMAB4EJZ16yK4tLLF5KQuq8PVC9BBstANEjkdSJ13DMnyzxycGSJwM9n8XSZQ2fPS4NTeWco",
  "key43": "4eYimBsGuJpNr67sxLrKb2LXzfWFJ2KkTUJGF3N7vkNcshi92wpkLy7fFS85oANyGDcqFCcWmbL6SPv4rUPFTFZP",
  "key44": "5mpsZk5KVXuYSXmn39Gjk86hviTNeYfP67G7MihSEenH6HscJSwMHJEjxxK12gsFsJKGs9cdwpKJ8UFLCs127ckH",
  "key45": "3treFkgKhJfkukt4m7wqWWQT4gSsueUpY7Wpd6pBQZVqcTRkycYmBP4wynF2dnGWskwMpmANPNkA3hpDqLNptL4v",
  "key46": "KQ9ewFdX4C2QBcsCHuMBoGuCBbPkPya6hgxMbGrYTwCfXATsixnJtsKrPUwyKBWaTUwCprMcKWP8QBf4cjfHVFU",
  "key47": "5twcaFkToMnSgaqqkS2d966ZV3h4gwSNucTMFABEqj7u2e4pwTvi6v4TEdTxjHC7QF4kHStyE6rTGD6jyAfsgzm1",
  "key48": "6791vji6iHjegQwpXGmcGKZszucxWokjU9KDoQD7594R3pUaCJdtQcEM8msJfQBVTSdabHtibNAFRQ2PTV6axB5i",
  "key49": "24p9RqQGNzgLcdS433SZR6mwcC6KKtYcNWjqU8RTJuxC1KR1mcoV7kVEXrJP1eRjor4iqDBpqgPZfCkBRbSr15nu"
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
