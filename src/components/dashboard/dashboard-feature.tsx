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
    "5sD1Yc1mXPDrA3CgSKew7NXnrDMwy2Pc3mkfWGJhKAGuD7DksU2fSFS3FjGNWRfkYgYUrebvKmoDEFEbPwRaebLG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26ysbK82aH7we1bjnHTx1muQzKHxAVrHAFDMw5Wuv3NN6hTZwuXQhAcAstxnEECYyweNKajQS1ubjBX1bTWbtQjG",
  "key1": "21LT8tagg7Meq4kH9PYk8muZkqMsByHfPHBfmH3YiRrBoEnLM2u6GMnD46JgzdV3h8BMwun3VCe5b2ZHCiGjv82p",
  "key2": "4pJrGMcADcZc1ukQCpCcrnoSzvJYGz4scddgkWisTU8zGK7Z4ubGcoA5iNk65iCVd2tAKe68WqQm5qgmqud5uX7H",
  "key3": "Lip35Yq8Pb8RjSm4bjCkRg94bs7gyS4fpAXe7q8M93CqUrGkXcogMxyN4GCzm8RcJ8rMp4LWYg4bCDtuLHmjWif",
  "key4": "2bo92bmNNrKzPzNrgZo44SiJgffmMT5bwakStGQKmDCE9uDpTztWfY6Sw5TXk5hFxtjvf7Qa6aC3TDT53NfNWNAD",
  "key5": "3uRknT9zChjB6tEtfXBqW4pQ1ebAoMFWMZ2GT86HZk86pLY7586FqzgQAj5BdnqGLeCHW3PHAfnrcqzoyJAvpsnf",
  "key6": "4NuVn1yYzUaPdQZrCUnyJCuxqk8MLFB9sKP4gdgUY3zHLbVjWyE2tqnCHb54fZDaUSSfuxE8cQDt6zFT8TNjmo1a",
  "key7": "63adAP8N4NJo43dVPXoRAXoPUEQCoSqSoiFvkLk4woPKrfyv1qFkfkic2XKe9TgnkH5kCiYKiuukdaabySWxkGRJ",
  "key8": "vGsWRJ2vtLjdBhnHNmCopTrE7aoxmCgbjtTPASyfEZLkAZZfMQeH2VKnxqggZnDRFjzvDacKhjpuzqdn5hEGA38",
  "key9": "5sQUqtYyyx3HSzYpiqmit7ryTi5R12Kj5vrFCtNn5oDUcL2DmX1iBhZs5seSwPedb8YA9sj6utuGp1zuHz5nC7eL",
  "key10": "Ni6QhP4ktHyp83Ebu8UGAbbomwfMLEiEGbfy2DEmgp2aaWXDLPNJXWq1E2ZRTUNduxXDjBhj95gGFZUWgLfH6Vr",
  "key11": "2zKbmrToaJrJEwjaEfNWZEmtQ2erJeMhUspUDs11xauLrTrhg4eo86z8jkpnweTS7So9wdexptdQZDfYAETrEJVz",
  "key12": "5GHiHtSvFLtPvzA38ZwRKAqiACCC6ZLLkngX5Hp6SJiHqwTJVRhZVruLXrwDpJvg3BLU3Z7wwHLBtVb3RBTTs8qq",
  "key13": "cbx2ijZQruZCHJnG7gGFwLHWHdNwojammbDRkWvqRELM1dvudbT34dcjoN5RuWB6KGzpj8tsrDBxf8GEw6qTzvg",
  "key14": "b1bgnRUkgmjUd2k26dSiEUYcXjLuikWNwHDCi6paGxVc4erUiR2C37fJdmytvTWQ4ugjvuv5wFzq1663FH4Pehk",
  "key15": "3tejmbfcbLbkrUxNJxAzG5cAQTjJrHQRMbepBDEn9zJ1Mvku1JskrwTJMvjcq9e47MxQG1duoYXwXZPcWPPpeZoB",
  "key16": "sP8No8xF2Eeitjk69HEqiVC9u7dPtoG42TEUp3LtVGG4ha9znm4WgH8qteDhQoCG2oLjjpuHdZ6cuATwHMzP8j9",
  "key17": "5KpFrqXcCbgESHsewrqJwEe4YBZmcjXEF5t51zxrG62YKioAicmHLk3kUHbcyo2f13uuawH8vz9y2o5SVSxXv2uA",
  "key18": "2c6E4W296hDNaMyyXqihndVFEV8zVXxdyVfPQBiiKzt3eXUjZ2dS8T4vMKgEKru2ouzEYJ8r4XBwF9oCLPn4s5w5",
  "key19": "wNnUHRDbt668K5oAjj6Y9e1dLAMmDCoYWNnUMKuJN2XPh3dbkLyfUUdd9BPMST8g7UsC15ibH6oh2GzaLC8L5CN",
  "key20": "2iiFKc87naPUFdTUYx3UNYvSey1Hm5gLCmEBLoR3HQj3qKhVB7CooF9os9BNRqKjX9FCndRE9nBpkziZkKVKGFvd",
  "key21": "5LPjFrYZv81EbfMFJUmbpwER8NsuUzm16tFMJXuA2Maz15SM1iCByDKX5o5TpHYNG4VJ4qtNoqtfwpEd9L9vBLLV",
  "key22": "4XzsJyULXyoFMacpSUTSWSMVfXtboPvSqrd8sDWkbAiUCQWz3xq3umFrBJmR63UG9eQfo6mzAMkPe43feQJVf4Ad",
  "key23": "peKSRZZucwJ9vVopJLErqzjf7Cc6Q3eeCCqbe3oL4wFMMJ9QBYSNS4XAUeQKg14Ehv8Youjrj5SMYiHSxay9X1T",
  "key24": "64P5oNXL8oTE7TYi2YuaSYM4ATVk5V6o2LsHgCJEnMGdwz5nK15j23obBXB94hPZYEgEkvrFb2yAeVwGFqpZL4RE",
  "key25": "5SD9bzWiuQ9hUosyD4Y846hjrhdtUGTe3f8km9Fwgo2cZ1WRemN3dPvFML622figx1pmdYVWTYs4Jh9nVnVhV628",
  "key26": "4ufrYJAW35t1qdK1eTWF46cMY9d6GQ9xBanBzwvNLxiDnF6yixJpYjqvTGnSwaxMCd1H93DWs7X61mRomow5ePKd",
  "key27": "32uP7GGDUginwLPXjC1RGc6tZAXRc7eoMMY6XsXCxAxwSp1gdJnhx6sGKrEuiM8AYcrfgXuvC5JPpRjgKfKcFLy1",
  "key28": "4AweiVLsQEjmu7BArg9HAesiaBTYsqsZ6QW1wcDB2UeHzmenvY3T7fQB5si8Jo9j7DDGTYLVF2fJ9CRyTVNnkVWF",
  "key29": "jhY7mnX4pRc65hdfoT6CMHoP8WAnVvv2jFUKBRASSmXECXC1yEnRFcZh4YA3Uth9ipJcgkiLa9MY8hfGFa1owVm",
  "key30": "e7YT1yZHwh4rLZXuz8nRKE6iLQ461YQ8uCXLQqCsdcAeUFfwRHRG93CSVSFrySMdnjFqXEgVt3tePxT7PSjn993",
  "key31": "4n8W3QTDUHiLtDdZwCxzCCTXFUkHwbBTUGsEff4G5cYk1vc1Ei9kM79bzR5BU57N6VdYbtKgCPEQ8tDQhLZiTN3R",
  "key32": "7xE8ujtzfzHwknGtEFtNQx95XrsRdV6V1pxXyGJdCnM3bHieXwvHk9gsNVbMeuv41VL1WWF38YJMHqDp33oV8GK",
  "key33": "Hayewqv96we382NdRyJWjxKP4kiJWrVJQdnjFhzCHw8bpwJ7hNKbYEEPSuXy7dwxYEVDCsUbs933gqmkjfBasB7",
  "key34": "2nMrNvnmwMVPS2TcNeL2cd8mgnGyYDYrvKT7nsLnXpxbAwzAJDTZnC4BYFdCHkXB6TXYmvRbKy8SPL3taBP6KTA4"
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
