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
    "4Noi9ZiEDQJKMU1nfdyccUw3G7omCZzKKDVVNSE6jkKAeNbGZN5gU6jo5ud3JE5iA8TCxCsoTzB9Her7WkysV6WQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46h6q8pKGWZ9hhVjLARLT7bmN61TcjTTnhrQuuJj7FwuJX8WLvBBW8CBWzTM3pyt6XHJ5K9NsiSexYUyjVEPy2Wu",
  "key1": "2puepbTTVjAVSiqh2A3H8ey1d42MUZNKaCpRbjpZQAUxqyDRuu6HqJY8v97JcfPM1G4GagyVb1aAFD5hLWiv8H4P",
  "key2": "4EsEWVWfkBxhwoWL7tVTECSSB43hqJWxTMGCZtBVaMezJJibMcUmmCfePjVHtKi4ZXYpUThXi6w6Sx89etzGdP4V",
  "key3": "4Y8Zcy6eVvXMvNp9EuaMFsXrea63tmKxhqsh6acL3Nr4XsMMPtkouF2Ypv85h5UtQTeJpvxq7frCdJnKhBUTLxiU",
  "key4": "TxAUCW6hNxpzZSvEYUR1TASi2743BJtsfnxcVWn7KxeNDQghXy2fw3FQyRc6FpSZpnbzZix5Andc9111aMz6kWr",
  "key5": "52G1pLpKQ3Lqx8Ye2ZSff4YgBroPnQgJ641HX1CrKx755SvzMNpNaSNUWpaqxkjCPSsbanmTn8x7WM8NSnUJr82f",
  "key6": "38iqQJnTSuUmecxyDD67aTdDnN7Fkf6yjk7BYtEDwm8TsPWKFquLNFPL26az8Ss7hpYjHi4EuLrpgfipwMENhiXx",
  "key7": "3rqpivMPUF9iT17uUxfiMi5MmHRBK8KHEyMFLZrNXCyam567Mt5cV78njVbd7GJZTJSpk2J4hySaT3LutWGqHmzZ",
  "key8": "xDMew6VViqgDHJAGuviH74CJdLu5P4AsvYjdZCvoejowLx2YAvx7CMW4bDQVjRhnx7S6MsMjqFoqKQYAWUX2nW1",
  "key9": "VdRNsq35vmZEVtfaDYkHha8vWrSwWFPHbtkjAw1fQC74NMkm9a41omARb8w5VRUPWCXgm6bTfdeTHhqPGtLfnqp",
  "key10": "5tfr2MYgfDnshEd5GcdC6AxmxUczTeyJfJJkYTgqvBkJbGeefpNGkPWBHwQsRi43hEm2iMYHsuW68FQheq9jZABL",
  "key11": "4v46RZ3CxNnYr4bhBnA296ZiZxgSQQCRGkWdd13GUmYzdP94bPR3r4qqtDvwKvYfDnypY5zGu1fLtR3zxpypEPDB",
  "key12": "4QEjAAmQBX9hpoks7zFsU27U3Ft2ESjxKrisQfxJV6q58YhzYZHJgcBpnCwcYyi99x1YDdJPAp2fhLN3ks79dhFg",
  "key13": "33zdimtvHtaLMXmnh3aWHWuP3WaNNGh1y9oeYsE5JtPocfrRCutpRAqkCKc1AgnxNam4E7XGZqXXp5B2UTgPpQxF",
  "key14": "4rSyaco7uSVouH3rgPA3eVEp3P894tAbquawTMbScTuoYDLtyY6FmgUTpvkqy5Ldeo3mRGv7rCru3SACB9FLoCze",
  "key15": "43VJTcQ9SC2cTHWJmCDFoWEidJjGKNMP5RP5utDKCNaAeSEXkmc3VnA5qR2Mgzcz9suiyi22qnu19xAnrsSt3sHs",
  "key16": "RhtLTK7xUxQVpJSMRJxZjinj3foQdYhiMZWiEE6oBwDaFaKzGsmyN2hAB4qpFe1RjuiKxgqNucbRT3uXZFHqXTm",
  "key17": "23anDUE8fYLM1Gx23UTm8FoQo7XWfM1w68nSCb2XEFjqM5pbC18a2UmRya5Cpwh2PFotGH1HoGManm8uyniRuHnZ",
  "key18": "2BfGBn2DSmmm6aSWycpTwxkYXo6zX72MaUCEWM5ETjzgKW5vA6Nr1yxtufW2ukjMe88AqysjENo1RY4SnMcCPyTA",
  "key19": "4F5LV99DBRa6i7iLLoFyV1DvWJz7sjoXXz4isJwLr7UEWw6eUF4XGvpkqE9uTrpspDyEpjfiiWff9mFYQ8herdka",
  "key20": "2JZnhdSWEpoLn6cnnM4PCshV7VszmPogjBgboEZwR3sBE4cKiHC5Fm3168Z5jjitTnCDHR34yRoEVUtnst9RRSJY",
  "key21": "5kYE4oHUwm632SHgoBWaL57WMKNVFFnQTm3XaQ3tNeMBNpTDQ8a8MnnqNztBhbpYNU2GJ2CvxEFc7UpygLgtJc5u",
  "key22": "3qRKRSXfnarRFEiD5MBDNEC2t5C1wsW11E53f3sHMp4xJ64w9FvxjfJcSsuyFTEPbdSp6BkPqwbvLobEWPSmYgRv",
  "key23": "4YjBy8K8V84T4XMUjCbXYQyWNE6a4NiyWcETwWTVRNsZqRZRPBeoswzQ43myDJ9v7qE7on55hg7C1anPeqDEAgR4",
  "key24": "4FSsgiBanRwRUbh8pGVErgBPJpRJ9XDfiaWUvDDUQgYbpHERpGpyx17ReaxCTKuh8dnuZP93HfVAkWQA98g6bVxn",
  "key25": "5v3VCdcnRxh7XVzwRtdgFNC4EGwfbUNhoxfxmrWkyKKEopsFUtjz2vzoSGZBaqrfJMRD71m6dZSuRnx1cAVzF3vg",
  "key26": "4vP9ozg8fKecw21BQjzer2ZjvcanRsLLufVqopHs2onFw6mRsbx6xGKNzHBhaX4w4n9RdJ8aJzTpiQdybQ9hPMca",
  "key27": "iZZqqSqrsCK1JMxa2TyFt8g9F1M4kGvQaw9PQ9hdaRuo62upMZEKL2KsHYHfQoWtVkSUo4YunCR915jf9ZpMgFp",
  "key28": "2fUszyRE78Y4ahxnjTC4xVRGSM3mvBDrgsXbK1Leo9e847aevojZzoYzVJ16VL6dRBc6zjyjacgEw7y6p4i8S7yN",
  "key29": "3SiorQbi2XewEKophnrzpQZvhVJcfNzBrjeFwPEFmSGFYTUpsrZ5GTQxxV8a7K8RDbRvT9VZS1kUUy3Dpd4dKqxr",
  "key30": "5zesbj4McSzPVLEgB2xjwGZFw7tuSqairPo51AwcwyRDGwUXJBQaWEGbxmpBbknZTC3kPa3RQnYejexMJeiRdo7X",
  "key31": "43uw5usCwPsKSzVd3dKARBN7ZMfwTYMbrS2yBQbmfdBXN3AkbpKcoGqU1MLMv1QVEcLMXcSTh3biUWeMYVNetMq2",
  "key32": "jpcQWV6U8NhDYZ8Pv4sfanqiJmHNfwsYjUTsZCZ4FonXkzLjavK1L9rjxC2vDvcAhwx2kpmhGgYZ4z8ZNKE6JnM",
  "key33": "5cyPXu7cTTCpTLC6cGLvJuMRNdeueCbWYRonPdFZZwJsoL659cgtEVoGxrzpdsvgSU42StdZ6GuuXm7a1g6WBgK2",
  "key34": "2DP9bwTEuQWREhsLF5CBpBpCifim2NC8TZ1X5fwWdc6WFMruJSVr7Q8u9mUX4SwEd6evTT5AvBRnEJbWfp4333fB",
  "key35": "5vkEpT2w3HUms1WQcJ249mxBVqvvRWS82UmpkbXVhZDMAGYaeVAsFX2muA8szCdidHULH8ZoUGiAK96stUzz8zSM",
  "key36": "5DsY3fYYCbNiqSWqme4eZ8L2JfDexoUSNhff8ZuXYHX775GMQErcYqzEy5TiDAPR53AevH95F5yJAhtj9c3MxoaN",
  "key37": "4X4UcmgjQjEBWQNjf3dEsPcHJqtMb2yvaTAVqNnAYJMUxm8mSXefYHvHuEJwAfbatAWxzYUHXYtEkPJWHbqsn9zA",
  "key38": "3Jo6mYkRBR5RdDgsNXHyrjaTV8BMr8RZ3Yz5VsQzsVSa1oFBUdPBWFd7P8ycJahtj38ZUG2KFiwbPPB5bzvBHoQX",
  "key39": "2Jm1Aoa9hhHZWyGPj8DemAMY11QAiNwez5qGXfQwpeotsLJQ7Yxy8BfdHxDN5zYK7n3f6Y6aR6eXh8G2JVP2FdVg",
  "key40": "DHpj4QDJXr2n4VJpCtCccT7DRVoLffy9S8FHTzX3zh2Z7ywCBZxsxYgNJU23TqrojyTJP3d8dCUQk8nDYj1eEWr",
  "key41": "3YbUTneKHFxsFmbeBxmrAwE4MFDdnjbDsenG1K9avDStio28MvHSmzrhFHojU1Z6WVRRGLJKyZsDQjidn4ncEhb4",
  "key42": "3HcWJmrg8j1QHgNbiCGo3GQUY2gNs7p17jPw77uyQaQPDjbmjDpqYmE5xkmW48gPT5nA5EVDjXADtg65toRd341C",
  "key43": "HozytiaCdpXECcR2apb2UL4dy5zNbs7hLuRf5SwCnkeHVMU2fZbBuyPt1zCWFLajtQyZ4bCYDvsAuhhe2Q1tY1z"
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
