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
    "X7uGeFG9QQ97HrjHr43DKryAQKyf5GEWosK2whgGJj22NxqrYa6mEQwnynGa5Rt31iXzATYrw8Y77zpcKjSQCnH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Zp7ezLEnVNnHYPzeeNZLuo8mTEp59yR9mNcdKaG1R9PSPhGEwSWPAeMBY5PEoZFMRHMPxmiFuFjzThuczo4FCcc",
  "key1": "3U3qsg7MP3zQxbwCXAbiPA5CATyzzJRAYxhZ21AWk1CWD1t9Rt3VD3XmP3WmVNMLEi7r2BG8HcWNGtpjdHsRUYzR",
  "key2": "2ihGsQ7jRVCHeSGCEWREPLbawCYEwuqAyCMQXBjSY6DJg2jA7HnrxHjFEkobS9PbiXHhrv4ev6jp57YQ3MU2fTmc",
  "key3": "xmshGJTdRCY6v3cXsBcHrm9NTjBfzB9aLWjzwRhJbv3QW2bQZxzrAhU56zW7mALCgTiY6UFhems5KZGd76sZAeR",
  "key4": "4qr5B2rLLgNGR8udHJDXfKcSeUVELzMU9nav7FnqjE2DFjckrHPbQdBHWhw55RqNKvNbk6nQ4Up3QofuHt9yaoAk",
  "key5": "3A5joCj7N4tLi8K1BUMJWVQLvQFTWCUSmHYowoVJNwiebohHBHioZm5E7qMGAKkPTVxTbHo7R1HfSQpyrU4vuA2b",
  "key6": "45c4P4eBwoiiDRCcLJgvEckpMW9VZYqRtHUB241aoUKHMwtPj9C9aDEPMnHEKR4oZvytqZuEwKbMCrbr3TsdM5P2",
  "key7": "XQ9FhEL4AHBe2iJyeExp4PxhDsYsHk4D2JxBbTY8EZ2AAEAh2rJwcUEd8zExvGXKaAkHSUa5RbTg3qeUGYj3XpV",
  "key8": "Xb6uWXqN5SSAYamHQbDNSCqMpdDvukKHiQ5aA4FK9ke2Y1EvK11zUg2EXN4icKivUFMa18kVAr6M7DjeWAsYk4A",
  "key9": "mnXggRL96QTKgD3VzPUy5TaK5rGcwrcAc6UGYN8hRVhmuLfKzsgqd3bhmadcdA2QbL9mWH46psjKokEf6W1YD7D",
  "key10": "2w8K5DvYGKqrdMx4uCMZmwZ5yUi1TvL8v58P7QffhrnmBMvyY7q1mx2RKgZxxBpTouqNRsBFRWgxGky4UJftvhws",
  "key11": "G5mayiQcvq3jLuohF6rBjT6yeo7o3vzhHVQfkqeugdqhGHVaGTSJyBE73i2p8pWiZR6FBDUWTVbgcuiZXgRjVaw",
  "key12": "362ZjqkhKMVoh28BEaTW9pcKyMp2rbtGLtKkcmfZy4eM3jRv2xfoouimE67imgGYxtxH24Mb2TmLx7rmy7EHuf8d",
  "key13": "62t7cY6WKGwmfokenDG7Y4v6KvUVhzFYA8W4y89pC2qedrsWPpVXZithcqxbVFTx7mzNDvZkZkPiWDtrUojCxcdJ",
  "key14": "4uKbFXcoVMYPBDrw3hSWmUFQyk2inB4xSiFYX8SKvtSVWRP4ANxm9gYEd39wvn9jn57hfTxh6eBaM9HtgENTYuRb",
  "key15": "2Z1TkmKqkpBw3kLGWwrW7ndcREzxc5UiUHcALBzitm8ThcrBEq8WKDfyn4z41YJq1BymgD4P9FwW26cMvCuLdHSs",
  "key16": "4wgTbBj2fdqt2jR9Qiir5YanNFRbFLNYhVq4ENQpmS2Sw7537b6twN7yUDtZ9MrLPn8YXk8BcL9SFcECwy1Q6YKA",
  "key17": "5eSYMDaWHDs1eLBysKpsf4Vp9bfJ2YzbMXS675ZE3p4kPrJLjf5uPGbJEMnXizRZ3yq8aRMCegxEg8xew3zmpirY",
  "key18": "uzsAX4k4115QmL4Tg3x8DReSpnogBHU6uTC8YEDaLDFmsHJSDn6nti83Qvoz9ANJTh4ZNba7deMbdcmFKYCtukN",
  "key19": "4JiSHanUQoLPk84eSDz57hMs2xqaNTXJkaerYdbW3trA1Tny6o8FCD4qHJbxGrM2gBUaySCheKJW6uZWvprZoTU4",
  "key20": "3bv8TGBtWGJXvfCB2U3WThUrFfHezxd1X4hhEihk9Kwbn87D7WUu3JknAe4wTMMKsSbknLkBs6ksVnVJnCwcmXu2",
  "key21": "29KNxgom7e8UbnUUQ8sATG9bBJTqsA9tjofRBN8Hoz6faPbFSm3zkN4zStJXDVjcM6X6aivAEiCga7SMHUBeXhy7",
  "key22": "2rbjfLnw3rHFuuNmhKWfUoxyKRzojK6efY6CwzqZSR34QeQezdm5Tf4jFSvPHEkbCo1YWn2Ger3MQhD7RtTLJM3g",
  "key23": "sZDy5RWLGvoL9c16AcnVHU54gGgpkZMPmrH2wYGPT2ia29a4EyKJvbfFeYt1hNukN4pMxgUjzXXiTFS96xdYZB1",
  "key24": "5mW1wS6ZKSVH4JicsFQGjYR2TVhgzZ9YasKjnjMbN1MVGQNp3b2JEW3xmysuwo2jWCMFvAGaqnxKU2cx6zkB97dp",
  "key25": "3E4X7dEA34nMVCXaTHQsAkpVtRycRCpxoGo7Pfw9aS5frA8fATQxDLmCioZ5zkKRbCJbVZxxFYvHZVXNRDGZ7ff8",
  "key26": "24Hg4EHRHeBXR7t9SFAZuUThT4pU2KTTbtUx6LmRwQYNWHLRz3BJ8Rw3ZRydxJjci4UR6bXkUwXRJJQcit2aZLf2",
  "key27": "2ZdMXS2UcDUrL8Qh1iwy7kijS3wjQyyNDPwdn3BNKkjutp1QUzDxA5nzJqYxWCdYJ7ixi6ixQWaaG4yMgecJGKKo",
  "key28": "3GbJwwkmE1fhj8rHT4WvK2Wn7Zse9uzqjJVPrGQRJ1GbyXcpA1t6LwEW5QSAo8mBTUJi2gVsABEirmUaUnkkB3Lt",
  "key29": "5Bh8s73C6qtMF56HwNr6sQaJu4Wq9o6nr7boMU4YtQzDR7LrPtV29fo9u5egKe8Zmzo56XEZ3KqUPywSkEC7hMpR"
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
