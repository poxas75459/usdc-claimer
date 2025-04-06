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
    "453qdMHid3RS6mT7fEQB1WJeyKUhAztCbeLaw27htuJTK6A7kTp75A3wBjH2KfFBPfMHtHB1eRzM4dN2PPFjrwYj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DHpdNiwX9bq85MipuCiCrHyhZNs59KqHk7mQgWDta96u1JfjDhjJzMXhJK1gbuYUu5wiNzqLo8BXWwj4o1Uy8K8",
  "key1": "93vbMKCMDouoeQuKdgyKojLFZcZ1jKABGEkALWMqWqT461L9k4ib9kmuxJ9wc9vg2bht44Me6FjjjrB6QdxZcTk",
  "key2": "UoX8H2vLiVAHusRQoDkd2k99wZs8VBfxocLKzdYyfc1WUuXozhKNMY9cVSS7Rpr9zAHqd6o27QAGafD2hW7D1kt",
  "key3": "5uwGcDNQJJtSmB8fFRATbA7Enjgkuhv58pgQWyGaS2e6SHgVJC81vBWM5FjrxfHhkZNmttHVb3eVvCFzKnR2daAy",
  "key4": "hNydf9fTfe6inauQtjdTzXBmRDjs8nv8UrXJ68zhWhG1FMyyj6SiPaxVj1e1bkM6B77JAFmnDVpmGQgF1qomuUF",
  "key5": "4fgVTnGv2CkUtmgF2fHZ7NP2Krsg2bofBu3EtRZEUwn6BvDhRtokDovNf8cB3WhQUSB1fZs1LrTrhYktQRk2mNsM",
  "key6": "2U8cV8MxDbUABkTgzZJSKFPHei5rFyWCUQ8u5TZXNgYZViM4rXXmKfVGGkr3zkeM6NtFFXsa4q9HwQ2aUyVjEFFG",
  "key7": "56wmsdfgwVmPh89HMj962z9CUUCk99dHnPB9YbZRQCrQSuQR2STY7fXF445eWszZH1kqyfZDtES9qdEWJb69ZGgv",
  "key8": "4boaCDiP9wW2M4W3q8ynvRHEyRAyRFdtwc3UWfceUuooShG3SxKPNaZbuh5N7vQf6KYuWbHGqwKnMxHUzCXH3B3s",
  "key9": "2FFruTWEyMEP1mLLVh83Z3FsyZ5W4FMc7n8aYwqyXU4wJZ2mn8KJb46xVC6ADceuSxZXhcfGFpdE5F4ahozSpKsv",
  "key10": "sxARaWhkhxqumo8NVUqq4Ci5Z4N72U8yc1RPqBM2mDFgSKvnYaMVafUk8zQ9EXWGiFEXFhfAp1Z6m8T9Z33EWJk",
  "key11": "zvBsjqkv2Sh1qQAHS9en1zZ84FH6MQs8srDnkcVDMHtwQse8BoGKVybKezfeKpA7XohmYt6AtHVuzYQc87ZJTR4",
  "key12": "5MMXemQNBw4Bs2ouVDD7J5RfLzFDZSbYzsjJppND3sfX6qEemy5Gsd2N721VRGUUGgt9kHyBitwJUYdwrHv76SsE",
  "key13": "2jgzyYnYH1TYAC6yCK3dzCZfcGXYqznaJfR6uMNW4iUJgTqr6NTsErjxovhScrtLDGiHXAnCtnsxeQSUxmpBEq9R",
  "key14": "FuVstjXaYMnwjJsfwUonDRQQs78MMN1GVYeCzoUBx7gkFxYxWnCdvoAR926itmVXAwNsX5R7mHsZrTpc7LcCRko",
  "key15": "2L5cpPoXSHw9TaLfEFi9b2R3rcqRXq1WM3qYdgvHZXwX7c6sQNP7oqPamDyCeMX7wJ19R9KxtrbtfEhUiJ5javDd",
  "key16": "CkyiAUdauzqTyGpiBSzwivbd7kEKsgjAoJby5ZZ3pDCcn7Hy6LUbxdZ9PqsZpAJeuwGvsysy8NLYsRGmuHZwBd5",
  "key17": "1ATkh26SEW5vNqAFQNi1T1kgJF4inMCxtecewyT1p4V9tDTD2bsUL5CUFo4dD3s2afmzWUj6wNeeHHv6PkqnA7g",
  "key18": "HCrMNiJUq5MLViu8TeBHUeJjRDb3sPR8sTJ7Wj2diNkZvLdqPVZfcA2w3oZvmMWw7TL9GfZTBFcQsUpNWMbYcDK",
  "key19": "Zr9s8JnRKz5zTdV8tnwHrVV6qZGSZN3jex9TiiWCCXeJRP6CY4QxcDyyP5saaZe4mr6JtzqMxrbdiB8ymAEuvxe",
  "key20": "3M7tQ2vHG9nNbA64uZfyL5wvAuvhqkKCjSSJE1o9tEfX4CWwa2ywq7G7v8D4iATymhXm8KUe4MgPqjYu4iEXPmF3",
  "key21": "2xeiEq3q6MUxLMPx4RncLBssVGQK7og5VzPFr7gYRywheBSs7rDKxbj4TzMgYXUvdTPTsVu5SWK9dLJ1wuCc1UTT",
  "key22": "4miBUoXatbS6Q9xtiQ8NwxfdfhapbPv9XQvG1n3fek6ccvtrWVWLDSanmgMqzZidB4ebEXbEtsBDDHQ71CuAbnKV",
  "key23": "4V9svxjn7VMBoFnGkaCoJ3Go6BK8xS3ZqPc2dQGU2PYH6PdfcUAYUASVXFYmKLtyGAUUpixV5rcmRYu9eb66nVG",
  "key24": "26EHHU6seMrQWpFLxtTH2CDByNouZLMhBQqhVFpJKakEw9KuJARmiBUkX6kpRnYWRTXR3trMCMYAj9HsDWRsh1k3",
  "key25": "5nniSaw7qPWfGC8fj1dYxDvyCd7xPwYcqcroWmXzNpjPc9MaSNnrjGxiGMQeJ78KVjXFRAkTPHrAR9LpsHAYrZSb",
  "key26": "5vuAF4qUKck992kTp9CdUnTt4VLy3tSsz15PzefYTxEp2bgJYBG75jiiirXQNDrtRdm8oaRbianRecqEWrvDngNa",
  "key27": "2YrMWtBDqH4mYHFXJTmwUqUEa8e1JycykVWuqv4DJfX3PCiLm8LEgLj1wUyZ2J9dBz89b68RogWYPFAj7D6iKKFP",
  "key28": "nSjR4M7h38ipFv18RbSgTa5xEjSXaJY5UpkNiWNBkr5SESLx4K12v3mpebRXgbiymUmmUeRAkQsfC4PeYP1W9KT",
  "key29": "5dwDA1tJcE2rL2sVyB9Pd1AwgNm2NFGtoDijnEMurqLAj4vS3iffFTpG4NGe8JT5dD7Bbwum8MYyNH9snPvbeWLe",
  "key30": "2XPXqa4mbUeZaPk6MTGvxPkgodKAJsUFPS4FV2UGFaRQHrxzKKpz5DdBMFbmyCDsEeuU9e8ARbiZsgtWhsmQ7mYP",
  "key31": "taGoJLGjXD1FnZTJqo4Lidarf4VhNnVHbaz4ZPAH2JQ1ARGRxUWNhnYDLccAcXUzDft9rz264g8CxTnNuQxLMP3",
  "key32": "5ASCpy4A1fjhwuFUG2EzdX7EZz8m29tFAtikhfBaDvXBQTrtBzWDVNheGkNFe3WLztTtuxBSEzF2VLPeaR44G5Gw",
  "key33": "3VD7eKcu7JdWfAFcF3gx7N3BvqhRPZQcaRUSqrk6yzL24jw2zoSMWwKZ9qiciB6EPTaWbSwFZ8Un7z3qsmLCs4Kd",
  "key34": "gBTWBPy9ncyExQstPanKSB4H2VwBiFrNvNAEbQ7yVZsmydtct55b6aMaGrmNAx63Ypq5jeTC8xAuU2KVCXtmb2n",
  "key35": "4eAGXKw6x56MqBgeTerYoC5kRzB6JtUgsVbMH4Y7XnDn4hxkjB8WpZADZTE8fBewoh3Zej67G7JoR3LYp13fvkLQ",
  "key36": "4epAKePmwPEsopHJxUUnv7rej6Wgv4tiZX6vsTGJGLVXnLAGDMpeh2xWCPxbS7i1hRkeuw6snjzWR1ZYLmhYojS2",
  "key37": "5tMuc4MWcUEGCphCn2rmCkwNU5Xo5RCcirsvAUUGQqbyCrp2LdEzLcw2az7itvWJAD2QjcEP7TF5kgttk5SY1RSt",
  "key38": "2G6HT75C9JN6wVaVCVUFacckmeRxgytCkNe6RuZY4iQ7uC3V94DCHgeRRYgx1QJKmV19LK7Mfywrvb6ypJ6KmfoD"
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
