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
    "64W2ddJHCnj4oJSjin9NcUDx47Cwfa7B6VQSffzsBrhu1ogHhS6BTRjuayFbnGwPsCnHPASHJkQPyKWQdV5JVcPn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62RvgCTRQBycB99Jov3tvNW7XWj8FYFxsPqP7aLM51jsbU3tVznSAGY3MTaEExxTTv6WVZsGKzgy2x3emKqafoK",
  "key1": "bi8dTGBcp9o7dvs2E33icbzNStnLveGTzZsPYyJbaH5Pj8UNS685okTi48XwWpbbqrzzp561USTzyHwuCbE92Rc",
  "key2": "5uTpHwYmBUfjMSG7eLKWiPCfDDKqBnPE9f3Ysy7YB9mqUdajLQ2HvC6urCpafF4pzVon5EwEt612UBf9UNhBvnZN",
  "key3": "63wK2FHgfjetNEFciU57w57ZvE6cwNqSAa5gqLzZqgKx8pjUxMufFhY8ypVyLA5hLJdXP6kkZTJHDKFZ1rLWoybU",
  "key4": "5xWnCcZWLDaQGdEQtaP5Xdh1ADMAF3saBsDbFMKMt8m2twMbHUBsZ949HaA8nCsT1rhHFZLZZZ8xRt9JU75f5wtL",
  "key5": "5wMsLBakL9r933veyhxPC9LxAdCVBGrQ7HmqugqtQo1wkP9r3AS6SteERjLsFbLbNia82MtmxRaimdXBsB6rtVmz",
  "key6": "4qaVL5fMo6XdxpUMmsBmsAjcQnk4tFczwgQb4FxbVH4PbCfHLLBvtSQZhf5bTuc3ofafrSx2wP2HQu8XxLPv41QB",
  "key7": "5xcWRju7fZNC2jW8jkAJvDVp8k4yXHdkW8uTcaRz1w3cutaM8D5S2QrMWyGFpQUkrXQPKpnj6NFquBuUD3LsjucN",
  "key8": "3oTtyng9Evyb9146EjwS9F4DAAHnsS32uAPKKXXkcTH1rpvc3yAAUat5LK5e8tSKwyKhT2yiF58AjRZgS2txaPc6",
  "key9": "4WpPLeDKgt6w9FZTpSXE3P5grTCrYupPPhEeHVtq6UNAAkxxM7Bs7BNuZ5dPsJzVEY4QMVbpymp1rBVZuTvyvNDR",
  "key10": "4ihKcS5Lk2QztagbPQCJRSk26uzdCb9zkaXdDJqNdBJDHGwJ3KTYrrFyP9JTn4t99misA1uvDtuvYcfZrEAcxgy6",
  "key11": "4FrKSq7nyPFymtr2E9KcDZH6EE2DPmdbZz8egrvDArTYALZNo5r1KXtYm23Tunjg93kgfVG6UvsyWgu8ArZn75Xr",
  "key12": "4mBeAnA3GRSVQ1iCcP4YzwwtpL1MGjE1Jz6mHMHfmEysxsEauWLDbgMnZQRTVPx3sQw9DCu5WLaorLqinod8Rixg",
  "key13": "2toiNtgUpDeZxjCgJja8rUGq3Avadf3g4Pph8a8a23T7GhVJQa5eZNC7bT7ifeAEuhUfLgq2qpuSpZzyhuR1yrbk",
  "key14": "5J72kf4kBAdaaBdRdvhsZZ8nCqfjxg9S6d57xAUwKa7QfMVXXXuj35C44okeNFiL6rzrKPtcgPmzZmP2ZkH5iMg6",
  "key15": "5VEWbHuWCFoyJqxrV6zf1M9c9RmtdfFD23eGo1T1GrgFjaq1b3BADeY2WuNLoKNPLPvhR41828ihmWSxiAwnRJhy",
  "key16": "5M9xqeaJ4tkn72y6be9Me6KeYyd3eP979We3sa3s3kFPSv23kdBFTSvD5ddGrKHZ2pNCuX39NsS3p2T2AMLE7i9y",
  "key17": "4ftaLfSrbSdVWm6mwih8Z4PuUgY5kzdJ8ARFZ3kQ7oDu8jRzBanEEAtgcvbCGC42czyrB3wLNi1SwvF4bGr4nuCN",
  "key18": "22fobTekUDz4pudfBBSuKtRZEZ8o95ZLjiZuarC5dHK9SXjpHbtRTk6ra61PtXgHB7v7Gth8Fqji4VryDrbPLEwj",
  "key19": "54QJ9T4WwnVMAQMfgAxsfnsS5yHdy7MfZMyyYDMNejzGm373umEEFNfQg7hPg5Syojgfm31YVin6AoahuaiBwcv1",
  "key20": "3QQov78sHgkDMzkegbhKrxgmU6ninbQL6DuzAVyshG9A1RsKxh66Dfq671iBLePUSEianF3Ew8r5L9m4KcPhW7t3",
  "key21": "3sDr2vJLTcrm9gJWSxWS5EBR5oqZYwYighFJrx9FNHSvVDy5tBGkaYJkfRzHXBBWCcL1nRsX6Ys1fLPRdfZGg7Zv",
  "key22": "5PfYwFZNmdyu7UVx1975478VyATVdtYKgy65niTt6WPJv6ZUpJN4vf6ayNdXfHTU771QEx4JRsYitQzazRe4Fvtm",
  "key23": "ZnmGM5hLV4wvkqyAr9zHy4PatpMgdGK9ySgWdvX8nsEU4JsQ1uTaG8bA4UphrMAPNZUMiL2CjVCbSnRMDYmmsVA",
  "key24": "3vGuoH7B5FHxhj7poAcNzqv3SGTvoaiy2tE1QYPaDqEx4XyPdBQFC2dv38taggmQpaVmPG47norHUp5QQP5DSv98",
  "key25": "31pr3VLwcZDXCiPANvgmN7TB7b9WbSSYuGrD5uBuoWkUKFgvtf9hpZSY2XzyW3uzzeP4GRvXpx9h15gQhNVLs5ka"
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
