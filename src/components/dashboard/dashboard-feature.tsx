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
    "5oLu4XmtTPgNhuWCUU2nNnueaLwecmhmH3iF4rHKzT3HzgYDiB2erEBgXeJeefuEjvdHm4EiwgMAMwknXDxdShMH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Mg3WrJ45Rxdwb9kZHtST6SHo124JorRhN97JiwtmgtgKLFTEJCppViPpKJrLf1RWPRpzCfZSGWbWn2fiwHWLyPe",
  "key1": "5Mh3Cv1F2EACxooYwMgz96VwBb7u7KVFe4hQR7SUGVnV8PhGzLLZpUNGTnuKt3iQggSADqKs6ZAFNWrzCR43312q",
  "key2": "2mF2LKa6cLDZQrBzTSpUiMAT3EREd5UNakvDLS9tkAQ5KVkX5FkqPAhvWZQb5TRMijap5dCWx3YqiFJ2TAd1TwwS",
  "key3": "2MkstnovUQzN6LaD5sDhwuw5PnrA8p5epH1gT5dxwaRHU2vnnbWx3E76Cwjg72fTXVa5utVNhj4fuR38ZxtEtYht",
  "key4": "A6p1ALg1wJBxdt3FypqDuxrRuojD3YDd9hvqEU8ydhyzmnecGi8pCbagsotpKTZsb5RszoBPWbSvFpfG4W2YRer",
  "key5": "5utyUDYaaaCmfZybvYpCsuDaE9G2FQgSyB9gmq9FFGC2z64uMCSLPze789fJJfYLbk3u4X6EZNXhqXDxQTpzARnB",
  "key6": "3wZyCk2GdTeJ1T2KCwFvECiGqzviEY4K4Xnahe8sc2j6R86BtqnD1duHCRnXBz79x22VARmwa3m4tivGhuvPamPE",
  "key7": "44tENg31PZPe1AwthFqUZE1op84aUPfXPJd1CQ5LCVv3R36H1vC6fbSBLaZjAB6F77ytpz9DsLmG3WUCLpqtQMaW",
  "key8": "4tTwBNssj5NZwfu1Ksx1S5jzchpLbZyV26VtWSHpM5MzoCMCirfK8yDCoVJtrbqfb6AVibLxBY5ipKADTf1grsQU",
  "key9": "2ueKPY1HgPQfSRzDxfmoX86s2TrCtJtxCU6p1xfJt49EubsbG7P6z1RkLf1exokuxdzFsBQt6aWoJzsGrSfSWQDi",
  "key10": "4b9V5apAmZQLFsy69FdL1zA6qaDpUwYH8NcErs1E6FZoiFSP6MPdehmMjY1kqfV9VCmyVEhmMQdhx49Szr81cUm1",
  "key11": "2m21bECvd9eFpe6nvHBEEjpgUgX3DhMFgeMNDF9PFT4exsqG4p6zsCWdS4yutvQKWeTeeigbhk7t7Hx2U4MWVKaL",
  "key12": "B1o2PehCLp8Je223ZHeg9pnuJcooAvkMLg1gDUGTfacYWw7BdV7DmphQnj9rHu2H6a46j3qS94kB8sWSU9Vdanf",
  "key13": "coDYUptNYBQ7xE9ARJTYSdfQaSUAA6EdND4SLXRUKDEJsNEr6dNi5baTaYtboWa6MmHQDuiFn31BENwMwcnA9uD",
  "key14": "5k3HwgJVjoGzyWaPXiABi1UDcG26pcbG3BhkYrrpBi1xwW3KTL8ubBvm22BCXNjZhEH9T28Gu9fGe7GG6MTnk56p",
  "key15": "33sb9w2EJ1FhCSgQCyApjoWG6maQht89F9Q84hAN2jtbzyvoY1DDdGYVe9JgH6uYSFwkrTPnnLNDQFb43g12dLaT",
  "key16": "3rF9Lhu9GLaqmreyURBK15Aznzm9BZR7KiBUpm7AW1QHWSPZeDLa9rGkXNFkHQVi9VryCutQFRspqVX7E4VmphLN",
  "key17": "4oPpkKmTZdHqTj8d6jutH9HeA9whHxm7LvoSQXXohnFTJ28b8uGAETK19pmARdRR8hyXayNcFainppyRFXByNf5M",
  "key18": "2rFw38iZFY25HH5gijvSG8etmMYKoTcX5CW9MoaGN9DFNcSZPtaQMVinDrhQUF268mhzs37pxJ4aP5oWWwCL4fph",
  "key19": "4VgEzu82wE57CTfsQ2oPj9NfXA2u1xVAeV7GYQMAUHezV9dXXELTRhRCXkWrTGpnRnkQKv2BGbS7C137XscTGnYT",
  "key20": "AQipi5ZTM2zU3DkxXuM34uBEQL1tfQYvM6aXoTQiMWyQRjNobCwBTAAg82excxksXZsCo6CpKsyZqCTsB39sVpV",
  "key21": "4xbWGv5cCHSbz6SXW5Tdbg1PtRgbyPEQdJJZBhG6v8F32jiPhzrfpEPazMMMnmBQzaN455XFgSSFYomPME2XPVii",
  "key22": "47mpgJZp6aecFTXPX7SyvbzcZJ9n9KJBkNemRpUE7M3goCZg6S4D8hvhGPDYTVPBhoZKQeJCRaQCvtfFXnup66E6",
  "key23": "EhYm9dCKhJN3F3zoJNmup7Ft8xKAHZBmxd9YxiGezu98ovcuXHqz1Q21YhRs5ZBtGWFV7w7dv6oQZkES8E4njo1",
  "key24": "5xFuaPFA9KALyJFAVyrxwaaKXW5a3Hx5Ue8daBWWPPEANRfePLjpXX52i2ZskSyFVsCUYGLKgK77g4oNGVZrGyWt",
  "key25": "FPgpRYGmnsyd8XDbSrW9TaXCvmEYKGNBMNw2L34tsu1t8AU1fn88yvL5u2AoTGnbHVa6obHNbKNnTmE48BrNm81",
  "key26": "289wbvqHqXsfnR4PUDnH6Kuc98avKtmKDuYSKDGSisZfsMKBzCkeZ2ttrtcjd3q1YZjdoBNp8a8ihPmy1M7XWoPR",
  "key27": "iLxqWz4VYEhen2bcLeWKySQJfXKYGsYFF2LqkcACqczigVzoceutdgLoidxDRynwewm8gRy7gJ29Te6o2qQLHUJ"
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
