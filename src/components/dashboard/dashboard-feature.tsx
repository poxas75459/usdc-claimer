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
    "2AKj1D8zVVGQDUuP3SeMg1pvMXy6f8cirhzMxY9omZkCCmfvELF6WGDQkscPRKMs2q6QvoF4aZowq8EZd36VBaxt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HT9iADjw1WmYkVjEAvhbWrP6A1dfnjWfL9eALZJRmJR2P2GLmjbiCKKAawcYoBUGBcEZFaaJ7zU4Yz24hRMHKzS",
  "key1": "2xYrvxRZQ6DmxXAxngJzcNEYiCo6CGy1aMtHo6LLtMMw9S3bbS11G8Fk1CCRJ7QKzvKiZCweuPi3LnJJVmqhtSwW",
  "key2": "3DBpSXJxq1gnD6Sncde6a9yrJgUHNP2h2qWDHvPxVxXd3yZasGLhY3gsavkrWDoqjV4SMpQxMaQD2cZEPwfX7Zee",
  "key3": "4EibRVJLZ2TJnomj1LDd69FAkTtgygdJH7fY9gAvJWbRrLECp14PJgGrWBVpSVeQjoKuJw934KtAj8axjC6rFA5Y",
  "key4": "316PL2GXmtCgmqSeXkSoMadqCSUZHWr2kWsSVrr6DUMgyHJ8aieb1iCgp7GrRufyBQEuMPSGetxhQGD3vAEPnD4F",
  "key5": "2pUsbrnfWMyb8XgjQ77u9C8DhAF6c657Wc7gPp6HSL94KxgSkHW8LKVrXq2XJgec6TLLToBGRh9NyRrhHBvB9xfe",
  "key6": "5rWKQsCBngyE3MouZf4foH48sogT3vpYPsxTHWAStzu9tSk3nCFD95Xf2RqSdeLssGonYpsScbBt5g72iQgcKyqk",
  "key7": "5wHmC8GdGow5X9dYXKUaJ8nCFATk4Lg8dkWusyuRAgu8JsMxfvVs3dxwFeEoFtUjWrcAVDyfXd8e3KuQdZbjYgkN",
  "key8": "2Cz4bPod78AzHVpJ9sY7DszPCe3TndxjGyCdQLuafQdRGsFmDeQ5sRiCJjr71KPVm7qY4ycCu6dKdXeuDSoJn8vE",
  "key9": "3bFD3xnyQoYiJFiEsPKdXKgViPxqewfUn8LjfvqL1MAAx8NMRhQLBtkdXELVQo5BeeRJ9QnxUkN2Dvm5fztpzegc",
  "key10": "3Eu1auVGwVZfFNDCSNr6WosjgARH2eZJRrGfv6ET5cXvTL9AtMSaZ9HKJzsdiVvbQgYNSpw4vYjpRBBZ2DQSU3LX",
  "key11": "2bpnAqmF8HSwAYEicmxG8dkg9EJo8Rcmvh53Q7N6KjLXzw4Yg3ZjxJypP1EZp8mmCEDMo23qxFUeEbZvn5ze4SoT",
  "key12": "SGzZFoWYtAKBnp3kTtiFnw9oZQUJVDcocUR2TkVQmBKTM1mfiUBEWx6vxGgSTjwigryfoPGx2eKFnGch6AdNw5R",
  "key13": "3n9jkx4ReEP56RsakKjxHwLA5kzVnrximGLPnpwZBRyNd3XnT6N4tkbzMEnT2uVdWYwHHmuS4DVFcxpC4E6i799F",
  "key14": "He9u3JYdMX1vZUhgwZw3E4HRVL6pANoEvpm3p8LtjwaVfaTwC7M7ZUx5LThx4HrYRwKZ9wLU8gqMj5mzez1ob3g",
  "key15": "5SA5FfT673FKNu3hMp9br5D6Ueo5NyQPFCfrTHf2knFWC539PrrvT372TA7Mq4SbfTfwsfRq3ZdLDeJP6u8sWdKc",
  "key16": "3KuAoV7izdvRqVLK5H72ttm2ShJ871N93rZxyxPgQnUH4ibkhctR9beCmLbgTWYxCeBZen7YmQQ6yKDxZZFENb5C",
  "key17": "bXGBoi8aTk5LJZWZzRgJYxkhPiiMPdk2y1YS7e2jRGTs7LNdPyzDFBXxQduyhbKU6SvQkG7BoTpYXLVxdwDWB4M",
  "key18": "xYT6WBD651DvP6oaHc6iwtyuLZPCx4Z66hLKDfNE82ohtoV31rEfJAe5JRKQgYfsRR3Js2mjtaCU4b3oSw7F7w9",
  "key19": "26Ajxf7MrVhtWxDdsiQmexWhYJuZWFSsKENBPu1Ba2M8DmuJhWkJK9LZdvj5MQJD4XFSF8DH43LWBiPq6wKqUg4y",
  "key20": "5gAdYNMRAo8Hv1xeGRunnDa7X6ofecb2qKFMxz6qGBysbFnpqzTCcTfY3kfynmysHW8D7ATeetRKcPxm6uHVmVov",
  "key21": "53J7GabdYBjpszEX8VxLqoHwhHXG5vGFcEM2eCnwXBnbqvRoKW7HAWtkQbB9fV1TgCYi51RVQDd2WUWqpWHFps5J",
  "key22": "ukVrhP8xNrnYFsQpVb23b5ibiHjfc5BG5hoySFV4h2bovi2B58mKLZrmZjSaty8UnhyPLi7Wp1WKE1pCtqVvYZk",
  "key23": "W38tpuYAdS2GA1AEC3MwUK5e7z36eUd6mFu3TNYfUk1WiimEioeCx9fkwL1a2iAqVMiXbB3vF8maBFQHBr2MEtX",
  "key24": "4HAQDrcBtR5iNRmTX9Kvi7LAfKTX6vAV1DTV4Ng4eXUBc7AZTTBBWSM1VqVfwh2Jp1xbJVy5kffUgxkMqHGoHH9S",
  "key25": "3gBbnSuaMYM5P9JVJK1adxjxz8S6WhLxmh8fs9DUnLJNdXXCmwuer2bYGC8ixG2zHMYiYX7rYgmbnTJsNoet7RD5",
  "key26": "4he6WMKbJnBhVzpTsLyNAeihN8iYxg7xAi8pH6nGNxHmeJ9qwgLjK5SJw4B3eVxKFNatHCLQFYyNvCeFBCzhMLsZ"
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
