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
    "5fzo4Bqn1bTA9LiELr68kEpu6oLgngyWD9dRoRPurUqUNorH89gkjRudEt124GtFuDc9HWfeiagAm2aMuFmE5L39"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fopi2kWgEcVz3dgdgvAKP6rEJQPyMNTKqjn6wFote7wvfYA41PiRWWd2DEqz6R5ySNv6ce8Puf1SMN9MLo1t2hh",
  "key1": "4TxRQqrmWD4JLZKy18ACwEXG4vV9uEV4vVqB6L5ckRXAY9NdVpfgQVMZJw6WezsKdECzNEjxkDB79UxboLFoyqyP",
  "key2": "euZFPp7TWUZLW5oVJqXj9BcDCKnAGNDB9JfDQMHS6uKReLnfWTaJKD1PBatBfziB9AMjoaoYpZkikEoWfVRx5EM",
  "key3": "2bSKQBeDs6GYGP6d8Fw61uM83L15jM6VPugDdDKmgHPxc6NtCQC5zJrdEs8khRmkNd6jtL5VAFJk1TSK3yZLwzkP",
  "key4": "ewys4ViqcGACkKusczWNPJApCQ7jFYc53Ar1L3488rrRpzyb9qjdVLkG9sS5iTn8e9d7TD9ZrLFck5AouS3rd6J",
  "key5": "45XtBEEK2ea8UW2NP39kGFbXRjmmAuczfbuA1cmAGg2ir6CG3y9vvBMMEqpExGqu8A7SMibtgzXn3ZdkWZzjLWqj",
  "key6": "5w7ajhwgAKoRYQXj4UYTMbuh5S2uhRNJJm8tPwawZv4PBtkRSsQGkWXF8ypaFAQcoysNYkDi6pQc5SMmr1mDdzq8",
  "key7": "45GW6gzUWC8xXZG6gbgA7X9cG1AQsV9gKYXXhELAyMRM9FvCczDNXKs3AeW7vitzWMQMuCJJzUL5QYidBUPMrxQc",
  "key8": "3u9WAWPZ7vGefihWHZuqVR2W1cMX85p6TRm99M2hrUdn55j63xuFbQC1Gb6xWELXP7cyEyaguifBSKV8N4XhQGYS",
  "key9": "5EXPBeRcCMdX381m6o5ZeXanS4Ax2VrGQrkTA8h67BCnVc4V6SN77QzT1BbWeonJroVpX4TGTK81eJdnafrWPNBA",
  "key10": "26asNsLJrYU1mRSyzrGJXLZykoHVCSFQn1AAK9eEUCPx1hk8XXwGvc2wDS4uJ99iKiJWCYRnBQHAWgTfHxWuA4nS",
  "key11": "66zokBFxZ4Hg86pL8m5JPG5EBXgGeMuW8QFEVnQhFyAbfU4Px4cubT1prmusYkpjEecWszSiP4dX4QNZ5LKFWLMA",
  "key12": "2DzqGMSsMwiZRufkrvWwp26goJJVePgNanCtE1jo2CKQYsii7YCNrsoiVUmaJgPXqi3f3SctDmKNh4usiAcKxgK4",
  "key13": "5roTUGPcV18hrpZVvrka5EJUWkWL6fGjBfBTzQHwrCBpRpqkTcQuQsaSgZj4PvXDev8n1dSm1VbAjm3dghDwDve8",
  "key14": "295hKbozK3K2qHASLFo5J5v2tpt7fuTcNEiPQkHAuMzKFpTazbXzNeDzZLWrAxkWnQbR6VVXQm2knCLiYLt57sZG",
  "key15": "5xv2nhsUaHXBhPKtB1U4itCVsMs8hNcCj29D85kEAVCwPpv9MTYKrS9nCD7mPWRUdUwukdXgQHyFjN9Z3u3mbajj",
  "key16": "yrsCFFLT7rwsG8kgoCBWpfFgXCrjSqUpM6Yo8dUJAkMYX7uALVf2jSdhFZJx4H1CgGFxWWy57kXmqSyr6KD146g",
  "key17": "4DbxdHdMCf6JwLnS62qNCWcHoW8rjHBvSat7tPR1gRbv8FXif7NWtSdbjRVPDDxBc5pxF3Z3BjfECq9PgHxXzCBY",
  "key18": "5mTGB1k4FBwJVS2hT6zh8KdkgfnNfuR1eZDDokanQSZiZGN8fdKLhMG2XmdfZrKr2bqX4Vn1hrW4SaAHvCiA4aFy",
  "key19": "4WcjXod97AFaSSB49uq23DnkCq11CDcywv9drSPWpXnpe7rsNaCJGoeequgPxFE4Lrvca2dgCSjprPnM5nXiAwUS",
  "key20": "3tQosWCBDGuDE7zazvZLwZbHvto7Z7NGDRu4FRFRBYuF5CYzUEumVmogkGJPRA9EH4j2WAbsUpzt6M8AhqRDfp3V",
  "key21": "3oghs3rBiFV1y91Ayxv4zGQaKHnWPiNM6pUFgzaNJySnVNaYBd3v9NgrNuNFb133HFxnvRGR6DegqxoKrhFJFFXJ",
  "key22": "3HQMupMP5Z6KkqvnSFv2xHcze4M4cMzP8psz5BXoY5wo38k8y1zNzTePsR17485Z7sCQVWzVvy4UBmUY44NXJ6wg",
  "key23": "49ThNC4tWkhnKGoC8GXVNcSiB8DRz4XiNQSpS8ZQPbMymvMYQnk1Hk4PJHKjuTxbvHcyFEH2236epSHKwYAFDtT1",
  "key24": "2bGdyZLX4W2MquCu6G3LUk1yr6NWVDJh3ybpVnAyuXtRhdT4yo5gsQrEw6pWfQqWzsCEb8uiKMGXbG9dWvL7wrVy",
  "key25": "5qxa8kDsq6KphJyqSSaYSGAa8SBpjc6jXnJ8TZUNSqvWN3DccnegXT2Ucyvcg8scTbkfcKXTqYdFPXyyvUW17n8H",
  "key26": "3miUTw8xXspHLuxhhAdBLhsX6vf6Y2MUSCxtqiMkR3LpLFxtGUhz3FsphVhPfMRzvHFS29zayFWx2Tck7ktrgSbi",
  "key27": "3niQR6EHmkr2LJGw26dSAGxWGqL8ZEvNFWoWFdcTGUPhtMQ36HHzC8Aq11aMUWQPb85GqmwoRLxngzQp7N5TKfrA",
  "key28": "4YdbBC3185tzYNVZXgNYNe6FMiyoYRUoFbmPRzzRuUHsB9DjdeyXttqpqPNaomA3ZSyszSaWeovKqhyuS84rUPQe",
  "key29": "SqmmDdN4HmQkcQccqmsTx18v3LqySsgKqochmQLL9LdL66g27AZFepgz8qbu3zJDvwzDHnwqWCXhhYm4bJ8LAc4",
  "key30": "kMYwwrcPLGoCo4UCHdXh3jPDAgpJg63eiUMs96b493fQzpt5g19NCuDepKbjo7eNbANjVMtgjbw7uqgfWzWJRhN",
  "key31": "F2X3xntdKS6QX1cEaR8oghvyeCDBcJEjaxt9awvRKa4CxEuMHqw9C42FXv66dUefX9hiN5FreQEZ7NzmKyXBKU8",
  "key32": "g2bjEhCr5K6R8vzTDncyNo7T5jSseJXFeehwc9oYLa3qefpzN8mqoWmCG3uvfw1EHjK2fwYq8HBrA4C42pwW26e",
  "key33": "2F8bbGDaf63JmqdetFgEP7TgEkxEA6ien6XpumLULX4vKaugbUEbfofhwSaLUTy4nvBkokuwsRh2pqes5w6iAvV5",
  "key34": "4XnU8aFx7K5djK6gVJCUFSABGtDt7Hoo4UR5TNMyWYgWX25TL7dWc1yZpuqDCh4AzQbgM1Dznkj4bNTUtr84rYmA",
  "key35": "4N3zdzZD6StP3iS51s5gei9fzkNX7xJQodUKPBth7kukb19MLUg9z8Qz4x5u2YLKHzsSQe8RG52RdqfvLg6bPZpw",
  "key36": "67CmsC3TuQx2DY4mSWXhofb8JiK32Zxf1fKjH1otB4TCTjmVrBT8b9pyUBFnx41KpzSAJ2XNNYeYp3q5piQpQZXu",
  "key37": "38VgAdnsGsr1F4aXAQg5pjcNWaCDmS97ajxudPse6eRDn3UyhVzydiz7aCA3h8CBshwJ8rQ2n9DAHygJrNf4qPuR"
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
