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
    "4WUKc3h63QzZ87mSAtcAfkYEpzSysD4HLcAETuePQKN4ghzXFT8yMfBsGe3hL5PXvzpxZeJyjtzUewUw2WZ1qRBK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v8Yav8EuWwQPutcJ21CMACHY8SWSiFvyVFo3nZXg6MPMiwM7uBrCC4utNUUCGwSxHmxENnEwgetPJEUkTmcVkHg",
  "key1": "4qkJsveZvW8z2EKDJFuBuZ6LgRzNzM3mYNrWbRAcg5hqHj5od5XAv6MCDcm77DUgjao7BsqiAt5HHAMkKN8NFoy8",
  "key2": "4zR8qRDDZ9xqJzNpMcYdEintE4Bq7LDQHkiSnGgrwKSrUr73QqC86hsGUAot8cxEMW1gcN7q8dGhjT2Lzjae8v78",
  "key3": "avvnyLZf1onfpTxG33bz7F9xP636gTizsQNPvsYPHn9GM25Bv6C7sR9z3MBY1EYH7DMF4q6zFEnZzLb1jFsyP9C",
  "key4": "3tffdjJ2FWAbjMPUZK17mhYENqeJNfgNBUWGKfkUHNW6oerDhyhYayhqrWFWVzqVTTphr8sYux1UzUxHTmiT7Z2e",
  "key5": "5A43mkV9wWSn1R6eskzWuRxZsA4ttkrgETAfvXVMz1qDovPYWG2L57ei95vkVNwxiKADsv4MUxWhMQSYnhhtsQ9u",
  "key6": "gSYC8MpuqZBhqx4RLmi4ER1SMFoW6zSPSmFCbqwjdjN7KE79WpFcXGWVPx2DbYLVXbYshWiqirFZFZ48xrjgXWD",
  "key7": "3x5PwB3UdiUeNAdJcEgrWpkEUmGcEVseU4hN2Q8NQJDd7SU5CdQRHrJUJusfkGcf9tvkvZd56vmWUjkGesw4qGZb",
  "key8": "24tgQt1seaBAw5UCEGE6zh5sKk8jfKfmU6PUZYoePehWcKjkeXp4SWCsHwfMzb6HqXFyCdD4vuVPcByTDrSZNt61",
  "key9": "FNXVKCYokMn2ZJLd8SMiZzPDpXsDJGeX5zV6Sy9aiFfgdNyXEjmWQcvnKSP5CwmqYEDK6kpkLyFm9TjoXeo7RHC",
  "key10": "2fVU1yT146N9ijWYa8oAWx4RyWEKeVYf9WpK3buvCpDofcTvRiDgN8qx5iLei4ZMCUJjgFQJKA1Zdskdk8jo7dpF",
  "key11": "4WWGzWyo8CoouuDr1y5zxB6iYrXAvDFhQjLscxbYkgX2BnD5qGRSvSc4CSrTzVRZyxDoh7xFG96MeBduteYMPXJT",
  "key12": "GwthJfdJTvdx9EhzGSnkrfx4PuBdVt5Px5diM6VAy3j1MneYXAZwxmgQQdhKzeMbDZvF7eZE5oY3qhoAtdoDrT8",
  "key13": "5JqXH5kmoGFTvz3Rx7Avi4Xu118XhDLXpvqgcQubccqCU1xLLp6ahMjZZ13LNxqbywfDMGsKfjM1NK3wdy5TYcuL",
  "key14": "4di8MHMJPV15NyPctrnJH3kp9nvxFB6ot5j3GZ36zch6qsvNzTJaxhvuCvDaqc6rnKLc5rnwzZJwxbRaZUZf2joZ",
  "key15": "5bXzpY4ZoR31PEW1BW29EZpDRjJqTnnPv2NUcHy5KrW6Zr1F3fj1gx85bzfV1Hf9XXci8Q8qm9cRjjrEvQXC77CQ",
  "key16": "2bipQfgacNAgM95XjmtTLTPWHury4qZhbSmtiA35gNjfczhMPiw88biLF9v8q6jRSv8LUdNAq8xcsbrdhLWjQAcn",
  "key17": "2VaLgJs4HzCnGVqGA6aV2yR4y6L1t9ziMzWyDTEmFRMWTp518T7dUWGAdBgE2C14huvdo7i2VKw5hw2G2Se2bRBG",
  "key18": "4tF8uqAhhfW4Gr3YbhshDDyoWPTFbvTfKVaL2xJw2E372CYrtcA5wZYorHpGzLDnMhQfe6hae76CXAjxBYZo2RPL",
  "key19": "ksR4qmLwnybTLFFeC84nmrWd7bpH7C3GkfQVyTDWEdCsdwLJ3NHcKCCAaBuid7hqH3RXDzR4kprHQ1or8c9WBVy",
  "key20": "5RyjLy8aGaCqjYpwkEHGPxuMWK7o2mUtBontU7ANrHfTZvPhppMibBA4U8VMS826HLXBmjacPQ21PHqghzRy41Ud",
  "key21": "opbJMogtWxvGZERPv43sdudoABpXBdhoUXAWn7KZjyDMQX8oUPZYzme1YpgWDQNH48AuDVX96ccv8ToGy1WCKWs",
  "key22": "65sEAuRnw2CYJaFWkoRpetY2cZ6Gtrvbu3htkCC2TAibeQeAuERGVQLdMVU9BQTxSXMu4DL5vdtwbgnovgsKiBCD",
  "key23": "5vFm2o9bYAVqVGBKcCW3C8W1arFnqHcsrikKFztUsRhUd6q2S9oNSV8JNtdtiAxZ94KFKoDdDwsoGkjkFfUEBXzk",
  "key24": "cMCRFgjXG5W6qdnSko7uy49uKYASA7XwTvndMpa3XXtaoiHUuFK7Uqne84rb4LwCpn5VkJKq3Bqis9EzHFUtMLh",
  "key25": "3rio6XTo3LPb2RwrmbW2wi3iH6DjEtaHpg7ARfjXZJ7iEdmHgGTah9uae415RBq5622GP2pyVuV54Wrcr6rR5MwM",
  "key26": "4s8hVFvcC2TMTwviESRqp8eiHcu8cu5oKYcnwUK44PhrayDvLsS5rVyM2QDdA7L7QwxMjLeeujG1b6ZStsD4361d",
  "key27": "64Bmk6WNBMAZ14jyi3e71La8Vz4Z9CdLocgCqzp1dRL8HrKbDDx4geyzJgEPnaMhM44Vkx31uovGMmxhutN9vX1Q",
  "key28": "2pzhBPRqcsppT69mtAX2ecyUUtFVTfXFhW8iK7U9fCXBXy41tVyTiHnAYuT3xZ8YW9Bx9g7UvREtCZ6ba8VpzsdS",
  "key29": "4aesFo5ZpVV9xdJnMasBFmT7hzCcm6H5zvDVxXyEUVKgxNYwF4d98ypX8k9vYs7k54ea6arr2CR96fc9UQ4Ha1Tn",
  "key30": "3XFCaLENzmsneF8tRA1zQ1s2rx83qy5ZyePDSd5NM7zZJGVZxQoQvrL5JTfnxTeqzbA4d7J1vhMkQqc8ZM5RQiAi",
  "key31": "2LbPQERbLa2iepUxCMFyZGiPRGY7ixGHgRYfa4U7qoGFbbsQZzjnr4kF2TupoQoA6Fy55y5Swp7MF47XQS4NQBrq",
  "key32": "4b8btTyNyY2xSuN1XHWZvGwDjLzSiC237GnEtVfhuZisuicokiJyVRp4RR3Ko2XwAMVsmp2L7KwywKRGoA2RbjRz",
  "key33": "4Ngp2Es43TcnTgAgEtpSuz3JEQ3ZT5f3ANj3GAZsejmsjV9Mba9bPj92FEceRwZvKj95XbH6arP3Yagp5XKFyTe3",
  "key34": "hDFVsgNt9W9fgm14irxZ26GKLCKNiGn9xzuK3ai3MDYzXd3xi4UWn5nqJTPq8W1bPqsf6mv4kuQpAf4NAkV6HX7",
  "key35": "GFmzt8XeA5ozwyKaGpq28G1SEXeEvPsxFf2tmQ6M2MQgxcX6wBrPxwpmMXH8HqRztjcQHD3weLn6YJFpABgmejA",
  "key36": "5zwGKGJtchPUy73GDWAMH8g9MjB5fKgQG5AXSmAQshJAbSWr3XRhCLgx6EiiPV3ecap9cUUr5BpWi758tfJMCWKw",
  "key37": "4oC4oAXgxhzG5byx9bLQZP3LNprDKxACXJ4vx3FUQmJdr6sfoaauPj95Pz8rQuzFfEMkm878i61rhuuYeFNRQiba",
  "key38": "4Qcpkof2wfz1CnQdPNuXgnke492eRVJR6cxJUJaq4JWqou2RfUyQxePv6dkG6ge13447ftzwzWwXWJ5T2i1w5w3L",
  "key39": "3a1MiTWgGfDUy7qZEsB2ur4j381Sm4BpAKYxoJrw1ZvbpHenrtrRUMsjnnX7mXUADZxxqyE2WeD3GLHGGrVLWqZr",
  "key40": "5LBXBLJ2TjEiaDhUXAVoVaEmDK9ceTneXPzEYVRbQPBnNRMQXhSgJGpdDTL8bzsWYPPRAHA4YXgyL26ZKMZC5Pxa",
  "key41": "7EGPsLUf76SAFu98voLeZzxdyKYvZmSvgvwBBZdJPhYPPKwDqrpnZ1jtJS12oH2LsUpuSu5P9mNKkZTFURLR2QB",
  "key42": "3Teqtre3sR2LCW8rTazkrZRdbEJ9V3QjT1cq4muLW2Rvaq8JAdFL9z9kuAWZTaDa9JCgQFcT2NB7egrJnG2Fum7g",
  "key43": "5YBeu1KYNABv58WNCKn3VoPABz44k2DaqGCe9xSAhsPg44hURWPjmjL51F2oES6bdAwoDPhkvjqMfxHdJpKHr8P4",
  "key44": "2d2YUTdHR9iG2sWXXeGJHAuMiGx7nEr7awVhsCdDezx6p1PqGPJgSpb2ytKijjEmzCeWx1AT7Etk5AmcHaEDfTmv",
  "key45": "3NT1UYSfqUsF8YY18WirpwHPcpwQ3Qt188FPWE7hf1iSMEMPtvVd35zepHgihtKb4ZVN72r2eztaPH1nWGUB13s7",
  "key46": "cKy1tL68RtDfT6sAq6HLFX53x9ZnAezKr3v7SEUT1yiVFme8KT4dQGPzxccS32pHx4gTVxLFJN3Fjk47efnVuKG",
  "key47": "3wZ65b2JEBKK9SqiF1xaL6HK6DEhMkj7uRHAPr8ZFyE5vQxugKkCW44y6XSCQfehGHW6464KUKxLGVa7a4dpWQ19",
  "key48": "48ZQjHguANq97d2M5VLdEEN5Pu1qy5nAC9WPrLq2TVyw68bAzw9LhiFXtBcdfP7dU746zUi5HekKz3kKRUE4KuAo",
  "key49": "G8iRccBtHZcahxpGRD5VxyjuQa16JnApPjzwf3B1aQMkP3kkFdQm7qWQbLQXNQAaEm6dLSc5drtrfzWuCz3JYD1"
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
