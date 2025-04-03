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
    "5hCKq2sUvapdBStWK3XwWZpcGFS3B3NoN8zKe3mo9LCRd2nv9mVcVikQQ1CCWYS3fvXxAnoHxadMyyx4sK5zoXW3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DV8xNWKwjUzyXe3pZb34pydZyWG6YPgKeH8UXBpzAR59ovbtMDQw4P7Xj5v76Jo13nyUAuVX4AP7KTyrJV9VqGQ",
  "key1": "33jP5tteTxBNX2GWq6hS5NP4FcXGbwLZ6QwshN9pm5fzSdCY2VpdBMNdPAKWbQRBB4zpCcWZoGwaqLWhoS3fN9n6",
  "key2": "4RFvJiPVK9J61Y6JLGFEgxnRjZ9F4eqpp3ZF8yDWcts1ANgrzAHtnb5Tgh1FMhMZ7hPRAPQ7HMazmxaouWLUBz2t",
  "key3": "2hG7KSRtdp5yLXo77MsVYdmjT7NfTx36bxYcLezRBPZQJ656iAV7FyKBkMeS1vi48bmmx3642E74ppkZ91qBb2Uq",
  "key4": "2XR1hrtmZZzh1oLTHcaGe1Kv58KzhpwyBCW9893uSyQjYJuBRJoSu9T3eNL6c5GHJVQCKWW4i1g3eRxWatvq9KvW",
  "key5": "4QtcaAjtosTxt75mPBiKK6yHJQA9ifCVCoVKjYZ7vTZ4MLWaP22sPd1BDZYYc3ZiEHC5a5snjHpuFSkGbFfRzSJq",
  "key6": "3b5hN26DAhKFsByuBBbDoRpwwQqZ5R6TzoULprCX9HmTJHCUBrMLqrmenUewb7nnTZEQkDgou1GBNYtLD6Piq4GR",
  "key7": "27CdBsmFDQcY9zUwThBcPpnJ61FkVvVQinAfFEZGPThtCLVVG67ZDs7FqS81YMsET8dbVs3tAM3b3stzEcDyZdoP",
  "key8": "5TvDWa44919RBH5ZRjL6e3VqrTYnjoTsDJxcDfoBhD9Jm3WYLKJJ9iEk957XdeSgL58wvzeqUbVjUigLNxBP3CbF",
  "key9": "vci54nUksmDD9CwVhPdiL7N9VMbhfRX5xAQK7ppNPfrr7mJnYzhFddLNUoWKRJ8G1hKdv3rmLmXdrw82TGUx9ke",
  "key10": "3py5nWS6Tm2u9JXaokZU1hBZE3hy9pvynTBYgjPsimvnc4icuj63wu62KFDnRqnjGMe7q26uwEZp4ULhWD2pdTJ7",
  "key11": "2aiPkwcTE2vtymR2G45CsjAvJFsqCWcNFMLfastrMTGiAzBaBj7Wfz1BQpqLu5ue2K19rTMNHDoLhmkDAaWNT8HA",
  "key12": "Jib9SgNEa1JrgkFiyaAPLVRhtGc1iSHXUXaffuqdDFpcXNezyi12sbWkKTb82iGqczWbcGP8Kva4N5cfoGE2ciu",
  "key13": "fRbd3YH38p9tmjGsHfao6McYchhRuZwV3WG4spAsuGNzqeHftWrns1Mh76p1TgKrNQY19PQsZDsUbDxMhHW6PL7",
  "key14": "Z4xR7bjamXY4boazL78kUSPJ3wWGZMgy9SGJcTScztYLhDHmyKTM7Eh5kncuwuBx8Z9ydWaueQRC5GCegBvrbLm",
  "key15": "35K7jTvU5RGjKAedcjKpuzrp75fJZriBeAAEXJ7vCDy94RNnY4BKrW9xaCjooX6YkxT3ogXFRGnnfSxh2mn5BQTJ",
  "key16": "4QvYJELbz5WiUxDCHfmZchkW9WFx6DJhmTg6XH5mJie5xo68jytU6i4rdsN7LX1CT5p8yn3H2sTS5CxT3t3m4AZg",
  "key17": "4iCD7wLtU8sB8N7bxFv1ePzDKC7yJqmuTTJ41BWyMq7xkmCksf5GrajNrkBzVbNJsGhA7XknsaEM5ewrAuomHrRC",
  "key18": "2ibww175o7JCummekimQNXzd46gvhkuTfX96eo3xGzA2Zd9Ctcpve6yJeZFrXWmJrTAX9qaYk51VxGiSqW3RXamt",
  "key19": "3r51uat3ePBgd8ztpxmAVuvBZXcWvFDnMdbnsYmKM9LmT6iZArnN85iTj9EKWhBoaN6dMFV4Aesnbrv7d9F4ds1W",
  "key20": "4MgenZ4AQHhkKTfwXCvnSjcLfL7D1PNqGLBKqnGXy4WYJ9xvrjJja6cQcxmmHWdmq4HkYpyWy7uiWgKkpmYZj6U7",
  "key21": "4ZAfdFix4WfsePtDkLjy2E99nJB6JQsyGDboMiDuaa9bqqDZZMyaaeF8CCbC5KnE4SjcqEcugUSw3iG2nJS6KrVD",
  "key22": "41tTXnH6cAv6kPWzSkWxwBMwebYkX54EDntbt6V3qFWL69vNFVsYi387pNpCax2JLQP2uRPGwRqEZDYsctjjKNMR",
  "key23": "2rtd3ZQGByhdJK6QXXu4Piw6B3SskpxD2U5xsfzy28qAgUv6NESqnnWUjA3cfWiqWEXRzqEfAZbfokUjV1R43JXP",
  "key24": "2BSzzUtJdG198sKHRj17cQWKKywYdXcA2TDeQFSYtq6okKsp6QW5NzSW1uxmgnwji7CeYKgr5JX6WHtLAXbMq2KC",
  "key25": "4WMpuMC8UaHX19XsxogGNj7vHAcEEE8uneFYxGLiZP4JYxU9iozmWNwz8MVtSXK9By4amtiWbX5ALxLMNV6qUNuU",
  "key26": "23dxBgTcCTgvZ3EUpNNmoFYYLNJrsqiSWQTNSUuQrRWx5GQr24tjRXwNShR7P8sWiTReritrPWsNXhZ5ZdpZee1o",
  "key27": "4ZiF8qRdtYzzJpXa3BrpZCvKzWrHU3R2mNb6zQA2S9AWMZC5X1WMmfjVi3Kx4qvPaZ7FPmuUKStpTsd6fc8p9tCn",
  "key28": "4N94apkK9Kc72DJGmW7Ctk9NVKkVg4fgyQLhJfu6Ke2w2FtQnF4txnCUt3Bhkftm9nDdHzDPp1QNYZs3ixTj3WiH",
  "key29": "44iyyoqgzfHZuBZXeLmFPzbwuZrvu7ZP9WPXdCovmt6PmzVvRKE7mtbS14ej1bhkd9T4f6ik1A4gEBwA4w3Q3rTf",
  "key30": "ZdBakd2ErfWmW511WqjELxwnUtTDz76uwVvoBjDcPraZvn93MpRe9Mhf5mYtnjnScunGxnTkfdv2Qe9L1evwZ7C",
  "key31": "4zckwyb5EDsxTAPy6ksspxBLZsgbjLJk7bh5n7FcJQFqF8jqGQktVJF4JM3bkYuDSVu2BWNw7ZfhRb8mUWvKiTub",
  "key32": "4hd4JADMPPNL1KMoHgRvrfSSUrv9jSpKKS1JJbvD9X7d8aFE58nPTspaJh6o85M2yVEu5GfD9KRQKzA9itthMNWV",
  "key33": "32w8jvWeMCbF1aMpYLUW2VFHfXMQpUkgDMWV2AzvCMZ2wFdRdV9VLcEP2CPciEmEGtLJtEADZApfJxYxp2su4Pp9",
  "key34": "5Da2F2D1qFbZHnbbv5K56U8oRiXYx4kzt3ktKi7b1zq7aKVQswVHSpNtp1P8xQRci8hbEpcbSc9EwEAvxvHWKZz5",
  "key35": "3hcvQB7UWkdW9kNcr7KxPu1ezqPRC5uAyrJkkP9qGFJR1g3fwZWsuNUtPDmWC53HvHxWRi6md9kbNbB5aXtaaRXU",
  "key36": "325nrXR3TfwzCQFFHBFv48V7VLjGfz9H52dyeZc2yZh7ddxLqMLtvY12E8vqtEmR2sFAMNF3JQrH6V5wj2mas7hH",
  "key37": "2XQSVevGsKXvowAVSnCVYj2mg7RpYvWLPz84Yrc5PuGLDL3PaZ4RTc1Guae1RXYA693ifc2jaqaj3eF4mDL14rvB",
  "key38": "4nRQo6kPY2gB2GBQd433JzvVx437WkMU8VS5GkWSLqjEPsNbUS5mrLzvKe7xDn3HXjyg9kBwRqBay2LSDuq4VsQL",
  "key39": "2Ym5n7MLjBUFLvQLXAcbFA9YhtbU8oUspkUNcutJLsfjQJKouX6nEcN5CKPkF8DrKwo35rRVp9h8jEaqJNogmoJ",
  "key40": "MqBq514jQ1seHZBkm5tVH9HJJC3vW4kdWAYJgYNVmndEL6jrBHtRqkvkrtsZ7AptJPte5RTvfgKraeNUqNCrWQ5",
  "key41": "5G4xNX8rkcVq8TbZWnGqP2yCCukJakYnDUBVxtf33FMgsoSNApy694QpYU95HJQw81UNPHunyBdDLQKJDFpcSkRf",
  "key42": "3VtZeFtcVaQtDWriELPmEQrZGcb4qE9BWgty4fPMEFEQJyN3W7B9DHFDN4yeLuvUMHdKktis6R6RCRX8XDdXLx1f",
  "key43": "hhkdTBwfn1zH2fe8r7rGQuBAKoBb7Ac1WFFf8sF5e5vt9eEGGHgnQNrQWAWhQVN9bxhkFz1hwX9iD3xpRYybHfP",
  "key44": "5QSRuqDQLFn6peKJRhymf5Ja5AicwFTi2TCR6fHatbxCPM4zjSfWNeiiSmD7gw4gYftXWbbSdYBVH8jXoTKA51GJ",
  "key45": "3gBQ5eN67G93JiR5vUyaBWsQTDijM39WDy5bwpiV1UARBi2gzPmyRqP81BLq2bMkY2gUfdyMhbLNutR2Mhk8L6WC",
  "key46": "65tfvyqmGXT3aZQAjdokRWsCEftWaXznWgbEY3BhytgVXdhA9p6enufidrrWeSXVdzSNCmKrSK4dcddjiPTNAPv2"
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
