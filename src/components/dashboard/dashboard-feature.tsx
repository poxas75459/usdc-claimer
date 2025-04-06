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
    "4aki7CkGzAR7RahF2gTdTVbEJLLYZojDNVYSSRiuMx17NH4hCL69jCYhdFKc61AZL5BfnNozcAkFpzt9xQwtUaEQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pS8yYX3tvS2pxFhADCppvPRGUVLSuWYsHLipBBVQntVNapto64yDvWc1XmEb8FEVxTCSNwuweNaTkW2QTC2sdVA",
  "key1": "3qxsjD5eqfL9PmywVYyLGbZ7G3MsAmNfauVEa9geX62JpC99maJPaGYt98PHQ5rWVtUa84Gwe8ErsbvkYVewpmZy",
  "key2": "4Q8yjAW6XNoLRG6Hr5irDTgEVWPErqqtUzQ8vUbFaZxipzMExTNXhY8wLNYe3KU3cDEMvLCZaFs7k9uq4rW83WmJ",
  "key3": "5jcKvcpPZo32BXnQPthSDEv97vA2YZAxXYiTME3DzxDEYVvjSkVXBwWdm8R7pSq85bBtf65eX15DXRfYSzwu1iRH",
  "key4": "FbP7t5B7AfrD8ZRkwykeGqRNg1KLPKeE3SwHD3BF2peeucAepSc9TAPJSJS9ZQjomss8S6nvFftLsD8npLtuhkW",
  "key5": "5PpXD1JzTvzTWmP5mUFZRgg6YDEQLmfSRrC5X9KLhyP69cQsXYvLwmnUvg3HunRpxfG9hhhvLB3QtVjxMFcfNZEq",
  "key6": "2wQvoSDDjLWUjcd4xpM1dHpiV2NCg6Rtx5zH3FQL8hQ271dQn5EWtqCvRiQMJrdHCqjb6vh4s7tt3VExoXTkEK1G",
  "key7": "2y2MZaYrpvFjozG1q8kaVAUWKuVpWgs3JCPJk1PPjiTGYmgDdKqxroCDVy1uRpqDkcfe4WHKh9NMA8kXppb8umJx",
  "key8": "5mJv4D81Db6pCt9WR8MjGNE1uEKFWzPuEg5JeCvMeq5E2XxUJGzT7pyLUykiAJf2DcAyQYae2RE6hS1JdZb5Kx4",
  "key9": "5hFouCGn3kAqtWpNv25VzPUp92Tj2eqciEwnyTW4YqxBCV2itgsZ52LJa2hgL5kCNUHTbmx9A5XHZK41qKQqGNCw",
  "key10": "3EsFCjGZUSjdb7QX2ssjZgUs4i1dYBSuvKFvEuXLAN9gu17kowrip2Pxoi2ZPT2QcUwSQ6Qb8SSDgFRrKGgdN4zf",
  "key11": "D6rCvkPRwSUcykQKuir8bLVdngMKTxvDUkGtPXx8Zeku8NhGgL74S4cCcCMotuf9Z2mgGnR2sbEpK9UMBmLaocb",
  "key12": "4zVQCajghrf4bm5QxfQSPtGqTrA6iPvw5UosJKh539EtiuMNanJxYqA77YvTBW7ZcnmjPaC6k343waHb9rE3RFLB",
  "key13": "2YG234BAAaTSztrcuWBjXzMXmXxikQ8fMXAsL7fjUd1X5S25iuXHCuBrHU4uGZcd2qg1bcdPe69LkjBUsJ6zi7sG",
  "key14": "67gT6MbtK3jKEFiaFgjZ15BuiXqTgdgur2zmsU4WyTeU9HrkgKoHbVSLF2P12HzgKWu7mcFkQtkoP1byhktbiFwY",
  "key15": "5f9Sf42foH3hTeoV1rLY3WXXh2735wnPorXSK9SL8G7mkRMMCtDsFf6a8QtVw6sLRAN4cqKNX69YgeXhTbb2wFzW",
  "key16": "3KAc7steMhY2VpH5mnDbWrynhFZJo7e6ZuDjY2HgZYxtzzWer95oGN8MQ9FUGKFtLxzV3iCJixdcfP7LhPABRWeo",
  "key17": "4xAhdqDpozgKKqYiP8UnwMw3U5vwdMneAtRXekWAg9QFUzZoTogHALMnwjpHLF1cHMVPXeuKYofUMmu9xADFGGhX",
  "key18": "4k7XH6oTSpJdYbNK1YPN96NJkwB3xGFTEndKnmo3TvvVgxRSxZnMZmH8J5T1WAXepFp53CHZsAAgBZTMQQW1ghfp",
  "key19": "DrxqG2nbNKjdsiPtUZust1WwaZFahrj3n7upr3B3Kz8LL7sXM3y9DMMGpZ28pjpypXbtv4SvqWo6fBC63F9Z4pm",
  "key20": "2WVZo5egXbXAit1BVSnETuy8ucBEyabyhaCkUXxaWJdJi4qDSfHsjYk9YYYGTjpv842LkHfYdWeaP9xpXWbCsXto",
  "key21": "5yjgx3GTaGmHL5vnKDL15bpUNALzbL1DeEBec53kmvMW7xqjnWc5bU6NFwCkWayDXCx83SN76xDR9igizwekSP7d",
  "key22": "tUTAy6fdRxGPVfoDYHDntvPNuqLnkPPLMeXN98QeGbvAXu1xQV8QPDbx1X8QcGWyGuJiv5xEmVqAfnMfHXDUa5i",
  "key23": "22LEWWLkysqVFH4KKjDpLrGd499c5U2pPfk71UWdGZiCwm9TAjsBDURDp5yw8J8AojKY3K4U8X5RGMJUhntfJE7B",
  "key24": "2AkWqvVv546GgZApPBArBsWExV8HNoPDhGAUBNvQ8mDoUYjTbyxvkxUGYz9kzFHD1pbsMUMZus62hJg4hGfNQTkD",
  "key25": "x29LBPKnYjsfAC2Q69GacKxT41mfzhvDdpY8zEuvvzVT91zZPSt5Uxb643BTg5f44W8ohR4ZCziU1WonVNqh4v9",
  "key26": "fcFd9rgHAhbhF7xEqGoRQKN2mEA15WfNhvuRag68aCPF6gS4g7ZvaZNGEqrYiHC7TxnizYkstErNhSRYSYaH8QH",
  "key27": "2W59aP6Pv6hVmMX37drjPYCohtypoqKWnjYzVQjK7KP8xVFRJnUFU4B988aMCignEs4vKoyCGpyATp2TkZdcnjJT"
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
