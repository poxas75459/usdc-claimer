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
    "44FgrfT7B9dDSdbmy3AZft5SFgJwAJDQ3KPEqGKhCmsGGXksGjniXeYfzKhAfrzePhRpa1ibeWWjHkidKVxpaQcd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7iR3mAw2sffYZj21qrJJF8xKUoxurB2NwGa4E7bJMqDtaoMMBNRbAzyt7JsNeQ5woscjnM5TN8AzCCj6ofi28hv",
  "key1": "5HSE5G2CsYmtHZbgYu1kabzC4koChaSaSDZmdSggZ6azfbDs6vrnrD1DsHcQqvQPrZgMKZp2YmDEYiHxuLM4JMzG",
  "key2": "39rrvC9rTM5jr3WRqjeFyZea4tcKBQXxeZa7qJDnQ2icWxqRgEyRGKg7Kh8oaE5Df1G5HceZgu1SqKuvpLhvqzDZ",
  "key3": "4Zpz7LbRH8yBavjmYEJpmwvnqJr83odKJpRwiPzZ3AnZ2qsB3EUBAKSRyuY2R8VVV4igK2xQupENLsWkyA19W9Y6",
  "key4": "4hs6wQbgATQZdcPvc1xPzrzB5hQTK1V2bAGgwcWemtUaXwPVBZktkntkVi82xTSCtJPAA8SotFP1juc7nDvjpzLA",
  "key5": "2jabScMBLCnpBprYnUiTNA7eH33YVKSBsNqiRSTKQ9mYprEAzxmYJN6WLxp1SdycmNJRsz4TXZpCn3snVabutyR5",
  "key6": "5S2cPzhw8FrwhyDZ85UwaP32irecvMoPrqYyZznCTgGbZEbh3MNGntQfRJ37GBNHPJiQZ1ZY5o73y3bvEg4AjAqq",
  "key7": "Tf7Mfrw7FQDCXQMLJmCPkvTfhiMcNBNthvHWBuQ5N4cpjByS9X58WsbJeqFNRjvxWLpzLff7dP8rPWwfs336vPR",
  "key8": "5qEB1TJDAxp7niEf5Y12AA5P9diTgRzTBQXJEVutWqkS3RLshaNkiVZZ37Y3DWefC7vMGcb7gouJWwidYTpLfyZe",
  "key9": "5ky3LcP5zf8avtzwqzgDEE5vkeVTXjLzzigZQgBYS7AZCWwbx2h14v19SQRJ2aaM2NWHWgSNiGC4hAypQ8EYgWVp",
  "key10": "4DxGwQxn4XfC2d2dozdUFb64Q7BCutixqtGUjgCKwps1WmxdWYQkzgF2Z3oFVrXGih9XK9i4uXVhdsA21FM7zWAk",
  "key11": "5Hv9ozLNyKxrDhke7TKZPDAdaARuCNzZrHtRfourpytCyNh4o5WfrXZTdnHfgiZ8LcheaH49Tkneq93c3pK8tGfu",
  "key12": "5dug4iLS574LR99kgHs3Usyo1TphfiRq6Htj7HdXGSvPe2kuahoWZMgunbqTizJNtfUQfdEAYsU7Z4y7q6Z7G5oE",
  "key13": "4wVqYEw36BVWyv81zBo3Hun6ka4962XgKNXUhApkS3t5SPNZk33u9Xxz5fBv5m81XPTW5vAcC6dTrnsFGhigRybQ",
  "key14": "5MuukreafEjTUKqhyA8hyDu8s6HWzb2YpGLWXP5TYokXro7Jp8yrvpmLjDzxC9bg4WSfCwXDK1pWkzLaN4EfZ9TK",
  "key15": "5v2v8zDN1587xup1rpt61KKR24zsxQ7PzEiXUxXwQVZQoURR21ZHX9mZuug2h9CpJmq1uVBw15ntvy6sGJGVioDn",
  "key16": "4vunhtuQ2MygFGMk9Ly1YjTqvHS1xhV4WMWz6hyB5Kjy7ncsxSSdYWHSHu8L6FuwroEkQ5BzjXqgEKuQdmRZq9jb",
  "key17": "5AFHgpC1XJ3KyiyL7pY8rQohCjL1NGJ6dKuDFK7uGxTx6qqvvgwuJPktcJS5aCuJ9x96MnG4Fkti4J1JYsk5d2CH",
  "key18": "3xgBpBoWGbyGiVcYf6xUbMJtNDRvbJZAHKoBakMPuhEC3QRdxJ69VigXRsdkSuP4N2xEXM67PK1KEBYypomoCFvN",
  "key19": "2XoUNFNAkJqNeWLrxTCgW6CtwPJDFevLMwsuhtrXWLeCma5e2F3JV7pNCSF4ycQVySB2ADjwu2ktU9mqqsgYMv2V",
  "key20": "3QDYSaLZyZaNHxQPBEq5hsqCcZ26AAXm6qGgTuWozek6YcAZu4rPYiX2qcp9ArZQsS4oMcCupG66ctoWyKSEajjC",
  "key21": "sShu8GpFcVeLbuLw18qMKvUpwMt9vHS3XGbgo7im6kbrKAGbq2dbQGC9chGvDz4HSw1dcbijSzA1vA4npymBqQv",
  "key22": "8pQRfX3qBSuanthCpd1HGMB9yaVUPbx1ffzru9Kwt18PVfMBdGkizgLJTs49uCh5rBZysqQuATfimEZCmPCh4Xo",
  "key23": "326F9XAVEjtc36MykZJWmPuubvGeooYh3JyAmFK2L4bWvYp7eg1zVrQSQHhsQcRmVm2sQibPTrtDp6RpVfQY7j7f",
  "key24": "5iNCg4eqfBLSc657HWpNe3NhRCoG8FuqEUF2znxEUQ5x2GFRLuWo7pwpPcg99z5itSpMzE8yLinSBTkugrTqAE51",
  "key25": "3gMKWh3THkCERFKKSLWJ9AAkUWbaoYDB8aAU62XMNLwirJT84dHyAqDR9REZWE5CKZpoLeJxJXhC8P7FBRqwvAUE",
  "key26": "5mzgVvqzS5hALybsiNrKmrwbWbqP8by5zZ5g1X3eN4MeYmBU3Lt7Xcq1vNiGWqeyQ6XNWyrxX8zPSbpNVPTD744A",
  "key27": "BqmpSSUVdC2a51e7BbcuZGPhUxW9vm5CHoJ7fxoCSZnQaHCKEAJ92ULgVpAXUCnKL4deoHMG2FChitrHsm6Bqij",
  "key28": "3Z2UDGWr5YZ43hEijwchGLMf89ia6BzX7AQ9frXu8SWcKTaQqgrCXqADHFbT1VwsGbRBRhHiiiwBmSubLyvqMZng",
  "key29": "4eUCU8EYaAKFKBCCyp4er1YgvvZ2LL3g84Hme5qfu3UZtfkm9B56CrV5Zjci5zMmNEtMJErqKLmGMLbtLMdEkfpF",
  "key30": "52Qu6RwE3XpQpzZUebp9orMrrfWKAMMG4SThibNybypUREXqwvcQX9kLxjcrNG9UEcMrCdggpnARthcfwpcL2N7f"
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
