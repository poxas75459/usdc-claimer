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
    "5LH5yAwaJY6tkZdW4v524zmL9PsWFg924MBfEnWDuSnunfvnJkaFkujS4ZS5ZQpxrFYNSSZReH2phh2hqNkDyqey"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67QuXWaMaEz4rnUJti3ouuKYhc2Z99zjhMUF4hsy4bgPUxExkTME2Fw6bkw4hMPa9ZjULFH8wLUigRE4P9ssh1e3",
  "key1": "2snJtnMfskrV9sqmDvEiP23ca7VAwd6Epber6pTZ46iTELBfUnzpaL6M7vNPdVky9TcNVtJPLkvFRJ2tT8xLbnov",
  "key2": "2ZMj4X6sUJfnhQJwRBLaY5siicWxfXYTRaE2EDG4E5e4Vphtz1sbZNafuP5qmJSSUMCGTWXDdwRkN7HVu8BhBeE2",
  "key3": "4Awa7X9YJMuphrWboLGXEvMdk5JsYgXhcXWjSkVeE4RyavDEibmzcbiftkX4654dUXzFFQdQ3ykAhcnKsnCpxPKA",
  "key4": "2C6fHkRgeLKerB3aPwvMX4GUYZyuZxT4FtB1GJY1YtEBHVw595p1WqyHkVTkCz87TgCRb2AxZku4H6PsChsuVckg",
  "key5": "xrvKgoF92CZUZsby3VZLXvPkPoRXgn7V7hUU72DDqoZjG67zyx1AD1cQ2nswYMi33Mm3BcxJLASEpx4Fgzy8whi",
  "key6": "5HVeuEVooRMXRDTpaip4xCmYJztX7fMm5tMG64DPeiiY6hqBRbnwnLCimhhJJm4RS1LTzwirpHYenPfC3DFAJ4i4",
  "key7": "3z8ZutS9FHLqpu1Txry9pwpRHpLowW6JLDKjA3KqEdy9FrfKWvfFcbQaGXcbgnzguDtM161gKAAbgq7FcpdPttq1",
  "key8": "2cCvMFr4QXuFQC2eAZDhnwsAs4JJMKqRuqjaF13WWYLd8sWJK748K6S5fN5F5nGrxybxdiJhf8TXguxQrXp6t8pc",
  "key9": "3EP85vk7iinsb7arCyj4agiVrWreoWZJ3B9v5BtSjzmnTgpGFZdzaZjM5BAUeh72AHSHrc2sEWTdazjTvgADZT9a",
  "key10": "3u2bJEMfXmJsWBEH5tpRivXEQfRTXSSHwSd3kKcyAks4ECEW4mm4Q3FRx6HmGhocnYwPLCAhnufWdspG8YyN8SNG",
  "key11": "3vtQpRtq3sKSwGhV4ApDFLCTUkKJomLyGBavLx9uf4ZzZMjjvtWaVrEnrCM45Cs77BzGUBjqpuMwYZNtUhw1YF7x",
  "key12": "ueyhAUpSbAX5HQTqLCBnmJVXsXiXKRik9bmZzRwNT3wdQxVmvmb2KGpU1gBRCwGzhzcTRQo1hKWB74QKj2zUT8y",
  "key13": "4fbmvdywB4bp48fueSQZQ7uG7DBM51Ax2CUFpF6ivtSSFeb4aFMsw1nKLkL6NizbJR16n6NnX69xBcGN676mtRMS",
  "key14": "5EZ7c1xFa6ZqajbvKsXbBBDsUMDT6Hi4SLPdZSKv2nS69Ce9dmS5LNWhSYJ55qJYvJj6MuHtwn5Fc8PWUUVvYiWV",
  "key15": "2Gop6HExXciDc6NHjCPgVT1t6USbYKyN3JhG6hcLe5dN8NDvM1ko5k5poKhPG1Am9PQYUKFWBVH7ZsAFoCrqktxD",
  "key16": "hf16auGcRbiykgfQvktyNxEVt81mdS47Sggwk86svb9yPJ51eZBqUiWPDqboqbnvUfReQnANfRQhLPBEheqhXrD",
  "key17": "2Ex7bD16VFXF5TLmFuszCEtWnBtjcHrTxJPCHJyZpiRbX9Mz85mhj8YfBwx9wwPDkirScFeUQpQbQnvfRMysFZsu",
  "key18": "5fHs1tTVWzzR68Xt5afSYNUFsiTVFytCc8AHxkKfBsQ5frbA5KH9w6bfgci9MC7hq1R5UACj1YLh5vMXEj8z6Xz1",
  "key19": "4opbHTiAhqYzWLFRhKSRRCxpyaFKkp1qPGZ7bi2E2zrK8oTTwUzP2bYfptN6NrShh4MGqARpePQMQrhsY2RQdfds",
  "key20": "YV6asJHFMPp1ES674qg8x6GfA3y3D2cMjenwvwnGCHfNmb9CMQqMKtMDQ3YHFsfkPAhzVi2u4W3qsEDjRmsN5T1",
  "key21": "3SBqpdyt52GfR1doQzV6mDJGdywLq4VrCUDXr9XiQtmrkQQSVzpqVT55ScRAVgcFyuNgbBdTw7DsF7hpBw68nP38",
  "key22": "5a1WRaHRRz7uLnMKiTy7jt5GfxAy4EpaU5hVEoMG8GCep1hBibxno7UTN5ufd3fnqX53bnpSWrN5k91vte6fmUoS",
  "key23": "WiNcqrbbUxRgugPeEoajAPkDZQtMAicVtNqjJXW8kucPRTbfmtpJjb9MBUF2wvzxmeCNQHEYVeSrw7ZVrhHgwjY",
  "key24": "2sVMNYxUfgHSJQFk83joE8ieRMprfLyyf5eCKvs7t2VUMzrgQWHiKeXekpMHiNtCAwDxrGShG7msRkv1udCWU7sv",
  "key25": "3F8ogcZUv7ekgRgr3WXgmHG9kxhErF6Jgz5anj3VeETJv1QF6wBYx6f7joCwexh7Xhh65nEVQvU43CZx3ZpC4SXU",
  "key26": "2vw2FZqgF5Xqt3FjtPt1MeWwJfHRsufAsv1K8ZpDwncEUwfS2jcSus9fdb3egjGswbkLNrH8qv2yuAyy6khxkqj7",
  "key27": "5SnmUfAHT66wfUrCG1QbyxRonFLjkKFpDicseyjwJPhjvQvQkk2qtwtq1sY7opdKcCc2xsB49mcwXKaHFCfb2DmQ",
  "key28": "4sKNqhsKa47v2TjSeTA9tf8tW6AMwTn4XojWGCj5jUTKj129tMUrnMoDU2aP1AhzPfmTqJ9QpGkroi4vAQZzmtB",
  "key29": "4AVhXnHMAYzDn4xE5cxeFpNsr9Qg5WhPErS7a4bj2yzcWM1uC86qdvX99n1pMxV8fXh5LDdWnZVTdPfScnTPuQbs",
  "key30": "4Rv9ZVWD8oZt77J15KZSuoDMuJaEtTsuqAj4gp6HqDw9F2pRNGYUKHkoQyXVxGVP8XpcGy8vD5JJVxSS3sJ9DLUq",
  "key31": "4ssU6EaRLaaTJkTxFRLDB58cFuSRhEzdXNLh1BZx12zs4ji1WSKPV6nEyTEP6kj1SodbqoL2xbjo68UTXyNtNg9z",
  "key32": "5yyWFVVSq4uG5WyC64Azd3QYdt2NPiDpcbSunjXbQvCDhCZCQUNDjdcuLK1SJZGnkVU4QTaZyDNeUL5X3RwNnPXy",
  "key33": "5AWZUaAuhsxUbxGBQQ37qx4Fex88jWdNcBXbCRXxzSBjdHRAjgZwheZJje71puqXyhJcDssp5cryzXoTfkYwbp6b",
  "key34": "y5LfEhHpyeE2vYfAjHWsqaXGbKCn3oaU4KPNdjAakDg4jrBDb6roh3jASLQTa12b5MpDFyxyEQW2CzTd33N1Yg3",
  "key35": "24FHrWu94gZBhRj9TUm1bzFvYaNsLXA82UN1oT1rWjvGejHHsXZoqWPbA1v2hm9zW3sqRQKhyiZPosPcJL9gER72",
  "key36": "5ktRAw6AkWBgeo75hbzim1uu1s9kq4HxE3gbRN9qVMMP2BeT6CQic86oSB7f71uWUt5CWXN6QUCvDeJsD8GuMu9y",
  "key37": "Rg49HV96HxCu5zp6kpcgDw1jM6qWKhr7Q2VtMuXFdSv3CPzBJoUZd78byAgQPpVwnfqaVakXh5Wrgc1dz4uMiux",
  "key38": "ekF4wjicW4CMxadWXaqNSXw2Pdo6wz99eu8PxqwGdL1hwq2i8y3nwWCFjmMSWh94FZpqPB1zD1bq3UtuKzajrbQ",
  "key39": "47WodFWtvByL8iCa1FcG9F8NnJkL1pZmAkLygb6zpMbWrQJHbDt4ZooRUtxUwfZ7M2qxKdxK1Php7FonsFbhJQy9",
  "key40": "4kxUGoVVVEZWT7M72kyFZJsbpM3LTLoxydW3j2YhPkaqg9ApiHrJb8u6Jyov4L3KxetMP2BqBmwgPJjCZfd2fcpJ",
  "key41": "27wVekDr9L7dQntuDWQMQZX2wMZaQJ2MTDMH44fih93wmt7NrWP7RCjmhkqKj7pVS7EnWEEpPeXEApzKMHjcFc3A",
  "key42": "5Y9whtVgSWp7YAZmw4hyCtD4qLTtySqiNYmS5uPFvFQNLDGPhJfAmYAmgufkMfFKs2pafr8AsK6S7CW7oUyFi92L",
  "key43": "3FAvfJVirkcmehDcci9dFAGeMpryYjszTMEpUpNEvHEkYyTWZvgbTaofXDCNjQ8F8Bsuoz8YZVv9QoW6fprTi32k",
  "key44": "64ZyPJdtx7X5L4XeH41oDRAwgRyDDyGmSubg1fVA1SXr9jy4mAAHoZ6uGrZFTwH4BjfzHeM47CujuCqVEAane65Y",
  "key45": "gdbo9vJjvvySQbufoXR43y7Ern1drvDXf3PyT3UFgYhdh8WYbZfG7dZWc8HaMWxLC5Yxw5KmwVPw8WhHYNGgjei",
  "key46": "3gJaooPFxFs1acEvj3wfW9m4dPvWNx98zit6GDdi8tD4UPwsgR8berGLMWNCDziwrja7iY2MTw1wVBZiK7MJxEwk",
  "key47": "4ZQu5AMxRQakrYzALqkM8KW6xiAENUgYxAQPxyRSxDjSm7eU8fkfnSPfhPzPE2mwK8N5uVpaChKN7uypow1RJkDh"
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
