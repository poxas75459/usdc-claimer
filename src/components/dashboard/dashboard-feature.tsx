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
    "3PoXp3cCpWvouWf8DUVik15fGCoAgoDGwSUweVZjZ6Cg9u6CTjLY5mciMrPQ71LasENeV84ycPJSfzFNDRCNWYg3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rpK4rschho1Jpp58HtxgERUPj8Q9fgeUk4hiyW2CmgW2nPiwmjJAEep4VJsXkcHS49EYEgYKfZu7FU9DwaKXbap",
  "key1": "4jrsmTTpizM4guL6z59tMJXPqwmrrG4P9mbnbrkJzM8gm4rTNvo7UmfYk46pP3FAsB7pKZA4LRGGDfedL95Lbko8",
  "key2": "2NxrgUqKi8WBCMwBPQZ6emhbXGg7YZmUG6eBeenAdQSZ14cCMgKWi8DdK8rR5VSQAVsduginPX6PuFpZJ2k3nbPP",
  "key3": "3xJpzWzbGNik7PZC4abCiKCEJM7j7KHtUiwuxSavTiNfpqRpFDsr8EroQUdN9zqHNahV6h7NKzpdPGhS8rTVxokX",
  "key4": "5ZBzgWeJAxQeeq4dWACSYXHdKdWrk3ZeVvRPF7gHa1hfXAM2298R9KAqGDEEManchr6QmiPMeBWXywQKiXqRfWS4",
  "key5": "3QyerJmRj6RU7NazK9ZYPYYBdXGufVAhBFXqwLo22Vz9nPrstcL1rSnMY1vmmp9DiPF5mBZLaxRzBNM1jpBFWz8W",
  "key6": "55jw88aRP8VjWeP3anRr27pLY2dGRm7Zom58fRE7ekPGie9rnC7Yyya4DQMon9vj3er2Pw6WHcRkoTWM5B8t85C8",
  "key7": "3ZDm5PAnVQrhdK72hyJExEEbEo1jZ1Ky8A9hRMv7MnjPrLkFYanAc3K2zMCRZFxp1kXSBGChKtnvNagAG5x3BFLR",
  "key8": "5GbRLLAGLNEk7knNmj7WsDcc7RZYQn9kjkKKPu15LsUNbNHbLdyq5nHepdq5mpKQhifCnQT26VSxEWRgUtCqdMss",
  "key9": "2pi4xfKabWMxxYdAwZGpGU1KHapFYSZ1SfoC1nCB4cCQ2m5wpZr8YrsV8vXWhb9jqkmvrE21zd5dQK8xmgsfVd1f",
  "key10": "4h8gdvQEVFU1tV4kyeB4D78mHaXP8xroA3giQonwhZyWXivp3DZabo7L8jqYGJAsiyQy6aEZ4kFxjZt9dp3vP8h4",
  "key11": "2K8HEPXLhgN9QoMLv8yxFhikrFSnDzK7QSHWSPguL8g9ck9utua7n9HWCDmu5cVADqW8SMYC26WJJ6CQdFeeuCLM",
  "key12": "tzKkZiPcUJYujwht79FfRwgRgSapUpUsTKXnzGDwySTvBVZnhocbnXb1J2T8CznS1K7htDw822xAYaF93q6mhZJ",
  "key13": "2SYzBdZPXizByiBuRKBtzrHue92RRCp1HG7jNsmNC38JH5UBUaC9gtZbCyk9fFbhY3hoc7WCQTTG9aANan3CXME8",
  "key14": "5YRrwZnDFDvQondhFypYs8Bo8BR3reNHZ4149YFbqGUN58WbxbWHXxHf9HwtZyumHH7vJMLt2qsWJfAqWJpD8QJJ",
  "key15": "53zFEpjyVKHnDuFkX4866uuTwgBrRJAwe4zq1Dwg4zuKuqJR7BAjGySma7h5HeExzJxJGDMNqE3rKTZ5G6qXCjBQ",
  "key16": "5BW1XyxP5hUWmvcfiMD41vo8eN3DA9Ja6CFsTGUdZZk3KL8UcibHAXaw28u2bq2dk2M5Dr2oDY8QDqvHDqtu6orn",
  "key17": "5ut6NCQz2znsWsQ1JNmxpQ5yF8das1tDApGcPWhMyNzrCbrADSdBEeC7Zt3jjo6CWxxtK6UfQt1BqmMopP2N8jFN",
  "key18": "m83Se1Mpf9CnWER5TzBcCRTWwUKCSr1orgGiHCY6YfoDbipHukH48Q1WM5xPBWJtANKP7pnHT7QxmadGtvZweBp",
  "key19": "2MxvvpRKX1tyTEpCAw3fkRq4jLQf9EgHWRN15TAEX2NbuqC79FVJzHiKBqrvcNdoVamG3fL3nxN1dZUmEy5PDvjQ",
  "key20": "63dmYu5XLEu2EsqNUYppP4UDU3CVJBgsXP7fktvTn1xXy9VkGgaPn3vv5exByEvZcVAu8vT8C6FtaYwfpU5iDHcZ",
  "key21": "21y6wa7817cwzn2y6sie4VztHqUvC2y2RvtzzXPpbKnubSoWvBoqbBV5iiy8oKUqn3kNX4Ykdg82upqTcR1LRVYb",
  "key22": "4HkmcKfkyxHBabubkCYnZ9h2Ek711XCTGamhtRzyXYPPc7xZMqdtHQ9TsAuSXMnPiYSXFrbD7iemYks7D4jtzzFM",
  "key23": "5SxdumMQhUggb6KEVf3QX4yi13SA8MV4iQQr26n5vpA7GhZkZrdgsPWWBC3VeYzkpRhQbHeZ9vLqwyYF532ZmpKA",
  "key24": "22Xf3PsKBchxyNcvUkSu7HJkukugZfS5bCxQNvN6yJixyKgJ4NJi2mHX1zy4vSppnPHPJomtu6XLH6Ja8AHHeES8",
  "key25": "mSXivnQzEEd8pPXENZhzo8uSTMMYcwqN8jyvC75KWKgVJK16egWQyyqVBL6Zr1hBLRXDCUKCkTvyHk855fXf6rW",
  "key26": "3uuZURmKZDTe9wCNhy5QWdo9LyBzQwmQKbnLPESdZ7T9S1G8zF8wAz9EXZ6xS1cJJpoxxR2RYQeoBLmoD1vp65j7",
  "key27": "49B86LeCbVDVSxPfRYsFvpBSpBaLE753ozYAuHEsuiGAnQViVXZpNanFE924FyogG64gAJ97ScaWFn1jLHgh8f7J",
  "key28": "gMSp3Es3pBfy5Pxz7bsDEYusmthgzesQHiQ3YCqpE6aGH7HqHebvgA3C3yZFEvEKpVUnYxV7eWdTK5LJotgiBia",
  "key29": "vNpwCNab9i9ck7RTfcLYgR8s3Ln5WHYP81eqDktty5RHKBCvJFfoqyyfuw6XhUUVVKtoefoWPAzQ4TcJbvHqnUu"
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
