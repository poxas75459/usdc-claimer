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
    "2Y4rzsPyESbSZDbUgaozMYmLvs7HCRb1MtfbVtUYh8deG4u6vq1Ug66y4GfzN2hrPbhhvb1rEB2JbekYJCnLcUuQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51hypJUN14ovFnoBiTL93RPhzcXhkqXTHS5AJ1xWExo9GWy27pYekkChsU5nDnJ2ApVH5gzDx9hNGfmpNgCYQbcU",
  "key1": "yuDs1rb5HLYavq1SZP5XnFZNhtwJ1782dJ9y87Sjd46idsRbdsQDARzFHKJyQmW67z42aPBxeBHXxTq4wAkmRwi",
  "key2": "5M8u4cyJ9UYLf3DxcKEh5asBbFZHKabeTbi1ZjdAfU8czA2LZT56pDHsfoqs1VqYkAt89UsqAW5D8VBUL5xP6v5q",
  "key3": "24ZYH2MaeCkDPJiv2SMmB84W9zPkp8TpiSZwqvUjfsp5JoV6tXzr5m5RaQpu282CzAowuvQRCjQjaZZKTFrLtVfT",
  "key4": "4wnLC6EztD91Y1HVERrm6FTVMwTH825Ns4hvK5EfQTq3h9i5grGurR51BCgM9YRbdvP4EBkwFWsrLDt4nNMvHk94",
  "key5": "26m6k9wmjoVvFrJMtYMYgBtRvHuS4N9yuwqqb66DJQYfHJv9yzjSgAwQKm8adLi2CYvMw1UCyPPRUqWDnyViuRif",
  "key6": "47QQmiehLaNgJEJaThpnTt19FAGrFHVuz3mppAFqQepswrn7W555ySm5EkGtDXywaeu6zMqM9njymWo5C6B4pEr4",
  "key7": "3MNZqAQuumAnFWrDbM1BTMbJewgeVzJCb1frWJCUbPKKQQgxNcP9zZuCCugXDiu9uWwG6D9CdRWcDrywNnyioD7g",
  "key8": "5GMMUKWCSDSaDGrATWJKJ2AHyLkAdUQxwo6N5XLwHSw7kruGyz8p8NyCeGxsT73E3L44PzYAkhJbevMAztkjxwCr",
  "key9": "2G9pfEmh6wEFAFyjHtpHgMor9GtDr5ig1Em5h9VfxjY6PMSEK4MCyWJL8DS4duYyJ9rgW4Ucs4Z3zQznBBdWBuRS",
  "key10": "56T6PwuvmHnvsgEdtVYw9hkzbau4mWDP1on5PR9QCcbv5Bm2jE9H3DB31ii9x1aK9rVCC1ChrhtAMWtqJfuwqbDq",
  "key11": "HkB7b9rjuA9ruPfP3kHjf5PbjKmHSVmN3hAvY28TDDN1us66qzF4Yu8GoKipobMAX7xT1VWd3vXQ7DWZAfisnEH",
  "key12": "rHoFucYkxGdzhtJZBWQAhmhDwa9KkWg95WDMTeoNm62t1LUJ5FAXLKrT2oSKXScZ2NjkToxkBdNgriG417DGozG",
  "key13": "37E5H2Tq1xDGA8EVUc641YJreGtK1CMEmuJHKN2NfrPFmJgyUVKvTCqwsYfJPkaP69UjWnQ8SkM6SGm47g4mQmNe",
  "key14": "K49AcMsxFtmkbjz1nyZAnrWoEEGbRuP5ErNApmoVYqVtxiRvmC17wEm72xTw4jpnqgvAyTZNe7hXdYHZJVwEvVW",
  "key15": "4oqFWUZXrkQjwtLGcZYmXVrZkKTTkL4TrU2cwDDjfSPPYTRKTHqUQ52tjYNBSaxBdy9ryVX6SxZ15s7j2gtPfVxi",
  "key16": "5p2Ncet7mP6wfMNHS5fpV6kk7X31kyaD4eZnDj341sWh8u5Vv3gCfvcbDsTMtz6YmxhrM51dYmJtWydrFcKcpKLB",
  "key17": "2oJopoZXtUeFZqHAz2hpDKg3SAiXyAJTHtg8s13vmtgNAuHzXhs71A6NQPCKBDF2oUS7nFuPtvsoRMruhSNmCh2q",
  "key18": "4xoyNk68KYaYzBHqDFsVcCGSJpPtKnXf1Rum1gScdFMYp97Saye9wZqnaBR5GRcMB6az7J2DUEmT8dhmWNrNT896",
  "key19": "3fjZbkYnVVYcK5xBiQdESMXSspMX1kakjQpsxLmBSyDoDNKLDy1RwMZ428fHhFrPe72pZ9vzQAiCH6VT7uKkf3cr",
  "key20": "5N6mubKcAH9cuLLnypDAq4T6xGDEGcU8UEeeir9KmB3LHEsxSKtsRcCNJ1kzvyQsM5zgb9YbcAmHTY16pZZz3Cmw",
  "key21": "jpWKkfUST8cvAWWpUYML7vSr99HrhQpTiC27FseVs8yjRtZ7eUojgoi27DxNMWTAkuKD771aatDzq9EyFDq7d6d",
  "key22": "46ikUuBuL3Ant3M8x9xMuyrocT1Rh7UmmrtDGrdwciY7z2MT2HeC5ko2y6N3xHPFstq5LXDpyoriE5TaS6nn6Pit",
  "key23": "4BhSYeNnUuKPHqmjuNWcKjwHieqRdHvmKN6HSnR21uxvNG9CzHXTSHZdu6cWpYXbYc6698N5CFTz2H7nFsx3KujW",
  "key24": "2ErzGXjDZgDQx7vZH4VmW42RDhVpKmY1t71AD3zY5cZKP1zSaDuPdYwXKUmcv2Lssk4NhGd5Q9uDwHEqCbxJri2",
  "key25": "3cZa9LtSu3f2664k15n2z9fM7b4sosN3hpvf6FrpAzAcptcyRPhvqdAXkTr9NJ5LkPEhVRFtJftc537WRKWZPDzv",
  "key26": "d6TPfU2BYk8uhAwH9jWTBXe2hW57nTcprPgtSTpfkyZxt3nHcGsQw3LtfEERmguRUQW8ZUcfFAtPd8C4ybWe8FV",
  "key27": "3WmqyqakMf4EmHuB1qUzvXdZTfLmAvoWhBQFW5XeyEXGnjzMvKGDEj9Jx8FRH1MxeAG6YoLS3skPLhrVc3Fb1sZx",
  "key28": "3Uj8YcKKmDDU7UVpQeGnYv3894sa3Ug1JhnsPortpgwjsdKQxRBvFVN7gwaEAetPmoUsdgXrj7N6G9dD7puQVaHd"
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
