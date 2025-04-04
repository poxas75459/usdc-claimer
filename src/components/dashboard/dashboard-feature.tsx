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
    "2yqzoG2DMN483EXYiV3yyy23f2Fin6219uaSuZ7CzBj9hAM7UGoqrwYNG31nu3anbC6P3c8w6SQVRfRvoSNCv2Ui"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GmdEGaA9C7aHjnQhH45JRAedJC1L7haGL56CZF5hTsaxxPRmbsiA4eXgvoda1njd3g6b8Pa8wuMX6tP5woPHch4",
  "key1": "2AP7pzavpKgcDJkK2iTzKVWnG7QEZRUDoVRwLeTfU97niEtGwhcouGEZTJeQ5yFnKtyJ8RMVW7Hvg47tGQs2ycYY",
  "key2": "5KTtLqw4PGYUt7dYyjTzStUUsg4naVaXsAX7z4Tzb5UVWqyytF1LbRYgZKpWPMNMUauFnsWVAJfqvchPJnkgwZgB",
  "key3": "2pkFq1XAZGDihkmPv2aQRpnAX7MWCk3ue7PcaNZXib3AcoZQgfBu5fEFskT25uVVJ5km2HuF8dvH3SCcbeT3cr4h",
  "key4": "3ZRTt6UR6S22JxyMcJmF1MbrXYnAW8AoVhACzU4mLd1jjjmMwuuWgrpvy7DzB2NaEVRUKiWKGcgX2c2FTSL2XNsa",
  "key5": "5yNr18KnsQ9tdWfjDiaxqp1aGJndaFrMqc3nn8PDuqoeYc2zhpeovvg2YaL1zv8f35JXyf8SsSUkEuq1N6ZSh2Ae",
  "key6": "2xfX83QqxzYbpQgJqnKvXG1TiekoGCLwTN1CtS5o1RjkK1NcTWFmYpGsSSzokTVjSuyFjzaaqwfyGqYi25nFV5BP",
  "key7": "3rUXBgpzDUpaZAby9HZ8aj3r1Vg7UNvEpvTamMCiYWDtG7qjXRxfCQR6WxYstkAWaxjbDjspWQ3wNSP4uofxpoyt",
  "key8": "xjmwj41hCNBitDgo5uirW2ZFqfSBvLqwSZouxrX8f2mc6fv3iFdLUd4Z8Hd3tL4i3WNr8fvPRxwZvyv2CjEKW3F",
  "key9": "2prX4YRTtJ3KuVmK3CBkxJmubivyVYBRCqgJp7fULN9Wkozk8agB8ZDbp93KnezJLw3V68KyzgRNYeK5GUokzC6R",
  "key10": "5FjmSwk9A7K1WJVuSfogXnJnJqCqcrQcvCKUGW81WA8m4wP7GpGhYAU1Hc9HosuA9utwF12zxqULuwFSqnUnjzCN",
  "key11": "pMwfgtoDdF1pPeWLnP4GQfA2JxWBSBBPvn8exCG1PxG9kDsSL64SS5HcNXbZ95U73udvxC6Wj18zeBEgSiyPfgH",
  "key12": "2gtXtQ8jgNbrBL9vBdEP3fsWtGG7WneuzJ7sCSEXCFTJk7NZPKkGxW3wbHhVzSMt9sdfsTaDYTwRSRfQ1sFn3kJ1",
  "key13": "WtKdUZoL728f6bJnuuufFtRf2vTqLGm76z3HaKgK6LskKhbQE36133n98c7bfUQnPAMiaKVnzDNv9JmRFkqJawh",
  "key14": "4RmmVT7jgMofy1t6T9pGArxYkSfbY3aCwpmuhqrnGNek3d8vHjj7A2Ns7m44kop1u2J9i1Sax3toio3RUDJUGrL2",
  "key15": "3s7i8nUpgrQ9XCZdtwUNfme6SsFdPDRfht83n8YkerRzGameig4bbScHxkehzCW4fFhNMeB2EuuVQ6xkPheL34wh",
  "key16": "2ViC8qFLUathuvT6F1Aw2H1yQ3taiYtEkMwFUK7cbDR9YDFYkxn59kpi6BLHsPU1QrfLjJds2fwaTkP6WRSBhkJc",
  "key17": "5rrQZFH7QNTX5fUqoYCZLyRTq5QukDz4rEFz2SZ1V39LM2PJqrWYmXf2qFeFGY6AxQ2iRMocKR3fxMFczHzVQBLt",
  "key18": "28KJYzPUf4nwqetjEd5BJva6WTCoqm3vVikhFYHT4JnjeQgKhWivCpu1oKkfEofbm8xPh82fzJYsi81z2jAAdrxA",
  "key19": "4ZWYYeYKL5hmroJN4tKWWJTMQi89XHnT9zzFfPa9wKe39F4pdFFL7qBGKg1U12n7wRKzQDXBVEkHzSKVuSssRGjN",
  "key20": "4J9ZmSEUCVHFXJ5k6rSrCafbxyJu25byzh8NZqDgmPfwAaWs3gPUZ8YrvdWo1T4EqaYeNkoazAzAdfPkb34WiMU4",
  "key21": "3DrusVvUDRezRNfmwPA3aAYdroQfUbryMRiEbyLYc8ZvftXZwCHhkWJQTEy8PBXpJa3SqymUMSr1pwxa5oSUBJLn",
  "key22": "3C52WUm4aVVMoq6VkQpdsxfaG5fB4vnHbbd8NEaX6qTmKavn47gEFux99xE4R7M8ECEUTg5bwPwhdWJTg5ypBNwd",
  "key23": "f9PUWbzxGbH2k9ZkWWq591yr5DmZdUM9WrBfKhw2tHrDTGYF31yZ7K2KQcsWuWF6S8Yh9HFg7Ks4VaHh9VSFKER",
  "key24": "nXVkRWotuYDZ5fqzJyGwvjyS3oJipEwDP9ztcBXECM4UAUkE8Qru4Dna6ySbniF5NEFFMmLzVFiXudXdTBNFkrB",
  "key25": "4Xh7bNMdxxiw6xiWAu3vCawW5fwGFtAxw7TR3qv8bSS6FC4try5yLMZzpv6dbStKhsjAzePxQz6QsegFbfNmvUoj",
  "key26": "5pk6txX74b8z3sM4JuDqa59gG9PAmKqYLmDHLgb7DfabW6pM7tvoKgwwUMpkwsPErAhWUMqjpCBo7fRWuhoWBT86",
  "key27": "3yit9BFBiDwBchgw7e5KkUyBhWPJhwyBrLgKVSx8XJEWrP7dSTCJVU7CuSjqp1cjdQLSqBcmdxsKVj8mtjRMkHPR",
  "key28": "hJg5kU9hpyucQX48ouyjVMn4qcBUp6BNh6ookBTvXe5GEksY1Yee4LuoWzdhbyqXCcn7VmcbqYrH1MQuAiGMY1w",
  "key29": "66tBgbtZZb3yGuHC6Tk8GPmFh7c2tCUT6BrwADn7k8qsU7XE61nQdbVUxYykxhq8mzjdqGWEVcXV5jcyYqb8iCYo",
  "key30": "3LU3mFkugXf1ajTLqbstxJW8Je4CnoVPiv5JXjr46VkWPrkjU4HySDApBa8fSMhB7pWmEtzwRcbntfn5ZwzyEjZt",
  "key31": "2oyCJoc7SoVLt96Z6FzinjMRD8dkfsxDJKMiw7fvXvwACtg7GCNyt3Mq1UszQbKWKwLqgvjdbRENt2piQdP3dy3U",
  "key32": "TUnVB8djpRX5DzpYzcEyVw3qzrVAuX8qxJjPmDMEJmm1fjciFQLhvJCyc18bjcwZs7Y1UEtvYCi7juEEpSBTJ8k",
  "key33": "4cHJwSArjutE2rNdTEr3FnAmvC2TgJAhwBdRJtaZ3nhyj9WoSf9LRgXRR2mEVuS4Cmu3wNjjZ3xftqG61vTeL7vU",
  "key34": "5ZzYrneNdXNYV7x7DS5YMKwmpgDxdhgsHbCRvwmw6SjfEpwherqEQz498C1tSsy6Ys8Gbvibbs86GxcS3A74ACcU",
  "key35": "2XDPUFaVKRLawfmCn5airSGswokvobYdYzZETgJ5J6LzMveVHnfQm9LXV4LRMSRtBFSfxY1FktmGEBxY5qAKnDq8",
  "key36": "4z69cppt8y1K8NC5a5L8KnLFYwPhwviA7UiyHWgmxAL9F5aT5Hxd7gkUv5iheKxyBkjHciRi6ASEChugPwLZZWp8",
  "key37": "3XYwdkRYtALBdsDi5wi9gnQ3s7rqUUf8ptpLciDdMENPw3LNHTn3vpXiXPZT9EeMtVhgQY5eY3DwoYHLvhtZFVnb",
  "key38": "4SPZVcDeAQcUGkm1xCozUtS3T77e8ntipFvX5Hacso7ipCvFd1kXcMzTAjkcuSvQ9GMLEDjqxBnnJJpH63nBqJL9",
  "key39": "2VUX2GNNAFL2Df68rS36duSigZPQjyZWBYvcUQbxQfJnsPEwqbR8oSdi2hHmcjbBvcekqGVxJfe8Q7QS3YPtLsXU",
  "key40": "4v2PHE9mw4EwStE8LRqMFhUpAUf928FjQcnCm9vpz7vkHfmVwENt9LZzriY9KsPeM7UJAg82799q4Qjpzf8Geuwq",
  "key41": "3SHxgaDF165Z2U87PFTnT3SaavTJT7iPH7quwDU7JNYSRSLDg1pkX58of9AssdyCiB22UmvXK2XpPFQUfh63HJct",
  "key42": "h5PSE6fcdQxis2AtZAUqp169sZqwH5Ux7HEtF4reZG9GZeeK7z8hx6jUqChfvMp7HeK8tP31GCMXngT1HmYesA3",
  "key43": "DMFxXJPrZCBYSuy2NjkHvG7Byjdnj7yXQ77vHQiDhcSzxSXYLpkpGhFrkLhizMc3z9UaCCCRKgHRGg8uMQDLQvb"
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
