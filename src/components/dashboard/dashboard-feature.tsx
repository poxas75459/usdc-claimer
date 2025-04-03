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
    "gzxUyc19wFvv3pzPM7VPcRN2bY2WYMm43NbciW387qg2sKbMSEnXti9VAeuKr1zTKZJfGGU4JkBqKWHtfw1zgk9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oshsNFeM9AgnB5eyT26kvFJ2rXfpdx6UwjuBeThgCpULxrycpJg3WcyVMoXSuRkc2uzCYLHE1RYdu4cXWV1RSbj",
  "key1": "3i5sQD5w3NpwAvmjBYhM4e4M6gfponjanwNKcdy4AvB7KJihqnHqHaEpCE2ArD3sMJukjHYaSAL65J76WFQNzZ1P",
  "key2": "r5WHMgik332cQRvePZa6iSCUKs6LHYqrXcQsrJyHYibuahCEswrS37egprTPBjSjuMRvaCs3cbNP17So2huuh6k",
  "key3": "ngQpSNpd9AebrrSL1E75kqSZbFUXQDdiuCk7E9ebKBo1RwSMqXDSimTGAyNyTZrkz8RCoKiBptyL4wBibHJf7rZ",
  "key4": "2BBNZaTwUEcr55PsiZwKXWzj7VLxCnaiFY4EkHa9eu67EBMN4KVddQaiwHCo4AFKxa7jBLkDRVNZv9N5aKj6Z4tv",
  "key5": "2q8dRkgPeFjBXjdsUaqyA77PNnqBkEyYMoVqidKittieD9ZTscgLUPofQYWj7LGEzjyrz5BYSv2a7cPeayQ1QSW7",
  "key6": "59JGNvjjpGTN1ZumZi2yg1hdH4VZgZ6Vo8STDKr2AZex94v19Qhud5yJ3ekirwuCEs5ejqaP2ZqZSbHLJzgoeQpD",
  "key7": "5GsjAo3mpqtA1fvKHk4fSsRd6dM4Sots6Xuk97o7Y59YisD5XFQbx1fgMnW1jNZuQKMk5FfYc4zBzPjf7KTt3MJh",
  "key8": "2E5iTgFoHhhx32BD5rGxFNHzcvMpgeWgKdC7DKUSrVTj7zCcTNdu5bhQDzRZm8KtovGRWb29TqQ6XPQinQ3EPRHt",
  "key9": "3J6NcMKCxuZpJ9Psc6SgWydqc5d7hecJ8pXsPbynct1YhAFxnQbdRWkBZy4q2RwRM5CjKEsF6wCXhs5ydCsrak23",
  "key10": "2LonR5m9U9czCf86k7HLZRaERUzh4eW4ZjJG5eyiBFJaJaRU1B5uVQf5CBqTZysAuydqCo2y7fG8iGcAdU1D1AF5",
  "key11": "4CjMGonLXsobfRtnznBrcLv7nd3ameBobNqCqwDJGANzL1CeLBbYKs3LXC9VkzNRL7bNXYU1fA3svbYT86PryWDi",
  "key12": "qwoewjY5c2bnvqLogPzPTZkC9WjA1iywqDM8wqwpVFYvCmECmDV5BWKEmmQ2gxsbR3BJSeMubzuf9k2dDuWe1DM",
  "key13": "5dG53g185uuX6VGoetGRBp1rshib2ocZkahJ3e1PsrBur8vwh5UBCs3kNWek2tJEiADH1sae7kusb1S1p118oij4",
  "key14": "pbiJ2DPPqC44pBb96jPUS5jNXegRXftWPPA4RdZfvNwUcx81xDRkocfqrM9kDc7MWt7SwTK56sqacjJPy9dWRjN",
  "key15": "Gv7N58YabftKz4VSXM1zHzcCxyfrqKW9b7X1MWxesWwLXrCcaUaUzgA8A9QpGRU7JSraX9xNv5M6TYTa87PBwep",
  "key16": "2XtSEL3h6jo7kxRAjzViniEc9BAqjcsn1oCpKa319JCRzjJ1HkowuzAH6C27FkLa7sbhKXzkY7FpScRrdMiAXWJq",
  "key17": "2FgGZViZxcpu4QW46jfK3nACqiDSFuL9TJWvDgauEbYAfan44gkNt7ocZ5ToMdYfQa4Egnt6EzvcfxzfFRWFbV86",
  "key18": "3Fmgbp9y6RrJSR6p8Q25sKyaU9iZ8q5XvMTCXUJ55S8eooxTeFu3uHCw3bEBuL5NkJ2HzSABgxiH6w5VYCK5HvC4",
  "key19": "5BcJXeGPo3Jqki3LAwGyx3T3HgEbCcpKyzzjy6Qe5bmFmN645ZgAK5aQmwWC1DZJWkVfruJSRybWmvVkymjYdHfr",
  "key20": "4HbkGovi18NcYGbMUbXiy2PRxeCAWEUemaHNqm3AoTnBypeDmSN7hSfY4S5qvhh9TFMWbqp4MF1XKuvJrENgN8Uy",
  "key21": "3NhbXsa6ZdNciZ1xUQv5yZBAXxmg99uqKChFpovEH8LTEovEzWxupxoQgEYvFHtdSGybStdKPigX9yh4aFtfs5e3",
  "key22": "3bL3cqogTYzH5PwCrQkoiiFHQ4gkoQL4UQ3YLZiBMpzou7KTULf2Lc8RSCkTrdAqmun5UavgQSxmZJJJYxCvN8SL",
  "key23": "3uDRPfDB8WLVVg14wsLo59eNNi51dvXWP46NQrdcW8dsP7gqu145tjSiU85cRfisnfUDjroX69WZzhUGygT9Wio4",
  "key24": "3zG18EyVdFCDkWwECtYgfWriM7hBYfvPRv7DY9t2kjsFaUbAEzebzuP19ACLawqeJVgYmPsYhkP9VWeczzQ2KFF8",
  "key25": "BUzzRp9A1uiKqHVSUUKJ2QUFFmLZki2WWbGGAyFk7b4yvtP5ccVPuS3cYcYrgwpGK1yW9MHL6XX4DJHwpQ9tMty",
  "key26": "5LWmkHdww9hkR2jtkf8HCYvjjaEc3whfxz1zjv6X9x2P4AMWW2DiaSBYNZ55YZ24tsh3he6yRb2sPu85Dde27qMJ"
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
