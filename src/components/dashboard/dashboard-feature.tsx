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
    "5j6wHrznsrV3fRx9Nqr9GTpbkwYjGW8kioicHfibJ59KpJhh8PGNRRGZQaKU8EgTmvZU9WT4TorCqGYpYErGzy4M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8wBKbkgbBT1EbCYrRb6nEDb2XmganqkC23YGYeKRqkKjkYQSbQYmJZo2jRBURyi9p7zGy8Mfc4hWwcUH6E8uLt3",
  "key1": "4Z9URC2uJRbYKw1rP6P3LiJcnmdeo7jcFJ375ENe1heHMSCwSxP6jeXAyK9j7i5zyKQ7cvY3nPxXNNthmTMBxrFP",
  "key2": "2J8kFJuPCHANF419cvHrByXKGghdSadBVUZyuUDjYLPGiHEv5fi1ep1uAa7Ui3GwwaFkqy3Xk1QUTUBFSTPnXtTz",
  "key3": "4jvZQxWM3UvP3dPq2yuktDYw9dEUMfRVPZRC8Cp186kzC5pAtweCGTmJpRPBsaMKtAJ3erRRZV4W4u2Yha1t4uQn",
  "key4": "ftQSNoQcsdn5yW9Qv4vZkoptk9UVd34A6BrpzPwYxjh4fXtZEA7AEu4uxr8D7u2HLMmCUsoQqZaBKVYsNXFv53G",
  "key5": "4hCGTGfZ9oXQkofKXRC16Ta4d6XPR8TKtuNHsGy7t6yKAgLnXFyZ645jj59ndB7J8CQH846Dye6BmpWFnSVpTS7Y",
  "key6": "4TLAbKQVFmwnRp4Ze3k4hfFiKS5UBvNK5ruDkSuQDDjun6SGNf289n13hUcwUc13i3jVSBPn2295JjMfDbnSr2qY",
  "key7": "mvLem8bJHdUFiLFuKMKDRe4SSN6E3YthQ6qp9Rhbth12YRmDpZ1mT9xTbpj2dAtjffj9QSSQF9YshiTMFzGU5E8",
  "key8": "3xJYKLJTyqxwrT4AeFt84CcfTCLbsTsMR7xTzvskAeU9bZzvvvEoVGBqPpeoCPdAmyRhH3edigmKcCBk8Lodm2cs",
  "key9": "3HbnWqJvUf5XfpMGPpj8NrUw35RVRpKc78nWEEzJ74VuNzV825QTQ7VdMck6hgCCFvaxdLLVGdM2RX2CfBWdmJ4a",
  "key10": "3nmgMUyy873r8QekcxTVJfyLBQNnwUVGcVAGNLKoKCTTdZcJjknrdHLwXZq446rUhBKdgmZEH4Kphg8ApDLUZK6A",
  "key11": "RtstKiGsfvMrsTfBGzJP3TngBVTczVRyMTWeyNCm8NFFn9Y3ar4mPa2om4oNwHs9pdzNwYGrqsfanLwHgazNDHn",
  "key12": "4jF9iVVcMDk4K5i4UQF2t5RNDjCxXq9fgsJqimFfyA478Yb41vESALAyv5PcxeK5jRCzUeshgef3Yq9mjXw8vNPY",
  "key13": "5aXKSyasVKM5MaFdRdck3XwUtNEDynjaJ81UDTW3CTFEMhPpPU3vuhSnpgJHa69oDyCXY9UcRssYCVzrQcpVYeau",
  "key14": "LgsvFvVwNzbr3192vvD57ZpwHVGcaLwjbFjvjdoy9D5QWV34KJneQVcoxs4phFwZyBPbZVqc5apxVGvVJqgwAaB",
  "key15": "5cEt5pPDyuHugc64Cz6eDfEBsr2WrKqkQZ8i5XTq26ZKJeVnCr1DQgwnfs9Zent1rEtPtm5uFb6SLgCWKBdEmExC",
  "key16": "36dqwdhYW1cNZaXd8BPWLYJMVH98WXAbqmPVLenNDSjVUyCVUcW8ikN4vzZoU9NtTY14t45QDuoCXD2tVFZNP6w6",
  "key17": "2HEfCvHQs78xTvPxxWrEzNiFhAX9BzKpgYckaqcdNYGMtfe5Vn7xG7oHkMa5B3xDVvAV9btrp79FHVy3sQZamsCD",
  "key18": "3ZFJidod5pFtMfPV3Ay5sGTzK3kJpGccjj5SY52M7NwnJVJJFhR2iRzXfZDupcwKKScw8gKHokXW5QsCeanMdB23",
  "key19": "2q2BdnNHp9iFETeqcVbd2hWNJT1uYiLERqsLqhoibmNywnSayx9pZ9SSSVSsYduaFzzBdq4M5FknKwoBMjuBY7Cf",
  "key20": "3us1hq9tCtDreDiHpMx5RbttNgSUXFRBnmdgHffszvHUUt3G6KvhSJZYEsPdegj427ejDJjk3QqQ5fUbxqT1Gd4y",
  "key21": "31zTNhGYBNXcv34rWzunbDeRuvAMsHGzsfiiin87neBKMLGxeLzogjjLM4ykeABCU53TuZH3mygdbjAymMAzir37",
  "key22": "5Wwmv433oTS9geBJcjG6TkebxMvNQVuRFx93DsYdTjWdTFwGuH7jd5DvuWRLBki2zTLgTAcwjXXiYQyQRb4zTTY7",
  "key23": "2gFWnxvK8cNaZ9B8ogisuk6cH8iuNuMzhVsfFBir6hGdknPm2GwZ3EqKQGrpi77mvVNNHJj4EnnnBs8ydGdaZxuo",
  "key24": "Ci1DMppF3BByLe4rsxyH9fornDJyk2h3x24d5Z15yjovFUovYYrdJhggGRtY14mJB9uRwMK7B4HJTEo8ZzcmpPe",
  "key25": "6DuNMtwSDej2SfoZfNgVvDMsxkRToQobULQaSTu5WQxhikE8t4vCi2V7A1ejWkZSTR2UEkKceUWW9SYpaCpjU7Y",
  "key26": "4meTXdReuwXPhpYm8HjkSfxcCvjykCkEnbiSd54wd6RUUnZxxGu16APt3LjpvXXhVPKfj8ThNthLFVJVV9N5nt8t",
  "key27": "67X56tktBn2CLPMNQURECf8cK5CbDAMXNACwLFCcBGruWPtUGfW4HzcYCyzBdSh3cVPRiAd3zGpA5ZfnJ2AAEHFj",
  "key28": "4UFL1tPwS1tXLXPqxy7hYZ89GXtiTBgMitU4vPEeCQRdoAN3vgqGUGmGfYYob3X9D1dVihvoVpe7kpscCmjKVa7f",
  "key29": "aJtJviJv81MPhkFVLQX3AhkcGdKAXiRmYw91gvGPe5h9k8kNK8a8syo7K4w8sAwWHfoj8gAeQqkSkb9gm5RUbAS",
  "key30": "2HmbYLCAZmxw3R5t2jz5a6djFWLTqNrTQTuSQe3LihWLgUezqQ5Z3C5yrLrmVejvy81GkUmsnaL1TY5w6vHfXgTE",
  "key31": "4zcBDf5xtSwytMWTW1aTmYbmK4t6ARDBYPuTaHbHMkesznFiGEL7TnHYZ38ZcYQZfbByg1GwseGzQXr5GkYzmtg2",
  "key32": "5f8agEF1kNcXByG2ZJ5iwph1RzW1U2VeJ8pRPte2CQ3Cbs3qEtFXjwxzn9eUoQ7q2jjB4PHsKc2keFbEbUZqDMPG",
  "key33": "3RYURszxFv72B5DaEsUtH4rbk5yhcwxPb3VNh9Wx89PBCFSutuCRCVRQ2RPWBV9G2Q1qcj7rgG1iHEQyydhv65Vg",
  "key34": "3ZRgt69iGFysXwow3uV613Jjtzgde8zobM6ydPxiq4MgCFpyCushRZKSEtoqodjPBvFFrMGuqZSS4ZxAsmxjcMz2",
  "key35": "zQZMqsocXUnjMgVJaaEfYa72g8ysfoggPYBb93CRF27SPiTSJ9eZ3uTaEcocTdNav1AUS4NhXVaYEvtPpFeoKMY",
  "key36": "5dNDC7JLRgdjCTNfe4FQAjfpQd18r6FjJoaAocTuFgWxxX5MbaCiHjM1jrCUzG2eW237UYysDSMQajUc5SSAkUbv",
  "key37": "4N9VJjLFJasbUEaMTYNXFH1KxNnkeUL9Yv8TvgBNs4jswRPxWky3UoSLeQPJn9ZG6oneidjnaB1guJRmEc67BpFB",
  "key38": "ykovqBdSC1X1mJnaSoWQ2DxVzaxNZbmw74PiewGfeCmizTCAMRiwugLKkfG9TBzcaxfszsbJmBTLbGqqHa9Kq7r",
  "key39": "2UtsTyZBy1iAVjQoJhEUDW1NhS8tUz8pQ5nrhGUcM3ihLnep4kRmDQ1KBVtGwZzhzYDrjtqxsftZGrcmsHDtfJgL",
  "key40": "vWPUN55JiHxXnzc7V2qJgfd83VEovBSQzFvy2JWr8SLPAVcbegAjceCbUDi6TB9nBvfYMFy9Lz5mPXuq5GW4QBh",
  "key41": "TjjJU72i5JaSqsPK2eFigK6eYk4hEAxFzG5PVCQYBjmSEnwyDrrJf5hL8EmasVaCzogtvXo3N7eZcY5rN6wNe8i",
  "key42": "462BFy7Jg1k9F4bRaVSSFdKQFaAMWzfWamCz7DGkFdpkaVRtjPoEMLKkjfynZg2nYTJvMDXwGnTJyKskDv5VBMSS",
  "key43": "5LGy6cF3HZ1QK9CVsv2U5MoDkFeRCrZqUsyBmJYCbbEkvJASXaGHDSuLdqAtSkdWnBaVjzUD46EPDQBxKBEByuRS",
  "key44": "ngRTG7GhDpQRHuMWkdur3ntLV9FtBnEcdT5KmNjErfiVB4fg1qFibttTpVkCWsKf1dRm4U9Dr6xMTNtqXYJMKNv",
  "key45": "671n8ZacBodXfzsrFqPjpQ72zmwea7MLimwfvpvoHz2XpqabaYYgxaGHHMrBedNt8HEu5Gy5CopVP7Cjfpq5qQNr",
  "key46": "486zEnX4vwYhaAvkqHT22TGo43fAY5DbXs5f59tJkeHuCrLaeBU8RPfbQw81DymjwbSjaRwTXrKGCxPFtFZnGnn2",
  "key47": "2UMmHFJJWRKh3GXTErWKJ5yv8mFgCesQbjV3oruSF4A5oakQkVTykrfaRHUcUzCPnHEwZeLSFT3eEkyRtHsfTLZh",
  "key48": "4bg9TJ2b3rHR2rXnh7d2Gk2BJpwRGcdq1iWaeXAmbt3Eq64hxAUFRVvRkFzTzStGddUGapzYumfv5E9Bbkq8191c"
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
