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
    "67hV5TjCMAHypfPFFAP5yhN6Jwx24QsjJWySpQAqumGzx481qX7QNT6CqXSNtTgPCJHQWrjsgZw1ZXfmbEmgLMi3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66APjL6zAmY2VP21YbsWNFMdfSyRsDhDQSLqRcSmP5VpbGKdok2zJRkXv4ZVwsTRyAkbJUZodG4QJn13TX79hpm",
  "key1": "2YqY81iririTBjRccbqTmtQyzeg9X5JWp9YeQvGRyeFoPHQkr3nWYrKyZqT77DLVe7ade5NA9pegdNWEqYxJtqx6",
  "key2": "4gpmmkqrRDh2EUWSRbfUiW8VVuHmpgq8PsAvFia6mSim9PsrXiZ6KUPzdBMAm7hperuCzfCMoUFqYr9PtvhcweEG",
  "key3": "iCAWioubveicdAEs3pkR13beKxxTBPkB3GbT9ZGYyL4hYZf62mN6Kh8hEdizQ27CNjiYDvJHHBVtwHeVoCEgcGa",
  "key4": "wCo8DMAGb8pj5KfvbGu5SXi9qKskBfQSLMbaZXmdAumboNsnxaz475QmoDdaeGBGpTCindwh4piX2EFTQdMH5uQ",
  "key5": "4L6r987gh8fACTK5cjQLcm3c3AAZeEf5nnf1UP8oCtELUST7bDBDi5kBEAvWpeFy3rsYvTzVuTo9Tdu5a2Mj1zpp",
  "key6": "3P1bPChasGBZMqWbQK98r1ZnrzJTLVngtXVqt5DaEMjy7av4gUftnX5eNNHaLoghCDsW9VQBbufWHB35FKBBmyAW",
  "key7": "21z9pjagnsxfjQPvyTYG7gov5dwm9srXsuvHfWcaDxnXMrCXVAHXKnZUdy2FBAhK2hu2HEyKgYqbiExk3Wns194f",
  "key8": "4bigY2RZYV5ZyMiJZdCzyWLjQqvVfsKC5UgxM4J3NdAYxWjifxVe9xL3X61KvQyddf4nYkaP4f4TMbr5x3wYL8G6",
  "key9": "48rQr6iKockA1fd1TxrGrSMNrj8yUB9vwCANtWDeA9VRBALHb9Lw8tssXBDJerDUAxsTU2soY6LwfZBhQy5YX9j7",
  "key10": "5QvDkbM6HVuiCB3dd3BCeNUvCqtJHkEsxuGHfwHffaXxKhoGJUzYbUttu2Hrc1kZmVdAcKhDC39JxvnA7qa6iGNn",
  "key11": "CptfD9S9FX7GPQAda7LqXW8DGfFVb84bW766jrweNbe2s6FqRXqa2qmwcbci19Tivf5mtmPVsPYkoiNJs6D9gSv",
  "key12": "9En7i5DyZtonbmBodSDcwZXmZdjKgJy1bqwb3bAK99xwF4tzL5ebFnawQFGV3bRwrhset2VDHb2fwEcFWfMSPX2",
  "key13": "3qqotmHSEYx1uNcA5VonXwH7mex1phyaZqRTK81BRnKzvqGW4TdjLAAEz2xDW55XVKrcSw8bP5k5wggnd3qKHDZi",
  "key14": "3ahTT7QZQcwfoCvDbompip1PegeJzoSRf4uSesjCVinYouRiVKEq21Ky9fowXSGTq8QZNgtYAHs6wAoPKri3MwFW",
  "key15": "3oztPoKpzBceuCRVbJ4MfZn94q9umsaWfmftvEWKRB7DaK7jttaGVK62MrVx2HwxEWrPGp8e86ZNYLAK9qmhZMZ8",
  "key16": "3vHBjcdj1VSDQpLLBPLkJybemPkY3H63EtNzK7eHPv214BkG11ajEf9Sz9NNFf5HBmTwK3oveAguTHmM7Se1N1D3",
  "key17": "55dhy9M4EjjPX7rCBhzqTK5tqUN6idRwSgJL2aPJrTjRPbMxz13E6BtRg1jpsjRyiRHSgH7myDU1rf3FdgkM4ikM",
  "key18": "zuwv432YFrzPHX1wgWyegJLRVGSu3jSByQrWYAkNxekj1MV4qCrebCLDQL3AQfXoq5mqukiDZ1pAcZeJqMGGDne",
  "key19": "43CvE1hDSYGjSKdgsY7re7CnuA1NrAKfdAeDZNhUFyWfWx14Lwq4ZqNJ3Z8HeEVFMGAf3ateNogK9isg6WyY58W4",
  "key20": "3ssEcadR4DSEhGYiKSEhd7ZT4BczYNKMB9PPai6415GqTWs1QPDuinshkRWqmx7z5XyeyHKa9sxa2CyNB7YW5vPX",
  "key21": "5xuWDQGce32NBCwra1yzgGm8UWqukYCVgEqHbs2yrQBjhaJeFqspyR8WJmv84WPKBXZNWje21mnNHAwTjLJd52UL",
  "key22": "EhmGsgZXnr7q4L95CEZ1y6uf7ojYrdoJuWzFkGXvKdn5NW5ASG3RsdMsbSCNyfGRXLMeWVKQd67zdFdo7TUgmJi",
  "key23": "4AKQGG7UuzG6fBqjSoHWvvQntmC3FuLBAZQDysXsvMgGu6SPxTExj7DxSdELXioJQd3HHHwaHRPb6WtMPmYQg2QA",
  "key24": "4kC7GLHK6zJ4KG62Qtz6EbRJP7wjQGu72SFSLVwUn2sfAPcsYrjnczfGiu67rHVV2rvViDZxi36Vq9HEdLAC2Jfg",
  "key25": "3Gpczqtrwk5SuxdGa6TxpwqBjodAptCb8yc2Skp4wY7B5j97TZNhvAsPpK1x5LMdR8xXTnazc5cegFLCVNXDsTkd",
  "key26": "5mwDyvUtR2HunQ8aYeoPeVHo2jFMvXQrFbJ5FpuU1dRdS6QFeWrYR6CmCnAXMmpCSHDjyLiLs4LGC2bwH7sm5kxV",
  "key27": "6ac5CKMF8GA5eA74qyQH3XXAzfVF1b4HSJyQRiL6HmKJJ4R3vF5DaQitA8kiLsdJVaAhPpFCPFExNG5ikakXmmk",
  "key28": "2wR1owxLwUywWJyKmnHPqoKMmeynJTndCLFfDAiZ8S6PsgTu98go83c8buHmBWQmZ7GoQnFPspV1tLmGjBW1aEGY",
  "key29": "3bm5dasBdfRAK2Km79YrWu2bcRdhbkVMe17cVTpK1t4UMY39Xd54sMCiNvSBBN1zGFKcTDsF2Ar3yNPomF9yqzPn",
  "key30": "4VpR9owxYXs3uoLp913AgpzUMB8WL9EE2tUUNDp8RKMcZ4ExXp8q8G7rFK89sr3haY8LJSFfPScAqW7jEMhCXR2A",
  "key31": "3euTr2V6Sepu3XkE7J73Ee9rdCsJu3k1iWiscH713xAgXjLFCL2GPm8uxPbVcDsQc35zbxm69bkuk8JCxdsUJFWn",
  "key32": "3muj3jufynsUt3AW6RTgtz76U6tQXn6Nc4JofrtcmWy5Pz59uM5X7unnLzoDGEC3mugdktBgpXPN66pZttiaJHfF",
  "key33": "3feQmQzM9bmPuFPy9eBcq3fxaXQRa2ACxVWzQr1dv2UyPcbi6L3cyGnRQHNzKkg9fGUhGFQVJBjKKSLr4t37AU9a",
  "key34": "1S1ETt2PWgCGkMdLPhyDNWnAGxjp1Wg54KRmWkJtBHzB1Z5HMJJhodXfhYZeAFqvMi7Sfis32HY9Hx7EwxyNXAu",
  "key35": "2YN3qDnzgGZ44igH8Z4jaKkx1TuKB2uVMhq8whstPbSWUf5XsLU2bPVhjTe2EMDoQAbCPf7oLWvuVkFMMXwjErtT",
  "key36": "4q36sBPcuUSYKveSXjyr3Bf214WZRso8C6XHDisN6T5TKNM4h45LKHB6eCZjgk6Kb8rBcoikC8VKdCnTqPyzQtDp",
  "key37": "66xSXmYzaUe29qPfZcteKg1jktfofQRkADp6UuDbrajboezfcmKoxSpBGFF6DmC4isc2obUhhdtT4bTft3n9hMMT"
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
