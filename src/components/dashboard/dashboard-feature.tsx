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
    "3mXhLfNRALwMTc6f7eStZVsE5DYvkxfYi9AQxsVP7ee87ChchiXKQiJToswjvsj6EdCnHrZQRoQzpeAnPEshRKiY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eWXyYo3eQDF8StTk5gfGAYSDJpiC2FHZummYMRstfvvXjjTY5aQ77PQSgFk5ZENSxu24rGAW3mVx6F1q2whSeD8",
  "key1": "Q1EJLwHUUYph1MZYsr1dDx7vHo7tnTLMfT6uxhtpH2SDT7xGBDjf2a73HQNa8H8ZP7CRuKrNofs9YRPFBBEUTa3",
  "key2": "3S4HYUe9Z6cHKAv1wzjb4xWsVQPuNfTC1Votk899JXkncGs1oq5PLfnE8xdapT37vnN48tnmr3rrsbaAcDc3iriA",
  "key3": "3fkoNeVsbhNs8MiZSoftRJj7L8z7BiSZMUzS29uat9HiwqhSj9YonumVsdGjqCLfaUTSEJc79WQuHsZekJqYBPRH",
  "key4": "3igS5KtDZZ22BcKFPJXfrLUgzxwb7kgNUoeqSHZ8LW1H7ge3QSWgcXuNpGdSJuRphLXuMY17PBVuS4uNNcKw2obb",
  "key5": "336drv5T7us66ygAj8axrmhXaa6JVCjuBhxDvgLhi5c4xqeiHcCTnQ44W1A3BxkSJiVi7YAi4A1Tr5ekcC1QhJfd",
  "key6": "4Vm33z8tiMVSbjpb9NB5bkzpATDFmvwPnbAFPMbnzD9fpQVn3AATp4eEJWwi9siXbcSQmxvPQ4g8X7TS6SkBeRVC",
  "key7": "21DuejFhzjVFN9owXrRpHUK4SD7mn1zcXHqrLfMgfWwVYXBE8mQAukogFNKj9N2fH7aVZ7EzgThHZccz3Y3n2yk3",
  "key8": "65twZiu3HVyA2ihEwfb9thVpsqKiKqenWQsXXdMUqSXuojLLHh7tXzm8NU8LLH6pYkdakCYJ1NLh8aB9rhWHpETh",
  "key9": "5K2XV3wduqu2WPtYNMETUVzKEf3XPM325TL3wTyYeei8TZRQvkbBBPyTd91KnMJSyoq5gzgFxvbuMEY3hcAXn7WZ",
  "key10": "3S8odikYtFQ7UYaoyFe1Vpb6rydA3vYkLeaLwF3AKfnkVDHeWacNwE28n88SUU4rR6jCDwXWr1abdn57EwFYAyqE",
  "key11": "66LCxGbN89x6c46Nf7iySKdxRgc5vtEpvbFajc2g7B6jgPFdR4SEnY2wi2b3fdjEyKQx1gcL3sDAzs1yK9gsAhQz",
  "key12": "2uZ6gZF4iPvitqu6L5PRyA193WrnkCspUkMBR9YredEEHtR9r6QJvPphmQuQLr6QgNNnZJda9MCVLy8yQm27NxmM",
  "key13": "36CesRqc1NqpZvos77Qxaqphx6qpmk3vozwXQckkZeBq4CUQEjjhvMtDk2VQefTxQaiALBPV8qAvX7HTdQGdbywA",
  "key14": "4p97HoCQQL1LW4Lu2a8o76KrCd4bTUjuvzfQjnGByGXw9DW5peaSbyZuWKAS4ns2EK4mhAkodCa61FvgwMk1cdVV",
  "key15": "4oNbyqdJ7kykJXK1oBk8bfAz5P5Jcho3bayxKvtotAXFNBNX51wNnJGCFDMHqDkKxUtpMCXcTQNtV2R541nbbUBf",
  "key16": "4c2KoSAZ1gvYrhtM3Acd4RekSNDFdXSkdwzKQqACz3Xq8xjoUFwLJfXbLJUsWThZuSBX7cKX4pyRECucLSEqbNt8",
  "key17": "2GoWGtKQUD2CPGM2eQD1RHq7JJEuJLeMQn53Vzn5yghhkPF7H5GaKyRshaFSf3MPC2SKNHbnF54WJ9py7hZ7bqGh",
  "key18": "6kfQRYJrDmz7tq6JVtj1nGGJnfPsgqn73ywHy55khxTdNAcyo8WK1NL2eLpie4XWpqA2ZBa3Dbycsq3GDvLutV6",
  "key19": "GrrbPj4KMKPPf785dZijCc7ArCYJqmpdfZLf7rUXjVqDWRXx3xsXncEKwZ5rDVe7EXnFVkSTMFsqBmDd5kth8NM",
  "key20": "3p6oLsgQcmFK7NXtbuuB9LbPVd3AbPqdnEG5ZKdaGm2M5PvqEMp5EBBAvhw77X3gesGcJsQUJyiUHNYfqk8pHWms",
  "key21": "5TTbDUQibpYqqMfLpbt2SbmzwhSS3WsGQ1h1GyDg3fnERbVLTSfvEHSsUPK4dxRC5urB1p42P6azc2ohcxM8rjop",
  "key22": "3wcroFkwDEFNH5K21efRo3WRt3WCLDvBs9nqqhAmkqTXyq9tK7ygc88sX7et9vruFnivLRmGTqoCkr41y3JgPNys",
  "key23": "4A6y6WV1PDnYgAL298YNiWKPCR4tqKoDabQVfM8audXccQXiKN8C9WBe8NbnXYBQ4yUktAp2ZNBy1NZVsH2dxNon",
  "key24": "4ZhnsUgkqitj3hfRiqPbuDCQERvVfFCJyvZ9s1iDMBiHo3cD7odcA7EntJJAApr1zfj3fVzvmAQ5DKJWurUDV1Xw",
  "key25": "B4VFRQTMZqt1pPXwrHbHvDuB8ZbzhXEvjqURJzzHeRABVWcTYoyATwW1sESvZLNJzKS6yFBqBcqTaVSycvcwJZs",
  "key26": "47DZX74iBAQXPDJGfRe4Sjq5GPQM4Ve24oZ2kve1U12YVpRePeZk8tt95umHqeeaLtgvKNDKWAkLqpgKzAE181r7",
  "key27": "3Ec3d9W3zGNWftbq69B3mYBaPveNFF2jFzxajPBL5NJd2LGEtnMVz8QCEJ9Lxx92X6cGpNMxosD1jJN2o4LXKmd2",
  "key28": "3wQzVjRZBzUSpGsjroFpZUY7X7zZqVrf626kofsY1TyBEb6zhbSAvTD1a3L1XLXvVCCw9yNm9dfxYyTgaQj2ifrG",
  "key29": "3ZAPgtaL6Q4yKL5E3HmN5XsuGnfmKMza262U3xBDFGmR8oY2ZE1KQN28SexDRy4GvzZazAkqDyUZmSBawFVPCVqt",
  "key30": "5WpmPmQgoDR4QMdmmAmMx2yVHyjv9QxQXrJi9M8VkXWP41saZs4PEUw7GLtGrak16iHww9VsqnzRFJqpC9Xw1NfQ",
  "key31": "46wS4n6CZpsb63L2uHpLj242CKoUnNAyzeaxt7DeT84wXSw5BRDnatWECz8rCqsusBukZss9fGV6Zj5fkCLT7HUc",
  "key32": "2zn4GXuAr6U78YZ9jh8bhRcqvzRxTEXo3fCYbLoetuBKaPDxoGJTbkTdr8Y2RGKeNVBG1WyFfspMEEVzzHFb57qG",
  "key33": "5bBghmdT4EsqqtXPGLKG7DK6LpvcWMrwx9z3S7LgQtuQ55NgHbreH1JJbawH62pPkYSFHbjyysqgreUbDndKaWZu",
  "key34": "3KMpdaZSFjETj5QQyCT49ufnDRwUjMHQgRGbX38cp5ZeWiDByhwsXD6gpLFvinNeENaZM7K5ZUnRMuV5k64BCdTR",
  "key35": "2uAAEBuEVewkS3WarhTULcC6cDqJB3BytoHJqDTnYFe8RXPoAuG2yAu8jjq75F8gnMfUHrtTmVi1Z8xJzYrg5Kev",
  "key36": "3b7zvoDeHLg4LkAPa7Twv52BLxBDQBSqHne1waVX4JznEULGSwzTJwj9LvykrbgyQhPCyJcatHgJ1QYmyPA4jezD",
  "key37": "2wz7BdpzwfiUyudquEC4gKHMZoVzE3ztYjGNmrAcZAM5fqQwLuiYSpAS8BtRcPV2XrXZMLvd4QoWmmHp41Dknkf1",
  "key38": "3oA63Dxzk8qDvD94z6Mb5Dof9CvBAETedYMXk9qnFYHXZ5m1VGLC6zsXegdfEQinf7cX6ku1VcqoNhnNnBkp2JeZ",
  "key39": "2uqsJYM5w2G1BzbryuWf5U7pRQQ4y5ize1TPZkVgEdGMSBcMizyEbxdgsxWkvp6ixJUkbeQjpbgZDo94E7ATzyp8",
  "key40": "5zskJ7wU1tY7QhpaCHqKzoUHzwTbKMKJZvuG49Hy9CDVsNG7kLftEjLHvcqnbJFzZCDdynuiPmvYGixtmk9qYDFr",
  "key41": "2zk6AaHcGAwc1i7tEyueTyEDnWMCCJGfVQcHMamEJUWhHMH1JDWCAnBt5CzEysM9Btns5HwiCKqAmHg62bf3kt2X",
  "key42": "4qLL9sVVMXYw2HSLhRXJJsLHcZrPZewvuiBWi8KnQzR6P2jUQiJ9uVqK9NyrHMgmpPceovwEeZ3ABgUKAjLteUDv",
  "key43": "4WpnC8rN4UqN7b7cHotjQSYFf4Rf9Xr5HpndNk64o6q3v4MsxHvr1YbnYEpUpDnY4cxcXtxmvFVUahST6sofeK19",
  "key44": "3eq6yFngqz3pqTckQwC7z2CDVzbjJyBRyKS3MDT6aN7cfFmoq3YNd1168GyRcu9ZwrPxCXLTzfmDXt2LkoRfwreb",
  "key45": "64QHivgZaZvrKrjxyZ6hP7n6oqPpsBD5XQYkAovfUA6Mhqz9q5NKgT18XkArxgs8aSZycywW3feZBz8Rqs8Udk9e",
  "key46": "2HTAPMLcKijDdNb9xW9KVNT8VaCsP6HYmQcCty4FM2C3hXCQdiQuQrgv1zZYVDMqaLWuyx3PHHRPd5eiFnfEZTqd"
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
