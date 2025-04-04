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
    "4K7rhUh3b7Cr9vBgZ6GWJxYoogVm3sainybPjxj9N6w562XaLYKBdXv9JsZYXWHKLMCsiZ5AaEBZsE8PMZvZX6Zg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aCAZs4iNw3dRniEwRNtbrxRvcSd78NmLsV8LAkdXGo91W5AthXrv7WejjaxQdx2LRAit32yo4XfoG1agk7THCyA",
  "key1": "4uU3Tyfzq6zL6arMj4q7VFoyb9yXxGMKeQNGDvvt9qMyjeXJE7LzdMG9HZ8wMpddb9CcmH3PmkVP1jWQj22obywt",
  "key2": "2DUhnZU5HkMEMmGAoqktKfmxzLBK5PMDGjokGPNxrVeNBiFb4oogPNDyaUf6ynuAu95iwCKd2xXkb26pwMbVq3yM",
  "key3": "3B86X2QwweoudU8E83R5aoVDyYXQvGm1mVubu2TvBXywJ4m4VsHDAFqEgqnD78UJknRV6NSp4rKiQRccnW5SS4GF",
  "key4": "qLYDs5BEpM1M2f2uW6m2Pq8BZexid6kCuENyvJiBzdvNgs29Brit6F1SkwSpmu8d4mKkhpxNaXx6S9moxfwAHFu",
  "key5": "2fUgAtQkhKLULyXrCHTpL6jzyL5axhEu5zBTH1QVJqYd48zQnt4N5PBfJAawRuQbi11JbmKDTjxDC8eA21MQyp17",
  "key6": "3CusMHiDPFh5wrtzPTdeU231S3BsiHtUkWkwyjsQMLQTmJCL3esZN8RjgP8wBkxKrqZ9nLcbYkNTSiQG3kaEtJdH",
  "key7": "5wrP43dhb2enBfnodzFwq5uamCMHtAYRtD8FsJeY6h1yU4bjUScqAFRmmsz8DgpkuPGjTwabNob1kpgZfYPWGquP",
  "key8": "4Hn4Zs6SYkfxNfGuJyVbukrVdKajhussixXGX3C5JMp3YHteXzHspYYfZJg8Y4yrGjosJMPcPGHKqWNoaBb4aPvY",
  "key9": "5nPCWyWoU4gZLxaZFbGbWUmbKBWHY53vSsba86D7RLQ9RNNNFkDtChQTE1cJMJfD8RRX4Bmp87eW7CHyCNCH79J1",
  "key10": "3FtucskYYN7Sb5W12gAExBVVu5qrYwHir8sW3cs9pd1vuw4vAR8SojeDuQCay4p7tVFw1BMDpNtNM1YjzHAMw7oM",
  "key11": "2MkBarre4WUzdzxDEqQhYVFJt5UemB1dN6mk7U2CHpaUiWqsfJWZXkHx5duUn7crMh6XgaBPdNSNFgGR7YWZPDXz",
  "key12": "2u4UurUPMFTX4A9BLU8LbE3BGDPg27G519gUzMnUmyREgWkMJKoEgAnT4WCNL6AMpD4DHP8wmxgf9d55DyFFdfsr",
  "key13": "5vJYJ6KT7WL8gcpNZXxZuQiYkQ1XQy9VvmCedzEMo2EpXvAPfR7nJby3iYkAF5xHfXnFqCS92kQHqmyroV1opVWb",
  "key14": "4CyNrVgTPh8oAopNJThUv67g7bDeT2vAUAbdLMYPjj1Xxzxbc5SLDeTtiwcbhn3EhUTVzNEscdKwRLn56ZrZf47s",
  "key15": "B41AF7cFGzMdivGyXbDXHrA1aTH6xuvm2b9dYytfRH73zb6hWp4UdLk82QDsYTNDb6LuerJSvNr52Fj6kfKjJhm",
  "key16": "YqQEAzaKtyJ23KPmzedJKTGuUs4VWgG24695kYAVCgmU6FiUd8ZVYp1aCp5uiFcTqf7LXYhaAihWLzEuM6WBiG9",
  "key17": "4LUwLvFPcWUDHAydKc1H6s7z4JKincqsBWxaxx4vhJ1TZSBxyZmbPCDqPopf6DeGvVnk366zJPpoB4KejQPvhyKD",
  "key18": "73g5Ububw84qiJwppxqzUTaiQZB1HNZrKWkMfpGoBMxDH9dezTPCVhjCpXHJJbZLaiJvLGy9GxZwXSkDvSsT7Ld",
  "key19": "GMvnaN4ozsS5D6GAt2TVmNAn9F3DbZzPF7XEWhZM7CcVFuq49EL3WuGZgmrDRgoxbdRCqHBiNTH5iw5fetYMxtm",
  "key20": "57ptzdtvKduqh3NRJFLjuQSffYvVv5WtcAb4v8emc3UDj3za7yhmSaec4EYHiq3BeAS2aBvnA8mnC8PJWxHZ1Qjs",
  "key21": "2eaqvhunrUwFe23CvuZcE6CAET6MBx4VBCjpncY8TGaMMmbyKTePassndws8fN8ezXkKMoku17dyzoubzkCJiXqu",
  "key22": "3Fent6GrtTAcpshBQEyPuBquM7DN88nC8GdyWD2EGJjtybeUk2rp8xx5cbHazFLLoyqKiPKj5WTGgdhgrD92u5Mq",
  "key23": "dT5N3NCZgk6HzmMg93Y8KP25LXWvWZv6QbEjdZHkSVrCQgbtNpHUTqTZAyuQR5zS1kYJSYD3UJQFmcCRGmDtZAH",
  "key24": "3a9FzFaKVjHCK3qQ6rbbQk2XCejq7ELdaYVkjrXfwoBpQhMVrmevx874edGQ6Q7BxtgYiSsYyLbwg2PDQ6kqdRVV",
  "key25": "4QzeQG3Jf1swyPe8bUDZLdF7AEhZK2cmUSTyRTYupA9Mi7Aohexi3AFCfUSvbtoKaUom7BZ5sZVp9HQYmB6J4AvU",
  "key26": "5DsovTEMnVk53rbm2jjdW3rc84RYAzdJnW5ev3jZvm5MUyAGt2Wk3bHGVPMQm2r2VjH2YK7C1ihCvbc3b8WsKpqV",
  "key27": "5a9d2dBgv5WwpYndxkE96V46nME3BioQz1s2iChF83usX7CHiRaarcmdLH4r7cKfumtgDNXmfahM44NsFfjpqXnY",
  "key28": "3wfJrbTaj1fyNmVhVPqcDu2whG7wvm3MpAAhzGFYDD6s8iKmoxQ7XA3j9cDnGRL6Zcse5XJE1GjYkiM96BfzEzw4",
  "key29": "GKpG61VUBwTQdSxyQuUZzhZTjv8Wv19n2n749xn2HqVnXL3Y4bMHn6UKR99TMyDJqDHwiSDHbNCzzr1DKBEXJio",
  "key30": "2Le5uiz11uckcLiJouv2ueGARZqQo7JocxSA5bV1VfwPfzfLBuHpKM5WCHRJJx1c8iDv3GVyGCGVedjU2fhVPKEp",
  "key31": "3YuTeyyEnvAwhSku7cmH7nHJoMtT9D5b7dPuEryELvTE1tZkRwcTWWVM3446AY8ku3aSNoVUWjVWmUrdz7y3Dfqw",
  "key32": "VBLkufW8MpWQZB44t2FrBLdFWBPqBnXJicm1gVZeAcX6sSduRUv8V83V7PhxU1hGpxTWVbvanwRGoGV2txJL6Ps",
  "key33": "oyYd222KTLVs2noozJe9FU1mpaV6aNBzD5j85WhdtsaX4QyFV9542KVDuUURiSTkwvexCjNfusSSeym7xNH5cj6",
  "key34": "4LvUCittDBMkic9wNJVPQnMx9piLwQYtWhvDp9sEwHLN6nNa12pcRVupSQXrrSamzYQzbCkdkjC7Eqmnp6gSy2Cs",
  "key35": "3mPJYrqzt9yp6Gkaj8tcyQRkNiUo7BVSBGkPPwzwHwCJoK2A4TyzxYRbYwtNdK18nVsxNh7Zv9W37VfrbK9qFsyt",
  "key36": "tWMQSPDddyEAqq24NXZBf3qZFFNCzx5xGpREKAjpwacsdHn16XcsxQNd3d76cCDJqaRzRTQ5fZBWGVFb3nsZVaH",
  "key37": "3a4izpCsrW6biaTUWMbAGcHBDwKSP331mBTN5pfdZ7nse5Kto3WJHvNYRwNDzhLS7nMaAe5U7PmXsQ3qAdpJb4WR",
  "key38": "3Y1b1DtSqtT3V8AvPycsXsFhVNAoZXMJJZQyugyFpNfM9hfe6cTmdcFWCcnr2VCTE18E7NxANx9Gut53J84he9Xr",
  "key39": "EeyEMcg3j3eKQ2HsXDi4M1e93H1BemntDGyWxqsNHcTfXumoG1ctqxmV5iBPtnvu5VH4vXdAr2VDdYeRcGHDZ3E"
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
