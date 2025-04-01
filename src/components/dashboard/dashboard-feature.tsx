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
    "3U6P1e6pMSp62fpTM8Cv6a4uRfBNPiCuciL58TCWKuZuYLo8YBxmG31hcivMtFKqaK1XaQv8BuYCWzS5r5U8fRLr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sRzHHMDeJeMHPCcTDwA2UQsTgbfaV7f1zgoThz4cVhLTTPXvykb54WoiXy8V6dgwCoFhEwSkaygHu3u8hbRk9mG",
  "key1": "3UwtxP1f1doPhYVsbphEyPx9EZ27jMWZ59jcbQUMpvYv5U4sjdJEd2v8RAGpcgCQb5ZGbPke3CdPWd2jjrj8vixd",
  "key2": "5osN32Cc8wk3d4ZPK3aWj84GXbLDCY5LEjpy9tSUyqM4rdYkAYpfEP3cKfm8anBkqaKF5q5ABABpaayLZCU9UUu7",
  "key3": "SRxunjFeVDL4YBz2916SpdnEr8ftaLdXHU5R7vfgJkd73rJymPoXpVwRpLkDe32suP6L4jWvF7b73pHn6XJZc2h",
  "key4": "2yEApkviXdT6oCUVyan3qiQiUUnZWbq8B5G45N7o63Lgs4kJX9o9k1jYNa5RjUbGywDyennzAMdijeL4ax6kkvKj",
  "key5": "2wWACBNw2Yzn3zcb7N3ZmjtiFvAJzYgGDhDatMMdxDg1nUdi1f2h5xzph22eBRT3Bi6YZsKr5auYHeooJ4JTGLJs",
  "key6": "4hipPcP8csMLRZw4bK2f1NRnBkMHxQtxucUGdXyiVhddrS2bXPBdA2sS2ACYQaUkWtugoBY25s1meUyuS6My8oBR",
  "key7": "hmqhASwJqeWaaTprYYJZzjokRtMfVg4VudcVctNn51XRMHVf2ugoU2raF41HbweH25edS5xv4AY3JmFcwaHCXsv",
  "key8": "2SHwDRy2fqHm7Cf22TEbxmQw5Vc8TjZnwXohAuvb8SWjzbKhbYgNz3RcQ537QonAv1qmu2WRMuRyeULhEm8pZzBM",
  "key9": "4dHaLjKSPetEDHDZCwr4fhLyLoTjvCJ2gGJMC6qQSSjEKsytY3hhP6xfSq7wHoR1dUtaFRhxuy8MVE93XhBwFZfn",
  "key10": "5Vb4ecEhkpm4iy9FDgFusopzsLh7rrbUBCWK836WVqQEJVivW5XWcTdWEwiphvgHugQxhhbYdy6nNMmJGXLTBWAa",
  "key11": "YwFMJcmGZx8mctFRNDy8nDhagUuwoYmCrQHARdXMCi7HwN6WMKEHyE7hFhp6CmXEkjFueosh8yYJ9xxnJ3nocki",
  "key12": "DTjFHUyPba1LRPZubZkDQebvJpGW9Fex7ZVgb7ose68xWhyd2woD7MS62PEEU64qXT1Jru7euqDxKRvb1TsLyVk",
  "key13": "9CnyuagQo6qE55px6f4ys1Y4xcRW9yJr8iuTXzmAMno6QTswpvFQdc7wVLwN14e8xoLi2vUEeXe2i2DL4KHZXS3",
  "key14": "3aUQLSAMrtQuA6vL2GBD31iX4b5azKgTUgtFqZWCqqejPeim56ZqH9cbnhsmAvFf7x7nrST5BAVkcKBPwLrTBsJG",
  "key15": "57CmP6uE8ptxZqz9YeMbWg92W1Dz3to5KxtPny28xLL1diNN3ALJucSdx4c1fgLDMVApdgRcAHtiptwhoALJovX1",
  "key16": "2jH6bm3Coi7vMA8HRUxCMi5eRdmpW7GLtGcNVFQMS88iGsRhZ7iPst2JxzhYum8mbLYhoqjF1RqXNzTE2XH3RGZ6",
  "key17": "38YjCYLhuUKGWr4FaRN8qaZExXsi5MqXzC9wKyGkMRQkyRA712nz3bmjiTEuJH6A9zn2LFQXDzmaHLbbEgQpXUHp",
  "key18": "2EsFsQU38ppDUbbRds15saXeduPQcTSkqLTH37VwpiUutwPxNYFeQZjTeNipstjV8ZXGtMHf1SgN8zMpyswH5ZWy",
  "key19": "3pa7HpgiZLyTGaPTsxYLopbrzaN8anoJeymupZL4muiUj6NGDfxm8ND67KioL8isrfeCDQ9DhoEpyGgrhPN1nNUU",
  "key20": "BmJtD1XeJcvfs3tzV8aT99CMsPeUq7sBDjCPBvCqvyGGDr3vXTHtFa2yfnzjPjY4XgJuRBFNij17Fwbw9cPHTM1",
  "key21": "55uQhmj26LYTFZoRd541LtYB3gVrC6wfS3xp2W2kA2uKtNcqKfMLYBiuu3Yi6Y6TmANQQZ2yPCCxjXmGUZg3aVZP",
  "key22": "3apu9z9tud49z8ga1E8Z2BgTKSVWdMQ9TxjCDrLucWiy2LX6J51t2HqGFUxSzUgUmY6ZxXbgLK8F41E3QzfQGfLF",
  "key23": "EmZAZn4AjgxziNgW1awU3FqdZsBKtsE7aHFUQMUR3XeEp9p74davZJLmoUfC5Ymsh812eQ9BMx5F7bp7F66Mcup",
  "key24": "3qDCujYADP1zkEr7dcidX8urG5opQQiBUfuREM9ErTme2ysC8JMCw5SonGMrFKvcQdmZZSYKzFjdbU7ssEV6rrwa",
  "key25": "47sgyFgeDLz2AmdhMuSzWgXB99k83Zv5NJURcTUtA5t1Se3WoqUAAyFkzuLfnVfTXoku1tL53gW4Fnqnno1CxJMG",
  "key26": "3JGBrv7KmosrrwJVUUWTmUJvFKbzDhbSspZcN8XPAotjegCxUvfm9M6hXarfrDfK5r9LaBZYu3X1bndG4PNSav4c",
  "key27": "3Xa4dfzyRDQg3t76o6UFXcGUygbKtVigGz5Mn245cZMYCczDLq7nkLZ2Pm47S952Sk7M76bBFTo7DG2U1Vp92DVh",
  "key28": "5XfVRfA7RNSdT2eCJzR1oWnPC3ybHnG7EJrC8cFsk5Bewk4vFgqGLBKFMnrPumFBfX561Lodkp1CaLVMsNyKH6Y9",
  "key29": "3Ks51TyDxM85rqVzc29v29KW1g6GhoVhfs3N2W2V6cPKB5u3u5baa2ScLAUhFTiYjH8jxY516uHnGRPS2SQNqEER",
  "key30": "4Z1RFFoRZXmwj8LrPNohZqyQYAnyfmWQFZ7PyUMt3JtMqmRnsu3UmYqVGyNBvh6N7GoT4sCS8Cf9dRjBNncGy4DC",
  "key31": "5SrrWgYbRae4wjtZVz94k9MYYEdDW7AjqJhneS1VSdSeF7gPzhS1Pe8uLkGp3GsHXoeydrmB1Zzp2Xsetov6F7GX",
  "key32": "8DhRLV7HjGtaRLX1EMJHP7WXGQvD7FiurQwyGa3jxXK4HFp6AhS4VhX8ALX1tBmBcUEkjY28GZLBAoXmonVj1Qy",
  "key33": "2aDpXSERAYv9pLkb1PF2wMj3CWzj2mnd3Hd8VSM7EvfvkMSDzTdVVPkCLAxPK1EFFbZLURPUgczgAtDyxrP7fMnR",
  "key34": "5Ao5bsYWDNppLRBnKUGBqhdcoRwkmy3khEkJV64WTuVLaygJ6r65LYXdPHMs62hfWZaXpfXKdmkxkKzHK7jbnNPB",
  "key35": "5ixcD19qM1gzdGW8GmoaCiHpVgcJFjSJNeJcpaWL5NxHA1wotX788uwLgvKzQas2GsvKrT5bcQyQecrVdRJShJW9",
  "key36": "4eWZ55NwFbouNeCuvs8KLC5HeQsrfcTEoq4hsoKysX7f2RjUb1cEXAwdWSwFyLdEds1HisJF7XuDuX7fpUwKMpJm",
  "key37": "3z3QJAoHb4twjb5vcWKyg6qMrWzAgKYxz7cr9RqFnPhF85L94f2uBUrXrVsRYtBR5i18pa1E6Vpj1Khp47o6jTrb",
  "key38": "cPZt8ugNK1YC7FYXeAFbKnpZCh9eH1yJGXFLpRkZePiWE7MxsAfhBY9a65DGTru5YADXiUE9Cyp12VfUfUbWjRi",
  "key39": "4AuKyDXTvjfYBjfSJoQAb6NMY6Z3wRUcbUcFPTddvFnyeL7hkm8xzt6hjS7fsKncGwP77LYd1A33s173JJA8EDVM",
  "key40": "2Dj8aimUw8eNE3UwrAij2b8rKJyoLdMeSKt5HvA85V6XD9EqHxRhQMDn6aHkcC13pvVCbLmXD9XWHjcaf7gLn3aj",
  "key41": "58vqxt34vM4wnqGhrEwbcyZ34J15YVY1K5p8skehVbQj7LgBbg81Se4i5EwB3eo7ortvjqSGJNCDtAEb67HHT4SZ",
  "key42": "2QQkboc2GQPTmHdwiSj8sC5yiqQYjT53SM64eHqV47BQWFHjwnYcr7nu4amjcWv8kwrhJKijtJCcHNsu2qjSUWqk",
  "key43": "3noQeptF8nf25oqRc52mqeKQ9EKjzsJ2enRtDxFM9MLL56cK3M9vX8GtSAxKn4NA2pybqwdYyBWkjeZJcnswrs27",
  "key44": "4Z39eT6WxZ9ZxvmeqchyoZVdiBd1LPKqGpd8DtEQ1H4MeEzbj4RnrLkmo8t2SsTxbmgYyr9QxmkGDBXudiLgh4YQ",
  "key45": "2B2yNYd5sWLZFamCKV6kpkd4VsdxsCG1So9JwAfdbUXM69SSCCZjFCPVys4JKzYLPVBrJi7BoJ2nRyptNy8Kzm6x"
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
