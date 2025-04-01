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
    "KVZmRKDKs7y5ec6gQbvd4gymtVS82UQ1BbrZecNA3mLJaPY64VjsvKmMvphTPGkD2LH8wCxuhU81m7Nyr4daui5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "295SPacUHZ3osaHx9uQqSjiinEy8fKu2Lu72ketiXE5y4F6JXeFDpZzHvCCV1u9fug92zTF8NVPP4Dkqsp64Wcvx",
  "key1": "Wb9MNnJ4f9sdAYSnUoJtPeJj1QyBjVVDLBVLZZSZryFiw5JQpKoQDnSmx3pTGWHcYXPrdXNB449cmjYJvizhbdu",
  "key2": "hKrfytiEjRgo5Gdxn2NmN5qgXiCpjnm1kzA9WoEAZjW7EijnT7noZn4NoLyvqcVWt9dCpD6PQdHtmc5DNWJw47U",
  "key3": "4KBJovHutwBRZWUMvNDEBWbxxuDzg6KMEtD9KhnoFkjy1yjCTUB95memUDW9WTpBvCMwPVtEXoPshBsxsgMqbEDj",
  "key4": "WVwnZkYSnnXkU69uV7xBnhP9zsRkXANCdNKgfowvEyZYnG7KWZdnYuL1Nvps2FcyVmkteCXjTUNwUco7nkZezj6",
  "key5": "5f83igxy31dxqvXJjyuiqCPXQ8pzWNG41CnhkT7sBbv85YXaGnmXwipq7bZHq937YjWN1QmLVgam1hAqEMKeGtnk",
  "key6": "66WFSU6UQrjrkWcK8ukjU3hFuHtJQGMHCrvucNMZP9gbQVJgSPxboWND2FeuefpupwQBbSRqJtKAABq1ZM3tP1Z3",
  "key7": "4MYLL2zJpWbhmimYWMAYUPVRQybcLN8FvcEKHsRJZRyxFQekrwRVGXLmsxrebRV1QU7DGKta3hAxZgkBJy6Z91eb",
  "key8": "5dhadx2E4rcx3shb8cQ9PNzZgWGwoU7eaN3AiCJ62btDrn5RNSLMXmFsJHeYZyU33pxt7yTGDEq7Msvihc6ZdB6S",
  "key9": "ah5j8pW8JHuPKi8KzQ1vuv7GELQj1w19xUJKr5qntgzAT9U6xahUMsHRhS3AZ9TFCEXoVWYGkERYML18KNRcMLX",
  "key10": "3mhk3jZnJ7xU4qhitJVKQJrNrhrGHTSZVmCzhVjw6Qa191eRy9nFecVoaTCfbSnuUV1dRV1ndowKuCTC3DMvtLpL",
  "key11": "37dJXcPS8VwF9XZJzZH6BfvGJvAqwVSMQ6PMVUn5E8TbZzVw1MDb4omTeZ5hMvPT3nxiHLGWFyeLFnjifKGZ9rs3",
  "key12": "wiTzqcvtzESP1r2YjHPTkyDoPvpFx8voGSZ4nZWc7mRGE1s4iKoHtYTMuACvqcaTfcADQtp486D9bEdtrrk3taH",
  "key13": "5PXtSi4UDi3st9wFcxiTSjXwm4422GQu29kimfjtAzDiiBTgBLqyykmew5EanHt3wcka4M6AoWUjMHRVEagBMdLL",
  "key14": "4Td7G1wmm2GEawbnXMsEQDgubjR5mzokMuDGuxPVbm9TayKH9DaKu11Wz9PzYDqDMxwDF94GjtocVvBifibRDDkc",
  "key15": "2ByCScZkkmweYdEHMG1RTeoupgwMSD1viCtxix3GDAFw1oCokpEJfiW17YftZ4auoLLX7UgWbhWB2tyaQKEJjLcG",
  "key16": "3X44dZmEsSkr5onpD2s64NyrK8YxZyXJW3PFDd8NsMZp2E1tLZ8z7zsCo2Cs6MZtcuwJ1BPScm58irsoLmgkMFsR",
  "key17": "3HFRD3asNDyiUyF1Y6gkpH12kya6XuZfRy8Y3rJXA15wpmyJ8YFpyAZQCey1yX3Ly7tsJauDox3QeCXZjFMbFz6i",
  "key18": "4vNHVLeQ3a84MEitSedyWGfohZRAcpPx8nUvsgD6hbwwTUHf6YzGXy3awifXFhrrSi1ZJEjb2NgFpEN655ph5UH2",
  "key19": "5vcpwcNjrNEyaSaqJuXhsQ5QTS5jjEJTxysDv6rL1jRkw7VyF9Dw8kx9XWBNMmX7Hm32xAymdjMNyryyLYbLz2ye",
  "key20": "5HKKHVTGKpcNqDgs8mKUzirG6SnhhTDsUm1ufnH5epktafQQaCFJMhfVerxsZLyPTDK7SpWDTniDbF6e5Jxj6786",
  "key21": "4xUiwkHNRHcDHQ6oA8w3GJapmnBLUTbpfGtbDh4NDgV5C87rsCJdtaFS7WEaV8LtybuPAt2upLWtaWktaps8Yie5",
  "key22": "3t5h2uF9Df4HMBLV53D1wTuqQVoKPzcZqXPNqeUymBGRvbBP9FdC4hGwrxuLGnfJL8Mr8dJUsbN5rw6wTCjWZ4DX",
  "key23": "5hURwfqq86nvmUoau8gHoexN8L5ZcC7QtiAMdqxN3yvb7G4LaNhvM56t4FzW9ZFATMCuzHzsz8dzFTzwGHSARb3z",
  "key24": "5WhyyGsRND9tVSNcaUMNG1BuwKk4TrZN2Ct6nAJRgXxwzadoW3nf1XBXdVSpdGFEN9ZkcXqJk2T1waH3pvMLNhVq",
  "key25": "455wRkVcV2rhzeHCzUgYHp1Ri5x6UJMmdUJPFUCuWCnbDm1QebUehuHA1vMeNoUrMhuUSZ8SKdEM4kskZAH9ufEQ",
  "key26": "2MVfe9PGFth9CCLwzkPRqVWX3HYAE3HBZJNphKb2QM459WEQqW1p7UuwbrBihWLhYkHDhm1ihYuDmK6gkzLZwoNH",
  "key27": "55RLS4yGL2vwq2uhGVK1DrTi5k2xeL3UruYEgqmXMMzivqptTB6T9guamRYDEVHPYGGxGdAsdxf8SFXspSFSWahp",
  "key28": "3vdZdyoN3ccE92KFCL1cxDYaJgnyHEuMEZCNZyHZFfB5KxTg3aDxdCLdr3UziUynJsmMpjtuEpZaXzH6WX4MGxSH",
  "key29": "2v3H9NbkJkn5uJhURxoQA7wx9jN474WRbPUNvaDmX1Ps9ZEZf8T1YK9a6uuWtD4BiJEnwrx6npRDJ4Qr1GZzMsag",
  "key30": "7yDRnBb5QdBoaWUMtpR9oDxLXw32yzF2g6F6N8Naqz3x866NfZ9y5pteshuZ2RaDnGTFCEF6S5EsxM86KMHVfhm",
  "key31": "TAD83Gn4HAt6iRybnjiJZS28WcH3FWKpY66ZS1kazgxyYwb8j8eXBCgHNjfhv3DGFi5wW8T2YGCsw1QjvKQeU3n",
  "key32": "3vqzGcoxp41WHrtQEQDDT8cH2J5A9gAdpHKk93EuNQYrav5A1z5DJf4NwBh86sPQLw5dQs4s2AMbkwP2MXJHPhVV",
  "key33": "4yoSmAWYXJoMfeCKoXDFiW95EfxjhY5MA4ZBH1wyg6o41hfcrCNxdfLjbju9uZmnz1PwP6Z5n4QYSCU1tZ5R4XSJ",
  "key34": "3DxuXARL9Ga9wmxHEPHJywdyzDKLhEaWkWT8fRFctkwLonCqWgsir6AzZyZB5Ef6SWePmHqZwXLESnJmgGoWbeHs",
  "key35": "3Zx4YbopfndH5LpJoyQVFjtsoqz63bs4whnpgpiCmjd9tuSgm3FJE9JsmFHfPBVUyQnXjhTHCAtBwS7VSG3oeUSR",
  "key36": "3CvUGMRVNQMsnN8TpT6PwyLwkhkQroWAzXUR19c23Vs44ePr93ZWaReKGU449XhDFaU1tT55h5Tryq5idWhyu5mu",
  "key37": "3LRwbNiaUHDaw1oaa198ce1TkQpyJWskxuevtEaU9t1RNH2t9NznNFg9HrNWMjAf8itTLXHtRfo8heQMvYjh4GXE",
  "key38": "jSguZDGKDvxUFruv25g4DAjv4K4ZdM8W7qASho5rhfnS1ox8EESVQY642gvZCrTqpQG4fYpQFtCSsFM1Srn5am8",
  "key39": "dfXiNcub3W44ym49tf97YoQGSqfc8WT4Aejuy6jC98Czxsk29uE2dbDj2jSKQZpNCh1iirh4Kc5JgnHvJZd16Cg",
  "key40": "5WK7Ttss32n6f7PbPBojNsLJTV9GiM5kKTF9MQ1LnsDgqYmT4cpffUPwUN6XM8TkuS3zYYE2zLfPiRdLcDoKVREY",
  "key41": "4P7gKKSt3F3EXsKqp6UXaxUZo1emkBWSGhZq4yC3ZmSkjr8NnvGZKFePRuZ5yWrwFxcqBg3WJYkpuiPHVAm5CL1n",
  "key42": "2fFxgn599uUnv9eSrhkPLm7yKuKD75jwx1zr8uHgbPmXzoD83HQeFKCFrjaUdDDUeK33pGiLspqVfVVe3QB6a979",
  "key43": "53jvkDzFcAGLwqQiHXfTGGW3PC128QxP4KKFtaeHiCiatMWPbMPiu86TPdGxmxfnQi5BUcJpcmvyiCJKs2xFtsqi",
  "key44": "4hk9XvxgqBN2RqrJjBPE9PjWenLBzq6KiVJRpqv8a1ky2mxSzdXQu8Sit8qiyt7wg53xEjUpD6WUWSJUqj8T1rQb"
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
