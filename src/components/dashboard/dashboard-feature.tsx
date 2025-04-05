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
    "4awy9rXZgztxewFReHYfaqiGMRiDvxroUr9wWdHcaGUX34FVxmtzRvwVoTbsW7pNxyasSRpHaJDGuXWbJhUKy6gn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44k6KucHmxm3CGC1AvXiAxswkK6gTJ3ZQgDMAfWHjPcH4yLgafFL3Gse7mJMt4MGyYB3Gh4HuamHCFpoZEKbtqvM",
  "key1": "2nYJDd8smZyNiDBLkmA6TWGURHtY3sVx4c4zN1e1qcP51c5V7Zx24KyvNawqWcXDWPWm4qGzY68J3XbdkuvRaA9N",
  "key2": "3xJjd5K8Dwq6crgxDnQQd4yxuh14EbjezjUnKQKrsNmV2Lp9AezvYsjVtwKDNrk1w84TrbCB8qgtkz6EvmSbCMtj",
  "key3": "5ee4GcZumx4bZtERGP2ZasLZp8YqQRm4KNjrPzxeUMpfgYpcPraV2hEgTFmhp5BWZYNvHnXPFTNXDqA9HwKzwFxi",
  "key4": "7jAJoYcCjyZXFww14AN9zZvacArsNJfXfwDuVTe4Xpj2Wq1cdpPWXaPK6z3aosZyyPc2YSfW1REXa5Bxkuc62Zs",
  "key5": "Jo85prnHgqZA8a6MZum6oKMFXFoyYkES3Xqr1bRPmdN5ZYEoF4HyRZBJ8HU27q1yZtuen4joDoBNLxSDj4SabWp",
  "key6": "2ksSVa6WpE3dxUF3FnyTU8nG5QFHZKUiWxVBrTyhtfNdU6CoVht75TGZJPM5UymqFH5eeDFkZzrMdfkvUUzus3qN",
  "key7": "2faMbEiW4S872xd7AzgxJrJJHT95QWEsxNaU14F2zPGc9fbp9pYMLcTr3TfmBcx5tymiZjFZTNXnaqTqtPHkZyat",
  "key8": "KPdQZ61bie5PQXAKq29ZvvwbPnF67Y6Ji9b1bg134yq3rSkcpt8KS7kbq46kavekMXMnXqEzmnxS5Q5MXvTt5NX",
  "key9": "4RP3FionnJ8PY8cmduGtB8sTieS9ZFzUGMUjJwvfoRbhwGZN6vQHb7kYRRSMgUpQAwZMsfs2Rx89oMrnLhBk3Xzc",
  "key10": "5VXYpPpS3XHfTJExtMpY9wZpm7DxQZcMCbeRozsebztEzGU31U3qpD9H7g89HkTEALtd86PgxnfsaUz9WfQ2w2hi",
  "key11": "2ngsZ1Fm2hikTjvqdA5rbfubpqtwCjrhpwUAWFB8dQyZHLaagUW3Zbsxi5L7n9fn1dAR6K3pNwC24fuFG4fMDhrh",
  "key12": "3X1xgr3ViVCftVEzUFQMzkZczZxLk3unTgNvSSNwdVtTVaYduH6W6N2NuzHoVk25a8AMhvu5eTpXJfZnuxrv51zG",
  "key13": "GVFAcXgY7V86RrUsQXXCisVsD2NG8kpmKLehtLnrQzyPVRFCYhvkxHdJKaA2Cuau5vyAvEPUPQBGDs5D84v8MeX",
  "key14": "29cnjPiDrKkgTMd2sddv2vHQdGL4KM4wFniJYyMyTNfeaeXDaADmuBKd96Nf4Dnw17FLGAy3V8fXFdKxznPPXYn4",
  "key15": "5AyqxkAzN8Cx7YwJiNgsgPdSmEcezuDKVjQZo8mYHQkuia5FjaQ1SSqLpCDgtM5PwpAWbsgcyMUYKr3KtGz64Mm2",
  "key16": "5CfUHjAtXZmSG6JDvVWrdBDUf3KWgSUyCPwkpXAriX8Gn3tHQwUPbA8cu12jMeYdidmop74MFE9e8UTmiLFPz4FJ",
  "key17": "3gFVhCtev7o5bK1q3gVazQ1udjqfnZ9AZ7fRguAaBB16JoPCfRRANzWZiMcymytjPcFYpv3Lb55icQVHSs2avCqc",
  "key18": "3R72qDaqASH86p3Zc5jbo1qbweZe6DpDVLCy986BD8mmv3WFdqi7AknoJjtEHV6dkHUxkTgAzPPohrH1cno6CDgY",
  "key19": "mga6Hd7spL7bz83MoWNG4Q8LDhowCkL3raSTQf5LDSGAzcdThvcdhHpwoiPVH8c59dQhmwTjAN8YNr8PfxRse3M",
  "key20": "59uiiW2PcBzcv8mn2e1RzsoXTHvtxyCKtmvLVe3ruTwbJ7uwRJ5oRD8cBd7f18zMJPA9os3PesVDmkNza8YuMUks",
  "key21": "GXV5Vw5YTMsfNJquW4Sc9cqws5JF7RDCx4Ptoo9duc3bYwVCZWM3VwporCVfpzRvXD8VLjR4jg4LM5wN8mo7FAS",
  "key22": "67gSEwLKVMpsrGMbQPfuhhH1KvhALogqnUetuL2YY8SrAYgXicVjpuQKDyNCUH3tuBgoo5PU4zPfZNaws6ZPvvKY",
  "key23": "3ERoYSiWBFhayMZDzfg6MKkehVYjVacZxRqqZaf9LztnXpxCSzS6ii5P6h1h9pmCZDbKBwj1eWBVLgFLAczMPjFP",
  "key24": "2odyoe35dDYHvL6G9GK2ZpmJUG7EmbUhFc49bdwi23L1SynXygshRZnTP8fe73hE6mBUGXuWd2ASHm3b8SESqREe",
  "key25": "4h9brPgjETiPLriK7Xk3mtzHcivrnw2kJVXAZ6bSsrkSFi4ahU7aor5yA6A3jUxkNKdAVftAt3beXvZajXCuvANK",
  "key26": "4YWJnFTQE7qkdpBoqpcDygR6xVWpPC5WTcZa9WM6nkXyKLWDEaV5XzNSGmEiwicqhWakU6wvxtwVji2PTWceHbya",
  "key27": "51EtTxDqXMrtyxBELQRrnK2H79wVxow54UdddLZA4pXoJVhfNNN4ARZcigAqm7PXzdi6WafhTBUtmNAK1Y6RQZWv",
  "key28": "xwJFLfmEZoHiDCw5T1ewnze3NtHDk9LFvyaZfwJUxjETY9MZKvsagA8ik145vBMp5Py8fMmku9pa2oGwWKXuFkH",
  "key29": "3vwEvcC5AGHuV36zXheLy9ZekTH4eprXwUn1cC8KAeptdAaA7nmULpg7MPwMNP8pRVHmvQbQEybqEdbPp14E6UEq",
  "key30": "5Ppn1Dx6uCmQeFGWXbWeFS5ZE1wZX9DmvtBZTJHGk3bDywPxsobeRbv8NX5h3VCzP9QSfMxDQnoNrNsdtzhzyVDc",
  "key31": "xxo26kywPue5nVzwFDwECF9a8cpBDQHybSLxKkTp5TVqvecUQhRftpSVHRKRetyuKoqFCKxZ6h6URPaiBmEBh1R",
  "key32": "3f5YDpnJMh7nnN7u35yvs2Dzp88AN8KaaApH31z9wj3EQ3NrJXiLjRXQGD7L8v7DCPzMLr2ZbQ2NUk5PCk7hXRku",
  "key33": "28LgPKMc32VtTfNrrnp7UTY7ZBTqmFpEwX4SaXK1PZK7BXMJNQEP2i5Q3n3f2fnbvkk1fwh6ZTSSrgEQReuHbUBe",
  "key34": "5xT8U5JmBx6DexvEi3aGpyQtj8tUo1zhu35NN1ZV93iRtuxJ71bNVXBvy3G18sEMDR7sPWjcRqfnJxjNzoSfrSLS",
  "key35": "JPg2rLBfY4XuHzW2UCC9i1dyiLDgoQMUrQVw3dCWdfLcM2SN17TqLUaAVjftN1WfcGjQjckg6wXBWNDD3z8ejdf",
  "key36": "2c7MWxbDCYMjHJMuefeKCiQ2n7BvYS11WPF6xng1NCG7XD5foZDJ7XMSLEuPPfCu6c7nb8TvQe2TU2ZpwAA1KjxC",
  "key37": "3wK2HVL4f1YX879LjGKxsJaNCpNH15TWFwp6ausQWcJw5R3WvNg1zkBv1Fs3WSuRKioxNtSmDzZY4KrggSdeeWkx",
  "key38": "3H5Yiv6nMghw5aN1pgHcMdNXype9HT6fZesZYZoBqzLWMCFAAtt7mhXebaCHaNPLUwz284S2cyfyEfEZAUonLdcB",
  "key39": "5QkBFAw8YWKc9EVfa8EUhoQuqS33xiojpHfJyqpyBgkGAg44eSqcHR5v2ys4wqD5PkNrMehQ8Q2D1vkwW6jLmJAd",
  "key40": "3xeUuB9BjGnfoXVfPW5Y6ZvDmqVYfpHfu4Hhuu6SxAQ29HqnvZtS9avCLYo4GjpYsr3vz6r6q6jctKDeahxmJCwz",
  "key41": "5wSedxNuG5bmVVMAZS7SzbEkTPzNmferNpTTNBFvAu9GAWTsQdhgqhQ9zDhs7WYwesPeCCfwrdfjMoYpBjBpWJD",
  "key42": "wLwndMVeeqyhN76XJr7AuQs13VtaQJBxQ52tKgC7hSYmaAnvMwtRiYGjm6bJg8mMNw4qFLHEpycinHki1HmKYrv",
  "key43": "5fkAg7v8FKmpQqpC79UcfBj8PSbBfiDcbRpGVdFDMqsPqzJW1ZPr7SqRQb5d5SgmuGdAB7HMrzEEE8FA3cRRTFBN",
  "key44": "5QXCqKVPnMRG2NWfheRBe8tWhSuiYYMXAzCNHW7zquMNfTq2ixbS8rcwEdq7wJ4UDhuLmeDJiF46etDZNSTAfAe2"
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
