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
    "54sfMq43x8BwCpXMb3pniyzhoYBHjGQ9jdfYYX29meFFDW3V3JD3WpNbYYYeS9fz148jPMXSKYNZ51S1cXMw3FKp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zsZFS5vVzNum98rNHiNChiUdYQU9hSJEE8SLiK79ZjMe56CLh1Uaf6STiXqp8FwonvHEXT5yvRAQaqYWbfH1ubL",
  "key1": "4i8bLZeV9RRacSjQzdFCysYcj2Byhga23qwGgFFutmPpdLp2Q3Snr4zc9XrM71mFTcu4FfmKhVGkng82j7xGuzAL",
  "key2": "2HUSwqkVzEcKsWDq4hY948rZ9cYyDh8ZnSgJkboYMm3YxvpYsNomndZYxQzvY8iWQfZLcRhgQqcv2QW26ePhjAXb",
  "key3": "4tP31D6R9TviAzDLFotWj7f7uHe8pk4CQAmS43D85qHGpth2SYihyMEAELTn9rVTwoBYXL1XDTjVQ6aJGTAsS3qA",
  "key4": "29e2ypMVAnKAjqitbNsjFrpGzwEV1PAZ2Yo3hdks1YYj2moKb74DdJ3dnTFp8f8wQJ1jFJLcnTeGJNGKQmSBWVBP",
  "key5": "4t6qJAthcrAAL95ZMcpmvFUEaeftpAWFPxZnoX2r7oXuP8NxY252E3UDShkQCgJp2Wb2NzZTkSKiJZ4pEiwQmxog",
  "key6": "32adwkrGWuSpPdA7cmqRMn5uPrnm5AP6oD7wWsuZ9chwtJ6cLvEM5ysbH5B1MhnvRn4cyYE3Gvnr1Mhp2EH5Vf8Z",
  "key7": "4YWpDHbaYZo5YGdx9nCrZkhzB2yQg8vEeJxhJusLLWNZ73trCYcxY9jdLKx6yqNghdC94PyGEUvJBfisW6JYkdxm",
  "key8": "wP1pujuMMH1B6gxCEHC87ttVsfCCX1H5NChCr82sTSMyUwwochjkd3Zn77uhjKQxZJA7Vco2KzpCbcxkyjvsQFb",
  "key9": "3W1kcPUCeSguv2VP5PxUHuTqh1vvHuBhFTwuLhCjKAqw6uYtqEN46M9vbkbxc5GZuFyM3SUzKmXuYVhXvBa9giuZ",
  "key10": "2aAJJ5y9suyirHeVpr2T4qNXCi9aTVMBd2afyqtf1c2xoE6V4ubqVNg3ZoLJRD2Y6VLxrKJTzgfJFcMzotYvafSg",
  "key11": "2Pz3HL2pVFwaLa2co2MeykUeXxMz34JH49NrDT9g9cj7ny1pdwvQiuATWJr3cMv88fmvriYN8jQ9Sasu5mDhXGAC",
  "key12": "3hf7B8mqwLYbPC2p1aoWGeT1rASsnVHHWcd1TsCBPrDWYC8ysBM8Z4BcWxCNVZ4fQ9PBV4vaD5FscfyKZV1nxb4U",
  "key13": "zVA5Ekh7xfhQbtaz8bW6rst9Brrax9jMtyCTVboMWhPdDYm6PkTfbh2d8nWcthWm3vSGMnoiTAW6VyeFgNQEX34",
  "key14": "53dcZDJK9rZSB7CuCEP4ajDoohGtBXkiNmsNG1Wd4x9cjKJGLFGn9sdf71VA4JCHxd9V39UUfoUgrH96F46EDhva",
  "key15": "4sTGy7dS268hTzRu1524JirM4tSAF7EqBJi9hNeZ6oLfsZqu9xytB3eq46gkJ6rs276V3cskURXi4xaQXE55eJqY",
  "key16": "pfNyG26dTEtqZ6eA5rAWM8rtPm3eSczThnTYEYuuFrpwXn92259BGQaZygPyHmMQ3b4uLaBgN9yYb26VEXt1qCv",
  "key17": "32FPRPRbCUHiBbb8gqaqpTXVeqb8xte21khm7MW4mVJVqipxVte3jqnoT1r6R2SHk5eCuHJKnGPC7B7eagVN4S9s",
  "key18": "5wuovmvC9H7GDiiEL8mARUKSLb8E9Ym8HuBgjuBJQXCeKfX7E2iAH7PSKhQvT729sQCY2vgChpceCBp1TdL2Xktp",
  "key19": "tB9UDqyJipThgGBJ3oLF3zUQAGLKh9A7RsqBowxmW2kzTAHVKR1wssmgdB6uosf5c6itbFx28Sw9Lk4dozLo59u",
  "key20": "2FBKMzThn4NugaFMmRi84fv78A12P4fEUFwC6rsEYL8LbQRsF4t5Ygy4hb36iSTtrhMHcc3Nf47DwDJGNhCL4V3B",
  "key21": "3wVu4X3phDbkh6sLXLBebBfVy9ZpuYMom9HHQ5GEoof86ch3yeRF2CqaNGx9aZMRbw2W64djR42ebqD9uCmTsVx1",
  "key22": "3YwiHTq6SZ5ucNn8RviFpSxmnAkPyCiszMSjnfkfdxAAtdabyR3e5yLjahySFgdadJeDeREkbEiiQcbyUgxwuk31",
  "key23": "cu7opxfcFEuziMsWb6hwsnRC7hw3tYbBhF1Nu3Ng2eW9Z8AZBX5pfhmNzibCrD63BRGPNDcMatE7y4hCVKWBCxX",
  "key24": "2FiUt3YDTuvsCZeXCJJi6fLgphPambp1TtPsJxmhxiGnz8sQxW56AtHD4Fa3a6ruuUBM6Rx4bRcRN6oJ4FxLj4QZ",
  "key25": "pjmkMoDc9MWHLrNbLdLRCDuZZzwCyKShX4MeaTNyakbgPCaVjVhct96BVYGmE7ZhV87UkcFm7Fdtn5u29adW2Tm",
  "key26": "4bEmR2ms72uHf9ubjW7735gvdJ4mBcxjVn5JimBxqYKUmVUBCQ9WD63Ub5aCBp3rYFmGZnsYziY97fk9jekDZRfu",
  "key27": "3pj8Jrc15z4AzjPZk7wW2f1iVx5pXVant4WRAWfts7FgxpTNcMbHneM7bmG2gzkiQ4GRsfheEiNRTZD7RKsKf5eW",
  "key28": "4WiodFGdvCdXtB6rMYXm8r8CFJEpjcgEfe7D6tApLst44dvhuZs23nMLQH65mmFnNn3QMQBKLisHgGv88wBbb9FM",
  "key29": "3hTQULnuKi1kqrBARvD3u4zLAFFDZq2iS62P7Ed5uCnxJXWUfnFC9pHpfaQp2BoYeF3LFhMbU14PShqnQUKgyZoz",
  "key30": "JMiYo4V4QKfQ36s6iNsDsNUdTs127hcoBkp261opqRtKy9E58vB7cSUFdcxewUG8SXBE6EQ8pUYFMX3FWRTUs4q",
  "key31": "5N1bYfDndyvaEBCjHqSmBESsqPL4RU41rRaL7BywCNne6cidxaHdAxzcsvQrpCKARCM8fFixDDtCSn2bAm2Fhaja",
  "key32": "3rf2a6Z59LsYoN8c9LqqQwACmzAmZjA9bcsPqzwxsDmQ6vexsBQTnCs4myh48ADqK4EQmPRGnSUF3rgkMHfpvq4B",
  "key33": "2UZdqAqTCH3QRiVJ5q5Ef7foQtJetBH9WU1CrqT8GVM7QFFGrEGBGbc41QUVgJzB2et47bQHG7fmboeicMugsE29",
  "key34": "VACPEExaLqULW47Zp9SJRk1GLCEcjiskTDeZM9ZMJMYXXPy5UAWnKgXUFfX9CWjABjxNfekDURG1x8jQiKvhY2u",
  "key35": "4orMNtSnsnniBebm7ujL7TzW5deUWEUinjRtDdC2D6a4f7rbeqLW9FDBg8EKf91MJWEgyp4mtUNGTHdVf8iyJQcH",
  "key36": "4VtTc6x5Ue3AE21tdLvW8zcVu7eD2RWJYz8faubXJyDTk1fLkHXSbhvBqjw9KUU8885mtwPPK8ta2jdodxF9iHHe",
  "key37": "WLxepKTLAcUx4tL5gXyrVU9c2SRADj4jv5TBcxQqzAjtQWkQvwKZPcDdyCYsGdjfuRqL6crWheQyJgPN9R4ZNEU",
  "key38": "4un6D9s68ZWfcxDiEDhYzjuC25i8Y6upgGKYKifPuxn79zPJYo7sbXJMDDLp8L6jqZFHyKLsUa4Bi6Hebk9BQX7K",
  "key39": "3vdLwLwcbJsurDMSBgBS8SGL8BX1odGpY1Jpp6nPKHXWbSXku8v9g8FdeRCsPzHmkruZKJWnrfRBvYhV1D3y81cW",
  "key40": "4PCEYLnuyLqQ7DfgrSuinTZ1uXX8CnCVjmPNBJXo4YzMLh3W7qXkfNYcKdeHYPsgZMFkoByHgBfGbkk6BWNDcxwx",
  "key41": "3JR8r9pskidLaPe5Y4dei8UZYrd7QQ8XHp6okf4YnSRoiGpoihamtegtnMCWmopfzUrvg4nfog9EFuagNJVXuL7B",
  "key42": "SD5RArSqnqCoTz2Ny187a56BWXNwAqbLW8JxAca96u2rG99yRKB15fx9gU8XVwU7K3hEQmnmUP9mmBHYzMejozt",
  "key43": "2pQ6z3J8rVZa7kdxafvusBymVzFpqY1ez3Cqmn3zc8j3hx6NfqfhCb1wm2Wqe6dp66gPUCzDJ417D9zzh9sENxdX",
  "key44": "rsjYAgS49ZmJZwnLRhsuyHeNSo2F6X5EjYbESJwRsP436vCnwT9zkSDbu1tw1CGcw7xf4F9xuALsjxuPG5Bypqa",
  "key45": "ktEt6QsGHbqRmv66VVgZgHFDPkMdkLG4moyjN6M7TE6JmusedUJor5sZjgmhriXa9iW1dxPSQDAuYB7xmPCLVqX",
  "key46": "2dq7CDmAwsq8MEwi5HnjKkCTewSfn3xuqtKN2HD9kXcEg8vFt2wqPeTKtSHnJ7jLyi8D2XR5peAAoAxoLACzqQii",
  "key47": "55fc4D8HsEZR4iHQ5cNAqBD4dTtfqGFuNAqTori3UjJS2NHc43kB6gHBm4UctoqnGqVah1nDqkpfWxLJp8G1bvc",
  "key48": "5LkZqWTbA3ZnFYPXPNWosUwR1J63r6HZiGYrfUvET1QqKpSKoffvniwBfENBGQumAG95xprqk9PhiyYvjGSow5Bp"
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
