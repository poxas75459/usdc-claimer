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
    "3XPxu4FWcumkfDYEoCxvdvLeXUX5PwmLmetUak7yCUgau8JrY4kwcBjQny7UFzoZarV5UbL8TEwSLpLoDDXvFH6V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64jQG5osWQRU8rtj83fF8okDnmkXBnY5Jwr6vSeQfT4Jvzgj9HPyBuMTjgebpPfh7UK5T39KTkKfQ58ypf9vyZHA",
  "key1": "636JtroE55WQXY1A3VbQQQXmzCW6FKDfd5aDofX4BWvsAKBwkef6UVEBETA5Lzm7iw89AByVEXYpVjbfQJerU6WN",
  "key2": "21UjyTK5uVdi2iKw7v9vyrzE2vVY6Tb83xiuXpxt7CWqiHkiDBwWeR4dP726YsTop7DGmuxQVeHJTsAHKY7rL5fX",
  "key3": "4wubdRia3QZyWPraHcyX8YM1Q1sRN2nB5T7gdox9oidtMAHAe6K1fWZN9QgKJHwk59CpRrxfMti5pcssro4c4vJ9",
  "key4": "3xdbixo1RrdgAQ2BUwPjLXRv19PinEbRNbvXorsLDWMfcFnh8HWox7Zh5ycpSsbM39tgd48MsYcy4eMwfHrdtMsX",
  "key5": "2pjczKfqp4d9Rjjo5y9xRWDAprbbf81ApCvZ65BrzDtQjLMTbZ6sDDtuzu1EXY9uYxpEdaKmzidSdJpsa429ahX8",
  "key6": "65Z6SWYY3V9GShxFYLefsU68d6CiUtfjnRMFYisJSL36PW7fLmp7Qdku9oc9LePPTHvdmWqmVvHte5GPWoDchmDL",
  "key7": "22LEdwn62hk2F414cppLjqVSvKq2eYkWWhqukGHw3M6h6G5rENMwaSwBDSNphPYT6vdTjxVfBkGRnHdGQ56KuUVF",
  "key8": "5ZTZwsCPigUdZmTYpLB1wEpCL519KXCQmLUw96r4mBX2bDWh9x2uU92XM1bJnxrfKhm2KLjZzyiygVxrtVrpqpKE",
  "key9": "63s3KPdVmd9UnuaBLH4LFeDUYNEubQj3zXuSsjfFgm9dyvu2eUEVSqj9kmgjQNwHUizTYLPCQKdxf7Q2gTF31JEn",
  "key10": "4HmngS8JcHZ14FvFe7gy8FktJNUCs3oYXYPPZXYrxcsV8ViMViNyj8BPRp1LUCDBk6u85bnmidrPJfEsZm2qJzM2",
  "key11": "41rkwfgpYddvYRZ4wHXyoW4sFTQggkn3bqwDQNLW7stz2kRFkxvuoVSov76ipSirVCw2PkYX5jiG2BL97B3UtwtY",
  "key12": "5wKbmtQtPpc3cetooAb2oScpCZHjyaC1mhtqBLKuvugP5SENH8ePNHd9owcR1fCPqBorRgF14oA7eCwxxGnT1r9L",
  "key13": "233xwJYPtssbCmJ1ejVU4tP125wFanqcp6RnsvbydGxrTGAxtqvKNCW5pBFVmBfYT2kDSxUcnBL4fP3ka1TBJ8cV",
  "key14": "taRoLXxaUt9AjyJthZiWcvaPybUHCbgjbw3c2pW7ovZ9JUPPfUqHycH2n6jABTtjDjH97hRq6PKs35kFoLNZKE3",
  "key15": "56LoMQv9jPFdVBtKTKLw5UPKXL1qMmJywiJp16ArN8u1vqmdC7eArNzvixbYezpihcP2DqwXzo9ZhP6Lqa7HF2U",
  "key16": "5i7vu1ucGEgFQiLYTm7nbYnteCUndN2zpEEAqxJpKncggew4cupJsANtHvJKoGTxaDXt8CuvYR8nEFAMomkd2PRB",
  "key17": "4xHHZR5kAxxQLN1xTybgKgqRpeAJbwU2FyrdKeUgXUwBXBUwZbxNnakeHKrW3PHRg1dFUAKFaFZh1qiNHz4UvFo",
  "key18": "3A7MoFJCMoauZbfSSavMgJ3ohtfwov52T5czMgsTxdCEThTWRoptj4e8abtZQs8F6GKEb1uC2ZbGUDxvBFtrbiDG",
  "key19": "3Zv3qFgLakFMfgsgyFBWau9TKQatVzDsmQPyF5GuJLZJtpviU3J1sNoMmTvx2DpEx3Vu97YBKX8UoE5hD2Sx7Yjn",
  "key20": "jqJmmeCCr7enmj1bbnqG7d8NSvxzqxYmCzwz1hLZotSNYrjdWsZroSDKGWrsfeRNWGRNjFbUmCWkpto7fynhwFq",
  "key21": "4kjHBdE1fjV3H3TFJTkqEgi8EYENhXKJ8WK3u2oNtHE2D5cHwieWgJ5MbGDY9TjeaHbqGynBhtDZ8ycZqRfayntt",
  "key22": "npNYH9TKDfMsZBRxmcTtGUTWkcw4YnDZGyDrx77c4cSDD4zRdApX1EqfRb11sn8dmGnR75WnMMZkyDeJfP8Hk1V",
  "key23": "Chr1ay5KgxuEYM2DTAsZxEfm4LCsfpU3U9GdC6pT22X97a2ehDVSjdNX4EMdJcxtyrxcfG53RtvncaevuQUH2GS",
  "key24": "Eituvk8hu4ukSD7wxxTeb7nDQZ5HDH5oMf135Fs6ZGU7QU1p8XVhXmQ2MxkPShESPk4kRdh2kzrAkGog4KTqDiw",
  "key25": "38ucPyiobsn6SzX49MhbAXRx1SqxphZ6vVov8N3zLTXheg8Uwqg4fMveMNesNBKBiDbq9GT961iMGQmeXMEp82XX",
  "key26": "3mAmuzSeQy6PtCzGqWfgthoTCL8Xj1Xdn9heuKr8aoR9V6LwAihme8QLvwP17emLMYo6trhtjLTJrdjP6AaGiKcb",
  "key27": "338vDQADeamq8GPmQMyvctgMZWsfxCjsyqvc4EY1bWDuNEcmPjeNdoYxoQVaL9M3GYkKjv9ANmnHYXkEnRgVPEEm",
  "key28": "5YMJqweM9BtDzp43v1KrcHmEqSWg3JLWUsnkpBv4fb5oKY8uCNVcBUcrMA6whxAXT9GLMR8NygP8QPrH8S8QQVAq",
  "key29": "49rxiDatWvefWjUY2xwdTubjDQ43jBNE4PxxEUSmi5ZRhDuzT26EBcYNewPv3TaCyAyzEXxdMhfQUZ3FqkEAugPU",
  "key30": "2SLwEdywEoUTkoAiYxq7G6x6VogTb7V5bSWCfCg5aKh8cSbdNwTSM9HNG3rxxvbYTubtVQvrod5WmLpLWjDdFEgQ",
  "key31": "48HwjdVRnVgBN6hPr2bi2WVZtPgAdV47TSxfJNePpB9hGUZFx2QEUDQWGrCyoRetUsFVULXoZ8Nrt5XD9M3m7P13",
  "key32": "4tvM6udqCrUoJAJmjKUogjsWwpTxQML2uX2Rn7CES2p9EMURwuN6CppWaiMj7k3xUMV2jr1uyGuLTbTCA3sM9exp",
  "key33": "45sUCrV6QtZjMEqo7DQVqFwiTr6DAFutL8VGoJns3WHQ4paUdXRy4rYEKapUSi8rcutsv1L6hDxfEjNwzyTwfH3i",
  "key34": "5UdJdXxtbRb8uFsgoMMubWnp4LNJBjqAA7Uur1VwZUthYpSgk4DSfoYF8SkzE8km5qDGCA4nMV2fhjNCCdFueJB8",
  "key35": "WsuDbG86r7d9mz8EF8dcAnHaryW3PFCcPhMFBMN5wZLk2ERf1C2SZJNC8wEDSUG3aRTX9zD9nNYqwVKHyzTGVJi",
  "key36": "3r1SsH8c6XZYnWa9DxF82evwdeFPN1Niqq1P5Sz64EE7UqobxvXVc5XU85hXnocuNgearuqsJ8R7ynv4LeM6PjAg",
  "key37": "3suyjeYtiHu55UbDTEvkTRf1boi8wiAXZr2RP6TDtrEAgYdo3tkgasQRDSy5eeAvfCvQGRfCytTcPxLzzzibhdMu",
  "key38": "sqEwEmAn3rppYwczqaZmDFLzBW3JFydSwbALMzuTjsWzeQ5kWch434SsGSTi2mxJokH6FYSGCW2CsxLy3SxanYV",
  "key39": "5vt2YosvTg3TYqbbky4ePzh7morix84iK7xeDoNsQw9iqqoqXSmoekSFZeJeSsHsPYRRjbTxU2TYPgfnEvBd8Mqw",
  "key40": "4Z29okUPTvAzK6Nbo2oSKvXDi4fJShMpEcPTkqDJ4i5bD23n1qnsLcrn6oJyEtfPFk147xYv5QHKmu4VH5BFvGuk",
  "key41": "39AZWf2UKHyX568WPHZu24Z1AegSAgsmLoNJKNct2v3Bi7r8MwXyY2UNdtjGrWTmACDPp6D9vkxhfgDy62iHNowh",
  "key42": "2a7RWp8vf7D4fgLYBDxvBD8Z72ZAyGDyVSUTgHMhQjWCaPybNDPPR6GaJYNqKaFi94aC9a2oH7UkRKVgmZf6bwE5",
  "key43": "5HJUVgSoMmsyykeNjtcdM7SPs2Kmw89ufEFtMMTM9skCAoma8P81oF513phYv1xVfxiLh44q9MpUR4PYRPWtmYj1",
  "key44": "3J19Z7D1V56wfWU8qTAmaSKXha3h42JWVVGbArf2X1rhcD51N9Nh84Hr1NwCGppp6yUFUtMZ2BDSV3Nq8BYEYUMe",
  "key45": "4V7vCa2o9GAHPoJAMUwtWpAX3RrVXFw9SNX5vVqYESo5zrmVSfRW95SJKsXEN14sWCie3hSYyDNXevcJXKa2tvrS",
  "key46": "35cNxdjQC9Q5CArKnd11kLufgAFFW2HBeNKFMzVW66AnkrAapDsFJBHFd5fSNX2J4r8V6LY47fHWv8RQ3Weca8vp",
  "key47": "379HRxihR2XohEmaDiLpcb3iqFWoGfd9E5HzTzfMKKxKuesqDTSji4sbhKA5MAzvS8EqaXrXyPU6wQyoP3X7RkK6",
  "key48": "47dVNjWGxEfVpHFaTDTKESnmveSZMUthiqfBNCTx37Dws8eYzK45H3MhC5YQArwtYkyzmA2D4sDp2rt8pQtG4aqo"
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
