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
    "WRQRN9J6MN2WFqXDPpE2DaccN1YN9jjASqC3EVHqzXXn7oZaQDvjv34KYwUxbwTwpXooVMpTNqahZh1NJvT2Ymx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u71TLgN5GkLs7Cn58DhKCPsqNrSZRDoKhU1nQq8xjd7g2xNmaAvN11W2Ze9HrpnsAZZVX7eyX47YoB96qnUntPz",
  "key1": "2xMSbyWgY2MQGbQmQfDsPFNNFcTKnR9WbBvkBYKh8uaYj5gGgDc22noaWhTiYdETf2GBSXAjEjUs1vdnVo5tW1Fq",
  "key2": "4kxrTsFQyy6DGrQYgMSNpDLTw7iGyZVe5RxGoKoQmZDa8AwY7cMxAJjFxs6v2NNKV3VyhSZBzxTY4busDKXxVKnn",
  "key3": "5nKTMQiDSWcGPJ16ZNYnig8BMBkFkWABVM7t9UYJCUnLdVDGvF1A1TGpwHYYPh2omPKZmdCEAUKQesGrEDbHWCiv",
  "key4": "4rSLiDjbm2xyrcPnGCeLumB97bUtFGAuVVG3QtJ3FEKg1vTQyDjekZvW99YtsFGXUxXydXKorFPcVW6JMUfm4jgk",
  "key5": "5PHmhti8Y5BquZa4iruzS3R3MrDmeQke3C2Qwt4AvoV6aDdJ4codeZYd8uZs7tKYZbgrEysm3fN2z6aLX17NWzeu",
  "key6": "4DsPc4YahiuXpDniFiadoL3uZSnp7DAhwKgZXC3dvHpH1YXsosJ5HcpiFQr59hXUk9X4Gbyief6KjkzKzeHuPqfd",
  "key7": "4TR2wjJRWmCMSJdC47SE6TQKyRuk6oTNez5V3Psm8M4k1SW6n8LPaeBD1pDv1kgzXLtMgSd7zHvAWNN4VpUAsPZ9",
  "key8": "4Mr5zK4VLGrYxvDr9NNCXWx1h8QyZgdWdYV2CmRaTu3qYSxKoc8WKMnD35KTCbMPAXwPCkiVWByvcoNpf6kXv8rf",
  "key9": "2MBrPkUoNg7z9Lss1S8NmusbdCKRrMzV7D6GwaBpzEn62QTJbyoJKAJ31KHC6XAp31vznZqH8cxE8yENoExT4UY8",
  "key10": "46ePr5ZD8ufqcTGrNdbYc7thNatTfRX2wA6DUkVcQ8N7b2GMmYPj8n5FDHZUNtUcB9pefz8C3RUhnmbQ4gDaf1JW",
  "key11": "2EMcx74s42eMzCGgZkB1hngHQAamPyyFbtE6dihkTRXBuKqJZeLHrxCwGcUPcNL1v2To5BYM7b39qHwJeUKbP8SQ",
  "key12": "311eb2Qwkr6Fbrt1kZqVwj49UnVEK5BCx3nuwBo9eW1mAreVeMBtbJFJeaFFHWmm31KNPm95qd7ffVKSRG9y6paW",
  "key13": "5pwW6fozYVapwQYJnSvLTCrDyCe8YvnhEE9xrwzKqGNZwdtabfV63HuHs5gmCptUhEUZVe4MSyzSUH35hg4HDX6L",
  "key14": "ebKVTNhL7qhhdGetEhxVeK6hihsi1Wkg5NPHHUd8JXYris2MNdG498aaCYvStoVvMiEHyCi3S3srjfNqfth9Zr9",
  "key15": "2swUtVGLGz7ccKNz1bo2ScQxocNrFEVPX6DQTJqq5hoThXzVDp9HA317yE7scVQhDqXtfqudjRZiJzcFLLYJnCDc",
  "key16": "3TBvEUmLgu3edxYXQPrSeAPXj4uXbikUigGBLhjMFQRCa4vYGfE8Z3JMpym4f2kMDybTUuJn2EiMzKmbFC4pp9UB",
  "key17": "5oKUheNG2vDTUDYo1iMrbecRBonvkRhLtVrM6uGtGLEo6KMk3pFxHuytABtMEjhmEugKV9Lox4qxM3nKqEz6LNUw",
  "key18": "2fABqiJLQyVVqeATQE7ZJYfnUEpLxyCG6c9MiZEmisqjjraheNBQr33mybtDg3nfqwjrsrbN4EihB56LdC8YDsm2",
  "key19": "HST2a47oAHRBF3nBV4NCtaVntDxShhAf5gNacquRvi8XS5eiGSeiV4iEvH8GjRGu8ea2jDYertv6yRW82q6R4RG",
  "key20": "Fxaej1u36oXURhmXgG36khSRFRCHBVP9vVU22K3imdqWQxKNHYaXyQQDDJuybKaWcWBbLJCZunxfEG63o5Z2ZXV",
  "key21": "4RxZs7cVpxabinwwR8btNVgBanKusWx83XLoFVCprWRz3d5WJdSJo5j6naKG9ys2daHk429X2vX5VLSD44Q4rqH2",
  "key22": "2fjyAXZYeHE2SUdkuPhBUxLtogy2yxVSXbMp4aPGTVNjnPHe2uc3S3KHGYZnwdXdB7xRqUEQLFVBBBeBtaWfqGh9",
  "key23": "2ELQjkkTCysw551xG6m6U82aYRFE8k1xbZoL6YuPKgZXG8PFGtVCFPYh1LMJdkK8Wkf1GrRhQDh9XVrZmGmfsnHw",
  "key24": "WmkVgzpi4MxZmvYRVi16RM6sxouZmTkEf4xm9sTkyGhKPn5AXjtwQnx4q8GbJDPM4dGDouaXHFzgU88XWkPZa8W",
  "key25": "2YZDYcB4GKTMZv5SYi4mS8UzDDmyC4z2VoHmSPJvv5r3LFhoxwt1DV8KxVsSGYHEYyaCAjmMtAhgPhbPnzD5zAod",
  "key26": "3yhCdXcdJovZjPx4nvs2WSkUvrZs8e1nPrwjTqwGxL25pF8cCjMeuRT7hiH5cvdN5mZzNezw9hTf5MCnM7RwkyUZ",
  "key27": "4Cuy1QHbHwWqPmL1M8mmoHzetcNVQXgDWw3VS3iYCQFpqixhMBXM2vdWVkU17an9gNUEnW8CWiz2j8xdaqF9gW5W",
  "key28": "2rbGnUhBykutgA2soW2ymFjpsTupCb6FvMj5q8DjFxQRF1tZaYBEVgcRs4vVpW5v7TC7Z7yisZ5kj71NfhyhefUV",
  "key29": "5FC6Uk93NJSk7a5BXKHQZjW9YM96MpMXSgxUV64V5wC2AYHQedpTVkN6Mg3UCsUc6qZueHc9Pfu4Bd6Vhb1jcTSF",
  "key30": "5jwzshJwGim69DvPgA7pvdANLXMJMadC7gKnqDqBBdFuyuYs3eePkXEFY1qcqewvorUBZ2EPKdfzVWdTktEBjae",
  "key31": "5kJpYrKqh3R5mQdMJQS9aMo8J8cGkwaPxKhiYxh28LvZMMp6P7FwtweGHa7r9HMqfmuBFrDbZ6EQ7B194wnZNe44",
  "key32": "4K1L5XoYosmyD823kgUeubKCodBirqRPjHC4c5Qq6du3adPkPUsHm3jjxLHwDxANZo7KiwxgzFChK4o8A4eSP3A9",
  "key33": "3fmGYn4PohCuuyDToXQsG74TYFeV5LM1856FoXxhpcj68dBnejHbeJaZCWVF5kcH3qQgddC7JcbKEKCAX6Bn1daP",
  "key34": "8Xmj5eRgRhUG8RHMexAy8MmrkaEfNo9Caae9sx8k8FNXwYoASKS6UBzHbnmLCNPLUCM11UG5jS7gBAiefqaJSST",
  "key35": "4i6PcFDnrQ3uMaKDdRjU1rcyXtdCkm4CpnT18LZFwxw4T8VtyRDEPDC1GQVWHHQDNX2KFyPVKX6rnZTshFkQymyY",
  "key36": "5JhdjypDwq6ysXAtzuA7Wwk3QKUoZjWEdMTL7SH1iQmbcbkGL84fTBa9T39EgnZa4umbnpucXoAhgdPibYBr3JuN",
  "key37": "3czRgWaURXB2HoKoq485DAYNgR17Ve8tbzhTCwGdoupPLH1gxoVwwhEsHUrpsdqWsuacVZeXY8bwdDAoRFFfwWor",
  "key38": "3ZYqvvEw5Wwc9G4gQrxuJimGqSS6rCPsE58EcgPsurb2VWXT8wsNYM8XdbvPaSQCgFFYiaKonCYtBreumuiDiK9d",
  "key39": "25jrE15E6Q1VGEWEoA6rrKqvNeZEz22hQkP377nugqyHRH4J5tv3iLn3u5cFgn38UAFKcys3s2fUWGcosZTUk77L",
  "key40": "3inFjMKf1cZ78jV7C8KcxFQt4h8zwxHmucEZnDorwYVTkMwcn3jNbYFzHJvos1MLidZWn2ZabrQq2L9esiVMCHVD",
  "key41": "3dcvS9ry79dExuopKKxW5bCd9YwwkGwHfAihLQNvVZDWyU71Yd17zAnjWQAXvwkiwNkmANnnMk8i3dMZVwBrFMPh",
  "key42": "65XW1DqWCd9s8zL8zKPazMRNLKrVjraAHdhwDhmtyXcJ5ASAHHwVs1LrRsjzEFq8eBE7QpVCK6Cca7oRynyv1exX",
  "key43": "nnL4kAnqoipnDqfGVVv4s5HsTGf3v6a3PpAcwTh8XrpsV3VUjNS72FWx1FP4s8i9ubMPzwVjgPWNuQ4BgC2Dw4i",
  "key44": "5DPBwoHSG7LoyRAPSEwp5FZLvMdYxx1LXMwexSn9FTmiG7nadXsut6pEkpdMbW1DDQuGeVkPPsVi7jqFzjUS2sty",
  "key45": "4PmPSuJFt4gwhZ5UuxqVBefrYXpn641B64MFb5z2wLHkbRwLWUwFp7jLjjTKbizrqzqy4PinCNAwPUbaUk7YdPtp"
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
