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
    "2MgiVsmYeA5GYPbHrDDRogZExnBFXwW29sm3TWrfTnL74khoG2VwEGXBumisgdsK4Mcm9x7oza1BzMAfadpLfkVs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35Cf7SjXaTjK3Aqb7g2V7EQjYmCd7YRvHAWPyAewa2Sjm8qKVPnRj1GHfmi7w96fC2b5Y2nnLNfxxSCNRx6WpDjG",
  "key1": "46C78YbrF1PeJvdWE9irCgxGGmWCABgV8dzEzSCkFHd85ixgs7mTikiyPEJ9Jzv1TmheFZmdCokNdgp6HJr5YeWU",
  "key2": "2zptJAycyoh8JDxarYARxGqUgN6cWNCCHuFxndJJbcAFCboX8LrRVJTN4Z8F5a7TPLoBWduShhFJx5VfTnWhis4b",
  "key3": "5Zfyv39z2ZTuahdQn7uEQ6PjgG9keTk8Ri48DNFJ9w1Dt8z1FuyNLG5xVuE4n4amHoLhneN4mVutAPKNkP5tWWJm",
  "key4": "DtF1C7R6GUSjJMXqgpsxTM3cJPv5GWXDpqqzvpQd4La7JNEo7nBnH4Jqg9sTNYrLqf1YN2nL12BEYCeiT66bqTB",
  "key5": "23WtYDofienseYwyRVGpappEvHUWWNhuVWt9b8nQCFxkhXvjzgoeYox94q5ECxHkXzMJQr6QKh1P3FJ8cEomZv4j",
  "key6": "3EkLpj8gky5b5ZnXijox13jJphCMm7CkjGydGxHwbZUZGLdgcmtX26gdrvUfAsTTBVdYP9LzEnhTD4CmjumdBVmK",
  "key7": "3LuFheG2s4qMsxDfv63LjXafLCFvBzsPT1CepxmgD9DFg9eXLmvcokPhR1W53Nvf4sY8Ka5pJ1TgAT7LhrrkBRSU",
  "key8": "5XK1Feq1Tvj3uodMpD1ysbQzvqSTsC9XtozeBZ1B8qrc9Ycm3hHWEt9AY7ZBeYdC2B3T9h3JpuCmGpjsmXyABkrq",
  "key9": "3FriLwJ8QBPLASuhioqrZixiyKh7uvMP8xas2wa894zR1GFK78jn7rqFFUMx2i4MBamTrgoKUaZeYTPSGXUh71WW",
  "key10": "TYnA8KRWxHUfp78XpH5xRB5uRrXNWsHFxbR2rcjWLYAMr59mMsTSxv1NJA3a5ARk1ye85viFXbQmBZnaQKxk6C3",
  "key11": "26riDGA329EZUbmz6KDbHnMPaYUTLRa67HETpxpfkEVfZagFcViyY4SnZ1huMtsqXkx9wWo1rdCJjfkRicXPViHj",
  "key12": "3C4aerafDennUMv9SX9GknGpoGJvJJcbJeKm26pbSkvqEA3mKJofTZjmSTZDq4842kNYXrWpw5Z6YjuXmnWNWS4d",
  "key13": "3ySH34xDn5xkjsmSKdkwu6vJCxj6MQnndznVcPm9AnVuMrTGYrRdv67BqffuPnFcBzuPPfj7LbzV1zWd9cmW1fke",
  "key14": "2xXKW5Bq5jz6fSNFKvQdAmhHjwwerRFNDm5YpSSSjKgJZePhB5cj796nUDFDfNSHRr9ufcM5QJTtfgFv72vFDSVW",
  "key15": "453rsNhTmb9C1Zdzufjsi4kuHwUN2a1x7j8re43hvtwWbfGECjKNcJeGt8bm5rg9RCS2KhZFgFocwnjSSD7eVyvh",
  "key16": "BeN7ckfToJyJhxst2WS92UpcTPsJ2qMaDQqWAcNj9Nfbjr3C79csGfUMRWTsAr5LTSjwZUBuk4L8UnCL9qqjiPZ",
  "key17": "wDXsvFNki55mwhf4T6kmZ6MFGVMRYhHiXpBKUnBJPSTg7u4Sh6DqbgrmKJaQ4JzeSjKBSFrqBLH5tMepjE613vJ",
  "key18": "554VPoCh5yatuDBTrWLqjFaSsHZFV4JB4CppjTjpTax8beYJ89KwqjeXUvxUZmCK5megjhUXXhYiTV9WyJARNdQv",
  "key19": "2dvgqtvcHx9mDcFF7KhnieNbzo9rkE6yPBxrf81fg4NuMyW44bMrUqA2NMUzb7yHHwCUeeQADL6vMcesYu5RCB7g",
  "key20": "4XhwhVFbPeVDaXLG9NcF4ML7mMdbPMtnCb8RVvie9UtybPCKVPNDmytpKjvBZbDgKyMdzLGHBUw21KVWYbEfAxuC",
  "key21": "66iRYrEPUAQZ7dSY3in1Xk68xuFGEMgW8wXUAxVZxkiB76UF41jDHSqw6UkDfTYGeXXCiJKgtVqsc8dn7cATdCfL",
  "key22": "3U8AQF8ip1FRkBTMfzFCgArT1jHZWnVZWJZbKeEZnbvHGfVmXGGhcpqUEToCBJwNN7MTPVC2jsFPFMaxN4MrLNrg",
  "key23": "3NguAPa2LSHAphrWK1VZNGBwEdV94iVtbu8KmCcF5cVsp7v5SEQc7x96LC8UEEiFNGx1xmykWzaDJ4s6Ap3VTw4x",
  "key24": "2H8HWeuKd2UabPTro3yuQRY3dEWWZwRKb2hmsrufaNTfnrSp3TgLfV7zizFnSaH3CDFZknWtGUjLuJgAet6bf5Hu",
  "key25": "2eZTNZH3nJv4wrpYv9c5BNhqDNbdb9VmTUqZAriJv8cA7brsYWRsKUfEDrmgXKtq2p6LdszXB8d2fjBittAEZqkK",
  "key26": "2e1rsPHZZCyfGKonkTnuBzxMR1GNzuxyTnpYhDLyMLUDntDdei7A68hbEmw6Uh88NLx4cyWNWpDZcxzmE1x4Lxyh",
  "key27": "kfnDXUA8dhqPdahMmtqJuYT1c2m3oCXM91BjFhCPcsorcBZmtJDg6R2RzscsZ3ZuTjacJrcPtnvLF2kJsmDoYDJ",
  "key28": "5zr4NMW9XtBCC3jJtr6rbqtxQDBjUv2fN5mJMnsNzWZqtHZGBeJRrWTU4FD1uUJssvkcAvKMvgLxsxDf5w1hE6Vy",
  "key29": "677RinKLJkABZpQuNRgxkCrbTwAYeApoNh2zawbaMf6BN4FJN6YZTqw5LdYCmPbRpTrXqKP7BRHZ77H7rEwJ6SoK",
  "key30": "5tu41yhSH2dVo3NrwQbxpfutXBxbczYedaZPF1vM5PqaAir9SNzKEVyJcoBmFVLdnyCepSsd9npsh9MDTNnGfu12",
  "key31": "4MuGRX6V65K2kTJNFFs8aLaP4k8jRLrbeimTP6o1vpEBM5QVkTCejzhJuuep9jsDCYqNQc1jMeQBQoB4EZ2pkQNs",
  "key32": "63F9A9XBJGzdk91FAacmqeQVwrFp57KCYX3bPChasm1ZP3zrwitvmrwFebJGXXdhuHVZ67yUNQFf2zXoFP3tSvLe",
  "key33": "4ha2u61LTQuZPC3kbh9iWgGicQFg3kv92SNYkQBsQ2kzAUAsKowjEg9DaVcbF7ZdFP89PhDrN1fVCrcS2snVBvW6",
  "key34": "5awwbDstmG7ACrYr8sU9qT3gNadsaNniD12gh8eFP1CTRp92abN9q4dGrLFvtHDoNvXrNpFcS3e2XQnyn1zj8wCr",
  "key35": "2e3Zi1xCF3ptE2tthgDaApnPQiJAUMUPDNo8rZ6WZA8fEjxsrqzMiVNuDZDcxxZgxLncq7xsVkGNHAhDXv8D1SVb"
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
