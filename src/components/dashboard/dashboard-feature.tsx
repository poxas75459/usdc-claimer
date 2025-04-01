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
    "55AHry6yjvGgMNefgvwhbn2XrhWrPyFsUBYmHxGqR9EL4WQwvT4oLshK4JJVMRt1sVTJaRN1tCDmBV4BzYvwm9Um"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ff8h5tKGujgPqNkhHk2RHokxzqKqB5bc17FwHHgKEeEfqsui7g4TSY6wzBPQzampeDC6buFmGfo47rxEEVZ8Sor",
  "key1": "26EhXntNfmzpheuWdqoKnQUN5kwmGoKNwPqV8Y3FYNUKvnvs7xmT2hQJkJppbpMiigvfkgikxrEBfEipQbr6BRDr",
  "key2": "4pRTxRkkSZRmNQmruYGVgM9WZbuDw1qfYXazZ82xMsQ37c3coUqGEpuz476oeozG31xLD6nygmMxVNrTiJxDk5xG",
  "key3": "25bekjcgq9YmBeXXEhoFuFXDS26N2Kr27q2FnAf6dgj11BG8QKmgc5qYHwAtx2CVHsm9AypW6CungT6ZhzL6J6SB",
  "key4": "31fgxHUbswwcPQRz3UBTMSLyPoYrgXqgqVjf9zxDRZVf8GyDMf7LoGubxtA8wV68jsffbdu89rgv6GdoFZhfU7Po",
  "key5": "gk1nrJDENRmWLEt4JNMY3tSUd9uKkXZz3gUcc2aQfDuKmM2F2dds2tYcHMyaeyAU7uu5z8BGdo25Fk4ZjNmfW5D",
  "key6": "5son33tR2rv6gZvEpYGHniMNA5YS36u6zL4GW9SvHWrgjAJQDK6nJ1r67QyAvqVewB1MXK5sWrvk9X8muA1gKGJG",
  "key7": "4ZBCNQi3vAFBKxC9Cu6D59CtvNmLfyKfsxWBAiGzSzkCmPcWXVYgvCPQr3fDLbNvbPqDghUqkfwgQTajmejC5mbx",
  "key8": "4iwrjy6bdjEz1QKgJqXAThXGwKkBGg6EydEhXXrWZVAwRKqcMf3rVbDLvJH8KD1PNtE1aMBAKYfbaTXqkVe59hT9",
  "key9": "5PkACVq6wnWwmggUSXFhidUtmRAmzgFsNZ4T4JRrfMJYCDugxqdkqp6NDr6XpexstBvxmHGHMfxeqW4cX3V5aScY",
  "key10": "56KbaixhHkfYRnZ6871WBJqnuhQ6Pt1HeUZBfreTtiNhwDeVAcJF3wM3oZqir89vtpP5CWpiRncVmjmNXuK7toyK",
  "key11": "4RcgYFx2pEnyCUFyHQFjtK4SWuzsYa43h2xgKBqHCDSNoun4fVj72VyuCfwFkEWusW6bRcraXVpaaxoXkbPCyraE",
  "key12": "TLMoU263iDYpKiPeiMTwE5DSdotFUfj5CLdcyid3ZgHGEudRkzJ55RGRHzTrCu2id5zkuB7vu6ZMx6kGj7FGj5h",
  "key13": "qN3hHqY6g4EghEhTwWSYQuHRtq7M7gRq3QK9FV4pX6ZVb6SQ6AhoPtq9QhUPpxaRiPWgUN5XPdRCbchQhGVFvuY",
  "key14": "2Gjw4HasJveFb2qQw4cydgAHj6suuDJgkspwjaiybPaJez8nFad4tAn9H5c8zd7KUY2k3ebb97UfCifQZ9MUBk4N",
  "key15": "2jLxdV8aiM59y62kZEPRU7ZTRvDDFHc7UaLsb9aU6d3FVfaUdwRPfodTBWqvVaCXLjv1L3rnbx89h3tH1fLet8C4",
  "key16": "5YY6mfPsyJfYHoPvWbbUzhHFwTSQ1HaSdWzsN1pXh8QzAyGF2F8X5C2iBw2KNfink7r1o22c9UesL1ZnsN6A9JS9",
  "key17": "9qUKt7HVxWJdch9wUcvjeK3HxQmbeVFmXdczWgCAQbiMzeJEAiVTNDNyQciKZ4w6PXbzSXsPUQKb16ejzzwpjr1",
  "key18": "4x55vXZK1jQxqFNPpL2UvY4rUKv2yLi8eeEKHQ4v5XotF8Lb2n6FmpJudPtiGEpn8h5sooUHru7sk5Ak7sAZq52",
  "key19": "3ytVXCJLLzRBaTHQK14dHEvkHZN1FRnEb785BcXxYPbJ4Gb6KVRS3rXNqbZfjVXwrFC9cYeyoiSVPKLgtEi9ufar",
  "key20": "Fpr17hBk9vLDGyDUEddfYe1RFZEGnPpZhoLxeYVvH3NPahEvDEBYu9d1tWegpTf4j8wMfNXC1JsRJRVCAKBSbB3",
  "key21": "gwWSz4gArhqYSUkcjLxQxDHAESQhCBV9SfrWWQ5PHvtoHi4AHJ4wuswCNsPDPhMYoqRsRvACMGfBVcxSTpASPTb",
  "key22": "5aN1N7kX9dDnibfSXZbsMQEkrKeDPM3fABcyNNHNEgtBaxaXKCJYFpfCt2x73RuiZCjj6FP631c48VvRHmFr4sTe",
  "key23": "3Esp4s5cnCqbAEsa4ZswUfbDVTiFxNjuEvxqU2QquPYJiifwGr5152FCWTgcYxUBePDUEKwMK1Erhd7SEBx5vhqi",
  "key24": "3JHSdJnm1p4zLx8fX1ZDvWztCEuVteXRSSucdUjFMQoddhz8vikaFrpDjB1cSq45tZicSCRViUc6NuzERGFcJags",
  "key25": "5TE4syxPR9KKJDrZYB9aDhaK2fgo4VSbciXJsYXqrxWqHSrRU3Rj1a61caTM1Cawo4FxUsJhYjt23PtBF6jx789j",
  "key26": "34rQBTStxEWmDqdW8dLjSpPkGHVYPpY7WxvGU1qwdqD86RAETfBGrS981uXhqJCc31GKz4h2re46gEbdRPTZCzPe",
  "key27": "2C25CbPsRncWWzJVfg3j3EMeRaLm8f55i1qAXnsvP5d6oVF3DTxCiGeu9jd8mhvrkY1bzBKYPun8zigQ7Gzdx4qZ",
  "key28": "5GdgYC74L77ncKsdj89m5WLseAvc2kbdDiDYWpQWErUnzYcR6wnSZGjj9f6DkttWMn1QZvg5Sx8KHUNLZ6d7VVLF",
  "key29": "3mcTYCf4rJYMxoQgUhED1VaPnMBN2vUgduAhi7NJ2jRoaeco46CJz6VHw954j9VSx11xhBkJjfKLSr5JZVGwADGB",
  "key30": "3kn1A5F9EST6y2Cj1eSARwH2dJnSZ4gc8WC2wf3ie2oaWLmdVco6h9wQKMz67i5Np6XYeSZ1aaY2W32gKs4at8fb",
  "key31": "KJWFipRzghcu8YXP3UCZyGxhczvjwCR6ESUYtC4So9FtxSEhfonMixoaP3BKsVZb7Zmhfe3Wass7DwiQYA6bmWY",
  "key32": "52zpx6fLcx46kZaDMJmJSPSDxLBDht89zyuMTDcZVpnPa7FzqP5gixZwzgPqYUe1k1yceAkpFvhvi72kVks7pPuF",
  "key33": "3G2XW8LE7ZLpCTARbxNYG5EYWKstjZtXcsdaj58aMYAFc66pthwk49zddh5stfFKFPqjvudPugxnzKqus9XBX2cf",
  "key34": "4aErPA2XFtBpzLU2Y9Y2TzfBN7wnLVNNRYKaHUhFfaEnPnLL4XNPjqKRLFaLwcSB8wG31Jatp2FCHicM15sdythP",
  "key35": "NMwYPuhX9W4j1rtrt9zeS7jbb3F4wx8h6iWMM9grRGtb6B31akUZSXmyJnei5He3qDPJhoi3a9uUK17sJ5ysANb",
  "key36": "2Eed571hhK64hVBXKyxEUJ7ryWHgKztoW8numboFhjNPcP3LZErXbMZAjVTTWHmhriu7hsjrf1hHxtcm5tvi5uzG",
  "key37": "38i7ueizoYJt2BtE4qc73qpR5SpF6P7WeHb15BFZpvZWbTZ4sRNGLWpByAL4RXoBzskCNwS4J2eoQcdpNrGdqGAC",
  "key38": "55GKgmwQsA46xPFPYttBzcsRNzzmh78h5KWEAcd22zGMup4exsoCupkW8U4RFkpaLLmmmJ6PP26eeCrZsAxCvwMX",
  "key39": "GYEW2BKBV72AtFdjWTFjZEdx6G7yNcRneg1pywkSqGkmvwwdx53TiaaYE44xL13XxQna2z4keYzhoUrjvUwDnAb",
  "key40": "4CyQG2VM5sgoFVgNuuPkxxu3vEMiByMTuNmtB4hbXpR1DEsogu24ZcX1DQp4vU6guu5p4PGyJDoDYNopN7pV8R5n"
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
