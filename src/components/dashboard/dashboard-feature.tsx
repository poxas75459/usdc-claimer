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
    "2fhT29VodEk5fQvFAbjC5eXdto2MnmEafeu3pT8kAyEQmo3Y4MLz58vLqRgeZym3BgU7hSbZjRinR671hqXnRyG1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Gd5tuA4PgDvawbaqZ5WcXPsFm5Q8QMs1uCevtQF1cBrJrgYbrEBnLo6fRTXkSzRGY5YQ4U1bbpBUbGzBfeRoNqR",
  "key1": "39FCG8df9BruXFuwMut5E6kNzoTvG7PNn95qR7noNpJtGjzadPXgPvTYWFh5PiP5oxRPNZAe9jj8mZQuMCXULNY5",
  "key2": "3u71HnXZkCoc7qajZF1hnP6roTTkKwtMUJpUs5kr5sCN5woVWse97ewKhkBYJ9yXY1AcxNmo2YD4XwEzEoYqTq64",
  "key3": "Ea6KHXCSRDWTnGUhZvUdA8RJkfXJcRNensP8vBbphMKe5S2wvWHuFoYHWVrDpzVZRbxaj3qhJ3K6R15y1np9GdE",
  "key4": "5oGtAz5iXPN7cawKGZ1qeXLgpNuJS9aupm31mey1e95b6Tcjnc4KkF68g7qKFqLTL4qL2C1PXakGjsiiSQd2ZFHZ",
  "key5": "5p5e2BQNKA9zVuDKbzDEnTBVCVcfVtS1PZvYm5FZY7KMu6DwhJEaN1yetH7Hi4Gp919YKvg6ihMsUeJx72bb1nYW",
  "key6": "CEdQmcU93VU62A7JfAPQSYXVkWj99w4NkPQ4fr6j3v1edBfdU3uwVR16WZ3zagc9XfNLGaSThhmm5RQYVD9z9e4",
  "key7": "5vfBsztSUx2MTB3YXc9X5KqbUGdEy3qE5y1b263mrxsHHXzBBdPPXbvwk8M3zM4KVPBKUb4kvefu86iGQSrzajxL",
  "key8": "4SiMStw231snEmhQ7oL7AAx44GxFToJuPFxWfq2gnJHzKaUZZMxVARh2oeMXcNBtFuSLU3WA7kwszka4tizChYEK",
  "key9": "3V6kYDLR6D1PRexY97CUwMNSz9VQAdmBwrPnvixGSznozf9SRJAhvv6LU6C4uTy9NCEigMyGkxbXsdEnSXjnBTKy",
  "key10": "5XkZTaSfPb74VM66VFiNwPrgdg5LYf4JxUpsdAk4p1iWh7XRq9jkqTARQ28HVvgoUGHJuiH6VWN4ZF4j24TCm5Rf",
  "key11": "JJuZ6ra14zwEseFRzUxK1WsHsKdFAeMozQuqJSAKpq9JtHZgRdvt6jQKDe1ZaL6SopNcWFMqHq2ZWkAAxiysTpo",
  "key12": "27WSEyDoHTG3fAVTKQ958A1i5Ci37DWJEKB3iD6pxNk1nBr45Uo16r5noFSh7zuSCwaj5D1GqcwynPC6AWtGR4Eh",
  "key13": "5LoZEdA6tuBSWn2dTVC8DbW9LsKNhrR19GvZ4BNymt16q6P5Te1dDMKFXhiHHBtyjjx6rNQz2duLupnzAzGVvF2C",
  "key14": "5Xjza2SW5qKjAyUB9o4YmNHXT2JATnFBSpUbsCjHaSuxS3JPqpw4ps6ohbQgdE79zvQp3PEMb7kYt7FKzVLW1qxJ",
  "key15": "3hH82NqNBpQMQCE1szCySqRHXv86f4xGia3MVYSAEC7bgnU95bozM673NUCH17HcND4LQ8V7ui3a4xsrAXpL4Q9z",
  "key16": "5njkV1S5M2AJkxXCdSft9dYNAcUtgUgrWXRvHr1cY9ac3Bra8Xf9bjGH2BJUJwcDxYgnFd4wNLyc7odFv6rQQrq2",
  "key17": "4JU5fUGPnccnDPS4PJN5L8v5s2tuUJHBQPuTPxZmziERwraJ5X52az7o4dCg3CofRhqoscPpaKJvgUC3KvZZqbj8",
  "key18": "6sjdkGQKRRyy2gVqkSyUTVNhsYNc4oB7rvBq3TRmwY8QYSgkRcHcMAJHhBaUPVcEST1gwNdid9gqb7jATafLBtp",
  "key19": "43j46bMSGmzBEXfuRJibMKnMCmpSMpuSHcpKeCGBQUwzBEeSpz6NE3yMQRVRgJzhQ16PBTAvz5XJQJHQBk8JwhWm",
  "key20": "53NrWMPZWzXpNubiGS4U35k1P9G4GmakoNuYixTU664uLQtJ3q2JGLSuMfc9uA6WEwHofijxXWjW8i53D3GcHGGk",
  "key21": "3YrhKYmZzpenrhTfFZRovahdn8vNYVdqAa4Py97vVoUvWGF9G1BQyNJNNxm696ePBJDgQUUnW9ifYdLfMEcDhMb3",
  "key22": "5RkSZo6BxqEq1EVdEwgxoJgmrET3bJskdajupkUBsvzfj4BvURtV58qr8ytadSt58NeKaiKbZ518pd3Q8MUncCRy",
  "key23": "527VUckdGgD43oEchN6jruN3fMqoeaGmWPUNgHhPaFgV5j4Y2J9wYiKqvSst72cLSTXbE7R18EBjktVgivikcT9k",
  "key24": "3fnwNAYSG6RVGXFefdAuGV4mH3Yiv6VVAGrDHoJtZS9rLWcrNusqD4JoudtDn8PKmppDnjau5ofZTjG2QzHYoE2z",
  "key25": "3u4qQEjr4zTXKJutfNsHaVLUaR2pJPRQTB2meetwsqYH7i9uufLqfSH7BAZDVW6TvwRackyEnhWKzfU7BrskZjdQ",
  "key26": "3BnF1psSQLjRuQc4a8N1xXunzM7rn67puW66YW3jhaRUhZL9Z65yrfg7hU7maEQaNoAH5srmFyabPQDiZWQbbEme",
  "key27": "5eJwhCVqhSSiWpo7sgEgGPKiMbypHcrDTeUS15DrtnB5hs7fdKMTLg9pnavwpjgFPBQZCZDHugjDqkSG7bE5kH5H",
  "key28": "4DKvTC3wEbQepCJkSBETPJRxFHNzn9erMgoeuMX5xgVkbZc86X3UgLZs61ZeniPMcUgbBeGzkAi1wG65Uq746737",
  "key29": "WBpJisDkshyPvGHDbm6nePvLidJtq8jR562KW1JonyrYHNeEczt5X5ZHCGZDWXouXPmqXBBuqjNi6PxdK4zq9mZ"
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
