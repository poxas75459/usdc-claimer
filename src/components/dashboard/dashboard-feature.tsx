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
    "3x4JBpB1v1tGwZATPFHVjHkRx8Way7kvX9adMpTGwu51pjyNJq6jurr1nN2Fp6bp2yWB7JHnnwa276NxM4bKdint"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D9pk3hN6jVZQjWp9uaoVgcDUnjWhXG2HQFsG9mJraWHZvSucs23sjevDVqTmWMNvLNHZp2MjNwi7hy2w8mUFTHx",
  "key1": "4nu2DPcJy68r5zp9k42xWCBXpF5cbBZijxouxrRNUqgTtyrgMwY7HAp2cJge9SrwvV9zQGDamadevZdHQqDtqArn",
  "key2": "4zhWZPwtENaVKkis1J7kHBbwwPdTpJk6WmV3C3pLYCXyQoqQsR9Frrhh4RSzUCURFrMuyLmzXFKfzYFHagYGRJt4",
  "key3": "3ozb5Fu1do49PBmw9GPSHov812XbAq4GHoyz1uvfvuMm9x4ykRHXXU1ctbvbKjRmfo7U2Z3LonRbNNQafXCCMRcC",
  "key4": "5NpX9f4ZsPySbv8ezacDnGPgtgLY3V2JWRVdBeK8gqDNgLjULgPyotiPVegpWxomKix6gweo27RnNSSW1VGYrmnd",
  "key5": "4ANJqVJHGc7optyKLDoGmxL4ofe4oq13E2LDQRfFjUq7EDLqsnK7eLTHUFD87mvBJ3shvg7aLhJu7FTvB65snvTn",
  "key6": "4RZrTswmQajJtQNag6dA8kpq2w6MMYT83pFJ7wK7J5mXPWJ9rHD8LhkrgdBuoagAsXzNF8oaUz2rvKkt4QHzcZEz",
  "key7": "5bj8wW8eVKfrkgq4vnbcBjtgbjHwUw3QC5EVYY8CYQd7LTpHxgPtwPTEEh4NdqTgZMqzXj5QYSxpFqdJGtLUCKzm",
  "key8": "52tGQPZ1bDUucjQM4XUNETxSCDic6itVPeLXC36Pe8JxSV3TjNYdGKzcivbeWhWPcDyTQchZW1sgPrZbWktbU8Xo",
  "key9": "45qk4oEXXkdmXZkNMYsJPM8HNqfGPzJvbLSgqKhV1MG78DvQE1wa4zt5CQu8rXtEdksMkxPXzEjq41RVuwxzbPFs",
  "key10": "2XJ2RVQ2g1WQtv9mXgVYDhyeTKmw6NHMUxec66pYSVGFAFMuk7Gv6wLWfNTxbKgnE7P5SLbx51nt5seKyYY4ePf3",
  "key11": "UyASFfNQQ3ZrFSSVQMchjHMNYdWMGYkkikenRjyhhQmtEnp773A4W24pVMuqYjAnvHUKPJKc9r1TUwvmxXFfJwa",
  "key12": "5kjSLNLjFjfFvowFCMRAhNdrvXrejmfKhSKnDuyqi7brQndRL1UpGNhWkn8Qht1jHS7ZpCvBCVnyd9vuSf5y6A98",
  "key13": "2Dxc53jRGAtwfJ9Z5SYiRUBLVbVSSxQGQ2GerMBnfxHBVMxXTHRUy847RgCyNeKVQQku1TtEcX9isjwDsGmmKWCM",
  "key14": "3RNq8wiG1pV53dJnCGzNbvVX1D7QGhh6Lx8WN1xTXNU6f8wJfvs927oYpqckXi8jhbhmy5TMQ32rDtAKN6WDajF4",
  "key15": "63r9SVVwhemMQapwF9MnJNQ2yTpYRWbcNNZkSnMa1E77cfTJ957PNxyjMB2BYTS4oETYdR6PQ5axSqbHKyLpqjuZ",
  "key16": "2SKqa5GzUkBSX4WHCTrMdWQeMpgy7ec3i7HAxd34C5s8nLau8u7bu2i2HgEjgu8qMr7nJZKs6ArvweAoWh4MGKms",
  "key17": "4zjhE7E9VrwU7cmgDLgQ968dQzqP5FvVGBh9bnsZEzR3uWxig4mq9PyBN1kZPsHUYhma1Y9kE6VhRRqtGozT6cBF",
  "key18": "4x67xw5UXpzC7oYNjpUX2JvGDBggLK3BvwT4UGkhDeW5GjscjfkqFJWDeuKBLW6yswU5ZW8swtfrmdTUKjjZo8bL",
  "key19": "49zW9Q3v3YdF9kcwaNMLBYW1572W2miiTfgWUAG1sd1XrXhHPKQSaSzkpWoeRHxYDuksboer3npju7yfk8TFBvXx",
  "key20": "3Th78XE2RcPhAUf1RMQctmZtDb2nhShZc4RgR5wKWiTtgb5hihKeujogMXEnLX5N5ot1RRvJAhMTTzaDaTu5gzJe",
  "key21": "Ffo7Xf6FPHb7qctC1kEiMAjzxbjJW44oj9m8iKCSL6thjvaN7rBNsxNTFWuMWuAyc3qr5MHKF6fwHxtqfrnpSzV",
  "key22": "3aTiyNo4JbxzixL7VUfK7UqfWg3Udod6p5xdhj2UGfrKDzcwFvMHE9RM4u9fikiPNsxJiNDR9ZfiggpgXdZZUbdW",
  "key23": "4oiTzRHjAKAzJd35ZgwcYdQSvsutbGXK9tQ72jyQuMFcT7KMhA6htK23uPQLGoX84S82o2v7mWdi1oYYEvfqboVj",
  "key24": "56CdSE6YH46z1pvyp33aTp3iMCPCkz3ATumNpvt2SCF1YRx9zabiTVBaPxHPnqkgABRE7ueCu97QWkn9uEimzNiS",
  "key25": "BeycGHxKBktSqaAAYahTzrWoF3pYKVyNoLK46aRmRkyk8uLZpHUkj3VaabaqKM8WSDxkQeP23y3QdSza3xxAXT5",
  "key26": "hogJ7zhFrLnjsCLf4Ch55cTno4gpdYnLP7JwhGrWyV53fvUZV54CbMHt1srzAsdMRLz1dyXWRMAPZ8fS5Uc2NvC",
  "key27": "3jyBJJVfrThQHAmq6coEwvXUEsYvw2mg3kwd58NngLn8cKbajDpQE6Gwi1JfJEuL3zAHnhrA2828DcdEWAonbhSf"
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
