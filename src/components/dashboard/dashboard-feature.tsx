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
    "4FYhqqB8sN63rF1xECXkSeFC2jUpQA8PWDtTUiXSKNdqEFYXkX65uFnCtjnHRtRS8K68XK84FapJ1QwY6Y98G335"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Vg2PFER71p6H47EXMKJQwTMYvcwfXQPTfq7pZumRqNUDcivC9uB5BiKMEL3RWWzBxGoddcw2wx5rdfRMMQ9hGA1",
  "key1": "4PuKiVE2h3vLuJnZSgmwf4Gmo1RSH2zscSh7reqSZTnDDuc2oi97W6DK5gNTaWGARhMxMceHoYnwCdU7QvgcaPK1",
  "key2": "wjRaveFmvwhP9Y6kfREHohTfhbps3pgw8Q6mikZ68yby92Yv2LNDghfjyDiiBYgSHnyi2LEsaArccNJizs8m2G8",
  "key3": "4kcXkrHZH6UAj4UPS5jkSb56CFq1KquJ47b3o8XyCyQ4XMwjaD9ph1Kn5sgx5TREKj8s4zq9YGUsWXANk94FgQGv",
  "key4": "5JQFKT5wqEWdmZzB9B29ppHgk4ijQZbKPrCvVQFox8Tyt66xvk1jaMMSpbQXuPgiP2BRQc75vxUV1Lxavm1b3ai3",
  "key5": "5ei6JePyvj2rMu5iTY9itfQbaSAU7RZXb4HUuuDFL5JVsSAP9NDVJ9iSHKbY2FqSdvhKB9XH9B8NBbg8BzNSAthe",
  "key6": "2FoTKG28nipqX6EAeJ2dfYxfutmszZUrwZ7coJLjE3tPWPe6ifB5z3aLfoRJTu6eCRkQKEj1cNmBJA58ixjkgmcg",
  "key7": "4aPNFixLAuE8BJ7GUTBsQhPYnhv5J8n5EM93TczSxfFNvky2f2NvQDPm5gMx13Pz79MTCfZS6ev1EENrjb9GQsvS",
  "key8": "57u7F3dDqwGuwprrU93gpra41VxTi4KfBTmhVxpxAYvfZ7fEv6HQ9kzK7HxmMXtGqRSjcaL7Y35urMnjJw3Y3Z4a",
  "key9": "2qeqcVPvL5Y9QhGoQ9BnzxSW33VAEzuy3XSuSrQGfLq4HcBCuWW6Qaq8P4EEZNvEoDy1KLzHJVtxZMFGhs5BpZpf",
  "key10": "5QDdERJ7Heec3mWMjnzyQmjUw4pcf3jduDAipQxwwVK3Mtj7dDEVryi1ekvWgeBPKFj5559wB48iVRw7S3UWzDuw",
  "key11": "5nbdHB5swWXEJUbPrdqqgnDRmG9g2wddamF3s2pewXs4Qhbjjt3xpDv8m8m9Ft5g3DXu3FRcVChxZgnq4SVhPGr2",
  "key12": "2xxRhbobPCyx3s3qKsNCH95tfjXzEdUF6Z6jDC1c3NgYdAgD7mNmjqmBfZbqSFfq4XW8XyMtYXj7VKvrVPnYKvYD",
  "key13": "4WTB5GJjVWf2hvY9CYZwKAsfXzSWaotYLuaKgat3ApmrEUmCmxZLH4vTvHkFnWtBf9MP5E3FsfpPrFA8ZPqJvpru",
  "key14": "5uQQrnWm21jPEsAJz4e5xD3koUUrzwdPUSE1nWWFopsPotsTpczjWGyg7iGZDuLPppRuopTA3LAaWpBuN8v5qBZA",
  "key15": "JpezUH4LohqUqt8nb2a9xAHaANzAmW7rxuNyDAbSNNFTQv2gfoWYeC7sw3vCwtSSHnxkXNZhE2atL87yApAserg",
  "key16": "4ucN3KB7LNC1NRVw2eLknXymTF9KpjXef4tDsox7CAyrmz3s4AruqcDu63L7gemcMZ5bYJ4R59JzhToUAwbforvE",
  "key17": "4Hb3FsRCykNTjzEXRGhGvtkc9KmUUcvvkaBwDPo5LBuKxNdz8UnbEgsmCTHHFjGqiXjirKCfL1EySMGsXMpLdJDD",
  "key18": "3h9UkxEog9TFjjppuTg3dtSNuXu5iGEY5qak25DZe7TUdYbExMLwV5hT7nniEu5tw4DSH57DcWsnqLrEHdWdQp37",
  "key19": "3RuDwbVJmKhdAU7T2NoVWRTqB67JWrws125iMdHoQ7UsasYwrj9tC4fK35pnVwXdLSw6Jpph4bT442hkia2yutNW",
  "key20": "3TTirFQuggMDmQJZNMwzfsVtyxTVCSntQUvkBXAxaUq4mb11DDTzbjzvZzwQfbJv9h2tKLiPp2zBDk1oKyQmf9Lx",
  "key21": "eFMasxAm595hAwNTyhtMzXKwHRwUDnMH8umPa6u41nRNb1dCQ7GQd4fj43cPNip85VS1LZCpMbSXtbTJBwGGits",
  "key22": "4LnwxbJXbm6wE6UpzWy6CsCy2HTye4zuNuCdY8GRmwYdxvpHGsLTpmufJe5SUydkyPXiRDwWKtc8HTsxupUz8Yic",
  "key23": "63an26XFmhyM7wwy7boyKF7AonpC5kfM3iXzw5mudjnkXTpEQPZiEdDXd42UDUfNugcX8NohtdMTcraCtFTkKBKP",
  "key24": "3jnp2bGCLt9SKNvV2XLorgNmrimWrUrnjHuX2QZ44SWiWyjjQQ9rwUxEZPhbCbmdLNAvwxEieD6ydJNMJsiSpVss",
  "key25": "yvnJKw3zeU9eGwVM6BLVyVf1VnA3iTBpKkkm6KPCUzHThZghNNEet4Wfx3MTjdQiF9XNafRCrhGHREVvXAbGf2T",
  "key26": "34ky1bWtfQsGV2nPTZQP5fwEQNFmKLLmZDKxosBJfAfW8FxRSVX6TyQ7Ge2icTSiGDk1juA3MRp1rca4mTYgP1Qb",
  "key27": "BUQzninyeiVcsnDA9zLyGKgQbsbWt88Ab5uRT46se1HHWcXomtJwRnUc8F1AamEtGdhcYsc3CdyLfgpVw64zLQH",
  "key28": "2YCsAUfoBrfWiBxybqneXbHuvWiYNrsCiT3yZnPhzm1G1rB7fYT352c5qBuqq42xsS6QcZdrvXxV7RSuVvhxM57u",
  "key29": "66a5cbVzRp4uDFbWpmqoegm7KVyzcq7749LvZcUmwSBvjZ7EBpT3XcS9Sq3thK65gNC8tR1BSSq2ednK5F3jxhiP",
  "key30": "vwjhAzMP2316f3TidA8QQfzSQZBC38H2UBGMuHC1H8bUVqh8FgtC9DT65XYFoPiMuE72cUG7xcf72s2CUmyKjHQ",
  "key31": "EsABLsaPHZEnfukVvk7W9bHshXQVEVvW6EbyD348RH6kGhdNdk1UPoZQGCCurqa86XuhogGa5efduRpJTwNcQac",
  "key32": "2f8WH4nvmvdQgPNpnApraPXeW946KBojyyxzDm8K3p4q5951ajaqHLxLSBQPgJxsWA8uNH6t5aPTQtt3Gx68BW9u",
  "key33": "24yhevWTZzJcdQzCy6YW1EqJSA6Ro858zCt2hi3Rqp2BzXHJRmx4gYjGtT9vWBq6QQuLjzdfUg8ZiMrE3DEKAZGn",
  "key34": "2SG9aqTmR7EFdfnpj25reACxoRDy518nPRP9cLjwXduH12j4Bw42TThgocDLt2vxNpQr4dFdsn9eGcsjpeT8mg7o",
  "key35": "5ECVtb64uYyLQ5j48GdvbvGYkxjnYc9HSKrjUU4iBrJKjPKk7SPzNr8QYNA7iGtGbYotFSaBP7YdTFs7yyiRwgtr",
  "key36": "22uSAaKqGWWT86WrVyJNgQpDgzsVQ7ozUBmggnehDg9SB2YRJDxfSaWiTfo5NcZ4TjxwqSLiyTQ2Yaw9ZwJEm6UQ",
  "key37": "3EaYfPVMAH3CcmtpsmpHcJTB25Ak9mSiah1nAE2RgiXemnNsUTTuBzqMpTDcQQqzFj4MqRDLybq6Zk2w2HhRrKPx",
  "key38": "3P2fCjfV5C6h7P3CGd1gUxEcbF8T2sTdXY3yahRRmHFdL9xkJyKinqzNf3hFV22mmswjowYDHHbt7yxn9wV1ZFiW",
  "key39": "5kNkVxSFPyRwshdwccY861AYtyREo6XUVgEjEJzi5CXsNkSix8FmQVSkuhJJMN8j9k7nqonC5q7D181hjpQ2Nuni",
  "key40": "2W46m6nUKVCAkiX4qUivzosv6Mdv7nUuUgaJSJziXSwcepTHuYgUum5X3RpkGg5B9H7C1JTv3MtbqFABmF3NTgou",
  "key41": "4k7QV64vuSTmcMZ1f4yEnRENnHU9wvHguprQnj1EdsXF3unNEfMutxceDd6ZEPLPDryS6HYFvKwqyVHnbooC7bZz",
  "key42": "3XfmfzLL8StTJrpS3uifesTrLrBAms4hDFN3pPbWznptvLLqjX1ESDmpxqfGegHiPHQrctLr5v7PqjtNY5UHu3wU",
  "key43": "3xK3Y6NUraak4NqvShgWbXjnBvf5SQecWjU9DEgkWhn8Xs6E2LHa8rPG89P8VttC3jiv7qGi3u4HL6pYR6YDebtm",
  "key44": "5FGE9qPCYiTW27d2meh3RekdHifqdYmm42NPEBQYz9kZakxQhgiD2soVYgeQT2cVk9McaCEiJYdb4pmNu8mdhN2w",
  "key45": "2tW6g3ooyMjgpY8ysGDHxPsJz7xurqqGw7NFZ3j2L8thTBt52GDWy2bsQRVp6xRQxpTPKQFmi9vVnHAQEBweRN5z",
  "key46": "5VMphy1grHU489vEyKBwADNV3bUqqfr4zg1aPGVpqDpws1kw9q3g5gN48QMJer8PqBfAykvZqHWCDeU9au4mBAZ5",
  "key47": "2H4VxpdzfwZPnxVvY4HqnCjXk4Wxrevip1dDnTLGnqtLPzWfPYbiqYkvPHZdGVAn2hdcqPX8GxzsvWDNjhY8cGXF",
  "key48": "xamy86aY86V63Nkry9ud2r6nmCCSYap5KFzACsfHoPurDrWuMgZv6cGE3WXymM9iqqbNx88VHqixeGNqEgLaN7V",
  "key49": "4Uge3ytntUfePJZHLCHbdPChAEVZZvx92B8CWiyEm2udvxfETxaPhPnvJ6AfBTLEkT1PDxk7smWcVuiiAtzcN2Qy"
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
