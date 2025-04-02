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
    "47V3ZfxkPZHfS7rw1NVpJSr2B2QHqs5vNeDFh8RBXefV61zKB5B9pNBkiBH7FSeTKKD78ybZUoYLsdt8qLfnNmYJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o9Vtd6CSiFPRZbnuf562WVBWkVwNxRdy9bDDcjF2n53mCrRzL1oZTZ52FVxVvJo21didgy2idRgVboBQDuCMMUn",
  "key1": "514WWXRGTz9186C741UsLrm9YdYLDHYVvNsN8YX3sdMDJCohFskN6wJkrXRtGt6Y34cXigxifwFPGVjre3wCWA91",
  "key2": "j2cMy47TcfdMRj9cQy7kEpm2br6wv3piXqtfoa7jnvjwNfed8fryVvgRzCM8RNa4XJXLxHr19xvGZE2goX3NJaQ",
  "key3": "2J2Y8dDdEEuTPn8Zm5F8Uqj6je2AvJDankrieVANp6tvGfZfGXq1gTnhkpKWgY8N8VhuJDFu7xwuu7Utk3S1EyWg",
  "key4": "2LpurFgp8qTgoRuSubvxTPeecEottzfJopfs6ko2ZyATkN3jFLd4uwTSjJHQGL8ELspNt8LHbi1nriKbyow91585",
  "key5": "66tLfPehdVXHHJV3ngmDdhV3m4ctqZ7DUD2a2FoK9Z1FdvnukQfwyqGwLNMPeRvnGNXCaQdhFKqEw7tXPbXb62tH",
  "key6": "5srX7JuQU6X2fBZWh5tKMwWZVq3hixammDBhrUtAb1ok2Uvba2dScyyRf3XF9DMJK7mBz8tgRrc98dmsewg7YFFM",
  "key7": "5jp6UcyU1tr4AHJno5hG7CFtHzPhDZi4KWKJk865CudgfqLL7cs9GMCqpS9qh89pVAzHUBzZHGrb7T2sVpeCjPWA",
  "key8": "SLgMaGYFrnefEBe7g1uYBNLyxFd87QR3YEivbVbx8prLuY8yUWy6u9K776WdUB2QqKTNp8KpRvnDtCEWW83S51y",
  "key9": "3dQCzrfokTK83hxcXV91J69NmYosZCiWJRBumxC7YBqhXCX69F4kQVfhhvCc7Dd7Mmx34JhYVAoYndLuUs8xfdqW",
  "key10": "Y6tb8doJXK3YDydV8Xrz9eos9ZdeQ1dJzwLQetyUbwCpKAy7iZef5c3rbxdwgzzhr6KuBjjfdrSfHLoj1Z6XSpb",
  "key11": "LR8zYhNgBPZZsAbbnCH5xjv6cBFwDUQE3cJbybubRYTsbcCnNTaQyM1K5NQFWHu5Wyx1ogi8p5X64vv1UgcfTiF",
  "key12": "aAZWdA1xeMhHL3uih3wpGvsbVfjum7xGasAUqMLTbR3qU3iMnmB5twh5kibLCwMQ5okcXB3sKWYu3owiVkYzivV",
  "key13": "46gB7mUPQdUgv6mEjqCPsF4oa8iH7ZAL7kUktQ6ZZEp2827ZXf5uCp3nTeYJfsmqwqwARzDgjtMZExUvjGVJojpH",
  "key14": "3gfexrQcVm4QEc6MNZRL43hXSGgefk3pWZj8PSUY67WMLhRbizcfWXmnfjsvMyLcuwRs1AorFXhYuD9xwZ1EwNPV",
  "key15": "5soxUDTW1tnzzF4Bo8VNheHddg6QEUvF18YPAygDEAcL2t2eNP58ZQ4Rs3SSkq593nAGjdVkwJcWBfPg9i78Gxih",
  "key16": "3HT8pBQhjd6E8RrM45Qhj3Sq1ChNSQhQCcJS3Ep8goy6c3vv8Wuafk2xqXWCZRhiM9dpJjoSDG26JBhK9rgAX9C8",
  "key17": "559QSYfM5Bk7PRRXcpDL95zicBubjvHSPaG2DYS76T6CJT4UEqP6zCs6k1WUkz8XmwBgjxzefTteEhayFKY5RkJ2",
  "key18": "3XAfWKjVVhD2yVGnJcahZUR62fUhPquuXz46DSDaJGUdLJ86uYUvnXP3HLyRfwkQkogBAvHSw6BTLrhkXSKUrq5q",
  "key19": "61hVaUmufVMo6RTP2QpQH9vkW1R3FnxmwTDQNhweMniPBKeC8Cp4SYoQMdUoSu5Z3Q4mD46aJnsvPPrAMk3x14de",
  "key20": "4QDK5F7dz2Qhbht5LJMxT7MWTwSrEiZjCmS7uufgLNLtNUVwVegnqiSsDshusr4QJ8ygbAYnfdMzaL5Wd9KXRAf6",
  "key21": "62fsL2JPkeWV3MNC3ux41QoEoMA8MZFni6XQNCA7eX3pzUsPcPV1ESeCUwDj1BfCy85igc3SAr7oDdddChYVTpkC",
  "key22": "2CZceEA9hxpkQPdUikpdNtSjXKd2MmpiV9ydCGwMauoNbTpBw3HyMrKmWHYvDAW4r3ixcapfzgjtB9JKuBtZv227",
  "key23": "247dhoSNHeY99y9K3yVsovTPyUnJFFNywubCTfBP6FFcoBA5ASxoDwL5WBm4ZUXq4JEjqH42hiQN9uWmu6VxA7m9",
  "key24": "3N69BUtmKgeTUuvkNHfGVDAvmNgxuTXj5WAV7271xFKyMEULbE5Bs1KBtrjpRWqQf5t2xmtaEyFPXGPAqaAFdUgx",
  "key25": "3xLUjrzvJ3qoPDA9Mgs6xGUizbsJaLHd259SiwsSwUR3rkXqaqcK3UAB6fAgKRat7FBx1BTMekAoJLX5MBW5GqDq",
  "key26": "aSqi4Ab2H3A1ME2f8ACfT7B7PDkwrmDG1TFFiyPicCgpH64n7GWuSkjP7kWkK53BED7nJX3ikPxComiesXRnxDT",
  "key27": "2u6PYmKrRbjL5CcPUZ8bvw89CvkDT4RzUrQEgqWu4n26Dkd4az2kKeFYtQj4UGxktMHH26nsPn3BdcmwfVGem1c4",
  "key28": "5rA299sDxiX597FtnNjXZMnfLZHucVLznHVotZWBySgUQC5TmQdgx4ArdP4DmqL5wySaGghx8yFN4VhdXNNHTU41",
  "key29": "4vqP42gyH3dasmNz9bfCS5g2ZHGw7jt5VFUV82qTsJFb8v7HKzQEd1TQBVXsBxM1mQKGqoCk6kevqfmvbe5vdYfC",
  "key30": "4TGHQNB8cJQUccKNLgiysoKp62kUq7JXyhnnscf7nAJL4GrStV6y2TSTRLZuDsa6vKjSbufoA5nXJaH4FzGPCWwV",
  "key31": "3oJRFehrCoDp7L3Ag3ytaUcdMjfEhskg5K1tiSM5F81FW7C3J12u8SemVUXrWrywfMSg3yzA9hZNFVsQkz1exP89",
  "key32": "2H3UKZBEt3fPk8pSvsJkvynB32Vx3KSCEAf7GAKCpvwKoGZUpB7wyqz4GbGXHNUmsX3afstRd6p4rJrPtuM3nocR",
  "key33": "4pNhKJyGY5Z8b4e5h7L4fX8Uv5bRgMGMevVQzXNF2yF1Vw5CPAXczEBco3rBSSm41hHKJSpxEr33UfxRbP7YxgfW",
  "key34": "2quwz9phprpGJRWJfrN4QEscb7QxG3hDm4D1669KJvrDLtDr3TiAppNSeKqcsASPrw4xAZ6F5HohnordnZvhYjnu",
  "key35": "2uuSg9Zy2ZWVr8x8gFSHSn25z6vETNvi1CDcX497FXewxAJAgg9GXqkvpRLQNwamHVyYn3w7Eec1PrzesmtxN2QW",
  "key36": "5iEom1YEuL1oQcXbhWS5dKLtJT4eTigjahkJycRatgDNzYPpFUwkdCAxw9W2eFbhGz3LFYaMHTLPncd56hqu6T3y",
  "key37": "29v7mPJ84TG3FJeb4KwEErN6xpJH5CXp27HurtZY8MURZokj5JPEzKWWkc4xArBoDyTihT3kLbFYhC1afPN6EuBq"
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
