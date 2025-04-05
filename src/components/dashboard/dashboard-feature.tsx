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
    "5V2XwXm4DUxyTRnYLPmoKGo3LmAaQm13acSUVFUxH3PN5CDor6E3ibHZUB3b66DduGNiHLQqvVoLfGuU6FbicFQL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aehFsWLoq76N2AmJHu3XBzzf4uwDcWDq1oEq5xDh9r8m5vXDDDDN223ki7h8QKXhjZE17JqoLGTAmqbTWR3FwiK",
  "key1": "2x51o3H1JJKkybN1tEVzLEy5bYFaqirsXrmWSCwjii9vB9V4a9ytgqvydBwcwEzeakDpFaM1RRepwmHvwBb8Ygby",
  "key2": "5PxnLKrwzZT4mqRrj3jd9mU2jdS5GX4BSvNYk8teDnmSgKPsUsK9YPiu27fhsXzeEeC3bv1J791RsnTcQ4bbiDn3",
  "key3": "279JBi7xcSESQKb1Fx1MFGanviTsrKJ6Hqb2iqss3z7NHNw9arKB5fBSozH5u7jXqt5Y2ox95VviNKS37puA8mtr",
  "key4": "4q8b6aev599t9RVyjwhVFstLUyKrneUF9JmtcPqciFVnhcwP5L4petjNyPukCAtsP2xr5FQrN6YCSALchQ1pSfMT",
  "key5": "3TwKET1RvY2RwU5tjcSJ8321b6J1Fi3YSDepb478ks32CABmGjJts9pjR4nvEcwrH8wUcbAofR38ibr7z3XbyXaX",
  "key6": "5ySSoZvcToFyosgGjJQVB5c6pxxh7CTiTz3iP7AxK22UGUiDfXCNUijVXwJdebBQsir2Unfyiy7EUzdcwZwcnr3M",
  "key7": "8qcFZ2pSiUzLHe2vLdguVYUczgxPY9b4SHAFrZsTU97nZRhnRikxMXy2shfR6AVkApTEEyQhepcE9xLweMaU5rt",
  "key8": "4aYkYGizh264Nw3qCJvCuSsNcUjn3kD9jJwnqG8CpVEnnPKQAUjgcdG4EVFSbAty26AQyamzbK5VmgNsCSpUtGtD",
  "key9": "5etLs6r7TTH4qfGjtnKTDFaYEfrr1cxRSQCM5JDPLfKYjQJDi3aoEUivg2q4L6DCd8XYUQeHKbq9PgN63aNXU5Gx",
  "key10": "5AZMAJJHgHrQFDBqhFrUG7SCD2H5zcVjZ2KvraTU9uVir9W7pF9QZ27tqCEQ4iZVwN6m2N22MeXo66FiTwgguLGr",
  "key11": "2DQuKaP7d9wDkNo13Zf42MLwwXzkVf6i9ixvseyLPK3B3MPrmLVAV5epHewx76MQYxW7uEq1GLnMpkjnthv9RpaH",
  "key12": "53QdDyGEs185rL316jvZ4iSu12PGp6CkhAdWJt6W9DrHZGN6VZn884ofA8c8yabG82McGEqnGBgMeW92EqppSogr",
  "key13": "4wj9xoW5vz3skWSRYJWofmxPFXsgAxePjsiEPLAvJ38jrDyFdV1vGsHUSGNfvYFDk1JkSXBCpoaV25FgvXHgMjaU",
  "key14": "2J776X6LiKxDPcekvpdrVzi3bgb2Mrfts3nnxJB27xYsPxGPYhsRvUifrSa6e9G6f7cbvuoyjxQMxhcYtUuqsRTq",
  "key15": "oiGxLf3ovapjvUkYYz7nq5pqWGhNMbxSQ5KQySRBddki9H5SqVXqojsSxnGQ9BQw9V3yfycDAVfxKSwYyoViGKU",
  "key16": "4wYfF2xaqUz92FJuPhosJ5KdWNoKS5ammXAvUiQQgP6uKYkzW5Zi5fwk5tzkgLGZRtdELvjSsErFjTxc6h8fZjVs",
  "key17": "2j47EPzvb46mb4HAEqEEswhwJt5t1TgNwUmGCrtuYYv8ccygVAaPrvRtZH4UrumxPgNmfasQtsto7ctQxxn2qRag",
  "key18": "5i9ifm76a5GkujgNDZsrcCG9WVCQE7VwwWKE7x9g4iMdvDU1TaqqoXTPCDpNbkYbLcei6GzAzXWZxgM2ADGbNrBb",
  "key19": "3eEvUCoGz5SrTQqJ55m7CEqwMPkGPZxvFim1LWPyiHoEfXP8n8z5dyBsHJCwphJSMYBNMW6BShKSbFjZQ384YQRQ",
  "key20": "2kd4ZuUk8wQufxNrc4p2Qrw3xyWojwSDAypApgkBtxkVnUUkckJzd5VKcgXozriAUQ9QqZsFe7SEEKJxx81UoLey",
  "key21": "pPiGD7n1tbH1J4Tbrg6N6ahvq2vB8znAU4x7QpcZMWFdhwRkLT8NrgRy247b8wpGpkEkef2me4V44A9SgwESaoZ",
  "key22": "4TfAUiq4N3kszyFX1izivKxkUzdLKLksoqyPhqd9jbxbgkjrHXFiimMWCH1jx2vrX1jmhDNF9Uw5PFhe8KQb94vn",
  "key23": "PHEGduDcTNFwvpy5b8tWEtMnnAAt985msTZH8uqJ3ddDfX4eNcv4ALd6Wi26aLBZsdgBigW7T2WM4nxwJnX5hsy",
  "key24": "5SC1deYVhD4iRuzN5Eg3Uce9qeky49BEM1V1AVK32cAL8kHHLA5wDFmWwaEBzx54zD8Y66ueUqHMZgMHPfMHSk9u",
  "key25": "5c5Xqbz29vfmZzj2Gs52p5Eh5U8AvwsGTAsJy59V8GwJLdvg617rqbhihGodHxaiijwyaqB5tDQ4sgjtUwyLegKy",
  "key26": "2jJaF4sGn4D14uu8WKyzZ5bP3ky9tzabtt4ngT8cFoVmL7PbPhCzY4bjRzSRrywA51XKSHANzm6RZoiLp13YKUN7",
  "key27": "21oeBEEjLgBAuBHfCgfhpy6Fnk8yfNWdUjEsqjJsmMtuSaVV1bnviTkAJREjie6veFwe7QJXBeyFpYV4C51F6MBz",
  "key28": "hL2VhwUzKKGGrwuMrEGxbwCFGWvo2Se6PQmJsSiasCPypGo9vSTF1o8MrmUPfPPgK6xzg43vdeV23FvSGd7sHz7",
  "key29": "2aq5g9ysH1g36ibTxD3ErfEvBjUQKS2Twn7Sk6KgiAi2WiPNXpibmafwLQtuqtqkqugjJzvuPDFYHSoAgUHJTYLn",
  "key30": "XTKSg8LrdRf1qYSGLqJufLNwJrR4P2XfZ5BbKmvATcFsVsyAZgvDDNDUYzjoUijFLcWMmrCQg3kQsy9VoGPuW2h",
  "key31": "RhQPdN6nNTbQbvfN4zZf1TebjmqavAPBTDTAWctodyHrGZua6oLAyUWVFLN2BdXW63niW6SQfbsQgMBPu1sdjFX",
  "key32": "Pe68iMPnJp4UTvhnyTbsMwgsFskbhoX2w5iwosbUedJjAMqKj7RWWBEVMX3pFgnrVYUJ5VmcWUF1QGQjdMijKUK",
  "key33": "3X9jR57tbZ4JE81PgPgyqjkdwRa2YCPtpEqAhnserpGzD3A4ByhyUupoQAsU1CcWsq2omBGv6doSbsqNwHF3Jfjc"
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
