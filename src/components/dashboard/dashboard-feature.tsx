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
    "b6mpYpCp8w4eGZzaxeSr3QN7sUrnNFFndHkFnDhc7FDpwm71qefWzPbcDXXbo7VX1WHF54a4CvbESYRvct1CFDz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cqDQdpb8rdam3jtrzvd4BewbegWLNCewYYZAnDTVuqwq9MgZMv2UkvoQsn59sXatxwBeoFpabZFzTP48gNYmtTW",
  "key1": "2Jj3bcZEcauoute3LRQqLG48KyGDxjgZz6barpCrBjpuzjqJEXaSupvKTy7xcrj7Se5cnkow8bMkuH6WoX8ngH73",
  "key2": "21wxft2gYS3Eo5XR5mQA1cTxNQWyUAMk4zy5j8JKsWVTZhUWjLwb9r2LdhzB9nn6MjQJ9YafgfQvCkL8zv3rLdUN",
  "key3": "BCXkrTw9phW9v2G52yhgvPFu4qmeuqugyHFygKAGZJZo6kR9Q3V5h1DxuPu9tjnwfZQ4WqzH29ygxko9YDh4Rwb",
  "key4": "2FynK9YqDaRHhDeMZqVcCDYRsNtc7eFPfdNkfx44VcZoaUnvt5DJSRMiX9r8DVQ69vvDFs6dXeuewAQqVgCqkSCw",
  "key5": "2Qh8LEdf5FWqNnh9CNL45EoGtgaGQGLUaJ9Zsx829bZTyGYQmnDeV8GWpyzu1P2bdn1SZztdVQaVWt9E9PwMGo1k",
  "key6": "2wTPf9jADYwe3BFGPSqBcVQwsckyfuTCeVDNsb6rEnwRat61kqM8Mp6uyueu2VH9qFVpVRkdfzu4mi5kuF923ZyM",
  "key7": "7ASLANZMUX8yzpQNyge9dHm3UbzTjpqoNtes2Qiad9aPKBEyj3SCC6NgrjenC6oBkzda1yu9w3gnFiU3risr5kq",
  "key8": "2ojra1ERBqaChnQHLavapqvxs2qbAM7bhU4tRufJ7o7kitUGn4CjE8wnCz15Cm6AkAZeME6JcikEkzyhFrxejLmD",
  "key9": "2Bv2HtpczqZehQreodwuVbr9Nf2AfwyF77p9BQjoq6Du6BiPFukHiv43rA544T3ffykxz1K9vGxocbipX4NzKF3E",
  "key10": "3DuqxqagTw9YTT97oJu5EvKfGXuJxaJ7GT8vPBP62XfTEmXPd73pibgyt5XHEVL1bM3KHm6kxmUvpZLQs6jmL6Sv",
  "key11": "4tTncKpZuCLHWExmAHh9B5QMFRa8kfRty4VS9GDpJmgDo9rizuSqwimQWhNYyD3kXRfhXWRYFKASe9Fy33ALuksJ",
  "key12": "2yizTSXMi9wWTgyNMLyRU5RXTuMyRHkKDQrHTatSnDboMRhMA2Cz7YctxCCrYHJby2EzthNkCxeGFyt9GsoALjcL",
  "key13": "28i3XqGATyZhRp5ZeBCaw2pmkVUc9KSBJouc3eFBF4kpTHgSGuKHzzq69N7FKW1MtfaWRfFsHaDnEAFrHsarfZ2W",
  "key14": "2aLktmt39J5LApN17KSy1TtRoz4TiSuxTf9fF9aVPdjuP4EibRJcz9zyjtZLGLF5W47s2fK4D9swk9VE5Z4Mjo9v",
  "key15": "51ZsHUfeTiiL6gj2NcpwPHiggYPYUxtjqHRY9To3zx3ag9YfFNqpuQjUjm57bDCDswHUVgpWMEbKf5gR7FxMgh8e",
  "key16": "512xuLeggbajyKjggxAhffdppKkDec5xkcdb6XbZgbbenFRoWMux7DKjsAHjgi3GxCjYah3QkzWfi5YzW8m1RjdL",
  "key17": "3ywiiWjomLeed5nzdd7azq5ht1nAs7jfBxLNYuQguor6H8XuoMqdtaKoY1M3aM7VigXcyxpGsk1afgiE2cwLyCTU",
  "key18": "515fKbwwTP7nmg8DSEpKFC44rg5oaoyUDSFZpWYvQRY9S9gNpUS6fg5HxkyJXGddXAt7xfSdibvBoGwNBHNHn74v",
  "key19": "2KGUeqx3BfmKr2sWGtqrPEhF9vQUNoSMyaHyto61So7mshr2jVJFQag7KSMbPAJtYPdEc45ZgvxryQTyb9N2uNvd",
  "key20": "ivN2pqdEG1RoHJAmuuDPpvMGfH6obEQvJCekC25XttTtS4U8XuZq3iHhkRgpEJe3uLB9X3mW4TB51eMHPVKfct7",
  "key21": "25tgYjb3vF7RFPQg2ZExtmS9j8FE6g6dig8W1Nq85XtgETuzcbB5WVibMd3B5pwSnEShtdLo1Fsvp6b4FVkiP41c",
  "key22": "5hKXgncugigKyE9WxpyqLCkpfPGy21DHET2EJTmzBbY9c3k7NNF5V5ddTXVkEoNjqA1zdeJd4iFyhTCxdjBYJ9BB",
  "key23": "52yaJcjxdPz6JuSrmXLqPxBoMhuLe9Ycx2Nt6ZfHwKecuXV8fxfc3vurdHEFYhSpgjnmDgKy19ytDbbb78prfQnW",
  "key24": "5coy1ZqCJa6WXYcPsy5MLEw5tdh9XAhueHD6iZYdweDs4vEnyZYi9nSKzHin2NA3GzdXBorRTt8Tfujei3ZgZ6CN",
  "key25": "5it1t9qBjfxSKQ9gLaVnTM16xhEdkgzsz8omJxsHccMkUyZ2KQhcbnRyqGNPeK8dxD8PopsE5EAbpt1D4ajoNji9",
  "key26": "4zDqXU6kdMjzVQQo4DiUrjCz7XdCsw4podTfYkrVgTLMGbaL6rscWj37efhxf78cNmHFhNYNMVR1yTDroZN6yN1i",
  "key27": "bjKwrrpRYQYAZU2ExXsGbvfx65xJVqdSgaK1F9hvjpSrxMJRJV282Kdxx7xBPLxtztx8LiygovkPpz2rZzSUAyF",
  "key28": "66oK7P2aoC7NnaJHLhaJMBRhMX9mVrYPEMrNz8kxY856E8kwJaR2wiu7nYPA1sP1hzxJypp14bDGtSi3RSdvTzXg",
  "key29": "2ssUz1bgGh8Z42KXCk6g2hrZhNeAqspvgxg9k3NDZsV11j4oW2S4sPLGY3pahzL9AocnCfaQdixzN2RguLeT2Ru2",
  "key30": "4FS51JY2K4BrthPQtfUS3H9DvugG7M4atXReiyfvMUMxs9ghBoB3AvdKwTumAzVbDVvjCVKPnkbfK2DmQ7hYq7Cp",
  "key31": "4DgwoG8gBh39BBnNyv5JxPGjPzreo5GH8r4qeZxP5qb8eaLnkHZSUJJypP3xYEijewS5EAaRYdHsGH3V3K9xSgvZ",
  "key32": "g19KsUdFWNQ1YcYvixmW3JA5q1dyiWuQYMzyo2PYMLKraAD3MT83cRHsZhjfB6k3zHPwYwpAKNK5EBznaQMZsgR",
  "key33": "593zZ5LAposPtKg3CwvsUTdMKFZiCEk6DYRhLZWL8ScAmfsMas6LynXPHJXxKHRNYGSdd1QMA9ytzRdcPqskdv4f",
  "key34": "jnjwTswnugsDDiSz7CKvgR24fuCJc8SKJb6feB8ox3h3WLxyFQk71VeDVaL8GAFCpicQ1Q7ECjDCyZn6b7pJ5nF",
  "key35": "3YC27qezr1M1YzvcfogijPRpUzByB38tXtAecWVoKs9M3FdiNpz13NtWa8wgRrEUEt2MdczMPH7z1CE6246ipXe5",
  "key36": "3tgrhS2GT62fvWePhiHFYPDCi3ihoZzRhVmHdAiz59JagBMH1MV7A4PRT45iJznKLyXRD2s1SZfEQB3fXGidzB6r",
  "key37": "3CoiB2GdAud8tFBiCNkFsutw81D81qVkuQAf6KHAXtVQPj562dty31PatoZBrkdXdYGFKdt7Fpf5UbS14uoSNfRs",
  "key38": "3KkH4bBDfMPdykXzTHYobGPZAbwT6wds7Y1iJeEWW4wwj8BtVEisGr4ELmS6FRdAJooqQUtzyFpduKh1JJybdc9k",
  "key39": "2J7tCtzBZREpHGE25gxa5WW7k8ptkkXV5Wwfuezj3qkwCzqkPowt9jtEhBwDZgM7Jq6YL8Kyp4Bwj6MgMB7qHyYF",
  "key40": "5fprSPQwLe23Q5YDF6H2AFpUttry4Nf8fsz2yMY6EVR2pFJWXKA232bbBQYP59JYGdoMzV6QmoHspS6Avm2zYcYp"
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
