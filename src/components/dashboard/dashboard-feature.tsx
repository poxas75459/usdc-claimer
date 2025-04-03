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
    "4x1PXGZu5rjXi9Bx4BchzSm6KQLSebUJt2vS8UrDhepQcLNABGdh6swptjZ6pSmH3yj6KCLNUJouZ8ccZtPR2rub"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Tc9dBnZvBiFXP9fsW6hgTjSHUNxPTEpt8BKeadXHcqULKtKq1oeF77LuwBXLYeXg8uyjbdJksMnD7XZHfvQHA2F",
  "key1": "47Xye5rNRaFpe9pwMaatCqeiqXkFmWvm7gQbcKW2WxWvv2uu3JDPZf7WkJKMjwn8zgJQ8TgNPBM37kTtYXZcm73S",
  "key2": "2XLErJcgkJbMnxQA4S4j7Fayw5TN1nh8vu39Dgot8iGPYq8dWJkPdhjAJoFNkck1UkQavqLoDoTBie9FNDcXjf6G",
  "key3": "Y1sCcabSDawMM5EgSLJgagqBhnmapvDezEA13p1SPtHzPEiQQXzzsaJFbDeStcBRpGGxpWYgBBC8nB13wCakRYd",
  "key4": "h6PpVCSfHnAC3AmbyL9A5jqYigDkAfCQH1vWpHEjs7ZHBBEYHXXLxXiZvr6S4Er4fUEKf426SLFwdaUeTN5fFYf",
  "key5": "5vkyjq7Dy7njKnKB68jJPNNjDGss1uSFsRHvkS78AZWJgGzcGhEnxCyDrvhFJi6eRigdSQUdodipQzkY419PtBUV",
  "key6": "5DNjV5AdWu8YVeFtXa91hN7dvPttjHgLgL6NDJR4gfQi7wGVZHwNgAQrYcJNzKcr73o3saw7qrwKewDF8vxY9dm8",
  "key7": "vjWxioPmWeHxpuMpMJnVzKU4vQnab5hzPK4gvopkoHyJV1FyVXWnSbuZSUK4ZQpwDxHPqhLtZZKj6cYY8pmrc4B",
  "key8": "Qry1dnverFfWPrQWXg8carzP4BnF1LrHqmTxmXKe3xgxx7vvuUfSUZCHy9GhNR5ny3jGjKPfPaWHBX4NJZHMGuD",
  "key9": "2NrriuPt6y1qoYHbiJC5r1bB31yY6kWcxAS7FjG4US4MiNaJNJK6eoFHcFH71ZXLxCoaC3eqDYWpUcbH36mLAJ9d",
  "key10": "2tXqEG7pgZX9u7Y3H8BpXVZasGz8qkAFz7omGoaU1GGYrUDe1hqQ2dhfVX9hrUQNbp9fbJuGyvUnC652RAxHMdb7",
  "key11": "7bBo2mYhGYivJ69RCpvZTd8eV975Y93fqoUBWp7Dj5nzPo67dN1QnNoj8fWVPn5ztRYqoJfKd6i8kYniwBV6Am4",
  "key12": "29YeKvvBwYSQtMxxto8hQpetHF4kebhcy3UNRneDZZLzsGkj1D95YqA3VqaHBDh9dmKgLCFZ5oJKSKgBw9p9LGar",
  "key13": "3VmCrZASgt9cqQQMRMMWwK81kpFE2YjwasmPy7qcDctzoFnSENhRXP25LTMJeWv6MCBrrHqDVF6R9UJsVWLkSYw",
  "key14": "2xjhnbt9sM9nitpMoYHp8rcd8jXg7kHNpGm2Kq9iDGyedaEuT8DtaK5pYNhMUMyPmNi5H7ir7THhN5uoSjMyvjbh",
  "key15": "4cvYjKkFoJnAmy2mBuTTbBuk17Hirbtt79aojZj4xP6dCRjdVM3yiSFAwgdztNje95dZT1MRGSNVtigzDKPHYmtx",
  "key16": "5ei6vYwQx4Bjxzqv9RF9EaSNAney8yPHKqGYHbHpF6C3WJ17djUjtTepaCskcczcnXTXT59hWk5A3ykcEDip5APM",
  "key17": "4fcrfVfvKryYvToFchXRPST8vYvvaNPjEHPcXqUppHWaoSx7aTLdCdycXGPxy38Nfo47fLdCoxDFPRXtMbgN8QTv",
  "key18": "2ZAdFGjr9mwYHeANN6ov4aAX4ZxLkRdJpKbjnAecKAB1k9JZTMQQVygQE7va83qMMfwDsKA8GwCfM9JX6NgNBsrM",
  "key19": "4CbXHLay8oezjhSi7zoYwNdTAGYwbziPQ1h37RQJ32wE2idxeVqeqtyVtree6Wi9aCx9pK9YeeeTpg6P8Wkn1d1K",
  "key20": "44237XExBrMvrVyhRm5sxnXUo62E6imvZgi627vBPTZzubAXSN9Fr5DsRKPNmqEKLVwNKUe7We7ciF774RP57YdN",
  "key21": "5bMc5sXyrfFE2w3GwsyQkdb1H81YQnbovi2D1VKka4ipVArzLJRTwhZJQkRC6EETfWKk5MncotifHUy7XWZzF5E2",
  "key22": "2pd8kBUXuAYGjNbxEY1cBzKkG5qh5s6ninJSYSph51ZJdxNiYe7j4xTQSW1F9R8FtZ2E3QeP5p4yAsPw9wEqYQ8s",
  "key23": "5ER6o1evkTacvk8N6H3svm5FtisDR7s7eXA1qJ7YeaFjJQ34Kwfy7yV9R63o12Q9Vbu78qF3oa1KJu21z4Psr4gA",
  "key24": "5LnYNHs7CDkpTf8XSSU5cCcrfB9UdEirenX1igygXBpGHvAF68dALcwxZevx3MuudAoCuedHZrp2QMXQBZWtgLxU",
  "key25": "3STWmGmNd1n1QBc2CoXjvNvq1Tv2rfhAYSEkBv5uUdxfSYpMorcE5kcHG39kyB8QhDrivZsbYJsj7TypXrZtA2sN"
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
