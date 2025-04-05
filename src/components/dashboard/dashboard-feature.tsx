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
    "5tKxXHTUbCG1hPhmTRXTywrM26amz2t9eAdiXzK7qV2MDQ9iGwu9NktdXuhzktTANUBYyDC75kJppMf9hFtj94dC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e1Hc43ee61YmEcKk63S9ApPcBefxMpvMEr6ueUrSgQ2qJBRom2gKkfX4cSM5YcswbP6N2uE1bAKXbH8unng7gcS",
  "key1": "5yCNqNBpXWymoJqpPVjEpTvn9KFBUiaUbHwmGxoqdbrmsBsoKotKRrjXfjyoWkpJ6cX6iuAf63tCLwxDPg8Nvp3Z",
  "key2": "3aGxiH9Qye6MErSX2xjyBLF5cZNHJpou38oPwrNyUdVHLmsmJx7stocBNN3gpzCJ3LAo4t7xKAGrcbWaNqwMk5ue",
  "key3": "2jCRGHE8Q2jWZ5ap9aBQFhA8cBgATJPBaN4RCQw2vSvicbVYL4ECq8TauwqdDgfPQ8HRnoZZHnvfFQrgNVMmVZpw",
  "key4": "4jfJAnr44k1WMP2sWDGubiEd8ajmad9pcQwcP3DVZazV8vDzMki1n3n1L6QYmEfC7XAzveX2PENTLrj5euz2ZpsA",
  "key5": "4hzedZ9aYuQ3pX9GScPkCfrkQhs1frWfzemF8mcL4n5phsNcXnrxPJXxTg4w7ZKxZ6VbcR2cwUZWEayHokVXLTBS",
  "key6": "5GAsMeemDD6todXy9eSoEsr7UwVgwpj34kEd5oZx2HbXJxPsUpJpjVH8uQuoBpFH6HfPvGszE9GcqbruHjPjXBNu",
  "key7": "2byC5XA7BBhmXRo6WrWJU4kMREaQQQNrLrEVkcSxdaoCHCP5qkK98UKxX6yTCPXpdADZGyXNMLvgW8A1qpxB1bZk",
  "key8": "RRHzFx66gjB6t8JFwiMgux7zooJZTaUrGgW3ozvRCaqJVt7PzSVF7YcSVCzgxF2EMUxQ1kKS786pj8UmLfrXkjk",
  "key9": "43sEvC9Frkmo9cYih6inM4jBNXCzSj5QQGFPupKHDcw2Wdiyyp2k1ePywBED4LzyygdLatKBgZicMyGTsxJVrAgw",
  "key10": "4Qw8XYEoRa4heaKhjEBGSQracRXfhLWN61eJy3bhM1xTk2TWKYhHypKh9L8newTW7j5YhEYyuSJuE9ohqZNgHzfS",
  "key11": "y4cp28hbeduKRBR5iKBgs73aW5C6m1JZZRifgqft94qu3CYf1Z9WCX2ZuzYiCQ3pF8FRJEb36L7G4kVDUX1UC8t",
  "key12": "49HkVt4R4BWknd5wt1DwPgyWAZZ6eGycJBrba1UazRHJcY59dFPRPtRBz6vKm9cYsL4ufWKDLyGJVFXXZZo5nD2S",
  "key13": "5yr1tpGDCfVKDPBeZ7GzDsaqHdjJC9xAiCcFZANUKG5AsAyVXyznQanFrubFRFcCX5EKbqZGXiUWMDdS3oDTGRnf",
  "key14": "xXjZopRnCxKJ6XkBuEx494Rc2YxhJK9tnsjxLJ6UMq38oNZazwV16z2SoRj2YtnLLjHbXp4CbNxj7FLoZS8z8X6",
  "key15": "2BvsBtpvdV9ekNZceSj3a1c8HNcjGprcuydgDLbQvu5Zy4NXgDHNFtGEaqGmbpD2H9ACXmC6UmnrPc3GSnQUupMG",
  "key16": "2gG8ZcUyhZ6zksdcU9RKAXmc68TZfbMxQBNx2wLKZ3bEsixRawZKxVZKkiFQAhEfM8LeKGbZyfz5RY1u1k87rBz1",
  "key17": "gyJrTznrh8hT6YahEagpysUEUTk54cxkd7DS2hCm5BkMg5WJ8TCd1MufJmx1JLZqtCXSmADDiBdsHgvinZJCH1Q",
  "key18": "5iXPEonbSm7r31JtgniQjBV7whD2AbhuvVYHtE3WsoP6iiScyCDRfQSPAiEqCBQSehF9YgVMbtRXgCodUCUByoUZ",
  "key19": "2wugq7SgmoFpbzyWyWxEBt7c8WxQdisQYEZxMtDueQci529oZp8tBm1iLCyDUC7y9b9dxMhqSKJuZBxRawEGPgrd",
  "key20": "51ve7qnwKL7DeGAiCebCjq2MJLtZEqXHb6UiWaBiTs6fKCE3NHB4LxT6w9nGsCNQfjNCzwFrpar9N4R9zF5d5dgv",
  "key21": "2mHxSCPko1wfwFtVaRpRx5D7KtGacKcADZpYZW5Dt2xwXKnvUuo9BBGVhRVJantvBwjpapXAJFVVJn49s7hRofzZ",
  "key22": "3CiQ2EF2Ma1qfc57PrusYXbb3bPtPqFrKwR5raByyYiAzrKwkSASo5jXvDEpBF8mHJ11fggs3emAiA1vchaiddCY",
  "key23": "4uJeFxqFBD8DAM22gB4s2vhRANbu9JuWfp7eX5KPvXT4dTpaEYqHj5bjCG3kfYzt8e1GvuWN3MbsbwtoGehdmtpA",
  "key24": "wXoPiYGixEojuB3YWd7SxsYJtxdHPQip1oo9Edx95MX4rxznMCxLD7BaJ9kmbARfu7Tshm4W1MLuiiX15qJQQfZ",
  "key25": "4t1ns3d31x51mts9aVbYPr2RRg5mMzoCpzJTxoh1Cx3LJC6XdpJkdP8FAeVLwY3gnExND5wG4RRKV3K72d2rczjH",
  "key26": "igJAFX85bhKv4TnqWxJ1x4AUUDspbtJ9RRbAXQFctevFjoRCPwGMU5pnuA2MRcpti6G2rr5fS7ESAepVdasst9i",
  "key27": "TMSP4EbeV1HHexhzPacDNkkmDj6XmLjkYe87Edk4EAtcaVB8QAga3JAiWQJXqDGKUcRJeDj3DdEamxXu9kQdJrT",
  "key28": "2WDRFb56ZX1WHTBCS9DGFeGh3bLeWxniBXK3fWRsp73WHNNsDed3q2gpPmnVNruGKqF3xJip6ZK6qyoUcNtSHbPn",
  "key29": "44ugMETDZQFT5BzZFA11cgrVjuk3yPV8DJdhdCDAupDtjozGp9mWgjp4zNkMbHrv46nNDN6AGogRG4pWcdXxMyck",
  "key30": "4wMRtKzRcBZk89i2iegEf6AERuyqwC9a8SPRRohHQf1VseVosfVJj7PQgJxmnhGKcs6T77nXV8LYcjexqK3wu2mh",
  "key31": "hUQegUtVKR9rVESJXuGwqndnaJgES9HJf6Ltyzc6oR3znSN35zEuLdie2xig3TDqg8uKq7op6sUaBNQD6tiZjqz",
  "key32": "2bSLANUVU9Kwb2XHjPeBcgM3pt8JxGsXbHBU4A1GGXs37CCEAcZaeKfTRHJgdsSYnK57sQPEsQsja914qhY9FrUw",
  "key33": "3J8hqQ4ExLD39zvhDJkx1JAsuqX3FXNP1Sjq4pAw1n5CVPcHwajbwwpfs23QshCLjQZB3UyWuFAKNeqv7iycq1bQ",
  "key34": "4QVD81cAZGn8FP2BhADvbFYJVCQrUFPEEhtbgxtiWEjFzcHYe2NLj7fpzgQPyXsTJ9yQFb3GpxLWcFYNwxCL3Ghc",
  "key35": "EMWAhw4D9TmMV8p3vLtqf8oCbdCv4W1CGssS4kBJv5SuriEzjza9UFgf6Tr9Gj9rGu9YikucKYGCAbp4rDfRt5H",
  "key36": "HJA2JyHwJUVLsw4pbddhJmf9EasSAh9NP5GqKKhLhkhREmikTHWq4BfzNvvSsQAeJkr7BrpRM6yfd8qDx9uvhyD",
  "key37": "46gVRpa56G3RX9U5gK1bSREQVyayLLrQzRhJUS2LJfmznzAivfdU5gr83HTerEWpLsBinUPqYfo3ed89AQ8H9j7c",
  "key38": "YgUpbADYaVExfyJTUbZ7JP8RTrJHTmDvkCuo3F7PfYcAnmRVCx6gg3w1zrJum975QBxDZJpLtkKi5dwjXRgJTfo"
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
