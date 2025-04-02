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
    "4yP1TXAxqYwmNmXkgWDyWY1r1Z3pfk5R2s4BrrxmEuHhAbckeKiAUZjGBNpsu3km1MJg48u2op2F4Zbooe1m4asi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jtBh4tNZR9hByo1xUhqR4hBtarQ5HFCUJhzQuG3deqXQS3teqGYRc4f6zRP2GrnMMdyMC22s36qwSCV4D1Bijo7",
  "key1": "5HzLpcKYtARanVL7HRjebaE9y5UhA42UuTkxgRWphzjXS95WLY7pxCKXdBX2foJ8fcRX36z6Bg8hUuBdbjcoyC6X",
  "key2": "27dP3nsYynAVcq4NZNA12or1nDCvGNVtBdrFhYjMjv73rCn6D1z3z9gxaSvgQGJSeCWMbHieRofDY4JndthFqbi2",
  "key3": "2XPwkNGfbkyfD1eZrAV6nbBRo9fpc5RfXo8uwWuQ1vP9QgcwkHcLTY1upNcsPmCo5dzEUfGjiLgY1kMRwVKa2z9n",
  "key4": "3FhDybPiH2vD235VPurRPyUS1oW8bsDmbjiUvQ4L2gEQm453EA3gD52bL2mvDrEp4UW2fKgydy7skpyKrANh7NAc",
  "key5": "2CC62D5wGoFFAKxM84yDbV4NdZUmG1sHHvdsE1wYgqRCQ3wzW3sHxE1P575Jp4QTLWg2yVN3ZHpBFzAFxYS6pRtj",
  "key6": "3MdRvZnKbEFD6QG5wsD6NuSjw4XdrWcbdso3TJZMz9F1EPqEsqmwQ2h5gxQzzw2CQyVhS2vfxaPL6wMJvw2fp7bA",
  "key7": "NSRmTboztGaj4gM9sERUFWdkJo2tmijuANFXPHt4ABmc2QHFexMUYJDvDRtx943fMCETCbDLKajfCnCWrTKx3rY",
  "key8": "3cvoohi1UzVmRp6uync9QkeUbQ3bRsUfXakABtS88nYiC7PqMaNR1csUvUEGC8hpvFTtruBRiU1aCfi1G1Wuk8Ux",
  "key9": "3mNm4nbkDtaTdV5iv4St7RXjiVZcTtRSSDAwHeX1dkrPxrGpmGdwCChEybS85817kHwNzhSWjaLvkdvw6yRmoaz3",
  "key10": "2PahC6oeLBZNh5xVuM1Zk95xGHg6vr41qMYebXPNPrbh53CfQmGAxTs8tL5iE9MecjKh7dXdFeEYG4GnHqq5auSe",
  "key11": "2XgW4NQKVv5bDNF7UAzHEvZvcKBQM6tJUp3jpCCCztMuN1ERx3NR9eXbzS4hiiBuVfiJFsUPruV87AMRYqZYPDr6",
  "key12": "5KasmwrN8em9Xk9n7EEwVTKpEN61dsmjTAkwEw2VtDzHMpP8gMLiEqwtAezpzstsm5cvz5v3rhJn2sVxKiQkuQjT",
  "key13": "2z9ZXgNzdMAunnmm4NHKSUKRRZigqizeyz8tMD8GkBposQPs9e6tTutWre3nwASJxPNxpgKMAu2sbePJGKmoDA3a",
  "key14": "2n5AKH8gsUx81DeCutW7Sq6Ucf4EbnXpSSZeqDPcbrZFBSym3isrZz5bzT5Jp9zYxpvEM2YmoT9GEreZfExXiFg1",
  "key15": "4JGhfQWRWopxw8N77cQtZerdWn1BVyt3nR7aQdFUh63qw9ekTSJZzw8XtQSVA2nGKSJa3HUNPcjJ3cLneH6D55qA",
  "key16": "5Ezpr2iAcPuGtG8ayWAHpurxQ6nnAmTb1zzobx3ENh4PPtruzkBQn5RXFdp8s3wcjEuzRSZcjfjk7mP85KNzbfje",
  "key17": "3UtrSG99jdXswmkcECPJTLzsBQVnNzesv1NuE6BZ6WSPfDUmkSeGcgHG2m5TBNGrFx7jkGECjDbp5BUVRQJ7yaDL",
  "key18": "3KYkSKy1XPoZFDuJxrSUGE2EqWHU4dPLJUjgBaDv9SWpbmU9AF1H1qPU2NEpga4Q7g9YTeAYxvXMtT9U1aeTNqgD",
  "key19": "5DdRYqijnwb2v8iNGzvdMPZmh3s553hq8f3M792go5gALdKQBTr8awf2vAvE3GxfJL2sdUCzkZd9MbALf4ePawff",
  "key20": "4uKZzrN228atCG6RYDSWuH2LxKxWNPf4nsL3oUrc6rfcBWjBMGpiFvFF1fLmaFuiBdCnrzVXmNxzMFmDM1vt5ZAB",
  "key21": "2rzenh2xXL5yciVPnqrcBsLgpbX7x37E5Hm5BFm7vZBKsQ3kxPTiy2gnPRRxK29LDJdvHMrjz1aHFqQrTq2t3Ppk",
  "key22": "44AtbRn6op1YDWtfcVuBp28i6VEsoaNxxRBVKGTWqoU4LJNMd12hAfP6gqeFiFjmXtqh9ZWN8opfRKeF7Ld9Nv8C",
  "key23": "4Yy4wGzcJHYDYFqkjM6ALc8pQobRP5qXB9MFpSYbEb2hzyFad3yGKiMhKzrFALQCmKbcfEvWpvVpub8sXmuSLwSp",
  "key24": "37sF9DiijJWyiygniCSkBMvwjnoRBT1WUGMbYcBLStuDZNbvqaRx9trt3uJWmUm6Voh1XGJMxhE5GcTFXV7kgonS",
  "key25": "5jJ4Q4F5gBV5duvfZ2A8WAMQjMawNdX5n5a2ZFEGXAMtHxtc1XnmPNf2CEH7z4jfTAno9QmMPSWSuPJmMvsJe2eB",
  "key26": "5t1L7i57HiApbBnVUBg1UGSiRS6Smk1EE6RWtSLhpWrPiiDwQ8vs8vAhTvf1mtXh11zWaSxTVKmiYuPnrGWMmKGJ",
  "key27": "4E9qAc2Hy9YYRkvQnwjm5ncYqqfr43noWxN11puJLDpwKHM9843chf1JUPeVATRohdw5tmEqVawMVcw3LyGywxHz",
  "key28": "26TKnxmhb4rPb4F6Z7vhA9wGSamN79Jjvfg87UNh3Ww3fXHMZpzCJM9FijMNcuN8fZhPySpfnNUkANjsxcwzErnJ",
  "key29": "5oiYcKRHdWwKKGtWq9uWJWXfycDAAVqpxXi4ESRz9u7tx7zeLrVQiNBAhxAifhVFQP8qp5aBnDfANpM5HQqNnc8t",
  "key30": "DCxKSai71n2M8DTYAk4ih6bYAEhyfBVMEm8fpUjQvw2WV34V5ixKgrirq6My8owCq9nuvcuYbSWKmFocTZjAiBt",
  "key31": "2Ap9hvTRgGvGm7s6iYQ9NRy1nk9W5Z6yova9gG7DNwE5F52DCDn4dJcfqXuhTiEZrDsX6Uz7fZhsvUKaAxGX93d2",
  "key32": "4RDPAqJNE5FRNYJ2fRFvnsyqN6FhvvWxYAF9Vw2cHYxrQPT3k9PMqug42AMUoC3xorKCecuD3wPQfZmdMXYMdXGj",
  "key33": "5s6MkCKHdFVngdRqfZhJZrfw2Uc1vjcmxyzoD7QNnTRSM2JsHhqhkQMEYrUtn325UVgHi4WjJT89EQ4GRG2UsanS",
  "key34": "ZL7n3L9Ha2Jfohgb9fs43bXZRaiRkMZWFdVtTLh2MhwimsznnsHBguj462n16cKvHXHy3jDM8z3m9ihYCCfK4WC",
  "key35": "5wkNANxApFMe78RJpPAHTiNcdAxwrWpHHbYgvnhEEWipGJotgbYbTdsd4g9UMd4x9Yk7sLSCR8HRefmNzvBqcVQN",
  "key36": "22aNLbbi1XsSVhPY2inHN7hzgwAV1TgW6LVhRAyqWLHU3w9EHNhEh7XKmV8BM8TpFEar1qW8ukEhrwFxbnZw44NP",
  "key37": "4wosrpJpAHEza4dVrX8NvCh6Vy6S7LNH9wUtQxYW8oiQFaoNJ2gEQRYeBwtgZuktbLqZHUJCLpQDiCaT3XWdpehS",
  "key38": "5pNPLZGiFASdVu52Wr3srrzZqaDS6jWEazQ1s6mkixYXPTAnLbFK3faruWtyQYiYM8oE4CBcDb8nJ6nvB4euE7E9",
  "key39": "2CkXrQXKwwgLwkAt5oKKXfk3cmPtFebqKu4ymiwGGEz56BMW4ZHoMxr4cJ94wyFoXVp1qhDricrRsx9HPyYJcgRN",
  "key40": "4XE1euDzCD1skbPLmWYym2gP1A13MgJXfh54K2hdxAwc1fHAiVwXsrmhSGmA41a2rnZ9ckR66VevnwdosCgUzmi2",
  "key41": "24z69k2CvXpiKaFyW3i18LRL5j3akTTmHTjnqKNWoZHvtNGK4dpcWiMLfk4MEdx96KYwV95bFm8CjjGPEPUS5zgQ",
  "key42": "4EE4DJtvRkqis1NFGugPHT2XKfhVmPhrb5LpViNzN9y2gwa61gh5Yag32ztuQfsKe7kHQE6vQ1kz7v524FZBEDV7",
  "key43": "2WxDL9iLTEeJzY8fB7p5q4hPiSVGC9y3iWdhL2r9MKuWCn8nGMcxuQJqwUAQb5PDo5rW4qkr5d1VMXK91Zb81cbd",
  "key44": "38euo5u2MDKABvSLqzVNVxD9RUCEY1AubRQcNHQ9v8uz3RtzpK1eFTTHuSw5isfrrs5AF3P62aSjAC4jzaEmcoLN"
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
