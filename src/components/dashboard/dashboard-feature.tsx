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
    "5P2yNq6JRtSm7sUzUogeiaFy3ToGcYKKT4nMFmLZ6stDKPWMuRmbvQTEMfeMSZGXLD6cEDxBqcxn5BVWvomQvSN1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tJg2JWhTUPR8uU9yjesDfxpj9feWvLgqkgUozkZjuE8XNAFuxd94cHVqNAw5Vv4eg9CtwYXPpZP5XFGVaxJ93s",
  "key1": "CWBH4QKk8Ck3rhFpZwq4XLf7U3x5Hzd9PJBmuheYzfFMDdockQjzcMFASNQMvj6LZoPCrVfAjCady9WYb4cWrDn",
  "key2": "4JCZWKfuDPbc1ysUawDZXD5c1w7ee6pVTUoNUCTMQQPgRWTTq1NkNRUboeDstigM6R4hNj7qBRQYzyXzPi6Vtc7F",
  "key3": "4NTPL88yNS526U22EXAs6GtXgk7uGT8wWjMGfbrkGi5NdVfQ5JPGr9EotJLmQefLgybdXoamN4KYVRkHnYVTqKMw",
  "key4": "2PW62dXWciDEPD3NHJrYs2nRLtmq4QypqtnLmEFk6zvG8MjrQmxHnT5kzTcxgkvWb4R9AzTVAvJmpcR2MehbDDLX",
  "key5": "3U29SM57PQZ5KZwbNJyA3gVVXY42VAJnAZ3FjuCDmyahXVDkVZAhZNUbgM7hJ8gVrCNv5qoHVvvoe5NHp5kdYctW",
  "key6": "2A7xAXQLocs6ywbpjeQCyHqVdwuknD4VkRraQzuaotBEB3gYjQ8tarSANs9D6uAyjppv9Z8ZRQVN5Vb3me1Hh1CE",
  "key7": "4EqZF2imVkoUWzbs2kCyqAZtL82veLTsfYCjixk86Jg6FTMX2eTKSdhaZY4hBAkM16N13BQEXFW1Wn9nGrDAuxvL",
  "key8": "2Gaek7bodYSz1eNfmKMFXZKjNWpJVFJcVaBXWzWzPVdijMkAD1EUbav7TLDT3cTaece3azsZvPGN91NDibn6yZgX",
  "key9": "492Ri8RFPLSmNTRVjJvCeJ8VFNC681Z6KdcZQgtYGsGE4fnGcG9YN15S4Mp89hcYxLcFRPfptLdh4uGkAU7M1PnM",
  "key10": "38wNag5g8hLsgoa6iF8n2b2yzoCBP6c359PhAWGp6VMk39zyaR2cViZMajqas5zHdMjEJtsz8M8L9UvzzFxhZDh2",
  "key11": "4uKQZeESFknyCmmnFfiZ3c4TtgeZoWseDvFLXoVFuTN1t4xrqqHMFY8G1SWSX1r8DLFezATURoeEmENG9NbHGcjJ",
  "key12": "38hwBgc9M7LuPLQ6rAT8xrTCAJuccVvsqM5GSobNrVsehAsd3Tf1TVsNuSVHQXjDdXZUnWu1a8WKGMeuGEbBCp2",
  "key13": "4rfvujWitop3t44Fi5n9mqBK3eaMP9ycydPpJcFcnZ68HvJkMe9ikt1ntLFZfCjtWU1kF8j8v2hzkkTWjFn9BrDz",
  "key14": "e6NQz2JScmwBNSCQkZG7M72Fc7DkeescD7ywwSnCARCXXPUz6rzkngUFNq6fAWiQMFNATZmhwBgzkTD8YVUa6cW",
  "key15": "pMh2rpQcxS4y5jq7bhsHggDfCA9tEzBNy5Dwm8bQmzjUYaKhPdRnJmfj2G1K2p56DQHuVGgNFcZCgM86xCPe2Sk",
  "key16": "2rY13fpK3ctpBegAiMDNgihEW4upLnX2soppn3qAEgu4ckFuwkk5kLdb3vgJf7ekeK8cLFcpE6fjkEdCw9MdrmVo",
  "key17": "21WPLKgSiVFoAAr2n2FcHEdvvj7RReLoysjZYn5czosgmAxYwnTY3eLenomhpdS6nxGT4o7bNoiKtusTGkwB6LdC",
  "key18": "628Prv1m5q9FMPmMCVMf7eVt3woE5BYG9xkpt5Vm8vFEAmXQ4cRVbd9LJaSTFW84DqYhJ9G2EvXBbfhgczkFWjv1",
  "key19": "79qcTHP7TYe2KSvt5yPG5B7Vu7qr7xe5YkwU7b6sgH4e1gdBgfXxzZjERF9xW4esWgrDueNUWsdg55GeU3yA7tZ",
  "key20": "gDsVrU2p6ciVjuBJf49FpVYSXJkxoGus2UmgewJ6r1ucsrhVZdQVBMsnc7ybEG6JJYMCYJt3f7VufpBHRPCpnm6",
  "key21": "39AdRBBfGkzsXaGXcF48iyG5jph3xupNPbhJWHoCDHvj9vDdroNHxJHk8JgPKVSB81cV1HF9C865hTwPhtsehxHH",
  "key22": "63ANTbuy9TZk7pRY1HRfzaHox8ookwxiLogAsQ4JMFwXPW5pTTWUbh2Mm1kFmXsduT9AJtU9WfFeHPa2NBC7AoxJ",
  "key23": "5QmuyZVAqM3nEnHfBthPKJmMpjY8biVLwkhruvtiE3fDCLCgbnoJjQggZzpQYx58wFVksS6v981WvFHJsLSK4uZ4",
  "key24": "2LPqt6bRZfcbdcYXKomenfD8mHHjqevG5VEHGoQPbxrctFM2jVKUbVwcY6AJa7PTv2jUfqSLmPBEkDhP6oJqnxaD",
  "key25": "4qAgacn4V6kvj7Ucuw7sqhHSRuctX1hKmKGTfBcwHDkpggrsG2FewYVBAevSdYnRbWMXXKAGe2vo35SbZo2qbMbB",
  "key26": "3oAoX2En7cLycK4kCuaphBzSkrceUhhQ1iBpHnUWviBUuMyS5bwJ3UBZmraKeJZzt9acpLJsoWcTdsw6iY5tvp5u",
  "key27": "3u61NDPq7jqjGHBfF3JoVwGhuvCLDMem6CVc8u4WDuo6t5qYACHUj49XBicb84NcMkHHath6qiNXVZu4GPzNFmUb"
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
