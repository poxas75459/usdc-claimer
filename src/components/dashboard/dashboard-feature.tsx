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
    "ntDHtzs7mBsdVtkC69Fa1M397Bn65oQ9w89BW8H2wCgPWYpjGyt2a68hkgFtscrfupzQo5hBzM5qZF5xMzzZ6A2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "635YXjSTaqwJ9xZS3wpRTUyQpSKYRqESTd8Adm8XNUdSEHh3Y6umgXZwuKf4mRLhb66LU7vBZaGP3KBTHXdCg1Lh",
  "key1": "n4w2GjdgQRqxXnFpsqWivo682ArfVkZANCWrRbkiAXyvNJaHT59bGtj3yh3A9U5wQJ5kBJi4EMNmA9sm9W7o6sR",
  "key2": "tSsDQ2tNnyRav3kAiDs7eaqp1QMfieAoC5rAjZ7ucBotQkkS93MnZNSTeKAyoSgv8LHE4uVjrTccFChsKUZxR2X",
  "key3": "4ZNbAwBvZZjgy6mgVTgi84b3SKdnU8oi2DjW6Ctrve2RbPqr9aoRdwSvzihJ6Cj6rc9i468iY8nN8CJJNT1SGUR2",
  "key4": "2hwDHEmLLoYTjBq4BmQ2CXVUEJEhvbopLuj8XSUmp69ejMX6zCBKDyKt8zci7b2PDhx85e5nqDTW4jAztaZ7z5Vh",
  "key5": "4y2sqwUYqoj37DbKjipkLnEMRPTj26dzWLULdEBCk89zU2a7yDrtPn8HWHXHi7pm5GmzdcZoTtwD1zsRhnfft65r",
  "key6": "2NyZbdy77k7njxbxEhcSQRkfhdFckWqaNcG47tQZjM5xy7UDyr9tF2hmdr3peVuMtG5E5Y3LoWkY1Nc39GjYEq67",
  "key7": "5SPWTbWz59VjF8arJ1dfoXRV7RzrkisMPzaE43ZyEkpeAwH11ug9sCxXeWxq2kEzHrZDKyX6MmxTU8vhHGs61jii",
  "key8": "64Le8SzK4cEEHnCQ9h5KrfongRWyHxYqAiRSvgDWHotSUYzpuuydLMPSYDf5f1wdzqsyMv5zUUnYeKrekQaHMqyD",
  "key9": "57P1r2anrvrmRLWDAZQCJ77j1e18rDTCGwCdmsJSJcVSwLfyLVtqsTdDo26Mnth9MG8xmPQYAGdV9eSR6t1Cggc2",
  "key10": "3rM6Ai9TQcvu5h3SFHbpMSU9piZp3VisRDPgjkDPyxKnxd4fMQvEaJbC3ZUvn8qedJvsZG3ybDRsb7d7b6erJZ4L",
  "key11": "3SRtcxSvKUG9rh7h147s2kxxZryYS2f3VpC6MizdxZ4oYUMHLvyJx84ZGM6xaHH7ortGHmu9TuwzLx1PuXQicRaz",
  "key12": "5cRvdpQ3w9LCKE3BxUTMUoBU5Yw7mNVc842k7UEWqQYpFrwHgqF3o1iNwcDGP84XqPq8AVT5CPAz9gci3GfCXJ9y",
  "key13": "4GaLoDTe7V2thiuqHF9ut8yDjSuUT3rVapP2jPFEcKBL8rPK3nnjFYriPXmVsUHwgSAG7zQVgKGYVJPjmFvckH1t",
  "key14": "3qp3uZKVND1LMxj5CgMSSqYtdwrXn26kWpzTz13Xvz8dtogpNQKDDPpPK4h835NP6yiLTFzFhk2t2A8az8YHkqum",
  "key15": "44m5kP8uz9MSiVKYqu7oN69T6DPP8tYTXxEPfnWS3Pog5nvMZuqH1X6QkpKKHp3UtDBmmtHvWtcMJwfQFdEhyZvk",
  "key16": "4ha5aVBsBPd8KfCy7iBjXjXcptAzpiUcqUdXBZRGA94DPev4w6mGHf7DReDy673vvBELMNZ8PBU6QJmGxYiSqgCt",
  "key17": "24pJReUzJ3M7dpi1MaGcFj4qSCfwrpyyMyBgQmAxHdE9RBwnZpg9rLgc2juiZgpk4xPpkrySJVNVuhEKYTpLHDPL",
  "key18": "2DprfcVg3hcphqJox8XWFkF3jDJXPYzNq8P54mfK2TvVLwhwbFDKmPS7YCRMnHcjDtf5pNLm9Gqyo8s19QQBsYNk",
  "key19": "2MUxgubkinJxPh2yAXjDLRdiR2p2zFGFD5rD8CwJVH9zLyXuReuFMsogLTugGaG6Qr6SxhdqdjzirvfVtThMHPGY",
  "key20": "4QvUuC1FcdeEq8qdTBgyxSHjFyeQU1YkhrrfbLMPPk2YJ6TJNhXFUAiBwwennk214dfGzBjLz18k9oBVdAp3YZAE",
  "key21": "61nXYyhpmRBSbr9WnpCNMjqSnzuxaWR8amdJycK9mtz8iHY5TQAv53Sa6yj288r3de1oSuFdR3Eqh8hb5wHBczwR",
  "key22": "kLtY2HzkHMsFg19Anfanx8uGcod8tLaqvh6ZQrBF55QusTUCSNTnzsZH9Ew9y57QQLKxN5TprpA6otABXsiHkkf",
  "key23": "2PmGgMBC2TfuRWYymUrpDUAQLdXAe42WZWphr1Nq3YcfrLsUtcVuqpe2tKz6sne57YQjrNaMx6NJLCEFUxDfUNSs",
  "key24": "4am4SzXEehcP6aLcTM3WMh4dvaCYsHPQ75aBVtryLixz5DeiWGbxJqMN2Z7McigPWVPfbRYwfDiuNNaRid54EJvY"
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
