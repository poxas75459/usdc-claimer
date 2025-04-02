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
    "4SnTdC4KdLniu3JHLyT936QubDxn57jsWHJ5vQy5UAZf6UU2zQRGBLewj5HiuoLkCVuGxhumckhwnGQCtGgUdExm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rw3x532zriuqpjd2LPFpjyaHvc6BeQJQVUbUT2smbfJ5Ewh6JBzqN1V6EEPaqpwwkW9WaJu9f4fAZu5jum4Li2X",
  "key1": "4TvKFaKmetG8copjF31A7rcPQsXvBm3TSGrQaMEzQjH1hjSZvRqNtPgvyMCSMeMbM57yChoFSuefayManbWyw9L7",
  "key2": "2dvKuWJW6M9rzMKPMMQkRKy7XKzNWHWjcq3SH2UhtNVgvsmP4obvyxW8p8HXfLHxFZv8UEY9zvixBy7qDkHq3Doi",
  "key3": "5YaZCCDagANuu64fvMCkUFz1y61TnLLSffQZHdgUXFRQMvGdLB28tPXtXtJq1ynTio1GU2JqXXG8z7HEbxEV1MtM",
  "key4": "5XLcac6i6ycuX23x9bGrXM3npK2CcRc4eB5HmAg5jW8fPUr7q4w1bYJCaYiKitwiZ4ChRsJBPRZC4292gg1m6cbz",
  "key5": "3vjc7PHWZa2N8QpJGaD3mV4qBP1Zv5xNV82APnQcDCY7M1v8PtGVgf3AC8D1ngVtkb7ZxFYjeG4PJtoJpvkRFra8",
  "key6": "3iPtisuBk3WU2WLAyy1iVWqYUwSA6CibhUAkUNjDQc5RAPGbWqcpS9vM8Z4RvG8woiyYPR6HQuG86K1vSt2gENns",
  "key7": "4bVcNbPzuny1ShUyCTipHVwGP4upzf2vEpxC2Hu2ShPEpaJvbocViDcEKXi8ZgHwKJXvX1YWeFyaTcPNJv9NMjMe",
  "key8": "zeVsNtTrGhdr2cqQbFWc31G31euP4v9VFww9Dba6rL6Bq7bUDg5HiUo9oiDQGvo11nZ37MgqkBq5H4D84sZc3QF",
  "key9": "4BcN5parLKJfDmRTjKhBQPp2opzfL2tCGbrhA7Fy4VdfTNzjDMpQEYJxtWTy6GqrY8PDKMHPUc7R5GFuUDm2wQ8e",
  "key10": "5hngtjtUuYDhFCYwjaULRta9MASB4KEdhnFSUu8icjhbdBvV6Rybs5ZM8Qn4ggfs3861N3Muu5zB253Ykk3N5Knm",
  "key11": "2zv4v8qHqxrDsRchLjmtPraHFbUk3PqSnEqqocXMsf4tuXvMhGwPsGSHnfAvYfrNETPi7gWH3e5TaJ1B6iqqcgtc",
  "key12": "3LNXsYkFfoJifPkMeMZcVzknNjL4EFwbq3nB8wX4d3hBy5aehFXXWm9mHsGY8qTxX8rqkMZ7HUAoydvqCoqb7xcS",
  "key13": "gQu7dhTncCBSR42VjAxY67PyUxC4Nwuzzx4SA5RyGBYw4zrjsBXH8CwvPadmA5GdwKzD1mPz8XvKG9Wr3QYhrgP",
  "key14": "5SMhWUd4EYWdrnCsiuzkTdj2DSgJNmbWeF9GaUX2Lp6hrFhqQ5UHB4Aw3jdi6NoZNan7mB6BHWLPYQX2wBPJMWA4",
  "key15": "3mY4UA1f9kfTsqeLtPw3zXLVurW912jHvmXSnNBG6LXKAnhKZAEXSeLgBVtp6vqYLAHbwyQ8UCRBx7chggTBinwa",
  "key16": "4buYnCqUWgRKXb9Wam3Hcaa1FGJJtEKX5VUqNGqDG8pq33Kje1YWyBu16YmD3q6j8cWXM68VPH9oRi8jeay1DA4f",
  "key17": "2umAKtwteujKLj4ZvaCMe9oNJUp7qQkNeBYoJdSVVRKB896bCPHH8zbd6XnpxQUfC3Pq5kqTweYyP8CTr2HVBvM6",
  "key18": "4DMjB9gyCYhVhvcPjHPwixuXgSSgrN3RKyNUqyvvVKwTSWmJ1WWLkcinHxXe6gjV1qoKGQFmYzByWkYKbmeJdgcZ",
  "key19": "36bbLZPzYsNTJECpk9bh8knLihsVGgfwJarwqvKfasWZf6MD6JeMDCHc6reQBnoxTfZRDXJiD5AameNBKsHo1MKk",
  "key20": "LtS48gKsQZS9aDSv6tUTg8zD2LL7zqXRJmKBh8UAXrfe9diuvx58aAgSA8Y27V5q6mchdsu8EYbS2rLCTYB64Kc",
  "key21": "S1Qrp77K71ZnUxtiP3x3er4yoywJpgyeyZfWBT159NRxYtaNPqzMH8R4cKQwka7eHjW9CtS8jqV4jKHuzKVACmp",
  "key22": "2F94mZZSYcRzrAK6XBwsfPb1LGdPAtUudQSbisMdWU71AxeCo4KFDRgpPU6ENKA8sRzBLhGbHH71N128oycr73SA",
  "key23": "4zasaFn19DgCmT9VEvwjv3jJJno7rtxoPXxB9Q9WLVR57eGCsSKunEQbNqhDz6wErJsA3yMBynUcNRZMDqPTUJxv",
  "key24": "42TxtAzkPBQtBjfo8vofh3iWTp1E6BNDKrSWRmFQRjg94ATnJXvQq2J7jTotABb6YhZcwa2hakqGSyAZKtLtEBzz",
  "key25": "2CaoEjq8ZhjAc8AyCj81redGJV8P147k7Z1kGgcBipUKKwM6ey57QkjQzehSeo5m3bR6GtBck4MgeQ4Q7ubc8Uoz",
  "key26": "4rJBDZuNwJFcPiDAtdwsLz5TqTAw9NT4Ei8Hjxzngjb2HcTEBYayLDvfkqxWj3fDu3PSfbNcmJxjHtuDXQbu9VfG",
  "key27": "fVMg2otXcjewp12dkvewdCEDJSSVkHjrt5JgsGE1jwJZKqPjFYLCpzbTRPkMXbZpgSJ3k1guFc6SZtKQAA9PrPs",
  "key28": "4bXiSndBWSpsUGD7exC2st13YQCUgPBNw9P6SUF2DeEVLuMVWZnnpS47eA5zonXrEKsiJnoYg9XyRJMCKHMSuEyt",
  "key29": "3YA2kq2RQ8eM2mTSSACh2qbUWohVuPTJZhbirqagWq9GsH4NWQRFKDDk24DqXPCcQrsjHC437ZLMKayE5ckgB54z",
  "key30": "2bmMjbSTZZtB2h6nvWbR6af1qrmsiJhq13o7wUfL2eNpJbWfRfcFcAoX9miNsrDsixJYui1ESXBU8UcY7cvwq4VU",
  "key31": "251n3yrDtceYe382TpYwrVvMwv7aXDMzxtFbTSECRE9qSEpjxd9226WsvmqoyNU8fyd8nTKAmXzECTV9oyJgwnCM",
  "key32": "4oAZYwCfqQReH71ootBmfzVNAip6aDTda9isHpT4VMFKhHV5iipcxhE13T616GdrCKHG7uCgef557cFe5Z1sfokL",
  "key33": "24nD9WKS6KeTiTZin6Hi9P5RfSyyHwS3Fzja7kmHUpYc25g1td4UBBL2GWy5nNpcJ4bSykrNpatDTtg75SAvwfTS",
  "key34": "362T1m8391cZoxf4q68VhEiH1xX7VSzi6zGgTadd5ibprhayrq7ABVUtaSopgVrkJYCquzonZqgVk153Hft6xaLB",
  "key35": "5mQGGDZCi2hjVZK3AQrKDogmVXM6qee2XkCLS5fqHJ4J4biZCCgp4WWPMEFzaEQguQg6YLXT5MCpaWCxaoc5okvY",
  "key36": "3xJGgR3B9VxxMBezKeK9EJjruTCqhMiB2WZgjw8BrS4W6d7qLSVzwTVSrZgAC7tL65gA2hXks7z1jaqhNaUuauSS",
  "key37": "59RUcHbLmQzobHSxYCbfiKh9SPcqCGhFVGvDjQ9uncYUzrBF8NmcTbAn34yvVUw8TQnYmjebMLbNUq5o7FkiaHu5"
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
