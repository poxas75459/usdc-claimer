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
    "2Q62rjFwdNXKai5f8iWAcfYk3E2gT5CKN3bjfcgrkNzxzA2sf5wzLpZZ7JA1RJL6WuSqBdQzHckrSPg7ytRUYGGo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VtuojHfK5f9gK94dBT2vhNEPN9nFXDCueibv9WCJ4jXSJi2qTrayCML8T5qrxSMLHELMt3HCpR79KgAycemLUcb",
  "key1": "5e42RvqWgd1SXSJzKUQRGuUdWfDwDsm7Y8CpgrXM9ERzKVUqEh4Bj1uKUuqYFX7JbRzWmPYxPXD73y9RkU24rTJn",
  "key2": "52AHGuDtmMeQqnPPCqqH1HXSsngM7ZKeWgdz5QXWvkv1qsFm6cd3Z8EDSZiWddpuhSadVak1gDT1SsDbdrJWSbLk",
  "key3": "XXNEBqjChUm8Y5j9jHLTnuMifPwqK7rs7JzScTCzK92uoEhMhso72sg9HMFasz56cjjXoJLUUpPHf4Hk11cfyas",
  "key4": "22qyNuZFLKtcYb6YWy4ReuppsfspmrBAV7tFvdmxPPc9ZQzu2fxcAdCijiq6Xh3RCwLfetJ5Xhc8YYpztng4ZVnX",
  "key5": "4caEYkDjZSKj8Mp2qGQ7sxaMEA87fYdUr8jWJ53h8cfyiwvyUgnuANZvD5wwuo73tVj1Kp2JgVnQWoec7SKv5vk",
  "key6": "5P88JDe1HpyhAB5we81poKGqAv6bJbujKYKjDECzdpJFutYduPBrKWMfyg9MZstdGhLSsr6itvbyoLmUHcZAxjeN",
  "key7": "5dzkqEA32HmJX8NiWv55HcmXowD4wKH15P9CyJaGyZKjCSxHJQj3xp5nyAYFNAnQYemgVC1cQUgBfJjwkp5tM6mq",
  "key8": "HXTr1p3buLnomK6edormHzs6cD8sDL1eWm1BRK2xJSVnpnm3BB4hVAtrRDJrG9CJg5RETTNkyAPqQu6UkgoHwyt",
  "key9": "4BnKvZqnta7aAmb255FQArwjG7LJmKZfMDRwFZrhimbnGpgXKLgprWntoDnoG9bgzJ4U7UCeDPhT5bby2FLP65mw",
  "key10": "4Gs1QKgCVHtT2cn8eHp13scbHmmCD7EdUdjYXB9kgiH9bW4oSWNRpEC6ToxGXUFMVN63a1Pd6bpfaCgDZZg5mqwE",
  "key11": "5qmPwM9h7tSvAiVfPEY11GLLrJN8VW8BD5USofZg476FyEQVkVdmdntzY8hLzTFq9XU3yCorqV7MuiDjLSpW6r9b",
  "key12": "53NMZ6xWcxdkif5H9us7GbTxFWmnRDQhUK4KghVF26CTMpEWinD6j8bvAsAGMitPi8bMWwi3sKgdsY8PUfnMymKg",
  "key13": "3jYfjdEocwYXyZoH7ace4EtepXZXS5rExVEJod411mGypWJTwacDQHu9iEAZxN972weoCiyWtpmxiFf66ERbC2ng",
  "key14": "4yWMudYLBJFUvpyaYopkdpYzWqcqNodLKFeE8wPJZxLtXB4YNVAL7fXNQMuZLn91kRwvRzszWDaaZTpDQye3FZVZ",
  "key15": "2ZSqow8paAvupPn2CZpMkrHpcrQSVt7W8QNdDtLhHcB1k3mKXgGPP4rgmzSpXJ7W93nco8GUD9WXGNktuiKD2cKA",
  "key16": "3Q1CEsKww5KcebYkQzNxwM5eFLX9jS7bitmKLYyckfYwdCiMLtj66ZAup6ejdxmYsXnYftraSffS7A3uw8SYK5Ls",
  "key17": "5G4ZLBnukm1iNjmKCtE4X5JrNiyQF4LuSnHLiJmVVzdKWS6gqThS9YHLb9W52PiWjri4Akd3fjdTSpXTPAC1SbHG",
  "key18": "4zujnnaAK3hL7cuufzbxnx5tTjd22zbuJTYmQDu1UmN3nZEQBRryUZw6HHsphvFpRgyztJpdoGMH8thnMqSYpNNy",
  "key19": "Fc9U4tSM7jCAnKERms2wiAM9maGozMYyCwo2qYHamAMLJJu8DiggKC1vLgVab8RfnBLK6zk4RyEAVLmJw3UMWy7",
  "key20": "5znM7BcjEtxcjCRom2Urf2Cu4c76K2YtYgJZ77W6QXfNq3ZZvcXkrP6E7As55RjNrsyJmb2kvYbK5hfmWiYotk2E",
  "key21": "57SFw3sPSUFuqTn5KGPTu3WkSjfN222wC69XzTru7imbBYSSVHYyLe9hnUQ6ufoWoQMavt1gKgNp1sn47aMyNtgn",
  "key22": "3423FZuBKGfgcaJwS3SYTtfKm1q9aTFCTpEsGJYditTzzrwELftT2BrfudyN65KNHH9nXwALxAA7JEv4gvYnKc1X",
  "key23": "4vjGgvEh5MyV5qZS34iPMVgF9XkgpSPQMH62hjPtki9u8BobHUWpssuarcNSzQfwnAcdwMFYK1zXbHxyrh6zbYH5",
  "key24": "46VM3K4STD6XQ3iM9kWz18RXfS9fTy8ry3pSzCoUcwocdgArxA631uj34fWd9k4ztrjgNrU5pCAShYBuZSwCKMBT",
  "key25": "tvzzE7wiTxp5yxZPTL7h5XKyEyXHTbtYTejptFKxsgYT2sohyZSvozeKVXKQ9Y8ndiYosxpB5ctxcgQxygjh9pT",
  "key26": "Ws49hCCdmCoZUYzPduHEdKBPCevtY12ptGkb7eqsdRqBV1hVN6uB4DbNdWFakSHAU5RS4fhu9Tq74MNKR1uEBii",
  "key27": "pmRkQFVfy3kKXAkKRWaqAzRSsXdFVJGZkfGLQNh2o3adgx5LPWKVAsEsWw8t3coFQVS4NonB2R9v4ozEPnaCBxk",
  "key28": "5kDrxvoHjpHyf5t1Vke2FX2CwFsbx2ydziosRuUUesfMmXERRTUiNhXNUt8Rp3kQph6Hs1Q9ASGWaDLEsYx79VjK",
  "key29": "87bLfj7meKke3oGDVXw1edu3kDaUoNSitV1wQhupcSsRyF3p9EkBs7K6kTirGKMrckrqtwxrfvKovGAoCdomt5Y",
  "key30": "3mCCv1KyTZeLq3J3fbDBrsKQ5V8spomoQAk8yxpe51rucUHYdkUNKfcd8r19fbGVmCGVufps1DA767HbvuQHxQAW",
  "key31": "2G6h8BsQDgFTD4ajNxKrweagq1N6nSSfQUB18HBpLry5nxMfLbja95sUGgY8gm3MdzZ4WvvA67epe64jetHjSti3",
  "key32": "358L4iVveb4NEHDT5R5pf2ELRXU4x7Mx4JUJTcwcXw4TLW8HHjhs8q8m336dirP3rz1Q4YFFds2Hihmju29nJoKr",
  "key33": "4eT9ApbaEv47aW1ZG9U2a3MrNVHwdcTCBVrCE6HFd3X51iVctFX8dQ6DpBTrasYvNvm4Ta9Mm9cFjz7wDuguEChz",
  "key34": "3RV4hw1AkscPQMJ67MbzTqv8MKby4n4wtnosg6jBNre2HT1QeLADxZcFXVjN2uhE6GCAWcJqqhCvrdAwwNdSkFvk",
  "key35": "JCVNibLjKjL96JMgYkHxTrWL2ffRuvvHNBnEm77ob3UzK4JUte4mN6zmmHp5Y2pC9DKVrGGyneA2WCLirKsotCS",
  "key36": "4AcKEYxTNmdAN4bJw4NvchHWcWmUhBodX9BSTUChqTAVJBUJ6WxUjx8tUovWNr8zPcLw4CWo7rwiFBM9hRYpB8Lm",
  "key37": "4iVfBPkLjtJZKtsXpPpvS2pn65RS1yH4F8rp4N7nayVyduaucqLXhww7zkeqNJKyrw1j9zUXGLpkaq6PiASHxzFS",
  "key38": "59igTDUQKUP68SkGDzQE4BLqPa73wJ7WiKqiZp5idWNTouY5aUxbnyWhBKbx3F7cCwfdufg9xcHsbc7C17Sv8e5s",
  "key39": "Fj8wsVcp5pUzrP9XoJZGQq1H4W1n4nTGMAN8zw7E3Srp4r3he3sQ3k4AvJDGymWtBzLNcbdQzJVJZ5thsJgyrZt"
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
