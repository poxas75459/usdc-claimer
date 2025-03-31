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
    "4cns2YkKNatqHBT4CyUBzKV55w3YpJLxo26z3GGLK2DuPf2o78PdumZzkAbu98M4Au7xZbSczm9Wq26hL5oa6HcU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G6rFPLsH68zh3rAYU1GweZfCr36RAbXWFmpAVxmwguyM6nSDBY8tpmbkWJoUeKf6HZhEbp29nQNQLTFMpySv65P",
  "key1": "LDJfHCCPxfhJ1P9hHtG8BxnUjjJUaUYNUizVd28FoRE5vwu7fD4qx8YTQSVGdC5eicVK9XYiX2jJp55Aj7QZoAb",
  "key2": "4EgLr7obkzNkPDAin8FEL53xFE3XBBFeykhFC7TVXuW3LdoHYzY6WQdgPe7KyAVYocMbgaX74Dxts1pxAYndmV3U",
  "key3": "2otzef44xtzrHfrdpC4txLr2hDnai56p37aYmxbQGBUTShGzzcciEHfEVoxSwDSTjsthF9Ajeaj9nkwG7FqTWSPp",
  "key4": "Vg9JcBWtbbvqMgf8bqsyXtbo5qzZrxqyvvdk63hisKEHQMmG5c8AtWdiVCP4ePse5vnfVsf7vKwMpWSPts3512q",
  "key5": "2TKAppJY8XxC9WNAXvaYNALSa8U1XtFJqQ4AJgoNMCD9noTkFPsHfjKa5LE3F4kJuvh9mdfTkCLAeLyeLfziq56W",
  "key6": "ifEcrBFCR3UfvACuXAzeeRhiFRJ1WpnHxmgr7aCZd5sgGmXMAAB8cHeJLfUVY76U9HL64F4gFRYihjuzRPDeWJS",
  "key7": "4BUojsqNdeGmR1JsyAAWgSWaajY7heJr4HAJ2ipUepmRVCagaxt4oJWgHF4tZhLRoZk6SceoRmgYhMtSmmzjDza9",
  "key8": "2F5LQ1Em5rzgBL9SG1GsXWZr6hSewBScxUq71d7AKi4eoX1ooyWmFzygXQvrTz2DsAbSchHSdw3J3b18WmxWNcuJ",
  "key9": "VZFxeRi1qifoV8QapgRz97DkkkspnqDE7TTJZKgatzixHmk3u4cxyc4qNuyKTMVRLuii8s38tGghEEqVpgBPqgd",
  "key10": "3hMwP4KxqqacuSie5smFkcNdEwa2AVmj5UzaEMGA4o4QQmZsASRs5AUMw22At23vJ9gPVWWPrZDHeamK4Mu7kjm7",
  "key11": "TCq6VgaHP9ZaChfGnE2kfrs27ivb9LPzMRa8HwYcWmr4T34JQWPn3xNKDG56ka2Q9GUR8Qwtfq8NpVk6U3rNHBG",
  "key12": "2hdZdDkShWpr19caiCKzGgGyiKQP6TeL6Vr8EGeyJ3R433NxkBFRo2eQoau7zY6DwtGPuRUfenQpokTGKKbwzwMA",
  "key13": "5F5dFkDoWYnKscAJj1ejbCdApuRvD8bdhmN8rKLkx4SazQa5urhnGsKZvFqqrz4gVcJ4dz3Kwej3rkKGWCZGJbVi",
  "key14": "2TAnBPbCVgU2vWhCJVhHXnbwp9fgHLyqWve7rjFe5mDyg1t7QiRXHnmSqKc2u1WQ7S8YweDa63MpbY4tM6MsfRJE",
  "key15": "bq6LLh8t6k4jncVQ1JLVN51LDnzadEcc17mEoKk6ogVDgY5crpEtCU6jrrwjSUKVkQbxv48E9n8LhZktnQppTPp",
  "key16": "5SbwQqdRxWjR5euLNFDEN5Vgk44V5W7W8TwLYAXeZAsCj4A9H9WtGy8U86LEuETAmEjsDoGpjthuEsx6CDr3o8Hs",
  "key17": "aGEgq2jfct9Vo8vwRH3mNCaUnAEVvXC3zzjK2FzBKm97QWfigFuMRaH5Scqbd53QsoVJJKbPoh7TmTgitKe4ewn",
  "key18": "4Xw36wkkrTNDKBunLbEFuSRgMf9zMW3Ko2a7P1ZNMxNjb4MwkrpRFZMextYUdKw98s3pZ85WY4sG8KmU9do2htkb",
  "key19": "3rAfCF6CJKqGMXh6GtMmzWR4BCHmUer37v3Q4CNhrVkP28dPaiqpaVLB45dokWMt4QS8h6kxyjEfWutAK8JXWZ55",
  "key20": "3sez85LiZBhMnXoAKU9RBHDAg4f2yZ1JWWBouavom2behEg3TVEw5jygDiyR7iNCUN9ZeKaTgU81LnJ3qbndC4kE",
  "key21": "4So9R5EMBjeMxdSQdVFQYDREJkNqQ8o7rJGbubgxGRCRWT72JMEo3e8tcf941ZukDS3QqU8xU4owttS4uzQx6GbP",
  "key22": "eJyjjwcH8Jn7MBanEqd8DBukZUhFV3AbZt4cTmSKmTtXypNf8Xd3cx12M4zGuFSMXPE6LqVZ8K7mMRd1G5FPw9P",
  "key23": "2jSEE4Dn8XN3HsaaZfcFdrLMdAiuMrus89jUp8yhoHjKRimyW9YRW4BD5t5wWxs7LYu4GeCYr4X1w4ezC1HMHtCY",
  "key24": "46tNuAjkUHESpDpZX7NcVzMk8o3LSQGK4H388w81cnBDPjUU4xnBzY5EqxkkGq5697jPTRNtc8j33HeKSk3LyHyj",
  "key25": "46dLssFGpnVZybnrU58ohdBjgHwe9Uhs6D3JwxCGzuavbXPPTtTP8A6i9CYTnfmGLQXc35zNT1xYETvzkcK4VAYz",
  "key26": "DcST3jPF4oAaFqpNjC4MCix6HejrWPn7RdmxrWm7UVQkxzaeSGuBAQdzrBV3jihD6MakSqvjFPMuHACqAHPtrAd",
  "key27": "MuceRu4s1y5PdVrN6ApWe4HVX2tJQDRKGoHb6L14SZfmn66iLtfL7kL8dc618yuXQEAaJM7uYq7j8tDeWgFxrN8",
  "key28": "tKikX6QnJjfqo3tekray1xuVZ2o77tFDQ9pAjAowrPgh3ijuXZ2qm3JNGefpfnyzpg7nJpU7b1Vh1uVuMXx5AJX",
  "key29": "2dhGmgxzQmC7gQraoaQsMKjhaB5Ln32AW3iBb6AYAYnxBJFg3BovYuGbvEq7ccn3pWQdZUQPQf3A2UVANNAuYZfs",
  "key30": "3M4qiZhm7mcKHbV8pRc818DpA6SttCEJG9KtvbEBsVTuXbXeyKp3fqHAhNCotYLvFBiLUHftXW3KTSNyJHgPV1Lp",
  "key31": "57ucDXVDV1Td5Bf8BQX7SVNmfhtqTmnSa4CU8wCMTDk6vhXQwdcP455ky43Kzbif36ciyZBEyrauXmThHQ3kjN3q",
  "key32": "21izaWrHqhhfiN6riQtsYmM1efXsMCF4L3r1LaD83ariMRX6YNKZnkjuThHw8iEYc8FMUfv5CzN87xmEP4K5iCmA",
  "key33": "y7xLebt1d3imX8n7hPkeB4QvZjSwqWne4k4uwAnTfQ5P3xCBdq8YpvZ4f5sWgcjMDkKfYjganCJY7G9KhDfNqB2",
  "key34": "2Z7EPNuk3e5AyzogZU61hxk4txqkPpJp8vcafLDrU1TDXos9Er19wVkTM1zMmUs8R7B3S34qk6CBZPxMpDiGeHSn",
  "key35": "oojboKTX92HuWyNy9AT5L7Uk2txtN15zH5KLh7yySVc6NoszDT6Nm3ZJu1gjDYRxz3rGSaQx2R2JRizS1cBH3oR"
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
