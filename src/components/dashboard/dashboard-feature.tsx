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
    "2TMutNwoHPmswV5Z81qi7DF1BmoJ16oWnYDFKm6aBrxbCooPinuzT8LwgNbteYN3vEdmpYQu1wwZz4KbCPcXMgiE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56UNyvLoyd3s4otqhJR1zKoum2UhDJGoKtzsDP8zbNKW2jTYCA4re2tp8scAmFQjM8r4U93ydNAA5iUaULzb7Dp3",
  "key1": "634YSzjHCSDWw3TJjEN7iMzzxo1KaKv6HZ7mshR5suTmQQ5Z5GYsu7447HaVvLoHKw7i6syXXXsbZ8WxzvCQpSf",
  "key2": "5oAxxdwuj8WAqTzjDryJsDccJmD2RdWQnAk4x5gamMNmQZ8PRtzV7T826i48z7uMUdJZQi9hYWtPyxe3phMofBvd",
  "key3": "i9kuX8FjaNXH3J5p7NCE57wWDSHQN7djvCyjwZHKxFsQkDGLUXkjdDkfPjYXQKN25jMwdE2tAcyTgPbgoeexLv2",
  "key4": "2fLcbeEDk8QSCwUKU2YtXGvL9D8sEvGgwoKvBPZKF6ZAgPenYcxWj8VL5nfXwmmgEsTdXA9WXKmLYET6EM2PprQD",
  "key5": "4cNapanfGPoH2MNrSEgwomvRZioTKLAk5NCqZmQHYsvWxmPRYyggYgRXKURnxYtKk6n85k8GKzZaq8xcoriVNwGH",
  "key6": "jBjZdx5SYiRppwFJMK3uTxHrxz73chgsmD292xdDj4kgNwJdLgQW2yNMMwNJ1aKo71wk4N8rsbpFcxa13JZ5dke",
  "key7": "5ZN4o3x8yLFJURxQi4P8VVJH7HbvqhpSA2hgiHqwq7aCt2fR2Jv2qDTywuoaxrgYJMv5grmw2cWWonwYMCnVPxb4",
  "key8": "51WMy4v3oPfwKvGA4Dghj6q8bS6mYmWNvHaZh1vgv3jmaz1Q9A9ziTkLPswBHwg7vtVVaTuu6b5UnqwrKY4nbDw8",
  "key9": "3a9zpD48hM8e5s1u5NXV8qorsCPmFDokimMv5KVw2BhG9S2rAQu7t5a5VLCWHL6DdLFkwQCFVHZFtgS3kYiSQ7th",
  "key10": "1R7zeYiLZGaH3vDsCUMjnxK2dUEkQEBQZnwRJbC3tmv1Z9DbJwBJSkaaGr8btp9XXH3E8eRCf72RxUbLXhUEtht",
  "key11": "5q4AwS8HGWQEAqdoE9kuPLkjCnDsi2Ty1pZbDBYN6MsdSCSEi9USVkAf34MBo4Gv9464Hiy4zsq6ZgShA7gRfnfU",
  "key12": "4S6brP88qrfnJTYn7rX4xmVnDvx2HY9YnQXFZQ4LgNs3zRB9uNt7dVgvvX7tParwDABSHfSU6WjyHaq1T18TJviW",
  "key13": "3cT2W1akzD5rmMABfpA2RJCHHYah1WJk8nxyzWtvQtsrmFK3CHJVv49pWENSfAwBoJBU6KL87k7RAXKHCp8SJqVP",
  "key14": "2XysK8mYfARsMMrkPToUpVgMqRj5sUBMt9xFWoEtAPxeW3UhxCbHeGdemD8ERYJRS4H6fzBJWQgyLQ7vcXoYGPxD",
  "key15": "3HvmnaRqSn1EMyERcbmMBRUqrQvhfDW1XMyDsiBYS66b75S2t4FKhkjBhodgTdsr2DTyjvxPFT7BDssG5wFR59gP",
  "key16": "nU5WwW9po9WNrMGCgX6XmenTCXpPZHPamXeQo1tpZNigokk4t1hZ9rC8WUte5fTwxRjXY8cUpes6DXiWse3GV6K",
  "key17": "2NGLe6SsRsLSWFFqA8JAgTD8Z2rMxvKrwV86zvHL14BDyX58HjTj7dwdB9VV4cdSQwwv7XCDE5p15N7ova8DiK8v",
  "key18": "4ypXioRGpXLq3EssgFxc9tSEGcLFzVUKfEhEjA9tQ5RqC4djcowy6SSKy53ezi2WGoQt1jC4X4nzdH4mCSMFgok4",
  "key19": "3pQ2PDsTKy2TTdoNCWkNEwtY1uShxeWqDCr68DA8WUkefXfRetGjhe9ghf2GzBc8BgSTMv2FM566ongoNUtcLHwe",
  "key20": "2tFTTFK9ksRrSowzTH4Hj4ScaiPqf233PcHxgpyVRtbxton9UVzGmsjUJ97vWDWYCKscyuerRhFHWyNCNGou4GDN",
  "key21": "2wWgXvh79rvXVRBahGbPArsdHWYTvZG6pVbh6LxGDw9KEePF5QiJwrmTCWdfxkJbgm3Se2vkkYUkxffzBgMWbACN",
  "key22": "34AZqVr7PZGcER5QD31tq2w7bxf1uKAHW1zVYawNBGxULi5cUKrTxKdn62pv1fZZzKjRmYggGztrN9eEe5aRaffX",
  "key23": "2RBwpFQw8jkgAJ7TavH5TwQkUFaxpcW2T122D863u91M6jLvXr456pvBJREQTCo9fdGL1RJgPGACB2TeoCL3jkuh",
  "key24": "5LvPDe3VMvMKe4MEbKjuEsaKzDnBePLqKwSn7ZuHsWWTgptkigMfkPCw13yvwZPbGFsBcBYhM2K1wecZ9C7Phein",
  "key25": "4VogVv3NH8voV2vAxaUFbKqqMN4nDA9JzvcecAJRZD3hyUuY3c5Jnzux9KhqizxHE9DxVKjtCkEt5BTLzLhgDH3y",
  "key26": "3Rb6hiBWr6jL4wqhBWL4YRjaEbsw4bBUtMwyP1J8wLiLgtMaUmGmTW7P1yp1aGzT1XsexUASk56NREm8Wg3FZ1EG",
  "key27": "nn1Vn6eXsNHYEQrzfGqzZEAPDoQSs5SudhYNLfixGHWtWmH3As2vF7EDkCxDYiLhfWhiJ6zRtLKoas8gjbyMh3X"
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
