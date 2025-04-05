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
    "5kBVesdZqhCX8pfv1izhiKzLG85Z28TDNumaq9fYd5U7ugYcbbABNA96cX9ZcrQgUp2CFCUkGMSnaSpzq7z1cRX5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xrRWLr6gpdK7ZR2CwjmLbhJA4zs59wz79wKri7knZL5Nznvq52EpXef2Htr9AvL7V9c8VZ4rBzssgVvHyfbq3vL",
  "key1": "5PZhYNNFv8c9zHwSGuijDBFZs5tmrFHDHTUVGKwhPZ6YCVnRP6twgFoC7Gxtj4ZPP6MiRVYsymKpsbxWtafZNGX9",
  "key2": "537WBd8AemxXGnAJPGe54tG8Q6WLkPqqg49iuMkJYeAmc8xKi3g2q7urwfAJiM472nVbrMxWpPi35gfraJbkhqNh",
  "key3": "3w8Sr16Pj1Yn3C5weozUrs7tSaAkZsbKSE9p1Xz8bQUdcvrq31tXAB5jeMEPrNgcPyNrbwWks5qD1pozuYihFbST",
  "key4": "QccJdLVZNRRiN7dyv4oQgysvLcHy98c3dzhpSQZvaotU7PUbEqzZaSQyS3b31s3TiLWtFBfsFBa8BGiZDinm9Bk",
  "key5": "46mi8LmpfvfgKN3F51VGCijT1iHGqoVVJ73opZvnN3wzdWQ449eM1AsybNJGyLBQFkQSPm5xxuW8526jLmj9YndP",
  "key6": "4pGSc2mdL9mLXRsd1Lni22usx2ukkuMF7v8uEQJYg4eEPzv8QrAbQZJ8ok2NXRiBMY5DXcT2nrbhLszJ3DMRM718",
  "key7": "3VjEZrkV4h8T3YqJpbSfJWiccLxxGKiLRtbFtjQHmLEEMgA5AXCodjRezsPKfhRLEf8M1xwPbNbPdBsk5s4eAWCK",
  "key8": "3a5qWhWovYgKph5SwKLiHVzZatmnxPs8dmqXVX6zScXn1zFen2zCvkcVwz3euXMRs4V5vid187hLVRSo1x4QW3kF",
  "key9": "41WhyCUzWJmjV3hkj7fmoYHodq1oLfQdHE66QD8LTXuZUdzGy73Y7UiYmCY9w9n1sC35eKPCkPYrzyKyNo5wL5AL",
  "key10": "5eDk5gEBt9Tg7WXbCUQvMURtnF7L9SdkcvbrojDre1Hzk3xtnA88S1PGC91PjrhJG5mhdwHdQCo89x78etKgFpY",
  "key11": "4FNqSWHWAAKEaNFAiPGW11ScJMby5DKNmeEFD1u26cfcTYyseJKZe2B9Pwa1qBgj5HGNowYeLkBaPBL88emHwSbh",
  "key12": "46jU8SFJqbjGV91HaZBhByN2CrFpfZuwFKdjocUBh61JzLQsPhmypynWJhtUmyTDDZo9RP9oUH3JRs6wCy3dM7fY",
  "key13": "4AUynxX3W1Faf23tPuAoTYrWxdMmyo1Nkpz9YTqPuQknpZ1sb9zprueBLYwg2B9FbzbpXjSbZAAL1GPoD5GMKwM4",
  "key14": "5PfPK9VudzxptziG3F76xpEut8rF5kVMjHesDCGJMroYKq15VrhVBXTtG6Bs3FKmPrFtBCX7X3LnL3mwYoc7Yn5T",
  "key15": "7cVyuZuZNdnVTWSvA87FQvjWDSXbdHSM7cNxDTvfcj78fCXzFK3TCr9UzxVKSvZMrkWfxLcJgb9mTBwvx3G2yZY",
  "key16": "31ULqe3CnERNZqqw6bsFD42vZXws39UgEVP5MBR24xUJ93q31sRpJy4gaTs1DEX6NU4SppEAYjYRfPP9PL4b3EeK",
  "key17": "M8RpWh3fYGVT4YWx6Vf8tjmbHh9pqB5gFW6mBAZNHKc7QLAZ8h4gYaYsCqRz4k4JZ8SyVK2XMAWZWV9tnzKsejX",
  "key18": "2HVJqDJsxH8TrLwR88f3THSAtDJR7oRxJ3xn2ZKP7p9U7P5HF4D3pXPtZq3cDS1gwPPrqLYUPFNBURvVdotbkDqH",
  "key19": "67b5h32DuudsQWFmZohtgBH8PSuaDzrZru95hG15kpoA5ZBGyuRK5De3T4BZGnqfHVZz35MdUeAPP9FMN9i9XcEc",
  "key20": "3ywuxFwk4wQ8FDmK8RPmRFo5yusUo853dspapXdPrqEiGUAh2xkwTgLLa3bhAP8ofKHHRbNV9yq8EtFtrgngsof9",
  "key21": "67kbmfrwa6RXvVof9MpKaaLErpxFPoAXG4cxKtfzBgqJZYCXiA6LL81QFp21E7PsNfVEMoTZZq2XEWcE2PEcQBha",
  "key22": "67KDbxgumS4gNbCfWoobjs1zhaV9MDnNWERnZRkkQEz5GvbKfJHx2MCuG7gipwvdyZRfSagAE6ni8Z9dQb6N492j",
  "key23": "33pkPPm5ivcBXT4CwrSkQ8PTZgZ4Vdb7g7zXM9kQwvTKfPcjngsMfLZnNh7ztemQXRV8Qtk1LPx8LDj6X7JUtJK9",
  "key24": "67G7hhqCxmfMUkk3nAFBdpHVR39PazYGABZdUgagt815EqF2o6hJ4tFjqMyqkVKiSnBPVW2XEdXCALGcw8qXJNSd",
  "key25": "3n6KHf2QBiAZHZkm5rSCcNH1yeC937L3ZbN4FZWP2Qy8n7uG19ArsSGsJZH2tWDwfUGJUhPfwVsVNB4QMHj9Aizy",
  "key26": "4Pw5GMxHPvdHPnqYMWLJMn5Y3SepErYbLgkvuwSNZyhXfVHbd8eaP9H5Q6rkzrSjB19HcFyhBNt4tnTcjxdypyrT",
  "key27": "FqF8htDLypHcw3df3gGZ9WQJ46tMuuZuEQV2D1NwbWbCAumsw6TB4LbEeD1BCUsxS3dnaVpzcX1ixrrSP8YX6Xq",
  "key28": "4iSbnG2AhzqYjgCBy18L7FifmSDwXk78iQskjmvEFr4pyixQ7zLk2jTKGNzDwtffXE8N4zM1tPSRXMN4i5eZghkU",
  "key29": "3okXKUBg9g5awDd51eTqH6hSa5cS2u8Hmvfv2bYrHY5L5yMfyw7p6eB8XpecJK26sjU6vdp2PFLkehnqp862PRMm",
  "key30": "iAvNwuYvATG72WumrLEepBZxuGtqNrCRwAzhLzr6VGxExPXVBZGn3kg1NbGCGeGBw5xpf1yguwrGSyUiEohz52c",
  "key31": "5w3LzUe63wD6nqGMDNDkMNs9Sav31yguwjvf4iM6rSbwEGYPAmP5HVFjrcJQNG9krMcoycqqHvpiJHhWRuVJvggX",
  "key32": "2d9ZnfTzhKLFokaQR8op8i4KQZCdxsUqaXy1UL4QbgbNEWcZZPw8WJSAbgLjxtvYSvLh8bRE6RKF2toVtxd9Uzih",
  "key33": "5HSXcaAGrdpTE9QC2MdfoX8eR9TrF4chtN8iYYhQinkcAEFFUdQXLx97nhazGvGjLn7W4PDEoJsaYJkmm3LFsNhH",
  "key34": "5TKmXnp1b9nEAxZpZbKphCZRkZziDCQdvickwwdt7B65ZNF85ZdRCP2dLi9J2EYuCDXVD9ztzaoWkXjeGpDBubiR",
  "key35": "5fnkvArCSHNLQk8DJaADhipNPUNSEnVHkg7ZGwpQyz7hYpfCPET38NbdTHPZqRqaKqi9zrzaSCfMq5MvStoCcuT9",
  "key36": "4cbQNhPrzU1QuUhH9tJQHSDmeih6H1wrf8oGSw8HEVqDHGjbaCBYoTwkKuNBaKobCo6Wuk1fWctJwRi1dz2JVAQr",
  "key37": "2enEESSbsrsrWrTR1Uj5dzyxQdC43VSnMxWetzZ9FvWkCetwE6F4Jba7zkZZTPRxBoamZdB33Cw6yi71BH9e9Lms",
  "key38": "3HvKBK15PX3W8gVhiJVAiTuZuKo4jypcyttQUPfjrDE2cxDqFK5g7Q52EpeSwQtz6Ji4VYf4EafqiQT8NgEMWsHP",
  "key39": "5D6B5ALeHp2UGNczUdzAu4Ct6LRQqa3RGWA7VS3RaQeZXrmrDuVMa7F1wrCESonhx37Derd1Ac8NbiGDmBX4ogno",
  "key40": "Ua7moSAftHK67zXpKLCp8fFhw6Ho5ukzcZPNuPdHjVgWexZt4URnxuXa5J6Kv4GdpoTM7CSNDCM5xUkHLDqaqUS",
  "key41": "577vBNk2qMrkdtxtu2dxHd53XSqrUxATL5kYwhmNJBb4oEcoEeXUMrgnsZ9mn61GaCEZPHxuMW7peg5kkqqkyZoe",
  "key42": "4MkK3sjrMEWRRrzxLT6cfDnhEkgj3jikx5eunLfr47gcTnpAHxhiiahN1CNCsEDvZioTzkhK4n7L2Wgyakzi98dQ",
  "key43": "4Di9FG7uzVs8K9mfdDBHvASVvHZxSLb9UfeLwESAgM3E3eSiBJbxKz7aomZN7nQNiBFmbd7hC5SXaVcaidmoJ4gc",
  "key44": "4X5vK6istovtD3foAxihZS3Udonwy6hd25iYsq8wrWH9KKaw8M78WPYEyj6NGaabM25VQZnGfWupiVPyqWWB6je6",
  "key45": "3rUo7eC6pgzQYf7nMRUwfsHmidvfnFTRzs3eavVGDzkmtZfbiZdFre9QYRZAozNGPnexmcPqn3N2ArvrWi3oJH8M",
  "key46": "2cJvwZRSCtk5nC4qfi9WsqjmHrBnLh1gk3KzXoguLP9xW1EnXJf3caXWT8yCNgpKjTNdzn2fxbeZjk3jVvyYpfXE"
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
