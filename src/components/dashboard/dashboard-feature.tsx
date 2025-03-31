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
    "5iPvyPVrnZBNjVx7SVrQe3w9eoNTpCrJvsUha2HjtYeNpg2Gziyvs1gF515hK64wLDPH3SWvnsuBpw2yeyJFfgZV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZdsbdchF7DUjYDhKkJQQPKKBR1437Vx4yHyZPZE84VwgPBkoudx9dFmhBHrCANCxUQYgrjgzCgskFEA66QbuxHU",
  "key1": "5rXs2L4iTHe9pAo5FgCzMC4jsSr18mQkmnb968prZFW6BZKkG57yhfGA7uRZLFzdTUEf7dDBWvJDQrANrhXq1Vs8",
  "key2": "aEXDfi31QWJnbUX2tfw5JimU4LWAACCmqEwPPckq3BemAwUbTXXJm1Eu89kXVEXNECTaWHPG33zbvB3DkxGoSLZ",
  "key3": "3bU9KEeNZ76vw63HErGmHGdyX3WJkGa9WD3KwTTLoBUTVjfE9pyzJzukH6RDEyVFgVcmwvg9MiQSCezrZBwzaRPF",
  "key4": "5Do665FN7ijpy9hFNR3Y7ypqytNBewqfQv9wTLKvUqWz7MHmySoiefwGagRtn4PN1khjeRnviJYbXXZkF7NZvE9x",
  "key5": "44Qzxkm8SyscvonSEEAQTQdEH2jivtSHKmAx64gr17AhLUCUvW92FpW1TtBzCdtTvmgsGi3g4gcWZebuaHaa1WqR",
  "key6": "2UA6a7htE62aWbEgVexMCDhK35WvT4VXnUTUHbUNhbLiLQvrdqEeDV3kVFnF2g8Zy8rxCZ7Dw2qAFVNw6CVhtZec",
  "key7": "59Cm3PQYgPgLoU9GK2rAyT47r3YT32eqLUXwjX7hp5hnUSrjNvEtNCTXhJKDVoTxm4Vnfn4G7WvYk7aiKQipnhnV",
  "key8": "YEndmNbF9PD96yeNk63P4Uq1wGcwxDdyWP94NUuAeqZ3fZcM1DgUJuHYU6hMmvWWPBuuLbeLH4YxgSo9k9qq6Hf",
  "key9": "3YrJThQQp5QKxx82E9QXJk588gLPH8nrw3dBvLhMwkeWFkaXmBXmpD3KmAcmDsNga74eByJEWSscRAoBzY3HuNUD",
  "key10": "3D72fu5arrL6o738fVqMakHvLYzHZQzqbS7nn5c2oWYtLpMGncmY9BEfisAv59ULsaPTJVuXRtGJ3ykQKp3zKHKo",
  "key11": "5yg6AHiQJo2Sd39XzmssshzsXv6VZq9We6NtHYx6P2w9ANaoTj8mAWxUtLEVdmXdjtRpB7yhQwmehVGPJe5uqDKm",
  "key12": "LQ7z2LWUskFmij6ZFUGGewfTBH2FRp3PQYdx3aXiWpbV8UJ8WfzPjTeXDC9vkRrpMhLwxnP7E34ncu7KXLtsjSF",
  "key13": "2cV46nu3Lf3AiDWBa9pdmfsMQMEKMgXBswxxvK4RobsLFLv9TuE74Ju2V71jeJR53TN1taCDHYUSQQJZpdhpxzPG",
  "key14": "292jv613SMfh6hQX2WrcTZ7YjQqjoxuowGPG1ZLCaFNt5sK3oPFJH8tpBvQxENNXQuEnvUk1Ton9jDVy7QCBvWX6",
  "key15": "4MAWY7Ytsroqj1i3T8Z5xY1mARmVAn6LMbbCcxA56UYHyDVQUAPsN7NwpVCuX7RFki1UTbtFoxw7pPPgUmmctB9d",
  "key16": "3r7ri6FkByNN8VA3hXj8vDcYWueMN8VftTHwNy59p46QK5v9a3w4vZCfQDoDcZgVdj2KqfJ2yW8macrJqvrQhZL4",
  "key17": "HcGWUqTqhyoUYAscLJKm8o3MHKMaEJRzXWVFNitvBKuqJNUi9PnpeuUAPVwXnx4aVsPLJozhWr9HDBG89p1MVBG",
  "key18": "3bd1Cr7yHG2v94WQJLodkb7KcrJEGdELjxLVk8uEYcaRVp7kLPRj322qM2ynYi49VaKsK3cdecXrFYYq1AwvfZ6L",
  "key19": "4zay5AAhUXf9rBiGmiy3EVyYRqueWPhvXumUz5TNx2eW2DHY9DJWKgzKbeuzkKHG1LCfP4HGzJK2jwfD8JHUXJLe",
  "key20": "5TapgFbeHCTzYLWnSpPAw2frSeivbPBQqmrVEdcVXJvquvxiXbGsKT2cqHNDrtGPvdr7FZsbxPb4TAKD4BqmPbHS",
  "key21": "5JBEU6VsvuKmP6xVBPiGh396Kdzay93gT1QNW4moVRmuRJNx37ec6ByBEaUmWE6ii7VP71i5LAtMuGq2YiXzz5G5",
  "key22": "2rcett1A7m2xRtSY6JbP8iNDsH9N89aNr16bQM6JH1B5ykebYU5x4Nt9x8Tb1354yei94rtCds1ttdXDBVtraFfi",
  "key23": "4YsdipHg9bfgXF8H8dv9DoN4XWRRSs3KuNSK5iYb6W4ciS4LoRZV1WWotBuCccvKPeaiWaoPus5HdBeCtrDE56Yr",
  "key24": "2aqqWnaqAWjx1fRY5wkfuTJTttDstrDQLC96p2vXs7i4NpcniX378544psTdVPPRyPnUkRLQGwVewQQGYw5yUJJx",
  "key25": "32jm4Ut4L8zCVt3ANRLsPpafEpNeBdBqTGA81BcsC4wikyzifiv7JQA3VbcvFUgcyKHXXKpZ4BEBi3Pd8NquFzDJ",
  "key26": "4GgWRtrJffLxY4z73ksDxWmuJ3q1nHv77otJYx1v8ATZxZhSKQWm5VeFoRwsdDbTMtyqnzWKogbTninJkdhxfqEy",
  "key27": "2nPL68pQ1NXzjhGs4kGNuVnuw7juCrWamNqFDKJH3BkWNwfz2TKesZEafKKHcuGCQnh4VXepHpeY5XjnBWSveaah",
  "key28": "Ju6dwTMG935mXSeyehFCGBKiqqDUd5wE1ZYjNodnpL5sVWaDCjwDacNwRL8ib9NV7pZtBkCYDPd5wNbsk6zVFck",
  "key29": "3wpE1fCaJod23WP2mYdf6KZ9kXQ1Tse6wGn13o9ChZkWvVG4FpRCMbfwWSh1E8uDL5HttcUqf1zXqM6s4dWBHCtY",
  "key30": "5WyV8SMFzwxfXwEgeZfbae2jwu75s4ME687ZsMTYLPHwrazLxcKacVjbzhoKbndNPNRbfZJfB7D8Gwf1M8koXZCy",
  "key31": "35M7FzNFur4wexXKCukUx61taCUpEQ72LAt8VEJjCx7P5AD6U56ij3p75D364E1enABf51sLF9vFuU7RL8wxPNzp",
  "key32": "3ai2minyjsEhFLtNi9omB6Yyu9PW4pdPPeXDT4uTeU2YYiDrnu9VbLcYCCx6Jo2tWZqtYPc8DBSGTGoKU8cVuZiA",
  "key33": "5h1KbRzvswRp2zcnHjG4FoEEGjGwP1R2nafJciVnjCpKBy2ctp53Y9KePZfwvpfSnN4GXDXa4oKQwSryKGVLECns",
  "key34": "5QMJff8Hp8adxFAh9ihmYfWi5KeAN3h3Mf3NVbcuoydCG2JVx8ESJmik3vJMrvvg58aHw3bWFHLFpvYuCFEu4iG1",
  "key35": "5ncPRDq89Y4ecZtn7NPbmeKqgNAz7iXcCUwxu9YwWcgjvRhqQ5jpvjV5EzMASy3XvpUHgBsXbKXzWSSsnW2tTq5P",
  "key36": "y3ZrBh9xf74RywVUv1dK17331dV16Dhj5i6awM6pJdAmxD31cTShYKYfWGnd2E8xEBLrZUTmd65c7NiV4THo9yG",
  "key37": "5ThNvniAUQKnbJgJUQe7zyxhapBRMPXjWK4dv45EiwuJrustBWnAzthYxvrYwGrUsKx1FjoTwnan926vkdfYBgge",
  "key38": "594o6z9n5mEQnhZYEXvPEkrufbM5KQNSBHM8wyPhaRNo7SJ3tz7gSakCfZnJW41Dq3zMkd8rhK9DyUi5aqgConDB",
  "key39": "562W9UGuZGu6RrQfCGjK8Cg9Zsy6vkaCwMRdnuVHqJYPW5W4Q9vgjVLGDuoZGFUyPRdmaYvTJ6zogFLZa6xb4iKT",
  "key40": "3i5twmEyGP8yZ2wBG1EeFEHgKY5vdBwmYCfRU9NXRNErgvrGoc823Y1tMyjg7CTsSmi2BXuAxRcBnq4mh2a7q2ex"
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
