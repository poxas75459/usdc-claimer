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
    "2AuhWB7wCHPfCDmj1RYYG153HY5U7d5DKoV8ZfRaLZLUoGkfHBwQtwXDbnSJqXt51oMRFc2ur6RMfEtpEXYZtDec"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59iGToji8DutQSzVctmPBmRHwx2QGkY2D2uW81xy6pdeeh3acATKkAPQ7nmf2daTeWM6y4fCxvk8XgN5otKUzV6D",
  "key1": "52hutH8s2uMtitgw8S1NnRZoxjCkL5K7QGTindPUoBhsDYutX6TdU1W2R6kyALBwi5TezMaSmub1bo9336ct2Qyn",
  "key2": "2MpJnnM4hMFtnk7GeLMDuJC9WSTHuxQBGsZdVqTEKjStqDwqfMFG9ehwtUfzUiKUYNkVw4wdxt8iqEugqYRWfW9w",
  "key3": "3Rnj3sBKRjSoHz4riYqypZLobrZzgRJULbuoW3kB3ju62eH8HX7BYsCkzrYAYtc8yjYJfQSZZRwP7PwQV8DoR5Zd",
  "key4": "3yqnfQQftMcyuy4xG827WHD4esc9Fm7djHVpxmNVc4bxEdUHHcUncGKKTk3kzmP7Pf6ycM5oFNqEjw6smVc57S94",
  "key5": "xQJmHmWc3THJndNFwJUzBjF961xVxkYbi1gLetBR3XaLEFs4Z4KuzU2m7LW92pbtNagFtg8ch6ogppCkEJdBiTG",
  "key6": "2p3767z3ndtGv6Fiq91YeqhBAS43LBs7J9cTZwoUqYR74vFazdVaVJo6VCuhThNDgp4LeCKgh1zqnZgEaZ616tsG",
  "key7": "HeUKhVXHDJx3VgwUbBPq18GuZTbNmdcNxjdzHdaGcDQqd9YYD4pKAVTWKggW224UJSXrMBzp9qu2skXQAukzXSv",
  "key8": "4mtUjBp8v7iFQVS3L4LpeUieftDBZZrUYnDVHy3kL1w6uPUz5uzidxfmnKU3NDViNKCkoEvnD9othJ4NT8gXdfhx",
  "key9": "5uTWDCTp1nJLzEREcLemjea1KsbbCDx49ugzdMdtyKxA6T6wTyNRwppfExUpPncNRpGzB4HQsvjqs7it9bW24dfn",
  "key10": "34Xc9D8q9KetAtqL79rDPcyguAno2i2jSXcKQ6zrcp4YgfxSRxgzC2kY5M18zWzizho1v8mFvZBUvaGGreGKPtPY",
  "key11": "4aZq3u2fexEdQPsGrUFkTc8Tc7DvFjCXXPzrRpzG4AfA6ogazdHNDs3avF3HYqSEya3mAXVkv6PrufM1rwLLkj4q",
  "key12": "2SyuDxU62VnYSBSdRj3adEdJ1iNroK4BEtfVFWTAqhEjY7DdZqdJPqycWrUywyWfHVQw6Cev1UQJk3ttYNNXAo6q",
  "key13": "4R2DGQxHq9XVEAL37jk5FGpcc1sY4ZAs5kXA2DJGKov9SKodPa8bVhpdRKqLmUWw9Lr8DVDwmZArPdLc4M2rZbXk",
  "key14": "4XieBGichhruVfUBVmAjJKjJhh8CzSPK6AKiDoEVuJ5xzWijcKXdDzxufX9wCakRaMCscpHWmoJfEiUuhz5xKgZ",
  "key15": "FPgET6W1g39pv8XsmQ9qfVi5YfUuWsML3vn4bRV8Urt3aQrVFSJzb6kt7CTJwkKpn16NNpQt9zi1unPrspHTk5W",
  "key16": "5grKrmuZ7AqXYJX6PBUWWzVuG76epgcRkxYDzBDhGYUuPytxocX3wtfMtJAGjsp56gsP9xj1js9LyjpXqQ2AzuTp",
  "key17": "4V5vYzfxTLeLyr7ZpEvjvo5tUZhe4UfrdWKptzmDQekTDTL1xWx7unMjHRG7HCZyiaVTaw5FTBiv99YEV7pZk9KT",
  "key18": "2vM93WhSTgBxJd8FtuWX2fZhMG1snZtxad5gx822qHnBWgnKY9pkw33B9BVXoSecmNP1s4fmrRMJgyjpkQr79yTg",
  "key19": "LB2AB9Y5FWfihqWv7CWAkHFE15zac7ydLstdSdLbw13G4FW5ut3ZRq68QWyCLaXmzSnYgHP6mgXmLMHQt24wQxg",
  "key20": "3EaPqqjbzS1cs3aGrc7gjRYsSm7cZVJts2eJzqhPsNdpnyFWM4rC6H4E8nTdskDqFde2u6Fgvzkxf7wqNFUaNrSQ",
  "key21": "57RAFHh9vFEWx5HKKEsSmuZFkJSFzX2Jv8HhMGHuSHxmbg7PkRwcVTynj2MViQM67PkLcgbMJNZhaVxM3LkM5BRp",
  "key22": "3NBeNmcocN4oVuwKiGWxQkpBRTqfPsUoGB6PMKKyg4KzXYErPANgSA6SJotrjaVY8fXsm3CJyS4J3XqX6omcXDkh",
  "key23": "5M5jPcaJyBKkSyEgvBZDiNJay4F4QDkHAnauDqk5gv5beLdW6GRmLBmV8yUJBzRt2JrAjhNeudp5r1CUQr4MCR8a",
  "key24": "3FyVABG5N9JqdyC4juLa5C5vHRdVkofugMQJL2HkhE7mbxWaMwxT5ZDge19ocg43GJuCUbsPbetMK4g4QSjgwPkm",
  "key25": "2MYCQS3zya8n99aS5i8A6ZspWRyQtLRwe5uZhtyvL6RSsgbLDH8qgKKd4faCN47uvb1H6vMGf3sXVQmRSc1A2x4Y",
  "key26": "3kepGnat9dKtgfSZf6BJbszyRYYagS8UPZxyLbS8pQAVgE35UiosZnc8qLuybPx8SWHtKTArsUsb868iDFjg2cRM",
  "key27": "61ao5wkUcHWZAcYq5FLewg3ig5wZEZrcoN7SD97uhHAekVAFbebPBTp9toCeDuGXBRJm1oakgginn5XMUaKQkMnN",
  "key28": "4Jp6zf5dtZXzFz5f6WHkvik8g8xGvuY93DPiPQZcHGzCf3MGYYQ811qRRSzEsh3uSBGWKfAfhtVkbSd32Dh4STVm"
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
