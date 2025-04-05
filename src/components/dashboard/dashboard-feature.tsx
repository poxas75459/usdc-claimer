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
    "kCandnDjA97cvbfqtLgbTKDxi14F6eSQGduHQbUF1rMo9JZMpbnRtSQHFhbfkpVNZyvZkFceoCKPR7D5PeyFoxX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9anqY9RTsMhK9vPqKunVn7iNm7M7HxGzG1kv84hu4bfjG3Y75YtRBhkyUAKwu4XDvj5prLu9Y26XV1P6MZsSoUT",
  "key1": "2GiV6hGoDYHkAwd6GYSvyJXFvVYFZqvEWinHUUrt1Rqpn5CopaS8CJtR5UkapTihc3ZwzJMcAQuVarUNeXNdZGsA",
  "key2": "26VbFGAk5QjjMY6mVWvuF8tXvE3EoYHAbmHdWb6knLm858ajGw1trYJacfiw1mReKCfoSwFmAHSvoq4daicJ6WdR",
  "key3": "3u15DGi4kyVyqkG1HFPSGwYGWGJBGDGoUdg7yTzGNXwjSjTJjjmDH9yuxBm9cSeJi87q9DGDV7oNjhP61AR9QM1G",
  "key4": "58zHembmTk6MBdSxYhiL8ed3JDao9gxgDJ5ZydoMLHPcHy2Z2RYu7dtWNWrpfNpbeNX8adyLooM6fQA7Z2gXsZyZ",
  "key5": "Tq5PqpbBnc3s3i81C9b3VtDzPRmt45ywYR395DqrJwCUNeGWyzXNfNSmgWJNHkYRhdNSnrd3JJwYJ7Tdp6icZ3e",
  "key6": "4az6sv9ogU6AnCT67MF8e9SN82ZYNUhjqeL5B2WK54HE2HAu84eCegAag7s68Pgj8234GVezughEdfrC597bSxJh",
  "key7": "32FEFijJPD1NhNDs511FprkPVCNZRAiLeWsLPQdsjghG8H57ThTSCSaaAbzkrxQJHujPGEcA8A85rVN4oSFCZinG",
  "key8": "4LAo3vPBiY7diuqJADsMj2UmTgZu8bFVZUFLsp6UmSN9hkxmzp5tQL8azJQvFF2VxpnpKL6zU5KSg5pLqfawzT2n",
  "key9": "38r7cKFTzjPkbbUGpvqpHwvjUZCg3UjJSoYZUNN4hw6ZqXarkSZ8kDY36ZmcsxL6RXqFSMJDv1tdLGmdmUvdMxDF",
  "key10": "4Jz6Q2eXRofWrd2z31kjMP9MA1z35XJiCWG4o2qhbTsi996ffvEQk6dKirSLJN1zEmM1g3Sc9eT2QMMKwUjK5zr9",
  "key11": "hRceiEi3KZkxkupgcSLqvzHbWBo51KvMq4GQUTpnLVCJqJadd2mv7XXEzXaEp5JoW7KRks9goN72RnCz12d3sfp",
  "key12": "3DTGeykJLp52Yo3LnT3G6mjhMi3WVnsTLWnfZZeXz6gNSacC3k5gaMRNw2T6kzBKrfwTFoSF8zJs9uVDNitGzyDT",
  "key13": "4YZaNkrnDDcHb5ZD7SGRediH5dZFD1WPabGC9YkVexWAsCxwyjJUKeWsmW1x7iM5HcyjFQXsgZqv5geoX9hG4Xry",
  "key14": "2WgVbNt7nSTNFbhxHZFyjVfFchh3NBgMY7WHh3dwvkCUrhySKUu7hbmMbbtXWo2TSR2F2BZ6ZtAZZWXKwaBJ7QJv",
  "key15": "goq7QdPTWKZA4bHvvVWAzGK8rPt4Gj5MqViLKsNVsPeQquXc8coFHtEaLTq3YBXByRTFrXp2K6cuPuygBZvXQSL",
  "key16": "3p56imsZWFVV8DUTzVevuiDpMucMqjav6D6biaHNmXjPfmLiJ1JuMQqborVeVYTNUJRWrbUeyAgUrTXL21mEYfq3",
  "key17": "3jFNGMm2zxsxtvHjXsg1HGYJt4BL5pdsy4e3zaxSwW84o2ncPVsBGAqBwWXqnwUreH7xWUDS2wD3qYj4isQbcEac",
  "key18": "2BQVhuWqB1Uij3Qv4HdeBbXu6M5dGdpdtbLPMyrdr1CtxWumoDexkZPnd3usaDK5Hz1uQ5jEzn93zBERS18W8HN4",
  "key19": "5VnvhRStYigFvevezzV9YCtmwqc2FEU2nNS4rrevEQWEfouxLQpjNBXnwSLL4AdyFcpHcgBGcio6CKm1BAegFGUj",
  "key20": "5PakgwzCjGG9MTYPBRPmpqrCSe4vchXWvuhwQ8HJwG726RwzRnemxnTH1QCRHD91c8YRheCbfFgaRZqwo7a65tVR",
  "key21": "WTWGoVyzirV5DBHj9RCttdNVx7Xmzj6Cpwoq4QaBuZqmPMa77KcpPSNobp3t3qsfprmn3bJHRhxYBB5izMVoTsF",
  "key22": "3FCmz71styxHEBUCJSPesiFuTNFzFgwAoVTFzxatjtiZZcZK7fhEeVY9GgproYGafEupoTesT5tPJLzMxrpnfLwK",
  "key23": "n4GCcR9SWentVyNKbQkG4RvQqdRZyUtefQCYRuJPgkHURV1ZQLeFMjq1pcvdrjXmqo49iYVpP1Lc1dPWZJx6PZy",
  "key24": "4SVrpKNoSJL6Su2apH2hmJ3oWqnus5pBZiX99LDuqk98XJua4B1pnDk9HHyXUD9HyjtbvecWftmap9DpAZQTeG4t",
  "key25": "5jonPcfeUQBZRZgCSUyRQ32PEP5mEyBg5oWjWfTmsPbhZSrU7ecDLEMjA2KnUNdqS8UD4xVd8zqbQFPwDWXwNsNM",
  "key26": "3Kd5LGqNWn3pTE4NSxy8Pchc6ixyZpWc7ysBGpWamC1q7iJwQUMn5jExS1fQV8ZZNrkyWMa2tUk87DtCk3od4e9L",
  "key27": "2PSt1U5B9zGCk3KN5ciJcfh1Jz6fifWMHvkmsR8eGWMB4pB59k7ru7VPLZK9wBTM4NE1ZjQtykhJ3tzLZFqYLzFg",
  "key28": "3nBudDpEdz4BgeVESx6MFbqRvRGaaa22YBgGq4t1yMLdCGtMBfnujmJqeZnrjezkKuSe4wX2kh8prLKGkRHUqnPp",
  "key29": "6ukJ8YWvwkoJCXETHgsN5R5F9xxaZv6qdsgic4yBsT2EvFpCVzj4PDmXy65EjWbBCWHxhLswfvJnr6yc8nvQGsp",
  "key30": "53NcFnhTz4duUzXHyusHAGqZ8AKPF1e4ic4Jb81jK3CWDb3wJXAw7szsmXEQZ6q6wugmKQtDoQsm8bZRbWzEcBUn",
  "key31": "2gZbbW8tXaigkwufzTejF5ivaAokuH48jJtgitWwSUmpGJBJhZ942GVFf5dQ9CJnRkQ9rufrf2bLahkEsreHnEeb",
  "key32": "55bdrUGkxqru8gRP6WFeRs6HyzL3F9rRCqHNnwc8hVCrTcnaKbfACZs8Gsv49pr31Eo2wDDSUuSPtC8kc1KFe5VX",
  "key33": "3kSYmiMnVf2epyYVksUJveULCdkEhzsCeQ1jWgMcG3DkoVR8p2tqvENCedRU8D5uw5S4yyFp4eRJYj8Yk8xs8Srv",
  "key34": "3T2eSGjAKpYCJqeFJmznHyjbJd1KxVrX8yPHTQZaLdP68VbRFjdaKT4FmtpAY731kxtd1m4SanpDnFqmYEo2fEgc",
  "key35": "R4nauei4qvWYgtoKTtRHgfPXsdiQ3vKWFRXj3CB9ijeHZNuNdYvsYzhqpYtAYqb4MKYe8cseCvY6RqUSLX1praA",
  "key36": "2nWJkH26Lg1SWpt7zdxd3rfEaxp3sMqaJEdhC2EC1kgKstfUkeSgMwpgP2ngDs7eYFd4KnVi5jTbkVAp1ccdrWvg",
  "key37": "27T8yULvF4wjgRsFZaxcL7AqrKLnC9F5iDpmNLWKXLAwcc7GiJJxmSzay7nNJy3aGwa8DkiRhDDdXQ6KAXy3MSxz",
  "key38": "qhZdt11U6MkHAutLbdx2N8Nbdrt2oUwK4ETHjJwVdyciyAfonEx3jQwqt9HoQQAobsuyhZmtikjLScBAJ2w65uY",
  "key39": "4KzF8VqtWr4Y4u6vSqTaQD17cNPDmuV1s4f6ue2h7jQvt5MtP8JoHJYf3TAFh1BAQzwaSLd59u62Lx5inQNnBvfb",
  "key40": "4CveeLcjYv3aSoJpW6Mypbyzu83iNFbPmVapdNoXnsaC3D6NfA9nEdNXjaNF8r12QYarjNHxiyfrm2VdwR8ygsDB",
  "key41": "66WXU2UspMWDcnpqw59cqk7Dqbr4iFqnxLn925KY33L5JXAZm1QssLUi3FU6jyaZd7k3gAhcXL5iHg1MaTEShqMt",
  "key42": "3MyzymH1hEh7JWKWeaqPYFzAWemQC7hgncarzoygsFqZYQPfKEgHH9UzGL84j1NyxRoUDFuqHm4wFGRbd2ttn51j",
  "key43": "2F9US6aLo7xQCfwVa3jKAqYGaRtUHQmGspym4VkxJYR3acrtYnQ7QenruHsQuotHaLq8Lr5Afcw3UHNTaZ46tXk2",
  "key44": "4zkdcx4n7QGWzFwckpQGynnW3r3hBkrmqkDg66MC7D4HFkRNrwuG5gKZfUV5GPSTFdL3tHYBRjfG4pgAPZeksBRb",
  "key45": "5M1sbU41PvxFuj8n1iNZsBzDZngJNgPbvSTJVcKw7BV6t6HQimLy1Bwd17ce3fvDpUQ2UgYH1W2j35wrmz5MisDs",
  "key46": "4UrZYhSAjLYospFd2udSU4yhb364xU5qoQPUpBuMS3zp3s75q6njTjvF4et1aECQH5uZvd2SiToVfBCNhorT77uQ"
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
