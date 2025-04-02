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
    "2Ke4o2WT2AhgnQRnrFRFeynFjJgnBtZPDwJjjQ6EfN2FerUmT48McySbNdF7emstWZNxUuvER12aLDwqmaGtwWh1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qhm5vXtKpebFDzYDjyiPkwoidKuQnVzB1qPZMFayg5AKeoa1XTkd1ziyGwMTQYhGPP8FuGKrwHQfRErr9PKNgUE",
  "key1": "k6NJwJthCRwJRJA3E2NabT11jgyGa2TDzeURZoQH68B4yje448e9o7HB8RRPYq5quZLPaYQ3DefZpVYT6q2syRR",
  "key2": "3zsU5Esg9pMtDgfSe7k7HueixxP6JXPgWt5FCPdAnPc8q65Y3xutiCrcxX5fz8rXEoRnTowM7cLGx4GNjapGpeSQ",
  "key3": "JELBisuLvx1GaFmW62h3YMrNyxw8eTUazCFLNpg4Z9kewhMF5EhWbCDWiSh5zwSvdNxMKfY6FNxUQ7uCYpZNZzt",
  "key4": "3phD8sei15emcb8nLhVvpdowdLfL4dQgwnSqr8WVQiPUtyHTficEpbuxvUBs6w6ryN7wtjjGdVskWfHkuZeJeEhN",
  "key5": "2PdHmdGuGN2x73W4Svmw42X4bqS6j55fk49BbmyHkeEg91VfkZtzC181MPQGoJtzoo4VECyTn7T2SWSDbqGXBnri",
  "key6": "3WsjCaBNGCqByguffDkPHU2XyD7KMNtybsxGpVcZ5s4QuxV6UenY892h7MgNo7Ui7DqW9N2bZBkw4BEKa1f7q2hG",
  "key7": "3LQEZ2KmUXesKHfBK1fq9V5UXoNMQDbWBWKuTTMg628YbkADVvP4Kvx9p4x9wZG1K2CeDBc83vQpbqZgue4qdr32",
  "key8": "2Weq5yfCas4RhwhkWtiJMFVkV93LEteTLZDBiqv2aBj6Lunso6CW8qLFfwbrU4vjLkAJaNZgh1ruV3NnzVKbSP2m",
  "key9": "2VgjkucuhMiitzECxQQ1bASQCfLqZZ5jsoqJhicjTEqmdKKEG5GCq4nWZ2f2k8ExHBuXKjTg7vKfnRtUYo1bFgC6",
  "key10": "t2vt6CL3131yKxcQqvavtqLoB7RnFKXTTWgSrbWQyNpjW1h652VN242HfNwh8CHonDzXjCBYkaZezBWYxUCk5wo",
  "key11": "5SAeNJjUZ4q6z3FJpYB28ZTeR85CtnCX33GcX6zwVhxrjQPq596bu21CHPQGj1ruFLkqh5rRyG9Dhpf3Bj5uMqWU",
  "key12": "j8eVYg7SHXPpHcjpZ3WccNeGbN2GqaihSLLVRQifaK5MB9ow6BQprXjiMY1ntWNRLdFNiKbDVJHrdJR1CJ1xd94",
  "key13": "1TN6k3ogBkf535BSsvgLKSDVsMgEEWE3zoWSi2KrX3wjEA8eYD6WeNNLaqaaYH6a9nuZcAvnNuzdDzVRcUH4KGs",
  "key14": "7oHm5spGpcoh9kwAHqZbHfet7QT88VrsGwD8H9zQPF5S6B1H5MzT9jAC1DcSDiSQpVuduePHaKJJpMoEYNMWQ5i",
  "key15": "54JzYopf1b3otALgNnTeT7pkvWi4ACG9YXXGjcsPMe3zzdFGiZMrLkfCy3Yix7UQqwEDodhbu5fZJmyNYQKQLUfd",
  "key16": "1QWZb8xndvNd9VTzHm4ntpuEV61xdddNNzeVhbxXE6oGGkmPbaHS1uLcNjmz4EpkmZw66hdBgEExruCFq37NrFz",
  "key17": "5z4jHqWaRAAxnaMwP4DEymcfvSuMMeFuqL7PojPxxFMBry6GWp5jJ92HnQ22R24rdGVPjp8qB7jHyvCjnaMXbN4L",
  "key18": "3eqVgC8k1npDTWC5c6gjc4TUWMfB6pAgkCfefhv4HqoLEquS1nDvc8q2FB2vpSGLbHn84H8t1WUXxQ6LC9QGn9Ln",
  "key19": "4Afqw2b1tNBT3BhRtWceJtJy6BZsioV4AS3VPsUxTLRjgjvrWyURUrmqvGrHa8Atf1RoWgKKEYKPGLarDwiMStFm",
  "key20": "2gNFUrn8jY7hVdGij9LXe3Zv3rGcXD27oYjSGAa7FZmhDZUsrZGQoZrwqrqvKS1ojELVwV5t3wk4w6gcbWe4GVhM",
  "key21": "5qdQUQxCXvgEGaWixAzRXFk4QfXBJ9hhVF9mAiGZcasexvbXmaKzAHF3xjRa9QoNRVspsvgeLCxaBMZts3FNmrzh",
  "key22": "xhtagciGvyREXgFX2B6g7CcsyaoNgLVtua9AHcGNx9JQxiddo4JtaxSN5pw8MMWgRGaBU5dop1jt2Lm8fvdM7gC",
  "key23": "3oZi1vGQuqkSZE57bbp6MhqNZwbMVgQ9oJcgRYgHiHzLgCyd7M1Sk8M6uT3XRMBG52m43mq46pwtgtWddgCpXMYF",
  "key24": "3bgaesBAtkWbd54n7Dkf16ZYTE5vXyqGF1S7hprY9wVVPaErmDJ7gS4eWEsWHzWj2epUWuEBHtwajgdxWuw6YQCk",
  "key25": "GqTuXPT86eLEQh57ASun2dQAG2EDSNx2ErVtLfaFQWC7qMRK94W2gr3RbqqqwCn1KKRkvVbNjcgjTLhVc1zPLNv",
  "key26": "56yyXH4ybdov8EvH8JnUM62LNMn5TmYCAc3kFyMu2qk1M5hdZUbLuAJHvMrnPdZrmZ6S4SMsYcocsy2kcnEif7Gu",
  "key27": "2Rq6Ye47TqZyDVvXXpN3dtdNjpf5t5jukebEGX5mDpBKsBc8sk8vC33fMghC6r5x4qJLAg5m6MYRVD7Nm1S5tRkB",
  "key28": "23ADUi4UGcPNuKim3Vk5adV2xv2Aq43jAhd1ZnGw1fi9iuGVUM5k1V6tiYhyqWjxv6FFiWEBBpYBbgqbQRqjXdCY",
  "key29": "33UE34Difn844H6nBcmxWEkbpHa76DgAcyVFiKuAft7f7DSUzQsc3iMUGEw7FsssngovQoXd88MQZAB1rfjgQdAL",
  "key30": "2YuVRBezL6L6c8ECGrKHpqYhsjCaoA5tG1yqZW4g8CWp8RcRPfsrVS8BQ1Xj68GqsELM5sJEimpGyCsa6aq5FMpf",
  "key31": "2xZ97EYkMgG6chVBnTb4ExemBWsQ2QXEMUyvLV45sZBYMEBtjaDE6NZRgEUapvxEbNTghgrSZCPbGDQ4wDysNRmf",
  "key32": "5Lfeg3tPrdVVm6SqjgJPaXaP3WpVM8RgQtUUHEPVwtfPy8haBsETrtoNwHwqAZUtwfB8yzNw6Epm5aLdgNp7cQdP",
  "key33": "vrP8xNVFRoHijxoyvxYEWNXWYCeWdN5RtaPgte1zBTbCNQ4oQC5FHSVpXGTgwZdz14k6hCiXEfWktURBN9LKQid",
  "key34": "3scYEXFCCRtBf4sVYk9zTmKeszxCBGZ4QQwa437r2oF7YBS2EPftTehL7755Pd7KrEf7XwaPs2Kwbeuvw91gU4pq",
  "key35": "4dMqK6pzr6mDBm2sAGHnDW6YkQA2yvwBdH4GG5zm7qJbAtm1c5qAf4ZQWuPMd3h2WVu19DpqPoRXDrTvJYK2hBr9",
  "key36": "5PuPVbGhNjsWgfKq78t9wvSbh5gcq8ubAqKfhAM4UcfnMdgGSY45vDs5rTNd2FjtEwwcXRHxDxnoBLuEDEutJoRE",
  "key37": "3swJboq9aTZmLRM7PJKbtNrpNANX3tVyzgVb4GfYAiytn16BHae3T8ogvbvrSNFkBpKiUkH7c1rTWrq46WPLC7mA",
  "key38": "27PVYmVQ2KasniMDSjMtDauo4BXsd3TxxB1HU3SRaLGY3h3ib27m13usUSHQvL8iUjwEJWWJPwAEgqai4oQCXmJD",
  "key39": "2QxLWxKuFRPrJ4Tm1AXhZkLzygqAESipmpLrhwCTTqV7Ci8nCxDu2XwsBMeNipJREgXpgCsrTEdgMJ8DfCwCN3Kz",
  "key40": "2fDmNoKSLR26Ztht8MeRN9KgsJ3vUmJ4uQ5arF6BJnJpdWH2rsLgeCFhacoydPU4bALzZ6BMeBSKaSB5oEN8kfWu",
  "key41": "5Gia9jSXrrTWezsFc7CrWEP7DdT1C2NgKnPZ7xrGFj4xJyduQD3p9zpUgY7jsSkYhhMGTQ4xNyESBQmhUgeSZisS",
  "key42": "2WxpcJDEWpzKrREcjhNo6HXLK2TDz5kCGJKiHbiW6KTa46TFMJwLWBN2JjwQgxGBf6i98fStcQhB4HPA4RY6zisJ",
  "key43": "2tvH21sge8Huq1vmLX7RpQz1krBeKMDamhxCXHCimNJeAdFeKtbkVt7gvGshoa5sHA96wMwPXSLx6Rh193koRrVW"
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
