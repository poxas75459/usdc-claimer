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
    "41gmQqywPyduFEiUwiA6mJc42mu1JFZagbfgh86gqesjmEY8NYcLbUTDjwdXWtgZNdLrRSs6sLskw9pc9QTNZ3CC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VHAbJ7RjLj5Z8nyN178dtYYLtabbuwWCPJkEaBBAe3A7C7jFWHdJcyR72tAcmKQXgnEcsDu49E1Mh8UcqtLeiQM",
  "key1": "2wvFr7Totf8qckgew2NUoZBQ6SmaYLBZW1QM9mFEA22iXpX2AGowAajT4brDwncWLddA51JiKaDXTG51ARz1HDFC",
  "key2": "3Y2Qj6uHa9Vt6ZqKPG9hwhRMcP4y2Tzm1Q9eEc7WQvSrh8Yda89DtbbrbyCcS1gQFiKw9pqSB3nrN7DwMEwUYiNq",
  "key3": "4icw4HMacQu6uxu9Ku39ofg6yDRaHuhVjKUBPG8ZcxRTaBceSnTNjEMc5A11wMCFr5umy3XqpbKSsNgiz8YCywxf",
  "key4": "x8YjoaS8ZEKU6DGzh842boAGC6dWpYD6qUbMXoUn7357CrC5frK7JKrcGR2xhYXff8a588vcQjD9qhJKQkzk6VY",
  "key5": "5aRS7fQ6dMr22Wiz9vX41F9YVEEgCmdBHx8ZivPYiKPkr5zYhDhYcCqeeVKCqJ4FHUuTMYrBn19PjVHD3XQ8LTti",
  "key6": "3QKzggYxmrLtWp7s8yHCSSXL7bArjqzfXkyXZmFco6WfzBcoBwssH6RGVTV4338XyKfutgeuZeweVkRczRVpxsri",
  "key7": "3wmmUKDYnuw8WRtM74fBFC9GaKsFRPpE8TwyNrAbMZQEA5wbUP2tQqg4N3MGj1qERqRT3DEsnZ96vFKSTxVLZYxG",
  "key8": "MuvbsAQL5tqC4Pv6B5aoQ8Dx1C94gY4T4ZyWruCNQ3NGEGN3bSSCa3sZEaHyt3xc3krNv8umG1pqPxdHUq7vSwa",
  "key9": "4uPxAHLfQ9TkdStVVvJPm3PF76DNScSWvifuJ1sVSGXXpnHdR1qwAv7NhKKvXB5CSPdgq5sdVP65HTKt6pCrwxWF",
  "key10": "3PxFYTbNaLVZisMiJSx8EJrxYYvX69sarBqyAGHpjYt1mCUSjarTb7ZUL94qarN44FW341J5S6uTVDdEzTHNKZa1",
  "key11": "2tsT5faCCbcXFa7tz7ULq53rpzKcVgGrQkioAZhW4uKe3c8J92aP5ScwXTCKv1JU4qjSuaPCkQZJdh2UEMM2dAng",
  "key12": "5MLbQ6SAtMuDmsghRZQHqNdw98sjLxNzww5Rx8cvEX1ETCUxzSf47fur5Ctu9Ch4uR2q1iZrk9zPi8hprbRx8Mk6",
  "key13": "48FuTvuoqW5bBzgd7s9MQBDFZa16VUsHnzziJAJNU24h2ohKQgoT6FBG1og8vjyc5kdhFKPkvxa4SQdxcnUw3PnN",
  "key14": "5a1ftqASJXgz3SvCh1tpt8SFmhKpXpxrh1jWswnFMyQaeZsM4PYNRqjzH2sJiHgGL5foRdTV52wMjSeQH9uvPsQH",
  "key15": "5wuWRRyXK7Ey3baZrT54XEJAqVSmpXS32FGRtw2MtgS9qcJtBxjMQH28Qy7zVGATSFBnTqyvZzBLVDsx1wUSyFYy",
  "key16": "5GiwzRaRDHr1TqphoDVZMEdsvmbwjWcNCUZ8F8mU1TVKQvWiBUpvjXy3KU3KJPF546iKTNtMjrncGoTP3NCknUuJ",
  "key17": "4zNq3HqeRdiTdWTpEvhENB91vV2mh3S1JD2iSZDkjznfet8Aq1PMNupvZF2P4do81wF3oVnsxdVapTvRyPYJUgAV",
  "key18": "2DMFZtFYDbaTfvfWuSqDs3jNn5DRwaNsffHm1ckDJyb87RttDJVKCGyc8HqMGEvRCnEwiC8k5Mxp6kLG1QPnto8w",
  "key19": "GnFdRS3cDHm8b9QpnY8pZkc23sPWem2H6fBheLmTog5F2JupHihmGAuMPaUS5M1X1chCgNF1jS5uUJ1uEi173gv",
  "key20": "9xQaRdonRwjnpFb5DQ6XLtoTxTi45UzRrD9D7vw5bAW8zPn753WLir6SE4DPAHiTLxRyXoooYrUdGYSzmL9bAw4",
  "key21": "4sGSHWyZNpq9TCopvAfKHTzNEjursSYVuFwADLRYmR4jRqjaSQGz6fyrDnZTLKa1AEeuVRSMnJucK3sGMjioQZSa",
  "key22": "2MexWbybepe6tt7xLiTZp5imZrzHyAbNRPcFnftZfmwB6ikqpqSNMcHB5ngYeyxQiaf7rbyaRCrfvgXTRZtMpV3b",
  "key23": "4Vb4Yuo7UNKdAW8Vx9ajPZ3zX5EcxDhdNNm9Q9xkdFiZq38KNDC5Drq8PmhdsjJtSYxmMcgfuJzDQZh7Dsh3JnoX",
  "key24": "4kSux58Hce6AN4LZhgbU93HELJiQHiSrq8YJ58rgQejQJqiiUzVMZo1oheq52Xij8pB75NtTKjAK71kk4id7gCD1",
  "key25": "5ppA4PcHp8sJB9uNYY6KjtUKYU4Yb2renthk7G3xtvky8gY9D9pt7ArDtSSw1gCajcdD8u86XNuwDCAdgLgE7fTY",
  "key26": "52o5Lisiigz9hfwvfrkMKFUaKqJGgpWunSBYh1ETTwzWDAQBgyeCmQKS4YZPrQepUvqiVroTCnqBbYc7bEUV57Qh",
  "key27": "JsErmEcRpsSNYL5vCQLtu2LKeQ9884f88213QK7n3tY61Xs5ebdNyuVK6j7yw6MKxq8ANoErmaco11AdGpqajFz"
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
