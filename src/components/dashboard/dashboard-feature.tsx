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
    "38eJAMphgT5tZeGvfg11i8r5tPPiMQPcFyGhz2cAxaf6X1MytwcpBBhY3mTm8CegHpMrY3SdVXbGvYLbWQu2E7af"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NMh41HTorT2GQg1F9jhbcAk1CV4SEe7YYLMHQeH3Z2Pb3kQLxEikTmGP51wHA9QBpcXpSY9t9z2ygWKjer9XUeQ",
  "key1": "2sD9gKhV5stwEjbsSgFwnRNH1DRWY7EKSR9V5836TxqoTc1K8HmVJmpnz7jFN8wV3xKNNPCqRE4YZgv71BRnYBS3",
  "key2": "5oUUDuMSvnjLz9KiiYb7suVfTWMLRB9LG7nRxpTmUFifivgiZr7gst28FmkxkRva78ZeUr2fSJp1BxTbxAmNMa9b",
  "key3": "2Kbjx2VHvPxi6oue6XnQNyh74bFj4SfMGhdX1cep2jhK8XE4RarQSTqh6QiD8p3vsw6XecsiJvaRDEnXKJWBN65i",
  "key4": "3W4fSPmPumA5F8v2tcWiygTEHNXMpWbVjkvrU5WaCvvxdMwX6nXcpj3PUSHwSzfYhbXdV1tUiMKnHzfu6jggN1zY",
  "key5": "2BzC7FQn4eXeZBStgve6TTTvJvwyq2QgAHX57ohDGrUbiPLTfLAQCAsLXPRVvFZcYfDXg6xXK3WocakWF8kEb3wd",
  "key6": "3nQUtMVNsM8pksbXieP5PoY28KCTH48QGB2G6oZhtEDLRo1vc6cvLBBvUKr1EKhk5VAVSjwYXMcMkLTZuRevbY7F",
  "key7": "3rQx8cGHcQBmLoE1P7PXQeXU8j2Dfr84AW3XsmKtcoDSKB8ztTHP6oZuYRuzda8i7F5soviib5HZEKvuvfMbnPnL",
  "key8": "3tbAgLaQ5z9F2rLW9CyeVdUbiG5f4dHnHk4icrijqLLqqY6oHGfwuEfUFRQLoBHzQxfShDjJXBPMBTyGggG5gGf",
  "key9": "4NF8RFg3qNpxPVXmcgPqwzFHubJ2R8i1rYgMzFE6SdkqPBEEXXxa3Mbq8aepfoPhM6wycEGMkrGqc6vBir21GepL",
  "key10": "3V18vKkH1NjFnPGMavPLZDkdQp4qpkp1KTKtn7ABZJrudGbXR5fBccCae17R1LggaSqS3PWyHH1cWY1CJGN7sWAy",
  "key11": "d9eEAeZn3WkK2tLUeZLaWXwSyApeuiAzxa1JZfqQCLdhLVkbknA4jYfv4v2HXnzabn9MPgiH1ir75YDcGA7szfR",
  "key12": "3M3xSfGvFZy9vEuEGN7xtPaXEJBSieL2QzS84q1poMhg3pdmscwvVvEwENu2CxGSbDYCLMHWRxuwyQJnPPu5Fr3j",
  "key13": "5JZ8Mz2hsstvSEy5hNvAMvEhBcZSDvJmyXjXwmcCufuq89ecyiER2kViSXx5yHSTwkfBpwJqtmpB3nFcgLckCQDm",
  "key14": "4UWUZCM36r3HPLTMzDvomRi4EFb82w8nx3xcCx3U46uKe5JYWddds26itqw6u214PapCHGpk4AYXBTmJxkU9raK4",
  "key15": "29ATFJd35YGq4jou8LhBGp6VWphdVw9DQM5Fq1chYeSHpSwktw7H1HM5znjwELkDB6Tg3JLi7aBGEJMaR7BUWQs2",
  "key16": "2g5YEe2Cqp8RTKutgNbzyRfdzDbXXFAM4vqyCrGSEnTSCj2nGx2RJg3YUXxr2uKV9SxtS4GqT1ZWTTk8MtKWt2E7",
  "key17": "497VrS1p1Mbmgtb6oC9JAptG8uTY6kiRj8QCxabnCykQ5CJ41CYJNRSSwBo5MQRBbRegKKXbNFWPSQN2qvEWLUM6",
  "key18": "4ScKCTP2HApYrHngtDYUhrATaSwzYXArBAHoabwoRZ9yhHtxw56GuUgQ5ejn7W1udqetn1CcnP9XWqN1MEoLzDpf",
  "key19": "SPx3e7pFbLBJUqPEmrSRApoLMxdD1zYUb33BX6BFMdJrvPMgN4tdj9oh6WauYZgkKP1rhqBy7o3K1nf8N8PGB9S",
  "key20": "3YN4vE6ZXHLNDm6qXf3VLytb2NAvmiwXmXrbzyksjicwoS3ivmvVdDXr8dYVRs1JGNAbb3tXXySMZriJtT8M7Zkd",
  "key21": "TwYHdKnDUn9n2jhSBw8geQ1Xp4QXhNeHfTPmPgBqgsi7szdHHUsaFNJQPmAKn6TKi5GXL9ff75GCkvhLQAo7WHk",
  "key22": "2hMxpQjqZVvvjV3xM76MmhA1jfXYCWn1GDpdp4iEVvASvBranqmnQMa8CaWdJ1UgxkovSiHNrXKkgoovyV387Z29",
  "key23": "4qf2HEBaxsvYWGnDoSsH78mj3VowpFuQFPKMAhPUui6shBBjt25PBoQwKRbZG78PSpAkgxQREwSPBAVSBQ5g8U7r",
  "key24": "4aqTcYzQLbvNVHYZwezrJaQsuaxNdqnSSfXL3PhTB5T8g1VLTG8K6LLPP6DD7E54U4djPcfETW2uStz1BLQAaewz",
  "key25": "SSfEghWWrCuYUuKndp84Dp2t6eNYLy898TRCDRXBHqsf5HqyduzQbiNx6Rrnf9J6ZNUsV3fAQPatqMr5mM2Yop6"
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
