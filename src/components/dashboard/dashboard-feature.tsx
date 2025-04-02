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
    "2S7ujRtRPFpZf1WgCPoL4vzUsvGW89gqgNK69XbM2QcwWvMh5fFLvZNTP198dod489A8BsEGRZePuLvUzt7xJrUM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32grUcSnhgTp6BGE7ozZbAQx6WgqqYXozZ5fxJDy62MpJA5TsbEji8SnwHiG53W9GTSWZMwNQMaaEXYE7B5zt245",
  "key1": "5WM5H5g2AoZaSMTdLU27ZhkZ8jE5ALbYpsbdtxUp91YKuLFLqnWuXjS3JeCfun7qL1cdba1LqZWwVZCfbgmVJgr1",
  "key2": "3fDRn4TAY9BQtXRbpCkRqXBT7qEKtQrEPrtLf8BGCtZQh83asLeg1g4sXrkS29Z1ixtGD87mCtz2i9mzt7rT1EiN",
  "key3": "5pTbCzPbbGt25oQL6TJVJidWe6Hz7mc27PmkXaH8ZLYXRdPiDPetvUTL4Gwsm5RwGkYX2JWCQfYVpT3CaqTwtap8",
  "key4": "62zXPNWAdENs7nBcZQhwBUu8Tcr4ShWAMb1k2HAkQ7RsX37Q1inkLHye7gcqoMg3GU8htXaxahMcTcJq2iRKdu3n",
  "key5": "5aFmYmfkoAQ3xY17Tm71GnKkbmemGf63avVE1qxoMCzvcKK3SNNYAtdBdNFLtrZVUNKHeHYijpcMPhEHeZQJmyY",
  "key6": "5ZYUsCLHJ8S6MCJamZJwrqpHUygZTGiE6Q2HShzGFiUzpfpnW7UXvXT79GQcJjHCvzs8Hq9ZL1qemD2TPFFzBrf3",
  "key7": "3tnBcwLXtxp1RV6fS45sbQwVNcxpo4ebpTU7phrXyfgv4Y6YFEUBPoezH9evp9wTLhTzfJiGvrSPJaSDN4yc75Qg",
  "key8": "K8DugASCQUUDXcp2YhnUFrk6EAsVWVtYJMzjKd1JGJS75NZqgxQjHnU67WvrzYL4xFqQzgqWpvrHZBy58MjA45f",
  "key9": "4S3dedLwMr1CJqzRMezHmvphFAMbMWiiMV6dBYbsCQGoefxrARRXMprjLHWpneHuBwrViJ8wpH8XTkvUyfXHFZKL",
  "key10": "YsVD9cUNyeDcFhgfpnJjTAHzwXEZFHKNEAo19EyEAWtpxFJvjm6i8e3b6osTVkBMDrjEFA5cg6aPY8R4RT6uk76",
  "key11": "4pPGh6ahxkC1PYjQAkeoFb7scfn21aaR1MFif4uNoVbMt7yGV7cgphfmrpcnrNgauxcNPz6jXU9sLKhiux74uXvx",
  "key12": "3HUKa37dhmhmQ6BGQqEQEZs7p6CXoPeY4A4m9jo8gryz5x5KZdPKxP3RDNSfH9aN7VqrbtwZQoE9zUPgZRXEpMV8",
  "key13": "3yv13RG4o3EJfxzZqzwf63xosPQ8uc9To3M8eNbP1Gw5Mi7DaidVJAxNRCkMh9aGTg2kvBTv8fuNHvMJYDqZHNhb",
  "key14": "4JCS3cujiZ4d8bFcXXBpM5njbwbWy8Np8coWMexR7jfSnMktPyZoh3e9p4vSb3XsJPjc4JihUCBYeLnVRTFojNtt",
  "key15": "4tvQFuaP17sKFaFrCFUb2hwjwW3F5zZ5J31DfFd4hrE1VyqzZN3UGWunNEYayUXmfYxAp18VARapaDyBzJ5JPYWY",
  "key16": "3sEPYkSjkPHyARf3Gobsj7mCbtboBHpcj9qvGnb7EtoGcBUv8xsEmgWdmEdHyMzLiYVY8PFGEt5uPQDrpj6wLpVt",
  "key17": "3Wgr3xY3EAADSjKnGEAa5f84rGqKcPF236VBbyT6cQZUterLxEuHiSizXRMheWhR17AFtAC4J1f7RwTYdiq6mq8B",
  "key18": "43R2YBjKPsPNL1sPdqug8QoGx4kwrio6yzbN9m3CnLWNyCj95rCYZeXMeJtTorZV3oxjFMv5nVtgitbibBh3nUJx",
  "key19": "2gfhkUiYfwBrBMpiThzcT6Mz8phNqqm9CYhyKVRPjd6RSmiAPHbjgxrcMSgbLiTnhoqsYL2WK7GTmvVZqCQNgyAf",
  "key20": "3UmkQHhYgjZwkP814hR1NHXXG9CBzAdRYHr9QuMPy5TptsYaYjnBVNkH9f4hE874y9xWJ4LGL1WdR1TQA9rG8M21",
  "key21": "24mFte8F7eRb2ufrpN5KY5nXv8BmRUMDzV8EE3YxvCtsa4vVtUvoU5wpmvkqYTHGJyEU22cswtaJsjHcETzsNsRu",
  "key22": "3P2dWxnJ4HEpM8s67xKhhVXZcZoErFH4hmjrGNTuWxvAyTBMxVmqVX2yR7YR6sMqo9WqxT7zVTBFnjF45eRkTy7v",
  "key23": "2LSFpt2EYutbDpZ9GiCVi5w3c1ZfpxADMe3YaaN5RNyH4zPacYocYTx9VngpwCcdo3HW3nY6K1csgaMuVMWN2kqG",
  "key24": "Pjbo6ab6SLWT17653FaBB68RwUexsqTVLSiAAoKJbCDDTYVN4fbQUt8GAWP2EqcqrtsKQBo73aocG4CsCAqJBKC",
  "key25": "3xBQdB3WmSAbK2T8wG9sQK2Kox9i5xjg35Ka3bs22TRorHufzDjoWDAiUNjvxPrQbEEyV6VHAHkT1h8pA4SwriTv",
  "key26": "s44bLejGNo1xwEryVujza33vm3AeGYAgSKYvTvs6kuvapWuKWPxp11bEY2RX9vJ2sXjFqrCdWqd4jDTGs5JeJ9N",
  "key27": "SKZA6mJGnTg2bwGgPYuyLs6XMVn5vRGTWKKwuJoh9V7j5nmunerc2PU7F9ANQ9WFb7CryyFu6wHkaUrWH5z1WSN",
  "key28": "3j7qL42qCGRz5N72AjfaJxJAL9stD8gfyEXpjRe45px66biP2SY7ESWHX2tQ6XpSyKyRZpaBWQZvJmH13kdv4kBr",
  "key29": "2Kj66qQQzZe9mwryAame9j2CiiyRVhh9XEuTYJzHJfuuhAVPGn5d6N7UY5S9sNg5oQhYzUnxQ6daHmpntsq1Kws2",
  "key30": "2FqMmjThe5cZNFib6HTvDjb7RJ9Xt63d1arxLKBAAoDrh2PcToFadSQwnnG2u1buAvY4k39eepxEHZwTm4GVJgAe",
  "key31": "5iyiLcsAQ34ryZZpuZHfu2Rmi8d8MhA7mMPhcaqZGYVigH4z36SKWDBZN3xapvQBuLCEfV7xjmzZCDCckeUvUwoj",
  "key32": "4hw97pTz73KbATZmHmhXTMG8tpAq654U2M3rNd4Nwt3D2DrWusyFbLwdRmzz14GWvPvb8u25QgiNjNsNpSKLWprA",
  "key33": "2nH9d3ZZ9h1tJBnSTaTKeWH3cTzeje4UvGbajMLA5WbDjmN3M4hgv16FPUGEAKXj9eu61aWeNYRu6AQymMFZfn4p",
  "key34": "2JqoJ6Z8oheC86XxKRGp6sW8dB2XRwypi81PLtrVHnvuX4TejertS4kKnM8kAEwYKDEE9gnwHfXx9GcbiuU4gMnh",
  "key35": "5ZRbfzqJXrrJo1vXPLsXXU55Zja4DU6JbcADgv2duJ67zjoWjTexQ9zV73vieNFqFeDoUhqoR4NEWGdvpMVXP9L5"
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
