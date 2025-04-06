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
    "4xEWLxSa1U13r1iXwmxeEBsuBHok3npwKytM9ykgce9MjdHUzDFtdpWbZrLH6gPLepRDR8YrtDgXwYBwNx7aRiph"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TM5DyB9fRPfdcVaUUDeCYevFEnR57x2Qxz8sb7zPa9ymE1Us2mfsZSFHHxcAPwCiiD4266Ph7Cn2d5hWUSA6oBX",
  "key1": "6cm6ELtzhLctGDLeCGr5KV2GjgRyUMcLwrHARwG8UbTHKBg7v9tyXbsXzqCSuLFoCBKg25qRDJBdaMsyJiwdieH",
  "key2": "SXRRhEePUPxcMjdYhuqrbArQJRj9vzpnrYhb5zKkvahyfVQ7BrZB7msrXs7F6Z277zosaiTPpJDATegP1ZcbJK5",
  "key3": "2CuBZuMXMivLdR4At8AZPm9CiZz9FtWAW2tpRNmy4TeXiL2MfkbCsKZ9vDCabwcXWDFWYTatyYpogTDsRC4ubHug",
  "key4": "3UZbx3tNakXLXJfW8fFCREEa8n5KeMfVTJycg6ZtWT3RKaPCqeBmQHD2D1jWMpr1XX4VGY97Eas9EboCR7o8U7zQ",
  "key5": "2oFyDYaFRSeBUU8u9agaFfgha6rKvHtR7yZt8oJCmQKBcNKBKeiWLJi6b79T3cq5De66JU4ynhgRaJhkNXzDYxtD",
  "key6": "yDSeBhBXGfoeW5RpnVeJs1SSwgNK2PErJK6QPdY6218HTx7RUTYKhdRpDvKNbov8WY7Fet89A3dsQg4hk1rzfdP",
  "key7": "4mZy7B9RtFDhJC6W1LgknEn4HcFkZ156eeunHVmDGEnXLAcHgX8FYSsCwrHtpRWYqSjc8cnfRNTFJtgMLEahTLNQ",
  "key8": "4h1Pc2VkcUcYfRPbG3Unmfi5ccQeHA4cayyW2RwoN1YDfvUbTyCZe1zCm6yQ5WQBnjJK5tv1ytxRuEw7gxm5AyXG",
  "key9": "64i5pRV8BDAgSRFH4N7eUes5k2Dq1Zm71BR8KYAhJRS6LgbUQWDT7hSohYANYaE5eGkMHtn33wYg2rAUQJN1QYx",
  "key10": "5SNbX11LtyKnAQLGHXusnw15QQend5NUyUkbtHAabvH78SuhiQAUry4nBR5xAiAo34D3AKYPvojudeVCYrZpiwKN",
  "key11": "4n2QZB2una2jvTWA3psNY12v1Pd7JGgEDYWCb5qDEv7LHGqkBmYACG9mbRs66xAoGCZHwVTdhzeWRSS7PAfk5ZLv",
  "key12": "5nnFGjWzpZtgqf4Y4S5fWi3jkhwVrU1njpiExrotPKJG1FBs1XGQfgZFDHNVt5NxLf8dcutNm7kx6w1iQFTg6ibm",
  "key13": "4MPD1wfjk8sXp4aBTNZi1G5xwS9ufqMeUfkdwztBqW1ZS36Tb5Fd3x2eLu7B1bprbLwBF3zmJL2AwoHvUbsCds5A",
  "key14": "4UpS9EKhtdT5h1kUVaMeDrnzj33K9bgrhRHx2RhH1y95H9ZiczszATV2dUmz7EYAEKhqUe19mu7TmLAEMrjLcrAu",
  "key15": "SLXoVFTwuMcW2cdeedmYSWrdwkGo8YCJTtafb74pmz6pELNfHiN3mzbMoKJqDfpeXHpTsWjFCy7WNXQvwBNDHw3",
  "key16": "gLFDShDde4wumnZxvR2jHjbTGvKKgQvM2uTKayajiZYTMkVww4YZnWNoNfzy8NSAxXeT5B9zcnz6sojnjVuWUNV",
  "key17": "3Jbr5n3tyu6J1NC14V7icwyWVHYoXJRfHPMfeASKbuxFd699bwEbFHZoeHR3Ub5LL23wZzT41yHkFxHiAKx9wPQq",
  "key18": "NpgKLN3thGS7jdVQXRRsAH5JiokvC3hF9iYPZwyx6raSGwVqovHgyJ2ZkEcSnJ7GjhpqgwQnTyc9ECoyxtASsn1",
  "key19": "3SpguAGMK9qPiU9AZSjFpe2o9B6iSaroSuSRKYPb49nDf7s481jDt5RJv18zTqXN6A4Rib3SNg2SVmwsy3wZJiRb",
  "key20": "4gdkkFKY6ttAeBZg7GSUJQRnVrwxASvxhGheGDk1ohsDZDzoC7rizPckk1MSgk387UAnVZ5nxvYstMQF6GydpnwQ",
  "key21": "3CmonD7m9YPgEhszPAxm3KbXwJhD9HRMAuBHRoAUnoW9yLY5zB9ZaaHqbmPVjGu2HJcAM6kQLGZ5FkHhqh8qSbek",
  "key22": "PjD3nqVV64xVjTWMgLFDwXqTFcCj1KZdynJbf4eEdSv81dGdYqN7vGgqNoqB9fVPacd7b4u264nLrM3MV5pp7T2",
  "key23": "65AG2YtcnEC58PZ6ShisiLSbGunQr9iqUufTJEuntwcfqVPxP7ffTNQ9Nb3FiehZR73Ls1SArAv8nx9BMbRcpQDv",
  "key24": "MHZTp6hWAUAoQ8HC75s9XHdFP95Nv8w74fxSD2YjrYN1chjenZkMSCM1uMqVXHfJL2uRAgcuxap2udLKhpezTzn",
  "key25": "JmByDqXMNw2WmEznkiezgwLJFZw5B8Q4n3W3ZwreAZX9NNG4SFYnQyCPEy9ti66djz8vb9kjshPQwm65r69CDc3",
  "key26": "sCioQBjW7LCsmFa9YgucX9YZrqVr1gcaZRzVXeoFcHj9XNTC964U56wwqS8LD8Aye42mPCe4sXs8dYUELvYGg8f",
  "key27": "2awoRY8juh2ynErbkMeW8FF97SkCXh9ypXqHKUcQvD28EZ7UtHtpJSfY5YJ5vjVrNo3Gp6yuzuSTQTe7V8isB25G",
  "key28": "5vsdBLDRmH8VU2k5yFb9EmWyQenSDk9CkFi4wKZR5bJ6gk5DCvBRnaPB5dGu63pCmka21EaftFDhCQo63UbAPm8c",
  "key29": "2RwY29ekTgUT8NKatf1L4kWJTK1Ex5TwJpvuR6iMw8ZGp7tRTYe95ZSXtKuk4ADD2swG2iLAUWfZPrrXwKd3qkTk",
  "key30": "EoSSNdK3YEjW5tXPkGkDbboSagaTDRmjdsxhA4TqrVgyb3pPvjYPNXcFog48e4vjyGjWbJ4Fn8Vs5vCQVmZdUfr",
  "key31": "2Skvr3Dks1Z7v19i5z9h5Z2S5oY8JSBWFTDztHwRwUmjBxR8VTz5oAr12uy7Pe9fBvc9ThT2rAWXUCYJznSnrxFY",
  "key32": "2hQnCECoqEWbKK44uWZ3GJ5kTHpJcrrQ4MqZnnS4BK9fAvT1hNdUREt53uaT7Uejk1AWK6sCsJVJAMivkWXyPP8K",
  "key33": "4hsvugDLonCsjbozB8WSGzRnsqyKoAUF2RpRSoKrDHRyRBr9JjczQGEiZYRUBFgB83jb9dJSFrGgA28GExPmg1Sd",
  "key34": "4RtH3tMQERa6wsibBpGZt1i3e51WgzrXrN8xkTY9paGJcoPscLXLuexr2EemXJx39gX262q7jRK2hDe2A5oVADDP",
  "key35": "5eFLCa44bFpCnPiW6uVif3wz6DTFZ2AsakenFbcLSAntHcenTKeAzfyYhqKrCb5RE4ZXnVz3h98zuDfn4JTK7gBK",
  "key36": "2XULU8VvyPhewh5qpgdqNyQANypUQ8HTwiKH89XqRuqyyGxvcoPUYnhVcyCNdewV3RD5gRbcBzD7Bi3MyQQWxmEZ",
  "key37": "tsynns4Wv86Ax4W8QV9DFfuv6zYSSPVDpMxJLkWzXD4pkDhQ1aRQPvJds24wzfmQkyCEZSmj9quA4fzh9u1Rjti",
  "key38": "51zCcxk32Me7xTi8KLQK2FZ5mR1ty5YQsKcQ8RaaeS9pS7UeYKXMfBFcUjZA17cwPGVC26YtN1Wp6YM6U6uLUPSz",
  "key39": "355oxErh7MjpoTQgbXxbkSr1Re7ah4yub2atwN1UjAsGNv5UmkGpmk49u5TQR4WfWWqGRW2Kdy9NWGiKLaKQdpHC",
  "key40": "M1iqnHMNH8eZZasg1YFnmyogvRMFiYo9JN4jS3Nw8QVZCrHbYEwu5dJE9yuueJ3JZKmN3kqW66kgHeUVaf6F5DY",
  "key41": "3UpDhht5TRsxb4MSv5rbi1mWihnFnCi2wyYHfnNEYQoSnE3JqAAa2C5w4tveJDMhTztvWzu19p8k1m3xnhaoitaR",
  "key42": "4pEskjcpGHoCxG1hjn9iQXShopjfNy1uEfWWsFT8kerDYXrMKqvWcR6cYg7UFBpigxwP8FBCsDbj6XhoiYgCPbcW",
  "key43": "5UgdjdXFoAkJsZ4ELVAyuc8HAHZyrAHwLPiPokQk42Kcu6HXRLGPC2CU7mywWMwwnNDqHipnnVU6jScoHUAqYUWx",
  "key44": "fWbouN393kdMEzGiDzqrF5QWikQKydUCbgYWa1LYHSbFPXtUb5ZBgRac3QHBUmjkQmNpSHWfaVwXTX4w3fHx5PZ",
  "key45": "eGsFpU1mEgR1GGKNudRGY98Qdept3rRWz9AWnN6Bxs8nRVnf9eUJ8odhUYDqp4dv3M8AnMMFPrTZStagUzWb3nZ",
  "key46": "39DRojvVuDUfmNxjBsZotbysS9sX781c8darMSKSWAoT53r38apLog9qt6jtX6znfiVXSUDYzpJg3NHjLa6VrFs4"
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
