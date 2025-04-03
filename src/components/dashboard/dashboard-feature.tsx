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
    "3v7KJEJg2HDFtxK5Tn5Ws5v1Mst1cizJH5EJCWXLVpwFca1acfC1rvQocydUCQdzT1622SRJmVmhxUj5Nio9RGQq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fc2gVf3XDB74xg2gEDQ6fALXFu9MbN7f2pwUGyCK7sreVwqaDcoVVVfw9tBYAfRDWviXdLQapZdgaRqi4tDUPX6",
  "key1": "33Z3MxgMtMXjVxpVNgEUMBr1abh4V37LoZtYQpSXSFAFnPoMF2YMwmkQKQqgLEkphw4Gx64gag3RrxpvGXg7app",
  "key2": "sscCUXHEzLRbYaekrmu87CGuTHTAAXuTecH6wcVcd4hw25WMyMfFpG6E8Wr36T8TD6eZQbDS42JfkD3hVtAJanw",
  "key3": "4CdL4bEzPoVGLdCQ9y97ZDvc5Cx5uSuVKZ2wUzn5qQa4ypTYUnzBY6BhDWz7tBcjWu46fRXSu1VY3k93MrKfNf3",
  "key4": "G5atANbk3m9CjiB5vMQymuZ8mLLGQ2R6u3AHaPGnPSEv8kNtbSaatm4HQKhuJDjRveW7sJGs5E6wak68qNQteTQ",
  "key5": "4UefHuesB2BC3FaUgnjVPiZ8zqDVacxjhGryBq6eBLToZHkzZNrLe9d6dGgPFUsJWoGi8Vf5iKbWmcNqMQPNUdUn",
  "key6": "Vag5fQMAMD9JJXx8u5wzAJ69VwyejkfSUdTkJ89uYJ4M8Au5MkNnxzhecEN4ePgtssK5TeRmimZjRtHGoNKCJeS",
  "key7": "4egjDbKQzFob8rSxyRD55QrNWbAiSZ1JvQrLFzPczY2AHQFiaosTSSrkc9grJYKUCxPANC5yFCVP9raJLMQLVgmz",
  "key8": "xrW21DFTHkro4oTLWnp1CWegwbmEgHA3ASSQxuFSJz5UqYgapcKRmJBRF5qaTV6V7uKFyf5y5racSoCQYsuCu7x",
  "key9": "3E46PuzkAF1TBYFvNofy7nCqVxqJSh3sUQ8XbuTtWKc5s6JHySJWnBaLXQF4FAGd6efpCxceRfTdAbrCncmURMXV",
  "key10": "2vJFBDYdrGvUwfRmAE3YsJMDWzA8tx8CCkPPJq6X7h1LNAQ3k7TqHCnTqi1MBFsHMak6uwcRKGpKQR8YjA6ncqdA",
  "key11": "5xALJHT8fz3oKtjQNEcrVofqZ4RWwtQC8NTmEbPHTrXnXG8xXQ2m6Uzsuxho2BXfbQbBmQ8yrz6uzj93ejTEVQFy",
  "key12": "8EzjPnbDqncyCKxPmsQ1Ru438tX2uRSR7WaKJLGSkQPqePMWZGS5veHqW8wRkBy5fMVaJeASjoSw8rC8TDuq3Fb",
  "key13": "H8rVRcVxVMnMivjp2HWzPDFQruwv1Z9caKA6HQJMJyzgmzMoEcB7sCrbyqbud7VC3TNp7UqrL6T5Qdoj1wXBQr1",
  "key14": "5AJHqSTXh8wyq53xdCjWV9advfFkd5jzTQ3zXzP5oqw7yMyTULBfatbTPauuvm3qnkCp2vLSbCGJx9ncdCvm2VUB",
  "key15": "YJVZc3uwMyScmAmhvECcT3Tr4cMUsi5kryFz63pkSUtRLR3iK3KdNvCkUaRZ4soAduorPCZfWR2us4jVaFRq9sd",
  "key16": "2ehhU9g94z5QEns6ZEHnVzzypxoGuCy3S62r1BMhavnxXqKb3B5zLRTxRkJUz8cQ47vwo3fGyys6AsMEZa7KJP9t",
  "key17": "4UPKvAmK4PHhutBFP3hYyRAEcjsrRrZTdA1LUnrckyiSUTM5cabnkHPkbSnsAko2Ba7M23BFRjBcftiA7BEo9uva",
  "key18": "4xsQbN6pDY3RTBfTFKmYHPVSfnvHbm6iwmK6bxcJrR5JZgcNiVaeqhPTMCkgBUtLjFFQ7PmxRjGuXoXMpRRjFNUT",
  "key19": "2qsPEbETpp7cPJyGbLbx72ihPgrNtQdRoCzBWYWhwrkwNxwZ2N8WAHaSpn1Wut6Q8NZ2iE2iDdm6RvGo9nq87Kth",
  "key20": "49SoGf9rPHUudSPjnXnEKNjXiUwqxeQRZo3u7UaSzZyy978sTUnQjWXSeb3AuXaMJ2RKzT1n75dWHWAZReZShYK5",
  "key21": "61kZN24wYwhKCsbuaG7W8JntLYcgH1xukfGJsNFzBwjiXvB24BGDoweML59krL1mxhEAi2RMGeWM7rTArQdpXmvc",
  "key22": "4kd26xTZ5FNLccn2h49tDrKst5udMKUVVNskbV5PghTvWQSqJrA7uxwagojKzGTUw7YGwX5SrCcXVTZycfFL8LZn",
  "key23": "5qCfg7tFzjNyL8jhJvtheWWQfr5WVHzvt4ghjRkQsYiAhNjaU2Azf24QHvfETjtTQ9yTDYeU9mq6x3UM3SahsFiD",
  "key24": "Z6R67QnRRT3J5GKNNnDpthyncHg7hjQaoTHM7TxyKBKtMxhCHcqTpVx9dZTRutPcpBNDBcZagLwQqfRcEhAv6cQ",
  "key25": "2emMyJL8bsKZ2egzVfV5REVCjU36t3UQoDTfk3R2v1kokHdpCCcPgUwBhGVacf3NSGJz9no3a7nGQCbTPBZKycw4",
  "key26": "4fHiKurWu7SVrQ1GAbsHXqpkm1mJztg55yBhkbU74Kwdj2CUiiGti6FYRMSwTn1teToTPmtrFrLq3g3bPwKk8HH5",
  "key27": "29Vs4n2PkjdsnpXjqVWS1PSPeKUwimVpsjQ4VJMV2FtFwqspMsddVvfqojoMSG83YGNQQsodi65UhhJPS2nvt75M",
  "key28": "3JnPfGaXL7dkF1J3ii48bpxSWQxnVVAuf5KM86ZsSYDxZKJemf8TLAyZdoGEwAtWvii99FRp3273YZVpjA8PpgNm",
  "key29": "4UNtMRJfVCJgLWoexbBpkEnpzWGkn1AGPL62Wd9H5hbYs7K1fDcxbDMPexqgU93PYTHSTMU7MgkgwFKgZx3bhfwR",
  "key30": "ezWMbKiYHZcJeYrivQ2sCrGGt1YCZaSWoLiNKE3n9x1zFWUcjyZvH7YAWkjmRvrpB1G1aa3rfQJcFuCRJ11LZ16",
  "key31": "2uyCCSEhMRNKoZPgtz8haiuUhWAJTqy4xsghehLfY8Wk2WnCKs6AfctWcMRBkPdr5y6a39qERFqXdmq6Umfqa3ed",
  "key32": "xc4FQoZQ762ZsRJhY1g8p7GSHLChmmzWB5PWfLG7cJ2ePL2B43BWdZoXg4kCfhvg4Va9cXHpyccukQi6CUDapdC",
  "key33": "K1qbV479A3W5CWAaNi127Qh7piQdvnyCPiMT4LQ3L3Ya6eMLJ7GhBfQa1s2b3DZvU5WmD4Z7j1wd3YHiW3JMpBV",
  "key34": "59xg1RDwX5XT7pNAavqHz9idDDbv64PWimEdfZ7AW8DyNRfWfqWCXJyRks93GrVtZXhd7RXHvecoZgZmqWdtdFWx",
  "key35": "4BtYPpv8TEEvK42291t97NdpnXtNVjKq55hHnHmv7ondYf1Fe23aw98P88uR19NZ6niedEFY48NHahPXyjwZyE4L",
  "key36": "3kGDGbHQ4o6g1RBKXbEgvgQ9XBogPaS5sbwRyjkq5kmXmMPTcitLyyYcGmra1jLssuL889rw3CVawWAgs9JWx8jd",
  "key37": "627CrxUvXo7hiLa5C2mEeV1DeVxf3qwWcjJzB3ZdP1vth6xCJ2xTK95yHwgJLRhQoaLCcpTGp5kWtUzhKQ64DYfs",
  "key38": "Gm99c2scV2qeNujR4CjpGEQMNNokbnsxCkxuLXCCUTKBSVNK6oZEKnVzqi9YbuRoCkGV5SAhdVEP1Xtr56b4rrQ",
  "key39": "52389tjJcHTTjNpmvAhTFRtVwcsmEfstdSND7SDpofWGbUYArZ276y56Ujnt2WERt1N6WJakeAegVHBUWkT1V9sj",
  "key40": "4qnr88wMLd1Fu7gkrdSpgb3DYyzpRAkmxJZfCpaUbn5F9H3rwnocouaSr1waCBWugDW9H9CAFVUcyVqYCjQRoYKm",
  "key41": "SHRABp3K9wdT3GetHWWgh173Uu3QdDt5gBg6g298W6GLTRTKz7HoWHxypij2UHPURmytJ1vf2ttzZxnddZV9gNH",
  "key42": "32fAtpUGVRMPELTBwvoZ8MaGAZosJ9YUBad6b357c2Pg9xEd731gEdCUQTcrYJzx9AdkvMAtkTvXe6kMy1ayf8jP"
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
