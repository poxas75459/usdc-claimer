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
    "5iTtuuDD47Lcmqcf9R4NhAoEMZbR8Qjb5i9CM9iNKhpKDzhhn72YnUEVgJ4NwnEB7wpkh9vDAooAquHqYxC8nvN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H7jQg3XQKNhTujMourvTxdauXy5ZrA73aXnn178eDguLFvi4nWcbLFdJhPbNXka5SnLQuky2mEKaR7y1kAtte1d",
  "key1": "dX4TxNZb1MCa6EE3DbbGomEZsGK7Z7ZsuoddJczFhEv6mW7fNK9jgRJ7LinbcfgLq6fpp2RPAa9oUcBerM67Co6",
  "key2": "61d8sDpK4ZyPWcKxUttsSb8fGjxqVjZiN2DEoHt5f3SzP4wd6UtzKeaHBvfnsdnwrtX777mfU867ajVGRAi8KofV",
  "key3": "4CtChYP2jWC5bkaVjPdtbVmGTfoufuCEELZk8ujWs8sMDs2RHQAQ9Ab8YNDEkP6dPtpYRsvfmX1u2omrh5swhP5Q",
  "key4": "4e7qU1F2yBSpZ9GNzfDPcMgd9dzDoDJpMzUcsUM8uC8ekSixgtEAgy28oFDyCdRooesX7bT6xQVUM9qxiCovVKNJ",
  "key5": "m2umf1Y2vGnsXvWkrSxFJDggUQiFadbsWh5mnVJKX6JMdWJ8tMN7wVjotAvPbx1KZD3hyPYFNygLqro4FrWEL7T",
  "key6": "2WxxP3D589AHKoi2GLCN9gXbwR8LePkFtcHjtMx1nqBtEbXyR2HC3DV4gpDTgRmV3WwqCDN4T9G3dJ9RvL24y46u",
  "key7": "okLHjVeVNwRa7meqfRb2ct9TX61C2x7QPunbBzdpKacMd2ihRqMKFzTf43zUHednbvDKaKaNiw9YS4UEvnf5M1S",
  "key8": "4PeYNRMigmJUne81xMRTRWKWPd6xCSKJDhs7oDzDxFR7QvzG8yujiY7xDEvaNMZcKRV512ASer1U7SjW9SiBNtuJ",
  "key9": "9UW5QUJup1uVAgdFByDhMddGo9tJRhV7WzK4CQfGF6CBEYVDAuknYuHeEgL8qP7wBBmnBiBZLe8tDiznAZWqVfj",
  "key10": "4ybEuhdeq5ACqCPZRYN5qcLWyJRKteW8nsVqvJV82GDjooBHDHG7Zkpz2tv2DjwFgMYtsw1GEJcimF8npY1wjGrf",
  "key11": "41KUsZPJe2kJzeaWVrpRQrGjrePLc5K5Ct7JeLxkPHJATwgkVMeCme9jqC4oR5CbY2ajCbvAihjKgbsvzsSvVZZz",
  "key12": "2uoxjpEzcsc6ThuD71ptLwBJMnVfauJ8vV8sGvUAo7wHgE8EkCV6gocYALmYL4bihngW4TVP1oF3ctAw8DvBUbGp",
  "key13": "28ADBPS7cSv7LnmGFzbv4nawiVJzgyeuBDxgtsf8vSUsquubZzs7ZRx9aYiabWaTjNahNsG1vhFizkTEoZNwwGWM",
  "key14": "5cJaFuTb1DJYP7V3PNxmaFzhwDhNBAr43RM1Vh5UBRGgnyA9DfSYKTiZnKUbfXtLAgnHxoiNBvaSxRG7oA6pE58t",
  "key15": "3zkKWzegCEdiatDDafEt3XKgAsz2ATtgDmNi6dWQDriraZDCy3NdRLeXGQJXa8X6uXnFSxLCedjhY5WfzrVV2G1i",
  "key16": "iWfjjkV5VwnBjfyh8aGTW4rm2LtSwaLsf1jSckQ3L6VcbjqhHEeDcy7G3jp1zSPZfUznXCwwkSgAgneHBAHEWs7",
  "key17": "fgK5pXCHLfcMAXGmwuQCnGEsJdFtXGTGR7nAshpcD1m4bsqehHUq6KUmvCPgqL429yq1CwQ9XzS7g625gUXjati",
  "key18": "5ASmkU1BfDnbt3bXgdNzxNkSBzKcyqytBG1FL36HQVBZsQYeUqUNusDQw5kNiiKp8iMCFGqHdeoPRazm2AiQzdpS",
  "key19": "2mpu9S7ZnasSie67GjrwUrTbcLxkou4xfeShYMUJ3V1kwLEG9ftdBk65NKW7VFC2HUGmn6mJYyiZCwshy6CBtHhC",
  "key20": "2NVRnNXjCZbdpo5BREFwY3fGPeBE4ChiyPiuJxjZKmz6AZqQkSH3BDjLYUzDNVi7N7nzc3TcNAkQjtK2yAyuNxKY",
  "key21": "5Evf9ie3k7FzHABaCHiDYyYAdV7jp3qVZZ8r5BnGUNyVuhGL1xJECoZckKr4gJToA9PHRPLzXgnJxawQQeWqEN5K",
  "key22": "4RfvSXrRePWt6BGJEnKqUPYzZofA3baNdetC24a2CUKVhzG9EFQGbfVY4TwW6je1hJRQtR2N4wriUrZkiZXjDPK1",
  "key23": "4uNZnoRvuLnvUNwXMiivScBDMcWrfLF5hKWydH5yDKafcNSK9u5bVkLHsxN1wWL4rr9HXxn9EhsVUW3kW7uqRDhD",
  "key24": "koHcW7aTveKP6qSbxnpe2XULPPPCFA5tHZAqAC1Pqy5uPNsK2xwo6zTXVsqoTT4nifUMm1xbmSEshBvhVt5a5PX",
  "key25": "5QLii5XQLpF3mSgxLBarQtXJzqVk2u8BfHy76iEb8fmkcPpZQ3zCC9Nai3R1izHjC2BR6hQTBaiK3yE3rGbGN92F",
  "key26": "3CcnrcPXr6bc26TcvdjauL8dshutGo3f5y433CmNpFTkKVKg2x9Gbgk2xSDVZxv6HfkJ7KFHPobfx8dJZHnkY85q"
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
