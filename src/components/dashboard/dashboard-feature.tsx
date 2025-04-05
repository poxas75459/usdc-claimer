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
    "468jZEUch8S12mcodCpN7m8K14WoP6LWL2Fu6XAoxqrjmC4KYVhcxr8cHgH2rEdM3gaCQBUS1TyWmCj9Wfs3Jxy5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f5jFzMjFBevqgMT4CCfkida98yLZrxKL5fC66jHeHFUwtG55fXbapuAsYmKkn8eRhQyQoLmoinTbXmiRHvhrvSx",
  "key1": "5vGEhPjg66Djkq8seu229WPdoEMDCkL3ugFWQstgMfSVQKRk3NvotELeysPeRqBzrcEtMr3aCGJ3RpZBwntuWSNA",
  "key2": "4vXrHuwt7FxMSp3Mt76oWqzwuDW9eWprhpFdXTTJH94S9LGDzi6fT6jG6D1jpbp8yfzptTHh7sRd8whW9Egrc91S",
  "key3": "yyjfcSf33hBQotuczBfSHhriG81reJRXzpbVNb24HioWtfcQsv311Yx3KxEaBXRJ9GX99piGbRQ4AohWXcxjrhi",
  "key4": "4idxMKCEYCGtQmREDighNtzQJnYBHzvr1xh1LjPtGyQMyM6yF1WeuH8dPvnjhsusVVr98ZzcxTPs4g5hWPqLdykA",
  "key5": "2cJMb3wYgKRX7Q5wjAaXJqDcjhMVM1MUXLDN2K4ZZHVNemsQhDucbaStvN4pQh8rdyqyjuXm5qdsPUFTt1ctwhAY",
  "key6": "4iUYVQz6YhEeqyadionavkvbid18DDwg7icL3DayqhJg8xA45sLF6Jb2huGiRknZAFzUVgPPAzwe3LZ7F34xHgta",
  "key7": "5Na4KSdD8kaSdB36ewDc8tLBCAr8MeuQS9G9ZrUs19d3iKkwyV36f11j9akdwvFfueefGq1cokPrHer9kkVRxY8J",
  "key8": "DVSym37oWTk8uLYmXMyDaeAENpVReaDFaYuZ1GzswdtNZWMz7KeBs1CctGtFXyM5GGrenKrL78UQTtjXrXJZtjj",
  "key9": "2ccpLNzfhTM6RjNDFce63FzPCyrN47wC2DRch5U292QyR3Mmp5WumiJ12y1SbFR5fFPFgVpGU5HXbazh9DsjZ6yL",
  "key10": "4tUvGcYbKiPkFeJ7qJmnJE2er91ejrtui1y15YqfTD4PJotPRxd2fSC7rHH4JSBaJ5uWBuVhpFVHWhfbMG2u9gfT",
  "key11": "2JVFT2rwkzqDwrYAyCVxA1T21RuAy3pGrKEYm6XfpTw7xGznf1wkqKaVTNxTT8UyZQGoW7y5H2KefDsgvgwhcTwS",
  "key12": "RfZhHyKnwbEJ1R9eB5t9KFBUc3ymBy9stnpq1VQrCthk37bf8HA6TktaNdCXe9CgAtkHrJfVBCuaLekRuPKAChT",
  "key13": "3CH1RemAvdYyhgk8ut1uZzeNxudYvnZMw8rp8GtFkxTsZgqQWvAtMMnBV9fedujGRCQBdYmhV76iTtVKqNaTyWWf",
  "key14": "5tcoRJvr7ezMiW56afcw4aJfRAjt8BcnT1uAzMMKiTS7AiNVuWfupJ85FVX3u1RRvqqKF86htj8Ys7nZSBphqiRv",
  "key15": "3csZf16fQocz5cvrWw1z9xw6LzGi34fEtNQoZpSdENoCKsMvLrFZdPtaez4ix3TE4VBPidTFfyepaDCZNimzA3dv",
  "key16": "47CGijo1wKDV3gKfz62i5td5my8VtZw4BwhLo1vYtBiQakdop5KzCbjtaEu8DFZcheBmBR2jtjYUEwAbCGwxzNyY",
  "key17": "HG1NQVBu5ERn2KJ1dXX2TvNKyB7D7ewjYiv2UdPjai1oqnTuHQ3GqagAgPGim55nz9PGeSoFGW4LyjubBU18BJ2",
  "key18": "5EzYRTL4ntZcwgjUJtVvAbrxByTz5P3E6x6kR9ZrthaKKxRZYHruhr3Qkxv8f934ZxENYFRAyTi9GCRmpDJGHDTf",
  "key19": "5hRWecTkmJVGxjK3R6HFPw1paC843yZFVerNmmoLTcXzd1DAG4eHk3dKJYAESW49rzCnTbqAxdnzmK5hEqJFZtwD",
  "key20": "5CpALhmzzJxAR1FMYxP1VHzsgLef4yhXcH6kW1LCX2QQjzqk7VN3kSkUjT38i2fbsarGCN4iXbpKyhrLrS1fTT6j",
  "key21": "2GfQtFiX9XRrhT7wBRHF79jxYxEDqs2tnq1jjXma76bnsANpBdt3zJU5qRMj5PC5ozJtZDnKdPdQ7MLQRVpNZEKQ",
  "key22": "3xndAR6tQ5SEaka2U5dBxxj66p25XAM5NmRcg8iw5qDZmeUZYDWupen1n9JmFU56BFPUat6yeRDREUy6ap5CXPwX",
  "key23": "5BkXiW5a8fTR1vScA7VAYuTmYDfupiQ81qhXVXDXUDWXiRCxbYBnEuNNGFXe82xHMftv92MsSJYH75SG6eQLbiCY",
  "key24": "PaG6QRB9kNRk6VbV4hJy6o8Txto6MhSTehqhmLPp2qaKsB2eVdfXvHc151pq6iCGrBF6uPdvJVZjBswBD8jipD4",
  "key25": "3rndTCJDbg2hQBgQZcChPvz5Sy6P1oRq2de8CihKmCuJZdgn9X2FJtnmUgFaYP8bBU4NALhS9gTpRQrvwAyimc5R",
  "key26": "2QMAPAVUGtvzRPoPGrwCNa9VCsWQeJ8crnihF8EXur9tAYJjEfKx6qMH8fYjVD2vPeQuvWxVkBbEaB4ndGn4vGoA"
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
