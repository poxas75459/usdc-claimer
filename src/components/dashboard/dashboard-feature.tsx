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
    "5xYv5mkx8wRfGRj8Qc4XKUTvF7tgEgBLeWWfHiaT6zFYEByHZjHAYB63rGbadMNmRUM2w8h7HUPzo1yPqGMJvaTR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Udnjdnj45AXfRJ6EjfjpgFroRjK46HyY4hYqsFjG6evDJkcSAQQvvKdBDKw8pwPfMds6npZNLB7pVkRhWqj4dtd",
  "key1": "iQP74gt65McUPpwJFF6eaoRuNurpxfx7dWssPnnksZVXtvf6YCpPDTn6uqUERe3bwZZRff5X4hzT7TKkL5kHP1a",
  "key2": "4H83g6pUjnCjvgH28hmHCL841v7E8Rpw8tpJVmw5tqrz8oJK8ugheSa9xjgECdWZxNnMLRJVjSKDNChrNSdiTwd7",
  "key3": "5a5n9ye6ienRuEAoucTSpqjCJQHWGKgJizUJHeeAEuKeDGLw2L2vRnRr3RvGANDSzdVepQ4qJv3NySPjVgEgyC1h",
  "key4": "2bUyFHsFaTNijCghhbFABc1hmNcRhFKC4cCP8Nusru8Krb7M5YeTs6aaVEc3sPwcwYPDFvTcP49ZZhRnQK1qk6wZ",
  "key5": "4cwRTt3MbRT7897esRFeD3evRSsgn4rHYVh7okj8WCQ8XreetWvkF2Jq65EHwEfzoE6ifmG4UU6VMLDPM1eJj3aD",
  "key6": "LetRwQFjVRM8r1My8B78EtMzZ3g9T8BBCkcik1wkk2W2Uz3jN84qYAg7GutHXt9RcKyxPTWsg9LhLSyPktoNLCk",
  "key7": "4HL279dV2iZLLpVqzrfNeJ6RpYLe8kac3ZyAAkD62QgsTh9KKzz9LCugPoVuNczLwn16ESxzCAW9HKm8p9wGrcwD",
  "key8": "3SPvtf4tYTSgCngwzJddhus2TBJx6cQjek3q6Ezu7zqoRMDXqmL2BTsKxcwm6M8Y3AWsbmkE4g1GQtqNrrV2hXfn",
  "key9": "Mn9xsfwyKhccjm5yKnVGNjB39T1MCTsbA1MVLq7828Sfto1eeT6PND3QK1zvtLTDwYKMgpMNSqA2EEBoai9DYwh",
  "key10": "2m8dSxdvQBVHSod9zcntyRkqkrJXeAT1dDfyQ3r758oC8KntF6DFuFjZuws4GbVBNQgu4pGydcfERs2zPh7H2qpZ",
  "key11": "ELoXF3VFzU6BQE4qWGDN45MFmERURGaPu5euVbuvW3QGvNRfDG7mZorFLbsZAhnLSVsaEhMuuAy9M6TgfUQUpGN",
  "key12": "3exgHe6vXsJakfUodbz21a8FAFUCRMpiZoUJTNK664wC2v2XZDSQJjkaRLijbLRCK2FE7n12RhzcmhVaWutXg861",
  "key13": "23jDxb6FhvAag2BgLWmKHM8J1LQ9Dsy2mV73MDaiQTLTJP8t9Qrp5b7bzhQbuYny9fuMcTR4zd1YpVQhhUP19ctz",
  "key14": "54LiB6JruM6Svmf5m9SsAHpWXg8YFutFR7Eo7ghVUnZ34Lqv1eLCj2E97Gbn2iB1Ao6Y2UH3MdZcu3DZkZFJGPN3",
  "key15": "64cuHVY1WvrX8x347L66XRV3fUThVuk52B9d7JP1bVEHaCwk1YFSgjn1ZPVxyjfkT5BHfXNdvt51TnVBWcv8mt4Q",
  "key16": "4hH3EqbdiJbjDcc7BD6d5BUwQBJeMsKVTtatoYLYz3DPZ1EPoZ7S6rT9QARZn7ZLcYyS45vqYxJXbohX66YgiKDx",
  "key17": "3fWSXs7h5ruodQxnJVfcQo7PCF6auQMAo8qLyAngAP1hHF9SpJK8FDLKiepzZXQEc9YtXzzda8ioqXPHJ33cmTAy",
  "key18": "QGGQT4nXiLsvumFEySE4nRiCFGbLNMq9ddRrQ519Z5R8y4roRmsX99ifi8ApmX2WRyTo1sPYb2J7Ycb7FnA7Bpc",
  "key19": "42dUuzeGJVvPiFik6q5d9FPpwV7FHfwLWU3w72dE7qY8Qx41jew1Rrt3qkkL5GBwAqbJM7GpEoMtFriHfxK6ugRA",
  "key20": "4CLowjmY8mWMn8St7ZRZ5cf8ubk2cfDFTpC72hrzzmLxeaSSMuQXsXaVUtGsHLomjYE9rPAGgZEjyXyQzejAzsPz",
  "key21": "3im2M9cqB73wamUpHJxRs13ySuzD59Rv5BSykUZvuPsGQb8nUQexFLfbW24z7WoYVwwzwSRYwTWtHVZaShiNvLBf",
  "key22": "AzARyi4WV8NJeiNMdJY7ncWoCUULkpooK7jBjdN4A7S6pNTxNcZpf6pXaYZhrPzXrb97wFypn4Pi1StT9bzNXMZ",
  "key23": "tyDLAhoXbSAe2RjV95qM16ykH4EA9iutmPApH3Lg1RMdwzMaZo4cUUoB99xcNwL4wZXQhHaWCbSU6mbAhhrCV2e",
  "key24": "5fGqVQ5jtJT53jcf5txm94r97DYKssrSzuYj4jvL7bBBLV8LQKZiZk5nnHUYgCYvUDcjeneUfqFzzpQ7W5KcbbS5",
  "key25": "2Pn4Uovztd15A63quKSXzZzLcNSoiUDZBcK9vkFzy4sACjQJnnuU5DYhyCpGtzVCvTgVLhjWuPoz3LkNnoZuEbWt",
  "key26": "2T9zoUXAWbiShxVfGKAdsuwq2J2iVGBLnt8r6mFP8Ls1P6WJswTiMUmDWttuwkPCnEsKW5ShALZKLHpfouXLHxJL",
  "key27": "4a5A91yQkqz6fixaxKqAVic69fmRmxHxcZTcpmtRYBfPXrvmJPqVHuw4ayYxzH1ck7d7qHSDfFnWGjoAVa1Ev8Ha",
  "key28": "N4mZ3XEpXHTgx59xGyZHXukqfMvqBCgjudpWfrbbMXquxDfTREJdbQYdbkyLmVrkAGof3z8why1vEMkuH5kgr9z",
  "key29": "4cJCYPZUVPG46gtisMHXrsSrPy4oFAor5AX96wS5XnsdJMKy8p9DRiU4gGnXb6bcQgiTurQxWgpLZgZERN72vZUS",
  "key30": "Y5pN1a2UUxuhFXLFMk3i1V8xfngxuvSzsCoroT8DCXbHyvwfcebAgq9AJzfaYjRuZLZJcMSRk3tVkowNg32BnYf",
  "key31": "5ikNFoJEwxUZYQtLVVe1ZLRD7mU3iE7zYu4emBvw7ce5VMYhGrSmE4TgKQcMBHtzeapDeQtzqYxGLLujNT9cVjh7",
  "key32": "4nRTUwin6ULxXruXAdU8PxvMGUb4bhhG7QbGCJRAKQsRPRBwtN5DZnWniwQZAgqrQZv5Fsi1YBK6nYRE4VG2gjy4",
  "key33": "52bukjDWfUNvN8qt9RLKtY41cyCsrUoMMaUTyKajfLj8cAKWEvtb3KLsEVoKm5gTFtGHxqiC4SY8wnH7YASXRBYJ",
  "key34": "65HwfFJtEZVH5V35VXcsLp2FchEtCg7PrwuH46PsVaf3ViZRT5BuZC9rTyWfH62LKmUt8VjFHK2ipma4sQEGJcP7",
  "key35": "2sDC5VTtHSGuSRarRN7ukpV5L54PUjoAvFkKDXQ9X2geU2KkuU7VgzhiNAAoaP5QmobDnkknRrGsxPmRqWEnFdfG",
  "key36": "5QYMezkwEA6sg2QLbyFCN6Cod3pDEcgiAGQKDHT7ScqyMK2SGHdSMViC19hcPcPzUewR9VDmjhkfteK6Ugtcwu3U",
  "key37": "3VnJDW7LD1qhz9ecsqqUXxSEWsTSXhCTPA7vu4yKMmNPWMk7b6t2eFCeKyAxdoV9gg8bhaYJbzWmL8uexnqvvEmA",
  "key38": "5j1Uhwskj69Ncy2wVaEL8YxjRzfFxKwLc9BBKLmukBbZKNouFHeyY1Wvy3QiJuQLfUhgoEmtd4g47ZcYQra3u5jW",
  "key39": "3sQ7vfVskcy7YWSM843BqmMrEyv1AxpFEhsYkfPvxoLYeosMPyj5HWS4MoiAyGTua68ktc9BvbaqxXsssQyWGnKD",
  "key40": "zDj2fWsnDxMULrNrv1SLenAH26aK1YwxadGNpBsh6hZKsccGCRuMHb3h4ubQiNAQfiaJK25VJsMuCACa7m7mySt",
  "key41": "Jz9KKwVsusNDQn6ijbQui7LSVv5jdiE58zk2rzh7dhHozMiBvenDhLPdRDSXp89oAW8bD2PBAEVZ1ywN5ZWYXg3",
  "key42": "AqfzF5cUFosFKWBRq4uxEtbP7hHjKJ5ByYPNR2VXXRfNE8c5Z36R9DsPJuSmnbL3T9ciwZTMj8v1wy5PHyQuwVb",
  "key43": "54yz1H5sLwfgW5NZUsPRsWu1TcCLRdcBbZ7UwNWMjXmF7a1kkVxjajshaPardvCVYqc6UF7G3miDZep2Kb3B3Yz4",
  "key44": "kc7GY4EnhAp3iVCpthk3M8138AGnhTSEKiynXaYgmTbj96HL1ygtyQp4eFACGHBZwHYfKS8n6nU75iivocVR7JG",
  "key45": "3KH5MxPJJJMZBoC7wrmGaFfYec2stX3CukZ71SEKoo9S2A5TAhCJZBQxxmNSAe4KQgffqtgtLkm2AoMC94K86jiy",
  "key46": "5KUtrbTQ9pGWy8MGFmiEYZuCbXpE6bYgBuyA4wRAGW2jycLKND3Uu6XZ2YwwyKVPCtrAz9EP5H7UfrskPwo1feF9"
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
