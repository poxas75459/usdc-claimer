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
    "49C3tfzqVHnhDmynwJXgNMKNyCtXZB5nKVpDyGNuSQRdwTxEKMChd6wXnbBQzaBdjfkCQ2VjPJYAQLp8hWA8reCo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hLpmW6Cq6BX1hHupgXTD99N96YZPwezhsJ8sEuvW9XigCB6uaJf6UqdDfi2Xs2uZgSKWjFejjsCMJ4nL5LRBhxP",
  "key1": "2FAsybLB5v87qqTX3GubFdM95pd6RgkJ9HDMwVqxkhht9m4TvCtz165iWuikmZNHG3ycJbkyrdq6PCNFysKipP51",
  "key2": "39aQr1Sy8zDoSP7LhyxVkHMZ6SPtNn2R2NKBLLY9yPz5oAoy3mU2xNrruciPSGw4LXJPARRuwsySxoC1TWGLwfpE",
  "key3": "4sNKb7mCSes9iXjPDph1K9kBpurQqKqdujjabRzLRxK8fExHXn1HtJPJByV7XbuEbebKo4y6FsCeq1cyDf1T1K3T",
  "key4": "bzvnYWJ173VEiTe6fTZouwnh6pcMJmb3BAEM9Rz2P8HSPgpeTKVShhFM4h16kVr1tfitAjYLaVUQFMZKG9mW6EE",
  "key5": "5TjQcMcDiXurYUyLgzgYCVn15XYzMrswcPgu7JGgATvKjpvT7eees5Zan9XxH76qHxGfaZ5uVhce98X3twstMc9C",
  "key6": "3nZkAYxvJESr2aV3oxDiiv586qSxWHHYx81ZLGbWseXdSiqjep6TaJqWkhnK8hoEMUTys1GVSUicAFzxedpougoE",
  "key7": "91k549BkezXqWS4T3ihDK2K6xiBVWeTqv9fTCTE8izbfKb8FF5iaK6LYtkZQwi5jqHTp7TKUkLPnc7GRvkzhn9C",
  "key8": "3txUN6AorTUK1pbLGRfi22rH2LgHjwzv7CfZdKBrL32HXtc4kZrCNMWagX8WYoW2ekhrEkzNXpeVvh4cnGrE6Zs3",
  "key9": "4ZUVnDZgMFKG4EqYXxcHhUFmjnb7NKGjYJeRopjYnvYSktuYNWXw1amCRUMqBvP1VTNEwL1wp2xkVysAwyVvVmzU",
  "key10": "4Q1VAMdBENuKaoR74cBTofkp7Vn5X9euZ4CmLWtKHsYxXtaXcmkqtjZzoZCWQMJdyhk7J7hRrUb82uBBZLxLMjeH",
  "key11": "5xBhvdKHWF8U6rsFC3WjVsJMkR2NrvVgWzSf5m1MK4kxkJCkaVMzAorhof1gGZa45kbi7cUjzrHG4LQFpTea4KC8",
  "key12": "7nKUCyWujj1AQ6cymSQnvNzNHLTbUUzb59PrjE1EMXDvSqxnf7Fiy49WfL7MG8sjKggToNVGFR7V3KdzJwwaBGe",
  "key13": "5B1SMK1Lv5KHpFSXasNdZ6NmTWz2QFhWZkrfGrZomfL6raoL3jc9n6uWWaTpQ8S5dodZ42t1J8BRhJeCzKTz9YPp",
  "key14": "rSdYkGNNrtx6C6YWhTJFLpbqqBB88ni5iksHYvTkQqVjzD1mhwsw72bAnoKn3Xq7Pt5UyM8dkD71cKuEbaHd4Hs",
  "key15": "2h9eejkHquh3qWC6TUsfhh3W97Q9CAtQZhrziZdmqhzrjvv5zDxjygCVqDjJ5R1rTbAgisWzoMjkf7PE8Xisdrfy",
  "key16": "5tBRcmMhRrsCe6dxoqeqaYovQZFoMg8xoWCPXfT1qzuLMGJp9FNG5L19vWT2ZHQLG2HmBVeUTpyYCxhc6vYDDY1u",
  "key17": "5gyqKDu1sZD19eNfVnqb8rqs3UTZ7k2gJ6buCeA2SETwNL2o3UU77Fv3i1TgEny1vVWhu5a5cg7UNkvfZSSCQapj",
  "key18": "5CKqc8c5h1Ey2Xh7CdyDskhusi9xhbf1ZSuHFHbRodT1xzsZc1yu2f75zwE6YuJYNamJ8MsyDu4cqwoEaPZPWCZr",
  "key19": "SXWHHPfK3mgQY8F5mAiyaT28YYn4caVSFsPrWVoPD2zEn1m5MbXodbU81N6nJXTWAKk4Y5e5fqzpDSWHpTwrvhz",
  "key20": "2ZuwzSFwfDZ5pfXZQSJMY6Kr2FKAhDrTdCJdVp2u1ZBCifEnV2PTcGuhQc8qBe7k3kLSE1wQe4apEjwd2vDgCBWu",
  "key21": "3447gjrWefih8XwmzA6318NUfTvvW4UfrvxVYNZhquxfGAtzUsmtsv3uoxyNRzeTs86KbdgQU3xrtS22vrbVHxMs",
  "key22": "652FXiKhMRR13LrCU6Wm8C5kyBTrKopMYHKnpEooTyyrutLvvWMHK5TZvURCErxnMJJNtwGvQvvnz4LP9siqjswu",
  "key23": "5K6jyuDugEqJiygs1xuBf9sXfQdwicbdpqBRcn4wEoJMJpXrKnP6RHgZbkM3FJuttU72LL9qSdxXcKbLegB9nYjz",
  "key24": "3WTD2gZRvd24P57RnmDFmoxDkt55igngL6GPZn7ixYs5V3iiZvm4jWvhxzAcdpHb1iJpjRUqsXme8iBadrAyDk8U",
  "key25": "41ebzxYns2iJ6bEQ6UgXCPm7E7EaNxuWWTH6EZ9wcDZdy8aWaPkj6DhV7oqQcFKVpz9eUg1tzEZm5Lbyp3f4PN1H",
  "key26": "5V8BD3xdDmNbaQjQvBAYCU1Nj6VNKHQsq689tHJVaf5UrogV2rKogbwsmbPwRNoi6QB45bNjE5M1V5BAh71MU8nf",
  "key27": "2kbPkuJ1uE9g9WQj9ESewk5G1Kbdpv3JhfNacRR2hxbPWbLGWmTAJea5VhUdM9jaFMqD4nLGiAfg7jWN4HtktxKN",
  "key28": "4yzaZCJierZTNw2aZWx59Hw25A6LzCND6CzjojMrDFexLgww6bLnte2H3VcEnGsJfWMqzxqVGn1N3pzmMSem4pkB",
  "key29": "5CK61Ym55RkQC1HmPJ4p2K9fySEfnbwycoXzoXBGy4yjQzvzvKL4stTgKnpHV3F9jY8YbCoU8whWkTuwmhHrera2",
  "key30": "2238nwqBUSgTmyhv3jA6NHWDi1YiD7kAivWu6nr529A3ukCqsPgnShJEiBCJiyCGUmjLcvSZm5pHpQiDoQYRwH4b"
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
