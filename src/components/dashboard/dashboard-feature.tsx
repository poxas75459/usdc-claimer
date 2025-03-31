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
    "4zWR2pvGDVFnpkBDWdkwRe52BZJ1edyk1uhECs8yCfq5PP66outdaruNEg8Kkr4x44uDxek4kfvDxSyTmpu6b3oU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZAxhTs73pqT5RfyqSyAWj8CPCsEYnoAM3MceLUupBMKS9g2C7ApcgCbyTNjE7WAmmPDDTUw7yFeefmu92JXNYv9",
  "key1": "26fmVjjBWDmQb3UzGNmX4t8ts3wce18xAhv58CSUkB77gtRvqfEY9K87vMFnWPR3VhBMkSgLkMdXqqz13UNzQvi1",
  "key2": "4YfEtyGDVHBHikUEz43BLhiQ5zAvbegNiPdrwM7zHSAjFSSPJk9XLWQC9xtDbYPvgD9PPLVMJzQsLm4zaA8zZFM9",
  "key3": "4XU7pRxf8THE44DsogpYpoaSNBxcMXhWJmj8jSrRAzDJm1QtoB6Cou1RAurdYCYuR5bQgVP1gtV49SmvZqEtJPqu",
  "key4": "2At8gf8CwoF34L12DyBQDDzwVyzQi7C87keLPUUdPwSx1ZuaSPDNgG43ihiWuMA79552k4U46SnoYUzy9o8aFcK2",
  "key5": "2VV3ZTqfTetaSkqvx39s42WyhfCB7ApPkZEktwv51ti2KbTghhAMeyb9ocQxqou8j3S9JX6U5epLnbn6jfabn1hE",
  "key6": "5NcPc6gpYVpbxZKAn9mdFhXyxVkFXYqMSkBpBn5JgFwKUP4BoV7SHPXJdVejzZBufN51Z4P4hwM1h5x4JpVHyHZH",
  "key7": "5FWfYQ9QkRjcYE5nRRp4xNWT1eweFN91SMteybWWbcboaaSP7ttWug6GNdHjwbsas5Uo1gwaY9E93Eoems3F1s4f",
  "key8": "2NCxh3XXpeyApE4P4MS8ouPVVumT9rRPMc3jgHCQRGPeDMTcfUsQX5HZx8ZdEgEAfPu5aenhDLhATmXHJuxGvwKB",
  "key9": "2sZQ742zHH7NZEBukRotb4cBxDatoVNQFdJAYBpMndfo9Y2eTzf6Hu8KxGLroeg4BauYAnapyeuxKQ7q2KD6DMT4",
  "key10": "2rtvmr2jLPRx9HD5rXXm8S1DhWZAbHkia2fhQsU2GuoyReBhxMfGwnNQGNxBv6pApKrHHaitshhevt5oUtZifXjs",
  "key11": "2DGRZtHprXgoDRYDwrZwBEHUKqKfew9SZEzmpmPJXFhdgVsSvamfSooDQMMUzCYs6L3aiyvZNd5WtEGRCnrwiDpP",
  "key12": "54iAvLQeGFznpW24onffQFYxfFp65mHbqCnhvUabkpdUJazhHEnYK4dr9PA3jypWSuApj9URw3VTakm8H6m2kzxV",
  "key13": "4eHZp6wXJvYgwNJpN3f4BmrQCLJVrTJT644QYSeYay1YF6Swh9fzpZ571DwZXT3TvmA5vvz1MyproK6vta1BHt4m",
  "key14": "61F1UQkWSKuDbcthNB85AqzTDDxRDS79V9eGwE7MqJ2EjyMpzrCNADgyBKvXZPB5hovZSmxfCTFKuarKDXbUzV4j",
  "key15": "4kQGquHGKgHXbNoJ34fB7MwrxkrEVgZbXizzdQ7pCfDBo4cmGB8uYL48vfAwtK6TuYEyFes3gp5aPZKcd14Z1pP6",
  "key16": "4jWcTVhnA9Y6CenMDmYTUTFR5wZQp23aBiaAmvwKCLkik4GpehKr52hwc48WMLAYsQhs9ZB9pMjufTYhu9Spf255",
  "key17": "3derD7ifQcf7cFDhrhhmfSAdQyyCdFTQvp98nk37MyBrKzPSUQsvkZ9DhjvZYCwtT4aEq2XUHQhuSuU8r7MQcaJe",
  "key18": "2vMAiQtKUbeqacZQ9yYBhXh7YAKhXfsaw7MYGxgGUbh7mxw1TL5TUm5mf17cu6Mou5iUJGveh1YjQDPpNszbMgtk",
  "key19": "3YibJ7eDeJRZ7tPvoGp1sqEXxrnLCL8JEPhNC5S6Ms7hUZxR8juerZtghH6yTFMruuKHDCY21SPMe9yQUDgukq7C",
  "key20": "35Zhrvt2rubfEf7XHvZkzLDJyWDVP6BuoH7TkHGSWsFGCv5g4jEJbMfW1esdGfW7zMu4Rxvvn4QUGeeB82rPQN2B",
  "key21": "3TFRHD7cVEoYvHjKaDANthyhH2UvZRqLzxGS1EfGbwmtWXqXTBhV7RQ569wmmUAfhieBXH9VJgdnG66PaPfmkezW",
  "key22": "2WTWnUgRWgk5rDFQFQ8BbUusZLbheozwgSDHufLhE5EK7SRaFygRyr4mKvNBFzNMg2VE7P7QZM7BNMgf5FJ4hMpa",
  "key23": "4xZ2sdEj64UioSb54ZnkJicaJWfjKPhDAyXgYDvkp6err2chKBbNCAx9n3iA3dcG4hbjyzfQegFaConJF96EWU2H",
  "key24": "5JcGJrhxgQ5ex2k3zvDboCcMYMkCHdw19oSLssuHDhxh9uwK3HK14hmVRiBec4ojYRZTkLBEjyZttEANo8ZVZFjn",
  "key25": "5XzypGVaqEBEsvfdW9KYrE9w6e79Y7SqQHtgnwBqjbZDntQ5LWqdu7ZSQDJdm84Ha1dV78NrgdVyban8B5DsTc1Y",
  "key26": "Ye6xKGBu2yyJeR369C1XYhpbUbVg4KKnqf9cArsguBhFjXkixtuUG7bWt4dayNAoZgQsuxmk3trQ3nYJrHwnSir",
  "key27": "tsMLwf9ekUsyEfdWb7rPqk94s3KHuQCMGHGtrYa19K99UtktBEBSxJPc9rt88DwuPPeqxwGvboGu8DCLw4sg6zo",
  "key28": "6pTT7B8h7p6GDDQDaQ6YpGRyH8KNChj3oFjma59Ba295L1hM7Fc2DiPoY3chqdXRn1vtWAbPJVxjkaiy5KQkgA8",
  "key29": "YQETcvsmV8nbJXDq2fKANWVH3HFHcWbq199wGvAoLmiVfgHmKZQ3FwQLZ8zj4iAwqwSLHeEdQ8JvBRjBEr1eBea",
  "key30": "2B9BhNWmBnAhQ81UbUZ2mVkFb1yvSzJg6nGK2EW9dGWM5x3SiZZny6KVx3wx2SJazMaHgFr4es9Ys9E5a79PRhTi",
  "key31": "27YUGUraiKqpGeKuWMK2ryyFoYhbonL442oAF2FV9v58XmygVJ4kTLrqBSWLivpmSXNihA8kgo1BdkVXCVdrmNYY",
  "key32": "3zJkSDAxUdMyMYbGi3uhdfFidnwDmGhci5tHka4S73ZAZBmDXegSy1xVjngYFmXb2ruQRo1jXPMyZr6f74a9WCSw",
  "key33": "4Ra7PHZFShqGM9trxDvtNRpYXikQ2Md6hVSW47Dn4DswYM1y7fDWEVGWovYoizqbKpeB8LJHqgwtFFCqFrrbYWDz",
  "key34": "4t8KFmw2d6iaqRmzFCYfyGyNqe4ptJTEKwtTwNhf7dQRPyQBvTtdMaCn2KLdNZWr9yiANvKtP6VM4E41EKb3MKJo",
  "key35": "58sQiNJfzbdW3kruUVcsWGYmZ7CnXFcDDFFRmvwmfNcKYd2PPyoTCa6WUnwQZfzCHSfZzvUFZM9rwQaCfdhkmwsv",
  "key36": "3nxLpm4cmYsj8BgZKRWVHMEmtRbDvWTKckVNtwumt5y1GK1jYdmzBrbMZp6saHMmrxZrZvButPW82k2dNPYk8fH4",
  "key37": "Nc9PXKVhoznBtNMqZR5qUJRksg6jEkKNUV4Wmmo1YxsRf421DsAgMNxf5NfVFbvhftfmohP1daEb7p9AxG1KkJf",
  "key38": "2iqo941ATqdb6aTR5jkvLqj1nsMVAucowVgAfXVcF9VosaXF5kQPgceT8iL6VwSq1XQzCy6Azbmz7D8sJZneKxHC",
  "key39": "5xeHobWAZhRVpF3rVzJkqYvczUJyfscHkmmaUq2c4TXjHPnTYKvBS9eXdv1braKjtpRLgjJCeyW851WprTqcDNs7",
  "key40": "sk2yiYnAKDsrhKqxUXSnSv21d81tvaHxe1cvP156e5yL2P4Ey6sozdm334XY7tha1PgZpfQWboy2PATSaNDeJe5",
  "key41": "3Movs6fxvTjL59oquZYj72DrUdVTkJxwRGbPpGKghBdjkcCFspJhN43XvWHqUEeRw5QDFddehQVBXuqMzxsrg6YZ",
  "key42": "3ADgVbs2spgCoHCErjX71bMnHPytd4a3HDR9h4fw3PnTtyCUy7q1pdqWwuqME7wvzYAo4w92uTqMZjEf2GaPa5tw",
  "key43": "5FmqzeV6f1UyZFXtKGqqgCYbxTYjGLetyX263EeC5x4h8vZY1EaJQGCpgzLGJ5zpdf4xKAdpQwd2iigLx5BPGBXZ",
  "key44": "4shUvZVkpPPfxGgxfaCFKLvaWGVJyKATCert69QASGMH88BGrYBfw2TCobYgS11X6Q3hpazyogcfJGfdsYikGaoD",
  "key45": "2LD1LYUwyRWHHLK5BA7X4aymA1XxTQ3vJfeJWZDKpJ3X2X8xqZUVkHmnMyJ6BKAHxBoUry2tQmmGD5CnbcSuXLkk"
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
