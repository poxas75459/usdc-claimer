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
    "qpQmHcJHkPHFtN4tLvRVbgyz7ydQcsQo7QQ7Q6u3p1HNW5W33tAanqf1AmYoKoevL3TJCMfE5TMaiCn8jbC3nGn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uWA9ZqzD6NTMxZtgDkHhAN5J61SuvjdEP8LmEajHRPXPDppDzFADVcd9EqL4Js8RWxmzMXouqGugWRV8njrsWkH",
  "key1": "KzyFkfkRN98gZMu1XV4gvK1U4bJUnUfqZLZiyPFCgnVgZnk4dTi9ogSiY2mubzDyk8XwysaRVW8mmBFtNEr74zj",
  "key2": "3jcspg9ZYpKaLKw9qVvLfmvUENVSzQiptdEeZxZpAuFrw9GbtamQZkTGBk54PCSnHGt1dmTPcyraQ6nCAEKsaGFd",
  "key3": "5oH2hZiSDusiFZK1cePjMZk4whL8UhU42bpR5C4Epn8UozhEnEXAPPZkXK24gmkJxNpiNiL3A896zKcj7B85rmhs",
  "key4": "2EERrKLJMaFd87oFXuMHgbyffh8e2EhdeoH743ALvgmAzoAUTdL4wYBAjs1omSgHad5Bw2LsTELaAL3R8HMD9KC4",
  "key5": "4dKJwXNkBYBCnB2LkPH5uGssprjoMSV8giDxCqdoQsnehNMDe3Z86hNNALHDZMURvhVi7hudpHM1ZudyimT7wyT4",
  "key6": "4e67H9SMLqKY3JbbbkJSMQ8gfbp7CbG3vzGcnFSmGjG4q4a68ALEedMUVQpdVgvw18yst2rC8RsC7PhHjijLh3Fy",
  "key7": "4kWEAJsZYVVHUTHK4Qfy9GLNx2CU2eVXVYqfHBTHpdP5i8Xx9azdT1Mer883aq6asJFRaeKyw3m1MtPucnipmZ9d",
  "key8": "HLSr3GxUaRN7qjL2fdgnncpjdNpPaDWxYa8x23gEhKkQHobdmc2udpuWrYRu2qAiMToVwPxUkdkm6a56wyc97sX",
  "key9": "3qHcrNzoV1t4Jde3iCwDLKhfCrMZtYSDaXr9HzQmsVMMFYvJUx39o9TnSEWKwvyFRygaAvMuQANsTj7v5mWtrvbr",
  "key10": "5cnQRS9eCyqTSW1sanQByJANuCdTR1kYuzh2tBvRybMsTC8PsRCTbQJ3ZKFZ2HWuk34HemoHSZxcS3W6RKqYw9Q6",
  "key11": "4xEDriwPb3o7vKc8eyrZqRjAWX1kPY8as459peGEXrz4Pab8vpkK6fo7MwjDuP1HTz4k29CKeDt9kCe6BvZgY5y8",
  "key12": "NX1XWW7QiUAPf54E4zdWsjLL4bu5M81e92qRgfgPHvFskp5SXH3R2WsKshTttyadHhL8GTsfvX89zDLYMxQWS5R",
  "key13": "5bZLw4JwnVF7Pv8JiD3zAcUJ4AtVxcAErjoY5LfNy1rQ3ekYmWMCnqbwn9qd4GzvHa3BjPHHLa26XCtoxBk9i2J8",
  "key14": "63hn1u7kupH779Xd5a64L1VGfYEa6TQb6y6vDTqYFAU2WoLsk7UQyrgJfeqKWvPCjbG2xqfsp7hNWD9Dd4scFdkS",
  "key15": "31XtxPdXQGddKKYpoYU73AdWMQEBUWPjgEFkTa6QMeUuMqCnXdiicHTv3fcfiivtn2s46JsC5zQ4P2LpJ6zzsMD7",
  "key16": "59FPyW5wCZM4MqGRroXrafeA1NfSKuZw8gD8QrutFcxweD2qviYL5WHr6rue7NvQ7JqV9mBDWBRkfyKXhzNkVrKr",
  "key17": "4dYzdHx7wwPXLtfrTETaU1KHenwxeeURz6wewSRdqzM7g3jVhTBkEJFUZrnTioCJNprXQ8vPuQBeRFcYVQXVtN1z",
  "key18": "5QtWkwXduP228sRbUZdTMwo7mZsm8AhVmVGtUTcos7uYNiFk3a3nLTRRLFG9aKuyQNWsSp6NgPYzgMxun1wuUti",
  "key19": "23ciX7Ueh6JVqNjG9yGXHVUXZonktUpXdbjfVnapBiWsEZziUJt9YoFuUzRaRppCcjA7npwuf77g61o2b5UMhquC",
  "key20": "23TtaodmJaVvgJhUdBGRgtNqYBdhQzbJ2r7u1mtqP2mmdR8ecPZVcvxkfeyc1NC6mL3BCim1BPr9eGurZ9NzDqk7",
  "key21": "4viWU4YmNLHGw4h2ohNzFqQBezT4D7aRzqaksETHJKcyyTbWTdwsirwS5TU5dVWjBSbKPCo3zyxcwiiHTUBFETSi",
  "key22": "pD6MdnAFcRGavGZGu8FDC9T1Fu7Ko9QtFmWEBg2BRgYhnusqU3eM2573M656GeSGWZ3kA7qUE1aVw9ghCZP8ToC",
  "key23": "47Th3MKnNbXNNjQtumuAwfrDzEYHGAoWXZDPdzcrtMzGKuhuezfXiELGRiBi9WAgVN1GWym7cS6BJGGbyQkdUokF",
  "key24": "BwXfw5do7mGY7G2RVkQm3dNfzjkyQGD8UEkPjKtCJT3yeHFgNux7b7mQpJszrBa1Ry4y8paTa1aTLL5L5Mgb8hb",
  "key25": "3oZi89B49JVpqoUD1gMUxYY8sVBJv4hXkxedyfaZrMynRgs7bWvXPBRne1WFshtPfEbu5bYYvZATUt5kHHky1QGb",
  "key26": "X9XzjfbvUW7JJQkCgC1Rdqp4CPTReBCZ2XmtwiuBATUq7eH7fTPSWLMdyy3rLQ23iGmgXWUAg5jxqFHqZYKyyT7"
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
