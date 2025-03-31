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
    "5iaYPwhPaNy2nvnBUwt27MzLo9zoFGFSJX2YfQW6GiYXrsZm5gqx3vNCcQ28g6FaZPyobp6QNdJBTvKwQc7F8aFU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KBwFTvmtqk9MfMbuLadPiBDUsBUBBfVeYMPBKY6nW2qQWHsrgv5oWq7Na6caDF7f7gttQ8uudk8D6XcSy5cVyMe",
  "key1": "QWEumCsw2jrNkDNhrJ36P9SVmQUjrqqECqYxpQrdvs24ZQLPReJxHzMsPfLxqFs8jKcAzTzuW1oMzryggxBaTDE",
  "key2": "257NAzei8FDyA28QX6Wbx2TgKPTyhFATTkFgo147KvA6S222Dy4ju6WToyqUUnBZxmLomYYJp2hrXxpXVcrmomwD",
  "key3": "2f6PfqgGeh1U1bFSCNXkwtJjdvifjpGpr14EXnE4nXPwHRAkVqUAmpU28Z27vdcAoZABig1LnjiYjSH22sX777cB",
  "key4": "WXM95PBLFLc6whgvEiqSWBmSUQHKoE3TthEDnBFveCdrtHWMj4tcuuuXdcntRgH5ByxFNx5A7AjM1H4bCj9oKTp",
  "key5": "8RkqmzqaMW2KPG8HNWchXfZ7Pq1CqLRTghkKuHFdUh6u2JCPLUKrSz314scGeJ3W163DFEpqmXZitK8PAVSeavg",
  "key6": "3HAVam9VyEevEj5oY1S4FJG7sYF4WPZLzM9bAFaapsWWewTwBr1LJMrrPdgKbm6s8Bt15Wp6HjTeE31rNxjbtYER",
  "key7": "569ehXguAETNFtjXrAEmPqGad2P864gDsMwcztFVjRg6F8AWVoJRkVj948swCtcUGjhrsvUtwjoAVFWZBR8vVtk4",
  "key8": "y5yC6UgYkSdwEzcnHiW351C82z54vYseHsE2VCPDiZ23EdGpraKK4V68aabX7nZgW6Pb3YhqpV1QzQYedevYN96",
  "key9": "4ZdJGoVnzxHWUnkEV9cWLh7LHdMqjwuCmBTkyRGoUHjsy9W3wTBYMiFbzPEVtCCS1jr74ooamNQJ6BHeFT7YoMBL",
  "key10": "DTkdB8yRe4ok9MsGc1CvLHNmwYaqPHhnwfJztYZMPS7B48SHbzcDJqN7QJnaRUdByhruZwpgcGwwgPCKJwaXXBu",
  "key11": "3E31tD286P98D6BDpcq2f7iXz43skuTrnF5UVYp9L5mZGbvCGqy5K6b7ewwZNt67zv1Pp3UqA2jzEhSkiT26xzUK",
  "key12": "aprE2MeWw5GMPkwt5JiR1nzTfvX8SeTwhB9Gf26YWpqgCfHQpfEhL1sqbr57tJtAp9o9xCVvcSfRw5JwfX5rvG8",
  "key13": "4MV8rrdaUDLmLdGesEdAncvdLSaHxJDQNZMm1ZNcFRvgJ5thW2EV5TYhUtP8RFCXD98Hj68TmASyexNMk32biEyK",
  "key14": "5s2dxy26SfKL1QSF9FNqsPaS6TZBUF4LQfEtQQZytCWgAjahoZtNDUqDbeVijABLH69YqSdNd1UJ2RZdJ4ep9g4",
  "key15": "5i6ACbknG7pHeonWsGFHmU3ARetREsfrPkbYBPYxpokfFXjRVLdpdyAJ8qMiQ8bu8n5EPTagd7LGLsK9P5nArsBm",
  "key16": "3aKUk6zY3sBQKSpMkAtMHF1qNwaLo2htxcfH5JyMVd4RaKLwcUTnwK28k3BBRYo9UpWhTXqmbm7WpQmsjWnPM4Hz",
  "key17": "5BqkxTLippYGWKZmQHBcLpUNgEWXeLJH9pzCj4jepn8eEg1dRkNokG1GisAfeZQ8gYcgLdQcm4tRZBcNfps67qPj",
  "key18": "4JFbxnzHt8N98opNc8LajVTqeDBcrDMh7zf2pEanFpZjvyTQnQXryVCCB3xWZLbKmdpL33MRdZQqs8dXVFSqE5Am",
  "key19": "4xUWrgRC9rz3FZmx7zGYLSdQ9YoamfbuHgMv9huiBgpYFMcs2mc4uzLzPRP1R4JNeP1bVya15WDJVij3xwC5eBWT",
  "key20": "2KsxbJumpZ8QBEX685RFz1mY7zdovqqchAPTLNNyhqd5idnBFx3a86L3YhKkjFkoRqe7YpLJeJyq3EAHnCWmwypd",
  "key21": "3uwGqV4GU1iGwgnZiAnmFbp6iyBvNpCpk5H4PQYygEcpeWaFWBvX5GEcxYwmTEd9HC1r1PbXn8Z9as74emAk4168",
  "key22": "4Auqo3Dq1PWcCV7fQHvgq2QN95bQLL7HsUcjj9qpdAZyRPRL6uE7y55HUAaqhMrVavGYj4mVnR5NbLwrKWRMn69z",
  "key23": "2Yhkpw1ms3khqDyvPApYWtTe5ZibbTpKmFfz9w8ZT7g7ab92DbDPHxMLkKdxPHjVWjiW7hxk7mSQsqHobL6hVhng",
  "key24": "2EUuxdVBdHbdaaGW4MBJwGS69rU1fnNhvzbPqAtFSn2md3yL9vVQbCFdJpiVTjZZ8vHtsei9szrJSepY7S33MeLH",
  "key25": "4XbP9yBquKktgppHn3cTgBmhxDRAxwtdQ1DxFo1GT4wuxHVaqHiTrWTCJLVTP27asDWPpe1g1LrtBunznrAfFyWs",
  "key26": "3esfxr3fDjuQATTkqsGDnToj5D6d7JtVLKVJVPwQDjmUeEgZGtYGfFqSP23UCRkrsPCikj2pmoJHMAS9NFwcstp6",
  "key27": "2YVwZ7nyLCg8HAqLj5ej2EJhVfaRhPnNtdzU6qMp3BrkgAoJvxkqQ5mVitKoJSdLztdbQmLJ9pL56m7h8coUZGm6",
  "key28": "5WQ9XhHhoR3HPmfJnVGuckkQb8KUwvVYL6A8cGLwi6W5hw4Jxwbq9oHmVaN26yntiGYASXMUY7EfAawck1qBXyMA",
  "key29": "3u3bypYwWZBmvRY7Ae8JvWQSsxT5hEVbkQMpspbtU5trsRt6WVG982sBYoSM85ryWU4kCjecnw9uLt21Yt3ppK8H",
  "key30": "Dmrqvnt8dtxn2tmwM1q1qisYFmJWCJaqjFvxNu5Ci1T13JQcftKYH4td2fXmayN69EqJgVfLSzRqUbp6KUqvKDK",
  "key31": "2rTASwfpEcMZB6eHt3mUYYUhWJgGtJNxYXedsQHcvLHXmZRutP1ApoEHGFVfymbt5dGBxJ6y8g7ncwEut5gEnxL",
  "key32": "63ZdtE1TMKT3zJNFVU2UkfgwXnUzwxaQimCyiEgGMZSMfiEdqA17DCbdpzC62DyvBVZe4Cz2oNTY4paqGxhZgkDc",
  "key33": "4MB9ERPukAbH357Xf1FEQHEX9cZCmP1wgLmYNufGjeaN1jkCucYm8jzAuLQMCui1cVgjpNkcmHe8Tb3SqxNgUohY",
  "key34": "5obSFpqNa1qhKSjfVDaCnMkgAMWG8XcA6zJRULoadAQjQGfyiyDuANeXfKpFwZ6cEar8oLjGbN1nRi9QsUotfsRw",
  "key35": "57tR5cXqL8oNGUxmD4Bf6bh81DABujKYwVuKRyGocsupa7z9RfTwz3m4UubVfLkWdsxWKquuSjFBGTmtfhMbGEjK",
  "key36": "5M78cBzd3AbJV6GRvs4SE6pgWZhDX2mbuMP4rVMbPGk3AtxHK6febSYsQv2zKWjjPzUhK7ikhzNPfA1oUmuZmdGw",
  "key37": "22CCw1gQBMJNzATM9FNkcSziru1vDfByUk3Ue8bGx8rQkWzhzi9k7QC4kxbM4WXBzD9nqZdhfNvDLEGV6ekg3cZw",
  "key38": "55ew1HncEfTd4gbREdr5NhhHHsng6Lg362EuTZ811bvmfmm5xNnXTgcbR5f85Nzg59gmz4D9Lw3foZWH4Xjfw5qz",
  "key39": "3Q9JqyaZEqWhStf44A5m1JPhXYTQjyw5uW7mjXeVi6MNQJrDXRmY3XozxJwDuxMQ3yHorT8c25A6HLBDzvUyzqKv",
  "key40": "sAbEdBHVK8sCEvRBay9SrypXs3KCXqtXbSLTkbP8JMfWbMBp6vXrQRmX3ibvN7hdcASApExgfNSe51mH1yBk739",
  "key41": "3G5Nb9M2NifPB3wqYDjeNi8C3MeYdvSYs7vgwhF6QPosyWAtE7sQVPv3YwkhyV9zdouukCL46GropQL9inkPpRNn"
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
