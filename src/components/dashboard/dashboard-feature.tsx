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
    "cLUkLPAPZdrGX5ngAKyVrC1wb3mMitwAWQ2WMbAF8PRmnXFGVR2f3UpzErmiw3Mcvsh8hCxgfW74N3BtEeq21PH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kjrkgznZYSthC54pmKF9ZFX5znJbrMaEethXgJBtLb317GqmcJxRLD3YxsJMQPfNoWKHfAWFeZmW1iu7NLXkE5P",
  "key1": "2qfSdieptQDngfeejLvwBxbazV5GVmnopvmgRmGZUsNmEWpM9WG6taxMBBCXN24oZTqAeusbWb9uePNDmwz5Lz54",
  "key2": "3VCZahVPgxgYNutuPuxwBVKihZoqUuxFcaRKYxk7jEx2hjN6AH8fMMBcPVeNyQzYtqKqjhXaSnWXpvWFTs4bfvtH",
  "key3": "3n17U2MMQwxC492aG4QbrvobJF51xGpp8ZCEStGSDoqYHhdyHxJxnQMM594yaDYD9FajGGKmLe99PZ7MK6ZuzyUV",
  "key4": "Nev64nB4qRKs3ksj3zt5zTKuNncBw6qPjSmemw8bVC1ENHQVgKrCfuZiEqAArLuVp4HhC6MLEKJxdr5b52cSjhn",
  "key5": "4z2pD2uakduUYwwnJRK8o26EpsmuUTmhRjNjW1PiqhKGqEaVpc2Rxm7m4nRQg1m65t4oBJeMmdDh8jDwr8ye1U1J",
  "key6": "2aUXPGtddpPEKV9Aq1MoZNtkF6HtkVos4qwCYmxREx94hQD6h2WRPAdttJ2WfPKVt5VLTkt7ZsQE4Vj3fGEXBL6n",
  "key7": "5DdkTTCVnB35hXVWnfMajFfC7xyeKJT7JfAGKdX8JB3rdtLqXxkFiUU7AqTxts9fpWRtDTCiy9c8rvDCbrptHUJJ",
  "key8": "4e6cvmwk8HVjGUkmKQ7LsvMae7FsmxXWERPpVVCE2rndDdrEBT2F8crwMdBERGYxAViMCW7tkozD6455zhwiDyvf",
  "key9": "55W8PsnaSzU9nfHr5hEiwWnJCFrCd2VjsyKC7wvSjEEtuVb7AF2879GnjrhLXtNr3zDpepPEiC6JGSHF8pSGRKeX",
  "key10": "4RiD5cbZUcfcSGoEc14KhCMhMLpJXrqYPboT55xVB2Nxo1JaUTifTqkhar1VpiAPHE5BqYxHGe33su7Xg2hYn1We",
  "key11": "55BzeUKo68hDjR3VzqBHoFGA5h58mhq4hy36kS1BaPo8EVzZa9nNYjAoHTk8YbENasZGBXJ5R3zE9YBGd8TkYPmH",
  "key12": "5Cw6YcmZmhBoUHPWPVmVcqpVs2oUBKfxVQVMMzJPwFxGCJoVDhL4mYJEanYmvcyKfS5XqNVtY7LRvpGMGHJEszPg",
  "key13": "38okBLtRE7RHsd5zcZUhZJNU38dpFaL7Nnrs4fHkP5M3kJF4GxVT6dXvchAYifwkmmtKQPdf2VcZPQqJ4TwD7sSU",
  "key14": "4JZqM7j7kT3LyNcXEdz46FJo2Lkxu3kt8LtUXfTA1THeX1HKpNCbf1awoCH6JPkJe39zAKdHDipyjy9CSNPpFftN",
  "key15": "2ykQ5XvBzu9ZkorgCqN5LnV8faZ3Gq6C82bmH4QV3D8cexCyidksRTHDikvHaRTfYj7pdhdgwqdAhZMvHWgnLP7x",
  "key16": "3Xhyq6iCB9BFKaLqoYEnEVPDd49Savgdk4u4ZEapGR5db1CkxsppqpUeUnmbsoVTtVFFLBnTd3KDqVs7xubT6oh3",
  "key17": "25JLFktUirgCdAqmG3JDAiLW3bCyd9qBwmMs4VvWkmKiyJutnyJsjrj42MQu4FP67VYSSihU1tuiMX5LyBTtxXrb",
  "key18": "5uCfSTAMTuCrtz7YJmgToCs5sCTPKti68cYbCPvT27jFZmuAQAjVMmDNA5FAeKNnunhSVXcE6C2pmZbTfSgcWZeT",
  "key19": "K4J2heJWTauhXSpC5yBqkSymRqwHpr4JQfMNtqaJEBE3hMjWZtUoENqTaQpwLGW4b5S2jiRCtzSa7nHAZSvTaEf",
  "key20": "233T5z2zAQ3ZYJkEtw9AexfsQJTXHD1MfhhCzmT3E9Q5tQnjZQJWKkch8c2ni4NoBMXnzXmNwmfLsXvNJLWXyDRA",
  "key21": "rii52xk4v2V5FKZPgin1cwpic5c5rb3wTpNbesBvxrQayXRVMCvhDGXoYhRed3jPCN3iwU2eSuxf2cyn2KGhBGB",
  "key22": "2D9SEM2GJYBgtmSm92BCNrmwTzNvCJS2vn2pw6fiRJe8mNe6se8zBJNQKyhJTXuDRxriDiXjrC3BZFbZL3Uqu8m4",
  "key23": "5Qzh8jXgheJrzWUD2RfpC9acJdE9k1J9wZydY4m7dpSBF6L7e1GPBXHNqU9uJrMLg8yDSSzKTYV2gz6buDqqLRia",
  "key24": "2UQVEt7H9EExGLc5iSUuScmrhi36moRNK3Tm3jQXRqDGGh4qcfwcR7WSJkoJn4FXfBsc4BbJTuQAs2yLBTDPxa6r",
  "key25": "4jEfJ41Jqy78zjKtSzEsek1b8Zg8SvtruHakLTjaq83j98fNqZLTEH3sXKuPUmDXMScn3YS8Kpdz3yMonAw12HfC",
  "key26": "XeV7eaKHeUBk6FXsDJknHQYP6BFdT2dAkLMC6SHc7DAapMhrcwTFte5XbF4BSL8zoFwfezrLyCxaFuLuMKCaaEr",
  "key27": "3JwWZ62EuHZcM2otrxY9fzaYJ2zvFnyzkvgkG76QJMuU9TUiPR75CtR6a4rAanuiX3roohFXG2H9hoacqqRv9bZQ",
  "key28": "4rVTwVLia6jJH3MutqSh7cNgtjUha62TWtyDcTRG7C7eZyNSrSTAGsNYMCLtp8EBRrRRdMUhwyPdM9rx98RDQrJP",
  "key29": "tYfuY1zG1d8F3amAZmQ7WVE6avtBnKaA9FgA5NvMpymVAB2JpftBuUGKPghRTFg6pHBpZqwU38zK65yGRDt3thH",
  "key30": "4mHt4qQ15mWy4dGFNddQhnUb9cwkZTCp9ARuiPaybGL2MVEpiHN3zuGho7QnCPgGgu67GfpVq5pXNAMrBGrU1zE8",
  "key31": "4QWMvzAQG9RWFsqmGRuiP6XBZ3vD9vjW42y3vJeauRHwgbgX1mD1x9XvEpW2BPXd4UUDpeAvjcwjYQULo9pZFN9N",
  "key32": "2ammUQkVQqZMS2iqQeVouPSPioXavkohLbsChVFCmryEVyAQ9U53tzkfBVBqu697MtyTqNcvUVTJfXav1xPAfckc",
  "key33": "4Pr1P9bFuDfefKuwwLwjRGbwkhKC1WH81Ue1XL6ymsQG9ZcZd2Smjehr7GLHqZV4kc9DimdCZqRS89HPefuVs3g",
  "key34": "5zF83dotY63c63nPnUp7p27hDGYgAgT4bLnSkaRivaRCELocmbg3hGULAwj2hhu5gr2f3hJTz9XrFStuYpt4gt98",
  "key35": "4s6wmtdQBfeAYG2YeQTDgnqWcX2amHEcGcVJGutgTkjF6UsnXtBmsaSyoMPFVKEC5LJZBBAhAUQ2tzbkpUDSsSQH",
  "key36": "4yh3VkzaMpXinaea8vkcr2D96gNwCs6zzpBVajevQs4es98x2fqkYK72YPquMhhs51ZeDi15nJRsbmeHRHEQ4pQ8",
  "key37": "3cNDhVhZch1WtuQR1whJ6zCFQ1j8JUe4sKTePPibCAWgaP6RYeJrgD7yHJoDFpvh3ExHBi24GA3XJwPLoxSurwML",
  "key38": "3mCok8CtqK96jQkDZZyq9ns9682y9WqeaXH4LN3wceVpybPxfjey6MeujnWNtyGhy2rGc6YVCW1eyLiR1Ca9CRhX",
  "key39": "5vonkcMu9rWBvvXZNLrHoCg6abhU68JfZLioDLdDMZniVsBVbj5nqWegLKWk28WvTgjbPkAEs3BZsu5igK5EvYgn"
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
