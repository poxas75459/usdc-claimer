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
    "2iNs1kMXByLgXes7W2ZmkREhM7wS6URiHf2Q1HWhKv9q9kFv1N3C11CdoCyJvcLahkJh1K8AELL5m43dogcwptmZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y6KUmHe46stXWjF8v1pVyRHtL9ERd1NGaTUieEo4wWbr9MoHNhmZDmtdQAfNfCjSasiHkHRcTcfGPWck6mZEj7d",
  "key1": "22APdus2JV8N6LLR7w39otKfTRjMKKyoZX2auvaDYQ3kJ4hzCMJfsNAmRLGCRgABeBhB9Kz5iHMfNTCV1B18q4wh",
  "key2": "59n5NWQ1Xbsx6rvGrg6z7ACg4MqHL5A3k5zs4JFrRJ7jGSkGFAPFmLsrVK8RgFUSPsBAhahkrTVTvKCU36qeVTMq",
  "key3": "5XajKhZULJ2X1mif4JQCWPuM4BL3G8JiWQCStfFP9opct2xdEMrdagEr3mnr82YK55sj8Wx2UnTu9pyb3DfdnW1x",
  "key4": "2W4gYBDBZ7mi1PeAbPMuHVFUNRPAWHbNCjqcBSZoToGzS4snrbEmyHFSCrBvp2eVTYyUNKi28cbt3XXznLeoGCJo",
  "key5": "4bJj3zNmytiALqWDpTNYrTCq7FHzCw54hXphThD53DGrrMLZ16UkXfrJZsDXxr584dbtWr4anV2e2dhucTfebqMv",
  "key6": "7cv8JgBK2AS9AaUDzyrydApZcuStNAmGoRN2bMae3ViaPhevuhuqecJjFfvt6CssNPAkCQJoGWQVDnz9guYg7kw",
  "key7": "4kQ1LeqL1MUJUj83rzkSMJpULccd6rb4ecz7aP8aUoudhk8ehZdTsDoF39b1F5gc5H3egVFGKn3ceNLfVqBqbMeU",
  "key8": "2otTS7kmqeMVqHC84ga7mpSaUGvk9hQXW1YbDrsNPN8nzy1UpK9R8ZCjkwWzxAh2PFbqFUMGKCGnDvG41XM8uSxQ",
  "key9": "ZnF9oTmzs5Qoy5JaSMwvnoJqxy5ppgdjj119ehWYVQPx3qaDaRqPTBsNVNYFJZksCeqMv8XbnFrJbjPjhxvcntv",
  "key10": "3NdVZpbXi3SxaDgPCYH1KwfWZQDUwGQu2WBYLDC2kYFpPHJYJo6Ta3eCJRX8wvdqQwrCudAgKJDxwVzNYrJB1QRH",
  "key11": "56Jr2i5M3PiudChGKLQzEH26YiHzxphuGVhdRVs53w2zQfWmm9kUk1hohgnYVgodrY1hemN1vJWrb8z2VtC1Fv66",
  "key12": "5ichru7fNCBnaKpqeSKGqCvsq13ivuhK9o3fhmNbJXGZHcwtPRx2qhPTMGzidGT9U7DoVEZygn5sF7raJzHuiBXm",
  "key13": "5zTUqtDixABjUcskvPJfV4w53pohEyGwoKrb6s5orDEbNA2vCqdrMkn42Dun5tr1VfRFTq4riKbzhMx7ydrRYYUd",
  "key14": "873raRS76CNfY7wa9A4jRnEYT7enQxtiraYHWW6cYWuqEAzQtt6mnwWdkRSyKpCNV984SpSnV5EtLA8NRKFfNvd",
  "key15": "5qCuJgJdyxCtvkVx2Qp8cJf82eN5xDnZibuoeUNcDSbrGMkUvk9yaHXWSa5vDR1CCoh5ratXkkVtjKeKNeyYfYaJ",
  "key16": "2snaGFNwEGwnne8oXtTNnt9E1nEK7gGGv2iBCGRMR9osdSJVXE5MwEYWNXCReCj2dPReeQPZsZ1UapWsgooWaFDV",
  "key17": "5oBVitJCTcgzYgxZ8TLM7jQtTmuWEfrnvTRNMvt6b143CHxWCUxCCjSkKeoFXpbJBs26NEKYaUxYdtbyJQfiuXX1",
  "key18": "4cH6C5wgB8uRdPkN7eSF83yjwMckCVDqQAdDxCcPykgEu3Y8eVAMuaGSQF3TaNd5bp5YSsKWsFPnPUVh8m8P6oQa",
  "key19": "34jigtLtmX8zsfWkr9A2SHd2Z3g4HWtXxhB8AUmQV1tqmCssKNJsV6KGMoVFazKfdk8CpoQb5sAA8amAsLXEXBvF",
  "key20": "25BzH3tKwdR6L4j69VqqUypovJJEs6CfznZfkD98y7whKXP2xFGrtAHkoTGUpXhAnyJ9NNBihiz1zs1utkn1LuME",
  "key21": "3WjdtbznUWQtx15n6VBTGvTSqTUg47p4xTfs3GFFSDYyaeMmUEr6cDLxeK2Xgju5r3XVXmKc7q8Ego8j6VQuuTGH",
  "key22": "2EXv376mRoh8hSwsnrpupSk6nUa31SUP68xkJkxgfg9wD45vNZzK4cxE5XnqKY1Ag3XVA4Nc5bVFvzVYkKySt3f1",
  "key23": "3689q57FvSD4R5GG7ZqM3dQPQjL7mghdnpvEi6hns4oB7crofyFDbPEjDrJE1BNrUAbjU7xNqvSj1BxM3cMrGPdG",
  "key24": "3hDL4LTp856nvok8EByHtxrmCQK9qvCt6CorgJ5XQj3R2muj2rHLgvwreb9Da7REHsoxtyvgDaZR48jBebCJXyN7",
  "key25": "25E2bheHAb5goun84BvSv6iauBZK8LguMWMP2DYFFtiyNxefvKAkr7s6Sz5gX2y32MZVpfZMyhUqBwHpoAufEBng",
  "key26": "D9YsHGKLCh3eYozz3oLocsHtcqsZuQUNmStNd5GEMywdzr3SNqTaCWsmFvBPukQ7x6LdqM8VWcJKdzDP2HyUxvS",
  "key27": "5sXPvs8wqUgVKRHtMCqVTshj1GEqvmUJSfMymVdWaPKB4A3EyDQbA5uGccedtUuu8BPDW4wjTjd1QSz4GYKqZa2q",
  "key28": "4fJspRcqEGq4pCoLnhUoFLpseMx8FM3EhFVawZej3zsLkmx6YFyKDS8ePicKFqcXZeJ7akpUQgfUNRnPdimj12D2",
  "key29": "UFTX5uWkMK4X3sX24zZUfvcd3BLMTQBxjuEW4YofwF7wb4Fw62XoFyMWi22NFqHdNmaeFhY7GNn9KfeU3GGXbUo",
  "key30": "36W9cNGtpMmXHtYC2gQnCGXVikmgbN8mX5gJHseUkzwxYF3whHJVBGWMQvxAhy8fRwRBgFKEdzMHXwGzwepwZ7kZ",
  "key31": "21LdD5j9L8mjQsqgmaAAFMPkGmdJpRcaAkzRRbQs85oFbm91f8Qj3VLf31E4XtVGHDDPGTgDaSm8dLqesuZHFdp5",
  "key32": "5AeRZZmA2Hem4husPuyWHMPtGb9zK39uGSNLtPUUbiirZJ4oouEizV9rJPmQGp8q6FHBsSZLPcWaYA9Fy3a142EK",
  "key33": "2u8nuaPF7YaGmUWXr5a6g6htFTsVKY7BKczHf64SrGW5bRzfWvN9TbTmEW7qbVCGEcukz1X9jxZ3FiX2DcPqewdu",
  "key34": "4zitjWLvr6Lrc7D9wXruk6XjJ1wPNDnv1CaeUFxd7gQ1D8g6qfNFg1rVZvbZSWAwHJA8tkk3s4WbdQXsgJYJeZWG",
  "key35": "55E5niL4KSXJishfHpcneLhhnRdkhHVNHQ2Sz546muSuaxgya6GMSHKc51kwigoE6pWW9BSoVF8uYWC6HwNm8DWp",
  "key36": "3dQei8aPfiv5uP2UBYQLpZHB9Q6XRg2Ht6xTWiaTabud22dfjT6tkZPYGcUZw3fQ9uzEUhUDFWC5Epft2BBoD3Zy",
  "key37": "4YwrycBH9Apr2fc4JCp97Fj1rZ9FnP8eSH5uevsz6Bos6bMB7XB6zAXuNLEe9Mzqozi76o77fDkA6uUUHSor9EqC",
  "key38": "3J7SxsNHmmofuTSiDEkt7n35Aceox8kfP9tYQJ4XFbHZUFh7VXyronYZMXezhmTBTemVVatVNFrbRBXBdx372BDq",
  "key39": "3aXvAZfQRHrH74CbikvwMrmiTHQSvS7v1BziX7Rkf7L3zQJYGshDmxajRmuKofJEy8o5XZDfMLjShUfU75hvfheg",
  "key40": "26TBTFZLGCXWU9i3ECqLUnfoJRCGbYuqqG2WkxW9tWqcnpnYD8oVdWPnkCf73fzzQVNaQKtsDydWtJVnmKbeWyEp",
  "key41": "4qPzRmBDesq3eb8wKmrcaWvw9J29svsN4JEF754kDUJ1rD3rEAgCz8jjVkmP3RN7gobLTY8RZHZGW1sqbBtKjbpy"
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
