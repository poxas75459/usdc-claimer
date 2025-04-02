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
    "3XmMJVJuCjnE5URQ5jmB79bewSAtZDEEwqPX3o6GB9yunznQzhzzzTJyACerrqkWwNjpW4vDKxuFQ4KxxQf8CWg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xWe4w97dcmTq4M65SdYTspqYXjU4CzPaC2xJk8njL47YCTRRgRYJab9WYttVTEhk9qoNCfq9C48D6wJb9gcgq7z",
  "key1": "2qhUSbNCU6wLoVuKDESeQ9bPfvmvkXHxETmUKBo6gWaVNvr5CrD64hoA8KLghjJXMNimLyVHmgSXUMqhVrhtjnm1",
  "key2": "5oBEjtX8EBerWxwPsyZxp2VPqFPvkzdGQs6QViqFd9iqQWM6Gn98e2quVevfoWE2pp9a7wsj8rEh1h6pAsiu1aPJ",
  "key3": "4mTdyBRYQd7c2EjUQE1HUb3VTBgzCHnLdyvuB52c2CadsGXs3b6sBtAzj2d9EWkxD6QAGG5tDCgoXebDwzJTJRG9",
  "key4": "2yyFq7gUsnLm31BxMxEzz3HwfV8iw1kMwfyoau5FQ2TrR5768CfpRchu8vcF6P4oLZDBucqShzNGpTQRKRcrrLFB",
  "key5": "2iqiZ7qGyuc4dzX7y8hemeEhWtLhG9h46363GqQ5hA5ezxm1zyAQvSXVgyEAnFQr25mJjhsagFG52jHJLiXJKgEN",
  "key6": "2JqhZCopD4vvPPgApvgmX9a81PTBUwg43nA6p2XGiB3vFYA8WgCP5UgzY8bTtNa61NtF9LKiQp1nT821ZZBX2wHD",
  "key7": "4KDA3Hq1Jsrm44wS3DPSYBLr6UeLPm2RLMV35bABgLE7Parva3ApChJTAxGP28iove2a4HVaZFsmgTRbTyLk826N",
  "key8": "5no4Jz71MiAu27M25PDaoEpxfgyPACNy1uMjFBEeN3w5wLjw3Z8XRZQSyirfGgE9HfDJXRpZrMLAfMjEtrrtnh7d",
  "key9": "3WnfVq5XYfseSwBGP29Ah1X4iMHxA5y9PXt23TCVCW4dFGuRQBV8ohioWrgykfxMb2bRdEKTYQKuCw9tyMhCu6v5",
  "key10": "5YB59PNucrbdwmUWKhP7pTQjd8BQWFe2FkP5sNTiCKX7Mn4XSX6215UBTRGMjoTVpgV6DdCAKsty5BmSb6f5jLbc",
  "key11": "4xLujBSR5RdSV4jVtrQqRu8cvr371Tuq6J24kqfFBxydG5T21iUAgL4XMGm4mYtsVfagSLV56PX1FJeZ5aQUmwCW",
  "key12": "6ktgC2ugrfDDnPsfb8Jx5mo5MSH1r8BoFMbQ6mFAJu71RS6k1yXic33cQnH4bFMk6XbAgTYE6QQhbcUVYiQ5D8F",
  "key13": "4Msy8yzhoabG9kGL1ASxiS8k8R4HMViim1Y6dNPyDDYEEXKfm2HUXqrGai6ZK5aKf5xMohNa81fzi7wUTGBaRxda",
  "key14": "2vNmBd2vAbTZUXngcVLVhBzXEwk2ogFuboWpzWcxNb66wzeqpbHU5e6rzMtFv9zK7etnuN2M1cNFXiG8XExD3d8z",
  "key15": "55YT7RpJEKNmNkF3bw4FyjT7sPXgVpmpHye8Mrz93DNvAopxPXJXPEAFTWDM5534qwPvdr5gNBj1vwNvpTzN9kpy",
  "key16": "5zHzAZz5cu4v8vTFLYMBFK7nidsscmxLLJPDyJubWzbjHFbmvNRKrEc56ShBEwNn97EU9pHCygHafNxwpL5r8STg",
  "key17": "2evGWtoCBGy9SkLQqEr6GpDiY7BAKuTpYoeuv3HEmhN5i2aDMKZoXey9ZUmLnDVcETPcwqNJ8zn74pvZQvayhwRY",
  "key18": "3Tnpjr54dff2rAEr39Abs4wtCK6WoomyMU4YjkuKNfX5L33bXAe7CA8NbqmF6zjWe7payt5uGog7WBQYRCbQcP6J",
  "key19": "VqyuDiy785gmKtKa7AP7RCt9dZB6R3QeDy5pvYeRVRZvnjnJN3k3UbdpDexUvyozfDomUKkyCvt6F3pKkDp9327",
  "key20": "2Tg6kn7Encs2djfYJeKdcuh8NgYWiZgTUhzS7RgChQmHcke1aGznBJypgm9rcL5HXusQbk6uUvx86Et6huxXauUJ",
  "key21": "4HtxST7fVHqm1PgSUKUx6yMagPaPBSpRSnNNr6Nyk5rEwZR6R8EWaqN4XgQjMRPVAhB2JbJJhmJcCSbUHP9gDYTB",
  "key22": "5J6Bo56ChNUFxobYG9Uwz2FoLU4HQvVunoAtKqqcSt8nG1aesgfEG6oD52ezY6DkvuvHXRcYe1ChB3QuAebNho2n",
  "key23": "5WoCQqcfdubzXsPSzvsmaJXzqM8cqYZosxdDuscPg44qqqAhBfQNpAS9GoqJE8LmAy89hWkLKqJfQyjQ9hWKYZ6V",
  "key24": "2VXUs9X2WLT3tijeWyswWdEv8yTtxoRDrD9NDcGGQZBkdLkii1AmqZPJRW2oGRemNgPwN4HktoiwZqxLoLHMwLH7",
  "key25": "5xk8Be867sZ643ZUbPaARhT3aZBtatz7iEMRNEPWGb9rhUpdkPT7nX1sdcdsXDNKx2AyyQZP7bQxoFj8fcB61xv5",
  "key26": "3YzV7WrhxwgBVscRGiwMe3p8K2b6X9WC8v75bZhpZEVGWyjv6AxSNr4AmMovrMu8hkoQGTgjZiam4DWWxjTjwhm2",
  "key27": "5Sgs8EuhSZeGQYbF9nhaYAks9Rf77CH1mNoFceUaUZCeJpCiCct34hctik7BeJjsfucLFnjadRHnXSMuBSRqtge6",
  "key28": "5EGBnykjoe149vYqtWvL4bHA7s3MCVm1xThAML6B1QttSmJdMJHW5pkCrbqMWQ474Ta5PJLgA2We78ipudMb78SF",
  "key29": "5uWwEc3iCWicsNPWwr7i7uNpAGFMnHSC3of5QzHyqyKTYgqu36YJQgZLVuArrscsP2kDhoXkLVYUUfr5BqouHFeR",
  "key30": "4ihr45Sk1Aj9nJgNRAGhjqdTL7PzZbWEPox1o7ojDME8ETzMhhshVJoaKuR1qbU1zR3J8Kzp7WFt6pNarUHccomA",
  "key31": "4kv6ymbzBsQHk1wqjJrkLsqc7WRFwQsKpzMdDN5Gm9oWpu7Wpi4QuTrMPzQRwdiq7GVcGVZBWGFZmz3MtNvosq1n",
  "key32": "3Ya1gmVMpfKSoutQCtQUd1ctSWYL85RD4mm7DAHyX7VVEkH2QWTGeWQD4iMe1ev7daGak3amB53UDNBndxmm5mMh",
  "key33": "msi7g8uNrvzJhz6ekoHKit5dxvzdZx9vd8u94wi5ZnRTGvbKcgea6DdcqLLfUuKnNZivBRAfHUEuBAASKJmqbxN",
  "key34": "EMAwnTjKqAtnULzYZfQQY5om7na9C7kr95cHMkbmgAfoudbzQ5wu3wyaKgKhkD5WsTtTrGKy2FBmL4jvkZNWZo6",
  "key35": "2kVC53beeZQH21iBMq7ccAvtjCf8eqPybgnrUmUvG4LJMBGta7HyDcrY7eS72dFFjSujisdwGkUtqLVbyDxpEPM3",
  "key36": "3Y5A55ZXCTgsUi7bwk86Be1sE5GT2GDj7pZeE37sbnY4RQCC8mWpxXWXcAWaLnYJw8mW68ZNSZkbVAT5ox28FF8u",
  "key37": "48m7GJTfpdWPms7xk7YDEMjRRBBRr5XHjhtuPwcJXDb2LE9SxeER82ZamBwdVSivpgXHmGZxPnKU2ndEjWgxD2t6",
  "key38": "4yw3ru5wXDGDdQwxwaA4UPRWjCQmm4nHbNwxDYmXtXmt4g4waU41SPvq6X8ixWp6KVcDVuP9VyeRCgzs8x3DwPKr",
  "key39": "kZn1HFvBRsB1nh5cWWqsU2GGWEJUogQAYQmem2byE8dzhS6e7FGWTpoYWg9BQknuSgum7soTJvgZHMS7iTm8A9F",
  "key40": "5JtX38bBjNmtcsH2qWMXLaWTFG8qshx5G36QHWPQduLjb24zhNkp7RjrDQnkTkLggbuf6sihv9hxFEr6i1g1dpYa",
  "key41": "367idBd766oo74jfhAsiMq1Y2jsRkD3n5cafY3yETQbpy8sUQQGkkikCgQR3BYeKxxUrFW88MEJVKQV16pmtXM1n"
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
