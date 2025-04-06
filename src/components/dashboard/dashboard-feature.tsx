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
    "4UTHJoV5KNwVnP73ZQPEttJN8XSpkXTWt65DsqQ6AwhZVBxWxhQUSPexXDpbANDZ7GpVAsywpbuf7PwHdR74ESAa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uRhYUp61aLa11q5R6Ja45esKN7mkjrseXz8eyQbrxpjCioqfJoLBjHBksmhy5DYA7PheZUYnsxRPVnC92zFuRRP",
  "key1": "1ypQQopNsPu1bLWhrFW4MjWJo4xsjaGdox6Q4BZiwrKzazbjEv7zSFHkoJ8xZNyVaBY92XwroxZpHnUQSDXkEQn",
  "key2": "2xPmThAURNFQAeusFVMPzGjwHug8UJzC4CaqFSDscDNq4Ldi54jqoK5geiE2AGykywVtYDRy8RBPxpKLc7yzN7jz",
  "key3": "RNtQzsef8SFXbgvcWmJQkKUD8q6nUBY57E6ogDiySb97TU7WBjUeHr1Ymkngy6JGLoYL8dznWwJBqgn4joxzH3V",
  "key4": "NpKFXnWQ5VpGT8v6i8mT2oSgpkuvPk54DatMkZgSTTZyk283ws8hPJ9XZe846JiKwsDvgMYq9AFkiix7j6PxrTD",
  "key5": "3nMVSuCGQL7X4MRbYxkQZgWcKeMCXnzHfuuQ3fGM5gU3Qjm6bXY72pt4sHwpWxN4FmfJSK5Au34DcgjNhsMT2CAr",
  "key6": "5FdQcw4tP1AxaHxM2cdxw2w6Dcwg84CpHYZ1EjAp73TcZvegHy6TRL8UAupthnnSESoG9qeKS2gH1qAtcfquL8E8",
  "key7": "4U8w2MPNkD1zhBL7P3YtBR1dfPiXaH4WZwHE1m86xUoex3nm6oZz28kbMW2W5hNr5XH4rUu26KkJyzaqF2o22GhH",
  "key8": "2RWEFkjjoazQ9PHmA6TmsLHJMZW9MmS3CgVE1nEtVahkcjFAH2pPgcyBeCM5RgeNuF74crwg6yEmZEXKPVPirxqx",
  "key9": "4zSDYtXdXrmPKFYMaA27RZTaRCU9LgydKMSGTvfAxNqigKrFod5VtcJv1F7hY82VjCtoNRvuaXbZ3gX5bLFT8UAm",
  "key10": "27pSoetbiLfbazzKYPdMtfB7bJUD4C8aKW6j53dRx24LgwNLUjcRpXE6tnRSZyWXnA43nXiGi8WxX1GigSvRw8No",
  "key11": "31bGZ3T9AdAYYJ15rmB4YhzxE55yxuutxR6XkgpBz1C5gSaG1ekcbu4Xg9UzU6Cr1cjditbGqZzCmULUfuA2KU2D",
  "key12": "27RREj576nxat5rLaSaCz5YdkzhaoFN6bgCakUVSKjDqC9LXLthbmUmwysQnpnGn7Lp9xXHQttHzwu1GB62XEVqt",
  "key13": "5iDVZ8FaQLJZZLp56bK1koue6t8mqT6BgeNi6obtpCKcWwrG3hiXaRJ7Yzq8jEkHQns7uqJ5w9PfaexiRnyu2szE",
  "key14": "4fDtwA9an3DfmG1GsWX63K9SMhPLQ2Q2zbAWpYw1tZAMo6vu6xfVNZLt15TnqeJJtkPQca5uhnrxJL3UNcKhTiww",
  "key15": "4h2EZ3m1ofLrtyQC7fjvexJbXk3NgoBVP9tDnbcWNXXTzu4YcBkdED3ifb2cNHWLruZkBTzZCfiXPeuGx2wJNAUB",
  "key16": "3ADeRRM5N7Ex9AjL9F8zFU7j6KzUX4Lj7tChbeyUAQ3eTcwYo8ZzesaponQDLLPKxWzca6vANjiJSm1G6BKMz5it",
  "key17": "4SVwiNGEZhAVcVAhj6fsVPfFHh1fX8hFwQnPRGbvMEuiYwNhKakrZ1N1g7DBrqJaRXMkjEpGvXuEbPQ8MhSKScVG",
  "key18": "5onxDgeBTjvUnhZ2sKa9uAnrW1AU4otvccSB1jpiMSwoNBTgrzo2C8ntDbEV5zMvLxMhWLr5AiuPBQrFnXkGn8xp",
  "key19": "45n9iDKMkbnvykg8MgqWbHSHqR1HnjkuWEYcRaQSAFoxFdQQ2VqszwFW4PRMq5gawuLGngc9RAvQEnRaKA1XM76G",
  "key20": "2cEPQ2ECifhhxWgHfvVTDveSDtieZU7yTwGEBYmDt2t25ASxmaL5fP1AYV3uk5g3WQgTB6XqbvrFyfajBqb25tTi",
  "key21": "twedjbVA9k3R6geBW3DQtVLkVMPhqAtDyXMrtWCeExwe6dNvigpH5dSZtZeuHggsnXdqfZKtecB25VyJy1QwGo8",
  "key22": "2ZGiqhMipGZNmZn22XbboAdxzhykSM5bBNwKNQY96ZjCvHxr4WXdsXXm34G9xv4EzhtYM4CgUkoffJjZ11TFNrw3",
  "key23": "5Kb7MPANCQ5hhLaCkGHgh6TATrZXqFyxHcp9kDdHZSFct1c4XcLFyMbM9gqeaLSG4xRW6oi2hxktXdJFEbV5ew3o",
  "key24": "4tX1GLv1jHcwycecg94opaeXhabghrijnWcCGUNzdbAZ3z8LDcFnxxxMTDfNuYFGMTdpU6bXxFvUQQmXS86DrzoX",
  "key25": "5BfyMkr3CBttZVQ7BEUTkRpiGKp8RDQowGmFmRNsXWcAGR2RKMic1XJjj496y1SmEEKtBXMyfZMxdU7eXe3d54pn",
  "key26": "AJqC4sUihbwtR5tqY6yAVk7P37sstA4qhoLnx6nVtHGtuMUHvUnTWJDiPjjVdMCVcF5mDMzzA1Fx7XVgc9MeJRN",
  "key27": "sW6YkGfxtrVztgaDrjDioEh1rNU5mPXHfdazcjjrVuTN1z3m958GjuHKQ1eR2K3t5rtA5GPraCLscA8BngbacHC",
  "key28": "yJ8Dp7x1YT6SgR5iYkh15AdbRSEoeqSuDoHuGSC5QxGLzTmPNHFinG7SVvc9XEt7uZRMX5rcASQcrb7gJFuQMSZ",
  "key29": "29vHdvSV8GGCF88A1heL6PEWS4XbUak7Nk5SAXyG8irM5dfFa8b2FPYxr7TbHX5V5CCmVDsAp3xkSeNonxdrhAsT",
  "key30": "25DjsqWSMV21UMG9kD8eiWd5BRf3LV7n3TRMHFJ3j2c1y3ps7AFMQqsv6zTPimWRVQKSkH1aFUt4kpmiVdgRGENF",
  "key31": "31YevwHBZDs1NVup7t4jhVsPpRU45UtV3TYY43AgtTYX7Ep56iNYA5goxZMFZ9NdaSpx8JQEYt5n2iyvp572U9FZ",
  "key32": "5qAVaymLRRhwXagMgTof64SLnHQbKW5wZuJD35s9uW9XYQCd29TtzenzmxtdTwVVY5sJfJ3KDKEUVkiofuWGnnyb",
  "key33": "2yuA9BVjvh7FB3SxRY8pAVR38bt4EMRmj27GiHCQ1HocPT1QDW97yPBZ7MfK1hzZyMUXTja8wjrfc5RKYrWmU8fz",
  "key34": "4PodsWbgytBwcxQ8y7g2MhpoD7LyHpyWXLuXG1SfTgLVkmNXaksQAp8YasUEcVLntsn2prdxa4naLbP57JsvDZX",
  "key35": "2zoycMcwRY8orV1vTqhRtrwjXYQcGzZtHeWPvix5RMbEjQ4WqjVDFJph8nDk2ZAQNfbP4T3eEP8NQDer4ViX7QHa",
  "key36": "5uPem2jdekCe8eYi93fD5vMq97BjFeFHnCiBVCZG7EEdj5cQbxrBwrkdzWJwvM3yVwLVkxRLCxghTb6mvwmc7e2E",
  "key37": "4PT7L2JrFLt5EK764RkdxojPiktUQqWMc7qNBvdDrv7K4cezDRyUauZjRUR3E1VaXHgUg64rdmRM61RfXxoPyF35",
  "key38": "42L9GWfSeEnahm3gfVZiE6NYhbhdCbNfzY2p77SbdrCicXCVaC5j2KJB1A4Hu599xEa38EqkM6SLDaS3KTVFyGZF",
  "key39": "38ohcvtgT9qLHXR1YNf5Tw9UyiesXGMsJ4UCPGYQvsb6qu56dV1aTrjSGZQnSJcxByJrxqyvkXUWUk8Yp3pgA2DQ",
  "key40": "3LU89vSHmKv5TmnKapro6DgQxbYzHdv5TXGL8gp7K83yngWEHQczUJswWK4Bv1ShE9fdegcjiNi3i78bAmVQPWtK"
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
