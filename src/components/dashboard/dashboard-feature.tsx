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
    "3HyAULw7XtwPDesHQ6YdcpBvvnCvD38Lxs2MRrQXVSewizjZCJ9Dy5SauPvHZJnnGR1MB4VTRXzeTYKuyk14nxAh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HW65ZQCvpHnDLDhFHmAwgPwgQrdaozbx3CzdEVBTAyFJrHYFAxhmLCqwBxi31BToFte8DQJoBk1UTsBQYS8CEC6",
  "key1": "5ANfNiY56QRuktBpaNKSDXbq22GzgKRfSniUm4p2Hfw1xE8XheUmNY9q2FnfPpHUDBZsATWPgW1cybfsBbsd89YD",
  "key2": "sfaB7E5MoY3rwcspmhTBG8U6kaxdpFDUcErXeaVbHMTQUTFmX5nWAST7BSpvaoywqTLBCKtpNzKs6vspLAPJLBG",
  "key3": "4dSvv4LEdwX5R4iPnc6Eb3VQRU9tTsf6Egc9ZrUShRU7SZUXr8R74qFQuDnM6KoSNPpYvSt3E5KhRkrYmLWN4iWF",
  "key4": "2is1RV5a5ZEd1njrp7jphrtzUm8S98eUUbxXcvEQq3HmF5AXtSSQrMSwE3qf6599g66xKXRuV9eGXxG5AGr7fbzE",
  "key5": "4Mg5UrusAFHRPdogwKikkyjxVLa5tWVysMg3AowN1P6DjHBHVp3mc9MBgvYpbMepb15TVvRRxK1EjNxMScrHovvc",
  "key6": "2hgo1UnShUvbXdC9rxSayJakcpNuuFAFRCfx6Sc44ABSmdiMxUxe5XzdR97fsiqPzest4SB4ixCqvS9ebT8EthDy",
  "key7": "2QWM837R1cwyHvWu3jWyo5TfywBrSX7xHykvW8oEzHs8owsAThxp76hNxK9TmiBDtGxLj7jgNNJF63A4XefutaUh",
  "key8": "5EhbsfokjSfXzJsTNwsyMjDKkcWBaCTDVzvqyuda87ntVXAGLipDsKpDKWfyxXT5YybXaUeeHXiD3eaXRnFEBYrK",
  "key9": "5eXf1p7DU5Sxu86YbD6pznEZXDVB7C1Hx5ARp6sWetBHgM4G2SHh3vpWnTvt4vF5ia6oGZ3GtHVCtFAbDKF9J9a9",
  "key10": "4eerf8ZbW7TyruH9SVoTF6cEvEPHU8L5qDDxpTx2WBbeQiRR15JRzypSYbiipEV79exxDW8MwytMwE1Pj7twa8ZN",
  "key11": "3xbnJ4aWGgNuQykqb7vhTCJt6AtLTvUiPp2r6jo1fHWz1waG2kDZKc4jBwUCQpsEZ8uHALaPgiir8VXJ659UXevH",
  "key12": "55RL86rFtfYr8BToYfsGA8kT1ZCwyWsUbigSMphqKfFEqSdJ9LBvJ6hnzmNxoa876mpU9JB3XBJyATh1YvAdPuZZ",
  "key13": "5mSZe2V62Uv1RGGTxifk9VnzRDUSPUSNmiVKvnc4DHX8AZDEP13CxNh4UWti9V69cak1WsXUkW4THhWy94q3nugK",
  "key14": "3Ao8KysCT1gPisniD8r52p3u6EWLtoa7fLQBA3e7oWaXNRMiCSDCz1iRfVKhc21NnyPmSQZw8mewjxaB1pwXmBGd",
  "key15": "44y75MK1ebw5XWAhBoKjtDm5pUY1bsH5MaQwojxuemqhmaukLEoqwBkVGynLmaGW712WBUNgQGigM1s7orMZjwpG",
  "key16": "5QYgeqbAbKxg6KJNjqmLiogyWTgrSXGMyzP87rXo25YAVjy4ExRPPgDSPMVFgvSMHkWoZZpNzx4HqXMdS71C7Q3o",
  "key17": "1JDm3e6Pw5vqoxBgzPeEEozSzLyYzYFFyH2ENPwQEpwkFQJJDEkyTsnKvsBojHuYM3pshV6923f1X1FGmbwRk1y",
  "key18": "kzhn8w1mzaxmDgm4wSSJxxheKuNDLdf3mXfu86aMrY91Jsfz5uWcUHQtkgbEXpwEnrNSMNAqqwHDk3uNVCgTc2z",
  "key19": "2xDic6UQrLN891TNcrpbHbg39JR1f3m2WSxu1cBArohjiG9q61S45BLJSr3RTXCfK56KDXkMtkpxFdrEWKeHvJqe",
  "key20": "4TWsqcnwxSqGHfSDYky4xHAVrocPk6QnDCkeTt9mGQUvyunquYpJPsgVDnrRt5S3oLt566HFUQpMw4qHNjmqkBRU",
  "key21": "2Z2ZQ8w1Wmq5KMGSmd778PHHgJCktz8DwaZvoLnh2SMLZUx6BPNF3CkuRWXGtEMRDMA2TMySJQQxkXEvucS9v3wm",
  "key22": "2kXUBR7adW2urK7jnceJ7R72DjHQCgH7vYSPDbmfSQ6DoTwxY7BencffQK3WAB421AyX6ii7FQGSGQcgnpB2d7jL",
  "key23": "2udxo6ejyEap2YcGtTK1ozyQv3fJWNKqDASrGXNqjHi7nQAPY7v1BVxwaiaFYqmM1sg3Lvk8oaRDcJ969bsu2wFB",
  "key24": "Bk34oyiooK1Cwb5HLpZ2rG9HpQdFweNK7jo6iChnaCCutMChsmjaffcNqWR2fntv6Y2xB96McAKw86AgWvpZbYY",
  "key25": "5mqCnf7vs7w8gQZqZrQqZhQzZJgiceBg1ESU6YvvZrfekiVzUhMeie8ExpPEDZ2E1mzEk4EXHkgEzWqBmDZfceU9",
  "key26": "3FbFacwsE626TEucWAdWNTmAgB3tsczYuCxSRgNSr3R6SVXWFnMyHn2uUwuFkJu7ZBEe4STJo9AWBraKUiurudjW",
  "key27": "4YRqxsmLsdtVQnMSuwFM68rAroQ2eYCuo4JyGMJARpB6ECh6TMwf5kDCPRRVDuRjz8EdrpcMHgu77ZM59Noq9ggN",
  "key28": "24nsv34frcx97BycYm2twpBBL3x5Ty97wbpzVjjAGHHyyvUptXP8SBQHYqySifB8rbdcpRQJLBXYSNnwpeHebRhf",
  "key29": "5RQgdUX9R6JXZcgYUF9EvXA2qDsP3wnHnxEVbKo9xPKjyGnULf99b5dZ8v1waQ4rKyxXRagZcxgJZBwMW5p1jgAD",
  "key30": "WixUvsWr5rhsnSwry3FXG37CFzG6GdQz2bdD9rXHjqzFQSut8HAi265W5ALmQPaUHsSp6qM19QCTodTtLrXB5TW",
  "key31": "4jWMPo4xJp1gzAYvtKdWpGjEDmzwrDvRAVgUj7vebyFKw7R4ps6oVBZSaTTE2sM2opibwCEi7MAa72k4bosL36Vx",
  "key32": "3Lr3Bc474PSujBEJWeK9mgDbYVJQoLuQn37ZSqHwdE1dem9DdPPsnnRQ2bdcDcYCXAoRn5KdqdKYyfvUhdHjZAoL",
  "key33": "2hPe6uXpeEAD6eUgwkrVBKvAKGyXyJBMxm1ZRyarbM8zyPyQ75KfQXyAq1oq5u5RTJdw3FKyjdFKxcehKeGVYmsv",
  "key34": "28NNpx4EJyJtz4jMqrB48smqb6iLuW4KeVzYtYHPQnV83yY5k6TcovapU5uhoz4TxC5oXAWmJTKAFTuUctanE5iD",
  "key35": "2WES7xRRQAmZnTYPjRYYv5xiGiq1wz81MHigTdEo6hKm3TuZ6xRwKLsNyEJ681zYBJQ8vpFwg1GCtyH3zEK91zrc",
  "key36": "5VYbQ7tr7ejjv6WTUTcD4KP4gSGrQPjNAng4fku87wVMm4GASFEhkfjVdpm7GDXyDReSKDQd517xTyVunfrBok6P",
  "key37": "6LubcFgmZwTmqPkbNWxXTHQiSe2RdPEpbr4md9HMndK8dpEntYKF3PqKCfEEjB4gkbi8Dht9FqsWSraiTsm4Dbe",
  "key38": "4xKhVxynP6FfxE9vhv3Q7pdphq5rUDLBgiQFrC9HNm9bZ2fzC2sfDxBUagoKANj3MrdquKDbjXH4bCcWC3YF9GzZ",
  "key39": "4wRzE4Rpk2Fu4wfzV2r6SEhxvNhKkmDU32aYAyi3EPW94W5MjYq3cY5LKNQopcQJKPyrA1pnt2vEqojhnm7HMxqM"
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
