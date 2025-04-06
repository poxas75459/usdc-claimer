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
    "4YmGtwN8t6JGiiNGtRpm9MPWhEGnmfmHKEFKYTWGhr1DVAU4HguE3u7Tganwn33fhkf3Qq37nCCKHav1gSPvGN4u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xSVmYB1X3s4JLhPXh2JCbUpX3ckeSeg9VjqD6TDbHUssunYJSJSNbUVgYXQiZg8D7PZXnFKdV7jzkHmsnE3rHs6",
  "key1": "2yg7FgKqb3U5V6NWar5x7THiQXa8yzzVi4H2xtC96Xw9iQzqGbafji3yRcCJ7NxX8PcYy19RYmMbN2C2mP41DvUz",
  "key2": "3mRc6B4RRWa78w6FRq1dRiLsPUc7kxetvhpAsFiHMatDhNeZJscbGbVAYGrmhxCN5aAWr2BQbAzKn7ps1mUjVKTC",
  "key3": "3Q8KqRsLUhqaZQxFyGwmRXrB8Y3q1pPGxsf7SUM5tYXux7t47BEipobQCfXpyRVPndQSznjKyM7PY5exHtMCm2CX",
  "key4": "9P6VpRX5PdANtMq3QQJ1LTPYRs4tGV6A5Z9WUUVpZZitHF2XHD57NW1QzxqQpsRr5wkUhHPopK4suX96NF3oy5U",
  "key5": "2syYHg2hspmnt4httbA7eL4EvCzfp5wuwbe6nvbedpNAJrDvTWyZUafsc1268MG8UAaTovRnc3FcKmQY1Mm82b5c",
  "key6": "5VwatrVNxzJqP2bfrATkFTQ5AdjjMUdtBJ1TKE5zwbZsA8hyFTn6anG6LRJaHVh634frxjPxbS4MLV1mak4UhEWz",
  "key7": "2hv6sRV44PTqLSLbdD7cXhhXK4XVjfyAJEPJReN7gEL7ABFDaJxYdJHYZztrJFm2B3pWgJ3VLxVhD1dJKGnUK8hn",
  "key8": "2F2RhjrYasBKP4VgQh8ZwJ83u4H4durxH2iwM9j1U6xXNroCEB9VddU5jbeE5cFYzGeTprcBttFjf1c1pQhCBoYG",
  "key9": "2ryADEq9RbjgxcY26u2kNDHXRByocJdWKHahjfa5Lqvb1E7XgZkkHAYevUNNwWPFJht6XtLbRrWeftSMruSmNUw9",
  "key10": "23ooEZKtCUzdX54MHNNdmuLjigmNLHs6eGpcG6Qj5bzswpdutzP8sSCM4Q52ecwi3wJL7fgtge2kkeDQiL2e3YWp",
  "key11": "5gxGS3k6qKeAVoXDNEkPwhn4grMPmb8ssrYUphEb3dNqJMP8ahXDtT4TTuDpc3sauPDy1XpcHpxiLYSEorUJSrVb",
  "key12": "5Eryxc1gt7C5E8xUSVBCqQG7puo9iBfXtCQ2L986krEmCocQe3JUpV8n6GgMpEcUjjK3nnJELiYMQ4BdqKSVyqYn",
  "key13": "5PbLL1wDeHXVjzHbAB6PUZd8CuM4NbZ1315dtJ4yfTc8WURi3Sss5czVyVUtiNw1FmoBWJQHAqRxir1YQiKBFPhJ",
  "key14": "37bTA3sEcm2gsMxcQgGJCB6vfvxnLdoBs89chvaeF1LaiAgRNgykHsZhcpfKFqB1EmMsH3pyZPGr7fh7ogXSJ28Q",
  "key15": "3qNaE5mqSPoJ4NQkQxY5KjDLXCyS5wFxPrFHJJXfbQeYdojCfbvGznt1vL45evjWUawmYDdsjkcREf4nn2o2GueC",
  "key16": "3SMqr9mHb5JSbzQMNdPs7Nx5QKcX99auyUKsc1GUQzX8v3keE8Y4eZuNZd4Cn4HVHirsMUctt6posuuB7cq6Pexs",
  "key17": "4S3X9rUagNSjgBREvYXj7ie5tbgKoCbT8Wjr5FdNgQVVBGyawsERbJNMQDxtaSajNTvhEKz8pq98A3H4wqafdBC4",
  "key18": "wEGq53cBFzMuoCff7zEd5JkGdEW9e3w14TGDpiL28cCuUeYn3KEYaPJGRFWk3rBwLG8op9TgH5wSEioAL8zXJ3D",
  "key19": "3ykTGTQXsBcAh5stjneXnko8Qb19bN4UzpWXjub1fSNaEp9aKNmUYY3BnNTBNYj2pJ8JeUCMGQihees17N1wMpvn",
  "key20": "5CiFMCruPYadoMdZ1RR4zVdaYo9ANNFs4xqkVWYyDTjKVRf68n1sd4vLD66ZZosbzcbDEdNmxP9pLoSHePqevs6F",
  "key21": "32FSdtaEKodu6r6gSPKRHyUdWEWYR6BJe7TJMSYMfuDtBUVv5GcEyekAsAYgjHjqLUVeHx6vwDbmTtTED5Gj9GGt",
  "key22": "3y74eQkfob214DpLJm3JaupcxcCvCJoAJm7qeFFaeG6x7nzS3c5sykT4gE8vcaryy5mgbjcxkdTRh83ptRxWu63e",
  "key23": "4dD2StS9k8gLcWTcUXd1WMvYy1KcD3bcb65Vh7eosfTRUkLAQYoTwtuBBYDoJwBVmBSgdsfgeLrDr2bXSyUSbtYf",
  "key24": "3T7gHFizXGWqu9R5DZU1VmEhN5MczJ9836wtqUhNoACkrWKfFuj3V4oFsNm9sLGHWoRFjXbCGcLPsp2mvG95q1dY",
  "key25": "S7hnwNAnTzpFvUb1NBsGhUucysmcJAozzXTzFXhYP8RZWL1BPeTqhawp9reVc1BzAEMtxTL6PEWtfT5TQSsGfmH",
  "key26": "3G6NttaBE8g3TraB3uB8SRQnvocmz2tEp1sAuQUXBcx5T2r4ZfZcQZYhhoGXyx4gz4LUbjraq3iHS6jSSG9nke5K",
  "key27": "4nvhek9hAHRSKZFwX137vCFoyCiK8WC1HbXP7KvRhimbZnkDX6yP1JriDDqwg3NHUYztpaP5JoQJ4vNN3NkanoRN",
  "key28": "Q8yDQTH8NxYBqYzTADfH1XnFeS8tLJAMUiAu7yEApPNwT1362Tv1Fwwga1zVrv5z6P9R4qZ7w1bK1ECVvJZ7QQL",
  "key29": "3UJsP1w63WXHK5XQZCdVMNDFDX4cWE4KTvyfnSewKB9WewqU787xVc6cMB82WgUgkZsWexnXP2fRuMafUrd31LfY",
  "key30": "5tQuWQyfhALnp74CaGvviq47CjtAhsde2cVPSUe76xZAnqDFs1dvHYiXtUTpccLLdZEJ59srrmXe1asVM1drdRiR",
  "key31": "5uFPzNo6pJZYz33TKttrzcWNzRfaJvMsxM8aWpWhPe7N54d33Pn4sVckz2hwBsBqfyctbWsFAkUVAktzH8asCMs1",
  "key32": "4zempkVJPsLhYmRkSLZjkopMcaD5tpKTxCdBrTnAZQnmEz5F8V6xwQW7qM7LdWvN5WdxtEhG9c2r6KAyeHqtQBg2"
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
