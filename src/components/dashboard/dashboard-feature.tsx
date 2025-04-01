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
    "3zrdXk9EbRoShGGnGboFfvpLroRrDbiESAoXta2Tm8FB1XbZ1dDWcxHfYu14BS6NngDnSGwPmoLjnyznxpx6wQah"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S5nqPmzXFA1nvRLBY5cevU6xHdjk6HQf9sAHA6Xa2Zqyy23jDRzbNuQqFPRSDGVQoV2jrZQhQgest1kmVBs415J",
  "key1": "2jyEtyyjU9H1Esba4xXUpk6SC886YgcrUS6efd9kXukHRLUM7NkrBxQnh1mZ5U3SeVcnPSv9GngF8dNTtaR69Yrd",
  "key2": "67YTCxKkx98PrD5j5FFr1wMixNbWKaHKLTgP8iPqQeGXtAMMtKr4FzaCx6Rskpp4CUgL392ioJHaRGNsfZeXRb8E",
  "key3": "3rr11dBhPwuB2yHUfHqPunicsv9KR3YQXB6nG9AnKnvQLaqza4wovtdAP2enT4P4Tdms83tiRgj2D9dS4z2Uvps4",
  "key4": "3zHNa7LTdwQWbsLqsYYReBNn4Fk2jVo9SFRG55YG6q6LJmgZqZcxqnPkZxauKvRbbuz4YdoRReowTvEeKKT1Ph2U",
  "key5": "28jSq48MKxkErzieAcLbendYf2rY1wNGmBawfszKybWS5927tLpuq29FdUWacrYDZkhtuq4qvDULPQvQK9ToWsf6",
  "key6": "4oAzU6scVuwCVgirSYWZrdzam8KAmknthmqZxVGnMQTRmxc3vs8Q6Ujp1ssZK7KQ3UbuMdVFZMAdBfxf4gwQY4nD",
  "key7": "3y24NfCKet85PCBTkhrCd21WszLxc2aPQg2mdnZajBboTsgzuoeFe8EdgieZbF5LXjPdgadFzVxuPtz9RYYjRUAr",
  "key8": "4Mg8kwSJcuKuQWrawXcupshwbDG7UhqG8FY3FGDaBctduiH2G2mGwipKeEjPLN7Du9rpxDympRW6ipvRTCFcJhtW",
  "key9": "NPAGw4DfJjiJXThjdWGZ4UxCQCvkEhDsBJc2Nxm5LE5mCYmQHNcNEg12kr3gwXiuJ4j9NuiX8y7JX2ioBueJ4ct",
  "key10": "3q8DYpFWJLrbZVmJimBQZkajxzxPzSqnwVZYTBXXuVuJ8UmHSFxod5mJWF7vTTZYxsWiXC2LxNaaXKo9v59UEFLv",
  "key11": "bTHCfd6ZNTGQzR5WHWEgJH9kkdhaGms62bEcZ2vvsDUgRGAVkZ9oTmQtoQ6xbUEj8p4ySpPiZydfSAiiDHVAhEz",
  "key12": "2oVGpPZwf548gWc9yNzP6eVbcqhf95aZihVPPhy5bvfXXkW8FqqXGv1r3q9L2apoN23s8K5Qo1tPepwtzyAgr2kz",
  "key13": "4mGoRkMLdPPzJSqyVQqktY8Knqm7dYAz7CN9jak5uVarpKGB8AqTtcvMsiavPGQzA9g2fSM4cNjkfFbrVoFoTBxP",
  "key14": "263uMfnT1MtTbYgUBNRRkop5GT6qYdVNYDMSG838nZDM65ic4v7Ev6CtRwZEEy8iXrvZV1jCUzUq1BwrV5mCVU73",
  "key15": "MGTWNKTRjm4HdA7tPWG9vjs1Un8122vjj8G39g5spTpGMrc6wJN3oCNQu6N2ZxuVzhyjpYK1rV9UZ4oDVL1AxfJ",
  "key16": "3yUfR53qZDNccGama87N1SkNL6vXbYkCC983QJmgfYXR9nRxeSrqgqBVNtNCRC4x49G1PJKYHDSPaYAdtLnP8HBd",
  "key17": "KgcHnnm6UQtKyg5X4Te7L7fr6Tu4KWdwJv2Er1mG6t9gcaTUbU3KZaceLYF8vgysgXidwht3iZsXHSYCK1MzU2C",
  "key18": "5Eh367MsqSqQHiLJRsUFE9DguuEbM2VFWeHeqraye5h3aPn1AY4KNpcH32G5Szcy7a6ovanubQQ3gk7fBWKoHjy8",
  "key19": "3v8Zx3hAuVAi1is4VVJFCqNKsq8PWcGcKf1nxcq1AvC8e7PyPW9u2qQXkj4cnya6SG6mcmnpMJnPYn1j9dqX9cDH",
  "key20": "Njd9MywBTAtb4rBdTfuhHp4Nyj2JakUJ5y7JrR5brf46SrJHuwBcMpmN8JdhN5yCTaAQPZ4pA7tNHzXj578LHFS",
  "key21": "4Np18SF29dHyxya46hqmw6TBAcVM7CZY21p7LDk8LB5hehAcR1wFfjmv2x7nbrbHEXkV93MwskBnxcjWx3rUJBoy",
  "key22": "3YVEKB5EYC1UcctvEyMWUb6j8skb7DJMNRaN1bh9tyruQutvVuXGLhBKSBwydkd3fw1jWS1VW2E6RjvPhnwWHuof",
  "key23": "5QMyBdoyc4Z6pJJZ7noGQwUD9DJ3VkbFSY9eMA4CU5rEdddWXztakeYqikgZPsqZQwkqSTMQfBsBPdGwtuuqeBuF",
  "key24": "5M1t5NgLucoFEi6tB6geoZ4Mtpq8YCJGaTsMuXzzgfsHXfYfn1zvA4ALi4BYtCpTqjEsX5HM3KwaYw7ou5NnW87p",
  "key25": "5BHYPjuNYrhL4FPAyzwdLJAGivhupn9fxtHJzc5HWDAx3QsMbg4UVjG9ZJTjBWsAL2mYiGEA4eoUU1N4BkZMowCY",
  "key26": "d97oMGnBvTQZ7cC1JGExZDesp6JTazt5myB7D92GZQ8oBFKAqnGmDdRm9zSZanR8D3uovZw8UoDAfYwXLa6xcbH",
  "key27": "4sbHX4mkqX5CEarWic77VraUtyaoBJrmEULdwEg2AHM9mnzk2jUwySFFjJJrjEYhaskGoRqZPwNozoobzEa6W74G",
  "key28": "sdQzbgB54k2LmphGk4xfKc9NJ3TK1D5YS5AZpAY6ouHSakJnTFuyHTA2ChAJXgbZepXaJYG5c1vPJVrQ9oQrLH4",
  "key29": "2oa2UK7G6k5FUvob9hTYXGvuik4ko3jNFR3mEErHmHvWVDm917j1np3SJUie9PXLSV37kxL8Lmys277rG5cd13fo",
  "key30": "2pyPKDycpfVXC54C8S6Y8msT194TZoeZ39tzpH1xs26KsdzYmYuvEjsbBdbFKRBNZnwtefd8n1m2FFrsLVhqGpGM",
  "key31": "5qbE5JNJMiDNeztoMK9QLY7B4nnTyRv5oswrxeoygFgYreAMEX8XFzN8eiFNfNEg1qYf4ywDxGdWokpFbxXp4TpY",
  "key32": "4dwgUa9K8dPdM1avm49X1iPpNVPCU5bW2sF3UubUweujFtm4kdqUvcnaBqNz2o7bNxu8ZL23Q2oGL4ymEJqTpmfU",
  "key33": "4EaQ6UaZzfmFmRjKAHm72Mp3PVMMFyRTE1foj8hL88H8fVxzV66KutpFJofX1cDciJ9FRY3FQSuhdcf5ZqKARhzQ",
  "key34": "62qFvyRvYrCB6PBhfQ7XqbM7bV7sdpr1F3XACt6jwQn2UKGfs6M3t7xznt76o5n4Eg19NfwWcznD2A8m27E3JJ4s",
  "key35": "4oStJK8YdPT4PxteBqJbYaf5Pji7FMV8J9qrVS5Nha9hzZPanGJKvr86mZaTC3iekik5krMPTmiEWsygK1zDQgEW",
  "key36": "mFhyG87owFvLqHse58Rhw7WJULbn43HGUCtggURyuaMaYtoeg3wT5GpAyy8BhbN8DPkXTptvJCuumndW46BUBYQ",
  "key37": "27LX2xhKDMJPGf1b8mQjS5GuWLg5i4VgL6yAe7T8RoFgTAxwoboeVhvt6t9Mp29F56YG4unEMaLtK4DanAktxPAK",
  "key38": "5j5xKbHggBpwfFgzqEufwyrYu6YU8CTwMdoEpbddC5LVDxb8aCrQzup2x4PpPkLBHm9wzp1ncahQZr2jTMuA5b4L",
  "key39": "5kSDhaoNqwdengSpXKPFHqvLQTdZGnCvRobm9kHqMniqd8P4eX1JskZyj1GptUijsAEMKiBE9Mncv2BAHAMBkLYm",
  "key40": "4mkXdfnQhJy1oW3BtunG9eXCRZKXR5urfbGiNdmqm3MXcvVj3FAomLU7FsRpZUX2CbPWPw66yZYfBNiPcJTjBcsu",
  "key41": "384vKTQ4LmL25bs9RgtKsXfE1Q6DYtkEgbi6ZrVwNSAtvrx8LvqMr9UoPKKMeh9mQuQmNNfBwe77PJKkBWVuWkce"
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
