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
    "3ND3guavbxbY8nVh6ogbLHoQkj8LsLwBYqcFFoWPRS4a4jKaR5EGobbSwjhp5P8cCN8JzbqJCgTCB3tPX5XEHFTm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H7cRMQrKKDqLaFVSeDE8obQgy3tbxvsCw6GwDHmPJUyj9gxee3soacB6dVNQenS1sLfCKtVNJmRDaE2qyZxuM3e",
  "key1": "FCFcRDvxgyVaYEVb9YEFwJdopphfHMZaQ166usfnzKAJ9aJb6aQukSxDsiSuq8CZhWwpG4UQ5rJ4NgcWrFEE7LU",
  "key2": "66ZkJQV2bEzFgdJCNks21ZM6UvQxwy9UjRoRSVkiVcndc6FryKHfDPpKKpGnMb9E8iEJMXizQMw4unZ2BjDqZjrR",
  "key3": "TSKRKMrSvEXg7SGdAvVTHs95hhQetPgKGWcP26jGzGNL2uXPvupc3na94Pg3RuXR1UBMCFRhCDQD12oj7HHc8Xp",
  "key4": "qz2RpADeKGvc5Wux6B8zqq4SpwYQ7DDF2RvzShMrNtxqW7KstKko3wc5SzxFLbZVxTR9Ls4uYzRsgpibmp8Uq3K",
  "key5": "Xwp6aktVYtNcc9Hs9NsdNEss3adZ8antoWLMa5m6TKAk1Pzoh5YpH8SVMQ9V9kzFkw1absU6Pr3kAvGwS67c6WW",
  "key6": "2uApCSdChrYseWEriJSPSfQSGBa7zog5xQ5eUKDr9yVsj73JKV3ETU4aXUwGXv2SMHAwWrTHY4akjrsrFxNRdopa",
  "key7": "32kLWhtof3UMA5QroiHikiAcmJax6wG6PnPqA7VMTdHofnRBbnRg4ZvmLzEm5kp9u1zXGc2uukyzfMtG1VpggBfk",
  "key8": "5PxzEhcrxhT8Yi3XFcSsmwn8Gv29GAbHw3KrhJoFjuoTE7Bdq9sjys9Kd4BBp8rMQ3GzAgvNSQtu9gmwqXtvjeTX",
  "key9": "4e26Z9F2mfeL5JvZSQLsbMc59Q2PxgUubdqmuBsCRckvHgptFRHXt7HGqubtMncu9MiQUA6gqUkTfZVdHcSQND6F",
  "key10": "A41g26fz5iqMYHShLAqdg32DLrzsg7XFR4FKcPgsevBWjeZXzyvZ6gThAnio3QU9iniYbSxYqgXfXjkJxEXN4St",
  "key11": "3eYjg3Y7dm29boJ7U5L9Upd48QW2bFC39aYR3knkeQSCMeTcJmPAdfKwzxqFgFBhvdrfY5kQLEMtPXdVzZyLWqmu",
  "key12": "5dMe44ykC6AQQ9U9tnJPthfXdSHk5U6uLAaU5HYcnSGm6zmL5pHchzsPMBVYVAZz83LWdQMqf8DDey1hWPEMruBS",
  "key13": "vriaMJCX6ZsKDhxvVdYkvomT4ns6FF8YrxuYJzHM1K8z38xSGv8Xt5zRkjqAq25YWn4P4BwrufnzbL8JApgsp1S",
  "key14": "24R3DH2sQgudN3rUduUbY5nFVYkW9eqZrVkMSrDuDwyQzJH5zQo6avjkjuGCs7nAWRpixmK1RpmBbBCVoVpTR5pH",
  "key15": "3XUBTr1MjrSdWismVuC1RBDaVWjtga3hhzbEB33bCGkGNFmmn7JazuoQMZhZbB33fFkDyaiEHt4AJZEPDdc8yhdv",
  "key16": "54BmCvSg9GBYt6nKcpKd2dV5XeRGyPVv7c5KSmytGwsXfhyNUXRz5fQ7wY2zMAE96R3dNXmHzJ2sg39XRpTz1FXf",
  "key17": "2sTGzDcixN7NBgsTLfY2bQMbov1ZhuHDonvp4N5LuVFd48W2pasC3QRinShfUQiVFe98WBhAEwZtrcya5MygEhS3",
  "key18": "5o29A6Xhadm9ibAGVMkvmMPty4357ndHqZNpiCvYqygq5XSmiiC9in8TDrdcUdpV1HXSubmxjVxniSCCDFB3kuNp",
  "key19": "5jQLE6LazPuzvXF7Cmw7hkDYTC4692jvt26jitiHLurkhLHpWtT1GrERUDD6S294Wb11LKnHW92do9L3tViRYFXp",
  "key20": "2J9c92VtFyTncwxsGax8yX7H7wTdZHCdyqECkFNFPEcL9651bBZ5EvTVftDpYtth3d8Ly4F4ZFp7hp4QSz72B5ap",
  "key21": "5GJJYUQ5siQ9tdAFmMjZuUZCiYXVcP8SphBEPM7coE8zdRdmPBCVYPoLXfnfJZD4NuttDiKNjya8jYz1oyPEaD7M",
  "key22": "3DvEidYt97zAjbpDKe1J4BE1T1JDmDQ9fWcp1o4EStNJvLBF2bzHpb6NHX82YhdwLaJmLC4hzuAPRkFjeUhPaNYb",
  "key23": "3YoRQZyJVAvMgryyu5YVvksT19wPrWKsPvPWpTmjhWHZc12pV8gtzmWdeqe11QMqSpRSi2yEkQQqjrNVeGM8Uk2e",
  "key24": "5mtNcYDWEmExpCmXSJ8akBf8f22ap6D6UL1iCcX4C6VEjukRTddwgJvbZFq7RUcejyo5mTY1ChYXg1APNXfKaHrW",
  "key25": "2HPRy3JzEbfm2TLnB5JPHiY2KgdiXbGP4o7yKriq8qjmqrK3PNBDMFpcDCMbAqK4LM1RFq6SrGfCTozuc2SfCC2H"
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
