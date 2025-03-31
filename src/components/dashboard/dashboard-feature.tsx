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
    "49pBK1U7FQxjLnxMRZBXZRVaPPxvx2i4VGKwjA1eTGCyuXaa5nvjVB6G2UUgu94EbEPZ8D8wTWiXiJgmzXA2k8ss"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FRdCVyPMtBRPRShaqCS6hXDehZjvtCq7nZbzkggmv93To64Le7Hw46JtoJkwnCd4z57vhMxbpUwVm5cRRouYpvf",
  "key1": "4rBpXAqhKLXbTkxnnbYKwcox1vgpMHzWZAgAWHMJvoXyRsg3EdMEp1pqivFmrYqm7XHczEM9kiDkc6dqAd73DHhW",
  "key2": "3yNERnX2wNvxsPsU1zKg7BWzzsMVKsMWPF3mYBWvVZuRKZJuAMr92anGkCVapjARKdbQHw1M25cog2EGRgkfvyfi",
  "key3": "2aMGn54DKEJa9iTNmHZ1ENi2cDKrTnjzZzUANKbvUVLJXJGjdwP6dHkzeniMW9sjgGSm2CZzhEwxUr2knjnefwKA",
  "key4": "5xYxjHAPLSS4Nn6jFh1BGJZaDkGxF7wgpSJChyUXp5vRaeePandBtVeBb7N3Za542Xx8v6cucJLGrfSFgpdwsGg4",
  "key5": "3W5AjPCs1Dbk2FpUiy3d5sW4oBfCfw9A7yaUFkvmRsUTfAesHRwtEPVezkaqkQEqtcUXZWiGTXewowaNVSKYnuvL",
  "key6": "qchW89d9ii2iQwobGn84dA93dSCHXvAmeg5aTKmAKkhzz27HxdKr6WyiiP12NPmaWuo45Sb9qeFWGQsB9UHMbLi",
  "key7": "4MQcdP2bCnUgCKkSTawQKeazpR34frQShumRKXutnDLTGSUBqfnTp2hF9UXyq7qEN3yXHNuzJsb9A1HfkXmVTnJb",
  "key8": "2GiHrb7H4xMEtxaFTSeLWVWenWBPQ6PTz5tEm2nxwCCNvEvVpbthmPUorzwnVU5VzNdhrk4f89P7t2KGCu5i54VU",
  "key9": "5rTjHDwJe82J95DvtmvUJZRQztWpjRNndwUuE5oM5j6c4LZoNi2LRop9KgZmdhzyupts38iL6Lr24dG2qucoknFJ",
  "key10": "3kYKRaE718PTCMjPLRSx4xEB7767LdWhczgMaw4K4dygqUcHwvhygCWww6zJUViQRq9gU3zsPzjRR4DqzmGH9KY3",
  "key11": "51jDerkPVhPKPuLQwkTdzyXq39WdtrjHSAaXB4t4G48mXR1frLdx6sb1EaEwu691nmXXrLQE1ZbZP6Y1SZ88JAGy",
  "key12": "23KL6D9nWtr6VpZhyEHs2qydNGj75fE5rmACFARyP1wnr4EiJv5Lc8kjY4euNMXs6SrUwo1CW1ZUwMW1NWkB5Tga",
  "key13": "2Jh51Qk17fgNaTwHycKS94oPg3hQVKVKKQ6TPcmm7dymwYGaTJx8QRTHBvbqejv1HwMQ1FKXQEWoN3aGCMsqDzdH",
  "key14": "5ErBrFYfTaqYke8AgLFFkTXmEmfkVLWeQLAxsLc3VhTEbvLv92TeuvnXq4GStZ2JBQbqsUZbg2Q33yYSt9M7SwHE",
  "key15": "RAnYrBpu9BGsfzoEbfYwsFChbtbmrM17dSb8qo4dx6bv2hXJLc9mfDrEn7ZS6kLCEokPsQHRRkENxV6d8KrJpu1",
  "key16": "61JVb6YSYfgkZg4Bx19ohQBJk78bkwSucn5jXYu695WE2ZjgYKvM33vmipZmDbst1iGyTxASGtohwBnJTADh8QjE",
  "key17": "4Sq6b2g7yp8idgTjCaJC1BSLnMegr4ReAuoqgdNZRvWPp6hoSi82Wo56gae6eHKCS6w48v7KUKTai2Ye5nofSNUR",
  "key18": "2nqyVjqBEUUNvNQhabimaHY6Namoo8ibNbPrJULSVjymirYHbHi1HwpkZx3RBBdY2ymaD4KW5HQugBikipAFDnV8",
  "key19": "5DrBrouV3hyeqzhcNx31FjA93vHoirmvbXa3k6WaYp4NJmDuNtnTLa2FtbBXFTQQfwnD75vcmiDdNUFN2eo1YRyq",
  "key20": "41qRAxNpBHEfvJuV93SPWuEubwHW93x1t1GLCBgcri8i1mSF9F9a5Qf4te3aBgJ7B3ei21nFxz5BmGbBR83adw2c",
  "key21": "4zLsL12gYFSzYubkCkkBTeHCjnnPym3uqMohe1HtEWAq7nWeM84cBMGwGcRWCDkH96Ei7rdSXBCLfNmeqjb74ZVF",
  "key22": "4sFBuER58hFQY5bKDcHyRhfYNEfpGFoFMwV3miESfCBUSjdGcaB3JYAtMXfbUe8z7uPqsGZ86ZvhEW2UKhkd4DSR",
  "key23": "4TQhhpxRyjs3E99n9Bx8BdRojHPDVaZk7oXXjCsS4zzUkUUWMn1eWJpsQmMJRXYi7jFvdP5WYd6TNy6MG76nSBZg",
  "key24": "2nqZqFFk7R68STJoveGXN2AjgHMmjQiW1JjKGVFPh57b8ty3VZbAHaVFqZuUeN1JzZt15EHuDxEU8oMRiARXA5Z1",
  "key25": "2BgEokwwcYHy7mAH7CZdux16hNHEzDGm2u91acA9KpENVWYTRdzFZMZiD9JzBTDdqdrvCZm7N6xDysqGskuzdz42",
  "key26": "cM48xe7eyFxnqWV2pL26ispohUK3nfgvoAkPzA2fYLQJCk6CtDAAFVktpns7zgZvBe6fRyku99o2VdkReUVpyrK",
  "key27": "26UBNtJo36RJg12qZBpHBiwy5oLFH9zso2LrUeyMHKqf92gtFBXxJsEJnK9c4kwg8KKfck3ACZj8A9TBxrfsTvxv",
  "key28": "2heXE39yeL13DjKBGMzGSryC5pujzSKU3AJvutRJp7AJnZaHHzuYRnAuoZxziMd5HFNUrbFZB9qaHpF3AUme6uKZ",
  "key29": "38HRziznD2zwJzFypodTAJoLWsgERSrwrbuvLmx4aFeMJcxaAFqFGVHP48qLYUXNx1JRWsdVTRodb1TxhvLCd7r",
  "key30": "3YFjtaYLsCSFYQv6XLrVjr6SDYt9fDBU2ikubkGdEyQSSXS68WeDJjxJ9wLT1UzD2ZwyzhwesmHMTtN6UmZPWzeA",
  "key31": "3Q22DmpuQLG1iuDWLidFbjcttJnKTPYjkLZQmeCqvrhWEjNeWMKnMCTqWFwZU2vfftvgfviSCQ4n9HaCSHfxRcuy",
  "key32": "2MkPVJYtkRq5bquzxvkhrT4yRQ9ZBnZjv2Yi6ZMVWKkaPBr1pc6CCNL5P1M9N2Ko2oywLTWQe2Mbp9NandiJSgXn",
  "key33": "2YCUxNHNJUZ3u9UuPRdNw33ZVfR6vTaPM8wEy7VTfwpu6zXHb76xztquMktdbpU5FJBfMnUYtYd9FzUsdipPdoGn",
  "key34": "2fWFJsqtVq55UJM5641pXVEb2HWy63oE83pA9nNkCPCcN1H5b5Fk8AHQCaymAiQ6Nnj7y9hgqZZS54hJbL5zFuXw",
  "key35": "4ELmLkUyWbtCZK3s8ybrYDd5SiAkKwDQDZmxZPK6dLQ1KwZRNcKspPpEQvPh53CjHNqCai3AkRPqJ6mEdtzn8Cb6",
  "key36": "3goGUnLXteQsbPnKAnqMrbxDGg4Sv7SCv9pdoSCG2WvKWGsGubfAjdTssVMzSVmyr6Wunhppp9JoWBF5hwz83zsE",
  "key37": "3xv8poMhEsUEquhhGB7Hg1SKWuQ241UyXgqNWES3i9593MqQWHqu7BR2Cdtn4avAYbV2eThMdd2nPeZUcvgL8LAV",
  "key38": "2YmNVo1ekUvRR9FbB6dgmy3B9e7n2NgK98AEN89MbyYoE5PZVptevbk7kgNxsnsWb1eqJGNuVzPkSaLAhBV7Ejpy",
  "key39": "5o7sJp9k66EFRwwgzWPAzXVNuj3LbAa4f2S91JpPPJtrrkrQ7nwGnLJenWARykavknpPEZL3U1moMbqo6AQfueF",
  "key40": "55aCqTx8kkhHE8QdcZ1yZntQR1Bwj77JEXnULLjgJZhhxLuyv2KEUzYUmLwN8RXUiN8FaZXYxBT78Dc9SLhw9yT5",
  "key41": "3zxyRriA5ub8HExZouYAKusY1FXyPVLV9guBAnhswZXkPM4PTG45GSmNGykX8ogGECh2rUChJ884KaAzqiFmb66t",
  "key42": "Nda1RKHfMo2FxuiduzJ8CgeBGhsCxgSEBDuksa4K6AVrL7Vq5UEYuuUQc4YG94YqSGCQKEzBPa14RKfoyjbFdF8",
  "key43": "5zpsNMPAZf7W8KuPUDyDfnS3uCNFfgbHGsHhnM8VTqSHDZ2TX2eD1pCKniMb7hUghYfh3bVBWyyYL7KUVaosf9Zm",
  "key44": "32aaP8CUYQd3QBxAnm6PcZuArREsmk56ipfQEeY9fy26wYeHKpsKy2D2PPGBGibDghZx6hRrRKgvXRrP7pf5TRZz",
  "key45": "47hgbVGBkntCoMLqNTz4ryNtQDXtC5MwjmKWYY4FEiToezptAyBBNrmtwkJBpQZCCw63DC5DABLp9bbL7MqfCnRZ",
  "key46": "5npzTBEArkRaexGGUMLftkfPyttw9rEYEEHviTKAuT4RXaz7NxXpcQQg5N2Sur7TK4ao3tn3e3kzB8xQKD6KrqLu"
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
