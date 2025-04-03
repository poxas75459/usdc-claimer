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
    "3pVRpDvmWtQkLgmFRUXnHvwiCY2Vv1uH26ZB81Zvj1vaVgSDcVLrMnBqv76MGywWjrdA9kPni5dCi8PPbB6dJwNZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BUegDLYisXJtVSBchJewAeqAicRRN9JZj4axRMHaDByvoWu8au3QvHVSMyGa2mjTiegXARfFnKa74QFF8eVEvF2",
  "key1": "4xDRmagE1pNJMubqmhFU2aZBXoKXbF9RbtJV97RSot3b8RXwdFoDkBQM8F6DKRUDdoD1T3RufTVA8mHJc2rwbaHa",
  "key2": "5Ms2r8upEi6KMdimye1JBdDS2K9BXw3jZdr4FiRrCQwLUbad4uPMv1a9nFyDnBckp7T6ZZLZxEKJG21wBBnHAqtd",
  "key3": "8ptEFNrMHCV8HKcaMn6dxqFGPz33BWMZ7LWQxqYLGV28S82AjJp2M3XJwrorppfETVibRVEvKSc8U4Fh2g5oRUQ",
  "key4": "3ARGQNMTqsNqes6SxebNgR9bV9mP39YDCKMLGzpWD42BCY1NCAm4LBmS2zsJyzRzs4cGS1MY4GjccS8LkZu9Rk2q",
  "key5": "niANB4F47rUCaads7buf3jzKMgrFWNY7ehGzYapDPu2XcUwmBogryQc3aenEMymt1smfRJkq62AooaftJqT5Jdh",
  "key6": "4vZ91GbXd9nJoXUHJYAUFkBk7ysWckRMjkN51vLunMAvFdfTbFb1C4PXRNrR1q7XyYwQoDbKvhZFHyMeLJSzkiJW",
  "key7": "4ETCmvgAM3uCW6gtkCMAPmBmrSJddAPNXvb7soLFBhAJ7H2vCUCtviokZZrma8LCr4S39kE9xQxWwhNThHbu5dhd",
  "key8": "2wCQmxpzW8NWH8TxDF8AssMsgXSFcJZcBr6gm7XASpc4T8vqbdb41UwD9ugoC41KWHetdqMV9zXtfh2DooWhWyms",
  "key9": "4W3hNmCAqwfFVRZ3gjxAtX3U7toJixk7dcDxuKAoGCPW1EA6yGKUcbaFEpedEn3cYmyhUaptYTCBZjMsLfzurpy5",
  "key10": "3bneojGRP8YLSn72SX2veaWcKxzYfwZHqaKtawgMXb876uUyPt1AqTtAd6aDM9amkxpdwEuBsw264FKoAB7Ku13o",
  "key11": "4vPwyhMAVt4i5P5caniUb9Y9bdHBgULNBibNHXjfPxASxks8bV5MjCmgKbeHX7zapcJMGo5a1SRxg7zdtghp8zVy",
  "key12": "2P1q7n7m69C3VRMqL1mj2S1pctXaFdHoKxXjmYQjB8vbPBrPMyg16zyHHE62inx8Z8s9mCLqo8zcDBCvqzGnjPMz",
  "key13": "3dE6han2P8NPU1CauDHEb4Ue6osn5tjLsRsBcs7VSPBakRZTj26NK1GHhY65NttEokEwqZfbd81cfm2tmc6HteYT",
  "key14": "35yWtsuSS76R56KpLZiu9sGAoWNmXTtFe4DLwnbUEZTbHtqVDkdo3vL8DVCJQ1XPpbgFVidkj2kVUXajK1mKUuk",
  "key15": "42uvmzT5KaN7Mn49MqmPxvJ7VKamvEGSiSKafcrMdJPseiFAkXE1CgbbBotvLw5XpnER2FBkwFZSSXr5beGYwrof",
  "key16": "48XvVYcmGCSCss6RTYcfMvR42u2Wx9toywLMw84T54G4h7BAuJZqA9aD6ReZ2F3zranVKGjQQPNdPpx1GQUochDp",
  "key17": "2XGGUCqzGg85CESgewX1xbCBGDwp6soPY5ftx2K53fagbzeGqNtKBp2igpAxdh3354Lr6gPWeoAUAVsTYe2Ny7aX",
  "key18": "5qrGhQcRLv38gWf7nMpD9fNcwPHnoQF2GZgSuRxGPbarKwjhUoACHhyStK9yk9suid44x3qg9HyAqSDfT2hMZjgU",
  "key19": "37YCYJJdfy7DPhZi5M8BnLpLe9CEqUhMZ9z6eqmc3JgRAbFVNRvdY6UKEpQKRtLeCybLLzwptKsSBek3vyHtcLEX",
  "key20": "4rPC1tTxJJR6wqa7TmsxbsCSpbDpVyLHay1YPb5j8MaiNTdwd5EYyGKWwXHhbR9cxQo4mtkXttqe5mD9ykaWNjcm",
  "key21": "47SVFM5ALWvfehR5fDf5fCSvmKPF4tVduYUNyKKgUcm6E8nBQhEmGnZYzp63kHde88fHnsJzGwCd4eCgNUaxLadW",
  "key22": "SBCKTrf89BeYerLdJg3FmVNQs9TAUcpmmV8iXZh94Su5UhKZi9r8BHRATYMED9FUi8KRfXcb79WJWwXCZExAX1U",
  "key23": "5GeB99q9qXUHgkXiKwG3ca6gsni7RKdWSPwg1TdCd8KiDa9HUBgziXrMmBNCrFqrxeLsgDbzbdEBLWXGWWXjnNQK",
  "key24": "3K6ZTxihNLbYCrtzHpuZTh95YSQfNGbWAzRwd8phb9mjGknenedc7vG8egpMoZP9Mt5zbGSup9cJ15zo6GwDpeMB",
  "key25": "2aexKat1UUyj4uiiXu8oETVCBk4gT9McJeGffPbZktw4uUCqe5oqkFXdjKrSjX97yCNRM7Y11LSgwLuarRrwfR94",
  "key26": "4EB1y252ewgSAdBznybqS1mmiKf11fqNQNKnWMdaSs6Svry61Bao4iaECUExVVZvcf374n7H9RGTTE5jWbwSAdfL",
  "key27": "54yXg1PvWz1QWRJpM2jkDNfNBTA59QrazRHDnqU7Ks2UU9fsCCDzroMAoUartFsd28a5zsvn4auTx17LH72CvmQA",
  "key28": "286eaQ2AtCCinV1Cm2k2dz4o9N6LUhNVDARab6RAW88jHEA81zanbmLE1ehaz1M127Dx1ZHgXSrsMiC3gm2jZ8V5",
  "key29": "2tuvNgzK8aULY8jegkEXGPCSfK8NLzP7Aieq5eo7jbPwaAWQ8BJE7vWAWJ2p6DTJXjZGzovrUhzvvE8mDU3bVvxv",
  "key30": "5CzYsATpGxmBLp238ZEYTesQFBXuV4CNStcETJM6E9F995Po6yVrwX4vsS21AMsU8ki9xjm7x7DSt3s9xZG82bnn",
  "key31": "5nVMCpJEY1THF2WweM1viJb3eHe3RpW5eR22Lz5okTAbW5f5VarASDYuwbZczxVH9zA9P3aySbV3fvSDjLKURwgx",
  "key32": "2RQdZovGWxL2SNayaFstsdTd1V99A7NG2h78wZME5RkPgvM6b8w62UP2fBjZhwpJ64BbUfTfFUBLfMDSaKoSf78k",
  "key33": "UTFqUW2m9fjFtBtaNxUpfApjcGZFVk8fdmwfA3U1nutXof9975XRUTs7yhoW3CHKatsJc5w9XvUpyMcGx943bHj",
  "key34": "2GfQvRnmfb3vFUqfWtNnyxZA1d4CRrJBYNABqfNNH1PHUXrxesVKYpcJeFLjMY5Nmp2LMpoy4qbqYmywasZNM8uZ",
  "key35": "2KRokJn8N2ha4MFA5u4byqSeyvPYmnf18Fgy4WGbhRcJ4mMqWEYzLcxL2SZbmc4ShLbTyBKmqnyGFmbAiNoPuHzc",
  "key36": "2RUD7yRMqswJouoium531dY8444L1pbCxiaSc6oxA676a3LBPz9aAcDT5ox48uTwrLB5oU3Lze1DWu7TAAbaKKdf",
  "key37": "N7qGZnue8d7wMLHQa9NNWFMBdQNT5QVeQhhtJ3MDHqX66bYVzpZxaGhBPNXrfsi9J3WHTLyYgWK6VoXF6VKE1q4",
  "key38": "4Kc6ujpf9jztENwDnNYw8jqghbAjnFWfwTkUswh5KsftZ1on7Fs5jxDe65S3KCyTpnGUinDQpAtXJVfoUWu8QfAc",
  "key39": "JDbRt9E9UyjaTcNmL6xfQRaNV84ZidXF3r2nx7bS3TfMbJHev3BE1zMeV7LKAgfPqKw1doycyRSvj8hqrd1Dv2G"
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
