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
    "3Z5TjADdA4rjUusFpN8usrTKmrReJo1xz7t6XTN6QzesWhUd66kvFM2kCPZTpHtLSCPFs2LLbygwEoVvpWAXqFWY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cqDaKKVNm7GCZ8NaQFAwRUZhmyy4AxptEveakbNf6aSAJ7ANYq1CfyNjhi4zcC6mhpJVKKSN2c5P2io6rLEdYRJ",
  "key1": "3EeZ3iLfXjRfB7NwhYsTS8d5fCVbPQLLmvUYFxn3dmqzujw71uEPUSFtno9aepbjeVyL7eYLaCxDyM9kvN3RW5Xa",
  "key2": "3BfvA8K4nVEjyRkNfYYjnaBSMbKNdRZ5SeE1CDS4RdvKd1i6XuMsTeRhPQVsSriDkTwpdvSuFSHQjmt251FcjAF",
  "key3": "3dTeotAfp3fCT36UKmxyRqjxVN7oAKBMYrPrzstcwRZneafN8gVvsSNHVw9ictEjai5DrZvk5eimoA3Ec9tXNWrE",
  "key4": "Z55n1tBjLLWa9HBnCi8BGXc9p8J4y43pQET1Bfd8YhaMi3dfkeRKAADLLka2xMcySUfpKszdso1dy2BGLWVKCZi",
  "key5": "3Hh6eMXpba6akxDWgeGBXAxu86YmKBHTdaRHyJMMZJAxfKRSUbgcjpr6i8nz7fyhHoANqqV6UytACE5NhXUpUh2o",
  "key6": "4LiRanrsCVh3JBuq99dHnPLg4MMa1hQ9ArKm5h9tHTuyYZ2U4AtxAovWWFwwGZNu742bdHonWvTPtcBZDX2tr2t5",
  "key7": "2AQJRqtiZJ8Yp8QpxztshCnNZwAX45FzM3YWeRViYWURyGXnoogdfrK25U8PX134ZjdN1RKhiSPP1PyWWfAzz3NX",
  "key8": "2Tt8BpmWNv8EyCB4HBH4k4ZC95d2hJk5XU7nph5qn8sAZb6P2Vo4g8FgjiDtjjheSWZ6LihWPppN2RopiePpc44x",
  "key9": "2kUJaRk3kN8QTqkW85zyYPcDAwUY9dApBZf8TrzktkurB7uFbZUZd5DT5MRqWqKAxcSGxT58BWaUfrawXdrAC3WX",
  "key10": "43M6yB1FAxe4nJgEc5McnvuVgD1cLGvHoxbdjp2h6Wg7BCz2udcjMjGbnKEy7bLFSCDWFhZSMJawr5ie7j6VENLx",
  "key11": "4xpXy7ZuCviG3Pbrx4Rw8wqdhbdcVyHBUHTmTm7CqAMxbiBfdcxgP9qXRjBJfMAzKuSUtHo5FrYKCgNnV1Q28diQ",
  "key12": "4Di2E3aNDQr8GS99pAxhDVanYVJoZVb7gntXJRW9npP9ns5HjDTY5QtpTHz31g7hkMQGiyi5hcZM3s5p2CfTcgUp",
  "key13": "2SrBGDCLHGd6woGYo1pENnAoa8wyd6W2VocwDmF1fb2PGeFrpFqEEsUZRn1vbWSwoTT9Z575teAwdVUBW3mk7kAX",
  "key14": "4TgjRcssmu8thy7GzD67ozogn7frnV5NsAD6wPpCXjfYjMsCey2jxvuKTuH6R5gaJU2NgB9NpynXc6vnBdjqU76F",
  "key15": "3wFQfyeCVC8omg9vXJgv7wUHpq3ctwqwPp5aHN1XaRRh57DG5VswiPsjKZFX7P97umAJJGFm8enzyNoG8MKUKcWy",
  "key16": "4mZxtLv2Z1eb1Q9snWfYdTMYmgGF4WWs13U1Tn33qFvLzbxGSbdy7LXsHqdEgCPR7tiYQX2qBBaVXdZUr6Ahsgga",
  "key17": "4B28cuLzHMUXxwrSrur4FxKgpqTmApjK5To6hTRgx2Qtnnj1o2eCSrGSkzkUFxpgwQwdg9ghyXhUS6HzvKtGbgJD",
  "key18": "w1z7aTqfqhyh81tr81A7VnYkwqGuzpKJB9sKkvGTYLAo5ijKCxLUuaA26EDuA8g7QWuh1BuFbtxkf8KqcXgBvNP",
  "key19": "5Yy4GtYRoynx3Gy7xFnRLhTvGmXRE1bZvkXLcK2QuN6Gp8cRjNGBqzWfq8deGMw6jpam91ZdfJAdVAZtHJzCSXtf",
  "key20": "2vDMuYit4y7pM7yqY1WBJQgR6BcfTgpTUQZBfA7mcnmBdDbNqmR5SpUu95yhL8dDdvhLBJqsN3fSZ6CSQKJNHJBB",
  "key21": "YUXpDw6RZJQPYWSx7tUdzeAxXMgst8DKR3MpBxQCW6woehACTVQRCyhLLofG3mHDpAabw8BuhAZLtoVgWdXPPDm",
  "key22": "2JCrANSpBCGVxXmkAy2CAjNe7LisATbGDhTdnRqd1x2926miLivV4z5nsT35WiG3nS1BDKCGj935Jo4tc8UWDa4z",
  "key23": "2r2UKkV8cJE7rm7WHAfpPDstfqorkEUritNFSL1LSimhdyagQjThaMPKCwJP5E78meVYDp59Rsp2SAMtV1uL3WyZ",
  "key24": "3U6ghC9KeBsw48S8eZaEy2A3bx1Xy2jDSzpbpaTf2J8r8eCRXpa5c7FVZF9bBp9Sk9jsCpxsnLZmNi3cHcQRccCh",
  "key25": "3o8Yo1YVzTp1RCmXhY6Yg4ZJ8ctRF7CiuFzRyonycC9k2xFTwDu5TbqfzXmxqFPWNMf5Bu9B9D9AkhxraQxkVX9r",
  "key26": "5CjNJhyNHgZY9C586RK9FNqCnFwP3GmaMvvhQn9a7jBZXs3HsGHfVNQX1fLuWrTZJwbkRaKKxp1pPwtttd4uHfrt",
  "key27": "3ApSnWyXBKE4pu2B3G35gEt4dgTvqfMNrW5rVwEMpUSdvjW5VjC7MkAHGNd9vKbJQH2RDQqVoUwJnSod1hRG3nae",
  "key28": "2S6QcfeKCH6FYXfiLXfRHDfSgDaUfpuWZwCJSHW5MMbe7zgEKpvGHrNCnTL1xLvMSXWQ8CHMe1cY3WxBRLpgkxgQ",
  "key29": "rVBYizx3UvcKtffjqhsyNYEwUTP4jfzMZzwn1Mr8UpFz873f4kzxMnesSkEu9zZky9xs1kmiioji8MRRE9ZUYwP",
  "key30": "3wpVxNYPitb4oVQ6diV3FDvtY3ASyYphArT7PcdiWSMv78tDMFs9Mj3ayJVdUmiA2TeDQ5XyVo55jCxJWLoykY6Q",
  "key31": "5MXdrBvqxEvjdWUJTxjPKjAGXRK3uzzNXUUNvvZDWof6Qw6pRWt3AcQkLBUKoFVq5nPmp7TSVS82qMKxSx4kYzWm",
  "key32": "55GyGzdS3WV1KgTii36xAvqXYvhEr1sRtMLsgA5BwfR7ywBVCEybQBm5127Fvdr6N6TAsZFzRXQ1EmohcGm55gFD",
  "key33": "2gaduebhhpLCKGYUYgks2sJR9rxhiN4ohDC4Hf1PAyk4774ZKnxARPjdgzQg3irwa4neQn1DVr8VuT4usJYHXXFU",
  "key34": "4GduHTECYDcT5RGg7QDDafZrNrXGkAsdNtC4e5bG3W7Wv3wUWSQ16P7dZE2kSLAYWwwM2UBuenMhRpuTWSa5kvwa",
  "key35": "2HQtSRtw6vTxptjSMsRE38MAQnE6WLV8VLQkcKpLdYLSRXdwECbwnDHmJVjdes6CbVYCdLH4J2Wi8XaHcNgDW4ka",
  "key36": "4Xfki4K71NXNRBgLWRFTHJGcuF4e2SRV3AvquUCpGWHupQnEykPzTU4DYo9q5gyyov7Zo9A7uXJqAh5eG99EJeTU",
  "key37": "4dGGHJ2aKejJbnEnTEv2pp9ccrk5K44DJKHHoNtwaGk8EAndPDiThQfS3QLzZQqZfQUYER7ooKQ4U1VokJ29yTtB",
  "key38": "2KXAcdTu4WUQg4gnMF3fQ4BBipsw5Wrjn9HunMdN49n5rQsAHxGuZQQEvQtu635uLyy1HnKxNNjvw8ECpQzmd6nG",
  "key39": "46Z5N7Feq5MrH1VxEqnwamqVHn8iHdEZJduEWXqcM9Wmf7RfBndRzsHESUx7e1HUBEpkyhTjTwBWso3nBn8mbriC",
  "key40": "bCN33bVnJiBqK2DGtLZ6HytTZnWWRa42hKgfbZHY2TN2wfTzYUfc44EdXXSzKbRxDhqQ92BprhzGUd3mnJPBiYG",
  "key41": "yyNrVML2FcU9sxaivkJYrMREZ4CZ3hsbtf6sgzn1sLWPhApTswwhqdUur74AFT5BkYiYyeRoAGXk9uQ4Lw7eSwH",
  "key42": "33QXTkMb9qC1aacmYKUhhNtu6zNnoY5Vyn4qGtaqvyb42ZvCzLiJwjKQMZNHUDsUZMsG9YZb7LJHU5SBeFVs33P8",
  "key43": "3LdZT4PcQZDDNS6fwzBFjhUg7R7kB7EDBDKmZgUTx59NkCN4aqAAY3hMCTHBE4YNPZJpCJRXaoH9hbsmDAv9huFS"
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
