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
    "2oKCSwcFaWYHxwomtG9xYdHzz8N5cLMoYufwdBSfhSri6vAkfKQ5dadsQXouFQz25pxWpkb1qXvJynhnp8ZK3kcP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AapYPw6mtQAAwDdWF7FLiAefppjhWLb3njCJEQEEgzTfSKwLpa8zHeQCFabpdCntUVa7jj1RuxAidbgRMVVEXcF",
  "key1": "2zYWorQv8xGWumNaHmDbTNXNziMZKfGAmquydU84jCJhVFyovzPHscdGxeXMeakRujExLDvv2P2p7js5BSQDRbuM",
  "key2": "4Sr9apvKwwWqJQxdR1bmgmyRU1aDGvnHkgRRc6J5TbCbrYZyg6jpGWJAvrwirdrg3Zde5SJAMDGRrg1PM5NrD3EC",
  "key3": "5yuok44EkmyyPb6Tp1F7FDY37Z1h5EsJYcoP2YXRq1tmuS5hYgRCs2wxr2PczVSGc3x6kVKi6UyWCMB2isghVxMu",
  "key4": "5YvdvYP5erTdDhHAXbJDFNYXhUzQZkNsAz5ks9BM6vkCBWBP6cVqpUPQaTwyj6K9ZbthTSHTndVXjfYaYwgAzpfP",
  "key5": "3TxgM35A3nDo8z7mpTb4ewC4B7VVn6c1L4ArM9HuS7NnTpmnnXMptcfZfz7hp9PvmqhqjwSHJF5LAj5uUj4xTnDz",
  "key6": "4i55YWrhEr6hyRH4R9vkC6Bxh3RfrE6tCNxETahKkh57797zCUSVHtTYc4pqJ33YTSuonxadsXHtR8gZSycfx23R",
  "key7": "3MaKiSNvCRCwwQ1FCxd6SS98byQsE25h5siLmXDf9iZS866WswYcCGYZzqJbAVwFjXtyKTvjS12T57WeWzNRzbTu",
  "key8": "hALtVXbTaDrN7FzstWNCpcEWwpubFzgzhKW97UiMUwaofX3UinxTqV57SGRevEukXZGbZrcnJuCATH3tFRp2hgp",
  "key9": "33SXWunPCpJpkH175QvAX6naVkbqd5S9dSKBpBvJJdD7RTiQJEEkHZmr1jPR1UP1tSsmLc2h6e9rGiB2oG4MMh4H",
  "key10": "5u3CXQvRkNY1hLzynZNqCfUaw9F1Fvt79E5kCASmE55eD6rJNKNVU1ApR8Ey8RBqa7Dmh2sQoM2PjUdTbC96VBox",
  "key11": "5KBjKgXXPVSNYRsdsumShj9MTUopRgdJShbM44g96y4J8WFutPanydqAcKGkkJ364Ae164WkF7wZibUB5yfyzufZ",
  "key12": "5x47t1zT88PNhZ31WCa6JKKjSRgKMfBH5wLkU9y7Vgp63cJGZ73dtQF9YnFrxByq3QYVfeE2ZS9ENjWyvMZB4ysH",
  "key13": "51ewxfhtCeLnUwWKbmSzNRuYfy2dY9KejRkpLKZbJ9Pxrv6SYANgvzYtYwuwBhrKxArXEEvKg4vYPUVnGb89wZfj",
  "key14": "2NySx4bVusQB8ad9vV7xnDsP7xuePTkhrjt2yD5RhjP7BWACWzYP3iWN26EUYamVK4C7CokioumFZNSc4CgcSMUs",
  "key15": "3m2YN8vhPNf1Wy4poYh5ML69RxLxm1iqusnz1GhHvXFY8zW5GVkww5uPvBeBQF656WpnLStZu73k28AcTDaeQev",
  "key16": "4uNpJKWKf7hTUWZqFNgMF55Mo4KYHiVSeHo5XupNQSXWbr8y1PVWNAU3dgzpVDDBFsi9jQi4j72RVMgv8En4goLC",
  "key17": "5WbqdXBFc3xF7sPKDFDRCHXgyvqUVRFkb1La5aGowdTqFM5C3o4ox8gB81qe4CNYpXFKuzdA3HNg4Xs39Jet1X5B",
  "key18": "2jsBTCUPzVsxpA33jKnAHSaFuXPJq8ubrhGJUzkQ7vpVe5XpQAimge4zCzMNFPF4SCGKoEpQfBUVutGPDpovAkTi",
  "key19": "Sd3samuJUFcwVL6XCE5tCP6ecgyYqXX6kZdpWy2PJ7by48rJE3oDh4gok274HbTYuaCYbLLmVH2XJDh6gtzzkjZ",
  "key20": "21voNPyt4HqjkRiKiC7S63co1q7nTYA1t5b8w7Mehq4HQnJRoX625zG29FeyHQJJqP1zd8A5YYSgZ8fnoXyftNgk",
  "key21": "Tg1w1K3EQXSDse4R6EskYEUGQHTiRZFD6DCiABKxe6yndAzrdQxoprusTATU4ZdazRQkSuCRZ1gJTU2FEhtnuRZ",
  "key22": "MoCEbgX4eeZ6eihQF7BqpoEQAokS9DtpDHTBAT8btvoQkJadjBL4gUUMtGV6ZjY8kBGWxBnPUegP4iNt2bkGVFv",
  "key23": "54Ut9UTaE9RNXocauQdWdFZcbW41hh3oM3BcdHSpHK8TWVHf7iQSHzJt8ZstJNvgfYuZZxZKH65dp3TN4Ewq3Ksy",
  "key24": "3xQk631vwcwRcGoGRnKKufHg1jbUNrT336NUgXDK1q72h2DbWuutA7eMUCF99JLwxsf74g8RWkLC8sJn3ZFfJbCe",
  "key25": "2aSLMjD5tRL7SkaBsGauxQEBNYSTP5MSUZS4oy8J4NGM4RvLhaJ2vj6EWdRTatXZ9cPMVTcdWmtKJUTpvBWXBTwG",
  "key26": "2E9QwyyPY9wcweBF8EpDaYyecWrGcTBQ9c2hzXdmpUEcEBsLFJYzkmo6nQHrCfNe5bmvMKmSJ61Pby1eWoBTmgUS",
  "key27": "3Q1G7xmXb4ch58tvVRuYnRE6CTwNsCh4XtJ9GA1qQBKBdt74xzmwi8hbkcJxiF51YoqVRamVhrEHbBuVs1qizaNR",
  "key28": "2NNWkV26dcUvqbr9QjSDKwCwN4FZEYiQ1DntgW5mFwJUFsfFVaDxj33z84JiBfY2b6pBKCJgYPuovV7pVGN6QfSp",
  "key29": "28tzr9jjbuYtFH7zazU2EfzBi4M7tsjaLR5vXukPnT49jVbecHmpTmnZKzA6wLX6hbi2x8psCE2PEQRLBpUuEu4C",
  "key30": "2RV4QpX8yRHVrQzbtRU6toMJAPCnjrKN4Q2yE9Certuxuk4kKb9andobRmX3YBchaLrqANCtAm9hZaHydY3EDoqW",
  "key31": "3KXzXtfenwe3z5Cvnd15jpnnp2CJh7j6h5HXwEagXQu5YyZWqwBJHWdy6qK2zfGW5cGHMuaGrzgFrXVvt238jZ69",
  "key32": "5DMe8PhLLRCt7MyHypsBQSgGUbSyR34tHQA4JB8sn8rH5T6YhC4awgfF67JUy3wvzc5CphWPtjQcxT8W1gVUk4pf",
  "key33": "446ycNZrjBiRp77M1E56Z814NPZcxmKv9KWHBBZwQetWXS7C6PuxX8z4RRBkWqv13tSrqa4FBGsGcY6s9rUL17Dr",
  "key34": "5UExB15EaoTg3oZmvjh1fM4rWWzhWaKFV5N4qMmWk7x3a1mRXH5pz1uy7Ty2GVXRBxtAjPvuvKkjgTFmYLBggAJb",
  "key35": "3w35CzFQagrJMdsW8ExemaQ5NN4Q2LNkvFfM1o6HyJsRj7RNk1igGpU3SLriimNeeuxfpcwqrvMBrpC9jvtKQGxu",
  "key36": "6661BjkcXxx1YXXC6VVAPrCViYQnZqMMuHdZm6ciwQaYzMrQ4TvxfBkCS6XngvK3aoScFfHVWg7RVdx89igJBo3v",
  "key37": "5vNAhxphTfaijxe3t4rYFqj5CKx9t6MfMaBHrr9y8W4M6K43XFLVFUjY3F6wytWfDYFCHWWYiw7FBcvGicTqsTyL",
  "key38": "3yVgfJM1tE2y7a7wv3mGbfijyKcatdsXVrGsSzdxAcBiFZbhsZdS8M5EdHh2PtUMZ8hniBSN8HDw6fxWsSn8Zh2P",
  "key39": "2HZyJF27D9rkojTHsjMtv9MAn8QrRfdmPGHtEmrrQmXfsSDJ46VtcCFvEykTp9TRZAWPKWApJuixaYMdTuXT6oob",
  "key40": "5A45HPiTYYEUfdBfkN9VivCpN5zBZVr5bGVMa5GVBNGexCxkbfP6TTWvXdC1hYQB8LN1E1UkrAMsJQFeGPbUm9EU",
  "key41": "5BSCpGDiPt22AwFttUkSjsnu4sTPFScaA318wSazViyB24hrFAZzcKw7BqxWFKXRXDeswPVLpt2KhcogUbTe32eL",
  "key42": "2yLibS6eJY3cMprKKer7FNobyvNokapjCzPnsFGFm7zC8bb9kTWYrjBdmNPMFECHLb8SYZgYiwQzHQLFhf8oWpm7",
  "key43": "4DkJ3aDSd6HQAhACUSAyshZRs6tWBzVWFdtKcMbXJm8epKxaQ5GqiH4ekHjt7gCLskqMbjUPDeQeRpfU25DmwZCL"
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
