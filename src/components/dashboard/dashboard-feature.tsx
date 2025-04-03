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
    "5PTrCcqVkUutHHRyXuydKUTK8Xaoca5XTgzFu6UirThhsBRgZA7fs9pkDbPzaigcHH4zq8BL8PnbX5geiaWDywuj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eRgxtCcWaKvybFt9nwkGk1ZMf8cF43m2Tx1hCyJbRfwuk8b8tfC2kL17KU4HKCe3idhZ4M7Aqpw42CazpBuaKFL",
  "key1": "28txLdpSccFf9LLFvvaq5kT4g3UKCxJwcyXUYh8zpzGfAdMfCpQuiA4ny41Eg9iq885uYkJT2N5w1N6gUQCqnfbv",
  "key2": "4EGh1hdMpyYQXx1RgqtZ6y5aHeNchM9LciAAwqxuHYBoibiNUcFz9yQhF8QJsxKunmfxbJYVT7TVdk4ZptEKdUt6",
  "key3": "avtSq3YSFurYc87fm3VJbpGMaRijKU5khsjNaxMWCqJQ4wKYhMgC8GZptmkb3zVMXZjePwjcwHsuyvUjykNcrDQ",
  "key4": "3PcsxcduZKMCU6MX3b3VYKe4h9ozjBpVuUdxVFvexphnzGW7h2UHo2MqRmvPVMmvTMGRWN9Sy1j2ST5YrvVm65w3",
  "key5": "3z24dD7onfM7FHHdW4wcjyj29PbednR6M9Eqw9aiMbWctLVat2csRJouYCvK32oxVsWejcFktpRwtJ1nauD2DeRL",
  "key6": "2mb74seKrpikAS2wzg5TzXrZQseVZiya2ou1PT6D8CGaoqCNDuxajevJ7wxy6919jTwsq1n8CfEd8vaVqcTonKCU",
  "key7": "2SDLSwL6ZHuVmUQoHJeMvV2EYbZn3LM1TASjc6h55dT9ExoA87mvkqNX1MZ6MsTL1WknNyKZHsKYELGLk4yaM7tS",
  "key8": "4pAgmCmMAz9dqCNjRR7zFhqvHvYCdxXVXaMEoMgAE1kT6zvX8iZ2S1S8AJiopapgkvhBYU95uVLaFCiAMPfwBD4Q",
  "key9": "Xq8iVVrvBpTt7YevSLQW9Pxq4Nw6uYDknAaD4p9Caihyqci4Wpdp61CDVvXHyB29iFNA3UthsSmnmqwzrn6qMgj",
  "key10": "36KvRcGrhZsvyQnv1c38NhFrhAkqE6HcpP93gvkCtDrqKoedkvikoofajmMinKcwj3tgBT7Ffyaxoaq3pnHChwvJ",
  "key11": "51orAkQKxjQj15b9KSmw1hwZkCDkKsPaeg97kkYcqHotZgAeiMRWq617BDD9nffr1ahuHYK4j7Xh6KWXhAvTcnBw",
  "key12": "4AosC5kvzTm5Cyip9SgpwfpBn6kyUBKNnXcABNMKrgcE5D4qiebejKypqkxfysuTzmXAyWyoYxNNZG6R6A9GPyaH",
  "key13": "4fck5sHXRRktTrTSbPzzf3CHoBtieX38VhvHuJk2hFnwMzoLAs3zeRvVbmJefcFaFWeHR1TvG6zpaxHK9poQnzN2",
  "key14": "3kzZQixuwm9nreUQDCvrtPvf8j6sxoCcWkYbR4jHbSmGqJn2voMQFhz8ozjwDuBUeKNU4S1PgWy55U6Cv569hXTf",
  "key15": "57XY4xzXyzEYQnQeAPPWQN7USB9STTaUzSP78SV8nRD5eVoJdMU87qQ4LHSVHZioQWedQXt7UkV9aZ2fHK5pKsVC",
  "key16": "5PAGaF6aHK4m74e9ysQtFhAaJGUoZ2WaPYBsVEpGeQJ5qAneHLJKeiPxb3aMpsh6UW5gvRAo6GjAbh1Lz3Fbyx9k",
  "key17": "yTY4b7ae8YxVodSVhtNWPg4fUJtSZWF53MbTYsDWFhbT9DsAWsn56hgDvBRPSUW3fNoQkZpgidCxysVNbZJen4T",
  "key18": "4FsZGTRwt4YowkN1mtjLe2ohXmoiykS259v3ph9FL48CvHBDAw4TjbK6ieGBsNFdag7pBjrVi3Eok9E3DKpQsoq",
  "key19": "2nhdNqR9uVbtQRHy2X7oWDEHgyFRabc48wGBmrqRDKTLWddSGyeN61WruBRygsHMWHNSi2b69pVYng4tPM5Wrrm8",
  "key20": "37mczbnHMRRCrmRWQmXwVgLYrA4Z761JbDMeP7qQHsgxpJjU3svo5Y6A9F1J1whMBNZxdsgY3RdvMF1JYamG1itM",
  "key21": "3EtFDFvEcCzQCFo4SVfBGsGSfNLJuwWo1P8i29Nvg9JV7CXiwsQV3yD2wwVgpA78Bdfb2wUbfhktYkZv39m7iTXr",
  "key22": "4dKaLvXTp81ZS7fYBV1fYaRx8jzNBrkpCLFPjtHzN3Xq2v3Q4aTffH4X48obGV18VudKMa8uXmFWyqBB27GDqdrN",
  "key23": "34UVEi87CfXdgdGiD6xk9473KWoPvvCumNWBKsBeAE9t13zwmCTaf3UqQWEGsT8gpheSKPsq6P3kUbYPBtXj1tHe",
  "key24": "48f12akaEWkWnJoTbS3d2HBCkgU5jBLDGjDWpLN3faAXAUk7VjAtEHAdJtjBNCsuXg6BzHsDvagQNV6c9BYiWQz7",
  "key25": "41r7nCENnnhTbSSedtVeXxbMA6xXmGE9CtfRNuMJb6BQCyU7x19opgozCgjSH5QYzf3DakXUrKqUptZTykbf9Rca",
  "key26": "4u1X5cLgirdVo7zeTXSS5fkH6gaR9nZamNqbrsU921CsbbuUk56sbaLvVW9L5mSXrEdokHGwdQ1XKNHWQ2xeYYmB",
  "key27": "4f8fuchboewB9rq1osdmnQuqP6VTPkSCGbdmno7u1vYpaUTaWDVDZxY5wGpUTMAeTrYRksPHpdTBt1nvgRBEPTqP",
  "key28": "3HkAZnbG3kECN1AJ43NSA6y9X9RBBkSPa5nQ6WSbtNaQXhMJE967rRPncNJ3AxtJQFqzovrVBByywwjGFHTqqe7i",
  "key29": "3HcY5RhW88LueD2Ze9yJz677a3dCu4boXVDGvctHXYrK7pJ8qRpDh3G1CyXJbPnFvFCUj9Zb5MsuAAR2rYLcnm4m",
  "key30": "3rG6uvMKvBagN3UoBL9oYtN9QEneHvfjjsRoxLjLxgF5kn9wyiQvcu8QCMYMebVwZx8nC7PUvTscueopGr8GSdSE",
  "key31": "39ZCewDBVKXQwPFE9jxwr2DMm3tGNob1kKiYjKDtP4SYNi1hanG2RTMiNcmoRqYgzAzW1jBrPCLdkiftCRu29zZF",
  "key32": "G5gmP95YQg5EWiXXKkiXVSUEnqCiojfJTFzwoGLCRK4W8tr2qtTDHNzHsuGr74vWXNnnnh7HXugd9vd1tGCrMZn",
  "key33": "38D6nyyqxuq9tNW3CyMo6RUChRjATyqdWdZX5DzdfVVQAbFy5QLqnjyWVqgHSQhQLiP8Bx8NBUeBgbJ41FnHwAL9",
  "key34": "CCv6tVHiqYLSgq78vmthiu4ZJ96zUidxD2755CRG6xqi88iCLmQ9LmocGuetp4u3YvUv9r1CMP3Q3MSJCZiVKdc",
  "key35": "3VK517jT4o4RJqHBtNgoS4sSfp3rg553fWQJdwJDv87tskRmidxDin1YyTagxE2z8jiVA59VWDVPTgWYWgKQZxto",
  "key36": "3eRPGHpwS2GKvFpT9kZoAzbDWvpPghmm9Qm7shWaphMxdpN8bipZz1ijMGRkWj5aB7DB2VarY1kMhae351BERZD9"
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
