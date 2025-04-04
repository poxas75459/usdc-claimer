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
    "2dG5W1XWbjsDmbYwUkP3V7cRh22cZ3Fd9rd4DpJqhTLzzBxyuwZ4LvgrM5MMt1DR86v5fDerMEesPqrkEQV5LxK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BFveUtfcyLWPBJK5HMxHme1pxgNyMiTYsekHq3icsRWcetubnpeArW18RgKFExfRQuFNYaaPzsxXDkN6AsYxmMs",
  "key1": "2ttzKZEN12Kfk3JAXuUcmfk5ZZgruELhFBW46W1iLtZmgG2DZ5w9wkkwjb2JDcV9VtHCJcoVbmwxp6CKmJ3vUkoK",
  "key2": "refdPT14EcywtPKrsmFGhcpU4G7n1u1vFxMEfsN2Fh3m2Zguqf45tpAnJsxJfJtVKHaewXo3TvRBFzNxSPgxJ4R",
  "key3": "3bhTaxA6SzUtfNAsKuKHkpoV1UsFPwgQLX8TKqxgQVjPXREAe97dULHrdadNvRSPG2H6ezHxYNBPwUMKJKAPCgAV",
  "key4": "5CYcYPPXhzXddbZnMaDMo9GpfF3dP9FUWNu1vBmBuXgp3ztVqiTV7ujVKwa7b5TVf2fsjvJfFBVGDB7eYPqeM8LH",
  "key5": "8ynMpKBnhyTtBFcfr7CUvHHPbm3EQ7LjuviRveTxgTJSmgsnnRkxGt4VhkvN1VSw3tw6YtWH5L9s42ZFEtQVWbf",
  "key6": "taXM3vc5hgyi7HxLEYQt9BqAFXjGtH4ucrkbSh89HUFYdMRNL7gfwU2FuTEQHDGedckTjCwawLPDCALv925w7QH",
  "key7": "424yZQVQMco3CWthwXMyh8oCiPSvQdatvP7rYCqosFzGhZg2U8x8JsS1X2q29LeYTkoszyGQ7pLHT9KsDZ8F4gZn",
  "key8": "2ktSQrcMGsXyb62US4evxwy9gfKJR8LzoxBS8Cu9E9fMxFVRWNATEofi4DxhyxLmthFMDkUQ8iSafV5xwjyDgHAr",
  "key9": "4tzWKbPoYDEEh8VYCH28nQ4xPyHYN2R9CKvoMWmJqC9b2JPcB4NiBULFBN67ynsLA2ExLg64WfcguvCq6RkwdQTf",
  "key10": "38S1GBmc9u6KB9WMboj8jZtLynmGNVJZtDaMxuhJjRwvh1GmxWVHvit6DFko4AUhBWTJcLsg5M379Ta5cJNtfDLb",
  "key11": "riudL7TYUcqPkQwarnBaDgbLzC3kF3p5HJEikWqcxKYfNed6cHrnApvpcs5nLGZWzymoFRBAFctgoPdS3LtaTAd",
  "key12": "26QHhs87BQH8AaVoV4mr58nfVSTefY6pR8GiZG3zwjXeeJ1FLktdxevcj6PMeFFMZ9J4u8TF1yWRwj353K7J2LuP",
  "key13": "3FY8DiPTG5ykuKLoLLs9Paz3GYiymfFBL4fmyeZCtszVSY5aQwbk7Et8i5gUvvaUGCJSWm1R7n5wsb3yKUr4eJRN",
  "key14": "3PnuNUmrnYpX25CvDTxT693VqKgmikyUkXpbCP27DXVX5ke6D5F3xbcNX9J7YM84KJg8GK8P18NusmGYQE8kpJeB",
  "key15": "2Z5rHTn9niv7Sr8sGR5Xtdy8jWoC4sBoC3BWqQnAqcMfWphRPxGM7kUp59wWcaMnyL6N6x1Prmxs53Dj5SHqRoF1",
  "key16": "4Hn32Z1aDtAfoaxaDzws3jATSHPLaaJDvpCRqi8QV1jTwMg2Baf1ADZyaJoXsJ22SuFLPRGFGgzWpe3X2MJWpYAT",
  "key17": "3sm1jUTVfNLqmNkTAYHwha8ecURnWZ9hev1LaUE7Jq2g7SpDttYtL99Uvj4oEAGCzNDy3Gd2rrVr5sRwees6EKb7",
  "key18": "51FgwfeiWxky5ry7BLnUPDYzvCS6P4Nh5jjMave9bLZDxNayYzo2D4RpZe5SojKh9iLnoBnLmsK9Vw8KKAdsxxNB",
  "key19": "2M6wMr2cHTciYTWtx2VazP4wKsyrM1Kk9RPs5W9iVpAJb1F6Vf1UJM8JbR1FYEbS78tjPNtYEGjXm5AWht4zj8ct",
  "key20": "36UYbcDxJqS3geC2TCVv7A9X9MGW5wtbvSGeK5y6Upokzm7SjW3cis2VPzjU3V3me4q4X2ap34Ro4quLvgjugaQ",
  "key21": "mBNXPd24F1T9NL32FL7CHf9t7YVgdbvPo9ftFjTYyKQDwG15NNMRzfWU1CbBZMzvELNocDBr2PftceVgKFVVCqJ",
  "key22": "5EQqugD31T8go1JVYhFiodB3QhTcMhjDRxD6rh6i6raesWRta51iDg2rSKvycmYzomHDKdasjyq8ebLtYjkaYJZ2",
  "key23": "2LBcSUFvA7PWDSyB8VhzpAo32Jv8wijMSLEMGGLEyCYF72L6sqANCWiH64bjdpHwPgJbkgyvu3KmXWjoSiHDNezp",
  "key24": "61h2aZR2k635Dv2g4HvpxVDiTZBvjmmoWZfZDGT6e82bkFfLZu3LgHW4MiZFXSJqaT252aP8ZYYGjAWuLpK9hFZ8",
  "key25": "5Tr6Deu6pXz9F1mZL19TfDLQn6PWgNzirjAby8CiXQXthd3ZFwNHk9aavNLzBNVNvySvag2XHG18kMdm3KizKXnh",
  "key26": "4K9vEhpSKniKwRAU7tB6greDF4q4Jv9PazhRv5bcHD4NoZMgmKXQ8rbo2NBdnBvyqWBj6vYbHwfkgMd3J33qfWy8",
  "key27": "2NdSmFPKKo1CgATMhUTd9HdDoCbqcyi16Dx5od8pkKRkZWB1PMj78ZjynNs9epAZzj12Z9rfec5uQtc547hSGCH3",
  "key28": "ZZToth7FpZxoTzZGWLsqDgYQdNG7n35tdurH2hbDK6Bk9NSkbWGeUh65QagG9MWRiNTEvF4a4mizs3qY7BRy6as",
  "key29": "3Tur5vfWT3P3JWFBxEqrokGHWp9dNQFCw89RDk8rNaFP3vhYHKMx7eCwYraDZJRN4pZsiLBWNwu9DNFhrttfcM8M",
  "key30": "nUF4ak8VfUB8HD8ytFX4wGSPRkYUtFGkTRjR11esm5WANP6oCdYUQNhzeftdfkwMPGG3mUiDFyANxDCFeRJkD6G",
  "key31": "9zL6f8jQ5Sw7fy724QMN7ZHLYEcUkAH8p4VjRCR4guYKoBXFFfwQXZ4rjFTHBkbVQNx5fRkK81iRMMWsicebcCe",
  "key32": "3iiWYfBmCpcSZdQJh8EASsr9Hz118ACUaz6vGVbETKfnBYhLc6mzzBofm8nPeaeZ8rknDPEDXcchuMbAnUZATy8g",
  "key33": "5mSB1AcGCbFX13MeEcEPbX1UnwQL3C1Qn9eFQqEJM7nUUZLMKsNEw1x9fsFQ833fVoKUtrj8CbWwnKe5EPREXUbV",
  "key34": "3qGe7APkwWifw4CHgrGBAXPTftCifZMzhMgGJFARy3ZoUh3t45BVoeLepB3MD8UeDcKQpM9YDETvSku5pE8oFLoD",
  "key35": "5F3RPadqeyPQ4X7QT5grSSL7NkbZKhngTFYEpucdNhREmYtHGiNPNpu8DJw2ZxSudK1wXbYKXigaFXSay4uKr8zA",
  "key36": "5CKPwm19eBHf3QhYQ4FkmhULYLpUSiAP61fE83yB3KciyzJE4igwHWQUTX4Upainhk5Gfie2d3oNTZvqqwnErhmt",
  "key37": "39EW7pAFbSNHjfimByngkj9msfTGTZT788zW18gBFEVetVPPrP7Ei4yJ6fZaE4p8jei4aMA3QorqU7YJMNqJemhh",
  "key38": "24bC4TzfKNcSeeYUbrnNCirccsEwQabPUrodWXDHoUKKyknkRPpvRx8xpaHVikdpnzshDuGECiYmQJW5gPrPmjm5",
  "key39": "HvVde3XK3BDLnLKM54P9M7qev6YJaGv2ppTM2ME2khcJSn1BAndHxz1gLdPxfvH7HX4VZ4t5FgRmmwXNhBTsZXy",
  "key40": "KGXKWc3KfATaEKJnHZZR3U4yfBXYQtZmLPwXz9bQJAYqGUmE7GmsZQeBwPUhMBbhfLj1Vp6maE6uoREt2aRgYpg",
  "key41": "3Bx1Uh7LCB8Ksvwo7hx6RhJRLpk5mBCqzefFZ1fq7nPoDQfZSYiGwVNGbAetg3xVHKuhrjn28YgdXW3PLgtysMLx",
  "key42": "5ivwgnf4XRr6h54AdHLaNzWP67bJzXyTqh4XUCWCYjt52EVKak5LRkaUrioLEj4AGAVeLVZUYxb8aPaLTCsCcUEY",
  "key43": "5o5ny8wX9D6AvJh6XaqfaTnGy9rzo1kvkSfB9xZbuoqLRp1bcrcPXiDuQqnzzzvEooWu8H7TC8cHbdBuDBFiVbxq",
  "key44": "3Aw2QG6tGxmxS5x9xSfhV81ZonoNAMmT3boWytLh9ifbZFJPoLWs6YdxWj89fKUefWPTxH1bz1QbLfQQUwwpGPog",
  "key45": "2Sk3VPgFLbtQRzJqkEBp7BDfmDYhmU6XYKyS8XKhpr49NSXs73kSrfCgJEaMgodGfQkCChf8HmAYViF4J3UeF4La",
  "key46": "3gWLXQCxzPLsdaAoUaGwfWTKLxHgmxqTCpmhFQQcQez2bS2Vip9UaKoUybCVdaJHAb2LPVydZ8YhHY6yVNdzDxfT"
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
