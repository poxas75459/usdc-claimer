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
    "3NGyd8VZ4Gui5bCyEWoRSCV12BmquC9SAn82h6R7Wosr7m4xpAYMJnovQ3rQUJPmkVYms7Eif52Vgo6ScqB3yrwu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XsJvMnye4X215PsvVVhSmvaqfmwdWQ35dbyV8yd8JVrLCiJLivZGiDeL4e7as4usVQoXQyffxYuiqchm1NKU8iM",
  "key1": "24y8qQGGJRfWtKiuR9TSm3Xg17tRr1ynkMEB2iDTkNp2FzRpKjLrcSgkd3bvTxFtzEahtJ6qhCKB5mTqSjKT2iMJ",
  "key2": "35XASiBqRHTTcpwXUsuPmk2iAuS1MDE2TC7Aia4SHSB6Q6EVK841CjpGxqCK8eHbKY5jkcuuS13P98vvFqEXcp7r",
  "key3": "3Ca6nE87X2gSzVhvKgbY4SQYKzqs9qEq2NnQhdC32t54oTyYG5W1Yye3bMvQeZaKGyqp5WYYAqj2sM4hFe8wgS1x",
  "key4": "NCDvr5MyWL3dznUiDjdCE5GMy9RzjwArVZUkVNUPQFKCwZG3AsiJ7yWLVqDbXBhH7tQSfTokuJdPA8n12YxTzZy",
  "key5": "3gH7yLZj8hXW53NP7cXGzT1BkqpzftE5wUYdAheaXd7m9ZxKaC5cEG6n6mm9kJ5C3xJscF9vSCHXmQpnoGkZNvJs",
  "key6": "2ieY4qDMB2NquaDoSmR5ct7NJ2hZXJFrUQyYdADF24pCPhGEVFHjwwC4FixXqbh1CzDwnjtuu3Unt5ReoaN9356d",
  "key7": "4XXx1JEMzHxndoyaQzAfLNGjz5uKnzNAAFSn7V9bH6rM9QS9gS6osFZFTnfEkJE9ZiiWeny6MrZVeG7ceD6PsKP3",
  "key8": "2bqiNYUdnB3o2aXkXAWgwid9rQ6Dzqa2NPxFBbH9W3zQqhjaLrx1LbKCT7bU678r3uj5t2ckiSQRzzoJfuRYif8v",
  "key9": "2yqxVdNbFBacTPoybaKFizDadGqvU8vQ95tmtaxqQ4UEgFGWFGWEgwp7aLuM9mh7KqwepvB24CbDJdRcNnbkbDjC",
  "key10": "21hKzymiJ6fe1ktohhGi14PaPQ4qxnhTprtK9VVbvthKD1434T9iU1thhEcyUhM2JT4a9go8MLt7h68St8psdtY9",
  "key11": "LxBZmkKuP8iWCYBabG5EnK7stB4898zqJyAt3r5KkVfiZRLGxbHjsJq5LxKNH3khAvUjzUxAmo1At6hDNgtayCb",
  "key12": "EwmAYDiUoumwbKdEycY2xjTvrTRDkQstPvQZkhcmdQsZE1oKVA7bQBNGbvnALKS5mAHtpGEVZpKfgWu6QZxKqWK",
  "key13": "3RjEfCLcvKyazmc36zz59NzxB4fazpFJg8ERvsVnC37a2tfduE74NvE22EnFugzvTyQ6qnUcR17VEkF9BPZgNLRw",
  "key14": "36jEM8d9GvVxwCQQbM6ATo5wJPEteSbRbTtNYTtWdpxphK38ixQdLz5hZc29PyYJaDpCkAHWtdSf9KFQPqNDT2XX",
  "key15": "4Y4orBDffLxAF8C9n14NBgScuCVnX9nvpTMAbVDz44nwrVc31BUyMMJk7RfzYDms1dp3dX2M8g3B34E9gK7XmnpE",
  "key16": "2uyir8cVeCCMLEdcSejmh7Z6NtW7wAtRk1FKgQoGWDPgXDQJTq8Y4EpqWcZgnABveiwKV4G8aUrVVBaVZL2x2gBw",
  "key17": "3wjV7cU5ki7bG2s7eufQw85iBsHDGE57CFBMgMxXFwECFT6s2wnw9AsWxJBp1omVaZZdHDd3qvNwJtwGwDKY3139",
  "key18": "4TKvisVCnPTT9zimKCKFerRvUGnRtFMMDiuSojog8YL8EuLbPFnZfmaHRxLQBA33oP5p93kJfS8iJE9GxDdDK2xe",
  "key19": "5w2iiEWE8smnCNAemW5s66sAcwVRCx84Pmx7q5p9UpoZG27g8CtrLZBW8ZhAhUC5wnULXik3HpvmApHmaF1ynwRh",
  "key20": "5QWSswfG9dUnuiLQKHDh6g5BmtWKo2ESAJYm5w3PSTyLru3u1Z2FuH9ToWWoXzK8V9sKTG1hP6nnPx5xShP1i82T",
  "key21": "C1zUPSPfSWEZWbehCdBbmNmHWWHTMbx8QK8mn7NA9kUuY3Z2oCp9Cshghb26y29tUi8kPJ8efCiLubLSYczTTnY",
  "key22": "27ETZGZ53DuGiGkhkLeK273pbuAGMe2dP9q8gCkaRFywJABH8xxy7MEsmcXoQ96ZhCxg8vnQnuQTwVsgkB12CxED",
  "key23": "rL9dZxfnDKhULVW8skj88o8J1hmuQ1VzGGwSecP6NQjPRZGh56SzVf2homQzqRQSUocLa1444cfC4Y1tTY4DnQ1",
  "key24": "rykAHhVXsQztLXDi29j9wJAgW6HB3BDse8Wy9X1hYyqKKwaeZzonF2dWrZs4g7qHQaUXETKGzFYcsaFFkJQe67C",
  "key25": "2yCVfcNRukHtvBQcDyRxcok3F54kpWcZq7MpgEiQYLiadnQqDnbaCdKP1fZtzZezHfh4P8J2MG6qh8W5JHW3aSpw",
  "key26": "Rje2Jx9p3AALz8caYXuFyVg4JS7veRJDRBRg5HAdA4yLfjFynGA5rd9jDikYrsnbnYC1ZsnohJZyAgAut6mbs7Z",
  "key27": "M3e4FFpkGNpJXxJLs5zB9G2jaJ5QgyNoi7Ci61F6epMb2Gdp2epKkneGGLQp2HnnqaRCRjEzUY3vS2DdaWEYqyA",
  "key28": "2pMZD8rH8omieDJMSXmutKQuCSFrC1qxQ5Sh3eqhDKeGdCoTDP2y7pcFHt9FBtzYaxfEoyDmUpRTZQNgc7R4h6YG",
  "key29": "2qzQnJWMoXAPqSeazyEMidsQ8D6DFESDNZYenPx3SWwpHgsrY8jve2C6Xn8h4fSQ3FERjyApzHbi3QRS7hXEziim",
  "key30": "3yH6VBNhCGAcAJCGP9DTDoXevmSKtFUbQSarvUtL1NktzRmoPXxa2CDYePJcVcxey6MgQAXZZ8mzRsnFou5uddAn",
  "key31": "5AN3XzG5fj4nyCCWLfg74wXDJNEdnRP2QCCVdNDUdB6DSVecVuYjK1ta9TcTWx6QtTN5A3VaF4x4Tt7akLYS5nRa",
  "key32": "C5iHcxuj54ooDov3piNNtf1USQtPe7V9UxfUMW9YQ7qT1HVpCkp1pRBH3oGmxs2ZWvgeALaVgp7CBqbEGfa9aYN",
  "key33": "3an9fnrgta8UP9uH2FQbnrfCwaxZUrNkSL62T8GQtX4iNr8iqwBk8kJcCfHSg1AfVyZpU5AU7coiazkD1xfGAQUn",
  "key34": "2CUm4b1wpTXN7ozWnfibTeMjRAaRdDKb6r8BXYcxAsnWTUvN21e9kquEZACFaAR28zkqh2wszXRAgq1FFG73W7H2",
  "key35": "aVjCtjmkhSmxKz2w8Tp2Z1PZ7PNGvKXXcyRU1YBgyoR1TY32GMXpsJB8PWDDvZc7FsmzAQdSYuEtSQYnvh2CKFQ",
  "key36": "6U3RY4chEC2c3EeigL2CfVQT5QBVC6u5pdK4cdDcueBZuuM7k4mzNijASfhYkV5mU28BAWXtxM8vsjzaK3GyPvC",
  "key37": "5ehhUjBDnLNHr6zRCvwbfmrPsT6rVzekRZXNfcGN9rBJUTpowKn65wYFLdftkpRCjuKHxRLL5tpdGGqHU4yiTufU",
  "key38": "2sk6BJJ2mPEBZQB3WSyLmvGKxQoyVcoz4kJjfSHMpXExyoVz89bzofSVHUCMGpZ9Sji958SD5GY7TFwnSvmAqZzM",
  "key39": "48fhvByTLEZXo4mvRSZXtuwrG4FGCbww2vBqV6eJ48xRc4xYC7uvNRbCYNm3fxY54TXGzPtz2EKQJA7q8Di7zokq",
  "key40": "5wrPqzBWGryoahRcQcRSt9BsPj85MLW4PEbioh65anuD2F2SGZm2hjCA2sLqNnsrVhV3YZYywnMT3KYodCUdeqVj",
  "key41": "34xBjEJ53ascH2FZJX8t3H9r5jo6cFMqmZBDYjd1NjLN48xZV69PBGAR5aMCtuhWaVQv4escBFo2rdqnf7BXeLku",
  "key42": "3HZ6JsQu3nCVuUQ8VHNEk1EJSPbq2DaBBuS4b6tNfG55HjfvfgSjC5YmPGZhF8EXz8wLycJhixfb8MW3Y6XYXBML"
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
