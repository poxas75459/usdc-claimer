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
    "5EBCK8w8pJfdAq97Vj888Go9Mrx2ocW87Niik7qwgfyU8Eo5Ee6EgzB9ayy7oRbtKrN4vduduEAMTKivT21SgZX3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NMDKQMbCDvo5nXXYAqEtmoVpHAhMgVK251y21kmYamXPUWkNBRmRnXPnZ2LecPhtFeeErYiPvbLK1XFVH3Tyokw",
  "key1": "3EzcZoGnVz5tTqhVUhJMyG9sDWbWnkfvBxnVoKNfauxTZkjYomKadZFmWzyGXbKGTi5yBFaHFmAxRjwSEdTB1jxC",
  "key2": "4EUS9KCsrUns4b1grRiJnUFXX6x1JFwoA3SFwKmRpC7QzEzyvhDEcFj5Nu2CEopZyxgJRHfHF7jQRYRaFTe68ZcT",
  "key3": "5nbrhSpXq4Gvdg2TCrsTHtWx7RCUnFZ9SRad9fmUUa3v6Enu2zoYkTynFDeXeH2vdcPJxQ4dYmxM6msfNTSANbGX",
  "key4": "3z3364r8AnsDtctnBEQ2hvmdMn4B3jvqpS37ZdebQhSStJadubhrsdAwHEFpkfXuerRSzcHNzEr2Wkef7N7xYuJS",
  "key5": "51bnXUj2QyWgue1tGnxRxR6JuNZcewyFQ6w6s6YDsjfnPvNc5tHU1T33ozLFQbw4xswsLuYBq9a9BrJ2LTW7WSJV",
  "key6": "yr3wnhzJPsTwP8FSqJD3HULtJNk73qMkMCZReeqDy4hbHFhgRRmM5XSWGNXQgiXaVxtwivaTXFcq98MwDeVaSY8",
  "key7": "2gmBBvX7amEyxu4L91nEKXh6tdX1qTN5vRXcb235kLBthgPQqb9iCfrKYjGtRhBT6LU2tf9EUuQ5iZCtFLPpp1ZS",
  "key8": "4CLxkWxpam2PejK5AqGptErgTRBhUKEeEjbCogpRAZoz85FrEeQyarcURPRXfAa6osvkPkRVqCZ7qgrwka236ntu",
  "key9": "TBXtK2DQMG6aLPrTU1KEpag4QqAA1srsmvNqqWy7iyzFui4vfiJ1oZ72YzKy2Mvf5q4dNo9vhj9Uq38m4M4oGKs",
  "key10": "5gyAwrNkbuVxg6ctGdGW9qQck6EYEKzx6i7UDS8YKjUUKJsRVwdgrWUNAfbB6DkPSzb1wwLViGYNufj69b5ug7kL",
  "key11": "2BnvZ3tVTfUCuf5RwVPe8zeUXNXZdavfJDoWW6qMGdHGHwSnjrJGMUdtgQimSFN3mE5auebgmx5eh7GS1nKA2UZS",
  "key12": "4FJgHHgVKkV2Ty3gWZM9vusLsKxdPYe48hvYUJ4DiTwvLCiHBUyvn1TdyTBV51vg8xHFN9mdu8k8Km38ry5bG1oU",
  "key13": "2S1waRmYgvqYDav19zpBYNvS53DcvbFbg6Z1GqzM6LagAjwFBJLmgM3YV9rmKUKmCeyWuddj1APDgDPeA4XmvZd",
  "key14": "gCaj8FZmo5jiB65aHjTYS3qoPYrKConJo2cuA9hHNWWZ24d817FUSLpBqWRfKJGX9i2okDkEsdyPVaWq7eC6kUz",
  "key15": "3s4HoFm3Z2rFWypouE4Q2ZWdgC3qwKbmpqbZ77zSZPe6GjQFLdAg9mZk1ghnqFYfeZKQtcQqDvxqsBH1MwNh7ikx",
  "key16": "sodnY6rf7pJHShN81hXv9NV9JhYM5euddFxDqFEzsTVguY5DrVgJf3QCUa4RoyCRFD5V1uUN89yrF6ntuQL3Xuv",
  "key17": "2jdWWvnYKb7ZKuKcsbGs8H3mtjqCVtn8L5jPUrwqYoSfqPh6RYgPmN2ScQ2Ac99nqeE9cmmSMBKithnv4ToqbGzc",
  "key18": "gmDvZwbm8xBnNCDmt6NZsnx9H8DW6TbWTKE4CCjhZLJLdpKguG3rnraJ8qnUw6gff7e8qFjhg7THzxTArpXwGkr",
  "key19": "2fuvPpfY8bB9uMJu4pMRwFYNB7xLFiEuM2FCRQcftnKoW5QQEZS51qsnKBg1KiaVEx7r4CDGTk2FdcsB26GPGaBU",
  "key20": "2UpCJLjfY7unNG5MumcqDshsG4XgYUmfajoDD8msbjBhWzL4KNDkq3tc8NWCSJ8GqEFhosn6JCx7Vvj7CZbAqckE",
  "key21": "Wx3beGSq6qYcMRVPHkqqcDTSNnpStVQe35tiN5wRJuqkCRn3LvZ4fGdiK4K1KzjA2yFn7sXfWsFaXoGje8sxrCJ",
  "key22": "58Aqk9Rnm7DRjf9XSCEiePpov8SEYETJrU9VJ5LXeuYaY38hF1xxsZahcnSUe3gjbfSJ4qhze9VdSktYLLcUm2Q9",
  "key23": "2tQauMz1HCz6iD2sGK7dpkDavP5J7ruoJ4qMUxazyZmoWJozj4TFMTavpjyH3fH1pq8K983HMVrpDSAsgN7kdtnE",
  "key24": "3cTjqLg872ZzrbHbE8qB89oESeba7uXQjr1vixad8HNnDXo73BBkfuRvUAAXNeqZqyfHXngqjNuijjwXuJ2rusgW",
  "key25": "4FLdBRry58Qzq8BRM1ZvcWwSxG8EfZRX9gdpaQQvRuuQ8xwHWMY84ir8qdD29hLgFRCzppG3mcDL63hLu4h6YHJF",
  "key26": "2Z56xYKwDFDFnGWMBWbYn3xSAGsmisEPrKfGNjTmEb2LVa4VZYaKN8L8AaMWAVc3wj4F4afZoWLg1s8BuB5VXYtf",
  "key27": "62DgRe5w7sfrPp2HHZkJytdvivdVyTAjFHqfYETr7dKYZDPfnASgDMVBtCVDjbKjeuitWDXDXNTzruj5Ds7UPBzN",
  "key28": "2psbBYM1JqYsDan2DsxHGVvD3LX3jakizT2jkLcTC7vx53tkRmuvf3vu4jnM1rH1cauue8LVsSxR4qzVYeqNnVnj",
  "key29": "3xHsYi6epXegzhuqgEGZG7vipLDpDGEyD3vt8QwwJPMXHaHSG4e3AZ74R3yhmct8mALTAabs1wLCVLqhrrY6n55v",
  "key30": "5o1NYbjXKru882uSnhbt7ca6o4uhybSdDARKEdtR9UCudCUAi3hFPRQNTuyKHzNwSZdiDS8kGwTaWGQH7KNta6er",
  "key31": "4zZHQLmTk8Cum9RvjJJojMAMhKo6MHaqqGjHqeoTEpA4ai8dFHvz65VuneWQm41kR4w18TSvt3mWFyLoh6DbHy1z",
  "key32": "3GTucNuXfybH645Pfpu6HfFh7BnWFMRtJbmEs9s2vvcueGE2nKhPa9TkmfAP4WMzqtS11v6ZFCkzzo3iQ1LPYpM6",
  "key33": "4dEoLqT7jwrGmEqyrriZ8ULWYhYNuRz13H2nevJkwybX9qyKBqLpMdDaUdrApfk4B412baMgP56fRpuowoAjavUF",
  "key34": "5DUfotDjZ1cxJK3KKnRZDYuWg9v8mrRvJuShw2YzyvmtK3RzH49JG7Muu2ke3orRFuJstdVtQNyaRgK61ADhFebi",
  "key35": "kfmGcW4inbSyC5pd4fYbNQaSaEMuKzi2Zum4MTQTmvRPh1wNuN8YzLNMDdyknYN2SSHPiyMvpQvhHeUdwiKMzKv"
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
