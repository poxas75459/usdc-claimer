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
    "49jGdrP7du2hkwJ8rv3Pawrmk2N2oZHDSgiPjQn9kFKQpv9CATkwnqK9y6RxFpyaXvJA4R56MatiApvrY87jpBPn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kFj6hrKC3hUveSYRYDECYLkdPUuRVRW7j8GdtdAGsrS5u4UFyBzh4exdCQn9xUNp4HwnxWPtjdUeesxn5WAtSef",
  "key1": "4ep8CVjtmpaa42bZnUSRjx9LvTLjamNyHg1M4NZAXGCgEAm3pcKQrF6ih66oKsjJhYc6dYSQPg6gYw2smNfpGzVm",
  "key2": "2SMvqXq7JKMHK6gCrnPyJQD5xrkMWHeyJrBLZsswMWmG7VTDw4GAoTNSzJGL8TSMX3U6z8RAji5MKQXL5gSFSg7R",
  "key3": "6118WvxbDurKe427ASoMSoVEM7Xn583Jk75SrC1yRixjyS8dbkyU3W4nwPhtJjoDnLscPXX5QSKVeitxm4fKcNEm",
  "key4": "43hTG8dhNLuGsod5SAMxapGpHUkZozkc9KqNAZ4XfKfGhfYUcAoVHMP3YjuPiLqL7W3fLui9rqQvCVwESUJjvrBP",
  "key5": "2Ubtn7TnMMHUmxkU36XanJTUAvvRGWn3eMKnaQfSfu18f1LyqJ61eZyrnApyWNdPB3CTDTX4qhymQHxiwBwFDW9Q",
  "key6": "RaEReb6JsoJVrogrZasFreiQD8v4DdFWJW9ZCYhKMAV7E6Pm5tucf6NeszFbxJ26KCFQxYYveK8TaAtew8SgQv8",
  "key7": "4hSqPhQNbunWKPfypQc6N6YGqm3qspAr7mVad7EnNbraUXzm1SfvPreieMykxpbecVEBSdKnA2YgnHVVS3aanqc1",
  "key8": "rX1ERG1ZpS6FxHa6eqSrcx7vAsetBa9oFxFptLBfAU8vNtTjABZt1oPk7V2otyieLS3jQTx4bjmsrCXUUyReAMQ",
  "key9": "2VHYctQZSFFfNXV5nPaTgc1QBF9rAQrXyfkgQM4D3MA4MU1YXo3yzr32xRJYYZs62LaeaoE4GhNjs4oJSTa58ttG",
  "key10": "2TQBBCEKbqKvJ7rfwDSrGEUHSJWcs9MXjJbiXUtaDmWP3hf8PT3155GMoodNMGEJdx6ijvKABtF7ynbbEMgZ4Sen",
  "key11": "3zng3PN2fRTUMziT8sif2xhUjhtgaPTwsFJBne2P3PGePThbiCriPsLoMGnkAsZrvmtye5Q9c482bYnmq36fXrw2",
  "key12": "56Qg4VVJDrs4af512epujcXW6PPWX83b57unVMSL7w5JzmKEdRT1QjuN1upHwMHJQtt54pjY719uViV18iDX9xZN",
  "key13": "bWbS4aAUzHzF8KbMFzFWWPgNmRJry69V4hM8qUcscfgvidezebJLqfPaqv3JV1xsrLvrA3fWGfEDUFWvtU9Bhc5",
  "key14": "42vGwqaqyCTNQjSEJca5WG6bF2UQAJz72uoNWgreo8vCcow2mXwcDuvpyuKAXtZpMowuEZmNYNHRpe78xa4yBQfp",
  "key15": "4z2Ngt6dzHgNrVbZvujKoJvg2PHp5Rggrp3YdAfCCbFZyzxd92q3nSWEoadaHQht7cR2tzKPik9TneQM2UMvnYFn",
  "key16": "419VgjNzmgK7SKjSrYvSW9q3kc2JjEdSfQRdfStrRC39bqniSoNE2uEYQzQ1wgA8GKJmBFHwKu75BzSec7XY7EhE",
  "key17": "DGmnH1aCVKCZEpeBdCE1Qx73cWFVEcPt1jNkV8rSCtw83beExcPd19aPE5y8NgPVAHau26RDLVVPZNXWk4SeGqW",
  "key18": "3GQR6Rk4nw828kHWHpLFssoVUao9j79HLUyHBbx2fNrqE8hFLEF4e45ikFs4jahKkZDdPLtoK8AmbZ64Ey3rWiy7",
  "key19": "34cHBKicwkYt5fkshssibv1vmy9twWBo2LmYHTFEJRU521STVem68g22fuovUC1J34xMcfAUTdbsT36s9nhb1J5",
  "key20": "3g4KZVP4h17h5qXW2bMCTAzbfa4Hr6A42Qu2YjNqQdfUw4MkN2jc6keR7zQtDkWpRKbDBTkUMwgc1CQQnhr4GkpZ",
  "key21": "3b5w7tZvXQqPy5QzRS1ok18FeiNYewQgy9eX1gnY9L972Jz9xhTXCSpGBhiBnjuYvRLXUBJ2Bp2zBz2R4S67xvcH",
  "key22": "5SNJAzn6F1wwgB9AMyK5HiBaRfZgg2912wkYqRXsddNDN96aWXGFjBbydevyDDauBpC2Bgs3YLderzRJaWqH8tPE",
  "key23": "59RoPfZjKGsJQecPAdkabrwqdMhSaEoMNnmMqBimiKUS3vkmd8qrPdmv5LTDhwS5XxHkJTwADk29XifhCWA7rVkK",
  "key24": "AQP56S81qcRY4E2diY8Sm5oV7yfq2WWtiTqBXrYeu997pUbbVQuFtNmGRh46JNNu5cNhKJfHu358xxscZc7dtro",
  "key25": "tUentWwDH2cXZTPtmvg3yyV5W6JNAXekB29vGcRzumK2i2EejPVhdbQ4PCdN2iuLT1eN29ujRjJc3CJojFMuRSX",
  "key26": "n3scvVcrvanEZwc2U6Tf3AtRLRsSuUESt3yGxQEUt5Q2uRxSpneLSoLehdRBiesu1cWG59LDwU3YAkhctTz9vXp",
  "key27": "5DkDGyq5y8dv75Wg77rRCUYa22wKzHNSxEySjJkTuCytP2eWU4RBVFmUBMkmJhvFVpCq3yiMjpqwxpb47rMqd3NQ",
  "key28": "2APDkSx2GnpucDKZL6HLdUSbKD1eU6RXo9y8W9b3XAB88JWfUJ6QgA4dsx6ULc948kL1v7NKvgkJHnmBbfUa3ziT",
  "key29": "58iVLGaipQNQKy3iYcjqDttDr6cbBQ2hMJNEWMpQd8on17fhVipm9wtqt9Fd5V9x1VhZQU4tt5iq5txqCGwXQi6r",
  "key30": "LAkaXrxzVgtvTL3XBn21vy272VrSWXKawFs61CRGwgrM3q79caCJzpkQdWpH6aPpB4SNHaNbVT59pxJ7kCVXnYb",
  "key31": "2mfWyVWLzLbLR9Db5dwaRXHUHLfj1qeUsvTc5Fdoe5px7abgciBamuwc7NkForDL96kmJJDpU4EZmoN3BpwFs22z",
  "key32": "3BzQqpbjhGFzu6v7SPgVtFPZ6h3KdBpECbhVCH3bqW5k1VcEZAbNfSxZpQnwgBTA5MzjTJ1PGnsNf3yJgN3Sd7Sd",
  "key33": "mwU5QjcencerTncXEtuDZZ2K1uw5DgNJNqZYSdBoCTkmZa8X5EJoCK5mW3bnawNAhhFHwssY9Kdh7hjLJ7GuPUB",
  "key34": "5T42q2WHuDP1183N7PYCWjTEyJugDfKecyu1xhwanegC4DXPoyuU4xh3BkHHRBt7xo16yHNGkdJdgU8aKMJeTCQ2",
  "key35": "CcRf6cYpVXM9A9SGg4xXNS75G1USGD6YrNoMoMNMECdDKg9gdwtnm7LPgRHptp8cEuM2WdXqHbfVSD9aGbqYacH",
  "key36": "5GdHBAScWKgRFS8PMrDY5w3PVrViqufE2SaRJkyt9wsHQxDP4amGW7ccijLB2uNmZuULPUSGU7tS22h7doVMSQGC",
  "key37": "63J24DiQtt1pNMeJ26VDyjhnjUBtpTEbTsQE6fUtPbDrQfaqzRfr1DTxTxUfWtwQb5iNSSzL6jAKg21BjzJhwFj5",
  "key38": "21r74kuZFDoSwCSzzACdZYLQkAbYiPxkNDrYmcMq6mumMJgU6RrJNxV8qoLJNwtVZzyVSMqaGN8ZvFhVKWoBvv2F",
  "key39": "2yFT4KqPDLqgwQWvaoJWESwEBWvTZ9Vd9xhsfD49zJ4xfYUqMHiKuZSP6XNFRfMMx3yFxZxzFcMgv7pUPVh2uqht",
  "key40": "MLpoMefSxa8jp3tiEjC2W4ESjmV3nJjNgPWvpm2tuiKLaki6PFpBkiBcttgYrscc7CxPkAHWNaknP3VpNZi1K6f",
  "key41": "3ZyeXtndYZ8FNw5vs4aAepM1nNd2N8h1nLGcHoynKDnDzvMpocnDYVHSkYn7KPaQXwe6hHfAD7aX4tysFRVnuzx2",
  "key42": "jCCj64F3qMHFgzewPmZ5UrvhZcZJzZXCUC92qFkuBNFhab6RgMvFqmRPPpyLTch1jNLgjrBrTL8xYYwJvYHn7RD"
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
