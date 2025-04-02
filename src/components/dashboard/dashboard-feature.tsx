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
    "2Ku6BjxnRrusKjHkFbw7vp51xLvQobYW25GEQYc3YGg5ipoSi6ziqBLHc1NyYic83WphMgj5whcmivZGEh3A6yaU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "twS3w5mjptXMp2EEdr9gTZfWGth4H1bm5Ci9GWqK614DHgBuQ4cTzUVm8ADXyXymbeZZe9E6YgbNf7PkytPjn7v",
  "key1": "bjfjU5TkTc6mdcyH2cZBDF8Ap2KYukg33WUVN7V3WB7BtXAcUn6wkpDDHgW3ZsUioDuPw28JNEDxa3DzWfryWpG",
  "key2": "3oocAi8YJpkvoczeeECEGHRMhVBY9Kxbc8637xTbVJBPnTiLfJdrnRjkuKuJZEfWdKYvMqLo8Bmz5q2gc9CwjJ2n",
  "key3": "DHxBQNwTnV22o1hvJMghr3brmCYfG5QGwNbTvJjdw44gX1R7SCJYZcw1AXd7r7vW9ga9bypADje35mYQyCFoRyk",
  "key4": "3nhfDmSAHSFR9KAkA6GCvtMAEVwzEkex1K7mLTmEJZyUzMTcgJc2kbinWEjqWuMRtzjLxGpK7iuk1arPY4kGRFcE",
  "key5": "37zMwZ6KiXSnaMsRwJy8kVcLCQ4yA45FzqxGu28yrrNGTorny1UTNJYGQfm31kWjHtmhWawUnWtexzHhnH16EGd1",
  "key6": "5tHwMohR2hTpVeNgGREYi8p2VLwAC5h1ztVW1iJVbpw2H1AfFXndjvDjYLwxjKLkiPrsrcZrr7HGVRQB2bnBikk8",
  "key7": "3qQpKNBjW6wNPYnKyqgJuEXVyFsM9uPAHLGmMwDkiPcTsFJULBm7N4roLuD5RcvmhMubfcticjnGDQEPxf7PmZpC",
  "key8": "rg33VCu4GwbyeCEPrTofZX9WV83Q4xKZqNHHHEfsD5EKyPdgVPXRLifE1Z8xt5z363BvCWQ9wMqGzATFnM2EJav",
  "key9": "4vurfMhsLz5FmaXMuWkzBpzRhtVxyDnYCjUoeYQdwmo8pmKmrpk7nv9jmXnL8NZq45B6ECojdRkeNVGkLEvns5Ek",
  "key10": "39auZA46Aq1qC61Y3QUBNU1cy3XTBJCaryA8xmgxL5WSNXgU6FJQZ8n3cDXKs8BYhVgAiwrJHGtTGFXXmi9pabuc",
  "key11": "3BYJ8pxrDwJq6P9gCXWjMQb16m9YwSSftmc2qE5ByJuojtoshDG2jMQcnBJ19X6pL11KGqSXWYHj9APKw7bV8UVr",
  "key12": "5u2eBVF8N4jUzGFBVbudybKNafNxALFiepaWL66q6kPUnouEnkKsxww3qTTCWHQF9P17rUs59vkyP6yh5MeWoJjF",
  "key13": "4kr8BsDFjvPp2oTCBBWibjNRkPn9RGRkejhXxwTEotySuQcQsYFD3tWHFitHWCQBfPznMQGiMwvAegbD29y4tCuj",
  "key14": "3UkJj6Q4NXYRrs6F8tcCxnNVKPqvAebCu6jjp6K3aytjWSnfSZ8YKWsmsvv1BiCd3m57PwCjdRWm82rg8hYoGnuC",
  "key15": "kfqETZ7xhjmLKQoCb7kCHpNEjBvSSR3JbsWYcZPvX9cxM75NCtuM4YxcNCHuRNhPTKHHuoBXkySUwyJ6bxM9RFX",
  "key16": "jcgSaqkYHdexmLCADNmvdnHMhToyQhgb8axav8Ek7Y9AQPLcNbetGvdrjBcbdPqj8AMnxaUgX5vPQGinPk6rSnn",
  "key17": "3yjGfEJwxWKepwXCwwrEVnPjtmsHYxqUieypWbhKgS5fhfXpHFB3AZH6NeEAAFnC4minWgyMvHRWcaU6XBx4xxQT",
  "key18": "58Yt2V2uUXHksouYXsYZXvZDbw6zV8gcjqn37SwpE1pPRtcNxg7kx7WeC2rQ5BXuCKS4ByugMUZgdsDgDDfu74X9",
  "key19": "5quQFbfr3Nw32gq7eFeNDGmoaHX3PSFRMKLDyDQWWitG1XVHjyesKYVWHUdkVY7ZA6R3iNpjPMRTC4M83ibkHSht",
  "key20": "4o7ssis7pMiyQH7AwKUQVJHkEczmMPv9TaxYpBrTKcYhgJijenz4HguFFF7y9EgRtnsfhSE2ZMYKvCbmRNTyDCot",
  "key21": "4xNeMJq4aNz9ZUXZAstoy72LjbgVhWpj4TCNj9aowTLSiz8LJyRfBBJ526qEpvNsVGboBdbZAVNkS3yPMzJKd8k",
  "key22": "64h1Hdo3HbqgDdtqtq6JDozRM7X8DbZUZQLLV2pTbCpGLYUJE9HKytS3uJEkhwYKeNjXkuZtbbZbVq3joKw1NmSA",
  "key23": "2dcF6LL7vYZQ1DhKVEvu4yJF5XTNmNcZHmZCRD3czukzRt7xByrzYDautnH6gJUqTzoiPap4fXY5d2EEMHg9SrTz",
  "key24": "5urp2tTcc6JSVSEYKdvFrtCkRD4XXYKYtpg2igyhzZQXcnhCdJ9UzDVWppxA9zmSSDZLV3kShK9GXo9m1xi8s2rn",
  "key25": "hPd7PviCydraugf8fmzqp7fdcqY9cFwdbM3Kn6Ys19mQu5cFuDQXEd52cyZd5PVh8h1jmJqjozT5oao9QPnibDd",
  "key26": "5hftzu9wd3vsuWzdxWoyxn1brYhgPxh9z59jykydTSoUc1ZTtdM9iZcypZ1rgQFFHz1Mm3BzNDqmPfZ6LxXepVDH",
  "key27": "3mUkB9YqKi1RhKPYksjHLdsa5dQ6Ab65CohQMRT8AVTorjeHU4bV3bUkEfYXog5EtRu9QopKrvRMFNkMbbrCH736",
  "key28": "4oYpUcLqy5oMTBQCnbjKCB1m9qN3n6MXP5PSfD7ZNp2xwkbdFFzWfUpZHif9L7K8pA4c85xofn8AyBXWuZt8QBxA",
  "key29": "2YBr443kKEBwRTUr6MmaQ5PzbmxeYi6RBmYpq7hHawadgGs9c6SLdFD19bjBf3Ey4siGMbwgytob1WkZaXSW5MGh",
  "key30": "4fbyNXEJerUri8FLCA86JUfgLZZvHWG4Gz5RScsu3znn6UGpgWpbEpqvr32LXnde8zCTAGjhkE9XBJ1gLLngtyw1",
  "key31": "39ujR1uoDDsuBGywAWknwsCoVgUihjHFnJiV8z69nxYChcyUU14KcF4WN54kMdhtXjy6u7pmgKuXReVaAwgeMLYK",
  "key32": "2N7EefQaihWEwGXHiqkHfPrt42dKD4NKc6bCyWXaokPErw1MdjdRBGion6r2Kbj2oUXc6tfXBz7Z35AKGGEVMvTG",
  "key33": "U2LfpMnhE11o6wzHq3MoBGQTvSayyiNjHhNxbvUKcjAENEBgsWeSMmDjvVZmpaJWYxwKPrP7xvrUoKJP1rYAZ3b",
  "key34": "45oK24Hn82gpRnDJ9ahyyKG2xcG9mMRCEnw7e2a61JxdZY95ig9JHMrnch48ZT7suTWEdJjjADXKs7gZeXM7QHdp",
  "key35": "brEX7fXGRK8Cewo31SmDeRypbWMxkv4p4X9tzbUJReAWf9LzURdR4ne2njzDcnQazBbGhL4u6emVv9JUGYdLLzh",
  "key36": "5vz8SSWDBiotFD31Em3AY8rCndXwBSeywXFbui4YtMqRH6QE1oozR5N31eJ4aqCbJWzYvXtnSnvixMefmVhAK6DR",
  "key37": "4N13gjRR9PyQVHQo3DDau6mf1pW1SyN5ozsQL3BeddK6TbGUJ8tAtHRMWrmdQyiExywt2RazBbF9bbMjRzBkdHfT",
  "key38": "y6tXNvzi8TqS5UQUU3NUJ2kJNSZHsPy6DvZnA4DW41HNX2TBG31GxLJTeomDKKBYfDnmEStwPYr1gNdHkz4XRck",
  "key39": "477pFtv7jvSKLZ5LQsJcRRuLegarpFo1b56TqHFMXH4jbawZm9v2oUwrbTMyxviZenHU7PcNBCU2yhyiEvher4n",
  "key40": "4Zj8NC8KwvccY7ENBvZyJQBqdCkDpKANWmauXk5pMLT1Wk9G1LCKu6Pmu6XfrW6MQYaKysgrYqeVT5Gqunt49cjx",
  "key41": "2UbWZrCUKgDnv9bgpdKREGppo5FPBFMrgxx5hQdx2Yt7fGQt3gPAuGxZGAPtJx5H3f49DRs1AaJtEDRf3iYRHEE6",
  "key42": "5ue5eGWLRSMSPVtNjpdcvqZoivb4vRuC8y2eCiSbmujWVCmHFWQLfvjLo5LNuixJ3UDMh3JijTG1zSc6zcgrtxgJ",
  "key43": "5Ze1voorJFZFe9xgtAzWoHEbSLqSmNjx7mTbdigQ6uhZJUTKf8pu16MakBZUzVBY4JSXYZJJLQwa8jmnEDxUJndn"
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
