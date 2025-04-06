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
    "4aKVYQTadeQz8XUeJ9wsYP68zsdv3p9QcAKiU76tyc5G9GhuHTGNTSvf1UfD8gaicemt7ZidzZ4ip5Lc6r1TkrZg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZkSvE6hTikqVGFFyszAAqcgAsiJte1Uk918DsnE7PLdhemsvR1kRRgmLJUhKmzZwRbewX78fFsjccw1FzeMsEDs",
  "key1": "cwKwwxsQUjMW9Nwfw8KbE8yLqQKeULJpe8zp6Too5U4jiSY5hPVBCwk6zMYMQnG85EZkxxfkoRDmbJD9hbw8rUS",
  "key2": "52Th6t5o4sctQndctYEmgFgD5tsV9SmUxWXAVW998yn9iSHu3kDfyS2obB9KyTnPxiD7A14nSfuPZPQPsFMviW7u",
  "key3": "5poje4YisgD5MoQa2GFhGdNhxovS5xWtqvfPQ2vRxVtv83h1LtbqR5Sfc9LPpsmhP9QCmeUAqKmL8Td3g7qDcrZH",
  "key4": "2Fv9eUnnnyUxVshkZHViEGAz9UsEptpsJkEFoVD8KEozyV2H2gJTes1M4AYpY5vvNR4krNAy4FdqFwsMvqDQCaFn",
  "key5": "2aohmbE8VYn4qfwcVUka2Ebvi8AnVuCpEAVJDotRnLQWpTyRosF4jFoEGpm6y8YcqMWsDhNMmh35retn8mkKs3HS",
  "key6": "2mfKNWmuyMhqArY8qRGrjUZtm5UgLNt6gGHnrVwDbwTi2si6hRuDE85Qor3XQrVdrEz4sqPSUWM618z2LZoEUdc6",
  "key7": "2UhSLs3ooFxMPiekTF5cdidQeYRfVGZs9QtRR8iRrw9CQqvg69mNw593bfW1mqb98uPtYETYdhG9Bo2stpKytvDr",
  "key8": "onRkbhmefVrTggfoRQr7kAvEFM51uArG6m3y232a9N2x9gPUck9yQbgR4UvNNQpPNKK1gku1sNpa3VaHMr8o1vi",
  "key9": "JbmwWpagWxA5HodNiEADdYjK85ZMGzXnvq4L9K16YPY951AbVqFimcP7rCwQDUNnsjbMFjRv41SyUhwvhdWFBqT",
  "key10": "3gMEZ4yo17QL4pRnJQ9DdhECoLGR75VRpSXDT4wshi8gzEuCKGdTVLVvY1AbazznTw34e4MCyNUMuCFbtY3FvCjZ",
  "key11": "5YbpDfXzQQ1eh5DanUzNPaRkETvDWpD8nmbz6zreqfFm9NbWE9g6EWbJyH7cbha49vMJYrSpXemNSgUmPG1Adswd",
  "key12": "36xRMuGUNTrtx3tTdteG9maTGg6P6M5qerCXRGSvqF43sgkhwagvTqkAQD5YcFbdLDo5y5VadJCLH5ZX2MuijBNU",
  "key13": "2YxivQoqzSEvBpThMMy9rB4tcgEu5jZokEbAwT471qnKbU6Kej3bXVSSvg2yZULhw9SFfGreJsUfA3DtM23J4t6w",
  "key14": "oVKSB2Bf3tuN8hojTfifbZRirHXK2RVivT3VuRxCzW6h73hAxj4hfC4C1SstWV4DfHjhtR2dZAsY1eY1AvZUdV2",
  "key15": "5XB139kQbVzc4xLApyvNAmd2K4bHnB6h3UeomW2ETJuGfBR2Yoguc65UZYp6TSYAhBFaAgzqCj3jMF4XsUBxXBtD",
  "key16": "RLHYX9YQF8W1nxd1yhXN7XFpN8eoLGPsYaXoNaPzrn1346VTAH6icKC6SfkoDz6TAEGVMjBJpZ4t3gUiGc98fEf",
  "key17": "5WDnash6nHJEw1X5XnX3bpqj9pfX48WH9Di2biLEDEJwuzeY7sY39H4y2yVY6BHAQLw2M2WdLXkVAQjt3J7rYfS8",
  "key18": "2BAzLz5xQZuzV9G7LNMhpjEUn8istAJEpfvN9JrdwhViBH3cBA41CzykpqdE5sYjhwpBLhyTcXpjWq1wbCdKvfZL",
  "key19": "5VRYbTFjz5FfAA8bU3uRppsjpN4sRuCGhAbtJKupKEa9HdioXLt9fQiAYArZnxTQXdMZFxRbWLC6dj8Nhv5Auofk",
  "key20": "9hA7k5mYMgEC8bpU65cb1EkYYKNfet5AySFRtSSAYdDmM4We1c9JsAGsx5gNChzu5nSSpFwcPJjo4KKivanxTR2",
  "key21": "wPyJ9z6pkF65NyfPfX8nABMo4Eff15jykGMueKnQT268yCEuoUFwVKFY8UASMGCe7SPcx37EkEHoxga8cmojWVr",
  "key22": "5uKZCSoc8k24TFr4APbSQ62wWRiemrU9GaRCoAFeYNTmKtaFxVHAmZsT4EDBFvLsCVFcxQVjP6RctYLvjXC3KQxV",
  "key23": "4SCVLWpguAEYyomNuiDrZ6wR7yq5MUUQLKwGk692CnYzj1jmNX9tP8FSkoboPRt1yKotpybh9H7yEDkw3an1Q9ro",
  "key24": "2V7tdTbtHamMNW6zzivKjUAxN1QejUdW85xTpAMMhnLp7u6Fnd9dhh5X21AfXdraD2aCdP5uKDFCjrBpaoSBQ8Y7",
  "key25": "vmfAJB6tfGtziZPJdZVPeXopEegSA8TJb33kKeT4oZB4Edr3sHC2jFoDgLDnVpxrZ8EXAx7ro6K6YFfWi63wbiX",
  "key26": "4QzfzNR1yzjJVCDvaYwez7REwHHH2AVKmDyU6h893dxESnA8EjitnG7NWYWMGTV7srQB5os6ugjbQtW6EejK6LAp",
  "key27": "S27bP92Cz3cbFMWwqvobemuvM1xB8w47UaopqU86gbQWf3fiVK3ZMm4YuK8vV4yxXckWzBApKQbSRB9HNWh9Txi",
  "key28": "48uX9gbaDt5SGbFE5KWEJuTnUALVP2XmBF2cNqJjYNVJdvQddqmjY8f8VcDtY5Hsch4kjmqJ1tGfYDMds5DTWVUg",
  "key29": "4JfzQz2j8konMQCabKn5HU5U7Vn38jn8RCzpAnengyWduqd26pRkpskh6jvoP7xcNfR9AJrSMzikoN7rqthQnGrQ",
  "key30": "45chXQSUVF6dUEsF8mZhsoWKg7YzvdJxgchiD3DaZSJPVdMEU9SK3pmpzteY3PiZnkGCJXcveyauEjvz1Dsbynu9",
  "key31": "2tvGXJY5GX1BhXLV4xN9dqPSZGSzGqF4HJ1sES13kPamRCDXzMcEi1YWKkhRNNHpEhmdS64GZcghRa6DvKs9wo71",
  "key32": "5bcUZdaMjL855MxYukN6Vejw3fNiRFCm4pnaQ1wyEU7KLniEJ13K55tkeLq7kThHcUDWUAw5kFzD49YwPvTe5it",
  "key33": "4S1MLdEEdPKPQficmFrrTBU4WnVgjvENw6o3KmdgUJ19ybW5RXFHCnrCz9Ts3LHTTkR6FYr5TzDZmWuewvYxTUzJ",
  "key34": "4f3Z7BmZYLUutRZnntsuMZgEcP11cL5tUenoNaA2tScmuNAL5nCEVeGBbxwFaESBuRN51zg3KTX3LLjYv2eScVj8",
  "key35": "5EXpBZyNWTcerQEXZKagygPMSu4dMDtVbD5XvbEB4QcRxLbmJ2azdddEseVK4v9Ki3V3wVV29aqDDJxjXFGKYtm8",
  "key36": "5d4WkNvryQTfkne9UgKdPRwdE736ktYQWQxGeEzxW4ntD8Agn13u8xWFvTCQBrASRbxhVdWU13JVckpyedobMidm",
  "key37": "4sGtXqPCYztPepris6ntBrgfZd26Rf5AT1w7znPdtiwDWnPgt5LmdPdFHxBVMBfJExjrRK9CkAjuvww1mmSsw1yr",
  "key38": "2zuEN5uJW1H9U1CSkTgxgeeoQF7jDG3WDuX5GbTSKhtYc1x6J9tSKZDPB7PdNSbJjJLJLBNbcSm5LaQGXXB5jmwN",
  "key39": "2qobVDxjgteR3EYeo6uHcEsw3x9dAXSQkhD5MHy1r5CC4sGHD6wP4QBBkuCbfuKupFHY8Lf7x19S2Peb7SrjXbTA"
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
