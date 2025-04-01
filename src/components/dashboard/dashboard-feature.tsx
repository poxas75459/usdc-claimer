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
    "2ZNvkdS1C1WWfzL3viwLbPKfa8niU7CqWsnHS3pysUJFe4Jd8YD7Am6yyASXD7Fqd7B7bs3GtZqFshNmoXr6x3nH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65giqjUQRks7oVjm7QyB6pe7zYUTUL19T7LECYV6pgyjMxm91o2F4pZWkcyq84yTPy1vL474WwJUUgPyeU1RyYB9",
  "key1": "3yN65AeQnfu7dGP8E98QFbcDKn1DpzRbefo7UB3wZk55yoN5YMsNPZyiTtgZK6gxRMHRTDPs28TazRq3PbNgyrkj",
  "key2": "2ZVTs7XXkbCuUCw1yCqRVU7pJ3bVXrqRSy12TpYq215s5HPzGwH6JWobPj6Pdd9F4Vjfgg6yNSEDJFHGp9nQkYX7",
  "key3": "4AV6PD1cQUMYeX2U8mRwxxQW6xy7pfpAfdDUnH1maMi1QPC16DcsN5SmwqmieWSJU8jH8f6zhY3oszU9VFUYkAnQ",
  "key4": "2MSr1Q3R3uTUw6nAbfQf7yFcxoJLZJqShTW9whREXhNt73cejkuat9KEzqBSYpWK77hRVUkthYuuznbFyzAXXnLU",
  "key5": "4FuSjhNTSKcfsQFKiPY93Z4L4bpSvCijDooB6Koqj94bGPy6mTy3833MrpiRk9cc6jS3UuGMTq6XBsvUKSFoWUUc",
  "key6": "33mbxPFRenkwMKdm17ePbmhPJCYwwTvx5ULiEXpKhVYTLfr9BdXxZ27t5TvKeXiSthPQEFQAXwhwapCf2LoV7UKD",
  "key7": "3E3xHUdrFDeqtWXHdWXpNjQ1qhVre3MToyyqdRwgE9UHjE3FqNkNc9JJv1HJLuyAVxrkxyWgHJJhRpftou1iUn74",
  "key8": "4QxAEPyd8zGKae6oNaqTtxRKmqdRE7qbXr9CCXmH7UzhEcK1BThUukYSYoKQp99uC9vqJyT1hrBVd3fzpDeZenB2",
  "key9": "yCvBmvQAhscLCgzeXd57LDHrCtMUr5ScZMXgUGAUuLUWtykj2MdeoHm3UitN6Atkc7Hg9gm9nYLKiF3iBhvC6NL",
  "key10": "ZFtrwFXV2a5rW37Q1Qb6VeLENt4NueYNYQqwkSKqtEYPVCXa7ZYCs2UsdoWp18FFfFcQ65QMRdgpZ3NojiTsHeU",
  "key11": "24TKtXKdYjib36WLcivPzCQMEaatNiFXJ2nVN2WWxPC2BLPF25C9iNd37U2vC5eLWMvB6doJtsDbhj9xXrqh68WF",
  "key12": "2KbSu9pMyoMd5442dFgqimsPYdb5p3DjGyNL7ziQwb7fi19HAcy54UenPhv2jyt2sa5nBsirM7TiiptJfo3EPiYL",
  "key13": "2b4FWRKyF7n6tK8Ruae6AoNbv3St8Hosy5yQtpPhEwA6cEJkBnF3RLasGNuXugyy8zVeBa3ya5XjL4ZnGwBtFLUM",
  "key14": "8AyavkZZHQ2TV66zhftdu8xv8C8MpCBZScpWZCKQo6u6B89d5XZWqakTTbZEH94QSGQusRJQAdKKgC1fF6YiV2A",
  "key15": "5jBUiJupG6j9LWY2CYTRc7YcGgQVTpFYe8EnSyusiCjuQgqbHLPHdGEhqDwpcc4EbLiKCk4bK3f9jtg8hmEVihm5",
  "key16": "2TYBwfS13HfNCp1z8hePJpZMw4x77znsU5ZG5hyRPPuv1HdxBSwT667PmoyiB5DoBzf9kbkr39ea2rw6bZJ91HsZ",
  "key17": "5qdSgJvbVeS9heewq4WDdkdvip3od9FbQx6W5YWFnDaa49yKvKCjNd4zgxZDfp5kmBtf1UQCp9rRgrUAdamW162Y",
  "key18": "4GJ6u6gZGs8uja4J2syQqrn9caRT4canaYAKLtFX9gMYbDUFBhvzSAmRVREY8USbkrmcKLUL526W1VD2htUKgr61",
  "key19": "5AmWLZrnxi8aBvmDngXri87X1VFE4k9ww99d4e9igfzh8JVH4gABG1MFMTUQgriFGCpPFqPjRxn8thDYSdRGwG8A",
  "key20": "67YoVNbiBwycYmnHQoDCMdoUJbZDugC6pwAHRJpfncv7Zhvs1cH5kzXqG4AYYhBmmqtZeVJfYZ3bmC152zCwcz1j",
  "key21": "GQh31APqNDW96drtpJEyVhnJYKdx7G2M5peFaTKdKQ3QDb38gs66Uf2wPGS6WagTyGbzqNmTvuU91fTXCWPsDkq",
  "key22": "5QTSLpRe4mBLxFK7FYMJdVqRwqdofhstaUMjqkLcsF6DfK8mK5N9sbJ3wCook16xgqeQyQQh5ko79CwLh8YFaUvF",
  "key23": "5t3RXoWcjPoqxvcLSnvXPUhhXCvmzDqTwCouw3mhZ6F9bp346FDwpeP9t7m2adZkG9Xn35q5uv3iJaTpSgagpmHg",
  "key24": "4eQu2SziDwanHio7bNWKPudsMPXiwmcfoyddPa1zPdfvpeV4rixeTgVfMbhgdvnT7ALn25TvksNJ8pnoDm15Dk98"
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
