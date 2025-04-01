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
    "4vBTBkbg7ahbMUW1HnEfP8H1vjnvuKdterDahbsw2S3wJZcM9BoyWAX1tCeBswQP8NGqyFb2XBFSRCegQ1wSJqMd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qPu4rwYjfjCmovVMQmcF9ZtzYYvPYko9zzgAMkTHuBkdBXmmfQfEAsRmf3KrTR7XyLu2dYeBcFGu729PFYHBzJk",
  "key1": "Ufc4JH9ZeQgauHh46g97rPxMqBEumvgBxfqzzayvMV1MPtHAMjZCzGidW4dg8o9eYV8Cp7rMgpHEizer6CKALFs",
  "key2": "5Y7NcRzeFTBDhwhyeSjr6fv1VgskAHHBuacstDPCXhQy9kUTZdHN92vR9wU2j5wGpToSCzb6JDJ6DDXYp6gAQxVX",
  "key3": "2WkfQY83QXxm6SB2v3gBfKVwosZXYj52AMDXRHMZwQZWBTqSrPTM6xk5mffTaJyuwakxaN1LskSKgrtzsw6qnAvC",
  "key4": "5qBKPiZJgjtteo9vi42K6myxShoK2QzE6FVZZ489rconUR9NxHKgN5KZKMCiXC7hUU3it4Us6tZcTWuNCQSBrWct",
  "key5": "4JT61XsGX5gtP1tZedfPL2EP45BZEs5iHmrmaEmQX9ABmX4JBCQF9KzaFQsxyB61Lce6pKvjEXGMMYzXEh1ia8db",
  "key6": "3R5ZBRQC8zTMS4sCgqT56PtAdB2cdo592W9TBX5JqjvsBTpugfUu61dRQLWXThEQs9cYLN4jprDrF56vUaVQXioK",
  "key7": "5xhFgwKV4whPdMib8Am3QWvR52wgP1nemnFLb7rRkR2GmxC2Xv2KDUMQZxtBrwkvZnyhvyTTTByWfGjGJtzeNdsv",
  "key8": "2pzi44eVgJFDjhCBzaP7LgjQ6tx2sxpCbYPJzY6TXbpAVEyhR3WCn2HxER4mZBT4C6tVFRSDXCbvSspMheiUGTi4",
  "key9": "2agJhq6re8QxSCYh8xQRTM8tpkry8rR5QTgNKinRyQ7swBf6bkxNoAXS3wQDPSvwy6duzdese1LK5RoQgbXUuDco",
  "key10": "2iD76W3gKuJJnf6pRZKkSphf8dpFmUCqtdM5apL4HCEpXxeArgK3fBuRn3NY3H8GAxDX97QbLaNwX1FvDcZEn8zm",
  "key11": "4agZbhE5kzRydyHFfw7Xp9GCkwhLQA9Dh63GiPbc3HiSkc1sbdSJT3brSf436QckuM1Rd5bWovKhaGdoA96mcjjG",
  "key12": "5tMKU549PYbriHZ6pnbV1nRcqKgpz7b6NrYQoWsw83jZtHQZMUwR8SvzFRrMn1spXwCyWUyjeRobBURJEwdsG1Kw",
  "key13": "665XujGiWgdduvjBP4n3U5wbihjYaJbjZYj1cL1wQ23uMFCnySyJS3zQjatmV9dKsPymv1fsKGoTJSnwSF46RbEF",
  "key14": "3joPq5YusEXEnk9XdCnpmyBgcQwGTRCGH4DyPgRUWdufsBbsWkzZ6wjaKTox3vnPjjetPsSopFnCjL9gQYJcGqZw",
  "key15": "22PhhsWQ1aF6a73kzBJoLfX3mRfics1fxBnp9b5MCkAHkop7aat1atD4voot6Ec1jFjQuDG23841K339toEaA7JE",
  "key16": "2oL3U8b368MhGX3ZbaJwhhJAgmW44kEHaDjxYKSvHhVezJde9pGpdgwJrFQDRzHsRZywVJikJ85rtHbMddrjsGWU",
  "key17": "5XwqY6Ueyu3VQAiSuiFAWzrFV7Ay7Yk22Hpa3pZeAJnWUNdF1wZrK9ZBEexJ8kzijFmwAthftstJNH5xHj3crAtb",
  "key18": "3yrHWVU5ZgoG1ikfxd1pvHnYDDGVGDKiS7NhNLHofg1iKvPmygoLwF6qiuoqNz12NfLMBZ7EUN6bGpm7t42WCZC5",
  "key19": "VXooESaeoAcAzRiBXesgr8mKCvSUvkP8UkvUnwdG4C9r1sh9rrVX6Z5sqPcFVTMkLpiPQwAnSFk8Dp87ELMnwEs",
  "key20": "57zZMW8yLZWQeTTS3JFArBTDbA9nKYYwqe6tRna1Y7hHQhqHCHmACYVSS7aHz2ccNkmPCgNugbG4uy39DVbLnSuk",
  "key21": "359uSa286eTCk1PKbXPQkDXmgaSCPi99ywANhHF2ZBYcEyq2Kf5foiGX3MGC6MeHFxsRFQivDEStBGu6RcgphWx3",
  "key22": "21Fpy55vmXLVDNaT2mAVnHGCSqCttCeK1hqqYG6gdaEGTfswjeQcML14VuvQfy5x9FotXrfHVdxCotNxuYZWFaPM",
  "key23": "CDb3Fa9gtsJ1XtNybbqKSy9ecxvCv67ReqgV5AcLDHZFkuvmHPpSPPs7Y59T5oCFnxNC57PdWrRLZdNKPh74wkU",
  "key24": "4cCYebehduMTrFCs8zare8TfRoFfTwKdFZ8mDi1e9HTNeN78G22R3oSHkGcJuC3KG3rzqzUJf5GBfZqVjMj9vZDP",
  "key25": "2vmjBNCiDLSUcYjMfRhQfqCV8EYg9hdPpUgKjipnVQWtDhsQvGbMhAhRDyq5Yyb1wejgiWKwX71HEb9v5XwhUgg3",
  "key26": "kgbkiGcdRRYKY6hwcLUWniGsJGKkCybCgLgKPhYvAyEyQyokTneisNE1X9B9Fs3bsdTL2fsi5vwg4gVqDCLBejN",
  "key27": "3JV7Bhm7gFgAMtre7qU4gZ8GZ24EhqnXNRh1dTngUS6xHKugDRBmeB9qLWAtgpuWZA2PpizJRTLihDnbv8UDHAhY",
  "key28": "4bUFK2g1UA4kVgm9ewqon29vC28JeoctJq7KN83JNC5b2uxDuVooTWU2jLpMbj7uZwCLwbDEmpBSEYUEk4MCCRKH"
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
