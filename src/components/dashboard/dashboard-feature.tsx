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
    "4Z9pesyDiatRWZheZJEZEWm51p69cRAiaP2S5Dn8oP28ZgBBiLDrENRMSvxMSjxT9PCCvqqBbUSJw29JKeHZXxP8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oL5TxXTw9LPzLdNKe7sgoB33aAcpcRkZhXKcQ75ytBZSW4D4mNmR4RHGJcuHeV9cMckVtjSPdboFV5CGWycFogN",
  "key1": "4NNccgZSXFHAVayACTPawm2afcjpbCytDLtmgkz8jNtGFwpu1DrbfEhGL4YSQaYLNtS1MKv726pAe6rKws4iPo3f",
  "key2": "R3Peqy6BmNTHHyj2EDZsfwn5Fum1t6J1nMuv7ruygNACP4Ws1udPbkCvb6FhmJniGzBevuM8bXgW5JNBJ2kY9u5",
  "key3": "3vTdSEhquWHTJpex9wPzfw4H5MveZa2J2EPCew8TYC4YG8cWzJcbQSVEZqufJtGsVbceEmX6FNmUFi2a2bDh8cHB",
  "key4": "67JibcTf7egSm25tfrYyJRYS9iJJ4KrMc7ZLuLmo7nQGWghBgXP6728yqdpy3GVUi5P92q9yuRkJeq7hPRVGZBgV",
  "key5": "SJJ2WzXhG3QXkMEMdPEhcY6o3G4GA18NMayzJ6qz1n4841T6f7wp9NZ7oNTUPbaEcQe7ouZCzBkHiwzrAqWC53r",
  "key6": "2YWn11qSC41thj1ZoEcAD8pHGeLUxF87N8YTsExNF42jz7iounWFDKqrPXtWuZtoLEf72v7JKsJFoAHk4K24XGMm",
  "key7": "2J4NLHy58a9esRzzdffh8L7VbXEDgtrrDSfwL7Pn5gNJATMtU4XNyBz5F1BEg6gUZxtEfCfeNNN8ndaQoupyK49C",
  "key8": "4UofyQCwsssEM1VFRaC5u4V1RbxDxffCHtKFEYfy81xFsMxDusDDps1KcTrcVqaWJDJ8g9Qc1nMMMqwPH6oX7uL4",
  "key9": "7VxrLRBkGfKspmhMcTV8uY1Sos2Wtv3jjjk8QFLYGhCKxHvYMvDHK15gJBWcjNU5JgRU8q6pkYYGNy5ofPwY1QS",
  "key10": "36RBnYLva1g9xCjweaGrQ9q8pgrWr9hPeLD9ebJjH2pEQqmN1U91YbXFHjHpXeKQt42hLMkTvDZnQjbLb8bQorqj",
  "key11": "4QPcRDzg1Ubp34yJEu12x47xF8RH4z6Z2ktGT29PANiEuQBUsDxiP3BbwP62dZEFtsLJqctSLoBcXdKCi1juicZV",
  "key12": "5SKZREprAWDNZZwutoc6ggfLCPFxgxvR7KExU1VtcTDLBcKe1V5MZdQXGYuagbArApJFyfpz9yUL9zZv1LAznouy",
  "key13": "4UHRAEjmDQjQY4BVYhz2giB7vsQUvHospDVhgyPyHETvoWAUZuiKFCFcyXWnC4TSVd2gp1sooPuLDaAPnMq4a3N6",
  "key14": "29y8z1hPKkeKhrsFpo2NPK8QrNVKu392rV666z8eFfQytBTZcnDM6dTVQhHWxXfXXnhUmvCQSRqVqJfpcXrFbkoj",
  "key15": "4xFddfkUxnJYcV9byc9WJqxukbjx5sFdvRzDrS7RvogWZ6h3uvKeYQ7CVVLSh7BJz5Jn28hjVXNEymFC57JLmr9j",
  "key16": "4vqJrMygwoSEZc7LRNg5Wxb66APhs12Az3MUugXRXVe6VAw8aYMcCQyrteXC8J9CTCiAUguBqaGza4mZvxKg8sBj",
  "key17": "4RqzJQyJUAwfsAvSex8is1fDHDUpzcEd2G1cy8Z3PowCYxbAAvcJHsm3fXk7aBKHnYTs7YiH74Ye9Ah59ChbKrEQ",
  "key18": "5AsF2QYwUuHK8Qufywc2c9GEqtxfZVABmJb5Nm45MR6ot21UFnSvhuHYNzoAHEoimLPqxTm4LPZYeJrcDJ7NS3qp",
  "key19": "2SJaraMAPupiCLUe4PqTkYsYgzVZV7dKsSRiWK7aUfdv4CuyoPd8fymSMqdZFad7Cm9P9GPDZaqEmvoHtzWUVigL",
  "key20": "2GDjw5MwMyKso9TX6NAygLnfY77ry4vLfbiVxoUQZh8jWynveEFXWyivTo7MGjYt9KFpMEugCMZ1LCnPrgucVnBE",
  "key21": "5wf4NUMLcb2eKTn7kiqTttCmbJc9T6smEAuAQ3Ue3Z4UmGDJyGPrQQ2gBYKUWYGpU5LreMPpCBYXHe9pYVN35Dmf",
  "key22": "2bFPKjB9iZvBfYgTzuPLwQgCJH5os6J3cd6oBKQVPsYXzT6eip87B6grar9MkpgUpqSZbes3SunbpL2RywGykWRY",
  "key23": "4i9Xxgq7q4r7pPQNM1AMnEMRntvsz5r58qCnYJXbhFp5D1cnoJRaEXtTvgDbeAMdfgU6eQJddXwK6Rr9YGFcu7Ej",
  "key24": "2yf1xyszcqnHUhNLJyBqaNa7n5HsF3a7gqfbrTam2emXupFErgRSxDsbLqfT2eya8zmY9C38C6VKC1epHxaPKkk3",
  "key25": "3kjGJ5nnTifEH9fX33xGy32HS3qYbGVD6zuy5y3JjbSLVTwxwcjFqu3VQSnECiEcze1zoS15STn9jmDSzX7L5cv9",
  "key26": "TdefvkvRUe7bKPuJudaZ918MsibqARDz1VKH4ggHcfTzgai1v5mwBpLM9U678AaitHMJ9aDTKgj8K5nxMG7GqKW",
  "key27": "2udUzhiq3t3bLc94qoLE44Pz2uUWUjgt3HEjDS5CmfcJoFEYzMDnVK1muNewZfJN2AEuWY4fua39Gn3G9mciGfJ2",
  "key28": "3PxoRTpV5W1SXKVPsV74agWmRuVryvJeFq2vGvyJjrfWt2edpVBpCo8PmkVzvPxCBGGk5eT665JrGWpzWpJmLUid",
  "key29": "58wqDVhMQuvkqSgob32xgzH12kifNbMFTNtkL86id9QEGbex7JKURrT7Sd97QhMBwPBrcTdAJh3VeTSrKVeVAwdr",
  "key30": "K5hWzEP3Fff1xxoCgVn2QWMn7D9oXroh4U4KdwGYuCRGbKfor2tLYPYqRTAEv6dXgtvQizEAvTb58UoLabdEjPM",
  "key31": "5wS18K7z7SvTWjV2czpFmX4JM57Ufdrug5XeipiqnczzvJyFYMwdrxsVbvfmaJsVkPEAHpH81e11ZZdwoubjQC4W",
  "key32": "3wDtsaJivPzsHRxmdPDFYkYPnaVZWbabmfWS8S8rezeh2cV3fdLEKBanSRp54582BnZN6FVvFG7r2BekNtnhfyiB",
  "key33": "468uvv6Z4SFRw8pDt8LeQ85QwLp8VjGurKkzuhmZfyUxzqSF7NQA9k7RozPffMz6MxMK5K9dWxYBG5Kp73dwjoPD",
  "key34": "4aCDLLLF4gJjGhmKK41nYKuntqD1BNznxQvCo92Wh2oA8A8Gg1SScZm3vLcvUrrJtc3XTUhfZW8Cq7JP1PYG3YCm",
  "key35": "AYoz2usEq7rWf8vwHbN39VJdrRda9wiuHsS3ffaw9f5TysYTt4vH1djGwgSV221V2MVqQDrqfHZskEndc7t3ABc",
  "key36": "6719GyxGAafSh3vdgrWJ9XASUHJbGariHVA17PshRcAQh3jmCW3XL1hbcsJaPVrA5eMkqGLwRti6i7YK7NHweKry",
  "key37": "32k9UwoHfoRd5WFeKEQgsmbE79oV8faRJRD61UivcgPLz7BszeszYeiVWdYmwAFhgqLSgJmkPqyLVkSD9t4h4gLJ",
  "key38": "FDEfgZZHuN58j6p8NnmoKs9q1ixvSTaPAZcaAYCBHoNQtfbRrGXLnCQxE6ETPYTzf8gsxpJtQ8cYj5L6tA33eKS",
  "key39": "4fJxW4Bucan5NMNjDZKeEefKVv5rzTBSB961z91C9fq4JURagVWenVDF2ebUVMbpWfqSyKcuMYBq13DDEU5c9mqQ",
  "key40": "4Qv9767Ce3xgApXX8NTKNQuWH9iYPdEsA7ifZo3Z8coztKUsTJLuMZ5kkAT7GC2jvCNpehe4C4EMFh2efHKz8H4E",
  "key41": "3YooTeMJhdWAWGEKgx3tLm5m8PxUrBYyjhtSNH1v2sPgDNG2iRGiFn52aN4nR9oBUruPNSAxu6eZmZKvCFNKfvww",
  "key42": "3pELYsYLqeoSdgT4FYhTsgAfpKAjHQbCUa7YWZQjK6LtPEf9jB1APDqsX98UZQaCKrDFdpy6k3EjDAsZvxj9gvev",
  "key43": "26RFfijSZfqWS1PtVQqzkxuB6gGdA2JEHzugVKbNrF9Ne6RmQffU2EkZCx5sfdPkcyy8u1KzmyZvbTpqYWgvGWfB",
  "key44": "2uxvFH59FhQVTQzgkM2eNV8PQKhFhB4yD1UBKCJJTubvidWLqSfQKZkw5mB6mdfCK8g6YwZZX5qgC5mHpX3dK7Jh",
  "key45": "2vqSPhVZnY4Q8GE47ji3cQNkobS14Z9bneWqcTNVBC1uMBgjMziKtJaBWwTHsnkZtqRfRZWhGD2N58DT9CiKK3co"
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
