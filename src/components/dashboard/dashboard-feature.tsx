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
    "3pVFQSZhsexUfESfCsEavb5FAs2SuJ7sfY9kn2Z6wCFeH7shQm83fr3awTgSbnXea4qh4wbBzWEctnJyJd6aWerf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tBVTq7geHUGb3iv9qduCWAX1khdnAR4JMNn3W7sihtGgUVQyENFhFHaR5F7SQQwTcnukxwWaBFnaCA3nRd2bHc2",
  "key1": "2RfEuAh3sZkgXkUZNBsMSXbwGD6eZ8hufWZUcwJ95uWCjaDt7yQ93zjvGcSZChqphCHKsesMAWx5cP45cNb6Kw11",
  "key2": "4pZfWsSPoU5Ui3GPa2r4bSGE3YJyUcC7oxN2qPgwvqUdH5FFtMvf3BSPcVM64Xpr9o29z8Jktq6dRBYB4cCVPhJC",
  "key3": "3EUNGQ2NR2wxEvKa4Kx64pj2efseWMdcGMNvfRAmK2qKiHBaJvQSGgKf8RMidNZ7LLK5AxC57Ls64N7A4V7tw6BM",
  "key4": "5ZBQs2PAQw1N678r9o8Kv5qzVVL4o2yTEjiB7hnNVCGtcJz5ML9NN6x3cGvWriFqmgm3zF5i3yDKmrYbgZnbM5jE",
  "key5": "4UfWSBWgp9mVWcrq3AmjoGTuXgTv5d1BN2tBmxHdGUEYwsNtJd7nSXsjQyAxLfnwoqeNvDS32WmPsztzivq6hvVr",
  "key6": "592JSGdi7bKGY1QhBo3dwD5X1iJrqsdRtVw2i7QaAopB8i54G8S1gDdFqiZ4YP3fEUwfeEuTjtgm8eBzodRnQBtD",
  "key7": "fvVmQCni5axJY3Lhnryuy2BDeidTWy5KR7CuZKffy7h3hgvWZAkYDSHy5LtU8XkBLL2783sF5xKM11LoYFj6q2F",
  "key8": "5iYnpS5rya4XekkX24vdg2Q4YMaHFZvcaHo4ATgvi3wqBNsHKjqzeDykb7W4Bb4dqGZG3344ZALRmxeiwLM11z1x",
  "key9": "5ALjRJGmsiStzDXLYGx4mVRioadkBQ2avcVPy8YEVWA87Zrcr3haTARKYDBQBqsmYNstJZ6Sg1bH8eoYrqTkTmWU",
  "key10": "35dj7v7S3DB38eLQhHUGWALRkRMUbCZsT1pJt9jpTCcciowgagRDMZpex7AHQWDMEucqLBasudEqTcrPCh6diV6n",
  "key11": "3cYPxgcM2LgQHF3AgoVvKjVGwiZF3WzDNRwtZBVE6rFdyx9sHgxSvceihc6Ld1KojqTgzvenUiNpSqM2yc2y33ar",
  "key12": "33jw4uCdzVBRma3sBwU1t8VqJJXYv9qPszVoGoNZ7Xk8iJXKuX9hYtMLoSHm8RVDWHSyQniA4XBphmECMR23L7p",
  "key13": "4NRpLUsUfGT7t4H8okJU2dFhS5btZFT2utMmQsFPe277bGqb3Hkg2QsStevYVqJpF9PPNnmyNEFtjaDDkTKJig1a",
  "key14": "5BEu7JGosgNJsUf9jNc5Vyf3T3z9Ehr3sqzxsEEPBQpLUKtBprWMTtRwiFsrfCTCPqCbGT8gJWTid8oP9cAYazfr",
  "key15": "5FG7Nr8CGkCP8buD4g3QQs867VcWFdSRu7wMbuk7SKrwpFXBRJmqM5zMFPsrr1suPTqWkAhD8JXjTFrJ3YrusLmt",
  "key16": "Grg3zD3zohbfwNDudF9diWm6z2g8UfLvjMGXNoa9RSLNMbfeGBWMHm9hon6opmfzKbtk6sLVmnZPB58AhTRJMCB",
  "key17": "WzmWWLrVsgHpi1hxUUJXSDbc7kvyHug3FGXpL5MGTTHRFD2mFjdGN6gew58wK4PkDzGEXisFipPU3m48SQzBDm4",
  "key18": "3CghEXBJffVyHnhnrNAhwAB43G77Sm5hAUbu1pEgRiG65ZAKkp6U437PscANvt2BxZCLzJuQ8jPneGfoo3qhEDBS",
  "key19": "5emEpK2eKWF3Rts4R4AuM4s22VQcnoQCCc1JVv1KrLGrKQY45fzYm8JfNUG3RnY8qfrfMyJBHL8M745Xxjr4xA8P",
  "key20": "4bSoaFg2wPYQvZ9YvUKB9J3AawBotdjQ9Ggood5uSyYfckBtMuZXzqxwGEzb1FdoV3z4X5PtPstjXHBYPUGfbY8H",
  "key21": "4mrM4GjqxypdPrnTS9h6Aj28KLKHTPTG57JaRM9nYLWYm4z8YM5Ve2bTDPKqsCW1E1FXzmD7nbwPg3AL7arLqfNi",
  "key22": "DoipsDJQvsdzBebBSUozJAfKiKu3juUGiNbzBo97scY7stZuQB4wZkXEnP3eUg5CxkR7xVHBeg9X2bUn1bK5Jdk",
  "key23": "YSu4zmzH3Jx7K7VZ5scd1Bui2vz4M36Hhxe7cTToQZX3v5pmuCVR3GS5mnyPUKSdnyH4qC579vABzUtwYWi4sw3",
  "key24": "5GF6vYp94kivHroMYW5xmQ4AGrxY8YoVJv2ujCVJGsudeDdt2Bv7iK885zwH4uNms9pcUpiUoPR6QsULYLmQb8df",
  "key25": "3kRuH2Rwhre28DBxWpnxQkKK1EW4WsYMqAt4xoYYh1nofDHMEaGbavJeDibQXHiqP7pM77e9ZjYmZda3TgYi4WYo",
  "key26": "BeHuH3Uo5KmuSUfHZupvroAHLpVg6qVBemWGMC8H5Pa9WdQ4xuL329nocvNM9bA4Ayn4oKz4pHzo8XygBbitZrb",
  "key27": "5PtUQkXEYEKyLJ7DWvCAYSWsZXDTxJT4mea9UV8gb7jXjEGmXoxcaBJwFbZoLDFYyiNzafcif5iFGEYWkVvHESBZ",
  "key28": "9RTNL7Bp8Jk2KGLVA8rzfN3BH6DFXgLnTwhcEPHEa39hagt2MqtnYTyUG1tXTkMKfewguY91DjEeMMcpbFHNQgG",
  "key29": "3B5BBY2xmmVUVin66xiM6QuTP2xgevvG8S5sUwmq3eYEzs4QxSnFPXzLu5N38khRmtpp3sutGJrZdiHWhJS4fuXu",
  "key30": "64AFfSTAwvcJconK95CwRBB4FytUhxkxXrfmALXtRaywMGWk8uZmMjAxdL4NhNqLKf9z9WrZ8dG9b4pc6e4QVL2D",
  "key31": "24n8JaGCcMK3TA93wKXuydACM87VjrdQWMN8uhCzLZFobeKQtHiwnDdHXPYj842M7ynuHxU1VS3XHebYtJtCF6HH",
  "key32": "52jQAUoxrNeRVyyQ7Pkd9kxwNbQ95RWX8AFZcemEbyrDnWxx5CGFYTJgGbSxW5QzfexkqSEVmKMSvyp4dFBT5uE9",
  "key33": "2jshbWSGLsnQMAvpHtYWe4fLkDGKe4KABkoGtmbwVBK4r4AkpjLWQnNY4RAfXAytjdiaS8NK86mcoeyDChDaSv8J",
  "key34": "2cMAXBenPykxhFnb8EXMbFg6bwhBij6WaCR6iLy1hTDztXPbBphG8FaTDfxVxCwKe5YQ4rLpRpycy4XHCTddKsKV",
  "key35": "3TWYANePQZdY2LALsQdpeRheC4NcPw7cpbhZdYw2D6gHQqo8Yva2JRoeDkpVtReDGPAjd1difVGWX5wr77YFVLPL",
  "key36": "329wf1AJVAbecsFdHjAgrJtYYyg7WJbKbJNiD4uo8mhwHiskvrBKoNAoGaCKkyMJw4TUJLhJJBS6nUMEh9q7XVLX",
  "key37": "51bo22HFCgTzBPGqxeY7CbdhP1dqEXNZc1oCxA1gmJbq3K4vFCxejRyTAZEB444HKbcwHbUnnR4ZY1R3JcBu8ZQR",
  "key38": "4tZgs2xrT8pFWjkdvRivBvTDCQnJaMP3gXepB5MHMxcbrC6yfY1c6TAwftZuDxYmLYdW2FkmDw6nz5V5L3W1Aean",
  "key39": "44iiUx3ECCtsiixDK23fsyntAB5wfRQxzP37n7mtoYwZDTugephtLZrhA6KbZS8mrempASiM1cT9XByT6jKi5E4r",
  "key40": "55ADEeWgQxBc2XwcbxaEHrdtATqwCzDon1oRzMMRBaN1fr6doM25Xrx79Gwo5Xuo2grcKLKKNZHxvtrTXvpjhpvQ",
  "key41": "PUzL6bDJEKra3d2jAZjsbDfgsyWgd2BELLJm73xbRGFuSKwMYg5GVcrT3uFQxLzAYSnnmrPTU86idtZHmPnLbd1",
  "key42": "2sZfWwut3np7xHBmKNL1B3aA75sV6Kp52D1ZMiGLfThKgmcMnYpmMAb3dmuNSritk3ftcVBDNk4shTSobhtnXqvk",
  "key43": "2NA9ZDpo7jwmthn8eJuANDnrTvZPsz7AN1NRR6dMJUbDEUTY3F584j2gwpjDA5o5chUMFzCHAaciytArphWnu2VP",
  "key44": "3SMtJs2mBeYNXsb24Su3EBPo8NKhhzT8pUKYuZsVGDDDNYthRfsGuqu7vdfnwEbCiyh8BCCQQUpBdYH93xZ983pX",
  "key45": "3aWi74bqxYm2cjkJ8bTQc3ZtRva45dexiSRsYKo6wjiFMxx5SYbbRuVne9n7UbHsH1mDVidzkWqLmNt6ZVibsfR8",
  "key46": "4kSzKUGfxziD5gGK46nnGgF8KmkbmmcpU1fPxYXjaZDymuNs2LcDXSnB8bqTthLXnAmMwoXEgEdANrFBCgHPTKSt",
  "key47": "SVCnksSe6a6xKHPKD8F5t4Lkhp9PHD1csZN2CVr7psVNdAT4Zgevhy7ZPPJ3yZ5H7PhGnJFYunWZEjX474Lczza"
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
