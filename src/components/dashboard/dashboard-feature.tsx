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
    "2cnswsh2nYb4owoS26HQj8hjgUZHHFiq2Bthntv6wAyLAYoeDQT4LRUHuoWFZjaCEQx11gn94KtZdm19CB97hWQL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22di8iMwK1Sxt5tcDWg6XDXzCQmv2R4YRYd4CZVR2BMkQDGng3rL9pn5das6rVUkYeJgL2414vagVqizfCDWgghh",
  "key1": "2T3Y2eyz8AuTu3MdwGnWkNbUVFy3k2D9NwMYJNo7RHbJsVMY8FdmU9iYbZZG5Bq9tG3f7TYtDt8ANd3XuKrSZU3n",
  "key2": "5STbEyZsTvqHZbcRzTF2ZuTkBdvJkvGgXPWT2AHs8zV1fScn7ap4eJcvKxPuUpF634tzyNTTktBKassBV9gropWi",
  "key3": "1F8YZHYL9qgEAhMWdX2Em8wBB2qT3iP24QT47XrkgW1g4vzv6ne17SsYNWRAUFbwQKvkTDLhnBEqTutpBbB5jAV",
  "key4": "4LRjbNkJQz3zyMfeMBVmY4yffBsf2N6GsWMq6zUvJjiV6HNxoZyHtVaomLPLtgPPxD8ZViPDLwq7C564d8qwebWf",
  "key5": "bvgS2Wrm53wWcQDcWERYUvmLAnh7P74mptQpk77xgbYSfcEwqW5F8mPmGN8QJ3PAdRXSPq87SP82ovUeVXNnEtN",
  "key6": "3y6vRc6xz9pj8oa5EHzUKqLvrff94SpZiSrsdZ5pWxx1qVcYEJeeeU8cti5uSFwAQXq2qxJm5DmqaBrgh8FGDKFz",
  "key7": "y6H4mCiESJWnUnU7SxQp2oR7fRFqLYX5f9fNbpSR6K8wFGnmGSLarYyvtKiSCYSPF8MHFZQAANn2ENjoiJLPAx2",
  "key8": "5jkBioWpnRPaUr2jXnVbqP8ZdvXcvMrWaBJN3BGp7faZcbB6SSS66P6WCZccpLqhqh4ZLQoRY5F1uvwoWFGJ4bKV",
  "key9": "27w2UCt3xdCaaN8VsseiJ1wS5wVXTVtbRWu5ij4MDr4bVGTDS5c4h6ZWNyBf1HFZBSgryrYuWJge2qjCoBFNPH4K",
  "key10": "5UaZTB1LhzPT5VTw32jZF5cPB9ZyutxW9uqpomY3tjHfSY9t2Di9S4tXPuXecfQBqUeDkusQwRbdVcewteYecnAm",
  "key11": "3BeQJKNQ6WiQzbgoGpQ8692VqXuV3fkAWXsRHXGitSAUgaQbBisKv2J27e9BoYHfPzJJ5yVHSJYBZmZd1PBRjEk1",
  "key12": "3tgmtii2zaSvf6tYXfohLAziAsdqFQCrQpzw7m8tNwXfpf8d9s3WyXnmNadaJP7vvpybe8T6i8Bh5AJSKp8hamRa",
  "key13": "5UuHQrn2143rCWFbFDNY3qjwE6wJjaxxVFRvm63hUGBwqKE79S6ewRHLJC6Rumf89RLW6fZdoFc7YB9rGjeF1EJ7",
  "key14": "4CSWBcpQ1yMBisQyrU3vRFgdLmakX5B9BfYbssz9j43cZA5AUTcusa65XSdzC4LMaWiJc66cGxizExn1w34gBBH1",
  "key15": "3pcBUB6aptVi3kcuH8GEc18dtJJ5rnA2Esv1WvYCRfMv11oggnC1BMDcNetXazccNR38dnv5ofG93vNKogYNJnTb",
  "key16": "5xmdp9FaG2SnAzxJudVoCh5YUirmh3enCzcxkSQsRXpdQCE2Ed5TTs1WxkPEJcb4VYW6TyPxQRVTuc8GtRyBSzL7",
  "key17": "8yWAKrgXx6uEuUjQuK6KgmHqUw7oKmW6wnkMQ1m4P2q5RiRaH8C7tKU5j2izKQctfxKFiWgQGcWJT2mNwZbRyAH",
  "key18": "5K51p1h9bmG88HHReit7nbLGS6N2vrKkKd5TTcrSwPcE5dfgCVm39KoQhW6eQFfxKun6zD73KSw4Dr1wFS9VUAPz",
  "key19": "3hdkRq1Kv1yniYUjwTE1c4EC5PKDdn9PKcZQs6QzqHHLRBpGpVrWDavua4R6TUSbseoAXbrxW9FuPHXJvDQs179G",
  "key20": "37YJre7X9TG9rrm6qDedQ43Y3sCjBCTvm7TiHBgE19y9uiZiHDni7zdmDhpKFwvSFyeyDRUXpNeeFwnx2SR3xwUT",
  "key21": "etWYQ8MZKkfz6DD442euumdt8EfqMzCqr4q3xqEhxqgCu4HiKP3aBGrtoj2vzLQTLSoiUuaKeWQPMBXcL3EeP5H",
  "key22": "44BpzdvrMwZC6U2sH8vPNaKuVNHEcMnm3KWRBahU9K8dYFEYr51XYpod2Lzq6Wcf4cYc8JiizbfZMgnJZwpaQicj",
  "key23": "3g6T2NqdjXWzzhaHyHLuWeo2aURhJvrcSdU5G9ERPPwApPLe7bKD1pqzDU4haa88J8mb74PBwS82mXi7ZTFfBuKP",
  "key24": "2HXz6KYXux19i8uSSaADzHAGG3ReCXUVjRS6wsXnuL4an8t2r5ySVVH9CNaJzSdC15wnYPmmbogxg7wWeySwXb8u",
  "key25": "4a3yTdmy44ghhTyQBXyD5P7BcqnNfuc83m4rrCEo9gQsd51o119BADAFDCExhMkiZ5vcpdhqUi3tgfGqZtoFhoHx",
  "key26": "PSxNSBeTux46bYLZ26oDc6TVXC1zsbYKawKAJBrUPfrKe1ASgkLr2f6Xh2XNrPrD9qfkqcmUY4GyxDTEzxDuDd7",
  "key27": "WS5hf3bfn3K6bqDQR5wcPhMECY1BGWpZGSuZndjozEB7nhGuLnULkBNPFyauFtQDSDByfxWco8dRVNRKxUChDRP",
  "key28": "3pJpr3DFfBgjagBxZchvnaPLeYZvqLV4hCei1JmKQ2zVimC3bPREDL4LNihVZYcyTG4UVVhMHMbAKa8Gtt3aFPo7",
  "key29": "5RVa8YX48xjwwkPaGFFgN2CFaMWZGB55WNUVK54oXZm8JuJFd9BTrB6STqucMBvJv5NbPJLEN3YHsJYQVtjcYTxC",
  "key30": "BRFG14DGQVQJKEgsndJGSj44SjUqb8aaizwfPG9SQGoTpxebhj2WsWuQcd6WPVaMSse13WHAJTJGo29oc9vt6ix"
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
