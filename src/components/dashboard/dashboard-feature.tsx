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
    "5jZ8DDGp2ByWbRfPHW3GP3TJM2P9cVzuvfXoKXpZuFarzawcWc6BGJmxGPhKh5FpCeLfGsjK995KLXacrojndoBA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Nk4KFBk5hwowPcxve1rYG4kcqTq1RD8SppNkJK5EivKNrBYxj3oKgEe6TaBjxboaPZ44c3rfnK7rzzYNGY1vfQA",
  "key1": "4hGSRPyuqEs3vXRrDXrYNNAu9kmb2w2TZGLi3WFX8mm1oTKYfSAvkj1f5pkQjMbLpUqpNwBECnwtuNCERCeGBwt8",
  "key2": "5kkpak98Bi2H7duTijeUHTZ7Qu5qMz1CSaELpBkC1tidAQN9vzZDbMhQJgimbRMW1Qr5V572AaNFarvBGWcwmR16",
  "key3": "UGwKk9NKCmmWJ9QV6aybXqqWNijnXtQafB6sfxN8QVEw4j3CJif81VjQPYbUbefB6TNGqAKYWUL8a7bkne5WSPP",
  "key4": "5DEsEKKpTiAtCGkJ2cq7YWiQB2hYN37iQAGfqP1EULrYk7mXVob8M7uCBNTiezM2tpkdbdsWq8w2kE9yL8C6mjma",
  "key5": "8bQMHjYW2djz3c4bPysZuQJVPkYsmgCtvWXAK6mHFmutETLBSzQpYENTHZmwB32ZXVTekQ7YPn4odi2xCiJdpTe",
  "key6": "46qHwJsoyq6zkHqYGJKFL9Ayfkrar1dZ3zbLcP4qq3zgY6W5ioL2eNzX1yGKDNXRgBbuc74eQErSP7TKrG3LQMK9",
  "key7": "36TmJh4XsN7ZPqVpZXxBQbTR5GTa1r7LhTA2FVKV6T5uGUHXr1YvhVGDt6AYkRdmA2eD3suD4vLmQgkMEdbgiuBq",
  "key8": "5BcWC7TbTmhTQUjKsVqmjg16s9VifiZzBSV2yj17nkUHhYtBePCSX3SBnwFhegsBGu2T5aERwgQvCuVzJvZG6Hct",
  "key9": "61zLCM5fg75rz6ru8kcda28z1RZsKowW8sTvjMfYGByYGCsK9m2GG5eZyp4fSXDfx5Y9i877b6PgDZUfeT7ReMKG",
  "key10": "38vpgTNkyV5nexm2WBf1uyxu3XWKPzGqhKYowgpSd1AFPmQFuBSHm8dB4et6QHaide2Qbc4BCNXf1W1AjsLVo8b2",
  "key11": "DAZ6skRpH8PrMWujGiuiqLYTCKMExaRGxJFZ6adb2ozXB1irNBUQ6LEn8aKC6Tcv7Mo7mnEiCFwcRzKxZGi5qf3",
  "key12": "3wYq2uVN8MLqwJNzyS6vEV5JAddgQh5TpMoJXRKVSnc4ihYVLEXKcYU1RYs9HB36vGiveRtPJwAX7qktNGzAKyXe",
  "key13": "5wKLFaWnHcn934MF6N9SdJxNXTTmEdvDHNaq3XePhcEjKy67CzkzXx4UGGyBfNpbyRUt8Kc5Y6phVvcoTqpMMeAx",
  "key14": "4wheeiFqFpXCKkFV5JdtK87aH7PxN5dG1vD58hZMBC3GjLWYquBmkmUoCx3p8byUXeg4QYMhshSKbyYsmf7m39pK",
  "key15": "46cTKP586JCavTuPrtwLmunD7Nht9gjeCNa1fBMjFyEYGzW8L94hXSXycrgJ279Crk5HStziPucRAvRmpqE9Qs3a",
  "key16": "4HT9BacB7VLRmByWT8VNjLFkfX9feky4ise6oHQqQzDNWkUC4mDE1SP6icb3y5DrBYSPkgYSwcecRkxgwDyjNHNm",
  "key17": "3hNwjn8PNk6AzdpjKFZctgH8pLsRnu9GqKCdk2B1oCzDcSVw1aCX7uNXAQsZ45cmbiwMVx7TR3oFDq4gd9YubyCd",
  "key18": "YciGwWDNL9ig8fAvKBx4Q8DM4kFJQWr2XBYvDfctPUsu1da7kmfKTArRqB7Cof6AC4ZcEMWtZQXrhpDhW6MDn76",
  "key19": "jH6MWZyyxq7C4PaYyGRm9ZeKpzDu2ZSwEzHyJ5Vs5SnLChckDbEPxonCzT46DhjxKbWooH2rd2hgLdDEqP9XTxQ",
  "key20": "3Lk8jfS733yX3VqREoViic65ZiNM9AcuZHC3VGr5vw5WCkpxatY4Ridn7epzMDGKigpRksrNttQm2hUDiAudq1jy",
  "key21": "6TYMPNp5GuJxQFDhtNMincEgSteHSHoD3opBazxAeb2wRUpfJYQmg2CHpRF2eADBPDFkEyqeL7MD5WnFea5vLWA",
  "key22": "5abaPJg2tEYx9XBc1iT3TNgL6Dj83skGgZJTQBiUh7SfVjrJTFhRzF4cjn7hYoMMGRfJXCYMdwReEU9qXYt8tHBh",
  "key23": "2p7EDfy9ZbFNRvNDQEhTySCZPnoZEQcw6mnrRJwdanBizVFe1VbGPCoRgZbR4yyuLMAe6QSEiyHo5qb5FuuSN4QF",
  "key24": "5CXh7xANPsmjPs6Su3tBL8vC4K6Nu9qAipoa4N5a88bxZDmCjag75bnmenrFyNXXQF8EjwHPm6Qwyvof611Qq3mb",
  "key25": "2Y9a9sygcVNb3nFseUmtT1AFuVpS5LpFu8WTWvswzaEQNDdJnnUU9WZFAh1LJty5dFWWzZGrCK3aF9TB4qM5Edii",
  "key26": "2dey9VVD4mYaisvSZY1kZZsay8E7zcYw354JVUYHDLBYXtQYMv51z9rsUA2p3MyPbN9rJEmw6tCjxnSRwfFVWRbJ",
  "key27": "2azf8foJdWkDCZ2q7C5MtbK5RMi7nUQLe8Qj5qGtyLzhUvSXrfxY6A9H4aGcwTU7YogZNw9FgEcJ1T9VRm9heoBV",
  "key28": "4arkq3oKcFpLSR85Q4dHKqo5Tm6koi1gtrT6nVpHPoLjtDJTe5cveXLXz8FSFdi4TABoebE5BsJtdD72FCc2n26j",
  "key29": "uJFQGyf7b9vdyiCYnk86SzMtp9nY7ou9uCCAFjV5a5eXi6AMJyMmqRZtt5Uf8ECphUvrH79qcyecU8L4pZeGouB",
  "key30": "5rzRvQHyjxEZd7UpdTsneobzFecx5t5WnXdC4AFjx6N1geW632ARiNe4o4NjqaBW7A8GgycWjUR7US8oLpNf3nQW",
  "key31": "5XnTjgyoWCmb1smR2VUPwjJ477MWDukGmQWgQUFhj1icZix4s1KCEDGvKg2f4cyWm2hLmzmfrzrJrwqN7TahqkfB",
  "key32": "2X21ktt7esDwEb2qPMLzxUeVVRT7g5VZozjeDguLgZU66PzcAdxbUHzsgEEYqWM2J7qM1iivuogXxtXfocPVZhL6",
  "key33": "7emp2U4baBCugeuGJiVctmDRc93DoAnbpvQqQ6N2bXgVnWHq2xxvmMRp6yjJVVBLvc8g6GCXDRZtbPxgp97Dob1",
  "key34": "4BsCL4JjDYLUvs9JrXM3cQWs1qoHY5XYbrw9i2WZtUMWtmsckPqXZ2GqxxzTufgr9cWDzFm3N78GDzGToPvvmYm5",
  "key35": "2g4HD8cn3ZMueG86ivSjUyDV4LjKoL1z8spFiyrirjU89Lb39bF7ErZhd6tXqTCHrDgwSsos1mr3hQUK9pWQbA74",
  "key36": "4aTGRvb1VHDAcmoZYFoh1nsBeSmQxtbmE7HBhLKnUVSz4kpRV6KxXSHEJTBDoHNgrr4FmnZYYs6Xoxv2ADnEu6aF",
  "key37": "3WXrAuXdoYQuxSAaUx4pc8jN22yjYf1rQZvFsN9nBm7LpAR8WowQu1UVKQQMoZ1TT48vvMDjEbpfQDSQDjX9CGs4",
  "key38": "27G5nEJy8MfS1mG8up1drj5r5EchvpKbu8VJ5nJ1mvQfo7XKEwSkyneE2GQUcxQaWpG93NRGC7C1EAxW9aK9YzAv",
  "key39": "5uGM4Ciw6JVg3BzqfDLDMzRg1WGTFB56CeCQUw8YQTDSWL6CeYhLWKKNgordcCTjDm9RyjaX8zggfyLbSqSskEyB",
  "key40": "4LJA8nbmSjcKdBSK641E9xXCmZBvKaEV5pJBurdUdQ2CjAPxeAjSt4v5Z3F4Qbt5Ab9KG6JMRLmsELrzH78shQMN"
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
