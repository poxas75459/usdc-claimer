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
    "K1drGqEerdGPE7qK4R56cmPHgMV5vL1u3qkWUawYygq5hZA3r3w4UgQ6Q145TbBrCiLVJZ9ZQEpmKhLybProm1M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25dXh6GCq2YgUSkKLe5HBNcd6Kr2sB4yzZY832FfLf9jx2uAjMja9rneizaifg91kmPnKYTxs9PaKe6RojiuyNQw",
  "key1": "5PYyRXEvup1jDrbEQ2PF93veJUkL5bu8fnMfJdQ5R5nV5nTAnNinmUv6n29yXj6aimRHKd94iynH3PBYv8Cbiaq8",
  "key2": "5G8PFJ5DMefd8VNUVh3a6S24zrccJLfkd2P13mbfpPYzFy2u7zu6ves1BAcrCNFtD3834sxaoosSPyfj5oCMY3Gd",
  "key3": "3HhZuNfPNG7jDnK1br7ZuS6RGwPV9YFuo36WVbp7yqG1vYJZuN7T21fwa7fMV6ausP6Sm2KDbtfNUrXmQxoBEAaY",
  "key4": "3WXSg4cDEVpW4ajfvAqTfYkD4GzWZhxcehr3FyrsotmWgbDBjgXnFT3bynXQcrYX5EarzGovScU3SnRhCNwtDXGu",
  "key5": "dPoAa1qAy8CpCqEBFxy86TTHKQXxA7e5HUJLXXTL6ymo94ynSu8Zb2g3R8DMfu9wyxSFiqUosm32ciazJfuexjt",
  "key6": "4gfMGVRrgDpnf8LmQ8YZpBzJkDeFpMULVkoM89mpk16hUQ3Q41F4Dkj33Kn93SJ7nFeQXT6mmaZLGydDjAqBDeKu",
  "key7": "54Atx6CQRzGB6k4ko9mJWLs7A8NFSKPj8Pq4h1fmNxEdQ3cgPvxqbaGQUCUHWwioDbH8XxgiM1HopeSaXuMXrV7g",
  "key8": "29wVGXmpSE98c1uj6DNzvtqH3W72zrDJPWSmRTXWB66CAk62mYG1CinKBZdBGu4ZfyJJ1yiPwhjymTz9xV9Qzc3h",
  "key9": "5dxxendqk66cxjUMqbSvQDjipz2AnvmLTg5NTzXyyzheRivgLBLx4opTkeqFY2cVBGJDXgY8s8vmgHXNqVWHEntY",
  "key10": "4nVmp9HnQYrLg5VYeePrNm2qTdAxgd2oHkJESaGF995ZP6fiKhnhxTni8NtgEi8jsXyKTgCQaSngd9tbdrfEd2ok",
  "key11": "5QAyzqNz8oSCD5PvxN54YzWGGWcjmjUPamAUpBCxz9kcATNip2fdFahNdZC2KSuPK2va8BmBMmWm8j8TDnGTFSZD",
  "key12": "3LHrX5bZAMjDR7v2indT9TA7x6fEDVf8eWYteGwKQr4EjVnCotAbHv143j7sRNDyiMCXMrRMcXPV4ZgmR92KXngt",
  "key13": "3RogzkdtSkqGUbb1YcqsoQXK5dU5G3vM2puKsyREAXkKWb4dSnrCzgrzGx32Pqzs46KC8A1HKNfv8XDBJ4TqTQt5",
  "key14": "2qp78tqbqhkQbp1eqQvCh9FQ4WuFE9EFNDVdvJB1dEiEGzcfJriZTqvPwUjNQDZNBkWUesRna1w4zPm82v7rar3w",
  "key15": "53vULd7e8kqCLMBKv6x48x88hzsFVtsSyApWzhHTCY5eBzpacXWiBCVj249zEcS1xqTVCUVknJpvqcXPkYf5xXbd",
  "key16": "2ScxzDXcBVfdMSvN8fQxvkF32wXfX14scZaXZp6TSn7RHYkvbZectW7jLLjKdSa68rDXpCgUbAzghBd23LrDVF3p",
  "key17": "GQ6iHSyEeaR66djVAV88uxVZEZtuQ33mLXTh1LxAhWkbZVHSUMvpxNBYLUJuzmvc72WyDU39pibXoi8oxUvYfcT",
  "key18": "2jptBxA4JtfvUPBq9Vs1vMbugurRwtqFdhpK1eKbFWt9CoShHX9ZiMGeAfzQJTPvUWzewTnXEYVVYZzzmRsCgBj2",
  "key19": "2amWgNqXZWHhUTNkPzMD3pTGupYgy8zJvhVgdrJ76DFKoWAfJD5vjRqU5id2gUKB13xz5pDCJSw92wjSVcBzAzRj",
  "key20": "5G2P5R7P3cDAfSw3bvcBMiNt8Gg9Q9a3n9UysBS6hxTC71PZYTHd3xYvrfajha2TdWxgaVaCr2j79LqPjHBPiU1g",
  "key21": "gUcguiGkXvsoKFCG9pTrP5deL7piwKCE4AZh6Q7Bp31s2jbMyWvMmjUJfNDyiCRWKzRM5JojWDhmjbRGcUY4Msn",
  "key22": "3CW8XJ1usJx5RD8uQ4DageLAygadoEWfB911wev97xh7hC8uT1qgVdkfXdQr5T4yVMpuYFCELDNo18hZgAjcHamG",
  "key23": "5FdHnyXz3iXo3TKbVQGLv1eF9ZDrQWUwGh7YeMiMFBUvR95DMfmumYniwfa5tYgRNieLPDwDM9RLuVG5ZxzXhMWg",
  "key24": "2mbr9Yb218VNpd5k95iKjvhtRKuF4frPnc6S2CnqC3fcwWwvs1CKoMd2NHeZV1EXnywzdpn7dXwQegfjXkXsCW1S",
  "key25": "2VnXd1E2DegeHGgQxLFf4mMMUutwEwTqDE1xUxHutprRYBCJkqG26ymKgG33M3Q8HZzQahmVshsNcoRny8Jhyip6",
  "key26": "3ENeknnqg8dS92AHk2ZpFu4uhDTPGTSGfxTXc1opuFzX43AB4CvLAJhpEvQ5ygWvmx8wVc8quGAhA5pvtuHqJsxs",
  "key27": "pWnfFGW5hDCiZtYfdLLXGDXTgWyfE2n9tPwVZhA2UfCyEssQdiHXFk2BAFLG5H4VjY9YXbJrUbJuCfN3TaoFvaF"
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
