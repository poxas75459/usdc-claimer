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
    "4GKPTgtfupmd24WtG3JRwitPzrRhpePiNR3aYXCA4x65JzyEnEi9U5cQ6uzV6nrNavgyjmJiyuba77J1n8yjP14d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GJx1enSePZBSAW9avG9FvWV7wxVkC7aqoq3fR7JzXfHFyYgDSpuDAEcU4LcH1oyeSvDdKhkNEZJjptktF3hfiFc",
  "key1": "2nAc7YjUNsGJHtmHj1Sat8GBRjWDdKGxG2Wk2JWiXHWNx5f3gSr4ysnbyt1qj2vG3b6QrSNUm974ca7EqukP2Wxv",
  "key2": "5tHQZDZVGwys2adXq3VRgkBtyrup2T9dA9HLqtyKbyp4M52YZ711cR6m8wr5QAcAS4YT5WNrYK2GMjdEdMJxPZGx",
  "key3": "4zDArEZAYeH3GcWx9RStVWyHgdXjwYAJu9GuQZo9gnbeEffuh7GuYrjtHPBFn9xYjprFzcpSiM26GNDLd3AAGgUh",
  "key4": "3DBK6g6hThLrThQkqRHso6TDbPLhxUEDwthkruEx5XLBh1mYkVKBufX3E1ZX4yrb3GsfqmeDgst6Udy4F7S2DSnv",
  "key5": "4tJ8XX6GD6sTZ8rwjkpJd9X8bXKD31hDYPpgne9VbswpbbYyjYyQDfKMVXMNDQszAGh2oLF4h1BVD62STvZAbe5y",
  "key6": "KKM9Q7BtiMHarQ38oMoKn6UvYPEKMMhnZbd3pidjBA2vmBPkmTBN7kFdLAXtbsdgGxz4H2skC6scG8qoxifyEPB",
  "key7": "v2LfV9wwKRE7DVzNNmJi8yR436xGDow5aC4SuTPAibSFi9xhY1ZmcDhhH9jWHtHHgRa8guTGzsQz12ATz7yVbb6",
  "key8": "5Ha2ymYH7oTRd2pnGefDYLoYfAj25e4QNpvxnUGiMMre1rvEoGKTpZd7ebCP748t6NUtSMUM7LeKPsKMv7da7ZMr",
  "key9": "5DfJdW4q1o7dMtNCiVoQuKHhuREfByRYazN92qgAc7ofoYU3Wb1h8ecWKxZc4LM1SWYxGqai5g2wRSAD5hRY2fCG",
  "key10": "339RifVTLFCa5u9XBb7xuxheubvqMzTBJNufpwgyKWbaoharQf5cou4P2eQ4VVHNqA9vy4ipndDdF6QHckwFfPMA",
  "key11": "5xAReUhDYa9dwaaPEHhteTJwYEsLnLuw1osBauCDCnZDiBDH8r2nwgPnn7D3ej9A2MMvWQJiZdxufNCfvBGYmmru",
  "key12": "DarBfk8WE2RK4GwK6ieFzN9QoNSz7oLSLNaLmeB5bqmcDTD3ihoXn7XxJTxJ5MpuAUSeR7yCKA8XjNBHJvFW5cr",
  "key13": "UdhnD9hKVF5LuoFVtBMdScUyNr9MEPwjUTv1ofAQYvL98ZJQ7VwPMLJN1LtZXH6Aa1bSVnJxA1MeYd3juqEeFs6",
  "key14": "3fruXbv9vEpRJKJRq9T54g6RdAHz7NfEMZDB3Ljws6q7N3npUCdvoxiyv4iJPmNtS7tkCme9snPLVkd6ahoWyb9q",
  "key15": "NFcpbdK186hzh6s4hZREL4MAEjVAxyZpZqMTRzNqcCsEma5ks9eQQiZ7Q2pvqmAFdRTEj9vkey98kcbG42DCQZ5",
  "key16": "59DzqZhDxYMe5QHq98ryfjEfpWKR3yumxNf3My1roX58kcQrbXtzPKunb4tixGvoZyvTdDGJcwqKY87Mccy5K94a",
  "key17": "2gfQD1u8DRpaYS1CcGq4V1SzxPEmyZrDr9ZJxg2oNncevPq92tJQrkbqPMHYp8Vvz3oZJPVsSD5RSHwqNtTKSt5Q",
  "key18": "3c9NcruUXQ23E9BTXmGAK7a5gx2UL1jE1ZaEEVQxkpH7oU7GaWJjJwuqHgAcoYXc4js31W2Vwv7Eq7MwFK1YUtYf",
  "key19": "32wTNsr2iYWsMqjARNgaVpMp3MDgxFMGBvHaZA1Ed7wSHkGqETb5LB8qH9WmSpqf82b2ymUUmMo2ymxRbHgPMkCr",
  "key20": "5HiEdMLkXX4Tz7zBFmUYFkJHxSPfvPRxXsJtx73YyQNqJPLTG2NCZqqgTXX8RdLLL2QKFzaUQuCuSStxFMRXeF5R",
  "key21": "3QW8py1NDs8Whei3BcnxmFaL8emqFwPEHFGLNNaQvR9JRydcWRnUnCJxp3R6r3m2aGmthke8rCfHLo3JxP24YNrq",
  "key22": "4h8RtwC1iMUV3Tf92u1ipXoKr4e2ceJZGhfx2Nr2VYABcrXM6WGAudTsopW3sfDvbED4pBT35iWeUqVi9mYjs232",
  "key23": "2uLAwwYBChRHmDc589JVLZQTMMJexKqnPWUz757nycY8a3KNfzMwwCxUgE97M6A4NoYKoPGHguU3XN6DdFzEhiPS",
  "key24": "5rCNREyLmM6fdjRSzGbfR8ENH1Ab1Nrvi2qxR7XZHa8WNMmKfhybwazPhh6RdNH3ZJ1sLfQErs3PDrukQUQ1S5B2",
  "key25": "61g3FnZEyyLy3w6BmRaJCTNvv1h44o6idGmHB1MvVYCrZsEfiTQVbuhtaqpgShrSovAGQt5mtfL6Mj8Kemg7P7mH",
  "key26": "2VTugiAMi8ZJ35TffC3WMpyGqA3QCjebNSC1P4tMy5SioXxT5Qn9wwpeq1HsmQSFXWwnMHhEw9GausxJhJXQLECm",
  "key27": "oazRuaVTNFrujxNy21Vv6fdkzCiEeQZAusc4y8Ufxhcj2HayAbU8SU52aNk5J4cz5w2gV5AHoqYBWBt9DYSZUMp",
  "key28": "3XhTe7YToeYeUZdUmAaW8Pn2cPqjedwrp1Eh9pwvTYnhXNhdEg6EgDLNveCoBsX68RhxTyr5fL8PCxmUawG3c1ND",
  "key29": "5zxsXpMtCa98qzVWvPqiXU92mkMLHAf8JYT4cjt4K3RAW32Lif8diMjFBLAqpJR7fCusvbSBvHHqSYnCEHMkCrVr",
  "key30": "22JNywMdkmgkrDajMMFicsXfKt1nTaqQUrUQCm49WZXnuNngWeBBD7xKudZwgjM5JWAXeyzPZv9qmKfM1MUhvrzF",
  "key31": "5ab3dMaYDc5kmaKAAiyx3arzdwX1Wsda71iodwMNmGWQDRiGCghkRt5sYdSDR8oh46m65oVnVJoRg1a8ai1pqZKn",
  "key32": "uGteuanaqQBn7FhMKAUn8bwTbCtjMzZCuVVQHYMpN64jbCSNBfwRhmXQSRvw6LprZ3nQBsgpfPfHdWQxZDackeP",
  "key33": "3TA2bQkhUjdCrTvEe1h2xz6tgfn6bTgandQuakyijbVZxZc83Pt7SJTQNGJzuk16WyS4tRocR4Qst7btD5f1Pw5s",
  "key34": "37NiRXrdiq5eJSvaXDzsCPJtqgmT4WyZoYFRAUByP2gExdyb9cu5CqHj9Hj91ayp59FeSUtSsjQLYrhqwpePCRvq",
  "key35": "38u3KraopuJqq964NpRDjQbFG9PLFjWjvXDYfwCy33QVXsiuRQy3UVNxs4h6BmYXLvAjkT2dTwdXmL4J6U9GYYpX",
  "key36": "4fCq6GwBDMs11sWm9qpBUyaLBjYLYXoVHYr7ThEo5HhQrrjfRz8QhJrAuRE7wwGh1bG15iKw9sJueTHTWrBcx1wU",
  "key37": "2mMTDPKrFZPdxQSTrjBuq9pe6uhzsLAHvYyA5aKoxZwuBGkhR7xNa38WdqKWvm1KuhEVBwpbTqF5f1gtsXtJLVm9",
  "key38": "4rp1d2ZSL1jtKSLLyHfeo1aNX7NuEKej5PE3s8e2Hoi43WRVBBRwcfkWqz2xToEWLPEYnfakeQUBqfbdvrrcmbb7",
  "key39": "64cYg6gNVhjX6G9LE3U53W93Apf8FjMmjcdH5MbEk1RxRccvRcih8dmP1uS2j4QBFQ8ncsz1qncAAk3g3KUpCWKY",
  "key40": "3QwMYw93a4UHS1U1Y7zsSXoVLpfNL9xZufEDhrVK4Zj6sAcFzBGeKabvY1sRu3nfQtftTLYsbmGiWgh3v72aWmhr",
  "key41": "2FxkJ3bNsmqiujiQfCRzyYBMyUpvKNsQBCugcEBpaDh4PePggnKKdEC4xAALfBUaqyDcMZBcC4ui8abDstuacYU2",
  "key42": "4ehmJkrAMsVN9u8y5nhpWG7DdogQoFQXQfNcjD8PYZtD11vV2o2jHaFRxYX4VdTNbMX9fxxpv5xSw6t87YdvEtAf"
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
