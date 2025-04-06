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
    "5zKACiynB2aBfqJxcrvuKLZVHE3bLuujTCs9gE4Tmmf7A5YZavPrinw5xdtBaHcLtfjYHWCbpDvSwKDemDdfqzZZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hWLUzdQdrSa6ZQS3o6HM95dc7jqVceJo1xYX8iQu1niH1roPxnkZAYq6Mf5cKBh7TKinpocr4VSdvKrrNxj9DJg",
  "key1": "3cWAesg6Q1Dksn51A4ybN9z6izuhEZF9zZ2XEgXS3oSsU3er64MiR4Ch7bKkNZH85P14ZmZ5f8gi3bwp3XZv3mfs",
  "key2": "3BcQoRaMmr1bmWCXSKQ1GPfQ9S8D4wjjvEEHc8SP1LdUva8vnYWBqjrncSuEBLLxS7kTJjMSQCy8ehMWNewGFnor",
  "key3": "3hrcTKgtvscLigFbMWp9Ajot38Nbgt8TVg1XL3igCb5P1TAs5NKN5bK9ySYjSjmEyTQWNptef82f7XWXAH2QDyTQ",
  "key4": "3Aw77N59CViWMSNLiXpot7Abh7XBk2FgdKQZXtZPiFVKBFMauu9ZZ3bYUNmbGgUeYTvKsGpuMp5WoZ3WRGvQ1XyZ",
  "key5": "5GN5QCqdo7eTxmB6t1caewYwqx8vPD685J2vA8SVC92ynBJCzEdx59BFMjhnhBa7kcQEj7bwXtLygYAr2K7a3bEr",
  "key6": "4GEzDzm115DHe58ATiMF9T2EV7FUL5xg1GdRj1PBd9kZd1FSZBCp8tH4w34oa9Da39mU7gPkVBygYFrqUC1ndqoa",
  "key7": "kFLC7pz8o7t8ERhT72w2yXHWoHvXShpdBfNLn9iQBPNq2yqRNKBcXhT1gRbL4XxL16n54z9n5Pqzv98FsD5joiZ",
  "key8": "2327PFcANeopbnqkXHfnqDE2JRUXvHES1v8nzg37YGusSEsua8b7wkoqdef41dkC6XZzQ2FviQbcAsfGKMwTMvLh",
  "key9": "t9sXtyzhtkag1gCKrAn3yb4pFNCAdBxtcJmGx4VWT4PtNHdrXqMXUpnErKx9pJErqmNzzXkDry4eWHeyfiuvRgn",
  "key10": "iF2nPzM2tQPvae7Hgcq6ExbszJJMhGsZVtg99PByC9K4jKqukriApjhBL7PWWCxrWXDVQCRf1k296eJCeyyockp",
  "key11": "3ESz6RNMsLLAvcdzxjjQPHEDCFWRhzEqFBA9uEZMxowMotQxjse3PEufe1xzsSDuj95tfkJLWJyKBE1LGzzak9p9",
  "key12": "5wBvF9T2SdLSaNd41pyTgASajK1KQ59pxednvT2vuNjWqLoB32VoZwyjjQ5UATVBPLAHehNQ5GiPUEQ6KbaHRedA",
  "key13": "4pVXq7Eex5yQkwH1VHiFm3BDVNzdrmCUtgKU5oAGAyDcDY5qDb2uBcR9S5yFdGcALeeEJ1Fqu875UMicLhDASPug",
  "key14": "5mTxQrsqxyew5LpfJeFJ7g8RMVnj6Y9TSy3EUEaNK18DUNAU6NDB3YXBQAAXYJcyANFcan5baByTE7Apk88HkJTZ",
  "key15": "4uqn3J7Zse5CEoXyW4axzHthTRir1SXSQuU4TSheSnWAfxc869UeJNnpasaC7aNFWpKNPRrVge1PqFZq2J5HwVux",
  "key16": "5PZgza6RyhCM3pya64gvxUunH52PEzSv1wccW4tFSdvuVcVSPjXunWVebkZ4yrSDmCsAgV61BWZ64CNforVAdAt4",
  "key17": "GfURHwkqHzkR1MYXW8aiqCrZeXT9ip6wodr9TcQzAWRHX59JhAdzqwcp4C3goWB58ofG1Ay4hQP4Kaaz9dJkooG",
  "key18": "3spbDMpXopA4NLthjRSfmUHSqGZ747jPWEVs7hMrckkh32AABHnPaAW5RpU1uyM17Zfc8CLegVW2PcyiMA6hgNYV",
  "key19": "2PCGQVFRwRpsigwE9hppd4dN1kqmQ7ChdUDFeFfmjtGFGjvB3jNdke2s9BtttpqmkpdK7xTvBHpECV4Ui3b362TB",
  "key20": "3ALuGAk2art3FvVv7sMck8jmCSpkYcGGexJdtLRkkyeW5QexLJboF6it7qWbJxoVWAMqZJccks8QGzMimE6RxUMS",
  "key21": "2HZPnrdv9be63wH1DhnhamztLGQEaLwdktjwQa9pQYBbwEUeqm6itxaUG1Jd6rR5hz57UkNrGJ8rGhneSHHCgY4j",
  "key22": "4Zzqr1LacfT9dNdphe8mVJ3B65FrHdRSMfs1bDSkuP2GoNcthpZcYf3fwrhEkEkPh1HSvmEL5v2xVzUR2GSAQSLQ",
  "key23": "XJDTTtdYEK3nbeEgbxwovbkaA1i1TGwHcTEbVhCRZBEp1jiaRyN3vBErWjr51y2Kbqhy3VJQjUYWA2Ya6e6wxQ8",
  "key24": "2iy8k5ntJqLQB6tDB7bmccQ1fiENhDCh8J6ekV9XF2T57WAw8YxgDVNPcABzr7pSjpFpu6QYUMWnWfVwq4ice4iv",
  "key25": "3CgwLakjtWKEEMXVBFFhGM2JAGUYVBAXG798R2Uu285QjFUfxc52PE2tkonwuPV7cE1KtmWSXzR3aXYwCL5C1Lwk",
  "key26": "4RHDUvU14WpQDhSjfbDUb8bjAJRjGQPMpdeAEBEY2JRWg5JafdqzuToUz1XALnd8wVFa3iCKhFcf8B34KJpEuCDx",
  "key27": "5hfuutU9tj7fKX4FdNeoR6QUrQk2PP4xMHZ3tbwQuzsBjbrr9hUoyNgYqEzMNtDyUFmcwXRVXdbNjbginZd4zGCn",
  "key28": "3aHQfMbG5n4d1Mj9KTXwQGHEakyWWSju4cyABauhp7wnHDVKRYXJLEz5W4ERzP8shmq1YUMW4wzVwCrCssf45uG6",
  "key29": "4oaD9M2gZQNNK9ohjBxwWLCazLa9fiMFuVSuxJgKtAJvjJE7uzWtXDpi3pfco2o73uGTKP22rrSc1PB2di4oNfCy",
  "key30": "33iXtHVn7A9DFut2BR8K1r4DbAcLPUQxhWHStKN3HGc7xqpx4nKpxnAaRhrhN3ad4J78J7wyx9SGUR19yswBDxLp",
  "key31": "3V7DcgfezRoLTty5s5yd9LP5jkdtkw96krj3LQmGbYz1j2gRHRHh5EqhW3kNYvrzcWtQFFWTiAJ5RdP241u7kATn",
  "key32": "5Y3m6B3PhgJ5gxfK8GaS9NzhaE9kkKcqvCJA3ehDPTKqtHSASaXTdyo2XHxyDo6RRFsnUUoVsoDYaT88GmaTZ73w",
  "key33": "2LBdZfB22BZHBy9ZQVSNhSg7iibyY5LUQ6zYtHixYtmRzGdLsnYQq5kMEETCsHimrTjH23bUwgzJyb75KwnUqiZ5",
  "key34": "2Na9ZisJfaiyRNceX2oBYAQNn8vt8DEEJ2yf6LtEWU88PphRUETGh67VhezSyV3EB4BD8EzMWq4xHVb6uY4Q2qpB",
  "key35": "4MtTqqhViZ6sjPrAixiCon9aKkwfoR2oWey2Xc6rZ1f92q3PCN8nyrP2kFWxhgKYY87hnaubpyGpJm6J58jNZEsR",
  "key36": "LrRJgpubcthjsGVjt9LK5AB3Qy82djdjEhso9Pr7746djDRa8cXjJQztfQDePMNjk6jrnfuoaqPyT9PGLDvFxNz",
  "key37": "TazedaTi9oEVHMQjjAaQh8pVgbvdEFtV2RznVRjrcBktwkz5CLwbgLtA8KT61b6VCBjqcusEBBudXRhusRh5vTr",
  "key38": "2r7DTiwYo7ozBPWz9AiTwSEZY5Lrrub3gvUWqbSpCJjzo8bpWSFSHZdtmLpjFTr6fAuedTUTYzJaucBD6ouJ6o5E",
  "key39": "2y4or18ya9MMwxQ4fH1G5YdeuMjaNMGm7kzy57ximtuCWSK4qCyXghivqEhT5PDDSMfHSfrahAkcAgMa7PL9yRkN",
  "key40": "2JtHogn8uJk4XSdJWQrVjtrz1ys4M1Hbnx2HtWcs9c6UtsXzd6JUM7V4sRJ9VN8DzScFHwgE6188XaUsesKKCxHf",
  "key41": "2e7VDevtWwH7XVFdoyeG4XitC2KhycahJT6aa6jfAiZfMWtSkw4CqTJCCB2o9qP1ALa2uWdgtgw2qoSk5uXPD8dx",
  "key42": "2ReZyx9jtkhFhAU65cPPxUkRwEuX2XZ2cJhCtL2GJyVogzA2mxLeiwEkTYTWHyCViuHvDJTmtrx2KAxeahdK5iUZ",
  "key43": "2oSSnK4NGb7RHnG37WUdfnGjpegZA1rZ8fFi8XUEta2Vf57fnS2mgaPx6f4u3Ny13VFCV8Hs1y5UbBES8tfxLqbH"
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
