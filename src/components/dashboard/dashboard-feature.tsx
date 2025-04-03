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
    "2AHGhPqqxAppDKckSTaFHq33iaAkLfq7wnuR5MmBY4TaFKo7uehJMSTEgBfmvnAaNpaRkLVX6MheXyJraC8Uw1Q2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZSn8auTyGKUDVGMJhMz4LwEoQ6ksSSNxop7sE1pYcK44bPJJwj75P6eUCSwSj4c63BTSxvfbVdY2hw76pgZeNLK",
  "key1": "3NyEoMUivt6AEdmShU36h6ybe1FEsRYiC575qGcPJ8yy4k5HrnjFNMSsKP7FdZhEMYK22kAtm5vRNWV6eifDDxu2",
  "key2": "5xXv2voK4rwc3AVzouecQ8unXQB8urrk3CcT8xdBuiuXfk1bdQ9fHqeJju3pEj7xfiW2qCmMxARth9eMz2RUtFDE",
  "key3": "y2AVcxu3CC15g7bAZ4PRvncPtgWM4W8dj59LkaTrdYfhNDBqohBiojPuKK1MY3H39SVvtvLS5cg9gPGjf24yYxb",
  "key4": "5yDV4RzGYp5nykUK5oD6YU6kH3mtVsgAcAjUYgszHsyYrbchxycGhRBxGfcbwNzZYNSRKGWqzcVqXqb6HRQZ5z62",
  "key5": "5kLK6uX3xGhYeWZ4jpFb5sb7syCu5qX3ogwHfG9yLaqLaU8gL22ZtSVUPZqHcbnqLMk1V9EHdp3GWvRZvDzr6ekk",
  "key6": "2xqfk7JmQKgMCjckdHSQC4MsdjbLSySxUQssprzDNopk8uPuRBbo84kSj1vXygTpnjGM9VwnDxsLimqrpzC661nV",
  "key7": "4NScCk8Bou3JrKTPeqFFH1zAp72RJFBFtCJJWDaQBaaxQ3GmiPWtvAQxLstDLQdWdr697zxAiq84oCtXfJq1sD69",
  "key8": "62Rxk72EkdzQbGNhdW74xJkA8rgG8iR2SXa2fuhiXz7e21hLnWrM3pJKbDYYdeJBnYAzdGesBXnjTYjd7T4YuzN4",
  "key9": "63NQRM7t24J1arFVDFb5a7rd6WMCARDhcuJg77RN45dr7mXn9Ckpds41K8PBUNUKYuux1fcZ6ZdpbU12Z4JmVDkZ",
  "key10": "kUkTX81dKfkaapgsK3z83fgA9rdwmgN6MzKtzGwho7gk3EokXfdvsUXvk2NJs2SDtzqoHZoCBoaKCcH7imuNSyn",
  "key11": "41VG1utYeasGtCBMcsE4CGZe825Bm3dntKDmNx7TygoqvUB9U552GkJEK3zLApdzLZji1F4VHf5CVsMCfcyCgQM9",
  "key12": "uFEUyhwXyQN57ZnPF1emFBUkQytjmjvxo3xCRSZGhKQWZ9GGUpNfUN58HhZ1vDW5K6njqWTrZxu7DWHxFhjUKgV",
  "key13": "3vs7CjsTq1GL7C2aZKv7nbkEHkoP1LrGbqexy6z2sWJJLNdadY3YcRE7EmksXqmDaCNvMJTuTKQrkWPQ8UCiANUy",
  "key14": "J6emQ7UzDbCANwwzh5wUQsC3nkBNYTjfTYHFLdGrhQ8VraiEBXpLoMznaRsTkoWP8akiSW5C9M9PTdz3VPhpGqN",
  "key15": "yGefsQSRhDWgUjnGKtYAvzRGNzoVbqihcroHDewwubLCLy9LC6WCe9vYGHhQXd6ZSV8e1ziM4v8qBhDCVaqoFCj",
  "key16": "2pTUeirrNFukamPUbaQ6NFwRD64ZkrF6vWxLx4zJNCQABJd9jUZ9gYyeL65ZXYrQWf86sibYXjR8rKGU5j1pa8h1",
  "key17": "2izHzQDgVwssK6YgFse51dHcHeinaPj3sv5PdpNYA4UTZeZqgncos18zWQst9uSGtdX3UDCj82UY1AX1zuuNbrnx",
  "key18": "2SVSuZf296aev1KYhdZzDTutPLVJn5nEQaweo185YGf4tt2Aru4Rwkcaz2vwnFBSeHXfx5ykPwQmJycMWrarg8Ts",
  "key19": "TEqvLiVhy3L8gnEezvhbHkGc524moZ22QxosaiY4h9os2WZrfE8Q4Z6jnvLnnzuQk4z3NpzcwrViF9eK894Rf9e",
  "key20": "5nAQSG5HrxbK5rNKjqr5KS85zhdEgm9sxnDnL1vWANmtQ1fhiiJbCbWobmJqXAbVRb9c7wDUHQpxquA8N6RMVKUY",
  "key21": "4jiff3AZ7xVxPCeAwG6opKgLE9BqLT3q6kaeUp26m6q8BtUmicitbZoKxp6V2J1Lu8k6hCdecAuQc8oBJmiWqjbD",
  "key22": "4GGH73P5RRQDRQZ32PtiLakw2zQbbBaHetGdLD44fuonjZfC1oxVRerL52Jb1dY8nR2oWBKbBK24Uv3L6f6v8fu6",
  "key23": "3mkjCEWxqU7MX16QMzJa8oS4qzJAjpFCdigujH95aisNCQsPD3gDahgmyCsZvtNBLuhhu31d1WdYuUpSpYSWz3nw",
  "key24": "63emS596osqEUEfxuBbH4bmvMbNchFvQPdtoCnafrcHANuCULrvwmv83BAkQtLtuGv5quYvzotygbwiYGVRquSQE",
  "key25": "2cV57MfUPGpS9fxYZhzCNc1AkbdDGnuFrUZvjE8XocM5kK33zBtNEA67MGPvH9symgnDyLSVQthhg52hiGa7ivDU",
  "key26": "48yFT1THezUjbEk2gzHXXYnjrKqpdsTKBdsUjsvTNp24MH4qhqcFhUaFfQgBgVb88Ybb9rTfAHoe1giFBdwPMUvk",
  "key27": "4Kgw8TF6y1RZH7G9vP3tpV3WaUoHRZhb5B6QLHSwicoxqgUECH5fM9USMWzLTUemnGK6rE3sLuF1yf15YEmhPShN",
  "key28": "hNAefTjjTMtw8yjn5iezZX3Ln3jqTHnMf57sX4YybimaMGGRFCsRTBrTQgMufSNnZvAVzoD7wG7vzLo1epvrNBP",
  "key29": "59LS8jbsJoLkdHqNTHLQdzG566SLW6qJdtxZnZTKZ4LyGHEtvRph2K4gaYGii7znXRFK3TXntgsNxY5khgW3SJ6K",
  "key30": "2tqATTBirb4Hjr8Z7L6sLX6CSRtBs4DKWABdGrf6EBYAioDvEfL41rE5t6bpcu1ZnSvkokVw6fKtvHL6Yk3PfXAz",
  "key31": "3rhVtDHncnBiCGuCGYJAUSBLu2X4vg8bkLw7U9vRDgRZE47uK9EYFMcS1V1VnqY1uXRpAEJ4cFcfSLKSu19thWxr",
  "key32": "n3ehn8aMmoWUHpSFpzA2xb63w2n8e1XcNrhZyAFnwq6NbNaUr6WWN1E7r2KBtdsATnrLe21CuAqtJ4ZJRprUBPN",
  "key33": "5NpnB6aRWo7C875xP7bZRt88iytgfa6nPZCodAYtDHZTbkxB4Wb8HwuiVn9QBCnEAsT6mxjKM4ckvVUMzzKFNL2t",
  "key34": "2iNGfETxiQrdtjktD24s3HbjwMcpDH8Q3sXHDTWWDYXLkvbCovJG41nyUw5LKQg2dwbZEgWAFgaDk69Sb1CwrZDn",
  "key35": "3ZHHxoqo73RBbLAVbotYaqCb3M3qw5JBrsR3cvjPb8vuyz9inAuVS21HSsZ6JLFBJ2t3Hcecef77pWRedrmxftcx",
  "key36": "63NNLzwqjvEhkXdYtza7HWJuYy2kEgHzU7rVD7SbQGDiyw7NPjRiT8DeNYA85oznGuhhBJa3kg6BSkNKqwX1D3sx",
  "key37": "22M3RUn9KWbQa3vhhVp4LLJ5QwgrtNJw1bvfweo5rA4nnQfm1nFsb42fsjVeuK3A5sCwgDV8oPXkpAu2sma881kJ",
  "key38": "5sJyqRSrYKs4p1f8QQ4bzQCJPFJCZcC8qd7gRfdcd7wQjU9CBFzPM4z7VqDX4mH1wbjEy5jehQVrcJjz4m9Vx3Wp",
  "key39": "4F1T6qaCVz3BMUm8djDMRgbYjq5iCskS4AEi2RXkq8hcFoAqVuc7xpwmcwB4HQzLCqRtYx1ABLmrrduuLirChAwF",
  "key40": "4z7w1bC6qMrFyEhDkfADB4B1VULa7r2AU54TKtEawusB3CrE6LezgoYRQvkhG4hRepNZmStppYgaGo5yoLeGjhu9"
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
