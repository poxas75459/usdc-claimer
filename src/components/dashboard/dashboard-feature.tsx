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
    "5ZYfi2z7jU8D7RdfrUHwWVzhX6pgZo5pyuUGQPNtEzsPkU6CEUohTabxZYF3Sb7atRtaetU6STByoHRqjYhCZ7sN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jfpTm5Sg1uhXWkUikVQ2tXmzDEbPLE96PfJo9En2nUxY9hGoTXwr14ijQUh3Rd2ES9o2KbDMe6FTYgBtPjoFFVs",
  "key1": "3DHfYkRTk3EA3PTgzYdg21Fn7FoFfpCZkS6ETxywLcUqLVP9SVR8oQTKxQQp3ZacRm9dLRm7V864UxLr4CYaCqUj",
  "key2": "4jWApnHUA88kwxpegrE5oGPZdRiGkeHihYY1bB2fMtdEjn2Hf73orHsyFy4dpTJcGTKSCs3xA8DB6L45zPdX8JVg",
  "key3": "4ByXKuPNcAx1FJb8XLGvzNhS9KyqyVhcYZPiKf41rJFd9Cwe7bo685uRZ9wM5vRyTHBUQyP922vJM6ZCATuwvkVc",
  "key4": "e7DmNvDVULy44Q1qLb65HUcsxUvam9wheuhjfWFDGxVx9vzKisAJKdqJtATnX5NW8nMp2xnHDVtyzrqExMtxMWR",
  "key5": "3MfHvnikV3YyZNZj6FYKiioJpQBZxpJMtVkvYbkQ61RHa6QyGBCk9C1gtBUmAVtLrqBZWBkJxZJ9PPgocMQEZs6s",
  "key6": "4nGrkYn23aiD5FbwpRaqYBe691p2XNsvJxvTLyM5L8psqEipZmHTpY4cdi6w3by73nLJj3vQik2TyotXxx2MqhYe",
  "key7": "2qknXnnqq3QEVVfyhV49GPao3wTEQFuDv9YLvQfPscmTZe7tjzxuA2yPH3KGUBZkRRCXkHmbGM7Nhe2WjwgafuKs",
  "key8": "tGEfMpVPAjZi88wrKVVRkrFYGkK7e9VFUn8iFscHZxTgnmGJBumsNqXN8KShuHC5X8oEZBM4cJt7sV5fc6pEatY",
  "key9": "5kvUN9GxQGMxSeh5FGGtVW1nWkY3taZiQisjEKaxibnaJfWaGU8ne7MdWDeMoSLKp1CFKpJFyCDDCYshVvNuxYed",
  "key10": "5ZhGwupUxwAniNMvabrzyEfkrV4SYU3VhwcGsroPiyYJAz5Q8ipb6EBM8dPU9aPiiQfKebqmzfnZfqQWP4pjbtA3",
  "key11": "4nXZVpeRFt2Fu1PtzSuXHbisCDupu2kxeCQpe8AYAjpzRqPPo1BfGqHCRCKMVDLQSBNtzTPjJmgWT71ajedL6Wok",
  "key12": "5zFtDw9h91h8XC7eeYxjwHYrJBx9NKiSxH9fuAsufGXE5BV46UhkTWdSrMCv8dRTUCyuDPCqoNTVeaPhPsUfhEuq",
  "key13": "2sfZDanTyvPtfEZMXeb63c7QGrFJJ1CEgR5wv7PXydd7uVkNUXqL7VmfPP3udnwiJZFmSRccDoaTs65crWtrSzpn",
  "key14": "3PDgc3KHd94EDrHXLRRoMub8EFa8F7MopshCrw3JDvPNdLu66NkLfc47n2AgvwqtToGUD4PBTRtFWXt9d9KQUsy5",
  "key15": "VL1R6TbYGPSbup42ce9AkUzZBUGabiazKaUk1vumepmf1wfHVNr77S2Ga3p322icuTzJnQqcdurPpgYNhaUDEbW",
  "key16": "4PW4QyqZR2MNbhmyDgBNvqurUXEquZsNVAXDQKLWwBomombkZwiy5U22TiiXKQhTSjoZbQTyN3hT71A2GF2nNZPW",
  "key17": "52onUcpeiycGngJ98K4TKg5LStfiE3mz9SNVV6fgeG9QwPxNWNXWpGku5Th5d5Jpa8mCYEtnNEk7tXi1FmnpuWJh",
  "key18": "4o2rqHqdmmSYfHTF7GFfWEjbZUfEtzdMzXfFb3vNXEB6eUcF2CLEpJTXJxgAbkHwKCmJPni3qR2uZxBnW2BdjY4E",
  "key19": "31YuWPFF22VAZqwRJ9T1Ymy8EcENWSt4MhHCrGwojmJQbAGi26AZhUWdJRUW3X8PgyiSTKCmqGigMqbMUrK1DJqW",
  "key20": "5S98cktrXypi2cnRVEjh5he4zn7rXn5wMghAGheFr9WBce1AqcqJMBsjyqr5PZhPNw9YHG5VbCWyNHP6xobhs6ep",
  "key21": "tLHmCDSRGAqvdWBCWxS4Q6L3NYP9Pb8cqErr6aAci9618m6tV38MPaF9QCqAcDQqnSf7x9c1TkXXqRajPfL1Mjz",
  "key22": "2gp1TAPXH3rsiZRR5GRLtkMfscUTFpXppyEhidPKwKed3hCzSb5VsgdhcuWKMYDexwQvHNymc49Amqcovq2cQb9B",
  "key23": "2yTuNJJYfZ6oppBUKiCZxtZCCvYPyLBar4aZmiCjvmzuS8VRMEvJyVFskwXJ3f5mba4m2Eb241rxLvfxSNwzdrFH",
  "key24": "MgzKUNzDhp4sa9QCiDejA6yL8k1TfApvEoNgvyBUeHBXxD9wdXjkJBudnpw3Z53eaKD6orkRew7P8Z4xQ7XsfuK",
  "key25": "5SckAqG8cK6MKoXEMaxUaYToEnTHoqqGWTSjzK87xxqCECouveGL2sALvJAFUjoPw1tY1qPkKBU1c6FBVZ4zuweA"
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
