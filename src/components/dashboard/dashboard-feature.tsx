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
    "3j46bDwy2Jb5S1b5z7yYqXqHY2qiFQBZUPWN4bGnTozYxKMTiPLZpDMhFQdbfuK2xFhmpAsyzrcVsSj6W8tUeQvp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iP18B1rMSTjdZEjCm1odBammVu8KtmfCJDWrHagFEGoRyEsSSbdVzHP9h7qWw49VAXhV4kCqWmBLdcLwX7p44Av",
  "key1": "3Zc6Dgt9c2Rqj4NpKY8wwHwsDk5yAYL7mMSKyHq2Xhpd23amVvwDsTv7TAtuUo95DyddEq8idr56B277zYVKEFrf",
  "key2": "4QfUz4sDqBQyioR6CtKTgS1JLqFBoU1H2sFQKh9YWiEg62v8SDWnXXCZix94nNWDizMDZEz5RH7AG5w1e7og9J7s",
  "key3": "Hz8yv6zBxKbhEMDurSspwdtcmuc96xzKTnHUdh2ZoaS2ycC4vBTv2U3juxEaJT5ECLQJXaUyQD591Sea4BUXeJN",
  "key4": "4gUmSy7C4qepeCh9S6AWcr7r73EaJriyD6xo3kK75zcXbXhC54qugcMtPmv7eb2GcZr91uCXurnpSTKSR8WnkWiJ",
  "key5": "VXakSGFso5j6cR2UQRKc3AnYuW3Jxv6p4PGJ9Y9Arb7W9WRTdFyc9UDTBmhPatuaAGcAofbQGbbtJ29JoBAac3X",
  "key6": "3RRyFQbZchhkg6QLq8J4VSk7jeryf4m8P1A5TPRJ5g4PfUGnhjCLWvvn69NA3xffa86MxnHGppCbKaT6G6TYF2xe",
  "key7": "39H4knK9kTdnMZQCTxrZrHtyByfTSQDjHsRoWRHHW5HMpX7LkX3q2L6nL5TTNvYDyPi1R5j8gsXUBNpqhT1vWdGv",
  "key8": "3FRwSoTN7WMKGhoR3xQomHRMAgowpJ1Fe5QJygNTnN5yvBkZgrVR419eW6eFDU5U7BugMMDKPdHyGG6WnxSuAVQH",
  "key9": "5DhFwoyTtiArbvv47y93GLG2Xn4Vp2aJcDp9SZFL4vNUJr3jnCHePewcPLsV4TVk68hpjpRZRPgktTp3Sg4NFYDq",
  "key10": "GCTrMyQeZzzbAFqyqvxVBWzpa1BDG5acYak65svdRqW91psP1gxh9zsPd46kyvMDvhpra1Wd6s8xmH9UsVsL7eL",
  "key11": "zqesvnLaW2H8db3sq48RYVHfW6gubcQ3EjRNSam3uhhBo7De2dbwFqDUbosSFYn7veC1BKGnaRqcUDnP9nN2DJT",
  "key12": "4PfTwpe3QHnhmCp2pJuJaKNsEjX2FyoGLQFKzkgA9KB5fQg5vL5KEFe9dmTqNHdciXQMKbZj2reQFBkwJg2dETVm",
  "key13": "3Ydrsqma26vdUWcxHtbmiz2GzuYbGSRnTbfGZGoqQ1pxYs75LvAS1c89A6LTbmE4YZiBkTd6LncKSnavBgz7o38q",
  "key14": "4KSBCKFdVdYC9ToKFbpcb5QmSa7EY9i7kGAUGmZW7pwnZDWJXx31itX31MMDRVkDAW3mmPqoGxqYaRhrA8kXNdxj",
  "key15": "4B5xGzDhge58yxjD1AM42AnvCZf1CzmK29j7x32NCkSpxprX76r7x6At1qQZd8acQtCiXpEpEVG8nte4SKmTvwqq",
  "key16": "JCqyffzXRGkeDopyWvsAxbXfWsdYRBC9dAJQKBKxRbcnNVBEBFcQ6vEqMo5q5bETfvPmPBbBuM87Qozr8LkBWXA",
  "key17": "qbxnvaqr8jm8VhnxA9z6FupaJKAWP6zPTWuEkxxE1G3xpseDUs6MZnBJTLzy77N5JaxNQ5e5TBBoaEPizoqRpQs",
  "key18": "5Sn5y9E9BtBwhoeLDfzaGUXCmbCCpue7qAXu3NaYXzXeTqdmT7BuKyfpVRfFxT8F8FCmDFQLUVXxToe7JRasbXUh",
  "key19": "zAhmvKv9cUMUEwE6bL97BRnVn8ubhs54PWN45fg8ydZncJrCppNcDsWt5M1Cges5ni7y8dndc6e3EkuZZyGsm38",
  "key20": "4j4f1sYaZ8Mr21LFxae2ffTXsuDw8csDsyD6z5zJxJRibRNPnBDvN7xSE7xXdkBohG73TadGfzmuhpgbixx829p2",
  "key21": "zcEFiHtFmsWLgQmnXXEFMrWKRfWTpT9fThzkWrAtXxdoUYDrNsNgDcRxxMt5aESbHsdamRc6yFSTnocE8xnLHtN",
  "key22": "34b4bDMP7QEQw8eDbSQ5hEdXWEx3D4vi7UwTdgYZBPDRCtgjX3iTBds2JwajUgqmDAg9gK4tHdKaUVoNvKmC2w1q",
  "key23": "ubBgE1hTezZjXBcWjMTkeRS4NRQQmCUgVTSoNMDWbWYVwWBa7Q9zdJpkvjFEAgDyceU6qWsiTTp2DvrYmU44cKH",
  "key24": "7DCgLSMRsmh9vgdFPABUtVbzFrB2q5Cz7DfCcsXHh2ZGDgjQ6V4BSxWFZmP9eXJ8N9rvvTKgv7T5rZSpL9wydQG",
  "key25": "isERxYTrrDsVw4ZzkRgECaKxbSYRKdxzcCnrYghT23sXAPCxsxuUwaKinQDk8aMhQWeEBWwfNG5bzZ3wn2yXR1a",
  "key26": "2KLFkcM4PJnuyNHoS92eKJDxTPPGxWjhdGw6ScMF1UkdChUCveTvZwvWWbVfXp5isEXaRn2EPQkXoyKhtpLeHcTd",
  "key27": "5zpEsZw7TaUwN8JycReWtW6V2xG5ronYXFUZgTU4wEEh9NdXaqMS9Hxkwq6fmrvqFZY6KgoceQm4EVH4UJ7YsWge",
  "key28": "475oGnk4SJzRHHjnxZtMHGPHwh6AxbdSXhwCfBvJVWQWVP9wLNfaRgYFYDnhihycw2AH59GkxD5V3UdJUypF5HJP",
  "key29": "2i7ryntUmgcyntEqTVDGGAPr5PMg1bbEAZ4pmC4YgvNZi8ffaGsa9LgUy5mhfm6AaMKCHzTWi353rhnSyqNL1CrU",
  "key30": "23E3zL5WiyJEF1JNiVTUE1jmcQDGNTmq9yPAd8j8R8ZW5TnJo5vaLGTCfQKNpr54DihsLvKDTXLL68qMtNjSzM6c",
  "key31": "ycDdzqTUAxZfDi5217Cnb3E3HBptsJbStwXJPVqzW3XiDC5krJjCbrx7etDGcKWLgXksehcSDFknRUQHPhrckxY",
  "key32": "5DFkyJnqoi8Y5WTX3mSDeCv7tJotVZWZC1k1A7riHJB3rf8eFCkfdtaY6iGHubkvn7ZoftiLNWmf6k1oTrccuUQV",
  "key33": "58ZzaKu3Pg8bTRVKzhaeLbQF5Qnu775Fb97Yz5i9KsDizXLwTFLXeWYksGQVr6qE7qMgvDdw7JVHhSWa4e7hfmCM",
  "key34": "5q8YatuM7VjBSjRn2gPZrogtVdrZykBz7TfjEitdesZSSqHno4brVwhb762ZysB1me7B27UB4ex9rGhC2uQsfi3Z",
  "key35": "51uGfqRRnjAjLBBGHTtZUBgq3DQ3c4AWCft9ud6YbErumcwPQ3fBw2pPpHU4ZwhspfhfQVETqeAWfLGtnjpooY66",
  "key36": "sDmpQVA8m5zF48URW4zfGB9hhttUqkC1j9GBM1a25HEAKBBwtKD5e6mB4uNJpxyYrYbjUgsv6ubQKXhkxYhXnPM"
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
