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
    "4Az816xb7JsHFVkANhBUvsJ4XwQpCkHFdUUN8WUqvDSybmMqC7DYHmT8gFnB1V1H4wAoLX2B4uuyoJAc8mES5Dm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hYE8v7YXaQMKrNkDYjNwebiqt8HWsx3BY1dCY3Mn1BtLfNxuu3qm8qR5acATxh21Ev6JvrbDWs8EvELmpJ7zAHa",
  "key1": "XyCfZeiQxGzBsuC1E7VNJDKg2zw13WCwBvr16U7jvBMkubbXpT5udGXXrSbej3tCQP2yCk98kK13zKJhDJTf8it",
  "key2": "sinV9LUfZCmsrRbVwnRpd4HLhbvenRerDntqGJb8bcconun5oWUr78mWUZDrPGmTGhAj3U67ieo7sYbNbjk6yHF",
  "key3": "3jKQ5HjveVPtsnrkP1jq7ZuDPK9BANjhUbvE25DNdDjfR8xANUuu4re3BBcaNKGuKfAsT21rqymXvpqeK8LAJcDv",
  "key4": "2938WUwy9NtCz5RCZ6VSURdLacCbL3B95TQMaxe8yt8wVLw56ZRBJz2PgLet81piW7Bx4saLvAc7R4FnaAtjH2ko",
  "key5": "42zDYX6Svua2bRGFJBArgSqMviyeheJNcTrsxDzyMZ2csb8YejJbpmviXBVnQc3UJ3VhZ5jyHzbYPqmqUqHF5B7r",
  "key6": "4qRtzPzorPhJvQJgoikFzMjanSimadEnnrVpmH4zxtjVPzzAkwEnTxDhQyyHjen7MjCX3aWAnnVNzP49YWqWU9BX",
  "key7": "37iwkr95Cy64oHfkXDQp84qLmnNFBLnzU7RpgozwsZXZGh4kRSN6QGr63mVB1uz8KLxZv1e4aJd1CDZvpnQcNztW",
  "key8": "2wFGGvhYiY6Lg9sxtVoQWS4pA2UtJ2QW9W3BDBtg3BbggcbHKEPqeTNvt1ewPq16g9PDWgGW2v8rH2TR9dxH9AFs",
  "key9": "3dE2CZ33qTmaaBxgVuqytTMLbAZwgWi7V61gK2Bjk3fEAULjdEigt8YNXPhXZ7r7txJwkN5deUR1m6tN65wYgPXV",
  "key10": "4LBCwP9HyhZQoe3GoEf6pQnP6o1JwQYuoMAwhE4NKL3GaT7346jtuqnnLxLMGpeXA4Sk3UAuoDF8Jj1TLWqVm5hv",
  "key11": "3CGommAF45BkEbqo7CgKv81k1P6vnifyGMYConha6YyH4APvCNScKLvwoouLjTKAbCszndfxhyjPwMqQ9H8gXJN7",
  "key12": "22oXWfebaJXqNL64XC5tf4mbJEFHBwmizbB6SSmKoDCLdcG8F6QiFf3eZAWxFtqgZkuLuufgcewYrYaV7ZgqDNuv",
  "key13": "2WqbWBNWwRCMFk1AJKkpgE1gdBbhhc739hCgErk5r5tELLjZ68Bow4zhpMih8ZzHBtBaGdi1eek18ZdXHCP2YpK7",
  "key14": "WBd7RuCcZxbktnbD8ZEx3f27ud7iEkhob1Sk4FrNirLxptVhjGUFvSouzFnoE7TSBDhQ1fMAuWuSZjd57WXG8hU",
  "key15": "2HQtaP25KUpckbPDV2wpbPhMdHesJEbHxsR4XmkvV8Zxu1ZaEyBdwnE5HLPPZWbofh8QvzuXupXBonB3oMqaeDQ",
  "key16": "25TNB8TyJf5EeiiR1NrotbGVY2PtTNUDe8fnrNX8YD2wfFG1oPAouNc6fPVLJm1wekJddzd8Hc1KQkuMv6XjnXyz",
  "key17": "4qbugbTxzHuBDeDMMWdfCyAjwouYWTTjPFvHqbcLZk8e5SzHPp8R6b5u8E6f5YeZyxJVifbWFJa9J4YyB7UPV6En",
  "key18": "4G8Ev3WrfNHQfKBhRDeJGVZdbkiniwSiDdcr4AvmJZUxMfKfYRMdByaDQTxwEfrgvMNZ3Dcy2MgkgVCEusVXXCTH",
  "key19": "42bF3XSQTr8LjnzUrNHgvSYmwxHhGvVoVN4Zuz6fd9mKpCbS376ssBN9wsRsQM1bPmKVMxpsLPhyjxjEVFGP9U5x",
  "key20": "55EYhMLsnKhrpvNWCri4dGMGZAVuuVa96S13BWax3XkRaPWb9iQ9vnUfD7KR6zfa8Sz3kDW6245H2b4r2oaXZezn",
  "key21": "2fWCKdngs8fy7ojZnQ7B1897cgPgFTtanp3Zazh3TeZWPaHzER7soeEcZeSSW6JPnYZRqr1b3HjDKy9DteFpHePB",
  "key22": "5htxR9qVMw44Az2ZgHPDsVfZevUsMkwcpHuDuDopBPGyKrLzqhcd1m8AAM6NftAZGZ7hjpsBnd9i2t1zq6b8ZwnL",
  "key23": "YkuzPngZsjqZrsE9Gt5JJfbLbP6GtnyR5e3DMtUJJ2xS5Qzo3SD6ztAKKbNGkwgV4EoYCHWjRCwUyB1EnNTZNap",
  "key24": "22zae8mddMdtvF5mfLFSjts26douThjYSwwNyz2GoNBDwkGfhxXaszjcZWPFzPXkZ2tA5U7EEjuGHPXuWVhYHNqF",
  "key25": "5yxGpr9LSLXysHf76eVtjCXfPB77xG99PnCwuPp5mx6jFS1JePerrwVVMQtgGE4vWuzhcxpwDbKfmqfphJUGAqwp",
  "key26": "62KrEfSUk4K1s7qDoZ444CTSyVCjYiNmwVYt79yBAXnwhBNV5zBUJynLbywphrCEE1LQQwD6A7wRBXtZ3zUj62BP"
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
