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
    "5QmWyBs4dVxzBHqw6rvabzNaLqY76LMU1SWaja58eFsNoqc4Qt7pRy48ZKh7gbopc61PuGoMNXqSwyzCx5koNBXF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4r9mgXA5rgdJmWRu2ASLHv5XQM991vANkteHU3E6K49sZXKgqS3gEXDcwjpgn6tYhGn3PkYYmDRjujroLRFYeaMr",
  "key1": "oZ1W24nxNS5D5N3Fw6Z7uJrTA6sqDmp2aSQhn572VX51Edeso8hsNPPemnHC4dbXx7GfLFpXqjKzzJVpGpfQY7H",
  "key2": "2Cb7ynhwPAXYmSvSwP2SZZGxY8n6Kf6U8PYFs4UrurUcTSQAdsmUzTxjMiE1ZenvLueZYWt2enmwAaSqp3WtXHeh",
  "key3": "62h165hyNJa6D7f7XsGKCktTt8m2Ags8b8zBU1cMUw9uMdsqxTZntvb9JTAu8Zz8pLACsLZvybCPXYfdK2P6RX3R",
  "key4": "F4UV3sJ432MSep5JMEbcsywqA6R2KRKtvEL6GQ8c7K9Rf9ipEgbNZwpvFZvQ53iQqFCQ85HowEkAzbss2CBXCG2",
  "key5": "5hTj7v5azbvYSvpGvzFJU4rUdEbR2V8sEvm7866DFFJqaT1YDyCbSiNidVt6pmU58BxmuZ9JHLBMADpmtyV7xdKX",
  "key6": "5gDHMgTgA8c8GwR1gBDr2owcabVscHoc8d3npr9CiNumYGUXtWCWbVdci1fMhVnDLLL6FE5FAPW348SNz76bTkXz",
  "key7": "54rSrAjqKYuePyVAVzVhWSnapjmpH2p7UttDbU17u4Jv8Vkb6L1FyqjFj7wr1v3dqfH2vN8ZKyA7t78vvK6nnTL3",
  "key8": "4eQviFr6zWRnqAbwNNfhZhroirUrZkU5aYr6CcQUPgvRuQ3n7EUo1ZLpgf4nqzPocBBck2QYHgSNay8evJDEqyuh",
  "key9": "5U4RiTro6UcvzchUBwmmampCNTTxg1P7Aa8FPmLewjvZ9GDxVwVVAad9LHANfPJkhm1Vh7kkFyRo2dn3AppkYqEy",
  "key10": "2yzkJhzkFzrqwhd4mqHdgEwUyxkHiLTN43sytvhVfMatAJXXEc4j8QH6QKNjBtnK1rmMEe66r8XqguKHuQPeJeeN",
  "key11": "4HuvScVFoZ4qxT3fAQT3MmXj4S1Ac2jm8EmU4QviZDaZQ5ccX5kkCDBJdjic2yaGVP5Aw2aQKYj2ZE4Js2LtpnD4",
  "key12": "39ucHduR5Lr2urNNRBrt8XeWWYya4erh4ThvuNTmnvgm41eJiF8hx4BEdZmbPAVw1FqhAsteF8PHDUVVQGZF5f6S",
  "key13": "4wrivZFsJyqbdSjazbFseSCgghvBRi7c3wttvZPDZSFRxxkb8VY3887xrDDAbqVjzUhPPHowJYnGnHEEMWMdht6",
  "key14": "2teuTybma2w91LL4XVrwr2GGWSvLXi8F4gcBSjCBrQ6yr8D7fEBPrPcJv9RkMktbv9fWrNTFJZTwHdV7mz7c5Tba",
  "key15": "sW9QgTmfgzVFPSPckAtaN9rkBAsXCKjVrB1KCbyoVGupcxZZZujpg1SVAd7B5cuEBPtRKLy4cj9XykuRcDVUNeg",
  "key16": "Dzjx4FoZr4nykwX2yBsTTpJRDtHmtRs1HVe1fcdDpsTMn5a71jFDNvGKUMcc4ZoJe5bh75eP5DUL7rein4qCJfW",
  "key17": "4Qcb1yZKgn8As5aNf5daShYEFw8cjErta67HbyQmTCbRnZyBxYEpiSFaawX9BPyj6CdxzUtXkGz4342LF3M76VC7",
  "key18": "67Ki1wvtQikCFHEtMAfhPYW2QnVzFhpFa3QG3HKVJ66YCpcufW4Nq7qE3ZyceQnfr91ToMhbSTcG577GzPGJe5nH",
  "key19": "5FmxRUbdmmzJyb1UYL5GPTRnJ4ZLzc5JhLCWPQS7HutqVq6Ac9bwkr43JxTpBW1Q2QBZiFVC6RmdfiQARPzta3kQ",
  "key20": "47gNgseQp4MAFzBqw7m4dms6j52U2crRoDcC6LeUVF83zys5yv1M6Y8EyCNt2qrsa4yXSM4BwVVDzn2Fumgo5nQs",
  "key21": "5D5dTec5PKJcnWP2prnp6KbYd7RFWDovDN3G668gY47Zz6FXD1n2L1J4GK7CnETJnsVjAMtx8cxqBYStVdpaZkB",
  "key22": "CtN3doyHmRN3vyRPEKtpKKfPVdS3ABpiQP8qPRSNHNoNwJHSbykTmQHHhmRVvJ8KiZtUTQGzboqkKkCphrgpb6i",
  "key23": "2DRSc2sdLjkQXxUji6H2o5vdmM5sXqqBKv7SJrAcA7VXMxTBmq5gqijxqz7hWRZ2GT7PXBzEMJFotpgsV8TPJpSd",
  "key24": "3w4src28vs4oaHz1L6AZCE2DTDnRJTEho4eMrFhhoRRwa5nV9odsZLfgwSZuA1YjEZorjqT564QDsVndH5bNtJeD",
  "key25": "5nBMkewQkmMYBaKuHe19EmtE2T7wov8P3tNMAjc4N6bYor8qHpVdRaV4e6V9iMJMq7tkhePmBP12KMfrchxhLPfP",
  "key26": "Z4Ftx8JUweuuPcMpX7xyx7FTnhvgk38qBcCKKbgW9sEuDeuww3rj3YScJP1T5uBmNNbqT4PXigyDbFz1rM7ckLS",
  "key27": "3ZbeDxRNWuiYgLiMWYhp74sfgqfHkQdk6jhLMn321eEFinLx1Lu9sxv7D4UPKVPgyajXMGjEfTisx8YYcGdUiijn",
  "key28": "x6bSCPMss5powSHh32SzHiUkni2fT1NLg477qBszNPx4XZfCFgGX52fypF57ZpVW5QhnvepX6vYm5ar1Y8SXR5N",
  "key29": "5MiP3iKuYWoZhwN2RNN6KyCStZ17DvRZ87s78nLeayqjf9zTN1t2H68e54w91LUVPuuFAjcqWPTjGpbnajZbFXp1",
  "key30": "2ZHkUC5Hp45TcnVREE2VEN9DM9MBKPiUS3h1W9DvAkh1eZhbXwAQTeUJvHAtY8MoJherTALrQ3WzxAFGm8djnDNv",
  "key31": "MVgGssHVuUtUXAcBVB14UYd64XYMX6ToGFfijGtjC1AfvUBw1QjRLF5nehoBDdtrZnrairhvCYramKUD8cSfBbq",
  "key32": "HQhGn1u8Jy2dCijA9VRAqeu3QgDzyF5bvueFmoJUYfamA1BkP7hS4nRqVPGbhXRysqgB51svgmFAjaA2t4P17KR",
  "key33": "2r47YkPP2cToxKVytey5Xu16g8qC3186AhFxiK4YoQzWCiRvFzfT5qVYU1QiSwFLbrHHyV3tngxscT6Kk6sZcqBx",
  "key34": "49igPMkqqLgT44jZwCzGEtxSQ7EFAsQ4RSx5cUiBMfqFjEJmm8r1iH4ZxRReC38UB7hw8umPFxdJmGgL9yvr3p8B",
  "key35": "2LW48n7GWnN2kENgkPwa9y37SG8gBDfpRnri3TKio52StHqFBQkhHMPWhAmLWbbjEzZ85o1x1iLGN5qKVjRQKi3p",
  "key36": "sFSmycqGprWBph3nMTUukBT5AWJrndnff2q2jhQoo3zBjFnkxBHy3mLPEBronc3PNDsjF3T2Qo8SPY5eMe2Zb9c",
  "key37": "457Wq4H37DrXfTfrdbyAewjmU2dXNxsghhqoZqZPXahwdcSZcQaXZYyAYeYaW9qHhniCwbGsw8CBkhpHTpLCwCg6",
  "key38": "5kDffgKwNCVrjzgX5UhseYw4NMH9kjzm9yTZS5Vmp5VexgahcfKgXn5HdPsG2SuoZn79TF8T4gUPHj1vTXRSuJtw"
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
