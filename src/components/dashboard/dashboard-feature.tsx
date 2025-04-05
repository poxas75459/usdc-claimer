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
    "4RMDk7tyKUbDBgLCKrRTGdmVqzJfT3i9qND3J4C78qwa5uifWmN1xb5aS35cPapjwBh73piJtoZmNP7N5CphEbrJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zikHzomEYt7ZHkxVzBZ3eLzBUJWRjLXBigQHn8Ufy7A8xiGJcmeJt47tV3AZzg4KawKay7qBcbAPGdWLD7ytDnx",
  "key1": "4EQ5THUPJamUkXby2Mfj8vJPhuztrZzx58Se2dN62GL8xg9DKupUXewLvQAKtNWjZPq9r4bfYHX8UGxcsdAGCyhH",
  "key2": "3cU39BzBi9TGq5XWgn9jyh6KE9kmG2eppFTvH7fPVBHtAf9AeFhfkHPttE9kozJTVRUmkz8WMKofkbtuV7PSqjZY",
  "key3": "JCXJUWa3wzZrZouz25E58r33d8pSEjYpHY6g5wYy9MN1dKzmeQ6K55TvHjbu9zt4irjtmSBJATa69SM4BbkYenB",
  "key4": "4PYiDTHNA1EF1A5HZYpLjEUgN43MMQpjz2fnAN6tHJoPg5P4k9kuUSderLEutcK1Got36evF2zkF4afcVXTNZEK8",
  "key5": "qHF9KS3k9rrwJG1xu5AsadTUywyvDHgpYZteiQomsQowoLCL9Ek25EW1fbZKv5fuuG9t6rEQN34B3u6W93d4o1d",
  "key6": "XGxrTjArBEgj2JLKKSFyvWa9bUZS8359qeAjhC699CDay8eqyAYGoMGacHetSMFQMS7KYnX9QnMUwZC8SWWx64W",
  "key7": "5j7msxxSmTPSxhqQtyMvrRi9q3TxbsyRiQ2XmnDKij1fxtAvsJSUo8q9vaFJ72WrarohFbckiWRhqykK8Y8yiKG1",
  "key8": "4kLocBZroJwX7yfC3wGcQiN4eCnnxkGvXqRFR4dHm6ucFmZnVkSCYKpXGy9iE6gAiEwPaAsmJ8MjD5HNjfKyV66C",
  "key9": "5CnKyuzNipzf3U9vvuva8YA9fd8AmRGXUDwzpqhTKZWSPgUxjfm4F48QEuQ4JH1o6oQiQ4GJ6LLpUoN1wWeZKpFV",
  "key10": "5kJxE8CN8D3crqjUb2QX8nwHLS1qfyPwgnB92LkXjzreaEX2w74ACciR4JTWtZoBE393K3dk2KX2fbzZsi1eAXof",
  "key11": "3fT4YUor6Wc7srMCvA1wh2zfs2PfYjEt2Hdwat74WR3U3H53kc3ousygPT3mkonoTHAQ8Ksnxnhg12ZJqWDjBy5m",
  "key12": "2CieEASTsUJgjwVuu3wMFZxTFmHDrk8DpT5V45vewNHiCAfPvUCSRig56M3ECzZsPg34v311wwMbnycsp3AMrFSR",
  "key13": "3Rd8kE1pNnDxwjj6nFjRis4T4hu1NRBuaxysyUAQXr7ZCczE8SeYS6MC6JbViJycjSRfsx6bMW7yfMtFCm1CySi",
  "key14": "5KCsLcPhpjTYojXmyojAuDZvFdMND5MYVhLjQXfmrncbvpWWd8sV837ryVvfbxbfHwhChRPGcqyDbyYmbaZjTtcy",
  "key15": "4QbWsXr6QThYgzHq8NNhFaGPSXfjhNEhpkzXxTtpErdUrTK82GPJEu9rMdsocdXqzEmZxpkVuNRJybxZ2sbrhkby",
  "key16": "4qf82gJJMbjjBbiSAzKkbVZ1WRKn6EJdz7hrGnwdXcscHopo5j2B1RRefD9RKxY3g7V82xEPxNmbY1swM6AfMARD",
  "key17": "5CAAMS96KeVCzjXuwGTi3Ldm6YwrG9RSfqVCXqMfArpJ5vtZ6cAWGNpQDkTMzpvorqLYpJPMLvm9n3iTinMU2ePd",
  "key18": "4Zw7yAkYq5i6znDmDEo8egGWtZj4cxt23Www7k2zq5xZDuTXtcT4mnDbJ1YjcKtdkJKqUKQtVctEBaBEVXRhtwn1",
  "key19": "24B52ePNmtTdEMXswsDAHSJgWoKhxezJG7EUEXHpiahGNkbAp2u7ELXhr7vMYvQC5exjNQxvwjVC1duYZ9XjrBKa",
  "key20": "259stEfvWdXZXFtgKWtf8XG3bFERh2enydYPNdrU5F5nReSQYjM7sNr2kbUgpwJJqNUUqkShXkbhGsDJXsP21wHn",
  "key21": "5pihyngudad89HRLuYuqSFThKQ76SVi9zRMGJa8YuNN6A2RdsibU4CpteMU4HR62kzn3hkvrvJYfaPB5gQgcPuE7",
  "key22": "2d3xsssaTnzQPfHn88e5cc6JCkGWvcsR8JkLcnkAWZuAigy1M3ZnBGi5j3cciDqT1xc8jZ9d11cn8MZLPwU6mJsv",
  "key23": "2XWVXo8XUmiTa6Hugh2UQnNwC8siVasiDEtxLYWKrsGciT8GXRkrG8A9v1rLSmLUcotp1NfdmjSYCSixrzpgDeCm",
  "key24": "4nNJETf1nFoGJcGbmufDJjpcXqqcjXjaJ6AhvMa14aY4QwF5VxrZBGsyUXv1jJ89tpnUvfw9Pdf4nfirsdV9w1FU",
  "key25": "5Rx8fSa2ahrzEvt7qNPPExvTvKyANccZxwWVZcufii7dwXoD3ps76G4V97eyBRjhDPyp4AjBkmSx4kugJhZcqLVy",
  "key26": "395HBTGSdXhzxmEXhXbmcBtvYN92s2nWdxQmetR7uCq8xM91CUKYePuC9qSABKBCZRaDpRz2uDVQfbovS33QgBfJ",
  "key27": "4wsoJrKM8xBY3onXtZU2ydthWvvfxisjepdB1xc2GhEnTws1XozbqGg5GJ3iLLHmTGo1nZEm5rbW3syz95D7CHXh",
  "key28": "PZbtfDVK71waC7j3g6urvZ7pfBy8Am6iwv5idSW4FwfDiRNUTbMJGnPpY9NbamTves9hciWrseiyVg315RFRbcD",
  "key29": "27nyRmGU9NGa7jPsNsJQvhhJYbYfHzmuxGHyPhP6VMhySwFJE1Aoxhigc8GLKJTTDxvPuR3xSUGMpSi4DfrkxDk3",
  "key30": "4D85JSc1JoZwCfznvw8yNWmFJG9ZSJZ3NGjC7zeDrg52NemDgnVyRoosyPgYbARSN17WBtngsvsZcBwfAvfcUyD9",
  "key31": "DocP9PbxBkCgvf5tJXC3JyV8Fc8rwbenV8JLUuqPDPzVSxwk4xUDFwrb26GSgGhgqqABdiTNGTHaysT5W6uV2PD",
  "key32": "5rK491xAZUcm9iiViV7fgQvmkw3u1dZsejfg7iykgJVWUVTyw9jY3M3oduKe1Qb8RweppMgZtXL4FVuHCrrfA2up",
  "key33": "5fx1b8Fs1PYUbyF2Yb41XzZYWad29hcfPCpYzZnxhqm3ceeLHzKXTyFVBsYmjYMHdgaBRQzYw6cYqtkrvs1GPW1c",
  "key34": "3ThCWRf422dPvrPDXRTraazNPPAVCLn3zMmHutvkoQsTpeLY6yfwg6azB1M4sEfv1pQvtHAB6qkeQek6cM5xqtqn",
  "key35": "515hDupAn694rierQLoTHCRDCEEj61XnfGzAwhLBQtXKbQJ51M3M5NDh996fJ6UXAVTMRPaVq3iy6bgBG46xz2pY",
  "key36": "2r34UZwk9Ts3biYNTH6PjVKZgvEKQZVXFShmrDteCXjLLak7qiHjn6CcvPFAwBRr5iqbZPbdmXArg1BSQhSHnTDX",
  "key37": "58AN5MCwqKiohm8S6V3z6VhSDbthd1Hx39TP6GjJ7m7R3XXjxofc1MViURQbr7qKPGfA185sTWz6t6qADDW4NbVa",
  "key38": "4Ww5XW6iCfGHQmkKr6uJqZN3x1MojAjd6ZeQdjxdBjNaZNkztfysXwsjLf78UEjsRgPearmNzmaoJejHmNjHFyQW",
  "key39": "22dvnAEW5JuHHrcT6tNGKaaWKqTnrmipJjqFsLCYxqeeVtevNvXQKLtPpMcRnAFJ5DMn6YrQBH3H9HoGWT2tV1mJ",
  "key40": "5fwKWt6HuP9MxeCfkrGA3Ur2MMyMrW491bkuWA5wRz4jVxjhKWvUkJiinRJ92J5tb8DSB1yYKc29WvaLj2dQeusq",
  "key41": "39Ux5jpNjRdfvSquqDFELtHvTE2dGsihNahZoVugYeVsVFgEGqJdgX1eKeQ8ojQrmcXTEX6avo69rABTiPEfXb1V",
  "key42": "67WCa7W9umcvwFHjPBxcKdrfMYmakCZaY8QB1JLUhBTSmfUqAp2dgpRTqBAThT8rXokdPA5D8k7ptXPRpXJFa1aT",
  "key43": "3XnM1vSfRh5XrKDhkU4V583gj1MPyNYHz1yh5mQPfosJui36PE72A5Lsoio4xZbEfRXPUWwtgaRBBg18GgddKbdk",
  "key44": "5XHFQ2Aq4psHYnuX6smu2KKY2QhNVwuusgyfkSu49dPEpZMGgpZyCWWYpyZyQL6uhVfvNYNG7JvHddJ68KvF6mTz",
  "key45": "GTTrH2u7ofYWLBCKoPvT7oogFCfJUzbxD8msLw5TSbgpkxaGQG14XVbbJbGNZbwCqu2uXC4covsBHyTHyTvbBQa",
  "key46": "DV5ZcphZrGYHXjTfY7UC4WbSSLTRMJ1NqAZbjsdA2EDSLENxP7gjgNsgn4CUbC9C1ApUGUmoUwDFj3Ffk1HcG9e"
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
