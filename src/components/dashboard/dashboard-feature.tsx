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
    "58zKZFvJWBQgDdiMqVjmq9YqV8VyTyDiRj8wrqTsWVkBmmjUEHhnfWkYTGQkXh3YZLbzhs6prQ9qdPB2dLShqFeM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2znRAfNF9HimKeubMtqZEZ5xDveBMtqBzdWYc8uWENLs5dLK1iyFXXcMrJyHyU52xdLVNYak48dg6tAAQidhDx8Q",
  "key1": "5nrpwZiW9uhATXNjeurHRmbxAVjVeEvh48Dfjy3yB9EiCnkvjRvhWRd4e7TeSw58VVAQVeY4SPfQYxfx81biBwFK",
  "key2": "5gtrUSU3di1awCRE6eu8S85zxYE618gH294xRiQ2uZ6fWmU2W88nBmjEx4iGePc99VDJ4aaDqcDXF82WfR2qde2R",
  "key3": "4J2MmzLaFMxYkBX9EZrXSrtE3kw1MNBXdJJY3nHMwnQnH2xGj9ehk1RcwHdRNeHTCk7zLmLGSMbKtuLg7ss45u1X",
  "key4": "2h1uAcfUYNf4eh1QvftWPHVo3ApeDYv1YdadFnpZHAZyH8DuHDgH8nwan5wpvqZuMoJvCQ1xmsGVWVRRE2rfmvRU",
  "key5": "3AmvTDdTmmzeZPC4iDTnNb9YQ33Ns7DEhnjQwBaaUtHCtSx9bcKL6EFdW5ZpSER7m4zthzBtzdwTyXPUfohNoHez",
  "key6": "K4nr7oLZSgRVoNduXDp5ZPa4VhJms5EiJvrdEnQZGfLoxXwzFEnEH83d7UiSK7AB6dGwDZTxL5ocbNreJDtYMef",
  "key7": "2WLoz1wQRXLjMCczuHbbveS58W1wVzFQVoWb4BKkFuUB7sCEfSetpEW3RaawKr956URixGg7YUytqFihb6PVmkaC",
  "key8": "SJxtL4F6PuqCPdphGYE6jhAxUCVGCLxYSyYuSBdM3787Rs1gxAKii5oCpJ44YKBcbwvpxMeXss9XJsVmDrun3ob",
  "key9": "4F4J3rsrTTrN81L585NXveMKPcUsKTvCfdytQCRfpCftjFxeNzxbwjzqZWrVQ2rqb8WUb7Qa1ojAdDKguQB9MjKf",
  "key10": "2hEaRTGPLzbRw4E1MP6e2yfXg81xr4XQ3e7SsXxpRtyNGNr3sd5rySMBXWHekEKrkRC5nHTVow51R7n8izs8wix2",
  "key11": "3fY6PKzoWDGsTpnCgAGhcJ4Q1tpy5ct7q8ftXAdWKd75t7czBVyYra5omAF4AYWTeyEUUu4JoCEt2QMheySXjW1c",
  "key12": "4B2syZxHgf5KmecL3h5Ta2ceTZVGwz6gFv4vcAK5niGiuNzzsBAouzbtKEXFFms5rUYWrNHo6LMUMgLkKB89BbbF",
  "key13": "5966ue1FLzCr1GtVFbWA7aU4pmjHHjdviM1tANYBX6bZHKvp1F1aoJ9qA7Fk91Da95T2EsYTNSvaPDkqacjZa9LU",
  "key14": "421ig4tuoPEcsYWN8NHAAqgpb7JhFoa8xb2KKgQTg2MwkBTvw9qtwxc7uoMNpSg1rKqPJPYpH8tsEDdVA1MP4Uwe",
  "key15": "5qBcwovYBmvzwpqyz6KrdXRfYsqGav8NSW89hh2TDTuuUKE7t6tASWpzcF5X5PFd3UFpeaDnqbzwefpD4npcWEFd",
  "key16": "LuiyQwHE54FeP6A76JfgrMPKirA1ooYkvgC9QYJkCC8NrARk61Jnim4krLQK6ETzif4gqwrKrHmULKMEsbc87sS",
  "key17": "2rBz6ZXt7UbxMHrTbR53FFv9t8TGG2khzwRz6pr1EaaheuhTUGYHSpH8rQp4U4Eq3S3vXnPiYNyxG2Z5BcQRrk89",
  "key18": "2y8Sj2W9KFzT2gMegDipU9TSzfyfCogJndAr99euhnNthSgHAERrFLDMgVfX1qh1zmZF3sCAuwV98CBbc2NejWvG",
  "key19": "SitYWSu7CWmvy8Wym3DcpAUe7aJraZUpwfiUxdB8Yg8QPv1UEDcSJvqjJVFohhq9pBViy5v9S3qtwVXMbENtNZU",
  "key20": "2jYyWtiRE9ATmVsZwmMEk2BoJ5y6hVYknbyu4gZ3AapM6rpZ5Gd9oBDhc1YDYjErEs3zp21NVpRobNbeWpPgrcsT",
  "key21": "5akqvgk3t2DGhmso4xJJVYT6GJKRUSDTRv7ochqvjSWUwgit7GRXwaBVouf32MHs2JnEvkzQWkDTtdYjKMTMRxt5",
  "key22": "4bhdsfVn8hsNdhjZwLqCn7WiLyyRi4TH32z9ZFR5RujicrcHKfpCjG1a9wKxw6fLL6C3Bnw17ft15MrpEWPmUctK",
  "key23": "6a5rca7Zz16kg7xoUHv4uyw1RgB34GeyPggJtwMCkZSptmXdWerPjzwX9QRKT5iPzBdgcCWfQH5iQmDNBGhygSk",
  "key24": "2XugDzzG78NjPAvkiZFuqeD6PmxZZRLqEZKdMiZioW56SjMW7MLE3UB6jzwxvnLc2kXM1o9Qr1RcBunKELfsj9Sp",
  "key25": "591mZBxfEyAujRg5mvzCGiXGVPMEo2fH1CfFsxFX4Bybds44WZ4jE9MfN2dpEW37iWumWobVb2wnbnmmm5mnWZ1M",
  "key26": "2pp6rG9ZW8QWSX2xjaGmxUHPR2HHvXwRixVQgKjnnf8K2AVhjgYwFCwE94DjdDoHPBty4LS8mx6ayZnHSS2yoHgY",
  "key27": "4M6qJDMVqmM7yraL2QfriZudjayvc6WThVgybe3uc2NBYXbA2r8izpSTNXbXfJ7PAJDGNqR9xYS8yUYLADKXtv8o",
  "key28": "2KZqyZ2pyZzDTQnB5342bG8YNdMUjaii2Fff1dx8iW5fFn7ybge3R42zmZyuziu9vV3zoozpGazdYW4LW7zFLq3E",
  "key29": "61KpV68S9PzVnCxJg79hU54GHBT3k2AAa94nxsZ6yHNR8kcCxwCbEbStMUtDrdX1kFNiEvgpsJR5wenJwgWKwTEo",
  "key30": "3HRM3tWLyQpAffSKq1frmkM7ffBLWWURmLay7qKWzgw1uMD3WYY39TpGpGh3BtaHJKnKZAffSDtWk66xFzvJ9zj",
  "key31": "4xtHu5vGAr4h3tEoyegQ2LYiVTmn9yURZ1X5iGbzRKWKroAtBCYPpdeQMYoD6k1LjdCV3RXFjrfpggC3sLBa8ML3",
  "key32": "3jUMnbACfndDkzgcaqwE4QU7MM9sgsp4QYpUKe9vcGdsLH4CcfXzibwbRXXQN1SRaRFa3Z6brEqovSto49gTrVEd",
  "key33": "4zxjaweG1ynKiQusNynxkiMSriDuByixsNKyHn3kjQdsysMtPzcVT8v5HWigJAz76wPkiG5MPTd7uJM4Y6V5hiP3",
  "key34": "27DUrPR1S9UQsKLgvAW7zbgRCqh6GXfoJU1HydZwkuRHGCtwV6W6jJTArbd32nMmPFB5cW9iaoJ1KRkpfbLM2Zmq",
  "key35": "vHyciTN62vRfQHYerSDs3QLBZqALGCgUh7xZviWftaHUA3LHJPUjx6oc94i7J6HjbmNaSNsRMFy4tn7mayJRTk2"
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
