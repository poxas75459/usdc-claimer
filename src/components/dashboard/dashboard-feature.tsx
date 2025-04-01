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
    "29SkPoCgfpGgAaet1TDFafGYQX869Ttm8aisLf9yJMahQjqHfYUTvrjeYdUorG4Bp6AgXnYmvTsfh5RXkEZU91e2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SX45LQPFY2Ym2jAfsYpvrGB1KtwpPLaFdpKGEYXEfVuowVB4M7wz7c979ehhKgpcp66SWQxhLFZXDerGvaRN1rM",
  "key1": "d9pK8mZxgdoQ8Xo2H38t9iaZamoRhxS6PJH6JWuJzmhaWL6Cba7exFKEVRXnsgjB6BvEbd8n3JeBRcCQTE5h75y",
  "key2": "2hy5uD6C5yEppdjqpyZeXNG7h7ZRcLR7dkk144yA7cUqoGgKQj2YuyoDZHTA54jaaciRCU1CrtieVbeFR4qRyyLd",
  "key3": "5m7Fvb4jjxTmBWRG797mK456CfWZbYviEF5UmGLjeuRWmxoMDP5DDg5Mo3uCFgmipBHx1SFkBFX5XtbxpmqGhtqi",
  "key4": "5DsLkpVQBuN2dRaYgFUG5xvonTjjDo1CM14daQPjzUwCYMNwt6wV2QrHJoVwBF3BM7ZWvJ8d8uXGUQF84L8PM5H2",
  "key5": "2eTTYWCiPfZ97hiSqv343JmanjdvtsDW1RY5WfUCD26WQBqbGBNyg9vAxVYmRYUhZEDrRbheMQtqboMHjYRX4af5",
  "key6": "44gnUrgXhoK1PbZ8NCCKs1a5ndZY67dGWnTeWfymZ1AuGTrKHeSjV2v4XuToEH2RaKCyaEg59ZhCTncukaEQAK4K",
  "key7": "4uDk8QAVExnezLkcXcM2AEzD9t6VDZMi33nmSdk8kuGNzNG8aCzM4YmY9ggaC16X5DZ2wojhLFBcEXQGnWJrFzpJ",
  "key8": "2aXdUD6WU9xtSP9uk6gvNK78ZcnSZ4NYUBpVxefPLMLVWE7FgHu2kEESHwK4iBU9ftBPLc3aPmWuxDoybzrFTuY6",
  "key9": "5Zue8KMjLXAxG6zemcJbz3G4jUUPKHCCBngt1Lmthg289BGGo3wCC8c58JVSUAzVYALBEuZnxWFg91EB3JYyUrKV",
  "key10": "267mSNjXULgphArmNE64XAjRpySk77wL177LF8kmFaZF8SQSz5xHjgeZn8ebtCqpe3HYCgqEjtAtu15BZhQVismx",
  "key11": "5xXcSDwKTXpMAqWZk5w51o3Dv2qGAMsGtG7DMmQrSKSgBVYX8VyW6Pkc5nyHLUok6G7GvCiHcWBAndszGcXN9Lz1",
  "key12": "5cHfd7UApSSJS6ezmx8roZSTwVb172VPk1migyxzQuMNufyJTwHqzkoSFCjQA9ezmykpjbxaKRfxfmqeVYD4EV8j",
  "key13": "4yt5TwajBaRQwPrnxCnCcid5CX1wQj1N41e1FL5iVWdYMhV8a9UjYJR75Do9iDF5N9j29KHDexLhy5bwd2UyKfxT",
  "key14": "4UdLvVukXaj3wdfdn8RWjvQCDqXXMWbWb63yAiy4HiYF4ZSLQyLTukojWyVcvmcDJ7u4UDk1SMWQERDwy3M6KcRy",
  "key15": "kxWDXNDtAh8LSMGbwDWsYfNEPBG1eKtqJbj3UwEykFA5xMgsAaEa4vPniwYiw2TBrTjkFawT6g9bAtURAU6fCcD",
  "key16": "2uLnoJsxFhgpADmHBecTDhcYjuF3sroV4yM1i7RFsfvjqadFuiebWkbL1BtJavEjv9LhfwcimvyALi1wTki1Dq3i",
  "key17": "2KREWfnLueQJLPJvfvjWECiKzYbBkAY8yVv247x4tzhQhDajHQbtZ8pJPogqjSV9aApTiSqXvBoMGsy8GuHyfFGP",
  "key18": "2hj85sMEVByWphW4ZBgefWovbruQHTBUwQitwsvzTSgAmzK6uYbBVFijVvpNu2bkfEsfqg9XotPhWx9GHjcYX2Lo",
  "key19": "2WF5F5LBeHXS3Bhe9TGwuP8baEL6dtfsqLVgcbyLgMXMqf5sdFdH8tpE17uEfAqpdRNji4HJfYCpLNAc2Sw6R14a",
  "key20": "5MvszjWEYqRtUqjCTw9xQhPXixJ7p7Acgk8xbhiRvuqXSJmjr2r8zdydbUanSxJAtySjZpnzA4ccLykeWY1WXXzy",
  "key21": "5QDm2eMJdveCuMhX1Pc3j7GPAkEkfT4EnJj5LFxoCwMfpZz4puEjfcP7G2fjihLXL2uFdtJv1pVHEycjPegeaqoK",
  "key22": "43QCqHqzWZPybfZN6eyXev6EABqcynVEVqAsxWGN8xSatNdzW9zrmcPDj7hnMU3aX1bKCEEp5fVebzY4x7f4e9Sf",
  "key23": "2s4YMQSe8exTapbkmAmR2yTzvbabES144cx92dnWg87ZUvcX3vBNGAdjLffSscnn6tNNAymh5tMo3PGngwC5hCwP",
  "key24": "4jjs4yevHmVTQTHu9of1pkwi7biH79bARDsw36JEGiYLKiv9s87KysLWs9HzU5cwVrbQpB1YUc8WeHUCDLR2eoJx",
  "key25": "46y8MtDQspCSrrM2Q3zy65iDJpoBggctRhdH5oHK9N2QwyCWaCUCvu9cNS13BWHU7bd63EC6T8rKEfJEueEA8aoA",
  "key26": "65cvWbmDe28fK9rtAtVeRR311c9UrJaCXfzeuNxTfDiaqRup4vYxwSy1jqd2vtuwa9DyLubo6duaEaMzRHGrebgd",
  "key27": "2HRMJC6RcZ6dgdLx8R2PgeYRTNa96tfBwkhXoboTnoS5CGTN3HHu7ncq13mNdpdEH2o1JErkrzBf7E2dKszj6Twm",
  "key28": "4kLQchhbb3WzKjhdZvN7rEqbiYC5N24pDRSNVrWWmbACfqkYFkU2CKHVaoRaHoU1MQ67eKoGRKmtzmXkkRsqfLFd",
  "key29": "62u87zhgRLuHbCxEARo369tvMnzMSs6ZBc7i4FcHdDg3McZ57sDDGA6YzVRTQEDxY7gebfWnzgiQaYrjYWEbQT5Q",
  "key30": "2GfDyVs96hphitbdjbRQwAX59t1daAJXKVF7Ab3enhANofzWKSc5cH6jeBodWec9F3SV8fNo54mJGY7MXZBZJV3V",
  "key31": "2pDcYkmm9X4oMgUWQ59FS2nDoqw4GDRQLS8YsVBehcYW3LMCMNXRowfvJTaKCQmrvcX3MxWGAunMeYgX3cLYSenJ",
  "key32": "5aTba6obqm2xyRBUcZ3bMnoQNEtNtEHNYV47huU9WGFwsR2zmXWMoDH9pDRR2i8BxmujUz7Y6abu5W4FSGLosioN",
  "key33": "5BB2h63JAq9MYB9YDmrk52mPuzehJS8okpQbzBytkXUnFDkzKnxhGuTGxivrL9FhbTgcdrEMVvTifr5KpaZumGUj",
  "key34": "3Q5L26FkLeRaHHeDmxYZ1CGbFtRxo8GZTEn2pbDhFogNYoknv6U9A7iJ9BKNyYnYFKdt4da6jZdqTfDvVTgvyXxq",
  "key35": "3yB3SsA3DFvFuVrwyxicGDpwrCecXPGgBVM26dAWNeeUnNuhyoNtTi9dbrJP5YhjMH9dojYAJY8Ui3aNGxxM39ot",
  "key36": "3wkLAEwG52Jo9y1XfPgvyouDvtLNoxKC1fjuFWSnALZCfC2LQv62LkRdjwAWMKLxFu6JQeFCR9LPejsJ5i3R1eeR",
  "key37": "629fGSvmHbafcLeESrTg3s1WPUmkWgDCF9UNny8poq3cwGhz5iTJFgQoDUAE85NgAoBpb5eFguDZez74RZWeF6dL",
  "key38": "5sFbaNdfTSFGJ9FBjJXFXc7KtVuVrWvMZJDxahMLcvvKnvTenSm5qTuBtHfBtAvhnmxDxjjtpar6eYXATaeUnA5g",
  "key39": "3EkLC8Gqrq4ysjECB43NfuMTEB8Wo4EELbmGagG1pEMgiBiRJo51Sn7egBqHkh7WTTNGLktX5S7hVHQqc6BoFvAn",
  "key40": "2F4ybdw8SwjsWUEBeAWyqs3rD9wUWS28N7GzSGpdMQGJuxvfun2GRin7iTUyVb22HmhxYhHaja1fNS1wLB8uBUYF",
  "key41": "62ggDDU5juTFte2vMz6Vtr2tktXfTb8dDBMD6Wr6zUdJAjceYeNNALGYrLjKyXKGjeooaf7hqj7KmbYRiN1MHaSM",
  "key42": "4uHmhPhJjVpLxDWfxtwWxAhM1cAqThToQUjpZC47Tn1WiFGKwLkvBhFTW25dfKG9ccbWoHHraDoj1uQkFpjBY2gU",
  "key43": "qErobmxU9wdAmwe5WHKYUKKwYYQnEBWBvoo7f6JriEs7e9iB7WtM6emi9UyUmeu25Txb5upNio35XHTVEW3TznD",
  "key44": "5qCRDfre7YwoHavGmBSeVqyBua9pBfvbCizjFdhG6xs53NHZsb19ij1vJP62p6nDhDW9u4VGVD62sVDTim2MXiy7",
  "key45": "5Ek9yi2FQ5u9QFftuFd9aSn6sXDFwnKMgyrTZLruG5FaP7vgDfYLPLCF7aWzKBcV8DzsFFxxgcxZhbGRWjHQqNLL",
  "key46": "3ZYiW7EMmszonnZCcSjGDrWTKSDdMKRqvi8rZdA2A28fVRWcmWsodxsSKGDK6Ud7eSF9RZ6XPfFZRHkneqroVhWn"
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
