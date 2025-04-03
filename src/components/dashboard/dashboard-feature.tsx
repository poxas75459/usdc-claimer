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
    "QdUpDGkTLkPdVTadaYx6ZVnCoYqYXLLwd2LzJrXkTvijhxYsqPyXMv8zh5iZrC1gGDZH1XCJfuDhJegpAiBgVsn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hRQc8VHZPpz9UmXogUwAh41TmTYP8gSCs6xP9vUmLZn7mVubhMCQHHB3yuAEzDjTyGMbxsYiAaFdwhwrbZNxv3v",
  "key1": "3NvbMMJu7YYTfZhKYWQTxVMipys5nPEDuPN8uwjLwh1j3btfb4mptRGs3bmE8NoixHTRnsTcwyYwXjKSMS3kqyd1",
  "key2": "tfynYQMUzwDjRaKsL3DYAwptPuc6sEfHxwYABRhAzRiTWBcL7fJELUvBe6SA2MTPVoDca8woGiXn33iDJTvNFwc",
  "key3": "sZ49FLfrBkcHrS6MRREnQJTdKVgPHgc91FpsPrLWfwqTe9EZUP4JJGSypKzX1ssDsektMk6QSadct2kob2ur1jQ",
  "key4": "Hj75YLDutwhwWvQMuiRCE3SKRW9Q79SMkr7NeuC72btp2RckNuYxGu7ueXXfc27MVcy3cdiS1Yx5nCMfv3RAyiS",
  "key5": "Yg13okRw5nxz4REqraRjFwJcwKsjKq2qch7yyzVczYZXB3Y2HW46dhqRFCNJ8D72RExt4VKe1wMpNeSupmqtCAc",
  "key6": "DZqzX8t6YbGkttXtEBHNMtMNF6JniQadpx1VHR6wDDeHHcZX63o4DmetzXDUFSoxLHEDV1hectVezokStWF2jT3",
  "key7": "4NL89yaaHPWtYt1EWytvha6CBh4wmn2cvDDvUE5p9SHHjmfJFHSsymLRxyy5wJU7ayr7XtCD3NVgkM1jHFU6Qys2",
  "key8": "6gTAw2udUuA4qFoMQeu4NGnB7Qx9QiKvhaXy74gxUh21mp6JYYiSkPZzJnLJz1bCQRC4tGVVTspghXrihkPwizQ",
  "key9": "4fbv6pf6bXCAXuJZa3zEWNNXRGeRifAEQqKKmgQfQYEdQQ2YZs7dcLwyJrwNyTqLqMrhtv7DKCDQXcLVK2ZFzVWG",
  "key10": "4eoLuwZY59B1BmWasENkESmPrA6qd6BeM3U64dY2ZSFYusM5mwP5LcqNpGipV4tWdkiFrEZxyDWgKwkkRS1mEiXw",
  "key11": "3BNJEhZV8bQTgJiPsnMvK29s8YgyWDgi2MdvuayCr7aWk7P4ePe5hs2rtigmgG4fkqgVyfSfYXqcEUSjyf6YJxTQ",
  "key12": "3vptcvZ2RPeG4i885BBXaZ9sBaHy3jUihoKgiWg5HJGj7gr9Tmx2ZBLZzd1qcmYxdoQcrfn2GG6RkCEbEMNzNgz1",
  "key13": "3qZbsLdNkuPaq5NVbBBpP5EpYcj7pAKhASvjoTqTfejCNrgFSmZegbFDwxif5yaqxhAmDtEmE2J75drCS4SidDE1",
  "key14": "ScQ6fgqQoNrJhoRWCu9enMpoPtCHS5Y35YV3YaytCY6whJaoRbofbkJKWffFRqq8HmhK83mpuRSWpmSLerpBMDu",
  "key15": "2VnrPxoFQeaEv8apw8bXJPyz8frSGDBeBD4PycP23o4TnwgHKRbGSVVhZxMdc2q7ES5DJaA5kfVFC91neqeSyMjS",
  "key16": "5HMhYU14PGohKR1iUQTk1EGm5G7yqi1huHw3vLBwk6GUgZCxezBk4RVaWLqMfPHzcDqZGdYwUw6MwpyP3mGgJsbM",
  "key17": "nEyiwWCnaK1hK3zpysYE21Fyfmg52u138FHEtey9weLkNufbCfChn6rJqaJJzCqxWP86FNsTUQ4yzzWxnHLmPAU",
  "key18": "HCoHh4uWFZSrj8wRuBRD1x9cQEDK3CucR9cmQYxhEjrHin2zsiYAVRSp43AguEkkz4aoox1HiHgp5dtiPkxwcm9",
  "key19": "4H8rrnTSLm5W4hAd8wM2vpaxdgK56dXwWvdSMGJH7AatEMXgANHhnnvzUzd4Q723s9sNoqZjgv8MJb8VcAs5z4fW",
  "key20": "4Fk57bnL6jb3obqVkrrk1d46bt9PzM959peDzwt7b5qQQEmTrjYbhc2d3SSGdxq4vsoRCozem8SwPvDN1eyya64K",
  "key21": "5uWSaxurgsc9aAdPBVF5J4D5bi9eDbdVUNcZwkJrpeS5vuhtwRgoJ2SDVSPYV5WqNpPR54UTwkoiQjN8jgD117UX",
  "key22": "5qE1KS5b55L8J78HnnGXtCNkn7DUXFBYxSccpgXaban4KgvWq99p6PGfai9CaEjfrYUbmzFpFzhXddDfvbyreZCE",
  "key23": "3C1uX2s1z7RZsQyNKV7SndBJVhCSBuiL8zeYQssDXDUiN4APST8eu56AEaeqARzaMaDUoaPgnB9MdKcFBDHFRrzr",
  "key24": "2s2nQ5DAA2RPJ5Tk1TdBJQZziQqWTkPDi6GGaafpZKsVLV2Cus4kKvjD3znSjtJYBjbjE1tuCWFk9m2YNF6ngRzp"
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
