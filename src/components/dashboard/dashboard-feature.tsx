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
    "y3tgWyWzEtvudBiXwXRFFntSNbnL9Up7meNrb2PBWJKjbkxoJdq9btSKJMYv4KdYr1aBTZUH8uw2LEhtruW6TUS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NApCzYKjkheK1h8bHkWTfYSTJ6cT6CNHWrqsSUzsZEjBq3NyFYqc13gfKqdegzEW5GGQz7m2GZzKsLbxkQDVfsW",
  "key1": "ncszcVSfKnCL58yGNQaGsYfbwcfN1HSpvTCgBgLzLrs2afMhoUaZqbTsS5kPP13oXyJ97pS2XwdXXB1xbTPUDnP",
  "key2": "2QDLEfZ8Q12kXRxds5qzka6hGcEpJRwUN84GomAUvYq8eu6uzgDWUG6GuGpuF2ia2DXPZXat8q6DT7rAdLLadnt",
  "key3": "37EuuWPZzpBjU4VMp7sGUASMdVSMRj5KDyLEebAmVa7AUSm9Bu31aYY8MXmtZWSzxe84nTUVRT1ucrTCoV465LAs",
  "key4": "2zEykyKkte1BU2KB3zGbmVkkN5xLjYBBn5d94E2aBwXCVrAFKaF2HMiVTat1zuRxg3TH3B3RLdJr9wge3dUb9Nbx",
  "key5": "26zENwbKSwsWhPtYBMBH9TtEpYH5Bci97kQUqfPKo8dyENRqiNGfbosof3E6FcuwX2tCgXjsond1KCowPXE3ANzG",
  "key6": "cAqwwgFsdv9hEKu8XiwaT6u7KNY4AJE755Xz1WAtxESycLXedN6fDSedNc8LndpzB6fHHxTYyKfe6CWXJ63AfU4",
  "key7": "5h7HYdYwBwB4pr5LRWDd6CMvWBUpm2rJfiEPvVY18zoz7K6QPCnKm92Ppj7heK4rieWcvHsKLsXkmSeS6QDcRVCV",
  "key8": "5xBoD5XgiAUCutKF2tf7y3KGbnpn4QPmtmTkpUf1Lf3tskM7pcQQnNz9QQPRFtMSc4dJnoDFeyrMjEbchZZ3rgFq",
  "key9": "4rXSw1G3QNYRtrD26ucxi8o2zVwSuQKPsZgipVFgxb2oyfm5PncoaJrmEH6ZxYALKPV2WmLjf7MoSt3cuhpkDyKj",
  "key10": "MJzeSYGFgAyvNpXUUHKd3ZtjShrL1DFM9EDCqBa1bLesLbCZW2FmtwGpbobLs1YHXT4bbdp1jrbXax3ELE82NfJ",
  "key11": "2rzbYuUAhcKziip4szPQUmCfepcgb1zw46EqZ7gJa6CVrEnbXQXLU4N75z6ggkTuzY9jSXipofESr2ZK6YWF7i1H",
  "key12": "4m6foZG2AojSuGk1RwoiDbcQMZe36EkFWiBdB6FZcLu1LMXUiMq9vEeY1smA3atGzzusHhpyBuB7vdGxaCgnfDEw",
  "key13": "2JEVSqs2LEVYdRmxi9w2aciRowDVkW7zFbvzJ1HipXQ4VYtrguRAWa6c4Qj5GFN7zJDkC7t1ChWwVYXKSxvTp53K",
  "key14": "58cwRtEzyL4JiKzU1253JBkBkuj369Mq2PsK9KKv4Q5vNm73QrzBuVyWsnPtCRJhzezQLf2NuXTU1RvJtzt2Ump",
  "key15": "5j1LqA8JW3VyitcomZ8DdP3SXKuWH347RcwcZvuDCjDoP3ZqGhXv15rVVeTwKrKzVRTox8TyM7ZX3kYWyxhoAwiv",
  "key16": "66NafBfawMHQPSAnyoggLfh7GBV8PERUacpDhhp8iYCAWNbxdhxvQnRyxL59H6PTkTkkfhuy8HYe1sLawkLztZoZ",
  "key17": "5Mc17KQsQdLMxE5uwpyXaFfazo74KUNpAJp5uTSccotNNvPdj8VqbJR2icy6EZJaf7YwigMCNvCbsYjrXHoDDSuC",
  "key18": "5WBasYsyuKpBfcczNYHiabuiwSunWNNjxk67dNRmjdcyAYQtQmGDsPWrjW6zr2QP9kcLNoysJfQbW3UHSDorbahG",
  "key19": "4UDo8hYY8kJJotREW5u6r12oS9D7AL6NfDjzMva99jCaGPXYFSpi5SMDQeYhAcA3jV6ZveB5LCZVzxsXgrf5n9Br",
  "key20": "4RPJ3fz6dL3dDEQ8HQy47nZUFwNL3aa13M6WGbnGeoYPdfztTDnHUeBy1J6uNAJgdCqVptLzNG7zPDAj4uV918nu",
  "key21": "2ZVa3ApStPncSA7uciaehSjWWiBGXwWUmrHJEzKiUFLFCasZvZkxrQPdpHHMUmBJmYfB8hdoZw2EA8R15PSA7hGW",
  "key22": "241ksJFRbL5oUdB9sSaHJE6gJVMYxugcXJK7u8FHPeSmqYVQ8J87h4WFou7q6tVzHrcxw4z4Kw3PMbX1XSdUH3h1",
  "key23": "4qyKJiN5LhKgkcUibY5dCt8pMc1u6RUCg22AG6ZVhg9QHtbLGmivCJofqgSVXVjtCkJtkr8nhacdyLeTdpXHwe9U",
  "key24": "4aRQvLN2C5w4GTfQiXgYHwirYXNana4bTmrmskqgEYdCTpTf5YrF38PyCamX1br57NVvgCXCEnWSBvg93bFU1bCH",
  "key25": "5zLjby5nTtab7AhxPHZPaE8HTmowGGJhoTGTgVHkfpxVKs59XsTvXHwoZDBLfpzUmiYizqQaWT9HGPUN4CebZN2w",
  "key26": "4TaAbBG12FaAPgWK1Jr4bZ1HxYNnBXTbLPvb7shrQSmToaAz91XXeRQw5xvPvFcuFnCC4jEYaKyrQdfYoNcVgzVT",
  "key27": "bKVAjfko2rPUXUbfz3MiXxAD7wB51FE7HppGmJuwCaj9Art1MuNmjgWTQWXbuRNaSibshidqydAC66rd5Q9chES",
  "key28": "21qU1TUGnUQqV9R4jHS2GCTsgQx5nhnPLzuGVpMKiJiBABZBXUweMpQXVYhAkW4ZzAtRZmTqMkXMKgKxHzi9Sns5",
  "key29": "4UcYLf8v5Ka7nSsePw9d47ohLGg8YZngVZkSofjBuJLQpCNjor9fX1DH93xZtbdEbeYsHPm4Hf2dRF83doUvC22v",
  "key30": "47srHeff3fvNpkyASCRAJiBVPuaT7rZyNJ47Dz1SS7xSRnE2fXP4AugAK4ZQwppBGgMxQNPpsMtYWsB2CTE9be2m",
  "key31": "5Th2xUXgKeotJr6yhLRWfwDggbUzNX8R49fkPcMpDWk9qgcWivJBPqUa54cDRdVbonCcp4e6yhGMYHggyW4Lqa7u",
  "key32": "CU6R9hh8bvvZWFFh6dp9kDd7zjQgmQgXvzBxmu1JuskmaBHZhBA4BWFh8Fv4vTm3tt16WtUrLgm4EgueT8dhoJB",
  "key33": "2F1vBbSCWbJgDSQL7XV4hYRoFnGz9PjUtyw7sWKW7SvYwP9KsMVJ2Yr8becjdESpHNhzpvPKr393wWSrvhuHfJbF",
  "key34": "NoLwEY8U16Zub4xwXhwyPnyUGxPCK7UNvFG62PhUKE4U3Ccqncmd9LAH7Te3dQEZqFHgBS6BdM7FWNyty2Jr32e",
  "key35": "3jvbDXX5cB3i4QUMY6Ph3gzaTwnJzJi4Eg3gjU9Swmh1f6vgUfpP5cDRLpc1fem3LNTfdmdYL6dB4trbXs6wfsY7",
  "key36": "9kVcLb1jU2mt8mNcBg1rcExxRDrfC5ByBm3n4RrJURLy3VMh4Vp3Bj86a3ccn93AMy1Ta8ak2HD9Cn4suEkVz6b",
  "key37": "65KZxRB6wM6nAjioViYHXnLFVkX5AjxZ69jYaZnTVVEraYSja1E5brdPykwKmiXfoKnZHN6GNHATZTsubLqW3gPU",
  "key38": "5hPGZU6v3NYXxyVgCR63sCiM6RP9gHXZ69u7hFUMpvyyj7ci4onUGaTcDHYaxb3YnsM4no8q8tV6hcSPhwJmHo4Y",
  "key39": "4Zdw9jg17TEVEsFg4uRhkVhBZRnSEtoRu1GFkn145WJ1vvcBdmzNFXzFbJo7UwKnsXphSiHynWfPrgP73rJjq4tH",
  "key40": "35aAJwpVME6wUELTSB9j9k2xKWudZ7cA73uTgREzBQkmTYmpzGHRwpVjAKCnWKwoNkjwkmW1zvgQ4k6xqhxQmk7",
  "key41": "5Xw2wWJaKxmNT98rk7gK3uuEB2jkQtJFzAuPVAZyXmSNC5nYN4CHoR2WwBJh3LQZKXs92JfQfada6XaLq27F1gF4",
  "key42": "62zxaLcz8s3HHRV3HzjxgEmaqmK1TGgks3Thr7cgtDaA7PQRzMD1kAXicpCfNxEB7xrutmGT9suky6ZBaUbDZSCw",
  "key43": "4M1fjf7X73gtDMTph6PW1uoBLTGUJrSigT1m2WWaG3hHsPYrCn2ZgwxjE5sspBh3TW1MaoUZvrMV46tkBiyyVuLz",
  "key44": "4C8x8kxhBP9Mz8ogmYyzHur3xq6HDiezwovtVycpSDjCfePDz7oPR6bZzJ274u7KfJgSHrm8tXMhmWHAFVtL7pFw",
  "key45": "2cVrpuZMg8CG8QU2D9EVDKdXeXN9uzcM4ah3WdeScjukBa6T8Qub6hqWnWuyVchZ43SbYxs7Bxx8xLyXAS4yTNDG",
  "key46": "4xWYiMc65DmgrsFJ4G8aHtK5jSqTq2KeTKt8qMSALupvM9UTu3CPJXwemxu7sK4kAK2hihLEL5FmsNehoEno4Yun",
  "key47": "3pPZc5wMPhfKczKuyryN9xboC4S99unP4xxcQLWrenZtk5MjKCoMdwqDeMzM4J48LQryeSDs5EYkqKw47ry4SUXT",
  "key48": "2v8vQsZ8CQiVw2ZtjenZ8CA4VmiV8c1SNjj2QFoqMHWmHcGUo27KiRyrfhDNqQoJeLoeBiSkqGXqZF9k5pJuE8jc"
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
