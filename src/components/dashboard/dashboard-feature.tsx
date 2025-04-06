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
    "3jLJ8g2JUraQwMTtZpeoTwA7pZ2jmJm5QNQ5SyvM9S5BKu2VLdWzPsHcQ6kaUoFM4ZJ6kFBwqzmLNK8RVFVUJr8t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xGoYCZsxR8kPD8oZC1N9KjMjW9jLYhzUymGtKVQmXqV9vuQnskfbPJ92dYvSgTsTQwrM5MfbWCPaRb9CMMVJmXB",
  "key1": "2RWVw149vroDR31SbZQFxmtA4wP4L61m9GpDG1ALq9tAFmXkjrgiRzNBnt1NKxDPRMURJMY2TGeucEhbVE2kxLFL",
  "key2": "TmSd7vxHXaFEgb9gLXKismnow8sPo79x2dM7LbPVsvNpgrKmYjH6QfGqA93iRqCQEiD1s3qJzMA4fhpofch9EGb",
  "key3": "3nAFZSXuWX1VmVJsun5zFGioGD5RBCunfwYbnPP338rXCUNHRqMszjPQPHB5Js78bwnnMJ4vbtBgx7DhQmDgjXWz",
  "key4": "5UvS8T9Ea2JPRXoGBeuofRPYVCa2Zq8F56L9iSQkEE9apxvnoCZyRfihBDDrkgLB2NUDiE861sVUvgtaxxPAZVW",
  "key5": "2AtNDxofFf1o3ASeJmqPYJxuJxydMngNuk32eYC7ANBjMEGKmXZXPxXEwZPdxCbrragpCWRje3M2A8eyxn3v8Pwz",
  "key6": "4d5Ay6UXHPMaZ9E1TRRBBr3DrnA1G1yCJ9LaPBbg5efqNUtDXJ4Dhc4z85aLej5rGB3PEM4NP7MpNJzuQF6ZoeH1",
  "key7": "4puYrGDCM4PbP8Nn4UN93KSAN2GeC4HtKuE6AVwm1EDBW3HJPLQyL8N76C2jcLQgwqKa4xbZudLGEtSuJqSFsLCN",
  "key8": "NBbyQkZLzhR1bYGUDkgNAm6t2tbztKoLtxKhhTM7FPoTyEhADCVuVx9NEVbvDwXiaw43KH92xgZZYViH8SuYChT",
  "key9": "4KLhZ2YK3Z6o9CPdEZZRUpzCy7KmLHHhWH226Atxvy9oQD76A8x5aWMHzEwmKZ4ZfwQEcdTMLTBKdVYDkvG5UAs3",
  "key10": "4cEraGQwnCxRx5vLovYdR32YXEHb1giv78r5SUKffB3a53jAua8vx3yav4CQDCj3bvEUdE942RYZV2CukGEkT88V",
  "key11": "3DX864r7g9uJHCiPaknUvBexjoWtk5VxD16JcCpCKmS1SEYAEPNCa8k1VTTW12ZwoWZxKHzZJcFkGxLTk9arx1oS",
  "key12": "3TUgtivcWp8xhTRDKxFmBm8Ej4imQTBzosDnKvXp1su8zjT1stp7qgRBds4LX4zqNgLVNp1BeyeRSugxhT9bpM5y",
  "key13": "5qwici7AYmYeyP1i8kcwW79HXCzxFv39jShfomcL4n8HBTscXx8wS1r7KFTGuSdgD6ZpVb8ZMgLVy1SC2C4UuHbr",
  "key14": "63K8eTP36T7Hr6VhPxYvnWJfXQet4CLpPBWkbjcR3BsAa5jSLFEBarVaWQ9oDxPh27eKqeK94sfz5JFabW8rJ1Y6",
  "key15": "4HgK7BpQrxdM6Cu1xGWmFFVEtpQSdNKcLKSpm3YG7fn8fd9fvwJYGwh8BVteF8x9hCVZMm1PuPBEhbgCaSTow2e6",
  "key16": "War3muk9W5uR7ufs64CrCwoJnadxqCsuJRsRxsgsSxpYmQN9qzaQEABYpdqu5uPATyEEcwt3YrD4D4yYZ3AkTbS",
  "key17": "324Rt1pm1juhsKRwuiLwcUpVHCKtJywWi8xxdBuJkbdNUMpFKNcYxGRmF2BqjB7s6opV6dRSPH6oLuk3kVmisMpf",
  "key18": "56JX1q98C2As5gLjeBn2DuKLk4eLLLry8ZjgaWkuAQmKhZs3X7snbnb18BMnwiCiSWd8PpfLW4wuicaFGbnEUToa",
  "key19": "5i7kr8og6R5fP6BHAhwQJFtzS7S8WWfaP7NyjhGgFPe1ckkKwpbkveinNDXuqLnsqJzMcpN5NAU82V6rJmJeFFsw",
  "key20": "4SuBnipGd16xJcqYogjARFPDp39qyhdtt3ea5cdaS28FtvTZr7vd1fzY5ykmWejSnaZC9wD9xtFc3jybT9mTqRtG",
  "key21": "2AfJBZSF4hB2TqxnGJafFRPTrabTnBhdRfbiPkFVAB6KS87ADqEZ8mkUGCgvQ277KvbbZd6LYSbXNv7Eqg2UUWno",
  "key22": "4XGf6m8SVfYXCi2BH4a8YfTcDbQNhMJki7wV4RJq2EJMoyUrYXr26Zyw5WHzqMWbyp4np49w61hCbPmXz1MivsZ8",
  "key23": "5jKPt2yQmQDx5dVH1AWiQEyjQr1hZTZnKjtCwtmrTnfo7KtRLED1PYmMJpush6Us7JcmRTrtHLzwF7459t9c5Rqj",
  "key24": "5Vj8fB5QYVNgTfb938TjnxN47eN4gP5E5kNCjcYYcjx3HDvZBKFC5XwBtzbHRUyyLKcsHgNJ5RVPVd6AHvriTYcE"
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
