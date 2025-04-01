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
    "4GAMKagDsiwZ4MEN7nrRWbNX4pmJD3QErN9cTx76fsUaAGVswAJaT9LzUNG2mWzMJaKEfVPgjYQdCra6QBe7BBn5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MWUGiigr6CuZroQikBi67TcDD22LRWUtE6kPkRWq4vVKKhTB1YpdvNvh73BmNgdV3nhVPhbAnBKj6j5b77XyTyb",
  "key1": "2CpPxfakpfHcbi2G9bA96ViHPEBX6ctaWeZoYALTvJ38cM16AaTBhVqLEr42b4pZfWs2EdNpPtLBK7dfsqUGTntB",
  "key2": "5YaxKQPTqxdQvgHZv8jVyUt8D6bnjaaW4tR5xNCmPAqmJCr1T75VnHdr8Uw7r5Y8xoFsmMLVJJsAPm4J1QrLV28U",
  "key3": "3iUujYsnTc36cXQ2Syuog6wNx4ySx2VRNCPSzWA7uQJJsr8BKQAJoiD2SAAx4fQa1yPs2CYpbn1YnRD6SbKX5W7g",
  "key4": "3BrmKNx4K8kBqyykCWX7p8AqwQwbEq1q7WpXiDNyMsFkskyddB9yeiMRgXA3jY3nwcb9Kebz12NxYeLbpCzqkLq8",
  "key5": "4vUzBCFUvRfyS193Ui2Njbj4H9tLXQYx9VMvwh2So5HWMLZCBtJRRuZZe6gsuA7Qi7MgcS5aPQQubvfBdQrFBhNZ",
  "key6": "22DncTrYo7G3Fso3wHwFmYKKY7AkMmdq65hrLtLJFdZBjyKPXAfhLF6fR2ZcSWjg4BUStSzuhEeQH2Hkzrkc6V5C",
  "key7": "2KxpBgnc8VyQ5GQxZmQ8hEaXVeHUNxewV8wTxaUfJLYJkA6kY3M4tyngRMsfdSECkZYCrr7azSe7PgSDDYg2mN6J",
  "key8": "57WYUwX5pspDQX3Ak6cFu5gWWw4jnTijxK8TG84G4WHsFkxmEob4y9EUKMjegiYNEbpKndVe9Yhk7StxEyf4uXz9",
  "key9": "5oLiQbeT8s7HtWy6uQhArDaZcVwPiPnid2Cr77sqbCLvbisD4gvMY5bxUA6Cfphr61fysaHvQsU9NbU4q1mGqn1F",
  "key10": "4YgZN3NYKbFTj1f13UF3Xizy1GxvuoFNECAW1zASAcQrmSNGchQsUD6Zstpkejn2oaEUQbcmwYLMNYrGsUn7XJhV",
  "key11": "3BxgLokXDz1pfWkeKJ4iGx35yCfiuboxA2vAAbjcAVM24VPni9qW6RAU53TGuDHV9zUcLeJaeUbib3XBduBQLvrL",
  "key12": "UCTRYvF5s47WWgFBnEXi4Wm2wnYZ5hoaoNmLxQpM5PwZeaAXNRYh4puw4zV3cA6Jpez21SagVhKav6TkCPjpZV8",
  "key13": "2DJm8ZtV9D3vuv1Yrnqg74swddpEEt9x87QfpvM4rMK2GFFuakBB8wa4evXQAocgMtRMETbe25nK9UWa3L3M6vBy",
  "key14": "qPcTNb4CZWdFLNbewR9xqDumo42Q3bwfRH4mrQH4MQNcR24cPdFEvABP5o3Kixv6n753ArnKWmuDLyWmvna4qks",
  "key15": "5nhABvgrYvV9Hh7A5wjzMmD9FS2TiyEToE51rsEUSbY7sGuazeMHGwXhkmGYRhEhqxN8Zwc1Rca78rgo2U2hhdmi",
  "key16": "28Cnxqoj2LX4uXxpzEF5weJ8Q9gtWBDFo8gmEFYPa6TMqj2oqp7fSPXJ9kamhGydmRXtzDBb9BpqDUpS52rFmmhZ",
  "key17": "46oJAqzYaumkNZSJugGsL7i14Lv9VwZ94mYQEpDJwnmw2cJvmfjJLYyGqARpef2ZN1sYphPuuzoKbg3FgoY9QdM7",
  "key18": "59e1rw37s5RYucS5bMS3QbVy5CpRDSwrNuVaDV2Pb9XzrX4mEnmM8dK4H7nWALA9pB55TJMQBF9VLfhQYbGee9e3",
  "key19": "Ydxpxo8cqKRqkZuJk3bckZ45WpEw5EHjH65gcn37CkzDmtLCbLM79Xk1aCSSjfJq67urSu2yJ41Z5JBqsKjGGNp",
  "key20": "5kbLn31YyCi5Zq4ZKVQgBVqq6UEycm8dat4ZCrh5wwrMiBkKgXwvCPQGo6qQzyRepcZCH9RiHEnJgQyaWDRS2RhV",
  "key21": "4TxXaumwJydyMbsdpqBgi48cWgxZtmwthqY62M3ChhPyUCLojh7pCGQaY2c32U9zjiRGtrNLPCRCYZYNG25oB2Xh",
  "key22": "5B4fQctN8tGHSxpRrdNKfDd85U9Gtz8yfPrzLddkhp7GHpucq2QZ8SRYRjWMDRj6LY8JrQ3yvtcLu1HLWDADPbGU",
  "key23": "3zWq3EzK1rSuehdRy5X2dsCaCAX7iTG7VvuB3NLbKcgAE3xhQci7f9Vi5XwecDqtHMikiDcXfvaemhCwak66Ddm2",
  "key24": "5bH3EmDqk5r41sSLXW9H639TUXCZj5xgSSNHib8nDqwY6hjra6eEEwqsJKGywtPmmvQkBwyxKJWtWVRCtWu4dhq7",
  "key25": "31PykVaUi5DTwTgXQBCqyHCGXxMQsqfQrmRyjfd4K58Rhw7gvYnqgs6BN8r4m9exoDz7ZuJiodY48PG1E7sx242A",
  "key26": "jPoUhg69qRokpuNYQfMjEXVtkjTpWCLTSZEnQGPhUqYtXnpS3HZCUUsrGVJiKC3pDynmGLDztYkvf9aKd5Uzvws",
  "key27": "3ApnhrapKpUk2pXbBqagbxPa7woWnR4nQPxFh2dfLzdmnPXsefsKFnXWfvxwT71MYdZcEgRchcuo7BeEzAq1SjWX",
  "key28": "63EX3roQ8y6X5KfNS4eZ8hfSkAoVq3sNsJqXCDndL1WdwViWYirMSgFwFQR3jgSwNNjt85mhCn85ZCRD4HSKrTQ3",
  "key29": "3T76Xvh3s3Dz3SVeukgw3TB4WCLV6Ap713Ekq2jF4aAjRL5ZUbvtBFzpYqZMw1HBF6u515BA7tNbEziFWbsouDst",
  "key30": "3r4H6z4osoq1ufKqAR7GbSWA5akJYhQ2uYMUg4hBDvFWQMFTZTyAVGzNFWtnwduSgmNHM1kK8jsEXyDhXfgnDzn7",
  "key31": "5tyu9gKgtzBsvEcx5QvB9R6X97zSLihDDqjzJLuK2XgT6B1So8rshi9KWr8uj7CsdcNNjm2WGkPRs8YDTX1D51aT",
  "key32": "2wZVTj352GGyczewWqRhEvW1ZRr5pEXaaA37k6qFE7RgVYVEuWWq3rRJCShBSfXYY1z1bty85bGFwTga3fymn9wH",
  "key33": "5wKnp2ocXLErfn9QhWniYrpYzrKKQPuvRmUCVt4JAKfiz6EaEYGbtqaPP8t1hCwwKhWbycmMe5CqYhNuLRDTy7tY",
  "key34": "5F7dYXiAKr8HJxqPH4uXRGTm2jxDsDz16iaMyxhtkyuo6kGAMS5KydTCTTvWe6Ej2rcqacr96PRGzCL9xk26Gk6H"
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
