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
    "5CE1LQKU9CRwdkNPYQN8BcKjSLhAphYr7xV761UxjfWU4DVm4PphHSqeB46hvCyJYvbFh8fQtKfAVJZxChSh8tqB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67X5TV9DJD52tqsUi7fMRQXMy8Y33Db6gCgtpxHdQNnKVR8pQCdcScthzb2nNCVm1L2yDbqWV6sHvZfXNmuAKzi1",
  "key1": "5XCeRx7tc1DMr1Y1hCb2YVx3ZEs5JQT1hXSYkDYmJ45wZd6gGRkxRhAD64dPVnd1K1HJ4EvBwVGkqEU3dKaX8Bkm",
  "key2": "3NdDb3ZPjQ3DeFyEEQPJkLfbPGEeoFXkw3acooGzM8wGs9WWe4VYMnw38wQeSjwrM6EQjNh9k5iwadXt8sACqJRh",
  "key3": "3noTjkUkzxoCQ6UUXjvM6pzejNZpRPGimAgvU778xYKJXqcAH7A4hmoiEnXAoqjC2S1eti2BJN7YENkMjzdNurAv",
  "key4": "9P8mj5nSdPB19rNMVvwbXjY5gKqxHx2PVnfA9MGiEKU3iHaAsZoth1AJdmh9zcQpzyd6iFHbyFtLHDgEzZqBKcS",
  "key5": "3Lys78xsJghNjWsoemUETN8MWizK2xTmhxhnYn4Z9qQRByZ4c3JjsaMN3RNtP3E9htEyFPK4a96VGEa3EpzPuDe",
  "key6": "2irpQBN39qW1CLyuTNmjQKCa1MEd2TX9GqSoZFFqUEmuhHkQuZKB8j7rtxZT3QMCtn6b39A3vbn5TbaA9SmtLaQh",
  "key7": "5SJpFs8bT5LZw2s4werNwCz1xZ5QxvmoDGth4zrzNKaP3fY2oiShumYmRWSwXUg4aECTFUcu9yYhxmRi6989sqvC",
  "key8": "4GDkxzFQuUyKiuihu3dWFuPqstrch5WLu33syrCwv8vRguFuvnpj4dwwxoPdWuqKXfXM4SZ2aC6DoSRPoYGQGDNm",
  "key9": "2wP7Wtb6zHULgUHve2fJ7ewZcnLWCpmynXMBpgK9hJoboGiY9isNaj7toDdMaULi5L3QQNoNE63hoGZc5tCBtHBM",
  "key10": "CLWUoBsWMwszYirFox3Z1Ah35eP1XqDTdQhnam4jsn4s7JfGesuFj516ycHfyDjow3Uo2utQQ6GSuPhDdZr6WS2",
  "key11": "676xY9HFD7u496cVnNmvB4F24djQc2gcEhFfYC2eumArqzqNWVJ8mhYjDfdsFWLkq23jEhUZkQVCck5ZvRb2ShMj",
  "key12": "21hj3PS8dzQPnZDPMrWrduiGrHbFcQqSzUXnCGjPiq3182jaDbo46bQWe1GUZzjswGqj5LpsDnmcdV6RhNvPtjuF",
  "key13": "2xbrpmddRxg6HeoxQ4tQaDeGo49K47nwq4sUxbFHjFa7BXjPqwv278D2znmX5KmjWkRgKFCrDeDmPvkLdoquqB3T",
  "key14": "3W9RkVu5CXNNn352xkKwca5FYkFGM1StYLuvWSqLoshVaxtGf78frPfEcLwMTayUH3E7jpzX1D26sjbTS3zPfFYv",
  "key15": "4fhYj1fR6wzQ5Lihaq3EgtGkgXx11Nr6u6JhKC9JCZD4bNaNQHpDb3bTTKXVi9uNRJpyBv6zXTMTLUykUSesGb52",
  "key16": "nhZhsZLNbnWawyiBrDeuDH3rbcPw1yBCLZVCvL7P7UMpEYk4DeXkh4w77gjf3UxHrA8af9hzyjrwRV9D5MYCDfH",
  "key17": "etvaBZdU9dVpP9GeBmMhM35soBbBaFNCNRc2Q3qJgHtAPSDkp8GPgNx5q33WB6o8D9SeuyLzJQU7k3BdVgXWVQK",
  "key18": "MRiiDLeye1G1SddPXKK3Uj8imM1fEVjkvGLosftsBsYeWN48pNUoP3rkQ4Hf5RHHUFnQU5uvmFahgWLEEC13Ljq",
  "key19": "5VrLomPmccBaizcUrgj1kQZB65JWLX8h1v9yGn82Ei9r24rjaQbM1KVVAWDNjv3t3ysn9xy4biXSoi3nGZkqTLGT",
  "key20": "2Vz8oRGkMiZVfLgT8pMdzSDqDxDWCQxGroZMMgUk6rqJGDqqeEw5UXBGRKsqCK4y9Jt3865WZMp9CkBce1aMkq35",
  "key21": "Xsh5AiWWQjivNfDocEGXEiqQvdSWWUrnpySTQY7Fm3S3pXK5a4yWmPq6mQJCTCrChxW1icpV9g2nXth7fjFDbqh",
  "key22": "cDXfpRsBFNd8Ez8UtGmQP5oUKWrWjcU4BtmzpJfytHF1UbzNTvsU9soNGFx7v1g9YtjbhzFhGTmiar3aFGzL87Y",
  "key23": "4mpYF1dCAbX8LXC7ikQaXMe5rKTbNeHKYzdnYyHHF3t9YeS3b3nSCowArrG2K9v8uwutvJocH4v9B14GEizis7aK",
  "key24": "5pbqxUfjZ9tNsuAUCKBzyY5AeWks1s4xFCFXi1D1LypDkqktDX9F1m7Vz4M14mxfP6Cd2jkaVoj1u5jx837snUJY",
  "key25": "3TCkiNSNy25avoB7ABBpeA18zznSK6FFmsynMSzVaYGvNVWEKZZTdonJZPNeFq79AANiTu6v3KvqwZLBXt31uuuP",
  "key26": "2uvSiqHvpGDKFvrj6Ynd7zfFRsPo8R3B2xacz9K5eRYWeRkPyhfQ9S28bgykpyh8VvXVwDShQ8bQ29N2R1nyCyuN",
  "key27": "62accvGoQi63yHHc8hEV68jSUjCaGAirCfU4ATB9TYoPcKppCQvV8QuGxmCARNEStF1HH79kdcod8VnDTBmSp3eU",
  "key28": "4q7hDpnghLThMC8whGA7bQcHRcdTVgFjHFNmJMn7aRR4sfHHhkwDvLE763wMqLExrxakxjegDA9GwWpEC6tBYp2z",
  "key29": "45tbBcrnHDpH1u2fDgkEWJ7rhXy1jMLAacqbQCgxoJorReXT9P1gWuaiiz44MTaV34ZVa1BGBBgm7U2o8EvCLmvp",
  "key30": "3RM5cHipVUQ44kkzmM5Ax6nYXmoV9ZXt8V5VbAhUBF57YJkgse1DBN1HyTfYDUk5fmY97sjT5XeYRgRnQrDF24xK",
  "key31": "P4ipL5JbvSB45EPqDnZtZGqubRSi8pwtSMieDALsMsoGe8sZNUURpZMNSpUnkBHQaYpZNh6hm3Jrjufx3UDjz8z",
  "key32": "2ekByMS9Di11szt3EFTPjmevmG3TqZD8udDm3JNS1ZQ8jb7UUAzbkvcM43moNr9DY43YkZw6ABYB7tjBtmiqLdTV",
  "key33": "2UdJbeYapupr4P6Pttguitx2LB47RfbkfEZX8SeRjh55YYFFSejGC8sdkLCuFPFJA14gm8znc3BSwkpTxKP1Na9b",
  "key34": "3SvquUtTw69tzCxdCtc6aMHyzZzpYjps7LLbSmV3tGfN5Pkd7FLKMh39CR3hH5gyEfK6yh4VzTqvz8ptgdBfCsAj",
  "key35": "wx5LrerhsZLL5ato6j7t8MRrTXAx8CQ4D8h5d8AXFXYeVoCrABMK748EuLsTokNysUWc7FdCv4tkjmYCQ6eCsXo",
  "key36": "3DJAEWbD5wKa9iNNAhm8cLD8QyBEaytW8Ez3269XocmJXhyhHiQbMtDyP4br4CF7cNhCaD6TeqURuXktacTTPqGu",
  "key37": "5FcsnVmpLkvLE6ikcGfjcsg3UnTEutiVccgXHRH1rgKanHetXxVSpe9CDq7UH9A36bk4o3n2WsCb9DtdmhzAZURD",
  "key38": "3AXe9dCZ3TaA3jkxS7MEkTEYjdqDRdTo4FDDPeCvUrgmts6skXXUEjTB2Gk1BEgG3vv8ypjADVQBG95ExY97RkuX"
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
