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
    "3MoPdaSfort3g1izQG8vtsK73qLtp34irSjKRAQEWjQRMWfLbh5Hgwo95ZwHUd1w6kmdvu13af6cFEYRRE3ecAP8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hevDEZdBcTM6pgaRuZnTVibZeVXbyL2N4VUDoBqeYvgaaqdivtN6NzbD2Ng7Y5EqVaju6YTF8ee51kSAAX5t1aF",
  "key1": "2hqhQ9rTRZX8Q1ZvovvfEpWKkAVzYNLf6uLP9hRCdBur4ffUtdVq1xfDU9fKKRXx5EArgEj92Y4irxXA5JmiZSmu",
  "key2": "3uaNZ4eoYAHEiNCrkyurDDsLBkLkM67PkLuq28fgbBYXQTwzoxenz3ToXwGPGzCfuFxmnXZdvnLgr9kJDq1gSg9K",
  "key3": "24M4iZjfPMfvcuBvqFuRDxR8axMS5RjtnLsVVmnJe2iEfCxetUkgQRvXhkjxSyTRAFPAJZRTrcVMEdCJcfgNiuZs",
  "key4": "4JfXitdfAspkFyvPxxD8QcRjJRHxmbyEvN1NS96af7aBLGB9dDTUK6oukJpDhVUxYnCLh2aSBgikU15GCKLxuzBc",
  "key5": "3hwAY5of6JjbSfNBroSeQp8G4jGMKQBC3j66nLG7r9gbjqqSGVTA3uobotd57prSM2R3cpFMD6W5QS9qmzZNTBvs",
  "key6": "4ya2wsUcSPsW9cksXMmdV7oXdAcbztjxjocW1AgY1RreEgomkA7p3Lg992KqrMs5pzGFjwpD1z8epNQdfKPXcoKB",
  "key7": "Va5Z7n3S8yh7UDkJQmYQP79TFfF8uWETL51fZV4s1sdyQw9eX67b4HiWsrLD9sWz3TQgbnMXTRSUzxZnMkeFG6C",
  "key8": "64RASNtNwEwVPcUt4rxxZmr6W441u5EJLu754tYasqGd3Hj3MDGo88HrakeGckHyFwGCL9DdpM7KDTK2NDXZX1P7",
  "key9": "3xVGQbe6HaKnzSrDuH9Wn33YuE1UNnPpSpavFEfJcd3fZ7DdxhwZapTUqFd9ngJqKXPcns3yY2vSin5yY4ceuJtV",
  "key10": "4NDK1HYhkrMDShtw7d7YeNeU5ynYsxRiRuiZuW6YxPdfjPtrHYdsnktCNV4goDTZTVT7DdUH4134psVnhxv4QMK8",
  "key11": "2FALg7ZkCD1cwvDsiP8EhwaT3jo52T7kKPjvry3nt9AfbdU2fZuj4Q4Zpv1c1RpNLmsKF4ta2gf9j2nATF3fgCB6",
  "key12": "aY4C4xux2r6w7fcbe5kSxSfVUuPGDEcHPN2bfLREsbJwoYWYiQWjqhnAxszU4AbExUoARX4rTWA78RddbA4Pfiu",
  "key13": "4oYPTJKpZiSsW3MLngVVHgzD8Q81vFRP28Z4w6c4iREzY4Y1vro8YSi4SRmg2Z5shwXDG8d8zVa2yBH5QU6AZxs5",
  "key14": "3S5eP3eZ2bCYqg16bYkPznkzNi99kTcmYkR8K9Pfr6VLX8MordYF9VqWsH5L8mtzKydp8zcEPyucHozEtvH1KVz7",
  "key15": "rXDTL6L1Y5fpxz7tiGCMUvuPHzbfrTrTRyBiWejK9BR5fKX8SvwK7KnDU13uD8ZnrVz3ui16jqdpuFuZ12c7kgS",
  "key16": "4ZMLZA6AMLJfNcwZagWJFKUxEjVftBHjdfApgwNdtGfRpBpNj1xpcbNLpjPRWx82KPvz88wxCRzbkFMqhDi44kfC",
  "key17": "2xGQ1GJiKtE2eoinE92CgCDNaRcMdznrAsJhCqarhddXjyZsaSYEn9xaKxk6Vo3JqUk2wcwisskBZ4xQtVGzcQ2J",
  "key18": "ECoUzNmjvxSZgDbEn7QSzwC2tfGu8ktC4Lmhp8TBAEErMnSkNKPkVx5pqiLrU8x8BNFdBiFVa82T8864fz9swHU",
  "key19": "2aka8ReHNbAk9UpFqES6WwtcrBBVYAYQ57kgbuFLgeyDgwe1sBu8qfQh2NakdxB6Pxf88zqiEMSwcDUpbfJM73Do",
  "key20": "5w92uSmKMRq3Fh7hH9dLkjnQMBHq1zAobpuGePVEu18w8x1SYPruSjhww2TNicT4pt1UfxuU83SDxRoXcyZgo9nD",
  "key21": "4y6GNekdTcqURbssWViENkqUKr4VjCEMb4ri2TkD3jVNVaY7BSeqfdpkaQmkHAVjw6QzhsqrN632pYd4UHCV1KWC",
  "key22": "miVr8zGgQgWZf4zmuTdc6wzKqaXcro8rrQqZj3qXoyuM71Qb3f4aXkmdcSUxxB3CcE7Ap3dBA1czUTGLk5xkcsj",
  "key23": "1ZUaToB7G7QgMRzo7V76d7yAGYRrAFyZUELA3DTSzJymiL15XqxgPV6SX3q7GjSAyZezN7c786KJNuUrxfFRiPP",
  "key24": "2CkxE6hWA2J7ixWcdDbNSBZah9XkpPFPj4aRwffCQJnPx3HBE5iZtdSXgSSCssXuEVGjeirnz3UZWQcN4dZdP4Mh",
  "key25": "51uMYTFagc2i9AcyxkR77uvQrHFiQT35hiUeY7BYXHyrM8N9tsvYMMUKQNhnqk9mBYyscKBaXWVuH3ZiVPTz9vor",
  "key26": "5XqHULQ2NfepuXSZseJWMTvFvbg8K4VTFCm6oeQsiTNLHAVMzRUM4ye4Ee8oJU1dimAdCfDLmARuDQzCYLxZShFV",
  "key27": "8FdTwns1k1DnfXZiFrtKvsm8RNdq8RDmhsPAcaDLwPzdK1DoCFaFXm7ymGBRJcTJrEwWmuQtur4FNdvgYFWnxfq",
  "key28": "3F1hcYDJj6uRE4qTzsbfbCu1NaaYf8vDWuvxFYbTkZoBtLuKgYjjA5mWrYsU7GSpC9XjuiBb4S98dcjkraANo8YH",
  "key29": "5YATCaBDWnJmeAWG5Si9rPRK8SvoxSAdSjFzqdHiczFyhQgNVXsP1pgbax3qe2S9JMVUWuykTzJhkUda74LbugKF",
  "key30": "2nafFzUosYYbbTrNZX9N4sCSos4Zciq5F5fhovcQTSbHywvx17MDkP4zCAiT4mpsX13yBdBz2LidRMW2vYakBtrt",
  "key31": "4tsRuSvibWcbe8BgHMTiKghdin9MMxAWidK8jSVryowCdS2cYiXzkY8KhYVzqaiToCwPgLyjdjDK82BdEe9uhdt2",
  "key32": "49NyLdnsCqXBCCihjx2w2QRRhmPiJJYVHubWLYXYApJvJuWPQSgQNHvbaDzpVfnBhQQFJREW1G248mdtNSxaxw9j",
  "key33": "6mQkjUmTU26SUG4WRWpzeDT1ghB38SHZyHzLtZUnpo4APvTdMjChcnPGPkXgfctMBTmQNCeAXatEaypJWrRTdJK",
  "key34": "53tRaR9ETuvAqbzaGFGvgyfJhBkuqjKVxxcm5pArCupChZ8e2wrnF7fjMA7zvXwxFae1BWZyGdaR7UMTyxdH3eGT",
  "key35": "1FeimizNhYGaShCZbgj5auGyJdvb2dzvhUUWSp727r9cqaTZTe7pXUTzUzJtKjMNKm2vKZguvntvjKGvCxbafJ1",
  "key36": "4SoiVmB3sFauM8r9iT1ANdzsMWbgH9UshxDoEmgFRGXfueAB67jkXPm2fCxZ92G366oqrX5o4uUAZH9wESusMp2e",
  "key37": "59iCCFdKT3jyPQFxSLwr67GjTh6DcFu1Q85cv1Q8vH3P4hCiyxyUhFkwU37va9KtYgBCSi4unLF6yx9sJBVwqsGv",
  "key38": "tyyisP5u5AEc7uatqJkqbjX4a9gSRtt5Zc19hdGuS617bxAHp1eRdde3sAGXWGds3BqPcECcwbNg4Fqh5pQw67e",
  "key39": "3YU9c1bBvJVuQ7UJgE3Be7ewCqzZYs9Xy6DhyHC3GLNNnifCpQcXhtzDgjJGba6CdSeFBHUs35NKbPwb684yin66",
  "key40": "3ABHnZR3LKzZ9S74fEykTmP4K64TMEDy1szHhy1fyDWuuZRtXjjgn8yKGpdTSir7EbuXCsUDgiiUoRThN3Ycnvnf",
  "key41": "5LYKiGdJzZZay11smsmkCVGuay1AEBWGssCC6pY9Mz2RPAedu5WaLaFcHbjZSTFv3zVjj5JVscdkxC19AjpVa7Qu",
  "key42": "3EC3eSzGnnozfw1KuczcptCVn2kxZBjJzM52Co5dJL61LbkfgUJMPAYxQF9m8FEarNoLuvoq7B8m3AL9crTVkUt1"
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
