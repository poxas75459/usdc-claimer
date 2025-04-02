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
    "3w3P2f7st46Q3eXYwaaePxXFKVLCxgNYgsfsGmzQN5LHNAtcm7PCvdkvyhJR4G1VyHT875pWRFnZ4xz4F6NhujBJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HgVWaaN2mcr2CH3xK8EBqcnyZTrTNkCUgybkvSHiGeSh2y4pEj3rN5Zrjh68eao7GPxCM8jmzotTUoDHwUAZT8M",
  "key1": "pkujMGnDoMsF9vwn5gmTk7aXjqWMnDUrypkBD3BKKq5yvk2ERA54i2YC6KXvCsGG8Rm8qSwCHxtK3FyZUFTfPEd",
  "key2": "63T8deZiS24CE95L4KbzapawacNUehqV5MWkgnzeCk56aLnb2hiu1DGmmmjS1pF5w9iWP3gh9zuzCw6yFfbXgmaS",
  "key3": "64azDJcMuJF12LMknRrb4H6gPMtYqwHemYL7gXYUfJkurHNCEcvf9f1TJRGcgPeerQg237kvHDDWcWc4WaBr8d2k",
  "key4": "3f2chYdKbza4rXcnBbEf7HkPmTqDoFiHhn6WoptYtP3CEqxmoqwLQWLoNFBePzevshvyjGZr8ZvWDiwJFiFBBBjQ",
  "key5": "5FsKzwas9L2hF9TwSDnN6KvXVq6kZ7e97owXsUMtZEvomK8MXqvKqeJUnDPnvW8RvDrggDpUqb8GHy7TjBXmrGkw",
  "key6": "2ymXa1nUjtcRtuKhLHg1hAF6FjieufkYigECJDgePvjueB9PC6oJzmFWB76TB3PPRKyYBC2agv6H3TfL9iW46nVk",
  "key7": "wpWApL9iMeiPRBdzpAGmi1juT5pBAbjysUkqpST24555YykHUHH8aAhmt8VHgZE4DCauLuggFZFVfAT6qVhyJJV",
  "key8": "4bDZxvDjWBpSgse11yJ9cBWDaSt8igeuuJmkJ7mFUw2oMBBj83imH7pWnrGQa3YoAsPianLkEYuQoY3qKDpJd5hP",
  "key9": "3tBY7SRtno4HeQd7bURPHPKCZ3NYrpj8uvMV9nLXsirS45W9m8A7EjAXZfe2R7YoS39RwaGbPYBYxLjNRaiY7hxT",
  "key10": "4JRAzGjFecU7XJShuapRkUESDeRExCbvv72A7tQybjgyJTEt6paPrhfTnr2MpMTKKucX2RH4us7YikDY2ynFEShT",
  "key11": "5tGbkeL9Le3TLHHJvduyraUinriworAWUSmNjvPKkTLkFfSZWDkgtscWZ1TzHxiTiUP4sYPNU8fffJP1ps4YthAn",
  "key12": "26LAXnfDmLM5BcD8xxDRTTZ638SKdXsDvgHTZi15kVx4WTqKrh3k2UukHBETdetCaCbxJZ5aNc8WWvmTUk5S6Gj1",
  "key13": "4K3RSmhM7WHytAvHkFGYP52yHhUJWyBrboa6h1gKLap29JH8Y84AzSDaysfGN9g1wcxBKbjpw9EUH1fJczRumg8m",
  "key14": "2QLLtG3MTyXVeVWbatEKhuJrvX8QeouXhSZ4jbxuBwLAGgv6nMU7m6qHkgDJ7v24oynqp8gB7jPBt7j68CRW19VE",
  "key15": "4jw1pqpqn5n2Hkwd7VZom4kCr7XtqYfD1tpVuj3UWFaFxTpB4tmfYtUmvPMNXZMe2eM2CgGpRC6tNvyKzL3tso8H",
  "key16": "mdz3VAXNLhqGcGZMiqsYQucN3HXPC9ZZeCCubo3ZuP6nGTP8uL4tKPRvyZWvfufNnHeUTxM1bcp6Gq121fWN6Dx",
  "key17": "4nz5G3LZZ6ihjgwaXny2GHDQ6nvxpsdipJkDuTRMe6yczXdu5BEB5B3izQREjWGigTrpcN5tGpGWbhG191sh22RT",
  "key18": "6d8o4WaZyMzuYbK3nwB1gcKGCEgmuXZBrmPgWfT57Aoe3DkP1yVLsS88y3c33u71btTagpPbv5qopxLvQw82NQa",
  "key19": "63CPTrrLPGG7bErieRgYpRtUUrtDF4mt6Ut99L9a2bxJpdGRRFxt6vBhK7wMexgKJ6mgmEUsdrCzwyUpURS2X54A",
  "key20": "4LNQGgNYst8hAiL1Z6oDHJUvCvkrw3TdVg5oqwiVfWmn6jpDv6VNBEz51xcECsJ7YFvogepR4n53YApBj5CVX5Kp",
  "key21": "3hGbpZhiwwaT7MhQStuiBGsX3C6K4W3BtWaknrFXWnHLd1tQHYAh8gfZYEPo7mTN3hmyHcD8Er6zKmRNUVcHCQHc",
  "key22": "26tqSEXnQvxs6NRtHuJ1UMb319yiGX3aPnkNCwkK4zcT8Rexdw2TeWo5A9XksV5SmbHHNaX4ZaL1a5ECcJJXmMVr",
  "key23": "2Hbh5X5CXa1BBM8aU5jevhszStSMpECQMNyLsvjWKfZsqfpcGGczjgv71xgpsuzkjnYxNE3vinFZufUx1r59ZcTh",
  "key24": "28XpFZiaqateFyvuJ14fs2PTFHtvm34bKafa57izGYpVSeEapmS4tmqyst8G7fLgUD2Hxx9utw82oy1WTMb6BoEB",
  "key25": "SQGFmq5Hw8CDw5Gq7ax9qsUarocCCRnzzMc2giuX2spbwT1J9jmCkTDjVrNx2RL6GqGp5jfPgZ4JWW6f8kue9HX"
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
