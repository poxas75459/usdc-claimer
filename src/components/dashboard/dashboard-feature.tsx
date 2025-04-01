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
    "2opAyWrQ6FtKmH3jy4Eds7JB5neMCwrJm64nWnuSbuGAbq7wox8ygtXtxHbCsgcKZSPx5yUEu121UyAeo7gBrFNc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3W4R9PPefrUpTiragPcdGiLNRJ2aJgo2Mpja5EDiQfN5jqsEPWwCWJrt4zC4erBxppqWBUzBftknVecEEpj6ccvv",
  "key1": "2Sru7M4wA5zCfQc7hG3uwucjhnUWRfTrVtp5Mhy95jQ23qwqxR3joi3fnxP2LQiyQ6s5F3wvqJAGtJYYsofymdw8",
  "key2": "5Q7f9eY9WDbuFv93ayDXqBzvkYJmvT3MD4QxvPFaeJj9KuNmMzrXzvv9H6BnbBQtTRjYeAQfw9vY5eG3xAidGVd1",
  "key3": "2tSydKGoxBz3JVhiF4LDTADryEbaTByA1quhzaNwp4mr9oeGSkrggevdebhZZj23HQPZk7FZRNfAZD2uaf1mTzVT",
  "key4": "2ozsX9qacTahsdFnEGtTR9mQW6ciqHa6VV66MnFoz5zQx1Yv6AdXEqZXSwtTtGaR72ZQKNzdWMBX64mddxXzCqxu",
  "key5": "4dvUcSHzKm96ksV8WqwL1i7W4o2GShUWT59vouQruGZApqZB5HWu7EwN6wSW1zZQiUXFAcEQwSYE6ojKbaLKW4pZ",
  "key6": "5vpg2TQujb4zTB5KBS4YXFpfWSTCrYcYBRREi6nC3ZD45aWgoJbFC1bHxa5HXniFsV4zgcsBzpoRpSvfAv32UJz2",
  "key7": "5oEM47fTATBrP8p4BQFTbYf1VVwCjcwbi8hQuLv4Gq1XpXZ6QmsshuCuw6B4Q4GqFQe4MrkJkMPkj8MjiT69pgmF",
  "key8": "8YJvqK79wjnTEpQafQLS6gvZsjgspkmKTcLfM5UHqEKn4o5wWYy817ko4n6APBgV2WQg9b5EiKAJKV9Pksv322N",
  "key9": "5yvADv5ZqiYqy4XfSmrEtJftU6m4poy5sVmsitbd5ToXSNfKVCWTPyBtdjQrpLYkRbF65y5XL98agmaBVVSyi1ca",
  "key10": "Pwupc2NWhvdiJezPU8z38PsEFND5Vs8Y7E481d121d2Aj9TFhBLSAe1Wpxx1EeFWV4bPWW7AqESyMYCCtUasTn9",
  "key11": "4nApAXLixyzyxKy7Z8bwhB2ZgdA3QJcvVhDcQWB4PJEtZeRLH6LgDpfpSJS1Wi5UDGuCk9QsJexZsf9q3ouqXevo",
  "key12": "3F9sz4ijswa61LY8Mta4XFoECh5zh1jReMNArPdPe6Pn5SAfYjDyPiEogAyD8fkf9t3sN2rP9gmHGw16kw7u6Uhh",
  "key13": "5wzt234UgBKrgzaZXqwvVAxAzmZArTgH2yGvZg2ZUp1F671WqCgP5ZYEiz1gPRkPc9JfoYEzo2QFfLo1fCz6QTSi",
  "key14": "4kBo2NpGNxxYSZxmsHKxS5FNEw5DUQiwnACW2p9mxUS8LcaRQNn5muBE5qPVngbVX8Gx3MMCvLEqjG1mxYPk3RJ7",
  "key15": "5rYRsYWGJRjruUJAKyMS5GEXf9tjXES3kTdPBYx5Z1jYM42zk7cRSabqhENM6g426UDKicNmAsCVtWc6YD63pveb",
  "key16": "3bfd9mjLKBhUNTwrvPUaAnkfn22kg1gJC4JZUbcjuaKU73cmNLmeyZnPhndDko7KB4CXrFdJX6aei2UetKnz2bDz",
  "key17": "dskzkRyaDxSks3p4Hm67fYYRtsvNE2xpCgMJojyz5ZMpP1QSBxRBokBVdG8jVE2HuvKbaoWU2F89UXjqQ7sonxC",
  "key18": "WLgReiSz2euyswpPHuhTEopojsbJnKwzEdyiApzMWeYD3QdyPnx3Tvqx6YkD7tzwQaiRnoBNYoKibNNmc87vmph",
  "key19": "2WhBkJpEH3AG2E4hZuGAnDQrRWvN5dyBK5f3jcU7HWbCah6zSTmxmJoth9v4EQkXDz57UeNyUhy3QPuUgUMpVzW3",
  "key20": "3SJjFCWPFEygivREy4vxSv7Xrnpb9WZBU9H3cvkiD5FJ16TvuxTpFzeuUZm5Ek63h27edCQpG63Q224YFxssLHm1",
  "key21": "4Gz51FytExdBKn44nTWkhrZtFiKUU7TeG8NbnFvbvBEivT7z9uGmuY3EECeYunBZQUHA2gp3DJc8cFxTf7YLTCfo",
  "key22": "Qf6gin7qBtzV3MyJPQxtGi2gwonGs3KS5464STU3pVWrDpHjMqteVwdp6kz5eS5j1aJFEa9NjpDCqqc4xnFAHcd",
  "key23": "2JkoFyioc74Cad4uWDEMVqv4EuxcWqQBrogDLYP9KoZQHJHLWv3XBRA4MPNtuEcztfSU95FGe2x5fmH9kfqTJove",
  "key24": "fdnLMpm87daWaGAMTZMUgyiK19Zk1xJGmMbUAUqTJLmsgvKyPqiH4xGRmigSaTy2sPkt5iTniQpP4NsEXqWtAUS",
  "key25": "2CsBKeRKqgBqawKRY12DXKWhUqQ75aC2j8JzWQ1uTwSjEr6efngkyZtffgoWZTzwdBBZFkX9bYUnwhTBybNYJiah",
  "key26": "38fJARjtakpFgTTvy2CioeJAatLZcxhdu7eNLyYMRNGzG1S3Wv3eWz3JoWQGi376EtFyBtvSrdLL7wdC3mbpW3Ma",
  "key27": "4JZuYYDxMw6DkJ4tabL6RfefPSX1N9qSXEsyvMZyhDRLc7mv5xPTM1FefViP1ZbPhk1NXRrHjXfpWQLzZG7pGFrx",
  "key28": "4eGrfQypWbdrzZuLgcc95NLd1VHy1jcVTBLujae8LnhMcnKSwqa2u4HoC4NeVV6wqQVNYEahASKvWW2xxVv1nLNT",
  "key29": "QGKmTjvxoym3fr818kWdWgbkBfBYGnPSUcQm28QBvyPb85DPwEaBtrZ4D27vW7d19GaAhTcQgJi8swxi4JYXkma",
  "key30": "4d424Behj75hUXcQaFoic49ZqEaodV91WpnRUh5kWBkhpS77cWcnbG4pjp4TXbV2D9eQ1U6zqfWeX4ZQeTy9H3RY",
  "key31": "R8v69aNRfGWQwbnoa2obMWg1oDoia6z7qSFj1CmrYZr34fDFfEjkpKe5xg6cm8CAP7QSHa1pGMsHrKyRDVXeFGt",
  "key32": "5ibFwbrwT3tB9DLUpgocJp3wfBWmLGGbQmbnid3MWciTaCGosdwD2dTHcMMz9EPtyGRqRDPG6DCdgi3JgxcxUMYT",
  "key33": "pQBRzBwv6cPDUK4h45oET54QskWp78WWQeYrHDye8nXzjXsWVSqJP4kWphhiuNiMT7gkXaMusaPQKCobQJZNvwB",
  "key34": "2ejMVeL3Zje3G4kkHMKgGo5GW6qxy3UxXcM45dr5cwbi5pc1b4sK5CohJCYH2h91FYfuQQVaqLQjF8mbKZtNHZni",
  "key35": "4ekU2QhRj63pPXkaAUo6qcyrbtz35YosfRZ3PiG39ANfxTCPLcHvMrB4vPkaLCB7bAXVm6b6WWGjcCBBkKQgTy3x",
  "key36": "2jNX7SHGtJJjFTgADpd1F9GQhFJk4bw2r3XtYGU92erzzZpa3UDMCNoo9LyJ7sN8ihQSASizKhFYE5tmjpXVNrXY",
  "key37": "3ZY4SasuAPyFkVJm1kkzrFyAb66yPDpUvpV2ejUFCuk1e9B75msdn6pP3LMVn3MzcA99MBjBEhmqn63FXJHLephy",
  "key38": "2ExGova7BpvUQQNWDo9G3nPSyXiVcxkLiG4ywNSfEMCALz51QYbwRTbDq7vq4WrqvvZKK9AbxbDpNto2ZkiPz4iE",
  "key39": "hY56UZ8FRnVxGKY2LVg7qSbPZ9DwchvCRCLziaRtnVXenb6DSjpFnZ44M2XWVxbvHgNqtyk4wa5wQ1EDpcCSBSo",
  "key40": "2Qnet7FECEWHeUnbaZFnm8bntCMjazbsvkaszUkABvpspSxSbTEiot7E5sKzqxVq2oZeuhAebLU2jm1zE5izSEzu",
  "key41": "4AiMxoQk2a1CviphggEX2QQtyDqKwAVvyFYDpVxR3wAhtzZqpne4kA83LvvDdkMgZRu5WspfAk9rwNVLajFsHrn5"
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
