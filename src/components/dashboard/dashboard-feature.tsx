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
    "xsHDjAYdEneBimxz9oi6jvfAbKstzgU2CF2i4nKMxmBaCeVQuohpZ1dj3ZY9dX4ygusnh1D9X2UnYU2CiiKPjML"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vuwEahi6xgtLQcpjwf9QjyjrbMAJVfYxsdcERQcz8MsGqMJSuqH4PjCZdqTygB3G4aERh6G1fgGjszABEC9wRx7",
  "key1": "DyhQVAeESQxpAkFGN7ufFkn6zRVzKHz23BHPPtD7TeCwwkPZV6zWkKhow2ARqPwDUg7MwFxcEy3xqW3jiRRJQYL",
  "key2": "57SZ1BXrDrXkA2nS3QycuQ7skqmaJDcdfqSbBzPvQWtedxod9YyETNhpYMw44R3gbo3G1nDDUhRg8v2TRtSvZvnb",
  "key3": "5pRQgR1jWGA141wmaG3CaHkYXCYf3ydX1B4ex8ViiJjXD5zAvgjNfynLG481veahiHnFcpJq2DRSc8s98vwriYeX",
  "key4": "3nX12TiEqdkLFeWegiwKm4WFRqNJgZhWJXFtcu6bGELLvC3TTDYVAsAC9oHL7QQzhmNY1bR4PQVNZqnN7HN3W5Tw",
  "key5": "2qpXc7WtBZMGWFf4Xn88gL6zP2DpWn1EgKRzVZypGk4KjHFcinKTigxyzKHoe6zzhjnRpLUXhsScuJfQpYzmt5mJ",
  "key6": "5q4oktKvgGaVG4tH7TrsAWgTzpa2tAKdmkRYAZMcpxZfrkFMPHVT7xHibY54F1qd7oc2ABAv2tTGQ9CMAinHdJjY",
  "key7": "3D4gUAmZHsVPkM9M972tzQ283E5sYBPvgG2NSEgWkXNThEh3VhtNJyVN39q1S4w4SPJYGtnfQ6KT2h7S7BaxXDCn",
  "key8": "BptkVCN2LTgM1cGPT2xhrpsdZnjQsae1SQqiMsrhz8k2qFQhCtJ7iZyxMDezihMGwpeEFLPeWhsjpBNiF3VTJMs",
  "key9": "5JdpsewsVgDhZdeesWWwD1eY2UddNcGicGhKX9GK9xVvMq5xmi3kn6FdxywsEGby1FCdF43gdspMD5gnpakNZzre",
  "key10": "4UdHA9EnWrYEpAFL3tFEK9reJLwjqCipJyjM1eKFHKT7Pynoio8zpgHVqBvc8YxKav71su4vqt3rAp9R3TmaUGhX",
  "key11": "56a5P61zEefBPjKAH7Yzrwi2rJgkHUyMTxDajfjDDwC51gz8yEyrLe2wEvgHqY9sySdDbpB6jmbb7eDMrTATFmyu",
  "key12": "5aGFUMGLQXutdgiqyCEUTUaKNMJT48z79dR1xDCPafnftJPHZihW1pyBQ3JwysBMT3s5dcBpH3yd5h84L5FzXaYc",
  "key13": "48AaJo2abNihEhS9fQkZ7LmPTxu5CyEN3uoGfbTAfMaWF6XJR8tTVitRJU48bTBpH1Qup2FuNYKricraefpod4d9",
  "key14": "3sNGDFQee5T8CoHDPmefEpDYaobEBon8bx7f6fJTZb3m5dCYNFHtDt5CCGzKN6oXwxkzmBpDqgiM6hWZHnUX243C",
  "key15": "3aVW8rXfXN5mQuRpWpN9nC1tFMKWxUaqBHqME7ds2mApXsGJiq14vVju6Keq729axAuWnT76wRisCUAYdVaDrL9c",
  "key16": "5N1T92YRCG2FhrRQWiaTMWGr4VGTBXNjfU4C58hdUsDTq1RM9oDfMXV8yM4bWTnLuzhwNSuW3AerJNKgL2TxbpZV",
  "key17": "2cjUBKBGSEod7CDMShR55UEjxXzESv2pzREyacz6jnsUgjo2NgoG5jqap3iGoEkaXqTw3HR6TgeuLfJy4UhTRhM5",
  "key18": "4FK6zqGDtHdPV74hWL3kcK4RGbWPMiksLtdKxcF8ToRpjNsLdvgmfHwaEYwHgweAvnu9bkkR5FUPeATEY6H3EhEE",
  "key19": "3etJL8dnUqGhCqrhRg7EJZveTBKYDxFfrgED6jV2HsbzUbn1pQRYSSpNPwLtExu9tASwgdLSs9TuHT22ZfC1THsk",
  "key20": "4u7V5hw8PktnfHvm4vy2Hoz3tKqTCntmBDVRxqwpFJGRYpXhoi6n8gZVKeD4XBdkeJMMMvjHANMATP9BPy7AwtHq",
  "key21": "23UqJ499nKhvAm4np5r9Gtxt9RjJKTSU3TAaPPoZge1q4WBYBnqzvPUtaz4o6zwZqCswtqFZqcibq2JscEnGnerG",
  "key22": "2sk2D95ZtEYgpguAYzrv3JddXm1cUYtdxJ9G4vzBAQa3oXReunL9zMcvLJJUoQm5nCVhySnkprSjdKEwsM7F27Qn",
  "key23": "5DVivMzov5pFvtTLZZ37TywcX2aCGsmj34ukMaBqxP2uW7RWrgTXqitrMdPx3oBCU3K6wTFSEeAzNvw5mY5i17By",
  "key24": "5ozdmY9sPUUV5ytbQfoYDAUJWBPfoid4F1jXrAKMi5h5GoV1HNCLcjfyUkCa4eLgc1oJFfkmP4rTTyVhKRjxNik8",
  "key25": "5esX8EqMoST2cgYP2615GLLo55jvssHgwBtLW6U4nzqUw4UuD9RmQXAtzPRPNTdLfGpvZxqfD9BgjXB1NB7yn6mK",
  "key26": "swYDTP7DKvmNXd3bXbbHTLxEmdSWJoYH5ZrBt5HBr9TPUP8VranS5tTySdQ9Y8DeaeLQznwkhdyuJUYyBvzhotf",
  "key27": "2BaFPBQ3an4wzBudvS7oiHhdvs2JZ7QJWAtnYMSbMUQ8qcpeo1sztYsCPNZT6Jr1zYWZCoPRTRJ4YfiuuxK7pLUd",
  "key28": "2QmRbj2CfHVjf4zZ35KKPDhmPrLWav77Sveng6RRsrmfaPo6BHpMMHvmj8qRPjHcAVDTMoR75nvEub5ZH3fjuSUd",
  "key29": "4WWpf2tdipcu2wiqQZZDkrLqWy9XDd57288USG82H7Bn83qDkJUBsHhWAwZQDG5ktEG1pitbT2gfhNRfjQXSxHyb",
  "key30": "3LNtU4TCzoW68JfGVr7Ln7tVrkE7F16qvULcSy9dMUimeACsSMwofmi2xn21e88f7N1gVeo14THffYguQkydBvTH",
  "key31": "3pgc6TBiBzmkPg5fJs7kDWWKANNRF9hC298B9oJxCyePb46dU1dmnfqUCstygU4q2UrQKwtHpccgAMmCbQJsSjHp",
  "key32": "3ecbFatoYLFr5XonNzcGgqzxjR9X1yaEe2XJDAS3T8DfpRA2QYEVXeTnZwjDCihBHTYu4avgWjQjcLmmeS9EbrX7",
  "key33": "3ew3hDAnZ8aYtRV8eCBjgkXrsajQZBGUK26nNXJ8BixmMUNnmPTNdPrxYaESKynrWTPPEnB7tGnapYuCUcbYynGn",
  "key34": "3zwVzYeTtsC4ekeY4Ys6UvjVGc8M9Xezm9dqwD3FX4Z6FZdi5jJKFd9ssKo8x89zUjEuHWrpgvnZ7qydb5M58rqw",
  "key35": "2q8GqgaSdmkyxSUeKyJgjxz234CMPoe8Tq7z5SSTRFR45t99yP85GHrXDjse76rMs1TGNxFruFG4Jy37askzyCeS",
  "key36": "3txASL2zToEWkKxgQGNZ15UewJGWj7FugXPidm6xxcV94r639y4FSoKMFUAeDHDRbDUH28hAYtWGje5cCCWkMwbs",
  "key37": "2spx8jXjH7Uf6LPunWRoo6KyYThgRbkWRtTAQiFyaBEoWDAFEvTeEHPdzPkeQntECiCzPaXEuSnzhpTrHd9BqgEc",
  "key38": "d2T8eQBNNsyXxfuQbEs6yUGehK3E6MzmBA6byzTRafPpmfxNB7yTJE8vx2Nd4kaMsy63B6ASu64L2viWZTDWELX",
  "key39": "5Y4WeV8RZDxcTwwT2KvtFWpZAE5YBfB95H7pei42bHw8A8jeeHq9ShRzF6NHvrCV9GCbQ2ofgqsmNtpmu4kxRenw",
  "key40": "53R5S8aTZWiUmu416JjtpcTGRGVkJjhoT8NumfjnMHCT48V88rV84KkXyuMxrKPSzvMbeuMsZuTepV5GQN5ZWRMb",
  "key41": "4LWJLnaw3jPBRAvFarBx6vH4i6DR7HJPAWi87HqSaCTwHvim2dXH5kPChe4HUxTAj6hwDyHDCQpY2WobZyFriMhv",
  "key42": "4nvwBTdrQ9262R2vTqjN5TtCpKnUGGHqTX57xMsLaJuQW8JSm7pNsqt5iN9CXXdiFAsUXfiEoLXpT7tMCkqQXY6G",
  "key43": "4op1HHmS2kEN8S48b3Y4PsHCXL5RmHFy6RbgAZmGs3PASn2VTHEJgkV5e7nNqPCbLZcBeZi4y9L7oqP7pY1KVnks",
  "key44": "eci3zaUwCxmy9YpVEnmK13NcymxCHnFtNbteYEWzzTJQpvSeMJqBaEz9QubjGQr96rRAzixrkcu84hRmuwjAh5B",
  "key45": "5yDY9sRjfVRYFAbZsCGkWJeXjKXBwe8FJs2MvQye8iahDkrezQZGiqgmGxx2kBSxpBmyctU9FETiT15bsHEa7KqU",
  "key46": "nt8Y85B1R6KpVQ4nKK7bZhQ6KFEbxiDRBTVxA2wSi6m7Ns2rHq1isBW9NydUFcabBKRt1awfxeFrDu138j2DhZk",
  "key47": "Qef9zzQiMqu4sxa8DLfLJXngnTNjaRsiagVHFRPPA7txbQW8F29qPWCRkztfphrD8BZfHM75kuJBJiUEPmDzBa9"
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
