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
    "4j7jqj3Sr14Ro31rRNDY8vHa118yqrqwd9MQSTZhMQFwXKwkf8EHgzP93AADvqfJ9mcxHoqYxSfLBhHFNVXHLtq6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25hnnwnrMzvCajvhVdf3XJF7bofRN7R5wgtrU8Dvi7SN3bCVsZGMtCeLxNDcyrSuLX1DeMcc9t4KCzLTG841gqvt",
  "key1": "2G3PiMqnpzMvsJ3GitndKBBEmML2EHbPW31tz2Lf6CRCWuyqnwvPHbfvBoVZ61KvVWj6F3tMsujD29VVevj48LXf",
  "key2": "5Xqb8XKq8uCe9qUHfZHKR2EnoiDi2Y4maa8d39xQTQ2iTeiqfAMMkufTM73BwjsB93ufTxxKzDWP1jsSP9KaoQcL",
  "key3": "4uovmzrMwS7qSUKvY7VzgUHC9tzPCRSgmNkTnxryEwiootAdLjWX6VvzPu9m2kG75821uq7pvJXFdiXsNFder2oT",
  "key4": "5kPymHvVfR59fnPqe1sc1PVJNywqQS4VamYo1TSzhmP3igUEsGJCyc1niEXbnx2K1ztmdbje86NfKyh79dJzWMpH",
  "key5": "5i51MWixiZmWAvw3mEG2ZARGsmeZWQLBM6q61o2F1cpvWFa51B1snqdrs7SnqNtX8LzJjD3o7p9Y4j3JV957jA4J",
  "key6": "KR5SuJ3663XH9xFLPXg6TAzWjApe7R9RvuY7rCko1mrJiuyw2rwqGmHiQbp4GNZthAdw5MKJeUdgoZ5hvmgarjg",
  "key7": "5Nrf68WG9KyvbQCY5HnfELmAi8ZpUeFeYnScEsCvHEnwXYFsTtZ9nj4hj6UF957Rmbks4ttF8isbUFCMEWziu2cM",
  "key8": "3A56Q7qd4VcnC8vpa8tK3kaGkrfgTqU9CBruScRvGwcRddTzceJdWzsiaJXYMT7tTspLqVfyc4XRcVsfoDYSr59f",
  "key9": "3LveGKdWUXvkYL9T12Yx1jfPhuTjsQdaGGjB9BGucj7Kb3w5kAkjUkQmjHfPaeqF9zXdPrwGd9Me4FsbSPT2ZGmq",
  "key10": "p9Cd6En8FrRdWQu2jZ85PUvaEeoR2tKGugmTkPWe9w9R9qP6ApjTYBuuqZLbUNwB5ysftQWWhyV8kQ16QKmxGrj",
  "key11": "5bLs8ExSo9V7Z1dZV7Bi3WVPMWbCri85kKKMbmFdYU8P4wZibsZSmyxsojS1WRf3JaJNEia35jAy6PnZjQMDP2jy",
  "key12": "4zsG597g7yr3Mkhpd8th6fa1YXoKP4Ga5BCyPzvgxTxb8Uwtu8W7zz1P8UDmTzVXyyG1mzaY47UcYRwHiMpvzoo",
  "key13": "3Y8Q1Ct9VHCcqZZZTVgpGw9ipbjeArU2MqiRrqfN8jw9GbLpvaQqTkeT2jq6pVTDUvm2hWwiTpLLaBhVyp5QBy78",
  "key14": "53za2sP7tqKUDUShYvCEyyruC6vHBpgAMa9kx45DJ51DQgjYYL7pqm5kQGF1U2JY3vRXWA43VEzCEGMpkpt3SFCz",
  "key15": "2qNjhwXr3oUuxmgUiJ7pN9qf1Rp2ngSyzqrAeNjPsPCFnSbiKBwe33m3PvVzK4BtiT3JHY9csaCZ6hYCCttPdjTQ",
  "key16": "5NAyxwTxNPDBx2115JzntNArMLyuKPoPzm8BMpniKmZDndja2Dp8vFuhdXEuUDCBoXpGqcS7mQQxBYnxqEqMWgQn",
  "key17": "4NMmpZxnsguRGKzYxACXw5RVx9bCdigHnwgZ999oVgZcnC9Y7AAXoUXdHUqMLpzyr8LaH5xJZiNz7qff8BAmuHA8",
  "key18": "5tPr43bQGLiemcAnvhtPYMCU1G58oFeQDqJ2uMfZurR1enJkQmLhVcLXZasxzf8AunqLatpQaUx2uzDXvDGccdig",
  "key19": "3EvgTpqNC3GnHCi1ZJUbkeHmxTCHGmF9cAW1a1oKT38p5K5KvEhomnMXf4ei6FhCrT7a3xLAGPw8W1eVqGh16ZcF",
  "key20": "2cuEmGfC2aUW5Skw85Acz9AaQFGNZBTJKJk84eN6oqx3jnqPpbdN1UE2zgEpHSUtnxd7pGmNvWq4e5DvGe4bPQFU",
  "key21": "3gwjv8gffxmRxY9EdZ9xKh4raZuch6SHFrCejc98m6DFozQYUnD4D38wmEJcbWouay8q7WxQNYrFAHdw5EitCXmE",
  "key22": "4PFsohNYxvULvYa8Wjm1XdbsnctRTkQC1nzrfFHZt7tdyaWXjpb5AQzZ5rUhdxfKd7hHvPtWcm4cXquweqo26tj4",
  "key23": "2ArpRUkZW5TZgeh64Q8in5mRAf3hU1d2d26GLFM2pkwL3nKi9kYDdRC2NYDDybVofkAJ7NfVzQhgm5QqHRJv33ir",
  "key24": "VjooJA87tcZibL7EK7gm7QEw5Ph9K5jFHWqBEFWPpmnD4TJTZwDFMP1MboFGM8JtuwQnJ6qWMTBhumh7Vbq3b91",
  "key25": "43SRN4yWZMhU7utuLu6iwXbEYgkwsbm5r1W33JNWWGzt3cxGXh9D6hhMy5NXGKqWsw5uf4icZvjiKPU9SRJ8Eg6V",
  "key26": "1Fd45Q422NH5so5gPLqKveP1Nz1nKvsMp5Vh663poQdneR89ZeXjjg2wHDaiN17nsNDFWHMEzMZbixH4GZ1au8K",
  "key27": "2DWguCQEGJrufmdpigtpEvyn1jgTMwabMnuwJPCGXPaa9meNsXG95TbFTiyfT1vwkHJRRECsQQ6pZya7gccBj8tL",
  "key28": "35d9625uTr6QNV7Q1faXT269NcM7qh7hftSwBQsLvV5Z7TPiaMbwr7SZLSY8JuSQ5cqAabdQRsALKzuCjJ5TCyaV",
  "key29": "66aEbzxi5ZqHqSVtn785SY9CC7LU6Ksosb4oHPNgBYAe55PhkJYH3eTx7kvZJ2zaB7SgeDxdXthwXqKfzcBMg9o1",
  "key30": "JuCgiDCCKRu2bmJb8zsyTndgJLp1vpPrTofuDG9VfsavzQndQnaHu47XjizE2dkxqevhwCPJFCH39HmR87b4RME",
  "key31": "4GeXdC7c5JdQcgL1ZaMtY1obBPyaDozAjLsEB6CVoPnbAhnbY4pCttoZPNpyHgtdnQy1LuR6eJo2mZXQUT6aYV6a",
  "key32": "5jqA8cyy9zBYEQggdnCzcS8VmYFpyfLnrTijJ8aFVjzgrXG7ADUCt1EYANoLgBba7XoMxuFM9pX7uC28frn431uA",
  "key33": "3abNURnzCAKgcKmPFgzTidGCdJ8qipZ7gSKVQcaKCDQuGE1ECjpWYfNZfeMMEtAfMYd6ZKnRZxnw9gKG45Ec4fBF",
  "key34": "3oiiFoMCmvTtgSahWbwEGp7cBp6DARVkvmmA9hLdrbxEL8s9BEcwhNriexEvMwas3xM6R8hNXnUE65yTjFKAJzL2",
  "key35": "5Fp24VqBzxk5VXsxJXDymHwnvBKDUuVdq9JMLjVNmwHXTmsWHhpdVBnxuF3boG7yWJBqzK964DHYvBrfbn28Kb5B",
  "key36": "2j295aXubu4CJbSNJDr2PJVEb2GaAmoyMuPvyzNEvgYtqcvh8GVbU8ggD17iB3VPo4R2GLSoLYbS8bmFh6HXYc9G",
  "key37": "54kLFWgjZVHMvodEejbZPQBDHEe93ThAxchCg5Bh5rEWXD6UcoUQmNUEAo5zhzQC58tNytX2UsdzdtyuLf3NcjNY",
  "key38": "4iotpab1Wt7AJjhwbAGZJhAN3JpBBq28Z5Yv8WNPiYrKxCz6Btbnmp5AQv2FgtxYd74Y1UXFBD2gVnqYXCBiRkiG",
  "key39": "pfzsomZuXJrzwbkmZ8d5v5XtdPrjpXSK1gdb6tDmKxKz9C4kWnWeDuU7bSoHtRsa2TNqSSPHUr3MWa6P2qUkuap",
  "key40": "3KYGJ2WoZeobPe8jWM6V85gSbSx6P3188XSkdcoH4nGYUCK7RFkZkkpPVE42AiwtXj2YujEw6jf19mfCwUYbLead",
  "key41": "4ANgEeN2VpG4dCPbPR5iWWwx6u6c12Ea92ne8TrvRj2aVKmCr5hRa6LFURSCDcooDDBTS4JawUua7Zjwcyoferb7"
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
