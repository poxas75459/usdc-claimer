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
    "242bMBMhEqB7EAuskEdzRAbagYphyJre4TvNC5HaVQNup6raQs3VvMAELoHKxrf78wMpegyuFVuyPxPz5xBwmurU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SpY976St348vjKyTvrC9yp2Y9254ccutyDs3Z3xTyPWjHrJAobtSHLS4Vpug8YRCWykgD1WGTDN4qwLwgQx82H8",
  "key1": "3Gz7TEZifcBBFFhefuyeLxu8je9CfhLBPWoZUKW9bLV6HE4oVnEGMWGfLQ226tc265FmXhmaLG8FaAbWhyyN6xYV",
  "key2": "25wXfoe3NyLu1fiH6jc7zKhDaMrPNJmsQkWgqnjy8HK7ym9hzXPiPvh7hrpKAdQZ5cAx1JxQRrCCHJjXokV1j8fi",
  "key3": "4QwMoADtjGoETkSSiT2XVWWjXpHRfx52FZtU5bjD8zzfWT6oaea94YtLkRtjpXzUxHPwxKpbdzoDQVCP2xtgtMV1",
  "key4": "63oMvrKv3CQZ8sdpn1tDzATP1ez22SpHjy2Zd3qZsgTHvp8H9QEXMwqdoNmTcYHKZVFKHhpjKYiyHkdRwSdSaUCo",
  "key5": "nCbXoEFJ8R86Ucnpa4bRizs6WVLQ6aCVFEn51EaLM2j2Ummq7r5wZ2ZoWifJ7gziJwvqw624C5ZTgYkN2DUobTK",
  "key6": "3JYHGX6nYQ48g35xgLHjT6FZXfaheMpDiAcVNhA7StAUfKFWPzrwtbrwgYy4ywZ4fEWJp3cH8hZWjSyuCPj4mf8A",
  "key7": "5w4C5veCNVb9BLKnvK2yeKjiaFt6RVxrWLD9unfogKdcA9eR16Ns5g4urr7qAKQ49wZJUrezFBAe1o59myUrgNRq",
  "key8": "zDed6iJSE89c8rzGohepR6rqautd7pfnKz8d9UgB3D3upxnjhXWNgGVq9ZZT5UvHWZuoL5TsCYRLfWdvUihjWYb",
  "key9": "2q4jhFZPpD3TC59wBfXGSjtYsHDsdihHshau4jC43F8y2gGRFj5gseTSvWrX5cbQvbVvYmsTrX2hMfHcQgUpWQ9F",
  "key10": "3PwP3EdeB1KtAuG3kLDJdtbDDepoT34JNBVggikEZ3ieFAg4sWRTtZt3sUUuQeg4DLDaQTXC2LPu2KoY1BYJPh5k",
  "key11": "5vi8xkmJL8yoY8GR8GibTMXdDudqTVvJWbMq6k6HudsK3gVhCW1hZrtj7EieFuqbHFfLmpYUmiqdfC2tAaT4x1mB",
  "key12": "48LqUUh9Ygnsn38bJxnLjHtBpQonrAHfv8cW64jT1ZnJiebSXfcg3KhVRhfxLZQpJDMNhU42ePmjKcxib3Lzni4v",
  "key13": "54TutuxWvv86yGFk19ZNog3bZY9sXbFpEiNTP1fn5ZmaNn9fYnyqqtS1U2LvHKPcj2V64MRtXfqu7RKaTFdvz1q7",
  "key14": "3e2HTUXovYUW1jnfiLiJjjA8vfb35HTKG1MVbf2qzJNZRTqypGhCENeXabfMAwq79g26w7purLh76qSysBFwkhEC",
  "key15": "4yGGp3rme8NwWcufsMgtqk4J23EUoWJwbMAXyth4DCoyVoxWQwk4Fh8ySMZ36npfcXSVRhv45b5WYye4z2Zf54UM",
  "key16": "4oShHVmGMP7e818GTLgqeL3wvoLTXP4HMkCjG21nWUooiutRWrmN31t96Qb51c3kVjMyYGLAuiFS14JqWpzLNAW3",
  "key17": "2SPcWFG25wLgJaBuy72WYd8Gbgi6Px1ZBg6FasvwjqFLhFrZGEJvedMDT3BnW9wCRLAGRL2JweF2XhoMZZXAuKAs",
  "key18": "39PT7kuNNwUUV7yuJVyu2maLfLuJ8RNpHkcpxPnWcY422RF6hwvAtpH5pcbSYycfuUHgcAHkJiCv1owTRrgqLbGT",
  "key19": "te3GhTRArPULHFvjuDxLFzyMcD7KEwDLdRkDNvuTC4M9PQHeJLYrQz6y9ShP95iX9Go7fgrZyNu1V5giTtZrD66",
  "key20": "36by767KwT9WY4pnRz1UBjFpvExSM5UHBbjUaY7hhiCv1edeZCB36FmX8RGbGHiaUYhpFTJYBXCyfGURtBce6kcJ",
  "key21": "5G3eiTJ4aWHVaGa7xgCHR9uBakMqpk2X1yHvJqzoRbZod3hH8VBzkk4NT7c7EqjF9Kto3vgagj4h4i4gAraXSFNK",
  "key22": "2FTS3RczmzC1E76SQNdq5fHa2929RT1zwoEsreCUfzzomaweDXsLBacvana1bmMD9EJ8sHi6WXZXLrD1n55NaFK9",
  "key23": "4U9H1uv2sFYqXv5NRQHQjFh74bxWJgqs36TfUkEoSHa4jkAGpqPLuopCVgACeALPDHGSAmwpbvfTSnr7eLouw2UA",
  "key24": "2dALhUGwVmCjf4xz24H6csDXpaB77eFNHLoMC5UxN4bFG5yvqj8qicxgtqf38xJVLSy1v2Um69xfXwC8BhXkvWSB",
  "key25": "5qXRC9xDadruuGLtHw7twEd6RGYWieqmS2miJ87n5ciEH9womQeydMA4Pu2YE78vscU6Eqa25MZTsuhZfW6QLn1C",
  "key26": "3fdxmbeSa2u3KaCoctMZNPmizQ2oYhLxzQqx4BYG1ED1eLEoFxLW8Vq7VJTir35kWNW4fg8z5x2o9DCAHWdJJVUz",
  "key27": "2a9NV9rZSaMpf8VbcBz727u4RUnEJZHxFDtkZQ3HgpXAp8tAz338eRKC87eNN4faubZRdTLKyqYYU9Lj2ZEKNbD3",
  "key28": "2bpqALDdZMZwhpp84LXLmL7apCgWT7zFHuQNiH4hPxiqWhhWqKtDdcX4V7HmkWsYWi2NZjTPuyhoedHYwv4i5Zth",
  "key29": "nTUiGcicMyJJvRVzRFiGqs6zcqi8FiWPaba5ouRqgRkzLuE9LaAZC42DXbQdBkkWhTgRG1xWjwENhoUg8Xx1eWx",
  "key30": "5cEX5ykbkEjre23wUPviPu48tbn2Fq1PuZcrShMiEEikAdPQSLDqEksuSEUbuC1WkhqPeAmrfS9ohK9QeDNmWFMJ",
  "key31": "3SbeD789KYRXdT1HCMCVV27LTXjUBxVLZDfQgByVAobDbWZJHobdaCKT8dSBsZfVMB7SXWn8E8rSknqRvsBM1KdH",
  "key32": "2ZoFvBHF8tfrRUvHzrWJLCJZipg3RrgbKzLZyowEU4nhF8VCsTuMp7r14tbot86H7zY5DHR13ZTXK24L7crD3tW5",
  "key33": "3EhWnXZS52PpGxRMUXrEvQ1qr3qtu2rDAhGikMKDi8RvRn2n7vGQjQDFJW9DhWU71cDQxfLTuM3c6HY4eVNWBmnU",
  "key34": "2jcJHppUABAgab9NRpLFBu2u2u84K3HqJZzoNsK3UoGixarJfKMzjq78cXhbv2FwMybU31qmxXj6vUS45LEBxC8",
  "key35": "5MbhuVYb5SKVsv5BQ6tqJV6cizBF4Ly6UokBciQiAkwLP3CJS8VMeEUKStpWoStx59KQMko5xamVrfZLtCrzpzDi",
  "key36": "4RosMTtzHMfBSkq15J6b1SqYQ3g4w7Rh2vJtpL2pwGzJbwjWvY3b21cyPMEFjfpusbpG66RMo49Tt5VCcLs6rpLr",
  "key37": "2d1R9HzmPSLhMNxHwHijwj3HA5EuBCJsCRetut9xBUEGmG5bT3i6DDQeYnwHMrFsmBnMnsHtSDmD6eGdJR2nvG67",
  "key38": "5pD33GoZ1ApUd6BcX6rTfSWgE573rEmV2mDvfBi2DrhDforRDKQ1m2Fo5S1EmZFx2UFrfb2akTjoJEFbvpquT1Lg",
  "key39": "5DbCsRTVewB5VgkHpup3tGD1tuZzX9UiwJyKFypnPbHxEa9FPqKCytQqQTTJVXwiiDSkGE6W8CXZ3mZMgBj4LhS7",
  "key40": "4hkSkpPhQP9htvv5LfWC1CnZezrf612QUxrpzVJ1GJNrYGRUaKKVgY4r3exmVhpD5c38va6LFkv3KXCuVveFk7XR",
  "key41": "3dJXmJ4gdU1cMmj8fK4KKHWkKPtgKbwFvPfaKVu13DqyoP4X2sr3ZgR47MocVj7XFwgJhwvhFiNg7D7WXJh2vgAx",
  "key42": "4MT4pj1FK48ixbo3LTmGENPAq24W8axcXwSRRnGsPjCS4SWNriGPHDPgxdcQrXAstZr8pVzsU6LWWGUS7KevK4HD",
  "key43": "3NZTjSPFhXmBFCdtHatXQVaT2mtvSoRhkYoaRdHesJ2m1aSGfin4Hs4hEHw4AVQPhujxhQFgzWwtATaozAbBL4ux",
  "key44": "2zeNsuNxbDC66pBcuZUKEfyr3tS6mVcmxt4dDQ3p4YYTjNsbSkwZowgjFf37583Cu4BbXL5nZsvzcryfUe1EwMNH",
  "key45": "61MfK8m2fDBnN2xQeijqCe9xt1frnzV4YURqoLNCjsbq1PFpDC1ScJkMcsky4ufNoVYV6j8SnJLHfno49amebykb",
  "key46": "5TpLZDPynb3VxZqPHjX7TWTQXvEK2a9ZeTe5XvN1L6BCphx2Z5ceDHqNNDRdK3ZMNqzekrXpKHS1RKF4QeoS4on8",
  "key47": "nmdnxXjc8Uq6diRdBTvJFnUNwHHFqEyBfhH6JmBPSPBv8HEWMoGA9cNQKMs1e43ERL66spR8jZmBF3p5XWGBhfY",
  "key48": "4QQx6t8WrCphQSQZkiUWwwVnjqrbSMkQTEBzmLUt3Kn99G6XkZ7cFeEjyMgXkAbJkNEABDhagpWHr1mnyhLXLTwB"
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
