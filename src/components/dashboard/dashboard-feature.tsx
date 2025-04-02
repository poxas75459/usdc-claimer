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
    "4frNfu8NABhvA2hkLLf6Fbj5mRzHH5dqXkpukxyyYEFurZLyZj3w5VGHG7cG8NF7pkhSZYUTz6K2DyA3LwANJpQy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PEKNpe37zRHKNvHTXpX7222WkpKs6BayZCN2wQA5sVKvgeDVZaqNVMvKKy8E8Jb7PRinpCAES3cFvnQMKqGDpfB",
  "key1": "2evY8cTZExN4ZUuWwKVr3RQopXCiJs19r2RD7ArdPPqfiV4oEz4Mp4ZnAQ7b3R1Gom1pz71k7kqy6uuu5nwJ8jNq",
  "key2": "5QAoPoqaCTyMnXyYrXi2L3xiAeJopPzqgXPuZmLAwQHaZzd8K4pWHXBi56CpskuaW2oxPU9Hu7aUwTyUSMm14kyh",
  "key3": "2j1icoyfqsTYboNdTjMoaJzpfMxTbHQM9cKP5sg7NKyjLpTT17P1cKpJC5fszJ4zQgqjSsCiy8iPuT3HBGeThzFL",
  "key4": "2neXEZXsV9EkWur1r86XbgLVx4rrbLb3e2QGnyTyN2bhRsJUF77tdhGRXp79KS1fTpKEZXR6QWgFppabLfpoUD2H",
  "key5": "43pt5ZFrLQAJDzJktmkquiPtHCvwbgWryVcrxdoEsCaspnaBc1fQ72WwqawWy2ihpCftVJAxq4CazdYZcuRBBrLP",
  "key6": "aowwoY2VEGtNkqRmCFuS74v6tkfGRiUYSv3EGq6KnJGuL8XgpmhbXxTWpcFPCPw9PHJD4fwp59xVQ2KSG5bRiWY",
  "key7": "5Wk7hp9kNA3yy98dg1sXUkPfjRjvLc4UVvRCtAr18HcPGFZ1Zh6vqbjo3Y7999PKcZ2dNbtaF2Dbgw6x2V3jnHgF",
  "key8": "2beuhz8943HphwdRQ3MaXyont1Av6ySGQuhjoYrafewv4R1FQJbwZvish18SPNfoDUu8TPTiCXs76cqgPdS38Qaa",
  "key9": "Wv8gcv68ABjdTRPE7MbQm2JH4GJFrF7sEsSgp1AD5qSp8Kep4DN8MgJZj8c7iMu4vSPiLFLcsKbfG2NtQjGFsoK",
  "key10": "8kShyrb1VqP7C7zxgWmHtrwoCEpiukxKCrX2iiDsGd4PsYFX8qjdvFeb5tpiucN4fme9schaw1K4pLRwjvkRKq5",
  "key11": "5d2XjFCp4rPdcMsGmpfxfevhBGJKCBCPfW6zZhKSCWkQAjgjxyUmaix2kjsSHuin7onCKWYfMPfdUzeiy6UMGh4p",
  "key12": "4avtN3Dixifzt5egre3zTogPvwkKxc6CSNg585cYAsEMykNtwcd3H4Q3h3oeKiWLXPG22XoZTbYgipJaAvRnwH5U",
  "key13": "DuwVSjGx5gsFj4BuZcgyL4sRb578Y3b1p1tipuGcRoZ4s9a5CcMyJSUyWKhRrd1AgcquHgZxTHsddd2i41jUcco",
  "key14": "4za5Dms51i7Dn7rGiYsyDuom68zgzKh4jD7Lgaig7zaHzhbcbsVHt69zmhehMguPQ3C4L4LpBPrrKPP5XUbRdqXW",
  "key15": "D34u4bRABC8GL4sbMb49ypF91CHRVDnJAKPRpv4By4gZYyxwsKFZREgQLCKfrDZEGMZU7a9URDGRxHXpXEkgsmU",
  "key16": "5KsE7TYkdUenPBV7q3Aj9MYvQa4zrZjDKYcMWtGB9FYZH1eyPnTzuVTMyr8XJmDxgUXiLHB6Ut1juyK3RH7u8Xmt",
  "key17": "4bAZFsiNqVtbkjTBGKbc3Mu6xoMsLDF1ggnqgYetuX7NUMtJponJXhm92NPYm7yFH98N184fn2u7fXxjH6ztfZ5t",
  "key18": "o5HzXseMUXG29iB1QiXPGgbZL5VyBAjN7pDAyhuvU5aVMftD9KGE6Wd8KzRT5KXRUUXDNUMTie9jbzsx91j8acW",
  "key19": "3JXiV2ibNSFz3VJKKHK2FVY4BitPNKRAeyAtmJXCJvL5xafaYEvHfR9DFe8aTqoo9QVpxw5dLciw3Kmbhe8s87yW",
  "key20": "5oHUabsPbLBLtBuNgQtMUxrf3Ri7WFhWDi5mZ4KqPgsaiW4KWwvVbWQkYy4gQGJXpmfLtZSL7oT16okQV2gi4AdB",
  "key21": "5U2XY4A5fvfBJJXb67rProgMTKEhU6dRdGmxsuAXpg4cEeMCBGqrEdQUu1sei65PcNeheTWNPCFzhTwdSF8QLCsF",
  "key22": "3ojUqWpj1dfvu5cYXziJRy3MiCr1zzxxdeRgJJgdAThumz9c4VozUk5nPShHYxNMhhxuvg32kx8Q2Xs67UGwsSVj",
  "key23": "5djUN4kA43GffueeoSTdQ1N4obSQWvphjqpgxMpLHieyc7JwPEGUnCKFeviKvKsL5kZbyaxaqHoc6UrbKUw9T1D6",
  "key24": "5S8atXj9fqLsszvKeGrc3RMNnnz7rYBwYRXNJi5ddhNWRh3nXW9NtnsR7c2zNBQLaFhb64evSWqbtsnwAJ1hPBNf",
  "key25": "JAGvA5xhgPWDKQdMsmXdQjb2a7Se6Sqc6cmWLcUvDvQcmVoWhE7hRjn5SUv8dZqrLXKmNahy8Q9P86bRv1QJDQe",
  "key26": "5STRcSnfQn3fNxMG9KvAMNba5qKMwDsKVtCJ88Rfeo1m2n4djSuYo8iYdv4rsR2Vs1rGxy9h84srbUthywJiHQHT",
  "key27": "51PUdvPjBDU268m8pZGxjW8afrBYX3CQA7q6AipCi45TVWXWi3icSceHW6c5RVhKg9D8dES85moJ4aS29BsUxqh8",
  "key28": "5FgsUn4UromYJKaJ2d3UZYcGkphKVGLkP8sVKhGJ5FcEkcxjJYT4W8NrvJSoDpEtrKdSkBgJLYzPvJtQKWvZDPks",
  "key29": "375SrLtoAozmP3NocHLMrdzWndR9Ee3zWnMWEAoTeKLxZG2iZTQ5PuaWFNG9uMYVjukq2uchMbDwKNgsDyVBCn8t",
  "key30": "4N5cDPBoVj2qPhYVjVN1A2muC9YaWrq4vXLHvLFeCRgLptHteG1EkE3V2yryXUwHUXrPNskkq1zmbdEua5vf1Xe3",
  "key31": "5NCsZ6so5WJnmcQhPePN7HiFaJLLYcw2y7ghGQQnvsvnwbjsqZcw7QrTcJvNUYAq9Dsj4A1nFaeYUEQD9fjxYzby",
  "key32": "3on4XKictEPzQRZZ4FTZeKMM8sXZe12b3DcdNh6S4ifB9YBSfgKBbFfgZTPkfycePDUbhWA96S2DBJsLa7NZXNNj",
  "key33": "4TwknT3eUaLuESbvahCZ1wAEzYp8Yzom8kMQtYaByHVWBBNPr4HPZyBktWRKxYUNQLSyjHzYNAEtp2srAUQ9ZHVR",
  "key34": "wdVmy9wFKeHTSk8dVHvp88TXojaqKYcSsim8yeUVExmd986XEaBXtrCGwiZZaBaDz7qvQ7WUjSpbp8tJckzf9d1",
  "key35": "bgRyJUAH8gRaCz4pf4aYWUpUbS6GnVnCykbTyYWktZrN2CeaYDf5SKPeQwYPS74hW3eH6VTS2jGs8J8APUtsuF4",
  "key36": "5FcnebsmtvLBmRxxskvenPmEx9DBxyZMp3Zhug6EodFheSwgAySP9pzRnojwfxhptPjysd2LE65zugawu9cyAxCP",
  "key37": "HSXFwauQUyFjunqUPZrR6C8wgJNFoBqW3Dig1orGA6tyvnb2mjMj3hMWb5jrHeRbMmnRUoA2orr8GR4HRZgQ7LE",
  "key38": "3f6FGyne2bsGi3PKhuTYDdLvT5wjxbuoRa6JkRMV2aqxi8knCfQUoCMzi49Y4dzPu4MsfsvXSER4inyUrjcztij2",
  "key39": "5QTyAi4snCuHUQfhvfPJBsNEJ8723xgFRDioPQ7uhPkvXv3qz1QnqZD2RyWQ3R4fzhYsqeM83UJsTqBQVMYGcpKj",
  "key40": "8T55ULDtf6jLtZmwQ9WKSt5Qyfqg7QuqEKdHcPvkTxDQzDyybo1Qf8CQWUB2pGEdAbs8HGAbiU3WQ1zQkqY76K3",
  "key41": "8uHzxcLCY8jqCmyhvULCKvUNU7kzMBXftvVnwi1siu9q3KfjhiofdV3ZrSpLrteeC7VXdxd4Vf7ikEci9weCPw8",
  "key42": "2oCzAbc9qUroDfY7uTt1oZJK9dVbrKYUbtbecgBez7Vh6CWjuhsDjHQ7mLDLMp115ad73fUVyuYiaqgLnJ16dzXP",
  "key43": "3UJqRTJZZQzjUgZ1EdRbzGGWzGdung4wSSGWfkRDtUdPPdq8dPZSYYPzYs2qwEXRaa5XsWoLmwkJWomgQdF8CaK2",
  "key44": "5gzV7UDax1A6E6bMsdx5WWKZQnsV2S9T2tgAnw1M7N5sfCjaK4AUjy5SZrJGdfxAogiLMABstgLSDrL8o9Y3wriH",
  "key45": "4u6qe8RTPJifLZm4uvHRF4g8KBGoqVmCiugziyN7exfUNqTWCM9gdiKFVZxitXDSWwQ1X1xHLFZH6T9LDKfmmwxY",
  "key46": "PjfNR1YkeEZGz986ng5kJ6kGiHzHKnRBqeKVvrQiUkhHtFquU2L9CCQxedHaV4FcExzRYsGKHzkdrbVMi7ptoNC",
  "key47": "5kdXxBKPv5Mv9tZYW5tbTYA4cMwGrHDfD1bLNi79eGto9GB1v4MuPZBc3hW3ykx7kZZu5X55fhcGUKNBPgMzirr5",
  "key48": "qKh6EgHqBvQD4gU5HqYryyonqMgMYPbJahWzUEepYgGdCwDJk7CxU1eShjD9dCNUDPqNo8gtDu4v4rCMyvBfW3R",
  "key49": "3LxFqhxooTZKMz714pgXKUrvnvf7WRFuHQzS8U9cpbAXdETFZcsLNzjEmbhUoFeTD8rxNL9Xdzp8SH7Y1Dd7dvdW"
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
