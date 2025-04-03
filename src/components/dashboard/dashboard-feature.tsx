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
    "3PYUZoY6gmxmBvVKUiTaKSzp2YQcnn8LskwbT6Nu9g38rFj37MZXHuPB8NsJXYfu35J4u3K5MEgVewMQniwwELxc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qoVGHdQ78mgAgFmjgBdjzTSPb3vP74h7KBxdEFpMCNCubwoBzczx9rPxee9KcpeZraAxiyywbY6N97qKu8DTWyB",
  "key1": "2WjJVPmVyLGejxnknUe2W5Kb77JwBMDrskCwAH9u7RynrYqDye8y5MHbpd9tLNdHHQvnnXo1McMkSuw5sfNpKBVw",
  "key2": "4kUe2pR9p6nbFTRu2WSZt69d16U7KjQ8HunrsKQifCitPD9Cqi6urj8S2MFmWiMhQsCQtADGQ5rvkBfHEjcgZn4y",
  "key3": "4Cnrac9fV2vs7Ue8zbNkMh7Q3dT7uG9yffepHuJxXmXHhfdiLBYs3yZcjj8BwQdDAy9QrnDMKezWRtg5iuHDQpFf",
  "key4": "43sYRWVkeTEk7zb42xLZNN6Biexyu3h1rqeKPp5Nu7q227QYiGSC1ZDPyzs6AcNBUcw2oX3arFcGshFTsaR4pM6C",
  "key5": "9ner1qEbShqQbdEpv3mT9cevcjSoH2adSSDGE9eX682d5bpmonBothCnmHR9k81QLrZx9exj7N3kZPkGE2XCYuo",
  "key6": "5uvMLdkMSa5YGtsrHZq4iBf9J3vmCaDsMcUv13cEGAh4vfvjoyzb8mBta81d1fJXdtT4PmpqmPRkFwfYavcqgdiC",
  "key7": "aw8PABqvBV1mJW1k5hehw9n47cgrY3MoUDciBpMAhjbSi6eDZjckLbLwb1xvxTUAVhKksqLtzuCDQxs6ncmYDgu",
  "key8": "JyosQwGkFwgP2aGQLeCY4Vs6VwdTr3EbYkms5j3M2Z2gYT4DQmzSz61pEQH3v7NoaK6dwaLWfss5kHWp4pq1PGF",
  "key9": "5DTH11BBEstPT4LhfasttebhxURUP9BG9LGD29UxuwWMLZoGxvLP9szA8LSWvaDHfcUfnu7p2wQiEaFu1SnwArZp",
  "key10": "2jq7d4aWzb2NVgkJcoyzrUmukmEj14mfTb3EAvMs7ggQDEw9Jqtw6Nxwj45te3tGtxYg4bjJw1qSHrTfVhMEtRpi",
  "key11": "58ik3NNsVSYU6yTy5a86mPu2MAq6mfsLQ46GoiDWDkUdNv4BxfLmz4p9TQdZFja5JjniPvCjzaGP57kp3PVpee7z",
  "key12": "2pcdqBLAVh57EJvK4PP1VC8R5vYKEjLrM3YZftgL1GADwDLrDNrv2E2whKK9bXjr18ZzxxYD7Xz4aGjs8YcbXQzD",
  "key13": "6ZYsTdRU3ViJUdwNcEUVcfzvVWX47iHgt2itmKViFUaQfKeCPD4uzB9uBGUJHfj1eVdMAgGham1ma3BaDhebPpp",
  "key14": "4bcKqpzyfEzJT1ZuSP559Yt3xFeCoR9nbERevs575TvoYR49ZicWPgKhG7dGrNg7vSpoChd9V8oPjyts3RHPEqfs",
  "key15": "551rDMgQb7Tyd5y1223CdWMaonQefqNdiykjw451CAWBqTVCfcoATCx9eJFkVPW8Uad9sAFc7H4MqXwhntLLPNsD",
  "key16": "337mL8MnpMGfP7iuqjhPvQaNfoDCix4ekXNM1nwpdQbGAsURsTrvC128Q2C1NbeHNnVgD41v4HbcYA91EUrbxF7w",
  "key17": "XHQ93GmwgvC4hXxx9KFgHEbmYuLt3hEew6dyooqf7gjXkzotKTqLnHtTErXsuweJrvxbzCxYSaAX2fDV8E9uKAm",
  "key18": "3Nuyagtw3xzoJh2cEVHkdnYkHCa7E8BbsHYpg32nojGhETQ2dwQ7R4QXjYNWkHKo6Gs5VedrzAsBMxSitEnAiJHw",
  "key19": "63u4uQ4i3MdRNkm3XPvDj5BSUQSEsWfsA1vGin3QsgTAWYeCRYLbFFDJME9SeUE8EEPYZY4k7guCfXfT1ppfd39c",
  "key20": "3ws9bx6LJnDhgbjxwaWGYNFyTyYKzLHg14REopVmY1gQFBoNepc4DFbWnjpP919GHGRyxBrfb6qWDFmgRPQA1Jmb",
  "key21": "211u3ze82gQ1DeHfSHbDDeU87kxRhbcKtMQC4ZoAabpQmMFoHuvUg7ursQqyuZzTvE6BeUFm4gULgN3f8wX2kaZv",
  "key22": "23x6F6yiLhH2mF3yNuJtYQHZRafbEL1eNLH76Gy7VsNRw6XjN3Cj8yycuUVbrDHBqdfAoH3bBkBr6xcbPQvG3YeQ",
  "key23": "3iAQaXKS8V69fSLvKAMN3EPZPsH5sVaZk29QBezDdmpRvNsF4ci654oqe6JTj4KJZVfNHxLS5Xhy9WcaLoi9kX4q",
  "key24": "rbbiNzktx3nmaWm34DfZM7nfcgXvUyf8tgBYAuB5qBi6Af2eXQ8acNYHmiKTEcWUVrX8xfqnfpPxqWeM94FuY6q"
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
