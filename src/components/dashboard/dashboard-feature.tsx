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
    "5F4E6ZDNSBWjNwK7NQzFCeT952UjYnfyzKpjbVy1GTaFsqDXzztUUVJw2qHfjyuxzcodezyWCkwA95on51KiGNKK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YHFaBU62BavVZ4kRhR1d4kE6qkuRgAJgCN8yMf7ptWBEpCrwe7zebWZMYBAuMBp9hB7o3RrqwcESUFcZmMsp9CH",
  "key1": "5E41gVzZXQve2SDR3qcVRvsuD8WumrhqxrKXVRpRzeoK5MswqHmX8x5dbnzvjQNWVhG5WnwiDdtBTnxkMftNCTfR",
  "key2": "mbmxqy3haqs76PSuXxKHbsEiHxwJcPhYE5gb6njYU2g1Ns42x9u2N4KtyZnJvoS1k6BFYKshibKv4WDoGEUiB1c",
  "key3": "gH8moD7gUGd9Er66MSBNJpq7CQEvqjKsZ9GMEasAsr8a66Xf5d2GMGACWtA3oe6UduZjSpoDLLzboXfxBiKu7ux",
  "key4": "2zxfuVTc4cfhfhkxbj9V9gHa7kZ1EmbxhUooBrzbGZRqBJTiBobvSZWudCP9Bp3phXbRmwzRAi6Qp61ZghGdvfwU",
  "key5": "3v8QzgcAx6iWgth5qZozK22dGn5CA5J5s8cj7v2kkPdEQPfx3wkXn1WQN3KHbXUrThagm9sCPAQ7n7hTK42qDQnz",
  "key6": "5CnGQVFmuvn3cNsddHn94fo8S1TsJR5vcfsNdRnXQjXV2CtAT8ch7vq4wERsv8JmEZjrFgxRRxQMUGw5biDAk89K",
  "key7": "2PinzBdhPsRtCCPSGrnP7khipG3LUjNEJMiJ9uM7yKUJBPZHQ92obU4X7dBwMt4QE6tSB5yFrjwjMFDpnw71ZRyD",
  "key8": "2XgEsLPGqhUpqToC7UVvfJ9x9ZYYThBTxw2zrQ1QxTPsUzGV19XfF6ZfKwUKdS8MHvVJGkpQAoEqA5k6wnSS68Kz",
  "key9": "YqDM5fPTiJfoxPrWjvXoe5S5CAfS2TywhyhspNKQzv3Uxjhgdqp88ZPRrYrjuMaq4WASXZPQAJD7ZSsnmT9EjVK",
  "key10": "5nkScS7YS7VnGo1n8aFmt3dPJUqsS8Wf47my79euiWHy2ztBvge7PFoBWPey538eykbrmGqLtVNdoW3yiy9rSY5W",
  "key11": "46MbywD6rESdxKwYJrAoXjgbgHptCmmgAaJxa5P1kJZ9VNveTudCeoXTGU8SHu8kaAeJkEpG4NuebiqETFNL9jLY",
  "key12": "2bSKoMHcJnpDSvyiZs78vZ6DQbuMBJtv3higWdGU8qwrNk46aXAPyMaKYN4MnCfcHJD1Gc7uwNmRCQpqfeTu3bey",
  "key13": "Uafwgmjw7aRn79RfPiVNoNqkvLxjawEh5sPnvzExzNCM4eMcSjQhKhMJuxYR9miGda9m2xTRn175chGENxvS9GD",
  "key14": "38DB1aWiRiauhdNEsJUkPWKuonFKvATeNggJtSVLmsAKmogTRpANMQCDhgqAKPMGdQKg6LFvVLmndtwpnpP8G3Bd",
  "key15": "4oKpNeTYNeR3jXUJ3QoiriurLRuUk7AfczBXQndWLdrvYfoQJ8HTsmLvLUXSfYCMjRhDz5nAWVsyEfuSSQibkb5p",
  "key16": "2nME4M4ewZdn3i4anWmKM8vf2M9GH1cVWJTEL9z7d9W7vW7tKCxNxLW1Xkb2ss1G6x2fKsmSnreZ7FwxFqLrbKTx",
  "key17": "5iU6qmCBinmeDsbJzwmR9EYusJ8P2vaFvaMvsDUCpmcYpJNub8LMZufSnex6C3od4ZTGwrdHYGHq8VNsifsVpYCG",
  "key18": "Qtm81ZCVnBrsogaeaFWcknmSCPENQk5krX7CKZ7UrSzMHfRCzDoat1fGpWT7gvZhrCA899muUJCr4ABan7fZazZ",
  "key19": "3xKXn6yisPUfEdhFi56BExoZtAU9ZhfDmbeFMdXVo1Yq52upCyGpAiCHBDt1GeGYWcz9P3jyzeNQPecPPPfByKXa",
  "key20": "o2RUoeJUCeeqFtK72WFL3BtAtxtvcrLSkojjSgmFcewwTXf3JJQ8711zgCGE39kEpXxM5tXyfNjwtvAHvu8cdRj",
  "key21": "XjKZEWUsAWZwMXwU2Zo83LZAiAywqtPiH3SgsJeCckNGH5cfzvEtcHRubYrrvNtdGvsXwygaPuAQuVofCGRYxVg",
  "key22": "4GsCrnZybMvK7zLTSdAwXSKuCqzsfRHnZ1vY4scRdbhJu2sxkwQEsyYRQQT4Y746s5KnmpQYQzPvsDsYPpZfj6cb",
  "key23": "54MrntDy6e8wNJCZqdufuH9Exu6VqGeLxi8rG7Fu2SkSMvfCWkspbDmU59difi3A4dJmkcJJSczaE3HzDkzfzU6M",
  "key24": "5K1CKNd3dfSHSgXzqs3CKbV2Moi2HhKFUScAW8nsipYDa27sSbBcRQ9fULohUX9SBR2JXVSjPr7WdVjSvpTfBtLr"
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
