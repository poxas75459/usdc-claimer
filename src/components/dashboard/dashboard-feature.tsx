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
    "4Ziptg7Vy63D3dWgo2R37k77yMPzcwogptFFZ8J8HabqrA9iBP5XPczHsujdfgS7vD3qhZF3U8LTynWeDpuJRLaA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35xL6T4SHAssikXS61HriT2SuUZKBo4NgU4ZjMs9yEhBPmdiP29D5V5jjR6FYP2XN9xwKt5zHsK2vXsYvZ9szxrJ",
  "key1": "4aRkhL9CTnAV53bW2wSmTv8YvKppxz5eLpEy35AdRSizFxDFPpBY37g7FB1YNBunEFw3ai47TkPKNmRzzAUDHjY5",
  "key2": "4BQz5v4GtSgdHwvmrNoQ4CByCZh4434Qp5gThJCQUq5ijkg8vPb38PRx7WTojroiBHuC163XaJ72DkTzen9tKeVf",
  "key3": "3xkwm38VtswRAVADJkChp2inLuY8MHGSPifgGLwEjCvPMhJbutXcVBnScphcB8kJioL9h2vDA49ezZFuntBPUfSE",
  "key4": "5NzvLSpBfugSk2mmRa7tbDjPKfKszSisiNbjDu5v5GYuUS3DcUBgUwA9jy4F7t4wchXMeJ5STLTeHLAqRsB7B5hC",
  "key5": "tFjtL1Cfcn5jLdNn4H7d3yKuFfGPNo2N4XGjmh5RVAGpNhspSwjHzMgdc2eN7riiC2H6ZhR9TBq4LJVdKouqc9R",
  "key6": "5bkwxRoo7xCbRtoHTivU4wTzXStJ9GST7vguihu9Ssz1epv3Es8pnKc3PNpxCLvJVQaGTm3nNaZTx28ujM5te86",
  "key7": "57prVzXXtQb1HwtkcvuCWhaS3AXtENUBs47D6qH6MM2vijF7FEbBb1q67iUHm7Euf3XTW8D1bJ6MWcHUL4VDRDGs",
  "key8": "5uUG1SSDVFuW5Vf1nFbKHYGjADFMwA9ut6NPkvhq8TTCf5v8A5Y22ZhzDMyPGdccTWmfekDtKCXHjhCX4BTsotW1",
  "key9": "4gjj2sByn8kDyWJKJ1awyVMsMRQQBWCXVtDnFB4bxrynEF1NaHQ2CdE4MjDDnQwjuKhAFiQMsbZdq4zr1FtKpmUe",
  "key10": "32P9ymro6AmXZAMiii4qcX3T9hKbEEBtCw1rsackxR7zE5eui4fcd3PvAPbrMWp8EwxPbXA4Wb5pY8mUYdPbKpXD",
  "key11": "3Zsbc5gzrm5ifGkXbsX1hQ6DjbWj6cAT2p3gPKofb8ZmtvsHgYFAUypRE7ERHgpeJiN4GHecPMae55hevukpAu6P",
  "key12": "2cSvRvU7h8ZnG9D2tWXa454KsfEfR44SKruxKAwMffje7tF1hdSuuovGj3BAJ4E6JJWJyEox67Y1xGXNXKF2yiF3",
  "key13": "4K8PRVGudvqpmNgZ9CeAWaPoCBf3cpyX9iRgADUvZZzzNi3VjgCbY2Lm9SNQ7nPp8C6r4EkVbveyrkHEYz6qgm8m",
  "key14": "XKdqEpAhtt7U6hmAmBq87i6xc9zArmE1Jj4Ae43XHerYutXdw8q92qX6HxaGXv7E6uYZmG3c7Cy1FzaCqFZ4cDZ",
  "key15": "3kvs4Wtq9WCGdtpbbMQAD1E7Sidu1HRhSAvCDZRXbNkQw26qJb7nv8DDD1ppUmW6fMAnRQFvE9b7WkF32WNcnbVd",
  "key16": "3uV2RThBYc6UVFz7RWvVYbUhtccw4rtJjrYy8WvawY3ZeYHiTXgADgrX6qffE74mCQa7WrfQnbHGX2abSK2S5KUk",
  "key17": "4qbGb21sMG3GATHYdmACZBAzFzoJ2szWRbvnufpsqZbar9KAH9ygZoPtbgYChLtEGnmu723xpUNd7ZyHCjsVzHBE",
  "key18": "w16dKiUZT5HXCCVgzeweQgHkhiJcrkKGB33HS9sFPXnYD7tp1voK9rAxXi94CCYnZyYqFUDf1umH9LN5Hooj5yf",
  "key19": "4jYu2BYRVq5QvaNMb63MMcvLUxLr6gujdghotsKt99YbadLVhVC7puezQ7Hyn9PxXp5gkeUaqnbkbB6zedu47Nmi",
  "key20": "3hAZ3bFp4g3dMN5NVENRZniQgpbYrC6wat1zL2q1VwWpKtkoGN9p6rqwPCmHtMwCxjh1R3HjsHn4itNR3RatzqSY",
  "key21": "3tPL8a1CCBqdan7dNdDPKKXZjXrqVbLCcTDC3Ga6WGqpYSqJkqB9fWWeCySnd68vCq83TpsD6fAGVS9k6ejWfrMW",
  "key22": "5dVtAMsMna8XfEoD4qzMqmMTwhgsD8FV8GM4VUuDGvpqRVD7p1PH1UT4d8dkythjm2YVZAuT3Kf4hP8EAsZ8rmCH",
  "key23": "9RSrNjo5UcZU8VZdWhMdVd9iAWABx6frq7tAqyFCFe2ptdeAa2wQ6uzz1DGxaVP1ktofoSN7BW7Mtr8tjnwtmup",
  "key24": "56WVjC4Yc1aU5gpSqCvY6z5jpLJs1QZeY5N5v81ukBeXoJRova4H9ok9w84WMfxCpaq5Dz5LLE64z2bQpsFbqhck",
  "key25": "kkVzGLFuL3Sc6UPPTureikGydRhr7re471MJhXtUP4tNTfC4kWQKB3jSHvSfVNY14FB5Us2XwXRgKMr48PD9MfD",
  "key26": "2WQWadiyZNz4mpjxNKdUB9SSE1yQcBhvWgi5nE7yCtJDsJowMFQDVbzkuWWxNDjWQFyzYKJ6mfn5jj4EbedCby4G",
  "key27": "Bmb78x1zQ2Qc6PtpJsHeKNKed4c8AdpN34jfQc2v9Zhm6SvuiFfQCtBk3Zs9Y8aQtWV6ghVCuYhiF1n56Xa3onc",
  "key28": "5URLESeiP7Xr3ZeM6M5qrWNLUHss6bTmK5AAWfSbaLBcQApVigXZGrVCXsjt4TMDwR5AyKpDvndWzT8BboRsF98W",
  "key29": "mF5prMLvxCfQfdMLrVP2Cqqtkwy9ftfoFdQKQtY6pWRSaDfco74NXuNTqKKtERWN9d27TfaNgZzca7BCBiWvLr1",
  "key30": "4YYyKETtQXNHFH4eXruNYeVLKk65utm2HiBK1tqPE5qJwmb3JZYTT5whWn5a9xj6AyvBS4qzunzARZVh3B94AJ8K",
  "key31": "3fvVpQkqJNVqgXuCFEJ7Tg7z9b57NxS9ceNeXujSZHdCsDceN4GTmNx9jFZR84s8PfFEagWfdU4Bbk5koEUZasuC",
  "key32": "4wX1zS5RcHf27YdABbGzyCCGPKrLtQJFCFvgcKMN4dhkWekNGTd6fLEfQYMYCnqUWdNciu8Q2jtAXhxLirK6iVVc",
  "key33": "4MvvToMQxYtC9Jm3tMrNRpeBKWj9E7CoXiT8Z4TVrnS8xiUZcizaqSqEDGYqmCW9gQn6Nqv3kGXRuk6SGEp7aapc",
  "key34": "2wL2SVQfHJqBg7eRNJY2FwkQBZieTPp6GVEPzK9b4cZZRZjyFKAYovYwVwA47a9dQVbuoj6JocHd3jnUZEo4DPvs",
  "key35": "3VLp2HJ8MgbLgH5gpwNQ9F2rgH7xsMVY6c6pUZZAEfZ7gcxv1kB6R8echUQb5toB55S2kMF1Bi8FV1yhjBfkiDMr",
  "key36": "Rxs3JrEts1MG64DNBFumty7SngTyJWWNvCKA5ZTYQTD4cdnBaqPFRshUDwiWZxyEMZFnkC2ApFHohNKZZzazKA1",
  "key37": "2VKriiCLNKEZCTjrpk45cF3rRXeJ3K9JmVWWEWSqMuSxWeG2uB3wv2iQfMvKXYjbyDmjNKkvxxgcozU6Qjw8Bmsv",
  "key38": "3kkFRtD69A8Fd9e3n4wohnRq1VpzuLKHGwKHYwbanoy4fu69MQ2fqDvMFFDExzfwqgXYkB8NRNxEpKAXGvzZsW8L",
  "key39": "Zn4t3Wd7AciwakXj3gosTLTaNLDjA4aQ1NkJc9LZqBMUSoDhVrjBaU3K91EQFEBhD2pZpYe5xRP6gaVnJXuuNyx",
  "key40": "2iK9m3d1mQBZv1mSE5f3XqgFnErr5sUxqq5etnn9BqEvq4S5XaP5QeAoo2zPguS7kGsya6ShRvqhVyBcpgxBZ3U8",
  "key41": "2f9XreEn1kduFrYub56pupd16YSv1WutH88qpEwFSu9yRXk4hmaPvXLs2fyj65h7eaS9ekm27R7cs99ExiUUZzF6"
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
