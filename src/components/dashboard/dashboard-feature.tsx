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
    "66euGSJk4mKP1McKJYMtmDkCx8nRkRhL13kdakVbL7He3VeS7s4peCntGLdHypp3scmgHZfqPNiSdga3je3dH7xZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TaBaKhz4eFut11uepm9N9Hpqu3GXdNuWQCdQQ7g577haxHqYbJYoEoNwNgbvUPAM3568g26pJL83zV3UAcWUYux",
  "key1": "bSB354ANPR7N6RGMTdPtrNckN4ABpByeYgVsFornis55Vv63txHtnNX6tFTZ4HdkUV2i58PZX1WfhS99NUGzHYV",
  "key2": "5B68wsEyBEGAwU3BnDrK7mej7N2wBG2ZHtcHWq2jXshhS7pGDPhRxgMUm2f7rHJgKziuXX13f67zKs66tpmt8GqK",
  "key3": "4mWuFhKXgkjzv4T9aWwrCYF1x6HdwcBayA9k6qn6b3BkNWokrwYVizZTjcskjtNaXjemrzMDfLZq6LXBywFmpRmU",
  "key4": "3KHqEJYFznrqRztYTBS62LCB7RyRrFxpp11NdYRxgxNq15bXSJzKQHkngJbJ4pULyPMHRRUqKttgJq9ndLi4d8BE",
  "key5": "BBYt7uv43bDB35iEKQxEYag8APUAbW7T7iMq933Ujq8pg2BtQsiv7GQMwy7nuRa4fYXw46EyayzBxEq16roKJuX",
  "key6": "4oYw6qsWccTjLNycQ7Kq9hfjG8cbagwZYW5cPy5B5tMP6ahqkC3oFBvozajk1fj7ikXwRNAmT1BnrUV1fdUJwaRW",
  "key7": "28Yb8xgBSopbZFHZnD7KpWmuVyXCa23H1y8KhQnP797dJCdtujEezAADSzcWHwNMBKKwAmjWbzcxYjgn1vjG3q2T",
  "key8": "5Mq5Do2AMjSmXdzJCS8DLvqJrpLecVFcz6KGQUNH4kcB1d8rPBzVdqWUZVKLncEt82j12jWMNoPid995MA7dGv5c",
  "key9": "3GzCTJJu2feacYfaTTPPg9HVG3pRE7gbYZ9dQQm9gjLKKFVLd36jSi5YbCEmMazHbZnKRmgkv5dq3XD81guTLvbi",
  "key10": "67g4pSYCstDoxykbShXTqp2SkdxT5qd91WKnDK4FmqQAzRRmF4KKFc9bSgqVcsRQRDiH1pqYfJGA1C2pjPEX4ks2",
  "key11": "2YDt3DJSpNRcNV525ayMP1vzufMktjT6oE46AXtct4RhAYmb6Exro3nSBp5wYy62Qpp95wnwpzg5fq32Rq4Kon4d",
  "key12": "4eWPUBwDW2QgaMWiQbzsuk1Nf1DHtzVqBHsFvcFRoSfkoi93y2WJ6EJ92Fp7EHPhfgCsgKBqQoRxDUpTzcDh367N",
  "key13": "4WPvQm3H6YJDKrNksBGh2pHMUv9CVBEWbfCEbBGysJ6b8GPrBzsQWB4AivijvRjhwvsdZZS3uFbvWudgy7b42PST",
  "key14": "gGBoqdAcgQzj4xSg47pkMYPoou7fdc6ftMPWhQy62vdwfRQvwDgC4DkkNUZ8snQDnhKWwSFU2jWuGkyuohn6By8",
  "key15": "5uABZfv315LHzZfpbqGPAo1CeFZc9EJKHmqx3T7q2JLfQSUvx3hHkKV6SB5SHbvW1gsnf5fVNbtWrUCkosmeXKGb",
  "key16": "4Dp4kieVMurdyHBCAHs7dKV8DuFhz27aDieZ1MRCDXQ3WJkXVrX2jsaNHfzwUbFvY9cbczgqUF3TUxQvVrtbkE8w",
  "key17": "yWBM7L3jza4Agypinc5pdugWe3fds3KnWDJKodaePS4fJKZCprEvh7fDUTJZSxucKsXPvkcc5gua53GkTKp32nW",
  "key18": "74d7NQk6dzuFWbMubvFoidBztQyaFfGJxuoWrAGCE9gbN9h8SCA82cZnu9TxzFNs8xbKATUcDpjivARcccsL1sK",
  "key19": "tnGbp89ak6f3atzptaMScbuXp3Bx5JPsoawkqxfhdWwLwibzoRBo25ip7BJzaJwGP4w8ZKFEAhVgGJPpbH9nWRp",
  "key20": "562bo7avNRFQbBAmPYG1a9odFXFK2LuiKLYmmeyCSYumXdGneaaJXCszeWKgYub2mRiyGGi2AYg6ZoMEodqgCmWz",
  "key21": "4uTu1mSoJhbnTQugqpeaTC2QDuB65rz5tLtos9miznbYD6DteH3pz5Jzjtfc6SJHesWy4bjp3zUJ7UMNQETf2f9w",
  "key22": "5e3bVUqTTeprLCFZswBmjJDXVE4N51Koysg9FR93ETZtrbcrQRYPWka43G6Y51usskW9ov4T55UwKdJH46EYS3iC",
  "key23": "4xtasGawourHtEuTs4jTDdyHNDLJbzfLpyqGPaJu6qChP9y9EAvgkLetrdDRpQbqKMQDxZ81pLRgaW8ZJXn42D2D",
  "key24": "5StsHVt19Jwd9t4KHkqYPC9oKkq86W4Fu2SvTEpEEqUEJSFfqtnTBiqAorJF2921JDmiKRrJyafrNqBsyfk53CcM",
  "key25": "4grJXBKDmnQfodntV2B4visfQx5YwVrJEQcB3yfaediViCdRiL6aghUymQYZe73WtrGA6nUS5y4qWeSZfj8mbrCM",
  "key26": "k8JddKpDG79YVHVY6sb47EvCDuHFW98khbjjVeSeJwmS3Dg1JyD52G5C2zoxbssxtPqQivXJzwSqkYt3o1Xe71v",
  "key27": "4gDFjGsWPXyeFPCWziTGbZanhGVmEvVPErtHtQdRN4gfZfmYL4q9u3CcuHaTrKwc6ECnSKMjnfM6BVu3FTqzwXgN",
  "key28": "5qPZaCGs15oWucDh4hQoyz69k4Mzzfgne6DzoQnaVierh2C6oGgQzzSfsWK1TmNgg71N8juYqs6ghgnsxGQMxBJg",
  "key29": "5DJV4MrEVcKr16x95QGa3m5tatG2AhAPRWguxtVovEcPw9NbYjFDRtgAzy7wo1kKvfwYKwzuN8qckcPtHfntoJjD",
  "key30": "2Y8hDYRUUbZ5f44LQLWxaBnFzi2Qqf4SSQ8s8j2GSq3EMfCxJxBuHTLvajhph51RpPLSfwyNgYtnweoXw28nANb6",
  "key31": "3XnhWLypDxT1yifaYV7MmAuS5txVnSnroJvvCe7eiomGFMDSM58CPYZVzJLUTFh9k87rnaFQXUbZe8PWMq33Ah75",
  "key32": "2RwBD2kCv6Le6pexTqCNoxcv4eSHZ9EFoEXdYTrtwQrRGw2qSYXoz2qSQj43aoXG8PKxZKENfaFYmt3pnsy2W7Qw",
  "key33": "mYMpWguVaaiCzWuPJwXuTJd7f4aoqV54gVXH2DfRMtTx8N1Pz3QkV8GWUvz3JVHCz9eC3ciLituow2AgaUQgAKM",
  "key34": "2wAd9adk45iAknLpdJ8Zu9N5KhPvrE9RKDyTgJGYwDCgX8jLGZoBFkRHGqd5fpc4dqs7ooCM89kdwj9Z8Uboz1eR",
  "key35": "2erGM8HyqjReNcCw4vKC6YzDj9QVm1Ge3rZ2SwCLAAi2jRxyXwfVVWDebHrKpAx5EWPrqCo6UMm3XMyz1d4ZVFTX",
  "key36": "3yQGSDPTKofMLz83i3Zx3fg2m55T9BSvi1PBzfTfhm1oyHe5oHh8Ya7yub8QF2FVVboRypVqf8a6H34Ax2iUcFmT",
  "key37": "39P66t3sfQaTBrsQFiDfX5HC8k77ZDzcgi3eLFpyQsYzoU8uToHvGYFYU9xqBuKUCJEaezKEoPozgLEDVm1g3KkD"
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
