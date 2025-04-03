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
    "5vH5xA8FGfsdkB21DMQY29dvtJJCqjf5sFbgG8JjYdnUKTRAz8A8CYqCPDmcQNBozJkWkbuaSt36ftnP9bAS4mmB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m1iv7Z4XEaNqmqnwVFdgpkzTzoGS5DqDa9tZzbeygbEwDPFdwxYxLykXprPSQoVQ3FohTrosZk7K7v9i8afago1",
  "key1": "5ksDLTcvc157oL8iuesYewE6CF863EP6FSiGnTEnBX1X6z9kPVLfVtN7DRNYhKcbjUJUHc99uWcXMTdvLsAxLz8B",
  "key2": "3W3Be1s7XsEB95fnVYY3FMbLWm87theaccaxWhD5Lo5RfnY5Nph8qz5qrkKoNZemWPhUYhR9VwZ79ctvfnak5G5i",
  "key3": "4FnwhQhT2fEPkeRAmdRvzv2s1yx7DNBwhL2c6rTymCP5wkFj9iw79NEPgbjDajnhG6hFGfyQKmoikumZ2cekPETH",
  "key4": "nei8HLjLPEKFiK5rw7CQkNxjQaqu6yvL9c6Xf8hmdy5znhBQDFMohyJYuhukvPNpRJWYTxJdBvHGg6VmoWzdUXd",
  "key5": "4FzX5Kcc8N4q6uDCkyTfbSXhUrkBf4AvnarqtRmd3dQp4GZxFKemtnW4tc9xv21LiTdzi6YAYLzmhUYRuuU8vTfs",
  "key6": "4p6eGLa4C7NHJUBpPaKbvtceaPHsfjYYwtZUckzFYC2C5XKXsjQmxA4M1J8R32f1NAERxhqMhqYqRYTvHCrTmdbg",
  "key7": "7ikSCHycVkPHAPXiAgk3WZjYt9z9vMYEu2s3vewNLkyL4siuyY6za4RhYpPFBdPYraX4zhC9sGCBDcVmC6aGEDR",
  "key8": "2TJ4ArZ83Myt7xab117JjJDLy3zekGj3uHqHJnDbzvD9FY5pEB87ESV2Je3mxYuxmNXfLXWVY1dF5R42uVBupNaK",
  "key9": "2k23E8WZDRTQLUnNBvkSVxatdfwcReR3gyduprB8z8pNs13V9CvWk2qJvkaAvNQv51VeUSxHzPBEFcPJXrrPDVZf",
  "key10": "xW42L91dKuHQEgg5qe8iN9mtmVus1M4nzbmJWfA3aNyVM1vkUQPdRSBUob5KZPoKMLjNQ3GdgzuLxrk9ziLx1ho",
  "key11": "ZGbTUTwu9C9FPKYFfjtEoj29Tg44dEYDJ84d9bdenRy6py2o7GnGw3G9Q4wfsYFWXYEUK2AQ42MTjbv3jGdwR53",
  "key12": "5GYaYPULtkPtbZH6GALV5PQiBJPVX14DMrqHqukD53jfigt2ByGUU2zMERtg14B9dAdicRTWv7g4immiBHrv1h4N",
  "key13": "2PgsDcsY2qKygLQ1c985ynybS4No775wywRHPP2Hy6yM6mvJ2Y5nLBZes8mLrerMoo1PCJEDMdt3hBcfJA1rinhb",
  "key14": "2892Kuw6q9qJViSqUEKgyyhV66DjQ7PTftnp5mx64j9gYKCeJMBBsW8nzk5af6QMAbzk1xWWcHhEB2S2jAtm9d2M",
  "key15": "2LdXcWRyRzkPzDSNTFRUiWdpwxUBwpYhMKLiCxCkKHTfrCZVGmj62KknJyXpXSByKvxqvUnohEXRmK1hbYWfj6qV",
  "key16": "3j2o9wEjSZ7b2MAwZWLdFSQEaLu3W6AVoshNoteBKz1u82QW9bgBFUrgdLn9ZKxNBrrB6B51d3LitPmLg75PVG1x",
  "key17": "4qRmXQPargC2Km9aXxBCD7NwPx6kmTwh4uQHPrE5nd2NbhiPNfyoZqGuJ4xHNsVyxQGMvy2W6Qangnw7PwyL3hZU",
  "key18": "ds3zPpwfz5Gs9L4UJGFrXcpkCUcg2ng1iDBbnjKJaq1STZBroWexDaySoPo4ZSkiQS4EnmA7VGok6XL4H6NKcdV",
  "key19": "4aVZfwHtJpCBKJGqEYEvJpoqkQxQL3Ydw1atFNfR9TqALGBAAv2T6Jwz5PSiLfGNJkaoqAzpmEyM4Pbtn4wVfCBq",
  "key20": "3uqsTnA52wgZgr2is6Lju52xP8PEuePA1NnxvY8SwT42H5AZ42EG4az7bRxD1JhAuDpBdn8wbHTXqDYkCMTyj1CB",
  "key21": "51QA7zFkAjmLPCvFjRGmwHLKuWFvyHhgSqCA2Ji5jGpi9oeQf1obimhGV3fR6NTE9dUZCLFTGqkNX8KXYSkfhmvJ",
  "key22": "4jvPHeAWLUicnmjKNxcA5GkDTrXrSEz5ATutj2jytkQ2kUYUJSEmaeryzN54Q6KiZzaUYb6XfM48ZU4tF3oTfVbc",
  "key23": "33pGPoB2frcGQHKnvcxMHQWtEJjQQSjwPFnzVkJzg4L47ESWxidUS7BBzRmvsaSw1fa5dQ6PctLcWNnsg18gTsuW",
  "key24": "59N9LPZjbGHEwHmbPoXwKZR1LrYZA5QUQdCzpAoixxnTgUSZj4xGPMqtHj8cZdxSmvKMdsUit3gZnmtNbDa459MS",
  "key25": "2zzTxFtP4JLrhVrogKtGJv3Zf3Aj56sv1AQRqn1EakqQeyjeiDxP3mTwyAYnJFMxYpoNS5hiTj8M7VLDckqXkjxv"
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
