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
    "57aZZuRtytYY2f3YtPEhwSbfbGRnqJV1QwHSpBL4atefTZvhcpMP2yStAVFfjmUAxbTuAQZRvn6oexdVd5EjnWU2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Zzpe7djWZqZQKupneNgjqNa1ADgzbvRxgriUKPXJ4rgmEoJ1cMdK4vNU3tUNJH3vwRkcDfsUqwjgbZimxhphD7M",
  "key1": "5Qf4jcpwcms43PLN1m6rvqJL99RH96weCz3eZuuP5Z3iVobvptPnvBiw1gmViPEvKpFULGe9N9jbPsSjVZEN9hDF",
  "key2": "sLiWbt8oDCSdeUoCLvXtURuz52FHSjhq82jHEBHM3GXRFHBWezNDLwRygsZ5PQFfc9g52r1VUXf6x3F235xbNp1",
  "key3": "6XpBYWPAUZ7pw2Kfff6kNh1qasHg1tAoakWM1BvibTMtFWqCMLztJaMDrD5XVMdgMqHZYn46Hcmzx1c58zrDyXg",
  "key4": "4TDsD2GmjT3xKMdYvTazra6fqPbg1vXdhrG97uVnqsUr57cRHcuJAXdNR4o79SDmLDrJkU2KmBuSPr1JyuA4CRmp",
  "key5": "VyjQXx2MFXg5vbM9rW6eKz9fKitMrfmT5pnXZyWySuCoCkssp4HKfH7dEbVrhTNMzkEFJ7W7nWuo6p3YXYiHUvw",
  "key6": "5XRnJ67h2QvjsQQ1CTq4ppzuiWSyXnYkH5QPzTZyfzr7XVxt2cS8oGYw9qZNjPeSkE8nPYUudzdzSyseT55KR9Fs",
  "key7": "3iK3L3jcfSiGvDbhgxrh6DmmswtLCAA76GmQ9wDSndf4V7iseUsEJKY2VpLf79VoPiQNmuSeYYKxF8ogNDn35udZ",
  "key8": "5A9jRq6sPswTkgaAMjZ7bMAfiv7hxxVrGAvoF5mPEDF9LrhjhxRiMZD5zyjCGi8jtCbaLfsJQJbNKbomWMD2mDm1",
  "key9": "2PpaiMHseqdTs4E2jxWZibzpqPQXjhcGZEhB1JBFmpNiNzwg9qbPbQCzZuax2DzEpr9vaxCLXxPrwBsZbPNmZts7",
  "key10": "2xkZwGw7eji9MeAiZdesaVfncXCG5Bp6DbMVKwScykttXwSQcoVGN6ESvAwMLLiV1iApvqU3TN3wvkz8mQFpQLaL",
  "key11": "4fSPJQrp2Zx896knipXNU1J33jLmvwzjB8F6n4Vf9BxuPd6CCvpVfWZ7KfJ3AEfn7Q98UyXZTNDjbfzNin9NJXT1",
  "key12": "5BFc1Gga9PCvkh7tuQMAYAaeLc8YFXSV4wU4HGFfUgEErhcXdA6tB9jdC6qauZr2Wg7cDqALZcbVohA6xibAAxux",
  "key13": "3qw7Sjxjtwukck7pGj4XuW5vJ1VcDahL5wc42b2aYnZeEvE6VQG3tZwTcauqxqTzkJpTsDuisw3Js2Gmgrss8uUj",
  "key14": "RSJP1YAhTFRJs9ubwEhsXnDNyHD2CEFWsqAbmhtgYZ2kaxNKvVLeigiCvqfQqm5mEtH8FBWu2DYJ61eq8WPsQEk",
  "key15": "5CNH3s3W8ieZyDA1a2vsHrEBcvULBHoPuc9h8hVunqzpcrMNbTvPjxEeFMb1K5NMZ2FtwDQWhdkhGv13YbdK5U4i",
  "key16": "4M1GYpKKQeQXtjR9pcGroXc7DZWEj1mR687TEL6nPxEGjJP2RB1bV6zsj7UWr3vQw5GWMtfrHxQB1Hc8FuZp3pM5",
  "key17": "3ADMqtUdtQNTpDCnW3AABNEfaZaBDhiMwLfFBFQcoraFvjiq7mq3ohBFFboHd5iTKwdqxpBR6dJ7DtKEMjR5dXGv",
  "key18": "3UwTK3x1wEn2yFNuo2Se9rhhCptTzmo1oMXsrZLgLaAisBkS3e8VRFqqjTvsNpyQxHuDztwxiu5EEYmTJTLeB9oF",
  "key19": "fmYboh97W11LQYw7krmkKNU46JAUPkGxh6HBugQ8y6PNTuR3vJCa3jYGMA7yVW9BNGv2xWak9dRe6Uq9A3gYfav",
  "key20": "SXHwBFJ8Ngp8pnskkUEaEHTPQb1CzZaGa6mj6hHDcwMHkwDzKCPhhmH4pb8691oXAhSYt5VjFYpJakV52bP3zwn",
  "key21": "2moGNkDq95ZKPJLmmPB7RN89rjAVLARzdHpRvXxbubjJMxU5CycfbExL3woMFJXQiq92rjpFkLA9EjaVLB5CWvAN",
  "key22": "31NXDuQShBMLtaLPoS7MmFamcT4zgvLS2RLm5A6pCprpiythDYRssMZEDtvG5cThq6NFQoq2SeXvrvYQhEyXaXH1",
  "key23": "4rSx2rwGvrm6eF4EJ4jVYVA3AfvLs9Vf2v96pPWwThv4qnAzyVe1Rtd4rA8mjyXzycwVNDqxcKyFVx8D1C2EuTnF",
  "key24": "59up48ZMpmmtDwxqKid1QtbC3LjgKzQpW8NZ5BE19646RaNQPasY5KjNb2KmiHzwJ47r1mXMMrhWT83MEo5VqjfE",
  "key25": "2sikiotsrGMwgm6zrUZCip1YZr6LofQesviBTC5UeaAcDLE3HsRP7yxfzMEpgGeNabhY94mNb1v39AWdYiWMSVPv",
  "key26": "uLww33vm2F43cbikpm2bE8ELR52msTJV4o7tu5p2qtijPFd31Xc7t2Zuq8tVYhqZssMwCNMqe1DPXhzCG4mYgzN",
  "key27": "2HKko8z5wPQBXjR7MuPyUXSK73NgKiu76geKmi3vfMLcdSrCZsrCqZDkHzrM7FLo1bFazyyqx7RHQNuwJc8xhoDv",
  "key28": "2fbdKATBJdEM9kDcXXAA1DeqagxxUDRmZt1Wned1A1ixV3uEsQjJcZkgYUTsrNMy4fAqPN57RB3eJPjxduZ7hM8G",
  "key29": "2W9BQpYns2BDyHcwxxaxJZELLNDNoUBvDiUQu6hts6jczm8Zzp4QVqAvYPzaHXUSAmE1bYBKHGw51QMjDSZL6YD7",
  "key30": "2pmue8X9qoBm51aLgCi8EwW59AKbYg9kho2jThJDvJfWAN1ZaRxcsZXmniXkoTuT9Binh6u9ePtvLakiHD9QfUwY",
  "key31": "MHczHjG6fTzKwJXASRuhFs9AdsnwpYopPXyFdW5QGgHxS117VH5c14epWGpXFG1wpfagKRrVHyWdJhBFKfMe95j",
  "key32": "RQuzRCPYC5J8J4e21F6ETpV7vgULa3w7pNpNisLLp6hSXytZYy1n8MXBjxmyTVRkxMio5B6GDWnTqB3EGXtRLGE",
  "key33": "tJnr76bM4DNxsPjYisKmKxCYCwa2XmL4uru3ziPfHLhEucbR6SMfktrkDNyxqNecJRMNjD7pj1WvEeXfUrFGFKV",
  "key34": "2FGu3H9sw64gx1cBnWiiaytkD2QCLWBtRhMFZzp4Sm8XW2tRXnFKepvgXz79heaNFroAvCpbAZpkpbBXF283XoBn"
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
