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
    "3ZHQhtoCSDuqe19S7TKLGfLtKaVkwrjTubzvsUnzi8edg3t5UMbeZfehJHm85zF7sqiH9d4Gc5Hu3Z1AyrF7AcNQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XLE7ry58FfWvLJC2k36LU7Yoe6HzeRG6qqSAPUsJmhkdKSiwcki1Fi3raqXXkma6MpxSib9L5negeVQgVQXsujd",
  "key1": "4h5FXpAxtWf6PLcUSZRfsSK3PtGFB4gyBZbX5D7rHVifFGQDtLWMz9LGooUpG73rgPpavadNuUJedbHWF1xCeuXj",
  "key2": "JtBFeMBNA2UPnbmhkU1v3oZuzeiYQyywtB6ZzMGgyiygeCpjjVKmQUpitzfjpfmJ45o6J2DvzHNDorQxp98qwTw",
  "key3": "2pFNPyMfZeMcTdf1sGfex1f1NFj89ovEbfYeUhp47rDZo2R973KWkfrzyANxHyUP7RekZcatC4iC7zDBgNjkGy6Z",
  "key4": "43hMXEA1uLzpDWpUwg5qeL3Hm8qC1YArihkAmGqn9L41kJu2Cp2yzhiU3XiDRtW6g2uKhFE2Xt9sfEx5wA1LWwWF",
  "key5": "4Jf3NfASSmMwHDRWNTvWoFeupjR8xmRADD3qBS94assQST1au8okqjJKoyUihsnf5YwLbqtumkeLhAVhgJ1JFNtc",
  "key6": "2MPAoFGmCBkfPPfurw675Urfqr8rsL8gQwxkhNDe1KJqB9xoPg3ZNU8sexgVDb79m4NazJSL1inpudsuSozorPKY",
  "key7": "4Wn5Y9eEHMzz5Jr1exxduxhtKsSrrQjks2ExkMKnnicLSL4oXfDUPv5wsi4FA877LnhWCRXK5UzLUa613qMvKxva",
  "key8": "4ZGqexqPrpbbEdx39ERWxQBkAoNSXX6UYdXjVoaH9YrbTPC481q9p9XEQZTs2gjpeCqbCqfiVT6ABHdMHBRWj1Xw",
  "key9": "3FWUYQn2Yf4xUNJG6cCSYxWAZeK3AMb1YfosjwsvfB2mxpfDxzGjbW6XiGMwxqhmhArT7Cvy5BXXYcB91VhPL1W6",
  "key10": "3vq2BeDoVSh5D8VLmvREmU4mcuttKFk54jqRbJ2wz7mEbsJ7vUyKReyKchky96GdXzfA6xPymxhCBJ5MWW86H3oF",
  "key11": "WDsgW7zJUTkhyevGMaRBocvkpBsvX6PjsjNo6kSCvp1noLQKw1L6yYtmnqHpAfnMnLZPFZxTifNx8fP11pgrEzu",
  "key12": "24fpAk33xEzRipQnC5V8J5LhDTC3gyeVvSYwMzKwMNs6tnzBoJCNE1zdbPPcA2sa5GgB9PK1RvLwX9JVkCZ1NwqU",
  "key13": "H8xML8nDfunzAye8NAWT7xvQG6iKu2oRd5Vczk4mNxrgz97bePtfCssGDFwrSeUt8wdaa361a9neWkXFBNj5d4T",
  "key14": "2jgt5V2xF2B36zUpUiWPsDT3u53o4FrZatsdxsf4eBjHDnhmnXcDVnpj32YLGfqVNGMPgJ2gr5A47b8q3wiy9559",
  "key15": "DyZoXTfSp6wY51f5re3pM8rbxf3NNvXAfnJmokRhgwiPo8m9k2fFqwWFNSVFz81GgqLwT6hi2mbKbrPXpMBEDgo",
  "key16": "28xJh34ZaimAPa1d8iQcEiCqPgxPvqRUHwZjy8vYoEeEAAvFJdAxMy714QCDSf27Y5FQDzCgJRvFocoHrLqJBmQg",
  "key17": "4rAF8s8bidtxiZZXSCystRafDUNtQkQZVcmAXt9SsMw7SpdhWEXZb1isQumSsdS4LBiekifu8GoWEqNL31nQcW5h",
  "key18": "5hJ8p9WArdhbT7t3V962LojiumyTaWemyVwiBtAf9JTswDiuYnyUF6TUMJpHxcsib7TxsU3wWLHHLVr6xgJqhEXQ",
  "key19": "2Gm1Rt8MFgqvkXtcBT3ofNsH17tujbJ1hHpTrRDCo5b4hxwDSGT8AFe39QSAwffTfvd4j6B7Y1gJApMXKyPjG1mv",
  "key20": "53L22JVLaaW8kEniV64BWtneVN9JJa91wPRizEDsuAtKrF6i5VrJbmdeYTkTZt6S2fwmXf6eMKzJbf7jVTFcju4Q",
  "key21": "5MWiVXmx4YwMzDDQ3SVoxk5XV4Y3J7drDJnmkt6MngnHy8benfftVZ6YTzoNJ6TiUeUeem8EjFdcCTdTXX58PFba",
  "key22": "rbZS3yrZdRCfe9SbDcwAew52mGRxQbpkevLeq96n7PJgke37GVCCnoV6aibgd9fyJFcg9ZqzFYtrRvNfYKp7zG1",
  "key23": "2VYem8Xb1jmBBCjkdRyJUWQAb8QrcEHEvquz3zrSQSDu14aJXRdy6v6bob4FBuLoPrKLZbxMEzqKCyN7VqsUC9zj",
  "key24": "uojDNJQnjBxSeyxKfEafwfELStbicaQypp1RDJ9jAmov76Fs66CyFK6pBTHW6SiEkmURf5eLs8N5zDJyQbXbnah",
  "key25": "6699CkKqnre3JDXY3hifZH2dUBCxESX767J1Ji8UtxonwjxhKji5RzNHHbN5caNCz8xWu6DNnCPaso22Z2wb5W39",
  "key26": "2sfd6AU27pdMsD4f5rnAgniDoegLYxfY2w9gfzQAyCAsRqhCnHYgbFNk7XmjGmzJ6dZQnphpn7AWcG3K3uaJfey1",
  "key27": "5T92qvqV5KWfDGzEc6BXURDBSVCyBL9kaWecjhw35hGc2ww9g8UHbUiAMimyZyw8rGPtKs5muUVggReJNFqApgpm",
  "key28": "2ZSmscCUtFUc2t8EW4qHH8k628AtUAT3WbGxmwVrqY3rg52K3fF7GG7RBSNEdtGpSyVtTrCmW9fdybf6zL2ZD6jN"
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
