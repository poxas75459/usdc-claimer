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
    "28n5a4WDHNPVyKHkmEmDCHxprLcz1bSxmE7642akAvsxYY8wLDaWrTbirhuosB8TRjzjU4dCjQszh6KotedFVicS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ymxkBs7itJLRH6UhuFFi9wXrWATSE8tj1UWq6iE64hfvFuPwibXeGPNcRfDo6TEbx6MZQ6UY1LY2Mi1v6ELCWbc",
  "key1": "2X9hbM5A6NiVThWkQLdr3seU8YFcucdaWLXkDraH4BQBnPNen3ZvZu36p5p6tvRH3YAcBwJTUthH5HjAThDbyX6F",
  "key2": "4mt4JXqZuipkGnjsjVZ9GtUPEa4KZLh8Lp7zrmkbuHmm27vMEjDpgD9ejQo5Lbph2aa3XbCGTNho7uenKY2dkqQU",
  "key3": "2RdVAam46csvPEcahatgtaxi3DxUXTUv7dg1geeemuRooY1TbCgkrpBFA79Ns8CRKq8e94Zp8vALGKjZdvex9cwr",
  "key4": "5HaZuL7tX7zxt9AQYsGVDQUEgs3D4katkwGyZo137nARrySn2oVVkjv57Yi5wFuVkHUAvy7tJH8uNQvXqc8nAmkp",
  "key5": "2bV9R5dM24jrWmefQNmT2ukRrd2nxHdF26sRAMZTQLvmA4kddEowfUqKpV4xLqfg82Vk23Axa7y7UdvQWR4Q9MzY",
  "key6": "2PkTkbcJTiDFUGBJQN7pJ9wRq8vNHBFp1LKarSPXsUXSwwpjAqajfvLcAfVp1bGYqTNfpZqD92B1uhHMNhE96mMp",
  "key7": "5HwwPuACCuCF12j34rT5q5c3Hcg73qJy5jbQAHianEGC7JDSN137m8W3K7kT1vV6sA6xA9MqLJ8TEZ1bJ3EiR7jv",
  "key8": "YT5uSMTjQCLC6ShFzb9QKbX7onwwXstySFULTQWuDMEFo9vdoC7rnDcfn1fxTD67v8887F9fArJJNmDFBGKbCrP",
  "key9": "58rmawzcobZR66WnwdJfrRqG2xbVJqvFbBjVx5mgCNbSKXy5Tmp14okoGg3PmgbeDr3k2Qpxv5seB8Mf5Gf7dB28",
  "key10": "3rsdqTNHYhnfTcChzZ5wKoiEswPddaMBKuuUGPXDSuysb1N8QGtVtWX9YcTmVzEPLomGYwsdWTwnvPpaZ434byAG",
  "key11": "2gyFuYYhs6PicReG9NLucxqQYQfmMyhxyamjqoCrKmJEYBMEeiWZ4xQXbu3vuF5JsdjeYv3iXMgiGxtUk9Jh3G1g",
  "key12": "4h163zbyJwLbndmJp3PjQ5itPXNtH9U3KHRQGrsSZHckHZUz2qK2hfAERv6qxPGdk65WxgoERw1tiHxgjBJ7nYHh",
  "key13": "2H3dsTBYtUtEiTCgU7Azr631uBfjBMg2AUwUWeu571jBeTLZom3uyEN7TpLvFuuzDg5JwTeF8JzzsdFFxp9gLu29",
  "key14": "4Y8xeG5q6YANLVvEqNh4z2u2HDrig7SCF89VNPxdpiqqPQGVoRxzFcBtaKVZpqDQURca3ckannx8ntnZvwwzys63",
  "key15": "3yryifqLUo7d22nymNKdhHjEaCqwp44fCaT6bu8oy8kMJU2yQYewW5USL4edsiwRdaUG6K1gwJU1utTaMeT5ApB5",
  "key16": "gzqB9GjR2GTRD6YSaNRVnkRKqu9x67C9psVTnBrGHnjmEoYJE1aynhw8oLoieMM6VUAazzxJ2a97j4sezb5XSvV",
  "key17": "3aY7rJztEjWiBpBwAwFXT5Zeu1mC4zgkpKYizfwf9iF5UuQwCvm3Z2PDtz9zb6UUFFfzuNJrAjdjRvz7jm7ntoNM",
  "key18": "2HrEHDx3tebhomGuaP4Udgmb6jmFfmMhLPQVQvR1gmPFdfwby92vZDk78SuJNrjan8ys6uahkp76DyMHdsW9ozPQ",
  "key19": "2Bs1wg8W5M5JPkRatrXh1drJyqV4pt1aQt51ws7iWtdrnjjruptiGwQ3gnvJ4Ax2suTcNh2SkSH67uQuVghRByKW",
  "key20": "289tTVwke44JfeTgyaHmTQrKaLqecoyiNyJ3FkZYraCzXowpnm5zkG7NbGYuEiMGyHFSdDqu3Vh6HAVsYDLWbaAN",
  "key21": "24x9TssQRkrsxp27sSZbcCpcEkFyoTM57qtTQCXCv2xZmjaAtiDDuX3TyhcH82uh2MdBzAHpTsQJVJn9Cr7PUPi9",
  "key22": "5YAA2qZSrXFtPuBhd5Kk9uG3y7twM3chB7u4gzFiYKGjarEHpAscmGtiFRybFHDMbe836Xe7gDyX8hLK4BzVb5tQ",
  "key23": "b6aZZrXA3TD4hb2dFciYJhwbgGv9yKxvwzuPakeCtdUH3vrHKnZkctAg6UCbQYgDoTbhQFBJLzuEY5pa2uyS7Rd",
  "key24": "Xa8FW8Lb3YBY9iKpgxyb4v9qdWdqMCDZ2nFo7hJUKg5KGsBnipGDxZV5W9h5qsWkfoGTjjDjsQx7ojwTY1HgNEf",
  "key25": "4gnEUup6mPe3tb6JX8BSXNZCasJVr1piYRRofhqz78J7WMeAGSxCaShN1i7V3KMXsnMu2cCyXAvfop6TpmqTEhhT",
  "key26": "Js7oRXKETM4PMSZy4kGiTMvLv2qKmYx3LkA1C148yz1Zodu5bWDGNtpqkGmA77reiNdMX5XpvRczdhhLH91KBrS",
  "key27": "4rbHPhM9NZKGJ6Xq1ZZeHJDCz8pCDikjLmj1y4RDURdBz3LTVwTRvRdrH3z7tGMQCSsG9MYJsUfyQwfzKjLTxpnK",
  "key28": "4zeQqp3WPbrRZmomw9yNYHZz3SmnpBN4nMu6xxgzK5LBhdUSy9YSLCvroVs3eVTWQvQmQFb6dX1fheYqtwgujiCi",
  "key29": "3JtrcMyk3S1XmsDNmvLV1ty3CCXL5HDRJfFnJeRGti1DQLfTpmu4dUYTtrgnC4hGWQuJEKFhP6vB92jFQaqNcFmM",
  "key30": "55moreNDAnxCTQYAi4o2B1XJH2hcANJvJahRw9F5fZ8DwKmPZWnvX3GsxSDgwtZVdzfagvoZJhf2hfYkQzZLfjDj",
  "key31": "2yknwCZ8sqv4WdUY5ozP3hRy3jycULZKv7G8pxDjpxTgxyc4vHJBoz7bP9cJ3D3GDQYSAmmgZohRCBYfoc4PLeGH",
  "key32": "44ZpXf7zTxvUwoZubr976KpaAvGPXkavZRs7JyJ2VGX9z7vhWuCYVtf1Sy5qzviYirAeqTMWfQPoqqiRaT7y5XVb",
  "key33": "4JwVZLWozeko8FaEug3k4EGPFcHTtzoA9JxwXoy8f5ZYeY1PPHzQtashjNn9LuZzEpKfpiMF9Zpep4SvatZ2KbqG",
  "key34": "8TZpMYtViR5tkEmUTVJa3wKTvq94EaeimDRMoyJbnZ5ozBzbE5hgXt5Y5LtXRkWuuEmdHbK8JXd7Vpr8guch2eP",
  "key35": "5niXcmMYsBoVNYVAqNahKXVBKxc7jN4djY3E4tU7Gg6dRdc9dxcrDAg4dN3pi8MKgd77KVVcnJ1nYG7QzfJqpPfi",
  "key36": "3adTKSQj6bPp2zW6UVCkqq4g151URY2jvYMYZgKLE5wzVvc56jpE1LNKuXcpDFgsKUaSnvBxtUiK7Kwhk6rc4mCu"
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
