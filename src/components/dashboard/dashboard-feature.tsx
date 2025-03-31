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
    "3C6mqSua6xLG6HFBxGYQstyLHXDsGKpbyVtSftarSSGYy2oF3VR2oXGPHaXBiWuzvmbJDrEDkWVZ9ytg2bbK1fCk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "339ykrBLRmmNbYXD1zFBjbmi7SCM3FuJrdb5CiLwXmuU9F4kc56PYf5NKvBdWFLXJHP31apbnuWSxuXzg2HAhNHU",
  "key1": "64pN4gB2uahibffgkQZetwNXwzdsbfWzJb1NqqBHhxTGYPcvPFeqBUsMzEkVEBhUjbbp16yisgAvAUUwuCLxrBS4",
  "key2": "sWA98FttQKxHq4CP3RYfzD7wcbPFGcdLoMR1YytK6kezGvVo85Sasj2UjfpJGfvYTxN1CS1SALHYcP84QibvbgX",
  "key3": "67UeMfSiYsbq7oFBD4MyKGKv9xbcmw9zvZxwHv66ymd8PmT5dC19E82DkJePBXTC4AnMtUHPkzzoiPH9UAFG2VHD",
  "key4": "5fHte9zmSAwtmLKLmPHT2wUGX7wvU3xGEQCRZkHUEmB2Tq6C4cjXkcBbFYHggdbsq7ntiqq68YMV3RqmE4r6KWTg",
  "key5": "3fsRM9DbGiC36mvy46VGMmVMrqg4ku8XCnUoHbviQ4gozmCopabTi3jL7NR3rKUEKSmNJXmWormszLYjUeqhe3hj",
  "key6": "4pBjMW5vtdXBi2Q65BXhVCu8X77VXNs7EWoNg7DfN57tsUx2ZjPptipHYRQqpx5ZKsgtMahKo7McF1xgqfJrDYnn",
  "key7": "5Pca2PVu7MpBL627R65QL8GAEqfg3NqXdKZ9oupPoq9o97UEoUcGn636RcmKSpnoru6fwFWmjemExgMmZ4x77gb4",
  "key8": "3vvbBrhJ1S9vXD12zEWHNC2nCTBoCRy9XHxsDi5oABhGK7hJ73cN8wU5tUF5ujdEMStAMU9ArK1jvNjqKfNESmZR",
  "key9": "WE254dS1DmsU7REuBt6HdJqKNgz5xhGx9mLMD3cn6Y9hxtTPzVSUvVpWhhiy5MdZ5UPneBCsJ6GkTsF8CapZyaz",
  "key10": "9Fq7ebeG5k58e8osJdnG7g3MGg4sPqrd8Yo2pCg1pwxHS9DnDMn3hQnJ7eTEHdvnh1oxgWfYA7eRbjCtzd1vVTY",
  "key11": "3SdxEzEMHm2SSAxtUyeTroS6UBcHDS8qQcAXBziLwMT6D7cBQnVeXufMihymBZVqzCmHm7eemunhYTTZmuiSCx5L",
  "key12": "4hN5LubP4PUwEERBgsnVLzMeHwSEzB8iM3X3SZf75fZn9NmfDXiGLNuk6UPwGuhdYTHnZYTBjL2gkJ2ZYJ8Zp4Yy",
  "key13": "4KBR7szxCqjPA3Ena3wADAB6LVb1vki5EEfisfmGmC4p7HrvPxswNvN8o6cfXQCU8rWoLCVjxib4guCgf8gBtnim",
  "key14": "56MpCvQmj86YWybSrqgZS6PtqmVSj4A1BXREnu944dAKb6KZBYJVjfFr44ottZ22F4BwrKXKWhKczGmKsfwrt76A",
  "key15": "4yWGfxdETKVLwqD6zTYiQ5JyQG2zaMbXoUxzy5KNLWLTSCxXk2cPxbtJ3E9xNZBV1zcmzPdvuT2drchFc6GHSMVe",
  "key16": "22MdB3VwC1Ay34JATNRKhywMks599oX9twv13FSaiVAsm9DCStoLDpa9rK85yqob8tzcA3JmJ6od9nGtKNwunzTT",
  "key17": "5jSWTZVFCyLCV6zcAQtByn4Dyx3yKtQSQq5YjfX3mLdP1Kbx9EWLS8djJnu2S1aZNeLYUZXngtcqCQYtpMP4aJ3v",
  "key18": "7UBhPRZFD9YFp78F8b2iNcRm5fNcmUMAfKMkjLsFYXP14JcpvUxBMoykizZ5kdbGnpzZorEpJHKhJzRLSjpzTEJ",
  "key19": "3btuePoiRVL31hyHvcGdWmD7B1XLBXRniu9nH3jBCCg7b3BEPgYc3eGimRy1whxDJDtLU33pFcDR5P48D1iC892w",
  "key20": "53iczSBdhFs1aTku2bj85j1F9fvv4whApNyDs7eUZ4G4BLdUUhYfNARnA7jUw3HCQiVV1AYL9hmSUAgR53Fyiba2",
  "key21": "3j3AtjR4vtyJL8B7Qd3t93rFZvMCfwsTdbchzn2UuLEJ8coHdibjM3C5o7xgsJWDv1kgA3naqFfcyrh7BERR8bz4",
  "key22": "63nCNjLFMr1d1MCA8uVmGeYLw2TL6RPLy2fwYZnco2Bp6QNQ2sqFT5yhs4B2zhqw3hLBqSY7YbTidvKromhf641d",
  "key23": "34DwQv9RYiDvEnzJPmoLdn7fcbEaMGNsmVxA8RCyM452xYjDBYagLSGKpybNjQr76GpiS6YXRdNsEWPiaWU7viqe",
  "key24": "4j8FsB5haTmt7DbCnAkvHUZHvpQMwSVxyQJ1DWH7sUsrKqteAaDxHG8vxUqvJAcuymN4nQS5gjCwvdjBGWLhve8B",
  "key25": "3v2UZYiipyBZnWvPwoEGvajUeEorbQW6V5XcWj7rNnTWRDBezyG5iMMc1iUpZBiS9nDRQojGyFFod3vs2eR82JPQ",
  "key26": "4wp6iufiTcvokKDpYAD7XtDSazPn6yLFPxU7NDuYwbtzdBmzqvwTwn7DJVRk2fdFShwXpsqJpBgSGbC8LSTcrmD2",
  "key27": "5rCcxdc9rMiyf94wjKYYhjsXqEjc1nEh2mmweh2EqmBSiVVLaEiLBVcHEn8aTsHCrjW9cDCGBNJXzthxfztV5iLj",
  "key28": "5AEySUA4ZPKZBYnHk6QMJqrbpDPkbLVxD3siyhLvhvQwycC7rvA4zxEjvdBnMEuf7SxfqETZ4ScPjkkyUe65hkVk",
  "key29": "2PGu7daV1j2cB8UAcZBJPUUPstsm2P2TVxUQ9DFVPgw3i38DeZS88d4nZYW97SoR137kCcNqH7Bb1eH39HpTTAL1",
  "key30": "2cU81EgNowtHUhRiPcne931ETmW824ytz1RPj1poizaz63gieNiAkneBoupbdCNpbXJorp99jtbK9K7H4beqwHqo",
  "key31": "3eGMLgYZpgmzt42aCP3q87AETujFX1DrgwcdZ6fJDH2xtjcNKg8LnjowYiRLVb8M8TGa4FhSyAYgiQS4kwxFTm1h",
  "key32": "2BT8u1ZZpkMXvw3cNy4KHg4gpZM8vkmcR9ZKp9pJqTvKWw6bCke4WQo6ZJfVfX6WTt3K1A5f6wbAYgA9thKFJo2j",
  "key33": "5Vi7Dyb4DU2aa8H362rmHbhq4NhxjNcD7pFwECHTD2pFZpbwBPotwk9qo5GTUCBfDzGUoFMAaUprap6aQbezBFAB",
  "key34": "3dFykfNSJsdNxPgWrEkFuwtnjK3qb26zWVBgkxA1NTuLbfoyd4iDscrsx5dPdv5nMToiKGPPDmyUu36cXWMqshWN",
  "key35": "5cqwhM8qQzLBXde5YbTEmbjYtpzaYRNSVCqE6H6Ntm4DHkSB2rc1zEXKvk4kQ2zSJWaVCeBzAm1uiUTS7hg83bm9",
  "key36": "3J18RUW5ZQN4Vso8bDFQSptZXAcKxNdrG8BZHgjaYYTPaq61N4tsmn49oGuosT996hALoAtoaJujt5Hjt2S2m7kK",
  "key37": "U9g9NuV4EZinwcAMSkoCn36pzvHQH2v5svL9KC43V8j971tVX19h8VGzwmYyAcpbpnBwwifqsMe6yAyuhGG57vV",
  "key38": "3HYcmjZqnGk3URQKHunB6jfg1PUC8kKxLRwxLK3pLPXKpG5ow5pV4LwRUCEvPfXMvxdbwwcVB8G46djgNfwn3KuW",
  "key39": "4nZvTog6A2S5arRPj9KwP65qQsoQoA2rmurZAbu9WvZKbHHwwkNgH2sDiHHahdjUYpfsvKqeJnqdBe286uVeZfue",
  "key40": "4QvQNLHY13eewwELybM66ofbCcf61eKry4Xk2W9DMbTuAHjDZdWmZLrroE2cfJ3zUpsQjJtV9TNRHBGCvpNmbsMN",
  "key41": "5uR7HSq7k2LJwurmaki2JZd9Bq4oKTevw4bbHPq2EwB9Z4hrwWeG94zFx8ceXXTXQEaibpmoyVd1gSHeCgGmqASf",
  "key42": "QBKqw2vwkYLhmV9xw978UZcYyKrgEyZBq8LUEEVSP9ugedkfgGtLGUX38QoRhdgtmfbkaqbMZt9NW97x3DEUV8M",
  "key43": "2q3K7bMMfKix1B1WYBNfwosJt7RWm4k7B5ZjoqTrSYNRS14oan4w1QL1nUp8xVmbQSBoNhvDjhdxHgnMyiHNnsS2",
  "key44": "2iyhNfszQpQNjpzYUYDrQLiaKHuDRA6wepgiLapgFCbJCwvTSxtVkHxwmZJFNppfuUHneA7tLjvqVTYuqLKLZYs5"
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
