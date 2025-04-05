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
    "5gPp6AAZZd71BictSdfCiy4zq4n2X5WtaSEJA1o4UruLY77rWkCvx2N93dpfeNrfNmqmLvEzWcewHx1AJwZLoAmy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LmEQU6fzs92UNH1zMDqy4mNxR2DVFzGmkjfufDJ81bJHWXNrzi1qmrTFWFJvmsp7ceEZXmicST8rqj7cy3kLScc",
  "key1": "34JiQpSCL5KKGBV6nYrtVQoyDeHWinEKcmXRdyx2f4zZjMeoxZoMbRaPj4vYfFTC1JSFfuPSPiJtVwYebw39UsBt",
  "key2": "5ahVUcFmzsVJ9DqftpyYWYHjGtrUQ3yNvgBVAkwB7VaLnkvG6cH9RedBmizidqZ7hyLM7f5vqKKZyjz2j77uchLt",
  "key3": "4hix1xSTTsVFe5xMZ9ZmMFsdsFf6uNS7krmVXyUs5rsXPeKhB7qQ1WCJL9Rsc9d8rvuf3MtoihtdvrxdKGEzYVLG",
  "key4": "4TF6Cqx1L58UhedYGmZmKxfgQVrb87y4Rfux7TnnCGhESEYWG6VKVA95XF7PeHX6YPcTTjVKPmAg1PbHPJ2VC3PN",
  "key5": "3KyLeYuJ9BWPoMRvGTkMy5kd5ojw2EUvpBTBDPyatkF3hoHKrK8xdBweTuGqBwRGGEwbcBqrfuoLqZJJyxi5Taqs",
  "key6": "4rpPd8FMxi6CbJzWnbGbsKKUa8oTX1uyKEvmSnwz3t1mx9hN5fom7TkhjGTZ6pkpZwr4t34q6vPiUzpTSdXkTDEm",
  "key7": "4bbK9piLUnZKXbLDv74dyqxMsSrcSJRo6h6FU3nwoD1SU9YqcyY6KAAryMsxk3mUrDX54KDKaGJh6u4Vu4sxaKfW",
  "key8": "AH4xuoMsNojFSuxWoFaFDyG9pbMb8SytBy5XcBUZ8bXy4yPxuJmAEcSF6qjtZnoz86u4miSQqMfq8vu6T3zevji",
  "key9": "X8wzxHLcHmrtFwZcAWfv61ZfvkE9dBkB5kJVqUcgXS8fys9QgsZSEwkZ58UfPeh78fiotx1KTLx1oxTfWLkUkJa",
  "key10": "zMfTr6X35P8Pv1XwPh6wz55Bpx9RaD9LCoRRsMm234uCQtukqsevypx8FFbf8nQdE18ohDA82KehpUVwWYuHxqe",
  "key11": "uW3xypTwD8ep35icYMdMZRWnuAGd4t7R2CrmraSLqbZBRgfQMxaWAHHDtJ2VywSgeLan4fVQtUwCKnSgMgoyWWQ",
  "key12": "3idyt2F8Gk6xxoDSKryHPWLyxiAG3edbhGQgAEvcHBhXL5o4SPRhBbHwemQsnRh2ySp87h5G1niuGKfTN4va8HCX",
  "key13": "cB79SwtWVewPKXihCLQR5kvVTk1u4BHsefscMz4H43ARwn2FFSWYK721aiUTkrZqnhggxxhdTRBBryjZ2L1HBah",
  "key14": "2K3g7Vh6uMjeDApdruaEt82bobsXJnAAbbHMzrbBNyvwkhG1qtF9wXhMBgApyyVXcB379VosKhvJ5akAkvMiBk5N",
  "key15": "5nY4T5GumGyBgZYqua1KwH9vYjr6KNS1qogukiqACMCMHnGavsLjqbZ87ijueV4kMdXd2F3H7A3xneyGQbDXa699",
  "key16": "F6a1qX4iLr6CPZVSvoQJtJpJ3ZPjrkcL7gEckZGpjfCHmei1jSdvFrezSRai32jjqwwQvE1j76AV6bTMdT5HUVv",
  "key17": "3pKP8GcdRfCybRhYsfjYoQZrw2eUSpiTyAk76juhQN54oXwAPa63SeNYrp6KXmmVyKDiD4jVckJkkiQEmEPMKWsW",
  "key18": "55LtTc2eQKyjqWnTyZ4tCfouaksWL4ZC5jo7H9LmPyEdqDTqS9CQYqEBoVkGtiGxNNfP3D5GxUFpgSGYPaehsjVa",
  "key19": "2z6MDTf8WMSwK6Ujs4ajynhVab39Jwowj8rgGreDhFydAq9oRTrTne1pkNZM1CVAknkErj8f38Rj6mRyma4DE3iS",
  "key20": "2JS4UHsESn66MsSczU5VbBvAoFD45pe1YZsX3isPfRraaHPSLTx8pfewVJh1y7W5tCaqbePH23j8LzwDY7LWCbip",
  "key21": "mYnFev8wiE5jYr3qLcgw4d1feC83SbNLoMCezszh2rjM4M1HPYYhwjZdfcgppE8swdZ284dYeowk6N9PqvBJwd2",
  "key22": "7Fmweqd34uXWCs5BmhYzsGjhe6dncJEXDNB4i1d8nkVpMUCBSYwHGEPn52ypFicdJckDc66NRZGgNgUtKRMPSs8",
  "key23": "RFJ85uNJB9dXLcRg9p2UwhhFaTYCBMgfn3yJ8rtkvhG2SLT4xqv9XvNmppGxqMc3aQMF7PsDvdNVhDw1Rs9zYsp",
  "key24": "4GRxqXFvFRfRjsrMdf8eB6voaNxsXHJBzasAKsS3RVaMhhx7mjjC8UU1E4MvEeRq8N4RwkbtNKWV7NpjbeZ7jHCk",
  "key25": "5pEZHhkTxZsMcSyCSEmR9uibzbA2ddbgx2ticWeNy2FJFifdL1R1GpVKavLsjaxETgWrAc2P1dJBKbhGoGJdMmaG",
  "key26": "K6xgCfavH9UG28ZMKbSju6brJL9heYrRYfF6DDiTX9h7ALM5hcNEbhfU8FD7uGjYbv3zjZDW2CExjCxg4VFarRD",
  "key27": "4dn7z6ZQsBo9U8xoVD4yL33Arx9RDbbKmwjtkKqpTaxM28kzCXPsN4NfbTnw1BkAZnhJYU643Hndd5NaETJGafPg",
  "key28": "5LdmPUGKXHLdVTvnWufudaEXZyyZc2PE8i7BMqrrMChaiSiqvigWyexCfnYA5xKxXAcAakdpENCGYEt6DCHBUahB",
  "key29": "3eTv4C99ZMjcyuHkx9z6KDpt9ro2wznNGD8bWnVLKsr4bvuPt3kW5EdULg2HdwyfkPRfkbUcQfdEhjynEWyJUaqa",
  "key30": "3LdTYQu1ebG2aP8XBZzqSuVVnCmY2cTFEz2TsRxgB8MPW9tYbYh9GDYvsq22Sr1PjYRq2kouVu8Ch1TH1H7EaTSZ",
  "key31": "26fC5oyrR25Nc9EuLsfMdxs557anDyHB7kd1sBu7XcWsodwCEBs2Sg9xfGVJrr5NyhBuMQXEqYMgyGBWjPzgP185",
  "key32": "3TQ1ZnYRnjEwSM1DcGfpa7uZuhAcAZkTvZ9oDCNhsC4QCFje4eyTuo7t6QxLcBESkS6rnafFZj3NKT91HZMwM6hW",
  "key33": "2z1monFRdh989GesZwpXb5rpssLuBKkbQ2zmXn6nHu2oMcsjs9jmuXbeGR67UeidCamWj7rzp9tiRJx4QTe2uyeK",
  "key34": "2jZXyGGjXJLBAwk3WceVfPGhqjz8MRGJbZivb7DmP3pztBGjNTbpo3VgZGKZsXjaitdAHkaJhrYkYYiBSGjmWUwR",
  "key35": "2GKTzY1qkt9UEmFsERMXESjnaQ8hkwvhYqsuz4PxqLpWRqvUqiUCsp9sN4wcSSD9jgWk1wR96GdzzZ54QJJ6mB27",
  "key36": "AYWuKaMKDVJeQNvxkBAHS5Yxtm6r5qHEwhaYJzDF3cuFzNqtPVF58Z1dct9qBfskRDHUkUe7FJ399rrTJszpR41",
  "key37": "2RNebW7prFRXfgbWXhzwiBwgx1euXBDSmw2ce6ma7PEroieAJo1f673joZyYNPrynnkq2DjLVgnK1nauED6bfKBg",
  "key38": "66NtJWt879R29312JDDjUJCs5n1awahQc4kGHEjemsPSYTeZXjxTXUkpoJMoUTMWqfbh71S9H5N7c21H2Jhsm5LM",
  "key39": "KNwt5uitzEv9gFFpUFV4PhNSiimGBfFqnf3oXrn1aumcKZiDuebfuLG8GfpZn25qZdRczNb6HdgScQerSnyTD7U",
  "key40": "584vy5Bco9vrpX6auwYSYQf3Hd1uPTBcaWHHNxvX5mmhYbqzDLymNqCV5JxSmqNXNqZnkk1Gbj4gyWPd8YMdWk99",
  "key41": "56EJApuYTymuudvdUVjawiTZAoGa7AUyHNdqj2qvk9nrHYTBKY632kpCRB2YhVxEmAFSD9riEMY2JVYTdKDRkZSm",
  "key42": "3TwBaR9Go54SXW2UeTyUwhq5PShQGq9P59UXrjvcZDZqoSzpCMdDW3a5ZXoxzjfsBFTyMLLkksBehaA4VHZYP3S6",
  "key43": "5KAJs73FuaYrguw5BayAoRap8dHcEwafPuudsq9YnKf1KjDHtTmkQZuswB4Yjzn3Fsua7GrURSYKy6GwnPpZh9po",
  "key44": "zor6vJJEw4QgJj9EDn6cj1VbVJ5j7VnPk7y5tdpwUm5ZHioDYm9iwnJ6ZpyF6Wiuf2WiCbTLK6wspvHPwyQVtum",
  "key45": "jsdAiXPKeHkniGkKCpDJFZjjwFnRsPh6gxex2Xtmhc5MSZjrb4UtdQNjTdsqYX2ceyTqf3G2aMxPcDXt1VzAq1Y",
  "key46": "4Fy8N1g5BLXcrDHQMkFoW5TEgHF4oTfH3MoFEufZ8Y9gjg8uuYWgxsBF1YVz6C9ft7udtQzURfexm65ThxoSfPEk",
  "key47": "2nxeamFLqTyF4fUexqpg2U9FbqErTLhPUmF69L7styDopKTp7vw1A3rKeHTM1hxmWSCPjSRk4W1C4q9tM7QSZeee"
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
