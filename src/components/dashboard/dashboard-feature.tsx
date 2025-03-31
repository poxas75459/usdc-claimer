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
    "2oeyWJ1J567xXnbY4mqKoxdzRSgWU3Z6hTUBCVZocQ4Bfjb8EoyF1n3khjVoJJCuKunnmuPn26ZDV9waeTVp8ULH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oVVZeVfdAPxRB3WC3H8Rk63LtGkgUE1pbU2CTg1211iDVnbT71Kk7iNmSpqFacxthUb1gdpASsen7KSMX7Hv6Sm",
  "key1": "dAsisCD5AFEgQ78GzVRS7XmScmoCGT9CpQwydJ9Uc49VLnUy8QSUqBDgNLbmwLFVXDfTs46e7oGacoGusEJGpL6",
  "key2": "2JMFE5fyfdsSagFigov8q4Cjo4L9tU9tQXZakYcDHwpkR6LG3h2qv8yB2tYFr6ts2kFDHfspJaTStjsisxNk9HRL",
  "key3": "4dMLPjhxckWiCaYQQZKhEB6fWKdU1Lv8AAqwVAjJ6LSqRuqX1nArL4PJ135jirEGtEHCMuAMuybjww7sKawihhCt",
  "key4": "3xerwhSoSnmpxr92QckwZPiHWw1oeUxNrpxSXqSCwvALBZcdoipLz34zcb4Msz6P5gRWmaHE65mqhhnitzf4Wu4C",
  "key5": "4UiRAsSzEZhhY8er5BLPzXxWoq7DJUPGwUouedx6kNQHKhTL29agao1JNddkGAgpXQHP9KBnacymr4j6NR8Rb9Df",
  "key6": "5m8mLRg4y7aYHJF3BZBoz1pYBF3jVCoXX4gRV2hyBa138mKTyQEFhQzdcD6ddmvEuRDzL2nTPwUUE6NtwbCdR7g1",
  "key7": "2vokRXszgN1vKazjaE3GgLg7ggqrJu9NwF9ECdHJHAmHLUp43r9ZXURVyXfjFpWDYyo1spia8VAVkrfbAQ1xjEam",
  "key8": "15KmBxSqUZzB66oCwGURkAk45YEVZpHB37tS1frGpGR78z9jQH55xLdrqEd2W5sgseX6YcEJeJjQDBa93zVhfRL",
  "key9": "5Zd7GAYoEjezA4u6Q3ttQTF2c4FgMCybP4WfBFbJYdREMbvHrxbxFWZJDDwbqw6fci2ifCBpm9nNfu6Knk7LcxgV",
  "key10": "5Fae8QkuaEYMwt1WB3gudp2JawVWTZNo4wmtHrRokC6Y2Nhk5JHa3qAdYPXUWiNJ5XSJqPiTy2tFcHrutMJ9RyJb",
  "key11": "4txm43seLRTJENKQbgqDvsgYFZDbMtyhBpVGC8bUf61cr4BMJqX9YLRboJjDRUTHeW4YdQegqT7TEcVd6cwxzMxx",
  "key12": "RELA2Nm68eYBojkv1NPEpUi7d7VqCsqkdH18wyc4ciDsqQtjzbZuweTq61d198oVeocq42UbMNiLf3depNtuffh",
  "key13": "YbLD66TGXj96Do5N9RD3bRWh9F2FJfH9zxV6bMVbfUMRMjxJkn5dHtLhenmHfftjVciwn8XqfTFajXrTYtTJQ1s",
  "key14": "23ESNvrQGwz5Hp5X1jz4qWxV2B82LMCP9P7aYpmSSnoYYraDfAnTQV2SmuAk3ruQhKMdttKumXDbWjDJgsbSJt77",
  "key15": "5dCzTRcY2g7bWx21vBjxQ37wobKzMGB4X3eVFgTfWFXuX1QQudQvqNY4XXagRixf1RNUwE3W5JZXobLDR9mSqUc8",
  "key16": "3XLsXorZnDvbu8LdzsBYxYry7CoUtMycN6eHAehCTxD3onx6xFTZGUfyyqwrhYvLx9VaJvfNcyrWEUzspjG5HgrM",
  "key17": "gYRbMk32VQKkt69Yc2mR2UP1HV3PtM3NhBVoM4uikPerCS9rs4TYsFCL8hjNjNTvwDfroa1hd3XR4XFxzzDEqQb",
  "key18": "2XVT5a1hKMucdoYaeExKPpdTsWqknTNnvkRB9QNQN4dS4LofZ8uzBpvww8xvN9hmoRDnRp62ha4y4zjfRFdx2tR1",
  "key19": "2sxstbFLb3qAyeBCdWjCzHXXMXHkRqm2oMFsxZutef2FaTYdVAhs49Zh1c8KVfKT1Vqrs8hYHgzvkwLA8q9PKFBS",
  "key20": "TuSPNBiJsPrnngKKtYEugWorTqFNQp3doWTkGYMQ4Wo5aDszqgevpANfp4MreA18qjzk8JQNkx17EmuQ67QY1M9",
  "key21": "4JLYPajRnuD3NuukK8SgTFYY5tzq39SjGbfM8bRBZV5arXAnyFSX7QngEg2TbdXMD1n8S9nps4SqMjup1eGGJYGw",
  "key22": "4S3evU83RkRiH3QhqBBjPMericj4hQMyqDaPMEgqKdXzYhz4wEv83vXzz9Sd2z4tbSmWDT6SiLmWVVapZSiqt3au",
  "key23": "swwrTPtYJezZD9jCGkY3sXp8z5VEeVepkfJRcNuksNkCrnoCokvfP3F3L9DTfWJDqrSawPBhwoxqwVGpoGVjRKB",
  "key24": "3yvEzPukXqBHwxfXS75tkKVvHUqmxs1jguMzT1BxPMooatqunVyhetUVVGoG9T9pFc8u52GPtBHK9d4JKscK4woB",
  "key25": "1DuisNP1HCxSN8fvSm4XSVJARxSZoqFe1xeoYtJTYbUdt6MysbQCRWkA635ctiXApu5eDBXbjsGRdvz2DQzvd1i",
  "key26": "4vBB3xdcaqQC8q8aDwjUKeUDGyfYwBQrVp9uwq7kxEyMDSFG1crTjWQ2qRRtpNnr7fCk9gLj4aFVZ2EbQ5KRmuf8",
  "key27": "4opQ4k4QxYbn74TT86heyzBiny9tDNvDC6zibiXGo3keLYGAMW2f9GvhAet9UK58orAWke1pfr8GhK9gfPct81Jg",
  "key28": "4WqCyCqQdowLmSrc1ZTxL9LAKEf8c37qdobsmVVBgZzRiYAY6HnDgTH5doLrYoCuCQ3fKFV1mzuLm1846UUyDNys",
  "key29": "FrwupPq2JGN713KTX5r4XQmUmQDUVoJnpLUe2okXckSLJ4pC9fThX6cw6DbwrAWYRH8uupMRBn8CWzBkjTaEztD",
  "key30": "52bcWM7UUySGt612cYkVuPTvJtw5STsBdY1PJvXfLP1X7L6KBSB77MwxKBhNzRoBNUKGDtvffVtzAZRiMgmXrFCy",
  "key31": "3aPgDcfHJcpj7fYabS34sCCtxc6bqoTvvsDRA3bCF9sEQUKG3DVBXd4qCwUHNbzPw3zC42cAQANzF9efR9L33JfY",
  "key32": "5Sbw1MXdRrEhjn4ThG9VFFUDPBWaTjsx3j41HwMSjKuB1PfjUGmJZYLX4U2tJgTe8FdMVKhg4pQTjsRocPZJqJZE",
  "key33": "3WDY8Xe8w16L25M1JQvhcNkSYR3bxbUc175ZfYYKzZQe693vcvmX9sPtHtxJBZRwjG4EGqPnRXKAtB1ZZcSX4Qhe",
  "key34": "tRzT9fpYxteuZ9XEStoQPZ5pKaY6ntP5mKfPbasx2qnSYcJCULb4gqC7oc1tnJaxvTiYnjDtLKrpTQju3yctR1J",
  "key35": "67cC4scY18xhQtpqikURi9MBJToyNCdPrdiPx8og8gRBkrDSQdZM9ug1wecGG3zSux22YriJo5LeDt1kkymfhQpP",
  "key36": "2zDK7dTgh5uQfX7YJNaeqLNNfEva9Bxqx3n6WjgidpqXUxvq1yAEguBsokbyz3H5mg2WQZ5bVzQgv5zNagUZDeL4",
  "key37": "65wE5a37Z6NiNxtKCiDkFq3R3eWJwAREKwuqPiwUSyvLndLvg5k7ncmP3W3DEycPtrS2rbz3cjbJZE5umSBjbseB",
  "key38": "3iqFsQL1KPREV84uyApFdThyZRm6aXVgcNgKokE6UR5LihYDKaK2WFbY49JkC1AnMKKyNJWkMnAnNktxoPQbVAM",
  "key39": "4Wc3Q2jnQXi3Rh8qKSsYtJQ5RVWxpMZUQ3mVzUgTk2Xj1ijKKnfQZw4AgJRhFhh6gHUMoqUhU8aMNLN7rSj5QCEx",
  "key40": "bdRZ4JCoJZcYni5CuScQ3WXkhZbZZjoQ58QF7Q1tx6Hyy28SC5GUZ4n1gX5jTYSC7uipgtYxaJn3PSzDboe4Yky",
  "key41": "3BCk8M28KH4szYeTS2fHjPhDBR4WK5MDuCUE2aCS987qirndyRzANnuVNauztm8s6v7hZNqkKy1Kboxt4LeykvH6",
  "key42": "47ei8GEt2dDLyx1Fq1uAY16MHQLhu9kX3RSBhwCJNhp3HrGCwEeyzBUEMhbB42WjVmhzLHpHNoBoVNuH14kk6w26",
  "key43": "ikhoXfgQfRHBRMvGWWR5xzh1cbS3NizaJThBvBJ6rUg3HAZtoCwtP7feFWPWQ2krnPWApEP69hnYpmL15WSTx8q",
  "key44": "2yuxokcBKfKWDTBNawgNxd1UJ3GGd9m4cbZC9UjSGUignapi9q1PgYiYnS6oAqJ2QqkSV8tgQYeDr6mpeZijayiQ",
  "key45": "5qzrBje8fVH1USRC76DJe7Nm4F3dgZ5AyfSi8ESKqgQEAu84DtG25oGCudxnsMr4fUqm1kR9ympaaqmrXVawYeeN",
  "key46": "45Tgf9Qptj8fgAsKGKfxPfyffHtJRMAbKqyBLGwzU2YnK2i3ANhTg97QHRjeSKqxUpwzb9kk13rkyxoQSv9XunxL"
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
