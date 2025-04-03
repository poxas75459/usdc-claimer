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
    "4HVfYb5fS1M8uWF1gjSTQSLPjGoFBrv6MGfVKJSzmJTweZk7H2AFzGLXCfzHr37w8srbkvU6ZpsThKevZrd3RHZn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HKeGb92jJeDrdZANaKJahM69onXnwTCraCVmesBdVZ33B7od6F2wt6zdq8JCcjDd9Ph1TMhF8dyGepqLnuxjBrD",
  "key1": "3iSNYwiuYo6hyH1K61HcwyTm79Wo41QcJv6NqHGG4Ct6gQWn9YjJGmyyDgwzJpvauXAyyjBM2R7A9ncWFPiX1hZ9",
  "key2": "ccWVVxJkic5sTE9m1zsZTHXucpWhnAEfieVzNNzQrb4Bd96QKWYybznTqK6ZzjJ4S8Wff3MjL3R4m63dtba3GQd",
  "key3": "5pGxpha37D96ZX4K94g97MaEHbSKuwj9GE59VUP6xtNYhjRoYS7V4pnbbEAJxNDSpeGrmMqdaDhErJKexvyDUUy5",
  "key4": "5tBs6zwWYoQULmLXqGsdtNrTANSf3GF21ikM7oBTXk6ZkuQxn7tFuu1QG331T7fxwBoe5aKESwRqrPPH9wZQJC1F",
  "key5": "32C41TDfp6XCP65zBVK9Kcgcm6ubkubyLdDU3Vh38YpAtUB3dHkNSAP7QdpnZYH6QW3BGDdJH6rqj6Yo7vR5DjQB",
  "key6": "3nxSKkwqkzp3HbuFsmB5X6ZZVtQczsPp4xUUYNscbZyf55UWR7qMky6sXA23vE4XqPjc5V5GvJwNVCbcWtdvovgk",
  "key7": "4U6SGaLMrmLpP8nuErtBkfsPQ2FRNA1pfJWJwHN8cbt7nDkHZ1XueB8aei6zqAyMVoDYtsdXsr9No7cL7KU1xquL",
  "key8": "wh1wp8xy21uTt29oSBty1Pv6mwX7hNjoUwryCEphZLPvim3i7jsMrR8sHcueSbSGsqPQyRqv52EejVggWP6RsTp",
  "key9": "4JptjsRqx2faqDKE8LoQxMQh689ZEUFvMkus6mQ2TEpDE8Mydb1WkgwndEBmWKRzSYS2c96X5DVaWPW3DpZwudSm",
  "key10": "2xjpuPkU3oCAFDZ1BEkXNys4sBwdHRDrLh73ubwuJkGXET61BwEsz2cZMoCqMmX5BtYKVPZcodvC5LbxN7EMwrGq",
  "key11": "3KmAVuoFSSAE5jv7anzZnu7kAyGjohBaQcAb28zSy4o5HLLjC8U1yRQhQFeXmrGLbWHgLCy8ppMRbJaxppJoA3um",
  "key12": "5LoKNtJWWPcDFiwKmAMG5JEWygdopQNRhFDjtdP6amWnaq8PsRdBRvGG5jK76UBeEpZCwPhM4nS3wasb1bLhRur2",
  "key13": "4H5wHs5gE1wmNTkTTWgjq2ivsmYXTZcfpBm9PWfv4C7sYrp8KEwMpdQZjGmsEXXaNqhSsuiivsWPbWitefWJQJtL",
  "key14": "45i3FP52mv2JNc4yRZ7kLeaLTmXUCsAgrAQvCDoUTrjs9y2d1pVE7txqvJdcC9YixyaoqsSRJNFC4Lhyw8yVJH39",
  "key15": "r3Sv3K1scJURvHae2aSkHoJ3BM2u8TF87y9LyY4WtwKTw9b2XLVeAj7ptZ9MxHgYZgvtqABunctLUHpziiAbEKH",
  "key16": "5otLThoz9ETYXBPJJzWHyhZdJttDDmpQy9WbcXBaVrN8K4qLw4CQG9pBqt8xy85my7DNmnGpLv2fEWSLhdEGfm2T",
  "key17": "2fj3wXNP6GVpkAHgGswcUBB4GSrEPEMn1gWb66Bj8MCSu8vw6Yd9dv2FqbsV72Lc1FSynCwz2Mz9566WJyZzHonb",
  "key18": "1aTaGht2LEW4RB5pr8GGL1vP8o8uJtfvQhMKy55cuEQgApGV1EwSbyRgdde4dUV38k9yUPuSJLu7VBGJqfeWpg8",
  "key19": "WKRRN9obYQtUvSTus5AkENnn5coPWx9h77UfEmhkTW5K9vNDfyTDCxsZihK66hbeNhm8EDo3nMvqquuycY1tCMR",
  "key20": "3yGXv8TZDmHMozwhjnEDH5nP6DRbRftNN4jjoHPKyspLxZ3u2DEgFvw2U9HkDois6rYDGT8FZpkwiaNkM2edX6mD",
  "key21": "kk69wxV5ZFYYRwRScCXssMLdPAvPJGQnHUWm16sAmyipJdQdJc1WPeupJCEpVi8UoCSusLxYSBvnKHfpUMnGof8",
  "key22": "37PQB1zwfgAUeUZeWjM7AMfRowVUULYkVZt2cQ2cuQunpvGL32BtxnTcPztBY2UcxtpofzA4kKxE4DGrjMM38kMa",
  "key23": "3QKUKvhFmVfetGb6Dua59e7tq89QenqrbdK3sNeekVzf1Y44cTTcLAqVouqrcqSVq6ktZLdnsUBQg5BcViUe1nFT",
  "key24": "4TBVF3ZU4qyGpPs5Gekk4ukrbHNmqZeJoPrv5VAEeRj7bNt8onexWC5td4d9E3tdYecKA9V8Wyh49TD4mfjWhGoN",
  "key25": "4BSGDNsc4YcGwNnKZr7XPxYMHXpSwcxd5pb9BuijX3NhBvPnQBPt7HXUycedKxpEJDvTbLzmDu5Sjp1pCXGBY9Z",
  "key26": "2aPBtT9QXMVDF5ZCNj6WaAsqkxqHkdRd3gK6z5p1NK9r79NeJHjyGdKLbsa1w56iGYXpNfqQgW7hwZHUGgp3syY4"
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
