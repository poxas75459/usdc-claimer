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
    "PykRvJAr7baMNVKsU7bjrqttASetaDM9i9ujoUUk5rjRAG87oEGYjLhBB4s5e1DWEttSVewtJta6PUWc6QixoZm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32fSoMcABsx6YN26fWTEr9c9E1Aa3hSAvYRr2WbjCkZsauvotpbpm5XkCgF51hJomCfbHqnfFhKxtv5LGc2aMzH9",
  "key1": "2qM6gud1AtWeDFWuh8WRUkh3iGA44XV9XKqPNaA6EJSYYusgSo5dRmfHMnHSxAYWmZPnUxtzjj149wv71CeHpTfu",
  "key2": "38QSNQj5ToHD2E2dSPpvaoxSpUkyNVnCRpfu2hU2K5DvWa6hGRqGEwiMGcJdg4ygz4wbHx5TynDTvxJTWTFCXhm5",
  "key3": "3moE6YiDgAkH7rEfqT74aut8J2mirKvBdajE31UxkwcEoPPRVPxaeiUf1gJHCWpzTzbvUFEaxoyMtQMe3p6y8FXD",
  "key4": "3z4zWibTp2AScSinxhmCffPNAoNRaAEJVLjzys1EcCdFXxxpA1YsWjuSz8JEChE3jV9XoomdcGZ9qmu653zt8mu",
  "key5": "zdsBDZNS3RkCabkqodYU47XpMxHVZyS6W2hQiPRYrUbhRr6ycmNK1kfKDnbhnmWXVcxZGGaAe639An1gjSx55mG",
  "key6": "47QLbs1xQj63RXbhamjeNytUnmVLUiEGestwWcyjqz3zFsceKjgYEwMtV31WgByTYqeKSzBUdCemzrTUyCUA7onz",
  "key7": "3UyBoXeYtFbN3hBiW7aEag7owaA7VU2USSCBs9Qhx23B2wK4ov6LKRZbTdvzsHTdpgJYiVVEEVApmk3hyMakiigw",
  "key8": "4QmSiBaCtcnUmp2Xg9MnuviLrpQGyYEPFJBjpCEYscj6notPb8WWMqZ9yiwEW9QrvLhz6EoCwC6nYjNZsYfrPsb5",
  "key9": "3NsSgHKKJ6vgM79T3M5aTCuWhTzZ9r24wLKbDeJ9h9EoF8hTzt5fRv7JXjuqRon78sFBacHfSeMCbuTevbfBpKzP",
  "key10": "361sc4SCzcqtY7AqXtE5Ht2SmpKPv7VXwG2KLS6SDtXaZWJ1KGSorHnn5pHp9LcT3yPYnKDb6n2Ff6DNNgxyEGKh",
  "key11": "5RPxSSgvQER2twLuY6XxdxGhwDqHLQLJCPpdD4b8CAoVsf6vDyU533nmmy8L4iDfvGNZddWGQt5iApW16ECQ5nXY",
  "key12": "2do1veU8Bk1YGtLg9HJeiqvrm1UkJpKPK9ZmR2xsgbxLvNb9Z3Hm1yFv36qah1qRgP1gL2UNQUDFhAqqE1RPmu2G",
  "key13": "5K4yoK1B3zafCd6knQ6t3egLSGFJ7s4zBu8E84YYhJ8q592Q4K7qLZ8ZDUEUMXDfNytrMhhLdKmjfBb67R6QTXhW",
  "key14": "4M6UMByo6CKBpXCsjWv9SCkGAdRgiZXaqELkZpM39P1zhTcM3bnu4ZiEXxHbsLbFRfDQ7267QUt2YBw8prnVV1Hr",
  "key15": "3uVoQkA9SVxaE8ePNNkZqsBqaSpPGXVxt2GgmDPMgmqpsQry8Pn3dNYwQHcvzofdc6JUkbu3CnLWyKv7buYdaqJn",
  "key16": "5mJZjSpUSy8RqkZ9RT5DfUdpUPkMYWLaBgU3nEzn8Y1yYfgzfscb9sLa7wqzSxPbf3xcSiL8LreBfPW4VEXWPQkn",
  "key17": "3v3F6dw8iPwuAKipPGzhZ5uqWcBAu7fEGTA8Bas5sGKchLHSBcguhfp9bBjkNTNVKW7tXZNaWZZPuujM1fJ7Mde4",
  "key18": "4KzzvcQ2gKqTp7mFyxRHGcuhEwCoFS6UUWFcdMusJT6Ky8q7qAKqcP7z3ZAPKwFwaE6P9RNN18JWAigbdjLNbjnU",
  "key19": "9EjuEAuMYrbSnc4ba6gMBbGjpmQ1FA6aK27aghmwdx1GiEdbNAryFqhkuURvScq7K95oRiTmjr1Ru1EjwaHFTNt",
  "key20": "5nYD3j8P5JL5yGLKmRoye3Gx4PMMQqfMgLyJ5fDiHXpmNeA3Eu8zouJCTot83egeX5sePtvQ5hMsS5gf9XZcB9UF",
  "key21": "fJyDqoqJKp7R6JDyzzWSe45evxUL8Tn7y3nM3ru4FTJqnuayrPDAiAhB7knBfrD1sFBN5QBXrDHDLHmsdmpAHYt",
  "key22": "3jhkm9enk4eM6CWpXpW5iVbmZn1PnpZWQxLtZK4n61UmMgXU9E3eDYoa3mEpFUbWcDJEAim84VoJwFmQTTf37Ajm",
  "key23": "5xoWLPcKYsPeG61EukCez1mzSmv5jutBujvJR5sdRBksDNV1o5UdMzo5tNCFQ4mCrbBTr73DFWr14poSEaG6oGKb",
  "key24": "hTfJtRtogtGHSmuVv7cLndtHz5GaGD6DwX2w4DyuEZNWSqmwCGaJszwQQXLc2g7awWU1EkJ9tKveRKQCcpLGoau",
  "key25": "5wAV5bphXP1JkL5bzuNNdqhNXCVzhUNxusZuFzvARuJTnE8etSzs6rA3CijhLfdiXF6YFeCC9EE2JRmL5GK4Unfv",
  "key26": "22mrvkfnvEpQDdTmug2sHTrNTMwbAYQ13XxTCZejNnxjBmQ5fMawVY2DRSCoZTikXYVrsDokhPE5jXrCWMhZjhrU",
  "key27": "3VSPJgkgwyeCoNky7w5ZscComzfq2gV1rprHUiC1GdtJLT2adDEMWAapeTq1BWuAKeBGobjeKejBe9hVcZWF5vha",
  "key28": "2SFzwYHTaveCqxFMnJG4Wx4w1VTaHZ7icqtuaVcC2Zq3j7eEX6AU2XY8bRLoV2VwZZ52ALcjU8waw4TW2rybKjGw",
  "key29": "3yVUpu3dqdXEms3g69cqfBvpQExARTTTNznpD1BU2etSEon8t9zKyqDpemkh5Q8jPnh9DuPaPmYLkKx7iRvaGEGC",
  "key30": "4BeyfLp8u36imB3o4dAeCkcGLFqJJ1YYkpwqcgUdcjw63veXEVBWQ98wk6YkbMzaWPeLG2y9QFwMGconpPi3fD4",
  "key31": "3prgfcNL5DViHN7xXFoDDNLJt3A89kp9qSa1BV6qgAJ3hFQapbBkGZA8nGBZqXsk4E4AyDFuLtATXvkQ1S6GNPSV",
  "key32": "4reuy7xRkyokutpUCUnNMyMbXy8i5Mqq8az48ta9wTPM8kz1xbvjYcV1ZPh6SCXywsJh1RrGmSV3L27Amn1KZCpj",
  "key33": "29nPqw1eab2oEanLdKX2DYbrW6GR1H1PYF2BhV1vU3rzkLCVmY6BpeEDMqqw7jH9ThohiQoHz1DUkVc5w8GdvKGk",
  "key34": "3vQ7hDCRJA1NP8V9NxKgdA9Y5iF54uUKwT9GH2xUPr7G7YkPxvMiybKcxfLe244WREgjkWa6LMAjUDSPwkDdtUsC",
  "key35": "3VAhE5d2H6y58J8jVj4RsxxPP7oqrGAZPzNo7Sj4PNjx7iunof7pk3fDqpGbik4cggCS7K8opA5v3oQKZSrMUYN4",
  "key36": "5ZpxoDit6AkdJVkyLk1H4Htn5Fuc9Hs1ypg46wqMdU6pW5u3ZuVayqjZZDPvW3jX7gL6DcC9DyfrjxN9T3ohtbC",
  "key37": "cP7ESAmnjoNJh4S2vkyzc1NHf9zubKGgS5LKfkbzs6cwuTMgGc7JNLfi922hP2fbSPYMjTX7fEJeFNizJf1GT6W",
  "key38": "3SvnZsUEFdnwMUxgSZj3FR9BiSmqYoDJzjRmoddJX45yDTdcMdrVXDoRSwRbrhtzT6QHrrxmQ9EUaP3bXFK4fAbh",
  "key39": "4ReqTPV6NCjEQwK2HGL52vm8bnPYByiFieGcAdvrNZjAaxCmoAiUahikBg8sXZvozUTwcqUutPPLKhFkCpp4jLq5",
  "key40": "5EA5XGaMWmkaT95FCVNWnW8YnYWLoeQv7ji7GtP1rFwN98TpehgXedmYxtLCYEjh2p2qSeZCHJi3XUoGYFRiNdY7",
  "key41": "3TecAjkq8o1jYWJWKFT1UQr3iTXd8PbLeaVkakjafP9UtyJiKEZT12ywaS5zqehFojHRh1c2Kqja66VwXEwKjC5K",
  "key42": "4SfdyYNwonSt5kP1mHAyiFoErJ2Kd59H88tTR4vTenSZSpKu8tPuQb1pa1HvH6niksrS5B5MZCzMMCJWmRZs3Wqm",
  "key43": "jujp4wk5MrjyKa6JwD8GgTJUW7FEhMfE5Uj4ni3jcJxfRqMMQS6p3VMcaaZjyvLNM24Hha5JQeaRspTZEJuHZTJ",
  "key44": "4A48soqEqThiyfNX8S7Lw13LTL7GDwb4fvJc5yrH5hhaqP96vYtYRXcj3poBmCt4Jx5EH1ecgahsYK6fs1ZFnv6r",
  "key45": "uD5gXijz9FnvpRvmMn8PGDomP38yxamcmZVyCGLPrRNe4NW9QjaFZDeYSRzZDPk9R46QRch8sitWEkh4biDJupk",
  "key46": "TD5nUZhpf2d6mQ5mMkXjXn6q1LDGnWhUMw9Gy8CRqBUgHhS2SDFDJnpFsLKLRvyX1d5LfVqyPdN9tHCKMSHyuS2"
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
