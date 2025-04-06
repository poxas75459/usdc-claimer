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
    "56p4o6KLuLE57UtKKVYWCAayTU5PQCztsRw96dVoErmxcb1NpLhuj9W2XBSGKVPCiNheUMnA3RzoTowkMiZ7bUz5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EPP83jm61TThfSs6dXtgWFddjRYGcrKvuYB3iHjmVbh4ttgfWvUBYpMxqPNKDEyhcTiBcsZnX9k9WYixXCFQ1ax",
  "key1": "5H8FDKgEbrKxezmUiFFaee3dnewN5FWgUUgidWSgg8FnkktV5BVafzKR9ybr22NcEvJP9y1VNsaye4FuRpbNeJ6",
  "key2": "5aHqutSfLek65TpEWijhDGeAVHD3xyoJ7Hu6yet9VXmJeFNoNE3TjBb1xGEbN8WmQWhkwjd7yBzfaqVNCFFoCeLm",
  "key3": "25NNsFryW8WQSLfmTjFYpdYAUBuW2QtRmLSwnq6sAZ15BAumQ8SLhkzpj6ijVv8Yapj9Www4zy1DzrA8aR4GYk58",
  "key4": "3X3qPpJsVpkXvKQqmzReJiuFyzSiwWjJvtF8dQRM5omTpbapvfyp79m1qqYKYR6EeZUT8cbjyin2eDbUv9XmisRi",
  "key5": "5MwjZYEGHL6VNfEbzCKUw9knDEb5uHog6jEoKRMdTBzAoPefCWvLJumkGpoByQcpZTkV8QnBoMhnjecyX8WfuoTh",
  "key6": "bfwtP6MPZkxxPdpdH9Qf5rRBb7v7Ci5Pdu7AdvameVroLmDNNMHjanQNX9EEPByLiMnefVqxNK73bdJ9m3KPER2",
  "key7": "5Ah45sFU8Wi2XexZM8UsGEtueDNcGqxsMZoVFkatz7wbuh4RGVfDb4jeRfVduh3R2amGtjGM9s8x58jJv3LivuSJ",
  "key8": "5sSjrf5ktA8SDHrRystQ5M361xcU3xCevHXTGGLhMvKfqEebWXUHquLRWxF75hpw7sSkQQk6azPWDKt4tEFN8mLd",
  "key9": "rGAWUyt6XKF3YTfNRFTugZPE6zb6xG1Pa7knnk5xF93gWdDToCSrAZ6wWwgJcGA1m23eS3mMusxVmPC9JvFE4cV",
  "key10": "YrHfj63Q9ghyhvYD2Df6tfoTitWWp1FWuixjZWeHvNqLRB5KZeRZLuTZZrLFxdNxE2VHCR4pxts3jDHqPpyqDBn",
  "key11": "2GnyQJJt3RzijPy4VPzr9xX7ZMbCks4Tzg4kzyt2duHadV21rAEu4xUkrvjANVbsmPKv28i19FayXT6GMKXXgUzF",
  "key12": "3NxyQKSZpT6d1jweN7Cn4KpXcthazH15gSuHnHu4NGxo9PnM7vwseXT7jANZ5WCHY2PFtN1heYqKtjubquyjaFpa",
  "key13": "3Z3x5MiUqCJsg1pTpcqCScJMMmYcRmkrfXe1gAxuTRno7F1CfubNhvKdSpyyNHiBUBz9zmun3nJUQAdFcnBX9ayw",
  "key14": "5b7w5B9ronQe1DUv4KqChr7SJmEDSJbmQvGUPihcWXQTbzcwf7J2vwNwCTj4hEqUsBxKzaY8kbb2EjdGsqhSZyeW",
  "key15": "5SVbBRT1KNyUMbXdWRhqrnzMRPDvuYimveqb7ooY9MeeZWXfFyJRDzZb1AUSKKPciizNYkmxXpsAxJH6MWsqHYD3",
  "key16": "57D4pfR4wT2hwmfN1pM2iQEGeQ2CcWXHjmrabHvDq6LiGD4Vfj9fMvPADFEfUKqxL2KJbCfWTFPZ93LCJBaJ4iMm",
  "key17": "2aTbfk55Qca4RKUWfaTAVUxuCSa9Sz3Fnr3NYrJuUsZ3aFKJDHyXNkC5mCos5aMqo4fJhu1wkidZXyUdr6dzvFRc",
  "key18": "3NLFEuHq11iGyaxB2gMDdGonyiwgchKPVHPEKRQhtFwBjmGbV2WmsS37WdMLw6mw8N71gyaZGLsiFavYLHmv6Qtb",
  "key19": "umMJGRBnksGfagutwQcFs4XbsopJaHhLfpbRinq2zsjENSisg6PBVYrTfEFiE7FWamnmpMtSjWto7v9iwyxRHkZ",
  "key20": "5awyH6wb1fh7nVv5DACRai7yRuBuHJqX5hirvGUX5GPaAtjEPTeHThtYqTixLEpwn3npFDEL9Xebb5SdGvmBxKEh",
  "key21": "3TusAMeGE9S2ZbWuzCyvTXAixwwk9ew6d2g1kWM5cMWCdmdS35Y26x9dzmBWyF2rrjpDRqAAvLdoYDmjuWvevZ4i",
  "key22": "3T9cppccn1HczQe9SoA9iGA82nzUz7mPkbPyG3kVayBKso3Ju1q6Zg5Kn2iuGJztPPyscqmdutJYiPYwcuW7fbiA",
  "key23": "39VrG2RGiEeSTKAVQtsg9Pq4yJkQP3ef2oBrcY4FftTgagFgB1k68WEToZw8PJ4qNaW7ys5o7JGLxkgRTtwr7cs5",
  "key24": "4widP3aFtqc7SA1w847XZ8PfkMZkWDVU9uRT9YnJY3YUmGRetfyz67SgA3MBWg2GYiusaLjRnSepDH8JW7s7m5sL",
  "key25": "29VTCzpxiVxDY9qHv8MkRQPtdwUJ5UZu1QMbXpRE36yDsah9eNzLBBnzT2AtwSHMExFEnLoG5GR1cqsEmZwHZYvS",
  "key26": "inGvi4ACfmd3QUQGuJYUDqFSJLfiU6qyMJsD6Xnqj8sjXLc7K2F7azrbE8LwqdDudVRTnwF6Z9KqBbpHu1GZytM"
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
