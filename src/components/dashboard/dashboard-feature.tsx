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
    "RSEk6w7tvGY8WLJ24UixvRAyzkVf2upVErvRxP6uTYnfVyXR8aZEcqcxKjJk22mKfJQYiE9pfVdJ8HjgsKX6Tiu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eJUguUfyepPAN7zSmQiC8U6EVfHqnCeLBzwJyQQj1qW7wZycAjX6WQWYZL5wfgNe1bR8r5UVFiCFkCgbtPTksdu",
  "key1": "3LnLRYxC7CyU5MfNSurxzZKZNZo4nGRU4tHqkBRmwp5oBoPRg7P7ywRe75xNAh6a5Yxo5zbRaaR9r4MqRQdoseVr",
  "key2": "2FNKtgtpCasaizBwHMqWqoocj1QJQhfnJSp7hHGRM5pMB5Nz8qQoRw5322ZNQ85wkTNKZkA95pMWvPgyY8YmDqKu",
  "key3": "31NRNAB62kmXTuiTBj84upuhosjnwJ1L2owCHzGNTKZV2LPVik51CZrGpiWeLcLJdacB6EVdUYZywHp74ZQb89dK",
  "key4": "5ctJUcwxz8aLfGepZ3GwkgxHTBJ4tZyCf8PCtuxGSoEncroFBY6ZQ6qtbc3Un7LdzBpx8XA2V5NPjAhf8s2CZFjd",
  "key5": "5SKjWaLawxkqKwZemL7yhoL91MYG3ZtSTQBdxxBqaPrvEgax3dATEAfnG94XMkwEQ5FkUFouEUC5dptTvyhsTWyh",
  "key6": "5xBpgzGmHLxfv8GfQbZgL2BU2tRB4ydu8BWq7FUK7Q7tFis9FFLRiAWj5qYbDCY39HYa7dF2EtWusDJkMCMESzda",
  "key7": "5AaV6fgDm4xGWcsU6ihcKGV2gAsv1c6Yd2A4wwUfttQHDvtbreJ7Jeyh8HKqqEe6et1RSCyETh587mP8zMYjhhV1",
  "key8": "52wkrtP2y6DwN9M9FAafRv7dMvuLz4J6Bc5uv69YnLwv9m4QekncYQtRma6F3XjvAxT57o9SXCZHPAdT4xtA8EdD",
  "key9": "3j2TCL7tR4kCrsx3mE48TwaCHCv7AJrvYkqFKM66P11izxiNoDRTz4N3jZCHdNhkwotBZPa98dzoHush1xXgSbCT",
  "key10": "ww2NvcS97cHonmBbKBozc142PBBru2B9ota8Ndv91zbotsChyazoXrmQaKgZWaa3TvWyGRJbXz9TLXmmqszZjXh",
  "key11": "4DfpoY5c5wrJX9Q7uTjHWxcdmn9YSP9wZTUcjq5nkEXpdLo8kNJJqW4uz4mbGxLt3Yg4feAkrnKfYDkX9VtqHur2",
  "key12": "3T8GyN4tDSQkvRsbAzsVddATkJ3wJQyzoDM1FB3gBpk5JXtSYjs4qNAoCsB1bzZmC6KqEPdQ9BRvv7rcLcPCekn",
  "key13": "5ho7WH1Q3VzWiZ81p1eHVxFhiZaVMs2XQ9khiucDzuibsnaHEy1CVrtoNeqz4wQzabaowR1wUXaAwNdayMJEnZPK",
  "key14": "525CL9tepAqfDZ7MJFwjFNmfzzt1of4hEX6xE87ugu4rdt8WRMhhN8EGfyTfrgF75FVAJkRjBLcCqW32Fqy1nBWx",
  "key15": "5nkgafkhja9KRDE3nK2YFf8WwquAUpW8Fn5K3UcKHz4msms3TAPZ7Kksa8Y4TwPKiMGgdLfyAieWX8KPwc6fcsHd",
  "key16": "3rnAjtFHpm73T69b3Avv6N5HNrEAmBHxJvHAisdVsygmgaX5LvZqhjvMsB5oe2yM26SDDLT6Q6NcX1epRV3PyVa",
  "key17": "4jBLkPmMGN2XCrH4UijTk1UZGdZAk8YLo8PwhgoSuLH27hbQKxLu79VXYU2gMtW2NQNKESduGXKR8zpywgnRkHVn",
  "key18": "29haLqQ8pqcim4GBFzCtd2KDLznaAtoY2eJV8szRYMQEyriViNMzFKr8NCuThqHJEjcECfkuYr95dT4abeWNWGQy",
  "key19": "5jUu6ZQcFeqx88QEdUigTmy7BHS4mJa8D8JBMUmpJJ6tzgRMP8fVKF2LFf9zxBxPqr4qKC4oKxQBYqk8i6LDqB4w",
  "key20": "5McoDokxbVnGyVboSAumbWLB8KDiFd4CvEqTE8N95obHwVPjVxjz7RxUcZM7StMR3zJqnwprc3VYyqLmQojsx9FB",
  "key21": "3JEYLayudFx4r5qA78EDsqBvAaCUpkd1eyB1j61WCRtsP1X7T1opfuasAnk56vM2xa7XCBM3qaRELvDn3UmKR2zA",
  "key22": "KraRn6uFc2wbu61V6EwWvf2JzG2gvsPnZy5h2chkxXUGfosLoF9rKvhZ9jvAiUip5Bx9C8xm7hFzVbBiAU5eSZe",
  "key23": "4R2422aFSREcBQZVVqPCQogWzBazoy3oePBCDSeBetuwAVEPd72NySH2ipVQUGtA2ohjaQ6F972nsNbod9gw8LW8",
  "key24": "2f33D6Ks4svTno7nhc68NewyRxyg8v5ZXymZZ2Lq7CcTCrTUp6J5z1n2ZtXyNoNipVLDfFSxuwiABrDAYsBtKK4y",
  "key25": "21SLa5hp8DMoRYFnEBnTFPZuJjoBf2e5x7x3sQ9WdV5LunsGpPpopHkkp9skFYJDJSJCQvvjSronGtgYZ8WqgBJj",
  "key26": "3sbf61zQrrwyiV2NV5EAFjhmnt5qtfWRBVKZVNRgDvzZY1d3RnJzb7T8oQzaRVutimTKuJc7kXv4qjQGGXauWHRy",
  "key27": "3BdsNwPbzQG7LiNiMqUb8aBEMZhqXGGYQaVECYUog1YwhGKCoNC7cxDMDopocA1RVq4w4y3qHE4Pn7yw3YXZ1nTk"
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
