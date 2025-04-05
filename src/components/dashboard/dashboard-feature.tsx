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
    "3T9Zi13G414AMB5nRAajB1DrL7B7iAc29CyZ26rLuMZCXw9j4HCsHZX8Px8QKxvtjH7HEpZscW3h6EmbrAFB5ANP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Qq6gq49ktArBGmoDaaAATCWZxQN4GNjTfmiY3b5cYart5eJvvRYwR6vc7nso3negrHt7LGr5XZLuVS4tera3tBP",
  "key1": "58UggQvDbBF9K9AHkLtDcEHQZxkmwaiNi9ws5nu9oozDhBT4T8H3QV486RD57tPBaynPTns9v8rAdPTdmsCHfe2e",
  "key2": "5VR7u98ghNpuaAyy6EnNQZTSUG7Uqjunhd21H71kKzygeFJwFuFTNfS4j3aA5WRnZYqBv4WbvhyYAfk5WAFau6nw",
  "key3": "5x8RLbjCYZ1Zsu2k3eHKs6S57prGzcdwpycSm1bpSEpTU2wuwsQSN4CBT6CnGC8NsGb8MZaaTnRgb3zVBHxwBs6u",
  "key4": "2Dvr5eZ5GFc8RXW579HwP7XHXMPL1N2EVWgec8BCkG7JHcHVN7p7NsLbH5W9QhRPH5yPBZEZBUsQJaMN56rgHs42",
  "key5": "NuMVAVSnUHWU4mwwzsxcuiALuJq6xLpKqUbHBxWAZmC3aMxhPRK5GpFByeabgGx88GuaZoTgzhEME1D5iEhJcML",
  "key6": "2h6Ajub7zz6wRcLv2taPajm8Prdu7NAuuQGbVNGtCraT4Vbu4tjZzuSf14qcDRSJrRkCqV9a5GsUdd7otEkFDaow",
  "key7": "4jbTTVs7iMYjLP2VmnQbBBTq7n7kJhP5uYbU9mrsfRTLYfeo9j7J8paUT6kSqJknLsinjDLdDnCRbieJ7h5yCYi4",
  "key8": "3QggER3vNJbXwTcUV2Ndd3QxZZJUsLa8TZwS76ddv1oMQULHE729FZY9hhqz57Fyttk3FbAhW53fJh5aZF2iayV",
  "key9": "519uJM1uL7y4UBQHW9R9y1Xtf3VSzQhTAJcoZJG6PWkBH8qGUBPpxZxbm7VM6B58jVCaqAdbtUoe84ok32CVkYEk",
  "key10": "54bTmxSmHd3wvkvogijHRekiNM1DcaERphykPrdmQdBTr2MjXCJtAgSzLhmarHNKuaGRPRHiuQAkYYQ8RJ8tb6Ao",
  "key11": "5PFcxh3vZJU7kV37KemPAczxagbRS9Z8w9iXY4YQTMmmcmiCahYBHjL8kBzCuFDpfnV8mwRS1HNtRhp2X8SkQNM2",
  "key12": "3LpbCucuh4LivNENe5eS6Q1aed47Ub3yy6oQtxFrWuSguyL1y6NkCDtxMsRmfZbKYGMjExu58DwXvmuWaUGQCgEj",
  "key13": "2Xfhnua3vVXQK4e9QSPwK4jWSE33rsZQ2M5g5ZYEEnaXLZpWbyA8H1QwiNV9HohZCx3qyTsx82vrAUEMfJb9WaEQ",
  "key14": "4fjQvqhHoV86GLJ2ZmMwAvbbNsVHAqQ6mmvG3SRLvPJ4nMJeYb9KmEgXGzN82ajWgyhjkt33Dhj3B775LdcuYtVE",
  "key15": "3dvnJtCpGXsMndkPcK8Fu3EUm3BEQdDDFz8Ek6WPCtbT5te3sRWPEUi6qziZeM3fmjo9JYPnghfk13cW8S8c6956",
  "key16": "2MPcWCQF5JjZBtx8WM1M7v7UmkL8s22p1LkszeBb6pxCBWxes2MCGWMSY2XJfCFmkShwmFZUTBmQHSH65SvnvjzP",
  "key17": "49FeggdQWsEz7NBhh26KvF8kuL7XsV4zDV3AuurjSysCdg4WdbJPRUP6df44SKu3AP5NJLzx8LkmPKtGCNT7vU77",
  "key18": "2vmnxnQzeMSuQ58PhTH8GaPFKmDf4fKzWx464ZCJ7qeL3c6pT1p8Xi7sit7QPfVtczKvvSiXyGNMAhwVDm8MB74H",
  "key19": "23XMrKv1tWbs4G771FFR7mL7XSAStZjNEc7tSEZmB3hvZ8cZcWLkJgJo7GWA394dYwWwtSPJNas81ZsdWfsRwaTn",
  "key20": "Ni9Fq6ZUmjoah29nr5j7YSuMhYK1AYfea8hrWP5Ko95WxJi79wnKtx3SPK84Mw2x1c1cFSU2wvbdyKwqJYr1j38",
  "key21": "3JBG9yRmW71pCLkupbEVCJRZ9rCpWhuNZBzAP7hYXpauNCEoBZVABDyywuCqDmGnepkQe1r7QwKLDT2YtFFkj3zQ",
  "key22": "5MJac4pLQhyCQqCaSt16yotGgPsigz5iMX8RmsBXF3pxtYQa1bmSpYtiJFQdstQtk1Rcyx35nce8VQna6vBrCQJz",
  "key23": "31N7yPnEA72tbkbwX2FyfPBSxtJ8XU95FpQdnxDtBwwq48xQ5APn2h5TzBnA7PHwUjtGJze2B7MwTP3PeJaxC7Dt",
  "key24": "3fsZL2nC25Y4jaU5SwSrnmHyKsn9g3rE7Zy5eCyoviTiaRXkdNqJgp9t2RWwqi3SRdbQkt9WGQ8eVhY3K8TBW2Cv",
  "key25": "YymQVKRUfntffQV6NMj4fM6fjUAevyn3t3F7fxiGpwc9p2yYTvMJmFMucDbhwrFPMJAwdCPfH42cuYfZHegtKqe",
  "key26": "3Ss3i2TJpwsBwhAkTJDLmmx5KwiqFwL7wV1EQu8NFtE7yLUPXy2o9NHxdXawG6eHox3enb7aGVxJXB3RYRiSGa6c",
  "key27": "2k6d5fUinxeoRqyzgcpCgJGGUTgsit9MiF5QZxnBKEpkHv9yEp5fHp5D6jvfPqLvN5qa4J4PJ8H6CBNx9fs1Si7p",
  "key28": "FkbWJmUgDkPMJ967KGedTDXyUMBtxHQpSaxzHWd34k69FWexPYUqReLzsaLb9oZ3PptSb8o4tfVKzyQaCwv8V8g",
  "key29": "mRrRxHbkfB8zHz4GycopQ3jU4VVTyLQeEG3Pm1TqYwQpoNceqS2gfa5tN3PKLxKB8Q9bCrQYPyhyxn9fhUpXaQj",
  "key30": "2uf1HtWVGBc9JR46JsVqVfdsdbT1ScyZS2zHy2xNnhNdwaX79KoAE3hFxYpYamAYMiFzd3MkcMwsGuVcX5Eyuuuo"
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
