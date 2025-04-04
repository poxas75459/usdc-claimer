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
    "2vLj2ZjdWEWRPcqsRwiAJsQURNRDwQk4ahJjKionbLzJVxkDStVmp9u9r8KjUmND1VdgxnTdahdstnc4hkadN5rw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jXRPayyBYhy2gAnqnSRUnWQHtZ5uRjNJ6GMRdBTSQgBzHpPxQ2L26AwzsCS5qJLChcByARdvReh7FjKcoaTbuVx",
  "key1": "5E6DmA9NpHgSLQCRGfnxPcdFZNnybaJtNenkjVhUfBinUTErPPkuXjCPa1qAvKsbtxarhrXmcmZJpyWyUPVbLnPZ",
  "key2": "pJktwbrQnDpCsPvccNCM2EY2zXkCjTZJmeFpQPMaGQwyj7gwKKLk2ts95EJpP1TH4EaSaomMRYmqxCboC9wZdv7",
  "key3": "JYjDT6GhJimVCEAc5XBEusnD5BjXaTUjihbrK3Zgk2cujvDx3hGzduB2AhTsFsE2VztNmU69CCmJW3izkDVbcRP",
  "key4": "zrtR5dBssHeQLWtcLB8aHncta8dRjxsuyrRuYBqX3bQ77Qa6Ak1ajWQo6YTr7s4Uho7emi4QQw2e9tT49s5QmDE",
  "key5": "6DxS4VigydfEkR7ZGqGDMmi9UMUXR22WQFAE8ZrCiSJEhyT3yx1ks5ZrJwFEhg19W1pdMWbyHaCanthM4sF7hiK",
  "key6": "5EWdxUuXGePQguQrMJahrBo8d5Q5uyNvdLeREQa1LCq5NHASg9MsA2givPA1X16yHcmu4RRGqBjCtpWir1g17ixv",
  "key7": "4mRfPB32hhbAMQZkjCevH26rjyBeeU5FGvRwgzJW4qscQSZcG82PC7KomVsRw9oBvfFb3VV78YU4zKDjGQzDSM2W",
  "key8": "33GoE9Dn2i26JL493XG2ZH4dr64ieTtj5rYuDZi773ZpPJUyAkZxAmQDYJG9TdR5r7fwjdF3de6qeyLqmmAZsBaa",
  "key9": "3AuQRDjZHWEDv87tBnrNnU5TMNZRNqPtTguyqHHEb1vBSrUPfDrum43cKp1qmm6kXDJYdUQrGwDJcECEK3x3uLXe",
  "key10": "5vnjQjgPfMu86DVVhM2bGNRXecPxWwFtGMZnT6Fhit1vNNvSrCY3ZRtx7SAB1t9zp3f95bLsJG7X2hyQTnfoPmL3",
  "key11": "dRUD1Yy6KpsHpHkF6y739mrNG5S19ckdRfjLTn2V1GN5oBeKkNaWd3HwmHfC1hpj1g8grdSnZPJoyiYs3HebyH2",
  "key12": "KT6p7YLhjdiL8bg2DiHE77HUypPvkyuuWMS2CanSn9BqBhVSwY8HWJUTFr1r7Tjq1zZCsAyAndEoPnQWUoyoSrx",
  "key13": "4bd79ycnogjmaJbmwnNsgpAZX2t5HNNiEcZrAynGkRFyRUxtizu5D6GP8GYZEyf4RfTYgiaVEfgz2yJDv9dR6F2t",
  "key14": "3Q96gUHxBo4887RcKyhaNjJm8aEEpx78gPkXrUi3Fik5x7LJoi4Sqf1dia5ix836DtqP16tfsd4FH7tqsopiDmVK",
  "key15": "bBhdE225pBHu5dKZ5EP4bCpiuBRMK7Sv7rjceDKChVtZ37SXNUkZgvKusw2PXBRhhUtQJ7VW6c8wJNs2K4kXLYZ",
  "key16": "2ZGt9B168UT5Xo3DhPPBqQ1oDpvr33ZqnUCuqoxrHyREwUvxNP5W87MZTYC2urtkDXNVVMwcxRagb9i2BNgmfY2N",
  "key17": "33JUUnDJFHdkBcARmKJcETKHDvwhBNgGospXiabvbUbS25or3YHAYCtf5BWzCDiAz9NwTpdsJ7zpWtB5UFYJrNju",
  "key18": "5D8E75hEdRYLz2xse9ERqyH8JzrbQPzmRCuJWAP539MgSnps2GtqbNzNSzvnVq5iipscTSdrxoVh5r85e6ScSUvZ",
  "key19": "eYCRTqmcmnjjy454asJ6NuayNZ6vKNo8RAooUZkCXgvBjXQ2nnmbreUSD36umuvDx1MdP1EkRsRTyocptKjjepE",
  "key20": "3QAKw3fPSyVnXbConvevZVoxdXvto8DT1kXXWsLxBh3PrM6LGAMFgDSofRmdGMFgDGnB5aroQ1Cfte9gWWGsuHU3",
  "key21": "49sJfMC5ziWuUjH7TKvM9cEXLF9DimurZvschbqjT1MPAd8m1dj5t8A2PqaFi6NiPzEf9EXnBcQ7fFqf4q4ut762",
  "key22": "673gVuHxY47a1sUC8kAZCvCYB44xnnXYmb6eKWzGcmsKj5MvQEoADT4nRUWLPkbCe3iQfGLqAfu3hYLqmytQFFtD",
  "key23": "57uqKnNKLzsmQQrd1kpjxU7PS11R8TKJWUgrrd9RvoFmdE84BDxM2LUGPHSrKmKLB6BsjcCC6or1GbXazojqYy97",
  "key24": "3mopRvaznuYcwiRy8gmDX7rZMi8pfPRcoWiTKLkHPkYmHM1E8JFzZN1ZMJfDiv4UGiS2qwUtVdG9P1vskg1bD4g4",
  "key25": "25GB2sX89JRyQaz3XSoKd4gHwfXxRuER6WGx7SYrNwPaQuW9f6S8TnTT6AuxHA9MpXNFNgTyy7EbqCf7wSAFhP7a",
  "key26": "2YtPntS9ESa8RePaeHXW9DVaYP2qJs7ZEYhLbzw98rP9edcP3EyybAmwmcBSbjK9h17vbBZpBbYCGtJeQzAKEHHz",
  "key27": "3YDsGtsN9mCrHWcAXdjv4n6rVEMVMmM1uFTwenLGyda9mYwLWwExwvGZaz6LKvmFVG6iZew6r5pwfywfdc4AezxC",
  "key28": "2PcnB8UzJHW1kHDxcCV9xxVw8B6a1ES3FpJshvfSaopFdQfu9iMyqL7NZr81JFtgMEPZcym3E6YiL7X9oZBKwzLQ",
  "key29": "3wjrNEXqBmGcDmYzEfYbskCSX4ZSgycfLPFQRRDYjXjVCmso2gnqAnQdsgwxcUwvxxFD2Bu8MQn9XVkVrdacL8Xr"
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
