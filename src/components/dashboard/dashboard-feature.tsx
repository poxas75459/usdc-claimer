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
    "44m64wjcc6GiXbFymKfDq7VL4QJENvevf4iBasDpUgvCM6DBcNF4qvagBv4CxoM9JzCdKgba1hwZeFkLs2U3kZ61"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yZsmrH7HHEjNtAvKPoW2yTtYuGm7BtZ2xWPcFKsPq2cv5Et1QxiJDWKkE3iy5BFajYYFms6ZMn5SSTV2q3gGYH7",
  "key1": "3gwt5M85Udq5akgva7vcuDfT3CeoQRACBQMFhQs434nHKRWQGfpbUAcZzhZdsR9znthZRqmcrqiw9fa7TxBAWwjt",
  "key2": "2YfFJNefe3qiTqyRqwq6wJU1Vr3a97kv3os3Kj8Z8ouQRiTqvVA11r1LEuzsdkPxWr1eVi6Q9wNYQBggKkwbyqmD",
  "key3": "2P2WXFRuwTGi6dPC5LcevWnmsgEeJiazWGmJu9CMhSKKuTZ1PyRHkxheCyUMkuDTwmeERsqLveW8wrrTKXNqZNar",
  "key4": "2tHxHsxMNBZU3WdjfcT8NnfGfFDqrNGTMcVFGnV6JxKNoQRiYsfVhaH2qAQoTjNUZphEoPgAUSfryLSHSLaa7EmQ",
  "key5": "3vDbwNQmDB4JYud1J1XyrWAL8AmkEkz8nAAFuuJL2UMTxbiHRYGpiEt3CMKF97vAkKdVhS72nyPeXxdMxBU2mpcr",
  "key6": "5Cm8SqvBoBPPxe8rLnJ2pDxaRvNW6SqV9BSy56UHxcKc3JrnpimbWTtmFqVBuRsNEdq31CMiTzTGXayYoiACbj2v",
  "key7": "4nUwctDVEwry8rQYLSSLzfG26NDhqFh1zJiB2AwnJ8CRUwVJVshzMa6FJtygQ7sT2kc7r7JgQVSLoCTMNr6CBqr2",
  "key8": "67iuuGyckCxjf7MgU9GcKZZF2ry8Rem7EAWWok2qQgj5Su4HAPNEgtnW5KkXmuREEEUVCaDBpkyVm7RBx6fFEr1Q",
  "key9": "4VaT2C2jTt8W4JC8uboXV7CgncNAyxsz4HkqwDavDQ3jD5FhH9dVSaLocf9PnY4y9YjEqBkWAmidgs94hvx8Athh",
  "key10": "4pA95xJzWpUq4TXgUPaVb8XhMMVAhNmW9EPVAz45qQRBHKZpSNcs7j5FBr16nKFBdWke1t3B75fRHt9yL9m6vDhh",
  "key11": "2q4wenHFabXeEtbBRFfp2hevBxAtUkpxrkmKkGvVZpJD22sh2KxAZJ3ALu8u2whZgzDwkPLEDbNqdARXFTGQ94tr",
  "key12": "HPWgCrrFP8KdAmQW3qgZzqHG3w8qpzJgdwojbxwUa7gkvLqDEwMS1nyetGHD7BD4MUsULfNCfZikdt7QWUsKUFc",
  "key13": "3Na55yqRV5kzCbaLU4ovrxjz754pco2QZvzorawCjzB3g6RakEYwb7BAtjGnjjAsGSGEcvPy2bcBkNCuVGYnLibB",
  "key14": "5XqEySrHw1yhJnqpaX1UCwYrzjHY5o64kSWCc5bVLBJ9rWmFcA7S1eHpkyPxHwggqx3LoyeEToJRDweAgMEChTTD",
  "key15": "qu64zQX1Px5chx4SZrzssipKthsDj42ec7LtqDiENuFn7wyRa7u9839EUqNhrhYXUJo6QFpcaKejJFWNHqpD7yH",
  "key16": "o8S9vpauf6g4aGHexkYETCqHzQ6zeq33DqDP9EuKLtrsrZCGVfcRx3VpWx4ZBWi6C1SCDRsZQV2g38ia4L2PTKk",
  "key17": "62PD6MZbvL9Rf27K65GTJFMHmwTbEa7gjrbpPMY7YiNWZmqmQmmbXJqWvhwhKojbb2wU229dnxpEosn1SGbesaxL",
  "key18": "4UYw3Q7XEX2dguT333LE4ycbuXsmsek5xiaLJRQhuBWjHL6JrtTbNTo4D7zeRhPg9dWYgQe4fNQ6jUMpxCnTsSji",
  "key19": "5dMLPt36idJ39h1WxRBfDydr14LSsTgsYnGcWooirbFJPk382dk3RfewUYo6WpBfHvZJot2qgwP2MSYXQhVaQCVM",
  "key20": "7nsegTyuN1k7ChmAYbAjfVfLhj821Ynrn7tfnYWxs5ypRQoQtWc8ApJRcJg56iPbusW3SooGEUjVuPQGgPKSbQ9",
  "key21": "4Bv4eJFmNQP74hR8ZdYE6oNVn9YA6FpXcLbuBCSbUGdonakjVC5Ypjqs2tVhXwYCnFZUU6RjMENcECiT5Bixn2Yz",
  "key22": "45N3mu2DKyWKyKQJLoEJYgje8YAxVASybLpxY9hpwjHNV1dsQ4ci8FzoKBchd4t4p7E4oEAXg8tUgEKG4viFRoCE",
  "key23": "4fuL7Vyp8gjVPN8vmkPLFfEUBcy67QtSDDeNV3Hnpvz8FyfPwBVFVQkzh3GjyXJYXriLpDomK3dPdRMp8M7RKPjR",
  "key24": "2pN86DX6gkyKoUcbhxQhqvCZLGNLmaY581JVikAtrnxJ2NT5bnHycr6tPvcy6QpCVuAMvozT1Xyqt5g9go9sSi2p",
  "key25": "4n5cpqxJf2HgAA454LxAqTXLyKHGMFSPNSvrrVjq8pwR48pKb5V5CjRM5pCNnidMJAJRPp7tZBCKVQJ3TMqYHvhJ",
  "key26": "4DV1b4xcBNG4fNVJKQxrU69xqZmPrPPN85DKiPvqkKGWSsy4m1KV9ydvedgktnDJGehq5WAXo2tUh8CfJK52jSvh",
  "key27": "kUgcPBe3Fe5tSSjStLs85ESDWg8kjZkvcECLyZWa9TpPbRY4Dv25j92L7prLUj7HAwYLo9uUf4aijebEoULJMbU",
  "key28": "KX3YY5QMwndnffKT3KGADL3chbtr7SC2c73SiqYz2xf7aifc8MRmEcnBH7FnfVDpzzsptEMLCm74JCcLXSR11iT",
  "key29": "3wPGMGUaPw9Tg367juzsggT8x8v1wsop7NHDZryqRumEQVHYM34uRfDHrwJEHEw6rchVX5sgehEgvmvZuudHhHSx",
  "key30": "3nzYpF3TTVxhr5f6Gp8fKuKSx1mrDx8EZt9pQF6hsUTedZCVwR7s3CCP29nZBqJ6XwowxEcKZjAn7F1sLRJe1eB2",
  "key31": "4EPvM3bXTKaF8EXHb44yV117LxtwqHDqCRhuvXXWC1Ua4urVTyRZ7p6CRzu1EUcAUHqMCBYA8PKtgc6AuVp2CfZK",
  "key32": "5AfskoscwsTjPbQ3yw6CDtQFndiD22Kfir2aucN7bfYDjL5SfJagh72WS73hpzMPmD6KqLA2YVEDi81J6WSScrAE",
  "key33": "4Qih4jEUyLDrFMHP6qZFLmxdSbjNPu7CicDUMoGBHtDaWevHw8y5EtEV6dVQzXdJLJKcrHzZMWQwZGp6YbP3M3DK",
  "key34": "4Y31BN1zXDK5hH3WfZw8E7QTPj1dzc37YE7XJvji9FNU2xk2LyGLbjUqXFnWCcbjDmHevE96ZkJcCrAbHGLgVHAc",
  "key35": "KMqNQGb7mad7dqVHn4JPxmqrAh1pAszg2xuY8XiNa5F14Knpr5PQ8cpQG6s7aa9hnCk7pdqLnyCPoEN173raauD"
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
