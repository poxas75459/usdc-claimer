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
    "5xuk8KqGjAD6K5cieZcAgm5AevCHC95yVDLmQ9DB2emu1p5qRovCg29wu5NdxKFnvWdr9NhYE6qa8rCmpFZbA5KC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KuJdkhULhnnxeWxXjv8vmFNtAZxEU2Z1vsm6XZCFE2DoTxusySNGASuLVz5SMerqydcmNvUZG7x5JpYVvHqH5mL",
  "key1": "4rz8raWihk3PaUoP2Ufp47inH9ZCpjxzDtDuBDxZMiZtXhK6oBHvk32bR5VJ62aAYvqTEQ1Q2JKztXp14zGB9Yrz",
  "key2": "L4F7t5cuKgJfJXVww8xfxnKGakMUhCxhKWZdgNRSZBimYmkBxjy7DnrYtq5pfKjvG5f8h16v5NzzbBM3P6yr8Fx",
  "key3": "3TnUwvUhqhhZt2yXUuK77dKMNChdYPf885u2cCGKNwvCXvvvSgBogDtPBjFTxuWyoF6vjRd2Gbh9LmTFk99mJS5T",
  "key4": "4As6DWP4YvtbpZcaCVFpoQfmw7CDqgrURe491qo93JMqnmYKCZ5dPZJUjQx7zm7ZrWRDdPvoWHaqTqrtMnGq5PJD",
  "key5": "1Ew2EQTgVzQsd8XTTQdeRXVu4sRXFHsGsC6PZtbwvaAoQgKUspJPaQgHFzunPLimJY6UNa8QLC7yitjtBs6aSnG",
  "key6": "4tGVH7s8v8HnajmbiztbUNQDSRJ9uW9oqU1HP34LcDzqMB52LDFi5geTVLf2QB9E66Wt5iSUieZrYMkWp3fFAcSD",
  "key7": "3ECxfa1XEFEntN82eNaVN4pr2GbMkKSL5gQskco6YKqfrgCd67G7Y6PjCKBrcQbs9FUbooi2iZbsJu3qA5KBeVi",
  "key8": "5pGuUhGU2w1oymcx21c8ZDdX855QqhM8p2BTHbez2Tyf2zsm7Sj7tehRUrbPryiNcNUxiURTduxozvY4auekaany",
  "key9": "8j9fHu3QoUTi17J1MSgvPRzz9pm8GjqNgpmKCgVfpHBKmwT7KzadbLWLX1kpWvcxbUrg6TPX3JvT9QTomtx8Gfj",
  "key10": "2FAF4iX5bQGUeZWoiJX8TSoYQkF4vVmDteCmAnHpXBLxqkH6Js1DtegH5rFLaRD5MPb5gmx1NoXUZbDeDWyL5jVd",
  "key11": "4t4AF7bgx8VoRPwW8QRkApo7nmmPrNGEGiZLUQVpqk9mPqj8mtLc6rNqtgSjjNfEB6iJNsSCeVP7f7k1oaubbmAi",
  "key12": "NsKTQaBqnyw1oHwqgEKdGUaRc6w5kUnUvwZwJmT8D7QUHAW7cpykBheDmGmdJRJYqFgtvPskFVHyB2rebZ39Lq5",
  "key13": "61bNhaQdYN5vbYWyJzNGoGva4zFcKxaY6gLVHogg6xfnvXV8S7WvZ9ek7ztqmRC1Wq53f1kpiYA2EBTS9ypWPJ4W",
  "key14": "cqvvfc2nQjDe6qwToXGP7ZRy5D5b4xMtP14iGLFMZr6eNfouddZipcSayucXZ2ULSn5CDWRYww7DV7QnJvxi8VP",
  "key15": "UCrbDrsJDibsL79kTNteSny4zBA6uKbZjmiNCkzySYVpD1P9QeNqB1Z1xrMNp16PFRYZsmzv7CmF62VeKEk7NWB",
  "key16": "321vJcx3NKckxwBGEmSNjKiUhBdtmqaHYcLrmeF4AhqJsGLfQjGy6A4yaYfAQ7TrKeMf9U9i35KyZEtD3yJzY7m1",
  "key17": "2kqvnFCNfRWPswQxjsNRQCLHjn3kjwSBnormGBdBzDSaY6SNrjqPwS2N1yZG8mV1rizbwxcapc4BF4U1avYFQzNd",
  "key18": "4KL3iUCw6bwBTrhrFiGPZPw36Rmn8fRRFFCCnGFku5myYrKqbC4qSAPBbS5HBuqrYMrr3NKL3fEY3YXkSuhfwVMz",
  "key19": "2ZSg7Q2QnVZd4xcDD6q2wjGjPJBVWjVwFnBRLFrdM3QCKeg7MDzZxRHNZyW6nCuab4iYykv68rKAfZPyySStWURE",
  "key20": "28N5c5bkiryEX8CDg5MHsmmwexKfkUye2Dmj3WEtfGc9LYW5KtPNjKmgRsRynpvXZpM5SaKB1GSbnbftVh4MPS1u",
  "key21": "5RMj1KszxjPsqbQQVvYQhk3UxGMfBbQjdA8F8yypS6Exz9girmufGnSS3ydGj7SWNU3nCuB1cCtJCmTduu3pjHey",
  "key22": "4Jf6RW4DXV9vddjB2JPmZqRjjg4PfPkVLGUyByY9cwj4fFNKATAjSsqmhogVteDbjw6r1NquUT1RryDAF5MLNHfN",
  "key23": "2ki371BLVud4E4kmkobh4cZVETh8cxBVe9ResLd9trzfybKJmaeV6JRpWqRGsVrCMvaTqjMMGN9yGgE14EsaJqv5",
  "key24": "4PjKPdSctK7ws3WHCwNvkhH2DCVZr7uCv3xHu9tbTzzTzerTfNuymDzfEgdYhkkUPFgFBfHWyH178mT7CvteUwZZ",
  "key25": "4sXywR3VEPpPVauyik6W8Hbg81aXDEajU1kHydXbCrEgo9oRZAAgJ7rUHavHPrLGJTiiWx9v7cNGH1UU3VW9a6Ks",
  "key26": "2n9K3ejnq5NeDY5c5scNMT14F3pvnVPBftyDHzKqB2MpjLGDxnVoUi7TnoxJ4CqPp55XJKX5zJUB84UyKU3mp4uq",
  "key27": "5ALAQaZ24yanagMkvaCxx4WLEedj9cdXVMJwVChDNzEJwMBEFmXsuD3mKSenDmPeAawqAsHW4y6ej7gmNCa5BZBn",
  "key28": "2PwGMGg4Ud292xtwMn4C6L6FSo2XsaV9b3DtUqsku1BKsaABWJDd5UjHU1G1fPD5X4GenQPS4HCYbknCS18vU348",
  "key29": "3NFbS1BGBaQDPdn18bZXkEj49gkMAeFRDK8TzEP3X8MAmxSTStCxNw222U92aDts3woHTEmzXc68kWm6arMVRH8b",
  "key30": "4BwgFBwmcAePCmZKxGnrADeXmYawEEsASwq5fd2XGWujaR7Y68qpSfo1QuzLQAtWp6bPcdDeyd3eJMJKS2GZEHkw",
  "key31": "htMfctXqpMhcmjKZEzhcpM1h7WtbCET3GSD4oyptPa5FrwkFwb59Z75NJi1KCaJ7zrcXrdLbU3Ccr9i3nzEC91C",
  "key32": "fPGtQBVJT1DkCZT2tc9PEp5vVJeDMUa4TVjjVZkdgDmkPXGSrXZffvpgvDy6bZKx6Foez3B7w1DXezXQnuJx7JV",
  "key33": "5MCN2148zoDSZ8H3Lw1WA8xbdY42chU7zDzvXQbmd1tLNf4c2ySbMcgD4ohz7ftrDsTvRGdGqiCpQqzhYbT2atYp",
  "key34": "ckE78qRzkeNSCgiuAkQ747S21JGYw3Msr9symRP2Wc6wuatjJGwxZ9t9KKbmWfgm95RfeVu2C2Hhu4LsHhwSpXV",
  "key35": "3dw6aGz6tg5ZG25MuDfojNaB7MvsFDDWSu51urG4HaNZ4ZAtyR8bxnEniHewGaHSjkrSYZ9NPAyyUnbx6KhnFFGd",
  "key36": "5rM2NpeZwuZc3PbrNzb2r4ZvaSUPG81zVjGGTMLMbgFD7AKy6qjgRePv1wY9dcppez6FHaiQu2R15tp6u5gvgGpD",
  "key37": "44Qc6AmSqBrv25wL2KuLMfPo3zkk9nJ8ZG3JfwuZnodYtWaSRrBh5y99i7EoRscqeCMcnnXPjbZgkiurfgqP8NUL",
  "key38": "3qJvpJeUaBZWDXZBFnR3cc5gmqZZpz84MNdEs2bt414A8oXfC7pLtJxbjAFeHj7ASJjAaiF3ZgjztRS5gc4nNHhr",
  "key39": "5gFzASq9mQGarKAV3rLC56utyW4c7VKe7dCQcjPSny5FEt8FmivJTf3UgEYx2r82L6Y4JdJ3wAJ4knkNM5arSSMF",
  "key40": "6684Cdb7RQcBqRRj4a4jMMJ9f3DH2D4hGNjAMwbg6ijc7B7464JujFLbBmBaTe7kLfxA2Rbga9dFswchy73fKvqD",
  "key41": "47ebwF4xPSB3ZRG1sj4hMu6JNEzeFdTSCqXEuSAyCUoAy3sSMvf4rG395nXP92FNrWtCGY4TkuMKNKQHJbSm5riE",
  "key42": "mHdgaRm12w38HNspuaWD9HPmCf2GAAskvAJRSsV5sQZPdH11irRL3hrM7Lk5AxP6Cft8CC6g59qiWmny7gNAstT",
  "key43": "3QbaLdqsBm75Y8jiygG8Ekh66cQrjYAG58JHJGmuYVvUxHahaZzmQwUQD4Ti1sUNAcdqQ6VPCfRWvsedSgiwQtdU",
  "key44": "4A4VSa2MPaHh5BSqhj9QCTjgQct5c5s8AVn1M7GiXoeQnwjJpxutp4iE5WWxMKQiQ1DVZmFEknUzGiQ2iwTqvx9h"
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
