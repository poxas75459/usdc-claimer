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
    "2aAR3Acch8xDdg74jXupKWTyZpmMtWLCKktJ5Xr1eCV2rc3iC988JiNpejQSjL9wojEXe1sC8xV1ESoJ2bPm2z4x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y9NaiZtoVVeekmtp24CEjPQ2QGwaAknAXj4MV8AmoKw8rDre41FSDDF85nEfCbNooArgBcYknpqkNaC1YMTFfUQ",
  "key1": "2kypnmXzuySX3mgKnoAEDKPzG8b1tkMHXnehYWvrR8G1cdM7KhVvoXdm29xRU9Dh9upEhymS8yTTUSQWWj3ZSr3y",
  "key2": "4C8MVfMh6Jougi69m2VZwHqojgiYZK5m5FsXko4WS7HLLhfyk5qwrjeFDGQTyRokNb15q2e47H6DnU7mz9vN9RmZ",
  "key3": "2FXwKApfb2GRU5MA7uuUz2jbKM1NfvUc4496h8KqJJpPbNheTeGNxhLdy8P5Wi7z6iQBGT1xXZwwVjLanDPWh2EC",
  "key4": "4kz7aMHXAm214WMgcNPQdgsBhdxc5CizaM5HvqQoDKKvQXj5HiNDbChCQdy79AcHr2GGztQ143Q7LruGoD6npMry",
  "key5": "2FxVBAxKsk9aUwQLtNymDaox4RUgm5arJmREGW9V7kG49kp1KaUKeHpFg7BUYHtpioM5tUkc3bgdLQLqtFH1zC1o",
  "key6": "4or6J1hnpiwzThBrAeB4Ar5A6jgLiBocfFoEv4pw8izXPbR8u5Bhg4QFHvbNqnQkBbF1xjRZeEsMb2jkPZe7PQQh",
  "key7": "wVSFbf2RDshVDLbjGY4Z9t9SRNcEuj387KkTYzhn9nKWZZN3CDdqerM27u1ti7iQQWTPQcQsMFGnpg69AX9aj2g",
  "key8": "4ZYvjFyQhe7KPwTvrEwz6v94f1k3pxBLddq7ge97u9hEXVpnZe7avA5Mvzuab6GhzVnxEAmQDrXFdPuEMkfNkfHc",
  "key9": "5RpWy9Ta2YrqpvF3gcV92JjC1ZUs2Pt7S6e1r8BzpWiEkCxGQLCceK8PrVbYj89Ur3hakoJTuSjYgfJsEj7CProC",
  "key10": "47RKvPNnUqy6KWDAsdHRQWauJAs9gEVAuiMBGNoBHaSWgrLELvMDWiE8NLFTa6vMdK8hWGD9WjB2SY3aDPLLvbYo",
  "key11": "5m7ZKEVrFSzsv8zAG4M3kDftuutkSgS9vFgRgYQEWtUAB4NaJegLkf8pv9oAQRVPQVNP2Z96vqdKowk4fP6Fs9dd",
  "key12": "22Erj8KKEJgH8dFw75BZPHq5zTwFnZciZ6vNL4YBj4ZDaw1PSpcf9jyrSJtMMEGJHV8yWtYocAvat8RegsVDVudq",
  "key13": "3BCCAagW8EsM4jMiiFZSh7NujXbmCjkD2dD7HTHwgBNuBhLaMAgRNtNYj9EDhhMohy1PsXy3YWQTwvUSJEWhchN7",
  "key14": "4kpgCrgkJJn4CmCYw2sMVvxTgGMRgbNqhxJwtrT7hqbYgv6bmTbCPCWTmkWoRRU22f8PGxgz121Edk9tk5a2iadE",
  "key15": "hQ4Lyp1uijGqgxT22xhgymqn5P2ce1LX8ysmmDbvVKLaLWPNRj6nwJqQbRy1NTM8FzpB6V9NrNn2NKisLEka2pe",
  "key16": "2LWhJY2fQBx3UHsiVEwdA743PsCggxZgQ3YaNNvXXPEGjCwZX67a9o4NqsrGQYbAw3qnm6M1LrUgHqZ99iREo7KB",
  "key17": "3hc2nSPDhUaahiRhRUBHfb5pRu5dwXqhU2AgTbjmXmxn8MiscSHEcBQtE5QCuhiiwJDKEkdT2CBEcqz6JnjbHnpL",
  "key18": "28EvpK6N6WW7uWfJ3j3S592PNTocUmWqsiYLPtVW73sjzTsTgaGXfqPnL1Q2U5BULPbFDTDyYxSPmVSYfQz8UbkR",
  "key19": "2kYrombW9QhxbiDbNGeQ7Zm9wr57bVY93sJtye53EYpphSrLf7bTE9Bp3fyRH2uyxr2c8BMpzCmhyagC78J71V5f",
  "key20": "Fg9vA7WErVUKKMwWPbkuytzoLnamuxEEt1JMyA1rB2pbabUz78o1MAGiHnfoys4gy2p8CyJNrA2Ey9UXcLyGLsU",
  "key21": "4gdnMh8FT6yhPmrVwnkQMbVJFK5EQMsbHPYkPctr8nuxYUuvnimvvK7iaHjJXdmyKmfmngu4etYKYs2zUXCGptY",
  "key22": "2J6sPAZEqSPPdLJFZASfywS6U8h1RfLDmhphH3A4CMCbLVGba71sWM4fTaPDmsKHZ9TjbKqj57GsasQx7UaEWEiD",
  "key23": "56K2SjKFrFRTAe7qfCqhuvAYECHe4b1EGQvw87PQLrtdc9ayHY2G5rVjA8GhJz27WyVng9bPUzNvd7pc2wgTpqAh",
  "key24": "4EVKhRTepYw1xXeaAEQZjJZ4jzPkkpyKbTy17q7Jj5rCDWXnyoo3r88DxJ3VVDkvMXhowwYScyaB32u1XFinoryc",
  "key25": "3aKtZeTSbgrpRfpyNbouWKR7GQdVtmzSiD412CTjLGs6B6EidE3o11YRgfKaPbRZUsHRDQCy3GgJrXge6VrndeXT",
  "key26": "5zpSk5qa7HecoiWBNJzdcRfCjg8mB5vLG2dL5YCEwtN9hJCiHHsMdtsYvrojjdWbKR8WrDsWUsH3UByDB9WSu8TA",
  "key27": "61TNKg6cCyFqtQdMvhxxQ1YN4Zwxw7H3yKB9Bkm2DxBsCd5KXk3NrggizNCwDnVCbLek7TtjKQ9W7DMefwjibJXH",
  "key28": "24zNqaxoY8Cv1LnY4ctYKv6BCixjg7YoNtBHjc4G9KQihjmfFtwSNH6cY8WqMJG4ACG17p4aR7rSwKRxiWfn2XrP",
  "key29": "2gPZs3rCP2rb7YE7zAonrpoBbahLMyJCeLiUWi5fNeEEaY6bA4RvJkJQMAajzERCFh9D127sozU9Szo9yHpzQyX4",
  "key30": "24rqic9bXrw18iqL4F4KAzgShsjEizKHa6BA7htiDyKiUqVrqkABHbjPD3VHdPyu8vbzF9SVCB19kGn7iVgPLjAm",
  "key31": "YDiYFi4uYtSHFoux1muHnSYGQxVSNK8szfrHQAzC6AgMGZRLgSkqF3A5oAC3N4QZPJ1eiqJYbBsb2F9UgTKw9fj",
  "key32": "4QcCTYa2Fy8f8JCcTf6ZWhxrcbdCmiHMZWFyEpi8AhVDRJxWHDhKSfYRRhYx4hf7qtSvpozGYhTMeKa1voSdE8Mh",
  "key33": "2HTsVFwT4sKZqUdKBfdNFF7R5tFp1u3ZT2udFnJcQb7vfrfDFVHJFdgHEYtVPFe469Quh7BeTUEV2LMxermMd93r",
  "key34": "3pLuAwYrA7BmgZnhDCmhYuYeXiyy7pfWkPtCUKad8RkjxSzXSMvrJxWxhu3kjJ5Tq6gKjuPbxfQfQNX1qXdU5YQq"
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
