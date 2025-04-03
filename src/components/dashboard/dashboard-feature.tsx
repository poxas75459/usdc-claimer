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
    "k6Ea2dZkPyurDzgdNBqUhdCHEU1yxrkbrAWSWhfV77h5hL1Wqmy9HSqQ7WX7hcDy4gjo5AcuYkjDZyZ75nG6yYL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YuEcSiP3s1VbWJ4pyHLMHU29ZigdtvGrtVkAJEf2XjFmMsV2VFiHPR8DmsDWPqVg7cuiaFt9DoQEwKwtWzbEk44",
  "key1": "eetxsvyR8PUX8DemKCQCMD6M1AcxZ8UR6mwgGjhXisDMzxXZyLKJJn95bvTDacdshGz4bVJYLYfjCTXNenoqeki",
  "key2": "4MqhwhDrHNxajnLfjkvPSCEGtoycXDQUnzwE7bbMrrTme6TMRAfxTYd2K7NxutoKf5bgcPR6PAzwjVQegysXtVZS",
  "key3": "4jPADEhJcUQsJP8TJDQpoZkhxtXc4rDj33qPCHh6BjHjqYg7VNtDRutHUhSdQgKGth5imw689Can45fobjWiLHsc",
  "key4": "2JxzATp3oXdRYoztbyzeYrb5dgj4tVnBqv4P5jdB1dbNbnGDbkmP91yhAKKFVMmbiiP1kJ8YuHxAz374aUULgRhx",
  "key5": "3P2ypiTZNpUGBMeqjfJ37x7pcutXCBacb9WvS2hG6twVXq8hWYvCxEpxiNtb7QQvCrXtiqkcbxRWm4EdqbnWHqyB",
  "key6": "2biU3mLKq7DbZa6aiPZoZXZnuN4MEmL3koM2si9e5gvz9GdZhN5Gts1gRSB9T973JHpRvqAhVqGn85Rk8hhp3jCD",
  "key7": "KCd834LGLwRu75MrSbKyunesx1GLosHswE6NubutZhZT2EnfX49xT1vCCx2JePg54tJY5JD9dpaVJaRcEExJqFH",
  "key8": "5wL2r2VEL7RpPbdnH4FGTMkZhPQ43UmdtpdSngo2yc34favEiywdDfw8v8FKoN1dx2bCrM9y7SPVHpvSjnLdXRCd",
  "key9": "XisoaLzK8WV9uVLYadWAqxQfrWfd4nKiXhSBtJJZ4WNMwDCoo2bT98FfyeTo4fBikUHwiCyUeZtQMY8hm9Gqg92",
  "key10": "MZXVduvzf9KDdnYRUHh61zezPSUqHa7y3JB3HS6xAumGcWz8nGXC2H8e5vn8QcLyppMzt4vy1adUKdWQnByAvu7",
  "key11": "5BFJmqfv4qWLQQjeCLhCrjr4rMQ8FAjj3otDL54LnnC1EDwWGQnpEdXvgJPcEW3QtivkPTumMc4KxnmoojxuAzC2",
  "key12": "5C19jcZrZZhghuN5AbAghVtYniu83HGbfmZ5h88kitGnyJXGzsdJGjieJ2CB4bABVQi6zPmYFQZsgncGjNCNWBwJ",
  "key13": "WU3swr5gpxer9taLnsaEFyW5GLrjyangwmvuAvQdL9jHdeEhNFYdSneYxcM2Lo1YignSeBM3mYt6nsKKJCPG2yn",
  "key14": "2F5VpAcVz3ua4cL2gHgWYDTfBvCdKMLQD8XXtPQC2HGBuBhigjUaBHRsSRUTQjtPcGnjNuRTKfidZrT6SGZEgP7w",
  "key15": "XsuEudbWGVxVRSewZCH5Pehw4buVnZJD56B8FS8PzCTTsQkVSUPwyim4LiQWcEQzoPiC7QU4c9hKVFQZBbG2aSo",
  "key16": "3SmLomK2KELpKvHtELu7zThNK8FjV1p8B8nA4v5wR2bwnPqJpNCTmuzRRq2CPWvYAAnJe3WbPBGZG8ABNoiyHQMa",
  "key17": "3t9h1upCPscUzx5yk4Ho2veuRyE1qPzUiE9XHhK1BeQ15jyynME9RDvuAtxXnTobvFetHR5AGADz794Xc6WpP7Pu",
  "key18": "4kVYZVtQJBhXkYZHbDjtzRXNFpKn7iPzQW3z5S8QTHFr5SgLrQE6MZExxnBRivkV7Ndvn52mLMcpwNp1Q8JfdHto",
  "key19": "4FBriYkQyGMQZxaUvQSvr9yjCDWHrxah4g36D2ZwuPW356qAZqBoghJMfhvWhHQDcNVUq3ppBpqyuVhVHhR4zNZF",
  "key20": "5j8yRaBx4yGjrhooi51DARCH1CvNZjd6VoJE1emFxWC7j2MMNaRoFsTFqkUnLd7zPoBjTweZTmTnHEck5gniqrYB",
  "key21": "4gj5pmkrcCfsH5AtohcDAnsFbFUys5rcE5HX4iexHef1sJUcBjeWhQZEDXio9h1QSGXqXzqa5AUJc2GqVfyoehR9",
  "key22": "2kwj6Uetj579vXv7Dc2vPTKCYCQiSxQnDXusoVmrA6KFxnkTqttucCBBqqB658eUwxpVaLvFqiiUzCN6vzuDHPz",
  "key23": "3tzc9HqZmNrB4uAE5G3cYfaiHwyKYZDC6ix3y4F1pJu5CuHpwaqjdzJyr4zPsd6vuftoKFCUG9aJSnBtS82q1qwF",
  "key24": "2u2LoeKq6U8EH176MhauTxf5TeSewdpEWngnbBf2ZXwMVYf5gXXTCqALwr4z9XartqEfMCi7zauafUzJ8gh3Xjq4",
  "key25": "3sqjMfG7gZvGTegTqc5kSbNx9P7yBBEcThMyoRqvcLdH1jB6hevG7oD4fBpN8pj7R5hEpBBcSUruVxKChzEVJ2CC"
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
