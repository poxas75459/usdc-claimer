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
    "22XmY463xbXjjGTnaXk8NdAfj9xgJzKihhkXXn1Dk1SketRLg1r6hnnAD18kWg8SfUBCyvaYiFYMK5BMXYz5CUuM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w1mLSn9t2sJbgyH533f8Sn2RTUTr5icvtuqGarLabNdbXEXPD8qWq9PnCRh3uXARrUyQnTkMRXbgE6TzyxCXg75",
  "key1": "5ZZnYDxeeGLgpZ2qSVvukWvV2GzaqzTv32MHBcuk1MD5A1qYuJrvXrfAzDzGFhMrGULjQmB4rv2F9QNbKxjj1yhC",
  "key2": "333z3Xtgzk7WzoHPdFLssV4VoyEL3W7MFwG6rPr2sgyiYw8FvdTf11KXz7yod72784FSX5nQYaZSjnFwV2bki93u",
  "key3": "5cijQLB4nf59dPvzrUmAf1tTL8Gu7aJVTRMND9GX2JQ1qt296d3fVZ5qwrJe11XcHeydzdh61pV6ctfS432MYKFS",
  "key4": "yNXsRZu2o9ojnn9efChkEnSnHBPwAV483tSTWVanRy1sDAuxZRf1krEnRNEgKithnJWy4AVznrS3fmVREuwj36V",
  "key5": "3UB8qJ9ZCUK43DPQsrvXMz1vvKSnFd9SJLKEBmaUypeHX6WNf2Av76EzZFPY5ryjpddPmr4BjVJFWocdRvTWW3x",
  "key6": "XK9KFdBCFuC5LmqmwHP8dCRhpgqQfrADygYuJDz7XSv5sc147yDsxkHmtfLytJJmGrnKpdw4FsTy7qsP7P2Ttqd",
  "key7": "FbQq1FCeX7kvKE59PpUVeQTkSydKQ2aXxSbngbD4VdimDR2XrU8brk8WsAUzWonFFPiw1ods4p29MhdtecsivEL",
  "key8": "54WDUj4ReYNDXvBjTyL95GX7Mo5K8jpR435B9yEsoSHjMT2PqmU8sXj3ZQakfiw5r4AG4TWYJVtzd1wYETsw2whC",
  "key9": "5MYoQEL3DxTU2hYMTLjbwPYgSqbTY7WFtLUkK1u4fwqNjBnZ7rFwWHLuGbaqnHDLEQv2D51YT6W2m24w97MqCYqd",
  "key10": "thACoXaXm6Hjx7XrvTWtfreWrxz5ozkQSXJJFUoPxk8EGzgTPaAqVixBrLL21Sn8vxWCo729YqsiRUoiXKqxaBV",
  "key11": "37fecB75fZasN44hTVqgXYTweC5QAzEPikWSckAZqmgarTueKvhh2xqY9c2zXpwKKYLya3ahNkxm6hqsTu12JLmc",
  "key12": "4Kydf8ieRnE8sxa1vaFmCmF6wBXsHoRiv8tFKT8tmed1sTgEBqAZRmVjwvinebjhG6Dc8CuTf3BKy62DWiXuxiFA",
  "key13": "52Q4L4QBseHyHgbRYdRtT3Dew161UHenmsBhk6ZGvjqyXUQdakucEy4v5neRVKABFaCvMQz9i6MY41cpBKeEtEbb",
  "key14": "Rcpa56yj4Y4tSmhwCJPaHU8yoCQNRCbodEswnFeGsK9EKgbXMiyijocT7Sx6jpwUcyJeyPemXAVQcJ15nwsfKA5",
  "key15": "3p6De3iEZPXQ53etqjLzZXrbwkpVejhRcBLTrmS65Qs2cj6PwTMq3iZrRxeCxL9tDNtsuP79Dz2gF5eBzBDN9bdu",
  "key16": "5TJjKhQskdsvkkqwPKH8dNJ1j76h67qDdN21iVDpFZsNM5wXwr8yNpm49HmS82gmmYWkejGBt8y9EBR6AE6Z1BJc",
  "key17": "4rJkszsaMVmdjSyydWoMMTuxRGmNiwm1yxYBsgperfo3fkek2KdT8nycYbTzNQNSZ8miirgeJ8jFX2vLrVYxXUCp",
  "key18": "EFowWsr3Sx56UqJG798htjPEXwWGUMs8dzaSqAC1Wh9dsLkhAW7VLtTwmphZZjcx8nbsLocaukLANjetVKZoXy4",
  "key19": "gKcFuh8wpUP3kGeo8cgPuHEA8z5iVDRFUam8MKZxi98aKwwppekNoCS7RRgBcUMmYTcV22hLfozZ9jPphQ92Qhc",
  "key20": "3wZJWUn438DA3ctDxePMSyHui5hFcLM5naaVmLLgqSdXEK2F3SUtdBhZnVVXjxo8PMNrsd46ExzBM7GEfQNbdH4C",
  "key21": "nbbRGRx14ZwTGEGK3X86WTNyrtGALhzoNVb5LYP5PXzth1megmS4u8zuvTgFcoR5FBPvmxLJmM6X7cJFcpyQAst",
  "key22": "3JqPHp6yqsjNkXUuuA1Yhw4kYpqQq2Ch93Yb51KfqHwixi4zY3Ro4dMCi8gsrmedvWo18em9zkjJaRDQ8dSXcQS5",
  "key23": "4rKozuDNSRMS6zx1GtRskcSba78GUsXiyHBuAYHfiHCMjiqkc15r2CCL7C1a6q7kZngBS8Kxiui8FYz8JahpfcXV",
  "key24": "34BtWo6E6WAKtrV5P2Sztge9KjZZQJ56r6APY5Yr7KDL2xqgecUVN2RLkqNzHQt6qNHEkMP2WyCQTg2XjubALFDZ",
  "key25": "4MnkSiqgmm5b9gMaTk3ghRfUzNYc3XJbvq4CiwJ9DxAcNVEH9A28W6WMYxNJchi7FJJDeGEqtPJbPg9EJMRDfPRB",
  "key26": "2NRUU8U6boFLXiRJLaeLMLYnmiFEvWWe8pmEPNQZz3maoehs44ZwoDhHr6JhdGXH5hGgYv99TeBpGiHGVBantoKQ",
  "key27": "3BGGcfheyHUTv8Cyr8U1AHVp4ixXjKU2A84QwsxkiZBfw7jjw17nyLMJLQXE1TGJPFSrxknbkbhzfgGRVdG5i4az",
  "key28": "hLTZbhfG9JkN7VUqNynTBAiSdqcjFyKqxYMUBWAJwN1vTvYkVj1oBFNQYnxDu6hc5v67eRn5uZMLQ5vwLuhAVgt",
  "key29": "3w84UwiCgKkRo5SRBZbvaJD6gXELXQKDuqVPpRDAU1DFFhBZXJuMhrGsMJ3xV11dmGhWvHMhaEpmQfSQJDdvSWzE",
  "key30": "3MnyTxEQNP8e2dNkSpDBDzLnscaViZzb5HZAZm4VoRXk4oUkuQc6eyPr1SrnxPMy5B41pdiBMhh5XoGQyv4jEmax",
  "key31": "xufj5YrFhcJKQppLkQiZKgaKjSE9iZmkVwZgweWtk8FgVmzpS9ysZAHcYFXa997EchncQgDYXDxTkWn4JFyeRbk",
  "key32": "35SRphj9PMZgX37ePfFs2PbEf6tpKho1q7q13UWyKV9FQhUXdz7MrLkG168nJNRY9mmbMnMZyjBidihBqaGtAhAo"
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
