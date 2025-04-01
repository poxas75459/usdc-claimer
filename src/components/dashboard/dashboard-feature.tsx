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
    "2mGJoXUAnJi6XwVCkVgTitdCFJndEJRmD5Z4cqgKqKTuw8rJtHBgJM7DR4rXQ4sG3oeqM4KM66QhLpaXbJvXdCms"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EPsUXQPkzXyjw41fNsXE3i37N4jqNNzSNXkJaA7NtoGa8BVhcf1bSSj48R6LMTqY28Az8WzEWECTM75iSEppfab",
  "key1": "E1KVxwVS2R461KyjUuBENZYfFDiyg1bwACbnb92j88hSTQZedBicZwvLVRnT5hPSJRT5EjMb6yk3o4ApAYYHrWv",
  "key2": "2hvWYwkyv2wMuDfoRj8jUWWBX8Uzucr3w4xyUNcJQS7JUB1swTDiEHZWnrqMPsy2iQJHBwF9fCJ9y6KfrV6ZPith",
  "key3": "2dd5hYUZk84ZJh9J5BYezZYhDa1cqfxTnfLmayTUUmWNsx81uYNV6wGGBUvaFv3AYFJdi1fmFNWZqtP5mfsPt1aV",
  "key4": "ZgNS6nMy89rH3dELQf7MKUMcvhSMz4KZzPJVHNbxk52Nx8WHk7e4fCkNLYsVtVzF3sQx1bg5NU7LctuQyk34u7b",
  "key5": "3r3SkJndeR6xJJapKK66SMxCsB7z984LDQKv2jPmDJ1bSjLDKvBwM9VtQKHg8Ltu3jUgCj6MLJJMcD1k6hgh5vUU",
  "key6": "5y5Pr8wTGBP6nTdnZiE9JNNrBmoX2Mb85bn4MmGxbFkPdWTgMrAALeL43dZvqQ9dnghBCs3YSUDXpSPyTJpcFbX9",
  "key7": "V4Hi4zznqwcTxWG1LvhX6nyq2JSDTuKRk1s328wGnsPxteuiSfdxbbjRxJaCRjmq8f1MewxAqVSuYg7zcjHuo1f",
  "key8": "mBRNAmezDkNN81pxnxwHoY1aqBBAhHgjuPzgjn78cgxSXHjmfbUMGq4sLkamakxNept4upm2Fw3DgEDzVGmHf29",
  "key9": "4W7bYfFd1GVoXndiAbhxjDcK51L7Cp2iizvpvc7dTWVeY4zJedFnAfSCRsiyCgudz5iEr8pBEv1guQyWoQS3mvyg",
  "key10": "5NatdGERPVYbqk9s9wugsQfTH3UrfWu99hEK2b2bi4sWbjk5e7iqpq1fJP8bxxbWiiNZRAVNQKeZ85HbVhzegqHc",
  "key11": "4wArPVATiNDLhbiAwzxeJu431JRW4JAJJxNCjbNjRJqaK1k9PdgbHZocYrM8LkQRYvWH5EcvSCTxxYcTVAi5b7k6",
  "key12": "4spcyjz7rdUGfTaQEY2pDjzVRqutXYggY8FeDKf32FewmViUT9YMwU2XifhVc2xRM7quYkMCGnH4zb7Fty8EdaFJ",
  "key13": "3QuY45VrqGGBSATDoxj5UsfBJmHB2pXcedhp2XPi7aNQQH16AeiqtSULC5YMhgoMAiksNYFAiDfdyj3DfQqDLdic",
  "key14": "2mjDhPxWFQuZPZdVqaAa34Gqab3V6va4Kupmr8jhWmwt6vunYV8tNMbgmBYDaLtaxf6bEmwtqv3cq7HJnTpwRCmv",
  "key15": "iB3FQTFfT7DsUdKLoTqf955bmD46dyuHooohauRWd6QXStWx1YcK5H2MK5SN1vpxtZ8fxyucLcqTvfuePXD2ZtL",
  "key16": "NA9oTW2w19BUqhNJDZuSudVzAftwUFowhg5Tzxx1zzrXFvPD3P3Jg7ME75CkkjUdcrhyzBEWuYjwPvMaxQpZqYs",
  "key17": "2vyuXpydVHbdkKsqtRWFJbmrGAXRT4iefXcuMc9KaLb2YpNbBQuAgMKJhYkaRfykLRU5E4XxfCSQA65XkcGiQbfE",
  "key18": "5LYezv7rcsXD9JV9fBY7FpafBoi1xt8AH2xk31iUDsZptdSYPqm4LbWp2BvHgBdAfkotzn9LhLjbrxU3iy5Lt6Qz",
  "key19": "2QGor1vaM3re1NBUngnswJUKVNa7MJFcxtH8BKsAHLg3o5xJmjauzj8b4vHzLtVcjuScL8LmpoipqfUwDHUZB6Un",
  "key20": "4it8cUFKmdF5AWAVXY24N8D8v46xEpMM5v9xFhiUwibYBY1HUSV45L8v15EVdfLVYb3TqAqQ6upYV4Xf3wGo5apw",
  "key21": "5Bi9va5pHbJf7GrnB1icsMDFTigXEU3qsg2Rx5hGiC61oNzhrqhe9uMjFeLvDro9zxU4UpddGJeZw1drzqLXTJyT",
  "key22": "2AffXsKoPYgTXpYS7iCmEuCdJc4QPEDGYSXZ5Lew3hs9jmNkoqppXtkag3yY4deDn595j9bHFS6jSQn39UxtS4UJ",
  "key23": "cHBAYqxVHZoGiVUHB2WdpVCH1qwdoo46XWJf3fSQzu5nX7iJtzaBL1exSP99ZMY5qYULGPSvAL2CfKTiVY2kgA8",
  "key24": "BG1rwsca4exCy8CKoRPEntch4e51heohJXfcaDPzLC1V9zBSrNpgnVQddzS3PrWAZskZ29YMKi5HFguHbCYArLF",
  "key25": "3LJrykUm1GfgK8JAFxHFEGVpqUv2tYizFcpYvnj3fQxv9x5H278AgLYmGtwJHhYQCadypuHSKDXTFHyjbnRwSBZS",
  "key26": "4S1KQXsBXevAgcpoRPSx2H8q23xni69AbNvGqZpj9nJJpeR2jCaj48FvYTJiNv297FMLaGHcDizfzDXmDN7ZSJXM",
  "key27": "LbVrNVxxBNjkondPTDdUdPnBZF8yN5VdEyS8Jj1guUvBXbFkUvg3PAUYiQjQgpFeGbc7A1fD2iqhynSYMJoijd7",
  "key28": "25UqkQrwyPjCppyBqQEmsj7WUsgVNau99smzFhZETFvGbLWk2ePweAsuSF5W5ArP2mwbXQRQ85bcyWdcbXGjzVqM",
  "key29": "4mvEA3MzxUM9epJ2WyProzCD1TQifCLt9XuESKtm4M52YBFEmheqiAvxKvtGkEHrVm5y6BmynT2fCJRheQbJXiFB",
  "key30": "4b5QGRQS1MwQ7DEXbYiacL3xktpM5FpjUrvStCsHvAJFaZGUt7hPsdfgAXZH4Rv9r13XVgsaWRE5UNVQ6FywRXKy",
  "key31": "2d6fQ8FaZZu7MJkuua9sxQnbTA5SsaNWYMJMpGE1pAHWWZuYVQWKEpWzL5rB1TqZyK3dTshBntL8nkhCKqo3SKGL",
  "key32": "5acMo4c4BeN4UG6SKUPiLizpAATmAd72Xf8v35qZouP7knuatRMQKmjSuRJGZFH1kTfWQVE4c4cHs3S5yWkEnpxr",
  "key33": "46Be1q3jhqBiQrVuiQkQhYWsNabmVNoL1KZEwFnh3AuF7f96tdjsrGXAfTxoXyHXrTbZeLE5HCJTAc8SJhLCRno4"
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
