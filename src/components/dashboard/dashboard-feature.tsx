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
    "5Z2CryFkMg3hU9cF1XsVrj7MF8oHhPXtvyrmPgr8WpSDfEqFrMCVUjLFDGNNwQTPWa14SswTgcuLTyoiGJg3skXL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cXWqMcDsEo49G4LYYTjQyLyVx6Bex3t7TEg86diSC1Z3svVuY2FyiEHczHn1L8MHWZ4PE1eyW7G7vS1aQP8G8jq",
  "key1": "3Azb8qj35PQsjph4geEnwd1MX9BYaMYcbfGJKMrm5FXYvnBfT33rQRm5BwahVTB31WZhD8diArY4DYPN2zkWY4W2",
  "key2": "3fZPf2W4uoGYxoJ8yvrL5ydWfYp9TJ8rp57Ra1hY7fntVtmTfh2GYqwVK1u5kjsQotd1tgmfvw93q2CF3P9RywaJ",
  "key3": "4vLFqeD8YEtqhBJTytsrZUqZZYpsbDeqQVH59ThsCWuNzKhtSsSRiaTV21URGYuQkjMm9xx9YJob5Jvp3N7inNtJ",
  "key4": "oStbWjJFVKcUKtkaUt9vQw3V3ocB2NuB9KpKTwegPzUSLYWUPMt9fKgmUrrajq5dJJ9PzwSiD3CN9ZjHCfaazCP",
  "key5": "5YummkfkKjdcnm4b1RASzex11vy7FqduotFc6bRNQLXHFRg4uWP3xJAwnXCCRkgrwAWE2sGBcBJaQbLSUMJNfmH2",
  "key6": "4sw2nJaxDxPxG5s5611xrnLas12ppHZvWJcG5tJG4XzaVHaEggesBCfQmRGFTBx8RDouJgKjdsQoBtQUota9ibcb",
  "key7": "5hAj6AonYUdZVVmgjvtSK4YkRFii8uRLaZhMC5vbHiAEqDj2GxijaMphnqjPAHMEemnwFDSKzx3ZLvmQsZqYxHPq",
  "key8": "4WCQNx18L5AjxZ6WFmGiYJZaVhi23yoSkAtJvoYynjkmN6wWjRDi5zxrHMARYBF6NPbqWkUZFZZs2jXhx21u5W27",
  "key9": "24PH3ubo98WtiS8TNFneWCDpaab8DEG7EZ1TqJhEt5s8XXp7hSoUug38DmZxhHHgKiVdiwWbxVX6ZSESaSh7sEgq",
  "key10": "5yrkwDbbEENgxWZmhBj54KxxcnNZfuHwxbcPxrzKySqVu4TzdRVcnU8XbBUtHZT9x55ZAjfKrn8pzNPfVGNMV5Yc",
  "key11": "5F6xex6RpzYv68FPfJ5t7eCXyCxNftrsMbEyraajaALL1RYzQyj6Q4j4EN9iFfYFUBzzxTKk5uFTNMB34fs1Nsu6",
  "key12": "4kK4FUWV2mrW1K62samua1JmT9U59Dw4HB9sMGQ1NRSqvejnfraTTCesaVL7zPMb5Hejxb7YPfV6gqkZzvKjVsVM",
  "key13": "55mvExebkqQP3Nm1NQ43GAaZhm5ftpoZbCBCkcLBZRjmSfYWYY6VDp6VEDcCmd3CdW3s4B49ERqzfNoE5jXRvoo2",
  "key14": "53945F92r2Nct3ycmZJMooTg8qhbrhWir4HZQxpma1UKAoXDSixtPNrBcpwzmcbW1eTX568Jtx99gYK5m33VAtUg",
  "key15": "5oWLR7ZViKMUKK9ypus6cfTQxHDcvmNc3AkEj9sQPjJTiC79ndRf7nFWShqVVXnxnh5ajehhvsDN1CabTD2S86HP",
  "key16": "3tuKQT2brTNBvNxciQrxgDGENzb5wMExoRjPMg8gF58C5SfaNXHLtGbC6T3Np4iSNeDYJZdNdw3AdFe1uc4VVJtu",
  "key17": "4ttywNKjhRMC9pBTSWaEvH8bZZsb7tzwyaxUkzi4wbT244waMk6yErczcTYQQ5kacYFgBsSAWwnsgvcctK4rJzsr",
  "key18": "4ZjWVfGcxcs1Jw4eaSFwFUhBmnHRAZm6MBBU4p4ajH4deWaUUhu64xpEJ6hY7bceyxKjftF5WP9rjdhigeuD9nBZ",
  "key19": "e5H4Pm3ffFkvYoW7JvFC9Tz9qXMwq5aWc2ucj1WJ3uvzKJymUm8vncWkxL4AHW39yFhJco9wgJ66JGaodV3ZbwY",
  "key20": "2Ypiu6KZmfZZpXv7m86ibaoMLPCzMw3k6Mgu7HqZMjzJ9jxTxkNdknNSxennZ2MGKSNWNfPig6EjnmquR6NLi3VC",
  "key21": "wpxyhdkYWDwEsdnq6R4mV3c5PotcRRyJPFkN3Bki9PCCRkCLFvqvXgB7fjs5K9fEGQ2G4aqqg2vX8hBrRr5s5S6",
  "key22": "j3tZJj4MxfVP5sZvpnPAx2fnyCqsc8R8d9XDdGjP8MYdhi4bhEt2Let9KwgozvxnN3TffGJvyB74sHTCazmiDoh",
  "key23": "5p1KtAFR3SeV7LUwuEpm1cL5ZBZhELhsnqtiDGZrU1HM6Fu1kKsB2mKFHyrBRAerCghBi6isZcTSyoc4vhpNMFn8",
  "key24": "2QZ6PNep7Ejfd9HuhukwL1Z1u7xbHquQSJbmufFWJkEpCAEEkgxM5EyEyfHEniTkuXbJRcW6BG87APUfWNMHUyjv",
  "key25": "4proiS7VPMTRbJFtdQoaXjQFdWJtFswEce2BvTc5vSSJTqupBmgzx4cqhXqBUrZh7F9QY3snYwJahHs6cLkHVuhR",
  "key26": "yxcKTKu7vrCXE2aZ36m3L8PWhVCEHr4qdKtwt7ZcnqLQpXXEW63fxeBYVnb383Gjv4pJfA6U4cQiiTU8FPeeJZH",
  "key27": "5MQpV6mFiN84ALef6uwgGuNJYCPBWx4NpqVgU8gC1PHTLoEcxbM8aZqQfk5fpRxNp191DU6wrX3qQrKZc4Saocgo",
  "key28": "4fmd9SzNWe7HM9ub6UF6xp6TnZBXHefpcMpnz8GwvqFwoEXxqec96yPhNgL9679NYjKHD5mrM1rVByoMTwmBg97C",
  "key29": "46a9a3bNAf3p3gPM7bTC6TY2h9PjTkjJZXThhqAmYXcvtemqem2p4KMkYCvCd8gg7HZ6D5zo2Z62M42nuQWgNSer",
  "key30": "2MHqmD3kxudQbMJxMR1ZtMxEWaYbU2qdWqJn6wjzZAAKz7H2L47CGduazbYD9ipCeNTuMxnyaSs1Y5fb7VSpBK98",
  "key31": "iGYh7B4bMKh8QPBcuoxwriS7ALUqjMV2XAD97RwrBob7N7xkYs2Wt2MA3qDLLVoYeAbZNFHNBXeEfQk571RBGv5",
  "key32": "2oA8SLUxPSPFgJ7N56N4M597C6obCUBQJzMtuZGatRmrMYybcRkHg8bTYC1pnS21RwNcpW6A7yViKMi5iJ3S7j7a",
  "key33": "VMUKY99yoDTPHrTgnT1vfXFVXAY8aKmgsaT9a89gonb6rDHzpg7bFMrW9ja9Z3GQfGZ34N8iCMr8X6CncxeEERW",
  "key34": "kpj2BJQTmQrTdepmHeZg1tqNA7N9qQVDf9i5Mdocd2YiGoSDe6HZgcKGcrAEgHxnt9w2FtkRUjZbWRpuSr9QeL7",
  "key35": "3fbXtUuT8pFmqfTNfVFwz1o1rojJzBUsaHmrxymS74kRFxRnDzrJB5WGEcyiFru2rYE3XeqNB9RX1d2bXHBB19gZ",
  "key36": "YKpYn6BkBJ9JXEM4jV2zxe9qFk4pr1S3866LeZuS3cs9SacFGxr3HWiq8U1wEMrV8Wv5CZnud8j85AJNzrxSGLQ",
  "key37": "28KZ8LKRGWq8Ru5cifkchmB2pxkpM6hsUmj7eZ9mDgBiQZyAb47zBvQoBnVCn63jmbdnpfC6YuX74Mu1D1YEoXCx",
  "key38": "KD5foCUJReorq9orn6tKdoEqv8jfScBLcQQBiRrjyDkFKMLocuurGSQqDpbeyjaR9G9D8Qe2TG4Nk81uCAZe6eZ"
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
