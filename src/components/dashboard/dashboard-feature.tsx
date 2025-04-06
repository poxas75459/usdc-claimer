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
    "4ZtPZXMXHc7NkdADRyJqhDqxsS49qQCwuNpU656Mu6Pnsy2SNwK8gBvGWqEJVReMihNxaQuvoJmkVfu8nyzicFYx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bJzKVDYTQQTqbatTHqWVdNUAfAVY5pbFaqd9SE2Qqbrj254yMV8FXQk6dFFGyfzrgkQ9UHTVYihrMchNdFtdkQm",
  "key1": "RBP4T5vWKCczbSQSQMyw158hdprswmrgobo3vxtRcZL9j3s4aV3T4DN8oiAFvdHkWd3KewrhHgw96d86JAp6JiK",
  "key2": "2aoNvCfm4z7GUMFZVwaXUZMrzjdS8MVrKHr9w4TbNDkD5EE41KFKgLbqKgdz4CuKfNazdHK4H5BKBCCK4Qtjam3F",
  "key3": "2xZ8XvVB6sRGMrbchSyx1v7MUFdQi6FdzFveEz9ahdH2o5qXUP6SXLLx7R5C7gqUVXRapc5eKMKGYizdY4Tgfz4B",
  "key4": "4KJ24KNy49Z7eZiKpLKgECpcnT3Z8xx8cnRDQtbYYtJdDDE4sLWtcqwaPF55nLpqooyCDSxwdzFJsuSsSzYVYF7B",
  "key5": "28XePUDDxrbUTrDvzhU4qiAz8pFvJqyMGJd6koChDEji3NE3VzWFZnRCmNgWJUr4uzvY4KkL7tbJRexagKTLhSNz",
  "key6": "3kfWX2kwytQL9DctTUTpqP56uko4pJGDqbEBwrmqe68ag97UiT2TXzDUJfEtnqVrWnE72gykFbEqkGeVJwUjyHFg",
  "key7": "54fcyBT9QdiF5XMo7JHmk6xRBG5uXCjMQXRzbTrrCdsBMLrRUB2Lx8DdofH8iVjaqtc94zcQmQiXCC78sg4uGL2Z",
  "key8": "3TtH7k5tWSLD7GoNGYHDXz2C59kJe7gnJ6Q1ygFWhMLoKtcmy669H93LRbEG3j4tYqwRgkoFu544sZuULHWNqiZL",
  "key9": "3BguVwfN8G4WgrzvGD6JvPbcEMTNbrNvMiBSFG1CMuA4xfAU5XQM4iv9tjrvf7EovdHZFWrWnRGCqEjJ8uB8t4Hx",
  "key10": "4gQCBmTpMKUwXYDHXvRR9LyBGKrJmUsCYxaLKPmyFA3Cdqy69eFUFt6pqdbe9mDaEntuD9dWjPBrJgeT7MFMuGfv",
  "key11": "Ght589ttbPd4AtomruD6mtXTvun5ymrff1chmyAVzhABNLGipiLJAmiWCNZQv3kzo7gHMmhgH8npwKhrNEaEcEm",
  "key12": "5W8pD4SMFqj3DSAge2GJTuyre5Go6bQ1fPfbwkeYjC6RXyp6UFuiCto2Dov5o43wAnNFZRmoS4kJF3BEfHL6rBJJ",
  "key13": "2kwnwndy5BvmyWuMnScuzwCTbYXbvJpULUVx29LLto7uYYx3uFQSQ5J4CmspW1mEsLBc6gRAvRafMaxDkV6N9JAT",
  "key14": "3bGABRCgvVuUThtwew2EtT6M5i21FG7Lc4EbDi9sXLaSvGU7HqTAPNQPhMdioHFW1bt8G6ZEGDXbxDZNjtEeXVJc",
  "key15": "2Bmw2vHSQvRgFkyHS7avFvrzj3VEgX65TmZZkDLcxcM6SZELnFfkmN53tWCBadKBfKNfyuXz8QdE7mrfRsgBruhR",
  "key16": "3F8ZyuysMsU8CaXoKJb5DQfcr3z1Hk9BUkrdjucD1XN62jbxC8CPh2iPHnGuvdgXd2EkjUrrEBpvHu9SeqB48akk",
  "key17": "4Jr5iqZADxxkbuvoXWa9vrpZw6iAY48hW9tKtu8sRCMFpyKdJ5dmNfjSx1aqRyHqM3YQGagtUkoHkH5VzEuEUy1z",
  "key18": "5RkrnmjzhVyArVNukkRbEeKE59cQ3s8cWmFidojAbdjsWF1oKZ1e1YLCRtcZzrK7Ln2unB3VTJFtefrntN6WdBbY",
  "key19": "4N7bB1wf5cvPM61CyDzU2TGKVSuznnnTxPhqRk9ijheKQHufRUgtE6ec3RtK1PFtgYv7Li2M5Hh8CaRv74RYK5tz",
  "key20": "5zEPM8u2otcfMDHchmfNYMiscq92V3Wq19372dKgnprTsRyJCLJJXXbpiBoKmUYLS4yEqK2R6qRqcLaQdvKaaFee",
  "key21": "3iFENJCaGFispZU83njkGak4GTMk4bnEqeJ2LF3tNgoSeNUaGnvE3QyJqLW22PgzChZaKJhVGQ8MZ6GcrGii879Q",
  "key22": "4t4JjYoECc4n7Yc1vzBdTmGvkHkpodGBa2wtpKQgoYHQ7JCM5jvLBs5TTdEhvaBsiJVV8TUVtieS4THGnF1R29rL",
  "key23": "4RCedx5jH4h43Ucnyp3RcQd4g7VdtysoPFRWf2je5yCJVkizza7rp6eQ6FoMvfPxyQ2YSCWqH3AJwLKHrKUwZqmB",
  "key24": "4BL4V69Y2H1iHwVZ5nD5njMDjb45TZeRN9vE3YadYqa64b72kzYanDr2yszv8nvz3TFeU4Qy3TfFtw2qxEmkQs1y",
  "key25": "MMQ5pHRFcB22qG1aGsnDKnwfcpmuBTJZ1egPLrLyvkG6jAZuJGwTGeC9TsLuWBJQLRoAKK3s2kgoTViUPmqEoiL",
  "key26": "53QBJXigLTtcH89LfiWQ76NPYRAjbLhqQkJLJVsrVKdCfwWtgc7eZvTivSmKaERcKcBkqg9gqaUEYJcExFUma4ZC",
  "key27": "46UNGgr2BdGKmP2Kay7QPdpT3BFnVUPPdvrCo4WQhPmXwUA2LBSzvg4KBYGQ4Q3bRAcqFjVLUeMPm5tJwXWZpGkr",
  "key28": "66ATwxR5sZVz91FYnjWc6F77PmkeRN1AJ5JNYm9ovWmycYA6BuHcAJ7yYbXm9dS9EQRg44aw7ybARfqMUuxwfRg7",
  "key29": "56wNPXwNhDT8NV66ctAQCxkoTZs6nqGReoQAm2H8MozcaGxChzSaASQCYajez2mPaAzjAHw7DPmwRKj4jiy4VZmi",
  "key30": "38EscsaDvxQHuQc3rnVD6c7FEjZZ5sY5dAKXXUChkUufzuLomQJ7fwsUpHmgSssSTaPyc2s34BzNFujx8NyXNhL8",
  "key31": "AQAgNEEdCwHDeQRMvyp3D2HagWCf6RCX1HdJx3RmdtRNnYw5UXwZfaPV4cYW9j4jz25nrvHYUVJgww4hmk78u8M",
  "key32": "2T9kDnvsb1PNbvohUQBWzBiYkJhsD1j1gYEpcUBKiXJB7iFGt4UjChnvoT2X1F4MN4YwhMdirLWaZgbwMVBsWThE",
  "key33": "5fKANaoGKbE9wH6CTaEdJtDYZiCwSsLUFHStHRQAwQSJDwpUWN7D3GAbgnZHwhJnrK398bYEnkDLY75XqqP41Kt1",
  "key34": "2uT5VPmJUbRiN67pY2MxcCZaU1JmYu2CrjUmpsZ2TcLrrv2h1HvueZRTYAFj7ShKAirC86GrmF3xVLCnJv7eU5pH",
  "key35": "45QCNusLSQ1y1rkAUEKCpkjPpZPZ7nwXBayZXb5SEq9LvkTaD7cgQwffcXxWF7WBRUN8Xv59qNe4NT1jXxWCwkwf",
  "key36": "3Cpm2VTacouTuBbf7xQgiKVgU32sqEPUUHfb3MX3WexucTs3rpthrbAAnDbAjqtMY1XNfJk8mmKp2YrSouTfixwC"
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
