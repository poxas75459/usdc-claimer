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
    "3gSY7kWTyuLXWzGSbAnJZTbmTF7Qs6iw5c43QQcsKJE1PSeTsPkGDMSPHV8Ffpi9PSMKJY2j5568uZk2nrDUSrm2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39VrDQvftzy4nxQQ2TtzXauEPwR6n7q9aAcuWNQB5frrfGRaTkn53ZaLXiWjpdzzTrQEHKHPCzFJVNm1xxN8nvog",
  "key1": "2JA23t1hoSdDjJPsTyzQbs547ko2bQnyUVku7Xy48pxYzEUUVbqTcrpcrLE3YorHPxNU7EzMyT3Ce1PdYRp7mZbu",
  "key2": "43itp6SAyctvKkM5Au64cdtFMYEJNYtaE4HDQv3z4XAforWoYi133ok9TkdsHdG9xJuPm7ThAYm3D98vaTvJxT41",
  "key3": "3ZZhD1YyY3zfgp9Q6AZ8DvbA29MK1A7zn8bK6MDintkxRVtXDWTqjYDvvaU7U2DLEkPVEtEoUXxbaSYkpPbNn4jh",
  "key4": "2SQK6qVe4JtRbr9BkGzMmhGNHZPxetVK2twN9z3vhM4TmxyXw34WHE8tJmsB38CeuX7WJgTrHhAV8jkHubMLzu8k",
  "key5": "5dJzUmy8QEWMD7xBmAcofTvGFX2m1xSQMUGuEGczWcgwPGtgCLXcZa3uDzpa9Lx1WpwUJcTNqV9aPsNysTciNQ4i",
  "key6": "3Ze3QA846MCBZnyWi2cwsKhRigPG6NTnfqHmBMHxEhwMGQyCKy8gYbfWTeymEi5WsgXG25hrCP4tKLMXNwhmR4Qh",
  "key7": "DhCjahv4ZqYxknfmTzc8LBhSQzDX8qzYUrKKnSjUwM9MAFHsAcKycgmDMhJGP3fpM9Wa8Se2WKY2FszbXrJh3vM",
  "key8": "VuNTZUJsSL6cLmysTV35uKG1XRKVr36B1tfHCoixxqvWf7s3hdC9sMu5Vrqt8DdPgyaqps9VGrJTLVmqReVbwjT",
  "key9": "2QVHMhK4RrE3ZqAZDDbYWnyYGwbaNiZi6J9vu2SKMsFG7YXLa3PJD1z3oq7Y9c3GKJhLfrVZHQU3ZNNsDuzcrPsZ",
  "key10": "4TWowkKzrxqeg5WmhSoz1zYESc2AHDK7UJa6d7fT6ykxp5qEAQbbNFzu6Uo1xFWQ5TUbUyxxEjj9wWq4Va83vWwE",
  "key11": "EiWmRtsygaaVqm8FhW7TQr5yJxh885osAEztWCrihaVLR1LZnvucNbcLLVRrLQnRFY4JiTHegzzHGUBTWCjT64q",
  "key12": "2qUwBvQcdT5s5wNcJPAaZErgXhWAVYKM4KMEhGBW6yGkhuvMzQWCh8divwAqbxRNE8Ze9D7CPVzYgNaei1Ks9acm",
  "key13": "4iBK8G46DHQtwNK1hnXyNBPNzBiuRN5sHxZMfZXdWomGsfGET9DyiXpJxSQwosrGfs9ejfiK7cyyJuAnncv6ppZv",
  "key14": "Dcc7MZtDVxBdaMqzJR6tRCJxcpQgSaNkg9EUAZ3S4FB8AyovCaSdu7V1j87px52f81FjsfGvX1X4TxsFPmeQQ51",
  "key15": "3JX9EVntsxkkVjtdr985JrsQmJKNQCEsRzkmaeiCEXoiT6GdZzx93soCGDgqF158afF4Bd9CgrYeC4sndmUoY2LF",
  "key16": "56cZuomorZRDV2DBXiQRSJmcJhLa6HoLfQuqxNiFLtwCXBsnA8G3RWgPh9CswJYoVH3XdUeftVhCsFNck1Em9YNQ",
  "key17": "3iPMBd71JnsZdSagzprNqSEFvnDi4Fd32tdsaQjPWEiH6BLMjffX9vortUjpEqfZBkQtGr2Q8GfLpbnHnKqANxR2",
  "key18": "zed8JK9sahJsS7dfVYC252WQTGWTgMSRMUQ9sTcxANYimYGAWj2CsCjD1JVna1ZR2TpxX55iEiPtSwcQg2T9QK6",
  "key19": "2xNoTEf58xmKhvBdQX5BrQMeGYmiaCSHz1vnFVXejcdjJGz91KeiUSKbA4ktx9o5zggLPYmsJ2u166LN4EmgqgZD",
  "key20": "3bj4CZiVymGSgqmKtfgnNC3v83QCcrFZ5EYzbutQs5PNxrsE1SwJhGm5j1A9c3zrBtDL4yxzH8ZdKSweaunGWoA2",
  "key21": "KC6sWk88H6MHXpRsVkyQwYUwF1JkJSCDaAa15HhYeE1LBH4EYkXFeZTqAQCp5vNwgZzoZL7Btt9V2PpiuaXJsKc",
  "key22": "4An8tVdEmU24GPnx95g5gadhMJKWB6sbEj5HvnNjWHPvKHey8hQV8GdmGYtW5PjPqtRq4XBMXZAt33B5NFPxdXUk",
  "key23": "nnmKwXJcZxP4BArubiGguTRkzG1i5NBxMv49aDSMhRtvPvVX9SrDqwKxskiSyk3qk2JS5JFUTRycT4kHRWZ1nS8",
  "key24": "2TTtHHJ1rtGXcH5vPnNgdTDwQf9GiuybTNikmfeWTJ6EBmwYSSPN9LzbwV7T3mtDNTKrS5QbAnfzNgU3qqpUmGoP",
  "key25": "3fmavnsFfFKvf3wzroMuumzskCwjiTSVrKZ4PFNNspYnNyAvknFqzkRHiZwhhpTdhUhHi8xjSq7bMBwWYucH4cgY",
  "key26": "4CReGZk2E6TeQ8wSx76WBgSpxBb8SpvvD2b7o3j9AxkKEdbMREBQmYTnbQQW2UanpB7auKzPYqzZ2cSNKWJgvtjj",
  "key27": "2ziURR4ErDmFB4rD35KkE3mMYRmn2uPeE7Li4ShE679vsZpn7zWKhzfEnJdTENCUtxg2GTvr9HAoWBiDY5googm1",
  "key28": "42RnGZFb912NTwXPBsTtfw2p1VJYrJV45DPBQCbbi8614cLQYM2A8Qn8Y3JhYwVAYiBMv9s4nyfScPmGL7NuGP5P",
  "key29": "638LveEEP165sXBkTR7mcrWRZ45ranX6rxvMgHHTbtyCGLV7575JkBMMwUPB6B7AZTmobHKZeYywF6h8myzscZE4",
  "key30": "4uvxchzMSkKpoM4hdjDPwUfrnNBH4jc2ghmicpFwZGpSPuyTv5ZZyiJjjxnVMY8sdFr88Wn9XGXU8SAV3e7rvTsD",
  "key31": "34ry1Z5fwng32ZABuzdw8HUSkudvU6p7yJfymfqa1o8Ye8SU4t6QF564MdLUTVvt8yydiymcVSa4RvGwVnGDCgjF",
  "key32": "d9c8TX5peUaMfu6GNtLTet3PkS5s2228q7th9ptNmgp9XmU1wLfGaRHrmvKwSPWAky7W7Dben368BiJhfC3fHmd",
  "key33": "3iia1uEcq3v8NTYznbH9KCWpXFHoJTJAqxsi5KZ91oubSRuEDjYZw4X93oRoo5G5PMMxsE2aWEzGmjagCE76zRwC",
  "key34": "QaZ7Y3zGfwc7P5Ag2qRwMz4r3xgUY7DevhfW6bmZCKkrtGJi9ENfiGoCmvSbJmwojciDGWSe5UNnqJGTGk1Z2Gc",
  "key35": "2v3aPZTTsr1wNK5Xi2k66AaFum3f8y3SNpC9y6Vzaw5h9qiY1BL4hnSFt32eVnyiPhHo244tZLvTPgB2kWHLbpC4",
  "key36": "2qNDcrevSMdfwuNm1ZgdumfurvsDwEaWjLZAkJAT4MusWYxvh1RQBxUpb6jtzsLJvw6HS3TKqwMvfvQaAP6nHSSS",
  "key37": "2Fr5YNKa6gTrJdSxrAkr1eccRim1rwLK7dKSenUa8pwEiuGQcnU5weAbCepoaPD1DvDVU4wWT9d1bppqixjQxepq",
  "key38": "58fJYE22poBy9tZYmyQ8Zqf3LyDgXksjsJFRWbLJtAUJNGCU4ouRsaNiGWR9sLhoTvp9ekvhVToS9gbTwMb7fyQU"
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
