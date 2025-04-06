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
    "3L2qVw7x6akEcJHzsy54U9xVhs6tCP46Kbc2wHQBevUdRNUWMnBuHvUF7sPeAANQZrqUd8Vd3ZKDz6aKyfRPmMZ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2euPyBGEeWQSTf2YvXgad6WY6yGBa8udCAVH2q7U4pWvRnCNJkVqUaorUzhFcz5v5VhiQ3Kt29okMvz8SUgimfaz",
  "key1": "3wPuohrZzU3w39agtDAAFHd6M68L7cGXZVvPEEeenfUYNRYSkTD8moEgMjrdx82eH4Mpfkq4LaSTqJfzbcRr4fb3",
  "key2": "2eTFjn9o34DrpjE64TXGxg5ZSecP3zcCwB1u61Dt6chEgWyt2c7Cu91Hnry1nymdG2Ek1E2rhRpT14ts5ZVFMNZ1",
  "key3": "3u7AmvSjrcH45HtKv5qGsk6foeUpURFd6ikqxAGHjvM45kN2xX249wDUjsDHG5p2dAoQdPJWdy8hEZp9ph2HuWRm",
  "key4": "4tTE9WYZZEmXucWP3KwVo2WU8HxMvEarkhfDjXSwXX5jJVqUH2ijLovnCvEVpdQWWBFNminqBSg4xN9PzTBWgvjf",
  "key5": "2VAdCN3NxTJ8TMWC7QSCGDUBJ4riyY8WQLYoY23XFmZtDxug4iEViNeFUxsF8kThKUbGiUvLLpfgy15RBzKnGsG",
  "key6": "4ny2EuFknH8HvcyXd6GqcMdbiS3XbAn75im5rt7NqjDF14Ep6916RJPfFV9jQLmQBXj37hbCG93KDKGfN3L2fZij",
  "key7": "3zQWHsQpaSRAf3qBpQReiND6rXKqAe6bNfvfZvRubCAK36J1L4tGQcGPWNEs8FzJGGFMQ7CN4hDi8FCmpVcoBp7g",
  "key8": "3h6Q6gYy7DLiVaNPhScHoYNhCoQzgCYpJofbAoVppmCXuKEjcpXZ1hixLt1DaHgjGJGiBmW5D1oSCP9hucBdh7z4",
  "key9": "dVouKxf4y5fZQKsEbfERiwWwVVCbtzjbi6WfDAcQnMLQDbBFk82HYvNuCaRQjNksJewgHhtuyqDy9AaaTfNWENb",
  "key10": "4MazRuHj8rFUeA7puEqzoxmtyZjna42jGtoYB4uUrEyW6GWcGAWFMJodXqMU8zTSBkmwkSUWMibYqiPhRLpQxgkr",
  "key11": "4xP5p3RedLMV1WMPgCCeRXSGh8Nx1Wy1LqGGuLmVV7r3k1CAz7FWJXdmTuMtJRQGWUoh1yvDSqfCnNNWuqXTwqYr",
  "key12": "5pKrapgaz9yrPGaWXXf3XghsRfJcHPHCoAuKWVquQGvnXHutdqWRYhrdcd81bFEJoiA8HKHBGmRQdvXWdJAULyfb",
  "key13": "3B38X18CtzDiVaYEcFhusZaXCELwzBLMMCSJKTiFMtwH3y3tEmUiowu9YGKgT5XsS1mNVg9Azgponjwa2cFAAr4i",
  "key14": "NWAC2MVvTNkppNwnpkhy4usoYtijzpFa4FfGanUu56acQdrvPWX3Jkgc2zKBCVtAK1fPkWiLP29ob8rZLhqEp1A",
  "key15": "4G743ZJ8i3tvEbcNCieW16Ljbcchee8gyF5R8iBiWxkYA62NSWKDrDcXNbfVQW8mDAsNhGwT8oCPDfHVKcnCbJ95",
  "key16": "5WZ1QkdfABVFEAg3HQ3RvqBPtjPxSsHSMYU1Lvhn5Hoa6J9uhUUUyzUsYo2o8r6u3vRPZrMMXrSWDKedA3MyqM2M",
  "key17": "4ms1u14x5HkUXwLrF7QdTHqoz3ucT64tMiXZNqMy7DLwdXuusMQAKELd7L95EDFqNVNqsMbgq6LMYqmKJmhFJfKi",
  "key18": "3ZYCeWZFgzi34dcehmttSTDz2FsLPYbyBwyGc1Me9W43EtaHAEt6HeYp9xLLEEiGLrtgMxA8MReTjLxSL5RBCZcw",
  "key19": "5bzj8sVBrvYdrNBUw9SYabBNi8DBhrc6WbNfqzmvy7LBG1s7sriU5oBGpAFRTymoLN2UmzMaKgu3ciZKfngXuUeH",
  "key20": "4S5CRaYV54jNMXq7Zfegg3pBTpVJq8XCkZEPyMoeundMy38DkY4FpcwrSbLJTBRAEDdeaJ5k2f8tTeJp5GPvPiSj",
  "key21": "2opV19pR8dVTXvqHsNfDUgwr1HSi6Ts6zrAJHLbqY494S7FEzsySG9jNoU5VmvqK8oYXQ4PEw9pRuzv5JniQ2vJz",
  "key22": "ksiJqydfzguJw8wU2kziSzcBrPsKfcTN43dM4jCMaVAXpYJ3qG4XWNpt7DTMTsnKD9rJzUogUyb7dFWf7WC3i7W",
  "key23": "2rdtMYFygi4ucetGDhyeGFhtV8dKQbQfnPcay9HsR7cAqD4TbZ6Pe21LzpKrXLs22vrR7seirHZBhhzodr5eRkBb",
  "key24": "QwYYbeVozADrjFLZEVrF3SqX5mgbLcdiaSSHiufybBripCbWZ3JXpCeGFwtVdZYUTmqjtwb1dxRfs6GXxhh6TRr",
  "key25": "3sGJFQFK3tG3XTMFcquaSrKZrqNzaPvEDqdXpgJf5Y8EzbjdgpbpUu2JyBw54K53faqtvRyNuWyaioW481X87E6C",
  "key26": "3RxfrBvcwXpv6z3YBhYkwLvSk1FgHGMBw8DQ9Nn9HFHJaa43W2YxxPn6iMtvBwG4sFVxJ9KgrHjFfDKsyBQMipZc",
  "key27": "UD3VuZudwTnxwxyEntuZo9o9K4yAYDAM6xcREdsALWDr43fLgFUgkjRzJtuNUL2Fezip1NvAaxJSku7qkbL3BT3",
  "key28": "4PJvN1ow9id6CJRBPEiVsJ1vPEDAyzxok19NufG3BhG4fkyfRn1ToeuhrFveVnBsTkezkygyyHsC8DWCn6cRrivE",
  "key29": "5v8owUQokWkmctdF8vL8ykyn8V8x55AwpxrxcDS3NLz8KPPfBjwE1RkuUmGTo5Xz8jfuQD6MKgNYqx5Jc6aK6SNw",
  "key30": "5G52qLrnyjjRJQtjscfUJUL1vyjvH4Gs44syWYkiNMah3zbUuQePSKPJbmBCiePhAB3tPpoV7SnDrJKivMbMiaBD",
  "key31": "zb8qBmXwXi5rphigTaDEuuUgfmDjMog6hPkoMb7K1FMTMUCeg9P7pXdvonbDFAYozciTjLUk2P3fWuYbFzWGkMP",
  "key32": "4Sk6KcP11SL7doebJFEC9kyQoVdZM1bvbRAe3iafngmDFttPjHy1HrS7cxYstfyM88uC46zc1fNeXqAf68ub8dfL"
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
