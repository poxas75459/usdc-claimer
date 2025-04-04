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
    "4wuNCRzzcAZXV6uFQ9RCam7b2fTRKo1f3gv7e3nFYLTaZnfJx8K2pNiYkQWPEtpCQRJdnnrchBzxfxfXZMqzWaKf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aj7gpt61hB2mRq3f13xK1Aa4Ea2iDwpSLQ2aPiQLhUtALVnN7xe8FDxM6VY4fcFi87GBFjEhVzA2WpVdpQ49aX8",
  "key1": "4m4VUg99jrZTUAVx9S5zSVbDPtYq5PCAUUHkPizAWYheCbbxyiB8teogGjGXtLJfNAzkaQJSDashaQzhYXGhweZo",
  "key2": "5wAmZfKbs7AyeUeRKhmzTxWZgh4hXFy3byWRDSqkJKdQJyJvSSPCDAo2btKugFGWiu43rhKyUaGQ4ozfm9atsbaC",
  "key3": "2PmtSrrsGF7UmEf75WwARXdxSpDH3bBMMd9fGRBVUfezHjGGAaon1yK9Bvj7FBJittLE9R6uuwtPuo4Kv8SpiAog",
  "key4": "5DVp3vxjrwk4Gd8hJ2s2Gimd2581uozwHfsfVQYfRWRmfUjJWquonon14PaMeWXZdfcLbBxWJ9sd47ij2WWLBDQe",
  "key5": "49v2Ze5myfgCtGPMadJ5696Kn7zTiNGAMkZRY6wGrAroigbJbDyjaNKXT2hpLtVBaoBcFqtVdXgiJkRjGC7qtaVG",
  "key6": "wxCjxqcu7kMsgtD8n2fFWJsuatjshm1hXZN4PJBSDXpkfPGPgWGGJ31iiXQWuDCu8gZ6XNE76pfkjhK99HYPrVL",
  "key7": "vmjk9iEbKTi8FUnTDetnJ6yLQnzhHPjqKV8AhFF9xW8La1DmCFQdFwSZNvXDXj26h9xWmdgC5ZPzZM1fzi2VwPb",
  "key8": "4ZK3FKx8TagB6qdZsiZJZmX12AEVjPFkac7mAA1Tx1SDwYY9RMhdJaH93HfmU6u3SXNF5Gf7FQfsgt4gaboxL3Pi",
  "key9": "fzh9AGhDJNJzGmTpDeCiTJFtiDy4Y9s5G3K5WkkKdN3PdLXfUdLpwvRHeBwEErT2iUM3behgWvE7zfEUoEkA8W9",
  "key10": "26pVz7BiZ2j8ihMierAwvypWNK77qpDWm27rQUEUVdf8wE1rAUKhGhFdjx2Wzapx4oAwQbdPA8V2GKYYShBWYcD4",
  "key11": "47NZk9WJHiNnRwFTr7UYrdQ3ME63gBDjnA3zsGWG8XGGoggaT6tJPGmGPL4MJPfbHDnTLrE6boLqGbBxEL7CoE36",
  "key12": "L5uoJbQwq51vmoMmEz2ogcQYVN8LRbmLTkr3Q5eQLZ3gVjLuD9gVSdSHV2RQpp9rbSSrmEouTcV5SaQ2nR4tShX",
  "key13": "JcG25qSe7ifimy62FzwxkXfETpwM44k9XsZYcTzpNgn7Lkbu8umZAKXcy4HGNYU9DTMcaB7UkD6rjNT8kJj2NVa",
  "key14": "5zEHC1ayHmowGEGYT4GHA1vasQvonMVCzK6p9anuEozeScufXA2KmQ8HtWUq9To9R1Fbek3xWxvniusdPgjtjeKy",
  "key15": "ME8JC6gf3FgL4qq2c4Koaw2NVZYXwf6fP9LhHaj2cKRtUMD3NDLv2HygXuiiQtNLsEHCo3huP3h6Bf8DnFY5aw8",
  "key16": "3X8RokHY5TA7jVQADPYP1BjCJsN5UocMuwrp9tUHxBU6BwsUBhe8yTRFMYiwNoA42sERmtrxi3UKn9kmK5WrEZeS",
  "key17": "44Rj7oewWQJWx9khY7oNhDMxb9UNDPycWZnYGWYrAwLjF6xUG91J7T58iDH31dEiXn4pMP88MxVVLNw9FbzcnHC",
  "key18": "36snBHs6QdD38UoQd9XmY1pqepLqxKn869SEsL9ZQt7bE1rXENjfkUwf1pGapp3SiPWnAJLAgx57pLeJzLDmF747",
  "key19": "4dPJnnnG7TWtg1vQa9jdk9XpmwEi2R791K3C9xT1UomiXZY8ktxFHSLrLbb4vwTLCW129ApjagC4TK4VXP4S6u7J",
  "key20": "2x1dfyEpok5FYK3RGmxs7SBZYp9PKs8HVNSGYFVjWPjX49pi7HEErEbGLSYRjYp32F8VxMNEbDLjqLNHRF9EFiSW",
  "key21": "5moUC3SdwWFbbC8sd9AuUCN3RBYmG9xS9zzBCxMKWYyhbBuGuvtMc3wQTr7bLVDvhH4so7FxgrMEgLKa1wJ66mAm",
  "key22": "3F4omppaFxhqYgadVBtp1jsQwYFzZCuDTCefyP7iYwuhVBbCtJViueu3NAyGWdT5SXwttTJ8nUmBeKiYiAyKX8Hn",
  "key23": "3hJJJSw2hcFiiqiDCpinyPHnL78oirE5p25Z3PUz7pDA1po9oUKbmyfEbNHVK5hb3EMbTeXxXJs4wdrtXqKNu8NU",
  "key24": "SLDVH5mrm5eRyAg46RVxfH3cBtH6EHzq1Azvcn3YmJyqAWRX5zUJUaRe74uNUc1yo7X9ygBuNbNh2dTqRfHnZ1f",
  "key25": "4DcrXGHExB7kLF9BAtEqg5YKT5yN5Y1g2eieW21PjUbnxzxSGuvrQEcGyUqQjmLjjr311xrRyvNNGb93Q52VjUKV",
  "key26": "3ivjnRYUiDQ8aYart827XdPeMPpyNcf8WQ7oXg8w3WVVjwnodzmZeeATb9K2xgLgL3C6D75EeYyMC8UWfY7jUu1o",
  "key27": "4eDQLEQ8MVcPyfAK7kWkanqaNgoxX7UjQRU4JuYz7yMKtKM7rsMbPFb64vUEHHk5smF16H8JDfWwH8faxAt1k9HP",
  "key28": "UcNSEG8Sauozk5JE4Eq3D7MAwokYdYSU4PtdNRudSJ14gbuZwWge8GftyRurZJsNnA1wUiL8uEZtnJCW32oewqA",
  "key29": "4YP6uTf5uSWedMWkC3NkgTPA7edtn6JyXaoG5DgUWvQMEDscK4NbrcNoUTMsjaGDdPy2mZvFiJVfFLS5ogtGiTSF",
  "key30": "wqsk9uBmB6a2iJtJSmytr4Btnygmm3Gk4jMfdyDEhCKXmpXVo9YuNQj5yW33TLr5ZhZXrZzXoisfwV62eTjbdwk",
  "key31": "5A8p1YJ986YWR8uzz7dqLTEnXSHZqhMeHJGmCcdxcFxdGhrawofHdBNVyo3CQQWYjSa77NwCXT6bDj9oHanc2RRJ",
  "key32": "4QPSaT4dkEZS48MgFmpdqXPbdbAwWLFaHJn77729tTg5cYYxYUsFBq1oMgDinUMH6B4DzRccciBjoqYX6u7TcZny",
  "key33": "2GQbm2ri9iJC8qzoihp6CufEnuNLsfFc957e9Rq2Nbmpu6JKyoYeBnge3SDUQKvsZ66fNDnj3TcQvCMMcYoeCoZT",
  "key34": "c5oYTfBwP5KU9wdPrLWCbrepACS9zXgUaudFwo2KhrqE2fq5LSTNvAgz8sVZUBt1AZRriH3f5iCNxiAsuyhhLLd",
  "key35": "4Hbm3A3Q15uQaUhCRNsPb4wk4zQ9rpLDhbNsibwxGZEmoeWAKGSqRpW8VeqdeoHfrNQbiTaGGgZjJNipsAMU6Tq7",
  "key36": "21CxUov4rszMrUL2jJ3G7u31Zip5wzeSYBZv5SM6JheNuBiAqyCn7hvojFHKBGfacLfyvmnYSntnWafkfph7itEU",
  "key37": "5G829GACaPxo7gTScRLg5CHXCPvvstm2uMy8tSEwEAACKsfmVs2aY1FFuwawDQtimcgbZGkSG5kwdPBsYbWQsacx",
  "key38": "3LvTEXs9GUdKVrzcoyrY3ztuBgYEHdJGYAHtWWnvbN7NZrLiFzMe2us3x1AB9TL1UsbztwA5WZdGDN2i84o5zew5",
  "key39": "5SzQUsN44HFVup7SDpdkQ4m92dXztsuNEusRLfBKB7gCnymf8YhMqAYKYVgQQzvBTdZMRJ1QKhPbuCKRpvT4L2gq",
  "key40": "5zHG99X8y2gWJHQ43qh62VBdXJLtQ3UU37yghqZqxX2doR6GgJtdkCY8WprxAoRSdkryK5gNqgHNCiWaxwLmSAku"
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
