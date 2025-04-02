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
    "bgHgLDXQzaHnk1YRiNeGoCQgodXDUPDKGdRiLHEtWmNWsnDdAtdSpiRLhuHmsFJtGPtVf6Dbbr8B2j2tBEYbqwj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3acSg5VXaqcJngtQK3YU4VX6ELLTJCQQAVkXkGtjk3wb97XWB8ze4xzyTToN9MBNEsbBRA6WZbSPjP68AdAojbKb",
  "key1": "2tsyHerYSB9MMecR9kMqtdggJuCeNBHmdxBc8iPZGEJHR4Sj1vy1ZYeYKkSMK6FoMrBzF8x8YodwiBZ7SbBur1kz",
  "key2": "5PPiyWRiyTQm7EqaYA7R9VvG4FSQ4J2CrRFhoWiQtNV1DyUg7Nnzv2tjNPs3A3C4UMvNfr7heyKiUbDRFMSVJBpm",
  "key3": "5R7AyFYMokNErUqrUz74JHzpP2h7Z61SQJB6ZvjDg3tmCAYAVNcpLADA6qD3PXthLad1zqEi4hDdCZKEKR1HSi6n",
  "key4": "FqJcdTTaES1QaD3yB32RC9uLZ7AwQV5GiCjxGwN9PxeWqG6k8UbouYcP3LApPiPxqxv15hdKeNzf32D6oHnx3ci",
  "key5": "3aQVpzA337Dz8j5LLizW22ZPQ5aiPdBR6k6Qa5kohaV3W24LGM61ifJCNM98ugr7QUqmN4WbVArdEXBoc2h4AQ9C",
  "key6": "5ec3F1qUnMDpB4NrKimE3rVNG7hMe9aTFY6AM5ePm4tQ8AcCXXUQ4aMJju9cEhXevE5kSJFEaN1fbkHFKK2iSAtC",
  "key7": "38hZBoMeXZdSmsK5SwLyuMjEgXQin6q29Dq38r1va5gN9F3VmprZevFFxYrkDqYh6XkbBNvGZFWFEdRf3LMhXEGB",
  "key8": "23p8YnPPMKdzYdhpZNo1VyucpACeEGsK28cmnaDr5tJZDLQQjbtoqLetm6sFLQNQ8m7VYgR5cqzgBSWr6cyh36XG",
  "key9": "4AQiqnE1TEi7vuKsqXnPUwHhGmBftm26XYuNuzPihvLvcT3Shr6XsQiWk3dUpByx2k9npjUUZ99MRRxG6edH1Tsx",
  "key10": "5M6BFj3Ta5w9ay2jj7TNWUCZPbaXJwYjJ4LGuVKhJUs3392GT3ZJzuFraqVfXr767erddgd5ZYcohoAykCWCyDEk",
  "key11": "4MRtrennRcTDcWf2xp3CSF6n48f5caQQiNU4Hwv9pKD4T9hpT3C5akUHYTvwwJMXtH33YMgtHQTD25mtdCj4w1qA",
  "key12": "3gXUNEpLKqaKh5h33QU3KehEhXtEUgYV4x3AbGBzmstkHn2PpDQd75Kmd7LrnJixG8d3VscQ7pTF7WBpHmmKR4vg",
  "key13": "3eVV6SRQGbegatGeNUFsBCbBL8s87pmnzcQQ9PzUQT1cosziWcUrf7mUDCMSSZ1qE9Tt8HNBSyF6haq84TL6v7ZB",
  "key14": "4JLsoXacWyjqqMfJKrqZXgypCH3nkHUJrARoXVdj8U8tC1WWij4bQekFaWosihpQQDdLQoL2Ha8hHM3MKY8SrgbS",
  "key15": "3x1fTHFW5srVvGcYqa9fYNF39ZQxYjpd9h8tNSGAVW48xzULg7mWKRp342jYSuiY3qjGAmXLdPNNUCY5SFCXvgid",
  "key16": "5xGeuWXZWvxMHg2yFBHS5TJnNBrXuzvdZ6Mg8CvhjyQq94ARqFJT43CS5bX9YYaDaPFc9TwhBqugGCYHDWAM5duN",
  "key17": "5qSAN47Zyc1op2ovdR8ky68NM6WFDgaeKXoAkUPazdj78K2CB5gkQTwMGAwXNTcNPXdiETkhbom2wZyvNdQvVHGs",
  "key18": "37TLH2s7cyMuhEEVKs9QnUAv6LVSKkDSKQDdzvzS8PCHr2DDYgPFgpWen8DSgQTyc5CZyMrNM7RvfVbccBsLZvRZ",
  "key19": "3Nds7i7ZD57N4Lj1ow3jDTR8eHaFByRrridggZKbpDgWXu6z2CxekMtFKRf47xcf6X9ccpnrmn8Y4q9zfjZzdFR6",
  "key20": "5AyEr87SvSk2FW1MH8x65EQXp4EF8Hq9Niej2WwNonBmj2EvS5q6XLyiRWJDTYwRW4ZPpwB4uPMViFnMmSAzJane",
  "key21": "5CoR6VQ6UVfDuG4n73wD7WScmyRGWj1XqT1L2CdF48JEmiTW6ANR5R3boHE6LsQvyuJK168LNGUujzNJi3ZWXiEf",
  "key22": "3DCasYqSFfNi8A2CVjd3f2rgRKbg7rJSFnVcrHjpTqywG8QziNEZpk6TcgBbeXAwkSqXKWajnPJZVfMif99YnCAE",
  "key23": "2V5uCzvtM4gQaKWmDqTUYFTsTjwBuNe67Mmro4mTwEFhABjWQRQmaVVHwULa8XtT2yC6aD3VfmUZi4A51tEPyWqD",
  "key24": "2vGQrDtLoxYHA5KEbc8kLfqDKtMDXUndbykopWyZcY5EijJXjUdyN7BGsU7745Zb9maz3RhtGfbEC6JDb7z8fpRS",
  "key25": "TtHN36pikLWM1ke9eXFnZNQaKJ8e7jHEjGz7hv5QSc7oryS4DG4GYwFWb4g5SykLAiS9okncSectjAXfrR1ByXu",
  "key26": "4M6ShZaF9SHFFvkfQrdGrbCkxUUSDPveRJgWNuDBpq9SkYK1KebxmHBiVqbnkoJhWNn9gpcjMHNBZjJgBsvZjGEZ",
  "key27": "63Sg3eGdy7KgwMFMYiqvgaEqkeG2hzqYqrqiQh5s8qyD8usRCtHbNrLUcHrQYbSb45hTtcKYTKH4QDyteMdt7KaK",
  "key28": "3Q5BRUQg5C7pRM2U8wt1o2zLkQqPAGN6bTzTniVUjT3MziNKLihe45QSeGcmD3Ntp7AnA188ngMMADkEur18CNY",
  "key29": "3MwE26Ss1n2nLchuYX5QT9FJfhXxpLKjKMn6dwkyFLMav91r6vnBvFJMzACy1xVfGawVNQ5bYedqbDSkEyPYUSxF",
  "key30": "3HfPKVeQMdSECs5UaRCb8QsMFh4A6Wu35JDr4y6HJ49SFBK55TNHEE4M9pjqE1oXgeMcr2LpHvtWBHBaZjRRhAPx",
  "key31": "5JKRpWR8ZFrZmbTMbR3qJzyqQ3uL5AUiuuSmRpqWmvxg8bY7LaerMvH3ZMnugFPgUVGemyN8fmiDUDYkBE36pp7w",
  "key32": "2HCEFEAzu8uiDrsLFxVWcEsQ4hwRM6V6zLz5kX1eW6ZUozpPqEEPZgZEeWzXhWvQma6coKaLoAu3oHTMRzS5A1fW",
  "key33": "3qzAS3p8oYCPm4YqwaNvwcENcSv5rBMJQQS64NamYToeLoJDvNbQuyS9u4dYk5CsdZdp3bvV6mS25Bg3vndmGmst",
  "key34": "4uYyE2aUBuS2bF9kjZEVnXGMxeXRd4ijjK9pCRskFKzh3LG8Vsr8SnyCTTmFu8QFpoy3cA6pMg6dg9ApHEHcXpXB",
  "key35": "5gKNNhBJtic2K4B6xK65ZAAtgc1YfpEY7b8etg5PLfNcioQJpvRwM7VZsgtDWUr5zGNs8BCfdLD9ZfLuksnu9FqM",
  "key36": "3k88d4pg6TMXjzCqXau4dGkfBfib753G1gHdGV61kmcSqjzHARoHVzqFwV8Nf71yQ2aR8MnsfgBcavvxRZiFLEHC",
  "key37": "2V9ijHZNchfBgK8HiZPuHh3ojAKJUXfqoSXFnK3w2HaqXw14Rgy6jJ8DiLKYrcW8DJVh1kn2X5QrcJpJ6dKgbxou",
  "key38": "2mNo6RJCDwpVvYpQ5RzRvZyZQ339djHehJERwdFMh6XFgYJ4cTkFf7c913WJC984hN3QD2uQ66FALFZ3uJmpfYca",
  "key39": "VgTf5x8MGt7R2itKmtjMfbqDs3GJbcZh1gboa2jddLpmrTopNRG2ns6xMaYPEkWXKhKFDuojPpxH7bHPumAPBus",
  "key40": "3gh3o38BB5iBzsL59cksVvaDDK8D57Sct35ku1TfAV2cqLRZ9tMKJPeLd5iApQRH1H1xRTBuL2GiNwZ6xMEANkux",
  "key41": "63Dpki2FP921di8qcmPurfr2J7gABB5ZPr9hv9TBtAS8RKPBniTpdh2L8j8gSRn6Hr5qMpdejhLGQyECz9EQcx8Q",
  "key42": "3nbvbwmH7cJUPmbauwWLb1MBLiH8GjkXCJmrN1UtAKPy9zvUKYPekX5ovXwTNYZu7HTGeityGt5tss5qNuhP8nFg",
  "key43": "4obatkDiF4i4GjuZyEcrHCCXxBJ71UNidQa7t38yaiSq9S9US3UFtxGMK38X4v1B4LRtsJhQ1r1Qqr8Z6Jd41zh3",
  "key44": "5v31c4cj8pxNJphnCkrfE2W4R229kFDqXQ4UQJk65nfeChsMVjSvckVzv7cFojUh5M5GQhgp3xDngRdemr76tK6",
  "key45": "4zxyeH6D1USyXg27LPB7SifnRiShBvmB6PDkMWQUjxepBv9CW97Qi1Mf1YdxUNuuXPgLWQ7fuNXTqm46XveTcP6y",
  "key46": "5LC4h26FTL5A5VXQkFvwL4toYxuSu5oXFmAV8peFBVvxgxtGrApfLHj4GAeYdQRUQEZdpSgSqaksy9AV93oAjfDN",
  "key47": "3k3dg3BT7is1498etmH77ZepXXQMm1srHJ8K51qB1ExbKJBL9FpDeg5okX4tg5miQGnAajphPG8HnvXcB1S9PkeV"
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
