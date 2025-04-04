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
    "2myavwEueSyr9oBYuNURTX5YYKkoAXCWLccDtFuCYUAtkdS4VLogigbcEyLbbSGNbMRzttbTRfyWrh6EzeggHMhu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3woWtRZ8ckyWEGxhPy4CxFZYSCL7Bu9eEtoMG3rZCRUiVXsTjBTf3J7bQY8Qqvpt5uqV282AxGSsZVLuVZ839Wdb",
  "key1": "5GMgE2RerhapRqRZSP82sj7mfzCGq9ZcqsVSkmkp6pPseaFMVSUo9F5ED1kHzFna5eGdoEHovNrDH7AqjYxpAqgp",
  "key2": "3o77vxwV3sHn3j6F7MZX12YJQWxmnWmPrz2LU2bBEvMVngfPusev3dmihmhcubZW8rUdwA76oBu2bmkHJ6S2EpB5",
  "key3": "296gBAzvSzebT7kT8J2qLSW3uNU2ThKbT2RscArrk1bdqCQ9WaVkgqS9KfeRrRAfi9eAVgHM1LurFkEfZUfeT1aF",
  "key4": "RcVs1ndMNfpL8BkpvA17PmzBtGGEUuTsFwxnszSauV88yzGqxdZpcBmEtcYffdYH2EA39g3zcFzNJ7tJERDD7gC",
  "key5": "4C7MX6RL4yFihyemjPz6XWH4nbTnsY2JB5YZsz74ivpWFHHv7DBQmkkDF9HVBdEMaZKdmWqAZFaEbGmX6BzdropL",
  "key6": "22haVZBCWa253F8eUGK2aJfaALkmrWQUPSbtg4EjFCnMVySSh9fxXJhRnzWsCBQB2quSWJzmnUtXiTKbBkhQzEbA",
  "key7": "PcApuh1weoTXKC9tzAdisFmCG6C3DuiNirYuWi6ZaoNdQq4k7yPQHmVt1XzTkkDG485dgtvgXqdBANjAUZdMbaU",
  "key8": "2KAHDU2SUQdSxnA8MVgZg6T2xnYWQda34ruPkEKtyGJtJZhL1Pt2uZLfGfN4n3KEhVkVDKxee2XkkCcbacEhxkVg",
  "key9": "2JajCdU6RPhDe3opB9Q8R5jDhMr6XrB26jcWRMrFmoqLaHQ3YqQMnrQRoCJ91sMNYWtJDLAkTY7hxy1FLMuss1Kh",
  "key10": "59BHCswcsz2wZdYBtzGL7duTEV7aJtyDkiVtxbZyaDmKxH9KuuLakbmHEDRF8P5JiTdcDqSw1RuBnAGrxcXFCBhD",
  "key11": "4fZYCsatcE8ERTktQQ4EQ6KcwcKmFyZFAkZHhHtpk6r3CLJr8e8JydvxEBf4CFnJPCw5vZBV9C6g8SNnAY3M3ahh",
  "key12": "3ajpktEoZ4ZQTsun24ASpmvAAhkRr8ReUnXeH4UsGTcW5hM46cB2kaacSaLmdbqFiMwazH1pb9Ku2PAmwdzA69jP",
  "key13": "2TDZ8F1cfT1pzsFsNnT8Sjip9fcgRfDzFEbMHt69ZAkanFTX4uACrNAu53NK9CTs8SPnTxtJg57Jcqq1H16RMsk8",
  "key14": "4aG1b6Kj5uVPdc9oyVZokfLwfN7rqKpGPderrXvKNX2Mqf5XoGPHVTD4FtFKNfJ6yzwwy6j1jk4cig54WyLe1MSR",
  "key15": "5wFFHgiSBaQt3yAufn3kysL9LcNj7xnUfRJa3uDj9g1bJPwb5phP72xfdtcqe1Uw5aZrsPHKzX7vjUUk2MF4pKgZ",
  "key16": "5ZjUFSzK5dAMB6SZdzejefmqgNfW6CieSEwadFaSuGXTaoBBCEdbKtAehfpidANkDXPxu4tjBrmuMrJRWQnoGKTJ",
  "key17": "3Bfy1L3YkGukEmwVhR7X61wMuZLGQDkanMhgpcbVVpdkSsCGThkVrqDaky12rx99CWSTD7vmF5eQDbd5ATNFxR4K",
  "key18": "eKZrA6iAKxV8thH1u5FY5i83wj54HDejKnJZA1BG7LPgpefa5jK2nbMg9KRBvQ1cUB93q5xj9AThwFCbzwgbuH5",
  "key19": "4DJQ9huVJxGhKk2t9ZB7d8Ba41h9wXVcPZefeHZRFfF48LutAYNb5VFUdHK1p5zYU672eurVSZgWke6wHkGLLZVm",
  "key20": "4u4Hbp3CegPmq8BKoVreUUWGk4QiXXKaZkcE2N94mdXydfEhXzd8zydykse5Qz9MgZXJ3ZkKtohwocMAkTNKbc4F",
  "key21": "4FPq2ddWe997LeKXxz8vLaoEHTrzvD4JmMY8dMx8E9RjbzNNBbZoUf75SBiBQCnk383XPgcPCaX1QnnoLeKesEbF",
  "key22": "5BfpGWFKsc3osjY3h2SPQGp6Cq6fXZtUzG7p6LrZPgY4VQRKWQpCrDJSQK3SB4a9aYodVeEpZ7hA6YdR6fGNmzPY",
  "key23": "2xDcBhviikzMGqrsEd2d7rMaaAB5J1z9Hugf2ymvzsh3Ac18gq2VEcuQUPWiSnMQ8EXjiU6H8gtSad3BmvebGhyf",
  "key24": "4bijkCceTFduS3RSLudeW13EiraEaFapdvDpMp33Pg2ydEoexeaJ1yaKuMcLtZJyuL49JgcMVpesai4hBmv2LGEm",
  "key25": "9S9xtQkGbS9qEtaoeZhtYLELyV6RzX2BTr5UAGXMLGYTCfUevrn89C3d8pY44vaWSbPYGKjZYZSc4D8DSRqSJ7P",
  "key26": "vAn8eHTvG8WkKUfR9ofR8FRiXs6gxQezSn81sGocikT6xT793qVFHzivtw26vUbMxKx4zBfdsqHSdpTQerL3aCq",
  "key27": "263foTVwnqi8XqdCbvqntLZEy3t2e6nQHopwsRsBvqprNbUWtgrW3mbt2nWcUE5Die8bWi5YHNtBqKqJu65MuxV4",
  "key28": "5BXdAeyvrkWZvA2QzgQdifhorWRZEbt3HNBLL75ZirveEosWrykne5txpuRo4tGhgtdCDeBZNwUMkd3euc2CV7E9",
  "key29": "4hxEstsSMCfP9nLUWp4jAUMMvfxaJaw8PLeVQcXramXpLef5NrYasfmuNfRDiGkcaSihfaGvhnEnRXbpP5JLbjp7",
  "key30": "MfGG7RNxb7bPuEz7TERiaA8E3QH9ywpFm9ft78RRqppjJysiMUy6oooWvpBuCQhe9etc2pfdnt4oV7UhU1DVzUh",
  "key31": "4yWL3ZkG3o47nivDfFD1Rtvov9uV9BUNEyxMiDGxzq5t11HjmJWVqVHQiAtbaVHpsH7PYqtsesPphkEhuucQ54U5",
  "key32": "31EsNdmpBY9mpVgsLny7ExmpeqR7kuTKqe5kAJm6ARVnh8m5st7ACRtpBcbG2ABPAjDY8mwss4EeJwc8yH2fWwgx",
  "key33": "z1eJhtoE6TCZXNgi3sT9ZKuujUeiirQCMARivPtUs7RmH6m7n4niFukEkUFtQk2z6iD9Pz79bVQYZXGV1tTgBTn",
  "key34": "1m6uMRRc53kENxi7MjJmMzDeSPD6fvHWn4mH7r8JLHKeXYwnzVMSUDmjSA3AqAdgt1zERgiaeumYZGiV5RSckqB",
  "key35": "42482zNuv96XwV4YU8TedguWkySNL6rDiEMUM8krqU7hCRUXT5AWyo8qaKuZgAKYkSiQ8Fj8SMPCRqUXQS4KoHow",
  "key36": "4wCnL6iyPvMrkEGK1yp5CNCfQuFDN6BSHA1WvCbpJyztanSASsimCirBkcJSC9gvMcY1k6ucZiKHLRHLgBZsVNd6",
  "key37": "ez3n1rSCEg7LstSF7e7sWqZUyHFCZoyBccUND24rYbL9x1ZAmbs1uaVegHrMMLTpzH66UVpnCwXLqDMrwpvufJ1",
  "key38": "3Qopr3UwP6p1MxbiEFehMsAbJgvVizLQPyHkKeZNih3CHMxoQy55ZYmnnKxoUZ4s4DLfUVMXcWZLVVzgRHUJj1Hv",
  "key39": "TTiayxYqgunGBUrMundvKdCyCNQZAW9KqtrhbmyhSpvvT3qPUnpNs6BAS3rDBLSJGkxFHxzzbScngaDdfuzcbiT",
  "key40": "2sMvPpW18Fny7j79y7wuGULFQU4evt7XBzJiiTXuC5n7PgWSqAdQKAu2TK3oKe6irfpAtBxfev7mbp5oHBTVgc5G",
  "key41": "2bjqofXczMabHHT1N2KJaqCLr5u7MHhqvzL5tPcTr2M8pQSj63w3DMFofo2iU4feYaRnUwN4ZkqiJb9LYc88CXzx",
  "key42": "yWz527m5fR1KUpcv7eKixhovWnVfpW1crPVKUYn9mx15KFoVcQP18UzteKzfQyD5GX7R3JtDTchSd3MNN6Tn4R3",
  "key43": "2M3pMiGsdEpbP1L6qMd2gTXmjrU6YGjMWd5oAqkhUNKbHUzyMn1HaXqb7UauxYmXUU36914vaTazmmr6b8aGkmdz",
  "key44": "37MZmWtBaZSCGUQ7Z7iQ1CrKntBxuRVe6euaZyZ2vpc8b7LxUhc35NuLE1z7BMxgfW8bk3yMdtacLr85bZEbv8YJ",
  "key45": "4GieN52huk8GqqUKN3kAfytw2z1tKsrPDeEpZYjNXJYNhzUmxdpT8HekEsPDPXjiGVxjjgn1BDvzKs73AvGp2jPo",
  "key46": "tz8UaZu58fCpVNvqYjoNrJ7PSbNziPFGkZmQfvpcYepeqYBWPGYMa3gBefmMfdVjeCPaZFBp3H7emqfDu8Ud8yC",
  "key47": "5fQ18ZoCKn6nQ2yZ8qF9uV3d3CRSMfg2XyAhiP8kPt31t8dGakL9f6ERFStRLNPZFUoH5xsu2RBqhwVKRnof3KEM",
  "key48": "29RcekcrtDL7xpKU4QZhXjD6agUCHJPFcEz8k42yHsQ9Gs963933hEcPvpK4tFNSxE1Rxin1R2KYzm2X2ryr2RL2",
  "key49": "Jgf2ybg6N2JyraPBVSES3cmxXcYUyEjYrqkm1HNNMyGjZPboKyuz8TwejrG1RAxyg1hSTr6RptbGFBhJcnumLqL"
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
