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
    "5S3PdM2BWjNyKrQirFansRUMNwcAaW9z7LfFnrXhcPvD92LR8hBm4nL2qPXdT2TxFEbt8RDa1zA3jBYEi9SQgxpB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tsp9boF3Qfk7KASHQbnS2MbTRHCZAMVZR5JtZGUfRxkxizPaa5Jox7qvSbE3Dym1q7qerPAXFZDkethmqbFHc4M",
  "key1": "42jLfAXU8ndu914zfUjhnE1TG1y3S1mEGdFf4anA6i5kkSX2BeuMvMR7fF1g93eiGx6NDkMsv3vgGPdWbMa2agfb",
  "key2": "27DyxUWoN5AKSJzaB16d1JNi9WpXoC6wg2EEbymwba82TBXnFn5oYXUqr7YC3Z3YGBBsjyLC9KRiwNMWoo8sx5GN",
  "key3": "PZJMRoNs1jQbZQFf7L4Zg4BdY24FMq29PSE79xm5YEQbMJYepAXS5Dzh33c3eMZvw5XKGdZV1Y53aPkFgCoKnKE",
  "key4": "5Tt6WSeXCd2YhvjssGtrpCrDKyNe88viv28xuNociFjxzF7rhTFpmdmF62idoL6UTn24cWHNSciUufJZbe3mKy6v",
  "key5": "4cSuxhwAzr4EoGP1rpjRcDxbEhVot1haupZ6PbFJnGkzHDeAHY4VgZtRjoN1bb3nsvDYf6cCDHXWaJuZM4Abvfdw",
  "key6": "564rbKgFndiPrGJzNDRTv8UxRJDz5C8zp21q68NMoX9Aoen5vW96SJbT937Qtz8JAJfhW7xisZMSmxXi5T8sLdMo",
  "key7": "5RYYbvSHBg9FEbV7UoxZ2WRkNAx7zE2n3wVtXSpkF6iGTy5LRcoUmNcP6Y473C6TpH6chwWRpj6Nww84W2K3abq1",
  "key8": "5eUjrnYVo8nQ31zANzY4FddZB8pboEVsV5ZYn8szL57orjsf43762Z2fkaiUqGc4KBmrw19Qcdh2E4wTNnexveCK",
  "key9": "2FRT81v5Wotk7bXnAycz7n1YxQCeH8ftDunccNmDz42YzT8y1bKVC1mARtTxP4P3R5bZidRaqfKmoX3EXUXsqzQw",
  "key10": "2a8yhsBQVsz8HZoXSFwvt91VYVDR5NK6begqgZt1VEd9TH4wEE13xyoxUN6EFGk6yTnJV7qPkS49MT9k8fdLkz6f",
  "key11": "5eKg8L8TyrNFvPzEvXiAYMG5meofydmqWG5RYzfD4jwKfGNV656aVntjYX7atVdH8Jxwc9QC2xJQ6vqWEZfC1jbi",
  "key12": "5bwHsrkWK1M4Fztbk49RYgXVPSDmskBh7tBAj2KYScGxYYsZd25V7zLc67UuSJSnkvVSWGY8kDEvK5f5SvnFU4gz",
  "key13": "4FWdZbX7rZanFgTbGuN9wV5eyggTr2Arz47jMsAR3qg6GDS59BK6KP2ciczmvErbeB1uM6KMBq1xp6LtG9p7jpie",
  "key14": "iRvLbt4P7YFmZtPkksLou9PpZoCwjLRGYNmuuEYNHSYgn177zpDQbWYrhiRrJCUPcKFK8a2oZ6jp2jw6B7cFuhV",
  "key15": "49r3q6hd2ZVWsNiUang6sNrGjT4aobp7qRHwWfirRCwPcDS5j6TasveT5s8KxhqcKUUb8n6RnCFECBUpUUQ473PR",
  "key16": "2vBpFPJHNESq5Vrg6gJpPn7PNmrrngLXe28vD5pbkxwtaPiT5xC8LgMgMc8GH4UD1VUfdc8o915Kj5xZ3owLJ3Tt",
  "key17": "xq7aMkzpDcHRbs5dbh7yK4tqE4Chh8tFNF3yzr9zhRyunqfmVKUeNV6ybasQbPQ1R6UAkYSpnGtd3r3iKc1nSjj",
  "key18": "4SH1r5eGhZN6r6JryiGS6dgU7YN25EcB72izgfTn4eQQ18mRvpYTjYYMrWr5GWoPEwTogHVPXyseWwJNju1QtWvZ",
  "key19": "36waGk56wHBC6ds3oKjihEW8HfqbhSYaE1vRUbNftmQdoSCCCR563oSpx8MBnpYcqc5oiC5wpcWUWpXfLaLhgsR6",
  "key20": "KsSp78ucP8S71UTVdvDmSx28fX5AxkTyT7UT7CdRXcp4VwQvwBUzMsLwbxjrDL3FWomqNnpxUH7dnWWrWT8t4ri",
  "key21": "3WaPUvN1rS1KR2fZEoBJkE7MzhdD1hsGFmuEeHwm5cTL4aRGtzvyvbKG4YCFEQasWYGYz9hy9vs5HfKPXZ5ptVXw",
  "key22": "3qSXBmTAGuV5GeUYVpUrNNS8UU8nri98zMWxaEMVki29BmQYd5kTPk61q2snbyQDABsQjA4Fq26Cn4bHmbf5ihxs",
  "key23": "2wQMgwHMqe9BxnCo52GudJeem57xz8L1p1qhQjfAHJ8sukiHgTSF84RcaMxhppGe8oa2tNu3UrBjEoLbQm9aDbxb",
  "key24": "jLUdEU5QcbG8GV5kMzbQY2PAYAiueiD4vdLgwFSci4PK4Xs3A67RKRmrU6QTQ3iQtr1Ug556aE1c9ZNbToN1xUo"
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
