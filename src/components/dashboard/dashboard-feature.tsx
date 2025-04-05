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
    "2MjdVRDbYCyoRMWcNoUPen7eADxeYcJXPs5eAzvPZR7Scn65jWUCgBCuNBxCWgpARysdmxBJEfBVfvWtvt48Wp8n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ABVDNZnrW3MVYe5X5at42r6JsSNqaMfFYgtkxTuLcoZKzYCyQzDoq5ZxM6R1ifoThY8aQGWKEZo4srhvhqRcni5",
  "key1": "3cKwNkvwp2zkssZL2VEbr3kkfqiwyLtfVr8LyPAg2fvzo6anCXzUKdNsDs2fFJ1zqsV3AaMkbjiHkbNpnemErbgG",
  "key2": "3kuKZEjZhBDQjEgqdKgFGc9FQ9FN7suG93JnThA5tE4u32bhnbsR2HnEqR8eS4sVxVLEF4nYMXTsASoY5VmuML4s",
  "key3": "5StYLD87TXGBn13Ut6Jsyvx1ca2tpTAvaNrXtr3LxVtYwz239STQ5PK5MkzdXPYxCE38xWfhQpHgMrWv8NKQ333z",
  "key4": "3uZ9KAdK9FUMPH1jJgcejbPY8i12KKsV3EzqCQy7WNc37TyxozD8PUUDTzU8JgzNroV1h9FHqV6DD4hsRS7tgo17",
  "key5": "YVoz2oNeD92sdwthMTat3pQPLUB8iWKwP8VbZdhbtUzaW4DjS8XQGjENMY9H8ExQmnBK26BDLcEWLEYzCeQG9KK",
  "key6": "3VWgfpnJkRus6zvAWEshv6qDPNd4XtRvoCxd5Xa1XprWg2wFKxskCLerADdJAPvj93x86jHzw2YMeT3yf79w5nLa",
  "key7": "4LMTTrDh9UJFs5LbAncomdodfKNi21xftZMwTdLXUH9dwXxuDTmS39GJmTPzUaZNwt1LKbHnu6KRabXu3fxYhWPE",
  "key8": "4YY2q12xPhyd6EHn721m5VXSptPAJ51uWBJUssyhsYQb1JczDm6fe1HipNSAZshfYjZ6D3H8Js1mjoDpS2h7vpHA",
  "key9": "39NT3a3NsY39ZUu72JBHCBjzqF2m91wGKENJG7G6EMAGXdYzbUBWymKzpFh4imbfTtpDHqeWJUBYqdTCPcJ4oSW4",
  "key10": "DdCtjGvDKfExyXuroBk4BSAH3fZTNFajWcrKNoMmdQpfv9y92myffiPimRhLEwaeupXoxMnTjLAz9nQyxpRLrA7",
  "key11": "2kRpnsdxB7Ck9KBerCoK3eqwJVK1QRYdqXTqULUJCcuHVocZRUA57P3Z6kK1BnBWUFVLM7YcCbfH8xkWpmP7G7Px",
  "key12": "2d9Z78MCv2kmrwyFVQpxJ1CX8QDVvRy5n7CTGQWzXPMwkkASxacQnWJr49K2MTiKhAkRjX2WK6r48yCjj26hyZzn",
  "key13": "2xqwj9ePHiYobAcrDvbheLhKmbxsgaPxUYaLgoBdskdMAxacUFb11U2MzRVeTKzKkkpd4j4iv3r73jsBgsyedNpc",
  "key14": "i76gLH2FdMufyH5uFN5dRMRaobiX3DtzT8n7TkofkEii6Vbrou66vnNgQ4CdyhKcZAtQtGHTwEoxQ1zeQ2bBR1z",
  "key15": "2ShABhpG4FUmACXdp9WcQJbp2mxHczNLRMLJ7wJGqgFrSqyXqQxYh7r8tVV5gX9RsXUdqQvbzP8tcaGDRwzifREu",
  "key16": "2aemWUYj9ty7hHP2esHNwef3NKgB5a5KtnLNrvx8WvskaW4QmJNwzhVsPjyAhH5hYzH4AeJgJfZAkc4UMNnoyAb",
  "key17": "63MM2cBn7j8UwhPmiSUMZEUtW1UZC8B79wR7GtTcgha7P2d3gonbBDxsTMCgPB6izqtNVw4SGNb8cAEDMbLbgs45",
  "key18": "3rvyedfuJgRybA6NKNXrnndxK9Zwwda4qFiVNbL3gD3CsmQ9skoFAHyyzw8YVhxUz2LkZQtqEfyF9suvbHoc3uV2",
  "key19": "3vaVxQTrwFuAz7KZSwdBXUSXD2YzEwsU434vqdTVmUbx3hr47D7AtCtUGYpjCJhaqegunLZmVu2Cg2MwPDwwHJUe",
  "key20": "SYQZrFgLK9fKz4kKqBok1Mo9X6DTbQ1EGqKWYMggbBymubMtKMfimGLUc8RnNLRdB5vPgJvNtLRpXfn5xrAAMBr",
  "key21": "3nYkr2766gizeg2oUT9CrFNpdKeQCSSffjD7npFLSRYAzMoZdvi4SQvF5SEdnmEfPDmvN67uYgmCsWUC6ihurpjK",
  "key22": "Co71yKEJEQDKYd371NcPKDgFpwj83jTSMsmEjjfecnaAXUnDAWzTexPmiyPVSszdbobxWu6AELky79Cq4uQmHYz",
  "key23": "QLmxfp4coFz2GAxWdMKqKmPpNLxJNVUr1wTJAi24FgGCU26oBZbeBsdzM5buKmfoH4s44VFwxzmoA1gh5SSVksh",
  "key24": "2hDQCAfShSaKjvFXJZH4xorRTm91AnFhYTNwv7EJ71KUaj5HQaWb1yorhxTr3d4ikRGqShAeNNaoNGasD7DHQWrW",
  "key25": "2AjKmEEEy1p26u4wXG9Bpgz12GNKfwZuDZ37kXonVK7BKGLcUSj9zJd29t39gvTdGWFvJdDGJrpiH2Hu2SQozXev",
  "key26": "4KAq13GjH1t2M6oVuo1mkEh1m3fQEBM5KLtPGxvsgMQNT3jyfJfwuUDd5oJAkM7uLu8sehDgrrg1nPdFpb2K4CSX",
  "key27": "UxVUWhUHV75GMiVnpnxkxXAobyr98dShaDdzHG1NggM4HgBdpe2zzwwKHiLp8MZqAdGA1cnehv3BcfiexJDkQJp",
  "key28": "AvjYSo86286JFdy9xHvgvWdkUT72fxW1GpEgztHifAesZNtUpaDKR2fb39THZdBnxwYDNYXtqU9cNx9hA41sVJt"
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
