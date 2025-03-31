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
    "3pGTzbcm2w5MFcR9UAaJVw52oJafBibYSgQ7idvK4KG6peksCVgG4ZiMgDqVTgX6KiJvPt5QVroZrGhYbQQA4Umu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SXKV1twCVAMb5sAm3VCB8c9Fxv1gz76cLiQPqqnyRj2qc3BEQA7qrxBqqgPcMRvtU17dTyvYZSXvniDa5PMxfyv",
  "key1": "uFmDDgQ3W7d5YLN78b7WcYNCg5mUPehjhpnBxu2A811VYRMParfmKJnccsz3aAXmQphpXWqnfQmMgX4SyxRU5aS",
  "key2": "5EqkAXRfegnay6G3JTj6KLxnWuT4isCz7duXoBMz7w4GTPr1nbUfnpkbhtZjVENwd59tytkuEvpjjT8LfeMbXnmn",
  "key3": "5E8RhPzVoSgX6LKu3VwXQuG1a4uNdttnEwjJygNJd8ULytZZBPhtrenAW4mdxg3bJtRGhHyFkZNmuscQe3b3BDMS",
  "key4": "5zXukVUBDiUrQMnGB8kddtZTq7hKE19WJMoWQQpNozJFAvT8GHF8bVvLM6HmJmCpmN8GsH6DGJ98z3S61fRiZCA7",
  "key5": "2KW17hM67Mc7oDMcJGyPqaB2sKgE4KiYZsRiqA6QH13TdefREJBvjegutK2drUQkya8kmX7oCk9xYenGRn3DPjuG",
  "key6": "58gmKaq8uGmZohkWKenetYDKXkw16Z9qde9AhRAkYQ158m6y9KRgnoCb5hqDyAWS4VBAyHTwhbv977KgnFKVCLf3",
  "key7": "4ZsYw9y2XRFfB4hFcjhDu49apma5qjLfmrWTbq8NKfK4CwFMNWZS2xJtMqKFQZA46Wk81NPa5TSSemRkm2g7z1yn",
  "key8": "3puV4AFnrsgAUR73YD3bkzbBNdkSABaeCz2EAZF5R8H5wn2ECRerzVTb3G3skzHkPuFfs9r9dqMTHHXRfdDg4aZ4",
  "key9": "2vbjMMgjWBiNXREaEitoqMiUk63MtUo1nKaqfbLnp9q1JT43WRXXunfdh2ABEMvxX86sqNhPFd4ZZQGE6Wx8VH5z",
  "key10": "2epDLJ4AaSeiVJ3n69m7tpvHigFx5NhLZKjK8djuPtkehJ29X71EQgCEMjYXy2yxaQGCzBk93QVfTeYhsWHQoFJr",
  "key11": "57TfEmXKRPFRtSw63N17jbCPx4NFbTy8tMHN46KdMHuNr7TwpKPUXUaqRRFYKfg2CZu87y9kBiN9h3JDxE5uT13b",
  "key12": "2w7Ci67uzLdCchdKMfNqpH8q7YGZWq5K5dJHQ73xjh17JRGzcPcZKBgc6EkB7QMYWc6zyqRQLjh5DbGgEHjh8AtL",
  "key13": "3mgB512oGQB89mWGMdaVQ944Gk6Qk5g8kUAWn6HiQSGf9uyq4UkfeA2dUbpwnF6xCCwsMfrc69wagCdW2wWpjK3D",
  "key14": "4DgC8Z32cbvDRAf7QF7BdTPUTGKtJ8AUuKMou8VCWqwkJqvX18N4moDtWLzv4vxsENF7SRCRsgKqU9zxEjTMV83o",
  "key15": "3ks1MKRpjc39FUhTzrbSfHvsfSzuFMECjkUZ8U37XmDxHb6s9g3Gqs46V8G1GbgagmguRgZMVKXi7wKijFdfWaWe",
  "key16": "AzwHuGf3Kg3nd7xvnsENYTs7G9HJUi9XQQ95Wyic1y2WEfESj89npuVYMhdSX73yhAQgaB2sRycdZT6pyCVL9Xq",
  "key17": "2oX9m2yxbbCAZuEWVirFVZ2BHz4LjtXwTbKnRm2ajy1A5t276DisoihvE3YFMtYkBKiVoEUSFosfXiqnvKBgFm6k",
  "key18": "48pW7KWhy8tqQ1SuzkwWYJYi851XWjoM3pNLBU3pFAAW9ovtohjB87PtkXgf2CiYKE1C1T4SySP8VsPX9dfAXs2R",
  "key19": "4dNeACYZzpPxFeKj3oF5g5jN7pTRd8GsLC9RmweWJQAEr21GpsB7XuuZ9CqqZtUzbFm9bKr6zmSR634raRQQvWqu",
  "key20": "4e2yfdNJnMyvvWVUQQBfDVRYEiMM8g8GU8AQ5WzS3xm6nm7PVPkDssEHhHKwCGvqzns9bmyeaZVQB2WSRZMRq9JQ",
  "key21": "476afGJbTBG5uzpy9GskAhP6aWYovkiFraAeTvzTosZSu7BXeoXwTQX4XJZBGfK5WZMP58df42xq94rAVwrGx1oP",
  "key22": "4VLy8KQpZNUPmYEjXFsxRAX6zJxzBkXB392Wqp9NYg5ogaeHYYixcCRZTTd8fN4mzciagX2BMdAeVX7KtFgwKTtL",
  "key23": "4b6sR58PzeaomaPvfg2Sw3q6SJxXsLrHNGjrBxfFvfXPpvPeLAeiVCCF6zgXvQnDRdN69LGEccpCCWGkRuGdo43S",
  "key24": "2XivNPcSUZYSowRQaCfbCfdYZzaYqHgt7kAwPY9mBQ7vuaiqtPzCJpAPRxqnmVQZgM5BJwYvpP31m5XJQkzPCgGQ",
  "key25": "NwyPuDuLgFN5UH2jWsZPSNcoMrW2VuJPXEsGTxkitEkYkdzodMEWgMXPCkbBfuuHBvAM3zS21EGrvJxRKzbjg4H",
  "key26": "YYceXtzToHSqXjVLgNc6AAbDzmEVkbUaiWAPDGwXza7s76Wjh6Y3AAkiNNB8Mi2Usdz27DuPKcpUmyeBDAvHFH2",
  "key27": "2z52uyM1JUPGvKS5F43m4VqkvcGBCsfia9ZWowu78KeHK6F3eBPU3E6vaBzwo9TQufthCcMsoExi4HBvFra6TM4Z",
  "key28": "318tPNj74qWxBCT847zikqnRE6G9eFdBw4XbbpFt6YW9PmfmRsrcmfgSrEqChg6QTLS1g5LAtHzGs6k9G2uf8R8W",
  "key29": "mDnYQkU2xRPB1JwxCFVnPeCfNWGBKWccns9kR1HvTqGBPPQo2ewkHgbVRE4Lw7bdnfpMGqo1gtsMGkMF3SPDXGo",
  "key30": "2tHwNasjR7LnHvwR2jPWFoGHCwBA9x8i7hk5DtQ9kL6LijzUPpBKHGoXsHAH6niXZZj8cFj7dBYjCvfRJhQ42VHu",
  "key31": "3fb1x78B2yJYHsbFnLXBesE1cScZ9EmWnsWHYYZoouCbzwUDgFHydcwBHDQzEMB77BgEWN3uuqKPC2ZegfoDz1xW",
  "key32": "2kaiyAGgyYEro5NeruBZoSdzMXqgUNCSDvXnKMqrbACcWP5U5zhguTxoe2YBLJUUhkABG3go6Y4XvQp1omK8ttcS",
  "key33": "2x5ZngfXdh4LmoZU2cwEzD1Ko1geGsNxmSjWfDrXaukGyh4oisZpwZB9wuUcC1BSbXxkNwMLirBHTSFS6T1tbYxV",
  "key34": "4idcast1s3vunehnwLgt3V6bM5i4sV7iN9wygb1TmcrgbZjNeUGUZVXW1jzQiThhohkEbXUvjUFza2Q8F5h7tDXv",
  "key35": "364RoDzV6UBn1Su2GE8H1PHJwURWq9XfRSJmjhy2iQuk9W2K2uAS77NncrPQ5xobonPMfLM2yLWnZffzLM6wspKR",
  "key36": "uVmWgNFtr67uxjMRH2xxWrdtAP1QRmU3tCJvhbRCWZxxXPjzXmBrr5qat9soanxNgBkSde4sWZbp9GSSwpQFo83",
  "key37": "3BvaKPGQnQED1iH9dGNP7afeqiJNNmadmfHjrCXUAwdwjzAnycpXLEZvo2kiS4FWW9APw8mXjNZA4xcgLPB7Ld7m",
  "key38": "4hCE711VmLSV6qJnC36iUkGxoya3un9zBuobHDQxesisbSrrb1wnBEkQNC6QdHNHFQRosjL4UyitLUngK5xGet5i",
  "key39": "5RTWr7ye1Spv6rTtQNKk7kUZjNFW3QBbUsHYzgWeg2TzDX5LEqGz1gE8KP8Wix8afKwsi1Shsf4XVKe3xxpqCG4y",
  "key40": "4JXXvr1KMwEqLuXiTwrQfatd5mmK1LqaP38dDX3S8EpjfDvxATJvpqPBWbTKdRSLnw61RcrjYPmFXU6yyCixsupE",
  "key41": "3uUStd6us9QAAiLCK22tavBWES7RPCS541JLcjsmXCGRXKMVRFZPuEq1PiFX76vM4kbTtePu39WECcEYY5osWKBT",
  "key42": "57BNcHrpBABTPYmMRevbsGqfvamfr5UZCYZ8MEq2MUdgFzRi9cCTBfwtuc4W2D9ed6fk3euzFSYmdaYxRUvLP8Kr",
  "key43": "3nh7emNT875TsYWC5aGZW2WNJTABDdPvUZ7wnXT2XPCsvTuNUjXpcHSi1fXRX7qaZLef2DV11g3ZNjUNpKykRETj",
  "key44": "2FHoGegLJsm6steGaqRhBi7sQ9nhGHStFPXcpL2d8vp5fAc4ARmYGkxXEPhypGtBGWS8TyZuHPB9PfW6RCX8TFEZ",
  "key45": "51RFZBGZut898YaE86HyxLTUtBkunS7b1wTefbgkWPMC6kajXdmHQ3KAZ7XH5QTsG5UziJwTS1nySdHUMXfCSiVS"
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
