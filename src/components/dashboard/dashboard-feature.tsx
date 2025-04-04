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
    "3NaoXQnFedJVg9UyoRbgftSLMAB2RuzJJYktrjUCF37RrB2mFZMWqpKCok8R7t3byKytjYg6nStZeXA7bhXgcS5S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q27QTjzfsFUzKPLSwNjHhmy6F4fm3j84qw1KAj5Px1WhnYoq7a4JUD2xqiKvwzoyg85GyECp6eVEDat9vcinJA2",
  "key1": "27nD8NRK5aHtd4FboLpT8pZkkfXwHbKvHB7jYsqvZ6UFEi4TCm4b7Nqmg3LJXy3na7U9zdduyEqwcv26pQDvFTdp",
  "key2": "4n3bf8dbtDnXYgwXgmUkdkkjioxzYtg79822Y6uucrRgxGyazuUMXUddHXPKih6uHQxWMWYHWuvy7gtxQzoqWMFb",
  "key3": "2sy9Za8JhfGxPF4LKuaz5GaUaamzjkFAAQyhyViwv3BXoBLcvRqS8PAKvAgNK8nBi8qLordSRYnMjstN48j7Tgjs",
  "key4": "3Yt9og9q1EjwhpeFgsaNeZbBaHj75RYmLuBcbRJyiSDt53Gy41Wp3NkyAAZmdUik8zbFatLkaJv75GeaeY8HNfE7",
  "key5": "cS1K9vEZENeNUnvp3vFAz9dUvfcYndCTfhEaX6kbK2Vq1rkAxFgQYn5qnQhKMAGbuVi4WixM9ibbK5nU2PwexKN",
  "key6": "2omW5McfruP63Vyjw4jsUcWTYZz4RBd8TcSuaZNpG1nb3hn5afqm7NzysmYejvong78QBuESbBNNB67HD8YoE1U9",
  "key7": "KyjA1EA5JpSiSMg1J4XwDBNU9eYgLhJATcr2N5EYUK9orPEP7qsqVvPKBD4F5H4JmVWMdpJu5jrtC5i8j3TD8u9",
  "key8": "2AcynSsNPgmwJ9JuhJsqDjLJkfJATdBUz8qHenDCfLVqBj3FsgNBJUY8iKjuN9vutJaBL5Cxiimnz6bMLG5K5Ffj",
  "key9": "57AEgJNyXtCVY7sbApJ52smouhyj6bBZbxDMCB8L7YzAsV4c1jPrZprtxJERwHw7xg8UVhyTxYhNr3oTJdCRZ5S8",
  "key10": "5gNaLQEXsRbj6iqEr3PqF7H832YJxVMtXFni3JXEz2SPtkJyxEmnkGbbs93jLo6fVbfqKBFJNo3YXKGEcDjN4R9a",
  "key11": "4wDaZNwK2eCvo4etz1vUnHJN1GYNLALn8xZibPsShNkcw5NA4Lrt893c8ZCSTzCEA7S93vrKiuQu8n8aEkHK9Peu",
  "key12": "UsqpCBskWVNh5RUrajy67A5kz9DbNRc5R12nUQc3PP8QWXL3gNuseumtiSugh35kuoeiPHPyYWW37KvXp7veLbE",
  "key13": "4JG7k71BqvbYUZgUFcY1rZqk1fBdAsgCPWd1rFnwH44kXsP5g6G74u9XoJfowLN7CZ4LbnM1UQzsK6hU3c16wicS",
  "key14": "2RE3Ga7c1ToGCYFESpooNJMRkN5MTNsyvnztCbP9aW8ooNDLWGWVJwpjMe3rFPpvREuvaHS8h28T46XqWKqNVpZu",
  "key15": "3erPQzsy9QK3jjP3WXSaGPE9DXp8jk5C6Tex2NFgJcgbyPP88cEXPgHZHec7xaXvgrpyWveCi7SEppZ4G1dgXUzq",
  "key16": "4K36Au6TbYmqiP5ZcxwMNtkferamvL3PVtqDUWPQe1kpABs4gmWWtaLZfdL3tUuXdxBGoiSmZ5Qt1FyjgJcXkfwM",
  "key17": "SbhJrkiZpvGhuRoDvk7kqmTS1fJJth9mo55RsrUTJXgpWdqxFV4arXSFTJf4EdEPiRxiJtS12NBvHjJYor5pDrg",
  "key18": "4umqNZz7ndEaUsterWkp5hfemUFjBbYCU5RxpNwL15EETkUNAvvfiXYu9mEbCMetRY7JTFGKPeSSggFxremZ4Xcd",
  "key19": "mZiu7gCpWLpXFYjBb6WCC2MyhDeq2KXWYQTXgJ5W5vjk4VWDC8vLUx2C5qLdtajoQNv2ukQb2KmWZJwrPm1UPH3",
  "key20": "2mF71E8q8HwXCdyxwMtrFQaawsYHfnKjsGeNuV6gyXsmHi2gkZZvbu2mLAbiwPaRiJhcQKje6qYphthmCkgZhqiL",
  "key21": "4J7oxRmJ3vkH7pNGDurHy6c3X1vL49MW1ptJa88fkcE728obMUJeLwq2C3CLZE8GW5m8Un8bwTbq4ArBqLYaDHrG",
  "key22": "4UehTZQvWJYHekv9XfMPb8YPyW5zSFeuKqKMtFEJAVfTqzoBgUcN3yQx2jYQMdYZBzVpj9g9VGkJLdJY9FzqASLh",
  "key23": "3BvfG5552JYMBCZVZNwd4uN4pPuoz3NM9DtMSoajUSkkj7r2P2sPf3Uv8yE85bBUSz5MsfXJqvesuvvudQKHKt2i",
  "key24": "2F8qBktoVhCzxKCBM1JXTcukPvAEw3jwjRYTFX21hBNFFwzruhTxCcmTmJ46NirArEncWqNTXVR5JWBRwK89dPQ2",
  "key25": "46UdvpopPnaJWoU3XwNPY3KnQpUPAtK8XjEyLqHic5paznxgHguJEjTXzAHZqbmTnT1RpnNHeqEUVLKAfR9xkE3A",
  "key26": "2BJCutEDXnRa9aWebiAqK316aEHNUMVtK78uw1GdMYM1swJdrkA67mcYptRBQjx6TSJqqS7RKE8YS2EGTjG1Ktit",
  "key27": "4ZkvxpEuv6RxCtcDpaZofaJXGGCfhRpo6uxXk4so1tgD8zCY1um5pRvcUXcb6k44P4EqRrGZcDtWnsr8VodZDL7r",
  "key28": "2D3uA4Nvuz48nyntUhh1ZWPqEQKb2dji9FTeVpi5SHow3u1CSfJBVVuRPcWQuhHpK3HCyrjtGWAX4h6qiazjVNWB",
  "key29": "rvbTNhwNfNuF1wuuo3rRaVbWcPo43gZgbp4jym4QhdCuMVnimAEBcFC4isCa2N8FuduzFe7fQkrCVFD1b7mjNRF",
  "key30": "3zX3AwxTJTnwiAtDxbssn5yvyiBTd5ztiKTYazLy3DKRcKEd4BxawevtyqcQtXRKWkL2HBQLmfeafWLP5LoNJQiQ",
  "key31": "5QwwqePMNtBsLzwp22VZNSaaAJgRy4ppCAPZ5n1xhnTaU5kRhueQWvUo7s4RGGr86SSkYXNezsCcWzEjLWLoKwLn",
  "key32": "tvnYMY9GeeoeNF3gGgrWCkREoqRHRQ6H4QYvoUQUFacfbNNMif179ZaXeQxtzd7JLfMGkgX1VRZAja1Wvb4eL63",
  "key33": "624woXTZjEVX6qH92FihpNVcub63W6XwSbzPnGJUjHW7vmy2V3fsk6jUBZ41yyLgBL98nXRq6bD1HYJ82f5ycpJS",
  "key34": "2T6VcsFEdRhNueoNy5Cd5XMNX6nsb4w7zNZdcexsusYdhhqxj86ezQiG6qxtTG5JQh3WHfoQML1NVh7gmMNWCWbi",
  "key35": "3LGNrLnPDgz4KMXmKMzaTjkJqk3h287Wb7hnSbkwNDPkEimT7JuDgNv3sfaAmrbVHvMiqMLM9H9rpUwFD3AgtpzP",
  "key36": "4NY5N83YxBprmeeqXcvoyPqMahXS9oC6HYq74fgaTo3CHnzD5UpQ9c4MZcQHWbv37wgriD42v1i5YrgJ1VJgDUBv",
  "key37": "2F7yunTzfR1UYnu82YyPAJoRkbzndWtNKqNL9BVSbCFBW2iepsPPhw35ymWSK4eVvLmrxn6pkLVKA7WijAZXarbR",
  "key38": "49ynF9c3tgEzTbQCdFfxCGdCRfPoKVAsFFRFKqpa7FN452qZbBbgPmcvEhqs48iB1oxwq2n3qVwCL9vwLLmMo9Un",
  "key39": "2d4Q1K3zyTe49YkRMhHR2GSwWzvu8M6ewdpfCBbPR9p2cyX4z965ztiFuYHPxbchF5FyuteCfSnZith9iYtTspAa"
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
