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
    "2GCPggTyBVNwxJfihyzv2SMEtXCg3iPX7WMWN38wT894ZGFTDMjt4r14XS6RdkyeiVM4aSfxim39MavPzz6jQsSN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YwAPJxRNd4jSXWd6FrMFmvBpHJL1V6EABpSddQhKxd8YduMsX954nuTevhHtwoXqdWsz6ZbQhNFNAoQDHb8WQ9U",
  "key1": "5HE1E5nfEC8uJwapVqxyBW6nHGZAtisw7W767MY3HyvVLRCcRGuTEkGbgA92GQ9TqdP9TkvRcVXyhdfWkvyaJcmr",
  "key2": "rAigywJ9vL4QgyxMBbWUAir8vi4Nx5r4Y2GxgtAXFmTMvMSMJAZZ9ge1tPMr9VYjmyf2mZS1RU6UZh1mUJv5Ni8",
  "key3": "5g5gjfQZsL2KgFNgPfBBBuq7KeeuTeXapz2QoBpg65cNt49oCHopmfSaFMgdqFPDFDpg1CkxXSZEV1FUvum85Pd",
  "key4": "3ekXVh5Hh66KyBvV23m8NRovhaVs9YvbMxsngN1161BwKfDk7GayKWQvEKGWRWYeruxjFZy8KKEnK1SR64DFboYR",
  "key5": "4Ck14q7j8L3xoEXfVX7d7gXBDei1JDEAAwPzsGshV4Qgp3JjHtmFSo8vHiMYvGeuLuoK9xcB2nAhMHk31V8vxxB6",
  "key6": "42n5CbxHfxxpLcDgzCuJei2YruAQfCULdUDhAUxkyjiYr7Kt31m9bLbDsRiRdBoKzc1jCJtk6AJt698imVx1Fqnd",
  "key7": "53AWgssYbpsPztjeFZmh2oXctvKEfhUhx7ate78F7Ryryqcr4n9L1LG3sG6nqubr8aTEnyxVdKDuCYV38KBs9rhH",
  "key8": "64EPcUbcsiix3jYP33egJWYFL642a8nMFZ54r41uGguMQk2YAmh6bnymnW67Sz6LbAdnJD53nukuKyMUYFhP6tJ",
  "key9": "4tW8zjU9MnP2aZZB3qfcgyya6tJgXV9ViUgXBdqPun2aKvQuZgEbFjAdcQsWWWwyc35BHtsE9i7iq1QiyqamQTzN",
  "key10": "5TF9HgSgVwDuiVJgd367KHRGriFHXWWdEnq62BrZbRRUP4XxQsd1Xkbdd1xUqeCDoXetBM4CS58u1hWuS8LQU8Mz",
  "key11": "46yD2HkAbn7KHRzCxVAtBBRxVaPPoSW1PCzqf9jPNzQnkN1M6qu7hAM81Rz8hGbKMmJThX8RTPG4i4V1Dk6iuReD",
  "key12": "2zdhaxUZkpfy2Rzs4dr9cxd1Ts9ZhyTsJ7bVGSpvDSEDM7PMpDtWXTuoMwgmfYv52WP5HZJdYYYgqz1VAkGoUpZZ",
  "key13": "2JT7NM8mXx8Jvadvj4zZA7skbbWpftYB4FtjuoEgh44J4fGsAH2GU113gJZQkdDTv8cW22R49kZJbNsbS3N8ANS1",
  "key14": "51a5y1L8hiis38dSkzzRczKEAyQJAWLfRgiggCDySpcTLbj856jFq6mkvoVuvPVFH6ujo8qHKqxU1gmq6BdtMCrL",
  "key15": "3uJeiYLf2win1J1fioTccUjfAwv1WpEZ58reCJxaveZNbiXD6osq6aJ3mgMJE13rBdi8wVqRqdxevXBHC1UQcz65",
  "key16": "4dCJUkbXvqok8wsZ9k5Q2fzazSFbbiaENtjvvkoaKyZVpjoRNeuKaXGGiwjrtvnjUk37vNzBvWagnHsre4U6LvUg",
  "key17": "5vncdAEBUzhrEdziKL9Wri8XzdeHxuMEhKkXt8n5UP5Rh7V42SspRyhEgujTtUaq1v41gzgFSwJd8Qp8WNMdq6NS",
  "key18": "5t7SGuE7E7HSNvZX8qsrWhk2dZazodZF8yigi6gBL2pjTJnTRjM9vFWWY7oBs2bp3Kg5HkkprefqfPH32mdzCW8M",
  "key19": "2M237ZHpus38p8V2EYRaDyaXUn7BMuDf5xjEw8vJpaPpfb7cGwVTXeS1krpv8HsBi3TUATzvAPZPnAM9QFqq9shG",
  "key20": "5mXNBeH9XLfPPY9RWg3284KFxGyueREsdXdnMAKswL2qPJZmKghMCgHGHHnkziqm1ez6Jr3jgz1GWFaL9xjW6HUp",
  "key21": "2kBB1WgfLc1Px8Mzv16dXStyxvL32bD4LesorVvUoTmPR9AquFf12eBwuNhvTDTPsYJ1XCyRhugcQbvnQUeiBMJ6",
  "key22": "5hCQWkNRPSfhJepNTffWS6tZNCr6gMupRunkWbZdpgzwsmK24arbWB8rCJdkAUGhoJLYg7xza5DdsGXeiPkCjNtj",
  "key23": "3vGmW6LZqPTSnPFzqrW2FE1AEJfdbKtKTEA2C5vG4b9S1zd7r3xgyHZ8kAGKNv9aUM5vWF6zojBCWsPxunDAaJnj",
  "key24": "4vx9eqyKzoJMwo968Ec4mPeGPQ8ZTpuhYLHsaWxhVEXCdQiX97ZigLRzr5KJBaZSBBP8KdpiteVYwupoLn3fTYpG",
  "key25": "3YoKWAhvcoRx4PYM2N5zdUcGG8JrVwyQB3Yxx1NY5ApFC57WCYZKjCNJLayo5jFjCpCAARyGqcMwi5JKvzF2LZJR",
  "key26": "F3e1Vfs7JGhjv3ki65NKzh36BoZfc2hKuyUZU8FoZHbgBYECqLofQ73jvME8tDJMSqpAww59wKKz6LZRNzoBuk5",
  "key27": "4fT8zyNQx9vRPW6a5UUwJvtajsUWrD67S93hB6vgqFQUpcr3R3bChLyQPGEjVVXFQZEnDLnLx4cAWAyRDqWeCJpz",
  "key28": "3EhQWDRRWKt73gQaJBSjuQdB98Zqkak4qJnD8wp45e9gZDtpvZkRuoYnrzpQ7ps9vcwDv8g59TqdKHuRM5rZtwC8",
  "key29": "22M3i14mpXjvfgb1kp5HLEjScN5aYheZkBbju7KKBU9Nabe5FwALznnzUbJfrJ5jsR1xzLLAGc6CPZQwuBDDZhL2",
  "key30": "5aFMs9Vx86MsupZ7PpP3gtCa2kKZsiyKLXQoWosxYD5ztJPUL6neHcS8SBNhsctooPSEQDbq7XbNKCQAou4Zp8yq",
  "key31": "8s3TGGywJZZYHtWyyN46z4htYGy9JJJY4jV8JjdB99SzVdLH3Xvah9MfeaMGqfiHLspFkNrAyUtc52V1mL7Wy71",
  "key32": "3gtFbB4xrgKzFtGw3jv7KoopmoG7jNeG8sfaetYJwAsf7BjUSeFVn47fnHotGAVwLYidVfB6hszGKvNCYJ4fkaNM",
  "key33": "5tsmqhaYZjiG3pKkaQAzL662FQykzLHMDD4Ep8kD9jYAXetrspxUpLXBeYU44WSwUnTwQfqNd7YJDXLAQvoCSgRZ",
  "key34": "3gNDRhjAmYR72c27etQKXoVaVFN1skTFGewgRWErx6KGsqwYQ8A9Utrh9VGdEVxZw7M2jbDLm1LaDCFCCZLaLHpG",
  "key35": "3SSDHGYQTQYM5ccqxCViv4Hi2SmNaKkzN1bKuDuidMzk1X1wkxbAwzNuSwL9HHpD9sa9Qp6jDBYToGBeztQjR6jp",
  "key36": "2okaQFe9piv8LEP8iyMD49dsyha7LZ7S6yfqSXzX92ErvgHq6JizB1w6tbjTCCx7VcjVggiGXKXoCu8dFcbbeg1Z",
  "key37": "3DFwEw8oq5GPgBrEWEGrSaNyKELGMKwEjGeF9J8tsbhVSJKxEZphahVbyDzhRJJ2gmAgWT8tzcLG8J3sLNkav95c",
  "key38": "K8GeyG8yBxE14ryri5A8tR4GoCS1fLQvVTj9ZWCR3CFHskqyWX5gqdTJJh4hXuBLTmcPMsuBhg1Wk9vJwrx56sX",
  "key39": "4ng2ifFWJfYy4iGZ94ZfBzMptSJjzjX6gTBGLdZVU7NzWiHPJvYr11bP79pU2XywSTN3T4ZrSZxtMZRV3FiuqeFG",
  "key40": "4sNHkGu4nTrbFH9bZy6Mtt4mNQQptxmkQhLvDR6D8um5gBeW6TG6hvs1jYFje4SAmNC79e4erQmGMz5dK5m36xtR",
  "key41": "4e1oHNgVoYEeasgvan6Eg74vj268Fwk425H8rwLPfue49jBEukHXBi7U7a9HKsT74nxp8vAn9qvZYaXgUr7uaCpB",
  "key42": "4Ta7bETjist8Hmo8hiBZ6C1pVRbuo2GXU1d9og5o616Siriy7Z1ni9sKamhq1w3svQWcZ2kL9WA7N3E7fz1pq1mQ",
  "key43": "4C4axBg8of6LaiuMVw6374SxewyV87Wdw6zaw5EqH29sV4RjaDweSyz6gmFtfevcWw5qVBN9u6PYbnUdRRRJrbcY",
  "key44": "31ydaweYeaTARrb7qUVYs6ja4QQHiuGq4cBzfHDEQtM5FdqUPzPBUggJYHZJWE9xZ5EsMEpwfSpTts8NyGzg6tE6"
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
