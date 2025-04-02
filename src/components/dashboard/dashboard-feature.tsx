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
    "4dJraRxDzMthy1HJxQppquMX5qD5Sej8sK7qM3h6iQY4DqtVypMCtgXFeH39JE7cVpkmzgtzSmuwCCELFpbfAHMH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jaE7PkaXHqzqBQ5MsBry7hEe8gw9p81akkp9aUGTU1EYmKsZrW4WTA9yUdHCQToMgGLTxumjn9sNHoZJtFK5hPy",
  "key1": "3AKXaaWFdLJhbRXkfvMFmZFcupQF14bVkfGSrVmMKjA5SHvum2ahcU2utXQ8d8qdhAJnAfakjTQFmBNtarX5fUKT",
  "key2": "2BjdGdE8eww6u8iXuxX4DRSXSa12m9ntuLSexx6A189X9WAGvbUW8AMciuTj3ofA2LmEe4SLJPuRePaFXFcmAZVi",
  "key3": "3mvsHfZf4znoS153TKReMxxBM9QjBSREGmiZYog6PCekuHX3Kotq8tEznZoAGqhbTq8F2tRCJkE4MePNVRAzKgLY",
  "key4": "3K2byuTfRmk1L6ENymFNk7foEd3M5TcFzXYqpBas4hwnF2EC2GdugmqSVioFr1Po2Exg8BenWGLJBxBqBYfu9baH",
  "key5": "3C19H7PCV21i57ujYCnG6LVovkrpGnKgV1pfkS8MaQ8emZ4MQRmSgMj2B7JgXPiqyb4SATa3Fgf8m5YnWHMMa6pV",
  "key6": "2WLMGRBSQcg3a9HHgWst7Ywwfsf9qKjdbWCtVpsQ4uEWteT9uMD6VaJRW1sZHUMqEkJuVYYCPWHaUHzj7S2tzVdL",
  "key7": "Sgn1XXqS5d9YEoydbquiMbTNBAyqi1eMgrHRxMzhe1iwKhsJ1QNcb4nqN81SUqsFvKzyqK8P6HbUvH79kzzcFtV",
  "key8": "5hGKDuNbU91Ynh9vYpsLpGzQ3uHpG5xqscbB6nguPGU2bAyuKotAVheahQuMyqFEYq2ftvuB65Js8sCjjQeV4zaR",
  "key9": "395CRLCpHppcNyRPff6HX1uurZThjKh8Ysj3SJiLswgQaWhZjkFTWqAhNU1JmpeUcb7Nqnsmh7ym2UCYRjV8VySR",
  "key10": "QFKoyYYjHtiviTJbf7bY5CXK7cGMiLZptLdfnAS6wiRf15mLEGj9c2q1JiFJUfJ7r6N4Csd3Ej5BysK6cE9CtZe",
  "key11": "2bS1xNMapLFAT3LzM21YU7MZ28SHBv7pvVEcHTMjpBGv6bvyiF9x8jJNSzepRXDaHbYc1W7Qujs4hVUHbCw9FQYv",
  "key12": "5Mpoe1QTXM6LA1XCAwrNRE4SW8FZr974vAzZYfgENW9STuKjfNQALzM2E5DWRPjxGGSWt1RddTZzmGeiCVS597WE",
  "key13": "5Maq7w3h7ivTCHUM7qDEBqKXmBCqa2SapGJubeJLCEGBgLLL8TyeTZdWGjNKerqcy4xFUoj6toKA6HMkHqxADUzZ",
  "key14": "4FUbgXPepF4sAUMvp6gPoxvYn2UmLXMGpAsjWqNMCpGJJzptdctJzctdQvSXE4rQ96DZHBDAtUR46iAbucquQJbE",
  "key15": "5vuBypnGoPF4gr34EC3optVzsTsw9f227MwN3EGq8w88AZhzzSWf1MCb1Sm6CmdjCkjTNWvS5FoorWKrf19SQnos",
  "key16": "8DKNuSu7fS8b64qkYD4KDR386EZpc3rNrYx8jaLRbdHniUYQjbVpCkMEwQbZttQPohNSMhHQBJmFGoGy49FzNVU",
  "key17": "tNn4trxoXfJxEmUwCJ3JG9QSuetVq3TAMgcWC9e5amFg3J9bFCcTmukW7QQULHeWGEa6u2wyCaBWuTsBL3WoGz8",
  "key18": "2goLSahtqJvyVCwo5aEhaa3L7aGL7aNQX7w8gXAR6xDtKyQQ2fp2vnRNb5hmy2gjwosyRS1qqJV2DWf1Wt51yLBg",
  "key19": "4TZpLz7nsr5uYrNdiMBwUhaj9jkT3MMwYAhoM1LfL3YdHyLfuYgNUucqeFMwyVeYUaEGFnGb3kwbgUpAqMRvxVck",
  "key20": "5dpZ7NPsHWKKNXaPVyXkBbkc2nCFSTyR6sgkJDKk7kUN9mGbB69DfMiobG18JzTVerc9rvV9yGLtNSVY48jeoDam",
  "key21": "nzphhwYRkWE9DLu3h6h7xnnNWaYcNJ5ACi4PzgugtUuwRKSU3nfHbg7KM3TTHGeA4awhrhSZMx8iGjcEvHHrEsn",
  "key22": "5uxfMyEpWoG4evP2iTY3WLZFuh2iYg4XfRyRrBjuHLDCfDctX7gk1mztE9RX9R6TfW65N6e7ibTnCeFdWepFgQSd",
  "key23": "3h3YMmHgzxV82kZBgqZ4JojzSzRaFeDPD9As5hK2VDcxTinHxAwk4LHuhBGr4ptkDJtYAxDSMLjkKi3KS1fLfUqd",
  "key24": "gKW5qp7qLjuPNQpSooA4pFvyNUmY42WbvbCq94kpjxhyiNNT8ixPEJWQA5eWBFHopJs1Erg5nRaT9kCy4mkpkwm",
  "key25": "3nWw64x8afgQdMw2Duok3qYYJ5LYAqyk2cfsK6FmAw2pPu224qgo1idHugU2F2PrXTto5yfvBo2TYnwNrrYMFdcm",
  "key26": "9VKC2sdc9zLhPvM3P3jaMkhia5XT6mBUV7Wxoi4meXu8xgHERjmuQU8jWU1Urs2iq2PZUmthKdDyZQQAo5z8rrJ",
  "key27": "5CJcKy63KJaiPJA2xVCzuvzJ2pHGPaeq9UwWMNjK2aTfJhXkScHwiDK8fjVrPNaAMRtvHqHQiw7voHqRZiQfKmhS",
  "key28": "DgLHvSqsaiBXqAKFs6UK6kZuadpYQa21uL7aDJ2imzYqMCPuzJFcrDw9KzX4uecjSzsiD1YDjk3KkyvzjRMdcyW",
  "key29": "2xu1ZXk67HVQYXrFjS7npeSVm7F5LTRaHRY2ykYqyWGCP1e4KvqVr4iXhERDRL3d23N2PDA5KJP2v3h8f4uERpFm",
  "key30": "4F8g8ubb2Nh2MpnvzS6CZC3W9Kxf5sBcL29R11aAW3Up2jgKeQuTaGoumbZCwoX8bkQSK7VwLodu1Xdjtcg22JDf",
  "key31": "3rkifdWD18PeJ474a8acRs77WDxcugxEvmP2fDUPH1jUQ4oFvQevbiQ8EwW9P9xQNW6AYkPixKvJ3RgrMT6r5Ywz",
  "key32": "qM3MXDh199Vf8kkdmeALbCh3KD7gRV2MKBsZnvrnq6VS8ewF3TiFUAmNLgLegtrQJPYSPzAtNKa45SVm9erk6ea",
  "key33": "4AGnj3cwqyUnwi4PPCqKozAN2X5qAVLEdHaApVafex9SXHaQAGs1ZKWwQxE1BdwQA5gkpPn7aLGNxXE7XGHib4D",
  "key34": "3sh5Xj1197TN6TsQ9zKd2AVN7AhTLpNRRhjUpF88ZMdbzc174MfqfKWcm1Dhz398vjvGJkx2F8SVbqDagwzbnTvq",
  "key35": "3eHBX6F5xemQXJTQSFuQPTgrF2H4cAAMB6tA8ksLocvZonaPC7jExjX95pRk2ds4i56M93ayyDpXPyQWwNR7i1TM",
  "key36": "22abCvmXv1md77BdxJtmu3y7kFe2LdxDhdwAFmVCEi383RYWQ31mGynbs5pqYvVDsQxa2ucJiA4767bqeT8dGNVs",
  "key37": "2aRRk8LJueo9Q8BgrJ6r1LAEoq5g8YutuQgmZ2SdV1nxc67DnbY4NxpsZTJTHZAhJaJeMMNHYjKLrmGW1fwD4Uim",
  "key38": "L2nsKUiQzkbkocF8FYRYn2Gw37SQY2Ajqk9TjXAH9SBdyNzN27naHCS7oAE71tMvmTcBnfVLCi7Pe4WRUbHHxf1",
  "key39": "4oCkU4LAE4N9QwkQDUM2B5TUPRHZpRurVvpiUUxupyZ8Z7Q6oCTLCRUZ8Y9QBehFPqwFsc3qCwJvebK6mjAp7nG7",
  "key40": "4zcUc8oBdQGbDaNApd668M5CbPcXicfRW3SHAwoYFTLqmEWsUUyAL7sVpsU7ruh9Hw1njrAijCXd19SSggvHWXTr",
  "key41": "2kT9G6Z5joN7ydTLqG26AnMap6ofD3U2UBMrRTnq7bx7CEmaJK8gXEaRA5b75GiXAKQt3GdFJjQaTspULS2hLkX6",
  "key42": "3atNrhcsuUvRaWGeC53ouMwL82vpNYcwJjf38e6xnHPSPLbJBSS789Ln5QGotUfoePcxKBNancBxGeNbXnBjDkTs",
  "key43": "5N2ju1vSXPnSwNvy553eSpUe7eodd7N9swCgvSg7fTPPYpu9JmhxLcxQ9YW1AU63t2y1uCT7AvjZvtbXiNtww3TM",
  "key44": "3onVRpTPWty4W487QuW1i45RqHaF7ZsxziiQ7RiLXzy7LMudGKgWmenRH3cTNmnD3owHD4hrZbbZriWj73C5UXFZ",
  "key45": "Hf35mtV9q8gRh11XtBesGuDSqEPAN6HAG9E6n3LLXQ4Wa8fvbB2KBebtp9ShcYJ9zFqX2d6zvsWaCtiYR3XEmQN",
  "key46": "4MHYV9j9gsf1g9NxHAwQB2tFKPdQiibAvXLGw53vjnUmerCJVBZWfw8UQ7yAktphGEasrHZ7UNQErR4ZSgTQWogk"
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
