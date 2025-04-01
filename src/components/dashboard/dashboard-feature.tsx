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
    "3otX9atfJQYQ7kKb9cguo1kXxWfV7SKgTgktXujv88CLcWLkcyZNyarmtTwHRkSxvFiMQgRYEzadUTx1wcDfi1Hx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FysKPb62KjR5AvhdY1ufc3YHLz1xiqzJE9zxBLccrvJvs2GSrtC5jWHhi2yx7j7dku1DEYfZh3hrtYtcJmwHENY",
  "key1": "2espGRpZDF5Cx6wmY3PYD17uMezFTZCetBKwoVmJjH7iLwmWVA6Gofwi3d1TU6KKWgtnkf2uN4QLZB99fqMsCdgg",
  "key2": "4wtEs4rzhitfbYzhaaR4tmfgJJJn9dVpc7dJCr9UeyzRcrFzw1XNDTJasMn75YbDgHJozzps7BqPFcRfPLr4Vrj2",
  "key3": "5T5iVKQASvBj3yywRKEUoayM1yJ6NVQGK6eACPccMxFFcVqHjT9NHYVXjejQQspHoV7AYp5c3zK6ZCenhenZgNGK",
  "key4": "5D55jGGZ2fQV82NDZkcJPiPSt9vefUTHYxQiwZDWzG17L7QJzhWF7b4APpKgyJBEN1fcSo1CHDfFNApJrDAGA2cs",
  "key5": "4gQ4VwfdCgbsKXtayC7mchTMMHSHJE5oxPeJ3Z6RKvAzDY1VY86eN5Bw49aaNBmhxGdTR31Z6KBRcoDq3whnYvjx",
  "key6": "5TzXQq29HWRgUx2Rz9ZfvHUDUajPQYCqVcnGZ92cTPPQUHNGjMH8stHYqfrn9zFazVbp9v6k7HzFkPy3oY26hHRp",
  "key7": "a1vFqtoepuJsaXveMv4AL8gQFNUWowZT7mNfwVL2W8ekeyAouwyivbswcxtrWXLPKGDFYdHxWeuEeGNCwo5ZRmp",
  "key8": "63bvcCf3qBvm4iATrFuzK2Uzn9AvmY3r1S9yb3AXrhR4ZcTZ1Suy99M8ZWjVK45pQ93P717us5mNa4caPxTMxD7g",
  "key9": "hwd1q8i1p5EFaKzQZGLrP176U4pPdXQ8tcvhEEgZF7jXKGi68oJUvHGnuG945z2nu1Z8vHyfUtFp19TEM2vLTFK",
  "key10": "5XfQ7w81fw33aSSMZbM4EQTrbjJdEHeHyYu4fps9QMfhV8RYdUvmSKCCQgK8idAS9WJPaHQtzgTxMWrdTLyrRbLF",
  "key11": "55trnjhfywERu6GZhPbghJmQWa8Xzez5FuhHvDdUPWgdRupq4hY92qNXHYUhBWuvvbgd7nq8qF7WhCDqHkTwwjqS",
  "key12": "5eickqWAts66tWtRhiQ4oupLAJpCi3nZkY15s8c1x9zxbt2cWEdXnyq2nj4MuQS4nU4qNG4smoBvAEtQ2wwm2st2",
  "key13": "2xZRqRU8Sfau1iL1wPMUqfzYBotmqECmGkdVCPzUUxkCkjew5tPrMc1HJC1i6zWt8SW4najgrTXpiSkfSJfFL91g",
  "key14": "QqS1XKbQWYQWGCC8T6vJHgAdNgLgsZ4Zau1agjJTf3DEzWAorMg1xrMWDDgX3jgGBF9Td8MXM2PZLfaNhMLDAYm",
  "key15": "2duCejzXun5a5GwjDPG38m8jU9jWywe53123Mf7UG4ETN2uoBG3eM9VQEQt96Uyi672jqTQAUcoPQiTfQyug3fbf",
  "key16": "4hDKZgsSh1WpyyxAbcT36RmzxhVG5ojhG6Dh7cJtoEDsgCs6vpp24k6VW8F4GPaTg9bimnms9LmRAPEVDz8e2oWT",
  "key17": "5Py4SN2eLkcSp4jWaEXHzZyRRDRPQ8w1JNDECxm1m9HXFwCggpCBjdqVQwtNq1rDcmo9vAzZPvrZuR2T1uKGe9oX",
  "key18": "U4XM5o4p2aaQXXiBTiWtPzcmhBatseD7c4cfLPhuw3RqVwKWM8hjjYEugkUGWmDqV6u8aAZ1iF4dkjdU2Gfn24Q",
  "key19": "3ashcptfSLVhDjYfYcb4CAbtQzmzZj4eNwq83gMRaZdQcEBvUiap9VJKfqzDNEexegNXUMComYjHPTm85SDzSF26",
  "key20": "eercHsyD1S7ZMcgWBTGzusS8Qpsqwa8Gixs1cURQXKyU9SXjbigt2BpJecwzGUrhQmNQ796dq1hztNLXAMKT14s",
  "key21": "2vABDfo3DkQceMhjYxaBq2mj9QgW79L5QZ2VT1GA1MmeQU9DSSfnCRVKMzj5SEs6zRB6KdmARVN7faizYo5tPRux",
  "key22": "Fa7ZSouJQAw8GTxthaFEVdor6WxpVQ37ij5nAFGG9pMQm2cbBwUPMgR3Ho1mtahHpYWSzcmkrz8jzCVbXDEb2wa",
  "key23": "2uxCHRBye74aayqxLvJRuEACJcv1Za14XwQKmW75bgBNEZwnw4iZTcJ9eWzvTARwXMvHJShE6RDVmvNfgv42SRv8",
  "key24": "5fWn96bGdAdyN9wSK9yz17rbH496bubhGs8mGHZY3NxW8j4oDpnCcNDmLytaCCgGBkvt2jeEpgHbz3Q7iSTjGAPf",
  "key25": "kLxRpCeFkrvziYBUu7CxbMHhvGjZD8yLfpRSaSZx9afKTqQdAeLrQrsbip4zC4aLYLcYcL9QK6rhTYzWrVXFFWK",
  "key26": "24qLxuMLr8vjpp8sdiGqoSnbDYYPkcf3Go8KdHXpTgMnRc6FRjr3AqxygzMqJPFpBvatiEogPHr1Mx31Sv6A298X"
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
