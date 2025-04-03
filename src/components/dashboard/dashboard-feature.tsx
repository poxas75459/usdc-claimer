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
    "51iEEgbJUbbYPYaSGgGTAKcne2FaRbTfEGRnj33L1SieeQ516fBjfX7F8fXPtnDU3sGQs7TJtTCb1zm28x7e6ibX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pNX2R1PTAG2n11oBRaDSr64mMWDA39xrUXtdrJ9irq5AbpaSJDjM8tLGvXt7Y9gicXedF8AQfFNj66xAsNPqe2i",
  "key1": "MBqjZSb8w26tzMJRhtCaAn3f8RTDUa7FMYTqyHFzWnYSq46AShAcAAN4k5e4Bm7bzdvQKA933Uo8BXMBxxpVvMC",
  "key2": "5Wn5k4izZkxtCgFgPvvFph1oHkMcrPRos9vCMSLopzHYHYAVVmjZ9JUeDMCNpkTNui1v7nLDkuM5EHu6Z2fnZkBb",
  "key3": "4ACf21c9QpZJ55LbgBy9mSkzf3SY5EdphGFjzXubZYwVNNGMQLU1LuqGYbdmWHcC4vFLY6auKWV63oZiqJYoEu5M",
  "key4": "fgWCCNhPPuQuDiYR6Lcm9MXCv8LUrFrL2xt64SxrTwTJYak7aWywr7aQMj7WcZvi2hYCztDuDGLpWS5v6xLKJdC",
  "key5": "5fWp4L2vyb5JTZVmtBhKKtZpeqxa9pPw456FCpKBm2mfTDuie5UX5YsgEhCvqjY7FJDvcTjDDdKzt4CjQpCBQ6pX",
  "key6": "5xTkXodzqLUFZWud8yuKFbBKh9eNcKC1WgsNUdMHkyAip9kgvb1gbamDD2deraZiX354Htcea5WrnjXJHtGbQ7tP",
  "key7": "4ytQPDXkeYg9pEn8CYsqNiUcHgkidgw2NAMLUhj8cxypkwdGqNHZWShc1vfa2Kt8z4nzzupgZUwLbsTJBujNf9Yz",
  "key8": "4s9HZy9azPcpVjMJmfEZrVbaWdpqZ7rRwmEbkYpMSruYknSnFDaYa1yWLw9JwXYDPar16CP3pRB7Qd3nMdkr5ohN",
  "key9": "4xvpU2GNeQ95VxtPnhi4EPwbAHUbKTyCcpdpfUnhf6uDMiqDGUfPLVvA4yvEJsAoNfvR758mGgFrSyCJjfwhpAWL",
  "key10": "3SXQxb8RXTgcrtQT9oyRn4AAtxPeVswLpLjNEDjtuu6iYwuWgutBLcCmQWxSjEeJJNit6HzBd6vMRDL3QtRjGoeH",
  "key11": "4yAaVpiuD6UmhFageAKi5jPu1UTZXz6SPSH3fcJM1wHochsT9fKueWHwQN9W4hMiARHLxbFDHqvQMs1T6tP1exg3",
  "key12": "549mLvPEyEeSGZ5NUUtQNywvVrXSSkyq7KJDF6Wab2TWXdBd7Fw8qxYP2DC9fBLMUcfVDLSWyACwem7Ygg1gjvby",
  "key13": "4xeVMUKojtNSUGDQ4SaLCqrQpddwJXUk95vXfdBJDZCCW1XEpciKWuxAX6z3qhXRoVAh38AkzFxQ6i88Pqah4NNG",
  "key14": "4aPg64bPxMBDscHJhssWFJabDRL3iNnW6fLgHoz83PfqE9BEgp2qQkE4daRKs7DP1adHmQ5Ee1HUMNpzYnEaYfEY",
  "key15": "66iEf2AhYsRV1zhS6yfvRE1GAD6uHbsCUAprFyqc3QX2ypnG2Co1mQ2Pp6LWxq39qLEcfvMbGNDnmGySfguipj9j",
  "key16": "2Ny7wo3w1jDZGi5tQYRjhAdqm6gT8qFsBg2yD3FVzgHKmU8u9XgWwxcdENciydQnjoHnUVn34t8PZry9DzeD4bSK",
  "key17": "3hLnkyZmfLvH3suGXZzXRPYciCkmo4KE1SVx41Y5JHuAozgWoCSgEEPviaDDv8YBuZ7er5yViuV5DdTe3LPcZEi2",
  "key18": "CWerV2jYk6ea72o41eig6m8fEZrcBJQoFkezsk9vTJhXsukutbAgWRVaMa3L4warEb1aTqcra5i15zNPXt7iWFN",
  "key19": "2H3Qp81VvX5X2m7DSDHDu83PtLd3P2cz5PazYHCi9SuEvoD5F6cYrp7hs2uggcDcmYS7QB9mGZJhkZz2W6r6AJHD",
  "key20": "2hmzEoR2okwFhXakf6gsfpVfrmVXcrRLyxrDpSvSf9sAMJ5EduegfFQkhU2a25ujqYFZ5NrSrB9TwNGQcS2NjSrG",
  "key21": "2R85VxFxtusx5YYFF6f6zsQ3LCXsYDBVLa7ST2nX5WBeYgJYBxCiopbswFJSU29q9u48HddrBQP6K69dv8vvzrig",
  "key22": "uMGqfzXf4mYCr4EvHeDjM6VMujG3vMvmSeNm8qwXYBsQvvX1Gczk5STfcA2xDEZFxo3fEqT6m32BZ8AWiV8Dc3a",
  "key23": "78xriT4rLB3W4v7e9PMRFu2ZhtSwunyAf1NPvHz4xffN6JFkjvFdfAfarSd6vEwxXTUCg3oiDHqF3bTa2MBky64",
  "key24": "5MoCKJ1XQCeKJs131cgXn32uGS2NPgHNgG92NnZo5sNvGZcwGoYMC5eXoxBhU65F3Xw464BXqRzp318gHE4s6van",
  "key25": "41hu9oASvRKVuFDTsbbg4MrU8cvASpxB224wUqfiVPr7tEdN14o2c81dk5YkkLQJyHbXhBL1ZDMyTjvpskwVEwhd",
  "key26": "42QywWnAURE9hXi267CCMN2u7jL4T9yETaJmhbkcv3c6xqdyzWBkr4hxsFRhJiwZAJzFKEuEiaeS56mweYhK5MBp",
  "key27": "UFUKpNSTA64hx4xetLE3KMuhqrvxut4ANhMJPPPRvVqs8Lz3x6A2e7KJayBHQhvG153gEy6BNcpHTDQeaCgULkC",
  "key28": "4FjRieFnEpJRuHWcHhiNDZ99XZjWtBP9fDyYY74ZDQZBGUhkyqRCpFVjporNgZSD8zWQv2v53jhTbStY1wpZ8Jh3",
  "key29": "4DGA7LRFBKHTzihKyq8mFvjmX19PPwZqeNzaYbCwAnGmp6gbmDNEH4etTx5cF6npqg8LgUqb5owwKYV1Dc1TR9RM",
  "key30": "nNW9dUDDE2fFgjq9tWZxCRGvikJ6UBzs7DeF56tz6gLmTqgMZqKpFzjgmsXr2Hu9EKo9322Cb6VzCxYCQAxbYo8",
  "key31": "3W1PydLFdxtct7S1uvnE5zZqgYAyXdAi5jW5Xne6uRYki6M19E6vdz93dLAVagwAdSFiAJyEuX36L2p2stQSMoQr",
  "key32": "3s58BPKzespj5utUhD4RqnW2BA67JWESji9zTNstuQsTroQzuTcrcvKgo2E66XfPaPuG1JkMkePkhcqu5GBi3Gf8",
  "key33": "4gieLWNbVzszV3BdXjAVQCTJ8rtY3x2fDka876oei86rTtZrAjAr2Uwawnd7L2riic7AqEEcgqiYM3zSwMik65Cs",
  "key34": "45g5uEZHjDcM1bqfWscyeNk1tpzNy7V6cEs72hLVigfjh3SvMLedxtJkNxmR8kqgcs94M3Qi65bXDyB5dgnuFEoc",
  "key35": "sqZ5bz3gE18SGvcRVfVGpaag24Zg3AxHBXcNsgahC19LK6VoDa9z6gvMqyEVUmrGWJ9vgNtmH2q6FZCQD9EQ5KF",
  "key36": "3UPCnTkENy3kFYAsWkYL8FTsLTQGny42xJqan3HzRHwFyfKz3xMEJGgkfEG8ji1X8QLwHVjsCa5BpFs4uW9ZFwCK",
  "key37": "2iBeobsiBja61gR2492nHPZJfWDtB13ULrXB8aHBECxcnp121P5QDMCuGf11uXmm9EbURgsQUDQzFdwBmc8ihMyB",
  "key38": "46uQ4KCz2U3Bp769xRfpULRhkU9A3vgqBt3V5Nbh4tovzFVbGpiRRMB1oNDWJnxGunLNdfqxg6Q6vG7F37wuTA1J",
  "key39": "5pZpCo6Mg1eJWJtacFqXLAZDmc6FYreKUmPFkQzXx2bET8yZcm877SNZK98Ksi3uQoE8iaMNHCkKJ1cTVNLUetFc",
  "key40": "pEs45vkhwAJ2kzkajSvazNi1SSgTZzMs11Pei96BUJuG6Tvy9ZV9deku5zDS1wpZymu52nLvDBkwMM1Ew39CwyV",
  "key41": "jSCjogj39x8BMUjapkbtyXow7iAqeaCKVk684FDcvUscb6KRmymnG4ur7cLvh87cN6uQ6cDZ3gpPj1A3CgcGNjz",
  "key42": "2EF7r6L7kbrKZCWeuNeircfoVbUNuinko2KLbFGLiuGRyoycWduFHKfbSu2ge7jegWprpEhLry1AG8u7t9ydqVkw"
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
