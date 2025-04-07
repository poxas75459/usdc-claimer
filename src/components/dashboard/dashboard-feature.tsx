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
    "2qGXaCgJXVrjw2DZvBf5FQmiMyaYtTV1rnpo19N8FSDR4nKsEdw3QvgVxZUzXUKy4SwmYcEZhp8fAGhnJ9roShdd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64B7Cc4xmWf57GVuj8XqmEqbt9ZKTpG4g4DG7CH884KazD8oR11SkFrPivsrQXtXPJCdWtKg2u7ZNsHnU9naKyxY",
  "key1": "nusdkUWXCmRnk2EsWsaGiW8yHvXvDuFHxoxVj2BVRjTTQwYTUC6GifaGySw63xHaCcSWw3R3fEL1KnoHADnfbHp",
  "key2": "53qscPUPxgbTkNprDZ42xUq37FJ42tCMLyDk9y9iptZqrqgzPvn59Mzrd5zAgdutr7X2PrJ1oiW5GvW1pdtDiRqR",
  "key3": "FFXk6f1cDVWw7LWDfoDSUzmpAXa4efn31bWzRd8rs4qN6BbSbFnok25wxAH5XFyfgE9rAeMRH3PRvEx6X3JBM8R",
  "key4": "39QpUw4pxHce6o1WpSUJYA9Lnme3EmqjqaRejm2UMVTedJmVs5gHEPkvPBcW12UQML9j1LTDD9VFw5j5k34uEuoG",
  "key5": "2Wvvove8hDJGFowfudxmsy2nLRwRyGA6xD2h6ymYveiAeHfjZNhytEUDFCzJZP93iNTw74ZfqYDpszj1F1kGqapb",
  "key6": "xDBRjU46qLvE9BPp9rXXVH1EccXGqjvpcDjskrbV98sLhxQ1GtcxhVfbF1a7pxQDrjbs98JYYBRUtkPirrLhb5u",
  "key7": "TUi4kVXX1Raq7W2s4WBRvk8p5NsqLKhHKqzuHk9pYCz9ij3UJeVuKb4NK2ZMWW6iGYDBxRTTKMytEvJj1jTbwYs",
  "key8": "2MCPhT71nUEdQhnuhC4tr7AoFdQQRuVBDpk5u6bBcrV513jjy67Hnv3jm2k4cAc6HYyTf8ec1WsYqFQo2WC6B97p",
  "key9": "fe8cLHXEHFyuS9ry9zm4rjDuBtdaUN6tK3CZu1xAAus2VqY4UM1A9RPvDiWz3G5iZ5TUX7MsTrikwGqwemNLdLr",
  "key10": "25viUJkt3cNFpj8ddWU1ihg73tJ6n1obGtwGFsoexTLGLovrPoHmQVMSo9N93JgV4PHw2DsqLjo8LkX3pHVyLsje",
  "key11": "kA7knAEe4GaNTA6p1UTsYwgahG2fm4HtJ1dLA8aVtTuELKW1U6YD1EjNZaozX5n1KJwQ2UagC2MfMYEhf3eiiSj",
  "key12": "4Y6DHvJnTFrCPWuGpZTaX6QDabHRe35C3dxok5p3LbuE42zYznDajgGKrP7FgdExAPRMHVvp5GP18hNC6EwYEeT6",
  "key13": "iwEN4hThM2iW4ayHXqmRRiX6rs8BPgCeockmwoSz7GjaL5o4rNeHDbuwkWteTi7rMTVKtnokJPk6fcpGa4Ay7tC",
  "key14": "2ZSi89tFXX2A5rxKns8S3raEMxcE38Em5fiScjdcFC1zueL3gyYR5qPShBgr659aQ4ayZoixxCJgYvVTGZuk8XUe",
  "key15": "5NwUkEjmofdY64ZDrjNjns1ECrZX3kA6CZt495SMtyha267ss3RDhFWK8YVSX8yGBHMV3RgWQBW2RHibsAat1R3T",
  "key16": "bxmAa7Cah3YaGzi45RQZs2KgSpHFm72ktbY48ZsYoFEGFaLHLmFQdSWefPc8Y3n5y3NtNHnbyB9XtruqA8ixxdC",
  "key17": "5jFuvwmaejy2Gh8Rfk6W1QzKGXpXBoxzb5jfo4W38rocpZU89BdWBYLfpf2pEY6haeD1ufEWa7bvpKniAtKxJugR",
  "key18": "5To1ibVXzVesChFTtAHiMJkGPWUWz5ywJVivEYVQEyBrd34eVXm6gArpkgBWGB6yRkmugafpTAGLZsR7GDYfQ8Qp",
  "key19": "PZ57RauhMRFi5uD4PdWuVobBYm7Xtd88vXGWKwAybUe6TRwCGriFqMaknEaf8qyAXBo2am6cTxJQfJHnLLmHG1t",
  "key20": "3daXSqKmr5M7XYUeRAxAWYdNkRidwq42g1tnY9RHuj7CKc7oERGi8kCmzNeK5zeo8RMdNFCVNdaC3CJAX62tN6fi",
  "key21": "2pm8Rpw9JKE5tSB6dyEcgHArUNo4rsjHFonj4oKq2VHUfnGcsnTF4Jm86mpcyVCMPXXiPwQdGYt7UqF3uLpqCJR1",
  "key22": "jiimCJGQr2AqtEtdXFrpkcVmTAvTRXxaZVsnDrsmSBJ997xpenhmo1SqrU8jdUr8PwHU2SDPKD5dn5BCjWyyPCJ",
  "key23": "2dUaEEs5ivJdy4pvFUU7SA3b2aMraWcLKd734mxLoL1VJWM8DcDgA9kgbMyz3dpdMHw3uzD5HXCucyBdeusZc8f",
  "key24": "4vNprrXzu7sXFMkbChvtsTRSyqdH26jAAzwNcZ6nfx4n5pXRrFvXbHTomB59ne5CukYA1iqRGQvQT2EvK8VYEfxy",
  "key25": "43MPRqecPF5VmtemLHBoXdnE2L4tvo9faag9yqJ8mYt6zBZ92AmH5EBsmr6oEEiLAv8NyxLqjQRySvMr5WU38Dre",
  "key26": "3y6167bSvGAV4j4fn4FY7zDz42dtJCNZchiBtD9pUJKKVmsFPVFXgZnkYmpJfUdsRRiNBDN2wqmyekF7cji9svp6"
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
