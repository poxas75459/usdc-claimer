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
    "5MjEW5bhDBBbazYK6YBm7PSRHFycCZkttbkSQqkYXo3ptuoetc33xEehYanW26docGmNSQvveMxiqP3HWneV7F88"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eHohsqVu46dkKRZ2rcpCehqfWJZZ1hi6R9eQouDGMx27qSZazWn4XQgTnanoboGfEYXyBdgq841c7t9PQjFsAWK",
  "key1": "21axbfLTo6M1qX6PHzYqimC4BqZg6ELBftkfGdvuqrHshz93oYdtLWWUyALLW1XMb7ckK3YfGF6N18z4AJEam8rj",
  "key2": "4TyFkCVjuSS1vVat6SS4SobvJV58GxF7peSto4ZQytR1gE8EjkkWmBqhCBbUajVoXviNZjJVeQ7gPNxfd4j9bJwx",
  "key3": "4FxuWCKSwDTbkjFVyS97QZZWd2YqDfBFhxBMe42fz6G49br7LDJzXuZLiiqrhdDixmedGXQeuEJ5aj88BVCbYowf",
  "key4": "31B4g4aJ3XgJvxmeht8Eu3FY37tBM1TptQA6ULeJY4WQrk8sLC9fBbZXERavPh9cDgakB6iUehVgqQtKCcA24Z5U",
  "key5": "4KekrqduxjUehTEUuadbGVTXk1ZftUiPSaLsn179GMD4LJFYQhvKRftFx9L4jqFdowJd53DGprnM4YnPsbjUTwc7",
  "key6": "48YkWt7RnD71A6c1TmvhHoCKPcMrgs85wyDzQD8AsGEKoaPx7Lv7ZP1ruaY78JScPYeNy1nxWdMBu7JkQcq8nU14",
  "key7": "3GgfdRRyTDPNpd42casdi5ETLDoS8K1WaLhchidRABiW9DVtVPcCAU5z8mCgVRs1n2Me65BeXAx8wWB2V7NDKymu",
  "key8": "2j224wg9KzWUjD9DNHuAuV6nEG5u6rmKAA7RSdWAMf3R8k27n2dZLhMDzLWPAJ2cVdqE4QTwgH3uixsabzQE6ghh",
  "key9": "31oRUuC5dKXGckteaC6WioE2e9yQQr2pWNuEypNyC7MJi771vJjTjBD8ndU5sDoiSj1xY5UCqXhVnXg2Me1V9FyK",
  "key10": "3WRMqpWwn5U4851ctUVB6pdGt52nUPhkbCbBs3jCm23pn5Wb7y59fh23V2ng959K6GrdTiuDk6VpSnGb7uZFDnaf",
  "key11": "37hgjA9NKNci28jd3akePuas8F7b3sEA4MRcudoen2CTGXTQtq6WT3qdGGV1oTJSEWNyXc5SJQ7uvw3JFdAEja8e",
  "key12": "4GKj1zJ9j9XMunaLJY19X5kpNinoZp5JEgmR92CaKUbpAy74ZbDSAagp8duZc7C4NXiZ26wrV1D6UzzH2QfX511y",
  "key13": "ekT4Ki8wYXcoc2S1bwRmyizdAoSVPi3LAZ7YSqFuvBnaKCCcX5aHHxQLAxxFRp7ypzbvF3zj8HscHXQgfQbVPpm",
  "key14": "2t4huReA3U4qh9KQzdJtUTzZmw3vK6w2SMC1jEJCxJGuFbYDnq41goSfYghnvwmUttBrbNS1sSnADZQPoCJCJwdD",
  "key15": "5weuKekQvE32Ed8rfGejuBnY9ZEFEHSsj6eVRvYxgbT7xiyjopLtxADaowUcPovtqtZBahuFHd132T9rup1KKdiq",
  "key16": "4KG5BjemcuWGHnQZHBBzJz2q5eSjN115BoonLoApZ7CWThFRuQGqFNkUKpSWyTKJwvBN8BDS6bC1UTJ9gb3zf6Kg",
  "key17": "2DXKmArhhk8FbyiuFHNw7uuq5BfN5Ba6RW5Wk2nL4KwLx1Mv9t8irsexokeHQjut4Q1htMt7TuEcXiJPwsF13Psg",
  "key18": "64Z42J7drpMomEn1gZ8UMZZJPFPJFLYNHKVbQY3hS2rrgiqJ8kD9B53tRCPKHCDkV4dCDVTHtktkgNqQiwhqQRpu",
  "key19": "5CZDJMw1Un7AzEfU6g77i7141iMyuUWE4WTwUjRvCcSd3WMR1nuLSVaK3Cy8VpLKJAap87Wj4Pk4oaqqrak9EHUz",
  "key20": "5QFK2wdvyrJGrXXAfr6hBsEVQYWCJ28sihrsZwh5mt6TjvE2bs4jHWp6AFRKSTGxcAca2dR2VCTpPHMywTp1urUf",
  "key21": "5CMm7bhpbLj4J3RuZA74vAhbCfq811BkKKfEJqSC1rTmUFjduj6Va1satKFuvUjssi2Brf1oo5UsNBW3LQYTiho7",
  "key22": "2qtfciLqexG2TaY3vnFDko6LDbVJu6KRE6y4nCt5FxgMSxeRQqy4MaggNRr5xRimMvzHjuaJ97TsLz1yQ7KLzCbf",
  "key23": "4M38V9LGwzjcJdfSN3TZ51ppYVA3g1tvdggBZu1W3F2BuXvdazupuUqYRUMmuGeutgQJAz4fqXQqd88hM3NHTMjV",
  "key24": "Vd3tB94r6KLeCEf5xF2GqXdZHt1WRnxUZ1iNrw6QPeiDQALhvsCCXg3xBJ7xJz72xbPZd6tU8gLToaz2Uya8tm8",
  "key25": "3BmicsgQH1i4RdxxZsPt3mqZZgTM4q6JD2MWNFJw2SEWCBkFLvC3bkpt8UMWxVmv6YsR7eJ2tJwoau7o5rgBX9xz",
  "key26": "5Jtxkwvr7SVRpoHPDVvLazmXSWN2wosCqcbBgYGCoVNwABk6nhjCr8PVpkSCfAJDL32d3FeZwpKNgvYUx19QC6wy",
  "key27": "3X3jARFTGLtJPbxTdxDWDK54ogARpeTSkou81zcJVeMLLyJLAZqDrAimpzM68SenwcboTLkx82jrWz4hiCxaDZ9t",
  "key28": "5Jxz4jFTgtg3hfyA92rFhPVvSQ5ef18PPo5Xj2px6fBR6E9ZNLUAzqqKmpygJVE9UZsSQjeLDgMuHiucGxm2pFmS",
  "key29": "5XG5Yp3jAhNDLVsgcEL4XQnKBRGF39JsTVeKcZNtb3GqnuyDpUPGa9nteNs3CRwHJBKyqQCNNtFhuMu7ANgenyqy",
  "key30": "5DNyoeaDfyV1U6mpYpxN4midrT6TFLvRV1cfn5QeW1o4qEc7E5yZy6UQfwiWLAfRieQm7xwWJXFSfdRTmvFxWTfk",
  "key31": "3WJCGGRprFRYrJjKqmkXTUztiCfxCw8PFwWWM8T2R75EH3qdpBVXRSuKzFH24u7deCXMUKPWwbqGTJrmFVmFPB1a"
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
