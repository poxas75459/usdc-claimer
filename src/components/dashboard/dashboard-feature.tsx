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
    "4tGpo8ZQbQH1u7ta1qhZjS2JrAatoUJ4yEX2m9Xq3vJvmrbxytDJyPCixPHedAAj7R9LMRCicCbSBN3pNsPxZdba"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PTYDhHeX9XuoUYjZhumrAWjWe5WzMk2k9HUfNqrpRu1NRifjJzD2BnKeuRa5oB5mpHW7u359jtfyGAcWTut2RcB",
  "key1": "SYHnxZgTTR5XkPB3SBvqAT6C56KGsR3hD4yCgTHSVPskzTPXvCErHiagsMcJhvE8oQxfjNbrcpkpKA8XJvsJhdn",
  "key2": "2ZDwVbMpWJcHPSdTnSHvUXRF2KzqzAnaaSwN5kkwBDbTxGjwgVUmA9HsDEsLJwkV4Fhhg33DJsocMs8551xmiY24",
  "key3": "62FyXKbUjWbFnAgYBo122DyrWxXboB8nwVAh9R6cgtZ6iqw4YHdFBmCo8xifUmZJQvCSTxn5TYp5RZRJ4nLLUari",
  "key4": "37SqqWNmHyv5s7GcxcJT7bSD6sMMMtLgzxuxDor8UqfYHBsJ5AsumaKLAuzWnNpkFVSTu8kdW3Vpkp6yQziHSUJw",
  "key5": "4Pgm8Q7sz48S4ozuBcVXHSWr8vawgmS4C6gwbyd3yQGt5SUpqoHzegiaP5J77s8V8JboLoMh5L1iLdeErZJpSmFD",
  "key6": "8SxACDuhsMn1FBr5NMir3XgkvQj1fR8bbqhjbvEbdk4XZfiW7HHWohWrJHZEWgCndW76stMzFWyDYZWYmRR3Dos",
  "key7": "5nHfZGuFYFHa6HtA9nMuk6V1PXc9XXTzBtRXf4a9X6XhydfV137oCRYxePyfhdkeuvt3ZuPfBzbPvCyqHKmjmZC3",
  "key8": "LR7m4FAnLMS7Rzj8X9m8sKwUJS6rTbT6gSrjtZnK9gZefvBjWBNGngcF397ffsXgjHvKdTPefxdAFBXXSfZ3rE9",
  "key9": "4xxJuaZPDDHA12tByyiJWKehQZW6qhVuC861dDAkBwn2SupzwDHurQE7bi7LiVNXZsXqoiLtva3WjiE1tXWCF2ir",
  "key10": "5BZhSNfcQ7mV1Ye8jfjZBhuGRSTnwTvAn8VUQATCemm9gkdwEep3UwZxkW7ZWyQeCzikqR7UBBX1VSxiRHhQiaUW",
  "key11": "2PtFZEgULfAtTvjnD8QqEP35CcaDkuTF5mAWGjCUhrzTnFFMzNNmH9vfeLNC7dBWLeGMsZb3JkJffQcTToWubkNs",
  "key12": "5gSSzTdRcVQDvkyZ4HuMrqmuZeTMg3zY5SQey4uWJFoj66mUe3Xyp4tv7EfpgZg5fRTwJ3LDKDxprq6Pjc6HJ25P",
  "key13": "Jtz4SzBojRrXvLhKMgzJWabCAeGZg8Z6iCbrKnMqaBrRSRW1iYGV2cZNN5wHNLkfPekmXm34XEVP8wCqcrozqu8",
  "key14": "4ERyzAmMj6c2dK1zs88HD13NHpxSr5aZyufRT55fUS45y9heXoJE1FsVvatTGEW3XQmHK1HVQZhTLX4q13aobxoi",
  "key15": "2keMEQ1deYYvr85XEvnEh4BWCQUbQYcoh8kkfZYq2H2CyVkTpYnFwaQVrLkQTWCkJLfeVwCNrG3zU3DcYrDshxCD",
  "key16": "fEFoLahKkp6VpXPrAoDGjrEnYSzef2iSP8AWhSWDhZo9BhmPd2xjstsoFZeFcgmk3s3e1SFuK1VZ3sKKdfio44W",
  "key17": "5EDddGK4ZV2uHyrUNKtYvpZAjiZSAypz5J89P9FvA9jfJV6ytzrNoLhNnkKCePWCz3G3HjN2czfz7ZYD7G2Ade9X",
  "key18": "5kPHmPDUcssf4qQWteG4WgUfeKd1PfVRc49XrGjhfvBB1PNyLhyhsd7H4syZ1fG8PpedJCLKDLmP2zX6UtVTjkhx",
  "key19": "2Z9DRaHwHTTT1rHdGhStDWXRVU16QhgE2P3MMYW29CNAjX3PCdc6FNsb3wfv9Ag3EP5aqqRg2RbZc6c1Vy4m1kWF",
  "key20": "351qWU1Ez9pZmdhkV8DvJ4Fd9GRoSAutGniffoUVLCmtCnjemQcJCiqsW3XJ9uydU69od9RCs14GcRaiz7sXPFf4",
  "key21": "uaWDUQ3TG2K2zr2VvwsCMw22tmW8pHVrC3fYzS9GLjoMnYduT64pFfW22tzoBouHF3emuJJS7pcNqRJ278qN3rK",
  "key22": "5n1LrVKRzFugggYNsT4MVTv3rTX4nVJEw4BKmWuwwB7zYRxSfFoqPBq3wSk9qnJYeix2MvvyDUWcPAbRu9TzkJFH",
  "key23": "61pemJPdvzqCq9DMjhsYbrZ7upTRLtvRCTGtd4ex3RU7DfWDJgHGhKAHtA1Af6EddSEQtTRPvcqnFa7WNTXHh9nk",
  "key24": "5Xjt5wUycvEfHP6KpeAozVdfH51dVKVLy1z8MjEBHLUonwAMuYqFFghV2trNU1vPwTWRBHeoEB2UbmrK8LJDanNe",
  "key25": "VoofyzpggoGNBTmZWfpcwjH8hwyCQtk2Bj1tFLqQHr3UXpuGhiz9ySEEuovcsE8LxnBw2iYy9Fr1oDFmit6hK7R",
  "key26": "o2qMUyCroc22LSpyK1PTtjP2YbG7wFDevWeXSMdfpeXZxbzceZTQxhWT2f3TSUZ51bbKM2yYAzRGqomZYkugntt",
  "key27": "5T7PGv6bqFNebc4LQKGDWUBLwUHZgCgpXsQSUJBAxKdfLjGzCQJENHMPTZujkJU9V5CEcR1hxf9XmErC4zrnEMVG",
  "key28": "2VBKz33AiHcUrGtDZzCthZLaJXhZRRozfDuUTE6euag4SN5Ku9Fav8sjN1kjUFpTrDiK3YLUPkDzjziZch5a5me2",
  "key29": "2bAEnxDPm1d5r4ajYbwbPccRAB5r448T4fXycP9dHZYVpV1w7tR4HQvLPZFXqxJwUMKM6gELg57EGatRTqjy7abc",
  "key30": "3BY98zgeMy5gSGJDm5howKXu8AWTS94MHTrK9CjVsWydtyXXdxVUuqNMT898oRV559rHjEmtVGmfYeaR9BMRowP8",
  "key31": "21buekTndV8AQmZgqpoDgfSr6BN8TcpPL3pSL6B8sNr7cRmEAYJ14QFpYaoT7Jfww86LZskwjjNdeY3EvwoCXd9q",
  "key32": "kpXtAabSh32V9nP3TRSAeAs612H6H8UHC8ZH3hyYej6xCvhdLnQLEFPu2kq7wrB2Kf1FamcafvC39PEnYmyJkpZ",
  "key33": "2Tdgu46PCr92U28UyLg7jXdwaGVh6eyWAFsyazem4oojPxskHH1Wu7abdfZFRdYLUXusoebBxXujUMWD1W5SQiik",
  "key34": "61ko5PuZXf6QpdAuZtt6X8YKtz1Mn5D9AES9YTYVCzR4jG3CKPjeuknPbTEnS45XCksmsSV3GdYBUvmdn7rYnDUz",
  "key35": "TPTw4p2myWFKNTtuC3RXV6eEtbo4zH5xiipvY6bBB6HmAUYwvaywnYbMhNVGrHHfgWAaSs3E6CtqdmxNrP8pmay",
  "key36": "aQAnuqgHUNjrdqVvMS4wNSkYmwuKiaHPk3rkekhyTfLbyPcSd5QrZCsX7WMby6u35YWB3cjDDVMHw3i6t4WtDMx",
  "key37": "36VS9jKxaSVStiXPYdqNGBMVWPLNdBEABA4RibrDioKt6KaK51dq6USqj42bPZaXZhcf4YQSbkth68diWqRnSNMm",
  "key38": "2W2k51j6AG8SEfY5kamyNzWjvpfgDCcYBXfhw12Kp7YvNwfvTcxhoaYusw7YP3HLjLN1o6ePRd7LtU66m7trEnjo",
  "key39": "64wSdRbQCpWPNG1QnNcqvgMr6krjykM9y2Na22uSAKzoAbZ4jdJhBwwRyHCmr8ZVfNRur8AZfchsChRW4hJLb3wN",
  "key40": "SnpBboL8WCjkMpyVcRJCdP3SVzK7w3QHbgFfavYEJWexT6ftyv6RQBZs42hPPYyjTigvSBnJP3X7xis5KoVps3H",
  "key41": "2sk6M8ndr2gE1wmRZiHhcZ9uHMq8CmrDQXbKQgwhwKL1hpkRw4Fh47mRKqN3Hei6w2w4RYY7Qvz2gWWE8feuknM4",
  "key42": "5vkZp5M6MuEEGjszo46AvU4KZdia2uDFS9JDNMPeaw6WCZQz4RPoAPX64HhVCUTUUEKPn2MZSrbi1tsskFZ6ZTVG",
  "key43": "5393Am7hYuWe7LzZ9QEuALbaD3C76J2GE3nLVFzj2ZzGMHLpMQeZLdqCUTStxBwDh6GhAWQkcMKAKzs6xhiENowc",
  "key44": "3mQYHjWGBxLa69xSjZwVZcihcX7uUbqawBqJMjNCeSQ2ffmNLdfAcHvLt1w8CibKcYeW6bnN1ugCGx5kE9VYRXg5",
  "key45": "3845hfSAC13jV8xWH5EefZhLvq4pcWk1NMyUqdBz3iLgSfRZireAxED2kKdeRuuydMKJGbeFSVzBm6GtzU1CkpN4"
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
