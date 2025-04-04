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
    "4wUm1JkEo1tQtoVAMSkGXGjnRNuke683YT5sp6GvH4DGYQyuchTmXZK3YEDWE1UomaxNaGMJP47mPXKxgC6J6cUy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HaHLo7xcsF6AMBKm822mHcD1qMvyNRMNtkoE9EEopaeJWaLFDQX5xCHE5RYtCLeTNP1LrekXKVeA8WV2p6Fsszt",
  "key1": "54WmV7cCDMWA8FTY5EXvZf7RfuXxRhSr2KRQpbSEuMaxFD8UaiBHs1hedhVddZ4qT9uSNNFEoTbL2rXLhbssr6Fv",
  "key2": "2rmpLotwDYVYMXjsm2gV7kdnaPW7yK3Sxh8k89DfkEhkVi1ohnhfAaUwEF95nt5cu2LAaXYHwtR5B8Wks6dbAmj4",
  "key3": "5jgzQbg9AmNAPcyJTzyvXBFgo333ixw1kKc6DecPFYwXUXQA4UHRuoDLRZNcPy1YiWcY6TGRWrD8Tvq1mCqZm8Ga",
  "key4": "4MAzQpuk4at1ZXSHAaDnDtXxarEDtp6iPJRH8rzTUWGTzK5VoakiZuN8noBB1TLs5ynYu61LXDBHg1FkDH92WEhr",
  "key5": "5JXRR549mMQRwv9FmPKWA3Y4oTmiQDY6bd8DZcitNJ35AXwi7FdhnuNyZomKsFTCMLEYUNKQ613V4sfhZ7Dqg4rG",
  "key6": "2ZKhzRg8cz6QrcS6DktkUYBwt4J41ma7bwxUSw2gm2vBUMLXQhdReP2B7odZgmJFn7wr5pCSjeTM8yEakTSC2KJ4",
  "key7": "3SG1UVFutFpK95njfFDxDtUFCvBgC7bvQSCqLVZHiPMMK27EScNm6RQNtsn5ikxtaaxw5DXsNJ9SdxhgwTMYVPcG",
  "key8": "nZTHYuCiBubEMJ8m1KNQKep6z4uysir28pNgwsxoHkB814G3evgVg63WLCiU7iweowguLHwYGUQGSLxHwwM8Kuy",
  "key9": "3MGQFSmaGE1NL2CP3f6UMYvWpnuASGtsyPZRWMdFbozPuH6enJkxxvxXhGtMYbNc2rbk8K8HCdsc1bLHn6iDqki3",
  "key10": "4xmn8kNXAYQEkNzCpzRZUPsx39K2J8QbA7wL9wGpAfPFcTVK7xcaztWLaqEyVHUiUT1nrFScekWGGAPFJXsXySvt",
  "key11": "4JNNBV1NpJQ6YXWQzcgVeQq7ybngW6tTAfSr8Cf7xY6ehe91DVvCPN1AJQRayYimitgqEQZkEpEE7xctD1TkWzBm",
  "key12": "3Y1dnDz4t2HMcSPR7hKVAsWe7NqVSpbLTcncuG73bWbUknjup9qANrdEyD3CN3rpV71f2TodX1TWzUYoH3dWHN7e",
  "key13": "2v9bpK6BgNYd2HuGKZxJAcm1auD5Lf8N6SEsDXBmA6aYdvdFXkaUuzxUPQcBybJqyMxnpVcdjDhrndmUQjBzWa8v",
  "key14": "4pLaDP7NJCSM5D27dSGze1gVg4SpwQ7edhjS2LxZ1P5eY6B4FtU4AaYmr7VS1AFCW7BXS7wv1efhifqHvM99wfYY",
  "key15": "q8xz8i4VosbUJEF1JJTEJizuhXiYbnCMTK6QE58ehUU1ZReNzEzgCVCgqfu1LHUvCLivg3oTwgCK1cuKVtKhDFE",
  "key16": "4dtH23DBXRHaf7NDhjhkkpFBY3GGqNpmCynHgbf3xLwgF2HRKaXMeKHgh6qFjdhtFv6aeKptuniP27YdJc5PEBoN",
  "key17": "RL1mbNRbLAQd9bAJkkMFwW8XKPfUjMgZ3vLN1ST1BCykgL3PaR6SSe7XRF9AjBVo3UJw65CMcBMn8TkGoXrz3q4",
  "key18": "2xSDTdkHp7g6BVByMX7QpKcjsd6nzRV9L4RwCmhK7jowiLCKN6SSuhn8xrJNDWv51sUkwyatRKTn7anorKh7jG1m",
  "key19": "63fo9sUVvcv3tPE4VyCwWtyjE3eyYsbq9CwNcgi7X5xyrG5ozsVTt36z1w5pYiC5d5YkhQVyjAB9saJRF8zkb7Un",
  "key20": "4bf7fewPwTSc1wyC9puwaQpX6A4sAstncrtj8hPRriAtf3fuhX51CqFdeNWybSp6yqC8LMC52C7JUhDQn2FA1Ttb",
  "key21": "4t7YgJWFBRYieZW2EAnfCnfW9ohiujik3YNLfJuZHiFsSTrTDSfmQqH1XjA77wPAJr9VNajaMBfAhuVQf4ZDfpyj",
  "key22": "222riCXVHWWcVKmPrZ4cxUqGtn3QfCtUREqEPPuNbWbTq5JeeQooeiCwgUaoE7j8Sqej2v6TxjXL7GJsEQtzHX2g",
  "key23": "5PkStNsz6LXm4E3J5itAxBzhKxa872mFtaHgQSwJYvizXJGPSNFAPs1jvRgHyrN3XBB6s1TviVw4yLYtVSojyGVW",
  "key24": "4jFkxqxvhG4rA8ady1ALFNWVLfVrAVpcsrWF9mVdUML9rPzbP1SvbrGJSeirJNeoLHpwTwcw6uQjckHxP2ciTb8q",
  "key25": "WiLRDvTEZ8NZA28D6rvMYqiqXtD25UYBU5BBeb6nsK1y29hGV92LtFmMYFft7ZCiAhEEo4FyFdaMAqE5yxh6BSK"
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
