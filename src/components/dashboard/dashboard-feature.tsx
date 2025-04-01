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
    "2RhVZofpoe9Gv2MEkaNVKkRnv93TKCbMNRgaM7GYZg6RPaikQwZyDRu16rgxYeRa9CkyykC2k48U5wcEmw1ZAu2U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E4E6Lvzcy6WVoFEPRSRtgSoax4Sza4BkHJGmqkbPwVHNU2V53hGT351jMuzWdCaaKQiqBzDMQdzsawp3fHiYsVf",
  "key1": "61zRJaY1vkLH4Kw7fqE5EHzHktf1HkeHit1iJoYLog4ZmdXzkRZHmBnHNts2g9RDcP8eCt7HK57svGHBrEuD2Qjp",
  "key2": "3wckBYKDyAsQTA6axR3nnPZh2BSmdCeLjAYyCueifnmYrhD5wYJ6DiNbMMLxXfJ79FsbWHJFkYWcAWBouZfvhJwN",
  "key3": "3yMrvcGVwKwwBa1dZCtJsGf5rtxBRHpCKczRH6xsgcjg8tp3XN4B1Wfq24XPEPTivz9UKvxRcitxjubX18r8jsD8",
  "key4": "4pu6F9ADfY1vhPWn2nNRJRM4afUz5dmAZjexBtK2WGV1JxFXAHLFtd9fcSEZHhkfF59EqyGfa8aYwRhfx1fxYaFX",
  "key5": "2CFVvH6NgTSq52ks6P5Mvrz6DFyuTJjqLbASmsQRD6hASSjTiyVQA2ZtWWX21wvZXhBGja3L5vvArNgJw8XyQYTp",
  "key6": "2hDTHdn4bBxxvB4aw8XUQSqaMcjbb2KALVSETrLzSq7mJ88GQVG98ECrTfcgqah3KQFBhQg8ySX5fHd8mwfaGSs8",
  "key7": "54ApBUBa5Wf7snwHAtYbMaK5E2WhYC3vcrr7CNFxGHrMG3vPWPGgaF5SstCFoU4QJ8P7dSpPtkfu8dxSHHAQNMZg",
  "key8": "2vUBFrCyr1VUDggoGsgHx5W4T3gr2fCZ4Zmfuh48j4APtq5Y4TWeW44KJCHbeYg4QkHoRVcAUoUHxSswYKW811JA",
  "key9": "5TreU7sKuC5NUk3pWpeyDnehcfDxS4JxjxgknwRPUvLcjxyu97KqZgbDcN6cVAQn6goKwBY6Vi5UcCS6TmwA2cGu",
  "key10": "SqBV2dveBisrVRgqopbhfj1EyLPk6ACr5F2PBGt6xBYx6nQHiTJQw1C6MaxiSVm44oMsPvC5fpeP5JJ6evmj1zw",
  "key11": "5mBEVgdrbVZixWFBA48ZjRNsme4T5SzemT2PxrTUmLshtHkAJdY2trSWfSNpzVoA9ibu1XuqsGW5KDoWtvvspqit",
  "key12": "2fRhpeNLPCFp2BGrGjVmfp6UtzZWTQGjzeLLoUmMRuL6FvH98h6aSWQdLpYq5iSBmS3wU6etPH46mBEdSGG3adnu",
  "key13": "3vvA6U9qT96cBMjDShQDEpGZB4e7MJBKHwDdKZ4VYyevCzP6MdMWGPskWSHe5NYPM2PisCMDwcyBmZiTgSRmB2zE",
  "key14": "5sBxMsEC8A2qE2d1YqtVGAgYjCL3tibMtWBk3XKZtJ3RWdsuU3YDdG7D23byj7iHxG7tF124KZgSiMH8kdpAbyRS",
  "key15": "4EH8c4V6TeRb8NYGfcyb8jEiyXDbph9LLZ5JYdQb2g3WwpunvLjix6NxRXtfV9Y918RMmjemL93kb8R8bQFozUvA",
  "key16": "SuSLPUzbCUvLJF1DfutdRmogPRttLArz3Z8a24DJSH5wTeBiesiuJKbYeHhNodRbnVeaLrqXCVN18tHyWzb1ULF",
  "key17": "4mZTpK39pRatSb3FNeYDxtjXdZRmM1sNxtRKdiWyFcTqVkMLx73gDBpYQYFSuHKfHVRByERc4WA1D137gVFHK8y8",
  "key18": "2PfY4JkQGw9DBqDzc3xqTUN3uQtprtuPxyrR633k8G2BbM3UxHUZCwyejSDwrWmojRNwX9gvxmeYRGsXSz3zzrT8",
  "key19": "zoGALJPCdYQCztMWFNpEiYUZgGeU7GKD8sKNiQuEg9dJd4SZW7DmN73jWLEi1zzfWV9Pn8qwbg89ukjfWgire1y",
  "key20": "YoQjoa7fdDY3StATFSw94ULnkG7meSVGEZzcBsyv8bVDjmEUywnwnesV9thZr6rhPzaZWeS4KCAaJxhZ9SHLixp",
  "key21": "3pmL9QpXkaESEwSZrsFkrNB1xxZTFBRDN9XLdYHgjuDcK2TW8rtt1mPHn2mYmNDCFtDdK5K8jn2aVpk1XmbaZ3ww",
  "key22": "45jGrouCAZm1nECCZRLdmiHVSFcg2mHy6vdSfNQHdjvW1nD5ZrutTpvdZR9RkAKCasdcaPshgbvgVV2iB3xFKchr",
  "key23": "7syaE81HPgoMfYuat7uxVdChmAtsVef3vwzdnVhAaLoXRQdposDmj9HxNnK8SaVubcruZ6nog2YqLpbPQMpVDxr",
  "key24": "5oEQDjx2UDafkLLiPbDDbC1siu8WfabJU6eVSwgZw1g9bNvDpPn42JZcEUfJqmYP8KdQYKr6kVBeei8xJyTNtwvN",
  "key25": "49Zz4k9Y1vZK1PZiPFNQwZ4XheqvBah4YNTLeFHVgxsbFKQxXsVS1aAs5ZbG5BLz1uUXNa3YmeT7NwytDNpbBW3f",
  "key26": "2P23fqdh8RUwCPffbZ1xe2CkMcvMu4R9BfvXJF7TVRzsR94eN8caDnFMCGCCXsotymGyD1MKJwbAohj96HQQKQwp",
  "key27": "2AMJn6E86ytu2MhHb4sigEBf6TGQh6SUjJ7jnLx29rEWFSGJ3BTGpZxqmpDChSsuxDtWMiBsAoxa4eTgACZxBsod",
  "key28": "2MbocF2eYi4qnvQHX8VgyfjuCerQyRYew6gY2PWPJoq8YmuJG9JEfziCqrXRk2MLBqe3Ki4KoYqdvosyqDg2aXMt",
  "key29": "BK5Lu8JhZR3wmvs4oX6mSfk38nKRucv8FQf3TBiybWdhKPSYYicDEQLGmfcrodDXDG5NXgPgMZb3JYMVupgmxHK",
  "key30": "4XpNXnrA3pSH5Z6tfeBSgPArZvCsSi32NYDW1jxrEjAgnJFMizjLRbGnNhnNUGJeybXN3tDmg5uxZV1wT77XcNiK",
  "key31": "2xyzyNHJx6ukd333rA4RLKoGWwiJayT7KcJ8VRh5njZY2dWdMdpkocaryPDDSMZoTvwBxaXYAYV3R2QFaKgwsExr",
  "key32": "5rJzvcybBafGBtHMpUbWHq3GudRAUjThfUBcCjeZ5bjieLEmAgNezvWHubQLuYK9iJVvW8wNCRcRUD6RX42m9Stt"
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
