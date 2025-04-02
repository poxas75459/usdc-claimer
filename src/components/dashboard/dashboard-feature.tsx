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
    "5gzXoJvZNqqv2NxmnpcFMEAJjAhKPv45ThgPR5CnY8gQLzZHu5fgEo8AD1K1upFJ4fmApbPMUvQ2UZFJrSe4j8tC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tUVvoEtxbHiWKLPE95HMNVF5G4GjAKgUBv6KtPU319bpgasg2ULtwu72v1Jnva3uwBiUSyn7Jvd4ydoN1ZuZxDh",
  "key1": "2WftvoeT9Y8QYvQnt1SUEr8V7EuijAmxKnFkZW2e5ipSK5naVbfdo1b8xm8HtaNxppBKwTGHNutk9WGqZC6TP2tA",
  "key2": "2iMLbqvgPrXgEkekiTFPzagYxg4PwGc9TZ3bmT1w7j4AUvyBwKmrs5Wsauk7Lnjp3iiuaXy26z97j6qrpEGQtFrM",
  "key3": "53h7Peoy7DGkH7PbRtQhrz6wdZvCUGwL523L8HfYZs7pv1H39ekrwqimxrXoPUDaDkGAXwBCPKq2ABktp7gadvEP",
  "key4": "ozb1djo2oWZ1gh9Q52V7622EmiEHGZrctsWdQFoyn6m9F2HsCpbMtvTobXkYfGC9aUnmM6eWsP1ubD2gPFL4QD1",
  "key5": "2RS5oDFXbvRAr9FSzsurunL5nq6tZWGBUSnEvtyaBmJwCT26HLbMCYbkuStRnckhqZXDKRTaA4orpkAMvDKzSWrR",
  "key6": "HhaBtAK1of97FWFpShMgvjnDPAwgVWwsDNP5unsMaPWzH7CuCYCeX384y2QDjagdKq4eaYZrGq8iXYS5qACERgT",
  "key7": "TH2rJCmLdFtNY1pqCiAYhJ7YhEC3XF6nzHEJqBtVMGV2qT2XEE5L4UtmpdsNHBngXUWCyFqapwK5tndAF5yDFYA",
  "key8": "gm6yPLTHSgHuy8DnPomS2qRutSJvbsYtfCwNscYxbUtXuWz8obWuNEt9h22eLwiuizTjRCYVZ8Qnc7NgLTButi3",
  "key9": "5ba32yAdod5TbgpZdEebCs8zaabaZpBjnEaHrcueg6B6bA9WJBPcn5Y9P4Qp7Xf6CpV9jjwAvMCk53ujfVeb3Mz5",
  "key10": "21pQdvxe9kakxR4UF6a4ugnR1hi4C9dEcBD5x2hw2eTyH8revbrYC5WrvwWyVGtp3BqM8RYW1ZTBKVwfE71Nf58r",
  "key11": "3y6MQc8rUxoqRS9CDTBgg5U6sM7VESiTdvFEbV3N1h9ok9cGkEZdPNhNU4pkJAGpBJLyqebb69D9kxxWwxbTB8Pz",
  "key12": "2gmQuurin1QNEHasxzbGcFwhQXbP1oBAeuqierfPsNfD1vWbQcu1daqAvV33d9byQfBfK8cRscNE9sRm6vLpoavU",
  "key13": "3wWiWAmCLjTG9WhK8fikV3bFkypAshyM7LSLTfLboXEPAoEb5ULfxyDqoZGX2P33nKhdYNL8upz1EMatRh6JgSe4",
  "key14": "66gj7NCxLYdGSt9avBKT1Nzd8NRnu6CncwYENAZPBRXQs6UHVvBsbtnEowTeUQUzNeSU1ZZUh4p3fku2Sog3Ko46",
  "key15": "3YW9wmzef322qZJCRvE6mt2Jw9kvadNgd2N27oWu9rSYRvih2JToeka2deZmgnAxMh7dFmsXJxzxb5d75HiG8ZKd",
  "key16": "Uf5GU8jePt6jrFPGzLyJZ23LoGZTxzHjsBy4u4sxuLoa6mmYigAfMcMWKvmcbywDUJbU8UkEkRaE4Cyq58YKxLc",
  "key17": "3doqwomoqWRAokqt5qPnsUvZbuPt4FGMdKjm9Vi5sdxxKzD4irYoLVmvpjqecgnRqJNWeaT5XCBsWpYEonNUwjrr",
  "key18": "48ygmhiYrTTGiUT7FjPSHdW5e8k2A11VmXGtLMDaNoUFFh3ys53CWHJzXjHacQ3aaWqVs5LSLMdmmcSifg46kMCR",
  "key19": "4yAGe7QXfE35w9RqXqE3ZXX6G8Kykdk1aYrwkwYAQNhZte4NDzULaG1JAxYe5BjPcKhZNa4SmYAJzsJknNChFww2",
  "key20": "2oegVSXoJUxF5BNSg4gvatY6xKrgWiNP9ret4tcBxLKWj8NgmYNEx4BHQRQSnLnHhixtB2WZE7orQrErrw6FZsTk",
  "key21": "2NGWrR4WFqX6XyqcErWU32Bgk5mTMrvuAwoWcWPDvBmMszUq9yi7CJCdY1AksHBXcA2jc4EftAV8RnmdbjCPNRBp",
  "key22": "28iwBNBShQHeFRuC4zbwRn8tbfNUbBjvd5TcbojXeGiDAvEMZi8u9iyMGZLE18m5yuxzT5sD5xMCgA54NG4oVXB7",
  "key23": "VLMbeZ6hpowmXTdUZNVMMHDLyMTz1bUDQ77LaUuzmj1pt3B8PEDRSSnEFnag1nsqeGjeo5c5MV21NmDycT74mFv",
  "key24": "5GxsrAEMEbSBzkHkJtfLYJ3cN91eaBRvfcwHSs31VSMJQWAp9pBLLwn6YMJkefuDL1ASccaFSCfXRsSfXayCJP27",
  "key25": "DrCipRPmtrwpZQZ9MbMo2D2DVZyFg8R4JH8nYsXaezttfrgReJvdUsVFZRaVn32Pm8SBx9KvYVKwQ7Vx1deXPaH",
  "key26": "3ELvi2H9nUNniA1GvkG2mpQ9H9WysWXQwS4V8f94JFA8Htv4TPypBtmnvB2HP36gEJjmkK5NPrS6oya3N3uLa9oJ",
  "key27": "2VCjc31M6xRkd9JsJJCnNmXovjesF9SUMfFcbHHqWYW7YuD6cnqJfaNk5t7Xs9wU74CJiL4PaZZKDF5ePWMTTCQr",
  "key28": "2eXhYKJJpFiQg693BApxp3SfruLrToTUukeqXDbrh1Survddq8RPkMj1yrwDPdTGhCj8bmMPQBXQrDJryS6AEC43",
  "key29": "4EiH4vyPyUgwJyNtqCvu78kQhtDAq1UTzRuKg6Un1GqHtvexJ5FT1jwMQs6JRAxTxQwsCXiqpno9ngdYYShPCKum",
  "key30": "49AvkD6DxidMvNXuLiyNEQ2dxMHeDEAgYgCVG21riGWjQMy3boScMM8uh1RfpbVkF5yTLZhYDfpNyqeqeSf5dDFh",
  "key31": "5EBq9wiMiX7Zz64RV18sxsXfmQN3L62nF1N4W5H7HwPavV5evm7dTH8HdQKztzNDvZBtP5fTMuCj1RKBS8v3VZC",
  "key32": "juHWL9QugGx3VS8fV6QyHiDDJJBxoPv6zUfCpGr8HuyNwNRM8xza3RMEC9ZXkdibcj5PRobCryQYSerwK9U8RDP"
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
