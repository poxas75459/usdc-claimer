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
    "Wd3VipZrKNnMu4tm8T2DvoYZLWXoGHXaGi3DkPiJK3CXvTxeW9AkaMiCjJpEjVGzm2vERVkmA4tT6Q1xZTb7Ntu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QNaFxLZhHmNwP31Bxz6qapqbHh1cB3SFKSyzzt17FPazmDaraAXjxBo4WCfiAkxZF4wzFxfu8XuDrTzRyphQBAK",
  "key1": "61A2ih5Q6vSXLhttTU5Wk5v5hfxKcPUMTJs9brdKWnG6hDrFryYztU611QzwEQ9gfUr9vK611NyY3wzpswZaUCcb",
  "key2": "4wQRwF1FbFzQtuk8sJHu6T9V94UpSYjJRMvcBrnqe9si7aHcZBTbSnNu2bCxBKMSY1NGzegeAQKYY5Cknjq1ubdd",
  "key3": "45HgtbbvTPER56t1jdy5vVC6bBLf9ks7CgXyzxsFq4gZNuqv9K2tdnjNrDrTCVL2DDFcHNoojphcCuCrHz3G1KPa",
  "key4": "5mVEJQQPGCD2WkYu7vrAJYEPZp5tXv5yEL4cc98hL1mJ2x7ceKkxYA4StEUxBf3u3K3pMhYmdpHrxsYcyQou6v8t",
  "key5": "4jjX7NEcj16qR9oVXnY7uJTt9NkLDrFwhUx7jAS7hmbfg8MiwVVvmCMjMouPPZnfkbsWdym6pqLC2WvLfzY2vCfw",
  "key6": "RUjejVTcBhVHeCA9NCkvYeHqkUa5id3HHiwGFzG1upTeyqP5d5i7ZZ7P2AVukYfJFLzPkk2Le2C2HW6HNaWKVm5",
  "key7": "3T1yBHxENNMDE9WYVAs7d9PsVEr4bFUqAzkpzaJGt11tjCub22f3WWKnH6nLspgP6VDLm66wHKxmD5srYbUfWYt9",
  "key8": "4Tf6SszKdouwk5CcZvCcPgYEkNYxeQ7rssZskd1RXVQBv9MWbkpSfBKbe7fYazNrvHir9gtZ3LEzKXL5A7tfnP36",
  "key9": "pR17RuP8DCtpY7m5RGrb8Q7H31M5iD2J8rYgPjzjTkoBGQHmS7WSkSvvBgaxxiJs9zQtCF1cpw1SKAugormze6w",
  "key10": "YfWrZ2EU5BpgXRv5fMr7tQKpz3gwyR7NdZSApZrNdTWWJaeddDpzbeKgp9tBWJWUhSg61nPB53WrGXegQ722emB",
  "key11": "4HdNqLAqKxkGd8L1ugaqVV7XAH8t6z6PH8Y1AWCyDyrfcXNGVvuXwQr2fBT7A9NyHmyJ2aoogDHgjXRFhjwpzPgL",
  "key12": "WZmxG9yv9p8wqsCJUPJjSdVk9G3tZSjwk2ZTPVrRHpUtBFgd3UL3pk9JLkJbxuYfedUmZbg2V9xn2HLzuUqhxAJ",
  "key13": "4tfPxXJ5nsXLJRCFcWKxM5WEujc9jGBWWnqVxQ5VpnHKJJS8FwtfxCoFb5aHcvbMYCwjJ5WqxjwD6uSoesxaMDv5",
  "key14": "5LNNZwoC2JGtU2hyfqLfG48bDC9cQFn8v52Lshapc23MKqFDeXAzYqTxPPePpsQ2dy9JnMnSt6YuArYnRLc6A1Qz",
  "key15": "4YaY1uEmw7Drqw9XJrW45sVGqDobvwU9qiWkCdYdfZQzGpio3LT7XkHNRWaKtR9ajbBu39c1k6kLEqxqciKrs74V",
  "key16": "1784UX2mJJovjs6xtoh1Lw7cnqqctcboq8nN2jYN77z8TBVy28v571X7oqkak76aUkUtmbt33nLGQaH65mWG5Qx",
  "key17": "59A5aVbHeK2ymFsLENNzFUmW47BYnw552d7VU85dxy91ams1cHhiM7mnhZmSsuUGGpgrkGnR5PX2GVxBSUvD6Zne",
  "key18": "3Ximh636je42LfkfUCJKx3rwHRMAMdfWLVQSbiT2FZV692NV35CGotkcdyBAJ9sbc6LbF5RzjkKXWniF7TM5fAbW",
  "key19": "5NXNgaQTto5iCKbJGK4pGTo1EbNrWiSivw7ViZ4WstZ9VHAd1DqxCWMGZHniLwbRVBZF3hgSdMqGS9p2h1hK7z9J",
  "key20": "2h6buRmXNJsgjKxUgSRLFYm1c6yJQCbtVtvwgsyjZnQhshmiuPkL1uYkBM7opqjyupxZXS5XtczdsEquvJCUoFyJ",
  "key21": "52X4n5M2wjyPrUAN1YPVsco9KvjhwjY43XgehM6ecLrTEmRjVn3YPx96VSpgZMHhT75VLia9ERnYJDJ18JazxVD8",
  "key22": "2sEFYA56BEUoL2TmazvjtZaGng28kgMmno2CKTGRp6h1XKwfWwW9zDXyiwHmcVcCq4aKvuCtMCKsw71S6YdBn7Ez",
  "key23": "4h9brKQ4sN2oegu6R6UrmSAvyfTBSLEDsc6539ESbac9SesG1kRPaJu99J4qbWXCVjt6obrxtmKU4FJpAn2kPMm4",
  "key24": "3ewTwXNvEnB9yHjR57HiEEQ35SUdwZehf72Uj4BHL9kcP27sLGrV8yA4sQxSfqeQcwTqmXZ9DLyAx5kxrgX2BQbt",
  "key25": "4vwozxyCwXWckQ2yQazEsaqCiVjxGCWcKzngNEybYpPSG13R8PAmf1p7v1bjZG5qine3SpcQNUQWornTXDb8EUYQ"
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
