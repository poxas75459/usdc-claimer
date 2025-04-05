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
    "4DPHz6uQBh6ReGc3Trog92MpTAa3Sd7ETtDbyQWvttJBdAJoeqZV31qam8Y6vRU4pzCRDS89VNtkYw3CvcqTgsq3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Egk5cdieQ7SDpKLk32f9JdX4QSNWWfN2UPf2n2FUA88ZjAFoth89bS2gFmz39ACACtwxGH2kTPcfMLo8KVfeiJG",
  "key1": "37TbVNPzvsuLvNNDF3qXRXpMRGAERVf3kMRRF89UMkuaFNxjZnrMoAM8oKe7vqYrRVhpTzptiqcYRDFqWTAS1fMi",
  "key2": "2ncHme5cpiPPkDvNRxtJwSwEGsYxJRcRaaXqqTyAgFhWpU7HKH2yxrhF9nFKPPfoyu1mnWDzxTJrfBr6hHTygt6G",
  "key3": "3yf8FhmN4ciaLwYU53AYmD1X6YvTensTjeKh5S77eA28eRh4NRdgnNNuwY8Vxxg2SHKHRKc2BYV6oee2bztpmBUZ",
  "key4": "2hJH5GqP8bVFpcYm3XNksnPAhBQwEnDstVto4affVamWU92pz9BbmSxXrQPm4iZeWfXCDa3ipXZjAj7JENFHAtbM",
  "key5": "Di6h5CrogxMGwi12kkiKvvJMMGWT2TQe9LQaR4c85p6gDPSeB7cHwnAjEZwTnFsUS8xxqwRjPzQmZ2AHiwVCGKN",
  "key6": "4RsLCvefryTeLMJqNBbuCQDwiADRvTDu4ZGWasqJmh5RsY8zefyZiJNbsijGcBS4NC8gQijwR5uAmXouGjWErEUT",
  "key7": "4XqweaHFGaWsCSthVxFFw3Bjt129xRPgak4VJ4QqWWvsHq8MLnEJzJNQ9MXaNsPiBNEs4T36ygsJ16Z8YczbsQm9",
  "key8": "BiwrPXvuzX9oB33jXC2XKaqBdLcKGjhK9z4jedA78hLAa2mv4Cw4WnMWA79TJ9XmStwhv4wcojRJXuVwCAWcZD5",
  "key9": "5tgoLK97bKf3FiGx95BoCTfiW8frhBGqEyKK4DWX17wuZe1yW3myJRBB65Ec9Kp391E9qseon41P1y9Bew6g3PYf",
  "key10": "2pmbgD4RXkKYWEH1zoAsZjE4BQtwZohptbmnzHBmj6s5L71vi7xCdfg61nD28j5KPapvqFgvsBnJ3f6Qu4nkEcuX",
  "key11": "2G7BNJSTQHLNEiZHQG2CeeehcRqF7SXTtANb33bSwjsijpoGsRUMmvfN8XJz3vLa97KFgY4x38pyi3oYeHB8zwVY",
  "key12": "2MxJGqNDG7RFFmDaDYRQzxXrgtrXFd6DThQWH8Y5CJEqdWPb7T4LGqn8BDmW55gYpqJCypGVJQo7WWHvoxWGBe9q",
  "key13": "4WK5Bkft7UFqtcnF8dMhokhWSNmJEMk419VDTL5N53boaZ2YqrWpt6c4tXkHUS8N4r2fPBSQXPuhyNqDxxUbJC93",
  "key14": "38xSNKSf2jo6HV7E2wScwLR9bscyGQct59DUPdqdQ1NrwXcdqKs6wjay8KtY2r8GyGtP7zs8eS8VBmhGdM4zhA8h",
  "key15": "2Kt7kS8EvYLGDfxHg9Wfx5p2az3QatkT9hg4i3RsSasf13fFRdXRxyfPwUm26GVTDDb2pudaV3rGtVeLoU2geRz6",
  "key16": "3bkJc3wafwrEP2uQchPZxqLndxNKzxNLoR4ZvDWiutrWU9P3sbgokGPhkERq9s79NudxteG7auhiQu46DDYSEWv3",
  "key17": "51cAM8fsmy3rwvPkSUe2w6zVsrKWssBmaqVNATzn5vW594vvHyq3TcgwqJ38K6Ttp8jmtiWb7sdJxNBcFxJPPvzA",
  "key18": "qFPXWUaMWkWemjkE85Dbr8nfYTw4ynUA47XCWZx2byveLe1zgAj175P5mmeRqCDtkPTCqQT9bZiFvQbXALvh13R",
  "key19": "5Pe8tZmKbYuHhP3cGHpCFYCejcyQU3LmSxYuLBTgubtS3rymGRQcVvx19cfSQDmrCTqKVjgaVnCHsXp6FXshTTAt",
  "key20": "Y7ie9UmFjvJ2NJT7b3Bz55HAXngFV3UZJ7HXoQcUSWk8TDbVH18Jhz6VzVrBgBSjmK2ibmq19tEX2Np6XWaawJS",
  "key21": "3KtVTF5pqjdoNT687FKSmTqpDQ7mJcc8tkeyXLChwJYVtuQj9B6yjxdssaFxoWeEnHwaF9yUxV5fE9ypNVmq5gy7",
  "key22": "4anaMAsZwz4WBbPawRz8nP8CCr6S2v1qvyYPXUyvAsCQq8Sr8sry2bqaxynDDgBB6mx5r1iDjnfz3vsCrrrkC9kz",
  "key23": "q8nSYGJjai7gMosjraA4pB9Se2qPsE7EfdpXhRVmz9SVRoKNVnW38wL3W9owHLgtag9zNy4HBKKHvCYtoFN8maN",
  "key24": "3TVGTRNJZWhbcYqBhoTcdAGEMmnBL4jYzkwhC5uENLQYbV3EnRqB6XgDAcbxbDsU7JDCSxFwNvA8dY59fZZbJdvB",
  "key25": "4pBTzRhBEG4nNoVffjQd3HB12u43Qtf51VVtoL9NkddZpBp2zwmsoPXEPrhFuevwLGJDxNHoQsXLdnWHmGM7MYzy",
  "key26": "8kM1XgzYCPYTRxygXJvqsSdTtrxMCT3cxXurdUgpozCHFsJgeDeRdVQgMhzj4CqjacBbjZ6iVHbd1SRds9JJBeR",
  "key27": "4i9B6AgTATK1dVtyH8f8UZeFYumS3YJLN3X3w9fseWphjD3wpKMv7ngQ4HnDgsCALNu5g91JRDz6drFhe4Y8riRa",
  "key28": "3PLUNtrnQVR2oG3XQcbzin6UtFMBz2YUADabznyNeTgh47T13ccTUzHiyDhGocmQNFXEHSYenf22dq2HuHMSWW5i",
  "key29": "4QovQ6LTX5XrprwsY3tgYPTmETCpyU7ZvnfyWWRwye8htqtM5Pq5x1iPMoJxdUBnBrMEPN6rgg9xToUJbdrxJgpF",
  "key30": "4YLstk2cvUvBPmcf1STtB7nubagjWptgHy9o1wRbYTh9b4YH5FngE6enkbkvQ5cZ2kThhEmh6G5tc45E4eXCsQd5",
  "key31": "58DE8uehSzCNCEYEhfc1sLPL7V4Kmgt4yw7pnUXrDM6EeFig5FxibFgFdAwYTg8DBfAtnXtR2AZZUZtmMPc6VxB5",
  "key32": "3sWJXTifm3FgyHAGNV6iKSbVC4wtpz4vZoFRuaACfbqbkLkwWdXoEEHfYRQEGziTeWzSVJYLkGavrxY5Mwi4PjUD",
  "key33": "4zrccvLDuDZDRnVimbHvL9TgLdqFNucTWGWjXWK6yVHATwSrsPkpYqiJywKM8ZgLx6Ed6cFrpfHCcAZYst7fWFQh",
  "key34": "4M6kaTeQzcgqpzejuYtkS2MjDmiUGQFc5nwysxdi8i7kABtjGHaZbi8H342CTJ5Ng7rzMNLcwkKQqv8hjAe9xDQP",
  "key35": "3R73JHL6G5uVYXDT46VA9PqyT9VUMKc6k2MbA1heyAy2G3d4XEC5A8Ar3vc7XPvbs7v9tzBaS4XN3ebRkd4pQj82",
  "key36": "4GoBeRg9L1SBNp8UrEgRakXvh9BFgpt27yheetnwBZMCBESwMeVhvcRhWoWx7tLYH9TiXCGMKBzxuLyZUZJ71bsZ"
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
