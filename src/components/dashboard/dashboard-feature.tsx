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
    "Kq3B3MgvRKayjXa4P9Gf4kgKkreKGcYuLpWimc3cPLoSbPJrXuGR1hUbhKM7KHQhKZ6u8QbvHV9Q91q2bVvMiA1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vBKTNt1HGCt1VGb21S1Kq3EgwkWDDaeVQJVzUSaEh82FC49WwLuif8HA7MVpG7mdqGE6YLeSHGdn8m1wUGe5AhS",
  "key1": "5q4eUxihx8QA4GLkRJbKTC6KSkYim1J7j4Aoky6DT4rrV6HnMPjpVoPiPWw738KmxFqihJZjVRSzRkkPpFfJ7up",
  "key2": "3iWsTpH42zzDkCk7weHbjxzQYXvxtxyDHZLwPA1GQ784GVHoi6dj41CSyqoX8Bay5uy6oMKUSQMZPQojD1PcVCQo",
  "key3": "3T5VKmSELM11eRDjwbhZoQ6yhis77XW6NrhS33tAues97vt3e4S52MHJiNxXLutcTh9DcZb6wSWDHVypdNV9rD8E",
  "key4": "3oi4nnPJQUhNZvin2TJiZSu6ynSsMCjUmySsTRvwM7UEMPrYhVJpLdRUbCQ4FppjbHkrTva4jyxAWczW4kdwcgg6",
  "key5": "W2VcHEsfnB3ewxSMuYTzFBzr22E6vo7L3vS3918Vscz9Hv2XUruH8TEwA5pgYxxxHewPSn1KRgkA7TvoYHwHZJz",
  "key6": "4nuBH1hMkD5Z2auiv8t1phN8CdPjsiPKHu8hauJdBrd996cgyhWcvQy5phG1dKtkhdiSAjUzKWRcG9AurcKbsJNZ",
  "key7": "5PkWBnwum1eSNqi1BEp8cVnb9SdipXAmGffLPgDnjvWNU1EuznKyrKfALDeDffrWymKhAYzGVL3zd9mcQVqh27vm",
  "key8": "2UBQXKQF4Jv3bUozsK1uPL9PaYHKbVrTS8MvWP3C6zHnVwHgXpckWk62NxeMJf286RX4T5cBBFNAzL1jBfzzkoqj",
  "key9": "43drv8tAworSuCfkW52nys9KenhkxXmk5r9Wfacxdc9kb5HJeg4cRviRMtSWupMrLKxcK3PiTPNoN6xnpuodyFVM",
  "key10": "Q7Hm3kqFrTd6fitdnf63jiDkit6pYDC52pvCENrGf7yW9dh3F3UFMifNfn1f95iVFJoCdGjdFRsVFHNefU66Bp7",
  "key11": "9zkErGBLSfoQP5bCHoGKHCC8NELFM2Hq3KnasdYy8pFAjm4HpFAHBzmYtAfdazFVfvAx4ryCGrFU48Ky6Qc8Ks2",
  "key12": "2VSsmV7thrum2qngdVPNefhEWr7TCqQrNrZNgZ1XZxbGfpWHrcs7wcXFGSj55hMPzKvgTEj3tSfaZGD3t3n1gk4C",
  "key13": "4WLPGzQukz8JeSRHNAahBTnmux3CbSXGF3NVEDJQpmXwJhsXJ8ZtdfE2TFWk1dAaWZ2ddVmqWY55KK2s5a5zPs8h",
  "key14": "54qPNnSYRci3eBps2PM5paSvbH9d6aXk6o5QPeWBBLPJerwUZrpNdXfNhcmfU7R2XbZFREssaEU73qCAHpeb1H9z",
  "key15": "4t2TELtuXgPSpRStjEGFvS7ULqevtt8gf8zZqaEeccTnbe4Sgv4PjKJEnz1JbFBfjCiD7qHXiTftqez5VgDRSLka",
  "key16": "3zvNsqqDmpYqEPw18nojT66yM7ggYqFuRCM9Erbzd1ho8WPNGK5zGvF5iQ48jv65yg3cWhvjU3EvbTjv61f9N6P2",
  "key17": "5Qof8qCYmKXa9CiSNJxuNoDohuRA4q7epBqTfxL3r6gFUNy9Fub5PeefxN5h4z4vW5osRdegd3FP7gULYWtyzCjL",
  "key18": "566h1KTK7y5XbiveaVHiNDi8s7XRwrnoCiq5beZ9TUWFBtPWkpnBS6g5xsiAtAeBCmQxhrBsBTXXrYvxRBvP4sqR",
  "key19": "j6pyu35Z1Qqq77NzD2xBzpPpyvrE9KtvhfCTHajX2zpnn1b1hAWE779zTGXZaC9RYQdbWZVjJTvMvZr8tnmTcso",
  "key20": "4rGmj9gbhQCRvxQsuYgEv29YhTdA15VjChfEk98e9UPUFuQ1VPPLqFE7YsjAbnZUV49Hyfu5mETvPV2iXQ7YssZ6",
  "key21": "37GjbwqTET9scDXapShd9Q6tUgjX4vDSegryfkzCwvbi6MyTATXGGsfh3bexDLYimH3t9S8Pht66a3UXdVYhKfwN",
  "key22": "38sBFm7M95BXUdCWg1bic5wNgwy84jhwQirWsiyVdzTcc7EW62k3pG5i2hKGqRN7E1h93PCHcyKuupvocyWEEZWG",
  "key23": "56rbFDJAis4tcs6mPCY2ruhExs2KY8PVUPLGJitAsQTRTXxKukcSkLhhgBy6JvTXmqvMVkwNYMthYU4jP1DDTSLN",
  "key24": "3b652aQ9RZ4qGsuVGaJN4qSb6wPVLsFUa1q1cgAm23JTfNHFznemtFYdneRCeJn5BFLSNa6wrrwkvuuA4tJ65YcX",
  "key25": "3qguD7DqXym8gXrNXW4J89n5xhYEe4CqR22t6NCRbQddZHMoVNjMffgonj986BtzgDvdM6mPJMSMzqZGEoW822Lu",
  "key26": "2eqJSME6DrYRM5Rd6BkVCqFeV8Cgqf6eQPNS5wxjNzmQXvsY7fTUjaKa4AqMrxirjYphMwcchZZhM427NKk5m6EE",
  "key27": "545HGoVJa5DRYiK6RXzGGYqT6U31F9AejVmpFJJ6uCjNnfcnXM94iufixejDpLL1tx4uWQ4SW4o2BiNxNpqWBmfb",
  "key28": "2kzctQBTR5PfGfwiLJBH7KGQdhaaP87RgUx2AjCC9ZSKsbjERanWS5y5HHGtHnYpC66W1oHiQCNAwzhtFRbsAUw2",
  "key29": "4zxALiEMRBPrg8fX6XwpUGyWNvN5XMQrrZFYxVB1ddTH68B6q34L6M4UjXq5hvWSbb7XXieU1d9hqap3joedAX8a",
  "key30": "3n8SfGvUe7TELWvJaFyntdK6T3HuS8awXd1CHb9Nrzn92RpbN1Ro9f6h8JyxwpRhgsDZvdN3Pj5TAXMGAz7GAjaH",
  "key31": "3D4NSSaNfbdSSTgdYayvCMYNpFPAZc1hrwoUFdgVFP22KvKVwb2EsM9HBoc58Gui8j5MbrhgsqjtfFPG8BicrKFQ",
  "key32": "397XdYi8pUAHNoquugGeZDQVbYJz5W94guSh3N2FBMFCZ3Di9qNFyBh3N5QwQD8ZDGh6yVMyL6WvctQUp6mZoaAg",
  "key33": "2PR9cyZUP8gsKu6s79nUamo6MZdxJy9jReuYc24NphjJZ7cBgo3Cciw8jXFvrD1z72eaJkCdCqiaMdzXLM5BhDkQ",
  "key34": "4McAPKNwfQLQU1sxreRVZVv5D8drcJjuKhzAC6TwbK5t67pivbiCqnxWpU3YQ8UTdcQHV29VffTBEAaApXoDMgsD",
  "key35": "3CegQcvufB873NN6FC2A7TzRcEm62MX3YR4pSbNy4K7gcwQpo1vEx1mBcNsnW416EmJSwhWfPdBWNa1ojfhRiyGk",
  "key36": "5EruxmisidJbCQ8t2MaDX4Mebsonyb6Dhdnp2E52WrerR7xTxYYMZzNjxatmxtN47Ppi9oUmw6XEiUVhmGr9tG99",
  "key37": "3EXqceJKogixv6rZYkQ83s28mKsZAxrfe5McUrSBbtB5Fk1JUWBq2qxaZfvDfBmu6auoKdXDgZtwgG3BW9rfSgD9",
  "key38": "4tEnHGFu8U8rXRuaAWWnPGhXB1s9G3gNnfhjMqV59tfpcZVx6HnUHa45ZPDjQvrFw8pG7wCuY8WkACCw9CLyf5h6",
  "key39": "2v1LanG1MkjDcQsXu1GHZ6wauvxRfFSAdL7NugqPgtm4qhTW8188RatZei3zRzhsLR8nMi3Enjp92NGdb2jKfrqE",
  "key40": "GHsfEbmKVJArJkxXBcfzK278kYzMpbXUJRTTzeiW4WhrFpwyPuEUjwziFHCauxuM3gNtcYHUvZxNmD6x4CFKbph",
  "key41": "sScmkdbTHngDAdPUqG65hHmaEM3uuWdsa5WnpBQERPuTj7cEsHVKAkWHogn65xkzApmNydz8wSycQk7MUVusEzR",
  "key42": "5gVKuFgFDUMxs9MXAKrFFPEirsSCwaS9gNW8Hs6ibncQFAEJMjWH5RgPmYpaPJDznp821PUEtQitaDhaNMZFsJBN",
  "key43": "2aoGgEUjYkThKQtLofHxe1LDwz6Ck7eEaGNc3LitT5MVRhWzdZ7hBabkaNsJidJYiw3CVpTfqyaR9zTjwWgtgjDE",
  "key44": "5ZjKdatjCdfrtPFUGBGhR8wtzEaDyafKBZtGf2LU7ECfdD5WBBkLjn3JtMjFxCzeJ2s7ryQSHEvUYWMCzvoqa8gt",
  "key45": "2dfwztfZAbQ2UDA9QNP9wPgjACSVZq5fMC5VKcxuH1rVb5s3bjnRKMLkag8tMmMTh52QvVLGTTs6AkhinwJuZc5P",
  "key46": "5um8D6AuQWV89D9CxhXmSTDf9HvewuBFobHWGdEF6WhLRiAn6hjCX2XQixzJojepqV8UeANfFePpuSUksDTs2NCR",
  "key47": "3Eua1Ms7xfDicteQcGZb7g8UbSp8fbpF9txU7uoKQi3i9LYERgHvzZZNABZ88Rrk2dsKbD8BXy4AkVtYg8rEEamA"
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
