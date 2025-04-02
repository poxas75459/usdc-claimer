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
    "4fkk7f7JpBs2zAVQsSvKjZFK7F2biJhW8N8Au2zZ7ixjjy3qStGXdLB2fY7r1pxJMb96U9LrWHJpkfDHPhYpBSBi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62tUi42qvTXybYfq7zuqeFr47JpUgm3Fd1vG9tfMh8JX1GG8L3nR3aiZzbKvwonAEmKHbMoyfNWRbrP3VgQuxTGp",
  "key1": "uB8sDgvqP4PLF3YzS3a2zTfJViFxWQkR9zkfmqqrpx7C4ZaeQtB7dPyy4mJWbZdQdxmZz4xYdbx5R6F4NhvwdB9",
  "key2": "5SsaoxgXY4ibaBcmZkNr1Xd25ZbM9FHSSmnGWUzzZriLfJK7XcqFppRxkpQxVZM2xnTTEGdPpbErUiKBxdD414Qq",
  "key3": "4sJbxCvk9vsPJpL3XGbLCU8tDc4BePN2LErtRmnPVeqSm7tVEpirKJ9HVT9v35Xi6WQTgCvfRMAm4TyqFuL6VoHn",
  "key4": "4dwaH6K3CwqCfvC1st68xKJctkBi1y1gdS52GtMrSttxztT3jXQYBG9Si4hoNZQsGdAk26hqTuuUtknNnLo8SwB5",
  "key5": "47MvrtW1zbq5akVySRbo9FLgSmnyrUNhnnBVtXRyBz48XFz1SxzgCTwVTor9W9G5jhokae22qPHNEdQJjwWsE7Ue",
  "key6": "5gU6RP4M7qYQzNy9CaoYadMMNk4MLqQXUbtXJmKPoVszHYGqxjCDwWgjwjeX6xif62jdKpkffaXdYMG94Uk1QCvw",
  "key7": "5KbDe29EeAxUdjMVjJkp47FvUZmmMpdiKr8i6Jhr9pxNaHtdUermdEjWrzNWoLuHhRRXHmu5R4d3LyHNsukHZcMi",
  "key8": "4nqsbs4tnuTFLQTXcmaHMwiVdSobGfbxGHodMkK8ZBLvFLNSuQHqZde25BS2gB3Ed76hZygZ89oGZnT9Z3dT8fvb",
  "key9": "5NshTGb8vxYEXA2c8VMtDMaGTvAyPmdvh6YRLKhHZSvhByyzbuChFQqQcTRCgugaRqxp37tbJnwg1fxb2oLtbKSU",
  "key10": "2LtbxTnP4rUmd9XsqBSWgS6J23384ZSJGBVxnf3Q3Qbc7EbSv8SMgtS2MK6mZ1KpdABNfAtaY9mUeU5Nyn55yYyE",
  "key11": "2yYjH4EEDP9zwkSGvTj3mCbrBgo9oP1eLSXPoDyDuRBETGBomytBHjEyAkr5KLNUYD8sxMSN6BaLg6y9kWXQT6iu",
  "key12": "47cNNwUwihFfkSMRWhnw3yAkLvvdmNCQm1jv9KVw33bKNR2pk29CyVQVCkGCaRdghL4xDZzNQYUSLexvgfwihmNF",
  "key13": "2LyQVrwPQzAX6TVSQ9edeb1T3k1Ns7B5UNUkM9R8EU7vYNkebFcoh9U799wpvLPMgMd12iyZ42eSoRrrU58f1k9n",
  "key14": "3g1bpMXoTW9XaX6DsmGkg9zQ2H85REiSafGJMzGesXiChQiaz3zcPs8JxjnnnwSBQ1sHjpnR1yuXpiEqdxPH9Fz2",
  "key15": "4gLhviqLDjcF3Y5WWeaCm1J2pwZE1tVRbCRHo7g1A2uWmJHaYy4UMKVniePgEz6yj31mLYc4jatMXrbfYGvm4btN",
  "key16": "3p78tvszpw1smVgigWSCDVMSXrjueYeDo5hAqPdpNP2fw23Z5DpAQdQymX9eYqtW7gt3iC9SAs2EEB5aVQR8sHdd",
  "key17": "3GZRPcE5xoPd9x2qDCCvaXHkJRRSFEPUm9sVEVQuoa7aUtPXm88kaXMfn5TkxWTkHMMTxeGSt7PWZNqmfgAwnm34",
  "key18": "2DYA2XZjsVn2jExsX4ozENesjmxvkUHf9rHWkxH4r39oEZ45DpHgg7CkdaaRnEuZW4dhDuuUPkhKnTL1CfMjaacC",
  "key19": "4GguTDA88bFcNYY2WZ9wHZwhNvXKedwjwc1UdMGniUccEgXTuWJJoCUxZbXEyPHZh6wTKSvNRqm8z9NGTkgan9M3",
  "key20": "BeSSvDaj5CyKacUetdVcFgS5jg1t22vbx7Df33m427wmjDd39KrC7vK1PM1G2ovt4HLgvnzf5YukztQwgKmCJzr",
  "key21": "C9rZp7n2bpZ1fJCmdbA9bsD4xnEe7L94YSb1mawoKS6KjviUzNnr19caaFnhsZvsFaMXCAjUhU3ocbhAJqYxiSw",
  "key22": "3ZeZ6UfEKGYtw4dNY1eDEVQFroeACWg3XGR3aHGb8JSsF7d23EJHWrjbTn6NohcpQX7J2PJbCPTXtE3fob1sth44",
  "key23": "49HAe2UEQ7mHdWAekCY6MgCVsLV4paymYd6k5wTfyRr3nHVKwfUA5KJro7DTBa9vDcpVfGuYRnjkzpEgocycXLXH",
  "key24": "3bYLT3FzSiugpVN6bFiWe632m3f3vMKTiTTCZzPvnXQbbaFUpAbKTESCFm4Nr8GPCq7oYKXKS1WFwV9n4oBHkHBF",
  "key25": "vVhG1vFe8kn7WKjS67FiBnDoJpsXFn3J4Avbu6ReHvWrLTPhmRh45LVg8y8SkTLGLE2dgMmZcbye6oMp3hZgT9d",
  "key26": "3ungEWF87pX6EBmgv5x7HrDBLQBq8sBMNsF6xHBx4xFeZdqEiTVxvGS7e3iaNt5xMLb2m9CiSkmm8TCTFKAGH8Yf",
  "key27": "29ieEjGfjwzdsTGUb6cYxQPk5hsYECQPkQuU8y1eNgXBCeGqiYmxy4R1J8gG4NB5h5EWBPQKQpRwxv5f8dJe2fqS",
  "key28": "2ze6J2Km1kHwhhJhxFSiAbLFfZvpFdABUNYrKBwvsr365X9EzeMHPG6KA6bftDE6HcyLTEHds6VqnGZ3ayJ1Mn2E",
  "key29": "4YFbYip4Gdz5VXyWJFDojBTnLHSVBa4Ez6ufJBMir4HhB5JQ8M9tmrqt4mAKUQYrg8SewE19i5jFb8byfFXEtm3p"
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
