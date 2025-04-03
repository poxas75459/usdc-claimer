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
    "2BGAQAi8fZ857oRsijRbC3YoPCZVkcj1BgutjhyNd92KgK44Yh4ogNTKmmz2NDSG2hVapbaFeDGhmNy8kQ1GHdNE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "329DAMS85uuiy2BnCJMddecBuRHRQZEiza33yoFU7PFntdSsoztPEpy6x3jXK1ScZyi824N1BzTbAzKHcQZMHtja",
  "key1": "5NrHFuWs1aBs91bs9dme2SZcND6uDxJ5HvFqwhHC8HdkJvxjUVQZzLhCjsk42dGJCCjoPsBLhEQwqJke63U58JDw",
  "key2": "iqgm6iFpUprMqQyY2L3L3j41WswWQK1WMraE7FzwaJSVX2EffUAuJBYtCuLvf2r1wK6gnAAkScrH7KCzg9ev3ce",
  "key3": "5bdeEBoSeDe7cyMCB3SBzSskuQBBoqC8LpgoW45X21smgNXunDcntFMnUjFAvi8x9dXCStWjaGtyrRZaCKPfvUCk",
  "key4": "4dVBmJVmnSQQmLAPry1KV9YggedEg1n4VCuPcPr1rnSe3Zaqnc1QpjWBiQ1rw4TkLFtoAcc4vHzKH4DzeGaT47Pc",
  "key5": "3oTvpSNMKoxYJUrc6L3aZGvcy2rig7Pw3Y6KGE2rrf1m5qAQSgHUpdLjcn5qAmo7iY4K9H1EQpP7b1vvmVBc4nNz",
  "key6": "25xNzuu2zbKZccexea8LbcN1YfMFwBXvm8Q8Eziy4XACoDXcEYaGtWRvCzCRkAGf1iKM2BsdMMKTE6jxPLUEikPs",
  "key7": "4E6ubfK6YMLuTB9gmrhgqbQt4pCme5v39xtPfHmAb5tVFY1bB32oVERxiYrp6hvYyvzHpQSD491vKUL6ApmUzjFv",
  "key8": "2qsqHtkStcmEBGJ8BoBjjRsYfMHeFvQtXoPpHoAqu3qbqomoYuKzq6WN9SwDmAL5RduS2YmZeUTPEpe1PeZGieGZ",
  "key9": "Uv9NkY3DHvJdz12yuoLAg2TN7dKe4fVimJwpEyxu5Kpqh1avDnC5Vs9zU3k5YMMgZXYNBbVyAatcTnNcoZyrzx4",
  "key10": "3NjAGEeBWWFnGf3f6bKPjdLLhPTCpHdZBjcLTwraVRC6bQWgXBupPbtwTMYUZifQVx529QzEMMN86Tzg4JwKZPgS",
  "key11": "36HbMXbfWMgujFpPxPQe3p2gzkbajGKkummhAjUpUoKdyguXWdWMJxuZAP7MnjASCnrfE6KzbexdozxUMcGqroip",
  "key12": "3i5FD7gBNkQtisWtFvu9jE7Whu43aF66TnbTY18754asQATTQLXMFjGyx8JNFEidykUt8s91F3uR7WkS3K86A8Au",
  "key13": "yb9ttx5CL8Yfy7yLjyU9naDYZfeQqAFWmaPoiJ9aURBZVFANhrddnZdfZbg8QivG96mwFZEyuUhTtXrUv8vKkpo",
  "key14": "2UAyA4DdNhRhuFebAyGwkrXhB7i5c8JfUMLMsYxW9KLRbmbUHmZp9p46gfhPVCA5HDiiqMZe3TJYsprJ7rtKPGY3",
  "key15": "3fWMiGxSEWG6XyrXS8PiXFcYiqfJ58Z4M18oYLdjKiHr7Mkcs8ufSpfUvf1Nia9ZFaw5Q3GybHbY7JoezkcknYp6",
  "key16": "BVimPL49RA4ogZTt3cftDJy7UoT48L5nJdTmY4ahtdB91VPnXYcJUrGxs1Eyz1n8PowcmNkcpmuxKCbm3GD6W1M",
  "key17": "574rEL1i3xTvfDT1PazRxLsoWpwCVTcszXqqbrdabB97wYLbJY9kwDTFoZvuGVwrprp66ZvoJg3PMJLcWWESiqTn",
  "key18": "CHjZhahsfRT9cXruwXc3w7vQMzVkv59kkFYn66c4PsP5KBUBYW4aAZtTjmgTPyjt22PoModXDsqzYKE8kacjP9w",
  "key19": "44KQ1mrKqxBxTU5VUmk9raBgK53sHRdRhHXiNWqjMbS3ueSHjtBkdbEpKQvSoyqod81hVLLZmiB13spbAmumzn2B",
  "key20": "U93xz469W3EccEVNtftB7UfaH8PtHkM71LFMQPiu1jm8J9eJCMEfPPRgMF5NauZ8SaeNf2QnfKsFCKHaDVzhHxy",
  "key21": "3nx2aVGr1heDFcvYWNbabKzpZNco3rzPXHfByuHQpdF9mrt2No3EJj95ouQH259NwMBAFV8J4dHTBbytijDpVnLb",
  "key22": "5yAZEx9wyhb2S3v4zQbpbfpBA4HgjWKsACf9Tw5vAjDNgfdKadGtLk51NPkDPrVZfuJiB54rW22rscPf4MSX9Amk",
  "key23": "31fdLXUuR7ihcjDptxuX7VVZzASYbMTHHjfNEckron13xesrpaQp5QJLUX96iDNk8BqFhsqn6A7c8kz5SXsvdKub",
  "key24": "2wCD9wqeWThYHvDbEXLjQvPTQpZxoPJvSmgozas3Fj7upqy5xaZShJ4Mwz7hpW3Xiu5Ts2zpQCeTFWav4TRWVH7Q",
  "key25": "2WNHY3UVL6anYPpK1zx3LBHnYtRDkNLVbFGjsT85M1JQeoGNtE66Pq7yhmrgMm4uRDHpVwuSLQ1y5DUbXiejiUsK",
  "key26": "2RUK4JR8JFftKG8fZ1kb447aMp37gGBmxS6FYS7f7m3Zn4D1RtjcMvTBf7BUii47ZfRWYsEmpRTZiv1zHEAL9H1H",
  "key27": "65Hz13ZZ9bQv6xrNLh3qzb8o8YVExUwkXZ9AWdPbjjg1CmVh4NCJZ3AVtx4bekAnJWaJ4Ys6R7XGu47BS46PYAYK",
  "key28": "3NcAMkZ1Waauu53vGQcaXdhNHXSVsVPJSbMac5sy7gA2tdBzbxCFJPdEN2A4JhiczvUYXsbn5a2ZSbjV1HQHwgyd",
  "key29": "2exQ7XppjsVuXLW4sk1qQBoFCMGk1YhCqfVdgQmAsw8ve8Ut5typDUUccHyvitrTnM2N6aPVz7NR1fr4PPZuK8wR",
  "key30": "5ttPgp2pkLWJA3TRCH1fgiqWEcLKcaTLGyyWpYvGNvdy1zUPk9D5BSz6B57Cs46ZDqNDEboPye1zfYeAgoj9kZMy",
  "key31": "4Y1M6QS16ZY4FYgTBoXJvYuPLnE7rfoK88SYwoyVo9dDqWTVLWAKRjWVS6dcJeBtdRXKFsqFi8kTVazo66iRABWK",
  "key32": "35onVijVe3wcmGKp4zxyfVgk6Ws2omvqVHXoTigvmjeEvZiFJduXLgEjdNWumkjV8DVFFw5njVnEeP24yXwQXenc",
  "key33": "kEcUWJyGaME4PEyS7TdPKwmgzH9sfK5wcKgpUxbgskpCt3yBTPYGHYs89jgt79qJAvzz53kQq87kUGkr63bYehq",
  "key34": "4M9if7tviT5hZA8mkR5TGqeUawSmxcof4PwHjCJQdJPTvQeGhNfymvSKseM3V1v3JFnhTsLgNfiTpbHVasaPnnkb",
  "key35": "2R8HgJ64LCiCuBbFPYTh8qU7a7ggvFNWWVbrGTu1dtMGY46msyj32a4uqtxw42uaCUsTvLRPJA3BB8VyR2hcrfcJ",
  "key36": "2cEWSiq2J4mTBJEDnjeGFkb3zUmWNgysdFcPRQWSCoPraHoBrv5UGNXDD6rJxenfg6U3a5WYuzB54F6uNP1CSjLK",
  "key37": "2oAdLY3css3E6Y8LxLZVbvtWtdeviHQRJ5fVmJnje4MWuowPnxmNqxxREQw9TANHpEfNLzXMxNjPbSGygPd2iruU",
  "key38": "3hMH9sWgQMks2gYTE9FswtmZeUAt3maUogEdFW3iK4ssXwe23o2gK7wwJBHwuAeGeKkWPK7Hgifka4BzrSYJTyAJ",
  "key39": "5YNRYyavhz9eohYGLnrN3D6c5kKvTTEnD5oBQhXQVhuX5YUaSjtYcuk2vhb2z8Lzz5iMgG3iAwkHxz4TVttu1dUm",
  "key40": "2EGUqZqaH986raWPgcyc5MvM8CX2d812opHojihYcLfWGc5DBgtBz2Q92NSFdKgJSBnYVof1nKSnvLnYLPhxZGk"
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
