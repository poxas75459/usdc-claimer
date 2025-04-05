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
    "2U7VkKaoKkPmadCR33w2FqbGo5YTZ6shSeDfseYV1z7m71yTFYy9RZ8VqBMFNz9Zp1c9mVbaCqCfjPjvETJJrNEJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FxX6ACuwjbWiWcqVPUXYqY4NxAsq5jAHWf4QSf37EsdncyibNHUg7XJsxfP3EgYfyH145tw27zYpnJ591CEQSUK",
  "key1": "4wTmLE8nk19HZndtJj9TQTwGoUYtpDZ66BZyGD2raysBReprkuQeH8ExSYUMH54yiDJJniw2UwSqbFZe4uNm8Wfn",
  "key2": "27Qyy82GTNz91woxs2HV1DLrpcAYgt4aiKD1RWv8e8PK3gMF2X7BsNY4QxHT1YbCQC3frR83XxArx7qnxt7yUUAj",
  "key3": "4jvRn46LUPqkCppqFjkgmp9mLo7t7kvfJN3JWADS2sKugb8pKgg1b5So9APe8nRU3VZk1sLS2Se9RDPTcpzGivwi",
  "key4": "3uNTZHj7UkE9TqhZMzf5LpkrDCsTMgzwZfwKaVZDcmPAQh1jJYo5zjJM1TtjckKp23iVSiiEMwqqbH5zxe93NuBu",
  "key5": "4hsFGsobzYCWPyRqMAbyu3nq6x8EuU69tzojBmFn9wUn1eNVheTtZjK4wTW7fAYV7HRbUVnY9UJRzXJyRpJNjTUb",
  "key6": "2b5UHMRDo4AxnrcE2PYuks9AwHjY4yMrttoJesuTzQ8J1T5PwfrTgtBUgLUa6783oq3p1EYfFcYYx5XKBuvexWC7",
  "key7": "5arVmiwSmELskKJAQhWcUmSSxQg1tXHHPsoyYNJcZ64UarHMRH1wv8BtbM4hUpa7wexkNaJQo7qUa9DJE8NSbg9w",
  "key8": "652rfLHB1WnNwqUEprD6P7iPPKKau4CoMrVb2izYr5jSSJ17MyuPcXovdg87zN5jCFDJfmT1L1uE4HEJHAGvj2GA",
  "key9": "4By9Hf5q8bgf2nBcTSQpL2Q6TS58PctGXJCi4zyeLbM3cQ3xhPQxKbjF4QPLLBTQ4H5vTPWt9cwmbSP8kxA1K3nH",
  "key10": "5d6wtsHRMwmaRGS4GiTnx35NLD2ATaeL7g9iJAA7YLEGXSfH2k91i395EJvcq9fd5PTnJQnqj5gUgtJYUkaUDbyt",
  "key11": "31pPytpU7PfuRf9sdj5jkVfNhg5Pap4LyTs2p98rCGxa4d9Z31SmKt7ZF8AqsrsfAcZtB83GRFUaqtqSUEVsw5EZ",
  "key12": "4XcnJ5CsXjraixDSnUVQAvMMxMxVWY5H53xyzepgFgeg3C6UyHdTBwQByW9kc4MoCnpMsMK8pvB6Nv9SR8UhZPSj",
  "key13": "66zbZjkji5nrcPAvGqw3nzkhdAgj3yJbBR4d4s29LGoZLDUfkMXttugYcQ858cmJE64Aj9SY19cpePVvk5fA29pm",
  "key14": "4qiWRbvFNEZxyc4ssi4BDYU99BiZqVuFGRZ68R7zKWuU6T5GpYYY3mQA1H6fWSRsSTmaU6Tpv9KbnYeAfdZsGZCZ",
  "key15": "487wjGABc4zDWAn2JCh4aVFUtSimxrUH1ouuBYt1HLjMygL9RPW6YVyy1JS7R7B59NmfhAD4D3CWezmZwQN1NJxL",
  "key16": "5LhphETsYHnxu3GZshFfqudoxja1W8AVCtpyjja5KVgSHCF9msTQP91nj5hZL5QxQnrUgSQjHqJxGSoyLdTx47R6",
  "key17": "4nq6MppkRwRbaDQWz1pdPvcvoAvyZ4Mw8y7TAzu3jZxKWLzNTcA6Tpwq4LZdzCHVVTFE3YJpEaeakGR5NYZQJisZ",
  "key18": "MrrJDgWzvfPKVgPrevZD8YzU3WdmKGwyfjqvTBi7GXKPHxZoaS9QY7y2YU8ji4WRLZTUoWax31jV3YmousqxRXa",
  "key19": "3L81e6ZCbuLoLPa2mnwNjp6SY3fPKnjBoWPfgFy1ajseSErwuPurDKDpY9ALhE2qC4Bw19gZZYaG7UBBgmTUh4Ch",
  "key20": "2fFZuVYaoN1XZV66PMDDpZerXSnddRzyLmpF9vA2BQunsiT2tt6Hriyh6257kay5ssRp6vcg6UsyEgRRnRnSNvYu",
  "key21": "5Pxe8XgXozbCx3P8XZ4hKYXzXkrCY8VQRTQpSi6eyWFyh4vjfyRaPsnJfBYWK28qJQbdWAmfvLHgrPn41BzUzC5U",
  "key22": "3M1s51iPEe4JtiBj9RHDF6VZzZQcnWdwx7PSrS9BWNZyKGtU6WCEM1EoUv6rNcfQiMLpioAfbcPZrpHad2KJCT6s",
  "key23": "3dBPB829D6LdfRSm1PmrToVLcM4NKnN88AjitVvMMAEAiJqwx89uKiusruY6pC3KHAVJGqkqodGVPvMpnwyQzKow",
  "key24": "zfxbxYs2HMVZwjzT8VhbZER1h1BvS6hNegsM2jJ3iwy1PZqhhyXKArCDCPALZKB9svZxpUrSsfnEaNZvv4rbwWz",
  "key25": "4W4CQHUr5q6Dz7j1cbWb2e66cFGXhucR8D7usZ174qpYs7exYHgfix2BkKHvbu1346pBkRs2x8mus54aFWUJg7Ls",
  "key26": "5DoeZLamgW7Bqm7QpikswHukQZjC4uSbURyyfPWPq89UDiquPpw62sSb7MeTLsNL7P1nEBNuzAENU6zjiL8XD3J5",
  "key27": "47ShGiDzRv3t3oSQQ3oRZBKGttESE6s6ATPG17CR5q27rg1NryTMEY8X6kCwzGNaXtC6mPPTTfoqgKQ3tQMTcYiD",
  "key28": "3VtNm3K3syo8DUqNihPgKJmHTvE9yZtcWDnpzpbsmF28WFDqyUVmiaEpNQ9kbenyZaTqd5y8JGjqLtZrSBJ1RqQW",
  "key29": "4deqJhb3m1xGrCMsUUvvNLmCP4FcziYch7oqznTTetZd3yk5MP84UjUnrnRwZeS4eqEchkpyFMpz9cfe41vCYuuy",
  "key30": "42y36wyJUS4ZKeWyiJLPA5c7ZkmyrfyZr7gFW4R35ZDKkrHcrxCYiPPLqdD5TBKQRiF3Qy8WVinHhd8z9qBdXKgG",
  "key31": "5RNHpNKDj5fkjJVPegJ9s3YfouJjAdY5XC8qJfNujdwBsSV8sL2q6x1r4dQZW1v3r11YaoEHRMeuZXRVrqvpQqNt",
  "key32": "4XVt2VYLmqBENsYeGxJzxijraG7iYJ6L4WNqAiwepxGeDor3m7Y78dHhvep42hyTmrYMbRfHvPuKhskJ2ufwdKha",
  "key33": "YdakHQFUSFHwjArRCWhJdcomWTz9Sr5HA3xeu3V5ezMo24sv6G3mCHXc8gozq5ewXKWaBzPE2JEiBNhSRNTGH9g",
  "key34": "5ny2Wx7xUriQ1csW2QXAmBaP9gQrYhLyLvp8J18AsGBZiMb8oELednU8DTJ7pmZxfiwVmACiK5KHjFwgHy4Zc1La",
  "key35": "iykJTdWuUvkq2rumwAw8huKbVJTjt98kxWFaTM5Pd27aXr7rJ813MUcgwTPEibCcc3EJUUd6xk3ZDgQazf5UdNQ",
  "key36": "5oGAEixYUS66p3u1hTLEG4R67HzMtKcSWoFv6zbgvgnd5Ko866U2L7iU7J3gSFYQKhWxdj9s16wET2ngxYmWT677",
  "key37": "5SJ1oToMVSfSsxY4uTpKzgQR4oLWhq7vFsNEsekyUomRx1DwakDtNSNV3Mh9aokHCBjEDrsufL3hMJjfJ5MMPRUa",
  "key38": "5hQCW2F13Xq5szPHVSfpNZvwtNVRmoQ6tSZw539vyMAn1XYTKenrjdNiNqLQYnTEAUD49PFoy4L5h59AhgeEAwW",
  "key39": "ZBqeKACMNHwTyX1n82WC8e3rU4aQ51fWc7LwFCyF11KrPq3MSJAEmLRuBq3mVSrhvjFV5or6tsR7oEE5sGr97dD",
  "key40": "2YC5wUNDbpA1YcAVWpy36mdQkmWY2kUK5TZzkWeGW6HFpkjSwNuDoPASkC58r54e4YpHvN1b8ESi7XNu97b2CikX",
  "key41": "4Kk9GBDs6MR3pL5hif3AixS5ajBYt53M6NnoFUD3R7nPU8mVQDcSzfHYoVQysJjTqCp3rKt5pQvYdqdFn3DsxFfw",
  "key42": "kXfjVZnJ2zokN9uBpbugjKv6Y3nE1A6VdcYe59fWYpMHwVZYghTu8V8xtePG2PWirRa3X8XkbXd8euWjg9CqdXC",
  "key43": "416yekSJZtyECbK4YFfM1dyQWC5vCTqr12daKyxp2pAtUzWnPzMHiRCEyY94jMqGb94y79rDnvBk1z6BiwQb3Hjk",
  "key44": "4agrmo8CYvX2T1NzoyGkdZqQyqiW9BaystCPdamTtAdhuA9WP2GWGRWroAfyFnWGfy3qZzfmnTX6NJ1eC4G5SeMc",
  "key45": "4xBtGxmQ1rhoRzwAmZgo7k9cgZPEy45tRpJ8eLrKPYicW75yvaeJZ49sbLDvRPswqADtFJwR8jk3JUUoyM6ckAd8",
  "key46": "56dgmEQqBufavRCaUm2cSkk4g4pdRRXqmqj5b5NDznn7LfXcKpyWDtESudAtUsyPphnmE2FNTnuvW2Td8xbJNWN2",
  "key47": "466Xr5MEVGS7jnnEsZYUJXTBtC4Y9tuSRaUfNTU1hzEzU5ZewWsMGKfR9MNz5zmFKqxdYSCxb8dW7WBdyvU2Mi3A",
  "key48": "QW2x4cZzdzjTqJ1aAz6FFo7sn7L7PZxFbKbnoBek14GSkzAnbyqUiicg32RB2gVABE3j97QhR599bNU1etA3j6W",
  "key49": "3RwH8uqm1yh35eouudc1WRncGJr1FGzMrEEyVTnfpDi2nzj3GbvMTHWFLXB4gCaiioNupZqn59YguqpvrJ7vsqVR"
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
