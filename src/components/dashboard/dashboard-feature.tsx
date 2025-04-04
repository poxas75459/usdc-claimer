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
    "627w4HDr9XgMxesNZC8GYW3JFgXPeme3ajwQUJLsHW1p6ZdiptVY32wZ56qqnHPiPacbQajcdfRiZhnPqhXeA1T4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SUJMnHChPfUwWmVeGqVP37ei7mv9e5LZTz3bWDkvCK5iyi4eK2aY9TXA6DxKCEysQ7qCzMXAkBhZacHAKuRAu8j",
  "key1": "3ufmQrBciHtvGbVZZCYNKwf1gQ1QqLyXwMa2hEDEdmPZmYj5UsVVUm7YKKyKP7Jj9FxdJP3S7L8fRJ352EBbnujd",
  "key2": "5BAD4gb1Vbb1KXcf7KKxTsTgAjtnjuUvEgmPPgeDcJY2Wkz5Zjn6ZDjNZkEfd369cYsUW4XhAptn2GdorgeBEke4",
  "key3": "PVR8cKXJ3eKntDjzuHuWyA45jYbMiHPtcZTbzSXQNFbHN4k3qw7v5ezsbVhZAjdhF6KiEaLVS9AovUqXof7s7Lu",
  "key4": "5bc6L9BZ1iHg5GV9aS4ugP591b9sM6psXNtGjic88wTivajGEeocisr5U5Ra15gWiR8XaYifSnQQqssUHNDA726r",
  "key5": "2vBT2WXxqsgkaoHnrqJHEfVkBpY5q5RMoASHpMqN29MsXrEFCoYKE3vxQwnbLXSrvhxx7JYWEvpRjU6HMAUsjxGh",
  "key6": "5cRuFWgQsqoAdUh954VrjJKcTyWpoNNEsRVDeH7YvRfc4EmQWHSws8PFM9nxWWnThoh3fJsSnypqSDyJbUeL7GrF",
  "key7": "32jNvN7FFxK81omSCPpNUjn55tSYE9MT2hyw27LxZEGbz9PPz8yvZ2Cc48oizki156ELAVf3rxXnrSUkbSLG4Dbo",
  "key8": "5PNv36ojSEVyYfF44AEKFu3ahRpcUn5LDXqzas9hYSYR8Bzo4cggXMp1jyg7BRoGk7qDamuSbpF2VTvTmgeMTmav",
  "key9": "Tv9smrXVsDoJSs6MGAfW4v51n5szTjKjpGYzcPaugwMgVDtbWL48wEV1gdWczkzgm9oJeb7ZpSGczwvtwtRM23j",
  "key10": "fTKwkHbLzGbxnc24sUfjG359LX3DcnvTNojCwXqXYzyetLm5boiuf143jenJ1YmpY5EiPw6QZxiehotVgsXrcJ7",
  "key11": "4mEH3HcPJkhTvohTogQMYsVpcM1q7JKkoUVAz6Y4GMsZB22nbVdWqXD5ptvo9tkK49KnvLH1gpPbSZgVCsYWHWEE",
  "key12": "4BpKMmk1umDuefkGdVTKgKiJhdMxujRrrx9fXtSNUHQ5pqcRUYeG4MLpzEL7AHFK19dEvQgPELWJXLPEVW3wPY2n",
  "key13": "5ScfkTgraNUYwdrEt5D1S1fUoQfjLYJwfySgRKnyF11De1aRSgLbD2sqLvFLt4JbjF9QxeohcXMThEfwUCqUi8uu",
  "key14": "3exyc2Siez99wKm8Rn1yiraqc71up5EwvyZuKDzBbGSmABPEpcHNG7Ei6UNeYtM5WBz2p4JRT6dUeXX7FrXVSt8i",
  "key15": "3ytFZbSC29Fwu3RM6C9uWqZqoMD1oUbsDWPWJ7AShRMDZGq9gLBAQ2AC1THvMj2JfqvbgGiGUcHLk3ZGzWtJV54E",
  "key16": "3E3UmwgwPumRqTPRAmFR3T9xAxCkspWTTyXRJbe7pzJ7botMAZnfNr1F8kUFYgHKBygKvdvVPTW5pe3qTEnGRRZx",
  "key17": "5BSMRCXVRQteMwoA6oFq2zawzLgJmT79uaXt17uBNaJSnWzusqdzunNSH7kkK4SJhzg6TKxaG8SEBkYKmp8MAcCr",
  "key18": "2zpUwLpMyS67a7MoqqdHZx4DkCrBkPPytVz2HXwCCALvqsFV222jCErFC4z8U2h2yzaWssrbPFVWiCatfaq7FJ2s",
  "key19": "2MtCMqYCgVTHrFoR6Ln5M4fDAqoVN6XSxSv1mTUMMoPyxpu8V35yWnwRScyTCmMXFsFHPRLVCjVKQdEetDUZfFvp",
  "key20": "83UGT68e4R2AKVqCqhWkNe4ArEw7SzmPJosyCb55BafTqiBUQrPVpR3L8ZztzVifRVALXzeJMh3woQhubUqTuKU",
  "key21": "5VEXnhTeAnSQd7icYJ8Cm4tCLBRjdHTCF5Yox6zADfPt7HPgvdLbJhkryuRTkUfHFrdV12FKiZaztNGSSyKp1C2J",
  "key22": "5snqBBRUqoxromk7GGLB9iJGgB9rHcpscSNwbnnm4A49tKPwVGXvbs2QPz7e3Cv3VcYdPDv3Ba9eeFgYnpqNY2CU",
  "key23": "4jo3K45BYuqN1xbvPHhDYZR3aN8ppbsNx7rn3wGtmgqcmQCAuUeY7uCGCeKb5QqRYbrWkuuKeT6pV8WYM6KgHMbb",
  "key24": "5Q3NnS85KFCNwenTEjQgkrFXfQjZ3PapsYvtw3ENPX5jcgypFZZnUMAJwGTkQCjMfoVCcCPum69eoL739r6NnpfG",
  "key25": "4uSDsiZAf1YG42He4kxRNm2mVg1DB48Ci8MEpGJc3v8uwQv6Z4obQ895GmEru4674cMXjATgLizSsasEJhRoDyHA",
  "key26": "2iKGRGGV97ar9Wt5tL7pJ3DN83sr5obX5swBrJxsgHr7BzP4jcr5exk8HH7WR5XLC34R9AmuKqQDDGP2gyitM53X",
  "key27": "v2CnE5Q98PquRujMWiYm4AaYGdxHw3uSDafWB5yWB3Pc99mwDuHa8ikrfSfdbUBNSZYNnew4YDAczCgpTxUYm2U",
  "key28": "2iPHx2KMvjAtt5AoWp7R8NXrPaU4L6pZ3tAzk7FodJQRjUnCHp3JRNegMFnT71WkPuYXpxoQPFBx1gBMpDdK9PsN",
  "key29": "3SeXmHrTpzcF1ViVP52reSNkr8jTuPtqHSHcRy8g8J4v5pmAvHbXzoScR2hAWGEPqFmAJptfE1FqvdHsHNwp2MuY",
  "key30": "LsoQHhMW1CnVSS2phtKWba9DEhjKXLPTgBUkz51ZTyasm5PdhjoLuMQmV9RLmTTTiMGgtVWyJhrwHSnUZmnTarS",
  "key31": "vbp54ToaJiP7n5ojCVoxeTX6LQwy1fbT8gtbdkVEyNMpp8veeC71u6rz3mrQ2WSn1pWCexBGuTxNBrzFk9UoVig",
  "key32": "5bAMeFsoD1hvMuBkqT5HZr6sFtYnNhZr48uEHZUgdR6z67w9TNmduVB1xVd3h7MrFtzkrfvGWtcrawWmmQH5KL9",
  "key33": "646fcZckdghaCRV9JTDpzZ6ALhfZC9qZVNuLvqWhfYLWxvm6SKZD5Wp5hNS3TzDNdiiUH8gNzUw6dYC1G4ajAYfY",
  "key34": "3ePkqkAHgNdAzETdzYrWnhhJoGZFk21pDEzLQrXgzWoxfSnboBaqDhGWBpP8EgQWptP6E4YX4LfLhsH4uKj68NCS",
  "key35": "5nShwBwCPpyBxpjqRJAbfFmj15rNMFRXAdMf1iy7wpepVGh1aC1sd13FYBHtjSWXZxteXP8uGrvrLVvdMH7QBNzA",
  "key36": "dTKKW8J1AwW4pGs8XyjjwCmtTmWXcASHeMcjhHKP83mY379QLYFmdXneGgLdAxwqJ5hkTG9KATruLzwbAddo6zm",
  "key37": "UnHPMAybkPMEQoHQWs3aCjd2KtbSQYwGcskf725uyagWQPs2aUq6wLo7VtB2Tb26Am53HaLgMqokmFx9DDQhzeW",
  "key38": "2fSmSqUckT7CQjDdHbn3YksSm4pxeKwn3cTN239oKbWi3ENPBJD5eXX3ywyHMiy8phHUgjmkj72n2LwbFwKdbbpf",
  "key39": "5AJg3QyCj7YYyWHENhK394SnK6nzhZ3328koaH2yb1AC4WHQwxp2YT3bnvc9FQwALNdWwLY7KRPb2uUNUJYnn3sN",
  "key40": "5czCwbMBEdgpmRR4qWrhCtcGfmGHezYgGJQviBuQRTY8deV9G8JnD9bq1s8mwxJF6rPQKmEt23gvqD3t5LxX5T8D",
  "key41": "2XjUmwmEtXaYzNeK7XixU7BWZevbZYzXwCS68ZJJ77Y9rkprQxS9dLKZAPiwJ7LyPz89BQNChPowqCCJ6BxVvLyh",
  "key42": "4bbZJQMXonzvnxhC3e4G5hTmMb7Whyj17D4jcQUmVbvwZw3GVT5vYdyUyGqbjvtGjuG9sJmxf7kNfzPgaRWcbGU2",
  "key43": "5ScciwnKkUymHcXANvatiiaMGwzsVqVPnWYqocwFJf2Fdsec8Hh4zU7CyMrLLA7tbvjBs914WFYwm8MCJVvnC7vj",
  "key44": "46r2AvdzNAUP3k8eJYNGEpJ2GaLMav5TtYdznPV1YExsNQr5opBa8FMaVYvrZGdcmFecjpm7XkWhqVwf2qNpmDjr",
  "key45": "4qYbP5iNta5G5c1VDJ3oSuyW3ovquHJBP1ZzZ4S7TqVsEDHcZVkp6Fh2fGsaFuJV8DgHgTMuPSpzm6xxTMn1CDch",
  "key46": "61JwTtFdkfBer3jYsLVAv2Ru2yaqRCrGYAfS3WkSJcpoHEG4rKWrvXdSRaeMoYyb1ogPesbw1o8uj7B6ohcmtBZ9",
  "key47": "5HnWCUkZfkN3iUN3TtcwsjHjottxzuB2jccYG4m8s8D3mLsSZArXuS8m1cAZCmFU6MaGpvXgJ78niuKnsWXCneds",
  "key48": "38Y6M2TXvQAFqB8C5aHq39yVhmtY6KL2sZVgpkR5FpZv6b8Y2iWWJ9mVgWMg8Yb62MB84RHmoq7RMTuvnEdb6afA"
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
