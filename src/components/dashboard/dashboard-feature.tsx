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
    "4gMWcG9RmQGR9H9qgxUDZnki1QbDnbsXrzk4qJt9Czf7Cx7vHzNHbfZthwppjNgd6vkoH6XTgNgRRUp9SQ4esaKA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WmmKhLhnR5Zk9JoWnGf2AnUESD8sttwpgxxtRJbuVpzXsNSDcNAtfWg3YP7LRB9GrFA1bzUw5XwR27jmpSaN3is",
  "key1": "24q2UabPz1iF4Fx9zmGGq61teCAYh9GJBaaYzuDNNAH7BRUG5oHibJrruXhbFWHLtc2W4Lbngue9vhQaUFH6bduA",
  "key2": "2JJSQt3hSUXpBSxcE4LsSZB846EYWBEsFXNJtQJKZHYjcKzSnj8zRxoA9C1Ktmh1mNRUQtpjJ5jEoVniRaFuPfg8",
  "key3": "4b6peZRiKpVeWbsdzSouikf4ASLC5uDK9mweYbQc3513WwaQCFqk74sjuiSp8pxpBcAtXsg1mUCWHgip2nwHV6xE",
  "key4": "5ZD8gKSZFrcsYeGRDeRGTNJYvo4mSuCtkw3uLfKhh6LUAf21WicujtgHpPrbPts9qNWWJzDVDVVKZHqpiNGxEe8H",
  "key5": "3wQb55822QwTcWNJGwVhAeQgk8Q5K17aEZyfgyMeD47FYU9MBp26DK9KCMrMZY5YbBcRTrmJpAaB1Kp3NzLPF2bx",
  "key6": "4MtByVWzrRBhs98TxWs34WDqasX2nTjC9R1w3WoBqwgscxFQnHyk6KYtTwBH1RUiCw1igEtvxxPFNjXcEqg5XN4W",
  "key7": "4e67h6KxHw4DV9WHmyukzVr35N3hnzXmbeDnTFaVJrLnLcbUD4wy1gxk5pcfMfo3ESJgvwXYRnSWwnuNdpXHjvBE",
  "key8": "38F6ttFv7m2tjJuggw5qY2vtSVtoPe9Q7WbXdBSjNe56rmXJht5kwoKFRqACmXeZDs4k7umYbQdayVWLuXRhXqjR",
  "key9": "41rW9r1YHn6biBt9RJGcc4j1vPCeF46d9bBLcEUSLuQQtNHtaJzeiSXhdiMrrPgRsrZayZ2oyarQ6XErkiSFG88N",
  "key10": "49BbDfKppFuqH7pwjRhZYF8YrcjpVd4AiqFrazK2yw2yCexg6rQiMK1STGBJ7CPPfsttLruoLecu9CeRCufN5UXw",
  "key11": "3sjrYxCe4YiUFyNSWr2KCzWDNmCeB6eHvqyMurJ6CwEUrRgg8zQiE2tNe2HGT5q23wi2qogS31Se4HUaRWqRirKk",
  "key12": "34XyKrC7RfZ82svGzdHq7GQLQ3Ft3kyvnB222oYVosVvbawzqDBUbHSD4wTxkMA6ea5wisQbu4DPuQBeWdf3RmPm",
  "key13": "QuS7bDoehwNfjpEc4NukSmCHJbLGNzVBHLUFCGjsBHLYAmkpxdRd5hhkGrAoH1NJUCwAmTB8MeVYSWmWWUZ2xHj",
  "key14": "iERRWGWTMgr37sjPgAcnf2tfHN82GztdAL4iMbdryxNwvEDxLZmbe3Sox9fnmGCg8o3nXMwBSUGMk9PUiR5TaNh",
  "key15": "2URdbukisW8bb1rsW2eGWveEZaoHJ3vYwqfWrxR6cXBRD3eYxDoFripJWdaFtiAWhNvWHbaXoSpFctLg5AojzmW7",
  "key16": "2j48tXzgCSFWWFygVRt6sZxqH5CLFzgPee8fNQxdyrnESyqkP5RbVb8zA8HXQXQUJ9WmoQXNqpgqTp4MNp4Wrn7o",
  "key17": "4Lasex2SqMmdsZ8FSjJ8zRsCUMTdZHXp6X9gkhFy6AWmyKQbSAYR5DETj39cjHXBSu1bUV4aWLtoyYGSNPndZkEA",
  "key18": "4Q8PCaYwS9hjcCYhVWu8rnUgezkZ3LvD2UsTiFAYWn86eoy7rhiMXf1bL4tw8NFZqptmehCBDaMvYc7wjYzHSTW",
  "key19": "37uAKP6MuK7SUk7ZkhVMkx68BwyuBHgipWvFaVHR2ZDmsULdmgMJtGZrRx8Th2EyNFLt8VDMgzn1k52gtvoYYNaA",
  "key20": "3uWM7A8oQoDCETRN4A8T3c1zHuJjZD9DFkg86Po9xQ8W2kvcCGQ6Lcc73FaCthQewDhXRtCGz7XRZWa8jzfN3Stq",
  "key21": "4LqAQhBPTZoAc6MTYQqRaUaYN57uQRdHTHraoWGhZTEhVLzcgnXsZunJAaGnU2mK9CNVngsc6PCHfkdQpJArYXXe",
  "key22": "61gzsXJomtYNuxBSiMHh9krJtkPoZZAkKPb2oqk4BqZnDVeaER392KPfM2QSvizEDUQK2GkuER25oYrDpzJY856V",
  "key23": "3TENor8Q1d14Py3izL3sBF1xQ5j3u3Phu8XJknhvgXf7jGV42GEqLgoZzVtDfds3oDN1Zo7kgfgY22H8r4Sp4e4F",
  "key24": "3jLtsUuR9ont44GnLGDVMH1jhvRJLQEkHwWzmrNr4bpHbDEyyx5xci8rKpSzQP2bwCoXyBpTZ2e2Mj2AsuZ7YqjM",
  "key25": "567eZXpSTZ7EG5xuDabz4R4qjanD51RnbbhSrsidbz1L9Wc7DcixAYYPykUckEkDpcXc7ebgHnYuptn3F6dr4vJX",
  "key26": "62zN2YRSgttkpSqDuHEQ8Auc9S8qUtozTVgqB4gHZdZWTLFy5djBa9g43SyRcugyQwetEhNDnL6FmvnbkBXkUYzV",
  "key27": "5xaXMpor2kquGaVMnCy44NPBcyWid1U6nqfARVSBb4fsPmZUimHeno5vc1rvDdFvFau2xCoXESMHLEtAGXZGw23U"
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
