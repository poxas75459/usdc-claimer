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
    "47aQNbzWZanKMGrposfBh4DQNx4fyRsoQae5Ugi3wodMeq3bfZL4PqTSfxPTDnpadgXefUTQfFgVL8a4Szvdf3KM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZDEgGc9bo5yU5Mn5WwjuDCMf9mDjSQha9cPGEeBuf2j2EJMMNd3V7rtWafuxvLBff3AwNBeHNLbjsZDKf5zEMXM",
  "key1": "5DJmxj2a29xm8XAghH8rtbE2yR8yqFTd28o2hxxPb6zUFV7zSR4riobd28ZQTebpoqSKZmdST7yKAr2q3BpPgX8U",
  "key2": "izDGPM6WmUbGotYqtMV537iw9Zi8UxJa3yYKAPUHeNXT8HMQfXijCgJcxzNXq9hCXw7SFdFJFjYYWHoYoEiFBHD",
  "key3": "4byT5zMmFGZe3iFwCgcGU1mM97x5CswiAHMHtzMbnJ8jfKYtzY2AHMs1JqZuPgGXTkgcHzPpQ6xSuah5ZLxvdJuU",
  "key4": "45B4k1q94WFEwEuVRQysLBSb1QjfkcTbCGgV2US3WK9b1h91feqLx5vmeYJ5S4eQf5wKTG2hfJJCc5hHuuwwV2KR",
  "key5": "2GJJDmN6fPJgT963HKviQeUiwFhGessrimoZcArDMKqsZFGL615nkggmjh19VpLerH1JEUpr72k9pc1PegoVVg8s",
  "key6": "3SqDzrHiHFGcX2zmo51ZKLC4z22LptJ7RcjjUSUPT7ZDX7piKV8CVNw3A3ppZhVn2XzAZ5T4ZFtjPvAyz4i7vgRV",
  "key7": "52QKHBtPfvX5TntZH8Hug3oJjuA4ugBqdeq4WQdCnYhXT2fdbGzCK8bbA2znrNDpY6uBWyo3ugLkpiqLsgxKBT9X",
  "key8": "36q214b3zDNFvYmmyXvNpRKf1Pbten3YAf5d6gd7XQfNbZNnhxwmk5jw92bthSEKUq3xdXuWvmDknodQYykh9Vas",
  "key9": "4Y82SyTEpKAdNuWbsweXLHfQGcMJdRtUmfK3i7aNpHHP7dEfcop8Se3Dmd1DdcNKhFqpbMsxMnqHMF2LHsPWKQj7",
  "key10": "5USWwfqUH8bM9iP2rsnWnXwPURPd5ZbdeATmHhRvkknR1PJiCN6scCiHk7KhsHLLEBey8CaBVvoTPzB4eyLFv1ht",
  "key11": "33pvdevhzxsZrMeEdtPKtziTruVyUJwfrhcxZkx2r3FNhFSSo6xKBMXCYQr8Q7J8tv7zC5LKT8k245DQLrrYHhMs",
  "key12": "4o8f2q7kMqcQ6VeZuCLzzY42Z6yfGnEDp8ffmMm5qKnGp4jgV2eSdDN4GD13jn3VniWRJL1zWdnLFrs7JVfA6KFD",
  "key13": "3fwV6FNHtXLENdUn8ZYfWEz5kgL6LMn8CZDKmbWRXnNwJ3YYn9upUkQ3QoL3Lb6dE8BjXQsDENS2Uw3sbFDMjcmc",
  "key14": "4MdceNEXpaecxoRtCaBBkNt9FG7hp1KwEaXqZNtJ9SE6Tf1wy8XCqZom1vPA8bcxBtodksiZTBLfTADJZidaqca7",
  "key15": "5zw2FLqAW1r3Yw4HQtqcBMavBdMKSdb9jtgeuebwkJdeQPYFSjqjJ21uD7wzjtoVhgBR9a4fvXym4ojG4GkkA8LS",
  "key16": "3xMkjadR2GnVNrVe8fT9DaiBWa63aCPfAoyU9eNLGNcGjyGMK3aFyss53yUR6xP244gEsGYxeyY2fa73DieTNCob",
  "key17": "BQSPUwUDUZNtSFmpAAHiDognqP4chwNHJrhDDG69toS2MZVCo4QhbPdg6mQGMGJaKDDuGRFsSyMBqFepuSGt6ED",
  "key18": "TKMQiPTuWuG1zY8eKsjYhdJK2RE9JmpaDDFTV4EDpRefJ6RgcYXqeSZGtkFv6EpF86rjyy8NQn4XudUWdjfpx7a",
  "key19": "2zJxfA4MYLWcTHN4TVni4ujgoVDEwbGnSGZ5DmgxRAe8GzJqAznuG7f231rDdZdH2Wg9dNJXw2p3irj2UtJwzxBg",
  "key20": "2RZ54zXMztWpvrjmjjfWrhpLzzRwNuvKBnL3MGp9yK7DgT7btWkU11Q9YRMom2MockDzsok9pCxruAnrGdMXx8Cw",
  "key21": "GNwJ2ZbacXnBz5vAKdYW4K63su2pixm3gpcSy5MoZsid9nij4R3ffynvc99Lnipmuowt7h7LbcvLiBQDGRqKShC",
  "key22": "3erozfVNb1rrMGu4oXSJWaJZcXKzWwRvHqH6NrnyWfMEK2bSa2CyWtWhGNbFTNrmK7ZpzkM1wVKzt8AhjqZ9QpyR",
  "key23": "2MpiGbGFAshB7nDZjja4sG6r2ZoHfZ7JJfg21rbynPdKh6mr9iXG22JeX6HVJCPbLfLQct15mFDrqe8TDT6nFF7G",
  "key24": "63CWtZCdCeiSgvMLnZ9bgnaRMy61XQ75qZoMKALAUAcvX9J3UM1DLajuHusjuPhwQeEiT5hbazSxe7oouGoTUDwr",
  "key25": "31muUEim4pzxnaqTrG91tSg7EV3AJs8LBumjfBzPX11vZ1nD2pEXXoPuhkjta55PWC34xUdymrqL6LA7rUK2sh85",
  "key26": "3BjKpD2jRXfnhip5FRfhyhFgBsawHNto3UWhXrZNfvpYKeCW4JrcaJmQf7uMMT5ziYc1P4af5FtRpzAtAv4ge17Y",
  "key27": "Uzm8Q12m6h2pgxs3B536WxGUz61LXcFnPf55mtZ4ydyquceuGHjqvJFfvLKJQ2kkiy8Ga4bjMLjkXynXKdxbJQX",
  "key28": "4TgacogQmo9t1jgsKaz178FAWHDqXNQhB4ai4ey1usK97dYgSCxu3xz8A1NmQgdpjpNdfAC4eZcrNPZrbbsxQF5W",
  "key29": "ZBCyk8CuF8rfy23G15beWQK34dKRHBbjNkJqW1u6zddxJYBkegz1463HPDryQBqhMQhZwPArAZcB4MTqQ4tR6RF",
  "key30": "5Dke5GX9FyjD1PF9K7U3QdheYWZZHUECRdFoSXdejfH5u8YF6TtYGDpddkG6TdfHeyKmzoYEnUWd8URuNmhmJRRC",
  "key31": "4u3Jrdrb8xoREmkikaD57Ut4HS9U4CKmR6SZvnb6L3WJ4cVduy1HDLmEKVW5Fxr7dmrCZr7GA2V3PczwFUh1Z1Tx",
  "key32": "4yBvbAaxGPQnrioauszP54oe9Mywak3tEFzTvJntwLPUAaKygdmDKH3LMeZExJxZE1Y795fiQdSVndFwSKx2gYHB",
  "key33": "QHb5WaTNc1KQLyscycc9d4gzbnEJwrQskwsLQ2SVGKDw6sdgzqVJehgeRrPR8gp46s8yBupDxtQu5XqeMvV5PgA",
  "key34": "2EHuL6JvDDQiWC8RUiFXnvzXL3T3oU5LAfHq7qagbeD4uM7Kd5TyNHMq1Y3YbM4ZcZcFi4PU3npnn4ydPwSeyctQ",
  "key35": "2hovvkmd5zEFQGEGmqtzAFdphFMRvpV9UCdBP8iNMocc92ePeQ4G7h7rXJQYVFzzVZ6XEShYrdZyCeHHHuzrSDy2",
  "key36": "62mkSckWPPNQPb5L6ThRAEWRLPZ3AdsV16Vx7EYJaidfXwijkzNMvhAoK5QX1c3iruwctQn2Q9CeNgmbEEXYBjNB",
  "key37": "2M5wgmDgKtcK7XvufA16PGTx5xh8hidhZLVEoC2u16yVhs5HrSpEpvsW2TnD1zqAzTtvah8kTvEZhNKigYJNjtik",
  "key38": "derxhHiXX91jzP6x5CHFAvykRAHFxmtgsN9zvtRcvtRakCC8LGCj6SMkDX2aFuQBhL2ABRfBntuuzpPme13C5mU",
  "key39": "3kaMKxvTKsFYq1Ac6GNcAYnCfqXZXWRy4RzsaPcbkZFBu617EDRZQ6nZPSAXHsTjFsStvMdBpqSMTtQti83i4F8W",
  "key40": "3aetMwCKKMGo7ftCTWx1TaBuM9mtPLu6eCwAc4v9R9g83P9MbniBPJH7sm1Rjx41Y23iYbgfYhCAsGrnViRufSfe",
  "key41": "4y5SnjHxJt79ffrkRnk5BShDRnwigbQciojksPGYhVbhhVxRqtcNKA55swzcgCB9wKE2G4WRhaxbDjsizRsrbfqT",
  "key42": "2TTARJSB4VAADHpJJgW321vFYpy3oDo9vyrCZvHNs2gfz8uru8quDk3s2tmD9dghV2LFJahotHPKuysjLnm94rz6",
  "key43": "2P41ebeHDnBh95nUWkSPXFHUdAePP6oW2AXTNQNkfmZMF2gReGvFh5hbALAaJWJt7UEbvBBGecorfcjQNVkQWCcy",
  "key44": "2NZeFBweWCkneW9bjbqmnGDwYnUcQmNjjWAEQCBuwVr3PwaAiVtkZfkiGKHLEhc9aY8JRofeiLihJkLVFDS7LD8c",
  "key45": "2NLRvSvjtwxEAHx3jsoB3iNRqNJDwcGdd5we7fr5fydjmAyqR95rXusR4nMiH1x99nEyMwtMkDWSRZbrXXpyP6hX",
  "key46": "3gXkXLgSPpJCA7ax2HMHDLhuka3o1CKiEQzkTjNYM3k6YYTjBQuPVYbk9rpH1zG3kEnVDqGJs5ZiTMSCVbvTx7wo",
  "key47": "64TUn4WgtANpho4btvS1vYcwKv5Z2BGBuAqFaKHT9UQD9qp1UrDnt3Nik3uvkxhaXdpGTQGTD4euFF6nwFTrFJWa"
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
