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
    "5g3VrQNJJfxTDA7Vp8bezCAxC8ybrLnE6XYbpUSV7vB6XphrDLk5y9R6oSXbk2w3i7c9GPy4R3dk61rRNQ2bqkq1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hanDpqVMevx3TqUUnknzLhyqy6Sz7YVFqw2UBWvmnJJqKM1gbzGPxjaFpMaNtAMwHS9PBTyF6LcG5VBrCF4Uozw",
  "key1": "3rC4fyxdWWDeazRCNzASfco34UACqAd33djR4gs8kR4aK9JL5adJWxhaeWA4gkaD2GzeZmC6QtTmyHKo77Jk83Ec",
  "key2": "3fvymxoCuUf1iWomav9GWDKNWa8Mzf5WTkLmQiESVcStojpbS3ULz8mCJ8iR52cR3Wi3CmSqRow4Fe6Ca2Y6agjm",
  "key3": "37w2bShqfwidk7ecKhaLJLumMxQduqk19sVkwBzWbM3MC1HT8vHbj21FBLrL6jf2hYavcjhg4T6e5j2F31gDUykX",
  "key4": "H1am2AyVJUxPPnAkfhcmn2uvWwVbE9HuV5p5bx2zyCfcVcuSSXTyXx9FsXuzMMz38wphX2V3E72JbMsce6pS9aK",
  "key5": "2mPZryVg3knEEajMpm7Fk2awaRd8Fi54tViNSrgJzkjgbVAzhCkveRQuQuLDfe2PLS5TJ9NMvAD55UFdUmf4hz4p",
  "key6": "2oRZJPr5iPLazAmKCSwBSCyzEP7LoSc6tUfraRoe4ECi6tYRDfhGEX9G1hfSsJ3DqhuLVshjTYmVev8VKRhEMQGk",
  "key7": "2MybhBsdrbP5JbfetZSxvEUXX6BqmcdwwjXwePzbrCqZGCakWMQd2k6gcXSpyxXfvhDdvpEdR5xZbA23bbysTeY8",
  "key8": "2sprxAbfCJBQwXQFuoSV33xi5ENWvPGBpMDXUfEmhsk5txUdnvcjxJGdmPgo6HL4NqV57ANpLuz72LHQziauusj7",
  "key9": "5TKcGz5iSzFougwfUpC2oSwLZjuisFK7SnZdkurkRi2RBEccRyLJamE4XeRcnChYVQxMagz7ypKDz69Jw5towh15",
  "key10": "357Sbpqn8w6gPMgciTDhyTeKmU6DtoQ2k4Q8xKyQD9tGotyqutMXrrcAvgk7kf17JVHLfprRwK6sWs5FzvtBuCmz",
  "key11": "2ZpwteRcBj2YoNusKQfjDMcgVTUb86cLBAVugvDca1G8bE7HydX9stUT4W4wrRTtCFbwSXtd9aoxeHHp7AabvaGF",
  "key12": "3XLcakAixmswJJ97rMopTneErfFNRQWiwHebtfBy8268GjqszCGubq9RU5tEBJeU7zD3ReVsJwYydECqfHAJmcdw",
  "key13": "5sJfNXBx2CdJPF1vAzhnL2Nz7s2aAzNYeTPpcNkgWdi7CUHLCLn2x2RUgExdh1kZ7mKfgMq8hDuCGVDCNUeT7wAF",
  "key14": "4HT1EVjD4te95Vh9Sp3GAunQxganQbYnAZ1o5siBhKHssXGv3fDNq1di2p1V8twjvTphDCDQ2J4C7nQ9rGN8PY26",
  "key15": "USAhv8rrfH8MAZUVzuqwSXgo4XCrtAaHKobGqcjVoPR9z8KWqcWJH59ZJVKb2k3vox4npiP3a3tAGCJAtf98Stb",
  "key16": "5nAY74KPvtTt6UiEcdkJUrtZcvJMFVCtgUdiZr4zDuKung9epaDALb9VUCG954gmK7sriZnh6ic975qNVJRRDZ21",
  "key17": "2o8tsWFBMiTLca6HVzhZ5ppk1taKoDPFazWQEAZUjBiNu395TqjHWCKEuDP3ACn9yt9CnrFjzhxFU9smTHxQ7bEL",
  "key18": "33T6ovooj3gTyMEPeJCfTWgcqHcpYpKWb5BjXPUwET1Tfw48sLGo4gajckvhDNQpcp3VMWF3npX3ViWEfTkNZvPJ",
  "key19": "4pVjYVQfgjifFFBqCjMoCXfVit7VPzcjPqQFZoSuttShrkzfhasgRxMTKdL1onNrBWHRtjeLK3BfJxdkWckzCwSe",
  "key20": "4qmDw2F3kWoakmDztrdh5Yca71MAiezAGKcn17CuZPfi6QE9qZ2xTbE3HudtVGoDAvUxahxzZnuuVF7Zf2wt8MS9",
  "key21": "4woSqb6T9Ksq6vwqv8KQdL5KELnyj8UUUWgbB19Yh82cRnFP6PZEj3jX1uiHTTWCWRDzfk7oCLM9WHyhjprJovMD",
  "key22": "3WXGMEFnuKTonBLyLShCJLe7rLkH78MbwKwEgcEcyeMbx59zjygv5WNr7xPiESyDWov8qmJ9VJtEd1yBPEcA1Wxn",
  "key23": "58D78Ug4x7PfUEQHJRAYVfLJPx9e66xgbf8oWLh89tvePvSEsSK7QgvzTtQWQroFWf7myJVYf1z8w4a4MJZ4ZsNw",
  "key24": "4FbwBEQ74Z542DNUAbErb4ZDik6hAy9MkktymLJKrNLZAZRdMPQWYZHo4tjwVjqeEWNMACU7sCFrEGv4jjv1PF8H",
  "key25": "2NTbCzfrzYWoB8mAmgpi37p7x1L1qQTeD87Fe2jAPKvvvF8sFqUT2A4V9pM7nbC1HK3Z4GHt7ojxzqNocFBVXkRY",
  "key26": "43uGNGCjDDUvjYKcL3Tqtc6UnhG9poftQd8LFAjSZUQb7V7fq26ZisDNhFtzxD9pPQGWLuL846ci1rAotrASktrD",
  "key27": "2VcixkWNNETKsUaSvb4Z3sWkJgCtD9E4tWTGYCjrSwvA5xD47DNBfaxoYZoPVCzra5vPcG5m14dFCFzwyKZ2NGNk",
  "key28": "3hAFwrihBLx2NugPrHqN2MfbYHDFd5wVZ2RCKiZ5rUo1EnBMWMJ9fAt5aby9waFpGgtuWJqbWnhQdiAcQUJ5zyyj",
  "key29": "3nDFFvxPqNi2PyRQRRjkndAY6JG1epkT5nCigo5cG8HTmaBZi87BR5WsY1tF5sozqsLYZ5CqPKr8HAk1A9mqVFPh",
  "key30": "5XxtYQ67E8Y5wDLhhGuXQGRuTJZ8biM2zTicGSAYU2kT1JEBebW53iZrNmP7WPyczQSKDiRp9YVHARUz9dQ9i8j6",
  "key31": "2wkY4tNJWehHU37Rc3NYpKt5cv7mh9DNAR84KSXfxe9NWNWVDMxQ8VBeA5koLhtyr47eoThVUDEZhywo7Zb1kv9L",
  "key32": "2STBjXFQBKZ17XgjRHZjpzFRGamTaf34q8tjKkbcnNxZtoZA6oxyo93QYAqyZJWpK2vt35Vt3uffVbbndwFQHjvi",
  "key33": "67KLY5mwWtkkZz4sHxUfd8BaNWtnyTP8Lf14tmwiVSzt5BZikH8caZjbQqKgbEg9JCKq8ek9E1TEtC4cW4gBJhKR",
  "key34": "2F3mNDP88GQUivQjsWJwQ53zrWVCQnjiqHHCDAMEynByyDzzUN9NqxpiDjpEddoWxUpSbrF6otPKQPuBFLAZMpFb",
  "key35": "MfkiW2pgU4xA1DLQZhqFFp1owdySCpGZrx7eK63vZxbYos2axTEXMxAkWHmepVn5rv6Csba1fGWBESNks82GMZj",
  "key36": "47f896B2YdTSwAAkDwjSbw2eizmdggxwWwfwtuU5nZYgCrZ6jduYLJ3unEtGTkx4PVJDvLE5aPu6tqq5dommr1nw",
  "key37": "2HQnhJZovscWtHhMNMRAQasDgTYZiFYi9p1VY4YP5LcCMcAAYD3XYLobUgaKMSUXxfWTwmpJ2cAmjEwhB795wJm2",
  "key38": "3i2Z9JoSVH57TQ3XV3trxmgGWnhbMghAneXAG5tayrHuXDv7MMqyeboFp59rB42x6erZeyqXkb7gFZLuPLKeXyy8",
  "key39": "37jiK3r5qwDKPT9whHw9u3dbVwxgawNm52fxnk1xjD2BQGFDfa97HjF8KXq88Rr25Mpthmhd8cwSwFkzdwTJr64K",
  "key40": "23omkAe6AS1Cu87oWrtrrQ5ViyYAx3RN2ud3Re4t88Myh1xcxFv2xn8jEbVKQSrNAtsdDDLsSA6TQDzBu9kg65RH"
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
