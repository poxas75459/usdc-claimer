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
    "5ocWgmbob3g9GWD4RYUL3ciYKTtsSJM2iTz9n6NyNVD3XStvSGkwo7Wj3s6MJ89STskbqkRP8aym7RxyZxXxAfNe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63SPtfRJaPMUCzwLxVyyHtcneKuqVaT4xhmxq42RKYFkSUWwbmXJuE9dafhxzRH9nmBeDzvt3j996G2w5EF514Fv",
  "key1": "3KaTWSXXLwHrfnmbmaLDsW8iGStEyatJvfvSsivocJ72ufMGPfMkdGxnHs9aZFyS27qVDhtAh529bb7MqBKjk5nw",
  "key2": "5ndMYanectBj9XuxmcJTWiAR3gTepeWG8VnbLEafCAVUhNTnpfWwRc8jMXrimXfCWg22SWUhaGvX7JRyoEBMWEpd",
  "key3": "3gBSAEVWvjiHr5DaH3sKcrPVmpv7irgKnsZvWFTuNJ2yfK1sBqCU4aMwVL2iR7CyJBpsFcB5jT6QFhVBRc3Kdvet",
  "key4": "3BgxpaiPWfseLFiM14WMxZJupwpcKuxPy1h8CJxim8863fcR7hxr9NK1QWSRjYkQCUbqqLG63qnydadRVPL8arq5",
  "key5": "3q83kp1GfPbXnDgPjjmYhcxm27QnzeJydJCgtPQ957xDm3GLxJdnCvebnNBn6fxrwEnBKzLmg4LsarnqTvDjuFwQ",
  "key6": "2PsW1RmUJiN4HbJP9Esd1jxopiDres7AFTympEXS6vGdefAM3JaSs738c993Vtzf6hy6bXr6mpG7HZTF7BsnjLor",
  "key7": "aZfuQYhVZyujuzzM95pw4hFSZt8co8WwiLDhHquzsfMdao6gagQKs79J96wX4wmiqKSUZABGkNfyz2yBgqrsUzd",
  "key8": "5ksZsefVaaYaCW7PcsFCbvhJoLh2T4qEkEJ4T5BeYyU5N76xq3CpVGy7rCxYTevAAeaJqwY38xNSjy7Uaazo6mMu",
  "key9": "5eqkib5fQiLLzPPpZZBf5VWPL7eSKTPSLCyELNjsrbY33974zLP2r2xCGwj2ZXMBjGkoCDXcA7ZBAgKKqL1EexmR",
  "key10": "2jn54ST5D93Q8s4529rxUMHHE6MWCHWdPky79SzJwno1qACb5N5crLWKKykESXxoacZzcUYfw3tzBJrnCKPjixAo",
  "key11": "KNU4CJRewfw2wvZLA61m6Kzv7Jj8hhPiGiQyz9X62rtzsTKVaKpSHo35GfAFGvkdAAgX8ALWfwhQFsuK63Rys1s",
  "key12": "4C3h2idGYMabGnb1ZNWRM563ECFNHWLwUF1i6wb4bVv8g4ZDWKaz5BPA6RgDrt6WNRctftweDKuBoaNVB4veCP9C",
  "key13": "2eJxeY9VFKCqosr92qnsVBZb8NCTbVah4eDFBBozrkfmZKg6Jc37GQ5iiQdoFPLjnXtynT758Nd8YehZ6Qb1jzCn",
  "key14": "2A8fHSucU5yZakqAX9rXyKfacYGwgogcK7CNcySk9GtQ8yNk7RmfoNZt98ebw36vH3ao2p4efLHsN1XZfTRWZRDX",
  "key15": "3sGUtiUgKxvt1fYxKzttiDX4ng71rDMHHpMPiaXpWEbwcuLdjNRXs4ryB4vD9JK8ZWZ259weC9pxRxXkX3z35CVd",
  "key16": "SU12pJCBmk16JGUBu5KXwyiTj1fuu8riEiE9q5cvyfGc4FVbXfZcVAGZHP4t7gvChZrfBR4ktLvXp6oTRMjwQpq",
  "key17": "4gALEHh7cXnCVVTE99a1yCc3M6eP1ZeEMJWUkZJ8xjB3UoqVbc8SEKh7v8kdMhxToY22teG1d6fncju8N6UseWcp",
  "key18": "2jDBYktiPBuTTKLG8mdfH4rLAmjMJAts1ff5VccadbBAukA5jFeMeJS5eXFawEXKm9DbMGEjAx9VnsGtw1F6hGhp",
  "key19": "5HqzSLwYrFxDpaKZEQ9ArihchicLemmP38zskkg3ZfwF9DrZ5rwG1ZesEuVVvgrBdzrhzqUe6rj7BM27sjdfDnbV",
  "key20": "2p27hftvuhcutopR9jZaNp37FdE5WTmreuZNdJFmaQjSSLTXsEuSXDvVhgEh3CKHdCAJjAP5dnRbVNBHaAkHj9Cz",
  "key21": "4GCmrDnqtJGWuNqRNAgeHEQSXdCyJvv4EWD6ghdFG8ZRXZMDvxN6n8wTASSSZipK8niXrvw3qUBZ7TMAaLH3PWcm",
  "key22": "5HZJcxKuARygwVNUSrhA3D8D5rEfSZqMbCcFoYYoRDTNRDz73eB7Uy43UFTjz8twcEvSU4Sh9aGRJhoeyoY5BGd7",
  "key23": "5b9ry1LtBXhtqyQ6AzBvwPD8DHpAJtWfbrWjksHDJiCcfVHwQNFKBXdLKkirJ1SryqkW1JidZ1WApiqRjK5tYzsb",
  "key24": "ZqEcGVsrWzC9h7w8K6eAF5ZFdi91K9jpYgZp4k1Qg8kcKGSym3xXnup6WqxF8yhJjdrqfcM43nLeGLmztmqpN5G",
  "key25": "5XV4xr2HJY8L6UGJvYEVLGASy5k8FBHosFvHgJ85LSWoUr7jTCaezwfzbKomf8VyM7kdbNJL8w8RPjpZcDvXmrm6",
  "key26": "5UG2XQamtVuQ4ecXgMEPHujP9jrtrWrx4uipCABrd5ddDrus8Xn2Re8ayRpahF9QbEyvhMDSayTsED3K1Hoyv9w7",
  "key27": "QQrjQ2ubohCeniU9x5JzNwGrLoNSstauySr4BWViGnwqHXVVUaF3Wz5bTgBu3A9jNik7CLpozHAWDvkzS5cgKCC",
  "key28": "52Ho9RKAZ9tD5bThR8kgQydrvEPE6kKR2YFsUZcxEYfyMqURVzomZSBEaXvnzdL94iNcNBSqK1EQUBCV1RYV5efj",
  "key29": "3B1GBTSP4cJcYNdc4ViVRY5KY3mt1vTEGZgPwe4nwAnrYcR9FwuSCkwYY2cQiYWEv18ypqCmB7rm8kAG48Rrd5gW",
  "key30": "2SjBJBPwaXopa1pEUJmuixWuWbYFYMWAC71Z74s98kGzSXuwEafmQwBu5TxYxEfNwjN34eBbQH7gTKdPcVicRYsZ",
  "key31": "5SbhSUh9qJsvNyhSrsSwbAa3C85Ze9ukfa6dsEJ8RMXeBUXS1zLE5cDxSbWaFNmQCKFHNzESK77zKif1b6iA3suV",
  "key32": "629Xbi4aKPQsVfKtbbAY6bNW2fPbAQPmQHWQMXDcUDHCnZ2aq9f8j8SasaY2cCFoVzbuYscUuzg7VBEMCuJZG6yi",
  "key33": "76kaHME6YQGJKc8JHnWQcsHccPo8bA9x39VdD86JUFd6t7wJZRduHxTquFySjAUGmwbr6pRZxwLMNPVSSrgfbXF",
  "key34": "3PEkkda4V7knBsaobWniizjKXMbSYQkyssKahnzqiyFd1MuzMm7R4Ctdh3tVLBQ53UwemofuMAqnJ5Yvvqygv3k8",
  "key35": "kFoTfZEeW1CmDW41peKB8J6zfEV3udg9vQWbr6zQA26Q1tsantButNdTnL3XW8fCSvXbD39TeZkvxPkeZyVAWNz",
  "key36": "5n7TnMMHubhZyiZx9Pj8dMP1EpyMRCB4t5ndvMGzC7AbisZVgRbGLe89ox4VbN34Si4FHRd7LHiXFiivdxeX5QjA",
  "key37": "2VsTMc7iMFX6Gc2nwdNtqXti1tmnjQi7E8tvqY5jxWq35smnTbEVYVdSLxwbv6QkN5DoC4qRVRP7y7DJfjrGtzWj",
  "key38": "4vQDVoFWSHACLxueBFovrVpTDgcU3K62CjRy5BGaAceEweQezLA2bcFVFEhfweDF9UEMJ8pxq1zYvVF48yTTCT5e",
  "key39": "3Wd9tkgnvehGCpvY7QVzq5rJDarLZKvHYGhSnV91iGSJcRiCzMQFRXDsMijdV4FLF8LG1W3oNx4CVGjhRRnVNAqd",
  "key40": "5BnoQXRNRYp1fG4Rnw2rzdbTygv6VdtEECZ5E9H1ccN2z6DsDNg9wHTyubxHTseEwXFXP2WrsaHKc5iPFJy1X2T8",
  "key41": "5FCFdzcis27iLV3SY3b3j3YT4Lvb8ujDbzbw2KMPz9BNmvzAkHzFJoooBxm43DBgeirR7hrtTeqfS1zcQL1mG49G",
  "key42": "V6oXuJjLwNqo2NpoDthGhEw481Ts8wucyzwS26w3PA7aL3BZve7aFWegZ3GNw2Kk3U2hhpcGhmNub8NhGHo7An3",
  "key43": "4KSL8kcp3M47VynPZZibT5XWCcrZUcBzyVfRkuougzGF9QAYnrPb2xgozEvLqEvfYTUcL4RRzbuS7C5G2eVaUvaK",
  "key44": "4iqSp5jKEgDcXgR26VhdRFTsZCBGDGNw3tJhQ4KtPtB3TZ9tDmM4rQriPqiBAKVBbMYmqYtj7UocdRUBGBNPk8Hz",
  "key45": "4F1h1RrheBBkuuYEtE6JnQSPmpgWsv3PFKtPHjiyrC5P4T5753ghNPc15hQgJEHgefkTQGMXo1Ta4poTSc4zFNau",
  "key46": "3rAJ6wCjcmH7MxdZuCb9qvExUbuRRw8wE36hDZKR5VqzSB4RpbBnb7niZNwbQyeY5t2ty4ih2D17Vbu7UgK1Wdcn"
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
