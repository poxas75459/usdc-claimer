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
    "EERW6tdgegsxW1SYqoaTJky3vG8NZwkpbhjmKRe2QYTX2nKw9dd8yw4y2UxhqqLCVazZT9kQJuHFRjC3pd6WirN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mTFJod29FaJcgA5VHKPKpnEZKmEMiFfcUUsrWdDcnVvzPv76o8aZtFo72TdguRtWgAt6NTgomQWCyrssM3tfQgQ",
  "key1": "5jJ6E3jc6LAB7YjVxoWeCdBrB9H2HyvPk6q9zfKTagjqMAQiCQTQH2qSxYQi5cwNYAD5hd2R3pEG4YDKaTfVk47y",
  "key2": "2eDuEwqHJ3aki5aoYDTRjDYst4trqZCM1pJCTVS2xw2AGhNaey1euu98nLbbguJZcB3kxYtyMY33mTWg6K3bVk72",
  "key3": "KaMfs3b1QcHX8X5Bf6MtGg5GgFbFZdcYW3oVhHfz7b9NicgEcnUsmwWZkkyzqkysbi6T3ATzRhHK5bcGc7nizFi",
  "key4": "4pCFNouqEm9pMnegSEL3uP3L94UAQodevPZSJQXZrnbACJ2ikXpgVCj9FTdadwM8ocUdyfDHMoeHNa2n7GmMP4Ys",
  "key5": "5EGWT34Zn2S9gBeQxoAHZnPy4zdr5Jupp3zxcDNA6g1PBaT2BinvEgpoN4AaMqFuKMaVoiMFKtMgo9i5zafVSD4f",
  "key6": "SSSjngvUGaR7PPhLx2mJdEpsbqM3tF6vVuGZWAuqMWgLEC3EsEHdFw8VFFguYTCJRXoWabBLgzZ3zmiLfzVbGrw",
  "key7": "4eUB253kBS31g1yo5Dhzo7gYrHerqubbKC5sTx9mYU5m5TmKHBunKbe5sBDcQt6hdbvAkg5eVgyJ8TYoCzxsJWCb",
  "key8": "5PYQWxBqvm4w1EbnnG3c9Umsm5kvWPrN32R6fquPqR82R9zjarR5twdc1svsyY3WzTQhduy9JmoChyxSHcC8X1sv",
  "key9": "3U7DM6NzKwcc7zfe8XJT9C9EVnFkA2dcRWS4HsVBnVqTk284nNuUAfh71Let8iQA2oj6Xq2xZPTSMk9s5J3xX1kk",
  "key10": "5wFwE1Le67mPSVmP6hHa7wBwYQohPWTsVNucgJYuBVyhT943rPXGxHy1SCJqLUAYt4cVRebaJ5KQYc1h4c43fQGB",
  "key11": "cLxLjUg4gEyoSYgK7MqiJcqtrP7vexWggzp1XHN1485KConxSDFG7fWxAsCLqu3yetNaFrqxje256drg6SsVvHW",
  "key12": "4X7qXi1CeNKgQW33pAFtXfRwMvXdLKYxmC7x7VTL4Yr3w5T9C1smMb7qqPnqXBjr8GRyU2FW2tresuSwSq31Wdho",
  "key13": "3uJoKAaQsi5nYkJmfn2vtRncU9RzCUkAHdYW2jwXKKmFYAmBDimGvm63wsnnRDvG3E2kHvbAd9xjzXdvvdTNXr37",
  "key14": "588Yp3A6biHcFAzs8bJ9QmibVy6LBd6pBRhNieypLgE9AVGnz8iySwr1pScoScptdgkXC1EzSQHNj3dbsTzUA64H",
  "key15": "4yK2kjmqoTFwfV5q3MPJnTYpsXoJ8cDQCbE1xcgWPsBgRh9JDWZEoqYv22Zi6KmpHErmv7ksavyQ74srddVW3Tx4",
  "key16": "5aRs1CQxHW9g1wZQXG6SRQfv5jTcxWoV3nKMA8pXR67wYa86rZpRi9197mBuvE7cGfCd8NCJhEmSpvjWnyD9z3Sz",
  "key17": "4sEgdNaCfbrsS4c81dP4PQyLW59PjsSHQTsqqus2jV9qV2yUPtWCLjKGEJndCfYV1dgDRKurTrfgjvH2covN5RNk",
  "key18": "3cpP1QGQJKkXN5mExbdR7RTceRL8jsj8LrKKNzjFpT7bhhGdg4cCXZcLaTCyNWQL4BgCXT98FNV2p53QqE6nbQVe",
  "key19": "56GzRwokYSbisiTUn68eoZPquoxMzWsGaUKVA1hKZdXyt9Sn3tL54sbBgYpK6mpBkc129662ESim5aUcWDUEH4sG",
  "key20": "3AgxY6kCPsFrRQMoi6HzEC2YkbXiwxihCV96wKf4wnkFAauGz9jtpM5mjfGwobEJSEe7VmXzQEBZUuMSf9EPKWJC",
  "key21": "5CY4QFC9W5Wtoa7zXBQN9hpJ79jVe29EPZsvR1RqicjjLAnLsgHX52BoDMroXcwh8xXC9T2TWqHF4RLj6RBrVLnU",
  "key22": "YwuUEHn3SAb5g8YtkneWAdrSfDgM6yhTwzkjGFYMbKYpBKJKXs3CzFFNwZkmN8LJmgzwe6sximmZhyRMUUxdgBp",
  "key23": "21Uhmzh35xaGnMktwRvdYP6xWPu46WN11AGvKof6F8jwCmwFYLV1RxxCPCf4f9ii6sePiATaJKBfCavtmFrjVQfm",
  "key24": "2XjoNVz2q7PsxqWzXu66LBkAC9zdZDrU5jHWwMbxV5a3zUfiBFkdJ6XtrdryiWBsd7PF4e8H8zKLnZxLqyc4tQaj",
  "key25": "4HipUUsoqBB1mUXC2C11wHjNnuM9WbCGGivygDfisN8dsBkUpPQuA9K9VWoebfB7ZPCyVBo8FrcPvTCHKkWozHzm",
  "key26": "2x8LhXea2F8uSnMMmotQq3uw52iUuNxeYQJak2tFMaSFYsN8496LMg6MWn44uFvJAFuWeZxGJEV18pGS33P7jb72",
  "key27": "5tZmAZAfLbv2eYAT4KhGDnB5ymN8TUYjB99fHms66Ya2A4USAmdCJk7Qtkqf9MorbSMsdycQapEweBYrMeNJLMxC",
  "key28": "3ng1MeJWUNjoGoNS5y3Wse3WGgxQypqLeMjmjfGbzBqduTjbKp5uibvbe2QTMZRFHSfEBgE3hWdg5rBCHNCzfUoC",
  "key29": "41no4N2H7FVrUXuAqa3peposfac8jwtLxgEPSxmteis4mK3x4P4kyb4cXkkQ6CET7kwq21DFZXj34qXz5pBbrRp2",
  "key30": "5rrGCQ8udgp5WCTEc3Bag54mpayvegfAiDzZKhySRAJvd8WLT2b1Ao2LcBGaKZWXk2JreK8diYH5XDKhD8sdozWY",
  "key31": "2HujxpBbyKMcZLKm8UeUVgo3TGezZuxAeFUCXv25Hokr9BBziF8CWkK62aXJNFig9W8e8DKjr53GXQbNT8U2inAS",
  "key32": "4ZsSfhEj3QxZHWgCYAMXMfJcYjt3foHpH82tYuM4x7CojK2BCS829P4zt9k4KXqYRLo1K5U31enw23mzhHyBkrDo",
  "key33": "4zBynzLy3bpeTndFif4DiZL7BRDRNykRbhpJ5Qfdvm1uigFG6bFrQPuH1eqvbSdFzFHASdABVVYSRu7uV9eW4c49",
  "key34": "322T3u62fMEahVFnGC1kykduQ5fz111WY5E9nWQvZhMpRexVVXaytx4rdfNfM2U7fH6XuEyZre3CxjHuN4P8VR3H",
  "key35": "2WnaDtqZse3kCioWz6FvUKDsgHxMPh3kwvsNBrGTR9cSeaPkGrWxMCVTk23t7dhhe2YcbDcXmCJ4ZLtqhQfxcu3V",
  "key36": "4Qxr1UeKsWRSYAyLgXHbxiKk1E4AfRE5zAoH3mqLdj1QqRYYYCNNK8QJznm9AWex6DpyVc2UX3Qogq4Eg5Zy76x2",
  "key37": "4xQ1VFMSpqn8wQbyndYznEW6WhKdpNTsRV7TKjM5sJg2ftCySwFPbbgsZFXYAZurSRd6KpbahtnZ4StrQMcSv3vu",
  "key38": "3HQyzku5Zs9AE2JSBnXgbMjmHuffpYHEKWYgvKUH5qeJDVcYiZzJBNRFG2rLiL7yrbK35vfV32nBAKosneRPCcky",
  "key39": "4kGHrzYiCMMJvxCQEi3VAQzdXWM9J742TYfPTmzerD9k26P8NDr3my5Qa4Asft8298mS7WPebuXQ22QSqGQ7VrJ8",
  "key40": "6644of8CGrK8uX2F3aXjXXg3VUU3pHZWqts4NXxEDC4HJLESCcM7wGc9wu5rRZagWMuXnmwDYPrZve3FtsJjsbdm",
  "key41": "3CkuEnGQ3x3RRy4de6oQpEKchvd9oi4qUdTgH4zp4h7hmcUCSmDNGqVUhbee1v7K3fxNVvBhHNHU5ne2nXsbfHtm",
  "key42": "2givb2cPcBb6FKPBNW2kTTJ92emUyGPNxTf5cPqwwqYwTmqoqegXSdeEZcomjhYBVmcS7WyzwSav2gfRPWrgBB2U",
  "key43": "5LLBVeDBFAbJHqHKodQ4CHaVGUu49kzJHohTK4HrU4bDEbKLTSYfUS8mjF5Xmvahek1GzugaB9Kq3DWhCxJ4PYw9",
  "key44": "3Knp54ZmER2wR6Jcu3bydJSEaHG4jH7Mo6KsLfp7sUo1DnAnWLyFpuqCRByG3zKVusoA9QiSR7jdH7CXEqEmavUk",
  "key45": "4VcDyjqT6JWafCzD7wzmM4cj4mF9mfR1mQryy14KasEE6r4vswm8fwVnzarUtpqEL4qM1aqe2qhgcxW7ADQJSZTr"
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
