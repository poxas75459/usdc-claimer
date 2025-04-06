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
    "4EQDheDrX64FprNZkaUrN1TAJDfRFwxwbHJCECVbmTHmvhxC7NeofMTKRrPV2zFfszJvvRzv1PBsUL4E2QasCNVz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GwFNhHF9PEUCQ35V73RMdpviTJB7qyxEwbVhDDwKRcUDSm4EQ8zRc89vHitUdbRP48axuf8fTwmihQkwiw4d9wR",
  "key1": "3gb4UGYcGSZCTc8GvZAV6bK3u8okLTtNPgRnpSxUhE3xgH3nBoNbADwWWt2QBVF95yWhGBmHRNgcAxQQBorSeCUS",
  "key2": "29kqL7kUdgMKsN7VLufsgAZxLqvMdaAXLVmfB5qZcmKB8VTTKFcY8pu8sbojom33ztNTcdUATfqZoFXB2MPTHsn7",
  "key3": "5Y18eYqdh8LCW4oPMmB1MRJot95PcuvJvYizN3iPZZzvvsucX79sjLSsiKUE4dGHAfKV28m1TPXAvdho99gLdmEm",
  "key4": "2pDh1C31USmFeF2mjG5hdnseF1mcZPTYoGsyiYyW3mNGQcFPLA5gJwRpkjaKX3KKBgoDTwyNAZrMrmAWwMPewXyJ",
  "key5": "45tWTUzrPn23UuK88TAaJLd47BvhUJ8dZUNA7XLA2BVQb4mr17PTF6dEJfxkGYBtyVfAPmcg858foBD6zDBMtyxk",
  "key6": "2RzttDJSMv37ACKYeu6CEs91CfQ9fNmQTVG8XBsfWkJkQGvDH29JVPsTHngvuZZFgR9PpNNYxhG86j3uMUf7cZDG",
  "key7": "3RbQ97wL97a4YkgrvMbKjU3SbKzRtJwhSRjrFxSEFJxqs2jLozyNMy8Vop3T1HVY6hVwN5e8UcJ5XmVPmSKnnZjD",
  "key8": "4riXS5Y2TaAWeapsYDipicLNUqTi7J5mCLpHDBSqJTAFMh3Jk3StNoFVePZPLyK8gvwMukbVvAR4crEBFPijRBz6",
  "key9": "2dgEpMpTKGBVYBE4jX48CGEes95w8B2Y5p7Sp96gC34ynoxqukMmU3UvfWj1YRA7AbhLtFdxiwPtUVsYpAxjPfMG",
  "key10": "2Y3fJwU3MLc1oro7YV5wojruMx8dqXGBZ7EikG2o6SvV8GKVp1KaFzJwrqkX8M2mMekRvGDbUK4SLajJNQHGfrWb",
  "key11": "H258xSfSFpdg95yRGhBKDoS67cGNirKXmGU6pPwWhgEttJCAeGJMYdiyxJr9qjLq4TWFJtf5N4tfs7JWZbLe9M4",
  "key12": "4SJQZnmjZYWSxr92xecRBcs2rD87TZUuhhhmjci5vtXYb7tRKJcf24cU6AP4NGj4NGEW2JGBcPaXbsX9B5q6M92V",
  "key13": "2r7iEZ1nkwT3m2c31KQqGNn1GNTyW8ZPs3srNVi8SJfx7oVhDDrsRQNRDXq1BzdtPquGmVHAQU5rRnyLw2GNtjP1",
  "key14": "4VcXjSgwWGSqSAufm6bqo314BAWLykeSBXPuKXPpNV1aR1DFCREHC5BkC5WtDckUeUWoZfySakDuGBiX13iyTwKc",
  "key15": "4XUvhBo3ePhQe8mXeaexb3262qqcU93yVRSjJsxpfTj97fss3okH9Z1dwUifH8gBCUWcFWD64EEmDt8XMb7QUtsP",
  "key16": "4U78goUs3XAAQyLCRyDinRp9RRzAUiWsRC64moJDoG52gNYWcXaXJKVsCUtUiv9WVpLGhQf4JJLsUH7XoiryQWs7",
  "key17": "31wRfdBNWMZkt665HnnWMSHpUhzHy6rqNqQt14aV7GzpKmydYt4rF2hcvgH8sp57F3Q8NxtGHxw9UHCbN9egZ9EX",
  "key18": "26DqYMF3V6PCrZGHDoqy9aC2V3U6jBxXeC5LXUw4nVSaMr7TzRMxxuM1cp3m3HbVvFenuKaeNGAEa47mursqpo1b",
  "key19": "2RGffTw9Lsunj6VNTE1h238qr2L6pqWso7MeeqhP1vgYD6dq9q9KgzjaC8tRw3ScUqZCXT2YkuN68WvtrpGgpabY",
  "key20": "557TdExU4b5epKsYrygq8fawJ9iR2ZbGUwKBG732m1DiDni8JsxW9WDspmS4n26yjquocApf29uhtH8Fr6XPKgVb",
  "key21": "jnEbtqAyj4ZaL121QcQsCpqQ5TiRnmxSEcMekc2iPX8RjTDn9uWnpXHsLpznZMS84CGdeCzCJVpjFBxnQDbu4Ag",
  "key22": "5yuPeymB2FjfHbMttBafqho5SEeaKCBehKastUStgSBNZ6G8WfFT1VkWa9GwDmChhEeVBckx7KmWKjLdc7NQDwzK",
  "key23": "25sBpzaEeGzeEpfxuzjhmzgzox1BH6pi1ZKKiTheXzux9AAevaBMiufuJAWqVCgXZ2FdyNo4wapGNt2VFBbTDvrk",
  "key24": "43Wh5A4pSfrgUXdn8eh9WrCaUcfQxBEPRXbqds3N1Xuf13uzUgdDHXZkYcj119UEDRjeZzoM3UEbvf3HcDQ1gEnm",
  "key25": "2ZVEXCUCKiT8WmK1YHkeLgAycBuyGKfL3kRjxDnbRzh9GgEJJ2aFEZNwKEc2CcyrZ2ksXSv5xvojiyGXKqPyUmst",
  "key26": "2sTttBaSv53GaotTqQr4G9qcjYnxcNnPZgLky6bfSZWXy9mZZHArag4GGseTHhX6EY7yjjW7NRARvJEk659a37vx",
  "key27": "49zaBgzQFob2cwm2Ky2saB4LX7etcWFCxxz8hBvdw37UX1SXvV7oDiZ3Bhj6EsANdHV8MmgpeSMLgvo3HryjNfPg"
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
