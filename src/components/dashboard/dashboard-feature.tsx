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
    "5be3tRUttRAw2G1XBcE2aEneUdL97567tSEgDStrgZG5fxR5g1es9viGay2tKscYFm6WzV25T9CJ9PD1GLUpQdKj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iJicLeJjihbw5Uv3qgAUiA4GYThSrdYgnEYeAUcUqCaQ7u6Ra6wqEKYMMSkTmbwjDz2R9NsUA2hNEPBjemfks8G",
  "key1": "3XCZ7xQvSeHKfyTfUoxMguq3tMbkSpwTEK5wfE8EPfMEyAhhgxMsiHdc3ovmYRm12JV5p3rLbpAgQndsngpni3rt",
  "key2": "2ch3LcwqRtgVyuwnTczwavTmceGCbTofooy6ctfh67Uq8UAAu5EPY53RXXRNi9Sb1vGgmRVzpQhoNWuBwTb2ZgnN",
  "key3": "53vStZfqX3phim3zFnBENZmyEphhsJC6EG8JAFJ3tsRwD2a6SwH3nzTh4wJoWdEsanGypkDsJnHKaY4STRE2d8iy",
  "key4": "5PXtN2HipZ4cWPGmKjiqLHoM1H5HVaGBuw8qrACVtSbKtTERGnf7syzRDQzNBg6PwHMCWCHmY7bTu3feQgUALi2e",
  "key5": "5ptKAvNos5iikQPBMCkPPm5D8Cr4mk4EGTVaK49Ubz4u6EcNg65W7nUkzvqnJfjFxfd8eLqudbRGAADXZe8zDqS2",
  "key6": "cdv8MSY3rdPZNArHihY9kTxYwfXFknybm7LMbUdUR8YPJ5xbX1HQg1TT3ta3oVeWsfgKDkAevQr1X9ehdo2zWhd",
  "key7": "4nPk9GmXdntXMZDVALa8m1A9Xxu7sxt2JsdyzGcrUx5vXud7rNioKczEgxsVsdwn4fpVqBn9VkLEWZTtpV8apBYF",
  "key8": "1cWH4SJDs1HNm5b3jbwxh2hNdxshcGQQeipeGKW7ymKp3ruxNVuT4qho8LKRWmLGMZjiqH12JQUS4aoAiLRqcj7",
  "key9": "M1uVRjzsT2Z1mrS9nasRpWR1MrGg6yRYaAaSa55vh6z5CFUwFtXEV2i3HbkYZJRz8KwGqWWaQTygm7N5ngzmatb",
  "key10": "4FAsbAEMHWms55CZDXdpvE6FCJEq13bA6YtpAwiYK9JyswfCrW2vbjovQfv4LuQhheGYfSTWbJndY8vo1FVbTnR3",
  "key11": "4Vu22UcGzxxMeocr8PeX73mcGQREkdBV3fWT5cmH5a4aUocqzD5M1wkijgugxMpyvLjt8epi31FEfZqgXPGjeJQf",
  "key12": "fEbySuwr3wMCkcjsV5CMyRJBjAwypDbgBnGqyowLbgoYtNRkpEX6W7ECwUkWRvSchavCC69rHphmE1Y3TqsYxg7",
  "key13": "SkPHTmWHfCoDJjrqNutLgv7QTwZefnEdmbMiHiFU7eXsZPg1XaqrBT4K2rJpAVTzXv1Cm8JRkuLFrmxcUgTEFGs",
  "key14": "vZt53FaQx59Ar4v5YKSW9JGAdwyUapzDik914MxkMXp7tUVpX639KpraGG2um3N8wBfYQ5ZAGmT7T6Xru7SbbRc",
  "key15": "45mxd8c6JBC2QYy6GNPWAYhSQzLohE6NxXKTCeGX1WCYxfQhGVXmeU2BmazMWLYa5yqhUiQNFNkvXzQ2WFWZa9WW",
  "key16": "5VMPwHH4VjeCNHdZTAb1ffLDq2K29BEowzSradTtGkeyEKZ1UP6sdoNaggBvo5P4VdajJF2EneLBUuDUfhhDoWdt",
  "key17": "3CDo2sydTBZMUYEU2j3V4w4HUs3wmz8ZdZUQDAettpPpsc7aFKB14FnR8oeVAfyVRYPSLpaR62fqCTYSvZ5rt6oo",
  "key18": "2SNmfJ57TMurVm63D6ZLrXLSZsdZMZCQLzYUVMCimneVDu6dRrn1Nu8G17vt3whvnHn3orBQuYVmdWyCr95FMrVA",
  "key19": "3Cdah1QJFKAqPT6KCVTvUNSgsWaVDETt2YTEPqvKt7PDamjRJgy87N2oPLSqyGmWGi6kWQ7hd6PWbLdYatQKqcq3",
  "key20": "54K2W1PdUD3t5zMA9QJ4RK9xxS62brQRDfNrhB9tCpSTPa26bAoDqvxEt6wJdpKXYoyPzbAH8sojvPuk5ozNreWH",
  "key21": "63JZJnUu4vwCP9WjjTm3Gju79aDdsiWeuDnoZbRd2sShYAVUEs9C54Xm5Xj4niD8EmHySf7eX7DJW3YGXraP689U",
  "key22": "3deSnbyYf35EMo2nfHcK8yoaUCeq9wKoDzq8SXFGnB3hk26btWS4Hjvh2WwjkfjBWYAJapActwVXHpYosXd7wzn1",
  "key23": "5AouFKW4gpWZBRbUQTCtPFiTcqMJofV8GRbwtvpf26aabcbJxCEJPGUkSxbx2k9i8jSSsLKJNfQTK2CTBgtNC3sy",
  "key24": "5vVyYXNExcDhAZNy1xbGRUthDEuUnNs8UvHGUfy3aARao6ypuQGQLtHcRpkz23kPFxamzXp2ENb8HJUd9kNCd2Cd",
  "key25": "2jiw77hVGXPHKNdUCU8tQZRYVMRsWh4YqrqVrLzyQmEB2SVueYuP3DkyosKmXmdw6ax71nttkA8gWJhHbVK5S75b",
  "key26": "2PDTbgDxgicvoUYogGMvefuycnZLrQRravQmVvga6GNvbHp6ZKtPq2SyM1BR3nJcdrce2Xi9qJoXPGhPDAiX9Tre",
  "key27": "3u2z657aGLPMAb44gqbP8va7maMhB1YNs4nTKRLvbYnpJcVbt19RYhebcGcmxdS7YbabYGGegtaeEiMyE3RWSh8r",
  "key28": "3ZriEaWtRqqz1q5AtKo2mViyNYvMX2oYz9dK6Tsg1YwwPcqMuZpywdvRoRd6LGXWXVE8emMkD4g8XcwoGiWytbmV",
  "key29": "5arJpnYdbxoFuzxRU6zMqdt93wSkbwYrsupfNa8yS4pkSc5mAMdLBoq5vEA36wPLaoUTHNY1BVSmHDSBS9TbYgAh",
  "key30": "3351LZCyQhx8Qz23ViBtztEkTpW5XDwfVu63sXeig4GdCji78kVjpisALGCTGhq721vSNKvuUe7JzP3QeKXaRDyR",
  "key31": "2Vcg4WrjUqMVMkjooK4Qyvqbyhq85DDpFg6tL5QvBw2eYfU9H47CGK1Rt7xxYUfaUu7S2mGQETNGt5e5ku9gcTTy",
  "key32": "5HhvNyVWUqfNWBdx1zFignuup9MzjQyDuNR55qsWvb8yvqHBCxabGWhPWKRq7B4rkgf36SkK6cbDYBg656hSJnjy",
  "key33": "45dd8itV5Jd6TxZXkiV11JmoKiRs7Li7spocsthk7k6YYok6oHrJunjeUrH7NSncknQXVwsUq4Sok9jKEJqXPNWB",
  "key34": "3g5QsVc4JRaivYpfNsJha69HdkyyPG14pagMnLuQ5MyLHZxAZMqcSWSX6urpo2yHx1297rcCyCB6tskhy2QHdNc4",
  "key35": "TmEd6ATuiUhcScc5t9V7pC55ixhYDZQkBtkjooeHv4zyFi6hMq4Pq4wSgQryJL7m73qT7pKN6Rw2BQqjagaeGcf",
  "key36": "Q5hTVzVEnYgta8Hes32frcVMaevZd9ZgSBLt4WtpwW8FnWm6Nf7Yjq6Vq612Zy5DMcoRA5XkKgWjEwdqBMqPU4i",
  "key37": "4Q1qkj89y2B4AdLxWhFptEvwttRABJYhbBRGtPCQkhdrLxuTk6JWWedV9BMYRpG7nDwvfWqahm9SXPEs814QfSpx",
  "key38": "2eZ7RrPvgZnH4MARsTiVcDiZpzXLH2NfcM3ZmJv2HCVSV4qBWcrNpzL2WAtALcJDyqbAQvcBxuCsRVxgExeU4DtV",
  "key39": "3nEXgY8VKZVqUsDSNCHeFau8rNWJFBrsGTPzNAKyvPMShhzNJFo3QSgfjJ6Ncg8kLV8Mw7MS157KB3S1mJ8xC7MP",
  "key40": "suLa8SfNnBicd3kL7KBAthc9MjUHfFzZoUg33anUZhLNQXDrUZtHnGva99aN4kTNUNMozVQ5Jgp3RmEPKQY9CVF",
  "key41": "4R6vD9hNgTK3HABT9XbsVwb7KfsfS1WEP7A2AFM4yETuNqA2rMnhCegFzdcGGXhV4Tmi88NPatoxHWna66xgnPVS",
  "key42": "bBHETEnwSzPBAQEj5DUBe6cvwpjq9WrCH5jRb8vMjRmfKt8ERpWsJNK6TR4MEwva7byJrAKj9DAAfiDWFy1Z7YR",
  "key43": "5Ak6hk67iC5PuzpRUvWtutxZXjpn8mz3GjtY3iiJt6ScBaVQCVYZbTpAcZ8HgXYWf8jr3Y79i3nh1XDRLLHoY5Nc",
  "key44": "2rdCEJhCivMAVhXgbiSbBtULtTvzbdkGCBxFjmhPerfhWDoU8ug1gHtTpCVg7ZqoomxaHT7SDUGa73p2uyomEQzQ",
  "key45": "2XXKuB3FvUHtaBEGJ89Nxxi8d79YjVu86uKWJSsdA25ZvZo1dgRJFBx4XfhWpxZ7kS8ZMBU6zE8Rji1tgVDhojz8"
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
