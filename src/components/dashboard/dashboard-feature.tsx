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
    "jEAcYB7rCf5yKUUaygRfwtmpJSAS3BemrJqwzN5fmdrggX8RccZMmYt4pHX7wD9FHNu5UGeYasLy6v8G9XKY7j6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59cHS4ZDBeoCrVqDJ8DTa9sEpFPQKGvobtrTNv446oqcHPdos9JqWG2gDAyxu1E8N4zajYPYqwLCBEoEBwfVTKmu",
  "key1": "42AaN7trM1LJRghC1k37kAjNpBvASwJTAsmkwwYgipJR1fgvEGoBgLJtUhnErswL26N9MUos1i5w3BXGxERyvPxK",
  "key2": "3pdhSWdW7fJ1g8XQ4FxQKYfEUpqgUGKNA9phoS6yYA2r62iPqspbtK7E7GyRms3YmASG6hwnqppGH7Pi5zAvKiQt",
  "key3": "4SCMmyypYowuA37m2vebDMHe2UTNREvQCCLRT71ho489tjhraV81CGrS17okEYVrDu7C7TWRKzdp189jL6TMWFnL",
  "key4": "4qg2wnvf5rVMPrJQwt43mxgkfs8jDRRV8eoDsjsfFKbLBXQAG8L5Fe6Xb6V9dSzeCdAucoYXC1BJZi1p2EbtvPd9",
  "key5": "29QjbXLetw6u2oSxqqi2LyACPcbWJFCRAKMXaYUn5SpgNFYFB3PtDdAnByDoX2SFmF2FDJkaEanR1Y1yhnfktDiv",
  "key6": "3kr6RhZU5FY7Zv82Ue3WtFgmqD7AVLrsNNiWC6zqUC243yd3fGf6uD33tXSVqVzy5kVgu95macnRfiZZ2k9kRNSY",
  "key7": "537no1pqH287QQUGYSpEw3KHeSVJZAninsSLZBtrAypoVvhR9g3HXydztuZw9XLBRyZ9pzwRSRf7vsRDEGKviz6j",
  "key8": "2KMxTs5t5HcqYxfi8AZ9yNyHKJNpnAnFUmfPHvSDvLgyZZosWUrgPCuuRHGv1qCKnW7jWzKGYXmd6ZGpMFUBWoMt",
  "key9": "5FQDQ9Ukt39MakCkZvvtJskH5MRJMQAKs7diyb9qj6ZRZANa36yemSnFREWFZJz1Z6ySSH3qunK9fTEfmJCDHUiy",
  "key10": "2KW3La9qk7ALNgVT9umg6a5s7QZH83M9ovWv29FMm6M8XEPvU7SGjdY7Snuu8MHUKTMBDMcsymFZ35EWeeWfhZ4d",
  "key11": "279smrerkNeNJz5sfctMP4Djbz4AoehxRFsxJBaEmx2Z8kf3mCkRqUoTvKkFRP6wDMLUUkG9cS3hbmL2GiSjwyLV",
  "key12": "5KjV4oL1H2mVG8JRVBPR8NDnr7LwErGHkHjMJPTAmtGb2a6L27Q6tzu5AJYkE8i4RFLqnKrGwava8fZJLLEWyBRU",
  "key13": "3qii3pYn2uMVmFUe9LETE3jGRyPKVGzXPS1UPkDvRQkQzBsBh4SyxD78xnKdvEKidhkVq72FvoB9WaUcjKLrv2Uu",
  "key14": "3EF6kZ7tNnyKjhma8tLxd9tksqzMsfMT17gJTtNfmRuymXwyRom9d6B8S4dQLYno7zMW2R2ktsN3VCHHR5Jnmf1x",
  "key15": "3AvbkGWnQgkyNsrp1ti2fAun1ppxptsgTR9vQrbeKT8YHqiTBuqagaGqzdURthEQB5bdngHpHHzhkUKy2ytampJo",
  "key16": "ffrA4TtarTv1KESShB71QDsdmTJLCtA5TBW5oezW9K1A83FED8YrMUwVZC72eS9UyjEhahfJgTZ6FkZxi6YeV5J",
  "key17": "5tpEZ4hjjWzKMwW9zkUnhhY24RpN2H8tSJcDfxuFHMrMbTpUp9n1bKstSAP41jnG2H7ZAj6JD6meYQhJ7n6wyMya",
  "key18": "3eFNBR3EA3FeoM23b46U6Y5RL6Ksfr8kFdykmSjY5XwkKBtvcg8ee915LMY8TEV2QXPnbCL3VVaP15bUqaPSg4db",
  "key19": "3AEhdQ2VswewHBPjhUZ6QKXSAsDcrp4xydc6zPPREFrhyaHG3zqSi865X1CFSTZqeEB5e7qUodHYV1PK4gTHS6aU",
  "key20": "3A6LDu2VfxBNYg77fZZUgLJoHDg2dCtdTMzaWJG7JjBVhfFzBR4JrFiNLjqLzDGbDbWKTV3YUzN3twkVZLwMPx3N",
  "key21": "5vi7qhktfpXfCmSbGoy9yjauGEXTemBnkgiHCJKXWjZvK9Chy4QWfkW96z1RJDS6RF4TiU2CbVQzc6itKokTmXpK",
  "key22": "3XAoLvjbDwWd5NvAXAn5fhf8SWVFJUpPBrXDKjmDZhRCg9c5KNB6U4bwWLiaPEwqTb1vC29nUgqXQL4MA27ZZsRp",
  "key23": "3md39YEjhsume9Go8L2uEYXvAikVZegg8f5xV5CDWFDYsBGgxA5Qp7dsvm7vXTDW7GtTGJZeGxADSMXYJUrsWLaj",
  "key24": "3EhD4AGN6x8co6EYo5yvfojkke9nraLt6vugSGKk7PBSXPXGCJ42A4fjTb3MFqsRTreywiYvvGTPhesAYjwYu6mH",
  "key25": "sm3BsSwapmPa3rsW38wo4TciB3AtmcgpjdJdMf4iDW8CNPqSG4dVaeNuZvdME4dGhwmvCjwoBNm3d5JAnHdLw6K",
  "key26": "VRJ9J2MDRcg7G2JkyzKRrykgrM4CN4mPPsUX5oGnWHrm1jHgJ2FSBnjhpy2SLwtfXHHBt4zV5B9f7Rj1VvGoeP2",
  "key27": "3jJVbVKWDBZ6A3ZArfWb8dHYJyhztNWTqK9cTbbXP2aJrXT9qxdHYY2jcXQ5fXKJSWVL6AJDYtQbBUT1wAWW6cVP",
  "key28": "4oyqPqwxwkcyUbdFJuULmZvdccUKR1YLtG4j4FvFUN3Mzxcnjt37CPpHqchuHQFs5DmR6Wt3SfwSzb13wNszGxco",
  "key29": "4sELmbq7tqgeEe8STHme2HvkyjsiueZopfBnaiuZDNGYCrcmiBzXZydD8sg98jWoJxGyxSoiNmP264nUPREZbfZG",
  "key30": "36btrJ1Wyd89C6jrR3kRfRzfCL5Jr2s9kfNWVdkF3TLY425jPACZk7RDXr9q2U7CaP2FNnu5DFTjn3NRL1PgXKDf",
  "key31": "4F9nsAnAQ4RnodzsZvFWJf5LNTaeQu9WbkFg7tRjKUqSJbQVjzyD8txVPmcjd2URog3BEqYBZ6VxchwtKPN1wZiT",
  "key32": "313zhpsL4crML4ocR1pyf2vAJDbxLNzrgNnQE1SUXA2HAdFecbLf1mGXfD9XPbCMdRY2krTZGx5vDm4HJw3yqqau",
  "key33": "3kCuGbUW2quSnSwfRwyhPJTmxuABCf8MzmiBTdya83KqG3AfKj6bFF6xZf73GZrbc8XB9LzYBUwQAxaMA19TAVhV",
  "key34": "4DHiBHZgGhXgXV3r9wca8NST6mCj3kpnBHK9ZV2efJDwqyW9F4a9batJuzim7XxoaEEYMrnLPDAjDFGz2anJG6Zj",
  "key35": "xwq4QbLLnVCJ7aNyGp1rPajdsS5wQimnvdXPSBjRqUkJbeYwfVcCU1r68P67gvVLtYF67fa5QAYHctrshix4wSt",
  "key36": "3ebeMtXVSKeW9P3nBTpHNH5cVXqdQWUku45Erw2qZXsjnrcS9FtH9VjFEueMv3x49LWhTMPtPmRTqgRbp2W26ekR",
  "key37": "2mEW9K6m9U6ciMqYQwd4WiLD8RmnQb8A18askisLUjHtj8np8Ec6BSzGWd7rv8YB4okSNwcj1XNCczzrKTt54UKg",
  "key38": "5FGUbc4yXgd2ybG1b5ufG7uXd8MwrVdKKj4DBxgYA71vM2J9wVYvJTfsqnxP7tQfYdhdmHKwNi8DveSjMqirTgmm",
  "key39": "2X5macCMfQx7hzwhxG3JLxqZBBhnKjgHG8oNzgY28Wn3AeFmsWXXLGF8YTpBYVaCL3ecHXZyor4Lr8FLpARAZvu2",
  "key40": "4q4uXE1Z3DaMA6uxDh3aYDqe8aRL6XuLfbYy8D3ZfLsUPHNwVmNbhVbXG5uzsLBafcaRpHPy5zy31UTeM68mMVGW",
  "key41": "uZ1vqkLsoU2wNG4TYvrKuW4NuZRhi9eCvCFY5mJXa45D5wyMQ4SjPwcSeJ5ssVMuBsd5Bcj3Y119Zgj1pDYWPR1",
  "key42": "G5qrL5RyXDffMoDfKh2WENpamDGJBEM5A9bCdF3Qzbj7JgmWh99ogd1K81dj5HLcsJBckdHZMCgK4SVSzbfpc26",
  "key43": "3ZtpqpXR1qgnV5DDBnFxWRpM7CqG9NM2h4LqkrdPmonJqWFVVQkGFV9bj9NxpEqFr6FfT74jZWeM1PtrrCPEpnUN",
  "key44": "6tfYU7L4obu7q66DiRf3Ek3mMyC6nejHQvjU8QauNsBNDAZVdPJSETT1hwgBjAEugVo4bAs3oABJWvejvRze3mN",
  "key45": "3qosoim9Lf1Ae56iHkVQgjd2uWKMunzzzHoWHmvy9KrfwRZEueYq1pkJ2YUaUtwSNbphzDdjAGkbvwqGb6JMZECg"
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
