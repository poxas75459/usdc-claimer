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
    "4MVPzd1dwikBHUoh4x74Qa361Zp4K2J8HatVas6vJVt5DzgQiJApb6TziYC6DWb61kYQhG7cHNvPFpX7FFp2YR1u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25u2UvMrxBfNdEJ69KXevixjNdyWimiCVKvGEzgx4Gx5aNcVned4jv65NVssxWG7LQNnCNXdGEmUx33XAWVrxfFj",
  "key1": "4fA3WjZbKEC4fjSodfiBsWQAVzCWat9ZfTYNi5jdfHrzFBAxgAwu3kFrt3sc9wvSKi6LEpbYn6jL2K6PCpSxEUr1",
  "key2": "52RNX4PNgJvrFCV319njAj96HoaPJQwZcesYFo2h6kJaRgms2M8ZsgrVL9wRAW1ZZvk3C59MkQabbzgmim585fH1",
  "key3": "2QByzdoEYv4x1q18cx12uQmFR2Cty5ED79XEA4ZUsW4xNNYCFik9Retu57pn4A12R4gxhnewGLxMvd2mevPD22mt",
  "key4": "4LvN83HxmniTfBcNP6JCjQSGu2Z4ZCwmrMLXrUExpBYkftoTtN9RPobbZZoX83KPpB8EnA1DbqFTgiy2USEXDVHb",
  "key5": "2nmXwwdeg2rkWYZzVFobXkrxt45idGHH7M4W57nSSa2eVKvrS9C635RYinbZEWpoGRRjoxCjz1HfvEgyTEhvEv9G",
  "key6": "2mVKEwRBV7ayBMp9LA8LKkUHR9HRUTsFX5fi8D5jXJW4NFZFzyvtSwMpbuUMS9HwfcYWo4rxn23woEK32SXGJsPx",
  "key7": "3WM7vfW2TZT86MwyARMB74wULjeePqDNp9x1tMZBLfw6m99jXZ24TJ3Cn6c8qS8pJo5LkuSp6ZdJmWXsobXGi37y",
  "key8": "2PzTz4CeAK8Tcn2A6Xo1ZNrbTepeTb2sTBfJnfHEZERsexWeEzSAJ4NJ8pSsJQdmNonTXautjktdrjHETuHw1aVH",
  "key9": "5VrrxFT9TgJ9MUPMdzoSuLKYrrWEh8faqvkJ31RbGjNk5PEc27fKUfSYWuB7hnvkATihnV7EzqhSibqRAWjyt92z",
  "key10": "4GDhnNt2DTJsDy7E5PVdTDi7pb3paXX9GKohtccTEY3R14pZKdCEsWaRTDif3sCyHrgpdoJTxp84wFwCYVjVT67y",
  "key11": "5tjXfwzKSSaea8wis3uSHbGcg4Zio7skMmd84Bhbt4c4Dn12o7Phv3XdBccPCHjUgbympLGSDRyqotPwTkZJtvNq",
  "key12": "4EtMWCU8HkSAT7iEraUhkSrdSuWwLFJHMbusLaJJnxYu7VdJLSL5zpx9XjWrX9tUabrLpadEGGQWz5CqCKUhxy8x",
  "key13": "5MtzRHrdmxJHjSd6hZ1QK2x2c26RzdAEZocNBCxHXLxyaSYjEKzVPNNaJ1hmYssC1UAFRHSVVrfjMsfu4HFVdw1Q",
  "key14": "2D5c9CroPF6z96RxbLzndaRY2k6do7pQ2nBehr4S5E2uXz8SGQcntrccaJeFSCHc7znRribjGFKBuAPpdkxo5NzX",
  "key15": "KaFGZkQAyepqk939EVqp5XvSLBxXeMdR3PWtVW7YG1XHubC5HAzeKMabGGDCk5KphhapSs1cXg1EmgZmwuScXc6",
  "key16": "fa5rHhmn8K8V6ucj41REhQxtfPVyRkpvtowNpLRzhjYhtEtrr8U3QsMAhePTjQT3KTyboGmcexnHNZBXiLjo1Bs",
  "key17": "1YvjrnFfKLMAbMz1r3MRPcnFpiGAHsDf1KCK22qgh6oaqit8JSWj1bjjKRGbnHFprE62FmiWFUMRPfLqeCGgnNt",
  "key18": "5drd2HjLcHyqrdC22Lu6eNdYhV1T7ne2qcxKePFoNHq1CNs9fKBJsT24rBXtewT2vz9EQrfnNRNZKGcM2EhU89LF",
  "key19": "4P1g7VrVfHGCcdF2cTxesXHTVVHwvtJevmUdrRBcT6L6SpaTuFHM4mnJzAHTUufeaK5XVaJguVckQo46QiQ7xbxM",
  "key20": "LEJf43qgNLYTbFTUDHezaVspN9WHNrWJxZWi5PgqwXN5C9paJowPmrYLdC8HtmfAgngTme4TAdzK1HCZZ7dKBDM",
  "key21": "D7NGgX5J8WQY4KNBnNuwoLcs3yTB9UaWyVGS21zSDLECAKk58rkAqRsHAzpS79Y5paUdREyHZYt8mPDcin8CLsh",
  "key22": "342eF6z9Xr6EoroUvsUQXngCSMrboRi1J9zyhcVFVzECVLuyCPL1JvusVKfTrkgUR6BhD76sDVdeANHLrsUbCgwi",
  "key23": "565qduHHBwAhbG18WnNibZSCr7cYjczwamwVxCsZz9joriLaghz8YxgPqAJGybSHppHScziHyzAgzGug2eAReyjW",
  "key24": "Xh1ah3mcn9vjZ6CU8mD58MxNraFwxjM7XoLk8LCi2HNgpBhBXYxdLmwF7pLPaTrhfYGHKY6jSStBhuUWG46xgbH",
  "key25": "3LfigmSubQa6p5gtZ5jri7VCuXbEpH3dByFD1aWQHENmNV4CsF2xwsgkcB9ziHH4vt2NscrQC6TgXtY1R4AbpYjN",
  "key26": "647ArBK956uRJd4FHk9gf1agdfkzj3AEcaBJ6cALcaJSEkYxNrZiAng5VVqRNS81mrgYpA2JCBYRVyZ6TjtL6GPw",
  "key27": "3PxFo348BwWoQ5miwftDcXmADWVJhHzrugcurqxTrtPwcUAPCDdNQMhdydq2Lsq4GkHQjrBNWayfEBvvtXPoFUi4",
  "key28": "3xQkUutmHL3P65g7PwChQkrPihuYKDVyq8t6C2JPaMh8wivjXNA911RhafeaXBxQqGFfSASrg3MQB9ZN7oRuvxgy",
  "key29": "261CFyLky3L1234pSLoTET86B76HofCYkcCo9s2cUyYxJpRiwuiP8VbsZrhoXuu2PgsjoGomFRjwnaP2q3mWwd4B",
  "key30": "2vD6MxNjL19jpMMNgb47rR4eq4pawMHae2hRmHiZr9LtAzjJEwKNYwsNp2ZoQLfQQGeJHYkGLcTdtPiTDGUYbfpg",
  "key31": "3fPC93a4zTiM5kbd14aBvh3a8gfKW6rjA8bXPz66PFE3aADeZV8cst3Lqv1Xfto9k3FeJL4c9nmXaSP7bkkGkNmA",
  "key32": "3Wv85MTCTuSUmXXNJayUZLMvgaoguLtK3kVmRpwieHmNytvAi15ECPJxz4bTJxYkwn84aXhjAsxfk3NszPn7vKAS",
  "key33": "5YQVBeqKAhZXKg9GyUV7AXzwuy7jZDX6Hif1S7nKy1ivF3W97iT6qVU33Kav8NMTLsPqUEqYf6vVnS7SSvrhKpHN",
  "key34": "td8zPV1AND7dWfo1TzHrdgigaLYxTb7qWZsCaD2YEMb83nGJoxv8K4KJqx5rMFu8KgtPyMmwXCP8zi31uaT4fmh",
  "key35": "38X9NNuTgYBU7LhRF9Lhr9MFX8ueRatjUxdiTFgM2xLe69pwdZKdLq2GjMRKhHCuLTD48T8suP2yh1eoYEWz6Jjc",
  "key36": "4W4gs9b7xGua6CSRbZaXHxH46xnTMVWJsyfHJ1vopnGdhWTDxTVuq8QSoP1SJ1ecE7oNGL6CQUNoGGQ4EAkRBBn8",
  "key37": "3eVE74GEcqgLmoZT5GhRmAAsWeph6t1SybmjSQvcjMKpPmPmuxjWbEpdn5r2Vo6Jcrvu1W8Rb2WrMyuLXtGTJ3XH",
  "key38": "4HxhN7P3kUXYhTCkxF212kUHavVm3LuJbVCQEprsR9v8bQfRZVp6ndD2CfQLxYuXES9aTZHCUw9qYj9NW2Ertaei"
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
