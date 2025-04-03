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
    "5LXm8bseEn5C9UMrCtUp997pntdUCtdthNtJN8qBygze4TR9gxpbiPhvyqJkqQz3EWtW526sPWenVHGaAZE5aK5m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h23563TbxtPPDRV9inwXtMppo5q45nS3uV8SZrMpEXXxJQhxRMvguDcc8wnjCGC54AgpsFXAZQ59GqNgzgm45bC",
  "key1": "5q9MrTirVBvHf8oQ36BoAyd5aDLQ2ny34s3GToAxSZ5a4k2KtXcJQoXfq4hkYqZKDcA2m15qQm8PabCtTeeF5zxv",
  "key2": "5EnKUDnkoDwLsw7r4eJ5aWa8MgcTQGPpd8BFHZPVz6CaDqUYXDgqkUAbeCxjUBPFZQap57uKbrbNWnJK5ziiCA58",
  "key3": "5JCiWw1nT7d2QEevAWcx7FW1zHYXXqSPcPUByqLuDo5zPksJiFHabUb9TxVT9DJYfVxTnxHcfD66ASJhyAzFXpy",
  "key4": "46sjzLQQPZteNGqDs8XM9bqfPbyumWNswK4Nog2fTZub5L3kRqS6tnb96ry7j8RnHMMYH2vXnBxqHszCJYKhWnef",
  "key5": "5h8gWxiY6w6Qr9WVmw4jMY28j2vGnDyrErn8suLFaagTzywjQsMtYbQ4fg38yd6bSFPpjTZ9tSHBTz6gc1B694L4",
  "key6": "2HMUyxBfyqyZjBKdLGQ3Noc29Sz8S3zJGt7bpbNLNPUVrWsEAFpwRYf3rEjhQEs23pBTdBXa8QjUFUjp1aNfJYMS",
  "key7": "4akvD5aUMKsjRTLWNBi8rtySgshezGtxUxhkG9HX6L5bQ5FLyYGh4rzv9EHoJqvgBbLUTqRuFEWVrqXD5SJPxEon",
  "key8": "2Bd79tAP41yimZgqQCGkZES8pBEsqdXccSRs6YJiJRU7wPsZSQ4bLqfxhm9ttoGwgm7mExJkg5TdfPU6CifEmxyk",
  "key9": "1rot9rYWCzdL99orGDavBrixKws4g7ENhc95tkfCD6y4yw2RTFDGqjDRyuJayv4Rz19LTxp5Q4Hp5rD6bvz85JM",
  "key10": "dx1PN1BpMjxWkQhrA4bVG4f5tck9GAapLy7P9s8zV4SfSCu3RprqvTtv9ueacasXRBKkScmmLTgrNxF6DmpxeF5",
  "key11": "35mVEmwT7LYWUZyMSkkfU9qPhXsRs43HMw3rY5xrMkhyZURchLMa5YNr6p3NdBrNFVzsTVnY2mZSvUB3qY7RnJXK",
  "key12": "3Cr1X2dkYoSsPnLCFcJXG7JaNsYoA82dyKkeX52XoWMfEfBAE2w2Wamm9e5HNsSuuoBhx6oeqEaeYtmU8wYDydVs",
  "key13": "2FuiRurMFgQe7J7WCoyDFpGLxbjmF1xLGuDBw8XhgEKWxRFB6iqV15xYhxERr2E9fgxRFVd23Hy151hX7nJVpXn2",
  "key14": "42YrN9edd6PSrtNtRy5c79xs5jBh5YF4jwXVHX425vSpojrtaLTxr56HxyWUzogzzr6NLXgTfXFNztjXsLCbYUEc",
  "key15": "qmA5DNfNwrcTHdnkKNpJ7NM1DHoKUsVMWpQpNFynPgyRANBow3zJdHQCjVJfg4PmoSbtt876j1kXqg857jy3g7o",
  "key16": "3KDnaiGr7EdW3Apw6nrmKnv8oeoJmzUQd6yRWgbRPv4iZr2X2TNj2eUxwNggatnepFUC3AVNB6EVmgyW92ZzNsxA",
  "key17": "5uXZLytoerWzzCg59dNxDa3uMb8E8Mg5QrZtp4DNeqkeTSg4nhBmmv2ddKLbAxfDkfdGzPqYyA5RRLYHx6KnesuH",
  "key18": "7jrgvN6Mdhfv6o1uAKHx8JumxfNs1Qz6XLdPij89F3eV5gvQxQp1PC2oCebtXLQFgbCxh9kT9gaisYQErTQEqiW",
  "key19": "3WHPYHt9pbvhQcRZoPFKBWFgUCJGLajhBZtJ1MTcsAHuFSHpLWhPKsAWkoXZncthYfaYx8DSLovd6AyWj68F3H7c",
  "key20": "4gg217kBMcpgM3xyhhDJ5ZATyGppX5Vxh5spR2rMFTVjFSNDKqKHz7D6bC2H4nhCyjJNu826G3fwahZeMZasNoCH",
  "key21": "4tHNZFRb6PcRfDTsQV6KwZaB38PFtWZ5cWF3JpDo1c5i4AoBkS3a2aLZynRLv6BL8K2QfENNei75HE2fgkxEm3mD",
  "key22": "2SVr1LpkcywK3fLawJUuE5T6uNjBnKRB6dtyh6vDg6hDD89WRqeavVM9RdzEBkmHzt6w6uxE4g3kBxVjuCTgJ65x",
  "key23": "29HWVPVXo5HwYoq49DVV8NmnDNhh3jMhXset2LwQNqSKrfiqsWURWX6eVEP6nzjn1L5kgRYn9Fz5tdQngmqN3dv9",
  "key24": "5bRJ19PrsQpaSmoD9nfqNZG9sfADMJq15DoaNVc5SmRJXa7ZNf5iRqEtLJcykusFeUm3H3Z4TB7YijGwofjG9j7f",
  "key25": "67WB3YnBpxz464fsjvooMXsAfkAWSNazGH2fjg57SxrjtKJ9qvnUTvE4iiSPhcbAut3whWovh6whXN6hLzXvp6m9",
  "key26": "48DUwPjT3DxSFsMd2xogXVvcUxujEPkDSspQjih1MGB5KKSDdG1oQgddrPHQhD7xFtJWjCgEiKVMxZoxMi6ekncy",
  "key27": "2wy93cWjkjzESnDggmyD5MNfHM8S1oGHG2nJUAFrjxwoBfSgsmmzFtXxFuxQJUfHuScZcywzfNmtZnETFPGiqwGa",
  "key28": "4AEyaxJihk1vw1Ad1JSgos7dvhKHKtkwrbFNZeMDxeSTHB1LH3f9K9DiGG3QVsk7ZqWKZQgchBpo2UYENjjfYaDc",
  "key29": "3bxNBFnAFRuxqq211BU1G4R2ytakoXAtse46QpbDwwXsiRbnf14kkh6FHZmssZNho4dNg9ueYhoFQNwpZRKnMWrk",
  "key30": "3pXuBazuw14vpybcHuVPj5SKP9xVRVbmsEHBA5MtpAn7Chn5ueGgSfjKDkkdsqr7QtNJ2wpTUZneoZCCq42e36PN",
  "key31": "3KYJg7RPPWTXaBMzRqSHzgysY95Ghfwqxv7b1EwiELZ8HiyPCuSH7LJAkjK3FvebnCuqnJTMM7QffR3ZHgXdoFfc",
  "key32": "5SemPjcWUqQSb8mCgyh6MRta9V1GdVPQpfm4ZZAGfdDTAo3ARAqdhtZBc9drDg9fdqNZRNXdQt9VhWYaGXLcTMYC",
  "key33": "67HJzu1q6LZsqs2Yw6XHyvfr674zBYs3NUg1vJxRhaiU54e9kPQ2nKuUvvWM7Zkex9F9qBYfQhP7cgySKSx2Wybk",
  "key34": "3Pq8zuNCUmhbH4vNzkHpWHiMPyZDDkwYTfcu1NyJE7tN8WyZcsqX6CNyh2dPVMq3q3tkRBmLBSqhoDgmiBEmQM61",
  "key35": "DkVsM8SUNimpFhr42Rec3QTCBVdduW91HZYKg2JWdbHUGiQZc3wr6iNfXVuLvHAyGUeahsKwdgd6Zjzie2mpasw",
  "key36": "4zNa15LG9WCxPLBcydmVa54gZXpyeN3ng26o8WBpkUp5HbfBRaquQzuTE7N9E9CNBJ4z7HjXBBh4EEY9XWocoMWr",
  "key37": "XxqkY6VDcdsrUUTeaD4TAm7vG1Qr2TQ1gMBbd6QFZ1yFSeX58GW3uhA8GcR1cLqZKWjZyk6dNRi9p98aaFhCB5C",
  "key38": "32Q6zafcDDyy8tpTvTn4sNENyAfN9UX2bRVJQ7PTh6wkzSaLZffaKYBxS2eSjFEAc4vJpckRZSavq3gukxe3Bc1s",
  "key39": "Cc2ZcYg6WKiaXY5CeRG94HgtKyKxuzRx9mkSsKszZ4WPpvkqC7e3dmrdfXUZbgVguhAPjJs6gC27g17g3iYn2HY",
  "key40": "YqWqms2EeG4hh6Xc4MnTHoPDo9W1borPKaqcQEqxSMu3RyRwU2S8VJzxmPZ9FAQocixwYnRbSMUUi1QF15K9RnF",
  "key41": "56pLo6r6fo1326DPvziuyMBRo5UaHaaKXWcJQyuVoPMLHmYGjQw5rpqg6dQvqkt2dCoo4mknFujG4wPuqMN7QjAb",
  "key42": "3rQLYnwtEegTdYYj76RAnCLDKwq44aSo2aAs8QXqVxAmaGqSnhbQYFDESgSJ3iKeMsz4mAtQPQY7Vow2eohu88vQ",
  "key43": "2TKVvsxkcG7pawCVB6EUKyWejJRZcK4uKSPQMKj4wFZJ3WFUvDGpVxLnLqQCstf5fH8SySJRz9Ld9MZ9TmJtaqPt",
  "key44": "5ykUwF9eMvmRofWABcCBfg9DZcp7eP2WjwrefYRkZ59g92kPWvBVVxgwmsWQshfbqHF6BUjXDwJRgYN2hgS86irm",
  "key45": "5vTkRqnMXpyVW5YQqnsbTPHBTxMuZobqtNpzfV3CuSm6vkAtchmxzu5RkgMDy3dvUx5Tbb3YMn21ASz9GozYsfXs",
  "key46": "5TDBByhZHZaWXdGJpn2wkEAAGtNaF5BQJQ4VmZUp15fwf4Xj8MEKgv36PqMJjDnC3ocbRXVZc8oUes5rfJxcQH5Z",
  "key47": "4QRArbFnfZpeHrxKaKfX4NZwChKK9wW4nd8WBazQe5EkyygYK9YL4HakWVhLVxt1aFsP8rcDtUwXmqFKnTVRQvdT",
  "key48": "2WmsyGBBAsza5JaB1L9qBAPKKjoCMKNVkt1PJrjbbDR6LkLt7ef2nySwpbxdCA3B9V4EYi3eCjyB6gb6ysDgcaA5"
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
