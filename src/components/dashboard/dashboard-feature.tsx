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
    "5uiCJA5Re3DZdL93hecq65TbVdkmr8YQdVbt2bAcp2B8tM5KTqbyUU9qoVkEXjvf1yE4L5WoHyd18Jh5xVk7yDYG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HZHqkgQZ8bL6gPNrcZNHwGY6jwDfbzbMokMrgW6wHFavnkxQRjVYjY2LTjxjx1hUDJhgoZnaHJ6sGHKGqVrcJp8",
  "key1": "8PDHSy6yqy969M9DWXzRaiJkQ7e5LUW7CpEJwcvWFAEEHYWJ1hP19pjKE9yPGbDTxdEwtUu1XUSAuJT8LVNyXfr",
  "key2": "3dktB85u1Z1UE1GsYWhUCDs7jiFvPrgDYqNfcE2LB6U5PXUotDn2j5N7xi9XAz49VhWiWnDqwZpEHN5aXPJZpkkg",
  "key3": "3KJmEESAM8gTwKHmrzzSDoCVJ1RpNDFDZMuRN3bv36ptVEhGboXJrNHKY9wefL3Vfc2CpaAd7qbkpbDSkbcNrqWp",
  "key4": "4aGh3czxTULopfRKAqpMhpynC3itjEvyy81BcgWnc8JsgZpf324EoS6jdHt7EERhDzsvQnJ4rLHoHcWEt15ZdCLm",
  "key5": "49RwXgpwxkM8MSqa63FcoLvzLzNxxoAH3JXvrimmwducqxkb3DttyfbqXHs3dHaFW6qJQWJeq8ZnSZ9yfavDvdWx",
  "key6": "FVKjBUZaDgGicCogReHf2FsGbqNkUFxfX6sXDngGPMKywYhfAyMVtdFDWACroDwwBEn237VD9YgYLkTwsKgsqor",
  "key7": "4fFA5qURnszH6wzmgWcfg4sQHPyhKzujhxCsEwguJidUR1gjopd1JSscwWfvd4K8Kvd1nALCGnbKYupQnZkuvRGF",
  "key8": "2P5u89pFQ95LEKkvCGhs1aX7Dae2yViwmSWzN27naTVnHbXmdMSUm9AuxiJknSrm7Mkmwe4eCwifnwPcV7bQ6KAh",
  "key9": "zeDT1Zo69B3psmsbuzDFrhQjTDTvjz4KRrSPb8Z3Udcf5nkajvs3om6kGxxZedmRpUcFukVcbkGq5wVt1X2C6vS",
  "key10": "5s12VQiHGJfhn6FLuNNCppnNntZowQ9S2nuWTWLrAoSUMfMhzgfibRyV1wWEnu1876dpnBNg5vZtwxT6go2kXsPP",
  "key11": "3LgB9FK1kV7doChiCgAAuoKNpUTEQmLFHcAEiTBFzzwCRTvYeVPry2meyEiw3CbTmDb1YeVhHJfFvTZqttt4Y6iY",
  "key12": "3S2sAcTYxNhbPd2gCFgzficb9fHFLzKL11L9Dz29vqfuEQE43DxoFVrGLrJ3s8kHQVUxcN2UfXxBAsRwURrfRh7r",
  "key13": "56r9r4W67uMqSBbCKuhhY4i4re9ixhzTcSG4pMyKyR9m4QfBMsCnwvB5jjSM1jxZv61jNVmrd95xkzwuDvJ5AKKJ",
  "key14": "5iWNxDQcGu6CPd4vVKfES4oYqgZpxuuBVeyieWzvvg59iUGGeoiFAYvLJwChyLq2V5NkRQBnqqChNxALdMFH24X9",
  "key15": "sGesKLyQ6NmWprMo2hQaf44YMajjULwSvzFcb1uNEEu6b8EG3tACKeVj1QRkTb3ptAWodaHUyMZe77kkzBtPAQC",
  "key16": "47pAqmVXCFjjgkAcyDKbysLhTdZC8svZC2uXVh3o9USQD4f2fgdssBZg4AwwRJGn34badNvtH7wT3D7LtJ8yLHfz",
  "key17": "3ran9JKF1GWGjTtu42J1eMYCq1iQGbJJGekmrKBrVYPLdeRS4rEFBp6hpebQQQS8DrHiHeviGJ8k1uK4xiXMo9rk",
  "key18": "2xZTVwxxxrHXxXa1YWjzbejDcG8TJQvL9Ud75gsSuzrmJ3Vrcv13LMxnUtu9U2v9R2iXERdMJCxehqTVnA8KhPpb",
  "key19": "2DKby3r9aLY96rVsMAsGVR83DaHvXNc2gD6to2RGP3p8fZbCqLCk1pYLbmiUBNwNqHZDVt7abPNVGyQHihCTHJW8",
  "key20": "2yYkgAkV8peLhrnC7daxNPEMyE7dyMWWJHvWU1wBZB8wYr1wvpXmVGDiytPqNa2Jn7NX5byNz9HUcAdGxLwGrMCp",
  "key21": "4wUw3CgGVDdB6cMNovZRrqmqGrRiqQtQMtH73V2LhFthgJZfjNRRdPadRgQavdHqzQpUzaGUycy73QNnunEgLmHX",
  "key22": "5uvPi78QNn6RdjiT16aH2yJW7DjgMhSdphoymREs5q1crJeAweJ9L4EQLkaFLGW42Z2HhcGTN4A8fAV8duzeAScn",
  "key23": "5Vr4kfqgE98vbqPbrVAgdQjk8mPppETK63cGEKPnzNds8F14g3UCFqgExp25FWG38RgF4tmFw8FdwtJLH5XrsgKb",
  "key24": "4nCNfcPgjcypcJn5N1TYLgNR5pC55k9DMd5S3CHfDyGFnqpScsuPfDjMNUqdcXSVLhFBoUx36m2gCGe9hadStMkz"
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
