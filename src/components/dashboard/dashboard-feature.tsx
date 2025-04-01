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
    "2Wui3GpNFq5GEcb9ULbzkKy8iPx6Ept3HZpLi6UhyrmSKwsytPtHMpHcPRgaYyBdi7azA13o7ncCzQ7GzDRpWQN3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36h9YN1N3EShG6M2wyAjy5Jkk9FmhzUGd35LCTf87hBTVxRVqPfMrah1bTxeb5rPoMnjhT8BPD2gPLt1LvmyxiF3",
  "key1": "54j2ANv3jvHLdmx749qNyCXJyxL2zAouXYL46cedfU1h5aPAsHnJ3HwMEXPnKXPfqGXFhZGutrcwdpKxCaAbHhLV",
  "key2": "5f3ziX1t12xv89MeNy98PaaCJvoGE2DjH1WoXYucyw6iMFo1Razae9edaXyF2c4o6rEGfDRsD2PjhkST3rnEtauQ",
  "key3": "KdKxZeYAqWhixYJyb2nsapA1RFuph2amdr7yqjZ8G8etKLu8YKprGFekoThkaPDfXwZ3zjzFYd1aBGTtLvAKkew",
  "key4": "3hncx9nBHFZ3QusbV81h3ASqRCJxanNDccYmX2sVZKqdStNkDZgE694BuK6cNFtuatoMMep3M92M4hJYA8PkGTrV",
  "key5": "3yY4SD5YgiU3z2QHMaeZVfLpTuU6BS131dwx2BGBXzPpE1o26S79pLn1MxRkn77dw23VEYSsB8o2x9ahET6aWR16",
  "key6": "p6q2asvX9Ee7j2k6CmTh65XgxHN2sXGJWVoZ45KR9LJxfv1FuZkPbUCSZmpxQi9GMX3fjHBuS95VZauYwBhp34t",
  "key7": "2NADZTncgM2aYes3D8EZNjBdgceqzUkBAUYFUNDoe6vc7dgrtd5LdjXsxJSQayiQSEZ3Yrjpijs5PKr7UyPxMqz1",
  "key8": "4QQE8wka842CfxnZMzRE7yTX5zjS6cTAv8ByFts3K6J5ZTw7pNHRKuwtx2UqWTZFJVY2ixADWfv4gv4EzsTXCRJi",
  "key9": "2uwmwSjo8XkuRDGv1Vmh6RuV6juQM2ufmpuiGy4h2jis9zitEQnZR27Nf6xp4LAudbSY3e8bCjZG3zbQarnq667g",
  "key10": "5m6adjqZwWz7w3PBmjwMiRH9BqexH4QWdReePTj1BvBokHtpxmStH4svAQe8KAJ877FBsjgx2sa6TgS2Xhg99Xad",
  "key11": "3sYPyXDNJPDKe38GtAEgTjFD3p3fAzwxnz4V7Z9S2EJtSoyi9S6uPDm4qvEfqJaMyaNrY41hiwuForPrqsLFqJ2R",
  "key12": "5Y1UVqJ7ybGkWjPbtamM2vYVaK5N11u71rZ3oXVXM4Vf5NWDUhDj5MVJabyjLYSqQ4sSP6qG98jKTf9aGcct63wL",
  "key13": "m2zNk7L3mqog7FMxUpYShJTdhZyaW4eKYw6KBYeE2ukD2NkMqJfjBh99VVfEyu3dpqfb4afz2yGPkKK9Motmhjx",
  "key14": "5Sj2XUtxFXda8G1XaMh9uHvpoFmaqUMJMwnqZMyfzurbcwuNXmpEAigDXALUdW9RcyKR2FtxW4Sy3yYy7N8nypkX",
  "key15": "2vkchycKu859x9bHb9dNhhZb7sEHpUrRdspK3qWAvdi6pDrLRQFGJtU3nzW91dinEQf4casgdyeLtfoc5cTW9fGW",
  "key16": "3bwZdMekqVC6L6Mch6zvf86GnnFeJdNjyVveQsJrde66CsxwPwRdGKNFNtEkg3Q4RgngDFsXEkfoixVEFgRcJPhJ",
  "key17": "4XH7zr4vdaCeTpsJDGPf9Gp7ahHGYPhY8424hJf29zKQm2d5MAsfXypEMztPvRYwen7W4zP6jJjfZyGuu8RjcnQV",
  "key18": "F6rU9d3aviXtDiMAYUERDESoMj9uu9EPTHwURPeC9aWharRCMEVfajMwnzt2N21yQHxsxLbivf8Ma6ujsXdHt6k",
  "key19": "5oahdnwsgAqPyJMcnbs3WrntaeQ1e4RAxqEB8J9RYeL5UaYmPccHNNj4EGPQBHwyMka75iLmHhv1QyZuLSEst6UD",
  "key20": "a4i2uLPczK13syqTuThpMCBJrYS5XfqgK9CQvnhKoWtkvs3G1VBY4xjbANZ8ZVJhq3S6DkEvXXu3F8Lh6VCSYaP",
  "key21": "PQ7H3Xegbk2hjPbNGYHgRPm52MZWJpvPj8y2UC7361wUiD1QutA1FRhJbtyfW8UWw8KxooBUEa5W8jmVzdce3Uv",
  "key22": "3V2evGpqALb85cTLnqT7QGaj33cssYNDiA4k2uqT5AjpwG6txxNJ6qjrnWAydJP7FPZVKpkuY5Y2nF78icX5VMpg",
  "key23": "3jNGdLyrAgsv7vtYz7aMPyAYtUoib8cqF96FxLtuz3KVht4ieedX92oqHkURZZHj7WCvvPDwu71QZnXBy62p6kRo",
  "key24": "3fh1jp5cdhECogDXREyLaou21FiiwW5uaSVgF7TdYSiTR5sYS9YBGXtK8QBM2WivVZ33WRmxWTHKUsEfTm2tznQV",
  "key25": "47694uCA9gx8YrLCyq5PEi794x55U7xftZuSj2XuDgXRHtZUrgYBU6uraGvCfU86etyazas4YSNegrH33rYJK7LA",
  "key26": "4QyC1EF5teNcYuw5W6uwkjADDZkHH29vM6RiXkSFz98euwDaz9fWWuu8AMgkSgzG4QZ1c8bw3s7rEq4FFHWWowGJ",
  "key27": "2bFL97g9HK4dXJLYgFyDMUrqLeh8EgSR9M46bwk4uYb4un9okmmPxgmQmfDpxtrPnuvgNmfQ1r7YsbmPAJEJAAQs",
  "key28": "WMiCa8qswPvzASpY1SUMQBtbumi42hexS5jtxr7GBPj76CSgPzqce95QAPZu6tSr8a8dBjB9gUX7AqUgtw8ai6j",
  "key29": "2NZvYUiAKUhJ1wjfCiAx4VNGm7uqfYPfHjMMUa77uHznnjHANaJGBRSujCGZ7VBCeSBSQN37dQoZc5YXrwPPARyn",
  "key30": "3sRV6QdC9JikbaUk2Qa7ZRYQE7j8ugzYUxNHZRRSNnq44RAbtqsrKLfuKqQnJxi8FYS85jkFJqYvuQCHTG6ksTEA",
  "key31": "EnYphEfWzXH2aRyWvKiNUftj1L9UHewJVwMakgRPziYL2iMgqVuVWTcbQutLkyp781G3E76m82CRRMAPSuYhSFG"
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
