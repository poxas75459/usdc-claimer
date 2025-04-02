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
    "duTPGF49FYNYy9vtGb4wcpH31gZEhHjBZwkvSoGUXWHttTM4FtEt2cuKQqzVWhWWNfFPJUUV8jq5Pb7nxdaXyxv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NmfyHHaEJzBoXeTHtVWzsUfMZ7C3s4C3w5G1jyAkaYLWuiYVurT7L4emS4wkXMZ4fHDsoo7LYRT5ky8DHTyGgfm",
  "key1": "24P8yMZfBLDz3kgmHJUL4MTaP8rwdqNZr3k6NPdU6eG3sFNthr4cfkZVt9GY6Lv13KMpQofXJ7cLhojSwFMEu1cW",
  "key2": "3hXd8yVoVix313sVBzLnGC5g8c18hrYVc8849WCtdhg4UcaEBSDRx68NWojcLWdvNUHxLmCsbKJ7X8YD2Qgvw5Tb",
  "key3": "2jq5poyAXsTfVDGDtH1E855YqM1CWAxKrfhrYyj9WWzh5YqrdJhMdzRqHAAKVeoitPsdLJAvfsjWE9hVspgHcxJF",
  "key4": "5v1yzhvrSzTHNHd3xku7UJ1MuAt7NJjH5aBmP3jeFnCTSPntCXPgcS17LiDAhY9c6ikpUGgLAyWMHHBPStDzrvGC",
  "key5": "mKEWqseoYHXdYeTWjV3aJ6Y8sB638KXumkWb39wTAofkvj8LfucGqKMK8XQmi3cuMC9vVH1DfkG4xAMK9yTpk58",
  "key6": "4nV5GfczYjPw4hMSEs2tSLQgAGEijJ3hQ1dyhYRUXMisH95MDAw9mpmTHa4hDJze7wE34a8Xq78292gaadjFiLM9",
  "key7": "4D5mx2t3LuoGKcxJF6zF6GYmiLj4GKzMxy8MgMDxYqgb8MsQRqtYiZYAWiW7djRoUtkQBTgzSCtrQBX5CrCFZTfm",
  "key8": "32upfXaJMv2sDU9rfKCooQ5Xro1CJnTB734WXSXqDwcxhSgmWBZoeur4mXrvgBxa2ZkMuNaaLhFxaKG1FU6nXq42",
  "key9": "3QTVUiWLUmuBEHtYkCRqpRaGtWasRZDYwUYHPkQpogoyZybb3MKG7nF3ehv1uWonetQqBfnFD9JtQYkxtAAkP3p",
  "key10": "2FH5Fa3EBrwZgkE5tejLRMkkCDxveX2bayxCDfbpKCkZpCaop7JTe7NJpb8FTRszkxGdVHfrj1gtYpsfQY3tv2Vy",
  "key11": "3qYLpxf8g4JoKCkQsRU42y8aXDdXKuZ9UT4YEhPQZL6Abr9cXj8dDhVY8LMeBEzxRJs2hw5PzL54kpMbExcgAcs3",
  "key12": "5NWJRheNxgEHVqXZpsVwTMEpHhzQcfReNXp5CmELYv1FsJ4m4JtbhqdpUXE1wMpWReZiD5xjkjy5jZqY5fscUwbB",
  "key13": "5BTz2pa4RriX1dK4gFVbZArLMf8aa7rx7cjQQo3jpRHqSSux3bGcN1wekAECDDFTA7GC9LTrxEvwH5VWwHStr5xn",
  "key14": "2GJDqzZ2MviLYoXMFd2P3zJjW1YbCU25Kg4FHTJHex25nAA5zuVwoXKUdCnsM9XLCX8La7SzirV3prCgdGDvMcrx",
  "key15": "4bCXUMGzxQvawuC28Nx26R1ezUXWtjRP2KDMRW3JL1PrhkocMa5LVSSVsXNPCEsan8hDKYzoJ8mwKDKs8vG2U8Lt",
  "key16": "3kiAiqJ68nKTbBC6WNXi8Gpe8NgstSVqA99Qc6ixADvVdXLNT2dCEx1ikL31t9Bo6DEmKDLgbjFq3oN3Pqj6dq1",
  "key17": "ooRdVm4Zwa9MkWnSwChLjZ98Cx5ibJB1XJAfUpRysmd7A44EXtFyHvn7d5no3kbuaCHGaMg2nwoywLaJSQKEZ3S",
  "key18": "rnDY5MUtSP7vkZkGkcMmhGkuNATHbnvij12GX45mGStcQFUSeJhPGt4xBFe4RRr39KVH4RW67WvnyLrKJENcRy8",
  "key19": "3FDWFmNKBvpgkTSEQsupJyJi62TH1obGAJ7SXLWwHEC4Bc7j99QYLDsNiygSfoDsRLuJGA8i2LNQMThhbdu3uXc5",
  "key20": "3Qq1XyCEtehQ2ciMqBrLukWruMWrG1Y6YYbAsVjvWw3iKiiuXUgf2V3tqtVJnHBBf3hHjkcB7u54R35wm9rfRUdv",
  "key21": "cxnd2mMQjsc8bS1BcUQGhffWx7gDRqexXcjhABL9tKc9tdCGqv664ujD4eLhYLEsESdo867P9j2fSaZc6NcT5Bx",
  "key22": "Jj39VsHEaSiYTXes9DixUX3ZNQfgsbHhi4BENDHQ15JeRZLmnNjuPzCLbTDuLAmMXPWgpBF6ozEik5YCsLUnf7s",
  "key23": "2XGrmsqkmSp6vkCdTo6hAtx9zSkiP64yYio7SCn2s95g8usEt7DdbQtxbJcFWxwSqDwWxK6BYividrEGNdzSj8Bx",
  "key24": "2BFPj95FVMhAAVKwwHDQhTMWfVmWZGxQW5o3BjA1cE1g9VQe1rkYPiG7NtjuCwpDQjAZYXkj5NUWitwq5MRQyjGk",
  "key25": "QGsDK3AXiPzKyAPdrjyNZ3KwYmZL2bxCdxAN79hwVxeLTzmK7m8Nbn83mFhTJ2e8abMZrM4FqpWznjDY6Yn2rNR",
  "key26": "638Y5kdfjaTA4AKcXewaznDHZwhvXdc28hpS4WCi7h1Lka6mkvAwr3DN2zyRzGEgmXKdpu8ysr1G4hPxmngercGj",
  "key27": "28iPsdJcXPjv1JLapAZcrXZoqWxSkLi9Dpjnu9u9oz5cdhLvfJvoGB6HkuuPbj1Gr1216HN9eq7ob3HEH6oeuz8o",
  "key28": "59LX8tP4JNzS7AFhjfdf1wxXns1K9uaUN9RLQLW9dowz8zTLB5u7q2TbwfSMBycS3TvLeJ63pAEzsyDYb3GAzDtn",
  "key29": "39g18Zu5iABaWoPW5Y8XvsFHD6kRiDNwZZ4dfU9CUkJhbwpLYWAtabZ3TjnCmWw3FH8Q2sS5PjecyP775saQgaFi",
  "key30": "5Xgg42ZPWFXYZBmF3ZuYZ7yBBLna8XVRDxz5PcUTFXUH6U2kBFdv1XWqng1CB17Fqs419aBVKfPDKjUfxHN1rv4V",
  "key31": "2JvDKyWC8HL3Pnt3uWHgBiQKGzh4TsmHXWQxhTokZAyR68PfLqGvLUFqtz1iMke1K75tkmWKb7yCPFgLeAyRymAm",
  "key32": "4VsC9MrZE1WASFeCBvnxcxjjfJWkWd9Ui5SoPdmngbVQhv293nZ3qi1zyUug5irQgZCMd6vTVzaMbhNpZiYduqVT",
  "key33": "5sgQyNTsXy8mwE1zUs4eta7TMWRYz4uyYBNu7SaZpNaTzbhfuCef7RnyeKWqXoBiM22qdiKuqPbZBNvm6bcBZye3",
  "key34": "4iWTgAsV7WgPsv5Vt3FCF5KT5LtpVjjJ9XiCa61KateE46tPLwB1qugrgCGUnPCXUjApUTArikHx9vb6q1x53Y66",
  "key35": "2tmEGmW3GnBBGS1C7KNE9YTbmEVB8Dtkr9X4ggAJhj2q1AVWMGxTfFHxSn77dSnaWf8KEchePLyppr466yypZRXc"
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
