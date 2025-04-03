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
    "3RXMEmxB7G7C7HuPMResPPTipSY1W6648nXhHwHhc14ZvGpdBmkmkjDmaDFxMb8KupKG64KGsdyhWDPdaP8mKfjJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VYH7r4uQpKSdGA6mWtzLsWgk2A6toHqfxh2PLuh7nPgiYEMd8g7FxKHTsvfU27M8X5qQ6mTdjahvd1bwX3WY2mG",
  "key1": "5K5ZCxdsFmHRLQePHoPp89aua8fqjMW2CGDz4cj6KLjD1ofdQoddgNsG188QWwG12VTuyEJfnr5hpXY9rKGFrLCu",
  "key2": "qysj6wfuNna92TZAhzNS2Whf5Ed8hSW38585kbuYuhADfY4qRNULzqi9B46zf9xWfGSLqumFgR33vZgfB1aMK9e",
  "key3": "45ss4Y1baoGwXfS9FNQ1bvrxWL1wZJTiFip6eKaxRQ8Zix8HZTKMbceFMkW8gHr4HpPFdC8HMqDNGB4P2UVz6H7x",
  "key4": "2wPEkRhDYs2FDiFNc1axL6AxcTbHaDx5BF4qgWvN1rwX67GKrWibB3d2uUknbYPSLemfwbpeGbBFieS6oc4rPiFb",
  "key5": "xSuBKiWNnd7w8c9g8eZeegMcCpfueZfZmkESdqhLeoFYarg6MWnAKvBoE5ZfPjwAFJbjuk7vfWPrQmZZXjgwqpn",
  "key6": "4rMpqe3ZNYZA4FHmetPdgAw9w37hJ8DtWftHGKnPrDEfXpUxEKQdeYFgjtRYuHz5BeEjxJUwZv4L93VD13YBdtfQ",
  "key7": "4wHnywxLzy5nebQXihdA99sVBH8wUA64io3BU5zt7TRFZde2MSV6F4RnTb4owQu5M68qKpVTjAa2AGKqWRkJ76Wq",
  "key8": "4ZSoCmrsTSqztE7AqkcySstv4hDmgvTpjknz8xx85ujFBKUkzZphQ1zUmWovUY6gJJV1ny6iZsqz2LC37jcQ5xz",
  "key9": "5T7xiUWamTVmvikV2Ny2LGdz695xAgnUeGqQnHiXzDcVLxiRyjjZNXyxXJJFbN8aNMKjnmRLKqLbQFeZJVtQLmZm",
  "key10": "2PaMfiichvUpJRWWbJnXqGaFDRveuF5ECu4VDMMPFuVMRK5V1uuZud7bYrZEZbk1oqm8JYR5UBqF26agAZzkfKo7",
  "key11": "UrVvLQt5YrX3v9Rz9BMXWUKrSPHXT56DXiW35VNjKkcvf5NQg5gXmuShxek9Egj73MYXBX7BGEtPSSLNKwBTYxk",
  "key12": "2mAxtHZSWQbQFBLWeyXSDZyTuUpKgBEfdyjUD1xgQNTbCt9zsQSVEiUokb2ZRBs2jnXAXZPymJQQuvJHx6R7GVA1",
  "key13": "2UynJWkBPHE1yfoRQ7en9eCWhJkh7GyYh3qHic8zVCGTrhwpdHrKqZ4QheJVf3ngnzYnXpR5GtULrKqB3s8BfbRN",
  "key14": "3GexygFnrADgdMeM8nWy12a14pfcGLTZg1jcTfvb3DaikFE6WTdsqxiRP1pg1QoQSU39qEgDvsdFUxNmPCmELCRn",
  "key15": "PJr5zGxgaYPte9CRFbBHvnc13dFS1EJDJmFrLgachvhoGKkVasVxKaYdEgpYTnE9fPbxpzw1YoL2VNk3vyNzbpg",
  "key16": "5p1gVydJZN2DrmBpwmc56EA2EE9aj2bkS7v4zdcTUiqDEDz6SKbbYJ8Ma3gYNw78HhzkvSuecGUEaVi8bov3MpqX",
  "key17": "6751kKu9qCLWKrsvdXc3a2r1KTjdXqNJxwAVrrw5WcoyDBSZ4NadnKymXciHEpwUb6LP6nXgAR372zvMveS7W24P",
  "key18": "nd1WLywuX2f2gBBjSsaZR4yUYgg4j5EMo6QmEqM7VZzTmrgi12EYm5uCLBjuVFNzG8rTPjdAzgoHzD1zjvxJYN7",
  "key19": "bvspsGeQ4agD9QNSrPHgvSj4gLHe4H5F4rGERzFDgE8cXYGyvF22jN7Sia9xGbjQ4ikZVoQ8pto4uG1TuFH6RpA",
  "key20": "3DiCo3paALrzP27drR6Pekzj48nVN925z9tMFhmLfC5p9V8m1atLXz3QHe7QJnNqHY4EUE6GxD4WfSk9cuTLnkPJ",
  "key21": "4VxrDpKyyYV4DcxohUptXiZh9akjDV1VmmtTy3muDBYdxthKQickyaW594DBSqF9vtvdXkRJCSiSAaprzjG7Kwu3",
  "key22": "3w4fbCKkWWqwiHowy85YN3wWZknDKW5oYkBoCwtsmjcHVFqvWrux9BWzffzYJcLEcwdo2jLBFFKV1kNbr3jhMsd6",
  "key23": "TzzC1Dzvm8ngj96Zb7EdxVXFmo7UbAispciJTucdBJYaqqVE7LGJhRmaNEVo76oobJJyWafpjvDCK45JhTNrDgd",
  "key24": "5pcahhJ68mEke8ygsdMvB8i3GF2nqStyyHmPWmR1frzZhL7Fhk8i8kfnTasq6FRxigboESmqoP9KGueYMJ1PemJ8",
  "key25": "5BCNu3fQtyuDKxZmmKdNq3kbLzW2yprXQ1xRzCMcvTzdDzx1dfwVBUXDDuR1ox9zZir7qEgaaBuNbMWNUkWCMvCj",
  "key26": "2WR6VjCUiCZZxBch4oh8aKmriq4V25PVRARm63uRqV4Nfy5ne6fSiK1Qhj6eZavvCSiyu6ztFV9eauQjTXEnAZQj",
  "key27": "vfJatM7gVzSafFzCiAoi1ejCFWBLCme3KEQYM38cD1hREc4bLk5PrW1GvsMBAuZT6wTiTKN8qEqGEYhCcMhq6rG",
  "key28": "4qcDwJ1FZdpxCwvb1A56AvA91q47ids3V6GqmpGmSuV5KcZBEMHcp4oWKFBXhKgMP6jjAjJ9iijpgtyjKAHnYfLu",
  "key29": "5vNj2U61Xwtqg9d6idZh15wJgDmgKdgSYT9ehb7AANEcGWsudLBAsg9tVF1JWFrr6rUrq5w8kY3CYRE4kbNDHdVd",
  "key30": "2ahaYLxTcHHY9pJP3dqvTTSThXip9ynBY7DDh3VmSiD8vA4QxXMDSEmRCVkvrYbWNu7BPtF22bjaFPxdbfGhpsTN"
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
