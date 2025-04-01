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
    "5rR1SEbG2CDjr6QLyzczcTdchDbsAkLZgM6rwFHMjwYGV4kWBWARgjrrwZD2sgQ2pB1WE2HYFmKVYbj88TQJ1wTE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gYnsQVjBTtkg1tejrb54wGhYBFwmbz7n6KKLBjNgCBhx7uoqYxFd5iRPcrtfTg6B7QcRiTHhZBWAFEFBaUGCjge",
  "key1": "3unid5cSv9CGE9k2auKAkirUY1x4nJTLHUDkGvYbLkMvcMe2RrZGtQpWikAoxiCShznaSWHEojDHsK3amxcB75Q7",
  "key2": "5RFzbqBH2oRfZK1SU1U8Vi7NUvV4rw7PeYHvYxDr4piKKS8VjjqmnPNEQdRHcpwsD8U54SwKmsyGGBM6as9T6bKJ",
  "key3": "SKCsgcyddNkG7wWLRxjRh2LuDWkbGV7pwyHzbyQmZvmdXiQnDFiKDJqgghAqvmLeTvoxoMxQopPHDpvZszuuxyn",
  "key4": "km3jzaKRdBwS2X38DT8XqBuBFZVaRNeg3KCfqrmKzzSXCDdVG6PZnMoxrRxf1csSdFT5NZkSWCCAEgC15ktYmtS",
  "key5": "3PEALyoXZ6GzKe7NBe6ceayfMuaN4dMA5ugBL2gwpVt3kUhFWJVA3Uafkb66H4XHxQPNQQPMvNr1DLHWKwmkgEgc",
  "key6": "uNPsupYnSoFFZVzZsdzyNKZtQouvZ9gbGnLUS1bF2dEG3iR49zqpJbJBycmCiXSPPttMPJB5LxPaSHYFNBUwiNZ",
  "key7": "4bDbVifxAn61J52JtyEKiVqRUyztNJbsQz2tZqGUBLUZwmQro7MQ7rodqFDNNAvUmrfhZqgkW7vUY698gkx6Bi8A",
  "key8": "3pmgacJUGyf4xyG9ria2219bXQEvsMvF8ut42KZG6pzQZEZcUfZZbUjEdgxAzknTvomCrqseuBryFzfw9xY3sJs4",
  "key9": "5AAQvpi8BTtt5oN9XgvmFL174dkZKL3Py4DPfzcJ1ZCHdnB7pbPu9p1R9GZSNMwbhT3d6WcExfWqEtGFbP2dgoLE",
  "key10": "5PbmeUN7KSUDWXpE6oYQ2wiZM61QYUtFmxJJWFGvt3ceTuuBcPuuwasMib7erJfdnNECRiKUFj5H812N2TnBmfVh",
  "key11": "4gJHJcxCPy396RHhAqsqtVj3haCPrci7oN8itUUD7tkAdFRErn4fBdNNz3LxjFVNRE7qQwxDocotTzXfGtYVKvBT",
  "key12": "zvn23dWmu967FrJwnfSaY4vy69nM9AJqZ3VyGHDqgZ9f3nofE5kgAMqb8j7NiwLhzNQNkZsWkHtUramXpKj9TxZ",
  "key13": "5J6Rtxha5X4eowKBdYcR6dTagqahF4imiTpTaKAws7UofY5wk47guigZ8fjema7BHS5KsJCUku4FBU1RSCPzf7RQ",
  "key14": "3ZtzXuzRZKrGstrcJfsX7ecRFHdZTCkNo1ip68PqvXNXALsCWvrB4LWMr7PRhVtxkZhriAQ3u9WDVFkfRyXNd6AF",
  "key15": "5JjFG1cZ6d8PodJCaPvwrC5TZqUsWCezrZfecYJ34DuThCaXrsMYtqFVo3CRW2fawps5xYHq1VBUqR8Ym9TgRZoh",
  "key16": "2ySVxeNNoeEGC4oQ7RySjJfZaweAW2GniTCkxR2KKjPV9DBPSfyAyjEUJdcbJ3EgAkJ2yiAVjCLuzYyoBzJHs5Hh",
  "key17": "W3KgTG1FAetBhCd9q3mL7JsPRZ3Gf7UGXsD9rwE99RV5Gtc3wdbTp7Fq1LYMh2vMMNKtGCF9Nq1ZnhX9TDmxR2h",
  "key18": "2sgqvA2ZMjo5WXCxnjAvULNaXbv7wfixaSpg6sgrsjjF4XyS2m8abMr3CZWCGMseL8hStuj6qEJBR6NdFChwdzs1",
  "key19": "5pRWY9YoSS63AVK1S2551mPQpBcfy9sz8z3zTLTgTGhV74zo1fd9sJozWM9kGMBPJcixxB3v93HA2ZgT5qDzvAFd",
  "key20": "4zeDLcxAzjP3vUAoN9bL9goEAp4KRAFdVkZoNHtArCgUL6cMoiaG5AhX8X3JT4J52axzLfv3xv4v1U1TRKUgxe2V",
  "key21": "4ze8U2nS7RLdYBFdUNupwA6Kf6W39QQc5yxsh5SZ1xDGWGn5yZMhGeAcb78SPKchNLqcnqCjk9PL2gFSLkh6VY3P",
  "key22": "5YpwD3EiaPDisirKQRxaAa9zakPagxziJS42YrXhBDB8pUkGg3nb2Uwe7qCHya5xomNhKoBieyy1xHXrPaBzGFw3",
  "key23": "4DXrPUbpbMTHX94axpv7NcvDvEFnpPHeXGT8EuLJVGdm7SMHPjC24MmsdgSf1eAQax5TvxoyFckyqjzfKjsqaYY1",
  "key24": "GW3WTjr1qy6xWhmQq7wbmxHxDNqMiuZkPx6ydyGhW4eufbjURH4TBQkYXoMDMTTuP2jHHQfhknAAxRgvimMa8sE",
  "key25": "ATj936czdnZYvP2QNzJ1hrVCxnofo8MakPYxKG6Lz4QC54EEu4uSuEsx5ebuofP2BMVen8SCrjkxcPUAS2gV7cM",
  "key26": "4gnWpsHkTn7yVrjFvYvqJXLSLYEEXDvmD4JWk8haUgmv9JrG9EX2mXycQ1yPyL4ZyHThLEC1BGktc7azCskb5rrL",
  "key27": "cjZg7T932aRqwmzaxy3h9XNhY4FTv2Z5nUJa39ZSmTtUeyRLRtrxt6bvrBL5BDsVQ6KRPqP8XBuJtrFGDLVVGUx",
  "key28": "28aR8Ef1gGpmcwFZ2asxyfL6Wxaw5AcoW1UGkeMPx249DqbA3GXgXFxXeSawqY28s1WwLmvrorzaU843zuQwwWkm",
  "key29": "255k3Kmxh2xzrkiya4gfZE88JXzzNd3aaSn3gcSx2y746VBkD58Wx69c3cabXJTHfL5cbhzUwhK7Qxv8BQ6hNAe1"
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
