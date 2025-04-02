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
    "5gGH9hDWPoDNvyo8XcG8bM5SnEGvyKGQcC3UDpfFGAPueGtrgU2durmjwwvc84rcvtFsxXpiaGyoNhqaTzqttTAx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BoLHhitVr8tcnN1gSc3yBmApzqu7txzCAfHyuVXJXrqC2qVuKTuBQdW6W2snEssJjDcqeMAcmW4RbCTha1LECCm",
  "key1": "Gna6HvginMtPomCUXTYJk1nGyqZCbhEu6mLWzodGLqSU5rTGJ88iwXfwa654v5BrgXGTg7uSjoi8pj2ogUwjJu5",
  "key2": "5MGrKXBarMXciqDH84jxc2k1Ypb5uSckMFtCZpDQdkADRAzUir11JKzj2J9fuCUYZyxgbbjJJ1k3Di7hFLCzm1Gt",
  "key3": "L2Fx1BXjYFjVLoBtwUH26H4qoY1f7jnEQzY4brvKvy9nX5Sa5LtaiNqDoT9m5cFTEZahm9dRGmPDJZyPYqAGf8c",
  "key4": "2dWqBzML87kB1p88KbuZy2tkWsKAKHKsDZLQyB4W7FgTsPfbUJpwWJ4cdhCs9Y5pNY9L7b6MquVpnrW5NMZjfqYy",
  "key5": "2BqBgbKwt7dsgCS3rFsnbSJBmhMdTwQCc2rng5KWYxaVoxbufNdHZgJ2Fn7LB5EnPKBVfkHFV3VJTecCHifCxHoL",
  "key6": "2yN41vo1g7QYQMwrksEj9r4vtmjJ8Sq8auPFAaeQWM6HJoENWVnZwmSvTmh8oNvL3TPQ5DTFr13HERdhMs2ScDin",
  "key7": "4subT8v8LpkWeSZP581RkEyM3YzuTVnGXtcVqwLoDVtS5hNP365sVDN5yCVmXosRtGXURnJJXTkFWjKpuEUkd2oP",
  "key8": "xtUqpfYDectBmjoVbnovr6s1JVMEKPpLECq6wDwoaGrB47j1hWKEUXoXmBAWQtvMZZHBXpCStLD3Zs7nfowuLaK",
  "key9": "4gUyS9jT2zMznsd4gskBwDPM7YJEjHUqAArcAKGErkJNwmJBmLA4sAUcgdg5AD2Yx8QZV7V1sFwoysbHhhNjh7kk",
  "key10": "3SNrpqMLKmXr1GqrSPwULPo9dkqFhtrcb8Z2ZwZrNUfdjFdvsy85FCdYWQUNmp8W58YF7MMLvZK49QEyFh4jXjar",
  "key11": "3SAywsjYLeLRZ1vCbgsbic1JW8QDD7Gwta7Dc3QmvEkR24cNvMyTuFhasEosqXSPuNy2YyRX9tTiY6BXxpAPC82s",
  "key12": "4aENaYPTjv8PWsJDQ7bEVZxGkpEPM6PQXDnnjgpMCmmD2ayEccoaWCoWqR5YFY5ce95rCXahagMDYs9xKCRZRtTv",
  "key13": "2PXddcaRGN7ycyKpDQfKkquK6s5Zfs9L4rmSj7HJuvSLGjabKzB7nd2dewoNeN19ey5iyX7CSmkB9EbR2H3nRyWp",
  "key14": "4pq3TJQCAoc6LZSvvLqYtYPYVnKf9WxEdYmPyUwGi16evEKXtpVJEBkdLryKRusHKgTAmKNhKzh1fD8vQ6coiwZC",
  "key15": "2iBK2HrYLAqgmzZs5XHfaJNpr4hAiATAMm2yPFLhAd7SD67Gy35LjtCu5gH3QYrktsK4k7sGncNcEG88d3DKLTky",
  "key16": "5L1mu7sbQBr7heWBYJWWAtR17aB5dYCPtGJ2nKjtasChm5av7oEcpBjhvuuJt5H6puvKw7WSoREHSdCB2AFUZmh7",
  "key17": "Fi3eP9J81hLr7gPk7t7sbfrsaH15MoFEsGWLrW7BmdF7d3dEa9k4KbtPiMp9EY4taSq15DNJkkWf8ocVyqG6S7H",
  "key18": "4wV15KAieUkUBGyAwCMdrX6n694V5sFPPVmyVzctJcCA54GRqqq8aAy6xdVEF3WG2YPQP2rBosKfDeMRcL7iDfkj",
  "key19": "3zJZmFkkzqWsAucR9KwrayceAr9QsZQSRxcbiyqB5kQN7jTg2MK7kjzszbr8AfhykSxUYkvQv2Zgg4SxVvzome8Y",
  "key20": "g47v7roiFEmJw8pU97E7KiWV8pTWWB6HeSXENDuJ5fBmNytB2wJXUi65iBjgALKw7B59aXDg4SD6j6pVYpTzfSe",
  "key21": "4Zr4YLA1DJUFuL7edgEeP9VbUzVmmhYRwkozyNq3ETKAP4si76rPz1pBygtS15h2ptbhGNEvNXX8AhhWytH1tGAp",
  "key22": "4wDJ9UnVnBMdhtNN8no9weHWtqYWZbJZ9WRKKkJRoqVGhhBJdUrXFLanxPksvy8dHvfkoS6523t8wPiWzezCjmSZ",
  "key23": "3ysSLvvMS2Z1HGQaRpYMvfUSz3RxLnSrobzGc9VqvibnLrYwR3eP3WLoMkonXkNMTDqaBdozFjLfpigPCy9R1tdN",
  "key24": "2EUqFYZbgBg7eUjvWsK7BpYpTa2D1bJYNqGiZPzAkLuQ8pUeY5XceFRruBvou7swuL9VD6xp1pedsHgmTdru3hxH",
  "key25": "57zCLyADaKc4AqNa1xw7x4YMhX9eDxsnSYf7ej6XrdraMWpNyzHiBWd7Tvt5bYAKyfN52VYpmvkPyspqWvzjRG2L",
  "key26": "4BadFBmq3UY9vmwaNXFtJCNkVd2UkdHthjJdhezbUKThh77aLGAkRSRQ3z9atMUH8QFHNsRngjc3vsnGETg8Tu1J",
  "key27": "3uGafNiE4xUs9j1icnLjKBLYZAi5vKjNMN2GYjZM2NiVLmjkPQBY9859yjSd2QBmoAccieeVv7iuoXDYz3CCQcPH",
  "key28": "3i8Sp8PKW3DC8mVbDWm76AxLuLncrB1c6UnBBvBkRSqTaEyEU3nsavbPbnJAdCMorNpjinyXpPTi3WYd4dab5Soe",
  "key29": "2QM5oCKDpSeZh6PV7Z1dNAnEtDxjLT7PtuW71igq2Sz7tzxXkPk8j4GiNs4WHhp8J59RdCnPjNSZoaedKNhoXn2g",
  "key30": "4yhnwzMmvGDoKhm22Rf9CHkQp1qqUikvt13VpURqssytLTAcmJAK5ffukyiHsFbiPViGrHic8mi7jAmCz945iXgG",
  "key31": "3df3gBCt1pkS5qAR6xze9j4CwTU3SbvmcGFpDMjdgdjsku2B91VJ9A778FWFTmspH2rkXqJb4kdqp9w9sEcbxasd",
  "key32": "2HiUgkCbeKSEoXQazWrKbjrAjqG1NeJipySCCM84AFKRAVGgCBW9nBmU4uQaGwCVXrFG8NBDxsUDRh7H9g6zxRdi",
  "key33": "54vvtWVqcgdmmdfiDuVDRxdkd5DL7UVqDhBX7Vv1d2yy2t2gGVFpV25JYR2eo47tW9EPFWUJ6BUUzqB5gvXVpfyF"
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
