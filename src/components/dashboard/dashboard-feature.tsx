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
    "eWcFBtC1mS5UGsV6dBfTedPF5QktwAXe5U3MZ4hWuKq7TyQYazddomSR9KYvLghHWEUoxvJG4CwwsgARFZJPh4j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EZApzA1paTcdqfZdHKApFkKEbuXZPALio8S1FP8BqHWwuSNDMev7r68m2RnFcazwjFXEcvqYdkTVLGdG6KDjp64",
  "key1": "2iwznu8Tq7qjzfYNYYuQH3eLg3g39iFigwno1o1Ck9p4xctnZsMkHqj2oR9ejUJx8fgLTLrcHi7pMSthtaGSH1F9",
  "key2": "2hRfBS4aTvvWMkdGMoLKcUGk7dgXWz66aiKWyc32XMm8g8Kgs4VDocXAjXaa5uLrQchUKEtL3XsQ4y7jQVU6rz41",
  "key3": "2een4nPSfKEUQXueawkiZ24qdo9PTQrbrgmdDkN7VeR4ZrXmsyGus7p2RJSP4e59T249pDspksjjyE6nC1vMoozQ",
  "key4": "2dhh9PjuSpyfQt6Aqn63Y325utuhUWvFouHqXhhuRPRy7x7FvQQC8PexNJ5WBh2d2u766eKZ2AmE4LBX5ytH6Don",
  "key5": "3snVU5KpuYxx2RBTBanhVTmpWr3zKaBR7QBiiZ1Ph23EyCFhxva8u6Mt5KpDbSgbNephiAy136XtiF5byoiwRTAL",
  "key6": "JoN8fsHo9xjokkyWpHYYUeGXHwYjL43hVjUzYCeNGFu8fUFYDgjV1DzURH9UpmPCpQhNEywjRc2Fbcw48WxvF9R",
  "key7": "4SyNvtqDxfgLSopet9rfoe5sG879iccZUaCs9vXqEQEytLKqmohVShXxbiXckvh8y2tSEphzGTGbC7LWiUFTzjvk",
  "key8": "45iWiGBPQ4G4rkD1VzvZeAc1fYsNUJHLvC4Amw8VQtJf3zeNonPhKjivo1KcJoemS8nwEFyiaVAYA3hQu4BDy6GD",
  "key9": "3hvtvLXZY5YYn2ZSkQXViJpZtJVZgta5XYFEpE7LEcygrNiMLEMHfZ7Lqanvu3CiqSPzPRo3yhnpsyXbDUr1MRZt",
  "key10": "27X49Wyi1YNZwhkpa7qZHFjfaKE5f6Ps43cEsD5QE4iiEbciTrKR41nbNbPTU9rsFciNonk1J2jKDC1gemLyJdNB",
  "key11": "5MGRKJiWfx3VHifZkz99LSVrGkyqsSLA4HpJdzZD2W4uULFwtF2Lzv62ttXDsSsDKD3yv5VYXKw1r3XC3C5C3ixr",
  "key12": "2gXehKqzQCxpJj43RRsNEcpXa1dTE1W7K9eWGYitbx7PP5WLxFCmr6tpB25GnSdMVGxtLppZBBcVaoh3VojB5fhC",
  "key13": "2Qx3uvfQ6Rh9wfuLETM689ubrXuFGkRS3ecDX1J3prA5dKgAWCNbYZQCH1mN5Utby9vfisUBJEbpdGt5ybhzoF46",
  "key14": "CySyUy1P2not4NDkYoRxKMXDYoETXChBEqFu8hVtKa9tbv17NGGjgDiV5h28yBbtMC58Pmxhern53s1Ko2y3Pyt",
  "key15": "3nr5z6LYLF4hEgnGNeGPiesUBJDi6o5knr44JgbtmuGByzkPPoXfqxWrDC8hoTzndZwbJ3GLPMqdYKpBzE71L2DY",
  "key16": "47KWcWcxfn9zPnnh4kz51q1P6D8rmWh7DiWLm26GoWkz1TuPhvWrAPYoqhFEQ5vY9sjtCe6AU6rHmrfjuGAVUZQV",
  "key17": "3MZ1Ze1Uc6rCvGFKQeJaYXGFbzq7DF7hx8NTUfbbzbzTLisFx5embGEMpqAGYU5wSrsxhssx9Wcrh8mYw499PvbY",
  "key18": "2J1Lm39VTMaiX6VCJwbf2LS2a1xi7NeWJqfsjnhkdGVdkwzwLkX3XV1ovvD65x2uLGmBaj1xVgkXo2sCQNVM6msT",
  "key19": "35xpB79WYbQNsmv5v1fPfMkioMq1ufLzw6bipvwLjEwxJtSAt9b1RZECw7r2Lz6xZuTTnbWBBn2dhqNfGEQ1JdEq",
  "key20": "2mSfYdGbVq4PKME3ukrSFwDFjBzjmqLpyrzojWuhffWi2sYt1LJ4DgLBNi2PkzvhMYq1m1FJThGiFkdyYPTUNLym",
  "key21": "4Sk9r3WEpf2NCyn6VLdHBqMtYBiCuUZLsRsXxjngYvX7G5kQk7ZBWWdAZgE29oxDy6mqR6bNw42Vp5KjkCQPGkwp",
  "key22": "3xbpGaBKSv83qxZ3SK6HN83hc1WmxwUozzgnLBp3urGsbpmPjbHueZ9hMQMUqa64xqDko7RdxFRMCwepuYok5p1Z",
  "key23": "5nqdxENuVPSbjmwJ2Vpj5pN6GxjSNbZzmJzE4YR1mhypuzvGcW2TSW2DZiyoMnXguAnFjJJyBVS4PE2V67HaPacr",
  "key24": "2Fu2wBBa9j2r1mmsbBT7hfgHXyYDjdk7FLRgSzuxf2PwHeCbqwaiKd7UbtcuNreHjChF3T9urmUGDRUfXbimNX8R",
  "key25": "4kw8CNVtspcjgywAoXSxr83vsCnf9PeqsjK7L3GokNPG7Qi7AGBC7cga8nMYxoorhzg36vW5cDL83UadeVtNEfPj",
  "key26": "3RKmyUZA8WPpSFtLicSmXjzVHpyvjeLfgyv9vCP2wLZZk2tXtNsRE5GXHUYbYFMN9iYeCGKHs2DL4jBCaYWgBBKb",
  "key27": "1qE8KBVMjE17r4ms71nkYqz2kf2uGf5AeESz6XCVgXWtPmjEzxmbbXqVe9AsRnVStnutczuvhuDJdVGSUouW3ZQ",
  "key28": "21daGM1RYpnwLoYJQAbUxKLwXGNUsezkoo28r4Di69nQTafkKnz8RkYHUEYDFXcqi7esrPXAW3sazBxoJq1jJBzT",
  "key29": "5zAy4WH7E4JYixVAYEjtgGttKzTLC3dLB62idM1pyoQkzruDipqXevB391TpfFXPxPL4Lubrfv4Kywb3gybdYLPz",
  "key30": "57DQWHZr19JhYMyFpivC6CYHQAxzGjory6FqHCaUMeV1jTYFGg6djXKy4Q3SdjbNq8Kw2FroJk8CpVidH2V745oy",
  "key31": "63XBqyVU4J1uCjYgxHKhJZ2q3m4my5NZqzdyaaMQWGNM7kNfR2mZz3d1f8Qns2d1h2xgTr4KDfCxrixofj9F4KaE",
  "key32": "ByfofqnkiMCXdk2G3puXFEGsxrfozpPrTGs4eZAc71Z9kdXdcVBdtFtgaQxRzrvUeWkP5Fi3h2JK1yXSB6CSx1Y",
  "key33": "x6oK96ohoWYr7juZhAEGsjQrjNXphMK7tQjjhpUdyBekGgSWpHQYo26bSPgrWNRhKoiprGCxKABra4HXwNezUnv",
  "key34": "3Xg3UtAGRBxSVcFihQ1QR5XrKKJ9QZNjuLTaUePrQNnmaKD4iMgPqQpy7EHn2qDS924c5NjQneKqoDoVLrPH6ij3",
  "key35": "4PT6DS36wxm3g2N71S6uCdoxpWrAworEVSAhLbMEwDXggLC6YyWe7K2DqUzSmHg8tfuXPpb1KMMqQwdNPRP9Ks3T",
  "key36": "2DYjijPVX3YpDXwChbTqaeuTuvNaAF9FmcNyX9iMX7nEHWp2ssi75bqiEVBgpyo1E9LXFdKhJ1K2BPzSYhctDGeP",
  "key37": "2wHb45Z8eF4cJZe7XeQ21KGpze6nPbyC8sGDx3eqcStK9fddpnsEMHfhbUBEe1Aagye5BdSJ7ipM9cooAUWxkUaz",
  "key38": "L2q2sxLetLpHDQvCkfhWqKVdQZiwZtS49sEUQwFRAgBtAFnZdzEwF9A4FCkpAecqsdc1vNmtnGnjC1jvEJRCzpk"
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
