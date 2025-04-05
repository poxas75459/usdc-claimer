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
    "Kt5fEDcGgrPRD2fT64m1mbQdxV46MSekEdVBBmsWMNmGBhhPt2EyrwKDKHE6EqDHLoKM6Ba1A2GgRBFHLh26fdr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61yyf2bctuqs4cKpHeNhw4jHADUDFPRc5JFzZhCuDSKpbhNvPisVz5jGtERyWhYVRYPCzc8EVZjnpGPBz5EcLRs5",
  "key1": "SUpW287ERxx3uJgBLA7WGdozapMRmeYr2G2MerSWmuxAjTPkJZm4EHEycav7eK3ZLVu6LyiTAT2rHUoYs6wpZn8",
  "key2": "4qBHWcELzEqfQjS19Y7ZykxeVUyaoqUXoMBmZodWQCTuqkxSifovFDEShZRSV8rCCri1x2YzgBtt84brXVKSsraM",
  "key3": "5W7tPeEzuALr3mLhzUnwVhQKDjQhU8kouEXvPyvxGDpecZids8XY9sqwaWbuo96jdw4UC8Th8NTNG3DYd17PkXyE",
  "key4": "4dugjTvjupTqpafpsoMbQ2m5R6aEuYfSboCizh7BamH6CbAA6xA9iYzsDCDoqW8irPzRYKRdn1whw3fBkjh3Nshx",
  "key5": "5uEGFwz3MBtUAZoFoH1VAV1cDFgB3wCggJCKkK4kv9Gp5dX27KVYkoarAoqPWrQ1fDXteBAvPxtmhQybwqKWdkUo",
  "key6": "7zmyzPdYYWmxRyQdPxq9Sso7oneqvDUrzVUyVeGRrDEopAMYWzpAmFVqUwjta16K4oXzQfhdVcjqktXoydyiBWQ",
  "key7": "2LxA2LZ8KernQ22SPnK2sKfzhcw5n2PmrdWZnX9cM1Mn1ty3mb7NnL4mtKTkSfqfcAVA36s1duao3UWMXyRAhuhC",
  "key8": "nGHwVFxq5XMWGTsg8kZgR1NYRMPmXQQ1ZzaHJ5zoPGEyyun2dPdDaMm2riF2t3Z3wA6AW5edbzuMSAmhnphNRyo",
  "key9": "4RpesskmoT3qakZLUp1bzz3TKFuUHfKBNYwxykSRfvEeVqnBePgspSHVGzHQAcJTKrWB6qLQkyPaqPCR3X43hVWa",
  "key10": "2LwpNnJJeZXgaEyKokJvDwKSXpdvCXsuX6JNA76WUYQP2FK9Jhpf5ZM1TJmWzySFQtchswtBYcfUZtfoPedwb1L4",
  "key11": "55mnZYKmTT8zUzGGmM7NbtzhdtyRKQ7XLRCgZjq7RVjWV3ejSUBJzwb2AVyU2wESdWAFhVJfEv1nVojd5iR7Aqxa",
  "key12": "3y9esUdtoPXcPWb3xQp9ixj3YnUvBgK1sn4XntzPnqrGcmZkaDVEEoG28QpHxDKfuvUykX7Pa6gfHNwEXcEq6PsS",
  "key13": "4EmFpS4xNKpEwrss4mQkbxDDPASkJvMRa39p9gCJEP1jyF4mGH2E6Yycfr6cXp9trNGqPdWzHDzZHGcjvpHCH57Q",
  "key14": "5W8d6kUj1KQM2YZvjAdGMszx8wgF4rzLeegPMDGVRS2VcLWq4kCY1ATN7BkJsN9ktuVBbnnrSg5z629jhpSGGVn2",
  "key15": "2RpTk9ckHUX9RUiSjLVfgzrZZWUwCowkZwV4VMs9UDSk5bPvknKa4cB7YLnxWik3irZgMJ6fr5rC9jABYgRkNPtP",
  "key16": "5iZDt5CcrHA6iDxZn4pkSeT2eZ9xkiykTEFpNpEXVNDBUYKztDJsGvEyv1BPJD72tWKqhT4qVaA6o5TiTyzpvu97",
  "key17": "EMiAjMyWdU5TMqfsA5FgGeJkV5QAi3VQXJQdvYBcG9mVSvYrFT9uviorWkHCLAkRN9hCYAx8vWuutEuhS22M2on",
  "key18": "5tT59rN4YWMp7sLngviLitvP3mBqTu9uGoP4yGYyABYrcrqf6J4nFZH9Q7w5vcBxLjgyt6BHkuNLAswasCNBGARH",
  "key19": "NddMEayg6KDeJGU8spCk6MMoZpWmMNCgrF6TK5yfLeGVaETnLQmcKv627CutzinSi8emUnazQiciks449epay3w",
  "key20": "f4VJDztcj1kCwVXSzsBMmMyCVxCBGzCnCCNGwafdKXVwzyAXzyqKmwn2aDc2NeZE7RctHnaZHhoBsArah7gXDrB",
  "key21": "5B6ZDMnP9m3LwrxeyHdVQS5ecfZatqva4JWZFh5w942XV2BzdohPQ2P1bEbr8ARrVdLQEyr5vyytkCWEXEkHR488",
  "key22": "5CThbhkSkeWrm3HRtc3u3NWEohr7tsiejKBUSyRUruRuCZHPHLRFVe2vB5RFW1gZK4pXBjfLhLkjo9kAEGNd3Zwa",
  "key23": "CQ4y1g2EQwgnRfRSmb53gHQZJf6eRuWuqF6EbDU6GEQ9hV1Fp3ACGa8Z7JQPJUSD9QJz7PctzSH1gMcEaq5d7vF",
  "key24": "4uoojaFsqEuEeVfh9fT2RS6RsyLQDk3vBG7L8h878pYxfQuh7fFrLPzXd1pGC3aDv8N3ZD6Q7LVUCcEc2NZKz5mq",
  "key25": "3SWHPBiKrhhdUgrrNYC1ayFRTKRbN3FvpZN6UJci7a2efdEFUbJtC8W46jZ5PeW5qdn9wazehH33stSEacaBkwyy"
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
