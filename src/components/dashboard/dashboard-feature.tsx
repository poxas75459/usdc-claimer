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
    "26ff83mgoBwNisB3hGf5aVMm21p9RffWusWQLqAJi9CJrmEBrWyNzsK4wh2PF99pXbV2UKYMN71QvV4RwMhELt8g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jLy3kDfKgW7itih9pxmfRMhweCm4cQK54W66HPRXqPweNZRAhVn9NtK5sX2NFKsdNx3dnSkwi6GytXgsCcgNhN3",
  "key1": "52f1sV31h5DHcNN9pwpahYvWtRLgZEugxVyBFac3vXLfkmKWjpxLsbn34cK8pneRBbP3d19naictvu3qFBSPw91C",
  "key2": "uTxZw7k342Ut8PYNVPXJwrtSxo1e3zWuFGDBJzqbVS7RaXZT6bfpmBgNCCCw4uoTmFZFPQ3ECLej1qjsa5fP4kE",
  "key3": "4xw9jqG7ndZ8UdcF9TnM6Pnihe7JkbE7dE53tifKCZAwNzFrvN5smexYgLdCH6jCYTL7HCxkKTu1SESwPYh3qX7n",
  "key4": "2sjNaihCfLhxWPp17p9eTwNs268oWM63tiVqCZWca3RCB1rXxeiaxzfN8jBK3vbB8CCs2XYSCDkFdTo3m6oaa5br",
  "key5": "UDTUisKktSvvBxZPh7VkR99NSV2tfkMWDevNZKrzJ55914fPw6Xpgc5ejMSFHskBMYDKy5DZcqyVPL8hY6VCfKk",
  "key6": "37ho1gxnXZy9pxpybDHvePKvR8K5yiaFcKapDiNStbzF7JT7aRR173XGNQRKx6N59rz5Bh39ag2dzSNnzRfR1LiN",
  "key7": "2kWSrYcrAFA2Qm8H8AyK1MYY9SbApoEMXGPqfmQS8SDajyShaoaqt2v9mrCcJemU2LeZXYyBXjWmULWxWZy6wZ3W",
  "key8": "naVmjVcWSmEYVJtBaJ54iXSg1zeVcAyiL4uLb9wcdY6iRDuFS3DtCc3TE1myj9AL51NuWYD2H7fx6xp6FU3rb3Z",
  "key9": "4LfYnaXebveMDx3MCUzATCZRrvywCj89CLJecfeaDdKvFZgDmTBxF2seebzdU4A4Ngbbmp2RsXttoZv2sht1Vwoa",
  "key10": "2bSrgikfx8HrGyv5FfdR2HJHkK7m3VAPBJvAuNpi29GxD43NYxmP6PYFqzp2CiMGJV6MPz3FYweQKwuttipgwk8c",
  "key11": "39Jf6L7YuRGkZjFjrBjWELjCHnoW4fnGMeYde71oDiyuSyL56r1FcfK8pfz8vVaNBUgvh31AN9qQ7NU4GBBN1tfa",
  "key12": "yGrS4Swa4rSDPxb2Ht16thouovWoz75aFGPJPKgxNHcea5XpXErdBPFxxRVfbTfaDrmRJLjMkLr7GsdoBKVfncV",
  "key13": "oavZDeHegi6Adqh5ASLM7TETv9aTU9M68LEKTXSsujPTS7Zegt25eFRzciUDQE9ZcvzjtPtHqTZTRCqHtebpjss",
  "key14": "yj84fB8HePYC3LxDezzYfYKjNMVwPoLvukzyZCuoSanoBhxXPaDdkAgtE2mRT7obhYACZXhjybLEY6thRQ9BCUc",
  "key15": "2rx4PCzaABuTevEJYvQTKQ7dgnc4uFEbAdwFDievW2TjXpnAKiuArgPjqRJuPs5qy2oxXnynn6o3FQtYgc63MnP8",
  "key16": "3Atptob6gD1n4ezeqMRovD1jQHGqAnc46GNSzSfGVveqw6APD5UumU7GdLmoTkLSx4CuMEZ7Gsj3D17kjn3ZBuED",
  "key17": "39wEC5QNs7c8Q1gPjamTYa9o2gHa429mJXtXWa8jEKTM6hMZsNK61zS96XvDq4WN1ZvSvHjjLmBC4fz122WyHrT1",
  "key18": "4b9seGjruDLssJcCadMCwcyQhubegfwttqKN7aeLss7XzfPL4hMU131ARVUiKRXB3PM7ndF1fZL3Mk5Tpjyxovx5",
  "key19": "3MCTYqGFmqmagSpQqsuBF76xU9kkHAxFRXdaDtff6hHR3PZz8csdwRvojLGjVedQ1FiD7qZYM6sm9gc1fhFCEuzJ",
  "key20": "Ey9ic37WbwWRtTBzBvTiWsjgN9BKMAcE1s1c4fePkaFcFeK8surFWfxvopCXDVcVPrEZeuZ9uP1GhhWt8T1svJ7",
  "key21": "3M3botWcoDvzWmXBTCktf9sAXtzxGZpTSyH2Kj1BD81A1Pyh2MQtjqpp3qLgEq42oYdNo469mkW3EeXGHNvEhPWy",
  "key22": "5wuXJ6cnATU2BzrQ4igaUPAa5Q8Y1evCWc14fy8FYhmXmEqMPkpfjYKiYB1iE2tiPQC4agPB5StoS1LvFPLZ2vGC",
  "key23": "4Rq323tU1zBmVctekTv1nCDTiq6XB7QmF5MxfFYn9gvaJMUxBUXKY5JcgM7RWU6sEtQc4N3UmvvqxA7NAmpy23Mh",
  "key24": "27LTxJ1BmGhg5M3RRcBUDcfHpMidYnYtgYLfkBpsFajPMSLC3CLABhvzYBm4bkRTVZB8ynLevQ1i4jaksmXaXmyT",
  "key25": "xQdRs5M3xe8nBDw9nVMo1MZabUw9BvgdkWytEUF7rAkHKduXjFauCVZy9iMDmCER6DWphEq1a7RmdNzXg6bm9XY",
  "key26": "4EvW69T18RUDvW461ViK7SB34Cz4FLYTt8DfyZbiCLLztDomRzTSKiEiCoaR9jczankxLM8CkZ6TY6ssthoMeKmR",
  "key27": "5trUMwxKD2UcU39Crrc83QxEx2QJo4ChGNXDuFA8Qem9RMTd99MZ8pCqhyN1o4r6Ti6p8vEt7R81DSBJWDa7DXxg",
  "key28": "5dNMmsjE5KjhNHHFj5LXCLd9hhpiHENBWo1kMddBW64BwVSv2M4KQs5eBoHn8FCKBsYVYKQZjRVwD6f3ATy1AKpy",
  "key29": "64vPd96SMpDLxmG2MWdJxpbcyxSgV1MVUonHLcnfU7qzjHEYAJuLq4DdP5Sou2TVrbZitmxtoWNKrS7i23usNQQB",
  "key30": "3DhGyT1EyuYEjU3b3Zct15jKr5ppLmD5YGpgWHAHQmdv28oYiNjMwcAxGgqefCb8UkRtTwFj3bs6ybhYHW8aV9Ja",
  "key31": "2s3mvACFwFgtsokYAPskMsPCDtnggBhwZTmEPdnj8eiAKeAzCQyDDVUQQAP6uBUNEcAYyVM5JcMjHgEs8ajqkuhX",
  "key32": "2JfdSDfrb8SuN7K26KyF1SMJm6QUUkWFHsEF2FX3EhxHbruYtfKFGB1PrmnhkkDPLHWFqKULLvAxAG6bP5wfzX2P",
  "key33": "4phZYiU1u6mLWyinjfUobW5EESzBqy3SZjK68szcMN1N1WYCoabeYaRwN9FVRryg6xG6qoAXjaxx4tPYDSS26JpY",
  "key34": "62G9zyfmN787GLc8kJeQ1FeLuKCcp4bTJJZCeVKfS1SURWE822zrH8dmwZ946dsMwdVDGKLaCaSxTVQQ6fMQbWAL",
  "key35": "4ZsxFWRpfN5YBF1297VrFvut3yBLkxSm6B3gpoYtfTu8CQBdHtPteZtRG99ma7epRcPCZVKfNWxvnnrzuWuMA1PH",
  "key36": "4MrRpvf1bS21gvySHEJ1CFcgrpgaW7u3bQq2i4RmkP9nA21HJM5NDhijWLVxJ6WeR4fhmAnrMVhQ4thgFi1tDJJH",
  "key37": "2kdHmVE84NQz54mArd97KJoAyDNNzPpZw83DgwhLRPzwxP2wE8FXxjApVXKAXPXaGKRJMzqA8yyoNDrCPd9qqDtf",
  "key38": "WiuTYcnX8XTjGzDmBZSodrj8BzFQc2WoEzYjgKkaQUqcNk3Ba6RfMoyYvDno4FPyFLAoFDpunQVBiLwsRH6zwCQ",
  "key39": "3Yrg2MQ94JQqsZWKGUPx9eECVCVc5WugW1hbCimgm1G3FMmEhLX77hmKaEquRDnQi4v5iRvdjveCTwaawFYKmXZr",
  "key40": "57Te5Mg95ztoPFjPWJq3ooMtc2w4DiJ6EBsjMcnMAN2sbh9cipf5At9WeaPyqedFi4eq8t7rfL1751pvU2tixZs7",
  "key41": "5DFzTZG4Mr1EHQxqc4JyF5xXjZVYPbq3E8TYLeNebd1M9dfWHN5WhzvrYtSrTjYJ3d6TC1MX6yiUNDvXyokdVCvC",
  "key42": "4P24GbEX3yBvzxRuJLVTTTqm6XfJ5MH7Z42a2fp7DPYwRLYMHwhVN7RC5m3otnZqqURodcdv61LZodhUvpFiDQQg",
  "key43": "3wve88YciM7NLCk9GqhtwncKN4Bg2hXPE6aEk5k4VJHYoa8XVGCuSLRwygeryW98988e2t8sAy6GVSPiZZQPtGQ1",
  "key44": "2LcXQM4yNTd4AsWc1zc6WE4fLqrviz67iLrUPC8N7P1fJfAu3ko9CRCzdG4CdTpftCY1QvBZYBNeARw2Bm7t5KU1",
  "key45": "5GKcQ6dgd96Yo2E3tc8Nd5hCwCeojE4X3hx7ZW2gvCzqQkCQWYVYbobUPSg9m1Mg8op8NhA5mjCfZFSj8LERaCLz"
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
