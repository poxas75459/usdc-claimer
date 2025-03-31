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
    "51efSF3Vr7sruSqinkZtTQdRKxodDTSsXhF7utj5ixmTMjLj3tubCsLUTGhKLGgF9BV6cHiVZNW1uoWK5uTDhqJW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37vAQ3XkQTV3h6AEXRgzyVtDw11L1tRiHka3EkGzmM9ZvuZpuJvWemNWa4bfjWAcwKRR6hgB9AmT2m64vprq2Jey",
  "key1": "2MdZHv5oKKLdGbr9cqPopS9gkkvtVrUCqxZ4dFomEW9AitdXHKQXravAHKHwf4YAqv6fhfkbqgrAsYQa9JgjqRLZ",
  "key2": "3KufdsBbvd9ELk2R5m8fftpkw7wGh3moQ9K5edB2eKnb3Formb3mzAiCUzBs91kGRoT9vVYxkAqhzaqqpMYuQYDi",
  "key3": "5EvkoBt1eUV5JZuaARdSTvdnnyo9zWAdRHfMzsK7xtBkdB5YDGrho2D9RN8SDsujHY7UANbpGLaeRXnw44dXDZ2G",
  "key4": "5TzarWu1LHHoVg4KDNyyggMNpAA8p8p4Ebw5tZP6LsbospKPp3DtTNKKKRwiNKBCkPHq9ikqp3FW9voNjDvNPub2",
  "key5": "3KtFNiR46LEgTxusdVXBqpdn6F1WQf3J5RyRiJXUTvbRKHAjbWVJWLpimbPDTXFwE8V9g1mAfW2XxSWQABvUy5vw",
  "key6": "4kWdTSqQq9DVG2osw6ZYz5o7NSBowrzZk5ecQeLf7591zjvdL7TVAiAz9Rba2PoSsgkUWaziGh2pknaDkdubgZfC",
  "key7": "5wL2Q6AV9BPZJc51uxYK1zCCMj9cckMaLgcHnGiwADeNum1mAzaKWAY4fmshSYMbHxcaaGn8TEy19JtS8wSdzgub",
  "key8": "57pgWGa4QETcnbp4qDAVXEoo5YE3Nw77khc1zPK8Jjn5DHw9gbBKsaWRsUW5SuvMTwXfmYCGsW3FucgyRojFUcrY",
  "key9": "5G8YD5ncwgcjgDVxukUV1C5QJf5whMZwSkYrWFQMXEBUVuqpgL8XCi2an9MqE4W9oeT293B8GbiWXznxpfDvuBhA",
  "key10": "5JMvQ9TFhusWKmai3t4LhFpRn3sqZhoqob3yimawCBbsdKArcGNukKD8gW3yxVHSt41PjdATeSfjLpVT7vsjJS1J",
  "key11": "2t2hGLHYQYn4hBXMki7yYtqpi8LiaQFJctZR3xXrx6MbRFoHM5q9Tqs5s9QmamHafwduUqN1qTBY1i5fam9RnTok",
  "key12": "KTs18bDmGJE4qiXG195M2eG1BEHnR8Ze1fv8i9docgBVT2a7ePafhSpbGkqhaWL9WMhNoeQBV8fYUG8nPnWWs1z",
  "key13": "K5i5ECpiKmRMfgz26Ex87Arf96bChMu8ovVVz2WuCn8YYQ61BnNTQ5b17ibmZUUgY2BWrFdzVUgLnEJtTh3uf5b",
  "key14": "4vnAu3oTfhA5zzmGf4RamqFPS3r7vc5jG3TrS93jHsbdgY4FPvHzwZetRvX8ev4Rdys66gpqWhxxL9JrKPB67J2H",
  "key15": "2jUDWSyGSEbWNyXrbabzm2ccSjs7sX3bGe73uZQsVh7xB2e65wJoqyRpkNdcKMukARs7TJGtjBdVAhioBezzGUA",
  "key16": "3noLbuJTD3i4WQkiR2swaRm53ByQBPDWdHT1VDQNanzk29QJDwSLJsfzvH1iXoeHg8q5nL9HbSqnbfzR222AG4sB",
  "key17": "3sRVQuG6qwt5JELn4KCZpcwy2ctH9ULrHW1x5bxVbdFZiUnCsig7v5cJCQCpbXFbM4MdWV7aUbSC9ffAb8Fi5aBf",
  "key18": "5ovuCL3d9N4LMKkgzzCYB7HGpWXZHKMHcowdwr5wsAW7Vkv2D9s7rV6PsgK1Rh3B6dQxuRHsPA7JyUH2FuBGWyaB",
  "key19": "4N6jzr8H3iRx33T1PwxfNLyWxc11ofdD2mC9d4MqTGJipNtehLSqJS4BwfThkjKoBMSnVgPtS9YcuMTx6mHWhUzr",
  "key20": "5u8g5iQVVy7fQvmmmY9mybcPFN9p5jfts2dVCi1vQGDun9TWDfTMFLHyf3HguGZS57F1iegWoPgJoQqi2hcdaYxH",
  "key21": "4MPkACUySreiqbkDSQp2Hbhhxfpym4z9mGdRVYAmZVU8MjhsgNHSKhjE9yrksCfN9TsJZL2Fxp98gPMWVMieEKwu",
  "key22": "4FCzkHRJgnWKRowVU3GzCQz8ZBpXYijRXtiJxmJVX6z9XgwkD8qJvB2VFkU6q3iAjvXm6irpEc2mWvUeTmKeVqm5",
  "key23": "3q6PhbuW68k4aNzzEtno9ee8jaXVrG8QuowPpUH3ET16BdiA1NQMGJr9ryQsf5hZ4AG4TFenZs7pvv1nZakdSfyD",
  "key24": "2AkuvFKqPpPEDxyk6xGJJBPNwUiifNJcYr66WLntkehLaY5oqvVwDcw3v4sTodgTbYPiSedUYLJvzLiDdeb6MEST",
  "key25": "5VoJLHEzsahMkrLdEtMYwWprVzXxhKdBQdpaH53bDDeEGeCyfjeqXJYcspZwMG7xBSEbyfKpgCQePLASELMjc8DL",
  "key26": "5xgiUqKzchaSw5DmT6wkmJcEBoVwY2yidbLVoDxsHuAmz7fDUEp8GusWW7K3QnaNftnfopmgQ65x5eeH3XDMiLhG",
  "key27": "2qog8yY1AUCAvtcttFgGDDbm55kf64vBH8o9pRjaQvspAAzNwoWjh5CJS41my3e3KPqec41UDckea5Lr8nt8DdxC",
  "key28": "2CHdsiz4iUbt3zaE76ChmcJjM8GzvMhBQ251CX44QouJYeMHaCPMghLMuxUNq56HFnJ7uH3fv91YNo6uWrzSyYcb",
  "key29": "5nJWZgE4VQAD1cHTfNz32TyJFBA6Bcm9Lv5wU5XA24eMTeVmEfuiAkrip9VS41DYa428vgY3d9H74LTcvACJ3ytH",
  "key30": "i6gwFnxUS54A76ENgqGzvoPmb3qYAwz5SEy8tbxbrmarF9VJG4piUapKgNNsGWoqahpTViuLG88SwaA3sr1gMpe",
  "key31": "5aVDTeLZdnc5qCQY4HC4WfrVMkyvkbEdiJktVsb6t5Ektfc8Vb61fARLZbyNurje1DHYqTQBgwJCca4bWA39dAmN",
  "key32": "zDov9NvjhexQyfUk9hApPHbz1m36fv24k46yYghpVmc4eyAti92khMWAzhexsWoTXKDXhYvQvQ7wzTgP9E1MCuR",
  "key33": "3WbHxa4tWZTxNjRab8qAcgf4F5gRjygErCexXTjc2okuZHyUtYt8aQ6pVRYeogxSiDvoXsFVFXU6UZFQBGuAixi6",
  "key34": "aDbRJUknjBwnMrMb3kr6RNEsJxmJJC1n4Vzbo7fjeP1o5jhkhgbNeXEUzYn4Ckszb9B7puH2gJRsdo1tQVUJQmq",
  "key35": "4ohvZ5gqoh9uJDZs74T3SixvABt1QQJ9tXmjUA6DzdvqT9URpNVKmxP3fCzcVEMFwmBi83jJD1TXshY75kfB9crS",
  "key36": "277baMDUP7HXMNSfaJL5yMJ67TsnpdXQzG4QaBeHmrdxhoZhpZaSrNgJ9mL9DmUdmoDRmrxEvRtmygjDi1qpgzEv",
  "key37": "8PzVZwAGWRcvdccSCCC1y8VbhgX7WFmKT8gBUxuUVi9Qk2sBCQSMSmGmU6x7sU1vJvCD1FGQVu2WdotyzRoXfNm",
  "key38": "3gtXWaVACB5UYWAFh3LCq1AoUjSTeUW7e8nJcJ26q43BLqhMGYWPcKMLEv9YYmAGLRPiApYYLXP95GSCgkjFcRa2",
  "key39": "1qZbUVb66ot5koSbJ47WBWkhx8Vjtk6mdrBcUKMTsJffd4dt6ZudM6b6wysvkFnYKWS6FwzaTGJCvFqSSfvkJH3",
  "key40": "2PCA3HMvuVAuN5ePswKrQjPkcwt2fNKu1Gx8UG2JoHKvPs2UB3hU8in8E8NM4jGwvqxuhgkjQ63oendEGU85FGCs",
  "key41": "3VAqFsYqYZX2aEZJFMLp4Es1yXxBtzfd9v1FAfH5m33yGbSKGvntXN1FTjJsGmWCKS1fvw91A3fpPzNX4vEfbWaL",
  "key42": "4Hywo9w1SsCYjUfsRk8qMB7K61pUkUPQvnP84J5dJm3tM1yhPwhribBc9NtuT1w9jwjJkyZp7ChHnvo9JivRCA4J",
  "key43": "54GahrtrZfsWLgyGPQgdBkyCTJWcoKAqvEfC1iroHnxj5xh9g2AREosDmcKeCikb8kwkfvQVjaTR4XaTZj4Cmo5W",
  "key44": "4B5oQv2tv5v4rhRi3h8W5gj1XaVsg4FSrCtix5xtgK7zx2eQzCDomuXfnSDK8hAw643hGAtfeWLW1EZehAiTRbQ7"
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
