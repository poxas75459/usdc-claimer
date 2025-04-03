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
    "21BxF9ydKG4p9Gna1z1dMgrccTMSkPjBAL954fEWn3qL9Kv6gaKNkmdL29Foqjsfec82qpEHuaWHpnk5kGuF14tn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MND6MqD9ozFgkU489wPnTyuLB52TxQGSPYJZ9Jes4DFXfENGhfvKTGV2iwQJ4B9VvUM3eLdVNz92xJfTkoWbof7",
  "key1": "4PAtpgafDf9AW7g9as2hE1xW6egdbDqgho98jdRZ9w7oxKnQ3FsVHrQ9KTtSxisoZoFSb7jHNCXMZ5amPTvEhJeY",
  "key2": "45tVhBSi2SeFS3FR3XawVhmrMpYv2nb7kqcTNmDgTjXvDysnysqQZQQcSTG6hBkjKna8B6VJpFpLn2dNuDNmFCWJ",
  "key3": "54gE3fvKfhGUpASCLw79UpzotT8cokfWBxQAXewzPBVUKkJt4JsKs3nEfdoBKvUWAvYNiqpK5LnmYWvTXf142Jht",
  "key4": "2yAWh2awgdNNKzy87eYVHenPhLsHcSeVZDt2futij97kpRVcjyZoH2fcvb5PaJudfFChZYY5SwcmqqLePNKwgT5L",
  "key5": "2z9CJinxTuQBBnc5tv5mptXpVQoniaHdU6mAxM5SjxM8k96XTiEALpxKSwuw7qQQUo9Zo45pjZUKD6pSHTuvqpGs",
  "key6": "3cDWdQYNPMANEDuzMzuFTEgSGdFQuueUecmjg6j9Z2E5cmZWabKcQTJFMECtt86ee6QcsPHhUrixm5a9cnWVWLHG",
  "key7": "3qCjk2LhQ2eaTUyDhQzSV5L8iL7qTagtvqygHq28NrsuRZMhycN2r1T32eYmFgG8ooqTG2p1gUXoyc8hQVB7XAAc",
  "key8": "6UpmtLtRRp6eXpKhzQgC7n5RWECcPSsRPYJCdboAQFMxrYmpqetPKMAz9s9ShcD2xP7Hey3HXvxuNGdRbHdkjAa",
  "key9": "5uHjpGBKNC3xK1bzBHoBp8ZNG5YANe4uFFjZpnpmGLJwcJBNLxAe7LkN8AnKyD8DdkciRTqzwsRpsogL4TCAU59S",
  "key10": "4DyUUNQDWkgoEG3S2a2YtcXM5CE2fyAmmk1LgcAVcKmH3PRMkxjyvZJ5UDLsfwXFchWb3szauC2RGhD6483DfR6o",
  "key11": "3hXQZh9wUuUeNpyuNAdxSxCTh7FBJJZyB97sXcvzm4BhMkvMHNojJNudCVfwLtD28WXPLZoSpKL6WymuJbXtHb9v",
  "key12": "2yVGVeCo4GPA3w7WYJr4yN2J6Ms9NGmdqeiQEeMJBMipDQc8PMCWc5oDTYp2UB1SHE2ePAzDjP8Tau6zanWhdf4v",
  "key13": "3p6H49D7iW2Z3VEw4CYExeefZj7TZStfRryLMgiss1DW7FCCf8cVanEmsbjuSfYhNLKejARNh3FhprT9wWSfPHuJ",
  "key14": "QgNXpk1H4vJya4QQhTq59F6jDja1zS81yanMnfCvbL6GGND8S1HngCySH1AnMgdeQGCsEu8my5tusp8g7M3N2vf",
  "key15": "4hKUwq4dm69Jchmft2irUwpLdRbbpD6GsJqsowrRZrpasc14qtkYVrLw35WHYKy9GEdE5nri3Qto93TTMXocArDB",
  "key16": "35EBU3hYW5BJ6XWhs1ofew79bhN75uZF2xsVZ4TMrK5X5dcQLRbzx9DUwkVBKmUkwiFXSQVDbwjBXQV1u6xqCEdh",
  "key17": "3Lsm75PpWgoFsRodMaaUkwVoib8BYdcM27uCPB1pAxE4z4Q2KQQKs3Uki2W8bRCjc39j2bRzy4eADDZjT4W3DqH2",
  "key18": "4dvhMsSnWSvNHh3sxdXc9uWim2LqTbcMxCn45idgXo2CVeF9AECvYvZ8EqrQ694gYYrz9kyakprmJmXRkmrT6pbS",
  "key19": "25BRCkUNS3YY2f9VrFWU4qHdW9kAQRMwaQGJ3y7K5NaR6oHUo9PmppTydyfd9FwHDjijLxGNbRrwo1aD5bXSywyx",
  "key20": "5RjYCJZZLu3h1XXn1rQgAMDrGyYGYX5UtwULXdSJUoaJs7ytmWUdW47t4rXajnFVYERK6Yfym9jXPzcpppECw8z9",
  "key21": "EzyrCpdTH8DcjvjdLjSBpDBfSMdJT4KEMZ9NHzzRxSfHSR1nhKHEQs1m2UpTqJXsco672p1sHhncXfWygtUnD4n",
  "key22": "5khgy6x8uBrwARQAn9hbbqdbxo77tM8uYjeGrBxaGjiAueTEVZQr7vjrWR9eNqtv4CvYxkv4dmYgKNCErwkgjXs",
  "key23": "6aKvXRD55Wo2AH5PMM54WH1U2UaVtn7JniGawjZYxcSmn6zPhABHauCat3iiQ2A7grTvmFtc2jLyU9H1qST8pYk",
  "key24": "CiTSk2ZwA1cfm3YHnFUKskh44piGEbPcEbU9erLwPS7Wsvpgdj2dfZ4hXTfUucELyhkaSPC3QaznMPvZhzDdpVG",
  "key25": "4hHkU7A9e7dzgG7tUBz4HXCBUAgkvnqERgDNotg2RNsX6HgTT72DMnhs4izdr2oTp4Qi5qZBrg4phKA4iEsQfc2t",
  "key26": "368HMzDrQSobmjaq2KqLM4kPPXfR4UFiL6aaq4moxAKp5Vs5KejqgtZVhRmBzymb7gjEzUwGS9cRL9897xYpw4tR",
  "key27": "2xU1ZEWSxTGLkGL3PiVhDpGTHWw3zfGEkU7rzcDmPTT4UE1QCYPaUghPfJP7xLXw6rDhCNzSrabmWLnNum7zfh45",
  "key28": "3pwUeBHsi9yPddaZMXz8eyihMvz4DrQh4RVoCrP669op6LFUeUX8oDBp5FfvRQUdXCSbTkuXm2R5QnjFD7AANyyy",
  "key29": "5Ju4Ki8ZhdVhqTiKuQwCZWL9ujAEr3CuRrVWJ9tv2xphK6vj3vZCpctrWGhPH32gvL3T4Xk1Mnb2Po4FhwpHbQQi",
  "key30": "7vRxoMmy3GQXWmfqpwMxScEgjW6dZ8Sk5oTkaamTF1Eqtxqsq9uC77bFVQrqc24ESYD6NCXRZ9RD5G9jNfpNGxL",
  "key31": "37LQT4XRNuTuxs6FCSDsNYDT8FEMGuMiWAVfi8huWFshPRYRkqkRFGa6raJuzK39AEeP9rPtzCQzDwuuN2DehbSo",
  "key32": "3jEUzPHtnZG38csRAu1VPrsm1i2zt9zyDHuxdvmzn1ZheWq91f3TqtYeaeWVebZqhWBK2n8yxBuEZ1jyaNtemyjG",
  "key33": "65F3bCEvkSheVbWYsNJ74GpHtFySgTwisEfs1qCwx3MnBRXvvUcBLRytXwQ2pZSw7koRHs6tKgB2dcfHeR7kx8Pn",
  "key34": "2P4nTuy8oPE2FcyqWoeB6t2A6XC6XCheB4g3LfDa9Tyi8gc7UZCoaBAXiVWgW3HMQTd63DS5CuR1Fgb2yNHFMCGz",
  "key35": "5bUKgRmagsProLk4dkzy5taYmCDjtQ9aa575DWqjy6oZsRWTKo2tJs8RF4LrE8faJTCskTTFv4NAhKUSASG1s1iu",
  "key36": "3DwvcAoCnBgSbrm85qjfgGNnJgYzNFxfZCPfAF7pPzXtAFnmgYbnbjPvvttBS5k883WD2e92FXmShz5r5iz3AuKK",
  "key37": "4d3gQfT25WY57zRW3RBvhDALvro3cQvyvS8BegdPdJoPqnK9TxkFmcaUEtvFV2k1bb3oTYDvof9nBH6z5KendK8k",
  "key38": "59aXKxnxQkjiABv2v5sKkzVPjLfVZTE62yV5vPrqN5c39eSyuKeHJyXNS6iSr3eW5i5Bx7L93ZivgFkdrSPRRN8i",
  "key39": "5VZnfmGwSDT7JEBbjc7tHnbJPE38anxQULAki3W8cscpxR3xZFX7PZnmrPpdbxZbicv54R7CUe7H5ACGCuELwDqz",
  "key40": "4RjrBY2WTStThUqYyhotg8i3zg9sraFfa3tRJafoZzioQeaBgPKVHRVL4bjh6g1Qzf5qJ67Td5osbKDaryTc9EeK"
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
