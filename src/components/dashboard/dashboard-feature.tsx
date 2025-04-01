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
    "22JCyNLVUQZARuA4BPfVEaE1CVoikxVVjDFjT8apT6tzmbTgeSVsxAdVL7Gi8YTgpoYWW86XgWz466KMeXYVexiB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54RVSRTxgXjb2drZFWz4YucmN8ZsPACP5Zah7VuGCLr7PGK93Vomz8BozopXewhV7n3Vibp9KPiX9zC7jK135dty",
  "key1": "353TrbiLgk7aCwYgC5LrLsSNnPop6Jm8M1AyNEz8pQxB8JF8rGcsP7zcUvHoTAxM8ShvM2Lk8wVs4tsbeqkjzJEZ",
  "key2": "32VF9sLMNDPptAXek449HidE1XjGg8bhvJmUj7Pc2CnmJD3rNQqJJQakDBu6msszAJrA2asQHMWFG95JqC9WHPdb",
  "key3": "127Qyu3GZVCbYWE6a8MMrGwc8kB49QTwkuZ9Pds7SYfmeEogLsoQkyJaHgbo7bRtgamGmG5AHs5FFXP3mQxhQHyo",
  "key4": "3UkYPXyvbNMDWhixnGsrJdn19ZontpB8JUiNTCV43ZUsrUppgPa76YEbcXxwLRsTKmZzrPkcdVZ2oTJrJrJtpYMR",
  "key5": "5iUUeBMxavkFvmqpNuYvvutDuhLjhbT529r5bCYHcETGobFfKepm9Rd8QAFJxfmoUtEoNt5UCj5CcxZSjhviHeFX",
  "key6": "3Tk9nrLbLN3yNevu2zzvFgPPGQExvxbFpyEUn2AxUuHf3ZLZWLCi3RmeoPuUEXcWgHm7YyBTcyVuhJWzoZXMW3wF",
  "key7": "4Kck7x7BwbNpnK7qm1sFmXyWRmWjXkifTaMy8a6LBBrwrLtFLSpLr592WRcgW8nxsBkYGc5u2HF9HfrhdqBPh9o6",
  "key8": "2EdJ8AzJ1wY4DfmDBBNZisdYp7RnacX9e9egAvfB3VwB75GftG7s3sJtskEvtnJR29yXv7e1mEnEzBzkBdod7siM",
  "key9": "3UNoK9KAh7tudWaraS3CTfdmZncw2xR5JenMgvPz9rzEHDLyNhqBMdpFr6zdxSmWeVsUhQrhhMpWS9JdNZQEZUaq",
  "key10": "WgaCz1iwmYonGEGQU9gw1n4eJD38qJQ5xTzeic9CnV5q5HP27BNNDSgw694hEbNmJtAHuoagqZjyPaGnXxyp9Av",
  "key11": "4o2cUqvBJd5NGCszcN6r7AUcvsNNxbcSSZTKh6DLBCizSXhgtW8euVNYw2ym6qiwY5cRmFzQmtdQeBaWzfV2pdcF",
  "key12": "52WoACsUPhatwPmRWWnzezCkHbauopNvzL3XA8AbkDmonG9NCDFxxRmuSdJCFxYeUFS31EHn3JshDpZD4vs6mSms",
  "key13": "d8mdSKGHbhvSTYxdkzFTYuSBojN6NvY6hLFoKZg94RspcigYvPh1jcihD2ojyqnmsH3F5pVEYb97MH4F2zXcmDe",
  "key14": "28K9TjciEZcxefMdzBmVit1zMx1WzmCwQXBR9bw6vkkXcNrrtV6DZ8LnudkC1PRXoRn115SXSPXRTSCDYSPnr6eB",
  "key15": "41hTuh4R6yWVgsKL9AcSUsTfvmLFfXkRRqAG48tCL4VXybkedgtnvsiyxkbFhQBbvv5yoEb1DbFAuUpJUZJpX2v8",
  "key16": "4bv7VwoAn6ttqVTZ65bSFUNEbp2VgVtDqRojdfoEibRZhaqK2icjhdxyX1RGYa8ztBpnehgy8ykyAtTQH63rNAqy",
  "key17": "34U6h6tqV6ZBPtPH88FDwqauHuLcX1ywiPrD4xPF3miCnj9rsjgjioPut6DcCpU9HBJdGEhj6a2bk3wxYYWFFLz5",
  "key18": "632SfLcsoCqyBU6fpQQ4KRekxyJiuBFEUcbNsM1EnNcwg6NU1YcZ6UMqDn4T7joXEunzySJeYRXYg1oRQM5yXSaM",
  "key19": "4rrG2apfbxtCz2J8w2hK3yrYnj7wmN2b8iCi9Bq8w2KQEQjEDxV63maEYJaoDDcUnLEcKDDvDP8KEeTVifEjeAFV",
  "key20": "5wopoAEk3puhBFEkp8Rvjs7VNGztugHJmL14LcuMxetKrS6JNTBDnjt6XUwiTJeGzPeY666MZdpBYGidPgbfwcFV",
  "key21": "3aSEJ4A4SH5wRqkcTngGeW6obBzPxoPHaL7zHvbFVgZVQg4xrX8b5pwFX4RYhhBbCSP2AEWsHS8xiEJMJd9Pt8yh",
  "key22": "4GvMiHsextSCRL22k9ioM63iCeigc8rABuhSnj9p4f62rTyeQmnEJR1L77RiJ9UQsqowQ9HDcQvAtw2edbjofVwu",
  "key23": "ECz6AiwvhbcANZhawVjcqy2THRyJJW2Gzaxz7pKa49fBJ69GLNdSUUy2S12VoKBwhwwdRZ69hfarGjzRzhMcfE2",
  "key24": "4T9hdLPfDkh6sMDX8guxVwmWjCZpTppdJKcubPvxdNwf5kugD6d98RZME6uWKicGE2ticmGEsDkwCgZaSxz63hMm",
  "key25": "2ML3gyiEzzgbWGtP6eNGW5krRnLBM9kvqNyFqVn3JHYAqGxUumZbsLjZ6rqC4MwgMJWBN3cTeZg8D7YMpTKsWCDG",
  "key26": "3BdSn96mARYukpMA8u7FVUUWDfWnqwibPA8myvB5fRutFPbGCMSkAPp9qwVRxLJjPzrWxkaGesdXWeNwpCLjva7W"
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
