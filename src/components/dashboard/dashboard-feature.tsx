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
    "uRztePU9fmNdjVy2NA9gGqyZA6ghfSR3tC3P3QWse32anm13Djc4i2YdhLtdoJr4kM8VKbvXWcaxFDwsZFdnoUf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "68BZUo5taGWwVB962FD4KWNaoLXVLQ1jfN96Ma8rzsPrFUgc3YU3EUkdmEqwAY87BRnR8E2Hhf6vbXAhnAh9YcC",
  "key1": "3KumBnoMrkrF2JhnvbSwcxUeyKxgHG1DNteyw7KyCPZDMJg9wrZW8Z5v2JDVm8kbPXEnwtErZo2BPNy9dNCNgQBH",
  "key2": "3gBkUonaEX5r98VtN6S4wDuBS36p38YDemxkZjcjSvxT2o3jgu8F9gauGMuHaZJEo7v16B6x59s7ck1ziDZcz6MG",
  "key3": "2ewz3Rx4Emw9sxSvJTKsHCcgGwn6znWmHwGD2xYRzhDjPDX6h6Gnj5jFR5AS1tmfaViSo6eNmhvMcB4KzDmCJQTN",
  "key4": "6iR7ekP6MafZevFkyBQE64KSZ4Sd2qJBHUW8NaFp2opup2cdHEhYe2CdxX2JWHwyU1PjGQbumcWQrbXFXYGeobQ",
  "key5": "3DhdBSa92msTMnMu9ohYbm2yta8ChoW7qW7KtZcWggDnJoLLtKGyMRaGAMeiF1Bre8KYCYGsGnRB99oXgsBgNUuB",
  "key6": "2tijJedKrnzpHWMs3BWKXJs3jTKtvNfap294gVBnGAjH6cH7k4f4kB7KA4b5K6Vm16rcmbcBc82mrpzXsppn6nVY",
  "key7": "4yDzkhcYt94uBy8ixjSH55xudXwTVHu2dUN6pYicLCv8mqnuhi2nSVDK24wBNyxt1MFqdS4Q5PBaLTYgKiGsG1KP",
  "key8": "4SNzUPr4DBpi9TkWpbeymCJj932fqZJu6NL9D9MgA86FvYf4E1rU4p1UmYNndhd3sqaqcest8fu3LTjnQgcbMiB5",
  "key9": "4tKHPfDBuR1D2FZNDQ3W9ZRypAiyDSt8gtWkHw2zcNkTZkQLFuUFXjVzqGjMpCLVCeRfJsReZPK97yn1HLXZ8Jb3",
  "key10": "425DhjBx82SdE7pqX4oWMeLctnxyCe7tZzrdPyLUc3qzYmABLkxGxHfEPb1TA4WRPDpgKF6navytL4xhULKBn9r3",
  "key11": "32if3eGuAca7e75vJh2UTxvfCoMvLya8pmfF2HkApsMZ6JxuRRJCKuoUEzcTZd8Zo1gpvB7fucFQzjsbvGyrCat2",
  "key12": "4Akyt1ejeM7zWkqUJTBZK9tSicS4spHAnhpDPDU8c1tyz3FF2iykaygwqyUnJYfaM2dAJcsEqFCAdLemLn8TM2CD",
  "key13": "2La4z2kF2jm9iH7fzySR1KWiYX1go4ZeweGrYyo6NnfjS1uCS8i5e9mbfzWbPKSvCZUhhW5r3b9fbK5au6NbVC1k",
  "key14": "5AMCyZtHm3KS5NWYBb9zKe9qTVd89ZJVKpgZPanusmSyiGBdXjrNPho4gg9W9UNKxxuZuFaDE9UsSBYyfiQQbPiQ",
  "key15": "2uu7ds4oz78LUP9DwJk68jdSdQoxhNGxAXdh1QeoGEuq7LyiXwR4mUp9FTaWFiUFmKJfNsTshfEPW1tP9tFvHJ6y",
  "key16": "3NDkmBAykt2xNJZ2tbigxTwtUph8FYcHPmadgP2bTPhF9auC5CM9ZBMk6cvJqLLnguRgDJUsBwU1Pu4Sq2Knz4Q4",
  "key17": "3ZWSi6Nnyf2pmQZLfUgzCZpuXbqmSAk5K63DhThXPp42hRUr2RtUgQ1H5hZL8X8uHLRVrLETb1waZ7fyyYx9qtEM",
  "key18": "3vvbDYA4FHqhu1fM3WLQFpushG2x7RwRQ75ENb5d7QQxL53YCXvrBa3h1p1ZAK1gWcXfja7KhqmY9VjWtrwau9Qy",
  "key19": "4MSJxqoXfp82ViPH33qYg25rASiFEbFXVNBRkFWhuYKrTNZ3yUDjAcYhPdzw2268ZQ2mfQPa6HjtQF2FLVoQP5DE",
  "key20": "21cXheiYMhei8feWXtRvivZavtjnoLMVpXvPmVkDB5dKp1pFmxpk4zDXB2hh8P3qEK9UtpbdcX3Be7raVcMvoJo7",
  "key21": "2V1WYyMJShXoRu4R6m6e7yifL8DKBucYnSgzC9ozT4ouY5q3X67nvJ9oNU9aLkdwNPtQeYWPjyyERenQ8mnc3nJL",
  "key22": "5RTYeTHz5jWnyBsAJdvGhJffwCzkcGeKpwZW4ysrL3Wihrf1ZfujEC3ajh7wTtUm6ZqbSeU4AtaRwep5VoCs5YbU",
  "key23": "ZUZxFqbiPEDRpB2VNSZy3uBvNQpih2j5bBhW8QEncRRbB3FeapsNkQCSQpUftFDiSoRUbNDrxUDpJY4Qw69e4hc",
  "key24": "2NfGsK6jgTzhPESGZ2EndDeZuPZ7k3YMrWkdVU8YdmPz13xbTKBNh7KaAi2DUyH2xx6UshPA5eDMpFZ9AEM5cQYU",
  "key25": "2f1G6NEuqVYZXaq6z1EQNowc8JPBxM2onuRiPSbhtgQu8TzpT1Z7176PNmLi9rJUhds4rd3WKGtBsW9JWht6h51",
  "key26": "MKE8wMzR3VPJG9ZUNEm6BZEDXYcnUGk3TP4bc2TVoYdan5qYztS8vRGoiFGyDTkusbH26mXsFEqrWrEv4zh31SF",
  "key27": "3S5VePMPaknCBMbF3YdHnZB3ZZJVEULtn52NKt8q2ygfSXTpczXLHjuNndgpEyMAdCdTtdzFmi8FCEjVmrBK5nEq",
  "key28": "9Th15HtNdvTCi2DrnT6YeXgMNAx96GWSBE41iaoZqjByjNaTuSxVXHjj5CB3Hrfx2UwTM6HLa8p9GUqdsZ53Tih",
  "key29": "4Hxz4VzhnsbtZxK1BvKeFhNL1815YPgbyzCbdqU4pqdMP3nZeJvYiHehJLvnp1Feis4t9F34mSvBWHmHr8TS84WN",
  "key30": "3xuoSUsbKVHWaAh27A8XG8ASNyUj7U1NyJZc6sDbJTBYdWVCsdBsV53h1txwy9LSGuNL9bWEqUKhPbBDrET5P3zP",
  "key31": "351h6ynYmgS8nXL6zJFipv1o9QdWbaRY4jNtKMTxYtXYgChUp5S9r2uE6CXksDDX6DN3r4kRFeXsq2gnf54aUmCa",
  "key32": "48Lirs9WmLB3BEQ1JiUmmnfhubcxcMKVb5U7BHVHZ5xD83zermGHymr2eLRXdwsoRMBZgXhDjmQ7Wv28F7tBGqJE",
  "key33": "3LrdTEW2e4DCFxiRjhyJXXfA3Lu42FX6Tc3nHLCbuC2VfHesGQKJmUSZgTNQAk4iczm5LRaw3EnX9UnoH3huK8Hu",
  "key34": "4MbyuZG1P5KbZVRsvSvUUResnpSjjzrUWTSYdvmE6MCf4LuDwgfpxuLvGKkRxEynPKphYJ1EmVXBaeGjTMPK1MWL",
  "key35": "5JUVD2NoyZzg4cKAkoXJuJ3E3C3Z1cgKvTMBxmf4HvXBxNWwcSfZ8A9awyPkCW6c2ce33ViQxPo6fm7S75YTDQgL",
  "key36": "Gfv4pFAZPiv4bJtzG5id7BGAeuB6kNDUZcGhEhLUHwD21DLE3WRxJFm8m3T7tK5RSZ9pjjTXKr1J5kjquFAk8a8",
  "key37": "5AqdcjCs6T7kP5oqHzFmfT1Moiw1T7pqZgiaFMHV1Z2yyEAdfNSrBpyKzfnEcQwo8aQnXDK5qGVVHNgwBFJLaTpr",
  "key38": "5yNFDeE1QWersmuYaHpdf8Y5RmZb3ABm4RNZRiuQKrLkT98PjQRMpVyTrC3uTsyWJr8QjHjtoRP8BDx375Y2vX3p",
  "key39": "5pbvnriPTgnitk6cYtJC1P9259VCoejK1zE5ASxQ4ows7As6TqUETChR4QWuCedMjBbbU67Ux6xWMDxxAU32jXje",
  "key40": "3zSfurLqi75STQF31yhizCbpu5fJAtPof47epGvrFpWxNwHLBtszTxRF8Qxw4WX6tEpbhBiPgUzDffUZJ1GcQJHi",
  "key41": "2uVUPpHKqzVcBo4LhVqS8qPrQ6WkLBJMcTm8K9Ra3wcnZfsU6fmo8QG9h7ExU3J9B6V6s383QxGVnoajgfwDDxQX",
  "key42": "3n5SDeo1QzDqr1FvyrzPFoK1tkSYHHkWVxHHsMFow8DeDbCRWVpZw6dTMxN6WGY4Y2ea2cjXHRgyCSiBQ4jZexA3",
  "key43": "3Ut73FnsD53rqfHDf1VX72BDmEyV83EY7yvuEHfZb8b5CuW4LWu7EpVw2QtTR1xdpAm5SbdEq2pLu3pUJ5SWcQao",
  "key44": "59KVYBs3NmG6eaQktcbomCmMcZhdij1MGW9b2m51xRDcNnGvcWxvYvKnvf9pauXWYZPWSbbSDs3HVgqy7uNHUNL6",
  "key45": "3RAsJjGP5FhBvFwhyxHspfUjFggY5CgrsmYqEc7SRLJrdP8Bq2VyYqegPPRwVx7MLnXd3wpJU8D1YK8yhn8EjoCy",
  "key46": "5D7gvV4xi8YH46wmz7CzgNk7eqF1Cj8Feg2YeDLc7KARALcvSdUHEs5nxwsW7BBanTpq2bkaDsMb6exaPrMeM7MF",
  "key47": "4B9abyV9ryFNTXLANjFKcdfKwoZyCXZeTMZmME1ty4X2qNCrYBuJKGa3rpUMZ8hT2NY19WgNEeFL6YaAZwUA6LzM",
  "key48": "38rcByXxZ6BRiNjwK4yH6wM8qquYDQtrP3xvuEbAShEw7nN9gc9UJBzTFJDDNXm72V3dXq1ptpgutZRC4T4nVTDT",
  "key49": "2MTPNphPB4JNcvv3gruYsNXCEWV9ozcKaubSfJBejUvSv7qAEsXn2CnreYP52AZ6ui6hTYmn21d1wSMzUHbhB9mq"
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
