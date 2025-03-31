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
    "5vjVwFdNLTZ85ixRqBA96KefcoxEbtWUuYMcdfiFPen2YkQu7pBko5CzVLWHyTMjyoewPG7ZoBVZqzAnJQhzm2Qk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xD73zhZ5QAbTDY9pqfpA5SgMo3Br1af6idhTFtsdCvBdc86xRPahYQaywnCQzy1NYFPKZ985rCNYLUKMdYBXmBL",
  "key1": "5SjjfA9K8a1huAd8g1CazQA15g75UMYEKPDgh7pB8HNFjydau8BYdu5k2u3wP7HfggJRVz3WKrRLp8a2DHzoUpEE",
  "key2": "3WfBvatmsVEWbAhYRYQ4GjhUaW7rC1vGaeuVy6DZixibe5S2nnoxgjs81b3fKxQpyNgEsG3rixWdsztWnto2EwLf",
  "key3": "2ejZaStpnrmfDyPodzZdwkMAwcYwim5uLA93sWqG5eyos4yVsWF66m3KojoBShdVmQ3nwiynR59bTfnfzGG448fX",
  "key4": "3e2wsuRrrGdRbRrWuXZhSQsro55oHffzXxEDorgjSYgXUagsfCnBDXtM4teKKpPL1emC5cb55oYtmfdbtAPpqt6c",
  "key5": "4S4FqiNGEYXC6iDjHWLEGx16UXdZbgAdouv7xbrWfMskhw2mJh9mL1jQM5KtzZeN8uVV8SEyEGe5Q73t6da5cb36",
  "key6": "2MfkyGReorz6FrSTiB7TUVbz5XCuNdiPXT3J743EdCyATSQw46J1j1za5UKGNj4WQxTZPjU6Jqyn6y5Xf4Yt7MvY",
  "key7": "5G5JSf3crKKZsWSkoegLYjUHrhDPicxWeM3vKMkFmMVFShFsJegYDyEbXiyNSR8NiMU46LxNZarBuXGKuKSeFMh4",
  "key8": "5JRpNHXuaWDcnC7A8UAgLDnuAFzJrafJJBLFCHi4UT8vVG2MRuSWF2HExXMqTJZngg2i9BGvk3LbZVxfRwtsrroX",
  "key9": "35PH3uYQFzSUw386ehThSpe7c4PvvoNXwTHQ2Pjy3znMarwWLHK7iqjNFzhPszkjozk8vLGvWopscTS25S7VuxXn",
  "key10": "2bSdhLhoi1y7fPX6Zw4HwUNcCnijAeH8LYdX175ucDYYebXcNZsptPhoRM6q1LgBzW5VfcYyiQ9WKZSxWuBG9pHU",
  "key11": "3BPqxMUamhRs1w45Qa9nR5WtiYPvw2hVsNNUiy4hMDNvAzTFHDggsYJ8Gt883HjFSebmXApzBKVT8Y29WGuYiVaa",
  "key12": "3YysagD4G2KfkTVQwWsj3H9SYX3uDJTKgex1Qbao3PbvHH3bgb6bUr67JTpDV52sSzikjhp2yFFQTixEY49D41pb",
  "key13": "5LSNv43mW4ZjbzyxXyE7LnzrTUzqdSznbdUbfN3iySJG5VY4B9RrHEtGsDhv7XAp58PS1okMN7VP3QDEgponFq7X",
  "key14": "5sDQZDp5RePzfo7y2NvCXspKRqXPryvFMA5H7hfHyzjSWcdSANibLM2AE9UNn6FRmBhDWRgwhfS4U3RGSyRjji1F",
  "key15": "3MunChitmbxVNWANPREvypZNW9jw6778P56HTs1K4GaSGkvDutQnVftKhDRepTjTUXSJSf8NortDTo3rSSmbTF72",
  "key16": "4zTyvuvXezaY1dSBpiLaKq5hZwFVHUCXzxRwjJkzF3mwMGThDjjTgPCpS5DqX8PhfykzPpKfPr5mQRzWK85i6YwE",
  "key17": "yoKRQV1aJZCnEWBD76yvVNNUgm4xXZ82aiA5cRArpJJMrnmV5J95UnaSjwW1KwPvjrs4fRC8jrggCMBt6RhJDgc",
  "key18": "3APR72tqGVqBoECG4T7wx4Dh3LEvNb3opaaxopGAwGYrZfAYbvBvCc2bZAKaoNoVukF5P5CLPzWBwo9jDMtGzeDL",
  "key19": "3GBKuCygJS2pSQuUjPrDnCs4Vv8CiMd9sGDsEgwpU91qiHcPyJSRqNxVCwiXFhhSUZzVTX6vZgNXVPm68DyLDRLe",
  "key20": "KYumKBzmvFwbUnELW9fQvMaxrHtpeohN5RPNfutWTTZUP7SuFzMdvEfq51kcoN7jDKNQnPgWXPgrFyQNoRCApGW",
  "key21": "3S7WvGqip1JxLu53vEVRcADgYY3yuiqcSoDjPf6RBQtCpc3k7QgnEvsr3Zd4BNj7BnRCTTixRsMrabAd1Heidecj",
  "key22": "66pKxZXAmD7LBKkgFCYM9zWfGN5Qkzafp6dVHtdzbteKtoUn2tTJcFVrpDwSepfBJkjRzRHpeT8RU9pA63J3G8LS",
  "key23": "4FqhNhHe6UXArTGdC26xbKfShTsZsE8Rh4VcNYd7SqmhfEkYsC2Rve9tG5fqFyf7iga7eVaLAdhYsb5gbuRi344T",
  "key24": "4aBKsLrmNPSngiQ9vNxZtQFdAWrFYqpi8DMbjaiQ6dduWERmFqvUFox4PCcxXn1JtoARgJfzpUShg8mhBeEijKqX",
  "key25": "2xyrHKExe5jWjPLKEtwqzTmfXmPHpsxRjnTvkt7TQ3i2CxhjyptAt1Fi84twVYZEo64eP1FTcvKatgnCJBMZDgat",
  "key26": "32xDSA5LsYCgLaXRZXSgnHYvc1A8XEczS9WikLyV7FcQEYpPLP3hSu1HBSi9NyYuKprZBTVj2kn6Wwgs4Ad58pcB",
  "key27": "5kFa5PnvbGhVwYib4jh5utrGrCk2gppbFwEna4VMXyP5PJYCvbQ4MVFV6Qp1A8oSFaSgRJEdBAs7KS9J5eJ4K6NS",
  "key28": "41Y31L9YV37wj6dX9Bw2JpSW5nxBXX82ghLu4YMXPX3tmv41pcAKNfikPBXdUgnJadCohbshkZnU8cBA7etEnRqf",
  "key29": "23Q5jLhLuZoRTCsip7sUkjaMDen1SzSbXXRvrxMJi63C7o3yJs6AvwU9MTcA7FgY3PwjRmf711oH436uYDnmCKwH",
  "key30": "5SqLKZ1FwZFz82A3d4n1sCWHscQZQCyNrynxtq9nu7K7ccxJi34dU3fVJHFBSSsT3uqXPWyURetBnB1hJcoTfrSd",
  "key31": "Ki9jmRRD63Gz9jDJFckLMfXs1xuNU1EsHJydRYU4NYrvkLroKUWABMnkzwS3QHPDsQjurcx68tnAYWGNR6JLEUD",
  "key32": "5AkieGbbhKp4ckx2AmuSKCLZMSpBMCs92snMfX6sLQyvHNAoC3ccJTKf9mfTP12zP1ZeyCXzCbAXJ7JemEo58Xm8",
  "key33": "5ccDYKxkWSdvmE4kATu8XLdayw5fA6AKmnDRQSHW26hMTgk4Zu9Ybu282ix3Vn416DjtyFBFbYJrS4R3AuPqW8Fu",
  "key34": "5nx22mZcUWuMP48jVpE1XxstNm1vHLcJVxskvJWeoM2fFxcrPpdZf81Twid4N28Yc1DyB44KScuMQuPiJ2b1PFhA",
  "key35": "2fhjraaBdDWNWn5DeKAUeVewwiUC3cys35h44kJ1m7PiSZe5E5TwC2dYYYugWewe6SBC397qQ7HH3wKMc7jxEeYa",
  "key36": "2Jd9jq6euo4Y1iot6BVQQC1mWMGivDeAYAzizo9pYVKvmp4Ta2qLLw939tZJLK4N9jTZpejzF86GaxLSLMNfm1yB",
  "key37": "GNb3L9oupTFDcdVcTucVZTTq6KJxAmDY96rdrUrCeJwJqziG1kT1bSGmLATbrmwzGdpNUSpcj4vn2ygQMv7NuX3",
  "key38": "4jYXW61WHn5BuxSukswMy2i9bHwD1FyaCN7LB81gckzCZwjb1zmgZ3BSRe3D3YbCAvtYC4MedA5HgCLsHumrpUKe",
  "key39": "y7quruLzp7Q9B59HJEXnWDx4B7cRfoSY1ffefUTcRxC5ctM5t9DNHPe2CbAek447KWGWvWKSGMto4SQ9FWUgGjz",
  "key40": "2jKu97NcwNmsxYdjoJtS9AMjLNQhrckj9kKVQYec5Z6cDabVgPtzBJDWF6oMo92vV2k8Vy5qUWKCnYgEGWW9dqLW",
  "key41": "27h3JH2LmKecqAweEPkqpbuMYynbyFHU5msBh3g814SxEH9TNGrhbFDCe5CiEck4GAk8koLEb9crpU6FhbKzT5HW",
  "key42": "5EKVpQXv78LTTNuxwCHN7sWWoGzUqMKQiNRwfcGzvVqdG8HRXCmcXpXnQpJFrDVebivSCYD64wEwmsarXgp6CLJx",
  "key43": "4xCv2BGLbpAxN5Zhir24jnavhfCohq3DDQAe16Tz9AMKK4Risnok4dGENb8qRrwpcgDsjdv1dWz3NYStptMkTcu8",
  "key44": "3zPWggGEghHG7KGGzjYUKzXMbFwYyQ6TWo9QYmJy5t1iteHcoXhFVgcpwhyC7jdLrkfvNbfRotzM7SYwv4WH1c7v",
  "key45": "4CUWSHZiAd169ZrTHDnnMJdC6FGwX8SFzpwNEGJrgeFToGWkJPKvDP6w2WrmyDaqwF6NxN77Wh51Pq6dzoZ8UYP1",
  "key46": "WPaLgtV9kBuHHS4WZZMQ15sjw4gpCmzPvPVD9D5HKGs3fsC13qtVQ4T168bGHgTMut66C7PwVwoYjmtcRQQC3zd",
  "key47": "3YxRijkMD2uvMPDakYomkd4hhPcvYsgR1QGhM57tsR9UkynD9KRmrGJJKaEDEEaKaXb3kT22CukAh5vwfjcXfaX5",
  "key48": "4YR1WgvqroMdLMBv5r5nd7cAjVhLMh5kyKtm4oNEYvCgC7nk7BxMXDFEHeixYpB7XUgwgJu5MGBv8LSCquAXpCgK"
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
