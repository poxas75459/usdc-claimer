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
    "yrw2G38NpWZmRsEwEpayMqeeWvzX4Rp51SdsdYmvtRTvkDSKjYRhyY5MwZN7uN4DxYKvXjHSs2EGdGihpfPbdaj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XtSooRN3MrtP2jC5CommSKCuLonkWBejYmYRo4o1AgNCzZ82JkRdCkrX7XvnkTQPTtZbamBLLBrng7Y37FNQyyd",
  "key1": "47zqE3dHTyMXh77kBTU5R8t5r3Cwq1FieQ5A7sAopAbWn8sjCjoZKPHgWewS3Hp9Py84LdFFboWBTyJYop9jssyY",
  "key2": "396bDVXutYfp8Kvi3NWc5ZDfDjkne9oXxbzyCr13yPMZGYJHJxFRShw2hcjT3C8PMYdm2tNo4pMHqYR79PJX7P3G",
  "key3": "p9fKqs34dgBGagUvBGYgLXaY5i2xyBKrZioCF7cweCfnhAsXERNRge6Rh7sHr65rkjDmz49ikmRBhH1MiPvPKs9",
  "key4": "2B3KZMFNVTDrevPEM1DwpT62QHAVCzoVwDzTMD6oGXqSbvJHznMgf4whnfaMmRQtpVkqfFTkwNTJA1aWDrHcTUto",
  "key5": "8EhNzvgqFiotGA1wEPzoTQNyshU26C1gZuWTu9ZJLN8vFzNGGT8x6GtTTS8C2mN93rnMpuGvJob3iDjjTfn1AsS",
  "key6": "5rGDkpobEroaj2yfcxCnzxKZ5WVGGEmEikJL6jSrsyxmCA7xXdm7gtMt1vzRyoydrFYYWD2aPQfnswuunsTJ6aaL",
  "key7": "61FMmpmorHehUGiuL3GXRvsxyQvpjHRsv7PicraAL6jmNH1CGkT8mNN1cu4DBWRWNvbW5iKKj88xorHKMS6muCco",
  "key8": "4T5iX5Lx1jBoZVLBSSsuV7EVY47TT16eBxNtC7fNbJ4dawVDb15JaaD58sezNFNAaFtUBqP18LvkuWR4QsxHBE87",
  "key9": "4zkmikPVNetivarY3JbDgGeCpo6uR3KboDKuYPYa8yF91uG54YvhSwnLMfZQ6bpw18omegkC5SX1DrrSw6s8fXau",
  "key10": "3rbG7A6zyDixaMZfyriVCpb55EiyrrfgmJ2qev3ZFK71ByxiUELa9t1EwX4XQLKyTD1WZTpwah8Wer7Ejucsz54A",
  "key11": "3UG7trS4e96sRQ8jpvgpTLtnBMmuwon5aBfqL8Pg44DVFY7W4LhJ231czMrqEqUMDHfwcejbtwdPs324AhTXX86L",
  "key12": "2iF47aHNN32tLJnKTZ9xZFx4kPWh7JwrPZLoEaABVsZpQuVKugkaozQygbYn6HqRrXPjTACuTZirGVMi9mGWXxKV",
  "key13": "5eQRKGHhKFbkpbhpLXWhEEEy4bZfcKieLn89yHYcxwbeHMoT4uLoionGejQHA6B2dmT1i3PFXttaMvw9S3DC4Ams",
  "key14": "5dqrxVPNDux6MgF6qyiMi7Vchc3VpUw7zK5MpCTuomvwiTngyFPYYRStj6ZyVDVN1iAubMMbHdvzbhpmw7Kn39DB",
  "key15": "4HW78p9ZLntUbmYw7mS2sujkNMmpaXjXX147NQqoWxRsfzYKRLQPGhmZ6ZqEHYMCpbjNhfYsveeuHozUMYiYA3qw",
  "key16": "4bauSGZ2v9FD11XuW27TKY7ba1E7XEQvbfBAQet4aVx78wEWECNaLB67kyLKSzjebuvGt1qnW96yH1Xkyu372aJF",
  "key17": "4L2aJUa1BaCX7sPbJfss1uy2bCuyn7x6A5dqYKMQHNSgXWGtsB4j1h1L2cfQPWan6GSd9QxK2jYMmALgj9N6N4vX",
  "key18": "2eQB2NnnvjBqtgnJkwXUv2wssio9KeBf9PvEq1rNFiRxfmpXz7k4ANwjzDDRDtWKpftPrWcaS6uRfZUtSgymo6ff",
  "key19": "5g363YAvVVn1wJzNiKEgB8Pe775Veti8nhB7dv92sBxMkFToLJ4ZVsd4KKHSJTCtrd1W5wrvayg29hxw9QEYoLvb",
  "key20": "3NgYLcsSZMTrAsXTgUjbugNYGtFQnctJrnKNfBCMtQTbXxaG3YSWPfGLnVSDGgxJw5RF4Hu5fWsFp68Uv6jQk8ph",
  "key21": "2Thjzroj3k37pRdj2fhL8kXGV1Zfv6tn8bHeGa9hft3pvGHyDtAEZ8Y8wnGQf15Mfe5EiYfuyA2v28oGz1vGJScp",
  "key22": "3gZ6qB7yKJPoZB74kgKiGoKqLe7ndvHAQEVSGZFHtoARWUoZZh26XCE6j4aBcezSX5Cjs32RTSQQVgppzMz3PVjT",
  "key23": "27GNuFvGTHdppFwjkm6WryEkCMbyeqrmy8p8ruq6veCuyZrjpK3bMuCxVD1pFyGTJVwnhvq3ziJhojmR51g5X9TV",
  "key24": "5rChQRJhqRKwcbixPpwWF6bM7Zacf89HCNcZueuQWkjyPrAnLi9KLtMCscFnaxzRXekyvcCxx8efNceb2GaL8dPD",
  "key25": "3xfnRo9SGviAKLRzWASqoF44ypfGJdrBNYdL8YWx3Wfu2sZVZYuLePSANVWEoDsZusxSf2bQpRTnE6doVpUDGvjJ",
  "key26": "g1EStgoFtnawds8HoDtdZFSzZzu6ZA7tykXXK74jC52utoJgkzkbQt3TgoYaiuoKtZZSzMKqDqkvrAFVibuwEVx",
  "key27": "4kXYKjw95k64BMuYU9rXFqPPTpJhTTThAtBmLnr1BHJMPPVK7grPjFpFTFjaFvvbTvnT5U24GTmUhKys39fnyYUj",
  "key28": "pho3DRvg7VtL2YsH9iBpVoq8hywxBBXry5GTiubqoez9nDRsf89nkhMcY6TKRB62A2MWob217kpNEcj9GkDEkP8",
  "key29": "4UQhLegEdktxKwoJa352Z69UyiK6SHj3WdqdMSeDRhJUf6E9o9NdPdZyrKMebFEy83wG2Ug93RH4ztEVV2RrAvJP",
  "key30": "q3NBE7oiMGuU6bXL6UfhTWwKiPDuTyafwtriXk221L96jokbv7Ks4kFbLR59DTw8NUiudDQFrj5VpzHrtRTh5gq",
  "key31": "oa8TCQhB2KSENkUM87FHpca8MPXWHZtCVQTG9ZkXWQkxRQgWfP2YQo8NwA1SdxNCgQkj4KRdy51KAKc2j6hCSb5",
  "key32": "4cU7KSyuV6GFk1J6KHXACBDv4c1bWaZ19HNjEoLjv4RcYX5RHjas68hZFZLPTfzBFS8TuK755Bb7FcLTnobVYRXu",
  "key33": "2jqquGNqiw3aS6MvEZKBBpekrT3z6X8o19cusLmZSkynteeEXRtn4eN6FovECJBCNS9D7DUBi7amgnCpqRjdoU4",
  "key34": "2C17fnhRgBjPkk9Yb4WD3Gd7chjF2A4dmbceRR7ZvkgBegvzs1wQnxbUS9kpUyTAKtMBMdenxVn5Y82wcZaBfXaf",
  "key35": "znELmqdBqAYYctAk2kSLcoQwyEUQHHJEiGiDkSP7fTVmGuyvDdSPhgm49cvBRdby2XQXJQ2nFNqVMrUaEDB4pZv",
  "key36": "5aAocoGwTSH934ciYAbVwJsvRvok71h4vp3REnpGzL7kc1t4PJxGKg1ebj1pfn6Gq3Ypogz13zMSFAB8cEg1k78N",
  "key37": "nLZBnDvAgJH7hbWTgxxpNoSTRXoehm4zFbzzGCr7Zn9vfUytcd6MAVAjXp1Ai1K2argehvkHgDP4spq2CQZL7N5",
  "key38": "2hddfjzVEBeUeJrTwBDMevhPHdAMMbTeSRzD6hfe6JBzBHqXRWDjjVPv1gjGjdFr4sPxWdtAkPEMQTYm6kFgcCfG",
  "key39": "2vJvPSJdueDHYdXtmAPiFAemi1uSkHNmZDVgp8DPVbAmrW9h3pmrg6Ymv4dNP7MC7c1WgeNM3j8genxLfxyo7mA9",
  "key40": "4X71jNgheCV93meVicLZm7sUdSSGGQ1Ezbqc7Np4wi5p82RB91PsJjQtV9huxJUK2w8UZkfszBzAHyLP3WqJqsy2",
  "key41": "2wRxUgLHP6QXUFhWDruqAzWQpUqTd9b7Rx93PtKT4Zs4NpT5k2KjDkE96iXg4tR11Mgtyrgkn9sBrk5yWejqYFgq",
  "key42": "pkbq6sXg43JPpybzdgBTggwhgNFYF1HLxjJUmGy4FdFKKqBAUQjPAvqtUH58ctkrFLq2WJyppdE9BnBcVnYyfRX",
  "key43": "5fEeQczBksHfRutCCHRMEDVXLrJrVergL7JtbM5o5gf2FsFVSVCfLqXbDYo15YM425Yo6BZhfx8ms4Zd3BVvpPMu",
  "key44": "3yBiRZjgxrk358WW4zhKEej4HWBDQQCKQvYQ4SHw2AKWGS7P11B6v5XZbHDFttGTTVWzinEAAu6cD7HLR9pLq8vA",
  "key45": "P9G79Sa93AbdXEerJMsyQNM5drkrowjqG6ehndgjior2RKx3AAaoEGq9vjEz2qmdQL9ejkQ4h3ij5UajUF73Hnh",
  "key46": "CbHdXpq9WF7DM3x7sHBN3MPvGunzNqkWppp5ny9TPPk4rSEDgweFJvrycCf3SpM8wXx1BiPjMoeVGQcbENibiVg"
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
