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
    "XXwTKJzKrRUXwy2pVbrXXfQvwtQA8FJ61ovTwE71HsbvpVBdvaZ11NoKcoL6dgQhCh7JnHofZf9nfEWvDZJ3tZ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Esmcfzm9ahrX2HFam6qnGJrkdHcCV7c8KXnkPQrYxxjkQs5D826LH7foQNJhC2vpAVLkwDDZ4oKXa72F6y8ryNP",
  "key1": "YaVpmE5t5FLhgeD4Q1pr37YCCtuH65KxA294LkPSaqWT2k9fyPjQEdkHPUfv6eeXPCmtPi6rhUtvHizCkCQALpj",
  "key2": "66rBQMHZnNpU4dCntatX4ptK1afDu3YnEDAv4E5jADQmJBFr3E2L4y9eNbHezo3mwXoZRfN8KhuF4ziWp5nbV1gz",
  "key3": "3SyPtkxSJNPS1edh79B8BUFCBfcFvEhENhzq5MAN3zuRpNon28Fgs2k8AmdsrMEem2aRzUrSRtpR6zxQjU1zrJyX",
  "key4": "63N4sWA3ZMM5hMRwpRhCdC1NwG5TPFrRfBgDWvQdi1ESowjZ5XwAYV79AhrcuNhQ4Jgna3qk1EzqE7CnGXUKG93q",
  "key5": "ckjugRToJ4bh1fcxMrw29u9hEXbBD5oRp2WMjJbXEvhHNApAETR97vYtCGjA8LQu8hMDKdVfRVUpKjHh2pSGYdb",
  "key6": "5C8VDxfcD7C199awCNCES46qWkAHQJXXjZaDbtUr6hM321LkudN1E5GSdYdznKVVbBXHSxFUHhwn9E5WukKoGGnr",
  "key7": "3vem4AcJuHBmRRnFPgtFGzWXx6ze75qfRCvcnazdsauaSNkUcbZCRmrFpVTzg9NkTQCtwGR76eoVeo5ze4s3xyuv",
  "key8": "2GD3C1RHyEoSPWgvTW2Ji2JzaMVB12ihZxtRuFvEDrG1bApoNyVoRMZzyqqXzBwDNwfot4msxQwsFLPpN77c6kNC",
  "key9": "4Zb9tH7wECbbCGicreK6qbCPeH6Tjvr7gvwbjpogDZhq5PHXM1ybqxCt8wGxTpAnKZBMFbNmTqCBbHyrPt8SWreC",
  "key10": "3vzSS2vJXxkSDTaZTB9USaed8HDrrHZCeuec47iagG1xeNWH9bVUZLLVTc7SEgLpfTaWxYL7FXL35YfLhcWFXsUk",
  "key11": "5YGpXZuXYkYgSb7Bk2k7hrMbQCgveZUsuTEcJKJqknP5jrgCLechH8fDM6t4zGd2Ly8Z6RvSmyddhVAkjCrt9pta",
  "key12": "2v47PKm3zaEbPLRpLfcnoFNR6pTUPfGQtcHX1vCMCAPBSEdgTiDHc9DVSPihuWmJ7Z4xFUsJtVRKgchRjYudGozx",
  "key13": "sk6v8jmb3KVbL65mHMXSVgVeqd3PWXmdiTe5CsiEqpEAsFzSsJy935yXHT4MNYL3bfhWML24Ro9LDuRQtpBt8p9",
  "key14": "4ADLtf2GgH3zMm4yqjnyJoDGdqPWntLZPkaLcpjiKUgdj136RXZbZVUheE69oP6A1sMFXutQvbhBBFWGxb6Ho9KU",
  "key15": "MQ6mDxJ4zApZvprrXHU9eggErcewXXMZwiCEh1eFo2mmDCkfHVp9ZxLSjYW1jwehZaXhfR6wpwoktfYjFCdsnqb",
  "key16": "4FZZL4SUY4wgiJKRsth46GSTWYXnJwuNeZ9MkSnG8FqWaEQQyiiZwQiUg4hz7w2gW12Fse9VWW5UiScMSkQuDcjF",
  "key17": "37EaEh6o4pnvoBSa3UNYWXMFQ7ywiEKVCKqEaYtEUvXQa1TdQLcqCU6va6fQQwfn1fxkfKrZvBtPMqHqdngxchxj",
  "key18": "5dpctTjH5L9jLCyXY588bQHkpk4yS8PQC6GTndsYpoteTbEVG6Kimr8TeV7j86Xskg6B5bYMGMjZZ5GCYA8BLZYJ",
  "key19": "vvTX6Hop97XdQZiyZuFfSP1EjjUWQQzNj5xDTEAB6WbngFcShEkvPw9UiGFi7dewzfrnyAdgscpsicoqdX2J8HZ",
  "key20": "43VqXFBn3nApXJ8mjb8P1z4v4qxuF6fo7EEcnwX4LrXRhEdYNTrtakgowEbmdKkLeikTwvpZuKpVd5CjkiZ2h5Yp",
  "key21": "bwsKL5eJyctnWvWtGXwL8ecMiofLMjevhRNaydnHEwY4PLdHHuXoNSvVAVrHbzF9WQ1z2wV29xt677UL2QaBduf",
  "key22": "35DHnuxu5Kdxv6ap6CFdmXz4hpKYssufkU243XWSRzJFYa7QTs8rmQehmoDLyHuXQutVpetT83aCPVxsPVA7mjgK",
  "key23": "4PA9cmi8Pu3Y8THUEUwRhLWufMLWygLUo4g8jWndShB3Cy8PfuL6NPjPBpnMqHUxvS57wBVnG3neLLm8JuahRGnw",
  "key24": "3mDvsXhUZnPBGm4bgXEzuULr9P4e8CDjxw4LtGi74wLjurv8z47kPN6cFG3ac7Kj5T3MUozGQBgQDP7e5Z8Zsjeu",
  "key25": "2dJc3fiRUMjEekdneDyefAbH21r3JrGYtvykFcQd5i6UV5TWh3mNpCZYeQ7rXKRYXvkprcbmfR3VMfJebFcev2Be",
  "key26": "2TNbWmEiF5rdmbTN5JYCCJK51vVoAbBfV7YhW86vFpzTT3NC84mj3LLfPjA1ypHNNbU6H5guFHwfVXMvXm9tm6qk",
  "key27": "3RDuBsa8mcfgESog2t6S4L4VxtuYM7cJeoLZDZddisRiooBHC6r4aBJdpr75m1RR1ZmK5x838EfqT9jQi3J1vpzG",
  "key28": "64EJwLKwKueouwet2Jo1DM2ec7CcRh257BiWvwRHiLjoLGuDCwLtEZP5gHoJ6VCVJCHwXHwXy2dA2EhXRqxek2Ch",
  "key29": "ovhgp7bnJvZYPdVg2tTvZCNq5aLT2QR6qrqygUZvmb9RZKc9fnWf67gZrZW4FVZALJ9k2fQQT2ruDVBT8RzMtgy",
  "key30": "25vAynzqbmKNs7K4upj12LviFvYKC44g5ii1mH4cGhkxo1GkyYEdWy2kdMnX7PNfBXyzGUehtiuJEJCv3cUb6Jmw",
  "key31": "3AChRTi9tvs1QVazmU385bMAkmfNuyHzD3drvPiBtTmyewCNP4KTyDGC57KH6yfNFrTeuonjVg4Zjma7FV49yp9h",
  "key32": "5sFdQXrJJCo2AxWS6ZH3CijpxDZ9DfyCQtCwu9kqxWkaYm8U3q82ekU6HF3MWh1tASNb4psuqxaYtpkVdPcGj1ky",
  "key33": "4eAs9D191Zkjsdc1HRBxrUPZxd9vDyJZpeh5QL8K4aQZkume5hKfsMRktgHmFSxkJ71FcF6X3iYetMuGLffJsdT7",
  "key34": "575jb2BaGBWT8BajafBKZm19ivQ8WM4q2D5TdStfHCk35Rc8zpd2cJbjBa4zRRrBJE7UMM9NvBGEPgqice12P3sr"
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
