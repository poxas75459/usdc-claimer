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
    "kYY6pyiwuiWS4iiNvqtwTDdGN3RdeteHan1r7v3v8hNWtvieuSoPzjXSs7beYFGuu8msbYj1hcqxu7CdboaZ1wn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44sadBRSBXENGozyGiKhzd2sUj4o1K1ehmYowf24N5Ze3FFKTUENpDoKTn8yynv3LEvpgChdt66RfYW5yY3JufcN",
  "key1": "4REh3LwGLU93xd3BF6yLun6rwf4ZdXmwsunK1WZdCrLotV9B9S9MAn2o5eY5fiyUjGcrx37YNGrMx12SrrZpsXB9",
  "key2": "3ahXiQoU3Xymz7YwNnoYxHaxHEnAzvfrT8vjQuM22LbQtuJpV2ePzksyUS9iEAvnLzNvipotMbNYpEj7xrzRfnWz",
  "key3": "3GujiB4KwyNXbMkiAqipeWeaFXrGVVxFXZMafzZLFEm9dCBoWbGiKNmSELjPj4XyEZ5mgmoHbo8mbZUDx3jTd5Nr",
  "key4": "61gbWbxzNw1NsfS7XaUR2jVJXjQd8q8LQ6sSx5gQF9yKEPY7krLYexroDQK38Pj74xENYNqwfW8E89MnhHeLu6PM",
  "key5": "5e42ekA3wcinM4mE4ussysbJVdPfYkquUPtHhzA7YeXsKBZ11LGuDJG6HVU5kCfHVP4TA1mwKT1KhqNbGZMBHHnj",
  "key6": "4Ybi7opgV7Mhipv6EEtEaKUc7s3pqPUXUJ8aiygv2y1keoEcQGpqzCpKQiiGyADbz3xV5M76fv9biD15SfTuMSdL",
  "key7": "BfpPdng4W8g4kJXpMMX4u1B6uc44MH29Q9tU8mZkSczCiwBCV95phtpSyRwz1HvwkaYg2QerTvpNTanxumRmKFc",
  "key8": "5CKBH3XsBYJwXBboEKhgEtmq7KEJmMKpBz3bREJLRj8rKaJtcm3M8Z7NxivPk6VD8Ajy9HF5H42DXQd7pRxYmCpz",
  "key9": "2wVWBTvM4Y1t16imE2S5jhGRxT9MsgdWeyujpNcXU1aQ2Pb1ERXFx7D6WgbvS2ZSXPXzhu7b1WncHXRyZsmtkxEZ",
  "key10": "uu3rCxmmxe6iXXv82uwTgagrf95mN2BCLXwQ1Djt5sMB8q8ggAjzWYQn4N2AdPvCKTVvM2jww6emvP9FyKU9Yed",
  "key11": "2R26JX14i2gKAsR7TkHksp6rf93637m31MUPwX3ZEh2YTNJE3sxst8sjppMEyeg46qfHjBKMivE7hh3ipmnTd3QL",
  "key12": "4H8zJsaxK4xqMDQdPayHDwgzgG4kYMv8HGv6i1cXmfCZYPe33z296xPyNC1rgfMee8oEoUw1nj6VKNchktj2Au2J",
  "key13": "5jHqwJWDdE87VsqQKiDLkjBzSqiUcFG9tnxLDHPnQpvcieZDjXVMYAXmospTgAPUH5u3d8RiLEa4AjaRMzcpYG68",
  "key14": "49aSfvS36FWNqLLWDsEVHaknrkXqYTiNkB7VZYPLSnzaZFJJPm9hiKqUZpaSysEVzi3hC9QxJRouNDTPWCixE4zk",
  "key15": "3rTm6if33fDjcqZL3bKm1QYb7DeV1kjYR4ajsi7SktHT6WXQ1Dbw7m3ccDAsaVSZJjEuRSyeUGA73imZnLS79ZP9",
  "key16": "zvfR6yKN2HhV5La4uANY5kd1BUbQAcb5T9zB4zK4z6R3qoHiWYfFRFuCfbsJ4Arp8fV1xWqHaK6ZaRvpUyVxD2X",
  "key17": "DMzPXmiLzDsQRxJ6q8JBR3wxFVi16wP3PYS2He4DcNfv2xLVSWbbj67V95dvruoDCvrT9kCV2fge9sCfZendPqp",
  "key18": "2cuVmnMDmXo9kw5s4zVMrSCsWf3SmwTfrg7t6scCbYUZuLiAMw4AdLmDV8G3cv5o1EpX6tqyE2FXVfdhJcNVGzY1",
  "key19": "Qh7xH4fQytCU7dmcfwE7nKYbh79THU8toPjsd8VVv3qLq5Lda4zS8YJuGnaxGX6PfcX8pH1x3h7UkKAnkmSyuHr",
  "key20": "63bVW9PwCtRhCUA3WF2AHgNfuMoXeRQ1ZgYRzgCMfv3KGmrrhaZu3iA52GZqTwcCct5iFqnNkUnAFB6rm9trw4o3",
  "key21": "5okagrDuFectDSTZ8ttY3TDCHt8huL4T8sFcrWHLDhpsnShcLhU4TCCSSQVpGx21dwwrTPvqQBYQHbSf771gB3vz",
  "key22": "3ydVh3VRvHia7sHepazdo1StzzM9T3jogwaBAKQPywymqhHSzY9ov1LqYUiYcPcCacSEqzPDKCEKw9CVtPyFiPAB",
  "key23": "5gPZKUCamaVJ5VCwEjdUhpZ7jn5mJg9abmoUJjpw9ix7DJnofdvjky3GB8LRRy8xamzrcp6sVNDFcsJjrg6LKk3Y",
  "key24": "455PzBuLk6uWAeLUrhxTgwoCPxzxh6Rsu8PJFucxLegUnahKUdbLS55CupWe9fp22bodVQ491Db4aA5Lgsgu6RTz",
  "key25": "2mtF9ZsH1ehWFZKdCLEiyCxSXJ5kR6YKdwpE2TWJn4Ew67SSZXFZpErBh2A3VF6Aw8X39K9zo39NsZTQc9UgNyjY",
  "key26": "5xksmCPxJMrVdSHcGYkdT6jZpF9xT59CNQyL9Nso2YCEiNNxrnboYk5KgfNu8M3rVKvaHnikhsprpaZan9UPmFzG",
  "key27": "2LQcMKd3H3ZqkEugWHbonUvz9czNKB72P9DbpuhqViPReKNGzo6yof8dpdYwo5KwgdcpdnEjuqVmBVwFs459EMKw",
  "key28": "3fhPa5KqJ2kzpbcCM98JJgsBQmhTnKQFrFnY4M4EwKCXisxitjrud9x2fyWw1NGjRnsEv37pf74uBC3ASwVEZthE",
  "key29": "5KAUyPeiP7pd9kkfkLrLUyTVawi7dgFDYNu5y9ac7ZHdTmQrZKz3a84zt7NRoA5D4HfZgxfVrTv9pUEwBuGqHFS1",
  "key30": "3kivyLJ3qM9MTYn8tUabd8oiFsgwg4NiEoQmGm2AuLErUEFqmpbpqrB8cVkBSrsxmxQTvY1ngT6LHpvKVxrZHJuf",
  "key31": "3ohiQcejeTtw21s7fjUzLDuVxaVXRot8Jju6tpSngUwdUQib1xGxKwcDBZADUM22LYsoPShizRs5fmSzgNzXvF6C",
  "key32": "3MGVBvuRPnMEwPHrFMkrNGyUQ8hcthXMyQ9mJiFr9R68PDLE25hW26Ne6nSctZZMieXFgN3DSG3fAuSDaMYjjdnc",
  "key33": "3GYpeWMJmtJCMYdm6Yu7yrbF7FTfRz86zsvZBeh2Jv4PZQ1TeqTZnuR7LrMnheN5u4X66ULFWpmVmB3MGePn2omn",
  "key34": "2LeY6qtYH7qNvk5iSgNfXz1fnqueAxbNNTXsREp2LD2vdhoSyGc8KM5wBU1UedTSo3n92tPkBeC3ManCrQX3EnkY",
  "key35": "5bQvsaDMo3Rf1hdrtezPX8zXiiwxBNL1TdH4bc9w4wUjipubzKMUEhQCKWruymrzWNLsHSXzNBWRPq1jcfMtPRmf",
  "key36": "3HjcLrymFBqJmwHcxfcBMYQ21Nh6kuTEuB52sGLQMFEdwDfXszt8mFbkx6Vo5W8xGrxhWVZ3SNKwcYRDt3jbrtZp",
  "key37": "HrGEL9n7umBXeKG2RTN2skRTw1UbXBhBdy4Y8ss6eUYULZu13xu2Puq3Xvv4rEu4z1fG4YmU8vuMXShxchTLijs",
  "key38": "4Be2BDMBK8V2vSs89PxK5QEPaCfEtRucZjq7AETtBH75Saucs8SmKNGUiRdtx8jyGDLHGuGoXT11V9qUJwJ2smsL",
  "key39": "5D7Dwi4G5MxEc11PdFWAXJeyWKQs5qQVTj6ECGmVMQJNYzkJhGb26HbM1QM2MvkuW5x9ieRvu6SAtSgY6oH4odYH",
  "key40": "56GfzG1D6aqYUyDj12vmbkdFQLWQyCs3aZG7gKWaH2W9hzdYx9VvNDsDjzk9P3a3MSMZcXxPp4Vhs7tocwYCJpTs",
  "key41": "6752Ezc8Go4s4XseVmPDEoSfX6nRc5oC7E3LDm3nxDBgaJBgjPwREqHMYz7AcaAEtGWegwQMkHUfBzGdLn4eNT2c",
  "key42": "jNmX6NdUdttj4kCmSrrFoQLyH653DyDTiN6DV5h8Ykthh5vWbTiVWwCqPjKYjN8vomKiX3d6FF7QhwZuEaJWcv3",
  "key43": "5tqWX6ttMfUUzs6UtLMmmNjSgEiBfH5m6GUjy3tboCC4o6MHvA2hkX7Y4gB1HotvZRptHg6KcX7RkLtLcYPisvLf",
  "key44": "oQNyxa6F8NzdX3NLdzRypLb1ozJa8bAfR8XyuMHb6NtBmJDZERNz6Y3dDmEdtzcRSyQwKpRmQSNRYQo6FJGUdN1",
  "key45": "5CxhwDq8jFZ1YKHeMT9Yf5uPLvJSawAAwgGW4e1VxxMQwip33dc3VCJ28Znf8tD5xyAY3sVTXq4fDE5v78ADfKCU",
  "key46": "4bu5atsUU684mtwpEk6PVkZVwtNar2LRjtoaK82uy8oCj9FNV7SAn26yuppJtoZUdousjBrbR5BuxGG9GCtMRVUy"
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
