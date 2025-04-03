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
    "4dudXh4j1nMJXyUaEjab6sASPGrzWn11zDVKgo7g4ihMS3AnTMX1yFQTJMxAURqsuvRg4iLW24k9SWX3kgtAMdAn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EQPAxXgFENZ3Z5Vr2PxyayGKfWTCUsxx2Uxw5i5ZFWyTSVVpxFx9wKXPUJ2pAwHJLiDwq4XRxW8eaJTep9Hj2KQ",
  "key1": "66rD5eJ8NDqTqaa8dx7Zcs9Fnvaa6T26Fh9gjmLcAN1BrMnu9ZE7A9Fb335B25Lcuwr68FE79RhN3nbfxQadFEsw",
  "key2": "gZQnfytWKTuWesqLaBDPa9BKfGiFeXjDB3xvLDsXpZYG4bWVz3tJTjnEJj99XQHEwppyt2JeVnq4V1MBkz67SWV",
  "key3": "hihks9b8YqYv28vBzRPnwXrHUGwntTAfC9ytgQQHMCgSmYWELZxopjgmiSpmqnvvzHV2bfZDfDbQpPVShCX5n1V",
  "key4": "JQAPFh8NLYcU6FrZeyfvMxckXVDAe3X1YaGsuyaE9cuu8ArJKpvC6ztnYWxsBbPS2xU9dod9qAsX4M2819g8UvE",
  "key5": "2VmHC3QbxVSnxVa2aNV185tiLTT51vXNuSzNqgvkK9tVXudwU5wXuLADizFm7Sb1Dmoc4pgfJoSRG4ux3Fhtfwzf",
  "key6": "3yhzqysHuZwRhi7qRsFibCY7v4E9o2BbihPbMuAQ8XtRWXsmBrPhwUtiBt89LqM9a9HS1CBwaHXLim6UeAy3NJbG",
  "key7": "5GAkiN11yg5hieYHxoLPeRCPdco4Z26za4JapsPngfW5yyKUC9hyFopEEEuWXkzdLefhf1VDzXbuNTzvGY2MdLpS",
  "key8": "2RJrD3nbWN9yDMXFmV4bYqUFJusp3nQW2cdpFPuWYTpheA61aMuA9UbJsPjzbj4WxKaNemVdS5QZBgFkcVSgWU6R",
  "key9": "bK7KDLY7kjFTpweYhNigbxG1uTZiwAFZBeSpErwjRXKJgu2LCcRPWhrLERPxpb3cQ2giFbzfWbyAbn2XtgTH8yu",
  "key10": "5b5SkTHNbkdKy1s9qDf65avvFaLye2rfyR6z1Et6aHCDzzCg1ZEpiZ4C3Gsh8Ak6JxR1KBD3sLR6XBZ5XkGM6p4L",
  "key11": "5iqXdZC84Gpu7heu3H9ZSxFTB5cBvvPBPJMHgSNaM2GdH7GaYTBHskeVJ7YrpdnFzPY2M7Wpoi45aTUirPfcinDz",
  "key12": "3nrJtrxihVWfbemc5bidBWMiShS7ye8XyfZsY26Ry4WdvauRnCEmcJAqQvAJJREWERXrgXAUwU4XQc3y3RRJhXDL",
  "key13": "rSvc2F6cf392u5RkKwJAoWKJakuvuY3wve8a4UCufe9JeN4UEusSRihbAAtMeXG4NXxkAS9J15J3SJ1q9xpGqHz",
  "key14": "4JEem8k76wAHJuLg1fut2esqKDhX38AN6oqJ5XSUde5NYR6xSzvG42EZh43kcxk8KJsHnchd42GigA1vT4LjcUiu",
  "key15": "2P5kVawjZHUsCW2jZn8YeUKaS5XDSuGhdBMfZgJ4iRHBEURVL1UevDbSH3jM3z3V2kX3nhct2ea4ykiKeNs21efw",
  "key16": "ZA1fCo4AXN3Hda7xN9azQ7dPjcKvw39rshPLgJFF1wCcDSKdQbsZfxJMLVf5ToBmJMAxhJckQ6kz68LK2KgULEK",
  "key17": "5Nr1ZacNSEF8HoJzz6WtvhKm53CHXFCRwsqmdc2XDu8xVBmyMxQfLzFuXehAnZ5EZp8cMEq5ihdCbVctEkyxN2GZ",
  "key18": "5QiV6tTtBLcn7s1VemLn43o3B1yh4qtfm2LSAbafR7yMuMe9Y6XGt8KyWftSECgN6iu5XTdqhv5GmjvtdEXH9cjc",
  "key19": "2BHqZ5Mjvph1PhYvx5SrvEsS771HNaEy3fviBgsMUW6dFGrTNvgEdEYTn6f2XjAauw9Wtb3TZEjvuBBu6GQ6CUKN",
  "key20": "4wzuAv8tzDp6TyYeGeo7DqKdp9BETRPe11wNQy46CBCFnFwonxcTM6GrwoceqLod8n1fHTxM4As3oDr2NGxhcgNf",
  "key21": "3TL1f49xoERLKktYRDpqesPZUPrV2BmtCcvgAoiCevSLpGY9HTvsdMJd65yyGt6hioAb2zVqJJYaPXcEMMNZnnAm",
  "key22": "5PaiSKfTpQAQQk32ncoV3kdTn5o4bZu4ywa1N3CTCmo55e2Vunnzna8DaMrdpuopD7LEqfbzqz2KwedHPAqghrBk",
  "key23": "XKPEF4SDhU3eUcJ9debLLAzPYJu2a2A1NKWDSqfHW4tKzaxNmEnVK17t3V9ADrfWzv25gMGqgCoGiVejTXX4Do4",
  "key24": "e2jexos4dewUjyxqrMffiq3FiC7Q5yHVoyN8qXnnRbC2RXj7Pgpu9ZxZeTYtvdJ6prcn1jMsrpoYQMNJhjaHQju",
  "key25": "4iMbNxismfGNfJSELbFcia1Q15zQM1joPEUXcHbgUBYw4eQ7aMi9cbsfMfBVsFkLShy32LfyHGqhfxHbkM4Y6hiv",
  "key26": "43zTtdJotTvQgzz7ZiDiFuZ7AUgUWHZzd1Z7Tr3n1TWcjKeVyWqCHvriZs5cXba135EHTj2v4LArqGK8xaSW8bxv",
  "key27": "qzZUJ8aawaPNfafmbYj9Zrmujb8wbxAkvGW6hg5gcsd5M5g5c7HUUganBRHqW6SunuHZf1BNmMep9r6S9KMMBeb"
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
