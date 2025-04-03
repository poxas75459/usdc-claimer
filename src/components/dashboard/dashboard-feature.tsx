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
    "8GSZWe6zoVpru4dof6Ngihw1q8mbd9Upsz971Hopy5LssxmKr2jVPXKsVkjU5vCAwSWtga7TCJbp3Enyz3b1RUD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iVJfU2PQLm1NbVhoLkQthVBv8hNGxe87BMY2Krx5kHUGp1D6vPXbDBJnRgkR5MkNEkk4NMdnTNekXn977k6EfE8",
  "key1": "5YjnFaziknvo4gDzYdCXA4TofW2MTw7V6193nF3oVEgezDmbe1Bs9n8uCStAfUR3dhZBienR5n3ighBpBwLyY2Av",
  "key2": "2TNZta2HyQeZ6VpGRTjPPjiVukGcdCr2TjnGBppMAfNtg36vfaHJr9SyCnVUS8yEgzPdKVpEkacrcmw2j3BxnB4U",
  "key3": "4QPtu5PgnCj1gJbATcxH6ymskjoSmM2R8wjFB8VN4by6pHdWg7RzgrfQBUaASdGeMe83AvumF1A4nZX7cogoNnmi",
  "key4": "5mAhLSLDdTixm7wtWWt6JBm6NKkiQJap86SZ8skNdrJ5AXffsdwJXyev71ns5PcNkA2xnHyXjQZYZW8YoQgzrdzY",
  "key5": "2n3KqQjPt5hj4KcNNTgxgpUy7pfmeY52m1KhK2EFwBbrcdJreGQSuhMf9VGzqnJNfKJJiexozoKUQ7vaoCMZ7DgP",
  "key6": "67qsDE3x4TKC9oKRSXn7mJGXLxVbFAEvDpzwLfuNupguqxs7qGgQFGakiFTLCM2s3kuprU4ocqoLPQ6WReKHRbwJ",
  "key7": "GEKbHgpM3Zp9QKLSG5S8Vf1rx6RvDd5e9TSyuY81CqWVJ69uUS8A8MK248exAeFnq9PnAhRvDGMpvUv36R7ceL3",
  "key8": "59mUiWhW5xR62vDEpKs4nez6gwwZExwQs6sBbVEzqdXQM4qynoUez8GKvWvJXRYu5bxgY9ai8J76Ad5xnPdB3VxT",
  "key9": "3arZUEdAZyyKdqnqebQrKToou7eG8apDy7G5edV53NWaaYghhx3GRjCVBUhYKxHhQHj6f14zFTY6VTAySUu1sNDk",
  "key10": "4ED7zvMYJaWRm7xBS9uvbgPeLSGKmsr7gUEGDeYJGjoq4hWXw9cC6eGuBF1nawpr8ufTBa3uGs1sEeCy7jVzTk3Q",
  "key11": "3r2uwVpVi7gHKsQjRDpxPVvEdXsmNVrMHKiLzhc8Tq8hm9cH7Rp5sbYEruLGt4eVPBu3vC6jLVC3qP8FrQsHUgXG",
  "key12": "2dzj7ErbuTLQnrYtEdZcSa8zEUszYHqxE4KpenQdFpav4xtpW6YLzAUAZe9Ywt8dZ2otsXwR6FKKQUVupZcX4MC7",
  "key13": "4CZJ9cofLXFuffLJ5q4AEzaKpSge6uidD388YiZEobWSmY9yVWU9TvE2rk97V5n1KfovobyPq3d5b2e5KHpUwcbu",
  "key14": "39NaSth7ctJm5ob6wQnmJxw5RH2k6fzobfmws3F3R4FJsMM4UPoKLQkJwUi978QDGV4VCq3BLk3Ta7wt1sFXsBWF",
  "key15": "342ZGWEHWksjw2ZnbFp21Q8i24Frb47EkwLAzLwb9di7SH1TEzUGBpbumUvY7mAHmPZhQNrNqS9UztAsqMRw9KE7",
  "key16": "4W7A7vT97qev6XWk7nos5XRYUSEpeF4cVZVRPjxAxZRfpcYppdUhajsCMPXadny9QiWAExTybmAymxk8dHmphCWN",
  "key17": "5jwaZeBAkcnWkyyWNY71T48WbRuoToKmuKjpKUgi9LbZXTQP89hznFcninbXceHVWgRSXjhrGfZQ39Z55ag6Z9Sy",
  "key18": "BfiRLA421bjJL6HmPhAiyF6goWrxQ3G4bvv9bkeJ5pc4z9ENjU1SH2C3quCCVYzvibfTnHb2QpLToES3jRX6nmh",
  "key19": "fSVFvmEV8kMqWRfr8r4q1mrKUWaLwUiNSQN5PbrtnV3xBW9tjxz4f8a3A1RDD8nasaKD939e3QPZSfswz74BsfG",
  "key20": "SMKgYZLwDMpXp9rUSokh5vysNudh7ETMnD8abf3HLiZPmGGFH4M6pUpYADavZaUYcdpdYb5ZqfK9frabxR6z6Ta",
  "key21": "3ygoYFBm3gtvSRt37QzywcGCsCcnadBtrPfsLLSydsVMceQB2Fcu6nx6MfFwsLnAgWhh48XoF4S5piF6v9h5R2Zq",
  "key22": "4BSzAkGJQKi7aFUWrzHmaHxfqz23AjhJRyzw927LnhnKU4fESwjNtRshEQWxdi92kEeEZYswvJ63HbVtMNQ3BiNA",
  "key23": "4PpduKEfLL3htfwQnT33jyQyUR9BgunPwq7J7L4a9VhPTobFcZPXwXk8RMX91uT3yZDBGnJfqhF7pycNRLatJePH",
  "key24": "4YeCEaWgCncUVGVdxvh8uwrJkyBKYkQpJFYEgSWG8gohHFr9BAkZD3BX9ukBfyGRz77o1PEYjxf6TquwQcmg2KTc",
  "key25": "t5PcHSUnjzadgrGDymMhRxiZJ3t6cKazCBcuGReoZu4BwLT1CEKMQhDhneMAJKXZVskxLfEfKgxCAmgs2JWrpzJ",
  "key26": "5RF1aX5jgTutYwKJcwHo9Cuf9nWHosanFHyqvpZNP9tQVL3NzmBm9FXx128UAQHdX3gQkic7V8uHhtCxVcu2SdRy",
  "key27": "5kXWQqXR9Hu9SHeU7CoXzRKf37BreQwNFfJvrkvA8gLZk6kSfYiYaw1pRuz4n79CwGpLrbEg8u1MCvozo55BbzW6",
  "key28": "25EcVMHu45EwPgS6WPJfLw9FSQdfSdKPxfBgPogo3YfbtqhACAsJ48akqBgwrG3eVbMT53f6v1EGJAfTvqD1ayCN",
  "key29": "5wWLff9UwxUjBXVWqZ9qWPMwjbWLLLH5dR57t3jDTQx4DtkKCosauvbHpcXXEvoxBDMhB6io9uGga7JrCTt9adau",
  "key30": "5o2UJGRHUmP9msQcc22cXEG3WmbseNesMJFXYJG9ASywhe82bJq6G9YokN4aSgxV4siABw6fzE5JNhFv9WT3NUNY",
  "key31": "4HVMcmqUqEJDdqoCesKUS9JNqc8C6L4uA5pEXHGWDHNDD1PiNzSiBrkzxHruMA9pPGmAF9hez9XBg5E16ExE6BEs",
  "key32": "3quHV88nv4kZAZDERnKTPy6dfZJ3fdSPMrxrbgsDUCqMqL4pSMwfYiZ4awVsndekbnjVn31oLYx1QBT7YxbwdDDC",
  "key33": "227H3eJPUqjYNULd4MPjnrNuYdVtCq3jnpxD2Scbv9CxP3ijW26PXFvrLFCJGXCXLagYtEEhV7CxsS12fqZ7znLn",
  "key34": "5Pq27MxzXijNpDXJUriVuJRcbWa4o3GWKdWtnNWU4xh3VLdB4rAVq1pcoU4eUaqwQ6cbV33yWWwVrnixmHpJxQeH",
  "key35": "5foiTfcpGVn2jJA6QN5oQohJzBeChEbQaWeuECBrLarDVNqxobKvj2i8yQ5nahRqdZBQD59eXR4dWHcwiN2B9JV6",
  "key36": "3U8F1TcRYkNKroQQ3oragR8PUC1WXcJmty9RC4d6o1EedLmzeKqjHbeW2E8zp983JHF3NATPLQeuLMRMRLKuApjZ",
  "key37": "jH6J7YjhPsHBihTGTp73vaMSAuQAgGQm5KhSq3YoSP9JTZ5vh4c1X9AW2SKVQzVFWvv5exYYthN1LJCDEJEnURP",
  "key38": "5ywHJZx7d8THdbEwLxL3aBAvMbSzqKpsgb6XDeH9sPK4KKUzkcx8THRz38cnov7HG6FRubkG5jZBoyzjiGyQPVvD",
  "key39": "2RpU2nW2NLrvoeYLdKy3kWYX7KhYxpvdXedWkovkfXn1DbxKwV4P3znw176CiVe2epbrqCq2SF3cUw7gGzjPrhdh",
  "key40": "61HTWwssG9CDNUzusMbBTdrpB1E2R1uVmCjRqqb9awsRwnCz3d6BEnX9SrN1dp4uSsJgdChfTBPotwMMyj5Tqjto",
  "key41": "LhVDKuQo95vd9fxxWr6bzAi9pHdZ6rqhHMAL3xZbpi9CUj8xDrCe3EPGPA3Udsy21bU9wgryDtm1Td9gR3To3X9"
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
