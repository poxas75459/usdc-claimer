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
    "4wqAjMxRbog9E9QG7eugpuSAy2Wu8TxrQv9jAaU5PQXGegEpJ7cpvTcnMkojYcTQyDUP6cfDefft6RcRqT9dcSHd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xtvL9GFxyLqPCGk2cNqjgvVeh3d9mpMyfMoUCunDnWpVJga8WYF1LwAgQ8vAtTvj4suAAcjXE8UynjPiagWJjt1",
  "key1": "39QMT77W5kmKDSkhu9dEhNGkGB2hS6g1i1935YMifPFnf9znEbVjotGaA5ePVRQQAYsaiGgNSmbW3dcn1tVswTAu",
  "key2": "WucdbRudhu7Dj691GRNFTKGnGnr1jmgQN9gTSBh28WnPkXZRdy5c4oSwitiKxgPFFZzDwxhPe5cLy5EcZAbvQJc",
  "key3": "59zhJrCdYGs67WgHxBezZXxQEsPRrUvrxES7yx3oTQ3D5gFbPP77VAAYzboDtzXnvCnCVtPzgG5Yf7bW9ch9q5tc",
  "key4": "3ZMxmBQ8Nvhh4iHAzf6yzHmMAZsAtkJzzcjPNoNyTJk92ahB6XAtC1Kn4aLcGpt1UBngsRhihMZEut6yNtHDdNVQ",
  "key5": "27JFdJxLUba8RSjxTiy4QNS94HGjvqAmuUeHZ3npMKtPBMDAnDV8qQvTiEBqko4Sq2LL6UsWApFDv8hFRrZLmLkH",
  "key6": "5iCsA3sjcMWYfB31RVvtXb3uzXWLSTLeDG2qWrXCcAgdGugLrRsTa3WBsgKtzdL6ie2LosZSc7bjiDk5L5eiAkDe",
  "key7": "eQjiWGVvGX3kEDRzHRG1N64AyxSwobeci7uFWYg2UW1gbR5px3utXeiXhwZkzwFLXEZUPGRcwyQ1cv1Dqo8g6su",
  "key8": "46ksEw3A6iLq5GBmWWzEBzaQSG1oqLDvsn35UeQjjCgH8uoX3mVJUNvbCj8E7CFrYgqUfnVbaB9KsM6GFCX9Khhj",
  "key9": "4bCTHdcumh7MSEUggqMPrCjUp7ZjY2dLuTpdVueXsfDwLria37RtKS8MJRaZWWTENU39AEQLBYB8Aeyx4UhFEWsf",
  "key10": "4ritgsVLWX38NDyt64ocRAHdgVZV4Nd2DwVhkLTz2Ufkts7j9RAE5vbd3P36YtChD5bE2GbLUub4yZ39o9rUc4Re",
  "key11": "3Nd1uRRXB3Yo8fJj5o2vv6qGp27otuV3tKM1Uvn3GFroPXyJfNzUDnEgzWN1dVH1P5PB6D23fPZ1K2R4dRHh2ost",
  "key12": "3SHbSpHy5zN7C6b7bUAjZKPsKLbdyUyHcEyRLu5F2FnzpvSV4tJfUyGDXH1Jjefqh5Fb7nzZFBsCSa7RTfRxqdkj",
  "key13": "4b6LcjYwFCPyTpuG9xDEFFBzGaRSZktpBdnomevbU26vH5dXAywuU1naAsZ8RvBn3GqhRaEZRDwsdAwoAmYRPTcV",
  "key14": "5jCVwcKXCanYhDV8MRz9Kj4XT38iLMGTXRMHhH3mig7CEy4qcyR4CAjo7g7HedSgzpWmKc1JncNGdGJyr8H2W3u",
  "key15": "62atQr4rgn8wyFt9zmHaPx8m8QCgqDdq4XixjCduvYA5Gbr41eaMnML4puPmsmbVsLd25j3wicqyaBoC2Uq9yo2c",
  "key16": "3wEKoYxRiyNdt5rNis8kPwu8Ap2YixDGKsEGiMVanbaTNyzNRC2DgeVw6Rm8neBBpd4HrVKkWP1uaU4CmZ7V9WkW",
  "key17": "32uaC1hmzgZs2GsqCDBNnaHaX9MsM2bQfCwTaujwUMhz5CWwM7xw594fjuNZc1WX44K6dMyuRx6mKzfXN9gMmUi",
  "key18": "VFyR9CvYvJPGwF5LtFroRMirPm1iuWqtbc5Znmge5dXYxfSKF65QY1oHFsAHB8GP4qRS5Jf3ABAuWvPe7JsrCcb",
  "key19": "2BuydCFBpWLjGtV6b21nhqcFudpRLWQNvw7HNtszMPF8K1WU6TpjLWp518ooCYRzTpVG1GDXVPKhkhjjFwv3oo5U",
  "key20": "BUGnThP1HbwCvUdtHec6d6vQXZVoLoJs5FDJKnZ4t2NVVzBUjAsXqfvRmPRBm94f1r5Nvv2oRLd1P1sYEeZMRn3",
  "key21": "5nwx1hupNMfCpXmthQxTQ2QQPEs9HcKtQst467RVcTAKyikYfr6natqkarWrgibAa4cx5dUVF1rKj2HsWw3NRZVL",
  "key22": "2vV4bnASbm6fgWy9gdR1YoHacRvbrjBfeWpi84KZqNfyZvwfAeeGYfySmcDXzM86FqrPPRZ5GSayyhQJBUidk23r",
  "key23": "3uPTihbWEYrNVtVykH6WHydjXvb34ULdR5YNXh6N4TfS2jv9MJDs6g2nFhvpfBicvjPcqNq97tSTq1fibWE69rk5",
  "key24": "yB45d4tYpCDt3TRNU3iwbyKiQH6U72nxPQ6xETtMSyCdepVZ4Rz8LD4JzwFQxYASUyhW6NsdAckKA8ooaDBeRYU",
  "key25": "43BySQPGJ77hfzr8ts4WR4BR1ANg8HtSYXjUdgnxeaGGJxh3MTWqs9NTYoRYUNM8KZCcCKPv3AjZHvAnUz2yRnJ7",
  "key26": "5EZnN8qdZSzyiefypk7qfCXV9ybHbLNCCkDTNsCXnPHdrecVPQ9GAjmF7gArrcRhCPgJCwWofTpGk911fiPLMiwG",
  "key27": "3LfTnoFwAUEwQ4QvPJUHf83Fxs7nYg2eqoN43ztrMmrJLkuRL88deVGex5kPDCCWmrh3gEsMFJmHtF2i6NvMHRM9",
  "key28": "yFtkkvBbK9EnbyJKwzGzWuCMKiEUiNhPaKuPXNAJtB7tDxktxaA7UhRZf1t6J8nCszHaG8FKpm6gsH3Q9Nub6SD",
  "key29": "2ydoNJMbuRPFM7ub1Je1W8YHwc8TKb46hVwHdEBzBiPp1u7GSk11HWbbCYeT8EtMjeugpPW9ZqhTtVWbbFxP19Fs",
  "key30": "3Gae4kq2EzMcN33MgDq3qcuTKFm7AXq8y4jyo1myZ4fGtYicmAC5yaMApgg1kqf8bXLFwz78NscWPKqW5ptsFoDv",
  "key31": "4FtWBsk2NQwys6419s6omN4gH34WjeLTE6LDgE74oLvL1fqVM4G4MfcwuJrMStGQk2Pc3qb78XfmBCjmhj7bn37u",
  "key32": "3Z4hGhaiMZ8RQjEqAtStzDMCHwDNicHkhV8WVDJxaNHcZ822XqDsgcAiCi6vSebezJioQWjvSo24FRJ1uNvMw4L8",
  "key33": "2qSxUcZJnH7TXofrZkWRs8nhZe6sYFmUx6FNoBWyCXnHTDDbs3oS6ZjSXafya1Nboi8o1LcunA9kEEeTKvpznCXY",
  "key34": "5SbccoDQuYqzmEyaRpkWNDrzpAbJsgocdr4MitEH1VU2WiE9jzAzGjxhs6JWfNx6PyugXezVqkAdZUJU38c1kVAo",
  "key35": "2k4uYHTVrxZfyBxHHGTsWpzW5BS4aYseQTwNzfmCHr3GEDs3LBe61NZhPwK5JPH8A19bN8bj5DfR4ikXainTysCe",
  "key36": "5vjjjgHqPUN3beqA8cvwdEngoaMq61gqGjiu7udGximSovEMpg3P2ZDxcrCFvrDWhAmjE2Sz2KzN3Ks8KiFR4ZLY",
  "key37": "4gzo5xxDTid5MvvSMXFecRYCkhT73GbTPxFYCfMrMWxW7izvpUAF1zMisbyMfC4L9uZJWSwEaAUtgcmr57GSXuxQ",
  "key38": "33VtGva6Q6GfkFUn3jDea8LgwBn8EJDurYB66LFdbf9JW8D6GusLNMQmcDsE4nKbX1Y5TxMv8Gvu3GCKXzXcwdm6",
  "key39": "5LuMrWjYdGFZmDtx5A7BE4p6C2ezaYye6N77Jdiq4wzkLceXqzug8wTHQpnREjVQdo9giTLP5q9krhuidEZDuqEN",
  "key40": "2aGoM7bRvy9RgXBrkzf7Lqkjw3MBfe47uBUJyvUydBhM9bfjBAmQTtzTChckqLyPqbWtPAdPVcyrSxQt6PXunpvQ",
  "key41": "23KS3Dz8TZL5uQ25B9ek5sB6dQJS1ZPnFF6mYoUs5Ep2R6GzyEJHcSVhMVg6SNfGnka5CLFN76i4XwVvHCHMj4bG",
  "key42": "vM5ZcG4ad6era2oHGemF4TgKuhDQ8GP9UPwgZNejnA2kvduacASQg9Q8ZZr5ft2HNjzbbVWJcNirMf6GPD694xC",
  "key43": "usZGQYhy98DHZm9ssSnGWE2iFAMZKeMSWs7KbUwDnT1KELRFCx9KiaExL61FkJS6RCfWBWxEeqFXaRfZXerjDZF",
  "key44": "5SGoLMnMS6Jtzj8n6ta73uzma7CxXDfmspWvgjV44ZicbvcUNq4RjGGQntijMdQb3pQENsVLsJF1gyuN1ktCmwiW",
  "key45": "5GDXfXLW85dD6vcWstnxGLjncR4K6bDqeCxHhUY5yPPsDRUuVDznPeypdRHT1zJtSDDnw65GuPAPZw7UHpFhPXRw",
  "key46": "5AiuqMvumLiiV7EZdofux262DvBDzmnNvxV2n3GqxL8GKEFikdR1poxA95LBATbr4DnSpAqdyawoL9PgfDj6DcE4",
  "key47": "2bmjrW4F4V1qwy2X1Na5VFXgQ5k76i1MRD78coMjzzhZcNeZaMmG8qCyky3kmvAsx8G1bvP1eAR5AmUn778FYyho",
  "key48": "5kKfhbKsHM41DEeWcZJ9CyhyuLT8CwqqphXxGfnEGHWSmaoT6zLghKc6anvqp3KgukcKGEx6xLDCDZkVnw3empjc"
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
