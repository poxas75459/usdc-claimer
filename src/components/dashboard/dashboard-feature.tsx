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
    "4y6Z8xfvSfQXmG2Af3kuQjrM6PpCQxa5xo3Lh3CUYZEB77F4HMPrWbejxbofDxvJznP4WV8c992sN5HDuLcVi7Ya"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X9ThZDdN4VmiVG7YQmq4KrHPqJn6AnCKgBTrqcYvXRe43oKkDUp6JoYnudB2W67aK5XLkV5uk3dRdkA8kSw9BAq",
  "key1": "2UjNeuGKcRgpB8qs56h1cRcWr5YkPhcJ2aMAA8vvjft5osVLoa7GVjPgf1RApsae8LRxMr19iJUS3UFaTn4hvL8v",
  "key2": "2BP3bKC6JvM9rij7T93VNTLCBedguhFzJYkUwXLPXM9eZrHKVJMk5cZeQAyAii7wC7Xf3j7nQvtzHdL94aJ6MEut",
  "key3": "5EsHahYNrnn6N4oJ2urWwAuxuZR7YnqQydpiBRNVFPQJRxgomBQDe1UQP3bdnQxumehkTupBew1HXRuEcjqTp6Zo",
  "key4": "SFxhsxhWxNmoDFnKV4mZ8yxbWAJb5Sy19XtrxjxE6zHj6NjPAvirGWH2pCShWX9yUbwYCdqdmMPg5SupT8d8kJ1",
  "key5": "4c9QpWyH5ZHRpnWuFoaXue7F7r7aE9qiJb8VwxfR77zYE8mefJgYzsQ8W1eySrTtmj5HVuz3gdn1Xbn2uWuwKSxr",
  "key6": "4qJ9QFTenuxMsWeiVEBKHJYtXUTshC6pDiUrbptykfjsaarwrVmp5Sqv7ydrbzQeBWoUedEhzYcx2tdV79igrWqC",
  "key7": "3747jQmTxtfDUTEwc7FgkBTNPtBziJsUx4BMez47guHdTci6BPTzVNEJLWvK9zNz3bPKVemiDt9Z34ksBKrWkRBi",
  "key8": "gUHeY7qmarJe39dLBxhpHd8dpU9vDfgFUKbc5SyFKirERjuxLLMM5rvojSNJ2vtwdXWFmGf7PLHX4NESRNQsA4U",
  "key9": "53LhSmwH7ATue2fTaQiKrAZrAugzjEcfTsT7m79QmKRQQ13ND8qP9nE8smYb2bDP8QmD9A5FcobfMDWa2v7472FX",
  "key10": "3B21JfMZJeutWBFvPPxUwgDznWD6AL3QxYNw1ZkxNBGedVMG8VHMSikSKfz2zxVwuNthXj7ckFGZpsmHirM3WTPs",
  "key11": "2YqeSQz9c1skYiUbNfU1s3jCHwzkW9jjaTLej6h1SRnaqzkJpxymZ2GNURJvNBqZPaYKE78oUsXKqAtC9mmpLsJf",
  "key12": "AWFQhr96JG3kDK5PfnTvRaiEC7jQUTCJQkDumjNwJuSNWG3ArB7Tih6SA8U7c2DPMDb8MJ5irPysdc7aF5qWPzw",
  "key13": "3XEWVayrGcfQnKy83pQbVxk8MAiuVX4vcVZjqmxg31JZQjXtU4Apy36HCeE5KuuUKjzVfauhx7oRg5gFSNoYRKGq",
  "key14": "4ccVWCWLbru37YwfFdu5c1zFSV3mYWcBPpPMUB3NYQd1edUDumSxBXKnxUYoscHqGZNm8Y7zPpfchFjFMbvtDjSi",
  "key15": "3WcQyf9tRmuYs8MYf628oEiTTGhEGAt4bVQvbq8nTCb4XWxUmoXvDTpC1g1D43rEPgyxQriQmUkt6fZgMZXwbZn6",
  "key16": "2Yt4ckZVP2rZjzeSzvWVbr4Ke4zoBvzf4G1LTrFGKv6erHMCj8Q8v18sAbRTbfTHi7r8PeTWR1dVFgZTdNEuhwkb",
  "key17": "3zYcYjpJij1Vh1vimDgYGNxHP5zdH546E7md4XX5MPv2viz4YPqHGurZHfGDtYg5PscRTyYMzDYL31XGQWCN1f3c",
  "key18": "4JR2a1aGwotY9fc462XmhswgZqdEEriSJxPoh2cBhaJbyj7GrDqirZChdb37VtidD5WMPepc8YMffgYytoJQFfhv",
  "key19": "2Q4F1MTQJLxVSi4KDL6GEw5YFqMmrDNsWxnQuxtHdyAgSEi5oXuRFm35hgq4DygDw7DbU2xZbJLLMTLwqsKwfDxS",
  "key20": "3Gaakny4t8DZ8XeiXECymEUAHhgGJCLNVhG3cFDs7Kg78Pg844JkDfZWYKDK6d2jbyF5s6aLmAUckw5zHfPbSro9",
  "key21": "3ahCxNwaVNfwYphQg4GuHhXWiY5CfWJXSYcQL8q2Mm3dv3h13fvHwo6meSEeYtGGR5XuFoo3UJi78zQk6xgLZDF5",
  "key22": "4RT5bgBF9tUP3zbdJEzwMoH3hkQYHM1NUmbKpNz9gJiWoWuWpgVCVb4jNPhnNG2v97sr3uTQeU2Coa7gv6M92fGW",
  "key23": "SYr5jF6ga9EhR938Y1roUHmormL8bDefSqBw6E6JAGnukuUWmxd9bYkCcEpPwZFCaKFHNQkyZMf8kBpVP9Q9GM9",
  "key24": "2gkMoSAB1AmMkd6NJqfTKj9ejSQTNGDQ2hsre3VBFZacdCy5fr3RDW8MTDgn1gV3jyjaPRDSbV2hcgdYx5Ge2UWJ",
  "key25": "29Pyw3XDQBsK3ntBaV4VKW1bM8Jz1eEej1vKoAUC6AEyWvLfk5qiX5DEXMJgAWe88sx38My92x8aqgys1APEZAqA",
  "key26": "2Xjog7BpRQi5ZEVpmaZnK1DaNHu8Fcx4HPvDUuQDSF9LhreSWeYdX9J9iZ66TjGWouLtX8ReeJJRwZawp669FFeV",
  "key27": "3d2tpcgCJNxCMsXDTYfz1rJmBnDS254NB96jMKLvWfoMNcepU36hFd38BSdmQJVtJqzgR4QN5JuNaU8Ttufh7NGy",
  "key28": "4UoiFJYeD1FrmnEaUMWXpYnSnc23nu5Rvh6Mr8mYnTot38tFUpkn22yB41JCZv3WUMEFoGAUd8yVt8iboaZBH2vU",
  "key29": "42h46wVUCCakAVAgiGiKUxJAJwBRdf5hgQkt5JJNAGjLxwdWceJxn9jCpCUnCPB5ZYiTmjiEofs1J7YXS24NWUfm"
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
