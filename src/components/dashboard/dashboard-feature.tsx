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
    "3rz6jd6VxMbTeYvaQstfdCdkqgNUhKVcqwAeuTbwcU3JJdRbbrTKWVP1gLDdGUoqJex5NkUdovkRB9xEncJeQ2s9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58t37uh5k9uRQBPFV7KNHDjii9Ve6Sa2HkEczFA8deWydeCXmL1RwPDVJVLrkpgCBNyLkwzUFPUSFuNbYwhLTgv6",
  "key1": "2LDd8Y53MCjYHbftwHFPzcUCFEjp3Qic8FJg5PEcJtBp5H6zCnXcYfrSGRYbNQuoW8dx5rk9GGbG6NJWNcCAUEsT",
  "key2": "3tRyFxqx5LAJ2ye7ufDtQEhbaNYEuinSnqoBGYDSvGpnRnL9omxH3JxuwCkho1EGrfNLPjsaioijjY6QAmbG9gpw",
  "key3": "4gSoSmtSdZx5kzzWXyERnLEyww4Uhc5qMn8fqSVozWBBBhqkdWJKBJ8ENATgZR3txJYxXvv9grazjVwREU7uXjWA",
  "key4": "2fhgw7EJEmy3e9CiqeFnnxQ7dTZWvzJeJV7sy5JphoxJBnovEDQSfN1GfXEL6A7XKTt57FFda5E8VUfdspvcoky6",
  "key5": "32SnpkvofbgcKDd4qsQTMm1U3MNivTcgDLHQk9iJUETXd1i6coyjdEomeEdwCumz6RsqMs7e2ajkToPhEaiUeHmR",
  "key6": "61iNiUtNYjVrHsRMrjmmDkYMkwK1JigeCaNwWu5UMbku7FPQZSYQHdFqTujhCbaVDGLXadRZKjuhRF3Twdo1r971",
  "key7": "Nm3reL6rrHzLNvHrems3srMAmD6AVgdHgp3hTjZ3FHj7VUjndo7fmKc2vJ9ZziW9SyFNtApC1sT4VpG7G72wwEv",
  "key8": "4oc8E4ke5oE42WrucKyAWDsReziyF2xanotqVrmURfjY1zmYawrLFFrM7gZ9in6oShwjHGsZNXNSaaDhg2swvoCz",
  "key9": "MELyzt8kDFjWytKXqWKw5JPybaHwMUWHo3gF84ngLLEbx7G69sg8Gq5kbvjcWY8siG1UZUyPR1YfE1z6vERQ1JC",
  "key10": "354pAjJpP6zaNzDxVgPMHtxZx5v8c52e3q1HbRa6nqFXLikMbnmMD1Pw16eUjwUoNQPHYpFS1esvSkcBZezghAxv",
  "key11": "5avsugZD9FzR4V7BCrKtr3BvtUm6ZLNbm1g9dvUXd5UjxX7GhGjnpPA2JSaqR1NcfoAkN3eNL6ED2Ns93vNFoXUd",
  "key12": "64DwPik46BH2XARv2orDS6xpEUmVYw6bpYYjF35mm9ktoKL1XnEPQTddwgJgZWMQTzCCX21zptrysDtLmP6vGPQV",
  "key13": "5NwLfmF8Sc8X6gPTxXVEwjuAHQGHhqm8XYSsW9VdoyMFs9RayDQhgH8ETGzH6b67N5JUwk1a4p9JmZ4g7mvzzvU2",
  "key14": "62M5niFBerm1QbxcD6TDTr2XCbx8rpaJEbsQFV3nja4JjJnGaHkUTHxDBPnHj8sPq5ueucQEfi3gAVf5D4Esn6o4",
  "key15": "5dtjKPrVErB3j7Yex7MeyCmEX7dd8RAPyW3gyo5iht7hEzi9euh3ykZPoaxbCrTRnWVDfWgM25u29kyeUYKjrXwD",
  "key16": "2j8dvroD8mdZzBpYK99c1edEfoaYMpuAXJKDFuTu5WfT9PTTajQvxUH28W4uuuRDPj4QsdrXcwKVXmrnDHFuvR2B",
  "key17": "2bB37V6ETGAHgJeHSSpfjqeAeHE15jANaJ58vacFCcwnGPabGN9u9V1SHmYMWcK7v9ys7u88EFR6tnYgYMkaBKkX",
  "key18": "4YRKsz7uxjK7QNZWrZAWzpwme7s43mRxQ72wPaR6GPJmtQCd7n7kM43kWygMgww8b5Mqa9QXxk8CxNG8TS82rchs",
  "key19": "wkvdRnrtPARGoLeE934AwZJYmHMaVY2ZJ7en8grLnUWbFvhVii2p2VxeoCuTVkTDKhe97YhYhxtY7UCPQta8KJn",
  "key20": "4i4sepvjHDYy6wXSGGTpZWHFTPrYYruGeB1hWuhdwtb2w585E7jvShcP32Zu5WpEpJLs1Scdy6gg52UWmT8DfT3c",
  "key21": "C5UtWgbGhdeCEPRD9t1MbM8oNSJ1gseQK6hnPsJBTQTc1PD2jY2jEA34SP4UHskV1MrvKxcaJMmXEFtv11NKqTr",
  "key22": "2inUsVqMLTqZF3VFoeqoBAny483uiuBZJGST6ofwNPJJWfUmkNQjZjvHjKxzZafomzSuyTVEsEU1HhcecZitXt5h",
  "key23": "4JUffpcxypi269XcRcrMYszcqdwhf8755XC6RkzKu4KYMogKD2hro4kW8u9ZKrnKmujhDgNpRFuC8Rqbu7ni84P8",
  "key24": "2qw3KtUsVM47G6vWoHJ3HBBX4NuhNywvApLkFNxHeKdyW1NzgWd2WASAJVaMUwwSt4V9Bv8a26kMZd1SxUU68jcR",
  "key25": "ghACMokD9vBz1aHBW2Ui8WdYf8vHxiR41MdMSyh9SFJfDmCfAXFRSWvK56EGe3B3JmF67EBF34urkiRTYsX78e5",
  "key26": "2vy5qofbcth1vUdxS8ZkxgdJyFx6bVDjNmpRWozviGUCe9JSyAcM6pmFuJrH5NLFhPNvm7afus573BsffN7LcdZr",
  "key27": "4jFL32ow6QfvUDRvex8Sc7CbCfZJ2Uw72vekTWT97NeFBmWwfwbkp6B8s4cBT9BDitG95frfqZDKosouezas59iz",
  "key28": "6SR28WgprHWzRZ62B7BthQhfEeHPoHERjCRLtQrGYHGKosWHdpwWumYt7XBAiCDXk9kk3V6QyhqTCcNMVfjD7qx",
  "key29": "4W45rZmiCEvsugqTBx9XmP2xgCFDuEexsVv9MSC6JZVERkNwgQEX8m8v6wVV5FHAWzUdEw73o3rLoFg5izfiPpxN",
  "key30": "2893JxdVrCjYXMBcS7AbYczGmvqfPgx3HVvSHVvv1PE3ijPDUG27GxDjVtUZR4WbdVbYgqqLBQ4j7mRmtd3LoHZS",
  "key31": "62tyhDD72xdU1kxiCcgsF8xMQJcVKsSUaW3Z6N8wbnMa7NU4YDwGimcMkfuStzLyhoYaH4H2eao4PZi577zCirXL",
  "key32": "3pkXEsHsdJNgE3Vn8uRiwJXZcZSTXqfyvpxegF8Rq1Jvc3uB3muTxXpENjW2RCJ1rH6c85QgabNGiV1SgHMmT3nb",
  "key33": "33QkpR8jYUF8KAUp4Bsi1bdERNsJimsfhhUiUEWWLdrBXbCPvvaqTuaBtsimWnkqUg6dJ7usDEcHttjFfxeau9p",
  "key34": "2yBFyZTjuFy8GnCSp6e1KwcajRSnL17uPQdZR747nBrbzAQs8VeRkQE7jhbfToLDw8yMLepDpaeXbW72h56BWfrk",
  "key35": "3ig3w4Kqwyq7JVFEYe8SBkrPgwMBnwfDmXSFwDCJseCiwyZtxfGATUsAhwtga35AapoB4cRoFKmMapHAYr4Xi6Qk",
  "key36": "4jUs4AqLLRsYHRBfLz4xubBuh9PZBbSXDok747q3c89XinmLk3RKcnQQ8FfwpQqvm3RJFYoe7VDJP9nWVvrd91F2",
  "key37": "L2nV27uJL56JiCQ5SamsDC75vPFE5gT1HXteYNhdwHXsZ3ZU2ysHVSEQXCc1byaNCTuEZtJ6GBjeMB3VJFWX8hU",
  "key38": "3ghb2PwmNTMsT59GR5rLguE3ZP8XpuN5zX5sm8obsWP4KUCwM7VpVcVT9oyS76fazjXRrhXK7LejRvsh4vnigUAN",
  "key39": "4k2cGeP4NihPKFFpeTxutFTLAttUAWELCLyWVYBg3DvpyQzbEccpEJnhfFBJFWLLxoRzEva3ydcahaxR6y7dqzse",
  "key40": "5TigzJQuwSPtJtnHf6k9WiX4okJDVWcZTH9QPYGZKppfr4oHM8hJFNmJi1hsWoCZMuGcySwYY6ZXJ144F6QgDxZC",
  "key41": "3u3HyJkTvvp3nP1vJu6dqLYv7TPtLfgcxB55EtByXUpT2aULciSs6Rh3ajhV3AjR6SccHD5zPx8ZT4zURjdwWGzZ",
  "key42": "3HDLJB5fhhu4P6ZGBLdDAvsPhxZtsoh3ujKE9zUpxVEVXgk4WGBM8CWCqzx1Q1FduK2QhwPVXAJhFSq288cPUhFB",
  "key43": "3cq2iCG82WcjNtuiAFCZEWwskiKmmhbtcNPufNqmGmAoVhjrxQdRYoFyRnJgzoeaCNMqpZH8FxApg8q5BK4W2HsK",
  "key44": "2Q6L2dBm1vLszhQZ5HU9g8SbLihyu1UW2MkwL5SRYKSMZjdb6UbP6BoRzv8TQFd4Rr83XwJh2EeZH9kocfeE5gwL",
  "key45": "4bnqegK8UvyJyG5SfGsygF4MtLDgyh51UFnqdtKDjG2CBzYEJzYg7TsQazwiMZz4Vn5tdihtEozobFKGpqiQsDJK",
  "key46": "39mRk9QUXgZawKHFh9VtTwkMDZN1xqW8txqMJT8vyMg2nCy3dCfiVHdwAshFmi6VhB6Fiurd2319FrsraZfvxWiP",
  "key47": "3SLbTWorVr8dpZoUt4D14Dn9D72FWW8AbaUeD5uHMrkFj9SkZJpXWm3qUaG1zMdaoLdWr7cqKRNrLPULJi5wYL1K",
  "key48": "5zcj8d2EGAVkexEVNdUMfgHY6ENZAwrDSeGLeP9EWYWwYDHuohrdwZ8F6ZcTvLpe5xTmMcxKmYuyyayUiagaE7nw",
  "key49": "5pRVp7DPn4zXQDpwcRUfx1GVdML5VhhMJqtKoFW77shRMXT656WBmUVbRKUMAPiL9CratxKQdk19TCnvd7Vw9hXs"
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
