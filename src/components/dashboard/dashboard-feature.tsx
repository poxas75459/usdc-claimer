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
    "4xMsxsibRDuMDdZAEMPAEzpN7MWgiCkBN1rsKA4GnhKFeJrsbJecpqFW2f7TYWf5XEWPThXWpft8sD519Fd1ihQ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57pRwo2Qx4vccYJZTM7gYGLntnphrXBqjBpRGJ1tE9Xoyonmfo18U2VBR4MTdKTUbnHngAUEvt5hKFsu7YsA5vUA",
  "key1": "TASgXriNC3ayX5wQXx5codGmFugsGWQdVF2iv2obYNjoxhJBHghdeGFbrXQixdbBx28LLY6PGp5hPL88CJ6hRwT",
  "key2": "49akVGvTW6HpY1DTBEGzYtnuQh2uDdwjrYKFG2c1kRTmbq51CCAFzKoAE4oRudxbDA4cVWdUrDK4NAyZULVpEmWg",
  "key3": "58XDDc4DatYLGtXPKEfjUP66aKBcSix6V7SRjakvkTQ5Kpq6ibkMLgH545oQSeRKBeVeBhD7DZXbf19kqxUZ6Koq",
  "key4": "3KFt5cBPT8jaRYRfFBi2favTRvh9dWiiPHtSPcyydGSBwwsKQeFQsaU9b98Lz6TJzqXDV7qkdsnQ2cYddMXAkzTH",
  "key5": "3iUntaUHNytxTgrdKmc99wWxW4Hm8oJbi3p5JbG9r4UFopdtg5CJAcwq7omH7fmmhVWgdjRK7ksg8qyDnRdNPf52",
  "key6": "2ke8eGhyT2ZTHpxXgZXjtbVXsg4ukYaA8Yat4eRKfTyEpmNFUJng3uNmvS1n3bV6uJGYjmg31QthYHK5vvKBuWw5",
  "key7": "4TbmZV3G5kecUXQTRwxMT2J3DeRRXbK6b6sEkwGq51s4ky8x9fDA44wPNjESMU7EgmNJHnamG9ef7dZRFxB7XpbJ",
  "key8": "4jB9rRiKA7bdebVyLFMjSPLdkmPEH3XRgqYVxzxvFx7qKJ28HdpYjziWEFdsxDzQtXRupGDfRhubZELQL4xTcxqF",
  "key9": "4UqUAPJypRTAPbc6pqcLNqBKV9vBwAhbVcep1tma6WfbExQKxYttkVCMHVbJ6pn5vVx3WpiqqwxyHbdF2W4eazpw",
  "key10": "5UWEVhRAxRf2fPEyoP24LYCVPGXoRusqi1Fi8qT7CPmDe8aJjL1ZsdUe1rRHKFP16QMfUEdujZUx3V2ApqngPYnU",
  "key11": "5F6DBxugoqbXndHXVSTBUYKVjAuTPmZk85dyHuzFcMaiEHPibGf1zQUkPmPB7awdNMa3Lsam8nYbsb9SnuxWXEa5",
  "key12": "58AquArvAp56cDB4nvbPph5y59zG1pMFftTM7pdpzMrKPrPFE5WdVcTPtPngnPHmFzqvnvJjrWMJhKDTnJQkd8U9",
  "key13": "5Vff93BtxsvfhV49Ck1rTNZfXLU1fRrxy1WtjdvuHzMFrLbxUih4BiX7jLLEMFnzmvogbAfFDjxMWg8ekWn8U76v",
  "key14": "32S2nxyQyFiySJCGbTsmLMTNKKBJXCvbWN11avxyMiprMgVjZxsBXfHrFeAiqdTQNDWhwcTtRdaZa1SCL5Ji8r7d",
  "key15": "RC5WbtFofoX4JkiuBLMYDfbu44cSiU3MuEkRss8G3yGPgc3iU6faMtxumNqWVbJgKc9qRJqR7qTfQeq2r2cJQyZ",
  "key16": "39qUyKBxscpbhzw45PDmd11R5ve52B2NNKovLR9fyxJNukez3rhZC2Y4r1CRVxagR1Dm4ZqqbQcGano2pBb615Sz",
  "key17": "2mBdDcsrqPGfwvDuWGVX5KBR26n6jYygMigem4Td93yygVyyQDA1Kpjtmv4Cj2e56nL9RvqgkbjYEDwdQsUquSCx",
  "key18": "45R5sfZkFMh51FXszMaTPrNMHG8aAWCeTn9bt8wSrM96gXc7TZpF7MRje6pWj79F4s4NJ7MsWkFQiEUko8bwaSgQ",
  "key19": "DbupbfNdvbJvXDZYN1qoyGtQDHhUNtN1vz5Qh1yKpMfxdUNgimsunho9iqUU7HaGhHkxLCsHMiKpKkArXNzNnQw",
  "key20": "35W8erXsj3iYefwc8XigynmipxozjnXU42kV8vvE13S47RC6dcYyXa2cvmL4grBVeoHC4wensoFmesH2sTjJVyTj",
  "key21": "3F28Rto59g1tY4YW8YuyyPhH9CbnKD9iyAek5CFbW2SLqXtCQJYC5hMSboNZbyNnZSqycrT1VV1ru7AtcXPUumL7",
  "key22": "2o7fk2bNyJNZRkjpHppwrQgv66wthgm53UFuKSb86GppUaNvXJoHs8KETS4UDQf1i44S9i941qR4X6N1DCnjwEtd",
  "key23": "5VQrBF9P8beHMAh4ALc214SsNToTKnccNMEco2rhDE5kpVX4Bd6jzyFLVN9edb77goVe8WPGC31KURdEKw7bZBpu",
  "key24": "MrWZ4sRa5hV9Fm7kobJwdM9r2cgoHFpywvQrXzHDUXQDV8Spp8BKUcmTmLMcakMBsnSz5BXjcoKr4cNYkYPebfP",
  "key25": "5QgSUmcGBf4E397GitQVMN6YELaVsJQbHjiRgoquqb1ZbVQy1PUWaZV98uApANL9ubQ8BW4knoW1rsuirMgwBGum",
  "key26": "5W4VcJdzNLiTPGHCDnyFWSc8T2ckNFyweJ7MaiMyjNJZLfjDgmwxD5mUfr7cqDXvsMgfEZuCgZQ556rzPqQnFG1y",
  "key27": "5SyqfFfBRPbaExVS98VZFgRYZ93asdFLoYtq4WRnHxUZFTLW5uwVfWi9kmquPmPZ1W9DbVdFQoo62wNmkUkjUpo1",
  "key28": "QRB76QZv5BfWjPxnnbBv5ojV4RcVHVN2ziPuQDTCa5BMggdYaDe4U7H8LbPeiVVrGH2CP5cVhGsj5MUVqreFbm2",
  "key29": "28YyhKJBTXFazH5a4d2JXrFC6Z6RA8eGoCiiGQfChRiKbTeQqGfm92dN896tV2agkCqN5xZtThfSTGX2eWsqifyd",
  "key30": "1GWcxP7nx5SFp9RGZJUhWwpfkk9Zu4CNnKzz8FUjCQVqpDYN3VYn86vb6S8TP9UZmF5paXatpCYS19EcuuWwMGa",
  "key31": "2MgR4A2WJoG2Vhit1U1bmUkiWkXBUJZif3ZdSzr7wWvc8Xi51tRSDhrtatPhJyktjuaBreRSD1PA5EZp1SWkEyKx",
  "key32": "ZMokdh3gLw83J8hKdMEXCYB344xF2mko6QkC6Qo8FhtUxDSEYeTUVmuwaFpow12ALFwd9ugz4u7E4uNDfh2drKm",
  "key33": "5uNSdytmfAGWY9e1JGjiHjD8sw5yTjJetAorES4N4k2ot46i5UxQ9wSPhQKafRa6PQ1o2bpVPyvuVkzE3rkE8btn",
  "key34": "2hx9JMTvBKknsrNKCBgMu113Tf6hzcCnHVD79AmwBpLWwrbr4c7y1cBHFUmt8T8DWbSzb9amKk4pc1X3v6nsi9n2",
  "key35": "5CF2Y8VzUmHdSQGkLSTYWqgBb61bpfCzZNPekHoD2ndsgjCUwDH2oWGQX1M4iqJHeiMqxxAxvZ9ZfLoSvQEjkqRU",
  "key36": "4eBWvhqPJqTZWVJFvh5cf1n1zp53zLzAyxCzCbWXsQvvPazgT5HCPTrWiyKS5e81FdymArR5gmARHJq6QG6kDFAS",
  "key37": "3yQbN4ApyqYeLCfb9cnuyjQ2LA7idS8QwJgTC9KDEav2MzKiV6J7bxQYHPW8e7MqrSSAkLukMK9PKvCtkyGr1oLo",
  "key38": "4vcQU8wiLRpBmmXhSVPp4D14ASvCTjBu4FyPN8v3gWvzDN9KfxTqkvN48Xazzjn76RcrJMohC2CLgMrJ69tEufni",
  "key39": "vSBZhUXNpyXwFcsVN3tz9BvqNEutHpsxuesCEVQGukeufyqA7SSxBzZaZ4eEV13fQpNT7nxKcRuHDCvMo4DfADf",
  "key40": "2bTxsKxVL5u3EUHGScG5wZHZcmpwehkdJ4cZiPKQjSNmtcNakdBKndQytepUaehvuCM9EpAmh7MF5HgQUoQaHh9N",
  "key41": "3JBTiibxED5qxLruDmEB4SbCrcAssPFaHyqC6jQMMXFFNBLzMNWh2NHN2tV588zXMqcWU3fzqtAYcfdwkEJrnze3",
  "key42": "5ssep9JVpiN4P9Na7NzM2NYQundwwMJFMNuyts99nNHfJzeYpRxcXv2VnaY44TXQA2wETB5MtzCPEwdgKVGGY9mN",
  "key43": "3QysG2CGW6Hm7t5xquziBPhpw987BeocDZZZDmXYHgZEoyJ1Nepn8v3rp7oPgS8ttUfB7dwQoeGVy4GxeT5PKQPc",
  "key44": "hYwdgUzovc6MbEhrjGj9B4mJh8UtNdCgEW6NNJ3EMDkLzNvtCHfbjGAa4VNVuTDZi1qhNiGJCZ8tdk5re9HJnkQ",
  "key45": "4RTLAtAGLMsauNFsum9MQYyzweNrD513CLZB54WoMsbd7q1gR3wj5EDcR3yD3ZTrBiQA4VzZN5Xsqh8RnwDZv4p4",
  "key46": "aH7NeFdtdissDCFWhSLsJm1HsLGLLujTnGYRudniexy6oK89a1Nm5RL7aPx2C72zzW33gQvDfTckewj9mEoSqqr",
  "key47": "dPM1384gf5o3ViNgSiTRjLbAujGAh7JGb8C7FHCb9KUbGrYPJ96BEXLiADDb51H9C9Y7R9HQZWrfooELYLoVrgq"
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
