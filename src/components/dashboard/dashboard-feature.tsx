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
    "5fhZ48V9VfTSzy8DmFtA2pQgPURUq67E9AMhYZHnp6Ztju8HqvBSJenQXKjsFnwwVve2ff2ToUrpcd28wrzc7wDo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ngHZtEcy76V5zSoQUK5GQXUQ2nNfVQKhYp1tHyn8rRNUtD7ByaiEzgrEECpDEVx621mg5iGgTVHx5tLc8F8LQ7N",
  "key1": "2C2HHzUydnmi91CJZ4JQU23Az9YrPPYtLPPF9K7kcgqMniHUwi7CeihmL2xKFqT21sfUvJRTQ9v9hjWcLrdQDtc",
  "key2": "5fRCYVqVXVgPCD2hTMHUFJbBRewkmgDjkN3v9paNJjZGsyPsMwMBx2TtZS5waJcF2xMB1sm8HHurt2Mto9iM6Fa3",
  "key3": "4YSsvcMnjF9CSUpVpEc9sAnScW6FcQsuvoqTmTxXYpm9YJe91yUv2WMkacU42aVMD5Sg59qrzXwBnEysC3dHntaN",
  "key4": "3fCqvBiPYLA69WhJk8sq8HuLjPMqBoewUvVYryMzt6T5EvWpEDj22scu6rvryMqFTvX3Rw95acoVJdZ1FznuWbEn",
  "key5": "LVCxzjGCe8ic6ai6ERmsf1tTJdE3N3r3MXb4zY9hKqgny2BbuLhdzQpkha3wCDQPCoZUAeQ4kJjGEGx4VvzuTCm",
  "key6": "5xTvHPXnqJV9USLp2ekz14qF9iw7phCnNUB7gYgMHsqFc8UQwco6425ZC6AcGqPRv1CZ9uz8LMQKnqL4Fb3tyCjq",
  "key7": "4BhUaXQDkSP7B9MdZ2BCnFfkfAGmRWnzTVwrJtMcXe7L9MJb41f2eu7xGCfeQURdea1eytPjvyquqqCoFeWr3eDd",
  "key8": "ELGt4me9AMHqU7oRk7nhynGnURocCaVSpndHihN2VMuv1M22Njoh3vMzt5tZK7ncNseVq5G17hESc9vc1cNTYrN",
  "key9": "271o9Ups2ivRXGFLg7A25vJKC31t73WtZRLHYTNjt9jVUqCg7fG5TqPbbHmXCJBjjXUAtqmW2CDUJy2db7iFY2N9",
  "key10": "sRoSBBSSv8jAmRSz6an332J4Qyj1nzaicKzRgVAdanzXFRqyr5KK3cBwyp87gJ6MzFdcD8jHWrijYBEXTxsPZHK",
  "key11": "3nQiZYXjpEx8PTnvwA3ekfxRMtStYHuLHJayeawsf3LoBR5nwNEn3kbUjsR1Vqk3TPSd82yrNfSuoyFvRefpDrRo",
  "key12": "4AzNfHcfFrYvTfv9EtFu8rKWEndge33665VMtjPgXYmENehwuZTPEfeKaCv7McdpzVRiEJduq2mr6oWSrvJTrCv4",
  "key13": "5JcTQ4r22FpWTuKY9pGXphSnfc72ep1fc6qhEtU4gH45RLLkqFrxLUFgnL7MVzVK339bnnybHUvof6HeBy9YWkQZ",
  "key14": "5h3cXu91Jvr9h5vJBRcHqbtzzWpqTGRF7shieqC2SgLbjCLz4uEkM3gPYCvh513EaveCtmR7Epg4Ji2Mm7rsuizu",
  "key15": "44ejs28ifv6B2zKH453zV2PqrPvAsQKi42zmcNFEARBbGqe5tg59qKiDcG113kPe3VgMuiRqqoxRLYQvTKgFRf4o",
  "key16": "jXpS6namgrUWsoy5icBAggf3DgDTNJULpCQmXx1mc4ZYZb29BEP4NmHN2CGrToonMhbdxGFW5kGCpgeFjdYE3mr",
  "key17": "rEVymzjDU4iYEUduPg4zCub2xUDv1qbLQtFTzENGhYr4M9SsEnRULDCAe7cSJV5evTTJJTC3J3uezoWKs3TeCe4",
  "key18": "CJk2ktfw6zrnQp34FDs6H5pCWYXZHLBPTZP7KETMQhtDtRmk7VuVAxoCMDmwq7SLY1UQ48is2L1udUFqJJzwhcL",
  "key19": "2zddcCR1dPxVHW5e9ndwoMpB9jg3257nmK7va8Wnnetea27Ztc5nWPCuMyEMwGJ9UMbUmR99b6atCxgGijpZtGHb",
  "key20": "48fvCpmbPY3mjkqXLixz8eX1hbFQWhp7UxosEtaNYL74ikcWTzp8tL5DM4twDPYRUPE491oNMKujxg8qUNh8Zu7a",
  "key21": "44hLTgVcgELbrFD5MnqQvup6qh83biA2iWQBfbYmTgLgyj4jvjjnaQpWMkUhgxTqScQHdHKy8posYdgPC2iE8xDq",
  "key22": "2zsf5GQ5efwC5Et718ZBxDwv8jh4CgaFDwF8pCDCcvNeAGHs6j7qVN6sM4Lh4LhR4Ce7Kv4kgsq8UdzuoEmkkvD3",
  "key23": "2J6eCnkvHQjFF8dedGr4g7aWFZ9U8MXXNPwFat7JMhYi1Pd6a7oGGzCbiQHVRQpk2j8C8r3SHMg5zhcyc2JENV6j",
  "key24": "4oifJ7EMtsCFc884pUAQ9J4Yhn9K1zM1baupjtgt33nLmrf2FNDGGWSxxxFDJ7PBJEcQih17qJVb1HAjmJrRQCCH",
  "key25": "eZMdFfdYjKMRXmGMTKsQ163D8SMja8XPcjGwWZC9gzMFz43tzRpzeZHtr8MaqUhNNCzXMvmhWpvFdn6sjoFRsrT",
  "key26": "3yY1C476bPguCE8LAbLjxShCkfczZxqX5vRsziG98Fykk2EVoPXqRTtBirL7BCYs1W91XeqjD1cnDh9ic1S18xkz",
  "key27": "HtVtWiAqTfmmmHFWHJauLBerjQg9V6nRsMY1RSmeUc4aP4bGj5tao21CviZiEVFUzJHf6VSv2cXsArYNhXj7FPm",
  "key28": "3J47sEpKRCEeYvqr8XznYMPypfrykjZKBTU7BSa11PsJ34q2B5wHHfJ26pD7oghZuKCV6iNXFX9oPH8kq8mspeth",
  "key29": "5rQRurdgnHBmVECs38UsGY9Ny5nd1rTgUAu7NWCkPQLVAv8qtKm8q5pFCY96xowQ8qr9q1zSD6HgTSTgPhj3FadX",
  "key30": "5hEPXoNixQPQuGafaNzUYWjPQxPGhmC5YouXU8n7YfbrFDqKpJxGgpNk8xNBBwEybW9ECMXxcCCxf3yVgbvVsPx1",
  "key31": "5bBFX6A8VU7B5yZp2WTXUVe15P2AJ2ymHCDJ6kY7i1CUFnyLfMZT3erXL2ngGAMuXmgufh1M9YbGTyutRBGgg43B",
  "key32": "2ZpSb7jWZZBQQYjmGz6ZheKvGYzp8ptqCEMzGjTRSycEFCKfqG9qoVc2E4Qs6KtrQFG76EDZrbqX2fKGxV7aHYCn",
  "key33": "5A89osK3aju4WugUiScpz6rzaqoMTsw2SnBaCJ7oPVauwzT9eD3E5EnyDPxz5UsW4bUSjDLLorJSGTr4QVKcwDFW",
  "key34": "3B1X19ja7NnPeucpRjMRcXzAcP6K2g1uwZbaF4uvmvxCMDUVWMNGJrAPkJCrXdPtiDuhquVEkXk1tLW9Py1ntY4A",
  "key35": "414tqihoGetaFU5RvJ89csLqNuCoB3mnkbXJLpV9aCfbRnMrevGTNMgy5rLMqcnGkVLu1aR9UGP8QfniAdcvv1va",
  "key36": "5DdDP3VRSh5L2zQMgahvzCm5LAzSgU7mjTzoueUfGhZiesfsECfZkd3Avu5nfmXwpuEML13vcbXpge4LAgs794bx",
  "key37": "3Du7njwfPxjjNpfqtfCncmLagi35oDeh5R5EsGcdJpntBKCnRBLoanfbZmMeiVb9epMxpEaTqWmdipmf4cRa2quQ",
  "key38": "3kC4HAur95uf68LpVAJuJPpnn9tGWFmb5ji77hFB8WLU8yw1V6nusQj9ZrFKmpBN4XpXshu3AJMjjqw2xpGxTmXg",
  "key39": "3KaebZ2ib25HR6FRndSzi3ENuzvmeChAKng3oD1j1mxSefgxTzJ6jz7fzwt2wajZsWG9LZxMvVAbYKixjqiEsm3U",
  "key40": "679rqd43D3Y1GExS7zuf5isyba8Gcr9hdAbgEMpmjkLveaQR5afBxgRpXmcuEBz8g9avcsTFSAb7So2XGKYwULQ3",
  "key41": "64osM2AWkDMJQg8co4Aa6TKMZd35hNRRtg57cn2QYfAJvEDUGcMAswL6tqMNPQcAmen378eQFX9eKFaWyPpfvL4F",
  "key42": "5dwKMDsThLdDak71uJzHBo8oy7KDGDwUwS3EybJ5pNLNuVnqd1798NUF7u98wdP6dQzc13odzVudJhgrRsAWiRe6",
  "key43": "52watNnjDuPzacAEwPgnYSESvKRHNTWLhtujpSspAcNfQ8xWPiTXtifZ9muUa8q9ZoJqpd1s64CscxQ41DwMaK91",
  "key44": "s1vgeXcJii7yyqihTCA7yJkVJZQQMHguS5GQd3RCPM4rBenZpipZQjb4KM1VzR1Y3enDhoAbadxxL4o8rFuzPbt"
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
