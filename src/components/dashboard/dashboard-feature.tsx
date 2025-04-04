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
    "2xQBQh3oyfkKTzUSHN984RgT2pvdTWtBieWFzNcMAsiyJVXwaP5egbiVfoqg6mKAm9vjxD3pNkJhPKQmnWD3abZH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U5EU4n9rhEQTUnjJhEMHBUHPKDg8FJ9iP4WisJMgFFPmnkmQGNRZoGSvMtD2oSxHHhLEKL88e1xdUndsjS91vMa",
  "key1": "4HjrrRwCDdnhyns45YGW2czkLMYWj4vsAKwNDcw5vJoobyZiwedWdQrbj1SrZptnZ1GFKN4SfvEyGMYdMNovj37K",
  "key2": "61swASvPKNwX74gYCzFfyaeiR5wtnj2C141EAA6gSWSHD7h1o14hdEmNzhwVbcVFC9QuyT8vdhAQTLUvwt7e3eBP",
  "key3": "21YH7MsPrpCvMzVU958V8GmCaysMsqz8TWVk4LWcMSw6jjAdjJ78Sg94TQFw9yPX5HgtwchmS692G8sAzsphwCPX",
  "key4": "27xCfPcmimSrLBJo2FTFpugohksRZBcKZVSWz7Wz6prkGLRtUDuzx3j52TBJtscU4qaPptCBMyC5DFcbQ8sTpiRq",
  "key5": "5No4JK3L251vnog3vQrtEZjuusFYCnhAcTDRRfvTkNCvPCBpXfjNmZne9V5sd8xUqHbBgpFmGEy6HtRvpaCuarRU",
  "key6": "4SuAz88JznN6dtJ9AQ9hzKcCTjqfnfagAfyvhiYnr5c2NFsqmUBiVNb6S2QhUHgTpsdJkGVpTX8hWVmczjcgA5Zg",
  "key7": "2b6GxaEevYgHF3JVszZaAyMsZB6xw8kwGYc8Y8pinw3RWEvAGKcVEvp7QxDY4XtzWxXLXUY8ayKTVn5EJCV6xjpB",
  "key8": "4ZPFf9LPTkBJbQjiSeR64YRfm8szAUczwUt2p2KyupejBgwCy28xbMKpfKcB1XNet2p9Ta19azs2BwW3CYJeBycF",
  "key9": "4YBcrngBGQ2pwiXFckf7wz7Lfaf1ien4Dghwc3SyjMXABEbHRtvXKUpZw7UBFmATKehtJ7dzygFcK2NPe4M4NzLJ",
  "key10": "SBmosE9cQeTL8VQGmP7QAaARb8GQCvFcttQCb9DRmzNjpytEm6ApF3bsGYhQ9rxw9Q3ViuRCCAmEHkqwhG6Eobn",
  "key11": "2kWfECAexkJ7m2b9sS5QoY4Ez4AggWnsxd8x8L6P9GuYTpebzWchah7F9twQ24dCvpGDcQ3xKNX5A43MrLqrUmfh",
  "key12": "52MT2LGkGRzwxgGUHj91ahcgys5XA5EFCHEMyRzDFBAEYSL18hccQdDKqZJZCQokmgjihYnYy8CiYt7CyegPfpuS",
  "key13": "35E4kamnr3KVFpzBJNbdjch7kJUhswdZjuhGpSoEhRTuY4kaonJ1DUk71HHFdJBqFYoMGDGLGbTfj73Vz9VnNymp",
  "key14": "4dvExwYXKc6hcziyeBrHGKUumrK4CSmDByAPu39RPgDc2pYVywr1CjJEA3yR34KwLjLqDapz5kehZcxUnrst3jDV",
  "key15": "2ZeVGREaqL42RgQfXGdHvi8BNVkVUqnbHyogEih265LfmrbgFkcTpJY6wJx5WTLsMEu67MNKS5jtxgNZcMEvbPPm",
  "key16": "5694n7H4bK3sfb5eVvFhMhLB9PRVLy8u1epy4Dv4D56vjaS5oVjrfbbdp3rivcgTSXNvgVHxmfWxsF5keFhYAYX5",
  "key17": "2aRAkVQGQDCALzYXRoyLaNMsqDArZoW8H4THSnTRo9L2NpJ4EM5uEohmeN9H98VecHvdbQpM2ZKvMZNAde745dJZ",
  "key18": "2B9Gas92gYZK8nTEacavaXRTUjvo1mLhrJSQPbvC8u9QyDXRyFMS9ixzPLgRakUhjAAqUzF8w2NLJhGprS8KqwxH",
  "key19": "YJM51LBbYP4hUjvcUTbHnRtngwBgfxV1D3HzPgzyph5QmZaXohcNaPP2hHA3H2SaqJchNubLYLC7fKhiUXdFYdo",
  "key20": "4ugkosKHMeEj22oiLduoMXGdy5Dd25cdvtxHw6eajoCR8hrXds1tNG7nUk8i2eZtQGi5SkBwh9ekS5CLZLJnaGqV",
  "key21": "3ydHpdBGtK7tSg47NMrjtVRxWUWR3rRfoTaxuphx2r1rJfvibYUzdQe8QaSMfiafzS9abz2hnULHmgT9EvXX7dgA",
  "key22": "3Jx9aMNd9tcmMi3QDHcvBwV3FUcd6p4VXXgUs6Hy1W7KM5ANieHC8JEuwFt6DFGqPyUGFJhErXLdwS3PMvwJodvx",
  "key23": "4qzbkjRqWhXPeZBmFwB6kQdtmRpqJuEQQk67k7gcenS5GfdrqcxWNC97ckovExcw1DJUFCqfrdH9yR7t6AWLNfUt",
  "key24": "2iPb4nBCSQxQSD6xbMFnigHXMsyxQjWt8E2ASmKqq62b525Em7a4czjxvKt8PvgJpas3XwicpgpRSV6JGqSv7aMQ",
  "key25": "55hKuwao3GWm7F7w458sZ7sX6Lu2868qPVuuvNs6mN3EoCxGpprB1KBfqz1vHayS2zDDGimVwDig6rTbxUTU9rRj",
  "key26": "39u4ArT1Cgw1ZQWgDFoYwYVETSaFA9j4LTCYjEPL6PZ7zCPvsS2t9n6BjzegTPayHeXm8qTvp7HGX8ZSpeVp4vVs",
  "key27": "2QqsjaM4EN1CbgCRoCV1FkJpvsDqNetKDrxVueSabwTSKCc92JmkvA58iAaFPdoB3BZz6ivPa61qRBQHBnaCHqSb",
  "key28": "4J4LWRNP4N91Jem62YE7pMLtLxVQP8akvEznP7NAEpxTJaW5YypyPF63iKW4eRTXNQopNdyVrqj8UvqVEW61xks3",
  "key29": "2xHQghGu8VWkj923Bbpp8Zi4Q1k6woA1GgFHJj7mStbh82h8iyPgLbvMzXd3oSZjPmkqQS4MBh2nwdRS7Gry9a19",
  "key30": "4sUqAxzuii3SD3BpZsMbiNCfFhRnuvACaW1SkSUa3UajvFyBAahgsWmccMjxJEEbtJGRwEQEUzUNimYTAzGhX32F",
  "key31": "2vVMmHdNcYRHmi9MwDteDieegNXVZeTzeV1rL5kbfxMWMBwU22M2Q2uDSa8di2KHT4Tubt6x9qBZ2uRU3rmZcqDi",
  "key32": "5AdqPPTtYLjG2PYhsPmEnnK9iBr4dmd7SzMEbe4aWMo5aQQVSqBWHyE3cREab6cPdPr7UU7n8QnoVY9bbFwqTkCz",
  "key33": "577vZpzcZLyJkpRCHoF5vtj2v8qVSDaH5jXPx8giHSycghDgBVzcQwiFSUvSt95UH12cP6UdPitUTG5oPxyZcngm",
  "key34": "5Qu9ju9cAsmKJMbAoMojTpZ8WQWEVLLzqYTaYAXrWE1HNuw9bvKhSJYRHGy44RkRKWuJeWQzPSA9jyy8gCVPwppQ",
  "key35": "5TH2FqrMM4ZMYWCQPa3kUAoLHiYs6ySMSA9g6TYhxwLtD3pSy6gRqp9ZwNpT38W2dMgZ3DhJo9ppcSVXgA53wqbP",
  "key36": "zbWKdVAzCFWj5YK2YWSWNJmwhiUAtVQifHtR8Co3vZ8BrQHf41GLjPqbHxxwQ4TLPXwu2YKWQg9Cir9emN9FLaB",
  "key37": "S6n2YM4TNjGp3nkws5JsGLKcu28oDxjWMY95KwgAXUdXFEJuzYTYxKxnMuk1iyXNNibahVM655LL9FP4Cv5Sst5",
  "key38": "5y2TPdytyS3VjUi8P949L1r4kSEXLMawdGtDMySVgAxNLiVPJh5kRuDh8hGjLBMBv1wdmJM4jbKBE8Q9Yx7eE8s2",
  "key39": "2VF45sXw6a4zNYCtRXudmyQRLnW3FgxXXCEPMKgY61mYjwjWThqqemdrGSBADr9wyGBQYkucTEHyDar4nRgZr8Th",
  "key40": "2Su1LB3hqpjaaVwEfVp94uP6CsUmUFubS5UrT2vWLHFAKQN7MPbqVec1ooK8geDD8x2qe1dBdjdSRoT8P9VJpW3P",
  "key41": "2o34xsFhqm2jNU3zPWbzTZJ2CMWx5jBECHJs7UBjDPGcmSGVUPURGiH9b4EbtTENEvYMRy9uWj4dj9TZUzcGrBCe",
  "key42": "3Jri3UQxqB3Ccn5AWjg3t54UVhKTsGcVikyPGYY7dk2SNDGRr9yPaJdvuQVDGDhxXTwHG4FmbhY6VBiCTCNEk1DV",
  "key43": "4triwLJiLZtpS66cTehvWRkLPjgF7kFzFX4sG2BrEeTeX3bmrdiRba7W7fmGwLPavSDNrDuKPQLrGvatAgQA9dxZ",
  "key44": "2zhhUJk6YeiyeDMcsKZM59b7UYmVXhyU8wRBzuFKcfS58icC8ibcho3LqQRLWVma9WF8mR1DESwm9NTUELtyuAaN",
  "key45": "2HEfKNkqBKm9BuZu4oNwknrTG6GfXDaw91tZ2D1NtR8jBhGDmpNzUfZUxR3a78WFXXXD77qxByeDXSxxa8F4k8C4",
  "key46": "66oCmmSXkvEDw7RqLqCvVBeETBX7yCF5rmQzcXbog9YwdqmvJavi7G37KmV9mEmGvwjiKMhaariY6iuc8jAf8bqK",
  "key47": "22vKt5C1NQTM8Vv8NZ17aT3rCwzywxgiSb9HZQ4UM6VsRTbxBD1VkDd24BFGN8tvwB3ynHwretvqgxvjdx1ttxjE"
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
