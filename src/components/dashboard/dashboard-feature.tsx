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
    "4Ym6932EjPE2aJTD9XiZY1fZBAZJ4cGaAJZqqXm7NkwXU8AaYRUN9z73ZVxXu2vBvVt2W1v5zKXwWckm7H5T1gFF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nUAgVhPXxC3agQjykJsxbrbMKZmdk1Kd99AFXptFtyqKKoaBXgfyWvoam3T1VaSis2T4E37P2gQpP23vcvMhc9H",
  "key1": "3HTBdJn5WfJvWAoaeV2wSBuAyehHeYJXhJYSAt9qmvzA2wShw65N8TnfoYnZ8Xy1Uw5scYEQAfnfYHEotTJZ5yPq",
  "key2": "3YEDVNfRnJybJKTiGgcCg4X1zzwwBmK85x5mJ3NykcU6gkHjvbgqcsE4Pik4UUizo1qSLDKQF9UbzhX8ck77SpKX",
  "key3": "4ExWCKp55uhsZC93zXQiiDa26YBU4RLgifJ5VbGgyDTCzAEgXc9H9fzPkZstrrxWKJRKbx1TRezWwkU2qyniiPFm",
  "key4": "4FVFr2GEdj8Zj8YLbUPujHMt4FHokQC4hayeCotfMN97Le8qxZZMSXfwc4tDg5UCxTzWuNaAUxDMnveX8okoBg7Z",
  "key5": "nzGwzDKt4hsVuD3BHtitvMhZtTPjTijMBoms3VmHLjk3ktGv7NyJEf9mWBPAMETUSdMUGpThKnQVeKCBp8mAk1y",
  "key6": "2iDnUfJVwW4oaKi8onpZFtajDSVBu9pAT2Nqi6RfXbumbf11YFtCv1d2pfhRUs5pfUKNE5BGZk3PxE8kbBfZ22sg",
  "key7": "32hZdk34ZPzBaPCYNtGksXNSqzp98jKPo8Gerxfp7Cb82wp6WLXg51KiYscAjSxZSTiv3XSCkwf6Bu6Xcug2rhZP",
  "key8": "34oH8JAY5yLX7h2uzM3TF69DRPZjFPshsi6o5sFsbcPXaxucaJKHbDcAvTLz63cu8drde9AuGExYLq7YmejN8TwN",
  "key9": "2ifktJHRA9SfSgF6ZKLndfprsEusgMSHRuJ65sV3jMkPcDPkzM8QPNuzKTcXUsPyQfjEMvxqznxo7cVzBnbfDmb1",
  "key10": "4U2AVJNWQ12rrA73dF7y4vxMD6ZSNX9Tj5SgNZ1dbsY8V1J8tYkTbWXehjN9zTPfRQXMMv8HTFkweDVd5Wryn8k4",
  "key11": "32fdjGDJbuM2uukzYHJ2DiGRvDr9H1SsXn55CxJeDizioaiHbPi5cwyTGzXx6WvhhbLm61yM6tnaPEe3qD1Bm9R4",
  "key12": "3rzFD5uWUcG71uNfvibqE2y1tffPJJvXxtnyYsPVFBpoF4ZDwbyz8tmDam9hzmgUv9GgUyJeMQ3VSufWcQSkSbo4",
  "key13": "2GpmThYLMYKMKkeMmSTd4VSnLMw2sEtLtyC9SMsQ6xqWhXStxsXHcExEgkJ3A798S6qd4bRw8j4S4XfJnKnKwLGV",
  "key14": "3K3zmR5NpwpEQPULvZphA2UaZbAZNpC5kYiin34Ndfhy4SxfcgH6G6xVNuEpL9192aL664QQJ2z4baiRxmjjZeWp",
  "key15": "4xWftpr7dT6rgmKEtn7GvzTkM2ABWQ9sG71V4tVjr3QtDejYSDrh2k7YVQ3NGaTScNra6ZQVcCungV5UceBprJQt",
  "key16": "4EC9d3Td1gdfFHgKJFYgH9n55XrTvRiT2hh2YqWG1Jk2QCqHdFsMm8XNnXWWfLKzZG83SWeHNhitdfY9hQUZ1uHo",
  "key17": "DijsX99NUrppzpH9nsqRkB2s5EtjDviwE8qsZXJc1tvKZtc9QbM35W6Ad5Ft3Cwt2rugnuUmaQJKi1VVFVft3XC",
  "key18": "46QJpgdiMAkH9JubFu5qTKcorCdHhmyLeHRTDh1NupjjDiKP28akYkfjWM7tTvLZLksnoPB2XrDgFh1or3FjJhkF",
  "key19": "5kjkdmvxsjATHm4SPW5JWGXAv3mQ3DuJPkab6g82ReyfXBPpyxEhNgcWYC33doQX7uYv6s9vQ9eoRyHjsQa3kEtU",
  "key20": "3bgkxbENQ9aUQWNCRm5CJcFg3T2jV3eMwcKVuSQF3P5MSMFrpm6FDu2GxwB21UZp3uhxqFG7Au9dNdvZEuDjiRKJ",
  "key21": "3FJMhe5VLaLcZxyihDp3VCiufi3xvqsFcUd72Lj9JgqhD3X8ZcscXrdBYKfG8R5CF2KhhTMJHLC9dW8jCXbTg6nK",
  "key22": "JizCwpgvChJWxtZ7q7e67s57t2XnQW8Df9udoKZN773L4FXtQsMwSQhneWhk3L6v8uUWpCv9xSthzZxnjDujWiT",
  "key23": "2kZYja1K1GAmEYtHvJ9enroEfsTXSW6wZRxBPH3bVyCxPi5cQiMiZBLxWsVu1Eq6CpQoT4cAydTNETY3JfDPx64w",
  "key24": "3wvTYEQQHDojArY6D8Eh6kFy1w8q1FpX9aCK9h9pjRRZ5ed9x4UMboEKft8CAdtBFcfMW1cS45xh3Ei1j95LstQK",
  "key25": "4EfnVQVyKACkHMmQGypDrgFsnqbXSazz4ob1UBuQKga2HoRywNqk7Vb4nmxeY9SGbYhypdtWgJnMFcbG5R9G3mZX",
  "key26": "gCSuidVVq1PqXQ4fwxEWB469ybdsKzDRYqAn2Ugxutw4a3jHPwwXajGNkp4gQNcYDu5e1WSXX8NhbxpwT5bp6Qb",
  "key27": "5HcCYh2zyD2LqmxzMiAnKHgFRECowLTtgzZrNdYi4nmEHRc12rf2BVNx913bYkSKff7nnbwGA2GbpfDWN1vsBCFf",
  "key28": "2FRqkeRkTEYuzewbJALEkGFHUykUDLpzpfu1ns5PMW5SctGsa3xGDBkpp9x9bpJdpc5be6pP9GvewAE4R2aP4tQD",
  "key29": "2rvJBkEDUwekAnGNzszuNpiJ61DG6MSfBNzcd9Lb3mZodgKcjYsLLeVh44oAFyFLbq1MDMinetzhL3d8WyyHA9AC",
  "key30": "2rcTqPNZDaCd6S7t6ZnPELtb4tk7WdeEeMqRiiwW95thfjcyqJqHZ5p5AiHwZEpnuAK2PfH8FJTskPTyhRvU75bY",
  "key31": "67E36LZCEB6Pj615uvNGRgPgVM5DsRhRst6siKfcMtZ7fcsT4hbThwq23emLQPSCox1YiAQWWvpLoofeoG5va1xV",
  "key32": "2UThTf5oPxpRxeLMVHFSeucCK1wev3k1EZn4C5DRB38azKwCuAJitHKujH3zHsUTN5cY4AJ7iSjTA51CWvKjis1g",
  "key33": "5VD4tKPogrpoHD6mDA4c8tbeviYS6nU65wuFYChrE98KqxMtFMsfrmFCXFmEtXb2HzRswxUYvaae6hh3nedX3WEt",
  "key34": "4G9SFLSiDCtdUg1zBkU6tZdaw1TyyidWbFLt8P5itvb9dZQrdobzSgDtHfV6npjSrL1ZzPUG6sRmoeCKo5diwWVF",
  "key35": "3AnDsa7YAj4Pm5Ry6hXSAqmNbPCSYQAhCzjzXBddmd766aeZDgQundXEhDUnpHV5Ca7q16E4Ue5xMEqgEiaCjR6a",
  "key36": "2Bt7jdtWqYRzEQ5jxeCzKxAkB77XGADHhMxybccKNdm7qa9z6fGFu2MTwdgDqaJEAbzXE2juRiDU25sfPY1fbMrz",
  "key37": "6173LTE66Q3Sv4xcv45jXMHbd7mqrwA8CMES7UYPttgaLorntHfaJSuzc6LsKvZHVS8nGPqgNYy7kYbLmxjJd7R6",
  "key38": "33gdzzh8SEa5zQxRFVuSdD8KEujb6GpfZX7tUrUZhdYQzuHC6agaihSn1ctjw1E4Xow4iy3aztmyK3u2roXnUQuy",
  "key39": "3GcqJs1qH8FqM4mc5bi6WgiwoVSuVF7y9U1HJs6PkhFGSpj3fWQXtW3Lf5LUeiF2nJxbE9zSSEYMVU8tHgQsArsJ"
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
