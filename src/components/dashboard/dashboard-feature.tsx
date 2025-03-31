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
    "26cuYYnTVE38KGExoVftLmu12BtBFu6UTe5Mm4naxndPRHBFsFqB7djVYUxRQZs1RVyqZo1izJTuAokJZmB85vP1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vHizFGF2ZcVTikKsds1GdtA2hrCP6cauyMMaeZAaFro95CbdvGu25w1JTDinrzNo3HaAFFpENsWRH3nVQ3s4e5c",
  "key1": "39ZA5rbXxrQEbkSPobkhGJ7Zczc2bmAq7185wMbefUJshscMvRsxtL9JUxVYw4tNihe9EhyEfcukzoPcYoku8TRe",
  "key2": "4vci8LC6imPpp8gDUdYAidkVBAk6RGaNbp3PPUH6NxkXUstifJ3wBF6LFvDoAFjGumoy2gV5XH4ZCU3sAKgpjjGm",
  "key3": "4mTHPiBuj8HHQrc4iPAUkZKNJcRuemajDSSyXuUVhEDJSGYinwt1T3TVaZeWsf4rthDP3TKZhuSMnE7CZa87TbUL",
  "key4": "3fHHVLYLTjuz9L7Z91tvy5PNdrA4HoiuYyfnE322YPBNb756BuvE3PNUv12iQZpDYMe74gD8XsdC8Rta1Ef4cQuH",
  "key5": "3JE1T1RPo99T7AFkZGezuV8dHrriy4tWAkbm33rEWgqnFEMb3SX53NQDR8DwuUT8mxHpgwpBbJXrqrbYnhG2yiE1",
  "key6": "4zcid1JiMNSqiXx7a11XmAPJFo8eSgpRqqZgUWhro2xgXRhpGYzTiuRtR3GMAw7UvVX88p8omf13s6FU6wZ2Hrvp",
  "key7": "Cv36HvcxFFMHsp7jdcbtVqB8xZGhNMkKY7xCrBBQ9vBJsDgcfRxx1HYuwRey6iJwJJr7PE6Wyou4NJNxJ4kJUmR",
  "key8": "mcLwWrsevK14CkNRJfo2jG7RqXvJ2CpLpACYtL7i7r71MDkEgjMYxDit6Gtr8Fd71EBmC3YPWXJTc9ryzVTnxFr",
  "key9": "2B98neYLi37KkF9Y16Kc79KHRgCRq3txPReiup5oUL9kJaPG3sBqZrWmWe1x3mRQwVppfW7799SBUFkqN8XvSgF1",
  "key10": "5gLQiUqLQVGq7uoAygjomqfAo7nGJv5irBkGdhnAmkJLxDC3T2zmgoqe3kCLeDHNXNfjU968vPyhqfXir63Efxpt",
  "key11": "3yzQXcc23sWMc8UrGQQBsxMXW8hadwDQBkU84AU7Ah9LnLmnu3bsQE1UrfGb7JZF5ucn1trkyuZBKqh5RtSV3UVd",
  "key12": "58hmTseWVFGFaTTnUe4rPDfhDWnwWKrG2ertwSGshJSdJkrT7vy5vZiyjS9qX6Uwo43pEASHk1GDRKmJZtwchNr5",
  "key13": "ScH2wDz6qBEt8zUhyRUvsYq9KYtUggmFQR7sYmC8LStQN3Kc4aPzyZMaHTxgTBXYTubfoanrTPpKb7xJyyWvfS9",
  "key14": "5VvuJzhL6DpfHuCKksypYSCVGVJu5RJkcrg5Wg4wDcys6w3i2mfAZESHkxvwWLzYoDmrQ3tEYEEypJpbKZxiZDmB",
  "key15": "5p5ZydqNVEKvxaQxwqGLx4AXC7iNTPq6iWoMDXvpY6fUbw3A4dhTbUjwXvXi8tY2wTnqXVcfjfuZZpP8CW7Bd2mA",
  "key16": "2KDi4NmgyFt67EKFYqrnbcLEc1eMAKvFPzvnp2YNTHCL8othBAwrRaNuqTs6q1HHdmHiqqw4PkzqEk86eCq5UQNg",
  "key17": "2joNcSKqTyE3ZHSm38EKs2XHVV9abSmMoocD1Tn2JDEJhYCtnqLQD77gMeAqW5oABXkEVRSJz18jVv5frpoS8kyr",
  "key18": "qDDcYzHabb9WtoDG2Ps8hH8p7ErZPH1miX22HfkkthfemceVQuRNUD8NJKP71nMAaKGL6iLzA7YqiHzoUhpBzpo",
  "key19": "2jTjeJG5F5un7Q9ZauEjLYE5WkjPc2Xk7pCynvQqXcnLMoqxeAY5MhmpFTToaooSZpTuDEajGnykWfu1ZxAxgscn",
  "key20": "3wmFHgU7hM5vQVeLTNuBrzZnpGHRCsozhPVGVLJ8QAYGfzq4BUuKXomCvR8vu29xycj2Xkp99fJfn4cvhNGqHHZk",
  "key21": "3HUbsxkgvFgKuYBVnA83scfbbb3PmBDhRKmx8hTowdNfDkeUDBK8sR3QfW8G9Uyv3xTYHAuN4gRBU3MNJULsnprw",
  "key22": "5r1EfwCPxVoFhwXXpLLQosyYazy1qTZgejvVFikV4JaX5UjqTne6QGH2xBqcVnmBMU7QjRgHf7FDf9nUWzPGXxGF",
  "key23": "5fSDuA4mWJEGKvD4pjUagCSVh11x8xcuSCwfF9yu7dDn2dwcWJATkpBGcvQvfTu8354eymWW8KN1LhoZXWMmtgnG",
  "key24": "34LCMpAia8nCa99htRRtAPxb849KwXojSt9pn8yC2fbNh8krYCWPDrZpZ5JMnb72kbBNA144DcehhG6C7T5UqVHK",
  "key25": "34W2BzGbB2Vv51r2X9DkbFNBA9uk25QvkToXpWXHmPckWLRUczDj4mJjunymjHdV4sYhTVjVuftGaFfhZW5vDgsU",
  "key26": "5wiquUQKLF6eN2sEwAokw9yepwuWTwH2etQLZyHXSUsUx9mNcSp61Rb55BsGjAn69mnJHj2fjnRgs4HcVbHSBGCb",
  "key27": "D3ZKuuj81CPzqqTRHiX2Ud5S88WSS6Dx6ZbHyLEm31c7s72FX7EWNLyZKsc3oKtHRGxngLf32GsEHNhpQP2Q34n",
  "key28": "63FQnHkv2X5T6voeSqpSVGyEzSjx9tmXw9BQtm2WtaHxeh6SQoBQsRYAVuNqZDWEhvYEajmT64LEXtxHpxw3DgXy",
  "key29": "3JFc4YQZQZPEsM7KyhbQCudfxj9FJsTzut7sdpEZ6EL4XGRsYwypr7MeLwe15zcxN6XaLMAsWuuxqLTYuqkpgUNQ",
  "key30": "WoGRa7ne41omxspJQx5gTi9uE7tqZB1sYe7MJKgdDyEUgE65stfNUzCzGWiTWsfe8ECKwZm8xrZp7FARiZBcYiq",
  "key31": "32mAxGNrC96YGDpGoN8XhZoP8n11S2qBTkt5d3y38eQRB57jZqkELLvUNpARs8qdSXE5GcSLCuNRfr6nh6LJwFZo",
  "key32": "d6PUDKs38tfWx9hiG5yycYAkd8kNUBTotsmKXLc6kWbBpRDaQMyyeEzRcTL8hApFDPtbudtiHdYrPsHasCXt9kV",
  "key33": "2PFsyeJGLf96pxJMa5PNrrLZ8cMrqfqe5VQXTtoRQENL1zxyBeo2Mt4evxgPjCecWYhGnUspqVt8tt26vFpfHSJs",
  "key34": "5sUWQLYgYrYRK7jPJzHtX1afanA1YAHK1bs1kWTRATwhwG7ER9oexpLZJtMCCS7PU6SvXM723c976Kvbqi3BY35M",
  "key35": "42C6xb8MY4LNLo7gnswjQihEaqst6ZJrxpXaCkLBqX74CzAi8wHr42hN1n7nzfWqUeLgg3YyzGkKmp3d1NqoJAtu",
  "key36": "4VzuaRVNAv3XwLMhDVF6WejhhobisRmTRNWoc7emMfxDRSomT4hEgrB9ErovBbEY7UvNNZQFT9b2CNZHVhVHnf3L",
  "key37": "hvx91qufFuhtGrUoPbWbzWgybM5Yg4ZDBZv8fhdADcQqnRg5uTQrP36LERpwk3xpc53hjua3Qw3988db4mKiqYk",
  "key38": "36uxaQi8qVmzqWNa1xjtw1qs2P6vr4mS9ehjV7gt6Z1FqfgDhDowFQ3STjWEm9ZthtpiNtK3VMr2J6zDTw695U1M",
  "key39": "4hrUe5AGw5S58xLhBme8n6xJiZBfQQ6PiNjTkYoJXvYJCdHAPPMArH6H4Ejn3cuSvH31w17AKzKiATYGk2N2d4eJ",
  "key40": "4Nn47Y1585WNiBo7bZTEFfLSDB24ZPpBboQvBJ3UKmnyCxWf4y5o3S7iHtAmKJgh9yXmqmaDF4oaMGpUo74PKVvT",
  "key41": "4GUv42M57vHbxb7uEPQTY1Mrqu3mR5Vf91N7HV4dYcAXGA1qViUfcTdeDsFJYE6kkCBVN9qsQfpgBZrHDULLJPd5"
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
