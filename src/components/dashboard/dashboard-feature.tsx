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
    "4DXay8SKHBFFmDpCikupRvL4rveDv4VpNq6gVSqURMNp4de72KeGehdZ3A3HyJHNs1F8NXSDCVjmnqtknmir3Utt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1D44kKdgZtgj5Phfs5NFB3Qcrnj31174jgxeAR3YxJp8CzrrV43GLwgZ7KEbgyw9NhcdbeBYUVpo7bVRAGXEwQb",
  "key1": "5pv69Rpv9Wv49ukyTCfKRHS9xkLGcU4YEctJehvdpqL1veh487XMyuekau8Mm3VE6EV5WvgFryakAbwuofDg8p47",
  "key2": "4eqeVNWqq9gRSyvNuUqVJnSq1dWP45RKsL6ky4gDYGEpvsav3JEYpqejfVne1YsS4h1dkX1bZYjfJH83oUmzevWL",
  "key3": "45q7udJ3gCxyqWsHvzCekUVvm8bvwgeUijf7Di1xzUfttmJyZXJVTx5dki91KmyKPgZy3ZzmxEVZoU6ys3B4oxxx",
  "key4": "S3ZN6c2wqKKwTXeF1xGwH48urhyJYPTi5bTAp29qnnc4Gqk8gchkmBmApq12nAry2nWtWf4Czwj5Y45h5ZY7whv",
  "key5": "41qTS6Um8UQ9X4jDSQwHGmfiTyFDh6TmNbGnMLmRp3cJmGkJYd2o94tthkxdB8kSdvV85H3gzTpTT9TD63KqDEQP",
  "key6": "pScCZLAUyTCgsStcKRuirMFMADQAp3VAymd2PFzDU9HcY7twdfdnfQe5YjdevScBD2c5xzMvzZk6YXQyRhe8BVL",
  "key7": "rLdSbcrjeS3ab7AdsymBK86xzQbuQq1ZJJikDEXtKZncRSf3PETdHSCG7ET4coGmAyPx5QHopnFvt5xRgxu9DBa",
  "key8": "cHqS24eoTsmdzwD2hk4ahLJGpoZA5WcsEkhBXwuTfHuge7CdUkqVQeptoEnw2yqSWMY6WFX5MGFRsSjxfH1wESW",
  "key9": "5QbrERHXmc5FQXDJvL1vQhZXEWooBm87htfbEzF241v8yje6riwE2gBNfjRciWq64XerVENGf3NQt4Df9crVWDL2",
  "key10": "Cew5d321fUw2Pujdj8oBsatSGaweAo5uSw6BrDgbYf5viBPKoQXKxssRps4H68r8zc9k7T7FJzXodiqnAWPQUGU",
  "key11": "5YJcsEzyNnMo8oopdVMSxXUN7fnn6cyCQxDqheMt4ZwbeDGt9LpJCaGFVQaYpLUj8URnfU3KqjpZ8xLA3PdxWhcW",
  "key12": "5Ptvh6f9JjcvHGoG9CC3ULrD7MP5Xop6FrNzGWwrDWTkxSAwZ8D7GMfMf2u8v7H7t6tYJbmPjckQQUhjxbPE6WVp",
  "key13": "Dene4bpYsVjAZ1NbkNv4Jy8Sq7sajHjfUEWm57aaazkrk29pvyHELW1xHtJYMvz4D3MAFSKQUPEXj3jmMSREZk2",
  "key14": "2LJ8Qm1842bKuwAMbdJhqaCSZ6TPViSb9HEMJjysEVB8MF3UwUwJqUt1mY1kKvRWpqcrdp2eQyQh6RfHBDXyYuzy",
  "key15": "bsKc7WhCwVSFn9Qv3c3Nkk84TAo2ekGmTkRXWedbQyGZm5p5UcGgirCYqZnhkyeYpL7JemBN97pw45ZJuDxoGQA",
  "key16": "puZeVKpyvPtho3JovegZw6MSWpEuQykNdDDGzjWMbbewSBFgLwABvXi9ohjGgskVReWxMFLcsEDbPowdRChRJ2i",
  "key17": "4g1eN9BGATgWAyPZXv5imZu5TYebN3hL7beY79Duh7EXgBjrey3YFjvV7LoVwdnfov8MvMBbkRKCHotXkGb4vMzJ",
  "key18": "279gy463bsPraSVfVJZxrwgFUkHEvpnz1AVGiEhvcTmu5jKbGXXJkyCuYqUhwYTqoNLCxYhjeEnkvFJudnBz9Jw5",
  "key19": "PHCcetbPXtg88HfzjkXWq9DtyLjV17yiT5xc1QesHbKoijibiKGKQos2SqP7zPSJJTEY7uy3tSSW2EzXDnTg8c1",
  "key20": "ycGPkpTCbLikbREpTLgnezp7AS8iUCXcQG5G33MjZsoYZnnw8VYWmeAUY5KrnqbSgraHK3pV3dJo7iy81aLasqo",
  "key21": "vbJzfQSW1aihzvPXdX2H1cBWes7ezEc1KeXd5vn3FJtz4f4iDKrfkGmfEMz2g4GFepGEQGQaymFKnr9au6cv2ww",
  "key22": "5TxnnWsxAQyh9vrnatQdfAFtP5WtPaiq9V2CjwBSKkP4fK3CZzzgwZhsAEnL1iPcWWEszvgNrBtnJ2XAsemeuLTy",
  "key23": "bupDx5D6vZ4WRD8w1E66yfCij9dMNoAcFSBrbb8ZYAf9hnkkx8P2rDdzq8MmVYsckZCM7qGf8thYVzwhZp3YZTq",
  "key24": "3CmKRemECqbssF24g4h5nQu8ezTojjMWdsE1aoQaoSbeWf9yYfEHCru7ob2GvfTXM4QnFkoYdVfjpswLXVXN7P5X",
  "key25": "9vWTHpKMgPttfwQ3heSeHNMsoqjPBYYNfRzYDooBWxKFFvXVp5A2grSF9ym6C2wqBLX8YgsvHcWZ8HPtPxHnsDC",
  "key26": "3HGr6ja53T1nSCF9VhmaQv2EE3sfhLuA6bw4N3yVN9LW64ojudE4XxoYe8gjZgYjAHakL23QHk11jZHdMmdgwK9m",
  "key27": "nYnrXYzn2FTdZxpSibjAV5WAsHvvPgJvU2U42xJ8ZpZWmGdH4cvqoBn5KpbajYuxZ37kA4w4crUGGm7NUF4fiJM"
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
