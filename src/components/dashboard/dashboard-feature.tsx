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
    "FXLEpjdDy1UTxC4W34wZVza4o5AAFs1YcGMgwvdbnfQDpcm9Pb1kmMKFTxyzSxwSMDSPRAL3nszrzh19PwsEES3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X3snFz63jM9MiUd6S4LtCuF1DiWT6UZCcgS1VW7FE1kSeKnYbzSDtJ1euhN5qiNJyRDtEVDgAKbewyDmpd49rWT",
  "key1": "2FYrhZUY8PqhCFB1YJNWgZo71EwFBMsuaEbU2oeaYm6odWWNXRna7y8FkpPsQyLJJTgjDJWE4h1PSgLeNtvixstv",
  "key2": "zJUdRarDfE2AhdedRpWNZjgR2VMrA2UcRq5NxUyxBVVjmZtcCGUYqktgZ9o2jg5RTWAtvVNf3Bf5xoJ22UaYytJ",
  "key3": "2G5guriihmHwNg65su6EWD4C2WHpzSkCMTurHKASp7y5bGozzmiHt1uCnN6DQWSvH9kxYMwoqsyW741UgEtu3BJf",
  "key4": "4k1FAXanzkgtw7yoXc8PZAX8Z2EyiZ2ee1RqED7brWUzGxoms7u7yxsZTR7338U1XXJr7r2VRhtDmVDyagvDbxeo",
  "key5": "wXNZUEYzELYzhmeji2d23MxqZP2kghMsLd8kXLzGYEdGYZqy2NYBECxF8CJ5EngDBucXergChyVavrX8UXwcH3x",
  "key6": "4T8b7ofNgR7pGPomYskvYLc8iCwrBbbeq2hDpVV5txRLHCXyRjLtpGtNK1hMwEiRqCNAkzQQ8iKKvqWBteQwbnqk",
  "key7": "4jtME9Ln93nExXayKTKG92hBx5YCKF9CTk9z19y5x6Za8iBeMC8NYgP3W65hygRDAsoShN5WYGmC519naNPZZEvE",
  "key8": "3h3jUidi7a9KPEtwHn79zD4Tz8PaotkxrAqsEQrGE7uBBSqaUhBRL8dGuNQjGKne5Wc9WmieGtM3ZPBhZgJbC9DD",
  "key9": "xYiJ4TjWfD4kcGq1XDeBamyEUVvKSYikPHh1s6jC25ZSq5dNcrPf5DSVxLEHt69jAGPFKU93bew8eYrHCEiCwpn",
  "key10": "2iTtHPkthL5ubx28QDDPaZUJYVcrEwy3Xc4ZP7mNS554t3sCwRpQq4shfDzi2Fb3ng9krmtacGY61L5ouK1MQmL5",
  "key11": "2wdFbw7d1YV9VMLNdRhK3nMGpEy3TWcZDm3zDApbw8VHTx3uiEf2ZuDGzSiX2TGRNVwKf8QES9etoquHkBPX9U8t",
  "key12": "4hMExLYQoDES94JqXPphtnXpL7bpj5CpbavptnwgEzY4noK3m3LKEYPPeWBDhq8vwpAH5BeMpWzu5cQn4Wbqb9r",
  "key13": "48MhdFRAV7g6GjZ7Xy38Pij1Qsu4jfopYkGm7DFrCTdgdNRUcBACqFc3kX1MnSywTw5urp6tVKWDQjzUnphBVfn3",
  "key14": "5q6R6oqnHu3Fb4bCgXTgd3ZwZBXHNksoVAeLTmTXySbg9ewVMDjUcYPA8PQGwpjh9yF9hyhjczNw9d73B5cS7G4T",
  "key15": "2bP2WQtKAQEhNuPcik1FpKP9fcVuXRLTnrGMiSZrPXMauH29Trv95crWuCj1E9mTmzDZTh2bV9TqstNGaXUu8Mut",
  "key16": "a4QkQkuqvyiXQGYcyhCyE4Z2N58MPekeWLMBKxJwB5LC2Ao1TV6pD9iDM3o9yUbW8XemjkCndXyLkPWAQiyKB3G",
  "key17": "DbkAQz4SGJYHXXEeGPTcAbFpsdMRYeWxCzh9kZdEZnLsL1jPTDnYapeovWFwRK8bK1h6i4PkH5qa46Nv1BR4HtR",
  "key18": "5cPDFP8hvQGDrjP8aQ4dnskGdLf9aHDD2rGZQwt8HV4y5X3SmF9T5oxNmDR6EzgzVAjvMmjNWRTATYczyXQoGzmx",
  "key19": "57L5ZjHx9aCVksSs9U73vq1zgjbH9pY6LBxNxYsYeHdjFU1kWJXy6XbebkwYheQi5MjH7VPNVYSorBRkpiBHhs8Y",
  "key20": "4NzuZPNUV7G5LzBNucz8PzVQBfrXVDa7scNv2aFqhTidAvEmpKMX5Nma5LLQSwUrQRAKL9E5eL9joo7WPnxqR5fu",
  "key21": "4MV2mTWrKfMHznjigq7shnH1T6R5HZJKx1RwAVrBUzbizXce5MYaW2PvBRiZHg5wU4q6zTJ92iRz1dgxdbDdnzVB",
  "key22": "5aGH6VUYPa5PwnmKp7ArXqmchhvZ48L3C1MaPoRwjDJHcYDJYxBVQSrExk1gXKVX31GmMy8F3QnY5D3JGhnDE38Z",
  "key23": "3V7ignKguER8iWQFUe5MQTVuxDDhXGf8si7QfrsuefjZYYqFSHL4K4JErGPmHpvLAtPGb2Ngr7ae5bjv2KCfpJKU",
  "key24": "57PfAUYCGGdrd4pDRTLEcy4xWZPXQfwtbWbSp2JtfkRo7WTkCirKRGxMGhNaSK8jeEjdEiTgMwXPXjKDnkTdzbNo",
  "key25": "2CaqLEH9CDUEkGDuSkaVLGj6TrSKY4CGgoheek7p8BwGWpnEWrwgeuZ1BBwcFD84zutdC7a6etN9as5oJUqKTB3g",
  "key26": "5siQUwAvNJoJ6tvUEXV2YGidqRzwcSHu8jz7ecFpF7tugD8Bae2DrPVLduVMv4E4ESQZz4prbQUmzZfvF7zBFzRG",
  "key27": "5rb2in7pchGYVpMLforVNuUbUWbBcpEHipN87apnAGzR3VAuRWbxjS2d1anLczwNh6NWHwiWFxrNevqCGZmaMYWA",
  "key28": "awvaL5dFctoy8gBfRoudztXa6G1KsR1yjsZ2BTH9UcLZGMdUCj4NmM5iZrXUci11XqWyRdYwPM84whx7BQLK5Jc",
  "key29": "4JNhrGWpckRoq2HAaQGp3Y3pnRd97xYyJDKaB9ibwUVZ6wgJpJbVL2rgRQAKdA3RjaurqVs21iSV3HT5v5hLwkQk",
  "key30": "3SMHgyaddUb1LJLpy84mV8xK5vY1UDuGkD4mkSDht7cx3SU4VpcX53jY6jFiRvMLgW3HsLhdumJNjf6VfeGFp5ny",
  "key31": "5KCPWUjPJ2dfuwPszjq6qUd9aE3brEpUyqTPA33VCG6eEj5GpTbmEosXq9F8wCx46GuZ5399De9CMEUSpRnAno7d",
  "key32": "4u6d6y5uTNCJJ6zWQ5TMue4qqsTFBHvqfuFRtb3X47E63qUU8BMDt1P45A9S79caruebcLPXBnQt4W9kBHLauZN7",
  "key33": "5MEKyeEp5mMaW7gbBb4qhjx22n4GuAGVth4Tyui7c4yoCvEwbd8qnyyyMPX3hXuEGNEfXWLnNfUSPQPVVqSeZfJG",
  "key34": "4NsTJfm2rGwn4PsY95H1LmkNQabNFy2TWK6uwJfYhDfWxWEvKKvXSPYX97tqE7MHpbUMZQM8ufGpwVG6zYvsB1QP",
  "key35": "4aXUa7wsR1cL9KrFzXupjgqw3jBN3rY3eoYYpuKam629spBYPLfXU1HfbkEboz3DPCGv3kdy3nXtXajWnYFXSqdw",
  "key36": "3bDpqNZRjznCpkB9dVWmhaSzhn1BiserrrM3iJaZhfSNrZZ9GtDD2Pnj459BpmcEx4LETQ5iMEDJaS5ojquYpxEs",
  "key37": "3UrFETbRYGayR8HQdvwtH6ruAM9FPnrgodBYF9AiboNmzmmAjXkYRymWhjeVVfmq4NCfFmafpG8btjhYrs3v7AkZ",
  "key38": "23RoN4vuV86FeKCqEvhAHqAvHSc6JMzF6xYgwBNSQgsv1187JUBd3f5Pc8d4y9NDqzLgZc9YkQNPKa6u1toxDNxq",
  "key39": "4GhgP3DbQJer5m5oGnwbPxoSj4ivz1WsAiB9YciLBGXSHdoWtgV4bzjFYaDxszy4vPqBN2GcQenv3SBcQw5ta3Uq",
  "key40": "ukiFWk8XodPpNVekzHSpTiqVChjK2YsH51JhDLHfZiLQKcTEsvtymq1DK8NCxo7XKp91Nkp4UAMTda2yMmiybj6",
  "key41": "26LkFbMgg3tFfg8e6p23f8F37WGsuK1y1RfCEzWxfNxCMh3rrYwbDhmfnawPMyyPtcmopd7xTk86imJ5QP5NR4hT"
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
