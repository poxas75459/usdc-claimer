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
    "25BP4x28dKzTbYDhZuLHVJNNZsp6mdrT5QTCMgq5ZRMMQ423MZ9RgWaLcmFkV79jkQnwDQEvTsFhWhiGvKff9UcE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mii8eF81h5U2NKKfwLHUw2XTPSw8TjaRXQ6FcFxAFe4fsqjLLjzvssjPVaY6xBwcpaZyADyfnvr5iudLh7dbiw8",
  "key1": "5K4883SqnqrhDctsiTdi1G3YzrDmDGusa7DkNFmxyAZidHEwedwTrnrtTXkvCYQBHjUef5nmPNMm6jLPzUG5hkPF",
  "key2": "5G21gdzvQ2DQkF3hxLKPTt98xFm7Wc1f1bwZbatf49cHSrsdVR5ucS1MZEoRytPutjkUj5E4tEGymDx6ajpc32wb",
  "key3": "2aepjBH5S62g5wru13ZbHNtUBT1cfDbxuUh4ZfUpfoyFBTJBwSmbRfz9iabkVpS1WpjW9QB3j26JQiX1dRXegVtH",
  "key4": "MNgpwkJcVx2MHQutwECGMwsp9oKx81aVJrDfNaZdSrN9Lh86p1iVXKDHJ4W43EDQnyXNoQHWqMQWd79T9Pd7udZ",
  "key5": "heawwo4bvFK9HmxJcmsQKGxnHtTyzb51PareCQ874LcQQPNcNyRqeGRrf9tQ53AGBdLhWUvDKJhE1nqneym9oiq",
  "key6": "2GEiRkCWqjFFwCA5a4LEAMrug4sC1mdrQJ1Rs3pAo1ZB8PXeCons8od9vpv3XaME7QPDkrKeAs6igRWFLVwyX77F",
  "key7": "2WEx7DViKA5tCjy6qM96AGF1GNyjiaa2n7Gib81HJf9csRww4TvoBDMp68JjuC9U7D5F8LRsApZzT9ejirMHWsPC",
  "key8": "5B25Bp9c2B21ewUdpDPFdU1RFdba9H8RrpzEJrbFMYLuYHSzGMqRbkomZHKgXb3WKCwxdYCiZZbJMVtVZPsuugSC",
  "key9": "29sotnF31AAHRYYYGHMpE1aFxFsTQaRbofkARAR7m2V5ATS7tgGJryJo8rKTb9ZxgekDUP9xHr6thW99D6yAE48E",
  "key10": "5wA52vJdLXokCEEzFiFWtggRFhZjCrpTMGf1GoKd5euz8iqTcr1X2HeW3FSU9oxNcsxuRN3NVK768a9dS9pMPiyn",
  "key11": "u9wBYZFr8ZcKiwWp1xDWvTTfqsYYh1724Xvo5WCxx7G1k7c6TG6Q7CvtbLLFLGAzGYfc4sD1Nc4Wc4vjJcWqrpn",
  "key12": "4ZLv9wJkceCQkdn6yWvJBjcL5EGiqbqdT18Vfu1NC1NXiip93UTsTRvu8vCvkXKso1iTcjWWXtw3W1P8qRDWKtWP",
  "key13": "4VgHG66f7TXgTP5gwCXFysZJjS4Bo44aZk5dNvQNTbJ6wkFpZRjiRjh8DT8YwBxt79XoELAPF7X73FYZRKUK4A2G",
  "key14": "5MpjKS1r9u33abFtXrsJoTmPuGgB5YtA2pjjR6nxwgYds2gwLovZNSwEG7zrRvnVx8G2boaZJdNrCJnqnY5zgpsP",
  "key15": "31GCTyM8CNCz2eiawardw7q5D9Zwv1LPr9YbMz55BugzjFmJCFbtJe5mG3GaUnt37N9gUNJmxQJB2SHwTgV25vfj",
  "key16": "HTYxpMRu9E94qivLnPRyGDwcL1nzGShDKb5wkJDSZ7fHVpM1m7LfqzrrHLqZNWgLMTfA2GtK5WB2vZ9SsQCgadE",
  "key17": "uN58LeMUK3ZPnwrBrktpYmbiP6Jv3zgrDqgA8RuLJdaXz3KQEcDWpXYYUsLHnjvzhCy1vzwZ53zwHPa256PWF2d",
  "key18": "5zxJkTJ57qvkYFaYGvU9Yr7BLyrMX73PY9R3G6V8183gvCMGTJLdx5bv4t8eseYU51CtnPLoNfFH4cprVNyXdzzh",
  "key19": "2ZDxFkCwLURkDwgPRsApNUSr2SjqCEiVvy64xhbYx4vT9DFuw7xEDpHz9e2LjoXQTDgZViBy2wJEGr3zGDHwa2U8",
  "key20": "vN787NWqhBfiki5LN6naSimrE186eXvqDC74zqCnhUarbSGep9MXUNVEhKmmkY382cY4KrhguGpyVqWq743eyo7",
  "key21": "5dxbwED8rBT63NcKV1cfN8gSdGk9m11t2otPEndvCca5mrAMU9rM1e9HDUs4PcuiEARg8ntG7dWtn5EdafdrqZ12",
  "key22": "2qcswEwgMi3dKNuw6rxaD2YAMEKgDowWJcSDKonqLt1c8tPARVfGz8EGdaRdo6o9EyCApwS2dAo9xh2xxExg4ebu",
  "key23": "SG9XMqrQrKHqu35gRv5jTeZUmYUWKqQJd7BP8Dau7hLCYMLFKSnZyYbK1c54PkNjQCqJqkdZFCeN5veQ4WfFP8S",
  "key24": "2bdJ1QxGkvHKTByXJ9VPVEd1rf2wNxSAdzto818SMpMvXW1nLcN9TR1SELbaq2zpPddoupT1uLdQzZJJvVnd313K",
  "key25": "5caFXEDYGSYn1N1pt2gB167zyBqAAGMwjr9gfpR2DX7q2ADARsdgbsVXW9eMN19uF5KHow9BTaK9Yx1HXS3KU96X",
  "key26": "57SZW6M99NNb58zJTWya1ZDuGt78nN4e3ndLXuW7NoQLbHthqP5Dyv3W8XGs4FnqLJkhsayUJ8QGgrEjjdyfJv2D",
  "key27": "49kjfxJVdm7EzqKqZbSWtsxGrb8kGausQkPiDPoGeUnzgTfcmr8icrwn5UAo5TgHCEDnzvugUwhLcUMzLmcghx8x",
  "key28": "NPnjYnw2V6rz1jTv5L1fWNsjCYkdHnpLpuxjX9q187SZpcjynqKFucQZFsjZuTuiBwWqfhJN9mCTt4AfYvsLPds",
  "key29": "4Z8BfcWb3j5ks7vpodMLSzDdSntMHUo7DLdKc4xFBMa2Scu5dtZSmcWSKDHeXQhtYdCo9vwd5mvmuEAzeENauDgj",
  "key30": "3XLFmSkb28UYuEWpmN2Zm1FEhSgcNhrSvTjRdSQg7Juv2DGfdePjhyMfd9yhSpn5NMCVmTkhN9EvbbNU5kxqZoZL",
  "key31": "4ouCYHmLpVXzs2SjgNVosscf5e7DK2VQ9Gh8jcyTkQistuHYt4qcqXecJxfNZa16dUUpTr5eUa4hJVAFonyPGoJZ",
  "key32": "4UpsxKvuFNo2JUury1rWkuMUXFooveovZJ66HEenJM55GUG8oq95461K3jxXki9rdFcBeeCGnuwMAxmMQZ4NK3ct"
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
