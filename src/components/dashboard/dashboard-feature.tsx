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
    "2GyLqrxUk7bmSNqhBwiukKSJ8CiB6PcNSngAjmTBQR5PBTD4HFmndWh831F4wxKb2WMCWvM5XM7Vs8Xq2wUXLnq3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JqjoEX28dyLUyjsSiarhkJQMcCZ2x6EyWQvKqE8dia2omjqPY1txae3UQWCynRBuh17zBNNDtNz8wQ4JPCr6wvE",
  "key1": "52AC1RA4U8oTRXV4FotamGjAbVPYVygmJmBALNddPbUKpEpq7tzrgoSJDtVj9YQt9or2BxEuGV68RyAQ9MkKoBgj",
  "key2": "mYpHgDi27j2GqKcKDhv3feHqg6YgnUqjnXRo15wE1jSnhozySV3qwdQNvtygYKzJQGzmuUdiTDcE3LLGXSorHDc",
  "key3": "3Wxs4c87W3juSZYWFNzy3nF6jy7JraJ1BNC9YARMiwgrsRFQkLKqu88n3rcEZ3BtyJC9mJJVZaF5BP4kcuwvVZ4p",
  "key4": "5JdTFfrQkBDP2ovFQsXtYTb8SV869HjHZt7PP3pmVuvtpvzamw4kWwUbq7soovMkpoGJAi6iR8FJiXopdoM9KrXG",
  "key5": "9fPSFn2cioLWKVz2xwAX4jpujMbJAmwSySqeWT3XhYdJ72M7cua8NXy3zCXYSvZrKa8ekM9QCiLqvYcgHFpEa8f",
  "key6": "558ENZ7QweQy3Dsw5wH3Nf4vQt2hvZ4ZLT8vN43oDDe2oWqEH5bKyczxkpNQwrsihT6re8zHrYEr2jPF8Qx4TFqF",
  "key7": "3YoMFEscQ4tdH2Z2C4zJnEXrjY3KdLd8Dr2XecRvXokyzaSFdhLLYZ46rL2PEQe2YGJ9R7KxEK7wsXL2EeNxN4wn",
  "key8": "5xD4L1WwnEAVuk2gfw92qaJCcU1mN4f3xsw4jw2rdy3NwSMdtdTJt4KdsPzDtdTY9Hgw3nRAM5WSYwSmUdQVsyNf",
  "key9": "2evKgr3MZKr7TAzsCVvYz3GLRGuARwJqKrNRK9KjLr3Kpx29RH9YNT3xDQRmdeFtE1sRMXetBA5rXRUnTPQmh7Fx",
  "key10": "3Uqg1EBi1tYmsAzGZM4PBzRKeNGkEKNzUD5F8F3FPH547j3vmxGSYfUk54pDbcXtsoUchpAwU7msuK26QrR2EMDp",
  "key11": "3R1kTnVwrprxHzMwtDTAJaxkmFAtxBngbS1cU58fM73hchsUpJXBYCDCqfEQMZcv2wiaQbkv17XgKAuTXmrRh3J8",
  "key12": "29iECWpfcGVXC3HqfSTGAxGRJp3XUJzMsE4aVDrgpAWebEFURpvekEBgL7LYuVuD1yVhX2izTNxXpFEdgLwYEQev",
  "key13": "46h57RuEhKqVdSKVMF8iySEEHUqbBneb55dfAufTANXLfnZ8uoGzvfdQ7sSrZ5Scf8rmJJ1dXqkqM4uK8tHzPwi2",
  "key14": "31Rhr9RZXYapgv36VzGe4MKv5FXfZHxAQZT7MPSWie5aw966SGE66jwPhUhLx3P68XtgcZvfh3jtXhw2HM7eY8M7",
  "key15": "2N6dEciT1A2sJxcWjBEJJfoNs9PSzVGahXieLiAGCW9G5MFpTDrssCmJ6FHM2gdVwgfcsoNNRJDT4T959aJ9Jgb4",
  "key16": "6P7vXPYzzV1JFoFva4RGEiXPNozLJrtp9SqMcJ8qHxvJXfXHCFej9PQq9bUWvaNHS3ei8MMyD3mGMHeCRZPVyjC",
  "key17": "3uGKiC28g13ZvsNguPSn2gToVSC2HChjAKgZUcMkHJkxVW6j5VM5sHDoxYMNE5bX5AHfxKXbTzChEwokq6AF1X2k",
  "key18": "4Bd8LHtHCmL5pYaU85Jex1vZET82QGbT9uYnJiRAKTpuYQLU94BTtYxATVpuX9UwqBDcW8jqR4YABsuK9ZggQLwU",
  "key19": "Fn5jWWXQ3ypXC12GWtpHF3MH7JhCaPRGqkYnToJLunbWLe5VNS7XXziaE6XrN4yHU9ia4UsaaqQfvR58L6WmKyH",
  "key20": "BQgkVYtiHhkPxhZNpZ6n8UPqWt85tW8h58QVQvkNCnph1JH4sTeDsEkBNNH63TaUo1zpDNxA5G5C3ZXayXqkjEa",
  "key21": "EdPTsSLHNFr8ihD9Qjycwj5GdVLodVhHdjcFvAe1ExnoUad9UzNRxH4hPJxV52hhd1sY52xWp2t8uwY9tANwc8j",
  "key22": "23iz4wFDN1TDt31tcYUzt8UwZm856nYCQ9PJcX89xFWyHhzUmxL87Ncuv6M3WJ4UMLGJKnhxYNSiT3rfMQaiukyh",
  "key23": "3XU8zmCcH4YcqC2tfKTj8kwBiWQVAScArJ2hbpemJ7YZbqmE7F1BHAgiTu7QqWBxqZEpWnaLrVAm9UC8jHzfGobE",
  "key24": "4uagZt6HJxkiPzm4BQAs91m3ZptNDN33ZCxQ7rsqGvx1njHV8r7EVVGhGWfyACbMMUQdCwkxWeP8NDNTHYNktu7F",
  "key25": "66YzQ2FCBYomCVrk228GQqN2SAjAkqWzDvLZ3TP9vH89r5G9RuQK444Ndf9r3uPt467FrCMQAg216NvnKwtdWcDc",
  "key26": "4YmnffE8Lh5D9gHgdcUUkgYSgR9gvJoAhoxw6iGsD8LyeckDyBWpiHcNssBuaDB3LiHDy6FG5H57S2ctCHXwi5d1",
  "key27": "33iuJCCijyXd9YLDfYoUvhq5x29BUoiyGrfH1How2ox5rdjE4NiYrt9Dxy5cYZCbmPs6UWxvn82PHTzVJV9R83Bt",
  "key28": "5x22KCEmUoCee2MjL4vqzH3j7WQBUTdTuMPfL4hwrHm42zJibi7ky6vVG9zH1a7iKukQsfsW8s3ExWDKExDasY7e",
  "key29": "66jwTontmbsoEvnLxwjR4erQCDKWgPWoxphTfaCiMmKDVCxbuS8NDPmhdadqZs55kSxSEuvtS7ZuCt8WsCqq3CdZ",
  "key30": "2AaF5s4j9PTVfxZbLv759NmgFUqcWGyRGrQnHGaYqgJfuR6Vcdpc86W1WotCBrgtAA638h1DBc1uVwbxJKZ3M65B",
  "key31": "3HNQzutxs6bB7fSdWyQFDxtQugcERNg7ibjLLGYAzmqhFEnuu3VFWiar51c94iXrwJViVJH2iN95x4WKAG9mkydC",
  "key32": "31mSiTvyhiTToJJHu3p1r7UfMcXze5ggpxHDgosCU8pVygFb7BSajbyH2pD2vqzSbMButoQiY5bVaRssDBSwefta",
  "key33": "2VNs3Xgy3kNcd3RbGhhoAhCrzpmesx9cpx6sZsgncR2D9LcR3QEyd12yChaCM1y1gA9WT49wYPtuPZLg3MgFVPoK",
  "key34": "PdMGLRniKnuP3GuZGqLHBos5HwaX8Jr1BsjHfSFEjLfdYavLhAtGgwmzReWhW7ijp6zz91oVxHUGx15MT6vvwTH",
  "key35": "5wGBmxqWVbYtU75GEGcrGoYtDMojMrZMQLAUotpKGt6kECjd3C44o1sFHumMdWQkTYWGxJBHPcNxg4TAjzQU7nku",
  "key36": "4yYTDJJB3bUqFKNBhJpuqhkdyJbgynDa5LtLJzNc126q6nvWRPdAoX7dyYouXvMTKYZSZKmbfmtpTBamUobkpme5",
  "key37": "4vnd4bcYyxzVTgA6XXiTkkoiEHXoBSiC8zpWNzdQYb2s3ZCsQ1bxNWhcNZgJg5xMHhBZvLkaTKCYKXxEM2NTMfzo",
  "key38": "5BsgwdLg9fiKro2sViFCr8nEySvhpUSyqQG1hFAo7R1koARUgadgGAyq5W95onu1uM2xuoJUgkCsWs8D5guPGiPX",
  "key39": "4EbTAr6qsn9KwutE1UDz1eHpYpp9gwJi3c6DD7oWyPnsfaWRovEzycWSUYvvc2Wt52N3ooEGetacQzoZTCixfWZv",
  "key40": "3nLwsmNTXaLXDVHPmL4HUQQaMjFsF3PQBq78sfxSufwwHakmK3utcPsRW4qqVLg5Xvub9nsLwUXkrnvYjym5foH9",
  "key41": "5fxnzRSjiDyoSGmvGS4USXqVYNdPMJRFRbis4SY1RvfPDkFuRp3FfSUMvh4LnHZ73qge3nio6NWzUSht4BTv7jGd",
  "key42": "5L4ebu72R3WiKKUEvoJ9y87y3r1yKv5rDdoup7Y35cbHYSSjerLL1GipnAtGc1KzTax9nDPVnnpumCvsHTVNLtjm",
  "key43": "jYyQ3L8tD7x8S2yChrrNJYEzCfyJE7qdVdV8tWtkbqHubL1Sbn4z8EBxC19UZHgZCqAHuHA2mcPZo76HbtjL4F9",
  "key44": "1MmUQitBDCzRTfvTwAcE4b5RhawJojkw6vRzM5jH7z7TQgF7QxvG6dgwXViJ7NhnnmcC38M4WCFnDQKNKJcE8za",
  "key45": "2n7EBEFH8Z4YS2wBGmpcS6EP89LBUZYoxfvKeAVH7KSWCVDkRvTBEZz9k4Pjhh7rUBXhQMBfitDFo8VB8RkH9YBL"
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
