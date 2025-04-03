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
    "gajSEBaadTbkps78atBcjTjFkezvbHHaZwBH7HZc33hnn9Y6iersadfMrpCYwqLZCLi82thgE4j4MPq7bpDrmYt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wRKiDqK2p5SBE7JxRrCaidRdVTEsD16HqiuzbFWHn33KkqG66Ws4BLnRtC41TA6eYnf68xNHaRcSqxk4He2dnXA",
  "key1": "5j3NXdDBcoRjKM9k1X49pRtCGj7piENq5rYmxmJYx7LHq7m5TQ3mrBV252r7NVpmszFdYJQPWsUferk5f8ePH2yb",
  "key2": "5t5q2e6F7cRTFxiNDa1cypkMgz8vdE4s87n22H39Urihy5o4WR4X3sVtAYsgvxt5VoaCdEhZeRYAQsenTLw2wPzf",
  "key3": "4tLLk6H5L3G9MMbu753RDKH8LH3A4zmpQYcY4yYRskTXshtf9Amn5a6LTBmQej8KdKpUkmbtqSrK5doshqwzzbti",
  "key4": "3SYwECPLRup5vm3w77AzwN2czRF3SRAA8GS2y3HUttm8oeiiaS1Dicrs2UoGkR9VSTFZLXae8qeMt4pP8Z9RjMsN",
  "key5": "s7iN1DB5zMgsgBX88kaAW7tbqPCyhjGL5Wz1wTsoG2Cm8RoxxU8JYSTTZtrLFYfWg7E5ebg1CLVFKkb8G2J9JmV",
  "key6": "4Jxkk6oeSDRdg31kxrvjbKau8iWF3uUj95KaQzKCNV1Uczq3Sner3p3D9qce4fbgFNEeS6RLdeJH6ipCgmKBRVhd",
  "key7": "52YMoceRssaZPmAq8x5uVgcVUWy7vKq5mPmpYgt1TQTTuhJ8BEJAz1A6JFYhtSSyScUp8P7FhVpzxD6VbEUGBxpn",
  "key8": "CcyNHcY72YyQfFpMgzRhszp9jMiyMjmdHzuBKPQ3BW4WGsbiMwmoA4dGEEEyBbjva21gD6EpwK4AA2JR7hrdELn",
  "key9": "2nb4NoFJHDAvigJeTfkEAD7ejGViouk2eGTQM4SMCm1yFd1TmRDENRog5yQh8Mq5fzgJ1TG5d5VNRdjA9yCvF9eu",
  "key10": "2CxNyKAdWWDFM4erahktjZwxoNxkJG8MeccJQEHqqU5yEDTpUFtYtrC15QN658VW2qT2WQNZNAo9iArRSCzupTW9",
  "key11": "z9mpnjkiabgCsx2GEqtVw1aZ2At1Ep9uCryoW7CpEFdj1sQ2Jhdf9yCBfvyCdXiRH6jkSHhnarLfXfpEF7KamS6",
  "key12": "2unrAhModkz2yVsjsTLAVzA8csLBimo4mTLuymnNjZJAj6bLtC1iMB5PpZJeURyjd8vWzDfTNgbb6KE4mW8p94wE",
  "key13": "3zXxi9qtKnHXKhETWCWNKhXwkN8kuxK1vMbXkvdt5JmQwWk95n3zw8LMZXJ3mLTCSDJhJWPS8WNCFZhd6MgW7oNJ",
  "key14": "2EQsUCG38CUQ1ccddP37eFsSgDDYYzmfHDtECJznoFvUEcP3oCTKCUSToCBa5FfGNsXa1iuPaGYG2Zf6oz9jvGrz",
  "key15": "5WKaPpwEy2UBdxCLuueEocsxKdZufg5afSS3fJb5o4YTPpUniSxx6tqP4JZnNqqehcTkDVbhZKZxCciww3wHismS",
  "key16": "4LZUT1bSdJ7YgQ1m2152Cg55TDQeVFtwcENwT3vLcuEjo6j5VjwF2WAh41rueJDHpLjzQrNE2SiDp16xDqGcq6fm",
  "key17": "43kaxTn61tfi28UqFJDTVQpofsjxNbuA4d7PBRShm9daAi9FYVP3my1pmaDV8Qcbe6wuBrbQzMDZLroCM9auAvM6",
  "key18": "5oPDknmXPBSwviEPNKGmLW3TTejGK4bwCrPGmHRfJGam477eccqR2p2PzYTkQSTcpqoJSKjyCuMUFKmYTRMN2PA5",
  "key19": "4heBwFGYAVGbmgddnJGiV8d4o3CeG4FtzELAyX3q9RQquPh7TwsAwdXHhtWFnVxTrNF9dsDJzn9HWd1L1HSgwBbw",
  "key20": "2bsx4vEdABBVbf7epP4Efqc7xMuimRwE5v1BWCHsecjAZ9XQeXb7DTMvq6ntteJxaB8jQtYZEnoxJ9vJzbRKFt9w",
  "key21": "2KEuuRT4QxiGbBkFFMvvyZx9g7KECEhhykT19AwZwwBA5CCxV6puamggWcjKqiKc2gH6tBsxQoqtzo1WcRmnKoxe",
  "key22": "cjSXkf5kFYXc1nNb3sAcob82a1VzPLCYgH2yngGBGdGv7CG7UcYLmJoqfguACnQv1rF1NNGLhpq7xjSgStRL6V8",
  "key23": "34whVBcweMe6fGSJ2fGDzkvsa2DmhUGr2LQLHJnbTdjqQQJRWSe1baeN7vA2yTHiaD6TQYZvqHkGdVqWysPJ1oZW",
  "key24": "45YdoPwPUCV9zKvYCmuHziKKoMVC1rJAzUiPqndtaXeUir7ZzdD5iUTQpNdgS3WVSo8ZWi8oWK942KkXxZjThd8M",
  "key25": "3stYQuu1EmSQ6DXKmPXb5qiAAeKbhVoAP8q875Djk6dJD3wRYt5LJwtRcwgSYykvWxWvVQL9kaHe84G2iJW88tz3",
  "key26": "4xozfRkYMfuVGgeaAgcE5x46rxddcV9dEQBYyb6wZbk61JC3eN2CLAES1G9PFJ4ptnbzkwz7uYULdnMno2nZDJd7",
  "key27": "615QJZ9ZXTkXZ7rcjKXQktoLFW2uJw7kYkgRWQ92KNcSCXZSwSbpdRmD8sy8CErX4qJgSjLPsaGoZrt5sbkFvKBB",
  "key28": "3Hq8RnMiGCRs2jvx3c92TAZhVkoLjUryG3gMUkxMbDyf8GNVDnMAfjVTaP7TEUPKdk4TMHVMCyaPzRhmfvxxHogM",
  "key29": "3tPApRhZRgZcT8MrLDn4LdSYtpPetqf5yqoxwi7ugr2TAuKfP99paxZuGbMoBaF4R6G7P3xAyGNkwwkRUgkBg39v",
  "key30": "X9DsZ69s49MhJXQoKBiXibuFnefjbvkBNr8nSMnJMjGpgFHQ44ak72YCAHx6BZzUkUPy7EW7E7bSKVYNPRKD47B",
  "key31": "4wLB1bCRo6knmTC5S3J8HCVvopJVGakJoUga9dJC9buRXGL7k7JmxMSZ4fCMUzcH7AjFm6EknZq4fXsYgY5m5Ktk",
  "key32": "4TSWpe3t8nqWMymAsRQ7mDKcR7tjRLM9WPYZaGknfFNsbPSm12pdVLkCNwKriLNTudQ9JbgGdsb89HoNKUmnnbYg",
  "key33": "p6tDRWofNxsjgLkyaprgxLt2HttRdAMXfUvDLQHn3koPqsFA2ejv49qfQJFhD5pHN6ywzxak187QkDfwiHsaao5",
  "key34": "2P7NmJQF7begBxPGXCGNrs2o1YZzNQYqUmzhPuieKsZafAczzCiMkBwrzfD1d6GiJzD3HW6xGYcr6EgCrs5aT6CU",
  "key35": "23LJKkFG2F8rKr1BTg9qWh94RQwjvUz8koQWcTEzHW2jYG2zFXnssyq7Wr7MDnfL9K5pnd1niKnnjHarFAgMK1wu",
  "key36": "345cssg32BDfnCHFShx3261Wcx3EgB59zTDAUiiQj9V34erpvVzQR9NtCveuKsw97jf6sff1RTTgfgMSaaQDtcyU",
  "key37": "3cGLHo5wyRdGX8XyYMUcCZYF4s8avvJmxSYUG5xNtKFBKeGbC9SAUa8CEcARL5PCjxwkxGMd34TabaHGZv23Z4Gr",
  "key38": "5AFV52Pp3H82F9Wg9ryJ18PXoJDxc8FQrpM2DiWEr9YegK1jGZpdKttEsTxYe9snHfvryM3zY4fPQfLkGhCgJ1wa",
  "key39": "4a2PaaZApUd74WQvRdPYHdBmtcP3Ur1zKg6Tjj9A2sKqF2kvUngdv8eUC3dYpA4bLY1Cx41zypDdt2uhwfT9Ai8Q"
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
