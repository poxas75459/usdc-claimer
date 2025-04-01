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
    "FAAGAGirL4MqLGMzcwPo8bkg2k1csyhChJzE2BjaAyTPjBbTTtsrs7HXrScQqUuQXhn3b4P6BsaEUcMiVmxv4RZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yxTqBvowUc7eCN5W5EYoZUSa2D93QSPo2ZUEnhatcqf6RdD7J6QSSrDDXNjUJoEz4x9pdmnxwDxaLeRPzV1Bqk1",
  "key1": "2LcGChLmgpvLFMXK6dV86gbQZwLrTQ9EPvqFxk4H7wv7VpfjsHJRUC7dMAsVvKNodKfyxjGPvth2hT6u3zih9gCG",
  "key2": "41YHjPHnikX74ZqWzEmv1xFPEGmJdaXoeipdw4oUCX1xvx5jGqDrzdTc4aBjf6pcMTXdwb4G879AdMezVZ6b9WSj",
  "key3": "3JL7YcKxTaFiE8bdoxMd865tR9uqZCZFFGAFu9zPXoqGGE3Y3GKSUPAFSu8Gy1Hi4ckaxFjTxXjsrC1q6PD1XD2t",
  "key4": "21yCN3Dmq1oAR2Xtt3Knoz7KFcGQ4arLbpKU6XG5rd7i6XWTCDcSruP2LBCcXabseRmrf9KMaVfB3jcbpyeSDVGc",
  "key5": "pQpCm7xr9ysDvoLEiw9wkbhZStRg8T9GdtQRwRFaVDVzcnGDnMbuX7Y6KLkvf84Pe6p1DqKScWsyCFtcDStyJ6r",
  "key6": "WhK2TzVMRMrrkdxSaCYArEmm68pFt7J662qS833o7Mq1kZQfKPWEfmJyVdJqkR1Jinox2PPysymzgWACeytXhWZ",
  "key7": "4YEiMp1yQLoL39BnLMZVtmxzKrNLNGrnTyG3EGnBagCejerkN4Aqu6UpavPpNATC367bYs6U3UzvqSGhsGNd5YWR",
  "key8": "jwNvzvt4yaJu13BA9Ac3DDet8SZSRrUU1XM2QtpShMw2dPPeUMZhRDou8aB6BPEVSUPw5pwcgx93cfAmrF2Np3q",
  "key9": "3RKiTadixCw8zvPdH5f36oRbHVnmsHReatCMr9ZgL9MRx7JP6TRWZbeego8A2xYJ8gNHMkph8cUKFNwG7biNt8E8",
  "key10": "oS9219Af7mG9uRkmSetsiQPe9KngYyUHHLPwpSZKEPh81S2U7NStrRvsMT2X6EZQr4SNfmAJ2TmvrQqUyE6Yzci",
  "key11": "447qfG2AMxE3s7kM7ftpYHnXnvHZbA17iTuCD7ZndEUakZWj4uPU78u7VqKUi2atTVeZzgvnrRddiBG36iS1FJMA",
  "key12": "3SbcEUVoVQ8iyBzQQyto5bH7JNAV5yV3AhoQUCM6TdpXxM69hJCNo6PKuTwERzft6six4nCAv9DSGgY4VQxYfJoe",
  "key13": "2UXeSJuBXMYrFreLUgEnq14gZcCMLivRhJig9gminxQ8UbV6cf2BHR9SVSY8xL2eFEctpWNLXD5tdz7mXrnTZoFn",
  "key14": "57of3JevyvhFiaHqHWUCaSYmokfqdeHJxAn4AaEyhdPCuskrQJBN91GV7qeuNC5VhuzJTn74krUqZGBjDD1zfFXQ",
  "key15": "5CrhUwWHXRNQ7AtoE4ACLcNR9VZfbkxQ1E1RTwuyenuztVpFr1vH5CeQnkSqK8awcm6jGDRVHyPt8Y3CDSrjkLiw",
  "key16": "rHhZ5roSjZ4W2G3Gs8rniAUy9G5c5ZGmczbhHAbSmqdmYcxSFcnW6ZenytKrCRPiF8KkJHnwJxCkKzepfRkHDhg",
  "key17": "469ck94i4qePewesFAz3qr2D43yDDr9VEdT46f76Bnn9qqaYP6kiQVzqLakgPAnbtqu4rMTN14Pe9c6LFdFisJdX",
  "key18": "3G1FDdGhZACFG8QEsFPLBTGf8fq3TKkFZWK1xo2iiuQYkuwGfri4zMXX3oXeA6oHtJv9ofdtcprtFbEeCkGphRWR",
  "key19": "5WEzHEUhVrf2hKR1vuErQKxpunTBQzFmMUSbiqHC67CdJPxquae5cLyRjxmcd4xdUBBsYaf7Dx3KbE7ucHbNX2PG",
  "key20": "48m2k4ejznDH9kfY1jU9B21LNpG8oUqEMPfULPZb7t3HYrYGVgBid7VenZy1pbW1T3sgKVY4sKU4Mf6cETGedzLf",
  "key21": "5TnCdqgAUv7nKoQ1EapEADDmLs1SGqTasw8n6gvseAX4VhobN4n4jnuHDSphAo7bGXtRJq7nykveYXekuyjVF4tv",
  "key22": "2voKcsg5h61voHm54G9FGgVnR8tQHR1z7C3emmKCfwUe4dDcR3qqRyDHPK3bJFYAfzmLcU9hZvfDPf6pjMrQcNbu",
  "key23": "4mRwK6BwzVLUsD2d1uZwonyS8UnKZDaKAtoHf9DmpaMP2ZkpQJofZ6qERuXfwVifui5YzURPPRSedVeyDWyJKSyk",
  "key24": "2tN5eZ53tvnMtBc8ue8wTJSEY9eueeMmyyUaHAYRa28TUt6LKQgjuK4B7jWEht22u3i3JYqgYwePfxVzkW8rJtTe",
  "key25": "2qGmu9FAZ7dvetd7KW6wba4nvLdw9sHoUjUr99VYHzcFoiPd48S62HV1aehawYunjiACMuXwosKsaRna3kdRvgZd",
  "key26": "5r2YWWUYDuFjeVLDzMAAsxzU82qzMFaJxKKoEC3ZdDWhvZb1eVauV7gv6rTKzbgePr6amSAKwREprLTVoBYASKq3",
  "key27": "4AcZnGAbz9BGcVqXVFpmZ6vqUsgiQG4cksqrPYPkkYagvE4v8uNnxgMRGzMK9TmfFjfjNJkWMK5rmMN4vdeMRKhQ",
  "key28": "61TuLjCFBd2MVjHS9xdEqpsyKFaghJ129Fpwt2BKQv8n8SZkfsB6kvsx8rDHebPnDoHD3gv8EtdwagnA4pWA21Eg",
  "key29": "5KYDPEsqxAzZWkrzY7AM68SSLiWdaKUMhP9iUXQxUEmq7cWJhSqW5P5qVc1gATwePnLpDnmY5HeswTS6Uh1rYX1",
  "key30": "5LTi8DfsFzPGhhibot8bxgqVpssFSwzDfk95Q3CJiwZGuaesLRBZifLxn5VNXpMRaMmVwk7gsFeyxLCNmwZgehhx",
  "key31": "4CiSWDGgRA6zyqceR3MFKeUBD8NTx3TCVdWGYmD4MKYZYAVfYFJtfragxxk1B3JCrFxLJCh4w7ET1ybhA9nBpSh2"
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
