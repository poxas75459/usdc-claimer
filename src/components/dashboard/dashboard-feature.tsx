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
    "EnFBzrw6YjRqXNJJi5gAysjyswNiQdTZRYXbTLuaWGYmRiTqnvzQDPgQ2rA2AvKtpGi67oQLdjtP5m7zHyYEo7B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fH6BpNV7CWvkz258VScFWBM5gCc3ZxzBchpJ8acArq3jooyqZ4CC7Tq2PHyAZ7BozuAMBjKdBa9HuGjTJSQf3FM",
  "key1": "M28AN1Cx7sySTn6RVvgg5maLYnGbUtvteYZXhtkGhviKoSifYhV45Qvyr6CSGTrTwZra2Vk1b5EYMzuDDTDtqDJ",
  "key2": "5C2NEyepXw1ytqwuvngXjpaYrfVhKv6SR4RUu7KVwJLRGvJ91eXLTUKW4bHjaKRztTrjSWaPdbeKSFP7nhhB3vER",
  "key3": "5QddU4GPqYjBKMANNqb7MEUsgxSey9fZB5XfqCY8cCsh5YzTPaMTTqL1n3Nc23yELjeLMEizJYDQvPKFfVSExCfa",
  "key4": "2AjmnSpGcM8eeUa2zXT6pVKokxzAyAqXZkkJUMkFVP5gggBDqbY9BpfkYWKpdXz79xvyyE5ywB6gcBZPNy14KJMs",
  "key5": "5oY33rYkbGfB3WMDPv1CogY2TSrhdKPmrGkLGyi9mMfLxrvjNQFFPn5VevECsM9qVEKCMVeEJb3VKkhNDXw9cRQ3",
  "key6": "DcPuBUdUQFSxd7SP6uKkP3tbyzWxZjwfJFFxMs1xrbKw2rHZPvHxKxUzXMFzBbkEK3aK8Lq3y4RXiSgRacWDRhW",
  "key7": "TY1n9NKSo4fXXXDa8LK2eRLxMMQrbtwnUmRKdtaUZM4AX3deHNoDbntkU8RbfJEtD5jqjM7UUfKrfam4fnrYvBm",
  "key8": "4k9vktFwpKeh1X7X4ZcjADsQ7uGC17zSSPgZEPeupkBaXnh5eLngo6RGPNjoMYA4TWbtnnDWoXc8uU88fbq9hJ2y",
  "key9": "3yMV3qH4JZEydpBs85VXsdWkxo6yJXjLEbsXsAuVqiL6vbEnWnjjjDb9mPnvp3B8a82nZWLYJJ66H49F2zYcg8A9",
  "key10": "4EfEn6Nh8hEYaN8dpTTreJPUg3sipQgwZzGYFd8CSbee8fcvBPKsXXjuvbBGwBYu4BE87mcJkEDvuKCRpa8p3eJZ",
  "key11": "63NSmfSVGsaGP4qcEdr8JyiEaUVeGiap6vbcw2FecHav71cfCnDWvdbubxQJZLNopuABmSRr5uQLUKsFyEBci4f7",
  "key12": "2zqKbgErLqVs1USXJRMVZJALFEoux3WEqvDjZmM63wVarCghqWzvdneW6xhwbNVdJiWjiPTB6KeWAk5FsQmDDyAb",
  "key13": "wt7s5e6yXxYiE1jLnMRaTvtnpn9r4HP97o1YM6g9vCHiXBBTvre73SyjsGNPP6XBMorQ7Hz73qteuqwoiSEma1x",
  "key14": "5D5C1bTsZiTq8P5H2giAUBmR5pLyhuqgbpt57yWRbP75QhwzanmfxXpeMvrpQRuNXKSZeKgsBE7HHjtPftMKh6wk",
  "key15": "62DzfEApKCFgGtWw1tEuWCtfsEE5PoPGqtMXS8jc61Q9xT6KbH7vcvEP6XQ62B6fdikQm7TkAcJqC3VQeaWFFvyE",
  "key16": "4K7vEjkVtaeNbvkL1Esf4SvLCFoa3KYpZnYgykwJ6wAuxMBZPdReEwjZ2pWwAqBkXN2SCzuYF2Xv7UoHmjmigmAX",
  "key17": "3AvZYqGeQxSuZWXqgmjByTrbtHzNEfpFiUrm1RqS7f8R84sEFE4Yoc216Exj4eZ7piWERUfQ4QLyXr8uEjyfZJ4m",
  "key18": "5dwhU4yFQrCodZLoHuGvhUZ2dWpvKofofVxjUZKF4BKcqGavaUBtKTrrRgZ1peCnNgDgDxcCY8a1Gbs8R5YbKchh",
  "key19": "4Jbv84P5mJ2uxtgYYjGANfh8UtsPvxudEga3vy5UNZWDPM8DEUtq3t1iPAZHyXTUgfCk7voTBG2hJqU9PcAMD3T6",
  "key20": "JZwHZ4oxtDGHvEi4s9bTjdgbxujS1zv7QBg1eiQdQZyMqL8zUgXoY8tSFA2o7CHUq5JnGRCJPmdWi1wvcdX3ASU",
  "key21": "5cFah8zuUeHmudR1RdykDo2j4HjrNMkLJYrSNpxJhFfywp13BFXEhJFZLtHQCa9dDnDJDsMHLw8HTJrrRWPjitEb",
  "key22": "4aZw334VGoQJAGs7R5WqqGNgvxicJaEi5MFtuaxEC7ycKx3BdjUQjGG28HFCameKgnTKWkS9Lf5BDkbPnqdn6X3W",
  "key23": "MNrTiy8uk5CQKF2syiFFP13UYvbGL6bLQgdKXFwAdYVYCHzdq9wN7XmofvN878Nb4ea6uaTZzhYnkKaMHMtax8Y",
  "key24": "4i8P5Q3apix8w3c3fNSbtJ69NqoArjW4LwkDi22CSgzoMBnLqAW922WnXQ1wc6UM58DAiTFVu5Dg3vSPRPayXFz3",
  "key25": "24eENgmUt29BKGAGh8576Xy4SjirHm8rnkufyzE2nivFB5cGmNLewZE3EQrwQFuw9ntgKsGzRmquevjNbLb84q3p",
  "key26": "2JmwxzYvfUUARUafeonHP78GwNKMZTHtxQ7UKeqwxxAAK4wX3EXNhHpnYEMGVVfVWy7d7aCzLmwQ9vsxfYBSkvTX",
  "key27": "5yEpaHSn6yS89oEq3aNpPQNsXus4n6Z3PXtKquJ773fp8F9zHY2X8dgCt82Dsa1iH7v4TfqQst1PHtVjajZCxten",
  "key28": "3cy1ABM5WiSqDj9eFuiFUXu3Vi1oXZxvMDxH6UbYfSoZ8SGMV4UFvarjSDtQRoTziod6vyrc4mfAWKVvcynwfQKR",
  "key29": "4HZyZ82EF17GBZHEi3qCkHGRWZ9jbDnstq9uFNeiCGJ5c9fgHijwa32HTpTJy1FvLkifrkCW8rmgKvfrm5HqYQb7",
  "key30": "2uhXDRGWBxiL9LUARVPfvBW2W4i3AnGRxg1zGZoC3DY4Wr2R8fVYg8BGEqqUm53vfwKk9Q4f2AhNDiWxb8C1hJBb",
  "key31": "Vi35K9YhK11mxmx3WuX9cw8tDr9qXkeFiFpuauDBDQqmK76taRhVB3JaBYvXMpiVRxHYsngMJFNTxHVgJfwh9FC",
  "key32": "4srvJSeCjUywketGz55bLiVRLvLyteNaCSHR1gqgucQJm9cc7mjeB3RrrcqTtFy8Nj777MzHMRkhsFUQdxrE8CQr",
  "key33": "3guZBy2J8vNjGbgD64rLVLtPCn34Y7nJAqGfkvfTM4qzrf9EMJ8WyYS2SeE74g2V57A21AqLnBetpFAyWmvwxqbk",
  "key34": "pAzDTnHpuoe28XFTtb7YsBFzfraH9QMJBL3zeBGJdNetKWp28dDsy5APEnfSeCMun9tnUhMspBJWZJ4b8vohP48",
  "key35": "5YvErkAHfmKZNL1wBxGYmBbFJJGg7icVrADZ3kXpJsko6LCrqqejRpY4PPkquM6tpLQxr7EkXzbm2cx6pQcFhrQ2",
  "key36": "Y8v7MciJHbr5pYBLAKq2DQD1mVU5RVms6fNjfWXV8dmrmE3UosSdCkTjB8vgGwPNswFVMh7cgRz5BZxcj4BwEXy",
  "key37": "22xYF4Rymq1GUrVcdWZXtWVADz1phuaLCVy2zaD1LHRxqgW1Mgnd1CZpqws2k3VVnpET2t8Lg3NR4j2vvb1QWacB",
  "key38": "4vNwEdSucFFMmfkijbgjWKveMGJpEMBG1WHq5QaTVamsroTAU2DndQiWyA4BdE3NGj5spkqs1erbX9iPZbmskceb",
  "key39": "2nPd96BtG5Upj3EmBREtbNcdnkXZagkPkmF1Bd9m9G8mRVWSD4K1jL1DqHp3pmSJTGKY7gjABEMxjbSPqVv2Yqn7",
  "key40": "3a3BT2uYAPWJEogk8RJYbKaq5u9wXqaGM1wi5roKpii1LFP1wRrS58KZ6HQs6ygVRDef8bquzTcz1fkk3iZRtmqS",
  "key41": "2RxUwuzyxTib3uca7LGaD9nhpMtHBTZcnUXn27ejN7X5ucv5tEg9ZyZk5GuTbSMf7rwcYX6qiHDy4AnFKAAxSysr",
  "key42": "2cCmt1sX4VjRY5kqQbTyRazgnaC7bHrSKPhjtGGXPm5FB9qSnFPaFHofJUm8owvS4fSEirVS2PWQPTPVZpCVJ8Wz",
  "key43": "4eehD1iHQ85MLuALxY1dBAgoqcpvrCJBG61M7XDfbanRQ1nr6gPVMRY4yMizHvPJkiizZVCS1nbgGpvqBrmopZdX",
  "key44": "4VTXfydoa4a1wxVEffjopQ8e1SJTXT9GuUoXZk2GVdbxL5rhyJuKo4HTNvGZbmk3u3VTtLmCDbbnppAd3doqxCpM",
  "key45": "4Dv2W6bTiLYGdZ6GCA8yXs7DriqeRPenWxqJxMfBxyxNjgBYHhw2Ax7EYjdtaP1NENzkn5wDViFCKyaSm4Q5FzMc",
  "key46": "DFakPd9DE4ahUrRzE2ssRYPsA3jaNqv8f44qTKAR3EkJbBqSK5rfkChS5F3X5DAJmfvfKJyGcGhrCUByZSWodbC",
  "key47": "497UgnW8EvP99dSh3vEbVmWphgDdRVmf84yw2u22jQgXbxx6ftLXtQjNqkZca7oDzkEHc8JPGHvz91sjpjGgd4B1",
  "key48": "3LL3DkwusqYt5SW9mCzVpUTo5XGbCHzQQADbqXY6Wu6kEL8Z1Y7KRRbmirXEM7LQUmHcZFT5jxxn6vJk5RsvXWxe",
  "key49": "3TFqFUxGUC4DzfaTvUJ1GHG8ZvzM9GQcEv3t8rKchRP32PLfMe2mkHqAQ244viRu3DBx3uccPL6FRbrA4L65wZkv"
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
