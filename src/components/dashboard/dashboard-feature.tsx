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
    "yQzaHFsgb39AtH5NtqpZk6pjh1Xdahzv97s6NZjXUqnG7rLGvU6W5YrUrCL1KLQghsdNkGo51B4kUAXH3cPjpH2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38e9uKycncH1Gaqh7WpdJAwjiJPVRS9Bo33dcaqgCxqne7AkFm2y5HhH4rq5gff8nvtZedRToBfXXQ7isNYhpiPv",
  "key1": "2Vb8b4oiZwbFZCsb2e8N1enjsFSRQKYqPTcErqrabR8rSCwsvyMSh4DXiivMuBDHzfQsVvgb5EH6k5kEr5ay1ySr",
  "key2": "eSAfWvmEj4JPWRG9aYFfN6upSV5wHiKDKfYAWDXWQoSknfLnbJdPeB55dt95RCpdwGWBzaHHepUPFvRLcfHzjDh",
  "key3": "5PYKC1Qj8gi26seWJwoJyS2BPNnqJkZ3Jyqzs3zgG3VVr1CNAb5oDfzv2EqizmW1KiN68JzN1XfSWM6tTwt1NUtX",
  "key4": "2D3igDkJE2JSK5tsVZeovm2vNkjeikJzFBrWVnrfv5RXkqYWPY68s8o5Pz15BvTS5LiFfuu1TBT3edTe8QTjxD2x",
  "key5": "4GMS5arLqLPPfJxR7gvfRKosyFo5RcEMYPcQZur3xyYcsqLQ1em9uLe3dn4P12ynHwNsWvShA1BWnDmftphPk1gQ",
  "key6": "5nWPUSoCX8h5g8JcKWp8eeTzcYv9zcYr8Ba3fYEt4oB6bPyA5DpsVFcB7XYCF4ZPWbwMuo79TqofGS5WTXA8s4gv",
  "key7": "3LznSGQXfArWN7TRF6UW1uW7BxfFv9s5X7cYiPMqqatDv7KBzVhwYq3sBBLv7tEN1bMbxqXFWAChh21Fe81BxJGW",
  "key8": "3n3eXHzV566obWyzXKjnXs2gqLiKiVWrUVUyB1gdj3cgf9DdzJ95Eu2mmqhESD1aNP4XJn2j1HoYv6QPWiP4rmgi",
  "key9": "4fSAX6fLGuZtzbV14sFFWaXBwrGcwT3bn9XnnzmvisUjevK3M9Qe2uGH2Yuam2cvKhCuXwW8tK1BCDmgqnT2a4eB",
  "key10": "2U4XW9tHrPePnKzPsgAtcoX6h8SEFETUmvtfpv5RNmDCwsXhbpT7qQfw1TJ8d18oeibZGaokTtDyW4Z6xYpoaQ5X",
  "key11": "2HrFw72EKkTR4z8sRDJcSmQbJzzGh8Mt4PJcfbEDs2sxc3kZtjtmYJYawcbrYu4kaexAGCdP5FnQS8vbZGb5pTmN",
  "key12": "4H3iVcd3SEhYRWMJXag4mJHpnpHukNxFsUtpqS9zF4CqbbUgzDoaUzqpv1SdWQDZhvrrgwadHN7wYy627FJNBQY6",
  "key13": "3qu7kL68cHXCqNztGFeRy9oRZG9YDMGUZcTxSavfasiSFWZiTjYEwtH6LjxDfoer9JMgz7TaCKYTTF5kt8BmUxzp",
  "key14": "4K9YnoFtDupLNY2jvJpxXPbMYksqDPU5HHYMTsKcpVoPUbfGXc8qhZSiFzUd3hyLn75VGLou7vvcH9McWFbANpHA",
  "key15": "62ThAtNw3qzwi7mU6EME4ketWtDLeNNfCTi6zyec5FZQfD3e6RBy8sSpazjZsPvCRBG7qRuYyRmLnfV6JbtuYMLi",
  "key16": "5ZLQWZ4XwfEYz6fvq5QpDvYpxPAguNDnv6DEUR7dQkaPdLzUqF9mucgXVVGnQc9rzaBLRHvuFjQoqoTQJaXuLRnC",
  "key17": "4ZPDfUz1c44v642cHhVNfm8Vm4npVPG6eW8wdWsTP4sCTUBahsz8cv6MiAMTgGjpd61oFvfmXGVVtNayg6tpJ8ME",
  "key18": "2BCcYAEpCYivntfKG4VmS2Hzw3SoBAKXnsqdXhrWXJWFHYz7xRebv2zPFGzppue1cJ1HEhBKnd8dPc3eok9uR5Z",
  "key19": "tJ7zbZYXarvf47yDPhkoZirJHJTVBQFq2284Eskqb4JEueUZKT5bJPGbCiS5whS6WveRPKjM7t8rw2SihVsXVzJ",
  "key20": "5W1JTuEXwT6ivLs7YRMgcGb5ac9njQ2yE11mviZYSpGsXWbyy48ipbyhzw2G4X5XEg6gStXRKmpUEaKjvJf8VxtX",
  "key21": "2Cw4PA4EvYn7ADPmUjxLYxeiADNCtzgvsQb227sxPRZiHYbjyCMSkPFxkk3jqniH326ccuPeG2WSt547hkBLFEPM",
  "key22": "2zUGLoFV8NomC8e1utKJopJvxeYKiGrhmwUmwUx5v5uftZcotmfEheTSqWYeVVRvMku3K9Y8CYdKKUkkKPLgjpnf",
  "key23": "zhLZjGsfdyA54KGHrNtJAxgv2PaH4Cqv67Ksy62HtV16DZqHqCxdFvj3Se5pAijrzsFaKZgknud2t1ubW186TLQ",
  "key24": "35BAJXDkC1T1tW51HWR5Cm2vLmPjNExuYM7UhWeJaF2m1SZTN669k7n7yKAw2fiEEBSe1ca8ZRimrfW7xejB8H26",
  "key25": "3wZUWM2JNbxQzZZvuMJtqxxdKKLRk99jau2LoqFaLEC1hnRFBSxZgBXfxMefycP7uBifpSUR6g1K9UPc7SBK8r4x",
  "key26": "55wZ2Uad35D11qXW1UDD7pC3x1zVzqkoTzz5V34A1hb9FNX1xBqDYGPEcrMqKAUHXa9nPi1Ge2xRpetHgoPP4xq5",
  "key27": "3cUPzVDjDaWsVRhA5f3Ug5KZF3UkDDiRcZku35n1dmxae32ThRYXYh8T8ShbBKz5Vjw8cSYuCPbaPQrWK1ErNCuX",
  "key28": "4KzTFahcgowf76T7464vYMCgDJ2wcJqRwfH2PinPHcng1dHT9LEQkKbkxgjpUNRUBwDUMqRngbY9Ege8wH8bSvHr",
  "key29": "2MJi3dxYd4L4bd6wyVzHySzmYNqpeygy1iMHFFHB6irFsjP8Fj3jY4sPpeBM1MTy89YMBphWMMqdrDZBFvbEsCgk",
  "key30": "6wGE2o2LYXBWDjz6HTWjeEK4se2i7Zy9LQnsM5WuMBAwtxfHTYUxwirrcSWUvPnfRz1neX93jYpVkzv8qvCovwd",
  "key31": "4zRvJ52vaiDrKwzjBAoTvwwgEpKM2ERtYAJxM7ZNAkPEz1NHLgDbETegmrnggcyZjB4bCwpms7BcZFPwqZ3WK8Xs",
  "key32": "x3SnwCV7MT9bnv3f16uuUAjmAoCYC1tEXXVVMxDUZz2d3774vkhyXfqvvUcbaKtbYx114QaqmKpJfeYXuFyDGuS",
  "key33": "3FkKjbPF81k94S2J5xPumLeSsfgRicWXpmrdw9w92xnr6U1PoDShkLU9TXs4vahy77VwWoJg8kwWstPjFCiS9C8g",
  "key34": "3hdYqEDtJ2ambKwPvzqDKcFsHf19fTaAhXjzgkde4ktc2Jp4wnixuqvcSUY55yDf3773tp35ejLkE1hZ6KpxGLeP",
  "key35": "6pn5Qwp9mur8PzEfYSrATfbS5ziRC4bfSkzfiBGyx9obK5yLf9Mged3Jutj5hDnx1TgD8rX8b6TdmWabNg5HQHu",
  "key36": "4efzPbD5WgXBx5syLm2SQFAogAsJiS4QK1ThZ3BHJAdghxiuBDXRr9qtRtgN7KzPC5os4J4rZfi9rEKXGyjPdEnT",
  "key37": "xxCUkBjvLaMM1Q3rHJa6DD1SJizqVuq7Za5cCRQ4tGyxgkj8fpDZ67zsXRULTrHop3aep8S9GMwxBvDUeaJVj1H",
  "key38": "2gxyRCkKCcoXYHNSavnvr9Q7siZSMkmqKw4tRgiLhxPuoG8BUSuRmHuK5aVCQz9BpEgaNQbkGRceaHFuAQNVYtCN",
  "key39": "2WcQknNWii9G6i2gdkMYfPBw3nd9KPxDf85Z6FewKwTC4CS2dsV6wFniMxix1tBgzzmvv7wvXP9Hec8DdfAS7Bd8",
  "key40": "LyMhntWtE9XHN9cwqkAXPGSB66V6Yz5adyZbTLvVsgF68gJUr1io5rdgX9FQZqoP1q6U8fSQKHdkvVxC4QAQZzT",
  "key41": "61JRdGTn9WDCpJVgGsNpKngq6QXJmj2rLwJwuQ4gEuaMZU6uCNUjXXJAS4EvtVkj6RyuPBjkE5drA4ytp3u4PpHS",
  "key42": "2GQBZsyM5CjaGnitgE4eUTfWja2Y5JPEoSLEnzz6p97rS286Vf7S76FrTLtWGw3VQ1s63rynB5q4ERZv629xp5su",
  "key43": "3iDLKv8m8cxHTwnczUyMnPfVs1HsEwaEEXS7HDPuPR3ergFxYn4fKguTBbzjQVh2zK8jZuTVfe4GhajFj9vU1B6f",
  "key44": "2F95UuB9yWX5tGnPQS4dcFkYkWPN7xKzRD9HBG2wvz7eeXCmaW78aqdGFjbggRhP1yH4TXsESMwLsSXwCAWDc9mL",
  "key45": "3bt1XW9aiG8uLvXZSaVX3uNjdAakx7RZ3f7sCRcXES6Zjtgn4DdLWBjnvTGUCYuFMEuxcFgFK19ousABq52df5SS",
  "key46": "2FD9W3xvcTBsvWU9uANwVrDe5jXxcuUCevCbr7ux6LgWKxZc9LJvZ58qnn4b5Vuv2wUuECBdLA35Erk2AzyX8Qd8"
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
