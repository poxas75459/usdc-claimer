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
    "39x8ZGpzJAVSN5tmjhzrjuQA4i2WQhzZUTEqARAJZ8PtnyJvLgedoq9f1f4ebpErfqkxL6N4ybGTjJSPeDf2THj8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QhUEDdAhEg6B7oarEn9Gt4KmTqQdykjnX4mke1XwpZXatqW3qEQyj23MLa1vzrEMYbCiEP4BhJoxQLG3XFetRo8",
  "key1": "4mZ3B8KCVfyAW9z2W2Le2fmJ3iuKziutpTqcLLNs5RSJymsCxuzn1vue1LG5SW7eiJ6JPvtS2yXsWgvBVW7p7Xf3",
  "key2": "QE1SKSF6VVaz1M731h2aeqtPSFqEk2KNFUFGbz4yTSfCzExMLsf3ECHeYiaCrKXd8BZAErwomiWiu4DXD8aNwtt",
  "key3": "2rmY7J2fVMFMynf692nGQpU25Znmq8D4Mu6G3ETmuvQASQsTwf38WeCYvJoBvXK27wL2r5FyEVE49JW3wm6ueYEJ",
  "key4": "5xoLUWZnCYTRA4WCEwgH27Tksf7FMr9RSngDneKP3UFaRZggoAqyQbj5koavhe8WXSUQycj9SUCh6LR485uiq3hE",
  "key5": "3hbo4MHBUt1xhugYbxDmaZM7ifRTWdbe2UdSmdg5Q1EVMjqHNjC9QNGi2d8UPmZwRrhr9TMg3VAxfBg15g36m5Vc",
  "key6": "ba3tZsmXeRkdQrjw9o85TyWuiYCEHFkkr6rsnpMy3W7GiBy7rER14bA8fCext79oQjme1qRMAuusBZoGGtRixfV",
  "key7": "N86DmwRFPtgjHRjqpXEnGJ7Vc8hPW226XKmwkwDi18mctBagGUMLd2EjfbMQCCcJCcrBiVBRKrGEa7aTLPNWCQX",
  "key8": "jetStB6PZcnaXsEKHf7pmghwf3pZuwyZVQpgrNT4xkmtxuVd5XXdH2SpUYovmggrzqnQQD342sYjtVehkSaRZFs",
  "key9": "3FrrfVqBsaWc2xRz5sHtaqApiMhXpXcyJtJLqFbkyv27bqeEgzN458y9AUZYwTV4SjrtGavXQXV2MMADBjekE6DP",
  "key10": "5KQf2nEQWYGEyXXmMQSvrJoeBFEjHhc76vvUUofDfmXzf85sX1NxQ2Z5PAmB67PJrnk9B1QFJMig1U1X5x8N7xuk",
  "key11": "38LAfcHV4Vx1ZaM9ZChd7oFReVHrtGTD7awHFXyWB6vunpMe8YihdKkhVpMSa4P1Us5V3s5FTzoLgu3ePqFgTiBW",
  "key12": "YiRZWyezzj2rbe8VR5pFxEpFsS5J9jP3JZsJeiiRDjZ4Jeg5ofcyiXdVVE7oFymQ4scevbuZe71TeFGGwJoQeWT",
  "key13": "44GSc4FBkM7gx5BmngKvyQv41azQTeLkhaXNVZTtgS2bp8eTHjoRb2pqnDPfu15MsUuHk2bsKunt7jir6Ug1Pxa5",
  "key14": "4q1ynNcd4b9mSmtzQhPT3sgsBxpzCSHLo45itrq4nPTAvMGY6nSF96AKxgoUvfi8714y4GaVThoBSHs6zKqnGSZv",
  "key15": "3drPXn1XUEE5N1vuKeLyM8QMWvzcxLL85bKBjsuM6DcvBUJTLwUCHxTne4nKrtprqXcCZsLnZHhLpbkK37SVTaJ9",
  "key16": "VkyVwYeNgNnt834CufehNE7xh3VYJiMPAB3oB3QXzVoufzPMKCqEDJF2LJ5rXZbEEvyFJnktWnKbpS6Pq7GFGLw",
  "key17": "3uB5vjq39uw4EQGyuifCN6BD89mwrjkG5fDKqDN5hd82AuuZUpg52YXCBwJYwGTU39u6RPrYpTH1zt4WJd4eiKQU",
  "key18": "2gSzShFsXVGApWBr4DCN7hnuomeazLMuKcmw9NoScat26kaneotgzBFjqhtkeHEURT3mjtDh5bamfbTs8QwbqzqR",
  "key19": "2HFBTjC9FwTt4aW8PFhrABD9aX9FUiSLqDXDSPfDJUQDUL2dbh8JZi3uvqCsUCw7zzbp2xiM3k1aLADQDaZZ8TKU",
  "key20": "3n4AopFr6MWo4kfgcAEaoFyXxaK8Y5EkjEqbPNBRxcdVBTvp3pA132Qs4bXyk8G1ni49qUXSgKnxbG6YQCprhV4J",
  "key21": "SBrmt7C5PYVGqCJhLNwrhp8T8rWjE3y1gWpfmj15nA4KHpukjj3NDh6SUgpeUTncdTRSQJnUtPbKSqfMWEWy14X",
  "key22": "WqXbMDayRn8WFBWbUgyM7QF4UwrftQNMck1nESA4GY85pPyy6YoEfY5CA6fTH9qasMJ4qasTr6G6WSfzDAmK6dd",
  "key23": "5f5QFQx9KG485THtJ8ESen6LyxqcGnDTKLi6ruFS8mX8nSKKqs99WkBNf6Xyr8na3ZvhnixoK9xWqmJhwAWuBFUG",
  "key24": "3q7iMqXdmmFi4GE5gPfJCNDS5upfKK9g3yxQFyYNUi7zYJ62nGXdE4yoquALb1rpx44GuBr1CajWC4xnpyJ2rSLL",
  "key25": "4fjBGab7BJUcSuL2mKj52cd94gyjo6UufSrukoGzLBiEZpgpE7jFQbjjMyz45xnZtcSfKZA33RKfjjBG58ajdvBi",
  "key26": "q6KfbjHujYbd1EGaRWEkk77vV94qUB7dCkmsQeB7WmrgjhiSSE16ZR6zdycQcDxBcCRxMfGbgx29xGdB8ooBqRX",
  "key27": "3J4428AtMrqhATvFSX8DoPqcVA8ZeyRiJdrKbf7oG5FVExJuBsS7p9tscUUP9sVcgMkHhXBc7DoxdRR36YF29SWt",
  "key28": "2zw8FeLMAUrpQjDS4yPrML4gJ77qJ649wxhQ5cYmDxyJP9dMQL6M5rzq38XmMQjiMEkVzpErckq1WNxArvRM4FKn",
  "key29": "4TpUPtxZCmEuJJ3JN4cB5YLHMmcppdwWYarXjaC1mDMkG2Yq2RGBHkRkza8BPEFDF8XAxAqacwvxKqrYgUbgCpHX",
  "key30": "2UEsbFewVdTMpzJjfzomtWocXvc9ekzuMHSEdVZRSHKLqkuz3tQEeTyLvK74T1vWW1WU47fRaQai7QSb2p83w9tA"
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
