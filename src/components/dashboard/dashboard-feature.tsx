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
    "23j5W2kzynFXhcPfHQGUc4YHP3Uwrp7YjGFTNgYoWztiVozTdLtgUjYm48VdWrGd8aSyHYVD1yae9fxg9B7EfCzW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D1kJJmQFMpJpGsHtgfm2TK3ZN8rjzeJsHb99UYTNz2C7JoFZbar4AEttsRpMHy91MmPPiKyDo6LBWdc7xR2v3qb",
  "key1": "5U4Nd3ymWgZPEr2J8sSTjwgQuHxQrnZ2VL7wfs8R4DKedHve2pRH7ZsbDpxDNfXVNEq6GBWvC68qZrdECZ9Tbb2U",
  "key2": "5p4N865m6A9xLdSMnKiiL7drChLvqcKQGaduiCioZcBGhQrPQr4ch5VbMBWCPwFzojh2TMXp1S3aK7x42W5nVysz",
  "key3": "Ci6AtyiuMNsbECJ3Rt5NFC78tgFyQMdaMM4THL8y78X1Zxvadczz3K6ECzn46V7Md5YrMP3nbT6iYaNJ3zTo37z",
  "key4": "3MXrb147PRJNByXKUMvht3PcH8cC9dvxfxZUWvAi7NUqUoXzcTjReCzdYRnmVxCu8q52StXj3RQTJptviNKD5UKs",
  "key5": "3rTfvjghH154U9M4dEzxKe3rdAURiu6cwyHuEJTs9HZPNtkEzDFeatfMQQNaXoP9ToGLxTKoroJfBje1jxpzyJyX",
  "key6": "2pwkpd1TbeVFscmkFLHtBoSRPXGaNYcXyaREWYinwEJiyY6VuV9rhko7WNL7cg6EuxCgFqhmhNLwrpyq7Bbepvx",
  "key7": "4CU3sXYpq3bwBdenh1wqR52KugUKkmEQRyxnFnMwsgjBnRHSPr5MUrj1TBQYZu3aR3P8n2JZtoShNevgK3iHTe7f",
  "key8": "AHgxdC9e8CCge8vACGURYX5tWPr66ohSKow4sbGZEgzd4xEv6uj3dVWuFn2Y1EzJ2KWo5uRgVWv1HpAFPiEar83",
  "key9": "51N7fMNC6cueTEua6FTo1x1oZLY4hEetSKsKyAnnuMdL3jXGrkxp2iY3ti8eBWpvyEDTGrWJcWCLpD3Ha2Zob7z8",
  "key10": "2jpCXfBDGDvSCYpR2ERfqevuQ7fHkWEp3H9Ymy98mYtafYFkuSSaWsuvQg3BzLQUwTmBrdPz8taUQ2y28Z2UJLxA",
  "key11": "2SNkuvWtja5Epn1dFEzdy5hRseffWHUvhv9AoaXEfjMLQDnieAc8PQUx5eCy8avYpQ9bHqRfEpMMx4yqn1zqtUrb",
  "key12": "4fcSxKyc9azz3sPp54AyVzY4EjwLDbjxMqH7iMDgaeEhqxe3DdQodwigqNmtdezXUENjD3FHAeJd7yEsiGcAsdNB",
  "key13": "2k7q3QvswtSVYwWdWz4FViwxcif6kKfqnRnoPLjj3C6cJ5F87QkrA9c8vhXQVAq8NHtQ1Fg9PQFVPTxbGEm33VAR",
  "key14": "3MZqTSiAqYtj3PnQgpzf5RxxubWk1bzRBGvdy3FDLkammLpsnYWGMpvr2HYSVHtTPDskB23JU8nqjPNyAa6XLuFG",
  "key15": "3HAKi9o2sMCzisgiCWbWJHYh1zx1dRzWKtvpZAZrt1R8icDsQiri6NPuB85R31USWBGSwYv1UykX3vprUuyFrQau",
  "key16": "4Kic8tJNS8j7PDFY4iym2FjzrZSqMRCjDdT4gPbZPHnJqDjZT787pvjDRNisaDK1hHwQjQc5R7aYemedkoxVMnPM",
  "key17": "2CaQ8hXkpg8h3zNVUbuLLScAvz9cqcBuxxo3BK4YrGHm3wRPhKtAdtMAvuTpEy77TK6Q2PhMf57jas2xAfV3cBqm",
  "key18": "AQWXepRD8B2jc7maFo87fUzyEWbRtyj5y6e8npBZ55bsGhCa5rydZBfXeFZSymbipWTr5fLCSN9PFRdzHgArQbP",
  "key19": "4Xb7aV9gTW1XL4EiqnGpMNMswKpiDohCadc21nh6MEnYfzm24KzUPsQJLfgjxnr67MBZWt4WRhTjRWYPyWqMjUyr",
  "key20": "52YF2TSwMq9TXT8WTfqfvLeWDuVm2VQEfspKQwijVfL3J1bbRaCCgAw8JxGrxZC1n7UzWbskpeCnFyRDhzDGCaxH",
  "key21": "oSAcikkyF8ZUpnhbGXoJ3LmtTYEWhfgUMDKauGsHTT5BvzcfxKznnY9NsofFs76vBERqQXuB3xF7bHXwpj19vR2",
  "key22": "5Q97wmbT97y9aq47ssENPCJEs9ncQ9oi8vvJjuk25cpFohRDcwXimULT3UrPSwfTLM7tKhV65CYnHwHrgS5ryWdu",
  "key23": "2yqgvdz5aMD2thpxL5L1Vdo169dPDJsrrcgJp4imNVaWXAZT8oK9qAGnkHx8o25ctDhD83HLYLnDhW1ZZAycX7eT",
  "key24": "4wMsa9KJRyBiLMmdUCfBwohrRAEP8zbbZFECgK3Peym2F2rFBFRcfW8db68r5uSBRi8cNgLudixDQ1dde4gCvqvg",
  "key25": "3ZtV42SRi5HFkrZrmBBw7yQRD2ESHBwMQVgaLboZMm9GZDdMhGDKHAkpyvPo6PHwyauJKXrLbHSJxftuw5ZzhpuT",
  "key26": "1utzmn9uECHVd6udtPE6Mw7agsXifHFHcmpjgsRxBA3wvCnMwvvVVqyHoQzsNpDzmYLGiy8FYurX5ywiQeoQ7ZS",
  "key27": "3hK7ndjWaGLQYNkNjAbzQFwjQjuonsktXv2HioCg9K5mH1vFw2uoqNDVea5HdLaNM8VHv183YCSdUR2nFUPnMTgK",
  "key28": "4BYeQ2XvMt2xMAkGeYebaqpGwS5Nku2wNbUfVrFaB28e9h2L7r9sq6oRpZyTZHQXCQ7d5NAg14Vbhp61NhjmcdDh",
  "key29": "yq3qfs1HoMsN8FZzwnCLEm12Qxv4C18BNFQTptFp6pExP98TetT4DP853cRvodpfbynqw8zkS6P5Vx4W3LC1itF",
  "key30": "Rvgn6o6af91Zrw1eu3Z5UyF1gKusNmR7SsqNB2QLPghKF48Nph8EDd6UpH2VLyHYgihtUbc65iuNqJpVERrPEet",
  "key31": "3PNQ4guLWwFJRwzci93y8w8pVWYJgRd7i1xtBeJtTLccqMVqRz7mjX2qvo418HRqyAHGtxh19uSmNEwWfafWTLd2",
  "key32": "3m1nGfFBAqMRhd62sV2zoWcKUs1YV1GKgvK4dQ8oB4w35jnCoHiQCjg5zWH4fh91xqtNv3fyv1VBm8zmevVqgmxR",
  "key33": "2u7frfEeYdLbYi9hikBm4GM2hjSv5xJFXgeo5Ya4Ye7hLWXKMfrNtZ3XtaiBazrt3WFH6W8PgiA4jpYaNHHuUk3a",
  "key34": "4z2u6MTiAvp16mdUwdTiy1nhLHGPU56Wy9k9RLvc1KjdzupzJupsbXsMMqsDxz3Ps4qCCpdy4NbSfoVUJYKkzuio",
  "key35": "5MFG4pTYjXfPRuUUAasF2Vzr1BM9wPh9h63JdjpQHzhFBa6Vut3ZXixmx52JmwMmG4dZVP47QDuEXetsLaPvcbuB",
  "key36": "44b4Szs1pvETby8NsHwhS7RqvSABu83s3XgYJmj5kDQSfxAAXiU8vYGn2boNtvt2ESAPxM38YUdjhBGzfkPs829e",
  "key37": "3xEQMtWgE1hgarqDmSBSEpvyezgBYf9nHx7fYmFWHDdvGX3Qg2gzWiYK286RKhYg1yyTA1JVA5xPdCemG9FhLtBt",
  "key38": "4krHTZqUefabMu2NfNDBQAdY2zQ4JuuSx3Z1nFXd269SMQfMT5e1mJnM9KEF65fNpZF8mjJbocoCriwQzkbAuvPA"
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
