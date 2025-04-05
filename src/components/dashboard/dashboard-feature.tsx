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
    "EG9bVRSe5suMrzzHdvgPtGe4XJgaUUdjoMJ8bQ9DF2VEHmXfDgXuTs695snXD75BVBthwugiY2gaQSB697vBbFM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qkvr8MB64sfbrMEwQQWyfC5CBAbDB6oj72sBseJuV8qxGh7wxsrjNS2JNZoa6pr9xYzJ1WNXP6wcjCqVAEGy3kn",
  "key1": "2UWnsNmthKJCJF5jJRLbpo1hV7hq8UMGz5VqmxaFRw5537euSk4uPRnB2caGQJdpGWQDKK9duLb8QGWCjmd2HaLH",
  "key2": "4wRyZcUddzagpz82hJXchiitV9unUF5C6xoUG1n77k85gR2W9AwZ4AR26XFmdtxrLeJ1aQRfCCCzPHzq2rk2e6Mo",
  "key3": "4wEpShCwmVcsRTFRRVG5x8wVomV5jkfpNvgCa4rHeqzCymwaJdm2DzkfRwoRPSwQvwWRRE3RpeAQsu5XGwDU244h",
  "key4": "4Kfm6VGXsZhgo5XDwVqbeg4RfKVHWf9s19JZ7WJQkQxGWkVSbZhTGWLX22FoR2qPxS8LeEEVq8tf79qb2nvEMiUt",
  "key5": "5Xt92BjguvV5CcCs5uP6PYZagp2CmGgnyha4iUq5HwTYHdkqVb14xt4vHTTfUNKwWYZBKqHGHruDAt9ke3QLq4oL",
  "key6": "5UU6xiqjJfC7BoX7dq3xjKZJiqbeePPDKrY5knQcZYPKUx3K52ZGN2yg3qUt8v1Qoz826gC8fT4a8mUypKYojSJf",
  "key7": "2X4nhqhR5mW2fz3dkp7VdqfEARrtmoibVpgSd3SSmEh3HgkZyir3KMMjcpWeV5XJiGb4JhwEi4kLXibevb994QEN",
  "key8": "3H9SWoGGxPmD2r827iqVuQGoRUtJkA9aUeXXjxAfzCB4jCWuVCVo6HP3rxvJSEv16PR8KPVsgbnj9PBZYxLr4ZTX",
  "key9": "s4rkh1FkRPqTbZLP3d67r6tmU4aHsnC3DaPBMQeQHYsXksPaqtfRJ8hSmbJZmS8dSHYZ7bHhYdZrjvPqKxuv1yL",
  "key10": "5rTBWhXhNJiSDLuAzcCRgkcqUjXss5r37rycSyu6WnS4SzVVLsaMU3Dem9qNygAemHTjGCYRQbWoxbG8fG41jDJp",
  "key11": "5L6Y9Eqkqe3FKimEjcpm6GeHVPoQVDqrbsKvGuA3fmcx8Vorj5UnfKydinjYzRatzB53tTDnSvJzmiecEjwyixvV",
  "key12": "2SaLzTHWPfPgJUPD8GN3osKDsiCALcyCMhZ1F95diV51iZnLjfDP5J8JJWxHVptztNLsQhv7vqZfidQwgJbEy1wA",
  "key13": "55pRUtuNXxyKCH3h8wvhvDTV89gzRmnbj4pVSruUpyCAf1dQq6yvMybNEMGy5SkybmPn8hpdMNU8WRagNPQPX6HF",
  "key14": "ygA6uMftnzcJtoQWqgNZi7QFNruiWfhLPhMbu9vpCcHavY6SvzVbvGacpPXZGCrmHUUEE9eRuQ8UkiftDSFAeFn",
  "key15": "58rPmwVHhgf8T4G5XyhwPLdmY9ccpLPZipZcg4QYUvJWndc5HZWfWCd5VMpc855HMN14X4EnHmSj2QByj8iDMJx1",
  "key16": "4pnbPHg3aBCTenHzN5AVCiq7DNDuDBZW57xsM6w2UtkqauAweDAgcdsuAgWPGB8FVNG8n9x3G1QRsgFXVKuNTzG3",
  "key17": "kYowi4KbnqUno9Q8UFA4vaKs4WkQAbnskiYBceBX7hyBu6jqbVJrdanVH3ua4qQ5Wk9Y58aaTvuk2eDWTRHFF98",
  "key18": "5bg7LyGNNcsi9trdsxkwAym3sKef47PVKHZbEJshWSvgyoQ3EhhzpgbgC8i9AdypP8CpoxkqcDrWRS6dPFmpHUrF",
  "key19": "3LJ4o2sWSpTGsfjHEDGBzsKiKPkvQiDpB7NX5jyYCkgk3SdcvtQrNsMHiyfnrNdxN9ptUHTuGChLQqSfMmA8CC4M",
  "key20": "5XvJaRAZFBCzaxUJcRjpArzcWWR5KaLuncwH4ULoHzo4Ako5W98o2G13MRSxvwrWfJqULsNc5v4wW9hQdn6H1cWe",
  "key21": "52KPgF1VpybVEUTyA4AwCuCWKS3TSRXKBHSXgHX5qhbtTB8NFyUSiA7NpvzvM53jdDSWw3C3QgaTPbiDo3UhKQZ9",
  "key22": "2cXbfScNunieFepUuPd7itn9iw2NojLubAiEHhGEykRDrGTCVjTX9y5qH1Aj3xn4SVVcdv5RarjZkifX4qj9A2hY",
  "key23": "HB4qrwZBhRZoaMWTshyyjwp9hq51A6uuqjKH2Z6zc3qkpCUHGt3fT5wVZsm1upLECy84Uq1WwSpkENESBFNMWSp",
  "key24": "4pE3PaX91fGygsncgsJ5esmPjvt7eaDcfdjVkMURByfJNpN6nGtqs9hKwBy5mnWDH5Rn6Az18qCvavsb33b2xoWu",
  "key25": "2fFPG7M2BWUm7ibjE8hzcsp97XiRRJRWzb68EymPs7APQwneXaoaXcKQrRDCx4jPbQEz8pDm7Wg5ZE3oReXGoxLZ",
  "key26": "oQ4nD46oC2GSV41RaJSnkswqfeHyqVxZv5Cs5F8bnAJkxj8d4x3amSmmJDGfmBKYRrtr9i1nv6XARAjU7KsN1Mo",
  "key27": "j7V6R17phXwPvhrCUYY6bTFZnbsmiiGnnMWHgkAAnwvdAJFwmcDa2qLPjevLHX9o3aM74kt2jtrXXgdj8aZcJds",
  "key28": "3YsVS4PECeeTGvsZR8GgX2tgSCAkJ88Af6SJgSrJ5A4LGmVg8hQSvQfUgNGWaXVbHjufVrYtwCaFReQb8fb1BrKC",
  "key29": "4DgCv7bbJuv1Kmx1UNt3XNZqb7KsgH1QeGvsoang4vP7mGkUvjHD5fkrFXPTtKpCy5MaBiMJp2y689PzL9fMg78S",
  "key30": "3fcH5BpSeJ3mpBW2iisNXgbqXXx6qtYRRvwCwzyThofocSYztNeynUkDWRakMdwGHsigacH5Gh2FbS9jyeX3rw1A",
  "key31": "4cVKBvJke23cs5mKTgPS7mFYKwZrmE4fkw8wXR9E8TGbCSH8ou6KzKtrhXZHr2x1P9pUS4o6wDTJ6NTPzDoPUnry",
  "key32": "3UNVePV5XQWA7ijARQa3PmvQ3k4ZkDjr8d3vfGFapabdVHcQszoFhB2i7TPipDcAXPVU1hH99gKLPbJc6pB7BmTp",
  "key33": "3BB17C2sgumoD1ACd58URd4FZM5ti3YSBdG5aaZBZiRGqa5fRRdZ4gVkfmPQ7H3K7bAKQDvY5FfBfqXYg7AxTL6b",
  "key34": "3h7QdqJtK2GPgg1WL1r8XgKr9L1jowkDayWJxmkHYN4x74vccABZDN9Fmc7GCXu1672V2XyVcVrWW1UVN7biEDXi",
  "key35": "4oFTSgHKPRWzWW7XHCb18z1cpbLs5FvAjGqvfDJy6cqTTfVZNDEozzETLYsoaXtfJXFHiu4SRV5rY9jdbP77Hw1m",
  "key36": "5TL9zngvg4jRD9y17wVaz2pbAwMiQaCB7qcGct9TfDhCiWMENPbvUErwB3RN25r1rHzDjCAx1yAc5EfUYybLDWpR",
  "key37": "2UEB8XiCdt2c5mZ8txpf1VhPsNUpFPoBmAXQSRVCoXtiZ7EHncsXrSzCVnY1xNPs4UrLHHZ1DoKYTinq64UhkarM",
  "key38": "WZeJ5By44S1G2mxpDW9BN1M4DVZfXq72b9JgtuWPdwNNCmz7FByWB6KPgZd5GCpgcL9qMEVtQz71CA3F5QNg55f",
  "key39": "4je6DCpsLnvYY56dGLmBzRNoAxBPrA921gYTw2gqhjpNCNUThC4ecywSWRXnPAEYA5kSs9DCF1UCW7LdBaob6zE2",
  "key40": "4AEz46KHCJwneLywpPwEgCPWeQ6iJhEs1Nsdt49hWP66pmYaaRStDBZefnm4GLGKYWeDZaSMMCtGgLpYyYnSfxDF",
  "key41": "HF2TxjSL4FRJVJPutC1Nz9cYKkDq88x81jCNdj2SDccLWUWLZpNi2mvFWjokGqwEGcota33MsdukmzrwcE1kBMB",
  "key42": "5acRWiVaMpgwa9kwUWZUdYMbj3DGxLsXKNYaHh6x3MA9ZiDT5emZQVQfWdgjMz37RCnmGDYmzXFgvEEXKJgaNuJm",
  "key43": "3P7WVjnm4geP92xGiDEu2uk9aG4BLhsz76RsPJhaC8jPkRFtCtgwd8feF9san9Z38RTppZuaVnAMb5QbB5B3zX35",
  "key44": "3dpJDjYzQgi5PmYSGaKcHWc4qkBdm53hrFdEjognTVoigpmnwAKAx1cFNaFWZ8s5sdVrhVdVBg4LfcWAFgZCF1qw",
  "key45": "XPKRmH77hsEX4hsgesFdx9HkZ7fqWndZ1HBx5uxwQs4AN3BGXnzVMq8brVNhqvteYN6chtUBL9TrsF27WjXmKxg",
  "key46": "2QjPiTmwj8rMGz1LEaLS4V5vgxxRfj7Y6tqXrP4Vvo2Dxzpjh8fop1XGs5tDh2EJGBmSRKaxaZmHGB1PFuu7Q7PT"
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
