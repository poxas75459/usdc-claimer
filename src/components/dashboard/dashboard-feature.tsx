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
    "5cwHCxzcmcPc7zmYuxDyfKJWJeedbp8eRonztujMiwgrGv835rWFe1m8HRKQVEBuHHbZWTNPayFADbXq6VcHVXiC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42pDe8XC1ZFvqsWRJKaP9JFdpr4VenseFSKGELogZvYjV8GzLgqrKkj9kbKo7whGrj9Rmudy9wNwt5efxpdiNXuK",
  "key1": "4EN351tJRfigYbzWgU1QKRzZwknJUnVb8cPAMg3XB9CqwgUKFtDHnh55kvdmsXJ6h42D1Wewpk2L2SPtc3oBivUR",
  "key2": "2grgv9Hg8adVSeLCMoiPWBNfnmG8zrTxKcWsyYJHdfsECTQben9KNHEj73FauxtsyNvWZeT49W3p8Kf1ind7ryJa",
  "key3": "Xv9J73bSuczNeuHnvPam2NaNi9NqRnPHUWvAJEBXZbVpZaAfwnmLxGnhcEPkkSsSYMWc358VZyUzfwMyoZFB4yp",
  "key4": "5mcwvoW6X5cc5jShSF3y2e2MVUb4isqm528fnKRfkquBMJUkBZabScMkFyXF8edUdsySaRUQhmXVDx7MVvAEosC8",
  "key5": "2RBNgEfMbmbK3rq11ERbJ5fidwjjFJV8vMS4doTSiTbTdRvEwWo32HJ7rt6uxKjFVyF4MZ9TonkJup7dSs8RS9MA",
  "key6": "KqiSomRKHFtEAUSD17bkewmUqJAR1gPkEmDRCi5BP5Y5aaj5RMgWRNsWb4vGy7nxg3vwiekm7wZ28bdyNFNRo3S",
  "key7": "AfGpWXWjJYTBE7oiMdFwitNFdgCS5xdBV2ScUfBhKHQ7GD4XqhRLVTKuSQRA1GCgozWggu7KAtQnTEsRKw6g3bz",
  "key8": "R9CyeuZssNSdrzC9SE2cRWJPeJsbiUUCixSUwtEXsPuSt5DZDsWRGf3QkDRTxnocvUn59AkQzg5JBAsZxSx7ubn",
  "key9": "5hCzhx871yggs6XJ621GGgahYnHjEvXkBPJbdGsravvdkTTtUX5HiYcxBaVL8ZSyFcj27ZGnobVnTUZSdjcrRofL",
  "key10": "2EB9iWuvkLzWNToduCWEgfeEJQJ43cgUFNsAADW16Qk9j1JxBTyoj3WCzou8j1VDR3g9ZiGRaUZoaKXQQ6cymBNW",
  "key11": "EoPq5hw6ezKKJXNrQ76BqHCFuZps1d3gdnZAv1fGneAmVTbpBdJvnVtYJaVvgn4tZsn4vwS2Bmkms2cJt9Q2Mj4",
  "key12": "bJJAynt2XGMQG4r6aewYFSJzQEsPLE2um98hbDkSptWzKzKCrpWSwhVRZJZc82JUCfaXr8iaectqT4PcTHGaQ6q",
  "key13": "4DpLniCF1Qxqib12eYr5m5Loj9B4binkWZiakUVSk7tP9SKTVsjUtSojQxeR8aUt8n51XDrNsqGdrQRR5ysu8bHU",
  "key14": "5oxRhpFuer9DetuSBRE4UXejvaEZ1ZK2nwEV61xqzCNiSXSiEZWNLnJUthx2bezGMzpddScoz7TYy6dDHmfzc7ST",
  "key15": "51Mq27PAmQpGT3ZZbJQJF9i66mvmwwA8CSyws1sM3ZeJhShECvfK4DJvBzGtEkNuFz6A8ASYgnm8gkUUMM2KCwNJ",
  "key16": "mMDMaehoop9KZPHRLjFsRGgckg4oYijafpJAh1Zsv6qxHA85Cuae1LQMkS8ZskVz9Q4womxH3vkU5PcUZUyV1tz",
  "key17": "2VvK7uYeLAozMZ2xn6n5umREX5xGuU1DUJnh6a6tmx64Eow8QKZHnVwFx6vtW6zUqFYBmqBe1zRccnSMVocnzxjN",
  "key18": "4eeiWdJtQiySe1mgzZkUfgsWRGgkVGm5oyXUsCA9qnCAZQTecrp7L2wdh6weYgDCFcRwBjhed4Z6hggk7LXWZMbu",
  "key19": "3UYyswSKcW3bp9i3UvCiYSLP7o8njim1yrjsF75c5LXdJhHhewYFxHxQk4zzu2zTgDRnG92cSyapXcpjVaeWjp5b",
  "key20": "5e4F7UN8zrTeySpzYT5Wz6K4Xb8o88pw5Xx6nhCzEUjDvPnE8a5wD7PhJod9aDzWTWZqbXZyJRQPFYhwfJCt3eWV",
  "key21": "5WNvkY3LAVrndys1QunAU2faMSmsXyPavqzzNR8zirz9QuFrFXG1PK92ni3Ebm77MrbxU8LkNeNrWJN1XsPTvH5e",
  "key22": "4pxxtY1ZfGzQBHehSjWU1ZeuY5pWFHRYivfaM5HZLukGMbRdZ5dSRDbty8h319z2oWoYnrrpGCWg4Fp6Pwgc5y6W",
  "key23": "37N9K3weFr3V4xsRNrUXuQrjLCEuFVcUH6pq6Bu1agCGkQtBACFyJkADkwUgKTkMxhfA4di6XoSLudUDjjzbromR",
  "key24": "mBqzGw1Vu69WU9K9JhdzBQ4cPkAZ7kPZfWWtH25xxPDAaMB5t8zFFCbPsx3em2GNzfn4QRAV7gWGij4BkpZrKPb",
  "key25": "47dvjW6fcjiA65AZ7wCcT3hMkLiCLNzS1eaAmk9nL7yupPAwvKC4D4yqVEWA69H6533dzMW5Aeiw7Q4i9u3aJ23D",
  "key26": "3aQf65CJ5mGv2j3ax6om76jnfJs4apiM1Ka1Rwoy6DKnNo9MK1b4w6D9VYJ8c5DARmQYgYt1KNR6bi79WSCcHy4y",
  "key27": "4nXBQykBqPYcMkbs1kSH2PHQMcN3QQBh4BKp3WWiKpm2Z4QYYYWXZfZs4NdW8YQ7YHDe79dBhKGkCa1A8MSHxqKA",
  "key28": "jHSWYp6a5MuZYyS7suicM5vmCdZ1EbpwFNHEnp4mkqtUXkM2sRPFaxAYnyu6RGfeTS31DFtvwCR3Re41oGeCALF",
  "key29": "4HfesDZGrakdhaxxQoc7PWBjdq3aNeT1Wh15h6XtChJN6Jfp565nFyFayssB1WU6LELKnpZc9sd8cCPsQeTjF8jm",
  "key30": "4WdPCEq4azBnaTJ3Ab4ZhQrue8brUaQad34YHBp3p68zWAoxxbVRLLSVNkXaGNvwWrReBGzKLu8wqKfWwzbRfvpr",
  "key31": "5zvBo8BfaasbZn8PHvUhNNZgpnckGfcihjqbAbuhHnqqPTyvzqo5CvLT51a2Xm7tjLdu1nuSW9B2WGKVm8ehL9ZS",
  "key32": "GWjTNNzTMwzV5JBiATYRhAB4kuU9UFrGzChF8n944UTSeGzsoTbY3Si95wZWmQiuFGtSPLSsDB6SXT8fKE6VSa4",
  "key33": "4XpJyeMhqwn59AgSYxtdm5d1Bkk7b2ktG9MKN8Bbm73m9nPQZLB2xX75KG13LRiuGAe8mP3KWQ7kSKyzP2ZFkdxH",
  "key34": "2HEfd5yhyHqH6ovv2fQNFkh6gHB7objoWotxPcFGLPnwEfYjmTACAtfqXXcahucvbdBrne3NBREnMfpZHY3phSN1",
  "key35": "4itrsyWs6V8q8FhfgqgGwn1VTXcr2M9XPawtptcP2XvU57ho2vbBJQ6bSgX7BN9EhABnP3zG9ZSXcABWWMMS7tBP",
  "key36": "2M62npzzftYCZriABHnvVVyRdAScPNQozdth6N39AdzUKishV4SUXQTSc44wXPoykHZSiWnPnFKBQwQfvJoLTJab",
  "key37": "2Ro4biFdoREq3sAXCPJtrFapE6BerkfKxyTYjMFYoWkz1g7b4P8LDzWtWHKXRz9ALjTkW495chBG3RjusDhSySoo",
  "key38": "wYHZETCb9oiX3zepxXnjtGRiEUtgAgHzZyG1GdTS6UnxW6tDbJ5kPBrQZchJwgfo23MSbYqsVxdQGLPvZTrXjEm",
  "key39": "Ezgbu9AjwrGpy8uqyuPngHwP1vMmMAHtCeMm1wwSZJq7FPsau6oe41QCxSoJqTLgiZHDHaTopTKe8o5ujnHE9Mw",
  "key40": "3aBb5FLTY5nh1ngU4qmRtJfZcDQvtxHhKFnfVrGVy4BCv5UBjFcG4rN4torXp1ChsLRE7oenJ3FFSshH5Tsvd9a5",
  "key41": "2RdGb9MLR4NvUZjtLWattwZVKULutwrxncMnkzzv8EmasX3yhvwkAPMZxAwGqRKRnF6aUZdPDYWb1w97akScqC1o",
  "key42": "4wy32Haa8pFG1b4FpeSJBdGTe3QnaowWbgpDaq7cTxtLSWC2oTzfroZakbiuPeSUnUZLVRdTr1cdXmy2rjrfoKsn",
  "key43": "4og1Uo4symjrVJAGgVYrqDHXj5gXQVqYQd5f8NYzpU4qEhcNnixaGCyy76wwsQryGzcNWNDvsW1qdFfYYTjEEyPk",
  "key44": "5NedhAKC47YTKnjhATF71tdGP6Ao4W7mKsp3NBfRiJdErttqK1MnUzByQgqM3DpxG9QwyaWAq2oeU171bsfGN5xJ",
  "key45": "32qqMRLTo8xt6aK8uAHhjH8CwUynstzrHe2qP5zAptjEknVDA7fpLE7jj6nnmwbjtp4JVSkkrTUuvsfuhYBKZPff",
  "key46": "4a2MDtyrauXFwJhvKBGk5hc8C9ivrNe6j6iJyFJgtZCDsB3umYYQf2zHsQAUvuJgR23uzf5SdT9HsuNXUbFed8Ay",
  "key47": "64axKnozr6BYY7sWiW4geGxCRDLtyR3z6WHCtV92eqJ6peSVCkv72o3bf7R9Gy5Hey8uAb8gv9uA5z3fPPV2GZmH"
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
