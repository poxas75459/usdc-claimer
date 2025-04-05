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
    "28MuH4THuTemAynmoGRaZUk7mt19XKWyzT4b8akAWkH17uE53Bv9ZQ5xx92BTdLrQh9HW5G4YtsSNKnKLRZKDxCw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZkDYmTk5j6YWDZx2CjQPYavJiPgESuBMCAwuXMJLYQkvPPy4vsYcJNtgtzh5pgdWwf6CUhhxTok7md2cSHwoPCN",
  "key1": "4oTtdzBZ15taeeCe7res7qw7BpXFw3iZjvgbE9jgGtooFFsPqoQVGBV1miwtHRKNoNwc7DwzV5L5Z3ryBbnCPSX7",
  "key2": "5Mb8WnrxTMzh8bk3UgxWS7z3zMTDEaZaAAzB5VgHVHb4Uw9txRBK7GWabXaUV6X73zzZrbqFTNn4ro9AmQGzFGAc",
  "key3": "38kmj6Qoobz94Uz5ZDr7C7opSD8RgV29hzKU9Wif6vFB5sfpk9r5AiEvM8iJazC36xS44YYmuvHfvhiY33nXinDV",
  "key4": "3ap8xfYsAVqVk7tz6yvQKeuZdJukbZGk52m3ukwwxs6Jsrrbdz2raRAwuQkMxRDbtXBkau52BRRpFxxMmx3wsxVD",
  "key5": "3RQ79gTX4XETFEmWER82tRyx4PLEVeUYAUVdBWfFjiJub1MzobfD3gh1TBqdcELsmKyWmrF5BMgNHWpt4WX4rkjY",
  "key6": "3TMZDrDWUy6ZT5Tr35bgtBA23ExqgrorNfER7ZV8syBJwfjJbrZao9aCDCmCqPwrS4xnt3QnTs38Pk41xXxygpYV",
  "key7": "5kxHAXfN7v2b8NVsqHRN5AoLFXjHQFbUWVwzdT2xf6azXy7rLxgiUNYKHNUFW2VKc8epknqnGu5QvbLdWpL6L84X",
  "key8": "3mKgoV3xgdmpMoA92NrdoJsn3EZ3ozS4uNDvBdtysoMekzUjh1hYFKhtPtSCiic2VUxyyaVmzoeY92TiwJSknezo",
  "key9": "2uhzqaxUxR655jYS7NmeEFwgrt62zv1x4AWvQgJg6CJiaqBXKLx9XCdumERe8Viw1E3NBt3rPKWMSqHi8PqrekGt",
  "key10": "5b81nSP4FkQV2qniJcyc5TPcvG7JRGQvhrozV4r5u7uctLCxqL3tQUxrCq4Py8ACzNLqkHo4aPs4q94waEvKgmXV",
  "key11": "KZo4N3WD9Q6XPZ64Bppnvrd3e7NzkUhvAaAeKLx1Ef5AbkFGvEUXKKu7dGXMyPjEc5QxJxC4xBj1EUW2Af7KUaG",
  "key12": "3bUeGzvuVTiBGZWrpuUHNTS9V11ANu3acEbShCzWDcckvYLzmx17iUFx7GcBjw4CMuZYzpU8MvVHkAtVhmmdajvt",
  "key13": "4Htc5wwBwjjkAb798qEqA5pqsyDxhFLM7CwFY2SXfuwzwfu21riMyUU4TQc9LMiQve45WCLhTVji6swBukMfHQcc",
  "key14": "4nocqX44oVbngtnMVRjgLuzhL2k49GXiTF74J4jrai1YvZHz9YiWrd9gwqoruf1ZcZSm79K3DBLpDkzUKRthNi5R",
  "key15": "2LBVwzh2Qabt8PJfJBTKr6Kuim3F5NNLZowLMZCCrsgPU2HCKFKPcqRawMMo16Md2nWGHd6M8fxvo5emtEkfukrD",
  "key16": "3VXsjxq6UGS9LomrdRmHXUNpgU37oLvJPs1L7DU79nV64QrtNvyyAjM7965NDapDsoZnjqGSyxR7NhnBGYKUNX9e",
  "key17": "umbB9naxAe71izGWm1GeJTNbu8GJMMVqBFQeJTfqd6VeaWSKEAbhJ4M348dVSF2zCudSMLRFbmRtyZ1ZZChG11F",
  "key18": "5DW4EcZ6Ph6YEnbxF9sYcjGnJ5Skj2E61zFAUrEJvtUzayxjmEwfVPmAHUjLHNJPtBLo1NFzBVQQR2Rqzu67s9C1",
  "key19": "ttmhtC7rxfhTxJKJdu9puUyTBWy2Ah7xX4QKcPqbEfa3tD5PzAFKPzmxwJGqyVKXabAfGzdTeUJXxR4vEBhjjHH",
  "key20": "5HkddczLqNkkuVuwe3GEMLwqWCL66ZpGY9nNb6dShrc6G6d7Gmq6Yyf6qsv7xkvfM4nbf941bdYZhsG634LcXZMg",
  "key21": "3EMsgWHwtSNdSfeNrUCasaevnvRXFoqnFLzV2WdPQadHFLz7bjw7bQRUm2DJyR358nmwC4BBqfhjs8S1hPS4Mehd",
  "key22": "4QRMdfUWqPsUYTwtVi1shFUyJAoCca5773oDD9JP1HC34xuGhS4YGYFaLk98nHHgGRbq4PzDpUAYWabjWFH6KaGH",
  "key23": "26DN83oZqsqUm3xLjC4GtTzkSAfFN9B2TbbicTQtvbvKJgLFKRUhbXG5yLfW1mKWz1HLs3uCntzWCqywXt7xSWTK",
  "key24": "5E7Jt1rWptP6aGTMfspCS4UbyupCEpic7kKtsxD5TQ6yNfD2S8KXUeVYFKiUn4FKFJiPXaNvGQg8HEvThQmozhWx",
  "key25": "5pji85TSsRWNKEJzxfWVn5Q9A3Chn7En921ooeEfjdTMopqBY8BRW3AbRkHHMYmS9a1eqWhkDXo1sJdcxh17XXEp",
  "key26": "3u3bmBz8h6yQ7KkBPDFQfufTDrwGW17vWkdr2bfoSDCk25yyeBHbLgdCN1m6gfMuy6zUgFihKZXsR43dJVZEsn3c",
  "key27": "EDc1XjE7oaFmSw44ihrE4kEaHKxQwjSHTdSTgJGHxC2PVy8rYo6JXqeUX5Cyd41ddeyaDbWHPRdrM3FxZKvprLJ",
  "key28": "35x6qx2dStkLfHNBD4G6ScC6qjJk9jChrSwgyemRF1egoA2n5PyYTNhqWMLkzwVdL8JepzFP7YQoUnefESFCJLpd",
  "key29": "5B1uGE2k5RiFnWjJF5wiYPLXLEPd1596sn9Jktc4aEfBRyiveox8nDGDeF88jwZU2UAJpR6SE2t2KWQHUq7cXbUY",
  "key30": "5nMC7RvNRK3mkzJJaBknQKdXXwu2sJ19nHHp3mLW7o2LyByspBeZKBQgYsavg1bQdm61b4iwoA7bmgxeHJJWNTo3",
  "key31": "22iMTXbNUEJJyTzYXTTDsnR1by7U2pcFPVgK33dX2P9SyAnkqoRpV7cm9YPEQMvJN7FSJaKsvq1oiPWtU31jPz72"
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
