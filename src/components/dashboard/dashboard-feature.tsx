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
    "GSWCExJbPoMH3U2VpVaiwBJ815xrnBwYJkpr4nazPdhe7Z7RPwuyjFunx6HB617GHXpqmHndYjGQRrGQVrkp1vX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23BPs2fkhAbJmDup2bBxKaky6dP1hiRBiM73fhvertiwoXGcykY8qCpMSdVE86d2Sa9QJs9yszGZgCHCTJReJJn9",
  "key1": "CYqLBMbKVig5mt3YZK5sqwNiZ4YzN7JyjCmeWQTdYcUuSteCmsgzYFccjrKb3VDJYvECvhPZybk8ahHPKwmWLQn",
  "key2": "3mFW24Ax4aPHx4LANqp2uhBkVHCxrbieRUhhCrfWD8Xo9VH7AFwfiMEbLAcc7F3hrm16X8ptyfjDtKLc1E86sqkG",
  "key3": "rarp6KDYQNbEfBiTQNC8rHNvGU8gPQbZwC8VrUJ22JUNBFwVv4BqYxZ4GggbZk4WH3xCq5NDmaYBEmQKDcyT7cK",
  "key4": "3gLi2rSi1B7JcrzXUFjigVHruHar8dEmbZVaxJuMqkgeT4Udg3txoC6b2ZLxx2BuaJtm7jSyn5Q89qECsfK4iHY3",
  "key5": "4ZKiwGaGfgByPk7f4zikwV4ysqCMQCDYZrAC1qBi7WkLxdFBgkpQiqafJ8EQwgBxPqzzSjYDaeThtJodQZ3Srq9a",
  "key6": "5165L7TvwXUW5JRzSpugfvob2YZXzXbDnm8gzw92cp3XMwuDKk7WTvcj452L2K9GBMZx3hQdaYWsz2L59kQ4kdje",
  "key7": "2qUouLRYk4UGwhA59fUojm2VQsz8Zet9uk525MnRReiAGkrFVvcTQ2uAF1KoBDGYrnrE2Z48nT19qutYiyD3WcPy",
  "key8": "3vTYkeL1vu5xeJGZXB5vsNtDLVb8JeDKNtr6WgZgKXg85GKfk8xdNRazdHwHmaPFzSAfHPJUhUaB2yvy1JHU3hDc",
  "key9": "25G9W6xQz8BGqu4CxWT8s2vSvG43XUKkMTeQ77Lhtxgq7EDKxVMwLfRB7ZQyaR135rLYZovqDNQuqjQJ35gqhQ1w",
  "key10": "TKJXCBmjWtMx3f3oKfRQzKDqBHeTwPPP7maTJakdACFTYjS4JRAVP7FmUj2tjzoYeuLLb84ZRQnn7fskxpiL7MA",
  "key11": "4JyCtKsi5cF4Riiy3XZBhkNxEkUqX6sbMa5ghoqu3QsNnRbTyrspXxJPWrJJGTagoQwuRs4rM1qbfRJjUDDFxqB4",
  "key12": "4ud8u1CCbh6MM1mYBp9SBXfSNkNd38Cz7g2owUM9zk4nAhKtUwLc2rj1PHjdPc5cWWk3QPDYrFHRyexKEvkoVYrH",
  "key13": "4PQPYVHpNiNVNy2sURkMmGYfSBjajiFzpLGaHr3ngGTvK5mDZvRhwctcwnsVHKBkEZeS4DiqoCaynUiNJHYJCTRh",
  "key14": "2a6BJxwXMaSmozSY84WY5tFFZeHKEdxUZtc2dhaSsJddHQDFRMSt4jCmRvpYnqUwEioLRLvUC9yzCXAFg3rirEw7",
  "key15": "eDS9kuvDxWZUyW753Bb6MNSyBJra4AskbB4wkkRvRo6JFwLrfKtHn8TCe4hJeTQ1jG3m5jcnUPTuLWQ9QsHAUqU",
  "key16": "ixSdy9CaGRdqKsYifMMY86AgZz7aNtxYCrZyeG1qyZzbunBtMNh2SRJvsBkXMVsn92TwF7hMYnZfn9QqcfFQ37a",
  "key17": "4ZvZYBVwG4S1kNGUdkbq84aZwpQ3XuuqSGReKu7YaDnuXhv96bmyu5rYKRL7QnCJGuDjJAu4MzfBJuK46vdZpmPb",
  "key18": "2kQhGcyxCdaNjaXcBqpUtgJZoUN9wDN34Ag7zguLZxn4JUHWCH9KygWvUL4pfB8T1nej1qnpj7ApdJpvhEgyFECa",
  "key19": "kw5m4RtsPU9vSHRNPyiLPDsSoq8UvDJmvzmWJpfEKzE4m6awq9Ve4YjBLfA9iFGcwFPap5jo67kyKEJdmu3VuMF",
  "key20": "2pejKoW9N5TyqYTHFT5P9YhAHtWqVmAVgJtM5rzBiFEZ8kQFezX9cz78EcNpBpYC2zZGSZyLD3cU6hGJA1aetwnK",
  "key21": "43jPvNcMj7ZDfSdE9ZyViHVyzCLf6jbFzzm6kv56Emv5jQdeTf7dT8Zm15x216aaBigPma85SZfJ1k5GLxN7osq1",
  "key22": "6Hzje2c99QFsiMhfrRCHmTBukgMuQTXdXUcoduufgZiEVjDofSLiLgK4cg6sSyfR2EFoRLfdPMRnz76qM2ZXSAh",
  "key23": "4PuEQ4uGFrxeTiZ1PYtEo6bprHkFs4Roavv7Pe2Nrb52Cu5pwJ6KiYiZxEp3F2zRghmAqsi5Wqar8ETQqd6zMY7W",
  "key24": "2TbJmmJr2kCXd5R7ut3bEXwfvgdbaEon5jdoJ5zNTJHS5rVLPBqm4JHudUpegjWSwzQQpBdmhAFocXm6gT1eHZQ3",
  "key25": "44NsKsEpfGrVBqYZAvGysgSWS43n3FjsfB9yHoGqGDBcb9Lmwzb6DSKwpc1f3twsxT2ZvWKVPRjGoVXjEFVj1Emu",
  "key26": "2NG5985J2qXHb4fxBZkWYSfEsf7qQ5TunsY1sLey7X9tp6uFVSqRcDx5FJn5z5oL6FrD2huP8fsXjT1RdJe5ggJ",
  "key27": "2cYQqyzdimbKZYnDMDCAHirsj45cp8F4xfJcTAK6urwT2377BK4dC49UaatPEbDSUcbm1dmMg5MM9kvZv9dWT47M",
  "key28": "22ixgdidDCNsemjykThmCQkcKL92q3iVXJqixnYxzrAcFBFbN49eLCEPzn6rkiRwV13ANrYm6yX4CnQgZaprpPEi",
  "key29": "5qD1CAMMxs5ag7E8SKTnC8gHV6dytrAFJ2u5C5spcT6qitC2KvqdcSCEb4ojbujDDhvDLrNpMEyekDdA7RAchS25",
  "key30": "3SC4HcjonffLrYQBV7138D6tKVu1LNsWEqxj8v151KcS3tgVhhaXcqrJ7JPQEHsn9GDzb2zBhKvwcmuh4LUSob8P",
  "key31": "4AN267fefjL5KSgJTce4qoUcVKXHZUDpff5FMSup81181nt6U2me7k6sJbaKTUbagqkSw7sqD9njmTjsmdheK1Gc",
  "key32": "42is8RpSJmQKqC69i55XoPLJ9A7EtpjUyceXKKm7oWvDfPzervjvoAMJ8siFzqKAB2irobQuvBpm6PtvURS6tmQt",
  "key33": "jBKjjpoi7ykZW25QoqGZ51H62c75pcVL3YofnLkhcEXQKWX5wsU8DoyCjUHyJ6tCvgRSbzchQg6HT2Yfhwk7AAC",
  "key34": "5Vfj4LnG1rDWSRF2s7LbRtW4JXMck3PZEqEWWxZY12TfgQMi6WbKG44nmBfJMc9x6QHRqAvRuMQXabU6eZB75RCg",
  "key35": "2HE5QCKPMiNjt2mmX1sydQRYKmCsq1LktyPns5sEpGBDhZo1b7gqZYky2ZojcZbyeoBBjRN2Cn74bJ4gkJeUVEE",
  "key36": "2mwh1BL6W8u1bWFUrqVSaryzrBmm1VqQAGpLX1FWR5LfPoGehkLNekDpAiQnWMyvenBD1K3fHsrM8sqMUd3XFxBT",
  "key37": "29c37Sws4JVVqyDmDomcads9ZgKokT2gksnZyRG8vutpMft4GCBBA1gFBAp4RTbDg5c3FJvEEEqzgzbocT5jDE3V",
  "key38": "4qq6B6vY1pRVLn8FWNfv4Yfnw6gHvfezqnMnan9V9yDDDDx6YoYaiictUW2ZtPYkwd4apiEW7HAC7HxbcMx4PjDm",
  "key39": "235PUsMNXswRyz3J6TRsB8uZ5MwenGNMbsZG6ZHmKNnRLDk8TMjEesCyTKbf8wXzFLjGZ5EDgTKKwAkHi8KtVarF",
  "key40": "3h64f9rKe92mcFDuymcdpu3pf7qzpWfCvC4uiByTKChxmvjfbVntM94i5X6Q6hxarPSTuLCHy3ntgMuboCWdn3VM",
  "key41": "5HiHLo2WTwNxo8F8oknNVH6L2i5ZrJSwQ3ZvNGTmVBXGZSPWj2YfF3MKiWGjSLeK9jtChbfQ3z3uKmN9cxWD6i4M",
  "key42": "Bv3WDKqUco8H8y3B5N4j9dLZxALzfbvGYmU28zqfb4D8e16czqqJ1twx8i5uQiabqFTsXYjkKx98pCENKSikYMm"
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
