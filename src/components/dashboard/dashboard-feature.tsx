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
    "29V8A612YAjp5VJzEkgYMRiEnhDCkgDEAC1LYYzp7SVqNjkYyWxYssXpKZRphLAWhcF5zQ3XrbqVdDmHgGchZbYQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ivovjbeSnDqTMjxdtRwSUhTvLR2hjQdwpsJ65XQS687Unn8M2tkG3k4qR2pskS7prmgzWniMyZRoni5Cy8AXvkk",
  "key1": "3cZHa7rwssZy7uodsVMmGiSgsZwViH1JzugURTuoMLByWpHLvxaq3yH6pQunZEXMaYb8gjGQeVBJLKawAKYRbUH1",
  "key2": "3b3NDHH1hPCWaCEJzUUuRVtS1h5gu4qGhQAeaXunkYfMQhRLUXPcKXxmHC5jyEgmbbiSYSVm3LKUE2AWESxH2Smn",
  "key3": "5Md61oZtjnwZSfjNSfqgcb6GaRuCoAnJerLYz9ejDBMBwu2aNW4opkM1BL3AxPkB7B5MbgAjjNA8ahU3Mpui5B6c",
  "key4": "63iNQoQdxgzGm8NnLv6D1v6u9SaJJpoaFddJWe8wBn5jt9SAh6UDLX8wc44k3aJz36ERyQ3yHUqwHwAfRY4T2ZEb",
  "key5": "3wJ8C5N5F5qTrxW7h7BfoHZD1S99cPcWku5VQeCgJGakfE5Rub7iT48J9GLew63yX5ahKcw6dNGHvSeKLyXenpx7",
  "key6": "5QRfX3SyQSpjFahanWKTsto3gxh724StaeS1kd7XZr3yGnXuuRpZfy5vmeJddUrv25YbTmMpuaA2jUB1J4r9Ec9E",
  "key7": "2bBoNTLKbMXEDy1YHXU5zBZC74H47B5ioH9ijASNEqG4kMxjmY1bSgKuWyzMTuz757yv9atNAfPrGcVPKEHADV4S",
  "key8": "64eDJ6zpSuBnz5fZGnRaJzns7u8R5ftriXz6kN9Uu6yvujqjycCd3mTq2p3LWG7MtpJGKbyj9zkbLVLfpuwt4hjK",
  "key9": "5W3fGnSKdHF4UaKpPLpmHVooNbugttuF5j8pRrppgxh2B1WvemiiwHPgmGRVRb4FBAQW3fQTs33nd81ikf8ieCUN",
  "key10": "36vDh7xXTPPJ8GDLLEkjbbX7dnQKGKJz7i2Sw8XW6D7SE1WFFCWsPshSiocJvNYS2S5aTGfrqfhm8VYMiA5Los9i",
  "key11": "2YnD7kPgYTeSkY3RP24AcbQTvmpnotHtVgZWLg9tUtNUxFfC8NKytxeMKBKUteWRvG6YZsfCCr4fT19vmkVTS4Fy",
  "key12": "ikxdcmwUc4yBH8xfKeL9uLgcs39KBdGPmuHteu8zCetax5yBsxki1wYGa7bZ7YKobWgMb3R3S8ZA6P35L6PBWLH",
  "key13": "28WFF3Jb1i9MQhhRymbT6ULput4DF9g6K3f8XszEiyrvCSDjPmHHf4Ki2sgyN5LSdGdDNU7JSMR5r9Qh1K73G4nR",
  "key14": "4NtpDS2jwRVrQHhnB6hfUEQ4xehUGxTEbig94bdXhc8UajobPqKo2QtCa5G7ZyjeV28oymmXDxW3BxXjtziVt889",
  "key15": "3CRZNprS4ex7w6vazWoRDwhnoMNcDZLYiApHQtz89nRrqLShtEFKkrpegHNQDvaPWG1Lz36hbVxyHmtDXChzEzib",
  "key16": "w7C48KsGgZRRZNxPKKm7PtTfUFzX6b9kfnYV9JDWvSY387c6irkYzxKLmm8J14BzZm3xfCWwthtE25gdWWR5QqP",
  "key17": "q5qSiAgUFh7Y9tDh865xGo2vooY37rAcSkkgg329cJX2D82ZdKoaLqwohSBby35UWBkd16ZX2F6hBcMGue5tZ9P",
  "key18": "3etNgTPuVp6THnERR3kr96RKSMjqmPyH1FSNE68s8Kg9i4Kxg6CHsJYcv6GVx5Ydmpcw2MrE8hreqcbQnBqiu6k8",
  "key19": "41HxMVWwGPeBLz94WDVe3oTAnNUuUQeDxZ3NpKZvU7VjcZq8TCrnqPPUwggB2DS9Jrx3g5h7zF73GWwt6pxtyZtq",
  "key20": "2BLaGcvJfPhZm7QcACMVvBZ6jkWAodZHome4iB7NyJaq5dhcxzi6GBLMTZR3tjwj4Kvn69hbTzR5wF4YcScNXWFZ",
  "key21": "2YjSFCsCtsUW3tBp8i4hV5jef36caJZ6uWxBa3sazMv1YAfWEVS3esW87U3bfbaRUtSqLxtP3rvM6T5B4JLQPxGF",
  "key22": "3LzeCugRd4ASR4vJgYVcxkXmNakhrTsFgvRL19Airkk28dTzMZaNaJak9PgVLG9sgNmsvfmD5ntJ9EssEjUsYoqA",
  "key23": "RnRsxkBHwrTkGwSKEywAMVoJbNGFqbMrP878zD6wov5oa5pfa8mcrtLN7cZ1TajfFj9ri4BbStJb4xAQzSCh4uy",
  "key24": "58mEW3g2Z3XHjDBCun1AZkAoWXErvZrsyxYF3FvqHVjjud75fGKTULXxzmGearGsobLcDwuMhxEmpPxn1bqPJoQt",
  "key25": "2n6Gp7xxWhTwjLEpRvtM6nPqP6nCv2sW1ahYb4qqSMQteqTLMVbZV5Xrf2evow22RWCB9zRN4iKFHh2aXgc4CuEh"
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
