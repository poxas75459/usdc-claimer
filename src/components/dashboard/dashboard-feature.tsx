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
    "HRiNAXS3Jdr2dHn9XJmGM8jxz8dRTif4PWZvwUTuahb8VfhiNotKv5rR75Ezbq72ZMz2d8kX9msXTNaZq8Tc6TP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57winL7CL88c7BZsoQyc7Wv1afGSorJLCmdrmybr2dnYJae4VzTwp598xauj98zkQxsCdCjgh5fkwRUzycbhqHDD",
  "key1": "5cNfLSyzJKhixeUeJoA3KBS1oDoY48KdaaQn4nygozj8bZQUsbM6hFCEgHRR8bMxi65hgErG9y3LxqU81w4ZLWfF",
  "key2": "2iBKHP3cpBWqV2uFZrWtPFsiUvcE6zPLRcQJfs7iNrRFwy1QdpyUuYpFRA5DSZXfFYsZefyL5uri19ckQwfYz3o7",
  "key3": "UUwXiGrXQL4S8N7reJy2V3KASBDUqR5nf5Z64u1M8XwzDpysV2W7G7bUaMowH8sPwFqaHwkNhqKHYEr9tT68EMR",
  "key4": "3y7SyqLuDSn31jN9RAZCsCcGx2hWSF8B1AmtmKUhpTPpNYD6MdBqmySYsxEk5AAMBCkJsGgCUYFK6U5wcPEDevyF",
  "key5": "4wr26haBFoGMeKQNYtFZUa8JwAZqwpjoecEQSDPfhDWEcLpRVPdwamQbANucUBQyHsavnH7XGdzsrEReL5Wqw9fJ",
  "key6": "4pFuRbWcaJ49as5a3aRR7PwXnkCrzGku2Lx3Ueicg6axUkGT98PJ98QSD3mKG52EaSLM13aV2m1y3NwvjsXMnMvX",
  "key7": "wRZ3aCQFZ7wigjBHSnD6Fms1DYHQELjNw7WM6tuZhqNsgM5g3gyduYqbmQbTjTduysnmHVzy7D9oNJmDJSKZN4p",
  "key8": "31PTjbaUrHmE5qjrmRWvP19JTDE5g1UTvbMuUN3ZYGFq1BD1bmSjfLkJfAx1JQfJo9Lo9hBxpuYQ5GdYrZv9DmbD",
  "key9": "4SgmfsQjAGowsGSjHH17YoV3ALPueEqrGk4dnkotLq9L937c287UXWxwAfLk4v2g192CDwiijtcHQminYEvVnUUs",
  "key10": "5SYuHdXNqxHXXPVHcd9chxm6Qq8bkEFkLaceemtf6fFJcmhbAZ7NZpTruLXEkFBDWRR2JBquveN1UoiusgE9Efro",
  "key11": "4h18n7JCjwErUFCsNgMwa3ziFfi4tnAb6C46AjvG2EDDzgcyTGW6TGLF9GwaN4ApKpyZSkmsnh7ywnfw2Fmqz9xs",
  "key12": "2itrKxRuM6BJkL86rr8ofQ92NpLHCuzvBssJfP6XAJNwFNhnMQ4Gu5TwPbUTnVT8BoavktFRkzGUo3uzZyWBgWTT",
  "key13": "53EKttZWzxSUGgaXRrNDLG9dVfhQDJMLTbK9YkjBcRmayUZK99RKfHrSKeHvDVQy3PgY5p4YpE2fAGyQtvvKV1D7",
  "key14": "4JHRq3ur9DivQjPVDg4gox7wJDpvhcj5Gfp7whzGCzutbDSgx8owTxS4SqKmpZziZx9vgJU7Mthath4QDrhUVxGW",
  "key15": "qZ2hKaDc4SrNYyAF8qQme3yCQj745ToJz4DLU3wa5U4WqSpzpJGnnuZ6zi7F4ddNAKEpVssEhAJ287RY4Q3ackB",
  "key16": "2dHcH2G8pUBJjRnFr4rF6CPipoQpwTHw7MmNyA3H5y18vnHxoSQ73XeU6Bd1ue9ahC8VeU4sUUSmEKpCtgT8Wv5L",
  "key17": "4gNdPPSFeEhaqmZugmzLsu14UTSuCJdpDJujWAKmLingPP55afRiaRhs595UFgeehofPheJBT4JmBJJ1xtQUobxE",
  "key18": "2B2YGF9EPvAVs2z8zAP9vKX1Z3Pd4xT5vC5K9pjyY3P1VCbqN9bq3Q1SD31kDotaVjfVgoKMkwFfypApY46JtZA3",
  "key19": "5qeu8wHnrTC3dLpdVWvnpTHqFmQqDaDbZCGUpaA6miuzBDR91cpFBuVRA3Ga9UWe8qNyGRYLWkJ8TmZfZHdJiybz",
  "key20": "4oVdS4wQJkUesA59KpbRQzBBWoLqXYTFNtsnJzuiPGaXJsQLNjExd8XpWzW1Myk6Z4nvaBA6e4Dy3cJ7t7MyajeA",
  "key21": "5pnzxLqdS1sz7Trg1LhQt9nECCEgSHmcFWXTEv1DpQn1QeqXEWCMVWdBasJJFFr5cGeTj2zSEEDw4NzQynhk6cgM",
  "key22": "26vfJtj7rXkYzoKQGRPWGbTjAdnoGX5oAnt4hHG25f3b7QrXjjUWzRhHDfnbZw9qzHjd11Vs2Hhxi6uCqmaiUmmr",
  "key23": "2JbmbufNZTwBbfieeycwuFV21yCBEJ9QLAjabmVBk7nhP1AKAi4YazKq82hSe6dkQnpALYYV194m4zLVLGgWVZ1q",
  "key24": "5mNvDBVNhrg1mosYSmWzoA9ZrmfRjKBuGGE8PeFxe1jDvzC1ACmRiK9B324HnxSgCtNGAG3R38XyTp24M8kbYkcg",
  "key25": "fe44Z1bdLFvWY16CYzcrbU2nGeiP7bgKW7xhCvKaKLLiWtseiAJSg91PS4z1LrUXCME14GVNvhp2NreLmadPkL1",
  "key26": "4osotePN38FikvJcDcX2jKWqCnCE1iJWcBTSm7ey4deuAQM6AeTzXUF4J8JPnJWDrMCHWTzGJ9eSSuo5TRUhYErC",
  "key27": "3ddA1DqQCZkrxcygJEVgsHCi2qdyZ17azR9D5NhfqoUqMdWQZasdy5ztP5LRupqJJW5PTY2bCsHQkAxnmhemJtQN",
  "key28": "3gAYpL9y5a56DLBpdxyFTBdn2qHFCxX48NJFXhqaYQEZ2ZMGyaUj1FmQFcVeUCVEPWFQWfNqp5yp1KPvjs5TtZvx",
  "key29": "3CXU11kMrMsjryGqep5EYwUjFY3Cqga3hgVY9FBftPGr5w4epN6keLrZSwc2Wz23gdcwtgv9RZhJD8UEskLNdtbP",
  "key30": "4R4dD87hXBHKWZALcbBojXRZc6m5BapDXTnjAoJHADbbzR1aVTXkVQ12pmyxYdoHEy4ar7BXPDuB5mERHX7qApSv",
  "key31": "61NDTcAQShKxybXfbgouZAGGVLkW7Vo7kbQ3BAPz7wbUNSXnRjYD5Bh1zmgHYicQou9nTAUbK9YhZzNLis2u2tWh",
  "key32": "69snEj5FYXY8YxAazopUqzdT3PExY2BAd4wzEod7LZNgLgQALuBzqcy2LUxvCMFYYpiwnrYehNLNyEocV6WMaJE",
  "key33": "ioYxdSLNaSUotrXPEjY4LvoRpx4tNtP3EEYiapnRKm4i2HhJYiquRiEJvug3pw4qEadq3d7EFzFraeiKUWGiEQW"
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
