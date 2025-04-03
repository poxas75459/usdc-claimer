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
    "3QCqpvr3BYoeNGaCeL4mhPHtA9jzv787auXegnNA7uCBDWP4k3Kv53PchLgW3TxMtPzgKACSCJoR82uUmsG7thzm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KunZ24VtdqQVWm7my4yfoMT3u7Kpv5VLyqwscXJprQrxfyKLFFVqsBteygR8ynGo8aizqworeBKtgH1nWsDfdxK",
  "key1": "KA9CZqyZuD6ppoGpzLULteepKZXo7uyuBZLKXLE8qg5ECXc5sq95fMvRM3B1pokUaVQNU17FK2Fgsq8Tgj8WKMP",
  "key2": "R1o5bwaS8av6xmd6dQXLp4cj4X3gMTVwFktsRC4kdWcPbwi3su7fVNXxPieQg27hGRxmjykvWQHzr3wyng8RPaj",
  "key3": "GuGHPHZQNQukHpT3jJk3kJJ9sNxA14bZUqbyBi9oV663XTW5JmrW1M8ZY4nZAs8uo82KYnEE4yUyma8Hx8JwLcH",
  "key4": "5Gcy9B4YZZG6SLmPBVBqnmYbwSLhqiVtWe7eFrLG35Tw8W5Fou34PA7oQeBi6vLvbwDuJKKRDKyBPa34PYPBnbqz",
  "key5": "5gFMMiDuwtUa8ndbbtC719XHHVwrTq8FWYCc78ox7VpvSjeQJFoTsh1ghdUkdhueWgYzCdAyQdFGp49LARaEswwx",
  "key6": "5zghRgqYzEUEYgh8RurY6MVpJrTQWJpoFYTstoAb1eHxiv7aL1zBhjsceSgHKyBChmMXiRcjtRPv2syHVL4SksNd",
  "key7": "BEdE7USC9fHcQrq8JeAFnRUYs83CbnCYfHF99W5Y5x26vggvFhw99Ez1v7rU1ttACGDqR8MpbS4H81Y6LdDv7A2",
  "key8": "4XMB3NHKjscXNLphQGeTXfprZQ4aGtYWcZBCNKfhqkUM4L29uR5MhbnUQPSBBk6uwh4mgndvwUrGBSFQ4hPG1W2x",
  "key9": "3vx37wrBxXPdEyPnodDxVqnmwNRVWA8D6hJxvgLLLhkhTcjt66DKGep3rDdTiurUMCndkwoTBm5H4XShSYkNCQkG",
  "key10": "5apTLDh1ZPLw3SDCyEnA99yEwNDwhLgqHuvwBfqUGdYzc2uMoXSR9fAKRMgWnZL3MW8gtQmaDfTRFy9jeo9PreB2",
  "key11": "5q4ubMP7sbGWRUEoVQ2ofuxWwgaF9haZN6Rrms15VjSzYwFjYN7RSmvU3CHNJz4EUcAa9benP5WhzZ52cLVcdQX8",
  "key12": "4sNUcyAgRrHoDvdvnDAkyM6tGquJuyoHyoT2RVKdoqi6xAgsK5jfmXcqQpFyg1AsMxRVdLjhFHqhoaASvx7oVTes",
  "key13": "MKnEBjuHGJzPV4vQSdQkK3D6c8phXaamUpmNKcAx17WrnMVphhCcuwgVcVE7FbSwSYqwdtupaETG4mDhLaBiDRF",
  "key14": "2WwxHTT7awGTzy4nfd9TqtVDxqgctGB6zqBBkpUoGtGXNJJVB1oejdnRVhpWYkqQsBJzPKJpe9Ri8pmWikH4eWXd",
  "key15": "2qvCs3FDmxCetWqtD8k7B9LUE1TvXwZcSA8CbujYDUZMJWUT6ZbZXxyQUkdVuiZSvRCcbapcMZBYH5MQVdnctbaz",
  "key16": "642FLpagmnwkDJPEbQotuvogr7UjjnWtR5jtkTNE6KeknFvoci57VXR6AzYoKqke2dKTaowVGM8G3SgmvdRXgnSY",
  "key17": "4iiHxAG9dey1qonQkPxPxycZ5iCjHS8z6pC1HYtsLvnbvotq6Wky1DwLuXvektnrF9by8aPJwu3X84HfRFkdgBrk",
  "key18": "4j5Ktq3R1ymEBzhKdPxZh4XqHsAmRsZZ35UHStiEjoQpdpLtVSFtaUJjAPFZutSCbA1mtbWhNCxumr2usRKErvW6",
  "key19": "2NYLug3da2An456L4WRqjJe59YEkwFPqUaWRNFgrBfPhSAkahBMyJxFg4nGpsCnrmGuKqD3xufFgwzdydfZeGqvn",
  "key20": "gCnsZRoFhFyj3JcBLanYHTeqXewm3t4sLKSMnMT17DU35pVPtou5J9nD6CbeUX1rvMA1P679PzGqDXMknV3oATm",
  "key21": "2ckYwutoWnyuiubxLCbUTKQ4PhEUJsTkTBeGDANeZZ3U8pSZb46uHCcE7zPpunxVy8eBUw14AaqiVRHd9nPXTmVs",
  "key22": "4WJyt8LikbN4713UQqwc9k7V8f9M1yTpeXZJLTT5yUN9P7WziCiV65RGtvZgoAK8naZkPFikrp8FtE6dSLy4CYgj",
  "key23": "2tWG8fsYTNHz9f947CFNxowtC5vAZE9EuTtv1agYUV4jcYEP6qLGiiBCbuM5moMakVptJbPR5fJm8hB5HzYkyYP2",
  "key24": "fR31Zz6iMdwNGW2HJxG6zXMnrTiAha44drM2QUP19SyYwNsYhuCJYrGVMLSggz5mX9SVFDk5w74P72K15ZwBj9G",
  "key25": "4fehob4sBzgfTVsdXd8CBqBkGXonVXMUtjVrHpa2DH5MxGzozye1aPzbKWs8MAaT6LefdW9igu5kGBAZiZAoqdbJ",
  "key26": "5A3hcULRMJh2rVssfuVjRnynNWoDzJMqck8iMkrneHaTisATWKGjDxkzjtZUxEaQ2UjYtjffh9AmEBcEzMEJmh96",
  "key27": "QESrrKx51n6s1dpjmkeqyHvDU7oieVrge9Ssnmp55psiKR4wCEd59bck3h86kVWUf6w1yksEWNvj2PT6fbdtduZ",
  "key28": "44hF3nvZyj2yL9JMZk7QVaviof5m7PtFJoAX5ZKKo9de1VQxeyTU8zb5xRCZdu6S97EFGNKdMFPtaJBADiQr7bvV",
  "key29": "66umd2TTamUUumNa1jhQJoSxZBwNAmen7gV2r7GG7U4Jjn6CQhfKCbtVfD4Av3poSvhmtctwcaRjFEPTeqhrfd4p",
  "key30": "5zwa1DJXP6JEJZiJekNbS2fGRWMKnrkFYd9fdeP7W284WFgmP9FYgxMPPkVNqpk6xZW5nxaTTGBFukdQ9A2DdEsD",
  "key31": "2SgUz9zAcnqv2dtV5n2c1zov2KnH7ueAUsHqcH6MPigexxBB5t9v8NN7xUiQtBKya2JQL3v98dQDFHrwBEChNUHT",
  "key32": "2EGt9oZt2SyXvb2cnL2RUaZnGdtXjqYWMQyMDYGgdRYWugrkKtWSa89RLpMutqwtotAYzeWV6qnyyebjPWGmV5jq",
  "key33": "3En962j4971BzHf8zsGwE6KkTLjhFmX639WHhVD73nnVU7nmveKz4PUgGved4dqdPJSVHqki9YnVcsj9isBZmkaV",
  "key34": "5kDhR2EdsRxapLFToPtSqVxgTwTYA189LBFii334XuWGqtZE4vbeWALeojtbZ61ahJzj8LboDyBQqwPwvWqXJ57e",
  "key35": "jqBZHnyFRAd6x4b8RwCy2v449USb7izk93XAmai11jGBK5FEvvK3W1grNivjXfHoRpBfQjmgsjrk9qU8eurEKoi",
  "key36": "57sZcgk8oy4evoksiH1o38ehQ78kn3VurLYJTyZsTE7TV2rZi5ps3TFVtdp3yhBiW6Wje8pPrnNiZZe1ZZqVGBvD",
  "key37": "51Hvzpj6eQj4mD4wRywMRbKoXfsALgCaLxUKezZqQbW4cS6GMXhqgC6bF5YdcHV61QLFLWM5mHEKDBtdtTKiqDBV",
  "key38": "5KJ1zyiEgxAQ1CrwLrTjPrukgSfmqEX5vHPQtjeFvmVc8vBGKMf4VnkvgmW8kwdgYFRkbQ9Xwrkm2iw18m5ZrmrQ",
  "key39": "51G6hBuWxK5pKQEKDNX2DCHzqU44E1MLhuyfSkHpixDixjXWsungjkdftnCTphgJp411Tce3DZrywmNJ9ZUkXHnB",
  "key40": "5NEPosxj1eVdZvM3HKYjozYo1iUrV2dszAeSouxyhRDt72JAGTvuJNSSmx2GyUzi1dqVpNziAJ7y3jUJD95kTsWK",
  "key41": "5T2hzt8KjpbqhukEn3HC4jxnVEhbNDjraefuXt69ihyB45N8qturhNTDssXM93pWWUaRtCG5yCSRDv8G2hZjtG8H",
  "key42": "3bvwT5UV6rArwmiXSeA1ZKK3RDskSi8fsgoAduvr2RUYhFPteLHz53JA2uacdxp8XgNubCeMoeJFFt3jRS3KeqYG"
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
