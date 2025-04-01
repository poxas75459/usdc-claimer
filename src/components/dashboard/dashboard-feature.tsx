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
    "4aMikGArtZ7jdfngpxBFQuCBNokK8o4xwR1FSJPpiH6tJ9Kj5J64BdcNqUzsGZtxKvBW4F7qsXTRYJ5ruXxACvMF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mHbmKzCVgJfN7qEqEChXTVXhWac53668LY7jYpnfRY7m7sjafLbv4bkpuHiZJuSgFFFDaHtVHgFuWrmCxr5r6Fh",
  "key1": "2tKwqhqFVTNmPEcwwrtgRTW6PtAcGfRsQoa8cS2TDAF9qrwNwGhe569tAhY8BG9uufaiC4AgihA8QetEtFg8uLiy",
  "key2": "qhDMXrpjgR5mNt8D6dAQfccaLvESDqgcnNDk7AmWCJSvhSkXnd9bYFX6JjguDMSfmX1EFpxfhS9K192iPhP8goc",
  "key3": "2oYJjksyJGTuRTgZvmhnEr1iRYHaVd1FS82xaSknGsrdX9n5zdQpxpgHMCAYJSK1DkHuEhcxk4jnfdDDgvvq9gkp",
  "key4": "5mc87szKtSY4YGUBDFgn3MMXp8HSL1twqrSGvfdfqwJKRreCKa3dVcTm8gXs9erRZoRHAQ2Sg8DLkJrnBLTawhVA",
  "key5": "5teN53aNaEPXo4ncJb7gzg8yj1ocW67R4ztoAeuRA4Tfr5rH8Z8xgZZEiQQeEGLbL6SGdmJy49wfBMG2sioV3t4S",
  "key6": "4sCvMs8dbzzR8fKQez8ba6LsZSU2S2475n75chi7Ygw6SyBQTinJbsMvngD7aphTwfFwk4MKJSArVrEQTCQY87uu",
  "key7": "5tMCVF8ZUdjy1ao1HSZirFPattTxVRCYwkY1j8BFDvSfrjREc2GJ1X426uDXFcsAnCyNmRYH4dHUoE7kvM4ZRVjQ",
  "key8": "4GQkBMqqkTVN9SPzXixcsnMfJ4VsacLBWuWcHi6ZxPzDpEAJZ9RuA3DRs3EdshDRq1sJg57ZqEpVskurUwuCnmXS",
  "key9": "oC1WL4tWcL1n4Cx4oK8s1gZ9Sn53znDWnBXpYp8mqmkoMNUpoaqV96AYc3oCvKWDLAngcMTfCiRPmcZ6iofYBfD",
  "key10": "5yX9YXzkgfuauHFCetNb381FvVQvtDmSTqXt1dzJEoNvwN2VperX7qpPibkj3h7RgUjwmED5Ncs7JgeH2vTn18SE",
  "key11": "4LB6j3WY9BxbDnbpSFazRNErThVVqq5zGJThQKX2mYRQXpGUxuPDLDfzLfi5nF3Z3jrGbq7PL1ZXGbL2X3rxSFgY",
  "key12": "3Qvu5Gn7aqkjnA6YgkNuFUijKYrgdm598mEWbM8KELLyr3qLvnHFd6bSZW2v5iexwcnovaEc8iEdP8bsRe61PFCK",
  "key13": "5uMpe1waXxQDdWkdwogVZFnCn3pV7toAaGLTh8x6XLPMgQAFFYKnTuwPGHVQUfEEDzdkwuohbodvSN4NRaaHmBTv",
  "key14": "Ft92QDvexdfiVY1cmkjBixVGfvkoPhMeJuUJ8PtgpUJevWxjrdPUofumrRqNTAa8fVFbenqJrHWLWUELhaGWpyT",
  "key15": "4P459oYB7vFnBZJX8Me4KSbZWQ4UttQPWjGmai9pF2AbbzW8R2cW4ZyKQCgB15YrmLTAnCeFD3siuRsiJK3zAyiB",
  "key16": "3ioNb47PazSzZHXzB9nxQstySjBQ18QNn6hzNcEmm1XTuoGG9dB9zz7KmPXtSUENXcDPe6qX4Jqk2KAcbb3Pyfyd",
  "key17": "29sdmY7oy2YgKQNHU5xTcFDPbi5c82N6f17tWZ73heAEwdSV5HUgBwKTAAKUQhTMcjRjnHN9a5gd85S84yCnbqqk",
  "key18": "3q3eJCwokDPvSo5BjfXMYCYiu6uVXwKyuaoNWRfddaKntyMSTYPMAbDkY9XybohPwP33JGeQodoWgatsgkXDeizv",
  "key19": "4HtTB1BkNqkBJkJrdPgo4st3gn1hJWeNi25j5crpJ4c1KMCywsBueYHU8VckBQ3ikewyZU1dtoCcrkDVVgBhQ34p",
  "key20": "1tw1A1yJ1ZtJmEiTZYe8bBscxMB7Hc2pK3brDDbH1qrU3ymPXCsGnQwkSvirEDMEVxrpL31iqPvwTP8iP6Hra5",
  "key21": "3hF3ixSGPa53pfn2Sjc8e23cWD973GTCdYvMGRbXQYE1ohyBFv8cxUxzAae7rcfNFyhtxLu4KKxTXKzjjamihsQ",
  "key22": "2stWd2T9GgkoLVFGFKhmX83XiTuosirtA799dMMzgdX2hzkhhRrDJw6Fbj7oFTEjGHXWBWC49ECBPfqkYYFi2ziR",
  "key23": "KhShMnkbA8sVQe23skyAjz3u1ySg63xKL6EWv1RPmHiDjxuQ2xSf7GZiBx439pQm5s66fDzhCkbQQzChAD8QSb8",
  "key24": "3GYoUseYWRPhx326je3Hn22mTn1gcV7eiaHQ6zP2vGP1u8ydikpYWDq8T7BKCFH9FsKaGd4LCx71kowxCLiEBTKE",
  "key25": "2S5fwp7hWjXt2gLJBdkNW5cxzUkXE2f5qj2p3cu4Urw11ZX9rZMAUQQW4NaXAtSFmQLextUCDSmxLD6eEzVv3UhY",
  "key26": "4i82PdUuF3v88CPeMJKQqvLHUVbv7zAJkTyiioQaiuoh3yrwf1t4Yb5wTzbsiyjn3bTj4aKiV5XvJ6Ud5QavvFTS",
  "key27": "Yf32zVN1CFVSLeGpK6f7uqca7L5cUXdN4inKFWbL1VZ3XSDgbCP12TBq7KHeZ7J2HPSD6rbQB7pn6nDuygnnKS7",
  "key28": "3QPkbhowTZGuVP6ZsFzm65eDoZ5woezcG7SVQRePwQ1swkmmADpRqMUdUMjnJRVKksuBqMEtSALo5VnmPEGQqXUf",
  "key29": "5aV7UmMwTYAyxfYN6xVSE8bFhSsqMkqGqpyUbzPVVfDeWL7NsWMwnd45xnqPD5s6pfdwEfzkqhVExavVimfJYVFB",
  "key30": "47gNcVFVj95FLFoABKbncm4mA7nPhEjdXi6dsoigFLMHkp3ZcmSFfyniKtZncnUsFt8jycZriXjiBLbT9PJtGZnA",
  "key31": "4Jsmq4bnSbuDWjTB6E32JE3LQNQLAdjip1WcPyCYG3bbLNPB2Turc9TsHRF6JSMroCeHxPFQjLSgGHP2fsdVvn73",
  "key32": "2ePnZeSmdvMCYK31gny2xGYGXTBndPEeUHNQfGQZfHTusxbUk5bwHiPmD7UpK1VnyxxcmTFPnZaP7ureRVNwox9u",
  "key33": "45Jvvx2Rdg1hzYyfUgXoR59rruAX7bnR5jve9zwaCM4dwd7nzJC47BaHLKEeLjAVcXyyMub3j8NiPbbNw9i6qWZc",
  "key34": "4t1S4V19rErAKz7Qf4kT2w9kZ87KPwTWa4k7AdsacsmNFEqhzdTFQY8cYvL8dyJCs5jYX2csCcbKxRpWhTZkyWSo",
  "key35": "2gsD8mLxYPGCQprh951gvRPeNTQyK9iLSYwc2WDSi7zt2xx2jBC1ZsvvTi1dSjJTRs5UjbDVBzPHk4xYE2mhnwxj",
  "key36": "LPdoNcniWtjZkF8PCAJ7gHNWvuABVwNR34349WNwGnstJXwn2qkVA8hoQuEP2AMaPcxUJbVrzuGLFHCaZ6q1o2B",
  "key37": "4zn6VYBjgykWubW54hNiwmHSCEB2jHyjAmV14PKxTSGPrDe6RUpSKWEo6wR6z8KV7JVDVhUY2qTPKYwrQXae1sz1",
  "key38": "5jhzXTinSdonw6eHAMinbmKwo9QC3zsQBCHBnW3FPmeYFyBwKbLLT2dptbGRAx6mVgBVojpGM77YM4apy99VCBdy",
  "key39": "4r2PDvP938ix8xwiFMge1khTDzwxC5dpyWpMPww9GGApANx1TPNfN7L4QxNugnAVSLF9RCNS9Fabwqf9mW6unPih",
  "key40": "5KZLsYkeLWLrFR8XARtTGKGPNcc29Ha2Z6Gj28hyxFACxGThnQ2MvdVmc7dzxap8PhFbSoytX7GG3hn4pVuzNfn4",
  "key41": "2LJLMdTHUSxtEQvU5H7sGhtf8yHGUeBMLzwv9WMfweTmD6X72GBQMqsJXjrTQWGQMVVc5ve4TsssYCqoy3RcfQ1H",
  "key42": "5e6EPJ4rfhK3uFWx42CKWZ9pjncpFPpgpXzDNDV8uZZT2dkpDSMMRYSCDEREdpLqWZUFwKWgfdCaKUVeCwx2CAnv",
  "key43": "2wHbJc2yWNkiUoHJJMEo37NDitZenH5R6LVcPtXd8gxneSZ6kyZ8TPmNXHHnXKp4gr523eAx4iKNpGX8pvTxHgbm"
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
