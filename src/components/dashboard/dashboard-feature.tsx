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
    "53zrDXxtV16L8dz2vPmNGtMm5ezzUoeGKAdvEWNBQmsX8aWoZHBddHWnpaB8jvW43dVJKLpdwAvAeLXHMowQbuUH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fNvvxtgmoxthje9bs2oe9SoMkzvqXYxEJcge3DoFzj9BNQcavF5wXLWqAeRJYxkKCHuV88zFDCdoKmMEzMX17A7",
  "key1": "5fboNqXRDN7cNiEV7VRAaST4UWn2jwRhoVnfbDsBapdBfsMUyuR3BayAKQNeHcU1zxL77X2VqFtn4dFc96Gsa1HS",
  "key2": "21M8FdmL3d9qPh1de7M9sNZJpd5HJikHSk8J2JSuyoxkJcU93P3J24QtnPWdXghwzEBasXQhwE8z1nTnHpTqN5Bi",
  "key3": "26W7kEh4tnD2shFDnY9dRiHRAxHMmjEnR1XUZ1E24vsvURym1YVasMA8S2m5S84Ra57jkqgc8vN1pbz2bb38GeAq",
  "key4": "2MVzfPjvKFCo2Uvwgx25TMNRN3jDRv7wBgoCc4vYMTzsjU2QQTR8zGcJjt33MDXjPBXSyBWuDBMzbcx4hwHTVsJT",
  "key5": "5FwtS5jihYAw32my5bczRSXk8WCfxUHFT6YUcw6iPuf6Vf4QDoW8Xqkcc7FVfmRznaFXiKZAZRkp91GxV1wsLtq3",
  "key6": "rzQs8vxyEp9vba9w2Ze4QoFrXaq43qEtCSJGopUSYibdg5mpLQMcqhCw3W8zBQVA5n4uHZz8ToDo7mXEeH7WfV8",
  "key7": "fv5PSymMXdcwFU8of95SSVmxymZYkAFFZUuGDk8NrKfmnzBQ1gQTFQ3BK43Yk7MLKfCqjmE9Xjxf9RsmPfR8STt",
  "key8": "42YPXMXAsVK4EXxNvH7EVywvWjonn6PGAZSDfiPjVVh2bUHCz5fvf7NpwbB1Rs2xDG8wMv8AzYezEGoh7gxX52QW",
  "key9": "4LK1nmtxk4wkvhMvxth9NiYnom2MLr1X9Br5onJeYPABgw7sHHqaqkyySZ3ZP4Sa4ikJsLoZbrGSreLgLBPByWze",
  "key10": "42b38r6dNd8AzvN3oZf3DRwh8UfP8RusHsU4fPnQToz6rLzK53MXJnMGktfsuinYn9ZUrrFxHvzpqQAgxnutrnvo",
  "key11": "58GRZMPhh2kWjYtFUN5txp6V1b2pb9spSGNoQUhRDXudBdY9xpHYxFVMkTsu54rm9ycLKQq6jwUrQ3wKewZx9RYu",
  "key12": "2JsNEXKJxYY7FiQLUe4rAcicAF5Mn286koSJUsojQxUcZKx2UKUacJSEeVfDXpN4n5BhTEU2SbbpymjkVAaymrJx",
  "key13": "5MHbWWaJbSdQYdPHTpu8sE4CDND4MWDw95TSBhdp8vw5kVzb1SRdWBMG5mtWZJeMgGNrveW4ZVRGzDKaGsYNHxC1",
  "key14": "2LtAurgzppdNbY82vK4XqiZ7hkzG93qWUByAKhFfQywzmgm5a25ELDuBzh9DfJzM7YmRD7TyZGHiyZM6Q1Zcez2D",
  "key15": "vnrX2rxSmcr81xG7hejHHJJ8mJS1CJTSAm9JpVp5hjbAUGo9KB6x58EuWhL4fnXbkchK5Nj7MuXvd5vK8ipG56j",
  "key16": "wX2uE6kEUBtjcRj5p9S7GGcqNsF9PGpt5wzNP1C8FXQkKJfkGrP1YqnzZiJU999xtjSqDFFtkoHfCa7mgFrqWbX",
  "key17": "3HCoATmtnpAzKyemNxGuqL5zFhJZ5rzhj5CtXQk4gQHnctNwz71JNmzw4UExRMGWxQDorW36vZXwoyEhVvyajEtT",
  "key18": "2kEC9fGxaXURRSQgjYLeFuT2vubWkZmUy8EMkyTErvvT2esn583Jfyf9UXQJg7Z5uBFaiiVaTYXGhJWKPJgLFXsx",
  "key19": "34zXR1Tk77ezxyRnbZrV6FAZJdRWMrr8RRahJT6LdxyQzT8BHV2VExBCJmyE3FMFeo2TDzVZea86ouyuWWT79dEw",
  "key20": "4GxaZ3qXCcZpxAPh2pKWErVtybXksrdVCabWVUyZ7KDFa1HHDF4bhRLtXmeHPk4rgEXswEYDRseVvKZi7grGVTM5",
  "key21": "39GnJ37FvkDueoc7YeYQZ2bcxhZXvDeJgNLX8SYatPMDhVD4KzyTGRTm3nJn5kpRic6STXphNHwJnjpiacce4wcC",
  "key22": "3G7hRC8L8ArWAeeMtKVaDAZThUZdfVGNhmxLNfuBCaRbXSAPn3Vtjv8pXeaxJYEVxfcrBo4xfoav4dgMKTP2znWz",
  "key23": "4sgT79GVmNN3D28peDYRzeLHUji7PNSi9goZrQo6do3MpjgrngVK4YbEegi28FNRTDPDjhX6v7FJjzazN5hGB8cp",
  "key24": "3A9sHLUtwey9XaBD977S2U6iV728vKRLWvYAV52S7SXNrgDda4N3z46KcqoKxVVwjSmjeNaAT2ZNvTFto7Pzx2Ee",
  "key25": "LBUdqGmwi6GAypkqGKEg36ABeCeNVRa44brwCb4wgmBUhHZcsX8LMQS5ZMJcTa1pJQCReZvAjf5HjLeCrsdU53j",
  "key26": "3pFSfNSDDNbEueX6zYmQFeShz1hrACfmMZo2K3QcXG2MVn9KmXHcBT45jXXUmHMrUAR68fKb78B2rmM1hNDj4HB4",
  "key27": "26NNHAcp7rP4LcXEAJVbkMZ4kumht1SiCemUMYWQytAbHjSr8XchtXeJ3WTTE7aU21sHwuGNrTFB5VbGcLChctJQ",
  "key28": "4BRAnhwU5mpGyzzkWpZapxcuiUWWThiCknX9VqKn6mMWa86i1kEphR5MyDgaZF57Nkmrf3TcNviqmgRkqtTwDY2e",
  "key29": "5jd76j4odFxSdxVbQy4ynZN7gvHXPL5jSHtbYNP4WHMYXHtRnpvcQ8LrDB9nZZEq7q5JHxv6fi4c8nfaZf66ahj8",
  "key30": "5YNcXvJtKGPudyKwPmpTnokUDVBngWUW9aL55TLE2RKvDnav3upJcGn5KjgWSFULJJsj86KKceUqZtKPj7zNZddn",
  "key31": "5wK4vwVq2w9MtJGwz1vJkCi95NnYbFT4ss8axhCcL681D8tNm5G93tzwvKv7cyWFuqngtvzJdAkYrbqBHcQjHYE",
  "key32": "trg9kS4hdQzSM9ryhP7XPN2ZDr71YoKNN6NH7rty8eS6LVtnnHzjcZcLKKr1paDqqxNnkkFKMo9oHGoWDb6Ls1R"
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
