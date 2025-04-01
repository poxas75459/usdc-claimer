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
    "3NtQiNBbwGwpBEVdH7m9kND7bXzhQKRrNku9rJVUNpqToEgebjp7WWNWs43smHsNbqaWZrvpi385Gsc6wKwZkMoY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31mnpzvLnzJ9FzJMJPGHe5CoQoHVocHQW2xe81bfYK9vNCt8bHBj8ENPHx3g7Ldc7gWPUM9S1ePkCQnuLDK6eiav",
  "key1": "2dnniZnjbMqUBVmdZia11wtHanxM3kUXsZXhLKuj2UBHwxfTLaCms536ysEseuan43RGAKDW5dgozgDn47Y7kSar",
  "key2": "fMzgUtipkj2GBcV7FZ6bz6S2Pmf7RppsGn4wtDv6LrdHuEXYdmAByXfMWNdpwzPGJD8gJfRkVAPRLUFJkr6CjVP",
  "key3": "2ddjtNGSbYfh7ydFUKoHZMNnDRsDvJnpeakqCQ1dbMjnGcM32UPkSBNbRxupRVnUrVcSHBWbtw8K3EPXyY3RUK7r",
  "key4": "9SoJ92jipjd7xVDvrus3SzB1L1XQChj67QCHQE4NsaJQe1BrrbjqaA1R79DbQUyewXsQNDbbDZ6sHJYyZj1TLQ9",
  "key5": "sAwAVkSwq2cSGpJ3DrLEvWRVGcjSgsvaY1RTHErB7SXTnhYnS9NMtw7xFLW3CVFj8kbXfyBNhtLa16rGYK2XEHF",
  "key6": "2zCaax4iH7J6bytc5kUFQcY3d9zLp3Qsv2jEP8NhJNhf7ZXGBuDsKfdS3nbBfVuF61NdxBELFcmPtcXtHgcogvQc",
  "key7": "2XwKrgTzVM7D8JnGbTUNj9ojbjbagFACPmRfXushfwcsV4YLuLqijBbmp5YA9m4RTUUQA3CUNLaZmmejZMiGsa6v",
  "key8": "59QMaFe2ZUbNnmMj64gByLVDUKwcYxAWGXgTXTDv5RnabxEs7U2TE8TeAvQ5NZ9PLswxZGXLPQJTh1skxfUrBBKK",
  "key9": "3e3ikfmiMKXZg6uDuTifeMCPPmfeJufrLXsuCc3QyKXbsRjTPMGkdLvSu1fVukpPb4xJRYdCKxBF4xxxuQPM574Z",
  "key10": "2RsAkCzHLHQGnaezndWEnVDyB4KKSz1gSCy8z4Us7pXpxY1MsSorSeowo6hS7nz9zjaGU3XHh62tnNC9cae9zHj6",
  "key11": "5imt451MUQhdgAhd9d7ss1T2vN2aAr7f7agFKSDehr1XRnnz6KtXWM5v1Kj3iLwk8i4p1XpAoo7yKsRDH2bBmqAG",
  "key12": "62H1e8PYtEuzUBNEWcBo4VArFyaaXt4w36yrz3bjxmQaHV31hBu4cBxvCmfd4Zm3zMhHXJV7UYG8zD7qdJraTnWq",
  "key13": "3fnjzYPPq7imVd6rxLZgBQZQimoD28h4rpoUmTbDFwRwmfD7oNJwS6RvzxgguUKR91dSL1ae8KLUef586FREDK3G",
  "key14": "2EVAe1NuwdxcJHwwhL8ycyhbduuiNcLPukXbpL8wJALrRrYUotc3RJexCbhvoKYy7qw28WTbpcwCcroryfcQDKrv",
  "key15": "5mQUEi7nVdgnrV22NVb8372TGrQm7hHefiC8ULAthmXaR8XSxaLS6XfSGh5eWmWza6mJJLkf5cArE5btP59vy4yt",
  "key16": "2owB24fPS28BPN4JtbBAxNceJFTmuqiPty1JW7cbfzqxv8gt9AJU7bkAkeeumuMjattbBoA5rrhVyKSvoz9GfLgx",
  "key17": "zYZdZ8YWHBFQJijzmDPTvoFneNgDUXiJKsHRJhoYvchKLaLhixyUow7sBitkoFkesdURkK6gN6sBPW8GTaFejRa",
  "key18": "3tfsVE84HUWiHSJH6HjEvWVrCo4CqXgDWNxzKhS6Lnpszynp2WmdipvFctvm14jWCdHMpEemtwvfYDR2nYKGwPEq",
  "key19": "5ZfympgUpUuu4fThHoM6q3EHmkZFS3xRKtDNaxdCntDfrpkG86UWpPT2Fj1rAmcdU3GTDJinHgXJ9RiiNHG7BLuK",
  "key20": "ikbeiwtG5oFazMbJXpoNP53nf7McyBWthWvcMc3XLK8VRMM9PoPzpuUkpXQkpqSzPi6J1sDrTaJfDqpwu9jFumW",
  "key21": "2U2A7nhb24WthsWpkYyMG438EbmpDP4KK3gA1A9tf7B1bZzTuyJcM87nwyRxEduXaGsRoW8sL6TVrPMGMZ97w1eq",
  "key22": "56s2ERcaPTf1HLc6Vfx7xoL7cR5232QnQspzWdp5UVaVZRieUg7mK87drJktRg7gPf3XQiWZrmEszVtzx3r1K1QD",
  "key23": "3vAXxtWFk7nAx1dj8BUcMZQgEFkSpM24FrpUXcfV3qF6xkevRn1W7retDM8wkA55gDwJ4PZLvnFgTgYt3Vv3D3Tp",
  "key24": "56bw4b7k7159tbrDKW6t4wUVbQKyrjWv2g3mq2b7xv8TEncSZJeWKppVL2aYJuAFsT5wawb9YWKbix2dUFJGe17k",
  "key25": "3RzjHY5F3MG4AL3wsDQEh5JpoPomdYqbhBbZaa8H54YnF9toSDUgytaM9YsxmMcwN3dtJyD1TfkKy2ATVSwMJtDr",
  "key26": "F4ftmS8CbVEuEvvepNtNWd9ErpTPwqbg3Q6jBWdaTLt4y5B9MPtdyxnzm4VmuPC5vownoaVPKQFWoorxyCcPJMY",
  "key27": "2DEVpi4hEPz9ppynhzBgQU2wcZsqMcac4P9ygULREBvT1yqSHHXFTvxHtqysNbz7nRx3kXwpADTT2MBx67PudkPB",
  "key28": "4WypJLRKKB1LrMCu9ZauBCi8rqGaTe4Quf2m5dY5uWEoCR5X3LnqZVH3ikHmA82FSPDnT9rBT2D5TPQ5MV2j5uYB"
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
