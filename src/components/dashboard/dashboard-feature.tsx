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
    "P5U9GPscf1Ws4rq4x3Zzo4mgT7JLoMT4dNKocjSBGnmujkPah55sTzB28RjTzMQewzogShTaEBnXYLngLuUTw5U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MmgFRUu3vUgKfqgkWAhpNXop6BhLA4GNvt7bwWNynGuXM4PRZiVDYD1Ewn9uTGXuLrcgVsVUvA6PSYf8ASx7D5X",
  "key1": "3ANoe4fVaUTqM7o57sbD9Jpi6aSnPoKG5rMirfJLuP7NxeviQRfAxj99TbgFgugxX9HWT1SZumgDPJzVabWGxFsv",
  "key2": "3zWmqaYZMWPibRgzRTXhWSgCBDdZ94zxJs5K4C6VVpww26jAG6Qk3bn1V97PMzUogPQhDTawyP6Lg8w93VeqaF52",
  "key3": "QcHMBZ38XThFkMo5YY3TzqJ2Q4zexcUSYU2DpKyqerbgkyzBhpqi8Y6D7ZhvxDGUGqs4cXKZFV1MzgoQtZfjFc3",
  "key4": "J72fj7ZvQKdDA5B86niCLXzu6eXLW2FwFa8HsR2xCg9uzeGxXDqj6rrLhfMRSMAHNyzWfLSBkhmaXhnYh6wYTYg",
  "key5": "531Wm4Cz9gNzJerb18SwCMZgSwhmd9oKH4QcsQbdCKAdS4nSdeUP2UrRBqqsyTVZzVDdAeUNPm5wkCpGMAgqnb1C",
  "key6": "5g9V3se43FZRu7sbHTXku2hWms7ymjrDpgYcK3SpcJVmp7Pj4oc6zYxQCePv4664EMubNTBqs4tkpesvxrZ7pfnS",
  "key7": "2EVHFXt43NssKUhnEgAdgDhrxXKa4hpLBCrv6xixhYaAxUuy6rceVhekUhujm2KaAAi1VLsZ1Ce1gHZWaHq3BtTv",
  "key8": "5fFCusraruNJ63cxyCfKJq2XouSM2KrwkhuGJFspNj1aU9YARxv4jo3qZsFT98Y7meS7XdvjgfywTUcfif75Pwzu",
  "key9": "5wCy4848g1vjh9rvDzUyuSMZZtbo2CGTUMhRoeA2amnBgR4DBeH2AphHWSCPzJhMDh8RdQFDCRwiV7r5RQFxxE4b",
  "key10": "4wrZMayH2Vxx8keg8XehH8dGVc9ScBnUaVas6vnz8XwytFSFyk4rJrwFma7EPvFur3jvDHWMmXGJYA6iBUAenf6x",
  "key11": "2FbY4K9w8LyjKnBrKnnh3ir9oYJnMLuGBi82Qa7fVhqHBN4AZFDwo1BoijWZdmmeAqU7W5y3e8j7ARSoEfue8ZeL",
  "key12": "2YpKfZCqHXGCDbkUcmuVxyGEoJejUwnKeGpdCELJR4q5CpPxYj2C8QE2Cmy3tsGcaDLKk3JTh2tpEAE2VnHZRWsj",
  "key13": "4vDpDjMq6Zh8hw52ZJ9mA7mZHdUhb2SbZxpPk55G5SfN2XvisDm4PVQkgDzZ3rrQMhMFcYupkjQRgqrKMUTqky5w",
  "key14": "3AmVBj1qRFq3dqvZBV9CYjqzz7yWvg3a5aT9FhhL5BQq2Hjr8JPVzap4QgSWrfwiZuNpih6QPYuGJPG7ZqqXzB7u",
  "key15": "3QXKSYn4h3WcKCWq6cFgeGgevwMeikMAaq6A3wvX3ce4pBUb5xAqNZZ8QKp3VNcEYa7CAurxESB7f5FMGSotdmms",
  "key16": "2rB5apcYcZQbVzth3CGqrXnAbymMeUvavVwTPzUeimCbsZEH7PAWREJwRaqmHn7LXggSAkde4A3hZRLx3uCeMYQU",
  "key17": "5rdQrSkuehC4rwCtVtu7RhXdL6Lpe2CJLKiX1peNnJuSby5NCUypdeXYhQhjzdHoYNor9EC5ybXPgBhoeTYwctJP",
  "key18": "4Emwnq2dHoqazxncSYLo3kh3icTP9NMTzXLYYbs6rmnvGuh76UydPQAPrA2o8GRAQys2G6YjFBXQNZypYTL5vbeY",
  "key19": "2cNXM1bZEx93DEz8ua8vPx3B6qfg3k6kg2gFdwXzmRKht55fe7T6ZJ1WC7a9W7TPobPW9bQijDceCBfwQZEv37Ta",
  "key20": "uGiBBGqFAhuT7wNKvapftyZ4t2H2xxr7SnxinsbdraRrwvMvdhDgQozqvtE7F7411KJizefMq6Ahi8rkedrGjd5",
  "key21": "55jf4BFVWDYNKM9LVf7eXbmyEDF5kjacscYzU9KM6KSmzHuVEcj1rfxpfjB4W4spyGAu7TxYrhL2Bv3r2wwgKLAr",
  "key22": "4jTBowXdgREeFWsvXyqpuTGtucCcte8BL6uojuNFKLubKF562TuXxBByMf2CVWJzAbkrxJFhbdhzGSvPnkWbhAMX",
  "key23": "3b89U8vxsvS7HbNabeETfXUWkj5591oHHTGepFS9CeHVzRZetrX7A1SjdjHqGjteai7bG8r1XEXVGPKNoESnyy8s",
  "key24": "PVxfC9RHz3KpiFFNSNh5Tnd1rZE5U4BdQmLf2NDoQW9g5ihDr3wNRWBrmadQGpU5tz8dtYQMAjxJRG5hPDSBEQT",
  "key25": "41beMoxQ5xQpmvy7gucBahZDXFcWYPAUK5PbXB9mPMGsPUwdeDiN8F6LpbNFCHdqwmrXdyvE4YVBCuyQktTJgj6n",
  "key26": "4uKrdewZQnzhX5vdjBvJpupEvGumAYdmU8YFP5J9Ag6Cgbo7dRxGCKSaY7oq74meadqfNPZjQVHJrz35ErTKuCzJ",
  "key27": "39DTx2F2bYQ3The7teJWdn7NmQJeYqVz2A5vbPgyiHAE7ZNF4mxhkVpomTAvT9f5vYSLxJVpcfKutAnsuVxWZbkE",
  "key28": "LVZnA1NYNfCzZ4BNMLDwnT631p2TNAqDZPpzi5WTUKYnAQhN5JGJnudmHducLbSU9AhqijVzn4sgwsghuzaWNS9"
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
