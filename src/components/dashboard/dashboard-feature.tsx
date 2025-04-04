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
    "5SZj1g3gDN4AEeWj7NK543dsn5H86CgpZGvrQsJn7aQW4AcmDZXyKmWfuSQgDiM4mmBypkFWMvxyAVnz5Di9Q6sx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FGu4zTwhb17ambWzWCZS6jpnA5MQP31tWYyE1mnnh4UA94GvS2biQkaYAuLn9bYfjpMqqKXsQKFcE2ryuFBaCQT",
  "key1": "3Rzg7Db1WKjUwFne9BYoZYPDJHPyEjPVrKdzg1aCGRyVZbgZLqedZN1Qd4AqEUTNVJrgSAP3rX6rN2ADy75VCMNJ",
  "key2": "3KABhgVPMkaQbk8hHdgsXLS8a8By1DSP32gKw5avi9q4C9mewwPciaXJsRXdp9dfMjXvAX6KEabyF5aXRw4oM5ZW",
  "key3": "3opKYJSouPYCCyZmLTCJ3isNmT3e8tYocDLwpJHMQSb8Qq9QTocdfutDevCv5PsrT1NfQa5WwTBFoMKMZrqkhDam",
  "key4": "2KPHet1zrc1yYWcjEkSDpi5fKeMoU38K5eVnQafV7XdUExuVkqfn3ErSMNMAEjP3KXBNATxEhbQn59wrFkcopi1s",
  "key5": "ajPLUyMS8vaVqq5A2B7YYs8Gc1THBEygojbQJtny2gnJ9okKbXoqB6cdovihSEHoV77XS2cfYG9HGrj5rYkTUyn",
  "key6": "44sJZUT6MurYKuGXPSwwwgNxWLySF4JJbcgwGNewqiZeK5JjnRZ8msbtv3LQP3M1wAQQe1pVR4tzj9j5LnWryDEM",
  "key7": "3sTXU8z73tcktQVbiSMC7BEoYHLY3PHCH7cixo7JUsBmGBPzHbearAuxwsD3FU45aoc7kq2GxfnBt1UoXqw65wGv",
  "key8": "5fynmKfWj4N3WaJHBpeuzEr82QMjC4ep2E9hhsjMPax9m9qRG2LbLTZdMsdvtK33irNYRptnANkAstun6LdnAaAq",
  "key9": "4eJhgG5kyAY5MwbdtF73SGMks3h3LCqDywDKJW5eKv9pq643niSdQxunR4JaRRyjnbHxbJgvxxxGqU2GHQxUGvcy",
  "key10": "2M2GLQoX8zTG3v1WLnusqZZ53Mx1HLrkPvfMvZJMtm2JwfYzXPjBPe3mX65eqq62LRdMKnpFunapd6TGnkkTS8MQ",
  "key11": "bdWKa4UtjqQWWe4x6CyRgbKHMhQGMnQXydhFZsXtCiw9H6Tv2J1aRYREGykrVZgjgaWDgr1RgbFw785gh7NSLGT",
  "key12": "4Ydqvtb1759323M21x6xLmb8CBHQhNFjqyBZo5hJTQHXxB5oJVoR7Qa1X7tmyccQXo4n5f14bRqARoYkPPz1Z9FF",
  "key13": "4UBft4XRmo5dAfwWdnSftUQGZFePo8zbcb3zyuYtGZUVRcUS6yUeUx36ZMoz5gy7WQVH5pPmNKiqj6A9hGMY4AYu",
  "key14": "5PucYEBYZKSooLm2dNnZG2KFZZoXGRaffo1yJGUJvK2xE5FdoKmoPAN3ksXHCJMmNMwwyNZ3QDFrXjKpWtQJAbuM",
  "key15": "43NciczSEBaGGLfeTUBjusP2K123vZv5YbqFuQx2tbrnkj56BLkHPFcTbartvgkgiZQ2mGYbNc3jozcxtFoShk9r",
  "key16": "3i9pyW4RRxY5bH77MNitvjNcXLBXb6QTvk9Yu2w1DJZK5zyRjxjzBHBMbMs8JMyoNthZP4CY8sXnQ4soT34WBkqz",
  "key17": "4Z5gHoBmJYVDEa7WzEfJpqrdKBbfSvu5ipJ9UQVZSmkCmEvxMzbqW2QeRJQ9nLE8ZGs7CvShSrtnSUNKSHyiDyQN",
  "key18": "21Q5jHsSZVmEjjwdPSkyTavGS4wErQKKBxdjQiRp42rqtGH3zaPaVvyqqk1pLmTpQFbE18ANfdRTuyPEN3JTkfA6",
  "key19": "2nfX7j52tNeiKCPTo1wuvkKH1HZgLLP5Zk5DpDQJyE6qVnSJo8HDnpoZLYGa4szrXy13MaYKwXr9yqRnjvxkPf1t",
  "key20": "4zA7FvSZfD6n8j65gHnjzJJxNcAYe6DLzPk7yFkokbq6gVxnXKD4asuRWCNkrg1ZyZJyztzqnCpNiFKmNRymJ51b",
  "key21": "2rLCTyfzMG4MqXp3MtWuwoQ4joQYhRDvX6hh2rcpHQpJVcipTv5TKo96E9Fnc26PNxRhxM5831VnZsWsSdAzi6wT",
  "key22": "5FTSHsWJNUw1sWK6VDH1RbQ6XrVqBkKvXD9PFcxNhdTEHowVV3gyuC3VuX9MBBkUrtyG3Lx8H63xZ5mDCG6Ff1r6",
  "key23": "3ZnRUG6QWCPvnFof97gHbNKVEQgpEP7uPvQPrr18epyt2Nf6sf3JWajGtQeWsxkF9RtYQiUGvEwhEsvTF9H7WWyG",
  "key24": "2nkp533LJuzERFDdZARoAXzYTHWSmffiHAYBoomxMNATS1dd2T1LxKwipyENsGLXg8fcWeuhchHzSHJAw4LweCAs",
  "key25": "5q8dB3nsgKsokGzh8xG7UGeiWNwS164xihWAzZzFcvLpSF1gVdkbuHyXutGrkXcoCbT1VxeLD9Nj15dE3JshvsCB"
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
