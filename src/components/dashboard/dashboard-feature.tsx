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
    "FBwZfQS4ouXkTH3Ti1TEardLWcUdu48cUB3nGbpM2qbG6Pbz9vaUigM3yngCvmzNqGroiKEtW59325umW16f1f4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FyBis5UfAn4TD9aRnxMjQhwZw6tC2gXGCg6twdVoTtmDpdDCfWC7i3nyz1A1Ko23DeEXaShepwaXfo7Vypygi4h",
  "key1": "2ozLKD9dvWA3BBg21vS3fZrFR4run6iLoNK8KqPcxbEyYNdfTFRaJAbeQpNHxNixGHzwHytgcPLxiufxg34uXSYh",
  "key2": "SEE9RW3Boi9MqKji4kT5XuZ1qPSHoVqh3JD5UUuGFXfTm6coH2a94nEHra1vntPSrgVdtvUwiE4TJtT1L58m8gr",
  "key3": "2XvTwEZNNBQtBoCey3MQBoUwcd6qSqgQkLJLViqMA2k72wL6i6xWDoF94EwtXr26HBkcxNKTicT6M4nPCS6cyvC7",
  "key4": "5CzgR8419EhNMZqF6dBkUqngEMueEbzgZRBycgfz1ea9kcWsVAXhHPVAUHCfoQ4abRxCriUPgsJaD6pWnzdK95U7",
  "key5": "5Vee4YMo9x1hXgcLs8H19DggkVXoH93CYgn6e1YhwhKwfAwngfMgVbq3bcdFgFWYRorj1RKwP8HssaZu4ngrVNNq",
  "key6": "54ii9NYBsZvYdEYgXq6WqBApz62z53MphWW6xjW5z6cBRNpzyXkQYZsisHVBS2Ng1k3QpPnKig6ZQw96t2AWBeUq",
  "key7": "3ACP9zBfgwooR8f2bessZiqydbA36fA4QPkuwGqFWYmLya5TJPmzDE8hAesxe8hFttnBY2Ct8hwrKXa8eYkdN1dN",
  "key8": "4cra7d4Yo6cK6fx2eotHqy59zs2rNHUuuC95VzBL8wfDbJhw41jADcCPts1TKjZ2YRVhaxpUFiW9qL1A23hox1Az",
  "key9": "3Ku3pPjFa3iptMDTmG1xnuYkUwaMB6nf7QH5rbBz3SrwRX5WFJp7Xst2a3dtrFCfaExoR7jsNpFqAd9DK5AnicAd",
  "key10": "2NwrKg6WGoyL1qv7fcgtQ5DmwsSAt3nN14KQAb84TXNxikzEMt4UAPvqwuuw2igqgp1yvR3j5zuNzEYMkpMsnPCW",
  "key11": "4Wbxx4ppkjVopCGtKs3Lpzjo8wwi4iKPatpnFU15EcveHe6CQtAMTrc5gfL8wezFi19kNgshyaWmTmWFDFgyzG55",
  "key12": "3n2SbbrN62i6gBqQawZzeQhJZLZ9C5x2Xtd34ojj3prC2cEy71W6Rz9VxfrvaeVDVKtwrX7EfZUuH6j7Cd6yehhM",
  "key13": "3LBxV6859dhgP5WjThEDkLappC7gUDs3dGn8p5QXuqTzWKehCoodyhMGnrXw4yawgERFZpo4p8Su1r26JTdfzUm3",
  "key14": "5JjC9vRpni5KLc2W6LqzR5cZVZek9jE1w63Gj3MTVSe7kNtRgyuncycDbsEw367mihvgCjqVtzQzWZAWLu9HKx3U",
  "key15": "4e6R94pHpLTS79u2zgdj4qFRZYmouikV7xgq8YGCKkdU6YkzCR2q9aHW85yo2UDLPqf7SLBJJ9F6DvLiPgvxNZxY",
  "key16": "3zoqpaHLufvGEsw2gF23WUD1DhFAaSQwaWV9ZtPCQAv6ukCj6gA2mABuv6R1J3HB3uVytZyPYb5kJGshoLJn73Lb",
  "key17": "xNR1n1RKFcrMNMby9yQbSuV7RsXJDCHxCzdtPDTHJDbRAWFX2pWUmQEyEEgLPUoXH1PxQjajKszTWpu8si5y4pM",
  "key18": "XJ5jbgQNypV6G6qHiMpczXYaSq2PdRbM5MkhjQtVvwgvXsJY3bj3mBP9mk9rqRniGLruTkwRVir3ZBjbJMaHokK",
  "key19": "5HJDaYM1ZGLjn2VWJ3MU6B4gyRq8HtGkaVe5hRzXF3UaY4V368ZV3a4aidP3GH9mKFKMr6xj37N8Y8UzFz8NA86k",
  "key20": "5mjUwxkRtWWsyTuFnpPVYUdfTst9RTFHfUoJepsvCVYpUS2BS1vtemfqvh6j3wwx7nP3UH3ao9LgsvgvkKTqTQpu",
  "key21": "5CTVg8sFgCrYs4Do5eQmyQZNqpHWJVN6VHX165rEDBwku1VRSEH2cPyQcyo6WobS2ZECFqFCVSG5AeyYPe2CMKF6",
  "key22": "5jAjq4LwDeeXNLeoDAWMbGAGsnuHqazwWha4Sbe78H4Ncyw5GTnbLLbm1jFSZJMYsiQB9r2q1cpVoBbiLpnjcbUx",
  "key23": "2BUDJVuSRoxLC7PG182YYX1nbgZddCHgNEyXWTULMDba3fJCbB3cumh2aHHEJdntaSarMhmfH6JpKbLdJrwnZkxY",
  "key24": "4HZkru85PGPbbQqqy4nb5ynw9PEqWY5tyudXx1Z4DYSVnyaQ8iVRHj35p5HoNxjtDDYLxWn9y18ki1LGEda7XjHx",
  "key25": "3iD5C6XBQeR9QhS3SxAfeVctgEgH34DXjPJkcWQXa1SGsiV8rukeFVXoxv4FX7QTDg7Ekx6DB8fCEK6gpv8ZecbC",
  "key26": "4M5NVYzHri5tDb3bqSkmLEgX3AQJEmtoMmkSBTjskw2xYr9rpGeuVXVzQKcL3UcsbKhDJ2kseMAVB5seNrwbFrpR",
  "key27": "HbVYFiBTV5t2QcMX6uBJLKoaVvZqQE2VMhedUheG7h4Lo2rKCPpnfckCurgeqy1kS7B8ww4BWUhqCaP1YRYjTCh",
  "key28": "Pkjk6LXMTz9jHGjxxX8uwSJFkii2efX5CRv244YmN99z3y7Z8NtPFmTc3neyUWBZac4AHis5Q3w25gjciC99U6p",
  "key29": "4nF2mDA1T6os3B6TaX3nXm5RrMuGWvNdy86kZtCbp8Vj3bDZrhVySPcXGLNArSoW2AivDeiq2bowcSM3f69Htvmx",
  "key30": "FA8PqvmLK8aa3Qe4vzo5VfiSxyqV3pL7Dk1wHy4ukbaMb2LSCiDgmNHmzpcdcvaCVkgagxaQjaE4KXkjgCAC9uK",
  "key31": "4Mw53KBxy8JmetUxniN9tvRt9jQtVcootEBJzooT8s4STBfH4hbEXEjxi8R2R27sfiwQGs6JUc7iaCuE5u5iD9Kp",
  "key32": "urYJSRPujwL2c299c8jeFiY9SecpQCvNVQFpbP1VFUGhgNacXnAgvbEoYjGQJ2mxLi36ceM3TGqkPRLtvvVpyj2",
  "key33": "4hp9VsSzdPq5ybKCs5Artf71bprmGoJciMzqLnHCWn52Dy4GNaN8wsWBUiYB9dNJ5WT5qTiKyU2yZk9vEQo3Zzq3",
  "key34": "3LMZWzFonAb62YNrkuacvyGbTtPtJZAGzXDEVqk3yACkFUfD2kQhie9WGsVjA2HJoQyU1LT7bPapjo5mfjD9QBQa",
  "key35": "4qkjy1WXfEuPMVFsRiyhjam1GS3y2mqfaeRToSp5c1PQFFeHWRfRPJtSLazYBCGsKdERzSdgu6dCJABWhKMjgPAj",
  "key36": "5TdU7z7vJ6NN8wKkJyo43FfnQeQckHqmKGgwXCJ2MHwxTyrccoJMBAwS1VWYhtGNgWfLnvpAc5bKGmhsBA9F7VMy",
  "key37": "kcHDGwhfpBGwaqSxAZiapWzq4zoZbXuxfGtadCt5qt6E1T4Qh1dKFATzJSSpqUZzZWEob6Bqs4hX7XNZdNKe4pB",
  "key38": "7JrWzRYrCWKSuotP4C76MGb7gGrWZHcdG5NEgjva5TfULETWa6AzEpRwyJYGv8NKQBtCyZZdwzZ3YMtPCBzJgsY",
  "key39": "Jzkboc9bBjPkvur8m8o9HvPPKfbr5x7vbVFesxLnFMHDfQGmw1WUDwLYgDxm9kSCvJjiY2wakAiNiqSCBCoh5yt",
  "key40": "3Ujq8WVC5X4nTecFUB4uMnEQsBLY3LaJ9gHPG2tsf9dwHpWcMbA6ENCf11c4RMqGz9ipsn6VRUB7gg1UYxPkmxEN"
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
