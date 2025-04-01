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
    "Rc81zunq9DXWwnTMLgbjFr3iXoD4JwCP8hAKRL6rWpsYLNt284ne1G1vo3vK1PhQYLZE6U4oLH7ajbA8jFvaQL7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6797xiZxuDaK33Sv2RazuDkZ2F1GqQWFgogEdi1Jp9GgT2Ms9gXExFP95wx3EMtRXJXzKCPyr4jprpf4egwoug54",
  "key1": "2XKzuXyA4kUHiFjKbdSo2XMykSEJjKxrVV53mimwfd59Zh3K6FHNhDyWRM9B4whVKfGgAgbfwRTMtNupA9wenNSm",
  "key2": "2EeRE26NgSXzrJuxrQSygPNUggZogyoULjy764skhin2UfsXsFUXjPZW6FfmaxL9anrNEqAVCrcy3uD5nWfpbBHm",
  "key3": "dNwoPe9brJi1467DkCJyHXnt4GUPYeq2LrpRHR6gHRx7V8z3bTX8AFjpqb7J27T6KrQJvJ5J5bXZzNwq29ZYDiq",
  "key4": "5cBUY4bAWaf9RmPrd3bwwegFXWDD3ve6V6mTbJPGDHNJM9UB398EiTq4QUgSwkc4224zMwy69mEjZK7TJ61Dr9S8",
  "key5": "6opYRpuAgRtSzrkogBrKBfPaM6uCqQNJ5pPS1AAzhMNcvctHZNTT97EEnU7yZSjQ6rjvtWR3RTkMhuWYsGmpU8h",
  "key6": "Y8659RM4x446uCEbtEBdLuewEA9vCkX1dqQ7eYHWBpzgxN4YxvrQfLnQdtwW3m95frfftBAMZ6ZF61HFUqgQgK3",
  "key7": "5H6DoxmDDEfoDH4zNMquiJ79zvnmw2FJcNzV1QEQtMKgwfYXFuF5C3Sn7QEgcWMQYuxbQCqhBrjAfYr6xEAEPLTU",
  "key8": "29SbHL18pd1CgsoiwmeE35x1XgYDq4PbuofH5qohVw33PeeFvQLPmfQugkprmzGxPBNegW5GDP6scnE9Ff9eRuhU",
  "key9": "2ruabHtqjGJ91RsHx4z8FH3CqV5t3GRwNB7nuNs1Q6bFf4AqtmK5GsWQnypHDP8xoLEMDNNhwzG8H8P8qHedWuuE",
  "key10": "4aMKMULpL3TvGowPNAWT1k8AFo9YsBv1FohQnzMyr8KDzorakqXboEic6S9tQtcn1Zq33hcpjDNhjMnrS88wWFzv",
  "key11": "4XKs4oKtRCEksXCM3AfQRYEhdZ3t23FZipWvtztgrzRKQG73abQgXAUFDkmsvrhZc1iTvPV6aEi4UHE3ktjrWbQG",
  "key12": "9C2TyrBq6VqX62TV6wE6Pd6FjWX9bVtHeCnUfcYG6BUCZnLdcCVHcKT9ohMAZbQkpbSiyymbfvnbrmDtBr6pmCs",
  "key13": "4iCdu6EfzcLTZxB1bf7vwytCMHVxSvFLqgRvrUzyp49EZNMot5qrhgmcCL4vMzvkxiY3e73ZKFuaoXPhT5NFAyq7",
  "key14": "wvWg6M18ijH22ozyFgQ527B5woy7fVop5ABTFE6SGhvcycKrDxc7ptDuWFMGasWbTj4dtnuHxx9PPxFwVtv8sp1",
  "key15": "2z4SdTwSvWY8tGacjrPHFdeGwtV6vD5g5Lmx4GUZa9YniZx6mAPebfrzBWgYwsMQCnf4fdXYERZgCMATXgMhh1GM",
  "key16": "3fgJBmdytvAUuZ4L9HFhpf2eeykDhJ4HofLoUDYgKMCdVMKHywFJtpfiHVc1LjeaHNkJSjpufP1xW3nYr6ubJMiu",
  "key17": "2URQ6v8a7ECce4cXVQKkZvrD9ZSNkmKZgyHtcykFHdzqkJC1ekV1AdN3Ek318zUj1Fju3uAwQS8VtxZ6n9CBW8KC",
  "key18": "2DvqJWBZ7yzx15w7mW5fsSP2Lt1Xt1YJEsY7ThcRSDi2dAnyQqzZ3yQZ8kZPD6ZgeHCyxCQbnngEN9SH2myMziti",
  "key19": "5m4hUKshdfY8GnQ1p3PNLYHS1w4RmML8sDcDizY8fe6qqF8dfBHQfQ33Gdf1JTMVFA8S4BYSPYKXSF9ZAbugX3e1",
  "key20": "4Lthrmx7zcfB3cZZQX5xMpAY8zvSKnAuYnBfuyqrTTcy66H6Knn1iaTEPkmm93P4BDrcDgfHf3qR2RfDULpMiR2G",
  "key21": "2k7NSZpvcgi5agj33UwNc6uyzz3S1jLs2ihpA8fP3BVcGtvJZrVCeARZT2nCVZC4pRDnsQ4jBU1296a2gkhjJS6g",
  "key22": "5MiQPVSGvKEBo4Nr8D1dGQCxQMbjEd9QWj7X6dLibnbjMf2dho2j1J5oMkpxGEATcGBjNC5Thbvb28pM7Xw8pXX3",
  "key23": "4YYu92GJ5xGfdcgpXXtFxN8fVwkBpebKkGVQnYN2aP6zBe8CLje9K36LSuJ91DNfiNa4TEEpKc8VBpCvxyYRFLwB",
  "key24": "4ZREPBnqXxLQGnUVqoD8t8EREk3dtgob2dNdUDDwvV2FGdePsftUFNstBmGsb4KJXUa694XLvhu83GNUakG5QMES",
  "key25": "4fenyc8fvyehiSpPUo8UNvayLd23wDTvDBhN3r3ehKPCdFnKBjBcgGwZAToeeFikXLHK5NBhy9RRUwbiBCwGe2Fw",
  "key26": "jSsfFPAexSz99Ze3aMS6hWcLk3XkY4U6ro7kcp9b8BNfjof9NmLiLfgoktM1mLEyFfgsRg5MAcWB8aHL8S8cyow",
  "key27": "3fidmijjJwv6LgGc1gAch6fDYQBqoUMmRno4fX8552NgViFEeNxofv6Cc4EGmqcbugeJjKrDpdZoydESBg8v6LbY"
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
