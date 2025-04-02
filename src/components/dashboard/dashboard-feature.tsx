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
    "5k8g5GgDtvEc9SpZebLx8dCnZQMEPvefJmTfN5AF6QftsWGw5EQAhSe2YmBb351nitAQ7SirZLeF6LfXSrK9p5Be"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rpoSxPuvnqmToUoLdqZfe1Jqytk3qbjCsBSDsYstvhmSDFYVNeyWEPbsGA2GhNbbWiQCtwHvpUvKYJLUkMKfdqi",
  "key1": "2w7wip6eyScAb5BNPn8mTFgFZDWVnopRphQRwcsmcPZhazM7mCECKfRdqNXUEDBp7wwafmucpwzmLntitLdCkDBx",
  "key2": "3GYNKHPKSyfaDhCFrWcuhgfMGQQDHDmXdUkq1R5XiQZM5d4iE8cXn4hNgxFBpq8DypPiag7zicP2FQqsxakW6uXg",
  "key3": "3E3K6DeSqbxqJjtVXuFBhfP6auoz6T8jUzCdF8D5kXfVWySfJy1SMJPapcPwNmFv5eWMgdAsvG94scZuXHNcRrX8",
  "key4": "1279CcV4kzoX7N8UoT7jpP3MKWUQR2PXBa7RK3YPJrGaY96cE2PoTJ9VeuuLfLJfwRBF8buznRbTZVv2vSB3oCWR",
  "key5": "2mpxnXjG8QcWLAE9vbUc1Bv6p3BnQtuinREsAVWPGWwRzVhfUQa9N2CjHHDvF7iTE1RDgMBEAk6NnvpWYjccxRKv",
  "key6": "2FYQyVgJwHb1rEHXYfvxuGEaUKtFkqvYVJC7yiptgonX2EuKPNHVbeNS6667XkyPK7jRL1AewZW3Vthmn9kQETWd",
  "key7": "2f1o5gwHZuT9uhr4GEcC2pbKkRiszgErWGsfL4cQKEUDRoxr9kTW8hTCmk7wMca3b1YYQqyY28yjbHqehw9ssptU",
  "key8": "3y1sZRSbj2c7DgeYkeWms44tHpsXMToUzkvgRJd8Vne1d5dYMqXqEDTMQ35hSDn2jhrSEUCWWDea4f29Kk9eRjkU",
  "key9": "5edfQ1AasL2qcyq4WP5adgA8JXrnLzK4XTq1FPjwYbKiBuDfYbnnsjKqqstcBpQjL2XdGcAdognXBgiNgn4gwTWD",
  "key10": "2h4djqtHPsPwp3d6DLW1LrKtjMw2YPaA9yBU61Pt51UgnM3wJhfrUL7m4ynrx2fxvCbGtDJUkq9RPJBGBVv3fDc5",
  "key11": "4pone52xHx4CciAGyH1F4VRfovq8STe6GLMHc7cCmCkMyKd6eXsniKt4vhRrJFEMmZsAGQBAzEFrD5BMG426ovLr",
  "key12": "5xudEmV46rptficFQbQ1Arko2gxGVHo9SQgwgwfgZqfbHQA3d48vbs6Pn7UpniBsYc4dDFhiNqT3ZUhmLSAGK9zo",
  "key13": "bNEW8BQCeJnqgXqxx3dQvj4UmPc5DFFvM6ewx6MsDyEBpshcpD7wJXGkTStwAVjazsAw3srq9UzAfSWWa6QgUsc",
  "key14": "dPZJFfaprhXvVXVFxJF1QvBrLJbZHFAuwbTqDW63Dqcgfe59RFcmra5GZEAqC5abJppuUEBMwSK2cptP2GWkw2Q",
  "key15": "9WMqBJbGp6NaxbVtPp62dLB8aG3hz8Rm69o71fADnu9EXEe7H4g2AXf7FBQ8xGmP2SpWcSREcgKPbbkZz8tpCtp",
  "key16": "2qVtTnjdHVmuxnv19WKiKDpY4UtpZhyZkiWkX2ogcy9y9MdvVGV2V78CtprCsJDzLoR5biRNUZRZTAWfsdzwEYYf",
  "key17": "56EFforE7YCwVEtSKcRmQRnuJHBJw4BDijGPWBopTPhEK5T1DWedKe5CayrWNvmy6WPeFiawVnrytQ1K6ByU9wH5",
  "key18": "WnNqd3ykhNFoA57Ez3MVkoWpkEicGMUh8iHxVhSmi3ng27fEGoMLhkiJq4TPtNbsvST1kqARpj8ejkchTmKrdCq",
  "key19": "3S1xwwe64AqFH13JCWTgwjYqWtbehBBra7FVUzvjbEuVYsv2NetqS6bh7dFiG1Vjjq9yfqX1CS9m5ffYvmJg2XFE",
  "key20": "rTuMbRHLvVB8ykQgF3bw3p7rSsRzndhmzVMqL1MQ2N58KHEhb3YQKLtj9iDcJgYbkzhftZ6fAux5qHcNGBHNZpK",
  "key21": "45pKyNzZMiSYtcL6dLhNjkpH3JDQ7QEdj1nob8T811Dq6h66JiiSCdwbFoJoN6eZTYy3xiRA3NUUYYJQttipg5Pb",
  "key22": "VDPHMZcaSi5kKLjoSpb2DNcB4Yjjf8JU4To5Wi2SwAqA77fdNDcc6rs711M93fysM9ft13PGXbbnbKzG4HPRZJ5",
  "key23": "rxwEs7q7tQ5xKaXNH4SkHFnoisWLUD8frr43AtxHXg4RE3JPGnR4U15wyXamdxhZqmkV8hgZjYPU2YprEZGeUCx",
  "key24": "2NruxhFRCjrQiSbN4ubXiMAYuaTmAChHRjfgy5XWgDn9koVrW9zhwZ6cJvM3ehr39e5nkQEGmjYV5FNDAe94Sbuc",
  "key25": "2TRyhWvzg4pu13Ues3K3KRxKhXN6wKXQjsMaf3uiYxY6A44yuAtRHYs7JymLzz9Mz7bam8Htf56psiAzbG8Ae5uM",
  "key26": "5UvKmohLFnw8Gb1tudSLDpeeAW49rHdLZoxTaTWRNwMRfeBrScAK8Ua65MqJWUzBGJsiDo33nJJGYX93uW7oTx7x"
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
