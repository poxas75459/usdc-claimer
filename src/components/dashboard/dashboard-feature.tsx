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
    "49rHSybub3AjMrdX7pZKVpZ6NxXuefghWW3EKGNFmB99qrwkzDmuae9ZBPMf6rz4NxW9EenYrpfosfUpcydJc6Pp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zj9wU7LsjEemcHEge7XvnuNcYwR2stt1RfqFMB4wKCqbc5kwPife5MaAnzz7EDzeUyWwCvjdkzfiq4ojB16DVb9",
  "key1": "4GDXU3Sa7f9BinFvx2CtaoE4gPKuvrXAJd9QiFS5XxV4TyVazxxpbSNZuRbpdueNKAF2THSoYCEhTZpBXzTf6HwL",
  "key2": "2Xg7J9KDWPUPZt943eRNQkWCdzMNyGndykBjazFrqAjbNThA9UP1jfkUGeGvy7SZhWTUpqDa9fd7fBF5XpAf19ZH",
  "key3": "3Hna2XP3JQA9kCoDe8F2Z6MiraY4da8akFU7aPSS4uuw97sVm4GAb9i83xPJRe4LGjhfB9cmu1caDftcHgeirXw4",
  "key4": "5A9VQhnFnhfT8WKeetTFYT721ULQ5B9cTRqGSzpmpdxH7fXkUrTvWy3WXjCWW9G1m3GU2r3cnSFDhMHuoH1hecaY",
  "key5": "dp6RcbiJiFJUx6hZcjBJoMNpzt4UFkGTVbtaJs5qpZe9ZPi1YA1yh7tjUnFhLSVaxWorC1YJtRfRsgCqSYr1dFj",
  "key6": "2QtARTvFaNW96UbaUxLPnqoaxBfCsuNBGUM8mmeQWshn6sYA6pZHry6YDi36HqKD4x2rTT8DkhAVSsYJjsP8Jx72",
  "key7": "2R7qLAp3Yqw9z2aKmSk4Pue1aQSB8cpv87vxrERqCwuntqWXNY6SLsaELYt23hEJuxE9buz6R3UVipY1KzNduxMF",
  "key8": "5RxfwLuVzYHXwqyKQpAGdgafsh8A3a9D7SnsrvXYGb7CMok7S5vJhLxmmjtETFUzceYgo5pqrrnaQDYkxqs1EyWT",
  "key9": "4wryyAuE6PqCskBL5614FSjU9dPMegx2S9Yv8RV7ARUswDoAn6xjF9uTN1N5jCix8i3s96jNNUv4hDXPJET63YG8",
  "key10": "2i1yuBHKeBqzDQqAX1yXkeEtPSQvCkrXpjzFWd2fgBoZvkJWT5sa9PgU91LTwAtERaw6yVU3BUWYvUs7dCcjMNHM",
  "key11": "5Uc7DHD6qrdLxGxjAoL23nVBbYy7hc7iDRfshjBybYUaPHRFTXvA8ytD6rt1Zu9D5qq6JRnk7UunTCbyeAkbjAch",
  "key12": "5aGXASbNwwR6MWBe58twSJm9FTJwnPNTz1mzzNqDT4cvCSoJJWKTiwU3nDSvyjW2ut2HJ4RK37s1oTAJsicwJpjt",
  "key13": "m85yeU7YGEgibpYWWjswnbofWp2BWPiQg4KMWPJ2UDU7CTL9aCAFFDGXkQCKjAj4GxjLpVeWg9My8tcn5e3C3YW",
  "key14": "4EVkDLdTWWn3g8pFzN5s1AEPw2iZ2CDfFxbCEuBXur7VBv8EqLnBfoBXLLqdcVESSMDtEzt88BQhhNuz4VGDvPi9",
  "key15": "3vpmjpLax9BELmNQReAX8EGXpwLSJi6C1k1VYXQbDBBef4TwSo25exuCw5Xn75dTQNQFXK7FdswgwPAcATdkePCo",
  "key16": "5FpdmEwMX9QxtnKZ5X4DujVBecq1epG85U7QaWjRBinmGWuYgsY9UUxumt8WMRyjchPf22dqs9d1eF3bP3D8StNc",
  "key17": "4d9sQ24qMPYgauxho64VRJFd6JhZmArHFZ2bsfg6iY4te1ppr1vHTzXGo2KqHSnrwRgPrFxxdRVANMTRXvJrM3R1",
  "key18": "3BKsqBD4EekhxzQwNmTJUwKzXfpRcDSW1J9oMW1PtZvvEtHYYgiK8jZdLXpv4tnxhkN6xhbtSBrjoXu73Tf2KMYG",
  "key19": "5jdQj5xAXB9pGBE6skkmZmcte1qdhyiMhsjp68V6Cf1kUH9HT1Xpix8XWEE12UvKRdabvPRAVLwbycgkTZC54ZBJ",
  "key20": "qVkqjbY9LcENmAoo6CztJzVfXzGhCLBUWqh4eTFn3PjhqWvGzTscyScxujaEuNaDiWL9jF2hEESJ6Msoh7ozG1p",
  "key21": "4Gj8Mux5dmM7eNDU9awsR517zPbjNkt1KHmEFZTw1d2Uoh5YZmTZnd9VBaFRa2PXsp3xeMvRuu4BFykbb7wZvdop",
  "key22": "em8UsQyKMzVCbz71xt1BbuSwjMeLGi8sqqvqpgFFjVZ1giRpnXRjvZgBPe7RjmuFpLmyUNf6GM6djE9E2Qky3rH",
  "key23": "5qgtKeka7HbcGC9xRhQPfaoSqJSgBRBgxRv94NRLPjFVxCP59W4iibnuPfq5zDpeDf8kGBh9cKcSPyhRvr8o3kSX",
  "key24": "5U8Yn39LtArs7fT9EWGNwBtF9pxo6TJdx7GUsiN4bGbVfG2kFvVanHHCB14FbCD6XqujaKN8eNMhtmc5HT7YWC7y",
  "key25": "4H2TNJgbpGzx32EHpPRpcdjm7X7pbkqo64fYLRY3gWRcZPfaKJzMaQ8ixLzKqy7kzkydU2UUMw4FoqDgosNb2NSw",
  "key26": "38h1To4ysg3JYjGuayJv9v78RDZTQ6wHHnvmcN283jvh15dEcW8cUgBvnezivouYgsPm2Urmw1ZsbUTbiujk7UYt",
  "key27": "5nGpG9yv1UpVMXS7VF5s7tth6j1twjwYj5TBftACWc6RU8tB7EohSniAL6peFc6kiNSZNsChHN6mmBxf6fGG5kzC",
  "key28": "UsS7X8Lzd785VamixX8kWUEvikc7kXWKds1d7RnrqTDPdvRG5kEtyewpYXsxSnVEnSeAyiSfqramBQ92mTP2nGJ",
  "key29": "J4ZCPEmKW8iBhkr3H4UXzWGJyaffUdDt1jhuCdyW4Wgmz75xzJzU24brLG1tBo3AMiTWscM5PR6uLafj99B4Etv"
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
