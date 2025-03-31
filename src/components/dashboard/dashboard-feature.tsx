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
    "3f3HHPpvpM92q5r2ZmgM3EMLs3byZTw6eDyrZhrWvybiEcyD3pnwDFscti3aq96oiwZkNuDG8cdyX7dVSPSA78k1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RW8ztSNwEfw8VpmuvGkykobc8X3qyiPAjWAC8gJPHAyfRDVfa3setkU3aapt7DcX8J17V2pbhUX21KYXC9V1MTC",
  "key1": "5zVvBNGEQYDimSELQo5jyDiwGpHj7mVbEieGXkWbW3EVXgTR41rzScKjZoVoiyfuums1aGSKn95UUJefk4nAbdiG",
  "key2": "33xEa7n5majVtaB1wN9ey4DWz3ZvPj9ioatPdjL4QfaHzKH39LsPMFBdBaUfD3kWXxAoBnUgYhapYphDeoiD8L7w",
  "key3": "66g5PSfY2xTL7a2yh679owHg2abAxSAWzLmzCc4UHGQvzkrZZgXXyZDwpAXv1WRZWLDFSNTyRLZHTagVRjFfFJQm",
  "key4": "4gxvxCDuJ8ia3J14GqP2xLaUodpN8LBnRzykZupB7AxseKdyE2RLTCYAbq8XYZBQ5E4Z2Dzyd3CxERvhVd5PkvJ1",
  "key5": "3eVZzcgcc3P4s9A8aJtUzEWYsKsqR9uir8rfEu81ocEZicbybarhWk7pJVsvXDxahHYygypsLi9EixjVZEmMk9nh",
  "key6": "2cdXbfpcb8oW9WnnzhHuKhazPZBqzvbmd8Bz6LVCnvXf6MNjb9vXtzwi1AKutWUQE8ZCwECqKZryce9fGj38RGUs",
  "key7": "5K8Rx7NtHRs22hK7DLiH2ubE98yRY6rX22So1QtGUQTBCTEcHqPXms9FiW51egDvqJUVraYcJ4NstdMMjefazua1",
  "key8": "487hvTT9jefxXcBro9PdVTDoufZfQfkWkVwqkVG5Lp2bDA39trD9ZKYHY7xiz1yqTEpxbwsgNsaiUAcnmxCLLwWF",
  "key9": "3vwna3DL2JJY4w4bpdYc68z8MvHd2tFx1dL9wFkPiGEExE4kxdcouQhwf5yhvtNHfCCxdD5dVNAi2RZKmq2sZH2S",
  "key10": "5KMYHXQYDhiPkexx3g2fxfzBjgV4RZy49tj5UZBwFwhJMaAGN5qwNs35JVeB1GBw6kre5KGB3jZw7e3x6tZg8FM6",
  "key11": "4JYiYugX4sgn6P5btfUcYaWgVYAcSF1xnS3df7bgvWMWqfnskUcLSfPcHcW4BU8z1Sho9mNAHfD8ac1kVfvuvHLY",
  "key12": "23kkLga8ysoShieTc9udKymhM1Zk7VaLvgfgCF2598QZyPcFpC5UQUQDHLukwpKRk4JG6TTaAzH1DiizHhWWX7nR",
  "key13": "62L6GjnyaxpUCJAiUmyvVhB36QotNEvhfJjQGjoyQNF1vh9dY64yqoVDjo3NVYwpKVeaQPuPqczZssPtZe8Y8Jzd",
  "key14": "4QCzLiqvrzzTaPjSPtWyhRaMVfq4wKGrhANg3p2neBLajvEmBkhufPid6wttjqwNDkUdaNvw1NFpAtYzksghtgJZ",
  "key15": "YsHffmA6KEydvdbSComAeEHr9KfUwi2pVbCX7feu9CnAXrGR6rZxaJ6mUzGVh5nPw3aAs8SP444UanEnJVkxzNW",
  "key16": "3QaNxdXmMGmxhohasHJnnjhkeVonHzp4FJMCHxEQj4yP559cQu4xFAbo7EokiAu4ewTDejf2uhp3W6rLogBhgzqD",
  "key17": "XWw53SX87tv11fjACBhg7PTmo1k1DNvUqLACcHSXqbMfDj27x7tuBcXhbmiqwTEzEqW9ZF591zBWHQQjmpTpScK",
  "key18": "4Uoz1RmZncxsAPY1VP3MYeqgsJsHQqEyLqziA7PeoQiotb1CCAE2gyyWxDyireqWRsf7TejpejKQaR55ErBWS5SQ",
  "key19": "5giBML9oGnYtcCswtNMwLkjLX5S4o7oZVgB8LnPpuQh9Ym6CdMmU6Q9x94H2zTMU3L6THUgsuDFcRkfvCcjyGmPX",
  "key20": "4vdT6JAq2aSDE1EQcsiW27uiSaTL6tfPrBQHXEd3DJc1nN2hnsQRh6n1eWpwYVBQpiYmKikWJct7E4mm18SUUSqs",
  "key21": "5N51KCXS37vqtPRfAZEHXs1WjscKagEWnGTdtTW3H7ic5tvVnSGmUnnGCUnA8ALjKN7psBcr5zPBYcwHRVH4dtDk",
  "key22": "3MvnuoTuKkKjSHV9cX5deFM7Q5jheexUZVHvk9HRsLsbhVnB3LJ6fLWWa4cYJ568Dc3UpfeHdRQ9Hv86kbvTqX2C",
  "key23": "3B9U6VZW6djXLiUpMfCNArNaEmN4kg4XgHrcTTKEikxqLkMn6PnwBszuNHYpqd3AfsyqzAXuV3bFzeARLp7Mi4tP",
  "key24": "29k8ePC15hFYvUGKacHNLTBPi5Aj1Rb9LG1cNcUqioDT6MVhBoztFquBQvofxizJuqUWYaF1PeLFPuto7gbmyGmM",
  "key25": "dGLdfyo1ACfgKUQyFcVN8DiUpW6NfsPrq91zNzK2X5aNNNpXj74F8CwzszE5FMgYDeYDJzfB8Wjc8RAJRAnrm5j",
  "key26": "4xhh5AiHMbeFW42nG6vkMy58kaHjb6sNCBbLn3E11PmSKEZzwHJSuXtTr87jNXyVTDKy1CvTg8YAi834bQJRWR2g",
  "key27": "4L5JwPUNpPqsgZxE9Rg7WivufPF4WoqYznXkVqULu56Zb1ttdAnd8BqYaa1SaeUTW7SsNRj6dHAdxP7oLwcyWg6h",
  "key28": "2TrNRLRDLRWqZcz4hpwAJdamxytv4RKmSS2gpjNox2nTZUerwVreyYYrfcvRCUNK9HKz4k1ZXGYjhSi26Y2s82UH"
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
