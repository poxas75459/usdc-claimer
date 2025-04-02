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
    "36872Cx5yLmvoxvom3fzGfkgL3sDk7AYaNGBBzSVVGfJZpaTfXyvCLKjicz9XDgdmuTNhYua5Q7d2rAh6eB2NfMu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nWS79fj4HL9Qhck54iaKis3NAhp6fW4Lo9BHPyTyrDHgEmp5GbnHNcrfwbsBNeSnWHVsMyq5rWwYVHZqyDhxCj1",
  "key1": "5M3gKiGXkiRMbeEFKhaYmTfnr6VfZr4ANRZLtJ1ot7DiEKZNYRieRsG192mLqJHrrjomLbB5GxHJLGbH7JUu1wF7",
  "key2": "4CVcRbtwfEDiX5ThNLZiP7DDn4NyG3xQdiVBWrMWTD4L59n9wPHTJ4gpakqQh5Xi6U1n8tpWRphhDPHWMMy1dbv5",
  "key3": "MeQuoa4eiG9KS2bJGAqbGAJ6eGJtsPoFTXd7wiDgtUWb1pSjBLWhXbSFcXAXBq3WPYWYmCExJZEwRpciYsPvD28",
  "key4": "5jE6Ux2C1C9mPT4AkW3ywtaDrxNU2tadECMaQVUxt4npwkXAZf6FJrczhuKGNx4ksULYgep982Rqaa1CD9B8MywU",
  "key5": "2Ur7NDRkgzAxmibExeJiFAoNYqeZJQ7JzbdZRiNC8BYxd6ZMkxdcCTsCdfP6hW6tY3CBEbFFFgHsvXUYbNhHWnoF",
  "key6": "5XNt7nNnnk65riofAnZZ8A5SBBUS6zhPcwuRUv6DhnQPbY9rz2QGfefzzmx99zdiuCwnVTJLacX5hkR5aRKL2tr",
  "key7": "43F9VUyLzjHY5SWw7V6Qmudd6BNJPiWMwTC62U2HALK9Q4uDMQ2aHRV8EFZKAVSnSZVfT95RHgddgn9ywTwmRqgK",
  "key8": "4fPqUq2Yt3C44tAv69btL8qZ5XfgmcJ48HoUQP7o8pqWZVcdiRYFo8LiiFSwXHTxxpPCs55oqWz6Vy6yuS1DR7Jb",
  "key9": "5Z9GoxSWvh7Sd9t38hkGaHwTuvyjsCuwUUvWzhYnkaShwvorbacsdC4d8ccRKFaN72HsRDNJYKFYGUfd72GgxXt9",
  "key10": "5n5nqo2mrwRzNryrfsBkuiTCLLJqmXUaQFLvd6wB6TTJjadbT6vXAagMJMgmEyz1a1s1pSegib16PFVVafxmbRad",
  "key11": "3Cyts5ohByDfh52N4guSrFbYdkkcAn8uth3iat97T6nuvFPiJMzoNrmdpH5voieqQsmjDx6VsTGEijs9sUQyYgTo",
  "key12": "4zT5nrWMghSgzHVYDHSZgR3ZxgwHFsjQJd4r5sLuT86Ys2dE3T3Dvy1bqxNGV32SbrjPupfcHQA9xqEDBrZWg6Sr",
  "key13": "5EigrVHapftiDmjCjnLGtvwohVpVW6ARJxtvEivsa8kjCZMXNG8cs1YbMpHKoJ6qVd7Tm2mfFEZdsSMvBT957NG9",
  "key14": "5FZopWcpK1qCQUgiWWksCVDoA31kjr7GtiDwJTW6LeqXy2KqD58dKAvciST1L6wp3d5ycoVL5dkcvAYBCJGPfjrJ",
  "key15": "2VcDHZjvfe67q27LrY2234HzRgPJKZKXzNqspqqabJs7cQGAWxLC7oWVUQwyDtBs9Env4aU4Azp32FmE74jdcmiD",
  "key16": "2FVApevhyQxiPXy4cQeeUx58UUCuCTfeL45L7EKmVmtmucNZFYR1uo5M4fpet2TPJ6qgqrDUWrt1pTKfNMduJ73r",
  "key17": "5kXSikjAUpTbnbCWUvyw1vHUBRjZJ2bvM7dfa5HVVE1dMmH9HbNNKixqkowLU8J8YWfja3U8TmXV5ym9sbzABhJZ",
  "key18": "5XvBSJCh8LCapaSaeQRYPGsTnMyo5rGavS9FCew2gMMrzGDZhAcZLeu8CoxCFemEcjZQEwg6KkSifTfn7fJnAgUC",
  "key19": "g1yWrQXhEjSKL1Nmz6pJpqGWPq8BxC7db6YrNBzNuuhUX7jA1fjq8GhWLECjsrHwP4iGMR9bBzSkgxntydHHdb3",
  "key20": "5Z6hfSsg2GoemEMk5GquHXtQb2nV7MeBqixANtfs9KcBEkwiasNDcp1sdPBA5Ma7tuJtPTEh7WMLAtaqAXHXR4cB",
  "key21": "2Ji74z6tyvhPbouDMnUwoxy52djf2aNbWUgs4rDvCapH9xywFT6hgWsrmUmiwMcVi6JFsyUwEVCLKz73RW68a4KF",
  "key22": "3d5LLh8q9YUkDBcNX16E2BUTiNoLoVfUhTpMguS1ukva33XcgyYYJYVH6cHQzSQ5eUZ8P5NvGY9pTKRfyUA3G7Kb",
  "key23": "55VueL4yAeCSfKXAxE9Vmvf2P6BdGTocpiVnRgeAfZU1B7aeaRzy1emfZVk22k9no1ZvBAVu8iB6UAjsb9X3eEQz",
  "key24": "5HvpQzVNSgjykCQFyqNARrE7dyvSPBvV1vMsuToEDzmvcp4gswnddqwYbDkhwy7on6UmhBgN2qKDXk1LgS4ASwga",
  "key25": "66XF25unjCXr2jMz5DBF16yMjVqHrp32nHrBxQZq8fmS6aCpJWMCqgGHSQuXDNbjt45YGRt491z2MxzXs3A9SYJs",
  "key26": "4ga1csstdiJYWgydEiL73NnsWtqbWRpk8Nmp38u18Bz6GxhGdT27uqBFsLKVLR16GMG61GfDwCFENQ17wxWGXoGb",
  "key27": "2SoyC4KyWVuckK76xwij6sNWQipDBFTsC1pSPVrXCjLYQmeWdosz4FpLDmwwML9RMdVKNK14D4ZGhnzWHnRthVpD",
  "key28": "4T84yMxDnj7ALH6u8VXA16b89zkSodmqmkjFSqLRvz3QwQK8ZECkxGpgQmpBg9WQ71E6dATesmoEa431fCRX6RBt",
  "key29": "3EvwAefM361JmA58Hbq5z5SjUa9VtRHqXfp3VbrXwJZMY6BQpEQD4R6TzvDXDgZt7QP3hEq73ecXFwb4RYbn6MKF",
  "key30": "Vom39wv8sorq9XxR2fVq2oqXwwH4ooMiyeRmgthCrCLnXzcK39dGpqwU18dGtbT447Wexx8qVdz4GHV18xDQwR1",
  "key31": "3iSnWzmtrBWT5BgVUFgAtrTc2HnKFWtPuMXrypdHbytWH3wsQJrJnsXZVUGpqJYe5uWUmVv6QgJ3VWGE6K7VF575",
  "key32": "3kcfynEU7qBM9YYdHWUrcchAfi6ePMFB9y5mQVf4mMCcg4QudFYCPx93oZm4oKeoS3xBiG7UkHQ3jx6s56VfVcgy",
  "key33": "Wmh3Bw49v3MatTuWRXEf8tAkup76viXW9ZkSVgxnuyjQEoV8AjHAfMni34PsHKamX9BuxctNid8mn8J5AsqFuJL",
  "key34": "VotGL6LpLPzNtcMJUv3wN87UrDDuKPjJ4TAyQixbevz95zj2zvtwUAcyVwQn32Doq7YC2Yp2CXSCbGy63yEHZwL",
  "key35": "26D3rYTZSRPnDe5SBXnsS8ygHYXxHHF1rUd8MsZ42zWf7tYC4i2mxCXjkwPmDrypiJ5QtaTQoFueUohBybBnbSau",
  "key36": "2CTE8xiYAFNQgDMja2fzGiLAPJYgpjeeFwq4749AwUpr5pSbixbSbEAfyZtXyaGVmMs8JsTJZaGf6PxgiYQJNoGL",
  "key37": "5ViMvBpjAXzTEnPKFTumezuUzY4S7Mm538ghBZ4uAqex4ii13iM2AhHY6p71oDeaj793Cv6QHmrsgzA4HmNj24xd",
  "key38": "63X1PE2D3woSdQET6tawP1wu2xTKqsXTy6gonxrBxKZLrRx5ZLfjTPPSxtpuHQvfP2JrChGjJ4K8CWNExPbWp8iv",
  "key39": "4Len2bo2NK9HPXak9PHZHvdTqs8PzakJiTjECxxAFZjpaxJBSQqzhMQMyHsmRBqHnyvDY4VAMyzgLvBooueJdyBx",
  "key40": "37X5SA5bqQfP1ouNJytRMR7hB1qb666HivTbxLd7V5YQuG3h7rWQtJ2t9euBrNBzzDxwEPtdM6RKKd6tUSer2c6F",
  "key41": "3rKKHdu2h79pD2YEZqdKgQiNtuhz3cycfnuXffv3VFtbVocTVrUuZPL9oLPUmYUe5HRcZtetuW5uhgexfiB4C81V",
  "key42": "3Nzw3KcNz9DAuiPpYeT1u3WC2vnhXwfm3gBXMxXpAGzmU1ynYrk8haYe6DdW2zdzxpMhNLJUfuYRQ6dSeq1fjyG2",
  "key43": "2qhHjjBMUBxarKLVQTB3t6Md6n4iucyzg9sqrPLKWua1kDZTqxR35UMBcpyMcC6i8Z46uqWrJkSmYVSYYgVSQCm2",
  "key44": "DLAUvymvyEtnamSdskECednDW9C64Xm6au9SsA8nqsZoS8h2qZCyAskpaitTe552cfwbHT2ANzvNrdeiKGTUFgJ",
  "key45": "5qo5mBhUz3P7kVLEzd1LuT59njnj1WBEushxfBFpRH7XLzU8sR6sZMDt8Qcj6Wi3p7GPdcrRYWTtzgjoF4vVQqdm"
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
