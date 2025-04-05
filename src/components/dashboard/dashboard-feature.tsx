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
    "2LUJAZvykajahn5FjnNeu9EL9eBh6vefswXDSYkpfCKY525HSiYk8fNLKw2Po9wN8XrNmKxH24ch8THMgkXaiY2v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W145kSRpUzDPQbqUYdQhQcWg1VHWKqTjZmJxjAJKxSAXN257Aw674VuZSbFdcgDyraq55PAsSFNmdVtV8p2xuHm",
  "key1": "54ZhfKHTptSB1vXVL5UD3UdmuCFdYxDKKb58S1mX27nSySiStsfKRUzts7UdnXVMnN4wcE5CgmhmDQqDLgZym9QS",
  "key2": "Lq1Zy3GtEVMnsXLPdkSu329KXFNXZr9f19pRWjv2idzMLYfiENfyxhdAQyBihq2LaoqLNPwSysmxq3mQ5zXzTmp",
  "key3": "3QTTHXRcox4LnxNHiwbZLY4axvd1qcLJUWfg5iTyirRMamkbTAxu6wWaLGVfUJaxnFUnvV4ozKk5EoaLQKa1ADgj",
  "key4": "5zxUhQ2wgQPtFUUTh2qXw4ect4YoEPWNz9GnsTPNsk3en8Ju6KR6qsYaA6E27t5mdmkQ8TBwVUtzMTUeT4qxiu1X",
  "key5": "pz7Z6rmeohHnQBsKsfqAAM4UWJhYw2hPLf52RH2y2t5krGVqowR8ReoXEUxcj1nZdxFkAaR5WjaYNZ1RQznN8rs",
  "key6": "62t2wejCmNaMnRzhYA48z1ySQAogfTWnq8V97QMdJxjt3jnNedh54ViWAqXioLc944k6ifJuZcaApFKZjnGRkHSR",
  "key7": "5EoerhWEB6kxTM9jD4LKYyEv6Rgo2fmyMVecA9y3NrDcKuBaXat53sh4rbGVgxm572qrHVdMrAdxSHZWpVDcGJdZ",
  "key8": "4esa9NR5jPoK9aG7GWQiA6yX8USJyLRkGUc7e179FNNpadQbAQTB5me4qM6TV8yXoui5kCJvrqY8cFiMAko8fzy4",
  "key9": "WP2oeijJmzCKS4EGrUcCmCdzgxz2aU25wEqw56xun3Y4ufZX87zmwMX4rkQjbQHwbvrcBzqqRiF9uzST7SP3quF",
  "key10": "KvT6PsJwuwAEtAgRFmKVD1V6dQa4iemEDGzLywrrD6wk611pWmVQaw997EMDJ3oKH8F3eVVjusxHaYm7NzGvTTV",
  "key11": "4bcyvETVvjAHHvERhj7Tv4A4k9agQQaq1imwj5aFXwekkVRkdrVDAu69H3UGibqVexbh18tomi4Utnwmc48xQAiU",
  "key12": "4FQJqdMSbqfXTxn5WXAEApMhVCFP2yQJwi8nXMoFfMb3v4x7BqwQJhSmX3btVgKfsq9bx6urbEA3qNGC12DeZD7f",
  "key13": "oWFGHddde6azFWa7H1zowFAB6BpF6scaXCEmVu2iHbgKRyV6P3qgaJttKx9BXMEvFWj9xBkcf8NsV7VnEmv5Soc",
  "key14": "3Wh6gaUGp4dbnBh1wJjkwSQAjM7PxAMa6nNPn1q8iRRUcyihgH2NsMKxah5DAmqXXogqPi8CXFNrHjTavJwXrK1V",
  "key15": "23bX34zFCCoje6dZ1FkJGN2ni5zC4RojW7nhZ5m5bLcjUPNPv5u8GSRGLWFssc6Dy1C9Jgjdscv9MtuKEXsiQoNL",
  "key16": "bE4LCWzseqFNam8sXKBg6kqcab9NCveNhp2ipFA5KYmaboeuqTbn2PnhzmBYGYbisav3QMeMcLyiwj6qKP7gguf",
  "key17": "5hpmpPLmmWQqroVHu9xEeJwqLKxRocueguq4wjcgHcTV8HhnQZNKJSLgQSnBZjZTE4fbYByo7wkkSLJnhMqutq4N",
  "key18": "2qNExVBmxackuzQP6aXmct6NfYWuRCPsMtZXwPwrW3gjQB73onv2JNPx8mNbcy5pGwV6ApCk2KNkJxS3efVLXtSU",
  "key19": "4nBuGdvEuNfhz19MTeygSSPCwYexwH2hN3ogDkkZhc9aEKv4rcEcP8tnVeL8qAs1UqFZo6ERrm2fAshmybADdAed",
  "key20": "Xz1HUcmoTdidpjZkZ6NGVzJsASxSMy2b1awm5ekXaaPo2dSnhz21T4ziVoTEeCYk2JuJB9euKPpeuptSdZkXp2w",
  "key21": "4rSpRXN5er3KeYJSQq3Qu3ZzzvYMiThGorvSTGzR9G95o6svkqs1XU7bvmnbwAHktTUSLTrm5Q37FAqUbi7NGNJm",
  "key22": "2q66UDwkqb1PHUdYyfsWJDQgGiHpfSWKniGJW9hc7d6ywB5GwNNe3WoSBiLw26cyCmo9zcySrfu1GK1ESPXm4cXV",
  "key23": "WKwfMAgzy1AoVByo6SPTdhFBaSW3d5FkCuvU9L7URi8Utc9NLwJzqpW2sQRwNx9J7TJg57kCRzC2oqmF9ndWhho",
  "key24": "4bgKEXc6xxLNbpCmXy3jsGscaXK3qyXapSxw7hGyMqWoAgJ8qKCeTQfZwd1XcDjhyPDWaneAEq5NxaqSwfScQro3",
  "key25": "2z5heh2UE9KGqoJ7xd1ob6a2bjjkPSz8DmF7UmiHTqx7Erk8D4hmR4TyzD7EbkLYFBzAR8agjBjfemeaAYxUmeT1",
  "key26": "2jgjywUmPpqEvSLEXoGWLpHxFkQTGjab9KZeJhXVTuuAiZbbUtXG5tz4Hiya8eRyGmrJwURj3pNrr5bihU9sAJNu",
  "key27": "5DbEP28r1g7RzVA6WWT864CaYBtrdHdGdcdcUASUHiR1uehScfc9ynjDjmD232Sh61Nd2VZVY5ut9LDYZMeEfpUn",
  "key28": "2vssAAYdfYPaJfkoHaNZVSLBts2cffJkftHfb6ix8vGHXyF7Wgt2tNWvTtwLUsFsksUizjQkHSCMUi6WVZhEYHNb",
  "key29": "2xncuGZirkWtgTEcVRzRw1kkhKFTVzYBNapDh1oL63kU32cDD3LmDTT2ovFF7XWEYtn7V1y1HrmmEn3mVn7PK7v7",
  "key30": "p4xTJD3yZemqv6zG871LQsYkokbki6YZUutqkL368LwbQnchPnEihkgz3vjHtimrD42eYBZGk5Y6MoNNL1N6EdV",
  "key31": "3vwrk8QigeUnZySzAozcVbBfJmQHDjYN4NWV1LTFhm79XM3Hd4FwZshTX21Fdw4eiUwXpbga3gxN351iuL6Kred8",
  "key32": "23y6PEST73tX5HKuGCfRJ6VKPedvcmK6T1iUbCctbxKHA97Yfbe3RNhQTJjHyk8Vmd5T6pz4RPU9GvmXUqLi9UPH",
  "key33": "4mh7C2CPrqq8Do9rQ4qptBctMxEsf1oZPVEKR8v4phDLDmaDjnPeBawhA47YDAwAbyCk6Sx5cAA7pFmxqgB1ENci",
  "key34": "4YKgF9vdXfHYEkE7jtX8fwv51LWArgUnWDio3cN6sxMxQiXDKygzgzKHTAAp2E5DGQC8mHoidjAaavn8a7FBbTe2",
  "key35": "ZWBq92NCULeKuppepAGgMmw4qmRuGsGLZnQnqQAwkrga7rR3g2rjFnydRjWn4BHcQBvDNpLb7qm8oPMLfAcReRZ",
  "key36": "5GU5bs3QXnV8JNnCcL7EkbwW3uakLhUU799HB2LjiKNxsM3B23JwNSmoPsEj6tJpVGYiUwf2BLSzydAKubHY92XH",
  "key37": "36fZig9Naprfuuz4F6bnu7BUHnycHPDvF16PPAF9asKxLMACtYzfYajiMy126MHoZDctut1Um6umco2b9tCmy2uN",
  "key38": "4VP8S1dweQm7L4HsLc9EX6YUsXyxcVSSntbSg3Y1yxcykhbbYP9q4nKViVDg2X3YRei3W8CRBRMQD6ProutANpU6",
  "key39": "i2xPj83m9JQjjLRRaby3SHg5o73eiJQnvBcjfag8n4tBynv219AF3VDnyPu11RnjemVhWZzaDb4ngwGa2WAjH5A",
  "key40": "TATRQ4gFf3BC8YkdfcUhDHf2QcLBHeRVX5hbmanWe21qfoLGuSwitgQbz3GAz4EYBiDrmzfY5jCgtxD85NLWt7y",
  "key41": "52TEBRUFmuntepxqKuSb4mtWGnkDqsd5wZcCwDVigfJwhjJGYxMiz6gdNtdBZYSsmdbsDvgoZwBTN8ot6JxemvQh",
  "key42": "5sAL11LyDEGp1cpafVqvLCXYH3T4Wb4yvLiGYbXKwsJq2JzGXKEDj8kpPVtKEEoSge5R7q5YQupPyp8Qk9X9sA3",
  "key43": "2R4jPrSq3oe9znC2hs1fwJfsJS13UfUoWUKKYKVo7xLmYpVN7KgYBpLN6p2ipJfe6oEQMsXLFhVnn5aNdBy8y2v1"
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
