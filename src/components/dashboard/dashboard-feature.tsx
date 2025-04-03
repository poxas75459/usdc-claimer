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
    "ywwGbXU2Ab7DGrg6DH5VR8PyC1TRb6F4kRDMXnkTjdieq46LZh9A1cXuGj1dxsKTRGs8nzgDMhbyoXnxBteqGfU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y9FjAop2XSqMbosq3wWT7zm7umXZk5we19dtJFWScZ3AUKBVgNqwi71tncLeiwCmyr3jaDzzEgaGb3JLTHrQr68",
  "key1": "5ntuxQEELT2SzjNZozdBtjU7Tma3qzZx5afLEsQbTFEWHgQx2yH4d9RXZ4XVDMQ3obWSF1Mxg5BQXFSz8S9CkhEN",
  "key2": "4e7j77Tf6HXAxxknqNwqBXZ6qEVLMKeSp4QjqaEmTbbqHAVQbUAEa2hu71wyywbBzsPK9Zg5X3pR9ZWRVYHmptU1",
  "key3": "3qbJCZfK3fP1n3ZnTrYGdj7sq4Qbyv4erNBCXmWLr7G45eBGn1tAzqqzSXXVKhggDaMQvG17jyXEnH4z1bZCXFRh",
  "key4": "434vyYySFwhNah3CyPKn81cbV4VvJQq1FYyo5NEPfD5jPzYbPWJ1HdanQMVMcoQWyTc6TtXvXT31tJF5DKA8omZ9",
  "key5": "5VjnVbHrZ45uvUxPv5tZmKNuRJaw1M35A37Bxc7CJExsdDyCchLHB8kSKr6H5HAMR7JP3iVjcZbxAf1y1gsLrg6r",
  "key6": "4DRBswNDBvCy23xsBvVPbsF7fFaDx8PxrwPKxnP8GpjxAu3SGT1T2WSJXFz5wgFJfynTjqTwqEq6xtAaLbysmSeU",
  "key7": "4yFqAnzZXSKCPHUrBffczF7WLmCgBa2DRGXK8Ef7nU7Ga1i7MVB4aqJitLTJqUtkpCHQCGv9CDYM7qxJYuHTwzVW",
  "key8": "3PRcP14nfJFqMwFUBAzuuSuZbDTRECS5XMV2bLvYzaDGLVM4NoX7emY7ATZbs7xyawyojnXceG5ayzzssP5uJRLj",
  "key9": "F99hBwH9k8Fji9BmgLKCyTWmKYyUEBZ2YVLKmgEFDyR4T73wdGh2UpTLBFjXTjpKgj54zzz3sMcWDGtfmDk3CEN",
  "key10": "5EpVyvW5osAXC3tocUxjBn6LrnKqYifXpYo1TahkGJijPAyrQWS3fCLyCaXidDtaZ3xff1imDHUpwYSUGE5ab3fv",
  "key11": "2EzekDT2kqhoYsmTs3WfJTHb15VLzJsp46S9GmXFqQggRyAi95bGBx1Gxpg1KecgVKgSSLfk7YncucguM18Ju6s4",
  "key12": "3aV8osHE8ieEBR1f2qNPTTvedfVredzMk8VJ6VVc5iZs7mgUbpiJfiJ6SMjGrvP5YRWHCCqY34kugwjuLTr33kct",
  "key13": "2BEC2ymp4NELAXj3H2pb7LGm3VaMrwFUVCP6MCz9apLdhVenWRN7yDumJEDWicLZQqCHXs4d44FG9wNPBL4vVvXZ",
  "key14": "2is6WdGDkhMZJ8hFWJv2Qa1CV95EArqMVgFtrcKZLSbXCJ8UhEifJ5e5UM3XAae3tmbUvzKoJwZZhc1AXBge4wG1",
  "key15": "5G5LAQiD3isjfv2YWqoTZc5gUwhh5c2QTwgh4QyWi5wgsLo9TZKkFGCnpM1smcCx3Zgjv76yAhRfjxhfHvRcV2jc",
  "key16": "4nBuuekerVbGNm8s5FqSgkzX8xV9pNHSufuQxhcU61hbQb34mQmjAp9GaBb4kikxbrppshqQXAo48spniaXsyjeR",
  "key17": "5vStKEk1KgerHSRJ9ugN6KKY1CAmWhT6yodyLhW3h1XWx7prj2SpoMxgQdWLWCvb8HSyryFVP5Y5qMHvmwqzApgk",
  "key18": "2QmSdfqD29oCMUei2zPvXejSfyFnZwcJhychzxZLTeu1tB93DvGAQ2JxLwQ1XXkLQoU4FD9NYRpmxAgM7bX881zJ",
  "key19": "2FDFpeDNFdcq32UvkogJfjRiUEhzPWhKTom59iTentN3gtZjbGo6SzJ11g55VNQNAevXygZbWNWbrEcp9MbJ7QXw",
  "key20": "rMnaQwuyNvcDW4ykWJKwjBMW1w6av8udfdjYK7eTpGLEa2JtyqnFk4Qot1TnWyW8Up8xF755rhbfBKH6xgZwyYD",
  "key21": "5WLsCv1zmbUsSahghCWjDZhYcke5mMjwHu1SdVqTZ34iczKMczBxadF3xT8VsWLBGscuUFw6s3aB8U5dygFNyzRp",
  "key22": "C5pj2koeY3RYEUM4XzyJFAmJWqXiMx2aZNF97C6gE31G3DZF416dqXBJoTHWoHn1XeKU9NyEaGnuA7jHUg9Fiud",
  "key23": "3oHRt7Wx1nCsSp2pKb6ZcigQvbjAJGZQ5JqRQzpfeCMFypQpwJ6hWTqgp35EAPfMzcvxS3qEeC18HQ6pdafHNAc1",
  "key24": "5626qHzX4KyyoCQtNV1V8FhckeLhv68jK2NJGiuBCzi9KCFNFkv49ymLcN3HJMVMG9punAiLVXsnCRxVhqLRxKXx",
  "key25": "2TvZk8RWznmRoUTJrBrBGcVT8QQH856p2LNNcvmMFVPqdidtgakv6XiU9LeYtVDPpF3GxZ4BFogshL8EFwPkQZBr",
  "key26": "4E2bm4yB1mkq3FVem1pfUChLCzua7ARkAu3AVkvKsHLWEwtECcUF9LuSJXM2W1dhJVrUpRB9FR5v7msJSNhaEEwW",
  "key27": "TrYZNvWpr3a8zDCvwZmngAWHY2HLDxbYi83v9Yn31mNCKzbNwbyDZJe6QcF1wqu9exhrtry6vEetMumLvBLV4ED",
  "key28": "RoU6TVvuupxo8pLfBd5dLCFriCcb9mDgENxiapBfX5BB3yxhRbaNawCnJSygxA2BvopU1zSqaVJT9GyvrNDZPtX",
  "key29": "65rDFYxHhRnXrXRQb22nP8A5E4ysnd8BBaFHBBt1dg8c6UeVXwsruYiVBCEj8FkqZEZDxpFU1p8wfGYPeZ4vVCYJ",
  "key30": "3n132CBqsKtr1DeMG46hRXB3zi7pU4w1s1V2urBi7SaXpfY9o6N5XgqcPEAinjoyLbwfC1nwtmptApuQPQZtJfBZ",
  "key31": "4vj3pKfc42FERss8YzKSdXmB2G4qU5JQi7NLQE8aJketjdaa9sv4VpVswYeSkHbqn6Xu5sKPP1e5TyzuXrdaasnD",
  "key32": "5stYXr6uF9jc8pK3WJUfoA7iwq3DfUpi59YuzTtfDAc28hXz36who6srdrqmp27NnaaQjVQSaAftVFC56uCLFRxN",
  "key33": "5cmNmpVs2AiWBgDkZoT9gJRUdsUztrfQxNsUwTH6fjErqVEEjxgRtfvjeQ3qaLzPdQuFdb2PuwHTfCgMSq4s6Kuz",
  "key34": "5eBqoGbF69SRdW22gfdmH2jVsKXjnYp4juQ6oP8kD4hDnyopqFDnEhQ9dUrTDtjYCgfXuYAgMYheJFKGxqqEYeUb",
  "key35": "26vJZnW4w7wLgppvCDYi7dRzJA1L1dEFooDwGDR6vBcx2vxe1ouSWDgis3Bd5HMEAZVNbhSYA2vxmyu5iPjc7adS",
  "key36": "5uLNbqqJhgGicqpdkePZCADnWDWsUENXvGH1KUTTLuF5cm8e2BBbkV98C9PNZix4hLngVHZTX9vz9WneTYF3FKWC",
  "key37": "4xLREUYRo32167DpvMicpWLPsNcbqHgaZSeU8xPFqHCiwGBaHw9snDZhDAaRXYUGNJ949yBECvdcU4waHbF1ivMg",
  "key38": "nNPg8oVewPqfcyr8rY1xyfHo3JdAPDi1srypkRbVDYtryGPCTuNJv7n8o41czPzHTFT6C7KL4FSPPMUcKagvDKP",
  "key39": "5L39LehnxGbjjY4PGo2FZ8xtqzhBGUE1zviWChRnQucq5zGiZSXZyGjxrH1XV2QHF7YEQodYCofwnPXV6LRXg5as",
  "key40": "3FcniYAhtipw1Hq9NJwQC45yoK3KrPDr9vhBSnqqXE5F6MXb9WxT3FfqeDhraaFWuFDZNmAXPH8V3JyXn2cpaBff",
  "key41": "3L9N3Nu3hDgg2WjJNRWeqWcD56hkPkoNdwNakKfUgQ84gw8YWxrvzzRRNGLwdCUSZzRCyseSNyt3xGmaPGUwYNXW",
  "key42": "4wMF9KMkNywXJjjQutL4hLy8VmXAZmvAca4Pa6PoCgw3236xUHeaAjBDDwSXrHmVTM7AreTuYA3juLpeghsKvktD",
  "key43": "5sQ9RfHWNjaQmhyVRbCgDCZfGC37PzJg4TBUBdRGLPbmHwwCvmXEwK8Ym3B73gtt3qbQz3FYtJTzqGJYa48XyZVi",
  "key44": "2aaV4fhMYZA31Jco97TqAono3bgcDcru7U4VoYV8ceGnpeBKwNFEVc45xqSMkgvxCdVRW2kBu3irDwmD5tBFioY6",
  "key45": "3xmCLkYMafFLPWQhhJLMNo9xtZf1KvDeQjgtWzYDT8xQfY785ioHnycD6rszQscPj7uhisCqFAmo2CeffxF2mR1y"
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
