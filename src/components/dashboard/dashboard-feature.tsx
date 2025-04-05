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
    "5i7HDQEe4uDaYBNEicKj6BGu73NRbNFjGZsy5AwoGrJ2NDLnyedJM3UqP8aPZvXyRMD1PLJH46WAzTAMHewVUpzw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QJ1RfNEvPtRMKyzxZqJo6xYZgwcfoxuuuAhb8WjyWKx9fHp9yFGpkorr1Pz8iNYVqhfjWULn6RnSoWVojo9fwZH",
  "key1": "4yUpJX6R85FUqmojVqejiFD9vobhpyVQf5TSbgM8zK3LUymu4RqhriQktFKvTgULuQGuEauzWCZtetqqphyqF7sc",
  "key2": "51Zzc3T4ucp6p2hpt4SdpsBiS8ZL1z3HpkEXXNbBWyKFd9EAJfrxxPMVum6DvVQYY9B5NwTncbfZiacdvZ499SEK",
  "key3": "4UbH1Db2K3yegZZoAvTYxdWJkj5QG7oDY1WZpXt6fA74Esk8Yy12YH5ae6xGqMByrinV3BE3UFwuvmh5TuFSf9Ya",
  "key4": "4fyVZjKHCGR6wXxBgUPct47QHB5d6pDeAtGsWJKoSr2SDq6Vy8W8j7gst7yA2H3qLu6CZWhXTUrj4u5x8CxGRg9A",
  "key5": "LtGhibw2vTHrBmXjBcrogFvko8kyvSg9im9YigcNrDDAFymUrNVQ9FEm1SbzTx1vHmnUSab9mXmhxMbuEnvetZ4",
  "key6": "ExSPhVwF4iLR4q1862ycgBqSMJ7REP9NzYgt8Jctr8nyFvTsDvimgxX8Jm6HiXq3NQbmF9GkigrePyFVW3AmPXH",
  "key7": "3K798QrG3cR92yEMhULX2LT6t7wLGxWdP5D4y2Q4ddJdPRsbaMJm8uauWfqHKg6jLLVAAanbGhEot3h2C65vJQZd",
  "key8": "SZtsHNo5zcxf2Hqqo4Tj3YSXARfctYHPxwdj9HedfKDRqZE8rA4iWA6kapaZ1gtaKnb8mCvb58a3wkFTs14Xnos",
  "key9": "ioCef38VRRFBN3KGM3QAAZRy4tFRyZDHSUcVaiL3BY6z9gj64LbnDhyxvky1PvpvAyMt9JtufSzLkUADrF1t17q",
  "key10": "487Zj5bwaGqjVkJ2ug4hqAhawPdyTghBLhRGaWYMtxpScKuXSur4Z1X2mHqdrx6hv2AZ5KrXhXqJUQo9FtJgt8p4",
  "key11": "3nUMtJc9w65HfRJFiezQopEQ8yHrL4pZ2KbhoeYgzG3daRbWMtC395PRA3yRoohBH7QbDeTyrXcmhmQwYGJ7aR1L",
  "key12": "4NGuoauAQCrLCXp6rzsRhvfxnuVqCKNDGvTVTLpfUNeDEMEFciNL1FStzzNyzBcaBVJU4CN3Xap1WTu95Npg6mYk",
  "key13": "5yg3ttaeSPXPXiCXyPWnvXCQVEP6A3TrQG6paXbsvuQYG7qoqrWRzMW5mxvAzr6s9SWDAi8rX8kt7xTCauc1dejv",
  "key14": "2TuJbY9zacWGn4yBJKRY2b5DuQTa9mjT95JunwXZa1xYV5kMNkoATopYiQqJFd38CaQUShpJEVCr8efHaNGg9rqZ",
  "key15": "3jeBfsNU7qyvMHyQ23fyyDJxXYGcsjXsUyAbggEiyosdEexPEttMRwUkefCYWFY5SaRgRo37SGmjrZX7jHXC4G1s",
  "key16": "39DyKyAfUvSSai4tta2JyoxJvqJ8a8Q9nXLHB9kBz8uhDeUkLfRcu62MjsetWNnVDgAo54yrCwgrh6iuGfpnqm85",
  "key17": "4fpUoHffv32pmFPRacLLW59FaScGJWQGmtbSkPWGuYDm4FqRN12JzKCfuQgHNFoPZPhAhj78xTKzTiys7xP1RxL9",
  "key18": "PoCWvzvY8fYgUi4yC71CVBbyyeCHo1vLkCY7vbF9kYZ6LjH7VZGYfyhyF3MjmRWV1MiuhbFyc7b5RbLHy3s5wmo",
  "key19": "2WicApff6mdEPQpmeNPC1zZiryoQJ5BxjHkJhPQL7pmP9CDH9okoT2z8DZfjS3QskSBJbEJvxQQvS1qyJeQHFzT2",
  "key20": "4Yzu6VKDGvbpXdPDkNF8o7yDbfdni7XXTrZBMM2j7WyDmA3ZPJG3oA5Hw98YxVMdgqrqwiXtDXvkx2eGsFwr9nnz",
  "key21": "5DCjQVgmerzhSJXttDrHuREFQmoz8b5eUav6AxsztC9TMy7vt9pDz4i4of3CXdkfMXnkW6jjHnZGmU3iTstNjAkx",
  "key22": "5tsGr6NkXvxabw2zwVWZ4PevjRCSxeP3u9yHC9HLkc5Y1WyrEySZzLWEneXwosMBDVNp2AKJ79NRVsva3ho6W8Zh",
  "key23": "24uErFFc4QWiH8oxigusNbiKLZTenywkaKH2dZEfPtsLwTXxaa4gRuUzBNBBdMBibeizATS7xZK7dKEmXtRbJzpF",
  "key24": "4o3EKEg85MnyPxQZvZyoVfBxcJV1gNi275WVSeurDXqLm5XdhPXgVvZNTUVzKgJWvzE9nJCuZ8QiswmAfgQoqWiN",
  "key25": "HKHycoGBjG5asXJq4dBRKQV1ppKm8skyGdmsRbqHUnjKW66U13JWtsGMyxukZubSQuSdGnuYHpAnf2t8NeB2YuN",
  "key26": "AG9dJVWFQqfrHZV5XW8vsnsuPv7oAqorcZnXwH76AcuMRKDfdqekdajQgHAExDhBpVsMrK1pU1k5vzFYRzjW1tt",
  "key27": "ZBYGdpqYaQMicuHNgjMn37jXrTg5jjvPFMLWGETCRY5DeAAdvkn1FbqGLyTYXVjvQAKWnZ391gAtMdPYREbmBgs",
  "key28": "kjTYMKmavzqd3T9hx3X5RyQKVuu5ioeXS3ADBtNe6wibJAk5L6DuyLVeVCkJJAfmmoXrtKQ6hurrGkUmneAHupH",
  "key29": "3Y46eHxoWtHzwcEa8XHpgWn5hHxnay6LNU8aH5WuAxRgGHZg5S6uYaJF9qYxjwJupKXgk2FnM12cjEeGbwvTJVrJ",
  "key30": "2hSr6xgEmWdhDGqjGpJXvufJGbHM837cMRrxF2N1TQ3o43Qg734fM6dmKBfhn8vPTPU4k4pVjB9DkqAPhdo7ztdy",
  "key31": "66ShzxKsg34EAEHEUncATYmXYGHyWYJKQ7uVZWpzSPrpeyLLwvRdGPon8kW31HyqoKLMnijb6hdsvnbGncDjYRAd",
  "key32": "2qyPVYQ1hGT7aez7bPHHbyLCwNTmbvxQCCRsCXV3Fpia6MbmWfotJmhaJtPuhpGpRrSxUnruXQU2NmWqvikuU8nV",
  "key33": "27Zb2yx52cgvtZnF7r6JRCSkenuP3E33BLzReGoEN5mLRz3tePbGZEJ4H2MFbAsNmSChMb11m4NkY2ih8yBinELp",
  "key34": "5QEN6LtbqGef9QWMRPK99U3mGJddEmCBGbzEsc3Zg7pehx2aWXknqjxerY4foCyU22fU6XruTUfSMkCwKBEWxG46",
  "key35": "5khEfKNq3Gv4ed8DHSh3JGacTL3ihsx8pmAPn9cr7LAmvBtXF8iHfjv3Y8rPCgRmPr3Am2gH2U5MewAPM6SJKYyh",
  "key36": "3X4PScUDc1H3jRikeLCea8zSUX7bEHB7oPzWuxV8skb66B7URfjGbHFcEGwAjoie2ftAe1QkCrr9XcVb2uYEDvs9",
  "key37": "4iRH3kVgvkfrn6vY4GzkLABpYpyhJjGgL3XfvGnVdu5ydQeCn9kt3s4WNVNJS5EUcJpetraehiw6Uc96Rq1B2m6r",
  "key38": "4vCdk8SVmAHaahzogx8htkDK7UPYqit8ewDBy9rUdQ3MVgUsLXAPUcyLvQbmd26ogMN7WzvDqGE51VwkpTcG7Qcu",
  "key39": "3wZM2G796cSutURqCHD2VteP3718eHsrQQssWGV5a6YBHMSyG4gpSrpJ336Z9qQZ7FJd7UwCEWt9bHrnZgtH3NJ5",
  "key40": "4EJkpcecEGgypb7fC6487QWdLkWFRHdmm4BWSDKRRw8KWhQUGnX3B4Z3Ghdsf8paquSFbodBAipibEaAwtpGLxfA",
  "key41": "3SP6PRjiaSbfvZ2Q8v1pZsXYyBYz3m4Ho7svbHRXrz2ijeXVWQXan6GtRzYoMgLev2o6DwKCbcdx3vPY5caziQw",
  "key42": "2FgcHe6dvDMN1BtHDEZpinQzrKKn3iCqXewotyTuncg5ppidP3ewSMww6e5YouuFfcjATk3hYA4qjuhE7GotVQMv",
  "key43": "5eCFcV2zzBaaAVWiR85giH4ZKawo77wZ4FifdTGCP2mmEgBZpTfogMYvqe7C1iKJuj9vWcicVMYon5TPMndHTfzR",
  "key44": "4tqPJRvFm5Bng3PYWcpvEuHV5vQDQDu5huQo1gh685DULGN6qt7zBKgxj7dBd8uNYi2su42i6LkfJKKMAZnRrCBb",
  "key45": "4ot7xDih7yAUNNucksQcRMwjvuuGFtXdvkxhjeaaSMRRA4aWyqbBHrgy5iryu5kGYWbxnAhA7Bc2EKUbL5njoVB3",
  "key46": "4mZDvKGMJjdjzfokBRjRcShshmwC5zTmYmjcqFzpHFEjaWYZ3d5HXnRoj5N8AdmzDfUrwxT95WY9QdSx66DqAJvr"
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
