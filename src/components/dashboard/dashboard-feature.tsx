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
    "zC7e1Xbg2aaq9MuibBnR6jDfkQasWPZexdR8p8aqJsm6tdAedYbiFxzsKLx1UuibxX6xih86Ecdsiyw5cfKKZV3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iFjDf7TmZDJxx9N2i8HnHpHJoWRHi8H43FYStd5na71XXCqAL4QrUL1GyXrrSeqFuhSF4bSMmjeHS93mJFXzHjM",
  "key1": "Ch6Sxwk6HPpdJT9rSD6XVc4kwmCWHC8DX7VQx2uHPs3ytnyiUoXvMDKQbnpt7qHwS7tuuJYW78mM4HBbRfzhjLx",
  "key2": "57rYKJAaSsz6z41wDDUf9CVeNCsaTmYZR2MuwoMNTjq4VVz6rnYfVw194x6gBohSDTtzy3fwc5axMAiEn3haPcJj",
  "key3": "539JeTknmfKVDr844PhAskfGC87vfbQZCwqedLsGYh7pAruKyR6knDCf2FRPLdQeMoL6YnHHRWHEzrUP5NALcyUM",
  "key4": "5ruL7Lh5B7fQLamjdqLJbtaMfs7fJmFjncm24J1ubE7n2gRWoqKhgKgxsZ7VaeXorGjsBhDQB8b9choPZbSzgyRX",
  "key5": "bue7CmpzvD7Wq7r5GNWT7A9oUafkiQextoKRhLFi3QtHhTTn7AQeknghvDrSE9QUD8fKbTGhEwcLdDNBaPUY16S",
  "key6": "wuoJCezveD2GdUTuEG5ZsbJNP9bYx5k3KYtCTFMxPXbPn2mvqRb2CLm36wfzHc7sg2ftVpB7tCuRQ1dxXF2znWt",
  "key7": "3UmiQShCvrJTzW28Kb1Eti4DpvYEf5SbBZpnLB2aJ1BsHf11vvqFVppYQi8w2h5y9nq5snuet4rD18JyVp8SZMoJ",
  "key8": "3PFjWZYvizE18c46F8cF4S3NdpmUkmauHn1gYJ9GD3h5zGevJ9KYUem5HC7m6f1F1ocoJ2CD8cxzDM36xiJSN1Zj",
  "key9": "2uuekfPFuE8dqJhTV3Jr5BStWZnJFSf2mcVRNX7gJzoCT8hXV47hk1XaKVEKGXqvLGcoUBZkr62pFMfoyTXxZhiq",
  "key10": "24WK1zqfngAmN4Z8qmv2ya4wtM2s9oXSDpDfU5ezj5TLcSDCykt1aSA9cfmFra5znDVxpRtJqm4TZBzfcoDHUvK8",
  "key11": "5fidsgAgCBHuH89vTDXPp67XHgKb5bDp1mFuVdDqhVZbZxMHvDwYRqSnKwNYvtkfcnMTFDbu5DBHfeeqYqRwRuF6",
  "key12": "5WVuP3e7Ltyo7JsVQruJYQcQh46ors86XqBZeuC6src685XEx21qKNBKUkaJkWMh33p7jzPk1S4CvUHWuS3e1A1B",
  "key13": "45vUvCjcVNkUxTxoMJavSRDDCZwkKLPcLQGGnxs7mxNuGTcDnuhGgg7Er2FwQDBVCFDJVkLh9tsCXpyGCo3nroZ2",
  "key14": "5ESmkJGpAMNhSanQrjdx3BRCiGcVty6pDtwqgqE54DbvFC1dJsz96HfuAEBTvC8EvgYd8uX2RrDKFHSaXKftV8xL",
  "key15": "d6rXP545qKYDasRoYSgEWiwZcE8wj9fe6FPY9q4q4sGyZ2zE79La2JwH3g56XyxAqrZgn6rjXkmE4W8q6e96Weh",
  "key16": "5De6egj9wfz9nYhdQCF7mJj3YcxqNEvcS7A37KWQaGuarxavTBx9wzhKh8kW3PVMMtqcUESfrPXjMQ1hBy4jduH2",
  "key17": "5DBTDZqxWCU2rUDrVz2dP4i6HFCypEgpFZTFgyBiPo177jyCMRpsWJWX2pSyo8TpQtd7Z5EmagaX3HhFqvGCgiiV",
  "key18": "3Ew3yaVMvcp9hmATS5hkTffzejohhV3ANRLVp6TeFJj3zpi9ZKjYqvZUZ7etzJ2DTyuUqbBBNAvZN8fZd33Dp9BS",
  "key19": "38nkwNDzxmcdZP7DyMpzNjvhnt2nQZzjPs6vmcDXGTuUmHCS8PguQuiZU8WMnRpepDHV73AQ36QNjXUDZXY9BNA5",
  "key20": "2vcC2dnamPjR3bFwNCLVwUiRsdYsZSzbaMpyWfHMVfY21YnGcTZhx6aLFnPWMv1Uh6H4srq4qJtvgVuPvFAbYVE3",
  "key21": "3pDxJZ92FFETuj68d2YhDTWDBsHAWVKrngoGp5PRqWfFCT1VeGbXHjKi7sn6YSdunryRz3cF1GeWJRzGxAxgNbFa",
  "key22": "kD4ExUhgDysgJvw7JwcjVb8TDWMbGknnXV1V5iEAkHpWLbTvVwiWejDXi6Hgc3wZ4dGVfXLpHjeRr9LLcFXb4fM",
  "key23": "nDWHzduwDStmUqwYfV53RBY3NxmUBnAX1e1cbTreV9NrNx2pzyhVfwpzRd888Ct4zXwpDf7CKtoLcN79NEiVLUo",
  "key24": "3j4jVCabstdAKD6ZWd85EynLxr5QWu2b73VksfvFNscM3BswZHLubc1gsSTkrGymP9ziXGK3o72L3wbnC83uuWco",
  "key25": "2TDkQzKRzQuibUGP8vWT6PFzoMTzgwVXd3mHsGypFtoGBfnknxVkFkfSreQPifKzXNiVsSkLg9iXtDpdRJzSpHmB",
  "key26": "67i2DfJmcXxZcYW3K29hwnjwtGdsDLAXE9yRjdx2khXqMBHUX4RDmf9AcnAgDecDjJEVbBWZX9fVsix25qWeahEg",
  "key27": "5BN9ZTj7XaaQuZRfu6jamVHU5PV3FbQBYeRfrMHc3XhJS1ygLBX3Lkej21NvrqWwaZZpcVqSBb2du7fMyr7Bur8R",
  "key28": "3cWd9nsMxaP8Hg9rV3pAUwVmgaBkEoK4xzTcam9jxUSgQcPs7EzcFxKeEm5GFC2Hoo3k5b8HLBw8XuNGYG1u54e6",
  "key29": "5sHzVg8J3L9n55bHMiuevDRH9x2bD89UgQ1bkYcJYbPN1xsAjfTnmZMj1mzQDqKrPuYw5qaM9jwHQTJSAKad9PoX",
  "key30": "2CGvLLoNNB6146rzayTN1RVy9xFh4uj6KAKEcpa8mSs9GYYGjGA1GTHcEdDajMBnpGasBcqSQGawJzsqY7R7AE7g",
  "key31": "4JgWxiV1n7PHeq4qXHkHoT4d3fUJzo2WWVwEsj8wSVWuf86pHQMagqDGxaijgwA4mJDo2qbF4E3Cv4K9HizrUht5",
  "key32": "3QWzmQcFrJQAzta71Ge9JdY2W1FT7HS1s51QduG94dXgTSWgYjLk4To3S3u7K7MDcJbVqttpckUg1jrYWAZrK67S",
  "key33": "46pwwh5wmc9dMmd3icKYenD8GofUQ6DwdcZRJwtwbAdPUTmMtEYMLSaZrstdg1bhG2VSexQYFrNdgiH3UmkJ7qd",
  "key34": "2eNT5YJB9CFW3azbFxZznAgMDxALcihmBCyQgJ6VeLV5JFexrWq83mp8TbbYnG8VavztDMX63QbxPGsRzArWbpri"
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
