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
    "3BG2wM1TpFyfuEXsEN7MmPRfjEH5MXSQPktzVzpDvWXrTBPQiMtQiSqnZW4Rxwcd8rASE45cb1o8BADr3HHuSxgB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HEd3exrRYrEi7MVBHrEfnDEZPT2t3aU2bY2jgrTAGkk3ST5fPsaJoiDoGLdniAazJdX9ECczU5Vh7TjZF2KfPid",
  "key1": "3ryuBnLzgqqvS7ea1DPstybC65TidvAa4KuWKVhjQLArKEzGfJmneSAkj4CiyqbVa2HYU5iqNhWbxfAv1Ku3HNzE",
  "key2": "4UUds2YVq5NxkwmUHfaWL6ceNr2hGyPhA6JXcvWcmaNmLiHECgsNBu5yFQ9BDhsYA42EgmNVXx5MBeY1WfnFsoT6",
  "key3": "58SHk9AhB4JGz3BgQeuH9jEfE6dnURYFP18pca69nJBhZn5HZ7jygLjXQ4NtzFpu7BHg4RvsmpW5qwakpGcFwbVt",
  "key4": "2JcV3AdAfgBwWN49akPHn4hSs7Ju2CVJgPYGwE7KDCA5ABd2g464G78bYv1jSLQgudS6kVGvzaAYPZmR6e1Lb9FX",
  "key5": "5qohFBcPL6N38UWo9iFEvcR29Yg5Kg4VdDdGgHsrrqJNphBR2r7VT3vsovWTZ8EhQwnExucnWWgqL9eAtdX7XtDL",
  "key6": "5btQADoVeGTxEf8n3KxfBCjAr8s8XLARMjMW7MCVAawZiy37peMqJrPcukuJUafVsMBd1SerGWSoxv7ZKPHwLydi",
  "key7": "4pUws5KJm8ZM2HJyG7uw77uGA8hE9RzkUNcpcZ3Pr8huZM3UiHUJjtM2DmP8W8PsA4T9auh7Ftj59iDwdRz6UXL",
  "key8": "4ncy9ouo5rCQ693bgHqsHtzCnMgMsHLNrwnwuRjvBiUWx9xxGmZWuzrsi6jrQyHvsHR6SKo62ZLQHr2nrvwa5JuB",
  "key9": "5erQFqhxMDCZ1hWAEDSSw8yemRLxiK95oAxvkJoERabGG19HF2cWDRqDLDEszkFuT41xVHrysk6kjAuiY5KaAnCv",
  "key10": "4XEHJwHghjxpg8cdUtN6ZMLgET53SGGQ73fZCJXeMnNMNukAWXNVeM4kYnm3NxYnWZnuKn9dCyzKLiEsnFCfkH8X",
  "key11": "se6awE1SvaW3ifmktxQSL7nsShfHx5wrFzeHkPzWVkYNQPtmsqXsvXThZesr4bkdHVPBuYJ1ycuMp7n9hmoZMeZ",
  "key12": "3Rp2So4Dcm8pY5Fk1m68hJT2ouRBRANRK7eUejUwGiVhMwTS8zZ9oFzs9UYDe9w5KgFeWsKZNdCP9YoFbHnxEjSB",
  "key13": "3dv5CnSmmXNz5ckDDzdtyPbsu3ypMz813gtF8obpWMgppFz1E3csCdzwdB3tB4a77AJ34riJLj2iRfngntM15FXz",
  "key14": "Gea58uohzNL6z25xwudrNxdBvN66Ugie9andUq6Nwo87z8RdVRGVen8gY66ZZuA1VBeSvPwSE4m6VJ37ib5XzwY",
  "key15": "5Y2NMWWr6txQtaSEZmm3qA1HcQAFxRJUC3UkpDNYdQ3kmGgVg9irh8hMeqJQdckZi5eDvXmTZdShZJCyWiw9PCb3",
  "key16": "3eXAUhsEuWGpKXjuND8hhvySpySrjpX4KS2FXT1Ck7fEoJBPoSY71qF97n5aRD9AbEm6j4Sq2HVkRyqs7LwwX6Qq",
  "key17": "5eVyuTgtQmUMn5BWbwcX7Gfa9NgPRt8C3nDn5gDReaREZp3c7DHWze1dy3mUsRUgbABj7bg6jWqsmC85js6Bcyxw",
  "key18": "54LA4RSepBNuw6EfZUbhtHvBfkjXu7nQq8fP3bSP7VPxtjeHNHC3RuLMBuT8Vo3GPUDHUJvdWwZaPFJvRFAGJJ7C",
  "key19": "2V8YX4uCRuNwVbPemE1yNyQPZVzyeV3KzKUXWpVeFVVCLViEzhBxVSBZVbWuRWbdvKPA9YDBWXCSc7wYDM3ncbXM",
  "key20": "5DjfP6cn8mJSPbeFeXCnSKBQsYVqKhBmj14VyWZ2n7K5eLXeimJrV3pVKfVvVWo2pJxPt2uCbhLX1D5Q1A9YoqTf",
  "key21": "2UNXmF36ME3PLjL8MA57Po5UEEieCzrwTKbSwAnNKiRpe5Jbtb7Tfcx9oua4CkGxmj1Zx3YPBjcc4p8qmyqxWaPB",
  "key22": "33X2gN2wLx4xZzCuWQno8HnYQakpWkSgTEFD3eRSrZjjdxLwmxikwQJvuWru7JrryEiX7Bs7QnpBmqtUuQM5CwVF",
  "key23": "3kHvMJw1QeCLAuDTn5cuN8YMJbGTaxnb6htsRMfmroHaVx5moTLqCAfPyyXBS62gfq6Y23M4jdvLvbiC52Puwcdd",
  "key24": "53at1HJpzoywSASPRuCchEopBk7ax71kJAjL64hcJwHjCaih2wWcQ5gxQSC7i712B6N6gqkRg8VwQopZmWnCWdwb"
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
