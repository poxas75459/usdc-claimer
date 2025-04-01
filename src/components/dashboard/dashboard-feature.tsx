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
    "mWetxyUULethZVKid4j317wUpujjJb2EVAhKitot5PrqygcAJTw9qSUw71m4rMfhSxL5JWntvZgaQgFRGMQdA5C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ABSyya4fVZjX4jKkRZ7YmkzN4V8N18bS3BNf9urA1ELFRxoHZDd7W1CTnMZF7x57RAbNTUhuM9QfEp3YM2pQpcQ",
  "key1": "2KtbemG7Dh4VnqotiKJAL6srjmQnWMM2PurDa3F5hDYJL7AKYcBrSRxBCW5cWiJcxx6rWZ6UKPTw72xUR9PThMMS",
  "key2": "4hwm9WQMwAu9eoTa3ixsZdDVRDkeam5rvAgdD7qdkg3p85khXb1fBDe32mmXL4GVT639KttrEjnt7nJfzb5KeSMx",
  "key3": "zMGStb1EDtpDMHpJbVBavyXr4KGNHhw3jiNiCxyQQ18NRPeLgAJtrRoy6o79u4PVogDoPcJadZi7eagMNkUstWJ",
  "key4": "3iuJzPq9MifPj134QmGLRvfSGTNftfa12YHatDYCrVdQFdFbPPWK5sqp6Ag9KwfKsTbgUYYkFP1rWPJjn9rKXDcW",
  "key5": "4imrumGWDgpmejnfvnKVXZ3i7nbfM8SCfPqvEzuw8rqDMdpr8ubmff9CPYC6NacRm8qcPNcuaKDDCXxtD544QcDT",
  "key6": "5Yjk6TTcLttcFBZQK1xEKdtsCnr1eytQfQoUp41iCJH2Xb5SQAs6e1ybSVk44VA58csJbxbFbgsNA8Hni5izgEAn",
  "key7": "3JzMDnSM5k3rWR4zsdC2ykwbxur3JuxTe3mWKAqSTzH3JLen5JC1KZ6eGQJnd7L1nZQDCvDK5LrpJekCvCKWmTxa",
  "key8": "GX3TnfiBdRBdt6CvS1eU42oBX8eQoyxh5izBs3FvWa4YjBFMM6PW9fnY8tTMMnERNZSjbTDL9k3KGVc7R7dGgqG",
  "key9": "5tbrMauh9gwhuAqnMEwGUtiLeFK8yjhJDL6m8fDjoPjykx6ioQBA8i6TiJAJUXcUpV56tDbmNNy9xHKQBuiN2bhg",
  "key10": "2fhg7EnsVX4uxD8ua3sm1CCh5DdjmvEnZ2Vv2CAa9k3YLh9hMszneZ6XEpLNokfUrBD4TphHwCrsa9pEEcZvPHPZ",
  "key11": "4QeMFfSpKL8Bb2xXAoFMP7UNj6ab4wHMTmR2it4VBh4ZdAnv21M22ft5TZHn3isUdurTsySdt5NeS9ETy2fq6GrN",
  "key12": "42GEm3ovm2UJUKZHdnKLZsBNioX9Gm8t52dmy73mDGWFqmSpja1u8a6dW1o3gMB24pmCxJbkqRf5agJnZMKNfaUj",
  "key13": "5Vqke9JRw6YVUsRcE2NUqWQtMZ8ZmX3H4Kqe8oPyEYZ9EZV1fCAmPStHFwn83Crt9ZxuUWkc4yHGD6pXJLto9Zni",
  "key14": "gewREjkdR42LHfedXn8wxqFXTEmPvc1Ld5q6LJLJjsykuv8Gz62cuxqnKmoeDxwy9eT75DpaMLbEyYvCTHMja3C",
  "key15": "51EbaRKMDBasacPLM6WqReskwaGSNhtBuDgfq6hAjCmYrkQe3jg6tC8FD32s4eShCR9jbAz9opcMjGMBzAanzJx8",
  "key16": "59EAw1veuB1fLMsLAL37BSjZcEgvDRQXtXyWZD6xsRSoFdTUc7J8t4ji5wyPAz48oEgvZqmoGnVxW5NtNKvAwPXQ",
  "key17": "3K2ynXrPeFSC9dCGH6vk3W2ZUKsYe1p97txRCZnW9CzbW6anDu9Jjqn8UTVh8Z2SC4qhPck1dUSdJAiVGdWCdPXA",
  "key18": "2LpMkVn5SiSeU6z5tzxs6HVDUp4aMGf4ZZmMfXCXY6PA1KKxp9zyZ7DPdjjH7FpZdCACZA8jhWU3bLu4pkAa6tMg",
  "key19": "2zbDdbnMyiavdbukutp7YoHQXkE3iHUH2eCJGYTQu2sACgtPJgw3wqDQ46hQY4Z2sQHxp5Dp4vkLtGeZp8Sv47oB",
  "key20": "jcTPpXV5sg1TqZbSWvg2rGjd8Uh1mF3L1W2yYy4FUHJui9BD7R1PBj5TqCTCU7K8UL8KrkRZrJXGmNZhQHWfFrL",
  "key21": "49rRH6PqHdsTT2V1myXH8DqSA7Ukc1NTH9w5JgGHnoaxwmunV3b9F14RnZpGEtSmmL2ahL4QAKZYjLesUsjNtJnG",
  "key22": "3cy3yBbRxLzVYxdsCQ5QrqdiKyyWxYuyaeVuXhwqp9fcE1PhdRyGwbX6Qx6Jh4RsVZb59c1UaoVCGyUVKQUCrd9b",
  "key23": "4kbw8qBi6N8dcSg9Rsf9imhkDiiEvwZuEKLYFJBJmhz13ntdrXE2MuoVmNTncY6k58MocKmsKJU3SkTTor9h616t",
  "key24": "4kqJ2KjoJBadSppYXCqqyXoRjvHYKUKGxGGuDdc3wF5m45m51PiiqLqTeAmMRbGSo5J8ZfgVgGXsAegCcDS9Gr5Y",
  "key25": "A9w9tFDUCuxJMmC1qMxKA6vQFxwuna55ghpRMC5m6FWnBhtfkq8MvNusZKwAH7wrPVfCTkepvQWdx8XtE8zcvgg",
  "key26": "5iLK8uZ3PGB7WUx87PzCiJMtk71wk25rWdY3mzU6kvjTbPGWPbXmLKSAeiDiMqRygzZodbdduFLrKG8DkJJYwsLo",
  "key27": "5Wqnzrk4yU6VYguFgQqmGamhfQBb5gBWEPqG5Tm3y5waCsqFGGphjJRLu1DMwDiYPNXMouGpHQQ4aAz5MKeb3fUB",
  "key28": "4hsbxkMv5vNxC7TszhPfyrwbKW5tV5gtiWu23A6T3QWy3fwYvpzvfsEjd5ePHP7TepmLCgHmETnPLr1Urx1kaWAq",
  "key29": "3BTvYEDc5ELe2kVNfU8uwKi7uRw5kfhGESmXJxEMAYnuFwX2WoH3ej5uk95tB1XjdNkb1cUy4nk6egbtTtW8ABkf",
  "key30": "51S1bXuMLzsgmpsQJARZxQkG542V6yVx8r3BXy7nvW7eo6TLbN3puohVtsXg9tAJu3f83W36HsY7AqsfqZUpd7ZM",
  "key31": "527PqQG6H9asSKmsi7kgP2KpnxdXTDik9neDktqkXko6pKw5wFpZLD5rHSEKmyhdTdaAHtnfsVMLd32vHtqbqBQ7",
  "key32": "3TyP6o2RkiMpA1jtNfPJjreDGT6cjGEKuzP486iNJPPh15UP6aiUifgnD7cn1yKu53mFc9FvkJYD3CYA5nbkTShC",
  "key33": "52sLDs5AFQ32TxFcmYc7cVSeWnmpy32tPwffJuHUbdZXsA56Pbb3NzxZPfFf8xbRJgJZUEMRG3GeWSS2tn4xks1T",
  "key34": "sw5tfznKpFuyEs16vrjEhCveTCzQYrU73t5xS3RBXHrKcoxppEaiM46nxVTrdQJDEY82f9LFQnMeGyaRQWz2E1j",
  "key35": "3Yh7nfKC41Q2btVRAm6di19wimZ45SeWEX2be3YJys6shomQQhjt55PPvh8NCrZcAUyBdsRncHy5T6xPSVvFAj2K",
  "key36": "4D4Ue8NY3hf71tZdbmfep6PKnWhaSHBchtLjo9r4B6qh4N9hrK2L1civnu6soBAdwjzqXNK436sJCBD9tWHHaM7W",
  "key37": "3CgEhbC85LF6QLhXPE2PscCC1n4ffHe1ywnUzJCGPFwnmZX2hGwaJ92g2gaHXN3z9pskXNKYYV7PsVjspokU1AyJ",
  "key38": "27d4R5s93XoqAXvA87J9xVKcDpGkf99e8BxmT99A33rhVo3We8RaiQe4zDGY5EC41jFoNtk6PbVFmPzsZ775mY4Z",
  "key39": "5qKE6KymkeLyEzbG9x7SkaNP2V2o937SwtwpePpER27eRT5h5PzmzpLeX837Rgfce43f8ke4XjdojiYFh1wZDtW",
  "key40": "3NdrVmYKdciZ7PhZCN546fDLS9UKTDKJdxd2FGLnamugXma58wzDpjqWg6Ljw8MGC9xxgowVLaPHiXgWjF4QEdC5",
  "key41": "mV9sCcqwT4w5WtbDvUfALocUrXkY6wWYSohNT1HWYzSCU6PtQgxCr134L99knEuNe2drcLcJvW475X3BDy4zL2V"
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
