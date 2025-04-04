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
    "6e6n6TimMSeuYJvHfC2bxVQgavhFERGvbjYwGmosRgPFsw3kgUSnM9T1yhRDch96fEYpXTNt3KgebFDtcNEn7kZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QBxqV4fmemmiMCwP3ucU9wE7SeERvjoh4vfLAnvof8xk36MG8vb6Exe9GbTfukiWgMPVJrwC3MkwsZ1AjZaCMbj",
  "key1": "2H2fzFjPWokqzvX1ZdLySvguqQvU57sAGsfXgfq7euemWVbbAW1ghLn6PAQ5aoyd3G3sH3jYYNd8xRsiyZuYrU42",
  "key2": "271kJWAWrsck1FkA66bvGx6ohQeeQJWvjHheuBjmmTTJPe7RsfJw9uztLT3ZC5kLGttUNc9zKGewnz5RNhkV4KJS",
  "key3": "KKAnypAuzV9pokoX9hDmhZcmrMMJSsHvxBMZgSrjgk1asJYnhBf4psszMJtRmHnz3koHiuEAa8yXYp94h6Sm3Mc",
  "key4": "5V97Q7AniqzTaWCtngmYp8aqo3tGLJYbuz6FEJTyQx3Jynux3Lj3TZ2CeDzBKJHcRroP8WRpX1yjqK2rJavbna8q",
  "key5": "3KLWKt59GA4HZxRJ1P8oNAdoCJJfpSTmoSPVvaBAP5T8wJJyBMWEwabM3DueG3FbMeVXG6crCXfBJZumESzyKtEH",
  "key6": "2EEtHr6hA6g8P89EHnwkVjiwrn8p5UNJqrnZ8ypN7zLhkDywkzA6YLRUipdT4ZjaJUqbR1p6o38kTzWpsXfFfhvW",
  "key7": "5wxoGzWaxjDWfs71zgCtdBPqpbvZQsx5W1g6xFshxzPdg9XuGs8EjWrTqUmPbyMqPxF39zSRpNwaK7voS4E9stdj",
  "key8": "5jaEowGX3cfe5tiWBXLxRMyQZm8nuBq96eY1U9BUsLYKVYziNoCjkag8RA1CAsMehcAWHn9xa4YtriCMQt2RioSx",
  "key9": "2dLvwx4kdPTaEDss2dDpJqijdhpByAJ8oLfSqKqNAYEPmHNDiV8796abFMK1i4YnLyubbWtGpUE9qMpi87JE8BiF",
  "key10": "5MLLVDTXXS9ZCSKKVvwZQiL63e1szP8W6We1QSetED4yR1EK8nPQPM433fK1UaTxjfTmdLzy2xDVviEK8BPpLNob",
  "key11": "4oYNxXAfw9dfvPnBcWsKEoSZorsQbZWfUtjrvMJmkevoDxDusdDJLGiMgfxqTmrgdhVq1YTtSUuo7om5P84hQm9M",
  "key12": "4KJqRja7mJraDN4fdEhkuiTNtAsFizyaXmz87K7YAeppB4hCifi5CZbwR2LL1KEse2c3cFSvHvFUbZxFn9z2xpQm",
  "key13": "2SaTMSEfYw42Cn8Vn7sqRxagMYhy1R98s46iq5wYBxrEmRCHVUMvMN1RMEuHt6mxfk9gLb4xeMa8Jr7X6aDg4Cej",
  "key14": "ydNyKihvGvkqYJv2JveMZ1Tc4y9NXmbk7fbB3Z68C8rxHPke4UqgE2qVZhAAcBRaEkZG26uzPpgxbsSpvnQ4tWN",
  "key15": "T9DZAiWXyTJLBez28kmHkWUZTfZoHdSH5tdtLBrASame9JdtqH9pdDHDkZxmog6GhhoTDWg3pU33CLgnZGdmeLy",
  "key16": "2hDVNuXc6rTjqg6Xc84mE6Fr12Rj9CNz218U4ZYGfzeKwSz53zZB6f9322TsZhMm5P5xvBQEG93EAZAMfj7sLWEp",
  "key17": "61wKC7o1jJ26QdSeeJRy1q4VCGLy1cv7Y8TKNQLXwBMbvig8xazEL263iKcr9cv4VoutYpa2oWN1szBh3f76MoGp",
  "key18": "csyZQA3TeCFPNBmJLqZ193QcEQuLB7mP4oHpY9NZPtFtu39vBBByBzifph8RUNs6yJBzZ1P4TyMog8s7Varrqyt",
  "key19": "qumc8PfjYyf4JWfj2fcz4BWREaU6e9y39zYZjY2xC9TFrDsx128dNwtWfXcvhGyEHWyeudNDBUmNkHXYGJ7hGJ5",
  "key20": "53vNyHmvLWoR4SjCndKAVNcR3pY9DxUKJzDnup1wM2jF1DyK9zJqcz2HX1xwBSPVTgsmke3SrdVja7GXhRyjuMvy",
  "key21": "3PuT1abEnuoBi4HGBP7CTeYZyaJ6x3fR7RYiiNuH2qg4NwSrnBqcpogmHJswKCEonSGqZRSACcWsJLewN3bRxJ9r",
  "key22": "48YKJPSQaCYAnLctA7dzjjxx5RKmrUNe7Kq1sS4wMTsFf6gJ7Mi6Hy6HBK8eKs2JQDDxZSL9SwaiNMQX2Q8D8doD",
  "key23": "4SvkXZDLzjpt2dD28maKB2vcqL7cK5AJU8b7NSDb7bXmx147YF21gdh3KUPJaskHtKmCyFUZeCwET8H48TsdLRgJ",
  "key24": "3bD9dpBjAMANcMmjA3Xn4eDnwhQjWQjosMVcxQmDXFFN9yNH6guTDZ9x9BucFhk8qKdi7TvVUy4QW8MSGJKHjz7X",
  "key25": "e4d6vbRUdDEMudnd8BrL5bXWQSzT9Sb7VB6eNrmL2u2ePyLfCngEiVoyVqfwHMitQSUUxpNAqnyCfbGDxVMCKaw",
  "key26": "2jtcqgbsuvMQf7j8K2L8Ca4E7vVgLGmYFqZbEsW3c8J35E4LMtECvwWvUQ8nfPkfFSuJvyJb6mVWjL5itF2p5WNu",
  "key27": "2EFjCmtntgJBkMLJ7ZRgxjsE1McMJvEid9xuRGunEYs2bY2UjDgx5zWP9JiWpMfLDnNefcehNjKa6Yaj9nxb7bmg",
  "key28": "5j8jHSKgQ838R6inrsANYXTgS4bikTSgEKBVN594AjL7qcFAXnGL51Aok9chzXLjSKD4uw32xcp7DHvCpReuTwjS",
  "key29": "4PAJhVCP6SxTT9RuD8ztuwTGYVdgcf4LBrwfgqLRt6XmXwNXG8Nd2JTjbFBbMQ23fXnDGAwxebVgp2CC2SPyB9xu",
  "key30": "4QJoqHYxSGQCXyLMj5nbgKNhCkQ5iBdufgR4fGqM6DhajcfQfrj1TCxc8duwhHUDrZTr7fxmgLKc83ns1DxAJC9F",
  "key31": "5cY5ubq9FVkDpvYoxdcd1oFtgjhNoiVnQTjRXg1qDSdS5QK61T1i5bHjRDPnionEvt4oV5nbWQHYBmQFcBnwSHBL",
  "key32": "4v1yd8E7PEkfhd9u8u8zRyWDdVogZDEwaBmvf91amMDkZZQ3fpHwWrJW1FvxvAxYc7aqwJVcA4fEPptZhc7xEp1i",
  "key33": "66oXHErLKhVfw81YP3RYWVcNNSAZ6MGPHBA88t25vSCWoYYzFTjno9W9BsKReEA8NZ1XA5FBvg2DZwoB7iSDHW1G",
  "key34": "KqTHDiNLsfm2djaTZ2H5zhAmoujvWYM7hMxDt8VAxBfXweaodLAcbsoBVedzn5xankaNDhUrD6bTMiHWeTraLWp",
  "key35": "5cVZFzsud2yS2yqnXcenxDSDZampTG2TySmEn82Nzox3hPRhqpdN23UhJPakFUAsdkYaxdwSrCj5Bup2QCnpVzUd",
  "key36": "v468ng3oQLHFraZ6L6ixcHUZZVJ5xdEFcVhrjpNDx3t4UR3ThsL6BMsM7imsNoKywhRb2UMXJKMhViS3yJKpAkh",
  "key37": "5k2T8f8uaXou1WLsWjvgx2V4XuSVdMWL6xWdJL25qvoC9pC5QHgWu5b2f3KrgecwG5kPVUgdF2bQow1uxwUftr2o",
  "key38": "3UuSHuWtT5DUgLrb7HCdqoHVHuR4L2ZBRpKh3i5L89Yt9mK4AmZjDHAgBTBu1BqMLTi5UMoJgGs3oBFjJjG8axmm",
  "key39": "2TqNfMnm1bjd91dw1P4hYpLK8No9mVQy951Gcf1Z3xHnV6ThugKSgZM5J5GXzJF7tKdtNcpYxeDe8v6o8DTQZsrg",
  "key40": "5uDfFCvB1GG8CL1oNUhmiHDzWkxkLfqPkNvicB3wNoM86cn8gYi3PLNFvsKHBmSZpj3VMf9M5NRbecgYYwwfd2Do",
  "key41": "2kqMvw3e9AFpPCARpS4EoKkKbq1o9BQo4kjQfUvSGF8GzsrJFWLngpEuSKSLGdgUxhbNRs7Y67SBygZfGgLPdZTE",
  "key42": "5d5xcyeWr9M9hH6QxTN59oxUP9mBhF2KVaLozPyWNatBDovDBGYunUG2WzChzPz4kwAtWQ31pH2ku1qh6uniNeRG",
  "key43": "2wW7gatxpxPrhw64GFpWwQgZGpAUSzzxZUa6PAjibQxzWg4yzxCtDn4yDMfrkXeuuYmHJZjh2Dsh6YL1LwnKhxGr",
  "key44": "jbmXLKLdoojHQQqxNP57Refm1RL3PkoLsSDoAcvQjuVkpSbyxetityfBFAW3177pp6EMzuwz72htq2GEY3rA7LP",
  "key45": "LVMg91FYVFqQwepYH1ELFpgf2oxTSnH49QsyFPGrhUZ9vbc3pCtcJ7XNyjR1rKsTsZbWD4AjNccn2Eh91GF5VLM",
  "key46": "4BHrMWS2SK54opxx8p9sDxbd2YNQuteLGMifsj8uq1YFuKdxszb3XGH2sEBjuv4G5p6qmFvNUENW7KvBZDqYvTYu",
  "key47": "2YMNHaSVoFThTzb6m7jNXDxjYjQrt5yqy8rWiipn1UYgNqEPuV9vqgD8zL3BjeTkbuB5G46KEs62yDLbYTXqf395",
  "key48": "2VJ4JYUcZ2M3Vdag4fEsWBvAHt6FdMjFZ4SJaU8nqj8bdt6LkkCuzruDUcRFeFt6Quv2kgsLpQbKNBhChSxEFg4V"
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
