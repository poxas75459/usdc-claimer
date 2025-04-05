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
    "3feqmfNHkx5Erqv4TeABFYSQZf44zRx6FvKu73FjCL8qsrtC8yxNsfC9E4XeAuQcw8YgWFuDb6JM2PpxfZuxs8oq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EPchEoPXvTuKA57J3bRav6Z9Pnm6BXYjXBcTnuGALNKARAVTdzNmGXtpEv92CUNXaeZzJZBHovrhkkNZTrKJHVL",
  "key1": "2czv5gn3EuvpdBP8gnBNZqgVJ7Q7P8LWQTkjyj3oLWcT37KgDExWnpt4mx3wT9aGRieGrCFBSnfSd6qobCnquKxd",
  "key2": "cW23yM77wJX21DTC7JmPp1xjNGfZTygsDEoAKEEtNge97oLHBFbYuki5LdhE1L3rd24gyxMyvjBrw3KSA1hxReS",
  "key3": "2j7MNbFD9yNpZrmqdYmnkoGr8muMzX1yqncidpv4v3g16BbEtnkYgYm7BKGpTjxAgziTsRfGWRBejHkccY37k7tt",
  "key4": "37hy3vPxqQrcnXfUBtN38dWMNEK5RxxjHuR8GVqd2mo3ocYX4Qwov6Pfs1RdtfMeaFZevW3Y5H4KHu7jBNwdik2T",
  "key5": "dSfgqp2BFnyLfxFYceUgu6KGNnW1zrwfaxpeCGySVHpYCBiP5iDuAPp5L8S4PC2PggqBYPwL1J3WXyC1rTHo3hj",
  "key6": "3GCdgh3KmvXh4CFdi9uZqMn8mjHhKDA5S1vYTH4EXJhgr2UX1odeKbcbvT62LgbPLt54RmzmMfDjNFqguqcYQSLr",
  "key7": "4gbHxty8JpMP1zwGLUbJa47Pmpg3B5jf6hUqZjgv8xorWkFXoYSUTRLdrrANSqzUqaYSvxwJEoGefDKp4Dr1mezZ",
  "key8": "5Aj2REV8t2oZUdNM8xhyr43T5bjWMuCr7h9GAcVzwHap9WqmuuksNVdsXrHMBh2hHxFTKAxjGGLn39TzSh2EjcTS",
  "key9": "3cUBJmRLRfPqpWTYPVYgzYWx4dGCZ6YkmpNcjyoqmWZxsrvpLRnXnSoof1F1UogShAcUFv8o2raCfJFgaiYYN2Gz",
  "key10": "2TEccPj92FN2NXy9K4yK8f6NMgyU4aQ13rdDQGznLdZZts3bT3qQVitpA66GAiCptVn8xCyS9kQ8y9Abo5d2FdWj",
  "key11": "66B954PaSPbto97xVUVjLPZ1RLofPuscc4pLu2dNeumWssrdeaDqmThHWAFaNPAp3qwbnj6fRng6rhp53u6zceVJ",
  "key12": "5bXCPPf5wTp3E9bE8veMogdsqU7Nci2qrvpb3cgSJvmQajKpyFQb9vF2FXyy8FZ6MyaZfWT4hyCfjmQYDz7EFrWi",
  "key13": "3a9y1f2VTex6ArPJdafYCwC43tCTWYSJMbgZH1goxvZsVFY92i7x4Dupry2PritEpVKSTXSaPqTpa7v1rnWNYQRA",
  "key14": "5Z1vyLiEE5a1DzrFZknz1Dw8GnQVzqFnJSYBRVVWx2sFFKcpDzJ22CrXziVThYPLgaB5QnvEX38dgopLvaTVbsJG",
  "key15": "4dRgGrArKxxaWp2Uke7GxUUctcQGmkRnnnsqKkdxSpt6A4SXXtrt87aVF8zcVWGEgFjLWnsDwp32BPPY3eFs5ytZ",
  "key16": "4BwMmNuhAXiVnbzAnx4wV3PmAXwJVxBhpqb5c96u9QQX5wNYs6ZyP7C1VgRLpyTjtSwXGbBhUi4bPSLLzciSrJg1",
  "key17": "MacypDc2HnzLLP3uFoF3RkK1g3niycbEK4TfbLt8gRd5vWJpaBV8TpGhhLWBGkCsyPPYfxaP5YRMia1vDuSj21S",
  "key18": "22EL7UoD4GXuvq2er3Arv5akS3yfGmRRHZGNViXeABcmBUzVBcvnjHM12PzcWDYcfJfL8PEVA8WQz2tBh8J2DWnB",
  "key19": "5JnMqJt8kay8Ay9svSp1nTvA2sqQa7hFrpyVvB4dkbq74CbonDJ3k574N3VqJ65NAY24HwqfQSbSimLtuBg1o4SC",
  "key20": "32yns3B88FUmQiuJ9QQhF1GAZRccdGVgABiPiXFKonoLW97Q9zbHyYBjFLrTQXCp4vGLBox191qXnbjz2pAMtNqa",
  "key21": "xYwjpzD12KGPnaoozddTuE7h6B2UyR6daQaxqQhMEpDSoZzDBgYQ4pLom6HFPvfZkewWgnrgDA11bgjhJUdjiKC",
  "key22": "21Rt8FQYE31Y77jGc6RSEjiCFCRhUnRvV6YJSbNinEEJT4oYqgUF1qqXZzvvStjBhQDExayVvhMi14kn9ZjBKqFU",
  "key23": "ZhdyhSiBwU3hcttdfuXCHu1qPN9kDgKJvUwYZUkVkFxMV5ybZWYjko1EXuFhuHL8FrHeNmBeRERuFHyeBuKrJFD",
  "key24": "5DSyF4G6V7mkxjb1zSoxjWKcwogwdkwKDdbWKpQExAjEQ4LwyBvwriRtzwRLpeub33QGry7tyqjjpaqmc83iU21w",
  "key25": "5Z8YZ4q2njLFP2UoeWRerEdyEgCdXtQHGvTKPMWVyQaK35PiN8LcMFbmfNWe3NH3n5qCfoQSUKVyRzQszCvEPS64",
  "key26": "3m31pnAQ4htqQqZwAKcb89fk57kGcBtiM6YPxtb8LCQTqfe2oFWWE5KZ4rMPE67wtmto8ndo3G9yduKsapSiJ9f1",
  "key27": "22oeenWcSUMHb8bms5JzmYFaEMhsYJXCxGkutdtv3HfGZtngHtpbhJvxqZwmWs8px1xMeMX52ntkFLTuatRGETTB",
  "key28": "5CsfTSiNNpFkn1Zf1nRjbzqkPt2FYZSbccRd6RgaB8JpFmuV8PSPjjTLkN6va2AcvhuJg61BQqJL8qV3857hQRMi",
  "key29": "4sFgZDJQXxE6rLb9sinfAKZnvjejdhbDB7Er6AodMXdCYzfvrsvSBc4xJ4FZbrWPpzBAEMe8XprjRh5svfYZTLKT",
  "key30": "43SMYAnErGLHXZUtuzS7PsZwiBBff6U6rWdjJz5iHACvgjhzKaLcxxTjQD9HzCAZyxkKs3KbVpvn6Qofk6cetT1z",
  "key31": "4Xw5sW3DTYdhRFpmTZXYNqkrf3jF9qLzNok3Yn8juJRHx7hxeBBjpbPNqTijwsoMnBhrZNNDmEiZZbGREGZYB4h8",
  "key32": "4hvbt1zPZic8MQptbeNemqG2BXYvEV7uDHudWej8CziHAaNVdzNExiijk1fZNFmZZjj36YMmSY7wvTEeVkUCLncK"
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
