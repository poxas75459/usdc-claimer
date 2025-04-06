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
    "43TA43LwaBjEfbbzHYwt34jioGd5fZfs2zboFgJcJnSgZqaWM7ejbKWjXj1htUwn6esJxnzCzTxb8QKKnoDWzkdT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b34iPUVLB7GUFLYDKLSeMPyuD87SfjuwzUv5AN6WiWQAgFrWMUjv6YoWPfgdL1RFvBrzPFgJXsTyNnRrPanamwn",
  "key1": "5E8yzGouSggPXBxyeCep7RoNaJp2hkx3SEUKjWKW2ppNgzGKdD9Njywyhr1kDUC85qNZNZVS6PudeJTbMpwKrefY",
  "key2": "5GpRdcS5TxFLfn9xWRYWZ91b8irZVqzZ748DgHuiVY7hbZbRhqdcXwXkwf16NaqG56KNBCXfGBHQTz4Nw23zkdv2",
  "key3": "2sjf1ra9Tg7Ekp36Vy9sVx7cUfKeDPQnaoxJc8fvfvZesxj4xcMKadcftaHy3J3wqmAQ9vLFKPZVKrMdqCANZYv2",
  "key4": "2NaCFuq7QKAz51nYv2g9ArVsEi1HqCFoRJnhCJ3MwPo7XwYneydZuteLo3QYUDVbnp7DHJFTjmRfDMSwwUQYAMLA",
  "key5": "2oZK9BygRsK8iq1v6bNaqbUquirEWjJMWnYrRLoNH2sabVs4WvkS6aqzFffS5j2irJurfbx53YD8dQAPdgHumpPa",
  "key6": "4fQro1veGQxxscWFNgPih8XBXa6YunFhCrkWLykz25ppUJQEG9Zn7qwD3bVFN69rsHLkJL7WUEDsBTpWcNGKphkJ",
  "key7": "jXtscKnv5f2jbpCuBdCtoMXFJAdkcdWYsmGyjLnHnaWhRpcx531efjPWQ7XkDk64MTb3vWA1q1J3mXB7pBeDLAx",
  "key8": "Jdu3z9JE7E8FEjzgHbMLqZTqFH7f3ZrYvRFqS2y72cktS88d32x1u3kcA8t7zuySbpy3zPMmDKtLGn5NFTqvtVF",
  "key9": "tmcatedhms1RRH9pLdQEMz5EiFUJGYYwkvP4uS8RBuVk7bXR48FEibtUHMunAxf8jinSB3HGw7nD4PWkkf1iw4j",
  "key10": "jAN3KVEhcGccfn85UYBqtunXjS3gVhk1fXHT5t5kEApi7nLtUqy9qaJc4qrhp7WeKtHeds2a93x28jTWwEhbNeN",
  "key11": "4cRaKnv3J7BGtctCkHDADsExcXJoQfopNQ6CgB1UsRf3JedBDoncE4z3E6ccu2Zp5vEkNBssHL5mFz27Ahj1M2Bo",
  "key12": "4CPriSFLWXEoCzeXg3kMXySR2WX2xwj1DdcHvguYX4qvPyw39WpMx3PfhyPf69KcJEnfi539hi5HKSbfXjfJUq1B",
  "key13": "3Eeeg3K2ecShcCVpheeJXJJiweRBp5TsBuS43aQXzTVX4Ddi9Z5KPJpBkpxUPTNwP7juFtYxywxPv7Zmcum1kTnZ",
  "key14": "vsTF9LSiYi8xHXSxdEAXQGw28EzrvnXPcv4hV84uAJq8n3kcUJaDcqYXw7ntga7WSmAUfh8eijpqGQe4kTfBNcw",
  "key15": "2f7RPJmiaWYvADLdyY99KzGEzHd5MNYScBPitLMmR9WVvAw9TyHaXj97v9Yt24uZYRGKkdGCidWbiQQ9Xvu9kvoq",
  "key16": "5wUifqiafWjfbcdY9ud9Bb9p1rx2Nv7ShGPEo1SVdL5iuaeF7iAdsN96mFzPr7uRemYmJYxJ5gee13qjnFDKLAiF",
  "key17": "3QVyVUmRFBNoxwxjAHaynwv27bGQyNyXoyBJtBKAacQHRHMLAkWJ9JDMFt23YaxVxpx8ZJDRi1cDcSDjT8i63jAw",
  "key18": "4Wi2NV7E8uUzJbfRET4otovaFokPxTn1H43wgY9qXbqFuTqyLmxwHvyoY1x1WMc3HG3GsGvTN4RCwSWLkkUdWNHr",
  "key19": "2YCWcC8C15X5gLzz8KtvMKDCgSi4Ze1LvwafVjAENGRE7JX4ri22ZMN1nKx3xfJA6EkAg9HdTQkm3AMMTwuxH9CK",
  "key20": "3mb7rHDvtytp8ZDxmLRGH1NEqYWVKZmsQiM2hL9Qix4bwH4s8W9TujUYBD2NucoVeA1Vkahngx8vJ4matWVyCBfT",
  "key21": "5U4T42CjxyNAer9iGNcd1LqRers8pQa5GYqEB76pFSjk8DVFnZFxihZoFWtyS6bLpe661fwoFLDtnTjWB28WYGqy",
  "key22": "5DqUHAzkg12YZNge1UvuqAwc6XqemLqDohbomCYChcdXvbixGuou8Wrys39z3FFJwLB3sSx7uiSr6yBGx4RkvasG",
  "key23": "2cQFus2sDuxwdVpSfXJiGGAytkjhnao2cWe13vLwxFhR6C6GajrjqqYpgmttdy4sYUxwfs6r4sEJC653pUsnoQQv",
  "key24": "sCVjhoD1moU7JXrmkU56rruztukymuPtHgBCtViTYbXY8NNieteM6wL3Y2KEH7yNNp8VhSzHyWev3bKqxrHsaEM",
  "key25": "41rwhvkH7s2uqM8BRUiuuUsySpvmafCBAU6JWL6MLKaBFgEJPVcduUpdHncqo4trswQj11vPh5vDv1s4NBC3chR3",
  "key26": "5Tv3W6wfQjbWAUCsNH4t5gzMkgpDd7Ze8WMTmCgjAjhpU8SNrpDNwPDxP7aiXD3pwMsVLqSQWYxQ77sqUDynYWDT",
  "key27": "52SKTrZJ8Xz2x8Vhzon8qUVJK9YCsiw84wFNzzsfCfvTkFWTvSChadQe4SvyFDVNd37XNJF4LPp1XrghtWQhJ1rV",
  "key28": "4cf1dEmSmz7ShYnHdz58TPnr7BqnT7XDKGCyZD9tAWnKV7ZWcXWJnhN9uHcT9dJnTHSeb9ZM5HnvdZp1bxqLAbkT",
  "key29": "4xeHBaWiPqkfmYcaAM6x3iabfo9h6JBS7hfkMftYcYJBef2eEcDWwZSXnvPJuuwqtbMGHGWrZP5uP71ptgH23GQs",
  "key30": "2nC4csFd4D2ih6upQ8KcWTNgYV9P8qYv5STYcUPS3SyMt6Xh459DtNADY4AbNZDwHyJe4TYPfcGFfcUEpUEFYwgm",
  "key31": "5ykjTABdVXnteb4QTScepYgj1iCDGpHbFezkNBPDo9Qy34yy1WA1qMeXp34Ss6bQJ1HZwW9QSTHACzu5YUDZBJZx",
  "key32": "5imYcU3LPBt55DroBDMZLToHapnC49xFzMnLFT6paVXXQem8ytwoYrS5wzKnrik43o6HXaNPNnPSr3wwp8i2GMpC",
  "key33": "27T1mRfaG6wDUpVEfiLEe3qsf7TnTaTBHmPppw7GQDYXHo7Q2iY18krBFWqxuwU1MSgXc61GUdNQ2aaTwMcYT3Wj",
  "key34": "2Ma6rVN6uNLaxZiXGTWoAjfwu9RrUAERnXYrFdpyHfrYPQBTKVFB2UYZyZRLn4chNiqJtTtLB6fphNekHxKSgLDE",
  "key35": "3kvMYLcHsekuHtzcHq9BHzoFeGs3t9uG5DtFWJinyCvxuo3bnxaUz5t5a6BFLUx7DcP4YKmbCKqvT978mXXFQTsc",
  "key36": "4uEyAsaRpDvk37eRJUqGXswkdUsXyoddNVeHwcvRfNbHWLt8HJsk866XRAuFi4dJrQELjULEQ3N1Zq9WYAL5YKoY"
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
