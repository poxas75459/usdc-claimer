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
    "yMKUVLfnZePrCAwYo6jkV1wdgngpkYaomEaKzxuNHV4WdBBaYrmGDnUnz5UUTa842vUxokagyGr68cCVch37jpo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mXVBBhKEvCDrGjBphGiuy423d2ty2Tr63cYYHmAAruD8fvdvBXELMzqTRkQYKnS2gkraEoDAwUVBg7xqCj5NJXn",
  "key1": "5FvXA3ScyAHxYUAagGm392yhPTAaA3FJktFygaQVC4Y4L5EG99kEekUzYeBJno79NixknuuvR96MZkq4TZ1tBoSo",
  "key2": "4WtxB85DEDFEgLF8vrYLpWjMLMFTPf88QQkC1nsgRQRfFFdqKGBD5KrQSaCo8s2o36k5v7s1tc2nHMEvgpa7q91Y",
  "key3": "4oEYfkFMTHQsJtB5BBNSSWWqaeG9CXo5TKHkbZNThWvrDWMA9ecrqACGWBpPwW6SwrmNMqxW69zdURPx4k5ZP7PP",
  "key4": "5rHuH3zyEP6BxUanAQ2uwfn8CzoXNq7hFeKbgH7T8gm9KEiTDBVz7y5SJ6DyLtv9JAZ7r9cduicGr2xdJzxqNhyq",
  "key5": "2fQbAmiHKq7FqAmBC6oza7YtFznV8F9ywcZE2VPauUgV1PohegzndsV5iK6m9v3MpoLvc3udSv3PqbpBAABqJDnL",
  "key6": "iWBoGyXFKNpqLCNvovrUVsy1eKo47TXQvgnVvm3tzoKFJtNTzTAQvgKGBzzBgdqXhJZZJNDe9B4MsRovhnnfTSj",
  "key7": "2Wz7hPU98cC5q7RUM986TL9t5hGwPan8HafkqfXA9xAVEnwAv4wgm7pa1vizHeE138vxCGkHpztY4ZoXzUvMfKQu",
  "key8": "5QJqQD9QA1euBsDjhwXAuUJA77zj5k1eeqqxyqyJ1tmXoBPZqWiyN52W89bRHu66U5tyyQmSm7huEBnDhScHgzbN",
  "key9": "3M9EkTmQepsydVHN8PgWS4JeDFFFFnEkKsAiU7iYB42rxpMRF6eFucy1HprAhheL3XRNwzgQXvahnM86RPmRLVNC",
  "key10": "4ede6bRpzA8UzfgCsm6YbN8zCGt5zyV91sbfj5pgBbccCj7Nt9Uais5Cp8HdEbjrQoyHrsjHRY3hSsMy4sKB1MRp",
  "key11": "5aBCJeaEbWmo5KSnDbe9Q69hC2aStB1Y5Lc6x8BuqBSoWqEQyzjFbe93ETdJpYosgxdLJr5boyWHfdB8gAuxcJzf",
  "key12": "mqVTn8eZrPDuJRrNp58ZJz4syZSs4K2wdpY8e6aEKLwwG738M9N4gvx1UAvPg1auJHWAMGRQKWWgmLWC3yRDrL1",
  "key13": "rPq27VqfXBuXuscx6cPBHfpCATkvadYS2whsNzQGq9Qsxc23Qi8Dy9XSBQCWQ8ueYvvmR2pknsEC2dDzfGAvgV7",
  "key14": "3g6rVZkmx5CrKXHkYpNiYJ3nsYyPCp6duo5L1me3HxzU3fmDrgJ7TxiJuxrJvQVgLEpr5KTjv9CwohvpQqRrJpjF",
  "key15": "5Gxj643rhBedyDPtk21fd25RPWCEKFpD1b9sZgAgnYozquvoB565FLcX2H5vjR32nCLrqn3M8JDaY3m59nwXU7sq",
  "key16": "5C8CBWoVGVbiUGisxXw5B6h3FukyQqKWo56QLXQTQP2tDZu6ABrLYLuRhdPA5kKXAguVkYy4no36SXz8DcMM1ehq",
  "key17": "idjHXzHFZt8o1c7Sr7wwbNjvNnqwKrz2ey1FqSH8iiWdPwEj9tDmiRabjbU941PM2Qq4fHNgRWurxsgtn3apfXF",
  "key18": "tVjsBmfoiU5CUwvyswU6vkLpWh4Fsq5wVigFrNUbUe8CXqHJqC6Cp45fjYD1HkN7r5Q9cH9MzGJpb5tDYU9Grzf",
  "key19": "5KDpbE1LTRoNoSfw3ReXDN9ZWL6opP4iD44ahYpqGDcgWAgjpHfP6Mk2iBCXrPSMDQMNA5bZtA1181aYNrDoZ2eF",
  "key20": "32xsdyAmBkrmuyq4fUZ81cZayDVscckG21hB9dEajmJJWivbqZwfS4NPG6S15D2NoYXqdpkKnuJyYaj5dFJEmd8S",
  "key21": "mKGpUvDFbFXj31bvnxzJzYGhj9XaoWg3SozoP5aA3dRuxyCajBHFZMoCFVES47zmtT3PpwQ8SHedtBhnDNe4St8",
  "key22": "3LfPqUJUudQ4H34QoYTCJ6aAgwqt623dKKNU3sYfpZ1zFSdtoPF9bsGQwfnDHuEVDCeHZ16GtpbFCRdzgeigQngf",
  "key23": "47ff1rBSq6wJ5sz2oZR3xCbZSyudzpE76xmqXBwmU4B72YVqo9YV1yBhYGzPm7AVYHeXZZzyKEB3L7QqSyxU1paP",
  "key24": "4vWGJ4Y5ccEsN48omjEMk76qE635CYCNktZdjnep7BC2uV4b4YDx9NDvHKMtfYHnVSQsnh22mQ9AkX3TDhffeWX",
  "key25": "3PBUY57qaVEEgwPeAFMrvhCuihFbhyd2ktMSa29LMUiib63yzYwDVuuMCYsB5cKgT26kGGrJmEWuhKguYMDtAafB",
  "key26": "2i7j18zo6QjBpqweUYEMGXFJPMGQzW2oFdB7LopBP9BnQAApKhySStvSayeAHK4h4sohZtPeaVZExKCoPfy3qVNi",
  "key27": "4ewTCR5ASxbYXYGgbxsABH7JWVtSoJYZGkExsw1LMQEXgHtAab5t2Kqn1TsL1CPU9T8KSvS5eaikzpT5YsydsX9D",
  "key28": "2x3h4dL7rPBybVZgyYNcFzH1W7MxwyamEfgtxm7WfNLmxURtAesuYofM6BvahvxG9X2NC5xDKSZKFgW3xLZMKKHL",
  "key29": "3pBQVN28wvFby24oqFz36mV4iGm7WagJQb6HKZyEJasEoaomKrUsB7mk15WiXztnsH4E4Udi8tmLTttLb7mfzFRh",
  "key30": "4j3saho4m718Q3b3ubPMVZbfGmQ4Aa7jDHJf8HqUp2pPoBKSgxAJyezt54mkNYoTeRpM2HVakMDbtAFM2fiFgDXE",
  "key31": "2MFanLVCbRDHTEKiZDr3cUo1uxQS36SyvLzDgsm57NACyKaZTTBCKxvPVYEyiN1zmmEsJ8NiuWY9r2N2MhbboEtx",
  "key32": "2iGXHTQMzAZqoqQK6CFsBwN3eS2aQaqLUUZMR8FhynUMVfMmLkCfZN6L4ewxmWcxEMP9hNfaKZ8nZiwpVePEwkRQ",
  "key33": "4Vu6eEi21g4wbiawkhaDdD3kWBs88NoPa9yPnVUxpmUAZvcY9SrfBJ2VMJk6oGbPmiNaBuxFF6UHq9fLSFct6Yh3",
  "key34": "48EUuDUpsantRT4aiEnP87VgCXY1HXacX3Sc2iwSoxdMxQZEhgtBsk7bHcNRXDDvMcdCFGzmV87jf5wuwmNaCgPn",
  "key35": "3zQjd9Cg1sYZFQj3Lv372vUppUzGoabLjPjBJpz5itfgf1e5CaDM4ZDZvKnmoqcdhZo2wdkVKAbjH4xZSaURrv5X",
  "key36": "8oeQYzcSCdmzDvhGRhiBWgjZzBVuFYGFiUGMX9z4fHZeds3ZGvgtVvz1JvkTzjeVLXfFGyXDBEFpjkq9GwcJ1tk",
  "key37": "4hbHiPC9PiRCozTiCtCYqjY5hgTwvnzv45xkivkYvhvdEiuhFpHWrSUWJgGCFDtjEWD9eaSa8uXFMNsk9pZnZWdo",
  "key38": "21nRZ47JhpC3paZ399m3kFx3vRigRrrs4RrcrJogmx292szLc3fUhAevLA1cvBozQvM58tWVsd5GbJsvFqpMjgoh",
  "key39": "481gRkM5TKEcassdyzChC9bjrem3HDq9zG6jYP5AVVKfmP6UjQcbZMg4RvSjShCkELhm2VHkQqRKNF1RFb4wLmax",
  "key40": "jcPvXhVyCEurWKHUsTHA4e9KDVev5JqFkcfKzLw9PWCAncEDpJ5JTL5wS2wL6BVHth1Y184H6MT2PiG755cw1Sn",
  "key41": "DNB6qpbwhUYocpBMgXbEF5U69Aqmv2EjKgkcxQe3NhkCw2aYABLYJHK8W9W6fmRBmNMY9sUrYgFi4pZwLM8F9wd",
  "key42": "5zNnYesQnPxCwp1SrVCuq8PC4hhHheWA3ops3CEffjv7PzHR1DdnENvrnZ9kU5MnLMGZnWeBcyi9Yd5af4LFK5K",
  "key43": "2oRzkwUAuAxSgutioToNFQEfzY9LDmmqJFQZ3aSW3ixutQ63X1ha9URvpUeaH7vUGUanWyfXPKECAkPan9VCJcYq",
  "key44": "5YKJdMPFX9JhVMzq1Nfcir3QU4i9pDAi8MPda8sAnZUzyaGgjFSryECkrdXstEWkBRRoAPUGGVg1UxjpPWtULWLh",
  "key45": "4BAdduR4dVax3sFBhJriHzJeMdaLzGQwyJTcBUbRZWb7VDJTng8sz2evyX9K5M6iniJ8R6Y1fnKygEnCndUE6h35"
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
