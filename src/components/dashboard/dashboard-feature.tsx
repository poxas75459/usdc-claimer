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
    "p9ewMsdctGRzhVP6n2kcEuXZJkeFvU7mnjHeSsP9KXv4LQaWrqSiszfzCkB43Pdc7dqpxT9vWQ4UZpSx4im42Wi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wiXCQCJ8STryzXyVRxq1dp7ttnJD78ym1PfM3d7wKgJwXvjSga9YAErQ79mT86Hz8LVz79XqVUoMvGHchL4bWow",
  "key1": "4CFZCwhjMkNz4Jh1NsfCmoupBU6cjk1S6jTYNQhqX3bCrSDzHubhz32ZyYvePV2vweMweGNtRDeucGpVMCJzc3oE",
  "key2": "jxFFbzsiyFtndBdJgTWKQuMj3T2qr5wkVi13wurHWrnTWdesHQsjpMUD2dXpRry72KzCAR6QY2nfTstJaQo9p56",
  "key3": "5zaaF99VuwA25CLRJxP9LnyJsbsfSVLkzmzY8XWpourDn5b6DqcqSYhA9Z11Epb2CV4ptjXduRMoFHrK5RKZJ4Ks",
  "key4": "3UDL1TNTZr2jfhemVDGgUwUMiL7nAgNuKbG6fM21npAvBj7yRrfVMAfC3T83NSmHyFSKm5rK8XurHqGD4VTkPevx",
  "key5": "5Cz5ePh6Uk2YZzrajHAJbWVwVauTq7vsWaxro6dkCgXNJJvCAYngfVxbDH4Gb3MZ6UUWwuG4KAkUKVJjjvgQPY7Q",
  "key6": "5CZPyjUtsu5WhwqNeEsELhCEeb4cGQqfSxR2NkMX9SzRYYkY9kBLLBL5MGaYhsfcZeTSqoVrP7cY5Ke67gD55tmW",
  "key7": "2yJTu7jKBKZYEFKw1CyL7EwdibrAZzJ8FuZ4FwqLYpf8cxYbhb8kxxhrmZE6uEVzhsUfgYNWRY7Z7sE6sJXVcyM",
  "key8": "2A3uC398Rk3bbitAZojnVnw6Ye3xq6nT57R65txBupGnHxN27NWhBF1uBMSi4M1ntPaGqv9n3HEG8MCE3RMThc1o",
  "key9": "4yvLM5NqQf6uGfeuNYcPgwmtVSg3bfyAQsJnVULUinaf5hQ7odA4nJFYSukg9HBqRRA3QRct812ihjiTz1iSFsRZ",
  "key10": "2Dg8kwKE29qCUFkfSmCHy4dSKihAjZXFamHJL3TTiYruGCDHGsc51WumTAj1zqV4EFvggCEZHq9Bu8fkPCgAJJKg",
  "key11": "4qoRxKDcwsYaxxSEtvuDKfRSuEyYTSMLP5FBNtxJCBZdegNqie8LGdZA3v3Mr5GzXHDmU6pQ4fgf7hPb6t1AddMp",
  "key12": "5fM9FPRmN5a17CNAvEet4bzmZQwdqH3sxptYvQGYxAfmL9gErpzpWxfr2LvRCsa3xfYV9CEJextpuZS1VNYhVEW5",
  "key13": "2dzFfzVBn2mdonn6JdpzrQavgSJMouVdd8ejeFBbfPo4b6YRoYbpWgoSvbGbH6kf5XpHCko6ZZ3oQpRDmbYfKAUH",
  "key14": "5ZNWbCkdY2dNzgo44KpCQM8TeEkSSCEVoe2hCNrV1vzmTYWdMPGoWikFZJZtQHpbae2FeoP3nk3HCMuGHzaqS7oD",
  "key15": "2wY6Ru8qBZsPwLuHPrtUxxhaCBqBrpRsokcRFKLZhTgUYZzTjGmsTqPZCcYPaGrx69hDgRu9PeraWXAWKBoLsTW7",
  "key16": "392Rnrw29tyJQaRZ1XQUF9SpDo9sAqWoTcaVrjcKaDKgxWXagVDQaFzVdvhNQFCXab6qU4gMs5TQakj5JnMBAi3f",
  "key17": "2rm2Vvek1mTd21H16Y8BHjZA1bunK9eiKxVdnzLazAMQQFSAaAbW8zsgfwFB3E8m4mYT1kg6YDsu68Raxp5x65B3",
  "key18": "5Jheq2TBfFgevi6osu779TSdrB3pGpvASTtkeDXdhFQaqWqZNtvGhzzY4X8p9Y2gAaqjsTg5p1eqfrRAEerkSsbd",
  "key19": "4kJp21VzFMLRi2WuYdKjXazvT91J9zzY9HY6DHzpGZ1dmk2d5WHh9Mk1fVrP1fyod3vDFvaXYx45DSdiahRwAHab",
  "key20": "QHeBoSpAjbmRJCMUbZYn4A7qHnTa5AhqxRXSQoJLZgWFq9o7FxfYJFSuCvMAQmienoeuWFw54ZVqJfTQB1t7WpN",
  "key21": "58exex9LkiyrhRq3JvL2J1QtvvGwk3PKbDAj27EdXBdoU5aorYU9Ek2en4pTUcfeHtbs5kcLsETVxoJPfYiSKaiH",
  "key22": "3E51K5ZrBMQB7q9UgccFnqCn8C8rNi3qoimJXU4gQDaLrHFEN5s52J9frqcZGSpc2Sk2CQLBEqxX6Am9rTJ9s5b3",
  "key23": "2VSNhAjaCrBDSHX4KHE4ntNBYWfuSLai8FbrAXZVMmPz1D4A1jD2SV4uMxrF3YufZosvijWMfe9AZUrr6L2xmo5t",
  "key24": "565CXr4qfTabiE9FvcAfKHXRU4WVqTmdk1zrrnQP7DLPSJXQ98gCkJ3DbAZzy5V8CLk9gNnPv63PwwrCPv78zYMJ",
  "key25": "2mq2s3qeVTj1gwcWsNVWPiK5G1A9vXXhbtjnfVbYqLH6d4oS4pCnuo2gGT6muL61jWsa4J2HKCUddL4QottssYwX",
  "key26": "46E6wPmzk9ggnnfTPzNpTfH27w279o93geEcEZaur4PUKFZdPPmMc3Vb36rnUQnv3eZ8Z1yKXnPzsChJtSWrPJxs",
  "key27": "LWbi7ns8yYoqJNYHfT4Uxqmix9UCb68JcHRDd3ZhjYUNX9txD2FP7UbdHENLMFPxiBNmpRR4BGXmubJZfPmQkMX",
  "key28": "3PgBGbFhjH2sW6VbZpb3wjcjaaMpNeeZ8JgicuibRoz6LFhE658vE9rxGgmsTq4HQhi5CimvqVrDY9z8wUbD7oo9",
  "key29": "pEsNvGkUGb1hbD1FYjZgdcLPXfxo9R5VbYrp2txS1CXS2HhnArDVyFXQQpstrm6qb45ujmXnby6jXjFfjvRsgBH",
  "key30": "FJhc4MyQGCasndbzPdCBNV9KcYfjxYzj1371q13FrqVAfZP5rhHuhEVSRoRK4AsmRmTabDVqoqJ2MxAo2aiWDJH",
  "key31": "2w3PGqT8qSgoCTGPWfSDYhooXuYP5txRnZJUakk4jgEv7Qxb571gB9WpqJRUBzmxiQHk4UhJchPvm95M52JkTa1e",
  "key32": "4QdPzCdctvXPpuFreL3Me581rcpbAi318hMXNd6DEvpMi8pgVoGbgmFVeRfUR3UbmVqkLndE5sYgAb3bmtsu4R2H",
  "key33": "5EKUa2Hq8x5WTmuP9Jdmo4zZKx9MJSJpr3xNkwKkwGLw1mt9ZXMYBGdZo6K8pAJuMAmiTy4Rsu3QDejgoD6dPJ9F",
  "key34": "Bt9NPeXyGK4Q1TyBYeSLvmsCwnHdVKm4PBsnWenuw2rfpUv724aT3TuJf1DSr657aE1NThrzzaGzC8zep8FUubj",
  "key35": "3arvfYLBREnVaLCaMAKcgtHAnLMZ8isSLBUBxQbiG9SLsqQ1ox9ohh5eGijwXqdUbj5XZrhjkYjawSNaRivzRxhz",
  "key36": "A98Zkau2UfkwHo5MmopQqPtexgNriLreKdWESi69qenshCohSkGGR6viwxdwJ6kbfXAus7iXAiEy3BVMvjC73qi",
  "key37": "UpwQ6KcELWbQqzhd5qgYjjp4NKizf53nGWEzt7aAJFVqGFNDqBrL6qLK4FsePJhnpW7cWskT7iTjCDg1TxtxGay",
  "key38": "2fydS2fDGzLe9zgYKHj8X9dxKWguaYKkiVEc9r6JpYynXi2cn9jLkLERHkkxyESEGAaGEtkocZdVH6TrAjEA71un",
  "key39": "33P4v1pzRmhvzjNs811WEtbekBf9KeyW2DRRSWivF4NEvAoVyNrCFody14xTqTCbKoiG4KAKHaeYWiHBAb4eQL2g"
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
