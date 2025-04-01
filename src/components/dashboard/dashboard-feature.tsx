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
    "BoP4niZxzffiw6QKVY2naMAfzo5TxBK4BS3Wju2sus2E6wFugFNMFiGRbrYU2VKa6hQRbXFSBo2vgMsM66ADLBz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7cm1QhAtF1DeV5Co4mVX4myj4oP4GTbTwom72wfxmGFCrULztPxqCPLNhDipkr86eKZRNTnm8xGCKkfbdkNseHv",
  "key1": "5parPYCgtgC4NiusCpmAtEyQoHHX59BT1ik9HvYdzFJGWYiLU4EyYNq6qX1PhaBCyWtn8KDShuLec7tyUPH4yruS",
  "key2": "5WC3npGHHY5kNWXqRbqWiJdkRwP2rfkboyTxsmJbKwnEMNd6Uu2x348EQVPyUCR9iGVU9zFRQxN5Hv2iUCwmKmH2",
  "key3": "3pWWnYzvmLesEbhpQPtZSxXeRCSjVjNuE9SjdRRpqnZU3UY4DZHsmtM3aTnczXZmXifDoGbm1wUQYQRXa44Ks2mm",
  "key4": "25c4dpMZMMJBMU2gsB43HG96CaCGZzwVY11ycr1cXLZhKPUWphfgKcLiWbqNWQo6Ja3oAs9Q81eN4cmBJhxueoPi",
  "key5": "3GtAzYmLkLhcBANNpvSN99T7q4P3aqpaTXFSZhNaxx9zDhkVZEgDQagpcDxQo8ys9NU9heD3uKfcUWhM1cmHyCSG",
  "key6": "49mRj9QgN8aigeY4oBW8FrUYpp1RtvJDLCLKQmRsFiaeSMkx5YE6XhvDS9VrcjnLnDqjYcGLZ8xF3uYXUHZf6bro",
  "key7": "L7hQuuqSLwerS5Hrm4m8Ku2QYRP92sUFwCHoCysASG7KP3EmcXNjJjgRb8d7NM4CuLFHdU34UFvfLszPUar7zz1",
  "key8": "61SWnLYoxTKnCBmxVkRM4gs9gQyQUvCh43SFgo9CfbH2M9L6NQv2Kk92xbt3Z8HJWoBMaaHviyUCnn8RibenM8T4",
  "key9": "2rPFn2ABoymc4uv7MPoJmwtxUr19RjLVhaXFbxrikHhFDWbJh5rXcemfi3q9XSeszAG4eY2CkuAYxTkdYxQmxRxf",
  "key10": "3AbKU5LY9Zn7ibLoLumuANaz2n1YekmSU2sooQzFq9ZUZg64BvqZBvDRHZR32SmAxi8MbUT1Mrykqwjih9RBVAmf",
  "key11": "55wbp4n1KHn1SB5YhfzZjYK5JMmPt8CNw2sdhrS8TPTfFrMNJtrfUT2u8AUwfSoQSfQcrrPDPEukFqW9pNcBUpLu",
  "key12": "4cP3SCGPv1JNHSPHwDXFfXgiYyypZP1sbEZc3E8XkzJoRorkvi6K5WS1mZKdAahha2mEj1uvsssVxRP5cNukWmRL",
  "key13": "4Q1EszRVqCVbxjJTTUAEKQLx4s7aXRtoxcabEdxh9DNqkeEAa7jMjsKbBhfgbFvCBEyGjJs5R9dZXZawC16z6Yzr",
  "key14": "4D2FKGi1f2QNkB2VmANbYehgV4KJbyxxbiNFgVgRYY2v8yQX98DeHw7iDiFihNWUd2Lp623MhAiivLqNUoogiXkU",
  "key15": "syPC1JmaqKF32Hw4BidzHDpusvrPDu77Pzs9yam1ZYgrmAui1pUFeSTxrC6BHEd5fV5bsUmQrzAgF8Y1esFu9H6",
  "key16": "372UXypDkQpC2oHz4FLedH2onaJuERdrhBaf2BBgKiSdszxAQkaLDoR6KaUafLjwvb1h33XYHioCpvnqfhBnC1DC",
  "key17": "4PpgPX3CHGuDXuvPb4KD6wxFVmaAGPZZCT9czSdzymZZgs4MpRejWim3zZL1GuBgKxhJ4oYTFcq93d46trDJSCvs",
  "key18": "2dR1Vgqga8vWMch52GFDjDHXfQymFppXo2BYdsmNn7MJorUucZZzbBNRdKVUW6wqUv7SqmFr2Wa4VsQvCM7uWHgK",
  "key19": "5Fmeehfngh4X88K6dBLqjZRsjNkE1gSCGXu1oqoeKTTuizhcudtRkU9rYiqdzrarBUX7wjzFMBzRZnTFzKtp4D3e",
  "key20": "4LNq8sxBiK4ANaC1mbAfUKYxkt9NbsQFkBUVL7oZka9W6P51R87GsemGF5cthb3ALZQ6Y8d7PSfBg5L8LJMTJCSx",
  "key21": "3dEfGh2tHWLmMsQCEXUiZSZPcw2EcyEisixH2BXPM8eN4kEBHB15ZUYWrPimrPeNJgBL4jmYdJs3oU8uJNjRP17C",
  "key22": "wMnqHfwspWQBLGBQSWg5wQCB6RXJUKQWsqnSakFcene1y8L7czzdeCQ12j7h227oFfGGbnahpGenpyEbA7vzMkU",
  "key23": "36VRkxT6mHKrg3qWu4udhxg83Uftx9jRmp93oNSHEc2TvCorrBXzmUsP78cJhEwxBe4FkM3rFe7u439tpu7WPe1V",
  "key24": "4fAEqGiNDktKoFHE5iHNNRgPsdRWdFuSXnR1UfRzPRHMfjBSn3ikjHTjjda3szLwR1tx9N3DRcLCxvVMCLG7PVcm",
  "key25": "5Xf5fhLw4eUhZVCNB8j2qxdiwWhdGe6UHK93Mt9oQ3BL1YbqYymTAtrKoYgcDTGbUFzmpkV9qwgnDKTQZbY5HHC5",
  "key26": "29RJ5q5y18MnjS2uSk37aHxKqgHiLobixZhPK2c2gw8MQaZEJg1BypdkDHFnuW7SgHG6KrKMZCgLLmcjEGY626fY",
  "key27": "4Z8bQ8UQa19r6KYtcw9z722h54mcm4rMsNFjQkunZVVB8tZHutbffsijKgoLmKMuDb4FKy8RQWM2cKAggEJczkwq",
  "key28": "Nv9xRd2P8LDwMHXRdtSDuUPJedSQvaWt8KV6dhHJ7U2avsiuMEyao7NJ4rXrfdospTBE5QzjHBVmrcymCrvwtHw",
  "key29": "4GDUsr6yMrtPofLeSZxqPtT1c3MVftMEuauwLMwvngGsKyocxKG6XYrUqb8R1chn3PTQ8SByqBQD7LGxfBUsb55L",
  "key30": "2xdps6Nh6spfojG4rvtpy1espZKa3Y4rdxXN3VEoaUU9HoQskunnGNdEMqE7QApiYxX9rihp3E9Lqj9kv31fEkqn",
  "key31": "sWBCav7VzaeHvxYX8DXzDCe7aVYSwfCo2W9AcDMccaoNFvjN98hueDACiiNpKpAsYxvPswu78mMLiRTEie5LZju",
  "key32": "5Hx9eQcWmK8A6CLUZcPWk37XypSqd3PVwLuKxNnttdX75QzA71Nm2LpiespWBEQ1o3qAu9zaPhk6fkEepTLjwmij",
  "key33": "3n5XEvrP3u46LZ8G3ZMZ7uJeuMtm7jfgjs4CwHdU65riBa5KqAbZQVkso7qpBPXtdKYoFbrFRCbeYou58ZFUZ8B4",
  "key34": "XMpCvLcD1dks55a8r7M6bPyB9A1VG1DMy5gdu2fLUsrz31gBwAozVoyZyMC1N5EtrJhJ5d9jh13TLeVveK9H5K3",
  "key35": "3WZTMDmtiwB5XbqVM291GpRzPZtfmtTLu2RWNWm8F49NMEGxndjEkiZKFdJtdrwVbjgCh1QVJw3tS863t99CMtAx",
  "key36": "5Vte4anHvijTa7tfEwyALjcCdzi9HEfYZsP1WKzX4wEHSRUXnFxY9G5ssz7XHTfNbouq5UDfTUmUWiCszDdQXFgy",
  "key37": "5Yd6xkAhVjbD5rAqSWVDuAn7K6Q5AMxWsRb5ksmajPVQgSuhxgGa81AfDZ3Am2WuJpFqwW9TCbXHUzAMn3knpGdd",
  "key38": "kr3Tp4ohZser7X2MbPHZ7iG9kUneHae1uknc7aqPygHRTyAMW5emfiY8swMpdTb1VBVksVTqPDsk3Qukf7P4vXP",
  "key39": "25Fh3kdn5TGJ8MdKAJmdPs466SmGPJ7amzzyPyX4kZZXVJ5RnXuWejzdf1Eej87xS2ZC4yjFJS9mrS4yfhTayFHf",
  "key40": "4vDhGupAS7KqyBDpRw5PbAU661H3Y6pTknNn5qn72iFKWBd77Pt2LEwMLwBvUtbPG6sK51BVxhp6z4o1BLgrZmvF",
  "key41": "MkWWtoMzR7gvwaZ1UPoq2xwxxd3x2jwX1vKmD4dQk3PTaKWG8RjHBP3YoT4Q43gMvbXfUXiw1gVR8mJHf473CB5",
  "key42": "57o2nYiFg9qvgNCWCBQxERbgbcroFUXPC14K3Z8UAtiVMN5UiKjYtHHWXCPE8FmujRo31ev1ZRR6CBkCt39Js2gC"
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
