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
    "bgRY4t8qL1YphUSEivmTayofqczbN6bVQeAPq3UeDCKBjMe2tzo8ZtCiwofxfKcgMNsn6V2LxnoP9VTSwpTWbkh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W7zccKumYhyqRhSWUBkvUyEeHZSGxE4KQowBgDeDRyrjiRaS2kELJwaZR1dnMwsVerdsKwTFwnH6opgjJ8FRYFb",
  "key1": "5HtnAihg3G5M8DGtH4SPgR7fFqe4nYFbapRaByfjUUAxsvFruWEjzEcoQ8nrkQJ55MwNi2wa5EUvztMhtr9jSDP1",
  "key2": "4Ya9poGaGaUcGyPs7nrVwr1cLShikPouxFcqVFLz91eXLY5fBUc2HFCR5wQvgURjoT7HZ23xFw1TU99zjmCqU2K1",
  "key3": "3KhLWT5J549mGp7avJL5o84DGRh5xEc63DWxgBGEbwT1EVSk8EbfTrc6aUD7Jd4jXa5UmvN7gNehJYfyWBL4BEnM",
  "key4": "4Xog6VdswnDzZMXUZ36BtzuJuNb4jApQppN5afxfx8aJ9qWTpkoJinCLH9HtHQMLppoNte2xMYGVzNBcog1a8R8y",
  "key5": "2B9iCvRLvuMBB2p6WqTuirTZzK6U33VbzEvs4sqGbXiBiFXt7uzk19JHBgM7atgfiykVDUMnwptRoFLGajdfHgRS",
  "key6": "24KoYcD7chQbV44Rn7JsEEzd1KXWQxWmHj4NcpJ2ArkK9zbJX8DEriiJUUePpDpXSizG268uPXCo9fCj6w6GonLN",
  "key7": "5pjaQYxUQEPhAUafm1DD5Wv8fRijnAXGn7pxEXtpFfu5vfJGzGdnb69WZSoLBwzMExBsUMzPfqyBGxXggRvSJ81Z",
  "key8": "4VDz2FpQHxFuX7rUWGKCS6vHVLU5okKC45XMgtUFYrekKqd5stjS1YSY8qi2rHzsMEsQvq3ndPbcwZqoDMVLGtqq",
  "key9": "5hSE2RUnU4wqwg8XrgeAs4krYohkT6W9PAdUqVHwa2zDbeHLBzpWEoguPPPLT6tNNir94af1xm1BcgCbnUkeWsN7",
  "key10": "23GZARPUT6uE8nYneaioeeG81VMFn3pJcsEgo3157KVDBTcpbZHzwp9xM6bNGm3tPr7ZTfKhU7c7UdWpByZ26x5m",
  "key11": "2Kg2yJXaEHdxkP5upB1Tyuq2pq6asrkZYN3GeDFVgBv6ne8LEscR4rrhdkTEw8f8bHNaMpNpkQDLSkafyzgusJS4",
  "key12": "3RTVdX68o8vZ6UZCjsQo78bkRCusA6QcRWEff1FZA5qRULRL3yqP4ABPpY3p6op93hQcSJ6eYNPWkfUhQDP5cNTh",
  "key13": "4SHQ2FUWq5vQ2RNTpaKF2jnHfWmgj8aUpvX9oRmaCXwDHKYPiuZFPFuiEbTGxYts5E1ZNk37cSVB386rJxhnxEMt",
  "key14": "4MZrzPxSnvcRuVWxX1A5gHi4eZi8Bz79mp43SFz4YEvoVCo3WiU37DXf1p2FLrQiBLZHxSyvLZRvS9dfZ1YW3tzv",
  "key15": "4gnySpKEaqvvJcSHcHzCLttNtBgQ1srQCoxVEoFD6Fay6yRJ192RR3eW1gqbEjeqqNw4S6AjauLiQEgEPqUzu3nD",
  "key16": "HWBWXmzZ7Lxn3yditPWbFxKSwHJa3Vree7e7dweCqLMpeWGP86bm16ZHhb5DTQHiseoYioy1VWeUcUhJvELzCfD",
  "key17": "4ELNG53fjB1v7es7oC1UKF5tmE1CcGTGbhLTH1NuagKNjcvorLawEUr1UYQyChSGZjtxhtqTSBNaTHD9rDtnageq",
  "key18": "3DrdRjUNB3SEeyhvgafbRAvCqCPDeX9ijH5R1ArQGu7pvn2bFcmL71h6YcpvYdNu9Bdt76TiVD7V7QT51GkYVmZZ",
  "key19": "2jAy2Q6thKq7yvcMFbuWKgruM2Ec7k7mqYWZC8vyqa3D2EgLPc4jvPsiYkyWUR5NB8bJUPXhVndBqs3xhVzrUe8K",
  "key20": "3XQnAtcpLzK4RVw3Ynvmkr1Qn7pQdKgDkQtRytoMUqyd384M8uR272iUx2FEbwXwD8Hn1tX6kDQsgNwMZgC2ZQeY",
  "key21": "3bLE5eJ2CYmJbYLkHnoEMi82MeuJ65QwXDNuvPMYp1oviTfd6MxTF5HdhHafQMYqENQoCtrkufJJdFx4urBWVxhz",
  "key22": "ZzGrFiMz9sRsuppigpCXPLu377FxM8GntVcEvh1US5Ce7sApXFtcbBKqgLR7UfFV5RayuKW9KgPgabYJvLGpJfQ",
  "key23": "3tk1tnyE2XmX4WqCLyiCCqzGWiebV3DASS2wv9XvGN4zgvdZLQjKboULKUp24EnKreDwPvUHDbaQ6R7A2WczrifZ",
  "key24": "4LR3dZkvPshWsMHB1CLxWf2fCuKpAVzoTbtY5jUyLBW516AD3utagM87evmPvrouTxidxxW5nxr4XfDXk3ayxCKb",
  "key25": "3iVEyD62Up1CP7fDMt2CoZTJQaBYDud9fyS1YqKoN9fi1JJnPoi2Fx8sTechN3eLvLozcbhnx3yGpi6SQxitgcUD",
  "key26": "2TkzMYXMY9bACw1qtKtzduiAuQD565UTNrCE5r31GVUkBUK8wDQ2VB43qS5MpgALhpEvkoUAsxdqsfJfbXQDKdGW",
  "key27": "2dNwEpuR84FwiVcZMew8RXHZaWz8BQuDhP7HDuoyHeQK95HnmvBm758LPVeYHbPmc75h4Sgnty2LMqsKAUrbC4LT",
  "key28": "3C9QQ9d5g8TVsE9BfuRvrHjBLjDSETKnwL4ftBNM4N2A64z5D61T36CY1pbD1hExHXA323XYmPhGoSwqEyULEL2s",
  "key29": "2SLQcKiim2XNz4vqqPySh3shPJhJiVxCoEZKXxZDbovKwHj9Sqwzt65ZT3VuEDcnCRKZkEhE3fk5iPjVhNHhRSXD",
  "key30": "2T5jUDhZ2qV5S5Kh1XnwAMa1oymzqFN8BCqETAn6UeU9xK4KwdiJuoLxyFE7QvS8HGyvufsB3gWfeJxKgnjEKZfR",
  "key31": "4Q9M2dvwMh1QcWa5aTTuwr4XczrfvKpqjgbzhK6ZR6sxx2GeZPUtNtgPHtTuVa9Y2zYwM7CE3VHrWGzyUU7aoPZY",
  "key32": "CvoPwpb43DSc43Czyu6jJt7477wrQvsyTKiE3RYMLurjnC7grHDvNmfCedXHf7wiTAnHEUm4yczzR1HJaFjDFv5",
  "key33": "2LghRX6EQKBtW5qsxHnQKEPWyGdCbqiHWQhhGAjmuJEh8ZUWJ1xknc5v5A98x1pdzAArGCxnsuoAiEfCeXgtD5sA",
  "key34": "3YMuvgCjCRhMPtbxRysCZAT4Ap8KRRHXSzyNdt2FcZJ3zqWPjhMWgXrEYJBCJMRPNFzfryD949upx5CdDhzDF1om",
  "key35": "332zts4VkWKf7TxLHBN3LJG5iG1BhN57uWwjqx8rhMaFn7EspwBanknnTE211ZQt1KaF74bMb7CZwzk6yKN5vXbQ",
  "key36": "5nLECQ5ykbJmKajgcghKotHu3CqoCxwgZKDzU4frV1eEVXXdP6eYYoGjsUDfCnQKqBpgCuMAk3kD9VhMHpfvtP7q",
  "key37": "22UGzQaFV8pfpeeg3ooDjyhuNzSFbn5xcD3QcBtoxatptvZZM3CaodVb53o5p73a9aU466sg2ExbURYXYXTAYnN3",
  "key38": "3ZFkVZUr82vPABHPPrDZ7Fhk7ZgBvSvpzHeG7ggdm6y5vJ1zDhg3kSmcQNaD8ndNU7GHbDya4QzoLjTw72Vxvx48",
  "key39": "28miTwaHdvtGLrcwnH8b3m8XuCQiXSWYkb4jvrNCkhjrPxy5sRkvuEtiuvZkcM7GbNmEvZgdqLw4nYP4MiLHjU2b",
  "key40": "3nqhK4gayyDerS67Vhf9mShYB9Kqnrz9DyMNCxKcAhbAXhr3ebuPhSbKy7ESGhGZF3PnSgZ56rfsrax8uUoUnBTy",
  "key41": "5MD9DnxtXtjT76ZKzdDccUcpz5iUJyFbyBmEaHBp6hd4Qi4QoVCWth9ne4TXtcoExXRHWbiXdcKde1ZdN7zxqivN",
  "key42": "3jTSWRXYP5E3G92mWpquPvzqHiig6ftMBy8apxSDenYKvbD9idZaGjWzmxoratpwoeV1zoiZvRSK1qykhYm14cB7"
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
