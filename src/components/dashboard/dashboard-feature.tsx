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
    "3f7eLnLndsqJYdW2qR8KEmCm39uPo4wz4D8rLsy5hFeRbCUazYfCjUqBo4zcXcgtgdb5iS1yS6Tw618rAbp5sSb3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LhFM9nYjU6gAZUVcfm7ipVx24zQuXTPRVkgoEFZutBo83HE4dd2cyqxFNbKoAuexwzRKv6WTcLs5bgPCYxKfyrZ",
  "key1": "2c5NmRWqSQGJyvHNEDLx4FWwEskieFe2NQSzPgDbboS5JD2vJoLw5muwnsDgqzcJRVFB6Z7tnyt5CgGkJGX75xa1",
  "key2": "2y6CjAF5AU5JFMu5oRahi7R3e1scKqKzjmbwA9BcDwiHraA8VmXceeWeLbGaFTjN8nH7q25BHzbuWQMx3Ei9Qp9x",
  "key3": "3621dB8V2oasf3RfrYa9PYAmXfGECKvdDCL5exGUfyygYqCtWbcjPexYBMXZx5vbMKeh3ftj2XGVvNKyCkZJCPjq",
  "key4": "5MznuPjAkLeTTEgbVGaYpihQZpkCDt5PETfXMKuGtvAFGnPPMwy4ur7mjsWtRjTR3Px4hCMHtJfwhJB6PChRHvEf",
  "key5": "5UA8V29ikCi8ieZFi7KFZnTiajEnoDQzDT9zDykz8e3UYpxBtJfqyGz5r1cKmm9V1rfJUKfJ8ieG3vxbxQ3XSUpq",
  "key6": "2T9tTBTTSEcyKfg2hgHHhFpBvR76B6GkMhMAyVtX7GpL53QGpiLTCGE2p5YCAcSURgV3kf49Dm4zTdMJtBhWhGN8",
  "key7": "3SqvXRBFsdFzKZZBqPBwiA7yRofVkhsSCBuLjpBd25edn26KdzbzWWBQt8ioR7xqMDi3jYgovmDPaM5pTyv4PkHe",
  "key8": "2v9Gn8qhrFthF12kZUAGaeWWVGJdj1YgokKM7UGTZtnWHADHKAN6gDgAmfbkcnDebsiwGkpFL1owiYECmijccX6c",
  "key9": "4NULvs5MXqczv5hAXh4ZgsEZEYSDjPaPTJq53Q2t8tVRjuCSNGod9fLmmGCk1d9rgzKUvRM54DJ8WzxoHMPTKuo7",
  "key10": "5ZLh9Z7hoCu3uYA29MTwH5LkmCmCAkGwAbxn2aDPUSxmMyKrMkMkfk7JLasbb3gwmoXLYouRoGycc36bqqtFMu5J",
  "key11": "4pnv6zHCWCUUb2N9mz2jF2mKFsGCy4P6anoG7LL3h551ZjftuvpzVyFtLiuC7EdvvAD5H8v6jXFdpxZbBMFB4ewN",
  "key12": "29SQfA5tHLA7ZBD8sL7EuN5x5SJ6UDMyotxAUAgWYbk7xEszdrMtnKuZyKCDa6DdgdHDyR528d8mRmQUk4rTw4og",
  "key13": "26xcvWLfibFCfFjeQUUeyfNTM2U5vNika6LLBZu62ssuascx9K9DiGxoiLTbtvgHLckCHj9nGRa56avmBbn1oxm6",
  "key14": "29nKSJnGGYayTPizQSxXgiuB2rg3qD3LRhZYYNjS5hw3Mw5nRUtqo5AX3C7Y5sgZYW8jDnQC8442weiYBRP74Ufg",
  "key15": "2YrR1wdDkgaQNuTvZwg2WMcvYQUCSajP6G9AXRdGtFphXx7V11LMdM7vPiQUMSLiRrq18kY47Ybyrbqc6xZGuFsQ",
  "key16": "5SagKxxywnSMyD2qNsRPfJpzfht4NU1QXB5aKk5ptscUteXTT2ZrdDffq9gPV1kKDU6zV1qdDbcLFm5qawJJQfAM",
  "key17": "41TLWWKGSzxt6GCs6mmFrFMbbSDy7yitMuPce3YBrBGMKw9b3ReuQp4vd6C6orkVQL4DQXcxzkNxv9rL1PrG2nET",
  "key18": "3UNjUJUX6GNPoG7vVVB1isTWjJ8TP6Yx7UHMJU6HW14wuNx8WHZMYcQZs9GJzMMhrKQAR4QQGyw6bHvbUimZkoRg",
  "key19": "jdrcjJsrKjirmz2ZGFBNjvrhuTffYTJXuNUVBFAyTiYErFfzZPet5qKrnNq5xbY3Dcsh8QeYrVm7YUNRLeMudnJ",
  "key20": "3Vi9hzxdgYPP9vd9kQReEfAsihh16yUwr4YTWqsi7j6QWb4P2ov5dxNdY9H4SpJFKCK8Usb97qDxYGULZyXiLw4A",
  "key21": "3Kvzgd2n97z8TxJ8q9K7X897Gqiwgz7geTVXKa1nRhPeGgfYrPvUYayrMCe829ULzq6kiyLdubxLyocW3JdNjBVU",
  "key22": "5Qp7BCSbLyanGXvkdEvDp5W3jJoBKsP5oPcUCNH2HEWZvJbmX97gSeot5fckkzknEckMsAww9JBoDRVwJGQTX3Pc",
  "key23": "5WJ2dTukwk2srHXpFs6qMNHg1mjwRgc3YrSBKZPh2AnockWCjqic6Zb6174iF96hVufx6egngRbp4ycQKbfViZBP",
  "key24": "3BfwcTkyQ2DK8CucZGdBTXB3kncSdJYMvYy7g3mPUgH42tUZ71Qy5GjTcCbK9WXCNZz21J5km4U6mAny32Rxrp1C",
  "key25": "49Xfg7SCEpsfVSWXAC2pKem66uKd3gv1xDmjb5tJL7RSKntr1oJEozCNKVkYEwpJqDJc4P6YJY5EWNFW7vAj1KHW",
  "key26": "5FvbVq4M6hKrAsBSMytjXBMwtdJDdmU8wXYuha1XRYUiSrzxRrjYd4FTC88byaJUHU4opW1dRUoNWxXrG71ZzCrr"
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
