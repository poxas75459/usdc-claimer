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
    "5EgeKZ9rFsTCt94fRQBzQLre823ZWpWzB3L8dd8dzUEWtJHaepUuYiUJkC3CZhA1YaDjS17tzNBRNwmjc2UE1Cvq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hcvt3ggVTq3jG7tdXQemCon89CL4viD1gb7kRJAQs85QWTo7ghQewdLSJ4aujCsZRMd6xNwpwnj5FPxqkBRsdSb",
  "key1": "5XxUeaYqmqa5xYXQD5e7bszebVBouZzBCcRPwjGZs2HEMqb4fEhKcin3k7DkuRXPTVV5vshVxDW84TyZkDgpuqVk",
  "key2": "PP1C7yX27Tr46McMP4GDJggkdZ7twZsdWGW5zYWR281x2g3pyhYtcgZk7KCmH6rSLN4Yzp3GSyMbqHGB1T99pj2",
  "key3": "4yuTpZ4HgQVCQpswGrZ89oab3qVA9j83wg4nhKHFoi1ZdbfjtTQyT1goHD8ptg8FRnPxBpCWBjCxCSNQdMpyrK2c",
  "key4": "4RtDMkYEsbKjZvJwLUMXRabq8cKawFXYCPJERPdQM1XcPZ927DAKRkfDQmWYbAEgrGDoCxS74jpcm9MunuunbbgE",
  "key5": "Qak7Y4nhBMYmY5UXAJsJvMMCPdAt76Wo3ZdCjRumZAdhjfZut2P1G5fkwazkm5XW1ZATH11V2BgRASGaE4xGU9v",
  "key6": "2yYogUqvqgxaU1JBnuwoEXprdN88GwHcuCKWo5WrRHt1jeo2GN4kVu6Ejnr2JGcCDzawzLwGrsCmHu4S6TR7N6NG",
  "key7": "4yb4J8xQyLEbfgV2ZrRx597gPXMrcmWnttG67Bjzk7bgyDzajxsfcc1eJ78Fzbo3zUUJexse39H7PjPE2tMTTCR5",
  "key8": "4vqWFgSfMBV8xXg349Tm5eUjFmXmDEF4j5tygKckoAurixMAkm5RduFYNoNvTxBMjmhFonghMRnfT9ewffbmtmkh",
  "key9": "SKpjrbqdhihniXVz7s5rBacAijwjxoknkvWnykHDCusHyGwUBUgwCxQwXWAiEEakB5Sfid7jkHuY4yqjtJ4LDxM",
  "key10": "31SLzHGHt5xFzMbTEFm3zKT5vdq7yY8NZNvrGTRwtKXEam6cGPNjXPjMH3JNoD861sN9kqZRf2ay7y7V2GBMmS6D",
  "key11": "3HTLHZZ9hReXv5ZzyBjfSZDEzXduwKgDT1QVXKKB3DP3StP7vbekS6jYwnKZyiWewfAUnDSA5Y7BTJ8zJoScjHex",
  "key12": "5hGVHZaL2wuohqcMejAHNqEqob8s6Hi5XGndjhTtvHqUov4azcy9pznXDMMbrmwpaKU2SRN1PbHhxUVPCbWUGCd3",
  "key13": "5sNdbCGvi9x7WLMw8cPBtjxDJhPR1VFQYhrSwizgQFgNU3Nidyfv4iTKLHbrDASj2VB3MmqZncPLB9WpM32vTE78",
  "key14": "CK9TGJLAAFEBLhzPaG4vMSp5mGr5bBgsPPnzoQYNsqiXC3hmJ2F8miaFDs5gufpZ4MTWp7zRSBM1BgYJAjuSV5f",
  "key15": "P7J935Ttr2siZijSeZ7a8Ejd9QiVh9LChMjdBUexk3RdoBugCKEU7Fg2nuSjcrwtYHcJQxpjBxuAyWTEqqHaWBD",
  "key16": "i9jLyZYpJNJqkmv6jgpPv7AKPPsyh9h6fnpDsxacTH29Hn4iJB3scAjUJ9VeNAE5VH1786FaaHugynY9ZzM3Q5e",
  "key17": "s4EBYcwFYusa2RNp4rWUci8LqnoJuGNTgeL5g5o7B7v3tSBLdfgsWeGAsgYJTUzsG6oqiLUYHUhPQ1PRmM463s5",
  "key18": "PpAvcdd1LVTvexm3Fwys5BUcHBwqNDxB4vTfM4vxuq62JgRsXwBb33LEgmcQgHQbpx1hu623AqHpyqxYfSFcLNu",
  "key19": "5ayQvUu1Z43Yh53EMgr7Qk9cvc4BA3XMj6dLHMdaZq2jhDskjScpgEMHznfr5iQEWNsmb7czqFMk6Gzm2ayvhA59",
  "key20": "2nMRm9ryjcBN8o9RQqpra4U9F6rwxAq3LdTcTgCyNWtY1F6Rokjt3Cte7M3QFPco6sbEwBM1M4bnfbHKFGSPDzab",
  "key21": "2Gp12bEyqgPHoK49pLk3UhM3ee2LXB4akpF58VsQB4EFkmpQ8tmVZEPLw7569wfN589TRrfDSZ3TyEo95vYXhRWa",
  "key22": "N6pogZphN1GpmuwRr7k5rJCCPKp8nbtJ5VVo5jMY8asi3xdDKPSoNoUnxuz42rUWQP1CuRe4F7DTCMj1ogTU2rx",
  "key23": "5BUqpNTLJosVmVKp8H8raRkhPxWiMnxMhWLp42NoUVbug4zsfxJR4JnDmCKgWg8h47rjwgx6ZTznufAbpuu2auvV",
  "key24": "4HTqsWmxPUz9mB9476bcEbfYvrcXToXFNFjxTU1a2knNh9GqPkxH4cnkPRNBYdxqbWYXQzWHMXc5WoHWkWqsnoLa"
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
