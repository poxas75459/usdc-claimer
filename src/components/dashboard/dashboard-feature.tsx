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
    "2KGenuZeayMni9t3dAgDi5U3kfwpNqDoy3kMnQtZEbUC7hrLkNRr6LaJUTTpEyLUKKNPjjsjCNC8LKCpxpwNgBH2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n5ELY2KBk3bARoJapmkYfrHtG9X8m7tmGoH5J9RjZPdeoxkf1LrugMgL6BDof48RMYuqQhFzG1QT6SSoFxXPZxR",
  "key1": "5QHFdKpDbFepSd636DqrGZmmREosxfVujKBXXA1JKUUsPxRXVftwYqPaLxK7mAUd8zfWfEAkryckmLXu7dtsMR3f",
  "key2": "M1zJuWYAu1hnPVtodJKHZsu8Qvs8BS3pxTwYfLf8wa63c2P6gXh3d5XiNun1dyTwquthWY8QHpMVjngbZU9Xx77",
  "key3": "1gURjJ6ek2hqKVi9xWrQjefcFJFfPcwavXSDVs5msHTgYYHJkj1SVYFmQAZmDQ2BzvpyjSBua9YVSfua53UBtft",
  "key4": "HzJneNMkpkAfpPwyAhw1a7ovip17LwsCM1EEjysGbCBxvrHuR3tfJZBX1JqvgzTE7EwhjEtWCLjra6WGJywBHyK",
  "key5": "4FLYnN7JWS79VhbviNoEJAtMuAt3PtHTw4uwL6qAPcFvneJqvfy9ibLXNthsKGXb5pLBXzHMDpvTyaPf13AVFzys",
  "key6": "2YtaPfCnLudB7SzFmuhGw81BLmXChEs2fb6Zh9VWzAMs2mHRQFYLWWi6x2eHWfSw7WdgqBT932NBazUw4B7rFZ1h",
  "key7": "4QnFDtkKy4MAMqrcdPEb3FiRJ5VbJBaxREs2PJDCULdyQ7BZw2EKWpNKRFDA8NVLKJNf7xymjZUKB29pdwRHbYTa",
  "key8": "2NHNE3uRtVphq8GzxHKtYkCAsjJ5wJogH6qdo71kyogPVRF7yB1v8HWF1PpaRD8LGcfCngkoLUQmdBPAe6RpZRge",
  "key9": "h5kdQCo6iAWdfXXGVtmYkDam2o8rH6TqpFS9FW6vxUmzXSP29F1yHWNw6pCcsZJi1vdcZ1irYrjZ2NUzvX14F7M",
  "key10": "3NJmoMc2RRrjFGXeGNCqDPw3jNL1AiJJZ8mftZzpzvKMoyxdZzvSftdVYtjWP1ViVkoyP8NrP9rVqDiNk3p3SgDV",
  "key11": "4pt7MWgunJoJSuVrJYEd5adW6JFtFgaMBuz4XFyJT3x8yXGxCoBF8LRZnBsMwhZ89EEWRoxGNVBAU6pbgELxLknF",
  "key12": "2pq2iDTkB5RNYTAd1HW3mXJ6nUeVMfpKdYhYSgtKmJXLXULwupEcv55QGwHpyvB67qyXHi8XuQWMmwQbYVhMYVV8",
  "key13": "5w8oisKfFzpGziVgpGHFaiejRLHeKvZQLay1rX9kc2NpjsfQFUSgikRC5yD1MfcXNKbfCJkYbFjCDURX9n93z4sV",
  "key14": "2D6WPRb6Km7e8mytzFRsq4yjnDUUksrbGMrugjL8MtpQPozJDNQqj3CBnzpUKJaGR8VZav2sVNDvGqR2QHJDvTBL",
  "key15": "2S5B2WqtbwUvnAS2qEj28mZTm5XqkcStybVk59DgVAFk1Xp5ZXpVV7aVX4LzBSEeQZ1MrEMDZiw6M1yfoP72apDK",
  "key16": "496KZeSsrQWN1wJ3ypVdkxFkuZppMUD3DJDmuWbywXm7kVNbNR1mzTRT2zfhFdszQF2feBotzYL7HtKWwWyq4PxT",
  "key17": "31t7LfZ9WjKGwuHvaxCxbHjvGuaXAUNnzPtPJTXPRWEwV3wh61BCBW3VAG53YeTgxvLbYCCTmv7QXKT3QkMDqaJC",
  "key18": "2tiJAnD6DygKg3vAWS5DmditB4SP28kPcrNznTKEqyBby5YyWNpjGgAhtbkVgsKRB2mifFYHzZMo7jNRPMyPAiE6",
  "key19": "2rSXQxpYxkd48TpwBwRrP38dZYnoPCx2pirzFzrSURssPrvEkjtvkU8ujKwp6ZjxFoCk7b1z5pMmUMZjSgHfvCSw",
  "key20": "4HLfMUUqY2VLPLWzXvo9UptqPPXwK62TaFHG8bBdJCF6QziptM2eNCeXmBQErRqJCx8bj6RWRypiMWv4XTbwJeJe",
  "key21": "2YdUEcrQ2Ye4pTxdUvoASmfJncgRGTbzWATpCVDaeLvBm723Bt4W3qrUf7x7G4ZBeMGY3ycfpnuiFmKQQtZ1kpH9",
  "key22": "5pDSDMtF8kTm1yg7NbzL8k2zbcFmUxEL7DJb8q5G6urPqKvf8QBKBotgN9gHWr3aNHWJDS8xuftj44AykWA3Ch2Y",
  "key23": "5c6EwCAPANjkVdpHZu1p7h4TGLoQuLqC64juJ9oiq8wJt25DMqpenV6SaNuxZzaUKkZsXzvXLQK7Eg89Yugbjk2T",
  "key24": "9jJvm8XAJo5bPzyHUsoaqpK2faJfXDiBKWenpZJ1LkwXZKkshV83eEuftja2iym7dzdE3JH7m1nCwoStT9tuB9j",
  "key25": "3Bg6idFM3t6diJrq1Ti94YPK4WVwkYrSwdHZz7eZPTZKmx9HxG94baMJtyvwLBpwfPqLexcxQrYGV5d9sWRjG1wo",
  "key26": "49Uqae6tCsXAwEPevcpcE7zGb241CtkqYnNYXavCVXzaxvhbiuZi5xinrp3ngb1yZ96q74ifzZmgFsErYn6y4Fhc",
  "key27": "4km3T5FkcXW7LBF9V95hDmMqXentmu89nTM24DbwB3epwba3BiYKZbze8gh45nVUKRcawh8WkgkB797FvbLpFmMK",
  "key28": "4kxmdbMWm9Dabj2ixT6gDoFLd8Rmu1D5pCJghT4dJuxqCgjX7N75V98oqFLsfcSELWMwRWt7Gca9a9DigE22ZcVG",
  "key29": "4X1FgtrWLTmqFqkTvnXtQwZPs8upZ4YWWxzQVEakxRKnGCe1ZwYWLdA3QbNJcK4RHYyXyPSzLxkk3WNBfFBavcBW",
  "key30": "3FnD5qtwfywLt4VAbY2LK693XYP3P9jBRxyrYifdxmqrLBgnLFWicz9CWyFMWmErEj93HdMbnPWyJDFJCXGDrb2K",
  "key31": "4t4oMZH1gfmSfsXPP6gDgtB7wTv3jFZU3BSdwzk3McVWqTAp28VQqCnDzGfuTJGpGwUcNKMCkDWdRnsWKL3fk21s",
  "key32": "vLRVqD63ccKZajDX7c2SD7JYbtmtDcFJXMgcmUWcpU9jvbWiG6v1iQXr4bQV4A96Yiwd2LKAETfwxw6kqkDvsnb",
  "key33": "AZmEYWfyf6Ygm9ZCawmVSDBtaaBpQ3mBDY5L9yW5DoeKVQZBv15Z1sPVyWxT8Kia5YW38c1BgHM8mKGruZJm3RG",
  "key34": "2UxHiA7XnncSmGTKfoyZHHhzV8YpwCtKk2BdhmG5UQ4ZCt3G7bExVbJ8SoT3ANAb4KtvDEuYngJnvgJqVWYbT2Mq",
  "key35": "2zcBFg1YpJEWqbGCsPUEQQQwmbRgqmvYu44XmbVBSVqKbKxYTjTw4Zjc3W7haq6fNTUfd6jzaR1J8XMEFdmbXkWc",
  "key36": "37wBzXUddvrUVY3aHiSznsLATDyNLrnCHXswpd4uQxHhkkBTrLQdmuae4afJzqEE4NCMKjYFkBmt3xivPFzDGTyG",
  "key37": "3sk1afcRWsTWXzb7CzrcV65t9zcT1UwrHdpRy834JU9mwdBg5t339u84Xb5jLG7FLkoLeVjEzYP6d3ZkRy81EQCi",
  "key38": "5gwWQsshm2p3RwW8eNMNVJSctWXJyE1FujrRfjQZ2LdmnXajuNw6SEN55oCYLwEVd9mo27bSCu8nmhqmjMsnUHk8",
  "key39": "4AXiWMHND9xQY4JkeBHEhXfVRdY3N9dft8kyGfVs46PBi4wwY8GvDWC99cVdA5KDK2WrGUdyZCL179xShvywSQpD",
  "key40": "25EdXAB1kYSbwCJ1DvVTfDSjWgu876WMq8XCbaqu46xRXYJ5fV8JXYPF7dPLo9F26EM4NMNtzN7uqStoxHUyznit",
  "key41": "3Kn8E49nLDtN2we9r4KVdWUioVC8PYaWYHA5d7iA5tsbUtxAFxRhP2NNBCoUbX5aE3Ff7uUDG7WuSR2QqKkmnA49",
  "key42": "3woxAGBqrs8UsXs9AXdLAw2gvKz2fJAX9nACFjEoAuu4f6oR9aEHQ83fvbmUq83e2ySpEbBm1tuwmA32oMXamCP8",
  "key43": "48MsUXZU4pSYVDC7Enj1RarfQdeRgkwcPWdsmB2gSa5XUqggzQadh7UZUYNDfT6NLXAMUJ75gjMV4j2zMD6To5iM",
  "key44": "4r2qDcSfo4utqMyjttyhUKAD3TDn35bQ4aAc5drhgjeiJZA7Q7mWsTRjhnz7ZBqKfSfHKBdAPNHYMPU5WHEipktq",
  "key45": "2RvUDcBuzPgXRtZUB7YmfwRHx4HZz8GJPaWQDYJ9VFx65n7YwNvzPJvyuLhooUE8Jnsft6bxSzFyXyMstBoRZoyU",
  "key46": "4AhMsYryJKLwwaSbqP1pxAmsR8RhYRAfs31dxkX6y48n5dXWqHjiYDRrn9RL1KWLvc4YgQQ4bjQWrwK6rKz4NcSQ",
  "key47": "3odgsYm7dNpeDLHAmFbGCneSnfLEhrCUBUaX5jWbAv4nwULxpyi38e5ZjfZuDpJ2cv1zvzFC2ZR1C34FxWnHPaGz"
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
