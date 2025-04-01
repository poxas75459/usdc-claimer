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
    "53dhSxAtzgzRNQfFRKctkuJxAAzTNAAyNs639Z53rarDP28u6BhNbmk24Amcxs4diqR7wGrm3AGG6U7meCiDZHuX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SMFD3FAo1x8btVKWz6frTL4kTvamKFZb8fN9mGeDp5sNMAbMgdxM6tL1pWfrPPRfqhBDBXvvFxmzxZJa1asSee7",
  "key1": "5ifMLHfiC7NJMDisnGj3KHnmZ1tSH8UPMUrXpk23WqsMHwWcRe7bERRphjEhg7sRvNbt2891JinupdhVtpSoyTk5",
  "key2": "5z6tzQ874QYbP3jaYDmXFPHUeQ71AbzXevcfRbg4KWtKH5qwSJXRAnMNyrEWezCyAnBGkJeMbj6JYcpsnnU5Rqor",
  "key3": "2SJVtLwXAc6xCGkiq1Vy7TesYUWyusriMzwgqU6hwEfuAkYmWvrjHKgEtTyJ7fNmhFD9HAZpBpAZbqEE1Whf5bgR",
  "key4": "swNZLsVvL32PPRaqk8yrr6TXkEz4C6KnS9JRTnx5rspsjQNoii6nD1iHFgQGd58eEv4kxRbd1XeTGRh6PMwXwnX",
  "key5": "44GHUpo9XnYMxLFweGPnZHVsCpDJFhTQaFBQfqBw1RiuWBCfqvcsWcLw594jxJQiS8Kg4ja9yZZWktg7WKNB31S5",
  "key6": "diV9YAUZHcvBEPXdA9QQqFhPXCQqEZkcbp6tuJqj3aJwhdusvfZyLpVL7QFXhjvJ2bAPbUCvTWUj8T3oFjGayeZ",
  "key7": "hXfcmhw7hY8xEJJaooCuKjooag6qNgSzodypPtCysehRibGMdVi6A3g8aVJv7Kt88cEafYte2Pd1qAGnkQKvhZF",
  "key8": "5e3jLg66na1fWGnakY9T1wWoZDohWmVF1RjMUWg5KWrKDkgg9K1iUkEdFNd8GPbmcbNdRgecKdtBr9LRG8HSy6uz",
  "key9": "2PVPqdHs6NGVwxSRgvb4WngodainFYaQwKTg4FwFZR5GKCgnZsCFMpzbG7tMdmjXdbuTe6hSG7uS7aVJvE7c4KwV",
  "key10": "51XHGus1E8H9t7N5xwHzKEuumsv5Gfa5RQK924pNtdqjzA8G4Pybc65vFFiSTEQzK7G2KVQrYxbxoQLTr25tLyZP",
  "key11": "5YwMuZtMpphVLbYk1P2c8eEEsR6qaMEBNEsarkyU3jNdgan4VPAasZsNZfTmxNfPAKYUJ8SFF1YJ4frc9egAdMpj",
  "key12": "6LApUreg6tBKSivqYV2tgKTeGVdXBQDLvuNb2dyK9JVABZZrmkJrWXt9FvSzSRgmoHtBgyk64TdE4u1t8bWfDtm",
  "key13": "m3F2Jx7MuwraDn4CuGubCM4v1Z1CM26HEw7N52Uj3p1DdHkavYUjH7XrsFrAy9kojsMMuPagWD7nEGrMN844nR8",
  "key14": "F7roVovAusvg9JM4yb4kicXFhUcE59YXdNod4xUYNMnkxauT4uNKvhe7dYAUrYdDUrsVsz9yEGpUqYYMP4XXGPX",
  "key15": "rWtsXh3fZfJdPQCXYDyKgb9ryqP13wR7Jwr5XN8PwHiLvRZgkGDjKQ9r8BBa6aT8k45893eANXypD8T43hmpJQP",
  "key16": "4Z8JSTwcNafy6Rg7mjmJacAnkctk63E374zBLbXNcH91M32cjsraoKz3KkSpzD9nwEZ7LUBHJHYeJXFNnf6C2shr",
  "key17": "2MN7QY6uBkfqZ2Tvn4a8hcSHE9GvJxBPAdHypaMBo2ufEnxYYjnJD9tgeDaJUmJsJvzP9Kesh28nzWz4T8qkCeYb",
  "key18": "5ihWtfGCXUHW3n3FvJZCL4d5L2GCW9W3ZQVDt51xHZEvUpnd3BMouLj7XHhFVfwrSCGCHGiaNsNzyyPjCwpEX6ZS",
  "key19": "5K4Q7kbwPrqB2SrdpXRTH5crEZ9eVnDL1X7ekszNfEfWnMD4jSW1KNrYWHG7wFVZ1LXpV6Rxr3THcFX6Q7a9YBdP",
  "key20": "4n7EpdiKeVBBx9fLuKGa8i62aGPVqX4Z3JBWFgQmgpyUD3xQ5s9wNxiBraAUn7LGmvHHC39V7K26S9LGSvXPBaNA",
  "key21": "3vcFF6QfyREbnVsMaN7YsJF9pN6f4YQsCVKPvHCMu4nWuxMfBjjDa1PSSyu7eWTaKA26SJyMit58bjxBuHff4WwD",
  "key22": "5zax6NRDYTz6aiY3T2GRdKfJJcuRP9ctj9ZCkx6FGbvjKct2kQRmbZxb2r1XUP8wEpjoTBYagk5b14so239oPcC6",
  "key23": "3oZD37F17ZMgK2k8efYvYU8BPLpfAcdqZfYSJUHTqjiWadKYFFdef2tiUPLbEVkT8ioJsuVCaCahnHv7BuFahGWq",
  "key24": "3QBRenurfSwdfXmL5Ki5X9VpxCZrs49fvzAqkBQZQpuPMp5v88XYkxw3a8hp1wqrEJb4HxThapD3ptdFBSRy2gLY",
  "key25": "2yNzMznEsCUwsSwU5tGuZMmXjHQZa5pYv2X4VhRSTdWALcWwz6TPGnVe59Perat6ndLih98TE6rdPcUnPyhNbN8h",
  "key26": "3MUp8zYS8ieo9W2y1W6em4zyKnazfK81SUEMTdMBbNHuoy5smojsdeadvdR2J6Achbp31KTcNgjJcP2S39LTVWb1",
  "key27": "66jG6Pq83eE3VJouRrMfsRKeLJP7ngwSYDyhFPtcMvJ5y7vbmTRSrGhdjy8wACqsUQN7MQN9F7yk4MGauJam1KP4",
  "key28": "3gWSxpys6pVzFU84XHyTfvzBuj2GGYAqDJV2Jp2L6xv1Vkb7VSAh4K9mkAPfGFiendt4XHd1e3deBuBPSgepxohP",
  "key29": "bfbEnqQCNenAdHs835g1KJnKAJF3JG212CsenazkKyTfz6YT9hgRsW1Lzz2BEqBNDnvgoSsGu3KTpJCQ5iWQTT2",
  "key30": "5GeaGe87y2Yx8wNkz9rLitYAtiJ76QcfM3aW9Yxogq8PxRWooxCrFuxiDLkRTDeSPQLRsNGjugfQhWtK9ZPrzvKV",
  "key31": "MF6yjQSKSbZZEqQwptRq8TSYsbNY1wiBTBJHzxN1cWerZJSSs526QJFdQ3gBzEyktLsyJrsj4SGmmvRo79SimpZ",
  "key32": "961jNivo2eUDncUqoZx6EymrsPXqX8zZSsAZ1b2XrwZ1zmyjAN2vnGHQH5L2XfmVdj2a1sktLrFijx13usw6cRF",
  "key33": "y3RActZs4jzie7vxinA1CKWv1RVDcxjhqSPiHTw65j7fMcu8Gt7GKrFtRLtRRKpqJW3pL5WD1Et6toTx9xFR8es",
  "key34": "4iAXChNdXm3DzSQEpU97yjukWP5v9ioMt8cxNifiApE6NGDSFKB5kNi8SZ99oaUfrbPXv44msNSJ2qLf6nhg1DUQ",
  "key35": "2idua4J4zJfoWhacwsF8axJ94YeMZyMH6AYKooRxGwMnSX77ZoC69TsMiXE9kStGLJuRuomirx7dfr17KcmUj53i",
  "key36": "3Hf5Y84fAiDs6U1p5ZVodoroceEWArGHgxHYoQkvHciBv6TaMEN2WkHCG5Et9d6EFkhcsyW11m4JBxFfdQohJN83",
  "key37": "VFjGfxVRTy9nj7gvydNVY7r62q7rcdT8J9qxX4V3wvLs7kVgfjcQiy6Jj291iiyTXGfi14CDfJZg28mkb3YBwrR",
  "key38": "4QK8ngdGnnfAWfLDvKuVdLwE9RjaunyoAhhFPNnQQbNBxXrByEu7dJKxAvrtJTgTEhC3UCRCa2DWtJCMDLpar1BA"
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
