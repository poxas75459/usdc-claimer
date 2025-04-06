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
    "Rrgf2SDpGbjFYKuDYczqJcs2n3tMKUR6kUMvP1PJQWdPoXQk2U6Fm64cNDZEcuSWL1ndPYMeQKfZjufJamWGyum"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DW4MKQMmwLCR5rfZe94Q8iEccjEcJzaKpqkQNmjYCncZFQAUZHMHc9zDFxGCUQNVomULesEsZVJtTzvMBRBiDSF",
  "key1": "2Q8BVxGbULeuN2ThLx7vzPp3BB2T4WeJWuY7ogeXpCQqG2VPD8vMZ7sPabuPfxeW9Uo2PiatkhCGG1dgDQmakXXV",
  "key2": "KoNn5mEQ32FefvD3kypepFDvow2TN4zL5fUZXUDDS5junGqeD4TmxiwLWaDXpP7a3ycynLAFyHwCMdF1wTECS4Y",
  "key3": "3QdYfobopXp6Zsq39cV1BbRu4xiP5dgTKLffc1DTQ3n6XHD9nRCJeyZueco7VGJ7MisHwdwmJHnvd7jrs5Qbs7TD",
  "key4": "2Ywy775vv4PhLzMcspiZajJ7q2EuqntzVjuc7ipgzaFk4khoPaAPsDhbyk6DJednSAGmfAHni23zkydQTE5o6dvc",
  "key5": "4QwCxATruxGKSgaE279CnX4WMY7HVhtA2bK6Ct5WuWpPbrs3UsXzcaAmo5Q8tWogFjYRLufVPQraT5mkXapRBZR5",
  "key6": "5jZpxtZS4NH7HgJbTu7bQkftdF3NPdtDDaEgMC6N5k13jz8wej49Dez7FeSboxgLQmELQERDgvMbgWxibQtYztSj",
  "key7": "5uPj2b1kwsEiVkaX3TQBNY9mAueobtWoHhwwyDTNJKYey1NQqaMckWiVpkY81Teh5TDKeKcBPiJUEqjwLN7kFmoD",
  "key8": "48vkNR9u7CJPTcEAqZcJigdCCV4uRCZBxB9DgWp9Rj8h16YBfySqgcjqT9fg5WsbKqecsPZzSP2iVBckxtmv3BAz",
  "key9": "3beBRMe8Vuw7FkoxQcvwB5gkjydipxpEywwSufiKd3AxM73DUh1nJJVb5sSiT41VhfBbWfbsrpRMv3uXNFSV3WgD",
  "key10": "3KM5D7ikBCaTgRDxxx97vVRjPxWsPWVVQpVMGjfBaA7Ld8d1uK5Dkhv2PNHMmB8KhZHSFccs89ePLF2M3wngZY1t",
  "key11": "qGJEPUwDTLBxDECgg683JN5yeNedUFKzDgdWSg6DUka9CxXW88jRnXQ5kf2H1wDHrLeRLpZq6aAqeh7PDV9iFsy",
  "key12": "2qxoiAo7jQ4Dom5uvWY2pzE42k4k6RwQsjeq9jbYVuncWYfzks8aLdsFceTN1rz4y3wJ6KULzS9ZReF6YWyV97iY",
  "key13": "5hBVFNcqmgngWuVSFQ45619q2XaCBBNBpBPKV5d4rqaJdNywrCP9uZi2kac6GehBRasQ8FM1bqHbQsYz436SLfYX",
  "key14": "bJbkJKubJTMknYftSgRBoDq2nJkni3PFK6SGFtVYCGWgjKLr1TfxrCMe6c2GNWeouEsxK9WdRWMN9wBaghBjanL",
  "key15": "5SGdTRSPc7kKYjDCscXAt25wdUyqpEL75t9f6vVL7mpXufgyocHRpnQ64FqYugEaBVr2fkFEtTbEvNQDLMDQ8PQ6",
  "key16": "8DT5Q9aiypFRrHBtgCKvtRCsxVy2Df5bhzCfMgrYihtNQWE4cPbmh274HxtbnXhJqtH9NnhHp2yz8G3zyyjDvx6",
  "key17": "2K35KD9ctnUVsPsBAuwaZRFa3WrbuXLcMMNtGZYYpF1ALEhxSQdGNZAWPmtSke5aZbH696CmgS2LN7Vq9jHpkgWs",
  "key18": "HSXuD2pmM7xU9iYbGBzURH9c1GDgUieKwvn1XEki9TDnFJGENCJB7BU1EggpwJYUeZxf83wYiS2wL4Bxkr62yAA",
  "key19": "278pxnYbR5XPuFjepTrLaYNrhHa14NiP7ucFFBV1iXeHsFd66utT3hnouYVii5Cy5DKMtiEaK53cdGqTy9yMmQQt",
  "key20": "N71ZkHNzJNyeD2sEDUoCZoWQyN8xSfMM44KLo5XDNYgCgLtowwAtpYMTzd1PPQ2vqCDgc34x6nfoJy11jvhRSG1",
  "key21": "3Ladpm7A4ZWi7WaUXfD7rxmUoSnRWQoMGCfGi6aBPeVJPh74AXmX1J77cDP47LNRGHBJx6UskxDLcZ5RdsYxJSoe",
  "key22": "2PkCiA7SoSdYYAVeDLCvvwNkeD85hBYkjQAmrDJYCw2ZFbfBNAtzJMA6np2Wr1gzmetPaaqvLk21LHbmdcyfYNQh",
  "key23": "3meZN9vs93zgFMa3TpLPq771kZbEj1jQ2VdTZEeDcEAnRfwzshduHfGkY9wNJyHKu8JWJGBR8ZPpmspMwLZnPSx3",
  "key24": "4UrPVNktjV3q7neRc59KqE3hXwaV3FwwMzzoCqTWix8ruYZeUKM7u26oBvb5ufygwLmpQbmXxDzNMrDuzXJZJ6Ya",
  "key25": "4587XAjvKD6SfXBLi7HuUqjDvnRuyMiqeqRAarJgfQGo6YcDyU1x6MSkys4EBLX5o72uqkxcRRLER521KWNh2CPH",
  "key26": "3pPGvAGLUTVu5dGLqgKZwPNubuKoYG7oEcrAggjMcCyezqVkz7kWELLaJMBuaJLHs4WvVgvcsmY6pDMLkUzh2Bbx",
  "key27": "3UTWLwJprscBJ2d6HLD2uV8hhYNKovpMHUXSKNSSE9emKkYnGoa4VGDqN1cdXk43wx42CDfVRRZeF77fGK4Ksgb2",
  "key28": "38sAnDWYJXrmrLSccU1p7sNTXP4Ka5GoXi1BTpdW7pxnpV12YJi4nmjsheSXygSCAMxTMebnF7jnLj1cKiBzByGb",
  "key29": "5nTdDK9y8Wg8QEZduEesb8bJA7cpKDUp6tvL31oqbDVbqPNsMD9tsSvJyWr2SE12eJSEPvtmiEuYYSHS9ewsk6vs",
  "key30": "2NTKEYVtWnida4jCFRMXDcy6RDXeLRV7o189Bz4rX8EsFZ4tZgJ5musL1vePfnBkkQvgnAmHSrgwmXmSm98TH31q",
  "key31": "31yzWgXZVAPZbToFH86k3e9FCYCis5F9kBG6KHZVXZqCvxNWwXXFcSWQhvJmEPAwreAJ2MHq6Tc9BjzkmRs5EpzU",
  "key32": "3bYpUHW8hZPUm5XLMky1FX1gn8WWkeEyNrjjiXW3ZmiyzWkYWvC8p9t4qFPYKCtkds9PagQdbY4hf5iB58Kzxp34",
  "key33": "5tqWYDFLn6XGcbPvPYgFWG21J1o6vCCgVgpxnvbjuYvW8hdGxLj3WXN7jSzGSKsotetoPaqi84fXcwUzvcrUuZF4",
  "key34": "4BV7uyTMXNn3ZdnsZLqVak7VRmf4W4Q5LDjjkRWAriU2zdMqyLVoxxxnjbXSs9ocyZo1Xkt4ypWCkJ4YXjtN2vMm",
  "key35": "4UiqYJvD6qMUgmQXQ9e8oZRF1cSjVKn36rhvyY98m7FkWGdM8asrKud1c1kkrQdS8L9FVNTPfVq14Cc1sTJh2a8a",
  "key36": "nxrfyiXNnD2Nkat7S7NVhTLf7qXWBtfo1jf4jMDMLob6B9xfuHt1e3S2B4BK2UfhYUmy9mkr7SSBhRud7Zvu4g6",
  "key37": "4Hya3WeGfdiZS3ViuPrXghXgriq714Se2vZpmJfxZ7EJgqjqthx7voNiQkEc2ML9Ua29Xm6ZGEnccQSvC4hq3Tjb",
  "key38": "2iuP57yw8vXbC3EnxqjXGZpTN7oRFE9bNHc4iJTxh2WWCHue1eWb7tVKB98PHoBSMzsHwHtX2gXmNqi2hZA1kHz4",
  "key39": "4Bob7YPUcPB5HPvAm4j9i1tjbeB2dBHXfzrEazmA9SUVipJo27QJSsSkm8WFhM1CUb7ULHcUTZ85DPaNUJqwiiKo",
  "key40": "JngfGUQ4TkYAQbwch9k8S3z7Gu4A2Y3peoDjcvUHEYvPBuBMfSo9BUgUe8Jn2QEDx2s38D8uuZs126LVWC4QFSL",
  "key41": "adtBFvX654g39AXu45oRc5Q2GbzzW9QzsP9VkaeMwBeAfS6W8JMXAH8ZWM9Y5MyNq6JtMWBGFndfCG98qPRyqR8",
  "key42": "5nyoG22NvuyHHqK1PL4TTLGUo1daJ7fizRkiSR8ZqQPgGXAmHBtuT6mYcAJe4kDLCeg8SqaKWQwNjNba8M5v19dB",
  "key43": "3A2kesKxBXK8mUwjMdG7HNR27ZxoHwJEtfW76NJstJJ8vG5S7bykqL5Huh7MjjwD6CfcaBhXqL4Ef8St9i341weU",
  "key44": "3QX4f2NxxgCSAZUhdbe6JMrhBSVyS25dN9naRRzYs5i5UDUc4iG91yp8hkoUgBpucY1nq72EJST279WkjbT5v87p",
  "key45": "4PQASiFvgdVq7L1aK53EF9QRspNJfrRUWQhLmc1VS8ooDcU2xGzMhyhQPDouV6fwVEoM9mdAT53s5xs8zwAagfNn",
  "key46": "2V7K7HMxCyJcU28633WtqXpew8yt1LYguwq1LtQNijsTFajfUH9MCaNN11JNyPz1xNrUuEpNdnGXGqhBdvQXet6J",
  "key47": "uuCwX8puz5feRxhjrNhbKJZ9kYmkZHj8q7aSAkCRGs5FHiiYmwpJjCttr6FEq2cRJ7Gn88GRAY2rhahxE89Jizz"
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
