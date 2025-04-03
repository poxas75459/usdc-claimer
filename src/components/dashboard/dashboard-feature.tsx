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
    "412jQ4sSvdLsPFMm2w2yGXQyyodV5cYiZ4rd9ydZ3cSRC9ZxGg635RNs9ykuAxKH2B31pD1fhpsx81n1FXmN56fc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tsoA55z7vHwDw8VSEwqG5htRT4PXhXt2yjd3yc2ex1JyMffZsjCWVKWFRDcnKUsctFahP1L1Lrf5TrpQF1QeGHy",
  "key1": "3YQeJZDwQ2PHhYBujTSobEwmnNbNww2wwX6HJn8gQDHPeJB83Ub2kM4Zd6WRvgkn7GX5uKkF6V334KtHpmhoCL4z",
  "key2": "3bVguEmAurvFBXktc6Mu2hacefMHoUp4HU97A6TKMRt3t2nuTDeNmM3r4sXp1i7WLbZmsXN2KN9gdYcSVHrZ7LYF",
  "key3": "4v2qWJ85fpGqLSk5ZWdEovdGP8bof48CyLr6Sh3cnU6Vpt8x3akQKv6MiMJ1p4Sd9s1Wu75tHeGzUA6R98MnqE3E",
  "key4": "rwKcYa75wN2zC583mXQzfbyHQKEfbg8qQPgtRctsNGqkZPcvBVdZWsrnTAzXkB9NsbY6hWx5MBUqqy2F2mKAye2",
  "key5": "2A1GafMGu2CUvQpFhq5KTRkUn6HMEq83cgjrm5b2x6RCCuGYLrftCA5Tq53vzkATESu937jDXTnTNJdoNQ4fRN3B",
  "key6": "62ZuLMZTrqoPCwfmWnUyr1WU65uTDzz6NnjdFmE1vkzL31boYzCUi2G8yHgZAuHUBmaSb1dx5yMxVzNs2xHSWAYB",
  "key7": "29wd6eJVUWh5akn6x3tpuYiaLknLz5g6VL4th4yyU2U8mqVqqtbCyRryDg878rCNeANwC7BtYjDmyY5X6fVsq55H",
  "key8": "u2kqvXaJcCcT6oNrTg1myvr9GV6Te8gXXDqBpJCqJVQngLsGuyuJaXPJV7HvrTvaUPWXeSREX7DeWA1wYB59Psf",
  "key9": "5LBWb15xAnxAqK9MZ33rwkinme9Wz4GtD5T8e6NKF6M4xHvwfq1zVrH44qmLy3qmmDczT7ERY5bcM7Hpf1S57kc",
  "key10": "Zz7VVngrJL4ALvq2bNDQNRvVqcFuVj4WZFD3AYuJaEp2PM7gj97FZSZw6PQP6MxsLAmQanpiYGguitc5qoc3igh",
  "key11": "rWYxgvJFQh8SJtMm8C6hxSt7JEYy3qX6kkqH9jvygZNL4mpCsewoXyCx717nTognENSNeDp13BMuvdFPF767jEH",
  "key12": "5ZejPaWLqwXMvCsdETyFoZvsncvd8YfjK4tPv1yAc6ePoNGWyX9i32EEiWBW5hrF3p1QHqRbj5yHZ7pDgQhyXeSu",
  "key13": "99qTR15JJsPvXG3LpwWduG8pPP65oXq1T8M3SMhwHa7ujVuyHwkT1g8SfyR5mrKPntY1HnRiJRSrxSGzzcGi6sY",
  "key14": "J4ahr7dBDrSiEvXpHZcmvAHd2L5qPpFQfuPwiJki9chj8rESEzR32e5ftJXRZ4DkzigQfJYw28jbNpEkdN224au",
  "key15": "wtHxDMoWNShJLMFLcNL5Woj2uDFGbBhbqqzuwqRxofN66gDoTj46GoZptgBddbTxtqUyY6cRG5fX1tkr7Hmrisj",
  "key16": "3R9pEexDzqhKR4ysiDzDmdTLYk9LQvczo9BGHmxhVxLddjHK7JkMC9gUqBixnZpfKKVqTWpxXZPsRLBYLEqczKoC",
  "key17": "Hg3x19Zukgx1Xt7NKv1SsrtFL6t7J5rH75artrVGXkRpcrFKGhQkWdUzbn3GazvZQ46YmAnuH5B3aVB6PeubmQ6",
  "key18": "27kKaH6qP5H1KWBT2K2TVhaT6Pn9cePS2U6MWvVcdWCqRgobTQr7YKH1GrsWXRLgf3EjbvBGq6hKpibWLP82PW7y",
  "key19": "2GMjJfJ7B6z36dKWKEcbsGkd54jaJPmzqEuu9XDSwhPBUyaEs4Fv3YLnTwUL19eL8yRSMfjKSKE7UioF56MyUKxo",
  "key20": "4CQDsJYDGk6aNoLfSNYDtntteQM386AmWonsLonDfkP7QYhY69L2W3M3iGHLPeidGHzQosgw4jDbvxWqeRWgdyZo",
  "key21": "335Ys9bs63vUGtDtQX8Qk7uBY1ZqkBveKECeGviSC4Ftx3j1JJPbUBUx6VhfQiVJPrQLFFP7ixRLpHdov47yN2Xt",
  "key22": "2LtA3ts4LYWPsGpQGuceLs22T8rG2Sf4xiKcB47UyZes237tTspa3vKfPzjtgzp7uJ4mnwDN7yyUZrtR9twe5Ffs",
  "key23": "2xJy36EQzGAdbiWFP99KT6kRAF8AQ3vKJGVQdNYzLpNo5HcjTRQQ2ETpzEp9dFndM1ZbaHNxaL1hn5TzKaK2jcJe",
  "key24": "2rJ65GPvgdQGz8HAStoYpUG3XEnR8YyNc9uzxYSSvjwKWdS7V8wikuAt8pt9aX5XVvvyaAAgQcbWDQywKCVXHHTA",
  "key25": "4GcCUJGWj8iwpvzxhipPaSKJEghrJieiJpNixpL74tYfD3rK8rAv6KhMX5cXPdexjmpANiXrgyCnqCdkAdRCyLTV",
  "key26": "2MZZBFCdwdsgCJB5z5X9ZcV4A6kAaJywHiczqmgeHJ6yzxuyzk1bsKB13Z4WQzqJaZtLGRiwnac6ngRGvzwjZNW3",
  "key27": "oidB9vB5wMPg3z5xQcxpcj6GNavqqA2Yf7WTVTfn8QatoA5yZaToUpNk17FzikvC2YDg1GFVnfUQfknM48e6ya2",
  "key28": "5s99NLFoWcYs2GyFNfXZUR74S8UjYesmyUXYJovTDjHcqj2QoSXkorGq49qwVVtyZdVguuPvYrTdWiQWNLdnTSJU",
  "key29": "64FpMbr9AQX4KMrqAXoyDqAWSqNEmNzTNdKXycyo5gWdHmikYZaimkhZpiWsNGWZ65sXnJkaMbaMdM5BPTBgfzqA",
  "key30": "5dxR26wGfmJBfU62U5229XqPrW1RVZavSk4pbKKPSqRTLLsZSQNravG28BvJDWmTBPkKHoUHRQ3xK86i3bpCD9Gt",
  "key31": "e4QiRym2Rt9REqkjRjtY8gnenY72tQW6oWEmv3QVYxfqKh22eXkw29hTDpMdPsWmv1B6DZAbkTZpuTqRFFk2X77",
  "key32": "mLbEQ4AWiyBsfrcrH9mvaofmJ8bStGBFhDNjmSS1vWxjAQMEB5bdVeu9RL1FCbRGe6jcDCtP5VYJ5g67GzEqWyc",
  "key33": "2amc4a4PXv8Kj8ehteLGBSC8qju7Eff8HAXDPgNox5YRaX8af87xMgCZseEgXuRKqt8Qpej2C2vZ4CG7N3EBpnw6",
  "key34": "5GZXzWcnF1QgdQAukTVJGVRAxYy9CwF4qp4e68Uu3SGPZZy2uRvbxJsJ58UaJbdUeTZxXZFKveFJ6T2Gb9CMFirc",
  "key35": "25LQfsDLyDRy9o6c6V6zywLcWzmM46WQshiQLbmsGhFeVCGV1jzDDPta9n3pYUMUzmfPgTQshYnUF7j7e3yrXN7h",
  "key36": "3wW55YBVvsmHTbszSe17HCctdNUzdsdS89PJndrpWgQzfeHVPDZRDUNEocxuamDymX6tePgH7u1SzVuNRcZkusW3",
  "key37": "4WxWAppXUGw9kyEucGJ4qTVP4mSR8RAwNRbgVNMLCifQYmfhZDrPL6ZA7M2ijdNsoJ3eWR3C3yd9ZHau8yYHdK41"
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
