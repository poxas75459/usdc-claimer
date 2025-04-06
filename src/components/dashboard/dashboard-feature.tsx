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
    "STitZWoqnTYagGASF6vJy5xxCeYBq9RCh8MS7EBXD61aUvAwoHYratGBpeAe3kLtDc5xzZoYZyRQWaKCoDRo9aR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XigV7JSxpNPPYKq6QCSvPTcaRLAtbyXkt528bokzWNU5S3xprsttr27xQnHKBmos2DszgAXbSHBhLMhjJTuSdLm",
  "key1": "4pr3D2hVwA3V1Ym94H4Pgh37fj4chQHZGwkej5htt6WDSHZy1N1FGPbSBbMCkxuMoBhebiHqEbfb7yRm9DHQtpqH",
  "key2": "5o3A9eDo1Ttf9PhFYRbD8Mv3yHeartRFYWtai5odQUhpPKMKd6XXEsj9BcCZzNnLme1dpLhDXipZPN7FDZGrUGXB",
  "key3": "T6P2SXvfxrCdEpacrxQM7bymxhSY8ajvgcCgr2Lnijc6FkFHLquvQkgsdDdJrP2hM4FQNmNpEEjKZWJUUAheiRV",
  "key4": "2RZHUrNWS9d8e94shRrSK7BxAmSCrAYSzoXGFKAUctTwijTfKpatoaEkWYcsjSTby3tDd9xSYqbzNbMiS44CcTWG",
  "key5": "4aWxbqrYMwJcD4fvUJwRZEK1zD8zTjkXZNicPv8mq5Y7J6mVQd1RSnNvdSwD8eetfbhKJKTyLSabEox6U9Ni89ka",
  "key6": "3Tca3skr2rgMXaGxAFxjeU2ehGvHAGJE64djrrE3rm3xEAP8RjNhqRjsYWFFKBXX1aQUzpZKt4dS9ee9N5Jn6gGV",
  "key7": "4zkhvnqPxMzHCFfUbzX24V5ETmCL3weHtfrhitUmVDqVvtsBYNo28gBCA16bTyrS5NbDtWSq1TJaP2b4Rwp8rGPK",
  "key8": "2xYhaYrmaLrCZFLvQNrD3xU2YNPp37JtUG9PX9YSCpVqmBid8rtBoc3wB1nR25Jvutz1L4sofYnVcvamKaDfQ3yk",
  "key9": "WLcd9gHnLVupyVT9Yc3b2hjH5tqQzLs5sLSpUZJnErppN6Pq1kjQ2eeBquo3MahAT4Y2qP5mXg1mBsc9X8dvCa4",
  "key10": "2xKuhR8yUN371SXxxv7ggBSGWJxQUMfUeYV9QiyF4caa7d3ZrAfGdy6yDGSoPQot8E9WkJB63mka88CVfFJpZHsy",
  "key11": "3o2CEuNicB4cAcAK9GWNSBbH29Bg7wrps2DPV2qWFqeqx3WoYsuhtTuD2NpoRgkfFbdiD3tKTgVc1Rtm6MWCkuuK",
  "key12": "6Tt9zNp5317kLBHAG3BZTwvooUSBzHUmzU4X4j8w5FAPshyocbR9X7tr8LghnXFeQdASXPY7kM3nT2hkKf8Stny",
  "key13": "4JauDYuckqbfGAmqrxTVkVbQiHWpEiWuDJJDDbaMKKwg6QRzHvcZ5aM2VjAMhKprxU4yecNpbP4GDFSuvLKeaCbm",
  "key14": "46kTnKggvqePW9gFgvqkQhkubn3px1HcVGqqURTPGjiDUHJpmQdwR2UNYKxoQRzwiHQue5eh55up22ow4fZUWBDb",
  "key15": "jm5jWvg46N5GB5nVNdRb4FpNqzxept6oSNZBv5e5nEqa3ke6NoThTT7BXpzdoeghasoA9iagZ7GVbUBuxMJK2zx",
  "key16": "4n1SbiQFwBkBJb1Jitc2KuwtU3gq79m5vHFCaz2nFg76wcEHDCYnNpTufFmoerrp1vrAf4q4eSeoZX24gAav1U1X",
  "key17": "3LWMmc4jGrBqoLTeXvDL1C8bHoDBwV1Q6KwakZ5Pdh1DgkEwwjxvY4pxk7oAjJEJPd5MzBdKyzeGtJD3qJzCCrBE",
  "key18": "512ak3GyfYMCnijTBMomXEmcQh76yTywbZXpcaK1BrhbdE1gKiGrmQFaHs8NGg4VDptuL5x1PCjzmBh2pRx748QC",
  "key19": "534SnDLPKYKJHvEzy9VpJS5PgK98TGBvyCsYcURSUEooyhySkyHuhmnxgcMx1LEWa18LRR2BbX3sngk81CCJ32PT",
  "key20": "5tQKd7xQ7Nbse1f437z31kr19rJ4kePCFKX5qfNwDmsMNAXGdRNTri93TePiFrKJ3KvxhMTaCbtw4ebHf7VGxaLC",
  "key21": "2Ltf7hrGzjzckcUvTHcNm24fR1xMsvTTy2RC9FZ8WktYumjAiiAv1x2jNn3qpiNY8T4RoBFPhRDJ4xaQ6jtstFhn",
  "key22": "2Zq58ySS3ZuojHen3pwS5RuGEHy1UTYwZL1PmNk5TzCTm85znQG35QSniXnybZVRGmp1XLpPFUpi3VLrowoPSKSf",
  "key23": "xvJqPcAawNbQdUL2S7KwJL9afourDpsPQUVyubEszivTmE5kBeYdLuHSxrakroZYvtEsjsCFToGYvx7sFFPid1t",
  "key24": "3vdS558zN54qu9Mi5KPRZq67uwg3dwgcPdb1n6gaTyxbaCD3srKTnUWX31dqmDj3yBjQZHpywZALyruc7pmHv1CL"
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
