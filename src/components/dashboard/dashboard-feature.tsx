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
    "353cYyUzampDsScnKstxtc4J48rXWWbUefMC9qAszhq4ijFSFA7qgH2mGmttiMDE5awd2BzFLxbbE5XJfs1xskCk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Rg933ZqqE5p9Hc8hoqs6uytgZ9HDbZmEM9Dj43n64KQv7d3MaNjWdiGC52J5ZJv8AW97rgojvqmaLUrfmwRcqiG",
  "key1": "4BcKTTrxB9b2o7XtkdjigRMXiRdGZSWeuFE5GSNPttPqzHJecttT7WdWXk5MRpfNJZxmVueH8YkyYDgPPNZvr7Bz",
  "key2": "3ckxvAfoBSWEryUFQVaGaJWgqFxaXBB68NRAW2svaeLgGPMbhgUkp1WPqQk2pNisRCNzzr9gMvi2nJ23YMwtNL59",
  "key3": "Myk3xL9ZREXfxPjhddCP5jbQ8qwWYoaDPyRgLsGBWPLJfAPxm4BgoVFgJmEKCgyfw9XSMyLxkZ7NAbqCp7sSUQi",
  "key4": "2ytu6xetVBLYTW6CvdGF926YkinVb5MvTMqP6s7MWX2hiZaSHAfrbQBgcbq54XboWi8eUuJUbMyXasoweAr8jznY",
  "key5": "56V6R8yiJmPG5affVKYWA1rBpnYzcUviEUrmfWy1Rh5LCMmzwfj7ZD2sUpFzGvSnxRynoGpmvmSBVRgCZHzFjnAt",
  "key6": "4ko6jaDvtt7HEPJ87XeNbNK3e8TAnf4zY8RiuVupgLR4apZbGgPZH36Amath2sGra7C8yA2hi9ioQ6otXdWgtGo",
  "key7": "2bZGvD7y9xro1iHKQRvNLikWcxLgQHxT4Z6Wef3Bq9VTmwSdzo3WJ1AGi9TpqwJ9ipFsYitnnK5NJTupkp46NWmj",
  "key8": "vrPQCk63N2RiVjo7rBR5PAyLKcAY95kRXda7qtuciVuMFx3zMmiZPUb12osYrFfVhuaUTG4PsYRRaMaUiuXvpdG",
  "key9": "R2yvDcMfe2EQ3iZjNMrKVVeLrxsH1tUbV9mo2qGGrQhVkmRhkQBs6DkGHrkDMEdzT2DS8DvkxLqK79NDVS4gxCK",
  "key10": "3XneRQnMRnyeyeYN6rLC696SDUJXKAb6D9waaqFu2X3hVfgjbodyB9kHwPiDrqM54E11mGHHGCnysT9n7Ay6qFh3",
  "key11": "2A9ApBjRY4vpF151Ke9iKe3UA6gdy4V4f9toKMFEdzjFD3mGDubYcmGwf3EEJpC1ZUuS14wyWBPGCUBV4rPRxSMH",
  "key12": "npwmddBFy1E5mZXDh9U6LYDeSVQSkWPWjbfbroLYj118M8NeEVKoJnb3HxwrtD72y64ej6Z81hyusXwQmErBtCL",
  "key13": "8t77BYn2B9Jy5h3SgeSYhBLGWGb1nZRooRQWgHK4LYPTq5E57koC3tmipmEdfW3r8tnhZNCBvKSw6qktuqGeiRm",
  "key14": "4TPbqFjt1S96gRcZQjC4QTFpBYUeV3u4o7ktjJGHGyJkN5tdt2EqSKkKLVDtpDMZDxwofvhfVoXZ73M5pghquwzR",
  "key15": "u68FE3DB4AgM1umbuc9V8HYPYm4FdrJvc8vXqjvbpxSYQb14pZA5Ue8JHcpqQa1Ntu4CVr1LK3j3zya3U58h3La",
  "key16": "3JkVBaB65LR6edmUvtFSWvK5qjkdk9Y2c8cPjR3dBVfmxb7RcUy9i5Jbz15ieNewB5KtqPY7TS7UnHDeX6Y47oen",
  "key17": "5nSTvDgmtJA2cSpyvb4mRnYJVSd6wdxQH4c3ny27j5XSSupctzqt1aAeTP1RMsRAV3H7DLBWUyUkbG8efGBLWoWW",
  "key18": "3CS9qzNbig48sEkQv7W7nAu5iscU6c9Rakpe9VvUdGhoQfuRAuHPtr5tBaDD31B55Ww6m6piFz6QZLGkJBMMWHeN",
  "key19": "47zqaYKGQtVzQ9VWLX2hVR7TLD6Vu8FfQRtNoStKv6weT4HyH94o16N5PGGWV6tYCYEyjnGLciTaB5hkf16Cwqcu",
  "key20": "3VxkVMhjVsch5GtkUR4ubJimvPUtuNuSZ2m6s5fT946vUmzkoDKSfBz4mFvg3AZCt1QLY3RiXVtZiYhapV3c6XaQ",
  "key21": "3Gcfau6da8S4xLv5qQ2jc5uqrwXYBSpc1QQgf87iGuunuD5MWBTYmvqcugLWfzvEMarWeKbThSrSZ1XEBhDd3K1k",
  "key22": "4fHeSJtnNnSHBf89W8mWsfq4WcPRfkskSyixN2N7V2YmPtRZ2SJtYmYMP5xFANj5rm1XTyUdmyiMzR8M9iKTCpdN",
  "key23": "2pHC3MXnZAZd6xJw6Qqk1QJLaGnmAeFm2hSYMJLf6G9WcL2xfLRDWmtvtGfRujaYjoQKDYjJHD3vF6A9NUuDXT2Y",
  "key24": "Kmw6ZJGMY5i3p6qWyQe6ojZgJiDPFm6CoBhnAxiv5wpLjTP9sVmiBYD8FoyzY1bNbiWLjC1k9ZUq5TevBgCdZXK",
  "key25": "VfgT4gQqKkstbtA7Fjh1gANvwWto8pjR1L8heXtcY7H9MERkWYnTonFeKtJaosToAtWidKNiQCs3mmCkiah4KPh",
  "key26": "2dzeF7NQq2QbGpXAFhtaPRgp3tYUT8uxeMpdUadZn3aDeSNDHdhNeYXRHTx6khkqueT27jxVsKNYJUPQNCqSqsZc",
  "key27": "kTp8WRLV6hSSuJiDfg9Ln8tuGXB8LacJko4SFqMmr51ZcopMTd21gL6PrgY9b3h3peHj9cyS2zbrBB8ZmyLVUyg",
  "key28": "3d1CtNgokgUXWXPQcYv1VTKB5azg9Z56THCjzVBBWkFQxgA2Wu7PgLw8wm7rmnLqdHGY3Q76xxuaXCBjge8M4AJ3",
  "key29": "obuLJiXUd83jRpzPq3fKv3JsjYjkuMMeFTja9GLqAN9M4QCpDEVyNHPGkMTnGraPDPRPcq377sGWT2urqxsEvws",
  "key30": "5v4iDqNaDEBas37WiaFHPStPfzJCiuqhFtFkMuoxFpN6CeKTBK5Pd9b1T34cdtJe69AJMoGP3hAF3Mks1UgLkZHq",
  "key31": "5ZxJ6D8BFkBdF9oACBGBqqu337PcRdGrYJbARDD81yHjEDDxQ92GX2vpwAW61srjJXNBW4mKQ6kETnKyGwuCTtKB",
  "key32": "2APnXdcQWctweuKEnM9phjWkJAxXBeXXRP6nuEWpedQTvhS63orqiyPTiLsFRfj1eHnh4xB5Y91ZTg3XauRCzdd9",
  "key33": "aJqE3dy8dCJ7M5SDoXped7tPRFxESZrfAv5hGuNxMqyGxKQvYFP788KV4eQ9A6TYtnFJQ77S67ViKnwBZXvFonW",
  "key34": "3VoDM1oqihXfUkWx1isfSZiBrNUdns7Q2knXrNyBobVWGyu61t2ZxSqGSKowAh3C9cUxvJiG2vCqk9aFtp4ZknyV",
  "key35": "5D2jkyGgz5XaxwwAFx2h9MbZoNBi1QeQ34GNvog8HaUEM7PEWNWfUsfMEuZgnXYiLZwcskuC5EgdyTUxDikBx6nA",
  "key36": "5d8AQiKuQjpsfwmSJNB2vbRvbg3tj4XEyaH6FBgZAS7aYbyQ5YX4YnvGLqQrFBf14147QWuHZgjGVhGS28MWZYMp",
  "key37": "5zycU63rLx1biq7zmt6SghuKgt5qnjzoZF7LCfGSYUgbFxeAJ3U9XpT2y5HfMvsieaN8MKnYjwfpw8Q1XTHE8FyL",
  "key38": "2L3FFaouhoap6bU4TXodPajnQjR23x1wwi7uUPNysHMtH2YwdMHNNP7jAM4KHue9sALdkGm3kg83y9jhbZjnAmtS",
  "key39": "3yP3X6ihtMsqmpYRnkRqPRVndvgbKYE25SUu232QJ9vMUG1haeeybP9X3UA99AaZepcstKSaftujC6R8yXnXQ4Pm",
  "key40": "27v9BrxQbGCTyVvrmNR3wnitch6J6mfgirw7e8rFVMcDpxf3HpA3kjs2tenjq32tvmp9Q9HqTsh6ZvJzKA2BBrt4",
  "key41": "5RUS9WobD7bDgUDgCD7DTGEQMTEDZKbEshQXcqVc5ipC4JRcH2bNpYKcN4ahPgpFMFYqCSZPKwPFRbb9RidmSWTh",
  "key42": "58opkvNYG32bzFw2NGJEz1M1RvyFESMpokonSXukFrDkgEWVS1XVuM1FoSUG8EWtew5kT7nupEfbC4gKwN1Thdaz",
  "key43": "5vAmjPsRFn9WecFmxrG8sBGGV8evXgVe83kUcS8bHhXTzorCxZAekdYPyyvstZZhuRvQk1D7ka9o8s8UKznz1kPz",
  "key44": "3JEebaU2VmiWSbYiq2LgcJgjHWq2zohr1PFkaadRTD7aR3cgjCthGK3QsWuv6BJNbTSgFDBpndZwsNhi61d7LkCs",
  "key45": "2UPTusWqtec8ACJdHw7JWCNHnXEp9mxPfaVTUmCAL78EcvzqbDvAyzUMJdPi1e7ji8AzT3s5Ddze5uVwuuAvJB1c",
  "key46": "4jKWWSKfgwEfFmiZScLvuv69YvKhQvQsNjtMuKzvihzbmPP1KaSPmg31VfVpvH8MMCQvjDNRgEvme2KxSsiXsrXL",
  "key47": "4TNRCUdNifm4KBCxu6HTKm9HSSYYtr7k6W8ginrvx9crdMqe1mgSSbFGfPm7EG4Eavxz5W7Dj9zE6jKi688pNPjV",
  "key48": "61ZsTVCwteBTCWVL77Lani41y8TnqUZ1WFmJzf5iGZD5RVW8rs3eAroWpGbDWkyVRN9einmpazMZD4U1emWYiPWZ"
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
