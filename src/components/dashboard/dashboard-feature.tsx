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
    "2VC8HEVAZydmjNxrhVhyVejs8UzjsZxM9v4FF9YSbZB1Vkuau9MysyWjszq6DWn7uEJnhVZ5k2jg55Yzfj7ysiTL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fu7bBpCYsgNZY7dNjqA2VAXm3qiuijSZTRSCWLxhRxmuG6RJH616UHh5T6y1MRg8hdR1eLMnMdxYJo3abw8kySr",
  "key1": "5pD4TbJqLAnQjBZ6n492KfEGeD9QmtLYgtF4EJ4MQrdqVgkCNceCJCpS2RZ6LWM4BYbqvVmY59RteFcJWxxQZwSS",
  "key2": "66YdSaAmvgWbxoEtqj9bmUaqcj2HwX7B2nEMXVSK14X3Mt9fZ4Nr87wDwZmf8RtQ5H4mfCd3W5MexR55MDC5zS7Y",
  "key3": "4u5aYKeJWyrFktzNwyVNQSsSKt6bh6oKktj8UPia1jKTVHiA85ZYjUZmgGe1KeDUs2CgG62VSQ1WraYXC7fqwHA",
  "key4": "3Lnwykhn9dDs9ecu215m7sCFrJwbYgTS963nfq2mozviB1gPgTk9DHLB5enBJnpqwhKMu1rAqR9rnLMHUqj9UGai",
  "key5": "5RjvmBHESTirsk5B8U58YXPrV1GMwj2RCDxXVJV3cgrsLkiTJu2fjpvxgSuZXR9GBwdMtUm2vxZz7RBVdqwcVwxb",
  "key6": "3o3bacv3uUQ98TfTYq6mRMpP3J8SEEGGpaUxeFrso7ekoJC9rJnpLA65oJTLaqgsaPQEe5btsEk4tgRKg1oASAsZ",
  "key7": "5uGqywf1F3ginVEdz2e8n6AUviHFhSE7mxfVZu7Tcdjy5VZdeEcXgUBC1jEHTvMnKhNiNSC4m8gHsyLwRyjgcwo3",
  "key8": "4gHwBnwVfRThtfyQbhL6dNvXWezFpj4jXK3VBZbPkPszSyrKqo3SNaDTZa54m4yx9KmESwpvahr54gzycy9WLTg2",
  "key9": "2wHPFLz4bVT7HvpnvZmSobriTTX8GmXiPGSyMLTikXmTpJrC7qGUtxNHAnTMQ7onY6zMDpiWTozyjXwxyEbmnLKJ",
  "key10": "3R1rtPHbYZDnJnLQtU7jFZyR4YpohFWkebgw8DcPg1MGrTV4htRKE7hZYepCkaoWWxZrWQUfZ5PF93gRQJKiLkww",
  "key11": "4Edv6x3o6yzw3zJvZnye4x177SzhH2WdQR4gd78XZUC3Vvut1PDNKebAUXKmSPGgZEMHa3cUiPLn9NComNVDyXJ1",
  "key12": "5r1muVyBc23Pe5xhHgRDVzS8ydwAnYcaUrrKJJR469kgcQzJyEDCSRGD39M7sUHK5ictMLr7yZRtRrZW2y1EkVsd",
  "key13": "66Aq42MfgHAk8ntNZPTesNDmpYEfoxq1yhmErTFda5crnAhW6NEmB6DownVmczQxLv2gy1U4PKwXRD3HWgkszgi5",
  "key14": "4cHWcog5T9xC6ggC4duYV5Yx49KVxQo6AWw1DVkYRX4mLLTXtf1C8qrjFYFY4bwGuvoAtQDknc7NjXZLHEpWFuiE",
  "key15": "51accZ5L8Yf43JYQn2Xea6pQ2tYWpNZu8XWLkVwUB7KTq2x39P8D8L86H6Ah6aWKoqC7i6RyjG6qznkHhwG7WotA",
  "key16": "2VzYN9zuTVvHD7iLozc5fjMj8nvWhhcVAxHeJJrxqj3XqpARWGBLLGGxc8GvGTrqbWJrSGMrSF4f21uMDRZukf4m",
  "key17": "5rUxv1DPNgXEpipphzuFb1qvCyufrtCvZVDN5nPcPBFq58bzjKpuvm8ifK6AqLRBFfQtUQkfwkUU5oDCDmhfVmUp",
  "key18": "3RY7s7TM3RME9frawzw9wRDRgTfoZACPCytvhVMYZqwfuT7LS8rzJcL5NgrPETXkKEozQgMdN4Cw3eVGq2xFj3mZ",
  "key19": "2qpVpattQxaQnAgSsMWE6c2gKuTWrfmEnWa5GZnGC9STe33STFPdLDEYjajrzEpmBJyJwWgygWXfJ8MwQifzo66y",
  "key20": "V9QWL2bWurV4WAb4jk5LorP2SVsAdZoGrrHtGJ3LQjwupznvKYT5gDLWACesVHiiKSD5SE5Tk7q1nCvo4r3aSBL",
  "key21": "2vSFoyZQFyDGYtpo9CQQay6YUVEbAQQg8RF97g1BCjxjpCMC6Z5ZWLwZNr1iPXnnnMyRGPsZpRVgqdVA1B9wfey1",
  "key22": "3NKf3Fz5t5FHAEs1VJjPqSb2LtU57wKdmFxNiGDyaXt9rdh3GoMctnJJHFU9aVS9cXw24tP423vhVtzuxrThNiqd",
  "key23": "4o3Cnf17d5t4uM3Vjhy6TCQ9dBuNh2Ki8DJQcQCh1wWWsAtyFD1YsF43dwbr3H6f6sU6EZeHGR9i7Lmrw3jZt5yx",
  "key24": "4mqbwSqfB1bDQ6jiVVykntHMnkFNpGxRonkacvPdScU1siY5NM2Kw9jEBbP9eJZEAHqeE4nYjgYo7mUBskBvapEE",
  "key25": "5vuNzfLvhBGvWWp7jryaGZAakvNPS3Xe9McBEbRJ7ixcYhgKTrcNoFB4B8NMoBVvNf2vjkWFzdLc7wYrPQiEGTGG",
  "key26": "234ZPgs1cyvEv13PjQS3NN3qjBHmd3wnArotAGQ6BSGoyKU3yyAg3Uer1r4VkKLEpJz6HcupjEvoaeVTksKi2kjd",
  "key27": "5egQQqXDiNuyoPqSF1ttyrtyWgtDjrHCUk5YbLDA5YPPqtQywQcyyJFTi8UXDhJJXf3gheZt4JyYof3eht9Mt714",
  "key28": "5TJ3CdJkkjzapPUwwuMFRXpGM87BTaoLP5jnsezTaX9wmvsTQcP3m6j8pPdC2TJuxNtQDMPg4NNK8RVX6qeL2s2j",
  "key29": "4AeX1g1DEt2CWNx1G445B3zU2cAw3SkVs6sbXik9JKpju97s1H3C3a8xedBhxN1YyXCoE4BVpZDuk8z8DjCNGYLN",
  "key30": "3xnSTT4DWfZBtNV9C5d71o3RAVboYsWnQcwfyxG4x9A9X6WcvFSW9GpfFZK9H2i3992LQ5f1wLM7wuL9PakWgef6",
  "key31": "5GWtQ8YyDCVmQmcn2xA7TSowRmyU6mTDL9K76s3DSrKL4z75Hxui96Mu2wNtHGU4Sc1e28ATtijiVpg64RuDsqHi",
  "key32": "3b6rPe8okCFJXrP7ex32h1VTa5zihstc3G4JddUuFCrwcmNTHMrdmy4KZi1QkTX7iBhet5vHoZAyJAzZ4KtcTCSL",
  "key33": "39J5BDtqdJbtFhZqXS5mkunVp9G4qHATQeHt5HJJjbnTJ98jtLwBeQNYkDUELfw4QScSyaxDBP2REiXMTzKT1qVE",
  "key34": "EvXzQKdSF8FXCqDN8rsNzA4efAyVzjwZaRUppqdkx96m2dpBaG6uteZTgwZWVUc4yCAoBu9HvcpRhCVoHbPm8GG",
  "key35": "GPWHzan7avG9otzYjUMXt1VbAHkZxxxVAwgbxHJFazwtKqWwjzuDzKQvjhyyXXhqatCjzLEVNAfJhuymMioD1sL",
  "key36": "4wWa7pZsUX5AUfYfxxg8nMoMn6t6ZUwscqABwkfWsFucMKXMQVWM4x8ehBjvRtt7zcUMo4ew2t7s5K6kqAyvx3uR",
  "key37": "4L5LP3kEYzsgYRQtmH8UyMCp3n8W5xXhGe9bPEvTPNRm6oCGd11fGpqFAd4EPttftVY75g8HegMWzF57KgfroKJ3",
  "key38": "2B51Z4aSbr14ELs9W9T7t9pwubKbLi5vxZJN7T86TCLWSZYbDzyodCuUjB8U5p5LbGjDXYbANRJ3L3aTeRyxD8iZ",
  "key39": "YwAqtWRt54pxGYyzNtNzcRu2MSadJuFwPT5rYtxcfnv1bGGQZDqZs2ZoHPvD8tHUC4bZ7E4sMZdmbFA86ocw436",
  "key40": "KREVGVJx8bVn2TmtA6e4CnfW1gGagPrz5AM38YafduxPet9LhWvgMCVZ873fyjP5cxfD53GmBy7GhXqJiwjJrAe",
  "key41": "4jnYYh7sbZTvP8WrkiFofjArz1yPJjBz4NKCZacGiZvhH8pXjCFa9hzMiVv4jJRPWvkzo1bHCic7zN4AqNyZg7fX",
  "key42": "5zbrKi8AVzWQzQ9XN5kssb3Zf3T4ZerbuiYTjciK1NuEhj4b57Y3hrHccZVrxSRqLpd4ensmeCL1Wc1jZTYiFVGJ",
  "key43": "4UkhZ8naJ62rLJrr3izWi3mABvF8ogMtmdmPCE297QdqKNZYj7JzfJZDJgbob5K5aTmUUGpJiMF5aJaKphvugo4o",
  "key44": "4X4nXMcS4s2RkjeubhARHUiFg9tjyzhhVnaBrkisqDZZCa2mC1H7VDtJTXcUhajQ8FtXDMuy8wyhh4quGWKX75J3",
  "key45": "2GzDGB6DyRxmxFAVoP29jeVN5oKfLB7dfHJH5Dh81XoVWu6JhnF6cecDKRs8gEPTKjiEQ6S1uWJwhPkrnzBWNLAb",
  "key46": "4VSn461C49Rz5WCWmkZi5NaC6mrGwx1gYARPb9Z5jEak6nkPRHRZg8U5neZ26R6ucMhNzkzziAh2YXzumpoS4q2j",
  "key47": "2joAnHZ4B31BvBiRwqiLuSSm8WLyuX1Bb3jFG56TC4Nxtd6QGDnVv7c4SauJfANUMKiBoCNYXGjjzbagbXuvFQ9P",
  "key48": "LjH44fWhxsjcFgzwM1KJjwiuKjmTQLwvg5P3y82XcNDobMqH4pbVSCzgBd96xWFcUarAub3V8jgCsC4aEgb4V2p"
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
