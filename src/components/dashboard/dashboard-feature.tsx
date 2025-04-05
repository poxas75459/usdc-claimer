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
    "5rgMyoqywYfo8DLGEZdoraCwBX3qD7kjXBvpzy3zHYEAEySCJySGcKBQyXpHdigwY4bVD5fYc29geCuaFWV99X5T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28FUcYtLMn7YxKgJLgkjaXt6zummHxkAsBDkq5WVeWgTS6Mu4ewVrMJND5QggkdGv58tTgfMkTVGMPngUFVAPWD6",
  "key1": "1Jr44tk3ueJHN2iaWWWvavW3WJZnPVnAbBewTMiygQTfBVGM96fM5jV2ZBr6GGNe3artYQ1S3D4VWRJjwXJsd8k",
  "key2": "djmQvf2gbesKZ1MB7fCu81CAHCCTd2wCdzQsuoxMgrfetiFNHcYCwGrXQnpwE7Fm3DHZmjgf3ciPq5yR3neQYvo",
  "key3": "57Ywv3dSDxTtKGCFNDvpuDAAR9cGmQv3oJHRY77GRUGttNEATEfwQb73XjFJssA7qezc7R1CNymwSKSPYKyy8o3D",
  "key4": "7HoomS7bxgwYAKi56NHqQRvTs9g1qheTU67Si66wj3GehTvNKgVBBKEL1dw8KWePAiGrUkcdr32gwGqysscMCrj",
  "key5": "ap3wjPzxjKiF8b5ZWfnRaBc8357yTkK1bCm3g8Lhaz8woJfTBJERgkCAAVihVaeB6rSMDYCjaeqz92uYosNUqjy",
  "key6": "2ADo6Ho2uK2JQA6CEnYUuVUPbRPBFSgWqN1ovbowEvTh2vHBJCTWs4SW2pWtWfhNdqufuD593dU2eqLHn4URzymJ",
  "key7": "CVMNjJaAkfoB1CDmB5NXzM5j9oVUStqYJzUGpLjD3AicBBM7MpKoyte5vNy7YqJ7sod6jrusc22yLhpmoopq3tR",
  "key8": "3GZPPhnwQjv9dSUmdkL8b5YcF7mUqgCEwmzd9sEdqhKbFfXYawdhUk8DHn8tGjsf3GRrJ1DzNHinrSGr5WX68keH",
  "key9": "2GbyF7JNhEsGikQNTzt14tby4eYxEzoouiVtAtn9pxtpd1Nw6cSh16jvRLDSHzL8jNvENYbd2xF6M7SSzzSbpmzA",
  "key10": "5MkKSq3havtdZK41V7CYkzxfT8CT4Tx12FjibhRN5JwPQkWr4PwBYYJrsRcv5E8114U2DBdMmyon3JffjthaTZ5D",
  "key11": "4DG1axAN5husUkMvEXSfKSCkwGf137gEYTwS7DQ6TBnx8bS5PirovUiqmbCHwSgzQQywWZdVX2SqEUmEJbiKX2PN",
  "key12": "4nbqB7QzyBHUnFhtRm1CSQy8vJyPqLAtuPQyprEc7D6wPKSxgjuwvZDri17YpXattEFfve3EU93stpQsQvYCWGYY",
  "key13": "2m5noi29sF3y9D3jjCXM3iZ7tuqF4aiMKD95tMMdTybeF7Cj2ksmibHSYPDSVb7EqcrKvUdt4ZDJjxJCVeLb7TDc",
  "key14": "2QrjPd8ukAb6DWgUnep7ZxSPhxQMNedRATGus2G5B2JME1tR7aBPoYxWcnd5X7EtRbHXacqismNU5PFJy14qKfeu",
  "key15": "8cZAf1xwNQtZbY5L6aBDLb96ugeihp62W72mdfgLQjpJMqkrNWR3sC6VmTjYcyKPbGGjXSWhDp7SYrjCrL1a6Jf",
  "key16": "7TV3qhjaLM381kPUyRnKMFzWd6p7jseoVdniqj3YksiGXNgPFxTTu7A3GzPw5PkNwKPvFEzfREPd6BHVgEUmt8j",
  "key17": "2ALsq69w8ZpdkVGharXXh7wQkmhHjB6qbhbjnMFzq5HoxpphzE3ZZ4cLPW4hqz1zE5VZcUgoJAgA58EroVw56ScP",
  "key18": "27oQsPPcZ1ymdtdG2i9grG1xJKhD3v58MzSFvc3JG1kJge9cW1VDiDRp1m7H4F4w6jdqGUqCJQYNT2Zz8Hhm3czG",
  "key19": "3ryRA2Bybm1bg4Ggy5HbfXLf188udU8Eh2MtpikpjXuQ3bk5US1bC9pHAa9xoDY5vFhzkMj4yjnwbaJP5fkL9iw3",
  "key20": "3uqimnQVKoLob6Wo8ssyx4qoLNeg8ysVLyKqsdwiB3mzcwAn7DMAYNQCXPzdXdoAMN1HS44jtEztQ3SpKNu3ksKs",
  "key21": "EKQz96XFxDeeN3fzyUjEG8qJfykym6oXuB8r6ndUg1FbgDNxxKTRgdDF9L92JcGj5PAx2UTMJc4dRvacQaBwfgE",
  "key22": "3b4Bci7utPVzp598bh3ioF2sJTtZYn5FXWrYSikyVc2nY1TC9XugZDR5ztfCik7EikRZTAXsadi9sWyQihAVxY4J",
  "key23": "9ZFYoE1xr2AN6eQhHuCGSkAPJFcm1st23kWLrGEVPNSK6ov3rRLcop9qbvE6ah8t4pqwmUeRoBQuCD4Tae6HKz5",
  "key24": "mi6tQL5HDu9STh9uiRcFft2NHmUcBfGCrd8H729d3K2tznjYgCPqFA231HuTJd11wwpPaHD9VwW7x2wqhRTyhQ6",
  "key25": "4cWnHW8qQN8buajxp9Ddixdrdr3HcvK1x2pian5v7sszWKaog6BWtw7USANHf8hpnaorggvqFDASfghKYk1kATaY",
  "key26": "3VJ6sxs7jyR5J11kEYwmeYyktSDiknhxBhknrpXR9CczikoDSMjNWmrg93uMq51caZEg3ZbKNzb9UAYBdK1F1xF9",
  "key27": "2pAppy6STkW3oMhNBAyVx7FhhHxkcQizEb7gmYnP42qYK1fWUnJ77bNswWRufZ7JbfV9BcSqdYqQX7ofFc7HG16V",
  "key28": "65RuBRRufwe7dwZrX5F8pSdsQERud8PDBt1DnSwwfwcu1yyrt4DWymg5WR982BuTB1rn6mwYNboDZaPUvRJp7ssV",
  "key29": "2SCst11S588wDhPGKkDjcBjuYxCsjRBdfgTzndwhPuqCLgw4eLE3bA1S4wdLigza6YV5rVG4tiiB9GR2hNAofP2a",
  "key30": "E5tGiFqLTb8FFzSQaxVMxxtmZ1GrYBcvNk69GVeHpbhBCsdJshMeTRdwxGHPCppivAEV1EGx6v6D9hYmQwmq8vU",
  "key31": "4zJwUZrtiNQ76JjpDK8EyR2km7HGXmBtAEsub5LAbivXPcqVVK9biA5TaPqtFF5wFrGG5dkuYxqU5NbggpKUcTte",
  "key32": "rn8xvoo67VfJ9jGdvCjbpJnMzAcn3N9M3cjVSc6R8bKUWW74dVzVHLepdZTZEywqVrSyRbF6CmUNzfDC4TcFLqz",
  "key33": "26BU5y8yhPpSXYeQN54gbbvUgjhy4meFcTcSpN3QYecxEjojSbXKr7aPJGRvyQPoCJkyStLnit8cCttPHgJmopUJ",
  "key34": "VHs9MWbVd16RUTnFhNpmumHysHr1g5Q9BRncKZgUtREB5feWh6GEnw3LNfMG2TGfvrTsKhuVacTH81gwTcEuPuP",
  "key35": "56bv9niLL1fpJZAcuop4GFkyLJpJ2V5XYKHGNXDtg6o1c7B8beNMatZuAsSv3NwbZbWgX19RHCzdqxWLETBsFsX9",
  "key36": "5bUT3Pv39ZgDUwSasE1rHxCXpzxNGhoD4pD9B16H81Mk4V5Er7raG9DTbGnCKAXGPAy2iBEnkQiZvbcVPTeuVkxj",
  "key37": "3cP8gvuCaG7Rp1vknSs1Vt32KvQiA4MDV6wHyn5Wmmn2QoMn9zvDc4ReX71gnqALmJ5YY1QScWTwnAJoUvJyz9Mf",
  "key38": "a36NQ8u5BqZXTDcCGiozTepAqxR9u8LisoPuLSBtbDUmCpRkMhKbFwbpAmuM4AQ7VfeBRhshfLAqx4mS4VhCb7f",
  "key39": "2UpLcmpoU6bSnkpMGvcP7Ripzi6t42dm6aJ8pK19S6AKFSTjp9kTaTFrjn1cZ7gG6QFPRktv7yT62DVteKx5a9rJ",
  "key40": "5K6fHx8akaTkZ2zqUKr53Kpp6XfEyfGcBRWWAJ9q8oXPozKcCkpXvkPUs4a2iN4FHmRDa8jPAFJpLDskT2SSa2U9",
  "key41": "R9MNkq2335H89wwDKBmRSdH97oMJyuNSyHPA6HTvPBiJpjKfcDJFw4sogr6UBXynZdLr761eikSyLUHYsycwNHF",
  "key42": "YhpaUdjrX9xCka4AVhThmj7xSkRC9YLnSGpGRUqYtLdLmDFxYzg1sM5vP2RKujSbxu9gYtMN9AnXrJcNnXNYNgg",
  "key43": "5Gu3B1WkKudTicLszrUz3pfNYXMKK89qYeUZJ8emgkiCe7Gv6Jh4QWj4QCf4bqbQ6EFCTY4xqmP2vmzuLm4vk8Yh",
  "key44": "4TgZG1nR2RcRnFM1dyYV4yLCqPjt3vs4kVQLaaTsZY9bvgxQpgkQbPbzEoRZ4Va9sjLiRBLTBrEqK3wDzNT6JtFd"
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
