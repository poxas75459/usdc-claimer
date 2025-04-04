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
    "41vQKpffmVsLuhNdg2UK1AZ9ngs9qpHSLQtpDiizVadEHnSyx5RPCswAn9N4opqdJdsqytP63QCGi9Ra4cd9f7nD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ExUk16DsSi9H1oBi2B5T2qLtwRGFKndfbz5LrUzciaBkvfSuP7JhdmWyPWSEHY3fbtEtvod6uUEbWKhByJjR9Xh",
  "key1": "3csnwtZHaj6wdW7TtMUYWtFDgT7tJ8JrV4mJrV9JaQZjpJqCGH2AFkHu9YZPB576Q6NsQmzisascSUMnKodsXwzW",
  "key2": "3Q3NdKp7c65B8GgLBgvPRnYpdgWowvHHAPB1Bs8XoRxE8VLukcnBFmNzYDwjDpUB8bptffhXC7GT9mTiSU1dG6wx",
  "key3": "3CoxCEuzWqcfprQfvc8JMazZRchCu9EwYpTChVbbEnLG5sA7QR8b5R2qCvpmHJuDqHw5ksuoxS3fmEEkZdyseUAW",
  "key4": "49V85bnLREnoo5AfWoD7dmBMELVnvZdZgjCf6nhDwxApTUomUeVwn2fZvM8aT4WPRmoGuhj9YrFHWK9gkGAPGxGA",
  "key5": "k7EWe6Lfj9MxKsQ48FGs5KuHLvj9rAfmFoSCXhnDP6LiuzMzC5BFNAxK3cD4cARqEjUsjmJf9jpBnbTEtaHHx9v",
  "key6": "3dNUWuGWod2ykviJBZcRMK1476EMuen8MuyxpRBw2tiEtkNP5RCQjbgozcoDDjaauVRg4SjF3q2RGncrz86PGadW",
  "key7": "3psdffZeFJUUDa6kLzF1xXojYEm6miuV1noSdvk7QAQU3oJEQdMtGUXeBJy9HfQd5poFq9DrRwQ9X53Z7VZMf3aQ",
  "key8": "3R84XvKUQMMiP5bwQ3VHLEtYBRmuo41MGRD3GvrSvKCgTqN5rimStucjFDPaCkvMdBBmUcShWCuaw8VbjdthCFtK",
  "key9": "21tNzVsnVrmoZ1pv9D5aTZLwZNDsGmuySYMmJfBVGkkNFuvZMCbQgVzRdnwRiwy3Fw2EEaFErPWUMcHs9ooTRY2Q",
  "key10": "2TfPoTnP9TMhxh9nJaMj3T8aeAQ1PKcPdk95RQXDrZW6jZAhyeoEiduAxLu9f3V1d8XX5KfcStWnuhinT53XwkSt",
  "key11": "582FStasGTWGdkVFpGDAgWP1qQsegjZ8mU6Zy115FSSQdgEGhrtHq3if5khENuru38KRQ1kc9icZiZQA9cxoEziw",
  "key12": "BuGjhGtiZVAnuKKchyrYoJHB6trZbKYAqCTPk97unBSzCWim6jxi8HZvYncFx5d8TjMCfEwkXVMKf3b6GJja35f",
  "key13": "3ojowDZ5A6Ls5rgEDtKDH8cx4MCvheWDBHudnoUYS3XAhoDT71k6fdANZMdLpgWgwnQfLu2B3zcob7XoCfXfXkLL",
  "key14": "2nKHP9UoB7tZHkBivQzyHksVccvc83jZqdgeWJ93HWoB6edToZ1dHca64jKtbQpBukFy9ckK4QMsvfavZegVGU4L",
  "key15": "zns1icPTsoyLWXVq5FmEiDGfUrayaWxovNH76yQ3Fu3Upa7eJooJ7TBkdQSzg6hUum2K1YLqhnvMuik2m4o3puc",
  "key16": "3VFKZkcT2piNKTW4wpgho3xtG3ZYPxn8pT6iULzGLhmxR6VrfvkRotQAVp4TQsxngBkRJ1XsVpuYfdNyZ8nu6K5y",
  "key17": "4vsiqc5H69qYvRytvrpUnXD1tvtHtjKxSrYwdVkTfuWYJkZFERnXPRJDhH8Pv3RcQKzNdJ1RVpemKbJZT6dyXsRi",
  "key18": "zGqmfguHTMYD8CUdFVi87T1jfrWh1gnQaZJgy4pKJAPyfUj8Wa814AhJYkRnWYxGereiGsrpwyQehDYkzcwcvGh",
  "key19": "3tDWC1XN9Yaq53mnex8vCb8Fa1PTU5f3onFf5VFPgMwadEAiDrwSBW4PtFAdhmKRpGbvyMXz6jRVVPTgDDAQLEkp",
  "key20": "5138xxbaP6eSm4XDQ9hKTvNDufDnrdf7oZkoykZ2fw7GyhHo39bPs1ccko7uiJ8SPtE9xmhNeK7UeWbmteMFbm2e",
  "key21": "4RqrAV1Hf6SSNhWYxH44AfRbaZZTNvAUgWzSThPUU1Pq5nqwVoP5AGk54PEceCiEpE7oQmunTQrKMneb7vXR9cPh",
  "key22": "2ztRKWXKNXd4HGMZz4xxDT5TfCHJK2CfFzvNFkjvS5m1m1c8DgyiHe4c88Mx6cvT7gCgZVnmh5zEigD7wjiMDnGP",
  "key23": "5PRoAUmyzvg1q87YgYEkhB469tsKEGzBjDwq9pu9exMZfeVVidMsYSrfz3WwEFPCLXwxUGDSyUnDS92G829EDDmq",
  "key24": "2LJjYKgRKPi2cwsNgq1YaQJKGyforDUsAVzcsncScf5XznURKF5NmVP9YvsPaGWwxfvQ8pHFcp1bopw4jzVLg877",
  "key25": "39dTr1tC47PuzVqriqf1ExHPr5gDNonUpUmptoxVodVBF9UtpGnNwzeZ5WjBAGJsZuZUpA4pEUgWeuwKMfWE7Jqe",
  "key26": "f8jV7ciwPqnhAsUXJg1xHymTvGZ2eZcfHWwac6eN1Fs5KEE2BZxtUKGNXmAwkeX6R7gsUMVQzC3Q39u1YegPKR7",
  "key27": "QgjDt7ms1cGQoS8GWs1SQEKAXdmgN1ctagndmzKqYnJDkqKpLS9AUxUfcpYQTgEfaH25KnbD4RJHNiDnCWqA3A9",
  "key28": "4qTBystbwLdQVSc3FCPdxi6PodEevmw3XbDdqPnPJmB1KJjPuDCuSqSkJcX2HSWgdHdRpFwLsrmHFKE8NM7kvmRx",
  "key29": "5F3XtNRbzB5MuVRuPgPbf1nBVjwKNxBhu5vrai7bgfLkCQmWBm8Wz586A3iyjQ2QZzhBDQdVaoX4EDLiu96EDDTp",
  "key30": "4yky3y3H241xBZdRsXn5aeQoeq98UEbfoLNN2x9xU4gXq19qptY79fhYcj57tDcE7kEPVqU6y96y9mTU2JpxvfGb",
  "key31": "4f5S2gtCKpdxdCUL2Ei8z9PAfRGwLHi2TgqiQEKAFnEfh8FjYFEuyFctz1joPKuttE7eKrTUtyCjmARkWKGKq5PK",
  "key32": "2Vyeu8XfzeAvRzhiHGkJmrqdNnebePfRJnbETZ71qqige6K5xPtunN8jNJG6prLc8Logk1Ahga9nvHL6Y56ZRCtQ",
  "key33": "4nyeMgtRkoT8FRHNJrkHwPPXcv3Pmx32qkj83tZzk9B65mvaU4qopWG9DC6NX3eLifQgf9jk6hAowQEjWQNeUzPF",
  "key34": "2xq2pTUKAF52QJECe5LuMfGL8dLC4M118a1V8iLFP55cwNVwL3Nxyf8NEjy39AuuqzLgzwfeeRdLkF6qMP4Y96wD",
  "key35": "32Atvy6WpVdYrt4gR8UzV2u2515LeHitU7Ng8HNEdQumLtNcxcrn53WU1hBnfERhJntBMAVnaFwCKU1aVVQYEum8"
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
