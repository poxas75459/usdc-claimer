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
    "4KhgNkP6JmshqvY87BDToqgNt7Z3KqKgtfZg2RvfBwWXNfDQBeWru8hJL1qoEpMhr7GDEVnhoz1RqBBjqwdk1oEM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ji66DbcHaEA45VTJpcr5TCAdm3bZarJQMJqcbmohX4W7xmVitutBKdx2aT2P9ixvQDms3UKpZ5B7pU4cWZmcf4G",
  "key1": "3GheCx59Py23DAhuEtsUUnH6TpyMwEmSGjSvwQPVxwNY1ms6AUsRKiiF2t7jSwFUXssfVkY6bdHgYmoz6zRqwuhw",
  "key2": "SHz5gy3uzqqEwX7Ve3xNu575YWsPmoXqbEfEDoXb5nHrypsc3r6hTXaPba47PfqHeLTvFzG3pp4AbWMEAKuvo9A",
  "key3": "53cd8NiXzwLPSmEJV3gtHvad3LaAj1mEUBomDb8d8enztQYNuCgHMQ9Y8a339jP5ewpJyiKisk5ybHAqsiCB5wFp",
  "key4": "eKBjXoaoN3v6rCUKCLjcU6aFL9L6og2oAFdcu9Dqs52tZyg8CPpwh7ityzwKUQ2k6k1C8WHaNPvyYySfC7Ze8DE",
  "key5": "3V2WgKVAQGUsk5oq1NgWdGCHxp8kzHh1ZqxLUPzg5ryX6oQ4SJ8abAzBwGRJDs1TY13WE61NDTRcd9XgsrPXj7ee",
  "key6": "54WdRQKF2CqDLQgheBytGmUK1ycmGAu7quwDdsfyqN2u2o68UTDb87b3Bb46pj6Ypd9tvhnJbk7n2WKam7e6EzCJ",
  "key7": "3d8a7XRmeS4EXSzcFTfmbBW7mqCiDYA2kWkok85rvVPmUwTYrWRPrbDvjuNdeYfX49cE3scnRqj1vNbtnYsVzYgV",
  "key8": "3ZCZZBzfapDQGrtHHMCiJWwoGvWE4wvTpmDL3R7A3oxWiUw3nMFYhnQvNkW9QU5LNpvwK73UdxAaRfu7eXMaW55t",
  "key9": "48vUGoLMpR16avdQ9mbU3iZfWVecJU7YxtnTDRyoaVVBNPUhG3KtdD9vQZZfoeF4J6csY2E3jpEWZqWH1gMGxH4W",
  "key10": "2Qr3odMBTW7WXJdxCWBDzuiqJj3UETC92kr7q89BSxdVokzupT2uDz2W8j5sixJVAaSUc2KUFLUq6nCfsqgCS3BT",
  "key11": "4dGt9sdgXp2WK3VSjztKjQiFU5vt5DwdVz4e8oHM2tijEsf9YA47o2VRDo7u5h8Do4hW61uia1rdK4qtRJffoYnQ",
  "key12": "3gJSjc68ndTc9X3uNdfM8q13n9YcLpozmtGZA1e2DWg86EMtGFH5zSYT3VMTx1koVZL9kqP4qroWwMkT83cxgZL8",
  "key13": "4i42sD2ZGPGzfeL6LAH9XGyWASGTM2V4AP5GgmE7Q4bwPaX8R2Ag9ZYNggTeJZUFgGkauSvLg3r4YGVc2S9x3syi",
  "key14": "2dYHZdwXbrQ7E2LyuMhUvBgni3kbDJwcpZvcYVNXYuEgp46Nxkqpt9uipiYPZacS4tcCHxZN5SbTu3ST2Qzn1C3g",
  "key15": "euB8oV9HW6pAbbDq3BMczBS9yp4YR7erjGwLEWXnMkYuaqRsfqyaWQQocEA3vnRpWsmZXkbXTuRwhoEfUJtUygp",
  "key16": "4cRoALDZgKi7UV2JAtsgxZE4LvUSJFubsbVVEeEsD1tnswZZtzakN6vN5NjHp5KPiHtKUCRpGdn5FpuyBHHqp2v2",
  "key17": "37hDjtktQ2aHS34utktj4rmrCwb8V18D7WicHnyzjQDngVNmEFx1WFAHs1VxfEBfPCEzN78EbNxTH5EDrZzHikud",
  "key18": "67HKbnD21Pr4Z62VycuHe7omw67d4KiAjncmSCkkepesyYfyhxPA99Xop5xhwTDJfNosCjoYPkXXb3o92siimqgE",
  "key19": "3ixHe3BcAYi6Yf1f265W6om8nNuxJm5zSzuRCdNrZnYyX2JhJcukiquKAx3yjHw3kH97amSX9xbm4i9oK2oXr8FR",
  "key20": "3aGsZfpEoPLUX5RKuSAqhf3bSE4vDGi2ApUc5oabqLd7fzKvkZy3xjgiuLqo3XnAyPgeuHt9zTjms5itT9sTLtPZ",
  "key21": "3SH5fAC74Z1JxW2KhvE5bk5PdJxEwjkPuCpFmuuhX6qdCFWsrQ91VgXd36DN9GFbFvrQuDUk5qcBuuy4Kb8k2Jvw",
  "key22": "5gLZ2GoZfhKPc8kUFWZGqqBDC6Wi4aR6xQwLp8S4Y3NnJuJkpQZTrm1NQm7qH4viJK3HDiw7t4GYMPo4eKsp2R1i",
  "key23": "3LV8y2tyDnfNWWTKASpDxHm1Hrz5Fw92DSFuqQTgfxwSVSccQAeFx1uwLAXiNNAAkroKL8aJmQkbcZEWpGEJfiw1",
  "key24": "5iTCqAo7CPzMPCpRBu2XTP4hjzc2xw4vv1WShjYzsZxhks5dF4UEEoAxWLfgciAV6UEhXvsi9TwvcpRx68U4cMaZ",
  "key25": "2a7WsyZ3Zu3aN5TH69fpepectxnjxuziiqxEPHAnQ8KVzv9u58bz3YDFHrKdw7R41unpNTPhAmiZDkqabEvExubw",
  "key26": "47Yd6A8rJmJG39Q1Vf6Cp96FV7Shh9etKKaPy2dBDwu8BcbfhEDzNEPqwdV2wyZWYQh8yeJkqcoG78Qxvip46Yzi",
  "key27": "2HDs2s2GEttuo1uZ3NfsM7VWYNprjfH3tm3ZJbhrqEYS3nbjFg6ayphf4tq67xbPqtoBCb8axCTTNtdMZYJefC9h",
  "key28": "5d2byjxgBAVaz6dUNSiDNXgSAEkWd3Hk3VPQPqiZcQbv8v8929xUmCw6DHR6Qn8dke7jnyQ5m9B1jC1YfrnEDAh1",
  "key29": "zYY1jGQuYYibrtGHX3wPfbckqPj4AvHoL43GQbCPvp95rnVAiHjxxa3fgPdskciNA2n5aBtMiVwyTKmpB8XzP29",
  "key30": "2B8z329hN9TDRevt3Jia4gLUdgWmnmxP9RVWzAUg9ZHLwzFfjwNVipc4QqnkLQABcoaESpNBHSgjDgDXehbF6jQT",
  "key31": "4w4fjqHiak7bn9gtgdyexRwEjXxwyYBZtrRg5DSFk5gNeDZ85wMub9VtsF9gCUcwvJUPeX7BYmq5GD6j3E1HabaK",
  "key32": "2wLYaeYzCGKgA2dT5TriSamLMNZQCqVXUa3Luh9XPwZpumvZph36FtZVXoeto3BtMooGwPuHwjkhJK859aUfR6UE",
  "key33": "3he8WjfQnpMoo5dCmhTJ3PqZwKwMf8ShEvetJ923QQ24ArLiRcMuNzxQQDqAHEkeFsh8mG6tv5ZuBaXjAwRZusG3",
  "key34": "2Qt3VPJkwmMPdnxgXajTC4zPbeGDEFhY4ZPVfAnk7ppjdHobVsnWbLUSLYDgMcEbm6S8at4LrTAGcKhjgaZsaQro",
  "key35": "2S6Tm76cC7BoLedZq379UYTrRdGp7egdorV66eXAfaCYAH3sfM55KaPz1isvhh2T95iSYTexAYzjbVFZHbWDp1Ap",
  "key36": "235p7FPV79RZsxFgN7KRrjbN9o1VaiTGawiT2corvQzEnxTGX5Amhcj3syN6xhhcwU5iV3KJ14ihvsvRMJjLnSJB",
  "key37": "2q1j9Z6vLcN1XXNX8LHGYvSynrW3itEwQ2FDRx9eXPQoHYpga8DVwh59jrwBc5jcwhVpejmT6UCoKfk5RZqLuVd1",
  "key38": "2cmwwCb7XVCsQRQ7hkYFLo2BQuU463esQNmvK3WUBqtTyP8bmH6QY3YxMUft41gBXjMGvDtLFYRVqeWdghz6RGUb",
  "key39": "3YkZ9oC8FLtFv1m8Y5jeCrh8ppRMk6hAuAD2XtpSsPgKGdxGZsMhuMfYv7WVswWjDdGMdfU8DbwARr8JYsCxoqAL",
  "key40": "5W7FTm4bPkVXBMKxdGzDRoJex59nKFSZZZKcvhmrwW9gTGtneThynRViEdcVduEbXF2MSGdDSTkqdAAvr9QJfpd2",
  "key41": "2TNQ1EdpRX9VxV4JFHhfUArcU91vBxrBaZLAS3UmMvH6mCRyQC4M2v11w1nrzXhgpnFctBajEaWrvqqBY2Po2xih",
  "key42": "4qRE5YS6QebWS661pmd7SuXW9Fqnzv3CbK6t8Giq4fkDdZw471SppzT4k8b1KZfp2rnKqTLVkE3oRuKKMjXBXLC3",
  "key43": "2F7WEG6HtMfs5kGP65S8vzgzxQnJw6gtt8Roy4tcEdhHm4LN2QTsL4TA2UieHscQQXRay1TMYaxaKiBb2uoYCWR6",
  "key44": "3AeS3bXx8KAPCSvzGSbkfvns5sQJeDuB5bV3p4gBUiYKtA6WBMrMvx4NniX7WyWcaS2EeGxFJ4hxws4sG5hmVjiM"
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
