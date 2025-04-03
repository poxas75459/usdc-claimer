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
    "2gGZ51889QYS25hZqG6R2SHtzrtWCbzsQpAErzPuJDANkwBh5nUrp2RtY6bPrpV28M9TTAvFvZYK7Wx9d2neUE2K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ff54auDmWtLCVqBWMaLCQTc9HDc9w8BYz1s76GAswGmvJKTxjASXCjsmsXRRBSBZsZWySGkzabKS2Wp7W5RPgdN",
  "key1": "39VWV8YTJGj9U7nPz2FcR6ryDeVwnAV8KMJcMCVzaPeT2yj9gWm6N7rVoyYZX86qpzayzCJChtmdB3fEWmzo7Csx",
  "key2": "3mpusDjn2qC5FJPLa2Sgwhc1AGCce3AmPgX4XRDrrhYPNThCLvb3BZR2AfsLXZCSgBXcTmassoyF4ZS4r26JbJy9",
  "key3": "27rqHKbCaWZnrXbXMd2BRDJzxgqGSnyhc6yYvrkAaVDheS5yVGFf9BZv6Lr38EvLQ1U3gCJhNSo9kWKvm1LzJPVj",
  "key4": "4FG91uCPSdEZ8LNgvwHedrBujb4NHnicy1ac5xj19PSDpngXfMuC65JBGXECCQGqxJDnphjUfxdHCkopZkuYWAqm",
  "key5": "4PjP6iE2MEyXJLPuTey3G4wyzaDzWNNk7MTRfcV5x6QJFhcuzprb9oGZauarUm9ZrPWopp9eF6CEcdKGEHGEKpLm",
  "key6": "4xFzkndHYHp61H3Rzv8nbwR23t4mqRqA7tdyu3DHayjhWi4BktZQqCfbcPjfNwiuDpRopko34BAUZxe2r4M9Fegc",
  "key7": "4KRQ1DvvYxYH7NTgcpGvsbpY34N7bnsyedyGqjVqQnLkU8YpYgdNoafLapxiW9u1a1oTmzhRjeL3a7cMfTzUJNZC",
  "key8": "39PrgYVpoeQgPWaenQjDhCJ89fdHtEjQywYiRsBa3a68tjdrRjGpc3LSgNG11dpn8qya2oemmARQtwU5fzTLXnTi",
  "key9": "2ZKydinpsaN5VBDLQ7VBFK5kNPvzuBfgBxqyRF2jZSS5KKkArVv98KeCeFjt2RfgFAbUewMqPRBunzDs6q7W8jJC",
  "key10": "66ZhpTpWvwtooCCzMqg4vmPvZhLXe3dUTDtSqVNgW1XtAWb9a5PAcKQwGi8x9hyxUEzJKkfKng8gZ7oEN2GuugdZ",
  "key11": "63Uu5WCFtHYtFmsvmg3nX9K6tpczmZEbu9HR68tSKX3EPPEBgatbRtgNkYPjaFn4VdNevqUUL9ieLE5aCnFLXfRe",
  "key12": "3dDZwXtapqGveb4ZAvRNxzDJgUmpwPWXPToyuGXZciEDSmCh5s7DWyURoexYfKRktb1Eb7JbRmMnx1jrmMvmfSav",
  "key13": "5MGm8T2HzUYXFxn2kCG1pEtRJ21yDzpr7LBKuMwL8JzeL4edcuVCdsgkyGpPqdG6PBrTgJp2Q8FqwQDTeZJSKCXv",
  "key14": "4HT3A84dQDHShw2F8aDfuDKBemfMagTLPXdnZtMtEjkf62tNqELjyfuhnX3fnrRGMMT5wqUw24yYspbxXNvjtQG2",
  "key15": "21dy19DTF1zY4f4qYfYvKDZ7LDchPF6GXmARamXNcEQNsTRxPqnVrmaKVgh55vqXUfWN5peVZuAGEiNZR1GmmaD4",
  "key16": "5bbJSpdPeaYXoxH1qDVFkYRqfRkrwiGgfcpMU6icDLTSLZgmFvtouA9JvcB8GhAcf3mv311y6BqdeYft4YPnZQYN",
  "key17": "EaAPSDEza1wP1y2dXLJqAjoBaQ14S1XSyrk3ewqnp4SJFBxVyC4kHTi9SQLf42Dy4zf3sUeipC8LsZ48Zd5pfcJ",
  "key18": "gYqtHEtu6SCUSUFvCcUignqi8c9sxw5M5dZsibZoNH9MN6GAgWq9kTzTfhzxACwvkPjsLw8Ey6uNDWntERh5MFi",
  "key19": "5Ykhy2KMJNXzKTmAGjcY5FKAbytNGmsEoXXj8ESdsyTHRHF9VkFyD6eipUrH753dpqBuNbQpoFeaJVNBaXiLQRhD",
  "key20": "423thPpXzvzBghxnHMGUkXgShenYecUu2pK4acJewGoRHDqxhumLmB3yTSVUjBNsuXMtUBquMjtmFkUbE27yUJSm",
  "key21": "5QYMwxGTkn23e1NekmuM1XHZYMP8CSEbMGXW2h7L4csokEP4rbGprku34drdmcjA2NYHK4VRDfnBcm79JFAhsXQy",
  "key22": "3DfLL3WSNW6mN1pTyBsvsBPnTTvfKTeET2vWgkHCkYFN7PfHp1Wvb4H4WBk6N7PdqUKkxtnVP8of8NsYAPJ2UTb9",
  "key23": "4it5ZLfHh757R73mPoKxcvH6WW8HfAXugWxwR6idcusPDGH43uBG8moDD4CUXZCs9EpPjYtCZiRyW7F1Yh31vqik",
  "key24": "J3osRQf5YiXr7KuGre5ZGWLm4fJGZa5vFkfD6Utwock98unDo6HSckFRHcRWjxzAZgZoXbtoiLosumchcjVoTDL",
  "key25": "4AzM5VkZc9bY28vMWoK4fedsbaceiDNwbzqiGErAaQA3Q33j83NB2owq7Dvd1sb1gHRc2frQuSvCu4VxuGmKHdPv",
  "key26": "zwv4HXXqrcHVwb6nyMii9ZcVur8XGPNZ5ovRxbn5jX9JoAfPBXBTRZrPYNSU8Qx1uTN2hxWzcEVmXDsAsnMCjvj",
  "key27": "4bEXahG4AJdSj6xBX2KxtCQXKdoXFVp6vDKj8RjN4JsngqCouTz7YHA1te7KzfkEEkZmutvrFZ8erq4ia4RhLZ5o",
  "key28": "3dZevunqu53uETSK7Vuan8p6uGCcHvQdxMmvvVFSsLtdV6U18zPSfheJMfxA3xstorBuUKMDJebcuyWPNjwr8qzk",
  "key29": "A84yFz7LqEy3QdmAXW6dx8EqjRMy5zNxu9iqFU6Yg3pBzcXeGdeNHLF64DvVrG6bEzkGWTmpN3C8vq1EyLEzoa5",
  "key30": "2pFjRp62bbzAgVp45LjUFtDC5NmrrL3BUXSDsFFZNGyRN5nWuJuvqubdNskATPEYg81TLZaDiGERJ1bR7mjcDypo",
  "key31": "yeGKF4dFYkZmDV45KXFXu9LexrBLjCWHdsCDo5fwhxtCP5Rkpw7za5dw6dD1zWeM2uxZdZogyXxMfxfwPRwyn1E",
  "key32": "5HRqxYSQ46Jj63qWthgr48Re3pWMwg1Et5anjvDuFyFLQnpL17Q38mxzxNNDnuVnEhqPYMq9BThgb7JFE2EMumnX",
  "key33": "3fK3BbFS7aL4GMbwjQv32WctbVecmEnWwPmER7KzUKctsBkBN9ogyz5zzKSnyz64ZS9ZmdcUbKoKp2xpcppwFbC9",
  "key34": "e8FEqPgzHpesfj6raxaa4C2M5KxkMdpPuSj5a2FimcqYe1AFfeRC8zjbxZatCD8VE79P7wAGVeZwnxiVMvezgdL",
  "key35": "NTE2bxvkKnXHnb1TYuEmT2ewnoB2KrZQofw4srmsAxX9mG6imjLbsM7VTDiXfZGxt8MPvBJ5DbLCkn7XZRAJNfo"
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
