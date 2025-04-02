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
    "RkRm6PLJbw3WMvAtHSwxA4gLdfLPXviw2hRE9bj6FVjG9oVVMgthTW58ML3udLXBbN5eZx5SiV9r722Qqvz53Ck"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ejXX5PXjTFsGh9D4QfvRmDEjLiuGMu2NQCMgfBJmdHUd71QPwS89q366Wt9XnELmAx7GdauAbgD7yJdozsuotB3",
  "key1": "86Hr9iY72NCzAqKu6EzzEKTacsMvdH2wEsPbSRZYTpE13QvBXDW6jQWxadbzxbSj6zfxtVwsnpUYT5Pk2QQjXvJ",
  "key2": "3JNELMjr9Bb9Pt1bdtzT1Xqo6WiyPAejupf6jMLXcqrfpqcSLb5jcNTuvstTG839MLTwaRVjKi3BSxWrLxbQT4ox",
  "key3": "2bqCcMCTQETeQ5bi4J496L3Zuy7P8L7JFLt8RWSSahV66AungDMQipPybzsXjdLoAnYy3MgjFraez85SoWEhBgmQ",
  "key4": "3XzCACZFFXkRo6xeZmAgA1KSyRwRkBELuNRDaj8YY1nUgjhhKeoQiaX37LyyHxaDySuS3APr2AsXof5mkhFLEq66",
  "key5": "4vsQ8GuXbwp1Y6g4kbiqkxtDGh7cuvCHEXMWrWZzAJF2hoqqFaHtwcY7P8tr7dfB9NL5NvNo4DofqRpxKQJuEWFq",
  "key6": "5RvowjqYszYqsNj3ur151RF4pGLTyXdtLPfJL1ojXA5x2e4pTESDYr2pBz7kD4iRYQnB8rtbPbBDv6VQDZCgQrbq",
  "key7": "3TcV5PyWkv3CF13c7woig3XXoZVT7azmd47BbFz28F6cUVrdKwV51BgUYEuZCC1gyZhCVPEEHyEKJzFwgDrBRmoh",
  "key8": "5FU74tEq7zd5tfdo2FDK1vQPa2CPFTqdRDmHKXjjXWawK4fGzE4Eei1U13Ja7MvA4vPzzXMaThnao4vs3tS626AL",
  "key9": "2qsaggn37RS3CvgEQkMVqQeEgrMnrWprVpqwDLABaVvwbfMEfWPvjim1ZanqM7MgdqYnWpxLuh7my4HU1qAGAcke",
  "key10": "2aD62iZmKW9V46CJ5p2ehnkSKgSFQRkZxDzSSnbMnRMk9frXVntycaynWMSnAkFMXNAoBMGXwNiS4i5tCfxVSjnF",
  "key11": "4fdYnErQbQimii6X1QFo128RPD38yvsCiq3CP9KTqZ8dSNw2fe11QUrWEnRTPQqpK22rZZUM2YmE5dSv7LGYwjWR",
  "key12": "4eLb2jZenBwM4vSbPiT8RKb61AyyC1oL2sLo1dBmyxm1bRZB44R4bJ1SXz11he9pKyT4Wcyz4crNS7Ers3DhScXS",
  "key13": "4cVyv9T8xGvGcPHw8LFSobjjT93i5E7UUPs4G4b1WVYfqSb8jCWjLEDwHhC7PT4Di4XLxMtQxxQ8mzc9RFYyYBRo",
  "key14": "jMhQk4x74kGEcrpR27cjZ8DNNYDjTMuk6fW5r7hdbuco9ea45fWtyKVJMsPfN4EiEb6uceqW1CvHKGqn73iT4e7",
  "key15": "3oXjHJtpB4GYQaKwjKH3R5NaZQgMCHmPxNwfFmTRcKm4eWVP4dE4rEM1QWa4yK6giF6r1swXho6FC8L3ZZJ6sqjz",
  "key16": "TvGGU4CLSacx85y6WqUFaBuYrf3D3MBLanU3TjutLxAepCtfB7YNwMck7kymvUL6xbNQsrGZCNfWERHZEeVTmug",
  "key17": "5LsHa5uCgySLcWBWVmd54MjdwkWVzupCafimC72ovtbgHDr7YDcUXdmiTxsGd6rqmqcCaqjhd9ymBxm8FaxYHfbV",
  "key18": "Py4W9aPntDaYt7JMJY5e29sE6kZD9YYkKkk7uhYfcvckZv5GwG3tUbvmkg6oB2xcygBBMXauMmHqka9UXwFEqRH",
  "key19": "2faSGzG9HeMpDeyudNzTCeyEJmQcAL4UaPJr7hpqQfKk41ZHh2hRZZuSoVvkW1qVff3ndekZHJxpq53sp5GxBKP2",
  "key20": "4KTmr6t8UuXcnXVrQES1pyTyfVnFc8VkvM29HYptogrgoiRp8Rf4JYYnXKH1zuRwEFrb7kkpi53fSk2SqfPRJ1WN",
  "key21": "2zLwj2HzZFTPqMaJBEBea2eJEYc5dkaLQi9a6YEWsxLL7qhomFgneQyYVJDKeiUYcr2wkFWAYTY5PaHfb7nG6jRF",
  "key22": "47sCxahefcS5WpMZefpCBa7FSaWxbLYMHebYNUQojoDacDufyTWsxHL1LzgVL53qwzvuokGu9WMrRLPUtQvL9axD",
  "key23": "xtTH3h7oYeZTapWkTn1ErYZnjjVXrnmpCjFpwGYVswbbKJ11Nq2b8cnzpCRMypoKoP971qtmnoPEWve6A9jP4zP",
  "key24": "4vC3sFMPwjoBEdbNqjwLhRVKGvjo5oh9UQYdrh5S5UPessizTpXPMsZLrxSefrb4MgUimaZsHMKuhjo8LvevEotp",
  "key25": "nnoPLM6uxWCK9uTYATz89qfY4TXyJVNZQiVDFkCBKh3sPaDVBg5Eme9rGjUFQz5EXFKDnvJHTGi8k24nCMqH4gt",
  "key26": "35gNGiZxnQeC21x62XQJNb8HmqpPjdHTnQNejYpy2DSwzoNdPAYuw9B4DmkReKiqi9L8kmWjLHPTJWVuvnvPmBzy",
  "key27": "2i3asdWVFMLePpA1X8p6qghknLD2wQWuPupziKGmZYy4Hn56qcR8FtGN4Egsqr6kxNTQutZMFh4fTXKZv7d6ArYi",
  "key28": "4GzkCUVNhwoFbk8823tZBoiD2jRR3A5aPdffhrhZraBFLjwofmfudBaPxzSdv6pj6fxhaBgRZWNvuQdbxvy58uos",
  "key29": "5R2biioyaxgqm92b5VkMWp62wwkQWkAoF6pffNypkx3EZbAWMnewNktwyyRRR5M8ci1BydyFXd8txorGsMxsRS2G",
  "key30": "5wJpRo6hacGMRTV9yjJSX27V5NzsYnUMW2HZBSTD9S5c1kpvmGkoaSkgXTLC2vzBjNexJkhinAGGu1gi4JQEuLit",
  "key31": "4VrfqHGSb6qVPUY3yhBXeZ3iEnowm4rNN3M2inqnvF5buZFBFg4HbsPihniaRTPEhuPc7tzu4EYCT5AymoK4czP6",
  "key32": "3VGxL5T2GGp5b9nEzwTkoxNTxUWTBHCxK2TkgdZz3YMt24RkH7Ah5SN8TYW2cXUmYs4ctABjqzNXTbiYahq3kmuu",
  "key33": "5ueYabQhUdzGeATY5gB2Bw4vEKzqEXjYmvcKqbdy5h1wFpWYLv1Zk6EcAeNDkVgw8f7J77NghiohMteha3tLgLxG",
  "key34": "4cvJNHRDx1HGnZ3WB8e1cHysXM4nndNGD3qrgakvohixdAyNQwx9CyhyF3EHnLgHpPxqo4WQ3xuwEh3xiDvH6vyC",
  "key35": "5iMxSitD7PG1TGqFD9U4uSCobrxd9DBQZoHx3FEZU3iWXhNGeNoRn3biWFhK7sVniC4NcY623f3GXpRkjDSG9HnL",
  "key36": "3xBEkfnonc2rgnDVezSwZXTyBJdUqj5hRQyVXmMD6WTfUu3mwZueF1SGTtCEuUkhdMz639ZnJSze1yxNs8G9L4YB",
  "key37": "2jVdF5CJqyMCfMJS7eMg3VnfuMcqp5prwSMdegS7SZfESeymfisLRDR41sbNoYyN8MewF2WbcWWVE6YYKFae6zDY",
  "key38": "5XTB8eyhHgn1gxb3rxEPEeKdvq5utbanNapcEPaQRH4Y5iBfxmhMsGs6uCUBuJArgudQiBGiDjhspnEKrD4Hzsrk",
  "key39": "3RNx8cRqsmqz1Z2VF6tbKYoBF1ckevDyu2SVqkUZ6sAGuiJS1LGtuK7sHR2mt4mzFzFKyhbxkkhS4LvaoTxqdHDM",
  "key40": "CUJvvquPi56cbQfpU4N6hjYUBTZsVfTF94LBLBUQ5qxGHP5iSR3yQ2PV1zu9eoFbe57D4bC4yjpJmSDvybvBs1F"
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
