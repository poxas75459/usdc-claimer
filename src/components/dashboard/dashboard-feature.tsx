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
    "64FXjESLeEn6a26h8EjnJLazFPpQSkSmdgYug4mX1Gi5wwAFi444b9JVEpx42w3UwLMp4JoSgdLNKjVbhRsy6nC7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LaJsXTqZy2qTZL2QZMaCaCf2eonYhMpGePu9SnX9F4MsFZ1Ynj7zx8Rm5wnotyFe6WaVqMyHbiRVohj5cZ5qgMU",
  "key1": "4quKK9cqjhUSzLRb8CV7mavABb2JVMQFFHzzTBJ49TMPDYHvfzYt9F3Dm3ZCruuLLr1cW6YydgsBnsHCmcfgnzQR",
  "key2": "pfHk3nZSEq3Qq14RPPAkyi8hnQqzjyfBitvTurKapgFtbeikPBoyPDwx8j1MF2n2UadDQj4EpGnQENyA7hCmqq3",
  "key3": "4SvJVJAHyfgGUBcvU1dDR28upTaXaoKwtWAUWFfBesFYEsJeKS4u6bhAQCu9ty8uBdWZGcMx8ybNxLfF6vuKfFHA",
  "key4": "4zff9ZEdNm3S1zFgMf8NQuKLZojmc4Lr62KdzVZppgFMUnCu8etKaTPz2vtJfztvkDf5BpAn2Y9nHnwVrVgqHX9A",
  "key5": "MMSfoYtBPAWhL6hg6Edq4ScbpR5cTXdK3FkRnHzs2sfyTuE45oJHXsq1w7SCk8kUDpn9xHKLhYZjtNmfCe9HANN",
  "key6": "PPQDNgBfSkZ6W7QEsL47nogkYCFK4VnS5EKZCU1YL2BR3VSv9BMRfqrcuDrbKf5D3vhgLQQyjVfGs6Zo2cJXeK7",
  "key7": "5idH28XCJvkWMXmbxz7rrqaNs7pQpWPA6YhQPkVZzeyCQaYJbzwGytDK5ZGh8vwE5ezDFrrUpBNmPdGme8P3sbxe",
  "key8": "HrpwgtCw1m1PKvB6qR7tHHRgfXrKVS9ib1uxNA65HY95GuNG4bRnuiSn8Rpkk17RcMqhekzDiLgdSTFUbcTMoaQ",
  "key9": "5wq3eYDVLsSFoANZiWrcnkmouK1a1JZ7SYPQWDwpxB6ZCm3DhC3Qu1sPAzJP1sorNz2GYb6oP4vmkUcs11cQA8JF",
  "key10": "4sRVCTFd9KhvwnYuZy3WZ6FCvJJTjEySUDxU3UJf1Vku7M5y1GkRgszK4SzXbREV4BZTVBUgtnMTWNzpjEW8Ubjb",
  "key11": "6LN9MhBUE69KfDLwUFYuc4KW9VkPnoHDPWqy72vXg3nLjUPbz8rJ35A9vAJQkmRhAyFNSfxKemBeGZiBnrS5Bpi",
  "key12": "3yE9X9DQrxtAxDnwN7NtsCGpXg2sipAw8msSGH649JquUqiQapX3ABLFTrXqR1P2pT4NMayZpinRTAFK7oxZCDFX",
  "key13": "5TJaivvyc9ykJ1BsvMaNxRUFd4CVfXMa7589kT8DgL37aPsbYn8EAK1fhLwefo4VQUnuVrkVP262V3eStAbQ4KrB",
  "key14": "333R2N4YcXTVxiZyfF6KuYUNyqhDPZoCAxqSr3T8bM8vCPHDKePiJY198MbFFBP9JjuGQ9Ume8vfZFD43ZmRGX4V",
  "key15": "55v7q3jQDgREWJLWpbRDTEV4mrNiCt8SCpFMeBNNYTY4bcpkc76ZEkTpEKxU1zFMiiradaA1fS6omz44KqBSDB3v",
  "key16": "7U2dPXQV8LLjj9suJFZceQmz3ZaPWbXShWTPhHz9ozpc37ztVXnXEzC9gPXxR6VeJJGMYGAU5gXdrM2UQCz3RQk",
  "key17": "3tfiJFsKbVbiXHwdv6B9b9BMgkk7HNciYErhQdE1zTt8LHJ261AwKBhTw3H89n7aXecDAkfzVbmkd9eVYGHeeWzf",
  "key18": "5LhiiYfNshfvMzYfCZwnQfLfp4V3xBxY883Nbx78uA4fQSjSFZA6Rf5ayMLh1pUC4VPsPNr57bGKJPALkxDkAG78",
  "key19": "a6w8W2vgBfKYzAQnjyF5YFyo9h5BF94v4eeGDieoawdKydgKY366922rD1ZRmMaGtUFMef1hWdr3rLJqJA8YMen",
  "key20": "4zRBPUKzHpu544i8a4TkfDekGwVs4WJedgox1AhVADjivQaxyBQWiA2TbDiaSRaYLrw3z9eG7HRqC4R1WgLMYzzh",
  "key21": "5NkUddEEpoypD75tmnpSzgqFN7WMnf7KR5DkvwvCuAFLFZ2ffqwt1qajHtdhRZJ39EdD535ogtfzcuJAT9pA8fNX",
  "key22": "2tKvpk2WtFSmXWtRrKEF3Nc1kHpE92WUpVnXK4rbPoK5SpLotG5WaVGsKAcs6HRiToFmCmuHU4pTFKvHmjEF4WVW",
  "key23": "5ENrJUEzBJdeYyAB7uaWBU45XkqJAtxMz8uPJufjiCT9Ycd1iyaBCoy6EU9RXwxorjY7b8j1LMmdoR5yWC92EbRX",
  "key24": "3tau9bECQoPVQrFiA8YFdBDdwRfNRWmCsXRw7Ht9FdpMt4o3EaKyZA7Z6gDnFgP6eE5DcgrpgcMdaC3gKJ4jFaUN",
  "key25": "iKJQh6JebJvyJmQcYx1G74VJbqXJxLUv9v2frvW8Uc9E6ns23MKbC2pPp341TSJdyP7hDUhWo4fpsafM5Z2yafu",
  "key26": "2NsAtHrTrvCmM5tp8zAgtzWqC7HoAGoXwHnYpQ8XYuUSLKJksLKsVoDr2a44oGPtTh63uJ17Gqb58DQGpitxf6PB",
  "key27": "5ef9V1KaPESk5zKAPdDoN5FtprnnNFA6ZKTic9tqpXpeAnaVfnEvoDmC5b6THVXqQhPsyERTVbcZK7XkRtQ9nHX4",
  "key28": "5Vfr8yEXdTYE5djAp6jgBDRETMxd4zRg5AF2cjpDEcKZyRDkZSVhvMKTtRHQ9qa9biH71DbURPjSrDr46sSt7a9X",
  "key29": "5FiG1PWjx1jZxP2PGr4g4QEwotPXabDDwLQyH7ZBtATpbfCyPrDzuS6Bny6KoKC3QoeRs5ahqMfgHDtZYcrUQcyo",
  "key30": "3F57r7d4S6yzDF9m6NoPZMKDKneR7ekoK7xJFpTVzv9So6RkUtWUZ6488fYkQq4XKGNvhfHkuxbyYZ7jG7LfHwrv",
  "key31": "4P5WXYgP1nEuBDKjGwBjHXyRrjDs8hk4L9TiW7AkvRJEzqT62QQEnsL1Xk9q61xCx1zK4WNxPeLqn3QQ9YumR8PL",
  "key32": "521YE37kkvZp77zYhLfyT5LEaEke314JSuTHnwrqpTYdgeHH9DRkqQLwRt3XgUXWMFb8VsHViXtp7EFtgXHPHMR9",
  "key33": "4AE8oxcVUBC4Va8kuHT7vHnaiLbmpiawjXj76PtHBRX1rp287FJ1JBcnB7YWPDzpha3sWmPqHxvvrsuF5jkbXz5L",
  "key34": "23wUBRpA4F1VDkFrVGskGAVnVHqVLPstnqNkXZaSpTVX5YQsf27FL4rH4VKZXYqQip8Z1p8rF8qwapHUNyfM3Wg9",
  "key35": "qybxVcfzeAdiB3mrRkkUWT69Nv5Rb4KNXSGHL5FPqrtpnQaRbwZAp5gHBiUA8B9VQeTsjy7wDcdJVWeeyYmrKn1",
  "key36": "5VYRppCXKDHYoeZAme1zaiK3TTTVgUYc2DLjrSWUVxnfbzCo6hFK6xsQefG4FDN6mB8jhUAadaK6dCdXryr9exQ5",
  "key37": "5uyYjtory1J32xbP7VvZvVidFJbaeCtZ4cXSQZfz3kL6PCqwmXb6jSBoABrEwY6TApCoTgz5W5MDP94UaaNrSZUB",
  "key38": "4WSHY9fb94pV51pqjsugkUC8AYiY62FygBg9SGPegWbQrbG7KLmc9MspFSdQuUsFuzDVBVmXSNrUyAVKm1naz1xw",
  "key39": "3wNjAU3oJKY8y1r3kWRbcjbv43sGQY4c1iK759iG2rbiU2PhyESZzVjnEUYr7u8dC3urC3vbcFHAkz3NHKWHXwJr",
  "key40": "ErxEC3VFL8kEhk2yaHd7A1EKfQe2t9BMPxZuF83pTeqGxUJfNSTVyuNysHpfEPcPT2YvnhuyUqGvxREQeGj7TVn",
  "key41": "3wuPWSKGdUK2MkrFZDUZTRs8vAkXDPUocGhVRoq4o2y6BBLwAaM221bZtP8gZTtk3nZpahAmrnPwHxBVTaDiMJZr",
  "key42": "46ov5yzjNhRM6V3ZqbjsqsAARdF9x1jyyM4oHH3ARPBVZzPnLqyyYtZSUhkNFVYW7jVjFEXyR5qQFRsob3qgsvV7",
  "key43": "49p4s7pyDQydEJTPomTEJ5E3UiVnL5SWLUwHN1cBFTY1ijSM6UkYoAX4LXvrFgYP2HDsrUKkkxiBwCRXYDZRjdVk",
  "key44": "2pRAspZQy9NVYw2ZEKCfAWtYo1HoCTL8QsALePJKoMZjhw9TPR3nuV2titZPHwDAHhSkDcTasehApw3Gwf1tiyMC",
  "key45": "4aSUU4dow3RP5EgZUySfa9n1uJDnnuazXuhoAC5c7Y3YwXWhGskpY3uYxfVFqXsSZjr9LqKQR6ZRCXunDdmqwn2y",
  "key46": "63PHAHbdgHQhgJJNzuS11Z2JCTRcGetzVJb26DRgyPLkDDguLgpTXWbBincXFNFnFBJ17V86gGPpdnqnGvKrD1A7",
  "key47": "5YmK3QimKFmYSaovkPekY2GFTeCSVBLTKk9xFA1eU9WT8Z8WamionWNYo6u7kCuy16zoSuTTEQBzJquvaZZ3QEUK",
  "key48": "4WREva67CPDAkNRV8XGnNLEs6fP9VmvhBHF92Vucwkput9C9RxprPs9ieiMhd1BZvWdbTgj971VaQ7r2thHNaL85",
  "key49": "2umA57SaCAPqVzRy4x3NrscmiikPkF68BWKCD2f5xGjiQphLdwdy62npL6zdVoydt8GgvYspNvWF5ZUxEKRExGdG"
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
