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
    "5AruWT5c5oyZTDAE9d4HE2kuoQU92GnkoPv6LEYiCaYZcNYREHFWmrcebnkHeSKmhkmFo1tHW1NkTBcFgPcAf6m4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hHQGQmBkoW1agMRUmmzdwqm7LRQpz3WWXUjDhZGHZEKahVqeCm24VJkXfJaCGs6VeXCqYPg9rU2p8WtzCefNYuL",
  "key1": "2uBnsiJm67Z1fZL8NXqhnMuh7BuukHC97G3svqALtXqNehqnqzRWRjK8yVW8ZkNysC9mMLL6ghuQ4kmPVMQSqMRW",
  "key2": "5K3Zdnio8KM1sE4P3LasWQaKj9PtnfkXrtD1sZGvWfm2XCwocC5EBvDbrxGWzPHGPG1YHHW9y82MwAP1zYekCci2",
  "key3": "4hfbVCtD5A5ytWoqVLJo2UQeYweoEtWSpBju9rtishVn2XAVwDNf4fC31ab1gRhtCvfMxeXt7nunqMGL71L3bKAw",
  "key4": "2L62UL4PZKFZr5UHaayyeZ5Py76XW2VNfXnNJ6yzQ1BMoZVWibSsjHjmGGeVSnzjcWEY91h16n68azcdS6qAXUPs",
  "key5": "26PgDNWFm17AfZj6XJm4LXXzbVSWPBCSGWEoituqYUjxcnacg1boy6BoVpANTwN44jpt7VqSKTr7NWADxujVQKe1",
  "key6": "5cPiQVgusps6trHcrsk4mXKvoYL7wmnFxm2ZE5ZgsyPxC6i24s2YMx5rAaJzoXe4PEBXTkomVywuKfwzYmfSwmsf",
  "key7": "3TUiTxVGoLnzU4JRZ1kwNW3FzjCbL6h8Q7nTpNXCgTvEkmxyLQhsB5JqUM4eFaJxUVhDEoYqGRQwPVUs3fdePr7Y",
  "key8": "5UsBUD4LyP3nmMwWmxaC2QX9gnt7xSTgEgem7ofB8eNzGVQqQ5LX8ZNLQQoqYVXqyjgzCbfVvBrxQ5NftwDCyS3d",
  "key9": "3zFg78QpfS3PzUjXQDsZtGtYNc4uKhmUDGZrEY4ju3h9WjneWV83cHgsAWbUELrmnJgaCSe2cd6saEu2tePJJwLK",
  "key10": "3wfsxWoqLvcUWSG6p8XY2kxqJzWCGmNmXV5uNJWX3Xx1yM6RQzrWFtHhyULNu3SZR619JvM5H5eGbKNQQBq2uW56",
  "key11": "4N3cHbYNsfK6UuotiZyKg6Qmz9XqMhsgPi2VgNC2NCxudd2J25vMifjFrmTxa2TQipKZdePoeUZ7yMk1tVAXrmyJ",
  "key12": "121QESAeQyCi5yyowmNX9YXiScFMJYnUk1UAHEmFfiJFi6yW31JucgNtVdCQsVUdk3ijG4QCbGUWQmCJ4Qq8CKCy",
  "key13": "249TuPvFdWktjvorBrRYWn9bMXaRZnnA5LQ7UCdfk5tdxrupkYo1kLAUrrpqQxjuU7kx5HyUzwmnoXEgHrmYYFoe",
  "key14": "5RnDAsrES8Lj16XYgxQJXF33Mb3QjwYNBQp4pQpjnVVMgaSrzk71q7snszr2oJGXjGE4ib3NNpruXxgiRTGsN3VL",
  "key15": "5cSYEjHtgguub572r6pXGaLW9QRHhnPTQ3HGduX3udmbcKsDdSsyk7MbVUqE7rA9HRFkaS7fCcxNyapqoLtELBmE",
  "key16": "2E33cYeXBnayy6bMEj4HGwXrR1QgSyhtS4Br4VPYdwjXyBbtxVb58PzmxZEE923QKjxYgB8QK7urn3D3MbWP6kCS",
  "key17": "3Vyk1WXrjewr7LS3sbQr6ggrvLFeHwPC6XLhnnVs6i1p1U6w9EMwu7nJrArNbqoPCXoJc93CzXw1VobptEhNa6DW",
  "key18": "2HVydc4CvNKdQp3h8nKphvgr31BGgHXnY7MdHvJpEW4x8mYaL1ZarfSfkfCW6BwKo3EyzhfLsjsaadZP4wd1iyuB",
  "key19": "2G4XgC6NA52q44x4v6YBX3JsFpSF9Sb45Urkcba32W9vm9264JQdeHEZvnSPCtYx3izK8x6V5ujSEkpTopWMHREE",
  "key20": "E33ohMPtyXFeC34Ey2p9T3xK926sQuT2a2NmPQRT1rUEs3RAc7sAwYPLVuxo4f4tUK1WYFsJVYDx3j263iDp6yW",
  "key21": "4cCL9sdqCPFYPaoTexf7ryv4QdcB7cKNKPTxGvYcU6RKoHJizDCYZFZRqTzVoZ2o84Q5E37LDUB7wHrxGAogfCS4",
  "key22": "24ThCi8x5oGowKx2njFxb9LhuRa1AKe9kiY3jBM8Ky2BPZSW9fpWbs1JbnNXsrLahujSak3fAqnGxG5hk357kMw6",
  "key23": "2DJbcNSzZtHDsf3kXicjtibCXoGZnDVuJQHjiUajYHJgz2aAJE5p4oEfNwiZyq38q9s5EUq842pfexwJVfaEonuA",
  "key24": "5pGYmAaNqzXmouchvfNrZSvk9H1VxkvjZMeFQM3VCBSmLjh3F6UyY39emKut7dDXTH8F7v4moE8sXNDGCYW2dxEd",
  "key25": "5KSUbFZAwAJUqYqYSRmnGjw2a9pMBiYoWx97HF4cqMASwZUCyD5fbG8xfkSKbAiFWjpd36WEggVjUPN9metW2udC",
  "key26": "3qV4RfHySZeamGcmJLPEqhMNSfAAk1FwWNagWHu4GRUSDaFp17rsA8aqzetZW7xe1vGeUd79NqdTBAgYuUXKseEq",
  "key27": "3X6QjDgLuuXB2FP5TokjM5rmpvMjAPpmgeWRt9ECPF4sxct5UKJkv6fzMQSMG6PCS2eVo1CT1nRvSx5ECs9ZTFD6",
  "key28": "3KuyPguPUwbmcyQK38qxh7HGu6za5aZXTw8G4hzmkxRfVNm6NKDZagcCKCJ3ZnXTY5WaqXm3RxALG8g6QZvV1cck"
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
