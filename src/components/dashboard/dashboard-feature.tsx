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
    "uB2hR4XVJUkPwEuayvw5zHnhvQRvH5MeAUNH449xr5DiSJRWEwxFUEYPYvoJWF4MaUHKEYXevemkXHNJr2KK7jp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tUhpBPR2JtvQkyidwFEHv3VdTLXF4o2EmiibUcBsEQ5fou3sreG7RhaERzDMQB6R6S56EmpmrgcHyC3ErvwD7g3",
  "key1": "3tJBCCh5TmF69r8UfZLj6WSVxxhtwectovrVpCLseVqQekbfAaFBBsDPmkeGezDeUNozybVKizuNTm3yA6vnZ2Xb",
  "key2": "2SctGxjcMEhEKucx3wu22ptSABoRLs3AcVReYnt51puiQSEZSCTh5YXYb1b8qXScvvGaJN5L5ApdrbQkkdG6oHXw",
  "key3": "3apevznqxuGL2jzK26ZCEyeS1RGqCkosEmFrC56tc5kfrUQnrczMQAYcCTcXDzemRNZTcMwjhJSxAtaVDwCrdP6",
  "key4": "vjpFgZAXUePXLwCMC1JqGdJWqxXMxFdReVNSTgHjnzSsyC9XudZ4jwy9a5am68oECQUqBDS4EhYnK9SEdJrgFrZ",
  "key5": "58RvwSJYCa6tvmGxzDd5DoiYkGp7m4fr46gNVaNayncPhMcJ55KAdoWPnR6j3TszcYrkpbDkJeJLaKzDBYfMPiqW",
  "key6": "2TRoprTE6aa7oVVhecohm2tKuWKTctxiZYbQZBrQkaGHaWdAYGqP2QX17jxGmAEw6N4GCdnino5sTEFVJZ7FyCUn",
  "key7": "2qYd29i3rEpmd7kgFc2e4kiAmMe7r4RHFsUVshVqZSupXELs2eGFwLn2GdahQNLELDsr8kBZx6VsrLEGgdtMMHPz",
  "key8": "4igTmZKoU1ogFCuvLGweboRWNGVrcHcaNTmKNFiMPBobnkbyAey14fEhoqqTwQ2TmoxmaKjgwQmwivd2YfeemUuq",
  "key9": "3g9EArv3fPPzYMQFmDaoAuszEvK5nvEipdiDn25M2oygBWQweGm7mjYb7hG8ynQj5k3C7YYDAwcGa8vPbSLD4s6f",
  "key10": "3RU4eW2BHZYh9YMxVCPbau3QvhmHspjnS612T5qdHthKyf7DERZPP2yWk7WAJASd1baLdiwYcDRSsSA4xohkR1vZ",
  "key11": "2LkGcH4jiSAZUu6oQFhqsJNrocr1vLq6cP7jmNJrK7eopi5CS8fy4Nb4DLYi6HKdpYwZET5YyWs934ybv8gk9NkP",
  "key12": "tja64B1URyVppuahesyMdq5XcjHdBYDvKsSkuqLBda2zPC4Dic86Z8xkaMU6N3U975GSegnFf6Rc9FsgRhC2FyK",
  "key13": "5PMH5ExKkX4xgyeELsMqKjYhLG7pT4DhFLMN4oMHryC32weZMwPKTsH5c7KezJoLmjCboXn8MT3wpci8Rjsyuyhz",
  "key14": "3WWCZjAmc2H8MeZ95w7ZF6TF5jeizixLUMXqJcGCL8ygQYt3AUafUNfTwyvEVhkEiYafyBT2BhjxJSub5QFe9DwC",
  "key15": "3tEvA9tbAYK39R8YtkGfw32vhzXQgrfHzoTAB1iRyWpYjxnDDzAmJfo9fRriRHJuYf9gDm3m6zGXbB2AaDaoZHEN",
  "key16": "2qVpzG6xGZPoWDTdxcAP43e7XgCbaPd5bFYVDE8Ea8qxrseqRTX5Lpn5PA5Hh59BDqD6mKEi3zVBFNRLDSKCSof9",
  "key17": "26m5xPXT9nKQEPEJfvDEyyTwhg1Cs7s7bAFKE6miz1aXPP2P24AfSGbGACu1oP8RES8NjHGq5SLBm31rsj8Bjp8N",
  "key18": "2UffVSgXPi7C5QpB4FYniSzsK88arvaHa7EKk3MUqeMS2618rmJ768L7KPDJa5a2ppsw6piN2uQTEacfiCokpkKA",
  "key19": "48HgJUgT5rhPDwSdYDRZ76mjN5p46Bc1Fp9dBfCwVRyCmmoSeidmhQaTGvnM3URyxUS9syGZRFpGG1nosZp8vS38",
  "key20": "2df2pULsp2C7wyY5su1Qa5D5Sck8hnQ1tFLAd4zBTZJb99dsvKvKyCZ6BQ7dkXcMwHBAbfmTiPbNx7EyDLXS5rt8",
  "key21": "3ANica7LpvBHdfcaUGmgvQoU23enLnzY3UnY3Cp4PmSRoKDVTM1k8bS8smoyLGTaibxBPt8iq9jhToY6xXe8XXBM",
  "key22": "6QYuJxWzRonZrZwW5fSSWiPWitUghjfTDZ3rLGP1427m1PMzweWwdduYVCJdAGnbmbghHvAVvYKtVwL2Z8DVKTj",
  "key23": "4oufFJ5PdPZpe2xWVbMFNKWDGTRWuEMvbdsacpngsxT1EGapKaxhDz43kw4aBKFvP2Lp95GLwY4eAaHY6drrKgLf",
  "key24": "zgBG5g6y191bpEx5pgWhTvaTEyXZds8LrQYdfNqwwuBebhBNVeCPVDWYeiPUnUJowNW1sswnudiW1LeAuFaBDUE",
  "key25": "5Tiy6jYBrXgL6kGJujK7XEwaApWpercw5qSENymZHjcDM2fLu19cMaD2ahkshZVypUZVFLBQnX8vrDdqj1h1NMi5",
  "key26": "MELqP2TTTv6zupKjWmLmM8gDQMJ1eUt3JgDW4YMcQWbTe2W9VrF2W2qZvFufGR1WBWRV9jRWUHKbcTYhHbM599z",
  "key27": "2kSm2xd5yiZzDvFaNCv8UfHrRAKNXzpxSVThBW7dpYsJSUExuqqrvUK1nBjM7nXRtPDbtdFMZCySpddv2R7QQGvb",
  "key28": "4YDfypCbTUCNtHzkFAHn5xtjLDbhaFXJLMv9tXVpK4WgSHjkUtLiGjQdpFLK4pTDayQnS8PESzwVCAriT6SRyvbH",
  "key29": "4iW9w5VDCXdyM4snVPNGBJRbV3oFCd39nBMNUbE2qry5VYA8iPudDNWtP7KqVbSNLVSp2pv3aRKBDZ14e4Xs7HGB",
  "key30": "5sV2mFHG8su1jbgUy55WmEjVwEQfhu4unYFaM59pZ7ZFmvTAW44WsU5NhUk59zmn82evVMii8FRFiexMGPMFjQhz",
  "key31": "4zisyEfdTXdJVfmFdc9koac6bQjbncuUbXsG9woF3HgmtcNysLY98vFD7uZjL3TuvhNY4LPC5qDE5noDJPeY94rv",
  "key32": "2yfXtEfAyCRSWdUWRkZ9X5Xc2GTXz8h4YoP5gyNLGV44pLW4uxGECKe2vSyDVJE8xxkL2z8SzzisytTjCiPTZzq2",
  "key33": "3tsEB6zaNf9SbC8d5cgaK5dtPtCUBtBbGkHfgQ9JuwgLNXq2is7q6ZVhF5Lvp8yBJ11F8VUCFTK6yfZGY55iajYS",
  "key34": "ShVRxQADdDDW96iLxK8Mg2PH5jxUskfVXAVNs3fa4hB7qXa8okxYf1vi9cDnbqkeufD6uZYut3XwF3S8JDkuW6M",
  "key35": "65vuNCdioKECh3sgaazam7ouKbGZEvoLuh8yLj6j73LE91riiYxEpfgTusmMdXV98Qv5sDykPW1N6iY3hvybzTyx",
  "key36": "2o4sgh7f1h8TGUuA1Z1vk8anuDLF7Ty4g1ZefCW52KmpLgEJdmuGstVzDjYjnqHWcNojk9fDc7YkY6sVmfptkw64",
  "key37": "5rng9HLHG2SbVMsHJkBjNHyRpVauicCn4StQeysmckgSFMrJcMMXCiELyTNAoFcS2vT4EJ7Yuh24eHpS4xMaXuPk",
  "key38": "2yC4NziFpihYH2wnZ5yNtE76nKQTkytbi9y6gjzGjEiyCzWUqVFASAd3M23RFofbb5JAttqr2zesEq9YssH9v3Re",
  "key39": "263WuFo7e57EcRvgWEpi5PUtrNTUoRCtBNARHkrDM26YQj6DGSqGaWUaNepncnfTEKJpeJr1Wa3iKXXoLcmxQASb",
  "key40": "HTHnBrfjTvByZpMsBNuwzmz7jbvH5rAXKSvUa2GfN3dF6J1cMHvJWRvKKEqDUcHtXFmJFQdXeGwscSS11ndQoDq",
  "key41": "2SpQ6QvUyXKqxzA7ACzBsE9MjKHp8JH54rXSpYiXiyPhHcjtWrVcLQkqpGawK53F7wKY6RqbmbitFnDe9Vcswd4H",
  "key42": "4i8o1KMqzL3QTi8vr8RUFD1FXa75Y1snyMVmfvmJbiWzZ9GYUjgW58wjHyhx3MYWaDRrrvN3smg2EcaDyTnbsZP4",
  "key43": "e9kRyx56yfgBeLMCCRTd2usHSCmxqk4y361CerHRNHgVZTc9vTpFdoq5CiY68pd9vuuunJwxuT25d3AoYfqBAGm"
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
