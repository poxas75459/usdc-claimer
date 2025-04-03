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
    "4MPN8eUhFevaRpP3D97gqt4SqYbiatihmUdPggqxmDavGXepWhnFLTNXqGaoEtpS94dzfa6CLRpHvKR8BWYSSaqY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aabyV1d3jKgxhpi8iFaE8NBPvZQYnHFwhWfzUvKV79j72dSpMTGjGhpHCpMs86v63LjweB2A6n6rmZNJYZaDFyH",
  "key1": "34YDKGo5zMbZTQurxdYkpE22NGxXWvScHYLYGPSesBpYBaJA9g7Dx4JG3sKFRfkPsGr3xZF4VnJHKdhWGjDekgwD",
  "key2": "4kyxwjHP9Ax8GxbeCmio6RKL413ZfEzay7mzLQJJaUAbMQwYb7XhtnkTekgqqo6nN8tkvjZBz7vRaXA49j7TqmH8",
  "key3": "PWxGwMVCpDd1j7bFcJuAibeutD5VmcwBYxzQkB2g13Es3ucBcoLxqdMs6T3Uaa78SreuBBhBSo9C3rGMJBmPVVU",
  "key4": "2tq7mDrCDSgtSqZ7ict57t42EDgWvemnhsYbTkYQGPpSYunfmr97njzaSdPbYXnA1y9ZT2xzMmJpnQwBmQru1YP7",
  "key5": "2i4bAAaf2CVKuXq6yLeLahS7AjQw3jiQtwtEfxzNw8mhV58XfCGYtdefp5ErY8Vrf48k91dHS9mGz4Lc58HBNWvS",
  "key6": "NqpG57hb7gefYYQFJe1aFGZTs6XBE2W1otdrE8pzrnUe826GqhXKUmH4pfhuV9EfevPn5C3QCsqaE93D7wWkjnR",
  "key7": "4Cdnfap7d3Yq1wBaVwSs5Uu4b6F5UuE5eudd2Ru2ybDJ2bwTh5NtatYqxo12iNdCMzPhf52aTyFeKmgKikJCKWZ8",
  "key8": "5SydybS1qvb73oqJyaBHWpnrYKQbmAodbcke7oczktMJ4oVWKV9mKL3BWvuN6j1Hyxtie27PS9nyAcAwjqawQ5TJ",
  "key9": "36KX6sKNECTXPwBUQNPabzRS1jXf8RHdhvWs4sDBNVT2yXBb5Hb63JWhh7Qu15rDXtJutHQmba1YD6qSBuFbWFob",
  "key10": "2WRg9M7jvdtJbjLarukv6KF6hVcWfxevsKW5qFE5csWSTpMSocKMLa9HeDjKavypG66wtdQbzkjtaLdhbHiUfF7x",
  "key11": "3aeD9CAt1J4zbSnxbug6jeeYryXgqNFfJCFNERPGgjSv9nswPC2qoNZPsULo4rgK4JBzfKnG8yL1nt2KET3uRuHs",
  "key12": "3KaSXewqy9JFybhygH23x5guuF54BSaBRVqgNC9kfkywF4VX7PE7yYUdzWAT3hEfzLSwxSN7op4Jx968Pr5f4Ywm",
  "key13": "4SKQa9zbyx1aQtySmKDb3KyrAG1NovzaycNkXCC7jiEh2X4x22w7kKq3A8kE6L6ahADxdWp1wgYWQRWJWaxyhboT",
  "key14": "5yykHg1oBkpm1GEmRjTQuZQzZEXahxZnUcfG8tXzYRBhdvha9ZLEUJjKbhPhccHQNauidp7gU2c6RBYiSTcVqaET",
  "key15": "4njNFcq5K1HLkdgD8BvPkymXZMWEkcv7FxEqBDLXXJy1cWVH3THpsigNoUXi9RbCoRGqoqj2CbJAHc9kx4ygUt2L",
  "key16": "23Stkq2qTJ7cDmvYv5jsjbbbATzmt2XvFYXFZDSL1Kc6RDmKvSVzZZEkrrFcufivY8Rb9ijs3ZcsW6hYCeiEvvbz",
  "key17": "4kMNPyErraiVKBGchmoyMGKqttgxJqz5SEd8Hcv9nxMsNBwsN8QarCsAUJibsNXnQHh6PursvEryrbvqB19Q2LcG",
  "key18": "475jKDgT8oWHysGJWwN2YrgTSBRxGu8GpKKQeR3nabVz5KQvzLQj6yP4qrWFA2VXVERry75MhAqB3NqRVTeYPcUu",
  "key19": "2unfqkVcLEskStUf7zpRh2wxeeRFiJXPfp5DM9DZBj84Zyw6k2WhtTQGrRmGYthePbC2D9yEdMFaVSTxmiUaq3x2",
  "key20": "4NWpz7875jwNwW9AuE38NWon6hwXYjKbM92DD7t6PsL2UUHM33qphoq9NUKL1h6Y9PruBweNBRPiXF7bw5nTfcsh",
  "key21": "2P3PtD1DX1KbGroRyPksHtAAxdqDEpiYhdSRRHTYvRdztVBRTW1DVD62T274gn4Gd5aMjdBYTVSn2h6QfCJrKU8p",
  "key22": "36WZxhDc91CZMYGwSpJAYLTovTMJx4DhvE8LWJzJmqJkEjiid9rAU5TLR48bdscDd7wL2XAAqcNdfAZ4aUQ19tCx",
  "key23": "4nQoxypRg2G3ktj6dtCoWBt1HSyLtPrqu3912JJkL4VZfteXTnPRFj1AE9xvHWNpYeVqwuRdcbmai3sEF33mkk7C",
  "key24": "4KjMHxLutudJRgQdwZfvH75qoZZhxpP1rSNa8tvjd7sLdFSjtSW9R6JeiMyU9CKaHLiSrqZBxuC5p6M3j3nJjxjs",
  "key25": "4FGMfF8mYaWHPBQD8SpAeVmjvTFoLa3oeU41SZEFM2pnuQJi8JV5ANNKfMP5isGRyfExc6QvnQNnq35rWYieaQS6",
  "key26": "2brBQyBKADHAM8copwQCfTgodLKfbhaN3vRYM9xzrzwX2caZ7aZGFza2vrVpC9M19euhWb3ireeSPczcqGn1BPmw",
  "key27": "31idRoLAM3WyPEXHtcg5uQbRcmQJbNWfAuN1ELb39Y2FM5wAZboXJyjW4d2TVGkzdMtPsKgq49veiMAQnh4hAzu1",
  "key28": "5i2GhFuoHxWKFrK8KiTSdb2L15LEfdxpabR1GjbdAu74gSE4pPj1UyDc3faCWWxqcqE7Cz7HzZjaXDdH1C1dENoB",
  "key29": "Ue5RBr96rE68SdJwboqc1hH8FDUmqq7tC6TXVtrtLCHSPJvrmb87XTiQovzbMsgv51yLquVFhL3p5zRU1sRxrLH",
  "key30": "6iHpSesmYv1SFXiyJR8DNRLNwPGie93xbyXwDSDdPkgZ4GVCb97MT4ty13SHNLKrWkuRRGLxUWujAz1Gxh2KkFv",
  "key31": "hc7tSnvCRvh223rhdWd8u2xhbxYopvkw2CVFBqtd6K1mqicwDQSEUBevTwkSiKWt3LXPQaNWaZNG1eWWqaMMNVT",
  "key32": "3gSgehYRUmrU4k4zFDxMLS3KJEqsPne85tQXcZBV564g8LtYN7n6Kwqy3wC2qAdq9hKe59jQBEhn1KKR2DHkBmyu",
  "key33": "4eQziu6PscbQ2pz9Mt2GG6BTp5vxSA4szkPedGmc2zBWgd95BG9kMYKdpLCVYecjZdAauKu9YJtKnn7xR7KYXL93",
  "key34": "4Su6TdjrMAVmHKqv2G9zGEasxn6417yqRFWkb3s9aULKoZ2ZprMSkZytM5VLpY11nmPztTcRjxRH2yghY2jiSE3f",
  "key35": "3waF6kBqo6mxejBtEjURzA5NSNyre1ZmVNW85LgFzkFsXnbZ3SBB67xJfhdYAWj4JPREdty4qirfczPtTQoH1DX2",
  "key36": "5gDQb41LHrJWCj9ppTKaoK139NUyipMuK6AtsvDpRWPtGEXD26M84YDAUAyKAtmK9t61PZVG5GPikkAxRPnMu4D2",
  "key37": "7Q5fomQ96XC3mu6c87YQc6Tjh69dpwzyw472Rpq83ayAr1Btg6G3oJiJKKCGK1a5WhbLBpWK8XgsnEteTwA6GTJ",
  "key38": "owCaFLER8bYYDYxrsdiPoeY8owCVUpH3GJ2J5q2CGPaePfqqggE43hHMcawTbs1nckoToPL98ZypvbMRNNkDozS"
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
