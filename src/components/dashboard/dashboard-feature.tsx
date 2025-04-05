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
    "R4KN4DEw94D4o6N9ZUqsrkU9T69DqHKcC3qMwLy8L8hP5znbx1S6wpAoX6XALEKaaG1hxE6xBMZDyjkj8JKRsVN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iyeqJwjczhcivyBExcqMnEoJQYB8foq9C3vouAvivBKNuwyYicTPQ1bSWBvha7bTCADRt5qx5hpRu5MPJCwKPqR",
  "key1": "5B3LH9knwwEUnpURV46GAg7UK57N4f9EYdnnwCEknuY2AxkDbyAH313wv2J5ZtAdPEN4MwnbrmvtCpbu2tSPSKSs",
  "key2": "3mhSVb5rPpsXZm1r8xaQb17zFj9eY6VQ4efRjryNYY4tic9y1gxgkfsMGn9iboArEPJN3RXdfhhbzzMYZgAfZ3qP",
  "key3": "63P2iRSc5zSonn91BSgbwTsF3DuZ6Qb6hmhup6xtmFR9SbtytS16981jEXpMJLNWjqyqJjMSXuLcKsryEzppwi5G",
  "key4": "2tadeyvrumbaNGdfb1EdquwgKgh9Es2GCaZdqKSf96yu9g2GjHnub5cqMJGAKUpPcNXR75GJkMyuKc7Genazo1Qc",
  "key5": "52PzNazBVa6Hx6JuBk1pHAubhL5NEiD6dyjnkMDCXaanQ79mmrzscTPhgkvYsk2emUrqq8ncaeDnFVmW44nwkM8Y",
  "key6": "4eNLof2eRerVsvYzJ63QwYMVPWjq5XLooun7QMYN1wMs5JV34wDsF2JkbuvgQfWkr8UN2oi1XCrCJXBThkjYQkZL",
  "key7": "3qVNqYkPAAi8uafyLTzWA4sDusFW8WP497BFzCURuFEiaZW6KVEJm5p3uBupTRAkmWvcX5RuT6rHgcoKnmnxSMdc",
  "key8": "52RH446f8GXpXPXKxrR8ZuoHnihVjaA3MDjAzyDgefsnvJxJQWcMdzHMCEiavx6NH4n6k7bSW14PFEWFyyodCBE7",
  "key9": "3BszuUnZatrLZMaEicrQj1wuRi1fAFedncyUyjZxwgCVF3eG3jpS8hVm185nXBgHnCzMSVRdtnbtCWDE8WCB2Qh9",
  "key10": "5wwdHETnWag9sYepKxjTTh1nzbnQfwUj9ZBwWoLdvo1JSsxQraf2xWs4kd2ZrqvbMujxbYJchdpnwpQ5pt7ZkTrK",
  "key11": "WADxfN8BvYRZGpZKReez2MqnKz7Ds2Yw3pVqw9vXuSeMLXBEhWkzDk6c6AxHYMGpT1hjUbqwBVRxzFhXi762gCu",
  "key12": "2hiamFsCAGa7xgtjMCmxYYqZdAVPKsQaMZ9w48w5CPwTEpHvrBZT27M8vBcExHRRjaLWGbitLkhT1Fxg7RZYb3Aa",
  "key13": "3XJMjoguo7tvn6Zj1uwUWS2x3YJ2z3qC12wPx37iKvF1tm6S5xBXcnz5gdBmLD31uS7vY3GMEK1pLLnBco9Lt5Qb",
  "key14": "4Xk7De4vL5vsLGsAF2KbNDRq4ooz38Pp3K1v2SYwzxfEP3DAXy4XhCvfn682y5DwXgdoDjRDYSMu4BrePwsjY9yc",
  "key15": "6Py5NZv8oNFTpXo2hKJx5DLmDeatuy3zRbqmp9iVrYpKr84RSNetKcz1WrwZFbdGjxzD1fWbhhXDVje4xckLACv",
  "key16": "2XetsNiLyDqphVpJBP2C5DeKWK4MRsrUQKumheTM4RnYYbpwvZYuWtSyfKDvPEZTtFnR5J8duMz2QX5aYqDBrUW9",
  "key17": "vbTZHGTe3jrMtYMKv4FkQLtCDaNg3T8ER8GeHFGfcGqCZWRqiBzy3LHkV3zpvtqGY3GP5ZaoGMn57MfAXBMgb2h",
  "key18": "3tmwdcRJi9xaexrDUFRjKkiDAr9Agnjs6HdRG5dxNzD2Pmqu1uVsxzeLcYHhdhtMxpHF7vqbYyye41oSkxCbNUac",
  "key19": "22HsfMbeVdVnkdf9doxipfEvjBedwuVR7EM2ybPK9uxAu2C7HGi1ifSLWcNDSiHXAjGXMeWWvq13ohaVQpFSS5L5",
  "key20": "Cm9X4R1wmnHT9RQQ8MWwZoQuGWvdb7swCyx6QQKLw1tSRBHSynidjb31n6g29sBUEb2hQLV5Wwa6aLqMah4asB5",
  "key21": "2PXLbXMJWryRmoUGRTdXjb1L3vxthPFuUds9fU6zmiJJCQfGv6TAQWH89zNYRs7GdQndqfhPTxXgrdEp5WmEmGys",
  "key22": "6xjuvdKQa1wfPAwCTGCWsrwFFfMcJGYVkH3UGnCmqf6CMAgtze3H8RF7UsruUKxDx7BJKL82Efp2cEjphHu6zM4",
  "key23": "2vj4x5YTUMmfv75QczBoFjcTCSiLeVwiPXhrZGA8nC6R38TrmjJKij5cccdQfTQ1ryDRiTVvnrkbfZb4nWPRzFjb",
  "key24": "3nwJGqbDsi811WLP9aGAKT7ebnF9J9QhJreV5gkp7F58Gk842yd8oNVYG83CYrmzVnqTDHAu5kFnA8b9j7weJ8mf",
  "key25": "65tVhQEDtBWFACfSTL3TKcBBF4narFXn6jZt768WJtQ451u816xhrVC4aybLDFDDjJM1U5ZcMgV9eduajftYYdDH",
  "key26": "2KbaqAscnTLVJSJ2gGhhwwL7S2CUYDK9CW9qd6RtmzyMx2fVhsG7ekfZJSv1pbe3DtYmXbspnUcoPXNRxqM6hG1D",
  "key27": "31H5JGNFQxnoYX99T4GntJ5TuXovAG6TX4WqXAHNhnvBiaScrNpBNCJuwJhBzdivq14kFETN29YsLatXgBYiWpav",
  "key28": "5mZpypQVMJVsEdgRcJgab2NRshttcK69HyPBcragoBq5RuaYSrY42SZPtGrio12HLyvJHv3fiCzqyrLwL445dtyg",
  "key29": "4Je5EeXv7Tjbk3V8ipR6ptSXykQYtNMiNCeihBYcDTnwZA6Gbj9n61kcL1mqGi9pyYrNXEFPckiDhfYX8yFPHvvD",
  "key30": "ksyHSE7duRBjg85CxTsKh4EeRsNbqcbSf12rZQcLSF5QsvkHCCCREtaMVS5tFggan5xq5XBzSkY6oVF7mKMAc33",
  "key31": "23xuc5qiTuGYXS9uErkdbcM6f8Ct3DoX6DJbVWD98QZU2MhQv8vVawL65SFXu5U1FDBaptV9iTGbvdfsajndSGpn",
  "key32": "4rT7oTQM71euhPCcjSDmfVM4NQ2EZJnHBAzjmXXvfpEJoLZhLWifis71fcwBR8L3G8mruBA9SPs9NdhCHw4tVahd",
  "key33": "QrYgKfzzYQ2LCtm7Jyhhsb8MHvjTZk5Xd3rBoSM2Hi9Y7Nf4hcohqXnEeiRaKoTdGbdjxjBJKUPNNK8VJvAGJDS",
  "key34": "4o4oomNrnPxqGyWYBGzdZpXHAgZbn9Wr8EjhiV65jCY4CiCGQYz34HnRaypFwWNx5wr1J94Vmezz447XwucY9q3u",
  "key35": "3EjUCdnx596FHvazcihpdTU1HPm4qR1BpxnVmCch5yVvVjDmEeqMVSHYAhbJJrNvcQEGo9Bio5xWLRNrQrkpQXsz",
  "key36": "3FdSxrCASdJ6CCh7GNLAaZD7fZFXJHWqiEHBieoBxSYbumeBs7MnbaQctnTGmmE19zrNxc1H32huqiiaYN4HdhE2",
  "key37": "52Sk5L9QYz5rueAYGw6Fj1dYmqezpsvgMKrWP5Cr76yWH6LwNzQzC2t5RfYJy75P8zKz6vjnxf7sGiX6fwMqhEnq",
  "key38": "wRgXvntmvx5a5SoMLE2ydCj3zXJ6udYGaz5qSm12BuuPmqQcSyDkA2qybzp53zRVZrsb3DVrrFnotf7VDPXv2w7",
  "key39": "n8HZS4i586rMqQ3iQrULoEo3iAzToagvN7EVBY3Wr72eUZBSy4MN2zXUptGaLh7T2EcgctoUuHRcHL9W9Z3wymb",
  "key40": "reMUGEeGxFz4y4xTJraH6wahEQpUGhFJWVB4F7z83QqrZRJAN57M8TpGPzobMJ4sEtq4TmwHWsasu49cRHRQPXC",
  "key41": "2urzSqsGPNh9vzwfnrVJGQ8J42jEWwKBzpTemnaUbcvLGNcMdJyGRtwWGYRK7skGJWqyM22m6UhufUeqkmRojfhY"
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
