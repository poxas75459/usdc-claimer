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
    "2jE8VtbCU9tBCGW1axowRb7mrSPScn4ZGixtUCfwMs3JHDim23NBYcVbVquezK6vDS4MorrcDvSEPMoQ6iZxorq1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XdiGtvAyNMGGJbB2JskegVF28STQiyYi3LdGJBtQbbNwakVUWAHRwGEJQD1smN9YhX9qa4Z48z5DSGGS4b3fidL",
  "key1": "5XtF1A4HDszmNeEhUjE89dtZZ1QwZDM2fxJxnYTuR1yRy8AJiYED8p7yHqbpT3edb1gdYfMRh1LS3wkYRRFMR4cG",
  "key2": "J6JPgPtdeUhy7Y5wee7g2YTc4WFpi87ZKXxfXP98ZDFCJPstYkGR2uDK7Ka4GqhkZjgWQsmY5mykTnycVdWUjuK",
  "key3": "22dKMoeBEizQAtTSopvAo18ZT8xoqkA3YjT1rVQvzaUo48WcvEVPEg5fHAUzeeh1W74aoYhCH8PrTXQEFLUyTjtd",
  "key4": "57a2KY5ecZV9NG9JfCdfpGn5us3uAqtvgQKZN9S9EqoXWqeMbN2ZCvKAX3xrnSiiuySyBm9ahZzV9TdMX94jBFuz",
  "key5": "5LKDiXR9p1Wsu3bhGWyveAQquv1Qj5pNZ86ChoBQucQpDHsUvX5s5CsvaxkDrfyGUfs8wccuqu1xs2sXGvfmAmjb",
  "key6": "2p8B8K4W5wBqGWNvh9Fve6PEhS5fL5sWfwKenB9cdCtHcrz9TxsY7brmZSYjRSb6qmoBqM99gnxQ8hprHRHox8gV",
  "key7": "67gwfbsomBc23NnT1q2rCKPsPebYbYfmNxWimHQVwSR89A3viySd42XEPSZmYTmiBP644QvJiQFpMNAAc7bzWQ5A",
  "key8": "2fjF2uTjD4qCm9REmfLcJuw6yE6Q94pbBzFF7bQGaCCbfihXD6ein2qse7DshPDN4iwHZcVqWbUvnPiKgYnJGBgH",
  "key9": "5pmWd5VWi3UwkNiWYzYy389oG8s2Nvbi4ZKFkoAGFGZj7cJbnWVbBYuN2ytN4AzZcVMGMUQBDDLNRnbVEqSLqEFG",
  "key10": "4r7AhqCH1gFaZkrukUwUeJA7YEU6NMwYjH3yGpTdfmB6TrG8qWU95XeLexgSJxrD52EKt7W5XVx9wbT6cQbeFhs",
  "key11": "4jCp1qmDdhGw6WSpNsod4Cg7edY6VG9HixJZunQckPV3yvBKCkgUahBzVg9hHoepfKS7pwJMpxcw47Cidt1fKfWY",
  "key12": "3VZGauhsbzqXrxT2mUPGWjyqcHh3g5WTQD3BCco8NQKyzdGc8sxLjVueeQ3WMMdbm2y6iwi2HJTkzicwEPrdDdFq",
  "key13": "4Y4cZfkeQ4ASco1a4epdYD1eRKAYe7pLVrtSYtKLak6SsTi56DFw35uU1ysca5X7F4rCpLKDL3stEEuEjYftwotU",
  "key14": "3D7K6toBXJSqVM4XhntD1mFY2mknBBfdMEiUEmMwY33sASzu411ZUdcD8s4Rj45eiViDu42DkwWWuoaoyVybUWeL",
  "key15": "2muRBMJ6mb8HNCUpr1vSqjpx9DaTwXzzH3X2E3u6F6aXzJ2yWdYTvk42Puxkqq2GEC8KeKKPR7o4KPkGyy9Fkioc",
  "key16": "3yZAdszuxuZe2sot4BqsoWKTJow7VfT6mvkeezgY9HWqQLJM7hrCMdbTN1Ce5AAT2uaVHQ8jydEtMfAmUgTLDFAv",
  "key17": "ewV1TSqWig2KshyfwAuCqXi7KmyWMevxx8GyoF2h5VMdFHHNqzSNZCrghLAupxZcTPYTuPKUrDGwwcn7yCX1WuX",
  "key18": "2dx8nkCxhCrzNidCAtgRBqrrhQBsweJ99hAr2PG6iGkeuM7RUB2K6Kh6Aws11YFThECJ1e85qNJ8AUGj4R57wBm",
  "key19": "wyzjKghEMyYU8xRWcu6vCM47zrPiF4YLnJek2ttqngo98gkP8LEXgWTwQD1YCEf914p4M8KEyss12DYz1nN7aWW",
  "key20": "3k65rCS5pMJHBpiGSRKuRbf7T3n23bkjmCGozt8pRgfguBvqnHDQVxZeT1SKHSqtatGd5rQWRwHtEuiuciL116G6",
  "key21": "S5F2n2HsQqbRhkooUNxbeTwvciHmdnUZXcUKHT6Wxr3k84xNTx9qTiAbLRUG3Sgd1yBaCFxX7D6GdKf4THhhk7n",
  "key22": "3RBpT3x7z4DNuqgUChYcZxjW64Hf7rHESgsds3iYrWhzEVipW1hQ19UKEmzf11EfhWrd4ux4jRMsZ5dFmY49W3YQ",
  "key23": "3BQC6KNbKkSS5Ls9FgK2qVqXiUeBnhW7FZrHp2bxXVY8EmHChX3ZTuvEJXJZgxUq3YGn26TUpHvYhgxbC7WX5VPD",
  "key24": "5R5PP1q1tA2eQ6kmg69P6RmbNHHVyvDp2khCfoxTdJDCFiFWfRoaKcDdRP4oaQh24nC9Qib8z2awBXMeAfk6erhc",
  "key25": "47dW4APTzdonXsLrnR17GSMbvFK6GuFXVzqU4YeMr1EGPrY4B4bkrrfjtp8x3eLECrFiiMPqbsA3rWRuBrj8ccPw",
  "key26": "3sGiZkTm5agiHKXwtj9Q8pH4t5RbwHDkLbcrqtCcXnFAPZEDtoRDYXQx3DGPnH949G33LLTb68poZYzYuysW8YTB",
  "key27": "59XkLZMLxM2Q2oHmThYtiLKUGjNSCrzFEovE9y1Ktwq2w8tgy8vqWhpZKCvtFN5AvrgacYAGThasUnMNZ812MtQH",
  "key28": "5xLwZ9bHMyiEEYL2q7wCaN5u7SW22bn2BhFMfVz4kaxLKyZ3pQmQUZeccxfgzYDYR7dquXrDNDJ7HA9fVNxYLYPd",
  "key29": "4B6jKStQKQm6QPXyd1zPYgBmPMKYp6Zsed5uyctd38trHAXjQ3zRDUfmCPXQwXC2NrrMYkZjMNfhLEvAumQ3KnQQ",
  "key30": "25WDw5a7jiiPB7nmXCJJcHo5LFRtuqk3BZjt8975eNRwvK811eFFnRVMnUBaumAz78GN9cXNoYXzxnvxMASo2gro",
  "key31": "5BJVSZ97P4m62uCv52dH1izzG8yfXLFD2zJTv3nxxLjTfHCmFyYufkeErdLMS5eoYdQdGnk3Q73NT3TXU5gaP1tV",
  "key32": "5Q9JbMtsj65EzH9Tb3AaPksYmoEihY59QkPjFPWMXTcQKwy6JJWJZ7k69gkJxFRa5HCZyW7EtQmxgjvYEEz8168J"
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
