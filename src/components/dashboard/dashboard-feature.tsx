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
    "LH7hKpo6ch4wWaHgKu4UFmGBhaKxC9GxqNozst2t2CnyEppWq896TyCnmohQZnCoPTvAnJcKSNuSMi5RsqrNxkR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kxripuzzj4Zr7BPCLiYn92omPbcSmcSBtpyka7UML78vv7dCbmGPMHkckuNSbMPJuxkGcP2xKc1MXkqWR9TP1s3",
  "key1": "dR6qB2KgUwx1ivULVkbogzKgWEpXpVT1JPNXxkY6fBfANMefExMW5vicckX3y9g2ffhKda6xc29jXsZEE9ynQKa",
  "key2": "3T2WhfpmcsSyCmYorNoHV5ZNdH5MvSB9saYVTQa9nBqMUUTYQUbudCyZrneTGt3EDh4vpTrJpRe52o7vECdr7RnQ",
  "key3": "ZTehoHZGuyDvBeUyc1mC2nPM2tANV4KM2X5qBqwq7TaBYPzw2UAtAWyp4absFfaGuA369xEiy5Dipa3dcoiApGX",
  "key4": "48aoFn9rJAngWBHHjJdxRR1MdjSo56a29r2Xn6dSggoJSoEMyY7c6tjNbh8vXPMTyGa8skedUjZDRgAHd4GHQgoY",
  "key5": "37fyiB9EQiRGMcAkuJSxcwDQ5NRsr57QEVuJkPtUKXH1hcrTN7of4uC6Dmi8eF9y7dTACbUMBwp49CkMtVpxKaXG",
  "key6": "3JmWRw1HoBeskLwHUJmKWW7GChVjVWnLUPoVMPKXdYCahVqAXzXosGDMaKqka2eCYpEqJSKbpb5MZsHL8uLNDQN7",
  "key7": "4GnXL6iFWdRPDUNZA6Fy4QP19yheYzuYxXJJE9j6rgVX46gASjAXU9ppDLuJtxLk2GHmGSFZ5kZpB5xzsVNddZbb",
  "key8": "3kG839eEsAzvQbHzdGbTYPwzno4vEUnAoButdBjsGW6FUZmrcwGZieMZpUFfVfzgMFBUpZ3pBhnLAtng34sFPxJ7",
  "key9": "2BHwWsY1MKHj4u64PJiBrDe8FAY1SrEsNgEWPojef3nsGzJbZ1wJuR791TCVTcELk2chEW3Zh89F5fsL9rh2TvEm",
  "key10": "iP6uoUExKPcAqUiqu279DyfgJTuqBjvVNxwFAyC7z3ARjvzG1oNovUFY57Nb8HmLpx5jkj1ZWg7wvPsTsoSR41T",
  "key11": "5kBYkkfutjgPJdvrLMk6TFEQGTHxb3tYjmhjtwVjYZDsPiMCpgMBfrboUU5Z5QfA4m12PMF3GMsrFk3avvzk3vap",
  "key12": "4Mnq6NUyTrPP1rf5Wc8374XVNJD9o4fSDmMKvPzzXLRJzpFKiLYnLhNiH9a8dqL9qr4k51GcBCbiV6Y1qC7dQRh9",
  "key13": "4i1nzqLJkNDvf4Jz9HDZjdsxW2i2FGeZ4KrRPHT2HZcUh9GWBmJ7QV6htbBsgMTRukqhLF2acEnfmXHmZcD2biwM",
  "key14": "48YndAiovuJYs47hR5Nmz6n6RnzgnQ33jqxZ3gsHGkqus7DYe5qEsnMBPcaNMpbJu7Ws7ZbeniNkSgb47Gs5Bv5J",
  "key15": "3ToA2Hfvz1ifdubSAj4yA6EEHo9ijPo6opTuoe5EEepDymqyNxW9jK4EJpmbptXCukJCcmGCDCPU85wEo2NhzY4",
  "key16": "2ndkwCGDVDQ5ncvxhf93PLsH1puJKNGwyzDCBvaQVeVzrzdczV37TQcnYXoUb8mygKo5xH3WkKb8wR9mo3MWD5FU",
  "key17": "cSzgt2dLt7Cgnc3PmE6LteRLvC93EfJ9mHSSY5TLDBNHUCwUaMM6a9Ss6hxffyueKqMp9KsiSoErN7wGVCtocLC",
  "key18": "4wWEMp14phKTW35YVcYviFLejWYtjXQuBiqehZC1y3bQirrTVeF2qdu9D8zUc9FmzPFVY4TKcHHdbmhdKPFz6bPL",
  "key19": "5RKMg8Wo1Vg9AcsfvkgNaoXB39GZBcf9cShF2aX7rbDnYB6d8Q7VB92dz3WeKnN2aAVArKKPP9s18cJJSvEaw12u",
  "key20": "54rVQmVaL41tN8WH6By3hczvhWC8SUBEVf9mp5uMXkwohpRu1agsT5rpiUoT7hnWwtLHRHqjzs7mZ4op47qNqUyE",
  "key21": "5YhemZs9XSAtDupVqN6Hm4o7KRyXftD2A6gxLARE43WaxWaLZACtMw86rTGAnMPvr1uVUkczKoEah8FSkzuiWfdo",
  "key22": "29Bh4Qv1n5vn8nFL4s1ourUafoQnyM92zGh224GY8UXtxTBPTyQu7FnJN4S4iTjmieB6yaftYGeVzTNtxgcSLV2c",
  "key23": "4TyGKRKFJ9mcTDM5Nz3How7gqzb637PuE76GUaYYjweb9EFW1r6GFLb6SAHPMQ2PxaLK7E5CDA3eFdZcG1kaHysZ",
  "key24": "2hkjNeYgx41oPHRuDFvHB7ZwyGXJL6aKpmwU84UfB9pdqdGc6pH6zhHUMnaNPKmEXCYWjTLxCqq3DVbp87LRFKRy",
  "key25": "2jmseFkg2j6Cxyet6ZifMLNcCPjg1GBAJsrmKmeJM5QugqYgcZ5jLFtjUt6nuApq9tJ8bxCWL5cghESCcwwdu8ty",
  "key26": "3BKsjYct6mcuKuhYRnzitsfs6XTEQzJQEUiSD3szAHUNMqqUasGnibfrEFkAZGYhYKMH7aCCDuGMe2bFXh85wCLD",
  "key27": "3fUC5Wbmc3pcKkgVvhaBwHZPycNYU4fFGjU252udb3NzmGcW8ieEoY5APQYUij54zomJFhn2dJ2nrDvEdYS4RcQd",
  "key28": "n5BjqPBVHSqwgx6tPxnke9tiLcLxr5dGcrSBC6m3fBT1wyqh5uQwkrecucPWLcQAe7kZFpaTZQCZA7L4sTfsRLj",
  "key29": "57uafuSwgCfKwETi6W1kiug948wWnJN6yRtF8dCKZTsnLBMkdGtvyj3a5Nqq6A2g5etqZHAWhheoZ5mzbTMuNWux",
  "key30": "3faLeoTXkkYXqcTu66geYj3qmdC97yffHmdmgJCHj4J38fmyuQinwkiJHAcHfNAL6UBTrQDWBoFXtdsFiU3fYDV7",
  "key31": "2rzHXzHJEYPL7z7bMqPGFZU7K4QgfF9zYyFejrRugVPNgWXsQFw8r2eUKh1nqfcWGUJr6sWhxq865iRQWVfimc4j",
  "key32": "3w6MNV76rwsbAHSQstH8sMv8uK4S88WPsdJusoiAiYs28PfmvY6cTJrGiwDat4yYVosrkQfwKwcSnzMcS29xBJoT",
  "key33": "ecfZLMqyrEdeYs6FDFkKTctTZyhoLdvsZbNtLVXZs9EQyqFmwkrbjZrEfmPzXuCdpevW33vP3kLx6A1K6s9t8tJ",
  "key34": "3E84FP4D5dJ9vWpB5QKwKSj8No2oySsUL5bia7L5MiNAfHMCUH39B3p9ycRNb6i4go9EzceR2dTLG1kwRfhQTSaG",
  "key35": "2Th3iWY4Vu5xhdJLuCEMqpeiXBPFhS7PirMRtHWgR9Ke9uECtsS2GRBv2jzRdL4hVqtZGQf3QtbPuZzs21CNw9H5",
  "key36": "rNA59qVLmxA4kwP3pKzRsj5xDCy78Tssk1j1C5NdAUHkUnn1a6wNCKTmPpy8i5eoRxSPbzvbYQKM7Fa8VEfb53P"
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
