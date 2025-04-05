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
    "4qxZATAWEbfEBjkfXdD78saHyxuNigWYkm5HHdwCVE5mWovXF3VUKPzV58LZvpx1ivpwciLr4MpKtW6cPysgMEfn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36Xga63Mx8J5fvTp2Ff32C9s1nqDzHVeEyThYbA1RUqWLkS1ygjB7QAZWTZSFL4R6Dk7VVRbRv7sGMw23RKUMrx1",
  "key1": "3W1srhNmD4vN2QYBBFNZqpkr42n4rAcyEZ9zrB9wqLRydAvRMFCV7rYbiREww5wPYquonugSe6xCRWfy2wYzwKmm",
  "key2": "Ckz1ubuqt2AAksDJggpq5AqM97tCD3EvTKHVuB4bJ7Bi97htXLy1woun8c95i2tsusZtkqHQ5jD9ob8EiZedSNd",
  "key3": "YPgF7sr3p7rht9cHQugEaaCKgUbTCdbJ7YF4UJF6bZsKtk7UZP8nmBCFucStcCeMQ1iVhJkF4zAzhTmPi5BWn3p",
  "key4": "4yJTL1R1jtpP6kTeAuKcCYE6rDYVuBCiBZBfNvSNRE4mRu1eYJcXRS7ECqmUCekzPrnKJqiHtRUn31r32SM447zf",
  "key5": "4J8A7HwiwujDhSDnYxQzNRje2osLZz9A584EbuHvgTRqmT1uQuFxHSzchiYS6m4mASs37vCsTEEWFD3KMpNmTfKW",
  "key6": "5wa5oRQrh8SXWa7ERRjbsKBvmKynM58mJR9tVNY7gVewX6GceakZADb5GXkjyQnuEJn8vBK3qu2Mc75kHy8Hj3i3",
  "key7": "5SpALM3jUEgeddp7h3J9TrZ9kKYEspWrMbxairoMZ7EyG2FV8rM8e61MPB1beouAfwDGvv8ctCoNcC9Ues7Mxk7k",
  "key8": "42CPUNTkXTCWCjiTZhRHdbVMzMLNLEc68rtuZQbEAormDmnBRfGRKXDnqGRoaJJ72oPfKXd8kS1cQaSAzZP2rAZb",
  "key9": "4VypvETwvKjNfZ7F26cL3PCcecnEz5pJdSRZoKrvERYujUKyospJ3qqdcbhNN9ru6ikxwdsvbQ7vwcuhjTH1gRik",
  "key10": "24W96tU97R6ByJ7DW8VGNfjyoGW4LgHvnQxWB9f2KpXoXuRR7PUsv66fLstqnwyoJtQPCQ13GHxFpyiTws86pZDt",
  "key11": "2jv8DEazr9Fg8gYvf1hr9TU9r2x4Qs8J45f14HmuLw98hm7hiChkBF3ZpjcCFipyCGB77TAfmFKMxPBWrpzN4VTb",
  "key12": "64pLE48i7gyPYaYHbjcWFSmiKTUVU3deraJaotjf8QDjrWLnipYVYb8DRypCkVRfHvjwKnJm3wCcp1dacxp4iVyp",
  "key13": "3Coez6jeUKEB6U1H4eRxc8G8f9h4QqAiv5xysWgR7v7YNmLeFvWtxCKJqCZ3Nwt3XT7UTSsoVvHzsEDSCZhQQoV6",
  "key14": "49S2Z43DRPnSHVbeEMjCG3DZNmva9k6KyhRy6wQ3HhhfNuBahxrKA3HDEZ5Fithpz3e7AKRtepZWufhD3dbqRE3P",
  "key15": "4r9Rf8KshsDVNtm3uPRdmUenC5twh7WgeW5fJSw7WjjWtuVRq7M1yzeXrAR4j9Z8RSRFwsV9Pp8AfxRsm7RoPTBi",
  "key16": "oqMbt95UnmKJdATdVUC8Sv52ggHTFYFZLbHYqC9Y27GLat2XcpCMPdWuvR2xVLr2WqwQwCfaJ7zg9n2zx2euvxF",
  "key17": "5BneCr9fauqgNcziJmAiXtAeEasziCQGSDrzqiDr6VkSTCoyRbWgbmZGR9eUqyEFaPjNqVer46s8bCeTMAoUcsgy",
  "key18": "4yPEWcczGwtHcC7Z68jqSmzNv8bF65sjdjYDxt2v21awCVKwLgQLfDUNFjn8jtC6r6yo2QvA3dJPZRzRHAb8zAmk",
  "key19": "4UgBq7w297yJVZnYGzvvKijvGtEpxysED2U5R2Uhyh9C9HSaK7KPbN2ZLLyKd11yhUaAw1fL5nce7bRrXv1ttAys",
  "key20": "4RgVdSuxbTUyU9p2KgbD23TLGHB53CENwrgRonntJ8PYPj12myLMRx4VgdL5N99smmzteCZ9o8k7R22od4yKRBpq",
  "key21": "3wieaPX3HYAJ5WADZv59ok4Dw2He8GqfmXyorRcZJcx3d8L4kviLoqvUgeu6JuC5DwAab7U9bew3CXH1bCXan4UY",
  "key22": "2FdzRe5wuF7yFqr4HzJHk6AtgkgBaBfnGqmrrjRzTYHC9jUAj8PEN9JSGHkeZEjtvMVqRMk7Ka5YRrFBXgHBQxJG",
  "key23": "CTmReEn2gvuD1fx6MTjVuWKr8wU2SpPgvyVofquv3rjFNVsSQTvzzo7zEPrVTUtAjDoLFr9tnfiaHkZQGDaeUyR",
  "key24": "3RDYnxRw2BBPwRXFVpZbVHRBMB4ipRjzihxYHBkMw3PxSmuyNqz19HXSgvPRXPTvfidivgjfZ3vQQc2xBTk5Zeyx",
  "key25": "5NtcKuztLk2QPFgrdsN8V2qihLZ9CT3vtBZ66htnNDAUbXr4Y47k78TBVt8BH12NMewDEmohVUy8TPYbrcfYWJJT",
  "key26": "4j8HwUpzmEWzXTNrhfDB2RmL3yZLdBu4SJrpjB4vidZRSCSg9CnHJZuMpGZgJzn7bfAaadB7QYf8CTLbeqEo4F7D",
  "key27": "31JbopiAKZEk8D4yzAQdeTCmfehZSijAdPjvygEQuXQ5Mk6em6Vib95cyZiyzUv33cEk7P1yeUkeMBfivkpqnci",
  "key28": "xcuMnF8xSbh9A5d6wCH3rsaQWEjR3wqYfxYyrBPFTXiPJWSiQRHbJ7ZHJ35SwZbRoNLxoC5C7aNaoGB9SXaW2Yj",
  "key29": "4jKy9m7DFkk8v6GrNbDxgVJaqTDejPuFAuJCyf35AH8XBByH3CEmHaZHX2ayMoFhXnC42UnyJguPuQzs6Lh9EJ3t",
  "key30": "3VoQQxERjGv4h8M4CWzTsF7pU8H8TUycMdC3dWBweLWsj4jPgGDHRcr2RGmkzHxTEFg2We5bbXJPErCpfrpmqFFU",
  "key31": "EkDBLwc2ALKwtE1o8VU1chjfthQPzneFp4BeG61WuuFKyc9WnifeMbGzoSdkhaD7TPDsDYbyya7BE3aBXV6thZj",
  "key32": "41ToYbSHgFEcqTddPR3P6sLYwedQqQQw2mKf2VZRXiQEeVD8RNfgtJG7q7fJ7mbPqedNo9TjZbScSHZBesQwCY98",
  "key33": "3cakiKuGY27dEyCW1yoMGzykj8jwCToGDsoMURqKWz1XAMxGxiMUgxa1CJkvPJ5d4UHqz3cDXssiUnWaXtC5dG5W",
  "key34": "urPFvM18ymjSaFxWsEuarBCpJGPoDzsuPddGm1XbeWsFFBbVxxHAdrryJgYuRKi84f8FiMvobjq8djMKbp7YCGY",
  "key35": "5PeCEcLKxCyQCQxEmLjgEv3by8aE8C1ccQ7TH3SR4evaVHeawxrzYDb6GLUQTMmBNsXJRFUBiJBy5AofCzDThTTc",
  "key36": "24rb5pQ2nmrxVtQGcVcLTzr9GtxiLHN9WEkBjYgkUbzzgqEaXheFDUBsPG5fpNMbGzCK4NVJNbMYnbjb5WwdAwCk",
  "key37": "3Py2VGHcWrCoZFXpFam15s8Li138mviMgwSdfvAQgn3vx5BrNyA1yC17ZxMiSSy6RuZaPwJDGDp39zZ9RsndDfKR",
  "key38": "5t98Pm7TFbTrQCBb2eAUtQDuTVZ4TWCriQirAjEh77Xe6m2Yz2RwGNjtoeSu4mpdsxTATWMP5H4LHrrQWoyPzNye",
  "key39": "3L9zZ3VD9y9Fr6o4XeRBtckwRXCZ4ewfVpHS45kod6c9mryDJPCcWykcZvABYbboprjcFPSKexUZHkp3kJ4X5R2R",
  "key40": "2oCJNPRNujDcWedALFaMNUUb5J2jTqL66KEnAXXsJdvj7j92JkSERizZXfKbUiNXESwPNo16QBPVuaD7KdrrwiqG"
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
