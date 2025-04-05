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
    "3atboTUeTzgePe1eMqVZyHy66cVaPtGng83k5oDTcRtRhGRPzBFELigcSq4gaFYw38DcQykKLi6XChXzs6TjYKxU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o6XxrVzts5EFx63tGUCvTZ5ec64mcp1N11U4QKQnwTVoUySuvKiKjD5J4dNyKK6cjLisCdg5yWeDcHBWosCwW7C",
  "key1": "4b6TU1FGC6vWEwWqXg6Q9paQRzLzTuGJHBHM4af1HPNuKMutFLqu5fDYgJqSxLsX8RsdLhu1JaZP7hU13orVhqss",
  "key2": "2epAxbMNHVCKx3dVGLnPPS9mWMFim3b5AipQHjjG4MxK2ZxwwgSbuRUFB85RG3bGvciTQ5TLKQvHsaJsmiyprJuu",
  "key3": "aZeMQ5yE6Lh3WynaSNTZLGHGTmQwCVUeriurzKn4xARX1a6Uc2jgZRfopHt5iooP9dLntBAkXjUUNSoGcy9Jhju",
  "key4": "4HEzMoVcbkS7pNETtPNRPJ9s9LngdYp7MgSqv7UnQHjpowgvvHQYV59i7nZ5hmM7933xDX2nqvbKnPwtghCfB3yr",
  "key5": "2hyR6BqA7r3vfbDTMu4zTvGtXyZaqw5drx9d6g3zConMnidspfgxraikRQReKB6bzE8J7yvvHzaB7brM9nb13Ca5",
  "key6": "2RNnU83dVp3hu3QP1evzgvN4K8ZKxHPjREjpckCrJkPbvt85JKbbWJ3HCWDLtHce2pSD4dCYxjkkUXLHj2e25j7u",
  "key7": "2gi3H3K9u5miZBxTbnHCE7Rjv6auJ8vGtYDFXE9kSkBAvdEfmJYddyzFkKaJbvHPeugwqFt9JeS3kfTubFFt3mLi",
  "key8": "2ETvQqUreJannhkDQPEx2XvA2HdCjPehGQ8s6f6mc46trtMoAtEEgKn8NGqdx2P6Wo5zktM8kqdg7kqEnKsf12iA",
  "key9": "4GuUrnhDqDYS1vM4NBCrY5AQt4KQom3VfUL2jGdvXoShHjfMB2vzxFJHHMHJzj1VdLzmB5Km1vqqMWVj3hRgZJ6C",
  "key10": "5m9G19tR3boyrcX5fuZsMmaRTsXfeyZLQVBzcKs7FTr2QiB8MNSTBB6eQmr1KHZWWSShYVqLrPqeh8AdVWSkcC3S",
  "key11": "53FLCwQ2oTDjMDvtvnSDT4x7K6EVe4ZcrVKcgCEpCYF6Q6Quwo24HNdVEPPwANHq1GZwexVWbgZ7ryhCBQ1etoud",
  "key12": "5YqGQEqnv6R14MtVPYkdJ3S7yARusSiZJrz8u4sNhWNfKH8pUw2wGqAB6NasJXN5Ah3pBQakWQaBZvJLqRm7P8CY",
  "key13": "SiqpDPXraetVLVaypqDLtqLYY7jLX6wmgKSYU6Ff5SifhWN2jTGG21XKCTch188Nw4tBuLVWX21ymreKwdrNS2M",
  "key14": "5RdD6EsaZNEimCS423tm1uCZv7DtPFxd2KojfAXGTdc6TridF2SZmbd8vmfsmcweaokxxCnyK7d6sHj1SF5PgpMb",
  "key15": "27axpRuKUzT6D6U1rVXsd2ku9mGo2pSNUQtCT1sDYRw4Pj7K4SDWWPmeXTXbfrcjeFpQBbUsRSv9z1T1Jx5BNQNP",
  "key16": "3WkadvjKSSJAcyZomxjBu6Nxt1orzXftRLLjPUBGhvNchzQZrvawKTMqeqF6XCE7n9PHVCR4G3GYxX7e8kM8XreN",
  "key17": "63F1KZHk2riRAhqt9Yhnotgv9bZfe5X4X6teuEABd3JuQDkkAbe5LyaazFPBASkom9ixCWGPzt8YofiKFH4bRhpR",
  "key18": "2UkVy674a4AHsr3nfL5KkW9zafxxxjPQtKTAREeJ5jZhnvzd6ShxkmEmnXDcuVzoA7vogj16tMcj7vqdNKG8QEZv",
  "key19": "4ufqCtBpAd97EFBpfL3X6METwS1dFtk9DH6etSXBVDdZHszQ3ps99nqjwUUujpAsrVJ9EKxT2qb8Ks49nePy1hco",
  "key20": "igMMLTZ4KajF4V9LYTZ8i3uvgsXNSWsiCcoEv4HjrFEH53MJuEaJdwJfyVATbqZNzy7PcKixYsTYT11x2WNuv6C",
  "key21": "5bkmuYYtvK8XRy5mCv84dUTRZQFzgo3QPmHVvCxQh652VUJYpauhXjZpErf5Bu6UZYQ34MasLZosBbJ2QvUVksAt",
  "key22": "5dmR7CmvFeMKHjC1UWbrqPTEj91bJif46drB18qb9Xffpoq5E6Jpcf4YxN7yYzkgexBwjyX8Kx85uiyFKJhFrmCN",
  "key23": "3hEp9T1RCWzbhjBM9URPEzyTEJQNKEhkFMdj9S2TqNx6w7GcQDkvVKR7PZgAeFr4bMBG5d5RcxeuwizrsguuMckc",
  "key24": "5aTMPHdqPQ7xvYFHwfsHkcLARRxBGAUNpT35PrCLCPYmi7Afk2VfffMZHnwGhhUi4R8XgTUK8E3Gj7R83ijLDBGt",
  "key25": "4RTzzCPU3ze4nMGuccVPUqt893JMNFYspc3znPM3jAZ924ggAdkVR4rLZiVMq6TgpMM2eLAQ1PvpWJKy1esTAigq",
  "key26": "4KcBjZxr6fh5mJawzUzioXJveb2BkTYWVgcEH7YPhNNuKMypcmGvGXroFkVSVHXeLdbSQQcRB2W5FmS5cZ3AFWe3",
  "key27": "65STmqiEgh1esUMScDqAPtagbrdgoxiYLWhHi2wauTb46cxwhMcZdt8RFTcMX3XsZYSgR9MzmMKrY6jzrrea6J2d",
  "key28": "3gU3VKKCFCxtZSj3oRc1UpLbRPjR54Ke6UBBgZ6ZLGpCm6swCJoUkfa4jjNfc7y1nC4ecDypx3SbfuhvZsr4xgWS",
  "key29": "3Wh9VwD1UmjgZrfCUBnASST2Q3nnaMF53nSzpjSVQpPg8nLaXMqsa3DEwPsemBNqntzQymZGdwR3H9jepBTw3EMp",
  "key30": "3vRPiEEWV2cWTc1viHS8nSRGDuGMQQ1a1duS1qVXS2qU2y4TGrye8fM4a2Kxb9WfPPGedkmGj9ykAZvKpT39Nurr",
  "key31": "GXZ41e4rxLFLgT2AEEuuLkVa2ZFZqjSb8asbvG2n5pRVawhhtzPxi89eXssU6hTz517wyGGx6CHRyB6qGYL7fbC",
  "key32": "213pCcepHn6aYz3TBLaA9k2QLQqo6poKZD6WYw5mWQCEMjWvCFWujKtuNvLebmBc7Y6E6n8iUUU4i1xNqManGUvK",
  "key33": "4SHYaggNB25oLCfQvFyn194zUqEfbja7zsXrnTsNWZm5XzUp5bBsYtpzMyVAWYGgaCtMFSdzoFNrYyTfsyd8CoFN",
  "key34": "3gyvkobexUubLT2XSLm7H3bbNnY7iQmYtZ6XqHYHTfs5eAKqm5kFjyPQ6QaP5fevnsxoe23i2me2UHkJqN99c9gu",
  "key35": "34GrSDq9cTEHPsdhyLYgXcXfn1eENiJjUkGLwkWyyKVeJJp8YVhwKnYCDQoV1mLHGrKvmPAVpJGooB47nP9qfKtv",
  "key36": "G24rGmvJio9QWNaP4cHma5Zb4dqhY8ESY5jQeqcozh11yBxR8gYEwaHJ3tsubkdi4TpqT8iv7Zk643ZUM5jsN8B",
  "key37": "4iEQb3SxVKzd5TNktNy6RRBxbtzfp5MxUeHJ6YauBFZA6e8uD7MrXfQ5CNaFssCYdG8HzfNMcoGArUtCBh3cUvS1",
  "key38": "3q3FufRR1cKd5n4Cq77J8rU5V8VT7bqumvE7vnQL1yNf4Ah4qxQ1ZHpTd1EpCfx88eEEXR5TBX65aW7H32X2M7Pu",
  "key39": "4schgZ5U7EYTacQjCHYb6n7sZvbUq4Lp4Emy4P1jXgkahL4PASGXc2St7gTCqJqMqFHwSSQfyXfzmoHtjtHFuEVJ",
  "key40": "2NVH2SHJZELvSmXCK2JnmfTKKsqMSrhccdCucYZnbqDUJhDHv4rfaBmxWaw6ZqxH2PQJzWBkhjfE8fBqeGUhuoJL",
  "key41": "4NNNE2Df4vPvYHPrp145uKZj2aMJtrM2PMB6VzAMCGV8WPdnWjrFrdkZsHtUMPVstbZkjAQxDx3QwYMUyHfLYZt4",
  "key42": "5LuxYiHjseMJk9LhKJTNz84NeFiHnfn6a5EizeJLaiGSH4oCbxPASqKLRaV8fN5ZE44SpyFJfip8uQWdKEX2dBNF"
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
