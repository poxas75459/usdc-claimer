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
    "5s6TARGoXPDrBd5YYGcUVhqDH5d8WATHb7HSHn1N5spiStgPPgqvmsFY384kjFfdRKTcsN3MKHuoSb3cQut29nan"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65woyT2eGZHnKrjkDJgojn3thJqZp2Xtc26AK2MEwMzNtsARN38x6t93ZdGAEpsy6RHdBKs4TaaNWwVGkbNM21pJ",
  "key1": "3Qm3Lbdc9WRLTMaXTsEiqetL3TzTvYHGEQYZhunMxJZg141b8d1uTDFSq1ZcP3dpfeAcu9SAbLS9wJms2T99wMg7",
  "key2": "2tTxVDYQM7nK44dgpkkPD2b7M7e8vrRehfLtS9dS3JAQkkBdjmuR9JfPs7f3uM3tgacN69U8DLQz9fSyGvBHcdzP",
  "key3": "3Rnx99HtBSHzqMEXQp1GDXbw6BfVWJf13p9DkdeRAzEwKKXNGxp4rcxCohGWeArSsZtrE8p6PHEFCreas3NNwFiS",
  "key4": "2yDUUdu3755Y2bG5uywmbAyVzL3F6aZmoxvM3yReWeCUzVwGw7PyVxfrqqW9w9YnHPNa6m44VdMfr4LQXA1wzRFx",
  "key5": "5zv4idSBKYWvKysqRNTHmRHZ8sSgy6uyc9bp8Yhjqew2oKi5EkAmucUZ55F7Ek87T5r5T9xHvnx68Q8Ds5Wn727r",
  "key6": "2drGH1vZvZUZ6DkJ79a59n54DLm1BDgSaG2xfg4iaBaWxBZ9RiVMF4jHipicT5oLNPCk76Pkb9j8YNxNk8V5RVDf",
  "key7": "znKJgbiUHpRb6bVqxLVuMaekjPiYP7TP8LMEyvWYhiMYKLWkHZeSCWNrRnP47QSGj7yLg1HTXhGXfyerDEM386K",
  "key8": "69UHbkL4LxccNCQvKm5tumYXHjbxxmzjxtkM4mNuXGGtWDErrPRVNJLzpCiDY9AG2JurekC3JeivhnSRUtaZE1L",
  "key9": "jCUgEBQcCiRav9yHr3hRWH9Fj8z6fgN7aY4xGNLC1QR3P5kiXF4gqu2qmJwKoCBLDi9CerJ9cZ371NauYAcREts",
  "key10": "2zGQG7gxydgHu7Nh2mviei1JS4rCun2Jq1fuK4fpZL2SjX9sFcjcb7ShJ71y96E3rurqsYZHCuPn5YhUGWyPJF2z",
  "key11": "5ZwiXo97XaBCE5FcyHS4HgG6465cwUemqsXT2quFRKZgzEj96wn6PgqbhyFjmKifTAuBXDpwmHZ87k5hFfJYcZgr",
  "key12": "5gJJ5RRm5pGfMfHCh3eTgBSr4tVGoiqXXXWLfp4EDkui8mkkAXJLAMBCQ7zRBPcSwAZHXDbe7neWSxNSVHF83HQT",
  "key13": "5J9ekXiHZsm4YvGMEnBtW1poskox9oaSyvKHo2DbDWH44KJP9jZbMtbKqT4anjnmb2a6y7LQuKPixMHwCW6fiJtJ",
  "key14": "4XF915BZ1zMgg4z55ygeyHd1HHoK5HEbpPYMsR56krPNozPJxHx5M5Z2Bx62f3CgunvxRCGEzzbXb5CmhSjzSUUB",
  "key15": "4sEmPjYgGCPXjfxhwuLXbwYwn8Erik3k8xmLTvefgiZynJSzf2ivE5MEwHEBsondMWsPCKyLQQRpmN47Ls34Lif",
  "key16": "5LisqvBUwqvQvAiuoDJoH5AxEsijz7sCVXtwMQGgU1wqS6VfiTr4qGin2CQXaCyH6VPeGDqoszhYWCDfNqWMzHAs",
  "key17": "4TmHYjz5imji8om4FKH7vhKHh7rZhu3hXDbajdrLuXuB1uKhThBQubBLvNfkeDQX5ft8hWB7ZMsLxLfmn5jEobno",
  "key18": "3K9qoGGBASdTCdWLKzgGw2K8xKtUw8uD1wgBuJyMj5k1L2SgVcnvU3VT7BwRgGV8KGr5HMpE6Vyg32RN5ovUNF8L",
  "key19": "5zELrLj3DAuantFHcHA8R37c3R5ZaLaJiq59JERfwuYK32KhSWTmyh2Utd7jioBnm4YFYCjH9TEdm3WUvvSK4LVH",
  "key20": "3JKUPsy4rnKYHhAZ9tvsEucyoWLQpGZRnpLo6owJ6GHCsahfcsWdgKDLnXsBf7BNS8C6y3Eg4AodkM22tcSawi9D",
  "key21": "4f2geZSTcAu4UmyXefUTxm7TqUPgDZGvijQ77bXExFET4nK6DewK2qMFNcgrUGp34ZFuX6vT5gSrpe69Fg5hcReB",
  "key22": "4HCm8qiBwAgQS3EmmygPRdwbLLLv8d5To3v1aePRppUiV5GMebjQ2tDrgrjKiTHCLhLnbFBPWaVZZGeasigzgi4X",
  "key23": "2L7rnyYF7wW3qB4ay5WDnqAQ2tPhg1PSex1XmtxPQcdjQbbdC5xdVhQ7x5i5hfFfyesfNpbhRcyCczySDF7aLNTy",
  "key24": "3cbG9mMTot1HTbitfDi1ifmj3resEMoXf3x5QLAyH5jrFkapBvxqkMFFGSphqj6SosDLSxvvAnYqUyUr52s69bSL",
  "key25": "5kifKDTE7Y7opJS7wuanFdFtTXqnmmjUDy8HkG4yTjfFf796jKnhoc4ksaKtzrk6DEqhg9ZSw6DuyED3uVqu169g",
  "key26": "2C7mfLJktYfQa2RFGSZ4RDHpkNR85sF4M9rRYidhT1Ts22G36ssfZEucdqmofWVGRztqH1yVU8dkJqMCx2bSjrpr",
  "key27": "2mif3GF6ba3G5X3r5CM3Dr79NWv9cPnEHigTicdanCGvH5ewYvoSVxtnXCNcnY3vAtWj75bzpkjnxsbv33NmhneT",
  "key28": "2VAR5fcAZYEdLr3XccRxDZx2QKKq78XYCNdSmhFbRdJ4cZbnaLEwG92cuote7hbcHPj2Yr8YWT8FMxST39RqZLaM",
  "key29": "5QxNxbVZptZn8znkLCWjfpFiXMzHzxUbBSF5F4v4ezqkywwrG2cgdiJaKWgVb5JFwfwS7RU5DxRLXnKTYxnYRMuc",
  "key30": "QdaJu8C87aUMP69T6nrrZKzHmbDPXw54D98CQk9JecEQXDwr6SaQCP9EPHRGZn6e3XoxMcHjCtPkcPaUKgFasRc",
  "key31": "25n349wMLQnv38VLHvsWhQdcgga7jrF6GKqHbA6iZeuq8xtUapkuiMWBjwAcUYZqPFKdq9aZGCPYHQ7W5PLXZUJ4",
  "key32": "4xZ9NFcyW7kicnfPnKUJKWKAStUiKU56qVQb9kqUkFhvRnHAyvsz28iAVeeCfhNxaVQ7RCoemvoNJe6TMWf3g3Q3",
  "key33": "53LLYdm1Qpwe57yZRnWckxhdmdqdAkVgnPMFPg5T8tPukPXrtbej17PcY5k3xSKH5sLABHh35MzWD1UMonBAwwCk",
  "key34": "4L9gETUhQ4prRESHXXsthX8Fkt4fcZJYxSakWexAe6CwM975juckrLeZoMqqpkKK67mokhJWwL2popaCbAfmPkLn",
  "key35": "UpXbQR614LULNRRgJTozP49rpgm9LAWUVKfvDEcVVfVgY1U756Q1yhmamZT2hc9jHvH8j9KVBLisBjENhFW7J72",
  "key36": "f3kN6qRHPT68En58t8MJ8q4knV5RbFWMTwW5mgFUeDqPYV4o1gGQ1EdPdkw5ppz97yXRsu7FqWfKThdAi25mds6",
  "key37": "5uCbe5jd83A1u4BbRTiH1uWBG4pc7SwGwAZEYmk5K3NjCZzH6dhZVtSqDTom5UoVL5wNqmL5UowSxszgfqbbNTQF",
  "key38": "45HDv9M4wJmtJAGtLMM9dfYwyKspkjjebUPnthLdafXoF3y9Fv2wV7HkCbYiq3WLhUEVFPbbhHo3v4iviLGvWhY",
  "key39": "3Jfm2NPBV51pfDMmQcQyhcPVvhmKwktSUhu9N3qmo1Hw8MKvAB5b2narUViiuufewkJWaYdff7Hzj7pGa5JdrMWc",
  "key40": "2t44Z3y4Qs7jszrEcrt6jCSBpUFjYbNRp3YqUfnrCV2cdxfxgry6q8pooeZonNfgbBRUy8qKcLU1q3aMQg1xjy4m"
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
