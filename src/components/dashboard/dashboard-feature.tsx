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
    "5Rrj1HCDJ1tcL7NtJy1izoKoobwCL7Ea2anftdd4QQ6CZ94ZtpmAggvowHwrykm96cp3yHbMFnwz2LNc7ZnyNbvj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j3HaraNoDULEGJotXDEcbBV1JSAkLQ1K9SzguBPCsDqGf961jKAyDBr9xAnUvPyycCJAm7hd4wmR7Y6oXqjdgFJ",
  "key1": "5hKAJfdtxrQ5DGqG3jx1pC6JRFhpxNdNBrRGJtDKxYiVrWAEXn5SF73frJjydwZRPcaeA4aJYfGoLrdgznDGqVbm",
  "key2": "35kqBK4gB9pxX4USA7fq7WjcotQwDpi8dFWvjH6dnnw4VGJdW24gK85cSq1Bc9pAAMaeT8oiJ9wb4tJAhXY92pwN",
  "key3": "4JFjcg7HDnFCfm4PURBPeY1FFRVvCMxRSkKJkUnUP7yiyAY17CpMfStq1Yn6AhdutVuqQHQ2eL6Riayho7EUJFoG",
  "key4": "65qguvr8EiLwPfDSXE8ckUgTWjjeoCMfjkmkss3La2JNk2cVZJ8e4zwmFr7hLJm1tog8PtD3vF9bEJGQyhpTSpei",
  "key5": "42d44Eoj33Zxi1mB1RgYjEfrHLuMfSdNswtAjVJFgpLpfft1pB4P3eR1APepPxSr7nxEYV9VcVVhcmwEyBSsFq6j",
  "key6": "379fkht6JrfGDxT4R1NYYzAXsp5FLvVyx7t4J1B7yzfBEcf58jxziTPkZeXmXw33Wgv6qQUa2Z8tjNPcGvk4GhXU",
  "key7": "FdBmqtpfaoraZs1MBTVWTAaov36NNTphAJvDrnUSPhZpYvYCcYBgUD4H5L1ped7WzMsNaX7NeNWEF5bPWct2toN",
  "key8": "27vB8wEVdxuPZMsLfAvxUwodK8EfGmfxeBsobDqtJAcRxZjKYz3eS5Sy8bqpWKptuAJYFNkrBwz2JmbBddpkXvM9",
  "key9": "3GYQDjudpzmcdLP1TnFNPSZK1TsPBnYc9uw2mK4SSE1wjKh9zg7dxwuKp74J4NbtwQxNdModcVzMChdr4Q9gyaZ2",
  "key10": "37x1mLaJQCLJH2AbFFDnXmyJrc4XqdiWfxfw6578bG48DmWbwUgPSKTTXN4pssYXnQL7waNFRDUTLBkYnRmmKhzk",
  "key11": "4Dy7UH3VePVBGGopxikZ9UevdG1d2ik2FgozhJUJZQsp8ZVh1uyg6t5npGEMcTqXCPzAkRXC2gfGXMG2dctMj9j7",
  "key12": "2nYgH1QdiUMACGYB3u54S8nqr8RxHFwzUnj7Qq59bHxMNULRabD24Xvxs7gjtbAgB8RFqF3ZRV6SbHcRwuf2opZ7",
  "key13": "U6DegDYxr9Pzssd1QRTHkusubfLeVMcFaG1rgPJR2iBPiUuZegHArCzJJgwf3AnngFTWv3UACATR1rhsC5rCHbF",
  "key14": "5NPYwu2GjhBYAsMx9NjVTcudhNmhgG9rtnw27EVUDaaJEhxpnK6SxKBBTMcvgznuiNHubwFSpgPVdky6TSKn1sK1",
  "key15": "F2Hozt5B2RACCUhS8H6aV9T3UtEqsgSaewj481NA5vBJfCzrPTcCqg3prc7CeqxFt7Cw13ftmWjpdcR8LQJxEmf",
  "key16": "3mwfZb9wWnosRtVdvEFukd5aK4oVGbd9L6JU3XLZSyx1gCfXpgsHhWxiwwQ31QqmCQbWPAraH8rG5bS1Appo2sKn",
  "key17": "4fHTBsPQ9HLKNRVkDWPHx3576ZtTqqRuKzUNTQwr4R9UgT1eAHWNGWLrHWThXWpWUgntQiWTM67Yukn7buxsGUL8",
  "key18": "uCUwhBjoJXcRaZevFKonxD2cZNwRfrmX8rnRM6W2sdk53gtxAedDvWCAQpuY3wDtpb7gycaFfUfjECGbDLxygyf",
  "key19": "3mYqK3x6tAcL2hQrWUkPHCiPKJD7QnezLjTNU8SsodHmF21VSTiTyDq64okvWJPay9i2UAvkgqdn9oGFZ6kTwT1D",
  "key20": "5aMehyvxy66UQ9QjYXNjskhLaLDFgEjjYGnXMLFM7z1u8WCvo3F8Rqrqt3cxXf4JKcxUZdDDQt7wrnobCoEXfuCm",
  "key21": "3GBWENUFBHD2Z6nmGd6Cw3AAUdXY8bz4YTrw1Ef2ener12hvQ85ZuFjSmYcQSdjhsRGvMNef8UkVTK8fRD7e2qRK",
  "key22": "ivfr9Dm8EYsAsj6rfULVyYLCVjYYiHaHEEHW316USa8SEaiBDyQ8QKU5u9i48tKCRiEaxN4FqAQ157dfm6ViJM1",
  "key23": "4XFHTmst5tyJZUfVqPyaK43ryVLvXJWGLpkyHA9BSwZG8FGShdTKmPBk4H966hLdUe2tTSRqWbPYY6FkyngQ2Pdd",
  "key24": "54ygUBjRMraThBwps4rP3iS4CvPVh2woWrzyK4sxCp2k7yetfb1DsDeqMY3pHUVb7cXFNonjfozLiEM5sWNG9fcZ",
  "key25": "4TBZi1npD3vnAUuaHRdBMaeXzNEptdHiG2nqpn7vKcgYc5KjzCoeKM4zsVJCgGj5TCxouToSTfC2ZAbF6Fnhwswt",
  "key26": "48j2hP3rVtjqrtRsdAM8STwERNF3NNXcs3sifjnBnDL1mHS9XfGfyCBeHXf92PjFvwizYaCBNt5RkzWzS38tKobE",
  "key27": "5SEK4A3k5egCrisRoHLy9XXmTrGjxZWoydVJgMFUdjQuzEF3JDvF2BEsqq5yLDdk5nqgK8whfAPYEMGFrNtXojSG",
  "key28": "59qYcZYUBamSWKF1RMLhyBYy6vPF1Hk5VPtXnhL8EJf5eCAndCpH5KJfwdGPWasWHp6j1EvaYY7JReUJuvwphyMJ",
  "key29": "5JngSpT8RBrrGuf1G5aa43x5sjEeNq8GbRDTvN1TapLnqEWWph4R76Lq9uQZtS1ZC5YkEtdDkjKveP3MmeGJmYZZ",
  "key30": "5GzAzHD1zMXzhgG6mW6xtRsZ2LowdfV2mdu9EoqoaN2cMKnibT3fRie8ULdJe7YWthqCp7nMgCRmRqxvMBTyH3CJ",
  "key31": "3Az43YZR129WxYQirGKF4cEMv5XUeT3hic1LSDPPABEDNba8EoLfoKUZLYxqFXDKMe2KVNCDwdmqUwUXadbFAstm",
  "key32": "4y7YvRmwvQSsbsNWA66aisFGGkQ7EY4aAEi3M3tw5n6cs6XW27bQBhkNeV4irHeAZZhzHKkdyb7oKuSE8HRuhEB9",
  "key33": "ArVc9WGGTAx7ibXUXXtWa9XKBbFFe6b1a2cjKwLcBirDzCL6U2snewfza8eY9SqJi4NZt93h3akvVbxYMxDFJ5y",
  "key34": "4MC4cmBtnAMCTTCNXGQxfL9K4NAHo5m1PE1PqUwEeizKyEvWQ6ioBPif1jeadyTp34PGkswmzVzSig2dK8D39GBe",
  "key35": "3TuHnZbBqyfCZWnNrrNEt3JLZoYeJJmHNF48Hs8W2NagDVNUvyyCjM1hkRL6tk3QXB7cdHR2KztrSjThsrVcnTVX",
  "key36": "5ZG4cCZtNwqz4a2XcybdRaz9XC45csys97ZSEvVqfXbdeDn7piDGvjehzjHDYLVx89wWQ9quMzi8sxFPDd1qPy6C",
  "key37": "2V7NRMjT3q5skhkGvesjZ2Romu8NiMQsrefGtPdsCBRc9CJPjbD1nTXM55Rr3sh55EsXAvjKYAMz2nNetZkKzkYF",
  "key38": "36Y3qRvj4yWsCx1VMHBE85jdMtwMLnbrLp3dWvyRRqXZn3ZXLSjuGs1szZohrki5FoZaac2L7mofxEDcqgzq8ESf"
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
