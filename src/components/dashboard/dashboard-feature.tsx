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
    "3qf9kKLxidNrC3AzpNxoFcUJMni5UURPP9da1wDsn69LNqfZnLCBsq74D7S72qK4rbG89WxJhmWgv48fFvcEQzMX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tgouKyAerQTfJQxmiMi6x2gUGepqLQF9jPguYHcCtBY6BVvrK247MpexBg2wAW9tQqiiLrf5HxLuf9aipp79Eaw",
  "key1": "3T4cyjXhcCLvLjGs9VzNwg4vPYpxJexLsY2NQZXhnBekKBgczAZbxRhXNDwoFi5Kx8bPrcg2h8PqdcsnwQBt7hyC",
  "key2": "5KHrskbFopuYawfSM46hJSFkmFtd6A5PWbMTKNdAo4jWiCWJdv56BHWeRM1L6D8h53heTbZAYhN62Z3Ci27fHM7Z",
  "key3": "3nnzS65EefFktW6h6BXHM9esVor1v15yzopTYRR8qHvFQghbkpmaSYL8VAFBLtMsT9ZwqK9udekRVMCr64F14Xwu",
  "key4": "5anVM9nmPjCpomwKNNmk3BEwgmgKKEe2PsHqf8CWwAePBdE1Li4w8t8uMGnXsWX6DwiJGHFmGWuScJW9zNqdSHZm",
  "key5": "5fTbSnqoPnDJbStz8Ew9jBBuR3xvZaKyabQ1SHo23AKWdU1bnRvunSRNpBFpzUx4DCJdkcEPYQwjk8RmwUeWvVXe",
  "key6": "2uAbCRKSAxyy5gvPJKmWxh6FXbqrXz4qxZs291KJcRZJS619i9JE14nHuB5MB7YiKnWP4BSWTEZxMcukQjJvd5Up",
  "key7": "5zJvzhSNbD6qF36e26qJkjTVCeX9mnVogcBKnWoouvDBTa4VXJ3P4jUVNr7YSXv7At7JhA5DeQjuZNhS5a7paLdP",
  "key8": "N65uyM6h2znJASwhLuh1Vx3etDXkhrf49jD2DBFG1qYLWJ68p5ykkWnBuSfiAwwu6vkrs58Z8mxvFhZXKm9mwNc",
  "key9": "3c4VzJDLjbBJrCUvjkt8tPaXnSkr9tA7MmfW3teEdx3pByiTn2bNqvFZe7824i32t1XsbW3E9sm7aFq27Zy36ePi",
  "key10": "5GCZtayeLnVYP1Baxw7YGqsAasC4RD6D4YiJbuFbCZVjeD7tarDseS1eBdTqv1fXAPC8rqpkeohAsKYZznfqz1qj",
  "key11": "2GTx8pbX6hXvVyz8AUFB42DQ6YrgyfkWCvyFs2YSKjdTwDwr9CgimCxFjMNRZfDkJ9TBeWHem6JNsokAdZfPFfGk",
  "key12": "5RDLmxUkFjkaVdFRZPs4LnpF7UPXmHPTHGwMkcSufGn8FrLisJABAvD91M2WfQCK2CdvqJ5F9mUcxiFCPRC2v8TP",
  "key13": "23HQwGoZwxhNwKNtui7C5uAR3Ys9s2HTy1ZFquBiu2JL2DSBH9KUVGj8obLJ2zYen6pkkXkooU5N5SDdMW2how4k",
  "key14": "3QWyjsvCCeZNBdtdH9BimKuT1zfKoKNPGvRgsP5hTaodtXkUZSqA7trFs2dVrvKiGLVmoRGSWwzZjaUbJpqveqJG",
  "key15": "3Qcq84pBBHUm1t4v3P4Ez1T7LSA9fvJtLkGTNC1FAPCWwzpidn4fPoDUMbnGaD2TzFBqoSZKg9aBs3sc2YNpZs4c",
  "key16": "5yGqWmn7BL8wiDVdijYthdGJkCqr7F1bZ357PXaScjE5yxMYRmohSJyeK7o2yx1i4CBkhxcpi3kNF43XUF5g2tGc",
  "key17": "5XJr7nPcJ6v7S6WMWbkXD7Sa7x4wT9rjjWzfNKQhwP2F6Lz4xshpjEzPrFVPH1C4a6xF2oMiYxcA9Ae56fxw3THq",
  "key18": "3npCRPxaHqtZQDrwqqiwodQiKo6yrLS5EgWEtfZi6XfMgp1e2BNsmmgiCqbbsnNsErPsxA6cANJa2bNe4YjieFSW",
  "key19": "2Cf3skSdp1FS1c5McuSV4yjNrhAbBRhJTAE4EFNXg5k8kmjbYH9U31tDpo1MGTKi1pAr7AevkdvTLTN31rPyKnZ2",
  "key20": "2ugv56EMfXz7gWDFeCi6rS9c1DLNtjX6EW24KZ1tMAv1cS4Zi7vUgdfhZgTtW5Em2h8f1AXc8tGVRoACxLba4npE",
  "key21": "2gKw3L5c9vWwWRLS17kgaiyuGcdgjWrAENCjMfe9skDqW4LQt9UamJ7KaNVAHUxC9yDKxUPAHhDa8FzusKDdod8Q",
  "key22": "43X8SLK5LJsqGBsVAaGXWTSGbh9WFE5txPeD7CyT3Dw8tyMvamuT2fYQ6U2BR1kQKyp1S1sSdYXT4oKbbbmih3eb",
  "key23": "2sq57o4iHT3HbsmwCNLZW5auTnob1temJdeVib8feaJjkzfzyvhDu8Vsx2BjwfGqfm1BiBfbZp3QsMn5s3XLtVkj",
  "key24": "5bn6JDVpURfLhkakuDjfFxxdkNXZfSSiQA5go5wRUa3ewR2wZNouVUMX8eBpxoSjTRr25ijhot4ovtDZfnpZVbjo",
  "key25": "tVNUQE4R3nHmYpyk68LEoonVbY9NDfU3LxoKQce9JGxoCg8pTgNqe5X855ASAdw5sDQxUsATpL8GY1ZPx3b75ZU",
  "key26": "5ydbLRrjEWKtXLWiGqBpxKfYu9vPmcRVkogC9YiLMMyWXnCbeBsAdvkcN37HCu5adpQdqKvtqqTXsdMfwvdCtbb6",
  "key27": "5GRqJsx9sSoBQNC9v2NFfc8WaCmaNmj52qE8mT4EonpAnjVPxkHjXo3ZvrgZXBL41ho7bWjhPTG3LBgRwaqph9sV",
  "key28": "5sz3jZfbQwoQMe56k4jwsYkb8nbM1uenSW8CPV5ZNq92s8KzPHrZm2huS8JXheevcqWmyxDFbXERLypJdj9qD2Hq",
  "key29": "4LZprBGTi4zpsLM6CeZuA1TD8mTEGGD9h1ZFijYQqPPzqT1Z8nfrujyeE5Y67wR6MSUXmTjWT654mZexLNY9xWJK",
  "key30": "yVtQmc65x13hqWSozaEKiUoawG31cYooGcDMVJhdhviXSTnyNDL8Hk6NwX6s7btH8ExNnkvTHhVswdH9omLFnMv",
  "key31": "2TdKKw5TVqnU2PhVnicxWXpPoUeNaEDqtM2TCpDSJ3XM3pLiX7qWmFTGhARsHXXWt9tRHZhNaVpazctehLph491D",
  "key32": "4SceFBBRtL1pSCZRigZowCf3r9L6NyV9UoFS2DoLSxUnx8ZUYxB8YP1bzNaEQgrZsmDTEAx4s8ZYGZZyRYsmqpTc",
  "key33": "3E8EpmJKvTKeLUoaNAfy3BDKeGi3ePoANDUK7QZVsTdS86jZ8ghMCMY8fnM7YGPuocSLYXkGFTDpTp4ZEH16AUGJ",
  "key34": "4j1QbnHRkZfBGzjsW9M2qeumrgcJ2SmVyf2Qiybp7UBf8cBuQYECwkg6koUFTzebj4BDKSqRtN1xgGbuZ83EJoEC",
  "key35": "3NBtmbmxAAsnUu8MPT2i1ET8xoAUtzDJkXKBkbytKX1gXd5WZ8sUHbqscvH3JXGjJJR9QGjY4Hr5FBDNkdXthwTR",
  "key36": "5zuTuH6FSvzspjWvLtUpx3EnqzkoMfC4XsjbfkvSQXa6pNhdYBF5rLMb51J853QVx9tLdC7rLpjwn8shGiTNGAJp",
  "key37": "5NVzwiRJxhozFRAk1VSPSJbn9raBpo2z3wjrvHeK6Gkr1my4KTFHiFvsXWQiNGsG117tN54kYnTv6X8WYdq6sGjj",
  "key38": "5Qz1FbdjkY3DkWLA5YQ7gBH8NgfT6Qws8z3yW43sTLVkCrf6DaWs9H45iDYUmdnQ5JifrY7HRhqaEJn7rv7YoPRL",
  "key39": "4aRZC8SBDuJ33d3KC7Drq9kSy7tR1euwsBTTdJw3Q3nBmabwuq7ZbwzCYKAKXfPhrZKZcqwqep2hAgpoxF8vWNaQ"
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
