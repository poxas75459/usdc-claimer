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
    "4qZUsjp1ip3Yx4kKFkAtnZ5BS7vREV2BfL1JNivyb5nF7oxCz6Z6vNYU8rja1oV5F2nQ4FLDFUuRDjKGkJsFNWog"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3osgqHuT6C7A1VkY5ZQFQkeJfcc8RSwAj1nin4MzBrkTqya57vMPDohREiXkfyPoDmTPvDKAkFfpw7GFkVd47qkV",
  "key1": "3BSPPhVhzDy3eqEEH9yVhJpdQUd5UxtFPckf6C9Z591ex12TS7hz6Ai1fm1rYqUcN8DvH4cmFDkviSfwR8nV1hrP",
  "key2": "2bSZqxhLo2kXZMN5K8ea94QSLmciXMcuoPWmeTHpuBavzkZLkiPzS1TthdakDZ4yMyjPubm7sMaXw9LySv1eDsCV",
  "key3": "5HzSdJ2XarKxVbDbt9iN2ZiogAF4kouXnAjGmUyJEg5nH6nZSyN6QFWGkkyazkqKPMazbB2fSGY9v3d6KrXE3nwF",
  "key4": "46MT3d2UzdjLuKLbwuRrrqMxWEFEm4ra9nXdLcj8HuQ1WNH8C2uU4aw1xDvvPQKDeidKor7deajXtdLzLnUYJF5c",
  "key5": "4KZQWqBB5V9QkY9zYuCeTT7pwMgnNt7Egw3XC7rboSnfotL2e7nHV7ALvU7rcpQvC4CtRwcyFR2gUgzgLJmBhQ1Y",
  "key6": "66dLGDkFqGVUbeJWZMyAE1EzLN5QUSaDqYZS4xznJ6oNVgpKxSgLyYf5ayur7Cbzb7cgMjJpxjMzqvwZg3cicM2U",
  "key7": "5K34U9JSx5CXVsmYwWxvJQctbyYLTZG92HnQDRvCRMgfDyw59sJbqqwhAp1VjmAyruu2kgTdmGQV5wcSfNkhhYFD",
  "key8": "4QbfDRdSLoCpUqCXk8uoffaWfCo4QZUo7vXbJ5fx7RqwNE2Txe2ixVGngSJKMNdkpxqDVJx4bkPrR9uugbXEnHo9",
  "key9": "pFoazGiueiZrn5N2PVqnLGrvLXGrTnJCEt7GGk9JNRwBK6HhFa3deg733ygzZccRQY6of22T5Yyu3PgNYQyKkmm",
  "key10": "2dPdhnZ5cm4o2sN2kr9SJzQ5sbXSpSYykmouFGoKWA3ZUvck34ZAQnE4epVyFPDYonbvvVhSVYSQhbY8LSYfDANn",
  "key11": "41fBeY7akbNewzk8wReniuf3tYvrxhr8DyFSD6UFGmxpbZM2b597NZRQjmsyKv6TTAiKo99bHsdbE7fPiJvSjvay",
  "key12": "4vn9KQgXBYz69p4Qpejg6TeyVSb4atZKuYVVyC8n5qDG2DbsTYagyVChhidtFz89zScWPHoGunckMBJUYxCSqLB6",
  "key13": "5Am4g1mEcoLNxU3uf7oMxudrDF9xpjwHmDYo4j4f42veN92gbmAJPsTAR3esK7oMcJNDKkqPdoi9P8FxjDLLWwz",
  "key14": "2PG95V4UozRJkJPMpbG6ARsbMcrxMn2oRYoxSS46RksTuaZb8FGdwjwxEiFdZZGk6hFhwWJiV5RpopSkijZxU89F",
  "key15": "Lg9EKWFmnVU3WZLQkAXrR54uWdUrL4MruD3Df8323tTWXueY5VqZEqtrBPzSMR7bzNEbH52n2pUsER1iVp9oDXj",
  "key16": "3Q3DhsPzk6GU4LPwQnjwH1P2hmzA9iCJC4a2foXoDw3L3yAbPb4BvGFgmkpJbc9Rf57VtADZACYbh3prZYUNx8vJ",
  "key17": "4JsRqc9c15HUaefVDdyaonSJXYN2HEfmYQbYzbmdpwvaTizvZcM9GyWSyZGW4zH3jw9PCWk23TBcGorY5PpkN75M",
  "key18": "3bGjCDyWXJq6F3QHrB73drEvCdDCF6235so5oa3U8UzBDExd6yQjpFosXffj76jishnPs6zQzt5Redd6GmzcewwF",
  "key19": "27NYwMgrz2jKh3xMa6qvBAyXoTo3C5qyK3NSvPSGbcK6Druvb969wjDcpV2iSRp692xEBtfW3PrBtCHMVoxwjPYC",
  "key20": "26Xb3CQecz2mWBrZZVQkpG5Untzii5KPEns4zRMYTxSfpGVJgzUPux5ynPyndhrYyVshruRGi3QfRaEitQJ3rt5j",
  "key21": "2VGA5Nq1MUF8x9aUaLVthrGMpdgYew7pmAnQhjLX1LMsVo1nTwcvZ7uUAbh6Qu8XZhA2wPBFyvoptUKmAQ3iAicb",
  "key22": "fTbUbbvR25K4CbdFqCohtkmF1kMXrJyPB6N42BjH5WBSjMutdWzeyxqFhakLEFUnm23R1ygmbWu7ZreQcsu6Uan",
  "key23": "2DF1MfdzSBQwUZVor69RL5xh8gnA9mVadX6K9vGqqNK6bGPJ91HNo3G4AgZpaisKT2Be6qK2YgC3NqwQz9E8W4Yz",
  "key24": "4JshMxDdFXusj7yzG2ZZFizQgWr1L72i5qVpmpxb7P151ijsjWYjF1RgGp9hMfbRD6YZfCfSkiitSA1qGRuKbHqj",
  "key25": "5Z3JQ3TDxL2jttCKYCxxyn1rjvtuxcXb8yCCChiy17WYHAxjR5YWebsHjer9q94BqJa4JcVv1vugEziuM1yXAcef"
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
