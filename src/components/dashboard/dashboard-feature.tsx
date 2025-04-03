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
    "j7WXq74mdEqKgp3jkyrAYtjhyYW8kpDqgcN6nAfixjgHDvqf22tci5ymBAU7pK94Vy9X9saymu4RSftaaWT2i5k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wP4JTsyWZAxZgfEVsMFfgAgUDuPq36kdXWSB85NF8zdsZ15jNPLVjrRbZBbprPBRCiZxU6VzYKPsN75bcEbWJZo",
  "key1": "4KTkuk8fFhmaQyjV8orkuGQ2BefC2YMZjdcuvxgqzjRnKATNRGiyS9SKV6GEwtZ34Jm2iKShcHPUqLJvZXune1Wq",
  "key2": "2VkpxeYqw65zQgm1u9vFoK4TXDknUCx1UXugT4dYQYHNVudp3Q5aa7DuYPmZdz4BACqwFFK1AXMxWRUGtH8ijrp7",
  "key3": "3P4ibEA8GEZr5vUgzramsYrZ48EZbxvXYf3e9ci2b67xzpSsWux6GUNKA72u35SX9BhKwPbwny2qZctH4e6Kn9WW",
  "key4": "BVUhG9dXxS5tfwYFJoDKkhMATpSeEpsmG9WhVz8skZsdXhcbM94SQXa9vksNdZVpWzQQsZq6nzm5paY6ZoiH8Sp",
  "key5": "2NEc1x5V3AtkjN22Nz32gsCb553BtGe8cKorM4T5pA7XD7Z9m8PfskXZh6ScpsvXABFNoJWs7SkqF1wVL5HqRJxh",
  "key6": "2gFixkn7darSRMYsQC8h9CNroFUizmWHQz43A8xmnzCC2UU8yUFx1v25A8EaxxkB7cxRbk3GQM1uCC4NZCiQHn9D",
  "key7": "5gKVWF4FX4wSogUFUCLuo94sRzjPdu6Z7bVrQRi2gsiEKSf35rYn7QvdGwJRUUzsuY8RHG55WM6JqkHwwxwkEP6f",
  "key8": "kRyeJ7CDUzV9uCyWE73oAC4Xe3msW29YEc7WnE88Xftgs7FzLRK1BRdS8u1LNEDSFJFm3EdbxRR93rSimTLWYND",
  "key9": "3aqKWNMsvrr1pGnxuqWsvSL79PZ2t4xyAMjDUpQNQ52RFSdTJfF1g6RyxGpWZTzZFUzmwvjm9VzNEz7WifKgbMiE",
  "key10": "5n53Z5hHfyFBYt4zxYPwUBcnpDikxQVP5S1BshuakDsN5XDQXhW8zqNw5U77r1PkhUGJ52FFKgWSqYLvWVFuGyi8",
  "key11": "4CDC1vgP5wDvLqMY687FtofCvKNGWzQHVPSViBb3RdLaEVowyZ8QFJEr3bYrYvDoTwkMJhQGaG3yCKsvfG55vv1M",
  "key12": "2uzcdYinQZnY4bdaux1XBnSB4tUNcoCbAWeYSuKiu1kZsvnq3vb3yWvFkL5iW2bph2iRn1ZVAdusH2RGCXujcsUg",
  "key13": "hyU13dpGYPq8rBzmCs3rgnuYnvPRX9d8knsWANuPaYMt598nFpP5BP5m4pAs28mqwkJG4GEEQEYX566mPdxNEps",
  "key14": "43XRWP7pVWmB9H8UCMi9gr8NMfHMB22BcdE6TsasDbcQvNTJgus51igxfZuFkWdZX7NyB7pUxs11Mxd1JEsx7BQu",
  "key15": "YUwCjzTz7Z4XMbQzuEqYskqSdVoEaFAzM7nT6SZBJCbMSwsR2bvZzjCKFBzKxDNznAW4yBSKYpnaQyVfbCtTH99",
  "key16": "4VF9GgEd72uoMt6SyTd4L1ss5Ma6PA8U7Z8mbc8EX58BscZoP2kzpSoz6mBU2CcYG5c1xURydgFz1iA9gGJ8GttM",
  "key17": "5pkYNTSenqnyrdx2ymMgDorg516JNQUYHezD7ZERRqFMWbuJcCLREXXiGZmxmvRdrHKWm5RgZzQLNUaT1hrsJAkL",
  "key18": "4PEWufuWWXqoqUaTRupK7uXuSxuABjoSupp5Vp9QwM1Vnz4ue7CWWRhhu3bsQirb2aTTNL9b3dq3XmZ8Ld7w9j37",
  "key19": "5Nf95Ef6yXoahUPYvkWYZR1aDcm1Fzi15NEueL6AajNsZ9nGrTxCKYzrUbr4nxHcDJjBJ7oHuRzdHxaK3ufkb3pZ",
  "key20": "2YFV69dPeZCn8uSpL2RoXDj111hu9UtuDDoRgKKSWQmKWRA5eMmm9MsGArPMHKoMeAwkdZ1WBJiFboN5rnrMAxjv",
  "key21": "3TEMFyFXpdTbVRPMGPghTT1JHxeFfDVGL8yLTJL28MKyjhNWg8FVWLPZQtbsCpgx4JrE3D19WiqPJZUUVw8PFSUE",
  "key22": "3RGfzCKs8ypCFM1wxZMKzY1Ja1GLZm4uNVFNyATjFspficn89j5mFpjuYBfy6eQ9Azn3VNn5Sk81SA6wWgy3rxtS",
  "key23": "4cbgph7ejQarBBapZytnLpCDJvsMwRuSs9JvS1vCfzFoL9mBQo9pokiR8nid4AmPvPEwe26xk7i55L3AJdCUYizH",
  "key24": "4kjkTJeubBEhRxaKNBMRyeTtG8PjvMRQ2brg87qrpPix1EKq8NU9CZyyb2AAw88bNRigfM8TwZaBkYAxTgzncckm",
  "key25": "4DoE4QZ492a3EtNpvYUUfvxrt1X275TWn9x3iQh9kq1h2Skw9q1bT3NWcC6cfumj2spQZbWHLPfDRAPS9K5mtBrb",
  "key26": "3VHaXefFRVJqzFjNz4yRHvCEaaenyzU9AAdRjzdgZw8nMNVtW8pL4vKYWNvCQsUPsWjbsrTL8fxcvv5fX3675Xhk",
  "key27": "4Cy158fN1qfb8xDaCeUR6AedaxCSZ87ZVK2AobCh1j1zp6e9vj8f4gsEbeKi4QwLaX2A7cn5yMXcgvjobSKNngW3",
  "key28": "K3pbqmRdxjrdtjRCJ3jztZ3VG3SADdjFLxUaqhaAquEa4dUDq2gCGAzg9zYtKa6KnN6yrZPwxZjpDDrKGvmrnRz",
  "key29": "2foxAgk2DLKFDjpHJ1HuwK9awVk3EwJ54DRCBJFZMujgamxTGB1Y618vFCqsabAEDE3UAiKUJUe3fZw8c4dcrQmJ",
  "key30": "abf9511THx5TLfzSA6YZLJ7hnC27oPM7KCrAnfMwZWtofjCGPvNpkGW3eb9qsvqYBA7cWsFPYPTQFByB9JXdvCD"
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
