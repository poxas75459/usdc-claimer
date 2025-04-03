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
    "5oDW81SRNmJ5dA8ASsJHQLHxCeFD1SZ34WBG3y62Nhw2So9sSEZj4S8ksLhGbhATdDLBT8LYaoiT7nWLs9gverwq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oL3rurVTGdicSWTMzPBghPC32pGFh689XDFe2i1LPss9X3uAhzi6Z8zDNxh7MvfRYNAjsEpsjgw7H7Meti4WNNm",
  "key1": "4TryB2GUxe1w4MaJa2J9Ww9Lx8WNiRvj2uXDMtcXQp6uPhsYDRLeBrfzWGr1LGUYMyzGH7v6mA6KLc3P4F4cAskA",
  "key2": "S75pqWA98ZxQLAyriLnbdNTprF6XZ7oDuEs687tvYXhcq2SjZC8ZBmceSAPtGqnnrJA2xogdZi6v54BQ274oQfw",
  "key3": "5NhwaonXfcEFdowNxZbnhZ858k5XSKvxjvyaxSUr5UXKcV3wwn3HFnshpsbJSz2ybJ9QQmJVdxV9La2CHRmkf2UY",
  "key4": "vgAWDyaEJiN5HzjHqZrLzAA8mNf4sZXa5fxr27pFK8CsZhJnWVZNPZt2oJeugBf27cwV9UoT6iKFpqfhJJSaGkF",
  "key5": "eAMERBUqLN3G198RudM4Xbm3Te71dyspd1KV5NJV2tmkNRiaB32R6zpGjvGFS2dZB8RyyCmkSBxZyA4RwPYmBQo",
  "key6": "4KXmTmx3RNT4igkXrzGyDFGZ17d5xHbMMR4o4FUPKX9c6PVCoEh64bSxreE3MM1eCxYVkokZSsvPniX9C15gcFP3",
  "key7": "CEXfRwkn1QoVvPjUN4XDrPBp2pgjikamGtPDfeALJooWWb8y8JuqfZcS9sySSzjfm9aX231WdohnFi3QAtUCFJg",
  "key8": "3aLRCivpMCQCjjLGqaXSDFjYW9NAkvpWYpSzC6hxPf5AaG2NQksSbQpgCw7GezAhzSgvfGR9bpdWHdVTBbjf2EA",
  "key9": "4ECgXKGPuTtR8SrY1L6Tn7qCvDefMZTeFgmpD87mA5tB3mkdzzBmyAjq9B2SUfmxLy2s4Wz4CXDZ4ySKscV7ocAk",
  "key10": "2dthHAb46R8sVKNMEk5eEKaemycg1A9QjRxpeKMKn2jDYhkX1RBWwuScEHcy7J4zsowSjnTLFsVVzMxzP1uKBoGk",
  "key11": "5HPzpooZywdxoDTDnKTuVvBJZRrcN7qcuDTVgaoJZonhvFiPHXcdx3fa3YkQAa2YFiQa7P2Fpku3YGczghUX1939",
  "key12": "5ukUkAbLnBouPLcodk81q4ykv2cG2wQwCUPst7xMZgvDeG1dBGgoEsb9aiEPSAe4EPZ81P5jyHp54tED3vd4e7yF",
  "key13": "5AF2K1zPkM4zB7MmrdQNxeXgw727NNrBH83GMZNSkN3TJUBgcxJTErGuYV6zSh3zinY87fWUu8iXqTSyGn6CJFdw",
  "key14": "3scBV9VE3MWMEyW3KQXHhPeVe5xu5WJvfmYa8f9TH2kZkkgpNR2VbdUkSGZz1GbW5f46uyeyMATffx39544fYwr1",
  "key15": "cWhB1AhqtsoaYGRs4xidUmGfDmDVEXyNdLPaUbnN87o1a1hJ1s8xADKLMRN5X7H4JCPpAs8KDfw9svMRKfJaXQR",
  "key16": "5Bbz6fRhGHPLGrZHEEKn11U4q6HqED8owe5ub19oHvsuB3X7Cef61uSuMsLzxW7SGQUcycnWXPSyJSjZfZJLVrfv",
  "key17": "3zSAFSX5o5svpgDFHC17eQgemvV6TtKauX3YaD8q1E9UJo1yj4hXdTzqC2YdfAZGnpSLN9ttZY8q4K9woSJM89fb",
  "key18": "bxTXXRAAzXkaW3YhSMdyfonBJjBpjh1B1QcU2Pi6Z9TaAtxsTaEXoUPE18tjGAU4ws7wByjXSMw6WxctnXBWNST",
  "key19": "4BzQUeZhrgwes7d5UnM42mTnjnkNCTx263DgQLaDHDZdSts7KzVQebhPpG8wCVXwwucnpxkakNjEM6h167u7TPzo",
  "key20": "mSpheAwAPA6x422U3MGj6MF2R6tjM2q1WsEye933caWQMsFc3bTLhMPknLg6PKrq7CNbGMN4j27ueigQhu7isrz",
  "key21": "4jbcr9Th3gDV7hRLHaMD2ugrWawVfUkCYB3kt9PJyKAwuyoF6ZaZkh5D38waKUBozRg7cGCY3Q99xPj3aMMGhLmL",
  "key22": "2gJrg7qxbn7G5UMYMiDk1J3wgh21srXddumADNJt1HC476b7iqQBvLUFC4edwyneSaMs5VC34mWKbTzqbuJcSQkG",
  "key23": "51YV7Ls727ZsCDZgEFE75dLQcdQo8MMzB9gdVrW2euna6Tk4VgoBThGNRuQixe8WjUZzdp4715qmohwkXfso4sPz",
  "key24": "63P8BCrKPQLhbmEXcD1qP2Xhw7dTcFNzD5nVn4UMSUuKGoKYN9v8UkNbcFvKZ3QBsjLNmVwrPBDuqGy1Jct9jBYt",
  "key25": "61eYj63xD84gxSfF6qsipjrRz15nZp88nKS5MaKh9DACMVe3cveZDUeNoJJS5USr8N8rpvC19GyNtau58z3W6Nzf",
  "key26": "5mrpfdypGoznBwV7PPt8cArDkssGrXPdEwSv31hcXcw9txM4qyLwyMow8ef4og3Ta346xFsgjJFYTATjUj9MP2it",
  "key27": "3jGsdVgkPHo9cb2QaR7vLkGgFNRfWoxM147dbgVWKLiRHjivQ8pj2wnE9c4SdSgxH9usu9a2Lc1zNu5MHkGQpvV9",
  "key28": "TuWkL5bxTjEJStN1NMjXKuZTYcwE6k6Dn8x4Ap5C46WYkTebBvDJAbTcUT26FR3CVHYAcNXYRQqhsZ5gZN85z61",
  "key29": "2tSNDC7bMZjVKJtAkKRFUTWhi9955uK1Fv4jivj1PUgJVFc8TvWxTqWAaL1myN6g8NzxnXXDqB9n37MzFayFpHyj",
  "key30": "27Z5iYS8KUuQYsDFEk4YtEok46ph58HB9DFdeNvGVds6CiW2BCN49CpvU5YARqeg9UiZNAyUVNGFV1jbYknyjPfY",
  "key31": "c4w5fkL8BciQGNm7iqwt2Pb7QcdD8jGmJg8931pr3e3K8h19mz9hULBSMWKn9hF5TiF29ppHbzqYv8MBxGnEJQX",
  "key32": "3SyG8fs2cRBXJ1Fab3U7bVbvnLkTsotDVm644ZSBLrZDCbZQMaaD4wruGdZXx1rDP8HeoSexqipGfYXzZ5Bh4LLv",
  "key33": "43kzXgZawKiXCuMeahBibC3vipLWhMKAnZsKgePUTNj4pDqHo8GZGiRRx8CtYBjsXdFXNfQUmAsTSxwwDiZdtgTR",
  "key34": "3367tXfeB2AgZTpWU8YgXPJTsoSvR8gePP47aL5GvKvSLrz689WYSvKx4J2pCBjs24GTdL6ytxWfYhEihPBHtn7A",
  "key35": "2pD29iR9cx3perh85PzvGwGCCZZtPTKyrwaq55MQr9tY3u5MYZhWQK9B2ZPZLgPg7y11VJGwrzWKPpiL7MVrPBps",
  "key36": "5v1RMzptUFfzsuCGfSr26T1P4Rq4rKFa2KsNqVHuwWPaTw9qA7zv3ausaGB2nWmufjR8EMfaXP54AmDRxS8bU5KH",
  "key37": "3dZQGL2a9PSiXzNGhJWQC2zmXx9f3gnEzJ1PyYGPNNnKwtgrU7Zhdgcm4JqSAUCbZZSf4Vsv1PmqJ5TGXcSh675K",
  "key38": "2gyfRFQgGtsf2BcKyKfUKJmmWQ9fkwQrKb6nnqkPYdiCGEFZRiXEaJzayoxEqTXyS57hMpaJfW8QeY37nGwihBT",
  "key39": "yRLp3gM52B1JHNoYAxnNds4B15T1XdWwiNKnxN9HbhQp3F21zXFxTR59RKcHFEuWg6xkuYZ1oUH7WVRsL9pNjXZ",
  "key40": "5ZZz6YuvpnCnPKFkV4vnhECQTwnW5qmSJXN9XhYU8qDpZySX1Em65NFA42wfbxZZ9gYPEBsPNcv8eP1sKSrZPkfE",
  "key41": "4CZgR793PrPcYDNaZc6f9NNYcPeMApQA6JAZq7C32dnzngwvFndTY3MboucZ3h5LTh7giL42iPLu482u63Eh88CV",
  "key42": "wRUueQDEUHZd8JGMvhSEz7TVNHi6RpP8q1nN9npEqGTJNo765xsV47n16CPtD8RZ71qVXzmWZfVvjkaGNKBm8oG",
  "key43": "4QBdTrZ3HgXsAXQj1ZwGRkKtivAcJY74VJp9ZF1QxR8XprVYy9e8t8h2y3BeQRdM7rYcdQ7nr8stqs1PeFw7J7GF"
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
