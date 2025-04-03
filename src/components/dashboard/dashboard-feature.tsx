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
    "4hv1rfRs7vKaMXYVs4T3Yt4bdFywm7GesK8ivg2YHsqSBrJrA5VvnVVhnZzgDiGvAmvPF6KRutH1EWjfZHboN6Qs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ufQg4NKobqB7hwNXAf31rZTWsvv2pUMsL6QihrTFHCZGnMhBRfN4bsdhhR3SA3vck1pAvht7vBLDi4EFzys3uF1",
  "key1": "3oAPQRtugZG1BDtbC9X74xJXzvZZxoExx4AcyC5cCjDimwuZK7kozYQWicUDvZDZbA3gEGxDxF7Jb7inihMfA5ca",
  "key2": "nLxP3YgxC3hhaUbptb4X4ywP4M1PjSXT7xbpN4QD7dgTRvPpUAJLdATz94isQRgtEsoEkD38PJPJy2SaYirv5qQ",
  "key3": "3J6irYDHTwC1A9hqyZjFKvZgXo2sYCV53PWJkHzA39jurkUF6ruFg4vup9ikJTAzuLP3RuV1zfCZSSY1v5Hiqwhk",
  "key4": "bcU4tMGVaDQKYBqd1ngS2HVLSs1gTz9NbvhWc3trra7Kswhg1AyWwdhjCtBH2FKHs7UEYqaCzytAQgtBhHzdMx7",
  "key5": "B2E91Ku42YA7nbksXjvAKnB1YjzjrhEEwrBZ3S9c4PXufQogcJyob8qQsoLJBs7pMxFEH53KTri8tS4i64rMMcE",
  "key6": "2rmuaKC2T8zTnjkSRxDiA2Fbv6LBY9RsRPmjWkUNaEZVejNmL5BPWcckTn54iGo66979ZDYVT9jfDBMMDwooUJEd",
  "key7": "4uCRkYFZ1Q1M4evvM9HS8qdjLHBKEsZYu3mzTyuoxZ5yTshtmZNkCZGDtNgmJ9rDFFfFkrjiU2BNBaH6qiE4xr3W",
  "key8": "4PRxxvWaXKyeiqoAvgwCAYkX9iVHTUhBdChs3JyPMvn84CLRbL1PMpAwxqdEnpnEyzTmtANS5mjwMuRdVV3hFyKo",
  "key9": "4tAQknmCC8Pj8yBK8mpKTF6bKdthwKgcRbd4qpXgfA3DGaNeZYmwgN495ok4wuRS1LeqHcbHcTEEuPWX8iL1AFxs",
  "key10": "53feE3bSu1UBxKFHQmSp66bFEy4MxPafQ7W3NEV7ZMa6Xu7iaPqskvAqPNUCGSphbQ7PnEneWTZ2WFryLuvF1GZx",
  "key11": "tnzXNuysWi8HCsZpJyHBKao1UFiiG1X98FaCgE2aUfVgR92QAEGLCVNq6vrFrMyUgJ2QhJmJ2hXVUmoRBJ9LZ31",
  "key12": "4J4DzYbcomCHKTCyKk7ug8bdg26C4CbCGFnJipinjpAbGi5gFb9fsuDzarBdSxC1hu5A4hgMp2ei1maDonmJrEZ1",
  "key13": "2jPu2zzTFMDJ6S2z5B9MWZRGDcXrLc5sGYfNPkmKGijfPH1jS9uwUKdB8CDvK93vQscRS4cndGobFc7y6UdMcBBJ",
  "key14": "2Ecmo4B9hskBt6sQKXfRDikRPG9e9kacnNPuwt2igrVYUkGQoFXUN6no9CNzW7oxEjKkGDi9eLoYRRnt8qV7mjha",
  "key15": "2t42xVeY9ZiWn3XEtdRvTLrg1gxeknT2F1RpRs5nq7DjQg5FHyEsHmiWuybq6HdfuqjvdCMBfbJWJUR6SRqvDVDq",
  "key16": "Q3zcfA4jSkMRBHHxz3KBsJeRoAqpffz6oLmtKyG3rKc3ZjX6h76ggSdpUHvYrs897kBryByBbzRnvVWEnX8Qn9v",
  "key17": "zvLTkb32WmwyMHyb2PZ2MwGbXqvcF8MB449QJLDQr9jnxwee28tgSL7kL6ATaRRPp3xWQVqwBC9ieYXdbtffwXh",
  "key18": "4JmnfLnMqnDq5boKnHSQn58iBqUCu2xhNDt8wKsWCLgq3JCZg8yJ9CrHAGPUcAGojk8Kkqy8TVAomtFUaESSqVDw",
  "key19": "2fS7vRS8WKq8Gg7WhZEjrJFoQTTwwCSFu9eCP2s1vWmNqRJFHhfmXd9Cb8a5FUqT8UC2WPhcx4M69MoHxJ9pJpQS",
  "key20": "55ju5f9YoSreZz1ZMpUZVhhYdSzBTNiQYQyxTGMBbi3HPsJsYCnZJXQ6Qybkkfy3sR7xpPmomVWKK9j9Zg886f6n",
  "key21": "V5m5mKNWK8nVpBJvTVvEyvpHdc4FwP1dYEhrEDggyCL7XBcKJuWcwQQdw5iQ9hXWDkKf1spKUD8ng8mTAih515u",
  "key22": "5zY7Jqemiswn3GeUFrP8FnhTeLBJM66MFjtGShsqkD3LjRUNwqxbjNB1ExMG6rLaUEYJ53yy2GYKxLwTHeNWKezi",
  "key23": "3iWqUGjdj9PZNjzWov8YwqMzWZedxo3PNdWbG54eHMXa2UWryRic4rVcp69FcneQCsFEQnCrafMnJ6t3gpDJ2y9T",
  "key24": "2EA1ypQjEctQ3DSBc5Be3KXKwdP3oNnXvqYwWcftXxU3yL3SkFANT6QXbHFQrF5ovdJ2irXdYPcc2vdVSboeTMQU",
  "key25": "5vZmqi8jzJ68VwaY84FoMqrPh4ahcaZpDfjSqTeoykcjg2po4kz6GLbar4WTDU5N1bJV6JdmykQYmXmqWRomssd8",
  "key26": "2r1Xss3X5W6DdH5EYJ4XJhcMojfR77FjiuV3irCgeuUYSBzWHmxnEkjhZJxW9yt513BZDMMic3cXuHx6vYwjiijK",
  "key27": "3u66wjmUSY4R3TqpT8BdxYFbQfGq8sZnt5zeh8Ark7U1zGtAAkQupGiUnZEzQNmVPyrnJXxdAN2nRfn48aubAxvj"
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
