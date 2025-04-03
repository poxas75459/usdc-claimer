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
    "wsG7eVp7dXzLKPyV7sGPrzvPLa5X5WcxNCLASJStCYwHn1QisL7wFsZ9PTsrQsd4z3KXK2mruf6tCJiza69c28H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y4UasiUsTNBTxgjTwbCpkPCsbnH9GXaeL3uQSduMoYeW5WTzBryQ9Mr35cbWhygonDUMBCyQEbKnukWRA2DtWR",
  "key1": "4dQ25m2N33t4aTyohRfLjGFSkHK7kBDiUoE1oBaWpAkaF5AqQQBwfgmqGX5tJCMcvFujG5tG6ZsQQ7pSmBfGrxAR",
  "key2": "5ztrh967eZJBee44vikmAMRNqyAdSYaxCb9VdAskFs3X6inGiWarAYpqMbEcAuFhzh18sKGuh58ckYPhEWwds9dh",
  "key3": "2RbsjFtLhesdcK2pdgfApTrdhKRUPcpW1hCQ6UZQ1q8wyV9hVbegXGQnT3tQdbbeJUATi4hdav1ghtaTSdk7sbBW",
  "key4": "4hUZMuHEk3xyUe9hZkG74JxtRv696MwkwvVCRuNjWGMcA1q5tCr6r1tVFcSfgEn897MFFTnWLCggy9ZKdQcRqNay",
  "key5": "54mRVKSUUwCnNJEnA5HNoGBeCUJbz7fBbXWdC4bxk4jz1g4Fj1SxoosUAXDwQBrZutnsoMF1BeEfHChjrSU5Rg8s",
  "key6": "rcFuWcVCEEyeLhMji7ohuKZs8RQaLgKFNQtZLGCdAJigjCS1xGasXvVxFuTE3crkP37j93ti34wtJAjYQ9swH5D",
  "key7": "JsRL7goDLgkk1yHzxXhBrY62xAZppWhSBe7tCub5snT2uQQH6JtJiARRyX4sVi1M9N7UWpB2X7kurPqnBGUwTJX",
  "key8": "5sYddXnpMWZr1TmAYxGqWeF9TswACZyEvMtWJtLF5r2Vf4CCZNuvc82XMpWsaw3ndZaxeY2KpJsHRYzvj71wTyTN",
  "key9": "5LpTYFh2fodca6YJYt2gK8tthpT4njAQ5himyMymf6BXH2N371uwuFMsdHvjJ2nw7Vkso8keU8uEZy4J3UjAfhW2",
  "key10": "35EDwz9YCmKXewnB2W4NeAXhTdX5SkeWy12jHrtDKoT1J3VngwcUe2B16ykuQiwi4zTj7KXp8mYUG49ocXThv4GG",
  "key11": "iZEXsQsA3yZjDoSvtXvKbjGXBD47sCS8LhgieC57nFyaH5qGwm4pXnu8WCiWEAZx6ezL7B8WARrTiDHy6j8yzG9",
  "key12": "3CeLKq3Rc2cADB4dwKXhAfTKEShKRF1mFf5N39cEts39rvqr42J7vu3577VC9FzQaYAaq4y7o1tubhDgtSLspqYF",
  "key13": "33AL2biAgXpzpz49DzGKJb2sSUZ6zR87XChCSVPc57MSdXSEo1jH41yrBoGq1CbXodMiJqPH4hoqEffgFx8jHefP",
  "key14": "2KZbHGsoBCDDwzcS25HvRP5nUe8TCW6qdSCJ2mtwP9zsB8S7Kw4pXLxCkP6Fm2mz8eMAj9n9N5wxwFKKSZiwqFNP",
  "key15": "3DtpupWSQjCCcsZkStBsFyZ7LtLbJp6imBDqvJJYynJh5EKTgDorw5bicqdr5jae5bEyUVug86k2ivqZji7ZvCNw",
  "key16": "VqBRKsRohyjm9VGXa2U9uVHfKHCnsHf1PLvfWn7RwhNtAnAFf9BKN91AnNzxZXc4z3tqEQ8oBEZwoMzMgjV7vsz",
  "key17": "5wkPhAd9Cvce2isWihUbgXTmGSVi8RCEXPYWHkax84v9URapouJfZADJecCJxrU8Q4QmBQfLJmegXbyPGobcfJNg",
  "key18": "4a6bhnn4pjxbLr9jdWm3N5AHEDDaX3APet54x6mzbqoZroB7FqxY1UbEKA5ptPjcYoZ3b2bEY1wb4w1gZ17KrmDE",
  "key19": "44FmMhuVvtEpUcJnY1w1gqjftPXyzKuxr3MEvzLpQeienZkvUC2Udip78C52VX1XfJ1fPmMmnY26jtBZL4Pa5Bno",
  "key20": "3pLGWzjNsYi2CAFRFpJ49LJw1Ru44jPkUCTPoMyiuW6NMU5bDcN4UwKhTyqXz2xpNfHuBfx5yMErL2J4pPma8K4g",
  "key21": "5MfMrUtDCu2GyxPYfUrM79et3r9NZKbTjMJo2faGCRT2MNH4a9YyAERNSLUVdnbKNouyQ3iE67xyWkcwws3h6nBc",
  "key22": "3fQQ4fqJHFs5vDD5Ww37tyWzcp33sZkdDwxQq9aKeLRScaZQnGsQPQsNEobcTVsTUxsU9EMmJeKZq2Tgiztu35uH",
  "key23": "4sgCpNoAhYTZGhg9CGfdCrSsFyLDiq9mo2YX5jYHUMyL64KY61tCK63hGJB65DfZeaJjV8GSeD3QuPytgiKyKWqx",
  "key24": "5g6jKqGTh7eXTRUuD8FemTbDkfPEbNn9MAaHHPWLCFipxyXjjWJ67y6x2mhAcHsgbPd7rpR8yqKG62Gkv5i1gsCg",
  "key25": "2MHG7YKnrtrubg92HkEaPJWQ1vpwKGid1Rm1ULL38NnTCuqRXFWtBzVBP7eh8SHdZ1WayJwzFVihYoiatccBLYjv",
  "key26": "4dpCA2i1kkZpAAAT1RhVk5Aw8XEXh6R7KfbjBaT7wovrvrqfVYs1F1fkgtD5dL1jyCmtcE49UQiwNSjwrY53wYMi",
  "key27": "2Vas8xSHNCyXH52GhjRdb5H8ijpoQAu3QKVuumbNpgXVHkd34wJngctNJQpSx36hz7CxRhm812Y3xG4RRwT1Y28m",
  "key28": "3uBtbM1Fu2QPARwCdEoAr8dcoCiukzchZXmKmrWWhFdbyPKNiw5kCbmXaZxeqp2hwYwPuVWzZccEhVeEsMSkssqg",
  "key29": "3Hr2vR6Pau9W3p2NNDQsxtBZYpHf7eJtgmeoKmwjYZpwhn7dh4Ds6aFb85qC5hSV7uY1vjacSMjTUioZJWLc1vPC",
  "key30": "4foD7YYdv8WEvjw1AZirAQ8LkjwJoEHD41xFBEyxAn1EruSTubP1X3K9FiRjjk7buuAD1hLEP3p4AnyAYPMRqKuN",
  "key31": "5PaRE3cARZgmyGyJqoJ1y6HvKPxwZxsuTTsfHnYLQNP8bmgRzhNb2rjnAKRwJHWKtDqUpTG5uGtd5dn4BkJNjkT2",
  "key32": "3kUQkEHcHBpUByohfo78sv6R4tnkkkjBnWbTt62NxGkQdqJteLN39jSENLdAw28JcYEkdqMVWSgcevqyFHiVPYMv",
  "key33": "5XAUZnuSDy1vcyZCTk34nTFRML9Hiz67BxqGv5fVRe6jCLNwudvNahW9Ja46ws8pRc4ycmVuEPPjHbeQ7ZrHGXTg",
  "key34": "55S8j34sDDFaK6zVLwAbBoUi3YLT4PmvjYggqEVvLvP8nVuFPYR7cHJHxDuDH7GNPe8d8vDiNsPszXD6fnR5bScV",
  "key35": "gFvSSU9J6rBvdFt3Xx4Yzx537WT5vYCeQqDCzfoeHnsnnRy9mL8NGxev4gKFjg6eQjSpvzP7VHspaNV35cm98xr",
  "key36": "GZp1NytJwNCq3drS33ti4x9sMtVHgz5MZN3iek9MfirvNpiNs73G2z97tuFbvKERtg5qkGh6vtTbFzwyPxdaXri",
  "key37": "rpK2uckE9s3CpPN5Cp4ng4e8wUGjXNWEsFvatjfkfMXrjG7aj842oigLpKoV4PYg7LXBKNg1xTCsRKdcR1yCCHZ",
  "key38": "pCoWbhmuA7UXP7v6azYjucFwvL6jegRT5CsNeEcdKNNHAfAW5D6KYsMyrk4mx82VoeYWy48MVdBqstgHKVsx19X"
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
