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
    "3VPMu2EevwqG2RwB3KCV7b1pYxWWVF5mqsiYPcGpWv6wbreTgPbZpsjKnpNB3xqEZ5AdLqMoRLzFvjAxnARXXuzN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Rbf26SuSw2irSF5RqvPWCRXqyeQUwaDQm25PkKQms63UaA9jtFzyufb2A517sushbR5MD5KEQEJz66un22u1S5j",
  "key1": "5hyDrbiuCuZuy7oN6icnzegdiyHwYmVjopPKJZWZS7HwPJupSVYefVk7yLrUy4B5gXg8QuoKv4SzdG7DEQ4BfLxH",
  "key2": "2g86PUmNsx7QKAZGWNAP1SaSypA23sYvr7CumaJ2jEMsaQW1ZN5THhprqRZE5yaSNB5sdFyttxAJUiMuoC5ZdV87",
  "key3": "vfzF4oyciBeqXmXE8wvkvBWsCqhn4m5GrSYxreaEX3q6qhPre3RHuhvCYh5wnfdQtEFjACiqhmm4oesjLNnjrKp",
  "key4": "3XmbHxCNFHN3im6muzAA3uxpa4p2F8wqzGNr1Uqrdputh79GdVzQCuWFjVVwrT2psr2TbAk2XNNY9YHdFFBpMAjt",
  "key5": "3H661DMJXmDYFLeYwrDTDQZjMYnJN8f4SWBMaLoUbgbj39EErKPBS76fUaQBuTsKUrA8SdLxHmY8thnKiDHTCuh9",
  "key6": "636VC3NRaNajRcvLTukX3TfNHVoPrXDYfJDi7HeHsYYianMT2aPPL5cZ2RHgT5kqRanT8qhbkKT7u84nswz8zo9S",
  "key7": "2H1Xpu19ataqy7YBQceW2yggAAgUwCa8VqujzJvirn9jSKsVj7nuQgAZJ1D9BWso6VYxG9jkJmwmQnqfbzMsDHuH",
  "key8": "3qN2qtBgLFjDE8Dw6GPUitZdyjqmjHUfvddS4knb4i64J9BgTzpm1rCMUHXhzW2gfSNFymjkucKCyRScyYujGcZR",
  "key9": "9iAXFzHW4UbmCrKe4SiQRW7Lrf9DLAnpnYJoqNp5iKpS8Rm2wMrz62UKAXEb6kMtsFY3jsz6DjTujryWUi3R7Vs",
  "key10": "33pgkNhmBQZjPCZMRHF2G6te9aeR4NJuUfG72Kc11PEuiCsLDhHN12eWDAYCRjEiT5ej448kcuW9opyhr3MXJFw7",
  "key11": "39QZJWyvFXi7WnKRnXpjYrvyB8AksATZaAnsD6MMLp7zKzHBSbjQQ9iiHVkq3p4HRQoUocBkkaNyM3iF5w1z7WMt",
  "key12": "BDRAYSLMrfUypwvBN1oNDpgPkJsjbLD6yty1ohhrMLyX5GNXNbxcdT6h3tCJV4jvCS1MtVWXm45LWd2SZ9KCipG",
  "key13": "b651zKKGf6D3qsGeS85x47Y12enmrveBMKLXn6jp126Ga3gpJdUAyf9wtn7peay8qEP6Ukkja6vxpHh48xELhJe",
  "key14": "2hMcqAvyCHyiiBnYR1ULFYfru4W8nzJRbfDQJTev3imccQo4YTgM4ZpRKzcnXq2RyLRj4DypFJWKZynPEvX49Bgc",
  "key15": "5BdNrsNUBYRRW7xYi9Dx8AzVsanr2Dum2Kgoy7Xh9H6y1gqnwAtRAFFsnF6dcFURE5sR6veSPGF49M3U1HS4KaCS",
  "key16": "5DEq6T6CFmPVMiK1MSbDu59pho4myVgo5qAmFUzyAm8MDddinjYCxtQgU21MKC4rDponjUV1b5iu8GkQAzvdvvn5",
  "key17": "2EvNastzCdqe33sR3eXZFxuwWNHhY3PMe2XotJ81QvwVm833oZdEvjsauPCwyocxe8Hwbn9EPoMtcETcGcNKoaGZ",
  "key18": "2VC9hwUXjieyvrpiCv9n5ThkLcC6ZYBSEt2ayHfPVrDbAFYiZhjx8gb5K4RsEm7RJfKW57iAFGLukx3GYKbFMTWt",
  "key19": "5XphPeDzmEFJjric56icc38bVE9DY2HzXRSEYsX2FPk5oiq9XkbaJnMK1yZPYymd2Axh3RVJeedDZNkdStKnBunc",
  "key20": "cLR5yV5ea7V9NDyXXLHBtYVZapctXoWtju6QVSex2stvxL6PSg6PBRsEun3Tm9wpEXcgc2xSYzBptnUtkJ4rUBC",
  "key21": "3d5JjXV4uDciiegBGGuRN4QFXbA7xjFkFYcXx1RSJ3gQe8Ly1WfwxgAewQJNjcAoSPa5F4tZpuXyF4KLpj3T9onM",
  "key22": "kvMVrDDSaKy3iWPUJicSeoxhKXz9kysiN29zrCQGXHQYH2bvRMmgoEc5vARUJKdsLGHv32nqPckb8WDQJqhKftA",
  "key23": "2PW1roXerPooexGXLzN2ziU38ZTDnt4JppmdZaEnwGKmUbSwtG8ytyzkcVzCxxcxWUzE5VkvaWApo4PeNN2pmHWe",
  "key24": "4VQZgiUbnxNY7N75J1BFCv3jJcq74hwNt25Zgg7Ru7Xet1bywQqfkpmiB4aZUu6kNoRUXrVCNCsxgBUAZyaQ3PKD",
  "key25": "4zY8AjHUtKLF4sCRU6ZrQJkDcjDQfSteJzwvA2mDixsx72VqVSZgJuz5YXq1jwSJ2EyfujGtT2ZTqfBRdxcovVML",
  "key26": "4MifhkNV82iWSecR4PQs1y8wadGYnQqoL86Wwfq1S1eMTRtzKkU4fM6USNRhfTM56iNozYbNphrGRo5j4BipyrPF",
  "key27": "5tJUrm3yc5YQ5cELzBP3jV8o47S4ywwEuwJx8GozpyWX6c86aP6ew6tKkcJM2Sgb5LqhzgnXn2VU78dUVUj2Rtbh",
  "key28": "4pYF4tpf3tyaEwsqqYibY7xQqbBUZtGiFqBWzsUvi8HLi2f4S8CWgdKi7Xu38wGDyCDFQNLNXooiX4U6XKEntNPw",
  "key29": "4KzRwiRK5kUVdN3cy1HZJbSEDChXbmwTnp38z3QWuJ4CxapBqx8LhRqyWsB4rhdZeujjKByprV8zXreRcxsoZWiB",
  "key30": "4wkMiarZxURsxmd15HnjG9kWazWLZ3ryd75ZQ7udzN1aJt9rNzqCTTo98ojVWrgfZn4FhuhkAhq4bD9ibjvnxeqV",
  "key31": "5yuJfTjmgWrdBhYqhwM32tSfJffGrYuui6zMQdoYGtbSHsTqtW4ghzm7evi1hnv4pQyxdEAFLLcjQ1jcJYXALSN5",
  "key32": "5qhh3Kx5woXK4G6MduVVY3JF2d6RF788H6gzFXaEwdbqh2sjz4sLH5bCMcgTgqvxbf8ryQk5kDTt1i42aPBNDJVf"
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
