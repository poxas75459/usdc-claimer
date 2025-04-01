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
    "5BEJTWQWQoXgbQXJ8rdSjJksHMVFL1Lv3J5GN4UMcnguidNJYKgH3HH1NdUn5X6thGLv5trWnZHVB2yDhDe1PNET"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5teeDtVymtcF92CnjvZxkJffVtCCbRkmPLWvxGXq11Wc9XffLCSAWBK1DtY5BxbpYx63p3fLoNhjjqaJ45Jx4dQU",
  "key1": "2KJ2DtJFyyyUzZFi2Y5orwAnXvxbdZC1YZJJVwXMwXXxvNC2BACEcJvYgJqpasaxSs3mGgdqKzczsoVDmXTrMfSm",
  "key2": "2sfdgfRfWPCVrdbhTiAMZVHDhpEWmYkPJFa4hVuNHSqitXeQkYfcTZsthe8ecJVJDYU5WXCbCKnjAmtg3HYRo1Qt",
  "key3": "2Kf4vW5YaXGyPssWWdr1vMcqjMng9WUcAAFGHqGbBvMasecWPs3HG5Te35hefshDhhBNfm2F1YfVhj3YGyTmtzGL",
  "key4": "2RvCAFmr3tZYcPxzWufbwrHyGNFPcoxDYesVDs8UyYFmcTd7X4VPifdztgX3XqokTcLNPKd9wMYBkSj1D9FTb7qe",
  "key5": "nETrw9cA35KZT97FdAQvUnS5Zni1yyJGPB4SzuNL67Y5YvBr3fkVGTqWKUrdgzKVqJySUugZFKGE2QPT88AV9SE",
  "key6": "2vZXC5txkz9EAXVkTq6QkeWSqT9HkM6QM5EodJtuyv93zTARtHb54uQRbr3aChyffV6sfzyJNJj9q1okShVQ1SYQ",
  "key7": "2eYheNc5ATE2dpsWepwmq3GcuaHFa9hZw2jWfNd96DqGsSsjCpwtDjr8Vafo6Q8qENAnXvP15h3E9aECQUktSPD2",
  "key8": "4s33rfkAbJ37rV4N3NX9t3x9v5jtP8GdnjLjzroEQZSWaXcWNxgi7nsBbkKq5ukmh2VFhwdzcH2UJpbf62Tp2jNA",
  "key9": "3AXiF8CRwy5JWNp9mvViDBCNFH3TSvudTwzt29GoQ4MkPdPRDqv7YyR14Fru34LmUA6ahce23Lw2YTK9Ya6My3mS",
  "key10": "32RiLSkTdAgsbQgBiJZ1vWCSH9C1AF6PbosV8onxUMAQobLPrsq4DkDLncus9txvFVveMYgqMLyukLR8vxsFPiRP",
  "key11": "2qywnYTQaxDM8eq6rg4UNrzdUZ12NjkNfiGge9fCtBPVQZ4qnq33z7NnF8XbD7PjkSbA9d73Q4M5bweCzKM7dTN4",
  "key12": "sRPwUJMXbQWwGjvupRr4NaXMK8SvAo7ZU9sKGo4XwMez4Xn4UCha72NDy26yyhxeDY4rzwR4Mxtagx76VTfJKX9",
  "key13": "5hHMbUSBQjh5bnRm556XdzQy1U69ULV5Tm9UnZaf5vR5iHqJ3e85zMqvTk1yQf8kj2Rwxq96VNXxJmCGatzc2wFN",
  "key14": "LZ3CzS7bU1aTyJycMaaC9HDfevnGJFsEc8n3Gg8tbV3ywxAibpzjZ7eUhTFtBVNNe2uz8uhGE1N6wTLKSsSDp2L",
  "key15": "4kXkcTS6tnBzNXYXokz32PfNJr5NxHvZfTxZVPr2CHUf7ZDemxkuz2BiKxGZseEfqxcRgRAd9ZsD1achaXJvWEw6",
  "key16": "sXLkV1HZ9pDkiVguEQo8r5JEwi1CQ8a3jxkHji4sVUVDU5gSZKeQymAviXgeLLYfonDUCBb71noqcpmHSLueP1H",
  "key17": "3gsa1C5a8789ZDVLL3gFztrFosv1NkenpPQvjnSDPaUu6SbXSRu4vheZrg8yJ422iVBnQoy5MH2am3epZbUCAxoJ",
  "key18": "4S4PRmda2kayzUUBPWDjHk9ZSYVBMXosELxgaf2c4jfvDejj2KqZSCV4JYFViwB5PkprZUyQagKHiCzBwwDcZF8j",
  "key19": "ZxRAvFdKFdvHFuG4krGd3LCSgbBFWehC4iVXjjai7t5T9bBHzo86XNraVc5M3FQiGqUJnNVpEGPiDbWiiqnLfeH",
  "key20": "4RcoFc3aeCENLztDjPf5heaMrUTxJbVC31Li7UYyru7bE9Bcsg8AzFmh91mbpu7AR5P119qmFjrWs8EhqiMBhcG6",
  "key21": "5iLGerm9919JzPW9F5wViEXazSCBVpc2hRfDHUfkyNxJoZqeceQ25NcqYukFb677oU8s3nPB4paYwbb7boksjG2y",
  "key22": "5wtFFdHeRPDRAZh6gAGhctL94cu22EVLY2mBRwyGzP5JhywV5MgYxcKkAtbwaC7oocjp3wpNBCSezfKzx4LjTEtp",
  "key23": "ijGc6Lm6Ern6kEFXeNY6TnwBDAQjChES8hP9cbabADdFxUTnvxVdYZXrMBFDu7yf97dVwBbqZrdNpMowhYboHBU",
  "key24": "Z9c2C8x77U1SRoQogwkQedZnsWHzoipHDYipEZpJGfLAduRmsvue4RopQmfCp1ZK8FDvbE62MKwMRZtnowWgRj6",
  "key25": "3dkenvnerLJxMJBVUUKTfMSeJ4UB3vtHXmeWt3LKCkWQtFTaDACyeyyygJD6YmfgXDmHxbt8M3f62ZTi69RWrrQL",
  "key26": "2kkxgyUKE6reCRPHNVuqtskaEUtmk8QbhLRviPBXeuQRry5XHw8ZwGvx8KmzLEcUdqMrizi7WVNUgGHPNJwcc9jG",
  "key27": "4xer69FMpLSoWwbZXGyQ462eC3YfJwcon9aQJN3MYAEUaMe6ctCtJ1AR1SFK7WinNwrrz84QLX7PAj6PLFnpqBFM",
  "key28": "2dsAemPVAxsZXhriGoG7kwYXiVvyRUM1c5Ds6SjPJrFeP4atgjmXL95Eyt6gLgd8pMSJzkn6XQvYpMGVLyXc9UEn",
  "key29": "7xySUDPiuzYkkRwWP3oHWF9HEKPPp1EhVdKcySYx4TRWFfH4LyNh8DJhK4TuLiv1RUjApo2URbDjNB4YoPToKF9",
  "key30": "4EfMDkrXTin2GgG8w7aKp251tCZJtRr7QBiJENp2s7SUZw4xVFQsAKmUCpy7BCH7eyS9JzfGeHgF9McyTkJTqXdX",
  "key31": "4er7jssjEnnTSSKzUaLpmt7FLwXtmBcG11xLvQYucTnDz3eGG9xTYp4nmwYc3iGZkJREhpU7NcDGYA55UE6YXfXm",
  "key32": "52CaxdghAXZYLyTKRYi5edpBzkJH6yYn4mT7H7KF9EGd4yZqWYhQ6JoSCyPBBk6taLsdZBe4Cz9RVn64ZRTPWupJ",
  "key33": "4ZXQMzigENPya3Kzt4DnvfUhJTfVnyhFxmEpChF27z8fyKrDjQxTAP832ZySEVzbBA3S4oyrBGAezSvpiGkAco4c",
  "key34": "nYJcddr8eiXsVo8Ypw6cJG5Gvwr92g1ZP3k9mUGky6tU3tRtVxJuPgtqoa7YuVANpUB6gcQBfphnSR9WcV3YCUJ",
  "key35": "4AjvjnfwpvPU8AoHFk8M2Kd7gCSgGLHm5XaxHQYPV5XiBWoj5DdgeZ34Y9Yu4sbKiRxZkJLivehqWRv2Vtgy9f6V",
  "key36": "3Lh9PJvhCuWMDzTGUgEB3ScKpZZVXidkD9znUe3jW5u3LvutU2H4x3Z4DBCt6N9XDoGDVRxXQb8bLj91c4dVHKZN"
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
