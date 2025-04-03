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
    "5YPp3xs9qDf2fE2EykmyZSionAio8jeFyJ1yiq86842fagRsMCXWLSrFwrMupyQznaaQAGk3aLYmQHA2QzbgSwJi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EatTrGvsjfFq4xw7ttn4PCJjrYdY49RVsRsZNyEngsf2SJffUs8Cd19rTEh5ZBicJyA3Yj3G3fNtfrqzNyaHqBz",
  "key1": "2sGYnP1AdjW41kSQcx7sXo1cZDHXHU671acHTpvYVF86MRfQvrH5NcXxfQwee4Kg9i2oAKJsxSzc2qxYBgDhuYPJ",
  "key2": "5XTXLapRZT1MqtQfategovExWo7egqLihxV7N8t3c5qHfebXC88jhfBE2m3C5jqrfEnPXNu8PZy2oKhd5SBAVzJ2",
  "key3": "DdoGMs6LAWEbFPU9EQ5oN1GoGszctsqZR7oZ9dZ8v8CVzBS47EpEgPTtR9QeV6AN5Ketn5B8vjSQR2pLcsaZ3BJ",
  "key4": "325GbNPeVgo6dNdnec7PVup8VAXQeY18V4cpWvwNDLFuzL7d8KDFM6scrEapL36zf6JMryRjjuXY1i7UhCdh323m",
  "key5": "UkcdEQogUYGHQxjh5BGuFHZHPKJsdiksDvcJkvedjwhns9LfwzZKXs2z9MV7JbiTDkjRG8BvTYwEiEFEe6C7SoE",
  "key6": "mShgrwtM4onR3dCTPXfgtY3MDszD6MKNpNBbqM6pre7iSsSqbR2zwKJkpwYAAyeXToAkKM2o5iZiNVjr4JUfXu8",
  "key7": "44kBWnU5Nrdbyqpn4ZGJXzkiA1KQUPpPUr1BWbuqfLh3LFKYVk3CpWSKQdXT1ENRrN97hPuiRV3zmwoJSHRrzLpj",
  "key8": "3mVKb1VgLWwNfcBJ48v8maPULx8WBZGedxrHYAiPgwqDEvCfW3vdYdRHtmKCA22AC7ZG9Vzk6gxqXSHBe97QdY2s",
  "key9": "q5McU6mKntJA116Qw4ZYy8TcruNmbFKHVEgZmnwJWKteCmTTWDQoD8GkRLYHsVPf8mdZK3Xo27KGmuGtWsSdLpE",
  "key10": "3ToomUr3YxQyMv1dEYkK9RicpNMpvBrZS4ox2n4Rj8vbi2FuG1dBGrALFJofPDNsBXpdDexbx5ntD63PeCr5es81",
  "key11": "4hfP6pGU8f7JFRYp3512Sb7dsEPFpcgeyT8jjoLFw6KMRRLM5pTcAW5rsyPjZfWgotkBGGAATAosKAs9E1SNXt5i",
  "key12": "3ArdveKTJPe7hxwBzbz4pn1RhDJB33rr8sjDnmghnMR3uAaV58W6nVDopW71FipXraFbmonQNFVmn6SjdtaHE2E3",
  "key13": "2NLhRR74qTaWygWXV9RQuZJrEBFnhdSnTCcvJSPfMQWWdNETcpyYeaZuRiZ6XRXjnurNzQ1jFJC2axGDVA2tREbp",
  "key14": "56MDK1pnt3Qx9zvvi4hqdnj5iBvMgoteD9VyN1u8fPRqNUYECFoTdNY3o2XPDzt5rYPbiUCXLuTmEKiz6WfJtsLd",
  "key15": "3vNLEC13EsmrdLwwfkymfCWuLvqJePuQLFMVxps8wCu2QGJvKvGpPWmK7A6wpQstc6RgCLHbCYL2qsKyM6rKZuDf",
  "key16": "41eHZLXR6VHMuGzPv72U2kCPRBevhMqLHRnDHB9hSX7DvuwaEZG6dqP2vFhLq2QnmkN6FygJ9oJsSkJRvs3uZqkd",
  "key17": "45cdJW5CtizW2oWdcUXR5xLLwkXwN2vcMwj3fPVXLnCBe1zweMvS9SaLPbSXMCGEm9kRoa5dQSMBa8noLhXqYuYq",
  "key18": "2PTATRE1t661ooLPYYinnSmzbsh6RZ5pu3xzFC3tjharVr1vKT2zi5qGGk3KGNhhM8j8UciUWy1RfwUo5hmzULv3",
  "key19": "4nVpMvUu8iukC2xH3RMq1zKYt5N9u46db4zKz2zUSuuCmwh9kGWAocL9zbPU89y47M4xoRcp1hsjv4f4MVavZP8T",
  "key20": "4j23nz2Gv2w2w8c36NaKYYGmP6gMQ2FekgwwNdVyF9h9gZ6N6YKWFKwtc5r6VM2UkcWAXbHsuKH1k8on4z9UFCAW",
  "key21": "4fAXykpUke68AcwRDVDYenn5xDw4vG23zQkse1gC4yqAKmtJtKg1Zc4HYX5RXCfpEj5eyhADFAV5kSGoL8fNtqS6",
  "key22": "ZbEqv88FHXqZVqxg97NPNMnqpjoPTDqsauCpCT3vWGeMXWcoFNjNKK87UX6MEEc77kasTwqykS6ZidxGkwVKAmr",
  "key23": "GT95GMQ47S4Jq8wS2qhPpW7T9Rd5rEKBPxgyimmz9so9uW1YoxaHrEN7kDFwpoYGADQxw8DgLKffEcnrguY6Yf1",
  "key24": "5RMyfPEmGvt57kjqfrBi8Dw2xi1nFnrUKgYABABkdisoTw2JUtM4GzV6mPT2RxkpdSQmGwqULBpSxPWykv8zrnz6",
  "key25": "3JYEAm881iLGQc66PFQ4XSN9fpEq4PfbDQw7BpS5w5RE6nqDriKHjja3L1LHuooYgbCd82N4AXpi4Cm2nJDMB53Z",
  "key26": "3QXBXNkUorFmdqQZY8hvh5mWtDiKtr4G8uUZmmDhC7TpkRmJauQBCJDcJuRQXhJhvJR7Xnxq95ia1n1kts3aLZHb",
  "key27": "41jFxkpfqKPE8QAtkYq9GHYi1Q5ev1aqXGc5APDRaSCtkFzdMUAwrhjrcnkcKu4vjVVt11uf7n3VcnMeCDQkxzf5",
  "key28": "29FUvTUhZYj69iTkdYkiuyrBJi7NgS3nqAQtRf8TGooVoxqsAULFMcgiNAW7Jm1efqiuyUc12AdUrNor7H4GbE8f",
  "key29": "4ZqzaMMW5az6DgxFQbqCq7xdcrHzJbyhJbD1NNnK2Bku9JdFaepuos8EDZPE3jTK8pdS9SbBtsNWcybBVs4eVoaL",
  "key30": "6sThuPXXYdZY2cLeXWtCUFB6sHfap8FfWxTGKKRpS64qhdR9cdHkCucihouPyrPysX2qhQYNC4djKGmTnytYUmU",
  "key31": "3QLcLoFm5nFeddEkqmLs2EoNeSGrxC1rE2DYo5pPwJt7LQRMeEs8tDTyHaSkJvexzjKfrJdeZdfL9HuNDFy8TWfg",
  "key32": "4GV1vEv6Pb7gzSBK9gk1QfoJCSWTu9AKw19h3UeeEJPGU2dqa5cB2FdAnn5TdPcjSbCSv4HbNjAWc8B98K4AbZz7",
  "key33": "5vVWKdeLVGr95Cc8yn4Nyfpoc2fBDy5yLmeaBEnX6WDg3cWop1WqXWiPcQn8JhA9b2Ye74Df4nqaL9soTfAV91e",
  "key34": "4FNLVpxRxkAq8oSw2TiLgnzmzVvgcnMtSaZWD3ep8ydbLkVURsPv2AtwcpeEpPH2RYMKC2kZSLeYhrw99WT3wg5R",
  "key35": "39pcHeYT4oHnUk7eqQq1ygsz5LAUJeMJ9irevaubrPv5Xj8VShtSj7ize5oCwcsEpB42bNRYXYAAPF8T388uyxMe",
  "key36": "2ELAuAVL3cryyY7grSd2LjM9rsxSFEVabh83EEY42EAWAstJycxFbYYMfo6w6TnvFqJCSmnJu6EprBGNj1zegZyR",
  "key37": "2u5zzPNBiXzULPM2QjHXC7Rs9dfKm2n15kNHeDjQe2KEeM4j5dGnwAuY9MCTt5TM8aQxCh6AZ6SnPJD5qt21m5dZ",
  "key38": "52JpLuzjnFnhhvFZvYD1777QsvTkTRDHoqT7aEfZZ33uFXQ2bz1wtvc69xhRMkL2w9Ubn8n4Ajna3yxjHVkM1oiB",
  "key39": "2wLZBZCZVBcFjzCZAnSFr8WjMxtzi8SnKecqoeqPzJnndAk2eBX674qzG9KH6AHxK4zrzkdf62zydSPMwgzarbbV",
  "key40": "Y867h8LiBzqUVC37SF5KcSky55HNqG6iFL398andBC2TgEpEZ78RqjKns3pihDhjri4xKoBpUJTPkCtmYovRWt5",
  "key41": "3y7BvucoryEX61kKRVz6sStFE7Y5hriWEF2aeqJncTrmfEnnxH1GZvRcBRptEE35iFatkENkMHAscmXd8Py8JKF9",
  "key42": "2cmsjjv4nvmMwSNnawme9BDA4f7HC5boHiPg7MBSTn1gUsdRj6gWcDhVemyYjnXGXodpNoTtiJ9BmKpjmekEPqXC",
  "key43": "Q1AKzkpKUb6qLYSTDpoMTzzTTrzmASoK2CN9RQwKQYiNctWDq2Qz3sgz7srHE9WF93uZZqPkXVpQ4Qqb7pwHZkB",
  "key44": "221aWCYsByN1gD4TUQGGb9WQJTsWd3tFSXDpFZAPui541PvzrSBU4TmTV5t71Ni7U9iyKGtgUs3URfhQq6mzKTDk",
  "key45": "4qzCHzb5H2NGkhHPTfDersTRoxwQUViQSo4JbfcjNn26oaaDWU2kQrZHzGHinka4XuHLvzCbrHhkHNSRKYneNg9j",
  "key46": "44ahaRrJdMYgkkfmubW1LyWDYpgGDa56a6uGAAfRxfA7mWajrbKz914QMCtmDYmeZ9iJ8EiP6BjhUcXHJPL2tKmN",
  "key47": "26fXnhPZd6PA2h5CSHAUhdDx1MY4v83nh37vDdXnZLkLPsoXmaBQHZDKExrnehWESeDUsremrpzk59uG9G3Pfm8E"
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
