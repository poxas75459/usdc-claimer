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
    "3REkAvGquQ4VtRA4LjRtUY3YggLCLphy91tKoXaBEPrWqaRx59iiF2kZEsEqZKVmSnEdP9mJYpGSiLZL29vCUs1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GETkXHNn9BTxKGSmogPYKVW8B6UfCVuohSVgybF3Ur2buzHWKbCuZn9Ky29WWYavxznAvLJjhiPCNB2q6WA9d5f",
  "key1": "5JVWR35vrcCN3aC6o4fCFwqwTxktSyoA4NMg5YKr2AHTc1asy6J8ZYMaZFW4zTp9TfpNRYH8Df8y9UjYb8SvcPUm",
  "key2": "3RCx7AjNFVHkgQxqDoaSrdDe4A4mv1dFBYVuFJX6sJDqDZxAZ25bbMuPxqjUz42PEpzAqzBXSPCfBWdQndwMqewk",
  "key3": "5LcWj9v4VXCQVbAatf2uS6PfW4FbnbqJMv9vXB7GYVQFZTzePUd6NYGJs4fqf6Q57GybEMQkTJKGqmVJJjJHnKnH",
  "key4": "61tjpSaVwk1bMZ7PyG43g85pCpo9reVSgHSme2kgN252KoZzK2Tuocnpk5myiQWjL1MSSkjgXwSNujvymEL2UuBc",
  "key5": "orfraGxkxkbCD1AYeTpiS3PDyT8idk7Q71Y5BM7rB7KS6dSDXLvUDjgZV9f6apqvmqV3rriVh9T5Z5MPF9oerAS",
  "key6": "5RnzBAqHugTQroNbjjfM2yCaHn2tFmZErzZSBjMdPbQezDoAr4wrKM9F45TpEUrUECXudqRgLkRf8cw866nhiHiN",
  "key7": "5kUZ7yqp39unudWzGXPcqN8JdXkGBTg2rWumJijDCA8YVbvYiZPPJH2DUks18jSFqnxTyBpMs8puHM6ZcEt8BhJs",
  "key8": "2XyfzCha4R7LMw7xEGwQgvzBSnYku3XCkXDSJurNYRErqi1NQsbB4TWUbWqkBnN5cAcgfUKfV7tbd2UCRACG3QJm",
  "key9": "3qHeUyuQc2tXMr4SQeUeJ7yKFMTovRirtv5WqChpRZUnjzcZxKsEnMkk8AmoTGcgBYhnPgyePMw9oEuqGkWXpe7Y",
  "key10": "2z5JU1hdAD3v6kBGzFxgcFxCa7RJ2cpEptkLHAmEUgQc2J1hyTdU43Q3Pc9RRSwkeDQhufC2Wdi6ZTEm5ttqudje",
  "key11": "58qCtxxa52Xk1TSiPvjbnSFqoTphH9gKLBNoHsbzt9C3tSivHaGw4afkZNzAUjWibAcApaeiKaGdccywMUMDEobv",
  "key12": "2FPeE5mQsqZ8Zu1jWfQ7JpCHyVowvkRUUYdftdWMzyuXyFRHH6HvwqiNiCDjj7qfRNAhYdxLhPdmzKUNEvzPg5pp",
  "key13": "Ea6DpzUrBLQfdsMv3bv9KMSX2VJj31UCqHteWLqVzrzgVDfN2Y5x11ohjFRJ98FUGgEb6r8kuQRFAQd4FuBkfkf",
  "key14": "3DbB61R1mJ1U1xZT2nuPuLENjkuPgcE9pDf3hQ2QTCVm2QhJssm4KtNSpsxCpmUqKcvt6vLPppBTvMPPGKQQSb9B",
  "key15": "3PS3ZZBAR1PXfT6kN6hhvY1ZcK75QQj42VG8KrHJZLqfLHfoWLfFAJorWjqNEu12f1zr5gAYURJZhtKRvtHTYJhS",
  "key16": "5uTdUfwtqWyGMQksw5ZUP55mgGdTG8CVhhT7m8WrZU29oK17WCAd84uB2YMSJNGrMx92sBRoFfTd1iMpCQmwNvpM",
  "key17": "2Paou3T6f8psnKDo32ARVV6UxZtLPuMCrfzUnsPgPRMzzGg1x11ADSKf6j7dHsrqwz2Fps8q6uc9w2KyHjdH4SE2",
  "key18": "3dPpmWn6vhePSvUFvADunoqWm9GcaKipQjjtnPsJARMEc4zRkhddjuNXjv4Zhujp6dod1jGo7qi5erLKwiMpihQk",
  "key19": "3WunvZvFAp5zUsWurmyKYE1NAY7NKWCh69sSNXHuJhxotMF8WKYXupoXohzPAzmCxRV5JCSQhhHTsjCuH6jXmPty",
  "key20": "Soe18nEBz5eXWQSSt738xHHo2SsDB6jBkHt1HtE7EYkfqA9nkih28sr4YKU1MPdGi4vgr8qDCoDjpxZZbKp7jKw",
  "key21": "2cRKKVoknEnKFyLHkoHKo2MwVUuDyZFBfm1j8SnwNCk5aCdmN2vY6o33PHeycyZZ6L5L1NNYXgqDx6pKdaEVLho4",
  "key22": "3ddi8bDypkpW9AnFnwNfKNpcP73XRd6zAeE9rkzzSriyTCirk2UNYdER2LNEZGPdgqteLEebvqC4FPSGvT74tgx4",
  "key23": "VgYttzS59fz3sisGEgEssqb2124BpaMoaTKarAYJ7uWHmSucgG7pgZ4jsfWPewJxNZdXDCqunygLtrC4AMCwMX4",
  "key24": "5VCzDDxLWZnhLPTW2U7EitUatAkmePCArYLLq9TpKw1cZNQqLAfVz2ZKK6tcvf7uCJqYQzddAfjP9ZjbrHox7FdH",
  "key25": "3H6ta4s9zq1ACFym9qMXPohuA55KNTiK9a2dP4oNMSm8BdhcxpDqMGvWLQnQCZrqyRL5qsNsC4Lb4Ep9Bvap7AVS",
  "key26": "4ojuHsBBfWifrzuTnJjEgnpMSEUMpt5E8VkyvVUxy4p8XDASBozMWdh46mCue9gJLph2iyjPuskTj62uew6urwpP",
  "key27": "38LQ1Hw8jgieMd5x6dYHEkyEtQv1TxYSLDRrNdCqeeoKZB8TGjqPUHUm76oHMYFRityBix8fMNfmfjkg282sPgee",
  "key28": "4LAZXZr7tBDz2qt2oPsof16VYzrZ2f5HHzWzjDbQKHqMMX3Wk26AbT9UuxdJUdoMvubHrxDKVL5xSNGgw5v9yXfi",
  "key29": "2UAQk8MXqsKgRhCXa9x6izFvF4UhW4CsLsG65JkYRjXRimWZj9WvHNEztLWLM73KXDob5Frr4xWCHHdSawPFqNTP",
  "key30": "NZp1Wbd3iysADoG4qKpsGksuG5DhRDnjMNYAjVoR8v1yjT2YwvEeuoyHQY8uC53Zf8qp3Kp9YcphPxnaFGadikp",
  "key31": "41TfxWYF7PPyyesZZT2bFBzTfGLmGzq7Kp3vq2LtCA7TTZQeihirKA5U3mTcZN7YoKDBuEFpS3iVkGUaBDRxAFwJ",
  "key32": "3WadSbB1f7UQooNajF3ynMQUXe98wHAM5bV6qMKzwbf1cD7GgHEe5RTHDPJfA8k993QoSd6DGXwDdtKHNCxmeiRa",
  "key33": "3LgBRuAqH1MHoa3ckwtAEKZc3s17yXJbBWrHhdABZnSMK1dMtDtQsnkbyaKfobMaNe3nyc2jy8ukW8uX8pw2th9g",
  "key34": "uddsSgMzJfpijojPu9LyrFFkPnCAKhY5zYfP9tHF1byebShdgHqCi6xHBSMRNohXMvDz8pAoFfuy2QdbxaxcCen",
  "key35": "3N4uJ75Cqo4x3fLWHSmb11ZpeWZDZGvtPGRRXSd4oBgwUK2mF6NbunN3aEAmdqPc1brPPdudTcPdrGdxE16oPeuU",
  "key36": "i3Bw7nQQLMWcjQQUePGe7a7CH1beaTeK4XdAn2XHDeRcNtrf2nb9evCbCoxQPLCZnfPaSCay6HzeNYHZeKYACLB",
  "key37": "53dLCi8Q5N9pbJRdMDx18LrRrtktHRBx2f7VLiRWqy4eNWBB6kFWro9TeKYiG9f3YpsXwJG2v48Z3jMHDWjYQYFu",
  "key38": "snPHa71WAFqXnatNHfLKATrST6dRiZfQmqJugqW2Q77rLU5N2BNKLKEmPqiiQ4kAsefQWaK51CBofagvdo2Bmcz",
  "key39": "B3nXaZyms3EYvrW7rhiBgxC5oLX8yCsdnpzkgGsBVEnNViZoQ2FMkNGBWpoD68nTrVFeKn2T2fBLAEYmq8CgiqY"
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
