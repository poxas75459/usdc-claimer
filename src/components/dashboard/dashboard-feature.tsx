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
    "3nxfQXWD6B9MoEk2UjneQXajxsJPxZhgTw91qMFQ59CFuoW1iR5aAxj4uSBvARWQLhN286faLUEHdAB77967u2nc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZLCDsarB7rfUPiNentYY4yqSYS2ZPo6rTLGPoN32VD8UMx5LrM6o63WMPiTa9VoeaN9iFgCouQotmv1PFqMu743",
  "key1": "31eVhhNqZZgAE8EZjfu3hfKpvMkMXzNKeHuZf4iqYnc8dcgtGEvVtS6gNA5oaawVVcca5LXseUCobE8QXzpbJYcH",
  "key2": "2qH9w7iaUchToTdyYbYbetu5w2UbabnsAyvTRtn4B5GxxLmmN6rezTTUby9gR7qFagj1yRHZwyxYH9FaCX2vMGid",
  "key3": "eX1D5rbb6csYES3a95xE73oErekGMf9npr55amX8wwYYvFn26zXBQ8V5KZCDcmCkD5YY4Dt5aYMFqrKX4jfCJBr",
  "key4": "EWUJwoPBmt96kuCnfTBBrsnjsBVSHGndVwfN5Mto6FNZHEQRP98aayDes82gEBWQjaGQNoz4SPZ3Vp1gzfZYmki",
  "key5": "3kUFoid8NvozAz55Z8QBqkC2yXFnxkVQCtd2C2d48y6RrYVg3Nk54bhK41TS5LhfnxNVQaQRrCrR5cjB1sgmQGdv",
  "key6": "2TemcyNcmti76UZzFgXMVqzMyVdDshGQE84PMpXiF74ChPxK9tosZLDzB7ma1QQVyVY5BMwCXW4sQ6m5bZySJnYH",
  "key7": "53eeMrsyhLzzr1MnFLD8NSwRtzKmZfWTD5HBgVVDpreNFwSQcXWLi9p4C23tceNGBa442ZF4ZfJMBWTpkMXAYLwg",
  "key8": "NvGV11Do8Pp74d5WLshxEgi5GQEiLUw4jF7LxfEaRVLsFwajmMjBVjj1EAVfPeb3AUFGCoptsA3q3jBZcGij65F",
  "key9": "3xeAH8zdfvuSvrXyuEnAkVJdCh4w45vfBifH7peiquAtxW7WuEnBi5mqF1UJ5kw5WxGNzgB4cGpTafKhZpAEMZir",
  "key10": "4gU551UVXo7AizXj1YiR9szUthTa5u17fgE888rRk16HzDVVLBLnCEjZUjwwi5xs9NLSt3owRnrmtCaMkme3UALR",
  "key11": "5uCLaQotrFLiDQ7Pe64t1LBuuYVFQRmYuwJDFyM8Au7fFEejruqrQ5Tz9LN3g1cDmrq2hy7a4AuSDaiTFYHx3w6",
  "key12": "2Rsiiwv65gdTfCb4QhbqcKB66cB5DkLXVmciQGDbLnFiQZ7coxWnTFYQ2eyVmEDVzi6EqWGbrGNPqu4CzraqFxyr",
  "key13": "4LkXMQ4k7PzodXRcBgLP7GdvjJHqks3mP8hywL6N3t39S2adEmWHLyX6DU7F9FYU42sbokaexQE2YmT5jswqR4xn",
  "key14": "2Mpt8iQFZMq5Fa8GzDVzmWihLJ1hwgGT4q2ZK2J6fTjU9G4k8UgQx76uaa9YGg8cp9qgfFUH7hz8REToiwAKxAtR",
  "key15": "4fNCdg8tYxn9RpnRUqNfs2wiA8G8ZPWXTXdDVpLBK7d1qnAHWTd95BUNe5VTtqbdXatVNzzK7Vbq2RxYfM4gQM1g",
  "key16": "33ZKgvRzXdvCciHmxyncPjStokf3DkynpEdS4QDufrBwq4egF92TU1G4HiBJyWYmvNmSzp2nrsAEDYiuqVTzmBUm",
  "key17": "3ntX3c2WDtpbHiAb3XRchuwcdGLDgjhAtF9mjkU87gHLxwwtnM64xCsVBLubqVkeKjegSTaE6FwZWUfQZtH1wHDH",
  "key18": "7qr656FqddviQP4uN6M6KCfdK7Fgp7qyqUNHpmNH5rXTtZmCGANkSyX8WTJsLg6d3WiUrdJ1fpFm4DXKYp3EzS5",
  "key19": "AgfCHCXjurccR4oC3egU8fPgzQox1CGnKTkGsXTDA4uvZkb89vggFqQu3hhsbtAxQo2hbBLZMArEMZJyG9ArTec",
  "key20": "4kLuNCZCUpPSh2G3qYTu43jeGju9ZR6EZXTqniE1RuRowfW3e7bmRUVjouWYxnVWRhrcL6iaWC2XgF9wn4GtSmoi",
  "key21": "5DzjHbFRdTpM8icZpKFMVkXGFVSbp6AjjXVMdEppGkF1pm6aNLxndUuX873ManAtRjruPxuwgMjD96EHJya4Jcvx",
  "key22": "23U73WWYkRmVF7YzbCffc3r6AZeddNwRVVbtmVBXEtffUnvffDJ2HeZ3urG3fRQNB27jWW33xGcWKjAm9aEQBE2K",
  "key23": "mQ7NNbA9oqQjihhXD9ycWt1sQi2F3Wkhfnt7cNXfBz1sPR8jnfhwvsfRbhVcwWRr6AfCS38rFkbCGaJhY7mgv6g",
  "key24": "2vJNXux7CX4BaCgkPx29aoTdyCnpvADLuKMDgQLmgJe6m9bWrQsfXs9hDrt9edr7Lf4S7huWmWP6xXzWSqZQsnGG",
  "key25": "5V57NyeAhK1T1B3nUHCf5di54HneMNrjkuyMP4AzLBxTY3eefoCdrsY25NkjkhwanKGbi8p1XHRV69zrtF9r5CtL",
  "key26": "5WuUvKtkvYgiusrXW3wUJVHMCFfHptJqsxHNERhExi65ppEiHgsEYWvzWnDLAUUC1mMXJUYj59svfuUBFVoe2BsY",
  "key27": "4XY6FssFCTv5Tb5su2P9nVSyvmwzPLLPB2hXhFLyyteWQwfQzzqrsUQbevfhovQFGFs596wUxfWsBdEeac523BFZ",
  "key28": "vMLkA6awxP13HgFaYYhAk9quLgdXZWCayT6NnvMvXV9Kij3UXDEKXka58uPtMNtk8ohCi99r6jrqcVxxcuhC99s",
  "key29": "27Kyzn6U7t4swPm6TXs7BL47ZkhdKQ9ykpfd5jc87anbEQbps3Nxk1xxh8Ytcfwm4vpTHPpkp6msCnYxWqDwSsH8",
  "key30": "ugNyss9qdE6curamQ4rs9unRhyxMox5gmxKthZWZKMwLb5LMo7KRaYmFNmsaAEbA1w8SgFrv1zModWuvzBGKZQo"
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
