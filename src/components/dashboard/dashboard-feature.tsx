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
    "34J8k7m2SBHmbsUPaUksri4E2KngVro1TGKaNDa7dmar6PvyuBEXGn1SBpQ5CZf9QoVicb5iD2swPTc76CRjRiPi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BxRZXJfVE9hEgwLB78GBmu9ykC9AddogZujSf8AJiMxQ1DpgNxdXHZGDGifzY6EKTji5ioLYS43kYRrmpFdVhc5",
  "key1": "38nhKkZomxyuGP2D2RsFPW3tvTpHkgkAW9dBihjVe2AXhQPArtuv9a1rfvn26C6F3u47VQpHbzLQqMr9fWAWYW86",
  "key2": "5BWnPQ8qxMrdbBGKzm1H52WBgNmaM9ZVTW5KEjk9FERfdDfaeF5Gfc8WDLYxU8urUn1ZY2zLSzRA89vu42ymU9Si",
  "key3": "5guFuSwHHiqfx71U9Zy851USXzDiGyGqDmwNwfvZt9CcGEqhsNvW9j6edieHghNgkfTAPtstnr7HTXdbTyme98SW",
  "key4": "5YYJzpSa9MJZK6WU5coaHnp73oLpdf1jR7zLbXoa8DweJNYzmbC9iu6gABDQjsTswe7m8H1ZFQzqG2DpUAtvMpBV",
  "key5": "62wgGJbe3SYuuiWmtqp5k4BZjfdYBf7Vqkf1hb9XmEw5nS3Jxm7QibnEn8d5VJgnz6Ce3vHfe11VLfmPCpAZ1b8d",
  "key6": "fT353k3jXrmaXKtqgGd9XkoF4HVLgT7GwyhiDsgbHQxWtHFi9XoMxuWuRz3XThUiGxC46FqYqm7uW9yBhMDnxwB",
  "key7": "2GgtNSqBGFpmNwzsfVee8Jibb6BtWM3z2sg28TZ7E3siLRyAp1GWpN2mrBE8JCQc5QcuSeLorA2HQ84Mw27zNmbw",
  "key8": "3sHCX8KzrfKeFYKy4fwii3FnEoGPfvEQjEVPdoviTrSo8nFdCq9nEy7x4DrDgF2ZVLPKppkMSesirhZFZ5w6MNgb",
  "key9": "53t5cdQi5szrsiRmU5Ja2y15HR6Nv2Cv4bQH2KVHDfByX9mBeU1SthY5o3qKeXGrUo4C7srHYkNEsJqTAFLNgFAr",
  "key10": "3cmoDui2RwNhCAWrcDWHQAn1xaXymXZ32AAqdgFQQ9TFR6co238KLhd29Su6Wmibz9HoRRFpNxWAtmZaG4GpfXLa",
  "key11": "3tkgYvrsnMcwosfHmNR8AJXTbHySCZhnTpAT9RCQ8VrQJDakfs2ijYHXm64JXP8ZH99p3i7zQTtkAyf1cqfLDrmh",
  "key12": "5ELN9HphWjfn68c3sRBJQrM2nPpkB6CcxsWBv26ePUzMDkEhpozkqDFGGqwBAS1tjT4ifGasZFm87N1mREF5JaX3",
  "key13": "4FpntGisgT6A7QK66hRJVwyE1s2iBVsmCAx27V27jBD8kDh1xpj7KJFE9z3tQr11fxBS5QWV1pFYaMqmx4fJPRPL",
  "key14": "ugymNPh3UZNSu8sazfJQxC6mCHYExXCDjBfyZpfptbW1iibyoDjH9ZjMWgZ4FKCeW85B9yH62DiEJNEndz42Ayu",
  "key15": "23Z3VVahTrcB3AXRRp4Vj7CghmKCSpvdLnkitJzagbyYTjpXB4YZEpwaByUbBQAzA5ZDEYjz6DbCNHkSFrTxmMrc",
  "key16": "4aud25zz5UXPCc6ZuRnRX6W1TZgGD5hpARCwcYjpLAyArPe7B2fJPY3oTwaamwfwh124iXYF4wc824m5TweBM9kS",
  "key17": "3KNKHuDbhyqkBTZzNenHN9M4PBy38EGyTa1b9gZMjA4EaqLo76EtTiiw2hrs3jVFHgz99xjKyJsjfxiHzeMaTKKS",
  "key18": "3VLqALMPZmoikTx6WPWMvUwFCCfSVstKG1iksLoZbzMuH79X7W7LE5k9LzR5ZMamzxGywJUAJzWZaGrSfYpgPae1",
  "key19": "4V98eNQYTYG5PMyNxFBvKSs6mQCzxiPnXmWQ85S1LwgGHd4GEF9o1EXjUN8SyojTcFowDXjqh2i3yj7f7bgrmUdn",
  "key20": "3QTJzwM5CQz34KN21bwEag9uqckxMJVPh5J2yrZTNimpNeKwS6FxAQV876Uu1q37tvAXocJJQSj3AQqyS3gNCfxN",
  "key21": "677MiVgLeEkKPvtVe9rmf3V99JTchm4tKK6Fqs3E7Eron3ucArM2nAcX4eNZQutQANkNiCKAqfwxzExnVD4dYdEn",
  "key22": "7n9xKFTaRcUTsLGydVEncJ8hQ1e7GGZLYJxfj3brbmGR9uwxWdr6CKbKzL3dcJxDitkvT5HucLnuqTMTwjqLvmt",
  "key23": "5VCus4MgGTqCAQhaYDUy8nncKmL7mqGdd4QA6DuRTS7SkkjY77wfEwTaCXJN6KnZhuM2uXHUvCtepRkvftGFCJ8M",
  "key24": "5deucbWeMYHtVfPa6y3MdgGXNg5DqLBgE59LQnDLAQeu4meAspPgSukS9Gkct2eLdaX996E5YTYpbQvv1yHuFu4p",
  "key25": "FoVFbYW6TwGXMSmi3Ph1QeFiLDW2ag44E52jQC8TGgURGGfVDCf2edfumtptYnQuvNYuCBLoigufM9zDpjYi5Hm",
  "key26": "55vrjYVBoJiYDPBA5csviaHTyLitcSHdtAnxnsY5r7Q6N7P77soXcKucmcVaYQSHAf663Q6EqxL1p2dbVsgQEkHZ",
  "key27": "23eFH9973sMAvbVfq251LkR2s1Bpmu4koYd6kXVM9DxHiRQ9d1zEytY5yhoCDApfXNS1ZTazMjwELFMdagD4W9cw",
  "key28": "hpSNwZix5YJrANvWAAXi9NtMk2ii917Usz7MGZPXponU5Kj1A7UxMifxJ7Fymj2Ee12TS1mrQyW9crMdStTJBoM",
  "key29": "2rq9yi9Nj4VDEcUaRYwbmBPm67cXWLeFT2F1BCMB1N4pHQpuJKTsUnkszZPV5cr7zVU8ZX3AsrzeQkgAF4ftBczF",
  "key30": "3jA72ZxXEMNzwPjhbfT2b1ybTHWs8j9ijSt1GVKy3tPmry3HbxHYxN8i12qH2zVByrtwC38mo5xai5bis4mtWG38",
  "key31": "TtwDnXN9F6dVymsrCmDuBwKcLy4Z9rBHVwi2R6WnYPe2G3NLaKfT73fgGEsR2tPwVCuWFtSa2ChYJa7ZLFYSVcY",
  "key32": "2BUyCAqgFMAFZ6Sh24xqX4vP51mXjWDS1feKDkXJMQvn8aFg9KkDE2trCogKA93NgMLtNydSD9d7XgCt2WwEn5Pt",
  "key33": "2MWE72XRyxpqAmZs4nDgLQp96baUXDKXKaC3nH5cBmJe8gsdKmHyJ5aqStY96sH3vh1mdWNLKdZT5s84xgSGicDK",
  "key34": "5bKgQgXCoiF5JHXnLpwp2auUVbDqpxFjH6ufMjGTG7EjNSheG4dP5YfZqjXsmYeC4d1tBeAhTrMYwPM8C4PTFWVb",
  "key35": "5JQGPvXg5YijBNyVvo8ypxR4RqD2s17ZEaUnwJcz1eCz4smPZBvjuNkSAyKQwqAbUE9hzwj9PdaakjFE6HatQD32",
  "key36": "4zCxhRCaut1yM3tqzGGC9FDmrFtK1zyQr4QpxrdKMuqur6XWqFEojCo5wVgPAnGZVw4cMiu7q1DfZcgvfQ4NVzuw",
  "key37": "1xTcFAym2Bo2GcqqVYTLGNjKHWqXT9aorBcDTZd5iH3YM9NKk2zjXoHUT99hW5sCovxsG5MHVBiJVwXXDH7Fetw",
  "key38": "4YakteQbDKX7a74FFwNhorcoq5pHQsvWiRucvMiFURcF5hwxFa3nH1UJJP8D97GyiY924rXKgjwAhZQyb2erccik",
  "key39": "3BMKP5WngwuExDE9hCwiJSY9FtPXULSQSrqYnCogbkVvP5mqw9sMfT5tcmd8s76goNW4Hv1eMrLfW9BfEtoWiuLH",
  "key40": "4XiBPCY21WjxQTp1nk9Cm3EQk9qMoHFbS7pE58b65BJ35EgWhcmFgwzV2fx5VaA7nUbQmNek9umCfGFKVP6WBUtc",
  "key41": "5G9hMHoaspn63K5HBuCEoo61vm4jDY2DxRESJe8wwoqb79rWnYq3N8pBLUkDc4b4FMbtoEW4pmzFWknpxCMk5QBG",
  "key42": "3k5EWVng5gZuUNZub24L3GHGgMr88pTqSgZaRvNuK9gvHj1QXCA3QDeLteMYR1ourdXfiYX5EHQ4Bmi2T8DMpMFg",
  "key43": "FPEePynuaMWUYvg2sX4JopHfFtxtVfDwyr5w28gWu7SgFWtvMPQJ6N941AAUtx5awwAnPxUoMh2sijSi9r8FUfo",
  "key44": "43Tfk1KTagrYva1aTufDhj2fKZHTNPiCmFEBxduBD4dzi8bjP8fqfLuuHviZDzKUfHEiGU6q4drSdhrBMCf7A8LU",
  "key45": "TGfQRS38JRBUfKrEeBS4DkbXS4EBMx7LrYtYKAGn64F7Jit7S7hx55oA3jjbXuzb394hFjAzYKjZxcNq2qPNka3",
  "key46": "3FhqXNkzijVjnbfZWom5f6UybVx2wXkkEdnMi1BYWENYcMYkgxVHXWr3DxHyfMpdsumTTrB1q51HMaH4roXizSQE",
  "key47": "51etrHYZWbSVXUmTVW4qF4dQT2BhPy15z2ok7T1yaKgg6R7x657pAufmqcDzCpyZBiStFs3yMrwrGhCatZxg6bkn"
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
