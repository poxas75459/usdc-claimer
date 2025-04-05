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
    "2pGUFMU6Y37gC4UQNYLK3HozvHjGrXrWzgvAsGxNcWc3s2zn85EuDpjxqeLeLrRkTQDvJ5CYbzJTsWbKsYWACnGE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oFwhxuj7KpnbW2qWy94hX5Mi6iDMc2vEamzcaYRrk9NXgeox7qJTBwXbcU4LFzi3HmGanMnVmnnhbWnE5RncLv",
  "key1": "5yJpjDpbscvY3YcXbUMZJE5mgQRL6rqePD8YKxCsR2pz9QmfEyukUkib2BEZ84MdwUHfpD26hcik8ry2UYo9WZZX",
  "key2": "2Dh4cffh6sV7YHrBftaQqWkk5i6LQrMm1Ckq2Z1bv1z8v4ce3fiNyWwvcrsZwdte4yXP5wDMsyi9wuL1nUF7n4MQ",
  "key3": "3HJFAQUk5cXsHpLsVW86qDiYw9VtRNgg7YHHRLjZY4rMJU8KVaG8Px8oVGmaPVwCycCTVg3BGcCPqYmBgWfVfuP8",
  "key4": "2weDNMD5ni4mA7amvWpiMSjPQNiyLidiKicSjcamUTQp9PnykMJLqHHHkZvjGRRc6QJaSGSXYoBiywcZdFrNNMTW",
  "key5": "5STWkpYdVz8WJdSpRedWx6o5hPmLjxkJCvSfHKHqKp4fzXweLqizUT749Q9WCX5ieCfkNZZNeCroxWcsvYFZsHUV",
  "key6": "8yNXk6VsSowQEdNserrqWoqSqbbJmmfD75fGsKmzU9qtehCWNoDjf9j7CX585SMC7sVhjLpyAnMLVLXRszXKdPt",
  "key7": "4tEWhbbxFq5RxwYhAPNd55ZJ55kGa3fVk9U7e12U9xTraRLoZtTEtUtcRqZ3ypiJj3ARtMEPrZWD8UAsQnbnjtsE",
  "key8": "2vVMosDqSqQFRxegBCxQ5wWqBpg6JbpSdaBAB58e6P7mJZj6M4P21BCtCAbJwf8kRbs5moRo7gTHTJmApgygrpms",
  "key9": "3L2DBButQJr5HoNFu9MJhPhm6W9mA4x6FBRmxfc3EYodwGQbsJPfmdRVfnrTdJN2VLeu7WdYaarb9nYtqajybuWg",
  "key10": "5GWo4xocMMgfjraHTKoEozuoU9rNa1ge5YD4zQaTFva9Fhuzp26mbeQrLtE8zVmbyFdPdfKecZ3kvyUze5hJ7o5Z",
  "key11": "3SwBD21fxtAxuDoTWPbBuwZ65zKCdobNC7nh3XNn1B5oSpACZVv3pShuz49hr8oUDjbqDYZzXqkLUmzYeiBzG7wy",
  "key12": "4tsjobV4aEfWJGCxPUf6pEndrXVMERx2kLFEA8SrEPamVktLtnJCDkf9QWukiQjsLTqLwqYihH2iSTptNCnW22kZ",
  "key13": "gicqGbviioCquBr4jDyBZuzy5juQyCSKDP1famUgEqgYZummZYAD11ZAu6rCUSaXfSHTWoqgmsKTTRKhgU8tpVp",
  "key14": "67dgH941jKA3Z32CtFwAUCMDfd7poC2Ji2nmyp8gJpfnJMZkTzUmoSX5UbfCqw2ud35dJa4jiyY22zdBL4H3KJ47",
  "key15": "4yLwV5ZsuRg5aMXw5YT3twhbDFcrB1NivUqGzvfSRwgY3MfK3bZf2cCk8j6sRF4wG26wVkrXknw9KCye5gLZzToY",
  "key16": "2hVgUjGYAZjwto53rhjceiEPQqRRRBaK4rQVzHVLsicRR4qa7KV1Y61MvEPCo7u3kxQ159bwnJ72ZdtcJNXsA6T2",
  "key17": "5gJTj1WmxgPtKCraChM2rms9uLoU69dq7A4fYic8dAtNgHvmmP98eowVQzGtRWs6jkFRvA8KcGcypfbkgtLSN3fD",
  "key18": "5cHbUcpcdro4GrPatama99TTjmuyDWeDJ3c3YgK8YFHNcxxhum295VCyhaTurhBkbsparDVqyRWc3Jku4182C7Fs",
  "key19": "5Leq6G8E5Yak3orMsT5GHJVNAwRamr6mkxgHzwwWyHQWgUgP9vFcXBSAX7DEuqJvP4RLez8zUZqem5VbkmqUSdvD",
  "key20": "3XJPB7ah7cnz8tHx9jkVtXH1eAoJC3hQxjTWmazYngga6ntUQHbrnnwMkvXkadJK3HEHoBBuPM8yV1JK56zrw1Lh",
  "key21": "5YhPhZa8NdRz7rXLcgj7ZUc2MZSsGR9qVA7XbstNsNeZc4bMb4be5b3mCfENvdYgyd5qdUj9SUtNCuPZkE8PdVxq",
  "key22": "5ndtvHcAV4XWjX4vdcY6NCWQK2YnFCTkEWF8FD4ddajQ6HdoWMXryzd3L7p5nbsqEpPyp88w8fXcnbadrxCoZnWc",
  "key23": "4AZm8H5dKEMWgDNbvv9kYfWXFW32gZsEfBMgd9W1w7ZGY2tYvQLqTBC8SybeAujDWybZ6L3JGkoXZxFio6qatZcE",
  "key24": "5A7nM13b3tujWQHHfNHuZV2KetUZgApTzG6jL4m8QKZozhxnjaspAf6xN6TeAKR7aDExjjCc79vSecG2dYcHsmv3"
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
