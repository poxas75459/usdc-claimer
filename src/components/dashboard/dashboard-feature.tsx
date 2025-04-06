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
    "5G2nQ4sPdQU5NXmxevAThoTbg9QHmDJJptF5KjNUji7UYrvzQjRpUy7X7PdrSg85gsTJGovDLcRX4gxtMRkTSFUb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xBL8hjFtxEXC4ZbkojzgruH4PjKyi6fBFTYFZokBwymiUkfJejRJzcy2gyi67Zw3fCHvgnucDCWgq4mUoRombFM",
  "key1": "3qVGxsxPF5gtwKGV8W3jzHo5wofAEy3gdAP34K4FYQhewyHF2i5JT9Mg8Vu2BJfgazRtjTJdq4TKvyqSdkHThKoi",
  "key2": "3Va3ZvNyXBqo3Jrvh2hXrdp4qshLG6eojwcYSzUKVywaT4cgCbB4QqKUTDNttSy6ycgFDxDZ7i6u4ErgDwb6QcCE",
  "key3": "4PYJeqCg56BWxVMPP2wzZFcTX8c8wKpy8XQvfPz6BPxkrYtupDPZwUABdrdjFUFvjRNu4da7eHvRfpaTHSwGrcRP",
  "key4": "G58YsJ9LdQcJJqqNjiE44Bfr1ob1Mj3feSPBVzw5XeaEepYLcSAVN4z1q7T4jt7YnJ3dHnE8nGTqwsdcqPaRrsJ",
  "key5": "4v9xsRmxh1DrfKdYXDkQ2qTzJcLbACxDQs4siwJUzVBP7m3FM2LZja5iSzcYZcredi3hjq6PTtHcKuaoEJbfbFNq",
  "key6": "5LttD6m7tALrNRYi3eHcGr4s1jUeJaEXVJunQZsiq36gAuPCxVejujGKTK4uVaWPrWPkeoQwmqQUDLmS6xV8w7fG",
  "key7": "2Lnhau83prYJcQPHRTcVCVxhb19rpa9FcEqY7siU5kjxDkM1ssPUynPkXCujM4AnEaSkFR5bHcn3BNcCGZgpC5cg",
  "key8": "3GbGQrtT5h7yq5AQ9ENchiUx4HJoWZmThrhdnF7Pbmvs2WkcKmFTK8fPjZEGBEwFGR6CRap3QejJRNHrSjGrPiv",
  "key9": "5myo633fjNgNhW2NZN1eGy5ybDfEGEg8t6CkVnyYJXrgiad7hBiDhJHdm85emC6RfSD25XN5EVHy55u3h2c396Bk",
  "key10": "ujUMQdUWk6EUSHnu49hkpKMck2oj34gYFPgxNKv8FF4Ee1b1DkPMyNtijQ9DCe188Wabucnk3f3UVpzqrH7cx8A",
  "key11": "uLMppExpgYurmrStCtkJJVKPsxP2KAXxQef2n8ujn3CdLwgJ9wfJ1ufRx2onpaqdvZZy7DYLB95pn2zSwTQwSvF",
  "key12": "5RUm5bb1N3RHK4LVBy3nhPz7czHABsm2ekwjtfq7YVMnHxLqMffAcj3TiSP3owQaJFm8YWEdJi8VYJPyMtJXjKEt",
  "key13": "3JRL9j4NY7arxqxsCAtibub75BhdzAaPWaZawDB9bpwBEZhupH6195kBsp3NPwukm4eQVSDow89fD5Nr6UYRphji",
  "key14": "BF5DmiuY44kNQADqoMRkKrySPJZjwxRDtt6FF3GGbNsQFPnFQVZZCqosHcjMJcYD9ycgk8n95egjUoDZBNpD22B",
  "key15": "5kjJRnKVUA3pvk4vmoXmtu8msGGEovU7PQYymCx4qHEqfiYiNisxspbH37NgbcNSVK1eVU7cECB2pfPazh1Qbb69",
  "key16": "41PHPnZ8RXNGDSX4HhEzcChshRyvjGEaBv8MZLmzbS2S9fuec2jq9UDGyn54bN6CK3mCuMs7dQv3uTGquxijRqjk",
  "key17": "31dBDwHxEPXxe3FsYS4kJDrQVsETWonEBp3QLkHKbdmvpTp3AfA8a4H1Z5T9JX6M6ZbGYpWTUSNUMbVbqnh7C6ib",
  "key18": "26GAgwexT7P5ytwkHoE4LoHtBvvqwTSWKUnuKFhmczwDNeMqy1bgKfcpJKY4koB7bBrqvEXpjojNjkrD1yrvj7qK",
  "key19": "zTFCMUf6iwiMvstFwBBgQNZuUkMS8NjVRnGaDyeT3ewb88YeTM6Gq9N33VaYR2QKnF5mkuNo57Yj16YcosWyF9a",
  "key20": "i7a9eN8t4PDe5hxFbErX3bAnMNZApxqc9nx5NVMvA6fEYCddS2ofQDD9NBSapq7ZhdXTA4MmSDxYSqWEh7LQYX1",
  "key21": "57K3JLjoFtBnQUzTfErS8CqASicY8mMXs1wE7rYePqxVfNzU4juKuLC5jLWWVMzZCo3owaw3Xvbf1xnqvS2E1w1y",
  "key22": "2CvcCBcZgbPP5YXEz5CEYTNrhUfsB8j282di9EzqJoBkLhbdNEDSXFY24e1ZrkeDRortM5hPxzCyv1xDWxBoA2tP",
  "key23": "4MNyoUX8qUnT8ke3cYVpPKE5kWSq1adeEeoezEtgm6zMABV3mB4EzJwr2kJDieugcwpSPeSJuWXmqheuHd8H1gYB",
  "key24": "4rZwPn4eBc1z7WHSzrx5ubNBMCXXSHbmzpNFFogPqkNpTKW1PSkEMcFZAfqjyoFxNcWwq9AyzQcD5P1TRw67Lyxa",
  "key25": "2XDga2VWAWazsPLT75M7XC87cG3Konbkyt5prDpAeudiyJB46QkydLutCC9NtdapQrLu6uGcM76d5WjRLQHoLpgE",
  "key26": "66ZDnzQ1FjMLtHd66N9a11USkzacK3oDPDzAWS3dSQgkpHF1V4LsdWqHdBFxhABomL6p2bbgFFzy8z1vQWfYA5bx",
  "key27": "3w721dhZ4TP956xMibwE6maPag6NFncvhdQsqD6ayyoZvNRmcU3tGKFwDbGFRrvtbApNxChhmCipx7jqDMGxqHAV",
  "key28": "3LkbMbMmpLE5tpTqWcxAJNY3XRgdZ4Vmg3fVmJPW96beyHZQTk68wGCug4e7gds5N7PSEdgNYrARDDHZYRBzinKR",
  "key29": "2RTG7wMHGbpw6VkJ7BQ6dyzjHa2SzbcQPWf7KksLTkXUoBW5NdfgS5osgSPjuprjNrfXYcQ3dFMScChurmdgap8o",
  "key30": "41wA9ZED2649UxKMcLNV7JXWdwYn291oh3ea6S39H9pFq3urk69szzhzodwFEpaKbs3FHAFQAhXg5mJpQAHZ8Dck",
  "key31": "2wcUggEUGhVQdFhkWGQvXww3KpR1EsA8zvGzoWbMiKnXdoeXEKf1MV3TVFr3JtRDEmW2eJtFeF9jmLikmEvGjxXd",
  "key32": "kQkG5ZuM9D1N6d91jGdqj6RgVf5XKeNfTsaU5F3Mw3R3BCD42ZNfgp7kPcVDtx1PcpYyhMFCswKDqf5Bjwdob45",
  "key33": "2uDCrR1bnkmTnLQV2XUVZ1SYK3Rut6SWbgeNPv37C7DcaFFicHmjhG3ApDrrzD6HVsZjGGV9edshwb6ntkefS3L",
  "key34": "GTVh2Cbi7L8aktcVwYeeYkEh9XdZQXzRVVDB4zcd69jWA8a4LRFbYaXnYvSqng7DXtXvYJbQweq9NaaoMhq55kX",
  "key35": "4tZ2aARjekrNT4XeB4dJpPaADa2hpekvocLRR9iJMWkDGWDvNYHZBVGxqvn6kW2HhDuGZUK77wP4soM6G6NK3BQt",
  "key36": "2ukid1Mt7Jhc5yZJNEqsRFMNn2AJkQviVk4zUukyMM2QBWf7McZfNnTAgatsqNcpvCHEWuneVCVNL9EDxWeZVoW6",
  "key37": "2ybDnUW6T8XGzF94e96RCBuHcL1cckVXCAg794NSrekSyPBMzx6pKcnbsEfdGLDeFke55qPKhMzhat7UbcEDLCRR",
  "key38": "5Xk8Tn4N8hJjqhm8K1Q3knGD15kGe5wVyVC3n9njiWbQ7Ls5MioRGegyLa2UcuCcd4zSP2Atct59kgwTny6ydJyH",
  "key39": "Lic5EK2Y2axssbEgvxJSfwXnTEDJsf3XnY3cPELEmM62B3jRj9KqbcYAFqLJHTwhgUJiaRzhjeNjBgm5ceG6B5a",
  "key40": "4im4TzNs1bE7gpYFHJQpg4rsRMRiHDnWRyPuRz2Hwu4Tn63ccGv6L4J79nkD7kof4SeVcNFWuGSxP6WqJmTyXBHm",
  "key41": "5G2XQFNE19gqfDqd9Nq32qGqrWQFZpHxey2BwfZN1jwyfa6FnX9H7ivVUPBP7XwXDBF7xnp3reucjWTPhiaZAQni",
  "key42": "bQvz8hxkm6GVN3LNjJrL4V5szw9c5N5TEUXVRWDftTN5AT8oFQ3ojtXWJTCqjR6kwR9DxXsbtsjRiHuhnmTmK3W",
  "key43": "zgerPzPE3m5t95LWf1j4HSyUHFujPtXyzpnUuhToT4SvED4FYaTCY23bJdk5DLBvaq1sGmGkQ8poh9a7V9vwqzx",
  "key44": "5GrtBAsxagpPhczwL9Pk6YJdoBJJDfEWVYfZ6t78EGdTm21WpSXmr4mcW2YqooCRS9xyeJ8re1m8wJo4W9LvQPBS",
  "key45": "3165eu4w68V3WXUL7wioSqc5SkiLhWiApTFXKKAPt1mc6MzpC4wKUbKWiwbRYxdck7Gjp3Bugo8ZWFjw1q5egqH6"
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
