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
    "5nGgLWzPE9noXiEY9VL6R1ihXUSDdhesAWeead7gPm9ZEtLvGbEApdhkkQDCxpRbySgoDZQ3nQdFAhqw8KHPqQwa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Pj91hR74g5dS66aTRjcyuruEqTSqeDoT6eWUoivsPzRKrYEfLF2NgvkGNYMuTaXzS3Hu64tNa57yWMif9PHyfuE",
  "key1": "57ivaYXnpM3bHWN8oV2HDozsqrvUT7uppjStskWt8dHw8RRGi8yEo5C2tHt8qbbNx5PK7Gu8mYN4Gy42NWFpWxgL",
  "key2": "4qEFdH7QTz35ZPtGhnT18SuxghpWGdagbB8DdqruqS26TenSaFtiVpTkkdqH2uKUvFpvdMSr5MjZdCyqsdQrM6XY",
  "key3": "4Shr1FdUPPhKLdNgTvzkb273r7xUqUCCHbgwYqLg2MoFwAwNC9qyVhrH5dxWdxxoMn2NgL3pd1bNXzATS3kinvdB",
  "key4": "33St3piPhhsF2V3gKDvP7u3V1Gi15CtV55X4HVss9tmcaM9dz5PLHeJzAW2SaQbHjUDYztExNsJnLyGCaQvpJKyJ",
  "key5": "2x2U9b7Nd8rNeQbg1Fmq9CyRbqdc7G1SszkPuvKr8ueu91eATjshf3crSuhP7UBt9Up27yPgExBnqV5xihFn4pav",
  "key6": "5rs6SP5dwLNh3xYtcELYqRECyR88hjdvAiTR54AGRj8VUTDKnmNckhMGBhLEEkbbmGvgJUFGBsGHdtJETVM7fjA1",
  "key7": "8JWvhsxCvn5boBBSeYCXWHHDxmHsgdLDJkHKCyx2sHF3b9YsUn46YwU2LMUAYMtdhCmQomnHc7VrisMPwzTUBkj",
  "key8": "2rcMiVGuvScD9uWsGkUgxKvPRa2har7fUMG7MHzCt7RayMmWg7MJiR7eLmPjdeauG63jqy4wpmYr9Ziet7KKK9ri",
  "key9": "5WuP44MDCiyF7JAFiBjDEXT8V1S4P8Qt9kh8WLfXeqyKFfANz81oyrpp58K85LnvH9tvMWNM5uLkageBw8Jpc7d2",
  "key10": "2M4HKnPddHrgRdvF1nPw5Pptp4UhzER3amrimErYjo4Hk5VbZNh4q5A3ahF9QebMNZeyZMLkkoU5ycGHak94UoYE",
  "key11": "YVPoSecmhzwmFA1eAsuQHEszHM66s87wsg4DcLSN2XFFo3U2cP4UQuSCb7gQG9iYaSUmXgHYcifhrYeAjeZw8GE",
  "key12": "2PwYGk6awrrbCYam6j9jcABpwK8wX9oYiwPpSBLRuMaKPPTZ7whA1uUEnDEgRB2kNRFpZGpnHkjM7W35s9jcqacc",
  "key13": "3troP7rKKG2SKrQatk6BaSwDPQ6HbpWGWRKL9PLbtdq1q5W4MdEbfVe1NkaVUuHviSRoJb29W8JLyCNXVjABCfBJ",
  "key14": "3xtzNGstC1Z3bJRncTtmUSbJn4vmYyEKe8QWobttURuoorsaH3yzGizTTFFSUPHzDdg18zF3xEAT1su9mSSsefgy",
  "key15": "2BMdoWLifjDF5MDFM5L47v4j658bN7cvPrmZWU1rNynQ7SbDcyRYDptgGpBG2AZvGacakVwqbLP3MRq9VcwgN4dw",
  "key16": "FR2NwtHYMvGS94wn5GuZS8VoWR3LfzxEmapgKzai415Bu27Qx896huujzR7ty3DHVJ3rDv9zSBE6Rt32KPfDqBe",
  "key17": "2kakR79KG31hToHgeb9f3KeSL32jP1n3r4DFMgugX3z7cEyFUCUWzztzEzbsbgnEisMFfwV9DN3hLFKJF3XeTuqD",
  "key18": "27zdmQgNQiCJMwGT1ie9eHsW1Wz4Zte1AkbyhY6v2w1f5K7uNGqWqcHRR1kiXbEAUP3tBWcPVj6xiTuA8fBvG71N",
  "key19": "2qfXRoL4Uh8rDDQ9axYNfcr6QY3z3eYdLqWkdWdRw55g1YJdrzRTdRXANVfgbseTKHDbXnA7HEu8qwpgqPNk8ztj",
  "key20": "5zvLHhBfbMCDHekPmQjxa687mP46KYGmkm77pwv4ZcQX3WV76JB6Sj94pRZxbDZiTvVRr2wjVFfMJQ3rDPLaJHsJ",
  "key21": "KopR7LzQfnzuy6AQQk9esGZuzEHWFEC1adqxYKdFpRYrDjJtsrg3XAypLkEK8bAFhQ5zUCkUBeDvVGYAC7HgpNs",
  "key22": "2o4xQBWKwuYvsjHedQetjdsQ74Dxd4Q6vuR4XS8FCBuhEStKK6KL56S8FLFGjdTXbyhhF48LWVMQBq5yncM3mjtr",
  "key23": "4FyEWZ4gyME75DKsAdHqHNQGQUmXutzYrh5JZY4mX61AnWKNyedpbHm6LYz3v7VDsciRr87dg89R2MM5YcXX6bxW",
  "key24": "36XoWQj8oTrr2hsvNH8N4ijs3gLtKuvCZ5bjcCwha2PqcGeVAmYBkiCkNpDWjvX4y8jM3DjHeUv2tRFNNVZF2kMt",
  "key25": "5hvtyWVQw7MvTYxmguCnJC7YH8LTWNzSUCt6eQDuDXTQAQvsDaW2m8Y8z1PsWoNKBc8FRWjgZVjSBM1AyDSFZQ1K"
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
