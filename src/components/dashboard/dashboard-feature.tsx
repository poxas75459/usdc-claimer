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
    "4BaVcNqJRxT7Z3aLG98s6zW1n2AVtRCftcFQupuY5kwsU1HV386MmsTmcxxvZFfKiTz2HuR6vYR34xVefTfN5LJJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w3g82VjtiJP7TxSsw999dBoyo7cKFGyJPLEHpadXyRtE6JNBFmhiqVobqDcAKDfA4JHbk69S6t5S8aXiJCzYJ8g",
  "key1": "36eNv3Bf8v1c819jX8UUnD84dfuenQPcZoDLjBgJKYDw8ymfZ8bsdRbhR4TUjB3QcLhJSU4p4Le2xBwBcZ71BpNP",
  "key2": "3wBWSiGE7hrKckNtZaeSCHV9VDiZGgJC4npfB8WwBBHJmsczBQZtJWu4br2L93cCjMk6UeocZQtaZmiTXTUQxkJ9",
  "key3": "7udnKWsBG8g5ZKQ9TDbG4PJLtgxBXiUUfhuPX8EWkN9TEv31mKzosCErNhsLJPUM8nFriqVjfvFXdXRcQFHvQJg",
  "key4": "3LRRJv5GQThGh7n2X4jBrfJ54swFuuPoBhiiEj2vdGp9nPz8KHMGRCiLh7K8fqgoKEsUUfqMGbiKSKUCn6dmXbXW",
  "key5": "2HfjNaU5WVwVuTjNyBbYYfCTPZv8rREoMKsHgMtADabDc2uNQGAMnyt7dCruAj9CL8J9R8uDoUAWrkDadFLQEskp",
  "key6": "2f3ss8CzAxDFpQCmHzRHB3UoXtTM6rVenZpEnftpx3AijwPvAQy451WjncGYoLn2wSHqkudBKS51jGkszjVKXxKF",
  "key7": "4ySVTw9bR4KvcCR57TmynFZCgJgJcno3mALAehMpPqJ7Py95nHFPmqzxqQ5Dn76Yd5xUnbRjuvVgTfqEJVF7pt8k",
  "key8": "51e9RYaMCcvcarB7hqceS5ibbUccf8PymBV3J6XMmoGmuLUpLHf2bqGi4pHdRT1gaHoKahggoqRfKKfo4MjUyL3x",
  "key9": "29WXaFGfHwYf3a2u4niwYj5nBfNdj9XnTuKwr71cjeVib8KepEaVNA2MKvovjTCJFfBEaZqcKbQc4pXsWDusUyCC",
  "key10": "m5aPHZ7QPtZFB2rmQmoS5ddxqkpS4h1z6E4W3xx4EQSEEQHDmbBk3bWCAUk2L2KJBLwThuDvyenHUfCepo92VhV",
  "key11": "25cuFHRi8iGhHoJvfY3rdsR29UEMVcBBDpspbXxqoDszgEcUeMmu8CWzYBT13ZGahrWG7ZuddrFXo37ciC8vnvgR",
  "key12": "2HY9ALhu5amrDmkkxdmgDVghTsi6u3A9QhYXjsMdomLkdbnES2nwU1uCTo9RMziRpQ2Szh1nvcC3bjUyng8XADRN",
  "key13": "pT95EazvrkL3hyLFyuF43L8TeXGQrBFoSdgYmWCovaZYSYHq2umPH6ciVaQXfBy2ZqTCrGNsVb1hscixqj1nDwu",
  "key14": "5YbFuXWv7ZyXthEnAAdf4zAtkzrZo2FGesL3jPgJjaNmFtqvHE5e2892LNBZN5P7ze2kqMBzAm7yuBKNDRT2EcYw",
  "key15": "3Y9aHJPYMzeCUX1CqhfbwXJgCDGjcxft8wG68yzQ2VwFo6VmXKfWJFXCrZZPXjghXvpbTqPUqec4sx6c5yfrFzky",
  "key16": "4HyA5zfL8fhJkueTeV1BuDz6Qi2mfh66gGWjYR2oXRCEWFRQBpGhgVH39wo1Dnyu1vZHcTnpQLTgW7TphhaAKFW4",
  "key17": "eHVRySQPcGVQXMF1Re8VnujpChWJKX5VcCGdZJSJ8vih9k3o3iTgxqyufrthS2hHyf4AdRptK9VSD3HQk9DH2EL",
  "key18": "Y94wihwEqsbmihJhtAku7mVnTLJnQ4J6ZcYAVxCn4RhfVgBw8bpY75T9xQ59NFsoKRFohMpJdLZMMT1m2fFQnZd",
  "key19": "3A8agkUUx1KwyAnKtDB9UZUajs44rY75b2EgrnnFGtBQSSEbvdyoYdNajUBGmuk6bVLDDoPCG647onPjrVAJXTTV",
  "key20": "3toiM82CuUm9WhLHdbEg5CJsd1XJPzMGmjoedGFFEc8VutJB8QaNQDbiMEmWvAtFWn3upcRAtBQRorLPeAUFdKXh",
  "key21": "3dDJLFeA8qEA3MNuaT6S49HyYXxLtiz38YquH7XgRXWg3yRkCsm1s2gSicfxHk8AbttCat6yCJLGzpjr8WzBsRmz",
  "key22": "4hfEQ9g9ZuiRuZKZiiKsNt3AeqJWyrqYDBw51qXJVQwf96YuVjjdoGb9LNmkzkcYRiNGoinAJipxjxSsvr1mPaVw",
  "key23": "5uDr1MFw2woNqCNF8WubA5qWZvrDQLPMgLD6xzbDfJ8Jvd3giytS4RZNyXRi3ceAbqxUzenZBfqkUuzT2xiimh3g",
  "key24": "2bHwjWPe7oTEe2y5Y6qGwRKgvnJAeDN6YHbpUon1LYcq5LEZegrwihcweF8RNqisaAnchqQDKXMJPfX2PZ6rArai",
  "key25": "4aPx8ZwBGPUe5V13o5pDyNeytHKxE9hwW4RCqWdAmrKtTN1BqN8tQHYuQnGVjfQGftsLwTpm6LCHYzEeGrU3u7Fd",
  "key26": "2LZmjJRxuZvnPU3F1Zm8bAksmjREjoFjDzYX5S5g53ea4Jy3MzGLtAmEtZjth4LY6QA1GoSojqYHr9tL9JPyrPTm",
  "key27": "53NHDKW5N1gLBNzodkdsDthKTSeGwB6iYkVekBjzhso63DjQyseDzPsXtcuh9r7StjBhGboudkW7h3vkddregxwv",
  "key28": "dkBSjoRSFi1WR1ekUT9qDLb6Q41uquVkid5puPaZfcsFBP2oezNwnfpxbzSWCUf4qfhzxktEiCZbPa67Ri546Ur",
  "key29": "3e8M5fp573FCqAGC7dz1LP3fGGzMni78GMRdJhiGK8K5Kox8KzmX3eZC8uUYk3YRqsmi8r7kU7bmxPPvJPRnwYke",
  "key30": "61eRW4bPXbTiyhNmBfbApFtw3ZcxNQbaBPstAaoxUbVUqXm77pHLhoaiEU25j1aiT3f9QxcBwTcThEjr2bBjaCxv",
  "key31": "2wTNVrPpJVBqgb19Hc8gyeHd3Dwh9jgBVTtF11WbFufyHnpqhRN7QAca7Gr7Ca6SscX6V89BYrggp4b8bBVRuPsa",
  "key32": "5JzFGBAbz375bmm5hYrmRdNHoKQqJuiYcTsozgch8A4tWfbzbQd3P9wEq5Tu5ogfHAp7n5YQvYyfgd72vwebPW4g",
  "key33": "4SUUevCLHZS9HDMbviJjQkgnGxEajcx8tcBqWZgWjwHNjdoq65pbvqxaXnKwKdtpybUxWHc9Ax7hzQTWoM2KyfNP",
  "key34": "3RBrGWAa8rgMRkAGMjaMtrUmuxy6mzaciV2aYoH3LRtbZsMjnnPsX5guKDYnsqa4N8bSvkNw8rHfZeym1n8cYmhn",
  "key35": "5RHyDkwaeiWnWGU1SCusDg8CbKYyDJW1sMF6gTmbZFFG89ZEVui9hPstWVPuq4RUJPv4emJqMiB6ucDMKDQf5tGt",
  "key36": "4MC5m454agGFuxLgxHMKFiEWMbyYRj4W9AZnxV8TZpAXuAy5Y3B9vXPh17BpKtkQLCySpnRPk3SB49dbxMJV2kre",
  "key37": "35SMua6PfY19tQGeeH93qprvwNFJv5Mcwaw4DnqQMYJm9PcgDAzXhjnkMDPHLRapU6JsmHq2iJci3hG2j1Cenge",
  "key38": "UXj8C9qpzZdBP2mrN3jUUvDvyysK3nbP4CZeTrYSwykQtTDkLzAFRxFNQx3VgLLbiCN6BUabwyYJhxzXAp9U83T",
  "key39": "545LEALVB4nmyEMR68fYQgFNdLhuJhygWwJ724LtCQsEZ52TGBfN26dzej3PmRcd6G3Yob5RSVkK8dw7H9PB6z9w",
  "key40": "4WNAu1MBgywjBHFvnY7vGVW1qikxkQa3qJ44apsUcPSoAfMbPBCNRhS9KqDiHDJmQ4BaNiuxMFMzimcYr2FjhRDN",
  "key41": "VMagwKJtiQBNH2iEMXEFqxfCTbmehFyxnCG3qnMxP6rZfumxRgZbRRQagWFjAtCyFehqfq24QSJA1RD5aTDokNP",
  "key42": "3UH9jXrL1tH3V9MT6cbLXKCvjy1hWC32YByCwRgZaiQyUjMay7moWPhDmFdVEpaAhDr3V5UXfxXsvESwbmDNRs1P",
  "key43": "3AMYCfS1AGjUyfjCzLH5BLerFmb8N74qEwGWzRLK4NLxbL5qW5Pu4gN4jVpcEDWUcQY3zGPQrxzagHfZBgKzqQNK",
  "key44": "wPauw6aozMEVbyGZzDg4WJFs74ZSJqC7b3k3Qp4tBVkRa1sUSvqJFZaxoVsrozCxtHrCEvxwh4vW1wd145BJ4ii",
  "key45": "5GyVFhmvDwguKcN5iekdjEwJtfctyWVnasHxUAjpnm7EBi8cbAUFdq7sMcA6jAscKXZm2riMoNYS9jxsrerSoKbi",
  "key46": "5XCyzpwhEBUfjFpHr6svqyLpCn7DfcN3pQ8vtLWnZBTY2ioUfBnj7iuWTv3en7jLr1DgAuBoaCodnUwWru6VQVzd",
  "key47": "4SkVk4VXKkAVdCkzoqReKJv8X48XtN6NF4wKQ8tT6zqgBBzvmowGkyWkNASXfCZdwHEVXyH6GCgrBxGhbDW1Nj6p"
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
