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
    "65GGuNsBa4oWUzX32pRdFEXb2SL23hcXPErjAcvfUqBZ954JWeQgZm3aoCaMvvX2oaXq2NT8QARB2tmzN4LoBuCE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "APUBT8gqbpspsunaZbWiczNKJCkK6DxTDpD51Ejz85jjZoN4RLnR2v5eK8FX4DW2t9dszxEtzBwbwnsi5JNja2H",
  "key1": "5293KRUewyVN3VtmuAjMFMNAU47ucEKxWt2nFAmE6Ut1gJhgDYHNkZqXsL4Qpgur8eBXbeCX7MR8VZmLocHWUoV5",
  "key2": "5tXPqovkkqL69ZW2dgrMZciX25KJnDZ12VryW6SsSpKaktgVLinaRKZnhRbruRcs8ehZuDN8RosUvsKinUPn2KD8",
  "key3": "3AML6T8j5QYkcyo3ZXWPUX7Ci2BJQSAb1ZhsW2Wd54gtnYGoHVyfQXEzoGcaJhevF7SjgWXfCosWwVhqFUM8E8Q5",
  "key4": "4KySoCZgi8PrzgprpRkauahmbF66CzoqQekxCgUiA4t3c5xA7BjHG9mJzQvYPMS4sNZEHT5bvUZWmaeQB1A2yVDn",
  "key5": "3F6C1q4zgp2NeFwD3JS5ybCuu1PDN2mgRnHfUk2VMoBvAzBinU3R7yyZTh3QubXBFv1NwicHsdPtWm28njzFWHXn",
  "key6": "3euvoPKkKynS4L3Gw3tB9JcgD2vppmdZQQ5C5BAwd6FtxqvYuLFs5qksnJhqvg9GH7aH1wvwHshamJzv7wrXWE9j",
  "key7": "AUGuN5iPohKWrPBm3qmJcGV4ESEj76myMord2XpuC1LZD1JVP1LUeg6hVoinQA9tq6W3afxh8LuVkg6ifPeWqfo",
  "key8": "4hJqKGo7zGrq77rfkW6vwPcnVHFixXJeRtKAu2QZHhEY97ZXcw1waDE9mkYyDz7asajbzZ2isTHmrxkCNpPJZRre",
  "key9": "b4kkEGGNw5GuGbrdMzXkkynjBLdYKSViBS9o4PNKigvzDPCvY6qEkBE4wwtFP1J5eTVt7vm7q9dWnBx4WxBvFu1",
  "key10": "24JdFF7QaB1L4tZu8wfq3d5Ki1TfsVXk2zxMvjH4xq4MtzJBDyVKsdxaeHqBJh5dybq6HzxzjgrUYrADDRFxCjGS",
  "key11": "dZkpPBfnCLx5tkqEx4JNcaNQarjUwveMYTJnVC7St38cdzTHA8kqVaEwrKmoqxkVHCPtEzFR9hWWwsfQdsgKCD8",
  "key12": "Pzfj8DFc9Ww2Y9aYFvPX7qH8wg3oYMhav2gxLSrApWbw2V4caXvvQyy5TUxQMqw8CTFVxU71VJw46px1eqoFbhL",
  "key13": "3RWFhVej9Y7tJW335JShozDrZjpfm9PDKpwYoNugRuoxVPbvGxGG3WZg7yiwg2q82qohwvytwnquLPoKT9YW89Po",
  "key14": "4hLQgQ654D9cs2gDbKCNkWdXeCqFn4auxHGtKLuiuzRBDa5a7icYpML4vWjVgCcvRebppiqoU1VeUgpoBKp1h8cF",
  "key15": "3nEBHdsstSq2exTxWf7fLYAoCpXds8yK1VQTVFWG6moMQUUNRD1d6q3vkQSi9jbUdYsktLd6fQevjWUrJ2obcBRi",
  "key16": "32B1Y75H8Y5sf2wmnPSUhAzaEy5LN1FNdnYZS8HqUzXza2VDj2cqgJY3gAesNAf4NVrZh6kxCobsEgEjeDbs44RJ",
  "key17": "61Pd336zcWBDDvtFqox1YZRSX441ANKo2NZd6S6H99wgknWvwBgMHriH6MXpGPCvAJHFZ8S21ohwwcpoz1din56H",
  "key18": "hPicfFyVKS4d4KX2RYervQBormCeojFWTSBZusym89dXqKYe2REbH4JsisxVWjW297VX5jScH2qwojDFRM8BzH8",
  "key19": "66RxkEmEBvXHrQmUPrmZYzaXGU9C6duqqk1oz3qvQ1qTtAwUNyyMz84xjjP5CV9ygwGrSJLzNJnzSMx9vZc1Q2dS",
  "key20": "2RiaG1qPRvPbKxeVrJEqrf2E48oZCSDnw9xxG3HSUfuAGX2wgkt3T2fjUV8ur5CoBHwwwr7zVYkQAnrLm3RB3hhb",
  "key21": "3ZKbEADpuPc4FQyhzpV9m7AcAgoNtcJBaGhMFBYKwN9BzjbmsdKQj9iVtrd58uPgPvPA4oGzAYZ74ycSW3BE5DNd",
  "key22": "4cBNCmWNMUMjoTuJw5YEMJ2EfHit6AzKYJXuiUQ4Lg25GcWcTtXY8AMpGidXuRNnMExacrxJveLvqHwsNfN4jMC6",
  "key23": "4v1XgtwjWvZJD33W2m6UhaGpyJKBAdCmsTpRpoGwqbUddgg9TcjkBXmktmWoMPYFGzStBEX4LKaogfDpHD7kF5Eh",
  "key24": "342r4V3upVUfcKNyBbBqyQ1MEBTv1VdV5QvsqxdUfDJQf2FgvvccFR7qEtF7LJZ1SEsV7vND8GC3cjqx4s9WQoa3",
  "key25": "2QiPn35HGpf9W7XZxei6pRYxGEz6KprKjLhPaj4DYfT6wcw3RKhcYMHsPbtdwbKqhDuZ6mrK16vgJ9bBbhh4trbW",
  "key26": "5b3QEeRAf1vGBnGuJdYf12x4K5KnG8GHg9j6ttzwxjNzAHTSwFsT81MsDjx8LHQafmtGM8K37wfLkDBqjXWdvT2d",
  "key27": "3tefkLrMdR9s63HjWABBsLy1twKRm115PbpSKKDhYjMC8T2hXhQFhRJEJG9jsaC1gceh2QZARFzhPxeqembA5yB7",
  "key28": "zBohd4nqJYKXcR3cZuZmgXmZMe8sLjLk5hPYgD51YUQgkiuxJ9EdQdirUKcqpGU7B1WmXqenxX3E1ZVqkPvbWdM",
  "key29": "4VZswF7Sh8vZfeG1WdrusA9AxVozcCtya3APsrXszLV32vGMirGBetzi2vgNZXjWm63pAcRVqCB2hAvVTDKoeHgw",
  "key30": "5xTuFWq9gw5jKmjFo7rLY1F74hf3ZmxRzN47ojcueti21BzTGMiz4dhDonLZRpewpSa5enpYR9sr2f65HDfFKnct",
  "key31": "58vpdZPXZ4jfuVZmy5yy1yDwDcsQ7jMrZW95GNCX9u9Z9hYxvx5f2Dodf1cpwpyL1Eu8zoFEBjt2VPcRSJd9oyvX",
  "key32": "4PDP47ycdJrKvB3DMwhU59PJ1nU5E3K51ihMkFpC1w1WCriTLciHzfstUWdH2Xzf4R8EJCyJdkrdefR5oPCAAkWo",
  "key33": "2djhnRNrsZQZsPRo6kT4Te6cEciMjk5GarVSeM7KbLpCrS2fZ5f7M4LNDtwCuJLCv8zYyy9qNkjq17vGbQidXH7Q",
  "key34": "66r8jxZBG5bULSPVKwxRUcwKF6cAkm54o5TZATHgL4LEEjEUGdBHkA8Bx81LUE44QpMLpUtxpTh8NSHMX98ByRES"
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
