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
    "4pQ1PJ16T7gWv9ZorrFHZnvcKEvjEfatGDoRk2kQg3HQm2jU4Gzc3BZ1sFCNzpuuXch34VxF4ASfBdxvBQdZNcLi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2t6CPjwb2Zaf9H3hoWuxWf9HU2NKTQy8qLB4ARNuzRGbspS1dgDRb6crirY7pfzjgkBJxJcc4XKiDMDoJeQSo4i2",
  "key1": "4ij7Jm7yTpLUfGjKVQ3iGbt7MwH1YsFmheQmeGDaHmKULeYWqRgwuJv6AJCxA9Qg4b2LH2Ljn1SbBG4WrssKJviQ",
  "key2": "5E9iFBS2mHMEkNjAaH3EiZqQLH4fySf15JEFMG6SKiNkdQfSgLCj5triX9r7m7ScAuNgf4yfgE8BzSWFqgpiL6kB",
  "key3": "37n95o2yH8yAbpUWAzj7usHnwE9Kjs55ovbkRzWmtBJ9EQK57z7vTsg32m5mpMEhtDVXML9TDSq9UypajQbDBV9",
  "key4": "4qGKpQiRyNnswwScUnGSokrHHGmiHvb3VqSJrocKaSLZXZ2XSJYZCKKeTVrTqLqeKUR77GVGsxgLoXSa5Brt8PBy",
  "key5": "4vwh7vUgjaCGoS5AnsAtPHvZ4Rq1yNuY5drYQ67A426YtkoS74DiSfHdxLuBRtjpW7S8toLXc22PoSh76mVGPJKd",
  "key6": "4FCwFRRfJVaiasFbJkSum5hfURknRTTkQjhjbFjd5mTh6jBdMHfZKBuXFVbEPnngASZ8UmLZtXsvtJVpJq9nF6EQ",
  "key7": "3HoPSPQ9G7Y7yV3Fs7aMXxcpnMyZQDvLxTngc941JErEjLqS46JmqZb4NAoC4uzdCGtd66386XGaE6YhMhbGz88B",
  "key8": "3sY8FciPz5VnYmrdSFiLM9VyxC4C8bJNRrqgRY5ozcDwzRzT1ceemTATxk91wcjcNn4xxR8sp8XyKeHKxgdd1zeJ",
  "key9": "mbJ7PeUoPKAJJBAUQvey7NvmjF42GCEktcAqRoXZWKdoWhVhptMd3MYUo8LqbB7krSMsYxsPy4orAExqhrKLyZY",
  "key10": "67iiavi5bVmvAkpZNshSpiuBHS7Xv1YdiTkemjTttya9w9p6msAZuDnwqMYWzM9dMkiHiYfc6GfeSp8a9XY9oDLf",
  "key11": "kHbAB2GCGjuKgUWpE6nsSPMhmwrhCCZiVMrQBYmmnXwzEnsnaChvfAKTpzFxFCjfzo5AV4ewwSFGtfdvFF93qT7",
  "key12": "5FauUfZnBdf815HANkWQTRDgo2NtyDQ7GrmLZcPxmG2QyZyrmiyqjbtmVhmyhTSec84YW961EZsszqh1ogzkKdDG",
  "key13": "5PGyCW7U7yVxvzBpCKXcK48Z8KJxeqSWyV8tKzqLw86zR6baL29KtfrYQXA2issXMtbZtQ1nmcvRG87LM5QCcVzN",
  "key14": "F7KeQ6dVjQvYFZxz69HbDPXiLnTjubc5YfAXjMA3PKruXfxUp3piqVtNFRwuAXt5w4uHXuDGwzm3WQdZ452kGpp",
  "key15": "2mdQuBTwxoPtTbgjpPqZ5mUJYKsMfmPdwnY5Xi7gSfqLWGEErrqiWgcYWRP62CT6hWP6ehqJpGpnrWsYbzcer9Xx",
  "key16": "2WM2c6FpXzSBzBLREaLhbHiZBjRQcfBEv9KhMKosLRCpPH7euCD3x14o2hct2ETWMsRv8QDHcNGEQkviKskLgRdm",
  "key17": "63r75BUMV56ZYYh716dzK1tr6A4WGKmWdyW2RpGtvFcsCXutNX4iMkJH79Jb3u2kVDdzK8oGqo47H6Hi1JYDFWpN",
  "key18": "3xou2mB6Hvd6gotaKjBKWuoShGrH32ph6F696i3F6bvdKBD1EMCLcmhrQRhUsr8qt8LJzPsMgAeW5me9r64n2Ehc",
  "key19": "4kTPUVTgDbmLkuHhfTukeipCZ6e6EnvwSJmUwybMkxpLUA139bkFfuFsy9UA418bSBcyREvGBZzdEYUgoz52s3z6",
  "key20": "5Xx5bZrgsB3wWe7yTcvYGcGpyjdsLnkRZAfB3RjbJ15bDhzKHiodFE6LPptVfivW9LPASKKQWh7iSYc2vmK6Bb3o",
  "key21": "3h6wAKXa2e75n1cDQaT9SQK287QZaGfJ4v5scMQd3RNk3vtRxaUZztHQxh9FaXdLEJaGczEJkCW3ufQAGCGFRiyz",
  "key22": "HzdTyT12JLQJ1GLkwgGGUYwx39aTpJH93BM76VBQrcoHh3VjRJNoNVz3rS5b1952AiMeEGXd4TPsov4pQNdMQ68",
  "key23": "3kmS65DzBFFWnwdPY5GFKsUVHR1y7AAwxi42utTteZKzk1nE9aUbDidzHVVac4HRCaxBKFuUuqR5rmwH16cxjSox",
  "key24": "4Jk2AFsddUyaNPeXfL2dCBafUhBvhcCi3LsVxBpNhtBL5S8LkL7Uk4XyGsNB3G1uxpEa2kETJYWokbuuVDAWJAhn",
  "key25": "2hXws2VjSRwdHudX6Lvn3ZZQgE8Dx2U1hGgMAXAS6au2y91LSGfyfJYvg2CjdREacwAGg8fKtnhs3vxcBB243e5E",
  "key26": "3M5tij7RcJHZm4zSH37ZduUPsUn2mSxLohVAghBbcz5DA28nAVAv1LSw9XFrewFXwRLN7a2j3iGv38E3JFh68FWx",
  "key27": "4yyG7iXUyW5D5A1zfyoDujve1V3Bt35R23xuZ2vPq2MhmAkES4ToMdKCsvXnGXWHrrqHfjk7XYLbxrZBxJD4iJFX",
  "key28": "5YGkfno8CCojGBu9mUYNxu2BgpmxUFCHH7z7UkCzwiCetvEBfj5hEGytjTznbPUagQT1zm56Rbt8175KpbW6Hn9b",
  "key29": "3wziD5ttrXZZstnUye3gKMCbLwzdnggNMjwc7ZbQbtuoCFFBsGzJhHrU1cGdb2ibPXjHbV51i2FsS2MmHBwLVvdJ",
  "key30": "5wwsSGh3n3vocetG28HCAYsFcQ2Qc2Cnvr24smNw3H9M91T8gmyWCn7hKASBhsuDfLpxk7QYkngMcBC4umdcxR9k",
  "key31": "2xwKXwxUniX53cKEaF7NLLMUjjA3iXH4ZHMM4UwXD17aKz77r45ohAqV7DS7yTVp3ZaNJiDenS7DLgAeEnMXLVro",
  "key32": "5RTd6hXgZqbW86briJxeAjDA1okhoSpHtbzRfg2xuUQt5y8vXVQ6XJZBS2KJRcbEzQnhDSra7KT11egNzWnZzDAH",
  "key33": "2edaSuFCSynce72P4om8CCUmYE9tziFiosfWBjn92z4Mw5x2dPKdictiuVsuhUvwRvjh5iDhsGmK7h8bVQtWRfH5"
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
