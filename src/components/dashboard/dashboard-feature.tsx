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
    "53LsCetF7fp3RV9NHb5QVDFnL16XrtcN4hEdRLh1dvy5o6PFCioxRTfdeVg8y4p2RRLeN39AwAtZ6jeQToY9rEYz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gKpnK7yb34Ki5haJr9V47CmPC76h4ekbr2o7Jrg9WsVdaimYsiyvYGucDqmqGbRpVazQxh6uHPC3kkMQwVPccdr",
  "key1": "55p5rqqKbuC47yVuywVVytLAuk4hb45jLjaUErNyHhmpi6zwjvTfa6NS3gxi8mtqyiGzifyJYEToNZ4W1yBy1gqN",
  "key2": "Prv7CKMjUTbBTrBnqzVQUKQ1LVWrtFFqGNgPypjFaSVNvsApNceoaBYYReQ1zn3d9DarQtk7s8angt9H3wvYkcS",
  "key3": "j91tpFQixnN5dz5JHyBKcN5j8wmQqbooTFQhjFkZvRLLKhn7Gy9QCV8RFgSd1gBjXQkenbBbtLHoZqotLTcxVLs",
  "key4": "363nueWy6iR5hCso4N1VHpxZ9BXV67Hr7SrmohD87AyeZrvdMYk1VZn8f39geswacFrZkYyzSwiFHACBja5ZoMoJ",
  "key5": "4a1p6EnfWqHBpHbuMWY2PFhtnWqRMwcENnX7y1HYuh1tsxYKSTduoMWwi5tzirFJ5rQ4wnj3sg9MCTBwMamjsNCf",
  "key6": "38LhbcYRUuoh9Zdw3ioYhmAFsEVFKzbxRwxkJWA4CyfyDyaMPa35NHtBEo8ZWLxepmnoX7j9LrZ5oD3Gznd4Rt8y",
  "key7": "3juexRjPzqJs8qLs2uPrLVULM5kpqXBYZ7kt7U79DG83MY5PC4hTbJ6FQxxKehUJ1WgcJC2yf6Yzgq1bZtcgujU4",
  "key8": "2LnL9TgARGafKigvZaY3YkaMcMVxEKmiLmMrFL2sGxWM4GUnNXAfhiZr2LzSMkupDJK1ueWTH5erZEy8FNngfGVK",
  "key9": "343GG7vfDTBFw9vH8SGgRVxz6yEW6J7CPCpLVaXr14YaRq7oaEYcCpAoL2Nnk1nP7gCp4hXHNXJvAhBriL4oy4ci",
  "key10": "EkeqoCK1YGTXtLU5vLa3EuFoYmiA1D3YQGRKb9WEqgRd1Hdnf87BfXytWrjRf7UeEi9dFVZDBjAMAA5ZQkd56zw",
  "key11": "EmkTaWKFY1SQPfceuS7xgwJftYdj3e3BeeMeZXke85hJPjB4FSifdeLKBhStyb9u5AewghQR1hiH3cCQn1nX2qe",
  "key12": "oZxdFiSVQZX27N8MhHVejuY9u7Dz1qA8z3hCTquuVT3s3Xzge3VmkSc2L1Xdzinj5K5P7x9tyYbjQwHt1isw24f",
  "key13": "3cz9i9U3ZAtCzYUeFq7V222QdKAq9aaoiNyner8UvqsrKKm7AknyPkVsHPBxTWfwfuwGqSBj3qctDAFrr1RLV4Bp",
  "key14": "2zB54PkEC1XRkUo1z9BDTx34ZU6vbamdVQmnt4NGFvMHjG2CAUy4zXWR8e7eVSHLrSwNJEFK1rwhsejLGmgnZKBs",
  "key15": "5e8rZKNrhw9JMCUP1MmKixetupRP8GQk8jtARmBQZktY3hfAeGDoqiZEZ61zkidFPCfeMAznGWuaUDrBzCGP7s1W",
  "key16": "RrbvgeU4euhbyppobrg67AUYMEDWSLRPSBXVqQUsHii3a7FvUHLToiXaDX6r6XZC8H9AHyYewY8JV3cmTZ3fVbZ",
  "key17": "3DUUEU4WKdy58H7pPw65SXQy9pTPQ37Qn3SunyMWDZxwoaFpcKG6dSRBEiq3ykksF27nGF4GZX5Tt42n356TRMrF",
  "key18": "2oN4q9P7pQiKurr7uhEftmE1DJq95jnFKHzyBwHFW5DYfWzFVEdLaf4a9ngbbbFPE1Et67i4UmmhzUngy9Bt6D2y",
  "key19": "4YyDf6XPExDtd6V7HZhG9PsERV3ArcPBh3dGbx5xMDdCVhaXr1KbGAksb2aGTYHBuottnPDgSJW7cNweBpMFs3qg",
  "key20": "5csHKxtB4Q8auGfvkiGW8CzymsHVRn7ksXHCLLAk9PxFSj7bHMP2AJDiAq34bf4GPGJ5qtAWYzZacHP2KpVHwGKQ",
  "key21": "3wSBAfCjZq73bYMZ14Sz4YoeYN4BRG1iGnu2DcE8d1zQ4yt62FRhLTcEJtBU7SKBkeVeT6JTyssd36KWmp7RXsPS",
  "key22": "5iYhTfJCKS5rfGHpAatBR4vzhkL15qMiPXrMNQmYrUav3YPh3Z6kDrvWMA653kFtgjUaLgJEMULxSDdwsWtVsYmr",
  "key23": "5B7ecmjXqCYeKBLqkPa5ZYppiCwUvMyNV1sBGrcxdoC4zsC7v3nV5qc8PQFF4tVCydgJw6grd9o2AsE8Z5C3AYeM",
  "key24": "1221UpnKHQ4TEgPSbR5PMVSamh7NGDKcAgwAsknNtJHmXwQ2bqc3CLucsG6HgVGmyW1JPcTrou9Ww7uLpie7boy7"
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
