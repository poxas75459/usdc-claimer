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
    "3dD3J6gbb7XWnjAJ4AAaH1Bnz5MM7d8M55WDKHiVx8yZq2vrh99s1S9NRNziRXh7VzpPKS7K6nuvHPEBSEgbKeCR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m2wGX3JAK9v7Ef3nHjJmo5Bkb6yBJRJHKJJKRPu7dVATmR5HFbMWa3n5UYB7ngVjfXw21uNsjUC6mK6RJL51gsK",
  "key1": "21oALRLqDzPa6mJoit75DrmfTi6fZNkQNDqxYYVqoqSy4i1GufdvtbULqsVcmu3k5YBM3eEZ8i4XmA11Wu3URBrp",
  "key2": "5jTu1jfBAYmiB7oRNzttQ4Bnz9E76mcGPu3bGEbJjBbQkvASmQEajPbRGUaTPRC2P9mJtMUx2gMAneWdstoHt3tg",
  "key3": "3jvN1Yq6ExqwkrorMY6rawS6MC8jepX4zprvLJmA81RNBgYUteWaqoD1L9MujS2djtwsZVrc21fAUDx2N3fAc4YP",
  "key4": "EaugsCXpefqRqgYrP7c1rakiY7GnREw47hokQCdBPTeM1TwEA9WfF9VxxT7pnMHhQrYq1wXRi2gQUJ3uR6vnfNP",
  "key5": "UafdffFQCfYUWiHZdNG8qhGzw3mfXE4GKbffLpdLAH4ceKXSTmdMdr78xKbeeVnKXvpvgHanxG7vxdTQadoP4NH",
  "key6": "3PLTeoj6PRZaYeaJigTfvQHy6pCNhgPx6hn19CX59f75ipMKz3ok37RDoDykTqvtY8QpbHarVjpDpy3EpJ3K6XkQ",
  "key7": "4fHadEDaAw8AWFH8M35kTtyKWcNYd426e1xLWroux5dhtAkrmv4DgGuEWD5BGtSGkniSy5qS6gs35BYXk71cPbCq",
  "key8": "3sk96zaEv1NhDJD9U1AwnZ6Wa6JxeJ9mCQ5dSbkzZLBqXFy425qnZHSxmreNXpH7tZSN89ZWXF5tiTsPjcQrdcwH",
  "key9": "5khSQMLkePZ4c9ukAmx5JH51NASpxsUJyGHVYM3LSzLDCwBfh7dxwbrXVfPsPPXn61FabxokHNY1PMqCk8BnJ2Mw",
  "key10": "3J56ywiFkeKbRaqUsemaywS6yhEMreghz38asg5woUAY9it1wKLJuTPXp7QqSS2mmuhVXhVrNvxpTzaPcA51MYqJ",
  "key11": "2ZGEyPxVZqVv5DA3zCMAbdYgHRB4SGhKPag78Prfd6eq2JHWYa7UzqoCXMT4Tw9TYACu1h1EVSDbNa93p3G7GEVH",
  "key12": "4MV9v8JXJ8WQpKSsgJwYUPvLYB4JKxNvjJMyA97DepKLefnFfRLb9SxvUonT26TNeQES6973M9CJ1UgbL76bz23P",
  "key13": "58u2ZH2y9KqxsykYHBtViEzhtQ7rZxaV6J8JmQPpyar43DVKnLzjGeeKrJaZLC9XTkt7RESihGx8fgHaNEGCCvto",
  "key14": "RNKm3DUfcEfWi19E3rkrwpxGeL6ms3rZF5PEhhFKq2crBZ5EeH7Asr3a2vKUZKkCAd4xaVy2JoLRjqumaHGLwSh",
  "key15": "34qmEAE7n3mHjdp5c81VrBpXEBnECeZ5agZ1gS8vPdnvHMTrF7uCgkuANVWnSqZp9zEb3T4iEpSBtcmjVSN3tYWw",
  "key16": "5JRDtDjhZQ8KLCqE2wseHdmC6TdfqKzcKJN7Hhdq256PV2vPGJhjSX3TTXWk2hKCKxE8Y9HZpmZQLFdi8sbtcMYT",
  "key17": "2UjfskmPT2G9zBvViq4ywct2S4YQRqACpn5Z2XC7atgbJKrPrjiiF4WRTu1MEmZ5quZXvTAKDquL9bbCja8ZDsqU",
  "key18": "UGrzmxKr73fgvoTYBPUms3Y67hfYxDqzpKEXDChmJ5ARGcz8N7e3E8CaKpakR4wfyDtSi1jdFWtrzRz1BX8u1Z9",
  "key19": "2NEFyNsnAjmAThw8eLoCoMCv1feJWVTJVGWfuHy9AzuqogxRFngDEd8yDXRaWW3CFYiNK9wVTzKnHg1NnqBpuZdx",
  "key20": "5zQQPPmbkqeB1LpLMNNrWTon1whXC7wx4hHinu4YaNd3ModN2foC4uj7ye2JBugYwCsJb9VAdoFjPTJEu4mS5fwN",
  "key21": "5ndwnA2tse7WaizRDzZXHXosegvS1foQrXfmera5Dj3GpbrskJQxYE72BB5njYoCHao1YreEJKo8ebSY1cwZY9jY",
  "key22": "3RhgnKSbo1y7WRPEE4xKqRTWp5prapmqhNKBdNztMMpBpsXG35H64yrCb9x7613cdbVnwn1XSD9B5nx9JWE6Uy4t",
  "key23": "4uDCLoSGhhqRn4w4ws1T3GtsycAQR2xHPkZLxahx2ZsYFN2XKZGtn41yX1CtmrAt3Syh6SQcRfHPntfjGZq6wuT9",
  "key24": "9unbG7BfVgkUhsmSkPtXsVbx6KqxD6uCy8su7KnpCFFHeKsu8Niky3WwkGxp2LuXcKGLhSjbR1hnw6W6JjLyt5Y",
  "key25": "5L9rB4qAz3CpowtBN4zvQcLtqab9epLkpGUcvXbd7RA8xya2cf5XjrzRtUn569Q8wLDfWYqhxHLbT8PLox3RLPLU",
  "key26": "5zYp8W2qsii8dcgvm5ULceTZ7kiBr3c8vCgpDDmc3kPndtQt6ugfFCr3YFjevNGyuyc7JdwC95asqZZizSgFZe6H",
  "key27": "8EKFMjdAKTsSXaYaxoQk491tPEE4qZWAsA8wzrc6zHVj6MGsCi396QP1WdxjVwSeBBA3JzVNh1Tvb4LkyPMgSGT",
  "key28": "3srdF6St4AiQt7qd1ysdokC8qSK4YRsdknLwnD64ie2xcaoMiDj2YQuriKEHHDfDUA3WxwKT83DQhiXY1QuKvd6N",
  "key29": "2Cy1B9ibe611ZvGtHjwonrpgqMrnHG95k2mjWXtNaeSSVEjvBaGaP1b1F2xVjEyWdLVQPxwvVNFJYpnhm8eFcvLq",
  "key30": "59WkCrHfbigYyN8rsQ6iKgBdr914FxC2c4K5TyNfQvrVGahkebWzF5bgRdCteeCYN6hkZ75bsuVztwsrpWZSbuVG",
  "key31": "2JCXU4jebZwK55317VDX2FA2zjfJDsZE7tiDBWWXz6SJ6MBZ2NpctM4FRHWpkBB44pmNCCjm97cds5WCKMxEDJ8R",
  "key32": "DzSXcMTpyVuP186ZPsRuvsMuWpENNXkk95TKwSeaotsrUr5RU3H1DDizbUB1UT7r9Nmz22xS4JLibBCgPH4SrAt",
  "key33": "3Z6GGMxfmryb3F9jB8j8MdNPJLL1R6Uqe8eEMewXF8LYSLmwH2MufbapFYxt9YZYz2akCU27oi6Q7u4vgbctQVrt",
  "key34": "358qRoFn29JVUzjmMC51Lw5kLgM99VDrzDrEGGJhb8EpUueeY3SBn9wf9oPMXFX1tjDJYFvY1kxRS8nHup4r8FCE",
  "key35": "6A7n7dmnrFVDeJfZEWWa2eobEkfGKqJfmnaKuqtFFy4S7BaUtFUGVVbWJ9Urz4TxuqCP9TRKSC6rEdeSqKwcZCE",
  "key36": "2FvBdg2K5zX56DEcfPhxoo7Qpd9k6VLGYTKLcYcyBHfrkHLKuohsc7yutdKD7CPFaQRF1XVGoNfpaXP4YSpPxky1",
  "key37": "3Q3RLQ4YiGwNQUXHdHaPjP9MfDrVCQjUjrMS1KaVuPkL8UkU6TdaF5atKrGXJcm8qbUR69AeibTxU9KSjLu1FgKA",
  "key38": "55u4nzXUvWp3AGBx3VCfat7nXtH3BgrjNcR8xtQLg7xTkr36U4jFTGnKaSPP6VFUSMLgfgLDgFWbxmbBjKbAjVh7",
  "key39": "jjVByAqpDiDWKR3HA2ybSacQumLpHA8Zmy6aoGungKkRUAyJ5beKokwQdrcxnsRU51au2XEh7d4BS6sF5K9fe9K",
  "key40": "5qmvch1f2sxkxD47cfaprVfssciqKFgFeHpHkoym5K5goPLUcyH6jhPUNMtf5Xq87w3rA57BXmP4Ag2tgz8XWQLc",
  "key41": "3FjLtH1v7vB9wkHZ8ewHSqPzz5fPR1vzuoKb8Nq1Q3rTwtNW4dKkSyY7Xj7EdXyAbSCaNsuPRc2KMTncGVh2CRj",
  "key42": "2xPBeEow4EfQ4JyQ1j5HqkTaprPVTsWaYWrWme92ziRfcsZqhUYL5DUAC3tAQKxi6W9f69jbNQnHwstUwtNbtuh4",
  "key43": "38B6YR8MfeCUfF1B7KoDgidHamDNzbYXHeeinC5Chojk3ziDHrzqsTj2Ppb8AgfUfRchiDF3Lv3WGEEQnAinzZk3",
  "key44": "4v27tYSQW6JZeKsfJMPH9JpgJFchA1423tyy2bn7crBHCZHyE7L5BfMtzxrw1Ffxx4VgHMjWSxckpn5cBKytErnA",
  "key45": "3qfPyrhto8VR6iXGeZScf2ake5eswCuUF2LiRstbgB8PqcUFSsBKUQfeuVVgocGWu7kZzS5Jg1iAo8nrL61Xpm8P",
  "key46": "2fLpQJvM4nyiosma7BXwRDNcTpJLdKZ8XtzmoSQEvf2auYcmbPDQmADfZATyKik497sbwoYaSwWt2dGNXYzyQV9V"
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
