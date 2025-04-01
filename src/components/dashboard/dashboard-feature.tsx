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
    "3KPSxZ8gETa8hDKTPTfKUC1ro5MvK6gmJaj1c4CuBpa5SWZGeREpUmsH9ombkMXBi1J27dm8W9H8RpVxXDRhpei2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33T2xxNKPvspVgodgDGwMvHVDprc4UjjgivZ9yoo2Y23BCLMyFRb6MEixuWd2pZgmzGodKhNXNCo7YdQWW2YfBvj",
  "key1": "cYfxQRk3YXYAjYg1XbYdi2nxAfL5VTZ6qu8DLSgbb4FxXHzhyTHDZ63NDyXzedhNXqLbBy7fVuAF3SKUbqNVxZZ",
  "key2": "3p8KS8yoKQXV3H58EFcdewuUEbAMZ3JjysHBfaYAiJwadE4CtTtFokTW9rMNHAqAWXwVDCvkbCLVdbdScFpsbWwe",
  "key3": "2YRsWzvrcRzvN3ziZFEXtKnKm7xDwUssELfEVr3eECwdHGMuJ3Hj83MabykjuufbyY9wTxqM32hxcY16zjPe2XHU",
  "key4": "5WUHbSUWD4m3gckzdipHd3XYYsqWSF2j9E7ZNzjZcEstV123duZMLGnLWtXGuSBvTuZuee2w9m6owYwfmGJLdQKU",
  "key5": "3HxvqyJ2BBGCBcnBErpRyps2WYykyCqpG5PssqS8AZrWe1i3GCnheW5GoVFA5TuSvzjTWgmxpZdK8zW6woDR9orX",
  "key6": "2dmR8cngd8Fsh6Gvp61fwLLE58G4ttBhwN4ZD8gbnEW5sf1n6JYkuiZREhzPZcmQ1xkKTzobo8eAzdy26mQ2KWu1",
  "key7": "59iyC1M7SW6fqcTgnV8aKjdcMMgog8P9YhLziCn6Fo29mnZPsuhbM2MgKmtbzBwX2QbaUCNaTruzGpwLkd3xtL1R",
  "key8": "CK15A4vzXUE7oNbLuoRPeW4R7N8dyqkSkKCeUnYbsXVtjbRkdGWZEju5qn4DnjXyzkSk4Eb3rXeWymZb2X9FdBf",
  "key9": "2EgpG4kGzN8ef5ZdkuFZPP1suFzQ1jSHyRW8LQ5qmccmDx1ZTb61o3s3PXf3QyHfjrFYrUjvtUyZux4rjwUmhC62",
  "key10": "441tNHHNcqT127xM7Kzq3xBoSCNLQKDaXwoesJKPCnhsPE8xc5xugYTBHhj6qW7MLdhb1yCGkxo6KCPTMjAYSK47",
  "key11": "61rGi34JiAmb2foGXD1zNpj1xCqKgehr1XifDwbmK6dL5JJKbs9F16ZSfDsN8vgHrwYwhao534wXkzsJjR6pHgbd",
  "key12": "4vy9jy6B3DVjbrqkasXxfeK3cEaCXBzqd2XSVtCESm9NARhc931WSGSXJC8SoqaH3pjYY18at3trU1MNHWGRMPhd",
  "key13": "L16WHLXiw86ytaK9CDJVnNACzbVmC4QXyuAbFBjkGSHiAXkziswJQyaegRWa1vKhvZtUWTM8gN7sonNrLZEDGGk",
  "key14": "4HphwTaC8aXpi2DGu9PHn3c6ge8wqx657cQQfzyT2i6GKqY9qpzEsxAFUEa3N48tDP2x9Y18XLZVymiLGwgfsjfY",
  "key15": "5cFp2tHzv7CZwQeLToT9bnjhRUvPNvppnqYb6SSMpf3FJMvciHFV8K1VkkwUsWAZxviERh6HW5AGR2unQU9aumvp",
  "key16": "5LbWXSrahjM4FCHWFmpqcNovqRdQ8R2wFmw6wLsyZQMTJwtPpcC3zuGBsnjphjeNFXR75eEecH31Mi54y15yPHEx",
  "key17": "5wwkiNFeGdEPFxY22J2eHgdjGZaNZ4CKujnYjX7TeAV12FBp9ius5VvgbGa74xNBfZGhkS7G9Md7rD7pm6XEDRY5",
  "key18": "FiUQJkucbJWoSU45uQum5sih1peMqErypRXCrnFNxQ5X3WBhzfzaD5gftWcHyBBPGGQU2kEqCv9pYmghPUiY841",
  "key19": "3DTabXTRNjxwyPh9dYiXuv4pPbpjHesaBbUdGYvewgVYDTdxaydTN6Z5B22mCs2kxajeWSotE9G6Gtpyv3Pw8Nb1",
  "key20": "3AFhU6AgEnpk4k3hQtYUKT76WQZJ6EieYKWy3EgQ7pTzKFxmwpKkFDCTLEyN4cMoiJuY1zxGKbEzWXYrWKTnnCjG",
  "key21": "3scrmwis8ViNrxHWDZ7aV4mPUtmd4FWaEMzVHPQSkm8CEnfCydC1KGEtGavFTMJrvZ5eFXFJ16c2kAEovcuLx7BD",
  "key22": "2ZQErqTFBg9Kv3wt6oY8N1Gcb9zSNU8aJtKLQ84YnEcRuLN242tBYGPnYmdqsaBKPDj6Bm4rVWoewu6ht9rC4FGA",
  "key23": "3Dk34N7NpKyNGVYN5m8QN2tRUE7Fu9hBKmsT6xkNWtzyxwPqcMsspUeG5CxEKtPV1cH9XzH5KiZggo4bNc8kcgYo",
  "key24": "YVRd4tK2Kqu2VfZovGomLyreV4jngiXj1dS6ehRsuCWyH62KniwthN5y9uwTMxHKWj6sd4b95Ws5BXm1g4jWubR",
  "key25": "YoQmoeUU5argv7HNFc5RHqEcJsFe6XmMpMtrocKYqpNnR1cA1noJiWETbagxsEQrV6BPrFBr3YPVhvtpyT9VCPu",
  "key26": "y1r9tPnEsskiDLcwb8a3LaLJgzaeusw9AwLqWnkPygPZD2j4Nmg83vhRHcrzdwo6dBm4Y8iXZvs5pnuDxs9XLHx",
  "key27": "4sDweHnCyGzqJKgoNovRUKvcCLeNsm1aYYbZ6FVDyDgjHoq5XXpfWffwc9GaFyRQ3TXN83wBMJGwW3kdhveKmFqq",
  "key28": "2DT6FcdoFy51eR6bYyAWigC1MYcPuZTMk4LEAx4aiCEtZXUDr7jQ8sxMndBPgSXZs6Y71SE3sD8MY6Q341s9v2ci",
  "key29": "57EgAeKsMcbFRVUCf5nRrSJmNUV3DfGGbJJR7WxrfZ2pHCrJprmNvn2twYBGKqiRsF4NsaqLuT6dxpgj1btQpScq",
  "key30": "2RgnzoidDznE9hHzZFKGZJPwFe82wfcaD2teLQCmQq2txWxTYX9G1uuLm3DAEMGdjbn2morsqY65wiwqVgcXrHQz",
  "key31": "2Sk3c7rigVREPPwMLPHJGip2TWdeYS2nXP6ujSmNoN4tAFxE1xESG7C5bQ2aTs1cBdRYpwM3ouVvne23LYEsMQmC",
  "key32": "rQzA1bKnpdA16wCqQxucauQmvxkVKTbbFjDJaeiuCa2Wg6impo9xvHmu6ZJ2isuPakVHVkCEVfGUr24NkPQxm4k",
  "key33": "4xC13b17tJ2uftjY1cmM2HsUBYCxjoo79rnubVj9Ghv4aFi2KrhJWSCTekb9eGfnYvrw7MD1X2ctqdLg8J7th7vV",
  "key34": "4PkkRmhS3sa6tFpjbT8rU9kV8KaMkpjFk8s7exYqig4puucEjgtCoa8c4SnHA3hgaGmSN4MM3zTaBinWx1K2Lu5Q",
  "key35": "pCyoRe3SvQzXa6zzZWvPNzP8BNYyk9PH2KTNQEw9z6Neqpqt2kWm8qjd9rPtBJL2pXHdh6NGojNkzH3Amz2vtFj",
  "key36": "61rrTLjZVgesWegsj3t1Fp41eZuT7H828iN5pDnMUe6DvAPyfVjiZyJRisxMRxbSWSyWTfsgNzV1mmDzhW8EJa5q",
  "key37": "H3jPWM2wmk3UzLLeb7innuTfdHSh96EyMWpJdWKVtYpYznR3BmPaqwGxJH1MT2fNfFQ2yPsj6QiJuPe3doqucyZ",
  "key38": "5HthAy8o8KC9Gjg5S4pkEsN7yQTiySCiL6VH8UW9dLKZdF3oYV46GxCWLmoBGSPsZMwpNhUbLLg8DhQK4q7G59EZ",
  "key39": "ifUTFj5FnfLr9CAm6wnPAMAwHMC5vu7AQfQQp9YkuWLycyneQCCZoiLmSJt4TVsBFPHMAcJhM68VgSsPBK4jMP5",
  "key40": "2B4s27F62JXxWNk4Nd3W7SKHbmWbTvbmVGwb363TnoR57eJf6JvWYPzhSXHWhgq4a2YWoTfFB2vtyWt1cLPBGM1P",
  "key41": "3qS2PY3PfiRwP3WYmtetHR4QbUZFuaA6T3CZp4HzjwRYUxyDRLF8NZRV33ZEhETmuvNjkVspV9v8u9Eghc8y2vu"
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
