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
    "3bXXq8i5gnRfwYout7TEGF6ep44FJSLnCfr2cK6xGnTdK1QMPN1afW21ou9hjXZ1DN9wqipRXQvh1rfpwFKMUWEq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2utQ6yx7YYbwQKV8oVPRagQBRNccCFQAfqh7Y2Jzz3r2KbkyA45y5TR4vqota2DiToJLjofwdZtmrfjjyoBU7S9Q",
  "key1": "4U2RsK1YcrgkANLzRQfMcHp2XfKgMAjQrtHiKb9Lzb8Tr1dgWXZzLWMS643hPzG2FUWyfzDXpBt87d6iJzDVkUL9",
  "key2": "2kXjrSuSQfzcrsf9XTNZArap458qg4HwgnUvGYnPFXkectYgUX3vPAeHgvng2sKKbMJZfSrDByC4sSKT3LuiZ9RT",
  "key3": "BRYsCydrQbsYtTmiD4kkNJxNrUgvy58co8dFaphSdCFKfGzoKGLGHLE267e3xcMGbkgLSwtkfMVeyXjdkjw287S",
  "key4": "3ChiA6oV4SrJNk6q887vRknNr3bx3ReeNniddB8vT2sjtsDQvVqwDAoYRgk3dt75Vs8wK2FvaRatxpGMWsck5ySj",
  "key5": "5izY4fk6HH3a1gHKtjB24PWhDtdWFtAAS9NZa22ECXzmVWUsCVSP3nB46Lv2XauBvWSmPczXigDQvhJdV6J6QnX3",
  "key6": "4vvqE1VJQ7yNcWETmM6h445xDELhNW63eQNV7BPC1iteTiMPC3MUbhQ8GxXZEvxLoKRLCZUzVu6973UzQxvkpmZw",
  "key7": "PC12qcJwzFjybGuYmfEkMNLY18pnfFSTWnkHKuZq3rsXAejT39moZ2AEF1PASz9TwGArY4Ay9c1DjpcjgXGsJsQ",
  "key8": "3PLuwTb5d4YF189aFuJj3tZdzuNnh15gRcdZ8sZXLHqoytkkSMq6wsWQ1ha4pENnNSWRnYaj4X3XTGfYAerLNbM3",
  "key9": "4DRW5PfCAgNRiS3qfF35upKhr8mtAxhj6wf2ostY3D9VtfjjbSFb4byQz95TX3P2HtMKGGiWZLrMtgxhS1jrjMA4",
  "key10": "vp9uwZWgc1ch4PDrUtdVzTRcw7srkHkRtqLN9y1o96jpEwJdHKPo7Fpm9UXNyaoyYg8RCUFGxRmnS1GQtJz4ysZ",
  "key11": "2U4p6hyuAbajybBPwL7UYWdJYwPQ4WBM3LW79sXqQ5mdwxxMAg2CeXr3jyHtyeccfYasjaNXH1dYhXzqeoTALZMf",
  "key12": "65Rtnvdc2z6gnaC2L7vcetnZh8p51YBDXm8oP77863ebQG99iNxjqFgYxxNToEVfwaojjGf7PGAgLqNZMKxA4f1R",
  "key13": "4qxqm6TZ9hzPCRK7Yw6F1aXP1HCmUkM3TGePRMf8e9umrYzTXKuwxxLZyzCQGHmi13BcLm1dJC9oMs2Pa7a2yVnv",
  "key14": "5PtmD8cvL2iX3Xj9hMmGwGXVcXzBL1xdoj5jS96sfup5xmCmjxdomnaXSXtMhtKn59115fzpeKYbstFBGgXHDK6u",
  "key15": "3Sw37aRfPa4F1UVAP2Bziie3a2HnjaPfLJfcoR8puRnn3nRkmp6DxpwZW11K5PHKZfp9NwYD1Z6xzbMyu4vat6zd",
  "key16": "3L7mc28e7Wkqg7TWHjxqmrjMdGseaCe8teA9iUUdu6Gn7W9M1nFwFZRL3kVrDtJV81WfpLBq4JJaNGde5JgJbgpE",
  "key17": "AvTxvVa3fZ7Y7kkaSzRP5iA32Czn3mQTGNQAPGFhWB4mCoDjFCp3HX8VmagVMJrp4ZpRG1rcQFHaW2ETJeKXhcp",
  "key18": "2QquZ1jfzacGcPbbXcgqcragP2y3TspYLU45Qhi9EZt9dFoh7c3BqR4dHEXEVUhSdNsGpScZseJGE9CRoA6zWts6",
  "key19": "5Z9vEcCzmrhxwaRQ3BmjR4FwJqkLTw2GdvixMgY3NAMcBKiEtYsEfvcNSXa8TcQH3NrQZb2BwxnYpKsC12BGTw9w",
  "key20": "4BuPV9WCMdz3WKKDgvERCGiCX5gJcqM3eCwUYNDSEkGYTiXH5ABZY2ET46sMK8723Ve3rerv2xdGHKcDKPKvPFoj",
  "key21": "rfoKHRQd3dptuwrHDgUhgjdTjo6Qgxp4UEyaXknKEfqfccCbWVt7f48SysHPPkZYdYquMwSoCv1N8ayqZSUjWKz",
  "key22": "URnnXb62yLrXzzSAuapPDEHEWEH9aRd3vt7ApWx17jKeRt6pcma4dWyHEX5KLGqQZiwEqANs3TRSvNcJcGHN78U",
  "key23": "nExEZbng1XCPDgjSySGZUN1oVGEP1uW233A2arcwErKZNZfnm3RnRBth5wAFNTKc24ytrc7yQ7wxySmhjehXL6t",
  "key24": "2DjdV5XwbMWufYFRyYUWnVRZ1EU8NWczY6pdzXNdhecfQLcGoxPnSAGXDGZ9dPqQuuWpy3YSSEhni25VTyBekQPJ",
  "key25": "66A2ywGTqSgEfJCVWy1A7eRQEZUHZsCNQBEzt7apX9DJo3J61z83NgpJt6c3uEGFP1RqaKLVtWFJe1fD1LBxnyii",
  "key26": "2LQ7gXjf6dQgM8AT6MENF7zgL2kWmwPbPATqa3TT1HoDqsCHUwBoBBRNHJUPUaFhyFgDhV9Z8HuuPFTDs4Np6Xwz",
  "key27": "3y63sEfHEHHYqXENUToTwwv7zdSHBm5zuJdtvaTkkk2PdvBbKMGHhtHLuPd57vsDyTiBwyhKySRExs3qL2HTmDhh",
  "key28": "wcSMmMmMUjz5jigdvon2ZtQFu2tyj3fDX1LjWe6QRhegJd5cxCxXDJV3EsmRTxCBoeaw8Ya1LxHHcU6z8zG8z8E",
  "key29": "4cN8ujemBhdsNJroNsprgitY6AydyKtftuMa4wUhEeZ2GVnQQYD2C8HRcrY63dZnQiRmwx6q57dwSJ7oABocAWyW",
  "key30": "4e7GaSXmf3WF59pnfZb2HyxKWreNMetbzDaCzasqvm85bEgnFDbxLkdMf9mxJu7A6fSKFoL2cHPHmXhC2Yzno3ma",
  "key31": "3eELk7GAbJNiTHfSbGzUB5zyuKdHK5jR6XwdTcqj5459FM1rBKrfG6u3dn5gKQft9PyEFhWKNqv1FG7J8ExLfu1J",
  "key32": "4frFuX9oRs6TABXW3bQ7mvmJu6GVQNjS5kSHJ1PsktpR6tFvx2yr6s1dZaypkcfq6WkWw2ZRAk6x8936sT8UZaFd",
  "key33": "cGE1QsSZ658pnFx6NGeGRt4AjYYcfruFXKvvert9WaEHSkjxSNy9QL9taStwmbmna6GEAmMv6pZDSPnU5CAa8ps",
  "key34": "dTWPLdytYSgTYmi6novddciK3UUA8oikm4vFBX2x5gRzJ7fc7CqQXpiRi3uT47sr2gZjdieLb6wgPeA6XB5oweD",
  "key35": "2xsJKU5g9S6QEhK14ufWo37M8Z5tjEw7Emp1NUwSRgWNWTtzNbqEJBZK3HHQ6EKkHpKJi7ZXt33NnbPkDewkwnDd",
  "key36": "4Vz6FSYXT4da2qh2NPx3AS3R6boEs3nN5TArvTB8tiRLKiyLe2Kd9WktgFgwz7CRppStzR4LTQESyYbiqQCpFJaf",
  "key37": "5zxJqoR1qcSeRC256Sqaxfi5ocUnRwid4LrEbXrBHCZczRgXZF1hDBrRneSQZxYribVxS6eFQcgvmWXAeLXm2d7A",
  "key38": "48T9VMmxqrPKoJp6GT28eFxEBZgaGpK3SGf3maVrY5ATBceohzKep8QWfcdgLfmdrYENyqrGsdwohZH8DPp4zATV",
  "key39": "3dZtvsFh5RWFqBKLcxN7Ktag2ELU4grA9ZdNkE6v7VJY6bLVfbYB6adkwSQ4k62HjxcFHdK56iwuPb627hJAsoTz",
  "key40": "3zZJu2bbJzmtu73ED8PoTDYBsDUKvVxkfwoMFc47PF13ubFRmLNTwrgnPMfy9rfHuMNETL2qWjmQr3tUFhHdaon4",
  "key41": "4UtgZT5SdsDnyd1Ti6LCA2HDEH5rWU5PEHfHus5ZZyhu5gwMZ76B3AwAkYbPJoY6BweRC4hCEEsKkx5XX2ksbfvU",
  "key42": "5enw88bwsknASyNSDch5AMChkXeDFQDTsv2KdHrgou2qKit9tra5vJ4G6GZeJfyCDq11Z9FFGkM7batQTKQRvP5h",
  "key43": "4jYdPx6h5ZT8q34RaeEpSZAFRPFaWZgDNAVF9LqWusaV9ptC88Zt7Z395T1Ys1QfJgvz7zVNTrsgRzQwMJXWxDkt",
  "key44": "3D22P9o469KmpCW5vH4RgHB5RYLF2mjcqX3dtwqLzB51zgV26GvczPttb4uLMiVMTaGmFtyF6PUWdUxPhxiwFXqo",
  "key45": "fyBjamhMpaX9yg1HFDf3x1sfbKpSGXr5thJfQPs8DH138Lvj3BSyow5wSL7Sj9qohCZzhWtyRjQ4ohLFndE487P"
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
