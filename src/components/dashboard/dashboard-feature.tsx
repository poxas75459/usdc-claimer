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
    "3BoTUnGBJf5NiqtkWMyLu7MJtc695Q4XjejYVvjpyDhZHgQkNR7C3cYwu4ibM1vvi3nKJ8nqzVQtrR9yqgowNwDv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uo6z17BYbnPzxTyZuymRb2hYQes3gdu5NpJ8AZGFgtnJK5mnh1jiFgnXBsbHQTCvHW2eG7JpBpjT4xqBDDcdLCC",
  "key1": "3zPugsNuPB9X8i9MzdaP5z1w55T2tKBcm6yq6SNfbNRZ4yfoJv3Gsz8oDq5FU942auHQNjUEgKS1RYbk2r2Pa3y",
  "key2": "2xoayzXh8wwybfpR4rzWn6uwPVnjjus5HCRh2c4JdHueju4yoVV9aD326QaaeEqcXf1YFu6YxT8mv1ZQdJ5UUN6m",
  "key3": "3X5pXAWVxXqKY83zFVaDzSjTpi6yWf467K8jMV4MGvPD7uStKHNPBrQ6zetZkJDnyaqVBGEoCyP6t39WUEGiidDE",
  "key4": "5ZcYyUtUVygMntjYNKh4PTc7Ni67JYjsXLXGKXFKZL3E5CptZ1Ao7f6L3y9P7TQEEJnvHDT9tZXub8SwgTrfT3TS",
  "key5": "3C1VAUjrLRyCmtcGisAa8DNmtGmN3ZHANkkRwWiYFDQjDvmx87rqQtjUWpKVYSjqZsErsWrMEp2Nm5oxRmV4TKFi",
  "key6": "4t3q8Un7dJ6peP7AjxcXWqhC7XYPHR52fWLFQ3ZMXvo7tM4vFo7XLiQXtrcNsAccaGGZZQSEq4xDkHw1BomXMbk2",
  "key7": "4suJUNADLMyzZ76XQQ2dEM71HEDhiBE7XRhvVJTnJcMT4P4c4qqmS6B4hF8XVRCHbDuHgfnm3zY6JmFkHBE4j5CQ",
  "key8": "5EGKCHrvKvqXLApDFeoXL1vWsUavddX73jGoUwdFH9YgTZQjZi7MB7XjaPxaFyg7KpAHTeW4E3Wfgx3UYxiM3BCC",
  "key9": "49pJcwmnmn4qnzzjN2cW876EKssnAsbREbzjHvxrK1b6Za811C2oa8veawa4yQsnyJDgkGUYgguSRtENtjEMYkx1",
  "key10": "n1A79HHfjoue8YcP3gvNS48LYXoeo69QftHB48zfM1k3tKmNx7H46StPhRrgCCGmV6FVaWuai8aSRiSPZKjERWD",
  "key11": "59ChsWrCTgaMNh9d4BAxF62BpCz1sWkZKq4fEYgg72xEosDncosZGLY5mHZpzZsWBzzpSbAKnSPRbNEBWc4Z1ngu",
  "key12": "5vjXUv43BjQM3ZSXszeyFYGd2FFA84v5ad4sXX9PKEEi2TF7RDgdQYJ5wsFEP9TZCgKUQtaaC6qc7b5go8jCyxWP",
  "key13": "3nZdU27rmSLVfRCsYuv6HoFSDHv8PNNh96PZc5WqkBhVcfzRTvz3WqVmr4cWZgLZUZbZBjxhENZJMT9Kqb5yX51o",
  "key14": "5vQNft31Kp4ivKw6nZm7Kf19Vrj3n5uEKQWxWgVVJeT6AZRr7ewfNT9y9BMZMnhnseVRzRpq16sdq9ah7dhqVy7Z",
  "key15": "3P4p59bEju84sM8aqUp9xaLunUJr5FDhYrdXUmNzJ96nGZha9o3aJmrCRN8LaqTzNAqSviqHy8q5aq6wvPrf4P66",
  "key16": "V2pPz1VKutdtAmU4ys1Jdim5aGsWb1LDj7S34SSBZPjVxHVKVUxYEAuyivVEnpZinbpiC4s9V1eyxEmCiuhB6Nh",
  "key17": "4C61xoH7CMAotcpYGpEKSii2mifF2oLr6XSVXVN2rZKTEDS5sx6DG4NqBwU7Kd7vVH5RCJrkpnbrqEqnaEu1Csk",
  "key18": "2FqDvcvPAsgRuX4cgU5bW6dP9kiu7QKQuGFSXKdAK2aWqawqJugr2cTEhccY3cyYivSHKFVchUCoECcQiujG8Vgb",
  "key19": "2XNKwu2mmrTg8gcdc1mNs8LcdrenbHjzuAm47AfUixSAJc44ar7bZCzJi68mo7sdxXhnq6ZxXrsaBddTz5K3U4oN",
  "key20": "4qdbZNQhFfq2TsDvyVZUn7gA9nPcCjTbcwtSkPCivHwM9fFtr8z3aiGiVJui1Ja1kqw2WcMoGycGyekcPcwuZN9V",
  "key21": "54kbRfBWYHTdQZLq5LZ2W7ytsdDs9AiWrzPLYshN69MFRFjffMg3UgAPuCrqvwd1xm3cex8PTJk1n951oi8DsWcJ",
  "key22": "532FMDGc5Ttt7ajTCpRp6GZH8Pc3YhKNenv8FnqEFWTxtCisbTZjbx2wbjcxyWVQ3QBeAz7RkWGQJCB9ff4XCYQ3",
  "key23": "5f5SgQEvWnYSEgcUehshyfBgTas3wYBcxUDeZCCpjdQBiBJCRMVCWUz52W2Pmt6SQosm8UnvcvKPyjiNzfkM6ayn",
  "key24": "5iisUQUNxa4BFzcA3hKs91eRcfYJfaobS2yMZNvRARvnXsgvPt8GRQEJRXhwXy49ytw1nWCXNVMcT5q7NDJKYJDx",
  "key25": "2eDhSkWVy18ewhVxMRhKkGUfvbeYBjMv9uYjsfB4YvCKjBZYSD5fDUg7spzGMtFF6t7XPa8D9erHe6QwDuiqJwUf",
  "key26": "3oteEjwwFaCrUSYVbanKUkKrH75v4Bo4dVrRj8htcE7tywLzAvjdqUdTQwSjRAWfceN2e3ZeFx4Xhqisd1jUQawv",
  "key27": "37SZjAVoSD2ip2cyKWhKrExyPEy7W2YF51dMKGJAVCJt4GZfTJMhWQwcXEuVin7uZa67iMaigJCh9PaRLDQP1BWv",
  "key28": "4jsYy4sNaf1Qvmaott8dvSJLr9PTuKXAMe4pG9gkhWVqoudV4sfL1KaKD1hw5VhmDZmM5gq8NraLt59vbmg2HTNi",
  "key29": "7xPiQSutL885zCbroKXWVpaKaY7y6iEBvRxg4zAaUX4fDHWY9Pbsc6wuDsg47p5frzwKNEMehZixagYutpepLQX",
  "key30": "2DyZKVN2oiXwEGUZE6v2Pytf6TamfEcXGbYvxHbvtMECXe7vBwndDDYhdMX4T9k3QDAee5JpqSQJ1xrYyy51ADKY"
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
