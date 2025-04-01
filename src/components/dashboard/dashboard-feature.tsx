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
    "15Fmw89aTBdLdfHcqXY699CQeThjNywwN9hwTLuEDRixXJRYpFcHwsY5PsYEPi3JoFbT8Z8UMUPCDywyQDRCtt1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dkGBYvWUQzTSqcSkD6QBRwqzPTbKn3aQtnPZG322apMNDKgd5QCgbWAH9pn4j7L1CX8zSkdwXN5sPS7LuM5K1v7",
  "key1": "4zid5vuaqjnY2WNTjMFA97Qsq71jWsDECYC2u6iBCrwuywGQb2rfRvNdde5n8hrdkvdJUfraTHYSHAeutxg2gKkj",
  "key2": "nDhfWXBamTNXETjoRTd3cEBSnqU9DwrLYjUZvXP9uVGHD7Pkvcyzbj8CA52Sb22n8iwQeHruesYebYmPzA6wnc6",
  "key3": "nmpFFLxYHWjQhtNskpP4yYteXd7NdhkoYVzHwqkDAqCTai3nhifnRUNzmVd9q8CyYPViGMrGa6vSDZ1U3JCqkJW",
  "key4": "5DhgVfttWAtV4CQyUi4fbtjtveRDetnpFFChvwpKmWthgZeua7cHjCbFU9S2K6VStwkAYhX3A7Hn8QrMoW2LthAE",
  "key5": "9Q3Eku1TPqCCjWWZ7ApjQ6tVoqwGWgp31giHkQ3dXdA8suDoPqoyQUGKX6Tbe6KMsBGAUTEFEvAxU2b3LMZQvQd",
  "key6": "R5DWb8sdqWTLekigbqXqtSYvZb9wnz6DynoxCRoyJVzBTj1iwusW5TUPxx1p6JXn9JssDoV5tD1Jrou3C8kSmWm",
  "key7": "257UN5v36eCj1mA2PTVS9psH2SMZFq9Qto7vTj1FqYFCiBWQstRfS39tjCjyDhH8nrJAzpNWqHsjgEf3ahjhSh2C",
  "key8": "3tHZnR8LoyUmY3aQSwxFwAHcDZqUeLWb67EAPXXV48x7GzMSAGRzqC33Fz3fozvsSyRrqiuH68KpCzPu2Ry2QoHz",
  "key9": "5Xk81ZXWA7gBDWGegroLT68gZhd6R8BXwc5ddDB5h9pvz8QcZC5sNvQpC5jUEh8YmV6MvNKNSK749BtHEh2MsvGD",
  "key10": "24TaKkEV9cSSqrf7CLK7AamoeUUFVaDL5GWbg6dcNs7hoTD9qCLGtApQZQYi6dSdEw9WkbiAM62g1uu4jEJijJnN",
  "key11": "4AHXbWkhLvBe1xxeDjgbWzhUrHNujwVKh5J2NezKPEb9LyQjAWXCLzDhbH5dpEENdRrczy7Xtox7K2NhCepS2Dg4",
  "key12": "51ch74p4iDdVJd36uGj4WabiVB1nJGMmjANDMzz2vF2u82tRNGmwL7hLMpyq7P9jR2GVMeekT5C6KwyNmF1BMZib",
  "key13": "rrKbLeJxBeyZF4F1xLayEYL4P2qwHcFrWNc8mzMjaMe2535nL3xu926Cpk6a1hTXNgqN6zB3mfq7nyCF2zgJ9MS",
  "key14": "26PyGVQKAweHQigrzFumbWe71P7HQFYXzXcpYk6JyRBceQorziSVdMEq3xjroecoGX3AFEs4tfHw9TCbmBi66fch",
  "key15": "4d2BAQG8n97Urs2PVgtwTLcn4NxJ6VcaFCaq2iwRXtMmLEGieqDBc2YC1gEhcyxzLsSgg8jqhZVm7egRG564frm1",
  "key16": "4SbK1tock9YtG1hEpmtSUYMLjP9Gdrhcf6auSuwd3Z3FJ6qVQzRK4BbFjfvLm64tkDiVaaxTFR1ijkicVQHh89xx",
  "key17": "2UmUx8tSYPPBS1BK2dQgUEdw519Hxj5NrcwmotWrS7SQZh7q1KeUi1hmSB4DCpUFb5WJtqYq72ha8vVxsbHXF6gB",
  "key18": "3cW6v919jnNMjKWE14YhKx6VrT74jKVpkzj1uRnCReusPwd1Kvv64aLnpz6cFfxW4VSVB1rz8jpDKuXXob1ukg4j",
  "key19": "4wHWz1uAH7oghnBkiWUZBXLVquCB6jzbjSEy871NmnjLP6o2Qwcrf68Qt2LCDERXv4UjKDxSq9bC8Z7Ngp74TpKL",
  "key20": "3RhsVwnZcMVh6Xqzo5nuMq8AgrHcuTA78WhX4zXTEDZDjtBFahkDnKqmU3c4YH23qeNKF3AxLtuq2z65tR63pQnp",
  "key21": "2QYMwTANhbv56tuQccwadPv8uZVwUAw3VwYmgRz53jcd7v55z6pcHGpsugWgVso3wAML4sKNsWzt5To3uPMpP7uR",
  "key22": "4RDeBdGhURTWc3J1E1ocTEr61MxAGMVq6Xj3s6KFFAhrYviuY5xKP9JMaEf4G4som87A1mkjk6xL3ZYjxFyZciic",
  "key23": "5r1VZR29jLAiNUT24dnhQZrmTuruga75Epe4X5gUiEd7vqEy9Mf5MmYRbgQqRBB8Gv4owYDv6yqakWFzpq1myWjH",
  "key24": "4aJ2y9bv5uY9oNEECE7DSTohrYWitmRctT9ttrtcmvTuCRxyuxibSAPuGRMJbmmZfEbFGoCrSKFhnRtizBz7nXH8",
  "key25": "vmatxDSf3u9Nq7mWjGHBYLcBsWqzzPj3iBNAaU1b4ARwsu8EGujQoDcKtnHuLAc4c7Cer43Ngro53j1ewBc7eq7",
  "key26": "3fnNUZkyJb9m8YBHaHxwZ95fuHG2jui2UfeSdqAAz4rQMNuXSi9vPhbaDg5W8cMSwyNXv8V83ySfXFsEszqcw6mF",
  "key27": "4RRnqV6kd3VtDt6ANSQhGZ9XdMnSEYZzUV8L6Cp9YE9ckZgJsRmDZKqRgtH3znk4AE292nzrY8tcS6CyfsATk8JS",
  "key28": "46aszqX4HHStPxtcfnq9w4SXA8qA738kxUdwaZUdCeGtEfr4s1f3gEcExWm2jbduhdiDjKDGUkaTznVPrWqHmxBV",
  "key29": "5x2Hi49vxB6WZCQejtdpdMtQaxX3tLPez4bqSxgJsXnAqUiMCL1Ug8NXMfqnnEHkz57JcgaKnYbi3NxZRzhzQBnf",
  "key30": "SfkSqUmotNm7SEP4fgCetGnuoFowZUs2Af46vXhQxnKCztFuP713Cz4veHWznbqhiJHmPHsCMa3qTgXDcVV2ic7",
  "key31": "27PBjdecDay3NpY3jRe7Wj2RBdcRRfAGnC32q6UUn61fvHVuYcyWHMZ8fg4k9gwxginvNmKvjU3sfHko2JksiNuC",
  "key32": "3SXZ5TZneQjkPKxwip3hLtXZwWZCRCxkZm4Bjt8XqMAx2CFQR8on3XoWxuVFvRhJuDqes9UwDJqeGkMEXb6eLbAD",
  "key33": "3qtxedG6TefLTmYMN7rUVjcsx8VtXrg8p84pnDsiWFnveiptun4s1H1R5pLxpQSX8DhgSJsnTc6aJkSvEXAAWtdS",
  "key34": "4TvmXu9qeJwTkkQvbBNicLy37npjP5DXuecj4GgWQni9H3DaEXYaE8FfSbQQs1ZsvqDL4LwGhhvPMuJZWLpz6Asi",
  "key35": "TewozMwcTiC3JEvxcb8je48zRkfzJ9Cp8vZZj3NLidSN4FZB5tD44ZFoj55FqnV7XFQ2EfARb7NPsicguKaGXG7",
  "key36": "DQ8RaUtZwC9YzJv8416aqUF6dJszqkvScFN2aYUE2cHvtPHcJbWW3V6XWvDH92cEvfWE7ZBxMbaMNGZnHFF5CSX",
  "key37": "4sZ61sWrmzb1AJReCHLuLMCcCiyn18PpfGh54AkwHvsVacMVJPS7mPF6QYvm4poMyEZLT7JnPX5LUhTcKdw3UmTf",
  "key38": "URrLmkntDP3gwGhW6peTLwf46Cfu3EJwd2dESaWDJwKtT4xBKgs5aJULsHMZ4NCoXmmwJG7uhpFYKwRzxArYnA9",
  "key39": "3gfs7wk75NHUv6MhT3sMAXuC7ZgygR92pJFCpzrXKexj92uu72PKEyZqmBNABRAawxzRHtUofWZ7UfBXHA46jWfc",
  "key40": "47U67CDo89KxiTcF7ig4RdaLh2ntnAS7JYwCCgi2XfLMJTSnyoWrQJzjfBXSseb6oiVuq4zfvP5ktko5Qiasr9zn"
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
