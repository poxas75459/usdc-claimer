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
    "2sGp31DKK4QFyYCn9StYLR7W3dEUkZTwjpgBbyCxgVqH8UjtKNBx2bRBkQjiEWXswRi2eNcTZQVBQ9grj2LfqF2S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46e2bd1eB1V2ZHicgqu2S6X26M5ovv681Hj6KfxnodXKYaMkBTuMvGtwnJEUc9m7yziovaMND8vhgUpDFnDCj7E2",
  "key1": "2bDoRrWTnNNBzrR8G3wJU7XAn6PikihERvErCu6gymyciGTbDrh6ub69Tt8CGmGWFrUWLFAhbgu27hXaa66qRV6V",
  "key2": "2EFUXGnVzFgWUSfkPDvhNYvcj799EvP7qsgcXRsG7QSyj2gsSDPiisfxE4NZsuBGYviD4WLyS1gViXnr3wbrbPsi",
  "key3": "1h2yupbdnt1sqtpvvPTvHGXgk7txtmvF6icLm1p6Q42n858x3S3bgpuQnzQPy8uF6fwvUH4GBHLwGppHY6BER6s",
  "key4": "jqXjdKcg5Hmn7azNYrHbmHenH19mFqujwvh1miZgzVZEkTkexLwAq5obfDJv96ecLbC1YizyS7bpTWMEcnwmtZn",
  "key5": "3teBENgzJ1f9uCpCMHgnmBJm7psQ4eQXuR1Nur2yKqvYKYFwniJRcqVpu9Kb4DiQZ4T1mzjL5MpoCMkXkj9DgHLf",
  "key6": "6UvxGskNrkA7LGFPva1DL5nzCeGw5zurwXYM8jH6DpMJa5Z6MdBvGvxBXZYzx2tsVzsaxRNDjcgwfXeqodEwuAh",
  "key7": "5YBWJddkYVYXgmbGBupCYvciBkvDKSGVVvVq9qx7mmCnz6B7duS9G7zi4ffnMVMSD3mR2k9YNM9g8FRjAMDapt2g",
  "key8": "5UmSmzVquPidMtARmewvVH6MbHogor2GFd6XdHvyZhU5DhzLR5naUKSWQMe2f84Br2G4z5zCBJRiWrbnHQrKeYQP",
  "key9": "3ydpxYmL67SkGqEyRPEi6FmLPinrCV4y7VqpY5gbssr865CoTW53PSg4N4AWC8wA5DFRC1fum1NkuHDzx9TU3Yqn",
  "key10": "2bJY3zBw7PLRknhbMdoT8fEiozUoZoeTvatzuGphk7beiqUSaJpdVAiHZdo98LDFx1wBeLz55eea2Gyh9WPdahcn",
  "key11": "33sr1LqeV64CKuWB7fwyug3y1qxJrzLkhrBWQmTTVC9v8WZjR6qXM3FiUrhsApy1n1MW6wq3vexYLivfn44aYZFu",
  "key12": "kPiVTzW4V6KruHrfc4RHZod7W6pyhKxSVfCZgG5qbvW1CoAzj5M6FJ2wwXYoDGgTyzhXpgpQJw8d5YEMfZ3rULn",
  "key13": "56vv1k8Zo6V9zG372HnZAsRwpAo7wiXScrQeKhTieLPMsrRGPgEpCzxzamtfd1amTtFynLDjanRv4m3CJD5dNNKH",
  "key14": "Z2zJARHSnXWfoF1JqB8ja8WtM1SFfPEeujAB7vTMWgk4yQMH2EERz5ZhZ5DiLWuEaCe9iXTSJkqpgYURxrCz3W1",
  "key15": "3cdwwwoNduzonZQUwoFjMdQFFLucEdgTvAmn6GZAJPdzvSfL6rctXknA69HxFSdGVCMhH3yh5FojbFdnjcrRuhDN",
  "key16": "5Z85BSoqmxoARbDPE5ZWfeytWQDC7AkWncx3PUDE7eoQ7ZjZ16oT1E7CQ62hjiHzaC8zZEBxpP6vEPdhY7hKRUC6",
  "key17": "2Wmh5hqeSaGaJm1GhoYfLHgjEL7CnCrZSzTxmR6ttZ1xYkuPbTEiJxFsnvcZayTp5CoS2BvuCNyUihbmaPF3q82K",
  "key18": "2r7wAvHiXsvNkA5PmcTyKdjdqdjC9hvW8TGExrvdLsTwEYhRkyekJ1djMZWiVcA3hLugPghPGSBCpmrrYKiT7Hdw",
  "key19": "8tTZyoxw843s9NiccmUBWW6ZcpGRqKur4syGFRsk7FyLSZjRGaQ4EZtA1xsLTnWM48ajyUzKGzN1GeEbvpEHd6r",
  "key20": "3vwKJAUFHUxCQgTXsaDhmQRGN4MseQSnx3GwqPrTGut1wQTqgVDohnUiqEGBm6oY4tCghQGMvygo9rPWdnFxjVW",
  "key21": "5Zi6HHnMxqb3rvVaSLrUiLdXQ1yF1BwAtPBdAxsNCtWHmTGzHY1etKj45APe68ur4CRQYsMTDvMMtW4eVZcgGFxT",
  "key22": "5qqXxBnykd4L172QbuWZLVZCq8tyZY2U4xfmLGUL45q4BL2tsb9twR4kZXWqdRJvibYwYDF4d24kXPwKDDzgmDaF",
  "key23": "5dCx8ARg59HX8pGy4vfG8s9QwX5JXtNmWeknjc9rGJyj87ppEvv1Y6Zr8rQqAqw7iT6n7japPY5eHWTbqWcuC6X7",
  "key24": "BKwYGYnFTtPLwMt2Fn567bzX1A2NE9pGk8CkNU1ErfimzGJ9QhJgtNRfV4ejvgKWPBhWdHs8KPs6DA12rUV5nhF",
  "key25": "54AVVpEs7oadKYEMXfwyhYU1iscGDS1Fv63io493whQTzBtmbe3yJJQ7pMWnkTdb2kFQN1XEx78Pqrd88nSXxdho",
  "key26": "5XJQL6gkv7jcpR1Tw6eB75wwbPfUC5Hdqg7n8bJa4o2znMskUBuyGiQZ1nnPtsBYgCdY4wxtb7D1Aw2TUx1nXWtm",
  "key27": "5wLQjmeLcWqZggrjgSfySxnXvckM3pd65ro8Rer8SqiaCoEGdX32ajKwxVkZKszNjNt35nUELZ6qP55LWuijgc2Q",
  "key28": "3ej5WbdpmxLyjZ6oyr5TtmuHJcygSPxcNEazDjbLF8zbC2YP8ZkaNZFauHvj3wAAeQxxZPXqu7fTB41fZ76GwfRe",
  "key29": "3emKi8CaHqRUuHaLnNMiQXPgEn6V8weSe9uEXpM89jUyhsTu8bnGRE6CZxkktq95Cs2QJ7X6W91mcgPq5rcDMsi4",
  "key30": "5QyFUUURGw7DnCJTsrSYr3d9EaBedNSHe3hLqvTeiGs5TrqYUHVYoWgHKzzjDnb81Wep4gRYz4WU9s7keBn85EYi",
  "key31": "496MNoNU8peCh2BJF3rLBHE733SoEU5cXG5GsPyTRjWMZpPMSuovfZwRz9MJ8sfNQX7ujBFZDk2vJiNncdG8d5sd",
  "key32": "4QN7KmVkVds3nrzh8cRf6W3RANQf36BbNm1nHTBNez3CeS8RR8HATRt1wrdvVReS7oyKSPqkRcMTxxwBfbtt18hC",
  "key33": "3Fo46i6ryt9R78UPS38VWF8y8h4qUvdh82fG4d7FH53QA6rSYviBFq8wtS8xDFZD2mLKaLKnKdS1jVL5i2mDbvL4",
  "key34": "22MjgjZDchSnBWnQxzQ86TgnoKyrBk8pNyd6gQC7cyrnt3TSVBrhQg75v9k1BYwazVhjzdX1vMF5CEUTigWFUujS",
  "key35": "5CptDShAy9M8SDesPtMvRQoAh2NFvZqEtnMY9YHpRHVj9TuCQuYJWhi3jZgZ37zGsJQus7pP9KMADTM2PjTUSAr5",
  "key36": "igxFRQMkLg3P12pgRxuwZhs8sgtkXcBVHjToXFwdLv8xRyYfRPoLEw4VRq9vacvLjwDDQLBmhus4xun7uWRTD8v",
  "key37": "3dLXVL9jif9L2b8JeYBeNAgSUz7EQPnow6VWBLo2U8mLJivB5W8XPTkJF3e4EvccLxrFmhpfQ21zit9cAMa3UMQD",
  "key38": "5AawAjd4RWFjMLvCT6eUuPHervyZVZ3ZYqihHXHjWRnYPHq47ntV6ct3rbbeXUM7gJ9bm5LJhsMYjcPrt5AhdsVq",
  "key39": "4ABRMza95gWYkGZAfgut9a5aPZJQdDsHbXEe77QpM1wgzdsvhxgMkNjFwbfWY7Tbgk93LD3GabXtkmoZL5Ebsktm",
  "key40": "2L2ruDfNCfCg3YUhQYKjHfk47VzvMainGZw7RtQTNPTfsjJgvXKmP9KBC5acGDSqfHafZZ4TGnbYhUh3jE5Hytdu",
  "key41": "2G9StfRFfdABEyWNrwn4a2qWxjQU3WUysiLAmXc1MmvgCke9yK6dSzpWeedFmZQLUb7pEYTG6SScVBzJma8PDWEz"
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
