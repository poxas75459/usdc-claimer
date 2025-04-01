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
    "5Uh1o3R18QGKx8dqAAvxdj7agNGiynBB3GoeY2ZNaGue5qC1Nkj6wRbVU2Qf2Y6LNf8vUk7KiNqq9ygGfSyh9b61"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aJEeKqh5zEpmi9gygnuHNYDQqnPi9P88Yx9xtRxJdBL3HWgjYNX5NPt6WeHtopRMcFEfCwcknpv79H2uawPhzwZ",
  "key1": "53xqo8MMppFD5TKPqY8hjWAdjQieeTVY17iXprDURYsZfuGPPuJRgNcPw1YBcp7FpUPAFfTZPQC3jjjMbzGRMQgL",
  "key2": "5KWbMZqk9oFzP98CkisX9uSQdDT2z3ey6mRdhQdstmxLkyDsiQ4DTTsiBiqZ2DyYuwH7yeEtuUqTbgxuNxMoyAS6",
  "key3": "62Bw6qeihb9MLYhurjSMNsA9VutJmqRb6R5rpFsgFgqZmvSdcHtxcTitvnBkbjWpLKuPaXruiBBVr4j25G1Pr2Lg",
  "key4": "4SEKL99XWfRasFSkS4CYD3ZcZzwbWHJkZMGebcAaN6qWuEQ9ZEviTKsknpxuqqCAbtu627K7RbUUnyTtfchLfbub",
  "key5": "2PaP1c4b4N69TdQYH9ndHU9m2Ky6uCf3ER5qgCXKNLJZCSpdv75HcjPDTh9hRiEQhDAC5YLA3ALfJJ3ESse9HuFj",
  "key6": "3dCfwr5nooh2sbezXNeASAECz3mTHaKJNQ31EfpXsE2g7wsw2Un814M2R24dgpxPf5ubAx1F1CXMxB79ZcjqhLeK",
  "key7": "23wtBU4U42pnrU51aaCNF585GfxYKwQme1m5C6Q9AqbQQREAqrQR5wYP5GJKFa8qiaydJJhsqRKekGAyuaKPwK54",
  "key8": "3eYtmnWZtDEr9hCfj4kV3qEf5RerMooUbqYWX9emhUvK27yoYjC5CWFKYvAZ1cGzetL8UzC5vcsybQQRbcTMWdSa",
  "key9": "kxY19ZZGisuEyZr5qjjFxpc6TYn57M7w8oYjMgfafRisHbFseMnfi2E1FsB6LSRJw1Si4eUqB3suz9bL1nnTvEg",
  "key10": "3YS7P8piKURGdQEGJgNEGjMLXPucLPz8j9aKN1z7pv9kuBEMrgBqAXy5a2CArojtrwguBPbvwWB1scfvEu8g7EHz",
  "key11": "24f4h4AZxhsyZmGHw17sSyikd6RJnq3nFK3rssSen1ynNCL4Jh1g35ZqePEhCGxnT2UKBpVEkX12EiPEAHqvVKKk",
  "key12": "5BfC7XFDkqTfatLSqiydHeXvrLQ6ZmySXBCEtVBizL7gbtyLCGYx2VU8JRRhqd9uxorXMgYNuSzAQ1rejti4zVNj",
  "key13": "2LRr9BJ7NFZCGCwNGaeyqwUZZNigVpPEv3fECTmij5oEYpSFDShc6eEi3Z4nBaXSeAN5rLSyVCkUoKZUsjGDSAzj",
  "key14": "3PesChdVAFnAF7jLMNZkFKBVbKQj7YVqStTW6nEus4DNVwETMZ7mVbY6BKQ3ABKXEhUW3FtyfKqc9hgT7wQ6f3qt",
  "key15": "5CthNqokyLsMZqYNK6gvdRu4HzjY9coSuV9qvFj4UHHwUW33QGwBsx29ix5MTUUofjCviJYQJVTd9d6rN8NXV3JE",
  "key16": "4aBiSt5GLc3TNYWWzyiX8x3xwgPUsRdaHoj9GWoKkNKVzmHtGXjAzELCKNotzBhdHAPYZtTicW1P8TWE8obdv2e",
  "key17": "2TUmzWt9kHNLQtZZVhiyEQXdSD1W3vdgojj6VnQYnN6HdAcgXBtDxZmUuFTdgnoQqAAiZvQBqS65Ai52MruoBqYx",
  "key18": "67Ff33izWUf7KocfZvjvU6CKA5gqLMq86UQ2Pzma2aKzRdXMJzxu5FxyMwEq3E1PxCy6MbpLmAMgFS7FNBZBhCKb",
  "key19": "5mSrBmD9HyX984uwqaBQDEqVyS6jC9vMiAw4HhyNbr8vheZiQpewBHRVfvGsvfC9jaCurtxjUiQxSKQaQQtHnQDA",
  "key20": "D7aMAiUw8y3bQjb4bNBdKfDbpXmJVvF59zNysVw8mX2qriC5BQZeqMWsfuA62oEwEZPuhwdSUBbAFm7y8hNBg47",
  "key21": "5NypiA7yqGSmaqgZ4hrjogzFcYQ658u7reSBxbGK92iDFvtgAXpqPVo62YkG2tC8KiQ2KK9PVRM7TsgnSeTXT4D6",
  "key22": "3WEE5ZMwxzEcbZ8eCM2yzBRshHvbbhL9SwMNcciNSCdD16sufYKngN92ny8drRkXw374F8fFn9sGahHnT4EsB5iB",
  "key23": "3bG5cnC55WqrKm7YjZRs5AiX2WwLD7osSkQyZTX9U26Hv2vC6Dj6u5sytgUhPnAs559P59md6t963af9TfRM3WBK",
  "key24": "62Bedbn6UPemzF6966Rt497Tw7KuyCyCaCj1ebiubLEJKodXs8P9kHu6AmpYHAPycWw3pcuoKoLZVPSkc5PR2Nyo",
  "key25": "2N76TLiFPbZa8dwmJNpyuy22xDNKRCruMBkBUn7P9sMQfmbNQKhyRmMMSzXYSnaZkjiQRpnwiF3b3NYZ9xNWYXew",
  "key26": "5tuCmXSujtdTCeWDXmKaVq99uBcE7ZLXbKTiQQBq9YFvywEe5XgYTugVPtAzFHhe9acfV1p5ZCkPeWJ7D6nJfqU",
  "key27": "2tvDnE9NDqG9buC5yxwwNXMg2oAKzBjquseuiU3bVFibV91Rodxr9ZcugZbQeKJWAqEFG83T5xG2wgZa5vAZYs2U",
  "key28": "2PEo4hnsi9niaD2MxtULkAZBE3N5Mg4gWcHtEJjpa28L7HpQM7Nr3GgNHvQ5vuwFrqQq3H3F7bKqwHZuVRqmdH9w",
  "key29": "tqRCHki7jQfjQE7g4M1xCCSSe42PG8evMMnDKF1tMKAK5DqvZdR1qnyfrMsc8DCosX5ZYKeWoFMvupiVRTy2aja",
  "key30": "5S2yzUqXM9YSHZZoDNKKqaHcHDNKTM4Fc8KKdrNMRG8tJxXDPBneJg9BQ478PKH5oS43qpy8uh4WbVh14EVb92uY",
  "key31": "2DFgz1S9QTwjijhCeyuRwy94FqKxwDPxutZE5TRxqZXfEE3HmyAQPbYFYJpAkasYu3EpVEjeQuGMS9BMhxxjqeiz",
  "key32": "4bZUMRTTPkecK1KqHPUQ2tBgq6SnqeBjgGb2wxDbXZKRtD4DErriNaFTHvGgSpzannCW6CcUagLBCYwqMntzHbXZ",
  "key33": "2fsXHFtHGtmNoB86MJNSU8Btrgrc2ERUqZjaarWQZdsoyFNrREKJg76G5rK9Rkppmw3kW4rdYTBv2X2Au2FtAbaA",
  "key34": "4eQrQhfdLswoYUUVZFFRrCfdfR2YDTp29Vigi981i8husYrs6Pdh7RYK2owFBjg7cuvvsWz2WKoWtc85rma8QbP9",
  "key35": "2DwJp3bhfBJ3Sa5AE8BffpoS7KZA7LgfMxFovN8ZXSJjudJ1j9T9g3cEvzFJ4Qkxts7WKuBGf1q5vUnFnt8xaB2o",
  "key36": "4coKudtaYckQrjTXDCzTXeHMQfr4FXXEziWVoqxdWhdXfr5ffQrbmJQJra4vymoTZcHPmKXL6nRvjDLPhRyADd7f",
  "key37": "3xHZSVTxdFr75NpLYLpvoUiBM3W6ESQqmygSmww4JLAif4gqoywUW58bqwA4s9myXgbMcwJ6bcAa3ycZqp1ENVD",
  "key38": "4L6mLphvSFfPa8ofU8TJAmd87zhUWjSoZMj1DgzP4tXst4fTTAfUBtNWJPtKojDTzQtY6XnZVKghT3K7qvkD3ssB",
  "key39": "Rkcj4Zh283hwMdrp6hg5HWXbMpsvP8eV3Vdh66wyZVSzmDKkmW5GC1yvTh97XfmLZeASDRqzqkLYxWxYCKWamJB",
  "key40": "4zob2rjhzyXjnxQ8nWjRjmEXJwJoosz3XDKVMgE1qsdKYPkZcvNi89UH44ad69aRUnSGzb3z5ejgkmdYhWc8XDKh",
  "key41": "42SYyC3r65w6gpoHmBnP6pR2bwSsAVvg4E2Y1cPGmtCy8Q4Cw6SfaVXLUBtQN9HYt7T5tMuR2mxWwCHMyR8iSHqd"
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
