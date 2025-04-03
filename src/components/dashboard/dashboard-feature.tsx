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
    "3odVax6Jpn39C1Wv7hfbG2CKTQj2nqtxuFwqdDdixJEKGU1TjtJJErUxFEcaZE31faLwSG2kdf4bDiJjyQDGdYbD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47hSarnftDJD5LzpNP9AGvfEXyyAHHo8ypL8F9Xe4patCPs24CTdERZWQ8TyEuVrUScZbotmv4aLUiH7RK5Piksi",
  "key1": "4MeXpqeZZNkwkuAjb5qyjRmTrYDx92ge1vhDGbnPA9rUU1DMsYGyk2xTbyirpt7ryv2ZkeupXN4zyusX6ZCpLwnr",
  "key2": "28XrU2Sdd2FEmt49WsZZRmsc2Ac91MiSsWykSdkfnZ6cr1ufq4ZRb4UFeUqU9ZNyigMqTZ4LekVmeJ2MF1CMEAhp",
  "key3": "2bmV6KAxKTNHhDeAWHsBwfE26QRiyiYkg8xUqnnCCaBd5JWgyvngZkFqoZASFyAvhAQDA8DeojZU7LZQFarhgmWP",
  "key4": "3fAHUL2jhEqMsL1o3aPJHzzvLFzijrki2JHY4J9wmUEq9SN5bAS6GWzG5ccoH8277QgZuGgRcEQo6hEihLwPTw7E",
  "key5": "5Lr6xex3WbXKY5XWRdySjUQPhKYVtbtR32LhLLb1wHA8E14ManmZjDGWpKUJwkTZEEJbQLrNpmu7QtczYYa95vv8",
  "key6": "5peaRRjQBoMRHBHfjr3LQcDipqNDzoJU1jjGrpigogcrubNFPuzgCDyWfzEek6Jaus6N3HUuzYdU8BMELEMLCjFi",
  "key7": "2mg1p2Duu2wr6CPfTZktzGLLUBNXYcv6gyJyaEWzTXJypRWa6Q9hsT3HHQVVKGNHE9xNLEZy1Wa1PWECoDqpEaQk",
  "key8": "3tTmz9jDGVXFeqzcVBPTmVVy11NWDP7wkYbL4VisAtmvw5HddxsyEWWj83Z7a5sSUe966uoGZhyRuxbzdfVc1kgf",
  "key9": "4zNRfiLiWW7vsteVPyGsmdgcg5y24vrhAXhojoW1BiQwXANbXqRkFXnCwxJZaVtQdAqVCcBQyL95UgJdexHitUTs",
  "key10": "3VxLa5FE93jbtAoKUkkzr47FN24WcJfctnnTHA8SGXDVXqM8LRXVtFCy2jqrw3nwcc9EL3ViAQQXWww7HhWpEzHR",
  "key11": "4m6wcYwpdPYhKbdxDAmmCLUp5mZrVsLSeU3ehnnJab37suVq1Tra6D3gGmYZuDSyPPDsNWL8ghTE22jJMurhjkyz",
  "key12": "4tmkTkhBaihypcBFpyHtnGTKLGaDRYPL7P23gvErrhoVkjJCG9HNceqS5bB6oyRt5jjXHxtZsk4SzWbtDTBKQKnW",
  "key13": "4yGm2uMt3Q3CvU8NAdjVR35sonrVNp1kMGfJW2SSzQ5SHx2PVpm2W4ikenkktg1SdCsiVaTHw6MjMdJsHsK83AsY",
  "key14": "5L8FuJpwAjz5Xce6D28X7cfipM87XSA3asAFmqzdXKJUvDCGxfMxavEfGBUPwRTT2ZP3PVgWApqFkGyXA4pF865K",
  "key15": "5eePK6EksgBFXYnyFtbWzEiCJCzeaPK77LYJ1gpJVjzAGTJQYFByN39X7TcBJvRrvk7U18fqwvQyZXHKq5vG6pJH",
  "key16": "etAmKLDstJd9GMEGt8LWJAEVSheemVChGutWLX2UMqF4pzCoVbd66s2nwySdG2afJC3MrEbM5w5Ba5xJ7K3rEuo",
  "key17": "V9VEHQPtwKHeVJgKgU7r4smhCMmW7nUqrnMXXAYHNiHjEA21MRbXMadxofmq2LBWkogxVTWTmwwhnafks6MjEed",
  "key18": "3EJnHiTR1MSA7G8t8u2kRNqWc87W64gr3aMDDZYA2d1JgSHE35nkCTn4RZKxiT9Uytw5VJXXHKN6cLZonTnRzff1",
  "key19": "3d9Z3qS6WDrZQSsWdi6HM6LBsje3n7rJGDp7dKL1AFsUck5YdCanrcZKciHctMgQtCzubfdeMLg8i31UsXNy74xm",
  "key20": "3JGA14s1YBxqHtSgQAzhogtm5jUYNr6aETdfxwR48LUBzfAYBMpiEiV5qjHz1BEPSkqKWk9nLufjdvQAhSY7PqsF",
  "key21": "5WbaqMpptcMqPojw9fQ5npLh64s1AUEhyjpujajyAxbM7fEQAH5T4FvXD8dFxrnmSkifj9A2TdePULty1uDbnUox",
  "key22": "2WoNv4q3Dh6ZaUWXxicGbL3BqpBJN7u1BH4McuwrVL78LLm5hofpSz54ZzHhaHFUxEU2Aqmxrux49TyHPyc6JVFu",
  "key23": "pUBB4Bd17nCVGzu5NChh5eCq46XmqkiZ9QNG1w8mmLz7xwEA9PzHu42nRfhm5sTy6Z3kpx9uC3BbonXXuAUXf6M",
  "key24": "4qbP6WxrvE8UwQ9BsE1VDr5SMq9fXs4DFfF8efwbutJKmJF8Tr7FSbZXtoA1AWQQPy4zGcRPwQn4xRzG2fEZDkAz",
  "key25": "37Gw6hjdFoyA5HRoToyrXY4Q4M7Hg7WmXEVc7ZSmXpL4VnLNk1P8GtmUim15Yj5zb3S6JM1jXQRqThij1vN1euzV",
  "key26": "5cvsL3ewzJXPYmC9VQ2WggrLDdwMHQpnbAi6esbwa7rC6AYpsT18X4nMBL3Wpj3jKYsc9wAcEqMZkfVRTipoNF8R",
  "key27": "4XqusmRRP8qrx8qEkWDeSkp5MmJmGUvDBj4EDEVAHuCnS8sWFFEqFTtvzhePksCbwTiefga2hKwnwZH4DyyeQ3EA",
  "key28": "4wqhW3CURgWZKnVXPQJvFdgsVByH6FmsQ26EfeduzJZPYr3skYeK3wZsn9AJKoRa3zss5oEeGAu9L9wQuMbWBNxE",
  "key29": "5GKF47wUkH2t47negi665RTYrTGQLU5GdzALWvhqSqfWh2nC5uUF6PVQYFK84sQUuwNZWEAiSs8nDeU3gx7aQx4t",
  "key30": "415Yvmknz4F5rELiuYxhYa8mKACh5PNGb2AF7tseZdussszo1gN7KLnMAxCATKempv5yAWWuRRVymqCqacSwKX3F",
  "key31": "3ioGg3wwnkf5GrfWjPYb1RAZX66VJB5mAPUnQz8J1x3TohWto4cKSZJnVZFJRR7c7jLS3YsDBgP4CJRs4m6pHf1v",
  "key32": "3Fbr4erxko28H4HyKYAb4QNQDyTAwLoQBjM2rnavqBynK4WzJNEn8DqGchnsxD9Cp375VS6egmVuet2w3cRVP9PQ",
  "key33": "4jL9DstzpddqxArWAaGT2qi8abQvNNJwoou7BQMfdnecaJ7LoBjvAYsWZQBzpRKEBN35TPKJ3k8TnVMg8uLpV3mr",
  "key34": "ZqNsdmrLC9hxVGxDWskuFfRTy31XuW2mB8KTekAsCpKGiuyrabp8NL33hYHhreXhBZvfmtEWCUUFnbtkN9oyjE9",
  "key35": "2V7V8cWErw3LjXhWPurisGCrjwsSbRPJDRZY4yCey6ZmgXPBPKeeaDuWJV1Kdk1vwAfbeievqu3Ex8dNa3JWcw8y",
  "key36": "624MwMP6L2rWJ459qDLrUQpfC1hCFo6P7KmXpPtxKRfMC8LrzUFtCWe3hXWHGTcqyU7bwCpcr8SJHRzyYk6dMJBY",
  "key37": "4UpPyXBRHiTrLsLZoiY5hcw7xc1aqw4NTRhenPoi9SwgueC3P2B7Twz7HCcsPaiNs54wbda6prS9b4h2vRJ6MxJq",
  "key38": "2ZRCgh4MciRPxpu5kYqPezwt8aWdC3sibd9e278zvjhM9eCcTpSWmYKZseo9PEQJnXs1dpfwnk3TkaFYYr3txVik",
  "key39": "kDg5aKUucpXRBHpvxQT8eVK7ByHbMyriSG3krizV1fn5XuUFM12Hie3ZgKHfJcFpAczwXDZ5DLhChVnrJ1WAk8A",
  "key40": "4ptyK25KWvQZgCvxp1uhosyTUvEkf8vgqzTRgkvJuVuJkkbXimkTzd3zuzsF539QYSthnPmqnSyg7SpCMnS5q5ic",
  "key41": "2hTiSLjptgV6YH8S6YzEb9Se51qLaBCvEqRhCm6Jbhrz8QYsu2HvQepR7m17b42ok2ZeVwx4BvkSqeCFQbP2iZcQ",
  "key42": "5uZngkM2sLRrqbeydo9DsPL5eya46YVw4ipgVn6e2EvAwHP8jEp1YbbbAwLaMMuYNBkw2QynUVAMd7fghdoxbanr",
  "key43": "79HqbkxmS6QGTR2TgSANLTb79iyhumqEqgDMaz3h7uMqutULBoQj2B7FS1Pfc6iBrp3oCkSaxpePKjpvZyXuZCM",
  "key44": "Wt94NANmodm8osawofetarAYPr75vgKPCgVunquoRDSk6R4wsEtRjrUtEGxbZrMwRYwd6LxWw6gNy9Qrkcj8xE4",
  "key45": "3bKqaa8gAbp9GCxHLXP6UkHgXryM11FnMcFxZNCxsJcy9SV2RCXk5nNWcEWFaD1dMRER5haFaxHYCqNwEiH4kA37",
  "key46": "ocy4sVNqka6XH6NHNgYawYuvP9nNT9ahuwsyZFiZZmw1kjtKRRCS9utJD9EwFhU1XFFnaB28x1FPZiS8msaq5UD"
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
