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
    "4Tc2KYJ3omo5BUFzRYnpF6UL1f2H6y3Z89jRsBwD7g4q6Mm1FZko8NaWtaJZrEJGniiePwt7WReTaHTW5Y7Fthw1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NJmrrgutEBKdRZRr4XVrWfXiMdGQAn5shsioQmEMBGTrUjAnYtf49ADGUu1KxqaAQ2KwEJSMpryac1b2UyfMH2V",
  "key1": "2vqTZmhGZgEinGhrBDDh83ku9Ho3Uh9bDmkzBcLxbkN2XkZAQeNgBFLbJmb21T7nwTZAtRkAC91Hz4mFDvb1ZorK",
  "key2": "K9EeioZSBqwqmHdg8VueuFLdTq2G1JKRwggZ4AntHJVWdKfnBgmcpERZFsTxeQHnFwL7RKf24wEkcXSv3U2vKES",
  "key3": "qBUfMKAbhSjTaJhMFh7RxgzaTebgA2HX6Rg6VKtqV5YCH7raU2R1h4K6X1UcfkaGC5TZjnQ1wpeBNkwoLVrNE8M",
  "key4": "2nWv3jzqn3nCJB5fPSJaNQPp3j8kjCWhVKu1PR21oLu2NWFHAJ5MBE1hHmguFJHqtbr1DLt2apvEHr6L6LM9c1oQ",
  "key5": "56GzjXDxCpzHfDmG9VPydGisPcP3nMALEXW8C1V43XWyrFmbGyz6pusgcf1kSQmN1r1MxkXtM6zkugMcjDKFoXpd",
  "key6": "33iCZ6Ai3WXYwsvQdc1zBj3kB7VVwxm3p9NmieYWh6i6rUy8mkjPxXtx81sXBKQBq1BTBUPFLFnhMX6vL8pfY85K",
  "key7": "3bY9u8LdbwsGZMP7dtP2od4rzvTGVGgzhTDFCbtxw8xpyqBnp54zKZTHCh5excKxQPMcVACjE2tAokncv8GoB1sk",
  "key8": "2Et2hMLXGGvWMwwfacmMEJ4vTGEewG7dHQ7jEvnuh65gTyHw15U67PmboaK5ZQbTsAvfRdq5F6kTspKFrxUiARiE",
  "key9": "4PBT31FmZ4ju3undKbjeqwXrVExDe29wRf88gzQrrgAkhvz69osvGeG8zXZQ3jTeV2ofVuzoZSVuCkGJW2GUVwdC",
  "key10": "4HD3dE4TvvDDvS8QMKb48SBgnGssN3pbDagU4NNifKEW4ZpRs1FDR7GYkWocAb9wYWPZcDagsUXqfUxmA5JqVPFN",
  "key11": "2ZZk7bty9qvug1RsiXjCo5ur2CK9TppeX763xhBxN6yF3u6QHm1h79q5gpdgWc6HJmpUMof1Sf4DZpFzCEZr6MwR",
  "key12": "32M2h7kKXjzN3Ad7AM9AEZW2qcyuk1bmAYUt1yJTvajDWf9cSGpZ6CRbrzh6uyZHAp7Q6yrPAXthqxSAyxaNwiX9",
  "key13": "5SG9G6gcnDtJDxGLAY9fY71BxEJKxR6SqLfkhWpAcJ3WymD9VgnHvTi5kfmRpkcqNRpdrERrL2ziNRHvJmgZGeVd",
  "key14": "4jRYB8ZYDbQsABVjfhiWSSCmrXM2unHXbbgpJjfHMr4xyaak76XW7YMxCnTG2xJX6ZZr85xa5Zuc98mpBd4ZnDYw",
  "key15": "3wmC1Ei5G3842ziwbDupVcHNtc9VHK9CoPt6GrA3AandGgGdZeVyGZC9wff1B3XoHWhsncmst5bupbp3Xd5SJRZ2",
  "key16": "126U6e3vYMrCamYZBHhsoxwNWWj7zUTHf4VyboxcPpLmzLPRW6teRwoijQikAFppdq3z4aBpnH1op7MU41ygeaVb",
  "key17": "42pKKvoLJgi7w7Nu1rAXLrEGvN76iswpmRuRTrRt9akX8pinPe7hmk96pXvBAHXPAhiriNJECYvvb95rsGvCW3E1",
  "key18": "3JksU4vNfg3w39t1nf7iWTZMXg1Jw4khUu5w8hmnDWjNPmyhtuzPWMjTUPKu8CJXZCTB8e4LZdotXSSDbaKP8mz4",
  "key19": "4jzUM4Jd2KubhvpvNyw9KJU3MHS9MzEgxiYz811Jy9y4sKyGEKAmb1KpUVAcYPAkLF5vVf1JnifXhvDWnMiM1RFd",
  "key20": "454vo6SvX1frexFtCviYop65qWw2XUhARYMCa11bRLTQQRvQaBNMVpH4AHS42hN3fiug4PyHe8meHM8ucJ1YNb18",
  "key21": "3piDnC6TEvWGQwhWSP9b3aDbcSCDs54j9QJSucdy7ASCLCucvLUPiyVXft2E1EJTEMy6DPmroBh6MbTVkf8DaQKJ",
  "key22": "5LwXoVzkwU6Fk7KxM76QnEcE4WqczJvPDuYUwvVrk8haM1xXVKaVgXmorYpp1fdEa4omZtHev7CqSmKSyV8hj1Uo",
  "key23": "gJoJmxcsMxA5zTdph5We74xArsFQFAAjLgv79V2DksFWM2LrigvJRP2QRSJtHXQBkkSmPAcKCKNNPfkm1Scfk7G",
  "key24": "3LuugDU737iDb5gKa2FxK1VnDX15BZxiMdnL6gQo8h65txKT5Y45oqj4bZoDcrMyhJJs1WfS6gPpo85z1HwkzbjC",
  "key25": "CsV8gSVNHTUnuH1veFvnnV5v3mU82bvFHKWXKW5ge1AeQ9fj9PCM2c172d2W4B3kwiiRJgfQuR3x85zLejCgdxW",
  "key26": "5Adgmihi7scgdxtia2B6pcGKdcrNVjNXRjEeq5VzewJsQkRrgmepbWnXsBqNiLRmBYWDeL654DzbyTapiyJozr8W",
  "key27": "5GRbG8q6Jir7c4uEE8NB2P7uw1FxVi2jbsx8kTDYCgF6sVtsKCbYHczrXBcW4mjS1FcWXBu52k1PmiCmqPUnydAK",
  "key28": "65e7Eu3y423aDw3dy763F3aWmoaoZok678YUfqFPWupjdw5HK7kSk5wC8onTr6ZMzTbZHJo6yJscDeSzA8jAf3nC",
  "key29": "a3enQzoi6hSXzqXoJKEr37RJHar6QfvUskiNyjvvwpbdAmLWhDNL99J7N67GMXRsUXMv1tmHQXauP1PXHNSrdDU",
  "key30": "5LULPKczkyzP8vyvhHWkuaivmPhPsFDCBtdkEmMMVUTkLixn98EdmvMaSBHi5aZsFfuV6mCF7FbNRw2AX7qafy1P",
  "key31": "TrF9K7uXZ825wMi4f8yGZ9qqSJ5RYqRM1fRPmTeU1W8aakGPAr8wMxCVjNGVSm4gizKgGCyE2oxop7ZgJsM21K1",
  "key32": "58k3F8amr8MgCiJSfVxaZabL1sb5chZMpuBsUkcQgsKsSk8CaFo17jBiKALHNXYd95zmNzPMTj943NdG7Y8nqr6T",
  "key33": "3kmxtbGQTojN1hdKMWMQrTZMp22h1AYmmTvEtMTb4gaBpTnSmZ24y1gP3fF8GThp8kB215pKsDU57YX1VLYtWV9a",
  "key34": "2zZJBrbXViPvTVhfVkLM57JjRBgEN4dpLoXVtgGLG5A5SSdXxZ2VcbUAXCUMWN7HshhF1sRnbYJjnkeLdFMaAaDF",
  "key35": "2hgsW3u2ZHSBWbeAmirMPoNgH2p3K7xtLNwKn3rgyAG9sWPpSyLqR2srZKDpYYdDLMsbTnhCXv8QMq8PiJzgv2U5",
  "key36": "5Axgzn4ubP1w4UiA9aaQgrBdEVEwVwMiQ5jeA39n2tCCHmocXNDKp1jwjSJDxQ3YeEbS7R7FDYswCyQXfaHoh6Dt",
  "key37": "4GzyL6hW2DqkJbFai6ADFLXjGboh2osjYYiRcUQUZsh3fDDEDMFuoEDx2BMSnNptzVsgnh62uBfgWRpo6NoEcf14",
  "key38": "35LyuqiPQ7URj869g2ebmhVzQ4F5NizA6FM6oyZUi4kt9jH417Z4n55ByTPDZabEBrqg37G5aUu4gwgURXDYeJzx",
  "key39": "3Q8iTPiNNACfyBJzQvPNwV8cXQ8ecu534gP615yoPcUsoHNALDjYxpjBcu7MNh6Aq7XnM7sURTmoedZsK7i74Dwx",
  "key40": "2rAzXqZqfT8DGEU6LzKkB6QksSo79WBUadan1LTXavS1wnq4tESHCzmo2bF35L76tPjvGJw2oAF1BGG6oa7DtHFn",
  "key41": "2V48A5BUULTLg1JSL5K55UAAsMQcXroJvF2ZXL2iWmEgTPcdt4XEwmtpnVhSMVrCiCohPhkWUoNN1EHQmuz9oXmQ",
  "key42": "5hZjefwmhoVVgiy9WoFGVz5L3CQ3HAvxfWGytncgHa5Yn9K3foAS2pwfYoPF2PzvtbdQqp45UoHkT6fPPaMT4NG5",
  "key43": "5W5wyL93PBCxHhrzQKzV8rjRSHEje6cjorK1a6DDL588qtW44FQ6xx7giohygReAFkQgYZ5nWoHpuPwgCsz4o1nK",
  "key44": "4p4egQMoBQUxxsZ5jUFEiJRRymmH3yjHxuUfPwcr74UutCYUddg82GjpHPgrXNzPk7VtsPoDys9L3vvCxf1hAJcg",
  "key45": "2ruBZVdoEbVX9gL94ejmisCv47Ud3FnjUsE6ZtxsVyvP7h3Fn8PYhXoDPfoJCR6XaSCKoqeypBf7xp2Xs2p41Xhm",
  "key46": "3uYdfQZpk4w4zu874wGsCYa1BDsYHrW95s1Fk4VcEtUGoagr3HKudwS5iGzz7YFV2SRvs2GAKMomb9sez3q3bkVF",
  "key47": "5Rw5FqtoXtnZVttGFWE1SWaEG5L1JtgFfuAveXsDG9iKRWc3xuYakZMQCAkNxzDpzh5pAa3c6vS5mxpAz6ms9eyU"
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
