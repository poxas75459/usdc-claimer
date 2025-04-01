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
    "3hD1KBk3EnsVLt4yfVJJC18vQDQCEXbm82QH8ABqtEbprqyfkGfERSRmgngScVN9oGPFENdASeNmwPsReet1t1En"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N3WHYSm5x7ogLXYninzTFXopQ5Z4jAfhp2k5WU4qFdDyioTp1mEr8A9ZiuyvBRy5NBZxtYkYs8JpAm9wk6ozs8z",
  "key1": "xPvHpVWBBrwevopugxv5qryETbd3drsmvqoZDGZY46FRrHwnwL3e2H7CGD2KfCvPVAuueNYy6R48nLbHobKHNUQ",
  "key2": "5HTLCjRhveeSrfBHZ1bznyKJofukaHQVuuVb2LNTFxLB7Grkwoai8ru5gy62ctc5axbGS72CxcWZapnv3KjZbmUr",
  "key3": "4hbfTou8X6uHD6cR7WHCogLVMpUUDnPKE9LNYD4JvZQKyafdHzkFTVdC7C7VD19x2LH6WkQqNCRaxK7zdTnadgix",
  "key4": "8JVe66rdUrVseif16qR3NpcjBSbTLpYb5DGKy78VgqKhsJiTTrMfMH3TcTR4HSk6EJ9wStTT2ne77k6Le4VWHyj",
  "key5": "1V396BujPeS6kW5d1DuBMZnDb5HLuPYgqGHPRPoLvLVKBpfkrLbHfLAnXPBa66wqMHS2fXnYF2DWbE7dyCRwv1P",
  "key6": "2hTfFUoK4kCmKTHNEDorWkapmvhs58B3rBkgcLJqcJQaVd1sqYpNgtiVVhqwbMcH1SQkCcWj8cc9wkzpqRwcuyK8",
  "key7": "3rQnUHdV7BGLia2BQS1qaEueSpemxXrGkPAVjuUigbu8fwxMfUQTKhPXhHLgF7frJon4Nb8sEkoCeLC3Tq1MMM2w",
  "key8": "4iW5sZmDACFdnYJyarQMZurWevjEWmhdHAvbbsvKuR883htMdX9SmMMbpLKso5LZV8e8FvWAECL1GTthL7tqnCZU",
  "key9": "3nySo62D9dJA7Rwwiy4UmDds3LBAxvR6Z6UbzY2rjnmPAtiz3uPGg23Cri7kfYMiGz7Mpzus7bbjc1iPY7jhcMBT",
  "key10": "5UVBnUNg1hcFztiC8bGDAXQu9BoBNxmKkHmUT3BoqhrU7Zwy8Pk9gtNvtrT1wniWiCBCkBoSTivd2MjBooGx8GMW",
  "key11": "YWTSCaAVe7TNixpRe7nZsFjqPC8gXVnbaYXh6Bf3T6KYwNXf8kqSWvCN8pTLTSf2ZGMHeqG6yqYumykBgFhJojH",
  "key12": "2yHMQt7fwC46LYYmsw2YV4XBpqqe7MgQHf7LdqqDRzyz75tHAx1Qn4fKWEuY8ARS2xXi39Ny2PS7hH8GMmBxNHpf",
  "key13": "uzhZJtHT9ieh3hqUcosatF2SWcCV7rpt3HEmDkk6HSEDMh1bc6dFZ7pgZ2V9dzVbrwkS8vNheSHn1Xj8v8gnUkk",
  "key14": "2qq8c9eEPdaRzwcoPTjby4iPxx3TXgDCwgQ9dd21vVZcm978JkeTsYz8LuJanXC1ANBnz5FEgba8AQb5YS6AJWhN",
  "key15": "4oHJTmw2peThT2LTDKYbhky4tQoGZz8uBddt2AB23odVUSbbRAspCRVENfkxqL8JiXBoSc2R2CkNCzzqWK7yvgKN",
  "key16": "4UeH87Q9QvvZsETPQjsd23EWsWL64qsAdDrFXjSQNAxVbVq9PbXjj51Ypseea8jK5Z5HFpMteJsTUD64BTLrJwto",
  "key17": "28wYL3knCitHC3WbkoAJJxUCvDTfJTaP3fp9edd1gyW8Pbk92fsVg5L4KUEgb73CpQGKdB6RCuBmhiEE4rJZy4CN",
  "key18": "63dgbMBv5HckRfUY1HByiTEHqwZiMVmFzwTYujQ9uBf9DLEGHKbVTqVgprwwfWR7Mkh2pRSQUeq58ypn7QK8dXZF",
  "key19": "5HGbPkLGjFDkuvdAo4fhurzgvcVS7RMDvie2fuiRuJ1mpoHDVvuG7uRGSoxS9LG23vzNnkhWDFB7RJNqNjfyQuba",
  "key20": "28Aukt8FQ21QcSN2VB3bXVTrtZcgfzr16n2xCJjxWBPWmMUdWqbbwkrQTRauSZYLNx2pg64wZjLuzASQiNNVHRjJ",
  "key21": "3p3i7tmjQSLznZnEjpAvYXKK1qyY1ENCowPVS7yy5d9QRcPuv6zpZ7F7hkdDwdnAZMz5V24aTqFB2vTa6pB2TTtt",
  "key22": "mSWwf3515hqNMfXXshi9fX1poCKTxKw5jS4onA3WXqEANpCDJPsktG1brd8uphUGQVs8UY1rzS5sFWeqg9Rh2P7",
  "key23": "2wPrTkAUuzzsg1zUhmG8QpHsdXyb2s4je5PjLQezNULRBJVjek4ZwkxqPLSo3A8MYhUx2jM89hSEP2jpe1UqKqF6",
  "key24": "5jHPqWdbaaG3sKfkrbi6Mt5kvQpzVzkLaFUXYXsFY5A8g4yqdnSUSQuEdG62QU1s7qJzfhqwZjCwRZWU7gEKSPSQ",
  "key25": "2AUYwqXrqHb2EosBTbpzWaX16d3bigewZJuRatyBqSX5TgbGJqEALmgqXR1XPTrnkMCPzsxjDHSteWaCxn6Zu26",
  "key26": "1HTBzBJLQWEhYSqMTANMC3QYmNkMUSwtTVJwYZkg7vg3dtUtfu2FbQb1JpTvt36PS4z4nyMP6N5fryYd8D4W8EW",
  "key27": "62xVcy3ypvGXzBvfoqKrVsabtmNRS6mUp3mEFguryPWRbKsvYKAUr89NgXAoxSPu8fDYdcBZBjfVT5fSDRDfABHh",
  "key28": "5oqkkwVgSEMK3FUC9cveu5KgFw9PzjuJqdWewh8veJ7Kpp8fzrS1yAjnfTsS8zaQuutsT9x29DHnDCt54Kq37U8H",
  "key29": "4wxvbP2KZErCWJnoAJcn99cDjZTdRJMV2K4pEqSbRVLA9VQTbU9iNwqUexYFTFdavuZkvJnwVLRxLsukCwHhUy8N",
  "key30": "XZbbcqdtnTFkLcsEsJghEWG3V7F5ZWB7GmmGMBy2wbrT5irE56PwjHJEXHgGdn3wvKdE2yA8YKCE6F2X5CTCeuz",
  "key31": "2R2njhLxWfpMzJ8V39mA9JePumvestg3JzK4YF4rzVMaxwMpd5y6iN8qMaMMGwKTspxaGR98DJvRW3QbJhD6zQEU",
  "key32": "5dNFXhB6HTP7R1vgxDb8QN9Nt2Zq1ZPDQ97ndaok9K5fY6jpRWmmZvAgXGGj7ZL1xQKKUHDsvtJU3NxUW3pyiNGR",
  "key33": "2ABiNydmwgEKkN7T89rJKuzuGgaBmvDfrrgPQ9AuMaPASiskQzc8VkU7Cp7fHq5Vo2Lw1NWqoTeNThfdhokDXaNY",
  "key34": "3N5JeRH1Cyas91uzS7L4qUUfvgA5JyfHSCX3EVbeCW8A5Xzg8LCaHPCsRKTwQhVWMwsmTjE4rYmpXz2HGGoErJYA",
  "key35": "3NDBXWBwz1LkuWvQ9ZQwHx5wen1f7VGiY3UJ5LATrD9FCwVZTKWkdbARctisaGrNRUzTJfKNTTJxAa7nhTf61oGj",
  "key36": "3XTWNSPPeygDzwDjuy6Yu5ckRv1UCrXTdmvmrWQtE3DJCitQxwFCSgUc7vh1pkwETwkkMrTagCQZcnYcoqNiy4d7",
  "key37": "3kQt77RqJyhiMU2BAdq7FPADUZPkByWmAgNfvAgXwSU9YBKdopGmAJoCisUvDZuuX7UvEqk3dRX83oMpGRHWsnrN",
  "key38": "3HEGBQ8zK8NNhcf8ipuhkZrNV7AWeB2PDxPVfLaHCeqY4bfG7Z3tRAeLB6mHxdywg8RYeoH9oAKrtFbskrxUdZAh",
  "key39": "3XLX9hA4GBZgJ9RrXzki99moSwoCETCYxGpoXgvkBk1P4ikRiMwPGzZmbkZkyy1TaiQ7YBo1Woetg1yx5gh4sraX",
  "key40": "2chMXBXJ7ZzWHnELFVMt6rMsXcUW1N5qfHmLtYFChiJb9BZdrfsAMiLrFxKvVthSWLXPMyzDtJZ86TXmJqH1GXMn",
  "key41": "2nmc7fNuVJhxzLFTMNC9myw2R9s4z5odnvwiVEFdqVzRSVPNx3GfNH7DUNurQkECDLqEmaLrgCTon4p8BcdMGmeP",
  "key42": "2TFqQJ5JfwN4qK7ujfSxsA8PSHW2rMovQrDA3fNaHqVaF8jSp9te5Jsxq2T4ec9BUq5J3CHipBdXAvGieqte7mY1",
  "key43": "3WS86xDpci4bsoAuBzxyEq3YBidfg5mnBT3tLNjfVJniGvhfpAmyV9dtowoKqA8ombVNK9CA3D9KaV2BAGA837Ag",
  "key44": "43aWCVaL5PaZHTSefNfJEipYAnato39X3Rb3Cksu9yfX6XxMa1QUHVftdLcvV1LPG3ZnZjwJzMoJBBJByhPkqmki",
  "key45": "4nAxqmfunV7MaM82A5DAjJuVBhXdpqCg3qrR94nUnECsCFghb2cxZA6k8pHogYUK7kompTKqhFTd14iv7vLkJL5G",
  "key46": "2XxKbd8tStKdHN87i96hHBJgL7MeaDUrZTgQo8swCLBMvspA8n4eNPnDeRtCXVTMHwnmMzDqAJrf59moeKbqRLAs"
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
