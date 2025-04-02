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
    "5Cm5zZ413pNvNYXEHoJVMRYxC97b9KE1NxL5mkgn31MZxt2o3CUHdrCSUu9HzbqBSigrDJJdkdiN5CQkD6v7WTLm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Rwp8pLni5AEGfADD3JVddWnwhuim3eK9bNwm3gtGkqhZq6UWgGL3FBLpzTaKSsm93HxjRRhT9FhqFRKCtq3YdDL",
  "key1": "6qaYk59a1PALU82M4QydB7DkX4xbRS9QRS6PZLkUVLcjMWzWNWSB6j8j6FnY7znjH9KqiTKeDPz93E5JoUNkn82",
  "key2": "3SqrWhNaPfrteW2zgDwqSVqMzS8NwaLdFfWjtNJzRG7YvjEevQdgra3MwruJxfnJ8DeonW9GGvK9cvSoji6AgSv3",
  "key3": "4sGn7eww6ncYqzcrLWqhpo2bxoc9AZnx1dw66Ss748upmPoJMz2UF6SPfWxa125xmJRWDFiiYdQgBLc7CwpuprwD",
  "key4": "3n2tDW85aTttCKmtU7EsTxtznfyjtTjmdsJ8NeDtk7aosRYSzb4oeQAL5kuve1o3X1vJDF8fdsxCSDBaBsXh7E8W",
  "key5": "4EL5mVjQTkzgT9yHy1mcDW6TzHVGY553nFbMVCzKyyJhDxdSSNJ9bNhWvL9oVB7FP3TLZeJDwqXfZ2vd3xNJDiJU",
  "key6": "2ooueZYR3EixEgYf1bFm6ovkFhS31xQVU2tfPLX7JHbsputojyrqUQ1cygXNZN16o1prigwkyWnupUwD8xBGttd6",
  "key7": "5hv35DBcGrH3gbswM3cKpUEgdk9wDfw4kAB4JFnRzMs9KTEJGt41R53UzasqxGdWwPeTU3e3gqaorSUJNbAFma8U",
  "key8": "5zbqjNSnhkDnZmR2RJUjrkGDYgt8a6hJLb9JK8MyNPX7wnmTiCGDzJSGxceAa2UCja7LWWLkNWBHirWRNBuedouv",
  "key9": "5xJrbZQLH2F5HSrBLij2m8zrcYCZXN2LpwopKD8jRk6pmnY2ramaJS6wDVAoEfm4Nd9ureh469E2mN4jDBHEwowT",
  "key10": "4h8QQfTRMTVckhvvhBCKL7EzFDFRYFgHBd4gym5Y1gwgsDYavha9yX6NvBVoV3ghxGLzsH4GUykSmixFBsc3Aox6",
  "key11": "659LpcNneSzEDQn2Ff1UdHjKGj66vDJQxKeGNSwjMBM4uQxNcNN9qCMfhS3F6M3iBA2uHNb86U1bxQov3podSRjQ",
  "key12": "5S7s3NjMm1SWdWGTjPpuf3otKVfoiaNEGEYNYmuN292QFx2HnaV7J2vS1SoSdaKv27LzVnwcc54M4fPyUkUgxdUD",
  "key13": "RCAEtftm8wsLPXoskE6FXJKS1fRC9syiecEZ2gmh3yXoLPA6gRh2v39yre4tWkPuMu3UcZhPT1nJ9cmzUxFrxTB",
  "key14": "5xVSsgebxPn1niHWjtRnYnk8oRiYPaEVCVCxdnM9Xh8N1kFWXZPGfyKXaesrqAZkf6Jts1TxX82JLBkrveVVR8eT",
  "key15": "5ypmDCFbQuDWhsKbXh1At3puYVuujgFKUfBJsa4VS7nKyTfiEDLXFNTHkqJ1SJcGXQs2dtNgAzLmCwfK8Jgd7SeY",
  "key16": "5Ey9GiRJGkF76XnC6MdZUtbMqjTAu58JnLWPgDJpegDiaBCEAk6is2VW1AKLY6k7yVV3jfGLunJNC4az15gmDqVp",
  "key17": "4fk8PpC2sfEYbX1auZoRd5F1a8SnicFbyMMF9TaKk5eBMJnj6MqPDpVXsPKJ1wep8qtZiSn6CCvH3TU1C3dMzXG4",
  "key18": "4QoYQVKLMDfnD1Q6VKbVQma4cdp8cp8cpcBtFKdXMfXFmTjEjWYM8pdFLBVxVcg5djYbMoLRYbpck4chcq1rHuan",
  "key19": "BV9KyxP4JAShPkgVxRiHmAHUZYkwozNFaAmPEkazjYAPrmKva8CHpksCC9KWDpwUAqv8T64JjTmPnQiZPgFHqvS",
  "key20": "52AYgGUwR9sTe3pkQ4yUQ9WCGgwrg4sQmeA3BX712bDYhpEqWi6hsTSbLEMBskyKuLmtg6N1imEahp33XfTTwRb5",
  "key21": "sebe1uofsMWhgbi48paK2A3GyiAqAxNyvW93vJb13z5HYMQAheAK8urcHs4tvpE7Y2rjmq34e42jT6dgZec5ELr",
  "key22": "yQDBizZf3bPTYt7HfMb1iNeyqzLCtupmDKuWJRXU8pMqMGjHWf8khX3KWonLRh8xYJKRQnd4bsGBq9WVsPedjGZ",
  "key23": "3RYb4jC5fGD1knSvxBohLrteKcBnaHoJjMoCzHaysAVYQA4rfWdyJGuUNivmvJmE71Z5Nk3x2x6jZ76T4muhQdE",
  "key24": "4F1DshA5Wp6X52V8ccUeNBUQftRYiDLf31w989ZQtgPpGxvnrhuJdKPAguTBqGSsVvewNmnzuwUG7ta84mMTJh7K",
  "key25": "2f2Yqcidi1WBEFbqgN69Xx7S2jUa7of6ceNCEzK7cuSU9DHUt289g496tcQcbB1ioLytupqqSEoq7g8joazYwvq7",
  "key26": "2Cc643NP6MzivweYVMT9rjusNavbD7fGAJET9yp8kiZzBTxmT5WSLU19FYdEz9RS7V9bwfsZqbNa21YH1rjwYhFS",
  "key27": "3E2HxXyFdDfhzrk9XbKATQGzbRa2DSw4FxrgriXSuBNb43Ao19gvUGGj4VJRZ3BjTs9BVM3SiKSBgXughfkTpbLn",
  "key28": "3jYiq4EkxJjS8tVeqo4LHorxqQpCupQF1MF5f48itehkGv1ViK51ZbgAdjSkwtC4Nm2j8YftDe34MDv14LXEKWUx",
  "key29": "3gNBJvrTNGFKabM9dJULQQKSPnL91Z7XSZ5mBP4Hjfg15Wispj1j1mpK2kuKD4GGrRiSQfjhjt3S3CGwQDmNrcnh",
  "key30": "3Cf5SD6BYqWp1q9huQFVZL5tmwUPwFDktUGvyTWbuHpCjcMfsGX7b5TfeWE4KhZoFZkPxc7naMpcAWCGaFgZvyUJ",
  "key31": "2FDPETz6nhq3dMCe97ev4626WfP29Rtqrpcw1Y8Dq74n4n4kjyLRsYwhn1UXhPNspvXv9kqDjXnVDsLJs8T524oQ",
  "key32": "2Qwm71Ads5LmRuF7irMFfpqDseAbjjkVMiZmgDQqzFxAWaZ9pV3HNEZC1o5iNrsb1jotnhEz5ssFra6M5NnJkHtZ",
  "key33": "5ZxQB4LvCMneZAyJ36VC42A5MXzobtiMjS81N971DtPc5VsNMgSZQcGNe21fzDkzhVHnMRfDsJU5CY7eB8pwrwNF",
  "key34": "FjZb4WgmjfbSGZsScwrqGMWhUJeLgsyL8ADZ81VJrYMr8oKGgusYTRW8YhyaBQgSUuQrh3qyMtNPaRyQ6PBcrAN",
  "key35": "XtUEo6EZMsE4CVwA3SAeu9MfR5bx2MPeh2SnoMPXThYHdTVLJMLaVUe7xt4xakqzR8jw61P8vy4nFBp12kthgTr",
  "key36": "6hMq9TMv8cDkEAXQWLEbZA5WEinfXjyjQ5sLYQ6Euv5vJy2dVFQ4iPafC9WXUUxZ4tGof2VVtj6xGnJwrFZKi2L",
  "key37": "3NtZUk4LRet1t6RtPzSbF7wc7BcdZ4c4WiDwDHvKRRh8hc1wu42Zm6cMntCWBdoVhPbU72HSumxHt9evWtqzcKcm",
  "key38": "2JWdVJxZZjh7nHnZ6GHJXqTsGrvnLCNfhbcqazXkpyDzzfxPrm3Exod4jtvQxqF26aKua4GxSfBUQhM8z8rmUybx",
  "key39": "2iCmgSVoGmCzB1WzSxXBYKDoLn4rhgKSvRAtT1WMsRvnAt28rucmS4pkJwekAYHGpPk8etihqeV8uhgqBZGTpqLd",
  "key40": "2THCfi9L9cwAQBYdxu77bU3tHAhvJfWTypzPgnXu8D4rQ5tUWmSxy5UmrNPWCV3j5YTN8bQTUVKJg7c4mJa5Rctm",
  "key41": "4iM8XEgfrobT2UrBorydP64pze3B86dkC2V84gybAYcsSeom9P5C2Fdv2xUkoyJFBtQ779pQV7smiM3M7L2NLbKF",
  "key42": "42XPzfotHesHpMcpcRBM2zvGAJM15VLK5h4yCHgaxnQhts6a9UwgxtxuG3G6Z1NseHMLcm1TGUHkNbrRag4vEKzC"
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
