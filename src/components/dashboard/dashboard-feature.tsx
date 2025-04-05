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
    "T6pGRhpoVRKH3mrP3x9ZdW76XmQ3Y21gr8kVnC76TnoQZZhhczchkGt2xuWcC4dQGAbGbcPxNAUsLqC4Y9MUetg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nBHux4MZ7vkCFR489UnsZA64GZXWcwjQGr3JDyw9LqGz9NequgmZxvpkZ7XAP9uWdL4X4QuhnkWZNKywH8vBjc1",
  "key1": "HhmVw2bpRoYdraLCXH4Y7mzADvAird1evtxDx7mvbFtVrt5N1gJhT1sFc7n9J2skVKbFUqLX5gnKzJwwKCpVhQP",
  "key2": "r5T5q1qPqnGKmyimcZw857XpyhFDYAHJR8bDNyvckPpsgWMgSp9jwhZi2DpT5erPcPUEhFo49Xw9xLoaXGh4JnZ",
  "key3": "2834RbVgDW9hYNLdM94VkgyF4tQm2NKDLiCh5w1EUcbJuaSbrD6yMv6SR5933nZVYxdfDYaa9BX5Fmv1RydRmmaJ",
  "key4": "3KBgq2K3PeVEC8boQL53q2BaKeZmPG8intp5DXY7xoHXvPGQr8NkMBmyTzGSoaQKryPnzeXzFBSAZaCPaDV2gq7y",
  "key5": "ufC5nN7JvNFxmf6Hp18JiEZxfb5sPf7gX7g41FHzTDmDjttQnAYgLJZqrbGWRZd7r8LpWBtRdZc6LxBS2arUCc4",
  "key6": "jCU5USRUnMiD7JxeQVhDTBcCsAUMv7qm8U4NMH9kzrNidyMNyPd2YzewJupyH5ctgwZqUmdVyzi6h51wt5xewmT",
  "key7": "2vqHZrLumUPwTwe7fLR6VvR167NBsudK8UaU3ze4g5AzJ5fTQ6JYFZr4ro9XjT2ZbxuT6jfwbMsbSv43vTn6kcLf",
  "key8": "oq7VxHpFb55fWkGrXnff2JgHcWRBgtpBNhkhAWRBw1JbQguHU5GmLLxhTREyF72VzuMmrCK6fyFyad1h2kNkvtb",
  "key9": "48fYqQCUYx7JMJs5hfLawuCPcw62cqXZyvVQBKs48Q1yK93fK4jpTRGYVBcz8HD7VLvWV1tQz8bhDWWZniHgt9BS",
  "key10": "5P9PnrU7AeoPvbJQcxsJRngvndzivpdFaXfFiNTehVmGi2EA6knZKqaCmf89NpGR2X6q64fRJAFgFigbRect87tq",
  "key11": "idZwTyFzmMRST7CLNQN24R8p9Z2W3C8QtLjfLVb4adJp7ShzUDnEion2th92ufcQkEVhK8Jjz9REgfT2zauuZZF",
  "key12": "3dMSQmwWKA6ycrYgwomZwXmKCrHrvis41MtKNmBfwtKXFrvr4ZtjJ9Tu261inBMd2TYjP7Bx78fJqJhRbzrtFo11",
  "key13": "KkxLRWPRSXmryb9a2AL2Z4sPfNT6H3SHZmxgtkgZ1pNmw3J8u1eQqeXgEcoBWDm3Ln5YAekyCTLLwXBLBgxGcQH",
  "key14": "5oZzrm2FuzkbUB2QhDsXq7gZfLokgxkLqfbexG4sVX3m16otXecJ8JKpSYeC9Sfs4bEYXENRyKm94A5hg9UUdbHP",
  "key15": "25EpQh7YQpcKfmvVxnaHnoeWXaMPDAVoyzneJmXE4YQqcjvRgftBUQnUbAPocPsofhZj6iBQeN6DJT9XV1bxdYDu",
  "key16": "rYrYP6aRW6NrioRS2CmpiAJLt9PkwcXSTBhSbK4BycNmArioiLsNfsvwfTcjtgvrpRP6nPQfDwQXRs1Nqdef6fA",
  "key17": "BQeDQbtZKS4XGahcPpa4UosiPMZj7SiAA8Juhf5PcKQk9wBGbZ4sWYwe1ecfNnziu7qmDv4TDVzEq1ngm8bc1v5",
  "key18": "33wE2CcMph7NdPCaXxYmiCrNCcefGCr3EPSobPw3PvUN1j3bCyeJCrWGBmbH2hvPfkQEQhaqzCXqJLJXTzHYWL8k",
  "key19": "5WFfRXwpMpS94VJzLoGeStNhJGADVYNGavbWyAJANrS8kFsMRrkZHKwQ5EJDrcuK5NAQf2HBSCdse3mCn6xrf1vX",
  "key20": "HJzs7FHrTn3c4tRkj63EHta26gxNP2pFg68fG29ge4zt7ZMprta2v8CNwrfK3wws4xpmsfxU1ke2WBsqCvAU1BH",
  "key21": "4bkwMsu6ckbxKx9Q8ArkvgPGw1VoW2pagj2pZPKVyLTFPJ8vE3ZfCnmR92kCK4YcgidJRnSxjjxXw64WXk2wG6Uh",
  "key22": "5PgmAZv37JeCf4a8xwPsfypnRw6KX9QxD76G3gAozbbzkxzCHhCGgpRSiFpx2QD5V5FjPA4n1CreEbMockb5m44n",
  "key23": "3b4JNTcU4UzBkBpxtc2h3VryFRY2v8LBSTxrxaJm5N2hiEWggyNu2YPfahKtMDEEcPuL8x8JnsUx1i2xNK42aomJ",
  "key24": "5jCjFHP383s9ZYUm8N2cFccn5jHnU4hHdCzYxw561UdmJ9ek6uoLrhzR3rhtEX8KqumtcYArv7XDF4Sv2KqwpJRm",
  "key25": "satFBruFdxgxeJCz1YGVjySSAg951qQ5upQAeNHoHBZ3xYFiXazX9euFseBjdfTGvzWzReoSnDfEnGzbhbHYHSJ",
  "key26": "21S4drVdjDhGJgKdY87MjaANmiuqJeaGWhA5Xbaa6PEZqnLPnpcXXbhRbGtaQW4z8B3tZ75XL3v5L3r8VdHnMBXX",
  "key27": "2rZW8rHPyxXDH9EPTvM3jNQnn1JyjksgX6nrXLPZSZ2pM6q9fcx3jY1fU4fUN3nJmiCjaVLD7XgbHGBEaZqoT9MM",
  "key28": "nQf4SratY3LKwNcu4HNE1D4cUPN45A8YK9qamLnVzGgvtBkCiCdiRB8GESGGTEBYeqYBU9uSQWLFRNsQHzZG4wd",
  "key29": "FscLRuet8UrXeUFmCrN1Akeqhmiv2JANAXaszjJptScxY4VXSUi5eNMTN9Ztb2PKiut785M2d8we6ETz6pUpMrP",
  "key30": "5UmYq6dT7eWEvQkMu2EFW55UjuFqPkkCZsNiBjmkqkHdst6z5oxDWjxUsPwHomZJf1JYQb49WXVxkLZ9oxW1tj1V",
  "key31": "cANhucfKfuDf7FobNUrqDsQUawGaSP64DdgxiYJTf3AbMhsVQz2e4qj4J9c1rLVJB3WbfdotWxWMdrYzeHFRGa7",
  "key32": "oVzxUHn31nfGHS6EdMAYREQKUpDTZgySLJYCQegeuRakyj4NY3k9NeTURZeWkhoRbLzDEGePGsVFmwunPuN2oiH"
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
