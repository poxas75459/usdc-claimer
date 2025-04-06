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
    "62FVfEzxuaZrZUb39XhDD6iBbKt8rS4UwmQpXffdj5Kva9HN3pR12NQi6W9kjFYTmsuX6B18XCKmEL4sAis4gbYP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mrHxAXDC65MF36LCPR8YDtYCA2Hd7qQXvGhhq64up4xiJG8c5F1mQFzcWLhG2iHPAN97qMfA2hZjmJ6R34S2Ty",
  "key1": "3YG2tMyULG1YTVnvcNpbQ9Qn43VjHWJ1znKzJMbdToGqeTV3udnv8JJy1U9bSX5wzM21QCtxUpzciGzKGuqSHiHs",
  "key2": "g5Y12veWauS952w8sXKPGiP4PnH4S9L1rvyUGBX85nGJcbsXHGif6xkkALNkFYXwhDxRjcRQsiLwpwz8WDUXwbF",
  "key3": "2ZgGpstSXsd6aEatpt3ygdwH5R4yYH5XifrPespXX5rd9gvzYfCNEPXzaMr8TwmEaQT8dZsab6deYZttaKp3xCBC",
  "key4": "2xzvSGyPDsmyDcvb1JvdZLWZQ2N6wR6vaj2EMMqFtAcFRQWd8MPyiZH7cBBT7gtEsgwbbpnKnRdD3hdmmorP7oGh",
  "key5": "4gpXk2rHV2SQxZNU4XCbtSiK6SpUcKxVbudDTvEuFNSj8MJ3JBKsLbsxdV64azYa1rWbMPFUBMZXfyTnRvucCLGt",
  "key6": "5SkdUVqefpQ4LMTTjgPg9VTnggbzkDkuMZEGcpsciPsaGV98AmvvMf11sVpTEzZew5iNoEg8NBRhuPhafxGx8QHk",
  "key7": "24Ki5nQWGdNMmuhd7cGq3UxNuuQPCDrbyqXRmZF4XJzQ4Hqk69PHuyqvbch1MPafuAbRCssUUsmNL8SL7Ezep5Uh",
  "key8": "3mccB5w3qA5yK1Lvu55f5brPbRNVd7pr3MjvxomUg5fGvajS1yBnzASoPNz6esegRAZv3mCFuNFRUicEAehTbsrL",
  "key9": "3KzAZyuifvAeq3LQevq12RCoEAGBsw3rFdXkwGX3gZ7PR5jF2jHaQg5iZU7CtxGqfob8w83Bjz1zdPGJdT4xmywG",
  "key10": "4xFGwHk9PMuvh8Tu5rSPxAqCZ84bRBmfyVJ8UJZixDgsfZmM8jnPGfKwqd8CBfF5ujKKPipLa4iTRhzifpbF2sPA",
  "key11": "oDKABa4fqLGUCwdBaS5TUL2sL9fTArc4iterhfJkZNvvbwtUJavQ6ATfXTo3B32zu12TvUjPDFcALro4YTLUm4R",
  "key12": "5bsy95Fou147PYonwnraTdumxLcUVkT91DiQZzU5gLjVqRfagmcZsiaJWjocSM7EMesoNoZQajX371UzrBnB2PFE",
  "key13": "SqZDiQw3G8xTtuHgzafpRGCcYSc6b1dBdVJfk5nK66Kg8ZjfDQs4aiMniSKjpfjwTqz1dZWsvFerxz9dS7bnQVG",
  "key14": "4W9ntcUGDvgXtRLEv9VF9axQGtF8ZbF1kQDGeh6HhduRpsLuxPjnZkbLvvMYEbbkigCX49umnec9kLZVS2txaq1w",
  "key15": "4db6aDbdxTPwHDwwkRPE6GZNJjq94ChbD7XRrMDJKy7o3BcniRiRMr772bxE1QV3YTj1nTZ1wGJN5y3DyzHQfjPN",
  "key16": "5rxQzjXuCuPF3xqY46AoREqh1LNZDezmyd2wUhUjRq1oDZoxgRG1C15guf8E5kfGashgzRasxH7SixSEkprxm1Na",
  "key17": "47bQMF4G7pkUT8X9ytvSBP6VnsEArMsXsADkqzJXZJSLqieMt4KZG34CPSPCbSgAvCB4fESes3AefpadTqCXkvAa",
  "key18": "3XiiFuTY3LarWvNB9xg6mkTqvG5TXWKY8KGpYep1oZ5Afj5ivHzNZn98ZSqq9NR9rqVM2iWMxjbYyJTHedCecXp5",
  "key19": "3PAbmmAMUqGymBYUCettsTYJGnZGFgxjpt3u163NZ9ew7fbKtV18BF7KZEwQpGBM3G4zagsDwLLT3WUn5212DmLU",
  "key20": "4DtHBSQ7YCdS9R3BZCTg6JPGFGaDMHrPsctwmfgPDThxFLMPkwBz4quZd9Vzjudjsagr85DQy1UKZxLFr9p547EA",
  "key21": "2vDdnsq1bF4DS1X9N5gAB2eucth6aCDnZaD4AhnHBeEdY98pFZbWAVjq8m883dA3YhwHfkqQL8YPyLLpECXhKd8z",
  "key22": "5T5iJgqa2BUABiqSbeEKhzJo6Cgf3QnQKFEL7QoSvMZKnWgracMnJdRmq4GLftTBkfEGCBcDACJ5YAHRWbnD3n5y",
  "key23": "2FzAxC3RmFDBxEMTE7pvSokC164HSeCg8SPbv2gpX14GHhKNR8stGNo2BTC2q8FwVxjRANpmMH6J9PooAGHq5pCy",
  "key24": "269D6DbCegjE3FmKwBdvkossoYKEqFTzbeLyZYJgJ8A5u5LWk2B8urssbeduScv3QPRzWVzwavwpB52nnAoPZKUh",
  "key25": "4X7uZPkjorQvTn3qvAubhpoHk7eX5vyyuVQVMyTbv2imeyJAevubPbnCxw46mHXnfam3Dcg2vqvJWohAocj4T87e",
  "key26": "4hBMzkdBi5ZEVydCSPfW4g7NcAkAKe4UbqXFvASqscHTV7Hj36iMML1K3dMkFe5QkrXLBC8gEStqnN9NJCR8Mf61",
  "key27": "61CgtK6CFA7xL2Rh4S3WE9wtRWZs8YMR7S8eeBqvoGaXRYxdtE96yfiqCte3W1CrtJc7aTHNTYNJbyHHqcsz2Uo6",
  "key28": "28SuVk9YTaNs6bQq7txskcvMLC2AGkR7GYNc3Hshzn54MLhqKh7ZhECVihUHYe37jYc9sZzx7KrJZsR1pLRF9eJa",
  "key29": "3yrMsrTYyRyKwyJYYx6D42EBrVy4oGSQxVYzcRAu5h5DwdzSQ6TaiBnYJMPu6dDKepC7o63u4LP2hMzH6V2GPATm",
  "key30": "2yuLHaDdTVpuWYDLnTeRBp99ffqaGMKCL5mbTKNYSHwTjoeY8qLdwTtV9azh6dqwid3kpESrkGU7PpCx7E9VaJf6",
  "key31": "2kKB3awCmabvYZMc99JDvXQ7dfPHvLLmhYEqVVsMRjdrdFLuvkos2tz3Sm6F3VrU6hMBVF422J1kZ4VGuio28e9B",
  "key32": "2N9gGzR8is4mgtdCd1XenEHZakMZD8ejPQgZYcgdVvGezVQiTtUXyfbBo2a9Nhj8xPCLC11fbPwu65rBoSYYsR7u"
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
