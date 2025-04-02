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
    "ShpW4LTaQ8dvuhkHfo8h2iwCZrLsgKFKvzCdjGnEWduXXrjC9x9jAbQuw3dk7Y25ceGZ3yhNNYFQui7YjDJfHpG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SdBXAXHyZ28PNyYPBmyhrmmNg8Dp8iu46HVj19PYwnQGMvJWYXHG8a1ACJaZtaUmMh4x4uagogm2YpKfiaxAXRP",
  "key1": "5YbPDPrirVw3V1dT4VUdJ13hAvjmHjbsYdidcnX9cMDEXJ7VgVXTYGeU9Vsw89EZYUBBbQFv1kUGNA8UEmT6nxEg",
  "key2": "UVytgKPbfpWFt6kzVc15qfgaQEkLcWkfw8odLoAtAcrKTD5HSxzvskSwMKjRKHhX7q8AZvzijhau5gTacDbosp1",
  "key3": "3u4xbcoqWFcW7JLpAZMNai7uaBfTMK8BrxzbPnWvgEAHEDoEpRMm5eJP4ADxD29mz5oor8v4UKLh94B9Vhj8pJS6",
  "key4": "4b7yWepMNfeVR8VYCzttemHNykdqYp45oHaP3UyY4NbJUkQupCWiyNnnTTjVbizBY8jRzm8DVEjYZ6zvJqVgygnC",
  "key5": "JR23PfxVVWsuLSuNHuQqsraSo4rSMSva4VUq1MvpaQZcgK6YTHhK9hcC2YUS7P8z8xQH7Cjj6EL3PuAieK6ttNA",
  "key6": "5p6YSqge7NDabn4g1WfAGBmLPAfp2eR4rurKzj55C7AwFErd87sPPnWEiBrWqWGj76fikUM89qQqc4MDvpfryAQG",
  "key7": "66J5k3Yh2pPf7WHVe8yNtX3rhKS9TFK548eXbPSu2egjA7tKMLe1C7g5dFwc4wd1TKMfz8vhrJwcUidi9udd7xkc",
  "key8": "5umcuFZY5zj1c5pbYx7k1xPAENsstKR9eMPtb6UBV6QzEfpn1tWbtp7gR2A7xDKwCsuqTtTL3dtRVtV9jUs3NRqg",
  "key9": "41NycuGq5kbu52Q9LqG2DtFhAwrR9RMRBiBQ8vrYkTbNRpPf99QaaDbgBMm2cUrdhHXWsoEFsAv3Tps3uCfWCK2M",
  "key10": "2GZFmTwjfsQ9kBtmreWci2r8oNUhYDS29quzRAbH43Lmhx5LFtoeg1zXWfkuvpriLnp5J3Bw3riw7uG11xU9su7n",
  "key11": "pXSjuHaHXiVgRKhw554smmZ6RabveJNs9Le6mJnWjpC6NAZ3cuunDUuBRxBLYhn3Di4rTVHZDMx3QNFbh1P8Q2c",
  "key12": "5Lm3JvYkGSNoDj3ph2EvY6HE9QsMnFJZCMJwK77E1qnzrhMQ2Y4LsHZNJAmcRVchSEGrQczWQ3dtvnpUxLtqPQHK",
  "key13": "3sv1JLyTZ97Q2WBPHJjzrSfB1xfz8wzFhvfR5gs7dJxMcC4nPwe8QtbAR8aavuh9bQ2gUe9i2Nf87ifqgZ9nDh1V",
  "key14": "22c1FPA1XsiMMZFBApraVwD77J6Gv1VWNVsfhdGBKP826JNkJR2GCWju1g6Ci1C6E3XjDNaZUCw49uBmyxMMKwMn",
  "key15": "3AbfPYpFBpA8mGYDsWQBEcTVH1LXN55JGV7pf7c5rTb9HSRqJBYnJRYy4S4P2DWbzQdDEbDFmAhaEHqDPWJKzJak",
  "key16": "3NTV1mmqrwRcCZghW2Rfk5N9yDvMMYrSc6UWKuK1ZRTvyzwGJewE9gQTdJQtRG2VbunpCyywSL9UadkWhLh5kwHm",
  "key17": "QXJdYWegcCs2oZip1QK5kzUNHuoDZZTysJsbUSfgNCiL7GrPdRiKrhwFhWcjwAbC5oJtnMWHhdQjDNZn3q6syRS",
  "key18": "64x9x5NmqRTM6cqQRuPyQWhHqUU1aMgqxReCkrLdwCYRz8yk6irsgs5vSAqLS918raaRLPUAB5MdMCjpj3Y5Suyg",
  "key19": "67iPcyqkggYXNVNWEmPLTxWdQzdnUzQQqGLHYKuCeeccEagts34QSyVsvVuVJTEnWkefrp9L35xitQoPuESP3egj",
  "key20": "wDZfxqMH1GiSSL5PzezN17Zs3BEvLPxKCyL3qQrXaisBBDGwMPATcVJBqB8FAMPDF1Q1N3NGc1N8F7s8cS5bcBb",
  "key21": "pMyxrngHbA8AS7s5Z8cou4ktiByVA3iVG4eZqADRtq6h21nzcQHe7RwZVDpMrStbHmExm74FMms5ASgFUbY5Vna",
  "key22": "3TJo6tyRZgQ5JE457z2PcYtqABQASbc3BHZJxMQmuvTNZNH7H7cS3WdrnisRYmBacJBZrnXA3jY2WMCh3ykkeBN5",
  "key23": "zuFJDFo8pEeeGcSdpBShaiBDKohU3j2cD1Sck1EcZsh4XosXXY2r1vuwdWXVGP1pko7YkHsToPosngBRotFpp3P",
  "key24": "G6SyJWHQ4qPnMQsFRb49Dw5kCbYSJnp7WPTdGM4RmrKrFJ2VzhowyxEHNmjNdR6aWJASP15z2Kb7ENm6FnWQJFt",
  "key25": "iFDXdWEPxC6SiEbGraX9VTtevfxpn432yNaxxcJMz6dC45kVtSjKJiY4DJDnVNiW5kc783LpuNQqnRCSBkW1ZUY"
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
