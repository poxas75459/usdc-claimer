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
    "LwoG662okkTGPV1XQLBy86Zny4nWEx9wRDAqrix1MoBhp8qb4MGCk6Z2ksV1Kr9CQNtakj75oaxinNj1UVRkZP6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eTY8FRcr1cwzvyps6PPmkNv1h4oJ8AhaPrrofzHYWh91nXfifZ7xSz6StKHS6jj62dywsuEPR7mEMaYEV7hMUE4",
  "key1": "3rmSvd1DRsDdqsVq1jk2rj6i5MTnjwSoSBxWychN4qQY3WcP6uHNBijZgMQy3fTbDRkQHucTqrtMGn9T2y9o9Ft",
  "key2": "5H6n3wuquPX4BEskdqPPtuE6N1Nv3KsRjzVrvdZx1Q9Tge8zuA4kPWi8GkM4xAEdysRypGa7ypJvnpAtD8hWatbx",
  "key3": "c7waW4SManAXX5pPg8C8HxfKfHQNJP3Hf9uN6krWX124uyjDYimK72MGZ14KszwJifbSTRTtQbPLtGjDXvzacks",
  "key4": "21bsc9FnArwsfbcm8R2aD1Ti8bgNVWcWno4xMfgiteqXFct1LQTB846XQbHnbxzk8o2S8rhqaNXUjSNyU99Ayakw",
  "key5": "4dno24vQQD1NCpFy2J8XT8r2QfXYxHBsh5w4dHq2TRVkkb3HgqqgsdHXyQzGut5LwTo6JfxKrRw7AxbXWjkCxHR7",
  "key6": "GVuZdCCwaYan9ej2wtNP84JncYXjd6wDmveZvF4XwuNmqD6woWPB2SADz8BGkT4bZLNTag4cZCkxCqk2xY8S9gh",
  "key7": "2c1gLmhU9eXqqZSZT4FpkJuvju2XtPhdYxF8QisVaVmHJ1wSWp19vYPAQ3C9HHpPKC3Kxu9QC69GnYApkaoCEAhP",
  "key8": "5TJwh6kRxU5Ew9UVGmDt2fb5rnU2CYTyw4hH1sMAhZBcMeazxHM1qa3doDJ6CNgaq8G87kkiYhes7HCqksMnzfXM",
  "key9": "25xVqJ27pBxUbW5vjAVKjYVfZAem4wGnkGpD8nV9jW39MzHHRyjAjEjndXpSnsvmqBSkghqLhNTGmMMVF17RGj8s",
  "key10": "3CXiV2kKoTmwX92dVXHKk4EYBjgW6f6n9mDy7Scq8C1xFCvvneHLf9y1ip4dUXS4ZY4v9PwVzhwdaHanhhzZizGf",
  "key11": "3C1LGaxZH5Uyt3fJG3CDjLxwhY3b81YgDCncDsNFAFYCNAGSRGFutFzjUwdf2afsJRuZqbvCpcEKKNidATPCr5hs",
  "key12": "5Wx83TuFSxAih4vRxuSMEjr4pPT5t6TMSEvhwpDSV8kpzvSfwXCKa14sL43abCjtyuBqcUrke5GQPf6aSG6Wk7xm",
  "key13": "FgeBWzWj94daXWZL4MJEMcEzGyA4z8qvaVFMYn22vHAFYp9yUvGUybdyU4a7otLCqBbrhRyYqwEwkXJ11VNaoEF",
  "key14": "WzVwy1vZUiWnDPsBopAp4NNjc3qXTfVffYsuaLT7xW2U6WeHRxTBKJrEkptTw1ikHHQzJPzSfMmYK1NUKwnz8fa",
  "key15": "4UjWjaGj5p32gQv8nETTH9mJBfXbrenDsygkrdbfKkg2on6JhHfFjqh91hvbR9aic46tyn4QREUekMBKnjQxCPC",
  "key16": "2yCcHDV4iE6XaaSTNwdezjZGXo1B4ZK1Bghx1Lm1kaUvUMf1rhr1qpzfFXRsikKNKNz9UHkWx1AwHxR3kHBNY6Kf",
  "key17": "4g9dg8oRsrXJsUHqmg8Em5jV4QBwda1YzD4rpCLyvPhEwSrNZFcWouQcSv6Ju6xrm3uYHfwdveiWjxxfaKPhSjad",
  "key18": "28Bu1YrqMjMMpWCXqoNBo2bzUEnL2Aockry9oChFL7mwdbCPCGmtAEfRYVNdhTUSVbLHoXsqVwkihed48ob5i7UN",
  "key19": "5AdCi2vQ2H3xkh9Uq64suEk9BodFsCDdqZ49DRU7PzuZrndqJPpqsuASYi4uxH2bVmobgbsjKSXGi3F9vdTjkbd5",
  "key20": "4jfWUcZsWD24CmQuspTu6pK2CzxKYMi9unrhxU4UGYPdyZm4MWLqhaWcFX4NGifDqAC596SNUGRSYqZnDJdy76s3",
  "key21": "BswVo7BXdFK3XmSHu5Z6CsYEGbSyEZU1tfqKCF2fi7ABCaNvtbDbMmm3hicBamVPQfZmJp28yGtc8E63XdQRH1j",
  "key22": "M9j95UxjRXEdFtRPUBqYVtASY8R8wTwKBqQ93nL8926misPu2rVLzKDVAKgxxKWdnecGqkPkn7BjS6eP6q4N2jP",
  "key23": "26aMAArSQGCQb5zkjuS75EcwVteqXGTB8SdpBzP6aTGhgN2gwbVAJWYLNuZEsNK7aaCDxdpWapoFscxQAJCpAXLU",
  "key24": "4zaXbSb2WBCbBuykCZ3FosrfwgG3SYu7jyV5Pq9soG138J65bpRHWnL7Jn8Qu7FNP8rw2niQBV6SLLr7Np1Wz1Gp",
  "key25": "2GVY27DEnwuqn77hc5yCx1WY7ELRA1samNTF2Er9JPZddjgmxk6TifkJoN8Es85bqhkU4UoHbCQDvjhkWfZM3GmL",
  "key26": "3CqCvdpy4JzyT9T18PjuM6Mkg7ikbpKMAQ6NuMfGsW2e7XUuzs9CD4Yf5B4p8RsaoVb7x6AE6DmfWWctYf3DruXe",
  "key27": "2ea9pGds9yDypymtXqoy2an2A4EADp6MT3kXu5EzYC7sxqrUgCE35tT3vgbsvXYgRBcgTxav2YaLBPVGV9yG5Pq9",
  "key28": "2LRHbvLqAjShuZDXiFTvkcC6yaQRHZudN55XjjtJEUDntNXiCwmbEZ9ta6NmrdbCsGZVWwerDM9qPunwqScgGigh",
  "key29": "4ifVHMz4ESiXB7EtYSpiNAUXzhKJML5DcCEnNQC86McsyKU88dtQLQoHRLdEkAxhRdmJL23ecGRWkGGqVNtp68Zz",
  "key30": "4c6P6MzYesrqn7iztjYncuBZA7gpGuzhY9yuNYFDEpJ44o6QimiCJBM3XUGLdg6dLjbqGBoqZVYwrgbGQoM1Rdgx",
  "key31": "5ppjnFnPk8ZWx6MFcdKpemMiyq6e6hbUCYu4v66io3cXZeERYmzyEX676oKAk3SG8Jum1T2Tn2bytZvc5M6CwktY",
  "key32": "4UXhSLDDAnXkzWpfTVjWYUeh8fCpMFgaSaUfnTtJB85t6bE53qkc8GEViqBS8FwxAiXPUuSuJvdfCZsVc318jyyp"
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
