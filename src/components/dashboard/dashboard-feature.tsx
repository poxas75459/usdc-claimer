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
    "g1hrPgNrKYuVVwxuE4eQFj5EEY7mARFGcfU8jpSULPLquQLn781B4SeHfdNvVxJEGu3L3XM3nmkHNCZyadUxiXX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PqkcxuA296rnuxaBGd3S8enCQTbM2EhVNF2QmzzppN7dzMeDjXLoeemZanCBsLG4K1SNdgLcq8LMshvfsHfjGFc",
  "key1": "sdWwtErodFL5pv7raEUeqYxaiXnkeFAAWKeBrx8dr3iBcGkYemTzKx4jNvdRTkq4RKseRAgDiTkNZFWSVXD9HKX",
  "key2": "36PPe6SjthZsVVKVk3ZSa9ihpnC67G6uKWhvmxjWw7EwfrWL9fmX6eEMVmm3Po7hqFv8kVs9aHb7ckN3CaKn5D7n",
  "key3": "3JhwGoNJihz9ZfotXSABaaGPGP2iyMgiGheh3JAiXr9Jnb3ZeNap2y19dPU9R9Ekb4dHBgoiTfq2mRCcVPoQ7zWC",
  "key4": "64BdHYtboabesH2VbXBTwBNALE1G593bBsfCzzW37gx8dWHD68UXNdmu85aBwXPUxKr5BKGLFEnPbnfYcymQiX5P",
  "key5": "3yJocLgauxZPMgpB7zjxjqDR6Mq82jTg3szQKT3WfzWEUJuxcdJZx9dLtVsmBZyUFiuR7BbWCJnw3T8C6rBPWhAo",
  "key6": "5XzhrukQyumBWPF6cZPeXDf54AEHC1P1Jzme1tDYi3HzzCtaDv3Boy9kd9snGTS9oKTFVx88QmqShPAazjC8nBEh",
  "key7": "43ePYN1upFXDPKyQ3UPFANoyujgpvVbEf8t4ozrRvKLoMHtf9C8hXm9wY2ukFpuqk38rHe5jTH15MrNkW9huhBjR",
  "key8": "5tCNdpQoZeAgXRbWbjzuWZGSSGsuWqXyxMD96Rgz64vYHR7TapaMiGe4isw71aPTRuYAUUR5Apu36EuxcewYD9gr",
  "key9": "4Q5NmjCBT4t2d4xjtxUtzKymgaHLiBxrKtJeW8HGZXLTvKF5ehorq8882cTnxxc7ociUxt2pQkVSAyz7V8WsapAA",
  "key10": "4k3gdZHBJSAVsBu8zhyXjCfuk4QgBwuJmSNvznFWE3jVY8wX9X1gn3ajyvvU7e7JBLhMpvowzDzZUcNFhmUdX67e",
  "key11": "25tRMqsVWKkWLdgXamMVqe8ZyonMo9kphT4bqKhBXCMVkeXkgqkjsyEskSNNPP7DfUstT4ZSa3pZM25RtdoSj5aw",
  "key12": "LUhEZ8LAJMtjY4C1nkXAfmfagkumLQSpZttfFLcsRSGbteGDd5jp6mH5WwxSSB6wXUF5r8zuRdiR7v8QhL16wGG",
  "key13": "5dN7NYUmVPYrsrKQo2THbzs5E9AFwncoiwX8Em1opPHxQzCnxWyDcJTFF545RzRgxpV5ozsfdnVj97HG18F9GxfV",
  "key14": "5Tv1dqYyZkBcatvknd8Skf7UgL7JxctHfLw8at39RK89fRBQZx9tuU2FhojBaxkCGvn7uWW7eTD31iqexGxkAp7X",
  "key15": "4wb4JjsyMxmgxroxHryQ8Bs3SPukfapNjawMjucU2hzWEAbPqfZAZpH3isrHWHckCYfWiBRBJUwzWzWKMEJNkaZ4",
  "key16": "G4AR6oG3Tnn2icPXo94yf5uFRNWf6cv5LQFBMEWpQzuGsEX524oomewydhRWEUMvdn9ePMqBNjQopMvfJsH12nK",
  "key17": "N6n7L8Er6DyfPAecnGxF5WdSfb7roXuFvrDSPMga2NACLagj9mHWx2L19u14yeVxPHcFubg7aw9JFMPr2dD7hcP",
  "key18": "2UDJkU3QdCzBwXghGTsdJpAoWviioNbH4sgZX3BJWvMD9YBrAgv1nxLV3s6G1xG1dsesH54rLYPgGrXsuLL9rVvr",
  "key19": "5A9w8PhvBye8BNTH4cJcmXTRa7QYRC5RDBa5mPcryXUt6jBXQrFYYt7NHrvR7oUPriydwXPmYkAqTHnFz7Qp3Uib",
  "key20": "44aQnxSKhFLduFpDxrDMsYX8WPEATA1KJwQd2P5G65Ka5ArfF2NHyhhzjpuqvc6M5Es7eQiws9jZ4e2fHMFESDiB",
  "key21": "PtVEPETjFx4VHXL9oRnAMfpA1JQ8nSmbgieFfeK8oepc2jLRLvrwhowe8WcFohuAJ1kemun9gcBqmBPk2cKBqiQ",
  "key22": "2VrSJBe5gcpaYzTv71etMMBWJMPF2TLxSf8QopLDEKQsi2xV19C1xcTu7Dj9VTsvKYqrcrhY7EUBpPBQPsYUnFRC",
  "key23": "1r7WQ2TQSRX6HUAmzBSGnLFntLe76YELwVCvyjfaYh6nWQ2WWfBcB74WPNyqEDHxGqBhVxC4JDuWv2VuyHWJwU4",
  "key24": "4UfU2bBVQn99hu95fydataPjpD7jCCK42MBfWuF6LW96GXoWNRE3ZgJMNrw1GvTzMXb7CdbyXFC5SnNwwwJqd7BG",
  "key25": "4eRM5gHe8V8zz2VsALP1vFKT4ibrf6wZ6pMrQtegtzrd8GU73x888RpindSof71kBCBar3qxd7KuPL51S5wgDPag",
  "key26": "2C7wRRFvSPvsiEcvHdbZAnAR7C3EfNEx2qYrhUcc2pPBgFtX6yzYTuBxYQ3vHzx3eVP3kpeJosqmaggCyakmzUqq",
  "key27": "4KCddycfK1QiydiZDD2diGqTvJ3X2Ryyx3C15KSqWnKTFoQih33gQa5vwJou5eJmAxMEAGHSQmF4ocKhT2iT2wYi",
  "key28": "5xLP78E4WUBPh1cNr3Scig5DxJyz2Mrkp1JdC4kqA6gtXFXP49pc6KntUcn3oxdJUXUo5qxPBadd615eF9Gjd2hi",
  "key29": "4eXfD2PPWvq2pxipUGyTpgxytzhzLDqCt8w21j8EHSgRLZyiHs9urQV8Usi34QHxp7umfomR7Voy5AgHVmjkwYc1"
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
