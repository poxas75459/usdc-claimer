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
    "3o7dh3wqMCjG1h56MvY7dTjHFGywA7QQHWxKw6d4Fm9mamDWqeMQBRww1gsJY9JNTiw7YDjtqD32SDd7sj2kCmA6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dckmQ1RxQMW145pbN6GaoC6Q6iqcEdVMAQ5c4yEUaHLjVyaA4sKCN6tfzYY2TLoDEQBpyJmeoLBkPP3QomwwkaF",
  "key1": "5kDo8dpjYPgLZw1rK1sXAALUnD6yrRnAxunCTBBHrL4wQNbbm6LtpTdbydxobWMU73r7fTeDYPXCm9YedzaXgyGw",
  "key2": "24wtHGJt6fMdGsrpMKqmxHvfvPD79B3NLG5UB4yVgRHDKw4s8uvEjZYCzL2mW962PpEoCmhZCBhGzWLD572pPP7v",
  "key3": "HGAaRUhHuE2gSbXa8QqA96j8RkACEojXR87ajcFQpP92nj8GYcyJjpajQDDTEf8e2FA7ZgrXiLh4jStiasp5Cxk",
  "key4": "5JFnm6adpCQceY7GQZjBKaoekReqMqGpok6P8REZgx8VeN17jVfaoBfnGHK73xFJSkQnyDa6gENzvo3wWyTXoyKq",
  "key5": "54bJyZ1EaNFD1jYm8vhAHqFW4Cg1rEQap6phsyekyXLwGwGUndbHy9vzYE1ha9hDzka3tCu24eJKCK11T9QUqCp7",
  "key6": "2zmnCKjKMdAaegwNDE46tnDw1uaqxzEfdJDhsSETHqRyV6NF1v1VWyTsrtSah8j7dmCJM2r4BHSKWJFswDS1hkMd",
  "key7": "4R72yNJKtfsm2hwKZzoAf3BEVfq2bSn8pWAUej1yexa2Va6QKcmMMroBRNFsuUvo9nZ321q9U6zUCQyV5oMnh1mj",
  "key8": "3De4qZEEjHZcC3peuZoHMGqDPfWsQJjQL5yFC6ZoUg44xwzajfeQ1XUMdEGdsMbFEnMSijg8Dpvfjtk5vgS6ZfnN",
  "key9": "3nNT9zvZyGUDsUbEuepMZsd6ujgVfuu449NGJanocfeFcMpCMa18LtS43vMo2M6TEAYvfukteZgvuJFzrBFH5xry",
  "key10": "5ovTcfPrpCEq5xh8CxmU7XmbHZXfjdMW8fFm97MJHFsvxiNE2qQHqD7TjGD19BVK7P5xm1ahJHC1K3FsYBVL1hrq",
  "key11": "545jaS5tYbHRKuS2JstDmiWq43wNztwUeGQ4gQR3XuxzWtATtRDo2pLESK54oo5nudvBDcY3oJcVCdLk5DP84yUA",
  "key12": "G8U8en6ESTQvV3rnwTZjFMn4qQe1cwzmD7CoV9mznHdQbep53D62jYjXgUejVHE6tnsog1E7VGHM7VkmpDrXSXf",
  "key13": "iY7QTV6MZyoQVJAFet4m5bco9gFzib3hhX9ndRKVRRojK3LjBxAtbQexv6ZHwCnd3qFnkcm87ehEuxRVYKMpXWn",
  "key14": "3W6r1PVgUsxTEvMW9xX82aT1TDXrjoQrGF5dFCnqZjEVt6NHjBfMNNxLUihjNRWdgJSUYDqaMBJYXEyYYwhDjfX2",
  "key15": "Px7Skwv1pA55R3jEak3KbgCTnuEauiVFrWMKunNYMdoqZkKmYXFgPdYCWSJABVFMQKCYNbxqDagRp6k8911nz8d",
  "key16": "49J3sGXfVSW8UaLGRFfe7KY3M5JyNkr3sysNf5H2bLJaH1oevZ7ghtihwSqQmmLxSeysWMTtik571qD4eTKqBaZv",
  "key17": "P6BtWGHHGtMgGss4ARktv45jpF44iiuN8Vj6e2GsYuzzkyrrYjJnyzVXs8tWtujRStzAztEMPeAamgWTvDYFSeb",
  "key18": "4u7K7S4XcqdFSt2jnSemsyYWuArCA5K4YBjV72wzyRmnM3tJMpiEnb3qsvNXUdRsXRiC5uoxrA11Pdpuqw3mWut2",
  "key19": "LQGc5kt9VEJDebHmTVqJcUFmsVyRTrp62cyjq87j8qZ8Zm13khhtBJr35GN8gst9qJqdpM69cwxktmFx6fTbUK8",
  "key20": "w9EpEyKCcgf9ChvzjeHc2UsPyV3KCbLDqQPgWqLQQBqJAvLgEJQfckfa1CkfNZ9Yf5LNsdmZhvqfEVFp5TPYpDF",
  "key21": "2Fz83RF3NXGxL3mVQmt9FSBXsJ9ueS3mcE2oKrNMtiVgZ4XfvNw45bnHVUoftNLd1erZ2mqxeRNVZimfzTknTqtB",
  "key22": "QpEaLt3yLHP8CUokCmJHYKi4N1ruj3bd5XB53kjBixuBHD44z3uHrU25ZeP9kzc4czdD4GJHjajSHTrfvoPrYcU",
  "key23": "TLDhhhPqfkZpJCjUx2edZYnTByfCRMQKM1PhJ7nLqZEWGz7CU7884caQwG6FPnCK7i6j6e4TCrDHDtHbV1MpSkX",
  "key24": "3Av2CkeCAEejXnxAocCs9jUxjkUdVWLFoLWsjkTopYuZ77kLkPT2Pg4NssgRpsVyKngT4TUsbV7wRSEgC2hSMDjB",
  "key25": "5cC1hjxUZMjGDAXN4iJUN52tHwRL3NShMHyBDWsm62butdRgyNoDeV29qiLSJvMn6fKqMWzXBTrSduB6p7YNarKh",
  "key26": "32XDKmoDEhMMrSDVdghkJFMBZLCusiTsUDvbSZ2uLvnB57GoA7B6Axh5YEs8UiJXW3zTbRYmDjqf8cVovPddmGhd",
  "key27": "41BUKL36yorUNvtofdCycVFwTCVauhp69LFVNkqy1E8oucyhMWjEfU8SswZKwhvvGAghKus5UzPL9s6DhHS5ssy2",
  "key28": "3yUAEhp3DoPVxpi3hKTE6JvzooXeWQ5X5Mvx5AHCP7XopXFZrAzcmit2HvLSrfpAWnhGnmshVuViva76RQQbUM4a",
  "key29": "2qQ25JvDs2kxD2LEsgnEy7FsS7MQzBYQvta4bDLVhTVdquAP3QS9T4rAB5rAkULMvUZwLXebdnes9mGXLbSERr6V",
  "key30": "vDmbDDHvxFw14hysbgjkG8VgH4y1uBmXPdP3dPkXkpwB9rZsaZF9Q9PdGgPw7Nx3BKbWPa39J5zYX9yTQUibMis",
  "key31": "64jfGdbci57XXDbFipmTeK5RfmcZa4ELT3TFGy4UTwQBAXqUte7DRQBdGZ4CSzNGe7rEK8veNwMJjYJNzZfwKCnC",
  "key32": "3bxTwiCAReKRX44WBrtKZZxU77ASEpWiQ91EVdMrUbbQY9VKsiwhDk2FDd6XAKcPKd6NLfPcN6nCZE1cBsyF5dtj",
  "key33": "3ThNdT23BnuBEL2ueWjWqqCUHbUMXPnFNJEvRSKDSppyWGMr4u1MMuHoh8zJBEhdoQjFKsWU5uDM4MQ7FUTqj6y",
  "key34": "UGshsCFDLhrqjLViSovpuwWK3NSHgcvM6dwrHZLGsEi7FpNGtCaCWLSVa7cDxx9PtJAwhesmCby8Y2L1QqvPnAh",
  "key35": "54Rk53Bt29vpEkhnEQy1j3uuLS26Ng57yBgLHupaS5To2fJTnfz5vJpfmQCaCR2Hok7huib27zF4tRNLWaNF9WJC",
  "key36": "3Gfyc1V2aJX1mXYmwNT499HzSDee27cMpgEGwerLoJu4ZqbdrxLP98VU121fDEmXJqrH83rhXsdg7UxL2iaNiSSB",
  "key37": "4n8WpHowKUhM3tLxYCYtscP7LksphNfAP17kGtWSZgXRus9Pr7w8KL6taeLBSf2aBJgxHBR4rt8pHifPFhhibZrm",
  "key38": "4eGJdce7XRt5fhvt6TwuDuKoNyHjzg5PUxNgwzZwy8nSRN4Hw11pZhCiL55EJLJUihLeH9TrAWj1r2knayMsBXQU",
  "key39": "iLaP9GNSfztA1wqxxbE2pMC3m4kYWh7vjEWYkMyd1ZaG668nxqQPPkaSEtkWMkmFahFNYw26tWRjs2gCTqzBTuS",
  "key40": "2JGcFCiwFMso3mk7bKf1GwY2A6HAdjSkQQdbXhcVLChAgthQRoDiwWcuHkNvVg6NsSQasC6yBUeKdSViGPRCrxEe",
  "key41": "4XntnYjSeP8r97TKoGyy3CjuJhX32LPYAVBYmWUxTZ6cwVLeryjLo1z5Qvsh87oLNUZiTEeXRDjF1o5mi87z8EEA"
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
