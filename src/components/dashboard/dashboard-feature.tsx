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
    "UnfgMgSxXGTJUTixpcGgwm9j6URcDQTk9PhNMHNLusJhMv1x7sPxXFKP3a9zdoFRWGhrvF2RQCBxfRehQibny85"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H6DJpfCSU8MmTm72JJbzdnMHKaQDQ6b9QB7S4PMKYgmNQVqGkaohBgdrrf3XfmtJpQbo1GGJvpFVUoTdrEt37JB",
  "key1": "3dz8ckRQ6xQLHRVFfHo7g27xsNdmfCHw5cNpCktdUfaA45G1c9aEPurth1qTHEXQjPHTxUUeYbct7JRz8ajazFK1",
  "key2": "4F9vqHiTSnGJK6f3fADEiAaiYmotJWv7g3jxeGBZfj5YBR2ccqhF1KbrCwtfQVHqccVgjUQfFqD7SuPqJk7mN7Us",
  "key3": "VpF7NvY3qCFQMgX4S1hff6aTvr81rTorGW5yRhH4kYjgnvPfhye6ANmAdUgmGe1WUvRLtVXFC7h8bvaaDq26Scp",
  "key4": "CHiHRZ2AhQnnsUgxTpvGiJnpgNL5usL19VaMs12UEjt1Wy7aYWLmiCwdT1LoEuszJaRv9GiUodnPiwXLb3C1C4d",
  "key5": "zD8rj4ofiYuemYuWWSvpfs1UghqUZYeobvSpKNWDzNhfURafGsoBpJzfuu4WAi9p9pcJBp1tGoQ9TRyFHJpZKmv",
  "key6": "3CvqFcYinN2oguw8hVfNTXePVXa7PDXBYnF5XwvqkoveSzEcahnwh7yWvTr9H35cUuN6CAA9FfJfv38jq6GVAp6D",
  "key7": "5wmCGijDY2uc1fh2NYCvjrJn2hP2GXhLhKYgsb59r4rrBAUDUbvQo6ddPCCyF5w1hfdDbXvo8J5wHEk2KMGVcHKt",
  "key8": "M9pX7CEGjssK6j6hqjcPnEUQZ7sYw7x2CLgTNW44fD2ra9gePbjJcVidFSszJJXCxS7c4w8vo97Upe9b73i6TbE",
  "key9": "g8mH6CwRcRFt9m17Rfnm6i7sRbPafrpQ5ng71CeuHJp1iqaHtQfzoA4tanajqzQqFHsqeRpPZRvmKPFsRbg3tyv",
  "key10": "e2CxTrjHQDG6JTuKZ2KzaGK8xRqsxvndTGNU2mEKuyqbKEF8vv82Ex4SFApoYy2Xpj6ohqbs8nsngEs7RxM3QKP",
  "key11": "YuQkWbfJmyPjY6mFXSUSQTRr4dSh598jyMaCoThWBMjf1MyRPYNTx6LhyqkveQCT2QxUnHeukHPh1PN8eeurw5x",
  "key12": "2LX8N6yX328hehrGX7xLunFZTHiNZpBxhUSV4ByhU5mLEckjFEmJ6zFaHUJrsZByLn8xnW5FNJyFEpLsHsVLfzxo",
  "key13": "5MwQAb2wvQBwNcCw9FEoD54CG6ZJ7JcFHuytaJTNocAwzi1iCDSHtUBd3Po3KFYjgicGkUxrqRkp28WdLET13VzX",
  "key14": "6kbhHNWfZP6twC24pouQH286xTcoWVeVaZ1bHP2fKutww8x7SGYjk3YUs4QQXasA8FFtsPThmBQQoATmd1mCAy8",
  "key15": "sRbfR4nWDuDCZhamrWxfTXv45MxfKCS2xJnt27xsXcwHA2ofnedCga5c8UqUBKFfnAib3M4Upjyb2L8PQzbpmuJ",
  "key16": "3vGTqEXCwgN4YH85A7bThKTKRYuWGxaZwhRabMCaMuKj8sx8ypC8yFnPtTtagxEUXfFL12yfZsdCCqu553Ez2Qzr",
  "key17": "NTAuNzSAgEgSwJFtJ1fCUpoHWy55QHP9ZycQgT2iWML8L44oN4tDqyV4p1N1zJ9bft78tvLPAmh6LRTCNJyLrSd",
  "key18": "4GiJMyXXD87BBppEYyYPHpjX1knnTLRzPr6VXuqGjWQbpiM3yNUnqrwsnApeSU47yQrfv1SyA8HczjRBhPdc3JTp",
  "key19": "4cwZFoZsRGVB6uh29nehUgwc9DH5fc8kRZg5URQ1BAMRzbTPvMcT2gZNdRXVFqCU6oEaSLLEcrg2NEEMSm6tZz7Z",
  "key20": "4HXD7zzTT5PPCXXL1EYXC9hAHRJTqRLqLd3c4E19JWCUf89fYXiaC9CvSJWi2cK5jHbuzXpYgjbccvvQWXL4FkJA",
  "key21": "4CNTr2FLUSCkqvde9sLE7dauPaDgokhYjjqWFjfq1mnViN7oJzPSGs3kdaWjy4qGzwGcSynMU84CV3VzriS5z1Yy",
  "key22": "4Nkv1sSE6RJkDf7fd7XAhRYscqo3yv1tkLfJckAgUYoANwf5JBXgCDDuiAzxH23ttZNvonVFhm537NGWNg5ZUYav",
  "key23": "4KMcQn53G8FN7R27fSQCuttdx9oeQ5UgUaMbKQgWXfbUKykMY84C3N23sJD8ApU8BXRDQiiARkBBja2bpzqM7SsE",
  "key24": "X9Xt8FHYSRCwsPLqobNEbc9y4efYLoo2dPrE7hwj9XMxdKJa9mb1QRFREZYh7gjxjHvsuZw2tRVUTmrKFkFRryA",
  "key25": "5JzZr6ZJJrmjh6XyKALVZHCWA4DjVj2vJC4n3xRpsxrrSKkDnZLs8xjnRTLm5rmwZPqjQJfPFV1zVvjmnbShj8js",
  "key26": "3r3hLFy9aPgrd6KseiFRBVQZjSHDJiXwYwbTCv1LzaZ1tWi5GVEanMEnvLhZMhS1PKJNKDpBVyQrEbN8Kdb4sLnj"
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
