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
    "2xYmeUED5nHGkFCN6SJN4p1EsmHNAjBTBegBmLVf58w9QuaUmUgoLRMpKVqrnBBkzHTJGyrKEjGsDdmoTVMVejWs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wfQsCAcQe1sLBG7nt2UMoxqSmqMqEEgxXVp4QWxprYXCGJsHbagYQxxt7jcDjihBpn5AEuuXDvufrwA16CDmeUU",
  "key1": "5jxhQRAeZFxXxr6ErZe6ySsPUxVeqfHTivgFFu5vzFSBsyrnwgTdSjdWQSsQsiQC2ij24f98mPXyt4BmoPa6PQkh",
  "key2": "571VQ7gNxtJRkqEsMXaJ2o4CSF3Jrbi7FBAUQoVEZSviVezLD2BZcNJbtaz6ZZMpNYgKEN8ZoMRG1ChctJBpndxH",
  "key3": "3C9uKV9rY1dysy1jHUxV7xVwJLNxCgHxwhFSkh33yGb9j4pBNK5QmnoSejzzc7NZYvxgjZsx9Ng9d8oHZ4oK2Ryd",
  "key4": "5urDVrVudBwoAgUaSocwGYjpLcJ3Q4ijD4W1fr5jCduVifCzYDXUxXy4xvmYBQw2f1NkocLcG7QxqCHLoQ7QrSmy",
  "key5": "3J7nwwujtuZmd8o6HePYZiXduaXBzSYnW8sde5tfucgGEstEKMJ3H9dABSHd3ntZFtuEQt3zi7ydTYZBnoJ6tyU5",
  "key6": "49cts6QtibK7kitxQtJHqM6fvJDpTQXaqHzfxrCgEBMGLZ5HrdFyt9jjCWdZL12dnQyqDiSikQbPwD3Bf6QSRfB2",
  "key7": "61BB9TqKaKY52jD6wFJnzAsZxVeKbgKJmGuTdRtLxVCxda6fys68RFDa1gc8LizHqFWtc4S9xQgXp69tmsecVxKz",
  "key8": "5PzMdvWSHA26UHmCbNAQDLgX9f6ag7JymF4Fu5m9uFRV7GUf2ddKW48NJqMfUz35XhaRkBSYKLNmaPK7o1XJqQB6",
  "key9": "5a54YLrF6DNUYcijbUwvA82re9MBrfchrKgF23rAD5aauxMi288UiBiRSNKoCgD7thytoDfoE538TrcNWRV8nYbG",
  "key10": "2TQHE9MSy6tTKvBXkuXmGZueLs94b5PJnyMVf79h2RAY2BNzE5Nz9ha4PGC3CoRTzeYm4QsuudCAc3RTQybR2kMK",
  "key11": "5bE2zM7z6hJp5pu9umEERf4NJdZAxLKFB1nhSqJefMVkeFUv2JLdSkZ21vwYoXgtdXYuNqU3gnSdu1P2pGM3QBoC",
  "key12": "3ANmmVkAGweyzVpqpLwjEZD8CACKKCr6M3JatQvk4gGTBXEgMkzsPZm9w89Af3ZR4R3BF2Mj9vnwSQ7GmTLJrzY2",
  "key13": "3PhmcyTtYCq1iHYWS3u8dzeueQ2iyNKmXPMQPxMUMUaZ5famBUFUqfkQhRQo61rWnkJzzuqFGmBcFNGvjLCm21Fw",
  "key14": "mgSpgTTruqw8UYi119yspqLK4QktHFUdxVbNFDe6mnWWDME4LP5PwrwWjDpsKxaw5bPXaaj3USzKsfCS8CvGETU",
  "key15": "2FNqnPFo2cVphixyppyNQ5kHThgADENyTMeu9CG561scnVyy8w2iBdgMZ6PaFrkocv6vsjEobKAYo2k3cHLh9SX1",
  "key16": "473hqthdPGuV3P32mCXSkKeXXJ92tAM9SNyEFXQxmDDr8j9fJfSmFAzC4GXYx7ULodxcFLZWzqCp7q1tZ2ak2oBW",
  "key17": "4MFEMsYUqHCd2Kg5w3uP9ARwqx5qhfUaq4KfzFvSTeTxr3XRybwoTgdgaStTr2kbmYhtZ68A8eVwtNLKJa4g7yzZ",
  "key18": "3s2hHn1P4PzmJt9MRF9eSEFHH2zjdQDCydbbqft1ZxnmGfySRmjXv5SiiGFH2r89Rsqk4JaGwN6HWRsgrRPXDMqJ",
  "key19": "56L5PBHfTednqQUdPKBxtw7xonrsH5VU6BJQfHG7d9Qx8jS9nN5iJ4oK8kiVL98BxUnrmo3s3DH8N2rvDPbSPNxd",
  "key20": "JUc9nifzDR5rf6sA81KVKrhkP7dN5wBi9eCp2TSQU9NpVpm4SvQqvydkSY2EtrwJGVuPs6RzaGNcVK3VnBWWZ5f",
  "key21": "4ZH19LZynhtMztiB4eh9L6YTiMHcQirdEeDXj63UhRgK9rN1RUpKTmaV71yNGRNz3ah4tgKufnf6esd6RoGbNoYe",
  "key22": "5hPCZp4zXL9XZLGXfC3KAXWcSmM3DxdcJ2SYkYthHh8RR2ix4a7CG1ZFZpooPCprNFDqcjfSf2Bj5buYDEbDtW4j",
  "key23": "4kiGsttAjyUnmYcCdsaAKKcYewKEZeu9pQ9odZKxq2HrWJCkZSCT2z2c3Y5BMVnE2MjXukE3houn8GyQNcfZ4dqF",
  "key24": "2zXJU8fyYrzC6jJJfrm7HwxU8HjssSMoPH6vDr2foXdPL5PWwnyxaThV4VReM1WV676JUFpMcbLQmkkRRFEyU1wn",
  "key25": "3oBP8Kb2gF76xs8Ru1LzNPuhZGJcQGxq5xCoas68NE2VdkdvgD9qmH4qpW2QktsEHCEpW9dEPSxAqCwrV6HfUY5M",
  "key26": "2tkA6bowPcgVPLf2rARmLpBoCk2TaKHdUkX81qLB4t2UuG7WMT4YKbwmh5NFU1kKiwgyjiqZk4q6YSdHF2G9s9R5",
  "key27": "Puhqx1hjdHacdv3Ft1kLRnt8vHaXVPchW2AfvWAxzvRZvm8GrrqZn2T3eRqShWPnk4mNXUXovro9yAYECikFMnw",
  "key28": "EogF1iVXD1Gm5vBxYvToPqSqn8BhAVttxwYtM38tkpjxYHECF7MKYhykebB6A9DrL7Zae676EZzYHmfqzywihMp",
  "key29": "5yZmBuS5xVRC3hNTUPmenu47byQztxR4QE7f6VzaVvzHDiVFE1Yq9LprcAyqPmid6Ea2dSBoqzVBF5ibEFfFWCch",
  "key30": "dbTSP2PY9NC18ffTTSi5sPNAfaLgc3ifiUUVsSEjgbK2uhsnc5n2VKzvYAHrWJk6fw6mwrsb6BQ5v1BMRPgeHR2",
  "key31": "5pX56HGKUsiLz5ninbS9AE8ha9m2AsPQwvWEL3qzCJa7zk7LhooVeKncEfkaFnRAcu4inNDKRZRrXdBAT8KtjgmW",
  "key32": "3tpsqb5tnmfUZX6GV8Z4sZzXc17xuGuGyNYActDVxWjwMV98T4nWJPdMUKycDZceeyzFykJZJyy1HDiCRYsCQEQH"
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
