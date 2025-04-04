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
    "4taKHN3Lf75fg9cj9VmwQBuLuSdQikGCXrwxYXg9MqV36Paf6J8AsJ2qJ5hZH73fFFFuYAgsNb8KFjR6KCRxi4vM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34AM23Y4jbXn6UFMijmXkUfTbWcGVbxSPSc8ZBphgwL889GU1FcE72nQikCU1nb95KsfyZjSQydYT1ZTbRCwf4pA",
  "key1": "28VPtTm11HNbMNCmJ8832LEWagFnM1iVAYp8E83Cy7VCaqRHKYuvMdbb1uySf8E9idLvPAJqZdUQu8uQNGznS86f",
  "key2": "5ofbzFwyEGxdZ39YwS5E62HX34iS6Em3L3bRFNSz1rZbuKDsu5gLJwBkJhrvf5PFGoQbejeHchPNtjd6RXcQVCoj",
  "key3": "61y1ynCwYS2BAypSrAg9FvAd1MGjwDUyJ6K9xQcMN8dsUwSbKbnHKrV86AtP7T2N6TDMeRg9TR6EzHoozXToBkRo",
  "key4": "3cNcqzrGXvuEsY4NLkSkME6RgUA2JxrZ5DU36JU6a2y9NyBobZigAHSG89CnohT38AmNtQnNcJvR3Che9b9R7AHv",
  "key5": "21beC1AXn6YaSHVeLjHZjMpdNBeStBbP3MAJuRLgNxzq6wyKwTJj12SXscR6Jx1povUG7cVwMdaWcYDWWsUR6UnU",
  "key6": "5dgf3Grj8ktZ6ZkNYkbBx8AM275KaZcZVuZj2vEMYwBBTj29WFUoAX7oraBbTkDmJuLJcSTE4y6ovtosZS3Stk8p",
  "key7": "4srvRgwvYDEb3miiUyQv6HmVvyibzcVgsxfbjwuxpuh7JqbJAUZBQ3cjqAvu2up6T7xB2g68Dp9wJ8kUoJgqTts9",
  "key8": "36KvEiZw6jtc5o4XmBYpQhrtMc9zjfXFnCCW2TSSWquM47s3Gs83bdsTAUZRWQ3bLsCiYs4qM4bTvuA3yZd6FYjh",
  "key9": "2kAK4pSxMAYtesVVDRYgHbTKXtTNWtgBzRjunjgvjMPnccWSmnDQm1VjLqV6zNynyT31hcm8nzcLZJc4MTqwDZBR",
  "key10": "tXxrzxMUux6bTEPXh1V2xooi9Cvuxj9fv4GEKYjucXygLeRMiRZZbYwGZkHrkQYodyR6vRiqTKADBmfTE9QGEBr",
  "key11": "3nH8JQkkE9GvBs3Kue9p7Cp9Qac9aHsYmFkzrtoKhnpu9PuTjo6FDDvfJ45Sv5NGccFMW5XxT62HqQmyJAUmgww9",
  "key12": "t3FVJDi5LsgYwsQvpcGYqYcjtQBhYbTdz56wuQw8bDRp5FkzBMgGKa4Ei4z1c3nc8EXQQbdzjhEi28aeSaeHRTj",
  "key13": "5KPNtNFhYHfKo8pUVQt4tfLJA1GA2mZZ1oaJhs3sFK8okQq8yhDSKsh6dWcECzTGf6nQW7L5EXcoVpQwexJtWr4L",
  "key14": "5a6kwVvWszSX9hGTLj7ma7pfDSiNuZLvBCczJG4MVjrDy9pTmpaA3AvzCFtdtxrGZPK7xTxJiVTYTo9KqBo69RSk",
  "key15": "4gosfQrqDgZftbJxP8iPCBVfF1j4GpZNVHGKiogeKaBercU1wc6MoigKjhKTWLY9G9cFpqp6jBzdi8FpGsuDcfqb",
  "key16": "4zK163AnjcXQC1qr5xpoFMoS5ygxV2m9QU6RF3WNNkdaJPbP9DQnBQ7pUyKWZR3gNNwPjcnZXkrMiVMm9RN8eKze",
  "key17": "2XE9XDFG1Eh2x7shTCE9yhuCKZBiQ1f64tnBwzwjeAWy7214u7hnqBV7bGrtH4b4Te4d3YYWEgukM9AhGUtEzA35",
  "key18": "3bPTmoTuDPG7bzAFjgRfohgpqyBjdBTsRYPGKpfXZKz3tKGdXDsBcatSeXyzuk8ejC4YJJ2uxsocuBSNEL9mJz1m",
  "key19": "5rT8p8ddR4udRrfHKcUKnGizRpPDxgDAVQ9A5MA5WSgD4roneWpQbtNWJJrPe4ptuQrFth5DdWxyyomUhnpmqn9D",
  "key20": "2Zs8ZzJ9XX4PPB7S87x8xTuZJobN55Yrq6EA8kS358B4ibvpXWWHTc1ibfwyQKpyeECBMUr8htozXqQzkqAgRopS",
  "key21": "4JfyA3oEYsuftHjJFY7uMB7bem6c8TKj3zsD6vuFiaHpMQ2pt2fVT9sFFioDZC6dWLvCstYWf5cMmBKochVvTjR9",
  "key22": "5NLmeG7JArPumj9smpAPxY6VHqsUHxtHSNQwfVCY247VDphXir3eNn7zq4pFzUdC71pcGeNenZZDbm8UdnotRTmc",
  "key23": "5ZayheVXWPY8rHubwbjDW9UgdUhEfgMNBC9JvBLV2LTHxC2zSjbyg578QmEFdpJ7QRFguS6AKSVo5iSVwiRoDAKu",
  "key24": "3FhKeMsfKuP5GAnHnM8kd5KUMvCJgc3PRf4EpF44BVk21cMhJncJSkvNqYUZYMFUqKqccgCCaj8vJp9bVg7uy6Pz",
  "key25": "JtCowJxG1fU8NYqMZM8RQUzCmqW3LK7caFmg5JByvhZRmP32DTfzsf6n4yNdgrRv5KxCEbRadVzxSLovNjAhE2t",
  "key26": "5Yx9VRqRN1yowvao71bbr5KBpxazs3iXd7w9YzyqfrxrVXHbvugFBN2BdkgjxjpdoFmTLirxDg6agHwA3bkYQPqN",
  "key27": "3XUaVVainQEtgLd5H7gQEvZKXBrsjFp3n2Jm8DsMJihpWN3xrpx39rkcK6Bp9SDzSxeQsKwJEyg7DTydoM6V51gv",
  "key28": "49A7NUmAKznRkJ9VQZLjAxU32sies2q4v5W2SEfYhtPR6ZMner1GrSbq8khZX7FdC4QVm3mWWKGVTVFtxb1S8dLZ",
  "key29": "2nwK6Esn9RgmL4o8WV3AC3Tmv15poNoiMYd6efXZmcfWDVMFWVK1QoQhLUSNU38xEaUZ8EFKyFz1SUwHkbvcjro1",
  "key30": "F4E3oLRsJAaZiCaJ8SZ1GDHzGCGsZnfN2M1JN3tt2mAtF9g38uef3W1vdd4ZEPHn88tvyNMyGp5WUVgHYsLnoJH",
  "key31": "3oWrvnvesZKnUtmR6wXNJbZ2zpHGfqsXNYk2rhvrF88ofBm3AfMsdGQ568n7ds4sQ57zDedXAULupJzgj1XWNyo8",
  "key32": "4gk2zv3mxTBKgcwXzcoLpu4pGQBQvgsocHPq1XZip6co5o8mykmaCGg3AfNAwyZxiWRJ2ZCysGrHYtvhPERaGGV6",
  "key33": "ukPYK2eJCKjFFrCX2cPLg3WBY4986f54SoSB5KXQYPzGrjpYKoG8Xcx98uTwBgE9vtG7L3xDXt1DhzKdYfoU8NS",
  "key34": "3jMQHPvzsEdK1D45fPaLu1KHDuAHT3fXjEhqXV9av19Dgw6Y14cdmi6d2Sg3GWbjnUaYEjnsDeryqLsvH7Pq1wFP",
  "key35": "4HcTbt6ZpBDqAAeof4qayr6ksCUmY7NzEkt2hCWvhbonuNnvQt9syhtQwrU5GtUuHSNDD4tJsi2UJ2tgj9is3ecD",
  "key36": "4yxTnQLVYY4LAsqN3EcZZwj9P5wawHQWKHDdD4ZLkd4df4ZEgURyCgLUXVWL9YQBpgmZ4Kv1MF2XqxYQfxKh9ddW",
  "key37": "2zzfzAnUf5wkqEC8pyFPBDFNfWvXfp3qvaYhTwXzBBKbFp6txzCgPgwyaV9ygDEpqoPJeFgg38gVndN7FT6rnBWF",
  "key38": "3pf6SZtFzXwcUL5itNuXZginAssNTGgcK2ScZVkY7eUcarPnC4JDb1FpC5BEYWrdfcaAiX5tduXgBLH6Gfpkpwd2",
  "key39": "3WnPAYgjJKcduunjghefXsqrCqYvUjFB8MYirq9KcbW6kHqX539DtCP3xmJwqbw8KqKZBvZQagUGRcgGpSM6Xvzu",
  "key40": "5aDJsGqtLtN8GdRkTpgmjiCpxCgh5kxptVrUnwFY6f4WjuXm433riAkhEkcvWPcc72xhEDKVnVSUB5SGJxjSjhjs",
  "key41": "2RUoRj3TTggoxCAaatoWgtWpR66MWHGsMwiZU75mKdpvYogY9Eq1sLooGxWFXyBSjyJjGoid1uGSxHjCnjVrYm42",
  "key42": "3QcWT7ZehadhL2J258vYvZct5VgXcNAsnL4swhxfteRLvEDpV3xm8J7tfdpR49kbVBzqoYbooHWXYJH62NLskSZ2"
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
