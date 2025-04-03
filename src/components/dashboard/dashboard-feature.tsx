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
    "3iTKbU5a4DUFqyThvzSNGRickz383YFB82piA6Lae2BpHkjs3cuNRAHbKQCrmJAPYyvW2dxM5UVEgr4SoBobzAW3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PVABg5JR74PPXvUfCCY3DMEJRevqa8ymC9HKNZ8AjSQjjp4mJbUGMCdT4pcJqCNmCZz7oBKgfE8zjxdN1updLH8",
  "key1": "4Yh5UXmgL7pViwNNiCw2VsHQKQ139BTietS6aWNgG8BVLfssuEcSmogMnwuSy83hgwExbf8StxZqHrFnb38YdNRu",
  "key2": "JiEPZMZGYqeL3iNy69CRgY4c2hromVM45CZWJbrhYKNPRkVuUPeambHURX9FHnWW2sazTXLd42bRSTDvMdLCjhb",
  "key3": "2Am9HErfZNJYa8PSMNK7J8RoS1kjZu539tYJhvCBBvva8SNKUvWoPqY6jER8kCh2ud36SHn4WVtN1CAfZbb6s3EV",
  "key4": "5WUEykQQneWNs8N9jSzJHbE1KsgHTD5N2xjuuQdgNjQ7cqhQ2gBcLZnuUQGrEUZ35NSZY5AAESvX8Ndfpy3r2YPg",
  "key5": "3pug7hCvThQxo9dRMp4EbTMPi516cYpR927tiqzYf7qU8u7BEfVUz3n56tFoe1F7v3sYrRuTfa7mt2JBJC941goo",
  "key6": "2VG6CerMLzLu9xz6TVUSvQKSEoLbgMJR1M5n2R3mrFnSBVmXT8vcCggWNd3ErwL1VT7gLHMCj1oqGTZoYYomowrH",
  "key7": "5MbPfxoZgYk8UmPyWGFEbyjjGADVwwGhUgpCu7E7Ns6N2rZoCkx83TyhU1GZ9qqLLsn42tnGMvtSPdyfqUT5VPXX",
  "key8": "44xymKQZyWkcKJ4kQEVxNEZT88ayWQJZsv3nwWcbtGYzRW9KtSsWN9G7JsoNs1CSCZvBXo7ZRBYrNsKzuCjHQTN7",
  "key9": "5DZ1qNq71JNrEEi9t3cgwUwBmoGnAoADtJR6Lx6EK8N98CCcjS5mSz8VdzTdjHvkTXS5FiF4oA6NfMEKf8rLg1Um",
  "key10": "3mrJbKe5tBGKd9dTHBxfLAQXsBTuvNygR5enNYtnZ5pV7XHZT3kArwi72wLEWxp52QikTi2TXrfk8rYoBq7vrAu2",
  "key11": "597YbMowa1hWWhyr9axEKgSLY6iTUaVoJxwyeUwNRRXXYYUqhRwzVjRHwdex4nCrT1LndijmVPnksuHH2A3DpTKK",
  "key12": "2m86v3X5EZ8FDRTfY8GST59zqLrqTZD4iV5r4zBHA1eR6LCZkgBmUi3w3v26YxRMkiYSPoe52LqCCM1kSRp8Fh95",
  "key13": "43SPPVx8y7sebPZSbBcwyQyE3KTmD52o3egC6WMWPqd6mBvixhvNT2UCGnkTAsdDL7AhPRkF3cAPf7Y3vxk2ueMZ",
  "key14": "4rYc8upf5a8r23idPU7r8nj56YXdE5aeZiQAXgzjfohCX45Qs7EDJVrX4z3BRgg2BAZ1hRunzH5LWDee6F7EocpQ",
  "key15": "5e2VqTrYqSg3qWJ68iBgQMX6s7n1N572ioUzHRCScyGpMq27jNzx1JC2sY4U6b3qgMD7RNU5FNtbZ6pJ8z8ZQErv",
  "key16": "4ku62pxZcRWEEo8QE5ha96baKGGSNbxZRbAGo7jaBon38s98G4gGMbNNiVoYNjqLjbFVG7pQ3CrkrZgDJoxAXPzJ",
  "key17": "4Y1G6GzwdQ5ZVUvJ7Uttonm28DmjRmxqWEhFsmJDWRJbsQvPjp4XfpdSbeaZ5BBKPoNGwk3XJQSyXm1u7wwf3vDE",
  "key18": "5qhMhaXjB8hhvqV8h5nNEDKc3Ydzh4zmneKqVvZmoMaFMvaygPUpqf3dotoRhxB8c3aFpVbMYNXkeDzswaYJv6Ft",
  "key19": "4XdDpbkydSM7Vq48Uxm8i8hwqXJpcuu6JEt1xAeabCdj2gsvWk4dRrNNXntef11Kb9w6DM2RLM2miyBopy6PL1fN",
  "key20": "3WdpXN7jWysoWe8VEmWF8KhBZtUk1u2vxRBV7wi1ZkCtXhZns5CsqNcaUqHdcKCgGVii6PXQNnUzgZJX9UbTXQqS",
  "key21": "4sL1h59JaJ9y8ZL5JRWf5yJss3YUQ4B1V6LgH9V32tsAyknJmm5qNzVtN4jbd4AtNZ34apsX55AsfLhz8SPEGuQN",
  "key22": "DJLjzKU6WHEhTq34yksYa7Jqb6VoyTiLh5Xu5H2YMBD1XWMxjZenTDQQMGj8AXJe6McFbVB52hfKwaPExQwkzot",
  "key23": "Rs1nuLdRs17WFMfZvYbYpmz6fDuEGPsAuGMfqoz7tQbZ1D1Cciqf5E87XUL7yfhf8KCf3gYgHEFoq4QtfCXnne2",
  "key24": "eABybkZ1F7fwEfXvA56d2hYobT48HHyYPLyMpaKT1nSmMAZiXspNTRC1E3s5w2hGi79unh8uWtyeYHTKr8gVXx7",
  "key25": "trW6jDQGyLE3e7EtRAsfutaEpseRYAmsKsRxkH4a8y3v4pjd7PgmeQr3pxSuDKtvfuRTYrX3iK13e8Wc1SAvnBG",
  "key26": "5BKtidagMUAnAgEXutN4apnugUajS44vpyUdbhTnx8i7PsZvQJ6WaGArnDVxAzSRjW6CwswEmJKfiSLaws7j4Ni2",
  "key27": "2yU3EXSzos5Atpk11D4BecTgjLemDRywCvAfnScDk2hcremVzVHkRMhhQeLJLhmT9ZKhZEwuJBuokG5ryFDA5WNA",
  "key28": "4PfEwbA7GkGHU5Nkgi3d4jqK7cvaVm5ANQNDhwb3jRxL2YStofPuuEF5Do1ncxiv1wmHxhJgs7PRcQ57Bbc7GoCB",
  "key29": "4sipjDiHWbppA8g5xQq8FH9ex7tiSLN1uAC2uPNCuXM51Xz8SXSLionwts9oLpFJhjxaiq1cd6g6miXwAPUrxmMj",
  "key30": "2j8T5vUzff1HPVM85YTFLCWKPdrxTVNQrEiZdop2GXQCk4uRVS37hWGwMBD9tjKnt1WhBmWHVZKwyup6njbQm9Vt",
  "key31": "43pNvacDojsse7mZRN84KxXHnJtsYdqtcWoLP6FHgKn6bZchhKVTTX4EMCSsCGQbcnyxXAU8Fb1CQzR3LVF2TfaZ",
  "key32": "41ntZtwxm6rMF6jh3hNV4SaryXsq8rNVCtsAZDbFqSgq381W5d8fcj4HcfuiJc1JNb9eYjjgiUYcDn2qqjcAHfTN",
  "key33": "ira8dNcLVXLvt1VTSU1ffK9t9v5Re8jbWFefD63njk8n85Usx3jGNAhENp33chRKV4nsy2RzMEk6AcT9DRSuNjc",
  "key34": "4oVUFkzaowg7pLjVKVpACshWuRS49vGCG1QDGaeHStcXBkSSYFeK7GbKysUab2Fqc7riFn93ATZUoSur7MYUmYox",
  "key35": "3D7Q8KLR1ddYM6nGaGCShshJp9VaUuDcEy1XTzMkKmDu8XG4qQP7FDLZHh3mkvkNuMU8LQsLN39Nks1EjxhhxSzq",
  "key36": "mpHwsbKPf4f4r8HeVhWrYRueLPtoe1KdC79teCmbzh7w9XXUCMHqwvhKBwfDznUgrZKCmDnEzSUAMiS8oUny7HF",
  "key37": "3G5TxwmH5AYt2YSB9jghU3uBC3qoZiWG383GTRaoGcVJ9ef2gEgbH6PnFT6ECKBH3TYpSgBGmGEZ6gSeDAHBJrDD",
  "key38": "2oUbGHCgkEh18uNGt8JwQRbRFhcCFN3Vk8wmYpbHNYvJ1gZ4wF1HE3pJ8gqznCHCZLBFVEXhqf7dRPeCiaMdE1ur",
  "key39": "2hmZLvt7LhDwJG9jUAEC4WWDKD28vciUWZgismMqWfhZMUwSgKZrQhbayRuvqfTfmEB3azuACv2YQRsRft2EmWNX",
  "key40": "MScLXdfr8AWK3ibjeH43fNMtsBmodK1hY8QE1RfVFWMfHwLwCVgfRzhHXMWkHt8VdEGdVG651TvLbw7YQvS6Mja",
  "key41": "2ENTzUsuDKhFRFwuYQNMgAcucW5sHPFLYAihzMuUT8v4KpbWcxT2L2G77wSVZP1qr2LXC7hu75LF5bPVhtuS4v7F",
  "key42": "3U74hQngWtGs3kn6c9MUwti9gMFyZNrgcWWMS7UjFXvcYRjQW3CSSFimF9RC5PCQ2Hfg1Xs7eZPtfteJXzYpjPB7",
  "key43": "5HgcjmzbXKyg61yrT4LEH2ksF3CjoKXAcbAC7u6JpEZurc4sRWdnZbbPDbugeQMdM2najySK6CyJ9Akebsjveyo",
  "key44": "4gup5zWRv54b3iygZAJFETXLsy7hh8minzcrvDnZC5eod4DRunqR2atSn2W7wKiT7fVmbGUojat7XxBJuSxJrwKH",
  "key45": "3c55aD2D9SY3L7LkBEqJA21z3YiFcCWNaWHDjh7MR4AMkG5QULBfAk7xdKRd5yiWJNCZdbJtkif7FoVMLNNYpEfY",
  "key46": "5jjcwUvdwygQiNNyYjh9T1T8gktWfpV9BcnuaoPHq6Zkod9y9a9UGbME5jWFSSC3JmoSoo7v9fmiXz3hsem5Ca6F"
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
