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
    "4XAbKQpkZmVAsw8dsaB1MzyaB3fTZ9iH49vfnf9cdJhKRXwgqLGGpKMcbrwKk8gnrwWbTJGqZJc5aWSd5WZCjqRX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rYKnuEHUrjhPYH2oWfZcQn5X6npRVe3VdLZZVA1H18KNYRxd48gNEjACqHWh4mtMrtuGhGZnFYkZ6oo9FXq4uK3",
  "key1": "2EMns2szhgNBtaE9M4ZSv1PyoaFy3x3jwteHPFHAZ8GLdPx6N6Jenthy7DUPkfTgv2C2MGrRJ2fLqFtwMAMM7wJT",
  "key2": "5DpDp1br1zufusXgebTz7E8aKezmWwjsBA2qNymuCF9suCTfdUSD4x4opk6bswtboBLQS2YrCvkYD8zYQoDKS2Qs",
  "key3": "4wZWavVYHg2fkrmVicKpstxzyLUwdeaR1MFyEk3uGa3L3GQkPQqaS7AG4q36Z7YknxYXTMeMzpeQCbALy7B5hnSt",
  "key4": "58D7wWtBUVfsnxzTyR5Pwq5dCME7jFBTxcbcaEBYGerHJa8RZG5chAdmcGqJP7hXhLTozijXkD8MMD35Sw4V6nns",
  "key5": "4sYPwm9L6yy7n7hqvDXfu8oZjoYnyMgr4JF2psEHSKqmi7ks9uU2ffv8ef8FZYKRY6S53x77tZdzw9i5nAggKjVh",
  "key6": "3hZZmyRmWx4zgK42wrBXY3Do64E3tP4cEwAFePLxthyGojRUFtDXyZEStiMFVGRVyuAmQiuLKa7FpUuhkKvehNqg",
  "key7": "T8G2DWmGrrRWRYhz7aAU3rw164U3P32JoHuShrfw6HSS5sd4eZjcyhPcV857KpR9wvsnmAFbANgVu36GQfLnX3S",
  "key8": "5Jk7arJacpv5nkdgZu3QyfVadoRcZZEhAej8PqKMHUrqSLsxpSUCoqD635HrrVxAc8NkewXDT3oNTMhMxkhKUxwg",
  "key9": "4xioTSt8QcHfYjEFyiAYTjrLxegDBXXAzeP4WuAL6piYekoXok9iGL2pexdeiMYLXQRTBobkM7LyJJ2onN5R3fzR",
  "key10": "2PxWA8XS55CCoDNg4Q2e7YNa9SibPudFkTFmnYTB6eGMuPJ7GxqJCqo9uvGgUqzAsr5SpvcZTQ5pD7qQvcakcQZ",
  "key11": "F1A9caQ8ZSryoyHL3ePVkEjJtY4pipfeuQpYKgEdkVxspfSQLyjt5C22sLremwRo37Bja9bZLFjqnJREKwxdb1f",
  "key12": "3MXj25P9pTDSm7bASFu7Xu2MAnHtqi5B5oeB6hd8Cf4phyWkwosWe1WoHR6qbUh58QyJFT2HPLiJdpdwz44f7op9",
  "key13": "4WSTSeuLAJ84frhpGifU7AkGch3rjKFmd9Gj78xho8bE1KJhcPT5gtrWDcZzX1THXy2Fq4hEN7d2ZbBH3rxo4RLK",
  "key14": "9GBerNHZ83nrn6kFbus3EgeA41rQhDPxLzfpJYP5cyqK6Cu1UkU8yz7XWr5Rg44oQRGMzisqwtsTTvrZRK8QnAy",
  "key15": "mpkq5R358mpnDCc32siAmfBoW8DSvTMxCP43DratKcjW2nZVGh7VrRMNdL7w5QsgpJ4m7gs5NWokXv9ZUNsnzcY",
  "key16": "3k6zEMZCfgjZDMDsmj8n4YRV6pcEBwumFUmGyUgegbdRsZFxXpkvmteM6dZtU8yexVT96FL2pNfKVCcgd72aWQ2G",
  "key17": "4PMQoi7iv2xsSDmZmz8MQk9KqzBhpDcsKAFJcLYgqwt54QbNf8vowrP8aHwezrxoSkrHuvpjqPbG4mRx9TQ5dYhR",
  "key18": "3hVhQdjx5635rUgHMh1iDNDVsAKNQpUbjT9HcXv4qkaxt29jVeMrFwBs4qtMF6TaSeXFPMLLqkzpQsWquRxT3kE1",
  "key19": "2rTGS3QP7dxv9FYA4yQUVwKyVhmDYnrAN5kZTvoX8CJp9eLMQqQwi6DLf4HBxY7D1qnzQEKsmPfwXq3syJge8zv9",
  "key20": "5imbnwFjAQ6BmVoZ4R9BGrXkLBJiV2mqPDNfkdQ33Jg4yJZ7P6jdpViGPRGHJwJgcsjRbS47eELEEStq7eFwaBDT",
  "key21": "4TYRqN9yF5oZuPhkdFS1pytMqdf5wr1VcrtKoNoyDXW2bQeEWDvuGLW5xz6jjegrBFybfawoBHfDUnSpg3ARFbm1",
  "key22": "4NcR3HAnMTMVscsbt729yG6w3dvubLcmu2ZfaXG4pXskEMXAFk1jkVrczWEw1k9m544pgyQtCQnZeJVTyPvQxpzr",
  "key23": "1gab88t2V7iA6i9W33dHmHgrFsfPtcRT5YWBpZqXs7fceL2Ka7tq1p1BeFNSNZXGEBy484m2yN6sh5Zi49BdraS",
  "key24": "3yz2kKuZR93jJ8c3hmKoQktMYprPUwAKW9HRuJ69DbEB2gWgfU1Pmw7DFX4AztdLMherqaM8XZG8RuyxX8qsvLWf",
  "key25": "NYdkGMB9ZhdeexgJ1FtgED4X2Pw8nvcZmCxrBMGR8L3hwiZnFRBF6BXZgXosjkbrA5Ux5kGFKLYXv5HyEeYWfSQ",
  "key26": "3BhsVMi3ovRU7nXNBay5Q9YnRpes8KBEyPF62AC5bcMqp2pESCXpSsLi46WQZX2t2NkvHw9tQzRHHmjn43yvTa3y",
  "key27": "5Gsm8cQW5cXvYqRuTZbVvYk6Tih2KJsF7hBemZpvFkRAaR8s28KYdR8xCH7nc1yPuptc79bppkHezxM89fSx2rGQ",
  "key28": "3rbeXtQLxqPEy7HNfovAXVLdQDPYQnNSFatyq3f5NEtFMMV1Vyi7yvmeirEqPQdzTUG4XSdfbnVYCvaPgTkdPg5u",
  "key29": "f9NBZXueT7aSdpRd5FYs6iUPGngqC2Jd2szy8iQKMhXB4CwV8NJuyhLTSbRaigGU8YSTq2uV8qGXVu4oj4TjsZJ",
  "key30": "4AYxuXZp6UNCFTroTMwuj8jGdrKbP6hzdLWAmRThjLrWamtFG7NPpn2NdscTrKVUwBLMkm7ZNL1emGbsMbH1qX2S",
  "key31": "661BAKfhUUkxAppnv33MLxLbBT1TWYt2L8NB4ShFppPJS7gxQqp1dqGLV4AhnvuaiJXvsoieM7zz7oaoT5t5yc6E",
  "key32": "2eFFHvxqoowqERBBorjgEqN7Y6inToT2gAtLiT6bBJB2fg656gHUG7HvUFyGzs6pu4r2u7a28L8BRhjjXJTg9TRW",
  "key33": "cwrGXhHg9mduLFf24DJw1qkyuusRvuFfhNbrGCuuVbxFgEpM5qPNLF5JBD8bBaWXH7mPzfgiCbPudAUhkbLm1e1",
  "key34": "2VZuoKY6tdyETxZoeKNLgfKsKXYkjpWTzxQ4hJYfZkw2UYm2ZorVrkWARAp8zsmWwH8Kbv6cYq9bUCQcaukHapbq",
  "key35": "67GW5kv2t9PaC84B9mkDkbB9U4ktKuBQ1N8X2Zm9zNXPkDN3SzdaN3sd6ZZkujzZQos9dP7zTEbtVdoj8DVUhZVG"
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
