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
    "5oiWYYCjaJgfd4jmWARvtxxnxmxdSwGH73pr4BKSP8W39QzSgyyDUMGjG8fLeq5WCEe2wbEnwdt5vNd4UzhionpP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wMsTwaa1upztyrjxdMihEWL7vzYYAFixWjiMhB7bkwwADoG6g72ymjsxpnXTdf32QR2knXAUZCaWJ5nyfCAuLfo",
  "key1": "53Yt3ZDrWnP7GMz9rRrPZuVxvYJ1LH6cAfZ2cUgBwNUmXMpZnJB9JETmACRtgQrG7YHtPj4a1725Km6yq8pcdirn",
  "key2": "2buTv3s67jrxYBEN2QkR8ZQZX4FswXCeaNMFgXg7jd8F5TFQucokD1GnDVntTbjgozXajBvsdmsaSJwjggA1SJ3a",
  "key3": "3jeuKoa4cmZ8QcBJJQF3N732zHQkYvYuaqY4btnohzjNek8J91gfbFr3q3GgNudRXNmjZuEjsiNcaWJbyvQektEp",
  "key4": "4xubw3hQmgcV6cXhmTBnkKxQQsra6ir7pqYSkwBwLSzcNdAvkzH4ESXYCH81RwvddWdETzm8gv1MhpgiRhkFu8G7",
  "key5": "2Z4bDRTfwLNQpJKUtT9BZ3pn7qqH4876VycjfdHy6kQKHvH7ivVt8jWKqkkd9JeA6QzJQpkBE4b19xv7vE5WQE8x",
  "key6": "j5zojQhXF8wfYeV4reBugARjXxt9X7kK8383vH37ATtzP2BfvScbcPUL2v9u7a4Z3momvW8VMMRJrHhqwDYNQah",
  "key7": "3GeUqW3TeyCxWi46xm5GdtNJdSC2XqE2ZteHsUrpekSGZSfW7q1FFxzYNwgqkD7TkcwrmZMfkRzyH9jRYfF1x3zS",
  "key8": "3hHUAQH1neMA5SefzkAqrtY7vKwdXXjbifMLB3PfUYXiSGSJNHSUQ4jQhpM5r8UyyLf5haVyLvMGVxxwrtLXegTC",
  "key9": "3jjGjL5ziwm8scx3U9QpmpvcBVHdh278VgM2EvNDcaE1k4xVu5gvXvm6mysDAXV8YAqDwzqcqC9XCCTKUuHsQ7Jq",
  "key10": "A3Sm1FXmxevGFQskdZrNL67v5xnB3KLbW7PCTezEpFrJ26UityJanrRzvo32iCyAvWqF8E8kXeTUft9WgXxSYCq",
  "key11": "5erRtvnKYmZNdhjGY4guE3a3wqv6hkYbRea2BAKGxGf5WyHVYipdRhf5NueVSKw7bjqj2TQH5fAbid6HFQCymQT8",
  "key12": "3tbJNm9Ge4ybtdc7h7nxujVAkZ54oUKY1gL3D3oS3g1C2vrjQzfHzynDWjB3V1B7mKon2mwnF4wD51KsDW1gGDbG",
  "key13": "2638uC5etqcXZh8QbqjdKu86B5tHwiWY9Fia8UZfuBoAaAse5LGve2KQn4xkQwGaAcyarAsM7AYeLDLoyvbFpKh5",
  "key14": "53VzkhzBByAYtHg1wbZ1GBovnFuGLi4crGsij5kDAYF4vz4mxB8cL95rFxnQsSV46guCtxGbakX6dj96Phpmd2Fc",
  "key15": "5DTvqHHdiWgr5dYMC183sLSALx6ssRzA4PgvcxhMkJihks6tDF8PVepawT9pA3Sxu73Bev9F4bacDdKme4PJA4gH",
  "key16": "iybBvY1xMLLQRbvRQyTJgjgZHRiUPYByHahrTWXhfAhYz6bcwdAvLsvGgbZDCjGaCtNJ8GhAju15gysFAvkWmJj",
  "key17": "3hepjMJA5vbpM53EFnyttBrUWjqLwuRpMaCT4vfmhPzxLxn16fq7DzyVwHi4uATEHsKyanW95qSx65NzXL1uV2br",
  "key18": "4aiBvMzXrVqfQXNwbXDz5xbMeC9W7HkaP2D3oR7V3r2DAyYzpdg6QPeK8V9oEf48L8rJkdzvkQcPheY4NRCENc4c",
  "key19": "3quSc3M8b7jMzNuUBhVkLmgeXsP2ie9ZxKZQSMWiWRfLktBhgUud8iXNn3nnLfdTcN8FxQedHJQk1MTJBWtqxcAU",
  "key20": "5kEF21UZqve9ixq9XHNomZAacdu4eGrDmSLjWYdJpAmhyTZ4iYfZDJZ3QoxKPZV2KhzDSU7KHy7hUn9tbUAMexxb",
  "key21": "36rCik638AnKSUfvU9SBpJzTrMLFgLFkFt2W3DAMvTjC6wXGHuDy83mxrHUwPesJRudtnUTfPF3KTjaSL1EYoPNQ",
  "key22": "2TdpJ6Wiw3tjewE9hXk3N89bYCpiS6hxVdw2JNxSjcFbTZm6xgmDJj21tERQNqkoqDJNtJqiv2s5rABdperc7Dkq",
  "key23": "3ExwEXi3bJwvPFDL2dkYZrsSJBHcwPLuRMZKtzUJgn5Xqn22yxV6sQRERMpcwL3NWzggQy6E6sVKdo5tsExjkt1F",
  "key24": "4BNdS6D5ybU2JUqeWKQA91WqQ45xpsxxRYp4w5xgKTTseRCa69Vfo5R3opAvGsU2Vfi8CtAE6tW5wAyP8RaR7CyE"
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
