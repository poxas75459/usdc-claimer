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
    "RUVjhXZe4eADfokEaHtNVPbHe8ujtmnYFYMMizjgHziKc2UgWrc4VSeke51HBRsEG7Z2u14UUmjt8fkwYbS2kSc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BnCVnLQiFo2fQxy3883JVKjqoMK22n7VMbHRXjn2Pmt2aqXTu1EqMXadpBm2QxwsB8rsHL72X6ME3d1Ck9nXKKB",
  "key1": "3BxFn4fFNrhb6CDn38AacJE9EdL53itFyBkskutVXShCNHf95Rj2RXbGvfZvGxjviEkxULEszsvFd6C4j8KqDcou",
  "key2": "4fywxP9FFLPnwds4a8SjrrNRS2vYzjMGAerA4pXhGzWKf6NfKYaFqRF3NkKsH9GYsCkxNR8CXPNmBgoWmQQeeJKe",
  "key3": "5kXzjjzKMKMRaUz77AmtKqGAnfrxiSx5pvu8ECLzcwEFhChFyT38iyXz8rqTsXauGw1CVEXvfS9R6THm27ruBMW1",
  "key4": "5rdvcAPKGLJL6x9wd8w5boFaYSZAcy8dQZwn3bnrTe24KrBUj7ya2hughHaDD4FPjDtrVDgjLYFw4YUabDbSRR9",
  "key5": "2ZXUdHZecKxFRFLv1RvyZjFWjaxQLmXGGYTRi4f2za3EKNQi6hC3sk1H5gXMBKv4Vy1ckrghvnfffHUo86FZHu1T",
  "key6": "2fi6KtekaRcfGAXjkB6EFrDXi96ui4WGLWD58n9EsDBhPXQApmjHiNEAkfrQc5CWWuXBWsEpRFPzwkkNPicEwVGb",
  "key7": "63XWPbnonff1gx2G2NfGL2aibPtr1satTREUfHpTfik3C8DZf3Tpo1gJFGMecM3M2qpgwntebLWRjo4q7woaSB6n",
  "key8": "4aa1D78BfLRzcmtcfA5Luc2RdR5RBdcWgHVUvuMUqzrKT8uvid8XBh4oY79dgAV2mfBMuYnKnsfecMGdfmRDLLvs",
  "key9": "5FbvJD1jrJSjBAGPW6UdkQMF7n5er7FkNgeVBXdAND96LDLoZ1sk4Q8z1Pz8CKNA8LJHqCqzw9zZceA7iyUuB1tv",
  "key10": "2CKpQFQboeXo2qd39QdDonrJCQfsYL5Xd1v5zjFTF1LuBD3dvgV345x4zMxakz7zo8ztQNcZPxYsK3udydXGa6C9",
  "key11": "afR1kNpbndEFwGiF1RNF8ru5PiGEPKB3b4Y5WhHRvw1ckTiSKfqUwqMg5AFu9KSfsajbzGL2z5ST7ivziU8v4D9",
  "key12": "2G8GLngBzDusKh5pK5tmus3DHpBVxp2g6RVhaMYEDKhQ5fQPWoyzvKnxqVkZKiXNh1DPsWY6xopb4uxiebhXV5us",
  "key13": "3pvBVkpZFrJjbWS1TXNUwZVihbHH3c2DzrVLRM5niJqh2mD7YevxD4Mp8TVAo8V1bHHBmPXtRkYjbneNnDMxJTnT",
  "key14": "3UKrChhFEFKN4HErWDEsp9LVp6c9k7vAKWFnEmkKsEkTgp3dFmTgvd3w9JGnUkqe13Mz6UuQSU6ZRRXbotqpnYxp",
  "key15": "4c5Nd1ETqoNYmFMspoJbgqoiBUC1fVwiJ1jXHYMBePFc1Tf2dLNg8wy6a9XUYkBkyVR9xaLbNF4yhh1cCvFtPCj5",
  "key16": "42jKFJgt9utgdF3CXSE992NEwoRUYQGceSpdpaAsEpLLBxzjMXMw4D5dzTxyUQbt8UFrHHpbVyh6wep5ndvbsvZn",
  "key17": "3yoRvyw8z9Sc7aw6h99vkDg7APBdHN9guZsHT4FzaaBCFDAZKFj49hxGT7YchjhnakFj7iDKqdKoGFeteVjoTqhw",
  "key18": "4n74wEjJwNSSuwb9odvrhbByB77Xf82pSPpG1JpeCU3GrXLcZRuan14JGWaAU2WcwagEBi6r7kpLoyHJNn8axQYa",
  "key19": "3SM25aakzi5RezY2dZNTcnsyouLDZERXjyK2ZmZnPXhyY12hwDLq16ZxHx7oKbfVHYfwDs73WF3bqFwasb25dRgD",
  "key20": "1jrfamaG11TXjsyXd1JoxNxtWnnwo6FtwpTEJh9SCPTy8zXNrYAhV3633wsYiwGRZjxtFKr7huNNtzT1AZjYLnw",
  "key21": "2yDijHmrhAQ4peUTw3ZE5UejPqrmpHzGDjWSMgvnQjMRkRGXJbSVx5ET44AZDcHf9gKrALk4tgnE1pTmxmSRs8qT",
  "key22": "5jKiyibpNCvDAf9QWy2ytZwku55y7f6r4dByq1TnZUzL5kU8VEan9GwHBzHmqfCNi5JZSkToJA8UnitLkFaS5L4p",
  "key23": "5SqDVtVLbDETUvr9btphvq5z5tHRoGFurK7QrgWLiG3BmvM6ALgRBcWa3GicqFeBHd3A3oB8syb4QHT4jPwLhVxC",
  "key24": "2jL8yatrXRibrRPyGecpbXG4KZYzLuhRvj8hq7Qq28r5bkcKWZZ5gY7vTHVZLi3EjA98Zow2c7e1LHKv7qLhV48L",
  "key25": "3aW9u7xBbAfMCRZcgbZ9YPWypHGLzTJFEejpqTPbYa2oZEvAobft2jCoYzabrqb21n4jLpVmtBCvqirz2dabrBM",
  "key26": "2wJHJYiR88e2q4CwnNThv13VhzAnGKA2bmnukgh4riBN5E9khiUD8VKAyPxJXtSnnhnyTKdM3Ah6gr3wVbPMcATx",
  "key27": "5EEieiqafqeQtjRNp85oK7j7gFkzEGDfDGwB2ATeyacEdB9otKvcRFXGVuJ2dLdvC7W7JVC1gc6WVj7uBYFzGmou",
  "key28": "5HQfPznFDmDmW8gfmKUY6bswEaEsFP1fUkoe8U73CYti9CnGoiCR6DbJQ1h8A1uYFvHghZ9KDc8tWUjUbUCFmY7j",
  "key29": "6cXWtMFoJ5XGj8ZxZWufCm7KFtRZd8K1MCLhuhH8hGi2pcofjriagM7bTGuLYjP3vksNxRACxB8AA4R9ooGdVbT",
  "key30": "93kv6Nm9hfym8oV6tiJbPVeYKBi7bx8W7PC46oQRMQtGmQuHZpXo6NUD2JGVtsH2BUj6PgQoZn9Mu64C6ZSL46z"
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
