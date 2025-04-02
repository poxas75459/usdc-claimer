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
    "3fuCqDkpjrbYJ6q2sVoKP1L651srnqeFFKf2RXws9aypgnBy3KPyvfvJJVuenTNednWmC9iWhC2HpK1Dd71PJbXb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uRMVKLo63UERciJCQ8Ni81UxNXBbz9pUeHNkwTXu4XTmx9VmiG3d7nGorozcxyZU7wRppi7wp5bnx5rhUE3vUq4",
  "key1": "33zsf5KoqjiEaEuWGfgkJiXGW8nG17QhtCT43T7y7MXi6nQEK4AihNt1xxjYtvkcU8ViAt2hGBW2GKaxvHaE2iEC",
  "key2": "4a3DRB5wjPCXmUX8fYiW6Y4fB4M8Rsu8Kr6fn7srMxhXqvHNXyY5FVRLqVBpmfb3hr6NaUQcAVh83NA563iuTLG1",
  "key3": "5GzzJSfR5pXpXYezHkrRhERcDdViw2yYDZ2KQKqSNup3wHSLQywpHJRLxjEaRuDdxTnh9dttDqCbE7DFFy6QmuTs",
  "key4": "2ssK3WfYuSuTkMyjXCbrGHsYqtqRbndTKEakxaHrEmrVLcNfDfQPhEc4ppSmVFVMCgfHUSasxVb119uHBsUKpDCs",
  "key5": "43D9dbvu3vby1g6wZ2aQBshGAfe2FBMHTAT8HbdGiTXEKyT3DA2YsqoiKVkC4LJr8UADwAqMRLVHcmMicVSW8hMy",
  "key6": "5fUsgTuAy5Eq413PyegCszxzMWHxPA9dGWVUSpwJVq8LZjnBrhwQakczbptotHTWDgn9Sou7xmmYJsnfWiwUFwEp",
  "key7": "2u6QuKaURte1SEeUt1s5tuVxmdYrBk9BwuxxVeJaue1jiyGfFHu3pJYJufuHiAp89Vxzuq8GJgPcRK5DrB8ADQk8",
  "key8": "2Q6fMw9BBGggwS6xd9FrkxavF88HnGbUijAn9ktsiR1HWL17yQHvuwQ7k98D1PxAUCcnBucCC3RL36ca9Vwa88Ku",
  "key9": "318vHawz56m19UUuAMzRg28SC3cGM8oxVFZXmkAR1XBZNcxVQxHA74M1tTFkRgWHSqkqdtqYoRb7JUoB9r3nBY4Q",
  "key10": "5NzsnAMSAUP7wA73ZLmT5nHXmxiToo5JcmNAa8Q6XjEGmBP6KYUefbHg3CWxNZRvF54Gu8nx8X5mxrrM5eYQLKwD",
  "key11": "2PX4YeRoz8p6r5DV7RigvRTaLJ4c18ihkGZw2gZhro4UkYWXLAUKPhKqSpjKerakLoynAnca6WkvqQQut4PBnkP4",
  "key12": "4U58SWKDNnDf9oWJ3fhXHXiZs8VNNiguAjRQq7oDBhVUz6f3H4NF639JMBWaMMY8kqcvNB6rmCS9g4BKDFnJwtdk",
  "key13": "5h8uep9gKFuniKVawf94og745gXZjX6CuWavWCxWnki82c8NhJ7BvArfmBCmzzCBTo2NKjvkmR2fKw5YcVeFv6YK",
  "key14": "3M21nfrXVZ8NrDVJLx4ZmFjaxjL8kes8Kze9zzuusqnkD8horTvnU6JzrjtS8r3uiv91EfeaNA7iWsY5RAqmvoxV",
  "key15": "4r2rbCaL5Br9NRa23JQZofQq75ek3D7H915FUGbZCBcVC5tujbuZ5qzDe6kkn4s11LHYcHgRZhk9SnaV5782MQag",
  "key16": "3vG2hW79a7UuFMuiSjbhPd2rNnmrhAqtGUfcbkuowjwyHCuRhyKSFVBcJgR19DDoNjCRb8PxTjpvYgcvA8PQPywF",
  "key17": "fwzuu571Zi7uvNY61qV5knvniHyPp6QGtPriVhsRZj3KXufBp1tX9XPWHNRFBHcsKBqt3GrZh8AexAPf3bcVU7c",
  "key18": "4V7H6jZWV43Ni2E2KfXJY9qjX8Zb8qUuEJZQjF8DZ9GvUachdsMzHTiJmne7AMQwhLypF4ZFH99NookrG5h9REoe",
  "key19": "2oGUGNXrNNfA2sbbMvPFKj4YtQPqeyWeakCaUwhzKqvZQWzJhYBDJVvnrnEJG1zv7FAeghDb28VnBZtkv634QNTT",
  "key20": "3Gmh4g1H8XMn3Z8F7jJuffqcLV84Xnk5xMvCz5nxXwXk7hqCSpyMEM6v9E9KbNdSeV2AG5Urbw789SZpyKbHD7ry",
  "key21": "3PCimvg665hRZeUCyT71bhM59sYjD7FDLbe1UPNX5uXCtGABHFingFr9ihTkQyZRpk2nRuxhoGVX4Ag9gs38TbSR",
  "key22": "5h57fJ8QDTtdWmWZqyM3jRCCTHtRT4w9TcAvAVXTUpDrYtRhvKkpUYYrbQULPSydA9Ldusinb3AF3wsWkGiJPznF",
  "key23": "5qcuFKUfD9zi58ZaRcttk6vPZfWMYKsHwq7KT9Cbkhk95NeBhLMimtefQ8uh9wuAUpesL6r1whHSLtWA2ujRySPD",
  "key24": "SjmZjxBAnSB9ZDKaPwzn5vLTSdEMB1SWvEAbMBXB75rjQ5oaJAzw4URwFWNrkosHccjgKRG9fPMzHkWxrTCLS6o",
  "key25": "4Ewvxmuohehpc5PrqcedmZbmYRR6aJ8hFyCu7riqdAbigNSiAJtq4AcMMCzb8RAeivzmqrVgjrgXPTj7ERghzzB2",
  "key26": "2svTHy8tqA2n4Efp3AJJYt96D8Yjrguhj984kbXf3nJDXAawzdGej3ANX8y9j2Nx5FDzv4mavJ1QnUR4DzL2Kfeq",
  "key27": "33g96GpTgkLf2TEDdMnwzme7sHgdzwXtvinCqn4PVnXZqa5GH8wU4JVcm8zoL1khKU9KVZ29PpBZ5ptw7yTcDXMK",
  "key28": "5r2d5waufGcpg49MUVQwwpgZ9SENDZoXTMQdsGdW4q36YT87u2hWsaEErTUdq1NGDm9TAtAMuCYWRqssNQApaPhA",
  "key29": "ktZ2EfTXia1YE7uk8T1Mac33fnU218YfYbf6M9bRf8YQrydN8gkqv5ZFmCNMdyw89Q8VBpbm14hDA2RqKwYYyED",
  "key30": "5uYkYEpYiXGfELsxe9mXqanoN6QxXoU5vpDojwneY7tVjUkrfii8kik82zeQVZnNnuGnFtjsqLgmVAHYpDMEjSF7",
  "key31": "4Ln2tnwGxdArGytwkr9JsgCtEpsPZjYMEis18kdAr1K7cvHvYuNqvJv1hnyTmW63HjdWZ7Uex5y6SeXtqWS8pXNF"
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
