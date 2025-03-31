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
    "3F8o2jG7TK7Ds21kTgxbeiZCybAoqoc57YVfaBE7skjjtHa8tgPakkuwCLgxFASL3Rv6jkgggqM6xsbGVjHAUEMw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53pRXjFvzuSJRAjHFd9ZRipZUrtMELoxtYWBSrDEZAoumcUGJXRtpXxf3JwfkzptJQoYwYcfTGmcmMzGzkWw5F5Y",
  "key1": "2PJFwD7SyydJhS5LZBTWjhnUZ7Gg2FyhzbTxmBkVevUijCrg1uGTCp8DUxus2Mry5PfU3hYkQGk5vvaFTCLES7MC",
  "key2": "wteSmBT6VSp1q61qus1ctZM9ca88o4pvTGxe1ufKQAS3A4sDKkNtXxHE7LMRxaBjkPPpd44MV8gurbE3VudvQN3",
  "key3": "5xFpBBhp6oKPaXApzXD5k6dfjvDrFR3jVzEt16kzE7MvPH6Wi1MsHS4iBJV2fHQUoc6FExhg2p1tw8uphjfW5CQn",
  "key4": "24byw9VthCDtP2UQEmKdVtf3DNz8h9a1m2JAeJw86bqi4crzeAEn8Pph1dUM43pMHBHWeGZ73YfDzdBqSnfNcKCN",
  "key5": "5CYKgE8KrF5pafY5ymDadxHYXWnPXZp5P383SjexarYSq5jXbkUY1eG3qu1FB3h2hz7LSBguibwMRzgVojmvZ38g",
  "key6": "5HST8ev5KwEw5vHK4eKJ6qqoAW4FEDqcXp3TfYQtnsW39Fyu8FGjYD8dft2cH16BNNbRmhy6gjwqrwmbP6cF1cTK",
  "key7": "2pnkghY5szfzGDfYtdn3UVvYaAbT93mc56yckFjoFDn4Avs7BYvWNKoSBDgP5rzaUzKPurnYoMyyRv1TGkZE9P3K",
  "key8": "5CUA5CaZmdu6zh1BQ7PuBgYWwfaRKTYRPwxUAegqu1DK4WKT1rshC5a2bcyqmH7ZShwJemEQbNwr7PVH4h8Z5XMj",
  "key9": "63Ygn47W3mcKzYRmZbfBTiDKQqNST1zKQzjVXUgT6hpWCRye1GE3qXUC8iwL3ooKjtjBt89qLT4mGMERw8UyDbzP",
  "key10": "31pVM32teBZ3eXih57J8ZzibpGpBhjJNYmb4jY91uDkYPhHCYd6X1d3vTHbbiKwoFXLYvTffxiPoymUhjHzpN9Y1",
  "key11": "fYn93Q7fR33WTrWtGYYXuV112S4j9bNhU1uNLPvnxLrJCsWhWYQFb5zUz77Xt2R8JzgmoFzf8j9kAENVYNT1CG8",
  "key12": "2Et7atxYejsb7Fm8pBgooTBotLGMXPbnxpn5XXsboniKJkMeVKu9daF4vMBU8ziLjVLn3CkrqUrvHyK9ZjZ4mFqL",
  "key13": "3gWC58Hze73SrCFPCN536KhAz7nN6wB77CX2YB9g6fDAbKmipe3TEcpXfy7dk4cTX2xV1tCKcia3fpMA3HeqGLTq",
  "key14": "4xMMq58KVWd1vbFChmfgbRBXz6Msy81uqcfYa1q23YYtrCyRR5zBtJtJYwzYE2mvATxKeLML8FndGVkDktPYUoMX",
  "key15": "5qJZWhrTNpit3xVL4fG6AVyyjFn8M3DdYrJRPspuUXviQhep7nKftH8AG52VMei13dfk8hzgH1BMgx9UFVmN1MTe",
  "key16": "5mnDytdFngvqHS4bVnEsADavm8GgphSCQbTuM5zbMh3BFivTpvoTTxeDu1EX2hXJM9wjW2TZVXeRsVyF9sDu7ahq",
  "key17": "2zGdDCmHGjqsCgvUonhABYPeZZZKBtohNHoXd26x4RMQ2Vf6G43yTDjx5QnMn59ajpucnHany6iE59fiGiLPF89H",
  "key18": "5pRweWCP8dNaWtH6NZcEnbTGE6iCx1M1hUGQszc9nREVMVj3mVp2xRn78K1nfLuJZqFZGTpJNjkSxc8s4Sr7y7ie",
  "key19": "3YegJ5QB4sjLKWdLq8A8rh3hSy6wf3serXJQPAZjvacX5gtdHunRuLQExdwRaiAz3fMtAJ6rNhyM4yXvU8dmZtEP",
  "key20": "3miAwiw8981GoYigL8TNFUoXiMwWEA92hrHMQqYeK7iiL5jqDM1x4NqC9RgkR7Jm4w3UUwgdyJXgZDD7Qe1fCnPg",
  "key21": "Hhtw6njej4Zt4eMfYfRjmtK7szLCocDRYoEjVAq7hWhPZDh51PSJC6CMp7c64deFxWyX8W6HQiNr1L13ZSnacpU",
  "key22": "3cjV7T7DA4NdZwYCa9LhUcLug3GbZcFF2N3VAsv43AE4ttexi4ka8corfkbjqfLjc5ZrF4e8jfb49nQ8awjMyF2z",
  "key23": "2rPVhsGfcU5HjTJiFbpk1jWRQwg3NjN5DLRHfa3eQPxQobv4pzn1HFeXidXYpLwMnZyoUV9jUy7mg5xXYhTZRory",
  "key24": "5j28djN6ocYtxY7HQjNqyDvT2KVwtChiFXdcmTZKzGaacYAjRQjGJvqtkefnhvxS1aQSMQQ86a8b8iRkHrgWbSKk",
  "key25": "4JHpUqidBQDx3FVDje893Y9Rn6pfGjGiT1rKjbhfycAQMZDi7vmAaP4wKbwwCKbSSXqCVVWR39VcH5E6nmMQ2nKn",
  "key26": "5LBR6rfm37fHNbA9P4oGGVKhfm45ZFAjGK5WY2SSBz1paSfWtWFTdwNSB5Sya9waoZBFDFQ9S2t5xH2Cx5wB8CFF",
  "key27": "4VFRtF4D2WMTBT5KdTqhopqV53TP73mgwnBMJLep5aBP327aX5ULBTdZQL1F12mdnqkko4AEaP6sUADMEaK4pwaB",
  "key28": "2VuuNoFUxfJwjYjbyL6dzk7mwmNYNQBQv9PqwVxiVEyqQJ8XXLLtEGg4cFnGUbaQHNUds9bk3wg77iqQZhxYqfTP",
  "key29": "3pMWf23sDnSYw8VHe7pKhLfus5ie8kNtzS6YkxZdtaRGu8bnYxFHq88Mu34tjTbNfoKKbGbNQB9ox3zugYZgNfED",
  "key30": "4t8xnPUQzm7BVyPZe2z9WjnhSgJmaxRdeQQK1XXfAoKKiyXqcuMqUZdwsms5iiC9Kixre3y7w89tG39z3jF8NNE9",
  "key31": "2fFBMUhSmoBLGJQ8m63CredSpQpKHnEpVuEqHYzbLcwWzGuZVZNpxzAxdZfovcmDwGqgk13c8jWCXD2aUJBkCADh",
  "key32": "2y9nKMsvkTx8nWuHi15aDy3DKaQDxAkMEWpw2miepGGEAjKfnDz5bv8oQcw4NFF6FGS4eq4XgQ3HQsbzCxh2Ly8P",
  "key33": "2SbLz6DietzW66iGoBXptHWPcg3e3GHxRrKoojDmNrqvoz2XRviQpk2De7HHyx1y8vSRq9iiK1XrA1xg1KNhe7Xh",
  "key34": "v5zoHFoHLUdcDkSqs778DJY2pBWob82bU8i1tYDUgTnqPLVvLxVX8DxZt3qwoxChcKcR2ZvvWYnszbms9jLg11y",
  "key35": "2ASRMAoQVSaQy27oCboLWy4eYDqZHv9KC1F1nZSji5z9TZYt4VP5ZgLi8xmCo1YkYpznFQheKk7Zk2FLrhSNYpSw",
  "key36": "JuYVRYJCGwhfTRK3YhhdKdTRtDwUJwwzAfsk23mzsD5SjghXFrASqhDQbfjZTpMxXhKz6onEAt5oYmwvpM4yAxS",
  "key37": "GPwuwudiqD6vSve5QBzyEhmRCJxzKjj6PnRpFUSe2z8FyDyK8QUVu9e2hUSuSTLfbMLcHaSqmW4NUybjdY3TXUT",
  "key38": "3jHjyhgD8BsHhG2P1X7CPZdp86H1zqaHsX3QcYjPyr3MLK2RVHstyZhgHsSEmSQB94DGtMFqMnjPxnZXzq5rHsMZ",
  "key39": "211tEB2xJQhoUTACDGiYj5K6tQVbotEKKMdpNveTBnPVUPkzAk5BmNnZGe7vBr6o95VC5aS2nQtEAxpBfrCW6Lfb",
  "key40": "z4o1gjQR7tksQHduM3riooGshY7C3ASoYuYsp1eogowCYkyTx3iNF8y7Tf3VvJcJeT41QKcBstRqpdCoA5iaXMT",
  "key41": "58ruLhdT32Q1D85UxbsFUbjmkZtorAkQ88MsAsxKN9vusfEWigme7yYTdaZ5vL2hbDzjKdvJySfvkPQaZ5Wc8NSr",
  "key42": "tbwphHtfCFZZxzroh345KZiEvw3jfRqppk9P4RRehMBZu3bSmfETokTDPXJnmMhXWwg4s7VwNG24i1QcxXFWdEM",
  "key43": "4Wzf5seckpZYWf3YZ3eYDa5YYx7vPy1iGzgTs7h1hkYk5U9AM2RiMC989HcWD2Y1b7EpXZMQPS2y8K1XmmxPfJtk",
  "key44": "5kXvicWfCy1je7q6PTfCwtHYnLXgJ7am8HoSF5FAGBFiAqiNZzTJYJSi6r2X1jnrTZN819XHjWWnLekaJQHDyRvP",
  "key45": "WFQQJFzap6b7rrxUK72T4DoDUohZ5kGotRNqvSYXPuvwxwqXnrPq9gJ6uNPnWE2D6rAtEhJzQMuTfmHagVgFqFH"
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
