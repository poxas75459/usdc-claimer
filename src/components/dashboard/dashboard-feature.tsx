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
    "31M18hkLGgnf6pDjU5QWc9fyoyyL57W54QYWDvE5QWhAL8i84zRnbyyeECq8f9VE69scfvH3qcayKGMsPYFC7Si4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4paPcGENxaPyPjaqHiGdSdaufGwjjFD5KP3UNbeLWWPeuRxC5djCEjCwNseGf6XFHsFNcdyKvjU3uZRTqjYMTBjr",
  "key1": "2CXxdD9y3yKvjympXMiN7ctXbXcS948bDGwChNN3abV8dzPbs5wf6vgvzYMq2ZBrhjg4FH1jG692J8x9rceagusF",
  "key2": "2vzYDT5oCBi3z4m6g1HxiGuSUDeo67zJzm1GyRsqY4iGTEPc4rB52qnU62krqwT9dqan3b9y79coEJ4jhNZdNCTY",
  "key3": "3skCaUQWRtgDuJXkhETfiYP9FqgVnj1ssTR6aqvwxKSohS7yA1xaRNcT8ZQC2TmLZ7zocgJcRCU9CQAXL3ezuEdK",
  "key4": "5L5Rx3gW9VqLq84FZmTnubnozznEWFGAjYLWSPMJAvKTH7gPfgwYLFcxWhYDRVUZUUoGVt612y5MCJDoCyQUxn4V",
  "key5": "kuyp5C9XvwKjfp2kEPrXjcDPt6khy5CGatEv6qzpNd3Tm92LjjLNpN8McDe1Tje4HDnNZgoh4ajxxVDt6VjKkXX",
  "key6": "rstrqmwe2JkS3AP9c2hUS4chGfWxGAWVm2df9Ti5wGURx4aHrsYQVnVDRWtj3MiC8wP6CT15oGamYV7HksFWCA1",
  "key7": "tKwgekX9EaFPNPmZBAKP4F4VJXPvdmTaZF8FRk7zQRTtjftgWSZHUiCdPg1WkrDdxCcumDAf55EZEn8KUp29hjy",
  "key8": "5tvCFrxZUZo8CjHD5VV629K5y2BZdVyCJ5DCqJDRkdxBTQhGUKdr3Sk8KyXEWB4amGHbAhmCUTxnCQd1npiq1xQ2",
  "key9": "2ApSZW9VFYYb72fAPXMD1aNiBwysfbxe4ctKCF25WHfphkh4KKJjBiHwwFswZrRKWA9BoS4gaThAf66cLFqvvTY3",
  "key10": "7XQcMHFEbUuovhjUdH9ep27CFrZdsaTsSPNzS8NP3VvMqnuJhGiWPBHkjd5yki36TpfUoBKGXa9tDNqMhJDMi68",
  "key11": "4xkbDAAw3912cKgLRfXyWCJZ6BwnYMy2qQrt1JFmWQsFeKZxDMkCE97Sqg8doCtmiDjsGRmZyCm8o4o6Guod8a1U",
  "key12": "3vj8FVmFhNAZXTEu9k2nzRZzcWp3A3LLKyetWPaEY1CwswHFiTq4w8yZaybjAZuuYQXxUAMEZ6fvanNqe8tyBdq",
  "key13": "2nAWBx4NfsQ3TEjaHCmAuAGoCVirhDzqhSGPV5QpLCSh4SkzyWbYfFgtuCWaxEfGXYBU8frGyqQa7pNu7AFNgtVg",
  "key14": "zDZyX8WWgQdPNMJVgSeGNeLb3Ljqku24XXvMfCVgGwt7t9ssAP9normgR7QvukGoEUgJAL8t1PQEZ1B7mUtz6Q2",
  "key15": "xYGGMi4XhoqVSjn8D6Rg8ri8mZ9TrAu7V9tJCbt8nrcD9y5M2BfQD3ekHdDHaLZrzagBWkb7NqgvAjzhZmbigyr",
  "key16": "FmG58WNKQBaxvoTrxEuFR1sEaQu9jfekYSh9peuJXBMYdKR6TukNYzuvv1HuE1Vf69XGvhDLaG9u31ZkpPGKgFE",
  "key17": "57fkSYRYN3JtgpYxMK6nzTi4yVLXkwta1HBxJvhKdHeZGP1pCaXHbgceXLc2wUh57oGn3XTN5q7kMpEPBaNBAESB",
  "key18": "4Tmyg8PBuiWyhnGYDsFDd9RmmW8Wve9JwdfzJayN8SUFn7LNCfCH9tArrDmUeVcYLoGh7tMEt3EDB6YgzLa9jmLt",
  "key19": "4QfDepA3ewUFNbWuAoUnakfjnshEHHMhRLLLxj21c1Bia6AidpHBMyACpszbxStPx9ChyLeHeLr1YB3SNJ4cHkhH",
  "key20": "2FGW5RDL1jhxUTFm7NkjEXaQrwwkJUQTVSyy6SdRnLWDZhZS9Lpki5jELMsLxEtJgwzZAVTVRMUnszqwHVwYaWJj",
  "key21": "4SPjwYh69hMrcLF6PZCtfWcyqnf1TziUwashrdFAdcyEdXUxBWidUJ4vs3XPps4LVeHK79jJn5WpsUYso9Z3dwUn",
  "key22": "1mz9Agqk9s42Xr6Hah1vhKXC8oUbXdgRkfWESAQ8deGJJ6jCWwWsMVK3K4TXMGmYPmSa8EHsbsQzdqMcogrzCv6",
  "key23": "5gYEkEcmurmfCfGKcd3aXvEr8Uh4CKFfuf6HjuSiz931orat7pTd2SBnhFkaw1g4TxCjTknddo6mQZxkZKv8tC96",
  "key24": "4ZsXmFGXok3rZzpNthvEM4EdmTpZkiPZsmw32LxW8YS17yWcBaYCm2DCqSrUvjSRhoXe9j6DsMYQp5MCeCeY4LFK",
  "key25": "2fdh3bANWeaX5xBu8CD2ghxeNuZQSHhftWWM3e5vkhfBuy4MtfY7r8xfqU2mZzsKJRiWD6c3gDsPMiooycz36QVM",
  "key26": "5bcPGdTsku7PsfWPniYResmJRBNpjA94J3PZv87ubYzQrHx9jfByhUYDKCUA4XjVphKPfn9ihzSdfCLdxL3JEm38",
  "key27": "2zKuaFfnngQeQmpKR2tSJQaD3wieL3MbvhHwAUYjgu9sE5B9KAwLKSMCjAdyhFP2z4XBaGnqZMbfmpvHmCDYY7hq",
  "key28": "b2TAZYqcRi6YJbwqVxFLfPz3JoCp2Bm2tEgpijBhHc57tfiQQGhwYjzVX4vbfgV3JmMrGMwvvJKgv9vcpiqQoaa",
  "key29": "4CUZJTZHBaQKLUrgL5brDJKNwNhYDgsn5CQG4saZH4r9kPx89LNyp4diDUM1MRGXAA2BPgh4rtzwUqpQnuxKp7CU",
  "key30": "3EHGSr7DHyqJxedyUEzY6hFaaGS2mxbAEydV4og52XErqpociPkRPhBdxUXqW6PNc8jr3BuC9jbKrQvibE7CfKof",
  "key31": "Moq817B3nzL216gMPWJuA2uCWHQm6dNwnoWdc23NTjqvFtSnyq5qqCW7pBe54SoqNMLH9EwMzNcwZnwseVDcMXk",
  "key32": "34zCitqraDCxb8JmcQgqN9qUfPWJqVYDwjzgmXTkugdR33tyRRykP6t3eqYBzx3R7Xi2EBEhhWuQVww6tWv3c2BV",
  "key33": "2TpcYMK8oWG6271mZPPF53MAarCvWm4kWdFdL94kzzW73ghiw1zLWMMrbdrdQVjXEZ6s1hfXugv9Y2URKuRNcSNS",
  "key34": "2oEhUMiH7hd81EpQHxeUAbtJUE14A5ZiUnvUMjUsMPfF7RdK6ao6P1HMzcd1mLVcUXpAfGwx9J8xV6v9v7AVYL1A",
  "key35": "2WQsBCSgaV7VtSESBxNhtY9sVEoVTrK4uMwKKhQSZDf3aNi8p1NDGSHwgTrm7AueoWk5kEeYcVKKZznDALV6ntFD",
  "key36": "3hP42pJAXyomq6SuwWbvvs3nxERSdurxHA5r7WnSPUaApHyizFBEewUnaKoGtpjdBXFnjspRFgp1pLQBdmGER9Bw",
  "key37": "33MsGkNnmr7LGFSKLkx6CZEq99jVw2sCAWebjf9A29dcinRAK9bT6W4EdvXS66t7Jt76c22opBm6oYUyo5fgJrkZ",
  "key38": "3T4nNmy3bbHuZ59DJKkuRsURdGPJaBJXJMyCjmRm5y4KBFti1SGeBAbcqMjpGpeZWcRdjsjVNpfmAxSfXMgEH4yi",
  "key39": "3CNqygmU71UQCT5CC1raWP2VqAZEBVNoKwHqiTcaKoRpfCNnJgivVmiv6dKPTzWq1VZ65NoaY9DNPh1jtBfnca7e",
  "key40": "qUMd74Zyh5KRPCvFmxYQPSFwQZAuqqB2BNHAC9Hq7PuKjztaWsvRosBUYWiSTXVGN1yXzi3jkyBpMubsBtBzst2",
  "key41": "5iM3mhE8hPv6fT2TcoDaG3NDHrPpjP4Y9czUcBb2Bh239WNvv5j9LtaC8fbgwY4ZHLwCVnMEqeCgjRgdVydEyiBw",
  "key42": "461At57GPG5NXNbGd1ZNPCCJkVKywaWS3zDQ4B2kBsCud43oHSbhPFkGBPixbnhr234juGBAujFYLqisMZXU7WL3",
  "key43": "Y4JFYBDAxYeWjhEU3S6ACaQKxcuUHX44XYxK8BJnodk4nbLczRA89gTJH61JDBbgPzRFT81PFmzY9pXFo1sLsHa",
  "key44": "SsqQejkkmZzpe3DnfF3KGuPawDPBjqig15BW8wDK5NHG6p2jZbeyf3u6eDKuqVLxiCShpvcp1TmLC2eKRNGr24N"
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
