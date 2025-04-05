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
    "63331b3TxtjFnpU2WQUsLwGyS4mcLJ6zoVuq4bj4CMmU93jBmwna9PVvRji7nHrm36XerazRJovBhKcteEj118tk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vth1sFuSJCK5sR3jwBHC6Sjf1bPbjsyJ4iQmMw8FWcNK32GaAgytuXss2pNKbpcXy1fAZ72xJaSAkDBiBVjPzpF",
  "key1": "4rgfFrYfCRxoio1boXXVMtg9rHLh6hLkZhcFCM2PSsC3cHhseeRthmvdXw8c8277Hwm9Edp8Mqsp1k35n1KjkhsT",
  "key2": "2EBZuf1HF5yKYwvx54ChACU5wFuCLr7ZSqpqwsMz3thfCWVtkkGQkCxPyJQfLQuJGTxq41vUFvqfdd5ZUMoSvLn2",
  "key3": "5aA2vMVj7uBT3FVn1xV98ZeZF69moit6LavCXNCPSQahQmhMMBNhtBriHwcAniq8jzgsZLaeL83EL6CN8TgHnoVT",
  "key4": "rf3vRpTv7wnKrVeEoSfZPsPfcUs56DwnbbtVn82kujXKoJQWRyaLs3R6aKXarTj1YF2LJt53tx28NiqHqRZhWfq",
  "key5": "BatgKsHiH6KS9mcjiiQhtkLqmo8i5UYfFLMs5Nqu29x4He2ks26D3xqMniyK3hrYKJ7dya5Xh4cKzDC4sjMMefC",
  "key6": "4VXx3yXAV8agyqPfuTRxG3B4i99J6BH5qt9MMhJ27YyKVW2GYvSnJZrzKUZAi5UV1PWDfjCD1bdmFuP7a3b7VG4x",
  "key7": "21crAXQ8NQB4Qjgi4hQ1QYzCu3kbW6S5LG8E91PnzrUSUjn47KpvLzT8KiioyBnMmcdLN4Vtbzdr2YYvBtzUJy12",
  "key8": "2rm8qqDcguXHuVBjDbtZHHUzNUJT9hNZZmNzRFtGLoz8TUEMtEiWZ5tGQ4D3JyCnttTDxy5NpPTU9FvAhLEchc6d",
  "key9": "7K4qujLSoEPjmTE4MDA4rhxbm9WK3LgAjrHibnNMFsiC1B6ScP9CP5hZWYpdhQvTfGsmhRJMrPm4hJeqXt3ELfo",
  "key10": "4bJdECnQHDkk2jxV9WAVvA9xDxPJDnZ8LGN7SHbPZWH7UzucS97QDKKAuWP8Ytze9YAUh4bpGrSrQ3n3kdoywXBR",
  "key11": "4ZkCtKTUXS5hWKBypDzrF3VDZMoaE6BeBkdYLx4UqQEqHSKBDEgnKX6RpS4mVRnLjU9v7dHc6cT67CRxLTpwJnbt",
  "key12": "i8x6fEJJQAE2mQ1zoFzMppLDjaLB1PTLweUhiS3zuYsXaUfLKhZVuTCYeyrhTmuCPC1M9jTtTWZFJbcJQzYj2GS",
  "key13": "5XzFQRWxjgTkEj6mT69CNyScBFDLDWPr9uDB5Vm627UnBN73MAH8K3GAkYMU2qDTUsWKwHK74LudjkswGDgc6cwu",
  "key14": "3Hi1bScFxWjvUVaLXenhpewbBc4iStTsny743kpr4Xrz252SgNKEG38eMjrLZUJgGvuKG27AXSBJN3LqPuqRnyFv",
  "key15": "5PGK2zVukAQ8MyWQoEaNX8ErBjCrEiUTM59WibeFoyLPrkGbp4yH3iE2YvhiX4XebKQcAnz5kuELvi3QKWizxCZF",
  "key16": "NZQ6D4qS9sMzL3cU5Y55RR5oAzNCpyJjUJd1MYucPPYviBEkDvqiasUL3Xx6wiq9dbe5aSKpTrxAmEP18ib3Li5",
  "key17": "6VTuSFQQvceriMwb1y8iE1JP318tnMQxQjHP4BCt9jycv7ZAysdbSKrmU8j4VfxkGf4Jxao7L53E4Le5DPnknpn",
  "key18": "55sn26LPNDpUEgaqMmMzjCF5DeQAUMg5K43ypxEhUK3JaEKZPq2VT3Un5SkvkHj1NwbFCxtbrna7JtetkyxXgNy3",
  "key19": "2GKDfYW2QEuzPFb1FJQRtWfeYCpmRoUzznMzbLdidcjy4LpNBPSb8wPPKbFGwMGrPj9W7vFSzqMRbuBcuL7rLnsJ",
  "key20": "4sTHkvoEeELha5xRi4S8NSvbNpJiA8FrpG6E72ZmqrqSebemFyQsNzk5CnboNM7FeLLdP3Q6wTkkprDq1brzWeZ8",
  "key21": "3kX1NgVmmHnppWgBPPTwmsY4SJ8JvuHmcr1zdg9pjqzHLeriXbBBYJDPRNqJb4hWj7JR8tSN3voUj5i1y6ma4nqZ",
  "key22": "47Tj57Wm2kLsVvfjSQVyzG1JKATfGiWpr755NHXpdZosYaQ8DwJ7CWigPfJMjS3QmyXin2iDdeCQwn4wTa2nw5RB",
  "key23": "2kQ2V9wdQmqYeU6eCL6p3xyyV5xEbCRotSYzgzpUhZEFpHxuXRBm8YGYCNmp6bLXTougjKL7RjcF31qJtq2uWnRS",
  "key24": "2J73DJncwJVNpt6XRMW7fT45iLDNAcWBCD3SNjVoh3x514ghpVcYT1u6fT6rypNqvEdsnRfDgcYgK2egJ9YtRHTP",
  "key25": "5Nj1m7r8n5b976rdGfe4nvLcjKwhyiW1WH3Li68ex6ArrCf1Rqv4ijLf9ZgoRXJSyegEiNX3ohpc691LNXPGdnNh",
  "key26": "43kLDyGYXNDVzvtgVYkHxMJ6YND2nLjiPwx3n8tx1r5PMYxkJn1kfv7dFjFKWkjPLp6xGRQbqzj3xhnWLa7eDzNb",
  "key27": "5RGgtmHh7jJp6p3KU5prroSHvLXtShWY9EYJwDfMBapBzWXjjEimn9duBYiAebEcdWqienDDx1Pbe2uLfrbHsgPn",
  "key28": "4nFXMkS5NdzCCn74Vjz2RYLTGkHZELD2zhuRtnx8X6mz8NLKTEUUJ3u6zo4VmbMs5Kkanqp3pyX45ky8ptU7zAq3",
  "key29": "3x8um5ynzwvXBPj6UQ4bCNjzcEeudUF9BSaaNpQLG6Jex8tir36rJDrHfarm5nMqX2dhHnKkpZx3rX4ixeY2vLwH",
  "key30": "35DfqZZAHM9JM8EYTg8mzqD6KTyTZVbTved3XegzJQ8jty3Z71AaiAifAQLi9DUkhyUCDdzxYhL3Z6CB8E5cVQZu",
  "key31": "3k4HVCtuqXkLjXGXPYDugnvkupPEWRe9JiJkTSZE3M6yRzkBVRxqADSTg76xRhvsANhdWSaJbz8sehooZPPMYztA",
  "key32": "269doCngsNHsoAYRPSkVAqEhUhpixWpgFyuiG1aQnhTrMJygtgv8KwpyZ2NoVqFA1WoqmXWczRBKA81wj5c81kvK",
  "key33": "3WLWNHUB4GWivodo6H4uwuzEbAZ1ykN1TgqavvFTkH5sX752tHM1kJvJActJfdRQGFjg7bomuPFj8uV9yKxktAv7",
  "key34": "3p9EjWbgECYevK26kYCxhyMoohC7dwKeZjvpmqBUEqm187QWCrHgSH748HEKFphKzYZAHuNzyzzFsXMYwtPE2XaG",
  "key35": "3peoTCcHMExiWz4DHyBfhF1mne1ksfMyG56mXZtHUutN87sBYmkQSDy58YPx752ugFtKS1i8hcRUsrLKy5q7VF39",
  "key36": "2ZvvPAQ4MazvMhSwsLq6L7sCMKcrTXdBPNbRHLu83maKPzYBaw6tB3SYQtfX62dVUQcCR87y1D6h1Vs44JsMRv4T",
  "key37": "3jCdLJCwDzScd74Hj9fDr1sf3rzqHn4ZmH2tV5tzwW83Rthaxtk42uXSzC6NYycW9m8FyjFZrcYMEXcjp8Y6L4HA"
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
