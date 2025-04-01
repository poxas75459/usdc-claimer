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
    "4Gw9MPBBeme3AHowAxk7FBBk61bi9RyJZSo2pun5kaAGqFRW1QS5nNE8rgjqW2A2yCMZU1DNVsVjEaUUyFi3Saou"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49kXNXR9zZTsUYkpBL2mpGGhKfVGBKc9KJufd3ye7ShwiMzgG9eiYLk4VuZFGz94SqGdda6ribjpvNf1WXRxst2D",
  "key1": "638Y7afzhxizM8o1vtkP4HsMGCwPTxracGkRrQ95ejdaGYJ5pH43uj8tn8YrL9PfxoGGrCJbyXA4ksRkkWSyfrsi",
  "key2": "62cqTvQzAeCQbPWPjM9UbbhsXQoXCsfhN4L8ntsZRYT6LLVEP3KdASTTZxgSEmvjKRQvRegPPwbth8v8vUJrMwXj",
  "key3": "45d6Zv1sgQMhJFXVZmqY38voGzuFMYSDMNqptjaoV5h3aqkwCUtHNhSBbmtCZbMjNZpMDCgW4bMuZTadn1zmkyCD",
  "key4": "3Hudw2Ev9WPzWe2eWob5AwnFxXb1Wu7UrbmmjE8nxQAA9ZB5ke5UzCNRVP4aZ8bps2WvyYyE38gHkBBJgaW4Rm3S",
  "key5": "MsnpXYWxwXU2VLX3jQQnAEkPZy2oCP1aotkYdt3f5FcfAZyyGpnMwSziDPmHJL8aFKSZRhPDbvtXqxJAW224o8s",
  "key6": "438TZfgjAZjL6RyQad8RbjrzQ2BcfXgfA5LMEwuXFqdWT3sz2fAdsmNo77z7hhmCu7FTCPDbrnzBTCkUTApJ4uuZ",
  "key7": "2R2X88PxZ2D2HViuM6nf28493oRj2LThWXEZ6gpJdNCQYmiq8wVBggL6EdqUp4dBcDr8FWxZkVwNFKW2ceLs1a6x",
  "key8": "4hBqiRsc5C44vD8jMptTBZZFhUUxW84DueatSpKJsDGFLe3rJGSqJMUFwJuY1wTURwEzcy5Lvc358h1D38NwHRhc",
  "key9": "5CXYJ5ZmtqNtJceFwREU7TKGq5rAKJu5ksXzdmwmzAZtzthLXCmRCweRLAJKmSZcArkt5rYGwZ1xpypdZvgXQBFA",
  "key10": "2MYcu7e8ZCne7Wo6n2UZ6PPWrZH7qmfHJTivtyEfJCxbwdusvCS3bFR6fMVuTTWXtuYsta1ctVjKZZDTr7oSFjjY",
  "key11": "2GigcddSUpQ98g4npHt45JVPUXLKzT3Q8LzbNedzCkjSBepRmMDAwYnKhXjS222PW4hyGm5v6gB4ZdstoDP1RYfk",
  "key12": "4187B7FUvT4gTgwc6uoG5GdjtEEPLjauyjJHcPqE3aM9HsKwGTCWdTnX9R3AP91g2NDCiYqzMU47JtUuB3raEotf",
  "key13": "3XjPxnJ4SNeSTKQy1qg6M4DUXtuGo7My3g3s3FrKKorE1F4jTVueabGPYn5dZSM7r6n9LhMNHhyuAdLwjnzxXkVZ",
  "key14": "2jDQbW98fzAVmVLiyvjzLMy3o5Zza9VYoLsHVy9Y2q6C3G9Lf37nijTqHzfwXHyAwyy1ZBsHJg8P7cDriMXyTohT",
  "key15": "3w6hCndL32E4mrz9fwDk1Jc85HeAoezcAEBqLLFoDV931fmupVpt8mQhWM8zqXCK5Lw5HJBCbaQiVRcAMv849X9z",
  "key16": "u9dbFPMJUxdG6Y1ta7R5brDsoLZDw7SoSHAPysGPiPFPhu6MNWnuiEsMX6CfjsmBcyjS6FdFeqKUKDa8wZzBVGE",
  "key17": "HxgBAfaPFX1NRD7BecABxqF3QoLa7b9PB5brq6UdSBJnkRXc4LA5gAypgUz8Q5QNeHAdarE546ZKxyTF8aLyMFZ",
  "key18": "3ptuZCB78e5tQSjBnbV8DR8wVH3hPjwHUGRAMhQkEtZ63ELHUcYnC4e2Eyo9wYdeYTHRr2UtckgcTFMVasUf8N6j",
  "key19": "4qrQ2YM4EiBkDi6aJ24bco9G6gegWTgaNxJQpDDmHo9xiU35DNypzxv75nuay1CnZ5dKM2T6fqMdNKrcajeFpNjq",
  "key20": "5mbcPATEwVsL3xC2JXxcNBw97VF6fqAcW1mVBTN6Q2k7yJxYecmmEUpcVgpZrSeXDWrSSjJ5UMfx3HJnV7crS4bt",
  "key21": "4Ran9QEkiBSLMEbv1AQJo6zCVQM2VuQoEqQy73bZAVA6xMcHBNjjzkaYp8o6xL3dsyh9EyZFrAikExWJ9rbT45HQ",
  "key22": "XQSkoqWPVz5fvMv3azvHzUurHwf44KQRDGY744y2koQGga2aFXnYBvzGNNJxmSGrKjZz5VnXdtSrT7kP5zytbc2",
  "key23": "52sjZswGu26ijUnJpQojspFndjQNrpGdKtV4Y7b6zdZaUYPBejT4cdf8GKikjucULHtDRYqBdnhEPUfqqHs7wd3C",
  "key24": "42LxaFyrCJXEEGgMxsmxVdvLCo1bXNKvEVMhFodABX7P5DEyd9n2ZkTtZ9KZx2S7TUfrXRwfvMQnjWuXKbDojsGs",
  "key25": "27P3hZC5TopgNht7yoQzC7K5RVo9W6hYnBuhWbeFzxueJXBns3oRPAvUpoXan1G5W9tWbY1sWz2RF4juqc8V69uU",
  "key26": "2wUtqX1JkY84QYCFZbpUayYUG8P4mByWwTZ9cKgV8iZGT6CbpwnV4eyDJR4xX9zv5QjQVDWU4ghjJSQjEYa7eq71",
  "key27": "2oMJeafgqNPPvb6Y1TpCdwaQX9s9PTb8n8Kmv87sDkKCqj95QD3MfvdLTXSLt8KazEgnahV1YkSJAsojG3rzGNQF",
  "key28": "5WxDUZXrigUYLueeoefd1aATcfPmyVkqnCKDCzuDHgF5otPqdQSuYsjxiQVZtYZ4EqT4wqAZfW6YdataAuR421C8",
  "key29": "bXwn88vG2FAdnuqx3bf3L6tkckjjXR4Tu72JjneYG9z5YZapZBQScCDTMNjMme9KJVoSoBxvAWTRD86v7TqmH4t",
  "key30": "2dEUPQMPHhqw9d9niqiqpUM4LQCTwt6hHFtzwDzF2o5o7WaqgPJAxwdLXoVfehLXbg3hDUyA9NAXWRHJzjLDM7xE",
  "key31": "5XuGU7Yq3gYvb9Q5NaurrR8rTvGNdMQt9S6o5PvU7gf7zj4HRwrYrWjGFNqqQJMW7rz9ax88Vq1fC2ymuPngEhtw",
  "key32": "XSMEhEGx8iN86DDMQU34d6K2JLmUpvhRVn86kvvySr5GXgQrThsxaB6VXGc2iKJNpFyn59Pwiboy81moqVHPWGd",
  "key33": "5UjdseUhMWaG6aCCsNSNysEjR9gPbpqfJKgE5QaV77KTpKWenJPH2gx9anZzqjbGoJWmwCPJe7LESTRm6zexKZbo",
  "key34": "3BqckxiUYdwGdQrTPZtbD2EEBJ9GHbencJB45Xb5kGKyND9LAJf1U1P86oZCbuyLohUg258Sw4kNzF5T6XRoHxm5",
  "key35": "PoL3cbKsxut5iYKmUkMvo9VkL3ky46nZVEchGtR4iuWvh1f9GsKz49ZiCR4pYbmT4sboXoVG9dm6M6jnXKgAJpP",
  "key36": "4WE6nW73fAF9wbNomqQDKKeMaBaSxVxHAH2PFGGhcAx4VPJjbjSSDmUTWgb69c4zV2cMWCufPyWVUFvx9i89xXaP",
  "key37": "5aNyLDuNMK9jKp8xMHni48Fhts1rYrUYJNmRpQ7o2PdmQt7qcXTPGezbSKBgJbrSLDL9tQLwPFxVsaEuFnJW39HF",
  "key38": "4X3A47QZYC99MxJmJQVM7wNptaZVy9F1jGyj7pykUhvPTCkJMyzxf5PLa24AjfuXDJktxGXkRqsw4yDUS16RmPuC",
  "key39": "Vr1KtbCX5bDHKjWztG582Zdh3WF9NEcg2qztukQaD3nay38drKxmxz6hth8vLJcYL7ib6nA3JndRXSiL4JeCV2i",
  "key40": "5n1PcvJD9NoYa5pcTiy2BaRyxJteVYpz4P9nH6BLrHPETokTDbsSWy5cPvhk3jReHJNePDLGEUeffxhY51nmpnHL",
  "key41": "4q7ULTPkNitD6KCyr7m9aueNgd3T9uGAA2rsRpC5KSnYPR9MWjiGo1zJJAcihcE4cNUvrZi8VDRbaNfhzR5tjJLs",
  "key42": "3q4zqzFJbVwH5BphTwstX3vtbbqM9H3qopfFoNTYpsC826cTkZrFLLMmWhtZ4MbuDj9b2mY9XEwqFUm8wYWtZj8a",
  "key43": "4AVYLwnXAGWvqT5epjrue8dNHVNamPEBLGEHGQLX2Bja6qPNW7GhMUho6ENJqjCXpummevpvrG7EK7vW68Q3yWvC",
  "key44": "4vbRGPavbfCpY5RsVb46LG3rCutamHSJEov9VvDEhBoGZcqHMFDpofdpK4SNu4h3AVqU7u4fAmJbJrF3ANziJkvK",
  "key45": "2qr97gDeqgUUmiHajADNvxDbBPreXauTGDNr4yQ3h2fmdjpxE6Uj81ei6sdbw3n6K8ep232JFvRaR6Kq7Rnfkz2N",
  "key46": "rNpG8dPtECtSenAySnnsmvGQSpUXmi7yK4WXa4xPHLoJ6aemfirDBRG8Y3fuTP7E7vAa4PMWUaUfMXCmcCUHRzU",
  "key47": "44EuGvT4LrszHZY2tZCXdYkrvsDujo9QPxZdZWkpyFDMFkcdcwoYgatABU94zJdzutXzqMsJfLo5UCy5rKKTd9XH",
  "key48": "2g1qQtsZwzJ7K3oiSMfCkFPLfkEqqGW8ebfm8aocKtuMxG9Xz12rtPySuAqsAXhip82oM2rvEmYQ8XMWeEuoMS1v",
  "key49": "4gtvJh7MKmwWZ8p95AuPaaVXp99xfBP3yskb3PUiYtXcHT2SDQxA8DcocyCAJsJgfF9dULStHZHUVGdGKEiuYHoL"
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
