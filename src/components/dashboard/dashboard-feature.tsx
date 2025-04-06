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
    "2PukEP5uDMK67UmnUoeFd2GGJcHY2vnptj7NjoeWgi1pCd2ArHxGPBkEeQxXuncTyKErFhzBXNENMcDRhfchNqJA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cSWS7dE3wtbnWK2NQrxtFqYmCfmxDJzn4CKcSaM8VvQpbFD3vHL2cfoPRXczqUfkWxCSEb5tMymWdD78zukveFK",
  "key1": "24c5iQbkz2Y5J6463Gy3oPeJWgxqH4Hvw37zg1x18ipv3kZrkzgW1qEJQu9Asosx9JUD936GkgCQotaRA8jEpdsj",
  "key2": "4uZhDtD4SCJjdVENEWDApGVradh5BHVTsnjj33ybFPztdQgSxxb1mRAXwoEdunoUBkDe2GFnsAEE9G3kBJYFBsWY",
  "key3": "5swkLYXvoHvvCnftcdo3AC1RYAquuHKTnaikTXqE7aSDwye2XvvgWDZviem7jwxU3rypk7kgZfrRTKLpgZ61Sbff",
  "key4": "5FzTY2FcKRyjZ7UeyqNDvZn74Wi5JJfdNwB7DzSHGspVeW8Q7Ri1SNFPjDtweNvEoinNXQfBTWfAVeig7ccQNGKp",
  "key5": "5EzKvR5SaPfuNv5rtAiU3DGzzY4Aiqr3VShNgzGd11PBDpQHbXzJqza9vCHQrz2d3oF8sAWQJ2JgGhFbZk4wh9Dy",
  "key6": "25CNrdGHyrYfkYNdg9y59wfUHMAqDGSbgM8EzvMBEqv4vqsAcKxm3N75gYYUJ2yPCHekDUtAG1pSXZgEbDzKDX8X",
  "key7": "2FKhQnxE5DYUrzKR8w45mZYkr9Ab68fZuHhP3iMiPwhYXaiRfkxrJmfrfYvC8AkZjb18rMWYgXFbDtKzvvxuAH4e",
  "key8": "y7x8fYBkXCxgu6oiMcdJ4jY8MDuDdZMMMZ8SwKL8LGocX9yiaD9e9zDJx4dHcKsboQ4xYMsoVTf1tN7D1nNdaPe",
  "key9": "4eBfTDCYDrXydUp6g3BxochHac3fvkomienzpx9yHW916V8TvY1aNQuXwoEVsFVCKNNQxCc9qfeUwz3WqFTdMTMC",
  "key10": "3Cfgv9nZQ5iAa6ze6ic7rahUmSNPmYUUpZdapgZfivDFPTU7ApB3TPPfh7DxBXAonWdkstzJ6vGoabNNxNGmJRKw",
  "key11": "5idKFzyQgoCWEBPZu5KJA5ymyKt1T4FCHADp5JCmTtzD75ohsWwVACG9HVdtigoBfAQdBmxf2YEHstfwnWFCEqDL",
  "key12": "4ookxNAvNCAq4Afu31jjWwiN2vjdAv1Q51X9Fn5gzpcgD76UFzmwJjoRQyTbYzanGnUWw6S3Eqey23y9r5rWcxK7",
  "key13": "2mk7zZfdrUmCk4uhJjHP314WAafg12K1TiJXbWakcosMsJJ4vYNM4bJPGaRZD4epW99egJXVRdmVx3uXjGyxSD4S",
  "key14": "5nAKNoGKHQ3s1UiNQsLxpFYDDkZLKgrjYt19QbCW2AEpXC6gdecTZT4CE51kngocVtt7QiMAHZbn4rS1e2vexCf3",
  "key15": "2DyiYEQetZc7HsU3si3srWpFWxP4yRXFNdckjAuY99EbnbVxUFGNEANX9fjhMCSWNYLpGtxPC6tkmKGSasCFuzMc",
  "key16": "3R2RU7WVeUxipYSs82dn7YbsFNyADZixjHKchoekRA3VchJCn71u4Xb78BVdyYXvMmVbQKYaDKtFadZ6YVmG6f8F",
  "key17": "66c9msyVKWRsA1Y8rSyZx91A8EW2ADWxop1pQmJdzoLn2odZQBCkR5z4XKfvbp697uRkPd8KxQ6DoyE9EPkfuHXj",
  "key18": "3QVr1cHaGWxBBa1hNhj7uBxG2GTL3HTVYhxHJrU5RfPCmvZ5vwE1wVEShhkHYCtQ9FFN6xXtSDCSTJ7PtM1L1Evu",
  "key19": "5qfFvYrfyDq8srEAHqiDFfdp8SSiBSwoGMK4Tkkhk8AumN5MKBtmutYeherUjB641XnqK14mLqQSyVaNCzDo3fAV",
  "key20": "3iF9FzMEr96BhB7E6AAG1cF2ZtCCGLWLuV8w2MpRbhFPAE2bjAkFwbR9ocCU6hdco4VAtLy4yXsaA5JSDCdvhUFG",
  "key21": "5VcmXKTzSvfxueN8Yfz8ihtaQusVG1zyVehkzXPWDYKnvi8iRs1fd9EVpF1H57Qdx2JSFFG4eMbwWzVrDeiwzHs2",
  "key22": "8stNY8qoKF7xNJdEcAbs6PL8ZzRkasg7yQDYW7bEU2nKdbeK6wFHJwzFCuU7fzJPysNMR5NTz6bN4Bih4oHLPpq",
  "key23": "Z2uTs6krU3QBiQjujBjWeZEotXKdNX129SGXoDvphUz8ma5brDvzChcdJTKxSeqoQJHMjBXKKHYqYdnrRdUDG3n",
  "key24": "66P715XBLTC5k4gZ9Bs6ETTWNqtyxTpPCvJtZjZGHZionnba3Uytsq3tyL68hUgFwHw7cQ2a7TqsZWhrPXHfRnQR",
  "key25": "3KhhPYLWAi6sgas5jsBxoL8VxsGZP3VRYH4DLHxRfqDZVLNDfinmWQ1o5yzq1u4yFx9TfRKK1LZFByH5oRgq65Xj",
  "key26": "4NbU6uwdUovXLQVbw5LsJHrPt2tSqJqgHMqEYXThqKyAYPPJcBhsZsKfytPFg3Xy5J3wfMZWXwSiyAJytYu6YR69",
  "key27": "5VyBq87WT8ZbNcyA3MdbcETfBcJmQqdKJ3c4oz2vvy7ZYov5Y7PMwmVqWpGR2JCsBnKa9qdW1Nb1z3pQthEfAZ2c",
  "key28": "3zQFz4LqqyYnFCimZca5GrBBtY8GL1XaLHXzWMYJibidGLbjrWR7upcSgu8iGKJyjZNAiDgQdvnNXMFxXURXspaS",
  "key29": "tA1J1KfHRvoZYmoT6mtfafqEskbbtBMTH7cs6f2VnAHWNHutM2mmCVALcvyfXTwWd7sSHcT1LScwq2ABJKetNgU",
  "key30": "5qL2w6MMBLMEPcqkYrYF9oxMG3SPPqRWXBfkQcsPMezrFLsa8K6TBneiBY9rZvbiN3tD821a8iN4wqwPh2VAhAyT"
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
