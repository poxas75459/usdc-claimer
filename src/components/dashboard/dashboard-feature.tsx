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
    "BpnJbK37HugxofwWn8QwJiZoCJE4iUbBRhfm8CkY2tr6K1BCXPGtt1YbJd9TPubBRwfTAF6CKbKgMjK95AbGghK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CQFUbwtRehhf6Tg3frYzTHcg5AaCfh4psUG8jonSL6qpwbtdWfewGQUvx6KXowYBmSGEKzX6LoptttT9svbFoTJ",
  "key1": "2rnB6aAEExE7rbSvxggUqPLXmZseeTmv8wXakerYC8FN8RFK6A2jJ1BEDRU5cEfwfXfdG9G71BYxjiaXDqCzfZDe",
  "key2": "ZnJgwP5nRN1JM1RMyYsKN6kctVy1bLVmuf4zZpBxwisV2Lxj4kboXTqU29eRL5DET5Pk8ggtkcpBKtPMF1XQ636",
  "key3": "5VcAuahe6b3cyQdtQCC5EwySbRw44tRVpjqhKa6ex2tNWtPhdAartEii6b25J3NPXL4gMyE21WDWR75yHD7esKZ",
  "key4": "JUK6GaWMjLzKWW9MFzwhGjy2AFLbfTa3GdSCReLnANfhoJnnMyD8LcyaTmYDou1jMWDRJYsNqb2AGWjunL938Qj",
  "key5": "3x1UQo22ui1aRJFEF4GsCgSE8hvPjJwTRvAWTMqBZAYJ7voxhRu6j8qiwc2GatgEfJopat26DKR8ZQ6XvuvF4cXT",
  "key6": "2uHpnHrEc2WgYsyMXcz5YBtnahPg8bSdStQt7FJU8rMWa8CCX66Z23McR97dyRdndYRea3sYUzggscQeMAjPYxnt",
  "key7": "6g7vbGQtewJhe86u3piydTBMvW9Gz68svD1L9cMcPCxJVb2TgafqSvr2EVB22sX7DEjiXMycv9D9AQUHmzdceGR",
  "key8": "2qgYqXVnaYabjb3tZrDFQtaMoo2Ar2GA6tdQDZSQjcRndmjzgmz225esm7dPyfBozgKBCr8jDf1q4UaE34a7TruB",
  "key9": "54pZq8jM3eoV8eM3KeEEv1TywzQX1nxM93u4KffUY5NPs3dvpQJzCy6oMyPuGxr1ELyacFMRfkcC78nmBj7Xdy3P",
  "key10": "4QmsPJrC46aMjNGptbcZUGyJf4Xo2B3zPbMtAw5Bi5zkxe57ZJK4dCMYBcASb6d7JaNXS7tEV2ZEGXJjNAsNdAHZ",
  "key11": "3Nzxf32RbAsUaKFjQ75NwqHkdxCLDKbHHPzzoD4FtsVhw3kAjJENYWDiiyVKvcKgp7Co37em5onwf5hqNadckrmv",
  "key12": "BSXhMw6vKvvpnMLULdZuj1o9nDRddmFi7D4GCPPTTwowfCWdW7SG7yWKW1M8wcGDmSY4k78z5idfd3jUBG9HAHs",
  "key13": "5yZJhRW8RJQ8ZyBvmsMGoepGjryaT5eKahATu5ckcPg1ADyk233Eu7SRDr7AnLv8dvKAXBQMjSEjqLiExsBsRrP4",
  "key14": "2m3gs3UmCwNppCyBJHSwUB4iWrLXjxEd8WCCWTjxrcU6es3vkHT7KBB6fZiC7JsTCFMNzpKr1vYqAtmNF93EA8gD",
  "key15": "3ATSZAbLmSjRzJ1DsiTUhzRJf1dY3vxqEpjTi5AX7iAMqJZMJBXNce8PLq2WnPhEtvnsAn1k3GCFoXVPo6KBJ74a",
  "key16": "3jxJKTmB2py9LzDmHvHdCwwgx5cXRmXGCeq199kA436uBQk4Qtnb3s6m6EA12M1TdMYv6KEgoYtcseQxHyi5sANY",
  "key17": "32rj47a6CxEJp8NFp96zmJq9RH3njDKn4yPgWYd6ymeioXr1cwsuH4BUkTDcU3RCvhKSxkqwzgCF9AKqjukno247",
  "key18": "2GdUFMheKouoK7qNau6qezKgz2Pvt6nnW88r8gZ6CFLwF2weY9KvH7X7MavYtYkQLhPfkvzBzzy4x7S581SftVk6",
  "key19": "4MbZKqRfPVnMsGbEm4BfwD3KHoJXxes9GAnZyPrgj2xrevtTjUgQwYrd5FuZHSL14d5odHYk2pxWaXE9r98o5E58",
  "key20": "8Fu9Hgc5t6oBVCDURjHh2qdgCt4UpRb5EUFBKfY6tJhKZqVG1HGadnuTuGEsCofwWnAS2m1UDdCNjtHpfVHup52",
  "key21": "638dKvNwnfQZYJFLKSyr8T7kSKBnoLXTRox2ikFcP33vweyzgU7aSYV9AB7bQ9CkARND8NwsAn8QDLXU1USwgJWh",
  "key22": "3i7GxQ5SNxxnsVxJcfgs36GqVhJR7cqSymukgsqLp3RGD9NDAbtrzn6W7wCD9PTa5gdua2RSCzpDYbUHdPuTFy8b",
  "key23": "3kF4F6h7h18agqisg3T8bvDDyx7TWQ9L5R77T1ryx7h7FLLu3aEJTDsCzAkgoEP77X95z2ZHSphHxKAtS8mHBJ6y",
  "key24": "3gnMn3a17kvwBn9viUYAsrupL8BSnR9y89hi6kj67BECnnHLVvT8PSEJXLizfhGAtH48Xuss9jPHcQp9zotrLVne",
  "key25": "5c4hL6GxGRFURCdSfQ6X1jZyXKpK2bRiQDmeYcd8zvuMr3Qt3REjtpatKQYyBPTmAaYysgiRLm7pT5FrtwwpMv5S",
  "key26": "1XBkVaA46tKQdHz6dQa5H9y7wvWPwqMwpqWX1bj4dhNiYVAqs6LmUFJe5nqn8NrbQpRZUKU1mSdJcLKcJza1efK",
  "key27": "2KTGyLnzQH8MpwTSUrRWfrKpnXU2fMtq6hnHcwmj2Zct9JAQp2yTzmCBDA4qHfTu4wY9zgzsRGk2LxqsihrxUiB7"
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
