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
    "3nwpfYj1sapxXZx7Yh8A2h4U8jPgV8NXJcXkZQEDk41RsmfEZAFm5BGSCv2Tr4rioWWxetUMwmNRwKmjkZjcLc6J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kfiD7m4eJ2RnAKY4tGaSQjgsb1VRP3YjXnTGrGJQ2wyyMqL7UabiGNUyE7X5SUB7EQURiktvg8RNH5UpPyHh568",
  "key1": "4g8Ax6g3oftbMmvKCAvTvuoUgAfk96fUP8PD3F4iY4fiafAZMCNp6UQZ2s2Q5MSxivLB8w5VXdikUgTAXCy4nYEQ",
  "key2": "4b2mcDEC99jrHzhDDKxnqxkzvarM6yGqrJBpvtGMK9rxufKvxVnap3ZDVgvbej8GCm1zBkvbxS6udJDxkjTFZoqS",
  "key3": "5irXjdFW2G17c7v75pi9XZyb4SvxYDmBvjVWCBoX7DxHyLd3Z85USXhonRD1stjtRTT4cpc2VmrRJsCfp5ar6TQw",
  "key4": "BgU9ZsXo44WH8j5FDztXcfyk3MecYQ4XvtRz6QCRqoSxB5nQiEBDhpxDFebqVPvRs8S94Nus3VUe44xco7VpXN3",
  "key5": "4VNDPEWe3URuPzUPAG5LSLE4SdmLkVUbuskD1ZjvNejuzZAuaHCVVLGzYwChWcMfGkECQx8Gh5sdEF6rntwsc57U",
  "key6": "x3aCQNjLL6i3tBSWqmmEndsJNAzhYEoeL4JdsfEHFeUVtLrceVESCSEcvyfTzAvzFXA9WDmKsYgk4de4qmdsJHg",
  "key7": "5C4kSJiyZxrRnt4tNn4mc6GE6yjofe1q4gMe5HDHY9C6nATvw5QFGLRfMUAmEAM9dBP5VxFPezcjzLZUdYc4sFBr",
  "key8": "3s6chvrLYvp3gtcqsLrwfE1GWKf7XeBAfKYLXgYzSNjYrH1LH5Kyux3aNDVF2yTptobddBSzywKAbyKmyh4CkiwU",
  "key9": "2G1XCG6S2DG46ajyJyao8Y2KQxDa2c1GUg1xM261PePx3KE6phQ4LrZuJJmRQQojyMcaTfAifqJEp2pNnnbV2DWA",
  "key10": "raPHaG4ziBKw4bDMHnHvF1VsYYnxADEARYeXPmC9H4syavrjnbrZEe2bEY7Aoq7KL85Uh4hAZjj8CHhbqwjo5md",
  "key11": "4XKPnQFf8fMjWZY5NRLtsBhuM9F3yXCaypmY8XdQWByAmWQLNFPddmFUYsJkgoBUKp2QW7XKCczuPnEMFj8WFjFG",
  "key12": "4gRwp4JcwBLDkFcXighH8oVjWKz7W9Ns5CefjFKfwcaKzJZd9qarmCQwszdB8jBAspxtMFcXbLNRRLc5cnJZEYD",
  "key13": "3eAuXygcWjoafjHG1JDUtP1z3CUWZMSAXZuKB2aTHGKJzQ1s2KVuomJj5LbRZx274CMWdXupdf1MUvj7YMRmN8Qc",
  "key14": "4bCQFdR59PWyWASvMzqwoJHwe8R56guB7pXLYLZXT3ov7gLnsmgmTF3c3fPg2sWxMWjdQbNfvDG8dWzqhgrbhBAX",
  "key15": "SVQTWLJZRmoKKcrgcL8DRdCeu71o6QLkTb8J5WVbfUTh7JVcUb6cSVLSCrP4mGDnrcd1Zh9R7pYX72eoLA7ocSV",
  "key16": "5TVoqpPGUWLLxMSthNDtFS3GFGyM6gdthkrCHs1JRtuvzf1Vjgq62SzzdqGvatdrkZHeikZj1E2d2U9K7Z9HbfZn",
  "key17": "4v3ZLuwLiB74esm9LCGkiVTjrkmwAsSMs4wF73L3fe6L7jwgVCn558WnNwFeCVTLhSgSWpLT4UytbdeJEye69fnP",
  "key18": "uQ7LQ3civqSvuMR3Ykzy9WjsnUGzWvDuD79jfXnTjunpsjBWfiorZytqoifqD12KRfCDmb6w7uajg6LA9uNZEfD",
  "key19": "64SyeQ3HSQ4khH28XvVepf922rjWbCV81zaTq8ZNzm3iTcKZhUXX22qHsBNBX42sYVbvcGkNEuws8ABoJBMfY1bA",
  "key20": "1BxhkSfbJhpF6HWk75a5uaiwwyQvSWrwH8kLTX8oPfuygkrMsCUodogJaDDiSPvtAHHe4cPd1Kz4q3ZYpP8bgqj",
  "key21": "39hD3A28U9EN66X461hvsC7c7NhkBoZZu5563cU2nWt4afCsnG78jR5WqtvVAe2se8UXSrBakdgmNDMfXU9GrRiU",
  "key22": "2SgNMzySC4pct1nLUmansZHs81eZz3J6j7SyzJ5zZonScQsQcvK996Nm87Lbrjf5LqR5ttfNvtoYNBa55CQPqLsx",
  "key23": "2vWvu1ZJZ3wvNVnAiheJyWkDm9MQd2d4gDUEXEvN7mXhGarqv4MPfNmbnKeAj3uhxbX5rfZhCRVXcLj6m68hu1cD",
  "key24": "36dntY9mCNNYk9dv1vsbAY6KgMHDuqco8yg2agc9VqsPWHKJ3T25aHc2MghZdxi2AuLLsnnwTqBmrU8RueQboguu",
  "key25": "4Z1AKydkFXyH5TZ2Nz7ZL8nBKuaQzUGpTq3bDWsS7sk54ygfrnwcjGidQrRxhGixRvEdx6gmcWScRZ9SEqhxL7xM",
  "key26": "4ES36ymEhXTc2sXyLCSJwoCiaw5wpzz7PJgNr7a5uVspPdbnvhp8F2B7manoJtomsB3XwctgPRvFYGvSCPsbvAvy",
  "key27": "2cn5KyVanCKysgzvJcPzUPHyz2na2v3NJNBfL1VoCQkvfoPrt8J5DTatVVqFuoHXqWvqA5Wi2cTmgm6qRJ2muZAF",
  "key28": "5moNiNPR2C7ffhg6hrjyb1fhcgnUw1CLJsyjWA8ZtcfrsMBnwQCeHcMmzjURPVpuuF82czAtLDKXQHXmXSGiSwzC",
  "key29": "33F7zirVM6xtTUkbc6UPRPZ8JDXnrMMmbXvyVcU5rvb5gfq7H1FUM6QWXLA53Lx8Tmw23LZFYTz1ckuPH15T3BS8"
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
