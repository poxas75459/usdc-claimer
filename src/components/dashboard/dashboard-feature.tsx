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
    "2CXN9EHvdAr2sYEY63361XQBAEn2rAUSppmLfbpC3TLcTgi9kxoWbpSgQAyEJE9DvproG5paQdAj3x6yaSmWMUo8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PFMxbhJGWsqNahg1S4evWmx6rxSPgfoXE57z4vSK4uQPWSQHdghXhay5DFrgYw2SuHhdNnX9JJ9v8aZBYLuaFBe",
  "key1": "42Y6vq4owRQ9fig1cnLm2hizuPjW6hCNe62UQTc1GimEagPsA4kJ6KbcXgHvyL8ATM7hMgZvd8cD7PsfL8F68xDt",
  "key2": "1aEeygtHnocqWYXpBZLTJLszL6TqKmBZbmDFBjKSDHC66G28hnNftS7xCm3cJ7vbcwqrSmtzc49PA1hPsPovGps",
  "key3": "3HCrVDrVTqMxsTnkfZAtYosECBh2kLyE368htDhGYQ7oL3y48ajXCSj3rVEyVNMKwhxLmG2W3N6i8o3c2aBXce1x",
  "key4": "4Gyef2L8MWSQFFpSFh3yojQWaBCFjqCzdd3WQ6cXXKb7kV9S4CZXimiGVcgbTWuMbbq1wbLW26HtXTXUfHkhhKRM",
  "key5": "At1EjDCW7uJKp7svyuRM4KiZvYVk1VSNFAnQgmSttHJxZXHDCYZKUeYNLZH5LrGAxeZcYK2LLL8bnASjKCWc9h7",
  "key6": "25h789JZ2q3bYKzS8XudkdKJ287ffGbmao49mFQzpsbQph7e4hqfi6tnTgyM5izgUqzws9689wwNjfG6GJL6qg4G",
  "key7": "2XHANL62oJhahnpqijUfhhPVfzEApugpdkKgjiGVr9mAN6xn7ZL61zWmTqnBTWPuDkAfuJDKVSTQnb2o8GZSLmfJ",
  "key8": "4MgFZEwkbmKzZp5b2EEgV7V8DQ8oCPBtcgtkkLJqnTjRswsx4jPmjbLD7cPP1hY4gWgtDmhAN8JiX15e6SFCprTM",
  "key9": "2vNixj8zbRQmDT1YtfiCaYUAw63BVF3goNxacrxdjHVA1j23bJZrRW6qAcRX5R5ZYgTGSsLseP4BYa7vBKu5Hd1c",
  "key10": "TMNyZXZpVQUKkr8EPVG2LcfGUFo6A2eZJqSCS8hCH7j4QhxCjSTjaJoB6MDiWwfDWjKbHeLdLWhrUr29AfxfXUN",
  "key11": "Uzi5Cm3kENgJY56CzQ1JkbueTC1VFZdEPt396RX3pkkr8puNx8M1nBwFoDcydW5Ed85fvDPrDdVEmLoKTj9vxC8",
  "key12": "3MtFFPXVe8Dix7FU4WXHMMf8JaKxoZzfXoLcFEH5YmQzAE4m72i7cZEMQiGCp6Sj8FmQABppD6nb6qfYPQagvyHs",
  "key13": "psimrFgcPY5RyZyW3ivY73Ur9m9rvhDYj22pffK1US2AWADjw4cGjcU53ZYmcMNRgNHMAR8oQaZbQMS11dfdLGf",
  "key14": "5R19aHM2hEkCX9t7A1AZUzDULKshZQ8B1vLJc5FkavbN1JTJ3m3S1UkBNgJmg8816wDUFdEo67237nJadwbVTxpp",
  "key15": "Fhbn3pREPxRJg7kbBf3DRMKQ9Uwpw4CoFrjuW4ijBZcibYZUz8ZF8qNYZQ7EoCVqxiVqJU6Ae1h4h9GHWuxuXsg",
  "key16": "24hm8kzmsse17VVwPbtfJZfzJxHTjUBhYQNiFehU4X6MfQgKLoANV6xSWhAMMDbwNNiDwXWqjpCUQKCkQpomWMz1",
  "key17": "4CYGb6kcBa7wxyJ1z49TAxhZLPsvChEBvYTxZQUxzAvGYKFsfxBsCkLNDtjThvrgxsZcm1LK2ioBM6D9JfhFfUSS",
  "key18": "jigAQhbuhCxnm9DtQGizSdV1bv9weSHaJSoSwpU5FSSijEYeFAE2EfS66aLCWARE9LuiCZuu9Kcc4XPLT1Z4ZLj",
  "key19": "57CiFseVtrzMSgsMKQfRyRcG2aSNNqrs6aaeynAZW8A2NH5pLKdc4sJVKi3FtMQJ3DhZ7ymi5N5BAjLsEE3t59e8",
  "key20": "5LwtQnQZRhwruo1DsuX6G8pbYWaHGUW6455fCozpvUHtZpKJ1Hn3jJmNDPLTqvaxipR7ppBqDPii18EdoxA8j5qR",
  "key21": "4Shv9jPKAK8LYywezCPMjLiMm5FDyXewaSbY2nmFBdVnG6ucC8E93vkoewwbn9RL36G6tYCyKtMpr7h5X1bQr5ep",
  "key22": "5CUSuXRaYWGgvmuoc5JErPj8J26cmJLg8kppBTZTMztjUZ1XShVuU9Fv7TLiRiUS1heqrANrpx5yoKzxzVJeWRwn",
  "key23": "4g5Ly7fjHW3mtp46iDnqioKmLfAejteEAMeRxXnqxvybd8ajgfHQK4D4HwTYTZMn5dfYocWprSPfMupkxer1ZJZV",
  "key24": "4s7F6SBjMbRXBQk5W65Fn8y6LR6fRTyks6KqLupQJ6f5Uw9ip62SV41RG3EDWE5PfwkBy5HMi4HHyNbXbMGz6pRv",
  "key25": "3fZjLQ2qJNpPXhoepipDocJLdvAneDvk1QucT7wTD3fCyawr4GsoHATsapQfBRVcbSEgU7Vz2V4HqhXEsGqGSeKo",
  "key26": "5U9XhC1PbAw33E1kHQ5ycDPNXwAsEeXxrSKuWwjgnNJXp1kPuaoNAXJViXFkrkcsCBPHCBg6UCj1FsaUwzmSCSJD",
  "key27": "31HbH4mfRXPbcYeP6TuvkhwBsg13gj5yczEmnGCL3F4BHbRaKfeRGqwRqEHMmvhqJNwerwnEfzQjXFWxofiRnVBB",
  "key28": "57yfUXjLGcZDDGEKrazp9cQ4gBcJBnpQmULQ9expk7XwB58E8tkp5BzUNWUXdDqQqWc2ByGhVWQ7EAduTqiVPBs8",
  "key29": "4wpcHSrNHABfH7Trv6wojqMkXLhgwhw4oUyK7wfDZemED2sh4qYxff811QXFGjxs4mx3eed2EgPoFRHSsH62venp",
  "key30": "3CxcxpzFhKMEdLTcHMmF69ubZUmQuVrVRKHtjrD9y5MLXZrAusVfCMraA9hxdrtNqkfwtvecjrQPVJi5GtYcpZAC"
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
