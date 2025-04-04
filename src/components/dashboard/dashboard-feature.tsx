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
    "5vzgXJTAZH4Yfu5V19AToUZiYwBeNfCwXqY8MuWaEKYttimC71LzGUkypTqJbhGUbbigL4QL6czDPrieNLp63zwp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vTrXw1gqjQ7WJLwgYc5niZvYw6oiqMeHnDVV3jhxGQUqRCqpPQYgKEW1FagHmEtMvbSnpmpKUj51DcJ2xyatdsA",
  "key1": "5Kby3AztFeeaDzY8yRUMSAERHLjCxQXNiherAZyKQUMbgsF2tnf6BVE1z9jFnNJZamMqGVeam38uUq68jUbyoEEQ",
  "key2": "3c2hiv2UCLMhF9y6zarL5SMhwPfiu2z8dLaq2SyLCrhT54tQHBuuEavLk21Z68ukqKubqyWtvxkxgxvuZkeWgz66",
  "key3": "46bapqF4AxRpAgaHeyLQ9xuaWkW2Vn5M8MLTQakjEaU2espKgkCaJbS22NxzPhTv6X97ox2dL3RygMX5egzR54JY",
  "key4": "3XThXKZN7zXom5kd98HxFfSZKiL9DKVg2ze9CMnExnAocj95T3E67J1TeTrh2UzoCX6nJDGSXU5pbUnV48pt7uvW",
  "key5": "5BY8zT2ycwQVmsLWy8dkkEYxAgZgGnYyrFAShHqYACWiTxUdhBN4ECKfnznGAz4ipYqwwxvvLAnDm8Gb8tUfzX55",
  "key6": "2AUfE71FLVXFQBKKVFM56XCtFDBxsjt9Sf7b3Hdv7ARymfkgBJ1pYh3UnYAQikrL191NvmfNnYgUq1KiRtAMPGvQ",
  "key7": "59GKSc9jKydJnGrsX7zppaksZ69DyHaCwt6cSkfCWTaQffq8xjTFPTY4HCoPR6TyBbJmEphwuw4SifetxfMqBLDp",
  "key8": "3e9hKFr767hvea8TnRbNUV2QYZop25U3euiRaZBeLHdeHNtx7ALwEwrY3WTMSWHseQaEbT7u89tu93X1AKZUa77c",
  "key9": "3AByfpKGPdNSr54aM9fxkJ4ctcHfHX7mERktJdGd9jnPSwuH8uLhwsmnMVKYLfZeg2FAJisB45bpCva89Sx4QWKf",
  "key10": "38geAfaPjxFUyWbNXij2f7yuBbiAVyRK9Etrd8q2HnD9bD4DPC4dQrF3Vq8qSNZctfmv6H3nRLrfmGTcCuDkFUWw",
  "key11": "3moWo6tiyFaFh1sncAo7fXzKsFNzkdbwXKRLaPvkH7tPxxYcjpLkDksiH12vj8m18y47Jat2fUZGt2HyTQrjMiqw",
  "key12": "28eVUUGK9prYNf5aC3ZL8JkH4zw6DyZKmR6NbsJjLWSyJMr3ihqYoooHsdCAx3sTpbRvfU4LDBBTPgiPAH8CcawG",
  "key13": "2pDKhueSn39eAwWyELw9wMzLowDj2trhkfopEnYm9thESG5MgkYjhoxH6tRsPPxh5sCXFgTM8fGdyfM1gxacUQ2W",
  "key14": "4PURQNFfkxtZMovTJmrB5kgWkDzKQEfdHQ85fpveAomuTa3sgbqcVp4aT2zeGNtAiHjKnXaCJYz9R5muUCMUA8KG",
  "key15": "4DYnnPoBATVM4uUggcbhryfMvajEvtfCjcMBkiSfuoE7ovcwd1oQLzN9HAd9dDy6xyCCwJKxgqvNk5WTLgua5aT7",
  "key16": "4NkPXnsbKpgySuQNgDoeyfbmAvYc5nvpDdFuyz59C2pZHy8Bd9zoXsYnDJTt9oxgBuuNU6kU1VwFzr44D3twsXo2",
  "key17": "52FYyT6hwMfHBm68aNMKjV7m8uarTgJ1gp6vQLrVs5xGdfeMiDmd4YRXh4ip4Q2sfinoXTLjmyEhdoRKuKfvyP5Y",
  "key18": "4fLrRu4pMeFV6UTNmrnFNCpXwuMWpQ8HbKnrR3Z297DeqKpm9FTGNWYWt67CcBZCQhjyvzrHSSiraauiBWS5NgQL",
  "key19": "3u1UV75dMYcKPv3Hk9jg3Ypv9r4eeUUmWGFoeBunfCPUpzoTyiNgrteri9GprCco7kA8STnhMT3n8zx8vfmBy87o",
  "key20": "FG8PUEzjNYf2YQR9wqE7R5YvZ6pvmHZLve4SuogHxcvGaaTSVUHZRN31Z3i6sju1pQuBy17YagVUth6BPbHenK1",
  "key21": "2miAS8GmdkgDMp4RNZ6n6c6zjvs6MsdkkAGhkNzwR4oPLgrWPspA9R87jXQCETDpHNb6T5L7Y2P2rv1MLDHewL5X",
  "key22": "42BCqKuCnQXAfXvzyTYaGbMZtWZcrQwMnbyssWNnumZw4uuYUENDpdkZNS13gmBBTYHuw51fncbMK1E8T4cq7Es5",
  "key23": "383Ut69LYxy82qaQ4iXEhTwkdMgavy9LfXUWXSF3hftvZTCbtZ82A5ybiZCfoSm9SWSYTgb6Uw5P5S61qZ3R4avN",
  "key24": "2EVnyVjmacoGauig7u5j8obakF9HY6nLbx5qcUTVr6mq67p4WhDE7uFyHGcZBcis4VRP61aLXoqGxXcCwXXSjFBW",
  "key25": "2jeM6bYnViv7s9NQVz89FzFBRwvq6RTcdJLc9iLu2aqZipnxvU4bqYcX2ZYXm9KD4QNBWMV7SBAD3K3AUZpbZBnj",
  "key26": "5B5q8xjS357iQsvDjEhpi2z57zHSZh1D99djqZvHh6ZWyHJpFD3fT5z32MzDQznbVSeaApadQzDP9Hv8wA3atKh",
  "key27": "1wXnJRLmLFwhwkkPcdZGgBuYa1R1JsK2bNzMP2G9o83fUz3CEkXenCMo3Lpd1EXR5i62DkiP3Ha8ng9aLBW6xwb",
  "key28": "4rGdn6oUkEQEQGhQqAhVmTMN7i6dj9aTtwXtc6K69XwfbRZnJH5AWiVMBVhUZeshCbJ5aANgPuLzwFpBVN6gdcN3",
  "key29": "2JYrFN2pBy2kmH9FpH5RXHHiFbq69hppCA4bci2Gu4R5erNsPc2KJn5EuuobPYiD1Eh3rc6Ew9A3pDykGNPUhHHL",
  "key30": "3wmaSZDijW61XPeJSQk2oYYrzT9HqaRTmcLMrFV1u8cRfiXqDHo4C76HQB7ktbuTnswcioHifEhiJfp92xGQMrPq",
  "key31": "2eorBzyZ7WdsHDi6PbYS1VXY1uWFCvjMcynBjtHttjf8wTajYxA7WD3Pe77JvBNzXDeifk9NK1hmTBpq8hjyrbr2",
  "key32": "3QSa6EWKFH9RoKdbhVZZRjrzYzRqNtfYndDBwsJ2V9vMLFikqdFjjKvCbGKoPyTsc1VV5ihnhGqaxCfrdjswfv31",
  "key33": "yT7DVh4SLF8TSL7R9LoKrNa94wVkWrZWFYFhGWN3DEVcWeCGGwKZ2ZBPb7VQnCFJEnC7fK2vgE8sBdmyya3QSU1",
  "key34": "5EtMFLd3Xn7UBhwM6Bd6JghrcqUAgM7PYNkKMZexq8HFNBdka7CJaAJmsMN4zNdUTRJeSCBLXdxdFgbtez5cAE3v",
  "key35": "53orAYmzXeu8vV34gsajq9Y4BXV6cM45hkaRmMND4eruBtAA7H1ntPbnwmCKRiGmKbjKAc6Pg2kcThBZGPojo9uR"
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
