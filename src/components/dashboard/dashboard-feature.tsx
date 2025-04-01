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
    "5D6umoLEyHRkKThKWvvjc9qD6DUnZTDRKRxazeR32n8t55X84SUNrS4DdPYWuDYX7MWfPSJMvWA5RHYwCexyT589"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EBtXVJi5h6JzVD5sHbeLS2WVffnpqnn3GLZb3zapkvgVDmySgfTeiNiR4GZ6ddgF2oPE9z1pr7BYy5qHTpeabNG",
  "key1": "4tBkLSF9mTeYed1TVzenSMQboMf38A7mYu48q9TLaVbtDDjHLhXLM1cQuwwMiWLATHLh4CZEmFkCqfoDpXtA48f7",
  "key2": "4bDDhJdCmJqTp2QQQRD5EfMumXa9wpa5v6pWYeJXcdXgNqg2FcBrAfGhitQ3baYR6tCq6aJM1LkhaLq1FYc8gRM8",
  "key3": "2cYDBfuDoiMhMTYo7oTYereAhMU9YiqPboqnAAmgcW36bAJ9BScY8SZTzycSsfpHRZpDG12L5WRYiYpio1R8ojzE",
  "key4": "3XnYUYcdNYBzsqc5uJzMEyiAExsi7PE7PRFeHMy6Q7HcmRYf7g8AQ8ZxNXhv3ij1DENseULnNHYB1C5BeSeMCpgs",
  "key5": "3GdJhG3JohEeYGvXsaLVBFGW6MWtrMLevRdKkoX2aU2pB67Fp6gVYdrXqyviYXsy7N2LCGefbXNk1wucgoYswDW",
  "key6": "iK1J8wEajCLtAJgoV13yavEEPTzuA6wM1ZTLtVYebKfnaoryvUsZG9oQTLKPKxNchmZPSZi2PUQoGH6xjjrNXDK",
  "key7": "YG42hbb6Qj9guUmxgpf8cZ1S3MyTkWWZLAz1F5VzsML1BHdUwx5Y5QizjvpMJsTkSjYQrLGx2nANuzwvksWaNmz",
  "key8": "4aRFC1UABEBoSmHYRqRLNtw2Y5FoK4EvFiX64hWq2e88N6Mqs7cbK1VLuFkW47zLHsiSjF2LzHS7xK9mj2vJdzPo",
  "key9": "5aoz6ZN2A6JeTEgm1jp7aYMNe9BTVtyXqoqg7aCYp3CTZG8DAz27WnUxL3QoJ62sRgVnHDBFnzxLEgQPFrwqcXPX",
  "key10": "5GtDuZ2GEEhH5fFXt1BCtNvfxnyP3zk68QpqrTDeFanGTqwdY8Mbnoua7CfWBAhz1545rRRCMvqLnmUekgbMWgiv",
  "key11": "2XnWijnSg5UfZ2KAW1vX8pBrDP8PekXPDBH2A8HArntG8dfEY3kFAAxPixnPwhxf7VmnzNz2UCkUkiXTY9HDpxxn",
  "key12": "5FtTFnPCoRDf7tyZs7BbWpeoibmuRvYwJBzJMHVXRb4K7FnpUgoWi75Pq259WUzyPzsqEno5BvyrjeJveKwFaPZZ",
  "key13": "3JYYp5kTT6pVdGVXjz5ypL7njQLEmUKGeAg9eSNSvKT5qZDmL1RPGTGizKdWTbhk3LPziy1H6DRXUjwAzw5XG5hH",
  "key14": "8j4EzJJCsuVDEnqgGSKwVAN7BULmADQHnAg9bUv9Pz8eVvxtxsTnWszvakVDXp51J3fw3WotkHBuVG6oj1ZPpnU",
  "key15": "3bdW5iC7VmXS8rDe5mUmNKc5i3cs4bC6tX928nixCndg4BweC69PYWgQy5Fjf1hbV2XRDdzJ4kQtJYr6uZupvL1h",
  "key16": "4eYeoEKUXk4yCyNCtg8NKbDt5vCmRsAxckXbMx5USjYLF3aHfcAe21XqKcA9NyUXuD8Cnz97vaVpWadSbUBtagAh",
  "key17": "2dDx2eVPnCVGVAvnFnzkTDbLpW3mSznE4wBf5kpXHCvGjv9qKT62JFJUtZFFA2hdaRmYmVFwYLAQ7MFTHvE782tR",
  "key18": "2fPivrfgzQtiTHiJwwXQ46As2zXeybpwJz8k5qRrU7hsWCqNyK1pcT5SRgoQ6DV9y12JxmbfbkEVzG4PJxwn7enQ",
  "key19": "3y6aAPCsXfU6RGBv2Qap2i5JMqsjezSJnWPckN6un4EbAFGn32PbRt1MC1Y7oxszqkHESyi49W2Rcx7nr1VYYLnf",
  "key20": "3udQziJyAr3kLFRQCh7v6iFJfUNS25H98uJNhEJ54K5YiVUAnvJbb6W8q1csaxm17Z8ZbR1P4fkBCmXVZX4DsgwQ",
  "key21": "3FyZgR9UJK4vf2ReKfFN97YMx9h9DHEGUbLFMre2AZcQZaDuJqGEU7iqhzZH2hHmQDRQTs2RJM48ndho1wNRxkZL",
  "key22": "2zMSxUN2GYRt2G5ZJi7tD9yGQRMUydqNSjT3EFzZ5bHLBCYRS7BsS7apHXXPpQebzoSjPDH8Nj9brYUeZtsKehSg",
  "key23": "53paBGVWDbB3sWcnr69p3jd3GuJDQZoxnJneYuUh1zMioQDWocmmzJHY1c9MgUPbEQvKoqcokm5994ggr8sKWT4Z",
  "key24": "5HTcpDnTadsZAwU5YKqa4Tmxuin4GmfmyjVy9DLPxZisSnyyhzADrsRLzpp34Ygb9A79o2ic8GQdTJwRyLEdHAUu",
  "key25": "2S3oRY8u3XhYz1CdV56XSByBahx3Aq5ntzcHmG4Pdoob7uJbJwWaqus8TGNdJeJ6wZbY8DgfAdqv2SKCpnDR7CWK",
  "key26": "4U9LbM3weGYMp33m2oTPwXQoRqEHJiC9rnUFvYN5aZ2E16mqVALWF3PMY1TpKwHatquVXX1XwEvY2mochZm7a2ec",
  "key27": "2FRhcJJvDrw2rJvCV4ZFVY6VZ25Kc8c9Dj5TpWuiK4SaQQVrJ4wDsXwFXHHEE5S5LvXQ7MkgVvxnFhbZZghmF5Eq",
  "key28": "tuGt4omrGSwh1P9bMHkixy7axmoJgdVu8mW2wFvfK7YPc6gbgwUGoWb5tqj4k1JmRo2iNLeWvSNDpyHy3G3giTw",
  "key29": "hnSyxsiWRDr5FYZJaCuJGQv31BkNPna2n2jXta458Q2yuj4Nm2VaMfugPPVgEQbyPR61D9U6e11R4xnjc42vy4p",
  "key30": "3Jx6CA2sELomPUHiJ677GqbGMirSMoDBPuiH895yzACuhs6y88opoY1gDNwhqy6dZhPjRFYyrXxYnwdHwsrnGznS",
  "key31": "My95qnKtwJgx42nMjQibjG6Gh2nf3e3dfhTSbvRGQZSHGgRzLPbGYSmASAxfr8pSXwXnRZ7A9gDzccCzEHgwhq2",
  "key32": "5qXXpFiDHbJmQZgQBKCwD3M9dxCgSRiYYQYbVXWzr3dnRXTMeEiyorZXAKLcTPRVJFQKF9S8wV3GSMpJS7zwJqUC",
  "key33": "9VWTThxzb8XRNGX8K7GTtnBPwXuzPNqCjUeedzqt7iavcXYqZEhdm7YD9ShgyR8aKzuAYF7Enz9modZLUeELtQT",
  "key34": "rCR6KmqGKPg4HVudt92oNeZvtSxAbefXwj3UZQ6EYZrYB2GWsgg5sMZ1toe95dwf7t9DsCKJBD1MvYm2dw6WxWG",
  "key35": "34wb7syrV7qQeNbFH6kHpA8ixFDUAt3YrP9kTA4TcfhgiqHu2hF1jSnWZEqaaro6baen2pMweMaAm16weWVHF38S",
  "key36": "E9xiF1ygAcahBuHLuUac8yyqMmHCnKNsx7mfgwRVBvDHSPUbB6p41ZC97BjzYju8zuhiw2TwBbHs3HwLihrwXNi",
  "key37": "3KZY4tniYc9iKVyVnpQNNJ3SejFkoq9TFMvpWfABt2XMLDVWa14Ko2p6esPeNEDvpQpLvwcZJg2Bu3KuH15W6t4V",
  "key38": "KdfCGea9xLn3onyXPrGKM2PZas4TRcMpbt6DqK7jUkv26yKHUSYjYih3sKDeGn93WzPu7dyhvu4dNUNEU2yYJWW",
  "key39": "61WkrDbbGs2yNL8QwKK7NEBtLtax95gANXwFAVWkUkMz6biHTLs6tavHWMpJUpBqSTrzzmC6rjqRkxix5hkSuBEp",
  "key40": "2bvdB5MqNxDd4pxVVbujLQUVWYnhG2FAsTcsg4MPUxuPPyFEJ6wZjkEcY43T3TUwHvruxZY4LCyCzkGThykWmjgr",
  "key41": "3WactvuTp2Jr4fhsBadRwerg4WnUP7ytgC7VhXBbcEijgisCXyT2hMEv9m8NJmasXnPCYC2AC5JqDcyURJERhnHV",
  "key42": "4icBX4621CchiHFesQyMEkancfewP3EtzNZieCRLaVXyWVeaaQehZXPrPNFEVvggDoccgZTkfQA5ERF6csExNJyN",
  "key43": "5ZJN8RwcViAZCMmxBn3hqF9gQctCY6DVjrdyH9Wxy55Xa6V54pwM66eij9o7xFF7FgzwUH9MBgYzaHVngvKt7Ka4",
  "key44": "2z2MaJcG2ynn9ragwUmk6k3AVK5ofk7v95qvssEAT1RMgYqe3b2txzCrk1sNMZ25feTntNTxNyNFxo75nDBkas7v",
  "key45": "2XSMF7Q257BUWWXy1zrLMhqaFAbjk97Ev5KnwAerZFp7ia9V9LUwjvUEEExVquFDXUnSMWdzFVvaKLHGk5VYEPZS",
  "key46": "122AEvMfGV9kmwyUQGBiXPfH2KSF2sYyuxzxW1uw86fURURyGLXFsQZYHQXaMU9aYiBzGid6DZ4Noa9FnyVKRY9c"
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
