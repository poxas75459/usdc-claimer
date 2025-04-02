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
    "3f1afJFsnGp83aSmEQ9KjJB2msen2qkSgkqfwimrP8HTjExvNTXWL8A9qNRPjiPy47GjF3hJ2Sr1LWYnX1YPTGUN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JwRHugSwVoCaMotVhh7cDQMDhYpo8jMNbTwShEdXHaYyaFNRotRJpdwbEph6E5feEut3N5GehP2FEgD9fo2PU89",
  "key1": "3a8YKDBX93bKeo3CfuNmQ8YhzKXMeqUPvnGs7GbQdn9BLzHoyhrZsCGzKyYY9oSvYwzaoRhmgmK4qCeYrm87PTcf",
  "key2": "58ntZEyCotLy1FwytwbGABahMqxLZLpbZfuB5QTZ8W7veMoUtu6DuR17mUN8eFVgVdwuwJHJXdPJnVCrPV72KKGU",
  "key3": "tziudCXtkAi984mbGz76kZVpoqbV5RkakRqequf3ZpzABEJPhKX9ndzMwJPweWVdgGZdFiLPqeb2CSVzLguXHkR",
  "key4": "4SyiNEtS1JSTToPPWmNE93U75qwpbBET3hf1auHsAJXsd7Bj3QjPVvqwdFie1QeSU6futNRRztXZazzY7oumzWB6",
  "key5": "4NJgtNT8RmVmMzDQTk4zqqjXupbHCrNfPNXMXJLDcM4MomLYtVJ1v1gdAtNd6ruSwrmVvGWyqBvKafjDvYcXggYG",
  "key6": "46AaN8aMR9mQHiLMMLfumz1s5EYmMhqVkpH9uFxuJNRVjHiQSjm3hWTLEUhvzXQgsJC2vXeMZsvLeCznXCZbdabW",
  "key7": "5XEjqJ433yggPoru45tB57JBaA9uvSDBMBksxqFfSVmw9X3xwFRGYyeamCtoGaX2CcmeVarvTswJayzozhMBRqyz",
  "key8": "4dB5bDC52QekdQ7BnTuf8fvK9ym2ywinJU1L7XJwF1EhQE6Q62EFnbS4UEkyrqj61DExqEnd2hPxEUewLe1B1s6o",
  "key9": "4ZBRnosnhkw7FJgue83qoZwFddQw44ZEyDAhnNvVdJbrTSXtVg4JYVU4FHJzwW4jvPTpeZsK8bforsbFaUKmV2MZ",
  "key10": "23WhU6nJEMuSnnZKW87JLJUD9kE7CXguYR41Y6Wy8jvdjgcfyygvEAXTPok2GwSiPnGV94uGmvido9jJHThxDtSs",
  "key11": "4tFkCaEkj4sk9kbzgeaamsXJZkCVKGFjcP94eCzvquRG8mKHMoVtvWzR3cnkn1jfBw6ShAd1rsk7cAyiZHZSJV2R",
  "key12": "3PahHXH8PpTR4VChTbmaY9oSDwtTgfum8T1qfwC3RWg1FRTTXYUH4fLyBD5PgLRabZrqnLK7HLh38uQTyzw7dCiA",
  "key13": "222dFh29y7mJVyMjboG9CTQc5CDJSBzSgQh1hkhEsyn9LRgwcY6jTCfUb9EhQNZxE9MekCtXXPvi6SnL9ahvZKSi",
  "key14": "42qUknHuRFgWvgSxtE7GdB5Tq1EdAgQqiwGL5J48HzHWRPH4dX1jaq2RYRXmDvsF5xTJ4N3ju3k7ximhbcsWf4rB",
  "key15": "5XfPYfYXFVwcBucAEQ1XK4r3sLSNY59fs9pSsDNWZzm21ghjebJ9DijNErrtSSWZuvGraMeKHGexZZg1oovzSy78",
  "key16": "3yy8ZuVyBxxVAwgY3nYFQMQNA4DP6RUGdC4ANvbXzRcde7fGgmNv7fMWhUsR6QYaZzgM3p3z2dnBwCR2weWGupyQ",
  "key17": "5CSdoupiDQjhM3kAtWw3ANHaR6x83AYexHbDE4onf9eVH9EzM4HDxfyovCCdB1rBiSppCbgumHPwoA3erT9Zp1Nc",
  "key18": "4vfsME3bBQJs4B5Hk2CtPNXVykh678aqDvLBWKgUqw8SJYyu3mAhoX4CUKXwGnH9w6135kT4JHE2CkHxVRjQXAQo",
  "key19": "4zSufMXDNJubpCjPv4g5HFdwhZ1sXEk8EVwdDTDRQcmYTetaKfNcFJRQcKZxcrNM31o7cNG6xQRrWNLwTQhmhqNS",
  "key20": "rC7V5RjXyGfrn8wjE61GyN3udGXuAucSXSEj7hoQHx2h938zRqr2CZR9B3Nkw7BAeFSVaXjeZ8S2mgpybi3sKsj",
  "key21": "3fEE6qNvZmbDyueLAaxxbgKvjUSr2fVBbHrsD6sMm7FQT2mtrGdX217XoDjqmg1zkD2R7fEhLsPcAQQ7GnP9t9uv",
  "key22": "4iBUF6MH9EjyHjrLS9d4Q63FgY2mJ7nTTNQDg1VhbFn8qV2LGEkPCg89Tb3pafYz5Nwwpse2ovg19L2pZiyrQo87",
  "key23": "55s4cKXmYhEwdw5Zu53faex8Z43y5Pq2UHHzcCZKFWKavmsSrDoxSLxtujeoEeXB1BFMEjHtXEN9T3kB4jCbBW7E",
  "key24": "3nMEVNmpj3Xe58QcbdkEdVzhztnQQiLeiwCsbsGX3Cio5ZShFPP3CLCiXseCWzkP5TDacRJMWXK8Vq7CuwzPcVhd",
  "key25": "5K81tz8auqNgvP7nh9nvDYbTC77Z79ZTajdu3Rmr17TmWWQS538FcB4EMo5KdGMePu7VZ5izosmExexxqocmpEzx",
  "key26": "3GLKM4hmk4BnbzD2WeqRpYH55iBKjpNPTLwo2xnXMktpkb7m4ivdpQdFDpuudD11HnyPKwezTKDSxLJb4W3tmyN3",
  "key27": "DSWCHoW919UnoiZ2MC2v9fPscgQeJeDK2PcvJSsEJx1RKwp8kYGQj67Q2Bo8MWKf7jBQhQEaakGSkM69nyP5L83",
  "key28": "3t5yMuvrh1cMAPTjAcc8KHEC88g9DMLwYui4vDHB52sEkGgS2KpYQyUknToQ5Zab2DNwdzwWMWyxuKMKnrT6k8Pt",
  "key29": "4pDzEjaewHaMohbkFVMDEadeyyC8XtwE79e5aEsVEAkdKiR7Z2fubhVNNtiXeSafBKLjgXGAsMAsu3KDRtVkzZAd",
  "key30": "52Ee5Un2EDC9yeLA7KYuhzNG2iuhsakU3yyRSuVjFnxzWv4Mn2CBMkWRHn9oTNtCHf6tfFdLCotcNgyUD7EcvgH1",
  "key31": "2XT1e3kFAYP1vuJKR697wTQWkw228Cdm4AGbUfqiWvKk2UZtw49YhHMEMhcsJCaLTtKHNZrfL66AARhqQp8rTCFG",
  "key32": "5MH11CQEERcoQsFTZL1hZT5qaBEyYC2rb2w6ZuiJ45UrmGoVYYRReujkWh7sWohgbdJkeZ6efJ5xvANstUA7P9Pe",
  "key33": "2gNPZYRq1etk6qLjyc7uWKmrDsr4nfePrWwhbFdsKEY2oauJ5rjzWVp9LVmiS7bp7XKo5YycE98zjcYvwn87kR2G",
  "key34": "E7p2ve9AVqxaXzRBnhdodh3THJWCnvBNty26pTdoCPGot9mEaGKDcGxXLyAWuxsZP2iWJeQDxDjPGC3mj8TBrqv",
  "key35": "2mmJBg8toQCPEEZY1Q8uUQ4ua7xMxP7x9tMqwMv8AJ9PcDaKfTQTk3LvvVBSuPbYBz9TBMgm6Q4RSMor5L56ye57",
  "key36": "3KGwQDNNcESbEy3uz9Uyjx95UwKVerXfNfFgeHmMdhoBSVZaFSuAczFaax5GJGtL15vwc787xa5AKRB6tY4UHuET",
  "key37": "66iTBV8VQPPnVH2qLaPsU8izZ8gUiqKyMZbjYJpzwCWgwjxrdwcc3ZoRqi1La8W1qw2jZFpm1ytZVcjHvEKzrdQ8",
  "key38": "rdeyibSizpP1gijtGzQDHpo765bEjGafKCjY4jjHC34uxXFP1YiUh4EzGA4Y5nyjSGRDS1BEUyz4hyuGFnunD29",
  "key39": "3BDRSQjbSHvxUCbw7JYjCLayK7oP4aGbuzNBfkqn1qM4qjoZaJHhpqgApV9Mh9aEi6HD5MFVP1PTHRezojxGDzap",
  "key40": "5bjTMcdLtwcv4kk9s9EezCv6Fg9MgnvNKaKFYwt2P4vVJm1xi4oxtbnuWReFezBr9CdSGjTwuLiM8mzmgSbDdsfv",
  "key41": "6VRcw9q73kEqu8Bm3NTHcV5UMBKohC2GCdzoTGBDo8hQTncCmT4EcLZo1dMSLUnm7Ag9FgiLMLfs6PNMayj3PzG",
  "key42": "2CYQGYJVdkBWLGJ75SSw5f3x8G2Le81tfNKgFCezUmp7vYLFp2viMzB9a3QiPqvM2BNWzPuxmvSyMXyUmidpfdTJ",
  "key43": "4uW2pZRNnGHJX5kKhtrqvdmdXTEcJQrcy9xf1wHYvuS3UoUHn2r8Ux9wWZMBNYFyg6SvYDmkDRJ3oyJbFcqXvDUR",
  "key44": "5qeU1mkg9g8EqnCbyatHo3HqcUDLMgNyUEkqBkrEnPJvfqtaei5THzhxP96wE9d3KcHpnvTS6MeKw2J3kxodWbyp",
  "key45": "rW4FMtx3X3JxnP7EiWHMX1M5c5U4ztKrwUN2LTeff8Wjm3UyHCVWj5iZe5MnN2mQo1yqJDMzpZBJCZxRfyVrwAU"
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
