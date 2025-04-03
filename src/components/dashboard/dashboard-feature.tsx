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
    "5mkPLerPfV8Q9y2e6tqgN8fWr3H2dYG6orbEXnbMKBaZNsBESqhAje5vdVySm7qJEHjP6aUEb3Cmbt2XYwMhn8CC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pV5WtrY88KkWLJkwYhuU3HfexDAdSv6RguomGKGERHGEKkDfyGaENVzsCQTDwCstiQ3UQDNEj9Bdz7syFDr2kWq",
  "key1": "fNHJ3ju7MkunrC8EccJBPcS9QN5p7TSvRHaj9NzBZaVZ5jzn23EYXRzuNLqBkb8wKshM3QGtYzW4GQuwzrk6Zpn",
  "key2": "3na2zg2i1SbhkStdw3y2uMVoWYi4hFmn5Y2EvuWVUCwdEozYFm6kEPZUJb3FXZu2EeqyPiXEiJXuMP8zAZ8PgYnR",
  "key3": "4JbyARcobLcBuSqPQoDM9kJcJVwdWdRrghBhxnV5nC4UtXe9Tf8ERH5pieSdZUfTiwpFqDWKBwG6HBMRFdbdcM6w",
  "key4": "3Z56AKfMyPca6t7kTvwPfDPrQGobGdnF72eW21jnrgo4Qp48mHFswsCPMWNMnHBgYdypCi9hSKYyECMcBbnP133B",
  "key5": "3x256FCkwXcysEuHHgNRfDsYywZZm9HRP8LQ5GrdRirsKABZBVZfr9hK91UxXeZknHPAwK3ZwBurZc6RAk8q2M4U",
  "key6": "nuLrUvVhQuVd4LwSRfjaEN6s4F1asmQ5H2wdwqRZtc5gJd8LjFdLNWbxEu5UtaJdiR3wZhZJz9pZR21JNxHaNND",
  "key7": "3Jg9mPgmiv2rkXuswTGH48mZFi1zzSodou5SpAs3TiLvoPraB7bpj3SLTqDQfmd7PhvJbHTmkvtVe5pNhUMuPPgN",
  "key8": "3TSJmj9jLRcoaeLngKTqaEcXLKzimBvnby4K447feL262BnLB4PHtWtYbKQ1LXWHe7WADzXmWs7Em89UtLCVNbwX",
  "key9": "51x2rbumHFdoFVe9BaD8Yp7EBtCLcd3tkxVygGMuqgvNLQ6AsHX545BmuDTJx1NZEdLCzhqJoqYmyARRiRpoUnhA",
  "key10": "3qjx6V82ja59HujmYEj3wDuebVQvSXsJ4h2DUmwuiT6zNCTvpxvQjB3xzcQuFASPLXCrMQnCpeo8TWbURB5bnHvv",
  "key11": "5uUN3sGwy5J4UCYNM4NT2eR4CDSkepkL7v4LWKAXHL1uVysT8BUHkBT2KQyR1ttg9YQ5osHoWNGNCpFZZG3vGCUp",
  "key12": "63bbZnWrQBdvwunprqFijT8XcT75NkHmkDrtyfZdnXwQjFLsq3YWNhWv9EEvWudAx1teqXB2NdpgeKiJZX2vXCc",
  "key13": "4F6VpisdSrTrg8ah9tswMWPLDr2YyYJJEScFH1QsoikWmekx8PT8hLbB6oXwmYD7E3frnoWuphfabszNNXesBvjH",
  "key14": "2YJD9aBJZDfqgU7Q7YVPEQwfMMGHUnus16RyPHbjJVqwPMNCfTyyhz8FAJUog41jd3eEdnBdZiSWbKq4UXF143tu",
  "key15": "22u9ekoDRoneCfWimAeQi6FWA2ckV5Ui8DCB6tnRcTE1XH9rubyfhjMA1EGmEYqLmM4cpbgX7ZknH7hDdWT91i1s",
  "key16": "JHUqsybA38oDxD6BUTzGnQSiuLffeN5vaNTip5yupaTwgPav8X6qHPZJ4Wo2LxhxFazVF2Ldtx8r5CBRmaXLhFq",
  "key17": "4mv3bybxTiydBEyjwsy3D6MjweoJkK2dwJzXSPwvQkaZTw1fCK3uLQKs5WV4CcSQfKeBpozhfQH8PbJdk4dH5VJL",
  "key18": "4NNjt1rz4xCSraX1nTpbVJBPQajd61LMh3aJZB3ne9oBRuBtr59aD3pYJGfEMdKiyZouBsirLVCQNHcqnz9hSand",
  "key19": "BgY2krTRE79DvPrvrdiAFtUUcVqsYpvbCLGoLHLsZUctbcjqRvQ3P9e9J1dDH8t3psxq2uW8z6S6ec3F4y9kPth",
  "key20": "56Sk1SxMdRXue7Ym64hYVi3WTwzUQ7xMX3tETBmhMkEXMA3dxQjeCrFoY2XEZ5SNypT7dwLrL1bobv42NLBa51Nd",
  "key21": "5MuEeZ82pUagEfW3G97Dv9xgLfVASPwezu8uePTQzq3CVEKPZn8SQa6JCZNjVnViFheyzRtSQgPVAYFWgVNvr3dj",
  "key22": "4t3SNKD84ctwoLeVXe8HFqMvoAmXWZXJc5znFXaXX3drxYhJEnwCfXfVubCQzP3hTK4SMmmUSvAn15PHEY7jGs7E",
  "key23": "Y7GNjhgdcupjkV6P6P8DjeRanEad6nyHcURcziCbDuTzcrqvJmhUsYBENgpCPJkqQBKzd9VoCip82efmd2aaU73",
  "key24": "2ZCrpAxj1FBsVkngs77Lp8BtQng59xQiweJ52nQUJjsXCrBy4tdSViMC9Zu41ds6HMfVRSjFxBv9CGHLdqynGVzJ",
  "key25": "3J2ZnYsdBMa2revmzfMzw7rt4Erjs59nBpf9XZ3MFgavsZ4it8ancd9PGfa1AM3Zi1UEVAKcbZYCrHJ7FoaW8dM9",
  "key26": "35pBe25g1uwhtZTKQ1MjGfm3HHrcpmuLWrndyAZ6yEC5v1itK7L43UZSbhuPBtqULNTdYRnrtZSDQNeNjih4us3Z",
  "key27": "62FgjVMqFVyz8Zoy39U3eUdFxf3df4ZB7XmTYfD8KNHumHqfEvuRXZqqn7vQhUzofZrNtxYVREEsZVVi9GJrXT68",
  "key28": "2YzGQSftSEoXLyV2pb9AzEKKpmEupzkDiGduqX1u5h1R4zseUg1KK4caMXsTEfUuLiYpyavTBPU1WxBUPyeLFftW",
  "key29": "7po8dFSn4SXZhZhb7DZmk5rnekpXCZ2MDVCWgBQWxcekJf3StnBJzQBdvtJCRCoVPZ9VP4bohq2JfQvUgJ2J96W",
  "key30": "4sEwbL5hHf7YsS5spPynhDyrwZc5vqvDFozzrif77T6gPc3nwq8TpnQTU4X47srs24nYFSXUGNgK4V6xFvKZRCq8",
  "key31": "2Me8uYqCBbMyunohJKJHHAMeoHEDMqQkcBB4BLbJyBA6gNnxSYtYQSN7Ve55BACtmntDbmDKP87d6CC3K6dB5upT",
  "key32": "5VZqLanw1As9XyzZKdSrsMcGiyNWdM3zaLmP3K9n4ca4L6VqzfPncxrdVHut2snX5xVzDh9jgDtY31CPBFcfWNPY",
  "key33": "eUMaV2HsZL65w53PLT79CEjmFcr1wLJpzmhKkjNWpXVmT3evhKsLeNsAz1P9FSRB9WMD2V7riRyVdVwT7eu85fv",
  "key34": "3zEiy7kUMx2tqZyhmhDF7xTJEsrU4wo1k5wYSbvjmqjGFm1qPKQMBDMWommaGCQbRW6Zq3vHcfwg6SLSGisaNcUR",
  "key35": "jV9xS9XTL1ntRQGXw3nB3pML16fwxyLNJtG9sHzcnrQxgjEFumz71SmC1JFYdBnBYLDQTzZz8tTy8gi3ygfXBz9",
  "key36": "5MZUW4Qvfbgb6yKiVnj7sgYgQNwdTbtzTsrReJB9uSfR1sXp4o5HSEc4ZgAuzrYf9UZZQewav8vXoXwxhuG7BrMp",
  "key37": "2UnywKcx21ecnQDStexEaAiKkt5b2poZ7LFxZLrV49EXVxRaV5TJpruSdqPs6qjdNTu78UwiQCz1ryYexVZVszR5",
  "key38": "3MGvrAwtGQ3qkEeKRSE1vCZiqDAHarH1RhmG5bzKA5JhuLsicoX8Q6wxuyjTkdd8oSXkmrPEMeDYYo24U5omjaKP",
  "key39": "N245TAwFsZhpSeq6hqc3APtzM8qJ6LECKgChYrd51PJLyAN6djdPdkFngSunJE6qMUH6Sjme5AzUkgHLWhSZjWd",
  "key40": "5fFbaTW8HZqFrNLWeCuQvgZ8Dhqbb7oqE55yeDrffXNpHfgSmq1ukNLsNZvP7D12C9d8sTXpPWdToa47U6J3mptw",
  "key41": "58LnrtN5E3owiUdfCn9VyCcrxzXZjPnyVVYUoEVGqjeZo6we32WstBnp7PmtZJ7yRgbPYjjDJykcXhRx6aon5Xhj"
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
