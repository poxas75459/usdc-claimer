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
    "2SxzchxR9VgFcqCxPpNadVf44rkf96wNPKKv429aHoDBPyZM8Fb5S2Q1H1zahCCfPoJwnkEBZ7G8CAeP75VkibG1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2S7p6KUNnnpEFNy218tVaDgRBbSuKoMfXNNood4TFjnn3JeDeYkkqtwHxjtyFYiX1FkVFFKwiDNh6sqmRL5UufC3",
  "key1": "4fHLT6uY3R9VUT7Zo3koYAd44dfSXqZgcMnoDmQcom63e5pk63JtfoneCSVt3qjvT8vad7ncWvMHnaZN3fnVpUXT",
  "key2": "2Vv6fBqN7bsRAvr7oNCX5PbP1V1AepAEFBjJrqF7jcx8nC6yG2HymCyVrCnonZ6REsWCujSDcTxNMr6XpAFnz5TR",
  "key3": "jsfdQ6yU2hgLcGv1eE6pfcqzD6tsUZSxved6n3d7S1AwFZt25s7thN9bpvBaRAEUrS3ob96LDFibp4ENq2p3LcC",
  "key4": "qxaWiwgvpWSGkMiSSWwrNJt2q5EohWn1RXDTtYNj5QRRGuBazT2F9LeLUhhPjvvuXnWAbmGs3dQrpi2d5p5HxwD",
  "key5": "4P8re4LN3z1HQfeAEZ7GMHgt29abQJpYZe73dFKRGTxaS2dz7oWxBB9QAdANoH43C7iHXRAGQmUHwsDdegF1SAAM",
  "key6": "4cawfPEX26XoZ7za8KKcL1tPfduU2KQptjiTPQ2DdtoHj32qhVFRQFL5w3nDvXovPzZkXjHqoDPcW9jDfYjYRNoi",
  "key7": "51wt4EMtsuzfXQQVspZxUtH9nRogGTRum2EGDj5qEUBshyyH2ucQ3SSctzaFtBww6c1eVisNgAED6gC31y6MdX4R",
  "key8": "5t3JSktQJH2BXTDbQSonf4ktmZfNbdz8rGs37JzgthTWhZ5TgyGBnyv9K13wt2AmYSUy9PeY13C8qcCvNk8nktwB",
  "key9": "2pnxCAArKCuDprPUddGXuRk44Hna6vNABmG6GEMMhZBT2DqwhfxoZqAMbPcY9jkWwQ38bxNCDq5aBLezNsLZzpZS",
  "key10": "59Z7jikWra7LQiAoVgc7UVC2vsnypKQL6F9CupNThXWz38cyYckB6xF9kTaNaacSfXsayrz98VckzpdwSTwVj5LU",
  "key11": "5JMdwRtz2gJbTSTEQaL9tLLGjkDQR55EpeJVtySTQ4eDcfgmuEwnBmPcZGLLsvjtJ9tUvPo9nWsJ7zoswn3MLJGN",
  "key12": "rcS6pGNqmLqarVy655cnZdYUUpsBafs3Pxr2HGuofdpfzBRvjHMZVucrL6qNSnUyEFcBdZdU68uNdBaCmdqZ9k4",
  "key13": "21tmpPbHKLaikvvhuP5FutHrskRtjka9ZM9ti85vzZ8CBu91VJqgoHwrKpEQGm83spBDtNGJV3X6U64hDhW2cSuW",
  "key14": "4xwE1ib9jJd6pboqAvzTasuzJzkZZuEEZAaz2aAvLfdQ4FnWfvZAsiKokE9EerxvSXAJ2KYQKHwMGdWstUxtAJqQ",
  "key15": "ehKUZRgedKf66Uiwp2NS1KozhXvMibso8a6rAaGH84qrwUCtzvDE5teDwzmNAfZEfpaE7VVst4AhhoXHhqYFioK",
  "key16": "2qnS1EMZiKie19GcoChMGxu3Tecp4DmxRPkX9Uo4djjWGRVy4DfZvnYMUPWPd5p8qboL2V51VGDsnVuU85pQMirY",
  "key17": "5rsxSemLePo8rHhMvrUNCSAS3vgc6E19GZ7xqMUVD2zJxMHSSvXEsxuGtZ3S6xPuqYcEBC9i9aZRcH4fz1CvbV2h",
  "key18": "5Sz1Re9Y9NbV6u8Bg9E5WKi59mQwqKjXPjXx7mEht3B5A7vwG2ns1SW9R9EGuZhNp9yJ2QyE5ZGhMU9WzFoSZMKj",
  "key19": "4ADAhiLcHNHvWzX3KnEEccn16h7DcPjuUhYEeNYuKTyyewztDCzuThFCD3eAP8CvdYXwnJD7h6oRxxqjG53kLtG6",
  "key20": "29V6KzatrDVmXRsZFgRezhztmLHUtKBgm3ycMVN5xwd17DdiTRkw34jcMoCfwbak9JwLFTu3YooRzWhFEuHMDTLb",
  "key21": "2nFaGwa5Q1EFcjBMjJyFFKEsn5JFR7EuHET669a765XBYxmyGYCBnAH3xr9VnXxr6mJ59zMQAbGXGXxjSJH6BCde",
  "key22": "1LxmQNu2aP1fETeW4X9XLfNx8XkYdvWNnLdMRcNn4Ri6BphW63AvzoZRLCDxPU7m396cZAW3Uz8mPVvtgpHFWfx",
  "key23": "2Gf3KU3JjfAZ1Xxahpyg9jPenSrVZdkSyeCKZLC1QQnm1YYWbthM93bN2w5qPF7v4H3N31dtPvMR8ubE5M3GsKue",
  "key24": "FTj4x5mbTW9Ham5hDL5J2zdvoA8uP7JjL3YocT56Yz14XFSm2FJJTyP74iUqRWTCUYa7tEptwwSiADzARS8Wpob",
  "key25": "4c1rX1PguHYAVKL87cashsR8dekkKJEvPhX5dcReiHsULQwnwrngH97WPaYEQ6ky7ScNuKcYLvLqWoSavwmhnu2z",
  "key26": "3j2VNmcvx4bcia9EhSQWdYbcsHtwQpg4XqgU4cJTwjcMZH1WC78s7qKGU56FkegPviz8mFpZFFAkYugR7i6cKAwH",
  "key27": "2GF4d9mXFmvv1yLe3mqn1rPnkCmjUqnHDQ8LYkDqrwcHXcyPFotU4FbWQqoiUNUyw2eCbJWEb4qvhBnPZG2dggrS",
  "key28": "2F72WWoMGU3egqTkEuVTYX5AxhMdPt8ZtcNMdxzmDyq3PL36CxgFToFfmQp15qmxk9wD889v6u9Kct8Ag2H5b5AA",
  "key29": "3K8sDcEjVJW4eLeKVrVfWyWqf2TZoAVgKEKV5vriW6igsTU6BgHBtw1k5GKhGCehnzr9VZFqdo2UNYQBpiPRZ2KE",
  "key30": "63W3eeiELrbcHE31xfPatb7mhNuQBjChCUkUCpHKxvREdT6LVRYTDzdtYhXgipyiEh3hk3kyo4qVvAtdbNApN1GU",
  "key31": "23pZYa3k3aWKdXJaDUBQqDzpfWdu5eJh98LPRv4228Ff6wRzNFkvsKt859oACMMYMviomD9HfKorZDK7qvBxmM92",
  "key32": "4b8VCUxpD26TNBqjvzXL7t1g4Gq29T5W66oZBuz8wYqpFmD9rph9UaBpPBUBvkuJfxMHyPsSY6XsZ64yuUCdjGkE",
  "key33": "29SFMmaQu1nAtPED95na5TS8XUtRJe434yN26m5vvrmibjSj4xYnH5uiSaAZs71ngzzsVLESNjBbWvcv5xx3Au3p",
  "key34": "4DrRy3AGX3eZzQbf47MNHhpnvUMZn3Gu3s5nqJV6nVHHnuhLSp56gCrA7FcBXzcazHWNxbpLamibLnj5RBApWhvB",
  "key35": "46MmHEwXH48Gatkh8QAvpVEdsdY9L176po4LrJinBrmCfixeGXTTNDy4PSBpzae61LNB6y16QaTaxzkZF5KpjLuG",
  "key36": "4apttkdFcyEL3Cry21YToyuSjyjNKJsc9X1Dub5Hd6atPpyoVLdFAuqHQZvALJX6Zn82MNuqXxEPSrJkSYkrFLaL",
  "key37": "4bqA3oZ4jLnUbKgQYeRe9kyHRRMdbjxv1UwuWnnrr1YnxZvRhoy3F7ApHE5PGBj7338SXCS6ZsGHGm9aEFsTzMSn",
  "key38": "26ZJwHYk7Ws39wheDC6nqQf4gJ6CUqzy1eHJbzcMLMyK8yXipDHzAyT2x6JFmogeVGZaCDd2UvmxK82kK5vjNJrQ"
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
