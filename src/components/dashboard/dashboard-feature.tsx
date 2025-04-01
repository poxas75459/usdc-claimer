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
    "gHqkhqDNBh2kzk3CGxXQjKF4LxvvzqV2y2ieNMj2BYiRCzHbTscGtuNrPHeZSY7PMvQK7Q7kZpmHHfFBDbuEAd2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dxmndpqpoDV7TRZGJzT3vAP8Ho4CVjM7ETnUT5GJ5TAjZetGfn3UGsTqj5HL2uXnkFhFiFdgRxhTiFYwDe54K7H",
  "key1": "5cxvHKmgh7WfajTHTGcXkvu7Z3idKq5iqjBybtHmJJmRaN9fykKcGF1bSWFk5eqqVEt74VFFDZCxidK6vi3R8Kv",
  "key2": "46AaJxd5cXYV8ed3Vt184YxuDp8CknNhuM5TvF5bC5M4JpdTezifYwdQ8YUXcg2jzvtWgXNZFPrf6qanfaeD5thd",
  "key3": "2vpsA4GaDpHg3dwU47BodPU2RYfeHU2FJDGNqV3ZFpXZXDhoXdFGfPnN5tzeDwe69UVufXADbWC52pqd9MG6XajR",
  "key4": "3Qvuw3yZLDmuVSgEAE4NyHKUhzB8YpTGRRvTb42VDPRG4gmzygvrAn7dgrpEPvCtSwmb2pXQ2ELo3r3s2M61Az1v",
  "key5": "odSeGrmVyETh7LEzh4PAnx44UtgGwxvePFqEv6P1qvvgLfGqGPLAf5FKaTFZyfbXgsai3sNukuLtjJZ9QtT1sCu",
  "key6": "3MjVnCGgvqoPSHQRhvz44zfDftG3JJDYjV16yEC5dhzZy6E7rvo8Ek7b53oagg1tnDZzpEed7Zi4qunXRiG8dfKN",
  "key7": "3fFB8H1CukiffeeRhpKXaSCaroyjnT7q8iVCJH91JGQJRHXwRQrmiSVtDf3h3pdrkFAJQ4ERHECdGMCkqMr5juTS",
  "key8": "398iL6Cq6qFZiUGuDd7S8oWwNSuYaCAtVdXQiymsioMcmgyRnVXdMPUEjK8Fz2e9nSLW4ynLMZFH8arYJoEEvFzy",
  "key9": "9ExsaoCrzGKLJYTCN9znnMmyfVVXyH94dHcV9jxa9uu5ceSN4APspXCbrHZS4fzUd2JBBhD7tCwSjq4A25qrMnD",
  "key10": "3PKSkqnJx5j6T24Fs39H5oy1FJmv11ag2rRCAAZdfPW44DgA19emXhuTexafv3Lpb2fJkVGKZefCxQmn5TSgAt8A",
  "key11": "4DvcHqfRf3VpmwL4CoSt3MmFoPsZs2n4UxfNoeCn76GsQat8oNRvbKwuBkARDM5AEmspCZzL1kNQo4FFUFMsyUhK",
  "key12": "3Y8NrNXDcq1fMDauu8VxcjkYQ5yVttFxnh3bko1pUUPrrZuqs2GhDkP7FKRUaLpHMzUoJLahSfkcYnDPr2ym9yUT",
  "key13": "5EwV2HnonfcNhiG7roksuKfohsjenuEptw6iPTUXk3rgdiu8cyuZyBsdpwJPWwzCiZg2SYt38DjuSWgDs9X6ZapU",
  "key14": "2Uwq9CFvCoKzSVkcVZtcqdV2cyspgapGW5qosuAFjeF1VNyn5nvEBWvgPTnmMQuoNnRBKLYCiAmHZqu8YetV27Kb",
  "key15": "5qiaHUrf12tY7MrEZRFnQCgs3vTNfX8ZyTrRoory2Kdz7To3B8ojpTgJ44J9LNaWemW65oWRtcA7EVZ7aKrDj1NX",
  "key16": "fge7i8SYUQruuofR8bQBuCMuM7YmsyKBrNnx62EtizLyaLEzAPRV67R8V9L4Zk74ypfhZUGySquVqnBuxuQxAsN",
  "key17": "3Dvi1LuE4Nwh3vh7Y4PFVPn3d9MvPrNs26L1SbPFqJguGpQjMTAsnTQafo3hzSowfLLJ6rvN9a2LXawm1j86mjqN",
  "key18": "4o5iqLKa1heZUY8TRvymHjBy4WRQjdTceEoonKiMdhU9yBCXo4ehLAzViUgYXnTxH9LxSbmsDdmUujczAcfKAED5",
  "key19": "3kAQ65DwxowiaLQcjW1Y6wTDRizdbueW5qEjbssz5GTpkXZrxubrrm7hd8ATZyDvvzjvzfE5Ryv9AKkKUi6NnuyH",
  "key20": "54LVda1dV5wtZXTsPHe2U8VeeFHUBmoCB4ALvFLGv2Zr24Rweg1e8d7UpQSatKLgZx4cnnU28mZa3TspB3mVGHtS",
  "key21": "2ZbRw5bTtfrZiFvggnqi9zA2NL7Jq4HDFpgdHj7CWijQ1pL36Cpt5bTV1FspjGEYUx8EoonueWXr1tV1ACA8eaPo",
  "key22": "4JyPAwreM2WyPCt2xiSRuYSWqsVmsgdbvKqcZXZknnpCH2kB214mfqrf9EJvma9yTaSuVefS9FXGPAv5NqHhRgsd",
  "key23": "4gURrDKE8DbCmowT1aN6PY7PwBjsVDXpKd11D5ZY5eZrarkXCLBqCNzYzH7jTjsH3GGUoBrKpm2nBMm89Fn1fdmC",
  "key24": "5MTfxj4THDMMLmHHY3g9DfZF8mdV5kcbmMPcHe71TfNqfRiKDSqyq6Qp6QiNEqnyYusezJa6gkqJrHwPC6quFhSp",
  "key25": "3JVX9viCnEhLJQmLKdBkmvrymotDnyauHtMLLFc53LPf5yQXZ59FwbZA44F3rzvDCcPaPJJxk9JDLMWuVQCVzcry",
  "key26": "5BPAEgmuyEZbPrmgS4xpZqiBEHnRjwNUsFgva7oY9C82FrrGr8E8noc5CTsR6Bx25SSVVBbTTtYrW9Q5qGwFAzWp",
  "key27": "WWVZvxhgRRWWp7fv2tqwizjT4F1Ecz94iBbBEghLCZ3n91wTishzGX8B4xfeaqEjME8m4onUjS3EcDVTmXHAhj2",
  "key28": "4Z651R7yQVKW6siRSr2RMvhDmFYGyrcKnV2Gyo5wkHctfH3FkX41kMJHNz2eepDjJsRrfhmxa2LpGxMh2DwG6e7V",
  "key29": "5q2XjjertT4XEgPJ8kugte4GvQkxCtsUGFEU4v9jfAMwHP3eqhaCYmYcT7PR7GwAtLVQxqpxzqV7ofGpJ3rYBob4",
  "key30": "2Qa55xF383vsMZ9crakqvEsTT5EsqJu9ZBbM9183dcotLFaxZqdw9i4dD2ztSHpZsJMiFRHQarphvtFvRwXz3quT",
  "key31": "B4ezx6caWbyU9NhoxUvPGuWU6Ynh8mQuodPoV5ezGbop7hT8g2Uw4iH5nB7KL5bMXcv9YNzBjkvHGjJrdmQ1GiF",
  "key32": "2qmpHZeM9sXixZYv7dQx1DRrrGB8J8pjmYpzhF3pEda66LTALqB4q4mfN9YpfB1P76THcHZ5hm7j5XbjvaYTXN5J",
  "key33": "3X5kTiGgmGN71gctN9nb6NSyXuCTPx6G7HnsufBi3YfDg17iNjmtTxH3Aq1x23d1BMcKVCDUkSTBrTgkKptUcLXc",
  "key34": "613VctfEkSi67oHXmRySSb74cFEAbkBUnohqkQ4qYZS5JtSocKufC9S3stdUTWnkqeDnkE3jdYYMhQX5KNdjueta",
  "key35": "24f74MyqC8s2vWZdiDKMBqJb9fwbnhshcbgtEfSYQNaGNcDK85MTi7ZXLupT5DYpryr5YjUUHBFoNVAgndYW9Lg2",
  "key36": "iwsgWivnbjHfaZf3nstPytHVUSM8uqZiTC6y4TB1KrCpPiDfmVSsSCbCiwgC6KCrvrRrU6EmbumBCXvffNd38LB",
  "key37": "64wokK1LSsvKbUuBt8wEmsHKNMDk2oJa8J4X8bGawGMg8CcWyiutnENxehQR5q5TYeA1yQbVqfjzJpURzoqARqvs",
  "key38": "PYUd6zyTW17yka2LoNzNk4tfj6AN1BZZpugumcCnTpmg3BrM6fAox69GrSjzHEULhJUwSFEpe5V2U7ZCNf6UzGQ",
  "key39": "2fn2478AHU5k3T46Yas9W6iYMcf2Kx6c99fDPYsNZSiL5XeZFQqcW61dz9Sgp2p15y97fi7Ph9tgNpFawumy4s42",
  "key40": "5e3rvpEcQ94En78petnn7ptyapGxB9D9A2Jz5hv5WgRddFWUPx9S7c3GwWLWKKmHSh41Qp4xYAMYbbXr6DCvdVGV",
  "key41": "3YsmY1f2a1obMLhgTjoNeUctGPUF2jBGSJKhY8qeaaM7JMxQUqR4NaTbbnWxDtFSnY4WP9EwHUTvxfKBWU9bnHwM"
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
