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
    "4s6ALB5huP1d25uvq13MR2YbipQ6Y6W4QjqNuaRQQnp9aUmUJ9VG13MCwTewMrFzRTKjARH8o9NJ9QuxtoxdS6av"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rD7BpXRE5dXsso559DVVopMuAfeNeKgGo2pidC17vovQ452siiUXiVQ7Gncija1TkTYsYTQgJE8jbRfQEbZj5x6",
  "key1": "26NFxrVfgjofjHb6rQWXFtqfDfgBv3M5z91nYkqyWBeoDaL2pjKSQQYjoXP7CTsym4b3tJMn3q46LDvdmNBPFdmS",
  "key2": "2coPVQzAVkPzMAA7vGzt4M58CPCTubhJmT8Xfb43rkA1YUrY2tRpGYvRVxkLBYf8P69oDPuGZj9hcso5bk6vfqgT",
  "key3": "2YjnvG6A7LqRrsgnHaPRoxvTZNDqqyn825e9j5uiWunM39sFTwyVtzyXqLtzxddJb2tCQU93QBbbhh4ZjEx1bpxT",
  "key4": "5MqoHPbTwHnjPirqaVFg8kqBoVCpFn5smHwupGmq2GPcauXxGn13Hm1KUNuB2Vx7DyFCgASCCn4RBFVJEXrY37X2",
  "key5": "5KMVcNZ8mq87sHHhzJqDMt8PFAdehmni25FEn4XVFHvqTE44ZnsUjeh4smgvVAFUAsNBipcLhbbgzeokbxJvbxRC",
  "key6": "2fFSf7mD3JPJQMaroscWvjoSWRVK1KMTeNxu8o1i2Vz9LhFQGo2FywtjY6VhajragGBtwfR9iy4BresjH3Unofhb",
  "key7": "3fJvfS5no25mKYsevNLQjTFoTRZ79SgkGSPVWJ1frbiNJPw2rgJWszZcR4Vs7FWdLqaCULfPeHZRhgaRRHaoouYY",
  "key8": "5eBoh1RCEjPdq59fFoYotWSNta3ziKFRwUn8w1LzW8Egdmx21Q86AkDBF289fstVvnMhpky5cHQavNvjyNLdHe1a",
  "key9": "5ir5GpRTHdDYHXGWCaeqYkKmVsd8oNSBDL9HMX95QyDQg5Sq2P6ELpdDA2ewiLNEvh3wPCiiMqsDsCmBDzKCCbxv",
  "key10": "C9XjQJsyVgedqmRR5WU8BfdEFaMfBmvosSeuMmCp1LVebrXWpdXEwPYDSjzuzeQj8bSE11xmmMXSRMfYjwzybtq",
  "key11": "KyMkWpaNDK5tyCy2Ms7rMvm6KFrXcfY1HoNagikeML7vSgPcriDc3FUt8FnD9L9rDdLo4rBmNeACzW8gWFMNQpz",
  "key12": "4c63HRGiYqQHRuNfn6vcRY1YFidUB7TpeYy2mDFguohSpHF6b5XL97UsuQuGh44p7Kme6661PmSXEBBjYdASZ1S1",
  "key13": "63FBbUoYAfEhBJYp5vW2XW2tL9KQr7qsxYztgJrkUxWoBXqrEsP4ZA2ognPp5XsTBA7c8bAkQgbowNyjF8YVqQ6H",
  "key14": "5Fga91YjUzL244CnRWpTbyzbYGCHPYiLsUMciQ3GwwvabK6mFYTdtRJdHZY8y7kQtUxcNhSofSoLwCRFnrGxXHhR",
  "key15": "46du1FiX7zkCfVV3XbHyBAjGqMmZDCZQWpQMadeboWh3LEypLLzGCkfEQEZBjttwwM6gLT3EAXszvL32g678wRtn",
  "key16": "5pWz5RG9XvUha4s6xpBKXTFu3oNpvtCAmzc32mir4h6RYKgEvRMbJCi8WjhpLGi6cA3wV9F5D9SCeTcdHw9AyuHm",
  "key17": "5qonMVPXnVrn1ALnAponGFKQ2gsnHwsafarDBmNFN2yqavHbgESSyNR6pqH2Xa27YdHWDGBf7BUuHfFzwpEZiZPY",
  "key18": "2rSMFHNVa2BsQr6TX5hqS9yth4ywB4kyVudztgUcDfZKSHQpGR8M9Wt1LiU9yRfnWH2aEvi1V6F1gfwgT6cVRt4d",
  "key19": "5DY9Zsnp1eChXXM4uBN9jUSij1xoVDJxZuBa6BjWNBRj8y8mA6sZqFBoEj9ZVfBDSogoC9N5Ev74K25dEnN8w8Yo",
  "key20": "5nDBxtVXo9KXzQBPsH29D3VfWTuzmuUM9PUd3aWLEEchnDaRpimLmayNkPqhKceRrjBksbsyAf8BreqS6mUpcVBt",
  "key21": "61EEwgfNTi1cvhyYZGoMtd93miJ7YfjsZPG9VwfZinBirQM2Cd6EeWjFFGqcB9VdLssK3jbh2yS3N6grwcSvzCEs",
  "key22": "2EEADRrNsDjCQjaptaUmmeNaX3RrR3WJHUp42rveerkM31m49tFwGk4PB6iH7sACyEd24yvYgcuLBixqKr3zPe4b",
  "key23": "2G3FbTacdt8U1z7i9GnMRuEgfVWk3HvADKSTpb9DmeqnBrKPsRFKYuVmekDTUhWCrVwtoai6gobvWngHMTMDf3Ky",
  "key24": "rYbFZiBRoswSpv8Czqj71aZuNkd87BnFP1s9EaKLq2hWsK4UQJAEGFy6qDYbzfYZTPCvwvhKvwAeuLXofr37Vg4",
  "key25": "48wxMM2rU9KFDh1nyXzfYAaYXQpy5waFX6FDenvhrq8ZqHpbXWPGo7CgTauky3xsKZk2GyVsuNVGaZg3ejSHKidu",
  "key26": "2h2yZXSZNmj172BwXs9RosyBGwrXe31mnBpWXtAYTfqef1rmeSHms3eKEdchsHkp3cWf68vM7NE1Wp5QBJmHBHJc",
  "key27": "2bm3fVUhX6ipDvEMREnQry5Eavi6v1ux9hrpLuDK7KqS3Cvmq2LN3CneaHZp1pnqU2XHQQ4fVv99wyRqiAx8mZqY",
  "key28": "3PQNX4YbuELYMQLmmwH65uFG6eEp5fJM9bxqaEevavXYZk1PxyNF4NjkjYo1Cic9dULDWqPnqPT2vwacfGNN8Zwe",
  "key29": "4TG3JWtQZsvLYfTj4v4bat1aD7P3TRzAZ3ppdkCw5DZSnfJooeq5anVzUE4D7JNwedJYkQRTFwcLs75ntpkuk7aj",
  "key30": "32TptgH9QQb5sGKDKWZyjSF1s17yEKQXZoE8PMwYjwwhoZavxT4SVWBRRXjvpSgkdMBzWXf5jG8RXHeTdgLXaEqC",
  "key31": "33ocdQ3wrznRn74gvBzTsChZwbgqdC5GFaPJUEGYFKWCvHbaCJvawgYQv8YGSXGjKANzSKZvfCS3ka4NoCu815hJ",
  "key32": "5NBGmFVCGjSUaExpZYEppow39DdKjBT1hxgTk97y5SqBT4Mx7swFxV3QqwHfbfKDPjrpj9PLZj1heTP9AsEmLg7m",
  "key33": "5zNDvVzRdVbB6FJJvJSLMATbkCWZcjKPpANZx9qVMACyV4h6ZGiCr8iJ6GsWkfoFaZaUihxYEwPCJU9nBZi9P76U",
  "key34": "4QaFQdQ2ZL4ndqsN8jUmNbDKVFEixQFqEAHpJPtNAHz21V8TMu2J6S6p63efcqzYknNUxVDgt9jvdqQmaGwUMX8L",
  "key35": "5Yb1ptJR4K7j9DotV5Ji3cpLkZncSE9vsshdzPMFvg7MkyLUnhSZYpoC2TBgKLBp6LqxbwTYVkGMCsez2EvLj7jC",
  "key36": "474DBVZVGevaHoMp79FCpajvcy5rr6BkYK1mge8EdurPQGEZmurM7Yt52rGAgdBbjitzu7rrqyzydhC4pmq3vKVh",
  "key37": "fSRsBJzexafKT5N9DmAjqdrS8ku6z5KkggNUnWHkqTRj349bMyJQ7NTDAPjdNh7Ke6pTHAS7utvnAyMVbU4RkHx",
  "key38": "c2p53JVgnifezwufZZM3L6rYT1ofRKgagGpv8SLCvC8wCbcdZDKHUxzpBQyAr22onKgoeyRDXzQKuB4exk9kSBt",
  "key39": "5fAkVaNbaDVBUooaAWBuo519pyhtQRhAJgPLUw8thZSfwNc7f54f3ev9hZRa36BpfC7VQ66CG4vhE1SeAgyuH2f3"
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
