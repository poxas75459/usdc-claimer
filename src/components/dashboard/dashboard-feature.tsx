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
    "jJYNwoA7ttJ3MPeAZDTNU7RhHMiEVW9xCMV2J3dFcV7To1veQBTgsSC3Wp51xAvKgwJ3YxrhBHCAXoc8sPxf9b3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M3Wszw6PFzWBYkG7XULQQjBMcLeZ9L8CKsgqRC98ibFUe6rpMmgkY7PHLkfbYoJdmCd85ZFqNKH4R2B9XTxCenM",
  "key1": "4Lw4e2D7hxAMzftQh2oafkgFGvzSK2ftJBnsQEQwdf3vGmawPGV6nYXamEgyETLfMMDgiysvWS1zrsxnXpfQAivi",
  "key2": "65r1MMEbVmxJ4E4SXhBD9sMmxHgwXJxpngpiwuL6LHSVLMvPTQsdM97GtWjozb7xJxk637S735WVd1qV1PZgw58o",
  "key3": "24QF41ftBmeALbdTxLDB91RKwQzU2MdTUEvsta79idGW5KnkubBzLxTWEvQPw1CEDmkZw8oJme5bSJU9iqVXEN42",
  "key4": "mtiBpsXh7wYK52E1vaHc7TUnFwJNanuRhmG1Q5HjC8qeYKRCwUgbxeUg6CNYRA7amQWkdAJgfozJsZbgqw91kVW",
  "key5": "r9LvU9uoUi5it8zbuDPrNUZzJJtNZ4z8tzEyDg3QRY5ssrtrRXKuwEzJK8t1sCEoLnCWssVSeeoD6KH3YKfnq4E",
  "key6": "5xdeZRjB6wjAdVd9PuWRWnNrkS8czSn1qvwxeC8PzXhkrPEhL3eEyy7CujEUvex9aRwpdEBgKTpBHfVQsKhbm8ZU",
  "key7": "2g6EGisjX4ayf5yz29pNYE6mHdDgQV6yUJiJFMdYGMXPHwRdrWua1SRsy35uwT8QWi7rSqKxTuU2GGQXadRDBLDL",
  "key8": "4hPESVciQfN9Eek5cRMtxULfWc44Y8wrtnhUrLCM8qkDX8pybm44a7kUUzL8eRapheAgqjVLMGjuhFQXPka5tv7p",
  "key9": "2RtnDddtWLY1Wpq8Kr8D8Jc5wS2gPMdPqAHicBug1bStptih486RZTjujKYoqRnqZZSGGBvTh9HnvTRWfMy53sx6",
  "key10": "MZ8dhbqfFgypvsZ3GQdzfdEXnpaUga47c137xikCTt15BpJAgz3KxnHr59GVdcp7zYu1nYUi37To1qP2mFaZtXp",
  "key11": "3fmvyfGrZoc1PG33zSZLFaeRR7rdyDH61my8Tb2o2FmMdEQYSnUMbSRiophdL4Pk6YF3n77JpijNxGvgNEcCpdMY",
  "key12": "3yc4sPJMnsa8x6RY81V2ci5H7rW7bDT6VP1dc1AiK4u86iVJoVxHXvVxnCiUJRxtESxz3GekBpwL8VV534tya8Xh",
  "key13": "2RexpB6igLFeCmTHXwLJf7vVcgePNzQF5Ep2tzFhwYoPhS7u8rRbFiKFk4sRATnCnmUdcFs26y8dGKST2Gvty922",
  "key14": "gpELYf21BoydA8UkhDyE3ff7SY3JEVVJP5RMX8dxBbpRwwGvVtZuf1bPZNzhtjqx4pC5msJLJMGvyVYWjJfaaxq",
  "key15": "WyCqGHVuDhnUpcrtHwqj52NWtwPjXqJwvfFhRraB21b2UqNNNEVyG27fKciKu55pjaUK6etuFPYmUrUdZtECmTU",
  "key16": "4sovySSyYwBgWB8R6gsscWypdCkjdmHYZQGMdgkz3N94rvgdin3D5yECxNKfuwxE9a56dwcMMp6ozuQTdDSjDgzQ",
  "key17": "5esLm8sGHnFuiDWNrxtaNQTCQaYEJokrque66Wow3vYeiqSHjSLNMb6NNyeHid5TpJLFws2T9znJoUB6XPbzR2FR",
  "key18": "4AZbfcx8iLBJWdA6Skgo7dw1GosAp2aNYrc1AAk87rczEmp6FvRnZLATUi2BhkFsx8JPA3wixvM3uTKGxrL4BTbu",
  "key19": "RDwChniELc8bec8Aq3o6r82ZbUXNDG7TRgBa7sshSjtRyX9vBDCYhoXgzSkVLz9B5Zisii7LBnntzxjaTBMWWo2",
  "key20": "415zzkmA3zvDQ4uiAAPmNZUpwnKEZS4QgT4gxxiUAmUVNarHyFoQVFw9vYhvBbHsetyRRtb2iZ1NLSyY8szAbmJA",
  "key21": "g1WjHp1kcoz6crux8S7yNAWaHBXNcKuoZKGQvabjd6CQSc2cxS2JbUq262Y6bzUqz7p8PVf1GZRCFXQfnHTQGUu",
  "key22": "4Pycrfy3ujAWrRukGneD7iCxkq5TqxHccg3TsPhCJjTGc6sDDzNigwgUcuQ1e6K45VZRbzBgDD8pHRBT9biTo8wc",
  "key23": "qhUXKVvJNNgDJVC5nKjnvoeuxSzALR3B9N4RHBsBRmNfidjMVnichnYBMawRK2gBP295buxJ7HPWK21XLuP1Ug1",
  "key24": "3BKppQQFdUcDSiCktrKnQNMSoWXyPAgGHib9AH1XDKWkvU1W9sgxZiCMxzm6xT5GUUNSDYDRYmb1APAEgQRudcDx",
  "key25": "2caQpGW3cxSFKfh8QE9JaQxVcpmgMHyXhxCi6dvazKzMouMmz7ABtXZcYFALBRUJCSWEqr5DvEX2KRcf4C9bFibP",
  "key26": "37pXxymbs2AzBLaKrzF28DsFNTcsYmjdAeparrdCWTBQsdsyQJWLYnEraHziiAnrtcj2UbKKwBwWK95CQDtA39K6",
  "key27": "4ZiWhMoNRdPPCVFAy9Ap832nBdJYZ7RC4VcgkzZb8Hy3fmVDroNyVf6kGYazGbXmsnUWxobJq7v6tbdvfbrySEdx",
  "key28": "3yeYeWUqimYn6ysjkTiGU4KtUuGJgawUpZcDoKLduE2d6nAGe6K1exZ5YUfKJe4fcA6xn3dgFatAsyYJTkJvSJtj",
  "key29": "5CeST87wzoxyshztVUyP71AUxSe7AboRh4kaDCi2WDeCEvNG8CHG4VZ9tVUaWuPa3ec29B4qu8qGiJY7ZYKDoBxZ",
  "key30": "37BwHAvPB7iNY7f3sxbkADh99MbqYJTMm2k39jPTMsSCf5w43GjxAgPzR5cJ1evUWf4xuWQtauRfzkhn7wudessG",
  "key31": "4yAW1TGBe6zs8ggDn9w7arcAeDkTFJPFdAYQjpkzHDSRD5bsmEzMPMUYUUzuasS2EsVn4bjubg3LH2DtvsSSiv8J",
  "key32": "4UYnTKCz4UyWN5W1r5Aj57QTyity7Gddk7f1ffmf1MDYw2QHyZoRouhzgLU8fpmFxwhJPosZXRnGqDRxuNRHrvnL",
  "key33": "32QJzqALj1Nvv5fmMxLzze87WUYktHHiMHP2CFm3PuvnEGw533uZxoSsDgy6iHdQ16sFQehuAV4AT2egAXMJr4jJ",
  "key34": "2JhaRK7RbTgAYCVSYxdwPUL5vCPbfwXqRhLXoWte5KkxQxvRKS4YAq5A6h1QHaoU55zBeZbGoPUSgB86e8zWQWyF",
  "key35": "4in8BK24sv5tF8jzEeHuHnvbXwDEEaEwdz1zYzU68kdJB7YRmmnBjbHeT6WovnW4AD3EKCv5xMaseC4NLt7oXyh1",
  "key36": "4usZzkx7H2SJ4gzTMaXdMXWuVxue3iLwmPgemNtXxCeYF5qSbPWZt13NLAd5bes4Aww4zNoZSei6Qq7tUatTppAj",
  "key37": "3RbWdStdto6c72n7H6qHysKS1QqjznAsn9zmtncWxmScyoM4g11VoZjqWG1kMSNG4eJuJ1HnMfukdDm1qU3iNX2F",
  "key38": "4EnjCMNJWi973Xy3oqqrESvXjWxQSRKouwLAVHCyfzm95zyn7PhtLjV2bauo2av818gAALt5hWUJfSffqsz6QMjv",
  "key39": "5tSAgNtadDoGTdfbDoPnpEEf6VcZPXEGqTtuVUf6PnKbhnie7Gb6bACsMdBRMBsZUAmgdrEBEUzBy9uKQPCcDuP",
  "key40": "2X6N5SoDFJPTgBgfBGwQCQLvcUguMKfTk9E1q9L1yrRkbCVMeVe1CDwMEC8dDhYHNu6K8JawNY6FcCJJdgkPhoJx"
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
