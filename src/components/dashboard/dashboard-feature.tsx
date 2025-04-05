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
    "goiTaisCkrt5eDAjNKo2cFhNLSQME7fBpT99wXpqhzmS3nUfGuSr2NDP6ByC4Y1jQCoazWVwCtSPwwkMZcxCtYd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z6fuxFhE2eQEd2dYAXh3W5s9n1ZyUY26VotxH2n3rTXgSTKb3xxAAgjydfCX88XTQudN7KGjmkyJRm6a8VodQqU",
  "key1": "589wej6dssAmZCrG7HA4X6j8yS5CMreo5n6iEpceLnTh7pw7EzmHzVwFPc8UQjmwhoscQMCh4amhQu7wPQnba5dv",
  "key2": "2V6YxbjhxuzmcUKvgUtNKdJzS4uCxQF2Sn8cNT6q2gjH7ipHySMJUPXSaofVuaeCSJdq52XFyouePV6mXXbihUUQ",
  "key3": "3arDYeJUuVwtbEFb3KKDqz9WhiZ5geEKNnvbac74mAMngQWjtFGEvoRdPKgZq1vYSENXpKPwUZ1r6qvvowkzPsfJ",
  "key4": "3QtVTCcL14DdJdSVN64HW8am9SV9e8XMYKtpapGMTBb4A6mRW3LPikCNdrWgDaFLd8DM4WNjAjSDhVMdzs3oABWg",
  "key5": "4z8UCXRSpABi2K6zgJP1EAz8qQrfAPPC9KskECNzouBMzvheoER395m5M2cpkxtccNf4L5LqWB2p2zi7d8e6KPQm",
  "key6": "4L15WxqyoSYkXsvtYebHrqeTV2EbVeztXuZB7KyRYtty93AppNJbn8PbmqcRRNH4qapBTBjLhHV5uSDdWHD4GhTZ",
  "key7": "4kNtFhLHWDgWitYiGQqfAtWprDupaHqEzyJkcKEeoQputvifaCcFxKkzCwqYt1vHE7V5gpDLzjfqAB5w5BJyXFKr",
  "key8": "5vtVmKcqSqWsZrZqKeZ4aK9mXJ9E629z5vXg3cM8FNMCP2JD3ujtNufVf621XqPwRaDh6xvCYdu16uqK1HoYWS5R",
  "key9": "gbFfRby3rbA1fHMnndXeRSG8ShDvZpjrAhjVQLyDu1E2NHtoML2Nx3fF96ZD2QntU6bD43NmF8BXK6xnkW7Eref",
  "key10": "2KqhHJxR2CuFG61R1BUf2KyaaNPuya9TT9EzKvBEFkrBPTFev7ZRn5HR9Qs8CSch5dDYPRoTTdyG8fWHFuFFR3xj",
  "key11": "3sd6UbBwfRZGoYjmt2UcnxwZcvyL98xsZovTNzonCtxhmu9Z6KjhapMQgFjcA2d56snQmudMQ4fpk4mvXuKchwqc",
  "key12": "4A8oSKLYQxWzLx4SeMKdwf9ESukVSzcob6F7EjneG3t8a79Tbc3mKaTZ3fLXJEJbnuDU6Z4stkHok4UkiES4R2Rx",
  "key13": "3T1ZixfX4nR2HLHGfs9z6Xt4SJkCvHxvN8Pa7TKbDwpCmfEsj1LVh1Sa5VoxN7F9gGGuhQyHAA7RSxvjSuNeWNcY",
  "key14": "3jZAoyoEqU4stcTiCBNu6uBS7QbAfgVC8Lm7UpobB1Lcts7NUegBqNNq2AeCFdS489fS2bxX4MYAvqdHjTD9zhWn",
  "key15": "4THURUmng2dFpVnyqT6rum1XSZwtuFXDAY4B4z9sYqXPnxxUQSkSb6BoGxsWAXWeA2nEBp92x9q29HDSPASHGhYp",
  "key16": "4DnSb7XXLfAY6dLEvM4B6XzVP7Nqjqpnh9LhGMe49b8pwFQZwg4gcX9cqfjNsWBKCmP4xXmNvAkQtgjcTEVZ26AC",
  "key17": "Tyjit6Ua2KCCm3sEVBHk5ekHhTFpFy2okRkkoKPFHgokFDumUzaLDmhrXWohPwD5peDiJA411rgCuDZ4P3dbjUD",
  "key18": "LyzVwUKuXn1NWXkSk7xMjLzNkHHvwMn43rN3TqpryEF3nqiHf4L1RmYvMATN5YTF5YKdmtthFirfFfcvnGZcsrD",
  "key19": "5TdfhKZrnA2hpGk2nr9DBvZc7HjVc9ANPf7bn1cPj2HUcgEXNT7w9ZHNMkBhkUtJezbptkUcvcMCSmT9qZNpjRNo",
  "key20": "mXYBzN9jiAFCKZCS7g8axQbuFaqwqdetBRxtbkxnJPs4LJQL8BpMk2j2n3kFSnxGe8NZdTVh6z5Wzcs11vF3W5Z",
  "key21": "62dWtwQeELj4tm8FHP59tkcRKAPGrWaRqtxikajEqCgMqFTD67tUiGEGohmFSY4x79HeQ5JSTBWf9EmPwo2rzkwg",
  "key22": "3E62wZKG19yuDfnvdKSqN8AZg6286CSZUpPZ6hhjZV5TcBeguQ9FpKVVyqChJcsQV81cLtnkfVucQVNxrXz7sW9h",
  "key23": "266dacx19aoYaBYDbmtiWiYYxX5Bwhppfn8wgzgmkbkqB8gygDHCeaXuRbGzVWXxYLtA4gYibq72VrnZRKqBBokb",
  "key24": "4pvczBNGTJFtyHDdk7t2v8KFDW5rXeQ8RBEk1fStmtD8dagED8VvtJswv5Abqd9VxEZgRL5PkhZ1u3STVb46K8YB",
  "key25": "29TsrkQYQouKwhLZpxnSG2y5PcqQP5nyfjQHZpFWCkTt6YnUmjRqnE5Qeqw4k1aeuZBAMGnK7898vfPoZYej85bd",
  "key26": "3euCK53uij4fZUZGJBQSn6WJJmhqz37bqGJJxQMm1uSJEnLqSTjTs84GJT9Mi4TnPjFp9hNKEzVUZM8LLCShUenm",
  "key27": "zArQtMezc9FLCaouzW2TGkXDD2wPHEvHKtn1XR5H6JTyg3hFMEVGvEn95Thvf4XxCHT7oqHBaNCYL9PTebVgHu9",
  "key28": "5wM25fFhmdfQMre6APJWnrZ3GnphYNWm3dWPXVD6y4LF9Np5Prdcyynf4ADQgFMtL2xTxKTfDkYcHzo6rD6DrkSb",
  "key29": "4QyDUZk8KB5i4c4kDqw7n3CamoNtyWZ9tnCJTBSUKycWXP33rQaU489aUWzTpBEPAVxLJb1wBCykDUmLtMzVCAdU",
  "key30": "24ftooUaCGejdsSANGL8e14rfPi2wxeS249kBnU2fnwBxhT151ZtcrdVpVwuXpCu2Zu6SE39tmf3SRom6bwNQSQA",
  "key31": "3e9DSQPuWSHj2noZNaxsUoPGDYbyKVGFhmvvVnj7rX98tPd1WiiBdQ8gzeTMaH7R7mf2nx8UBsdNConuum1RPdh4",
  "key32": "2gDBMrYHNAWdb2r711ex75YCtVTV3zgD3B2XNdzTTgfgrFf1pi8bokCeXvU8wsmcvSHm8fp9XXWv4BLa6nJPJ6H3",
  "key33": "W2rYZC5s3PxM2Z8esCEWXuAxRAyCoNKZNi9pWKnP7eRuhR3654w72kx1kiBGYGZ9PxuGbAhTh6D3n8Y5WZaCc8U",
  "key34": "3YoFdx8h9AGuu7s4tin6tfb3NvHpjhRKi4eKsKuKS5dskqxHnYnA56LuBWo6yQDz9ocjBCNdkWx4Ddnr6APq9STs",
  "key35": "8BAcunK6dvgEwastMhqqmFAzXYgSHQo9ti2tiPbiuq2JWcmpXw2wWPWTZusTKrhe4KXzVxM66bGVmcqmmW4rTs7",
  "key36": "2S9gPKxzGiWciVTzAQ4HDxyajE2dCzGCXKcQXaKKM7dNehes6eBNcx9cQjCKWq4AWXAkGsVHpQhh9Bd8Xd3gQm6k",
  "key37": "2cFBijHZc8qcJo2KkjwsptnAuQnn6PKpK1zZyxA23y6rJQoDZfmP6NoSvChjKhuDf4NXXe5ExNg1PC3hTDhm15Ks",
  "key38": "TivxwMT4omZ3ui8Ka9hjJhCcZ9msR4e1cduud9G2BWqzVkQxxW4BtdFuKhj23HqYvf9eWeFW99MpnH5Cnu3a72b",
  "key39": "2hN8Hcigj4ArYRCS8dsbDVwVSi5YuX5fxob5jjmXGJN4CpySw6HcVLc4PY3X7sGWkQvjN9RoaaktauzvFc9kgsVc",
  "key40": "4hbY6PmwqNApVfDZzXPdDmdEdezZBmLWfWGvEyoPscx2oS33aLVsiQ8wmgiWpAXveXTttAn1SWZrykYPpq2wxu7i",
  "key41": "52fSNQNkQtctjyPcAtmA5HXhhkJHKuYJ7FW4RZQBMkz9Am9aWD9GRhFbrTULsLDTq7NDHohDrgxRGu8o5jYYcAm3",
  "key42": "41BjWQpnEEeUNqYByFkWYqxbjDz5e9eGYFJ8WHAuWZyT3S6jRs9pq2dk4uH9Hezun6ApSEqxue7XySRRJFV3piuC",
  "key43": "4oRz8th4dGRh9LPmwcemEaBcpVu5KahXptHvWq76iFsvPLqNM99uQqjp5Daci5kHavyYqsSL43PeV9RTAfPzgWjc"
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
