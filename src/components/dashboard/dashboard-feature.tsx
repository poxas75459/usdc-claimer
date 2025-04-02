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
    "5sBawtPrhgxaaXHwmcztEQWnsNzbJbn5XMcdvMqBQx7gpBbcGZ2PxcuvHrcqwYGHomdUUoSVwVR9C4wLHAnHcqzu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cQqR6v3ZLU8FREyevBSqxTUDY8btYbDbA3w1R937Y57oCwFFeTRB66DGFbxjXXVpn8CFxonSdZz9i7xSucReNu",
  "key1": "5wn5fwA779EtihE5Qusu1T6X5arn8Be6pxu4enRV5VThqkZon9tA7qLKzqiUvwm1H33k2VuW3grMzcsRwitfnLPg",
  "key2": "5mbJafjhFwtQvtNNu3TLiNXxZYZGZv9uDMWCne7bEbE2b5Ww4AJ4Tbw9bHZxxtNBuKE1qEhudEvoGHYPBRUnL9ey",
  "key3": "i3sS8UpQpj42iriH9Q8fmthX8L2FveXfmYFFpCkEXUXiRqAq42SitZGoDaeBNm7tGsFvpiMje3NzTYXeMs4HDZS",
  "key4": "2Zxj2x6YDycKJU56tKRiN8LaB7385a5f97Yn9y81GBSCTkp41w1ZWTNWsfEyeaMmJXze1cNbaBA8EV7hamDSZZZZ",
  "key5": "4hnKqk7PRu97uymBWUKqpRqFfLBzhPdZQjja5aXCi7nTh41pAmT1mfPKVCKXseNVFRMKnHDg7r5d89mafuWabc9R",
  "key6": "2HNCZAGdGVqeVmWinAXF9W4YPmmfU3KzAuibTRovTHVsKBzg3LzWdwhVhm4e5i8NraRZXJRvx8bZCjx73Kexk3Gg",
  "key7": "iLgDHDBdB2tQaPNGi8xP14VDsCqWhT54c4edrpXeisPbKkNshk2vgmfLgmNKQUdooi7YrHZr67kC71maKLVWXHD",
  "key8": "DGb9oG3tvdLdV2rt3m1tGP4Lb75FQ34DmaRLxCsCX9JXDKT1szVNkC41xpTkMjd6WgDkr7J273692uvEDapqqTk",
  "key9": "NmeGVW4g9QC7nK6Ki5bKvQYsLDq7txF2hFivKHaGyca9Np8JJwr9D9eZ1LDPjNJRiNU5DFFK9PjSk9ZJmfAuDyL",
  "key10": "3zzMFqYKG8th6yNeViCeLk2yUZukEZ1jSJd4qeKdAQknMgRHXDzG4EFFpYhuNte7xNmzv3JVW65hQKUAVNtfUPBA",
  "key11": "Jx1thdkcZtP8UCXhRWQwkaecrSg4bh5t1LMfyGTmxgm3NHw6ouZDRpyCKahnU3AkgqEbe2EFnzFSgrGPcUKnit6",
  "key12": "2RYXBmfr4oAdndJCeHqhF4oZPScrvpt3mUzGZy8AFVMjocBj6m56UP26GUnvNR5aohmrRNdz8FUWsAhRCnW4Gqus",
  "key13": "2VAXfWK7HhobgvLthP1SMmnEn1aSVZYDMhRe2GdxvePtjcRN7khftXKLwzqD9Zo3cQ6mbEgY5SYBk7Ft3Ywc1Tar",
  "key14": "65ig2ft1voxF7pALtads3VankcFj9h6tQ1cuL9LusrhSfXShfUSHm8yxmJSQ89bCTwqjtwxspMwziE2cG3Fk6CF5",
  "key15": "2kr5Gk5eqUgZPKDjezqkuS73XAszPNdsFmXPEXaoAcAwAAbVFKBcCoxpqLZeFfLCDULp7q81JA3SbVaZpYHpe8bM",
  "key16": "2WmvF6MqoMvqpMyPFVCLkUaNnvWna5D8YE5VM4fupzp72nvUizZxRzyx3wsfuzcHFTJ6XkYGaoZHbGjvTp2cGa2B",
  "key17": "ViiDJArd3ibGJbhHE4iDADPrDfknkM5ttz9UrqYNBpjSmEf86DyJd75KEbmz3Un3K4uA63oB5Cx6iFJnueGAGmH",
  "key18": "4u8132vwpmaLCZhMWQoLUU64zbbwfp1kTNZWuvL9zJkXhoD3TPWF7goKvhXbCXpdhptVs13Lt2GnY56qF5MEfANw",
  "key19": "3q69N8pXyCqnGhcnoBBQzwkNgeu7e1vKQGD6DVz17Ggpa5h72EBUAWCgJaimMWwPMAwVijT97N3rKFSucqiZzQVh",
  "key20": "5iAznnC8w9Uu2BEZFKrtEZaZbwHbk1mjRRhfMdCJH5ndA9XaSmy7JQ1ne6B4CjYencq6YYuTYe7g8oUJLZxaJJxh",
  "key21": "2EAPGLuWDSvQxhT5djE3jAkSENKze5VFmvYepPF1vEjSHLCbBxcVCZtorhg5aZVMpjZNVxrdVVczawLPKCc6UeC4",
  "key22": "5VpFj4XokUGjEehsFefpwCZvEWjj9jybbXFoVEVJ8Z2AheUbckbd2UrJqngD3avEzhLWVNYwNQgkyA5LRHJtejxq",
  "key23": "2evSc8wvfdBcxvKPwgYTTzmfUfrBrosGhBoGiNHYtQJ5drboYUPjUJ6xCZ24DuErBioa1zgYwTB135UygdRohiGj",
  "key24": "3zHWVuGRZaix5Pys3q7tzmWDF75fw1Py4MwQSpXtcp1MEx3HCY2rr6LkjozH4AyK6r1HQSKfZ4YvyLABECiySg7x",
  "key25": "2jMoPrJbqy93zf18k8eD8YD8UVAue21CNDgNqEsqUqrrJreMPZW5nhKCYoB2PSeVjcAEPpMA9wHp73FJvnrzdJP2",
  "key26": "2djgBc1fxWwnv6ajrH5oK7N6juBP2FTmmMWnufoRrdxKuw6fATR82LuUiZqekGcUGAjaiMDDNd3uPu7fn7NnC2Ss",
  "key27": "4LMj9Z3PpgoD9Bb5Eq9LURj6G3gZXPqRqG9kBGJG1hUS2n4SM8PnrzBxwnhECSNbMJgiEPZi7ei4nvEx8CfqK7U9",
  "key28": "2TBq2VgigKwaZHD2XyRTrn24KNxSPywavaxkt19dJKNjNZ1iztByYiJ2icoq2A5QWHYEW5RWcaEJPYuFTJEYxpDu",
  "key29": "5vG7KsmcJEtP9tNS6fuTb3NekykJYYXgZBS4KVLtqK89kF4GaZncTRPNcxav4xiVmsVNLQsrwUNjMmnPCcyE5x5t",
  "key30": "2NLnwopLFVnjDiSWNzZ7eHEy18hgxKo5gK1em2eV9Xkwh4h5BH1r14wnLem5gV45GrHK9B7cNJ77xyFkU1hApwsU",
  "key31": "4RNYQ1RB2B5VyWzmELabsT1vxRrgwA1yNswUjrd1zDNj6fKDVmF5umwLWJFKSexLGNeWACfjA3sFEZuJxq7VsZcw",
  "key32": "y6VejnfhDskUUxZggmYm475UCpcNT5vmEhomcJejHbvZFoG5uEs6ZSFVBFoMr54fhTqL9eQ7zzGenigj61WsbzN",
  "key33": "5EXYB2FyTPGYsTt8znZudTuoaHwbTjsznPGaisf37ECQZDPk8Ka9VAJXRXhqKvzRQaDZdzcSy6nstzxsD1TDncDg",
  "key34": "3SYg1j8GFpfpvviRcNmLSEDQjKTrQSZC8fxDfh8HapR4TmDWKFAr3TYATzkgTE9p5ZoFuj8gx5gSTfzqK3r7HZTD",
  "key35": "29Tr3e1C9q8chjQBdQ6Ss41mhkCjBYh9DoMxZD3kFVTgmrQQbxCdqrD56CMXp18CJmAxk62FFYwjpjNj3rPip7uT",
  "key36": "5KZ5nv5TKXMr4yHQFyozbaq715PFkuivEX1m8QBVXdFgWWEFv4ZV3NRm4Q2ZeEoCX4St2Da5VHEjjGSPzKuga37x",
  "key37": "5WuHanw1BmEKsbtAohG13RoAhuXcvAUzaWPwsQ6vmG5s1UdR2G3SatjCHFVznLUi1avMNGANq9ho6sayR7EEBRuC",
  "key38": "2ojGLhewimNQ9UMiZpkKK56vMjPP6YyZafaoX5EDu5tNB7oiQePXRUWXGCuzQ3wv22ggBEBe6iK3e8JtLo7DBXJp",
  "key39": "5rmrpgCinU5vCuyrQX9vyfcGisd7xkWTLEhq2pjoJYyN5J6gGmCeJSXwkMurDfrMHRsvqQpV6U8EEe3yZgJt2Yjy",
  "key40": "4B22p4CqANu2yoi4L24bCcjy62ATLm5VaQK1iUwBckZNec5CPNFvg6TcSke2T6UPRdsGMdsziFzuAYNDN3EWRRku",
  "key41": "2KVsu5Bqfyt7zRfqYmQVtG4j2xtqizUm6t69C7mLFrWUjspTeshvA8j5EtfDK2hCfSvWajRTLB14hpEXazagqTp5"
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
