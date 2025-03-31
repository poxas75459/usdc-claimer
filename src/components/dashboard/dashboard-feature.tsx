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
    "2ywXgjUvLBKVDnxJvuD5ZxCe6z5dYkyLr3rn6KaDDchDLiDnuJPVXX2z1yfWZZWbiRhx8SXx4Bhv8LKR2o28Skpc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9NCyxBbMKeBgA2RfP6UZZLYJuYpxs5TxxpHroQNy3wesaGDMjc9rZ3ThjCgv6uPYb9LfLGDsvKCgvaeAwkxxmnv",
  "key1": "2fPkGEgoV5q8TNZM5hvTDPKqMqVxP9SNG9vTd6XhhdEjGaHFmiaZ6mHXJuJSQB36vQJfR7nsM7jUViGEBqp2qYo7",
  "key2": "pcBL8ajcbWu91xryBUq8cTPEZAg5QVauz2igKh94GqPwzyYSFmFRjrubDzmykeLPQRiSTZi2D6r8ACHQjeoe9PD",
  "key3": "3AY6MNV6hFFeDFksaeTw8dvrJR42YJnzD6CUMyC9LA6gqyXNwoK3aak8dWPSMffTH8zVKfUKe7jwLieJzrERSHVZ",
  "key4": "5b5Tb6TNoaJkagQvWRbEs4S1TrTCJYZhFnZD1AZWNZaFBDgwTAdMmb3mT3wANifcMKv8SSCQ6HqPK5BJuJ759FQ7",
  "key5": "2i6yzr13MmggeXozk1xbG7Kp7RHwoYgiC2TABBeyy9jqEytc7YSBtdKgrzCsLnFSCNxLUUzPJYd81ndj3NGbyJtS",
  "key6": "29w9QV2iLj24eo2vabvx8xkxpPBDwEn45oLcobbjNnZ2vDLorwVVzXonzYJ19Qez6zFQiZP9VGqdjM4MUyukSQJ1",
  "key7": "4c4aWDNN6Gk7S7Ha44YJr6Sgto45PKYGpa4R5bWW65cj9NGz87HDuoLS8aHgfA7spYmAvQXdjGRvq2ZjoEqUVARc",
  "key8": "594DaHPhK3mGZnaYJ2WYZ3rQHtfusFF1xk9fqZp9KPTcaGnrEwpn21kbxLyjPp9xgfCM523Jvzae8asWB2iqFYoV",
  "key9": "34n2HF6Udyh2kuL862ZrmnwAJpfgng9FypAsrtRhxUh2bcKz8WFEctQuqRp2MjhwSNcbNTQL8Q1Z5dExL3KeX1JT",
  "key10": "5r9sdw9ER1VcujKx5qdNjr1VNgEo3Y7zH4uqEQT6XRi3F4FwaHA1CN6KXQXmM6vrMhT7ntBMPpQwp6rV68d24arB",
  "key11": "3ycfEHFFiL2oDLaiPeL6ndxs8mcoc2fbJ7KjafTmu1Wosmx8tmU5FXxB73fcx4oWTwG1FkJrSkPWFacwPnVynpo3",
  "key12": "4EHLeZZdjf2qNp3Do9Xzokqq7tMAce4JW2vM9k8X34hRgxPX8CnDNbZjqYkAMS5pGZiNUd9Sf7jB8GfCDVErtohm",
  "key13": "5eQodBt2ZnZAVrUJgAvHLqEJNnkkNZ9FeqQ7AgYT8pV2CRnquzerF82zFsmfcNpEqA316k3ZvmHdqyWSarwpgcvS",
  "key14": "2bqGycu1nsj41zzv9nfA4fLkZuuQxFQcvsc9fA4sNTSmQicNYVL5JmHaaqScKBdcgkwx6vmurzacxPTUXC9PbSQJ",
  "key15": "2uS31q5Zt8Ro6my7PGti8jejxhwLZHB8NrwXoFRFsdxibUD8DTQ8J4ALG3cE3r2wrtphpih9wnh1SddMjb3E5wGR",
  "key16": "3CYpCS1u1AV68o5nWpvhKQPYx1TqVwxxkZjXi5QoB3ksuzfhi2Fqb6xcrHAnNsTtgweBRJVi9NBAJj1N8dVpWZiW",
  "key17": "2eatyCfPCrYyskJpYgjUBneBsyXeSGL4Mm2KE6HLTMt1F5t2krKL54vJ48gekxoTvN34cXvf4h7hNboVmcPFogjv",
  "key18": "27ZHbcPzgF384qvCKFvN9dg9YWdprHuMckfx4Pw79fSyuWjEX7M5TAuyJLsDFDmtjG6U2XNDcB6shrNi5YJKq5zK",
  "key19": "LV2h46tvPt29YnNEspHS5vG7QgbX8tHo2PBBUCZE7f9agSQr4sZTBeSmvb58kVVGakcQmpeAC9RLyWCofQD9V4P",
  "key20": "2vhzFRQwf1DnAd3e6xKZFkYE3UkXq2j4FbyPsCRBF5kuBKsFWZukqqVWes4cDry1oF7YGjNoSYH4S1XwP8wSUAGv",
  "key21": "KPtqAeTUz1eTyRxo9FVDkZ2kHbvLBiseBXeUWQEPLKVFq13GC5tzn5Pe4NZMcNxQCYzfskdnK7unHNNLKtPgCpM",
  "key22": "2iDFHMLvwJJ1KXpt3RsM52mDEbxwAhT1PZHCAgtF8tW3GvotHNC2SbSTn2JSZ3q8f5MmMDyDcoT4yG7Jc96hDxJc",
  "key23": "3fxa2UnVF1bAZYbze3LjQK4n5WBdfdVXjC4z3phyQDgkk2JAVxMbRwkiN62iNbrNn6PB9GFYYkquvQgoWJKBSYWd",
  "key24": "2hqcJouqFLuJEMKiKLFomN3AVBV6b11cYxuWQT7w8BRoH5GAutqyEXeJta2sEfhHS5ZAvposcqu4ZaGaUDm6PbMH",
  "key25": "2enWuoAjZ75pvf5UAx3hGxoQfcgWnDgwJ75B1pDrRW9ujnakt6Bey2Jp1t8JQzZqj6QBrTbvdg2SZKTQ7h3q9Low",
  "key26": "4iBujcrNahepyqRzKnndBK8gvoHHKhPE3P2ZcV9tvD5NpBi9a17XLbGNtPm43TBWsJs5VCaQKzwAcSUewAtpNcUN",
  "key27": "2rHUTUqiPYUUjrxjkPpCeEQqFdWibr53968GxVcM98L1LU5jQsn73K5Sdec3cEk3VKJQbezsws19hh4jvZvqQq2F",
  "key28": "3soaFN8GZPJbysF3F95zQDa8w4hCCTF9cVwyKQbMSpLsHJ6B2dfCBfFcAfryUooNcNREV2tSiacf1MDYzqu8kWge",
  "key29": "wzPTV8mzpSLuxPRgyTpzASmhhKtViJh1wYXdg6vVCxpU7NAuAJrJEoigrByQGShbRHjZT9zar1Mm3PmrXtjcasv",
  "key30": "3ohMKNNNHjw9FS7Yq4TTnTyxq9SZbBLSxX4o9Vg42KeeKEgthKNSsH8gQQDKJBzTR4gdVy15it8ueWStEBSzYQ8",
  "key31": "4h2gVhHNNmUrfS4ebTjC1qyyF3bpsfzUjVbXDEnr5KsUo9JQ2zGpdAugXaPJxS7f8Q8PmQAu4MW3CgAuZ8RBUdWb",
  "key32": "3V6K49MVhua1pHCWM8tQCHm5ExqJGG562NDTi1yNnaeT8yRXvcKkggZDX4FtatKimyREWMnXfdY7D3gzgKeeP6Kv",
  "key33": "2Q3n5dBxvkGuKtcsgQEL8dp9pFvDoyrkEPzrsQcifMzQdf9NTwtnv8EezfudJYP6vp1Wam3RCiKcKNXasyKxg17v",
  "key34": "kqZWzzLP4qDshQ7YmNNnbfogQj4Ma93Yt8zWLbMhtRQ7EsZ6hutXT2RzWLdj2YtYhHudaTCFn4tAjJpJK4Jxz5X",
  "key35": "2mTK7er3vYRBKZZWZMn61kHBnQx9TfuV6rbKMMgdBvwxmSgrGVid8DL2vjM9MaZLbxXegiss9tbWfJZTgafJynwZ",
  "key36": "FyyLgczhPqFMx74ojZ9T8oaoyHkdGVbyhbx4zYtYFb1oLn5ef5aXUwFVnxesvP56XoNP3e1RHt16CTU8AmuoRSV",
  "key37": "KZNyvJ8XLibF827VNNHGX9HCHUR2DZkVvxgP9RBQ8w3WNUS2runVNt3RU317yUg6NtXgUkMRGuRFDsTmMrGqNXu",
  "key38": "26aVtAMdcYR4fcVepzTRNpnuSBo8jw7Z5FGwxWvHvNdNe3RkKYeZPhJvstuyhJ3vm535zG4mfQQbtJBzTyGGLs7Q",
  "key39": "2VZ8hJSirFzkhLzchGLASrSQZ4VF7kCr7woN6tNMEniYZoW65VxeAyyYupxH7Bx3a97egjJRZd8keUNoqw4rqnA6",
  "key40": "4eKKEEkiqdoJGtut2Hkruw8dnUdXwhYy6Eb5thgNpfzgmGYM3ia332Y7vQSzzH2HkMEyGMHRMeNQyFW3Lkb4cmgB",
  "key41": "5rwBtFSJQ8DzA1c5uVuomPVXQuGfHgJXmzAkDRuDkKQBk7rZqyaYCvDNdKyRrc8t3Pohp7zdP7rboFFjHQuHXPW6"
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
