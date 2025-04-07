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
    "3q571oEXgGttUE9ZJcW82HREjRZPL8YoYqZbdEEpntotgwNmMfqYBkVZDTewBqmZ7ya88knphAzfLPvyyimNWcTv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AqtNVsT7dp2cqjCFzqJB66wPGTob7Viiy5n1kwKVGZyp99S17Bgrwd1QJZrNddeJ6tCsmdLtCo7QxWuYDX5u92G",
  "key1": "2bt6nn4Vmi4nZRMDtUGk7JtUJ6NNkHpF46XJqyXmMXoxSAnGjZwZY6uZgDgX96QbqGueFAD67VyQVZhuaawMmPjF",
  "key2": "5vu7mptDnr94D5gtDNBYtmMt32yWp5BaNXAXBCmdwkaondZrGoBGppTctzb3qSECaWjcPQsqmobtge5f6iy9EpER",
  "key3": "3c3d8bBwm4EnvryUufN3mApschNzTNbY17bxkB53JcwNTHYstT2g38MJrd6qiVtKTLx9PLh26gEPeFUkuSZ3ouHw",
  "key4": "5M6KgeCkNUpSE2KXLQR1Jhp7nApuA99p1feDMSGR1gvptiCnuUGjJWmd2PG9ABjJNHGMyWHeTuivXhGtFtjBiYE6",
  "key5": "fwHbkY7KqeXVZXuPazmjMBQJNE74raydmmjNy4U3JQ1JVTUQJ117N9bBR4qdJ532QSkTT8oKsRw8k4rhjMoMQky",
  "key6": "2bfdvgXkq5ojTxwtFtp2JLiEHeydRcifG9mcqYhcXYRBZvhc6F7qNn6E8gEWJ4cGkZGjbk2MZvPGowKEgSie8JQe",
  "key7": "ZEocGPQEJrXDXwW69joUpChsijq2LWATFziXKNjBji9kTZ5CimLsCNthdZVXK2NrwkfRR2QCZF9uBhsekgYLNY6",
  "key8": "4QkGjiKPaddFq266J27QWK8oBNrTuZxmrPaeJJ8nY29NCuufcb2D4pLbDcu1Mfdd2xTYdx3P6ZxmCdYx6MLtkBhg",
  "key9": "54z3qYEUJtJRnLp8CfYyny9gkzTi6iH5gurGLVUW8nmZMn8M3ZGv8QGmeYT2TG4Z9JFchVrhRwM9KkgP2VfVMZAp",
  "key10": "64t42Qdd7PReXu2cVGsdVTRjoKAWq9xuLNDJYhqpe2ht7r8b6xpPvcQFp5vshjJLUJHLkcUA4y893yPBFAyHrJWV",
  "key11": "2BMFgeZDv1pifHBASJsPEmuiG6nrEDiTpoHy578AgJDznq3SGkmBxkvsFLjj9SsQLZvnPxD1aNL8synRTF1DKcqp",
  "key12": "3rfKjUSQkX5MXP4EyGvZSgWH6VUJYx6B7Yv1ZNg1QCWMcfDAQoftvcptAx5uhkwxqDaruWoNWWAb8NgSdza4UhwY",
  "key13": "4yFSZvaATXF6frUatEfb7rZGiVbwfPW2MvYq88zsyH3jfrUuRYsqbP4gYkfvKYeAXtjpawbnWsLoKNQXRpZDwtL9",
  "key14": "37bcGdD8ZcSy8UnydkNkkY7TbBJRNLsTH3MqCntsDE7evGHe7sUR4rV6Q5i5VzknnmSGh5qqbyvj58bvEyjUCg8z",
  "key15": "5CcDYtc7CrJTo1FwQkrc1aR9YvGbGnzuraRTMYLDLbzKLPZNpy9KTHK2JzFSAAZDMNs2QsRqHU3eqHieRoPkQZDv",
  "key16": "3ztLv7qeGuYD4f3TKYbD6Fp9Gb4Vxq31UYXNSYT43abwygbmuHMKHcJxD9qeUz5A2Dyg8z1kgQCayMjqoYoP1A8k",
  "key17": "5CCj47wCrzTrDhRgBKhvXrc4JuchoS11zat2YxfBamik8yuBhVU9wcEFscjt3QbqaBVKzU8AyRazNzUWaBLYXLBa",
  "key18": "3jFmJJfBhW7BLT7USmwXUM1UCHRWwGG4KqJ8c9MtMBBuXCVhVixqqpK5hAHihkGauPznckNDiqg5YZchUUfKaMYq",
  "key19": "4D38ygUgTsYGYdnnz9k3uVgYwc1UZRtV9rucYEU8oVLtAduKm7yzf6QziMq7haZBBEaSBY3AEjx9C7ZimQF6V8ts",
  "key20": "3KkMR65KBTU2L5NAuMB5qNgdsjh7rpSnnQ83Y2SKnppydynCXJ48aueQJWNrVrBxbVspttgnwR7VHYiSyzaak6Dm",
  "key21": "4AhBBs837Jks8GHwv8JhSboc82qm7ufjBByQn71aQpDmgHvHHXbwtr7wyRLiPRtfRZmErTK66kSAUgGqTdpPzLv7",
  "key22": "3bVrQ4PFN9xqh3vd5dBv6edMn5TztLMCXJGZiAc2cP2uCLbf7WdD5DdnTV1vEe2tXzrpmMkdvZceT1mnQQsnRYYC",
  "key23": "3At9pwHqTdGrfJPkCfrnRpd8i2yuTYgk4ejuU3FH5DyBfuFMMZkBP1VHWTsexY5q8KtWeboaMwR8TtBCGArzyD7",
  "key24": "2SAniSbevQUPm8e3U2BGRyhHRtbtBk13BEJ8FnwtbGGTvoRYmHnfAnrNNxu87eGpbraq5N6D79EfgkgprKP9e5nC",
  "key25": "3w9AZa8uPa5LE9XmWZSy1VRErf1SJyBwnFXzXAHUTjnds3VZEiPgjVZeKiYemV3skMtT35fhdACWc3kwSkfdVDV6"
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
