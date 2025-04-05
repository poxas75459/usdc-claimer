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
    "3kNzsHeC2j6XJrzBha8jGDqWbgAqTs3XGxAaanjxbDhnE9p5aSgvE5snLi1umXHSdSRNCR61vjhnFy6fTDwvFZqC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NQPk4AqD11kc8xykhaCiT1H4gJoPJMpH3dDiZ1bZonFLNEX8rqwbV3WRr3J3rruG4TBpHGxP2SmSfRgFcBZsUg5",
  "key1": "3ERwyXoBxJaMeebC8H4rSyXBYZBS9p24NMmNBWi793ZjSXMmy29Bi7dciG7ZdFXgixCDUTofQMQG55D5rj45japM",
  "key2": "3SQ6HJ5gpSjEbenBvUsxzWbQVyAEYFrJki2go6L3X1tPiBb1vx433UjYx2cm7kJA3MjCsyRH7bhaDVEvbroEQLpu",
  "key3": "QTbBAHJXUyHUtozYs48JaQSPL4UioDup4wLwLhhMCFpJBtGEg8MN6rxhGL4vWkKiuEmmzwv115pGia1oNEyiuvA",
  "key4": "2VX2qCvKyS8rqtGmftRGxTPGQ27YfAy3xjirdMqvEhzsJdq3NJrWVadhu5ndFhyUMxtjK5xiNfhuHz2y3pdM1Lrk",
  "key5": "5v9c2E9D7tuCbZKGytytUpJmomVttC248f1xdGykrwnPNvR3kvu1WsNFRBXux9Uvo2oVHTiDoyFLFAeyPN3HeVKL",
  "key6": "547Ct7MPkgMVbqG8LC5KCxX3xJDrAB9w5ATwDQikEzDMF1B7FZUteVDv7u5rJf1dWyFvQJVqwB7exuDD2zsnYR5v",
  "key7": "3bGGf8mgDNJ1MPTogFWYthP7ZfaQw2ANBzvwzddWrXgv9Fu9od8fSB5xGjXnp7TQnxAQt5dGenwV5epwKhu5Mbe6",
  "key8": "479zv1UTfudUrr5Hhpk1D3jePFJ7y9q7ztEFoExFfXMv2G3cyU2rt356LRvLTQFJ15MCPeddbTJg7U5GF17bQxec",
  "key9": "3kA7gjN7b7je1LpaNPKfhMxwjqH9K6w4hFEV3Nn1Uevjtb2gD9WZwnTL8VbT4vQJGDNaubis6dPZQPkBGK87YU34",
  "key10": "3caDvhFGUTTVaWetjeZgAfxy8GkwaXQ39tkJHEKzte2GJW2ymxn3NP2iMKjnMfSymBWSZDrssexMf7xhi22F27ep",
  "key11": "WjqFdhLiTtRMKsgeAkWTjFv8Zc8B2fUfyJVYsUD4wuoDnJgeBEM4TRQDoNkHfMSx2g3xdEwSqenpXTunaTjWVp2",
  "key12": "5Fb6DxeXQEbDdUTE4reTobvVqubWMspLAMb3DixaRSXCjrr1WQAH8EXWVGbKZsEVqjqA2EDvA6zfp7o5j9ZtQXdq",
  "key13": "4bY2S86qY4mE8SBnPDBYTNFYgcmAAB4QLcA2i4zra7quh8Hzuf6emR2W9WyeNiiQ2mMznJyVBbHNew42RoD8NNxt",
  "key14": "cbE2G4LGevVcgGVFT5BYuPnt4K1n2fcuoR3MWd8CFGjDjCnrZF7AXFtHhEPx7BT3Co22VeSzbkSLK3onF9KGq8S",
  "key15": "eor9VQqFVjbcxRbDBqXXwzpVAzmidswdtrHSsZvzV9cWj3TEUrSzsQfSSsaAB69NBM9LCmfsePs2apoHexWyFdj",
  "key16": "42XJPmL28pUEa8JUpxdCu6yvEThL7Gm23ZDLo9vK3stSEzgw9ByijGSkMEAvE6XgQSvy4tYDAvNn6fpJVgAUabhi",
  "key17": "21U3sjUs48JVhup9LeQmL2zeZoer8QUp5j7QA132MHfUtLKxMXrraob5RJ6LpDiicFNVGiDHA7qAUw1aSYNGvXH5",
  "key18": "V6EYMNYvR1k5xZYtxTsYE5t9DSpW6BFXZZTjT1CxZgtrSzbAzorg8t6VdqCjXPch3dHy8dPoA5eMU1ZC33qpdjH",
  "key19": "5JkpUfaueoixz2BEA5pcxGtnHSMwbBiiChJuVF8AbZuKFGYq3dyqJXY33HTAshnFQ7xgRzFsq3ogN1dTvJJTLfGE",
  "key20": "4G7wQT1DctViT7GJJVFTnAFz1JpxZT4hbqBtx3A2dckEQpETi1dFKt1mm3SmQjdqVXqenBAsYTPt5m4KJaidn2Bw",
  "key21": "3ZCEFrB54AwPSNGmUzB6G5FH3jxzESdCLmRd54p6sr9u52bvqQvrTyP3ZWkQRkKySzzm34bJZXp8U9vwVmpcRKdT",
  "key22": "5RRhMHrQimB3mJFt5zccWgAkwF1raS4WExFWo1Vtn3yLHkKbQNknD6wbvueVwMELpK1ruboKt3FmgaKM73K3PWMu",
  "key23": "4z8yCCrqSx96WYBcLh7eAmJxJAaJzGDXmiKNLrKYfXqyPw7uVg8VXJ5DCh1k5viaRGEWLGSGn79eCUGMbzBXMUHi",
  "key24": "2PDZBS3qpn8D5Rtcu35yPyB8j4YvqpiYoPJQpDKDR9e6UFdXfZFB35t34UsLwVguKn2a93TKFeWrhT3Fc8hVCpix",
  "key25": "5PnHFq8VAYWy4k2ASojAUoZq7uB1CkZ1qAAArk3VvgUxY82QDao3KVkiiXP7ZH3aJxKL3tcfgSFN1P3VxMgR1kLJ",
  "key26": "tjhh5ykm1ytFsHpqUriP1Auex4xMAWD57JpfFMPhQcqCvjVUcQP15emvmp6T4hckd1TCcfWL35bQ9dWK7EVcNQC",
  "key27": "Hb7jqFwVbfkCY8yBFqHv85mm4FR3CZVUk3ff5Y21AdacvULysVC4CAWLpynv6LTdmdDmFrLkTfDsK6p5kzcksyV",
  "key28": "2PF8h5kgns3j1ZX24VCHKXpkpudBVvwjoztiaBTHZSCJE3hNBWgZYvYzXDioVhk7ojXxM86Enjh8xdQUFQgFHSRL",
  "key29": "4B1HeMvphAbeU4dTuwP1RdyEYPNMEXAeke9hs7GDHFixZvDvhhizZDiPbjfkCgmVEQDsHQKAb1XcUNq3ixjeyr1Z",
  "key30": "5yvRTAWaHTwg3UP4H6HRn6PhidZy4qAVNinE6YjBQbLbf3d1mSh5rgcaYGapw9BrxuP8T1W7pVFVM4NQvBfRvzqv",
  "key31": "LjSsBEi5LkFXg2sPiTa6VqkVvpf2jDsQpu1etW4evMxoVLy7bA6in76FGKBpgNG7r5L6qT9fajBdxDKGQQ8XChA",
  "key32": "3Ro7W4xw2BuYdQd9po3p8eUk565Lhg3hj7hBRvbpBJmpZwNRkujN9wVeSdTcCYAWTDr9GphjR7ZKUzoGkvP9SYhq",
  "key33": "bW2qbt5LPehqt4pK3WUexgaVD6hGJBpL4mpNNi5n5TiHy4FwQhnGkFb4HkGhYSqQzioF5vguYifEdB24HRo8jCw",
  "key34": "3kVUNN1P5ev4GWjXCDcxuevudb7DD9aDiomUb4utRzitYkTZ6myQi3TFBP4TVMykc6A9xC5zEa9mEKtK9EtW75BE",
  "key35": "2K83PY5rXk2WFnbAvf6Psv4x9B7c16afJuxXxbCXAiPnBjDEVfpi9425kYvPfv6eNacSX5NAb6UqoMzFjS2Yyye2",
  "key36": "odq9sMS5Sn7BPTYoUh4gHVoaoeWmSVxXgf3mnDr2PxnKpSDq5FDjBWfs8PMprCjpzLUKbvpXniLwn2jXrH7R4aH",
  "key37": "5QQ71NryPhGJnHkgFERWZLJNn7akWPsoA4SdqF8FRGy25o1tmcJS4QDqmUjXhCT6Vk6bybBZvp5MbT2Rg4sEEHc5",
  "key38": "sy1myWu97XrXaAMJHSWdUCeo57S23axKz5FtT6r1YgT4T69eH3uBdsry7XguShAjpcyXsaTW4288T518MbjFUYu",
  "key39": "W1KZXon9sQfvapC3mQC11qhrz3M92eVUtHQQBUUt9R37t4UYjnj62bHLubajjqDYMJbDS9UtrJe5eKceNNbMmEv"
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
