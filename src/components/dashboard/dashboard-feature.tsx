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
    "3GUqCU3h3PrVJSkjURUcvRph6r2uFDXiHnVcWcE8dNyGVd9mEfNxLEMgDp7BVkkbvHCfSmrJ5xeDk798C9b2zYWP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Hxniw88NpA1qL19uGFWRr38aUqarGZ978npp51LtjQE1egBYhhYB3KMv2bXrbkZgCwXhMizZ8WSm7e3k18XT3rL",
  "key1": "3VC5JJz94LVjprzot5q1Rb4EnZKu7TvEVav95d6NTGXbts1ddAFKvj8Pdk8uDW8D3iBEBc9XUbhKHBCgV66HNSBY",
  "key2": "3LtKnA1ScDgzhBKoCAfGcVuu4aboTmbjc5N9rHJpSFwxFnVeeMK3GHMRQws2HszKA6wNj1SbvD2JvxP7heKM4Yc7",
  "key3": "5dWs82AFMsZaFyZxMtg8qCy4P6Hdw4snQsSi3LE3yzUDjfr132vqVAemxjfUzRHdd2BChyKQm8QCPkGixHohDDkJ",
  "key4": "5rDYuR1QyMNZpHersvWFtUjLfqVGA5pq7wud2g7K8jVR59amQ6TAgXqwciDwF49TQmoCS11KD8pyw866fcFdjHHJ",
  "key5": "5Koj1RD9pwBoxCnT5tvQ4sXdGS1HgysW5VVjqKTkpei2VDDEoYqQPzhvLWYDTbjFdWKCwcSCLsKFmpoupUk27r3z",
  "key6": "3ohbud3p71LxcgnBQqmD5gMySKRWDLtyEzjmimMTg62NUDXBegCLzuXARwYg6oxBwUWqeVXEu7QoFWoED6tGgqyz",
  "key7": "2DtghJWPhLWak5DgB9H1YVWLFpXkgZ14M562aNinQhgJMMECGR1b4DQPxShQXDEzg6Uapu1VMfQMKp7JCzbACuQu",
  "key8": "2MqpmWkCwqqNw32fYqQDn1WkwgVpTc2PXkTxBscidgFevBJ5vR93zK5SEdvPFQ5TsLs7KuvyhDXy1zfbUmgcyrEP",
  "key9": "3GNnpQzuKVN33BHA5UdgYihVhuEAYbixSYwysWs7k3THEXUauATme7hfGiAd6XYxjZUpKxcuBvNPE5bz1b2LiRQs",
  "key10": "2sJoXTTViyBxiCvQFMBn6mJz6yVuj1tontwGn8jj5vfKzyvCqKVcWa5v7ATjXnv1YoAyyQMBu8QYjRdv7HRSPu8e",
  "key11": "4Zk2PtuRBS5ajhe2WJtqkF5zP5m2dfnBsHih5Wd7yCjt3xMtyA2rpnHMXN8xW3yMaELTg1DejL2hifJMUf68onBv",
  "key12": "2cmTACMSA5WJ7uBT8mPZKgWGG4TSoFfGyY2YuhwgifPtouHcCPteHxDsmnPSMSyMaajUed5xHVH2hcprB3tykvFb",
  "key13": "2MzYDcu6iNbAiyjoNhB6eYT6uNtWD6FNmBeWKhAAP6auyHG9xNoQqUwem6j512VMzLD2TmucxDRH5a7GWRCHZKmL",
  "key14": "22srtpFrioXtzG4QphZrs5GUYro594VsYXY2oswuSwcQ2nTqfGurMazzBskHtu4J32bLCLhZMqoroEtt4sGoUnG2",
  "key15": "564UGdp7QYHe6aaNAkjoQg7qYnv7SxRPoWHfr75bp26N7cixmL68KCnhDmFoEvWXT96fcc84NDy7mfDXZv7VT52Y",
  "key16": "5QL3DLGZCFvy6Pf17cgPxLWdyusTJtCuwrR19KeYCa74N7ZthzKgwUbqSJxbFDRAf3YTbm14yFH1Wyhf6QJu5u7u",
  "key17": "2Hqy7mPuSi9seXpikUqP4P5pMfKXvdXNNiji39eeXpdmeQ2D2XTq4qbuRDj674eytdaymnB7vMuVBwFPfL3NWau5",
  "key18": "3KzizFQSD4tDFETFMCYvPaRwwAfzvvWF4xhJWBERjwPR6eTn1PcdPk6faZaisiUNXBSuEqMSbNs19rqiBYjHgZfn",
  "key19": "2wi4UziGHwdXjZVuDib3xH8HA1ci4sxP8bUiQv9xghbfST5qCdFsMtUfQm84MLFY9yLm99647gVfWaGFsQ8CZudN",
  "key20": "5YRzGWrJCixCLgaVzqGQ8XZCjGcda8sJ6VYkuCGUioQSZp3ivNCVtW6G2dCRCbWJ3AJMsSeMSJPvnZ1hGyMEyfZC",
  "key21": "3o2ktrTrSxLqkut4ZKvW5ZBEATSjhc86x3rQq96yAwCuwScffmtT6jZ3jFuEpZz1q4iVJCdqNTsGRfKEJscWxWbW",
  "key22": "U9S713N9GK6iTbtiT6FNSEa2MmxNja1BhV5HPYqymSpDhvxxZKWPMvCVLFeEKUBxNpz2UNsTK3vy163k2LWmgT2",
  "key23": "3EKrjm9tQ8DchxijnyEaYjeHKHQvsPGNvsNNvynVpwEsmeXmG8EQeHf7BTXXuz6G8fDET3Mne7H9UwFSKAdgddrS",
  "key24": "4NGddUp8nbaixCAWDE9nvv5Xhu5XLrxaDogqz9Sdx9LjHBFb7pCXAT3nqH7Rv3dwLEVMu1cFMG7QPksToZKwTvAR",
  "key25": "3aUYr9BBQr6C1xxAEdyMJJDBCkc5ayTvdob6cYYUwT9o9F5EY32rUiLM2VHA5PyDRbsQfF9i2nvvBav48iSFoFD5",
  "key26": "3uNiRyaJayGfHpv1akUPAU4gKjG1qyASbPg8aU8xBFcEFZKATuS8cRrn6ssHkzZVKxnCd1j6mubVZ2uABBbd6ELn",
  "key27": "Fqg8dCxGJa2pPSfmgC7LF5w7obmPEXd817DaaZPwaNxVByp5T8VTAh6p5qgYzsFFW9ebNi3fRpbHZpJmp7VAaWn",
  "key28": "2sfcGmYzxxev1y9GnaFkZKh8WHg9qh9A31bThHvboyoEsuAwBJpbobqivnKSqZf6ao6ZLxL986Dtn2gM4HMwXpV9",
  "key29": "84QdimcHQRsHDwMzxjxx4CSM5Fe5EZrqg4K441WfvcBQvMkneGiW3svs1haT6AYUQYVv6219UqeQLDHJKv7dHLi",
  "key30": "5dBF9SzUZKYXzSBBwZCVKGM1YNr3a4497yMYgSJqr9d8fTfoTYSuTboiuGrzYPrLVoNwztqQ5ShPLGfNt5gcbfDm"
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
