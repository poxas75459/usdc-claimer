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
    "3yuUzTN61fHQSPQDc6UYg9VG6xGy1WuZw64wHrADMrhxXrdwYqNbZBLJY3gWsvEvm9x9As1zM9dZxan48FUwpWFT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UZgzzZv44wfzjSiubgqQ4S1So1voh2PaDcLvxT45oUgYYvqUphEhFr46K5ZamBBwGZyE1WMocuQJus5mhWBbaQu",
  "key1": "3xZXFkasCCUHQWYVyEae22MEqcXGZp4QcRn8mAaVZFpdTDVntWacTgGmQhm6NCVMrJ2uJzwwzJHz1B71WVi3nzDC",
  "key2": "2XFPMfnXCk21mLUqKsSzNRjYA22mtwAkWFCEpbmpuEhCksy6jnVBenoQy1HVHKAT6HzqabbRiiK3w8cryr7R3rf8",
  "key3": "q4CKEZMHPHAZAWWNpea7FZSY7ENFcnJPE7HEgwW37n5ZgqfRV1xuSLHcNg6GRoSkpon8vhbZ4xwbt5Z8sfSWZ6X",
  "key4": "5b66HbgoxzR16eLvSfNiAAbhtpxqu2HVC73pSkNHVrisZsEyBprm2Xn363e2qFKHykATvRJcHjt9qc9A1VG6Qrim",
  "key5": "27PVWFFdZiFobbMqGJjVRp3pafzuMm2sxT9MWWk7DTf1wEWYpfNB7JGsntXGa5uo7zEeaVQTTY33iERmvvqha4zQ",
  "key6": "mBSjUwEovWFizM8xN2KZnQxMQGMRKgngYang8PjMGumWAV82xJxy33LaWbFHUfu7q2Yni1usiZQzvjsvUCJMefK",
  "key7": "55UvPYyd42kPQ3Yv2qsKhgX7E5MAYoCyFrT6hxsvxFpcSVHyjay3qHFNLxYG8qEPATx79nPWSeHMLwjq7DTY4oP9",
  "key8": "4vHGpPgzkjH42sjHxE3NZTotoYyv9HQPa2UpyRYMrGDzhiSUajaQMvsePvFqiwAxgN9HhQtZiX55Lm67KH7P7C5N",
  "key9": "3f93ytC12aUZEuidWP3q4JM11WMrieCyNbqdfZ2qTXkRCy2tfX9WG58oyLhz7q7TNFEuSLqNtZXNfbjWnnhY3DEB",
  "key10": "3RocEpz3HgwVT443KbEB654gBm6wPP9ieaq53SU7tJAkCepUajhmwc9iw6EcaYXR3uM7siFktFmYkw3YwL2oEyNM",
  "key11": "23YYo7idAC369Ynyvwva7dMnT5CKwwncUNPPZLqWQiacJbrWAQG3vAeV1oGRVW477wi3kXHEWcrvb1fzBqXUFDZi",
  "key12": "541BUMEVB7Dfyq6usbUvZ1hYCnonacYwcVanjUHXBmYD31Ry6kbhw3umkG18VMNfUxCH2nHYUxUzkXnR55RthdLQ",
  "key13": "5LbYnZcydiNhMi5viCvaL8DSZrZib9EovQkmy77wuSAS8ZZfV1MEVJrj44JgVgQDcnzMvpfBSxEe7jjJuGUuwDBc",
  "key14": "26cs8onMjb9vCCGMyzTgmK8xLujHdsgCeZd5K7EGdyV7duYWcqRzfNZooRZ1c4bB1fqxSmnzKWTKyAFumyRSkdpA",
  "key15": "2tpAvtucgW87W22PCNFcGXmQndtsrfzJAsHNEYCeZGQjVejUWRweoKqPPy4pPcafPY64MBHFzr7XNcoFM82woHT",
  "key16": "67KoQJCUr7G41PM1dFqzgVRLiBwtHhKpTzk2zXMnxa6ps6R1WJnikxduNL6588uURt359okzpmtQYNYcQcfPim8e",
  "key17": "4WxLA7zLcsYFJcbAvZ1gv71ibCUPFY7KAkCMtaTqhgS79BDWEZJ24d4gfrTMYHaHA4Fh3CHhJdadbQrxdwKiEbqB",
  "key18": "3SL5Dsf7QSZYa7d1m5boCqkHJRKW8Twc4V3N655NaoDQthdCPZs6npWJfdq4iLsQhCpPpQdiqaXAam1SgSUXRd9Z",
  "key19": "4KTez5WQoDPGQ1Sw1BDjx3FqCafnxmGA8SzgKkAS98cgYUbBjssBcbGtWs6iQ4dAw52WZ3HWKigTNp1aotRotQ1o",
  "key20": "cqQNaKqPCDBNw1TTNK6W7VkVpAX6NQoM264n2uV4ixKVT9EuggrQhQLAjo6FWQqLUuKsXWmahQuMU5aVAAZXSWD",
  "key21": "4NpcipHZkuV33bQZaagCiWi5fJSN4VkTaXwdaxbtWG2KgbeGKMm4g6BfhC5QJKCemfRHronm76XVHhLjpgAzaktY",
  "key22": "25CY6iPnEcHDtN5hmrjbfoL9oPj4iV4vUGHcyeXMg6h6NgyB7QCwV1BvLJLdj91JkyGCdBYXLara5BhhigFu5MEU",
  "key23": "4iY9eBNEGreTZRZZLcDACiD3RZbBrX8wBqsmzpeKBJxgPse3p6RtG2sTsqBvwPjsQYw6xxAo7Pft9DXnpqzWH94n",
  "key24": "4pRSCVPxoyeWudtUb6mKcekN7vcuP9B78jaFozo7RbUuL5EmDx2U5H5zmqp1G7BkcF6qQrFQkiqnHvveYXa9QX4S",
  "key25": "4j37t96P2pLKj1TaeGKP9yYZVP2HHV57qYMjTW1s1KeLNvpbp5C4iG7yxgQvBYk6ohAovYoDBKPg7XJvMezYbCuu",
  "key26": "4mE2yAmmsvo1Mjbhwqc9mpNee7Zm6Wi6ytWxHBtk97hH9qyL3G8fB2yc7HUgi9yGrurZBipJgfbV4ceHALT8mvqQ"
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
