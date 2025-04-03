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
    "3eFnaUUcokhT7WC2nhe4txMWtVtTrPBZ1WbRqRmdz6Ntg7CVZsaZpYTkhGVFhR1zK9fij7kBGhPDF32Gz3t2yd3A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K71qHbz82TZaT2o8FX9nry3qYTRP6DBefWMsxAyhtUkUd8bYj31jVssjSv7nhRtSWjenqLpcGKMkHm5J6eQP9uc",
  "key1": "4QUbPnBaR1oNhaN96YEZxFk9qoX9fpDDFU1ua61oL4qN3AW14r1tTmsWsfZWe6xyDsnUstMQDfRTk9tKZt2mmY9J",
  "key2": "ygTAJ8Kb9XDwTVbrbE1kBasLY55TFf2gsPEvR7cSPA2Kt1ciZPxNF6hedJFdhm7CzSdk8gKt6cNW5phMNVYvb99",
  "key3": "ceg41uxzrLknWkijGzAsGYum4ws2jL2uotLEw6rRFY9tt2ceGh1Lii9zPfQpdbtiVRKbHuPrBHvL1QqL5UdnHMv",
  "key4": "2GUmahNyr2xPSZQ4JKPS3htBps8NN1gdd262xTRLAy9B2BdocF4BiAHqph2eC6hMwK823ZgSBjnQipFC1YG9Qpwg",
  "key5": "5RzdSVd6ZPcBQkrqfuGKmKrUTKjD7qiggoCL8M3Ywqp2r7SnZVsr4DfDfcAvz2vDPhXkzWWoQJE7TXiXQqqUBnWK",
  "key6": "2LZtCYLnoFFtU6eJsA2RPh5vGMRWRgx9ciYhuwZfJi65vvcePRy311tzxTrsCpjgmiuPYL7DRbaBvBNZUDrfDksV",
  "key7": "64ayvqeNaJgd8WGwjR9m68WVZkFCW64hQ2mrHMNYNyqFEx2vjXVy83Scco67L3xnsZCRqKH2M54kdUEUBadra7jQ",
  "key8": "65fDeuRBDgChiFmxpfh9ikfzReU6xqWRdy6dCeHr2ikqs87BE4R6FPBbyA6Yjms7Mc6sWgGBrP5NTBitcv8JU7Q8",
  "key9": "Xx6ZEsUBoWZ9pYzVojzSMTW9VxTsWmsEKPiwq8NrasvXatipYFRqARooT6ZAVGifqmwo58wvvh2JTK4bJpp9zYw",
  "key10": "5TCLowp3kM5pSETwtJJzW4A9v1qVggx9K7Stf2fTa6tqn7c71h8AuFsPpdTHn8h4v6BaxJps9DzUDecWJ3VMNiUG",
  "key11": "4pb1URgVLw73kDNjMvELBPiYG5rJCZWx6cWZaYVSUVVLiQMdVGK1Hs6cxGpd9P8p2rPtBM6LScbTwhfbG9J9dctM",
  "key12": "2xSU9djr549iD5c9rvb9KtPSMYoGjZDq2aBVWFsEoMTnPbDQXPcntbYEmh3wX66RNoXPqsEJDNBDUfMgkUYhf1ke",
  "key13": "Wd8nDzoEw2Ub6xgS6cSreSzp2BoqQCeBBMM2Ypz9Jhxw8gNc1cqyKBEvh6dwxenSfa6ri9KYUUHrf2yQvB3KkYS",
  "key14": "27oxLVW91T6F5PseUfEJkpBRC4oW47qAG2RbZMPTnWVcXXEMuNuEvUitxZd8B4Cva5K6B1xAt5YGQH2Pi6wuTMCM",
  "key15": "MG4Kkygs528ZdwKDbhiDyRf2QFXaqd2qpfCmdU75gJT8AMgQMF5jgvKijsUU2CEwzvCPgMTUzbynakd5WJDuKFy",
  "key16": "4vQnxZZVdDQrb4bWcxwLzTt6fr8PBs5HREEjLzmDsbYNx6qHF1YMgEduu1j8AqK3wpSXPEg3VzZEX75FmcXnqvWU",
  "key17": "5rPTQA8XoLK1bSxvNFkifSm8w7uoXX41J3r2CokfMc92dHpxe1buVqH1WKaKWM8JRAcQh3gCjd34Z6XXcctxoZkK",
  "key18": "pH4hPSSsGkyxj7v1etHBCmAFfXTdLXzvk5mrZZCEA6CoASmMm67ar44enbFjs7PwQveacU9fPVC6RsAKQYeVZ4s",
  "key19": "367xecEUZmwRj7eTSwhCKLTxYxFsHrCfhvs4WgY1dmESQrEXaqH3jNHQzJkvDGaRN3AMS3rPFJxvryfAzv1WsxS6",
  "key20": "2JPS2fccvx6SC98DK5YQhPUzW1DBsfEbmuTXgPRfJJDPRW8xaNqpcvfPEj4hxhEUBJGfsjcKC9URkgZKCzKAikju",
  "key21": "5yBmMwYbxLR7rgwZZJ3mxG6Hn2WjKPiVMR5swcipiPG5R56QAwPNk49wj7Ad1o5td6vTKx8A7p8rRotuBm7nfL3m",
  "key22": "2FEohyXf7HzG672LLrvGrYRpADyUHm17JYpKtUB997Cymnwfm44xdjPFX2KVML8mqGsE6yqS7AD4seF8oSJSdfqS",
  "key23": "5DN83hCk18yfefYHtFaHCnHs8z6DfBZhnTgGHpMuAVi8QAbcQ7hJ4SfvWM3XQ9jjveR8vULRAciNqr5eNjY5U6fB",
  "key24": "2dCfECQw2xf5j9EjzvCdcJULSh1TH3B42Rgo4wwYKsWwmJh1akg2uHUj2vfB2nELvB8UXy3EY7tJZrvDJtEUoYHe",
  "key25": "56fiYEtPPdLcHrG9pyC8HFqbgSAQ3AMtywmNQwPFDfz2AfyMCaKLAtwJvMc3ApRthYKbUuwRVZU8itiSjmx2XhEP",
  "key26": "37jBQAQqXRDCJhuB1pb9CZtk5fPMhCke6LracwxfdLHDA22ppNVLxuqmSeAXKuzEbcrwkCCQNrLD7FzgteNsAa7G",
  "key27": "3VEZcnfzuBM1s8ceMZz4RfxYvk1bEAGd86ZE13QZ6uk9SCdNYgQJtqYBcVL55zRZjqkyarPvXc3yd2xXTCaBfhEr",
  "key28": "3fQsSUAF88xjcD5DzShF97icdcD2UYzjtnjebTEiycxydd2bpPTLN9ewoBV1tt4USF5tGXTjbNMCj2DMf6W4GN6N"
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
