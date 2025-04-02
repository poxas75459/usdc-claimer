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
    "KeDgnzkDRtSMwEYfbM19p7TnucSYJwQxe3omF9B1ggqUqL4FNcuR41x5vVvcBYUFjERTPSWgKPudzCxcUpjTEnc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kUMuhMLgiPmzYpetrtnnG3HkfM38k4THY6jSc5Qky3UgCFCkFDvASKJnDKC9ND4UXQWQyGhLufSTjLJeJjrVYhH",
  "key1": "5E5t3kPqav9Z1CSzqpeCFmQUUA6oA7C1wzmqrNK8kZ4PSybLpRQsXPSh47Y8z78N3iuEKBAvU49CqwiYg5ivErFs",
  "key2": "2WURmauzxU8z4CpMmqBZZ4oCFLygtRzcP9WzaTxHpNy2XeKPj56uGHNQ9TZjmpUf2AcL7t1g1QgpBmjNv2Z9c3qQ",
  "key3": "3J6GsVQkLwCrn32xDXSmvB4gDa7JcsrEMhmJCTJ7GnPHRRYbcfaKHJ9aYspE2BAPYVdRviL6MF2i1Uh7Q7WaLZ9f",
  "key4": "gb7BorvDTTiZjqtjWnELrmCrJFfcwD3SnzAKzwiCKnbYpGzD96pZ8PCnw6nNhpnN4AdQFoVC4Bf1DM4veGKBemY",
  "key5": "3eADCzrRQBx3ZuqWdz9uwgt68oLhJZqyq3dJHphKtuD5Xc556RtxKYgq7syviKbMNmry2pYo4hVrs4MBkjaRLK8e",
  "key6": "5Vd9R15p7ZQws1e6XSA48JWSnj2uEAkFrmY2wWoZRMKLWiyLyarBnnmDbePtS6ranrXozRZh4R467E5iQ9cadwSP",
  "key7": "3Cw1SbdNWfXtsndhn146Rj7Rr5vA1bjL4QDihHBZ8tzeauN1iFQ32MogDkacZPgzewm9DZ7KmDeecqdcxPa1v57c",
  "key8": "3X8jDGuYPLUpNopMvSQeDGr1aaRBaMKEVGFQDFJfYP1N76T4PWSW6XM44SoriCV8D1RpxVMfQCGyEtcQbYTGLcFE",
  "key9": "3pNfnckqqk8b9929XsHHrgpuQ1RaiTsBfzmGs81auMZ6jck5TuKsc37ey9ThTbk7nF9KzrguftDPKABk5E8YJYgs",
  "key10": "5sBsyaututLV1dJCd4Gr9wQntu3TX5NRBuVfV4oXqPj7KzZAgsmYbbL94agYdxBkgQq96ej1pP8kaMCf4WskFvK",
  "key11": "C7tCtASqgLAgZv9myJYbQ51z3zAJL2YA3AYWcmUdyWANkbv8ZkT6kkQv7qAALgXKeGTNEcdXauyZ56WPK3ZiXyz",
  "key12": "4iUmmrC7A469eGbhgp9YAHDyYS7Afe5H1aNLWTHeXEUdkRPQBnNvdGeGAvRmjbfKeAdvveA5Hh6UwzHBCyMUc7ho",
  "key13": "CZPMeXF9m4EN1vdQdi5BfXb2pNQ6DDUKMe2BbxZjheFe1zLrjep9GX3WCDF1sfcFdj4VnAJSBY1n4nT3SuS2Xkt",
  "key14": "Dw1RK9JdZvmLQBS6bEKBRemwLaMuQg4zGJddaT4Posn6n7EAYYrGCnBwPebeXLSHoLSZKe96bdffF4SFy7ktfQJ",
  "key15": "Qj1RsEvkXjUoTAgj8TDF1Pd6JFUSBHwfbfCbGVLvw2onLTwtxGdbJbXDQHGxDBtbhRaNM2FFc4hFjxmAZ413wjc",
  "key16": "sZMaGf1Af9Asf3985tomLhhEWH7TWeX47xBcwk2ihDma3Lq9ux9uNYHd2dJf6ZBSmzZ6UWb1wTqegNDuDiNTX2h",
  "key17": "67ZyQohYKFSpc6SmWs1ek43AqMyeiyYiDk3dFPnd4itXr8xJkWKaNorSCrUt3e2q6EjqvhkKLX4ZGCvF2WmHWoVS",
  "key18": "4RN1PHdL63AevZZGHnhcyuihwayJ4S6Bv2ggabJguCFJfDc5FRcuQsbYR9YYXFHiKpCd3E9uG5wFR7GvksT6gLQf",
  "key19": "52iZQhHG2UZzTuBNUobNVckn9J9YuWtwZnUmfAgZbio7KKJ3hBtN7P8L84Dzi6R7ZUFEr69xLUDHmWbKiFshUbFP",
  "key20": "4KxsVwkGjyVckuEahGcsgH33qBHnEaWDFB5xsRT1okxJoca8Gyt2owGTdWFrAys3wcZMxWjz85DZRRaRbfDkjjMU",
  "key21": "5sgikkqyQh6Zvro5CBc6s9u12C1nkHUBqv2ZTMfkgdtapDFnQnK7NADCnrHg9uzdJC8wvpY45qsULAXxvF46W8yL",
  "key22": "5bw2ad9KYFtNMrhgbTSf1sxNuXuRkh6Y6C5i1PNYBZLVtpXfpfQsKz4DUeehSUuihK6RS4Rv5aiMVF2J7cNCBkNS",
  "key23": "5oypiteKGZmQx4HFsRnLXYec67gq7pgHFHeeRz8HkQEHjaVfretrsaPEnuWxrekZms92wkAucK51jCTMKSFbqTde",
  "key24": "k6AZRsUV3DYUVkX5AhokJLjCS6qNXyskXUxUAcKVqsN6VEkThPFDK8N4SwHvDjvmQNy9fRQ4HExV3XLHEfadb3E",
  "key25": "5PBGh5jXAFczcM7oFhaocsjFZzew2GeqfJ7izuxDhPuHzbQStYiYBVutGB63GGvgMmMMqpKNNMno3G1nvg2XrtFb",
  "key26": "5wrCr5ccicNqEHkRLMnFs9sQdTAkbNwENQLMTokMiMjmik35qYwsRkiSiKKaTb7REik4eVAsE2EaScBeh6NAzdrM",
  "key27": "3TYKLfKkvnq9wBfLdMroH3JF5DTDQsoJaDcsYFv2Z6cNXGHWwksMXUMAdv8HdTipHLMuRGm4qjEQR2975nWQR2qG",
  "key28": "4rR6uSnRg2VYMAeXm2mq4mFudDrNTFW3Qkw1qdSeYv9fHoAkquyBFa9XMpwoPB8AFwC4jxPM59nXzravsfWNjS5e",
  "key29": "38p7AsfRvAgm6LLatK2oiFAm4BW4YaEQ9vwyhU7RHkAT4kq2sG2RBK6pKNGL8QnhurGecsezQq7bAFCUeLPCgVyz",
  "key30": "6D4upSLbFN2of4N7hYNwXUL2KqNiZJCXVNwDocXasNuasAb24QmgJ8wiHRKZQNfi8ZHNkgYz75fuNLxyALyAffZ",
  "key31": "3GFtnA2Rb5ai4ZXrZHM2NddJVYsLQgRzNf2fMet8STRjBr63GMvqoKgM4Enen4KRSu2DaKtSBc6dbC9s2z8Eeuzq",
  "key32": "5Kgot1ATyvD5mosfJfi2i6tqVfW7JMyxGsS6jGq4YNGJvK4c76UVZ8XZA1L9M6Jgbd6T5eDw3XBjcjGALuNuyaRp",
  "key33": "3dxu4XaNJCYHnk3mEJKagjEXmhTdeHsrQnZJ9EdFrgGY5mLgZLYwJSeUjNfHSPqPyzXc7XHfu1o3czqwSgpnbXNh"
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
