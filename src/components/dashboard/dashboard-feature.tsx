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
    "5j9fFGN9w5e1JKXyKvY4DhPXJKc5CwfbFyb8CmRa2QAo6JEHNwtp8ZmJ4A792iRCfG359XLUsxwajCwfuPZyjCGN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dU4ht4bM6hodK27iWaN6QxjHMrR6Pz9c5HRuFMrbT4puutpd2SCxQVTrLzfoUqondLiYAbvciw1pgYsWhVTmkyL",
  "key1": "5VYYpnXAnxPREzN72hGzXj4H53ePYP3kb4aPsNfidxNiVih9y5xESxvPAQ5nEWbzjr9ahfJXqtcXrWrCbiJeKwXG",
  "key2": "3JdUmnSjFrXumbRsRXydD3LfKgnw1CLuiPfaTUCQYA9ZYEBg2upd6yipVjSznHR7YRDkQdHQJF8W95LZufzMeToX",
  "key3": "27Gnt32kKvcmMToTVm2vGxKP2JP5wuqQDaPBx3aC9SVRDrGT9w2q3nVZPH8vtaYp2fLVXbG2PoGoinCGCbmJ2Z3F",
  "key4": "55DgcHGkSxJL9atn4SgNZBtMmQmb3D1pswRFH8pAzsKRTnqmim2JWv5HbdA7tGRT3fjtXWB6jpCE4yX1nXtGFWVf",
  "key5": "4MyWMeocXDsNPdY7CgY1NDPZYPGQxTcmdz8eM5MaZzj2DpJdZmeinM2cKLEbtdAv4gfdFZKnXkHEPL7dfwHUUt19",
  "key6": "2bcq9cri5bRiwJ8teH96WyjkbSxSK5eLFEuoDx9FzX7KdNSYTDJenGVbpVF6AXVxQX9s3kRk5mV7tgHJoDRCp75Q",
  "key7": "Jub8Pb3fc5jdcyCSdBLavrx4RHQQnXXi7Wchi5iYgrhQGNFwhd42yAf8p1k1R5zrDSPB1CovsAfu5gdbPTja7xD",
  "key8": "f1hi1AnPvuqGoXtF1xaS4VA8eqNEdUrGxWzCUUMMks9W2vBxXBRcKTUFhw6T6GKCSf6PQhJYGyzU8y6yGZJHu9t",
  "key9": "42MC3NMhcdZGfQWzQ2cwo2CLh8TqxQZJoyCaackqCgm4y226bngwDBYXA4CxoNM1GyD9puwcxY4Y85zmPiBZUDDW",
  "key10": "3Wu1WM67gvuuf5BiL3SLMmLXz1nozoBHQcuYeH8JM4PfPvpSfLW9fyNvkku35krm8Bzodi2nKH28arbTDfQPWYNt",
  "key11": "3UtBqbRmPVZ64KHyLKcK2YY4nJMM5SnEd8yATZMqJ1NzFzs1s77CeYVgpaJZTjEqF1BCNY7k6ZeV5eGm8e4kXfKk",
  "key12": "9Hf98tVZw4ykEY3ZepqW8Mu87tKFJktwKqjNWJLoVp6qUUC1gjNWjSqkCJ8uBiHfg4WQPTpF5oXA1enw6TeAeAc",
  "key13": "21wcF5XA4QeHhkRvyKc7ot48RqFKCfVL9KLFJhr8rLMRYXQVosmH3nRQyVKZ4eJCDRkq5jfktqwpxkknzf1H5qSM",
  "key14": "5cqCNuP9f3YJiQXfHZKd2hh7rTEGFmsBPDUhuhxuft7JT7DAPMNHUJJV96G5La5qgKp1smYCyZBbWHXeAzGo7TEm",
  "key15": "1nCU8SifrpAkgc8bVhmMBz32SCSi1FT3q3PWEA8LHwZkYvexyH6xHTLwMWVJFgQehNyvmY2PMN2s1wunguoXaWA",
  "key16": "3fxeEYGStc9ioL99ybBJtadtqmKcNCPkn86BXdPxHLhsy4PQGVLLhiZ1ZFo9PzXmieZg1rmV5NLHJpfxPBv7Ffno",
  "key17": "2Pi8Wqy52qZ1dvD2tc9yYJoLsChvExYGTZenH5ioP3gj3QYAP9Ms4E9jtssBuZA9WsY1Tig3ZL4yJrsWdLZ8E4jA",
  "key18": "3SinmFsSTz3ucaP2M2oAhSHjGj7rcjMGKRL7hU7ZtUnGebjKbKaJmHw3FsM1bpAqWUK6Kw4acXKaQTAmXLtM4hjv",
  "key19": "5UqQqNGQbExra8PdrQadpCsVY7Zo86H3XJnEJZk7WG2zVfNXMNec5fDD75mnau4NCo22Vx9Nz6VRx3ksiezaoC97",
  "key20": "3fgjBdaLwUYa73fnhB81XouCykmsvwa5d3fo1CG5MYxPeQ4tbgrqd52Y137nxhCAJafYxaYh3UMqyfWwKu9EbUmj",
  "key21": "QfwuD2dvtQofHhWXBiqmCraTLw7sxj33fZgcHNKqkeihpsFKq48JwWU7BPiY7fhZv8eZ7wXqd6Qqemy9sQftpab",
  "key22": "PjaEBP7nfrDrVKfPRSsqba34DFp2btEwB8BLRfyEdbf8YfiCd2Zt1azf2YV5MBsYaMxzeJNKWu8p28ePuLe1Gap",
  "key23": "3KVgp6XsYLht41xAVH78Hyn5ESgKN9pMtXRqPmt4bnivvztaJgCqp4CVfyAXcWxsvoxidXYZvdibiTi9QurLtvaB",
  "key24": "5mcfAeQqpczezcP41X9JoWMMqsHmAn6ZpviuxSU7UJNb4mjkfEwyKG8oZvBBtLnvatdcB5YMpsNksSm3jXdDRRdx",
  "key25": "3oxpMHjwb19PDijDrvpLDWH1aEf8L7tjFP1wQKMbkNUACKQVB4SzhG9ZrvkQuAwUrmPU5ow894Cyv3sJ8XunKsQN",
  "key26": "3kNmJ9TNDaML75NQEXG9fAXDbGFVfpQP2L6L4jGxqDFKjVxDrgtjnMhwufswh5Mz8Q9qeYmJHbXWQydUjU9DwhkN",
  "key27": "gqttnR9GQHhPhbDUMUVqSDf6WNyzW9fQgTsx1MmUyMEraUcRxTzHKHhA319nNexKzDqqnHn513qVXqGec7PbZ4s",
  "key28": "4dPBCLkSGKv1zt6xk3n6N9zq28nt6JF2XiiwqADwj9USzBUJwedXJCVs5ovviTHGF9oCkUPLvamCPbNVWmt7Vm3x",
  "key29": "5Tcx82hCa1gdV9G4AVV7RgZBvVTMtcVbLbVs3x4DvTHikbzkH4o8EUQ6gAacxJiB8RKDn9pettVoYrFk6tLLMYgg",
  "key30": "2Pjgvq4dc2dNaxX5dAiEtFAV9XwxVSBDsLpUf9DzVoZAa7EDx9iJhTVasU1xemjUowFvUrAYBanD3MGJNHmX8HJr",
  "key31": "4qZFCNpEBLCAWT8BWVduFfsC7p2WHffz8y3eBv4EMjobQZXdJux9jhWTLuWrhCUuDxALcvo8iJAs9oSgfk3YxgSP",
  "key32": "22G3pmmncVJVb4XU831W4iUxokKcQawAy5G6EceHKpeEznuCgwg6DAM4rQiBAMKUj1YuYvKa2p7FMmuQ3e3pntur",
  "key33": "3NucK5Ve7bhWD9QbCq3GH7kUNwbNQ27nqZMqjgtqqsbLtbnMCM1DxXWfpjBE8ZTQtu9pWvzwqumU6mxGfy5A8cjG",
  "key34": "Ua611VWtDn9iWWPh5bdye5yWnr5st9qUDSnPguQYWu7mWiqrf3T3eJK9Qo9nEEwtfDbBagWLvsy9YwWD6qxMzgx",
  "key35": "2cycLpUrPBPLyTQmbCSWY6kCkopJkTzf2U9vSMmcycWr1UTwDQfqrRZRvDbz1NTkFpNhHgo4SFKfeaQENbYfWYgL",
  "key36": "5zaHU6mQyfBzTwU2zePQ4L7o9kXootA8XJuyFMPQG8U48Vhb7jD7UWsMPBLoeuTLbJwh3w85L2pRk3RaDvvCvLRf",
  "key37": "3aJXPcnxNsr5JHUmF5e8CteooybhW8a9MSFZi71aeP9Mr5VQpSW3XCJjLUstoyXaMsqFHyRJ6vw8W6Su3yRcJrgW",
  "key38": "5RbgDeqVb8Gv7mjRHRDecB3VFKebHGvWf8riSAg215sGR4seFPD3jqsVjtNt3Z18s85EL9RwKjNPuq8iYWour5td"
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
