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
    "5dmPGx5JvmfFtDrLy8kVLYxtyeA3qfre8GQmwQ1qynNpKjX2FZHZ2DvkTYqh885iZhDhpgHS5knhXTiDhYnGucq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q67RbG114woCxDSko8hormBQ3M4UQ74DczarPjCBvjc7Q6xssVho6DW9jh7ovd6A7KPPfWuDkoq5kiNYAMDoKp4",
  "key1": "3M81bNYkV2FQKZY9UpVuEW6ErHrXvgPv2hgh767ME3yDhdsfMXLxqN1ofXiqmtQaaxsKxUq5hwiNNbFu6S7SBzga",
  "key2": "61fhfa4LgQeqEX5cQ2tdjWCxBE6wTd2dYLdViNoqtm2Y5XZ6McHNjSs1bAA3wviG8JJjCnw8sNdNyhVirvTNkV4S",
  "key3": "4pwDKNPbduB1GiV8mijdErtnDk4ceRHaexrPs497aFP7h5y96rP6ro2ma2ma8V8XgVXZDJdvJuVAGCRZ5th79hy",
  "key4": "FAAc5uNXbG8TL7ne9VfgB4qNFD9uPwDZyG9WNBMEJhYREaNgxraXTyBqbVszq3kUQvbhoLJxBRr8yvNtNSBozRw",
  "key5": "2bWfyEA1gCBJmHDmVjgzQwj8L7Tqy6v9S8X5fFSigPbiWLpCKc3T7py658ACsByqpKhqH3QePQAfAkWfCLy19HRL",
  "key6": "fn9HUwXHAxLVFXNxPwrETUV9GSNd4jZTwCAgeNYCD9aSj1q1opkFTxPozXRV38jjYoJX5BvSTB2pHbxWfvLMzGR",
  "key7": "31suoDSB6xCTFhLNA3fijNbQE6JrKv4ZbAHaTY7b3aZb1bzYeC5HUykQb8NgsJoz98124qP2kQ49PtY3QHsfJU1p",
  "key8": "3jcfk34K7McWqScj3Q9rVYXMUg1yBj777MhanY4tvk6mAgrvE7UasTF9BjduqSJHMt6kZyHGU1CMktNyyG5nyxAD",
  "key9": "x6V8wbz6S6yZr4gwiBJXn69ofX7oDbniwLH724hKvm861SGpVGCy7T5oWiBX6e2uaQK7sNK3Wj5xLzRhb6jMQSB",
  "key10": "5egqswV8teCyRLrWNxUxThYmjPaeXLb3SQofEBJbKKXJjsT5DKFfkP8mKmJFCNwQz5irDbHSsGfuRHZDeeSrucnZ",
  "key11": "NNCEpodpYNTAuuUgGrfdeGRup7H6mASK4xb8fwUCsKgK9EVsEVV547KxKtEt2pRaeCGjXLX4rX4dNDo74W8eywt",
  "key12": "4QXjNDd2VbcWvF5gEPTzrUvGUrmF7NyXeUJa4U1uqFJVcsYAAZuDAK6ZMBjrtQbvQYGFAfHVwdTP1qurSXPnP1U8",
  "key13": "3HyUgza7efdjEbpTJqzyQgLcmXJbeV5GcgzhUajZnWF4RrExtgjq4tebuXDPTvDmKf2CVUueyD3qq799aRxB6hGu",
  "key14": "3ktqezNLcUuHKCrXf2ZMY28WR9N9xqeoF1szCfvxBjRoT7FB7UhXVBkUVvaDvAUb6XJJCxQu2G8iC7N3ZJuBTYKD",
  "key15": "3ANFDdjuZb745VoVHmAiGa5BbE5qao7i9dvSXU1CctKjUheboFA9SLexJwb3XFtbd64haJAqgpoEKE6Xn3EcYLSd",
  "key16": "3hgK6oD1a3m2WBbA6SPw3z8ZuXgxSRkTKgrRD2ZDjh8o7AMrCkziZs16JajKW1eyVQZksigEyK3UgnacK41M85gL",
  "key17": "4qokhqaGntghr5CXqR5BTTgstSJyHkRbj34UBFLSDghSqWpyFEZWLMrMFuEWd3RQ7FtABVjTLAXWeqmjREbhxwK",
  "key18": "446VfY2FKUd5ixnYe1NSN3hKdT5cC61Ayj7fkZWdET67LvV7n2ydjomBcjCnDzMcsqqCPfpP9B4GJ3GV6f9zRHij",
  "key19": "WQeAFdG1K3i4SUW6yTG5rYpuHnT6QF7i6sfp9VUNpRrm1fsJtBg8goVHUkqTRMAnZAFbxmHTne2GzyDLYbBZRw4",
  "key20": "2Bt66n5oCwDXyZFvz92VwK2w1RFZUXE2SbGL7bfx3vHrsLQM7LyinW7tov1QpLPZjbURnFXsvRCw2kqZR1M5UHoC",
  "key21": "2v1799husAHg8L8yXVv21wuVkKHxFSuTZwttPayjaFD8MFhJ8dpbP3d3w53rfu5xmvgY4GSfjawBm2nbycpcaFtW",
  "key22": "ToY92SCaVNTLTAyt5eBeh3kizaoNjEU2q6y4FdGGcGVvRoy63TzpF4DKUdDHJqvv3HgycxodvNL8Qp4uKA1SQqj",
  "key23": "zBZNukS5Ykrh3dJpLriZoqVNgsysTVqfL5x49LsS8ShdCahWcEhbkddyXb3rZxsDfeQLbqeTHEs8Ann6ZDRCQhb",
  "key24": "3RpgiPUTr1f2QieqWmCzvaFuJFuQDUo7VyxDjihLfjq4prJGR7YFz6XujmcUGtq9GfDz8hD5xtyaaxSiB6vTpfmr",
  "key25": "2yF9SS1duLquYUTAMoFeuArtKm8TrB15DqtoqXpfc4CzbL9PJatDYnLxkphqBWECEp4HQSkMC3fPnztfX3EWseKi",
  "key26": "gx8xYgFt2db96xFNWb1SqcmFygPbcyDjJKsiUjpk9PC6HSG8rM3n3ePjuwu6tiyAAcrevuE7JNequJgJqME3ZYU",
  "key27": "UEhKci9gjUmND1huoFfGGC4bzHxVsqthtVouxwAxhcdL24MFCZkM3WMQuhVgtSu7E9fV6is1C5gefpXgibAEZWP",
  "key28": "4HrGKq8bMgFGA5j8yTfS3iqgn2CppMxVc7xtfMbNYrpwyB8LiJ6W3osaaVQ4o9J7ymNX2dv3yqWEEYquRNWYpkCi",
  "key29": "3CbRZcvM6ktCB1iq3g6E6C2h4YdRcJaWLgokuKDhVB32vTSSBcouabC6pz3nabM3koRx41ppdLnRrGqmzTqMBR7i",
  "key30": "3LzDnBEPxdexXaU3G4UpDuNJhKFadzk4XVdBH1vgTLHqFFd8H1omzZ3Nr5nxoyUD3YQC8oW9VF7vWy2q9NPPBXMY",
  "key31": "5bsBfuHksDy7WMQKgJjrt3ouyPLRXv4vKoW9EsMM31NSYoe3bH5gsQxvK9mUpCeu45CfRaiffam8pRQJQ13fJ4xh",
  "key32": "3CMMihNzcX4MyFx6ZRBJKB9gznATu5AVGYmVNAtHcc7FCAP4JwXC9ZFf5UgNBEw6omHDi8sUECc27DjypLA68ye4",
  "key33": "GGEhUTZTYtiAXCaijVo9WhLXCk1faCDmZXtXjzwWpn2MdP1YoacGZxN6tpg8avDpmUmFERnAX8pvgLULbrQi5be",
  "key34": "3h22A9b1oFWuhKWst3DY7BYr6cSgmeR3Y6w3UVQ2XvEoALyYGLEhwpKKrqkwZbSoou5nvTV2jh7vbKUBMt97eo74",
  "key35": "5nMfkrmrxFF8o6nPsecQNb1mqyEBf6u54repzCe1yCuPBy7vMwppb2wRapgnC56bQxTKX5VZSAhN65NgrxkAJQND",
  "key36": "2jv2CHZ2QZWvjH1crMKb5QGKZvyTpNcTnLNpcwJY6pSQrobGx4jyPi9q9patxhjuwjojH1uaJjY1he1MEuyYHM5w",
  "key37": "3wBpZz2jdqeeT62sjJNTQj12ULiFyR9SgKLe9JMMNtiWKfshW8pNyqajSTDmiLWgwbUpRLVbTo6uhj67b3vhc957",
  "key38": "49LcjpenZB3gnwpLgpSxkMBnHXDeuLuezozhmN38W1wmTUF3wGswwFg9jw9bM97MKUyrbpfpsCePbuSnJwEbDknr",
  "key39": "5MhtkEJQv1CmaQ8GMkMGFtW1FBwwrnsaZ2xXBSDMSzBUWnfjBaA5KgD1bK6ksMv4nBnVF35uHRUCbgvmB3RL6QUQ",
  "key40": "3j7agsXsgzGU4a1H2Mh5LVPyGFYYwHGb8Lm6RyxkuwuuwLu4A1g2apG9eP4oMgdNZa6o4jkA95V7HDrL2icy1PP5",
  "key41": "3eNDUJncAxNhp1nfv338KqMnc2gVfDgVErwwS2QYEQgupPv5BiCgmirGiBru2LWXFWoxgVTUu5Tj5cZWdwjfkaCW",
  "key42": "2notXQDb3dXN2KfQHvbNbNzBxnbVZMw6dQuEoxeKt6KEjeHjr5D1x1dQYHfjFW95ecxkfsdXSX7gNhtiL6Et9GtG",
  "key43": "2eN23x6LVnF1krN5BhVKRc2SyE4K4UAJfQRxq2JNUm4tmwTXfUvhSL5uqC9hMrRzw7BuLRfxFqw3kerhKnuNshmf",
  "key44": "2Wc55Q8iapDG6AwhosJ4PSghQ9bLjkbhn3GsRpXJ7Feph1BJCRDA6Va8vcJGmAkcggbnbDiuyyg8C8i7Myk7rxEd",
  "key45": "3MqF86iqpvhziyRiX8ue2fZotFAZTN8mji3MwyYoJKDBLoi1qpdc8mhqVQr3qz39mwFZQvp3K6sUpCct5icpXjA4"
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
