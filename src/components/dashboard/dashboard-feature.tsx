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
    "5ApWi9obrj2dyuvBNYadod9XgaBMc49B3ub5a4kxaB5ZKj1yKz2G1LuXEz6tLkqFn6MGuTex1scopWskZxfJcti5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49U8wWAJNrcxAibLJ7geuvKvxHXBZcTm4i8qk9kaTAWCaUSoBuiJVskaktjBfmjNwKTtW36ov4DgWuru5p7vccZ1",
  "key1": "2c5SW6LqYXZAj29qV1PCrKL7wATKe642EnFH9fpSPU8Kcgzjr5kZBG3LRcqBdwzEwaFMEQ9owhgsT1dCbEifDBv5",
  "key2": "2XxHKJ2hqzdAGMW2nJ7GGR645faUo5rLpmh874EpPnvQDQzRvGshSWZXrP2r55pfwuHLcbuw6H51HFzTfcMAmRoG",
  "key3": "3dmzSHGQ5FvoTe1NP1PugN8Ey8bvXUQVsAmrZaUYTr6wHad4Ej8v2vVUUebmKyXvMBZJHRPch7Ymao68GnC7EUaG",
  "key4": "78kdPodLGUYva74mbQXVNQVC6Xvhh3Jh81wKmofwaJGdvURAZTnPk2JHdGFpzfan3JQx2trjg8H9YZcQBBhBrJz",
  "key5": "3eCzgqLeuA6s5R3WwfXde83RqhoeZifrehQ4JB8pu44fKSGb12eahF7mokcKffUcwLGaeKAbZ7ppTkmDViH5gjfv",
  "key6": "3ta4nay5dGQ57pFsjbpjiZXVBoKj8tk6rFZ6MvVFKW3Ax1ND8saqW3DCtyBjf2LKm7p5KFRADVXq6sHUKrMqvpCE",
  "key7": "5Gxy7tg8upJXETUsHnZ4bdnGfcRJJFna6E8QGGKLqLkdbGN4MQnvWmtujv3ps6wg6tjsMBvb47D2eX6gduvT9BVq",
  "key8": "43DU5dd8LffRa7geHDHLMqxsj1WCxWuPemGDLfcTwpMo6JxykqahEDDmQjBJX8kpRY51MGsTEL5oTE1LgDdf34cV",
  "key9": "4yguF24DtV7D1Q1SrwAKQm4xvXf3TYn8yXWKMSVptgDdgqyC6hkm1EnLNxxgM7o7vr64indAFJGqGb7QJFit8jZ7",
  "key10": "4zYWD7iB7wERVFfLM1hvPZjeiZw5Z39V9ERC9v5iVpTMJsb4t37o4Yiro8RcRLS5CyCDpEZC3cEufxRWfPRJH7Xo",
  "key11": "53dAExNVUszXK9tU8nCR9GacmhcKXNuhAibckE3tARZNe4WepbacAgyTGNs7ZbYmDraxFXmic5pC9NMbiSsHyx3g",
  "key12": "5JNY1XrFbbgVAchzrGWjNkcF2LsWt8qLWN9ng2v4MVYQzBDoyHv4Zg9oVAGUcMSJLD9nqv5EdmPvNHFT4a2YT4A8",
  "key13": "4D4m6eJjvqDNowXf3YEdiiWkktVNRdeFSpnuyWoVscHjWGiFB5Rnp6aEXYb85pH4YLUT8zUNQV8YN8TnSGdoBKBT",
  "key14": "P9uFenWH8BS5kKu4rgjGvwsifDD1WgB7AZqpQMZESV5qoSAJYDzfvHqCKvvMRVSXg6rqYxPUTiHjjMY8YqUmypL",
  "key15": "5p2somhV7ZaomvpjiNp2T9Yi8njRJEApeWp4evuW2jM2bgzG6opZL6Aj3Wf41VVShrxZj6EPkDxvrETMiYVyJA89",
  "key16": "4JH8erArW1zqGqeABpHu5hUAbH2WYpKQctDQyaK6DHtaJHKibverFfqncVdL4BMT5droVeXf3zCaFpxnLTBMrciY",
  "key17": "4f2DeFG36DDyBo7gCjTbEaTHi2DCjN6wykQcT1HBk3XNnzCT8Bnu7TFBowLhHJ7zBBe9dEAaD1e3c8BRjeN3gdpt",
  "key18": "2R76YSEhkrX6ZjZ7tYaaTPbTe2BHHhKL278vBo1cQ47XREyfj3LMo191NsJQw4dfeRU8mS6oEVMLrJANHjcvjwsk",
  "key19": "49uopGG2zJJvsnfRDmT5FuttyShpYxipJTSkBaZpyGBRwyBjWgeniL7czQY7b9hKTZVCAMUABc6HKikWdNVUWHDx",
  "key20": "Ng9ran6VA4T13EyBDBpqcET4NNPMvBD1Tcs93JZCUhVqMJCcRYRZ4KbTGPFEGAvvT2PcnWw6t9j9dEs7yPmynYc",
  "key21": "Ppbke4G1VQpBsQBDnrdAmoXuWb2rshipRBva6acmuN4SZNxTfvjZnryvsmq4N3hSRfQDiHXEQMGXGveuCAmCA5b",
  "key22": "49rMM1GimY54d26aJvNZTfZLtehzMYFFia2Pth4K8uG4yrVpiDWJKsFzxHz6hQDTu2w5TRQfLWMv1yLJo3LyA7nT",
  "key23": "4AcfuDWQiayqhkq8bPqJcW9Mk1FE7PdPd9h7ieQWE5L4cZSxHcAAyomgP9h5HcaaacfutkPTWXdZQFYh1wy1h8sz",
  "key24": "3zAF7TB41m4iWFQEKqW321KTcgjGArSFs4YuCxA8uhCwZAodtAErMKhPHvcPQzn81hrXLw4AasJKyZVkfgciJQms",
  "key25": "2T92dDuXLybzKtfgtzePgFK4pqR2x29oL3EnwmRFqidLSUSgc1igZm9KSVdP1UKZHPtWdk9qF2TFJgkhyWEVBwai",
  "key26": "tBcGuARBnjCjLfvYPbkyqxmDQuUagT2eMfxpFq11WKAVGgVtY9YhoNi6LcJzdbiy1tKXotH98Sne6SnTJRZWqFU"
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
