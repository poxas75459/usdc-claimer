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
    "4pPE36NN6H33kM92163c3n81QecftAGUQGcGJDcTVwA3pdz8M76ymKsnhPRDBfxH1R1RRYdZwNc1a2e6e4TU74GP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KSDpiyfTB7LKcPkaifi4zUL1H4tuhXoWKZdA6XAJ9ym3XaG9SGasZpnFwaW3MP8zGfLAL2Eat4ptgDbaU99JASz",
  "key1": "fJFx1Q3un8V6BCXYPvpBp15sajP42t133gExuRvKoYK6BUMJhqPMzNtGNwWDK88ph9HrmzoYLhmwHxDJC6XegBn",
  "key2": "ryG3NnEPEwy4i3hAf6SS1kW5gWBWhLBDLR7th8P1XNTFagUH1UzvnbBE58CSwbajTgokqDUW1Q59ZALKSqamDzp",
  "key3": "4CvtzbcFJWrAt3dNDdjK67ms5uCrNhgJvCyKFV2vfa4JmTwdHuQGScvBUkBbofEzjhXiPmzzVQPoRC6MQm4fnbKC",
  "key4": "4TcBotrw2moST61EX8baREMx9RxKA8qEXYQnZBMZ9K5oWr3d67EhcAupmDx9M1YQ3m1rLwjgpBkVfB3bJeDCEugP",
  "key5": "4Z7HVaS7sQnzRhg6wA6Dbe78g6wPJhnDNeKQoBKrzmLDgsDgkJoZRioKNoDk3zUS4RHEu95Lk5jrpcYr9CbWqhMD",
  "key6": "3oSVUyGXuXQhFxNUUMZT9W2EbyEj9nTtJfNco86h4bguZoPLnSbhUKgFMGhfK63QRwnEkpwUjLpqhrr6jSNB7iwi",
  "key7": "5MHWr9o7shvotwJPpsnA7TfxXfBvEoX2MqZyp9U7AhfQJ4j2zBr6JKbEcpun9nKdhZ9K3mtwkapwN62YMeS4PJru",
  "key8": "RxTnWbdwztTxpb9h6yivi1BFgioLP4DtWrvrE5yboNDAhHn9frTJWZX7kPrwrkXsKU7biWhFyww62sZ37cCueVD",
  "key9": "2oqiqYtMBDq5LzvZGxQ1zi3MG7eQ1BZQeacHeY9Zmn51uFWMXtXhnqczGvCjbA3BFuUSH74Pg4QEFCeaVSQzQSpw",
  "key10": "4rXTyLNnf3j3pf3VtsVYXuS26PfnHmLUJbs1c2PtmwgPP1wi7WYwE7Gv79WVSNYYDchvNWB7NXroR5hSAVi58XX8",
  "key11": "5N95jgtmPtUqtdusXrC4H9bWC331KZkEcCVF7F3yig8ZSz5cCXzc4vx83Q3GYLk9cWqNijinrwVFnm9uN65v4Rwd",
  "key12": "48TqNwLSk351xqPkUC84mTXcZoQEpwZEF1UGQJUm5nPAeGaFCLHDdvh5TcfJcN6Z8r6pWD8tY2VJFaCDY2oenRtA",
  "key13": "3YYTtWEGzAuNZ4d4f3YQsWeUeMaTKGHE2xXZ9FpTNoupZiHPeVtawq8ftPPafGeWKNejB2Ubet7vR2koiTH7Zdxn",
  "key14": "4F2FjoXED8JTHU31cDEfT1tVGKBAXhSqmhPoUfbb1Te4sfw6dHfzD75HCSgDDRLoxmwhVsT43KopodY3MSpcKyyr",
  "key15": "5CAUdoKSVApKEd9F55StGFQYVVMBB3DZNTZj4HS4rRRTb21tGJoJKnFf1X85cgWwcLrBnPhKB76w4asXJpHUeLfP",
  "key16": "4HBSiFMPixFqqsxoEmt3KsjBs7mskfpzhz6jjgyoPJcjAibAtts2KCmaQ5oCs5kxtqP4RuVVwC3DkuGMxAwv3cXu",
  "key17": "2DLoBS5jBcAeHR97FTWgdP47VcVyLGcEkas1N5pRz4412Mg7kBMkGDLUb9bZZWQC137qf53XuAX7E9YhJqbPZT5W",
  "key18": "3UmSDcbEVwKFGpU3s8QdgNGowp3ogRLrxMTHgXTMkx9ZUncKXNoUGrM1ZixYXn4JENMMj1SGGEUBsn7xCwWgXLS7",
  "key19": "2unfCDbLishEt7pn2Xn8FyKCi9svp2Ev14ktyy6YNh8W1gGrFd8NjF5YmYcptTcU9671qXhV9kFELTQUKScs5tXR",
  "key20": "4LcLLjYKdqMeLNYm3fjjWeEBbo2Gw52dMRF6X5qdfmKxwGSwyPBvgHkUyXZ4DSrdHbTqpM8iKPQLw22a9tLdgP8a",
  "key21": "2KKZeJPPymuitKGHGG2PEywWNEKorDP116Q6d5D1tPcQxRkFZkAzhyhrJvaAk7Za9erExB4DGsPWgAxMRJmqr5gi",
  "key22": "31Y7a6jBaPwTbGtUi4VTqQ5x5imrJZ4LWGkhjCGL6iD58mL6cVqbxBmqLM96gW84Pz5bhdmHsbj6r21oRHTbEUnA",
  "key23": "2JYzHxTZRXiUYknZ79PfsoX4Ey543QB4K8xySnzWx5euejHuf5bX7pJp8HwuyESPjuXkS6VGv5vfJ8gXhk7VQRRy",
  "key24": "pNP2eiSAfcmtogzh4yEkxEZ1s5MeZ8V41hnqp9N4n8t2k2XwjizraFfY54NrE2og2C5a5fEaQR6dtBTH4DtmBBJ",
  "key25": "5hcXfu7WjaqxrVzWopkxFe1SE4AJLL2mqE84CjYWBhnXQEJPXgkphvPCm1raXuPa7bdL5WDQD139JUAVptHLStVp",
  "key26": "34vqjabAV4sRNvB8FdNAUq4z7XsWhCGht72iAoFhKbx2uCagtCj9mkKNKFDYmbEodbrJ5JjgUuDMbi5frdU5KaXN",
  "key27": "27D7Z7QqfV1F6bmigsXd9HvJRfkBahu7KBEbySvAWMKRfmLJyddgmmSrZVTbnFmxMm2XVawevAuv1jH5aAe2XSWr",
  "key28": "425ecdejfqimsdCrAZJVw2zDHqAQd4dVrbWv51V5z2zWwEjSRbmEnAatdcHzh4XanV8vpACxnSfVdR6noz42WdSw",
  "key29": "StPjUvth8KEdUtnYuFNdx9BKHWewBcyucfoEb4dsAcdX6AxfeeLHKKuxjmcmwn5xjnTiLcAYzweFC1sWv7bhMdc"
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
