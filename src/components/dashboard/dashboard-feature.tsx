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
    "5sKQSAoW7zeeod2jNtHikShziwb6y8f9trZXhPmRb4G68KNMhp637ViiTjc4CNrTV1V1oPHamLUmZW17TJsa8VjN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bJNYpTQ7ao5vz3nMKfEf88EyRQCryL9K3c1Gnzm1gAfvUNvfkv2u8FNXaL8F9ZVwxcSzCyskwSA23GAGoa5mCCp",
  "key1": "3CiiRPJQRuiyyAnmVzk7HcxKCbQHwqgvUBfHSCbzKEFHk6Ucpe2eJHqhzcCZct2MXU8jypto8WCv1nMFgHFNEyqG",
  "key2": "4RPDGda23A1qu5u3K4cxxMX5QQhQaWCFzMfPsSFpMuy8TvL9ZAJZsq28NWq1zmiLSPtCv7om9pzC3jkJTA8tr7bM",
  "key3": "2R22Em5urF4iYomd7YfamGgJWBRujJyFzScbmmRbzpBjgCF7AYokE2HEZxiZGyvojinpZ7u5tGb1SVgrDZX1B85P",
  "key4": "pFXirdXN9QBQkS3ZKyqSk7Q5P6Zbbvn6X1EiKgraHwP87L8GZs3r5Xdg23KhAhTa7aDtHvoinQhAmjSmW4bpLyA",
  "key5": "5WVE4godFjCqkj3PqPTyhDW9rqohban88tzk53NmsdcESxBeu5NYjPVuEebEpc7ZcZgrwXQ9YniYVs8Hr2AGwfTZ",
  "key6": "RUNRkhmP8mm2E8b9p65urHEgGXj4LfiZATDVPw8WDNp5wAMuds7Dgx53h7TU8FvWQjjrKLrbfKpevcAcpcNAEtG",
  "key7": "f5Qiddqkp8hykhtCwKCv3esTg9t962V6b5egBmqo662mrME9aSQXjdUoyR8WtRYmMhCsL4DnZLDqYBHv7p6tSsn",
  "key8": "2uGqmQ6mpApFdCDDUb1xaPJVUz6xhebZ42eRZJq2p7C3nEBUCkxiauDekdJRqAxc8qU5L1DULL26BykQe5pqEkyy",
  "key9": "2NfRdtt7vcVAhHKy7GaEkbZPGp1xZ9byn1nWtAQUKRkivE6RNU5APYRp2BgKUyc2GuUQQYtKB62sNzvCUHGoNf7W",
  "key10": "3y1goBuctLcSvwpwc8h9g4VMxjyjebmkQWzkWzxMje5JsnJw9NkXvJd7AvcyHNRDikmbNc9Jf8tsBzHpggEhZg3p",
  "key11": "212DifDSE9FVWZVENKHCw4noVfbGCxXfMnbk1yyXGDjGt8ryhBp1Nwd79p7d6u9dH87Nn5Qx5DDaGhzeuox6TT7u",
  "key12": "2oGQZ33uF4yhgKZhT3m3gcwGBtcDJaEEerW2hnm2Q8XfxdKzwHY6fUVpsb7FKkuYJixSRE34m13F8xr1tVGF2CSv",
  "key13": "3Y37PDNm9YsvLNyoNVxZT912TZudJbc2DkW6t9BVa3bpuTcj75xGZMWdgK65VHHXus1Hqskbgo2qxgCCKua3cVJC",
  "key14": "3z7sNPUu5bSYr1RXXt9XXv9PGnuP471C4sn8cjTUxqgJ4vj8abtC68NpbkkPg5vdc4HTA6Yyuq8JJtVYi5fFmv8b",
  "key15": "rTDUCrbsXAmtYKKoSiGeqQnCcQ2xDp5VYzzF1VVW7qS2MDhJeuF1MB2sQjbWtRDWiwBRUhCbHK5AMW5LBU9y7LV",
  "key16": "33Lns5nswV7fbVEGXL1JtTosTymqaTJCfswGZC7JDF95obFM4PiArak65MYdrUGepeYyKub8MKQhqBh8trrdE9Tj",
  "key17": "2YVyqtRH8WBVMGM29EzL7iSRxEUDQAw26K9qBG5GKc6QDHpKWMaqdo6HUYFU8bskxZGXP1uxeopoUx4wm5UaDqz5",
  "key18": "5qeKQSy7zHkZY9fco1hWzVgsbCapbyH29SYmghWBLD78xtbBhKbXB38usBww4uXmMwvuMHyKSNSkk2C4gKUXLL9N",
  "key19": "3MDjeTGEaBr8YXfAJ8997tMs3UGsSoqsLUWWeGUngNtXA2vcfSe4rGnnu9p24uhdeu8jQPnrGgEhssgowP9wbVnv",
  "key20": "3wyfhzrSDnnzx4adSTc9jzwQ62cEuSgKr8BfeXxouis2DAzAjNe33TdB6P2NCRhXFV9GZXV8hkmkNrKdtgNsDm7a",
  "key21": "mDqaDxKNhw7MgX6VfC9fFgGFVY6ry3eAYvfM9QBF4H97TvBS54AQEP1Ew55rZBw2H8BwwuwinvKpSZGrgNnuxh9",
  "key22": "2qBYxCWDwak4UT76rsBtsmVo4Yw8o1nmSTnJ3GjR2poPWTeREjt47ghCcu3L8AogP2SaHFrs34aLKE23pm944MSE",
  "key23": "ZD3Qm9rdYAfUSrFYHQy1K9n9ov7YMmuWFFDTWyMLczUeRPZnVtjAnc2B8kfdWTCrvgbwDjYtv1CSBGcJWctZ8iH",
  "key24": "2rD4Q2jBTUXEncw2LUzdGfBFq7LtRZo9TPxUAfipSwUHwVj1mYLyJdxWP4dDcFicmaHRQjabeTsEMdvrJ3dpyTZi",
  "key25": "2dG1oUsy8htEbFyqyvtrzLxkjet8x8XKaob6m9X1XBDQHFweP8s7PoSMPpLgXDv5qfQABTioZBGTUP2eWUMTbu2W",
  "key26": "58KH9w2vuzLcEM5gaho7ruWcxBXhmuYdoGuTJMifqnmX4srP97FUtfc5oXaNrqhoEDtEdWS5iKz1rWyTAdzNBoNY"
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
