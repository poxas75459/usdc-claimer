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
    "jVwZU5U9b6GJRdrroezT72jpnkptnJ6rhCDgmfE6mapfrCTsq8g72aDmAbKLakEh5TCXiR6EJNvHoyK6TCmMQoh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fXLrYGEAHcXrx2gEqDEYXXySS8Nabisy45bYGHZ8Hdswkj3sJo9spMBmu9hRjWPZD3G2dAAqRqCxcjV7pepCFky",
  "key1": "Kge5xJoYtEroPnhfAnXywa4GT27cW79wVCjZWoKQnaZyD76pgGaCSkTL1t21yygoQrGc16N1KqkPsMwsmXPLSxX",
  "key2": "Jfe2yh4bQcr1ikDDxyPXGrPKHHxfkW4ekYD1vWaiNZa7hSXu6Jhc8NCGi5yXmQcj1TcieM731k5xQFsxEp8op9g",
  "key3": "2sEVfCEe6DzJLfRfXh2MmBQuvopT4S5gtu6j1B9GyQ8CUw5NX4A5mvCAmUB9ZVo6fBoQ66qhDBnNX1woNnY6nE5s",
  "key4": "3nZ3o3r3MQNn4ia5vo4SsWMn87SXUQphcD84tJwxxqW2b2mJV1nHL2oHrFjro3STHUnViu9zzhaRy17TA6WTbi2j",
  "key5": "oefVoNMBVGXrvUeaVjVdxQFM4vQTUz8szvpuAzcUSsTxiSUJW3pWmRAuLJBLvUmCUEK9BcMqu8XTpLdZqdSKbRQ",
  "key6": "ETWedVTWZHf9ExYficXXGQkW2erxuoSza9xTDQ5L91cdowotZtR6Nf4ejTowRdsAwXmvjGLnDK1MfxmJmmt1VnU",
  "key7": "5rtK1ba2MG2o1L7TJ9iSaLK486E3Fn1Ep6JRhipjq5w9UgfaDKUNiwCfprCQs8Rc8YokHdBbq6FGPEWraRPVQhnR",
  "key8": "8DdFKarfKFZSgQKLwPrb7gj1GKobhvzpZkuoRbYx6VyXJJU1dDKDZy3FBqi9vtdcCbRdwi7KJStSWnnYCRynH7Z",
  "key9": "4vCr3GWsU4LpvcsQqiqK98RXmTCjXfxUhr4KDGJgu9WDjZ1YkmXuA2gzveSRiubCjqd4ZojUNhnJ9avdrrL6SHQn",
  "key10": "v86X89HvCzySnfg8VsdaAo75oZFwsTfrirQ1Pf8itarptQ1CPqbVM8DZNo2h7QnqbyMCJfeQgdUBDmyHJEe5LPj",
  "key11": "3qz4agbYtiLxRz2iWVPZxAWeC3pSW6JMDjDt5s3gvjUfpG1RKkmajYf56brS19iwTfLch24Zs7bL7PFW3Ej6AhVY",
  "key12": "5ceUU4T6wiHW7Agh7Mwu8mnyEsXStWKcHzvzs3xuucUqjoCqwiWAXaqebubVSZFuVNRRu1jNqQWM74c7jk6RK7t1",
  "key13": "674XyD9FRPqRjNCDvzF3xosVvng8kzoBnPgbKMiSikTqTWdgbz2h7qMPEZw2UHYWJtX7zasxsJaLwhfsD97VV9Rc",
  "key14": "3RdFQJZy239ZHe55JNyS9SFvsQpfiCwsKWJq1g3sppWnnFBqPtnoumptihH3pMPMDBKToCPkMysQs2D6SdyYuAb2",
  "key15": "44UTmo7G6iQJbdYq3uVrATgbMctq4CzFkgCNqzMSvngKfZP1hSDPLBdAZ5CFfp83TzDndKKECP1ecavoitj8L4eL",
  "key16": "5C4m54KGrXr1F1YHT4a4uKi2FvZtYZjv7ZmsYCPhV18yqAvXqgkbPaBYZgVyshmxZWmUXtjX3Q3hf3wkLJuoasZ4",
  "key17": "ph6k8oCy9CoG5RprHCp93nhjge655wEXwtBsYGJNqJnRK7fwiMgWMW3ZcFEtb2WzFGGewMDaFswDfUHuGrqhuuJ",
  "key18": "2yEKLJnxhj8rWcMSFjLtCDNk8vgD42BquKMfdvGp7GFZ2khMTMcFC5PdWjc3eyR9PTn312CJPAnTmGTYLQzZqCnw",
  "key19": "2cB2r2Ehkn89z9jo2C2hTFKnLS5zammApPq73LdEnKHNEyFDiLnG7B9HsC9iTCj1Q5mYrUwyLVE4qKB1yc7VZ4sF",
  "key20": "Ba7f6k84Wt3EkRtFa9TNHXNsi8KythmEpuyga2n5LgTMxTaSsFdNvFrdwdytFEtYbvkthXRvRh1ior17Yvt5VCg",
  "key21": "fPPzJv78ZJB7FWTZpdW9apj9SehGFVw8ZVLPEtD4u19gNK3omLgK1QsNYJmXCzm9TNXu7aizumEgZRpdtfqVHVF",
  "key22": "2D4Qt2eW7wFEzk4vWcoa9pKCWeo2JbNPE4zR5gShSo2W9CnwdHZVaMwQjY8QiqBZ5gUngZMjj2ishnLvSsyVGHtK",
  "key23": "3WsYt6dfJC9zpUsKddVznKhbMKTvE2hER1dFWv5dovPUxZYdtYz9LzgCp68LCSY9njBxhHmMQZ46uBbGJMnuu7Bz",
  "key24": "62rJRrv9J7Gs5CQanDBoA9Ppb6hwqEQ5BrExsPu9VqLRUsAYXgkgz1bHFiJ3bNdwnQvXUzcFij6CuyVDi2UBoTUz",
  "key25": "5HvsFLwnJUi4nPPg1L9takMBVAWRfpaHtSoES9JWJ6kKB6pSLVQfn3Xd5DBz3iGoecFR5EsAwRp8pAGUV4HfWcRx",
  "key26": "3X763xoCR8dU3ezyGuVqoCo1sScuuUS1eJRMW78D9au9NqD4tNzx4PbXdi2yqHrExYB9bXiYJDy7JYM1w41mTFD9",
  "key27": "dKHnZdhsRMAmGrK3QDdp9214no6JiQNc7BfYcz7VzCYw5HHpH4aMqEdu5bUQpMg2MKdFJP4Sy4YaMAkxXTTLrkq",
  "key28": "rp1spBCYtmSB8kW95XE9GfrU5WgxRUiykQtos2rkSfZ5Lp7oNsRs2fyKv7wdNYmJu3wQTNcpkrMB7wQn3As6hc9"
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
