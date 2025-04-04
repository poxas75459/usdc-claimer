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
    "59rvtknf1qdWUpGULrzeySya7JWwX5f2qKAtQGJU53TXgDND1fxFA79BM3kK3bkzaPvDh1KZ9YgdRtqtZAA6oKKj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CVxBMyCnjHcvXXWdFypso3NX9TNaqePSk2A8vyFxAyTirvGCwHwPLHXpiAufGz5dErndH96uXomACkcQixEEQ4A",
  "key1": "5VsHk9tHQjfq2gyMameYuaubApVbw5KzxRiBEGbqW3BWMUbhxin7GBqKJNf5Ne9iBRSNxxotnrefffFHFgE8buqY",
  "key2": "4qthbVkqcPxnmYaZh1dcCd3LUQbGM5S7sZfqRPCui2j5FxWepVu2XAVGs4BrdGCf3RJfZ2atZb4F9hwSMs5qSRfY",
  "key3": "54QLUkWmkvb2EAQyCGLebcc4CkKsy7Ji2PZPddtfu5gkdt6bJ5PTHCNrpNuYxWYCqJbkh5Pkk7MLi66WNBybmMY",
  "key4": "5o26eftqw3FzK1uUo7hFn2QLNxPG3wrPHpQAkTKKTpkHMZ5trZGkvjgrmtfr1mh3Dmf46F1CDt5Jr6BQayqtzRCe",
  "key5": "5fg3xe8GUhgJwnidXb7MVideJLY6rMzgrUm17RxiR8LK7vRjbPgMkivG5Yk1jLjBVtVo2yuR7JCRTUP6BM4PCg5C",
  "key6": "5PxDxo6MWTUmdaTW6qjjFj7gncyaeCt8ybqUJ3F39s1h4KbpPgPvowVU2EFFvkuGawh8Jpj2DLCMXoAXRNhB8wdr",
  "key7": "2UoAGTjoTDjyd62zLs5JSF72a4QkznGMeFPeRHsT9djQZQF9W6WEfZqmBugfweee8ynrBToyJhUN1TvrHp78esZD",
  "key8": "2tybWbi2sGbraBmXk1dhSqjxc33viL6cNF5z1U7T2dJuSzJckvhQyqH7LQHZTuiSfa8eYAYR71fxpzuKVxguzpPo",
  "key9": "2FngNX8BKBm9aiB5SnztdRnKHfSyc2ZzL6Fc5K63yqmMqMUuAdhWveLNrD22TzQaXUm3v33CmR1xJwPnBY1NMHDE",
  "key10": "4Tq6DnNZZRKYigqSZ9sRCZ8dz6ZgjvZKfiG44UmKiUNwiHkkQDENwEFwUyngLqg2WA7FbgjbP9VfBsG7h4MyCXk9",
  "key11": "54tYS1t9Cq3AsWXmGtDzrW2UE96saDnntaxfG5yADKPCLChTqxccVHBjTcCBTV3no6XEcB8guvtjbY4wUYXY9N8s",
  "key12": "3YC7b8m55meYyhHsQGKbLWr4fu49x4KjzwjEuATo8erNpfxfyPBTqpN3tLF5AXsMnfHuny59jnKjLYNdjy3CsgiA",
  "key13": "P75TvUJ7f5MgEJJuuqgdMLtzMma1b2j968x9jdeeJnmsYAodSanv9iuR1z57WdVeqavq39N9xCX78wqSDeKBWVv",
  "key14": "2yos6RyPwQjfoz1j7WvjAqTnkhS6yqy9dX7UCmfYWYtJNXLXrHktVsnKPyTdH5Cg5B2LqH27xgLSjAU1L3ecz6VH",
  "key15": "3ne3r5q8H4zAWmygsYxVdVyLrhKcdBBvKdesWiBxcs3qVsQvoAgj5SmgATsYPBB4RbdHbdsH9ZykkU7TrBfUCpNc",
  "key16": "4agJgksBPerJ6vJMmBf9KaNaZoeUBHoAR2sMqcCqzrG1KXpTProXD8w88VRcpSKJRURJYRTb5KYQdzTseXv79XWA",
  "key17": "5cJsQ2QBA4fU2fjmNtiRdC1ogU85HcbyrvxLB8AD7dmhA5mjViNrMqQnSpcFredrcXFFgPjeKmufN7KQvNHU8y3d",
  "key18": "3HR39PFm7sNdxBmfA98EEEFUcLBi4rceW8SF9MijwidgDzSwcmapd16ZjJXLb2NYKTsWKuPvX2ZxhSK6r3Thiibc",
  "key19": "3psaZjRUmnUqFK5AxQe4Dg6WMJZ7TGMurJTJpJUHSXw5nSDw8CSiepaQrESas5TK88NFvb4jdK2xAKpxhpQK8wj3",
  "key20": "4ZDSVABsHQeEh2CkaJJJBAN8P5yFzCJRXJLGBUcPZa6BbEphdG7eDUDPG4UJczm44T8wBQZdr88TeWpP5dJNGJ79",
  "key21": "4CoYmo9Kz18QmSLzG5eHZUuqC7PxrQZj5bx5sqjYrRNujd6kpowMXM4ZCw2ssqHMn92aJiYAM25jRF4Zw6R9gZdG",
  "key22": "49eyHdc686SebHsUkAH3TY4YLfpAHq8M7Z9Ad2XY4s2oiwbcSi19jbaRDk7FcPxoDfeQFxCCFuZjH82edkwN7r11",
  "key23": "26pmGrE9x6oMeREEgxijWrAQbzEktbRvwvDom8J7GSMEh7eUS3a9htm41bwoJ2qGp4GGfF9CrsWsrs7Rk8qRZA8Z",
  "key24": "5o9M5NuxkUJHcZod4iNAdf5zRBaGEaMNSSgUJCtCRMVVZPv4vra8JPnY98E9sz1Jz9ucveNVNTnxN1CVNDpjAa9n",
  "key25": "5Etw3anB1kejopkKJzm4mk7X3uEUpQmEQdy7R5fWma13b6xKGBPk889DaXohkxwyvANV87ZptjXgqhksbBrLi9mS",
  "key26": "53h5Po8cKPusiKzfh5Ng69gYjJAxCRannsiqBwaFWeGiF3ZHsvbhFmQSu1KDS3VzECgDpPJpCnJZapkfCFRYnxjw",
  "key27": "5YcBjLJje7ZGZCU96qBSbfQTun1SMUUC6UGWoSq1N7ubozaEM6vWo3CZy8fgXZzW5Ks1X4LE16Un6k5qE8BzCz7c",
  "key28": "3kxY3ZGTDRaKmCKeZd9wxu57LYHb1hLLnZ4a7d2tQNS6XJBi7b662mKGtC6T48Z4MsYFx1EDoR4fRZWL3joA9t6D",
  "key29": "3nYTB3ysMVY7GTEkJFgn7tqB1NduwSMgZwKpFQm8sZ7pBPcRKMhm9KeT2pcuQJuCMCQPuEZmLQyNDGh9PtQDhLJu",
  "key30": "52jR2ftiZ5fuXVmPjGkBqGCQsYXP9ifxRyVdfRZV3yNPpLrVme4121gznL73HNkePHz1He6fqdquZXeJXGtPHEiT",
  "key31": "5891G6q2HCe7d3ar1ezZJRAq18hT7vYQEVgKEsoLRPkjpuWkg7Es4kDg8k9DvL3QJuJrA63e2xVUv6e3YR2aJk35",
  "key32": "4qm2ecUjHaNbXzgVDatFnJ6BhgyKPRhBDFMV6rYbbMKWjLC5yq1RuxFH9aFK4VQ72NNdK1TLPaMePkSktT1urFpe",
  "key33": "3v9Q6VgZB6FAqiYoLjuWgXoDB4GYzN5zg8p3JGtH7MdcYM7QeMKW2dy53tCNYwL6DKtaUKfq5ZcEfpZzVhehkMG5",
  "key34": "3aTXUR2JWjpHifgUFB8YeLCrjgdu6PogUMSScPw4pmFp67fmxDNHZCWx6ghs9UwHEBSSnNygAKvG83eQpb73U2L7",
  "key35": "3qshE4xzyfq6upLW1iFwXKsXMiayLhYN2bHtDvGnci9wn55hm4d8DzrpcRkhaMzqYebwaF5TmcbHthrMjss9XYBt",
  "key36": "2NVM5h6DnwhXftnsknE1f7eMWP7m3FpCsUGNGgbi7vfLmCEYDzW8x5w7QdM5B2bCtsPoXfjLbgr5LkAnNxu22asS",
  "key37": "HmuZNsGsLLf3chxPADBzyXwYhcFFjkA7o6KsFZakjAqr6BwWY55k52sRnNviqhuRupvHq2DRhBXjdLjFw29Hysm",
  "key38": "27VmkQMBGHHoGsMFAizuzEh1nZ791EWxNYepD1FDupgz9Ngf4teV88QSiDHKjiayC9fHq7VQa58nGBc6pozcRUkb",
  "key39": "ZqdaQ2KTUK1fTaXSKrn1ErCABMpfVv6bWLwq3es2PaSpmK3kB1F5fLqcMejpMvWacykum8A2TDrEJtNokK7yyYX",
  "key40": "4Cuoq2Yw2RvopAs2MiknW4KXNDF9WLcZdgywNqL1iWNfZ1GKfjj8fBUJP87heLqeCDzSLshMaMTPzgtwGtysQGJW",
  "key41": "2SifxDihcCiRbqp5B9ZgUEepSiwrT8heh8gBaqmRFF9ttoFfWhsGp4TwmudVSx5dECoAwX5svPFqWq3JFkk23X8P",
  "key42": "3aNs552kTGA2rB4vfWdMnBR488VrPMXaiGmioMY9dWVNLmtDBx8pGD1fvUHZRSedijS4nskbNcqg5jcmGHFeyhU1",
  "key43": "o3fYdXS5MzVm2gMipi7h9LMbpzzgfJp3m9SBg8jDrdssUrtMu3xJTAtviBMUkXCY4h6xqL5K5BBoxm2fwk3pJuU",
  "key44": "561SttMuJ41yxQk3UaZusqAiPArvaJoPtmS9qrnUUcLhX1DtCFHpJxP89TwsjSvbne5nSmgPPWDTPGAGgWVsJ3GT",
  "key45": "BSbP87bAJkbapAsonhLXvLyjGzzfnWGHYEkoDHCwT3ShX8nhcUhKtamS3mxQ42MpYDbiH9X7JH68Qirk9XU9G8A",
  "key46": "2iysr12M4qrRkU8bVMHoyXjh5Xo17oNVvzGSn9C19bM7jf355VUwwLeoy6hE7xx8uF2AabJCcq8q575rmRnJwTYS"
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
