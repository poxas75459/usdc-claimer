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
    "2D55gntnyGa3LBHfYsujEzmmjrGcM4WcKei8NNpE5N85p97ZDSSzhGbnLLEfTnXCKDwHaJTweikR3hEkEata2vP4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZtB8v1tUAcipcNssQjVqLpmLLLhSpikV7Pnsv1Bua97ZQkwkFqrhCGXBWLasUtYJWrZPRyfszRMjzppQtTqxCjS",
  "key1": "45G9K4vvJ7sNEmQDo3J7kMU99qV1WkQ3nt6CeHsYT3dHBAUgEjAT23zBFFLGBKFvvWCk7Yynd91xRY4WWMsm4KxY",
  "key2": "3CPJJbD6K6WahLsfxmmu1JtU6nhFTdknVvYM1baLSiqqyDetZh8yD77BTw2jcRctWcwEwnKNMUZdDBj6KgXWpP6Q",
  "key3": "4iUm7FTbS5W77HzZu8DxsrvdribGeN6pGrhoQQ2DoAEpi5TsDRQuyrCyou3GfJ765SV7Sx1cwypTcLhqVxW7Fi5F",
  "key4": "5AUM1YxVkUsc8wUQ3Xmk7YDjhwWFL26mig138gjG5LYdcno8qVMKvCxWXjLqMnhSxqndiKSozYkc83p6hMkxLQ6U",
  "key5": "5vBFCbdfoy36hVnYfi8Nv4mr35PhJt4yzYEqPsck8VBsm2YzVJF3pFXFP4kuQDX9iPQNJ4uFESWV89WwX5SkghiR",
  "key6": "3umwc3yGmRLRvhHRMXLxkdvFZgk6pdxGzBQbReAcLZyKvyXqxbz8rqJ2wHV9KH9oMFPZKjg1yUKvP6SAZXrj134d",
  "key7": "5yz53QzLscQ94ZywYFndx9fFRZRmgeS99mdrV15vUgSUPrTY5vs7scEi1PPEJ4NkJ1Z4B2hk6FVkWLqDqCE5Lybh",
  "key8": "4RSQRPiwSQtPiANYW8qjZLBwX1HYCZGTscUYdaxpykozkXKtacHMLwMmVo8WHSEhbseU5cWvVPEQNBch5KZgtcjB",
  "key9": "3UyKUteNeKx5Uw17CPckWsmJV2U5xipNmLhN7eN8iTSoPfGmta4vaKjwUFCEU8snpomR5TEPCwFPA7ih54B55y3w",
  "key10": "3ZpxvY4P8unuddNgGvnxEzRr5TmbAbT8g7oTDArD93UoUXEaMjeQcdY2KEumSdSTjdPDFunTmaPynfXy4hHkrvFq",
  "key11": "U3AAtASQPjqSumNpf21J1E7aRm16mc9Twg5QcuoorE1DRJG4CDBXi7pH3pQjAuJ33NNEFn6jmyYqUCNi9MX2Uqk",
  "key12": "49uZgfknSX1oethy6CqPymT2ma5iCjiadaWmmTWQWcmwdQUgf6rUeoMeubQfsLCxbK3vmS8KnyWYxP95FSjqgT5c",
  "key13": "4XAjpwMVnv4oXJCmmKV1RVG6KGvnRbaQbmrUpQH22HuEWhxWrBuwx5yrdXK7mrzQ33hDSj3RBcG6Axz7xHSmWyEa",
  "key14": "52kST9LQuYXw3uUkr1RnZ3LiQWQHoZPhyZwucaBFtz3Ase2iYo3iRc2oXrkf7DHASKFZ9v1YKjh8xhFb5DxK9rGR",
  "key15": "ztfmCjjF5BGx8M3KNLHYRQY9irhDjf6aqCKiPdG8GoJLcd4akEsnYCC5z5pK1wfLki4Frk87ooT1poEDu7yQsef",
  "key16": "29s48Fe6qush56JkXzAEKLvBdCDN9WiCNc5cw4784qStkJMEg78AGrdgMpXE9ATx3hBCDDnbRNqYtSFAUk2Dja4i",
  "key17": "8UiiFkde19XRQSQHbKPUKYxAGbaoL5dJf3RJrH3yWedAKo2retQnFNkESkKjohANmUpfoRzR8QhMkToi6Uxa26f",
  "key18": "23oDYArBnKMB41XdBBKsqKweq4dZF94s8s9umBAyMG3APfvzKvimfSuMqTiuNLNrXb1EeJtm9gJQrcsavvw8VkRs",
  "key19": "3sPAsGUsjz6QDGVy8gPsvYGEBG3DfgUYtjVB9dowTdHnbPdsHy2fsfLPQe6goLghobLmvioiNXjv7t32sFxsibrz",
  "key20": "3Te5twzvsiKeY6zJxLB6L3RbhQECG3S7auB6FB1RPTsgMqPHHP6hBFfaLRx3seVkXNDtN1NdFeZwkfZaqktTcyun",
  "key21": "41UtnkzMjzuRc6Xuivmwa1kjXqBJideYU6qzNrHp458dLQwNKERBfdKgQpi7AyCnYkgCzY789oGTyFMgZhpPpH2o",
  "key22": "sEXm2W6GRFnPToqdwfvfo3r9tTDxBHx4UyGH8tbzWaJzo32KPC26sPwAzaV3f7TTvgdq5UXkpVpYEmTmDmbrEeD",
  "key23": "2zSzovE1AEZFgeFzyBmQp7qw6LjfuH3JsE1VRfw1zX5YWXKwRjY4GEpsnuZZkGnE71bSUkodYJxLMqQqDxkmbGZL",
  "key24": "3cvS6KTjHSmwYbFvoazodGrWfrWaGi3jnGNqTK5XeBcXWpZaZcNuUdtJmu5vLkah6LCYgQuurKq6x4A6RSBvST3p",
  "key25": "3hLT7E4eCnjycBkdeNhXUw6SuTMskcjoWAeHg8P3vsoLoN5CAJZnv6PeDsWjdQt3FbBRx1NZPBqCrB6afd7VFhat",
  "key26": "5WViuU5BVmdQ4XCKveRZpk4FVpavFgP8c9H7CCfDVHEcs97xUP26nGhvKVnqHJCfRRiaedPTxswwkg1CGQ763X5o",
  "key27": "7aAtpkNR2R45AjHgkjk12ejZskzawxss3VGGdnci1YEmWPhqALWSk7ozRdQzXwPaEP42XJ12oLVGTETWnkN2MtH",
  "key28": "4Uex9KWQff6bFeXEuFLjZc7xhvjA3DrNWR5iomgRdVAViThzWbVo6YmL86qE9tRqHZYrEQiDdgMg2Mop8u1L1pDj",
  "key29": "tAzP2rSBTLj1HTA2JgobgJKwEMXnvAGhJ7hExus9BbSbFNqGmHbhMXaXBjRVkAQwdT4EmYtdGw1M9ct7oRnQ36D",
  "key30": "396ujrXZhoeAQST468Hric8da2PsiGg3BvzKiaNxmPBukMztQTgE1YiApCHja7neJ3rDviYvgUs8Fh3jdpVXbEEB",
  "key31": "2Ziq29z4A1aaEWHiNM2UxWo1B1r3PueGESx52jZ5akCAejGsprSTUwFhynsxWiscDTfcfGcuKjgGvDgWi6eKL9fs",
  "key32": "4xr3tJf6kuWE37Gxca9j2pesJyNLPVxKCBdf48fKc26oqqWgJXEd4Va6AcCQ5LU9FgPcpej7bzfQkSuhNJK9R2P9",
  "key33": "EKZAFTa4cM8rDqkmqoPVddjzmBXdMk5fV7paymdFrEoJk2S6DApCbXKFM5qmypxcQFmfpcEG5kmcwL2o7BqXKvc",
  "key34": "5fVvwYiFbmnpY9T1RB6w1qnMTcqh3exyqAGsZMFiZpzEgzuu4orCMHoWFZHmf7FgCcpQL1mdALVnjPp8PtHfuCbM",
  "key35": "5GjbsFsK5kxGRyeaLdGrdi2B1digrmjGq2D8B1FLNqiwRgrooM82znKKiHoxX38Gn7hGSMm4D71xhSHwH6HAuLXP",
  "key36": "2ZftAQovc3mUQ5oNq5xAYMsAsJhjaPD9rPG1ffxdFukW9rE7KG6H1omPZgbmM33RKBA7XawtLviAbjhCoCU48kiJ",
  "key37": "DfybqudHJV5YB9xmgKeKkZUxgaoePtq2SSZVsauV981kayJeh17KYQLiSj6N9MdevNf9pF69f7JWT6A7CFgfaQi"
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
