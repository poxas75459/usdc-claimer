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
    "2HGJ7nvivgms5RbvvRzcdagePtzWCZEUMVy7D6qk1vYBTLzSx3DSpPv4MDrnL4YPQSHachWNja8AWkDFvpodyaKJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ryScyuj8FTyDztgUSGsNSRkjRFowgCLjueChZcmWcNvo6VWvzn9FR7k5BqeugkqzSze7aPYr9C9JnwGJdW1RYue",
  "key1": "5Ks5ceGrvpBXXbsR3E3p2gwQcCKTp37tG6jWRj4rjaZBATQbNrq3LUZNBrNMaABz6GrJed2NsqdqxrFq8CA6tdUN",
  "key2": "3jhBS8XjSs2kSwk3K5ssFjs25eFq8c8vq3WqBBp45FVHu7T3wfpe2sVUeCLz98eDvMVBfEUwrLe9SoBFhwGqAUCM",
  "key3": "2hK24rfHrzrSmfFCPjdet6iHGa3VSC4ahziuCVbTrjCyokVpLEpg5qmEtjwsjk6LRFFkf8QMK7u3ujKrHSzM8ssz",
  "key4": "53s7pJ9mmL1ssJV7AHnLx6v5w9jWaVTDo45mSDRREAZNyGM5y8Y3wnXHh4gbWbc2hewGLvrDcZR8ueXQjkgnZgsv",
  "key5": "56HuZGfmb3BkVeVCZyuByZj27u1FEk3PhU8p9NgaLiy2Hn3n8TrBrASkiXFH2HeZpx2335tUHEfZB7eqtQ1TxGff",
  "key6": "5UrbvMrM7kBVmdQrHfEcaREhzXv2Cfx6zbnS8mWcebsYAYShzT7acaZtFdtc6B1X2rzEVTnrDmCNasSgWgYxSQDb",
  "key7": "4kGp7NyaHBjb3u6KJCmMB94FvdVrs1LS5sZsGYziSX1QEkTJLwSvQWDGFYCbyDqNLjaN91x7iQN8vr71RvHEMrAz",
  "key8": "SnvCXwy1kfbNUJBkUAUxyqhUBYnc4GE3XJ56ZJa7AC5cYXK7m62KrwaFTskrRxRP9qTAX7HRjbpoxEY4vzNkrq6",
  "key9": "55Qx8ctqzbEXqUaYUB2RyVxaV7xwsq83CDxBbzD5pmr8AEFb1uhsmoyDGcHH9DfAD5QiAi9GF8AanfLkpmd2Mr1E",
  "key10": "eHc44BXMWCa37Ne3caDUfgBV3hokMsCDCJL77sGFnhbFMe4mBknv2sZ5Y6g6WwK2kSm2T5y9PfayJo24u8SXrYY",
  "key11": "64rSCkCerFiFUB1QVuFTU2raaHE749aRzGqXhGVjYkjKqEHHY3wht6GjsVGZz7Ub51J9rJsvr8oA94MbZJYzvGfX",
  "key12": "4EsTe7Gu4xpxcrKaNoZ3pvi1s9eD2veWW9KVT9Z8zwZVUjBCY9ozXH96EaNC5yVxxzEUg2F2dRrLiqYYAmpjmdrP",
  "key13": "4SqKfZ2g5u62TwtfqiqQ5fZ8U3Gf2qhPpUTRGPGY2VJaEk378j8tRhQkZszWKwBJojM12gm6L9RpZ4juapDL7Qcc",
  "key14": "ffkW7ge5UepMHJsn9WtHSUXVJBRJvQpJYRVKZHxULdaT6e3yeqeqyUdb784kZjpkSrG1ARXksFuVBaUztjwe2z8",
  "key15": "5HZzKg5dN8yxuTFXrAcEqJ7GFm3vUJX46RZYP1xaYbHjYG4CU6ZkUCrRA66YgmoyX2XL3PuVEtg47sBGMkhyu2kC",
  "key16": "29VFqJaU4osTUX5WwuH7GR9F7VULCbPMWai2n7wZDodCX4WjDm3GrnPsNeFE5AVfhFjTSLEev32vYJQfku7RxfyX",
  "key17": "4tUGyehYDYBb2VpxF6tHBtKJLDmRoEpGY1UsZSbj9J6UCCBX3UyJEH1m4muk6gVavvVZnLFgVDS14z4SJEK6bar1",
  "key18": "3GRwKbTLhgKNRnDskqRKkKLw1KCzd7FhwFLZssDPF4YoKV6aKwvt5k8aKXSRbEAx7AcsvV6awUGyeWYvxUEzycAC",
  "key19": "2atQh5DbGNbq7HquJSMo6A35ZMaMhnvKBKJHSVAps6Z4J6W45qkg9GhLnZa3JfdebwivHPRKuRpSL9Y4YXJ7vHDn",
  "key20": "oihF67AToZuMo1UVrw41VeH97Jf4XGVZUx5jNDtfce5dW4wGd7k8j27x3XcYp8ruigUwmp1qvw1FYcm5dhcbg4z",
  "key21": "W175GCkh15iXMGbYvnthVKdVa4ihTxciU13xavATaoBqRJMgxLr79QLoSrSPMJU6tXD5AbsTzNNZ5Zcya5rtDre",
  "key22": "38fMZDpEp8P3QiYisR7v57mTmbsbSPpWUQcesSBqnXcPuYMcUgV61f8iBpGFG5Qrv6WFY1y9B7UqQjHjJSEjLJk1",
  "key23": "5qB97a5SEEBeNMQFPAhq8sB9wsR3YJb3REGgn8DvDnuABHkBAUzN8rVv2zXBh9vYY4K9X7Pm7M2xDe1pgzPgzpPc",
  "key24": "5EnHBiJcqzUMH8Zc761y1ERdGeWRCaqw7b7CwxuJTtE5bUhMnnbis7UamdqSkFpwjsQJfb9Bg5R9C7MPDuxy8XRt",
  "key25": "3pB11NUL7whzRdh2PfpN9oATTmUduDh6S4yMDU9ytiGFyWxJeApjbX9GSbLcVVasNvvY3EqagTGtLoHrdHjrPue7",
  "key26": "5RMdhZdDLmVxvr1BDn1HX1BYwUpm5r2bPA2wc37Kwwk14xUTLZsGXpFhqLaKWMLqjbCVtwTWkYXh7m1rPxFDG4Bp",
  "key27": "VdHnPfoDtAKr3ha77cBb6ggUD6kBi64QDfdmwNMqKi4tpGsBhhEjDsLGngJJHeafo1ov99yi68BhRvoER41y31K",
  "key28": "2L532Bbt1Gs99JjfF3fPfuEwCqKaYLuGNsPkXt9j8CQzGqcnXzTvRqXVEsGMPxowXuJ22mBKWkGFJoCSxdfpFCKb",
  "key29": "4XYJxusvQGQHchgnyUARrG8JRR2AxFbtRizb47koyMDgtLDefJF98oVFrLnkHSJn8RE5maD2JBhAmcXu7Tr4zaRo",
  "key30": "4z2JxkhrcytczAqpGWVh77yawF79d3LKT3hpYfQ1CJ5fudJvnxy8opGk1HCTk6dhcyPQJqsZLNryGnbZzBT5GQ7F",
  "key31": "iiLCNF2ng9XuxeZcHaK12mvGfo5bkyJVHcvr9sXBgXB5PgQedCbvEbyb9XYfp7gps48JqAvYpa1mn2RV4UkzjGv",
  "key32": "46WQqpzu29UNpbis5uLqH75j2LLh8roZHdZAPSiv6NZJGsLLpTQLADGZVewDPV6U91BGBTo5YmmUdb13kam8sZKf",
  "key33": "z45jBo9e4QePaQAYYzuoiFjQLp5wKX2F7DA3yvKcCpHXLytoib1dmoQ5vQqCMPx3NNK6b1yQbgNuJ7BPZ1z8QG5",
  "key34": "4oQaBmudDrqjZuwSVG5buf31XhC78BPScch1UVN36EsMetyNEZNUnM9MRsRJm2kQe3WoCmNiPxEDZRBpCPdRTwPz",
  "key35": "4ww5sbQCCzoEpnMqG2MYyPqSCgVTThUSAqvqJ3Q1eKwWkVbNnbZpqkoQHYYk41B8sUwFAYrrgqTiQiT3LWvZdjUx",
  "key36": "kZUhNGPnLEu9whH4Sj2iu3BqoBv71i6kJXKBgE5yod3CzVoBnAufVY2E6VuQ8eoDUVHnvvzbKDEziB4T8Jr5fzN",
  "key37": "2W6Hy8iKjWM9NhgWpP8n8iErDke65rH1XJbetDU3vmc6jXGo6QkxykBP2AAnzXsDRb5kCwhPukNrvd4LwGGyEF21",
  "key38": "FAzZxBTbTpiK43z6gLEJpWGxHfHakH52apv1kVMRUm5kE5k8C3vh9oZn7HKVxAzxXZSLdQFQgEVRbcMH1ubr4ga",
  "key39": "2iPNLYfGYRq88zZke328UCn4uXKXCqphS1s9BsbK8ppY7bY8rHoYENNu9i7seHBtwygpt6Xu2o8Qx5C9pGtgdhPf",
  "key40": "avW6uThABchj51MoULXgoiLr5uEMj8LmLEuyN1gV9Hv5FXNoCuFoZgg1AatSs7dbKA4y49QBCPxKrpxiXQggdon",
  "key41": "275CZm3FyZiTvTDsfp8jdPu21WuiDs5QcnT2QCFTRiURwXqnpvzDh9uCbuVa5LK4gUwqBpRfuS2fF9dyPRBucFoQ",
  "key42": "625PtmcemZhri1ZhrW1vKiXaLs1n7QGKVL99q9QucEn9gZJpH5B4jvJxNHPTyBGBkPrbkBUxvoVGVijcMoHagpn8",
  "key43": "43UMmK16LDjq29E3XVC1sYhqNkaqECSW6UpW8TaPi7STs2NqTYGR1LYxAFWdLYu5MpaD1L7GRBrc3uTqNX1jBeSN",
  "key44": "3bLjGrRpcz9NVzBDLrAAMU4UxUp7oFHHYoudjBDqMFbAGaxZi9hbuFoiCeQuH3iXqCSQpYt9VzQghFt9TBGsaJmb",
  "key45": "4RRuEsMwjcjP63TiWeYoo1ZS2q8unDw8noRUcQVwrDx4FKK8krKMGcnqjrPKuYkqUhiQha5kLNDAmfmFTb7xgGvZ",
  "key46": "4Whc9SpDPMjpntXQLrQJWwUK5J2BJjaM3v6sLaJPEJfemNC6t9PSKtqY3BgrBgZ6b1H8UhywKRg68tPqJZXS2Wk1",
  "key47": "5nY5v5bCMSWEj6CfH4oRppncVXQYdMeYjdcVs9DAECUjQ66JMhcEavY5etB9vH7XC3sg6BdcrmuVxcxhdvdTn1Mi",
  "key48": "33zyzrJyzZbdb2Kb4Rnot1BsUCwibbVNEdiQhMJFLs7PwLfxmXX35fNkS5fzBeb9RtLKH2LV7jmx9NdKUHEhYxeD"
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
