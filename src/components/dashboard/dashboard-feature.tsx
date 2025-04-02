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
    "5TN8YsfxhTHXfMCjx1p74e69Kitv7uSRUHw5WLBftCCLtSiMrSmVy2zUKS3csY9EM5g7P8JtPoPMgDopCYYat9QE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KkjEPnFt8Y2qTAzCeCXuZqhd4Aww37DSLtCF4vZAv6Z3i8foB6FLoo5PtV2yHLaUSJdh2NW2a6LV6fd6BzxtFJL",
  "key1": "an18kMJ1rrCdyZ1JEp9UAUNiFtm21r1XsvkUWNmK2EqD1FXt812xuMDbjD32zv3TpEmtz8nVVx5c6SUuneAdzwM",
  "key2": "3o5td2SxomUE457ctKrWnDjewThgCkoHktGYxrhsgdBhqr1VL7Y4yMuFtgddCeZGhndYd9HF7jtZoiooHMcDgXmW",
  "key3": "4P1eZXTKXaVPiQ3QzJLU8VHpRAjcqHxkncbkCAFA1oQVE7R6iySgwdsaMhZ65zjkfhfZUoqSf6Tv8TVcgPR4GY37",
  "key4": "JPDsjXgrVWUrRLhFUunvqsYc5wWksSm22RzWskiCUSu6AxSm2r5KCuxRSbG43tHGc1tuQMXhR79eGpTwjpzwaoC",
  "key5": "ni6FCiskcmmZ7n3YdSJvYDewqys5yJvftAfug71iRiFHoUhqdzzVxHV6hNjvsTv6wRoATm8tM4n2nXJJs3Eu9nq",
  "key6": "2dbDCXuksRW6y9eD3hM5E24HcGXsFwjqkE6RzHfK77uepriu9brTjjDw2nM1pM3MeJjRcrbox7uA9ukyX2NZiCPs",
  "key7": "42Wxp5W9Rag2GVYm9Q7DLW6tdizxo1DqiVuHLvkbnE9pRtBUvXWp2barwieVNCv9Xrt1EpsCQJnPCssN4qjomxt9",
  "key8": "4CZR1pcCVzRRN2E3UkDNL8uUfsUtFM8tYexX4soL4cMKKJnE6daAbKDQewpB1vmrDX6YX99jVMvRyQCKbY5R3qGm",
  "key9": "3SD4H4GtcjeTP91ekdLZ5X4mq1muuWkgq9HT5r9tWVRX89Bn9sXrBeZ2CTkD8bF4Cqk8MrBjRHGSNgJn8mLkgkA9",
  "key10": "3rMQe9uVt7STbPmGYda2MNZi19TjvABXQsY9B1Pm6Y1iMjkNMj7Cua9FzGVJ7F8AhhuhqD54HedY7TPE8rmZ3MA9",
  "key11": "2tfojAJhqPStkYkZGBfQrLt27AGSiUoo8c7hcbCWJVeXsSLCysrN55GXxWX4pxF88tgYfAMjGnVrzbrSCNmLXVeE",
  "key12": "2PzZnam4Xp9uqwLoLojsmsHBRsucJiAB7ypNGpgGATWjKsr1HaTM6cJmWjt2ThrqcGZokMHCVLzcP9Nh6AqBcmB7",
  "key13": "1JQR9He2hLmdMcWXhheUHrNe9gYjxLMuyJ4WEsscyykxW5FVKckouUXrxTXC9jsFnwsqbZwnxEJPQ6bGt77PTx8",
  "key14": "3CYJ5ZWxAD2vbHbxCbQjVSWhHActUB9NfcVj1vCxLZeYi2pV1skiC7Kt3pqZY8NjvGeMnfYQTWMr9EqSEZ31P7Ti",
  "key15": "5CT8skdyrufTvdgsVh2ZbjxwiuDXsyFe9D9Cow95mPK17RGtQhCAEQwU5gXWHZWyK4ShD3R3fGRZ5Dqe3cinwUNH",
  "key16": "4oXqxWGA3Fa3yatpS6MipY1SH7efzzRUof6YsstbdMb28EuLbwe8t46ESkZGWRDS2w9aHQi5Chq3Hphca3SekxYB",
  "key17": "5ufzm6rwstoFyzmm8QM1HUA4CQ4phE3SYV4Q29x9MNricCo5n33uk65Lj3UptuW6ftXVkKs4Hc8LXCTG6CsU4djK",
  "key18": "2eju3ZNvW6UfJACN3wbb3PNLyVDDsXC73PP43yZDZ33XwEKRgeNGttrDStjNXwyvfUM1AnnwsLTCWLpNK25WdapH",
  "key19": "5tR7yh9uLQfm5m4XediPUdHN3nFfthqFWaptVJgcYWKqw8B5UXRje8yQiB5MvLQ48s7rmx2MkUZyzamixRYRJV9S",
  "key20": "2pwFs67sTBTZ7k6JApqXg91LKacW39pTguQeNG8N6x8nfa6HfcQMgwTpCMYD6nQRpJahSpwRYx9zaPch2HJz9meA",
  "key21": "64kKMBAsDA1hz7MWR8W5o1JQaRNYs9Uj7sHhwURLoctEYCHareHCPSCFcCsEFp1zmDAxd9f15Ac4TeQVVshm2aZg",
  "key22": "3zCxRm3nXCP3hmixJchTExVxo8dijYGQp58v7xm3HPLSoK9iHcsV2pfWAgJswbFjUopXHkobY616Dy9aC1wLCVKx",
  "key23": "4nE2ro8N4f5Vw39aWJiZPbE86LNti4Sra4ryWZHH5woPAko1NWJJbyn1V56ZkGrrmhKhhUrEZYSHjXsQq2VuavE9",
  "key24": "4S25mYKq5nTDufDKfkVQYe6Y4GJUn1s1SLFMAZvmP2tWEajTgmiUg27dDCgrf3LYKbAG7gKqxyijfgjRVAzfHPXC",
  "key25": "5cCGnc2uMQv89Db2cSP7Hr1vrSPSyvKvyeDhmA34wrn5bAt964CF7PxL8RoUajnPn8AZJUrfsisKk84FdEwh6zQ4",
  "key26": "5n1KRWJfuHUurLsjrstqwdcgzJCctDBv7xu4JF3gQsg6ooheyNadnArLwCoBRTSWJ7oDepns8AQH7vjFnu85wBNr"
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
