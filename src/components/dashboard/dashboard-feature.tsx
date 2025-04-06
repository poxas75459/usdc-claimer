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
    "63dMXTj4W4QdwEiZfhxSNcyw6jgM9TSgAHs6pZjXRNifcyyjisiiBSvPY2Wc5dU1Hxg54SkFyLgnSx7ahw1S5t4L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T732atvqMziexhbsPvk91C9cbhg9ShHnJQfXsVJTxiR8Y6UjDhNfkPX8E2KW5EyWzrbRQrPZUeW1W2PE4unmj8Z",
  "key1": "3ufVA49fsi3Uq24wM9pk6vf1n48UbfbKJqtzj8qjaEHXAimjFCAx5rGzDxdvYAjwtofEKMPNbyMZ7P1CxGrurxkR",
  "key2": "4L5zwYRUdav8CR3HqjYDUCSNUxtsJArWLR9mzt1zPbvDDD5TDPn2n2PpcDxXfeBb6HVZMqrnj8J4dwg6WXQ53Z9n",
  "key3": "3nAjRFhenbn2NDxFtMXiv5fyu34ZrKrKPwYqtgM8pNDkb29mZThAJLp1YE1T8TdHuBub8QwzPTPPHwRNaXwd4Tez",
  "key4": "DXennSLWCLxZRmvcXTJ8G4VemJkNQFUU9st5xGbVdWVoMo3bzG68rKuNnXjg2skfwsgshu4ntFk1HovcjESysyu",
  "key5": "479kYUQ1r9XdNdFJbNKpzxP1AechVxKDJgh49XdDsa37VJFRGoBwQ3sXmyy6gFHtTcnvdXF8BJ4hGtQUZxvc8hpT",
  "key6": "3TWP1fPsKiKW5AS2ykAzeTDvJkJ3XryWUT1St2dAcL5PX6TjAqGcUfhQSxrf9naEkgpn7WCY9Rg7YmRcVkfwfbVY",
  "key7": "4AKFTD8W1caDHEhFhVYgLiDP9HTUcbk1wSjj1DP79VWo8JdyTAKRbKPXuj1Q8ot1EDog5ySD8mdKfNww2gC2eQ13",
  "key8": "4TabEb2fULUvEqpLF2oqZ4v4koEHvYF2qurvQzFUfSAsggQ4sfTSx87FmBoSKAN8V7jSJXMMKe8gWHWb5ozwqs66",
  "key9": "3TtPEVPhhYLTqy8PGGS4928gxbpkoVT6bhVqHfGmkwSLPoNMHTvmT1yWeCXmpY9tTUWML8VaPVFzBTXrXNTMW3M5",
  "key10": "2fWdFNoxkZ7wdqJ6CZ7Vs2A6smRHXv6dKUnvsBhpGQt6ymRGS568uD2iudKMMoF9i47YmceiqWkJEuFWfikbj8Xn",
  "key11": "3Nv342TGjG7Y4p2eQHkdQXj7oUPRhn3xNaXwvEPmTJRwkf7bjRoB8Gjg82uzG2v4Bb1L5r6HE7uZqsWre7Q3PRAU",
  "key12": "5xa817TyqKHz9okiqwtCW99VUw3fNig2WAwHBbW5vSM9mpT2DTdwDCDT6CC3h5NnwS41hLJmaPjcxkgb9i6tLF9f",
  "key13": "3LnahXscmH49r2LYZtQMZWA1xqFZMrr2mkzgjsT8BAVEr9drKd2nyu3Pbwqc6td91rbcTPD6SLWe5fesExdGdu7k",
  "key14": "5bjcND2eU1arKsXZtiy7XSdGmGiLkeKjToSWG5BdDJ7my3DqujgVMpMMxnqxhWhdPx9wj5wXXix3MrUYgRwmtUVN",
  "key15": "4Fu91sMB8EWVaBBiJ8W2pvF6LHVrinBBosQcKC2h6wE8NV9mGjzSwdJfbeuXw5PD2zViS64ReJZBqq9DrVCbiifC",
  "key16": "5q1yMX37f2YSkySHRwb3XuVm98UNSZ3oCX17kTQh1Ja3DAw1RQ9AyYmhiFkMsYKDWSDQJtAV8gjwde1jmdKMidxr",
  "key17": "3EesbHYBNHtDgzYNiBMnfZ3ANtXmEPpzGJjE9VDRKc45D9xXx3j8ecg4a59UUeLMrq3FPQrqprjyNcefeJFDm1T7",
  "key18": "35VQ2pHoSSVegM975irN5vkeHJYBdb1ZB8ee3adqn2MKmNp1fT5X3Wn2sFHF8JUKQfzh3Tjb4C5rq9ovzg9udMkH",
  "key19": "5uwbA1PaZ7BUfncWyoydygytvkKPeNip4BAwFB3kakeCg7KtKFDKQJNowJph1dQxt84ApuqB4o8WpPqUCcuzqvXt",
  "key20": "4TwLJcopMx4UUfbbreSTE4Gie6UCj5ySQzodzszx1jPMVdf4XZN5EmgHvhC9ACFHAfhYrQTRrURVUUb6EUemM6yv",
  "key21": "5A66XLyDBdsmRVektxLrQmWHbQDS8tRteV9MjriF4JszmqTf3JRs5sqc6okfCDNJqHmBij5UWJxyMcJ8A5YCXpMB",
  "key22": "3Y1ReUKBEusHC9QQeYrccmwNE8BMWUMa6W8XJ6emHhguxjfGEb2cNtr8dPUYDQXZjACcU1xDKtjrB5fhrp5uVX8A",
  "key23": "4tbRbnrh8S4mC6p9kY5gAANP9rUzM1dtsbNftQQn3ZF4NfK1gAzYThFrii5pVetm1pMuHSKHuWKrRApCfpHfUugD",
  "key24": "4xJafKiGgoHd5CGGX8i94Y5NDqhdrxqGfurdp25vq73tM4tjJR2PXyRePmLgtVUDswPLncudrixfTTHXu56X4ECe",
  "key25": "45hqrfEpV7UH954V8nomNj2swV2LFdtHty3ygAeGWM6vAYysbAJzrCs5PVMegJXzU9ceWxQhTqE4vtWdw7jNTWFa",
  "key26": "37Wj289EL9s7AwrZgD2KTBunCfGntXwuTDJPTs2aTXwEUYryweqQrLezog96BFAhTu7AsTigJ3bRy5fVVw2wmsYb",
  "key27": "4SsjxDD1KC4VVCFWMivfnbaA7ZhaGCQyC98F9LteGPbkWrMzPwmrSdGfAZLegS8ULV4VNQMad4YqjWKtJx6gzXeM",
  "key28": "3i3i5uX5jqH4ozaEK7wosxn32BUxADVa6ij5rLoYLjNkBwkdGhn9JtqMzuJurfTicTJo5gNrW6LpHdw3GhAvEyEQ"
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
