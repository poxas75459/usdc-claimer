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
    "2eGRmmjydURevQA26PY2H41jhNhaRQpCxDNzR8daov5UPbrXPbeZEF4uWjeqx3ALjHv9GBCRvmAiGSwL1smsidLk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mpjwbXA9jhoN5Lh5LHTUiNdqiA8uktN44VbWTUnHYuvyNohVrTq6u5142QfyTrqr3r9KjRfSbBJsbci3mVCqf6t",
  "key1": "4grrPyvJSYpRnPwhYve3gWJLweiHq5M5LSMm76u2unjw4voHsuA3gGueK8ZnUqc2VEcWYXFjLDkUBX2vDj7ePER2",
  "key2": "4BVwYfE6mq2uEEKdmJTduFXUowZqPrdhaSMFU7YHwRJ715eb8ua35jcSHQZnGqB8L13zV1bNSeaUosbKfL8gBApa",
  "key3": "3JBfVup9wUQgjDAQm4bW9JgVPmJCa2tmfepJpjj2KcUo3XqYEGRzRXoKTMQBoodVXMTfiLdUJ9z8uTj1nRoHNNo6",
  "key4": "2HyzxGGPmTJoyoW5PigPHn1uLmRjw3g5dqFU61n65N2wVgHkaXxRA5v8P5Aw7YhhpoMAKkYsPJ28T6uwEjFAK7R9",
  "key5": "669Wr8BPEfR5FzP4TyNP8hR5n8g1pAQhc2cgsYAGgieU3CY6BoRzbS6HL873qGNk3o5px3WYiiTgAqJzNzDwgHwj",
  "key6": "5Ar93h9QWeeR4BhQbH1xXziWuVxrMfJgNYoWKsNG3mEroiTETQGLLi9qcgiAhuJzBkgdDs8XBZn2AESpURdei75h",
  "key7": "2wcjzA9BgSB4Rgzc3N9EkpyCBnXYqPGe5iCGv2bZpqUaXj3qcgh1Re9uZm6UhG4ECJoHnfbNpJSPkx7onVfSy539",
  "key8": "2cJQW2U1LdWmyZCFRCM91ZjLJPEqpk2ASm35FwwSZZaQpB5pa2zBgmL9hcBJ3pn2TrJT5jmEH3zQHX24fMjjCQxw",
  "key9": "2ZkF4sFnReNniELdMi4GHhydqeHNp3zLbxbjSP4EVufngEKiWW87671HBMcb341SyaPiEfCr1EAuw1kUuo9dLJ5a",
  "key10": "2wePCo8RaXfkXMwzkkS5NVePW9EoQsnk1mibRLvsYCCwY42jZ5yJSwSG3A8qQ5MSacUEprV9MjNL21nikSQnrqjz",
  "key11": "cxDiqKvhVNTxEjsYtgvKJcGDzGbEkSUCAG7bdeX42wfijVceobDcNvoPdizpHe7sUvA1krPKTBKZdB84kVVWdk9",
  "key12": "2Qwq1JEXmFELQgdSmH4bxnAXUzgNgyWqH9ggJywUAdUfmW9ZpJ17QBi9k9Zvreo9EjKsUjaD7JG3AAABheyD69sk",
  "key13": "3fdEFDGK6Wh5gr9iGYcCx59GGvxDRmgncwXvRQfQZMoZD7NmALuaH9m9NpQNn85DrwCHHpXRgeAtkdkuQrnCdaLS",
  "key14": "2wBg2jh1wbmqiUYQnNmnRwwsocwG3oUHBpBqx6EnX6HHc7GB2TQaGhPyUVvWTvMr1Tx3sS7gdPuf69Z3xcssjpPH",
  "key15": "26eQQNsA55pjLRyUBF1GFDCmzKxGJAH26LiefQDBpSQjgdnWg3bK8MdcLwuXiVX9va7sLcGJopb1iS8AD2djbChn",
  "key16": "cBAEP5TPSfi4LQM2qjgQr9aVTSFAvRQMkcbVpTod898hT4hwqfiLaUqhWdrA8f5UXgg4sMPSevMGkJBbnULrMMr",
  "key17": "4TMJd49hH6dWQjjeZRFkriDB8ZDdS6aN3zKPHm9wgv3kZFUGGuZtUjFdNobYVZJpStstG6MJMNFXxi9K4P4F1ugi",
  "key18": "3MDi2YJgfrtoEfiaQT9vCfpmQarVWB4EBAGVjrYgW9Hurfr3uXM4cF1Q9mxNd2ro7BVSLeF8SRJHXXQZSTyxxT3B",
  "key19": "3y93q9hgH7ixKV3cveJe2vHJoutT8NJhZpwyWABfkomJsAYARzyzWnW9tuxLVvpBwqPuuef4fhsPR6c78mKEvAQ8",
  "key20": "4sVhqaeTA1i6EXfjjyWPv1QRFCoWsWtCYT8WPAz2Fnftvf8XFgE1Vj8mDL1ViT9dFGbXLRHwWWUcQSP6QFqSJgF",
  "key21": "3phjcooKhTaH6VWdab3JdT5eCTEsHQtn2y6SHAdW7qvEceKHnfuirTXxjWESDPc7nKfYkHW86UfnmzD5xzwv7s7m",
  "key22": "4DL2y4S1qHqrtCqnQuJtXgNcG6kwKdtboe3hPmM335CHAg9SRvGK7oHEhQkHAa1PnC5zQHSdzFSovVRTMMy9QbPc",
  "key23": "4x3L8UGXLa8PkYDRZ7kMpMVP2uY6qcCgDZ77HYVQWScoxEuMh3tmmtL1hpsvwVQQdka4xTuAh68MKjUkiUyJyBrj",
  "key24": "WZLvXD3X2MpNn9Gcw8ENwTJwCjGyGwxeRDDxQcwfvgn445obnrtpUNFNevxs1STYWbihP4KXDF95RKwsxGSWrUU",
  "key25": "4X92odYQmNynqhckFwJ9muRdzn1omLmuwLC7s67r8Hn5oCYhanUhCEXQMN7uhhUkG8Vn8TocSbHQeyrxMMuEDbuA",
  "key26": "tPr9R4r9YTxjasJcgdoW4aeEknCKHnwbwzp1gHqhD7jbY1XBXzzhPE1Ws29yNE2WfuGgSzjZdsf46c3kgCktw69",
  "key27": "LKjjJKznfM4ZEidP2Qqi4JHvxZkyEhtf9ajW3uhUKHUD93JrGW6rSW7wzyP5xTeB9KyAXBDV8untMkZ37iuRaGF",
  "key28": "65REBMs7kyStPqYaB2HjYzHUdSGK4URsdfywZFqM4R3tCStjv1pyXGokRBykvvNLJkc26WVjVEh96c3GSkjnBrTA",
  "key29": "4zV5Z8STQrjTkrEjx7faR57WfpQacDZJEF3xopZAzmyZtt6cDFefkyoaTNNLiGCp8TqFh69g12MF8boF4wVPwhbg",
  "key30": "5fGJDDgW4Fhk7JJq5cWq6DAWH2UT6NcNMrJPSjecDWVEnibT31DtsBAGjv64KhS7xmXw2ukNjB8PCzwepeh5VVmH",
  "key31": "5K1N7sKz6MHDZa4EBTGaXT2MuUd2zZ7XXqNBtaZN51CKT3KmanbHc52ALRe3dRzEjN1GfHjyFXB9sYthFTjCnjG9",
  "key32": "4W3x8e2t5hbHWCNJAA95VK7dc24dq3kDZXUbLBGwmr7T2Lkn3Ca2N3WCDF8yMmToEr7MvgnKCkTcoasgyvz79xQe",
  "key33": "4wjzksVLKSpymVmw3FQMTvvA11HgbQiR2cRMu4SYKpMgbCPkGAhkxfuKKLwzPf8QC1REXqZjaG3T7eZb7eghcANA",
  "key34": "39MCdyopeqDc88xYppY4P91gTbwBo7JgxtFF3v1LPj3TxR7Ac2Uyh1JM3eTVMajLdgvnagb2ukQzsUAprTiFAVYv",
  "key35": "VZBVcRReP66MgFFsWUM93cTjg7zL4woq12MYXDopQrdaADGQJqhnQqmBY6oQFyMrGLu4YMYxaoo3EDb8BNkm3gR",
  "key36": "3ggxRLt9wmdAHpqQuRLADjFTPRrmfuJk6CvbXMxaFS8buS5dwLWyKzj1pk4C8mY4ZiidiUPgNcDj6S6WYkcujXfY",
  "key37": "UnfWXdmsmywdPoEp9EZgRvaW2wVDvf2LeDTHatnTjDHN1Mzi7JZA5PzkCEV2DJDmyb1PtreWEY7E2G4JyQTjeLj",
  "key38": "3tDAd7EwaWqCbcDZZ28oN3CTy7eA5JqWZ91Y1VvFuDmQZSStUWdwisskqaKMoJ8x6CttB4DKt8UoUMoSy1XfDEaS"
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
