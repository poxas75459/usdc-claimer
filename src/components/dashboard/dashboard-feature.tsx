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
    "5MNX2Qjk7js6shAkk5p5WFywbLQb6no12qcFAmBxASyHDrU9T8wqtV7MN2LTy2bnn8sj1zvEiAXThz9e4cB8RcUj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LQWyEhdG4UaMfNQG4JFFZzLD4H2r3ToSq5MYTVsLoMksZSzeokTMdu5HhUeQKx9s78sQRjjCCQCHENsknFnU6YW",
  "key1": "5EBwkkLUViAVMgX26XgSjy8B3zfiUzpmqRea7boSQGLzXH9Q5vrdi1vV2AuNHYrzWojAXQhM2htDoik4iu1LhS8M",
  "key2": "5Cm39SYHYes3Do8tXKDEKqn3tc22vhGBbTgG44SpwLQxrEBB7Gy6hp95ybqVzHEo5WyKTY1fweAAdFR3XgS9mC4q",
  "key3": "2ePNaapMvrAd2y2saaC7ePTpHHSQYQ3uE6HXJdkCMgvbKAX2WDTmFqzezQwirnueB54wG5j3XJpvbpTUAZjvSMDu",
  "key4": "5t3QzPAUexxxiotQX8QaohaJhmNVBiz46B7k6NXKREH2LTrqbmBmw52K2DM42NBRtCvVMLe4RSE6ckEavGivKLpt",
  "key5": "4eqBFQm3fQKNDscHdt525sP9e3NGkRj3tMx2hqf1WwKTozJ3nPoU3vNeaPNspNncQ4ZAkocToWqxWen8kLJfLKmY",
  "key6": "5zzzGCmfif4Htb4NPP3NE6HPtczNB94L8xJQLhJPQS28tfUz6UWGgToSyi8kd87qsNFzD6fG219K1fn8LLr4Qd9Q",
  "key7": "65DL2N3nMRgv9LeBmZCiRSscf55GwQFx8tF9B4n4Zqbqqtt2hxTgtuZonjRoNASG3mCGQ9cdCK933MhwWcdtXVva",
  "key8": "3fDgXwVBfjg6VS8qoMoE7EfWcCYkjHEnQ68zdQ5f4qxtWy1QF38Cn9ivCLECjVK37oZ45yXQnEzfbs2DNH6sGCay",
  "key9": "zXtWpMwHsWyB3TnGfQdNiuLPmntosf4hjDU1K1TkzbBYVycTLEwto72SAy5Z3dkt4EQzvzQczKVQFMx43uQdziJ",
  "key10": "XBGvzMFoPRMKG7chKuFRs87i5FJoPBEYZW1jFpygyK6d985pkNuKx54er6aZCsSTve1joMq7EuVBYeWAusii6LK",
  "key11": "bXZouACuAoxBLByc7LgYsqkA2nLSs3VpgG2HMyTF5WJkLwxLDYTsiiQXEnrnCh1ohrmHy6M1LEhJRWp84Qw3MAv",
  "key12": "3XfDUZQdLFoutGM8BVhdFq2eHBQcTsaRdZUKUVGqRXSWvbgWCarhuW4sn56Zwe9eEar1diJaL3cG21adfKzF5FWv",
  "key13": "2oTY55w9mUTt9rBGmhHXppvEwFjUCfStX5xTZVSMdbVWYWTAqge6mrNr8dbHpQUkZRcm18GoTh2Ftjp1v3jtKGu9",
  "key14": "2yEAk56BDm7t6zoNP8daL4rLvbw8njw6gxTVdLnoeZhsdgEZ8s6tCwducnxT3n8uJQyBD94xExq7ME2xts88TQmw",
  "key15": "35Axnr4yVv83H9h1yekDmLTfuWiqDhB6gU7YAngskGssSTAcTwVZi9EFr7JJc8bqu724ND1pYoqYRC1GTBpTH67a",
  "key16": "445CrUXywGzv9CRUvvsqA2H56dYmZ1oVFu4UaQiMJwDSqUZT6HMZJQYrAuzopS3HcRRfw6Rx1GhmHYCAvoqcg2Cb",
  "key17": "5RuhXKiuvYgHbgwdzGFWTU1ttQaLCNvNZSUhEdbHdsPMeYkZSfN4ApNAhJYWM123FEgyQpzmkSsNEhRimd3Eomhh",
  "key18": "37LNHyoYSwUt4FQwMturSivjtfn2DvuKwZ5o7j3QR4X2gRmtKxfHritNXqP926AroE1Q1rxBaxQXqztJ7bKWx8uD",
  "key19": "3yfcz2DC3JXAr2MsgotpL5w3QS46xW6jdhAXaBrcUxKUCPDbP769CvhSQzmQ2CL1wspFHgucbCeiTLUYhkwquQRz",
  "key20": "3zJocYa3q75GWNNm7kPgVcrHrhuZ6YcFKD7HiKJ9owCTPBgDxoXFfwxiCefSvb8cuGj5cpBKUE7s9v9Mcrqj2rBN",
  "key21": "3u5xPazxmDF7bKKJJJf15bN3vKT5ZBRcLNBqCiNYhxvsqDz6XqoptdYLjJ7ZTzz5rbHQivoBt5AorYVCysbPXHBj",
  "key22": "m72WgsZygzmumStbeUCYvLZ2eznRxS9BqzTaLoeEkxDLBARGeHiLyEZmsphovJAAunfoMBGw5P56XivAHWAMCaX",
  "key23": "4XXPNv38wX1mzHRe3qjX7MNmJtPnWPzxc7tq1QY7LYYzp9A1mEFUWxyhsEtVCq4XLWMT5Qv5szNfpvfRbpiD65ox",
  "key24": "guMM7acQA9vJMsroombX4dpivq9mJ5TjEJTV4w5NxNhETQibxaak6Qo4hE3ZfsYZPTYAWVvLXZqNTcwbKJpG9PM",
  "key25": "2QT8BK7bypb4mZ3iVS9RGDwWvokmeVQCVVxpn6xqYa46nWrKuwVkjN5V2BdME6HRoz6JvBGomWX8Vmc38eYWGvcP",
  "key26": "4Sux8X1jeD9gtfRzWb3zyJ7tnBX6kskcysuC1ujrMwjRbUfpcnRXc9SoNmGnK1mjzTxGcFCza6rkTEGbvRK9fFMn",
  "key27": "3oRBCRfxVBRakuiM7r4jH4fiNTosHQwuRYFn8nhbeEHtPiXEQPriaKDXfhCraLX97K3ePC4NNd8a5yK5vkv6HLxa",
  "key28": "5zoZKAtPs8JBiac6QiuKCyBRVBpykU5mY4fP2umAzPehRbqnMRthfWkBuRY4mtk3W49W4vsu1kPAEskVCiwEMNd9",
  "key29": "4GVzLnShZzBnW5MR4ZQ2ot3AkhAJBWoLqA9EFWhXkDZmKHSM9LADjRk4ghwx7KinvDBXhBhgD9pg2jUrzQgLNx8v",
  "key30": "65PFaPcqkgM894SHk74ABVEsohYK1ssDk3vuhxyTLonvMoW5SVB1AXfR9m3usV7ue53GRejDeN3oJQfEiC8jTjs4"
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
