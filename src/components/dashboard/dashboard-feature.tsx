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
    "5EapMYcFcsnUJWNgjeCVAP4GnZVStJDHCrEC9UtvJ56hmjXSW4b663YmKGAptViWrnBz191qqZCHdWV6SL9k863R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w9SLTqiySgNjaWbYSvcKfTJz34mLJNrkpkCwnbYKHtzahivt2J5zqTPGazZ2kBZuuhAfcjLHB9oWTj4JPX5M7s",
  "key1": "3hnSS54J3BkoFzbECS6pReBG4d3kzThF9VSQgnzSc1wrSRhk6SnEcx7smhMNFSkFgMfAFqRGEAFJRvJZjgM11pD5",
  "key2": "35vweAFxFUSfhLwwBQ5BiercFMhWTNCaDZT62jXEqv9JTBLPqKk5H7m89FbGXP3PzGxUhHf5eWrr9muMbgzxHntm",
  "key3": "3KBNrKfZ71oBhVuv5FRjL7D2VujHzUwYXh7ij3EZ5KNcMm8vzDUFwZyqRwemJUN9DbhVrYbj6gzCysL8usd8Uo2p",
  "key4": "5zd6jaguvcmdyHwiBjW7DqXNBr3wVv26PW7LvLJK3jS8EwfGBCkXLxNqiYa96oveZf4sfqGei2zyAJsAA9joAyWM",
  "key5": "3icc8p8YKJbADFwt3YzkQv2Mx99nRBbMPAib8DNEYdVCQtUqveiETnFZ9fzDctk52RXPPMGmR77MFR9wHdm81wZy",
  "key6": "4pgyp3i7ssZLsdjaicepBUpkt4bCEkkaYZsMEeHSk7zK7t71wNcYrPzasFCwGvbobtdvE4x29DXaV7CaRjvNus1S",
  "key7": "3jgpbWmXrcZJCWYRVo4XJmLA7W59maFdDhFma3EmgSU4aMhgmFDWAHtBKdnRRCdVBB9fiSeawCyPhA8w49Wa3uzA",
  "key8": "5yodbozWLqvikR3GxmofqyNNqLi7A5pHHMAxvNPfVFYiDtJDtpoBC1szmLRJuY4YGXDYq7ENXyAPYLGbzS5P23rB",
  "key9": "4uDaKQ5gkSRmymwsd5Knv5TrALvvdXRVBTzVkCq8nfj5n1gDFZhofipAViKjca6bxyMvjMiz4nLQEnTpQGsSnRCV",
  "key10": "59SXgEy4jeuU9NH4mCPUMWZCpdJ9N1ABYz6yzophBWhgVSaaJLXpbD3KkpnBBzGsib6EUXCGRruBsmswuecXRmZ9",
  "key11": "5G1hwTquE7AACJR97TTkHJdpRAqNHkyaWaSqdPBGvcXj29Nemymdz5atPAH9c1hWz3d1s81dxpW1JPmt3nCJi3P7",
  "key12": "2t99q3WfERgz3vgquXG5FwiTgzVE2r2xfxUZoNTjVo2nxXwW9utn4GJwpJCACQoA1o5itJgXNdVzKxUio4wiFQNY",
  "key13": "2z6cqcqJ4P4tY1seFB3g6yjcge6zHeUcYYFKk7aB9J1Y6xLCNJVXxXXTEtcNKMJqE1ruMbikAAd3MpqwFygzRJRQ",
  "key14": "5KuDSxcDXkKbQkQym8toomAeVhBMmLfci7c4Yzm5KytiptmwHd6iurijU6zzP5PtJTsHb7MFL4LPKsDYUmHY6eNy",
  "key15": "5siYV4NMmVQZrjtjvQBowkHPgXPDV9NeMoTZuYNDtCYxH5LncoutANCtbHnbryKTo91vH6kXrGJqwi55eUg9L1mH",
  "key16": "2QrF3JbwfkX7keFDouk9T2JAe6vAqTEH1ejwbfkAVZ1KQtASVUmMTECAU9KqUWzA48mTGmHDsBS5oX212dzw82Jr",
  "key17": "3eBXYf8yJiVJRTVhvFob6vV5mQo6wsCNkmRVdGEycQatRprr4Lk3gSaDG3nHQGZzC8MVo6RBcChvdz9PSiyqHsxR",
  "key18": "G7zMtKGt4ygnWqTBkTqmozZyzKAH5a7P73rpzUosgDxedpfRFxTv821ptQt1wkfpmhR7MTN3uHpL8tUbzFtPk9y",
  "key19": "4KmGxn5WitDKqAh5MbMxzLttBWxDRe4bEetJEXc6ZbJ9TdYDi2S4vG5YMkuMQFRJEiHJSub5UdTSes8a4HxVnfNJ",
  "key20": "2yta58Bug71ttG8AMgSuVKoxfLKC8M8jXHrADzQKnAPep7rHD5GtDbApEiasC9QUg3WP3Xdw3KHPGgbZAfM3amMp",
  "key21": "37NWVKwtB7QgCjicWtnSE1ehDUqKMFEifkKmdPLchzp5HwUu6ZvDX7b9pFxx6HEuRd6Z9xK5hLbT26WSSFbAj62n",
  "key22": "3Du43gjDXfhx7bNBVFNa4nJAKZAtVcRhM7M8Nc6zp9KUvoQXhbo8an9qvPzvVpqiLtUht93UpqAh7WYYzfuB5Fmz",
  "key23": "5UKT4KmVAwhcbPm1azNwmzJ1BkLfxGsX1QXpVDiwdyDXsXsNERLMZXgzt1VJr6TZX5js2PtKxVCc5zBpS5cFaJC6",
  "key24": "5mhRwGdKzbYoVoaTLHgDhGjLThP4gFwU3DQEyDocSsQ1aWZ2Kvog63ea1PEYjqZrKb4ffD2dbaA9qrK3tdpxMpcw",
  "key25": "RrKsdnBNmB2mnbGXYeS7nTX6yyydsRBJYwtWNwFRu83PZq3z5VnPUxGNHceLcP7MYqiM9xP2aG3aLsiJTCG3FMe",
  "key26": "64qdLZ6Y2bb3GtMprVc3aYNzBvrLDyqXZicVdwhQvVcrhvp5ubjztfZwb5XyziV2i3iwVhRm9FBjSKXZz362AaxC",
  "key27": "GuGZKou1uJPFwqgHtZESPC9M6t8sHLFaFBLD3QJX4Qq3HsuKSwvYNBB2rG6KoZeyKxYw6aafaWX4QZwsopmxqVc",
  "key28": "pvVjCoZKhVm5a2YQwAadNip3nMNZTsbPvLMdMosVqH1B7VQQxhnsJYmqGKkZDj8QGrnbkzUFTpkt2iCeQF8EQQ3",
  "key29": "4caBrMAorJPbHStDLaauAzoosyCBn1uChGdEbn4oSzPhjkofp3kCnbWM3csNjPiGNCrJC6KdbBqMppfXeM7U9AHn",
  "key30": "5UVhceanV8U7dYFXUfgsCgzFrMZym1XcXjrUTvjV3kXcQWCjuBJYfkNM9yxb74KJfTYG74vUxSPV3DCe85CYwHud",
  "key31": "cqKwci6MaX4QMtK7NDdvSVJgn3igL7TvZYuApPWUTdq15xKsjWyCvRW2tTbsKcqS1UKaByH5Sw6CizLGckETv5u",
  "key32": "3TN2nNF8SEECXz5TUKTwNgFnsfAYsZyFJxihRzWmwcZMkrRr777HZyy1MGtRWxKYDSd6cpNoeQHUe8iJfrhxx7L2",
  "key33": "WtXVV16VSZL4dLjxVEGCuuLZXUXhTSqocit3muPy1JmYpiyWmxtRLa2hk62VkWvkARC88U835xK1PqeWJeFP3Zi",
  "key34": "4WkhTuyxVt2E36to2TunPE6PrM6hbjqjmrciVGuSG9QkdVGL38eARAGMftXuytKdU2QXfywSJFgVqXLLkqiw3xXh",
  "key35": "3EEdU8M9g842aEcFoHNyN2pGCGeXBZ7cu5ruAKvtmQmh5ChzqMHS49wCtN5ai7cXQf3m7HM4TtkmFmdN9PS7eqv",
  "key36": "254j57SLLwzXdR4aNXJx8upxb4PhxKc19Z7oh8W3fdR16MchrGQ5q4aeLhxXvLFjwRgmvBdaDHWioTE86PrWWupw",
  "key37": "3xy9byZGb3PH3i1mxgNERQ5YpdD9hFBjvmRw7ZPE3ndhPpUGMQz2ziBxJ7oBeXwbxzRhLE7aW8LRvtpUNVCBsoSY",
  "key38": "3CpQBpje3vj55rTNajc4tUihYcyuZBTT6dBw1g44qFCrk3hBY7FtZPXMxUcJ7GpPApQd5sfRxwhZLG5q5PHThqCF",
  "key39": "2nQJ9AEFqtU6cGRzWSV3M83rwrGmq1T2K3RNHCdPPQX5VghrrAAjUsV7Q1rMiUAMhwqZXYJjmCoDh7dbCuHD4DhB",
  "key40": "5Hfoj4cs4hjgHKb5HpQzPaYv6efnvSzK1TA6bzNF3mHAJikU5GAvqe889yjwWVGaVfAwicXVXDZfR9pHurAZrmrW",
  "key41": "3hjh2WKcTghzv9n8ZSLL5fNiKh2rCpYSsWs4xU1kFiaYtpkHCR8G79PCiDM1dPawY9nbVoqZVCSVY1DrLBuz3vyM",
  "key42": "2Yui8nkfTUmfckg8g7ewApmpPuuCkjABbXY3DhYQRk1gXGdTEdfnchMfgfCNt78vTCfiGMAbaxH3AyGmA9tx4cj5",
  "key43": "3WHw53XjjaVT9KCdaWeFM9F7QJDzE8ncczACNbm1JGFoVuphR3jNNMzUmndQgGVxL6rLRZtpk8EEcooHDHdqv8Se",
  "key44": "25fmpZDyCHQ4r2nxBobmPBsU6XaCqsCFykSXgvqHpF6BPVxFwsvoh5dzn3AXE5SBhkaUcsfnFmWxgQriNjefDRT2",
  "key45": "2tkX6FsUJyNiyuGS1abN9fz3LfsmmbvTcpBhdFELtnmHJdzPHCSaVxxnRs1GEy8y3g6i8SNwzWZkMBEsmLqDgUsW",
  "key46": "4vQMzxG1k9hBGfWCzibZCQprooAs2xB5yrdB75obrB6mGjR4mr5Bmpr4bkCz6JRbhwbihqAQjLgNGVyqcuH5mZSe",
  "key47": "4f9V3PvxdwMhrFX8kLWK1nbbEpPz4H5NuQxW6HKK4nY3baTbg2cmunvLjTEENhFfEUwWyPCNKb1z4KPUgd5d5Znv",
  "key48": "2wVkTk4MK25JR6ivsxvF6Ex392wdpzcb3sba4cLrPHeuTdS4CKnsYH2pQ1HzGXNkDpN8VapW4itsEZUoLLdGDX1Z",
  "key49": "5q7ZxeKkaRtsm5DFUqH5npHk34XmPU5AKT2ZVyKKZQHAE6XETSEmEkmX3MQgD7RgwoMsyL7mZqcNSMkeZbuxxXQn"
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
