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
    "ZihHsh1hwZSsVqc15Be5tXC8oATjdKwkmyRipZvkJ9VWapmzqPZTYftrsmapDLARo4CXvosN2yoyy9PUmNSh2GA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wkAFGqt9XayDGxfFTvBixNLezidv1948SzdLqiWqPXuSbfCRsQ1vutBdPncNcPkHL2XFJ6FMKxfkJFPUmgxicJm",
  "key1": "BLuFTqK6dG7zgj8ZzekXLQeYW9pLY222pHqqt8HJGehiWaFTKrD3jn56cAx14A7FS3tDqRsHdVUGpBinZb43UEi",
  "key2": "5NQAjJsXXf9gjtDiSjrn3eTKMsmjzWxrbFESGBA7ytisGBuW7Ub5718TGPBcDEteLJctSrNJYYZZGQHBe3TAh53z",
  "key3": "4zRxQeU8J7JvnwwUjSror815om9ReJVGDRXHV3RLpqaG7YiFHAfkeW8haHE61qxY3aU8jcV9JoRoPhGPxKjZdpVS",
  "key4": "4honJGKMtXYRxJaAvUG8yy2LyAvfcmjMPpjk1wWr4sFbbDTNsF8HzS8XgnfShnCHVFwWUJFXdeP8QbxQNrmbjR9t",
  "key5": "4G2jtoAzpRkuPfWcLQHdD8dj56SHKFGWpurh9rrGdEJmhnNdU2ELfUWGucdH2B4z3QJGrnNAM87h39N5eqE9BAmR",
  "key6": "2nJQXd8XeaikCi4dkrATdNEZNqw1ukrpD8jjS8B8eCAbN57QaQnvLPZcPUVyDMmAABTM311kHbdmp8tkm1qeG49",
  "key7": "3gtAykK7qGqkZU3YmzytTGNXDy9175zXMpFLFMbXsNtfb43TEP9NFEVyjMYtDSb3dyvye8KjHUjFvijzXR6jX2WV",
  "key8": "5wXkkQLwz6MnQTCGdD2WC6gpXQ4PifNhgajoUfhnEHAZvfGTZzVSiMem4yShekaB3gK3bL5z84XWb5S9MHNLG2MW",
  "key9": "5YEfK7rfvN6KcsKLyAVvoqVYhW2ZHfBNfvBQvRMkJxkNfZvCAoDsouMTdYHbHsCWTPuZRkcYUn98TEr8KjBwzHaR",
  "key10": "ZKbyGBPMMZ697uEyvJgx535hSxGoKaDzyAYXWU7WpSYDH5DU5CRngCcbbWbhJsuSiRNa234ujf21HffQK5MrD7g",
  "key11": "4tvVcvPRgLhBVF5gqjY8rMbpWM8m9DBVVE6DhBPF5VWD2hCqkSWjB76oFexXP4PsGzDZC8T94hRYY1QqnsauEpsX",
  "key12": "4annNe3ZezP2w2T9mvadC4CgSUitCJHvJarLGcbUToAzB1R1Dknt62rp3bZb3e14vjuELvUmbQV1XcQurY6wWFgn",
  "key13": "5eVsD8QjaX1fQmXdBsxnmjYCpFfkQQx2Xe4vTLbqGcCNktPh3XgRQRTYdd3GPeKcktZ4pAjP6udctHBXfSSNVcdw",
  "key14": "2GXAX2uddEUJ24bs74XCngcxPn2qU8V2E4uGQDEJ2Ypss7KxfJwpoGj9ijQsG6ggWpzMgJeomaXtfYuL7cFUvFav",
  "key15": "4iBqmiNd3H9fGHw4UfqPvwK14dcmi4rwUcSHhZztfmTCRxUqi9hRCDYUdAcePcXesK2MBgtiXQZG9JDVcCpboaGu",
  "key16": "3cxrvsn24Aox5B9PBYC66ooMh4o19234c4JmmqFVNPmVwcyGA2WvpU4S9thXj6X9DuPRQ59MoPyh8PXAhYeGXYFw",
  "key17": "628EWxKLb1zys9Qb7J2FgyDwg6cCXHNdJcrz7ZgpNGQDsYDCepfPpuTjDdzC7PMAMGmL1sQDFUKLzaRJUdx7SV6G",
  "key18": "4Evs8fJkmv9WakvY9oPQ5yuxdRXq6HVEf7pmvBijC66TYE4zYG5V643rq14cnMjrwR3VTD8qTHqTibcgcSQ8uTJ8",
  "key19": "KhYHMzMJ7rA7o9b2RHyKXSAQJFrRqgukiSNaWHSMSduyAy4ahgaPmyY8dZnzfpNnseDS3VRaizvAH4evA1Ryci6",
  "key20": "VSEmtPbRFU9wNJkDnDh5B3j9SfaftV75L3Rj6Dz2pfRBd85pr5tERV7JM1gJ892eKNLCQ1RZnrm2Yx1Cxc8Pkjb",
  "key21": "5CetM74DsSMhxhiVXrLgj8PeXjQ8eJwNdZJg4yxwMWsgXcPnH6U5tSbFuFs8qssyMN763CDJ3rBMFioTLK4xwNXv",
  "key22": "3qtU8doz9MgT85Rh4z1s9B3pR5gdKmXtkKYhjbiKb967BFJbPLMhm1EjQtxwHtQtJwaTjE4RjmuQLAuhYSejDFsW",
  "key23": "2PhwUVSXWeyD2rqVpb8XyKueHKFfD2oN93vKBsqvWEHLtr1tpAKfnyir75o93fGc1dU6hVkBx4pWcdMuzohXxTYv",
  "key24": "5Dc5WeWnhjNjs1AdSNqc9caAGjyaeZTy3LKz2qc654D6dTkZfVFQDJJgE8kPv8iixYJ6JtZdDqfbH7t7kgDfUTgz",
  "key25": "2jbrqTnJChXqn7WbjTzffhwAzQuDVZHvrotEwFdJcDoVoRCy8jPxVxgm5kVCpBN3yq9CP7QRmVcNpodVEZ1bxWYp",
  "key26": "5Tf354cgrWbfnAF89BzKzTDJzzooo5XyPv6UsuT3ft94oVEhizg7cDAMBoseSegNKs35xi9ezhMcq9H6qgDqMHWd",
  "key27": "27qxpkKfmWCUeEnWDnZad6byYNBKPYsiVgnZhfoFseKpzYFiXCCsxqxJ6o29Mq3nFkfvYi5DHAyJwNKmk9ntefZu",
  "key28": "36morHyuYAB8H6LVz8tqMpJpaWk8VQ7M1aRsfP2gzL7zRaUh7CJ8MQW7ew8jGPWJKUVAfHg4QorhnZDjhzdTYzWP",
  "key29": "5fyxHudqcfeFJj8n8HFboySkGJf5NMqSF8kdvx9YMZ6func6S8qtW6nG5bjTQw1WFKm5TXAsMX2dXE8BoKEAqt8b",
  "key30": "3JCnknaa5vD7XzLYuZaQPiagyCHZjYWAmsJ189KhjWW93xmWKmZKnDJajKnDJ57aB1fnfSSBacDEfPQJGkKXTjXn",
  "key31": "2z2feSTbDxGJKzcWG9wJSDWCZgh4u7sxNBk3CbP1MqgprgHyhKj1WFMvdfAWWCeiiJFCjhm2LwsWVwUScP3Ne34G",
  "key32": "3EsQb49jmDmsqFhBcWcE9R7Sn2QH2pDduYoyH3VQSdHBe8GYjFNEe9Cq6bYaVbiJYbR7bCaAy3rCNV8h1VcnEEQQ",
  "key33": "9mah1WfTLQ7HaiJKayDFUnWvGh2aKRHpnQ8dMotXZVnmHDVVEN7CPZDtLbUXjJYpQMDxa7Aapxro22yN2rpaVjv",
  "key34": "bW7TdPvG7pThZroBYGKc4WQ32V4e5MZ6muQDCa9S5UwnotZje9ysigdwXi3f6ziK6P6gKfsYJkzVtYoM1HhuBFM",
  "key35": "n76L5xWAKDwni5uoW8yfQFKFSwmDFFUdFWEHzUHUWDHrxTtfzPfb9RnWawcgZhTF16KgykHtFFEXCHMSHdQJnuo",
  "key36": "3JbZekb9XdonftMeQAyJ3PaZQaphNZoArvo4fiUVCmmTXF3eox2Sdhxfde9ZWok26YjkwjGjAH7CojuZNQC7Uvsy",
  "key37": "4nuyp24DRSiKosxvVp4zcnyvZFXAZKagHCffiXpEGEZyn6gLeCs26Vij8ge8t85T5dVJL1uQ6pv1zHQkvmvUgvGv",
  "key38": "4VJWPfRNPiV8SMesMssjQiCfjy4mjhu1vvnBCfHaTR498ZJcccKfYY4qf2GDEMfcxhMRhesCiHvt7YKTgADRYMB4",
  "key39": "4yoMG9PVb86iALjrrtCavugEYFt3413aUvt5hDPiyRmbYcsjYQABA3hG3qbiQ2eP46UrDKBxz8psHE4TYFGQLzjb",
  "key40": "2nVfxF7CLybf1uKn9LcLEQsHVZHetWBqW2Eg44HFFvskKJUq52ZB77H9DMAH9J2ex91JgDscTfKcPCcJF6yzANyQ",
  "key41": "5cLrkywaetVnAs9Nk6R1DtnvJPs2M51GBUFLgH9EchkSwsDPHaGtSAAdjz1Lkcd3Bvnqwa9sLGwHPBrTzGg8jYC1",
  "key42": "4M7qjVHbVE3JWerReh7pZ4uRgUupCZY7ByFZp3aJyBQDGiZSnotTneYNCTXwtyTWSNPBqASRERZK5JAu1xd9cqpv",
  "key43": "37jL5uxCkFyR3toQWgswXUJdoxwXbn5FpaQ8kTbF3yre5HvTiXAuQvUX5ZFwQ96dRNrdhm2pjVNsAjoU4aEipam1"
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
