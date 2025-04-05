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
    "2XzG473yAmUxjGYGvf1ioLyUyGMEdWU2QPv2jisPudMgBa21pjfHgtGy566ZEhkRKaJ3kTvfmnJNJLzcfh8Wh8AK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54E6E2TNaW5Gru9YbmgL59my1UNdcjmtuwM5BV2X8oLZZQNMVtiUYrcG7aA14A71JTUKPb7HajP456jxAnAf9v1G",
  "key1": "3USAuLEaGyrBwM8ejxr9xnYAx5CFL48ErJqewiFYgme4Aqee4TPu78vmrZ4skeRu8DvsmLbxrCr8oAw5bXhVucfq",
  "key2": "2Lds1RnpkyLYoTjat2bx9eGw7zZUBWscV18Mrj1pYt4txkMXKgyeNEy7bQDDNd8uCNm826AqsyQSC63J5kSFHjLb",
  "key3": "4e44etz483GR3J5RwFzzuNLqaaTTqaV6tYut6hmnReW6XE2EE3F6Zw1LrZ7iT63qjSkmDk8neKBwt66ZR3UyKt37",
  "key4": "3eTCqYrc9AAxDcX2CSBhJ9wb76g3VttBa4LpNPfLGHi7haoTSFDeWHtDLBG6FaXYSqqVS7z6vcAZbKLTVpbpqd4X",
  "key5": "3zH7wqP9Va3hGgnXEXrZm1kwAT1C17qkCwUk4rN2V7gAMrEWyGaFaJHiapoeMGRbUiyLNhGoVerCSDn1tXwhhhjC",
  "key6": "wMWddqnnzmGnoaEfJu12aLcUaMoH5jRNqmiMzAzh6tUmhXnxSnQNqwKfFDLmeiTnJqUhC2tiMQCeJoLAiXda6dU",
  "key7": "3A9XCTYXP3LAZ9sE7XzEsaKtwVZd3LBXNsGnG9S5MLZo7LCDssvKhML9xgpTb6Nsw7eLAFHAhhdRDD5EN77eksLM",
  "key8": "2HmqEkBt1A3WPgWiYhHuABRgGZ3mDgMdmTWMXxKVMJ48Jx3Frh8VkwNdhEueu55STE2KPSpBQWfrjazx7Mzo5dHX",
  "key9": "3Qv8zmhUgpAKbsF78RaKZHzVBQQdSC1xkqyTQq446ZMmAACsQvksFp4ogq516BVsnuS24fPugN6ocr8Ddu5ofXkY",
  "key10": "2izyHhsdrF7i1DdPoJkjqXYPFAH7Lp8JZzS7c5Z8Sh3eSeHk4YzRw3yuqpejLikyEz3kpSzh5jAoxq76LFvd4kgR",
  "key11": "3cVPh5E7tUaG7rRKGgPZzDbaAoVSXxqu7AjZZUS4khw7gCYTc3s3uYPanyxij9B2SyghMrL9mPWtEaochSZAAzaT",
  "key12": "2JEo1CdkNSYv7emPvtfKLVhyT3g3cWiy4AdaH8FKZFRvxM168LN3yzM5W6d6b2s3UYL7KbFkTyoLVwcFm8DcJCcR",
  "key13": "3KRc4jQurCW9bNwZ9SFHUXeYpp9pMTWdp9Lzsetb3K6m5W6hny2RDwQcnbCifkHbTZdXkUcRgMyv2BmTQUZ4Nxkq",
  "key14": "3EMTcxkZEGYrHVxF9LUejKrkxE4UqwPrXSx2NPgo3G1hGUrhUVF13qgKPVw13tNFfNmEHxD9PXT76V5UCUobR1XC",
  "key15": "2Ay7wAgEXN8xWzrHkMtGzZVnnyBoaUzqKDgSEHNWvD8Bi9Fds1JkP8SA1yahGBTpGr7ykmEytPxHCQxPU6Dy36Cq",
  "key16": "61zwxw8hhHKFBztbxusZYvPtBTHmF4HB9uRyc1R3pbYyfH5shMKSvpjyDQXe9gvMDPD7RgsJJ4YjWQmgxjT6TaBg",
  "key17": "4iHUMCu9hqHdkguURgaJRSGK9Gn6v9o3MZ6KFZx9vtUfsCEcBv8gVdryR4CMuV75tGc8EWrZStria85bihzP86p8",
  "key18": "3nzyBuZwj54UNCY1bxbkDteui1fpwsUQdbf6EcqPMxRNXJb3JpFkiMevYao9hnY76GuiqWmEHPBsNriwp66yQQFb",
  "key19": "NgV96GeWY4dgJ4g9SxFiJzDhTSUYUBAdB4d6iEMBBV8rT55vPUCX5wqRau2qTVkBvEkmtZynW4P6FPBS42jByPW",
  "key20": "4fgakSJjdozd6V2tn4uVD1wLaWwTNCm9a9ccWMFLf6xMpdYsW3GjQS7R8EDx4nff8Vfpt2LPmShZekbZAPerUcU",
  "key21": "2gGePuWnTxEVAyk6LC27o5TM2gphLh6agzbyzuV4x1nbWZkKcFTZfUHEnVu9JWMX47VQar5wHcf2DvuKsyj8ZRA",
  "key22": "5aboVrfTi9tKnLBXYt9eSgnUxtSmJAzZQinLZAJZUv2mtG1AsGD3AmzCJdifxwk7HkuDG7y8ZTEQHvyJLL4uRicj",
  "key23": "2Lkbg5gXpmGjcsCqLhdEJshSW6Gn1a4ioe2a4tQsAu2gAEZdQjDhKniw5Z56VU9zmvoL2jJeSE3GFUGvkKhKzMuf",
  "key24": "5uF1ayeAWosVsHtdUNHTnnYqS6z8A66nuvYufYr5T1s1LYtyWyiRESVb2zUQVDEvWxrEFcrAMEGSVzJXs2NUh19g",
  "key25": "3bqpFh9rT3Fz4ed7JwJUZcnBgbePZhJguX62VHgQrQ3dTVbErMz93pc7wrfXcdhxemFezcCSMkXnFiETMa9hJz54",
  "key26": "3yqHWXFtr18Rwkn321ZzbPuBvzxb6Njf1D5apKshhisiHTCroLBeZphwAVnLvz3Ze2zDLmCWtjMk2o6f9DDCxM1M",
  "key27": "4y2eMQrEvBtryK2Vc4KX8wup1gppLssNoKNpnHpbuubEcGPQEj2t9havRn1rvfpfLof7kCtiNCprJBEY5PvDQxjn",
  "key28": "2xm1KUZXs1EW9T8eyaGBwH9CQmvU28cZ94vzYQzoyBdtFPeoext3PvMhRx6mF4hvg9ZECoQnJDSp9DpSfJnN5g8u",
  "key29": "4sPPs9brNeTwH4HGdRAn9aTsWos6cNfNqD6z5RrdmmPPJzW2shT6SWiQ1HR8SDpH5wmqwoav9wn6quWmwxbXCZui",
  "key30": "h1yuw3RmJAUBj3L6EvxT9iFCgbc85PffW3o4g8W9CW6tcrAKWdCgnSxGUuL5tBS3phpv5xu4JJbv4pG7NwtcAbX",
  "key31": "3sMCT6oHYwYE8dRsPU2387qU7CgLkVXWzKin6ggXJspbqGVDW7W6CfjVD4AkTWTRApeqXUUt5VXGXCTFcCvaUgoR",
  "key32": "3SV2suXMmFt93rwbHAzKas3hsMJgBbrZYaJADjb7riMDL8wRdo76Mk2wV9zYmwSs9goXSDviHa2WTSvXzFAwRqYB",
  "key33": "4fSxBYLmqoSTCGnnuPivdcBdtosF83NapKFiL7h3QJNgfVEaaJsVRe8RYK19H58Kij7YcLEakQNP9Y5yX4ZaV796",
  "key34": "33R7jPfknb5pKStR3moEcVAfYNLxDJD9UZ9Ez8Sm78AzPccCvq2tEPzfNxZPqy4RwmfGizF3samBeSDJm8Qo5Rdt",
  "key35": "3z7mt4w4vy1EjbrPWKyZraBKaaQnwDrQ142EQtqzU8TBfKAa2Y7PSTiJyDr3PUeTRi4DspN7tYoK3xNqmKgNzGaz",
  "key36": "3EyZjf7qCG3X2p9JBGRQ3iPdFYaUY8q6KqqZH2cPMmWBPpwUJ3LeNagpp3UJZKc97gMPweZa7Z9QsLNi7dLnGJJD",
  "key37": "3J9yQJZxT1WBVva3uLxMberCbSthNLRN2V2cna86sLToKRr5WC5Sg5cM9uhCDZJuGi1kVPW9MwjZNqMbg6rBNHMo",
  "key38": "mxMo1zF4SK8CnUctsVUS4xyQYCLrepnxt7tp5DuPbcZ9BNtPDFA2q9b1FW6Wr5MvgRq4EpshkR6gRLakC3G5dir",
  "key39": "2zTmPgsB7TiSqcRDPueLmx9hz7PWkBPLZw7hkx5r2K9QNxv17U5bj7xTxeBgXKa8AFzwPQWaWKLTVpKArDUeSJnu",
  "key40": "21CDmLzvgokuahBXEpcqqcSoXACTuGaE8e4fnHMMetJLBmM6JkVLD6QVjSdwVX7Mg6QgRYSUWDgDu5XrFb8eQxbu",
  "key41": "5c2Ve6akUrcht2r7vHfpvHoC9FjRqs1suB754wSWTrreUdEvPW8AKgxcBh51bqdUdbaPYZMcNHvYRZt8M27jSDgN"
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
