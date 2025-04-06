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
    "4SDRtoS23eYcujW8P1U6NJ8VufKQcXRXwVASc2D4X34oooQZM4uv3aPn741GRHvqvY132oZT4pBjbJ7kFNm1rQ4W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oeqtchL5QviaPmZ7jBTH4Lq4M4u9HzVzucEUrazYzFtZNzsG997e4KSpkToNKcpZGgAoynvvCAFscpfBHh7goUd",
  "key1": "4A389zcVphLAJ3uuQdnSKNRWS565mmuvrQSqj2GWTUvvpytun68jb17RM9KzNm4joVBL7EQL7Suo2dcA2CGQpkAw",
  "key2": "519DNfUVAPzSSahgH2S9BiGCEEVCEeGStRaGYne4gMYminnwRtd9AXbyGRVGnbj6aZPeGZarPdPSh1GEuMFKjfaR",
  "key3": "xKv4fLCTt1fnh1tF8oMvYEgTgzP9wNXVsSXjp3LYrfuKPR1XBZ6zb81ZMrjtyFxdoXQNdrsbERouxJyaSADjqUp",
  "key4": "5xj346PJyCsNPB2922EC5R32Bh2RfT7dxeWpn5oi8EA58n9DFLGahyieNsXXoAzqDhWNyLWbPDKiDGRfBrWuD2YZ",
  "key5": "34iWazhSFjty9kv77VDQXkKqMn3KAZNxCyWKC6vEWUFEpYWF1iLruFWW7J6ZBYFae8JwMDJtUYYsjVsjJvrteQG6",
  "key6": "3cNCAbkxG3LZmcfDPawNrBHSqZf9aWj6xwoUngRSDKXKwgESPG7d2bxJKETt3fPtGngahBA6Zdp2uWRjSSqXNf8e",
  "key7": "4FuT11TRx2Hg1nZ1Z29VK9D7uaRczfaJP4w1spScWz4PSXLjMRErxF8nKPCCuDnA73xA8xCMWhSE2j6KJax9Demj",
  "key8": "3neHuzGcyNRDfJP7W2xe7yogGAbUvdsC3TSKpNCzf6rqpR1Zg8wfnxboedTbBhb2J5p8N4xpohfvpVhBVP6WA4AK",
  "key9": "5T52DeJchmLQDUsBTNy6Bn7bEYWXb9TaxXEVfUYL916EJG8eRn7UhzUWA8mz2KV4ydty79kyXk5bYPxPXNdxHY7p",
  "key10": "B5zpQW6m6CCkwjMyHa5ZKD4KTqhybpHUu5Ne8KmNkcFYiTmU743JuxeRTVWX8xQ6BZRwZjYo9p3X1Q5s1A2CPxZ",
  "key11": "2JFxpZecdJuzAS9rdTBZW5EfmjuoJKSqQdRt9hrcbYswJpn5zF6nRBfh3HVA368HucnfjQhu6X7Xzzp45nkNQEwk",
  "key12": "xcDrKvj82vF9KuDiMgarU3DVGpi9v24uXRMfn59yuyhMGJYy4cA1P7b134eNpAo2BKpmn7dBsEN4JcB9zveiCTi",
  "key13": "5hL8s3p9hSVg9CFT5mbAUYC6WWCjh7heXdEjR8XYkbcRrvRQUJhGTn5RBtdU6NjcffvKR3TYh7BeB3cefwAW4NgF",
  "key14": "53v6RJ7btJhSK5rzu624Vfsdp12xqrvr7AKXjV4pFZBLv7qvYc1snBDFqRnMMZ1EVSEiww4Kp8LhyG3Ku3T77J45",
  "key15": "4XJgCctxeSaWmhZvyK7qCtHzp89e7NEFiSJArriN2HeGMxvVQ99ciebR53ovAhrATxr8izD65aMqV9m8YVTsfu1A",
  "key16": "efVDCC8tgRSSb7u5PAGDonYpj7HFMkDgAT6D7tceHGEj8z4hZuAcudLEMLHDMTnb1MCm8g41UEXcFfWxUQ3D915",
  "key17": "25dZsLpfeRvccLbCYcUZ4ubDNoJJXTLmQe4hEsz5SBaNYn4WQMq4X3ArQXp5D1bxoqYd8DfdiDuRY4n3UJAhqKt2",
  "key18": "4qfjfFJNYiSyBUxnfjSqBoQ15W6maZd4CzWc4acPWQRARz9k14r4g9UXhvCcbdDPEB6XtygnQZKp8oQePSFQ3GaN",
  "key19": "3ttaVebwvTssHfq7fvtMAMQeeoa4x2DrS6xL6SyAdNUF65Knmk2b6rquZKpzDVqQ8MB698ohez22B3ibuzSbVSaU",
  "key20": "2uqc8bX4By4ySqtf9q5qNnEeWZHH4aApnYTWD7tNtnetRknNjV66QDsf6omPyjatrjXQiovFmEqd314FADvMBqh6",
  "key21": "5uDHbZGRWiFv3Z9H2DK6zxBKf3phVvWqmKdJrYSXE3e6o92ACfj4tgvapHJMoa8WiE3Cy2uJXv6xFi1a6NYiGDmp",
  "key22": "1tKjTkrxcC6rWQhin5A6WVc8tF9qaVgQWDBCZttDKKLz46bkyNXdP7x79txDrafTdY2TZtJt83s7jvyR2xpfgNZ",
  "key23": "3VC8aavWbiQSnMRRzaVH4cx1nWuq1khkpoGM87ex2N9htpFUbrUPd6zAUSnDxiw8GZ1SQjodZvE6NkPMh9NDxFWL",
  "key24": "5a9g8XjtanyrrCJqchpvqT3D86tX2R34oqbUbo14J3oddMbb6RcPatgQD1325zrXLmnUuRz61mEithgfCL8L23pe",
  "key25": "9wrtpR5vfJa8qLgLH5LQFerd9xREAPQrmq6LAq4xDtYsxS2bGb4keV6DBXStTmZzuaG1rY19X4EeidjnaMWknb2",
  "key26": "2pm1K3N3V9AES2mVqcTSXQ8964TKUgUw5WVjqa1xxVyFazSbKzHRSMgQAmqsju2jbcqFaSJhgPNFYSqUjtdbQcy5",
  "key27": "5PJHyFn5tv3cDW7TsgdV7h1drwX4pdrdfX6Jv1LgQU3uzxVka7yJPJTJHWfp5Uq9m9Q4ccPUvhUkZPSL88bBwek2",
  "key28": "3gF8zfveiDFYgPmSc9apUiDuCzk9RhRpqHJN7RRvaqDT32o8Fm3mrTDMGzqhWRCPSobx1N4d75cQz5HbpSFBjRaj",
  "key29": "3Jzg3TXyqVogQJBLy4Jw7J1zJF1y9LkCWqkPh6ynYXr2VMfmd6hZaWdGTr2RbytL5DKJ2Yf8i1Rd84yPLV96WGsY",
  "key30": "5jURs76RStD3AfEYHQBoZTHhff742zUdeNKPPgfuAZc3oN7WosY3BPY5qRrVTUeMGx8cdupX2WC9fvcBff5vYWdT",
  "key31": "5aP5wsYJmNmPfjneA3iRrraRMLEAh7maZ85CRrXtvQRsxLiSpPttEUQqr5H91BwmbiKPZcpo4HxRFXmVpxKKLmYm",
  "key32": "3Hyk2uTxzbAP1MdFxzKm2Zs3657b4X7BpSxzx3nsBKw35vC6auCvFCxVuKhCnRsTW4gWfjbtcAaBRsCoj2w2YZzr",
  "key33": "4kvmwpPuZmuc1aQVVgtW6EWCLYP32ExcNTYqr5PneNhnAVfYbHuo6u3HfEDt1q4LqQYsSNX99Ka5S9eeYPEQacUa",
  "key34": "2wKvzzdYEpsxr5m8p6a27z7LVeVobPZUXQFmxRHqf6REEypAAT5QjduYEAeETkLkHRc66tCPdMNpKaqf7hv7YGFa",
  "key35": "EqXs7cauXGQHSKrWpHZpp1Gy8EaemJXxqSe6AJfcM1FvFUXqaszpoFSwrSJF8JsgQXhEqskhNxQwJCadVaJbG5c",
  "key36": "3eaWk8rqETNdD1qTRVDCb8HVLd3FKPywhtBrafzZJ1Ap25DE6k19GCVBZeHzDh8TZ2SGCixRBn6ZDuLUCcnwH8mp",
  "key37": "GYzsykbcsA77UPsdhFJyjfrzFwx7PJHEP8tS5pg4riryvUMdwqDSUUKY14KcjLJeK1WzBUyLmrLfD3XU4qsD8n4",
  "key38": "5R8YThU3Hep8Gyg5b3ZLeFPuyiWCFubUoPHT5gDu3EuNHbM6PK2ueoJe4LHK1HegJjL6p5R7N7qYz5N5JVZpUBLm",
  "key39": "47SQECNTCgRHbbNqrJaz41oxYWN8cAZnGf2sJNa7zyGU5e9wnENvNHkJupuo49RZNfsnfhJEnZp7jtDXV4UZG2nM",
  "key40": "2GZFjrihBDXCrvnKHh2kYPcWddDQYEURT69dtkqyyNCF7QTDuifizeNRHoQc2WstwPRLkg4eESHKT7hqrYKjMAjW",
  "key41": "tq1tEoQcX9zVdz2omLAFGgYQdKEovQgXRuWCKNrE4kGFwTgsDmUm5iBAJr1BwuxWuB7pRPvoLLwe2ZNALCGNtmU",
  "key42": "3w67VVKmnjR6wTXNDTVUwwMnoXcPf8w7RhjQehEtUPKiUfrrhmc2MzuiKoaxY9T26rNodNK1isu5XHCQs9HkbG61",
  "key43": "2a6y33XugAcFHENjnTacGJ9fs8tnucGTjxWATQSkpvMWpEP4DUspr1gtcXLi7sTq6b7UdtsSoUC7ruSP3cH76mcp",
  "key44": "5NAkxqYrmKknKvyZJdzNstfbCumo1CS12XiiadfHTmi26cKSs84Q6K9W587tmkS42D4LvYuPncmUgNW28orEC1Vy",
  "key45": "54MyXS6ADkxXYzVZkxWcaDG24ji2ZTh6qSUXDNbQVaf5NVbWBfVYxVFrUr9BZ7VuVN2BQZPnWfxoyEw5pSAq46jC"
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
