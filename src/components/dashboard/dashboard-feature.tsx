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
    "5NU63YH2EVVDsfryeGG5Ds2PSDgy6UGQ8SnrTFn3eRuDvRoockPPcAuSAukpdrjPh8eeAZy629agH6WDNXtsR1F9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EkcMpMVFv71GWmTBwaL8BcFxGbh3jAuUXuhD4JwXkNywm5FiBWT4q5pnQkh5vCzzXQ7XAakmLaT6kdsUffzsj4t",
  "key1": "4ESZuxkGduvF7uSQFhcm942oPJhyb4L8VM1z63FZSCcBGBcpN1DCu7suFFhKHtLX85mu15wAu2gcgm3BLDrmyM7N",
  "key2": "2wN199u4Lqz146UoornHK72w7tP2fagPKdhsbD43jvmZDrY5Pd1QBTqWdEiEjZYQw3vXosLSKNAWtGjT7KG4TD5h",
  "key3": "4apk4hZNb5JgNxrz3V5mzosrJZadzGRnsbeESEaBNuBcU8EHS2gwkPUqhsxXaWLzgwYhCeQNZvAA33WFn2bCuHuo",
  "key4": "38vbXWpJFHibMGAzurfr2M1EV5TKuZBWmLXSk7Hzbrhk5KRxurGwCkaga5bYj78xWx5S9x4HfhtsfGVMVkf5Mcki",
  "key5": "puCfUppHt5afyXr5deUSuTxL3PzM8PeLZmGApbFmuANBZaDDec5uXY5vHgWNgJvEjaZdBwEs6asu9fFA1d8wYG2",
  "key6": "2FcuxTQE7hNUssVhFGg58M6xDFAvsa9ELSEr1TjvggpNGjb1WbSXSF5v5LmDsqKrjFoeSN4AAn7u4fUzWbWg8T7F",
  "key7": "F5y4v5vjqDL4ZPnxRPwSXZ9cQdiuEPAdYycmBj7aCC8bXn3xdRpcFRdwd3zBUA3FZPJEXEZgRsTJFN7wZzDaL4M",
  "key8": "4dxwzsXYnSSYuXiRFdcgeURDfaRDio3s666AZfZha93jrYGtxPRD8CznRQXk5Uur5hvWmqRyMv8JfVBHXyRoorwr",
  "key9": "65jjpLGgTzFvMbf54H3sekJHRUyyyEh2U2EDNGgJsrsqaoM5bSi1Trxp3PwAXg8qPCCc8gf4bqNbGa1in8T1kmFj",
  "key10": "2pzh11XipNzdvY2J9LY3EtjnFXkc4LopWH5UHToxaeYY5NsABXtyPcwi8hvEyTiaubrF3Bz2F4s66cxeZNvnWqf3",
  "key11": "2nhQgBdWRAJkNe3MNibAg1Nh9V7DHxYDcXJgxe4c6gkwtuQ1p2g7TxEM1NLqwsfXawxPU4uxZCKCFemqRqUj9ivb",
  "key12": "3sdVbZFmhX6ZmmyCWbZYGCnQFobvUtjpT7mN2MN9pq6M17iLRKhAeJJJfketQbycjd9WQDtq3qEz2bsKiFD3HWQW",
  "key13": "2tvKS7ajt9sxjWYm2f4oAd4gawW4Av9MHHkmbU5aivfs8gEjQ92LQuNhWNu47BuSuvyxv2psVGrTQvb8EqhhX4hW",
  "key14": "2wDRBaf6dZnuBqdTP5KjS9Z1ie4Tr9BPK13MzNQ1VYRX93UrDjdJMTwkLdyfKdEwihoEaSbDHpqpWoZMM1Ch9xau",
  "key15": "yjaQv8B3cuRczpge8cjYgTkmPtX27qDpwm8PvMoLcdG6jmvJ3Wm1Vt64XYPRV38Qvp3dSgfzefaQp67N6wgAgEn",
  "key16": "YgCoeQAQ8Eeh5eYUghhaSG4ENrx5kKkxmtHFmtCjx3XLewMfu3kTeRBWomG9RCFVSkeAuDfeN9SdaQ9RSBmBdrL",
  "key17": "5G3kvVo2tUkfJzgwDrQ47kckgvxtJweMEaaCv6vPR8JN59QZ5Pa52ascDv1T98WVEBpksQtYEmDejQP2jnzoAgTD",
  "key18": "4gZvTLX4BxJioq1fjpsD2z4pVikiBNZo3afWuiHUfYwTucDJ62RZBhfD7FCtZacmjMB7KDhgweuJWkStwVadGHKV",
  "key19": "4KmRJmskkCD1J6JJwpskgeeZgNP292bZ8RSW2pN3ccQT17z1XTkwDpKTeXpqrVMhcQTadcSNfVAmSGUauy2BkmED",
  "key20": "3c2yqSq9hPCLLovC8xmsPcUM2UNjrdLj4G8LFY592ZNxbF6tZAKG5zhfaojsYG311Qra9Uu2D8rmRkgwDUjKKaE5",
  "key21": "4JZYaBQ4EYKvS3G112Dejixmjd1WRNDLuds8eQzoTUMXuz9xmFTCaehRzjr8p45kVGU6pWpqZ9m8NdMeB5SgXSnF",
  "key22": "3MmzGH3kbWwmtDTcsXxcTTpqbdCRCnPYsKaKRBDw6JcF3XJDwAo8hP4VTThV8X3gFyJqw3d7uKMqFbYHvM1rvzT7",
  "key23": "53fYR9K4qnYsHEnJzHu5wSXHyAKjJSaYoESg5AK1pVondFXf215XBbSU92hMPE9d5LMxZVeejhdH7rMrpZv2tuJT",
  "key24": "5ktRazukCuLtAHGgok4XPCcyAbsaSFTv5wYGdbaCCka5RsmXk4tDdLm1EMa6fEwjmjuuMDcSWTh22UFxf3AqqHLk",
  "key25": "2buwFj5fMCwQvQoYtLJ8qyrCf661nVUnGKd9VKrt621WMPnYfrPYTUXu6M6o3Qoe59RJ9rfShajBnr6nkvKwqkwo",
  "key26": "2kRctFNUxpDkx4KujTDmQnAG7KHstEXqZNMUUN6CzVApWFLWnaHTQRpyUQvBahKaph5sSTkVJzYWZLWD4vtXUuEH",
  "key27": "2UjC4KksFXkgUx8T33msdZZsbFe4B6PsgSYZtSVXuzvgErQZUKbmaoSDARxRh1Levuai5UNs48A1nvHUV6fz2r6Y",
  "key28": "3Qkvr9aPTHcLUmMWTLGbrqztcCheooHbpAZaVevjQJ23QsnWdVqm3ThbHganXFDYVtHDe5vJ9jDC3GhNfyYbRvKo",
  "key29": "5YgQSxjuZX6yn2CQjQh6gNpy1AwJwMAPmQJSaUCfTLLFqW3ejxF6Rd7FaX9ZpPmmgfE67jjvo7M3rkHJgqRyWGpt",
  "key30": "dnKgmts1npNFvefWRXB4xcsGJGkoApw9wJXxZ4EV4F9aFjSYebAdpzQx7gLD53Ztkcp9RCm5ZqUYzivoEM2Gc66",
  "key31": "5tELNGtSz6qe9K3ZQFrmqj7FEjxXjR6fZhzZtBTvMsgky4LZeVzJetxRF8VDFzvAMUgLVTC2fEmUUj5CrV8DEXen",
  "key32": "4xSpVDM7VobhR8joSaNttuE5BdcSctHRKVm8VPPgzU9ypKF4Ddw7C5XrvNq3VzkSQpf9qxeK8A6637H7FBJbMCz7",
  "key33": "HxpFEL1hyx1mMdSgoLnwk1XCP1AgKKpcDhZ7b3REF8T5zjTvYGu7w213YB7uJYciEcFb4Nn2qZBTMm4SqPAF4xS",
  "key34": "4gnBrB2CmjNPjUbf7tdjnV27VfQ2ChCy8aqmtGx9GmxmQXQwhtjYYSjyFngyZ2qr2Br63db8ZzDcc3d67pq2MHW",
  "key35": "4ZrbM6v4AMB85uEG92Po5gSTKBQSDiipSYJ4i4hBcpnRxN3VuLceuANL8xoqw4K9v5cNvN4Ej7ApQ47LwqeDsTTV",
  "key36": "2aDDYPuqaJaHRsW6fMkxMvx2NYD1cgr121vhp1zqMDHjB9xesH48n4CrakHWqpHKBXxm4abZnG7ESuzLSvFHGu47",
  "key37": "23fweKEJn18LCu7ZGFJTNYmy1s8VR9bhC8fYH8Cjwn84nnv88desgYjjR1fX4xukkoAjFxN4rSefL3XczdS2j8St",
  "key38": "3nxZNcZAX9xWRGC5KSRDV76VzH7v8YVhTVNNxy4Zw2yJ9xP5BJiQSnmjfYx1SDf44PmAsSqeeU4NfUWwb4F8j4Hr"
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
