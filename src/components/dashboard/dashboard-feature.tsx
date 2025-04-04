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
    "4GU4JWJFvFM72CzG4vgv8hBNH7EXxieHD2YecGuE7oW89cfHGkMhvVq3PRC5BdCg3ydsrZ3yYTQ6S6kkz11WYfLi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FPzNkd3sPqQBbFo8Zuj5oSMpUCPQitUoRP5N7zsisriFHrXrmMvhBeL8Q2JJQTEuq2wxSY7fRzBSSWRjFf6YAip",
  "key1": "52gHrzNxNvJpXmCLLt9oxps3k5jy8y7fdTf7Q7UyWssiFUyEWRThFF9v3nGoJYSy1k5NRHHBQT6FweTHmSnziiiK",
  "key2": "Qyfyx8tNG2wZeVSZKo2LbCTB5Ycu7VPEbFRw2zp9BBxKn3owZNHeNLZ5UscBLyYCMURS52hSZH6KvR8NmCTWhbP",
  "key3": "2QYm4jVP76p77E7JcgiNC8j1FLa43GD1YcbBNHabJwmrntxWad9jZJNcAtwLkqsAhjBaE3RspJURi83TYL7WHQnE",
  "key4": "5aAEa5GL9vxisDRNTXjQH9NZHoywAzh2nZtZETwcsYZM8vVx34nGzvAxGkT9yG8toUS8zYBsChNGGaEvSVc8jwpw",
  "key5": "2itkkqN2tS32cYZPdTCmpfVmFftvR9MqZrcz5CHWB4SCRkfpyEucYNSTFjHq8Fz9f2QvQcBGV8vZMc23jGi1vkn",
  "key6": "u4YBDSVv2jB5EhzdPhdNBaDYZomtV4i4NC4EtdZzj6gBogvbYsDVNvf5D2DxFisQLevtDtPSJfBe8pTN4ffHEkH",
  "key7": "2yCMuC9cGcasKTnP1jNwvGagjDUxWNjGZiVEVDrS68gKkPQ9fLGea5csj96BWgCR9qWnC8xKb6hEtre79n4Zyz8d",
  "key8": "hxq7io6vmEwCPBCjobECwN43ekfDD669YuAM19bpP4E5Hs36DgvvmSZpQPG1nw6SoStQERSUjS7gavkswmktyaA",
  "key9": "4bdL2uPrWFHizENeYkjQw6RrZHntDwCmxmNgpEgtBtoFaLzwhNFCkTB7PoRzS9hysAvEADE9GKhhhHyixva2pN6t",
  "key10": "3GRpRpASezQtGUkgytbRggB2xXwkJfMhxnEf4Gc8RizroZT9nTy9ffW57JRaVv2idNhTxnS3q7Xn27UTP7VGVR35",
  "key11": "67GFfdnDCLJCWGmX3mKtmToBnyo2hGuGwZc92SKpTkEunVKDSaidxMTsUgoutvWjzTdZzE69F2KeiegnZqhUD12i",
  "key12": "2nZB2aCvpiVZsvMabM9AopitRUsHD2QiY8ZSfoZUB1Yf2zzmqL6ZpjjUmEzxifQJfVDRexUybFeXKvybXCzVDtRK",
  "key13": "5iuKC3CpJvBcnNazPLi6UUBYugtZ1hS7X8DAh46FwSJhnNNmSugLPEEPamcWR2otMzMMrKW4fg1KDTuC71aYaWb3",
  "key14": "xSR3xhD6xXnJ2f8YebU2kQNy2shufX5SURW8fAXqcz6PskoSaL1RDBKuptWfEx7nsGVE7mNtTiQecw8GDgCHHms",
  "key15": "UMUXakJ4qZa8BudzYm4um391SSzGUezLZiwW355eVihPtzZjXsoQESRmrxMz62ZUZDt445y9uLHfLGxcdnTeZva",
  "key16": "4kVpBgVuWrv4mtmVLEReXAjqawcTNsz7s5nKF8pQEvPncrGdsVkDdpEjkGP6bTDVZn4DyxoJh7Lhvo9HzyBCnFr6",
  "key17": "216juj37VBS3L3RisxRqv7qN4xBZLhg7FGps9H7M9FSLEXpZuCdoqpaLZeHdDvvsd26DssLwSbc39tAGwhPgtYwb",
  "key18": "5PJJNRndtZxaeak1DYbxmWirqZw8httTrQZyeFvrLBT2bphGA9K2LhhvfWDjnyAxyLdg1jo7omk9UV7SdMBobXL6",
  "key19": "4rFw5e8HLFLDZ2r4jAkmvsifAPxr8YWWj5un6XXCfGSKoADhb3mHfZwmdyTBUMDtUXXZnVRX1oxgZWwEpVKN1Nhn",
  "key20": "2wzdbFA7Hgs8aXSBoWqBcNjE8B24qXphBhFJeBozkcGPpb6thi1RdoFWARKfsBTNprDcQoyFrWzAqSF7wZCzphW6",
  "key21": "542BCoed48ditk7rAUCqAXKrMaDcjouSGTD9FK8nJSq3JbYc4tRnsTnBds9uaXJUxQPYsazkaN3eyRbvgPbpGtTD",
  "key22": "5hQzEiYYVnt9kaAqzqp2e76s13f8yiY7yyrqZhbTWXCR2yz8JetdT3vmYGv7MPEMJ3URquf5jpGcKcVx1rHQkceD",
  "key23": "3WrvDfd1Jyf5JS6eiHQu5rn6duENWXs9uSWwNPn6eaFJzoMiB8CVnt74wyRRfKcjTHNutpUR9rca5KCZuu6zfkcN",
  "key24": "CPSLJ1pGU598rfUd5S2LNK9SX9zwYAu1DknBMScwhFdZLDZvdMmLNjmPqqRie9eAKm2HvB8zXxouhfRYEFzBBJM",
  "key25": "3QLwcSbARWoPuPXJjtQNScS4HaAgZWGFjz3auQ6cuXYuuZJeb7WTs3NnpmEcePTqtrPeMUZhy31MCF7TdStmXHpp",
  "key26": "vkAhC77GEwNpfNF5u6He5tHFCw9VrCbJ8hs5chCPiQ3Vu7bWdTruUnnSTT4CEfW5LX3pXMY6p2mZqworVsJNWm3",
  "key27": "324jKZbtNDbY8bYijnMLvtj9ZMKnF8e9S9ezKneFNJcoiPwmNSM5XG1oQaFEKmgrETAxC33fSjXW3541HZugkRNv",
  "key28": "2GsYAQUfcFb2LNcpsbXdLVzGxrsJcTkVyQiRmvx6Frf6cmpYwe2Dnkb86cVr4gWeCwWFEbpuYg6XMPqJncRjiT5Z",
  "key29": "2bachfYAd3gFDe4pYawsiC7cBzYgJBEeJ4RxR2FEDgxL2Yd1tTe8GKxY6nMJuKF1s57HfA6KxB135mdEPySHCjYP",
  "key30": "3beGXxENE2SmtbMtdCx8BkQmKwCwbCg28MieiVRVP4n6KNxCxRqn78wdvEPWnyH42U9zuYXpnN8dLqEwxGWgwDQq",
  "key31": "yCET1ZsAQhcE5dSMy8EJA9Zw7EH1EBNBWkC77keKAWW8X6Gd5jp34HodpWCxwiFZtSyZdaoUkvxsGeh3xCmfA8B",
  "key32": "2FGdLy6kphJRfyZVeXt1azfafRqc718EaLN49DUiDnpPpFufm7rBmAeQsDaZgqyHspX8nbPkY8ojNKBLiV8WGVcB",
  "key33": "4LHANre2N9izMcoyVbPZK7XJqGuhDg45JScGMUCYxh3saHDLVd3Cte4aVvF9MMQ9WwnCpsNvDc2xkWkH26TMmedM",
  "key34": "2sPAZKCRhHThWPsWxEpqK8X5UQpSq8NY3gWcixaiKiUv3pQQqzujxXya31EkWoAbZLEY5PotiLzo9zFMSxTb44Wq",
  "key35": "3hz6fsE7rHx3mGMERaA6XchLjxw5ueC8x81uD7NoW7ia7rrvwB34zVHR5RFMAskj83jjsn6E61a7McxSKhuZPT6d",
  "key36": "4GpP2wS5vTsSyNdVaurtJ4gtft9YrUky2mAv6ooBQx51ZubEPwdPNaE6RRmBvLURdKLVRPew7zZPB7AWjW35tHjU",
  "key37": "5xvf7N3JBvXJjNmY2freXGaSDStdwRWQfgMkPSdEoPBRF2gsnkmBpLGWw2fdo1as2wtywG21Ehip7pPUF1bd82T3",
  "key38": "5KKM9qtM33KJcwworqL5H2LfBtuMJtRsZar3fQTRZv2U8SJ6xidFbhbCPys3PHcVwyABm9dPMP6QzVroQm3fRJmr",
  "key39": "3bpRK3GA1UHRgFUZU2aoWCyTZ12T3XHQnn4AZJ7CJVGTccm98AALGQQ12QcuEW6MpWZyw1PRePACfErSK6UNwAKw",
  "key40": "4d1b8i8XeSU9BKTffuXbXugWSZud2GEaLmbqCZzAbcDLdgVXVWjBvRJs92doEjCLKZeqgmLYiKntSK6KDBQQxmgb",
  "key41": "5U2yRUVLSSbPoRM5X3zKP6bMYe1ccvTYszEaUty1vtNzH2qbhPBQvpzCBSG5tXsgF9iW4jy3BcoMdpFmXmyJxywj",
  "key42": "JHL3JaUrSZwWA14jyMUfcnU9mAiRpcwcHogb9RZQLU57dnyAk5XwEXHwFSXDM2EPSy8U1qqNrdB1GFC1JqzPSjm",
  "key43": "3hCa6uT6rAYDP2rygi5nTdV6oyGDhrfivZU7GLJQF7cSmxAGwkuBR7dmWdEnSn2ny9DmtjFtv5CZoCpzfJ2UBRBo",
  "key44": "4kB8xNRsWBLSJ5NVdP6AAXzAf6QzEy5kCTqGDDsJLFaQs9tn1kztudnSxvhrhBTM2eypYVJE3RM6Q2NiRLtdbCgJ",
  "key45": "38dedE4DSpE8URuPZ3howMaTcZG9cBaZmqp51iz4oqyB11yhWoGNwg4dBhq2RfJcGXC7QpgctPq2TfW3AHAqm6NK",
  "key46": "5U9MNmufSko8ZfmDktd1FBp6PzzTXJu56G24zJGzTw3rqdkW2UnXRkK1Ku6FNnE9Jfq9oeF2EzjLErFgZRByCUB8",
  "key47": "nxzstDZ96f9FqdsphYGPpejdWbNnmmqpvdu27a4xVZbw3q7b2kS1oWo8HsaizJrVzDzNzCpoRa1qK9w8wTL3R43",
  "key48": "ds3j18RiuMTNiT6jnnKhC3WS3a5XzPW2X3HoXAV6V1xL3GTyy1YKakgZb4nKPRjrFvmVKnRTWKoWKuxeN6cZA5f"
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
