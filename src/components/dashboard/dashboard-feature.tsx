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
    "5qpcxwsfuVDkctdN7F33ZmuqXWe57KJW4y8exYLGFxaRh59tMB54czdikAR9yYjuHCVzx7wu9cJrkrWujcWcYYy9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "279Sw4j2yePZyaWsJeNDnqzsBw6vynSa1NqyxHWrJpjWuJv8ysB3Ae72MXBgYto7tkcgsLkaqpUQju9sVcffQkLD",
  "key1": "dLDmagCS8WYB1sVjSvB9L4tAkcu9QMLUSnnSeVDUTecaNAV1Zf67g266AnyprgEZtwcMZ33TqWEukbgvisxnUNC",
  "key2": "5CCGJ5nNGtAh8vKSw4maJKTfd34yapGPRg6o3gJT2VCcnu4JqCGUN4gBuni4stzJcTrxnFsj8kQTki6XX5mLECSn",
  "key3": "2D4hNmLW1LrL7SbvSQgPCSFSJahHrrPMaSFs3xqmQv9m6j3bdgwe9rrJqbuW1cMVB4Y3X6neGysa3UwvXLysmoUX",
  "key4": "4otKoWufjmEXAZhwzQ9HL5yjbrx7XNCenKykhEmRTPu7LVLGpuYz291eYWbBaFiPxhWcLPDgWf6tgyF6AwhUeFBh",
  "key5": "2PK2Ue78qJQ7xkYHXvHFqJwn2mTKxPXrmszLnRDS5GHzJZWme4fcbz5SRDzNhqaALThfGYYsjSmoUACooEB2JQjk",
  "key6": "2XqyzfrZZG1K5xBiukHYKxkW8eGFBsqin3jkdFTW2R8JZPWirntRpHDEsZ1jMkVmU7QCVyPs3v5JckzUPYFSxhGt",
  "key7": "cwi7Cv4Ermuh6yUsLSh3nV9pHjqcinvDmQ6H55eLv7RZrXfwWoBtLvbqeK9vWCr5MWTyBobSLjBRyXdyh9FfsRa",
  "key8": "3WvG62ASsjG6NczzjyQMZGk5LL6XP9psrWPQUALCrQRFt2xhjdRzuYaTk2bFQDJNLD3BNzJCerqhVK4fpY5BHiAW",
  "key9": "QdffTudSyzYP1RsXL4aB9CiNWJ1XdY2AS2mYWJmTe3Zu5qKyDiXSNhYnZaBqyPuERjWAji1QzFRznmQwLMGwBY6",
  "key10": "5n91QgBKAvbYQF2E112kTpjojtT4ihRXxTgkMNeGtPg3LraerKVgHhhDdydG7D6VQbLv2bo7D6c299LN94bdYtC5",
  "key11": "2SGvbyCASGAY9njRuR6e4mEzSqwSJGSM3mGzuWwXjhh9g3F1nH19LzQK4D3XnBFQS97z37SEmTvLK2269jbVVz2R",
  "key12": "4wbhZomcw14YrPeMR3XJxu2BbsMjYrtPSHmLCzZt4ucCsGFQfKo31pH8242KZYc2Mpf9KoSFDf8LEBPu59bZKKcd",
  "key13": "57SzdthmKSeDJoGEh2opK8Z36c9J7uCxG9pRbnGVChgxEoh1gtJ3ikVbQd9iEEXK9bGxhDUDUmu6PkxkhLD5mvNF",
  "key14": "gsSVNFbxWf7uKHWT4qGzdmYTBU3t47Zeg6CjNxnbZDjk1zr46cceqopRTDuJGuXgSguNFaee8XhttWfpCPKDnug",
  "key15": "2NbvrY7oVzgf6fJkznnD1hGkCh4okCKhhidvmAj1WvCz5oWbodx7v8NeU6AT9YWeqPCGPhKduBGY5pTCatbB6NqU",
  "key16": "qQkPvSaFErXmg3HVU2s1RKLQTUBS1xVMXKNB721UH9ZxKYPU8G3wqeqzyQ8RgVNJCDyM7Zux2BxeMxrw14BnyMb",
  "key17": "wso2ZRRT7Q9Zdd5dryw52Vns6rzpmYdjXXfbHYCRRwEk1yC7gfQGUMRNUE8h96yjkCUUUyw436ngKKR4QysD5Ji",
  "key18": "4G4PWu92jVAHDnNHiehp8AQGJ6RZVfBtGUBuSmk2h38wqsLiFsB2dKHYy8xDBs2H2oT2knLMMQ8TV3u5sQTF4fBx",
  "key19": "656JGhcjZhi8E5vFTEn3vAB9pSWQpW9o58FZZ72G5oADH9msmBPzAS7wygPbGuUD5YcKPk8Ate9JKmRmyvSWbZpH",
  "key20": "29vKNBUM7GeE4us1kmMJ6oXzDQ2TEcZDmymsSBcY9tMyUZwhYTRe3A6PZLXKKPjdNmtmqHXirB51seySKxc8eahV",
  "key21": "4m71GhBKeXKgdsfyX6Nm9QMzA9ibzrFkWkeSwhHK92i4QgZUtFEHA2dYRBcqpFxH2idXst2HT67QLhEM9PUQxdkK",
  "key22": "3PRb3jqgsWMVK2ssZxm2KBsYgxCfK1wKLeEnXpAtPWP2xNG4MqTuVUVbEWTVFZH6nDxmdNTw1GowFHi4o7aMZfAV",
  "key23": "48qDWk5xWzhCtnqPPMresr3Sr64CbNnFjfRw2yujr7sfgYeEBi18t3mP6Y5HbGt7Pe142H42ha1dH5fJEB7PpSUV",
  "key24": "s98E7w52DUqBPvw8wjAxKdh4Mz6Sc8pS73nDxcyxroEKoFp2dhEo5FUFdoEWpjfx413dYFsgcGMMwJeCHY5cCnw",
  "key25": "2BufsX9ed13ma5iV8u6Lr7CUaoVab9RLeLYB9te2R7EvdCnrvQLJT1uXrNc4cPxiB8TtSw5eiR57hmrs1H1rCv16",
  "key26": "638reaPY4XgmfWHEjPdcpmQvrH4vmi7JhDmkAh7NZoCwsAxgANnv4JqFUQq9RGCLYrsRpdz4i4FtBHs9q5xu6o1s",
  "key27": "27sQXZVhw2CL61NjdyLEg1aTLoKfNGuhdijmn5KhHdziieE2WZYh3RNhe38HhKZmF3uNBVedVJH15W3Fcq8FFeH3",
  "key28": "5CyvjT7zX37qRtxWHAMtrmLFkgyhcUtYUXXHRg27133TX4WSoQym8cmoto2VSCFMpi5sQeSW3fmZPruv8s6uZUfd",
  "key29": "5NvTFst7t54e1si5xRthuLsCHyRFmSuMK7WLC7k7kS5DFPwrJAdvPMz65aso1MPgRVbXXqaeK4ziXWU9rBS4q4CC",
  "key30": "pMG7n5aDSK37bSvcTovRgdn8MhVt9krW7qRzkSu7ARbagUx49hk3VoVKdrLphsE9pyaSAQszp3zqsC9YnCmdgDw",
  "key31": "3M1gtNsmxjYuQCnB4GDaidvV77mwuZFekHcydD8ecfBRvMmCcmqZA8oa7QvfvasREHB1EJK21qoJLLK4FMLnWg4m",
  "key32": "45s2uRqAVsYKLWZGZ3ZsqvUsm835CYoguJJj1N42B1YZrPzGKStLVPm4rWNZ81fJ3mQC4gWA3jajMQ6SsefBS7T2",
  "key33": "2gURcPGQWoWMtL56BLpdXFL6X815p8n21wNgPE6GzSRTAoYynhLVnJaqYZ6ucGJyzo9KmENLi33FVywi3EBDygKh",
  "key34": "29hu8T9w52eLodC2cHDnZVGawGq9nA1UfHxchTZeVgEzhKzgF3aWLT49vxTyZ6hEGGUKQWxA8yRiPYaRVwnquJNt",
  "key35": "BRk1xzUgAq2EGk7UHaszThdjBCx1FwPN6EpGMYFbX835uuCYTDv4ZsM2zDCCesbUCaQrPB6nCh2U4eQq15qs7Di",
  "key36": "5vkDtHZvx3etRAWdYwmmWUn3zHTBmCf6uaorv71G43vpM1D1n2Jaxv4vK827EFrJxZFAdj99VCsEEME9zjcJXNuT",
  "key37": "4FP2a7mwqeF9V6DEiJqbBig8z1FEaPekyWPWMZqYGES7oWEgZMqdYDcoAeYG3oH8krEyhAD7Ngrae6qjcUUrFhrL",
  "key38": "2WdFAJHuTdubAtDmyiG1XUvDQTdjomCzs97krcEeShfiJrFHVT41oyJX8SHKe1znYoH1DHcRdz9SmWbXPfWfWS3J",
  "key39": "32E9vmobpf6MChyuv8ZgpxHppebHSWUyzdYrGhj4udCY39uajtadSXMx3iXPbcF1KS42GMXAobN9YstBAHxpXxFq",
  "key40": "3FVQGh2ZJGp94mfnrvvVxRsgBYPG8JTwVgZEZBd1bC5G8cBzxdrkAE5rnnsRvJHB3Q9Yrde4FVSZ76yfTgHx2wQt",
  "key41": "3D6hLJYffUEMTNjGao45FEVAk6kmmE6xoV4o5CWyxs35x7RzQSuzQetZANpRZdbvLSE2oPKzPWAGyh8xjqmzzAyB",
  "key42": "4R8SGuawgvhUugbq9RSbCUZd2q8P9JXY4HNKXTU9xMV5nUojzJMmWtfXzTEdBezDXwDgiXsAXdG8nQNUGEj2LS2E"
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
