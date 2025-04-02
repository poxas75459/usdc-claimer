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
    "UbvZWxSgHiz86mydg479hW5cf7N3epJivpWBanYQhH1yrHU2txVmN8iRBXnLNDJ15samGoYasCQKRJzmcLWkgR2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3795AemvqGWjJxzvCKb7r8nWqG8a2roDtDbhVoWWoLgHtvxv846BeHBXvxwaVU5asv2CHiFNVeLYYe8kVhMrxreX",
  "key1": "4W627LE8WwYbTeWC6gGBE4Js9bfzzPHeSZakNqtFzn3xumvUhB7QJzUUJLVPxnqTrQAv6XX9DMF1Ysb3ZBYhvFm5",
  "key2": "5W1BcQv3V2JtH1TuiSRk9beKP113PJXRTFJwZ7dZDrJP85paTnXArKXm5jJmfTdWqbg3vQ3aZJhnahu2VGVpWTFz",
  "key3": "2duuPe8824wPAJo8rpFSm7r2jdwdq4fK3koscu8WiVgGpWc2GhVD6fkH2Wfvb3fAxVJLWQh4myFdLDDCstyc8Q57",
  "key4": "4Vb7iCjrPb8zJXLHe9wUNiBVbSWzZ6JUNYXyUNmmbTasoQCQhaDWhGUUKzhpRb1oJiZuKaWVWg7pnAGW7Ffm4MFc",
  "key5": "3Mzeo6HhKQgTnqNhhEcXr7B4SdToW8zYkZ81VT7UxEd4ePigFJ1daZ9pKtxvkjtyK1HsGTnMrrm1VTaTiDUA6zqo",
  "key6": "4DFp8kMFmQoWedcBo7h4SGgKKakR6xetmVS2rkgM7mseyPT9UQk5xWQRyXaAqpRgp4Nx7DEBh5Zh9rCkm2yWtmGM",
  "key7": "TSbEFjNxmMpKV8pbCCYtJe8noaPinNht65o5B1rdQ6CshH7Z3YUnGv5vP6HVk6qQxhPjbWQzHiXaedffY3Hzdiy",
  "key8": "2BZpuYHpnhB4mHjSRyJDnPzFNAjwkVy7RaqyzuHVCF63PgKknoCciSqyaDJuUrGKe4zX1XNsDSBuKjDeB7oSWRdr",
  "key9": "2m2PjTBxTSreddyRErhmeveSFp8QNzKnTzrB3cScz4aFEgkX4d3k5viHU6VppHGDfxFqF2HQQktM2JWjxbks8CEg",
  "key10": "2gjMZyDga1cTkuhLMzdYb4fXhb1FBDikYYAfSnfArnjR8gwA1viySLmYjAuj8WGLsCXE3E8o5dPskhYsLjrs8WyV",
  "key11": "4iR1BSK6kKFNc6AaZR3uAZPP7PZpko868rkXTA6dxirbnPtQgf8a3xYDJTkr8bx5ZBotDTgLeAcry6bvVAebAmhx",
  "key12": "nmeso9PUJetgXMMhERPhj5N8QLvQtuUCwf8fKMQFrdXnN7HDcAZZkbUTk5XL9eQo7EzpSjuWKTQ2Go3dy1W6a9w",
  "key13": "5ofXG54YLVusBL15jsN2Cd7Zmo5XHzqYwDUG74vfjQjKb25gDn1zwFBE3KBArqLRGTbmXTXPd1vLLiBoxzPM7ZMr",
  "key14": "5oa94WT3x9EnGbWGW1oSTP7C49UmnYNTxjQ8Eei62GykxijoZbkv28mHwhYFm9pxM8vYAFRJ1PjvsZKBnDzefG8B",
  "key15": "3owxtdEywYzQtKs8bcohyv3vbqdYDJrgiuatfW3jmzXDJgpZzCfsTUXKuuT3yEsJBVY9rLhQG6sHParw8wW4fjYC",
  "key16": "3cTTT497UjVyGPMJ8x8t8jMGWpkSzvejmjvJaJ4aQ5G1AEPeJGcJkMKZdvbUZLLQZYaFmaupF8CmFKNrRwxndYWy",
  "key17": "2V1dSMawJArBEiuyc8VXGNA2ZN295VWBERZ9MWwdZGMDRrA1ULC6uctztEUTKH6nAeRqmtxBtcWHNTTavyDRVcNn",
  "key18": "5peZ21dAtv72p9128N32GU41wR25npb3seNcAKEC2YiY3FY4zjbveJyEe71yKtZz5YrE5HDKAbtsD3pf1WPNTjZ5",
  "key19": "44uvKMGyQSf4TtZbzE7FnCZXkLVFFrhfAW6k1M44wLv2sGq4u9GPDb4Q8yqS4CJwx6izCvEgLAnpvTjrUaFBwcjP",
  "key20": "3DxQ5MAQvndCL2pGy9MKC8pDsa4exwq3xawF66QwUUVEBq5NpT9qiQ5SktbcX3om12XbmmJjVBdCu5XJqFfVBHUT",
  "key21": "3kDWDrhYqAyRt8K7N9xvoCSd9nPnzBV2pSjVsHu2bLhNqeRi9N4bUGfHMXUTte5HN7tFi9xEpcEpoX8uZZjD5Prx",
  "key22": "44CyT2dnG4wFg3wtuFSa8rwDMuLNMa5ppKtXMniAStoFhwC33mRG8DvfDgGEjDdyj5u15i1sdg5jQzpx2BuRZkc2",
  "key23": "LvFymkpkXCMtFyoH7rUPqGEfQL5MtiegftcWdV7xN1BU7mCnyGVe4yVr8UwtqJ3qXmoKbm1h4pX3G934uv1qVaz",
  "key24": "4dHgNPKYCJXmYYf74WGoSgVxYjaPoGtmStD5Jya8z9P5LMiqAijyaDLiaTZMkcKEchfFf535DdzQ5vQTfr1KfFz4",
  "key25": "2F5EfwjuC4972Udkum8wHZyC2KzFkaekkpgmXizahFee3Hbeoaj2s9ZUkzrqCtcWrLYCHPJcy6TrPLEu3EAHSiCV",
  "key26": "4gMofuBTFWDeKjyLuLu9rPkJLFwMym3NicAGcpYFRyBDfTdB2xNhvM2qLPZo9uFMqEc5AtXZwK6KcGSA2iyu7GJR",
  "key27": "2SwgcWH3W9Y5uXsaY3Prb1kydTfpxwvPpGcDu6T2CSgMd4ZquVy62f7m8pRm9i1BoQVh4wSznpNmoK31Z45UvuES",
  "key28": "4CPaM8e69LTDCkchci7ajohv62UP4S3xPkLyJJEPN3SnRTcv3qum7bQAvhwjtgRdHw65Hesf1TyEByk6qz1DVq8N",
  "key29": "X8Woan6cJYS3o1oR1Q1zeYfm4GHSVEvHLs3aoB8XbB8ryCrGuvotNxDkHGGpYAtfQCNGUfzk9xi8sGkdbPVPH1j",
  "key30": "5rtFKDUhvaRxcFB8Upp9af1PkphHbYBjQ7dE5i5a2vrh1146DvbvijBsQjcYRqHVwvJHKyE9HX2cKnUch7gedGzi",
  "key31": "63xVGQhUnj9RNmqr1SmiqoGQoNtStWovCrDv3GB9LE8k5Pfbu6MgPeYpY7NH6px3bVLgpp67N2xk6zURjrBFJDhH",
  "key32": "EX5aZ6q93ko1nWsF4g86kNHmHiFx8LYzyceSmDhjRQge8pksCC81pkuJ7zV1dxfVNNfbdrWVDizPxFaJGoU9a9C",
  "key33": "NzjWnUyG2tcgDFWoH8yg9PZosWzVEscamrU7o6pcym9SoK1Fm7Rivsgkj9X8Vcru4RMcccBpJB2UX2GzqpWTr6v",
  "key34": "3HCuteBcENLmQp7kBeT9Ud6SwV4YBLF5dh9g8gvAJjH9dgXFaXDnnHKYvqwECNQSe78mqEeSJk7khP2XttvHrjCa",
  "key35": "31W5p81yxpJiXydWamFDRL5eAXsNNVgZwc2cU9PUUpvyfar6F5rD3g6YqskVX3zkiNFZx2B4Lnxc1D5zwWUwp4h7",
  "key36": "3B5fU3sZqo6QRjbHC96S5UjDhxcyuyboYfpBnNWAQmhJVvFCUcsCzrBfzn741mc7R7ZGSaJ69NFZeYeRoH4b3Y1U",
  "key37": "3Arxn4p3SBm5ydpVUwW58QGo6RDgaKzCKVYkRbFLJYEFB7XJePTQ9iqTCvctgogi2823QhXYj3EXCLQTZkwC6qM7",
  "key38": "43SGSbKQ3JwQjB9WwWjNhjjo2XioYPMKHuxS2JUrtjEiZrkjiWGFnBJ4h2LvjiCHbBaSiz85JQgJDDN6eqDm4nnA",
  "key39": "oxXu8pSEvxK4KULZcBB4kmaz8ayyR6xgZhdMNbigW9VuwHJ7bpY9sgu5mdHSQdJaopfQ9LrduxmymBAGCayz7Nd",
  "key40": "Mbtzr6TY1fKHuBHGwDS3pabBYJKvnqtZmjquuKLULaaerJ2ZfqgsQfxyEPiBbi9LhVnF61RB9cK8Ldxe1mZTqpj",
  "key41": "3ChLNqy4pVzTXsT2qVh9uFCGi4kpTbWnP5YcBSnBC7rF1TBKVR9va5ZRYaYBwPG7bgNznaHiFuRbvKcdfk3MuRrb",
  "key42": "RFa5UUzBHgNSP8KxtkpoDLnuAxTWdzexyyyYVPUxPUSHuasuX8nufA88XH89r8Aimj5PmAWHktubKapz1Vfyf2N",
  "key43": "3GRp64BpH2z5bHTYb4is9EcAeTayATPfv223XhS5v62gsw7YxaD79MjRTj6geo4Ert4zAG9uU62nurdefMqoh1nY",
  "key44": "yQym5cpTDMC9BGCRLPnvcSMjW5mRAkeZGqU9eZzmCNHFqN6kX8oCHtTrP2esm2sKtmzd5SwBnK6exEMFkBFr1yS",
  "key45": "R3FQham7HSdZUNN3xvMFXG1eQVjqtPHL6v7MvNv5q76QXEhRK1RgtR8tbu3ajNwgvaZZNwrbgNbMefUnWFvoKRV",
  "key46": "53dtgXcV3C4ooBksYGm4sUY7dcov3gxgjZ27SvVYbSwdyw57bR4Q8q7cK6xst3XZP6hYWrEvJ4npkkJwh7j8HfuJ",
  "key47": "2XGyDoZyJFiDZb2a5Ptaj3P3eBuR1UFATvVAHmZ8WvEvgPs5sVpGvqWypjPcVqpbTvkY5hSL7LjRtPgqZoYBHfiq",
  "key48": "uMDXjfguDtKPzUZWVtFxLvcHi7tgzsSENUasvLJKg4cAxsE8hbgDgRrHvy5Ma2tt3Yy9ir7d2Ke5GtJj1Zb4vkx",
  "key49": "LdKkJuoduDrAzShzSW2uuvmbpF9kzRwXZXzFCGJAZ1D8qFjGUw62768pgxHyDi4cubtKyoKvCeSAGiJHKndpiBi"
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
