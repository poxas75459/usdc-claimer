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
    "5NH5Dk25UqYAyRi78NcH3EXaXyfjoRfJMJX8aGvWrde1jwBskr5jm2e2iieLuYmcFeofns4wrfL8ryyMiVnoEdwZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WxeaBYLgxifwLuqbDdjjscmXGcCdRMEBtvhWfEvMQjP3zTm5NdCk1VURhfVgA1HXAktnoT69b1aDQjZU5thzpNp",
  "key1": "3vquWCmCRiyqvDrcMV6Wj7ywo8BHb6buyeJjkVo423QRZQPXq58VcZvdMX9ipCxRCXSDo9L8sdTgc626yyWeGp7g",
  "key2": "3MSo2z3rAWJK5HnTU7rYUvjTvD9xUD3UBZR9AvyeJviFe7u2gzQMWgJ88GS2jRtLRKpW36hVccVCVQJiXyzvd9Gw",
  "key3": "4di6njuR4spXF3PJ6xUB23LPwN7uHj85132kb6EkC5F3LN17i66SvRirp8xMXzMT4EJPqW2h93Pu7k63s94dwGbS",
  "key4": "yWDAyJQmJ2t9M2hFZbGN2yZy3xnAUYA3MktFxPjq48cEb7TfQvfnBDhtpeVTczo2edzBRfY16rCnQ6Qz8DqXqey",
  "key5": "4JV5herbuyH3E9LAkbz6N9kEvezgX6qFsRd6WVaD6ZTQvFxEUcL7AQzoykr2fq6znMWpQaQsYTtjSkMtSgVPZXWp",
  "key6": "SaTKWc6kFKiRYhVmy4LKg8VHekqhiCJMYHycXuTvQNrGT4w5Ni6wnJbJsKMot8BCHGYdQ7ujQ3jHvRn7gnRJvTu",
  "key7": "KPksHZ3xTNd5gkd2k5pdA9Yo6hqqDamiy9ddpdoCVn8oVVdvNbvJcASJ8mYvRWFdgrvpFNYDF3fvBsZ2eygomYk",
  "key8": "2uyL4i1XXD7LVqXbgg352kg1c2Uv2XqHSmxGd7L48YVw9H7bTsF1zvsQzE1dRbshiFqxwmHJerJY7ot2bCLJXPaH",
  "key9": "3jgjAhMWpeMNAmBvrixJ8Mj3UEx3KCZhj7ZwGGsiYdFBdM81e1i3D2qGv4ZMWmyTaSaJXm1U6vgcHe2LgmRemNfs",
  "key10": "amVr1j99e4GTtTQTEkpjR6rjyUX71zUWeDufkiacBqSeR6SvMf1FrJCTK1yGXXHwna5jneStstCM5ip6AuSHHcU",
  "key11": "5XiBFdjTVLzVSurBxJsuALUzZ2W5irX8Y1BS48sq1Ta6m3yfHAqp3cLWTAFFDXhNumK7vXDgY7BZSAPkNXr8ELqB",
  "key12": "5s6UG78bapjAuwz6qkQzVSHLhuuoNUuxExeaKUX5Qcd5EuNgaZb5QKKuWWzexgcKb5VkUbQwvfhHLnCiSC66zyXX",
  "key13": "zxM53Qbig8CQFkPNGjkzsdYshUnBXnP8kDP9cGDqfhGc9WPx4iJPcSg1TYaszX6cUE7yXmF4NfEHwuUwddQd4xy",
  "key14": "2w6b3UXbadzkvQNARQuACdVc4TgHHQgAQKezFjxGmPrkFPEdE6GJnqUqKabpBbbYFijUhmW9ayf93naemGxgi94N",
  "key15": "5FRgbUwL7Sg8Wi5TMf7mZR2KXZ3EzMGMVdjLskeMqtaPx4tfgBb9xrT4ftErjM2tbWQuh2it4MMbreqCCdbvEcDg",
  "key16": "2Jzp5dKBGsHmJdVZS2WvK6UXdbT62Gj4Dg4Gsz5VbEEQBatbb3qnbZLL6ECj8w6ij8e1QgHbEAC5xWDi9Aijt3A3",
  "key17": "5vtUpw1JWdDxsczNB3aezwUtWVNnGeCMRPocpcc9KoBy1AKSqiqt84jZ9h96zd6tcpNSgPUCFqsuHSMPt5WJhb49",
  "key18": "3vBCuhaZ7LpP2nC3h5BM7LRo5oJTkf9csWFMzJDkhchGynQbWhukwDvFCMQBTfjRPw7UdPoGvbD698BiBFE4Sg8E",
  "key19": "5mMdbkoumkWJ8Bq5aKTBJr4fmdwmrGxG6ZKg4WNSLUjJoDYgXV4fazxr6SReZpD1vquWfqp4zJybPNj5a25KPd1o",
  "key20": "31jDkR9wQkaVUU4PSgbnnsUFf82WYVMRqyCbwDMwAQbj6JXRgP6t5jxMPbCz8gZSBxE4FjvLwzQ2YNXiJa7qBP49",
  "key21": "hyq3W2mxTpmh7a8YtTzQJ3bmAfbQMhVywd2Bh2SkqT4FD7AauNtVx3oDLKVCrQCp8pY6YcbEk7seM5ho2E4Dmiu",
  "key22": "59FWdC4tBdR35Fff8bMfdu5ck8tHyDjZEJW29QjPrbSYbgEVYyVCyKs1n9KRbktsc6ZsP552Mneyq1JeeTdVY45N",
  "key23": "4TRdFU6h9mZDLQpdxUp17Vw7Z1SJqnKGVnU5NthjG8M41tEmWHhWvxoSMhwGqpA6bnwPqyz7vaYiBqza9XqTtMzb",
  "key24": "u5hAyMv4mmhF1gPbMwBkGZeSMnNWLGL9R3uVfRJnAA95nhyJ3VqgcJaptZUetfdpxmujkKcQbERm5unChotEpaW",
  "key25": "5RRnbzCK2Hz2B4Put91xvPYmATSkNA8qkHUg4SBHuz326Rf1ovVdXptReageCYz35VUznUbz71aUSdGhhzwoyL8B",
  "key26": "2xHboo9DZwmVz5obALyThkU1ADPTfXE15GeXykTTAppS8skdNWG5PPZJPKKzys7K9AEsUTkwT7sDJzhw5dvDhbap",
  "key27": "4jupKu9fDj3o3h7i7XvWEdww2oh22VSoHRsz3QA23p5kuxQDtBpYKJUDjxNPZYYEtaCXHQJPtWuDsUmBJqeVodVh",
  "key28": "5RoLJ1oVxccT5u1tUg1LjTq8KVkkDJfeWfA1o5NbLWL9hsq4eHi1LJM1s2KsVaUyHDBHEPt9sa1AfwyuhBfahNjv",
  "key29": "2TtQQU55DAL31GvpYq8Mphp7gj8FAHXuYwR363x24ThKUGgHDBkzyM5jM8XPBx5zQhTqYJMNK957gAdp15vEKzRL",
  "key30": "2rzxVHB8WNC7zhubLDsVQPFQeAifeWyFcoMUSpkyA1gCCdueXZhKGee3grVymscoDQuyicoLY425mdanfwdE5Civ",
  "key31": "4yW77FuEV9BeQ2SUCXWu8uytpfvXHdF4VznKxcMZYePvNLyCa3iPyvhdQA62uAL9B6JsUsg5oXiSJUkPcFTazKN2",
  "key32": "enPwpSdnBVo57gG3s7Q1CabDoFSghNi1JHAkwzS4b6h7kR8LeMtNZrufeGxc3YHmigeNiwwwRHzFw3nVVmEDMSn",
  "key33": "2MzYrFi4i4ed8e4BTH7niWdvS21Bj2v8Xfw3jBTpXGgeghWSkcp1vwBtBgsErginvAKSMBaz1Swhh5rjgFUB7Qxy",
  "key34": "21tSXrnUni8SSS4tZpYSLk6SpssMSHnSqoFxfFXVH3Xg6vjtRZUr73uFM17S6kpJEeherF6JJFb6tWCB2B5AEsvf",
  "key35": "iGpmHHYpMtJE82LPzSFMeh1RErix9NQs92e9jAFx635QDheKZQ7dxog7RTF6ATyDLSuaAtiTqYpFgXm258rpDVk",
  "key36": "5eH6MJTHEdP8peS9pTNTsSP8o7rTdM4Md6n4FDT1NrXATzrUAZedckwwYAmSJ42a7gUd1DWAVtSE9CkVtgiTMbre",
  "key37": "5Kr3M5UXLqkCADQMZVw1vg7a7xZyxex9n8n8uAbbPzrmegFRXeiM31DsrhmMD6jTA8gHD5QuPTKKTXXPrsN9UQk4",
  "key38": "4AUBKf42cn6qw4e5BLUieWUWsXi8pGxBx3p7aqHNsNqGuggojS1qvzHzjz8Aghyc9GpiEULi7TRNobXfv7VhNh2R",
  "key39": "2uAoCM4FJHUHCB84hH5KaCZ7NrqFvwgBfN1toTDoz1RKawJPBCH5qnfvM8jPM1gB2HChg5TLUAqBns728Xv5wMK3",
  "key40": "51TqwTTaER7sjmw3oJXS8pEbtMFpQqmY1S3nBuDUZkyrhCAhZYJ6DEa5PYyRHM4jnkKc7fkW42haYAsa3nvXZGP1",
  "key41": "5dnzeBZnvoHbKiMFkNG1nr9wEbsuCtkqFAEHWyRayFwynK3FVMNmay5pQzJtNwjdqmoC2dCWo7xLYMhoZNX1mH4c",
  "key42": "AAkE9Sz8SjXHvcYenbHRkPLXTJHmCdvpvBW1wjYgokZXXhoper1aUtvQdSFarxmWT1yxnYGg5ma8JUHHxwYSjXG",
  "key43": "2jFwzC6ubZP71buFNcRRULfw7DaFiDjHZZQgC7qMtp6K7NkCBBy8PSJQaeuTSGvvMy4oPPUg78ixJ6HT6JF9EEot"
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
