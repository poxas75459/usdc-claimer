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
    "LQcsE4GvzdAUUZb7orpPFknYriEn4mhcAH7jFMT2p6tvtWthidPCFaiJPJtYxUhKdguHGtofPnNRF6HuJtRVQnu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57F4gxUeH7hTmsFishxG2i1ifvF1ZFTx21Eavv8qGrRqahmr3UBZ6LQKS5GKb6ZUacTBmhRQrZadzR4AULLsRiHU",
  "key1": "4yQg6GkzoSnA4W1vyVvpEWv4QqbgA5UKq9FpstAt3rduaYoKL6bafhxjzBGc1WNfgmvMKLBFbTi95jeyWvzB1VPu",
  "key2": "64J1a7aLqLLhC1LxLjyAG9zeVeQHmxcXMbXLvLDZ8PNG5t6T8Fu4tPzvH7TCyqcxCBZcRRBmJMSSetjwvdHkeo3p",
  "key3": "5Zj9LUVDgrLLWbSzpdoaeKYbC45Wbn5ubCiu2GCEhAxe6pXxT33NDXNqFQ3xAXHW8Rh4C1o66aZdaCTpwRFPC5mQ",
  "key4": "5t4QdrchdyTQExC6h2ZK5XQ29bLnjNBurMWnQWUTryrWENMvCSGd166QGwpfDyDnMfetCqYxZqToPK6nu3udfJZq",
  "key5": "DgudVHGhEGTdi1gkxwyMmDi6RojrtvE9c3UgF3SZeRXFrrSdtvqgxrSdpKfHukR8LuSuuEvA91NA7EDF9eBQ8fd",
  "key6": "2zCh5Kzwr3bXZZfi6ziqF6wP1nPyPR49ytLcWtZ7hRpu1mrvUg34qVHEZaCoJRVvAtnLVuwfcTv5NcqxoFtCSf8Z",
  "key7": "azjP1qj7u3ixsHKZGkvTfXAzMePuEmTbz5tzUZ3XHFGJUAqtW3C3Hoxie9DbPvoy8jwZnvfYvcqSpmnn3JwJQtu",
  "key8": "ACY6B5Sj3b4bEYizbyYsxCV85M4ynn44cXpZBxiVWshUapVKs9VbyWLpUjWDZKsi7xPnZUKbqdFhUZk1mNhCdZ7",
  "key9": "4YbHpLMWXhJrBuwNkpNW5WZszwhEYF6tiSu5B3jXMFZtw97zEgSDVxj34m7ubfjLT7ZqX1TjbnYKdht1S4ZWm81i",
  "key10": "4pPcN58zj8Z9Za1P3KeiAnnLWxb2D97JPeWsUpNp4r9oDXQqesPnD3VejMCWWrXEc67692iYQ9ah91tKw8kBb8Ng",
  "key11": "SQJEPzvqbY6giRwD9KP5DCiqvZkX4ms1PX6bPkgbXYkvWSXxW3BqZ1UfLybPRGVnZRZ3reGcntdtqEEwZ4xZgPp",
  "key12": "2QDcznhffJcxMLM1ThH4e6E51Vbonbbjz5enPNk5KSjQZBsMGQy3yQuS6XCYgqkSbz6CgXoqGia9fR7ncNZRPcfm",
  "key13": "3n9LPJCKg1JnR3ReNnNKgLLPyGqynPNq2tFCXDn2WCijGGGidiNwg4sbHYnnZz5ULBoiK3MuN5QvfuKwTVeDWpuJ",
  "key14": "3is4wJ6o1Lt64xEoao3LMH6CbkwSiWUNLYdhkjhTXsLdB5MBiovz9HuG2LzDnLjhdh782JW2i57crV2Hhvan5uxz",
  "key15": "5HCRJMuXCdpRgGGSkHP6Fez61znNQvyVn52AHwRBDtTVhrEWa7KM5w8aKh9HrUVyknXvS5SknZTi4rgCKNjxkNcQ",
  "key16": "4skxYbDTEjn4c1Z2pQBd6A6iYVauS1qStoSSdA7M1rRapbM7hJDN5cE5XH85qswLf4KVFC5E2XZjNZDQn58aYxXB",
  "key17": "2jJ1h5D6LMyeoPprXroqm14tZm8XxLbpP9SRj6kp5bG66pK1Ny3t8UuaSdhQD2oe1MKYFNTvpe4qAbv1k6GWWNmP",
  "key18": "46VhVATNgwspLefaFqvpuWtNiu9BZevJ1iRRLEZULc33uXqCEWtkGVXCRay4P44rvVgY3ep6Rv1EqnLCxUu2S6mN",
  "key19": "3zpGkWFZi6wL9Sy6HzicEfxASoDCqzbNrgVnbNJgFrNU66yi91i96Ne8KzKiZpBgdUaigzLW6fWhGJ9DkvnRoi38",
  "key20": "3aAYN3AmrLHXsKMCfPEvU1zTtr6twPMMjNW9m2cYmZsMErLWE4PCJf6ju2DYpJW2kWmJWokCE1dYV9fu9rVRn6EU",
  "key21": "Q2au4HBGB8bSSqtfdZHoGtwAkojfYgu7nhc614nD8dYfxSZHUKoFjYyofgHP9v2pYebsqJRezfQ9XXQ9Dg6VJwj",
  "key22": "63wZRMwPLDZ78JFk6bWYeEFZqQmS1uD9HVdX9i8SYjE1wkyDbnERi7pJEoiFbhEm3NMYdCWwTnBHVWhKvFS1k9Nx",
  "key23": "vHWGmvyVWNj4NZuT3yhPzh5c9M4TT1QG7bTE7Hqm9M1z7GQMDN3zN5kj7mDH5J9V2ngBm3DvuUStnQJMDT8hHrR",
  "key24": "4wRvNS69umDKHHgD7teBidWF5FVZFd59BX2AQswyMsDSp8LRdpt18sfcXJ8ZwdL5bx7XyZFsuRjAwkM8EDiPTcsG",
  "key25": "2hDwEV8MuAnDjbjHCsRC7YEYzY8rQvS2CMtVEW2YUDxAUHiUE1G3LndL2NX1DxLGRvGqXWprkmQ6csTYzikjP3RP",
  "key26": "befwFHansHFsLjvoA4mXY4UWzm1BMwChRVWZBidHfxtXPTTUgqzUTEEH3U9GUpkEULmNQLXw78VJ5cBKxiqoDwC",
  "key27": "5jpD4fGsGjF7y1jsz4FbTrnmDivZwGueTCch4bKGBP91YpRGHLin1VAksBBBcMWWfhS4D67uwQjCDPaeDPsKPD83",
  "key28": "67CSBXXVCAJ3uVSCBocgfzfmiRahJf9YyVyFae3P8KVoKUWzhfC63Rwxap22fVHXLYwijWQ4NCWgg9ZUxsXzX5zv",
  "key29": "4yLcGPeo426JQkULDcLHf7a4ViGYg5W8CMT3jhZWbufqoKWzrsRPHtx65gD4zwtM8zNDKYFMZ2nPeurBLkrg7aue",
  "key30": "2vBVKBnRNLkCJqqDV48MzWszArrv2oopLqTMxiBRwJrrfUE6baznNWU4iEDE9eDvGkjj1mBeTSBiSteLAmZKka3W",
  "key31": "3otKCLJbUiJbfRkJwP97okqA6KPVADMpbC8NHWEXyyVqYzERFSE5T2uxfEjf5vPq21eUu38gnNqSjEoZnjQChxY3",
  "key32": "5V9m4df3kE9dJJRbUSzoL5zM112eBerbr4ZSzKBcU8e1KpSjeiU5hsrz2EBVsAJziez2kdG3ovhtGTmSWWnA46w6",
  "key33": "8eP6wqY1eWEexkHdC8ByX2peSqYJ13NPzdeDzRoBWKVGoqkjvXzhp566GRaqfMJKmhq634hPje4UyvbTgwr3wEc",
  "key34": "4CJ4axsXVSZSshSgxJjYqYWgrSyZm9NS2aitfhm3iZ6nsX9T8PGi4MNZLYY3ZjUcfVUKTQ3oQgd7e8ct7TsqA2vB",
  "key35": "311t9vY2GdmVbeWDvroaueHGLCcPUqNGG78spbviviHumvfiDgz9zLGQcWC5TjG3wyknNo8QDgjgMjpEdLwvXywG",
  "key36": "36p9KmoYrpbDTH7cwsKUHsJLidnJVc6ajpFj7oJwpsGu27rzXnncq6NWQrnuLu44fkC13vw2qrSq8pBcmkaZQKUx",
  "key37": "27R5bH46p7u6yHFdgNoMWTWbE9Pky8feQnACjU9BJDFu8dLzjrPsXJM2rNomqJJ3u8NuFULkCTh4hNC9Dnaj7Awe",
  "key38": "5yE9kK39qtCwyAjNEEovctMPJnA6eLuQRf1WUXtWMZok8xNw9AF9wjJ2DWmqNX391xebFQiyVG2wFC9ioxeerg9e",
  "key39": "4Y27fmSZeMUDed9WecVFfdnywv2tPqVieUPzZgG7M1WTuUptiuu28vXEw1wBTVxJMN3D361V8BABzTyMNYeTAwJJ",
  "key40": "2DZpsx1DESzhkHdYjiXLFWTg4DBgF6taYeUH94g5886W1qFXdWwWqi7kjX8k4vi2BjwsJ5eyqBaCxi6HCBLJJYEp",
  "key41": "4XtgFibtABrJ58hpwLvCrs845yTwzecZv3DUC4HH4UY1j3YEv7M1wQx1smB9BPvvnqasqYGwzGfojGxg8cbDTG3Y",
  "key42": "3iRwMwBAkCC7s5EhN3CbYEiLPa9hRw4xR8QXuYfj7yxu8JA7rkyK8bXzxXvhdYgK5j5cyornc1TjhdavQ98VamRy",
  "key43": "4nTTDKrgUqcfsaeme6ovzV7ADC9gGypXWkp4scTqPL5h1BNkytv9CzxwHu8CdU45RVgJJ6y3ZxPU91dG9RexTKGM"
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
