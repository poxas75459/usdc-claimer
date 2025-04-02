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
    "3LBmKyKawgMq85JCCtCsX89FrzzKW2KjVdx4f2GTNfgvNHYjwXWsKPJEymtKGsgsKmU6HjyqtgyZzaWmPDHzRmKm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qkdW7vpe2aK9E6WDyrSSu5CGeefMkacTqwNzigNfsZV2q48HGYF2SyeNtKDE5SanKnWy8rPZPksLNA3kfhg6xBQ",
  "key1": "3XrfvDjenZn11QYMnWukUZfZkBXLvsAsiR6EUA3S6JGKh7RPCCt9P2XhMQQNVoEKDqNqehGUCWCqVMQ8PMLhwy9q",
  "key2": "34a6stSTgedAbGujrDueHvSBk6bDAvdfsrAGbjA1rHNPLE3RyMikkLth1ryruQfQswyVQmDs3FrzsmnXHzbfNYMH",
  "key3": "5EPPxaQDX9UjVQPhoRxicyxuQDrbpJR3YKe4HEEaETMBoz4bobTZuoy9QbkVF9V48juskyKbYoDRMfXSJQhB9mXs",
  "key4": "5g8SQpmGm6LCLhZ8Do3U3or2BP9Jetdr1pkKG299bgsdnoFwGZd53w7wWQ6NL1SfUi71Dasm8CQMip6FEv1VPJoA",
  "key5": "4BQfm8hbHEWBEjgEH6GMT4CTpn7p3fF79TH64yAgQzVaPPzhpgkj6ihXN7sVLWuDg9tNqSKUYSzR5eJWyiV9tGpc",
  "key6": "5uN4jstURpZqkXnabMKFCzqzXj9v6i4kRmJP484yVyNc5eQL6SvzSEBNAtSeWHB2AwQQaZvqzhnZpUwigQ1K5RQd",
  "key7": "4Jvobr1Qse2Q2ZmeSFj1vD679nP3FvedX5grXq2ZzvhVJkxjLJQPAsaP1ZdCS8A7Ut3tYj1x83snpXcREYURYEUe",
  "key8": "23wZkgsrvV5SK1CFzWcFixrz6ZvFaHaxFqiA3fXLvvx9yR2VfG4tvPRtCG9UNf8kPuLe8uFKCMpEYnnRMuMZ4s4T",
  "key9": "3jcKunLLfmFjquFLSpCjWPC4aBWUHy5d6qPJsRVpgh79oLSFCBERX46oGoi3WyvqxBoFftcTjJ97Wd5RurRgaq86",
  "key10": "62v8WwEDfhsYvqeV66nkFRpyAjfbw5LeFrkNnFqxKX6GStigCsnFD1yPWiyUh9vqX7LGn75toTirBHQS8fwjNJs5",
  "key11": "67AWP7uAoicGWqkehkpoc3mvjoc8Q51sD8bRidUiQXYZ2UNqiPiTqsjcxiMcBE9FWd2pLyor78Vo4psCi12iUTvg",
  "key12": "GDXv22PxSYeKNHXWookAGgGEcenXjTdDVi3GCvYaJEcKAds3exof5yFhEvNEoJsSrevBcF9LowWgLUPra4P9ug6",
  "key13": "4f4jf7aq6mAa4HWoQDvWQDLRf6mrbcw2fdzrbxBfMkbhBkpMvDjroAmBNVYF2yLjYS7p8g6xgaVjmZfzabEhDQEV",
  "key14": "2kE6ASpWsmpF9uoddmyqZgTuWPtLkty6zfz5snHzjBucRsfWNosEWbFri2gcDwprhmtEPT1p1NQ6YQgEaXpbZwsh",
  "key15": "5FHGfznqchK7QgWBP1McTXQ6NJRvkY4JCSz1p9CtWWKnP9wtTo7VartvDcGKjQFguBqTSwQiqy1Dp55ThKDXKgB6",
  "key16": "5EDqTciJSbkr26axS4X3m1eNsp9UqNTDB45LkHvmHatjEJt8VXHJw6Bsg7AuBmantvSc46Ej4UEitmDEGMXBb6YH",
  "key17": "rtEk3Vt6AnybthURNKsEfQgXETUpgsXUrChdhKkonZemLrMUWtVzXNPLQrMEky3fcBb6tA6rLuiSVroBw4kUFqM",
  "key18": "3XgdZAzZUA48nHobPsmbFfk3iHysUN5GQL5ojdtkLz2gsfMpSxeEDLxBz9yh7xps39iMqVyxW5mLv88CmPxDY9qp",
  "key19": "3peXXj3B3DHxoEMFs5foy1KZSFYS4X7oUSDSs4yFAYRCMMjqx46qv4ThjxdhHFCzefMD6UEDgrGET6axpThjoSXk",
  "key20": "5h6sW3om5vdvPdCxj6dujvtHSrLJTM6kcBpxMfFHHS4fdxs8DPwaPcyF5YQcrcRkdpmhzwFgaAuSEsTfzqoN19R9",
  "key21": "4upQCrCnUD5mGDhQZCVi5SJkB9Lf8pvTz1yXHkLkk1asU94cgpKzUi2EYq9XcsooVbZ7LqkdvKWpBXHFuQm281L",
  "key22": "4nhg9FvhSz5ieRRQyCPC4dVpbYi5HjhLGS3jmityRubUSMGGV9i1XXRv8PL7K3bm63iZDWgehNdbCNb8scj2F2kr",
  "key23": "5hzvnNghiJnWPPwVd9U9NtrC6rSE2i4sAgPhM7sukrL4vL79jKMms3RtR8mY1GzheaRvEF2z4rxZtom7J3PwKKbt",
  "key24": "3THvhnSo4HGza95JCCjhqAUEGvCNXXJPNSTGzarDQBvLCzKTKrgrYvz7jiQzdidemZyJcVJcKBXa5KuRYCURJ9A9",
  "key25": "64GwPwBHAHjjCr58Z2nky4j4VHt6BdniCNRMSBQXv4ncczLp9xKoTimeQ41KiUxPxKtozEHWEtDmJt9KkBYXYmUP",
  "key26": "3N5CrzXpXBiNAF7h5kPF4e3H6WbRz6FCCLSM5gEPq289vyQ85fzYzn4TYCb9ge3y487MJ1XCcQYvAt3un7kMTMt8",
  "key27": "4ofeoWmQ6jbD48vTHMuX6rupfP3pEiUkE38qKAgEhwxREATYUtip1aJMUQzqW3CNhk2sAmNuktTq2RRVsRyZ9aVy",
  "key28": "4CXP7U7KHxT8cVhvz4DD7cwdNCyTBnovZ1DTAeQpXSwjusM9T74TBWD1TbHKKFonLVtHnTgcyVhM7wK7XLSaXGq5",
  "key29": "49dBvbaqiXW591Upecdmv6SEZbJybTPSyjv7ggx64taLLwYvixR5AEwUX1LwyGpwBbGo9j7c2AiHqWc2rtUJkpEm",
  "key30": "dukBRW7ifn4r4P1HWGzjNYNNrB5e965JCwENpHPuHy5iSXgAxQjhj8dtgV8Yeqd9wFCD8Tfs5QfM4MR6oR5eSHM",
  "key31": "7uzmrWFNyqCzw156AYLaskPY5SYrPnyjSHmfmMqLo7YbSxRfwcdc6vBiHbRQGbaC4gg8JAtJvGf3HHYnCucfUn7",
  "key32": "ryTgEyBtn7gkGjJYneKDzmU6xo3RbDvTEx6GLVUv3pfdY4vmvFt8jEkeEwizwCj6PnFSJNjMWw6YYP3wp7Q7f6t",
  "key33": "4Y68DgCkLgtSuaBp5WMmVk5BLUe9kyasfemquj1hbeumxyyvbcwivFjuE1ZGKTDVuaDLmepqWT7ZJT4XJd5TEw9R",
  "key34": "zFb46q2HqpjfdrUpUijUD566AqNyWVYW9uugFfHr2LH7n1yGukyqrm5Zv9gGoZfNio3WW55G2g4BF1H2ddftdet",
  "key35": "4KVfvWX8wiAjnAKtWGfLsnUc2XnndnCUeNKWp1tuLhh8GmBikgKxiBNth5tE7dW5Y2zdxVEqWnWKSy5AmjqFJVEe",
  "key36": "2SjnpUgo9tBfRf7mWvUGVkLCdBcCU1poVuuwNEQaLTqn8LH1wCvMRdfsNVHd5R5ttfm4izWa7QFoWDvW9tijucG7",
  "key37": "4jZuFdhub2DJooe9SfGsCpRNYGnVX8bbdXKHq732JvH7jyeupx9jHraCwnB347NFqM7SNjCTYsKr85Q8o875owqb",
  "key38": "4bchJzwaNWEzBHqnxLadq8rSf9YJvW3chEBzgqFAHMeEYahRfrQBoFwa1fEJgX8iu3UwQH4A6dxrarJtyZcSVFKq",
  "key39": "3Bm3v97bBdeUTzGXoDBsQoDQjaVLAo15NspvYW3ZfifF711dGZVe2RFS1C8Hu5QNDYyTTmPDAdgDByCjFoYo21YS",
  "key40": "5q4FRdWc9xWV5kLdMxgVxsnH8caQpSzfvTiDTD9EfV7tvDxtJif3kqSDAas1jrqYgMasy9bhSBbuKcqsJWTGh5Rv",
  "key41": "sYnsQ8V2BHWe6qen5syaCZPGx53ymn4fvSnEKZryMi6vrGtQkW2qaCeLpAWj1taNbgyiovjKWnwqoi7NsQDCMPd",
  "key42": "59XemBRRgEMVVVbA23wi2HiD779ZYMhUBUc56KrmXNBF3gqMGaEyJPDp7Vrt8qThMYiUPAox26iaRRGzXGsUngGj",
  "key43": "5D3F5CpbohqrXgvVGNLVty2ahPd18pX7NGq22mfvFQdZt9kWZdWNHiHrTC7Ey14oaaH5prSCFPWESeTR7HomNbda",
  "key44": "RHqVab1Dh4iK5iB1fi1RkGPnshzFu4pBvhiAevxaYiWDvTZua3oAzaQqkGr9LXhzjSXi4WqwujiY39PnveDDnH1",
  "key45": "5qFJU4QTvyJxknyJer9waLcmrMATRvrA1vW5bur5aQLDmxQc6G2FDAknNTy1h8NqhLDYw1ekkaCjoKA8XZfFmuHG",
  "key46": "2DhawHXMEpGfPaiZJBgCMACMhNRWvH6StobsN1UHzGxKBb6FXk13D8xFKnSSJSiFSbJzKAzdtP8QwKV2EMLwsttu",
  "key47": "3u6bdg8pYmuXDLDVAh6RqJYmQ95W9kdZSMXCiGDsW2fXMDMAMoNdkbHQ5oMyF2ZFwkFfeHJFrCMHs4kfWcnzzDNQ",
  "key48": "3AHQjJC4uftUXGnj2rwgodMAydsC9GmcaCxZohikdgcuw9uDoRLYa5tu9DLLBc4vgnm6AdWvCWmc2c8ZyznfTp4K"
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
