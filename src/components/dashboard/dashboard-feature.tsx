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
    "2kDJCNor7KVJ3BvCxzsSTS9YohSsY8e4DbV2BJwvbCWJJKkF9m8vXgnho8GTskUMHEP5cKqWTqvtKF1HS8qbWaVB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51B2Dj4MGdpeqKfMyENB4najGomFFXkCkK2rjFdq4inhGa6gDevDtKiBTUj93DEpKMhNQVCavryFWphkYyS2cNW3",
  "key1": "3Nw9jY1RchRokhXMUt2exnWrFfsq51UvppMcAwScHBW88HM2skdZx6n8yArggZipkEgtUthMbZzGc2KzgUN3joPJ",
  "key2": "38i9kuSwNbBCj68NiQmR7ez1gf2hHdFFqVtfDw6bz8sMaNPQM9mVeUWafNwYVa3k9azWE6f68iSYUpokfThryh1F",
  "key3": "5hnzQuYd4ta4J3gzUAvMPj314qZHaEUuQwKXWKLMhfWVUKjvWbcB6mBMy3YbzP55nCdHoJzj1NkkdZ16rfPaqK72",
  "key4": "4R9SAAyRfqTx3RjsGy91cWPH2vDRuqZvTsR12p5vyTx5tLbyaZGzXYrsfFKBu2H7pt7evQBtJmtuEDXeDziEVE8H",
  "key5": "azXjYiDuJnMqBCeuLoSURa5cjPVyfXeGkSgrcKRfZiCMVn1n2q31YKnYm2xHov7QkjDTYvRXZciFVEfaiGs7vwD",
  "key6": "6b5jeFHLNHvrBmazafneNAZN1pDLm7dpxJNWjUwgoAUzc6xKpheqvDRBdDxXgG49YubDZajfL7kmLKWjgTNHBby",
  "key7": "28nBARBSzPoK54c5VtceEb1V2EmkbAJnSxeKNyicrYG6EaatsRTBqgDSX1v2cvY2XeF8c9maumHiMfBTZaSrUCF9",
  "key8": "3FGLX7EqXQhwazsocgGDnfb5XzpQvu48NjQTz26E5XVTFtnd1XtbPJVU9sr5uUXrWShwjwj8ebFhqoH9P5cS9pNt",
  "key9": "2vfqApfkHFdamgYBCXThwcguakd3c1afkSauSqY1Bj6VSzAGCkXvwnknifUkc12aNEXmhGjX9mpgAHUoJ5Yc4tBK",
  "key10": "gbYof8WqCgHNzy8UK3t22voaCsqxNxyDLgCZMhNueDpaaMeBvYsCX5sXRqCfqbLuw5CuRpDY5mWJYuYkkBpD9EH",
  "key11": "jqsWyNDsGYZJmcGwKvkMdKqqeZduYJZiTpqyAtypLJi5jGm8R5hUHkuPkAEkBX4AVwzMUtN29kXerb2xokitw6B",
  "key12": "qBKYdgaFmQURVrZ5xEx7Bu9dbMJXNN6RS8dHLFFjuFGritquUXs2bSLFPZvpX3Wfc5RUXH5R6koiCuBGdLN4HR8",
  "key13": "5TBW26EzS2xc4g4k6cRHKGerM2JgBsFfvEemjgtxpm7QhkYLtYPWp4a5ugCrMkXK5osqoNyK6GQkVCkRn5HHgWPQ",
  "key14": "2x6Seemgz1McmQLvN7zombZGqkBvZgNimAf657UWECeyvWRLzbGiRq4S2gqqnn3WxrDs2uPTHXAy4JGKG4Bcp8Lv",
  "key15": "4P1SW4gPe1aBYDZY8UaoT5AQpQSpek73nKjGg5pBRbWqoioL1AMNgtqgGzMvF3pPCBMz8QNVQbnUH7SCBcCmiJSN",
  "key16": "5NyQsrPCr7QCnK7AgHYjpujRzNyGQGqZjUxSHnFvN3rbpENThp4ZZNmma34BhDxicrH8otz6F6GjFUDiTwXZHcsX",
  "key17": "595ULGgw4PmQEf3nceqv79yF71m4owSqzHdbmhuHmubHh3mxkFAwGKPrCkVqndhBZHRoiYusgNxBHCkioH8gWFis",
  "key18": "2q2GrJbDDNTHmFynaUDFCK7BBAwqbR3PawdqTraVsHdPMpxL5GmXmqSDwMUHj557vrCuG4MgCtPVMsYp7oSqAdJX",
  "key19": "3BNv7T2kuWfqY7zc4anGuFM3NtRZvYG6E83d3kYj5osSAB8xX4R4dhaFaRPxeAXgfcnon3SjH4CtqyqPptj51Ue3",
  "key20": "3QaBCwXLM7AyrnVS7gPCRVo8FfJiP8qVuMySB6ZEoDX5k5qtdENSS6NbnK2uwVfCkNay5dE52oQDSY4LfRaygyLB",
  "key21": "4qvnkSBSousX4caf4EGbHhYnwrTcih8KqdaS2gTqSienx86hrcVZFDes3KAgBfSE2xG9rj1gWomLvtbZ25UhmD5",
  "key22": "4ihndPv5ZTdUZHtS6j4kKaJo1SyTbEyjJpVRaATyJZWS3QN2TMRD8Z23EMiNcsrSHpnujgwEivWAVmtadAVcMvWm",
  "key23": "2bgTTsKgLwKRCbAAnbqGyG5DL6sX8QC5N3zpsY5uh9TEzMNZkTt1DiN2HraSdKpvShWWXKr87NV9MYFqw8VMgEyk",
  "key24": "5MBVcDhyoYswwj7xffUUcRHoi1waZuEoZxQEgtXuNRtDahc5PYqwor9gjvPmGmnYUZNdFvR7NFn4H5HpTZCXNm58",
  "key25": "KwQ89ztrxJauTJwwLASc5cz2G9FPHHUVQ5bmGHe823wE53XJV8k7PtttKnzPXdWVsM6YNe1fZqwQ5bDmboVk9pQ",
  "key26": "3w2iRF44QFVUTxGYJdcwX6ppP1BaqifrwiPFk9AHM7TtpYjBL8FJoV6NFDUq6nvqcCCo86ruL46sbRreRYEkCppp"
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
