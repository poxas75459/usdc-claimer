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
    "4zSdY7MKVGjne9oLKksQradaVWQVmCu3epepVXjP8XZ9B1v5S6RWd8tXmVmC1fecvbs7gJmzevy74UTuGpFxUDns"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MGeLQ6rsuRsj3PkfPYogUhaEQWk5XFcq2d6Syui4qT1mu5UNCo74rainazm7triX5vjcSemFi27mEe5LcJDAGw6",
  "key1": "5v98n1gkR29WTHBQXH8cLf17bsxSLz8GW4kecRUfi1aQYsGsFaDqt21DGg2CBTzdospQQNG7VJkzi4uCqgfmJDhj",
  "key2": "3Esrgbheohq8wo5ihD3Dv5sTSvW5DZKMrYxsF9L1x3TmDwaNVsmPTw2XPe8hVCx2JTwL3UKedDePzeQM61ArYQQp",
  "key3": "Qwigkda9ifhoRn3474RyLTvvxFopShGdaW3JGNvrxeCxEHnrPgzFHcPCMXdxYXzvaCSEcw9CEzYPkZxWV1gr1UE",
  "key4": "PKhJamCcBRuucLs9VzziuUmFepABKi4rBsMAijymwKZypSq5V7gtK9VVLzmCeC3JyNxABy6k86Catn2VZffcx4v",
  "key5": "27zCZLwk2ppXgAU45RT4mLMMouh8LiXLhrbmmmHPSeQkEERu6QYPJQVB9gCR8497CK1a9KNyDg1jfhxa6ndz9ZwK",
  "key6": "3pem5cnCQJebpvu9YY2m3EZcKMWvh7pSUtr52YLQtNTmwqceZgWuU6unpL2xpCt7SesZLKk6Ek1nzC6EKoAfEJ2G",
  "key7": "4rtVnngY1tzxsFRsTHbSxKUG5PwqcwMjUUHKKf4ALRF2QMrNdQqdKMCKPNkEE4pWbu8K2MBprViJE6wmDmUzGJUK",
  "key8": "5SrdeekAPH79B755KQkdPdpWDdp6jJjQ4w6pkyURa3vezdp9TZ9BceMj3LhWRpH617h6y8mHdG9KbhZY3dzFfimD",
  "key9": "4GqpJfRPEeRCFrzZb7i6CFMSaaWxa4rdrj5rJJAYRH5b2i5hZuaXw6rF1QbcCekWn2RwWWwdo6S8mtPJupWU1inw",
  "key10": "cvXwS5V8CEwkwzLCxnxqg9KXqLLyiJJhYHkEDdUUdntAzB441QTwKWvh85DE6F5Vkko4yNvWx8dDVV5ndqkEmxj",
  "key11": "tRtRcvXS1tm9ubw2uUnC4L9Hjjh2LzbQJLS4BwmiT4TeXPdarWMiXyRHQ9nGzJavMoQfe6f34BJwYRrH4gogXMR",
  "key12": "34jSvbP1E32c2GipR3WQAokWRJzTg94DifWDrvfvxmzfeYMHjzwdRxGVPEL3cCNWreAaKTAo9LrbSHnpARSCuSY1",
  "key13": "4C4TAgy7ZXLHZUuL3Yog3eyy87cvAKmEcTNeorTK6kyAvfFqUzowtPxf3NcpkeZunPPxyjqqZW8x4traziWHGjWp",
  "key14": "43F92zRhLXQwkQ4b2yTtUMN6TsTwXvTgXwbWeqwwb3Qz8SEVyiNzWfBdhBrks4t2vkfppFiSTJd5E4BzXq92CQ9V",
  "key15": "37e9VovQqtLTLTZLNBSB6yYu2kddgt8KqCseFAXRiAhJXt1RZ858s1DqDX2j4SCfqoFpK4narvsaF7aFrAXRRrXB",
  "key16": "aoDSqGaxZ5xD3G1H9fAzeHusrYkuRwAsYs9o5G5BuXxE1V6cj7iHXi6UE54YWkohH1oLShkuR1xx2hZ9VRtYCVU",
  "key17": "5dCcQ7Euhw1ygSKsQDvz1YDTiNMojgwgqgrpdDivp8naKd19FcoxhEtVUDLSJ3wwbsRDPwYHBnSRKUjSmCXzA8FR",
  "key18": "wmFcSinU7J3A5azc1rvzFEjBxdLtFQKRD2jGX5VDKUDoSGTB3wqVzrJYGnJBYZRH67Ykk7VkinhwLGq1mS6Txn1",
  "key19": "3wCHg5xmomURruNjUKHasNoHmzqkDsEK8T9UpfJphjEuPcKvASozaD7YzVQ6guwLsirQgBFcVpoACEvrAkbb3pMb",
  "key20": "HCSwpmyK1MNS8vysUGUcnySWkaB3ay7BMsnKFPLJaNZGYgN7m1wi8Tgd6R6rxmUT5kpA7cvXWtBjsQorJQLFFpE",
  "key21": "39paUzmvggv6dyzMgSHqo9sSWpzuktZ7Raq3QW8yxibpY3e1FjWoAojURqMoDMCbfRGJuvtSxbTsZTcStqxzvMik",
  "key22": "4uQhNdiQdeohWDxg96mqn7prUWBeuqSBrcK3LihxGoFHQB6X3cR9AHf9yDp425sRooHH7vJTXAGoejejWQdkGVQr",
  "key23": "2YteUpZwfd2jWsN34fFoniPByJWNUTfXh3zAfKDLYw4GMZvojiPrh4a9SwsWBEkx1JEFNH64BjZ8zhomicUwqXBw",
  "key24": "2GZkpmPaKnCaTy4P73mzNStQFJftaG67chHZJwrgfBBQK4XFwn2Z8gCbWr8f9ugSM4v11QNRZyG9dZ5QWNqv7muY",
  "key25": "4uHc3mdzN8rTHFaAuG92hkW2Ytw7FwexknZnXv5Ak72NgqXMdcLMkM3PTgkgsUJjieG5TCRLcsb4AtVJ5YEjbMSK"
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
