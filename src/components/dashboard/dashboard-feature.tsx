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
    "My6RtmaYQfUWQiawfimCwrhQQbcT7aPGTD8NZMCkzoLRcs4N2XfvSVCntsuwR1jLzuPnRozmgiyfDAFH6AyHo2c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L6i8QZURk5DKWY4xngaYaDRVrJigefMnyFYCCToR1mfSUuybsLjfHhY55fFYaQL6wAqKkJqtZSituxPzmnQadQW",
  "key1": "2NK3jWG865ddUDzu5SNjio5r6emUVhQ3feHhRoWKUBkRnmFPDKNnuYY1J3p9NHuRBhWjujhWoAvNv8tLs2XcXqjs",
  "key2": "56m4YQoE4eFebCx6oBoi3B4dtyJHTgRLG9heRN5rrsPuRHKB9Ynn8FHSfMdVAQeTTedv7ZMZAXQpa7bfPuu7odfS",
  "key3": "9dQNwxop4dXxgPQqbVqFKvwVkTHYzjFiY6522hyJ2SF2k7a93jC2tDzgu8jA689PY6KtZck3bqN8DEXFw6azPkD",
  "key4": "5n2qb6BD1s8dXdN6S9tab4K3yXprYzetcLhLWTcP1FPDuCkkaySm7hYxjRQNM6TcCj75xQaJvFHXXeS4hGcp5C9B",
  "key5": "r7zgWiHRpM6KZrBQuJ8AkJ256Th3j2DM2cpiASPbi7rChQjipRar6tcd1UDebY3CrpVRf5m4LpuJLpwU15xRju8",
  "key6": "5h3joeLdoTuH8HHwPV6SrNzSbT1oLMVzCkDaQprWJMKNF4Sfe6fkkGGEmYFFHGrQ5HyPYSHHS5BQJi52WrmMXVTi",
  "key7": "3Lp74ZkvEEn3i9pejTia6D5GPTrY6ciE7Dket1N6ayWtJzuHKz7PW3CaX4Gk9JhQWVj3J1CEJ9bjegVLtsvDbimc",
  "key8": "2n9fEJqNBPAuDbkpz5JfS5NHiSP6VRrjzJN5Rr2cFh7ggXNbn3U9gu4fTyK5v9tST6dLQh8dZQC1NY3i4Q2BNn9h",
  "key9": "2fRyPsp4BcUYkskgYXPif4Cmodyj5rSHSWTMQcsWebusmnpsUPUR3HfBS2vjEoVFEL6f5a6wNbeVJ1xnshb8jUKh",
  "key10": "5NtC6nVUgsvc2ybi5fdoEPJ3uWvHrVpr924cDDPVKumVzBY8r6BouVvo6xf7oK5hEbLjh8HAWn8zA9ftCxHoRRE1",
  "key11": "3PeptsjrdJgJkepDt3Uwj6CrETmyUmxKGi25o7VSeK78y1aGYe7Bfrk4f7NQg8xEPkjwZBBVH7cbWerEHDKn1zU2",
  "key12": "2Ru7u7pPiPQxQ9xYnqSCKDZKRoC38WYXSE2umQ3MaWeTFFqMQcpY2EtwXUKAG8HFqbocPufzq35Xfz7HTAikytgG",
  "key13": "3CFCBHqyLWxMw9bTJewH5svBFyxtH546w5WBfMxSwNJ84ecZfVjz3oeQ8ceqdr6v6exVcTajewinoDBKtc72nRFQ",
  "key14": "3T6rEZT5PrYBUGN2UmAhEjvacx1CoyeTDvA2B5XELJTbhz2o7szDVUoueSEEiUzGWYzVnygoqHr1joqjzHmoe8zD",
  "key15": "4qbLbA64A3M4BPGkusjDMeMKuoDZNSorWoTjwzkKHn81GW8XkdZdUx8ukUB2x4XbsFMRZUPfAWQG1tuewenpgFaW",
  "key16": "3Vy9mW21HxG9HxsidvEzeDPHRHzKYsErXJJ9LzUcYSQhWM3uj5Fy2ufRSNzTXtz2zbwSvP99T6nk9c4UKv3UGyP5",
  "key17": "5Z6Cx3ziHpSSgNXUdDiKpkGoqn2rV537Mn5briHLaA7AgP39N91Rdi4FRHTvrK2nRgZX7TatLeYSdhAFFK2jYKFD",
  "key18": "2atD5SAEAQxg1AJDy9jgYJtUXKicUmpXJ7Fxs1gTYEcSgK3doVFLZFsS2T2rkN4gBxtiPEK9eePyC2SiQHsaWZcA",
  "key19": "2TpBU6NJj8oNgxbJSvokapb9nyeVybQiZjZtuTyWNATYMyRMT2d1DQi4kj9nRbh4JXu3RkTrR8ZaZFzy4XWyVaVQ",
  "key20": "61jFUaGPzAbdtbaDuHVvsPLKvtdfmEWEsbWsQtxsNmQYaGG1jQDehAZCPcDJA7m5ohUaStkLqmbAw1ejKGrYf7dw",
  "key21": "4NLD6L9tPmCmC2LWGKqUXKfHyznNhB2Dz5aqVyajMLkb641uhxShNwg7w2SGYFuvAbFGm9cZ5ytQU5pK9CsHeZHq",
  "key22": "4caMPi6qSism152ckEya3uBioNRMTKHGSKMeNokv6745gpLrjwzdDxQGuMujguzNRfja2iU3aaAN2SCQTirc6Ry",
  "key23": "4829FVmFW2kk9haAGQb8LirUw8RQzN2n7V6dZ5dAdEZi8Bs2rB8FtYX2BNoxjstnZadJwJcyfUF8MCEGpTis79m3",
  "key24": "4PSJbL16hF3m5bqiqNajoqJ4DLNRZj2okLUMsix7Ayag1tFxNVxYscKCLQJ6AABafJQUNdMB1MmRHb5Y9zWWtL25",
  "key25": "ELrmLovx82rgk8FuLQ1VMMhmjXNKVrGqZtQZvMsWS8GrgKPdrXRq9mLxkq9WfHe51nArU1eqzAHS8njTkiEW5JM",
  "key26": "4HebjsyBLn7HZkFfX8gxAvUdDdA4sCW92dUtjEkYoaRUhpQeC9655h3b8KXbZakUusMJpGBdaFou1vqsg2t2f3hp",
  "key27": "3RHmiC7Q3mzByR7idfPVzGRE7W5kaENYcfVuSyqtoShvfjSBBZGzQF7zmhqNwVv6VzgGYN51PP6fBB1gwfWSY4pk",
  "key28": "4BWjHuWXWv8NUxequSfkVjF8d2VddEjfe8S5vfREHxzHAGH9VetN4xJWgJ6ATh4om3iWWD1MHMBtqRf2dq7LEZkY",
  "key29": "4VGMQtJNf7me2vEqxKHa8MmLnXFhNe1vgYs17Cz1jNw4s3TCT9c9NrY93ffk9JDFb3yvJtqjtni1FahXdTtr6oeZ",
  "key30": "5iAm1MJkBhjeHjRFyqaMetBsLqUGxMzihmGb2sWk6RXwpKKPCYhHcKkVXszC3MhdfX3nuRUumi9dcvCY3Fb8s7s1",
  "key31": "2tbPNdg2Zq1xkGwHkxpFpuMjWSebG9WDG7FVYDTYx8QfPQ6x41aBk4VY6kd1YncH9gUjNGGew5dhapWsshpNKW4S",
  "key32": "3fJE1DCyBwnFfs8tLdy12qkoNpBidRyFKzjvT8ieutD8KsBNej2xZFGYBZECgvRCSaV3jFh6DumX2p9Z5yjJDLrz",
  "key33": "jbVGA3MSshBGGfnUvqhdsong2qHKpizzkjpWkCrF33HpffqaDBpiRWBbRK954oSVX5xXjv3dTjcvPzPygELgZMr",
  "key34": "2W9GJigZivpjEepFXV5NwnPArpTSPQC7jQxDqK6DNwsfTpEwS6uXHBg8wCPjjcvPC5WNZeqtAqqGWU4aGoN6Z436",
  "key35": "535RmeKcX762dhsFhmj9Sa74SSxPAtxTxLqNYpFYkdkEW4KHez5634uhhWzrdSWGhrAxMug5yaGu9eNPQ7q6Bvhm",
  "key36": "39W2vAocpiFdGFaDrxzQFhmvQ5QQo2WWxf45K8RwRj6Hy1LbNGfc2d1bqTgKcLPrnpL1rSHQfBXsiKQd48M5xDWF",
  "key37": "5yBEffu4uXcQnmmFrSHvN8bCRAhoATQ4LiQZieyS77LQ4f66FLavGZ5XFX85288oG6d6EmXitpUF2dStf5hfXbAn",
  "key38": "2WxxHqJzCgH8T3aebaXXJ8EMnFX7EuKL2rm1DYGJJ38pm9GRMt7PvLCMkcyguyCWfdFnBcBsseTehoqNUh5skhae",
  "key39": "5shjhCfUQfRRoRSARxbptksEENhGmb5QM26kMCcAnZhkdzoMX9kJqUw98wFVtn5kTfz1SXkM8kpsC4e3oSdmjbV",
  "key40": "4UQnNRaumGQCd3PJSxqQn4xyVFbM7R5AhLvfq5rapyfBhgoM9SroCkw7z7WdTWfmF9ARHKqV1bFnfV1q6ThQc2Ab",
  "key41": "5Dgnizm7Z1hKmvGz7Y5ZqbCD1ry583puFmjB5LBs9vDVAN7QWfipqdesxL1DpaPgKEfJ8FxThzRaaJvoMzuh5p2f",
  "key42": "5ffcWA2YA36Su374Gz5pP3v2CEub98MLMw34DZJgUoEAcnE9sjMtd6QqfKP8BorkwMW9J8Mbrs9dnLV31kx9Reom"
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
