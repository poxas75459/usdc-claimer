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
    "5ndbtE7WVSL35LXaMGFNKn6xMD8cHYk91iJ1ctCLBBBRvWBQfYqgkomAejf45WPEwZHxxEhi3geZ2zm8X1YdCFME"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uyeK7jB2WUE2z9RzZeoHy8YxVVcFvnm1m3SHRL3kaKnhf1KceUhTzZgnSCSTcVnbqkvJMnEcj6RXnN4sg9ccebs",
  "key1": "4Ry7fxrz5fQ7gcTkEowdETS524e9AE2xqpeHH9wzxfqP2sQ8oshTaY1GdN6FJ8mNtHDfQVjWva6exzpCKxpVT4gf",
  "key2": "q817m3gJ3dmXRrgNMUrQg4aWJL92s3JPWkz6NuYh3zWbLXMt1t8KZKNuRNSyNZUmJw3Y9rVLAFXd3tjvaQvg27X",
  "key3": "4uM4hxojpDsXtvUd3zyfezkrTjfvrTnuTtJM8JrnoJLkvXiyPsaJuu6Kv21cpmP8PjqEVp6964qMjJVSJen9KQga",
  "key4": "2GGDdUZBwaVfAkRNzqUs2sATnub1cQdg5mMJMu9Qvn8gBSpcQwJ7Di8EVinZx19oM3i54aLXauwp9oR7Lf3nqriA",
  "key5": "4PTLB8WamQvDGUkVSkskUeNitTXiHtbFbdnBCdEmySSXL4kEv4H4KTbnsoW3CpJzq7JjeoJPgjaPbfbNLxac5yqU",
  "key6": "3bDscthkkeVSXdPnG9VpWXs79ebAET7JYQzbZxETrSWsKu21gi1JGXGC814sBZjxnyKYApLKGur3B6axziJ8K31S",
  "key7": "3KdnosjFAVNkj8Kf8BsKyKuTG5tFJRX8LsaCJCb1JeYRizPvZdtkf891sHUDbM9uL3vK7YXAAmEQUN5E9D7T7Sze",
  "key8": "5apZHLmb23b7B1uT1yyKBmDKyUnherENoiviRFY8geGp8vJ3Vjrq969hCk57BPQFc2zuktZ6HMbR9yLwBwGG4CRi",
  "key9": "4i5qTMi9MgL6BTcKXxADfVn3ZgnMmCzu7vwgsppuNrYik9uPZoAfVQ3bvGgyu6tud4HhfRVSkmD1t3t9TM2BVVf1",
  "key10": "4EZPYuah39kALpQih83zhmAL1FBsvKb6iZuGAeJ7RJiU4nZZYTygdnGw65rAPWCS7Mzx7oZKAjjGPW2sFh2MLKmn",
  "key11": "23kuRHJ4idkNmGwxeM7nxNm2CXuRtWysGUJd7FaA9VPyiH8EtieceZFDa8mfddVkE3N1hNDn6CWSnFhHFkjv5q4w",
  "key12": "5C9D1JaU2X9RWWcuHgc1f78oMkzZawbHr9FHECEm6N39VnaLXc7G5bRioHn2kbugfVACKwuTUejGsY8iEQWhohB2",
  "key13": "2okhxzRTsFHs3AxtfpkcvghCTB869kdnNr2zJ4T4xB68WeXbz2BPPzrZpoZTqAsdxGgy3q93sbeuAXQAqNvQ5NRi",
  "key14": "4hUZr8Z8z7qyT5LRMEAZYoBhbijV6YNr5mX37kUiwCTzuvmY16LJsYiTHcApUia4PPTb2gkTZZkNgBwe6463aDug",
  "key15": "5LfePjdtd8Z5UbVaM9Y8T7igM27kEXkLmVkc3p7Jr8eWA6aKJjKbcLE2aQiUmpntEX2DuQeQVjnCt9F7pWdEex4f",
  "key16": "5fjZpPAqaV9dPqmjL91zf5LgVjhQNjZBxTPh9shh2VZVgWV3tp796BP19CQoiGoXMEk4fqTHArnHUypEDn6oiz6C",
  "key17": "4Rad1Vc8ydAd8p6WRkvT9We9sZqdSSU2oqMRsBkRSWubEwXYMet2z2SxT82u4gqSGh33pbX25JbDZjrBVUKJfs97",
  "key18": "5ETafF8pxjMh1TRqGMhoFGBuLhzPoFRGHEFuLZfLbgVFSS1pbgJyCggJVJMuGq39oDAxUPg2BHbkwNUDxnchRmnk",
  "key19": "4AEJks48ShqBmL38NhTnFskzXQWhFYyi4GxkCc5yppQi1uk6wsP8hWEWvfohinoJfjCvhi1YDA7PXaEmUSk3JeFi",
  "key20": "3pBQzdwts6uMfhm1D3cVzH7vZXXWSPY23arq1aqhPNWVMK7tj3oW55XQF93ufFfeV62WV897DBAgeyGTj47A2hxM",
  "key21": "3qxNwte52cFGtad3PKi5oZGRqLx5R8BY2uZRmJhD2dwKtMmG7JquV2fD4Y4cPGaLcMQPGAX4UeonCEQmD118PAoQ",
  "key22": "4h27UmTogmHEWEEYPsqKmWU3Vo7bX1Yx2ox8ayKupqm8JcPPvcJwTtGzuZs4Tky8d2aUB8FudJHFEW4La4p9aQup",
  "key23": "59yHMDt6QoUPM3sYesTSepoZXJ3AMRMRmJdEr9e6P5Lp9Twq5QLBUS3ARbfEXcZSVNT3c8mCE8HtfS98uPAE7h2d",
  "key24": "K1iMvTjzAbNDJUSqNsxqnADCna1hhymD6AjdkdJX6PAVT9DtCWX6smLXV7SaTp4Xpw5k5CobXzcZkskHbvRoMtE",
  "key25": "Dq7DWHA9gHCDVWyVpFDp1sjerqQuRwjSQCKxmkoMaiPery62ha2BWD3GkCVFUqf3E2AnLEdhatEKcx6hZXJ49Ug",
  "key26": "3jBSvuAC4BiyaznA2pXTq82RvB1zPF3JCFYm3H3Vx34bicayMzycc7XYG65r4xXZjd7X9Ni8ViFmeLr9mmKexvzz",
  "key27": "4Wrb7aPWp2PdoNhKsYwhTGpnRS1LPRZMLhKZDYVeVyeajJv7Vg2hvBH3UHdVCrQb3rfDhgefpaaeVUKyPys5neto",
  "key28": "5pCtSucyhLbqjzHqXEAuhGg47JmpJvKKAq55R6XYTqSY4ZDyhm27sKbT3KC3LfEL7d337TcF8jx1duJGZ1dUAh6N",
  "key29": "2Gy1vc3tKHmwnLQx9KDMKuCs1b2Hjo1fnwvXiNNDFvibgBNiKk6MwZevrh4MV7amhwmS1CLYGkNqLymAeViL9bYm",
  "key30": "4pcNUau4wQhu7z1V9rnZd9skV89MWow7PpLkSG5iLDmZSPjMDmpe46fH9hzLCZMLSwqgacvdyissYM6QyBB2uUBP",
  "key31": "39o9PkJfuQu6J9ezmdcoi22Cea1ySmF6zeBfurMZjVKqcNuHvZ3tc3qGwDgmzhnu2EcPZfhGEPAmp8HMxyHqbC13",
  "key32": "62wukLi9cCV8USYqoKz7UywoQ5gJNjGxGVmZPD5vrVpQpJFTddo5goLVNSGDRgLZJE5AfXzdd9xeGjhfzmR7kKZb",
  "key33": "5GpUsePeBtniQ6Q5pwkTsr9BTbHHYUAMabxDfDo61fZfRR6rQC4SQQwuvZWaPPk1jaE6MSsJqvhHGLoWuBGR3kzD",
  "key34": "2ah4CYaBEyEhEojpm1XfbJqSyDH9Q5YizJCx2wFwfedvruheSSUBSYeZrikXKMoyhR78MxfxuNun2YnNkrHfJX5q",
  "key35": "4ey9xqbqG6sMnxGbDQfj4qv2P5u8PrtPpSdBnPT2RK76qLbjXdkBWxJ7etX8PYcXqqa95B17PPXgQ125HB7pR2Az",
  "key36": "3p8n92JsNYnfMpYiDCV2RV2CHDkfVqhme7NAiuKVajPhCkH23vp6prif1ZGtgTRVg6j1y2NMqQ3sWAWhQCFtiW1r",
  "key37": "27xhuLBDitu95we5hgFgbDBcTA3WXd5EyL74HihpJSovf51qVAAKFRZ8RqV1W4UGrWoF8bsJkQW4oD39UNY4kZqm",
  "key38": "3K8MUCxAV7QHheQ5wHAnx4GnSAhGPAWeKfFtAdrEbofskVfKC4FFR4L9zEbG3QkiuoTY7e6w6f4NbMrA6n6PqQV3",
  "key39": "3ZnbxpCy3i83rBZsLwGzFXMzpcKSegRKsn6ubFgDmbNpoU15xUs3sxAy9KeY9yGMVcNohyk4udzB5hWHSdaPUNp4",
  "key40": "NG5QBujG1F8gXH7r4mvheg5NLYuAJKythZwqDaHghqV1i5cvUndhLfaJkjxQZUX6eAp5G8JQcWcqZvcHz8V7mue",
  "key41": "2GJNhn3JD2JZPJrRfimeZgRrzkg21vumqixYxkYqQHHZHYWwH28aQWzbYZ8x4HYsEWRjJSL46DXTy8cYa9WgQ2af",
  "key42": "2pugS7VFiKvfBVFmLJ1fG6CkvpgDJAwyAhoFcZZBeNd6NHyzhM1dPqcp9jp6ZGiPpgp3u2LmJvMc7PXsbLfDr5nE",
  "key43": "2QTPsrLfvEz3xcJ4m5Z22VSZqaMSb1j1hRfFpQFdSNTTSmtX1Q7XiJrBBS1crUyoCvJunJMFXuGkaMQPtEitPfw9",
  "key44": "5HWHuAtz1WXmtc38YGz954fPL3e8Dv35LNgp4DsUtutzh4jE55mLgVLKJgUYEJsfQa87Ly3TkNJQ9WtDK9jbHe7Q",
  "key45": "3ArjPkahCQD4FwZAyQA2X3xvR84berjScw68u5SAVG1F6m95AzjZHjDnQDhjMunTeJorMFxSD38VV5zmn3fbA8Vq",
  "key46": "43pCyvd6WayiQ29gRAJDoBBzV1mqcFybsAefAzEXsVsZvJJwwiXVVs7mpHmuxDCMCghYgQaZwAtSorjdiEUvenUF",
  "key47": "2HCpNXo6i6DGkxftb4LrjwC7hTZy4hWib1gj5yHmNX7ghYMTxBeMv9eqPvYb67K2oEqSECmD7vLJnpGvBFWBbtUT",
  "key48": "4mCKHWkAYSAD2yF36vH134L1iybN2mDqyUZWpPjFSVeRHZm64XGmBt7fVFSJpos9MK24mK3BqytMyys4UdMbnuXo",
  "key49": "31oCqkqGwuzMdAFZNmrtZtLfJgDwd3ZfZkwHmEZBMJj3p8Nx6H2ZJVaxC5mSEB93fTpm5uQPusZMFkPVZVRKGupv"
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
