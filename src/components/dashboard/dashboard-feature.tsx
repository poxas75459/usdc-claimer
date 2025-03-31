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
    "3gweiouNBYF357qa35Sk7PLFi94pdLecEAmYvfgTbj1HP63nVNjS93L2mEDyDzTE5rGJAXCeLHK5nvMjUve5aoYh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b4eiTWXGdtjvppRyCKRvPE959EFsT44vv7sNMhkmVm9iomPQDNdUSL2cJJPRFeU1q9jmGgxW6rZLvXGm3qVZZoe",
  "key1": "3j4NyfhSpoikBhDphBrbzU66WxzRooyoXdhXAoaWiQ3MVKLqkAdMcyNJRLg2fNCfAiHBQ72wZe9CWByJdZP3AzyS",
  "key2": "4wq5QP5Cq3aLBv3DvhNRTXwme67vnBSRncgkTQCWL21yPHaiPQnDJh4HkJSbohpjY7QUgDek9W62PXstyCbQc4je",
  "key3": "4MKFwRULhK7Rx6m8ZrBesN6pB4Lab1GDL3jj3jtmqt6Qkhocb4SH6kjNq5sDveMYqHzrVYExdJcanzmGi3D5DdJc",
  "key4": "33Ro8vztoQRMm8dspjHBHpPyxCwYdFLQsPn5PTHJZZ6433oNa8SJFk3eGBn6GvbpFfBbt4uH6UGEk2kADZGqzqKz",
  "key5": "4BFu3gAXVMAUT9kDARDaVqkgjhHPuyQThbxp68Twunwh2cvJZnPNzAWu5pKnseZRwpGuNKuTtu6Tiefs5UYBkmUf",
  "key6": "2Z1NfD2kRz6ZFoaYiu4M4uB6nsneBM6pS4MGGMwhyd3j5vRY9ZQgzV46yu3hq3r57xp5iot6AbRUsFdHkyPP2oNW",
  "key7": "25SEDhZPRPBDHiagdCSLSbMjYuC6SgwVmzzR54UvG6v3PgpnaYfTVKBVEhT4vG4ccNqJqUFzchn5sXtR6vxr5FET",
  "key8": "5vqhkRYz2rXRgBwwn38QbMXVjQXyn5wudQ4HEVUEB9sNb9V316Vs6W8iEASyKkctt1qAFvdzAtCGRrkUML3peVoZ",
  "key9": "2R6egXQ5vhvqiz8DQZCtvRDDgwnmm1qW6PeNNes413T4vGgM8PcxpZeD5iUHquxhNHeV9YinR4Kf4k1qXH5ZxMRA",
  "key10": "23j63Lng3c4Gh4S5jabCumUEMm8VRqbK8LuhYRosTnwYdRjZdtQo1PfYQfrNCVV9fTRHtyTQAsi7dTAcExYuVic6",
  "key11": "mvWKVuYyRWEbyHRPnGfTpZzyFWn82X5LaeeiEedxAq9gSrCBr97d1XAiY1JQzuzCanYg6PN3u574zBsZs6iMnj8",
  "key12": "2888yWzRrdP44VKa5HNnZFctTob8asF6ivGAU1EbifwjJWgZ1jn6jbhwa6vWxG8bF1GPavT6PagiayACgSweuVhW",
  "key13": "4agk6Q7iyPkXCXML2jwwtUWkyoBvUQBKpC592aS9BM452V9a4fJbqeLCGW2WEynvCsopCiNJ2tvbqAKqawiv6eiX",
  "key14": "2kKwXNkEkVEPi5SNs3in9zPNdFLq13cfhwXY88JSoDp4c6txQPUKmtdi7bxgxoe8b6J37ML9QDy9TDfSVHHJQKZY",
  "key15": "5DjDmJAJAcoXEgu927cbMaCGR7JGWFVBsFW4RVyTX8jdHrX3pxuMwjuyKkMhD7kHdBqFFE3CMeg1a77n9z4EGBKa",
  "key16": "2BFfb5jKG2PFBtEaavyy7gKF8APC57tMZA69vNsYQKdTPg9Ps7oR5iVExHDuBwCETMmvHxRBydHkB9SJ8DfaCmP7",
  "key17": "2T43PQ1a7W4Qh1jfs22jFYNRrRpkLdN8gPTE2JdM4pHFh3KfKjpqAa8wzgfAwCG4rwcbaSjpP8Jt4FYgXKzLkKMa",
  "key18": "39C9H3wNio1uSyuaqyQbPcfmMytASaTPtn2NbtxqtUbtwpP5eqnomfiVieiWuyGNE3mpxU31TM1VLcXkUtwzKFmE",
  "key19": "3wMBa9zmE5janDdDVF4g915kZXQghqQyw8N4McP2GrxuNKE7HpuHKg5nrrXJbqtYjf5nYmmV9YHLjgjVGxSW4eAR",
  "key20": "C5AvjvTRsM54pUwgonKLePMKRN6zWFLe2mL9rAkokWxyShn3YpAQ4noHLot4FPokiHLCkhrGuLPtcPHz2rJAiNo",
  "key21": "22V9CqW54EgZMiuXu3o2ni7dF7dVMNWj7ETKSrc6skmz48HF3K6pZJuXuhdXDFPVK3JEtyciBxpgm3ok3Cfv4zXJ",
  "key22": "2FfCHz1bKN5bkUW3JCoYVyvyLfb7H8EbBXed7Sh5U8hhTKL9RZRRxDBfQgrR4bv643XAB7WzRGzDMrNWYSa36rJA",
  "key23": "N6FbXMgMv2EoRDjunKK2PnWm1mMC8GxckF8xFvWGbEspCjXdCY2TZJ6dvwh4kwnE7ZkyfYApAi4ZEE539PLiT47",
  "key24": "3jj8qKu4qMqMcuBB2u8ePFHNnQp49vryBs4PXgyiL9gjcE3G5Guqo5LVWLnaDqD62RVUwdrea87R4QPc3UMpKBCX",
  "key25": "2hfvRMSrh4ocaUPkk2mWTAi2eR2bm657tsxx13KmvmdcNnuC8eUk7GA86kDKVSFXSLHH9cK6cU9tjC6MaSxX6uyE",
  "key26": "5egFCDK2dd3U8NQwxDiLiVcDK42XtW3AHvD9Sw16TjXmNDKrZZwiLgdN3tp6E7oQVwgU7NEXJCFK6NXPorw5NJmS",
  "key27": "h2e2Ds3fNzYbPzdLQDdRDCPfjtwynPhKRcdCQXEecbrZ7ykN9dXNqrpj383WDZSg9afizdHLbdHgEvPZk7UkMdv",
  "key28": "4cLqcmNx1VbMoA6RV9DiekJSEtAWPKxJUhRhjhoEpXEMJ5TKCMEEdaggjmZzaedbArLiK5WG1w46oRm3pCxqim5y",
  "key29": "4x2aNpsa4QboyvYcucDXiM86W9GKp7TCoLmF4TYGAwLdi9cvm57N9PHVv7AU6J27HxhoP72TdHmxHGpubvUv5XZn",
  "key30": "3yeghuRVo5GWWvbcfnh4pCMv7LWDHWmGudrpPhHtvwzGnAqrHdAWCxaywn71xefCWQsd7r2eQtufjCQTbGwKLbpo",
  "key31": "fQq2hddHa3YUGHiCbCqvpy6ipsRfvthHeXBrdXAkpzvWk9diLHxW9g3wBnT63LabvQqDNCreR1CWy8yYeEWRHw4",
  "key32": "3RCtw3n34kDrpGgNKkgx2tKp9LgmhVVNcdot32srGfayp46B9ok5eBSxK7g1cQiGkkVp5bgbL2wdeHNYS3wXRufb",
  "key33": "2GX5jqUxLLSsAKzyjURG7DC8fkXnhC6zk3mmNtdP2KkrHYLR3JKU9DjDpk32yc9pnmTiVWvencv1CKtLyAJexmAK",
  "key34": "4qgVLXx3fUZiqKjSso2WFDcpN9wUeu3qXUWTVQQWH4efb4rKAR1nNyaHmXW5tDwRqUaQKsz5L9rJ9yRABMVggrLA",
  "key35": "3wH8YGsuXu7FauHaLn7V4mCv2aK7QzBoMDQgfF2rfSo3Xcv8ms3QYfT88QjasuPmLQJZVvufKyVj9hESZrUhPXtM",
  "key36": "2Bqkm9aS494EDGM7iALjmRQcGoYAcZjGrKgaCe6Gf8D42Ktgcb5sp4rFYDV5SA54HsQ7TTMcqgiSigN3y4xQgHja",
  "key37": "5VkSC8WQUMxfvuFM5uYtzQbKihty4ckgnu3Gd9P6p5hojyKC5sLYT2pZCofT8Q5bSVzmJ4V2JJ42TJRHae1EE3rU",
  "key38": "2XkuEc9sJr7eJi5gnKGhfynAZBCa9uimb4jRPeGLwjSp2DVae1uUCDw39dCdzj75DKkiD6VLXKGpFco6GnJWzTBB",
  "key39": "4mVmw4DjVYpGGD7xNLZd8nASNtczi8fbVcvjhZi5UHF4Nfr7mpQjWgNL6EzPtTLwmDqXVUuu45fAM95ny6kuurR1",
  "key40": "3akBh6h6aZxUc22REhifk6yoP9J4SfjueaMppKTUeyg8pnkaqtWXhsoSGb9KCZQGpTkZ7dN8EK6oWw2D1KXzoqhq",
  "key41": "64WLi1oxJ7KzrfNcNjSDo1E2LTtGkT9y3rf6pCNLudQSXCDu7LtAT2KijEG5B7W5jE3gziLasr3zdwjk8W6WpTQ3",
  "key42": "4SHCGgunxEvKYGCfSKh3pezQPwsrR9jFV6yCkzniJ1rFKds17BDZheA5uuHFC5AjbnGj2rv8fST9nbn2ZP3RVYKd",
  "key43": "2dEqkAurSXA2XPGptJmtUAXZqWZa6afcs52TgSJ4UP4Dnk3gChSEyHKsGAWWXWE6AzjrqHhRam5Q6WQnmoBcDkn2",
  "key44": "3ndNGswkohQrSePHEfe6oKCkujWCDAAK4A62quMH3ZY95fS6Tkadp3x8yR6APoqTKKnjrkQFRFybnvhhaexRpJf2",
  "key45": "5DSo4WvAhreB1YW9qASgwdNuRBTDrgQrQ6DpeMDxow7LU4mQ3VAqCHL7azBZvdcNTHj3ER1iiKPsGUAsuyr8aM5h",
  "key46": "PrftqXB84WpRdBRVqT3JtYk9yVLf7ocxH8fAWgbBPVh8YGvLizf66GXaRAzrGnLnaavYKpaH61dtu9dWw11aEFc"
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
