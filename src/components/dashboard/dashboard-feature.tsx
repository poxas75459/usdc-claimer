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
    "5N5KTBNj5HmRnnh5rGeTcQLkvefUq22e9aNDjUeTsjY2UDVDnk6uvQ3uKpYj6XbgYEpPbasvCNCuqhKGipkEhnTN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EukezeUEc6YUpDw9VbJSQinML9aCtSmSc63So1qrEyraNDtNa8JW9Xq8Em4jfKcaU2VN3FR49NS9JyMJ5dXvHjo",
  "key1": "2a5FSrh3mkPc3P4RbCoiCeMBQqufCLWN4z3SfaZLNfLdowGFWtEsUH2uDrHpZAx6Qx5t1JFgT6feLJJopBZzbpTZ",
  "key2": "3o8rUuqwaAQapL2JncuBGzYbxfXexb4C4pKYRM7npRhn7NPTFqfquuhijv3po2XD9XtWExgm2MP5tWghM4D3tBSb",
  "key3": "mcw1PETYc8MUbiMMVfDzAbvgmxL5bHWREDznLPyHN3Qcf2XgZDM3CnDkcJYkdk9jp3DYeNm7xxmmmvGGZ7fpAGY",
  "key4": "4ZrYruCdVzEJyR4VvGx4E3gVsA3BWkogqZm6q7xCBdrQAAfps1KquP5YwwUvpzPxSrZW32x1bf5iVBy6pNsKxKqC",
  "key5": "58aEqs41hyZ6UarQCEzHVdfetNtNXsV6xNgjcj9o8myYVs67LeG9aA43CqZzcyaQJQuQoEA21ow8wUJBezL9BrGf",
  "key6": "3C6kpnm4x1xoHyBGdd8UuVop78ey5P9LPqWAy2uKCTYC3uALRjUvGGDybeNB98nWbt7ZSejghjBD54eGhG9YqFeQ",
  "key7": "4SwKj39KZbY7SSSgKagm4pLz6T8xinGXsN12ojV9mB5z8YDVJ7Zo1z8VGykomwG1BkQGoH4HEn1vYyUFoVc2S3Sm",
  "key8": "Wotmdco9fvq4JesVorderS7sGHce1JumqkhMEHFF9BnPskZACWqpEDwDSWF9Zm3xW1QeGFGkcEQogmzvdmTZEBF",
  "key9": "2EDZyihL6qXaFb11veNqw5eemEm8darLBfdCJzrqS7JXi97uhWgHUaNwyrjpWZXRVdQHK2NtfVE2LbSUdME1vLxP",
  "key10": "2zai5Sg1zkBGsxFh23XtWrqAjGKfNKmQ1UtSS2ZJ1Ko38hQSdKmPyf8kb2MjoZyz9Jobf5MDUFujodD3gbCcpBZT",
  "key11": "4tktt82UZ7axufPMi4bFED2Qh2TzaBhM3Ev5GMSX1m5R2mESDQCaStwiUmxLA3CVh72KiionP4EiAUNBm2E2sGGS",
  "key12": "3UGpzRXQYowZP8E3cNCTQBf8Xjkb8S4DVvbjPS6sMms6wawG1o3JKNCYC4it6dEn49NV1amZ6ALeoTxYDmb4jhTS",
  "key13": "gokpGxz9xK8J8j1utNiDBGMBJTyae2LwsuBESVEsaWCdTCcfRYRD2Zr2h3V3VomGfk1Hs62MC4etXrDtz4SpCc4",
  "key14": "4qgAKvLYXtHvNNvXuNy5cREovCkbk3yUfBj5aEXZ7DR6U1pD5E5jnN4L1ucCHTfHAsUzzz2K1dpmUGkdHmvt6dxx",
  "key15": "5fRzr4gxggbiaRK5anWng4tK7T8FyqE2VDpYQGNYMYw2iJSm4mihGSE2D7AHURT1rRsTn38V6WXp5Wx3igtoUZrq",
  "key16": "2BQJwxAf87cM5aQ1YVwCtffReMUSQPMdTcbGmeCcqu38WQtDJXXnTGGMVSrVqJzkTU8k7pL64aBNFkGmc4f3JJdU",
  "key17": "2dKynMTGwh6KU4yzwEoD4AcR734e14Sd9mzsPtyJ8ovdCkMn64knP93KX7bwkhti4H6L6JWAgd3jYT5TUdvcTriC",
  "key18": "upWojK3ifMB7CAvKVqtvTtUZoycR8b5q6SXH2vjf6eLsy7y9xCSYhsGgc6EU841YBGW1qBpGDoq7hSsM3PdXsH9",
  "key19": "5FwxXGWvV4k9WqDyknw8VT5hFEkginxbCnQuqjPSuK9QcVVUgvudG6JCh6vqorMrzv1jz7s3YJ1u1LWhDeE5id5U",
  "key20": "3UAfHVPcSKDFgh5Cz7kxq9xDyxGZa5pjyK5iDFmdmv3DRTKXStHUsX796dqPT3K22h1kAzXKsrqw7rwAYyzsWE2o",
  "key21": "5yoiYXGVjjoUiEiBLcuqqKPXUCMh8fHoVM8exVRy8VMJbaG44nY6kxgPeCynaz5guxj5idyezgLerrZAHU5xPVSa",
  "key22": "CU44sTyJpx9ybEQ84LA6S8iahK45dAxTT1DLHWVytz3qDdjkmweuQEo7PCQf9uUCeJHf95Lv2KcQHaDuknFdcdn",
  "key23": "3fUY7h82NGwzb8BcX9BEhsm6YFxq3as5WcfMqo6X6ewKnL8wWxSmAbDfPivFSzKTmrtMyLRw2qBtMrGaDjY9EY8h",
  "key24": "HCv7bT9f8EmbYzubtPg6WKc7hz7ZJSgkQzDswgehaffJgov2U9gCTXmE1BrR3siTfnZ5eSCoMbXXWMubq6LhFQV",
  "key25": "5sLhVLJyRHr1ozcj4f5133MUGWt3XBQitu8ntLNJhWndYzTGvREvWws5XWY864LdpkZRUUgRC1ydenj57Np1oDAn",
  "key26": "64Mi9o9mifex5kK5WMqpMhfZpRvuC4VAnmcVfPR7mYPnwECEXyaHt7LnZSajr3APwDKW7UXY5BGqRhzBAVLqzLoP",
  "key27": "45modroFj7ViNo9MsayjTPfunZVfmnRD2wc57g6QRBEGgtdYiQAvtULedCPntdhQNE8KU3W1SrRcyaA5te9qjEN8",
  "key28": "CW9PiT9mUt9RehHkR4Um1Bm7CrRvC5MRBt4tuAsdZq49vyEyVXNm6TDBBjFBzD1gTHKeuoCUvbKumqjkM3ZuTW5"
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
