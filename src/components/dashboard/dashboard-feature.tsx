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
    "3Qnnxfzu3z6zaEk8mwVTkeFTUb6TLixp36LVzW7egdLvWDuFj3gwdtPoiBRpKisRWHBjE2zeHfB5p9neq3u1sm1B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qQKF9hSnymmwobHaU1ion7NNjHJaz7Lek18qZybRxzjiZSmQCek3VRijLg7m6SbnNPybEZK6yDF9URZXhfydEhy",
  "key1": "4CRTykH1Mhqucs2ZPf8uir1QpAp4XqJ6awBWUEE5Hf7RTRzEiwEu5yxQfWNmTooqntrgdBMXwzp5gKEk7EJSxAEq",
  "key2": "3PNZkXFqCuNM6dZejeBvDpMsKEP7bn6CacTjx2uw4mRk8QncsWSzywWBcSztGgA9kaW4QF7Aw2Si5P5Zsb4bPE16",
  "key3": "rHpRULPnP9xWH8EqFAtWUxuNUXJ79wadFzuWcYK6KJfDRCvxeB7Uf5Z7KXYvUFrst3tFocMp6FFX6TP3KrG24US",
  "key4": "2FkwcTB5qfQ7n34sWTZV4tcL7pBXWWAXSzH3qo4PyuH1NyUrH1wpsPb5RxpDc7C5qBqjJLJ3nfeMgoMTAYgNNJpG",
  "key5": "3kDMkvCSFCgKFP2w8WnLiLrdV7MuxFwoKVsB1CJqAgzKj5B1Cyyg3joC2X8vLck1GX5mVrbgHYgpvogB95A5SNws",
  "key6": "2zFnJTkMWREkBAcyCu7yRanKPopuewGiegdQtz9iEU2dUQkUadjT8GktqKERZcUiVcj1xDWqyGKeV38YxvQH5tTB",
  "key7": "5tY6br9pj6e2d1Qa5vjkLcUpvVEmYYkq8pHDoRhTQNfWdQWWdUr4Fuibix1xfSZpyJsCKkLS7JqYuTJpWVwQjuFg",
  "key8": "5Ept2TaPQKGyY52dE3LCkNpVD5GmKLKzbTLc71VFK6CthiEXcJRzgGVj3xkpQiADPp15b6hKTtsWURzC68rGiPHr",
  "key9": "5tte4wpyoBRkskLX99kEMg3y3T5q8rTMEHhjVXU19oSqr5rR6fwoZsi2KrXsvTAT4dL14ZLUnaeiTAWiVL9AEWQq",
  "key10": "2cX85xL2TwsFhBpA2rzGhzm22rf2wXuQ1GY8bjB1nyjkGoewUvxAFVnpJmkE7DFuZBFnDTZJkcjPHpaZSzVzx4CL",
  "key11": "5LqqBTD5sLuj7nch9hKyeqNDCTJKZLaTt5wuFKnxqq714UcDzEgYtxSdGti9nPTbW7CxqoagGUQ1FiJX3mUss8De",
  "key12": "67TehvZy4tJ1LvhRTcv8YM5mn8P1jeKjXi6Z1STpPVDHofAJ8ut1o255iFJ4RAQoKMPP7ynaFLaEZ4vWV35A2rqR",
  "key13": "3gSBNZHFLQ9EmkKX96L4SWx27hpg8i2rWh1qRh7QimwbGqqqcKWTGbpu9QLpSE5Ld6XFFxCqQzuCN8tNo3RDS6J7",
  "key14": "3TMJYmQMVZWFFiuuh6WVGhMHF1qtL4t9agmNffw5bGoaYZxhJTBVhBF8CQ7SepcbPvwQ341hyQSg7veSzVTCZRbw",
  "key15": "F11NNirbXZ1bXHaqFhZXsBhd8A3WZSSETcb9sBAJMkC2htFTPkFDhNX11ahXQ9SNxpsMytFb1mkt7MR5ZwS1NZf",
  "key16": "2CLr1FTpJTBmXRB6Au6iW4iH2kznAE7D1od5EaYY8eMfeQn3yh6tdHrzn9WDLTVs8yCWXDYfDHBANzzCE8Y1ZUuU",
  "key17": "42qjJ8Nvr8yQGATDin8z1gSbN8UPpN5EPQFR2Rv4YiWKha7eWTrZrMQvdA5Gt4e8b3UYSDmEnRFD6fDFmxEkPdHD",
  "key18": "wc8jWvjY3NfQtAzibiXvKbb5c7JJ2CXZiFGnEtmdmFbUhTb4JaM5HRHW3qVXSPNckcLjPsrBuW7yZbjde9kfGjK",
  "key19": "2Ze98SoUhZVEr4kNbw8CMkwcmSvuWytwejNGjeN5hQyZYFrkr5bPqX43PTipB2g24hvcG2k6TsTiQwWCxHybXWMU",
  "key20": "3Cut4aCnNiBUFhExfQsEAKYYc8ALS8QmDNxTXr1ePf1kD3wiRkDfYy8yhF1HuAsuA9AqYgDY2zcNbPBegPg4mYVh",
  "key21": "35T6UKDHGUkjgH3GdAbteCvMvV38z9JhKjumYai8mXSXAtznokATs2tUhYR1kWc5CnDvDHCRzVWRmjxsSevcpwk3",
  "key22": "LUwXrmnQZ36D1gYZrxhTFt28UwQpUryrmpVbEHJJw4DEnEwJzFYzFc2Hm4LfMreHQJWauRGzWLxiaEJYCTVu4Ne",
  "key23": "5UqY3Nn1uCJEZzcyhZtDcKdHbTMUetJ56t921QhLKG9nmsHaqUQAU7ccZSXpCqLSQ2qHMrBfRCpWrrA9knC8Zh7W",
  "key24": "4FCsycph2Ny291Dh824bV7tWpPFDZvuqnyKmNFnpoeKwmXToEib1ZAyQ7rN4YmnotunpV3KhkCACyq6TvpLXRGai",
  "key25": "UxTrgFbmtNrN5VUMZAfY2qmmsgGefFCHzZciGbWw3BnWRDKqRMpJCLxJDWB9U97iFvGD4bbUnRia8LrsoDoN5FY",
  "key26": "3AK2LKWrsrn2DjrSd8vNEirYGxQbkCiF4ZyurPgmxpVaJcrvqKK1Xz19XccpoU9S9WeABGc8piDrgaqmamc8XuyZ",
  "key27": "2eHgH1dAZAxdCHUeE1TtNGouZFxAcRVqDaTzVgc8FReX1TKRh4hJihGGiRizNJ9CyhFXABVKU4tDDKpwbdNUmrxy",
  "key28": "2kPn4JjY6quGeMtCQdDwRx4N61j59Gz62KmBAtRVVsaFYAX2kT3tYgAC6p3iLk236tAMFXoCWpPHEgaDNSMxfH1Y",
  "key29": "3Qok7y6rfdzz2qPphmrdTugBVH8h2BRGXSQK6w24Wm3YL1wbaKZYKGYP3hfVTsAWUgNBpnGp2CyMeWYmfMJBZAc5",
  "key30": "67qUfoijQLnXtebskQJDpd1SYtvUZqDAGKZq84ritH3CewAZ4MFVvGAAQW4cUhKxPUzZoJxnCRA7UChfT9mGxZum",
  "key31": "5rAyQ9Tg7i4vw49CmRmzCFQjZVha4KVtNbaPgdvDXu2pRZCSzJ1G2CrBpDgFZDENhYi5KdJPPMjboJpZbJXt6P4s"
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
