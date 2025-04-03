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
    "3aSyZ9acLGMoRbm5qztovKAoNYhDVDNUPAPudtACP9emCQC4f6DaAtGNMqkwrnDVGC5wcydowbrXEWv73MgLTC5f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e8K1GQA9C3tkBPHPRDQixtLWSK3rfv9t5BwY9oQ9XRgMd1fFAtqzV8nYgJXZa4MeCLW35mTxpsh7XN7oCmREZeN",
  "key1": "61iWhLoYqD3eAJYMrof7gEcze9Y1WPND9KiHCYV7m7joijRc3qnuXmcP2PgKnDpMqL8fYTgexfUNa1hJCdWjKM9V",
  "key2": "2Myy4QPyde2uDxY6aj8pqaMdfFv87MU2Xk2SVBcnUbrhRG3g2FXRGDcfe9NY1EBvLNBhtoinYbUJZvXKYTzTSnJr",
  "key3": "4t1YGXWJtoMwLTiLMQa3S8RDmkBWDAMm3HqfmK4rL8GweVv37cAdPkWgHqwY5a6Qt97fy9s3c1aHyqqTsEbQRGPi",
  "key4": "5m2PuXv6Z1v8h3WpTrWeUPAFXpKMtoN1efg89aVmWd9kEB3pg3uaa2YihKDxZBULnkPbh2QgAzyaQVW5kVi6tgsV",
  "key5": "3VTVCxEorVgDG1GGfhbfSPAjBjPtKwdbXbipqzsapSCWgHfN7n7HKQYVYDxmSdYdmqYWfBfRa2wNTRcp5jWMF2Ki",
  "key6": "A77zAYVzrEi9GvZ8DaqK2RxPPAeDovHGoxuYdeAueEstxDKLxHFV9jauD2VdRYjtYQTXh3SETBLP7SUSYWBa4c5",
  "key7": "4cHjyArq8Yst6aEnL653kmSaMRbGP9C1met1C7DRrgdhagNnEttdH1HvD9NFv3ooBbGE5rCtVU2sNdskdfHYW5xs",
  "key8": "2LJ2sG7S7vGCTHRDWf9t7CZLGkkYrMY1TJBkK5eWQNYKx13fpHnUiHMLZoRLeaFxvmAM1YWSbWJsYPemYsv5hT3E",
  "key9": "sEA5MhPtoW8qKxuqMpXtBskLfXfWRHKFEh6VMNeH9asgXgS2H2m3DXZmEMnhXJt4xcQpjUXyYKHWX9kPrLN9LBA",
  "key10": "5hkPzLRu7KaYWbAkStC5DLLmvpFQRAxib2J2HRxC85Zp8JqrHGQVvWodmvkcBvC5S7F2skApx1fWYUVeKs7kBGKR",
  "key11": "XhMXiZAnSv3GPwonhhA5Lb3Tunav1ZvtVVfi31NdUMX4f5hoUKNk7z3gQX2Yni4FQJMTQAGRDm42z6srpMCAYBx",
  "key12": "2TT94YzA6SGFXHkK9c1rWRKrdGTAZjZYfhiyjrmKHx3TNexVcQnqPXuSr8vDsYgSqGtAR9sA9RvfefPNuy2B7oQn",
  "key13": "4FtEg8rLDUwh7FkcxWR3Q99ee5C9Lruxb2j6hppvkBHuNNQKEHGbJCmpfx6Vz6Tac6fBEAjdTRpx56znpRRiNJcY",
  "key14": "cdPVzPyJeoLCcJ4DWWPHhmT3j9MTNackUU5HzLqL26vNuLVEmr5ZVQyhC5dCjUzSGxSrJ7u3sXfmxFGTSG3iZFm",
  "key15": "3CsZknLuVhZzJd8VX6hY7cxiZgtK83b9kmidmfog6Epm6RkYsQ1YGBmYZFs82qCH4eCVMn989Yd5s5JR7aMFYzHC",
  "key16": "5nozFH78zPva61HgHUPWrsUeKmLfQYHkLoezxgzpwZfEb7xrzhf7acBPUKQEheMqGpukh5LRsskDCNViSHcoQ9XE",
  "key17": "5NumcXbtVNXxtH9Umtmd69VNFd5QCWUnFNytGqCiPmsDrrUTPozYwmfahdww4JLqsHaNbwhKZJQ2VfWwZ5F1CsdD",
  "key18": "3DaeiJ6AP1WM2kXG9tTUCFQFHMDi3bqhLLS5oaHZS7DpQau2zsFJKHffeaoc1jHNn69nPVfTYFgZpgGswLytcjpC",
  "key19": "2EHiQWGmH4nyab5vHrT46GvtQecpurmpzjTVek3qtmLJzhi3J94eRirGazLk8ZG5EeRKCfbTnZcKy2Wq5SAz2enL",
  "key20": "5XVTVdMHc2e8Qzqy7jiUArvZuftVXUC7f8VrKTsoyM9RhyRChamchuakeMRnHo5M9fu8L9J2Vw7DtkiZAkvYofwW",
  "key21": "HqMXJCJFKFVygzAVyMz3UxA5kLa1ehyH5UuDoJFYEAM6yEdWwWWH83AsewCGn4KUbjbgQhbii96LxzLiNgZRSkA",
  "key22": "54yfySCHnrpbmuX2U62qEQMQfyHe6rCsqAZQcRa1m1ApB1rgTZqDn75Dsq6QHXguGJvJvmCpGmiwNwTssAN2ryaj",
  "key23": "5tZ9d8hUJPtXng9q3LzoVeU665Pz4qzAxxb5En9KwHVUmxpsfb86AGjMGXi8epQf98kxr5dXBLrSFzTvwUf1YGWj",
  "key24": "X7zLwRnhzqsuMKzJhJkSUCqizEqWuCxtHfpkk1MaZ8wABmpKkDHKdDhp3stVZPNAjghVoBRiPHV9m7NnJVVxHLP",
  "key25": "4euAFTFU9kJ3h39HpVii5BbsYRp6drPQ2ub95wKAGkMHe7bmYjTV1xzSWpPLspq17qEct3m4WPJmF91cFaneNhH7",
  "key26": "5ngxHGMo7GSH29r4fGvGcvc5GPJMPyXEaP1MgT72HB77ZpqazihvLGWEvG3WzkybJQG7ZR7eRVkse6Znz3f7Nkho",
  "key27": "2ZDVZaSYJSu5KTCCXBVgmUfUGUnntaBxQ67XKKUrqr7oWGGFZYjDXocBDXPwfq2JD19KQHwDSrRtCPm3qGUwZZ1n",
  "key28": "62CFB1gr9htvaqdALheKZjSvnrv63KZmE4iUuJnySeGnv2E5Hd8rk9Yp6tX5K2kAw8C6FHVGN7K8wJG1fnjwEPYt",
  "key29": "4kJzTsy7sza3oaWqjMoKfqDda3nkJTTukTMJKsxRyhGFCn72vS3ztcQRX1u12zDm5RUrREGZzwHAUHiH6vU6eXF1",
  "key30": "2xe42pPpMZgbFRSTujqyLi1mk1RLodsLuwVgke1okyatamTP1ReiprEnEB72yFzCr27MZzgY8PmsUAtE8VefcUjT",
  "key31": "RNcg7VNsWLR7GVY5ErW2ajkEBYFRzSFf8RZ1yoEXRTFxXpjLPXEYWrjrpCJaBfRHSswjUurUNEMHtedjfQx1vww",
  "key32": "55uQArSU4MLTceUWr1m23wumJZ2L25iEJhd7iyVVRWBzXVRCxy3XGpyZxUqHhgq4UrbL5XoCDMTCKkSS7nWkaiqm",
  "key33": "fw483kR1dDfvWkBTTYVZCsLeRRCqoE3DahFuwApcVks8yfSrfcDanBVx32n5tjfS6AAFVghdgx9jPgc8efgj9ve",
  "key34": "3dkBRf9Tk8CFKnAUK5aWihRuPA24mrdqZ9Q2d345oWKc7tCMwQuTRVPofZ6WdjEc7N776wFDvNXo3B8LCVBJFpZa",
  "key35": "4YjgEqk5hzDWjhYmr8GdYY152CYUN6B8GGZkPWe37ghCwzz8HpvtjT856zZSztbYTartybiP6jL8mCFki96rUPfS",
  "key36": "2pPXMNDA222CEzpgaRWAPhS5foopVpyPtfqqbUd8VeMfR15ruM2KmofWDjse3yZA3cDEhz9VmfL1E6MoEzbZ5ri6",
  "key37": "fmdZWy8yNpGCDgQiHhGCZNeXkp8j1ZPZVjB6KqWrX9h5dXhjUy5L6Vcw8aeHbnkqL4EV6LAunekaGT3djjZh8gb",
  "key38": "3WDNCAnVMJgLt3Q5ZL72PCkXvbys6Ad34wBU47z5qwvYBx2Z9VRZ3pzH4ZPzAfcrw6XqMkjsTxTxvyiKGkL71hnf",
  "key39": "2B7oVCYx25JD7wm9xDbEmpDemuiViCgq5yL3jpu3nZeYJBVZonejqf7JeiKcWDxKqU2JavwKY4jQNxAFVg8CUB7J",
  "key40": "66aftdaqxC6KuLU9bczeGqSn9vpjvz91o1nf5brny4Xnkg3hSPJWSXDL462wM1JMhvD14pGvkMaLwpBbc1MsmDVe"
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
