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
    "yZJDWR5nLiHhBuGwAqADEhMnqxJ1WDSmG1SD7sNdg2mGqpFeezsGHgrhwzcYWT8qK1qmBmUbiFCQZmMKhNVCy1j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28MBo7qBW98UYYETK4PtBmJ2xtUwBGyUjxWtHAubKX1saHez7BUggP6okPx8BeLWfe7GHkYQEVkGuT1LowHJQ6XY",
  "key1": "2DuZWwkRApZyivfPBy82dbDR3FFJVhHKe3T4CibCK9G5ENKK3siBh6ZLjatNSdBTkQntcAQkuKuZAo8hzxTcHokQ",
  "key2": "4zwD6juWR1SFbp9N3Cufo8YrX6TjWzLwfDzw7NzbWRMfV8Q9acmHEzF8fqaPQnBZXcUt8NCCdYfRVAS6sUzE8hn7",
  "key3": "mRWBa8dV81KZ7ocjEokEcmDewzETKz4cPgJN3n9zMcuCsm7ZmxXYxqHEub2dgG9YBgBMr7V41k3QAjfDzhtLAje",
  "key4": "3fC62WFQvficMu84N56a5bWqmxiCXDvv7opS5WCB98r8KooTtJUbVEkr9UfCoJP4TfNVpuJH9bYVWNX5eW6d9B3g",
  "key5": "4CbxVsZWtfYjEFZ31N37LKgNYqYhiTnYGWX9UhWSNgx4mMXc3AxRgNpNyYzq8GebzkDAoMbZmQHLJWgpEvbfRR3r",
  "key6": "3YjnanDahYvbnMafNfrtJBPaz126CnMTduZLJ6n69MCj4zA6GRpTZF6WoqTBrdPSMNjsKj8ZJfT1hrTxs3WYSjqE",
  "key7": "9M1iz5JewUcucnt6bETtGAtLfFox8VDYM41J9aUDgs3gJavjbjzeCS8aAT1YziHBwHvM8nkFY8mFoRNfC2KNU1Q",
  "key8": "6pN1w6SL9PxKMxLWW7p7ocA7ZEugGjpZ6wyTtuomZKQZnm2AtcZMnwKZWEm98g1EVh2Ck5Y7cMYTQWgkhF3SUjv",
  "key9": "5ANz7fN9BbsScLzAv2jYEaER7xZCr1pzG9FcDugEBTpQBnChQhyZ2QBm8iYfhY56AZQS56teSsFBGgWvvmzHMpP2",
  "key10": "4WA1Wx7Nw1tSq4YqczQLQPGLPjLmtizjRcKj29n5szjsgjdehkihbT52wdLvnXcp7LPrQFFANhfjsGgVUwS8c3TK",
  "key11": "5BaP4yee8v6UfyKm4MkWwxopRmRh97qrjt5vgyegQhVHwkgBA59EWdUYxx2zygmUsKiruyfFSQFXMcSvCJJoPZ18",
  "key12": "5bRPgj69H7pTkJewHXDNUXjiZ7ng1JuemN7uSijtzWXxxqPAKFiQGHzK6n9snGamCaqoD187eLJ79NTdXPz1Rpdv",
  "key13": "dk6iak27Bgx5mLZjs97om2HAuiLoKLDm6Urr1VWxXRYQtd1PKqpAeD9NCWjLb4gNa3sTK1f4UiPV155JapMTXCN",
  "key14": "59ett76EkVQMrAMgutrhueo2WGdAxuJXFfZdCP13FWDd4BLry6zBR76t6BaqejUp2wGQcc9BfGykTeGo5cNwDAyn",
  "key15": "2wHnyjrwiiC595FDayC6LHWpBZ5anXjaRN54dX5y2foc72inzQLfm9HC7U8Fm9KQd5zG49Q4WSbfmeByWVsoqrWi",
  "key16": "2H2j9rXyTqSCBQZrSbgbZ7hA2HTw76QkBBgGYY9YFVK2Z9x2d1oehVmpRFy1Z4XSgbFvypKKL5MVrny3bmwBfpFt",
  "key17": "5TB8G5jAKVanrgyV9zLF2UKrPjZRr1h2tTacXeiAcKmu2Vjr4BSTNpYpsNePfRRVj3BahM63ryZCvVjGTc1A8NWu",
  "key18": "5zWDLM9gLF8de9GfJe3CvWDHa7JPpVHPtNqRwBSgADgab5QvnNyvec5DbpwaooEQyBh58yihxYBHdwFbHBsBRh4V",
  "key19": "5diQT4reoHi6Szhfk3zWaanXiTYo2nKh2uhNtpotCnz4FnzLvC4viUuX2ZT3qYTEqvBxJkYkf5xExfsRBZ3iYZSk",
  "key20": "5ogqN3GzxgCmMywyWJ29vRH9mYHat1uDpdTz7pfa3whvKePha8m77ediAW3b6gYmPmDDmxNo2ztkjMEDdkrbMk7m",
  "key21": "4zJnEMK3RAXiju64T5pUuFCKT1x8bvZ6n7KUAfdXX7uQR6tocpFZNwBDSD5shuMDdc7E6YwGxa88Fi2z8yTqQ8Zf",
  "key22": "23Y1Fnuo3MNDTccumN8dkSQGwBHjK2ZmazCmuw4VfVT597AQzdFcidFvfLvudUPmCX1BX1ztdDY2Mio58KzrmhgP",
  "key23": "57pGbx7qaUtzPSSjqgRrXDzKTcBtRSwDHS73pguXAsu8tGWDF9TvG9AWTBXyPr8KamUkaoeEKjDxrEqsHV3HjwuH",
  "key24": "3JQgEv2bxaUf7wfLr8wTKgNZFwyeKtHakZcm9TW4r2A53JoHC5svtfjsaUVjKZQUf7XErtKh3sVG84s13ike46DF",
  "key25": "5mj9hFAipn4tbZBh5vLXgsPxo6jaLF9GQJat8hVt7A75JXpLfNoVEdHynAXvDTQ2tTUmEAPVZt7ZqNzxRrrkNS6h",
  "key26": "3a21jCu7PweFRr4HiobqqAWSEQaY4eKesczdyfenQ5w23C6XUb1mopMDq5E1FRiegZJH7a4Wn3PmnMRNfB9hayj6",
  "key27": "2yEt2FepjQWgzX6ftRo116pNBroBm7WG9AeMX4BhPzePHi9ptxL6XnUprWUTTYYMrnko9ESoUGPoXX9LozHP9NBX",
  "key28": "53dc1hA5JZUJLas9WKMnb93jMG27YtJvCPu8fas6DFcEcpjXmRCCftCVKnwojgqHvDQK5KGLjJcUaSb1xpT3FHsj",
  "key29": "NbhkgdGfoecaPz1f2WHLyXr8LMWdoWuLcm4Jqxm6gDjCFRnT7MxVmmNvArSNExb6iWtYtVh78dxbnKNwbLNQ1fw",
  "key30": "2cVF4jFS6Qq9PVBWzvLpKu17rtb8YD8sdMb8HoNQSkehjCPYPQGZqrhs4anHm6uaqhpRiQ61JhKx6ahg9HZY1SSR",
  "key31": "2J9Qy18RBYCDn3gAHtJixF8Uvhpnx8pWfi9FQJELdjxLQuEhoR4iekvSKUrCHo825WNb4ppLsWLmMSJrdbxaLWuU",
  "key32": "4egMb21LYQXuNnMweiNuhhGpfjHD4hAZRHydBpMAgsMieSgVLDHzTvG4iwuuC5FHQJ9WPGPBTnTVFVZkURJTPK2B",
  "key33": "3Sp59Zxc3QnzhwAGLW65UugAzUbmucJyNmrzNUdmrfU148jYVPzjxYqaBqwUWEFUtUwJRm9UFza1sJRe6msRwLT6",
  "key34": "2Jk4DRwdzxQtSN8b661CSWnGfNNZAQ3psxS6mSx6n9tjU5j1KsshhoSWz4SHZMG6uNgzEF6qUiDo9YPRnqkMqD9d",
  "key35": "25hfmwTWpBLBttzDnjfDVdqRBrhvRzkXc9s7XQ28UedaBrXiUjSbov7JPTdMPHDQKzSTWnze6NHS7nM79vLjmNrF",
  "key36": "3bbHG7DaGtSYLiPaW3DHMXp4E6Fi5Gp9qEHAnmFJjaKmFASoTQn2qrbresbcQgShV3rHZbbNrBV22XS8YgQEVNzc",
  "key37": "gaiJNwh87PRwP2WKz3i4kaAwP6Y3v8bDUFksnF5PpK2dCCnDrMRAxe8LEwHzAQuhNCkVDKCgXEguVS2YWgmf9fU"
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
