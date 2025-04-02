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
    "4AE54s8B8WuZkxTVK2AyJB4uDRZ6WxsyKsUexQjb157brovBD3XjmeGynTK9puYTUk5CdgVx8VcpzvhKFmXTFeRw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64jvUbnSJ6uMPPAV17raGKqCQKFeQRsqcN4c59vbRq9cyaiFzGe8S6cHPhN1nRdc19s1JNGQd745pZDXaG7xyorN",
  "key1": "TJnnxQQrDJpUhq22bsR3Ra9yGaPHM28auWxKnkjX1hSFKVnVx3HoosnfvmXFdsYrnWRhkLjX8J2mpCpTCNY8Q1E",
  "key2": "3v3WLdh6iUSRgeyXQDkLd9UKBHKeaNm3xYFBfdxrBTSpxNL1X9ko6gWgtUcrq2Bfzzxk9QxnyayNtoLB4VN2gjVX",
  "key3": "4cT8rnJZQXrXSazzu5FugCEYu2HKKWu9iyYdCqz15qU5d93gWeNFHYEkaTnrcAKPNopWYJhSSPnBFPqE1RqiJZvm",
  "key4": "416vgDBdKhXRMDcNAjdfBCeZ8fhprsAXcr1zRBXFVrVP51fDGRQ91MXPJmZ7dKk2zEx2i6KLm9nDyMDuoMko7waS",
  "key5": "JVLiiLxYaUbxVs4xmf1ZqhXQm2jjowt9xxgjmJDryExUvqbhH5N6nHkYzx8952LpF7vRumLzPJDwVCLzaa2CbB7",
  "key6": "4fAd6aXyvs18t5YRjPp1fFkfPtTndv7F1nyjExvKjiejoNs4PNDsZ1tDg2a4MmhjNQbLmWU4iqqDKmhssm7Qq2Q9",
  "key7": "K7NsQStvpDTuftAzibiMmP2nP4Ro2Lx6DLN5aE62ZQCgAbJyBDFCXLh7XTVQBMU5oLgxT6sx7cVimzXHXHFNSgE",
  "key8": "MMY9Utn9qUxpM9uFHyXkgfZrpA31QaCj37aHgs9ropqMDahX2stEa2GrfGaqo3CcR3DPfdmszuarbEsLu2ci5rN",
  "key9": "2A4k2hNrLQhJqpGAUC9xtWZpiPb2q8YRCCwvwm7zNKodC9WfjA7oPuh1T6SnqgJusCRWGzquhF6revDFCR4KGBsi",
  "key10": "4GxsFrg5Q2Rx92JmmD3jtHatPaB8tqA796JAQwHuKF9SaSYzTqxd5bMpxL32gWioEFb4EiWntPWDh4RMhmVvgaQn",
  "key11": "66p8X6m8EauMiPaL9UnDTenxj2Rse4zmMhwX3mvnTWgm7f4RAWmdVJP4uNSzYJa3KWQZrvWQAKB4MrizekeN1cgp",
  "key12": "5fVqFFSYkUs9enXe9pnnAKEnEjbgrtidLYf1FhuTK62hqF1c61sSouvPJmDgcCAtCHUhD932t3MnzeNkS3dehhw5",
  "key13": "4tR3pmGoSzN4ZyFrN9vDDo9cNL6VXoqYMQPtRYpjweyMy6aK9vRnjn1C4HGEtrysmgHse1rKNR3MF512kFb53fPR",
  "key14": "49BK4qu7ZFizNvqjTqk8AnY1aW625zPcNSUb3Wkx8Qe4BdafQrERmgPdYZnH1gkupGtrjsa3kpBW3ayGb6qrHyjE",
  "key15": "5hoMjtFcasXetYBEFdqsgMdXuiC9gcdAv1sxxpnT6up8GhZaWMqq847vreDtbESy4TaBzwb4fwooFDbKPRE1pvZH",
  "key16": "3g2Dk224QJnzejDTzgrLuEXqdis9gpyxTxvL8AAhkbnkFnhKAWLsGQ4nopZpzwiSxA4VQssjB1EYkMCNVkCLRdoD",
  "key17": "39QiQceGFwqBbcHW6qAgLrG2uGWmQTpXysJWAhFTHm3hEUJvsmD8TRUuY5NK3ooQG4fqnyj9Ux9CGxhmqNFfdabe",
  "key18": "4qgTfUz1vpa59HRyvUnHVoTGwwzyU1Rwykva4V5Z5Gq3DD5MQ4DwGJ6ajjLxqdcZyonYmsTQN5RFbZCtBvKaF3ia",
  "key19": "4VuoUfj2rP6Lz6DQrKYFC5yTCnceJpwwjQ8qaiJoK4UubLyTLbD7RZNbqtniTG8S2RWtpfkkeXVa5BhwQiVPZUsk",
  "key20": "2SUDLEUDKkFmBzafuZjoa4AxN8G25WYk4FgbezGutGXi2iSSQh45w6iZhEFrorAxgwkvHG1BjDVYYLiMjMzjpqPe",
  "key21": "3CoaFSd7XmfUVD1LW7etKtSi2X8yexNNqqBKXzRFUt3hEbPppASH7xUQpfruEA7LZzEfh6GxdzwrFrVGkkm8yfdx",
  "key22": "5pq96GtSTuAhRkA3QqiV9fXkZBocZiGph3fcw3NC2P5bna4ymjm6xEfwQ6xrYFfhHNbMdrk6GBS4c8S3h5hn2Gmk",
  "key23": "2nDgoCczXyqSYKZYTTz3vwZ1KvKBYyHDxVPJewsvTePfLSmt57rSMHK5yr3hU5TiSSLFhVasUkg79QoazobBMsKk",
  "key24": "2TZBpEdPhozsn1eSdUrgyJurbzEu75xH3bsM1d7ikJsdp2aFN7DQh4Phgq3X3d1qu3Xg7tsPAb4JKGgYoKTzz92e",
  "key25": "4XicacyjpFG9n4eWhkbkNELTRJAzTWwfHwoqncoqRXuVJgmYNQ3cUaDmrRkmx1gWRpBJhfP1GmCb8ngvLWU7jn2i",
  "key26": "56P2iENhLk3rqwvgtMinV4Vmsco9wTgvc7RECTRy8FL1xFD9uKfwGtvvEJpL3S8QUGabDAqVvcs8MFBEQhwcMuiA",
  "key27": "2QNiQYL2LxiDpt3UCXWYgPHvm5cDVJq8XALGtXQDQbbKNYgcDnsaCrzF74NZBEqkjwe2tDcwabLmsRAGstm1uyhv",
  "key28": "3uAwr4MreWro6HVDFeuoW6KRqfDyTGx98ttBRERmix1BjpJDbpH5uaPmn5yVujV32r5czvjdWY8qUC54dUyNFMqf",
  "key29": "1nBJvqyTvj5Yw8xyGFJKjL2iStD7sMPCg4WMUTkJZJsAqcLyP4tfMFmJtJgTEBcq5GAfroFF11WQkQBheThn8TT",
  "key30": "2VGWmvEaGmKYVLKwf2MFU1XmygNSXfr4qekh5VtqrLbnioxRtojVzhX6FR5sH9mnXPgymR5jS18M3VxRSxKdZVS7",
  "key31": "HGUHpoUr6wBfJ6qzKJWCPkh6VuYNaSgfL4b9z9cmGHoVctGwAdSjoxHo9sFVDHnwDScKKF6aYtP1T9Lu256tWqr",
  "key32": "4EQuGQxAeHHSmX5d7sCV69vRpQZ5ngDXAWCW6T5H1nov8GPCtyTYKNZw9cDfpSr1QrWpx56Pm8okpazq9vvgLTXU",
  "key33": "qHTKxQMsuabYsKJVBfLzYst6k3z1GXa7m6rEx9hPFc5JXhFJyDgm8uiBr9F8dXfaDY9S6pKzxWYYeeu6j1cYAWv",
  "key34": "4dZrUkCuZCrrPmVbEn89xiRhUUyQwnpD9zbLb2h7YQyF7HCyDcgqQju4pofPwKZT8P6AmagFLXLdbrGJaJQHoSFz",
  "key35": "3khwqYxGuY2gFMGB3tPvzDFDDtZHaApur2AEaHD3iGN3XBnngMaywMUQd2CLbBHqQXFRDsNGhksJznqqqtWWp5yP",
  "key36": "4STJo8gG13G3o5JT5wXgYQySxsJJ5QXmnvtj1rTCCD4KQF4ziNxhubwp7q4nBCdTZezGSjEuodRvFAFEZGk8GKn8",
  "key37": "5dLXJ1h9LovgXvVych6VF9FM1zYfS3ZYHUm1gJ7FDSA1L4uBjBxZK5z7cD6b1kU6gYvftVaG5S38yf5zp7bLHkAe",
  "key38": "5ibQAKGYkpgV6AVjoi4Y9hDRFCifGseSveeNqsbwn9NGSTij1Q4bxJG4NG7BYibb5Bpy7wSnZztif5qiMpwxNii4",
  "key39": "3Zmx6USD6RMXjXMKNsZvKseBnJqZVrkTVZB9zVDb5kn1HnHJk6uU7hHLeqBmjtmLavQhbETyegcuH42TH2keRXm2",
  "key40": "2oaCgubhsRxjwNJJJoNbYN1WLkT4qKKjwHnHHvsfqyA39WcKp9EmJb9tWz51Gwi1ofygDjA9MUqjDv45DZjaAe8v",
  "key41": "27hF5H7W5ZFtKMyJqxj3UxjPApPytE1UDwRV2PHbbeZzqBdWUtoSu4569vZEfFAB7nZmuq53DNARAJqCfecsqaqn",
  "key42": "2mGLNQZamJ4d8d1PvhtYmZS2d8eGZ8hnJgPkWjkwCttZP9a1dPCdL4sbmrKr7P38VBYLBWS7iQh3WCiFePUXzeiG",
  "key43": "4BnoSbW7ox2HWHKkeuxJMBi2385cM1KrDDsYVo5vRaqoXtHPVTyCPvTEk4B4e2RFwx2XH444X4EyP4ZKhR7cyumK",
  "key44": "4tghwCyrUnAqssZX1khtBWHF3uEQpWMoghfTR5vknSRiFa17os4imWFza39JJEsRqAbUtFcJw99w28cNjgknddKb",
  "key45": "4zJCUYXQRQ1E7P7b2DsjRW6iCjxk3UPNaUrgzs8eNAq9vuyyhpgeNx8kP3gvBTFjBX4MxQBVUCStxaD2ew1bxe6n",
  "key46": "6vhkmdyRW6LYYMVYSXyyUdQwFtkDJs26VuRjiY5tSKv1io2gMY23sHuJh5C72KG3u2G12nEeGGqsMGJe4dLM7E4"
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
