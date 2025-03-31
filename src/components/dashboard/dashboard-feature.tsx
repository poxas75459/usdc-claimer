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
    "tyXEzzi1WVSPRgNQvr347BeaTjLuU87pniRxAC3z9Gi3TXxQdT5gqPEf8hJdfmpYsFAiNqbUvYujAwiMNPxQWf5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22g5vR6maTGVuiSCyfK6dEzG99cWuqAhqk8jUXWa1Uz6BtZaVapjmNvtHgCqmibdT8mtxwqMjhUVt3ckdvvUckD9",
  "key1": "2biSJ8Y937owXvsgYFe7WTA9j65BNhJxhrFAQU2QY4cpAQVmvo7SaWZJ5yXnKUzHVfQDCn4eLdWNot1fa5Ki8Vqt",
  "key2": "5NvDAqJEJ8pn7gUtBbxK9uzcmwS1mancngr7BXY2WAcZzmCxTz9671i86gjtzEEZx2suuZtFgwRRY2QcqCeF1dBh",
  "key3": "4qVZNBKnNsCadyXTWn8pJiG5LsBoZ3gYvNNbfSgqcm65VmgMMsdrkgoLdLbWnHmxvUGJmrUqh73e8gA7NmBnrRki",
  "key4": "2B5jg1P5S4q6ARV3JSGx3vE5rvviJ5XmgHjsJRtYpBSBwqPr4eLjyL3ZrnJrQhRx5XueEuFZJe89jSCD8UcLJkCc",
  "key5": "TxJsHSzLuwbHM1Y7JegorwNG38f3k5Kok9M8Tr7RcPXdGs8zSKRNVoVMSFZ5RiouGpk2PzYWDPKbCJA5ddjYp29",
  "key6": "42x7KidMRseXug2esUubXZnzjWpuX1JKuKbi4T5bQSSvwNaYuCrVPY79W6Pv75BW2iZUn1PKXkLvVox8GrMQtXzQ",
  "key7": "AxWvpa19V8WtozLBMPiMELSdvT3kZ34VCBCCNiL5HpDb9KwFCgeMA5T1CzCEy4wNPCDGbvFMWP5mZ5ULj3x7asG",
  "key8": "yPaa3Kdk8GALLzw4HBQJXuYFDQo6fHvTaMKSEgXEzZXQaEdmn8Y8JhY5fvrx5RSadKLRFoB4Y2z8txDSiMBAjuS",
  "key9": "7JUhUpcQoAzAmk8xdPMYFgMEbKvJFDggU6S2xF2oihHYQzydoixrMM69v9G8k1Lu3WSdoW92fHaw4Wd7JMPDYLa",
  "key10": "EvJvz8vYoFRyjL2xitmQmhfcVBUtzJ2GaNRUsMwDLewJuarcQ1kpdYJKz35M1x9uDFvLXjgK4A7vA2Asysyr7mn",
  "key11": "2urf7DqpgjBiMQbMEeZqnFvCAFvcovovRAduuRU7ni6XaErV83zNF5WxnuwMxQFHR8tonh2smxRFJtfEtcjJMcqr",
  "key12": "DE5mcC1gtK19NDVyv4hnMsS8ySowniJ4pnZdLDnGSRBQRJw2P28mLs5ZXR48ZG6r8RbKtn3DDY9utZpkydzDyHR",
  "key13": "4iCPXL8FM1WwvEPR468k3XRr1tet54DyR9JqQrxASJsfSPF3tC1avVKwEevFkaBaopFHuMtwM4EWos93x3WbggyZ",
  "key14": "2Vnvr5UzpREBQKkqhVHHMSdheenHxBhvL5Sdt36MUKyiucrXeNMXCxZJYta3fmkkpcyL84XKpY2B4oqet5fZygSM",
  "key15": "3Y6nSGhBGQeMEehWP8q4q67VasUh9x7KtH6eayEmty2Hz7grHrm8S3VXXmFnamxfPJeiS5UNH1G11oPfuqKAh1r9",
  "key16": "38kbSciz2KbLfFVJTr2SjSU3Ma7pmuyuZHvHrihZn5sajrxsvdcWVgwFBg4JnpUv2MW557R1sG5P3egi2A2edkPQ",
  "key17": "2hxySJ9dNSKbt9LzfpnNQEX9n8GhUhTvfPWyDUQeqFw7g4hMLutHvs7hGPmdgPkYFWTTKTpJPDyHxgYwds54H8Ad",
  "key18": "3Bdi9LfsyTYWQ9iuQA6yU4PV8mVbYEXdu7ihz52BgZJ5n7V6bBqkkrmQvBbPx1r7oisFzLoKW2uwyL7fBGXAER6v",
  "key19": "5pGEhTde8X9CS2DJ2UdCdp8BhSW4K9FPBscUw5RbJuee5QKbnNKywufGVVpwiUKs1647HKLbFbnjgoWRRwSVyirN",
  "key20": "4fwfqrezY8yYhDNSBZUeKSfYB1AaV7qyw5aQyiAB6bRT6o1NH28WcZyYF3rE4uyHPuQnqCAWs8GSSwdcvmQs73Na",
  "key21": "7H5yH8AxLwqyRwZCK8Xbjc6S9pqcJYjrMZJBThpHBQsnu6QCCiN5BJqns9S89TUUjVsBBF7YfC9tv7UDpZFpFkB",
  "key22": "3KmTKyTS7XmwmWxB75h3pHH7spTLEEKuxY1myZp6mLafiBWa3xoMQ9ar8soyHiZeMdn9Qq7YhaZ6WpiJUvXSsk6n",
  "key23": "5wjGupWYTiqNNwSwKKxGkhLhi1F5q6oe3QYCtjeNiyECaHp9g78QERRLS8EVEAViybEg6pkq6ipwPvqAinhFNURf",
  "key24": "49KAhjn8HGS47H3qPVnsMCBvmhBZpS4Wi2KAy3m7aTW6BAPcpFySPTDMkcvssJ5NNZDFkYkuaMauBRLkStnzrTjH",
  "key25": "4VTr1iN7QHTcCDFC3dUsQfjuoT99QMgNPFrySeT5Dq759CCDFjQwgpLjemvKJro9P4d9MRn9NAbh2V83XYD7jPFm",
  "key26": "5CL7EU3ebwjeGBdRKDnKvYfxLffBpZoFHyua4rDTo3toqfyHzZDpzTUjZJrgdLaFKzUdgQVZZ61g4y3Cp8DXFh5C",
  "key27": "6o6ZiEQf9LQUW5kuHuva2LhUgpoG8VZ8rrREaw15PCbKA1wB567gUTJrmtsWS6wGmMuw8vppoRqGHf9GuncowEc",
  "key28": "5bqDsCry31ZF5f5ZTTPpPWXdLYibdiuCmF7NyBLaWJMVQzooSr26NeBVFjsXhn8A4ddhWbfyKgXnyvcvRu2AU4vK",
  "key29": "3Wvi9VLvJy7EeqHtmvrEza3UN5X4hLtaYtNzWUMN3FcBokisWLPS4bZpAFrVropgF8E1D2kw81zmynTaTUZaowti",
  "key30": "2tqVXCFW9PBUnSyCcw1VxYzb9tTJRhp6zdFhiJt8H6qMthrWKamt8WgmXw3kgFHhQ6hkKUwixcHQHgtrAWfMNCYg"
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
