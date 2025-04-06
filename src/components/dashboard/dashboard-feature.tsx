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
    "4xbzuUxexMJcCEdYrUg1VfxquyW8HzhUxk7V31yWKiSmFLLSRPEXhkrRc9oiU7xh7TCmNthyZGTvN5tSvVjukUxH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bhGACQBCkW1n67itd12FsHrGJt6uZW9TeETDk3CYxi8ZZux2nE6m8e6UHC38fmXsjzL72DWMwUMnGWpYPLYJDcf",
  "key1": "4qpRTCfZjoyYVWKUp2j492VPm7gVXQnG112hcDUDMzgfkNYiZnNoBspRiB8HS5xCtPXz2MYkhRaKyJr5w6s97Yh5",
  "key2": "vbB8ztncnXEVukKQWzTQBHWLupBbkBfaWZGJZzWLdW3RdcLrSpP7CWJEDeSHqX6K83XdBG1mpkdjedvCRxcqQqD",
  "key3": "K9cQ2GybVKxyhg4DtBxDNu7z8WD4fMKwC5MT3eR7pFkDLcBj1WC7T8iZ98Srk5qiUYxSMa5HyfR8AYkCJrWGZnP",
  "key4": "2TDFaCajMHQKnGPAA3TLchcRUJpZcsCYJiU7fuzmkjzF1SZPQCKJS3fzWyWULe8pCP3wMLKB8MV8W5fnKNCytp72",
  "key5": "22xCZifEsmBznGC3xBbpQSz4uaqyWxDHKnqJ6PNJBP47CbxSvvCC12F8D6uvJz7y9ZQ4dCjsr3Ln8VJXocBoaXZt",
  "key6": "3g7FaFk636gfsWffuyoXXAxk6S9pipfDqvsyC6VnHJ1QovE3VdCFTv8Abyf9Zymv7tXdMkxv7aEW3jWMGrbTFEb7",
  "key7": "2zxobpXoBuzo6RbM7dmQnsyJQJABM4vd4JffUXjZgPUqUoXPPnyVe3k1FnmbfBmUduwBGZ4fybqr8DzxBZA8DQmn",
  "key8": "4ibQkXaDiocHvX9Cyi338vku7aUJGw7bNMH5hvWb9Tmjk8TzcUPxpUr3DLzEznSsY958hfQEWRynJesS6mnJFGX7",
  "key9": "KfgbV3R6FNC5bnwek927uC4cj4D7CFBfnQf6Xy89oz6enpDcQuwK8Mxif5bDunBnGeQ7fhYDgNMJGemVAd3GwWS",
  "key10": "5jepSu6nMaXMUexsbtzyP11wPbazxK66RSDibTDEUtGJLjWkVazqTHziFXAG9g1VBK9XXEKYd8goxBPgyuwTcET3",
  "key11": "44kqsLxrYAG8sUtrHiXqjEjMPnNpitxPo7WwLHWXiPgJ4rEQJrXqMLrrqtAHnmvtzKVurvEsdQUd7SYZTsDb7rNo",
  "key12": "3GFkuaRNXtv8UVZ5jUdLWxShDjjgEB12fMGArGomTsWMzRUPTzMJc4xHYjCmVteYxPsw7fMCpNC2SnwAXPGrJeqz",
  "key13": "3gs5Jd8DzEvsGZQM4rmmwathhU4n8BjJyjBzUmZhzySWLFXLaRNhC1nKmdSP9HJ4zemE9KT3EDeA5koMNFzhgXUk",
  "key14": "4snLp72cavY1H7oJ5jH24ZSB4R8oFAWXVq4WNMEwWiran9y7r9F66VWfpWZWwfgrApcuhJGQGfU7zbQDtWt3DsYu",
  "key15": "3eY71oRaiaC8uHVKXFPRAjDvfo2myytKcXUHcWuSDi67GtdosFTYj9BqjT7JDDwXaZDTZdCEXYzt7Ee2aRvjo3RB",
  "key16": "5wdHPmezTtPqKdBaWp6T1Y2wLfPg5UDAaHB5viZhPhsTTNoFiGEeYrZvZrNvQL1VhJeiGzFmwGdbFLDLoSbSoQU1",
  "key17": "3g2Ms2QvXMpJWn65BYjXwFVgATCCHRh1Hz8roia7ZwT3ZGdf9jRy4UrzNuezaoFAYCiUfb9NRjn5Zi9H7mXPMZhB",
  "key18": "G7rM2nbJW5okjwN5ic69zSSeGaLVaVkWGSuVvVPChh6ZEDeAVX1ZE9gtbek4QvANWvnHMFpxcPTEV2fapM1nbwZ",
  "key19": "55uCH7WUbnDC23kY8RZTKDTFXXhLy5dYAp2PDgYjAfTXfF6vqnKHHPJ7HPMGv6ZJ8m4ZZRDkHCtsH7KUV98YNhou",
  "key20": "2x37HyaCz8dPuWnNr1rfEhXQnAarWnZiTgLm5GFPdWwPnFZH1P99HJsfKhEa4pLYuXhW4REkGiHztaAYCKfVP7rR",
  "key21": "63xgfiLmCHfpANbxKHGWg7gNz3iX3nMAL8ykKu554uZyKFtQk5oogoJrSjPWbZzU3qEHfJbdEbFevyUS4B9L6efb",
  "key22": "53UMpBKp3fUqKM6wfzFQbt3yJoSMZ9KhNcXmtimvry8XSMAL4PzD47LiLzWdqLQ9gZEPcHkQgp7Et84vdboCKPc6",
  "key23": "xDmf35SLx6oqMYev61Te1zjheUwGwXRbyAscXmyAN7pvfkfvbNY4wGXp859gRBK3ZJEoFqcKnTYpKWgT5CUaGrp",
  "key24": "3N23FxToATciNDaapovEXnwn8JN3XrRHx1iuu8pvbwAUgmuX9kRksZUbTQ2rFdUMWy3XLgJyVoiEHuK6yZm9MSYk",
  "key25": "2NebLEf96eWxZid4G1kwnJ9VTEk93K99hFiHeTUGtBwMHrud7ZLL7vPRcKD8V9hkfvHtdPzNC5tiihY7mUDBp6CK",
  "key26": "33XojwyDW5rzWJBWv396DGthPGvKH6SgTVVFWMq1Zv8hSNW2aDRtyk943jgqX7UHK3v5cs6u8cFU5HPXGbDxUF1Q",
  "key27": "4WmxPrczaUBUexcVQGTsk8Kh9RCGDhDPywD1Fe83kFKbHZPbzBHQEMnEkidMGdefACd9WyKmH9ufwkQgcNxMku1h",
  "key28": "egQKfxAj8zJWpfWYiQwRpLzp1U2zozmVvDQcdnv3ZvyiPezbUsggYwjiH3osG81JjkLBx7Duvw7Dp5F6P2aZ7rp",
  "key29": "5UtfKmLdXXYPwUVuWgbrYouYUsn4fLxVNncvKw26TwtTeAL2Dj1oGrJzt5VhFSt2NBQNFKXCYLvJYmihqN6mZFPC",
  "key30": "EDXGreP7CVFVfZhYt6RGzVp24pCvjp9iycn2nq9vx8P3i4Q8SgXpeC3MZXAcLqL8CX29P2sax9Dnk237idVGNQ3",
  "key31": "2CVr1PSifcZyVMeaqzozajq5ft8bSDUCB6FLTXTdnGAoBJGnKvFxKviUGzeaKVMcZcPT7RgoEwbiBzcEycLqgryq",
  "key32": "5Fk7NbM676GZDLhLjAyqUEX6T6XB66TdnqfPvymfESQ7YApT47yr4P28xZG92mWG3mgTMmboTGSnFbiDTwZwy5h",
  "key33": "4ytaQ99e8gCZYySFtiGHvSZwXzECpFTKeRdhsYtpH4JgRw3aAk6e1xsMYnXTeQ6PXMrjsGkRxaBKFrjAr2dZjqQd"
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
