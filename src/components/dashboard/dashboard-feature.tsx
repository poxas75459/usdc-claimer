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
    "3KPS4DQUan5CnT2z6gnJswJQZnETU6NnJvA1iEnM9RT7J2DsMARnLMv9bzGjxt4pZjFQxS4xLgGJjMD2yuj9fGEj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MmaUV3bxs4aKcVNKm1P3ce7SnGbL96Qh2uQnHX72UotvsPQV7zy6wmJfDzxAWBxvnX6byCQyFNje77JN2A9iGEE",
  "key1": "emHx9JyaG5kbPEAPbD8CzFeiMDSWM26xyviSPqF9aEbhwYqAyqvScqNEBm3MxePB8Zn3rLtb7NX9BpTLA22Xmye",
  "key2": "5HRPq1FqixwJDyT6ARqCDDiV7UYZzFdVAwGGtrfdyKHCLVqiSTP3JNEy6Ub28ikD9jBUjsZ4Ke8bjhyYS35u5gCC",
  "key3": "PYWaFAKLwBxTo1z1CN2zWNHprx2JzNAQUVUzb4VvjRVej1Myk3NDjkSxDQcpaZWzEbZUtZGwhUKwtnnGJTpvzzv",
  "key4": "Dk7str4M6DMZ1Y99ocNNvDCQ4iSyd1gVtDma1eBwYsAPsCinYVQH7VLGipxkLHfWwyHHnu6rCVzC2GWid5PC882",
  "key5": "3AoZEP8ihiSxxrogbsEXBzP8Zf7busv4688CmArEv1nRJ92LPNVMpz5MiCgRfJrUnkRpTH19mPuspTHyz9eFCwJa",
  "key6": "2fQpKx5kuMj4spFXCPxDwa4zuaZopo6SQu8gubF7Qq2pVYGtofFFhCnSmp4kvQrxiWxqU7baP1V2RXkBgDNo63rP",
  "key7": "5U9jZ7SYcjWKCcp214gzFckbrwM6YCM2aq22gwc2q4eQrQnzg4JQmeWTyTWQtMfuGdypDxeLLQd7hPsvYr1srSTb",
  "key8": "2GyQUCqgYn15oN875F3JoL9mS5uv53dTSxdSJsE2XzPJRdR18oZ82tKzpsUD7N94EA58uU6AN6Y7cw26iRpNNNjj",
  "key9": "4RuguoybZc4rttAwS5BN3SKmhjdLrDRzQkfjGa4U7QhKgPBC1zgwi1US8kgVqSxq4JGNbgcqSjbygaG3a1CukUHB",
  "key10": "5HsnyssZZN18grVdAaCaeiUAJBugLp1zJ9itfWMApm4FRCpQmrBxT9bgTbu9Qd8CHZAb4pEG8YrPyudWZrpMEPvo",
  "key11": "59p6s9X5Mm3Z7k6vhDwz3pyY6t2duRXcNaRfE1TQbzZzBrg8ZCdMqyznjESZEK8oaN8c8xWbGStu1iVzZdAdbEvf",
  "key12": "cTzndsTumAfH5zMvpTsCTHu9aH5qmjRSYkhnUAoSKiTXSaoyP3pPSbzYNE4aMiWDy4cfmtjYmDxeZ58aZ189unX",
  "key13": "5sriCRwGyvsc376kKqtMxCZViApiwmqAus4XDBm8dTBtjtiH5DKGxaab9A3JH1Td566LvTzFKF7TRwnupyRSwrze",
  "key14": "4mhdwYhHWnUJzcEeLJzzUoi925sKJBwJXsJby13dqwFBDfnQ3ksp7MTY4iAvhkwTD77sQeM9ZZVjnGazyK2j9jcP",
  "key15": "9YTbNu5c3HTSE7vCc9PknCoTmcB1TDVKqNzENh2oirTMpJVsfxSkFjkFGE9sfeKw9HXgkf7U7hf7YaopuQCPh8a",
  "key16": "2RF3no97rsFzirw3bmEEfC9f7JWUzT7WG9a8sT85j3DJyuEgFcnj7Mxu3qg9yAecdCJgXmEjHea26mKCewtrzQo6",
  "key17": "5HzWmBJMG9pJxetJBiA4Qg9VUYyCwTDJN8a2N1C7Vybgh39K4inToYFseXoVu66fBAFY4spT8UjPimf5y9E493pN",
  "key18": "4p5sh1z6empXnU8oMa5fJ6ijGYXxzBTCDz4ZcYGoKuD8qLkvawaRXZkXxBQS8PienW8w2utR5tgTdZ7ZubAcKemZ",
  "key19": "ew1haojBzBEFMqJaNNE8HtA5uoaLX8D9wmLr3tvzYtrBz2e7NATZ3tzKFPbmJyxzdFmyRSd4C4L92sT4GnCo4jf",
  "key20": "5z6LTg3nLMkQzFD2X3wkfKhaMipzx1r3tbaMa1c4L7tAVcLxoNdHdiPNoTGtY1CRMMCDSJWRgfTkzB27TxNAE3gx",
  "key21": "5eUf7FwemMLWiBQiQPTRxNm3SedmpsdF2vHZnACAMN2cHrXoq3o4N3QjGdrxpbYGsfjdZDPpLZwfhpDuDGvqGTMc",
  "key22": "4BnV5pXYnTGXpLh42uzFBCUbJDShNT73doRazfivETD2wqxjaGTqAG8fWMVdMm4ukEiG1tJWiC8JWtp1UYfWfRUK",
  "key23": "2Mxzwhwpjoig1uyn38Vk4oBE8GLg1T3ZaaiyoSakuy5rbHJSJ8gHqLdYZNYz3kMwudf5ua59mFewEyiphKVePQ1z",
  "key24": "3PKNzg5orKi69xLzp7bURjd62r4uKWe73YTU7Viu1nFVWVrkfxV1CZBD1rb46AegowayToxKqj7kyxgfnM1nBW9A",
  "key25": "33d4SY1cfi9KmSxMj33obLRWrGDR7F5dgMmWwmJy4F8zYuB6BbzmXqhnUbmEaaG8XMsF8zHYJ4nvRJJUVYab8mD9",
  "key26": "47MwLRn1EJE2kvq45AWVV4TMRUdK2Uzb3B1v3zm4w916GFeZVq729WsZj9G9MwAZVshvEE31waFAg3huLmF5RJgM",
  "key27": "3FQZtNH9cFUP1ygXZAdMpTBDpWbsLzfrxmuZZbkqEoaSAagzwvv5Jj6H3idCHsoXGK6bjWL1Mr42biRNMkrcNd8k",
  "key28": "4RMSaqZ5w6FVBJjSE3LLWjYWTZ9WBvmEUSszMKwkBcYYLnmSS4pHTGCCVEy7FdgQXZW4RSBgra7QyKZANMgut3Xa",
  "key29": "1DfWatvAGJKrzws1NhJgxSTYSmqjragrcqEoGcveDQo6TdJbwG1GiFvgUvPrgvg6SrG4puamVhAFecGQvL8nJJv",
  "key30": "49WDTEVCoKmjFPCyp44jzPY6Vm9wUG7uDKTx13k8r5U5rkYnXTEzKRDRBpwiTwdEa351765HMttWj5tQfgsCPmVt",
  "key31": "5D8HmnMCd2ZrXBQ6rNzHwuYVo8hyea6Pnx3ZbWq6DBx3wUTDGi5kxjVCE31akD1ZXtMLcZh4tSg5UfJtycwTjSWC",
  "key32": "3yvfBSwnvemjZ5A4Avp89LajWomD1AMw1FHLDJ7AHvWzpGPcFzY3twodyS6ttNcGxpH2mE3R5K5wUKeVkFDzQTep",
  "key33": "GXDn52bbmKB54hULiyDpgStung1948HDvhxBAoz473H2axTTzMdiZ7zQ2TCoV6BWwFjuY3ydBnJMZnV1aGEuz1H",
  "key34": "4SmKEUfmVYoQgHLVQrBa5ubRgyR95MCZ93a89PNejhBx8r6fh3HSsfu8JsLyvSpJ2MmueNPBexQnxPMmnw1mudj",
  "key35": "4WiUh989AQD4TGMZ8xKiuanbXPjxkz3i9vLaiFf6Juj84xP6dmHQtjPSL8J1EH68Xad4j25wc6ErEDJUfVANewE8"
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
