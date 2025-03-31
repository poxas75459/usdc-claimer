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
    "2PZoAZv8PWoYKjJJUzijZhXW6kcfC7ZS3y8FGnGf7pcuUap8P2Q9nRUVybkGcci3mraqMzUVqJ5JJsVA4knBx8uB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61HJgP4gMpxkYetus2qEURkUhE6VedWxJaVZhs2ubMjHf6PobbRNvnL6JVn8EgvPR7xf34oYfzRNUtetx6qFeZW5",
  "key1": "51tDq2zQJ32anuLvZvSxLPtnAyqMswFzJrZoShyhUkAK9ducu16dYQeR84Gj6xvoNWHMDh88tSA4aUhTUJvzrZGJ",
  "key2": "55sGZUrLjyjsg6w14mT3Z4rNHvByaUL86m6pAEzUuoPcjMXwFKgXuy2aouHNK6wMJfzgx9Undw7ic1F5TBzV8zQ2",
  "key3": "62ghLymE95M8ktcCfprSBWqmUHjqfW6pH4mvcHYhGZuDAhP9MzszDwj6FDWq4Ks46hPqNBfnwy4iYG4f41PkKhcC",
  "key4": "4WAypPN1Z2EY6qEEraZbVKZ2k37Azf3wrsZjUyqUP26u2SyLJhVfT1p77TxW2X4ji777dr7iFwH4wq7b1NbynKfD",
  "key5": "4uzCaxDTb4KkNXdR7todCgtSznTBF6DAuiCdJveKNmV358Q4wtcHnQ4BbNJ4ctbS4YjM2RuNJ2T8DyiWHvguhgpS",
  "key6": "2uGzuYNcEhsr3rp69scSi4JNTK34qbdJQN9PFWxuXktxZEueKazF2n23fVFF5N6QyWRWTdMoaCpmEKGPewHPmMLf",
  "key7": "5tt5yk5WBoXtPf3Fon3tPzeTLAsJNRMGPfvNEobgTiTn6urtd81jo8oqJcUg8rRHRsEfWbPNnVnmvDPicF9z2Fjx",
  "key8": "5Gm4PSXpyMV7Z6vuY99rMMzSathAimF2xvt28GQ2VaZwRBAfMsuN37xXr2MCRj5JZSx68jw8ii7yb42tVqdK9TXa",
  "key9": "KwmSGJXMREC34Z8XkQKtMsys6bbJQMRXvnubHPhpRGiELpuU9SrdBcHsV6Szmvpaco19o9VTC95yxGVUj7zJYQP",
  "key10": "4DpdHNL4VpEaaf58bDkyhu2rsgREkpxsiBGpw8ShyvtjNRpb18rbezqKbGmFZmTTDLkRcSSf1oUxmii4e4he7Tmc",
  "key11": "5WqXbhrPaNjCMq7tzpEGP3ioTSa9pQyCFgacu8iB92UJ1tBTjXDPuLnUuC7KWK3Z99CbocbQHav3zZTfQNa5MD4R",
  "key12": "2BZ7Dn8PPfGPWu5wtAguXc7VoqjxUMseMF73QETZNNcXBjKpC14bSjt34egcn3pK6gfLfiZjPGN4kchUJJSqwHsA",
  "key13": "3Ct5YTVSybT8WVP8vtd95TFCgpQCySbfCt7gVBvyxsg1yC676oPAdBTqoB5fvcw5fC2a8RJkbyfKDVpVy2iHNu8X",
  "key14": "3YURyQdbCPXJjTsHhy9kRuQGVyNvdeJgAyEfdkGzHL8a7y69vWHrxWu5k6wsU8e4gUynyQUVG5XySXXEnwPaAGJn",
  "key15": "492H3P8giGE19nYQLanj26ZWb3sEYdYpx3iw2GFM64TozJJvVZiiJvvyvtDBNfvbbUzezPhAWqUW2feGZbwbqG2C",
  "key16": "4eQNctcGud52JunPpMXoj1pBHqeqUHKuR9nZW8KKdtRRkQWw1mNAt2L4jKrjrUXQvjAdq3VUSbrpBwHL7eXS1VmR",
  "key17": "3oLMmE8MKnsiRCieSUMziyM28JxHfhrjpM2SsuSdxaSh521ybt9pqHBVGpHEHtVGvXfxWbAh68AaowX4ATzaaXm2",
  "key18": "3Emy1jxs4xKSkT31Tx6YgiuBknrXPB1TUGnF6bn6AmGi98HZLbx1FLFke6mu9bzrWLFzsZUxvt6Hk2ecZMZ3kFiv",
  "key19": "2sqy3DU9WLoXUBJMr9v28FeJzGJxVFg9E8oD8P6KHnVCtGE2hywXHqzqGfR6Ka2GvpcEPeELHtHbCV7ZZmB2FabT",
  "key20": "3A23vBiYsqPQ78ZiBFxNAK5hqKmJpiHKAdEqkWRVARLgcSNtj4FZGZCCgEDFTKb3WpF1raS7tNdt1eaiLANnFDfA",
  "key21": "433ehyi3osqDfQxe3jXjDRsP1LabQFzYut6VQVikvCyTpkFhvjEhtsfZ2s4XGx9sE4hf8J8dszkTrVke23bEhb9M",
  "key22": "4MAoBGfSd7K2EGi8ens2ppX1ak53ovGQEqUY8PVmrox4LWtimsZBsGw587B1C1h53VYc1TPMUAxxh7PwzwhgFPk4",
  "key23": "2evivutKVNfvYERPwVnmcNRLbCyxjojeC9X6GtrX96uo9ga7ybyzCYE4Ms4Ep1uKrSuno5MpSKzRH5iAGqApCy66",
  "key24": "4UUo9uE4iKANPFEvcwtVVVeXRL4VC6xCSJYDBa8wo91xu1cSxxnZSZSDu9CzG1YdkqTrUrPm6nwdzDAy5J3VbNPd",
  "key25": "5u5LWy6DjrmFWjSraafeP93UYsBAXMuZhizYZouJfXWoiEHS5Mb8Eb1xQffQfhdvXofPuP7eqbSzbtqaEi66m9cH",
  "key26": "5JwZA3frE7WzyUdiUcsmm4hPb5Uzrt7FuUrTecqr5rkuqZ3pWh8K1TmwW3mZVEeZsEskfrqG2eX8bpNUG9vUDDKU",
  "key27": "3CDBJRDMdfqpTuXHoUCKYo5Ur4aXGP3dXa9687qrxo27dfGUvh1wENFbwX3UYrgSL6jqftaty9fEjg1T4mpLMqid",
  "key28": "Tk61DzCpavHnKHq57X8hpwmVBXUbCkL7mr66HaD9bnFKeZsocE1wjc92Cq42YNrsg3Z1Ap5usaHfZMbHmwR2zif",
  "key29": "4gP4y99uyoST4WVz95mvTUhJaVFqAXpFWRAe7THKvwxrN5xDFXX2kL9ANKWQ1rdrfeWoTXFN12mcqeJx56mGDQ6c",
  "key30": "5bZC53AmiUGNvygyY5NzjYBYn5tvnvWeYt2Sj2eqmKnM4XbwT18PUcAX6Zbfmg46aoeyP6QK1ZfQkb1jvttpkdLT",
  "key31": "4JzE7THfwLKLsAiYQsY7CH7cFtWGv2amQWRKvgndhgaBGrvfJoU2vpQpYqQ51KCHqDyEZpdTKyhnvt1LxUoL1Zqv",
  "key32": "3jbYThfXASywZ56xX7YtQeLBXQco4eTZsPEXrfgo96GMwiCwHfAo1THiYPpnUpEVSZ7a5WxC6h8BRd45iC8BYwv6",
  "key33": "31F7FvMxQf7WcCo4hdUkSjRpyo7Wsnm8mhyF7N3WdnQGXH8NzjahPNn1YD5geb5d3WEeug7c8epBjjj8xDNJYGcV",
  "key34": "38KSJWg23zcjyXgCJuQmJYPFZRaQLgx4ZiksRzNP2a72U4w3nNUZuVLpjFvqhdiSyXM64gdsiLrTFw7APVsz651B",
  "key35": "3NFDg5ajEzpRZmKoyMbDAomivJ4N1Z3sLqoY7FwrJBCD9CMUUBJ9Jsg6acVq7c2NMJYKJq5rwAUaw61RU539JEtZ",
  "key36": "2hAVdPugaejkfgafNgSNRq9fUqNs7atsqe9ZnVweto2rPs68XM8ETWf4xhB8kDDjA4QqSd2TWuVf1yEd1bJWKBub",
  "key37": "5YjQsU6jCigyyeuL1yGfQtmwUnQiVAmgXYS7D9W7RHRHxZKHPwSXTvsH75tvnLkdLSMbLuYrfRr1cwdJvBaaDKcs",
  "key38": "mFKprAB3EkeSxEFqFKL9TrFx3GccBHgGvYS1CZrUwJLMFJt8FAAQTnRs8kiE8NaGTVYUBoebryLM9oVKYWf3kEN",
  "key39": "4d36zPatpaJntjbhuN6K2NFTytE62F32oXKBtD7XNxBMhVuybnchjmkmXbhLnxggXw1mV4YLnxvchUqSp1uS12oP",
  "key40": "we1m7286VDsJgrmpVuD1iwpD7iaKjQqmwztxsHhnwyUEVkMTy2uDeWWYk2CEx8jhTyGqcpeGmWADnnn4sZyC1cN",
  "key41": "5mJVGHgBBkNv5UvCQqsiDJzDacmn1HyuJujcT4ime8uMtedKtTZDaWZ1QUAV9iCJJKsQGcA75HxZ2Zmh6LvtVdxK",
  "key42": "66CTa3DUArNpX6rvdWpB5PX1mPsrYSdtfAMcGUjdGpBNQs9CaeMJ5t6HhpgoJZagPYYWwZCT1EuW1omCet5rGAie",
  "key43": "2U1ZLsHWzkNeekt4QrKoCKscDECfxnMSUdh8v5CJ9N4DLrfWBczxgXBH7feZinLmbfufaw9qw9pFy5MunjDJsmgP",
  "key44": "5kfw5ZivkZ51fWXSgqnaMgYJXs1hEF8xqrptyacFxct7unhxzSNCaKHjY6bYzdSjcQmaDuKUMspHsaE4Xo58SdLD",
  "key45": "3sXjq6XahKsdp7rAw58whNuviTHQW9Q1dmiojTsCwHYVMRbnTQVzWDePEdxW6myUUSnhj8vFubCA9JH5ZxRgnYLL",
  "key46": "5TRZPhxsPMGQ8NQwvC9c3j5NG3NLMmVvPm6nkBrSv7cXHBw9rCXjo8Kqy57gnAYLREh4X97yJPqCtkzpET9UjrPG",
  "key47": "3p7cV6SBrwTkvdL8kkYTkF1T8FuaFzfCGiENbP4EpQpor73ToM2echWKyDexqb6uGXYLeYNyGMh7U7zaAzg62EG1",
  "key48": "kTHxwrBguF5qR6gzvLzYLfRGXPTeeDETtFZvPBPEjtAiMoDCzfgDALuS3DkTezdrvzDf34ieaBoEEW1GQvpn8Ty"
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
