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
    "3P1M5PB5Mk3uQ6UgWmZWAqzHYZNou2D5ii4C3Ss55v1UcafRk4fz5ynGp5Wcgm89W9v5KMxoxcLgNYGBfQoeiKjf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q4Ygy4b83U3TPmAp6GX6DXGHsVGzrMfA8DhvCcVUhQfSm9FkyYA7kNeUTyScv2moWBTgyTNHCc7bU8MQbuVULv4",
  "key1": "5UGXdqmp2ZokrhmSj7icpR5Bx8QBrRxd7LFCoQx5FycuzKtM3Rfkx65ua2UJV9ZQJ8FLuY5yTVbYV4tpKAT87X6e",
  "key2": "3PaPu7CQsCvyKC1S9mejex7mzUsbcQqkTmnXsbvXbVPmgESX2xrSDASfcjEsc9BrNoyqxRW8rd1Ut31abDMvRLj7",
  "key3": "27Aar9va86TW8tzTxgayfAseMaZ21Pu5rKGfBXbjAqMH8w7i9T4wEVrb4p2zmkVY6ojzbGkPRKi4GcEbFwBZ4kZy",
  "key4": "5Vwf6QCD5WLX7zAGxNFhDuw2tQ6pu2pu1fXuSKmFEvZyKGTUj2Q2XANf4ovUikKhFhytNEoAm9kDvenEHdTXoAvM",
  "key5": "fgJAdPQ2fb5ENX8Syev4wf69guxTH2dijTZ8f8a32DrszHEYBtqgaMmSKtN5xPkefRvU2SRpLRxyoeaDwwSa7xh",
  "key6": "tDF8BCNcM8vZMBQDj2rMHUcbhBd4Qka9YLAYV8ZXVGgoAcuvRy2hvv26XeG8M4Nudai9wJD68advhNPXk18m3Pc",
  "key7": "H7oPtpfuhiMP2ieM9YqoQfu49FCxm7JGMLyer1B8yvp7mfWxFvmJx3d3icVRZt4RqHVaBQWfaPGZ3HRXfxn36ea",
  "key8": "29MityQv63m4CxzcXsR1vj39T58kJnZ2op113YgxgjQCRiJnt3F12Yt6JWa9zEwkhThbdqf9c1NLmZSPyeUJAMsS",
  "key9": "pzQSjGTqa7DrkcTvLxJ6s1cGaoPdtELRrjETonmQJMHtuosda6Csm1CAhm3CwyPrFbnhZALxjj2BGQE3LjUJX2E",
  "key10": "DpJSvVwjEAKcLbcC4WXz21YY1VqidvrKwD2fgZJchKnDnDbmmrywFg3GyBjDpmMWnr7EJyANyTCWLQp2xyd8bYN",
  "key11": "2YQEDyZUXg2MLiHkp3n4U16kdwBqNE4Mi6NSTHvL1p23SSEmJwLvPwWZwnokSYdccexdigEaYMFSH6Yycdg8WW1p",
  "key12": "493ktjEK3HyQnR2hGaUrRbAbpRdMzWrK2oHaBZLQ65NvsYR8kpCFoheGi1nbPtPRfMcitqhmTKBPrUDpM7AYi2eE",
  "key13": "4tyC8n8GcaL8EoggFcP6K8P57FjfBCEAsgcH1m6Ky685YHWbCtAVXRBB3v7Q383sRMDrjUvy93amiEiayhfe8YYB",
  "key14": "tExWixS99F1j5oXgZEUsBv54WawHXZedTtbAMoGLTKQ5Z1ARRU6T6itDJUMVA6ekb5pHf1PNUJF5tq55tzDrLYC",
  "key15": "2EdqA6QrqeLcMdsrx6rQHMXLYz8nSfdgLUqxvRnnSf4tdtD1zaNhjuS8wqZDZoykihZjnXq8i3PjokVc3eeL7JUA",
  "key16": "L98h2CyMgrMMvq8bfZTVF8Pa6WDbzqwbMARVSBmUJAaf7RxqDwdz16JNmz3UZQukKKbjTMGd51SGrDaR6aJe9xz",
  "key17": "3rqwpxhbwYnoL3b8fhxSVo6VAJLXpcrJUur6RtZicebjBiQn574MPtE6XXUhGbwAP7QDxjoUC5zAsCjKXjSwhoMr",
  "key18": "5SXEdXcpPyAU61XPQHEoiYLLqzptgzjnx1tGQ4yrvdFkykEbFKQ4GXXtJDu4zAcA4sQWNN6MC5ixgUWUf3BfptqM",
  "key19": "2tzRNXwkmQxtN546Ay3wAs5kKRo5Wg9y4keoqTCv7MuQmeTSvMRZGcj38YmVJ7NGSnfW2Hrw1UrCxgSqj3kkPGpA",
  "key20": "4uN9gM9P1KiUo24Ft4dWy5jpqTq5cS6NGEMPztzxZW26DgQRwBUxDonK3NTSb6hXPHgBcTpMaa3uzvDDDreVFLtC",
  "key21": "GoUeepBuq5wDQzDK4Z92Fqw1ACDQUMhwtUSoYuntHZz2XzgaNqDHjjCUzfv8N4dpaqBXBGx4hcJM9s6fT8r5KeQ",
  "key22": "4DfDQPhvktfAwTEcLmyR2os1KdBkeoGep2V45ZcwpRrmpeCnjYrCzjMWApWe1BibXjzu5UQzxxPyfRoFdDxLUq66",
  "key23": "2DooyF67zqmz2GPDtBT3w7ZSTWdUaWyKxmDzoteGQhJSRi38wtFDcUXYWrdphCdVKYpXxRFvLRfsnkxGj1WqBzzK",
  "key24": "cMBjS8EMVPSsVjmevP63Y2yz7oV2Ts5RnGaHqqSGEmZBmKprVrgXz2DvoFuiedKHtSu4kQi3kLyymuM1qahRysr",
  "key25": "2V31k6PczArNDWob7SijXfBqDKyVp7dFbVdZDdXEmkLwauyL5WQEW6jBTjEysx7635iBxA8DYYgKxGJLe5ZKmmoo",
  "key26": "66zVccXhaXjBJ53AJ6nTydHgEnfgwuuq5UZjXrksySuoZUehhCahzFM2oChtn63Uq4MxSJSjxMwYBKBDvWdwFWbv",
  "key27": "38XY9j5NTwEoADBbwZbX2uxMFqyD8m5QgR6vn9ta2zNpt7LkP2vdMDwCa9chw8FN2UNNKJ36MSGMmqANek6ciUTt",
  "key28": "hgL87kC6n9CTrz8iNh6amhTtjSNxVQPpXLJbgozkrrqRcyBJc7tgcJmu243m6UQ5NFuUXd3gyTzNXtZbqfK588r",
  "key29": "48vPej5XhoPfkV7JF8GH58rMBbiQ6zCtSAy7aWd32bn26XQh7RorH487hZUGR8KRvxohmmGx7wmoLHVo1DYPQKxa",
  "key30": "GMJF9YGu7yM48vX8Rs8xCNuY4wQxoWhdr6mruBGdXswqY44Z2igaSdFv1jBk5f9qzwtWmD6bsJRUJ7fBsuXonUm",
  "key31": "2Wr6bPBQhM4EDKTc6LW53654k48pPcn1tkPWypgQFr8G8iM7TFLCtfjREDb2UxFjf72Z26RGQKvko2oefZ52EePX",
  "key32": "3BjVos83vApncbGqpkPijjw1ne7RsLoZ4xGR1ibN9d2AA5sywJWZmQz4PB6a6bT5zqinNUZ4VQL6JUXk6VbayiPx",
  "key33": "2uFrHE9VJhCwxgp6GtSoQbBpfW3T64qUNnKmouvSLTFcE2i6d5oNWmZ2RnxAHBkBDiWdYmGmSGZpYHCrFjFYhsqG",
  "key34": "3NDnS81urhXKaPVY2Y2CtUmfypGSBoLpUNhb5EHcrhrHvgBHGa4mzw6THRVzNfMauhwtMcxpjMKy2juWjjbq1ULT",
  "key35": "4t2rqauDiEFxuKrtwGvFqpkUQEcN62raLHmicPruuBGqWLgVRAcKSa2AF88LPv34Efn9khuDZC3VnJDtnJMNRKuf",
  "key36": "iBftM5o5rXVQVeA7r4LjTCDdS8woz2oEpqxfSopm5udbqnfRKxvLhWTxYpqPiWudUJH5vtCERYbKTn3c7LJymeQ",
  "key37": "2i23CQoiJ93Hez3hfozEZq5bP6MFjHyxJSef7LDtsARRSHmX9mS88YnrXdjNkBqXMSEqiWZTKPDBFd7YPPJsPDiE",
  "key38": "y6USHpvhkt14AYvmviXJExyNUyxKgMJxdLZpPQqebh4cM62mBbgHLxHBy4XmXGBdP1HzYFZNQThC47vR9AaQDDB",
  "key39": "GvtPaMvVvTm5EPf63o1vn45h6t7hWBufGLhEAw65ri8DZpPAkLRuPYxTiEGr4HybzyrRMqiks6tPayiFCcA6NYW",
  "key40": "46bEq3CPCLaHRv9y3zAQMG4UhkzAxudZLymC9SNvttUWRRtzBNFbdE6FzDKeW5YvSQZXwi2DZbCGFozskCN1baLX",
  "key41": "5GeFt6yBhiUoVNLFEfUsEbiaiMQr5rWX4xXAw7XJioQ1PGoPqBQmMJ81kwJpjzBguCV69LHhXYiosWTTTko46qxa",
  "key42": "wh3Lw2VQaGDPJ6zokKapzEtEwLcUu2byH3MJKjzjJSwS4JxD2Cswqgz8X3dWGKspnwrZKGbftNG6CQNDkPDk51z"
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
