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
    "4CW61NMvjKtDcQE4fVQYSZ4gWJYZexbMZXaDBGHSgZiDveeQ25WfCgqMmQGQXJ2urrF1kFF2YnzxX8Z1J2dQhHnm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K7aK6VbMTTAjxy5TyaUCcwT69C3zXg8ansJb7wc6sSQL5mUVXRTwb2bky2eFgcmrVvTc6BxEQBTH5hMjUTrwJ2K",
  "key1": "8MH5L9qm9SBB2NAFkTHQtF8RHW85UePsTgc9n1wF5LrKLakCAgCoapG14UgJ1MzUs1uu6orQnnAkHXSeu26NDxz",
  "key2": "4GtzyT79Bu5PkoUKuvdi4H3mnG2eSwaezePizpLd3MTrdTbCLBnoxnsFk5uKsN7yTn5g8JCafWnBgwq7gfDqHpAG",
  "key3": "5b7PydVNKrp1S6aua8GzZPMbpccCEPJW2GtCh3yXKtggtErbYXRV5VgXmmwsQHgv947ve24eNes7LLDH4SizC1Ko",
  "key4": "64UfLzsf9iuCf8ty24uGNyuNN6EnuW2V9WMxJeY7ii2QJfdCH7FhTEkeXv9sm5WGSsSpVhVje7u8mikZvrToyZem",
  "key5": "3g9eqkyzNK6jo4netRj2ycGbmSRPALHrZnk8gYkqPfE6MmT3acEmzyevBGjHHknp5JZdwxHExNuyjEm4ya53XDbP",
  "key6": "3reUDgeBtWEJpbPVSW2Yc3EevsnAh3uWHvu2ndTc3TvE2bFXbXEQ4PMdTxgVPZygXuFtdgoJUmY8aqhATbGS7YzP",
  "key7": "383Q6cFCUzKWKjSawtRiN24bSt53ukJWAiNT7ZQi88kFjAT8zLGPpmc7xrRvcHToprv5Wzc1mjBa2Uus9NMrD6Jv",
  "key8": "4SE7AZmkd47QMtwW9TFAaVogFaU92EaTy7SgZK67KESwUQdEdwCX3Md6WVLGzYsQhsxsok73xxKt988QjpvqLiaw",
  "key9": "5jM2tTjWgtgqz53GtxFcexxx9V2z6fnpy85Xyz8ZxzegCAyZueNAyiJDHCgHUBeefqDb2sB3PvstB6dZEKS3QAjx",
  "key10": "4S2HdFqbiMgQQwoRULgYPELDSu6gE7K6uJMsmkGf5RjzxnkK7aDnBJE8S16jvH252t7Eb4djpXXstUuSo7RHhb9F",
  "key11": "2Xvmi9YUudAENUxLc83NA6HY6R6v5W3bpXDcN1hFtWZ7AaV8abtM2EDFnpoQHLEjUEsTj9mMQY3GYVfC9kMdycTE",
  "key12": "3way21jTBhQoXhHGomXRvjcVEQyp9t31HsjQz2SAQk8dQEn5pL1kDSQSyFUcpy5TJKNLyFkzV7ijLXL5mz8GyhBG",
  "key13": "tLgmvEJYj8D4mGU86Ka1S5PuTzgVs1Bqx7UwFth1wbhZnmcskfo9Wz69tcaf84VuSwXvvwXnA6Sxir2g8hg7nSk",
  "key14": "5E5LBiBf14whQ4NapBT1SnawY2CmmaEf5sa4G73shaZrdRbNZDb1rZY4VMoiMcA2fyrRwwx6o5Adz3vX3My4kF89",
  "key15": "51Un1GS93JtzGct1NZ1uKwyuhucA8qxZ5NPJHHHsMt5qB12Lxg7s4yR3t3RQYXP16RBoy5dnZFtK9GHGkiQ8Uf2n",
  "key16": "5EemJNmXHgpmQB6nfK2NdmxeKbH6PxgMGPcS9bGMZWMQEBmSqGGQ7sRypRpNWpQFM3eJdaYENf1vfpsNip7S1FpX",
  "key17": "5ERFbS8Thj4YQwBFXKVuVrPpJh6LCZymMACzCFm9FTvFXiW3vTdEAKGhu3jd3Fx6nFiDTWS9hamXNav7MducSfTM",
  "key18": "36rYPF5e6EdfnrZWftAe7HieSuFf2zcm2r7119wBLK64nS4LGzzFtbg49hvfPkL2zunUMixaf4W9uY1AJ6GH7d4t",
  "key19": "5CjnoTB66EbGVucyqtmxpCW2HiH8qhwgMxVZjXShujKZwFeoY5ZgmRnznn4Ln92A64dmW5frbN62fwTy2zPCU5Nm",
  "key20": "25j7AZL8E9DAZua1STwTDAEvYCo7XiceQCf5HhfdysH6XzSGYTtiGUXkjvDPbBMixZTmtb4rUfcZLnZiACDfJpHv",
  "key21": "3mcciBchQ7QmggcBTVE6qBQ24fMmAZfewer3kjmYxMyXkWwgMQ8KLh9LFSHPAWJhhj9PTvLWWKb2C9KYVU2zji94",
  "key22": "Tkqm3NWQZpwvVtyWS5kAyV8fuP2Mr47HUNnJ3AYkXf5vG2Mc4WKSqxPx672kNjHKbCUFkEUGrJwNGYMGXjCE8ca",
  "key23": "52aURAyJX6JdaWW8CKkcqNbHV28aTp3QvsJFL23w9ejx4TUMMDTkmqePyNGLfaofpjrzXd4GQLf9jTYFYGH9chrL",
  "key24": "4fNFyRjo3FAfiqenBPNKX5ZTXxD4pAQsw9h8AuZRLBkS2RdQdXMZ9sqpyBYhg6K4tzT7GHfiYEWMXS4qPgTJU9Rz",
  "key25": "KgMUGgJwFew7xQqwh7rY8z729DCR8hZ1uD1LxToyQ3gdohzoWkVe4M31fJWVD2eYHni6NPPNN7ntPRW8CWMdJ7J",
  "key26": "hbAeFXVYUybAqsnXuAYXGCU5oksz8FoAQcw42pVgwy3P2omxwv7u7QWPkqfZjUJkpUGiATtSzLVhAqtaaRbxaoT",
  "key27": "4xGWdB7bG3ZW3r25tewt17kxKaG19SWDrYiAKtrokznVM69puC6wNLkGaPJ68aEw6qKeCBMY7ftGpZHtXzdaC45X",
  "key28": "5ysyWFmJjiXU7Ra97Kp4qhf1qykjVsqq5SNnUvTodEEt37X3yA51xJiwpjXj3XQBKx7wArvQiE3WfgNWCDdQx481",
  "key29": "4WtekXAkAiYi3zVdUVnHCy15s88F6SjC1koeiKEvcBWRHsxDuv56h8pg9SmbfAMEvLaGMPbcGXmuxv1VERosRCgu",
  "key30": "2PRMLkWw94H78EJG6qkgsMHsfWCkBmhKxRVdeyGQnZJatzBbHMrgzPshjkyehnA4HSUjqmB3im2B3eUdoDessDnV",
  "key31": "9oLP1HaGzjDg9cTy8WQwhrL5fasdzbSb8hTVg7WPFJPX63KfxkQshAH3eLGnqUQKQDBMp1YK4A6LQUuGcqP55UF",
  "key32": "415Xn3NDEg9mWp2SgQQMyrUxQXGGzFyN1K6YM3bsF2qjXQVHdFZm8zazpjdkt4mpNDSX2jy8gBiBoCBYnsif4aC7",
  "key33": "2Dqma44ejSuAeEF4KGitfF1DHQguioecWEaVdm7yBLKSEM3rphpgp57L3EJRGYi3AHuq7Yz3dD94cemkkpJ9gfrZ",
  "key34": "d8RBSNWYXSLpg8981a2UZUZMKemiDTbhj23wue1aeopuyCPACEVpgubyqCwsuSAGJnnV7N7BgYEzreuaDyrMNqH",
  "key35": "23Wq4LJhWZHcRvWGZBeVPF2m9shdR2JpdPxH7KQgenneHpKzquLLm2PPLGszgTSMZmTxAS2gD72x5aeWJCeGZcXK",
  "key36": "3HzvjQ8XJEikWjZF4AfWKiUZ5iWvDfe7MxxfMiFfLZxyXKtZMxDEnmSGKN5CwxtPz622JmpbputShath9xtHsUCn",
  "key37": "5Abk6sVgmGBwX8SYg5sa6tBZwwFDgj1ExysdvSRCrkd2rGRv7cFUWbFX5Ff1PpXhSyFpGfuPMPaxyGHusDHo3dqZ",
  "key38": "2tQAzU1EfmKXr5oC2mhvFRVbCM2NAumuZ7Kcmddt9DT4xBNHcm3KGdZZotB9hpXcNQ4mux2pHuvAUX65e1TX8Yuq",
  "key39": "4LhD8G8ZNTempafebQPb5kswxk13Sasava963htHaYu3rmtjjLxMNcEmknDGUjBQnvv4r3NcLcHLBpJPeyW1ADpU",
  "key40": "qiQcxewsYufNGLzTptgE2pwsDM134AGpcKrxpknrC9FNpE2EUuY1Lnsw2R7mrC92qsFEgLgQ1nz9K8EhdjJoNYj",
  "key41": "244rYqmJgbsECe9wiUJqLca6XwvcazSDXzuY5FuKQD9h9A3g7LpfojeZg48Zwsiao4M9E4usCtNc1uEf7t1fSA59",
  "key42": "52CTcFaF2XUrBaawu5AV1QTfxJxYT5X2DDKStLekcJ5ViNfQ5s7t1fb7qfQkgL7tZJuiQr4w1pivS7Sqw9JKKaPL",
  "key43": "3q6BB4Hqk4PpgnKKsQmyGeaPeH6QqfRsZHzeq37PMYZVxNaEb2iqnYcfJTYDyY2Q7piY8nfjGhieztTZY2JpLZzs",
  "key44": "2XUfHV3nFRgsaG2PPZ143NzDPru245sztpkR5KPpGKasnjQK7hBdbJidAqpw8etmc1CDf5svXjxhiLhKcC8QC95v",
  "key45": "3ihAShyDtgGUk6ZVCnXiobEABtJTcE57GQyNZFYRcViZ75YTao9sZPTWxPghjhe7UcbhBiLudi9PvyGZGFeFcYzX",
  "key46": "2uzuSNcEYHfePChrJAYckeWd6VdXrAfGe4zKMJQim2oeG3yLtF3oKBGJRbsUUw5XDpi9mbQU8HKGDM5bhh3VRhSc",
  "key47": "X1GBPUZQuew83bbYQ54K28p8LRdKzdiYXkAZeU5TzbvTNCSS3mYPW6K4Q144JJ22oCgXEbQ1yG5gMi8EnLswqYN",
  "key48": "U8B7AhTZ8GJ91UusiLj6z3tSxYKMC8NQD1sV9M8nkCRKTqEv7HVRYAuk2D8zu8e8DBqAiiE5mWJhRynv2oUyad6",
  "key49": "2tskd2VMQzCWbCK1TwJc7dbfkUujvy6JX1UTRRDvS7U5QraYPAoepMdHfnGLBNBwQAMLNMX6Msi3vSmvTVhFkXzk"
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
