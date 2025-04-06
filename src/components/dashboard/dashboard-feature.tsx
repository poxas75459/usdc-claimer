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
    "w6igZNmDLGZorT2BkRwgoLSF3QQiGZcihuqG7eRHCuUGRzDgNMHcJbKfjfjAfm3SqwduBzfYWyhS4Qhx3cLnY3d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47JQa2ru18BXzDJydocw1bjKmXS73Yf2Ndwe8Hx28zhQxS8EbDTSUm2pypbmvGeAjBEi2YkUP1Txdrmx3svxTd5i",
  "key1": "iNdqo2rrQ51zB27Quv81eV8WZWy3dEj4DVXuY2hEttnivEcfrGCQcsbWYzRizPZ1rxKDnrzHHW9tvi9Qj773jEB",
  "key2": "eXvp3W1V6f6f5Er67QRdxjLBTF57TTsog1Ef4VTqTow8gJ7iTohzW2bY52MhWrPcCah9PLsCpAa9W4ComXcJ1UR",
  "key3": "4L3jKCSGWec4dRUck6iB4N2Urd1zpGZcwu29r4oEYXS8kdWqdtzyXX5yuVjoxPH1mTuLVUMp4EDYsyf4Peng28k3",
  "key4": "2E6ddan9J7TZebcZHNhZvUQxyXzCEVerr3hd5aEpmeAwSZojpisg3Fsv7hJYHgrm3o3KonrPxnfUP4vZ41W1HQLR",
  "key5": "2fX2xNCpcBYSz2CL3VWjWhuHa1PCzcqFVcbj8Bc3RJ6T9XM3rGr8T1Qnv7vFCD4z21Y31zJYjBpUzgWiJCJFjprE",
  "key6": "2tkZwtHfXgzSM3z97LBXqdEDvoKrYPnj4RM1CrT3M5QSeUAKE5NKDNgTNcx6ux3yUcjGYHAEDgEaDyJ1B2KbwzRH",
  "key7": "ivtTB1zr2Wv4yoYvdG79LQtGtLSdDVJyh8zTb8GjzZLsxDZfT1Gv9pUtxjUQgAduMm5TPiy16JvmNcSGND26aDb",
  "key8": "62FL42HZdmsqPyrPCbzCvAcyNmPSk6j3zn1jKUjFgXD2F87ymwBib6amTECLYqwDKb8qXFaUMw6HD15Goto5BEHs",
  "key9": "3oQN2vV4AN4V5PEMDahj6wktsp5daQTAnnFuR929Pn6xTvr7hUeM69u8p6TpuzdpqhVdeV9uZhhvQxWyVnN6tpAX",
  "key10": "2BEteQVXy5TD5MNkUxSx2MJCnafDRnXHuf7uh7p8ny8cKSHSjgjfDT9XmanTGAswQFhThoxAZTdA3pqPg4zeP1EJ",
  "key11": "2WcDrS2nZ1zWXfx47dqJtzX5keYcvWFm9tjv9hDoYTE6F3tbwtjzmxQ3HUrkRuwVY99X2FRkjDkEggc5KzuXkrjs",
  "key12": "5HmwR9E49utWYfDZ7hET1VimHwaQ7HfozMR5F4w5sTwXnPLxvfrq92eiHFmHMD7UaZ69cuejKYxZPh8sCKzJ6EX4",
  "key13": "pjTfXR5XP5EeJj8JMCY2TKYDEPt2MTsq5jEiDpt1SByqu8k6WV4CcWVBiEoo1UbfUujrYWY5RHC8p4gJx9GapSw",
  "key14": "2WF3ujD6YxStrYwFvKZqWXsrewWyVgGP6863jNawoka9HU2MmaJvBetyYASaTyJCnkTFRX81RrsUgYmuDVMzFDnB",
  "key15": "2kqW5vLKkEANPa5LSCTagv93kgUvEHTA3eNUfLwYz9iuKrVFgvFVkx6S5rxoQBQyrEitKSGL64LY4F8rKPdvcebo",
  "key16": "3KQdj4tTcawJyCisW3kgmbAzv6ys7p4WgaenmXevnJQNnjzUUm5fDKLdcCRPvxQw2MJ1vC2WABGfV8Tc2YHcAbCs",
  "key17": "43UVofG3z4EfaV5KoTR7SmxPoB4SXrMj7HHxCQ39y1iZhD3jvmaEHpo6J1sXbGsgjnDqsqw97GKci9tM9x7SZDGB",
  "key18": "5cK8XfABc1LBd3MXAKrw632f8KeJduaKWhoCLbDBoArXqCFSCjaasmmwX4LLPr7ggG22ior9mHuqDuQ3zYoJ8ftJ",
  "key19": "4TthkQWRSeKgJHy81GpBQMvVATMNM1N3CBiNP38gT7jGLfRxjys7pE1eJKexh8AMFwo3tF86c6ExxsFArhDZ4Fkg",
  "key20": "4KWFjQrw9AS7qXKV6ZMaUbkgkTgaTJfXMhJ5ZTLVmz6Fo1oengcUvv4VsSg8gJkp3pdgpBynyh2wvDkzBs4A9MGD",
  "key21": "2gkYR6Tvmux1Ng3Bm7qFBJRPLfS6fpngGmyYS8UWpKUV5m57iw1JGLAqdu8BCwxF2d7fK7MCde53AsEtZJLZHLyg",
  "key22": "4z8KuNyQqkvJn7r8Jzm6r8iLBcHcnQipgKWvGWP3KyuNiCdBLtyaKBBS9qjsz2AcBmDzXPL5RCrcDuSiZpDZnqrT",
  "key23": "wEgZCB9urbz9Mtk1xg8W67XffC1CePobLqbWsfNgZmV4oLuoHgapr2DPPexBemtQCSr4w6fzLUXgZf37Fn7qhHE",
  "key24": "497hPyYMBHVjVRC2GNg58M5EE5nMTPF1UUgXTUVcrpPhAXBa3L8u25KrfnnJq6WmAQaiozxRqfhV1GqXHk2KXxyJ",
  "key25": "5bJ29SMLzAbtWEzZULmmoVw7tKMbTso9NyZf4WQ2KaEDLsdtUpw4NqsBQcUrTCxcTq56NcLhJVUuYYDKtZJg8gjQ",
  "key26": "3doE8taia32MU5T136vgSUi3QXFi2PQMm6QfZXnBt4V6qnGGBE3MkjfWxDQgThEKwJWCdC6nxNJnvqdmYbYADqcy",
  "key27": "2zMdhXbi2RYYVsndnB3XyqkhKQNHBh3H1PCh1tzbwKYtqmehRtSKNjKDG9MggV4jkydoQEd51q71F5ff5mh7aadG",
  "key28": "2M1YnQMrrdbT2wWrnpXAcC89xeh2XeSn41VwK83iFMacYapvWcmGGgd71Qg38jg72tUYKUtrxM3w6WRwXHqFrwdy",
  "key29": "X3Zw5d6WxYpnWCbTwDL6MevMgQUQFKzSxxTWBnxTsLZ75fiEHQFcqT7XM63uG88LuU8iFpCwkbV1wG72fKA1sx8",
  "key30": "5hpyyjAL1ZCyUEnbBdbBxT16m7bezCBAvC6kQyAWsMN4svgvqXL2uNk4rmDPWE8q4qH216ZTjmWDVrWc2Rdv2vwx",
  "key31": "2veJtRdoDGZ8ck8vRniGfFuEdhTDjgEw3ndkSYrmeSCL3iWzUM26Ei7Q5i4eFpz5xLUaG17q7EEeUuS8iHFZ9jmK",
  "key32": "3NJe75Q2Cg257qxCovDqFeeCvfMusAqiZn8EpadpNFzYQj5LNcgbBhN3FUGCwz5pSQYAchvmg9rwhUTT88dVz5jD",
  "key33": "VHMyoyh1smvBRxciogcMrCNybF5xJYWnfPYC6p2uRdvHqKUp4aEwVqkv9nZ1jZdR511fYLpZcPHVPoKFg8LMD9W",
  "key34": "4EzshDEPTjFw6cnk9d274rAGZSU9uFcKXH8ejwsLEadGE4hBeTyRScXg36txXjJxPhdZDBV68cNRkqyF5Y7AHqwH",
  "key35": "ABThkquwCq8Y4wfafSXWZmmKbzHnMmMZhgziEaZJquZdp5oaL5EXodzwUEbSDnZuGby4pQsgUhaycenynpT8vgU",
  "key36": "2aboEibVHpXQD8o7jceQHUiDQSB7J1igkCUtQvoK5wfV8NfduJjdcaEaCBCeDuBts9gADYijA7CqTosmmQz3rV2z"
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
