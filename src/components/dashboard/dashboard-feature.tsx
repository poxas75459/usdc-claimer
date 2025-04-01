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
    "5a1E4Ap81CoLuTbVu5s2VwMHnXqoCCn8Bv9ur3EoiJds5drL4RDjtqkqJwiw7kTQrJbpmXgP4vqvLMKFBB9is2LF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d3NRg7RVwe6xLPi7yVZY6ze3ju7xTSMDreugPGxciuWPiC9gRYwheCU5mJCPgkKbnuteiyomSY1F7VALZhiT5kK",
  "key1": "4swCiSCHGC3umdDu5d83r8cjP5ny2sLA71pb6jJ3SSJFwc2r8aAth3riVFQxrPMB2GLHLdjoCd4ujiAVdPh6vQxQ",
  "key2": "3MfVAMjx6YgU2ahRh4r7htpXMzkDqGXMLUCrXiQvduJ539pELVPmEtxXqem8FJxnLAoy7F1MtGBySNDLw9BkDUvX",
  "key3": "zuR9eWsNTnSPoyhQRa4nrhhxqU46ATa6b1oDL6DLhAXPWN5HyQZMu8ASbV63NF4tHF85i6vr9iRX9s968Gg5EZ3",
  "key4": "5o4vS97UdzN1LuJVPowMs1eG6NGrYErb1hfzAcdriB6hHr7wb1PgeQSzyy3iUSauLb9DAw2BWbciyXTR6Z96gT98",
  "key5": "3JDbXdhZWBPX3SwhbiTSeQGCRJACscYprNbquJDHhHqZmEbdnR2FxJmNN8YzyhHbnErZBvpKHjka7dkwLrLwjq5V",
  "key6": "rC1GkKVx9Gtg8hqr9g4A4RhLyGPdBiBSMiHqskw9N51oaDsXMAVVk66UYfa4BvkJAdRwTMiP9wi8AHsUn3QvyL1",
  "key7": "5yERX92kG55iJJwUjSBK9cattSHViJrCWSBFa7jJzf6nSnGct6kSLcECxHFj8pJ9PaejpqnQdReBm9o6yGdjM8CJ",
  "key8": "5LNs6vqz46eKjvzhPzwJ4mPFgLU5BNTJpoH22vusQuEM2L23WcXFK5mPoRZmRMDg8R3XzMkbm4923MY18EbZXSyB",
  "key9": "3putBHZoSe7LeZMCYtbRcun1ZVaNhBkjLbeyAHLFqWaj26psrP9zGCCKa2RdMMSCduH8bSJecrCNHEH4dA471xoA",
  "key10": "58KSPoUhz4mPrSLHaei75Pg3b3DEU7G9HU5TzPHGXtqrDGiGQ2A4u4qFNi44o2uqoMdGtm6gjesocbhD1r6zhUFb",
  "key11": "5FSBqUvEyVK1C3bd4sWRidy1KkKNukUcCZpDS2QkFdWKRamSisGKbSxhdautM3t4nSZsVkV3CyEMPzNJaz6pi9zZ",
  "key12": "UiLtDZMu5eWMxh2qr1uWEkGXZjJHRaHAdTqpgsmQaNx4ybJzcML4movYZZLfHSfVmx5H9EbuLfwtsxKK4mFmG11",
  "key13": "2zMbfpkMw1oQiUVpu8TQCk6WsTHWwyxBLurVCeL6rbiL3BYDZqGtNoAbBm9LxR2FFZvpU8kWF9PPyQXwPWVdHKfA",
  "key14": "497FdaFCyXg9vpJWrYNojUCN8EzRJrLBE8GfgU35eYmGKjHdzTcKebTUF6Uev1F84U2LQPJim9BKvZNr5hfXmqKw",
  "key15": "5o9ZvkTEXLiZhCgVMTjN1CU2BXEPck5LLNcW2JmT2AwM1zYaxSZHifej9baChkvfMLTypmoTiS1G4xvaTrMmang3",
  "key16": "gYpbHe6Ag64rnyz65b27BwiwjxmQapdo32reLPyaTysQhrYKCKSNK659dyv2DcYG4rAEFoBdYTbc13nrrqZqi9y",
  "key17": "PR66KRtCuYNJYQkbQYUWoLdsdyN7DhqsJgAUvp8krHqq3rBozmA5RTzpddeBL7VvLsDGeRshnLuuttpTedMShxw",
  "key18": "JafeCdkfidbBFhrQ1uY5Xs1pztpN5JB4kfGccZubZofX6jvB3FzDJkyYsaGzNrAsbXZkgxbPoBxMQ4YDj4mLFpb",
  "key19": "4LMXeSJzs3YU7teSgcr2JDHLZRgy6fjvnTFuvFA5WxBgtM1kiGwDwk1bEtCFn872iybSudMXxM8Er5V9PqxVQUGg",
  "key20": "5tZmwaAUVDE75cXF6Rof6giyomzqdvCfWgGc7YAeoSxnuzb8XUSeJW6xKoa6r8yvgUDS8qsEj7PSPw2TkHFrbWs1",
  "key21": "3zLhBbHqRX27Fn2ABRFTor6kX73UdG9wxyMr9jGjDFNAyCkjedPwe7cZAEUXirCepBJspFkCw3ztvRwJ7AmMshfP",
  "key22": "4kWNTA3xc1kdVfDtQXBDgKBRTRjVntCTTuqHEyvVz1sWEADSALnzc47Q2SgyQt22WY3q5Y5KGq1VKmZVGYXBfWLH",
  "key23": "23NS65gpre2z4uUhadKrBfTVhX5P5YJw8NFXSS1DQtusSg5695tBBUBXZfQMsjghdpTZLXougXXigewkCxzgofhz",
  "key24": "4a7D4C757ZA8vFTzZ8qsvdkjCg9AvvNRLq99gAazoEMCHrrpuci1giS8sbETxSwB9UkcGvNXzvy1hU4LeN1qiLbu",
  "key25": "5Y5CvLa3eaMpGDg5vbfD4nQB18k4ZtF82sqwLpAx71526zXwq3PZRti7sG9NbAgFfdwfFfVHJiSdhWM5kWSt9AJQ",
  "key26": "56Yiqxnr4CF5WrLKzM1c7vTML3t5ogFLmaYCdd4tror6hdhF8RYsQ9hLFabQX8CGB4RroLx1nwAvRvtEHVHvy6US",
  "key27": "2TbfHih2EHhaAxB7p6yqsEWXasxoCqh3KSq7yAfAq144LoKVfkHhghRjQgHBhUtYr4bHnjh5AXcqbyLscnuiLE7o",
  "key28": "55DwHw15Vk8Vu9PkWd2Z6QjjkqFRoVeSw8YrZJ4743Z11nQRtW3dzXkK872uYDPzmFRk5RL5EzRwSMncpJDSTwu9"
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
