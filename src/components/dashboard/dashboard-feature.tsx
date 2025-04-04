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
    "4FZAhqWgfHgN1iL6Cpeu7J5peRDaiQEMHsfAijd5VVMVr8NVX1A3Gph3xUtZNXqxzGkYRGPpCE7CrnxmELUA5cV7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H5qEEMLxfNURp11xfpfGWvMFsUZAV7BePn3PqVHggLBFxBr7REEDw9z7X7DbkEvtzH2Uj2F7vsg6zAYuskZK9WR",
  "key1": "3m13xQsKo1th12rDWQPX1wECinHTCeG5RcjHtjGeiKvWra7DoD39mid8Q5FVsk2LzwsQEfbSDpc6C5Q4PL5WVemV",
  "key2": "2Eya5ZEFr2dB9jm7636bMx3NTAydbdn5FWDXa8QAidFxcQNK44qK3BqNc99LRXjMeFn5CEymBrH1zGgYNB7gyfAA",
  "key3": "poADfZc3tShQQmTQRhM2zShthHRe4AgbqxGYZS6bCQoMLV13rtiKW2aPUFeEuftL8LMba32dJi6iV2pzDwY2DgJ",
  "key4": "3yUpEGodegBoAmUF7muBRFtPgNNzkR7JvcxvC5twN54eF16LRaqVnUWvSWdbvAZL731Mo7PEXrSSHnPc1zd17mdW",
  "key5": "2mnaUTFCzkoAMorMV5yEwJqPdhz4TyvLqnPLu9m4XhQGo98tAFsZLmhbqnjvwuTds1co8G3x1wCypSbpGKy2WzKH",
  "key6": "2DAv8cMYDDjthqyBt5moj9mSKZw45UAtB2k2Fbgujoz4Pkm16dM7mySiSGy5DWv2xer5jey2prCJBH82j1GGEgzH",
  "key7": "fkhnxVjkcqd9LRJuQSip7dAMY2eWVrNg3TVfQ7Rjc5VjyBny28wsSkEffSPbmMHMs3Akbku6WFwUir8yzupYgdJ",
  "key8": "5zkCVt8xEKeg2YsjUqzJWzttxS1UZbBK2Ju8RF5q8EGfsj8WPTuf2QVomGhVFzN2mCZswaCLYMu4DniZvvSkhRxZ",
  "key9": "4MuG19WAYthic7N6sZkSxfpciJeSj4ke1evsNJhDgFj9pm3UNgQfef1UTY4PKrYA8fxNvAaC1AdMTEhotXU7MS3p",
  "key10": "4ZaLcXR5JnKBC9qCZUsjNwMLQz2Pcez6Ffozsoba96WBzH71H9MbgHDW5Fo1Hy6QdFgvEjQaGSDvpwY25tDJgekj",
  "key11": "PozQ8n1yWsfLLuMisxnXRNrLAqCocU5s75GGNniqh9f6EE11G2X4B8y6ePKteAkJYWAm34pY7bmKBmZ278rDnNo",
  "key12": "33kt3GFiXw91v2daKj6HMHxRUUVu2kJK2dr5VgSpp6hPwQYJu2FG9w1sHNrusfazqjy2c9DrEsD5f6jDBWtJgt3j",
  "key13": "4vjtYffeQmNjohifg8x4wopEJGFm9AVXbshmbc1QA3DK1nVPYsmTvT1PSo1R868kR8sbkMrkH5p2u1r6egD354CM",
  "key14": "v58E62jWARaVsiaeFAm2xDt4q4PunxnRv7em2LJKYs3ZqSeoJ9qukQnvMcWz6ozvjrqBEK89RDsJq7p8fCHTf34",
  "key15": "wDmbYyvcowCBwHWp8a4hzX826CPj5umNjLJFxXY6AfRZKxR6WFcUAdfNbXcRQK8qMkeCPGnP2WuGcF7nJ9LvB2N",
  "key16": "hJENRszGXkC1Pa5u6oVUVf2US4c7JfHZ5KYeub52hQELip7yqvrYwEDsBviFQDktjrvZ2NyWbXcQYpTGfLwfscR",
  "key17": "3gbZdhKPEYihPQEa8dc8cNLuiqSxVKQCi5SgazWNvWKJkaNXQqJ9ArPPdkQrGMBReDgZnzpAqL6kP5CL3aa7ubQX",
  "key18": "2p7c1EoGVYkdYyh92gKCaMz8Ew3ZMuqR4JGGx6FrsFMKgDmYafHRrkDjiNscr6vVs9iWfpZuwkri9Bs7jmn5S9rP",
  "key19": "B1C14DWd89XU8iKNrLHkzZQWqiZhCNuFuaNr2RAqSTMevY3x3gJ9cn8fUddBjQ5a8ntbkG9jt7ezFuXgbJgFJKJ",
  "key20": "4LzRkgxGgxcLJmAJhZYnCT4UaELzQrZQcRSAG2KorAuSV3EUvnoDcGA1H7rPfSnUWuwtrjeAxakao11BDsatbMvY",
  "key21": "23yTcpwVRBMCwYnivoLbufRS81x8qyiw4gM5sMgT8AT7fpaJfeM6gWQSyqxh6j3iiULtTTjwricA2ubPnaJFXNpr",
  "key22": "62nD7inmbFBGEiJEshzWrVDe2fYr8iA9iQUMSS7KKgAbHifA7mcNtfX2sbLyAbK2Rf5FSeQGD4BriCdgE1JneLsR",
  "key23": "2CPXDkVrQgNS1sXG6uDfYaAsHe1t4Hkktq4CBtMgK9SSqukXjVZ2r8fKeLcVp36sNAmNtLse2HuDftDt5951djxc",
  "key24": "2ZYdLKQ3dUpmFg1UZPHspETFXELzmBCWtPfuHuHXjkfx56sLqfhJU5MKKbg6whSDmo1Yyb1YmnQdPqermrynhaLq",
  "key25": "41TtPDPZsjEYbBAV7tPbf9yW12oSkRMmZJxoV39NuTu6ppuWywmMYQB8akmaVpNojaSujiQ2WX9d3bTzPWmKGamT",
  "key26": "5jpFtoq4wE1oiV4MS18fEJBv1nXWMFBCb9KProkcT5URfKimmbRU5wk77JRXtu3ZG1ZcLjRvBipqp5nX2rNFhaRQ",
  "key27": "URMkgcxtkfd32pY9cGpCbWjvT7zU6oXv2d8T6MccfiZ8E1fkb6ifXA2zW2KikuwMk314Fj7KtqFD8UWVf5SVNHg",
  "key28": "4y1QeEvSvteAutp1Pw5dh6vHSmDHRccmNxtEoAFDTWE7reVsEi5eqbW3Yx68etqKJg4eRSdTcc9KXNt1FZsbCVnY",
  "key29": "2LUSPUvvXNc7SzxYnQouk6D76UGppF8DEofasT3Y2iEDjyyQwUUmRLQRCTCjUZ5Gv4KQYARUQD4MJEYLNrGR3PYk",
  "key30": "5doskkH776yqSmgTXYh6VVKS5vj5wkGQSRpPvFj5Xp5jBdGxTKrvNvbKgJc59JKFNFvbGkZTFaArsYkzK19ZmV5K",
  "key31": "453SQJXLQR8TWWbvLsvknaCqzr2bzXVn9ahCVGhCZXhgrXW4SYjFuiML8NGDvuhAhH7LG5CqHJ2maaFBF7S7hQru",
  "key32": "61a89joiUFts5duYbEL5mh7do32Kt17CPfp5NWNqT9hmynkdp8pXUFAs4DXC94VzHNcrVCHWRfDqMqWcZhSqF3Uh",
  "key33": "4hBsLdCR99yt2y2KVMWDmL6Gergz2yEsJGhe735MGzqFgkAReW9FCLFyyjJo2ZHkoq8HjnYUykGcaFsiQ6wHineC",
  "key34": "39MoPyb1rNhoFH34u9cNqMwJpdSGPa5jdUJoTWMPKtWMLiqjMCyLyPDRYT3TvZUDxqoHySNdwXudRmv6wqdqe9fh",
  "key35": "3wbuicDxsFKMjrHsB1WVALEiWSk8BJ1Jzc1wR1XTKa1M8yfhAnbMNhiq26Ku1qz6fv4o5aJLS4x4FPLkrMoQ9L7y",
  "key36": "5Qbda12xUN5Yvtpk1jE4uFnn9T8MZxW8Hv5QiRK1Hy4x58VwoHPFgAJWwyebqczzr3yFHcS8Q2gLb6oC1vpVLBvj",
  "key37": "2AxPQGXzPPr2XNXk5vZdpKRABv66aigFMNXFfWYSyh9ajFdTjcBo3vxkYdcwmcYB8xsLV3eqaKiUEy4pz3DqHmpp"
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
