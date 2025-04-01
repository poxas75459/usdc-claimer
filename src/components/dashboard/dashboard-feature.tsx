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
    "2Yjg9Aoiz9jJBx8p8Fdkjgcw1efhmpe1HwAQNRYSXuqFAiz7hFM2nQXqpAcCkpo5gqgWuHyr2hsA6TbkpzU5B63D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29TWtDsVeDuGZQCm1dJkyZWBfi4LvYp6aTqmKrkAWkWVjmYXfZTiKoNFmUgyicmkJedYFM9FoKckSbqCEtkcTUoB",
  "key1": "2ayjoci5XnFSwvmuUgDFQMyyvsgq2sqhTaRGDBBAL8syhsjmCG9AnEHkfn8C3fnVW6n8W6u3a9TXmRXqAZLmPmAR",
  "key2": "3EGXaoAUdNFPf1xfXbSDEywZha2sCEvbRshU1EgMd5NBzjf9N89AuziN57JYrsdwKbsorLrN1WbqD81ckU1NKD5r",
  "key3": "2H3AXZpLuk9M5TyHKeFSDtFsNC97wN5hh3ecngDJm9Duv5AuWhHibnm4YDySWEVUb1bY6KjK3b27Eaq3c69iqCQB",
  "key4": "57aPHdNybcSRFJqVsw8k4cSSGAzMWw8emaxJzAk4rw2YMsX4VQ5eaQBnDYsjqrpEDJ6cN6hY1sz7K44K5UhjxMJD",
  "key5": "3VsoHgN5QriGrFaWzjZMcgGVM6tvgFZuQSCc23HTbLwtvFNw4zzTjnRFk2FKAJbB9W1pa3DRpibQkpEnkE4eAWLv",
  "key6": "2Ud1wK5cocurQ3xePau5RTHQMbsXMGzdf6qW3Umsz8vWRdkUdfgAdC9ZrJi8iCtTYheP155ow7enm6B1qCqeGXiZ",
  "key7": "3Zvy4qXMfDf3CQaog8R1xTKrxjnta84YW1XgJVHJL9tBVwwwNsNFWmaWkboUx99YBtSJfZKes2MpKQkrHrsfuGfA",
  "key8": "2127uMh7uJ6W1UxJTy8HnTpmawfnN4Z4ddCu5F9GAVbCv5hKLkcWpWj3DCT1ka5fmn5U68Z5avcvyny12HGczW5L",
  "key9": "TBq19B68GKSrKQSksAQSbfMdt38jACn3feNykCzNnXRkPnA5CZo2oviCcES6CQS2gbjMUj8G1YeZkBSKF9618Sk",
  "key10": "2vGrbBCKCYv3VH1ychqww7SqaR2UhLKGqNpuE8hTv9DpXW65nnPn96XobuftoBSyY2rYCKj9dRs1yoNpJzRw6jK",
  "key11": "3zKY94BfiEz3C9jMGkXkjxCyEmADnsgsQcmoKd94PVqbx22xuoNi6Wx97m8Vuh2gjqPGiMeN4VBqjvfPh5L7fSS7",
  "key12": "ed9o9wJLvEj9tczUpBYNi3bDRu4uKaY2VDiAEuVenG2bvpPoupYhp8yr5GC4Zsyyw1R5mx5qmD67woCH1ksnw7w",
  "key13": "4vFXDxBQYzYuD7oVGbkMpRX5D8UcFk1Q57H26o8rpQ9E1KCatzpUU58gYLoo5y5vf7LMmmhqToS3hTvWiVUYfzho",
  "key14": "3aJM5VAkBaZMMduZcFWBVgpS6mKqiFoVGvPRKDxopmk5u1K7hvaJ16Q6P26dsVAkPXmwWimfizfZGUA6xCWCR9Hk",
  "key15": "5U2Tx8o6grduf2E8M6GtPPCdQ12mhKBfkGKuwM87T1i5dNB1C1aA7auws7KyEiDFozixZhquUf8bLqP6NvN3wWDS",
  "key16": "3Fpvgv73aV2G2UzdtZnc1uFr3NEaSn8dDxjy6CpjidUs1U5is9v7btLfguw1YEipSWvsYKvSoZgookT46SPGCTAs",
  "key17": "4nuugt4X7ZZ5a8SSNuGzV6CSi3os3YJM2EHbvbbBS5q4LSJAHc8SKbEcesTkLFoPEfFCBRD4sKvJGSW7p3kPMWvy",
  "key18": "2pYmGSt3EvGN68pHNwR1qsj5gzCG6zZHr5gjnsAZte21UVK8W4FggG5LG1e7t83xhUBK8HKpyUfsB2uCtJcG2mvX",
  "key19": "5td4vjBYHkGwn3PGi1Cgd4Lqws8uaDxZwJnGZTHZuMacK6RJQiZiJgVVe85Cwj4UbkHbCDtWjTptZKJB9UV24ikp",
  "key20": "4jcLGcanaD4fcJD4o1XWiNbQQLgWgwUjzNNeBXxDLK7h7XRH1Tyvxgo6ZXxkdbGpdcMhbiVdxFzQr6xnkwxRSVKn",
  "key21": "3P1FXCWagVMVrmxG21p4v4FnG6UE2NfREfvbpsdpa2518rPpTwPBskHuASCedKDyy7aqMDYtnpkLB5h9o86eseay",
  "key22": "w8e1UxDj4BnLTnmPGtbyWWhtwERD53kWrM3ghV3kZ7eQhCxtY8eLacpBdzakaap6j2rcwCQ5YBVLZkpi4kV3kJP",
  "key23": "YrFmUmSmZwrMTn9BWXjJca3WnLai957csYet9CngFX4jCpv4yicDE8jc6tkJDLiNSqWWnzjZ39Rd8sYoURFiWP2",
  "key24": "3BD1NbpyvjsBW7jXede2VXdNKCYrweFWWb6Yc918vq9fj38UL6hLQUCbgutnrG2efHZgoGWFdLNhbmWVb4Wttfqh",
  "key25": "4B3WzLn6ExTpoaRWnmBy2safc9HXejnFed2VvBfKUJs8TZWwSeTSbNo53pFsSjogtubBQe1f9XvCSdxscTwMfR5R",
  "key26": "4qx7USj2vvtSseJ8fMnWh3dD9wr2R9mvWF1B73PYqY7ki26rDfV9vqoAAS7tB7YHUKVoutVeHLnBqof4TfjvGo1d",
  "key27": "33vSXWFs8MH2fUx2Bga2oi8vrmbVRtyGQkDgKLy2Kbn4Q8MM9s34Jq4rs6bhKHscnGyJRJp3d2AhBfp5raUph4YU",
  "key28": "yhgmWkTvk6cWRtjjwTKez5wXT6FZCb3GbDXprR9NVS1VVk1ZjoxDyi2Xurc2ZiKgoyJ3Wr1KEfdh3Wp1ykW1j9j"
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
