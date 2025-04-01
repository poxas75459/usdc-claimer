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
    "477ZUoC2kJUgFSeKoyWvfjo7XoUaX4hXCsXqacLTKaLRbKutxhsMEmh442xpPLUpKHBjVGxmU2P77zjMGFN3hUh4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "487GY6eAMXYLQZ85y6uV3Q1CNeR3AdGdnA6TqKBqg1goK1HfWFTBz7iaKjKkTFhMhSKk5vJaKXNr2PeUqoVH3AYP",
  "key1": "4T6Mdnb8xMPxHKYpoSjnwqMEiP4vQWq5JNjyvmMDa6jBEThiiX8zxPcY9ipwdNixR8DFeK1DWzwCz633hKNJocwf",
  "key2": "64Upx7Ur8zkJtjSoA5kJ1em6WRp6CTrezDGijjttbZLgE71MBUPwAXDSF7oE4RhAxeFBuudaLH8ReLWLDtFicLap",
  "key3": "2qMaztMmVnCXgN86J2KpMaX5eLHmyHCJTnaToe5wsQTmEHpKbisXQfaYR6npWe6VBFthYSPknLAGK4a1jbivuzBC",
  "key4": "4VTFQvWLPsA6Pz3ZGG4WbAVjvQJwx1wrksge9nQUwYi5A9dT7isDwMqaX1ogP5vCC8CmTzVzWzh4GZ75BaxfrrGg",
  "key5": "8GH6LXKP2o2zrZ1kYaKteXFPskvibdKpwFAi4twM1Kr4NDm1PPFZ74JzERCN9JTQXffHtNVMF34WWTQxEXZRXH7",
  "key6": "2uxbLMxPKg22HghE1Urtge7MEb9zWg2Dx9ttJNzyq5o8ozRqptbManKNVU3sgXbJhsBR2bcRc8n64LBsvSy3HHjm",
  "key7": "3gg57sZ3FoeNhdwkLLSxjU7iaKUwb7fJLpBXP6otegKjZH1p6BNQRoyttgVKCTkqQaJ3nnrcV7TLmbkKJwRSqXKi",
  "key8": "QoisdvA8cZuui94BvkVv5a3Y1qT8pMCKmeGEw1CHvJiPUHhU3Pw6YkBYQWC6p7SoBPoJYKrBZQToJvakKzaWuZ3",
  "key9": "5BfWu2oAF7w17LX48xRmr8b2wqguwtDLbxwoVK8bjXbJKSbb95DB4TtBEaWSao7FV3rJPntxmFF66ZPgjLThC2pQ",
  "key10": "k85m13QenTpecRqUPaMVFs28HAcizV8s6G6z6f9cGnbF24UDZEhXnqXeqk9X8uqhDgfAHq58h7Tg5dexpdQ6zcW",
  "key11": "4ygiWpqp44RHGuSoUPsKAvRSMe9fuXgBvnwedCMNhMqTqfjAVeWnY1NPo1nAjzoJHtLgXgqM1MvFpQJpFFtG7y5e",
  "key12": "5UgEvGsd22imHwngzecsJ4NvvuKpeNgs6j7ZKBPmSxr6yjbreY5vYKHwVPbpv4tR3mLutV8MuYeL6QJWpyuVqTu5",
  "key13": "3cRGE3QBcnS27zySPidjSo1PuAj14P3QsqepXxjs7H2KMJrMypzxX1DPUk88EPyz2FHraAGNxTRceUrnKYgGxLZ7",
  "key14": "4ivYuBTQ5nuawQp5HaqwZh6Upfkc3wzYyBCiCkSChTbpxXCcTMU4VVVXDEqeVn1MBSWnDHNqjxJ79VB44Eb6HC8J",
  "key15": "3S4n9TgLhQbMb9E1ajy6Ep8dB2B5HunqvG1hQzc7sy8nTpRaP4s7iAk4sz9pdmHe7fL6BfSo2mbDupXTPzmqcMAu",
  "key16": "4XQT8AcgLKCDP2vtuWqhjYgDyHzyiuX9AJBiCMEgiC4soxdMnPYY3BAtomq6cT8XrXtYHXtAsxxHXWo71qicjcA",
  "key17": "4A8drwJ7f21FunAMouGfYdjVE5M8hDvDegZRwcNYintDcbv1FXTj5NaTeQZV1YB2g2EtGNjaahUt8WqdPL2r38c9",
  "key18": "2K3XrTDZ23zEyNhpLdDxB9fjADd5t9aEkdngvbQXmo2QvQyPFDwv1mY34PDFeXvAZWq1UNd45dMMZD1QguTDqkXV",
  "key19": "5N6cmvnvLniY6gcU2V1vY7283yhNiFEm37RCWh4p5fScm5Gx56devRqPk7MabVAdjXkbjeWGjSQTJ6QC8XnCwewr",
  "key20": "7EhgnJ6J9N5aT98g78ujidqCWHW4Lf2eKE1Z3wrg2vUK6bupKqiDp9G3owsBz9yoDrbteoQpwJfymdvCcG5L4fY",
  "key21": "34KUDTdLLGkKzLK5if3xzWkNvTxsAsYKGiFPZGFE49PCnqnhxqw8Y5hba5hCb1X8Dkc3sAa3wzvhcA2RFDGhp5rz",
  "key22": "2HNQYtsmi1bhVKKGdFRxKGuaLZR9U8FyHPQMxnQupQKzemtvzTy3ZeaWtE12NZp1ha1tMQcyBRd5cNXjU6MhDXvu",
  "key23": "2nipxftndoe1rXxeoe87Leztvt35jUjksF3YkUn57ik4GeK2j2XVdNL4HCW9xq8afrXPUre65zx2ptawprFMnPDx",
  "key24": "yLnnBsirN8G7yNvgS3tN74n232CKzk3eVT69ZBbdghnsM2cqGwnBYURvDCVafjHGXpgA9pPCkxCr3Wx84ViB1et",
  "key25": "3n1NBUFq5YfxWUBK1Y8uXYQwcr4CKwbJyfEHZwvoaJqEdFsbEv9JyrENZU5DqoTyLrUtWszaTERxP5dGc3u5VPUn",
  "key26": "2s1mzLh2s9K85UueZ3ZwNatCLanYhxb9DhpPksikfTLfs5D2g4RL1aLiNnaN2NUDLAhhaYTt3FoZF6baKvzUCPQu",
  "key27": "2yweF2mrDdLSaxLBJjNkZorBYEwoawE2GjvyjSe19rHcY2aWSAvZEMLu54RaNHRAXFbupiv4FpBta21JbjLLkejM",
  "key28": "2ih7wfjcgVkV2viXFpRHbv6dRkJPn7XE61N4RaeWnXMUyC5aUhtmbBKCvx6BJ6PjmzhM3TmEvqgUyfYufLjW8aYx",
  "key29": "29NMLxpYvL16YuZQWzxCcTtKskmJBf269JrGSJi1tnKAasyuadyd3GxQR8v19W8nHJxrNtjZhSJyRxKcc9XVhzcg",
  "key30": "2gaKECjkGJLB9QZ5Pji7k7Spfxt5VtmiJJz2HTTNJkwqxEAg5iBKbNQcHdtBHLtKW54AFgHzmapUuXSBESzaBGo5",
  "key31": "2PGwNQ6ZgDBD6NR3ASMd8CZyCTdbq3y2XziSEcSaENrQingLyN3e9YnsX2sTCVC4nMfyXeb7Bzgpmi23A4DZ1en4",
  "key32": "4ifLqcpGC1cMcXMumLWe6SXvpDNET2uiindkNfPHEbPs3a7Bpi2EKZYjpvkNQnWDh1Z8RgNJ5LwyGtFrW8zXiU2b",
  "key33": "5esEnAoL7etjV6LUemNH3d9DTqLxCxxAJ8N4gsaLfmPMfMkggM8CYmA2B2q3eF2MjmnbZjYSC5yxZzWgzfXXWm5y",
  "key34": "2zkE9hK6x7WUunGV1wzshjsMRDMaqvmhQApeexTmWgyRQSd8LnQFr95PNngD1HcA1b4LoM7vmgM262KtKWo97Rxp",
  "key35": "hJt4h2jVCohRGxwLAcmnmWq9uoGSU5vi4ntooQV3qFDTdYPEdyLPsGn9uQkfKBK9y8MXzv3PtohKME2jg4nTbU1",
  "key36": "CbdTf73QqJxkHLAjSQRfnZpKbuz5TQW4Avc52ZwtmSMyWCX4vZ9iYrzVF9fZGab8e5CfoeCPEKxo8apN1sNKhLL",
  "key37": "4MapCjU8Z8P8eP1GzT1S4BK4fCQuo1fa1C68AJR6VwrVmQY15KyahULe8ncyHwZrhcje37JEMTBaHZhkQAH17sDv",
  "key38": "ksYEDEx6qnLnUXNiZ8GTm1jaBNhxUfNmuRB1E3a4HCsqQomGKVQ9gCFkcL2q7GxUA7CnMbqJnitUrtC5U8uWsUK",
  "key39": "4k65w6FHCithJKMxh6vSFLNit28EM9HYQP7XJ3j2dcs4uWjLd9AXnAeGASSZ8cxT1N11RifmpwYUUWykX3Mi2cYB",
  "key40": "5Bvjz8VK5YknghZ6WwTCECTcDtRpw5CudTVtfhkb3xuszPn4iSxzRFKs1vN9HVSzGxiWyXF1v9qgAQYK9oJMAe4a"
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
