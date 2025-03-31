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
    "65NzRL4EPfGwEcDydF4fa9qrruevS4ttxawFtYrCoAZ2timEbvkJ9wLxQsPyo9dBpz6vmhExiXJsRWYxvtTCNqjx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B8Y48gBNBWWrNpqRtUAsVgLCproGwc3jPvaLXXCTDuwuVgWyNi19quwvKHSsBoAdeJZWcvABN99duYvd7zyo7kD",
  "key1": "2SRQNDM8goVoxzGsHyGmeY4FNVhzewC1rhhbkbZ3bwCxcGbRz5fFzuvkoieBrYKPyypnr2QW9nhkuFCyvcpS3isc",
  "key2": "3DyfWV1tqt8cyna1aTsw6JWZEuw7sFsZHLh38vgChZfQxiTjFyZ8VTTk45QBxrcUKNUCe7ARo5rWps794wdN5GzN",
  "key3": "64nHjcjYwwdzCPJZmjXsNLoDP5y51r8iYtPeLZgTyBHgr7MhSUsWhuMyuEHfw9rG5Y1N7FiZoUVnmxTPDjcV82TC",
  "key4": "3hkVS1eAUKqxBa9vEQj79QpDmNqmkTgrfEit5tZrcneHJ1iSwez5kjRXzxedAbDDgTv9PbZLrKXpB8WsVEyGQ8fT",
  "key5": "spz1JzXiLvWcMMdbMR6JngGCSb2PpZjCFrHhAsPmmHEWkCgfqB3g51RYkXadtmLnQVXpSUV6rCDRkNQWan5EZ2A",
  "key6": "5Uv6t22BebmAYhaEgJuwVhj97ZDxGt1mQE81RBDPsL6aos8FTRoqBzkj2FzE6YptQRzmTz8iYHV53oqPYdxATPJJ",
  "key7": "BS5LT6ABwmuY1htHSq6CgQ8wvcXQq3aHspZV9AG73p6vpRLP4SYTh2oZ9e8Giri9r2yJzAvfwpMxpFQBe6yM1WC",
  "key8": "5AeBCL7NYrBRg7pAfdnVhLEH6NKdNHEmp9Z5ZZrxRcVhzaLTS2BZa6vYRfVtsRx3tQFwiQVFtTcnfW1FkTqcjLt7",
  "key9": "5EstddurQbWiwgisSciAdbHT5eVXRPrF6h7teXHMGuiDZDruN8HcCRwDMb2i6inTD2QbhEyf14bwDW5nEBR7kP7T",
  "key10": "5krnF6pEPuw1Rky1rjKFzur85QrNE4z8xUHhG6FoTpUCqT5YcePdEqEp3ByrQWPJr1tZytUAhj7ze5kE3cQZYKgs",
  "key11": "5VS7cuRZhmUKzPuhtZPSv2ZPrxXSGRAssTJzLzSxY8TAKSyzf1eGr4zGDWfAt4iekcSnHVkYmtz22KJXV9MwmGCq",
  "key12": "2sxrgXiRyeiTwgYzPuVQJA5ko7fvMxavu8MsFPGLLznciiqNEYPe3KfmS3bgvEcaTNX2Ns8f85m5GW7cA4y9GC87",
  "key13": "2mujmCC59DuMAFBegJrLJXVCwXaLZfCfZu3tWGSBEFtFXcLDDte7gQTh8q3DsyBQ5EvytcFfm4vzmL2RDqPLZ399",
  "key14": "9WWZp8uBwrceUYMAeaRXBhcdqyw5cuE7Wmu6SUrn3KERSzkwJqJMToPU2imCVw8JKyznPkK65PC9g8Ebt7LHw4j",
  "key15": "31UooMV88ELMsU59BEUMDhVgtYjVbNB9k5V3t55d8hrZ5Pz1iJTVc6U53JxNTSk2ZBRiyAUhhcYoFY7Dv8KCiDLC",
  "key16": "53oSxK2BR7UysGJjxrHLhoXvVy5oj8WqXLnpph3BbgARAHZtYCW9DGnimiH4S57ZQujuf9uE9hFHwbF8FhJnsr8c",
  "key17": "4q3Q3kYHhrQVdyL83xscczTAQ8AR4URdQy2N37MhrRxLkzVy2ubvWwrACz3mkh4caih8bDVKuZqi8gHkdUJ3kTFc",
  "key18": "gzkUXMifNxTVGwkMcT6xubu5c2bQQ4m43yv2f55V7jWVs6fW5dru7HcD61x4gEEzSCPzLnToNDwPBoiVs5kVS2n",
  "key19": "3HdK2ud49BtkSdPQiTCLMib18YVnmVnyDNDoWT1AopuQv53AiPiAAn3K5TrEGUgcWuvvxThxT9rmh8ynunDqoARQ",
  "key20": "4NwGNpHjtJhZKZXPGksk6wGiiFksUnkD9iBH4qZaEiDTzYDqrmzNgTvLpKUAVGnxkDi64QySuA4DqsYqaDZ4Q59r",
  "key21": "4NZnbb3EizbdkdYXUqydfKK8dUWxeiGWVaACSfuV6WDBJrtJaAdPE4u4sLL9QZgoExHo6tSYtvRwERAX9Q6K9Pvf",
  "key22": "3hUYd3uD29wtsTEVvVRGJWCGs5FYBdqsSvyRyeLRrjPnwkLeYwaXvZS6sWHUB3LsAS5a4pC1aWQa9CnRTUDdrsNW",
  "key23": "mAmdpJbKyXkxSCPVw86p3x9Kw8ctwETHaagHKG8HuedzGoRwgVFaiHZBxH5fpQF7rHiJ4fnE9y2hesbtF86LrPR",
  "key24": "qqN6KUoKXL7TqLyQPR26naY8263zRj4vjtE7FAqn5XuMCtRBgD4PRjurKiKtU15T6GPtga2drWhmmMHGPiaB6rm",
  "key25": "4eFA7VR2fhVNefeAaE3zKAGb9u2J2P1vMPGZGpxLq6H57UZeKHD8VgCEGhsoDH92ceAmciQuuFKXWFJYhzw6VBAh"
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
