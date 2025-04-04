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
    "2Ss3A93ao52RLwrTobMZKFiRvUTfKoz7tHCA5LLDHwUMWuzJKUrQFbPZCP62os3ahALfALg8pcsYbFVifLaRLQNM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wjjHQfVQ99DKK6Dd3N9apeKNTYtv3QYD8kzUcQMoBVkPvSRiwyko1DdjuNtCaWQchmGDbqKQRHECBNi5X1T4MRG",
  "key1": "4Qe8XaJzyTka61UpYQMP4Y7bhkyCuSzhmuGZRkdXXBWEJYq6EiWTVRXBn1Tf1cgLYJKBLGF9kwiTBk2kTXjbPWNn",
  "key2": "37kbzQtNZGXxzo9nt1osmVRcqeRyzFgTDoKvjDZDbYHohsALokgjQFu77RVwTBhVfv128gR4NbuNEh5mEnD2fWoT",
  "key3": "5ShvNTJthYR93CdaevL7wwyqLg9va1iviF6Pyy7ymSuf8UGL1TJ9cA1khYtcY2vivLT3H366RJ2Lode9eY9wg5y7",
  "key4": "2wjaszv68EDnRM7mTyadjvzDq2oQnAuFuqqwpyFQnBsjtE5XGT5k4Wu7G9Eq94sVxUxYnFfu9nvpKEZ6fR4AuG4H",
  "key5": "2g1qe2jX3hjEQd6qtacsmvPxEzA3rNKggRCuie4mp6zLJ4KA5vqggKj9kJyU5PBnVomMteH17hHaxk7gZZgbMrry",
  "key6": "46bioAcmW6shrFqht63YESVMZAaujXU4k6Ki48Y7SVaM6FQQRMR36HdfRyxNuEjWhyh3jdijhnhceToMeJUALhFo",
  "key7": "413iox5UNkLQw4oc7BGbvBoQvZ2PXmJr3Li5txbo2E8imvY5sU3JKwVQBsFECijCaNT8aoMreYc42Epy974EF7AE",
  "key8": "5NuAfBgAXMBu15n2gZqHx8HGqtpk48ZEmhbAc26KK6Nzeyp3f5AxwS91RnMrk5bukSsHkeDXEPTjDzzdPKmKuy7r",
  "key9": "29Q6F6M5pbXL62Pn7z2jGFNLamNBmxMQSG9gDsVEtPRiPZ4zWA3V5FxQNeNQBJtithzArG3UPZUVRm8eDwca6JUC",
  "key10": "oqaFaWpgoFUe5u6ZCsKJc48Aj7qvJRZEUY75AJGaPzkTXgQzyH6R9Mzozxk7QGnhEbwAnzyFKVq1iXmUi75UaSA",
  "key11": "3YVdEmvaTDFUCrc3cBaz3p8pjMo9zTR4u4M3Napf7EBd8dxNFZiSwrhbyHrAGhdZNrVV67QFf4egJNGffCFTmGNJ",
  "key12": "5sFsS1YmWh1cLUTCY9xKsj2dKxtkdwtd1FDFdKzzD6UVecTPCZ1cwW1Kug58h2Xk6a2mCDgeWp1Y8CJmfHmVhdXn",
  "key13": "2eYDMEgZfoaWvF5CCJR8agyTf8TLwy4GuCidGwCMrtZrLkRUYBiBRaaUgSiHJLEnaEHz7jzR2TH29cLyfgUyr4Wx",
  "key14": "Msxv2ff7DvKuZjtqy5E9Yr8jAb8LFJErzZjqfviLEUHGLJoD8PpFR3vPnLSVW1SN9FCuL3MmdXra7brFgrQ2cyY",
  "key15": "3JLfARJiz3rycHbrmYQW73eSofDzJGLBWhJWa6aUmr2SnLLWzSbAqBy8gow5RVga8bUAXCfVTAmmkPKRTzWGbHwX",
  "key16": "3sTeWUnDyrM4ujNmbszUotbExygQyoaN7Q1SST9Md6npHAkqeWnELZ7yRSh6rHj6oNkB7qgMCXLziBK2P5LfrVyq",
  "key17": "3fHiMPXDC9pLQwwjKFFWBCt6SC83ZQKiAwg2LyxMsj5eif5rnJE4SkWjB1YFNGksdDbWsSkYUB93rD1zYcXPBZqy",
  "key18": "5BW9AP3DhR1X6HowNtFLLeUdot8y7tCEpqp9eS1Whf6AeUETNeSMnWsEH6zcP2cEWimPUPf8NBHXqEUtzd5vXyHp",
  "key19": "THj6VaSPaquVSrxfDnC5iKjYT6qVWhvZTb514XXhHwH5mjnjpoN7epHeymqiuCLPVYBDqgjDQpkgfPu4Qz4v4vx",
  "key20": "4CvVCHsvA4axJ25LHoRosaPPwQLq9vnCz619u8oe9hMSKg6YW96YBBAKMiCqNb86XRxvZvYLMqV7D7tsjCMnkkp4",
  "key21": "4uX2xq8Qy8iMb1FHoa2UMmH8XYTN7Ja3MPZ7dvJ5sVPer7hTNQsX4GkNP2ct28eqDKP3dMtDbEWzba4hN9BhVCvd",
  "key22": "2B89NqH7LjmNqQH8Fgm2Msy4AZMV8QWgyjhvLtvHKmbQMTkNu4GER1z8yE5Fa3VUAmm21jDfYvc97z9SgCcogtBU",
  "key23": "9FZCQJJ3stg7yRDuiqhtYYqaDZizTm7h91hnco8K8P1CWKdxDCVKQK95sWWriBAfyC1UUPyLQ1v3UtfUkcrMv8x",
  "key24": "3pkdG2xF7ab6fWm81FhBWMaEJCqKzcmPEzzh8Sppewa7z7c1dqsT85LJNpebTT3ebdUYpXVWVKstM66t7FFdQKah",
  "key25": "356DoXgmzTA6RrdE5DsZtA77XQEkH9D16wQk9Rp8nFwtWSEyqVS6xzghXL7DrRzxksYbCo966MmMCFT5gzbGPv7x",
  "key26": "3qqzwzKgTmFbgQNrRLdHdXuH6nnHXqVD7YhpY44irZi8uqTDEBqazjKugvvGiwQBK4qJQXpbobTuB2cEUrBD6Ec2",
  "key27": "hB2rCKrMiwZPYVNCrrDFbEtiShLKSLpKjuwf2z8vxcCyuYzS1aXamUcynHK1NXSuZzQwjKqMs4vfvPz1MD4tDb6",
  "key28": "Nbq1WUqvs4iamgYduGGspwJZXK2qcXnccHMbws8aoeaoEdhUku4Sv4PEGJBFV3omirrjj3JKo7DxFTmRvKSWJKW",
  "key29": "5qNeVxyHAiEg2cao59WLdRmEuPnLHEofLY3oRy2kBwDvzf2RsLYwEuxi7qoy8GR7o1W3jS1vqA4uVPEiaDMfEQBz",
  "key30": "2i9pmkS8jz6hrCPPSGtnuG9WGJa4aXCF4hMvu6enLTgkkmocPeD8keMQM5kFpMHS6gGdGzYub6uKd1eb37mbBfqz",
  "key31": "2ifQK22TWRgwsgjQfZ5yJEJhMaMNr6FXz5MfnG3L87Ytzt6LUXqhXMrazA2DVYm22Z5io7EACAmeoxKViW7zuZeF",
  "key32": "29TsCD3k27UZKH4R3LrwRVkRvAd2n2q6SojBKtfy9i5bChbFPnrYBTwgRKao3EFUF8E7z3JUVAXMmeUs8PJXiEe7",
  "key33": "gPQPUMrhupkwraLweZtPcf6emWz3d5aaaerv5btJxBDcyAj6CrdYvoXhMLPkTKKxYHzTPG2aL498BfJQWYxVYoF",
  "key34": "F9dCpk75RFfuw14kLZ5v9pSNHJtWWTGwCz2oQXDovSCnnz6RgWTAgazja1WvtkKFoUSasijgXMUaSkQB5dS54JW",
  "key35": "W86HZoU74rohtM9cVgzdc9A54kD8XQSXgjjTYrWwLdNJVnbnTQMkSPoxBXdyAiRy4LziyfW3Tj2yaafp43FiXc1",
  "key36": "31ERQ5SmTTeAWjvYfmfohkCCLvmmw6bi3k2VZ5tNdsa5oQqBUR75FoBuzr1cLspLH6umFYkKZGkV9Wk5dFhAwq7d",
  "key37": "21fHJjUQ5aDWiTZ9Z1kLKK2PqvAm5t8hUTFHEvtihdRP3zBmV71W8LD7N1v4mnJDbfhuxXrorqbKzwBEnmWFqcty",
  "key38": "3sMYm4STHRyDnSHa4cZwUYCPt8zBaHLMK1EjSL9dMftAYfJsbRUrEqXQaYHnGCxzJe7caEw2B5My8fW8Rt8LLnkV",
  "key39": "4bU4PZKq2MA36hrVHbmSXugBB1t5V2w5tLRKgYrfD2qqKHxntLtjRz63NZXhpcx3FcUBHevfLHQDXRH6ReKf8Y9Z",
  "key40": "2mpx5yVFMSiYe3SyW7YRcv9f85gm7ASHMcXDQPmUV54UxZdzbV845a2811TjYvkSDravFKfMoSktTcBgZusAYiGn",
  "key41": "3P5WtQFZ9Wo4bEWuBHkvQQPVf3LtYw5kySFG1zkoyySXDbeCL9m2ejgc4RuDikQTUSQJeYDq6NWNDx4rUWV4MS9r",
  "key42": "5hzYSn3XxEtQxhhXQj6PDzdY2cNphTLjXV2XPm3RZFbKmDeyy4enGXqEdffXZ9JM39BJkbgQ4EhQ7LbxrT6Nqj2c",
  "key43": "Gm9Fz8aGvEcamkbUkyA7q2cndTcqKUgnD6rYAWzBwERk3b24EtMCGqCa6YBWsxp8bySXZmPxM5X6KNGMTcTZ3FS",
  "key44": "2iQvmEGTtjsRFfwep1HnTTicc5MykgQWkfTiq1e6eMoBMnhmCAxMLtYBbHwobHQDZDAtsWXT8SrQTsEY86APTavt",
  "key45": "5rXbh71TeCaucgDXtqCDBHhaPuBNoaF5TKQBnMLR7BYgWucE23g4cogeqQ4pbdeTXQjvGMVuNFRsXNhjAzyT8cHF",
  "key46": "4KsUdacmdHBdHKWBW2RH1mYDT2sqkSZdW8N6gb9stnCJV3QTkAxFm4f74H2iU78PNc9j3LXRYag1g1WdSh7aK6rk",
  "key47": "4NkULjSDKnNRq1qNdnZyq1PRfLVcC4gxCixszywXoAtpAJYhVjKVXojjwrK4Y7Eu3bTzDH6GyrngAcMj7mtRhRqm"
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
