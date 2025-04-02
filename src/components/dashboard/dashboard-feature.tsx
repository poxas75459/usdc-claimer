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
    "4u6yX4ueSkasoqCK8XLAFw8S3GQVvTJTSyoevzNVpS61ktR9gNxvmFVAgazWkVRvAvkAh1YtDYWWRTn63GRqN4p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Xuq3rd2PeBzKDX8MHtZqHuVba34HMDFs8bYtxAmPLXHnZq35TLjx8TvbrScCuDYhg81GgW2CV2WSSydSEzHiNU5",
  "key1": "5QCB5wXeLjeXLioMJG9bsv6LreGKfA6Vr58fE4fndPKsBRVXTiJnWCaWZSWLgNDGjEbzGSqBQB2iESJUJGsCWMGs",
  "key2": "26HNfrQwTDaoYVcCjpJetriLWsCPWj3THVEpQqgC4FGraEFFQS3ZKUomk84hr6kkjjNGoLBKsesbb78VvyJP7mpa",
  "key3": "3vMQALgrEmaQYBhbpSaGhdCKPyVsVqvVhzhuco4cHkGrN5CBmSH49LRaKz67H62JZXYi41cDgp1DXa74Vfa59gj1",
  "key4": "sAMLYhKoFmwfX3kmw5jEat7izCbKhUXFGyF5UP1vUHBY1k11D4h1Ui7vvuQYjt35fTW4h3gCTgbgYDbm8sg6PvU",
  "key5": "2tb9k31Wcp8HVp3ezDwe3xVdvxju99PdHpmgbz9inKaWdJf1fYaQBPrwkrhKgS65Dz4FPt747K6q1qQicvCFHCNF",
  "key6": "5ZhS9mL6LrEcdRS5BQza2ahBa6LXDcKX82srXp6uSaNDpCbS2HtZs9UfriZv33A2iyzGcL2BPPR6kWyxDgP8oBy4",
  "key7": "5TPocy2kGkjVJRufQXCRW7ir2oGirVLg3bDV7Y9ssfzTmFX4HZsuSeea8tBu1XhSkEatTG5xMD363DJsUdP5vf1g",
  "key8": "2LpQgsgGgFwrZFZACkfQ8Jrw8jzSHEaZquPmotNKLR4W1UtzncRePfqEHuHLSP2Cnezrrw148KemRHUX6Ld7PVrh",
  "key9": "NWjBczF2awmjmbrTFzD6sdWf6DGrPvK1qfKun2MrbM8u9hFPTucp1tKeECVGcQ1GCDtsUS21bk3sZvD4yVC8zXN",
  "key10": "5kJqDXCK7bBum1N34RdrEd8SKXsLjQQc9d3hd6u3guKViLHaFdaumeCoDDRMUuBYZpfMsqF3YrRg9Aeo7QLkSS5r",
  "key11": "Ndbir2VB1GKW1FQTwTzcKjRS92EdPdXpvBCTTLNHRQ3EHhynbPkkDGzPC9EPvZV7QeKk81SNeUdmrxUFSCVoci2",
  "key12": "4AysXqjYyp7DMSpL9qPw9ijrbLdDgvUbZ6eB8x6apkwFuE22H6Pd4UfgKXUcbqFUHuSXbCkopMKYcmmCBwfunYXi",
  "key13": "5L33pF9ujGDBXPB6Uqbevb3Wuk1DhM93a7EDfgB1BqyNKnJctWeTSbqhqmFCrMrB34drLB71dnyrJZicCjK8GUrS",
  "key14": "33vE7soVqGkRrG1V5EYvTBegqGpxU3bAaYJdPgEtNajMdUxUFGgwNbTcKKETSEtU9k7bfHuJCu7hruuybez7qZTP",
  "key15": "BY79QnQ6rj7MinNYXEeigCes3kKo9JoTGgLHskVwygdoQF3Q1UFQvyGYacaummhVEw7LA2Azpth9vQNV82x8xy2",
  "key16": "xitLSUwAvfNXp1HKQktwCxwQe247py6VxAw3Lvu6WxgsGY67hpQVRbg216U4rWX9SdiBLtwzpPWgWCEUc9r4AkB",
  "key17": "4xvS3fSm8YpumfBJQCMdPGWTBTwKgd5ET3L2QC7MEmpj3wggTEGvJ2M2MyoxmodjWEDTNSfdvym8MjEC1dTTmyM6",
  "key18": "3PaTcXdkBuE9599upSiJFxcBWMK9xPtHxTNZMkmGrKCndMTB7nYjYS3iKGhBv9FtB3jgBggoJkB3jW5jmVPimPFJ",
  "key19": "2gxephQmETvEcam9XmvYYzJfZf4v3aECiie6iJqB2iiuoWyMtbUvRg2gNRJSSgNXJypTcsNyHnRRveib8tUU5Ltd",
  "key20": "51jCHSqpb1f9LUMGA1RE8uvVzE7Q2SvBAGfpBN6z4wyqYQ2pv7UXrjFBCADLzV9DgVGckA9FAbSiHD8Syc8aCqAr",
  "key21": "3oTYut3tu6PuCNyfseSwikodrCQ2hfNCXrkVo7H2X5aATcw5h8bu3P9ktjUrxFUNjBmjLZ1f3WgdSRqKZaKUXhDq",
  "key22": "24MLsqckZ5mkYQPYSk7DdDYW7pd2N1ojjgA4kqbP5oVhPz3MVyVXNbGjRR2npAYucdmhhLCtoRgVWdJYJXEQnYiu",
  "key23": "2wD3SGhF3FwjVxRkr8pZnJrphAXb6fVg1d1JawnQG4JzT3EHqV1gHJjb98fVCzM7Fj8kj8oCEcMF9M2PTVw62Xdy",
  "key24": "2qNkwvq2jUhF43BsfDyiYYJAi1Bck432RdUBw1N6GeQqLMAkqtdQhFe7LfsiofNCZD8EakP9igeZN9eShR4qXJqf",
  "key25": "sh3WLemjDFrPRgeLDUrGYqVq6x7smsgaQQXtrBxf8Z7Yyg5Qgnyi65PM3XcKKxjHE1mbdbxnx9BvgYGfANcxhhW",
  "key26": "47GFtrt8hmLp1ZbSvRrSSzdJDok9QpnDrXYYgGfzztxXnXmBNGtzosv4VwD8YVY6MFd3AANbVS2LgK7HKmM9tNs5",
  "key27": "o8EFsC8pMR1hbFKLvfxnQ5Rfpittt7g3Dh4RsgS7uT1ugPJYanA5jeJajt4AhBRmCXJMnnXUa7etLkZTG63gBx9",
  "key28": "2jKJjy4tHMKgg8BczzxR1RpD7aNn71KUwCH4TLStDySHh2fCxrBY3gtgQHeEv82QNFToRihVd1rFnMpwYssqMXGP",
  "key29": "4FxjVmf3iqoCUNEycyGg7DfVSg6kgG6DoFbxyFZ2gnqH93ExRHwoL9x4x6LFZmJ3papEEDy38hQySRwh6qA6GGwx",
  "key30": "hiEw56YaXADDJM1efouhpossT4WsCr9gF4VJVXX9B4wJs9GDC45YNAkW7bJ7zZErRYGTFo5q7punxQwfo5dmzdg",
  "key31": "41affcnDcpVBoM28afQwExpqgQ4KKnFyRHfczu5qUDSdhTSHWNB2S6vwtrH8xC5vkG22nRnWGE1DC9r95KC7GSvF"
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
