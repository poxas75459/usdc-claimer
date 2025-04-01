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
    "43Yf4k54NbsQBJYGzjjxesDYSKK8c5J4vMGrrmGxQqcuuhf79MQupUQ3qtAbcoHDarrR8dv9LwfgCyRXE1dSXumG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GgP85dMJckqSocLThKbPRnnDrFC4936SHcAkHsreLYbK6CSir8UV8RZnxXLxSnnRc8vsN9djpLSg2SuAcSiqV9h",
  "key1": "EHUh2iNaPuw51k9dZJ19gU34zR624z1vCfbgUpV8JYVBhnVSorf3wMaNq2VZbGaLCNe85gDrEbBNHrS9pFpSo9H",
  "key2": "oe9VqhuAprZqFHGoZNuDJux8AyDiM9mGHdvoRgqBFhkvGjYjj9E1fWbBRXqKGDgubHBDfaMCfEpk44uLrqtGp8M",
  "key3": "2n9GsejPhRHUN1bUPHn9NevvFwVWfWw74phsvioQQrQmXb1qYs1ZKBjZUXCA2pk5BvCuqT9RCjjvjo9Ke9nngfhQ",
  "key4": "3W5LUBJej3QvaFkPyw9sRSxusBjAwnpoq2KBnE3VD4UhMPnwujXZ6y9K1iTFPSXwSqx3eX46RZ75qs24picaDvJM",
  "key5": "cqyeXcWbk6Rg1ker8C3SdVPDYFkMWCrt2c3FUCkXLFakvSD71CtKF9T6KDS7p1GYFT2BKsTVd2gdKMyjyGTXMyg",
  "key6": "3RVA5nZjAhM3fX4N3isjmwR4ydD4vJjkBtnbwkcfKL3HnNH1MFZ2g5NLXNTy6jsps2psWBGcwtN74DrYFtXjTspT",
  "key7": "2p4dgFM4TrYnM3fktVYpd5PZBr7tKvvHz1hkcUZC61u7UrJLnXcycML2M3cdHpTEyGx6uXRzuZmVwSauRt32yNND",
  "key8": "3c7EdHH32LaApjLeE9D5AHqLdADNiKu1RMYLvAyBRE4o5WHtMmmeew8SEk2QoHScg4owpmNXWFjf2cXoLnSqhvcM",
  "key9": "4VvHCkoq7g6HSF8WC6ELyddH9pJ4b7PH8a3UczviiuE6a6amTQVXvcJLhoqx9b6ef4743Ff7Vg41eDmhds5hJwP9",
  "key10": "qtpqqHuCw5AGRDfwdh6iznCjRzRjyeR6WyC5qWCiLjhemN1RKZi6yPkr9w5a5vuuQdUH35WQh3S837tp5L1kwg9",
  "key11": "sLSxHm7aX1ttK5wbncoZYFkMjx3qKtsHqPv3DAKmGCTBtyV2Wt4nBd1oDY4b5gzmqemFcEQJAMjemyPuVTwytTt",
  "key12": "4c8Yhf94QuueA6Z8zwEHa25e8cNRVcYpwjVRPPyaneA1AeqruYa2LuRz8SrTLXYe5XnaypYrS1Rc4qCMVsPqZeUL",
  "key13": "4Y1zjyb4mDCc2SeJfnAgcJgmUJd92fbWmv5piiLq1TGjN1BH3eXimrXBAZHkTU1SPpagnSwxd4LWJk5fJFDqM3Tn",
  "key14": "2ZftFvbDXwhRC6Y4qVGhAMGeU9675wUVyuHz5yKCJ7muC7NDtPNvacVTXae6dRyzmh2rNj3PS1C1LKL5FWFMp2qk",
  "key15": "5TqWXd11DvXdJTc9xgVLwSPo1hRNacScrGT6QP7RSDxYq5sgQ1Cxce9BGUWX1h8oorFyZgE1e5uCMVdsr1nB6nD5",
  "key16": "418fUAvCMg4Kubd4mtrdzcSJjRcFLZaTSbEd1wYWymkpnZPc7w25WFd9YfG39Yt9ixCaLdLZM8hxYiGw1c2ZTBUh",
  "key17": "4x3tiNUXPFuARuJLyv2jFDRBUCGRtPK8FfLBxWxy3VMhP188zambV8NjZFo5YkXyTnr1qgDiLwCf7Uxgr2e7ckqJ",
  "key18": "3y53BNujUeVaA88QjmLsLyjpzQo7KDrvTwaEwVmCBLEMwsV8bozAfcc1rCrqs7uPeFyJd47vGs8KVgXXhcxjJBHz",
  "key19": "2uKz68GzjAYqRzmk1RPMLEWbABQ3jbm87Ks5JiZfjNj2fmySCkfpfzSZQp2kxdUqbELK179bBSs47DguVqA83hme",
  "key20": "5kKsmZe4wwtC1GUp3mLcDAHeLZJTm7xa2piNPLvG4Pi8G74m6xSL11TdG4nm3ubN3semL4RP4Uu64cXqpafTe75C",
  "key21": "3bzA6k5dCTMmUML13zAmmJuQRNaz3Myi8NQbMMR76N8oCTGTB4zk8nAbNuRjMsvmd8BsgDwMSXPMeCioLjNLNujm",
  "key22": "52MRZP3S1j9HwSFHpMsRkv9v74hSkay8Wwv7RqFahMUSYSYXKybevNiWoWqbPkXXbQFWFJpQSeoKGjYeT3j1uWJh",
  "key23": "masVR3SKghXLUHnXnH4zb45GJhMLJJ46pCy7Na2ccwz3BwiCvLhSSvY3JKg2on2J5tTBXmbMU1gZTwLiTTyocwC",
  "key24": "62FZufaWHHQniUfXLXQd7VHYdGedYjWKg7iWQBiKuJiSEhdfGzfLe95Z8yJ2oWTkJ6f9KeiMSaymrJ1pqMpHnSDg",
  "key25": "5KVfRA2y73YqofyW7NU9CqiEiHNxbKMnH1u8wuSFsef4zvjSaiZbHHfe87cx9U3ChM7enRoCHaDmSNhommhzRVf",
  "key26": "5WZYR8Yvnz3EaiRiGJSPu4D685dnsSeuQj4xhJ1zN8s6sVgzp4Eioqx9kPSPhfnqjzS3HBx19Kt3oQfkgh9Yofpo",
  "key27": "jqLn9CY6S9zNFmT1gAXMc7DPeNUJzg9Prp9YMD6kfvtEvzj49ZiPwxheZVLSR7MJJMUo41ebKt8CADa4DGQR3Yz",
  "key28": "UrD8yVWTV8tixZ3BnJzthap4uARY9svkXKPa2E5AE68XBwaX9tRrgfW4RTyvneS1WPchU78pVM525PcGBSUyqpC",
  "key29": "3LXUvLDGTuPx7m1bZ34EwzbEV8WVDghXhJJcuzT9SCvaKzP1ZHhNizcXxp6a65BUK4bByTpqn9MGwE3CJwnTQMRp",
  "key30": "qN7Q8vjXaePHbfheVbhRJoZBVaHvGW9m4FFYC7MAV1mGV6UHTBMoQLkuea1J5jZYJpRETwdDRTTSbENUDtLVK5D",
  "key31": "53sjrCy5doSbFNoN7nU4LwJyWKYXuqPK1EdgjAZevGJZrPUkUz4brY22myXYHGEGeGCWMUCGr7L4nzoTA4opxyaM",
  "key32": "28caSFeAZLFCY6JVgPFbRChUbEFRRXAiPFHxFBsCZNqNtmjFepwktBM5tZUrfnAqnF4PTYymZtZC9i4bKsBBLtV2",
  "key33": "AqfS7FUCWKGp3MaBvMTtJqNHGZ1iP5agJS7VWxv21FVuRxA3F3uoZBiZF9vo6UF5Se125m5rKHKABqaGn7PDwtc",
  "key34": "4F1NvzrgHGUmxdbcjQb9B7N1s8rdrY9Rd8symJtumTnDj6PHhTrMuUR9aXK6QcJkFa8apGmvh4m2KmH2tF9fxsBV",
  "key35": "42NrcJgLCWk5vGchChCReGmaxYbyvQpbLWzk3YtKviJVu1h1pUeUfHKGezAfpmpgABYicBAEKbN6Vh6Apb1hQNc",
  "key36": "pS8ehc2X6EVr4AtPx9PzYSQiKbj6eLqrWdDR3ARgCsDJMLYHeersft3z4Xiq3BpE68M2okFrXJ978r9MHkTqK1W",
  "key37": "5wDwTZcePLaKeqnmgH67yoshuuxY5kexqFT7EB8L7vVrg3PD9p3ws2vaUXG4hM38mq6xT2dZ5QVPw9Xbs2ov9ZXC",
  "key38": "2QiibVnPJveJCUXYz48K5eWs4PhgFEEuEn6QowWmQ5nozZEout2jdGvcUX5xF9DyhwABgCM5MQVrVwi7EF3iWhNs",
  "key39": "4qbZY7GnHp4SfsjsLjeSsp76fsu3NHEqTDMPTbbzZ7MYPvr5T7PjGoWSeb7vquVGKKpjg6d6TefXYU4uSJXE2E81",
  "key40": "3qQSiC4JPJ7ri4CwiMqGZBUMybdZdom2aozgTrmDrKZShXhwS4bTgw2csbav4yrKTnNwGr8D6ew2VQzkZxsbMQXo",
  "key41": "fZvip1X2rc726wT2Vqj8NrPDgf52N1hFCdenzp55r5ZFpbyxCEYZL16zV2B7AqaaGXbqJuniNWCmrNjvd8LXLE6",
  "key42": "3tkxcem7xYAoEPSAqxjmjLjqp91WBqTxxdcYFskrkogsJQU81NFdFkZRbzLeVpHB2XGp3HgJ1yNVAoUEJW5ZhP2F"
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
