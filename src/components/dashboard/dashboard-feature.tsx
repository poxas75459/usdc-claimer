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
    "QK4DeiRViFrCTqEQG8k63ES7Ew8FAZ1Ttgrk1izc6dyR95kVpmtHJFRJPhUVDM4ET7d8Gi3SYJabqHYspor1mcS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nDv7FRRQkXcqQXLMiLZm8iG6NyzEDPUHGxqLw9pVSikufMew65Nn5XGnGiV8FxmZPCo9wNqonLEtqkttfCCVoAr",
  "key1": "fPAm13u2BFay37NRpPSs7vnGX4huBr9aLzBtnB6WsBvC7EdmEcDtQiEKCMarJfnu2MNdLVLFbcgHcgx9kRosXbg",
  "key2": "5MVJdxkPqkydVNi9nxvxR8Q2pYHTaPvnAxJ3dkHi4NDDssT8ubAWsUFppPcNvX1i5eJKcK4mFg1aoxxCxfHEqSUc",
  "key3": "3LtqadkXEAgb8LvKFn3x9M2sa8n8cXa45NqEaeCgo9xQQGeA215tYVFkJCFxKgAJeqQsqqWcejqRSsR5UJpRZAzP",
  "key4": "uXgyaYZjFkUELiihAPm1eFyUUk1umxFAyh6GbpgvJ7oFqY4N6hUhvomRCgpViLgtZDGETrzxnaF2s7w192XooRs",
  "key5": "5kMAp15iza9pEUgP7E9F5H2kTzDvqXvNXCxni121EBPumtQTcWhjwEoKRVPByxzBxm94kgP11rBBG9FCfZop8nvL",
  "key6": "4jqiFvnm9aosDNMieDNXHR5ySs5m8vBZCc1XEtmR4uayr6PE2AgDHFt5ozBkmPxusrcc2q6vHsu47RD8XUg8fvNv",
  "key7": "5vTaByfTW1YYRQJaTZnGCWbpzuTPf3KdSeP6Fdp9WEL9jTuTzFCTBhAM6Cf1KJ2wawKU44WaCHDiiZGYJB6tkv4G",
  "key8": "3F2jMn1hoK2C9Q1ehUveq9i9B8CEbahoK5H7otbg43rPzp42oNqqY3w4ES6ZPRs9Lb3Ff1d9x2U4H2wc85RocZR5",
  "key9": "2jHBCdKxZKuQTNZ7m6EJdtqZ47RQpjTckJyUcLovKv7jo1vZYT2DB6N1rc28C7PkoX2T8YgbTgYP3iUpw6JPmmqh",
  "key10": "5rU9yaDmUphwcBixRpig9CSb5xsGpAXSe2CpzqKDVNJ4oLFopSWi4nrRx69LbgxUFyndyhKiC1HzisHfDTmPCuaD",
  "key11": "3R7EvqEREyz3u88XVtzgLQCviFpYZQdrRYY4nQNpsiPR9m7rDTGRip2cvr3QfKiivCt2hXhyY1kXum8vFtqBBQ4f",
  "key12": "oUPXkcVEepxPyLk5m6GjXtMKHeoHafNUYtRW8DhgRDhTgQLrmVsvkcXTnMvvWEmExnY4jWBSQXBDrg4EyTLJnNp",
  "key13": "4XzPwKy3cnJtEALMfkn56ghRyE1BoC3B3Rt3Ww8R6gAX3GF55YTnBGDHcZE7xadgZBzhhgjeQCKBYEjHE33WLE5V",
  "key14": "3C8QpgLxaXfAegRSrCqs97LXEdC3g3JHFXPHeWfNDWYABBLxTEKVudvBmVz3peneRxb8Nh7j9gDZKc9Ebsggfubu",
  "key15": "UMWQtauq8EXT8grQS2XpiWS4D1aozPBu676z3omu6KaSwsfQRyigv9wmaUS4Q8x7e9yX9BchA9ANBBCBFY9fbMs",
  "key16": "Ss5pqsCKk4j6TNnLoF7rmETcxRMNxHECwy8rnp5pksmDQQ7gm1ncW3eKtVq6f97XKi3P5pFrqnfDLtN3H4sZni3",
  "key17": "4fP1AGYisJ9ynsdYQVsyjTToh6VXmqV7ca6ysSqGtbL11dqNAVgBFUQ5PGGBEvjFpmsRy9WCT8uZWatyFk2YkoWW",
  "key18": "3mkfDPDQ2rg9iJwRp3cRro3F5wA25VDRLXPFNW6dQRg6ewzuSZBdyYpaVSYbPRnUK67hSCYceo4vpQhYNW6fYgK8",
  "key19": "3MabM65uAgUM8gqZEewVEh1yGbMwXwEJHdPMmrwQsm9pZkSAnno8azZg2SrTvcC3iyckc9CTWLVRszwW8kTut42",
  "key20": "5gCAhZEBc1ZCQCqjcZQmoPxnjCL1NFbQxZ88VyuvYpq1XPmR9QRQjRNe3D3rC8BgbCe6TeerM2d33z9nCBHZzAEo",
  "key21": "5cg4XbXMQ9Qb3PYrQFQrGApPKTNrETjS2p9mqCgj8a5mVMLC8MWfJ5LQA2cStE7wWtfSwSWmuT3SCT1zoqrNNud",
  "key22": "4ezW87MTLdwC93eT3SATbbF7YXWVwVMgYVSGcaaHeLiPVTQMQusi4J7CCJwbCgMArC81mPuzfTb58kZMwfiUzQJp",
  "key23": "o5dZHKLtXjkpvR8KNzswMkbDoBvgNBcqFSX8JdgXeMwqu9ZFHujszk1wrsnPbBfvQkKcQ1A14BUSWh3cv26WqA9",
  "key24": "4F2GHEPGjf8YsEp7TUTh5nQxmoFLB4RDYNdme4HbCC4376tiSkGFdKP75czeX2YE8joVmw8q8snNvg6sxpB2cFJ4"
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
