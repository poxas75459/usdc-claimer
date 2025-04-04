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
    "2eMBxpzaG8ASXGYbXMF7hhsYoohEkaoHF3913Tbx1Ed8L79BrTPumot6iyc3vHTono9f2pgvwcp4JrKK5ipghaHp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iQwUYFwon3jvYvayLYyhbfd5i8kb5UVVXSTM4WGuYSfqJddf3LWxznyWT763LFiMU2preRG4DaCuRx9b2vpqT8m",
  "key1": "3xFED1QVFKi1mw3VhhFuS8sP5eb2bbPqSiiRnGxvd7s6vNZTKqeCUzsusj5JLD2eRx27438QK2yoVhhU8Vw6BkS1",
  "key2": "3ZuXuKNvWs4pgGjr3ScNjdUEZj2ymoh9Y4yVJpqo7hKSYzvjKa3psFjTftVusHrdafFnsvxk7m7Kj5Yba6cgJd4D",
  "key3": "2DhRUreJDYFAZ4cVMFFL57i2sGLzt48ieTPeo41sUZYPaW9GhLJtqTVEtJBXAcfwaMfKLWhL4VBUQ1kk9azjSY8r",
  "key4": "ux21hMbfpLb5py1NH2eyaorJrGzK896ZNJ6wE1dJqXR886dz1KkNfZDxaWsTKXZkHGT5Z8zdE9cGabkpGeqCogn",
  "key5": "3Rv8V8CwWT3uLidFF3oTiiuPoSaRaxaUU7uHjcNNUDHXzGTXR5AvN3s9dArsHVZF8g2YWnvSNMRPHuCsaUem7hSC",
  "key6": "5EMKTgMPgfXij9gFCSobbieoKQdWH4NP8bCkBUNFTMH9WtkbquGTVh1nRFPZQ6y7aophvcNV98g9hBWfhL9w3WC2",
  "key7": "29teahMSfkExJqhhDsUjB1eppZzo1qJxtFUXwqKhGmG3x5f8r8T5B9xg59hdjAcFPUqNNKvquD9SS4d5Ya9K47SN",
  "key8": "3cPzk7n8EbgxV21c3ABJbu8esEJ14Zpecq4FZVHf4C5xj7TGRJ5yEZQ7jexeqH8XpfvK6TJKzcaCFKgABTmCZEU4",
  "key9": "32Roc8PEF9FeX6ZoeYbZRD6xgYTvZ3rbY4icGk6JBdWkpdGER5UWc9jLmfi6SpQ7yFf1qfoFTS9x7eUorQgeZBAJ",
  "key10": "4k1p3UUwzQxqg8j7saUq46hvc21GX7KpKproNqM3eAfec5LKBJ5Za8WLQ7tZXpMkyqg9U6qLkQSUAQ7ai1VzitA7",
  "key11": "AKjMY2WbeyHr5x8sswKCW86rphY6rPHyA4zV7C6DR5bWfw1NAnvx2zgtEGZTSVXF7t8tJL7JPVb73Mk6BuCk85T",
  "key12": "5HC21wr8i9xzQAZwmeEUZo5p6QpwWadJgYtHaCqY8RAes21c1CTGZJVTQZQdMVAEyD2KC5PnuSmxawfm8bWkmG1T",
  "key13": "AWdkfF7xb2EFMq3tdRfqxpkAi1CvLkjpeZeJ8WR652ozm8aozvsF4duALzdSS4WTT1dfC9Mj7PjDKPR8LALGwTo",
  "key14": "3tkKNZyvzA2fxpVLSczgvc5zhCukTgT8ki8qAAWAQparpMKpfHj4d3VQdrArm1hYeD9aiTK4QZLr7QWn84zVb8ej",
  "key15": "2V64nfVzu74BxseUZ5Wdx3jZt8dW6EqkFWeAhCdDF8AEmK4PJAdtGFmDjXk34waJ6397o5EexEX7numsrLoufute",
  "key16": "2vDKVMKsUpua5Nc1edyupcxStDcJPxXCfssfyp6Ry8ZY8P7tjnN58M34XUWWjg1ugji9rditayjxLev1vsaoY1Lu",
  "key17": "54V79WkANUTdJqBJJijemMH7cFE4Fefji3BCF6XQFANpSEtqoLH18zkYewVZbE2BuCBTnrAaskTeQQdzdQg3wiSe",
  "key18": "2su5zeRKUYK7ZYRL7N2Jze4VpuAuwadqGbA1Sc1wfKhzCkFtgz72KcmgMRQLZadSAMZRY1rZYjbk7oC513rcnMUE",
  "key19": "3CjpQyzKEJC842UdetUVDcfEmSiA6nRUZvhtxAnf6XePvVXc6vx2AXMMQjCPBoXPapRexBQvarUUdrSJadX5jHNB",
  "key20": "5ADaLV1XAdzhkC9VocacFQMsm94NahQXiS7o3yvdtkwGotJnHnxfMag57jeswbJ3ZhELu7RChzR4kiEN5YSL6JKt",
  "key21": "pHchyBGSDpPukciE5ApBmERAvNCVywKUS8LeQKr7AR5dnh8RspXRJceWZi5G4hpUGtU599irm2knTVqCdu4yp5s",
  "key22": "3tPeEzbaZby4xbk5FW2CXMDW5x7QSwefcNnymxcxC261ptZ8rm4d1mzzfDQMkPAJbPPD2TFSKsDftfZFWY2BAyvB",
  "key23": "4qxsAbCWVk6ud1mf9wdSY7GNimsRENHqMEMFU6Xnjq5DkcGsjyQRRSmLLh7VUJB5ioMwKVhmrFNajCoMDn5cYyfo",
  "key24": "2QrkpSH8JznUoKDhig2i3UFEYPhkeaHHPEnykWz51b2R6hjw4A5uD4nuBcRHdL76m4MeDRG3BANhcVuSZgGBE8qd",
  "key25": "2S3PJyj7tcY3Bz7GyaohYhBbbX2Q7AFikKDEvG4AyXxWipQqf9EYjrN2YouZ2b5wrBTab91VWoLA65XTC4vMcMtk",
  "key26": "2RUMtBrgj4bxhnw8nuNGC7BPvE2wmd4ExCPkG7PBetSGUq5hnyWozQmMr81dcKn5NcSPtUBR2DWmCiagNXncf7SQ",
  "key27": "5ujLCNR1PkKK7ZS3EHe9enNVM3WfMCGaFihYq5VAKH7YFELnALJDaWByLhrFHXSYZJTzdBbQUVLbGWWPwYUPDneA",
  "key28": "coWzVCWKE17rwZj6ZcoiK98MRzMPL6CxmjdWNSeUGCGnM3LNYyuydC8r2Sc6dKxwRMCgFu5kkjBZ3mK6gaiwcYV",
  "key29": "3V3HJ6QNhbE8rGaHXzMt9BjUkxS3JsiedtMrwQZPdGNg1yE8VSwBWfBNZzPCJjiNvaSfnjpckmztFyzu7rZqbMgH",
  "key30": "3YtqSpMSpXPmkKr6H6Zdic1RTNcWokjGq21uGUsJkY2ffcKJLPycKnsPidHKfrP8SkETMXYuDXGzLR9TxxFrhfSM",
  "key31": "2HdkPaLYcyPwMTcXfD44rmPprZvBRimFGddrYzK1nNkPzEGPSTBm7wAiS3kFaJDGjnhjDqiKawgdNnQF5vcu6sQv",
  "key32": "4s9pnBX3oshewUARLJdeXhGyYjGit6ZrTsi6R7hwY49iuaT8BPNwyR1ccBoBsuL9R1PQkuFRFiYjW4KDMVj81Zyc",
  "key33": "2juY3MFvN6rEYDwE5t5KLrAqXeWzMBWuZNoKb3QknegKJDXdtZiE5ziyr5bwUaopF3zJaps47Qc9j3mK9k2g5buF",
  "key34": "4ZLRSSALakzQswyKPZLqrWUnNxS4q6qAp4fQCMaPcrds1A2TmgR6jrMgRwNNAuR5gN46KxSYJjh6JbkXoKKknAqG",
  "key35": "5ctvdpUmkVCUoc1c1kBR1YCzV4xuBQwS2RKCNrzTw2NQs4Sw6KGkZX22oAWLYAr8aYRQmiQDUh46R4Yz7vhXcpkR",
  "key36": "3f224ULrqTadbLZgGP6PjnUeEbn8u4zH3qxY2P9ffQKCC8ooCV9iPwE3QmiUTLpNPTaURadm5x7W4RUgocCWVFkh",
  "key37": "N9UfUVtYfvAT2dZhP6xcnqjib6c56BXweSkDPmDk1pLuP3nxMESoTRVNttiFtv2qUqSqsh5xE8uGRiQ7KsyzJ98",
  "key38": "3ViGQFrafyQ5vKBJSzizJEBqpJ8gtj7PxppCtbUUrHEaHFnquqo1P7qkCfbLth88f82xeBiV3GUi5woE6xma5gSK",
  "key39": "5TUnW3ySbxEgfe81wKjYcH9nzjb7gxQ2iEpiUCvLzRDdnPPviX2bMdFb31C6ivARDodChV9kyLiJEH59vaT5ZJuB",
  "key40": "2h6KF3t2Ska8ZE4nojHSK2C6yAiKhDybcaBTcXWrA7WhwSrD9EBQ8F2WE5KQzYgtoWAZSeDSX9pHXBrnfTtASpfh",
  "key41": "8sAkDQ5FKGnryGisKQBUJNJFVyCEKt4Z7JpUgk14krFhEHvZgRmTPZDzMVWJqNBAAFf2BkbmNayiRaP5uGFDqsK",
  "key42": "M4drd2T79spUny6sA5k64yVVgWkCTN8JFmhznqe8DYcxu7TVVfeZSQP1u8jVqkxvrnzvYCqr2zgYEgePUDYjvsH",
  "key43": "2gxcdJWNh9jTXj7dMxkZak8j79ZPRdWeMgCCp8W3YH7uRrCwcKLfhSY5FYwMCqovGCSVqceE7bGWcqVjWbivojcE",
  "key44": "XwAHkWCQ2tPcVQAQ21iNuoZV8PPyWvRRU4EoxAvjMETX4584ymwmY3WCxr4HHfkdTabX2y8iDsqtvc56WjrZ1h7",
  "key45": "59N8UNdZmcmaVqc6np4WXuLRcgi4QBeTb9LRhZmtVS9wa9kPHu23oC5sSnvJA4H3CGUN2rTHKyqVGGjBZ1XEnJ7N"
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
