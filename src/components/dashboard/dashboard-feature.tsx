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
    "2VnhTtPA5yAF98KWfuyQF96Tg2fc7ceHohbNwvfLcut4ks5TN6bn9qemBArobe7KbkW92PRtPqYo1pf3UarFHMwH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37KcqYq1SF1qyFucidxgDc7DA3vBq5BVFHB9XGvCR96wHEt1ttXJTe9XUKV4bnzXePVddRNyDo2Ts6CFUzjAwNXo",
  "key1": "4aEaJzwRdLB2YtxuCWAsfauHX7RKgjbjXQksnF91eTB7qsGTtfNrYoqz3XCE5YY2NkX4eUdqDhpKg5dx2xMZfLGh",
  "key2": "5HeGc2PyUsWxiRmAmR5TjP5haWwZR3SLbhkvDRq36fjk3woZfjQz7qy9XjhFGMmjH12hs9PYxy73nQcppVrZVkRP",
  "key3": "3kzoGuJRXRgSiVDdCB39s8cQyoiw3WeR2gWkrsGiCoKXtu9GLeDMF26hTd5fBQM659KBXG1rMz1XyvSaEDCEowhn",
  "key4": "31uQuJ24Kpt8riEh6ztfmgubbsE1fqGBbEQDvzKL953BnjfgQkQqsHT7aQpUmgSdwz1dHz9R6XeMVELFmLRiorez",
  "key5": "4nh8BE3beeEKscpWP3oS9tCFvYqtXsp637EGJZKATHEDzGd2JowvuQpSqnjjMPKN5ewUTiNp21s9RL2665GEzwQe",
  "key6": "4xV6tFxRMaQ6vwbi3zo5xqsVcXMY6xcdy7oXkL1YGW8tTUxKv21GnmyodHgg5UhEoZUcE6LKNPEF2WdxDDtzfG3X",
  "key7": "4QNAthDm4AUDznB2PP4tcUEaWTVqyBAesWmk2uvbRDrn4FiUTBJxcD7UbQ9VzFhDrc4AhTLEodAyZnopYV38kWAT",
  "key8": "4767kkd86bxeeeNhA1NNKMYbbkeAgrZkNJzH7LM5w3az7RNgx3824eHcEopoBFFptJELvmWeYbsw4cqTMKvErhxn",
  "key9": "2VovZmZyXAcromivgB35H94UrC1Xq2DaZKYaVUcVHBjeCxS1o148iSZSBbxqi5k8R47A5oJW5zGUVyvcGFXf8qhv",
  "key10": "5Rx6N8p1WAQhujUAdafo6EkQdtrJUtkqqvUhT1GhJgmLvPZXBrApkSRLKoYCyjixi8RNPpzmgEehPrmhaF9Unrdi",
  "key11": "2cqqT6XvFZ8Fb7TbMmpVfyFEe9bCnc8CSkeECqGvLvRKto2YPo3pCnYso3dFavqUVqmeDcaPrac58KEsVK8UTEhk",
  "key12": "4jgipZJpXLHraZhiF7Wzo3nAWieNCMDAJobTgdpGa4A2nD8qfJwWhBas951wVHEuHevUEGQUHtcbmrwDx4AcX7L3",
  "key13": "5gQ6wXhguASnckHw1xaTKMrLMFszn5bPdN4HPKTSF5bnPpDatEUPH1XWJPjQy5jcsGBUGsTaR7uQdkX9jWXqcWTj",
  "key14": "6dPvJCsyMEB9twQuYmoyJeXiLrGjm4KCPxfx6UfbLuqjyX5TQygy8XXe4QT3WmbvxAB9LvKTTY6HMD3nkhSWFxL",
  "key15": "sByFKkdNG5sfsVapHd3tUAcZRbjUtFkoZx2xxbDdFWmv2Sowhtqi6jNdPxYAurUDFLNripNtkVKcAtAWog4qVAo",
  "key16": "2jNFoxUyejZLfVWwWzFkqoESfQCBV9ET59o1W2TnWozQUN5bar25U5iUfHY6roWaBcurC3jp6nsEUpc5JbZnFkxQ",
  "key17": "4JJrDAbuBYNAN4f3kAh62v3uJP6byZx6xJNBSLwtSbFLTGu37mdVwPNxuY4p9YTwEZkQtHWbQfY1TJzve6pCH1tu",
  "key18": "5mj77bYBu8A4c9Um5JNpU8iDFkzkKQQTXUQ3kriESEjCQdL8ES8Zihz76o7UD4BnfVYJkJbBVKoQrcmTvqhve1Mt",
  "key19": "2q19WhUyFxvgNGNGktxNnL1jZKoWJmRAXiXAUYSgEzdrLtaFSfJdipeFSDaksnQn64BgsJ9Wwo4vKUD5HgJwm5yg",
  "key20": "4XVSNdc7f9PGvamymPgcraxnFrdhz4Xr2CZzFoFpZx4tdXZZrUGndfVyQDhYydPhvs5bVuZW3td1vGNQU24hMMaa",
  "key21": "4MkHQ11sLEq4b9TmCqBNQ1ixroUei3UKPThYC9toHKPcZik3DyMfRimi7vy6nEmvn5g45NpXjJAoxtndTHFSDwJk",
  "key22": "F4KJQSMmR2td2V2R2JnN36stns1uXR41JH3JebrdvAgSQxrkeUx2vzZQTRuNU1vD84wb87SnpQn1nk2LyZY8yqK",
  "key23": "1PdGdK1Zv2G6x7LJbWCRT9MkuKjCApT1cTGthzSZ7HJBbzUsGY5FgTMW2JubqfA1bqzGPf81afdjVXzVhVfgbjs",
  "key24": "4zWzp5n1GyHU1ggQytFZjv9tmK7NztvuDPSoqgye4TKQ89ewvstZSXJ492ffiKzhb22xzqmNGA7XVThZgvRkf3nD",
  "key25": "5TAFuxeWkAdD9R8oTJKGrz8vhYbbbLqEJbcLuoch4ojP86mF89SyT1D1B2sf1W6XM3PtzMp9qimjTTZUCyYTRbWN",
  "key26": "4J4e5Gha7hoE3TonXs1ekGCV2yQDkwECMBFiuuVWGwTt59z4Egwtk8XMREGoiRj2QRNZ1RgmURHbsjE5Chtaf49b"
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
