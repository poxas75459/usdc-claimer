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
    "5a1bZSSH8uPBWVPGFexMi7ShcPXA4RCLWBX7zywD8jAHjY5xGttbUWu8j5YRSXKGv5fJFTiusybtRGmZwwU5x8tV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rtoE1MDQbykiZs1DiGG7wGdUZf4k7HT2sobwXCngA5KMK46EDqRrFTQrnXmQr43Y4feF9LYQi8q64jSSiWJahK5",
  "key1": "5Eoda6GAWduZL7ZnEHJTXDJxLUZoEy6UxvkJxmdsMRGQKQAYRrrS7HLgbw3ytCmcvcCe9Vo7CpHpipL42VKB2UXB",
  "key2": "654REzaAMK7EPFeWkqXh1c8Y3T96i6eHxY2U52eLKmYNPEbLSd7ZNjhDLhQBfbpRprtT2Q6sZGBjwzCsoVSwLsMS",
  "key3": "3mN2PPQfFPfUTsaZqsM9prRD7QZPJ9VWQS8XxiaBYLE3H2vfYhKhd62m97EHwCJVVQpoG1SmvkttLBC9fkRAGzoV",
  "key4": "4RuG1vpdEFBicxQYrK2Q6FYvuYgg5qqQhQDbEEH1toqysV13Q5EZvrQFFkdsv3UbFNVidVSk5WHUuMx1KPjWUBbP",
  "key5": "QMKkKdDxzq4bA42JcPoTJqNv2gbZSxCb6qaTdzq6x61FaSYviBZSwf7hjMaSNr425pdkRifnm6yJ7Ah8QMuucgf",
  "key6": "4kZiQPrrmzr8GYCTfTwQenjXaxmwfRQLZJY5iBxJ771pWfiNTM3QaxF9sUdsQW25RRNAAaRjZC73dLEZamHW2yQf",
  "key7": "3TyNo1VdkqfCFRNkjATQN81KQy1sWfxLHxmXh7RjmNorsueztijhbNwMWDUyRMftUVn6rGraMAtX4DSojaHK9Ekz",
  "key8": "3BGFxonAdToiPzJcxvF9i33Ez7REYbTbX56CWj2r1fhSZDb4baRhqeU8m7ZyrZ3zQ5Wy9nordpBdot1UpPrVAMQM",
  "key9": "3hDeYMUrTgeMRHC7aNVUkQbbLCJTdNqusLugfPynYWTv3gz3aatBsq1fgPc4Hqe88yeGW1M8uhgF6CgSv1D1YUAD",
  "key10": "2P9mULht8TK6AmaqkGet3guqEE4mtmBj4uDyCtqGX7vJhXLF9bRD6gQ9rKXdiQxcf291nq9HTRra7U8N1RMXRcAn",
  "key11": "2vdarRN66aQfbi7YAapsEg9h69RJhPw2TpsZWkwobARCiKMhh3MKuupXYqUxd2yFHUW7p9LNDdinNVrEKbUrfv3E",
  "key12": "3ZKA5Q21Kn15UAcjUXmiUSWJBUZsv3p1zbwQtV97AH6Ly4LCvaTVA55GKJ9WKXhzQbczcoFqaRGETDk1p91RivsY",
  "key13": "2wwyXojg1ppKaffiYzT1jExk3SQYBrYjh6m83m5APMUtH5EReckoMqBa8QcdMox49eCoDvumDW8vLJfxvP4pLvnt",
  "key14": "4krv6nCTJPVenb9q2pbZ3HhemTLE82FKXadmhJcJ9EFKWPwgEGyNan3YfG1uvhkVGzZBWDojDsWF7uCWMfVC2vTw",
  "key15": "TzwNNojaUP2BZiVtNkNaXVviLp2QA2mhG6j7FZHgzSEcVzxR6wMR8D7vktyrNt6ooFzWwePNm2yem6re6zymaXr",
  "key16": "2MWNxxJiAsbsfJqsPGbnHZmNrsoCcY8XPg2rCbaNkxzwEtgqJpRU4jcejYjXVTtvuF7s5s5YZ3QvFyji9SLDxh5M",
  "key17": "5R2FvePp5Ta3rJurYjpKd8n5iuUrtQBBCcieVYaefnHT869oiNRrfBryytSTHHQAw4HpKvPhYryxQeXUNjS7X7Z9",
  "key18": "37moFmBmJoUPvdKrHV3Q2Ng3ZPnGkAP6nDaKcVYc3UKNQ9ADrTzYrufa28nVGRhMem1aZ28NFRo7wzhrw8ALMLQf",
  "key19": "33z7PK2uLiQ9vCwbqUGkBKBYMuVBjoQs6ciXSjP8SuigZ7aBNQSvphR9Xn2k1kLWh1JSEKiTN8pjU7U2TWAWia74",
  "key20": "99PKLn3aLzuULMxtvxzHAUjCuFkBqCJc1rzYrucxQ9MDqtfjCooAJG2WAC8FxBsooviJX3zkjVshb2kP58TMypT",
  "key21": "2LP5PcA75CXvraWMAsXDSyWHwynk3iXXPWQ3JDUKEVtw5P2h7kgXkBVACATA4TSAaiPpBsuqsALJxEVMsxzGNsKh",
  "key22": "45ayB5EREM7NZYsh5CqLuphEhiCyDLnQiT5ajuGNtYBpeqcperHTKTx96CHHvBwt1bpFYmbShoymFhDJmQ1DrfGj",
  "key23": "2WSSqNWAE8xQq3XRfTdMi5Ai531u3XmByVFdzdU6Y24RxHSF833T6CcYKnNHU2Wy9rkNbVLpBsvUzsaQfX4qnrV5",
  "key24": "4HhSgCN72pfC1HckQWn3H1SrSxwBA3fuWg5KZ4iENQQL3s4eUdc2ATtLsXmHzxzrXseDbqe9HYbuxZTFboQgkPsx",
  "key25": "3GyuenKGsd9wQqLfStE4dEEEhJzB3rHTC8pD6saVfzp86pZu23yMXF9UEJz4LpKKsp5vxnECgACoxHzCeN3xnkwd"
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
