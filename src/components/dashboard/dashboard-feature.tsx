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
    "5WNUwQmWxHh67GLPkt6PoYYpFHwqrAMsyPgGac1NRRkEcw3iHJ9hFcandjDP9CyXBiqNkJFu2USHTBD7V6qFxSEU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XriEfaTyTtqJGkqXkqKk2eAWdBEHZMgGXzyi1LjUWsRNsHk9GApNKQvKxi1buzahehRCsiL4HoCQKNHCrfzxhQ3",
  "key1": "5oSErhb6VGtKpdtWiuLkvPKJS7a1hiMMcoAAvMQCDQ3AuXiQRTGbvGtPXFeTMr83iWFfboC4u9pzdFziYrKfEBs6",
  "key2": "3pk7HhrtwBdLwvXJ4wXajK5LnzVuqEhJeDKbjFpmXRzMUTFJxwU4rBu5DV2DyxdQvBQY9gYUaMFCNejndrrcFhcf",
  "key3": "3FYPYGNCYSdV6Qs3ds48wo2bhzCAZUHqNi1v7MpPk418tyneYReXroVX2n8hMo6d2RqNRZbf3AqmbtMUc7RhuKQs",
  "key4": "3DRRQsy5TvesY3iZapA4b7DbDoRvimNhHDrNaoB34w5MWnemrUpNq9AvYivW2ovuM8d6UtPQeS6y9wNkXjZSkEZY",
  "key5": "3wXV3d82oKeGR77DgjsR4A36ZyM4zSPckFUbgnX7sT2bdRdgtFeXL3mrhMXMiCbZLJD5M6ByFvSRwNC1ksP7PJiM",
  "key6": "AYHzjE5PtZaerbePKJq3Cc7foWGWhuaYqoyZsN6q4t2YKcWwwMpZESPEjTn8qfRUkRFtbvbCQZ9pt38VXKviTVp",
  "key7": "zCsB3Wdx1TEx75YrMvnZ9ZwtUnhBqCNsQ68mGyk2nQqYveRXuz7gikpJAWP3FasvBcRxfnFLwUyucoDCnx7T8xw",
  "key8": "23x6Qy8yDrBDc3Gxya6PNGjJRqHYgpyDyFMmTLhKqt73Ffe3k2fzuiDYzAfd3MiuRbHjWU32AdRfiRVBz6acWFnr",
  "key9": "252mQLNupMs4qsX5yMyEWcoDZydLi6biAx4oiA2ch8EQcdZzLiovZAkpV3NQJTqLtEsxqNoDLTFVHUgTBVLADQTm",
  "key10": "4dqumr3Y6rgA8gcuB3KTENMizo7h47Ut4tgLCKpweZAWXovezVLRzZH9YBfWJZqpgjRMfBQmftK4Q1fKY2Ab8s9G",
  "key11": "51e9rBd3ox18Xar9MeTcvpwd77sBF3s5RcXkD4RPfYfyGyDrDboSyC2HZuoyihoUEPZ2KvvyxiYVwf4VHwJGwAm7",
  "key12": "3JspZgi9XBzq9wEcFPsXABeYLrFoMTUNWE55tnYRbwcqtgeTvmp1qcWKuq23SyD1GPZBKFMzVbt7WyKwLbFKZqKD",
  "key13": "3DqnuYfzyAS3Y7nydYhCRCcPmTiQNka4A9fnEH7XHPvtA8FF4YHKAk4diuPXqt3PUSeG45hAovv8Jgj9akJNvxTo",
  "key14": "Y7M7RjBXKhNJ6qsYSFPXmvV26JtETV2btq4361tfr4ssPR5Fgidi83NCo5XH37RiNrqyo7JANxhYeKB6Dt9PUNq",
  "key15": "xgcX7gk8dPy8PgjP3sMnDUjFDTWJowvp6Lv8CtX7gP3RoRpcuaDn3JHZVNff9ZVM7TQnarNqM3hrtJzJgthvyng",
  "key16": "679aqobVLtNBtzwuzv2p76HX8i4UM1CJYFYnjFaCcJk6SbGVmehxVGRbTP2jj9UTxD9w36SBXvAFQMRe1EE3W8YS",
  "key17": "39Lbhb4AGpbURvQKSPnhPvcxb7ad6yvdZ94y6RLSHoRPTb1MXXKVeNhxm56uHjQHF5qojXqkTZNa1wY88AVNqMDA",
  "key18": "3oMnfdZR36MBftLneW2xUPmUV9WRVV48RCEsEhcSYSht8fmd15Yef8uRz3Fs5JnkRLxb7yCBc9EdbwfidahtEKqD",
  "key19": "4iCuQRYVrN5YBUo2WxjxeV6p837FFUZqbVrLKUJsztRHRkY6WsdKVtH8F9DR5rd5RmCpP82Xc1iHCJftbagX28w8",
  "key20": "2uvn3xvryVpGFB6E4SrmJWEe8NxCwZFqa1ZmPUAxitWETJevqqic5bjmxtkzZ6W3RgqwRRvJH98CFQJYh7Qh3oWx",
  "key21": "58vHeRd14LLnMJMGhUWjfb16Je1ioPnAmcTZpCgv4tsR6KrGUaVpyN786Dup7Cpnfx5b4U5h64eLPuEqUw5SLvL2",
  "key22": "64u9eGkoTVvZMfUWsYkitL4hjVFfPB2kER2YLe3tpy3SKQU2ZRbSFjG6yccdJbZNromodJnMyXHW4RPh8vWjCppw",
  "key23": "2h6M3Za7s6KbbEqdQkKeSFyh3utu2ifM8PhkhgEDvYAhRg6wT6BGXBWKobH86NdLWn2Tim7uiFywWRE3tLkCFS2N",
  "key24": "3xYrM9MJZ7Qh6CheKZGMvuSvKyrzXSdVa1bEBtci9Rf2p7NUueQ6vzTR4rLKuujebsFvsJBmNhEmjFNj5FyGPEqE",
  "key25": "nfGBt5645pfbwikMB7oywdfE39w6qR26EBnG4osHRVEgEJ22S2t65bmGAxEvCWVjk5fNFZcgvu4vb2KYA9uzVEW",
  "key26": "3Gs15ZWm5hKQdLBJ1FHazHSNwmYeveyYTSRFsNwUZn7nMziW7BedWSbDQW6HbZ6KPtF5VNikRwPt7BJCF8MtDgHb",
  "key27": "2bQJu77tRk4kiaRGBadtn5d6wxjNwWGhGej3TU9y5jWu925FRSYvjR5kLmRpciZGbfxW6VdiT59xvF65bMn2QimT",
  "key28": "5FmsNoVP6B2Xtug3ogRejiwxkfRD9heW8gbArGdahZUWtmy6XxBt5tEuxHsvT2t5RMugDu8mAKmuMFUxr7SeKJDh",
  "key29": "4VVWRYCAZApm6jsc3AibAmLfB82WjbDwopyGAn1ym2Soq4ymEpEd7MPLhY4jxNgit4BL7buGNJ3a7ejpTd8nY6DP",
  "key30": "3aa87CGpYZ3MESLZ3KPBRDU4o1ipN9RbQkFLs3JKdzzJs4uaf9c7ZUGhDWxEMHHbCQrYRMsdaJAiXUqJMjwzXbHx",
  "key31": "dxYp6vABrALW6jHoKKNDgKcnE3HciZTQ8hBor4YKTAjrZAFEhc5xFruiFwZLGmEChtzCd8yjz2PPgcUvJdDLZ61",
  "key32": "5cqTXKAUSZA4xJHwH3k3eN1yDr3MtL4B5rUqc6miJW5iPNfrx4hdjbQ84k5cTfzJJrwodtsWvgRaBdGSYxwMed4a",
  "key33": "5cqhLTBZ57wf83v9BwJGnab3GgCnBY9sqvaw7FY5Dsy8stiWa1UP6v1Jnpw3Cn19nD1EmE2HJgdp4MD5XkrGr9Mv",
  "key34": "31xBidYzJxShwYuYnJvnK4YEeDUd7MNmp53Mgtqa6UtPmTRwSpUBosXpEmDvyVPgWHfD8nDWiTwPe2jGLbw9GeQ6",
  "key35": "5EsNzbYZWzYuXuMz5aj23w3MqQp8zUcBPMxpUR8EFGxuDyibASdvQdTniQEUE6Y8s1oF6bToAUxEAxKeqHg5VGbm",
  "key36": "3oXk1Sq4yZ3xDsQyCRSYCVEovUxH7hmWXtweT6KgKNr65M6K4F3EDaLVdxPnaNManYRyKuDGXJ8KrL3RAu7cm5B5",
  "key37": "62sLyAEEjebkQEGJ1E3oZZajaWbiK9DXnkbWzAi6mvZ7aniNcvHaFzE9JsKR7wZ5byfm2dAqgZ7R2qDURkQMqjiE",
  "key38": "ddKqnFdU67wgw2iqTLWjXZ4aRxZMHr3MfLvnAr9Jw4JFHS2LYi6rNWYBouwyVvxc2XHBnGYgz57EhwyGg1Pccje",
  "key39": "57ZtfVcnSe6XJDdjFLUg9rdGxF5VstDeoYusZtfuL5X8b4sZvwBW9BVcx5mrFPtPM34YvYBvrxG525KTVW2PJfk3",
  "key40": "5DDeddZqgMFcb5QRDTDPYK6XdAn99AxXUpKeqG2ymdbVuUfXhYKavwdFNn3WASyHxB74mRc4hBW8LrdYRoNjuv6D",
  "key41": "21BsEYiUDDaaKbThuPs4jWnazSeR9XCSzDT7F9fiYeeRRUmVaK14oxFwn3kc7jQwdUPZcovrcxQMVPWXKQpeAMQh",
  "key42": "36NQkyxveVjBa9Zr7wiAModqb7ayo84etox3H5KaCuJELyh4JE9LZSjMNzw3kb7GRBS5JzPjPHAJGBX99umBrmrQ",
  "key43": "Ho9kBCHcNnZoMZHG3tYaz9ghW4aaimUqfQVNdVm2YYEXfhWssGgPuha4zcbBvBMsUTKenc9WYuKQZHvejLRVnb4",
  "key44": "2MMXc3aZnxzCJGEpBBa8DHBWRZP71ZBxwu1V5ESeJqGRetLx4WCMYEoPevyaZXNaie5odmkiJJc1WBYgUn4Z8ngc",
  "key45": "Hcpmhpxg98AKTtFRTpETsuCJyFF7CY4YA9hXXj9jxBwsMpejde4TPGxTocj2kTD9gJsXY8EJJWz4RjJSxPjfoFZ",
  "key46": "4Mk57WeRC5xRMRYpkqyDgdFJfyukstx9fxDb1UmJFuqykLpBrfrZAjQSe3LVK2CdToBjFEkzNaksajRyE1C9ki4D"
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
