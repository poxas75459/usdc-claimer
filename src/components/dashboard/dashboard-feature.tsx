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
    "4GBjgodmU6qWd6GqgRMVv9Mb84heuoWFDfkDs91fdG9Ry6vD2E8NAgiRJrEF7oLVCVTyvqJD3DJQckgk22rXo3gR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MaXBsJW3HAXDfgcepNu8Rw5dULPfomdWXVRDGLjUruAmDkM6iLgZiBQZfZMFBw3zf6uQqyekmDA5qL47qeHXE7v",
  "key1": "5fFu3F8Zd1qYHtGH2BvVhxqiJZwmTxkhHEsn1qa4aEhVoubyVLmYCpxRWbr23VzUVn67XrcMbZxLfBrsaiSkjeJA",
  "key2": "TuPz9jgQ2vbMsHShaW6ESVnhP8wvPN81W2fpYLyAskj9WMxMH9SckhS8n6MkzrTTUZpD7H9wV1nNxSCjsXSEj7R",
  "key3": "YsDzizc9oMxyq7kkC7K9rtWBhvVrKvWte2Gb9tKMt7LEcGrTpbJK5jKmViHCiuywbaPt1JNdHkGGTADN5i8fsBd",
  "key4": "5FPGEEw8nB7arCYdkJqKet6AHNz4zbLDKBzfP2XkSPbquRnv7r8jYR2boaLk1EeQaXfypxYaLq2NsqG8fdBq9HR6",
  "key5": "2QKrkMrsWV7k2UsKCeFnxwiwpnasvH1Xz5iJjT5fEHTFWWr96j5eeBXMmiADhzXGMevrfi8ULC6TFNHVAiyQKpAz",
  "key6": "5VEn4WDvmJBQSdQsCvkH9L9dS1XrHuGC6vUR5hfCAf5KvNixr3cGqZWXiFC8YHzrLjsFGiHhsKwEzp8SZz35zTvQ",
  "key7": "46sq8NijKGSn9NK6FrR1Kut1DiZPzgJ8HRkDKFUAmTJYaN4c7FHXXDtPkkZXcFb69zCyZ8yM6ReeDtfcau7KSJdf",
  "key8": "2LP8A3st5FZJFwiScQtsu3trYAi5XZ7AA12VVhxdGhYfWyE5MvwuExo4qhPGSR69AgvfhXUZ4H7FbwxPdU9GtTMc",
  "key9": "3dyJBbwo95BkdN8CrpZy5CR9qg66T9eRprq2qze1JbGH2d3ZWz2zkEZg7Md8pCL9Df9kFERfkKXbb4ZYDup2gPp9",
  "key10": "4zywCH3iJj5wGumhYBMbZKmov7f5BJnVPNJx6zusM4AsZf4fyE8bH9Gdcr77Q6GDi5N9va4sStkvaamxgCUzKTTr",
  "key11": "31UCdMbha5BeU8gd6DfpXURYa8CoCta6kxc7EMzhNv3qPjoK7sWTFVn8wXjFGPa7hAqN8AobhFdFC1KhEbYgAbWp",
  "key12": "2niL5TK6cS7NGppm5ErSWp3vS7D3rQVFVd88HU1Jv7yWAKZtdoh1FXmffLGVVfguTYGg5rpvuWaTTi3tjaZwVhbf",
  "key13": "3iZ4T5b3Jm9GWizpfJzdsbLpPPqvcDGtoMVeF6NMn3VeNuqcrhC1BQ4NTVd2bFqc47CjBUsD34xVchv4t6yaJ8Xw",
  "key14": "47RdRPSkkmtLKMduxBYKEm9Ur1v8LaPHeZ9wvcsiHDFCyVSp2YLrjhp3kXfd6imWDW9KiyTohA3bXGrAoRfpAhZD",
  "key15": "4xkUKF1yAcg3ruQri6XWBgyPkSr2MKzFZgx2dkBrNTfywRWHEeRTjFqtn8CwgxovYQN1kJKED5iwT6p6VBnhSKGa",
  "key16": "4FaWegG1iqHiUDtNnAmHfWRYJoaHKD8XSwvTNT8W55mgm2juoBACy9Auhh331M5859BYntfX9Wp318cxtxfVCQXT",
  "key17": "5BY7Dn7m7JDfw3yEfKL8ipk2SG8q21m1Xjrhux4Xsfoeh2t3wHoBEnW78goni8bYDvUykuNSH9w7kwt5DiPTkcdV",
  "key18": "4sxyyTqsK5KVBq9dofXyW4E62gNaCqK6s6nnyLi8437yRgTxBrXih1jU9CrUcFnY1aXHn5vdbnkGyxc4DNFWkHbU",
  "key19": "2dpbvHXYweyvJj87tPFP5YkSvX2on2vaEQf7sGGSvBuv4p4zWpWTwHL66S2TDvEd7aYrwJABohkJ5s8yn4N2BHoh",
  "key20": "q477EAqFKsUtDdJb86KbG1ZgWaVE668NgE2ixFaXxV2z5W9s3oeq5b9KnrvnRX3XXradafqfmCo3V6KZrXm6g2s",
  "key21": "2CZZHyoQTYLMSgnxzgHjigNuZ6tZEpvpAEo2nsEYor5qxFJ8HbccmRjVVRr5e4vnhbJFAEVAHiCNfEa8QNbdUs19",
  "key22": "5xSmTKXc3CXSjjHyQZ8dxnfdypUbCJXGvvSeVbdP1fs7GFATHS3AbVasX3dJPGgkJM9r7LyvZK6wx6v1fEFQG21H",
  "key23": "4uyLRhDMLXk5Mp88f7efHjFp5SKqRRXHU69DRC2EB3rCtDAFtfGhw1yFrAKPt8fztLovfP3kKdeu6LG993CZuujZ",
  "key24": "2qUm7Lu4UoBwAA8c2TNoqT5YcWA6G66Gn5X6uzxLVBMcpwimkxEjVpLVzn6fXQNQtERET6EdHFrGrgjkTmqHTixv",
  "key25": "5DockLdkYfcK3X5JxRpYZdyWuHTFyANnX32rK9MTVK4dbPVpe5ZfLTRVMMa6EgediKqnQJSZvRa2o1ZMAKbZY5Zf",
  "key26": "3TGifds6H9eCVc5eGtQk22ZAGBFWZW9SFu14LTsRuQGWuNV9BRPXS361TBmh4g6NRwTgwqC3H7ne5hRdBGE7Tc7q",
  "key27": "2PUUcteYsuNXiCKbQ3SN56q8LrQkCs9iqyXf4CVGpk2vSxTn1iR4xUGoWA8fxDxficS5xj4YTrMkQMAC2sB5fx2C",
  "key28": "cWvBCjcoD6FJm4gPyhgFGaFuQZfomTt3MEnT7v3f1X7ny6ZxsxJgVq6jvZoKfpJFZrAA98CKvNrpf3QRd3se2Vx",
  "key29": "5YdfRNF3fA5seaJfFu1WAjPp8mUrUgmAoXvtCycMG1hTWXhQKWdvuuehEUuJzM4MHM6PkuDWZU6DMVdGF3pogEfn",
  "key30": "DtdzuaNJV8qQBjUDq6io3XNgmUkFX2e2zXnAwGnyJEheBF5JAFm9wT3pSqRcVX5wE2HW4cYcFLxXoVwWmZZs1B7",
  "key31": "HhwD4P1LT6Nmef5UaBD5HUEkvLU6gEuQUPf9ki8kstN1wn27GiLt4fMfgxX76F1xywvT3DkawwXtUafgzZ3Ms7N",
  "key32": "65AFtjVZoasFATSqBg4mXh3SPZ1dNa6Gzqyn8Mt2uEZ3Vfxz6vE2iwKuwchJwX86dK7KN9A1NccGVAEQsJvQ8Z96",
  "key33": "3hiXspga1a2aEotugnscZb7yDmq7vQ8egZmgzSGC46WSQ7yAzjZpEEuMzkiz8GJeNkQec95WLNzBBZvmUmqCAN4M",
  "key34": "7bWgvvTbSbhCJdi69xmurtjaxCEcXoRfGLG9wCPm65vS4fvbs6V7kgCiGTgBevyZL3f6RiU7MFwZrVqLAq6itX7",
  "key35": "2YvntSXhyZKevMoqBNNiJHhSn2b3ZnvTpzLCmmdUQTkx9eih9F9rVfDgmhacvrKbyykzuQdSQxUGZcomk82orZiC",
  "key36": "5HX8Y5XYoeZ97dNhXxohDDWTdmk3PPDqfthyBBXM71w3NAGtDe9aZt9PDiPNAoWbXUqFBLM64Kdtdks8BWAGb48h",
  "key37": "4KTiAvcWroZNntAe6Fz6MzFAPKTRpHiz8WH9evhX7Vtgf67h9XRB96x6uwUSusu2spVWcuNfBHgmX6X3CsCDJJCt",
  "key38": "2yrJyaZw7aipSTYtByNLtcB8jiypiXW5ZFz7iMCxNBUnPWmRUsZNVjBtNLtoZT2JSdgV4QKshhjjAm8rWcikmTKb",
  "key39": "KVJQ9qRps1A22oXjkQvzQaH1p2XL56dEKqSigeyYGWxU2um9drAzYve7r7vuAYVAKdH1Rf6AtTNYS3GwH5yV5JB",
  "key40": "63K1FimuRbYMaCTCGeNf4xtf8fA3s9Js9BvRRtqWk9a8zMJuD97dA8o6wKwZMW1kBmo4C3tEHYFZdSR3XiTQyXYU",
  "key41": "3xZpzUx3jCE7ENHRTAHmijisooBjyTWMGFBFSqguR4eUsxxbkqNnEPJWrLqDHT11KKEbGwdWkDqWZUEwZGjr4fmf",
  "key42": "3CQDPJnsd5jYao883RojSBZwKF2mhN6UbFXcBRgDzii5WL4yk4j3P61cSGpbQdY8xcg9ZGcQbZDXBYqcGLJgUuEf",
  "key43": "ygdTeMmdsMdk8GsgHVYtoDTDaUNi5FZRDbV4mcQXhebzC2FH8fCnXe7o21VXuf6ps18rSP3QuuZuLfQRuKCMfJF",
  "key44": "44yZnazQ57MP82iR6pwvgAURj8gP4jCgjg1TeQXaNUPLfbk1SdqztgFhkNbMSohRJj7KHR4q76q9RxDnDVgtxDrH",
  "key45": "22Ac5PJRgZ1WKZqd3AaYGoNfYeaJxuAU6rCPfhCufon4ccxN5K48Aa4qoZarEJV6uRPfKbAY7fJm7fvZNVqTCxgD",
  "key46": "2ycLBMYMLPxAz24D3RFkTB6zKRExybZwqj7shLs35GHu6duBHg2w1TtfEVcumqFKYqikaqpPsuiQMJATpSzmc98B",
  "key47": "63iuhsqwxBS2ahSJqcoJ6ddatNZMKu8gDNYPqCoAFUTs3XxUTzTMSesdAtwepqYqcGo8hq64MQJEAsJVLknntez",
  "key48": "4q7ZqEQTknpZ84CDrVEuMeN36r8p9jgnT4rGvJY33PLYJKiSmRRAs7cqnqagUE1vZ9kK7V7c7PjvdpMXTDA99LS"
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
